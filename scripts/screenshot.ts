#!/usr/bin/env bun
/**
 * Page screenshots through the Chrome DevTools Protocol, no browser driver needed.
 *
 *   bun scripts/screenshot.ts <url> <out.png> [width] [height] [--viewport]
 *
 * Full-page mode scrolls through the document, captures one viewport-sized tile per
 * scroll position and stitches them with ImageMagick (Chromium leaves off-screen images
 * unpainted in a single beyond-viewport capture). Fixed elements are hidden in full-page
 * mode so they do not repeat on every tile. --viewport captures the first screen only;
 * SCROLL_Y=<px> captures the viewport at that document offset instead.
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, out, w = "1440", h = "900", mode = ""] = process.argv.slice(2);
if (!url || !out) {
  console.error("usage: bun scripts/screenshot.ts <url> <out.png> [width] [height] [--viewport]");
  process.exit(1);
}
const width = Number(w);
const height = Number(h);
const viewportOnly = mode === "--viewport";
const scrollY = Number(process.env.SCROLL_Y ?? 0);
const port = 9000 + Math.floor(Math.random() * 1000);
const bin = process.env.CHROMIUM ?? "chromium";

const chrome = spawn(
  bin,
  ["--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`, `--window-size=${width},${height}`, "about:blank"],
  { stdio: "ignore" },
);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function waitForDevtools(): Promise<string> {
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const pages = (await res.json()) as { type: string; webSocketDebuggerUrl: string }[];
      const page = pages.find((p) => p.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* not up yet */
    }
    await sleep(100);
  }
  throw new Error("chromium devtools did not start");
}

const wsUrl = await waitForDevtools();
const ws = new WebSocket(wsUrl);
await new Promise<void>((resolve, reject) => {
  ws.onopen = () => resolve();
  ws.onerror = (e) => reject(e);
});

let id = 0;
const pending = new Map<number, (v: unknown) => void>();
const events = new Map<string, () => void>();
ws.onmessage = (ev) => {
  const msg = JSON.parse(String(ev.data)) as { id?: number; method?: string; result?: unknown };
  if (msg.id !== undefined) pending.get(msg.id)?.(msg.result);
  if (msg.method) events.get(msg.method)?.();
};
function send<T = unknown>(method: string, params: Record<string, unknown> = {}): Promise<T> {
  const myId = ++id;
  ws.send(JSON.stringify({ id: myId, method, params }));
  return new Promise((resolve) => pending.set(myId, (v) => resolve(v as T)));
}
function once(method: string): Promise<void> {
  return new Promise((resolve) => events.set(method, resolve));
}
async function evaluate<T>(expression: string): Promise<T> {
  const { result } = await send<{ result: { value: T } }>("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  return result.value;
}

await send("Page.enable");
// Captures must not animate scrolling, and full-page tiles must not repeat fixed elements.
const captureCss = `html{scroll-behavior:auto!important}${viewportOnly ? "" : "[data-plankopf-strip]{visibility:hidden!important}"}`;
await send("Page.addScriptToEvaluateOnNewDocument", {
  source: `document.addEventListener('DOMContentLoaded',()=>{const s=document.createElement('style');s.textContent=${JSON.stringify(captureCss)};document.head.appendChild(s);});`,
});
await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 });
const loaded = once("Page.loadEventFired");
await send("Page.navigate", { url });
await loaded;
await sleep(600);

// Scroll through the document so IntersectionObserver-driven drawings and lazy images load.
const fullHeight = await evaluate<number>("document.documentElement.scrollHeight");
for (let y = 0; y < fullHeight; y += Math.floor(height * 0.8)) {
  await evaluate(`window.scrollTo(0, ${y})`);
  await sleep(120);
}
for (let i = 0; i < 50; i++) {
  if (await evaluate<boolean>("Array.from(document.images).every((img) => img.complete)")) break;
  await sleep(100);
}
await evaluate("Promise.allSettled(Array.from(document.images).map((img) => img.decode()))");

async function captureViewport(): Promise<Buffer> {
  const shot = await send<{ data: string }>("Page.captureScreenshot", { format: "png" });
  return Buffer.from(shot.data, "base64");
}

if (viewportOnly) {
  await evaluate(`window.scrollTo(0, ${scrollY})`);
  await sleep(1500);
  await Bun.write(out, await captureViewport());
  console.log(`${out} ${width}x${height}`);
} else {
  const dir = mkdtempSync(join(tmpdir(), "shot-"));
  const tiles: string[] = [];
  let y = 0;
  while (y < fullHeight) {
    await evaluate(`window.scrollTo(0, ${y})`);
    await sleep(y === 0 ? 1500 : 350);
    const actualY = await evaluate<number>("window.scrollY");
    const file = join(dir, `tile-${tiles.length}.png`);
    await Bun.write(file, await captureViewport());
    // The last tile cannot scroll a full step; keep only the part not yet captured.
    if (actualY < y) {
      const keep = fullHeight - y;
      spawnSync("magick", [file, "-gravity", "south", "-crop", `${width}x${keep}+0+0`, "+repage", file]);
    }
    tiles.push(file);
    y += height;
  }
  const result = spawnSync("magick", [...tiles, "-append", out]);
  if (result.status !== 0) {
    console.error(String(result.stderr));
    process.exit(1);
  }
  rmSync(dir, { recursive: true, force: true });
  console.log(`${out} ${width}x${fullHeight}`);
}

ws.close();
chrome.kill();

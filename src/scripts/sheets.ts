// Two behaviours, both progressive: the page is complete without them.
// 1. Line work draws itself once when its sheet enters the viewport.
// 2. The pinned title block (Plankopf strip) counts sheets as the reader scrolls.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function prepareDrawings(): void {
  if (reduceMotion) return;
  const drawings = document.querySelectorAll<SVGSVGElement>("svg[data-draw]");
  for (const svg of drawings) {
    const paths = svg.querySelectorAll<SVGGeometryElement>(".draw");
    paths.forEach((path, index) => {
      const length = Math.ceil(path.getTotalLength());
      path.style.setProperty("--len", String(length));
      path.style.setProperty("--delay", `${index * 60}ms`);
    });
    svg.classList.add("draw-ready");
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-drawn");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.25 },
  );
  drawings.forEach((svg) => observer.observe(svg));
}

function trackSheets(): void {
  const strip = document.querySelector<HTMLElement>("[data-plankopf-strip]");
  if (!strip) return;
  const number = strip.querySelector<HTMLElement>("[data-sheet-number]");
  const name = strip.querySelector<HTMLElement>("[data-sheet-name]");
  const sheets = document.querySelectorAll<HTMLElement>("[data-sheet]");
  if (sheets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const isCover = el.dataset.sheet === "1";
        strip.classList.toggle("is-hidden", isCover);
        strip.setAttribute("aria-hidden", String(isCover));
        if (number) number.textContent = el.dataset.sheet ?? "";
        if (name) name.textContent = el.dataset.sheetName ?? "";
      }
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  sheets.forEach((sheet) => observer.observe(sheet));
}

prepareDrawings();
trackSheets();

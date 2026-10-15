#!/usr/bin/env sh
# Renders the Open Graph images (1200x630) from scripts/og/og.html into public/.
# Requires chromium (or set CHROMIUM=/path/to/chrome) and bun.
set -eu
cd "$(dirname "$0")/.."
base="file://$(pwd)/scripts/og/og.html"
bun scripts/screenshot.ts "$base" public/og-de.png 1200 630 --viewport
bun scripts/screenshot.ts "$base?lang=en" public/og-en.png 1200 630 --viewport
echo "OG images written to public/og-de.png and public/og-en.png"

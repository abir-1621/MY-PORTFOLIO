import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const source = path.resolve("assets/linkedin/linkedin-cover-hpf.html");
const output = path.resolve("assets/linkedin/linkedin-cover-hpf.png");

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({
  viewport: { width: 1584, height: 396 },
  deviceScaleFactor: 1,
});

await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle" });
await page.screenshot({ path: output, fullPage: false });
await browser.close();

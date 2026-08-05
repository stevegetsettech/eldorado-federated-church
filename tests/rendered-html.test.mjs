import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

async function renderedHtml(path = "index.html") {
  return readFile(new URL(path, outputRoot), "utf8");
}

test("renders the church home page", async () => {
  const html = await renderedHtml();
  assert.match(html, /El Dorado County Federated Church/i);
  assert.match(html, /All Are Welcome/);
  assert.match(html, /Sundays at 10:00 AM/);
  assert.match(html, /Plan a Visit/);
  assert.match(html, /noindex/);
});

test("renders every core route", async () => {
  for (const [path, expected] of [
    ["visit/index.html", /Come as you are/],
    ["about/index.html", /Tradition with room to grow/],
    ["ministries/index.html", /Love takes shape here/],
    ["worship/index.html", /Worship with us online/],
    ["give/index.html", /Your generosity becomes care/],
  ]) {
    assert.match(await renderedHtml(path), expected, path);
  }
});

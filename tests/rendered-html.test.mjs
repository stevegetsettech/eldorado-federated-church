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
  assert.match(html, /Environmental justice/);
  assert.match(html, /immigration status/);
  assert.match(html, /youtube\.com\/@eldoradofederatedchurchpla3486/);
  assert.match(html, /youtube\.com\/watch\?v=wiLO430AhwY/);
  assert.match(html, /View the live calendar/);
  assert.match(html, /Church Calendar/);
  assert.match(html, /Prayer Request/);
  assert.match(html, /church-rainbow-solar-october-2026\.jpg/);
  assert.match(html, /noindex/);
});

test("renders every core route", async () => {
  for (const [path, expected] of [
    ["visit/index.html", /Come as you are/],
    ["about/index.html", /Tradition with room to grow/],
    ["ministries/index.html", /Love takes shape here/],
    ["worship/index.html", /Worship with us online/],
    ["give/index.html", /Your generosity becomes care/],
    ["praise-and-prayer-requests/index.html", /How may we pray with you/],
  ]) {
    assert.match(await renderedHtml(path), expected, path);
  }

  assert.match(await renderedHtml("about/index.html"), /pastor-carrie-lane-2025\.jpg/);
  assert.match(await renderedHtml("ministries/index.html"), /Board of Deacons/);
  assert.match(await renderedHtml("ministries/index.html"), /id="congregationalcare"/);
  assert.match(await renderedHtml("ministries/index.html"), /mission-a-to-z-guide-september-2026\.pdf/);
  assert.match(await renderedHtml("ministries/index.html"), /Federatedmusic@eldoradofederatedchurch\.org/);
  assert.match(await renderedHtml("ministries/index.html"), /Federatedcym@eldoradofederatedchurch\.org/);
  const worshipHtml = await renderedHtml("worship/index.html");
  assert.match(worshipHtml, /Watch on YouTube/);
  assert.match(worshipHtml, /youtube\.com\/@eldoradofederatedchurchpla3486/);
  assert.match(worshipHtml, /youtube\.com\/watch\?v=wiLO430AhwY/);
  assert.match(worshipHtml, /featured-worship-october-2026\.jpg/);
  assert.doesNotMatch(worshipHtml, /youtube\.com\/embed/);
});

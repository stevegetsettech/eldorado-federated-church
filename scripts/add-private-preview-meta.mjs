import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.argv[2];
const privateMeta =
  '<meta name="robots" content="noindex, nofollow, noarchive, noimageindex">';

if (!root) {
  throw new Error("Provide the published site directory.");
}

async function protectMetadata(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await protectMetadata(path);
      continue;
    }

    if (!entry.name.endsWith(".html")) continue;

    const html = await readFile(path, "utf8");
    if (html.includes(privateMeta)) continue;

    await writeFile(path, html.replace("<head>", `<head>${privateMeta}`));
  }
}

await protectMetadata(root);

import { readFile, writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
import * as wawoff2 from "wawoff2";

const woff2 = await readFile("../assets/fonts/ComicRelief-Regular.woff2");
const woff = await wawoff2.decompress(woff2);
const base64 = Buffer.from(woff).toString("base64");

await writeFile(
  "./font.ts",
  `export default ${JSON.stringify(base64)};`,
);

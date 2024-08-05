import { encodeBase64 } from "https://deno.land/std@0.203.0/encoding/base64.ts";

// @deno-types="npm:@types/wawoff2"
import * as wawoff2 from "npm:wawoff2@2.0.1";

const woff2 = await Deno.readFile("../assets/fonts/ComicRelief-Regular.woff2");
const woff = await wawoff2.decompress(woff2);
const base64 = encodeBase64(woff);

Deno.writeTextFileSync(
  "./font.ts",
  `export default ${JSON.stringify(base64)};`,
);

import { encodeBase64 } from "https://deno.land/std@0.203.0/encoding/base64.ts";

const font = await Deno.readFile("../assets/fonts/ComicRelief-Regular.woff2");
const base64 = encodeBase64(font)

Deno.writeTextFileSync("./font.ts", `export default ${JSON.stringify(base64)};`);

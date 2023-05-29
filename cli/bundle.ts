import { bundle } from "https://deno.land/x/emit@0.22.0/mod.ts";

const result = await bundle(
  new URL("./main.ts", import.meta.url),
);

const { code } = result;
// TODO add a header explaing where the source is, and how to audit it.
await Deno.writeTextFile("bundled.ts", code);

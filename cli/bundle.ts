import { bundle } from "https://deno.land/x/emit@0.22.0/mod.ts";

const result = await bundle(
  new URL("./main.ts", import.meta.url),
);

const header = `/**
* Fabric Command Line tools
* This file contains a bundled TypeScript file with the code and dependencies for the Fabric command line tools.
* It is expected to be ran using https://deno.com/runtime. The source code for this tool can be found at: https://github.com/FabricMC/fabricmc.net
*/
`;

await Deno.writeTextFile("bundled.ts", header + result.code);

import { bundle } from "https://deno.land/x/emit@0.22.0/mod.ts";
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const result = await bundle(
  new URL("./main.ts", import.meta.url),
);

const header = `/**
* Fabric Command Line tools
* This file contains a bundled TypeScript file with the code and dependencies for the Fabric command line tools.
* It is expected to be ran using https://deno.com/runtime. The source code for this tool can be found at: https://github.com/FabricMC/fabricmc.net
*/
`;

const code = result.code.replace(
  "%__VERSION__%",
  format(new Date(), "yyyy-MM-dd HH:mm:ss"),
);

await Deno.writeTextFile("bundled.ts", header + code);

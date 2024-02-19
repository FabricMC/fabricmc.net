#!/usr/bin/env -S deno run -A

// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../scripts/dist/fabric-template-generator.js";
import { parse as parseXml } from "https://deno.land/x/xml@2.1.1/mod.ts";
import {
  Command,
  CompletionsCommand,
} from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { initCommand } from "./commands/init.ts";
import { upgradeCommand } from "./commands/upgrade.ts";

// Replaced by esbuild.
declare let __VERSION__: string;
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "dev";

// Set the XML parser as we do not have DomParser here.
generator.setXmlVersionParser((xml) => {
  const document = parseXml(xml) as any;
  return document.metadata.versioning.versions.version;
});

if (import.meta.main) {
  const cmd = new Command()
    .name("Fabric CLI tools")
    .version(VERSION)
    .description("A set of command line tools to aid Fabric mod development")
    .action(() => {
      // Show the help in the default command with no args.
      cmd.showHelp();
      Deno.exit(0);
    })
    .command("init", initCommand())
    .command("upgrade", upgradeCommand())
    .command("completions", new CompletionsCommand());

  await cmd.parse();
}

#!/usr/bin/env -S deno run -A

// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../scripts/dist/fabric-template-generator.js";
import {
  Command,
  CompletionsCommand,
} from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { initCommand } from "./commands/init.ts";
import { upgradeCommand } from "./commands/upgrade.ts";

// Replaced by esbuild.
declare let __VERSION__: string;
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "dev";

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

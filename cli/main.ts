#!/usr/bin/env -S deno run -A

// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../scripts/dist/fabric-template-generator.js";
import { exit } from "node:process";
import { Command } from "jsr:@cliffy/command@1.2.1";
import { CompletionsCommand } from "jsr:@cliffy/command@1.2.1/completions";
import { initCommand } from "./commands/init.ts";
import { upgradeCommand } from "./commands/upgrade.ts";
import { versionsCommand } from "./commands/versions.ts";

// Replaced by esbuild.
declare let __VERSION__: string;
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "dev";

if (import.meta.main) {
  const cmd = new Command()
    .name("fabric")
    .version(VERSION)
    .description("A set of command line tools to aid Fabric mod development")
    .action(() => {
      // Show the help in the default command with no args.
      cmd.showHelp();
      exit(0);
    })
    .command("init", initCommand());

  if (typeof Deno !== "undefined") {
    cmd.command("upgrade", upgradeCommand());
  }

  cmd
    .command("versions", versionsCommand())
    .command("completions", new CompletionsCommand());

  await cmd.parse();
}

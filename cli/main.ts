#!/usr/bin/env node

import { Command } from "commander";
import { initCommand } from "./commands/init.ts";
import { versionsCommand } from "./commands/versions.ts";

// Replaced by esbuild.
declare let __VERSION__: string;
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "dev";

const cmd = new Command()
  .name("fabric")
  .version(VERSION)
  .description("A set of command line tools to aid Fabric mod development")
  .action(() => {
    cmd.outputHelp();
  });

cmd.addCommand(initCommand());
cmd.addCommand(versionsCommand());

await cmd.parseAsync();

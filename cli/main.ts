#!/usr/bin/env -S deno run --allow-net

// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../scripts/dist/fabric-template-generator.js";
import { parse as parseXml } from "https://deno.land/x/xml@2.1.1/mod.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { initCommand } from "./init.ts";

// Set the XML parser as we do not have DomParser here.
generator.setXmlVersionParser((xml) => {
  const document = parseXml(xml) as any;
  return document.metadata.versioning.versions.version;
});

const cmd = await new Command()
  .name("Fabric CLI tools")
  .description("A set of command line tools to aid Fabric mod development")
  .action(() => {
    // Show the help in the default command with no args.
    cmd.showHelp();
    Deno.exit(0);
  })
  .command("init", initCommand());

await cmd.parse();

async function requestPermissions(outputDir: string) {
  const permissions: Deno.PermissionDescriptor[] = [
    {
      name: "write",
      path: outputDir,
    },
    {
      name: "net",
      host: "meta.fabricmc.net",
    },
    {
      name: "net",
      host: "maven.fabricmc.net",
    },
  ];

  for (const permission of permissions) {
    const status = await Deno.permissions.request(permission);

    if (status.state != "granted") {
      console.log("Permission not granted");
      Deno.exit(1);
    }
  }
}

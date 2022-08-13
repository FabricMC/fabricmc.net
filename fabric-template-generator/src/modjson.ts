import type { ComputedConfiguration, TemplateWriter } from ".";
import { generateMixin } from "./mixin";
import { generateEntrypoint } from "./modentrypoint";

export async function addModJson(writer: TemplateWriter, config: ComputedConfiguration) {
  // TODO add more options to help fill this out some more.
  const fabricModJson = {
    "schemaVersion": 1,
    "id": config.modid,
    "version": "${version}",
    "name": config.projectName,
    "description": "This is an example description! Tell everyone what your mod is about!",
    "authors": [
      "Me!"
    ],
    "contact": {
      "homepage": "https://fabricmc.net/",
      "sources": "https://github.com/FabricMC/fabric-example-mod"
    },
    "license": "CC0-1.0",
    "icon": "assets/modid/icon.png", // TODO add an icon to the zip.
    "environment": "*",
    "entrypoints": generateEntrypoint(writer, config),
    "mixins": generateMixin(writer, config),
    "depends": {
      "fabricloader": ">=" + config.loaderVersion,
      "fabric": "*",
      "minecraft": "~" + config.minecraftVersion,
      "java": ">=17" // TODO
    },
    "suggests": {
      "another-mod": "*"
    }
  }

  await writer.write("src/main/resources/fabric.mod.json", JSON.stringify(fabricModJson, null, "\t"));
}
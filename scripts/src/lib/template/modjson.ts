import type { ComputedConfiguration, TemplateWriter } from "./template";
import { generateMixin } from "./mixin";
import { generateEntrypoint } from "./modentrypoint";
import { getJavaVersion, getMinorMinecraftVersion } from "./java"

export async function addModJson(writer: TemplateWriter, config: ComputedConfiguration) {
  var fabricModJson : any = {
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
    "environment": "*",
    "entrypoints": await generateEntrypoint(writer, config),
    "mixins": await generateMixin(writer, config),
    "depends": {
      "fabricloader": ">=" + config.loaderVersion,
      "minecraft": "~" + config.minecraftVersion,
      "java": ">=" + getJavaVersion(config.minecraftVersion).release
    },
    "suggests": {
      "another-mod": "*"
    }
  }

  fabricModJson.depends[getMinorMinecraftVersion(config.minecraftVersion) >= 16 ? "fabric-api" : "fabric"] = "*"

  if (config.kotlin) {
    fabricModJson.depends = {
      ...fabricModJson.depends,
      "fabric-language-kotlin": ">=" + config.kotlin.kotlinVersion
    }
  }

  await writer.write("src/main/resources/fabric.mod.json", JSON.stringify(fabricModJson, null, "\t"));
}
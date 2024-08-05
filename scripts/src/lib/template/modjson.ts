import type { CanvasAdaptorFactory, ComputedConfiguration, TemplateWriter } from "./template";
import { generateClientMixin, generateMixin } from "./mixin";
import { generateEntrypoint } from "./modentrypoint";
import { getJavaVersion } from "./java"
import { getMinorMinecraftVersion } from "./minecraft"
import { generateModIcon } from "./icon";

function usesNewModid(fabricVersion: string) : boolean {
  return Number(fabricVersion.split(".")[1]) >= 59;
}

export async function addModJson(writer: TemplateWriter, canvas: CanvasAdaptorFactory, config: ComputedConfiguration) {
  const mixins = [
    ...await generateMixin(writer, config),
    ...(config.splitSources ? await generateClientMixin(writer, config) : [])
  ];

  // Format the minecraft version with any pre3, or rc1, etc. suffixes
  const index = config.minecraftVersion.indexOf("-");
  const minecraftVersion = config.minecraftVersion.substring(0, index === -1 ? config.minecraftVersion.length : index + 1);

  const fabricModJson : any = {
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
    "icon": `assets/${config.modid}/icon.png`,
    "environment": "*",
    "entrypoints": await generateEntrypoint(writer, config),
    "mixins": mixins,
    "depends": {
      "fabricloader": ">=" + config.loaderVersion,
      "minecraft": "~" + minecraftVersion,
      "java": ">=" + getJavaVersion(config.minecraftVersion).release
    },
    "suggests": {
      "another-mod": "*"
    }
  }

  fabricModJson.depends[usesNewModid(config.fabricVersion) ? "fabric-api" : "fabric"] = "*"

  if (config.kotlin) {
    fabricModJson.depends = {
      ...fabricModJson.depends,
      "fabric-language-kotlin": "*"
    }
  }

  await writer.write("src/main/resources/fabric.mod.json", JSON.stringify(fabricModJson, null, "\t"));
  await writer.write(`src/main/resources/assets/${config.modid}/icon.png`, generateModIcon(config.projectName, config.uniqueModIcon, canvas));
}
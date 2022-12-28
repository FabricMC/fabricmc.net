import type { ComputedConfiguration, TemplateWriter } from "./template";
import { generateMixin } from "./mixin";
import { generateEntrypoint } from "./modentrypoint";
import { getJavaVersion, getMinorMinecraftVersion } from "./java"
import { decode64 } from './utils';

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
    "license": "CC0-1.0",
    "icon": `assets/${config.modid}/icon.png`,
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
  await writer.write(`src/main/resources/assets/${config.modid}/icon.png`, decode64(ICON));
}

// Todo can we generate an icon from the mod name?
const ICON = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";

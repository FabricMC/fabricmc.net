import type JSZip from "jszip";
import { generateMixin } from "./Mixin";
import { generateEntrypoint } from "./ModEntrypoint";
import type { ComputedOptions } from "./TemplateGenerator";

export function addModJson(zip: JSZip, options: ComputedOptions) {
    // TODO add more options to help fill this out some more.
    const fabricModJson = {
        "schemaVersion": 1,
        "id": options.modid,
        "version": "${version}",
        "name": options.projectName,
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
        "entrypoints": generateEntrypoint(zip, options),
        "mixins": generateMixin(zip, options),
        "depends": {
          "fabricloader": ">=" + options.loaderVersion,
          "fabric": "*",
          "minecraft": "~" + options.minecraftVersion,
          "java": ">=17" // TODO
        },
        "suggests": {
          "another-mod": "*"
        }
    }

    zip.file("src/main/resources/fabric.mod.json", JSON.stringify(fabricModJson, null, "\t"));
}
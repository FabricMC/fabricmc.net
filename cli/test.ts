// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import {
  generateTemplate,
  getTemplateGameVersions,
  minecraftSupportsSplitSources,
} from "../scripts/dist/fabric-template-generator.js";
import { getGeneratorOptions } from "./commands/init.ts";
import { assert } from "https://deno.land/std@0.221.0/assert/mod.ts";
import * as fs from "https://deno.land/std@0.221.0/fs/mod.ts";

const rootDir = "./tests";
if (await fs.exists(rootDir)) {
  await Deno.remove(rootDir, { recursive: true });
}
await Deno.mkdir(rootDir);

const cwd = await Deno.realPath(Deno.cwd());
const inDir = `${rootDir}/_in`;
const runDir = `${rootDir}/_run`;
await Deno.mkdir(runDir);

const minecraftVersions = await getTemplateGameVersions();

for (const { version } of minecraftVersions) {
  for (const mapping of ["yarn", "mojmap"]) {
    for (const language of ["java", "kotlin"]) {
      const testId = `${version}_${mapping}_${language}`;
      const outDir = `${rootDir}/${testId}`;

      Deno.test(testId, async () => {
        let success = false;

        // try rebuilding if it fail, usual gradle stuff
        for (let i = 0; i < 3; i++) {
          const options = getGeneratorOptions(inDir, {
            modid: "test",
            projectName: "test",
            packageName: "net.fabricmc.generator.test",
            dataGeneration: false,
            splitSources: minecraftSupportsSplitSources(version),
            uniqueModIcon: true,

            minecraftVersion: version,
            mojmap: mapping === "mojmap",
            useKotlin: language === "kotlin",
          });

          await generateTemplate(options);

          // build in the same directory for all test
          // to make it use only one daemon and build cache
          for await (const { name } of Deno.readDir(inDir)) {
            await fs.copy(`${inDir}/${name}`, `${runDir}/${name}`);
          }

          Deno.chdir(runDir);
          const gradle = new Deno.Command("./gradlew", {
            args: ["build"],
          }).spawn();
          Deno.chdir(cwd);

          const output = await gradle.output();

          for await (const { name } of Deno.readDir(inDir)) {
            await Deno.remove(`${runDir}/${name}`, { recursive: true });
          }

          await Deno.remove(inDir, { recursive: true });

          if (output.success) {
            await fs.move(`${runDir}/build/libs`, `${outDir}`);
            success = true;
            break;
          }
        }

        assert(success);
      });
    }
  }
}

import {
  generateTemplate,
  getTemplateGameVersions,
  minecraftSupportsSplitSources,
  minecraftIsUnobfuscated,
} from "@fabricmc/scripts";
import { getGeneratorOptions } from "./commands/init.ts";
import assert from "node:assert/strict";
import { test } from "node:test";
import { spawn } from "node:child_process";
import * as fs from "node:fs/promises";

const rootDir = "./tests";
await fs.rm(rootDir, { recursive: true, force: true });
await fs.mkdir(rootDir);

const inDir = `${rootDir}/_in`;
const runDir = `${rootDir}/_run`;
await fs.mkdir(runDir);

const minecraftVersions = await getTemplateGameVersions();

for (const { version } of minecraftVersions) {
  for (const mapping of ["yarn", "mojmap"]) {
    if (mapping === "yarn" && minecraftIsUnobfuscated(version)) {
      continue;
    }

    for (const language of ["java", "kotlin"]) {
      for (const dsl of ["groovy", "kotlin"]) {
        const testId = `${version}_${mapping}_${language}_${dsl}`;
        const outDir = `${rootDir}/${testId}`;

        test(testId, async () => {
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
              gradleKotlin: dsl === "kotlin",
            });

            await generateTemplate(options);

            // build in the same directory for all test
            // to make it use only one daemon and build cache
            for (const name of await fs.readdir(inDir)) {
              await fs.cp(`${inDir}/${name}`, `${runDir}/${name}`, {
                recursive: true,
              });
            }

            const exitCode = await new Promise<number | null>((resolve, reject) => {
              const gradle = spawn("./gradlew", ["build"], {
                cwd: runDir,
                stdio: "inherit",
              });
              gradle.on("error", reject);
              gradle.on("close", resolve);
            });

            for (const name of await fs.readdir(inDir)) {
              await fs.rm(`${runDir}/${name}`, { recursive: true });
            }

            await fs.rm(inDir, { recursive: true });

            if (exitCode === 0) {
              await fs.rename(`${runDir}/build/libs`, outDir);
              success = true;
              break;
            }
          }

          assert(success);
        });
      }
    }
  }
}

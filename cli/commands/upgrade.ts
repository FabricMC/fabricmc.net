import {
  Provider,
  UpgradeCommand,
  UpgradeOptions,
} from "https://deno.land/x/cliffy@v0.25.7/command/upgrade/mod.ts";
import { Versions } from "https://deno.land/x/cliffy@v0.25.7/command/upgrade/provider.ts";

const UPGRADE_URL = "https://fabricmc.net/cli";
const COMMAND_NAME = "fabric";

export function upgradeCommand() {
  const command = new UpgradeCommand({
    provider: new UpdateProvider(),
  })
    .description("Upgrade Fabric CLI tools executable to latest version");

  command.removeOption("--version");
  command.removeOption("--force");
  command.removeOption("--list-versions");
  return command;
}

class UpdateProvider extends Provider {
  name = COMMAND_NAME;

  // Code edited from the default Provider
  override async upgrade(
    {}: UpgradeOptions,
  ): Promise<void> {
    const args = [
      "install",
      "--force",
      "--reload",
      "--quiet",
      "--global",
      "-A",
      "--name",
      COMMAND_NAME,
      UPGRADE_URL,
    ];

    const command = new Deno.Command(Deno.execPath(), {
      args,
    });

    const { success, stderr } = await command.output();

    if (!success) {
      await Deno.stderr.write(stderr);
      throw new Error(
        `Failed to upgrade ${COMMAND_NAME}!`,
      );
    }

    console.info(
      `Successfully upgraded!`,
    );
  }

  override getVersions(_: string): Promise<Versions> {
    return Promise.resolve({
      latest: "latest",
      versions: ["latest"],
    });
  }

  override getRepositoryUrl(_: string): string {
    throw new Error("Method not implemented.");
  }

  override getRegistryUrl(_: string, __: string): string {
    throw new Error("Method not implemented.");
  }

  override isOutdated(
    _: string,
    __: string,
    ___: string,
  ): Promise<boolean> {
    return Promise.resolve(true);
  }
}

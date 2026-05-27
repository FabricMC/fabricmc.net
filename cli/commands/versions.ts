// @deno-types="../../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../../scripts/dist/fabric-template-generator.js";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";

const LOOM_VERSION = "1.16-SNAPSHOT";

type GameVersion = generator.GameVersion;
type LoaderVersion = generator.LoaderVersion;
type YarnVersion = generator.YarnVersion;

export interface VersionsResult {
  minecraft_version: string;
  loader_version: string;
  loom_version: string;
  fabric_api_version: string;
  yarn_mappings?: string;
}

interface VersionDependencies {
  getGameVersions(): Promise<GameVersion[]>;
  getLoaderVersions(): Promise<LoaderVersion[]>;
  getYarnVersions(): Promise<YarnVersion[]>;
  getApiVersionForMinecraft(minecraftVersion: string): Promise<string>;
  minecraftIsUnobfuscated(minecraftVersion: string): boolean;
}

const defaultDependencies: VersionDependencies = {
  getGameVersions: generator.getGameVersions,
  getLoaderVersions: generator.getLoaderVersions,
  getYarnVersions: generator.getYarnVersions,
  getApiVersionForMinecraft: generator.getApiVersionForMinecraft,
  minecraftIsUnobfuscated: generator.minecraftIsUnobfuscated,
};

export function versionsCommand() {
  return new Command()
    .name("versions")
    .description("Show the recommended Fabric versions for a Minecraft version")
    .option("--json", "Print the recommended versions as JSON")
    .arguments("[minecraftVersion:string]")
    .action(async (options, minecraftVersion: string | undefined) => {
      const versions = await resolveVersions(minecraftVersion);

      console.log(
        options.json
          ? formatVersionsJson(versions)
          : formatVersionsText(versions),
      );
    });
}

export async function resolveVersions(
  minecraftVersion: string | undefined,
  dependencies: VersionDependencies = defaultDependencies,
): Promise<VersionsResult> {
  const [gameVersions, loaderVersions, yarnVersions] = await Promise.all([
    dependencies.getGameVersions(),
    dependencies.getLoaderVersions(),
    dependencies.getYarnVersions(),
  ]);

  const latestStableVersion = gameVersions.find((version) => version.stable);
  if (!latestStableVersion) {
    throw new Error("Could not find a stable Minecraft version.");
  }

  const latestSnapshotVersion = gameVersions[0]?.stable
    ? undefined
    : gameVersions[0];
  const resolvedMinecraftVersion = minecraftVersion ??
    latestStableVersion.version;

  validateMinecraftVersion(
    resolvedMinecraftVersion,
    gameVersions,
    latestSnapshotVersion?.version,
  );

  const stableLoaderVersion = loaderVersions.find((version) => version.stable);
  if (!stableLoaderVersion) {
    throw new Error("Could not find a stable Fabric Loader version.");
  }

  const unobfuscated = dependencies.minecraftIsUnobfuscated(
    resolvedMinecraftVersion,
  );
  const result: VersionsResult = {
    minecraft_version: resolvedMinecraftVersion,
    loader_version: stableLoaderVersion.version,
    loom_version: LOOM_VERSION,
    fabric_api_version: await dependencies.getApiVersionForMinecraft(
      resolvedMinecraftVersion,
    ),
  };

  if (!unobfuscated) {
    result.yarn_mappings = yarnVersions.find((version) =>
      version.gameVersion === resolvedMinecraftVersion
    )?.version ?? "unknown";
  }

  return result;
}

export function formatVersionsText(versions: VersionsResult): string {
  const lines = [`minecraft_version=${versions.minecraft_version}`];

  if (versions.yarn_mappings) {
    lines.push(`yarn_mappings=${versions.yarn_mappings}`);
  }

  lines.push(`loader_version=${versions.loader_version}`);
  lines.push(`loom_version=${versions.loom_version}`);
  lines.push(`fabric_api_version=${versions.fabric_api_version}`);

  return lines.join("\n");
}

export function formatVersionsJson(versions: VersionsResult): string {
  return JSON.stringify(versions, null, 2);
}

function validateMinecraftVersion(
  minecraftVersion: string,
  gameVersions: GameVersion[],
  latestSnapshotVersion: string | undefined,
) {
  const requestedVersion = gameVersions.find((version) =>
    version.version === minecraftVersion
  );

  if (!requestedVersion) {
    throw new Error(`Unknown Minecraft version: ${minecraftVersion}`);
  }

  if (
    !requestedVersion.stable &&
    requestedVersion.version !== latestSnapshotVersion
  ) {
    throw new Error(
      `Minecraft version ${minecraftVersion} is not supported. Only stable versions and the latest snapshot are supported.`,
    );
  }
}

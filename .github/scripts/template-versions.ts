// @deno-types="../../scripts/dist/fabric-template-generator.d.ts"
import { getGameVersions, getMajorMinecraftVersion, getMinorMinecraftVersion } from '../../scripts/dist/fabric-template-generator.js';

const stableVersions = (await getGameVersions()).filter(x => x.stable);

const latestVersions = stableVersions.reduce((acc: Record<string, string>, x) => {
    const major = getMajorMinecraftVersion(x.version);
    const minor = getMinorMinecraftVersion(x.version);
    acc[`${major}.${minor}`] ??= x.version;
    return acc;
}, {});

const result = Object.entries(latestVersions).map(([branch, version]) => ({ branch, version }));
console.log(JSON.stringify(result));

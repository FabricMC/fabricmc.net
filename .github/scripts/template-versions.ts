import { getGameVersions, getMajorMinecraftVersion, getMinorMinecraftVersion } from '../../scripts/dist/fabric-template-generator.js';
import { setOutput } from 'npm:@actions/core';

const stableVersions = (await getGameVersions()).filter(x => x.stable);
const latestVersions = stableVersions.reduce((acc, x) => {
    const major = getMajorMinecraftVersion(x.version);
    const minor = getMinorMinecraftVersion(x.version);
    acc[`${major}.${minor}`] ??= x.version;
    return acc;
}, {});

setOutput('result', latestVersions);

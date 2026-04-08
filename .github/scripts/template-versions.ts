// @deno-types="../../scripts/dist/fabric-template-generator.d.ts"
import { getTemplateGameVersions } from '../../scripts/dist/fabric-template-generator.js';

const stableVersions = (await getTemplateGameVersions()).filter(x => x.stable);

const result = stableVersions.map(({version}) => ({ branch: version, version }));
console.log(JSON.stringify(result));

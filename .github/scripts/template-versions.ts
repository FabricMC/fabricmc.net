// @deno-types="../../scripts/dist/fabric-template-generator.d.ts"
import { getTemplateGameVersions } from '../../scripts/dist/fabric-template-generator.js';

console.log(JSON.stringify((await getTemplateGameVersions()).filter(x => x.stable).map(x => x.version)));

import { getTemplateGameVersions } from '@fabricmc/scripts/versions';

console.log(JSON.stringify((await getTemplateGameVersions()).filter(x => x.stable).map(x => x.version)));

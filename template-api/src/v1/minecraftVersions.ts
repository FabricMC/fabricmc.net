import * as generator from "../../../scripts/dist/fabric-template-generator.js";

export async function getMinecraftVersions() {
	const versions = await generator.getTemplateGameVersions()
	const result = {
		versions: Object.fromEntries(versions.map(version => [version.version, { stable: version.stable }]))
	}
	return result
}
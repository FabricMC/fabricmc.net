import { getGameVersions, type GameVersion } from '../Api.ts';

export async function getTemplateGameVersions(): Promise<GameVersion[]> {
	const versions = await getGameVersions()
	return versions.filter((v) => {
		const version = v.version;

		if (version.startsWith("1.14") && version != "1.14.4") {
			// Hide pre 1.14.4 MC versions as they require using V1 yarn.
			return false;
		}

		if (!v.stable) {
			// Hide unstable versions, other than the latest snapshot.
			const isLatest = versions[0].version == version;
			return isLatest;
		}

		return true;
	});
}


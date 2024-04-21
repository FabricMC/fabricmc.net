export function minecraftSupportsDataGen(minecraftVersion: string): boolean {
	return getMinorMinecraftVersion(minecraftVersion) >= 17;
}

export function minecraftSupportsSplitSources(minecraftVersion: string): boolean {
	return getMinorMinecraftVersion(minecraftVersion) >= 19;
}

export function getMinorMinecraftVersion(minecraftVersion: string): number {
	return getVersionParts(minecraftVersion)[1];
}

export function getPathMinecraftVersion(minecraftVersion: string): number {
	return getVersionParts(minecraftVersion)[2];
}

function getVersionParts(minecraftVersion: String): number[] {
	// Remove any snapshot or pre-release suffix
	const targetVersion = minecraftVersion.split("-")[0];
	return targetVersion.split(".").map((v) => parseInt(v));
}

export function sharedModIdChecks(id: string, isId: boolean): string[] | undefined {
	let errorList : string[] = [];

	const type = isId ? "Modid" : "Mod Name";
	if (id.length == 0) {
		return [`${type} is empty!`];
	} else if (id.length == 1) {
		errorList.push(`${type} is only a single character! (It must be at least 2 characters long)!`);
	} else if (id.length > 64) {
		errorList.push(`${type} has more than 64 characters!`);
	}

	if (id.toLocaleLowerCase().startsWith("fabric")) {
		errorList.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself.")
	}

	return errorList.length === 0 ? undefined : errorList;
}

// Ported/adapted from Loader's MetadataVerifier
export function computeCustomModIdErrors(id: string | undefined): string[] | undefined {
	if (id === undefined) {
	return undefined;
	}

	let errorList = sharedModIdChecks(id, true) ?? [];

	const first = id.charAt(0);

	if (first < 'a' || first > 'z') {
		errorList.push("Modid starts with an invalid character '" + first + "' (it must belowercase a-z)");
	}

	let invalidChars: string[] | null = null;

	for (let i = 1; i < id.length; i++) {
		let c = id.charAt(i);

		if (c == '-' || c == '_' || ('0' <= c && c <= '9') || ('a' <= c && c <= 'z')) {
			continue;
		}

		if (invalidChars == null) {
			invalidChars = [];
		}

		invalidChars.push(c);
	}

	if (invalidChars != null) {
		let error = "Modid contains invalid characters: " + invalidChars.map(value => "'" + value + "'").join(", ") + "!";
		errorList.push(error + "!");
	}

	if (errorList.length == 0) {
		return undefined;
	}

	return errorList;
}

export function formatPackageName(packageName: string): string {
	return packageName.toLocaleLowerCase().replace(/\s+/g, '.').replace(/[^a-za-z0-9_\.]/, "")
}

export function nameToModId(name: string) {
	return name.toLowerCase().replaceAll(/\s+/g, '-').replaceAll(/[^a-za-z0-9-_]/g, "");
}
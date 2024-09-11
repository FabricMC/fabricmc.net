import { getMinorMinecraftVersion, getPathMinecraftVersion } from "./minecraft";

export interface JavaVersion {
	compatibility: string,
	mixin: string,
	release: number,
    kotlinRelease: string,
}

const JAVA_8 : JavaVersion = {
	compatibility: "VERSION_1_8",
	mixin: "JAVA_8",
	release: 8,
    kotlinRelease: "1.8"
}

const JAVA_16 : JavaVersion = {
	compatibility: "VERSION_16",
	mixin: "JAVA_16",
	release: 16,
    kotlinRelease: "16"
}

const JAVA_17 : JavaVersion = {
	compatibility: "VERSION_17",
	mixin: "JAVA_17",
	release: 17,
    kotlinRelease: "17"
}

const JAVA_21 : JavaVersion = {
	compatibility: "VERSION_21",
	mixin: "JAVA_21",
	release: 21,
    kotlinRelease: "21"
}

export function getJavaVersion(minecraftVersion: string): JavaVersion {
	const minor = getMinorMinecraftVersion(minecraftVersion);

	if (minor <= 16) {
		// Minecraft 1.16 and below use Java 8
		return JAVA_8;
	} else if (minor == 17) {
		// Minecraft 1.17 uses Java 16
		return JAVA_16;
	} else if (minor <= 19) {
		// Minecraft 1.18 and 1.19 use all Java 17
		return JAVA_17;
	} else if (minor == 20) {
		const patch = getPathMinecraftVersion(minecraftVersion);

		if (patch <= 4) {
			// Minecraft 1.20.0 -> 1.20.4 use Java 17
			return JAVA_17;
		}
	}

	// Minecraft 1.20.5 and above use Java 21
	return JAVA_21;
}

const JAVA_PACKAGE_REGEX = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/;
const JAVA_RESERVED_WORDS = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/);
const RESERVED_PACKAGE_PREFIXES = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];

export function computePackageNameErrors(packageName: string): string[] {
	let errorList : string[] = [];

	if (!JAVA_PACKAGE_REGEX.test(packageName.toLowerCase())) {
		errorList.push("Package name is not a valid Java package name!");
	}

	const reservedWordsFound = packageName.split('.').filter(c => JAVA_RESERVED_WORDS.includes(c));
	if (reservedWordsFound.length != 0) {
		errorList.push(`Package name contains illegal component: '${reservedWordsFound[0]}'`);
	}

	for (let prefix of RESERVED_PACKAGE_PREFIXES) {
		if (packageName.toLowerCase().startsWith(prefix)) {
			errorList.push(`Package name starts with '${prefix}', which is reserved!`);
		} else if (packageName.toLowerCase() + "." == prefix) {
			errorList.push(`Package name is '${prefix}', which is reserved!`);
		}
	}

	return errorList;
}
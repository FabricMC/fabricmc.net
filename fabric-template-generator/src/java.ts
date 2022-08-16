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

export function getJavaVersion(minecraftVersion: string): JavaVersion {
	const minor = Number(minecraftVersion.split(".")[1]);

	if (minor < 16) {
		return JAVA_8;
	} else if (minor == 16) {
		return JAVA_16;
	}

	return JAVA_17;
}
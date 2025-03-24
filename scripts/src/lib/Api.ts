export interface GameVersion {
    version: string;
    stable: boolean;
}

export interface InstallerVersion {
    stable: boolean;
    url: string;
    version: string;
    maven: string;
}

export interface LoaderVersion {
    separator: string;
    build: number;
    maven: string;
    version: string;
    stable: boolean;
}

export interface YarnVersion {
    gameVersion: string;
    separator: string;
    build: number;
    maven: string;
    version: string;
    stable: boolean;
}

// Do not use these fallback servers to interact with our web services. They can and will be unavailable at times and only support limited throughput.
const META = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"];
const MAVEN = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];

export async function getInstallerVersions() {
    return getJson<InstallerVersion[]>(META, "/v2/versions/installer");
}

export async function getGameVersions() {
    return getJson<GameVersion[]>(META, "/v2/versions/game");
}

export async function getLoaderVersions() {
    return getJson<LoaderVersion[]>(META, "/v2/versions/loader");
}

export async function getYarnVersions() {
    return getJson<YarnVersion[]>(META, "/v2/versions/yarn");
}

export async function getMinecraftYarnVersions(minecraftVersion: string) {
    return getJson<YarnVersion[]>(META, "/v2/versions/yarn/" + minecraftVersion);
}

export async function getLauncherProfile(minecraftVersion: string, loaderVersion: string) {
    return getJson<any>(META, `/v2/versions/loader/${minecraftVersion}/${loaderVersion}/profile/json`);
}

export async function getJavadocList() {
    return getText(MAVEN, "/jdlist.txt").then((list) => list.split("\n"))
}

export async function getLatestYarnVersion(gameVersion: string): Promise<YarnVersion | undefined> {
    return (await getJson<YarnVersion[]>(
        META, `/v2/versions/yarn/${gameVersion}?limit=1`
    ))[0];
}

export function getApiVersions(): Promise<string[]> {
    return getMavenVersions("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}

export function getKotlinAdapterVersions(): Promise<string[]> {
    return getMavenVersions("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}

export async function getApiVersionForMinecraft(minecraftVersion: string): Promise<string> {
    const apiVersions = await getApiVersions();
    return apiVersions.filter(v => isApiVersionvalidForMcVersion(v, minecraftVersion)).pop()!;
}

export function isApiVersionvalidForMcVersion(apiVersion: string, mcVersion: string | undefined) : boolean {
    if (!mcVersion) {
        return false;
    }

    if (mcVersion == "1.18") {
        return apiVersion == "0.44.0+1.18";
    }

    let branch = mcVersion;

    let versionBranches = ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"]

    versionBranches.forEach((v) => {
        if (mcVersion.startsWith(v)) {
            branch = v;
        }
    })

    // Very dumb but idk of a better (easy) way.
    if (mcVersion.startsWith("22w13oneblockatatime")) {
        branch = "22w13oneblockatatime"
    } else if (mcVersion.startsWith("25w")) {
        branch = "1.21.5"
    } else if (mcVersion.startsWith("24w")) {
        branch = "1.21.4"
    } else if (mcVersion.startsWith("23w")) {
        branch = "1.20.5"
    } else if (mcVersion.startsWith("22w")) {
        branch = "1.19.3"
    } else if (mcVersion.startsWith("1.18.2")) {
        branch = "1.18.2"
    } else if (mcVersion.startsWith("1.19.1")) {
        branch = "1.19.1"
    } else if (mcVersion.startsWith("1.19.2")) {
        branch = "1.19.2"
    } else if (mcVersion.startsWith("1.19.3")) {
        branch = "1.19.3"
    } else if (mcVersion.startsWith("1.19.4")) {
        branch = "1.19.4"
    } else if (mcVersion.startsWith("1.20.1")) {
        branch = "1.20.1"
    } else if (mcVersion.startsWith("1.20.2")) {
        branch = "1.20.2"
    } else if (mcVersion.startsWith("1.20.3")) {
        branch = "1.20.3"
    } else if (mcVersion.startsWith("1.20.4")) {
        branch = "1.20.4"
    } else if (mcVersion.startsWith("1.20.5")) {
        branch = "1.20.5"
    } else if (mcVersion.startsWith("1.20.6")) {
        branch = "1.20.6"
    } else if (mcVersion.startsWith("1.21.5")) {
        branch = "1.21.5"
    } else if (mcVersion.startsWith("1.21.4")) {
        branch = "1.21.4"
    } else if (mcVersion.startsWith("1.21.3")) {
        branch = "1.21.3"
    } else if (mcVersion.startsWith("1.21.2")) {
        branch = "1.21.2"
    } else if (mcVersion.startsWith("1.21.1")) {
        branch = "1.21.1"
    } else if (mcVersion.startsWith("1.21")) {
        branch = "1.21"
    } else if (mcVersion.startsWith("21w")) {
        branch = "1.18"
    } else if (mcVersion.startsWith("20w")) {
        branch = "1.17"
    } else if (mcVersion.startsWith("19w") || mcVersion.startsWith("18w")) {
        branch = "1.14"
    }

    return apiVersion.endsWith("-" + branch) || apiVersion.endsWith("+" + branch);
}

let xmlVersionParser = (xml: string): string[]  => {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    return Array.from(xmlDoc.getElementsByTagName("version")).map((v) => v.childNodes[0].nodeValue as string)
}

export function setXmlVersionParser(parser: (xml: string) => string[]) {
    xmlVersionParser = parser
}

export async function getMavenVersions(path: string): Promise<string[]> {
    let metadata = await getText(MAVEN, path);
    return xmlVersionParser(metadata);
}

async function getJson<T>(hostnames: string[], path: string) {
    const response = await fetchFallback(hostnames, path);
    return (await response.json()) as T;
}

async function getText(hostnames: string[], path: string): Promise<string> {
    const response = await fetchFallback(hostnames, path);
    return await response.text();
}

async function fetchFallback(hostnames: string[], path: string) : Promise<Response> {
    for (var hostname of hostnames) {
        try {
            const response = await fetch(hostname + path);

            if (response.ok) {
                return response;
            }

            console.error(await response.text());
        } catch (e) {
            console.error(e);
        }
    }

    throw new Error(`Failed to fetch: ${hostnames[0] + path}`);
}
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

export async function getInstallerVersions() {
    return getJson<InstallerVersion[]>("https://meta.fabricmc.net/v2/versions/installer");
}

export async function getGameVersions() {
    return getJson<GameVersion[]>("https://meta.fabricmc.net/v2/versions/game");
}

export async function getLoaderVersions() {
    return getJson<LoaderVersion[]>("https://meta.fabricmc.net/v2/versions/loader");
}

export async function getYarnVersions() {
    return getJson<YarnVersion[]>("https://meta.fabricmc.net/v2/versions/yarn");
}

export async function getMinecraftYarnVersions(minecraftVersion: string) {
    return getJson<YarnVersion[]>("https://meta.fabricmc.net/v2/versions/yarn/" + minecraftVersion);
}

export async function getLauncherProfile(minecraftVersion: string, loaderVersion: string) {
    return getJson<any>(`https://meta.fabricmc.net/v2/versions/loader/${minecraftVersion}/${loaderVersion}/profile/json`);
}

export async function getJavadocList() {
    return getText("https://maven.fabricmc.net/jdlist.txt").then((list) => list.split("\n"))
}

export async function getLatestYarnVersion(gameVersion: string): Promise<YarnVersion | undefined> {
    return (await getJson<YarnVersion[]>(
        `https://meta.fabricmc.net/v2/versions/yarn/${gameVersion}?limit=1`
    ))[0];
}

export function getApiVersions(): Promise<string[]> {
    return getMavenVersions("https://maven.fabricmc.net/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}

export function getKotlinAdapterVersions(): Promise<string[]> {
    return getMavenVersions("https://maven.fabricmc.net/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}

export async function getMavenVersions(path: string): Promise<string[]> {
    let metadata = await getText(path);
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(metadata, "text/xml");
    let versions = Array.from(xmlDoc.getElementsByTagName("version")).map((v) => v.childNodes[0].nodeValue as string)
    return versions;
}

async function getJson<T>(url: string) {
    const response = await fetch(url);

    if (response.ok) {
        return (await response.json()) as T;
    } else {
        throw new Error(`Failed to fetch versions (Code: ${response.status})`);
    }
}

async function getText(url: string): Promise<string> {
    const response = await fetch(url);

    if (response.ok) {
        return (await response.text());
    } else {
        throw new Error(`Failed to fetch versions (Code: ${response.status})`);
    }
}
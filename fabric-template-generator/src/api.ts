import { parseStringPromise } from "xml2js";

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

export async function getApiVersionForMinecraft(minecraftVersion: string): Promise<string> {
    const apiVersions = await getApiVersions();
    return apiVersions.find((apiVersion) => {
        let branch = minecraftVersion;
    
        let versionBranches = ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "20w14infinite", "1.18_experimental"]
    
        versionBranches.forEach((v) => {
            if (minecraftVersion.startsWith(v)) {
                branch = v;
            }
        })
    
        // Very dumb but idk of a better (easy) way.
        if (minecraftVersion.startsWith("22w13oneblockatatime")) {
            branch = "22w13oneblockatatime"
        } else if (minecraftVersion.startsWith("22w")) {
            branch = "1.19"
        } else if (minecraftVersion.startsWith("1.18.2")) {
            branch = "1.18.2"
        } else if (minecraftVersion.startsWith("1.19.1")) {
            branch = "1.19.1"
        } else if (minecraftVersion.startsWith("1.19.2")) {
            branch = "1.19.2"
        }  else if (minecraftVersion.startsWith("21w")) {
            branch = "1.18"
        } else if (minecraftVersion.startsWith("20w")) {
            branch = "1.17"
        } else if (minecraftVersion.startsWith("19w") || minecraftVersion.startsWith("18w")) {
            branch = "1.14"
        }
    
        return apiVersion.endsWith("-" + branch) || apiVersion.endsWith("+" + branch);
    })!;
}

export function getKotlinAdapterVersions(): Promise<string[]> {
    return getMavenVersions("https://maven.fabricmc.net/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}

export async function getMavenVersions(path: string): Promise<string[]> {
    let metadata = await getText(path);
    const xml = await parseStringPromise(metadata);
    return xml.metadata.versioning[0].versions[0].version;
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
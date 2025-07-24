<script lang="ts">
    import { onMount } from "svelte";
    import {
        getGameVersions,
        getYarnVersions,
        getLoaderVersions,
        getApiVersions,
        isApiVersionvalidForMcVersion,
        type YarnVersion,
        type LoaderVersion,
    } from "./Api";
    import CodeTabs from "./CodeTabs.svelte";
    import type { CodeTab } from "./CodeBlock";
    import CodeBlock from "./CodeBlock.svelte";

    let gameVersions: string[] = [];
    let yarnVersions: YarnVersion[] = [];
    let loaderVersions: LoaderVersion[] = [];
    let apiVersions: string[] = [];

    const loomVersion = "1.10-SNAPSHOT";
    let minecraftVersion: string | undefined;
    let yarnVersion: string | undefined;
    let loaderVersion: string | undefined;
    let apiVersion: string | undefined;

    const tabs: CodeTab[] = [
        {
            label: "gradle.properties",
            codeBlock: {
                language: "properties",
                code: "", // Will be filled in when the API calls return
            },
        },
        {
            label: "libs.versions.toml",
            codeBlock: {
                language: "toml",
                code: "",
            },
        },
    ];
    let selectedTab = tabs[0].label;

    onMount(async () => {
        [gameVersions, loaderVersions, yarnVersions, apiVersions] =
            await Promise.all([
                getGameVersions().then((versions) => {
                    minecraftVersion = versions.find((v) => v.stable)!.version;
                    const latestVersion = versions[0];
                    return versions
                        .filter((v) => v.stable || v == latestVersion)
                        .map((v) => v.version);
                }),
                getLoaderVersions().then((versions) => {
                    loaderVersion = versions.find((v) => v.stable)!.version;
                    return versions;
                }),
                getYarnVersions(),
                getApiVersions(),
            ]);
    });

    $: if (minecraftVersion && yarnVersions.length) {
        yarnVersion =
            yarnVersions.find((v) => v.gameVersion == minecraftVersion)
                ?.version || "unknown";
    }
    $: if (minecraftVersion && apiVersions.length) {
        apiVersion = apiVersions
            .filter((v) => isApiVersionvalidForMcVersion(v, minecraftVersion))
            .pop()!;
    }

    $: if (minecraftVersion && apiVersion && yarnVersion && loaderVersion) {
        tabs[0].codeBlock.code = `
minecraft_version=${minecraftVersion}
yarn_mappings=${yarnVersion}
loader_version=${loaderVersion}
loom_version=${loomVersion}

# Fabric API
fabric_version=${apiVersion}
`.trim();
        tabs[1].codeBlock.code = `
minecraft_version = "${minecraftVersion}"
yarn_mappings = "${yarnVersion}"
loader_version = "${loaderVersion}"
loom_version = "${loomVersion}"

# Fabric API
fabric_version = "${apiVersion}"
`.trim();
    }
</script>

{#await gameVersions}
    <p>Loading versions...</p>
{:then gameVersions}
    <h2>Latest Versions</h2>
    <p>
        Select a Minecraft version to get the recommended versions of Fabric
        Loader, Yarn, Loom and Fabric API to use in your project.
    </p>
    <p>
        Minecraft Version:
        <select bind:value={minecraftVersion} style="min-width: 200px">
            {#each gameVersions as version}
                <option value={version}>{version}</option>
            {/each}
        </select>
    </p>

    <CodeTabs {tabs} bind:selectedTab />

    <p>
        <strong>Important Note:</strong> In some cases, such as snapshots or special
        releases, the Fabric API version might not align perfectly with your Minecraft
        version.
    </p>
    <p>
        If you encounter issues, double-check the latest release of Fabric API
        on <a href="https://modrinth.com/mod/fabric-api/versions">Modrinth</a>
        or
        <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files"
            >CurseForge</a
        >.
    </p>

    <hr />

    <h2>Automatically Update Mappings</h2>
    <p>
        Keep your project up-to-date with the correct Yarn mappings using this
        automatic update command:
    </p>

    <CodeBlock
        codeBlock={{
            language: "bash",
            code: `gradlew migrateMappings --mappings "${yarnVersion}"`,
        }}
    />

    <p>
        For more information on this command, you should refer to the <a
            href="https://fabricmc.net/wiki/tutorial:migratemappings"
            >Updating Yarn Mappings</a
        > wiki page.
    </p>
{:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
        For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.
    </p>
{/await}

<hr />

<h2>Loom</h2>

<p>
    The recommended loom version is <code>{loomVersion}</code>. This is usually
    defined near the top of your <code>build.gradle</code> file.
</p>

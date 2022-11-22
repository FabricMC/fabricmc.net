<script lang="ts">
 import {
        getGameVersions,
        getYarnVersions,
        getLoaderVersions,
        getApiVersions
    } from "./Api";

    let minecraftVersion: string | undefined;
    let yarnVersion: string;
    let loaderVersion: string;
    let apiVersion: string;

    let gameVersions = getGameVersions().then((versions) => {
        minecraftVersion = versions.find((v) => v.stable)!.version
        return versions.map((v) => v.version);
    })

    const yarnVersions = getYarnVersions()
    const loaderVersions = getLoaderVersions().then((versions) => {
        loaderVersion = versions.find((v) => v.stable)!.version
        return versions;
    });
    const apiVersions = getApiVersions();

    $: yarnVersions.then(versions => yarnVersion = versions.find(v => v.gameVersion == minecraftVersion)?.version || "unknown")
    $: apiVersions.then(versions => apiVersion = versions.filter(v => validForMcVersion(v, minecraftVersion)).pop()!)

    function validForMcVersion(apiVersion: string, mcVersion: string | undefined) : boolean {
        if (!mcVersion) {
            return false;
        }

        let branch = mcVersion;

        let versionBranches = ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "20w14infinite", "1.18_experimental"]

        versionBranches.forEach((v) => {
            if (mcVersion.startsWith(v)) {
                branch = v;
            }
        })

        // Very dumb but idk of a better (easy) way.
        if (mcVersion.startsWith("22w13oneblockatatime")) {
            branch = "22w13oneblockatatime"
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
        } else if (mcVersion.startsWith("21w")) {
            branch = "1.18"
        } else if (mcVersion.startsWith("20w")) {
            branch = "1.17"
        } else if (mcVersion.startsWith("19w") || mcVersion.startsWith("18w")) {
            branch = "1.14"
        }

        return apiVersion.endsWith("-" + branch) || apiVersion.endsWith("+" + branch);
    }
</script>

{#await gameVersions}
    <p>Loading versions..</p>
{:then gameVersions}
    <p>
        Minecraft Version:
        <select bind:value={minecraftVersion} style="min-width: 200px">
            {#each gameVersions as version}
                <option value={version}>{version}</option>
            {/each}
        </select>
    </p>

    <div style="margin-bottom: 15px;">
        <pre><code>
minecraft_version={minecraftVersion}
yarn_mappings={yarnVersion}
loader_version={loaderVersion}

#Fabric api
fabric_version={apiVersion}
        </code></pre>
      </div>

      <h4>Automatically update mappings</h4>
      <p>Mappings can be auto updated by using the following command. See the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">wiki page</a> for more help.</p>

      <code class="copy-code">
        gradlew migrateMappings --mappings "{yarnVersion}"
      </code>

      <p>Note: The fabric-api version may not be the correct version for the given Minecraft version in some situations. Check the <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> page if you run into issues.</p>
{:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
        For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.
    </p>
{/await}

<h4>Loom</h4>

<p>The recommended loom version is <strong>1.0-SNAPSHOT</strong>. This is usually defined near the top of your  build.gradle file.</p>

<style>
    .copy-code {
      display: inline-block;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      user-select: all;
    }
  </style>

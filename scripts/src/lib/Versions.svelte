<script lang="ts">
 import {
        getGameVersions,
        getYarnVersions,
        getLoaderVersions,
        getApiVersions,
        isApiVersionvalidForMcVersion
    } from "./Api";

    let minecraftVersion: string | undefined;
    let yarnVersion: string;
    let loaderVersion: string;
    let apiVersion: string;

    let gameVersions = getGameVersions().then((versions) => {
        minecraftVersion = versions.find((v) => v.stable)!.version
        return versions.map((v) => v.version);
    });

    const loaderVersions = getLoaderVersions().then((versions) => {
        loaderVersion = versions.find((v) => v.stable)!.version
        return versions;
    });

    const yarnVersions = getYarnVersions()
    const apiVersions = getApiVersions();

    $: yarnVersions.then(versions => yarnVersion = versions.find(v => v.gameVersion == minecraftVersion)?.version || "unknown")
    $: apiVersions.then(versions => apiVersion = versions.filter(v => isApiVersionvalidForMcVersion(v, minecraftVersion)).pop()!)
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

<p>The recommended loom version is <strong>1.4-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.</p>

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

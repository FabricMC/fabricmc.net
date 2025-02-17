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
        const latestVersion = versions[0];
        return versions.filter((v) => v.stable || v == latestVersion).map((v) => v.version);
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
    <p>Loading versions...</p>
{:then gameVersions}
		<h2>Latest Versions</h2>
		<p>Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.</p>
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

# Fabric API
fabric_version={apiVersion}
        </code></pre>

				<p><strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.</p>
				<p>If you encounter issues, double-check the latest release of Fabric API on <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> or <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a>.</p> 
      </div>
			
			<hr />

      <h2>Automatically Update Mappings</h2>
			<p>Keep your project up-to-date with the correct Yarn mappings using this automatic update command:</p>

			<code class="copy-code">
				gradlew migrateMappings --mappings "{yarnVersion}"
			</code>

			<p>For more information on this command, you should refer to the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">Updating Yarn Mappings</a> wiki page.</p>

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

<p>The recommended loom version is <strong>1.10-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.</p>

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

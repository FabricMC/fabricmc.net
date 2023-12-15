<script lang="ts">
    import {getGameVersions, getInstallerVersions, getLoaderVersions} from "./Api";
    import DownloadIcon from "./DownloadIcon.svelte";

    let gameVersion: string | undefined;
    let loaderVersion: string | undefined;
    let installerVersion: string | undefined;

    $: serverJarUrl = `https://meta.fabricmc.net/v2/versions/loader/${gameVersion}/${loaderVersion}/${installerVersion}/server/jar`;
    $: serverJarFilename = `fabric-server-mc.${gameVersion}-loader.${loaderVersion}-launcher.${installerVersion}.jar`
    $: installerJarUrl = `https://maven.fabricmc.net/net/fabricmc/fabric-installer/${installerVersion}/fabric-installer-${installerVersion}.jar`;

    let versions = Promise.all([getGameVersions(), getLoaderVersions(), getInstallerVersions()])
      .then(([gameVersions, loaderVersions, installerVersions]) => {
        const versions = {
            game: gameVersions,
            loader: loaderVersions.filter((v) => {
              const split = v.version.split(".")
              return parseInt(split[0]) > 0 || parseInt(split[1]) >= 12 // 0.12.0 loader or newer
            }),
            installer: installerVersions.filter((v) => {
              const split = v.version.split(".")
              return parseInt(split[0]) > 0 || parseInt(split[1]) >= 8 // 0.8.0 installer or newer
            })
        };

        // Populates the default version with the latest stable, or latest if none are stable.
        gameVersion = (versions.game.find((v) => v.stable) || versions.game[0]).version;
        loaderVersion = (versions.loader.find((v) => v.stable) || versions.loader[0]).version;
        installerVersion = (versions.installer.find((v) => v.stable) || versions.installer[0]).version;

        return versions;
    })
</script>

<main>
{#await versions}
  <p>Loading versions..</p>
{:then data}

  <div class="download">
    <div class="form-line">
      <label for="minecraft-version">Minecraft Version:</label>
      <select id="minecraft-version" bind:value={gameVersion} style="min-width: 200px">
        {#each data.game as version}
          <option value={version.version}>{version.version}</option>
        {/each}
      </select>
    </div>

    <div class="form-line">
      <label for="loader-version">Fabric Loader Version:</label>
      <select id="loader-version" bind:value={loaderVersion} style="min-width: 200px">
        {#each data.loader as version}
          <option value={version.version}>{version.version}</option>
        {/each}
      </select>
    </div>

    <div class="form-line">
      <label for="installer-version">Installer Version:</label>
      <select id="installer-version" bind:value={installerVersion} style="min-width: 200px">
        {#each data.installer as version}
          <option value={version.version}>{version.version}</option>
        {/each}
      </select>
    </div>

    <div class="download">
      <a class="button primary large" href={serverJarUrl}><DownloadIcon />Executable Server (.jar)</a>
    </div>
    <p>
      <a href={installerJarUrl}>
        Download installer for older versions or manual installation
      </a>
    </p>
  </div>

  <p>The executable jar is a small launcher that will start the Fabric enabled Minecraft server using the versions specified above. There is no need to use an installer when using this method.</p>

  <div style="margin-bottom: 15px;">
    <h4>CLI download:</h4>
    <p>Use the following command to download the executable server launcher to the current directory</p>
    <code>
      curl -OJ {serverJarUrl}
    </code>
  </div>

  <div style="margin-bottom: 15px;">
    <h4>Launch command:</h4>
    <p>Use the following command to run the executable server launcher with 2GB of ram. After a small wait the Minecraft server will be ready.</p>
    <code>
      java -Xmx2G -jar {serverJarFilename} nogui
    </code>
  </div>

{:catch error}
  <p style="color: red">Error: {error.message}</p>
  <p>
    For support please visit one of our
    <a href="/discuss/">community discussion</a>
    groups.
  </p>
{/await}

</main>

<style>
  code {
    display: inline-block;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    user-select: all;
  }
</style>
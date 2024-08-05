<script lang="ts">
  import {getInstallerVersions} from "./Api";
  import DownloadIcon from "./DownloadIcon.svelte";

  const win32 = navigator.platform == "Win32"

  let showVersionSelection = false;
  let expertOptions = false;
  let selectedVersion = "";
  let versions = getDownloads();

  async function getDownloads() {
    const downloads = await getInstallerVersions();
    selectedVersion = downloads.find(v => v.stable)?.url ?? "";
    showVersionSelection = downloads[0].stable == false;
    return downloads;
  }

  function showExpertOptions() {
    expertOptions = true;
  }

  async function getVersion() {
    return (await versions).find(v => v.url === selectedVersion);
  }
</script>

<main>
  {#await versions}
    <p>Loading versions..</p>
  {:then data}

    {#if expertOptions}
      Installer Version:
      <select bind:value={selectedVersion} style="min-width: 200px">
        {#each data as version}
          <option value={version.url}>{version.version}</option>
        {/each}
      </select>

      <br />
      <br />
    {:else if showVersionSelection}
      {#await getVersion() then latest}
        <p>
          {#if latest?.stable}Installer Version: {latest.version} (Latest){/if}
          {#if !expertOptions}
            <a href={'#'} on:click|preventDefault={showExpertOptions}>
              Show beta versions
            </a>
          {/if}
        </p>
      {/await}
    {/if}

    <div class="download">
      <p>
        The Minecraft and Fabric Loader versions can be selected in the installer, this download
        works for every version we support.
      </p>

      {#if win32}
      <p>
        <a class="button primary large" href={selectedVersion.replace('.jar', '.exe')}>
          <DownloadIcon/> Download for Windows
        </a>
        <br>
        <a href={selectedVersion}>
          Download universal jar
        </a>
      </p>
    {:else}
      <p>
        <a class="button primary large" href={selectedVersion}>
          <DownloadIcon/> Download installer (Universal/.JAR)
        </a>
        <br>
        <a href={selectedVersion.replace('.jar', '.exe')}>
          Download for Windows
        </a>
      </p>
    {/if}
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
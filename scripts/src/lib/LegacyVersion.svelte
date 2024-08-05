<script lang="ts">
  import {getGameVersions, getLatestYarnVersion, getLoaderVersions} from "./Api";

  let listSnapshots = false;

  let selectedGameVersion: string = "";
  let selectedLoaderVersion: string = "";

  let gameVersions = getGameVersions()
  .then(versions => {
    //Select the latest stable version by default
    selectedGameVersion = versions.find(
            version => version.stable || listSnapshots
    )?.version ?? "";
    return versions;
    });

  let loaderVersions = getLoaderVersions()
  .then(versions => {
    selectedLoaderVersion = versions[0]?.version ?? "";
    return versions;
  });

  export async function getSelectedVersions() {
    //Get the latest yarn version for the provided game version, used for legacy support
    const yarnVersion = (await getLatestYarnVersion(selectedGameVersion))?.version ?? "";

    return {yarnVersion, loaderVersion: selectedLoaderVersion, selectedGameVersion};
  }
</script>

<main>

  <label>
    <input type="checkbox" bind:checked={listSnapshots} />
    Show snapshot versions
  </label>
  <br />
  <br />

  {#await gameVersions}
    <p>Loading versions..</p>
  {:then data}
    Game version:
    <select bind:value={selectedGameVersion} style="min-width: 200px">
      {#each data as version}
        {#if version.stable || listSnapshots}
          <option value={version.version}>{version.version}</option>
        {/if}
      {/each}
    </select>
  {:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
      For support please vist one of our
      <a href="/discuss/">community discussion</a>
      groups.
    </p>
  {/await}

  <br />
  <br />

  {#await loaderVersions}
    <p>Loading versions..</p>
  {:then data}
    Loader version:
    <select bind:value={selectedLoaderVersion} style="min-width: 200px">
      {#each data as version}
        <option value={version.version}>{version.version}</option>
      {/each}
    </select>
  {:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
      For support please vist one of our
      <a href="/discuss/">community discussion</a>
      groups.
    </p>
  {/await}

</main>

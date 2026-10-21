<script lang="ts">
  import LegacyVersion from "./LegacyVersion.svelte";

  let legacyVersion: LegacyVersion;

  async function copyImportEntry() {
    const {selectedGameVersion, loaderVersion} = legacyVersion.getSelectedVersions();
    const url = getImportURL(selectedGameVersion, loaderVersion);
    return navigator.clipboard.writeText(url);
  }

  function getImportURL(minecraftVersion: string, loaderVersion: string) {
    const url = `https://meta.fabricmc.net/misc/data/mcupdater/${encodeURIComponent(minecraftVersion)}/${encodeURIComponent(loaderVersion)}`;

    return `<Import url="${url}">fabric</Import>`;
  }
</script>

<main>
  <LegacyVersion bind:this={legacyVersion} />
  <br />
  <button class="button primary large" on:click={copyImportEntry}>Copy MCUpdater Import entry</button>
</main>

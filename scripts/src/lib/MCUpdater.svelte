<script lang="ts">
  import LegacyVersion from "./LegacyVersion.svelte";

  let legacyVersion: LegacyVersion;

  async function copyImportEntry() {
    const {yarnVersion, loaderVersion} = await legacyVersion.getSelectedVersions();
    const url = getImportURL(yarnVersion, loaderVersion);
    return navigator.clipboard.writeText(url);
  }

  function getImportURL(yarnVersion: string, loaderVersion: string) {
    const url = `https://fabricmc.net/download/mcupdater?yarn=${encodeURIComponent(yarnVersion)}&amp;loader=${encodeURIComponent(loaderVersion)}`;

    return `<Import url="${url}">fabric</Import>`;
  }
</script>

<main>
  <LegacyVersion bind:this={legacyVersion} />
  <br />
  <button class="button primary large" on:click={copyImportEntry}>Copy MCUpdater Import entry</button>
</main>

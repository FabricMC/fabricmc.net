<script lang="ts">
import { getLauncherProfile } from "./Api";

  import LegacyVersion from "./LegacyVersion.svelte";

  let legacyVersion: LegacyVersion;

  async function downloadJson() {
    const {selectedGameVersion, loaderVersion} = await legacyVersion.getSelectedVersions();
    download("version.json", await getJsonProfile(selectedGameVersion, loaderVersion))
  }

  async function getJsonProfile(minecraftVersion: string, loaderVersion: string): Promise<string> {
    const mcProfile = await getLauncherProfile(minecraftVersion, loaderVersion);
    const technicProfile = {
      id: minecraftVersion,
      inheritsFrom: mcProfile.inheritsFrom,
      releaseTime: mcProfile.releaseTime,
      time: mcProfile.time,
      type: mcProfile.type,
      minecraftArguments: "--username ${auth_player_name} --version ${version_name} --gameDir ${game_directory} --assetsDir ${assets_root} --assetIndex ${assets_index_name} --uuid ${auth_uuid} --accessToken ${auth_access_token} --userType ${user_type} --versionType ${version_type}",
      libraries: mcProfile.libraries,
      mainClass: mcProfile.mainClass
    }

    return JSON.stringify(technicProfile, null, 2);
  }
  function download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
</script>

<main>
  <LegacyVersion bind:this={legacyVersion} />
  <br />
  <button class="button primary large" on:click={downloadJson}>Download bin/version.json file</button>
</main>

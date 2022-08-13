<script lang="ts">
    import JSZip from "jszip";
    import { getGameVersions } from "fabric-template-generator/api";
    import FileSaver from "file-saver";
    import DownloadIcon from "./DownloadIcon.svelte";

    import gradleWrapperUrl from "./template/wrapper/gradle-wrapper.jar?url";

    let minecraftVersion: string;
    let projectName = "Mod Name";
    let packageName = "com.example";
    let useKotlin = false;
    let dataGeneration = false;
    let githubActions = false;
    let splitSources = false;

    let showAdancedOptions = false;
    let loading = false;

    const versions = Promise.all([getGameVersions()]).then(([gameVersions]) => {
        const game = gameVersions.filter((v) => v.stable);
        minecraftVersion = game[0].version;
        return {
            game,
        };
    });

    async function generate() {
        loading = true;

        const generator = await import("fabric-template-generator");
        const config = {
            minecraftVersion,
            projectName,
            packageName,
            useKotlin,
            dataGeneration,
            githubActions,
            splitSources,
        };

        const zip = new JSZip();

        await generator.generateTemplate({
            config,
            writer: {
                write: async (path, content) => {
                    zip.file(path, content);
                },
            },
            gradleWrapperLoader: loadGradleWrapper,
        });

        FileSaver.saveAs(
            await zip.generateAsync({ type: "blob" }),
            `fabric-mod-template-${config.minecraftVersion}.zip`
        );

        loading = false;
    }

    function clickShowAdancedOptions() {
        showAdancedOptions = true;
    }

    async function loadGradleWrapper(): Promise<ArrayBuffer> {
        try {
            const res = await fetch(gradleWrapperUrl);
            return await res.arrayBuffer();
        } catch (error) {
            throw new Error(`Unable to request gradle-wrapper.jar: ${error}`);
        }
    }
</script>

<div />

{#await versions}
    <p>Loading versions..</p>
{:then data}
    <div class="download">
        <div class="form-line">
            <h4 for="project-name">Mod Name:</h4>
            <p>Choose a name for your new mod.</p>
            <input id="project-name" value={projectName} />
        </div>

        <div class="form-line">
            <h4 for="package-name">Package Name:</h4>
            <p>
                Choose a unique package name for your new mod. The package name
                should be unique to you.
            </p>
            <input id="package-name" value={packageName} />
        </div>

        <div class="form-line">
            <h4 for="minecraft-version">Minecraft Version:</h4>
            <p>
                Select the version of Minecraft that you wish to use for your
                mod.
            </p>
            <select
                id="minecraft-version"
                bind:value={minecraftVersion}
                style="min-width: 200px"
            >
                {#each data.game as version}
                    <option value={version.version}>{version.version}</option>
                {/each}
            </select>
        </div>

        <div class="form-line">
            {#if showAdancedOptions}
                <h4>Adavanced Options:</h4>
                <label>
                    <input type="checkbox" bind:checked={useKotlin} />
                    Kotlin
                </label>
                <label>
                    <input type="checkbox" bind:checked={dataGeneration} />
                    Data Generation
                </label>
                <label>
                    <input type="checkbox" bind:checked={githubActions} />
                    Github Actions
                </label>
                <label>
                    <input type="checkbox" bind:checked={splitSources} />
                    Split client and common sources
                </label>
            {:else}
                <a href={"#"} on:click|preventDefault={clickShowAdancedOptions}
                    >Show Adavanced Options</a
                >
            {/if}
        </div>

        {#if loading}
            <a class="button" href={""}>
                <DownloadIcon /> Generating...
            </a>
        {:else}
            <a class="button" href={""} on:click|preventDefault={generate}>
                <DownloadIcon /> Download Template (.ZIP)
            </a>
        {/if}
    </div>
{:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
        For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.
    </p>
{/await}

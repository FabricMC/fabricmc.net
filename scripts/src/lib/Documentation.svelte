<script lang="ts">
    import {
        getJavadocList,
        getYarnVersions,
        getLoaderVersions,
        getMixinVersions
    } from "./Api";

		function handleSelectChange(event: any, project: any) {
				const selectedVersion = event.target.value;

				if (selectedVersion.includes("Select")) return;

                window.location.assign(`https://maven.fabricmc.net/docs/${project.prefix}${selectedVersion}/`);
		}

    function filterAndSortVersions(
        versions: string[],
        prefix: string,
        sorted: string[]
    ): string[] {
        return versions
            .filter((v) => v.startsWith(prefix))
            .map((v) => v.slice(prefix.length))
            .sort((a, b) => {
                return sorted.indexOf(a) - sorted.indexOf(b);
            });
    }

    let data = Promise.all([
        getJavadocList(),
        getYarnVersions(),
        getLoaderVersions(),
        getMixinVersions()
    ]).then(([jdList, yarnVersions, loaderVersions, mixinVersions]) => {
        const apiVersions = filterAndSortVersions(
            jdList,
            "fabric-api-",
            []
        ).reverse();

        return [
            {
                name: "Minecraft (Yarn)",
                prefix: "yarn-",
                versions: filterAndSortVersions(
                    jdList,
                    "yarn-",
                    yarnVersions.map((v) => v.version)
                ),
            },
            {
                name: "Fabric API",
                prefix: "fabric-api-",
                versions: apiVersions,
            },
            {
                name: "Fabric Loader",
                prefix: "fabric-loader-",
                versions: filterAndSortVersions(
                    jdList,
                    "fabric-loader-",
                    loaderVersions.map((v) => v.version)
                ),
            },
            {
                name: "Mixin",
                prefix: "sponge-mixin-",
                versions: filterAndSortVersions(
                    jdList,
                    "sponge-mixin-",
                    mixinVersions.reverse()
                ),
            },
        ];
    });
</script>

<div />

{#await data}
    <p>Loading versions..</p>
{:then data}
    {#each data as project}
        <div class="javadoc-selector">
					<select value="Select {project.name} Version" on:change={(event) => handleSelectChange(event, project)}>
						<option>Select {project.name} Version</option>
							{#each project.versions as version}
									<option value={version}>{version}</option>
							{/each}
					</select>
				</div>
    {/each}
{:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
        For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.
    </p>
{/await}

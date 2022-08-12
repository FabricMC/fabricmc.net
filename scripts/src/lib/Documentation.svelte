<script lang="ts">
    import {
        getJavadocList,
        getYarnVersions,
        getLoaderVersions,
    } from "./Api";

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
    ]).then(([jdList, yarnVersions, loaderVersions]) => {
        const apiVersions = filterAndSortVersions(
            jdList,
            "fabric-api-",
            []
        ).reverse();

        return [
            {
                name: "Minecraft (yarn mappings)",
                desc: "Javadoc documentation for Minecraft generated from the comments in the yarn mappings.",
                prefix: "yarn-",
                versions: filterAndSortVersions(
                    jdList,
                    "yarn-",
                    yarnVersions.map((v) => v.version)
                ),
                selected: yarnVersions[0].version,
            },
            {
                name: "Fabric API",
                desc: "Javadoc documentation for Fabric API",
                prefix: "fabric-api-",
                versions: apiVersions,
                selected: apiVersions[0],
            },
            {
                name: "Fabric Loader",
                desc: "Javadoc documentation for Fabric API",
                prefix: "fabric-loader-",
                versions: filterAndSortVersions(
                    jdList,
                    "fabric-loader-",
                    loaderVersions.map((v) => v.version)
                ),
                selected: loaderVersions[0].version,
            },
            // Disabled for now as the mixin JD css seems broken
            // {
            //     name: "Mixin (Fabric's fork)",
            //     desc: "Javadoc documentation for Fabric's mixin fork",
            //     prefix: "sponge-mixin-",
            //     versions: mixinVersions,
            //     selected: mixinVersions[0],
            // },
        ];
    });
</script>

<div />

{#await data}
    <p>Loading versions..</p>
{:then data}
    <p>Online Javadoc is available for each project and the game itself using the links below, but also through your IDE directly.</p>
    {#each data as project}
        <!-- <h5>{project.name}</h5> -->
        <!-- <p>{project.desc}</p> -->

        <p>
            {project.name}:
            <select bind:value={project.selected} style="min-width: 200px">
                {#each project.versions as version}
                    <option value={version}>{version}</option>
                {/each}
            </select>

            <a
            class="jdbutton"
            href={"https://maven.fabricmc.net/docs/" +
                project.prefix +
                project.selected +
                "/"}
            >
                Go to JavaDoc
            </a>
        </p>
    {/each}
{:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
        For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.
    </p>
{/await}

---
layout: post
title: June Status Update
ref: jun-status-update
---

![](/assets/external/B3zWLoL.jpg)


1.16 pre-releases have begun, and with it comes a new wave of updates for the Fabric toolchain. There are several new key things you should be aware of, including breaking changes from the base game, new Fabric API features, and faster versions of developer tools.

Now is a great time to start thinking about updating your mods to the 1.16 pre-releases as it will allow a fast and smooth transition to the full 1.16 release.

A more player-focused blog post will be released alongside the Minecraft 1.16 official release. In the meanwhile feel free to join the [Discord Server](https://discord.gg/v6v4pMv) to see some of the awesome mods and creations people are making!

## Improvements

Fabric has received a large number of improvements and bug fixes over the last few months, which will greatly improve the developer experience. Most of these contributions came from members of the community via pull requests.

### Loom

Loom is the Gradle plugin used by all fabric mods to make setting up a development environment easier, and building a releasable  jar as painless as possible 

Loom 0.4 brings performance improvements, new features, and bug fixes to the table. One of the greatest improvements to Loom from the past few months is support for multi-threading in several operations, which greatly improves speed. A test on medium-tier hardware<sup>1</sup> reveals a 600%+ speed improvement on `genSources` between Loom `0.2.7-SNAPSHOT`, which took 3m4s, and the most recent version, `0.4-SNAPSHOT`, which took an incredible 27s. 

Improvements were also made with startup times: all dependencies are now remapped at once instead of one by one. This saved over 30 seconds during testing and was made possible through improvements to [tiny-remapper](https://github.com/FabricMC/tiny-remapper).

#### Updating Loom

Updating your projects to use a newer version of Loom is easy! Locate the area at the top of your `build.gradle` file where you pull Fabric Loom as a plugin:

```groovy
plugins {
    id 'fabric-loom' version '0.2.7-SNAPSHOT'
}
```

Replace the existing version with your target version. In this example, we will update to `0.4-SNAPSHOT`:

```groovy
plugins {
    id 'fabric-loom' version '0.4-SNAPSHOT'
}
```

You can view how the [Fabric Example Mod](https://github.com/FabricMC/fabric-example-mod) was updated [here](https://github.com/FabricMC/fabric-example-mod/commit/8d952c922d566bd386d76108c222baa2e2cc5d33).

---

### Yarn

[Yarn](https://github.com/FabricMC/yarn) has continued to progress at a rapid rate throughout the 1.16 snapshot cycle and grows ever closer to 100% mapping coverage. As of 1.16-pre2, yarn statistics are as follows:

| Category        | Progress         |
| --------------- | ---------------- |
| Classes         | 100%            |
| Methods         | 95.71%            |
| Fields          | 95.54%            |



#### Big Renames

Based on developer feedback, some larger-scale class renames have been applied to 1.16 yarn:

| Previous Name   | New Name         |
| --------------- | ---------------- |
| BasicInventory  | [SimpleInventory](https://github.com/FabricMC/yarn/pull/1364)  |
| Container       | [ScreenHandler](https://github.com/FabricMC/yarn/pull/1106)    |
| ContainerScreen | [HandledScreen](https://github.com/FabricMC/yarn/pull/1106/files)    |
| IWorld          | [WorldAccess](https://github.com/FabricMC/yarn/pulls?q=is%3Apr+is%3Aclosed+WorldAccess)      |


You can automatically update your mods source code to the new names using Loom's `migrateMappings` task. You can contribute to yarn by visiting the [GitHub repository](https://github.com/FabricMC/yarn).

A big thanks goes out to over 30 contributors who have helped create these mappings since the first 1.16 snapshot!

---

### Fabric (API)

[Fabric API](https://github.com/FabricMC/fabric), the core library that powers a lot of Fabric mods, has received numerous updates over the past 6 months. It has been updated weekly since the beginning of February for the 1.16 snapshots, covering 16 snapshot versions and 2 pre-releases, as of the start of June. A lot of the mentioned changes below are also in the 1.14 and 1.15 builds.

#### Villager Profession API

[i509VCB's Villager Profession API](https://github.com/FabricMC/fabric/pull/493), which eases the creation of Villager Professions and Point of Interests, was recently merged into Fabric API. 

#### Object Builders 

The Object Builders module has successfully transitioned from [v0 to v1](https://github.com/FabricMC/fabric/pull/537) thanks to the efforts of i509VCB and others, paving the way for more API utilities in the future.

#### Nether Biome API

The first 1.16 snapshot, 20w06a, which was released on February 5th, was quickly followed by [SuperCoder7979's Nether Biome API](https://github.com/FabricMC/fabric/pull/496) on the 6th. This API allows developers to easily add their custom biomes to the Nether. 

#### Improved Commands API

The original API used to add commands was one of the oldest modules in fabric and was due a refresh to bring it upto date. Thanks to i509VCB [Fabric Command API v1](https://github.com/FabricMC/fabric/pull/539) was added while maintaining backwards compatibility for existing mods. 

#### Tool Attributes

The new [tool attribute](https://github.com/FabricMC/fabric/pull/460) module is designed to replace the old mining level module. As with the other modules backwards compatibility was kept for older mods. Thanks to Boundarybreaker and shedaniel for helping with this. 

#### Other Changes

There are too many changes to list in detail, bellow are links to some smaller changes that are also included:

* [Various Indigo fixes](https://github.com/FabricMC/fabric/pull/640) (grondag)
* [Model predicate provider registry](https://github.com/FabricMC/fabric/pull/601) (liach)
* [Restart testmods](https://github.com/FabricMC/fabric/pull/593) (modmuss50)
* [Builtin item renderer registry](https://github.com/FabricMC/fabric/pull/563/) (Juuxel)
* [Improvements to the registry sync](https://github.com/FabricMC/fabric/pull/525) (modmuss50)
* [Entity attribute registry](https://github.com/FabricMC/fabric/pull/568) (liach)

#### Breaking Changes

Despite our best efforts, some parts of Fabric API will be broken with the 1.16 update. The most notable change is in **`FabricDimensionType`** due to the conversion of dimensions and dimension types to being data-driven. We are not currently sure what can be kept and what must be removed. `fabric-climbable-api-v1` has also been removed, as it was purely a backport of 1.16's `minecraft:climbable` tag.

Some of the modules originally developed targeting 1.16 have already been backported to 1.15, like the new version 1 of Fabric Object Builders.

---

### Enigma

[Enigma](https://github.com/FabricMC/enigma) is the tool that is used to map out the Minecraft codebase. Over the last few months, members of the community have worked hard to improve it in *many* areas.

#### GUI Improvements

2xsaiko has worked hard to bring one of the most requested features to Enigma: [Tab support](https://github.com/FabricMC/Enigma/pull/238)! You can now open multiple files at the same time, resulting in faster workflows and an overall better experience.

![](/assets/external/7iTKHzs.png)


#### Multiplayer

Earthcomputer worked on a fun [pull request to add multiplayer support](https://github.com/FabricMC/Enigma/pull/221), or as he puts it, "~~battle royale~~ real-time collab support".

To access this feature, open a jar in Enigma, and click the *Collab* option at the top of the screen:

![](/assets/external/CedYVnt.png)


#### Modularity

Runemoro [split the code base of Enigma](https://github.com/FabricMC/Enigma/pull/242) into 4 distinct sections. The new 4 modules of Enigma include `enigma`, `enigma-swing`, `enigma-server`, and `enigma-cli`. This will make it easier to continue to improve enigma as well as write tools that use parts of it.

## ModFest

The 1.15 [ModFest](https://modfest.net/1.15/entries/) event, which ran from March 28<sup>th</sup> to April 5<sup>th</sup>, will be followed by another ModFest centered around 1.16. ModFest 1.16 runs from **June 12<sup>th</sup>** and **June 21<sup>st</sup>**, 2020. You can stay up to date on ModFest news by joining the [ModFest Discord server](https://discord.gg/gn543Ee). The player blog post, which will arrive in the near future, will further document the results of the ModFest 1.15.

### Notes
1. Tests were performed on an RX 590 with a Ryzen 3600 and 16GB allocated to IntelliJ IDEA under standard conditions.

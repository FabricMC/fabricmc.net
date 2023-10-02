---
layout: post
title: November Status Update
ref: nov-status-update
---

It has been a while since the last blog post while we've been making steady progress.

Fabric has been very successful at keeping pace with the 1.15 snapshots, usually releasing mappings and Fabric API updates within 15-120 minutes of each release.


## Pretty sources

The days of `blockState_1` and `int_3` are over! Fabric's toolchain has been enhanced to both support manually assigned parameter names and automatically generate nicer names for everything else.

Yarn, Fabric's mapping project, has been collecting parameter names for a while, but none of the tooling supported them. We designed a new flexible mapping format "Tiny V2", contributions from Fudge and liach implemented it throughout the toolchain and Tiny-Remapper learned how to apply the names.

To use Yarn parameter names configure your mod development project as follows:
- in build.gradle, change the fabric-loom plugin version to `0.2.6-SNAPSHOT`
- in gradle.properties, use a recent yarn_mappings version and add the v2 classifier, e.g. `1.14.4+build.15:v2`

Better automatic name generation doesn't need any configuration.

Use `gradlew genSources` and the ide task, e.g. `gradlew eclipse`, to apply the changes. For more information see this [gist](https://gist.github.com/modmuss50/5e9415c7b6ea0fc96e56002a2b5f4fc7), or use one of our [discussion channels ](https://fabricmc.net/discuss/).

## Virtual minecraft mod

Fabric Loader 0.6 added a builtin `minecraft` mod that doesn't do anything but provide a mod+version pair for dependencies. The game versions get normalized to be (mostly) Semver compliant, `19w39a` becomes `1.15-alpha.19.39.a` and `1.14 Pre-Release 2` becomes `1.14-rc.2`.

Mods should use it in their fabric.mod.json to both require Minecraft and its libraries (Loader is game agnostic) and specify the compatible version range. This will ensure users get a nice proper error instead of crashing further down the line.

Examples: `1.14.x` for any 1.14 release/snapshot, `1.15.x` for any 1.15 release/snapshot, `~1.15-alpha.19.39.a` for any 1.15 release/snapshot at least 19w39a, `>=1.14.4 <1.15-` for any 1.14 release/snapshot at least 1.14.4. 

We recommend the `1.14.x` form for most mods, a future Wiki article will explain the more complex forms and why the trailing dash at `<1.15-` is mandatory. 

## Loader Error GUI

AlexIIL contributed the beginnings of a GUI to show mod loading errors. It shows the problems directly instead of having to dig through logs. The current implementation is limited to showing missing or incompatible dependencies. Further work is planned to improve the error messages, presentation and error type coverage.

![Screenshot](/assets/external/javaw_2019-11-19_17-07-28.png)

## Mixin 0.8

Mixin is the under-laying system that all Fabric mods use to apply changes to the Minecraft classes (the game code) at runtime. Mumfrey has been hard at work for over a year to get this version out, the offical changelog can be found [here](https://github.com/SpongePowered/Mixin/wiki/Release-Notes---Mixin-0.8).

Mixin 0.8 unfortunately comes with some backwards incompatible changes around its plugins. Most mods don't use Mixin plugins and work as before. The Fabric team doesn't support mixin plugins and discourages their use. The primary incompatibility involves Mixin no longer bundling the ASM library in shaded form, making its root package `org.objectweb.asm` instead of `org.spongepowered.asm`. References to `Opcodes` constants haven been inlined by Javac, so regular Mixin using mods should remain binary compatible, but may have to adjust their source code for newer builds.

Along with the mixin update, ASM has been updated to version 7.2, this prepares Fabric for Java 14 scheduled for release during Q1 next year. 

Fabric Loader added a new `preLaunch` entrypoint to cover some use cases that previously required Mixin plugins. It executes just before invoking the first bit of Minecraft code, but after the class path has been fully set up. Please consider using it over a plugin.

## API additions

While most of the attention has been put into improving various parts of the toolchain, Fabric API has still being progressing. There have been many smaller fixes and improvements along with some of the more noteable additions:

* [Dimension API](https://github.com/FabricMC/fabric/commit/369ab22e7d1922623fe5b150603e7454f0ea1317) by Draylar and Pyrofab
* [Particle API](https://github.com/FabricMC/fabric/commit/c8770389c42e5cf8304c8664d0468064cbc3b636) by Sollace and swordglowsblue
* [ItemStack Tooltip API](https://github.com/FabricMC/fabric/commit/eff46b3d8e76ce07dfc1b37dfb5d5d68ce12b72a) by modmuss50
* [Biome API](https://github.com/FabricMC/fabric/commit/896c7fbb2d596fbab44254b12b3c21a61841887b) by valoeghese, Prospector and coderbot

All of the additions to the API start of as pull requests, we noticed that a lot of time was being spent on reviewing code style issues. To combat this Player setup a strict [checkstyle](https://github.com/FabricMC/fabric/blob/1.14/checkstyle.xml) config file. While it mostly covers whitespace usage, it also verifies the packages names - a frequently missed review item. Please be aware that the detection is deliberately conservative, so don't rely on its evaluation being exhaustive. Besides the build script, there are IDE plugins for automatically running checkstyle, give them a try when PRing!

## Yarn status

A lot of hard work has been put into yarn (Allready 100+ contributions since 1.14.4) over the last few months. To help us manage the pull requests we have introduced a new Triage team, this team has already proven to be very helpful.

Runemoro contributed a mappings stats generator to [Engima](https://github.com/FabricMC/enigma) that produces an easy to understand sunburst chart of the un-mapped names. We have all of the classes named,you can some of the stats bellow for methods and fields.

* [Methods](https://modmuss50.me/yarnstats/methods.html)
* [Fields](https://modmuss50.me/yarnstats/fields.html)


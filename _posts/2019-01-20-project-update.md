---
layout: post
title: Broad Strokes of Fabric - 19w03a/b/c
ref: project-update
---
Welcome to ~~This Week in Fabric~~ another weekly-esque status update!

As always, we're going to start with a selection of mods to keep an eye on:

* [FoamFix](https://minecraft.curseforge.com/projects/foamfix-for-minecraft) for Fabric! A ~~shameless plug~~ somewhat small memory optimization, which might be useful for large modpacks,
* [Soul Shards Respawn](https://minecraft.curseforge.com/projects/soul-shards-respawn) ported to Fabric in mid-December, but somehow we did not showcase it previously,
* [Stockpile](https://minecraft.curseforge.com/projects/stockpile), the Rift world's barrel mod, is now available for Fabric,
* [While We Wait](https://minecraft.curseforge.com/projects/whilewewait), responding to world generation times with elevator music. Classy indeed.

I'd also like to make a brief update to the launcher situation: ATLauncher *will* be supported for stable Minecraft releases. It might not be done immediately, but there is nothing preventing it from working.

The main focus of this post, however, is an overarching look at the progress of the project - the broad strokes of Fabric. As always, consider weighing your opinions in via GitHub issues or our community spaces!
It is always appreciated.

## Yarn

Yarn is our mappings set, and quite possibly the project with the lowest barrier to entry. Between that and its usefulness to all modders using the toolchain and finding missing names as they develop mods,
it gets the most contributions and attention.

Now, it has to be said that progress will get slower as we continue. The fewer names remain, the more niche they tend to be - as such, it may well take a year to map everything out! However, let's look at
how much we have managed to do in the past month (since December 22nd):

| Type | Yarn 18w50a.59 | Yarn 19w03c.4 | Total Change |
| -------- | -------- | -------- | -------- |
| Classes | 82.28% | 87.09% | **+4.81%** |
| Fields | 64.33% | 68.75% | **+4.42%** |
| Methods | 60.14% | 67.24% | **+7.10%** |

Well - all I can say is: we're getting there.

Soon, we are going to push a major refactor of Enigma by Gegy - this will hopefully clean up some annoying edge cases and make it much easier to fix bugs and add features in the future. However, as with any
major change, it may be a bit of a rough ride - so we might need to delay a snapshot's publication along the way.

To sum up - keep contributing! Keep pointing out things to improve! The better the names, the better the mutual understanding of the game we're all modding!

## Fabric Loom

Fabric Loom (or just Loom) is our Gradle plugin. It's somewhat functional, but - unfortunately - users keep running into rough edges. It's in need of a refactor and further tweaking to act more, hm, "Gradle-like".
However, it is definitely sufficiently usable to create mods with, as our users have proven time and time again!

## Fabric Loader

Fabric Loader is the first thing that launches of the toolchain, and it provides a few carefully selected areas of functionality:

* Mod loading and things related to loading which are not mod-dependent,
* Entrypoints to begin executing mod code,
* Engine code transformation facilities.

Most of the focus right now is on adding additional features - in particular:

* Versioning. With how diverse the ways of communicating changes and releasing builds are in the modding community, it is very hard to consider enforcing a system of versioning on the community - however, certain planned
features, such as JAR-in-JARs (more on that later), require a way to determine compatibility between different versions of the same API or library. The most likely solution seems to be using SemVer, but concerns about
rapidly rising versions of mods with changes enforced by Minecraft or other APIs are worrisome - almost nobody wants to see 34.x.x versions of mods after a year, after all!
* JAR-in-JARs. This refers to the ability to bundle small APIs and libraries with mods, allowing modders to easily use and support many ecosystems while not having to push the burden of downloading said APIs onto users
or finding hacky solutions to avoid class loading or interface application. While we have a good vision on how to implement this, it requires a good versioning system!
* Configuration. In this regard, after very long, opinionated and painful discussions, we have settled on using TOML as the primary format. There are two issues to solve: (a) actually writing the code, and (b) deciding
how much of it goes into Loader. It is likely that the whole configuration API will go into Loader, being independent from anything but mod/file loading - this includes an intermediate "node" representation,
constraint validation, loading/saving, etc. - whereas extensions to it, such as server<->client synchronization or game-dependent constriants, will go into the API. This is because even mods which don't rely on API
are very likely to benefit from a config format. Another option is to make a separate module for configuration that's distributed with API by default but separable, however toml4j would be easier to distribute with
Loader.

There are also talks about additional transformation facilities. Particularly, some users have expressed the need for more traditional "access transformers" alongside the Mixin library. I'm also considering looking into ways to expand on
the Mixin library to add the ability to nest Redirect and ModifyConstant calls, but many other things have a higher priority at this time.

## Fabric (API)

Fabric's API is the part which provides hooks and interop measures that vanilla itself doesn't. Unfortunately, it hasn't quite been moving as swiftly as I'd like it to - due to its relatively early stages, each pull
request ends up setting precedents which need to be resolved. This should speed up later.

One large project I would like to highlight is Grondag's long journey towards providing a wonderful set of block rendering/model-related hooks, preserved in one issue and three pull requests, as well as countless
hours of discussions on IRC and Discord. I'm really excited about the end result, and how modders will end up using it!

As always, I recommend looking at the pull requests and voicing your thoughts! Thanks to many pull requests slowly reaching near-final stages, there should be many useful feature updates in the very near future.

## Closing Thoughts

It's been over a month since we released Fabric. The community reception continues to impress and motivate us to keep going in building a fun modding environment. Thank you for your support!

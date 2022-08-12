---
layout: post
title: Status Update - 19w02a and the world of launchers
ref: world-of-launchers
---
I am glad to report that Fabric's development is moving steadily.

Despite a few minor hiccups, we have updated to 19w02a within a few hours of release. Simple mods worked fine after the update, but - as the "container/inventory" system was refactored - most mods adding
machine/storage blocks required an update.

There have also been some interesting mod releases worth highlighting:

* [Roughly Enough Items](https://minecraft.curseforge.com/projects/roughly-enough-items) serves as a TMI/NEI/JEI replacement for the community as it currently stands,
* [Clothesline](https://minecraft.curseforge.com/projects/clothesline-fabric) is a port of a niche and interesting ~~item transport mod~~,
* [InfraRedstone](https://minecraft.curseforge.com/projects/infraredstone-fabric) is a different take on extending the vanilla redstone system,
* [SewingKit](https://minecraft.curseforge.com/projects/sewingkit) is a barebones port of CraftTweaker,
* [Loading Spice](https://minecraft.curseforge.com/projects/loading-spice) is a mod which adds loading progress information to the game!

However, what I'd like to talk about in this blog post is our progress regarding launcher compatibility. As you know, there are many launchers available for the game. For now, let's
look at where we are, one month after launch - as you might remember, back then the only viable option was a MultiMC instance.

## Local Launchers

First, I shall start with "local launchers". Those are launchers which generally aim to be used for playing the game and building your own personal modpacks.

### MultiMC

MultiMC, due to its widespread usage among the modding community and powerful "patches" system, has been the first publicly available solution, based on the download of a "template" modpack providing a given version of
the Fabric Loader. It is not an ideal solution (updating Fabric Loader requires manually editing the .JSON, replacing it, or creating a new modpack and copying mods over), but it is sufficiently intuitive for now.

### Vanilla

Many users, however, prefer to load the game using the official "vanilla" launcher. While it took us some time, an installer for creating vanilla profiles of Fabric has been availble for a while now! It works in a
similar way to how vanilla profile installers usually work, so there's nothing unexpected here.

### Magic Launcher

haha no

## Remote Launchers

Next up, "remote launchers", or ones which are commonly used for installing and updating remotely maintained modpacks.

### MCUpdater

[MCUpdater](https://mcupdater.com/)'s philosophy and longevity prepared it for being supported by just about any mod loader configuration possible, and Fabric was no exception. As such, it is very easy
to create an MCUpdater modpack utilizing Fabric ([tutorial](https://fabricmc.net/wiki/modpack:mcupdater)) and I can highly recommend it.

While the current support is "second-class", a development branch contains built-in support for building a Fabric modpack directly in FastPack without any further XML editing. Stay tuned!

### SKCraft Launcher

It appears that SKCraft's Launcher should not require any further modification, however its 1.13+ support is [still pending](https://github.com/SKCraft/Launcher/pull/270). As such, it is
not yet supported.

### Technic Launcher (Solder)

A similar approach to SKCraft can be used to build Fabric modpacks using Solder, however the Technic team is not planning to support snapshot releases of Minecraft - as such, we will
only find out if that's the case when 1.14 stabilizes.

### ATLauncher

Unfortunately, I do not know the specifics of ATLauncher's modpack format, and my attempt at approaching the team about it has failed. As such, it is currently not supported.

### Twitch Launcher

Being the launcher with by far the largest "mindshare", its support of Fabric is a [common request](https://twitch.uservoice.com/forums/915910-game-mods-curseforge/suggestions/36229021-more-modloader-support-across-curse-without-being#comments) among the community,
with some even going as far as to attempt unofficial solutions (not unlike Meddle did back in the day). According to the UserVoice page's administration, the issue is being looked into officially, but that is all we know right now.

## Other Tools

There are also modpack creation tools which don't quite fit in any of those categories, but are worth a mention.

### Voodoo

[Voodoo](https://github.com/elytra/Voodoo) is a tool allowing you to programatically create and automate modpack building using Kotlin-based definition files.

As far as I know, Nikky is interested in adding Fabric support to Voodoo - stay tuned!

## Summary

The situation right now is as follows:

| Launcher | Usable | Compatible in theory |
| --- | --- | --- |
| MultiMC | **Yes** | - |
| Vanilla | **Yes** | - |
| MCUpdater | **Yes** | - |
| SKCraft | No | Yes |
| Technic/Solder | No | Yes |
| ATLauncher | No | Unknown |
| Twitch | No | Unknown |

It is likely that SKCraft will receive compatibility as soon as the relevant pull request is merged, whereas Technic/Solder should be supported as soon as a stable release of 1.14 is out.
Whether or not ATLauncher or the Twitch Launcher will be fully supported currently remains unknown.

If you're a launcher developer who would like to ensure Fabric works with their system, don't hesitate to contact us via one of the [community spaces](/discuss)! We'll be glad to help.
In addition, you might want to study the list of [existing download endpoints](/wiki/modpack:endpoints).

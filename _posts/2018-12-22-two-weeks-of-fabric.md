---
layout: post
title: Two Weeks of Fabric
ref: two-weeks-fabric
---
Whew.

These two weeks have been amazing. In fact, this blog post was originally supposed to go out a week ago, but I have been busy with all of the surprise attention this little hobby project has received ~~and making sure I don't fail university~~!

First, a brief recap. Almost two weeks ago a small, tight-knit group of modders decided to release their hobby project, the development of which dated back to 2016: [Fabric](https://fabricmc.net/2018/12/10/announcement.html) - a lean, easily updateable, fully open modding toolchain tracking Minecraft 1.14 snapshots. The response has been... overwhelming, to say the least!

Let's take a brief look at some of the biggest "user-facing" events since then, starting with mod releases:

* [CC: Tweaked](https://minecraft.curseforge.com/projects/cc-tweaked), a "bleeding-edge" fork of ComputerCraft by its current maintainer SquidDev, was a bit of a "launch mod" for the system - and, as we speak, its port is nearing full feature parity!
* [The One Probe](https://twitter.com/McJty/status/1073510693326987264) by McJty and [Not Enough Wands](https://minecraft.curseforge.com/projects/not-enough-wands) by Romelo333 received experimental ports, ensuring that land has been claimed by the single most prolific modding AI in modern history.
* [VoxelMap](https://www.planetminecraft.com/blog/voxelmap-1-13/) is evaluating Fabric! Interesting indeed...
* Many fresh, experimental mods taking advantage of 1.13+ content have popped up, like [Aquarius](https://minecraft.curseforge.com/projects/aquarius), [Towelette](https://minecraft.curseforge.com/projects/towelette) or [Ding Dong](https://minecraft.curseforge.com/projects/ding-dong)!
* Many client-side quality of life mods were released, including but not limited to [AppleSkin](https://minecraft.curseforge.com/projects/appleskin), [Blur](https://minecraft.curseforge.com/projects/blur), [Chat Bubbles](https://minecraft.curseforge.com/projects/chat-bubbles), [Controlling](https://minecraft.curseforge.com/projects/fabric-controlling), [CraftPresence](https://minecraft.curseforge.com/projects/craftpresence) and more!
* In addition, we've seen small content mods, for instance [Resource Melons](https://minecraft.curseforge.com/projects/resource-melons) or [SimpleTeleporters](https://minecraft.curseforge.com/projects/simple-teleporters).

Speaking outside of mods, CurseForge [gave us a category](https://minecraft.curseforge.com/mc-mods/fabric)! (Unfortunately, not all mods are listed on it yet - [this URL](https://minecraft.curseforge.com/mc-mods?filter-game-version=2020709689%3A7133&filter-sort=4) shows a list of all mods for 1.14-Snapshot instead, which is largely Fabric mods.)

We have also just pushed out an update to Loader, bringing it up to version 0.3.0 - the big change for end users is **Java 9+ support**! Now you don't need to worry about finding a dusty old copy of Java 8 to run your client or server.

Many videos and tutorials have also appeared online, of which I'd like to highlight a few:

* [An introduction/tutorial video](https://www.youtube.com/watch?v=AnqEzL7IkZk) by *Mischief of Mice*,
* [A tutorial blog post in Japanese](https://hollys-command-lecture.hatenablog.com/entry/fabric-modloader) at パイセンのマイクラ攻略教室,
* [An introduction video for developers](https://www.youtube.com/watch?v=uK_LSP2Wh_w) by *McJty*,
* [An introduction video](https://www.youtube.com/watch?v=Q-vIXEcCB08) by *ScottoMotto*, notable for being the first one!

We have also seen a snapshot update in those days: from **18w49a** to **18w50a**, the final update of the year. It has been the most difficult snapshot to date - bringing sweeping refactors in entity rendering, refactoring furnace and villager logic, as well as tweaking world generation (again) - but nonetheless, we have managed to update the entire Fabric stack to it in **three hours** from release. Not bad!

Im sure some of you who mod the game are interested in the statistics for our mappings' progress. Here they are, covering the first week of development:

| Type | Yarn 18w49a.1 | Yarn 18w50a.24 (~1 week) | Yarn 18w50a.59 (~2 weeks) | Total Change |
| -------- | -------- | -------- | -------- | -------- |
| Classes | 75.04% | 79.48% | 82.28% | **+7.24%** |
| Fields | 59.02% | 62.65% | 64.33% | **+5.31%** |
| Methods | 52.39% | 55.96% | 60.14% | **+7.75%** |

Overall, we have made many, many small steps forward in Fabric's journey. We have achieved what we set out to do: we have proven that the ideas behind Fabric can be turned into a reality. We have shown that it is possible to build the very foundations of a Minecraft modding ecosystem in an open and accessible manner... even if it's not quite as extensive as what some of us are used to.

I feel it is the right time to build on our initial announcement and answer many questions from the community. After all, it appears we have made quite a splash!

## Frequently Asked Questions

* **Q:** What makes Fabric different from Forge?

From an user's perspective, there are probably two most visible factors: *the update speed* and *added modularity*. In short, Fabric's design allows it to update significantly faster than Forge, but it also means it's not quite as feature-complete by itself, relying on additional mods for some functionality Forge has historically provided by default - most visibly, our *mod menu* is a separate mod! Those two factors are related - the less code we need to update to let modders start tinkering with a version, the faster we can update; however, that code still has to go somewhere.

From a modder's pespective it's a lot more complicated and best answered by looking into the mods being built (as well as upcoming articles), but I think the keywords worth bringing up are *Sponge Mixins as a first-class citizen*, *fully open stack*, *community-centric development process* and *Fabric and mods having equal footing in terms of patching the game*.

To quote [the Reddit post by scratchisthebest](https://old.reddit.com/r/feedthebeast/comments/a4q3rt/announcing_fabric_a_new_minecraft_114_modding/ebgw5xa/):

> [...] what there is of the Fabric ecosystem is shaping up to smell a little like NPM? Do you see that screenshot of the mod list in the blog post? That... is its own mod ;)
> 
> This is reflected in Fabric's design as well. Fabric itself is basically the smallest possible thing that can be called a mod loader without lying. It discovers mods, [...] [adds] a rudimentary dependencies sysyem, and it lets you hack the game to bits with Mixin. That's about it.
> 
> Fabric API, though, is a small [...] collection of things people find convenient when modding. But it's just a collection of useful methods and hooks.
> 
> If you installed only Fabric and Fabric API on your game, you wouldn't think a single thing is different. [..]
> 
> Authors are encouraged to create small and reusable components. Expect less "MyNameLib" which has 50 features spanning all throughout the game, and more specific components that lots of modders can use together.

* **Q:** Is Fabric less complete than Forge?

Yes, absolutely! Our initial launch was addressed to *adventurous modders* - many hooks and features people are used to having in Forge aren't finished yet or may require an external API or mod.

* **Q:** Does all of this *"modularity"* mean people will have to download twenty little AsieLibs per mod?

In the future, no. We're evaluating and working on ways to not pass this burden onto the player. During early development, however, that might be the case sometimes! Ah, the ~~trials~~ joys of being an early adopter...

* **Q:** Doesn't having two competing mod loaders cause a schism where I have to choose between, say, *Thermal Expansion* and *Industrial Foregoing*?
* **Q:** Are Fabric mods going to work with Forge?

Unfortunately, I don't have a clear answer for that yet. Right now, Forge and Fabric target different versions of Minecraft, different enough that compatibility is not even a question. What happens after 1.14, though? We don't know yet.

Speaking a bit more technically: Forge and Fabric are not inherently incompatible - however, it is much easier to make Fabric mods run on Forge than Forge mods run on Fabric. Due to usage of different mappings, however, the question of making a mod compile to Fabric and Forge simultaneously is non-trivial - there are multiple possible approaches, but none is perfect. I can't speak as to what will happen in the future, but I believe adopting Fabric is not quite contradictionary with the development of mods interacting with Forge modpacks. We'll just have to wait and see.

* **Q:** Is Fabric going to replace Forge?

... well. That's a tough one for sure.

Fabric, in essence, began life as a personal hobby project and over time grew to become the premier solution for quickly tweaking and modding the newest builds of Minecraft. However, it is just a toolchain - questions such as "how notable will it become?" or "will it become the next big thing?" can only be answered in hindsight. Ultimately, *you*, the reader, are part of the community, and it's only *you* who can decide what becomes of Fabric. There are many routes for it to take - however, I believe that, in the end, it will be beneficial to the community as a whole no matter what happens to the complete project. After all, while Cuchaz's mod loader - M3L - never lived on past 1.9, its ideals live on and Enigma, a tool initially created for it, is used to this day by the Fabric project! (Albeit with many, many, *many* changes.)

* **Q:** When should I start making mods for Fabric?

Whenever you want! 

Okay, I know that's not the answer you expected - but it is our belief that the primary reason to develop game mods is to have fun. If you find your fun in Fabric, great! If you're excited by the adventure of figuring things out and building new little additions, you might want to give it a try! If you'd rather build upon the massive library of powerful content available for other mod loaders, that's fine by us too - as long as you keep having fun, it's all going to be alright, no matter if you have it with us or despite us. *Fun things are fun!*

For those of you who have tried Fabric development out early: today's toolchain update finally added *source code remapping*, which lets you view the many Javadocs in Fabric API (and other mods which release their source code via Maven)! This should make things significantly more approachable.

## In Summary

Building Fabric was a very interesting and exciting challenge, but now it's time for it to evolve from a sprint to a marathon. I'd like to thank all of you who checked out Fabric over the past two weeks - I'm really surprised to see all the positive attention it has received, and I'm glad that it has managed to see the light of day. From now on, it's time for the community to decide what it wants to do with it. Thank you.

---
layout: post
title: Removing Obfuscation from Fabric
ref: removing-obfuscation
---

Mojang recently published [a blog post](https://www.minecraft.net/en-us/article/removing-obfuscation-in-java-edition) announcing that they will be removing obfuscation from Minecraft: Java Edition starting with the first snapshot after the *Mounts of Mayhem* launch later this year. There will also be supplimentary "experimental" releases starting with next Tuesday's snapshot to allow us time to prepare and migrate.

This is a major change that will affect the entire modding community. This blog post will attempt to give a run down of how the Fabric toolchain will be affected, and what this means for Fabric mod developers.

## What is obfuscation?
Obfuscation is a practice by which the names of classes, methods, fields, etc. in the code of the game are hidden by changing them into meaningless sequences of letters that change every version. So, as an example, the class for Creepers may have been changed from `Creeper` to something like `brc`.

This has been a practice used for practically the entire time Minecraft has existed, and has meant that people who want to mod the game needed to figure out what each part of the code did, and use tools to apply readable names back to the code.

### What has been done about obfuscation before?
In the Fabric world, we have had projects called Intermediary and Yarn.
Intermediary would take the obfuscated names and give them stable numbers - so `brc` might become `class_1548`.
Yarn would then apply readable names to those numbers - so `class_1548` might become `CreeperEntity`.
These Yarn names were created and determined by our community by analysing the code. (If you've seen things in the code named with the Intermediary numbers - those are things we didn't get around to naming in Yarn!)

Since 2019, while the code of the game itself has still used the scrambled letters, Mojang has released their own official set of readable names, colloquially known as 'Mojmap', which are the names they themselves use when developing the game.
This set of names was different to Yarn, and many developers embraced them, though some continued using Yarn names out of preference.
Fabric has supported the option to use either set of names.

### What does it mean that obfuscation is being removed?
Now, the names in the actual code of the game will match those that Mojang has been releasing since 2019. What's more, for the first time, mod developers will now be able to see official names for method parameters and local variables, which were previously missing from those names.

However, as the Fabric toolchain has been built around the need to apply our own names, this means a lot of work will have to go into supporting this change. 

## What is Fabric going to do?
We have plans in place to update our toolchain, but there's a lot to do, and this may take some time.

### The future of Fabric API
Fabric API will **not** undergo major rewrites as a result of this, and all of your favourite APIs will stay on course.
However, the naming of the APIs and their associated methods and javadoc will change to accurately reflect the official Mojang names.

The first stage of this will be to migrate Fabric API to use the official Mojang names in a non API-breaking way. This will happen fairly quickly as it can be done with no impact to modders and players.

When the new fully deobfuscated version is released, we will rename Fabric's own API functions to match those of the official names.


### Loom
Development of a new Loom version has begun. The initial goal is to provide a solution for mod developers to begin using the new experimental releases for testing. This will likely take the form of Loom 1.13.

In the long run we may look into making a totally new version of loom that is more modular. Loom 2.0 may provide a slim version that contains no support for remapping. This will likely take some time, and is still in the design phase so please be patient.

Support for modding older game versions with the latest Loom is a very high priority and something that we wish to continue to provide as we have done previously. We also understand that not everyone wishes to use the new official names, we hope to provide a remapping solution for those advanced users who wish to use their own names.

### The future of Yarn

<p align="center">
  <img src="/assets/rip_yarn.png" alt="Example Image">
</p>

The Fabric community as a whole thanks all 261 Yarn contributors for their 9 years, 2 months, and 17 days of `Identifier` glory. Your contributions have been and continue to be greatly appreciated.

Unfortunately, given the current circumstances we can't see a way to justify maintaining Yarn in its current state.

Yarn for existing Minecraft versions will continue to welcome contributions.

If you are a mod developer using Yarn mappings, you will likely need to migrate to Mojang's names. See the 'For mod developers' section below.

## What do I need to do?
### For players
Very little! This is largely only going to affect developers. We aim to keep supporting all existing launchers.

In good news, this also means once all this is sorted, updates for some things like Fabric API will likely be quicker in the future, and crash logs might be slightly easier to read. Rejoice!

And as always, we ask all players to be patient, and give mod developers time to update. We kindly ask everyone not to pester them. We also recommend all players make backups of their worlds before updating to any new version.

### For mod developers

This is going to be a large change, especially for those that are using Yarn. There is no expection to update your mods right away, but you may wish to prepare. Nothing will change untill after the Mounts of Mayhem (1.21.11) drop.

We recommend that all new mods should be created using the official Mojang mappings, this will provide an easier upgrade path in the future.

If you have a mod using Yarn dont worry! Loom has existing automated tooling that will help you to rename your code. We are actively looking at ways to improve this tooling and plan to provide some resources in the future to help you.

Once you have upgraded, you will benefit from a much simpler and faster toolchain, improved logs/crash reports and new debugging options.

## TL;DR: What will affect you

### Players
- Be patient while mods update.
- Crash logs may be slightly easier to read.

### Modders
- Don't worry! There is no rush.
- Most Yarn users will need to migrate to the official names.
- Your build script will require some changes.
- Production crash logs may be slightly easier to debug.
- Intermediary will no longer exist, the game will use Mojang's names at runtime.


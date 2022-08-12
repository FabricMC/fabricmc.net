---
layout: post
title: Minecraft 1.17 for Mod Developers
ref: 117-for-developers
---

Minecraft 1.17 has just entered its pre-release cycle meaning that a full stable release is only a few weeks away. When it is released we will have a player-oriented blog post, this post is aimed towards mod developers.

The pre-releases are a great time to start updating your mods in preparation for the final release. In the past most mods updated during the pre-release stage kept working on the final stable release with few or no further changes.

![A goat in a geode](/assets/goat.png)

## Java 16

Minecraft 1.17 is now built against Java 16; this is a big step up from Java 8 and will affect modders. To set up a development environment you will need to use Java 16, Gradle 7 and fabric-loom 0.8 or higher. In most cases this will not break your existing code (excluding the normal porting procedure). There is a 1.17 branch of the [fabric-example-mod](https://github.com/FabricMC/fabric-example-mod/tree/1.17) that should help get you started. Look at the [1.17+Java 16 migration changes](https://github.com/FabricMC/fabric-example-mod/compare/29c522536fc16233833221e22eed3f106c0726bc...1.17) which should apply similarly to most mods. We have created a specific channel named `#mod-dev-gradle-ides` on the [official Discord server](https://discord.gg/v6v4pMv) if you need some help with getting setup.

We have used this opportunity to migrate most of the modder- and contributor-facing tools to Java 16. Player-facing projects only use Java 16 if Minecraft doesn't require it anyway in all relevant scenarios. The Fabric Loader and Installer, and their dependency libraries, will still target Java 8 as they are cross-version.

## Fabric API

Fabric API has been fully updated to Java 16 and 1.17. It doesn't use any Java 16 features yet, nor will it break compatibility to adopt any. New or updated modules may introduce records and other features into the API where it makes sense, the implementation is expected to use Java 16 features where it doesn't harm necessary backporting too much.

Since 1.16 released, we have added a number of new APIs that can be used:

- Reworked networking API, closer to what the vanilla network protocol allows (i509VCB, liach)
- World Renderer events for a variety of hooks to render custom world content outside the usual facilities and some behavior modification opportunities to e.g. customize block outlines (grondag)
- Screen API with many events to react to or influence behavior in GUIs (i509VCB)
- Client Side Commands to use command input for client purposes like visual config changes (Juuxel)
- API Lookup API to obtain API references without having to attach interfaces to classes directly and help with context binding, a building block for universal APIs like Fluid I/O (Technici4n)
- a variety of smaller or more focused additions and enhancements (see GitHub)


## Yarn

### Constants

In 1.17, Mojang no longer strips out unused code including the constant fields that are inlined by the Java compiler. We have seamlessly integrated [unpick](https://github.com/FabricMC/unpick) (created by Daomephsta) into the Fabric toolchain to undo some of this inlining. Once you have updated your development environment to 1.17, you can also use these constants in your mod code just like you would with any other field.

#### Before

*Note the hard to understand flag `26` passed into the last parameter of setBlockState*

```java=
protected boolean place(ItemPlacementContext context, BlockState state) {
   return context.getWorld().setBlockState(context.getBlockPos(), state, 26);
}
```

#### After

*In 1.17 this has been simplified to clearly show the true meaning of this flag.*

```java=
protected boolean place(ItemPlacementContext context, BlockState state) {
   return context.getWorld().setBlockState(context.getBlockPos(), state, Block.NOTIFY_LISTENERS | Block.REDRAW_ON_MAIN_THREAD | Block.FORCE_STATE);
}
```


### Names

During the 1.17 snapshot season, some important classes have been renamed in Yarn.

The most notable instance is the rename of all NBT-related classes thanks to contributor [@LambdAurora](https://github.com/LambdAurora). This is to prevent confusion between the data-driven [`net.minecraft.tag.Tag`s](https://minecraft.fandom.com/wiki/Tag) and NBT tag interface `net.minecraft.nbt.Tag`, which is now named `NbtElement` instead.

You can use the automated [migrateMappings](https://fabricmc.net/wiki/tutorial:migratemappings) task in Loom to transition to the new names efficiently. Since 1.16.5, there have been over 500 commits to Yarn, all working to improve coverage and quality. Major class renames will be paused when 1.17 is released; these will be done in the 1.18 snapshots instead.


### Documentation

Trying to document the Minecraft codebase is a massive job, especially as it is constantly evolving. Improving the documentation provided by Yarn is an ongoing effort by all of the contributors. You can view the online Javadoc for 1.17 pre-release 1 [here](https://maven.fabricmc.net/docs/yarn-1.17-pre1+build.1/index.html) or inline with the decompiled and named Minecraft sources directly attached in your IDE.

## CurseForge

CurseForge have recently announced in their [May Updates blog post](https://mailchi.mp/844b51b9bdf1/whats-new-with-overwolf-curseforge-may2-edited) that they will be adding native Fabric support to their client. In preparation for this, they have asked all mod developers to ensure that uploaded files are correctly tagged against the relevant mod loader. The linked blog post contains details on how to do this.

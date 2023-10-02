---
layout: post
title: Fabric Announcement
ref: fabric-announcement
---
... Hello world? Is this working? One, two, three, one, two, one, two. Alright. *Ahem*.

It is my honor today to announce a project long in the making: the Fabric modding toolchain for Minecraft 1.14 and above.

What does it consist of?

* **Yarn**, a code mapping allowing modders to make sense of the game's logic under a permissive license and with an Enigma-powered interface for contributing and editing,
* **Intermediary**, a collection of compatible mappings allowing mods to continue working across obfuscation changes, as well as matches (powered by Matcher, a tool created by Player) to track changes in Minecraft versions (and even update your own mappings),
* **Loom**, a simple Gradle build system used by our projects,
* **Fabric Loader**, a simple Mixin/Intermediary-powered mod loader facility with minimal dependencies on the game engine,
* **Fabric**, a core library for the most common hooks and intercompatibility measures required by mods,
* A fork of Cuchaz's **Enigma**, a GUI-based mapping tool we use for Yarn, introducing new features ~~and bugs~~,
* Many smaller tools, including but not limited to tiny-remapper (efficient parallel class remapper) and Stitch/Weave (mapping processing tools).

Although we have decided to reveal it to the public now, it has been in the making for a long time. So, what does it offer?

As a user, the following might interest you:

* Currently, Fabric is targetting **Minecraft 18w49a**. We're tracking snapshots as they release (our record update time, from 18w48b to 18w49a, was **25 minutes** from Mojang uploading it), allowing modders to develop alongside Minecraft updates and - hopefully - release their polished mods on the same day the stable vanilla version of 1.14 comes out!

For interested modders, I'd like to point out the following:

* The ecosystem is lean, lightweight and modular - as such, it's very quick to update. In addition, it allows updates to be worked on collaboratively by many modders. On top of that, we're striving to make sure the means in which all the small parts connect together to provide modders and users with the tools they need are documented and approachable.
* All of the ecosystem is under FOSS licenses. There is no part of it exempt, there are no additional distribution rules (within the scope of what we own, of course) other than the terms of well-known and well-understood free software licenses.
* The modularity additionally allows you to re-use parts as you see fit. Want to use Fabric with different mappings? Want to use our mappings with a different mod loader? Want to use our loader to build a total conversion mod? While we will focus on building a mod ecosystem that plays nicely with each other for modpacks, we are more than happy to let you pick and choose whichever parts you need for your dream project.
* Mixins are a first-class citizen - this means both that patches are done in a clean organized manner and that you get access to exactly the same mechanisms to extend and modify the game that we use.

Additionally, we are very receptive to communication on our [community spaces](/discuss). If you have a question, would like to make a mod, a modpack or are having trouble - **do not hesitate!** Contact us, and we'll help as soon as we can!

What *isn't* Fabric, though?

* All-encompassing! While we will do everything we can to allow mods to be built on Fabric with ease and performance, there may be certain niche areas which Fabric as a project won't cover. This is what the mixins are for, though - no point in adding an expensive hook to the API for just one mod. In addition, things like non-critical bugfixes, performance patches or behaviour changes are a better fit in separate mods.
* Complete! While the API module already provides many crucial features and is allowing mods to be built on top, many areas of it are still bare-bones. All I'm saying is - what Fabric is providing now is *not* everything it hopes to provide. (If you're an early adopter, we encourage you to discuss the features you need, possibly even temporarily add them with mixins - that way, we can all learn more about the problem domain before adding it to the API proper.)

Keep in mind that we're aiming for a stable release alongside the release of Minecraft 1.14. As such, while we feel it's sufficiently stable for adventurous modders and early adopters ([this](https://www.youtube.com/watch?v=tyneiz9FRMw) might give you an idea of the atmosphere in the development chatroom right now), it might be somewhat unwise to go out there and build a modpack already. (We won't stop you if you try, though, and we'll even help out!) Even as a modder, keep in mind documentation is being written as we speak - don't hesitate to ask questions or point out omissions - it helps us make the project better, and we're willing to listen.

Now, you might be asking yourself "what mods will I be able to play on Fabric"? Well, we are on snapshot versions and development is a bit early, however, if you're looking for mods, some should be popping up as we speak on [CurseForge](https://minecraft.curseforge.com/mc-mods?filter-game-version=2020709689%3A7133&filter-sort=2) and our community spaces - but here's some teasers of things which are either about to be released, or perhaps are yet to come. (Note that most CurseForge-uploaded mods rely on Fabric's API module, which might not be approved yet - you can find a working version [here](https://maven.fabricmc.net/net/fabricmc/fabric/0.1.0.36/fabric-0.1.0.36.jar) until then.)

![ModMenu by ProfessorProspector](/assets/external/TeLw.png)

![To get this far takes quite a traversal.](/assets/external/q6D5d1u.png)

![How well-assembled!](/assets/external/K9F8L1G.png)

![Logical...](/assets/external/lurTAgQ.png)

Many smaller "tweak" mods are much further ahead and will be popping up very shortly.

We will be posting regular updates showcasing the progress of both the Fabric mod toolchain and the mod ecosystem building around it. See you soon!

Finally, I would like to use this space to thank everyone who helped Fabric grow along its journey, in no particular order and not limited to:

3TUSK, b0undarybreaker, copygirl, DragoonAethis, fewizz, GreaseMonkey, jamierocks, kashike, liach, magik6000, marcin212, Matrix89, maxpowa, modmuss50, Nedelosk, NikkyAi, ProfessorProspector, sfPlayer1, shadowfacts, SquidDev, Thog, unascribed, Vexatos,

the creator of Enigma, Cuchaz, and all contributors to that project, everyone who supported us through the long hours of development, everyone who gave input and advice, as well as the giants whose shoulders we stand on, too numerous to list. Finally, I would like to thank the Mojang development team for continuing to make large strides in the friendliness and quality on in-game engine code.

If you'd like to learn more, check out the links in the header above - particularly the [discussion spaces and chatrooms](/discuss) list, but also the [downloads](/use) and the [wiki](/wiki). If you're a developer, you might also want to check out our [GitHub repositories](https://github.com/FabricMC)!

asie, on behalf of the Fabric development team

---
layout: default
title: Develop
permalink: /develop/
topnav: true
---

# Develop

This page provides a curated selection of resources to support both new mod creation and the maintenance of existing projects. 

If you require additional help, [the Fabric Discord server](https://discord.gg/v6v4pMv) offers dedicated mod development channels with resources and advice from the community.

<div class="home post-content">
<hr>
   <section>
      <div class="row-3">
         <article class="column">
            <h3>Getting Started</h3>
            <section class="with-button-group">
               <p class="component-body">If you want to learn how to create mods, you should refer to the wiki or the official documentation site.</p>
            </section>
            <div class="button-group">
							<a class="button secondary" href="https://fabricmc.net/wiki/start">Fabric Wiki</a>
							<a class="button secondary" href="https://docs.fabricmc.net/">Fabric Documentation</a>
						</div>
         </article>
         <article class="column">
            <h3>Project Templates</h3>
            <section class="with-button-group">
               <p>Project templates offer a standardized foundation for Fabric mods - allowing you to quickly create new projects.</p>
            </section>
            <div class="button-group">
							<a class="button secondary" href="https://github.com/FabricMC/fabric-example-mod">Example Mod Repository</a>
							<a class="button secondary" href="./cli/">Fabric Command Line Tools</a>
							<a class="button secondary" href="./template/">Online Template Mod Generator</a>
						</div>
         </article>
         <article class="column">
            <h3>Javadoc</h3>
            <section class="with-button-group">
               <p>Easily access Javadoc for toolchain projects and the game, either online or directly within your IDE.</p>
            </section>
            <noscript style="color:red">You need Javascript to show the documentation links</noscript>
<div class="fabric-component" data-component="Documentation"></div>
         </article>
      </div>
   </section>
   <hr>
</div>

<noscript style="color:red">You need Javascript to show the latest Versions</noscript>
<div class="fabric-component" data-component="Versions"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">

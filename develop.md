---
layout: page
title: develop
permalink: /develop/
topnav: true
---

This page contains a range of resources to help you create a new mod or maintain an existing mod.

### Getting started

* If you would like to create a new mod please see the [wiki](https://fabricmc.net/wiki/start).

* Use the online [template mod generator](./template).

* An up-to date template mod can be found on [github](https://github.com/FabricMC/fabric-example-mod).

* If you need some extra help we have a number of mod development channels on our [Discord](https://discord.gg/v6v4pMv).

### Latest Versions

<noscript style="color:red">You need Javascript to show the latest Versions</noscript>
<div class="fabric-component" data-component="Versions"></div>

### Online documentation

<noscript style="color:red">You need Javascript to show the documentation links</noscript>
<div class="fabric-component" data-component="Documentation"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">

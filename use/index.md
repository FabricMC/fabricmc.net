---
layout: page
title: use
permalink: /use/
topnav: true
---

<!--
    Handle the old URLs /use?page=xyz
-->
<script>
    var match = /page=(\w+)/.exec(window.location.href);
    switch (match ? match[1] : "") {
        default:
        case "installer":
            window.location.href = '{{ "/download/" | relative_url }}';
            break;
        case "server":
            window.location.href = '{{ "/download#server" | relative_url }}';
            break;
        case "mcupdater":
            window.location.href = '{{ "/use/mcupdater/" | relative_url }}';
            break;
        case "technic":
            window.location.href = '{{ "/download#third-party-launcher" | relative_url }}';
            break;
        case "atlauncher":
            window.location.href = '{{ "/download#third-party-launcher" | relative_url }}';
            break;
    }
</script>

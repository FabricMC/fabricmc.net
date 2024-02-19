const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.c22e7ca3.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.fd237c91.js"), "./lib/Installer.svelte": () => import("./Installer.2b6bab7f.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.9eee464d.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.457a67c3.js"), "./lib/Server.svelte": () => import("./Server.2ac129c4.js"), "./lib/Technic.svelte": () => import("./Technic.36c6b611.js"), "./lib/Template.svelte": () => import("./Template.81dd891b.js"), "./lib/Versions.svelte": () => import("./Versions.267eabea.js") }), `./lib/${e}.svelte`);
}
const c = n("Installer"), l = n("MCUpdater"), a = n("Technic"), m = n("Server"), p = n("Versions"), u = n("Documentation"), v = n("Template");
let b = {
  Installer: c,
  MCUpdater: l,
  Technic: a,
  Server: m,
  Versions: p,
  Documentation: u,
  Template: v
};
function d() {
  for (const e of document.getElementsByClassName("fabric-component")) {
    if (!(e instanceof HTMLElement))
      continue;
    const o = e.dataset.component;
    if (!o)
      throw new Error("Missing data-component attribute");
    const t = b[o];
    if (!t)
      throw new Error("Unknown component: " + o);
    t().then((i) => {
      new i.default({
        target: e
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", d);

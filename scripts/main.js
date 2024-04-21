const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.56a7eb9c.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.214b8f5e.js"), "./lib/Installer.svelte": () => import("./Installer.57943a5e.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.d56c2dfd.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.8034ed68.js"), "./lib/Server.svelte": () => import("./Server.bd6df428.js"), "./lib/Technic.svelte": () => import("./Technic.1033339c.js"), "./lib/Template.svelte": () => import("./Template.31286794.js"), "./lib/Versions.svelte": () => import("./Versions.45e4f2bc.js") }), `./lib/${e}.svelte`);
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

const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.d91fb38c.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.39c279f6.js"), "./lib/Installer.svelte": () => import("./Installer.e9ff5285.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.47d5200f.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.35b1df9f.js"), "./lib/Server.svelte": () => import("./Server.aad7db5e.js"), "./lib/Technic.svelte": () => import("./Technic.9f521ae7.js"), "./lib/Template.svelte": () => import("./Template.42b87fe3.js"), "./lib/Versions.svelte": () => import("./Versions.81e5b275.js") }), `./lib/${e}.svelte`);
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

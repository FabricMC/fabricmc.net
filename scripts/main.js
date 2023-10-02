const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.b8cda0a8.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.214b8f5e.js"), "./lib/Installer.svelte": () => import("./Installer.780f916b.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.561f986a.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.4f830061.js"), "./lib/Server.svelte": () => import("./Server.0eea6ed3.js"), "./lib/Technic.svelte": () => import("./Technic.25ca0f02.js"), "./lib/Template.svelte": () => import("./Template.ff893b36.js"), "./lib/Versions.svelte": () => import("./Versions.c651913b.js") }), `./lib/${e}.svelte`);
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

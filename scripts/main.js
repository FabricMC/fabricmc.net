const s = (e, n) => {
  const t = e[n];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((r, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
};
function o(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.js"), "./lib/Installer.svelte": () => import("./Installer.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.js"), "./lib/Server.svelte": () => import("./Server.js"), "./lib/Technic.svelte": () => import("./Technic.js"), "./lib/Versions.svelte": () => import("./Versions.js") }), `./lib/${e}.svelte`);
}
const c = o("Installer"), l = o("MCUpdater"), a = o("Technic"), m = o("Server"), u = o("Versions"), p = o("Documentation");
let v = {
  Installer: c,
  MCUpdater: l,
  Technic: a,
  Server: m,
  Versions: u,
  Documentation: p
};
function d() {
  for (const e of document.getElementsByClassName("fabric-component")) {
    if (!(e instanceof HTMLElement))
      continue;
    const n = e.dataset.component;
    if (!n)
      throw new Error("Missing data-component attribute");
    const t = v[n];
    if (!t)
      throw new Error("Unknown component: " + n);
    t().then((r) => {
      new r.default({
        target: e
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", d);

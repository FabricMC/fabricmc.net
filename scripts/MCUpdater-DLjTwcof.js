import { A as e, B as t, C as n, F as r, N as i, P as a, T as o, r as s, x as c, y as l } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import u from "./LegacyVersion-QpftK7o5.js";
//#region scripts/src/lib/MCUpdater.svelte
var d = c("<main><!> <br/> <button class=\"button primary large\">Copy MCUpdater Import entry</button></main>");
function f(c) {
	let f = a();
	async function p() {
		let { yarnVersion: e, loaderVersion: t } = await o(f).getSelectedVersions(), n = m(e, t);
		return navigator.clipboard.writeText(n);
	}
	function m(e, t) {
		return `<Import url="${`https://fabricmc.net/download/mcupdater?yarn=${encodeURIComponent(e)}&amp;loader=${encodeURIComponent(t)}`}">fabric</Import>`;
	}
	var h = d(), g = e(h);
	s(u(g, { $$legacy: !0 }), (e) => r(f, e), () => o(f));
	var _ = i(g, 4);
	t(h), n("click", _, p), l(c, h);
}
//#endregion
export { f as default };

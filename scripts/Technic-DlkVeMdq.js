import { A as e, B as t, C as n, F as r, I as i, L as a, N as o, P as s, T as c, r as l, t as u, x as d, y as f } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { s as p } from "./Api-D_d2Iuos.js";
import m from "./LegacyVersion-B7qZjq2E.js";
//#region scripts/src/lib/Technic.svelte
var h = d("<main><!> <br/> <button class=\"button primary large\">Download bin/version.json file</button></main>");
function g(d, g) {
	a(g, !1);
	let _ = s();
	async function v() {
		let { selectedGameVersion: e, loaderVersion: t } = await c(_).getSelectedVersions();
		b("version.json", await y(e, t));
	}
	async function y(e, t) {
		let n = await p(e, t), r = {
			id: e,
			inheritsFrom: n.inheritsFrom,
			releaseTime: n.releaseTime,
			time: n.time,
			type: n.type,
			minecraftArguments: "--username ${auth_player_name} --version ${version_name} --gameDir ${game_directory} --assetsDir ${assets_root} --assetIndex ${assets_index_name} --uuid ${auth_uuid} --accessToken ${auth_access_token} --userType ${user_type} --versionType ${version_type}",
			libraries: n.libraries,
			mainClass: n.mainClass
		};
		return JSON.stringify(r, null, 2);
	}
	function b(e, t) {
		var n = document.createElement("a");
		n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), n.setAttribute("download", e), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n);
	}
	u();
	var x = h(), S = e(x);
	l(m(S, { $$legacy: !0 }), (e) => r(_, e), () => c(_));
	var C = o(S, 4);
	t(x), n("click", C, v), f(d, x), i();
}
//#endregion
export { g as default };

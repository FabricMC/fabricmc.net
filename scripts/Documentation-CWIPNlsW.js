import { A as e, B as t, C as n, I as r, L as i, M as a, N as o, T as s, b as c, d as l, g as u, j as d, k as f, m as p, p as m, t as h, u as g, v as _, x as v, y, z as b } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { a as x, c as S, d as C } from "./Api-DQbTMgo_.js";
//#region scripts/src/lib/Documentation.svelte
var w = v("<option> </option>"), T = v("<div class=\"javadoc-selector\"><select><option> </option><!></select></div>"), E = v("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), D = v("<p>Loading versions..</p>"), O = v("<div></div> <!>", 1);
function k(v, k) {
	i(k, !1);
	function A(e, t) {
		let n = e.target.value;
		n.includes("Select") || window.location.assign(`https://maven.fabricmc.net/docs/${t.prefix}${n}/`);
	}
	function j(e, t, n) {
		return e.filter((e) => e.startsWith(t)).map((e) => e.slice(t.length)).sort((e, t) => n.indexOf(e) - n.indexOf(t));
	}
	let M = Promise.all([
		x(),
		C(),
		S()
	]).then(([e, t, n]) => {
		let r = j(e, "fabric-api-", []).reverse();
		return [
			{
				name: "Minecraft (Yarn)",
				desc: "Javadoc documentation for Minecraft generated from the comments in the yarn mappings.",
				prefix: "yarn-",
				versions: j(e, "yarn-", t.map((e) => e.version)),
				selected: "Select Version"
			},
			{
				name: "Fabric API",
				desc: "Javadoc documentation for Fabric API",
				prefix: "fabric-api-",
				versions: r,
				selected: "Select Version"
			},
			{
				name: "Fabric Loader",
				desc: "Javadoc documentation for Fabric API",
				prefix: "fabric-loader-",
				versions: j(e, "fabric-loader-", n.map((e) => e.version)),
				selected: "Select Version"
			}
		];
	});
	h();
	var N = O(), P = o(d(N), 2);
	u(P, () => M, (e) => {
		var t = D();
		y(e, t);
	}, (r, i) => {
		var u = c(), h = d(u);
		m(h, 1, () => s(i), p, (r, i) => {
			var c = T(), u = e(c), d = e(u), h = a(d), v = o(d);
			m(v, 1, () => s(i).versions, p, (e, t) => {
				var n = w(), r = a(n, !0), i = {};
				f(() => {
					_(r, s(t)), i !== (i = s(t)) && (n.value = (n.__value = i) ?? "");
				}), y(e, n);
			}), t(u);
			var b;
			g(u), t(c), f(() => {
				_(h, `Select ${s(i).name ?? ""} Version`), b !== (b = `Select ${s(i).name ?? ""} Version`) && (u.value = u.__value = b, l(u, b));
			}), n("change", u, (e) => A(e, s(i))), y(r, c);
		}), y(r, u);
	}, (e, t) => {
		var n = E(), r = d(n), i = a(r);
		b(2), f(() => _(i, `Error: ${s(t).message ?? ""}`)), y(e, n);
	}), y(v, N), r();
}
//#endregion
export { k as default };

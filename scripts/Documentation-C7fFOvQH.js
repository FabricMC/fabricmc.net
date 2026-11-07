import { A as e, B as t, C as n, I as r, L as i, M as a, N as o, T as s, b as c, d as l, g as u, j as d, k as f, m as p, p as m, t as h, u as g, v as _, x as v, y, z as b } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { a as x, c as S, f as C, u as w } from "./Api-00IyWCtj.js";
//#region scripts/src/lib/Documentation.svelte
var T = v("<option> </option>"), E = v("<div class=\"javadoc-selector\"><select><option> </option><!></select></div>"), D = v("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), O = v("<p>Loading versions..</p>"), k = v("<div></div> <!>", 1);
function A(v, A) {
	i(A, !1);
	function j(e, t) {
		let n = e.target.value;
		n.includes("Select") || window.location.assign(`https://maven.fabricmc.net/docs/${t.prefix}${n}/`);
	}
	function M(e, t, n) {
		return e.filter((e) => e.startsWith(t)).map((e) => e.slice(t.length)).sort((e, t) => n.indexOf(e) - n.indexOf(t));
	}
	let N = Promise.all([
		x(),
		C(),
		S(),
		w()
	]).then(([e, t, n, r]) => {
		let i = M(e, "fabric-api-", []).reverse();
		return [
			{
				name: "Minecraft (Yarn)",
				prefix: "yarn-",
				versions: M(e, "yarn-", t.map((e) => e.version))
			},
			{
				name: "Fabric API",
				prefix: "fabric-api-",
				versions: i
			},
			{
				name: "Fabric Loader",
				prefix: "fabric-loader-",
				versions: M(e, "fabric-loader-", n.map((e) => e.version))
			},
			{
				name: "Mixin",
				prefix: "sponge-mixin-",
				versions: M(e, "sponge-mixin-", r.reverse())
			}
		];
	});
	h();
	var P = k(), F = o(d(P), 2);
	u(F, () => N, (e) => {
		var t = O();
		y(e, t);
	}, (r, i) => {
		var u = c(), h = d(u);
		m(h, 1, () => s(i), p, (r, i) => {
			var c = E(), u = e(c), d = e(u), h = a(d), v = o(d);
			m(v, 1, () => s(i).versions, p, (e, t) => {
				var n = T(), r = a(n, !0), i = {};
				f(() => {
					_(r, s(t)), i !== (i = s(t)) && (n.value = (n.__value = i) ?? "");
				}), y(e, n);
			}), t(u);
			var b;
			g(u), t(c), f(() => {
				_(h, `Select ${s(i).name ?? ""} Version`), b !== (b = `Select ${s(i).name ?? ""} Version`) && (u.value = u.__value = b, l(u, b));
			}), n("change", u, (e) => j(e, s(i))), y(r, c);
		}), y(r, u);
	}, (e, t) => {
		var n = D(), r = d(n), i = a(r);
		b(2), f(() => _(i, `Error: ${s(t).message ?? ""}`)), y(e, n);
	}), y(v, P), r();
}
//#endregion
export { A as default };

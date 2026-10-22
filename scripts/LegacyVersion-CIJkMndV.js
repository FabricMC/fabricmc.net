import { A as e, B as t, F as n, I as r, L as i, M as a, N as o, P as s, T as c, a as l, b as u, g as d, h as f, i as p, j as m, k as h, l as g, m as _, p as v, s as y, t as b, u as x, v as S, x as C, y as w, z as T } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { c as E, r as D } from "./Api-DQbTMgo_.js";
//#region scripts/src/lib/LegacyVersion.svelte
var O = C("<option> </option>"), k = C("Game version: <select style=\"min-width: 200px\"></select>", 1), A = C("<p style=\"color: red\"> </p> <p>For support please vist one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), j = C("<p>Loading versions..</p>"), M = C("Loader version: <select style=\"min-width: 200px\"></select>", 1), N = C("<main><label><input type=\"checkbox\"/> Show snapshot versions</label> <br/> <br/> <!> <br/> <br/> <!></main>");
function P(C, P) {
	i(P, !1);
	let F = s(!1), I = s(""), L = s(""), R = D().then((e) => (n(I, e.find((e) => e.stable || c(F))?.version ?? ""), e)), z = E().then((e) => (n(L, e[0]?.version ?? ""), e));
	function B() {
		return {
			loaderVersion: c(L),
			selectedGameVersion: c(I)
		};
	}
	var V = { getSelectedVersions: B };
	b();
	var H = N(), U = e(H), W = e(U);
	y(W), T(), t(U);
	var G = o(U, 6);
	d(G, () => R, (e) => {
		var t = j();
		w(e, t);
	}, (e, r) => {
		var i = k(), s = o(m(i));
		v(s, 5, () => c(r), _, (e, t) => {
			var n = u(), r = m(n), i = (e) => {
				var n = O(), r = a(n, !0), i = {};
				h(() => {
					S(r, c(t).version), i !== (i = c(t).version) && (n.value = (n.__value = i) ?? "");
				}), w(e, n);
			};
			f(r, (e) => {
				(c(t).stable || c(F)) && e(i);
			}), w(e, n);
		}), t(s), x(s), g(s, () => c(I), (e) => n(I, e)), w(e, i);
	}, (e, t) => {
		var n = A(), r = m(n), i = a(r);
		T(2), h(() => S(i, `Error: ${c(t).message ?? ""}`)), w(e, n);
	});
	var K = o(G, 6);
	return d(K, () => z, (e) => {
		var t = j();
		w(e, t);
	}, (e, r) => {
		var i = M(), s = o(m(i));
		v(s, 5, () => c(r), _, (e, t) => {
			var n = O(), r = a(n, !0), i = {};
			h(() => {
				S(r, c(t).version), i !== (i = c(t).version) && (n.value = (n.__value = i) ?? "");
			}), w(e, n);
		}), t(s), x(s), g(s, () => c(L), (e) => n(L, e)), w(e, i);
	}, (e, t) => {
		var n = A(), r = m(n), i = a(r);
		T(2), h(() => S(i, `Error: ${c(t).message ?? ""}`)), w(e, n);
	}), t(H), l(W, () => c(F), (e) => n(F, e)), w(C, H), p(P, "getSelectedVersions", B), r(V);
}
//#endregion
export { P as default };

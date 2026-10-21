import { A as e, B as t, D as n, E as r, F as i, I as a, L as o, M as s, N as c, O as l, P as u, T as d, c as f, g as p, j as m, k as h, l as g, m as _, p as v, t as y, u as b, v as x, w as S, x as C, y as w, z as T } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { c as E, i as D, r as O } from "./Api-D_d2Iuos.js";
import k from "./DownloadIcon-Dx6AF_oA.js";
//#region scripts/src/lib/Server.svelte
var A = C("<option> </option>"), j = C("<div class=\"download\"><div class=\"form-line\"><label for=\"minecraft-version\">Minecraft Version:</label> <select id=\"minecraft-version\" style=\"min-width: 200px\"></select></div> <div class=\"form-line\"><label for=\"loader-version\">Fabric Loader Version:</label> <select id=\"loader-version\" style=\"min-width: 200px\"></select></div> <div class=\"form-line\"><label for=\"installer-version\">Installer Version:</label> <select id=\"installer-version\" style=\"min-width: 200px\"></select></div> <div class=\"download\"><a class=\"button primary large\"><!>Executable Server (.jar)</a></div> <p><a>Download installer for older versions or manual installation</a></p></div> <p>The executable jar is a small launcher that will start the Fabric enabled Minecraft server using the versions specified above. There is no need to use an installer when using this method.</p> <div style=\"margin-bottom: 15px;\"><h4>CLI download:</h4> <p>Use the following command to download the executable server launcher to the current directory</p> <code class=\"svelte-xa39o9\"> </code></div> <div style=\"margin-bottom: 15px;\"><h4>Launch command:</h4> <p>Use the following command to run the executable server launcher with 2GB of ram. After a small wait the Minecraft server will be ready.</p> <code class=\"svelte-xa39o9\"> </code></div>", 1), M = C("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), N = C("<p>Loading versions..</p>"), P = C("<main><!></main>");
function F(C, F) {
	o(F, !1);
	let I = u(), L = u(), R = u(), z = u(), B = u(), V = u(), H = Promise.all([
		O(),
		E(),
		D()
	]).then(([e, t, n]) => {
		let r = {
			game: e,
			loader: t.filter((e) => {
				let t = e.version.split(".");
				return parseInt(t[0]) > 0 || parseInt(t[1]) >= 12;
			}),
			installer: n.filter((e) => {
				let t = e.version.split(".");
				return parseInt(t[0]) > 0 || parseInt(t[1]) >= 8;
			})
		};
		return i(z, (r.game.find((e) => e.stable) || r.game[0]).version), i(B, (r.loader.find((e) => e.stable) || r.loader[0]).version), i(V, (r.installer.find((e) => e.stable) || r.installer[0]).version), r;
	});
	n(() => (d(z), d(B), d(V)), () => {
		i(I, `https://meta.fabricmc.net/v2/versions/loader/${d(z)}/${d(B)}/${d(V)}/server/jar`);
	}), n(() => (d(z), d(B), d(V)), () => {
		i(L, `fabric-server-mc.${d(z)}-loader.${d(B)}-launcher.${d(V)}.jar`);
	}), n(() => d(V), () => {
		i(R, `https://maven.fabricmc.net/net/fabricmc/fabric-installer/${d(V)}/fabric-installer-${d(V)}.jar`);
	}), l(), y();
	var U = P(), W = e(U);
	p(W, () => H, (e) => {
		var t = N();
		w(e, t);
	}, (n, a) => {
		var o = j(), l = m(o), u = e(l), p = c(e(u), 2);
		v(p, 5, () => (S(d(a)), r(() => d(a).game)), _, (e, t) => {
			var n = A(), i = s(n, !0), a = {};
			h(() => {
				x(i, (d(t), r(() => d(t).version))), a !== (a = (d(t), r(() => d(t).version))) && (n.value = (n.__value = a) ?? "");
			}), w(e, n);
		}), t(p), b(p), t(u);
		var y = c(u, 2), C = c(e(y), 2);
		v(C, 5, () => (S(d(a)), r(() => d(a).loader)), _, (e, t) => {
			var n = A(), i = s(n, !0), a = {};
			h(() => {
				x(i, (d(t), r(() => d(t).version))), a !== (a = (d(t), r(() => d(t).version))) && (n.value = (n.__value = a) ?? "");
			}), w(e, n);
		}), t(C), b(C), t(y);
		var E = c(y, 2), D = c(e(E), 2);
		v(D, 5, () => (S(d(a)), r(() => d(a).installer)), _, (e, t) => {
			var n = A(), i = s(n, !0), a = {};
			h(() => {
				x(i, (d(t), r(() => d(t).version))), a !== (a = (d(t), r(() => d(t).version))) && (n.value = (n.__value = a) ?? "");
			}), w(e, n);
		}), t(D), b(D), t(E);
		var O = c(E, 2), M = e(O), N = e(M);
		k(N, {}), T(), t(M), t(O);
		var P = c(O, 2), F = s(P);
		t(l);
		var H = c(l, 4), U = c(e(H), 4), W = s(U);
		t(H);
		var G = c(H, 2), K = c(e(G), 4), q = s(K);
		t(G), h(() => {
			f(M, "href", d(I)), f(F, "href", d(R)), x(W, `curl -OJ ${d(I) ?? ""}`), x(q, `java -Xmx2G -jar ${d(L) ?? ""} nogui`);
		}), g(p, () => d(z), (e) => i(z, e)), g(C, () => d(B), (e) => i(B, e)), g(D, () => d(V), (e) => i(V, e)), w(n, o);
	}, (e, t) => {
		var n = M(), i = m(n), a = s(i);
		T(2), h(() => x(a, `Error: ${S(d(t)), r(() => d(t).message) ?? ""}`)), w(e, n);
	}), t(U), w(C, U), a();
}
//#endregion
export { F as default };

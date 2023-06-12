import { S as g, i as $, s as h, e as p, w as b, a as y, c as v, x as w, j as m, q as C, r as x, v as T, d as k, y as A, A as P } from "./index.1b882cd4.js";
import { f as S } from "./Api.49950f8b.js";
import V from "./LegacyVersion.dfd9b889.js";
function j(i) {
  let t, e, o, c, u, l, n, r, s, d = {};
  return e = new V({ props: d }), i[2](e), {
    c() {
      t = p("main"), b(e.$$.fragment), o = y(), c = p("br"), u = y(), l = p("button"), l.textContent = "Download bin/version.json file";
    },
    m(a, f) {
      v(a, t, f), w(e, t, null), m(t, o), m(t, c), m(t, u), m(t, l), n = !0, r || (s = C(l, "click", i[1]), r = !0);
    },
    p(a, [f]) {
      const _ = {};
      e.$set(_);
    },
    i(a) {
      n || (x(e.$$.fragment, a), n = !0);
    },
    o(a) {
      T(e.$$.fragment, a), n = !1;
    },
    d(a) {
      a && k(t), i[2](null), A(e), r = !1, s();
    }
  };
}
function D(i, t) {
  var e = document.createElement("a");
  e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), e.setAttribute("download", i), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e);
}
function J(i, t, e) {
  let o;
  async function c() {
    const { selectedGameVersion: n, loaderVersion: r } = await o.getSelectedVersions();
    D("version.json", await u(n, r));
  }
  async function u(n, r) {
    const s = await S(n, r), d = {
      id: n,
      inheritsFrom: s.inheritsFrom,
      releaseTime: s.releaseTime,
      time: s.time,
      type: s.type,
      minecraftArguments: "--username ${auth_player_name} --version ${version_name} --gameDir ${game_directory} --assetsDir ${assets_root} --assetIndex ${assets_index_name} --uuid ${auth_uuid} --accessToken ${auth_access_token} --userType ${user_type} --versionType ${version_type}",
      libraries: s.libraries,
      mainClass: s.mainClass
    };
    return JSON.stringify(d, null, 2);
  }
  function l(n) {
    P[n ? "unshift" : "push"](() => {
      o = n, e(0, o);
    });
  }
  return [o, c, l];
}
class L extends g {
  constructor(t) {
    super(), $(this, t, J, j, h, {});
  }
}
export {
  L as default
};

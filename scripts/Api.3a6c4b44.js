const a = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net", "https://meta3.fabricmc.net"], l = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net", "https://maven3.fabricmc.net"];
var o = 0;
async function b() {
  var s = await r(a, "/v2/versions/installer");
  return o != 0 && s.forEach((t) => t.url = t.url.replace(l[0], l[o])), s;
}
async function y() {
  return r(a, "/v2/versions/game");
}
async function x() {
  return r(a, "/v2/versions/loader");
}
async function M() {
  return r(a, "/v2/versions/yarn");
}
async function A(s) {
  return r(a, "/v2/versions/yarn/" + s);
}
async function j(s, t) {
  return r(a, `/v2/versions/loader/${s}/${t}/profile/json`);
}
async function k() {
  return u(l, "/jdlist.txt").then((s) => s.split(`
`));
}
async function E(s) {
  return (await r(
    a,
    `/v2/versions/yarn/${s}?limit=1`
  ))[0];
}
function p() {
  return h("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function F() {
  return h("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function L(s) {
  return (await p()).filter((e) => w(e, s)).pop();
}
function v(s) {
  return g(s)[0];
}
function g(s) {
  return s.split("-")[0].split(".").map((e) => parseInt(e));
}
function w(s, t) {
  if (!t)
    return !1;
  if (t == "1.18")
    return s == "0.44.0+1.18";
  let e = t;
  if (["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((f) => {
    t.startsWith(f) && (e = f);
  }), v(t) >= 26) {
    const f = t.indexOf("-");
    var W = t.substring(0, f === -1 ? t.length : f);
    e = W;
  }
  return t.endsWith("_unobfuscated") ? e = "1.21.11_unobfuscated" : t.startsWith("25w14craftmine") ? e = "25w14craftmine" : t.startsWith("22w13oneblockatatime") ? e = "22w13oneblockatatime" : t.startsWith("25w") ? e = "1.21.11" : t.startsWith("24w") ? e = "1.21.4" : t.startsWith("23w") ? e = "1.20.5" : t.startsWith("22w") ? e = "1.19.3" : t.startsWith("1.18.2") ? e = "1.18.2" : t.startsWith("1.19.1") ? e = "1.19.1" : t.startsWith("1.19.2") ? e = "1.19.2" : t.startsWith("1.19.3") ? e = "1.19.3" : t.startsWith("1.19.4") ? e = "1.19.4" : t.startsWith("1.20.1") ? e = "1.20.1" : t.startsWith("1.20.2") ? e = "1.20.2" : t.startsWith("1.20.3") ? e = "1.20.3" : t.startsWith("1.20.4") ? e = "1.20.4" : t.startsWith("1.20.5") ? e = "1.20.5" : t.startsWith("1.20.6") ? e = "1.20.6" : t.startsWith("1.21.6") ? e = "1.21.6" : t.startsWith("1.21.7") ? e = "1.21.7" : t.startsWith("1.21.8") ? e = "1.21.8" : t.startsWith("1.21.9") ? e = "1.21.9" : t.startsWith("1.21.10") ? e = "1.21.10" : t.startsWith("1.21.11") ? e = "1.21.11" : t.startsWith("1.21.5") ? e = "1.21.5" : t.startsWith("1.21.4") ? e = "1.21.4" : t.startsWith("1.21.3") ? e = "1.21.3" : t.startsWith("1.21.2") ? e = "1.21.2" : t.startsWith("1.21.1") ? e = "1.21.1" : t.startsWith("1.21") ? e = "1.21" : t.startsWith("21w") ? e = "1.18" : t.startsWith("20w") ? e = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (e = "1.14"), s.endsWith("-" + e) || s.endsWith("+" + e);
}
let d = (s) => {
  let e = new DOMParser().parseFromString(s, "text/xml");
  return Array.from(e.getElementsByTagName("version")).map((n) => n.childNodes[0].nodeValue);
};
async function h(s) {
  let t = await u(l, s);
  return d(t);
}
async function r(s, t) {
  return await (await c(s, t)).json();
}
async function u(s, t) {
  return await (await c(s, t)).text();
}
async function c(s, t) {
  for (var e of [5e3, 3e4])
    for (var n of s)
      try {
        const i = await fetch(n + t, { signal: AbortSignal.timeout(e) });
        if (i.ok)
          return o = s.indexOf(n), i;
        console.error(await i.text());
      } catch (i) {
        console.error(i);
      }
  throw new Error(`Failed to fetch: ${s[0] + t}`);
}
export {
  M as a,
  x as b,
  b as c,
  y as d,
  j as e,
  E as f,
  k as g,
  L as h,
  A as i,
  F as j,
  p as k,
  w as l
};

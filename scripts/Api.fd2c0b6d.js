const r = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net", "https://meta3.fabricmc.net"], l = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net", "https://maven3.fabricmc.net"];
var o = 0;
async function b() {
  var s = await i(r, "/v2/versions/installer");
  return o != 0 && s.forEach((t) => t.url = t.url.replace(l[0], l[o])), s;
}
async function y() {
  return i(r, "/v2/versions/game");
}
async function x() {
  return i(r, "/v2/versions/loader");
}
async function M() {
  return i(r, "/v2/versions/yarn");
}
async function A(s) {
  return i(r, "/v2/versions/yarn/" + s);
}
async function j(s, t) {
  return i(r, `/v2/versions/loader/${s}/${t}/profile/json`);
}
async function E() {
  return c(l, "/jdlist.txt").then((s) => s.split(`
`));
}
async function k(s) {
  return (await i(
    r,
    `/v2/versions/yarn/${s}?limit=1`
  ))[0];
}
function v() {
  return h("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function F() {
  return h("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function P(s) {
  const e = (await v()).filter((a) => d(a, s)).pop();
  if (!e)
    throw new Error(`Could not find a valid Fabric API version for Minecraft ${s}`);
  return e;
}
function p(s) {
  return g(s)[0];
}
function g(s) {
  return s.split("-")[0].split(".").map((e) => parseInt(e));
}
function d(s, t) {
  if (!t)
    return !1;
  if (t == "1.18")
    return s == "0.44.0+1.18";
  let e = t;
  if (["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((f) => {
    t.startsWith(f) && (e = f);
  }), p(t) >= 26) {
    const f = t.indexOf("-");
    var W = t.substring(0, f === -1 ? t.length : f);
    e = W;
  }
  return t.endsWith("_unobfuscated") ? e = "1.21.11_unobfuscated" : t.startsWith("25w14craftmine") ? e = "25w14craftmine" : t.startsWith("22w13oneblockatatime") ? e = "22w13oneblockatatime" : t.startsWith("25w") ? e = "1.21.11" : t.startsWith("24w") ? e = "1.21.4" : t.startsWith("23w") ? e = "1.20.5" : t.startsWith("22w") ? e = "1.19.3" : t.startsWith("1.18.2") ? e = "1.18.2" : t.startsWith("1.19.1") ? e = "1.19.1" : t.startsWith("1.19.2") ? e = "1.19.2" : t.startsWith("1.19.3") ? e = "1.19.3" : t.startsWith("1.19.4") ? e = "1.19.4" : t.startsWith("1.20.1") ? e = "1.20.1" : t.startsWith("1.20.2") ? e = "1.20.2" : t.startsWith("1.20.3") ? e = "1.20.3" : t.startsWith("1.20.4") ? e = "1.20.4" : t.startsWith("1.20.5") ? e = "1.20.5" : t.startsWith("1.20.6") ? e = "1.20.6" : t.startsWith("1.21.6") ? e = "1.21.6" : t.startsWith("1.21.7") ? e = "1.21.7" : t.startsWith("1.21.8") ? e = "1.21.8" : t.startsWith("1.21.9") ? e = "1.21.9" : t.startsWith("1.21.10") ? e = "1.21.10" : t.startsWith("1.21.11") ? e = "1.21.11" : t.startsWith("1.21.5") ? e = "1.21.5" : t.startsWith("1.21.4") ? e = "1.21.4" : t.startsWith("1.21.3") ? e = "1.21.3" : t.startsWith("1.21.2") ? e = "1.21.2" : t.startsWith("1.21.1") ? e = "1.21.1" : t.startsWith("1.21") ? e = "1.21" : t.startsWith("21w") ? e = "1.18" : t.startsWith("20w") ? e = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (e = "1.14"), s.endsWith("-" + e) || s.endsWith("+" + e);
}
let w = (s) => {
  let e = new DOMParser().parseFromString(s, "text/xml");
  return Array.from(e.getElementsByTagName("version")).map((a) => a.childNodes[0].nodeValue);
};
async function h(s) {
  let t = await c(l, s);
  return w(t);
}
async function i(s, t) {
  return await (await u(s, t)).json();
}
async function c(s, t) {
  return await (await u(s, t)).text();
}
async function u(s, t) {
  for (var e of [5e3, 3e4])
    for (var a of s)
      try {
        const n = await fetch(a + t, { signal: AbortSignal.timeout(e) });
        if (n.ok)
          return o = s.indexOf(a), n;
        console.error(await n.text());
      } catch (n) {
        console.error(n);
      }
  throw new Error(`Failed to fetch: ${s[0] + t}`);
}
export {
  M as a,
  x as b,
  b as c,
  y as d,
  j as e,
  k as f,
  E as g,
  P as h,
  A as i,
  F as j,
  v as k,
  d as l
};

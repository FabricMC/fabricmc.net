const r = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net", "https://meta3.fabricmc.net"], f = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net", "https://maven3.fabricmc.net"];
var l = 0;
async function p() {
  var s = await i(r, "/v2/versions/installer");
  return l != 0 && s.forEach((t) => t.url = t.url.replace(f[0], f[l])), s;
}
async function w() {
  return i(r, "/v2/versions/game");
}
async function g() {
  return i(r, "/v2/versions/loader");
}
async function d() {
  return i(r, "/v2/versions/yarn");
}
async function y(s) {
  return i(r, "/v2/versions/yarn/" + s);
}
async function b(s, t) {
  return i(r, `/v2/versions/loader/${s}/${t}/profile/json`);
}
async function x() {
  return h(f, "/jdlist.txt").then((s) => s.split(`
`));
}
async function A(s) {
  return (await i(
    r,
    `/v2/versions/yarn/${s}?limit=1`
  ))[0];
}
function u() {
  return o("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function M() {
  return o("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function k(s) {
  return (await u()).filter((e) => W(e, s)).pop();
}
function W(s, t) {
  if (!t)
    return !1;
  if (t == "1.18")
    return s == "0.44.0+1.18";
  let e = t;
  return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((a) => {
    t.startsWith(a) && (e = a);
  }), t.startsWith("25w14craftmine") ? e = "25w14craftmine" : t.startsWith("22w13oneblockatatime") ? e = "22w13oneblockatatime" : t.startsWith("25w") ? e = "1.21.11" : t.startsWith("24w") ? e = "1.21.4" : t.startsWith("23w") ? e = "1.20.5" : t.startsWith("22w") ? e = "1.19.3" : t.startsWith("1.18.2") ? e = "1.18.2" : t.startsWith("1.19.1") ? e = "1.19.1" : t.startsWith("1.19.2") ? e = "1.19.2" : t.startsWith("1.19.3") ? e = "1.19.3" : t.startsWith("1.19.4") ? e = "1.19.4" : t.startsWith("1.20.1") ? e = "1.20.1" : t.startsWith("1.20.2") ? e = "1.20.2" : t.startsWith("1.20.3") ? e = "1.20.3" : t.startsWith("1.20.4") ? e = "1.20.4" : t.startsWith("1.20.5") ? e = "1.20.5" : t.startsWith("1.20.6") ? e = "1.20.6" : t.startsWith("1.21.6") ? e = "1.21.6" : t.startsWith("1.21.7") ? e = "1.21.7" : t.startsWith("1.21.8") ? e = "1.21.8" : t.startsWith("1.21.9") ? e = "1.21.9" : t.startsWith("1.21.10") ? e = "1.21.10" : t.startsWith("1.21.11") ? e = "1.21.11" : t.startsWith("1.21.5") ? e = "1.21.5" : t.startsWith("1.21.4") ? e = "1.21.4" : t.startsWith("1.21.3") ? e = "1.21.3" : t.startsWith("1.21.2") ? e = "1.21.2" : t.startsWith("1.21.1") ? e = "1.21.1" : t.startsWith("1.21") ? e = "1.21" : t.startsWith("21w") ? e = "1.18" : t.startsWith("20w") ? e = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (e = "1.14"), s.endsWith("-" + e) || s.endsWith("+" + e);
}
let v = (s) => {
  let e = new DOMParser().parseFromString(s, "text/xml");
  return Array.from(e.getElementsByTagName("version")).map((n) => n.childNodes[0].nodeValue);
};
async function o(s) {
  let t = await h(f, s);
  return v(t);
}
async function i(s, t) {
  return await (await c(s, t)).json();
}
async function h(s, t) {
  return await (await c(s, t)).text();
}
async function c(s, t) {
  for (var e of [5e3, 3e4])
    for (var n of s)
      try {
        const a = await fetch(n + t, { signal: AbortSignal.timeout(e) });
        if (a.ok)
          return l = s.indexOf(n), a;
        console.error(await a.text());
      } catch (a) {
        console.error(a);
      }
  throw new Error(`Failed to fetch: ${s[0] + t}`);
}
export {
  d as a,
  g as b,
  p as c,
  w as d,
  b as e,
  A as f,
  x as g,
  k as h,
  y as i,
  M as j,
  u as k,
  W as l
};

const r = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], f = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function p() {
  return i(r, "/v2/versions/installer");
}
async function v() {
  return i(r, "/v2/versions/game");
}
async function w() {
  return i(r, "/v2/versions/loader");
}
async function g() {
  return i(r, "/v2/versions/yarn");
}
async function y(s) {
  return i(r, "/v2/versions/yarn/" + s);
}
async function d(s, t) {
  return i(r, `/v2/versions/loader/${s}/${t}/profile/json`);
}
async function b() {
  return o(f, "/jdlist.txt").then((s) => s.split(`
`));
}
async function x(s) {
  return (await i(
    r,
    `/v2/versions/yarn/${s}?limit=1`
  ))[0];
}
function c() {
  return l("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function A() {
  return l("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function M(s) {
  return (await c()).filter((e) => u(e, s)).pop();
}
function u(s, t) {
  if (!t)
    return !1;
  if (t == "1.18")
    return s == "0.44.0+1.18";
  let e = t;
  return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((n) => {
    t.startsWith(n) && (e = n);
  }), t.startsWith("22w13oneblockatatime") ? e = "22w13oneblockatatime" : t.startsWith("25w") ? e = "1.21.5" : t.startsWith("24w") ? e = "1.21.4" : t.startsWith("23w") ? e = "1.20.5" : t.startsWith("22w") ? e = "1.19.3" : t.startsWith("1.18.2") ? e = "1.18.2" : t.startsWith("1.19.1") ? e = "1.19.1" : t.startsWith("1.19.2") ? e = "1.19.2" : t.startsWith("1.19.3") ? e = "1.19.3" : t.startsWith("1.19.4") ? e = "1.19.4" : t.startsWith("1.20.1") ? e = "1.20.1" : t.startsWith("1.20.2") ? e = "1.20.2" : t.startsWith("1.20.3") ? e = "1.20.3" : t.startsWith("1.20.4") ? e = "1.20.4" : t.startsWith("1.20.5") ? e = "1.20.5" : t.startsWith("1.20.6") ? e = "1.20.6" : t.startsWith("1.21.5") ? e = "1.21.5" : t.startsWith("1.21.4") ? e = "1.21.4" : t.startsWith("1.21.3") ? e = "1.21.3" : t.startsWith("1.21.2") ? e = "1.21.2" : t.startsWith("1.21.1") ? e = "1.21.1" : t.startsWith("1.21") ? e = "1.21" : t.startsWith("21w") ? e = "1.18" : t.startsWith("20w") ? e = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (e = "1.14"), s.endsWith("-" + e) || s.endsWith("+" + e);
}
let W = (s) => {
  let e = new DOMParser().parseFromString(s, "text/xml");
  return Array.from(e.getElementsByTagName("version")).map((a) => a.childNodes[0].nodeValue);
};
async function l(s) {
  let t = await o(f, s);
  return W(t);
}
async function i(s, t) {
  return await (await h(s, t)).json();
}
async function o(s, t) {
  return await (await h(s, t)).text();
}
async function h(s, t) {
  for (var e of s)
    try {
      const a = await fetch(e + t);
      if (a.ok)
        return a;
      console.error(await a.text());
    } catch (a) {
      console.error(a);
    }
  throw new Error(`Failed to fetch: ${s[0] + t}`);
}
export {
  g as a,
  w as b,
  p as c,
  v as d,
  d as e,
  x as f,
  b as g,
  M as h,
  y as i,
  A as j,
  c as k,
  u as l
};

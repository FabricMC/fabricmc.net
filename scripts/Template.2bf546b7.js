import { S as Se, i as Ie, s as Be, h as Fe, b as Re, c as yt, u as Oe, o as Dt, p as Ut, d as wt, q as Te, e as nt, t as Ct, a as ut, f as _t, g as Y, n as Ft, k as $, r as _e, C as Tt, l as Jt, m as It, D as Ve, E as Ne, j as Gt, B as ue, A as jt, y as Zt, v as he, w as Ae, x as de } from "./index.4deac2e0.js";
import fe from "./DownloadIcon.39c279f6.js";
import { g as De, a as pe, b as Ue, m as me, n as Qe, c as ze, d as Ge, e as Le, s as je, f as Me } from "./minecraft.b5a6e8aa.js";
import { d as We, b as Ze, h as Pe, i as Je, j as Ye } from "./Api.3a6c4b44.js";
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ge(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
function zt(B) {
  throw new Error('Could not dynamically require "' + B + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var be = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(B, d) {
  (function(e) {
    B.exports = e();
  })(function() {
    return function e(h, c, r) {
      function a(p, m) {
        if (!c[p]) {
          if (!h[p]) {
            var g = typeof zt == "function" && zt;
            if (!m && g)
              return g(p, !0);
            if (n)
              return n(p, !0);
            var v = new Error("Cannot find module '" + p + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var l = c[p] = { exports: {} };
          h[p][0].call(l.exports, function(b) {
            var s = h[p][1][b];
            return a(s || b);
          }, l, l.exports, e, h, c, r);
        }
        return c[p].exports;
      }
      for (var n = typeof zt == "function" && zt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, h, c) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var p, m, g, v, l, b, s, f = [], u = 0, w = o.length, E = w, T = r.getTypeOf(o) !== "string"; u < o.length; )
          E = w - u, g = T ? (p = o[u++], m = u < w ? o[u++] : 0, u < w ? o[u++] : 0) : (p = o.charCodeAt(u++), m = u < w ? o.charCodeAt(u++) : 0, u < w ? o.charCodeAt(u++) : 0), v = p >> 2, l = (3 & p) << 4 | m >> 4, b = 1 < E ? (15 & m) << 2 | g >> 6 : 64, s = 2 < E ? 63 & g : 64, f.push(n.charAt(v) + n.charAt(l) + n.charAt(b) + n.charAt(s));
        return f.join("");
      }, c.decode = function(o) {
        var p, m, g, v, l, b, s = 0, f = 0, u = "data:";
        if (o.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, E = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && E--, o.charAt(o.length - 2) === n.charAt(64) && E--, E % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); s < o.length; )
          p = n.indexOf(o.charAt(s++)) << 2 | (v = n.indexOf(o.charAt(s++))) >> 4, m = (15 & v) << 4 | (l = n.indexOf(o.charAt(s++))) >> 2, g = (3 & l) << 6 | (b = n.indexOf(o.charAt(s++))), w[f++] = p, l !== 64 && (w[f++] = m), b !== 64 && (w[f++] = g);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, h, c) {
      var r = e("./external"), a = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function p(m, g, v, l, b) {
        this.compressedSize = m, this.uncompressedSize = g, this.crc32 = v, this.compression = l, this.compressedContent = b;
      }
      p.prototype = { getContentWorker: function() {
        var m = new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), g = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== g.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, p.createWorkerFrom = function(m, g, v) {
        return m.pipe(new n()).pipe(new o("uncompressedSize")).pipe(g.compressWorker(v)).pipe(new o("compressedSize")).withStreamInfo("compression", g);
      }, h.exports = p;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, h, c) {
      var r = e("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, c.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, h, c) {
      var r = e("./utils"), a = function() {
        for (var n, o = [], p = 0; p < 256; p++) {
          n = p;
          for (var m = 0; m < 8; m++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          o[p] = n;
        }
        return o;
      }();
      h.exports = function(n, o) {
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(p, m, g, v) {
          var l = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ l[255 & (p ^ m[s])];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : function(p, m, g, v) {
          var l = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ l[255 & (p ^ m.charCodeAt(s))];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, h, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(e, h, c) {
      var r = null;
      r = typeof Promise < "u" ? Promise : e("lie"), h.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(e, h, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), n = e("./utils"), o = e("./stream/GenericWorker"), p = r ? "uint8array" : "array";
      function m(g, v) {
        o.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = v, this.meta = {};
      }
      c.magic = "\b\0", n.inherits(m, o), m.prototype.processChunk = function(g) {
        this.meta = g.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(p, g.data), !1);
      }, m.prototype.flush = function() {
        o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, m.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this._pako = null;
      }, m.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var g = this;
        this._pako.onData = function(v) {
          g.push({ data: v, meta: g.meta });
        };
      }, c.compressWorker = function(g) {
        return new m("Deflate", g);
      }, c.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, h, c) {
      function r(l, b) {
        var s, f = "";
        for (s = 0; s < b; s++)
          f += String.fromCharCode(255 & l), l >>>= 8;
        return f;
      }
      function a(l, b, s, f, u, w) {
        var E, T, O = l.file, z = l.compression, Q = w !== p.utf8encode, J = n.transformTo("string", w(O.name)), D = n.transformTo("string", p.utf8encode(O.name)), X = O.comment, rt = n.transformTo("string", w(X)), k = n.transformTo("string", p.utf8encode(X)), N = D.length !== O.name.length, i = k.length !== X.length, L = "", it = "", C = "", V = O.dir, F = O.date, Z = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !s || (Z.crc32 = l.crc32, Z.compressedSize = l.compressedSize, Z.uncompressedSize = l.uncompressedSize);
        var x = 0;
        b && (x |= 8), Q || !N && !i || (x |= 2048);
        var I = 0, q = 0;
        V && (I |= 16), u === "UNIX" ? (q = 798, I |= function(H, ct) {
          var pt = H;
          return H || (pt = ct ? 16893 : 33204), (65535 & pt) << 16;
        }(O.unixPermissions, V)) : (q = 20, I |= function(H) {
          return 63 & (H || 0);
        }(O.dosPermissions)), E = F.getUTCHours(), E <<= 6, E |= F.getUTCMinutes(), E <<= 5, E |= F.getUTCSeconds() / 2, T = F.getUTCFullYear() - 1980, T <<= 4, T |= F.getUTCMonth() + 1, T <<= 5, T |= F.getUTCDate(), N && (it = r(1, 1) + r(m(J), 4) + D, L += "up" + r(it.length, 2) + it), i && (C = r(1, 1) + r(m(rt), 4) + k, L += "uc" + r(C.length, 2) + C);
        var P = "";
        return P += `
\0`, P += r(x, 2), P += z.magic, P += r(E, 2), P += r(T, 2), P += r(Z.crc32, 4), P += r(Z.compressedSize, 4), P += r(Z.uncompressedSize, 4), P += r(J.length, 2), P += r(L.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + P + J + L, dirRecord: g.CENTRAL_FILE_HEADER + r(q, 2) + P + r(rt.length, 2) + "\0\0\0\0" + r(I, 4) + r(f, 4) + J + L + rt };
      }
      var n = e("../utils"), o = e("../stream/GenericWorker"), p = e("../utf8"), m = e("../crc32"), g = e("../signature");
      function v(l, b, s, f) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = s, this.encodeFileName = f, this.streamFiles = l, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(v, o), v.prototype.push = function(l) {
        var b = l.meta.percent || 0, s = this.entriesCount, f = this._sources.length;
        this.accumulate ? this.contentBuffer.push(l) : (this.bytesWritten += l.data.length, o.prototype.push.call(this, { data: l.data, meta: { currentFile: this.currentFile, percent: s ? (b + 100 * (s - f - 1)) / s : 100 } }));
      }, v.prototype.openedSource = function(l) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = l.file.name;
        var b = this.streamFiles && !l.file.dir;
        if (b) {
          var s = a(l, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: s.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, v.prototype.closedSource = function(l) {
        this.accumulate = !1;
        var b = this.streamFiles && !l.file.dir, s = a(l, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(s.dirRecord), b)
          this.push({ data: function(f) {
            return g.DATA_DESCRIPTOR + r(f.crc32, 4) + r(f.compressedSize, 4) + r(f.uncompressedSize, 4);
          }(l), meta: { percent: 100 } });
        else
          for (this.push({ data: s.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, v.prototype.flush = function() {
        for (var l = this.bytesWritten, b = 0; b < this.dirRecords.length; b++)
          this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
        var s = this.bytesWritten - l, f = function(u, w, E, T, O) {
          var z = n.transformTo("string", O(T));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(u, 2) + r(u, 2) + r(w, 4) + r(E, 4) + r(z.length, 2) + z;
        }(this.dirRecords.length, s, l, this.zipComment, this.encodeFileName);
        this.push({ data: f, meta: { percent: 100 } });
      }, v.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, v.prototype.registerPrevious = function(l) {
        this._sources.push(l);
        var b = this;
        return l.on("data", function(s) {
          b.processChunk(s);
        }), l.on("end", function() {
          b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end();
        }), l.on("error", function(s) {
          b.error(s);
        }), this;
      }, v.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, v.prototype.error = function(l) {
        var b = this._sources;
        if (!o.prototype.error.call(this, l))
          return !1;
        for (var s = 0; s < b.length; s++)
          try {
            b[s].error(l);
          } catch {
          }
        return !0;
      }, v.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var l = this._sources, b = 0; b < l.length; b++)
          l[b].lock();
      }, h.exports = v;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, h, c) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      c.generateWorker = function(n, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), g = 0;
        try {
          n.forEach(function(v, l) {
            g++;
            var b = function(w, E) {
              var T = w || E, O = r[T];
              if (!O)
                throw new Error(T + " is not a valid compression method !");
              return O;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, f = l.dir, u = l.date;
            l._compressWorker(b, s).withStreamInfo("file", { name: v, dir: f, date: u, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = g;
        } catch (v) {
          m.error(v);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, h, c) {
      function r() {
        if (!(this instanceof r))
          return new r();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new r();
          for (var n in this)
            typeof this[n] != "function" && (a[n] = this[n]);
          return a;
        };
      }
      (r.prototype = e("./object")).loadAsync = e("./load"), r.support = e("./support"), r.defaults = e("./defaults"), r.version = "3.10.1", r.loadAsync = function(a, n) {
        return new r().loadAsync(a, n);
      }, r.external = e("./external"), h.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, h, c) {
      var r = e("./utils"), a = e("./external"), n = e("./utf8"), o = e("./zipEntries"), p = e("./stream/Crc32Probe"), m = e("./nodejsUtils");
      function g(v) {
        return new a.Promise(function(l, b) {
          var s = v.decompressed.getContentWorker().pipe(new p());
          s.on("error", function(f) {
            b(f);
          }).on("end", function() {
            s.streamInfo.crc32 !== v.decompressed.crc32 ? b(new Error("Corrupted zip : CRC32 mismatch")) : l();
          }).resume();
        });
      }
      h.exports = function(v, l) {
        var b = this;
        return l = r.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(v) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", v, !0, l.optimizedBinaryString, l.base64).then(function(s) {
          var f = new o(l);
          return f.load(s), f;
        }).then(function(s) {
          var f = [a.Promise.resolve(s)], u = s.files;
          if (l.checkCRC32)
            for (var w = 0; w < u.length; w++)
              f.push(g(u[w]));
          return a.Promise.all(f);
        }).then(function(s) {
          for (var f = s.shift(), u = f.files, w = 0; w < u.length; w++) {
            var E = u[w], T = E.fileNameStr, O = r.resolve(E.fileNameStr);
            b.file(O, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: l.createFolders }), E.dir || (b.file(O).unsafeOriginalName = T);
          }
          return f.zipComment.length && (b.comment = f.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, h, c) {
      var r = e("../utils"), a = e("../stream/GenericWorker");
      function n(o, p) {
        a.call(this, "Nodejs stream input adapter for " + o), this._upstreamEnded = !1, this._bindStream(p);
      }
      r.inherits(n, a), n.prototype._bindStream = function(o) {
        var p = this;
        (this._stream = o).pause(), o.on("data", function(m) {
          p.push({ data: m, meta: { percent: 0 } });
        }).on("error", function(m) {
          p.isPaused ? this.generatedError = m : p.error(m);
        }).on("end", function() {
          p.isPaused ? p._upstreamEnded = !0 : p.end();
        });
      }, n.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, h.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, h, c) {
      var r = e("readable-stream").Readable;
      function a(n, o, p) {
        r.call(this, o), this._helper = n;
        var m = this;
        n.on("data", function(g, v) {
          m.push(g) || m._helper.pause(), p && p(v);
        }).on("error", function(g) {
          m.emit("error", g);
        }).on("end", function() {
          m.push(null);
        });
      }
      e("../utils").inherits(a, r), a.prototype._read = function() {
        this._helper.resume();
      }, h.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, h, c) {
      h.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(r, a);
        if (typeof r == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(r, a);
      }, allocBuffer: function(r) {
        if (Buffer.alloc)
          return Buffer.alloc(r);
        var a = new Buffer(r);
        return a.fill(0), a;
      }, isBuffer: function(r) {
        return Buffer.isBuffer(r);
      }, isStream: function(r) {
        return r && typeof r.on == "function" && typeof r.pause == "function" && typeof r.resume == "function";
      } };
    }, {}], 15: [function(e, h, c) {
      function r(O, z, Q) {
        var J, D = n.getTypeOf(z), X = n.extend(Q || {}, m);
        X.date = X.date || /* @__PURE__ */ new Date(), X.compression !== null && (X.compression = X.compression.toUpperCase()), typeof X.unixPermissions == "string" && (X.unixPermissions = parseInt(X.unixPermissions, 8)), X.unixPermissions && 16384 & X.unixPermissions && (X.dir = !0), X.dosPermissions && 16 & X.dosPermissions && (X.dir = !0), X.dir && (O = u(O)), X.createFolders && (J = f(O)) && w.call(this, J, !0);
        var rt = D === "string" && X.binary === !1 && X.base64 === !1;
        Q && Q.binary !== void 0 || (X.binary = !rt), (z instanceof g && z.uncompressedSize === 0 || X.dir || !z || z.length === 0) && (X.base64 = !1, X.binary = !0, z = "", X.compression = "STORE", D = "string");
        var k = null;
        k = z instanceof g || z instanceof o ? z : b.isNode && b.isStream(z) ? new s(O, z) : n.prepareContent(O, z, X.binary, X.optimizedBinaryString, X.base64);
        var N = new v(O, k, X);
        this.files[O] = N;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), g = e("./compressedObject"), v = e("./zipObject"), l = e("./generate"), b = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), f = function(O) {
        O.slice(-1) === "/" && (O = O.substring(0, O.length - 1));
        var z = O.lastIndexOf("/");
        return 0 < z ? O.substring(0, z) : "";
      }, u = function(O) {
        return O.slice(-1) !== "/" && (O += "/"), O;
      }, w = function(O, z) {
        return z = z !== void 0 ? z : m.createFolders, O = u(O), this.files[O] || r.call(this, O, null, { dir: !0, createFolders: z }), this.files[O];
      };
      function E(O) {
        return Object.prototype.toString.call(O) === "[object RegExp]";
      }
      var T = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(O) {
        var z, Q, J;
        for (z in this.files)
          J = this.files[z], (Q = z.slice(this.root.length, z.length)) && z.slice(0, this.root.length) === this.root && O(Q, J);
      }, filter: function(O) {
        var z = [];
        return this.forEach(function(Q, J) {
          O(Q, J) && z.push(J);
        }), z;
      }, file: function(O, z, Q) {
        if (arguments.length !== 1)
          return O = this.root + O, r.call(this, O, z, Q), this;
        if (E(O)) {
          var J = O;
          return this.filter(function(X, rt) {
            return !rt.dir && J.test(X);
          });
        }
        var D = this.files[this.root + O];
        return D && !D.dir ? D : null;
      }, folder: function(O) {
        if (!O)
          return this;
        if (E(O))
          return this.filter(function(D, X) {
            return X.dir && O.test(D);
          });
        var z = this.root + O, Q = w.call(this, z), J = this.clone();
        return J.root = Q.name, J;
      }, remove: function(O) {
        O = this.root + O;
        var z = this.files[O];
        if (z || (O.slice(-1) !== "/" && (O += "/"), z = this.files[O]), z && !z.dir)
          delete this.files[O];
        else
          for (var Q = this.filter(function(D, X) {
            return X.name.slice(0, O.length) === O;
          }), J = 0; J < Q.length; J++)
            delete this.files[Q[J].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(O) {
        var z, Q = {};
        try {
          if ((Q = n.extend(O || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = Q.type.toLowerCase(), Q.compression = Q.compression.toUpperCase(), Q.type === "binarystring" && (Q.type = "string"), !Q.type)
            throw new Error("No output type specified.");
          n.checkSupport(Q.type), Q.platform !== "darwin" && Q.platform !== "freebsd" && Q.platform !== "linux" && Q.platform !== "sunos" || (Q.platform = "UNIX"), Q.platform === "win32" && (Q.platform = "DOS");
          var J = Q.comment || this.comment || "";
          z = l.generateWorker(this, Q, J);
        } catch (D) {
          (z = new o("error")).error(D);
        }
        return new p(z, Q.type || "string", Q.mimeType);
      }, generateAsync: function(O, z) {
        return this.generateInternalStream(O).accumulate(z);
      }, generateNodeStream: function(O, z) {
        return (O = O || {}).type || (O.type = "nodebuffer"), this.generateInternalStream(O).toNodejsStream(z);
      } };
      h.exports = T;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, h, c) {
      h.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, h, c) {
      var r = e("./DataReader");
      function a(n) {
        r.call(this, n);
        for (var o = 0; o < this.data.length; o++)
          n[o] = 255 & n[o];
      }
      e("../utils").inherits(a, r), a.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, a.prototype.lastIndexOfSignature = function(n) {
        for (var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), g = n.charCodeAt(3), v = this.length - 4; 0 <= v; --v)
          if (this.data[v] === o && this.data[v + 1] === p && this.data[v + 2] === m && this.data[v + 3] === g)
            return v - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(n) {
        var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), g = n.charCodeAt(3), v = this.readData(4);
        return o === v[0] && p === v[1] && m === v[2] && g === v[3];
      }, a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return [];
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, h, c) {
      var r = e("../utils");
      function a(n) {
        this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(n) {
        this.checkIndex(this.index + n);
      }, checkIndex: function(n) {
        if (this.length < this.zero + n || n < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + n + "). Corrupted zip ?");
      }, setIndex: function(n) {
        this.checkIndex(n), this.index = n;
      }, skip: function(n) {
        this.setIndex(this.index + n);
      }, byteAt: function() {
      }, readInt: function(n) {
        var o, p = 0;
        for (this.checkOffset(n), o = this.index + n - 1; o >= this.index; o--)
          p = (p << 8) + this.byteAt(o);
        return this.index += n, p;
      }, readString: function(n) {
        return r.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, h.exports = a;
    }, { "../utils": 32 }], 19: [function(e, h, c) {
      var r = e("./Uint8ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        this.checkOffset(n);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, h, c) {
      var r = e("./DataReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.byteAt = function(n) {
        return this.data.charCodeAt(this.zero + n);
      }, a.prototype.lastIndexOfSignature = function(n) {
        return this.data.lastIndexOf(n) - this.zero;
      }, a.prototype.readAndCheckSignature = function(n) {
        return n === this.readData(4);
      }, a.prototype.readData = function(n) {
        this.checkOffset(n);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, h, c) {
      var r = e("./ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, h, c) {
      var r = e("../utils"), a = e("../support"), n = e("./ArrayReader"), o = e("./StringReader"), p = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      h.exports = function(g) {
        var v = r.getTypeOf(g);
        return r.checkSupport(v), v !== "string" || a.uint8array ? v === "nodebuffer" ? new p(g) : a.uint8array ? new m(r.transformTo("uint8array", g)) : new n(r.transformTo("array", g)) : new o(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, h, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, h, c) {
      var r = e("./GenericWorker"), a = e("../utils");
      function n(o) {
        r.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      a.inherits(n, r), n.prototype.processChunk = function(o) {
        this.push({ data: a.transformTo(this.destType, o.data), meta: o.meta });
      }, h.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, h, c) {
      var r = e("./GenericWorker"), a = e("../crc32");
      function n() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(n, r), n.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = a(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, h.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, h, c) {
      var r = e("../utils"), a = e("./GenericWorker");
      function n(o) {
        a.call(this, "DataLengthProbe for " + o), this.propName = o, this.withStreamInfo(o, 0);
      }
      r.inherits(n, a), n.prototype.processChunk = function(o) {
        if (o) {
          var p = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = p + o.data.length;
        }
        a.prototype.processChunk.call(this, o);
      }, h.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, h, c) {
      var r = e("../utils"), a = e("./GenericWorker");
      function n(o) {
        a.call(this, "DataWorker");
        var p = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, o.then(function(m) {
          p.dataIsReady = !0, p.data = m, p.max = m && m.length || 0, p.type = r.getTypeOf(m), p.isPaused || p._tickAndRepeat();
        }, function(m) {
          p.error(m);
        });
      }
      r.inherits(n, a), n.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, n.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
      }, n.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, n.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var o = null, p = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            o = this.data.substring(this.index, p);
            break;
          case "uint8array":
            o = this.data.subarray(this.index, p);
            break;
          case "array":
          case "nodebuffer":
            o = this.data.slice(this.index, p);
        }
        return this.index = p, this.push({ data: o, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, h.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, h, c) {
      function r(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      r.prototype = { push: function(a) {
        this.emit("data", a);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (a) {
          this.emit("error", a);
        }
        return !0;
      }, error: function(a) {
        return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
      }, on: function(a, n) {
        return this._listeners[a].push(n), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, n) {
        if (this._listeners[a])
          for (var o = 0; o < this._listeners[a].length; o++)
            this._listeners[a][o].call(this, n);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var n = this;
        return a.on("data", function(o) {
          n.processChunk(o);
        }), a.on("end", function() {
          n.end();
        }), a.on("error", function(o) {
          n.error(o);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var a = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
      }, flush: function() {
      }, processChunk: function(a) {
        this.push(a);
      }, withStreamInfo: function(a, n) {
        return this.extraStreamInfo[a] = n, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var a in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var a = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + a : a;
      } }, h.exports = r;
    }, {}], 29: [function(e, h, c) {
      var r = e("../utils"), a = e("./ConvertWorker"), n = e("./GenericWorker"), o = e("../base64"), p = e("../support"), m = e("../external"), g = null;
      if (p.nodestream)
        try {
          g = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function v(b, s) {
        return new m.Promise(function(f, u) {
          var w = [], E = b._internalType, T = b._outputType, O = b._mimeType;
          b.on("data", function(z, Q) {
            w.push(z), s && s(Q);
          }).on("error", function(z) {
            w = [], u(z);
          }).on("end", function() {
            try {
              var z = function(Q, J, D) {
                switch (Q) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", J), D);
                  case "base64":
                    return o.encode(J);
                  default:
                    return r.transformTo(Q, J);
                }
              }(T, function(Q, J) {
                var D, X = 0, rt = null, k = 0;
                for (D = 0; D < J.length; D++)
                  k += J[D].length;
                switch (Q) {
                  case "string":
                    return J.join("");
                  case "array":
                    return Array.prototype.concat.apply([], J);
                  case "uint8array":
                    for (rt = new Uint8Array(k), D = 0; D < J.length; D++)
                      rt.set(J[D], X), X += J[D].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(J);
                  default:
                    throw new Error("concat : unsupported type '" + Q + "'");
                }
              }(E, w), O);
              f(z);
            } catch (Q) {
              u(Q);
            }
            w = [];
          }).resume();
        });
      }
      function l(b, s, f) {
        var u = s;
        switch (s) {
          case "blob":
          case "arraybuffer":
            u = "uint8array";
            break;
          case "base64":
            u = "string";
        }
        try {
          this._internalType = u, this._outputType = s, this._mimeType = f, r.checkSupport(u), this._worker = b.pipe(new a(u)), b.lock();
        } catch (w) {
          this._worker = new n("error"), this._worker.error(w);
        }
      }
      l.prototype = { accumulate: function(b) {
        return v(this, b);
      }, on: function(b, s) {
        var f = this;
        return b === "data" ? this._worker.on(b, function(u) {
          s.call(f, u.data, u.meta);
        }) : this._worker.on(b, function() {
          r.delay(s, arguments, f);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(b) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new g(this, { objectMode: this._outputType !== "nodebuffer" }, b);
      } }, h.exports = l;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, h, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        c.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          c.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(r), c.blob = a.getBlob("application/zip").size === 0;
          } catch {
            c.blob = !1;
          }
        }
      }
      try {
        c.nodestream = !!e("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, h, c) {
      for (var r = e("./utils"), a = e("./support"), n = e("./nodejsUtils"), o = e("./stream/GenericWorker"), p = new Array(256), m = 0; m < 256; m++)
        p[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      p[254] = p[254] = 1;
      function g() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(l) {
        return a.nodebuffer ? n.newBufferFrom(l, "utf-8") : function(b) {
          var s, f, u, w, E, T = b.length, O = 0;
          for (w = 0; w < T; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (u - 56320), w++), O += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(O) : new Array(O), w = E = 0; E < O; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (u - 56320), w++), f < 128 ? s[E++] = f : (f < 2048 ? s[E++] = 192 | f >>> 6 : (f < 65536 ? s[E++] = 224 | f >>> 12 : (s[E++] = 240 | f >>> 18, s[E++] = 128 | f >>> 12 & 63), s[E++] = 128 | f >>> 6 & 63), s[E++] = 128 | 63 & f);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(b) {
          var s, f, u, w, E = b.length, T = new Array(2 * E);
          for (s = f = 0; s < E; )
            if ((u = b[s++]) < 128)
              T[f++] = u;
            else if (4 < (w = p[u]))
              T[f++] = 65533, s += w - 1;
            else {
              for (u &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < E; )
                u = u << 6 | 63 & b[s++], w--;
              1 < w ? T[f++] = 65533 : u < 65536 ? T[f++] = u : (u -= 65536, T[f++] = 55296 | u >> 10 & 1023, T[f++] = 56320 | 1023 & u);
            }
          return T.length !== f && (T.subarray ? T = T.subarray(0, f) : T.length = f), r.applyFromCharCode(T);
        }(l = r.transformTo(a.uint8array ? "uint8array" : "array", l));
      }, r.inherits(g, o), g.prototype.processChunk = function(l) {
        var b = r.transformTo(a.uint8array ? "uint8array" : "array", l.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var s = b;
            (b = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), b.set(s, this.leftOver.length);
          } else
            b = this.leftOver.concat(b);
          this.leftOver = null;
        }
        var f = function(w, E) {
          var T;
          for ((E = E || w.length) > w.length && (E = w.length), T = E - 1; 0 <= T && (192 & w[T]) == 128; )
            T--;
          return T < 0 || T === 0 ? E : T + p[w[T]] > E ? T : E;
        }(b), u = b;
        f !== b.length && (a.uint8array ? (u = b.subarray(0, f), this.leftOver = b.subarray(f, b.length)) : (u = b.slice(0, f), this.leftOver = b.slice(f, b.length))), this.push({ data: c.utf8decode(u), meta: l.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = g, r.inherits(v, o), v.prototype.processChunk = function(l) {
        this.push({ data: c.utf8encode(l.data), meta: l.meta });
      }, c.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, h, c) {
      var r = e("./support"), a = e("./base64"), n = e("./nodejsUtils"), o = e("./external");
      function p(s) {
        return s;
      }
      function m(s, f) {
        for (var u = 0; u < s.length; ++u)
          f[u] = 255 & s.charCodeAt(u);
        return f;
      }
      e("setimmediate"), c.newBlob = function(s, f) {
        c.checkSupport("blob");
        try {
          return new Blob([s], { type: f });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(s), u.getBlob(f);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(s, f, u) {
        var w = [], E = 0, T = s.length;
        if (T <= u)
          return String.fromCharCode.apply(null, s);
        for (; E < T; )
          f === "array" || f === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(E, Math.min(E + u, T)))) : w.push(String.fromCharCode.apply(null, s.subarray(E, Math.min(E + u, T)))), E += u;
        return w.join("");
      }, stringifyByChar: function(s) {
        for (var f = "", u = 0; u < s.length; u++)
          f += String.fromCharCode(s[u]);
        return f;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return r.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return r.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function v(s) {
        var f = 65536, u = c.getTypeOf(s), w = !0;
        if (u === "uint8array" ? w = g.applyCanBeUsed.uint8array : u === "nodebuffer" && (w = g.applyCanBeUsed.nodebuffer), w)
          for (; 1 < f; )
            try {
              return g.stringifyByChunk(s, u, f);
            } catch {
              f = Math.floor(f / 2);
            }
        return g.stringifyByChar(s);
      }
      function l(s, f) {
        for (var u = 0; u < s.length; u++)
          f[u] = s[u];
        return f;
      }
      c.applyFromCharCode = v;
      var b = {};
      b.string = { string: p, array: function(s) {
        return m(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return b.string.uint8array(s).buffer;
      }, uint8array: function(s) {
        return m(s, new Uint8Array(s.length));
      }, nodebuffer: function(s) {
        return m(s, n.allocBuffer(s.length));
      } }, b.array = { string: v, array: p, arraybuffer: function(s) {
        return new Uint8Array(s).buffer;
      }, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, b.arraybuffer = { string: function(s) {
        return v(new Uint8Array(s));
      }, array: function(s) {
        return l(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: p, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(new Uint8Array(s));
      } }, b.uint8array = { string: v, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: p, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, b.nodebuffer = { string: v, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return b.nodebuffer.uint8array(s).buffer;
      }, uint8array: function(s) {
        return l(s, new Uint8Array(s.length));
      }, nodebuffer: p }, c.transformTo = function(s, f) {
        if (f = f || "", !s)
          return f;
        c.checkSupport(s);
        var u = c.getTypeOf(f);
        return b[u][s](f);
      }, c.resolve = function(s) {
        for (var f = s.split("/"), u = [], w = 0; w < f.length; w++) {
          var E = f[w];
          E === "." || E === "" && w !== 0 && w !== f.length - 1 || (E === ".." ? u.pop() : u.push(E));
        }
        return u.join("/");
      }, c.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(s) {
        var f, u, w = "";
        for (u = 0; u < (s || "").length; u++)
          w += "\\x" + ((f = s.charCodeAt(u)) < 16 ? "0" : "") + f.toString(16).toUpperCase();
        return w;
      }, c.delay = function(s, f, u) {
        setImmediate(function() {
          s.apply(u || null, f || []);
        });
      }, c.inherits = function(s, f) {
        function u() {
        }
        u.prototype = f.prototype, s.prototype = new u();
      }, c.extend = function() {
        var s, f, u = {};
        for (s = 0; s < arguments.length; s++)
          for (f in arguments[s])
            Object.prototype.hasOwnProperty.call(arguments[s], f) && u[f] === void 0 && (u[f] = arguments[s][f]);
        return u;
      }, c.prepareContent = function(s, f, u, w, E) {
        return o.Promise.resolve(f).then(function(T) {
          return r.blob && (T instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(O, z) {
            var Q = new FileReader();
            Q.onload = function(J) {
              O(J.target.result);
            }, Q.onerror = function(J) {
              z(J.target.error);
            }, Q.readAsArrayBuffer(T);
          }) : T;
        }).then(function(T) {
          var O = c.getTypeOf(T);
          return O ? (O === "arraybuffer" ? T = c.transformTo("uint8array", T) : O === "string" && (E ? T = a.decode(T) : u && w !== !0 && (T = function(z) {
            return m(z, r.uint8array ? new Uint8Array(z.length) : new Array(z.length));
          }(T))), T) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./signature"), o = e("./zipEntry"), p = e("./support");
      function m(g) {
        this.files = [], this.loadOptions = g;
      }
      m.prototype = { checkSignature: function(g) {
        if (!this.reader.readAndCheckSignature(g)) {
          this.reader.index -= 4;
          var v = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(v) + ", expected " + a.pretty(g) + ")");
        }
      }, isSignature: function(g, v) {
        var l = this.reader.index;
        this.reader.setIndex(g);
        var b = this.reader.readString(4) === v;
        return this.reader.setIndex(l), b;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var g = this.reader.readData(this.zipCommentLength), v = p.uint8array ? "uint8array" : "array", l = a.transformTo(v, g);
        this.zipComment = this.loadOptions.decodeFileName(l);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var g, v, l, b = this.zip64EndOfCentralSize - 44; 0 < b; )
          g = this.reader.readInt(2), v = this.reader.readInt(4), l = this.reader.readData(v), this.zip64ExtensibleData[g] = { id: g, length: v, value: l };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var g, v;
        for (g = 0; g < this.files.length; g++)
          v = this.files[g], this.reader.setIndex(v.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), v.readLocalPart(this.reader), v.handleUTF8(), v.processAttributes();
      }, readCentralDir: function() {
        var g;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (g = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(g);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var g = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (g < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(g);
        var v = g;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (g = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(g), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var l = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (l += 20, l += 12 + this.zip64EndOfCentralSize);
        var b = v - l;
        if (0 < b)
          this.isSignature(v, n.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
        else if (b < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = r(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./compressedObject"), o = e("./crc32"), p = e("./utf8"), m = e("./compressions"), g = e("./support");
      function v(l, b) {
        this.options = l, this.loadOptions = b;
      }
      v.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(l) {
        var b, s;
        if (l.skip(22), this.fileNameLength = l.readInt(2), s = l.readInt(2), this.fileName = l.readData(this.fileNameLength), l.skip(s), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((b = function(f) {
          for (var u in m)
            if (Object.prototype.hasOwnProperty.call(m, u) && m[u].magic === f)
              return m[u];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, b, l.readData(this.compressedSize));
      }, readCentralPart: function(l) {
        this.versionMadeBy = l.readInt(2), l.skip(2), this.bitFlag = l.readInt(2), this.compressionMethod = l.readString(2), this.date = l.readDate(), this.crc32 = l.readInt(4), this.compressedSize = l.readInt(4), this.uncompressedSize = l.readInt(4);
        var b = l.readInt(2);
        if (this.extraFieldsLength = l.readInt(2), this.fileCommentLength = l.readInt(2), this.diskNumberStart = l.readInt(2), this.internalFileAttributes = l.readInt(2), this.externalFileAttributes = l.readInt(4), this.localHeaderOffset = l.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        l.skip(b), this.readExtraFields(l), this.parseZIP64ExtraField(l), this.fileComment = l.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var l = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), l == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), l == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var l = r(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = l.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = l.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = l.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = l.readInt(4));
        }
      }, readExtraFields: function(l) {
        var b, s, f, u = l.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); l.index + 4 < u; )
          b = l.readInt(2), s = l.readInt(2), f = l.readData(s), this.extraFields[b] = { id: b, length: s, value: f };
        l.setIndex(u);
      }, handleUTF8: function() {
        var l = g.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
        else {
          var b = this.findExtraFieldUnicodePath();
          if (b !== null)
            this.fileNameStr = b;
          else {
            var s = a.transformTo(l, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(s);
          }
          var f = this.findExtraFieldUnicodeComment();
          if (f !== null)
            this.fileCommentStr = f;
          else {
            var u = a.transformTo(l, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var l = this.extraFields[28789];
        if (l) {
          var b = r(l.value);
          return b.readInt(1) !== 1 || o(this.fileName) !== b.readInt(4) ? null : p.utf8decode(b.readData(l.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var l = this.extraFields[25461];
        if (l) {
          var b = r(l.value);
          return b.readInt(1) !== 1 || o(this.fileComment) !== b.readInt(4) ? null : p.utf8decode(b.readData(l.length - 5));
        }
        return null;
      } }, h.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, h, c) {
      function r(b, s, f) {
        this.name = b, this.dir = f.dir, this.date = f.date, this.comment = f.comment, this.unixPermissions = f.unixPermissions, this.dosPermissions = f.dosPermissions, this._data = s, this._dataBinary = f.binary, this.options = { compression: f.compression, compressionOptions: f.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), o = e("./utf8"), p = e("./compressedObject"), m = e("./stream/GenericWorker");
      r.prototype = { internalStream: function(b) {
        var s = null, f = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var u = (f = b.toLowerCase()) === "string" || f === "text";
          f !== "binarystring" && f !== "text" || (f = "string"), s = this._decompressWorker();
          var w = !this._dataBinary;
          w && !u && (s = s.pipe(new o.Utf8EncodeWorker())), !w && u && (s = s.pipe(new o.Utf8DecodeWorker()));
        } catch (E) {
          (s = new m("error")).error(E);
        }
        return new a(s, f, "");
      }, async: function(b, s) {
        return this.internalStream(b).accumulate(s);
      }, nodeStream: function(b, s) {
        return this.internalStream(b || "nodebuffer").toNodejsStream(s);
      }, _compressWorker: function(b, s) {
        if (this._data instanceof p && this._data.compression.magic === b.magic)
          return this._data.getCompressedWorker();
        var f = this._decompressWorker();
        return this._dataBinary || (f = f.pipe(new o.Utf8EncodeWorker())), p.createWorkerFrom(f, b, s);
      }, _decompressWorker: function() {
        return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof m ? this._data : new n(this._data);
      } };
      for (var g = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], v = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, l = 0; l < g.length; l++)
        r.prototype[g[l]] = v;
      h.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, h, c) {
      (function(r) {
        var a, n, o = r.MutationObserver || r.WebKitMutationObserver;
        if (o) {
          var p = 0, m = new o(b), g = r.document.createTextNode("");
          m.observe(g, { characterData: !0 }), a = function() {
            g.data = p = ++p % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0)
          a = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
            var s = r.document.createElement("script");
            s.onreadystatechange = function() {
              b(), s.onreadystatechange = null, s.parentNode.removeChild(s), s = null;
            }, r.document.documentElement.appendChild(s);
          } : function() {
            setTimeout(b, 0);
          };
        else {
          var v = new r.MessageChannel();
          v.port1.onmessage = b, a = function() {
            v.port2.postMessage(0);
          };
        }
        var l = [];
        function b() {
          var s, f;
          n = !0;
          for (var u = l.length; u; ) {
            for (f = l, l = [], s = -1; ++s < u; )
              f[s]();
            u = l.length;
          }
          n = !1;
        }
        h.exports = function(s) {
          l.push(s) !== 1 || n || a();
        };
      }).call(this, typeof Bt < "u" ? Bt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, h, c) {
      var r = e("immediate");
      function a() {
      }
      var n = {}, o = ["REJECTED"], p = ["FULFILLED"], m = ["PENDING"];
      function g(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, u !== a && s(this, u);
      }
      function v(u, w, E) {
        this.promise = u, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function l(u, w, E) {
        r(function() {
          var T;
          try {
            T = w(E);
          } catch (O) {
            return n.reject(u, O);
          }
          T === u ? n.reject(u, new TypeError("Cannot resolve promise with itself")) : n.resolve(u, T);
        });
      }
      function b(u) {
        var w = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof w == "function")
          return function() {
            w.apply(u, arguments);
          };
      }
      function s(u, w) {
        var E = !1;
        function T(Q) {
          E || (E = !0, n.reject(u, Q));
        }
        function O(Q) {
          E || (E = !0, n.resolve(u, Q));
        }
        var z = f(function() {
          w(O, T);
        });
        z.status === "error" && T(z.value);
      }
      function f(u, w) {
        var E = {};
        try {
          E.value = u(w), E.status = "success";
        } catch (T) {
          E.status = "error", E.value = T;
        }
        return E;
      }
      (h.exports = g).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var w = this.constructor;
        return this.then(function(E) {
          return w.resolve(u()).then(function() {
            return E;
          });
        }, function(E) {
          return w.resolve(u()).then(function() {
            throw E;
          });
        });
      }, g.prototype.catch = function(u) {
        return this.then(null, u);
      }, g.prototype.then = function(u, w) {
        if (typeof u != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var E = new this.constructor(a);
        return this.state !== m ? l(E, this.state === p ? u : w, this.outcome) : this.queue.push(new v(E, u, w)), E;
      }, v.prototype.callFulfilled = function(u) {
        n.resolve(this.promise, u);
      }, v.prototype.otherCallFulfilled = function(u) {
        l(this.promise, this.onFulfilled, u);
      }, v.prototype.callRejected = function(u) {
        n.reject(this.promise, u);
      }, v.prototype.otherCallRejected = function(u) {
        l(this.promise, this.onRejected, u);
      }, n.resolve = function(u, w) {
        var E = f(b, w);
        if (E.status === "error")
          return n.reject(u, E.value);
        var T = E.value;
        if (T)
          s(u, T);
        else {
          u.state = p, u.outcome = w;
          for (var O = -1, z = u.queue.length; ++O < z; )
            u.queue[O].callFulfilled(w);
        }
        return u;
      }, n.reject = function(u, w) {
        u.state = o, u.outcome = w;
        for (var E = -1, T = u.queue.length; ++E < T; )
          u.queue[E].callRejected(w);
        return u;
      }, g.resolve = function(u) {
        return u instanceof this ? u : n.resolve(new this(a), u);
      }, g.reject = function(u) {
        var w = new this(a);
        return n.reject(w, u);
      }, g.all = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, T = !1;
        if (!E)
          return this.resolve([]);
        for (var O = new Array(E), z = 0, Q = -1, J = new this(a); ++Q < E; )
          D(u[Q], Q);
        return J;
        function D(X, rt) {
          w.resolve(X).then(function(k) {
            O[rt] = k, ++z !== E || T || (T = !0, n.resolve(J, O));
          }, function(k) {
            T || (T = !0, n.reject(J, k));
          });
        }
      }, g.race = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, T = !1;
        if (!E)
          return this.resolve([]);
        for (var O = -1, z = new this(a); ++O < E; )
          Q = u[O], w.resolve(Q).then(function(J) {
            T || (T = !0, n.resolve(z, J));
          }, function(J) {
            T || (T = !0, n.reject(z, J));
          });
        var Q;
        return z;
      };
    }, { immediate: 36 }], 38: [function(e, h, c) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), h.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, h, c) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, g = 0, v = -1, l = 0, b = 8;
      function s(u) {
        if (!(this instanceof s))
          return new s(u);
        this.options = a.assign({ level: v, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, u || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var E = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (E !== g)
          throw new Error(o[E]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var T;
          if (T = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (E = r.deflateSetDictionary(this.strm, T)) !== g)
            throw new Error(o[E]);
          this._dict_set = !0;
        }
      }
      function f(u, w) {
        var E = new s(w);
        if (E.push(u, !0), E.err)
          throw E.msg || o[E.err];
        return E.result;
      }
      s.prototype.push = function(u, w) {
        var E, T, O = this.strm, z = this.options.chunkSize;
        if (this.ended)
          return !1;
        T = w === ~~w ? w : w === !0 ? 4 : 0, typeof u == "string" ? O.input = n.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? O.input = new Uint8Array(u) : O.input = u, O.next_in = 0, O.avail_in = O.input.length;
        do {
          if (O.avail_out === 0 && (O.output = new a.Buf8(z), O.next_out = 0, O.avail_out = z), (E = r.deflate(O, T)) !== 1 && E !== g)
            return this.onEnd(E), !(this.ended = !0);
          O.avail_out !== 0 && (O.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(O.output, O.next_out))) : this.onData(a.shrinkBuf(O.output, O.next_out)));
        } while ((0 < O.avail_in || O.avail_out === 0) && E !== 1);
        return T === 4 ? (E = r.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === g) : T !== 2 || (this.onEnd(g), !(O.avail_out = 0));
      }, s.prototype.onData = function(u) {
        this.chunks.push(u);
      }, s.prototype.onEnd = function(u) {
        u === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = s, c.deflate = f, c.deflateRaw = function(u, w) {
        return (w = w || {}).raw = !0, f(u, w);
      }, c.gzip = function(u, w) {
        return (w = w || {}).gzip = !0, f(u, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, h, c) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), g = e("./zlib/gzheader"), v = Object.prototype.toString;
      function l(s) {
        if (!(this instanceof l))
          return new l(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var f = this.options;
        f.raw && 0 <= f.windowBits && f.windowBits < 16 && (f.windowBits = -f.windowBits, f.windowBits === 0 && (f.windowBits = -15)), !(0 <= f.windowBits && f.windowBits < 16) || s && s.windowBits || (f.windowBits += 32), 15 < f.windowBits && f.windowBits < 48 && !(15 & f.windowBits) && (f.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var u = r.inflateInit2(this.strm, f.windowBits);
        if (u !== o.Z_OK)
          throw new Error(p[u]);
        this.header = new g(), r.inflateGetHeader(this.strm, this.header);
      }
      function b(s, f) {
        var u = new l(f);
        if (u.push(s, !0), u.err)
          throw u.msg || p[u.err];
        return u.result;
      }
      l.prototype.push = function(s, f) {
        var u, w, E, T, O, z, Q = this.strm, J = this.options.chunkSize, D = this.options.dictionary, X = !1;
        if (this.ended)
          return !1;
        w = f === ~~f ? f : f === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? Q.input = n.binstring2buf(s) : v.call(s) === "[object ArrayBuffer]" ? Q.input = new Uint8Array(s) : Q.input = s, Q.next_in = 0, Q.avail_in = Q.input.length;
        do {
          if (Q.avail_out === 0 && (Q.output = new a.Buf8(J), Q.next_out = 0, Q.avail_out = J), (u = r.inflate(Q, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && D && (z = typeof D == "string" ? n.string2buf(D) : v.call(D) === "[object ArrayBuffer]" ? new Uint8Array(D) : D, u = r.inflateSetDictionary(this.strm, z)), u === o.Z_BUF_ERROR && X === !0 && (u = o.Z_OK, X = !1), u !== o.Z_STREAM_END && u !== o.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          Q.next_out && (Q.avail_out !== 0 && u !== o.Z_STREAM_END && (Q.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = n.utf8border(Q.output, Q.next_out), T = Q.next_out - E, O = n.buf2string(Q.output, E), Q.next_out = T, Q.avail_out = J - T, T && a.arraySet(Q.output, Q.output, E, T, 0), this.onData(O)) : this.onData(a.shrinkBuf(Q.output, Q.next_out)))), Q.avail_in === 0 && Q.avail_out === 0 && (X = !0);
        } while ((0 < Q.avail_in || Q.avail_out === 0) && u !== o.Z_STREAM_END);
        return u === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (u = r.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(Q.avail_out = 0));
      }, l.prototype.onData = function(s) {
        this.chunks.push(s);
      }, l.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, c.Inflate = l, c.inflate = b, c.inflateRaw = function(s, f) {
        return (f = f || {}).raw = !0, b(s, f);
      }, c.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, h, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(o) {
        for (var p = Array.prototype.slice.call(arguments, 1); p.length; ) {
          var m = p.shift();
          if (m) {
            if (typeof m != "object")
              throw new TypeError(m + "must be non-object");
            for (var g in m)
              m.hasOwnProperty(g) && (o[g] = m[g]);
          }
        }
        return o;
      }, c.shrinkBuf = function(o, p) {
        return o.length === p ? o : o.subarray ? o.subarray(0, p) : (o.length = p, o);
      };
      var a = { arraySet: function(o, p, m, g, v) {
        if (p.subarray && o.subarray)
          o.set(p.subarray(m, m + g), v);
        else
          for (var l = 0; l < g; l++)
            o[v + l] = p[m + l];
      }, flattenChunks: function(o) {
        var p, m, g, v, l, b;
        for (p = g = 0, m = o.length; p < m; p++)
          g += o[p].length;
        for (b = new Uint8Array(g), p = v = 0, m = o.length; p < m; p++)
          l = o[p], b.set(l, v), v += l.length;
        return b;
      } }, n = { arraySet: function(o, p, m, g, v) {
        for (var l = 0; l < g; l++)
          o[v + l] = p[m + l];
      }, flattenChunks: function(o) {
        return [].concat.apply([], o);
      } };
      c.setTyped = function(o) {
        o ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, n));
      }, c.setTyped(r);
    }, {}], 42: [function(e, h, c) {
      var r = e("./common"), a = !0, n = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        n = !1;
      }
      for (var o = new r.Buf8(256), p = 0; p < 256; p++)
        o[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
      function m(g, v) {
        if (v < 65537 && (g.subarray && n || !g.subarray && a))
          return String.fromCharCode.apply(null, r.shrinkBuf(g, v));
        for (var l = "", b = 0; b < v; b++)
          l += String.fromCharCode(g[b]);
        return l;
      }
      o[254] = o[254] = 1, c.string2buf = function(g) {
        var v, l, b, s, f, u = g.length, w = 0;
        for (s = 0; s < u; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), w += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (v = new r.Buf8(w), s = f = 0; f < w; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), l < 128 ? v[f++] = l : (l < 2048 ? v[f++] = 192 | l >>> 6 : (l < 65536 ? v[f++] = 224 | l >>> 12 : (v[f++] = 240 | l >>> 18, v[f++] = 128 | l >>> 12 & 63), v[f++] = 128 | l >>> 6 & 63), v[f++] = 128 | 63 & l);
        return v;
      }, c.buf2binstring = function(g) {
        return m(g, g.length);
      }, c.binstring2buf = function(g) {
        for (var v = new r.Buf8(g.length), l = 0, b = v.length; l < b; l++)
          v[l] = g.charCodeAt(l);
        return v;
      }, c.buf2string = function(g, v) {
        var l, b, s, f, u = v || g.length, w = new Array(2 * u);
        for (l = b = 0; l < u; )
          if ((s = g[l++]) < 128)
            w[b++] = s;
          else if (4 < (f = o[s]))
            w[b++] = 65533, l += f - 1;
          else {
            for (s &= f === 2 ? 31 : f === 3 ? 15 : 7; 1 < f && l < u; )
              s = s << 6 | 63 & g[l++], f--;
            1 < f ? w[b++] = 65533 : s < 65536 ? w[b++] = s : (s -= 65536, w[b++] = 55296 | s >> 10 & 1023, w[b++] = 56320 | 1023 & s);
          }
        return m(w, b);
      }, c.utf8border = function(g, v) {
        var l;
        for ((v = v || g.length) > g.length && (v = g.length), l = v - 1; 0 <= l && (192 & g[l]) == 128; )
          l--;
        return l < 0 || l === 0 ? v : l + o[g[l]] > v ? l : v;
      };
    }, { "./common": 41 }], 43: [function(e, h, c) {
      h.exports = function(r, a, n, o) {
        for (var p = 65535 & r | 0, m = r >>> 16 & 65535 | 0, g = 0; n !== 0; ) {
          for (n -= g = 2e3 < n ? 2e3 : n; m = m + (p = p + a[o++] | 0) | 0, --g; )
            ;
          p %= 65521, m %= 65521;
        }
        return p | m << 16 | 0;
      };
    }, {}], 44: [function(e, h, c) {
      h.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, h, c) {
      var r = function() {
        for (var a, n = [], o = 0; o < 256; o++) {
          a = o;
          for (var p = 0; p < 8; p++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          n[o] = a;
        }
        return n;
      }();
      h.exports = function(a, n, o, p) {
        var m = r, g = p + o;
        a ^= -1;
        for (var v = p; v < g; v++)
          a = a >>> 8 ^ m[255 & (a ^ n[v])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, h, c) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), g = 0, v = 4, l = 0, b = -2, s = -1, f = 4, u = 2, w = 8, E = 9, T = 286, O = 30, z = 19, Q = 2 * T + 1, J = 15, D = 3, X = 258, rt = X + D + 1, k = 42, N = 113, i = 1, L = 2, it = 3, C = 4;
      function V(t, U) {
        return t.msg = m[U], U;
      }
      function F(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function Z(t) {
        for (var U = t.length; 0 <= --U; )
          t[U] = 0;
      }
      function x(t) {
        var U = t.state, _ = U.pending;
        _ > t.avail_out && (_ = t.avail_out), _ !== 0 && (a.arraySet(t.output, U.pending_buf, U.pending_out, _, t.next_out), t.next_out += _, U.pending_out += _, t.total_out += _, t.avail_out -= _, U.pending -= _, U.pending === 0 && (U.pending_out = 0));
      }
      function I(t, U) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, U), t.block_start = t.strstart, x(t.strm);
      }
      function q(t, U) {
        t.pending_buf[t.pending++] = U;
      }
      function P(t, U) {
        t.pending_buf[t.pending++] = U >>> 8 & 255, t.pending_buf[t.pending++] = 255 & U;
      }
      function H(t, U) {
        var _, y, A = t.max_chain_length, S = t.strstart, j = t.prev_length, G = t.nice_match, R = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, W = t.window, K = t.w_mask, M = t.prev, tt = t.strstart + X, lt = W[S + j - 1], at = W[S + j];
        t.prev_length >= t.good_match && (A >>= 2), G > t.lookahead && (G = t.lookahead);
        do
          if (W[(_ = U) + j] === at && W[_ + j - 1] === lt && W[_] === W[S] && W[++_] === W[S + 1]) {
            S += 2, _++;
            do
              ;
            while (W[++S] === W[++_] && W[++S] === W[++_] && W[++S] === W[++_] && W[++S] === W[++_] && W[++S] === W[++_] && W[++S] === W[++_] && W[++S] === W[++_] && W[++S] === W[++_] && S < tt);
            if (y = X - (tt - S), S = tt - X, j < y) {
              if (t.match_start = U, G <= (j = y))
                break;
              lt = W[S + j - 1], at = W[S + j];
            }
          }
        while ((U = M[U & K]) > R && --A != 0);
        return j <= t.lookahead ? j : t.lookahead;
      }
      function ct(t) {
        var U, _, y, A, S, j, G, R, W, K, M = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= M + (M - rt)) {
            for (a.arraySet(t.window, t.window, M, M, 0), t.match_start -= M, t.strstart -= M, t.block_start -= M, U = _ = t.hash_size; y = t.head[--U], t.head[U] = M <= y ? y - M : 0, --_; )
              ;
            for (U = _ = M; y = t.prev[--U], t.prev[U] = M <= y ? y - M : 0, --_; )
              ;
            A += M;
          }
          if (t.strm.avail_in === 0)
            break;
          if (j = t.strm, G = t.window, R = t.strstart + t.lookahead, W = A, K = void 0, K = j.avail_in, W < K && (K = W), _ = K === 0 ? 0 : (j.avail_in -= K, a.arraySet(G, j.input, j.next_in, K, R), j.state.wrap === 1 ? j.adler = o(j.adler, G, K, R) : j.state.wrap === 2 && (j.adler = p(j.adler, G, K, R)), j.next_in += K, j.total_in += K, K), t.lookahead += _, t.lookahead + t.insert >= D)
            for (S = t.strstart - t.insert, t.ins_h = t.window[S], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[S + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[S + D - 1]) & t.hash_mask, t.prev[S & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = S, S++, t.insert--, !(t.lookahead + t.insert < D)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function pt(t, U) {
        for (var _, y; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && U === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (_ = 0, t.lookahead >= D && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, _ = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), _ !== 0 && t.strstart - _ <= t.w_size - rt && (t.match_length = H(t, _)), t.match_length >= D)
            if (y = n._tr_tally(t, t.strstart - t.match_start, t.match_length - D), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= D) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, _ = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            y = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (y && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < D - 1 ? t.strstart : D - 1, U === v ? (I(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : L;
      }
      function ot(t, U) {
        for (var _, y, A; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && U === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (_ = 0, t.lookahead >= D && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, _ = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = D - 1, _ !== 0 && t.prev_length < t.max_lazy_match && t.strstart - _ <= t.w_size - rt && (t.match_length = H(t, _), t.match_length <= 5 && (t.strategy === 1 || t.match_length === D && 4096 < t.strstart - t.match_start) && (t.match_length = D - 1)), t.prev_length >= D && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - D, y = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - D), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, _ = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = D - 1, t.strstart++, y && (I(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((y = n._tr_tally(t, 0, t.window[t.strstart - 1])) && I(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (y = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < D - 1 ? t.strstart : D - 1, U === v ? (I(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : L;
      }
      function st(t, U, _, y, A) {
        this.good_length = t, this.max_lazy = U, this.nice_length = _, this.max_chain = y, this.func = A;
      }
      function mt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * Q), this.dyn_dtree = new a.Buf16(2 * (2 * O + 1)), this.bl_tree = new a.Buf16(2 * (2 * z + 1)), Z(this.dyn_ltree), Z(this.dyn_dtree), Z(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(J + 1), this.heap = new a.Buf16(2 * T + 1), Z(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * T + 1), Z(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ht(t) {
        var U;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (U = t.state).pending = 0, U.pending_out = 0, U.wrap < 0 && (U.wrap = -U.wrap), U.status = U.wrap ? k : N, t.adler = U.wrap === 2 ? 0 : 1, U.last_flush = g, n._tr_init(U), l) : V(t, b);
      }
      function dt(t) {
        var U = ht(t);
        return U === l && function(_) {
          _.window_size = 2 * _.w_size, Z(_.head), _.max_lazy_match = r[_.level].max_lazy, _.good_match = r[_.level].good_length, _.nice_match = r[_.level].nice_length, _.max_chain_length = r[_.level].max_chain, _.strstart = 0, _.block_start = 0, _.lookahead = 0, _.insert = 0, _.match_length = _.prev_length = D - 1, _.match_available = 0, _.ins_h = 0;
        }(t.state), U;
      }
      function Et(t, U, _, y, A, S) {
        if (!t)
          return b;
        var j = 1;
        if (U === s && (U = 6), y < 0 ? (j = 0, y = -y) : 15 < y && (j = 2, y -= 16), A < 1 || E < A || _ !== w || y < 8 || 15 < y || U < 0 || 9 < U || S < 0 || f < S)
          return V(t, b);
        y === 8 && (y = 9);
        var G = new mt();
        return (t.state = G).strm = t, G.wrap = j, G.gzhead = null, G.w_bits = y, G.w_size = 1 << G.w_bits, G.w_mask = G.w_size - 1, G.hash_bits = A + 7, G.hash_size = 1 << G.hash_bits, G.hash_mask = G.hash_size - 1, G.hash_shift = ~~((G.hash_bits + D - 1) / D), G.window = new a.Buf8(2 * G.w_size), G.head = new a.Buf16(G.hash_size), G.prev = new a.Buf16(G.w_size), G.lit_bufsize = 1 << A + 6, G.pending_buf_size = 4 * G.lit_bufsize, G.pending_buf = new a.Buf8(G.pending_buf_size), G.d_buf = 1 * G.lit_bufsize, G.l_buf = 3 * G.lit_bufsize, G.level = U, G.strategy = S, G.method = _, dt(t);
      }
      r = [new st(0, 0, 0, 0, function(t, U) {
        var _ = 65535;
        for (_ > t.pending_buf_size - 5 && (_ = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ct(t), t.lookahead === 0 && U === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var y = t.block_start + _;
          if ((t.strstart === 0 || t.strstart >= y) && (t.lookahead = t.strstart - y, t.strstart = y, I(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, U === v ? (I(t, !0), t.strm.avail_out === 0 ? it : C) : (t.strstart > t.block_start && (I(t, !1), t.strm.avail_out), i);
      }), new st(4, 4, 8, 4, pt), new st(4, 5, 16, 8, pt), new st(4, 6, 32, 32, pt), new st(4, 4, 16, 16, ot), new st(8, 16, 32, 32, ot), new st(8, 16, 128, 128, ot), new st(8, 32, 128, 256, ot), new st(32, 128, 258, 1024, ot), new st(32, 258, 258, 4096, ot)], c.deflateInit = function(t, U) {
        return Et(t, U, w, 15, 8, 0);
      }, c.deflateInit2 = Et, c.deflateReset = dt, c.deflateResetKeep = ht, c.deflateSetHeader = function(t, U) {
        return t && t.state ? t.state.wrap !== 2 ? b : (t.state.gzhead = U, l) : b;
      }, c.deflate = function(t, U) {
        var _, y, A, S;
        if (!t || !t.state || 5 < U || U < 0)
          return t ? V(t, b) : b;
        if (y = t.state, !t.output || !t.input && t.avail_in !== 0 || y.status === 666 && U !== v)
          return V(t, t.avail_out === 0 ? -5 : b);
        if (y.strm = t, _ = y.last_flush, y.last_flush = U, y.status === k)
          if (y.wrap === 2)
            t.adler = 0, q(y, 31), q(y, 139), q(y, 8), y.gzhead ? (q(y, (y.gzhead.text ? 1 : 0) + (y.gzhead.hcrc ? 2 : 0) + (y.gzhead.extra ? 4 : 0) + (y.gzhead.name ? 8 : 0) + (y.gzhead.comment ? 16 : 0)), q(y, 255 & y.gzhead.time), q(y, y.gzhead.time >> 8 & 255), q(y, y.gzhead.time >> 16 & 255), q(y, y.gzhead.time >> 24 & 255), q(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), q(y, 255 & y.gzhead.os), y.gzhead.extra && y.gzhead.extra.length && (q(y, 255 & y.gzhead.extra.length), q(y, y.gzhead.extra.length >> 8 & 255)), y.gzhead.hcrc && (t.adler = p(t.adler, y.pending_buf, y.pending, 0)), y.gzindex = 0, y.status = 69) : (q(y, 0), q(y, 0), q(y, 0), q(y, 0), q(y, 0), q(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), q(y, 3), y.status = N);
          else {
            var j = w + (y.w_bits - 8 << 4) << 8;
            j |= (2 <= y.strategy || y.level < 2 ? 0 : y.level < 6 ? 1 : y.level === 6 ? 2 : 3) << 6, y.strstart !== 0 && (j |= 32), j += 31 - j % 31, y.status = N, P(y, j), y.strstart !== 0 && (P(y, t.adler >>> 16), P(y, 65535 & t.adler)), t.adler = 1;
          }
        if (y.status === 69)
          if (y.gzhead.extra) {
            for (A = y.pending; y.gzindex < (65535 & y.gzhead.extra.length) && (y.pending !== y.pending_buf_size || (y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), x(t), A = y.pending, y.pending !== y.pending_buf_size)); )
              q(y, 255 & y.gzhead.extra[y.gzindex]), y.gzindex++;
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), y.gzindex === y.gzhead.extra.length && (y.gzindex = 0, y.status = 73);
          } else
            y.status = 73;
        if (y.status === 73)
          if (y.gzhead.name) {
            A = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), x(t), A = y.pending, y.pending === y.pending_buf_size)) {
                S = 1;
                break;
              }
              S = y.gzindex < y.gzhead.name.length ? 255 & y.gzhead.name.charCodeAt(y.gzindex++) : 0, q(y, S);
            } while (S !== 0);
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), S === 0 && (y.gzindex = 0, y.status = 91);
          } else
            y.status = 91;
        if (y.status === 91)
          if (y.gzhead.comment) {
            A = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), x(t), A = y.pending, y.pending === y.pending_buf_size)) {
                S = 1;
                break;
              }
              S = y.gzindex < y.gzhead.comment.length ? 255 & y.gzhead.comment.charCodeAt(y.gzindex++) : 0, q(y, S);
            } while (S !== 0);
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), S === 0 && (y.status = 103);
          } else
            y.status = 103;
        if (y.status === 103 && (y.gzhead.hcrc ? (y.pending + 2 > y.pending_buf_size && x(t), y.pending + 2 <= y.pending_buf_size && (q(y, 255 & t.adler), q(y, t.adler >> 8 & 255), t.adler = 0, y.status = N)) : y.status = N), y.pending !== 0) {
          if (x(t), t.avail_out === 0)
            return y.last_flush = -1, l;
        } else if (t.avail_in === 0 && F(U) <= F(_) && U !== v)
          return V(t, -5);
        if (y.status === 666 && t.avail_in !== 0)
          return V(t, -5);
        if (t.avail_in !== 0 || y.lookahead !== 0 || U !== g && y.status !== 666) {
          var G = y.strategy === 2 ? function(R, W) {
            for (var K; ; ) {
              if (R.lookahead === 0 && (ct(R), R.lookahead === 0)) {
                if (W === g)
                  return i;
                break;
              }
              if (R.match_length = 0, K = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, K && (I(R, !1), R.strm.avail_out === 0))
                return i;
            }
            return R.insert = 0, W === v ? (I(R, !0), R.strm.avail_out === 0 ? it : C) : R.last_lit && (I(R, !1), R.strm.avail_out === 0) ? i : L;
          }(y, U) : y.strategy === 3 ? function(R, W) {
            for (var K, M, tt, lt, at = R.window; ; ) {
              if (R.lookahead <= X) {
                if (ct(R), R.lookahead <= X && W === g)
                  return i;
                if (R.lookahead === 0)
                  break;
              }
              if (R.match_length = 0, R.lookahead >= D && 0 < R.strstart && (M = at[tt = R.strstart - 1]) === at[++tt] && M === at[++tt] && M === at[++tt]) {
                lt = R.strstart + X;
                do
                  ;
                while (M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && tt < lt);
                R.match_length = X - (lt - tt), R.match_length > R.lookahead && (R.match_length = R.lookahead);
              }
              if (R.match_length >= D ? (K = n._tr_tally(R, 1, R.match_length - D), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : (K = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), K && (I(R, !1), R.strm.avail_out === 0))
                return i;
            }
            return R.insert = 0, W === v ? (I(R, !0), R.strm.avail_out === 0 ? it : C) : R.last_lit && (I(R, !1), R.strm.avail_out === 0) ? i : L;
          }(y, U) : r[y.level].func(y, U);
          if (G !== it && G !== C || (y.status = 666), G === i || G === it)
            return t.avail_out === 0 && (y.last_flush = -1), l;
          if (G === L && (U === 1 ? n._tr_align(y) : U !== 5 && (n._tr_stored_block(y, 0, 0, !1), U === 3 && (Z(y.head), y.lookahead === 0 && (y.strstart = 0, y.block_start = 0, y.insert = 0))), x(t), t.avail_out === 0))
            return y.last_flush = -1, l;
        }
        return U !== v ? l : y.wrap <= 0 ? 1 : (y.wrap === 2 ? (q(y, 255 & t.adler), q(y, t.adler >> 8 & 255), q(y, t.adler >> 16 & 255), q(y, t.adler >> 24 & 255), q(y, 255 & t.total_in), q(y, t.total_in >> 8 & 255), q(y, t.total_in >> 16 & 255), q(y, t.total_in >> 24 & 255)) : (P(y, t.adler >>> 16), P(y, 65535 & t.adler)), x(t), 0 < y.wrap && (y.wrap = -y.wrap), y.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var U;
        return t && t.state ? (U = t.state.status) !== k && U !== 69 && U !== 73 && U !== 91 && U !== 103 && U !== N && U !== 666 ? V(t, b) : (t.state = null, U === N ? V(t, -3) : l) : b;
      }, c.deflateSetDictionary = function(t, U) {
        var _, y, A, S, j, G, R, W, K = U.length;
        if (!t || !t.state || (S = (_ = t.state).wrap) === 2 || S === 1 && _.status !== k || _.lookahead)
          return b;
        for (S === 1 && (t.adler = o(t.adler, U, K, 0)), _.wrap = 0, K >= _.w_size && (S === 0 && (Z(_.head), _.strstart = 0, _.block_start = 0, _.insert = 0), W = new a.Buf8(_.w_size), a.arraySet(W, U, K - _.w_size, _.w_size, 0), U = W, K = _.w_size), j = t.avail_in, G = t.next_in, R = t.input, t.avail_in = K, t.next_in = 0, t.input = U, ct(_); _.lookahead >= D; ) {
          for (y = _.strstart, A = _.lookahead - (D - 1); _.ins_h = (_.ins_h << _.hash_shift ^ _.window[y + D - 1]) & _.hash_mask, _.prev[y & _.w_mask] = _.head[_.ins_h], _.head[_.ins_h] = y, y++, --A; )
            ;
          _.strstart = y, _.lookahead = D - 1, ct(_);
        }
        return _.strstart += _.lookahead, _.block_start = _.strstart, _.insert = _.lookahead, _.lookahead = 0, _.match_length = _.prev_length = D - 1, _.match_available = 0, t.next_in = G, t.input = R, t.avail_in = j, _.wrap = S, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, c) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, c) {
      h.exports = function(r, a) {
        var n, o, p, m, g, v, l, b, s, f, u, w, E, T, O, z, Q, J, D, X, rt, k, N, i, L;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, L = r.output, g = m - (a - r.avail_out), v = m + (r.avail_out - 257), l = n.dmax, b = n.wsize, s = n.whave, f = n.wnext, u = n.window, w = n.hold, E = n.bits, T = n.lencode, O = n.distcode, z = (1 << n.lenbits) - 1, Q = (1 << n.distbits) - 1;
        t:
          do {
            E < 15 && (w += i[o++] << E, E += 8, w += i[o++] << E, E += 8), J = T[w & z];
            e:
              for (; ; ) {
                if (w >>>= D = J >>> 24, E -= D, (D = J >>> 16 & 255) === 0)
                  L[m++] = 65535 & J;
                else {
                  if (!(16 & D)) {
                    if (!(64 & D)) {
                      J = T[(65535 & J) + (w & (1 << D) - 1)];
                      continue e;
                    }
                    if (32 & D) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  X = 65535 & J, (D &= 15) && (E < D && (w += i[o++] << E, E += 8), X += w & (1 << D) - 1, w >>>= D, E -= D), E < 15 && (w += i[o++] << E, E += 8, w += i[o++] << E, E += 8), J = O[w & Q];
                  n:
                    for (; ; ) {
                      if (w >>>= D = J >>> 24, E -= D, !(16 & (D = J >>> 16 & 255))) {
                        if (!(64 & D)) {
                          J = O[(65535 & J) + (w & (1 << D) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & J, E < (D &= 15) && (w += i[o++] << E, (E += 8) < D && (w += i[o++] << E, E += 8)), l < (rt += w & (1 << D) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= D, E -= D, (D = m - g) < rt) {
                        if (s < (D = rt - D) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (N = u, (k = 0) === f) {
                          if (k += b - D, D < X) {
                            for (X -= D; L[m++] = u[k++], --D; )
                              ;
                            k = m - rt, N = L;
                          }
                        } else if (f < D) {
                          if (k += b + f - D, (D -= f) < X) {
                            for (X -= D; L[m++] = u[k++], --D; )
                              ;
                            if (k = 0, f < X) {
                              for (X -= D = f; L[m++] = u[k++], --D; )
                                ;
                              k = m - rt, N = L;
                            }
                          }
                        } else if (k += f - D, D < X) {
                          for (X -= D; L[m++] = u[k++], --D; )
                            ;
                          k = m - rt, N = L;
                        }
                        for (; 2 < X; )
                          L[m++] = N[k++], L[m++] = N[k++], L[m++] = N[k++], X -= 3;
                        X && (L[m++] = N[k++], 1 < X && (L[m++] = N[k++]));
                      } else {
                        for (k = m - rt; L[m++] = L[k++], L[m++] = L[k++], L[m++] = L[k++], 2 < (X -= 3); )
                          ;
                        X && (L[m++] = L[k++], 1 < X && (L[m++] = L[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < v);
        o -= X = E >> 3, w &= (1 << (E -= X << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < v ? v - m + 257 : 257 - (m - v), n.hold = w, n.bits = E;
      };
    }, {}], 49: [function(e, h, c) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, g = 2, v = 0, l = -2, b = 1, s = 852, f = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(k) {
        var N;
        return k && k.state ? (N = k.state, k.total_in = k.total_out = N.total = 0, k.msg = "", N.wrap && (k.adler = 1 & N.wrap), N.mode = b, N.last = 0, N.havedict = 0, N.dmax = 32768, N.head = null, N.hold = 0, N.bits = 0, N.lencode = N.lendyn = new r.Buf32(s), N.distcode = N.distdyn = new r.Buf32(f), N.sane = 1, N.back = -1, v) : l;
      }
      function T(k) {
        var N;
        return k && k.state ? ((N = k.state).wsize = 0, N.whave = 0, N.wnext = 0, E(k)) : l;
      }
      function O(k, N) {
        var i, L;
        return k && k.state ? (L = k.state, N < 0 ? (i = 0, N = -N) : (i = 1 + (N >> 4), N < 48 && (N &= 15)), N && (N < 8 || 15 < N) ? l : (L.window !== null && L.wbits !== N && (L.window = null), L.wrap = i, L.wbits = N, T(k))) : l;
      }
      function z(k, N) {
        var i, L;
        return k ? (L = new w(), (k.state = L).window = null, (i = O(k, N)) !== v && (k.state = null), i) : l;
      }
      var Q, J, D = !0;
      function X(k) {
        if (D) {
          var N;
          for (Q = new r.Buf32(512), J = new r.Buf32(32), N = 0; N < 144; )
            k.lens[N++] = 8;
          for (; N < 256; )
            k.lens[N++] = 9;
          for (; N < 280; )
            k.lens[N++] = 7;
          for (; N < 288; )
            k.lens[N++] = 8;
          for (p(m, k.lens, 0, 288, Q, 0, k.work, { bits: 9 }), N = 0; N < 32; )
            k.lens[N++] = 5;
          p(g, k.lens, 0, 32, J, 0, k.work, { bits: 5 }), D = !1;
        }
        k.lencode = Q, k.lenbits = 9, k.distcode = J, k.distbits = 5;
      }
      function rt(k, N, i, L) {
        var it, C = k.state;
        return C.window === null && (C.wsize = 1 << C.wbits, C.wnext = 0, C.whave = 0, C.window = new r.Buf8(C.wsize)), L >= C.wsize ? (r.arraySet(C.window, N, i - C.wsize, C.wsize, 0), C.wnext = 0, C.whave = C.wsize) : (L < (it = C.wsize - C.wnext) && (it = L), r.arraySet(C.window, N, i - L, it, C.wnext), (L -= it) ? (r.arraySet(C.window, N, i - L, L, 0), C.wnext = L, C.whave = C.wsize) : (C.wnext += it, C.wnext === C.wsize && (C.wnext = 0), C.whave < C.wsize && (C.whave += it))), 0;
      }
      c.inflateReset = T, c.inflateReset2 = O, c.inflateResetKeep = E, c.inflateInit = function(k) {
        return z(k, 15);
      }, c.inflateInit2 = z, c.inflate = function(k, N) {
        var i, L, it, C, V, F, Z, x, I, q, P, H, ct, pt, ot, st, mt, ht, dt, Et, t, U, _, y, A = 0, S = new r.Buf8(4), j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), V = k.next_out, it = k.output, Z = k.avail_out, C = k.next_in, L = k.input, F = k.avail_in, x = i.hold, I = i.bits, q = F, P = Z, U = v;
        t:
          for (; ; )
            switch (i.mode) {
              case b:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; I < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                if (2 & i.wrap && x === 35615) {
                  S[i.check = 0] = 255 & x, S[1] = x >>> 8 & 255, i.check = n(i.check, S, 2, 0), I = x = 0, i.mode = 2;
                  break;
                }
                if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & x) << 8) + (x >> 8)) % 31) {
                  k.msg = "incorrect header check", i.mode = 30;
                  break;
                }
                if ((15 & x) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (I -= 4, t = 8 + (15 & (x >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  k.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, k.adler = i.check = 1, i.mode = 512 & x ? 10 : 12, I = x = 0;
                break;
              case 2:
                for (; I < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                if (i.flags = x, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = x >> 8 & 1), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, i.check = n(i.check, S, 2, 0)), I = x = 0, i.mode = 3;
              case 3:
                for (; I < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                i.head && (i.head.time = x), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, S[2] = x >>> 16 & 255, S[3] = x >>> 24 & 255, i.check = n(i.check, S, 4, 0)), I = x = 0, i.mode = 4;
              case 4:
                for (; I < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                i.head && (i.head.xflags = 255 & x, i.head.os = x >> 8), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, i.check = n(i.check, S, 2, 0)), I = x = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; I < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  i.length = x, i.head && (i.head.extra_len = x), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, i.check = n(i.check, S, 2, 0)), I = x = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (F < (H = i.length) && (H = F), H && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, L, C, H, t)), 512 & i.flags && (i.check = n(i.check, L, H, C)), F -= H, C += H, i.length -= H), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (F === 0)
                    break t;
                  for (H = 0; t = L[C + H++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && H < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, L, H, C)), F -= H, C += H, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (F === 0)
                    break t;
                  for (H = 0; t = L[C + H++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && H < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, L, H, C)), F -= H, C += H, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; I < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  if (x !== (65535 & i.check)) {
                    k.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), k.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; I < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                k.adler = i.check = u(x), I = x = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = V, k.avail_out = Z, k.next_in = C, k.avail_in = F, i.hold = x, i.bits = I, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (N === 5 || N === 6)
                  break t;
              case 13:
                if (i.last) {
                  x >>>= 7 & I, I -= 7 & I, i.mode = 27;
                  break;
                }
                for (; I < 3; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                switch (i.last = 1 & x, I -= 1, 3 & (x >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (X(i), i.mode = 20, N !== 6)
                      break;
                    x >>>= 2, I -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", i.mode = 30;
                }
                x >>>= 2, I -= 2;
                break;
              case 14:
                for (x >>>= 7 & I, I -= 7 & I; I < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                if ((65535 & x) != (x >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & x, I = x = 0, i.mode = 15, N === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (H = i.length) {
                  if (F < H && (H = F), Z < H && (H = Z), H === 0)
                    break t;
                  r.arraySet(it, L, C, H, V), F -= H, C += H, Z -= H, V += H, i.length -= H;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; I < 14; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                if (i.nlen = 257 + (31 & x), x >>>= 5, I -= 5, i.ndist = 1 + (31 & x), x >>>= 5, I -= 5, i.ncode = 4 + (15 & x), x >>>= 4, I -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; I < 3; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  i.lens[j[i.have++]] = 7 & x, x >>>= 3, I -= 3;
                }
                for (; i.have < 19; )
                  i.lens[j[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, _ = { bits: i.lenbits }, U = p(0, i.lens, 0, 19, i.lencode, 0, i.work, _), i.lenbits = _.bits, U) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; st = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((ot = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  if (mt < 16)
                    x >>>= ot, I -= ot, i.lens[i.have++] = mt;
                  else {
                    if (mt === 16) {
                      for (y = ot + 2; I < y; ) {
                        if (F === 0)
                          break t;
                        F--, x += L[C++] << I, I += 8;
                      }
                      if (x >>>= ot, I -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], H = 3 + (3 & x), x >>>= 2, I -= 2;
                    } else if (mt === 17) {
                      for (y = ot + 3; I < y; ) {
                        if (F === 0)
                          break t;
                        F--, x += L[C++] << I, I += 8;
                      }
                      I -= ot, t = 0, H = 3 + (7 & (x >>>= ot)), x >>>= 3, I -= 3;
                    } else {
                      for (y = ot + 7; I < y; ) {
                        if (F === 0)
                          break t;
                        F--, x += L[C++] << I, I += 8;
                      }
                      I -= ot, t = 0, H = 11 + (127 & (x >>>= ot)), x >>>= 7, I -= 7;
                    }
                    if (i.have + H > i.nlen + i.ndist) {
                      k.msg = "invalid bit length repeat", i.mode = 30;
                      break;
                    }
                    for (; H--; )
                      i.lens[i.have++] = t;
                  }
                }
                if (i.mode === 30)
                  break;
                if (i.lens[256] === 0) {
                  k.msg = "invalid code -- missing end-of-block", i.mode = 30;
                  break;
                }
                if (i.lenbits = 9, _ = { bits: i.lenbits }, U = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, _), i.lenbits = _.bits, U) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, _ = { bits: i.distbits }, U = p(g, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, _), i.distbits = _.bits, U) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, N === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= F && 258 <= Z) {
                  k.next_out = V, k.avail_out = Z, k.next_in = C, k.avail_in = F, i.hold = x, i.bits = I, o(k, P), V = k.next_out, it = k.output, Z = k.avail_out, C = k.next_in, L = k.input, F = k.avail_in, x = i.hold, I = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; st = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                if (st && !(240 & st)) {
                  for (ht = ot, dt = st, Et = mt; st = (A = i.lencode[Et + ((x & (1 << ht + dt) - 1) >> ht)]) >>> 16 & 255, mt = 65535 & A, !(ht + (ot = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  x >>>= ht, I -= ht, i.back += ht;
                }
                if (x >>>= ot, I -= ot, i.back += ot, i.length = mt, st === 0) {
                  i.mode = 26;
                  break;
                }
                if (32 & st) {
                  i.back = -1, i.mode = 12;
                  break;
                }
                if (64 & st) {
                  k.msg = "invalid literal/length code", i.mode = 30;
                  break;
                }
                i.extra = 15 & st, i.mode = 22;
              case 22:
                if (i.extra) {
                  for (y = i.extra; I < y; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  i.length += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; st = (A = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (F === 0)
                    break t;
                  F--, x += L[C++] << I, I += 8;
                }
                if (!(240 & st)) {
                  for (ht = ot, dt = st, Et = mt; st = (A = i.distcode[Et + ((x & (1 << ht + dt) - 1) >> ht)]) >>> 16 & 255, mt = 65535 & A, !(ht + (ot = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  x >>>= ht, I -= ht, i.back += ht;
                }
                if (x >>>= ot, I -= ot, i.back += ot, 64 & st) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = mt, i.extra = 15 & st, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (y = i.extra; I < y; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  i.offset += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (Z === 0)
                  break t;
                if (H = P - Z, i.offset > H) {
                  if ((H = i.offset - H) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ct = H > i.wnext ? (H -= i.wnext, i.wsize - H) : i.wnext - H, H > i.length && (H = i.length), pt = i.window;
                } else
                  pt = it, ct = V - i.offset, H = i.length;
                for (Z < H && (H = Z), Z -= H, i.length -= H; it[V++] = pt[ct++], --H; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (Z === 0)
                  break t;
                it[V++] = i.length, Z--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; I < 32; ) {
                    if (F === 0)
                      break t;
                    F--, x |= L[C++] << I, I += 8;
                  }
                  if (P -= Z, k.total_out += P, i.total += P, P && (k.adler = i.check = i.flags ? n(i.check, it, P, V - P) : a(i.check, it, P, V - P)), P = Z, (i.flags ? x : u(x)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; I < 32; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[C++] << I, I += 8;
                  }
                  if (x !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 29;
              case 29:
                U = 1;
                break t;
              case 30:
                U = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = V, k.avail_out = Z, k.next_in = C, k.avail_in = F, i.hold = x, i.bits = I, (i.wsize || P !== k.avail_out && i.mode < 30 && (i.mode < 27 || N !== 4)) && rt(k, k.output, k.next_out, P - k.avail_out) ? (i.mode = 31, -4) : (q -= k.avail_in, P -= k.avail_out, k.total_in += q, k.total_out += P, i.total += P, i.wrap && P && (k.adler = i.check = i.flags ? n(i.check, it, P, k.next_out - P) : a(i.check, it, P, k.next_out - P)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (q == 0 && P === 0 || N === 4) && U === v && (U = -5), U);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var N = k.state;
        return N.window && (N.window = null), k.state = null, v;
      }, c.inflateGetHeader = function(k, N) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = N).done = !1, v) : l;
      }, c.inflateSetDictionary = function(k, N) {
        var i, L = N.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, N, L, 0) !== i.check ? -3 : rt(k, N, L, L) ? (i.mode = 31, -4) : (i.havedict = 1, v) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, c) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(m, g, v, l, b, s, f, u) {
        var w, E, T, O, z, Q, J, D, X, rt = u.bits, k = 0, N = 0, i = 0, L = 0, it = 0, C = 0, V = 0, F = 0, Z = 0, x = 0, I = null, q = 0, P = new r.Buf16(16), H = new r.Buf16(16), ct = null, pt = 0;
        for (k = 0; k <= 15; k++)
          P[k] = 0;
        for (N = 0; N < l; N++)
          P[g[v + N]]++;
        for (it = rt, L = 15; 1 <= L && P[L] === 0; L--)
          ;
        if (L < it && (it = L), L === 0)
          return b[s++] = 20971520, b[s++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < L && P[i] === 0; i++)
          ;
        for (it < i && (it = i), k = F = 1; k <= 15; k++)
          if (F <<= 1, (F -= P[k]) < 0)
            return -1;
        if (0 < F && (m === 0 || L !== 1))
          return -1;
        for (H[1] = 0, k = 1; k < 15; k++)
          H[k + 1] = H[k] + P[k];
        for (N = 0; N < l; N++)
          g[v + N] !== 0 && (f[H[g[v + N]]++] = N);
        if (Q = m === 0 ? (I = ct = f, 19) : m === 1 ? (I = a, q -= 257, ct = n, pt -= 257, 256) : (I = o, ct = p, -1), k = i, z = s, V = N = x = 0, T = -1, O = (Z = 1 << (C = it)) - 1, m === 1 && 852 < Z || m === 2 && 592 < Z)
          return 1;
        for (; ; ) {
          for (J = k - V, X = f[N] < Q ? (D = 0, f[N]) : f[N] > Q ? (D = ct[pt + f[N]], I[q + f[N]]) : (D = 96, 0), w = 1 << k - V, i = E = 1 << C; b[z + (x >> V) + (E -= w)] = J << 24 | D << 16 | X | 0, E !== 0; )
            ;
          for (w = 1 << k - 1; x & w; )
            w >>= 1;
          if (w !== 0 ? (x &= w - 1, x += w) : x = 0, N++, --P[k] == 0) {
            if (k === L)
              break;
            k = g[v + f[N]];
          }
          if (it < k && (x & O) !== T) {
            for (V === 0 && (V = it), z += i, F = 1 << (C = k - V); C + V < L && !((F -= P[C + V]) <= 0); )
              C++, F <<= 1;
            if (Z += 1 << C, m === 1 && 852 < Z || m === 2 && 592 < Z)
              return 1;
            b[T = x & O] = it << 24 | C << 16 | z - s | 0;
          }
        }
        return x !== 0 && (b[z + x] = k - V << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, c) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, c) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(A) {
        for (var S = A.length; 0 <= --S; )
          A[S] = 0;
      }
      var p = 0, m = 29, g = 256, v = g + 1 + m, l = 30, b = 19, s = 2 * v + 1, f = 15, u = 16, w = 7, E = 256, T = 16, O = 17, z = 18, Q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], X = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (v + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var N = new Array(512);
      o(N);
      var i = new Array(256);
      o(i);
      var L = new Array(m);
      o(L);
      var it, C, V, F = new Array(l);
      function Z(A, S, j, G, R) {
        this.static_tree = A, this.extra_bits = S, this.extra_base = j, this.elems = G, this.max_length = R, this.has_stree = A && A.length;
      }
      function x(A, S) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = S;
      }
      function I(A) {
        return A < 256 ? N[A] : N[256 + (A >>> 7)];
      }
      function q(A, S) {
        A.pending_buf[A.pending++] = 255 & S, A.pending_buf[A.pending++] = S >>> 8 & 255;
      }
      function P(A, S, j) {
        A.bi_valid > u - j ? (A.bi_buf |= S << A.bi_valid & 65535, q(A, A.bi_buf), A.bi_buf = S >> u - A.bi_valid, A.bi_valid += j - u) : (A.bi_buf |= S << A.bi_valid & 65535, A.bi_valid += j);
      }
      function H(A, S, j) {
        P(A, j[2 * S], j[2 * S + 1]);
      }
      function ct(A, S) {
        for (var j = 0; j |= 1 & A, A >>>= 1, j <<= 1, 0 < --S; )
          ;
        return j >>> 1;
      }
      function pt(A, S, j) {
        var G, R, W = new Array(f + 1), K = 0;
        for (G = 1; G <= f; G++)
          W[G] = K = K + j[G - 1] << 1;
        for (R = 0; R <= S; R++) {
          var M = A[2 * R + 1];
          M !== 0 && (A[2 * R] = ct(W[M]++, M));
        }
      }
      function ot(A) {
        var S;
        for (S = 0; S < v; S++)
          A.dyn_ltree[2 * S] = 0;
        for (S = 0; S < l; S++)
          A.dyn_dtree[2 * S] = 0;
        for (S = 0; S < b; S++)
          A.bl_tree[2 * S] = 0;
        A.dyn_ltree[2 * E] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function st(A) {
        8 < A.bi_valid ? q(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function mt(A, S, j, G) {
        var R = 2 * S, W = 2 * j;
        return A[R] < A[W] || A[R] === A[W] && G[S] <= G[j];
      }
      function ht(A, S, j) {
        for (var G = A.heap[j], R = j << 1; R <= A.heap_len && (R < A.heap_len && mt(S, A.heap[R + 1], A.heap[R], A.depth) && R++, !mt(S, G, A.heap[R], A.depth)); )
          A.heap[j] = A.heap[R], j = R, R <<= 1;
        A.heap[j] = G;
      }
      function dt(A, S, j) {
        var G, R, W, K, M = 0;
        if (A.last_lit !== 0)
          for (; G = A.pending_buf[A.d_buf + 2 * M] << 8 | A.pending_buf[A.d_buf + 2 * M + 1], R = A.pending_buf[A.l_buf + M], M++, G === 0 ? H(A, R, S) : (H(A, (W = i[R]) + g + 1, S), (K = Q[W]) !== 0 && P(A, R -= L[W], K), H(A, W = I(--G), j), (K = J[W]) !== 0 && P(A, G -= F[W], K)), M < A.last_lit; )
            ;
        H(A, E, S);
      }
      function Et(A, S) {
        var j, G, R, W = S.dyn_tree, K = S.stat_desc.static_tree, M = S.stat_desc.has_stree, tt = S.stat_desc.elems, lt = -1;
        for (A.heap_len = 0, A.heap_max = s, j = 0; j < tt; j++)
          W[2 * j] !== 0 ? (A.heap[++A.heap_len] = lt = j, A.depth[j] = 0) : W[2 * j + 1] = 0;
        for (; A.heap_len < 2; )
          W[2 * (R = A.heap[++A.heap_len] = lt < 2 ? ++lt : 0)] = 1, A.depth[R] = 0, A.opt_len--, M && (A.static_len -= K[2 * R + 1]);
        for (S.max_code = lt, j = A.heap_len >> 1; 1 <= j; j--)
          ht(A, W, j);
        for (R = tt; j = A.heap[1], A.heap[1] = A.heap[A.heap_len--], ht(A, W, 1), G = A.heap[1], A.heap[--A.heap_max] = j, A.heap[--A.heap_max] = G, W[2 * R] = W[2 * j] + W[2 * G], A.depth[R] = (A.depth[j] >= A.depth[G] ? A.depth[j] : A.depth[G]) + 1, W[2 * j + 1] = W[2 * G + 1] = R, A.heap[1] = R++, ht(A, W, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(at, ft) {
          var kt, St, xt, gt, et, bt, vt = ft.dyn_tree, At = ft.max_code, Ot = ft.stat_desc.static_tree, xe = ft.stat_desc.has_stree, Ce = ft.stat_desc.extra_bits, Pt = ft.stat_desc.extra_base, Vt = ft.stat_desc.max_length, Qt = 0;
          for (gt = 0; gt <= f; gt++)
            at.bl_count[gt] = 0;
          for (vt[2 * at.heap[at.heap_max] + 1] = 0, kt = at.heap_max + 1; kt < s; kt++)
            Vt < (gt = vt[2 * vt[2 * (St = at.heap[kt]) + 1] + 1] + 1) && (gt = Vt, Qt++), vt[2 * St + 1] = gt, At < St || (at.bl_count[gt]++, et = 0, Pt <= St && (et = Ce[St - Pt]), bt = vt[2 * St], at.opt_len += bt * (gt + et), xe && (at.static_len += bt * (Ot[2 * St + 1] + et)));
          if (Qt !== 0) {
            do {
              for (gt = Vt - 1; at.bl_count[gt] === 0; )
                gt--;
              at.bl_count[gt]--, at.bl_count[gt + 1] += 2, at.bl_count[Vt]--, Qt -= 2;
            } while (0 < Qt);
            for (gt = Vt; gt !== 0; gt--)
              for (St = at.bl_count[gt]; St !== 0; )
                At < (xt = at.heap[--kt]) || (vt[2 * xt + 1] !== gt && (at.opt_len += (gt - vt[2 * xt + 1]) * vt[2 * xt], vt[2 * xt + 1] = gt), St--);
          }
        }(A, S), pt(W, lt, A.bl_count);
      }
      function t(A, S, j) {
        var G, R, W = -1, K = S[1], M = 0, tt = 7, lt = 4;
        for (K === 0 && (tt = 138, lt = 3), S[2 * (j + 1) + 1] = 65535, G = 0; G <= j; G++)
          R = K, K = S[2 * (G + 1) + 1], ++M < tt && R === K || (M < lt ? A.bl_tree[2 * R] += M : R !== 0 ? (R !== W && A.bl_tree[2 * R]++, A.bl_tree[2 * T]++) : M <= 10 ? A.bl_tree[2 * O]++ : A.bl_tree[2 * z]++, W = R, lt = (M = 0) === K ? (tt = 138, 3) : R === K ? (tt = 6, 3) : (tt = 7, 4));
      }
      function U(A, S, j) {
        var G, R, W = -1, K = S[1], M = 0, tt = 7, lt = 4;
        for (K === 0 && (tt = 138, lt = 3), G = 0; G <= j; G++)
          if (R = K, K = S[2 * (G + 1) + 1], !(++M < tt && R === K)) {
            if (M < lt)
              for (; H(A, R, A.bl_tree), --M != 0; )
                ;
            else
              R !== 0 ? (R !== W && (H(A, R, A.bl_tree), M--), H(A, T, A.bl_tree), P(A, M - 3, 2)) : M <= 10 ? (H(A, O, A.bl_tree), P(A, M - 3, 3)) : (H(A, z, A.bl_tree), P(A, M - 11, 7));
            W = R, lt = (M = 0) === K ? (tt = 138, 3) : R === K ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      o(F);
      var _ = !1;
      function y(A, S, j, G) {
        P(A, (p << 1) + (G ? 1 : 0), 3), function(R, W, K, M) {
          st(R), M && (q(R, K), q(R, ~K)), r.arraySet(R.pending_buf, R.window, W, K, R.pending), R.pending += K;
        }(A, S, j, !0);
      }
      c._tr_init = function(A) {
        _ || (function() {
          var S, j, G, R, W, K = new Array(f + 1);
          for (R = G = 0; R < m - 1; R++)
            for (L[R] = G, S = 0; S < 1 << Q[R]; S++)
              i[G++] = R;
          for (i[G - 1] = R, R = W = 0; R < 16; R++)
            for (F[R] = W, S = 0; S < 1 << J[R]; S++)
              N[W++] = R;
          for (W >>= 7; R < l; R++)
            for (F[R] = W << 7, S = 0; S < 1 << J[R] - 7; S++)
              N[256 + W++] = R;
          for (j = 0; j <= f; j++)
            K[j] = 0;
          for (S = 0; S <= 143; )
            rt[2 * S + 1] = 8, S++, K[8]++;
          for (; S <= 255; )
            rt[2 * S + 1] = 9, S++, K[9]++;
          for (; S <= 279; )
            rt[2 * S + 1] = 7, S++, K[7]++;
          for (; S <= 287; )
            rt[2 * S + 1] = 8, S++, K[8]++;
          for (pt(rt, v + 1, K), S = 0; S < l; S++)
            k[2 * S + 1] = 5, k[2 * S] = ct(S, 5);
          it = new Z(rt, Q, g + 1, v, f), C = new Z(k, J, 0, l, f), V = new Z(new Array(0), D, 0, b, w);
        }(), _ = !0), A.l_desc = new x(A.dyn_ltree, it), A.d_desc = new x(A.dyn_dtree, C), A.bl_desc = new x(A.bl_tree, V), A.bi_buf = 0, A.bi_valid = 0, ot(A);
      }, c._tr_stored_block = y, c._tr_flush_block = function(A, S, j, G) {
        var R, W, K = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(M) {
          var tt, lt = 4093624447;
          for (tt = 0; tt <= 31; tt++, lt >>>= 1)
            if (1 & lt && M.dyn_ltree[2 * tt] !== 0)
              return a;
          if (M.dyn_ltree[18] !== 0 || M.dyn_ltree[20] !== 0 || M.dyn_ltree[26] !== 0)
            return n;
          for (tt = 32; tt < g; tt++)
            if (M.dyn_ltree[2 * tt] !== 0)
              return n;
          return a;
        }(A)), Et(A, A.l_desc), Et(A, A.d_desc), K = function(M) {
          var tt;
          for (t(M, M.dyn_ltree, M.l_desc.max_code), t(M, M.dyn_dtree, M.d_desc.max_code), Et(M, M.bl_desc), tt = b - 1; 3 <= tt && M.bl_tree[2 * X[tt] + 1] === 0; tt--)
            ;
          return M.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(A), R = A.opt_len + 3 + 7 >>> 3, (W = A.static_len + 3 + 7 >>> 3) <= R && (R = W)) : R = W = j + 5, j + 4 <= R && S !== -1 ? y(A, S, j, G) : A.strategy === 4 || W === R ? (P(A, 2 + (G ? 1 : 0), 3), dt(A, rt, k)) : (P(A, 4 + (G ? 1 : 0), 3), function(M, tt, lt, at) {
          var ft;
          for (P(M, tt - 257, 5), P(M, lt - 1, 5), P(M, at - 4, 4), ft = 0; ft < at; ft++)
            P(M, M.bl_tree[2 * X[ft] + 1], 3);
          U(M, M.dyn_ltree, tt - 1), U(M, M.dyn_dtree, lt - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, K + 1), dt(A, A.dyn_ltree, A.dyn_dtree)), ot(A), G && st(A);
      }, c._tr_tally = function(A, S, j) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = S >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & S, A.pending_buf[A.l_buf + A.last_lit] = 255 & j, A.last_lit++, S === 0 ? A.dyn_ltree[2 * j]++ : (A.matches++, S--, A.dyn_ltree[2 * (i[j] + g + 1)]++, A.dyn_dtree[2 * I(S)]++), A.last_lit === A.lit_bufsize - 1;
      }, c._tr_align = function(A) {
        P(A, 2, 3), H(A, E, rt), function(S) {
          S.bi_valid === 16 ? (q(S, S.bi_buf), S.bi_buf = 0, S.bi_valid = 0) : 8 <= S.bi_valid && (S.pending_buf[S.pending++] = 255 & S.bi_buf, S.bi_buf >>= 8, S.bi_valid -= 8);
        }(A);
      };
    }, { "../utils/common": 41 }], 53: [function(e, h, c) {
      h.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, h, c) {
      (function(r) {
        (function(a, n) {
          if (!a.setImmediate) {
            var o, p, m, g, v = 1, l = {}, b = !1, s = a.document, f = Object.getPrototypeOf && Object.getPrototypeOf(a);
            f = f && f.setTimeout ? f : a, o = {}.toString.call(a.process) === "[object process]" ? function(T) {
              process.nextTick(function() {
                w(T);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var T = !0, O = a.onmessage;
                return a.onmessage = function() {
                  T = !1;
                }, a.postMessage("", "*"), a.onmessage = O, T;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", E, !1) : a.attachEvent("onmessage", E), function(T) {
              a.postMessage(g + T, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(T) {
              w(T.data);
            }, function(T) {
              m.port2.postMessage(T);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(T) {
              var O = s.createElement("script");
              O.onreadystatechange = function() {
                w(T), O.onreadystatechange = null, p.removeChild(O), O = null;
              }, p.appendChild(O);
            }) : function(T) {
              setTimeout(w, 0, T);
            }, f.setImmediate = function(T) {
              typeof T != "function" && (T = new Function("" + T));
              for (var O = new Array(arguments.length - 1), z = 0; z < O.length; z++)
                O[z] = arguments[z + 1];
              var Q = { callback: T, args: O };
              return l[v] = Q, o(v), v++;
            }, f.clearImmediate = u;
          }
          function u(T) {
            delete l[T];
          }
          function w(T) {
            if (b)
              setTimeout(w, 0, T);
            else {
              var O = l[T];
              if (O) {
                b = !0;
                try {
                  (function(z) {
                    var Q = z.callback, J = z.args;
                    switch (J.length) {
                      case 0:
                        Q();
                        break;
                      case 1:
                        Q(J[0]);
                        break;
                      case 2:
                        Q(J[0], J[1]);
                        break;
                      case 3:
                        Q(J[0], J[1], J[2]);
                        break;
                      default:
                        Q.apply(n, J);
                    }
                  })(O);
                } finally {
                  u(T), b = !1;
                }
              }
            }
          }
          function E(T) {
            T.source === a && typeof T.data == "string" && T.data.indexOf(g) === 0 && w(+T.data.slice(g.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Bt < "u" ? Bt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(be);
var Xe = be.exports;
const He = /* @__PURE__ */ ge(Xe);
var ve = { exports: {} };
(function(B, d) {
  (function(e, h) {
    h();
  })(Bt, function() {
    function e(p, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type) ? new Blob(["\uFEFF", p], { type: p.type }) : p;
    }
    function h(p, m, g) {
      var v = new XMLHttpRequest();
      v.open("GET", p), v.responseType = "blob", v.onload = function() {
        o(v.response, m, g);
      }, v.onerror = function() {
        console.error("could not download file");
      }, v.send();
    }
    function c(p) {
      var m = new XMLHttpRequest();
      m.open("HEAD", p, !1);
      try {
        m.send();
      } catch {
      }
      return 200 <= m.status && 299 >= m.status;
    }
    function r(p) {
      try {
        p.dispatchEvent(new MouseEvent("click"));
      } catch {
        var m = document.createEvent("MouseEvents");
        m.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), p.dispatchEvent(m);
      }
    }
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Bt == "object" && Bt.global === Bt ? Bt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(p, m, g) {
      var v = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || p.name || "download", l.download = m, l.rel = "noopener", typeof p == "string" ? (l.href = p, l.origin === location.origin ? r(l) : c(l.href) ? h(p, m, g) : r(l, l.target = "_blank")) : (l.href = v.createObjectURL(p), setTimeout(function() {
        v.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        r(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, g) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, g), m);
      else if (c(p))
        h(p, m, g);
      else {
        var v = document.createElement("a");
        v.href = p, v.target = "_blank", setTimeout(function() {
          r(v);
        });
      }
    } : function(p, m, g, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof p == "string")
        return h(p, m, g);
      var l = p.type === "application/octet-stream", b = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && b || n) && typeof FileReader < "u") {
        var f = new FileReader();
        f.onloadend = function() {
          var E = f.result;
          E = s ? E : E.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = E : location = E, v = null;
        }, f.readAsDataURL(p);
      } else {
        var u = a.URL || a.webkitURL, w = u.createObjectURL(p);
        v ? v.location = w : location.href = w, v = null, setTimeout(function() {
          u.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, B.exports = o;
  });
})(ve);
var qe = ve.exports;
const Ke = /* @__PURE__ */ ge(qe);
function Lt(B) {
  for (var d = globalThis.atob(B), e = d.length, h = new Uint8Array(e), c = 0; c < e; c++)
    h[c] = d.charCodeAt(c);
  return h.buffer;
}
const $e = `#!/bin/sh

#
# Copyright © 2015 the original authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# SPDX-License-Identifier: Apache-2.0
#

##############################################################################
#
#   Gradle start up script for POSIX generated by Gradle.
#
#   Important for running:
#
#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
#       noncompliant, but you have some other compliant shell such as ksh or
#       bash, then to run this script, type that shell name before the whole
#       command line, like:
#
#           ksh Gradle
#
#       Busybox and similar reduced shells will NOT work, because this script
#       requires all of these POSIX shell features:
#         * functions;
#         * expansions «$var», «\${var}», «\${var:-default}», «\${var+SET}»,
#           «\${var#prefix}», «\${var%suffix}», and «$( cmd )»;
#         * compound commands having a testable exit status, especially «case»;
#         * various built-in commands including «command», «set», and «ulimit».
#
#   Important for patching:
#
#   (2) This script targets any POSIX shell, so it avoids extensions provided
#       by Bash, Ksh, etc; in particular arrays are avoided.
#
#       The "traditional" practice of packing multiple parameters into a
#       space-separated string is a well documented source of bugs and security
#       problems, so this is (mostly) avoided, by progressively accumulating
#       options in "$@", and eventually passing that to Java.
#
#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
#       see the in-line comments for details.
#
#       There are tweaks for specific operating systems such as AIX, CygWin,
#       Darwin, MinGW, and NonStop.
#
#   (3) This script is generated from the Groovy template
#       https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
#       within the Gradle project.
#
#       You can find Gradle at https://github.com/gradle/gradle/.
#
##############################################################################

# Attempt to set APP_HOME

# Resolve links: $0 may be a link
app_path=$0

# Need this for daisy-chained symlinks.
while
    APP_HOME=\${app_path%"\${app_path##*/}"}  # leaves a trailing /; empty if no leading path
    [ -h "$app_path" ]
do
    ls=$( ls -ld "$app_path" )
    link=\${ls#*' -> '}
    case $link in             #(
      /*)   app_path=$link ;; #(
      *)    app_path=$APP_HOME$link ;;
    esac
done

# This is normally unused
# shellcheck disable=SC2034
APP_BASE_NAME=\${0##*/}
# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)
APP_HOME=$( cd -P "\${APP_HOME:-./}" > /dev/null && printf '%s\\n' "$PWD" ) || exit

# Use the maximum available, or set MAX_FD != -1 to use that value.
MAX_FD=maximum

warn () {
    echo "$*"
} >&2

die () {
    echo
    echo "$*"
    echo
    exit 1
} >&2

# OS specific support (must be 'true' or 'false').
cygwin=false
msys=false
darwin=false
nonstop=false
case "$( uname )" in                #(
  CYGWIN* )         cygwin=true  ;; #(
  Darwin* )         darwin=true  ;; #(
  MSYS* | MINGW* )  msys=true    ;; #(
  NONSTOP* )        nonstop=true ;;
esac



# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
        # IBM's JDK on AIX uses strange locations for the executables
        JAVACMD=$JAVA_HOME/jre/sh/java
    else
        JAVACMD=$JAVA_HOME/bin/java
    fi
    if [ ! -x "$JAVACMD" ] ; then
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
else
    JAVACMD=java
    if ! command -v java >/dev/null 2>&1
    then
        die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        ulimit -n "$MAX_FD" ||
            warn "Could not set maximum file descriptor limit to $MAX_FD"
    esac
fi

# Collect all arguments for the java command, stacking in reverse order:
#   * args from the command line
#   * the main class name
#   * -classpath
#   * -D...appname settings
#   * --module-path (only if needed)
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.

# For Cygwin or MSYS, switch paths to Windows format before running java
if "$cygwin" || "$msys" ; then
    APP_HOME=$( cygpath --path --mixed "$APP_HOME" )

    JAVACMD=$( cygpath --unix "$JAVACMD" )

    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    for arg do
        if
            case $arg in                                #(
              -*)   false ;;                            # don't mess with options #(
              /?*)  t=\${arg#/} t=/\${t%%/*}              # looks like a POSIX filepath
                    [ -e "$t" ] ;;                      #(
              *)    false ;;
            esac
        then
            arg=$( cygpath --path --ignore --mixed "$arg" )
        fi
        # Roll the args list around exactly as many times as the number of
        # args, so each arg winds up back in the position where it started, but
        # possibly modified.
        #
        # NB: a \`for\` loop captures its iteration list before it begins, so
        # changing the positional parameters here affects neither the number of
        # iterations, nor the values presented in \`arg\`.
        shift                   # remove old arg
        set -- "$@" "$arg"      # push replacement arg
    done
fi


# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Collect all arguments for the java command:
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect \${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '\${Hostname}' itself on the command line.

set -- \\
        "-Dorg.gradle.appname=$APP_BASE_NAME" \\
        -jar "$APP_HOME/gradle/wrapper/gradle-wrapper.jar" \\
        "$@"

# Stop when "xargs" is not available.
if ! command -v xargs >/dev/null 2>&1
then
    die "xargs is not available"
fi

# Use "xargs" to parse quoted args.
#
# With -n1 it outputs one arg per line, with the quotes and backslashes removed.
#
# In Bash we could simply go:
#
#   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
#   set -- "\${ARGS[@]}" "$@"
#
# but POSIX shell has neither arrays nor command substitution, so instead we
# post-process each arg (as a line of input to sed) to backslash-escape any
# character that might be a shell metacharacter, then use eval to reverse
# that process (while maintaining the separation between arguments), and wrap
# the whole thing up as a single "set" statement.
#
# This will of course break if any of these variables contains a newline or
# an unmatched quote.
#

eval "set -- $(
        printf '%s\\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
        xargs -n1 |
        sed ' s~[^-[:alnum:]+,./:=@_]~\\\\&~g; ' |
        tr '\\n' ' '
    )" '"$@"'

exec "$JAVACMD" "$@"
`, tn = `@rem\r
@rem Copyright 2015 the original author or authors.\r
@rem\r
@rem Licensed under the Apache License, Version 2.0 (the "License");\r
@rem you may not use this file except in compliance with the License.\r
@rem You may obtain a copy of the License at\r
@rem\r
@rem      https://www.apache.org/licenses/LICENSE-2.0\r
@rem\r
@rem Unless required by applicable law or agreed to in writing, software\r
@rem distributed under the License is distributed on an "AS IS" BASIS,\r
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r
@rem See the License for the specific language governing permissions and\r
@rem limitations under the License.\r
@rem\r
@rem SPDX-License-Identifier: Apache-2.0\r
@rem\r
\r
@if "%DEBUG%"=="" @echo off\r
@rem ##########################################################################\r
@rem\r
@rem  Gradle startup script for Windows\r
@rem\r
@rem ##########################################################################\r
\r
@rem Set local scope for the variables with windows NT shell\r
if "%OS%"=="Windows_NT" setlocal\r
\r
set DIRNAME=%~dp0\r
if "%DIRNAME%"=="" set DIRNAME=.\r
@rem This is normally unused\r
set APP_BASE_NAME=%~n0\r
set APP_HOME=%DIRNAME%\r
\r
@rem Resolve any "." and ".." in APP_HOME to make it shorter.\r
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi\r
\r
@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.\r
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"\r
\r
@rem Find java.exe\r
if defined JAVA_HOME goto findJavaFromJavaHome\r
\r
set JAVA_EXE=java.exe\r
%JAVA_EXE% -version >NUL 2>&1\r
if %ERRORLEVEL% equ 0 goto execute\r
\r
echo. 1>&2\r
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2\r
echo. 1>&2\r
echo Please set the JAVA_HOME variable in your environment to match the 1>&2\r
echo location of your Java installation. 1>&2\r
\r
goto fail\r
\r
:findJavaFromJavaHome\r
set JAVA_HOME=%JAVA_HOME:"=%\r
set JAVA_EXE=%JAVA_HOME%/bin/java.exe\r
\r
if exist "%JAVA_EXE%" goto execute\r
\r
echo. 1>&2\r
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2\r
echo. 1>&2\r
echo Please set the JAVA_HOME variable in your environment to match the 1>&2\r
echo location of your Java installation. 1>&2\r
\r
goto fail\r
\r
:execute\r
@rem Setup the command line\r
\r
\r
\r
@rem Execute Gradle\r
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -jar "%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar" %*\r
\r
:end\r
@rem End local scope for the variables with windows NT shell\r
if %ERRORLEVEL% equ 0 goto mainEnd\r
\r
:fail\r
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of\r
rem the _cmd.exe /c_ return code!\r
set EXIT_CODE=%ERRORLEVEL%\r
if %EXIT_CODE% equ 0 set EXIT_CODE=1\r
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%\r
exit /b %EXIT_CODE%\r
\r
:mainEnd\r
if "%OS%"=="Windows_NT" endlocal\r
\r
:omega\r
`, en = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-9.3.0-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, nn = "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Zy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEFmdGVyT3B0aW9ucy5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCj0ttQVAMAAJMHAAA8AAkAAAAAAAAAAAAAAEkWAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRCZWZvcmVGaXJzdFN1YkNvbW1hbmQuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEALlZDIGAHAAA6DwAAPQAJAAAAAAAAAAAAAAAQGgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkS25vd25PcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDU5SDkTAIAAJcEAAA8AAkAAAAAAAAAAAAAAOQhAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRNaXNzaW5nT3B0aW9uQXJnU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAmT0V29YCAABKBQAAPQAJAAAAAAAAAAAAAACjJAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uQXdhcmVQYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCflW/2oQEAAH0CAAA4AAkAAAAAAAAAAAAAAO0nAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBXvGfjIgIAAGYDAAAzAAkAAAAAAAAAAAAAAP0pAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAYjZYZqYBAADOAgAAMgAJAAAAAAAAAAAAAACJLAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA/Y4pdXQCAADHBAAAPwAJAAAAAAAAAAAAAACYLgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAEoBjirqBAAA0ggAACYACQAAAAAAAAAAAAAAgjEAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAIKL8BCEBAAAUggAACYACQAAAAAAAAAAAAAAyTYAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAO2cvGdSAQAArAEAACwACQAAAAAAAAAAAAAAqjsAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lT3B0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAM7QOawiBQAAVggAADMACQAAAAAAAAAAAAAAXz0AAG9yZy9ncmFkbGUvaW50ZXJuYWwvZmlsZS9QYXRoVHJhdmVyc2FsQ2hlY2tlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDp+MhHngEAACYCAABBAAkAAAAAAAAAAAAAAOtCAABvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvbG9ja2luZy9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBE8acw2wEAAMcCAAA+AAkAAAAAAAAAAAAAAAFFAABvcmcvZ3JhZGxlL3V0aWwvaW50ZXJuYWwvV3JhcHBlckRpc3RyaWJ1dGlvblVybENvbnZlcnRlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQClNa2HjwEAAB4CAAAvAAkAAAAAAAAAAAAAAFFHAABvcmcvZ3JhZGxlL3dyYXBwZXIvQm9vdHN0cmFwTWFpblN0YXJ0ZXIkMS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBgdBonSwMAABIFAABBAAkAAAAAAAAAAAAAAEZJAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkRGVmYXVsdERvd25sb2FkUHJvZ3Jlc3NMaXN0ZW5lci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQACc6nUBwMAAEEFAAA0AAkAAAAAAAAAAAAAAAlNAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkUHJveHlBdXRoZW50aWNhdG9yLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhABQxDlHZCQAA5hIAACEACQAAAAAAAAAAAAAAe1AAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCqi+MW2QEAALICAAAtAAkAAAAAAAAAAAAAAKxaAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlVXNlckhvbWVMb29rdXAuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAodQH4X8WAABdLQAAKgAJAAAAAAAAAAAAAADpXAAAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVdyYXBwZXJNYWluLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAJOC8wXEDAAAshgAACIACQAAAAAAAAAAAAAAyXMAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJDEuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAarrq82oBAADnAQAALQAJAAAAAAAAAAAAAADmgAAAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwkSW5zdGFsbENoZWNrLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAEmBk+cSEQAA0yAAACAACQAAAAAAAAAAAAAAtIIAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhACeuAolbAgAAWgQAAB8ACQAAAAAAAAAAAAAAHZQAAG9yZy9ncmFkbGUvd3JhcHBlci9Mb2dnZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA7t7O9SQBAABqAQAAJgAJAAAAAAAAAAAAAADOlgAAb3JnL2dyYWRsZS93cmFwcGVyL1BhdGhBc3NlbWJsZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAdFgpujIEAABmBwAALgAJAAAAAAAAAAAAAABPmAAAb3JnL2dyYWRsZS93cmFwcGVyL1Byb3BlcnRpZXNGaWxlSGFuZGxlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCzldMe7gIAAFAGAAAtAAkAAAAAAAAAAAAAAOacAABvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckNvbmZpZ3VyYXRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEABq9Rm6IGAABEDQAAKAAJAAAAAAAAAAAAAAA4oAAAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJFeGVjdXRvci5jbGFzc1VUBQABAAAAAFBLBQYAAAAAIQAhABANAAA5pwAAAAA=", ye = `# gradle

.gradle/
build/
out/
classes/

# eclipse

*.launch

# idea

.idea/
*.iml
*.ipr
*.iws

# vscode

.settings/
.vscode/
bin/
.classpath
.project

# macos

*.DS_Store

# fabric

run/

# java

hs_err_*.log
replay_*.log
*.hprof
*.jfr
`, we = `# Automatically build the project and run any configured tests for every push
# and submitted pull request. This can help catch issues that only occur on
# certain platforms or Java versions, and provides a first line of defence
# against bad commits.

name: build
on: [pull_request, push]

jobs:
  build:
    runs-on: ubuntu-24.04
    steps:
      - name: checkout repository
        uses: actions/checkout@v4
      - name: validate gradle wrapper
        uses: gradle/actions/wrapper-validation@v4
      - name: setup jdk
        uses: actions/setup-java@v4
        with:
          java-version: '25'
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: Artifacts
          path: build/libs/
`;
async function rn({ writer: B }) {
  await B.write("gradlew", $e, {
    executable: !0
  }), await B.write("gradlew.bat", tn), await B.write("gradle/wrapper/gradle-wrapper.properties", en), await B.write("gradle/wrapper/gradle-wrapper.jar", Lt(nn)), await B.write(".gitignore", ye), await B.write(".github/workflows/build.yml", we);
}
var Wt = { exports: {} };
(function(B, d) {
  (function(e, h) {
    h(d);
  })(Bt, function(e) {
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(C) {
        for (var V = 1; V < arguments.length; V++) {
          var F = arguments[V];
          for (var Z in F)
            Object.prototype.hasOwnProperty.call(F, Z) && (C[Z] = F[Z]);
        }
        return C;
      }, h.apply(this, arguments);
    }
    function c(C, V) {
      C.prototype = Object.create(V.prototype), C.prototype.constructor = C, a(C, V);
    }
    function r(C) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(V) {
        return V.__proto__ || Object.getPrototypeOf(V);
      }, r(C);
    }
    function a(C, V) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, Z) {
        return F.__proto__ = Z, F;
      }, a(C, V);
    }
    function n(C, V, F) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct.bind() : function(Z, x, I) {
        var q = [null];
        q.push.apply(q, x);
        var P = new (Function.bind.apply(Z, q))();
        return I && a(P, I.prototype), P;
      }, n.apply(null, arguments);
    }
    function o(C) {
      var V = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(F) {
        if (F === null || Function.toString.call(F).indexOf("[native code]") === -1)
          return F;
        if (typeof F != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (V !== void 0) {
          if (V.has(F))
            return V.get(F);
          V.set(F, Z);
        }
        function Z() {
          return n(F, arguments, r(this).constructor);
        }
        return Z.prototype = Object.create(F.prototype, { constructor: { value: Z, enumerable: !1, writable: !0, configurable: !0 } }), a(Z, F);
      }, o(C);
    }
    var p = /* @__PURE__ */ function() {
      function C(F) {
        this.cache = void 0, this.cache = F;
      }
      var V = C.prototype;
      return V.define = function(F, Z) {
        this.cache[F] = Z;
      }, V.get = function(F) {
        return this.cache[F];
      }, V.remove = function(F) {
        delete this.cache[F];
      }, V.reset = function() {
        this.cache = {};
      }, V.load = function(F) {
        this.cache = h({}, this.cache, F);
      }, C;
    }(), m = /* @__PURE__ */ function(C) {
      function V(F) {
        var Z;
        return (Z = C.call(this, F) || this).name = "Eta Error", Z;
      }
      return c(V, C), V;
    }(/* @__PURE__ */ o(Error));
    function g(C, V, F) {
      var Z = V.slice(0, F).split(/\n/), x = Z.length, I = Z[x - 1].length + 1;
      throw C += " at line " + x + " col " + I + `:

  ` + V.split(/\n/)[x - 1] + `
  ` + Array(I).join(" ") + "^", new m(C);
    }
    function v(C, V, F, Z) {
      var x = V.split(`
`), I = Math.max(F - 3, 0), q = Math.min(x.length, F + 3), P = Z, H = x.slice(I, q).map(function(pt, ot) {
        var st = ot + I + 1;
        return (st == F ? " >> " : "    ") + st + "| " + pt;
      }).join(`
`), ct = new m((P ? P + ":" + F + `
` : "line " + F + `
`) + H + `

` + C.message);
      throw ct.name = C.name, ct;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function b(C, V) {
      var F = this.config, Z = V && V.async ? l : Function;
      try {
        return new Z(F.varName, "options", this.compileToString.call(this, C, V));
      } catch (x) {
        throw x instanceof SyntaxError ? new m(`Bad template syntax

` + x.message + `
` + Array(x.message.length + 1).join("=") + `
` + this.compileToString.call(this, C, V) + `
`) : x;
      }
    }
    function s(C, V) {
      var F = this.config, Z = V && V.async, x = this.parse.call(this, C), I = F.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (F.debug ? ', line: 1, templateStr: "' + C.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (F.debug ? "try {" : "") + (F.useWith ? "with(" + F.varName + "||{}){" : "") + `

` + f.call(this, x) + `
if (__eta.layout) {
  __eta.res = ` + (Z ? "await includeAsync" : "include") + " (__eta.layout, {..." + F.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (F.useWith ? "}" : "") + (F.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (F.plugins)
        for (var q = 0; q < F.plugins.length; q++) {
          var P = F.plugins[q];
          P.processFnString && (I = P.processFnString(I, F));
        }
      return I;
    }
    function f(C) {
      for (var V = this.config, F = 0, Z = C.length, x = ""; F < Z; F++) {
        var I = C[F];
        if (typeof I == "string")
          x += "__eta.res+='" + I + `'
`;
        else {
          var q = I.t, P = I.val || "";
          V.debug && (x += "__eta.line=" + I.lineNo + `
`), q === "r" ? (V.autoFilter && (P = "__eta.f(" + P + ")"), x += "__eta.res+=" + P + `
`) : q === "i" ? (V.autoFilter && (P = "__eta.f(" + P + ")"), V.autoEscape && (P = "__eta.e(" + P + ")"), x += "__eta.res+=" + P + `
`) : q === "e" && (x += P + `
`);
        }
      }
      return x;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(C) {
      return u[C];
    }
    var E = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(C) {
      var V = String(C);
      return /[&<>"']/.test(V) ? V.replace(/[&<>"']/g, w) : V;
    }, filterFunction: function(C) {
      return String(C);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, T = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, O = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, z = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function Q(C) {
      return C.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function J(C, V) {
      return C.slice(0, V).split(`
`).length;
    }
    function D(C) {
      var V = this.config, F = [], Z = !1, x = 0, I = V.parse;
      if (V.plugins)
        for (var q = 0; q < V.plugins.length; q++) {
          var P = V.plugins[q];
          P.processTemplate && (C = P.processTemplate(C, V));
        }
      function H(S, j) {
        S && (S = function(G, R, W, K) {
          var M, tt;
          return Array.isArray(R.autoTrim) ? (M = R.autoTrim[1], tt = R.autoTrim[0]) : M = tt = R.autoTrim, (W || W === !1) && (M = W), (K || K === !1) && (tt = K), tt || M ? M === "slurp" && tt === "slurp" ? G.trim() : (M === "_" || M === "slurp" ? G = G.trimStart() : M !== "-" && M !== "nl" || (G = G.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? G = G.trimEnd() : tt !== "-" && tt !== "nl" || (G = G.replace(/(?:\r\n|\n|\r)$/, "")), G) : G;
        }(S, V, Z, j), S && (S = S.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), F.push(S)));
      }
      V.rmWhitespace && (C = C.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), T.lastIndex = 0, O.lastIndex = 0, z.lastIndex = 0;
      for (var ct, pt = [I.exec, I.interpolate, I.raw].reduce(function(S, j) {
        return S && j ? S + "|" + Q(j) : j ? Q(j) : S;
      }, ""), ot = new RegExp(Q(V.tags[0]) + "(-|_)?\\s*(" + pt + ")?\\s*", "g"), st = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + Q(V.tags[1]) + ")", "g"); ct = ot.exec(C); ) {
        var mt = C.slice(x, ct.index);
        x = ct[0].length + ct.index;
        var ht = ct[2] || "";
        H(mt, ct[1]), st.lastIndex = x;
        for (var dt = void 0, Et = !1; dt = st.exec(C); ) {
          if (dt[1]) {
            var t = C.slice(x, dt.index);
            ot.lastIndex = x = st.lastIndex, Z = dt[2], Et = { t: ht === I.exec ? "e" : ht === I.raw ? "r" : ht === I.interpolate ? "i" : "", val: t };
            break;
          }
          var U = dt[0];
          if (U === "/*") {
            var _ = C.indexOf("*/", st.lastIndex);
            _ === -1 && g("unclosed comment", C, dt.index), st.lastIndex = _;
          } else
            U === "'" ? (O.lastIndex = dt.index, O.exec(C) ? st.lastIndex = O.lastIndex : g("unclosed string", C, dt.index)) : U === '"' ? (z.lastIndex = dt.index, z.exec(C) ? st.lastIndex = z.lastIndex : g("unclosed string", C, dt.index)) : U === "`" && (T.lastIndex = dt.index, T.exec(C) ? st.lastIndex = T.lastIndex : g("unclosed string", C, dt.index));
        }
        Et ? (V.debug && (Et.lineNo = J(C, ct.index)), F.push(Et)) : g("unclosed tag", C, ct.index);
      }
      if (H(C.slice(x, C.length), !1), V.plugins)
        for (var y = 0; y < V.plugins.length; y++) {
          var A = V.plugins[y];
          A.processAST && (F = A.processAST(F, V));
        }
      return F;
    }
    function X(C, V) {
      var F = V && V.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !C.startsWith("@")) {
        var Z = V.filepath, x = F.get(Z);
        if (this.config.cache && x)
          return x;
        var I = this.readFile(Z), q = this.compile(I, V);
        return this.config.cache && F.define(Z, q), q;
      }
      var P = F.get(C);
      if (P)
        return P;
      throw new m("Failed to get template '" + C + "'");
    }
    function rt(C, V, F) {
      var Z, x = h({}, F, { async: !1 });
      return typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (x.filepath = this.resolvePath(C, x)), Z = X.call(this, C, x)) : Z = C, Z.call(this, V, x);
    }
    function k(C, V, F) {
      var Z, x = h({}, F, { async: !0 });
      typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (x.filepath = this.resolvePath(C, x)), Z = X.call(this, C, x)) : Z = C;
      var I = Z.call(this, V, x);
      return Promise.resolve(I);
    }
    function N(C, V) {
      var F = this.compile(C, { async: !1 });
      return rt.call(this, F, V);
    }
    function i(C, V) {
      var F = this.compile(C, { async: !0 });
      return k.call(this, F, V);
    }
    var L = /* @__PURE__ */ function() {
      function C(F) {
        this.config = void 0, this.RuntimeErr = v, this.compile = b, this.compileToString = s, this.parse = D, this.render = rt, this.renderAsync = k, this.renderString = N, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = F ? h({}, E, F) : h({}, E);
      }
      var V = C.prototype;
      return V.configure = function(F) {
        this.config = h({}, this.config, F);
      }, V.withConfig = function(F) {
        return h({}, this, { config: h({}, this.config, F) });
      }, V.loadTemplate = function(F, Z, x) {
        if (typeof Z == "string")
          (x && x.async ? this.templatesAsync : this.templatesSync).define(F, this.compile(Z, x));
        else {
          var I = this.templatesSync;
          (Z.constructor.name === "AsyncFunction" || x && x.async) && (I = this.templatesAsync), I.define(F, Z);
        }
      }, C;
    }(), it = /* @__PURE__ */ function(C) {
      function V() {
        return C.apply(this, arguments) || this;
      }
      return c(V, C), V;
    }(L);
    e.Eta = it;
  });
})(Wt, Wt.exports);
var an = Wt.exports;
const sn = new an.Eta({
  autoTrim: !1
});
function Rt(B, d) {
  return sn.renderString(B, d);
}
const on = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# IntelliJ IDEA is not yet fully compatible with configuration cache, see: https://github.com/FabricMC/fabric-loom/issues/1349
org.gradle.configuration-cache=false

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap && !it.unobfuscated) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
loom_version=1.15-SNAPSHOT
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_api_version=<%= it.fabricVersion %>`, ln = `plugins {
	id '<% if (it.unobfuscated) { %>net.fabricmc.fabric-loom<% } else { %>net.fabricmc.fabric-loom-remap<% } %>' version "\${loom_version}"
	id 'maven-publish'
	<%_ if (it.kotlin) { %>
	id "org.jetbrains.kotlin.jvm" version "<%= it.kotlin.kotlinVersion %>"
  <%_ } %>
}

version = project.mod_version
group = project.maven_group

base {
	archivesName = project.archives_base_name
}

repositories {
	// Add repositories to retrieve artifacts from in here.
	// You should only use this when depending on other mods because
	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.
	// See https://docs.gradle.org/current/userguide/declaring_repositories.html
	// for more information about repositories.
}
<% if (it.splitSources) { %>
loom {
<% if (it.splitSources) { %>	splitEnvironmentSourceSets()

	mods {
		"<%= it.modid %>" {
			sourceSet sourceSets.main
			sourceSet sourceSets.client
		}
	}
<% } %>
}
<% } %><% if (it.dataGeneration) { %>
fabricApi {
	configureDataGeneration {
		client = true
	}
}
<% } %>
dependencies {
	// To change the versions see the gradle.properties file
	minecraft "com.mojang:minecraft:\${project.minecraft_version}"
	<% if (!it.unobfuscated) { %>mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${project.yarn_mappings}:v2"<% } %><% } %>
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %> "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %> "net.fabricmc.fabric-api:fabric-api:\${project.fabric_api_version}"
	<% if (it.kotlin) { %><% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %> "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"<% } %>
}

processResources {
	inputs.property "version", project.version

	filesMatching("fabric.mod.json") {
		expand "version": inputs.properties.version
	}
}

tasks.withType(JavaCompile).configureEach {
	it.options.release = <%= it.java.release %>
}
<% if (it.kotlin) { %>
tasks.withType(org.jetbrains.kotlin.gradle.tasks.KotlinCompile).all {
	kotlinOptions {
		jvmTarget = <%= it.java.kotlinRelease %>
	}
}
<% } %>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.<%= it.java.compatibility %>
}

jar {
	inputs.property "archivesName", project.base.archivesName

	from("LICENSE") {
		rename { "\${it}_\${inputs.properties.archivesName}"}
	}
}

// configure the maven publication
publishing {
	publications {
		create("mavenJava", MavenPublication) {
			artifactId = project.archives_base_name
			from components.java
		}
	}

	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.
	repositories {
		// Add repositories to publish to here.
		// Notice: This block does NOT have the same function as the block in the top level.
		// The repositories here will be used for publishing your artifact, not for
		// retrieving dependencies.
	}
}`, cn = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`, un = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, hn = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, Yt = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
}, An = {
  compatibility: "VERSION_21",
  mixin: "JAVA_21",
  release: 21,
  kotlinRelease: "21"
}, dn = {
  compatibility: "VERSION_25",
  mixin: "JAVA_25",
  release: 25,
  kotlinRelease: "25"
};
function Mt(B) {
  const d = De(B), e = pe(B);
  return d >= 26 ? dn : e <= 16 ? un : e == 17 ? hn : e <= 19 || e == 20 && Ue(B) <= 4 ? Yt : An;
}
const fn = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, pn = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/), mn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function gn(B) {
  let d = [];
  fn.test(B.toLowerCase()) || d.push("Package name is not a valid Java package name!");
  const e = B.split(".").filter((h) => pn.includes(h));
  e.length != 0 && d.push(`Package name contains illegal component: '${e[0]}'`);
  for (let h of mn)
    B.toLowerCase().startsWith(h) ? d.push(`Package name starts with '${h}', which is reserved!`) : B.toLowerCase() + "." == h && d.push(`Package name is '${h}', which is reserved!`);
  return d;
}
async function bn(B, d) {
  await B.write("gradle.properties", Rt(on, d)), await B.write("build.gradle", Rt(ln, { ...d, java: Mt(d.minecraftVersion) })), await B.write("settings.gradle", cn);
}
const ke = `package <%= it.packageName %>;

import <%= it.targetClassFull %>;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(<%= it.targetClass %>.class)
public class <%= it.className %> {
	@Inject(at = @At("HEAD"), method = "<%= it.targetMethod %>")
	private void init(CallbackInfo info) {
		// This code is injected into the start of <%= it.targetClass %>.<%= it.targetMethod %>()V
	}
}`;
async function vn(B, d) {
  const e = d.packageName + ".mixin", h = "ExampleMixin", c = "MinecraftServer", r = "net.minecraft.server.MinecraftServer", a = d.mojmap ? "loadLevel" : "loadWorld", n = {
    required: !0,
    package: e,
    compatibilityLevel: Mt(d.minecraftVersion).mixin,
    mixins: [
      h
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${d.modid}.mixins.json`;
  return await B.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await B.write(`src/main/java/${e.replaceAll(".", "/")}/${h}.java`, Rt(ke, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: r,
    targetMethod: a
  })), [o];
}
async function yn(B, d) {
  const e = d.packageName + ".mixin.client", h = "ExampleClientMixin", c = d.mojmap ? "Minecraft" : "MinecraftClient", r = `net.minecraft.client.${c}`, a = "run", n = {
    required: !0,
    package: e,
    compatibilityLevel: Mt(d.minecraftVersion).mixin,
    client: [
      h
    ],
    injectors: {
      defaultRequire: 1
    }
  }, o = `${d.modid}.client.mixins.json`;
  return await B.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await B.write(`src/client/java/${e.replaceAll(".", "/")}/${h}.java`, Rt(ke, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: r,
    targetMethod: a
  })), [
    {
      config: o,
      environment: "client"
    }
  ];
}
const wn = `package <%= it.package %>;

import net.fabricmc.api.ModInitializer;
<% if (it.slf4j) { %>
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
<% } else { %>
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
<% } %>
public class <%= it.className %> implements ModInitializer {
	public static final String MOD_ID = "<%= it.modid %>";

	// This logger is used to write text to the console and the log file.
	// It is considered best practice to use your mod id as the logger's name.
	// That way, it's clear which mod wrote info, warnings, and errors.
	<% if (it.slf4j) { %>public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);<% } else { %>public static final Logger LOGGER = LogManager.getLogger(MOD_ID);<% } %>

	@Override
	public void onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.

		LOGGER.info("Hello Fabric world!");
	}
}`, kn = `package <%= it.package %>

import net.fabricmc.api.ModInitializer
<% if (it.slf4j) { %>import org.slf4j.LoggerFactory
<% } else { %>import org.apache.logging.log4j.LogManager<% } %>
object <%= it.className %> : ModInitializer {
<% if (it.slf4j) { %>    private val logger = LoggerFactory.getLogger("<%= it.modid %>")
<% } else { %>    private val logger = LogManager.getLogger("<%= it.modid %>")<% } %>
	override fun onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.
		logger.info("Hello Fabric world!")
	}
}`, En = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, xn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, Cn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, Sn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function In(B, d) {
  const e = Bn(d.projectName), h = {
    package: d.packageName,
    className: e,
    classFullName: d.packageName + "." + e,
    path: d.packageName.replaceAll(".", "/") + "/" + e,
    modid: d.modid,
    slf4j: pe(d.minecraftVersion) >= 18,
    clientEntrypoint: d.splitSources,
    dataEntrypoint: d.dataGeneration
  };
  return d.kotlin ? await Rn(B, h) : await Fn(B, h);
}
function Bn(B) {
  return B.split(" ").map((d) => d[0].toUpperCase() + d.slice(1)).join("").replace(/\W+/g, "");
}
async function Fn(B, d) {
  var e = {
    main: [
      d.classFullName
    ]
  };
  if (await B.write(`src/main/java/${d.path}.java`, Rt(wn, d)), d.clientEntrypoint && (await B.write(`src/client/java/${d.path}Client.java`, Rt(En, { ...d, className: d.className + "Client" })), e = {
    ...e,
    client: [
      d.classFullName + "Client"
    ]
  }), d.dataEntrypoint) {
    const h = d.clientEntrypoint ? "client" : "main";
    await B.write(`src/${h}/java/${d.path}DataGenerator.java`, Rt(Cn, { ...d, className: d.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        d.classFullName + "DataGenerator"
      ]
    };
  }
  return e;
}
async function Rn(B, d) {
  var e = {
    main: [
      {
        value: d.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await B.write(`src/main/kotlin/${d.path}.kt`, Rt(kn, d)), d.clientEntrypoint && (await B.write(`src/client/kotlin/${d.path}Client.kt`, Rt(xn, { ...d, className: d.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: d.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), d.dataEntrypoint) {
    const h = d.clientEntrypoint ? "client" : "main";
    await B.write(`src/${h}/kotlin/${d.path}DataGenerator.kt`, Rt(Sn, { ...d, className: d.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        {
          value: d.classFullName + "DataGenerator",
          adapter: "kotlin"
        }
      ]
    };
  }
  return e;
}
const Xt = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function On(B, d, e) {
  if (!d)
    return Lt(Xt);
  const h = e.create(128, 128);
  return h != null && Tn(h, B) ? h.getPng() : Lt(Xt);
}
function Tn(B, d) {
  const e = B.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const h = d.split(/\s+/);
  let c = 0, r = Array(h.length), a = 65;
  for (; ; ) {
    c = 0;
    for (const o of h) {
      let p = a;
      do
        p--, e.font = `${p}px ${Nt}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, p);
    }
    for (let o = 0; o < h.length; o++) {
      const p = h[o];
      e.font = `${a}px ${Nt}`;
      const m = B.measureText(e, p);
      r[o] = m.ascent + m.descent, c += r[o];
    }
    if (c += (h.length - 1) * 2, c <= 124)
      break;
  }
  const n = (128 - c) / 2;
  for (let o = 0; o < h.length; o++) {
    let p = 0;
    for (const v of r.slice(0, o))
      p += v + 2;
    const m = h[o];
    e.font = `${a}px ${Nt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const g = B.measureText(e, m);
    e.fillText(m, 64, n + p + g.ascent);
  }
  return !0;
}
function _n(B) {
  return Number(B.split(".")[1]) >= 59;
}
async function Vn(B, d, e) {
  const h = [
    ...await vn(B, e),
    ...e.splitSources ? await yn(B, e) : []
  ], c = e.minecraftVersion.indexOf("-");
  var r = e.minecraftVersion.substring(0, c === -1 ? e.minecraftVersion.length : c + 1);
  const a = {
    schemaVersion: 1,
    id: e.modid,
    version: "${version}",
    name: e.projectName,
    description: "This is an example description! Tell everyone what your mod is about!",
    authors: [
      "Me!"
    ],
    contact: {
      homepage: "https://fabricmc.net/",
      sources: "https://github.com/FabricMC/fabric-example-mod"
    },
    license: "CC0-1.0",
    icon: `assets/${e.modid}/icon.png`,
    environment: "*",
    entrypoints: await In(B, e),
    mixins: h,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Mt(e.minecraftVersion).release
    }
  };
  a.depends[_n(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await B.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await B.write(`src/main/resources/assets/${e.modid}/icon.png`, On(e.projectName, e.uniqueModIcon, d));
}
const Nn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Dn = `Creative Commons Legal Code

CC0 1.0 Universal

    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator
and subsequent owner(s) (each and all, an "owner") of an original work of
authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for
the purpose of contributing to a commons of creative, cultural and
scientific works ("Commons") that the public can reliably and without fear
of later claims of infringement build upon, modify, incorporate in other
works, reuse and redistribute as freely as possible in any form whatsoever
and for any purposes, including without limitation commercial purposes.
These owners may contribute to the Commons to promote the ideal of a free
culture and the further production of creative, cultural and scientific
works, or to gain reputation or greater distribution for their Work in
part through the use and efforts of others.

For these and/or other purposes and motivations, and without any
expectation of additional consideration or compensation, the person
associating CC0 with a Work (the "Affirmer"), to the extent that he or she
is an owner of Copyright and Related Rights in the Work, voluntarily
elects to apply CC0 to the Work and publicly distribute the Work under its
terms, with knowledge of his or her Copyright and Related Rights in the
Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights ("Copyright and
Related Rights"). Copyright and Related Rights include, but are not
limited to, the following:

  i. the right to reproduce, adapt, distribute, perform, display,
     communicate, and translate a Work;
 ii. moral rights retained by the original author(s) and/or performer(s);
iii. publicity and privacy rights pertaining to a person's image or
     likeness depicted in a Work;
 iv. rights protecting against unfair competition in regards to a Work,
     subject to the limitations in paragraph 4(a), below;
  v. rights protecting the extraction, dissemination, use and reuse of data
     in a Work;
 vi. database rights (such as those arising under Directive 96/9/EC of the
     European Parliament and of the Council of 11 March 1996 on the legal
     protection of databases, and under any national implementation
     thereof, including any amended or successor version of such
     directive); and
vii. other similar, equivalent or corresponding rights throughout the
     world based on applicable law or treaty, and any national
     implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention
of, applicable law, Affirmer hereby overtly, fully, permanently,
irrevocably and unconditionally waives, abandons, and surrenders all of
Affirmer's Copyright and Related Rights and associated claims and causes
of action, whether now known or unknown (including existing as well as
future claims and causes of action), in the Work (i) in all territories
worldwide, (ii) for the maximum duration provided by applicable law or
treaty (including future time extensions), (iii) in any current or future
medium and for any number of copies, and (iv) for any purpose whatsoever,
including without limitation commercial, advertising or promotional
purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each
member of the public at large and to the detriment of Affirmer's heirs and
successors, fully intending that such Waiver shall not be subject to
revocation, rescission, cancellation, termination, or any other legal or
equitable action to disrupt the quiet enjoyment of the Work by the public
as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason
be judged legally invalid or ineffective under applicable law, then the
Waiver shall be preserved to the maximum extent permitted taking into
account Affirmer's express Statement of Purpose. In addition, to the
extent the Waiver is so judged Affirmer hereby grants to each affected
person a royalty-free, non transferable, non sublicensable, non exclusive,
irrevocable and unconditional license to exercise Affirmer's Copyright and
Related Rights in the Work (i) in all territories worldwide, (ii) for the
maximum duration provided by applicable law or treaty (including future
time extensions), (iii) in any current or future medium and for any number
of copies, and (iv) for any purpose whatsoever, including without
limitation commercial, advertising or promotional purposes (the
"License"). The License shall be deemed effective as of the date CC0 was
applied by Affirmer to the Work. Should any part of the License for any
reason be judged legally invalid or ineffective under applicable law, such
partial invalidity or ineffectiveness shall not invalidate the remainder
of the License, and in such case Affirmer hereby affirms that he or she
will not (i) exercise any of his or her remaining Copyright and Related
Rights in the Work or (ii) assert any associated claims and causes of
action with respect to the Work, in either case contrary to Affirmer's
express Statement of Purpose.

4. Limitations and Disclaimers.

 a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
 b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
 c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
 d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.`;
async function Un(B, d) {
  await B.write(".gitattributes", Nn), await B.write(".gitignore", ye), await B.write(".github/workflows/build.yml", we), await B.write("LICENSE", Dn);
}
const Nt = "Comic Relief";
async function Qn(B) {
  const d = await zn(B.config);
  await rn(B), await bn(B.writer, d), await Vn(B.writer, B.canvas, d), await Un(B.writer);
}
async function Ee() {
  const B = await We();
  return B.filter((d) => {
    const e = d.version;
    return e.startsWith("1.14") && e != "1.14.4" ? !1 : d.stable ? !0 : B[0].version == e;
  });
}
async function zn(B) {
  const d = me(B.minecraftVersion);
  return {
    ...B,
    loaderVersion: (await Ze()).find((e) => e.stable).version,
    fabricVersion: await Pe(B.minecraftVersion),
    yarnVersion: d ? void 0 : (await Je(B.minecraftVersion))[0].version,
    kotlin: await Gn(B),
    unobfuscated: d
  };
}
async function Gn(B) {
  if (!B.useKotlin)
    return;
  const e = (await Ye()).pop(), h = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: h
  };
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Nt,
  generateTemplate: Qn,
  getTemplateGameVersions: Ee
}, Symbol.toStringTag, { value: "Module" }));
function Ht(B, d, e) {
  const h = B.slice();
  return h[32] = d[e], h;
}
function qt(B, d, e) {
  const h = B.slice();
  return h[35] = d[e], h;
}
function Kt(B, d, e) {
  const h = B.slice();
  return h[35] = d[e], h;
}
function $t(B, d, e) {
  const h = B.slice();
  return h[35] = d[e], h;
}
function jn(B) {
  let d, e, h = (
    /*error*/
    B[35].message + ""
  ), c, r, a;
  return {
    c() {
      d = nt("p"), e = Ct("Error: "), c = Ct(h), r = ut(), a = nt("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, _t(d, "color", "red");
    },
    m(n, o) {
      yt(n, d, o), Y(d, e), Y(d, c), yt(n, r, o), yt(n, a, o);
    },
    p: Ft,
    i: Ft,
    o: Ft,
    d(n) {
      n && wt(d), n && wt(r), n && wt(a);
    }
  };
}
function Mn(B) {
  let d, e, h, c, r, a, n, o, p, m, g, v, l, b, s, f, u, w, E, T, O, z, Q, J, D, X, rt, k, N, i, L, it, C, V, F, Z, x, I, q, P, H, ct, pt, ot, st, mt, ht, dt, Et, t, U, _, y, A;
  function S(et, bt) {
    return (
      /*customModId*/
      et[3] != null ? Zn : Wn
    );
  }
  let j = S(B), G = j(B), R = (
    /*modIdErrors*/
    B[15] != null && te(B)
  ), W = (
    /*customModId*/
    B[3] != null && ne(B)
  ), K = (
    /*packageNameErrors*/
    B[13]
  ), M = [];
  for (let et = 0; et < K.length; et += 1)
    M[et] = ae(qt(B, K, et));
  let tt = (
    /*data*/
    B[31].game
  ), lt = [];
  for (let et = 0; et < tt.length; et += 1)
    lt[et] = se(Ht(B, tt, et));
  let at = !/*isUnobfuscated*/
  B[12] && oe(B), ft = (
    /*supportsDataGen*/
    B[11] && le(B)
  ), kt = (
    /*supportsSplitSources*/
    B[10] && ce(B)
  );
  const St = [Jn, Pn], xt = [];
  function gt(et, bt) {
    return (
      /*loading*/
      et[9] ? 0 : 1
    );
  }
  return t = gt(B), U = xt[t] = St[t](B), {
    c() {
      d = nt("div"), e = nt("div"), h = nt("h3"), h.textContent = "Mod Name:", c = ut(), r = nt("hr"), a = ut(), G.c(), n = ut(), o = nt("input"), p = ut(), R && R.c(), m = ut(), W && W.c(), g = ut(), v = nt("div"), l = nt("h3"), l.textContent = "Package Name:", b = ut(), s = nt("hr"), f = ut(), u = nt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = ut(), E = nt("input"), T = ut();
      for (let et = 0; et < M.length; et += 1)
        M[et].c();
      O = ut(), z = nt("div"), Q = nt("h3"), Q.textContent = "Minecraft Version:", J = ut(), D = nt("hr"), X = ut(), rt = nt("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = ut(), N = nt("select");
      for (let et = 0; et < lt.length; et += 1)
        lt[et].c();
      i = ut(), L = nt("hr"), it = ut(), C = nt("br"), V = ut(), F = nt("h4"), F.textContent = "Advanced Options:", Z = ut(), x = nt("div"), I = nt("div"), q = nt("input"), P = ut(), H = nt("label"), H.textContent = "Kotlin Programming Language", ct = ut(), pt = nt("p"), pt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = ut(), at && at.c(), st = ut(), ft && ft.c(), mt = ut(), kt && kt.c(), ht = ut(), dt = nt("br"), Et = ut(), U.c(), $(h, "class", "svelte-c4460r"), $(r, "class", "svelte-c4460r"), $(o, "id", "project-name"), $(o, "class", "svelte-c4460r"), $(e, "class", "form-line svelte-c4460r"), $(l, "class", "svelte-c4460r"), $(s, "class", "svelte-c4460r"), $(u, "class", "svelte-c4460r"), $(E, "id", "package-name"), $(E, "class", "svelte-c4460r"), $(v, "class", "form-line svelte-c4460r"), $(Q, "class", "svelte-c4460r"), $(D, "class", "svelte-c4460r"), $(rt, "class", "svelte-c4460r"), $(N, "id", "minecraft-version"), _t(N, "min-width", "200px"), $(N, "class", "svelte-c4460r"), /*minecraftVersion*/
      B[0] === void 0 && _e(() => (
        /*select_change_handler*/
        B[25].call(N)
      )), $(z, "class", "form-line svelte-c4460r"), $(L, "class", "svelte-c4460r"), $(C, "class", "svelte-c4460r"), $(F, "class", "svelte-c4460r"), $(q, "id", "kotlin"), $(q, "type", "checkbox"), $(q, "class", "option-input svelte-c4460r"), $(H, "for", "kotlin"), $(H, "class", "option-label svelte-c4460r"), $(I, "class", "option-container svelte-c4460r"), $(pt, "class", "option-body svelte-c4460r"), $(x, "class", "svelte-c4460r"), $(dt, "class", "svelte-c4460r"), $(d, "class", "template svelte-c4460r");
    },
    m(et, bt) {
      yt(et, d, bt), Y(d, e), Y(e, h), Y(e, c), Y(e, r), Y(e, a), G.m(e, null), Y(e, n), Y(e, o), Tt(
        o,
        /*projectName*/
        B[1]
      ), Y(e, p), R && R.m(e, null), Y(d, m), W && W.m(d, null), Y(d, g), Y(d, v), Y(v, l), Y(v, b), Y(v, s), Y(v, f), Y(v, u), Y(v, w), Y(v, E), Tt(
        E,
        /*packageName*/
        B[2]
      ), Y(v, T);
      for (let vt = 0; vt < M.length; vt += 1)
        M[vt] && M[vt].m(v, null);
      Y(d, O), Y(d, z), Y(z, Q), Y(z, J), Y(z, D), Y(z, X), Y(z, rt), Y(z, k), Y(z, N);
      for (let vt = 0; vt < lt.length; vt += 1)
        lt[vt] && lt[vt].m(N, null);
      Jt(
        N,
        /*minecraftVersion*/
        B[0],
        !0
      ), Y(d, i), Y(d, L), Y(d, it), Y(d, C), Y(d, V), Y(d, F), Y(d, Z), Y(d, x), Y(x, I), Y(I, q), q.checked = /*useKotlin*/
      B[5], Y(I, P), Y(I, H), Y(x, ct), Y(x, pt), Y(d, ot), at && at.m(d, null), Y(d, st), ft && ft.m(d, null), Y(d, mt), kt && kt.m(d, null), Y(d, ht), Y(d, dt), Y(d, Et), xt[t].m(d, null), _ = !0, y || (A = [
        It(
          o,
          "input",
          /*input0_input_handler*/
          B[22]
        ),
        It(
          o,
          "blur",
          /*doFormatProjectName*/
          B[18]
        ),
        It(
          E,
          "keyup",
          /*doFormatPackageName*/
          B[19]
        ),
        It(
          E,
          "input",
          /*input1_input_handler*/
          B[24]
        ),
        It(
          N,
          "change",
          /*select_change_handler*/
          B[25]
        ),
        It(
          q,
          "change",
          /*input2_change_handler*/
          B[26]
        )
      ], y = !0);
    },
    p(et, bt) {
      if (j === (j = S(et)) && G ? G.p(et, bt) : (G.d(1), G = j(et), G && (G.c(), G.m(e, n))), bt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      et[1] && Tt(
        o,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[15] != null ? R ? R.p(et, bt) : (R = te(et), R.c(), R.m(e, null)) : R && (R.d(1), R = null), /*customModId*/
      et[3] != null ? W ? W.p(et, bt) : (W = ne(et), W.c(), W.m(d, g)) : W && (W.d(1), W = null), bt[0] & /*packageName*/
      4 && E.value !== /*packageName*/
      et[2] && Tt(
        E,
        /*packageName*/
        et[2]
      ), bt[0] & /*packageNameErrors*/
      8192) {
        K = /*packageNameErrors*/
        et[13];
        let At;
        for (At = 0; At < K.length; At += 1) {
          const Ot = qt(et, K, At);
          M[At] ? M[At].p(Ot, bt) : (M[At] = ae(Ot), M[At].c(), M[At].m(v, null));
        }
        for (; At < M.length; At += 1)
          M[At].d(1);
        M.length = K.length;
      }
      if (bt[0] & /*versions*/
      65536) {
        tt = /*data*/
        et[31].game;
        let At;
        for (At = 0; At < tt.length; At += 1) {
          const Ot = Ht(et, tt, At);
          lt[At] ? lt[At].p(Ot, bt) : (lt[At] = se(Ot), lt[At].c(), lt[At].m(N, null));
        }
        for (; At < lt.length; At += 1)
          lt[At].d(1);
        lt.length = tt.length;
      }
      bt[0] & /*minecraftVersion, versions*/
      65537 && Jt(
        N,
        /*minecraftVersion*/
        et[0]
      ), bt[0] & /*useKotlin*/
      32 && (q.checked = /*useKotlin*/
      et[5]), /*isUnobfuscated*/
      et[12] ? at && (at.d(1), at = null) : at ? at.p(et, bt) : (at = oe(et), at.c(), at.m(d, st)), /*supportsDataGen*/
      et[11] ? ft ? ft.p(et, bt) : (ft = le(et), ft.c(), ft.m(d, mt)) : ft && (ft.d(1), ft = null), /*supportsSplitSources*/
      et[10] ? kt ? kt.p(et, bt) : (kt = ce(et), kt.c(), kt.m(d, ht)) : kt && (kt.d(1), kt = null);
      let vt = t;
      t = gt(et), t === vt ? xt[t].p(et, bt) : (Ve(), Ut(xt[vt], 1, 1, () => {
        xt[vt] = null;
      }), Ne(), U = xt[t], U ? U.p(et, bt) : (U = xt[t] = St[t](et), U.c()), Dt(U, 1), U.m(d, null));
    },
    i(et) {
      _ || (Dt(U), _ = !0);
    },
    o(et) {
      Ut(U), _ = !1;
    },
    d(et) {
      et && wt(d), G.d(), R && R.d(), W && W.d(), Gt(M, et), Gt(lt, et), at && at.d(), ft && ft.d(), kt && kt.d(), xt[t].d(), y = !1, ue(A);
    }
  };
}
function Wn(B) {
  let d, e, h, c, r, a, n, o;
  return {
    c() {
      d = nt("p"), e = Ct("Choose a name for your new mod. The mod ID will be "), h = nt("code"), c = Ct(
        /*modid*/
        B[4]
      ), r = Ct(". "), a = nt("a"), a.textContent = "Use custom id", $(h, "class", "svelte-c4460r"), $(a, "href", ""), $(a, "class", "svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(p, m) {
      yt(p, d, m), Y(d, e), Y(d, h), Y(h, c), Y(d, r), Y(d, a), n || (o = It(a, "click", Zt(
        /*useCustomModId*/
        B[20]
      )), n = !0);
    },
    p(p, m) {
      m[0] & /*modid*/
      16 && jt(
        c,
        /*modid*/
        p[4]
      );
    },
    d(p) {
      p && wt(d), n = !1, o();
    }
  };
}
function Zn(B) {
  let d;
  return {
    c() {
      d = nt("p"), d.textContent = "Choose a name for your new mod.", $(d, "class", "svelte-c4460r");
    },
    m(e, h) {
      yt(e, d, h);
    },
    p: Ft,
    d(e) {
      e && wt(d);
    }
  };
}
function te(B) {
  let d, e, h = (
    /*modIdErrors*/
    B[15]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = ee($t(B, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      d = ut(), e = nt("br"), $(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      yt(r, d, a), yt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*modIdErrors*/
      32768) {
        h = /*modIdErrors*/
        r[15];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = $t(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = ee(o), c[n].c(), c[n].m(d.parentNode, d));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      Gt(c, r), r && wt(d), r && wt(e);
    }
  };
}
function ee(B) {
  let d, e = (
    /*error*/
    B[35] + ""
  ), h;
  return {
    c() {
      d = nt("li"), h = Ct(e), _t(d, "color", "red"), $(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      yt(c, d, r), Y(d, h);
    },
    p(c, r) {
      r[0] & /*modIdErrors*/
      32768 && e !== (e = /*error*/
      c[35] + "") && jt(h, e);
    },
    d(c) {
      c && wt(d);
    }
  };
}
function ne(B) {
  let d, e, h, c, r, a, n, o, p, m, g, v, l, b = (
    /*customIdErrors*/
    B[14] != null && re(B)
  );
  return {
    c() {
      d = nt("div"), e = nt("h3"), e.textContent = "Mod ID:", h = ut(), c = nt("hr"), r = ut(), a = nt("p"), n = Ct("Enter the modid you wish to use for your mod. "), o = nt("a"), o.textContent = "Use default", p = ut(), b && b.c(), m = ut(), g = nt("input"), $(e, "class", "svelte-c4460r"), $(c, "class", "svelte-c4460r"), $(o, "href", ""), $(o, "class", "svelte-c4460r"), $(a, "class", "svelte-c4460r"), $(g, "id", "mod-id"), $(g, "class", "svelte-c4460r"), $(d, "class", "form-line svelte-c4460r");
    },
    m(s, f) {
      yt(s, d, f), Y(d, e), Y(d, h), Y(d, c), Y(d, r), Y(d, a), Y(a, n), Y(a, o), Y(d, p), b && b.m(d, null), Y(d, m), Y(d, g), Tt(
        g,
        /*customModId*/
        B[3]
      ), v || (l = [
        It(o, "click", Zt(
          /*useDefaultModId*/
          B[21]
        )),
        It(
          g,
          "input",
          /*input_input_handler*/
          B[23]
        )
      ], v = !0);
    },
    p(s, f) {
      /*customIdErrors*/
      s[14] != null ? b ? b.p(s, f) : (b = re(s), b.c(), b.m(d, m)) : b && (b.d(1), b = null), f[0] & /*customModId*/
      8 && g.value !== /*customModId*/
      s[3] && Tt(
        g,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && wt(d), b && b.d(), v = !1, ue(l);
    }
  };
}
function re(B) {
  let d, e, h = (
    /*customIdErrors*/
    B[14]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = ie(Kt(B, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      d = ut(), e = nt("br"), $(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      yt(r, d, a), yt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*customIdErrors*/
      16384) {
        h = /*customIdErrors*/
        r[14];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = Kt(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = ie(o), c[n].c(), c[n].m(d.parentNode, d));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      Gt(c, r), r && wt(d), r && wt(e);
    }
  };
}
function ie(B) {
  let d, e = (
    /*error*/
    B[35] + ""
  ), h;
  return {
    c() {
      d = nt("li"), h = Ct(e), _t(d, "color", "red"), $(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      yt(c, d, r), Y(d, h);
    },
    p(c, r) {
      r[0] & /*customIdErrors*/
      16384 && e !== (e = /*error*/
      c[35] + "") && jt(h, e);
    },
    d(c) {
      c && wt(d);
    }
  };
}
function ae(B) {
  let d, e = (
    /*error*/
    B[35] + ""
  ), h;
  return {
    c() {
      d = nt("li"), h = Ct(e), _t(d, "color", "red"), $(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      yt(c, d, r), Y(d, h);
    },
    p(c, r) {
      r[0] & /*packageNameErrors*/
      8192 && e !== (e = /*error*/
      c[35] + "") && jt(h, e);
    },
    d(c) {
      c && wt(d);
    }
  };
}
function se(B) {
  let d, e = (
    /*version*/
    B[32].version + ""
  ), h;
  return {
    c() {
      d = nt("option"), h = Ct(e), d.__value = /*version*/
      B[32].version, d.value = d.__value, $(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      yt(c, d, r), Y(d, h);
    },
    p: Ft,
    d(c) {
      c && wt(d);
    }
  };
}
function oe(B) {
  let d, e, h, c, r, a, n, o, p;
  return {
    c() {
      d = nt("div"), e = nt("div"), h = nt("input"), c = ut(), r = nt("label"), r.textContent = "Mojang Mappings", a = ut(), n = nt("p"), n.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", $(h, "id", "mojmap"), $(h, "type", "checkbox"), $(h, "class", "option-input svelte-c4460r"), $(r, "for", "mojmap"), $(r, "class", "option-label svelte-c4460r"), $(e, "class", "option-container svelte-c4460r"), $(n, "class", "option-body svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(m, g) {
      yt(m, d, g), Y(d, e), Y(e, h), h.checked = /*mojmap*/
      B[6], Y(e, c), Y(e, r), Y(d, a), Y(d, n), o || (p = It(
        h,
        "change",
        /*input_change_handler*/
        B[27]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*mojmap*/
      64 && (h.checked = /*mojmap*/
      m[6]);
    },
    d(m) {
      m && wt(d), o = !1, p();
    }
  };
}
function le(B) {
  let d, e, h, c, r, a, n, o, p;
  return {
    c() {
      d = nt("div"), e = nt("div"), h = nt("input"), c = ut(), r = nt("label"), r.textContent = "Data Generation", a = ut(), n = nt("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', $(h, "id", "datagen"), $(h, "type", "checkbox"), $(h, "class", "option-input svelte-c4460r"), $(r, "for", "datagen"), $(r, "class", "option-label svelte-c4460r"), $(e, "class", "option-container svelte-c4460r"), $(n, "class", "option-body svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(m, g) {
      yt(m, d, g), Y(d, e), Y(e, h), h.checked = /*dataGeneration*/
      B[7], Y(e, c), Y(e, r), Y(d, a), Y(d, n), o || (p = It(
        h,
        "change",
        /*input_change_handler_1*/
        B[28]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*dataGeneration*/
      128 && (h.checked = /*dataGeneration*/
      m[7]);
    },
    d(m) {
      m && wt(d), o = !1, p();
    }
  };
}
function ce(B) {
  let d, e, h, c, r, a, n, o, p;
  return {
    c() {
      d = nt("div"), e = nt("div"), h = nt("input"), c = ut(), r = nt("label"), r.textContent = "Split client and common sources", a = ut(), n = nt("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, $(h, "id", "splitSources"), $(h, "type", "checkbox"), $(h, "class", "option-input svelte-c4460r"), $(r, "for", "splitSources"), $(r, "class", "option-label svelte-c4460r"), $(e, "class", "option-container svelte-c4460r"), $(n, "class", "option-body svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(m, g) {
      yt(m, d, g), Y(d, e), Y(e, h), h.checked = /*splitSources*/
      B[8], Y(e, c), Y(e, r), Y(d, a), Y(d, n), o || (p = It(
        h,
        "change",
        /*input_change_handler_2*/
        B[29]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*splitSources*/
      256 && (h.checked = /*splitSources*/
      m[8]);
    },
    d(m) {
      m && wt(d), o = !1, p();
    }
  };
}
function Pn(B) {
  let d, e, h, c, r, a;
  return e = new fe({}), {
    c() {
      d = nt("a"), he(e.$$.fragment), h = Ct(" Download Template (.ZIP)"), $(d, "class", "button primary large download-button svelte-c4460r"), $(d, "href", "");
    },
    m(n, o) {
      yt(n, d, o), Ae(e, d, null), Y(d, h), c = !0, r || (a = It(d, "click", Zt(
        /*generate*/
        B[17]
      )), r = !0);
    },
    p: Ft,
    i(n) {
      c || (Dt(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && wt(d), de(e), r = !1, a();
    }
  };
}
function Jn(B) {
  let d, e, h, c;
  return e = new fe({}), {
    c() {
      d = nt("a"), he(e.$$.fragment), h = Ct(" Generating..."), $(d, "class", "button primary download-button svelte-c4460r"), $(d, "href", "");
    },
    m(r, a) {
      yt(r, d, a), Ae(e, d, null), Y(d, h), c = !0;
    },
    p: Ft,
    i(r) {
      c || (Dt(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Ut(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && wt(d), de(e);
    }
  };
}
function Yn(B) {
  let d, e, h, c;
  return {
    c() {
      d = nt("p"), e = Ct(`Loading data
    
        
        `), h = nt("span"), c = Ct("..."), _t(h, "font-family", Nt);
    },
    m(r, a) {
      yt(r, d, a), Y(d, e), Y(d, h), Y(h, c);
    },
    p: Ft,
    i: Ft,
    o: Ft,
    d(r) {
      r && wt(d);
    }
  };
}
function Xn(B) {
  let d, e, h = {
    ctx: B,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Yn,
    then: Mn,
    catch: jn,
    value: 31,
    error: 35,
    blocks: [, , ,]
  };
  return Fe(
    /*versions*/
    B[16],
    h
  ), {
    c() {
      d = Re(), h.block.c();
    },
    m(c, r) {
      yt(c, d, r), h.block.m(c, h.anchor = r), h.mount = () => d.parentNode, h.anchor = d, e = !0;
    },
    p(c, r) {
      B = c, Oe(h, B, r);
    },
    i(c) {
      e || (Dt(h.block), e = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const a = h.blocks[r];
        Ut(a);
      }
      e = !1;
    },
    d(c) {
      c && wt(d), h.block.d(c), h.token = null, h = null;
    }
  };
}
function Hn(B, d, e) {
  let h, c, r, a, n, o, p, m, g = "Template Mod", v = "com.example", l = !1, b = !0, s = !1, f = !0, u, w = !1;
  const E = Promise.all([Ee()]).then(([V]) => (e(0, m = V.find((F) => F.stable).version), { game: V }));
  function T(V) {
    if (V !== void 0)
      return je(V, u === void 0);
  }
  async function O() {
    if (n !== void 0 || u !== void 0 && o !== void 0 || p.length > 0)
      return;
    e(9, w = !0);
    const V = await Promise.resolve().then(() => Ln), F = {
      modid: u ?? h,
      minecraftVersion: m,
      projectName: g,
      packageName: v,
      useKotlin: l,
      mojmap: b || a,
      dataGeneration: s && c,
      splitSources: f && r,
      uniqueModIcon: !0
    }, Z = new He();
    await V.generateTemplate({
      config: F,
      writer: {
        write: async (x, I, q) => {
          Z.file(x, I, {
            unixPermissions: q != null && q.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(x, I) {
          const q = document.createElement("canvas");
          return q.width = x, q.height = I, {
            getContext: (P) => q.getContext(P),
            getPng: () => Lt(q.toDataURL().split(";base64,")[1]),
            measureText(P, H) {
              const ct = P.measureText(H);
              return {
                width: ct.width,
                ascent: ct.actualBoundingBoxAscent,
                descent: ct.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Ke.saveAs(await Z.generateAsync({ type: "blob", platform: "UNIX" }), `${h}-template-${F.minecraftVersion}.zip`), e(9, w = !1);
  }
  function z() {
    e(1, g = g.trim());
  }
  function Q() {
    e(2, v = Me(v));
  }
  function J() {
    e(3, u = h);
  }
  function D() {
    e(3, u = void 0);
  }
  function X() {
    g = this.value, e(1, g);
  }
  function rt() {
    u = this.value, e(3, u);
  }
  function k() {
    v = this.value, e(2, v);
  }
  function N() {
    m = Te(this), e(0, m), e(16, E);
  }
  function i() {
    l = this.checked, e(5, l);
  }
  function L() {
    b = this.checked, e(6, b);
  }
  function it() {
    s = this.checked, e(7, s);
  }
  function C() {
    f = this.checked, e(8, f);
  }
  return B.$$.update = () => {
    B.$$.dirty[0] & /*projectName*/
    2 && e(4, h = Qe(g)), B.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, c = ze(m || "1.99")), B.$$.dirty[0] & /*minecraftVersion*/
    1 && e(10, r = Ge(m || "1.99")), B.$$.dirty[0] & /*minecraftVersion*/
    1 && e(12, a = me(m || "1.99")), B.$$.dirty[0] & /*modid*/
    16 && e(15, n = T(h)), B.$$.dirty[0] & /*customModId*/
    8 && e(14, o = Le(u)), B.$$.dirty[0] & /*packageName*/
    4 && e(13, p = gn(v));
  }, [
    m,
    g,
    v,
    u,
    h,
    l,
    b,
    s,
    f,
    w,
    r,
    c,
    a,
    p,
    o,
    n,
    E,
    O,
    z,
    Q,
    J,
    D,
    X,
    rt,
    k,
    N,
    i,
    L,
    it,
    C
  ];
}
class er extends Se {
  constructor(d) {
    super(), Ie(this, d, Hn, Xn, Be, {}, null, [-1, -1]);
  }
}
export {
  er as default
};

import { S as Te, i as Be, s as Oe, h as Le, b as Ve, c as kt, u as _e, o as Pt, p as zt, d as Et, q as Ue, e as et, t as Ft, a as ot, f as Gt, g as W, n as _t, k as K, r as Ge, C as Ut, l as qt, m as It, D as je, E as De, j as Ht, B as me, A as Xt, y as Kt, v as ge, w as be, x as ve } from "./index.4deac2e0.js";
import ye from "./DownloadIcon.39c279f6.js";
import { g as Me, a as Pe, b as ze, m as Qe, c as we, d as ke, e as Ee, n as We, f as Ze, s as He } from "./minecraft.13f4fc12.js";
import { d as Je, b as Xe, h as Ye, i as Ke, j as qe } from "./Api.fd2c0b6d.js";
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ce(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
function Zt(E) {
  throw new Error('Could not dynamically require "' + E + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var xe = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(E, c) {
  (function(e) {
    E.exports = e();
  })(function() {
    return function e(d, u, r) {
      function a(p, m) {
        if (!u[p]) {
          if (!d[p]) {
            var g = typeof Zt == "function" && Zt;
            if (!m && g)
              return g(p, !0);
            if (n)
              return n(p, !0);
            var v = new Error("Cannot find module '" + p + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var l = u[p] = { exports: {} };
          d[p][0].call(l.exports, function(b) {
            var s = d[p][1][b];
            return a(s || b);
          }, l, l.exports, e, d, u, r);
        }
        return u[p].exports;
      }
      for (var n = typeof Zt == "function" && Zt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, d, u) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      u.encode = function(o) {
        for (var p, m, g, v, l, b, s, f = [], h = 0, w = o.length, C = w, B = r.getTypeOf(o) !== "string"; h < o.length; )
          C = w - h, g = B ? (p = o[h++], m = h < w ? o[h++] : 0, h < w ? o[h++] : 0) : (p = o.charCodeAt(h++), m = h < w ? o.charCodeAt(h++) : 0, h < w ? o.charCodeAt(h++) : 0), v = p >> 2, l = (3 & p) << 4 | m >> 4, b = 1 < C ? (15 & m) << 2 | g >> 6 : 64, s = 2 < C ? 63 & g : 64, f.push(n.charAt(v) + n.charAt(l) + n.charAt(b) + n.charAt(s));
        return f.join("");
      }, u.decode = function(o) {
        var p, m, g, v, l, b, s = 0, f = 0, h = "data:";
        if (o.substr(0, h.length) === h)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, C = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && C--, o.charAt(o.length - 2) === n.charAt(64) && C--, C % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | C) : new Array(0 | C); s < o.length; )
          p = n.indexOf(o.charAt(s++)) << 2 | (v = n.indexOf(o.charAt(s++))) >> 4, m = (15 & v) << 4 | (l = n.indexOf(o.charAt(s++))) >> 2, g = (3 & l) << 6 | (b = n.indexOf(o.charAt(s++))), w[f++] = p, l !== 64 && (w[f++] = m), b !== 64 && (w[f++] = g);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, d, u) {
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
      }, d.exports = p;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, d, u) {
      var r = e("./stream/GenericWorker");
      u.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, u.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, d, u) {
      var r = e("./utils"), a = function() {
        for (var n, o = [], p = 0; p < 256; p++) {
          n = p;
          for (var m = 0; m < 8; m++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          o[p] = n;
        }
        return o;
      }();
      d.exports = function(n, o) {
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
    }, { "./utils": 32 }], 5: [function(e, d, u) {
      u.base64 = !1, u.binary = !1, u.dir = !1, u.createFolders = !0, u.date = null, u.compression = null, u.compressionOptions = null, u.comment = null, u.unixPermissions = null, u.dosPermissions = null;
    }, {}], 6: [function(e, d, u) {
      var r = null;
      r = typeof Promise < "u" ? Promise : e("lie"), d.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(e, d, u) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), n = e("./utils"), o = e("./stream/GenericWorker"), p = r ? "uint8array" : "array";
      function m(g, v) {
        o.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = v, this.meta = {};
      }
      u.magic = "\b\0", n.inherits(m, o), m.prototype.processChunk = function(g) {
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
      }, u.compressWorker = function(g) {
        return new m("Deflate", g);
      }, u.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, d, u) {
      function r(l, b) {
        var s, f = "";
        for (s = 0; s < b; s++)
          f += String.fromCharCode(255 & l), l >>>= 8;
        return f;
      }
      function a(l, b, s, f, h, w) {
        var C, B, N = l.file, G = l.compression, _ = w !== p.utf8encode, J = n.transformTo("string", w(N.name)), V = n.transformTo("string", p.utf8encode(N.name)), Y = N.comment, rt = n.transformTo("string", w(Y)), k = n.transformTo("string", p.utf8encode(Y)), L = V.length !== N.name.length, i = k.length !== Y.length, D = "", it = "", S = "", U = N.dir, F = N.date, z = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !s || (z.crc32 = l.crc32, z.compressedSize = l.compressedSize, z.uncompressedSize = l.uncompressedSize);
        var x = 0;
        b && (x |= 8), _ || !L && !i || (x |= 2048);
        var I = 0, q = 0;
        U && (I |= 16), h === "UNIX" ? (q = 798, I |= function(X, lt) {
          var ft = X;
          return X || (ft = lt ? 16893 : 33204), (65535 & ft) << 16;
        }(N.unixPermissions, U)) : (q = 20, I |= function(X) {
          return 63 & (X || 0);
        }(N.dosPermissions)), C = F.getUTCHours(), C <<= 6, C |= F.getUTCMinutes(), C <<= 5, C |= F.getUTCSeconds() / 2, B = F.getUTCFullYear() - 1980, B <<= 4, B |= F.getUTCMonth() + 1, B <<= 5, B |= F.getUTCDate(), L && (it = r(1, 1) + r(m(J), 4) + V, D += "up" + r(it.length, 2) + it), i && (S = r(1, 1) + r(m(rt), 4) + k, D += "uc" + r(S.length, 2) + S);
        var Z = "";
        return Z += `
\0`, Z += r(x, 2), Z += G.magic, Z += r(C, 2), Z += r(B, 2), Z += r(z.crc32, 4), Z += r(z.compressedSize, 4), Z += r(z.uncompressedSize, 4), Z += r(J.length, 2), Z += r(D.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + Z + J + D, dirRecord: g.CENTRAL_FILE_HEADER + r(q, 2) + Z + r(rt.length, 2) + "\0\0\0\0" + r(I, 4) + r(f, 4) + J + D + rt };
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
        var s = this.bytesWritten - l, f = function(h, w, C, B, N) {
          var G = n.transformTo("string", N(B));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(h, 2) + r(h, 2) + r(w, 4) + r(C, 4) + r(G.length, 2) + G;
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
      }, d.exports = v;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, d, u) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      u.generateWorker = function(n, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), g = 0;
        try {
          n.forEach(function(v, l) {
            g++;
            var b = function(w, C) {
              var B = w || C, N = r[B];
              if (!N)
                throw new Error(B + " is not a valid compression method !");
              return N;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, f = l.dir, h = l.date;
            l._compressWorker(b, s).withStreamInfo("file", { name: v, dir: f, date: h, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = g;
        } catch (v) {
          m.error(v);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, d, u) {
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
      }, r.external = e("./external"), d.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, d, u) {
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
      d.exports = function(v, l) {
        var b = this;
        return l = r.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(v) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", v, !0, l.optimizedBinaryString, l.base64).then(function(s) {
          var f = new o(l);
          return f.load(s), f;
        }).then(function(s) {
          var f = [a.Promise.resolve(s)], h = s.files;
          if (l.checkCRC32)
            for (var w = 0; w < h.length; w++)
              f.push(g(h[w]));
          return a.Promise.all(f);
        }).then(function(s) {
          for (var f = s.shift(), h = f.files, w = 0; w < h.length; w++) {
            var C = h[w], B = C.fileNameStr, N = r.resolve(C.fileNameStr);
            b.file(N, C.decompressed, { binary: !0, optimizedBinaryString: !0, date: C.date, dir: C.dir, comment: C.fileCommentStr.length ? C.fileCommentStr : null, unixPermissions: C.unixPermissions, dosPermissions: C.dosPermissions, createFolders: l.createFolders }), C.dir || (b.file(N).unsafeOriginalName = B);
          }
          return f.zipComment.length && (b.comment = f.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, d, u) {
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
      }, d.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, d, u) {
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
      }, d.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, d, u) {
      d.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, a) {
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
    }, {}], 15: [function(e, d, u) {
      function r(N, G, _) {
        var J, V = n.getTypeOf(G), Y = n.extend(_ || {}, m);
        Y.date = Y.date || /* @__PURE__ */ new Date(), Y.compression !== null && (Y.compression = Y.compression.toUpperCase()), typeof Y.unixPermissions == "string" && (Y.unixPermissions = parseInt(Y.unixPermissions, 8)), Y.unixPermissions && 16384 & Y.unixPermissions && (Y.dir = !0), Y.dosPermissions && 16 & Y.dosPermissions && (Y.dir = !0), Y.dir && (N = h(N)), Y.createFolders && (J = f(N)) && w.call(this, J, !0);
        var rt = V === "string" && Y.binary === !1 && Y.base64 === !1;
        _ && _.binary !== void 0 || (Y.binary = !rt), (G instanceof g && G.uncompressedSize === 0 || Y.dir || !G || G.length === 0) && (Y.base64 = !1, Y.binary = !0, G = "", Y.compression = "STORE", V = "string");
        var k = null;
        k = G instanceof g || G instanceof o ? G : b.isNode && b.isStream(G) ? new s(N, G) : n.prepareContent(N, G, Y.binary, Y.optimizedBinaryString, Y.base64);
        var L = new v(N, k, Y);
        this.files[N] = L;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), g = e("./compressedObject"), v = e("./zipObject"), l = e("./generate"), b = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), f = function(N) {
        N.slice(-1) === "/" && (N = N.substring(0, N.length - 1));
        var G = N.lastIndexOf("/");
        return 0 < G ? N.substring(0, G) : "";
      }, h = function(N) {
        return N.slice(-1) !== "/" && (N += "/"), N;
      }, w = function(N, G) {
        return G = G !== void 0 ? G : m.createFolders, N = h(N), this.files[N] || r.call(this, N, null, { dir: !0, createFolders: G }), this.files[N];
      };
      function C(N) {
        return Object.prototype.toString.call(N) === "[object RegExp]";
      }
      var B = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(N) {
        var G, _, J;
        for (G in this.files)
          J = this.files[G], (_ = G.slice(this.root.length, G.length)) && G.slice(0, this.root.length) === this.root && N(_, J);
      }, filter: function(N) {
        var G = [];
        return this.forEach(function(_, J) {
          N(_, J) && G.push(J);
        }), G;
      }, file: function(N, G, _) {
        if (arguments.length !== 1)
          return N = this.root + N, r.call(this, N, G, _), this;
        if (C(N)) {
          var J = N;
          return this.filter(function(Y, rt) {
            return !rt.dir && J.test(Y);
          });
        }
        var V = this.files[this.root + N];
        return V && !V.dir ? V : null;
      }, folder: function(N) {
        if (!N)
          return this;
        if (C(N))
          return this.filter(function(V, Y) {
            return Y.dir && N.test(V);
          });
        var G = this.root + N, _ = w.call(this, G), J = this.clone();
        return J.root = _.name, J;
      }, remove: function(N) {
        N = this.root + N;
        var G = this.files[N];
        if (G || (N.slice(-1) !== "/" && (N += "/"), G = this.files[N]), G && !G.dir)
          delete this.files[N];
        else
          for (var _ = this.filter(function(V, Y) {
            return Y.name.slice(0, N.length) === N;
          }), J = 0; J < _.length; J++)
            delete this.files[_[J].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(N) {
        var G, _ = {};
        try {
          if ((_ = n.extend(N || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = _.type.toLowerCase(), _.compression = _.compression.toUpperCase(), _.type === "binarystring" && (_.type = "string"), !_.type)
            throw new Error("No output type specified.");
          n.checkSupport(_.type), _.platform !== "darwin" && _.platform !== "freebsd" && _.platform !== "linux" && _.platform !== "sunos" || (_.platform = "UNIX"), _.platform === "win32" && (_.platform = "DOS");
          var J = _.comment || this.comment || "";
          G = l.generateWorker(this, _, J);
        } catch (V) {
          (G = new o("error")).error(V);
        }
        return new p(G, _.type || "string", _.mimeType);
      }, generateAsync: function(N, G) {
        return this.generateInternalStream(N).accumulate(G);
      }, generateNodeStream: function(N, G) {
        return (N = N || {}).type || (N.type = "nodebuffer"), this.generateInternalStream(N).toNodejsStream(G);
      } };
      d.exports = B;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, d, u) {
      d.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, d, u) {
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
      }, d.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, d, u) {
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
      } }, d.exports = a;
    }, { "../utils": 32 }], 19: [function(e, d, u) {
      var r = e("./Uint8ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        this.checkOffset(n);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, d.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, d, u) {
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
      }, d.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, d, u) {
      var r = e("./ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, d.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, d, u) {
      var r = e("../utils"), a = e("../support"), n = e("./ArrayReader"), o = e("./StringReader"), p = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      d.exports = function(g) {
        var v = r.getTypeOf(g);
        return r.checkSupport(v), v !== "string" || a.uint8array ? v === "nodebuffer" ? new p(g) : a.uint8array ? new m(r.transformTo("uint8array", g)) : new n(r.transformTo("array", g)) : new o(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, d, u) {
      u.LOCAL_FILE_HEADER = "PK", u.CENTRAL_FILE_HEADER = "PK", u.CENTRAL_DIRECTORY_END = "PK", u.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", u.ZIP64_CENTRAL_DIRECTORY_END = "PK", u.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, d, u) {
      var r = e("./GenericWorker"), a = e("../utils");
      function n(o) {
        r.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      a.inherits(n, r), n.prototype.processChunk = function(o) {
        this.push({ data: a.transformTo(this.destType, o.data), meta: o.meta });
      }, d.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, d, u) {
      var r = e("./GenericWorker"), a = e("../crc32");
      function n() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(n, r), n.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = a(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, d.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, d, u) {
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
      }, d.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, d, u) {
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
      }, d.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, d, u) {
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
      } }, d.exports = r;
    }, {}], 29: [function(e, d, u) {
      var r = e("../utils"), a = e("./ConvertWorker"), n = e("./GenericWorker"), o = e("../base64"), p = e("../support"), m = e("../external"), g = null;
      if (p.nodestream)
        try {
          g = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function v(b, s) {
        return new m.Promise(function(f, h) {
          var w = [], C = b._internalType, B = b._outputType, N = b._mimeType;
          b.on("data", function(G, _) {
            w.push(G), s && s(_);
          }).on("error", function(G) {
            w = [], h(G);
          }).on("end", function() {
            try {
              var G = function(_, J, V) {
                switch (_) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", J), V);
                  case "base64":
                    return o.encode(J);
                  default:
                    return r.transformTo(_, J);
                }
              }(B, function(_, J) {
                var V, Y = 0, rt = null, k = 0;
                for (V = 0; V < J.length; V++)
                  k += J[V].length;
                switch (_) {
                  case "string":
                    return J.join("");
                  case "array":
                    return Array.prototype.concat.apply([], J);
                  case "uint8array":
                    for (rt = new Uint8Array(k), V = 0; V < J.length; V++)
                      rt.set(J[V], Y), Y += J[V].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(J);
                  default:
                    throw new Error("concat : unsupported type '" + _ + "'");
                }
              }(C, w), N);
              f(G);
            } catch (_) {
              h(_);
            }
            w = [];
          }).resume();
        });
      }
      function l(b, s, f) {
        var h = s;
        switch (s) {
          case "blob":
          case "arraybuffer":
            h = "uint8array";
            break;
          case "base64":
            h = "string";
        }
        try {
          this._internalType = h, this._outputType = s, this._mimeType = f, r.checkSupport(h), this._worker = b.pipe(new a(h)), b.lock();
        } catch (w) {
          this._worker = new n("error"), this._worker.error(w);
        }
      }
      l.prototype = { accumulate: function(b) {
        return v(this, b);
      }, on: function(b, s) {
        var f = this;
        return b === "data" ? this._worker.on(b, function(h) {
          s.call(f, h.data, h.meta);
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
      } }, d.exports = l;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, d, u) {
      if (u.base64 = !0, u.array = !0, u.string = !0, u.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", u.nodebuffer = typeof Buffer < "u", u.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        u.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          u.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(r), u.blob = a.getBlob("application/zip").size === 0;
          } catch {
            u.blob = !1;
          }
        }
      }
      try {
        u.nodestream = !!e("readable-stream").Readable;
      } catch {
        u.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, d, u) {
      for (var r = e("./utils"), a = e("./support"), n = e("./nodejsUtils"), o = e("./stream/GenericWorker"), p = new Array(256), m = 0; m < 256; m++)
        p[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      p[254] = p[254] = 1;
      function g() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        o.call(this, "utf-8 encode");
      }
      u.utf8encode = function(l) {
        return a.nodebuffer ? n.newBufferFrom(l, "utf-8") : function(b) {
          var s, f, h, w, C, B = b.length, N = 0;
          for (w = 0; w < B; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < B && (64512 & (h = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), w++), N += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(N) : new Array(N), w = C = 0; C < N; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < B && (64512 & (h = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), w++), f < 128 ? s[C++] = f : (f < 2048 ? s[C++] = 192 | f >>> 6 : (f < 65536 ? s[C++] = 224 | f >>> 12 : (s[C++] = 240 | f >>> 18, s[C++] = 128 | f >>> 12 & 63), s[C++] = 128 | f >>> 6 & 63), s[C++] = 128 | 63 & f);
          return s;
        }(l);
      }, u.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(b) {
          var s, f, h, w, C = b.length, B = new Array(2 * C);
          for (s = f = 0; s < C; )
            if ((h = b[s++]) < 128)
              B[f++] = h;
            else if (4 < (w = p[h]))
              B[f++] = 65533, s += w - 1;
            else {
              for (h &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < C; )
                h = h << 6 | 63 & b[s++], w--;
              1 < w ? B[f++] = 65533 : h < 65536 ? B[f++] = h : (h -= 65536, B[f++] = 55296 | h >> 10 & 1023, B[f++] = 56320 | 1023 & h);
            }
          return B.length !== f && (B.subarray ? B = B.subarray(0, f) : B.length = f), r.applyFromCharCode(B);
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
        var f = function(w, C) {
          var B;
          for ((C = C || w.length) > w.length && (C = w.length), B = C - 1; 0 <= B && (192 & w[B]) == 128; )
            B--;
          return B < 0 || B === 0 ? C : B + p[w[B]] > C ? B : C;
        }(b), h = b;
        f !== b.length && (a.uint8array ? (h = b.subarray(0, f), this.leftOver = b.subarray(f, b.length)) : (h = b.slice(0, f), this.leftOver = b.slice(f, b.length))), this.push({ data: u.utf8decode(h), meta: l.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: u.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, u.Utf8DecodeWorker = g, r.inherits(v, o), v.prototype.processChunk = function(l) {
        this.push({ data: u.utf8encode(l.data), meta: l.meta });
      }, u.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, d, u) {
      var r = e("./support"), a = e("./base64"), n = e("./nodejsUtils"), o = e("./external");
      function p(s) {
        return s;
      }
      function m(s, f) {
        for (var h = 0; h < s.length; ++h)
          f[h] = 255 & s.charCodeAt(h);
        return f;
      }
      e("setimmediate"), u.newBlob = function(s, f) {
        u.checkSupport("blob");
        try {
          return new Blob([s], { type: f });
        } catch {
          try {
            var h = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return h.append(s), h.getBlob(f);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(s, f, h) {
        var w = [], C = 0, B = s.length;
        if (B <= h)
          return String.fromCharCode.apply(null, s);
        for (; C < B; )
          f === "array" || f === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(C, Math.min(C + h, B)))) : w.push(String.fromCharCode.apply(null, s.subarray(C, Math.min(C + h, B)))), C += h;
        return w.join("");
      }, stringifyByChar: function(s) {
        for (var f = "", h = 0; h < s.length; h++)
          f += String.fromCharCode(s[h]);
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
        var f = 65536, h = u.getTypeOf(s), w = !0;
        if (h === "uint8array" ? w = g.applyCanBeUsed.uint8array : h === "nodebuffer" && (w = g.applyCanBeUsed.nodebuffer), w)
          for (; 1 < f; )
            try {
              return g.stringifyByChunk(s, h, f);
            } catch {
              f = Math.floor(f / 2);
            }
        return g.stringifyByChar(s);
      }
      function l(s, f) {
        for (var h = 0; h < s.length; h++)
          f[h] = s[h];
        return f;
      }
      u.applyFromCharCode = v;
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
      }, nodebuffer: p }, u.transformTo = function(s, f) {
        if (f = f || "", !s)
          return f;
        u.checkSupport(s);
        var h = u.getTypeOf(f);
        return b[h][s](f);
      }, u.resolve = function(s) {
        for (var f = s.split("/"), h = [], w = 0; w < f.length; w++) {
          var C = f[w];
          C === "." || C === "" && w !== 0 && w !== f.length - 1 || (C === ".." ? h.pop() : h.push(C));
        }
        return h.join("/");
      }, u.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, u.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, u.MAX_VALUE_16BITS = 65535, u.MAX_VALUE_32BITS = -1, u.pretty = function(s) {
        var f, h, w = "";
        for (h = 0; h < (s || "").length; h++)
          w += "\\x" + ((f = s.charCodeAt(h)) < 16 ? "0" : "") + f.toString(16).toUpperCase();
        return w;
      }, u.delay = function(s, f, h) {
        setImmediate(function() {
          s.apply(h || null, f || []);
        });
      }, u.inherits = function(s, f) {
        function h() {
        }
        h.prototype = f.prototype, s.prototype = new h();
      }, u.extend = function() {
        var s, f, h = {};
        for (s = 0; s < arguments.length; s++)
          for (f in arguments[s])
            Object.prototype.hasOwnProperty.call(arguments[s], f) && h[f] === void 0 && (h[f] = arguments[s][f]);
        return h;
      }, u.prepareContent = function(s, f, h, w, C) {
        return o.Promise.resolve(f).then(function(B) {
          return r.blob && (B instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(B)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(N, G) {
            var _ = new FileReader();
            _.onload = function(J) {
              N(J.target.result);
            }, _.onerror = function(J) {
              G(J.target.error);
            }, _.readAsArrayBuffer(B);
          }) : B;
        }).then(function(B) {
          var N = u.getTypeOf(B);
          return N ? (N === "arraybuffer" ? B = u.transformTo("uint8array", B) : N === "string" && (C ? B = a.decode(B) : h && w !== !0 && (B = function(G) {
            return m(G, r.uint8array ? new Uint8Array(G.length) : new Array(G.length));
          }(B))), B) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, d, u) {
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
      } }, d.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, d, u) {
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
          for (var h in m)
            if (Object.prototype.hasOwnProperty.call(m, h) && m[h].magic === f)
              return m[h];
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
        var b, s, f, h = l.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); l.index + 4 < h; )
          b = l.readInt(2), s = l.readInt(2), f = l.readData(s), this.extraFields[b] = { id: b, length: s, value: f };
        l.setIndex(h);
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
            var h = a.transformTo(l, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(h);
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
      } }, d.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, d, u) {
      function r(b, s, f) {
        this.name = b, this.dir = f.dir, this.date = f.date, this.comment = f.comment, this.unixPermissions = f.unixPermissions, this.dosPermissions = f.dosPermissions, this._data = s, this._dataBinary = f.binary, this.options = { compression: f.compression, compressionOptions: f.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), o = e("./utf8"), p = e("./compressedObject"), m = e("./stream/GenericWorker");
      r.prototype = { internalStream: function(b) {
        var s = null, f = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var h = (f = b.toLowerCase()) === "string" || f === "text";
          f !== "binarystring" && f !== "text" || (f = "string"), s = this._decompressWorker();
          var w = !this._dataBinary;
          w && !h && (s = s.pipe(new o.Utf8EncodeWorker())), !w && h && (s = s.pipe(new o.Utf8DecodeWorker()));
        } catch (C) {
          (s = new m("error")).error(C);
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
      d.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, d, u) {
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
          for (var h = l.length; h; ) {
            for (f = l, l = [], s = -1; ++s < h; )
              f[s]();
            h = l.length;
          }
          n = !1;
        }
        d.exports = function(s) {
          l.push(s) !== 1 || n || a();
        };
      }).call(this, typeof Vt < "u" ? Vt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, d, u) {
      var r = e("immediate");
      function a() {
      }
      var n = {}, o = ["REJECTED"], p = ["FULFILLED"], m = ["PENDING"];
      function g(h) {
        if (typeof h != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, h !== a && s(this, h);
      }
      function v(h, w, C) {
        this.promise = h, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      function l(h, w, C) {
        r(function() {
          var B;
          try {
            B = w(C);
          } catch (N) {
            return n.reject(h, N);
          }
          B === h ? n.reject(h, new TypeError("Cannot resolve promise with itself")) : n.resolve(h, B);
        });
      }
      function b(h) {
        var w = h && h.then;
        if (h && (typeof h == "object" || typeof h == "function") && typeof w == "function")
          return function() {
            w.apply(h, arguments);
          };
      }
      function s(h, w) {
        var C = !1;
        function B(_) {
          C || (C = !0, n.reject(h, _));
        }
        function N(_) {
          C || (C = !0, n.resolve(h, _));
        }
        var G = f(function() {
          w(N, B);
        });
        G.status === "error" && B(G.value);
      }
      function f(h, w) {
        var C = {};
        try {
          C.value = h(w), C.status = "success";
        } catch (B) {
          C.status = "error", C.value = B;
        }
        return C;
      }
      (d.exports = g).prototype.finally = function(h) {
        if (typeof h != "function")
          return this;
        var w = this.constructor;
        return this.then(function(C) {
          return w.resolve(h()).then(function() {
            return C;
          });
        }, function(C) {
          return w.resolve(h()).then(function() {
            throw C;
          });
        });
      }, g.prototype.catch = function(h) {
        return this.then(null, h);
      }, g.prototype.then = function(h, w) {
        if (typeof h != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var C = new this.constructor(a);
        return this.state !== m ? l(C, this.state === p ? h : w, this.outcome) : this.queue.push(new v(C, h, w)), C;
      }, v.prototype.callFulfilled = function(h) {
        n.resolve(this.promise, h);
      }, v.prototype.otherCallFulfilled = function(h) {
        l(this.promise, this.onFulfilled, h);
      }, v.prototype.callRejected = function(h) {
        n.reject(this.promise, h);
      }, v.prototype.otherCallRejected = function(h) {
        l(this.promise, this.onRejected, h);
      }, n.resolve = function(h, w) {
        var C = f(b, w);
        if (C.status === "error")
          return n.reject(h, C.value);
        var B = C.value;
        if (B)
          s(h, B);
        else {
          h.state = p, h.outcome = w;
          for (var N = -1, G = h.queue.length; ++N < G; )
            h.queue[N].callFulfilled(w);
        }
        return h;
      }, n.reject = function(h, w) {
        h.state = o, h.outcome = w;
        for (var C = -1, B = h.queue.length; ++C < B; )
          h.queue[C].callRejected(w);
        return h;
      }, g.resolve = function(h) {
        return h instanceof this ? h : n.resolve(new this(a), h);
      }, g.reject = function(h) {
        var w = new this(a);
        return n.reject(w, h);
      }, g.all = function(h) {
        var w = this;
        if (Object.prototype.toString.call(h) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = h.length, B = !1;
        if (!C)
          return this.resolve([]);
        for (var N = new Array(C), G = 0, _ = -1, J = new this(a); ++_ < C; )
          V(h[_], _);
        return J;
        function V(Y, rt) {
          w.resolve(Y).then(function(k) {
            N[rt] = k, ++G !== C || B || (B = !0, n.resolve(J, N));
          }, function(k) {
            B || (B = !0, n.reject(J, k));
          });
        }
      }, g.race = function(h) {
        var w = this;
        if (Object.prototype.toString.call(h) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = h.length, B = !1;
        if (!C)
          return this.resolve([]);
        for (var N = -1, G = new this(a); ++N < C; )
          _ = h[N], w.resolve(_).then(function(J) {
            B || (B = !0, n.resolve(G, J));
          }, function(J) {
            B || (B = !0, n.reject(G, J));
          });
        var _;
        return G;
      };
    }, { immediate: 36 }], 38: [function(e, d, u) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), d.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, d, u) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, g = 0, v = -1, l = 0, b = 8;
      function s(h) {
        if (!(this instanceof s))
          return new s(h);
        this.options = a.assign({ level: v, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, h || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var C = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (C !== g)
          throw new Error(o[C]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var B;
          if (B = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (C = r.deflateSetDictionary(this.strm, B)) !== g)
            throw new Error(o[C]);
          this._dict_set = !0;
        }
      }
      function f(h, w) {
        var C = new s(w);
        if (C.push(h, !0), C.err)
          throw C.msg || o[C.err];
        return C.result;
      }
      s.prototype.push = function(h, w) {
        var C, B, N = this.strm, G = this.options.chunkSize;
        if (this.ended)
          return !1;
        B = w === ~~w ? w : w === !0 ? 4 : 0, typeof h == "string" ? N.input = n.string2buf(h) : m.call(h) === "[object ArrayBuffer]" ? N.input = new Uint8Array(h) : N.input = h, N.next_in = 0, N.avail_in = N.input.length;
        do {
          if (N.avail_out === 0 && (N.output = new a.Buf8(G), N.next_out = 0, N.avail_out = G), (C = r.deflate(N, B)) !== 1 && C !== g)
            return this.onEnd(C), !(this.ended = !0);
          N.avail_out !== 0 && (N.avail_in !== 0 || B !== 4 && B !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(N.output, N.next_out))) : this.onData(a.shrinkBuf(N.output, N.next_out)));
        } while ((0 < N.avail_in || N.avail_out === 0) && C !== 1);
        return B === 4 ? (C = r.deflateEnd(this.strm), this.onEnd(C), this.ended = !0, C === g) : B !== 2 || (this.onEnd(g), !(N.avail_out = 0));
      }, s.prototype.onData = function(h) {
        this.chunks.push(h);
      }, s.prototype.onEnd = function(h) {
        h === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
      }, u.Deflate = s, u.deflate = f, u.deflateRaw = function(h, w) {
        return (w = w || {}).raw = !0, f(h, w);
      }, u.gzip = function(h, w) {
        return (w = w || {}).gzip = !0, f(h, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, d, u) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), g = e("./zlib/gzheader"), v = Object.prototype.toString;
      function l(s) {
        if (!(this instanceof l))
          return new l(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var f = this.options;
        f.raw && 0 <= f.windowBits && f.windowBits < 16 && (f.windowBits = -f.windowBits, f.windowBits === 0 && (f.windowBits = -15)), !(0 <= f.windowBits && f.windowBits < 16) || s && s.windowBits || (f.windowBits += 32), 15 < f.windowBits && f.windowBits < 48 && !(15 & f.windowBits) && (f.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var h = r.inflateInit2(this.strm, f.windowBits);
        if (h !== o.Z_OK)
          throw new Error(p[h]);
        this.header = new g(), r.inflateGetHeader(this.strm, this.header);
      }
      function b(s, f) {
        var h = new l(f);
        if (h.push(s, !0), h.err)
          throw h.msg || p[h.err];
        return h.result;
      }
      l.prototype.push = function(s, f) {
        var h, w, C, B, N, G, _ = this.strm, J = this.options.chunkSize, V = this.options.dictionary, Y = !1;
        if (this.ended)
          return !1;
        w = f === ~~f ? f : f === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? _.input = n.binstring2buf(s) : v.call(s) === "[object ArrayBuffer]" ? _.input = new Uint8Array(s) : _.input = s, _.next_in = 0, _.avail_in = _.input.length;
        do {
          if (_.avail_out === 0 && (_.output = new a.Buf8(J), _.next_out = 0, _.avail_out = J), (h = r.inflate(_, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && V && (G = typeof V == "string" ? n.string2buf(V) : v.call(V) === "[object ArrayBuffer]" ? new Uint8Array(V) : V, h = r.inflateSetDictionary(this.strm, G)), h === o.Z_BUF_ERROR && Y === !0 && (h = o.Z_OK, Y = !1), h !== o.Z_STREAM_END && h !== o.Z_OK)
            return this.onEnd(h), !(this.ended = !0);
          _.next_out && (_.avail_out !== 0 && h !== o.Z_STREAM_END && (_.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (C = n.utf8border(_.output, _.next_out), B = _.next_out - C, N = n.buf2string(_.output, C), _.next_out = B, _.avail_out = J - B, B && a.arraySet(_.output, _.output, C, B, 0), this.onData(N)) : this.onData(a.shrinkBuf(_.output, _.next_out)))), _.avail_in === 0 && _.avail_out === 0 && (Y = !0);
        } while ((0 < _.avail_in || _.avail_out === 0) && h !== o.Z_STREAM_END);
        return h === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (h = r.inflateEnd(this.strm), this.onEnd(h), this.ended = !0, h === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(_.avail_out = 0));
      }, l.prototype.onData = function(s) {
        this.chunks.push(s);
      }, l.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, u.Inflate = l, u.inflate = b, u.inflateRaw = function(s, f) {
        return (f = f || {}).raw = !0, b(s, f);
      }, u.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, d, u) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      u.assign = function(o) {
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
      }, u.shrinkBuf = function(o, p) {
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
      u.setTyped = function(o) {
        o ? (u.Buf8 = Uint8Array, u.Buf16 = Uint16Array, u.Buf32 = Int32Array, u.assign(u, a)) : (u.Buf8 = Array, u.Buf16 = Array, u.Buf32 = Array, u.assign(u, n));
      }, u.setTyped(r);
    }, {}], 42: [function(e, d, u) {
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
      o[254] = o[254] = 1, u.string2buf = function(g) {
        var v, l, b, s, f, h = g.length, w = 0;
        for (s = 0; s < h; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < h && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), w += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (v = new r.Buf8(w), s = f = 0; f < w; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < h && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), l < 128 ? v[f++] = l : (l < 2048 ? v[f++] = 192 | l >>> 6 : (l < 65536 ? v[f++] = 224 | l >>> 12 : (v[f++] = 240 | l >>> 18, v[f++] = 128 | l >>> 12 & 63), v[f++] = 128 | l >>> 6 & 63), v[f++] = 128 | 63 & l);
        return v;
      }, u.buf2binstring = function(g) {
        return m(g, g.length);
      }, u.binstring2buf = function(g) {
        for (var v = new r.Buf8(g.length), l = 0, b = v.length; l < b; l++)
          v[l] = g.charCodeAt(l);
        return v;
      }, u.buf2string = function(g, v) {
        var l, b, s, f, h = v || g.length, w = new Array(2 * h);
        for (l = b = 0; l < h; )
          if ((s = g[l++]) < 128)
            w[b++] = s;
          else if (4 < (f = o[s]))
            w[b++] = 65533, l += f - 1;
          else {
            for (s &= f === 2 ? 31 : f === 3 ? 15 : 7; 1 < f && l < h; )
              s = s << 6 | 63 & g[l++], f--;
            1 < f ? w[b++] = 65533 : s < 65536 ? w[b++] = s : (s -= 65536, w[b++] = 55296 | s >> 10 & 1023, w[b++] = 56320 | 1023 & s);
          }
        return m(w, b);
      }, u.utf8border = function(g, v) {
        var l;
        for ((v = v || g.length) > g.length && (v = g.length), l = v - 1; 0 <= l && (192 & g[l]) == 128; )
          l--;
        return l < 0 || l === 0 ? v : l + o[g[l]] > v ? l : v;
      };
    }, { "./common": 41 }], 43: [function(e, d, u) {
      d.exports = function(r, a, n, o) {
        for (var p = 65535 & r | 0, m = r >>> 16 & 65535 | 0, g = 0; n !== 0; ) {
          for (n -= g = 2e3 < n ? 2e3 : n; m = m + (p = p + a[o++] | 0) | 0, --g; )
            ;
          p %= 65521, m %= 65521;
        }
        return p | m << 16 | 0;
      };
    }, {}], 44: [function(e, d, u) {
      d.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, d, u) {
      var r = function() {
        for (var a, n = [], o = 0; o < 256; o++) {
          a = o;
          for (var p = 0; p < 8; p++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          n[o] = a;
        }
        return n;
      }();
      d.exports = function(a, n, o, p) {
        var m = r, g = p + o;
        a ^= -1;
        for (var v = p; v < g; v++)
          a = a >>> 8 ^ m[255 & (a ^ n[v])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, d, u) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), g = 0, v = 4, l = 0, b = -2, s = -1, f = 4, h = 2, w = 8, C = 9, B = 286, N = 30, G = 19, _ = 2 * B + 1, J = 15, V = 3, Y = 258, rt = Y + V + 1, k = 42, L = 113, i = 1, D = 2, it = 3, S = 4;
      function U(t, j) {
        return t.msg = m[j], j;
      }
      function F(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function z(t) {
        for (var j = t.length; 0 <= --j; )
          t[j] = 0;
      }
      function x(t) {
        var j = t.state, O = j.pending;
        O > t.avail_out && (O = t.avail_out), O !== 0 && (a.arraySet(t.output, j.pending_buf, j.pending_out, O, t.next_out), t.next_out += O, j.pending_out += O, t.total_out += O, t.avail_out -= O, j.pending -= O, j.pending === 0 && (j.pending_out = 0));
      }
      function I(t, j) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, j), t.block_start = t.strstart, x(t.strm);
      }
      function q(t, j) {
        t.pending_buf[t.pending++] = j;
      }
      function Z(t, j) {
        t.pending_buf[t.pending++] = j >>> 8 & 255, t.pending_buf[t.pending++] = 255 & j;
      }
      function X(t, j) {
        var O, y, A = t.max_chain_length, R = t.strstart, M = t.prev_length, P = t.nice_match, T = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, Q = t.window, $ = t.w_mask, H = t.prev, nt = t.strstart + Y, At = Q[R + M - 1], ct = Q[R + M];
        t.prev_length >= t.good_match && (A >>= 2), P > t.lookahead && (P = t.lookahead);
        do
          if (Q[(O = j) + M] === ct && Q[O + M - 1] === At && Q[O] === Q[R] && Q[++O] === Q[R + 1]) {
            R += 2, O++;
            do
              ;
            while (Q[++R] === Q[++O] && Q[++R] === Q[++O] && Q[++R] === Q[++O] && Q[++R] === Q[++O] && Q[++R] === Q[++O] && Q[++R] === Q[++O] && Q[++R] === Q[++O] && Q[++R] === Q[++O] && R < nt);
            if (y = Y - (nt - R), R = nt - Y, M < y) {
              if (t.match_start = j, P <= (M = y))
                break;
              At = Q[R + M - 1], ct = Q[R + M];
            }
          }
        while ((j = H[j & $]) > T && --A != 0);
        return M <= t.lookahead ? M : t.lookahead;
      }
      function lt(t) {
        var j, O, y, A, R, M, P, T, Q, $, H = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= H + (H - rt)) {
            for (a.arraySet(t.window, t.window, H, H, 0), t.match_start -= H, t.strstart -= H, t.block_start -= H, j = O = t.hash_size; y = t.head[--j], t.head[j] = H <= y ? y - H : 0, --O; )
              ;
            for (j = O = H; y = t.prev[--j], t.prev[j] = H <= y ? y - H : 0, --O; )
              ;
            A += H;
          }
          if (t.strm.avail_in === 0)
            break;
          if (M = t.strm, P = t.window, T = t.strstart + t.lookahead, Q = A, $ = void 0, $ = M.avail_in, Q < $ && ($ = Q), O = $ === 0 ? 0 : (M.avail_in -= $, a.arraySet(P, M.input, M.next_in, $, T), M.state.wrap === 1 ? M.adler = o(M.adler, P, $, T) : M.state.wrap === 2 && (M.adler = p(M.adler, P, $, T)), M.next_in += $, M.total_in += $, $), t.lookahead += O, t.lookahead + t.insert >= V)
            for (R = t.strstart - t.insert, t.ins_h = t.window[R], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[R + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[R + V - 1]) & t.hash_mask, t.prev[R & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = R, R++, t.insert--, !(t.lookahead + t.insert < V)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function ft(t, j) {
        for (var O, y; ; ) {
          if (t.lookahead < rt) {
            if (lt(t), t.lookahead < rt && j === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (O = 0, t.lookahead >= V && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), O !== 0 && t.strstart - O <= t.w_size - rt && (t.match_length = X(t, O)), t.match_length >= V)
            if (y = n._tr_tally(t, t.strstart - t.match_start, t.match_length - V), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= V) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            y = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (y && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < V - 1 ? t.strstart : V - 1, j === v ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : D;
      }
      function at(t, j) {
        for (var O, y, A; ; ) {
          if (t.lookahead < rt) {
            if (lt(t), t.lookahead < rt && j === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (O = 0, t.lookahead >= V && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = V - 1, O !== 0 && t.prev_length < t.max_lazy_match && t.strstart - O <= t.w_size - rt && (t.match_length = X(t, O), t.match_length <= 5 && (t.strategy === 1 || t.match_length === V && 4096 < t.strstart - t.match_start) && (t.match_length = V - 1)), t.prev_length >= V && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - V, y = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - V), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = V - 1, t.strstart++, y && (I(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((y = n._tr_tally(t, 0, t.window[t.strstart - 1])) && I(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (y = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < V - 1 ? t.strstart : V - 1, j === v ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : D;
      }
      function st(t, j, O, y, A) {
        this.good_length = t, this.max_lazy = j, this.nice_length = O, this.max_chain = y, this.func = A;
      }
      function bt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * _), this.dyn_dtree = new a.Buf16(2 * (2 * N + 1)), this.bl_tree = new a.Buf16(2 * (2 * G + 1)), z(this.dyn_ltree), z(this.dyn_dtree), z(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(J + 1), this.heap = new a.Buf16(2 * B + 1), z(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * B + 1), z(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function dt(t) {
        var j;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = h, (j = t.state).pending = 0, j.pending_out = 0, j.wrap < 0 && (j.wrap = -j.wrap), j.status = j.wrap ? k : L, t.adler = j.wrap === 2 ? 0 : 1, j.last_flush = g, n._tr_init(j), l) : U(t, b);
      }
      function ht(t) {
        var j = dt(t);
        return j === l && function(O) {
          O.window_size = 2 * O.w_size, z(O.head), O.max_lazy_match = r[O.level].max_lazy, O.good_match = r[O.level].good_length, O.nice_match = r[O.level].nice_length, O.max_chain_length = r[O.level].max_chain, O.strstart = 0, O.block_start = 0, O.lookahead = 0, O.insert = 0, O.match_length = O.prev_length = V - 1, O.match_available = 0, O.ins_h = 0;
        }(t.state), j;
      }
      function yt(t, j, O, y, A, R) {
        if (!t)
          return b;
        var M = 1;
        if (j === s && (j = 6), y < 0 ? (M = 0, y = -y) : 15 < y && (M = 2, y -= 16), A < 1 || C < A || O !== w || y < 8 || 15 < y || j < 0 || 9 < j || R < 0 || f < R)
          return U(t, b);
        y === 8 && (y = 9);
        var P = new bt();
        return (t.state = P).strm = t, P.wrap = M, P.gzhead = null, P.w_bits = y, P.w_size = 1 << P.w_bits, P.w_mask = P.w_size - 1, P.hash_bits = A + 7, P.hash_size = 1 << P.hash_bits, P.hash_mask = P.hash_size - 1, P.hash_shift = ~~((P.hash_bits + V - 1) / V), P.window = new a.Buf8(2 * P.w_size), P.head = new a.Buf16(P.hash_size), P.prev = new a.Buf16(P.w_size), P.lit_bufsize = 1 << A + 6, P.pending_buf_size = 4 * P.lit_bufsize, P.pending_buf = new a.Buf8(P.pending_buf_size), P.d_buf = 1 * P.lit_bufsize, P.l_buf = 3 * P.lit_bufsize, P.level = j, P.strategy = R, P.method = O, ht(t);
      }
      r = [new st(0, 0, 0, 0, function(t, j) {
        var O = 65535;
        for (O > t.pending_buf_size - 5 && (O = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (lt(t), t.lookahead === 0 && j === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var y = t.block_start + O;
          if ((t.strstart === 0 || t.strstart >= y) && (t.lookahead = t.strstart - y, t.strstart = y, I(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, j === v ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : (t.strstart > t.block_start && (I(t, !1), t.strm.avail_out), i);
      }), new st(4, 4, 8, 4, ft), new st(4, 5, 16, 8, ft), new st(4, 6, 32, 32, ft), new st(4, 4, 16, 16, at), new st(8, 16, 32, 32, at), new st(8, 16, 128, 128, at), new st(8, 32, 128, 256, at), new st(32, 128, 258, 1024, at), new st(32, 258, 258, 4096, at)], u.deflateInit = function(t, j) {
        return yt(t, j, w, 15, 8, 0);
      }, u.deflateInit2 = yt, u.deflateReset = ht, u.deflateResetKeep = dt, u.deflateSetHeader = function(t, j) {
        return t && t.state ? t.state.wrap !== 2 ? b : (t.state.gzhead = j, l) : b;
      }, u.deflate = function(t, j) {
        var O, y, A, R;
        if (!t || !t.state || 5 < j || j < 0)
          return t ? U(t, b) : b;
        if (y = t.state, !t.output || !t.input && t.avail_in !== 0 || y.status === 666 && j !== v)
          return U(t, t.avail_out === 0 ? -5 : b);
        if (y.strm = t, O = y.last_flush, y.last_flush = j, y.status === k)
          if (y.wrap === 2)
            t.adler = 0, q(y, 31), q(y, 139), q(y, 8), y.gzhead ? (q(y, (y.gzhead.text ? 1 : 0) + (y.gzhead.hcrc ? 2 : 0) + (y.gzhead.extra ? 4 : 0) + (y.gzhead.name ? 8 : 0) + (y.gzhead.comment ? 16 : 0)), q(y, 255 & y.gzhead.time), q(y, y.gzhead.time >> 8 & 255), q(y, y.gzhead.time >> 16 & 255), q(y, y.gzhead.time >> 24 & 255), q(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), q(y, 255 & y.gzhead.os), y.gzhead.extra && y.gzhead.extra.length && (q(y, 255 & y.gzhead.extra.length), q(y, y.gzhead.extra.length >> 8 & 255)), y.gzhead.hcrc && (t.adler = p(t.adler, y.pending_buf, y.pending, 0)), y.gzindex = 0, y.status = 69) : (q(y, 0), q(y, 0), q(y, 0), q(y, 0), q(y, 0), q(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), q(y, 3), y.status = L);
          else {
            var M = w + (y.w_bits - 8 << 4) << 8;
            M |= (2 <= y.strategy || y.level < 2 ? 0 : y.level < 6 ? 1 : y.level === 6 ? 2 : 3) << 6, y.strstart !== 0 && (M |= 32), M += 31 - M % 31, y.status = L, Z(y, M), y.strstart !== 0 && (Z(y, t.adler >>> 16), Z(y, 65535 & t.adler)), t.adler = 1;
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
                R = 1;
                break;
              }
              R = y.gzindex < y.gzhead.name.length ? 255 & y.gzhead.name.charCodeAt(y.gzindex++) : 0, q(y, R);
            } while (R !== 0);
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), R === 0 && (y.gzindex = 0, y.status = 91);
          } else
            y.status = 91;
        if (y.status === 91)
          if (y.gzhead.comment) {
            A = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), x(t), A = y.pending, y.pending === y.pending_buf_size)) {
                R = 1;
                break;
              }
              R = y.gzindex < y.gzhead.comment.length ? 255 & y.gzhead.comment.charCodeAt(y.gzindex++) : 0, q(y, R);
            } while (R !== 0);
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), R === 0 && (y.status = 103);
          } else
            y.status = 103;
        if (y.status === 103 && (y.gzhead.hcrc ? (y.pending + 2 > y.pending_buf_size && x(t), y.pending + 2 <= y.pending_buf_size && (q(y, 255 & t.adler), q(y, t.adler >> 8 & 255), t.adler = 0, y.status = L)) : y.status = L), y.pending !== 0) {
          if (x(t), t.avail_out === 0)
            return y.last_flush = -1, l;
        } else if (t.avail_in === 0 && F(j) <= F(O) && j !== v)
          return U(t, -5);
        if (y.status === 666 && t.avail_in !== 0)
          return U(t, -5);
        if (t.avail_in !== 0 || y.lookahead !== 0 || j !== g && y.status !== 666) {
          var P = y.strategy === 2 ? function(T, Q) {
            for (var $; ; ) {
              if (T.lookahead === 0 && (lt(T), T.lookahead === 0)) {
                if (Q === g)
                  return i;
                break;
              }
              if (T.match_length = 0, $ = n._tr_tally(T, 0, T.window[T.strstart]), T.lookahead--, T.strstart++, $ && (I(T, !1), T.strm.avail_out === 0))
                return i;
            }
            return T.insert = 0, Q === v ? (I(T, !0), T.strm.avail_out === 0 ? it : S) : T.last_lit && (I(T, !1), T.strm.avail_out === 0) ? i : D;
          }(y, j) : y.strategy === 3 ? function(T, Q) {
            for (var $, H, nt, At, ct = T.window; ; ) {
              if (T.lookahead <= Y) {
                if (lt(T), T.lookahead <= Y && Q === g)
                  return i;
                if (T.lookahead === 0)
                  break;
              }
              if (T.match_length = 0, T.lookahead >= V && 0 < T.strstart && (H = ct[nt = T.strstart - 1]) === ct[++nt] && H === ct[++nt] && H === ct[++nt]) {
                At = T.strstart + Y;
                do
                  ;
                while (H === ct[++nt] && H === ct[++nt] && H === ct[++nt] && H === ct[++nt] && H === ct[++nt] && H === ct[++nt] && H === ct[++nt] && H === ct[++nt] && nt < At);
                T.match_length = Y - (At - nt), T.match_length > T.lookahead && (T.match_length = T.lookahead);
              }
              if (T.match_length >= V ? ($ = n._tr_tally(T, 1, T.match_length - V), T.lookahead -= T.match_length, T.strstart += T.match_length, T.match_length = 0) : ($ = n._tr_tally(T, 0, T.window[T.strstart]), T.lookahead--, T.strstart++), $ && (I(T, !1), T.strm.avail_out === 0))
                return i;
            }
            return T.insert = 0, Q === v ? (I(T, !0), T.strm.avail_out === 0 ? it : S) : T.last_lit && (I(T, !1), T.strm.avail_out === 0) ? i : D;
          }(y, j) : r[y.level].func(y, j);
          if (P !== it && P !== S || (y.status = 666), P === i || P === it)
            return t.avail_out === 0 && (y.last_flush = -1), l;
          if (P === D && (j === 1 ? n._tr_align(y) : j !== 5 && (n._tr_stored_block(y, 0, 0, !1), j === 3 && (z(y.head), y.lookahead === 0 && (y.strstart = 0, y.block_start = 0, y.insert = 0))), x(t), t.avail_out === 0))
            return y.last_flush = -1, l;
        }
        return j !== v ? l : y.wrap <= 0 ? 1 : (y.wrap === 2 ? (q(y, 255 & t.adler), q(y, t.adler >> 8 & 255), q(y, t.adler >> 16 & 255), q(y, t.adler >> 24 & 255), q(y, 255 & t.total_in), q(y, t.total_in >> 8 & 255), q(y, t.total_in >> 16 & 255), q(y, t.total_in >> 24 & 255)) : (Z(y, t.adler >>> 16), Z(y, 65535 & t.adler)), x(t), 0 < y.wrap && (y.wrap = -y.wrap), y.pending !== 0 ? l : 1);
      }, u.deflateEnd = function(t) {
        var j;
        return t && t.state ? (j = t.state.status) !== k && j !== 69 && j !== 73 && j !== 91 && j !== 103 && j !== L && j !== 666 ? U(t, b) : (t.state = null, j === L ? U(t, -3) : l) : b;
      }, u.deflateSetDictionary = function(t, j) {
        var O, y, A, R, M, P, T, Q, $ = j.length;
        if (!t || !t.state || (R = (O = t.state).wrap) === 2 || R === 1 && O.status !== k || O.lookahead)
          return b;
        for (R === 1 && (t.adler = o(t.adler, j, $, 0)), O.wrap = 0, $ >= O.w_size && (R === 0 && (z(O.head), O.strstart = 0, O.block_start = 0, O.insert = 0), Q = new a.Buf8(O.w_size), a.arraySet(Q, j, $ - O.w_size, O.w_size, 0), j = Q, $ = O.w_size), M = t.avail_in, P = t.next_in, T = t.input, t.avail_in = $, t.next_in = 0, t.input = j, lt(O); O.lookahead >= V; ) {
          for (y = O.strstart, A = O.lookahead - (V - 1); O.ins_h = (O.ins_h << O.hash_shift ^ O.window[y + V - 1]) & O.hash_mask, O.prev[y & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = y, y++, --A; )
            ;
          O.strstart = y, O.lookahead = V - 1, lt(O);
        }
        return O.strstart += O.lookahead, O.block_start = O.strstart, O.insert = O.lookahead, O.lookahead = 0, O.match_length = O.prev_length = V - 1, O.match_available = 0, t.next_in = P, t.input = T, t.avail_in = M, O.wrap = R, l;
      }, u.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, d, u) {
      d.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, d, u) {
      d.exports = function(r, a) {
        var n, o, p, m, g, v, l, b, s, f, h, w, C, B, N, G, _, J, V, Y, rt, k, L, i, D;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, D = r.output, g = m - (a - r.avail_out), v = m + (r.avail_out - 257), l = n.dmax, b = n.wsize, s = n.whave, f = n.wnext, h = n.window, w = n.hold, C = n.bits, B = n.lencode, N = n.distcode, G = (1 << n.lenbits) - 1, _ = (1 << n.distbits) - 1;
        t:
          do {
            C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), J = B[w & G];
            e:
              for (; ; ) {
                if (w >>>= V = J >>> 24, C -= V, (V = J >>> 16 & 255) === 0)
                  D[m++] = 65535 & J;
                else {
                  if (!(16 & V)) {
                    if (!(64 & V)) {
                      J = B[(65535 & J) + (w & (1 << V) - 1)];
                      continue e;
                    }
                    if (32 & V) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  Y = 65535 & J, (V &= 15) && (C < V && (w += i[o++] << C, C += 8), Y += w & (1 << V) - 1, w >>>= V, C -= V), C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), J = N[w & _];
                  n:
                    for (; ; ) {
                      if (w >>>= V = J >>> 24, C -= V, !(16 & (V = J >>> 16 & 255))) {
                        if (!(64 & V)) {
                          J = N[(65535 & J) + (w & (1 << V) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & J, C < (V &= 15) && (w += i[o++] << C, (C += 8) < V && (w += i[o++] << C, C += 8)), l < (rt += w & (1 << V) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= V, C -= V, (V = m - g) < rt) {
                        if (s < (V = rt - V) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (L = h, (k = 0) === f) {
                          if (k += b - V, V < Y) {
                            for (Y -= V; D[m++] = h[k++], --V; )
                              ;
                            k = m - rt, L = D;
                          }
                        } else if (f < V) {
                          if (k += b + f - V, (V -= f) < Y) {
                            for (Y -= V; D[m++] = h[k++], --V; )
                              ;
                            if (k = 0, f < Y) {
                              for (Y -= V = f; D[m++] = h[k++], --V; )
                                ;
                              k = m - rt, L = D;
                            }
                          }
                        } else if (k += f - V, V < Y) {
                          for (Y -= V; D[m++] = h[k++], --V; )
                            ;
                          k = m - rt, L = D;
                        }
                        for (; 2 < Y; )
                          D[m++] = L[k++], D[m++] = L[k++], D[m++] = L[k++], Y -= 3;
                        Y && (D[m++] = L[k++], 1 < Y && (D[m++] = L[k++]));
                      } else {
                        for (k = m - rt; D[m++] = D[k++], D[m++] = D[k++], D[m++] = D[k++], 2 < (Y -= 3); )
                          ;
                        Y && (D[m++] = D[k++], 1 < Y && (D[m++] = D[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < v);
        o -= Y = C >> 3, w &= (1 << (C -= Y << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < v ? v - m + 257 : 257 - (m - v), n.hold = w, n.bits = C;
      };
    }, {}], 49: [function(e, d, u) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, g = 2, v = 0, l = -2, b = 1, s = 852, f = 592;
      function h(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function C(k) {
        var L;
        return k && k.state ? (L = k.state, k.total_in = k.total_out = L.total = 0, k.msg = "", L.wrap && (k.adler = 1 & L.wrap), L.mode = b, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new r.Buf32(s), L.distcode = L.distdyn = new r.Buf32(f), L.sane = 1, L.back = -1, v) : l;
      }
      function B(k) {
        var L;
        return k && k.state ? ((L = k.state).wsize = 0, L.whave = 0, L.wnext = 0, C(k)) : l;
      }
      function N(k, L) {
        var i, D;
        return k && k.state ? (D = k.state, L < 0 ? (i = 0, L = -L) : (i = 1 + (L >> 4), L < 48 && (L &= 15)), L && (L < 8 || 15 < L) ? l : (D.window !== null && D.wbits !== L && (D.window = null), D.wrap = i, D.wbits = L, B(k))) : l;
      }
      function G(k, L) {
        var i, D;
        return k ? (D = new w(), (k.state = D).window = null, (i = N(k, L)) !== v && (k.state = null), i) : l;
      }
      var _, J, V = !0;
      function Y(k) {
        if (V) {
          var L;
          for (_ = new r.Buf32(512), J = new r.Buf32(32), L = 0; L < 144; )
            k.lens[L++] = 8;
          for (; L < 256; )
            k.lens[L++] = 9;
          for (; L < 280; )
            k.lens[L++] = 7;
          for (; L < 288; )
            k.lens[L++] = 8;
          for (p(m, k.lens, 0, 288, _, 0, k.work, { bits: 9 }), L = 0; L < 32; )
            k.lens[L++] = 5;
          p(g, k.lens, 0, 32, J, 0, k.work, { bits: 5 }), V = !1;
        }
        k.lencode = _, k.lenbits = 9, k.distcode = J, k.distbits = 5;
      }
      function rt(k, L, i, D) {
        var it, S = k.state;
        return S.window === null && (S.wsize = 1 << S.wbits, S.wnext = 0, S.whave = 0, S.window = new r.Buf8(S.wsize)), D >= S.wsize ? (r.arraySet(S.window, L, i - S.wsize, S.wsize, 0), S.wnext = 0, S.whave = S.wsize) : (D < (it = S.wsize - S.wnext) && (it = D), r.arraySet(S.window, L, i - D, it, S.wnext), (D -= it) ? (r.arraySet(S.window, L, i - D, D, 0), S.wnext = D, S.whave = S.wsize) : (S.wnext += it, S.wnext === S.wsize && (S.wnext = 0), S.whave < S.wsize && (S.whave += it))), 0;
      }
      u.inflateReset = B, u.inflateReset2 = N, u.inflateResetKeep = C, u.inflateInit = function(k) {
        return G(k, 15);
      }, u.inflateInit2 = G, u.inflate = function(k, L) {
        var i, D, it, S, U, F, z, x, I, q, Z, X, lt, ft, at, st, bt, dt, ht, yt, t, j, O, y, A = 0, R = new r.Buf8(4), M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), U = k.next_out, it = k.output, z = k.avail_out, S = k.next_in, D = k.input, F = k.avail_in, x = i.hold, I = i.bits, q = F, Z = z, j = v;
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
                  F--, x += D[S++] << I, I += 8;
                }
                if (2 & i.wrap && x === 35615) {
                  R[i.check = 0] = 255 & x, R[1] = x >>> 8 & 255, i.check = n(i.check, R, 2, 0), I = x = 0, i.mode = 2;
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
                  F--, x += D[S++] << I, I += 8;
                }
                if (i.flags = x, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = x >> 8 & 1), 512 & i.flags && (R[0] = 255 & x, R[1] = x >>> 8 & 255, i.check = n(i.check, R, 2, 0)), I = x = 0, i.mode = 3;
              case 3:
                for (; I < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += D[S++] << I, I += 8;
                }
                i.head && (i.head.time = x), 512 & i.flags && (R[0] = 255 & x, R[1] = x >>> 8 & 255, R[2] = x >>> 16 & 255, R[3] = x >>> 24 & 255, i.check = n(i.check, R, 4, 0)), I = x = 0, i.mode = 4;
              case 4:
                for (; I < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += D[S++] << I, I += 8;
                }
                i.head && (i.head.xflags = 255 & x, i.head.os = x >> 8), 512 & i.flags && (R[0] = 255 & x, R[1] = x >>> 8 & 255, i.check = n(i.check, R, 2, 0)), I = x = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; I < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += D[S++] << I, I += 8;
                  }
                  i.length = x, i.head && (i.head.extra_len = x), 512 & i.flags && (R[0] = 255 & x, R[1] = x >>> 8 & 255, i.check = n(i.check, R, 2, 0)), I = x = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (F < (X = i.length) && (X = F), X && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, D, S, X, t)), 512 & i.flags && (i.check = n(i.check, D, X, S)), F -= X, S += X, i.length -= X), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = D[S + X++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, D, X, S)), F -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = D[S + X++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, D, X, S)), F -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; I < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += D[S++] << I, I += 8;
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
                  F--, x += D[S++] << I, I += 8;
                }
                k.adler = i.check = h(x), I = x = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = U, k.avail_out = z, k.next_in = S, k.avail_in = F, i.hold = x, i.bits = I, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (L === 5 || L === 6)
                  break t;
              case 13:
                if (i.last) {
                  x >>>= 7 & I, I -= 7 & I, i.mode = 27;
                  break;
                }
                for (; I < 3; ) {
                  if (F === 0)
                    break t;
                  F--, x += D[S++] << I, I += 8;
                }
                switch (i.last = 1 & x, I -= 1, 3 & (x >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (Y(i), i.mode = 20, L !== 6)
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
                  F--, x += D[S++] << I, I += 8;
                }
                if ((65535 & x) != (x >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & x, I = x = 0, i.mode = 15, L === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (X = i.length) {
                  if (F < X && (X = F), z < X && (X = z), X === 0)
                    break t;
                  r.arraySet(it, D, S, X, U), F -= X, S += X, z -= X, U += X, i.length -= X;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; I < 14; ) {
                  if (F === 0)
                    break t;
                  F--, x += D[S++] << I, I += 8;
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
                    F--, x += D[S++] << I, I += 8;
                  }
                  i.lens[M[i.have++]] = 7 & x, x >>>= 3, I -= 3;
                }
                for (; i.have < 19; )
                  i.lens[M[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, O = { bits: i.lenbits }, j = p(0, i.lens, 0, 19, i.lencode, 0, i.work, O), i.lenbits = O.bits, j) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; st = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, bt = 65535 & A, !((at = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += D[S++] << I, I += 8;
                  }
                  if (bt < 16)
                    x >>>= at, I -= at, i.lens[i.have++] = bt;
                  else {
                    if (bt === 16) {
                      for (y = at + 2; I < y; ) {
                        if (F === 0)
                          break t;
                        F--, x += D[S++] << I, I += 8;
                      }
                      if (x >>>= at, I -= at, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], X = 3 + (3 & x), x >>>= 2, I -= 2;
                    } else if (bt === 17) {
                      for (y = at + 3; I < y; ) {
                        if (F === 0)
                          break t;
                        F--, x += D[S++] << I, I += 8;
                      }
                      I -= at, t = 0, X = 3 + (7 & (x >>>= at)), x >>>= 3, I -= 3;
                    } else {
                      for (y = at + 7; I < y; ) {
                        if (F === 0)
                          break t;
                        F--, x += D[S++] << I, I += 8;
                      }
                      I -= at, t = 0, X = 11 + (127 & (x >>>= at)), x >>>= 7, I -= 7;
                    }
                    if (i.have + X > i.nlen + i.ndist) {
                      k.msg = "invalid bit length repeat", i.mode = 30;
                      break;
                    }
                    for (; X--; )
                      i.lens[i.have++] = t;
                  }
                }
                if (i.mode === 30)
                  break;
                if (i.lens[256] === 0) {
                  k.msg = "invalid code -- missing end-of-block", i.mode = 30;
                  break;
                }
                if (i.lenbits = 9, O = { bits: i.lenbits }, j = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, O), i.lenbits = O.bits, j) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, O = { bits: i.distbits }, j = p(g, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, O), i.distbits = O.bits, j) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, L === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= F && 258 <= z) {
                  k.next_out = U, k.avail_out = z, k.next_in = S, k.avail_in = F, i.hold = x, i.bits = I, o(k, Z), U = k.next_out, it = k.output, z = k.avail_out, S = k.next_in, D = k.input, F = k.avail_in, x = i.hold, I = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; st = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, bt = 65535 & A, !((at = A >>> 24) <= I); ) {
                  if (F === 0)
                    break t;
                  F--, x += D[S++] << I, I += 8;
                }
                if (st && !(240 & st)) {
                  for (dt = at, ht = st, yt = bt; st = (A = i.lencode[yt + ((x & (1 << dt + ht) - 1) >> dt)]) >>> 16 & 255, bt = 65535 & A, !(dt + (at = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += D[S++] << I, I += 8;
                  }
                  x >>>= dt, I -= dt, i.back += dt;
                }
                if (x >>>= at, I -= at, i.back += at, i.length = bt, st === 0) {
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
                    F--, x += D[S++] << I, I += 8;
                  }
                  i.length += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; st = (A = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255, bt = 65535 & A, !((at = A >>> 24) <= I); ) {
                  if (F === 0)
                    break t;
                  F--, x += D[S++] << I, I += 8;
                }
                if (!(240 & st)) {
                  for (dt = at, ht = st, yt = bt; st = (A = i.distcode[yt + ((x & (1 << dt + ht) - 1) >> dt)]) >>> 16 & 255, bt = 65535 & A, !(dt + (at = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += D[S++] << I, I += 8;
                  }
                  x >>>= dt, I -= dt, i.back += dt;
                }
                if (x >>>= at, I -= at, i.back += at, 64 & st) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = bt, i.extra = 15 & st, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (y = i.extra; I < y; ) {
                    if (F === 0)
                      break t;
                    F--, x += D[S++] << I, I += 8;
                  }
                  i.offset += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (z === 0)
                  break t;
                if (X = Z - z, i.offset > X) {
                  if ((X = i.offset - X) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  lt = X > i.wnext ? (X -= i.wnext, i.wsize - X) : i.wnext - X, X > i.length && (X = i.length), ft = i.window;
                } else
                  ft = it, lt = U - i.offset, X = i.length;
                for (z < X && (X = z), z -= X, i.length -= X; it[U++] = ft[lt++], --X; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (z === 0)
                  break t;
                it[U++] = i.length, z--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; I < 32; ) {
                    if (F === 0)
                      break t;
                    F--, x |= D[S++] << I, I += 8;
                  }
                  if (Z -= z, k.total_out += Z, i.total += Z, Z && (k.adler = i.check = i.flags ? n(i.check, it, Z, U - Z) : a(i.check, it, Z, U - Z)), Z = z, (i.flags ? x : h(x)) !== i.check) {
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
                    F--, x += D[S++] << I, I += 8;
                  }
                  if (x !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 29;
              case 29:
                j = 1;
                break t;
              case 30:
                j = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = U, k.avail_out = z, k.next_in = S, k.avail_in = F, i.hold = x, i.bits = I, (i.wsize || Z !== k.avail_out && i.mode < 30 && (i.mode < 27 || L !== 4)) && rt(k, k.output, k.next_out, Z - k.avail_out) ? (i.mode = 31, -4) : (q -= k.avail_in, Z -= k.avail_out, k.total_in += q, k.total_out += Z, i.total += Z, i.wrap && Z && (k.adler = i.check = i.flags ? n(i.check, it, Z, k.next_out - Z) : a(i.check, it, Z, k.next_out - Z)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (q == 0 && Z === 0 || L === 4) && j === v && (j = -5), j);
      }, u.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var L = k.state;
        return L.window && (L.window = null), k.state = null, v;
      }, u.inflateGetHeader = function(k, L) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = L).done = !1, v) : l;
      }, u.inflateSetDictionary = function(k, L) {
        var i, D = L.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, L, D, 0) !== i.check ? -3 : rt(k, L, D, D) ? (i.mode = 31, -4) : (i.havedict = 1, v) : l;
      }, u.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, d, u) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      d.exports = function(m, g, v, l, b, s, f, h) {
        var w, C, B, N, G, _, J, V, Y, rt = h.bits, k = 0, L = 0, i = 0, D = 0, it = 0, S = 0, U = 0, F = 0, z = 0, x = 0, I = null, q = 0, Z = new r.Buf16(16), X = new r.Buf16(16), lt = null, ft = 0;
        for (k = 0; k <= 15; k++)
          Z[k] = 0;
        for (L = 0; L < l; L++)
          Z[g[v + L]]++;
        for (it = rt, D = 15; 1 <= D && Z[D] === 0; D--)
          ;
        if (D < it && (it = D), D === 0)
          return b[s++] = 20971520, b[s++] = 20971520, h.bits = 1, 0;
        for (i = 1; i < D && Z[i] === 0; i++)
          ;
        for (it < i && (it = i), k = F = 1; k <= 15; k++)
          if (F <<= 1, (F -= Z[k]) < 0)
            return -1;
        if (0 < F && (m === 0 || D !== 1))
          return -1;
        for (X[1] = 0, k = 1; k < 15; k++)
          X[k + 1] = X[k] + Z[k];
        for (L = 0; L < l; L++)
          g[v + L] !== 0 && (f[X[g[v + L]]++] = L);
        if (_ = m === 0 ? (I = lt = f, 19) : m === 1 ? (I = a, q -= 257, lt = n, ft -= 257, 256) : (I = o, lt = p, -1), k = i, G = s, U = L = x = 0, B = -1, N = (z = 1 << (S = it)) - 1, m === 1 && 852 < z || m === 2 && 592 < z)
          return 1;
        for (; ; ) {
          for (J = k - U, Y = f[L] < _ ? (V = 0, f[L]) : f[L] > _ ? (V = lt[ft + f[L]], I[q + f[L]]) : (V = 96, 0), w = 1 << k - U, i = C = 1 << S; b[G + (x >> U) + (C -= w)] = J << 24 | V << 16 | Y | 0, C !== 0; )
            ;
          for (w = 1 << k - 1; x & w; )
            w >>= 1;
          if (w !== 0 ? (x &= w - 1, x += w) : x = 0, L++, --Z[k] == 0) {
            if (k === D)
              break;
            k = g[v + f[L]];
          }
          if (it < k && (x & N) !== B) {
            for (U === 0 && (U = it), G += i, F = 1 << (S = k - U); S + U < D && !((F -= Z[S + U]) <= 0); )
              S++, F <<= 1;
            if (z += 1 << S, m === 1 && 852 < z || m === 2 && 592 < z)
              return 1;
            b[B = x & N] = it << 24 | S << 16 | G - s | 0;
          }
        }
        return x !== 0 && (b[G + x] = k - U << 24 | 64 << 16 | 0), h.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, d, u) {
      d.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, d, u) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(A) {
        for (var R = A.length; 0 <= --R; )
          A[R] = 0;
      }
      var p = 0, m = 29, g = 256, v = g + 1 + m, l = 30, b = 19, s = 2 * v + 1, f = 15, h = 16, w = 7, C = 256, B = 16, N = 17, G = 18, _ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], V = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (v + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var L = new Array(512);
      o(L);
      var i = new Array(256);
      o(i);
      var D = new Array(m);
      o(D);
      var it, S, U, F = new Array(l);
      function z(A, R, M, P, T) {
        this.static_tree = A, this.extra_bits = R, this.extra_base = M, this.elems = P, this.max_length = T, this.has_stree = A && A.length;
      }
      function x(A, R) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = R;
      }
      function I(A) {
        return A < 256 ? L[A] : L[256 + (A >>> 7)];
      }
      function q(A, R) {
        A.pending_buf[A.pending++] = 255 & R, A.pending_buf[A.pending++] = R >>> 8 & 255;
      }
      function Z(A, R, M) {
        A.bi_valid > h - M ? (A.bi_buf |= R << A.bi_valid & 65535, q(A, A.bi_buf), A.bi_buf = R >> h - A.bi_valid, A.bi_valid += M - h) : (A.bi_buf |= R << A.bi_valid & 65535, A.bi_valid += M);
      }
      function X(A, R, M) {
        Z(A, M[2 * R], M[2 * R + 1]);
      }
      function lt(A, R) {
        for (var M = 0; M |= 1 & A, A >>>= 1, M <<= 1, 0 < --R; )
          ;
        return M >>> 1;
      }
      function ft(A, R, M) {
        var P, T, Q = new Array(f + 1), $ = 0;
        for (P = 1; P <= f; P++)
          Q[P] = $ = $ + M[P - 1] << 1;
        for (T = 0; T <= R; T++) {
          var H = A[2 * T + 1];
          H !== 0 && (A[2 * T] = lt(Q[H]++, H));
        }
      }
      function at(A) {
        var R;
        for (R = 0; R < v; R++)
          A.dyn_ltree[2 * R] = 0;
        for (R = 0; R < l; R++)
          A.dyn_dtree[2 * R] = 0;
        for (R = 0; R < b; R++)
          A.bl_tree[2 * R] = 0;
        A.dyn_ltree[2 * C] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function st(A) {
        8 < A.bi_valid ? q(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function bt(A, R, M, P) {
        var T = 2 * R, Q = 2 * M;
        return A[T] < A[Q] || A[T] === A[Q] && P[R] <= P[M];
      }
      function dt(A, R, M) {
        for (var P = A.heap[M], T = M << 1; T <= A.heap_len && (T < A.heap_len && bt(R, A.heap[T + 1], A.heap[T], A.depth) && T++, !bt(R, P, A.heap[T], A.depth)); )
          A.heap[M] = A.heap[T], M = T, T <<= 1;
        A.heap[M] = P;
      }
      function ht(A, R, M) {
        var P, T, Q, $, H = 0;
        if (A.last_lit !== 0)
          for (; P = A.pending_buf[A.d_buf + 2 * H] << 8 | A.pending_buf[A.d_buf + 2 * H + 1], T = A.pending_buf[A.l_buf + H], H++, P === 0 ? X(A, T, R) : (X(A, (Q = i[T]) + g + 1, R), ($ = _[Q]) !== 0 && Z(A, T -= D[Q], $), X(A, Q = I(--P), M), ($ = J[Q]) !== 0 && Z(A, P -= F[Q], $)), H < A.last_lit; )
            ;
        X(A, C, R);
      }
      function yt(A, R) {
        var M, P, T, Q = R.dyn_tree, $ = R.stat_desc.static_tree, H = R.stat_desc.has_stree, nt = R.stat_desc.elems, At = -1;
        for (A.heap_len = 0, A.heap_max = s, M = 0; M < nt; M++)
          Q[2 * M] !== 0 ? (A.heap[++A.heap_len] = At = M, A.depth[M] = 0) : Q[2 * M + 1] = 0;
        for (; A.heap_len < 2; )
          Q[2 * (T = A.heap[++A.heap_len] = At < 2 ? ++At : 0)] = 1, A.depth[T] = 0, A.opt_len--, H && (A.static_len -= $[2 * T + 1]);
        for (R.max_code = At, M = A.heap_len >> 1; 1 <= M; M--)
          dt(A, Q, M);
        for (T = nt; M = A.heap[1], A.heap[1] = A.heap[A.heap_len--], dt(A, Q, 1), P = A.heap[1], A.heap[--A.heap_max] = M, A.heap[--A.heap_max] = P, Q[2 * T] = Q[2 * M] + Q[2 * P], A.depth[T] = (A.depth[M] >= A.depth[P] ? A.depth[M] : A.depth[P]) + 1, Q[2 * M + 1] = Q[2 * P + 1] = T, A.heap[1] = T++, dt(A, Q, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(ct, wt) {
          var Ct, mt, Bt, ut, Ot, xt, vt = wt.dyn_tree, St = wt.max_code, Rt = wt.stat_desc.static_tree, Wt = wt.stat_desc.has_stree, Lt = wt.stat_desc.extra_bits, jt = wt.stat_desc.extra_base, tt = wt.stat_desc.max_length, pt = 0;
          for (ut = 0; ut <= f; ut++)
            ct.bl_count[ut] = 0;
          for (vt[2 * ct.heap[ct.heap_max] + 1] = 0, Ct = ct.heap_max + 1; Ct < s; Ct++)
            tt < (ut = vt[2 * vt[2 * (mt = ct.heap[Ct]) + 1] + 1] + 1) && (ut = tt, pt++), vt[2 * mt + 1] = ut, St < mt || (ct.bl_count[ut]++, Ot = 0, jt <= mt && (Ot = Lt[mt - jt]), xt = vt[2 * mt], ct.opt_len += xt * (ut + Ot), Wt && (ct.static_len += xt * (Rt[2 * mt + 1] + Ot)));
          if (pt !== 0) {
            do {
              for (ut = tt - 1; ct.bl_count[ut] === 0; )
                ut--;
              ct.bl_count[ut]--, ct.bl_count[ut + 1] += 2, ct.bl_count[tt]--, pt -= 2;
            } while (0 < pt);
            for (ut = tt; ut !== 0; ut--)
              for (mt = ct.bl_count[ut]; mt !== 0; )
                St < (Bt = ct.heap[--Ct]) || (vt[2 * Bt + 1] !== ut && (ct.opt_len += (ut - vt[2 * Bt + 1]) * vt[2 * Bt], vt[2 * Bt + 1] = ut), mt--);
          }
        }(A, R), ft(Q, At, A.bl_count);
      }
      function t(A, R, M) {
        var P, T, Q = -1, $ = R[1], H = 0, nt = 7, At = 4;
        for ($ === 0 && (nt = 138, At = 3), R[2 * (M + 1) + 1] = 65535, P = 0; P <= M; P++)
          T = $, $ = R[2 * (P + 1) + 1], ++H < nt && T === $ || (H < At ? A.bl_tree[2 * T] += H : T !== 0 ? (T !== Q && A.bl_tree[2 * T]++, A.bl_tree[2 * B]++) : H <= 10 ? A.bl_tree[2 * N]++ : A.bl_tree[2 * G]++, Q = T, At = (H = 0) === $ ? (nt = 138, 3) : T === $ ? (nt = 6, 3) : (nt = 7, 4));
      }
      function j(A, R, M) {
        var P, T, Q = -1, $ = R[1], H = 0, nt = 7, At = 4;
        for ($ === 0 && (nt = 138, At = 3), P = 0; P <= M; P++)
          if (T = $, $ = R[2 * (P + 1) + 1], !(++H < nt && T === $)) {
            if (H < At)
              for (; X(A, T, A.bl_tree), --H != 0; )
                ;
            else
              T !== 0 ? (T !== Q && (X(A, T, A.bl_tree), H--), X(A, B, A.bl_tree), Z(A, H - 3, 2)) : H <= 10 ? (X(A, N, A.bl_tree), Z(A, H - 3, 3)) : (X(A, G, A.bl_tree), Z(A, H - 11, 7));
            Q = T, At = (H = 0) === $ ? (nt = 138, 3) : T === $ ? (nt = 6, 3) : (nt = 7, 4);
          }
      }
      o(F);
      var O = !1;
      function y(A, R, M, P) {
        Z(A, (p << 1) + (P ? 1 : 0), 3), function(T, Q, $, H) {
          st(T), H && (q(T, $), q(T, ~$)), r.arraySet(T.pending_buf, T.window, Q, $, T.pending), T.pending += $;
        }(A, R, M, !0);
      }
      u._tr_init = function(A) {
        O || (function() {
          var R, M, P, T, Q, $ = new Array(f + 1);
          for (T = P = 0; T < m - 1; T++)
            for (D[T] = P, R = 0; R < 1 << _[T]; R++)
              i[P++] = T;
          for (i[P - 1] = T, T = Q = 0; T < 16; T++)
            for (F[T] = Q, R = 0; R < 1 << J[T]; R++)
              L[Q++] = T;
          for (Q >>= 7; T < l; T++)
            for (F[T] = Q << 7, R = 0; R < 1 << J[T] - 7; R++)
              L[256 + Q++] = T;
          for (M = 0; M <= f; M++)
            $[M] = 0;
          for (R = 0; R <= 143; )
            rt[2 * R + 1] = 8, R++, $[8]++;
          for (; R <= 255; )
            rt[2 * R + 1] = 9, R++, $[9]++;
          for (; R <= 279; )
            rt[2 * R + 1] = 7, R++, $[7]++;
          for (; R <= 287; )
            rt[2 * R + 1] = 8, R++, $[8]++;
          for (ft(rt, v + 1, $), R = 0; R < l; R++)
            k[2 * R + 1] = 5, k[2 * R] = lt(R, 5);
          it = new z(rt, _, g + 1, v, f), S = new z(k, J, 0, l, f), U = new z(new Array(0), V, 0, b, w);
        }(), O = !0), A.l_desc = new x(A.dyn_ltree, it), A.d_desc = new x(A.dyn_dtree, S), A.bl_desc = new x(A.bl_tree, U), A.bi_buf = 0, A.bi_valid = 0, at(A);
      }, u._tr_stored_block = y, u._tr_flush_block = function(A, R, M, P) {
        var T, Q, $ = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(H) {
          var nt, At = 4093624447;
          for (nt = 0; nt <= 31; nt++, At >>>= 1)
            if (1 & At && H.dyn_ltree[2 * nt] !== 0)
              return a;
          if (H.dyn_ltree[18] !== 0 || H.dyn_ltree[20] !== 0 || H.dyn_ltree[26] !== 0)
            return n;
          for (nt = 32; nt < g; nt++)
            if (H.dyn_ltree[2 * nt] !== 0)
              return n;
          return a;
        }(A)), yt(A, A.l_desc), yt(A, A.d_desc), $ = function(H) {
          var nt;
          for (t(H, H.dyn_ltree, H.l_desc.max_code), t(H, H.dyn_dtree, H.d_desc.max_code), yt(H, H.bl_desc), nt = b - 1; 3 <= nt && H.bl_tree[2 * Y[nt] + 1] === 0; nt--)
            ;
          return H.opt_len += 3 * (nt + 1) + 5 + 5 + 4, nt;
        }(A), T = A.opt_len + 3 + 7 >>> 3, (Q = A.static_len + 3 + 7 >>> 3) <= T && (T = Q)) : T = Q = M + 5, M + 4 <= T && R !== -1 ? y(A, R, M, P) : A.strategy === 4 || Q === T ? (Z(A, 2 + (P ? 1 : 0), 3), ht(A, rt, k)) : (Z(A, 4 + (P ? 1 : 0), 3), function(H, nt, At, ct) {
          var wt;
          for (Z(H, nt - 257, 5), Z(H, At - 1, 5), Z(H, ct - 4, 4), wt = 0; wt < ct; wt++)
            Z(H, H.bl_tree[2 * Y[wt] + 1], 3);
          j(H, H.dyn_ltree, nt - 1), j(H, H.dyn_dtree, At - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, $ + 1), ht(A, A.dyn_ltree, A.dyn_dtree)), at(A), P && st(A);
      }, u._tr_tally = function(A, R, M) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = R >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & R, A.pending_buf[A.l_buf + A.last_lit] = 255 & M, A.last_lit++, R === 0 ? A.dyn_ltree[2 * M]++ : (A.matches++, R--, A.dyn_ltree[2 * (i[M] + g + 1)]++, A.dyn_dtree[2 * I(R)]++), A.last_lit === A.lit_bufsize - 1;
      }, u._tr_align = function(A) {
        Z(A, 2, 3), X(A, C, rt), function(R) {
          R.bi_valid === 16 ? (q(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
        }(A);
      };
    }, { "../utils/common": 41 }], 53: [function(e, d, u) {
      d.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, d, u) {
      (function(r) {
        (function(a, n) {
          if (!a.setImmediate) {
            var o, p, m, g, v = 1, l = {}, b = !1, s = a.document, f = Object.getPrototypeOf && Object.getPrototypeOf(a);
            f = f && f.setTimeout ? f : a, o = {}.toString.call(a.process) === "[object process]" ? function(B) {
              process.nextTick(function() {
                w(B);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var B = !0, N = a.onmessage;
                return a.onmessage = function() {
                  B = !1;
                }, a.postMessage("", "*"), a.onmessage = N, B;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", C, !1) : a.attachEvent("onmessage", C), function(B) {
              a.postMessage(g + B, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(B) {
              w(B.data);
            }, function(B) {
              m.port2.postMessage(B);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(B) {
              var N = s.createElement("script");
              N.onreadystatechange = function() {
                w(B), N.onreadystatechange = null, p.removeChild(N), N = null;
              }, p.appendChild(N);
            }) : function(B) {
              setTimeout(w, 0, B);
            }, f.setImmediate = function(B) {
              typeof B != "function" && (B = new Function("" + B));
              for (var N = new Array(arguments.length - 1), G = 0; G < N.length; G++)
                N[G] = arguments[G + 1];
              var _ = { callback: B, args: N };
              return l[v] = _, o(v), v++;
            }, f.clearImmediate = h;
          }
          function h(B) {
            delete l[B];
          }
          function w(B) {
            if (b)
              setTimeout(w, 0, B);
            else {
              var N = l[B];
              if (N) {
                b = !0;
                try {
                  (function(G) {
                    var _ = G.callback, J = G.args;
                    switch (J.length) {
                      case 0:
                        _();
                        break;
                      case 1:
                        _(J[0]);
                        break;
                      case 2:
                        _(J[0], J[1]);
                        break;
                      case 3:
                        _(J[0], J[1], J[2]);
                        break;
                      default:
                        _.apply(n, J);
                    }
                  })(N);
                } finally {
                  h(B), b = !1;
                }
              }
            }
          }
          function C(B) {
            B.source === a && typeof B.data == "string" && B.data.indexOf(g) === 0 && w(+B.data.slice(g.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Vt < "u" ? Vt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(xe);
var $e = xe.exports;
const tn = /* @__PURE__ */ Ce($e);
var Se = { exports: {} };
(function(E, c) {
  (function(e, d) {
    d();
  })(Vt, function() {
    function e(p, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type) ? new Blob(["\uFEFF", p], { type: p.type }) : p;
    }
    function d(p, m, g) {
      var v = new XMLHttpRequest();
      v.open("GET", p), v.responseType = "blob", v.onload = function() {
        o(v.response, m, g);
      }, v.onerror = function() {
        console.error("could not download file");
      }, v.send();
    }
    function u(p) {
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Vt == "object" && Vt.global === Vt ? Vt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(p, m, g) {
      var v = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || p.name || "download", l.download = m, l.rel = "noopener", typeof p == "string" ? (l.href = p, l.origin === location.origin ? r(l) : u(l.href) ? d(p, m, g) : r(l, l.target = "_blank")) : (l.href = v.createObjectURL(p), setTimeout(function() {
        v.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        r(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, g) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, g), m);
      else if (u(p))
        d(p, m, g);
      else {
        var v = document.createElement("a");
        v.href = p, v.target = "_blank", setTimeout(function() {
          r(v);
        });
      }
    } : function(p, m, g, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof p == "string")
        return d(p, m, g);
      var l = p.type === "application/octet-stream", b = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && b || n) && typeof FileReader < "u") {
        var f = new FileReader();
        f.onloadend = function() {
          var C = f.result;
          C = s ? C : C.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = C : location = C, v = null;
        }, f.readAsDataURL(p);
      } else {
        var h = a.URL || a.webkitURL, w = h.createObjectURL(p);
        v ? v.location = w : location.href = w, v = null, setTimeout(function() {
          h.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, E.exports = o;
  });
})(Se);
var en = Se.exports;
const nn = /* @__PURE__ */ Ce(en);
var Yt = { exports: {} };
(function(E, c) {
  (function(e, d) {
    d(c);
  })(Vt, function(e) {
    function d() {
      return d = Object.assign ? Object.assign.bind() : function(S) {
        for (var U = 1; U < arguments.length; U++) {
          var F = arguments[U];
          for (var z in F)
            Object.prototype.hasOwnProperty.call(F, z) && (S[z] = F[z]);
        }
        return S;
      }, d.apply(this, arguments);
    }
    function u(S, U) {
      S.prototype = Object.create(U.prototype), S.prototype.constructor = S, a(S, U);
    }
    function r(S) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(U) {
        return U.__proto__ || Object.getPrototypeOf(U);
      }, r(S);
    }
    function a(S, U) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, z) {
        return F.__proto__ = z, F;
      }, a(S, U);
    }
    function n(S, U, F) {
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
      }() ? Reflect.construct.bind() : function(z, x, I) {
        var q = [null];
        q.push.apply(q, x);
        var Z = new (Function.bind.apply(z, q))();
        return I && a(Z, I.prototype), Z;
      }, n.apply(null, arguments);
    }
    function o(S) {
      var U = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(F) {
        if (F === null || Function.toString.call(F).indexOf("[native code]") === -1)
          return F;
        if (typeof F != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (U !== void 0) {
          if (U.has(F))
            return U.get(F);
          U.set(F, z);
        }
        function z() {
          return n(F, arguments, r(this).constructor);
        }
        return z.prototype = Object.create(F.prototype, { constructor: { value: z, enumerable: !1, writable: !0, configurable: !0 } }), a(z, F);
      }, o(S);
    }
    var p = /* @__PURE__ */ function() {
      function S(F) {
        this.cache = void 0, this.cache = F;
      }
      var U = S.prototype;
      return U.define = function(F, z) {
        this.cache[F] = z;
      }, U.get = function(F) {
        return this.cache[F];
      }, U.remove = function(F) {
        delete this.cache[F];
      }, U.reset = function() {
        this.cache = {};
      }, U.load = function(F) {
        this.cache = d({}, this.cache, F);
      }, S;
    }(), m = /* @__PURE__ */ function(S) {
      function U(F) {
        var z;
        return (z = S.call(this, F) || this).name = "Eta Error", z;
      }
      return u(U, S), U;
    }(/* @__PURE__ */ o(Error));
    function g(S, U, F) {
      var z = U.slice(0, F).split(/\n/), x = z.length, I = z[x - 1].length + 1;
      throw S += " at line " + x + " col " + I + `:

  ` + U.split(/\n/)[x - 1] + `
  ` + Array(I).join(" ") + "^", new m(S);
    }
    function v(S, U, F, z) {
      var x = U.split(`
`), I = Math.max(F - 3, 0), q = Math.min(x.length, F + 3), Z = z, X = x.slice(I, q).map(function(ft, at) {
        var st = at + I + 1;
        return (st == F ? " >> " : "    ") + st + "| " + ft;
      }).join(`
`), lt = new m((Z ? Z + ":" + F + `
` : "line " + F + `
`) + X + `

` + S.message);
      throw lt.name = S.name, lt;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function b(S, U) {
      var F = this.config, z = U && U.async ? l : Function;
      try {
        return new z(F.varName, "options", this.compileToString.call(this, S, U));
      } catch (x) {
        throw x instanceof SyntaxError ? new m(`Bad template syntax

` + x.message + `
` + Array(x.message.length + 1).join("=") + `
` + this.compileToString.call(this, S, U) + `
`) : x;
      }
    }
    function s(S, U) {
      var F = this.config, z = U && U.async, x = this.parse.call(this, S), I = F.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (F.debug ? ', line: 1, templateStr: "' + S.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (F.debug ? "try {" : "") + (F.useWith ? "with(" + F.varName + "||{}){" : "") + `

` + f.call(this, x) + `
if (__eta.layout) {
  __eta.res = ` + (z ? "await includeAsync" : "include") + " (__eta.layout, {..." + F.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (F.useWith ? "}" : "") + (F.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (F.plugins)
        for (var q = 0; q < F.plugins.length; q++) {
          var Z = F.plugins[q];
          Z.processFnString && (I = Z.processFnString(I, F));
        }
      return I;
    }
    function f(S) {
      for (var U = this.config, F = 0, z = S.length, x = ""; F < z; F++) {
        var I = S[F];
        if (typeof I == "string")
          x += "__eta.res+='" + I + `'
`;
        else {
          var q = I.t, Z = I.val || "";
          U.debug && (x += "__eta.line=" + I.lineNo + `
`), q === "r" ? (U.autoFilter && (Z = "__eta.f(" + Z + ")"), x += "__eta.res+=" + Z + `
`) : q === "i" ? (U.autoFilter && (Z = "__eta.f(" + Z + ")"), U.autoEscape && (Z = "__eta.e(" + Z + ")"), x += "__eta.res+=" + Z + `
`) : q === "e" && (x += Z + `
`);
        }
      }
      return x;
    }
    var h = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(S) {
      return h[S];
    }
    var C = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(S) {
      var U = String(S);
      return /[&<>"']/.test(U) ? U.replace(/[&<>"']/g, w) : U;
    }, filterFunction: function(S) {
      return String(S);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, B = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, N = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, G = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function _(S) {
      return S.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function J(S, U) {
      return S.slice(0, U).split(`
`).length;
    }
    function V(S) {
      var U = this.config, F = [], z = !1, x = 0, I = U.parse;
      if (U.plugins)
        for (var q = 0; q < U.plugins.length; q++) {
          var Z = U.plugins[q];
          Z.processTemplate && (S = Z.processTemplate(S, U));
        }
      function X(R, M) {
        R && (R = function(P, T, Q, $) {
          var H, nt;
          return Array.isArray(T.autoTrim) ? (H = T.autoTrim[1], nt = T.autoTrim[0]) : H = nt = T.autoTrim, (Q || Q === !1) && (H = Q), ($ || $ === !1) && (nt = $), nt || H ? H === "slurp" && nt === "slurp" ? P.trim() : (H === "_" || H === "slurp" ? P = P.trimStart() : H !== "-" && H !== "nl" || (P = P.replace(/^(?:\r\n|\n|\r)/, "")), nt === "_" || nt === "slurp" ? P = P.trimEnd() : nt !== "-" && nt !== "nl" || (P = P.replace(/(?:\r\n|\n|\r)$/, "")), P) : P;
        }(R, U, z, M), R && (R = R.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), F.push(R)));
      }
      U.rmWhitespace && (S = S.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), B.lastIndex = 0, N.lastIndex = 0, G.lastIndex = 0;
      for (var lt, ft = [I.exec, I.interpolate, I.raw].reduce(function(R, M) {
        return R && M ? R + "|" + _(M) : M ? _(M) : R;
      }, ""), at = new RegExp(_(U.tags[0]) + "(-|_)?\\s*(" + ft + ")?\\s*", "g"), st = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + _(U.tags[1]) + ")", "g"); lt = at.exec(S); ) {
        var bt = S.slice(x, lt.index);
        x = lt[0].length + lt.index;
        var dt = lt[2] || "";
        X(bt, lt[1]), st.lastIndex = x;
        for (var ht = void 0, yt = !1; ht = st.exec(S); ) {
          if (ht[1]) {
            var t = S.slice(x, ht.index);
            at.lastIndex = x = st.lastIndex, z = ht[2], yt = { t: dt === I.exec ? "e" : dt === I.raw ? "r" : dt === I.interpolate ? "i" : "", val: t };
            break;
          }
          var j = ht[0];
          if (j === "/*") {
            var O = S.indexOf("*/", st.lastIndex);
            O === -1 && g("unclosed comment", S, ht.index), st.lastIndex = O;
          } else
            j === "'" ? (N.lastIndex = ht.index, N.exec(S) ? st.lastIndex = N.lastIndex : g("unclosed string", S, ht.index)) : j === '"' ? (G.lastIndex = ht.index, G.exec(S) ? st.lastIndex = G.lastIndex : g("unclosed string", S, ht.index)) : j === "`" && (B.lastIndex = ht.index, B.exec(S) ? st.lastIndex = B.lastIndex : g("unclosed string", S, ht.index));
        }
        yt ? (U.debug && (yt.lineNo = J(S, lt.index)), F.push(yt)) : g("unclosed tag", S, lt.index);
      }
      if (X(S.slice(x, S.length), !1), U.plugins)
        for (var y = 0; y < U.plugins.length; y++) {
          var A = U.plugins[y];
          A.processAST && (F = A.processAST(F, U));
        }
      return F;
    }
    function Y(S, U) {
      var F = U && U.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !S.startsWith("@")) {
        var z = U.filepath, x = F.get(z);
        if (this.config.cache && x)
          return x;
        var I = this.readFile(z), q = this.compile(I, U);
        return this.config.cache && F.define(z, q), q;
      }
      var Z = F.get(S);
      if (Z)
        return Z;
      throw new m("Failed to get template '" + S + "'");
    }
    function rt(S, U, F) {
      var z, x = d({}, F, { async: !1 });
      return typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), z = Y.call(this, S, x)) : z = S, z.call(this, U, x);
    }
    function k(S, U, F) {
      var z, x = d({}, F, { async: !0 });
      typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), z = Y.call(this, S, x)) : z = S;
      var I = z.call(this, U, x);
      return Promise.resolve(I);
    }
    function L(S, U) {
      var F = this.compile(S, { async: !1 });
      return rt.call(this, F, U);
    }
    function i(S, U) {
      var F = this.compile(S, { async: !0 });
      return k.call(this, F, U);
    }
    var D = /* @__PURE__ */ function() {
      function S(F) {
        this.config = void 0, this.RuntimeErr = v, this.compile = b, this.compileToString = s, this.parse = V, this.render = rt, this.renderAsync = k, this.renderString = L, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = F ? d({}, C, F) : d({}, C);
      }
      var U = S.prototype;
      return U.configure = function(F) {
        this.config = d({}, this.config, F);
      }, U.withConfig = function(F) {
        return d({}, this, { config: d({}, this.config, F) });
      }, U.loadTemplate = function(F, z, x) {
        if (typeof z == "string")
          (x && x.async ? this.templatesAsync : this.templatesSync).define(F, this.compile(z, x));
        else {
          var I = this.templatesSync;
          (z.constructor.name === "AsyncFunction" || x && x.async) && (I = this.templatesAsync), I.define(F, z);
        }
      }, S;
    }(), it = /* @__PURE__ */ function(S) {
      function U() {
        return S.apply(this, arguments) || this;
      }
      return u(U, S), U;
    }(D);
    e.Eta = it;
  });
})(Yt, Yt.exports);
var rn = Yt.exports;
const an = new rn.Eta({
  autoTrim: !1
});
function Nt(E, c) {
  return an.renderString(E, c);
}
const sn = `<% if (it.kotlin) { %>import org.jetbrains.kotlin.gradle.dsl.JvmTarget

<% } %>plugins {
	id '<% if (it.unobfuscated) { %>net.fabricmc.fabric-loom<% } else { %>net.fabricmc.fabric-loom-remap<% } %>' version "\${loom_version}"
	id 'maven-publish'
	<%_ if (it.kotlin) { %>
	id "org.jetbrains.kotlin.jvm" version "<%= it.kotlin.kotlinVersion %>"
  <%_ } %>
}

version = project.mod_version
group = project.maven_group

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
	def version = project.version
	inputs.property "version", version

	filesMatching("fabric.mod.json") {
		expand "version": version
	}
}

tasks.withType(JavaCompile).configureEach {
	it.options.release = <%= it.java.release %>
}
<% if (it.kotlin) { %>
kotlin {
	compilerOptions {
		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>
	}
}
<% } %>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
}

jar {
	def projectName = project.name
	inputs.property "projectName", projectName

	from("LICENSE") {
		rename { "\${it}_$projectName"}
	}
}

// configure the maven publication
publishing {
	publications {
		create("mavenJava", MavenPublication) {
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
}
`, on = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}

// Should match your modid
rootProject.name = '<%= it.modid %>'
`, ln = {
  compatibility: "1_8",
  mixin: "JAVA_8",
  release: 8
}, cn = {
  compatibility: "16",
  mixin: "JAVA_16",
  release: 16
}, $t = {
  compatibility: "17",
  mixin: "JAVA_17",
  release: 17
}, un = {
  compatibility: "21",
  mixin: "JAVA_21",
  release: 21
}, hn = {
  compatibility: "25",
  mixin: "JAVA_25",
  release: 25
};
function Qt(E) {
  const c = Me(E), e = Pe(E);
  return c >= 26 ? hn : e <= 16 ? ln : e == 17 ? cn : e <= 19 || e == 20 && ze(E) <= 4 ? $t : un;
}
const dn = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, An = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/), fn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function pn(E) {
  let c = [];
  dn.test(E.toLowerCase()) || c.push("Package name is not a valid Java package name!");
  const e = E.split(".").filter((d) => An.includes(d));
  e.length != 0 && c.push(`Package name contains illegal component: '${e[0]}'`);
  for (let d of fn)
    E.toLowerCase().startsWith(d) ? c.push(`Package name starts with '${d}', which is reserved!`) : E.toLowerCase() + "." == d && c.push(`Package name is '${d}', which is reserved!`);
  return c;
}
const mn = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
function gn(E) {
  const c = E.match(/^\d+/);
  if (!(c && c[0]))
    return [E];
  const e = c[0], d = E.substring(e.length);
  return [...e.split("").map((u) => mn[parseInt(u)]), d];
}
function te(E) {
  return E.filter(Boolean).map((c) => c[0].toUpperCase() + c.slice(1)).join("");
}
function bn(E) {
  const c = te(E.split(/\b/).map((e) => e.replaceAll(/\W/g, "")));
  return te(gn(c));
}
function vn(E) {
  return E.toLowerCase().replaceAll(/[\s/]+/g, ".").replaceAll(/[^a-z0-9_\.]/g, "");
}
async function yn(E, c) {
  await E.write("build.gradle", Nt(sn, { ...c, java: Qt(c.minecraftVersion) })), await E.write("settings.gradle", Nt(on, c));
}
const wn = `<% if (it.kotlin) { %>import org.jetbrains.kotlin.gradle.dsl.JvmTarget

<% } %>plugins {
	id("<% if (it.unobfuscated) { %>net.fabricmc.fabric-loom<% } else { %>net.fabricmc.fabric-loom-remap<% } %>")
	\`maven-publish\`
	<%_ if (it.kotlin) { %>
	id("org.jetbrains.kotlin.jvm") version "<%= it.kotlin.kotlinVersion %>"
	<%_ } %>
}

version = providers.gradleProperty("mod_version").get()
group = providers.gradleProperty("maven_group").get()

repositories {
	// Add repositories to retrieve artifacts from in here.
	// You should only use this when depending on other mods because
	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.
	// See https://docs.gradle.org/current/userguide/declaring_repositories.html
	// for more information about repositories.
}
<% if (it.splitSources) { %>
loom {
	splitEnvironmentSourceSets()

	mods {
		register("<%= it.modid %>") {
			sourceSet(sourceSets.main.get())
			sourceSet(sourceSets.getByName("client"))
		}
	}
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
	minecraft("com.mojang:minecraft:\${providers.gradleProperty("minecraft_version").get()}")
	<% if (!it.unobfuscated) { %>mappings(<% if(it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${providers.gradleProperty("yarn_mappings").get()}:v2"<% } %>)<% } %>
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %>("net.fabricmc:fabric-loader:\${providers.gradleProperty("loader_version").get()}")

	// Fabric API. This is technically optional, but you probably want it anyway.
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %>("net.fabricmc.fabric-api:fabric-api:\${providers.gradleProperty("fabric_api_version").get()}")
	<% if (it.kotlin) { %><% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %>("net.fabricmc:fabric-language-kotlin:\${providers.gradleProperty("fabric_kotlin_version").get()}")<% } %>
}

tasks.processResources {
	val version = version
	inputs.property("version", version)

	filesMatching("fabric.mod.json") {
		expand("version" to version)
	}
}

tasks.withType<JavaCompile>().configureEach {
	options.release = <%= it.java.release %>
}
<% if (it.kotlin) { %>
kotlin {
	compilerOptions {
		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>
	}
}
<% } %>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
}

tasks.jar {
	val projectName = project.name
	inputs.property("projectName", projectName)

	from("LICENSE") {
		rename { "\${it}_$projectName" }
	}
}

// configure the maven publication
publishing {
	publications {
		register<MavenPublication>("mavenJava") {
			from(components["java"])
		}
	}

	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.
	repositories {
		// Add repositories to publish to here.
		// Notice: This block does NOT have the same function as the block in the top level.
		// The repositories here will be used for publishing your artifact, not for
		// retrieving dependencies.
	}
}
`, kn = `pluginManagement {
	repositories {
		maven {
			name = "Fabric"
			url = uri("https://maven.fabricmc.net/")
		}
		mavenCentral()
		gradlePluginPortal()
	}

	plugins {
		id("<% if (it.unobfuscated) { %>net.fabricmc.fabric-loom<% } else { %>net.fabricmc.fabric-loom-remap<% } %>") version providers.gradleProperty("loom_version")
	}
}

// Should match your modid
rootProject.name = "<%= it.modid %>"
`;
async function En(E, c) {
  await E.write("build.gradle.kts", Nt(wn, { ...c, java: Qt(c.minecraftVersion) })), await E.write("settings.gradle.kts", Nt(kn, c));
}
const Cn = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# IntelliJ IDEA is not yet fully compatible with configuration cache, see: https://github.com/FabricMC/fabric-loom/issues/1349
org.gradle.configuration-cache=false

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap && !it.unobfuscated) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
loom_version=1.17-SNAPSHOT
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>

# Dependencies
fabric_api_version=<%= it.fabricVersion %>`;
async function xn(E, c) {
  await E.write("gradle.properties", Nt(Cn, c)), c.gradleKotlin ? await En(E, c) : await yn(E, c);
}
function Jt(E) {
  for (var c = globalThis.atob(E), e = c.length, d = new Uint8Array(e), u = 0; u < e; u++)
    d[u] = c.charCodeAt(u);
  return d.buffer;
}
const Sn = `#!/bin/sh

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
#       https://github.com/gradle/gradle/blob/3d91ce3b8caaf77ad09f381f43615b715b53f72c/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
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
`, Rn = `@rem\r
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
@rem Set local scope for the variables, and ensure extensions are enabled\r
setlocal EnableExtensions\r
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
"%COMSPEC%" /c exit 1\r
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
"%COMSPEC%" /c exit 1\r
\r
:execute\r
@rem Setup the command line\r
\r
\r
\r
@rem Execute Gradle\r
@rem endlocal doesn't take effect until after the line is parsed and variables are expanded\r
@rem which allows us to clear the local environment before executing the java command\r
endlocal & "%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -jar "%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar" %* & call :exitWithErrorLevel\r
\r
:exitWithErrorLevel\r
@rem Use "%COMSPEC%" /c exit to allow operators to work properly in scripts\r
"%COMSPEC%" /c exit %ERRORLEVEL%\r
`, In = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-9.5.1-bin.zip
networkTimeout=10000
retries=0
retryBackOffMs=500
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Fn = "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", Re = `# gradle

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
`, Ie = `# Automatically build the project and run any configured tests for every push
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
        uses: actions/checkout@v6
      - name: validate gradle wrapper
        uses: gradle/actions/wrapper-validation@v6
      - name: setup jdk
        uses: actions/setup-java@v5
        with:
          java-version: '25'
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        uses: actions/upload-artifact@v7
        with:
          name: Artifacts
          path: build/libs/
`;
async function Nn({ writer: E }) {
  await E.write("gradlew", Sn, {
    executable: !0
  }), await E.write("gradlew.bat", Rn), await E.write("gradle/wrapper/gradle-wrapper.properties", In), await E.write("gradle/wrapper/gradle-wrapper.jar", Jt(Fn)), await E.write(".gitignore", Re), await E.write(".github/workflows/build.yml", Ie);
}
const Fe = `package <%= it.packageName %>;

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
async function Tn(E, c) {
  const e = c.packageName + ".mixin", d = "ExampleMixin", u = "MinecraftServer", r = "net.minecraft.server.MinecraftServer", a = c.mojmap ? "loadLevel" : "loadWorld", n = {
    required: !0,
    package: e,
    compatibilityLevel: Qt(c.minecraftVersion).mixin,
    mixins: [
      d
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${c.modid}.mixins.json`;
  return await E.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/main/java/${e.replaceAll(".", "/")}/${d}.java`, Nt(Fe, {
    className: d,
    packageName: e,
    targetClass: u,
    targetClassFull: r,
    targetMethod: a
  })), [o];
}
async function Bn(E, c) {
  const e = c.packageName + ".client.mixin", d = "ExampleClientMixin", u = c.mojmap ? "Minecraft" : "MinecraftClient", r = `net.minecraft.client.${u}`, a = "run", n = {
    required: !0,
    package: e,
    compatibilityLevel: Qt(c.minecraftVersion).mixin,
    client: [
      d
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${c.modid}.client.mixins.json`;
  return await E.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/client/java/${e.replaceAll(".", "/")}/${d}.java`, Nt(Fe, {
    className: d,
    packageName: e,
    targetClass: u,
    targetClassFull: r,
    targetMethod: a
  })), [
    {
      config: o,
      environment: "client"
    }
  ];
}
const On = `package <%= it.package %>;

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
}`, Ln = `package <%= it.package %>

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
}`, Vn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, _n = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, Un = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, Gn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function jn(E, c) {
  const e = bn(c.projectName), d = {
    package: c.packageName,
    clientPackage: c.packageName + ".client",
    className: e,
    classFullName: c.packageName + "." + e,
    clientClassFullName: c.packageName + ".client." + e,
    path: c.packageName.replaceAll(".", "/") + "/" + e,
    clientPath: c.packageName.replaceAll(".", "/") + "/client/" + e,
    modid: c.modid,
    slf4j: Qe(c.minecraftVersion),
    clientEntrypoint: c.splitSources,
    dataEntrypoint: c.dataGeneration
  };
  return c.kotlin ? await Mn(E, d) : await Dn(E, d);
}
async function Dn(E, c) {
  var e = {
    main: [
      c.classFullName
    ]
  };
  if (await E.write(`src/main/java/${c.path}.java`, Nt(On, c)), c.clientEntrypoint && (await E.write(`src/client/java/${c.clientPath}Client.java`, Nt(Vn, {
    ...c,
    className: c.className + "Client",
    package: c.clientPackage
  })), e = {
    ...e,
    client: [
      c.clientClassFullName + "Client"
    ]
  }), c.dataEntrypoint) {
    const d = c.clientEntrypoint ? "client" : "main", u = c.clientEntrypoint ? c.clientPath : c.path, r = c.clientEntrypoint ? c.clientClassFullName : c.classFullName;
    await E.write(`src/${d}/java/${u}DataGenerator.java`, Nt(Un, {
      ...c,
      className: c.className + "DataGenerator",
      package: c.clientEntrypoint ? c.clientPackage : c.package
    })), e = {
      ...e,
      "fabric-datagen": [
        r + "DataGenerator"
      ]
    };
  }
  return e;
}
async function Mn(E, c) {
  var e = {
    main: [
      {
        value: c.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await E.write(`src/main/kotlin/${c.path}.kt`, Nt(Ln, c)), c.clientEntrypoint && (await E.write(`src/client/kotlin/${c.clientPath}Client.kt`, Nt(_n, {
    ...c,
    className: c.className + "Client",
    package: c.clientPackage
  })), e = {
    ...e,
    client: [
      {
        value: c.clientClassFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), c.dataEntrypoint) {
    const d = c.clientEntrypoint ? "client" : "main", u = c.clientEntrypoint ? c.clientPath : c.path, r = c.clientEntrypoint ? c.clientClassFullName : c.classFullName;
    await E.write(`src/${d}/kotlin/${u}DataGenerator.kt`, Nt(Gn, {
      ...c,
      className: c.className + "DataGenerator",
      package: c.clientEntrypoint ? c.clientPackage : c.package
    })), e = {
      ...e,
      "fabric-datagen": [
        {
          value: r + "DataGenerator",
          adapter: "kotlin"
        }
      ]
    };
  }
  return e;
}
const ee = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Pn(E, c, e) {
  if (!c)
    return Jt(ee);
  const d = e.create(128, 128);
  return d != null && zn(d, E) ? d.getPng() : Jt(ee);
}
function zn(E, c) {
  const e = E.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const d = c.split(/\s+/);
  let u = 0, r = Array(d.length), a = 65;
  for (; ; ) {
    u = 0;
    for (const o of d) {
      let p = a;
      do
        p--, e.font = `${p}px ${Mt}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, p);
    }
    for (let o = 0; o < d.length; o++) {
      const p = d[o];
      e.font = `${a}px ${Mt}`;
      const m = E.measureText(e, p);
      r[o] = m.ascent + m.descent, u += r[o];
    }
    if (u += (d.length - 1) * 2, u <= 124)
      break;
  }
  const n = (128 - u) / 2;
  for (let o = 0; o < d.length; o++) {
    let p = 0;
    for (const v of r.slice(0, o))
      p += v + 2;
    const m = d[o];
    e.font = `${a}px ${Mt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const g = E.measureText(e, m);
    e.fillText(m, 64, n + p + g.ascent);
  }
  return !0;
}
function Qn(E) {
  return Number(E.split(".")[1]) >= 59;
}
async function Wn(E, c, e) {
  const d = [
    ...await Tn(E, e),
    ...e.splitSources ? await Bn(E, e) : []
  ], u = e.minecraftVersion.indexOf("-");
  var r = e.minecraftVersion.substring(0, u === -1 ? e.minecraftVersion.length : u + 1);
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
    entrypoints: await jn(E, e),
    mixins: d,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Qt(e.minecraftVersion).release
    }
  };
  a.depends[Qn(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await E.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await E.write(`src/main/resources/assets/${e.modid}/icon.png`, Pn(e.projectName, e.uniqueModIcon, c));
}
const Zn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Hn = `Creative Commons Legal Code

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
    this CC0 or use of the Work.`, Jn = `# <%= it.projectName %>

## Setup

For setup instructions, please see the [Fabric Documentation page](https://docs.fabricmc.net/develop/getting-started/creating-a-project#setting-up) related to the IDE that you are using.

## License

This template is available under the CC0 license. Feel free to learn from it and incorporate it in your own projects.
`;
async function Xn(E, c) {
  await E.write(".gitattributes", Zn), await E.write(".gitignore", Re), await E.write(".github/workflows/build.yml", Ie), await E.write("LICENSE", Hn), await E.write("README.md", Nt(Jn, c));
}
const Mt = "Comic Relief";
async function Yn(E) {
  const c = await Kn(E.config);
  await Nn(E), await xn(E.writer, c), await Wn(E.writer, E.canvas, c), await Xn(E.writer, c);
}
async function Ne() {
  const E = await Je();
  return E.filter((c) => {
    const e = c.version;
    return e.startsWith("1.14") && e != "1.14.4" ? !1 : c.stable ? !0 : E[0].version == e;
  });
}
async function Kn(E) {
  const c = we(E.minecraftVersion);
  return {
    ...E,
    splitSources: ke(E.minecraftVersion) && E.splitSources,
    dataGeneration: Ee(E.minecraftVersion) && E.dataGeneration,
    loaderVersion: (await Xe()).find((e) => e.stable).version,
    fabricVersion: await Ye(E.minecraftVersion),
    yarnVersion: c ? void 0 : (await Ke(E.minecraftVersion))[0].version,
    kotlin: await qn(E),
    unobfuscated: c
  };
}
async function qn(E) {
  if (!E.useKotlin)
    return;
  const e = (await qe()).pop(), d = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: d
  };
}
const $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Mt,
  generateTemplate: Yn,
  getTemplateGameVersions: Ne
}, Symbol.toStringTag, { value: "Module" }));
function ne(E, c, e) {
  const d = E.slice();
  return d[34] = c[e], d;
}
function re(E, c, e) {
  const d = E.slice();
  return d[37] = c[e], d;
}
function ie(E, c, e) {
  const d = E.slice();
  return d[37] = c[e], d;
}
function ae(E, c, e) {
  const d = E.slice();
  return d[37] = c[e], d;
}
function tr(E) {
  let c, e, d = (
    /*error*/
    E[37].message + ""
  ), u, r, a;
  return {
    c() {
      c = et("p"), e = Ft("Error: "), u = Ft(d), r = ot(), a = et("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, Gt(c, "color", "red");
    },
    m(n, o) {
      kt(n, c, o), W(c, e), W(c, u), kt(n, r, o), kt(n, a, o);
    },
    p: _t,
    i: _t,
    o: _t,
    d(n) {
      n && Et(c), n && Et(r), n && Et(a);
    }
  };
}
function er(E) {
  let c, e, d, u, r, a, n, o, p, m, g, v, l, b, s, f, h, w, C, B, N, G, _, J, V, Y, rt, k, L, i, D, it, S, U, F, z, x, I, q, Z, X, lt, ft, at, st, bt, dt, ht, yt, t, j, O, y, A, R, M, P, T, Q, $, H, nt;
  function At(tt, pt) {
    return (
      /*customModId*/
      tt[3] != null ? rr : nr
    );
  }
  let ct = At(E), wt = ct(E), Ct = (
    /*modIdErrors*/
    E[16] != null && se(E)
  ), mt = (
    /*customModId*/
    E[3] != null && le(E)
  ), Bt = (
    /*packageNameErrors*/
    E[14]
  ), ut = [];
  for (let tt = 0; tt < Bt.length; tt += 1)
    ut[tt] = he(re(E, Bt, tt));
  let Ot = (
    /*data*/
    E[33].game
  ), xt = [];
  for (let tt = 0; tt < Ot.length; tt += 1)
    xt[tt] = de(ne(E, Ot, tt));
  let vt = !/*isUnobfuscated*/
  E[13] && Ae(E), St = (
    /*supportsDataGen*/
    E[12] && fe(E)
  ), Rt = (
    /*supportsSplitSources*/
    E[11] && pe(E)
  );
  const Wt = [ar, ir], Lt = [];
  function jt(tt, pt) {
    return (
      /*loading*/
      tt[10] ? 0 : 1
    );
  }
  return T = jt(E), Q = Lt[T] = Wt[T](E), {
    c() {
      c = et("div"), e = et("div"), d = et("h3"), d.textContent = "Mod Name:", u = ot(), r = et("hr"), a = ot(), wt.c(), n = ot(), o = et("input"), p = ot(), Ct && Ct.c(), m = ot(), mt && mt.c(), g = ot(), v = et("div"), l = et("h3"), l.textContent = "Package Name:", b = ot(), s = et("hr"), f = ot(), h = et("p"), h.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = ot(), C = et("input"), B = ot();
      for (let tt = 0; tt < ut.length; tt += 1)
        ut[tt].c();
      N = ot(), G = et("div"), _ = et("h3"), _.textContent = "Minecraft Version:", J = ot(), V = et("hr"), Y = ot(), rt = et("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = ot(), L = et("select");
      for (let tt = 0; tt < xt.length; tt += 1)
        xt[tt].c();
      i = ot(), D = et("hr"), it = ot(), S = et("br"), U = ot(), F = et("h4"), F.textContent = "Advanced Options:", z = ot(), x = et("div"), I = et("div"), q = et("input"), Z = ot(), X = et("label"), X.textContent = "Kotlin Programming Language", lt = ot(), ft = et("p"), ft.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, at = ot(), vt && vt.c(), st = ot(), St && St.c(), bt = ot(), Rt && Rt.c(), dt = ot(), ht = et("div"), yt = et("div"), t = et("input"), j = ot(), O = et("label"), O.textContent = "Kotlin Build Script", y = ot(), A = et("p"), A.textContent = "The Gradle build script will use the Kotlin programming language instead of Groovy.", R = ot(), M = et("br"), P = ot(), Q.c(), K(d, "class", "svelte-c4460r"), K(r, "class", "svelte-c4460r"), K(o, "id", "project-name"), K(o, "class", "svelte-c4460r"), K(e, "class", "form-line svelte-c4460r"), K(l, "class", "svelte-c4460r"), K(s, "class", "svelte-c4460r"), K(h, "class", "svelte-c4460r"), K(C, "id", "package-name"), K(C, "class", "svelte-c4460r"), K(v, "class", "form-line svelte-c4460r"), K(_, "class", "svelte-c4460r"), K(V, "class", "svelte-c4460r"), K(rt, "class", "svelte-c4460r"), K(L, "id", "minecraft-version"), Gt(L, "min-width", "200px"), K(L, "class", "svelte-c4460r"), /*minecraftVersion*/
      E[0] === void 0 && Ge(() => (
        /*select_change_handler*/
        E[26].call(L)
      )), K(G, "class", "form-line svelte-c4460r"), K(D, "class", "svelte-c4460r"), K(S, "class", "svelte-c4460r"), K(F, "class", "svelte-c4460r"), K(q, "id", "kotlin"), K(q, "type", "checkbox"), K(q, "class", "option-input svelte-c4460r"), K(X, "for", "kotlin"), K(X, "class", "option-label svelte-c4460r"), K(I, "class", "option-container svelte-c4460r"), K(ft, "class", "option-body svelte-c4460r"), K(x, "class", "svelte-c4460r"), K(t, "id", "gradleKotlin"), K(t, "type", "checkbox"), K(t, "class", "option-input svelte-c4460r"), K(O, "for", "gradleKotlin"), K(O, "class", "option-label svelte-c4460r"), K(yt, "class", "option-container svelte-c4460r"), K(A, "class", "option-body svelte-c4460r"), K(ht, "class", "svelte-c4460r"), K(M, "class", "svelte-c4460r"), K(c, "class", "template svelte-c4460r");
    },
    m(tt, pt) {
      kt(tt, c, pt), W(c, e), W(e, d), W(e, u), W(e, r), W(e, a), wt.m(e, null), W(e, n), W(e, o), Ut(
        o,
        /*projectName*/
        E[1]
      ), W(e, p), Ct && Ct.m(e, null), W(c, m), mt && mt.m(c, null), W(c, g), W(c, v), W(v, l), W(v, b), W(v, s), W(v, f), W(v, h), W(v, w), W(v, C), Ut(
        C,
        /*packageName*/
        E[2]
      ), W(v, B);
      for (let Tt = 0; Tt < ut.length; Tt += 1)
        ut[Tt] && ut[Tt].m(v, null);
      W(c, N), W(c, G), W(G, _), W(G, J), W(G, V), W(G, Y), W(G, rt), W(G, k), W(G, L);
      for (let Tt = 0; Tt < xt.length; Tt += 1)
        xt[Tt] && xt[Tt].m(L, null);
      qt(
        L,
        /*minecraftVersion*/
        E[0],
        !0
      ), W(c, i), W(c, D), W(c, it), W(c, S), W(c, U), W(c, F), W(c, z), W(c, x), W(x, I), W(I, q), q.checked = /*useKotlin*/
      E[5], W(I, Z), W(I, X), W(x, lt), W(x, ft), W(c, at), vt && vt.m(c, null), W(c, st), St && St.m(c, null), W(c, bt), Rt && Rt.m(c, null), W(c, dt), W(c, ht), W(ht, yt), W(yt, t), t.checked = /*gradleKotlin*/
      E[9], W(yt, j), W(yt, O), W(ht, y), W(ht, A), W(c, R), W(c, M), W(c, P), Lt[T].m(c, null), $ = !0, H || (nt = [
        It(
          o,
          "input",
          /*input0_input_handler*/
          E[23]
        ),
        It(
          o,
          "blur",
          /*doFormatProjectName*/
          E[19]
        ),
        It(
          C,
          "keyup",
          /*doFormatPackageName*/
          E[20]
        ),
        It(
          C,
          "input",
          /*input1_input_handler*/
          E[25]
        ),
        It(
          L,
          "change",
          /*select_change_handler*/
          E[26]
        ),
        It(
          q,
          "change",
          /*input2_change_handler*/
          E[27]
        ),
        It(
          t,
          "change",
          /*input3_change_handler*/
          E[31]
        )
      ], H = !0);
    },
    p(tt, pt) {
      if (ct === (ct = At(tt)) && wt ? wt.p(tt, pt) : (wt.d(1), wt = ct(tt), wt && (wt.c(), wt.m(e, n))), pt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      tt[1] && Ut(
        o,
        /*projectName*/
        tt[1]
      ), /*modIdErrors*/
      tt[16] != null ? Ct ? Ct.p(tt, pt) : (Ct = se(tt), Ct.c(), Ct.m(e, null)) : Ct && (Ct.d(1), Ct = null), /*customModId*/
      tt[3] != null ? mt ? mt.p(tt, pt) : (mt = le(tt), mt.c(), mt.m(c, g)) : mt && (mt.d(1), mt = null), pt[0] & /*packageName*/
      4 && C.value !== /*packageName*/
      tt[2] && Ut(
        C,
        /*packageName*/
        tt[2]
      ), pt[0] & /*packageNameErrors*/
      16384) {
        Bt = /*packageNameErrors*/
        tt[14];
        let gt;
        for (gt = 0; gt < Bt.length; gt += 1) {
          const Dt = re(tt, Bt, gt);
          ut[gt] ? ut[gt].p(Dt, pt) : (ut[gt] = he(Dt), ut[gt].c(), ut[gt].m(v, null));
        }
        for (; gt < ut.length; gt += 1)
          ut[gt].d(1);
        ut.length = Bt.length;
      }
      if (pt[0] & /*versions*/
      131072) {
        Ot = /*data*/
        tt[33].game;
        let gt;
        for (gt = 0; gt < Ot.length; gt += 1) {
          const Dt = ne(tt, Ot, gt);
          xt[gt] ? xt[gt].p(Dt, pt) : (xt[gt] = de(Dt), xt[gt].c(), xt[gt].m(L, null));
        }
        for (; gt < xt.length; gt += 1)
          xt[gt].d(1);
        xt.length = Ot.length;
      }
      pt[0] & /*minecraftVersion, versions*/
      131073 && qt(
        L,
        /*minecraftVersion*/
        tt[0]
      ), pt[0] & /*useKotlin*/
      32 && (q.checked = /*useKotlin*/
      tt[5]), /*isUnobfuscated*/
      tt[13] ? vt && (vt.d(1), vt = null) : vt ? vt.p(tt, pt) : (vt = Ae(tt), vt.c(), vt.m(c, st)), /*supportsDataGen*/
      tt[12] ? St ? St.p(tt, pt) : (St = fe(tt), St.c(), St.m(c, bt)) : St && (St.d(1), St = null), /*supportsSplitSources*/
      tt[11] ? Rt ? Rt.p(tt, pt) : (Rt = pe(tt), Rt.c(), Rt.m(c, dt)) : Rt && (Rt.d(1), Rt = null), pt[0] & /*gradleKotlin*/
      512 && (t.checked = /*gradleKotlin*/
      tt[9]);
      let Tt = T;
      T = jt(tt), T === Tt ? Lt[T].p(tt, pt) : (je(), zt(Lt[Tt], 1, 1, () => {
        Lt[Tt] = null;
      }), De(), Q = Lt[T], Q ? Q.p(tt, pt) : (Q = Lt[T] = Wt[T](tt), Q.c()), Pt(Q, 1), Q.m(c, null));
    },
    i(tt) {
      $ || (Pt(Q), $ = !0);
    },
    o(tt) {
      zt(Q), $ = !1;
    },
    d(tt) {
      tt && Et(c), wt.d(), Ct && Ct.d(), mt && mt.d(), Ht(ut, tt), Ht(xt, tt), vt && vt.d(), St && St.d(), Rt && Rt.d(), Lt[T].d(), H = !1, me(nt);
    }
  };
}
function nr(E) {
  let c, e, d, u, r, a, n, o;
  return {
    c() {
      c = et("p"), e = Ft("Choose a name for your new mod. The mod ID will be "), d = et("code"), u = Ft(
        /*modid*/
        E[4]
      ), r = Ft(". "), a = et("a"), a.textContent = "Use custom id", K(d, "class", "svelte-c4460r"), K(a, "href", ""), K(a, "class", "svelte-c4460r"), K(c, "class", "svelte-c4460r");
    },
    m(p, m) {
      kt(p, c, m), W(c, e), W(c, d), W(d, u), W(c, r), W(c, a), n || (o = It(a, "click", Kt(
        /*useCustomModId*/
        E[21]
      )), n = !0);
    },
    p(p, m) {
      m[0] & /*modid*/
      16 && Xt(
        u,
        /*modid*/
        p[4]
      );
    },
    d(p) {
      p && Et(c), n = !1, o();
    }
  };
}
function rr(E) {
  let c;
  return {
    c() {
      c = et("p"), c.textContent = "Choose a name for your new mod.", K(c, "class", "svelte-c4460r");
    },
    m(e, d) {
      kt(e, c, d);
    },
    p: _t,
    d(e) {
      e && Et(c);
    }
  };
}
function se(E) {
  let c, e, d = (
    /*modIdErrors*/
    E[16]
  ), u = [];
  for (let r = 0; r < d.length; r += 1)
    u[r] = oe(ae(E, d, r));
  return {
    c() {
      for (let r = 0; r < u.length; r += 1)
        u[r].c();
      c = ot(), e = et("br"), K(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < u.length; n += 1)
        u[n] && u[n].m(r, a);
      kt(r, c, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*modIdErrors*/
      65536) {
        d = /*modIdErrors*/
        r[16];
        let n;
        for (n = 0; n < d.length; n += 1) {
          const o = ae(r, d, n);
          u[n] ? u[n].p(o, a) : (u[n] = oe(o), u[n].c(), u[n].m(c.parentNode, c));
        }
        for (; n < u.length; n += 1)
          u[n].d(1);
        u.length = d.length;
      }
    },
    d(r) {
      Ht(u, r), r && Et(c), r && Et(e);
    }
  };
}
function oe(E) {
  let c, e = (
    /*error*/
    E[37] + ""
  ), d;
  return {
    c() {
      c = et("li"), d = Ft(e), Gt(c, "color", "red"), K(c, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, c, r), W(c, d);
    },
    p(u, r) {
      r[0] & /*modIdErrors*/
      65536 && e !== (e = /*error*/
      u[37] + "") && Xt(d, e);
    },
    d(u) {
      u && Et(c);
    }
  };
}
function le(E) {
  let c, e, d, u, r, a, n, o, p, m, g, v, l, b = (
    /*customIdErrors*/
    E[15] != null && ce(E)
  );
  return {
    c() {
      c = et("div"), e = et("h3"), e.textContent = "Mod ID:", d = ot(), u = et("hr"), r = ot(), a = et("p"), n = Ft("Enter the modid you wish to use for your mod. "), o = et("a"), o.textContent = "Use default", p = ot(), b && b.c(), m = ot(), g = et("input"), K(e, "class", "svelte-c4460r"), K(u, "class", "svelte-c4460r"), K(o, "href", ""), K(o, "class", "svelte-c4460r"), K(a, "class", "svelte-c4460r"), K(g, "id", "mod-id"), K(g, "class", "svelte-c4460r"), K(c, "class", "form-line svelte-c4460r");
    },
    m(s, f) {
      kt(s, c, f), W(c, e), W(c, d), W(c, u), W(c, r), W(c, a), W(a, n), W(a, o), W(c, p), b && b.m(c, null), W(c, m), W(c, g), Ut(
        g,
        /*customModId*/
        E[3]
      ), v || (l = [
        It(o, "click", Kt(
          /*useDefaultModId*/
          E[22]
        )),
        It(
          g,
          "input",
          /*input_input_handler*/
          E[24]
        )
      ], v = !0);
    },
    p(s, f) {
      /*customIdErrors*/
      s[15] != null ? b ? b.p(s, f) : (b = ce(s), b.c(), b.m(c, m)) : b && (b.d(1), b = null), f[0] & /*customModId*/
      8 && g.value !== /*customModId*/
      s[3] && Ut(
        g,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && Et(c), b && b.d(), v = !1, me(l);
    }
  };
}
function ce(E) {
  let c, e, d = (
    /*customIdErrors*/
    E[15]
  ), u = [];
  for (let r = 0; r < d.length; r += 1)
    u[r] = ue(ie(E, d, r));
  return {
    c() {
      for (let r = 0; r < u.length; r += 1)
        u[r].c();
      c = ot(), e = et("br"), K(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < u.length; n += 1)
        u[n] && u[n].m(r, a);
      kt(r, c, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*customIdErrors*/
      32768) {
        d = /*customIdErrors*/
        r[15];
        let n;
        for (n = 0; n < d.length; n += 1) {
          const o = ie(r, d, n);
          u[n] ? u[n].p(o, a) : (u[n] = ue(o), u[n].c(), u[n].m(c.parentNode, c));
        }
        for (; n < u.length; n += 1)
          u[n].d(1);
        u.length = d.length;
      }
    },
    d(r) {
      Ht(u, r), r && Et(c), r && Et(e);
    }
  };
}
function ue(E) {
  let c, e = (
    /*error*/
    E[37] + ""
  ), d;
  return {
    c() {
      c = et("li"), d = Ft(e), Gt(c, "color", "red"), K(c, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, c, r), W(c, d);
    },
    p(u, r) {
      r[0] & /*customIdErrors*/
      32768 && e !== (e = /*error*/
      u[37] + "") && Xt(d, e);
    },
    d(u) {
      u && Et(c);
    }
  };
}
function he(E) {
  let c, e = (
    /*error*/
    E[37] + ""
  ), d;
  return {
    c() {
      c = et("li"), d = Ft(e), Gt(c, "color", "red"), K(c, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, c, r), W(c, d);
    },
    p(u, r) {
      r[0] & /*packageNameErrors*/
      16384 && e !== (e = /*error*/
      u[37] + "") && Xt(d, e);
    },
    d(u) {
      u && Et(c);
    }
  };
}
function de(E) {
  let c, e = (
    /*version*/
    E[34].version + ""
  ), d;
  return {
    c() {
      c = et("option"), d = Ft(e), c.__value = /*version*/
      E[34].version, c.value = c.__value, K(c, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, c, r), W(c, d);
    },
    p: _t,
    d(u) {
      u && Et(c);
    }
  };
}
function Ae(E) {
  let c, e, d, u, r, a, n, o, p;
  return {
    c() {
      c = et("div"), e = et("div"), d = et("input"), u = ot(), r = et("label"), r.textContent = "Mojang Mappings", a = ot(), n = et("p"), n.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", K(d, "id", "mojmap"), K(d, "type", "checkbox"), K(d, "class", "option-input svelte-c4460r"), K(r, "for", "mojmap"), K(r, "class", "option-label svelte-c4460r"), K(e, "class", "option-container svelte-c4460r"), K(n, "class", "option-body svelte-c4460r"), K(c, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, c, g), W(c, e), W(e, d), d.checked = /*mojmap*/
      E[6], W(e, u), W(e, r), W(c, a), W(c, n), o || (p = It(
        d,
        "change",
        /*input_change_handler*/
        E[28]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*mojmap*/
      64 && (d.checked = /*mojmap*/
      m[6]);
    },
    d(m) {
      m && Et(c), o = !1, p();
    }
  };
}
function fe(E) {
  let c, e, d, u, r, a, n, o, p;
  return {
    c() {
      c = et("div"), e = et("div"), d = et("input"), u = ot(), r = et("label"), r.textContent = "Data Generation", a = ot(), n = et("p"), n.innerHTML = 'This option configures the <a href="https://docs.fabricmc.net/develop/data-generation/setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', K(d, "id", "datagen"), K(d, "type", "checkbox"), K(d, "class", "option-input svelte-c4460r"), K(r, "for", "datagen"), K(r, "class", "option-label svelte-c4460r"), K(e, "class", "option-container svelte-c4460r"), K(n, "class", "option-body svelte-c4460r"), K(c, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, c, g), W(c, e), W(e, d), d.checked = /*dataGeneration*/
      E[7], W(e, u), W(e, r), W(c, a), W(c, n), o || (p = It(
        d,
        "change",
        /*input_change_handler_1*/
        E[29]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*dataGeneration*/
      128 && (d.checked = /*dataGeneration*/
      m[7]);
    },
    d(m) {
      m && Et(c), o = !1, p();
    }
  };
}
function pe(E) {
  let c, e, d, u, r, a, n, o, p;
  return {
    c() {
      c = et("div"), e = et("div"), d = et("input"), u = ot(), r = et("label"), r.textContent = "Split client and common sources", a = ot(), n = et("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, K(d, "id", "splitSources"), K(d, "type", "checkbox"), K(d, "class", "option-input svelte-c4460r"), K(r, "for", "splitSources"), K(r, "class", "option-label svelte-c4460r"), K(e, "class", "option-container svelte-c4460r"), K(n, "class", "option-body svelte-c4460r"), K(c, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, c, g), W(c, e), W(e, d), d.checked = /*splitSources*/
      E[8], W(e, u), W(e, r), W(c, a), W(c, n), o || (p = It(
        d,
        "change",
        /*input_change_handler_2*/
        E[30]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*splitSources*/
      256 && (d.checked = /*splitSources*/
      m[8]);
    },
    d(m) {
      m && Et(c), o = !1, p();
    }
  };
}
function ir(E) {
  let c, e, d, u, r, a;
  return e = new ye({}), {
    c() {
      c = et("a"), ge(e.$$.fragment), d = Ft(" Download Template (.ZIP)"), K(c, "class", "button primary large download-button svelte-c4460r"), K(c, "href", "");
    },
    m(n, o) {
      kt(n, c, o), be(e, c, null), W(c, d), u = !0, r || (a = It(c, "click", Kt(
        /*generate*/
        E[18]
      )), r = !0);
    },
    p: _t,
    i(n) {
      u || (Pt(e.$$.fragment, n), u = !0);
    },
    o(n) {
      zt(e.$$.fragment, n), u = !1;
    },
    d(n) {
      n && Et(c), ve(e), r = !1, a();
    }
  };
}
function ar(E) {
  let c, e, d, u;
  return e = new ye({}), {
    c() {
      c = et("a"), ge(e.$$.fragment), d = Ft(" Generating..."), K(c, "class", "button primary download-button svelte-c4460r"), K(c, "href", "");
    },
    m(r, a) {
      kt(r, c, a), be(e, c, null), W(c, d), u = !0;
    },
    p: _t,
    i(r) {
      u || (Pt(e.$$.fragment, r), u = !0);
    },
    o(r) {
      zt(e.$$.fragment, r), u = !1;
    },
    d(r) {
      r && Et(c), ve(e);
    }
  };
}
function sr(E) {
  let c, e, d, u;
  return {
    c() {
      c = et("p"), e = Ft(`Loading data
    
        
        `), d = et("span"), u = Ft("..."), Gt(d, "font-family", Mt);
    },
    m(r, a) {
      kt(r, c, a), W(c, e), W(c, d), W(d, u);
    },
    p: _t,
    i: _t,
    o: _t,
    d(r) {
      r && Et(c);
    }
  };
}
function or(E) {
  let c, e, d = {
    ctx: E,
    current: null,
    token: null,
    hasCatch: !0,
    pending: sr,
    then: er,
    catch: tr,
    value: 33,
    error: 37,
    blocks: [, , ,]
  };
  return Le(
    /*versions*/
    E[17],
    d
  ), {
    c() {
      c = Ve(), d.block.c();
    },
    m(u, r) {
      kt(u, c, r), d.block.m(u, d.anchor = r), d.mount = () => c.parentNode, d.anchor = c, e = !0;
    },
    p(u, r) {
      E = u, _e(d, E, r);
    },
    i(u) {
      e || (Pt(d.block), e = !0);
    },
    o(u) {
      for (let r = 0; r < 3; r += 1) {
        const a = d.blocks[r];
        zt(a);
      }
      e = !1;
    },
    d(u) {
      u && Et(c), d.block.d(u), d.token = null, d = null;
    }
  };
}
function lr(E, c, e) {
  let d, u, r, a, n, o, p, m, g = "Template Mod", v = "com.example", l = !1, b = !0, s = !1, f = !0, h = !1, w, C = !1;
  const B = Promise.all([Ne()]).then(([z]) => (e(0, m = z.find((x) => x.stable).version), { game: z }));
  function N(z) {
    if (z !== void 0)
      return He(z, w === void 0);
  }
  async function G() {
    if (n !== void 0 || w !== void 0 && o !== void 0 || p.length > 0)
      return;
    e(10, C = !0);
    const z = await Promise.resolve().then(() => $n), x = {
      modid: w ?? d,
      minecraftVersion: m,
      projectName: g,
      packageName: v,
      useKotlin: l,
      mojmap: b || a,
      dataGeneration: s && u,
      splitSources: f && r,
      uniqueModIcon: !0,
      gradleKotlin: h
    }, I = new tn();
    await z.generateTemplate({
      config: x,
      writer: {
        write: async (q, Z, X) => {
          I.file(q, Z, {
            unixPermissions: X != null && X.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(q, Z) {
          const X = document.createElement("canvas");
          return X.width = q, X.height = Z, {
            getContext: (lt) => X.getContext(lt),
            getPng: () => Jt(X.toDataURL().split(";base64,")[1]),
            measureText(lt, ft) {
              const at = lt.measureText(ft);
              return {
                width: at.width,
                ascent: at.actualBoundingBoxAscent,
                descent: at.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), nn.saveAs(await I.generateAsync({ type: "blob", platform: "UNIX" }), `${d}-template-${x.minecraftVersion}.zip`), e(10, C = !1);
  }
  function _() {
    e(1, g = g.trim());
  }
  function J() {
    e(2, v = vn(v));
  }
  function V() {
    e(3, w = d);
  }
  function Y() {
    e(3, w = void 0);
  }
  function rt() {
    g = this.value, e(1, g);
  }
  function k() {
    w = this.value, e(3, w);
  }
  function L() {
    v = this.value, e(2, v);
  }
  function i() {
    m = Ue(this), e(0, m), e(17, B);
  }
  function D() {
    l = this.checked, e(5, l);
  }
  function it() {
    b = this.checked, e(6, b);
  }
  function S() {
    s = this.checked, e(7, s);
  }
  function U() {
    f = this.checked, e(8, f);
  }
  function F() {
    h = this.checked, e(9, h);
  }
  return E.$$.update = () => {
    E.$$.dirty[0] & /*projectName*/
    2 && e(4, d = We(g)), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(12, u = Ee(m || "1.99")), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, r = ke(m || "1.99")), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(13, a = we(m || "1.99")), E.$$.dirty[0] & /*modid*/
    16 && e(16, n = N(d)), E.$$.dirty[0] & /*customModId*/
    8 && e(15, o = Ze(w)), E.$$.dirty[0] & /*packageName*/
    4 && e(14, p = pn(v));
  }, [
    m,
    g,
    v,
    w,
    d,
    l,
    b,
    s,
    f,
    h,
    C,
    r,
    u,
    a,
    p,
    o,
    n,
    B,
    G,
    _,
    J,
    V,
    Y,
    rt,
    k,
    L,
    i,
    D,
    it,
    S,
    U,
    F
  ];
}
class Ar extends Te {
  constructor(c) {
    super(), Be(this, c, lr, or, Oe, {}, null, [-1, -1]);
  }
}
export {
  Ar as default
};

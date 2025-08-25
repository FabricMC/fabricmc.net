import { S as Ie, i as _e, s as Ne, h as Fe, b as Be, c as kt, u as Ue, o as Qt, p as Mt, d as Et, q as Ve, e as nt, t as Nt, a as lt, f as Dt, g as Y, n as Vt, k as K, r as Te, C as Ot, l as qt, m as Ft, D as Oe, E as De, j as Wt, B as de, A as Pt, y as Xt, v as fe, w as pe, x as me } from "./index.4deac2e0.js";
import ge from "./DownloadIcon.39c279f6.js";
import { d as Re, b as Ge, h as Le, i as Qe, j as Me } from "./Api.dca02e9f.js";
var Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function be(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
function zt(E) {
  throw new Error('Could not dynamically require "' + E + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ve = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(E, f) {
  (function(e) {
    E.exports = e();
  })(function() {
    return function e(h, c, r) {
      function a(p, m) {
        if (!c[p]) {
          if (!h[p]) {
            var b = typeof zt == "function" && zt;
            if (!m && b)
              return b(p, !0);
            if (n)
              return n(p, !0);
            var y = new Error("Cannot find module '" + p + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var l = c[p] = { exports: {} };
          h[p][0].call(l.exports, function(g) {
            var s = h[p][1][g];
            return a(s || g);
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
        for (var p, m, b, y, l, g, s, d = [], u = 0, w = o.length, S = w, U = r.getTypeOf(o) !== "string"; u < o.length; )
          S = w - u, b = U ? (p = o[u++], m = u < w ? o[u++] : 0, u < w ? o[u++] : 0) : (p = o.charCodeAt(u++), m = u < w ? o.charCodeAt(u++) : 0, u < w ? o.charCodeAt(u++) : 0), y = p >> 2, l = (3 & p) << 4 | m >> 4, g = 1 < S ? (15 & m) << 2 | b >> 6 : 64, s = 2 < S ? 63 & b : 64, d.push(n.charAt(y) + n.charAt(l) + n.charAt(g) + n.charAt(s));
        return d.join("");
      }, c.decode = function(o) {
        var p, m, b, y, l, g, s = 0, d = 0, u = "data:";
        if (o.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, S = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && S--, o.charAt(o.length - 2) === n.charAt(64) && S--, S % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | S) : new Array(0 | S); s < o.length; )
          p = n.indexOf(o.charAt(s++)) << 2 | (y = n.indexOf(o.charAt(s++))) >> 4, m = (15 & y) << 4 | (l = n.indexOf(o.charAt(s++))) >> 2, b = (3 & l) << 6 | (g = n.indexOf(o.charAt(s++))), w[d++] = p, l !== 64 && (w[d++] = m), g !== 64 && (w[d++] = b);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, h, c) {
      var r = e("./external"), a = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function p(m, b, y, l, g) {
        this.compressedSize = m, this.uncompressedSize = b, this.crc32 = y, this.compression = l, this.compressedContent = g;
      }
      p.prototype = { getContentWorker: function() {
        var m = new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), b = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, p.createWorkerFrom = function(m, b, y) {
        return m.pipe(new n()).pipe(new o("uncompressedSize")).pipe(b.compressWorker(y)).pipe(new o("compressedSize")).withStreamInfo("compression", b);
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
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(p, m, b, y) {
          var l = a, g = y + b;
          p ^= -1;
          for (var s = y; s < g; s++)
            p = p >>> 8 ^ l[255 & (p ^ m[s])];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : function(p, m, b, y) {
          var l = a, g = y + b;
          p ^= -1;
          for (var s = y; s < g; s++)
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
      function m(b, y) {
        o.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = y, this.meta = {};
      }
      c.magic = "\b\0", n.inherits(m, o), m.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(p, b.data), !1);
      }, m.prototype.flush = function() {
        o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, m.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this._pako = null;
      }, m.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(y) {
          b.push({ data: y, meta: b.meta });
        };
      }, c.compressWorker = function(b) {
        return new m("Deflate", b);
      }, c.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, h, c) {
      function r(l, g) {
        var s, d = "";
        for (s = 0; s < g; s++)
          d += String.fromCharCode(255 & l), l >>>= 8;
        return d;
      }
      function a(l, g, s, d, u, w) {
        var S, U, F = l.file, L = l.compression, R = w !== p.utf8encode, W = n.transformTo("string", w(F.name)), D = n.transformTo("string", p.utf8encode(F.name)), X = F.comment, rt = n.transformTo("string", w(X)), k = n.transformTo("string", p.utf8encode(X)), T = D.length !== F.name.length, i = k.length !== X.length, M = "", it = "", C = "", O = F.dir, N = F.date, z = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !s || (z.crc32 = l.crc32, z.compressedSize = l.compressedSize, z.uncompressedSize = l.uncompressedSize);
        var x = 0;
        g && (x |= 8), R || !T && !i || (x |= 2048);
        var I = 0, q = 0;
        O && (I |= 16), u === "UNIX" ? (q = 798, I |= function(H, ct) {
          var gt = H;
          return H || (gt = ct ? 16893 : 33204), (65535 & gt) << 16;
        }(F.unixPermissions, O)) : (q = 20, I |= function(H) {
          return 63 & (H || 0);
        }(F.dosPermissions)), S = N.getUTCHours(), S <<= 6, S |= N.getUTCMinutes(), S <<= 5, S |= N.getUTCSeconds() / 2, U = N.getUTCFullYear() - 1980, U <<= 4, U |= N.getUTCMonth() + 1, U <<= 5, U |= N.getUTCDate(), T && (it = r(1, 1) + r(m(W), 4) + D, M += "up" + r(it.length, 2) + it), i && (C = r(1, 1) + r(m(rt), 4) + k, M += "uc" + r(C.length, 2) + C);
        var P = "";
        return P += `
\0`, P += r(x, 2), P += L.magic, P += r(S, 2), P += r(U, 2), P += r(z.crc32, 4), P += r(z.compressedSize, 4), P += r(z.uncompressedSize, 4), P += r(W.length, 2), P += r(M.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + P + W + M, dirRecord: b.CENTRAL_FILE_HEADER + r(q, 2) + P + r(rt.length, 2) + "\0\0\0\0" + r(I, 4) + r(d, 4) + W + M + rt };
      }
      var n = e("../utils"), o = e("../stream/GenericWorker"), p = e("../utf8"), m = e("../crc32"), b = e("../signature");
      function y(l, g, s, d) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = s, this.encodeFileName = d, this.streamFiles = l, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(y, o), y.prototype.push = function(l) {
        var g = l.meta.percent || 0, s = this.entriesCount, d = this._sources.length;
        this.accumulate ? this.contentBuffer.push(l) : (this.bytesWritten += l.data.length, o.prototype.push.call(this, { data: l.data, meta: { currentFile: this.currentFile, percent: s ? (g + 100 * (s - d - 1)) / s : 100 } }));
      }, y.prototype.openedSource = function(l) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = l.file.name;
        var g = this.streamFiles && !l.file.dir;
        if (g) {
          var s = a(l, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: s.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, y.prototype.closedSource = function(l) {
        this.accumulate = !1;
        var g = this.streamFiles && !l.file.dir, s = a(l, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(s.dirRecord), g)
          this.push({ data: function(d) {
            return b.DATA_DESCRIPTOR + r(d.crc32, 4) + r(d.compressedSize, 4) + r(d.uncompressedSize, 4);
          }(l), meta: { percent: 100 } });
        else
          for (this.push({ data: s.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, y.prototype.flush = function() {
        for (var l = this.bytesWritten, g = 0; g < this.dirRecords.length; g++)
          this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
        var s = this.bytesWritten - l, d = function(u, w, S, U, F) {
          var L = n.transformTo("string", F(U));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(u, 2) + r(u, 2) + r(w, 4) + r(S, 4) + r(L.length, 2) + L;
        }(this.dirRecords.length, s, l, this.zipComment, this.encodeFileName);
        this.push({ data: d, meta: { percent: 100 } });
      }, y.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, y.prototype.registerPrevious = function(l) {
        this._sources.push(l);
        var g = this;
        return l.on("data", function(s) {
          g.processChunk(s);
        }), l.on("end", function() {
          g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
        }), l.on("error", function(s) {
          g.error(s);
        }), this;
      }, y.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, y.prototype.error = function(l) {
        var g = this._sources;
        if (!o.prototype.error.call(this, l))
          return !1;
        for (var s = 0; s < g.length; s++)
          try {
            g[s].error(l);
          } catch {
          }
        return !0;
      }, y.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var l = this._sources, g = 0; g < l.length; g++)
          l[g].lock();
      }, h.exports = y;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, h, c) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      c.generateWorker = function(n, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), b = 0;
        try {
          n.forEach(function(y, l) {
            b++;
            var g = function(w, S) {
              var U = w || S, F = r[U];
              if (!F)
                throw new Error(U + " is not a valid compression method !");
              return F;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, d = l.dir, u = l.date;
            l._compressWorker(g, s).withStreamInfo("file", { name: y, dir: d, date: u, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = b;
        } catch (y) {
          m.error(y);
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
      function b(y) {
        return new a.Promise(function(l, g) {
          var s = y.decompressed.getContentWorker().pipe(new p());
          s.on("error", function(d) {
            g(d);
          }).on("end", function() {
            s.streamInfo.crc32 !== y.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : l();
          }).resume();
        });
      }
      h.exports = function(y, l) {
        var g = this;
        return l = r.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(y) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", y, !0, l.optimizedBinaryString, l.base64).then(function(s) {
          var d = new o(l);
          return d.load(s), d;
        }).then(function(s) {
          var d = [a.Promise.resolve(s)], u = s.files;
          if (l.checkCRC32)
            for (var w = 0; w < u.length; w++)
              d.push(b(u[w]));
          return a.Promise.all(d);
        }).then(function(s) {
          for (var d = s.shift(), u = d.files, w = 0; w < u.length; w++) {
            var S = u[w], U = S.fileNameStr, F = r.resolve(S.fileNameStr);
            g.file(F, S.decompressed, { binary: !0, optimizedBinaryString: !0, date: S.date, dir: S.dir, comment: S.fileCommentStr.length ? S.fileCommentStr : null, unixPermissions: S.unixPermissions, dosPermissions: S.dosPermissions, createFolders: l.createFolders }), S.dir || (g.file(F).unsafeOriginalName = U);
          }
          return d.zipComment.length && (g.comment = d.zipComment), g;
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
        n.on("data", function(b, y) {
          m.push(b) || m._helper.pause(), p && p(y);
        }).on("error", function(b) {
          m.emit("error", b);
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
      function r(F, L, R) {
        var W, D = n.getTypeOf(L), X = n.extend(R || {}, m);
        X.date = X.date || /* @__PURE__ */ new Date(), X.compression !== null && (X.compression = X.compression.toUpperCase()), typeof X.unixPermissions == "string" && (X.unixPermissions = parseInt(X.unixPermissions, 8)), X.unixPermissions && 16384 & X.unixPermissions && (X.dir = !0), X.dosPermissions && 16 & X.dosPermissions && (X.dir = !0), X.dir && (F = u(F)), X.createFolders && (W = d(F)) && w.call(this, W, !0);
        var rt = D === "string" && X.binary === !1 && X.base64 === !1;
        R && R.binary !== void 0 || (X.binary = !rt), (L instanceof b && L.uncompressedSize === 0 || X.dir || !L || L.length === 0) && (X.base64 = !1, X.binary = !0, L = "", X.compression = "STORE", D = "string");
        var k = null;
        k = L instanceof b || L instanceof o ? L : g.isNode && g.isStream(L) ? new s(F, L) : n.prepareContent(F, L, X.binary, X.optimizedBinaryString, X.base64);
        var T = new y(F, k, X);
        this.files[F] = T;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), b = e("./compressedObject"), y = e("./zipObject"), l = e("./generate"), g = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), d = function(F) {
        F.slice(-1) === "/" && (F = F.substring(0, F.length - 1));
        var L = F.lastIndexOf("/");
        return 0 < L ? F.substring(0, L) : "";
      }, u = function(F) {
        return F.slice(-1) !== "/" && (F += "/"), F;
      }, w = function(F, L) {
        return L = L !== void 0 ? L : m.createFolders, F = u(F), this.files[F] || r.call(this, F, null, { dir: !0, createFolders: L }), this.files[F];
      };
      function S(F) {
        return Object.prototype.toString.call(F) === "[object RegExp]";
      }
      var U = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(F) {
        var L, R, W;
        for (L in this.files)
          W = this.files[L], (R = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && F(R, W);
      }, filter: function(F) {
        var L = [];
        return this.forEach(function(R, W) {
          F(R, W) && L.push(W);
        }), L;
      }, file: function(F, L, R) {
        if (arguments.length !== 1)
          return F = this.root + F, r.call(this, F, L, R), this;
        if (S(F)) {
          var W = F;
          return this.filter(function(X, rt) {
            return !rt.dir && W.test(X);
          });
        }
        var D = this.files[this.root + F];
        return D && !D.dir ? D : null;
      }, folder: function(F) {
        if (!F)
          return this;
        if (S(F))
          return this.filter(function(D, X) {
            return X.dir && F.test(D);
          });
        var L = this.root + F, R = w.call(this, L), W = this.clone();
        return W.root = R.name, W;
      }, remove: function(F) {
        F = this.root + F;
        var L = this.files[F];
        if (L || (F.slice(-1) !== "/" && (F += "/"), L = this.files[F]), L && !L.dir)
          delete this.files[F];
        else
          for (var R = this.filter(function(D, X) {
            return X.name.slice(0, F.length) === F;
          }), W = 0; W < R.length; W++)
            delete this.files[R[W].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(F) {
        var L, R = {};
        try {
          if ((R = n.extend(F || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = R.type.toLowerCase(), R.compression = R.compression.toUpperCase(), R.type === "binarystring" && (R.type = "string"), !R.type)
            throw new Error("No output type specified.");
          n.checkSupport(R.type), R.platform !== "darwin" && R.platform !== "freebsd" && R.platform !== "linux" && R.platform !== "sunos" || (R.platform = "UNIX"), R.platform === "win32" && (R.platform = "DOS");
          var W = R.comment || this.comment || "";
          L = l.generateWorker(this, R, W);
        } catch (D) {
          (L = new o("error")).error(D);
        }
        return new p(L, R.type || "string", R.mimeType);
      }, generateAsync: function(F, L) {
        return this.generateInternalStream(F).accumulate(L);
      }, generateNodeStream: function(F, L) {
        return (F = F || {}).type || (F.type = "nodebuffer"), this.generateInternalStream(F).toNodejsStream(L);
      } };
      h.exports = U;
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
        for (var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), b = n.charCodeAt(3), y = this.length - 4; 0 <= y; --y)
          if (this.data[y] === o && this.data[y + 1] === p && this.data[y + 2] === m && this.data[y + 3] === b)
            return y - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(n) {
        var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), b = n.charCodeAt(3), y = this.readData(4);
        return o === y[0] && p === y[1] && m === y[2] && b === y[3];
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
      h.exports = function(b) {
        var y = r.getTypeOf(b);
        return r.checkSupport(y), y !== "string" || a.uint8array ? y === "nodebuffer" ? new p(b) : a.uint8array ? new m(r.transformTo("uint8array", b)) : new n(r.transformTo("array", b)) : new o(b);
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
      var r = e("../utils"), a = e("./ConvertWorker"), n = e("./GenericWorker"), o = e("../base64"), p = e("../support"), m = e("../external"), b = null;
      if (p.nodestream)
        try {
          b = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function y(g, s) {
        return new m.Promise(function(d, u) {
          var w = [], S = g._internalType, U = g._outputType, F = g._mimeType;
          g.on("data", function(L, R) {
            w.push(L), s && s(R);
          }).on("error", function(L) {
            w = [], u(L);
          }).on("end", function() {
            try {
              var L = function(R, W, D) {
                switch (R) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", W), D);
                  case "base64":
                    return o.encode(W);
                  default:
                    return r.transformTo(R, W);
                }
              }(U, function(R, W) {
                var D, X = 0, rt = null, k = 0;
                for (D = 0; D < W.length; D++)
                  k += W[D].length;
                switch (R) {
                  case "string":
                    return W.join("");
                  case "array":
                    return Array.prototype.concat.apply([], W);
                  case "uint8array":
                    for (rt = new Uint8Array(k), D = 0; D < W.length; D++)
                      rt.set(W[D], X), X += W[D].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(W);
                  default:
                    throw new Error("concat : unsupported type '" + R + "'");
                }
              }(S, w), F);
              d(L);
            } catch (R) {
              u(R);
            }
            w = [];
          }).resume();
        });
      }
      function l(g, s, d) {
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
          this._internalType = u, this._outputType = s, this._mimeType = d, r.checkSupport(u), this._worker = g.pipe(new a(u)), g.lock();
        } catch (w) {
          this._worker = new n("error"), this._worker.error(w);
        }
      }
      l.prototype = { accumulate: function(g) {
        return y(this, g);
      }, on: function(g, s) {
        var d = this;
        return g === "data" ? this._worker.on(g, function(u) {
          s.call(d, u.data, u.meta);
        }) : this._worker.on(g, function() {
          r.delay(s, arguments, d);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(g) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new b(this, { objectMode: this._outputType !== "nodebuffer" }, g);
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
      function b() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function y() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(l) {
        return a.nodebuffer ? n.newBufferFrom(l, "utf-8") : function(g) {
          var s, d, u, w, S, U = g.length, F = 0;
          for (w = 0; w < U; w++)
            (64512 & (d = g.charCodeAt(w))) == 55296 && w + 1 < U && (64512 & (u = g.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), F += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(F) : new Array(F), w = S = 0; S < F; w++)
            (64512 & (d = g.charCodeAt(w))) == 55296 && w + 1 < U && (64512 & (u = g.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), d < 128 ? s[S++] = d : (d < 2048 ? s[S++] = 192 | d >>> 6 : (d < 65536 ? s[S++] = 224 | d >>> 12 : (s[S++] = 240 | d >>> 18, s[S++] = 128 | d >>> 12 & 63), s[S++] = 128 | d >>> 6 & 63), s[S++] = 128 | 63 & d);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(g) {
          var s, d, u, w, S = g.length, U = new Array(2 * S);
          for (s = d = 0; s < S; )
            if ((u = g[s++]) < 128)
              U[d++] = u;
            else if (4 < (w = p[u]))
              U[d++] = 65533, s += w - 1;
            else {
              for (u &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < S; )
                u = u << 6 | 63 & g[s++], w--;
              1 < w ? U[d++] = 65533 : u < 65536 ? U[d++] = u : (u -= 65536, U[d++] = 55296 | u >> 10 & 1023, U[d++] = 56320 | 1023 & u);
            }
          return U.length !== d && (U.subarray ? U = U.subarray(0, d) : U.length = d), r.applyFromCharCode(U);
        }(l = r.transformTo(a.uint8array ? "uint8array" : "array", l));
      }, r.inherits(b, o), b.prototype.processChunk = function(l) {
        var g = r.transformTo(a.uint8array ? "uint8array" : "array", l.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var s = g;
            (g = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), g.set(s, this.leftOver.length);
          } else
            g = this.leftOver.concat(g);
          this.leftOver = null;
        }
        var d = function(w, S) {
          var U;
          for ((S = S || w.length) > w.length && (S = w.length), U = S - 1; 0 <= U && (192 & w[U]) == 128; )
            U--;
          return U < 0 || U === 0 ? S : U + p[w[U]] > S ? U : S;
        }(g), u = g;
        d !== g.length && (a.uint8array ? (u = g.subarray(0, d), this.leftOver = g.subarray(d, g.length)) : (u = g.slice(0, d), this.leftOver = g.slice(d, g.length))), this.push({ data: c.utf8decode(u), meta: l.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = b, r.inherits(y, o), y.prototype.processChunk = function(l) {
        this.push({ data: c.utf8encode(l.data), meta: l.meta });
      }, c.Utf8EncodeWorker = y;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, h, c) {
      var r = e("./support"), a = e("./base64"), n = e("./nodejsUtils"), o = e("./external");
      function p(s) {
        return s;
      }
      function m(s, d) {
        for (var u = 0; u < s.length; ++u)
          d[u] = 255 & s.charCodeAt(u);
        return d;
      }
      e("setimmediate"), c.newBlob = function(s, d) {
        c.checkSupport("blob");
        try {
          return new Blob([s], { type: d });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(s), u.getBlob(d);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var b = { stringifyByChunk: function(s, d, u) {
        var w = [], S = 0, U = s.length;
        if (U <= u)
          return String.fromCharCode.apply(null, s);
        for (; S < U; )
          d === "array" || d === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(S, Math.min(S + u, U)))) : w.push(String.fromCharCode.apply(null, s.subarray(S, Math.min(S + u, U)))), S += u;
        return w.join("");
      }, stringifyByChar: function(s) {
        for (var d = "", u = 0; u < s.length; u++)
          d += String.fromCharCode(s[u]);
        return d;
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
      function y(s) {
        var d = 65536, u = c.getTypeOf(s), w = !0;
        if (u === "uint8array" ? w = b.applyCanBeUsed.uint8array : u === "nodebuffer" && (w = b.applyCanBeUsed.nodebuffer), w)
          for (; 1 < d; )
            try {
              return b.stringifyByChunk(s, u, d);
            } catch {
              d = Math.floor(d / 2);
            }
        return b.stringifyByChar(s);
      }
      function l(s, d) {
        for (var u = 0; u < s.length; u++)
          d[u] = s[u];
        return d;
      }
      c.applyFromCharCode = y;
      var g = {};
      g.string = { string: p, array: function(s) {
        return m(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return g.string.uint8array(s).buffer;
      }, uint8array: function(s) {
        return m(s, new Uint8Array(s.length));
      }, nodebuffer: function(s) {
        return m(s, n.allocBuffer(s.length));
      } }, g.array = { string: y, array: p, arraybuffer: function(s) {
        return new Uint8Array(s).buffer;
      }, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.arraybuffer = { string: function(s) {
        return y(new Uint8Array(s));
      }, array: function(s) {
        return l(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: p, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(new Uint8Array(s));
      } }, g.uint8array = { string: y, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: p, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.nodebuffer = { string: y, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return g.nodebuffer.uint8array(s).buffer;
      }, uint8array: function(s) {
        return l(s, new Uint8Array(s.length));
      }, nodebuffer: p }, c.transformTo = function(s, d) {
        if (d = d || "", !s)
          return d;
        c.checkSupport(s);
        var u = c.getTypeOf(d);
        return g[u][s](d);
      }, c.resolve = function(s) {
        for (var d = s.split("/"), u = [], w = 0; w < d.length; w++) {
          var S = d[w];
          S === "." || S === "" && w !== 0 && w !== d.length - 1 || (S === ".." ? u.pop() : u.push(S));
        }
        return u.join("/");
      }, c.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(s) {
        var d, u, w = "";
        for (u = 0; u < (s || "").length; u++)
          w += "\\x" + ((d = s.charCodeAt(u)) < 16 ? "0" : "") + d.toString(16).toUpperCase();
        return w;
      }, c.delay = function(s, d, u) {
        setImmediate(function() {
          s.apply(u || null, d || []);
        });
      }, c.inherits = function(s, d) {
        function u() {
        }
        u.prototype = d.prototype, s.prototype = new u();
      }, c.extend = function() {
        var s, d, u = {};
        for (s = 0; s < arguments.length; s++)
          for (d in arguments[s])
            Object.prototype.hasOwnProperty.call(arguments[s], d) && u[d] === void 0 && (u[d] = arguments[s][d]);
        return u;
      }, c.prepareContent = function(s, d, u, w, S) {
        return o.Promise.resolve(d).then(function(U) {
          return r.blob && (U instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(U)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(F, L) {
            var R = new FileReader();
            R.onload = function(W) {
              F(W.target.result);
            }, R.onerror = function(W) {
              L(W.target.error);
            }, R.readAsArrayBuffer(U);
          }) : U;
        }).then(function(U) {
          var F = c.getTypeOf(U);
          return F ? (F === "arraybuffer" ? U = c.transformTo("uint8array", U) : F === "string" && (S ? U = a.decode(U) : u && w !== !0 && (U = function(L) {
            return m(L, r.uint8array ? new Uint8Array(L.length) : new Array(L.length));
          }(U))), U) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./signature"), o = e("./zipEntry"), p = e("./support");
      function m(b) {
        this.files = [], this.loadOptions = b;
      }
      m.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var y = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(y) + ", expected " + a.pretty(b) + ")");
        }
      }, isSignature: function(b, y) {
        var l = this.reader.index;
        this.reader.setIndex(b);
        var g = this.reader.readString(4) === y;
        return this.reader.setIndex(l), g;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), y = p.uint8array ? "uint8array" : "array", l = a.transformTo(y, b);
        this.zipComment = this.loadOptions.decodeFileName(l);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, y, l, g = this.zip64EndOfCentralSize - 44; 0 < g; )
          b = this.reader.readInt(2), y = this.reader.readInt(4), l = this.reader.readData(y), this.zip64ExtensibleData[b] = { id: b, length: y, value: l };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, y;
        for (b = 0; b < this.files.length; b++)
          y = this.files[b], this.reader.setIndex(y.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), y.readLocalPart(this.reader), y.handleUTF8(), y.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (b = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (b < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var y = b;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var l = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (l += 20, l += 12 + this.zip64EndOfCentralSize);
        var g = y - l;
        if (0 < g)
          this.isSignature(y, n.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
        else if (g < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = r(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./compressedObject"), o = e("./crc32"), p = e("./utf8"), m = e("./compressions"), b = e("./support");
      function y(l, g) {
        this.options = l, this.loadOptions = g;
      }
      y.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(l) {
        var g, s;
        if (l.skip(22), this.fileNameLength = l.readInt(2), s = l.readInt(2), this.fileName = l.readData(this.fileNameLength), l.skip(s), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((g = function(d) {
          for (var u in m)
            if (Object.prototype.hasOwnProperty.call(m, u) && m[u].magic === d)
              return m[u];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, g, l.readData(this.compressedSize));
      }, readCentralPart: function(l) {
        this.versionMadeBy = l.readInt(2), l.skip(2), this.bitFlag = l.readInt(2), this.compressionMethod = l.readString(2), this.date = l.readDate(), this.crc32 = l.readInt(4), this.compressedSize = l.readInt(4), this.uncompressedSize = l.readInt(4);
        var g = l.readInt(2);
        if (this.extraFieldsLength = l.readInt(2), this.fileCommentLength = l.readInt(2), this.diskNumberStart = l.readInt(2), this.internalFileAttributes = l.readInt(2), this.externalFileAttributes = l.readInt(4), this.localHeaderOffset = l.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        l.skip(g), this.readExtraFields(l), this.parseZIP64ExtraField(l), this.fileComment = l.readData(this.fileCommentLength);
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
        var g, s, d, u = l.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); l.index + 4 < u; )
          g = l.readInt(2), s = l.readInt(2), d = l.readData(s), this.extraFields[g] = { id: g, length: s, value: d };
        l.setIndex(u);
      }, handleUTF8: function() {
        var l = b.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
        else {
          var g = this.findExtraFieldUnicodePath();
          if (g !== null)
            this.fileNameStr = g;
          else {
            var s = a.transformTo(l, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(s);
          }
          var d = this.findExtraFieldUnicodeComment();
          if (d !== null)
            this.fileCommentStr = d;
          else {
            var u = a.transformTo(l, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var l = this.extraFields[28789];
        if (l) {
          var g = r(l.value);
          return g.readInt(1) !== 1 || o(this.fileName) !== g.readInt(4) ? null : p.utf8decode(g.readData(l.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var l = this.extraFields[25461];
        if (l) {
          var g = r(l.value);
          return g.readInt(1) !== 1 || o(this.fileComment) !== g.readInt(4) ? null : p.utf8decode(g.readData(l.length - 5));
        }
        return null;
      } }, h.exports = y;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, h, c) {
      function r(g, s, d) {
        this.name = g, this.dir = d.dir, this.date = d.date, this.comment = d.comment, this.unixPermissions = d.unixPermissions, this.dosPermissions = d.dosPermissions, this._data = s, this._dataBinary = d.binary, this.options = { compression: d.compression, compressionOptions: d.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), o = e("./utf8"), p = e("./compressedObject"), m = e("./stream/GenericWorker");
      r.prototype = { internalStream: function(g) {
        var s = null, d = "string";
        try {
          if (!g)
            throw new Error("No output type specified.");
          var u = (d = g.toLowerCase()) === "string" || d === "text";
          d !== "binarystring" && d !== "text" || (d = "string"), s = this._decompressWorker();
          var w = !this._dataBinary;
          w && !u && (s = s.pipe(new o.Utf8EncodeWorker())), !w && u && (s = s.pipe(new o.Utf8DecodeWorker()));
        } catch (S) {
          (s = new m("error")).error(S);
        }
        return new a(s, d, "");
      }, async: function(g, s) {
        return this.internalStream(g).accumulate(s);
      }, nodeStream: function(g, s) {
        return this.internalStream(g || "nodebuffer").toNodejsStream(s);
      }, _compressWorker: function(g, s) {
        if (this._data instanceof p && this._data.compression.magic === g.magic)
          return this._data.getCompressedWorker();
        var d = this._decompressWorker();
        return this._dataBinary || (d = d.pipe(new o.Utf8EncodeWorker())), p.createWorkerFrom(d, g, s);
      }, _decompressWorker: function() {
        return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof m ? this._data : new n(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], y = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, l = 0; l < b.length; l++)
        r.prototype[b[l]] = y;
      h.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, h, c) {
      (function(r) {
        var a, n, o = r.MutationObserver || r.WebKitMutationObserver;
        if (o) {
          var p = 0, m = new o(g), b = r.document.createTextNode("");
          m.observe(b, { characterData: !0 }), a = function() {
            b.data = p = ++p % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0)
          a = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
            var s = r.document.createElement("script");
            s.onreadystatechange = function() {
              g(), s.onreadystatechange = null, s.parentNode.removeChild(s), s = null;
            }, r.document.documentElement.appendChild(s);
          } : function() {
            setTimeout(g, 0);
          };
        else {
          var y = new r.MessageChannel();
          y.port1.onmessage = g, a = function() {
            y.port2.postMessage(0);
          };
        }
        var l = [];
        function g() {
          var s, d;
          n = !0;
          for (var u = l.length; u; ) {
            for (d = l, l = [], s = -1; ++s < u; )
              d[s]();
            u = l.length;
          }
          n = !1;
        }
        h.exports = function(s) {
          l.push(s) !== 1 || n || a();
        };
      }).call(this, typeof Ut < "u" ? Ut : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, h, c) {
      var r = e("immediate");
      function a() {
      }
      var n = {}, o = ["REJECTED"], p = ["FULFILLED"], m = ["PENDING"];
      function b(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, u !== a && s(this, u);
      }
      function y(u, w, S) {
        this.promise = u, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof S == "function" && (this.onRejected = S, this.callRejected = this.otherCallRejected);
      }
      function l(u, w, S) {
        r(function() {
          var U;
          try {
            U = w(S);
          } catch (F) {
            return n.reject(u, F);
          }
          U === u ? n.reject(u, new TypeError("Cannot resolve promise with itself")) : n.resolve(u, U);
        });
      }
      function g(u) {
        var w = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof w == "function")
          return function() {
            w.apply(u, arguments);
          };
      }
      function s(u, w) {
        var S = !1;
        function U(R) {
          S || (S = !0, n.reject(u, R));
        }
        function F(R) {
          S || (S = !0, n.resolve(u, R));
        }
        var L = d(function() {
          w(F, U);
        });
        L.status === "error" && U(L.value);
      }
      function d(u, w) {
        var S = {};
        try {
          S.value = u(w), S.status = "success";
        } catch (U) {
          S.status = "error", S.value = U;
        }
        return S;
      }
      (h.exports = b).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var w = this.constructor;
        return this.then(function(S) {
          return w.resolve(u()).then(function() {
            return S;
          });
        }, function(S) {
          return w.resolve(u()).then(function() {
            throw S;
          });
        });
      }, b.prototype.catch = function(u) {
        return this.then(null, u);
      }, b.prototype.then = function(u, w) {
        if (typeof u != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var S = new this.constructor(a);
        return this.state !== m ? l(S, this.state === p ? u : w, this.outcome) : this.queue.push(new y(S, u, w)), S;
      }, y.prototype.callFulfilled = function(u) {
        n.resolve(this.promise, u);
      }, y.prototype.otherCallFulfilled = function(u) {
        l(this.promise, this.onFulfilled, u);
      }, y.prototype.callRejected = function(u) {
        n.reject(this.promise, u);
      }, y.prototype.otherCallRejected = function(u) {
        l(this.promise, this.onRejected, u);
      }, n.resolve = function(u, w) {
        var S = d(g, w);
        if (S.status === "error")
          return n.reject(u, S.value);
        var U = S.value;
        if (U)
          s(u, U);
        else {
          u.state = p, u.outcome = w;
          for (var F = -1, L = u.queue.length; ++F < L; )
            u.queue[F].callFulfilled(w);
        }
        return u;
      }, n.reject = function(u, w) {
        u.state = o, u.outcome = w;
        for (var S = -1, U = u.queue.length; ++S < U; )
          u.queue[S].callRejected(w);
        return u;
      }, b.resolve = function(u) {
        return u instanceof this ? u : n.resolve(new this(a), u);
      }, b.reject = function(u) {
        var w = new this(a);
        return n.reject(w, u);
      }, b.all = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = u.length, U = !1;
        if (!S)
          return this.resolve([]);
        for (var F = new Array(S), L = 0, R = -1, W = new this(a); ++R < S; )
          D(u[R], R);
        return W;
        function D(X, rt) {
          w.resolve(X).then(function(k) {
            F[rt] = k, ++L !== S || U || (U = !0, n.resolve(W, F));
          }, function(k) {
            U || (U = !0, n.reject(W, k));
          });
        }
      }, b.race = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = u.length, U = !1;
        if (!S)
          return this.resolve([]);
        for (var F = -1, L = new this(a); ++F < S; )
          R = u[F], w.resolve(R).then(function(W) {
            U || (U = !0, n.resolve(L, W));
          }, function(W) {
            U || (U = !0, n.reject(L, W));
          });
        var R;
        return L;
      };
    }, { immediate: 36 }], 38: [function(e, h, c) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), h.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, h, c) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, b = 0, y = -1, l = 0, g = 8;
      function s(u) {
        if (!(this instanceof s))
          return new s(u);
        this.options = a.assign({ level: y, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, u || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var S = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (S !== b)
          throw new Error(o[S]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var U;
          if (U = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (S = r.deflateSetDictionary(this.strm, U)) !== b)
            throw new Error(o[S]);
          this._dict_set = !0;
        }
      }
      function d(u, w) {
        var S = new s(w);
        if (S.push(u, !0), S.err)
          throw S.msg || o[S.err];
        return S.result;
      }
      s.prototype.push = function(u, w) {
        var S, U, F = this.strm, L = this.options.chunkSize;
        if (this.ended)
          return !1;
        U = w === ~~w ? w : w === !0 ? 4 : 0, typeof u == "string" ? F.input = n.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? F.input = new Uint8Array(u) : F.input = u, F.next_in = 0, F.avail_in = F.input.length;
        do {
          if (F.avail_out === 0 && (F.output = new a.Buf8(L), F.next_out = 0, F.avail_out = L), (S = r.deflate(F, U)) !== 1 && S !== b)
            return this.onEnd(S), !(this.ended = !0);
          F.avail_out !== 0 && (F.avail_in !== 0 || U !== 4 && U !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(F.output, F.next_out))) : this.onData(a.shrinkBuf(F.output, F.next_out)));
        } while ((0 < F.avail_in || F.avail_out === 0) && S !== 1);
        return U === 4 ? (S = r.deflateEnd(this.strm), this.onEnd(S), this.ended = !0, S === b) : U !== 2 || (this.onEnd(b), !(F.avail_out = 0));
      }, s.prototype.onData = function(u) {
        this.chunks.push(u);
      }, s.prototype.onEnd = function(u) {
        u === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = s, c.deflate = d, c.deflateRaw = function(u, w) {
        return (w = w || {}).raw = !0, d(u, w);
      }, c.gzip = function(u, w) {
        return (w = w || {}).gzip = !0, d(u, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, h, c) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), b = e("./zlib/gzheader"), y = Object.prototype.toString;
      function l(s) {
        if (!(this instanceof l))
          return new l(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var d = this.options;
        d.raw && 0 <= d.windowBits && d.windowBits < 16 && (d.windowBits = -d.windowBits, d.windowBits === 0 && (d.windowBits = -15)), !(0 <= d.windowBits && d.windowBits < 16) || s && s.windowBits || (d.windowBits += 32), 15 < d.windowBits && d.windowBits < 48 && !(15 & d.windowBits) && (d.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var u = r.inflateInit2(this.strm, d.windowBits);
        if (u !== o.Z_OK)
          throw new Error(p[u]);
        this.header = new b(), r.inflateGetHeader(this.strm, this.header);
      }
      function g(s, d) {
        var u = new l(d);
        if (u.push(s, !0), u.err)
          throw u.msg || p[u.err];
        return u.result;
      }
      l.prototype.push = function(s, d) {
        var u, w, S, U, F, L, R = this.strm, W = this.options.chunkSize, D = this.options.dictionary, X = !1;
        if (this.ended)
          return !1;
        w = d === ~~d ? d : d === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? R.input = n.binstring2buf(s) : y.call(s) === "[object ArrayBuffer]" ? R.input = new Uint8Array(s) : R.input = s, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new a.Buf8(W), R.next_out = 0, R.avail_out = W), (u = r.inflate(R, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && D && (L = typeof D == "string" ? n.string2buf(D) : y.call(D) === "[object ArrayBuffer]" ? new Uint8Array(D) : D, u = r.inflateSetDictionary(this.strm, L)), u === o.Z_BUF_ERROR && X === !0 && (u = o.Z_OK, X = !1), u !== o.Z_STREAM_END && u !== o.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          R.next_out && (R.avail_out !== 0 && u !== o.Z_STREAM_END && (R.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (S = n.utf8border(R.output, R.next_out), U = R.next_out - S, F = n.buf2string(R.output, S), R.next_out = U, R.avail_out = W - U, U && a.arraySet(R.output, R.output, S, U, 0), this.onData(F)) : this.onData(a.shrinkBuf(R.output, R.next_out)))), R.avail_in === 0 && R.avail_out === 0 && (X = !0);
        } while ((0 < R.avail_in || R.avail_out === 0) && u !== o.Z_STREAM_END);
        return u === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (u = r.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(R.avail_out = 0));
      }, l.prototype.onData = function(s) {
        this.chunks.push(s);
      }, l.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, c.Inflate = l, c.inflate = g, c.inflateRaw = function(s, d) {
        return (d = d || {}).raw = !0, g(s, d);
      }, c.ungzip = g;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, h, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(o) {
        for (var p = Array.prototype.slice.call(arguments, 1); p.length; ) {
          var m = p.shift();
          if (m) {
            if (typeof m != "object")
              throw new TypeError(m + "must be non-object");
            for (var b in m)
              m.hasOwnProperty(b) && (o[b] = m[b]);
          }
        }
        return o;
      }, c.shrinkBuf = function(o, p) {
        return o.length === p ? o : o.subarray ? o.subarray(0, p) : (o.length = p, o);
      };
      var a = { arraySet: function(o, p, m, b, y) {
        if (p.subarray && o.subarray)
          o.set(p.subarray(m, m + b), y);
        else
          for (var l = 0; l < b; l++)
            o[y + l] = p[m + l];
      }, flattenChunks: function(o) {
        var p, m, b, y, l, g;
        for (p = b = 0, m = o.length; p < m; p++)
          b += o[p].length;
        for (g = new Uint8Array(b), p = y = 0, m = o.length; p < m; p++)
          l = o[p], g.set(l, y), y += l.length;
        return g;
      } }, n = { arraySet: function(o, p, m, b, y) {
        for (var l = 0; l < b; l++)
          o[y + l] = p[m + l];
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
      function m(b, y) {
        if (y < 65537 && (b.subarray && n || !b.subarray && a))
          return String.fromCharCode.apply(null, r.shrinkBuf(b, y));
        for (var l = "", g = 0; g < y; g++)
          l += String.fromCharCode(b[g]);
        return l;
      }
      o[254] = o[254] = 1, c.string2buf = function(b) {
        var y, l, g, s, d, u = b.length, w = 0;
        for (s = 0; s < u; s++)
          (64512 & (l = b.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = b.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), w += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (y = new r.Buf8(w), s = d = 0; d < w; s++)
          (64512 & (l = b.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = b.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), l < 128 ? y[d++] = l : (l < 2048 ? y[d++] = 192 | l >>> 6 : (l < 65536 ? y[d++] = 224 | l >>> 12 : (y[d++] = 240 | l >>> 18, y[d++] = 128 | l >>> 12 & 63), y[d++] = 128 | l >>> 6 & 63), y[d++] = 128 | 63 & l);
        return y;
      }, c.buf2binstring = function(b) {
        return m(b, b.length);
      }, c.binstring2buf = function(b) {
        for (var y = new r.Buf8(b.length), l = 0, g = y.length; l < g; l++)
          y[l] = b.charCodeAt(l);
        return y;
      }, c.buf2string = function(b, y) {
        var l, g, s, d, u = y || b.length, w = new Array(2 * u);
        for (l = g = 0; l < u; )
          if ((s = b[l++]) < 128)
            w[g++] = s;
          else if (4 < (d = o[s]))
            w[g++] = 65533, l += d - 1;
          else {
            for (s &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && l < u; )
              s = s << 6 | 63 & b[l++], d--;
            1 < d ? w[g++] = 65533 : s < 65536 ? w[g++] = s : (s -= 65536, w[g++] = 55296 | s >> 10 & 1023, w[g++] = 56320 | 1023 & s);
          }
        return m(w, g);
      }, c.utf8border = function(b, y) {
        var l;
        for ((y = y || b.length) > b.length && (y = b.length), l = y - 1; 0 <= l && (192 & b[l]) == 128; )
          l--;
        return l < 0 || l === 0 ? y : l + o[b[l]] > y ? l : y;
      };
    }, { "./common": 41 }], 43: [function(e, h, c) {
      h.exports = function(r, a, n, o) {
        for (var p = 65535 & r | 0, m = r >>> 16 & 65535 | 0, b = 0; n !== 0; ) {
          for (n -= b = 2e3 < n ? 2e3 : n; m = m + (p = p + a[o++] | 0) | 0, --b; )
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
        var m = r, b = p + o;
        a ^= -1;
        for (var y = p; y < b; y++)
          a = a >>> 8 ^ m[255 & (a ^ n[y])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, h, c) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), b = 0, y = 4, l = 0, g = -2, s = -1, d = 4, u = 2, w = 8, S = 9, U = 286, F = 30, L = 19, R = 2 * U + 1, W = 15, D = 3, X = 258, rt = X + D + 1, k = 42, T = 113, i = 1, M = 2, it = 3, C = 4;
      function O(t, Q) {
        return t.msg = m[Q], Q;
      }
      function N(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function z(t) {
        for (var Q = t.length; 0 <= --Q; )
          t[Q] = 0;
      }
      function x(t) {
        var Q = t.state, V = Q.pending;
        V > t.avail_out && (V = t.avail_out), V !== 0 && (a.arraySet(t.output, Q.pending_buf, Q.pending_out, V, t.next_out), t.next_out += V, Q.pending_out += V, t.total_out += V, t.avail_out -= V, Q.pending -= V, Q.pending === 0 && (Q.pending_out = 0));
      }
      function I(t, Q) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, Q), t.block_start = t.strstart, x(t.strm);
      }
      function q(t, Q) {
        t.pending_buf[t.pending++] = Q;
      }
      function P(t, Q) {
        t.pending_buf[t.pending++] = Q >>> 8 & 255, t.pending_buf[t.pending++] = 255 & Q;
      }
      function H(t, Q) {
        var V, v, A = t.max_chain_length, _ = t.strstart, j = t.prev_length, G = t.nice_match, B = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, J = t.window, $ = t.w_mask, Z = t.prev, tt = t.strstart + X, ht = J[_ + j - 1], st = J[_ + j];
        t.prev_length >= t.good_match && (A >>= 2), G > t.lookahead && (G = t.lookahead);
        do
          if (J[(V = Q) + j] === st && J[V + j - 1] === ht && J[V] === J[_] && J[++V] === J[_ + 1]) {
            _ += 2, V++;
            do
              ;
            while (J[++_] === J[++V] && J[++_] === J[++V] && J[++_] === J[++V] && J[++_] === J[++V] && J[++_] === J[++V] && J[++_] === J[++V] && J[++_] === J[++V] && J[++_] === J[++V] && _ < tt);
            if (v = X - (tt - _), _ = tt - X, j < v) {
              if (t.match_start = Q, G <= (j = v))
                break;
              ht = J[_ + j - 1], st = J[_ + j];
            }
          }
        while ((Q = Z[Q & $]) > B && --A != 0);
        return j <= t.lookahead ? j : t.lookahead;
      }
      function ct(t) {
        var Q, V, v, A, _, j, G, B, J, $, Z = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= Z + (Z - rt)) {
            for (a.arraySet(t.window, t.window, Z, Z, 0), t.match_start -= Z, t.strstart -= Z, t.block_start -= Z, Q = V = t.hash_size; v = t.head[--Q], t.head[Q] = Z <= v ? v - Z : 0, --V; )
              ;
            for (Q = V = Z; v = t.prev[--Q], t.prev[Q] = Z <= v ? v - Z : 0, --V; )
              ;
            A += Z;
          }
          if (t.strm.avail_in === 0)
            break;
          if (j = t.strm, G = t.window, B = t.strstart + t.lookahead, J = A, $ = void 0, $ = j.avail_in, J < $ && ($ = J), V = $ === 0 ? 0 : (j.avail_in -= $, a.arraySet(G, j.input, j.next_in, $, B), j.state.wrap === 1 ? j.adler = o(j.adler, G, $, B) : j.state.wrap === 2 && (j.adler = p(j.adler, G, $, B)), j.next_in += $, j.total_in += $, $), t.lookahead += V, t.lookahead + t.insert >= D)
            for (_ = t.strstart - t.insert, t.ins_h = t.window[_], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[_ + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[_ + D - 1]) & t.hash_mask, t.prev[_ & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = _, _++, t.insert--, !(t.lookahead + t.insert < D)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function gt(t, Q) {
        for (var V, v; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && Q === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (V = 0, t.lookahead >= D && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), V !== 0 && t.strstart - V <= t.w_size - rt && (t.match_length = H(t, V)), t.match_length >= D)
            if (v = n._tr_tally(t, t.strstart - t.match_start, t.match_length - D), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= D) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            v = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (v && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < D - 1 ? t.strstart : D - 1, Q === y ? (I(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : M;
      }
      function ot(t, Q) {
        for (var V, v, A; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && Q === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (V = 0, t.lookahead >= D && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = D - 1, V !== 0 && t.prev_length < t.max_lazy_match && t.strstart - V <= t.w_size - rt && (t.match_length = H(t, V), t.match_length <= 5 && (t.strategy === 1 || t.match_length === D && 4096 < t.strstart - t.match_start) && (t.match_length = D - 1)), t.prev_length >= D && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - D, v = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - D), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = D - 1, t.strstart++, v && (I(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((v = n._tr_tally(t, 0, t.window[t.strstart - 1])) && I(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (v = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < D - 1 ? t.strstart : D - 1, Q === y ? (I(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : M;
      }
      function at(t, Q, V, v, A) {
        this.good_length = t, this.max_lazy = Q, this.nice_length = V, this.max_chain = v, this.func = A;
      }
      function ft() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * R), this.dyn_dtree = new a.Buf16(2 * (2 * F + 1)), this.bl_tree = new a.Buf16(2 * (2 * L + 1)), z(this.dyn_ltree), z(this.dyn_dtree), z(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(W + 1), this.heap = new a.Buf16(2 * U + 1), z(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * U + 1), z(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ut(t) {
        var Q;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (Q = t.state).pending = 0, Q.pending_out = 0, Q.wrap < 0 && (Q.wrap = -Q.wrap), Q.status = Q.wrap ? k : T, t.adler = Q.wrap === 2 ? 0 : 1, Q.last_flush = b, n._tr_init(Q), l) : O(t, g);
      }
      function mt(t) {
        var Q = ut(t);
        return Q === l && function(V) {
          V.window_size = 2 * V.w_size, z(V.head), V.max_lazy_match = r[V.level].max_lazy, V.good_match = r[V.level].good_length, V.nice_match = r[V.level].nice_length, V.max_chain_length = r[V.level].max_chain, V.strstart = 0, V.block_start = 0, V.lookahead = 0, V.insert = 0, V.match_length = V.prev_length = D - 1, V.match_available = 0, V.ins_h = 0;
        }(t.state), Q;
      }
      function yt(t, Q, V, v, A, _) {
        if (!t)
          return g;
        var j = 1;
        if (Q === s && (Q = 6), v < 0 ? (j = 0, v = -v) : 15 < v && (j = 2, v -= 16), A < 1 || S < A || V !== w || v < 8 || 15 < v || Q < 0 || 9 < Q || _ < 0 || d < _)
          return O(t, g);
        v === 8 && (v = 9);
        var G = new ft();
        return (t.state = G).strm = t, G.wrap = j, G.gzhead = null, G.w_bits = v, G.w_size = 1 << G.w_bits, G.w_mask = G.w_size - 1, G.hash_bits = A + 7, G.hash_size = 1 << G.hash_bits, G.hash_mask = G.hash_size - 1, G.hash_shift = ~~((G.hash_bits + D - 1) / D), G.window = new a.Buf8(2 * G.w_size), G.head = new a.Buf16(G.hash_size), G.prev = new a.Buf16(G.w_size), G.lit_bufsize = 1 << A + 6, G.pending_buf_size = 4 * G.lit_bufsize, G.pending_buf = new a.Buf8(G.pending_buf_size), G.d_buf = 1 * G.lit_bufsize, G.l_buf = 3 * G.lit_bufsize, G.level = Q, G.strategy = _, G.method = V, mt(t);
      }
      r = [new at(0, 0, 0, 0, function(t, Q) {
        var V = 65535;
        for (V > t.pending_buf_size - 5 && (V = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ct(t), t.lookahead === 0 && Q === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var v = t.block_start + V;
          if ((t.strstart === 0 || t.strstart >= v) && (t.lookahead = t.strstart - v, t.strstart = v, I(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, Q === y ? (I(t, !0), t.strm.avail_out === 0 ? it : C) : (t.strstart > t.block_start && (I(t, !1), t.strm.avail_out), i);
      }), new at(4, 4, 8, 4, gt), new at(4, 5, 16, 8, gt), new at(4, 6, 32, 32, gt), new at(4, 4, 16, 16, ot), new at(8, 16, 32, 32, ot), new at(8, 16, 128, 128, ot), new at(8, 32, 128, 256, ot), new at(32, 128, 258, 1024, ot), new at(32, 258, 258, 4096, ot)], c.deflateInit = function(t, Q) {
        return yt(t, Q, w, 15, 8, 0);
      }, c.deflateInit2 = yt, c.deflateReset = mt, c.deflateResetKeep = ut, c.deflateSetHeader = function(t, Q) {
        return t && t.state ? t.state.wrap !== 2 ? g : (t.state.gzhead = Q, l) : g;
      }, c.deflate = function(t, Q) {
        var V, v, A, _;
        if (!t || !t.state || 5 < Q || Q < 0)
          return t ? O(t, g) : g;
        if (v = t.state, !t.output || !t.input && t.avail_in !== 0 || v.status === 666 && Q !== y)
          return O(t, t.avail_out === 0 ? -5 : g);
        if (v.strm = t, V = v.last_flush, v.last_flush = Q, v.status === k)
          if (v.wrap === 2)
            t.adler = 0, q(v, 31), q(v, 139), q(v, 8), v.gzhead ? (q(v, (v.gzhead.text ? 1 : 0) + (v.gzhead.hcrc ? 2 : 0) + (v.gzhead.extra ? 4 : 0) + (v.gzhead.name ? 8 : 0) + (v.gzhead.comment ? 16 : 0)), q(v, 255 & v.gzhead.time), q(v, v.gzhead.time >> 8 & 255), q(v, v.gzhead.time >> 16 & 255), q(v, v.gzhead.time >> 24 & 255), q(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), q(v, 255 & v.gzhead.os), v.gzhead.extra && v.gzhead.extra.length && (q(v, 255 & v.gzhead.extra.length), q(v, v.gzhead.extra.length >> 8 & 255)), v.gzhead.hcrc && (t.adler = p(t.adler, v.pending_buf, v.pending, 0)), v.gzindex = 0, v.status = 69) : (q(v, 0), q(v, 0), q(v, 0), q(v, 0), q(v, 0), q(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), q(v, 3), v.status = T);
          else {
            var j = w + (v.w_bits - 8 << 4) << 8;
            j |= (2 <= v.strategy || v.level < 2 ? 0 : v.level < 6 ? 1 : v.level === 6 ? 2 : 3) << 6, v.strstart !== 0 && (j |= 32), j += 31 - j % 31, v.status = T, P(v, j), v.strstart !== 0 && (P(v, t.adler >>> 16), P(v, 65535 & t.adler)), t.adler = 1;
          }
        if (v.status === 69)
          if (v.gzhead.extra) {
            for (A = v.pending; v.gzindex < (65535 & v.gzhead.extra.length) && (v.pending !== v.pending_buf_size || (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending !== v.pending_buf_size)); )
              q(v, 255 & v.gzhead.extra[v.gzindex]), v.gzindex++;
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), v.gzindex === v.gzhead.extra.length && (v.gzindex = 0, v.status = 73);
          } else
            v.status = 73;
        if (v.status === 73)
          if (v.gzhead.name) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending === v.pending_buf_size)) {
                _ = 1;
                break;
              }
              _ = v.gzindex < v.gzhead.name.length ? 255 & v.gzhead.name.charCodeAt(v.gzindex++) : 0, q(v, _);
            } while (_ !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), _ === 0 && (v.gzindex = 0, v.status = 91);
          } else
            v.status = 91;
        if (v.status === 91)
          if (v.gzhead.comment) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending === v.pending_buf_size)) {
                _ = 1;
                break;
              }
              _ = v.gzindex < v.gzhead.comment.length ? 255 & v.gzhead.comment.charCodeAt(v.gzindex++) : 0, q(v, _);
            } while (_ !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), _ === 0 && (v.status = 103);
          } else
            v.status = 103;
        if (v.status === 103 && (v.gzhead.hcrc ? (v.pending + 2 > v.pending_buf_size && x(t), v.pending + 2 <= v.pending_buf_size && (q(v, 255 & t.adler), q(v, t.adler >> 8 & 255), t.adler = 0, v.status = T)) : v.status = T), v.pending !== 0) {
          if (x(t), t.avail_out === 0)
            return v.last_flush = -1, l;
        } else if (t.avail_in === 0 && N(Q) <= N(V) && Q !== y)
          return O(t, -5);
        if (v.status === 666 && t.avail_in !== 0)
          return O(t, -5);
        if (t.avail_in !== 0 || v.lookahead !== 0 || Q !== b && v.status !== 666) {
          var G = v.strategy === 2 ? function(B, J) {
            for (var $; ; ) {
              if (B.lookahead === 0 && (ct(B), B.lookahead === 0)) {
                if (J === b)
                  return i;
                break;
              }
              if (B.match_length = 0, $ = n._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++, $ && (I(B, !1), B.strm.avail_out === 0))
                return i;
            }
            return B.insert = 0, J === y ? (I(B, !0), B.strm.avail_out === 0 ? it : C) : B.last_lit && (I(B, !1), B.strm.avail_out === 0) ? i : M;
          }(v, Q) : v.strategy === 3 ? function(B, J) {
            for (var $, Z, tt, ht, st = B.window; ; ) {
              if (B.lookahead <= X) {
                if (ct(B), B.lookahead <= X && J === b)
                  return i;
                if (B.lookahead === 0)
                  break;
              }
              if (B.match_length = 0, B.lookahead >= D && 0 < B.strstart && (Z = st[tt = B.strstart - 1]) === st[++tt] && Z === st[++tt] && Z === st[++tt]) {
                ht = B.strstart + X;
                do
                  ;
                while (Z === st[++tt] && Z === st[++tt] && Z === st[++tt] && Z === st[++tt] && Z === st[++tt] && Z === st[++tt] && Z === st[++tt] && Z === st[++tt] && tt < ht);
                B.match_length = X - (ht - tt), B.match_length > B.lookahead && (B.match_length = B.lookahead);
              }
              if (B.match_length >= D ? ($ = n._tr_tally(B, 1, B.match_length - D), B.lookahead -= B.match_length, B.strstart += B.match_length, B.match_length = 0) : ($ = n._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++), $ && (I(B, !1), B.strm.avail_out === 0))
                return i;
            }
            return B.insert = 0, J === y ? (I(B, !0), B.strm.avail_out === 0 ? it : C) : B.last_lit && (I(B, !1), B.strm.avail_out === 0) ? i : M;
          }(v, Q) : r[v.level].func(v, Q);
          if (G !== it && G !== C || (v.status = 666), G === i || G === it)
            return t.avail_out === 0 && (v.last_flush = -1), l;
          if (G === M && (Q === 1 ? n._tr_align(v) : Q !== 5 && (n._tr_stored_block(v, 0, 0, !1), Q === 3 && (z(v.head), v.lookahead === 0 && (v.strstart = 0, v.block_start = 0, v.insert = 0))), x(t), t.avail_out === 0))
            return v.last_flush = -1, l;
        }
        return Q !== y ? l : v.wrap <= 0 ? 1 : (v.wrap === 2 ? (q(v, 255 & t.adler), q(v, t.adler >> 8 & 255), q(v, t.adler >> 16 & 255), q(v, t.adler >> 24 & 255), q(v, 255 & t.total_in), q(v, t.total_in >> 8 & 255), q(v, t.total_in >> 16 & 255), q(v, t.total_in >> 24 & 255)) : (P(v, t.adler >>> 16), P(v, 65535 & t.adler)), x(t), 0 < v.wrap && (v.wrap = -v.wrap), v.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var Q;
        return t && t.state ? (Q = t.state.status) !== k && Q !== 69 && Q !== 73 && Q !== 91 && Q !== 103 && Q !== T && Q !== 666 ? O(t, g) : (t.state = null, Q === T ? O(t, -3) : l) : g;
      }, c.deflateSetDictionary = function(t, Q) {
        var V, v, A, _, j, G, B, J, $ = Q.length;
        if (!t || !t.state || (_ = (V = t.state).wrap) === 2 || _ === 1 && V.status !== k || V.lookahead)
          return g;
        for (_ === 1 && (t.adler = o(t.adler, Q, $, 0)), V.wrap = 0, $ >= V.w_size && (_ === 0 && (z(V.head), V.strstart = 0, V.block_start = 0, V.insert = 0), J = new a.Buf8(V.w_size), a.arraySet(J, Q, $ - V.w_size, V.w_size, 0), Q = J, $ = V.w_size), j = t.avail_in, G = t.next_in, B = t.input, t.avail_in = $, t.next_in = 0, t.input = Q, ct(V); V.lookahead >= D; ) {
          for (v = V.strstart, A = V.lookahead - (D - 1); V.ins_h = (V.ins_h << V.hash_shift ^ V.window[v + D - 1]) & V.hash_mask, V.prev[v & V.w_mask] = V.head[V.ins_h], V.head[V.ins_h] = v, v++, --A; )
            ;
          V.strstart = v, V.lookahead = D - 1, ct(V);
        }
        return V.strstart += V.lookahead, V.block_start = V.strstart, V.insert = V.lookahead, V.lookahead = 0, V.match_length = V.prev_length = D - 1, V.match_available = 0, t.next_in = G, t.input = B, t.avail_in = j, V.wrap = _, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, c) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, c) {
      h.exports = function(r, a) {
        var n, o, p, m, b, y, l, g, s, d, u, w, S, U, F, L, R, W, D, X, rt, k, T, i, M;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, M = r.output, b = m - (a - r.avail_out), y = m + (r.avail_out - 257), l = n.dmax, g = n.wsize, s = n.whave, d = n.wnext, u = n.window, w = n.hold, S = n.bits, U = n.lencode, F = n.distcode, L = (1 << n.lenbits) - 1, R = (1 << n.distbits) - 1;
        t:
          do {
            S < 15 && (w += i[o++] << S, S += 8, w += i[o++] << S, S += 8), W = U[w & L];
            e:
              for (; ; ) {
                if (w >>>= D = W >>> 24, S -= D, (D = W >>> 16 & 255) === 0)
                  M[m++] = 65535 & W;
                else {
                  if (!(16 & D)) {
                    if (!(64 & D)) {
                      W = U[(65535 & W) + (w & (1 << D) - 1)];
                      continue e;
                    }
                    if (32 & D) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  X = 65535 & W, (D &= 15) && (S < D && (w += i[o++] << S, S += 8), X += w & (1 << D) - 1, w >>>= D, S -= D), S < 15 && (w += i[o++] << S, S += 8, w += i[o++] << S, S += 8), W = F[w & R];
                  n:
                    for (; ; ) {
                      if (w >>>= D = W >>> 24, S -= D, !(16 & (D = W >>> 16 & 255))) {
                        if (!(64 & D)) {
                          W = F[(65535 & W) + (w & (1 << D) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & W, S < (D &= 15) && (w += i[o++] << S, (S += 8) < D && (w += i[o++] << S, S += 8)), l < (rt += w & (1 << D) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= D, S -= D, (D = m - b) < rt) {
                        if (s < (D = rt - D) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (T = u, (k = 0) === d) {
                          if (k += g - D, D < X) {
                            for (X -= D; M[m++] = u[k++], --D; )
                              ;
                            k = m - rt, T = M;
                          }
                        } else if (d < D) {
                          if (k += g + d - D, (D -= d) < X) {
                            for (X -= D; M[m++] = u[k++], --D; )
                              ;
                            if (k = 0, d < X) {
                              for (X -= D = d; M[m++] = u[k++], --D; )
                                ;
                              k = m - rt, T = M;
                            }
                          }
                        } else if (k += d - D, D < X) {
                          for (X -= D; M[m++] = u[k++], --D; )
                            ;
                          k = m - rt, T = M;
                        }
                        for (; 2 < X; )
                          M[m++] = T[k++], M[m++] = T[k++], M[m++] = T[k++], X -= 3;
                        X && (M[m++] = T[k++], 1 < X && (M[m++] = T[k++]));
                      } else {
                        for (k = m - rt; M[m++] = M[k++], M[m++] = M[k++], M[m++] = M[k++], 2 < (X -= 3); )
                          ;
                        X && (M[m++] = M[k++], 1 < X && (M[m++] = M[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < y);
        o -= X = S >> 3, w &= (1 << (S -= X << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < y ? y - m + 257 : 257 - (m - y), n.hold = w, n.bits = S;
      };
    }, {}], 49: [function(e, h, c) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, b = 2, y = 0, l = -2, g = 1, s = 852, d = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function S(k) {
        var T;
        return k && k.state ? (T = k.state, k.total_in = k.total_out = T.total = 0, k.msg = "", T.wrap && (k.adler = 1 & T.wrap), T.mode = g, T.last = 0, T.havedict = 0, T.dmax = 32768, T.head = null, T.hold = 0, T.bits = 0, T.lencode = T.lendyn = new r.Buf32(s), T.distcode = T.distdyn = new r.Buf32(d), T.sane = 1, T.back = -1, y) : l;
      }
      function U(k) {
        var T;
        return k && k.state ? ((T = k.state).wsize = 0, T.whave = 0, T.wnext = 0, S(k)) : l;
      }
      function F(k, T) {
        var i, M;
        return k && k.state ? (M = k.state, T < 0 ? (i = 0, T = -T) : (i = 1 + (T >> 4), T < 48 && (T &= 15)), T && (T < 8 || 15 < T) ? l : (M.window !== null && M.wbits !== T && (M.window = null), M.wrap = i, M.wbits = T, U(k))) : l;
      }
      function L(k, T) {
        var i, M;
        return k ? (M = new w(), (k.state = M).window = null, (i = F(k, T)) !== y && (k.state = null), i) : l;
      }
      var R, W, D = !0;
      function X(k) {
        if (D) {
          var T;
          for (R = new r.Buf32(512), W = new r.Buf32(32), T = 0; T < 144; )
            k.lens[T++] = 8;
          for (; T < 256; )
            k.lens[T++] = 9;
          for (; T < 280; )
            k.lens[T++] = 7;
          for (; T < 288; )
            k.lens[T++] = 8;
          for (p(m, k.lens, 0, 288, R, 0, k.work, { bits: 9 }), T = 0; T < 32; )
            k.lens[T++] = 5;
          p(b, k.lens, 0, 32, W, 0, k.work, { bits: 5 }), D = !1;
        }
        k.lencode = R, k.lenbits = 9, k.distcode = W, k.distbits = 5;
      }
      function rt(k, T, i, M) {
        var it, C = k.state;
        return C.window === null && (C.wsize = 1 << C.wbits, C.wnext = 0, C.whave = 0, C.window = new r.Buf8(C.wsize)), M >= C.wsize ? (r.arraySet(C.window, T, i - C.wsize, C.wsize, 0), C.wnext = 0, C.whave = C.wsize) : (M < (it = C.wsize - C.wnext) && (it = M), r.arraySet(C.window, T, i - M, it, C.wnext), (M -= it) ? (r.arraySet(C.window, T, i - M, M, 0), C.wnext = M, C.whave = C.wsize) : (C.wnext += it, C.wnext === C.wsize && (C.wnext = 0), C.whave < C.wsize && (C.whave += it))), 0;
      }
      c.inflateReset = U, c.inflateReset2 = F, c.inflateResetKeep = S, c.inflateInit = function(k) {
        return L(k, 15);
      }, c.inflateInit2 = L, c.inflate = function(k, T) {
        var i, M, it, C, O, N, z, x, I, q, P, H, ct, gt, ot, at, ft, ut, mt, yt, t, Q, V, v, A = 0, _ = new r.Buf8(4), j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), O = k.next_out, it = k.output, z = k.avail_out, C = k.next_in, M = k.input, N = k.avail_in, x = i.hold, I = i.bits, q = N, P = z, Q = y;
        t:
          for (; ; )
            switch (i.mode) {
              case g:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; I < 16; ) {
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                if (2 & i.wrap && x === 35615) {
                  _[i.check = 0] = 255 & x, _[1] = x >>> 8 & 255, i.check = n(i.check, _, 2, 0), I = x = 0, i.mode = 2;
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
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                if (i.flags = x, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = x >> 8 & 1), 512 & i.flags && (_[0] = 255 & x, _[1] = x >>> 8 & 255, i.check = n(i.check, _, 2, 0)), I = x = 0, i.mode = 3;
              case 3:
                for (; I < 32; ) {
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                i.head && (i.head.time = x), 512 & i.flags && (_[0] = 255 & x, _[1] = x >>> 8 & 255, _[2] = x >>> 16 & 255, _[3] = x >>> 24 & 255, i.check = n(i.check, _, 4, 0)), I = x = 0, i.mode = 4;
              case 4:
                for (; I < 16; ) {
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                i.head && (i.head.xflags = 255 & x, i.head.os = x >> 8), 512 & i.flags && (_[0] = 255 & x, _[1] = x >>> 8 & 255, i.check = n(i.check, _, 2, 0)), I = x = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; I < 16; ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
                  }
                  i.length = x, i.head && (i.head.extra_len = x), 512 & i.flags && (_[0] = 255 & x, _[1] = x >>> 8 & 255, i.check = n(i.check, _, 2, 0)), I = x = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (N < (H = i.length) && (H = N), H && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, M, C, H, t)), 512 & i.flags && (i.check = n(i.check, M, H, C)), N -= H, C += H, i.length -= H), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (N === 0)
                    break t;
                  for (H = 0; t = M[C + H++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && H < N; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, M, H, C)), N -= H, C += H, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (N === 0)
                    break t;
                  for (H = 0; t = M[C + H++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && H < N; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, M, H, C)), N -= H, C += H, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; I < 16; ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
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
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                k.adler = i.check = u(x), I = x = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = O, k.avail_out = z, k.next_in = C, k.avail_in = N, i.hold = x, i.bits = I, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (T === 5 || T === 6)
                  break t;
              case 13:
                if (i.last) {
                  x >>>= 7 & I, I -= 7 & I, i.mode = 27;
                  break;
                }
                for (; I < 3; ) {
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                switch (i.last = 1 & x, I -= 1, 3 & (x >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (X(i), i.mode = 20, T !== 6)
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
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                if ((65535 & x) != (x >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & x, I = x = 0, i.mode = 15, T === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (H = i.length) {
                  if (N < H && (H = N), z < H && (H = z), H === 0)
                    break t;
                  r.arraySet(it, M, C, H, O), N -= H, C += H, z -= H, O += H, i.length -= H;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; I < 14; ) {
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                if (i.nlen = 257 + (31 & x), x >>>= 5, I -= 5, i.ndist = 1 + (31 & x), x >>>= 5, I -= 5, i.ncode = 4 + (15 & x), x >>>= 4, I -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; I < 3; ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
                  }
                  i.lens[j[i.have++]] = 7 & x, x >>>= 3, I -= 3;
                }
                for (; i.have < 19; )
                  i.lens[j[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, V = { bits: i.lenbits }, Q = p(0, i.lens, 0, 19, i.lencode, 0, i.work, V), i.lenbits = V.bits, Q) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; at = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
                  }
                  if (ft < 16)
                    x >>>= ot, I -= ot, i.lens[i.have++] = ft;
                  else {
                    if (ft === 16) {
                      for (v = ot + 2; I < v; ) {
                        if (N === 0)
                          break t;
                        N--, x += M[C++] << I, I += 8;
                      }
                      if (x >>>= ot, I -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], H = 3 + (3 & x), x >>>= 2, I -= 2;
                    } else if (ft === 17) {
                      for (v = ot + 3; I < v; ) {
                        if (N === 0)
                          break t;
                        N--, x += M[C++] << I, I += 8;
                      }
                      I -= ot, t = 0, H = 3 + (7 & (x >>>= ot)), x >>>= 3, I -= 3;
                    } else {
                      for (v = ot + 7; I < v; ) {
                        if (N === 0)
                          break t;
                        N--, x += M[C++] << I, I += 8;
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
                if (i.lenbits = 9, V = { bits: i.lenbits }, Q = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, V), i.lenbits = V.bits, Q) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, V = { bits: i.distbits }, Q = p(b, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, V), i.distbits = V.bits, Q) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, T === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= N && 258 <= z) {
                  k.next_out = O, k.avail_out = z, k.next_in = C, k.avail_in = N, i.hold = x, i.bits = I, o(k, P), O = k.next_out, it = k.output, z = k.avail_out, C = k.next_in, M = k.input, N = k.avail_in, x = i.hold, I = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; at = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                if (at && !(240 & at)) {
                  for (ut = ot, mt = at, yt = ft; at = (A = i.lencode[yt + ((x & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= I); ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
                  }
                  x >>>= ut, I -= ut, i.back += ut;
                }
                if (x >>>= ot, I -= ot, i.back += ot, i.length = ft, at === 0) {
                  i.mode = 26;
                  break;
                }
                if (32 & at) {
                  i.back = -1, i.mode = 12;
                  break;
                }
                if (64 & at) {
                  k.msg = "invalid literal/length code", i.mode = 30;
                  break;
                }
                i.extra = 15 & at, i.mode = 22;
              case 22:
                if (i.extra) {
                  for (v = i.extra; I < v; ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
                  }
                  i.length += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; at = (A = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (N === 0)
                    break t;
                  N--, x += M[C++] << I, I += 8;
                }
                if (!(240 & at)) {
                  for (ut = ot, mt = at, yt = ft; at = (A = i.distcode[yt + ((x & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= I); ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
                  }
                  x >>>= ut, I -= ut, i.back += ut;
                }
                if (x >>>= ot, I -= ot, i.back += ot, 64 & at) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = ft, i.extra = 15 & at, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (v = i.extra; I < v; ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
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
                if (H = P - z, i.offset > H) {
                  if ((H = i.offset - H) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ct = H > i.wnext ? (H -= i.wnext, i.wsize - H) : i.wnext - H, H > i.length && (H = i.length), gt = i.window;
                } else
                  gt = it, ct = O - i.offset, H = i.length;
                for (z < H && (H = z), z -= H, i.length -= H; it[O++] = gt[ct++], --H; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (z === 0)
                  break t;
                it[O++] = i.length, z--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; I < 32; ) {
                    if (N === 0)
                      break t;
                    N--, x |= M[C++] << I, I += 8;
                  }
                  if (P -= z, k.total_out += P, i.total += P, P && (k.adler = i.check = i.flags ? n(i.check, it, P, O - P) : a(i.check, it, P, O - P)), P = z, (i.flags ? x : u(x)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; I < 32; ) {
                    if (N === 0)
                      break t;
                    N--, x += M[C++] << I, I += 8;
                  }
                  if (x !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 29;
              case 29:
                Q = 1;
                break t;
              case 30:
                Q = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = O, k.avail_out = z, k.next_in = C, k.avail_in = N, i.hold = x, i.bits = I, (i.wsize || P !== k.avail_out && i.mode < 30 && (i.mode < 27 || T !== 4)) && rt(k, k.output, k.next_out, P - k.avail_out) ? (i.mode = 31, -4) : (q -= k.avail_in, P -= k.avail_out, k.total_in += q, k.total_out += P, i.total += P, i.wrap && P && (k.adler = i.check = i.flags ? n(i.check, it, P, k.next_out - P) : a(i.check, it, P, k.next_out - P)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (q == 0 && P === 0 || T === 4) && Q === y && (Q = -5), Q);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var T = k.state;
        return T.window && (T.window = null), k.state = null, y;
      }, c.inflateGetHeader = function(k, T) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = T).done = !1, y) : l;
      }, c.inflateSetDictionary = function(k, T) {
        var i, M = T.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, T, M, 0) !== i.check ? -3 : rt(k, T, M, M) ? (i.mode = 31, -4) : (i.havedict = 1, y) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, c) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(m, b, y, l, g, s, d, u) {
        var w, S, U, F, L, R, W, D, X, rt = u.bits, k = 0, T = 0, i = 0, M = 0, it = 0, C = 0, O = 0, N = 0, z = 0, x = 0, I = null, q = 0, P = new r.Buf16(16), H = new r.Buf16(16), ct = null, gt = 0;
        for (k = 0; k <= 15; k++)
          P[k] = 0;
        for (T = 0; T < l; T++)
          P[b[y + T]]++;
        for (it = rt, M = 15; 1 <= M && P[M] === 0; M--)
          ;
        if (M < it && (it = M), M === 0)
          return g[s++] = 20971520, g[s++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < M && P[i] === 0; i++)
          ;
        for (it < i && (it = i), k = N = 1; k <= 15; k++)
          if (N <<= 1, (N -= P[k]) < 0)
            return -1;
        if (0 < N && (m === 0 || M !== 1))
          return -1;
        for (H[1] = 0, k = 1; k < 15; k++)
          H[k + 1] = H[k] + P[k];
        for (T = 0; T < l; T++)
          b[y + T] !== 0 && (d[H[b[y + T]]++] = T);
        if (R = m === 0 ? (I = ct = d, 19) : m === 1 ? (I = a, q -= 257, ct = n, gt -= 257, 256) : (I = o, ct = p, -1), k = i, L = s, O = T = x = 0, U = -1, F = (z = 1 << (C = it)) - 1, m === 1 && 852 < z || m === 2 && 592 < z)
          return 1;
        for (; ; ) {
          for (W = k - O, X = d[T] < R ? (D = 0, d[T]) : d[T] > R ? (D = ct[gt + d[T]], I[q + d[T]]) : (D = 96, 0), w = 1 << k - O, i = S = 1 << C; g[L + (x >> O) + (S -= w)] = W << 24 | D << 16 | X | 0, S !== 0; )
            ;
          for (w = 1 << k - 1; x & w; )
            w >>= 1;
          if (w !== 0 ? (x &= w - 1, x += w) : x = 0, T++, --P[k] == 0) {
            if (k === M)
              break;
            k = b[y + d[T]];
          }
          if (it < k && (x & F) !== U) {
            for (O === 0 && (O = it), L += i, N = 1 << (C = k - O); C + O < M && !((N -= P[C + O]) <= 0); )
              C++, N <<= 1;
            if (z += 1 << C, m === 1 && 852 < z || m === 2 && 592 < z)
              return 1;
            g[U = x & F] = it << 24 | C << 16 | L - s | 0;
          }
        }
        return x !== 0 && (g[L + x] = k - O << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, c) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, c) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(A) {
        for (var _ = A.length; 0 <= --_; )
          A[_] = 0;
      }
      var p = 0, m = 29, b = 256, y = b + 1 + m, l = 30, g = 19, s = 2 * y + 1, d = 15, u = 16, w = 7, S = 256, U = 16, F = 17, L = 18, R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], W = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], X = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (y + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var T = new Array(512);
      o(T);
      var i = new Array(256);
      o(i);
      var M = new Array(m);
      o(M);
      var it, C, O, N = new Array(l);
      function z(A, _, j, G, B) {
        this.static_tree = A, this.extra_bits = _, this.extra_base = j, this.elems = G, this.max_length = B, this.has_stree = A && A.length;
      }
      function x(A, _) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = _;
      }
      function I(A) {
        return A < 256 ? T[A] : T[256 + (A >>> 7)];
      }
      function q(A, _) {
        A.pending_buf[A.pending++] = 255 & _, A.pending_buf[A.pending++] = _ >>> 8 & 255;
      }
      function P(A, _, j) {
        A.bi_valid > u - j ? (A.bi_buf |= _ << A.bi_valid & 65535, q(A, A.bi_buf), A.bi_buf = _ >> u - A.bi_valid, A.bi_valid += j - u) : (A.bi_buf |= _ << A.bi_valid & 65535, A.bi_valid += j);
      }
      function H(A, _, j) {
        P(A, j[2 * _], j[2 * _ + 1]);
      }
      function ct(A, _) {
        for (var j = 0; j |= 1 & A, A >>>= 1, j <<= 1, 0 < --_; )
          ;
        return j >>> 1;
      }
      function gt(A, _, j) {
        var G, B, J = new Array(d + 1), $ = 0;
        for (G = 1; G <= d; G++)
          J[G] = $ = $ + j[G - 1] << 1;
        for (B = 0; B <= _; B++) {
          var Z = A[2 * B + 1];
          Z !== 0 && (A[2 * B] = ct(J[Z]++, Z));
        }
      }
      function ot(A) {
        var _;
        for (_ = 0; _ < y; _++)
          A.dyn_ltree[2 * _] = 0;
        for (_ = 0; _ < l; _++)
          A.dyn_dtree[2 * _] = 0;
        for (_ = 0; _ < g; _++)
          A.bl_tree[2 * _] = 0;
        A.dyn_ltree[2 * S] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function at(A) {
        8 < A.bi_valid ? q(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function ft(A, _, j, G) {
        var B = 2 * _, J = 2 * j;
        return A[B] < A[J] || A[B] === A[J] && G[_] <= G[j];
      }
      function ut(A, _, j) {
        for (var G = A.heap[j], B = j << 1; B <= A.heap_len && (B < A.heap_len && ft(_, A.heap[B + 1], A.heap[B], A.depth) && B++, !ft(_, G, A.heap[B], A.depth)); )
          A.heap[j] = A.heap[B], j = B, B <<= 1;
        A.heap[j] = G;
      }
      function mt(A, _, j) {
        var G, B, J, $, Z = 0;
        if (A.last_lit !== 0)
          for (; G = A.pending_buf[A.d_buf + 2 * Z] << 8 | A.pending_buf[A.d_buf + 2 * Z + 1], B = A.pending_buf[A.l_buf + Z], Z++, G === 0 ? H(A, B, _) : (H(A, (J = i[B]) + b + 1, _), ($ = R[J]) !== 0 && P(A, B -= M[J], $), H(A, J = I(--G), j), ($ = W[J]) !== 0 && P(A, G -= N[J], $)), Z < A.last_lit; )
            ;
        H(A, S, _);
      }
      function yt(A, _) {
        var j, G, B, J = _.dyn_tree, $ = _.stat_desc.static_tree, Z = _.stat_desc.has_stree, tt = _.stat_desc.elems, ht = -1;
        for (A.heap_len = 0, A.heap_max = s, j = 0; j < tt; j++)
          J[2 * j] !== 0 ? (A.heap[++A.heap_len] = ht = j, A.depth[j] = 0) : J[2 * j + 1] = 0;
        for (; A.heap_len < 2; )
          J[2 * (B = A.heap[++A.heap_len] = ht < 2 ? ++ht : 0)] = 1, A.depth[B] = 0, A.opt_len--, Z && (A.static_len -= $[2 * B + 1]);
        for (_.max_code = ht, j = A.heap_len >> 1; 1 <= j; j--)
          ut(A, J, j);
        for (B = tt; j = A.heap[1], A.heap[1] = A.heap[A.heap_len--], ut(A, J, 1), G = A.heap[1], A.heap[--A.heap_max] = j, A.heap[--A.heap_max] = G, J[2 * B] = J[2 * j] + J[2 * G], A.depth[B] = (A.depth[j] >= A.depth[G] ? A.depth[j] : A.depth[G]) + 1, J[2 * j + 1] = J[2 * G + 1] = B, A.heap[1] = B++, ut(A, J, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(st, pt) {
          var St, _t, wt, dt, Ct, It, bt = pt.dyn_tree, Rt = pt.max_code, Bt = pt.stat_desc.static_tree, jt = pt.stat_desc.has_stree, et = pt.stat_desc.extra_bits, vt = pt.stat_desc.extra_base, xt = pt.stat_desc.max_length, At = 0;
          for (dt = 0; dt <= d; dt++)
            st.bl_count[dt] = 0;
          for (bt[2 * st.heap[st.heap_max] + 1] = 0, St = st.heap_max + 1; St < s; St++)
            xt < (dt = bt[2 * bt[2 * (_t = st.heap[St]) + 1] + 1] + 1) && (dt = xt, At++), bt[2 * _t + 1] = dt, Rt < _t || (st.bl_count[dt]++, Ct = 0, vt <= _t && (Ct = et[_t - vt]), It = bt[2 * _t], st.opt_len += It * (dt + Ct), jt && (st.static_len += It * (Bt[2 * _t + 1] + Ct)));
          if (At !== 0) {
            do {
              for (dt = xt - 1; st.bl_count[dt] === 0; )
                dt--;
              st.bl_count[dt]--, st.bl_count[dt + 1] += 2, st.bl_count[xt]--, At -= 2;
            } while (0 < At);
            for (dt = xt; dt !== 0; dt--)
              for (_t = st.bl_count[dt]; _t !== 0; )
                Rt < (wt = st.heap[--St]) || (bt[2 * wt + 1] !== dt && (st.opt_len += (dt - bt[2 * wt + 1]) * bt[2 * wt], bt[2 * wt + 1] = dt), _t--);
          }
        }(A, _), gt(J, ht, A.bl_count);
      }
      function t(A, _, j) {
        var G, B, J = -1, $ = _[1], Z = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), _[2 * (j + 1) + 1] = 65535, G = 0; G <= j; G++)
          B = $, $ = _[2 * (G + 1) + 1], ++Z < tt && B === $ || (Z < ht ? A.bl_tree[2 * B] += Z : B !== 0 ? (B !== J && A.bl_tree[2 * B]++, A.bl_tree[2 * U]++) : Z <= 10 ? A.bl_tree[2 * F]++ : A.bl_tree[2 * L]++, J = B, ht = (Z = 0) === $ ? (tt = 138, 3) : B === $ ? (tt = 6, 3) : (tt = 7, 4));
      }
      function Q(A, _, j) {
        var G, B, J = -1, $ = _[1], Z = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), G = 0; G <= j; G++)
          if (B = $, $ = _[2 * (G + 1) + 1], !(++Z < tt && B === $)) {
            if (Z < ht)
              for (; H(A, B, A.bl_tree), --Z != 0; )
                ;
            else
              B !== 0 ? (B !== J && (H(A, B, A.bl_tree), Z--), H(A, U, A.bl_tree), P(A, Z - 3, 2)) : Z <= 10 ? (H(A, F, A.bl_tree), P(A, Z - 3, 3)) : (H(A, L, A.bl_tree), P(A, Z - 11, 7));
            J = B, ht = (Z = 0) === $ ? (tt = 138, 3) : B === $ ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      o(N);
      var V = !1;
      function v(A, _, j, G) {
        P(A, (p << 1) + (G ? 1 : 0), 3), function(B, J, $, Z) {
          at(B), Z && (q(B, $), q(B, ~$)), r.arraySet(B.pending_buf, B.window, J, $, B.pending), B.pending += $;
        }(A, _, j, !0);
      }
      c._tr_init = function(A) {
        V || (function() {
          var _, j, G, B, J, $ = new Array(d + 1);
          for (B = G = 0; B < m - 1; B++)
            for (M[B] = G, _ = 0; _ < 1 << R[B]; _++)
              i[G++] = B;
          for (i[G - 1] = B, B = J = 0; B < 16; B++)
            for (N[B] = J, _ = 0; _ < 1 << W[B]; _++)
              T[J++] = B;
          for (J >>= 7; B < l; B++)
            for (N[B] = J << 7, _ = 0; _ < 1 << W[B] - 7; _++)
              T[256 + J++] = B;
          for (j = 0; j <= d; j++)
            $[j] = 0;
          for (_ = 0; _ <= 143; )
            rt[2 * _ + 1] = 8, _++, $[8]++;
          for (; _ <= 255; )
            rt[2 * _ + 1] = 9, _++, $[9]++;
          for (; _ <= 279; )
            rt[2 * _ + 1] = 7, _++, $[7]++;
          for (; _ <= 287; )
            rt[2 * _ + 1] = 8, _++, $[8]++;
          for (gt(rt, y + 1, $), _ = 0; _ < l; _++)
            k[2 * _ + 1] = 5, k[2 * _] = ct(_, 5);
          it = new z(rt, R, b + 1, y, d), C = new z(k, W, 0, l, d), O = new z(new Array(0), D, 0, g, w);
        }(), V = !0), A.l_desc = new x(A.dyn_ltree, it), A.d_desc = new x(A.dyn_dtree, C), A.bl_desc = new x(A.bl_tree, O), A.bi_buf = 0, A.bi_valid = 0, ot(A);
      }, c._tr_stored_block = v, c._tr_flush_block = function(A, _, j, G) {
        var B, J, $ = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(Z) {
          var tt, ht = 4093624447;
          for (tt = 0; tt <= 31; tt++, ht >>>= 1)
            if (1 & ht && Z.dyn_ltree[2 * tt] !== 0)
              return a;
          if (Z.dyn_ltree[18] !== 0 || Z.dyn_ltree[20] !== 0 || Z.dyn_ltree[26] !== 0)
            return n;
          for (tt = 32; tt < b; tt++)
            if (Z.dyn_ltree[2 * tt] !== 0)
              return n;
          return a;
        }(A)), yt(A, A.l_desc), yt(A, A.d_desc), $ = function(Z) {
          var tt;
          for (t(Z, Z.dyn_ltree, Z.l_desc.max_code), t(Z, Z.dyn_dtree, Z.d_desc.max_code), yt(Z, Z.bl_desc), tt = g - 1; 3 <= tt && Z.bl_tree[2 * X[tt] + 1] === 0; tt--)
            ;
          return Z.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(A), B = A.opt_len + 3 + 7 >>> 3, (J = A.static_len + 3 + 7 >>> 3) <= B && (B = J)) : B = J = j + 5, j + 4 <= B && _ !== -1 ? v(A, _, j, G) : A.strategy === 4 || J === B ? (P(A, 2 + (G ? 1 : 0), 3), mt(A, rt, k)) : (P(A, 4 + (G ? 1 : 0), 3), function(Z, tt, ht, st) {
          var pt;
          for (P(Z, tt - 257, 5), P(Z, ht - 1, 5), P(Z, st - 4, 4), pt = 0; pt < st; pt++)
            P(Z, Z.bl_tree[2 * X[pt] + 1], 3);
          Q(Z, Z.dyn_ltree, tt - 1), Q(Z, Z.dyn_dtree, ht - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, $ + 1), mt(A, A.dyn_ltree, A.dyn_dtree)), ot(A), G && at(A);
      }, c._tr_tally = function(A, _, j) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = _ >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & _, A.pending_buf[A.l_buf + A.last_lit] = 255 & j, A.last_lit++, _ === 0 ? A.dyn_ltree[2 * j]++ : (A.matches++, _--, A.dyn_ltree[2 * (i[j] + b + 1)]++, A.dyn_dtree[2 * I(_)]++), A.last_lit === A.lit_bufsize - 1;
      }, c._tr_align = function(A) {
        P(A, 2, 3), H(A, S, rt), function(_) {
          _.bi_valid === 16 ? (q(_, _.bi_buf), _.bi_buf = 0, _.bi_valid = 0) : 8 <= _.bi_valid && (_.pending_buf[_.pending++] = 255 & _.bi_buf, _.bi_buf >>= 8, _.bi_valid -= 8);
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
            var o, p, m, b, y = 1, l = {}, g = !1, s = a.document, d = Object.getPrototypeOf && Object.getPrototypeOf(a);
            d = d && d.setTimeout ? d : a, o = {}.toString.call(a.process) === "[object process]" ? function(U) {
              process.nextTick(function() {
                w(U);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var U = !0, F = a.onmessage;
                return a.onmessage = function() {
                  U = !1;
                }, a.postMessage("", "*"), a.onmessage = F, U;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", S, !1) : a.attachEvent("onmessage", S), function(U) {
              a.postMessage(b + U, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(U) {
              w(U.data);
            }, function(U) {
              m.port2.postMessage(U);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(U) {
              var F = s.createElement("script");
              F.onreadystatechange = function() {
                w(U), F.onreadystatechange = null, p.removeChild(F), F = null;
              }, p.appendChild(F);
            }) : function(U) {
              setTimeout(w, 0, U);
            }, d.setImmediate = function(U) {
              typeof U != "function" && (U = new Function("" + U));
              for (var F = new Array(arguments.length - 1), L = 0; L < F.length; L++)
                F[L] = arguments[L + 1];
              var R = { callback: U, args: F };
              return l[y] = R, o(y), y++;
            }, d.clearImmediate = u;
          }
          function u(U) {
            delete l[U];
          }
          function w(U) {
            if (g)
              setTimeout(w, 0, U);
            else {
              var F = l[U];
              if (F) {
                g = !0;
                try {
                  (function(L) {
                    var R = L.callback, W = L.args;
                    switch (W.length) {
                      case 0:
                        R();
                        break;
                      case 1:
                        R(W[0]);
                        break;
                      case 2:
                        R(W[0], W[1]);
                        break;
                      case 3:
                        R(W[0], W[1], W[2]);
                        break;
                      default:
                        R.apply(n, W);
                    }
                  })(F);
                } finally {
                  u(U), g = !1;
                }
              }
            }
          }
          function S(U) {
            U.source === a && typeof U.data == "string" && U.data.indexOf(b) === 0 && w(+U.data.slice(b.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Ut < "u" ? Ut : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(ve);
var je = ve.exports;
const ze = /* @__PURE__ */ be(je);
var ye = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h();
  })(Ut, function() {
    function e(p, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type) ? new Blob(["\uFEFF", p], { type: p.type }) : p;
    }
    function h(p, m, b) {
      var y = new XMLHttpRequest();
      y.open("GET", p), y.responseType = "blob", y.onload = function() {
        o(y.response, m, b);
      }, y.onerror = function() {
        console.error("could not download file");
      }, y.send();
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Ut == "object" && Ut.global === Ut ? Ut : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(p, m, b) {
      var y = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || p.name || "download", l.download = m, l.rel = "noopener", typeof p == "string" ? (l.href = p, l.origin === location.origin ? r(l) : c(l.href) ? h(p, m, b) : r(l, l.target = "_blank")) : (l.href = y.createObjectURL(p), setTimeout(function() {
        y.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        r(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, b) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, b), m);
      else if (c(p))
        h(p, m, b);
      else {
        var y = document.createElement("a");
        y.href = p, y.target = "_blank", setTimeout(function() {
          r(y);
        });
      }
    } : function(p, m, b, y) {
      if (y = y || open("", "_blank"), y && (y.document.title = y.document.body.innerText = "downloading..."), typeof p == "string")
        return h(p, m, b);
      var l = p.type === "application/octet-stream", g = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && g || n) && typeof FileReader < "u") {
        var d = new FileReader();
        d.onloadend = function() {
          var S = d.result;
          S = s ? S : S.replace(/^data:[^;]*;/, "data:attachment/file;"), y ? y.location.href = S : location = S, y = null;
        }, d.readAsDataURL(p);
      } else {
        var u = a.URL || a.webkitURL, w = u.createObjectURL(p);
        y ? y.location = w : location.href = w, y = null, setTimeout(function() {
          u.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, E.exports = o;
  });
})(ye);
var We = ye.exports;
const Ze = /* @__PURE__ */ be(We);
function Zt(E) {
  for (var f = globalThis.atob(E), e = f.length, h = new Uint8Array(e), c = 0; c < e; c++)
    h[c] = f.charCodeAt(c);
  return h.buffer;
}
const Pe = `#!/bin/sh

#
# Copyright © 2015-2021 the original authors.
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

CLASSPATH="\\\\\\"\\\\\\""


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
    CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )

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
        -classpath "$CLASSPATH" \\
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
`, Je = `@rem\r
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
set CLASSPATH=\r
\r
\r
@rem Execute Gradle\r
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" -jar "%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar" %*\r
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
`, Ye = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.14.2-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, He = "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AAAAAAAAAAAAAAAwDgAATUVUQS1JTkYvTUFOSUZFU1QuTUZVVAUAAQAAAABQSwECFAAUAAgICAAAACEAAsIE3yIBAABwAQAAMQAJAAAAAAAAAAAAAAD2DgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVBcmd1bWVudEV4Y2VwdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBsZK5NbgIAALMDAAAmAAkAAAAAAAAAAAAAAIAQAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZU9wdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBrrAeZWwIAALYEAAAzAAkAAAAAAAAAAAAAAEsTAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRBZnRlck9wdGlvbnMuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEABUgOxC4DAABdBwAAPAAJAAAAAAAAAAAAAAAQFgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQmVmb3JlRmlyc3RTdWJDb21tYW5kLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAO+A7pzcBgAAYg4AAD0ACQAAAAAAAAAAAAAAsRkAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEtub3duT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAxIDBO00CAACXBAAAPAAJAAAAAAAAAAAAAAABIQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkTWlzc2luZ09wdGlvbkFyZ1N0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAKUEGSPYAgAASgUAAD0ACQAAAAAAAAAAAAAAwSMAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvbkF3YXJlUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAIjgzfKIBAAB9AgAAOAAJAAAAAAAAAAAAAAANJwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uUGFyc2Vy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", we = `# gradle

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
`, ke = `# Automatically build the project and run any configured tests for every push
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
          java-version: '21'
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: Artifacts
          path: build/libs/`;
async function Xe({ writer: E }) {
  await E.write("gradlew", Pe, {
    executable: !0
  }), await E.write("gradlew.bat", Je), await E.write("gradle/wrapper/gradle-wrapper.properties", Ye), await E.write("gradle/wrapper/gradle-wrapper.jar", Zt(He)), await E.write(".gitignore", we), await E.write(".github/workflows/build.yml", ke);
}
var Ht = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h(f);
  })(Ut, function(e) {
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(C) {
        for (var O = 1; O < arguments.length; O++) {
          var N = arguments[O];
          for (var z in N)
            Object.prototype.hasOwnProperty.call(N, z) && (C[z] = N[z]);
        }
        return C;
      }, h.apply(this, arguments);
    }
    function c(C, O) {
      C.prototype = Object.create(O.prototype), C.prototype.constructor = C, a(C, O);
    }
    function r(C) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(O) {
        return O.__proto__ || Object.getPrototypeOf(O);
      }, r(C);
    }
    function a(C, O) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, z) {
        return N.__proto__ = z, N;
      }, a(C, O);
    }
    function n(C, O, N) {
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
        var P = new (Function.bind.apply(z, q))();
        return I && a(P, I.prototype), P;
      }, n.apply(null, arguments);
    }
    function o(C) {
      var O = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(N) {
        if (N === null || Function.toString.call(N).indexOf("[native code]") === -1)
          return N;
        if (typeof N != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (O !== void 0) {
          if (O.has(N))
            return O.get(N);
          O.set(N, z);
        }
        function z() {
          return n(N, arguments, r(this).constructor);
        }
        return z.prototype = Object.create(N.prototype, { constructor: { value: z, enumerable: !1, writable: !0, configurable: !0 } }), a(z, N);
      }, o(C);
    }
    var p = /* @__PURE__ */ function() {
      function C(N) {
        this.cache = void 0, this.cache = N;
      }
      var O = C.prototype;
      return O.define = function(N, z) {
        this.cache[N] = z;
      }, O.get = function(N) {
        return this.cache[N];
      }, O.remove = function(N) {
        delete this.cache[N];
      }, O.reset = function() {
        this.cache = {};
      }, O.load = function(N) {
        this.cache = h({}, this.cache, N);
      }, C;
    }(), m = /* @__PURE__ */ function(C) {
      function O(N) {
        var z;
        return (z = C.call(this, N) || this).name = "Eta Error", z;
      }
      return c(O, C), O;
    }(/* @__PURE__ */ o(Error));
    function b(C, O, N) {
      var z = O.slice(0, N).split(/\n/), x = z.length, I = z[x - 1].length + 1;
      throw C += " at line " + x + " col " + I + `:

  ` + O.split(/\n/)[x - 1] + `
  ` + Array(I).join(" ") + "^", new m(C);
    }
    function y(C, O, N, z) {
      var x = O.split(`
`), I = Math.max(N - 3, 0), q = Math.min(x.length, N + 3), P = z, H = x.slice(I, q).map(function(gt, ot) {
        var at = ot + I + 1;
        return (at == N ? " >> " : "    ") + at + "| " + gt;
      }).join(`
`), ct = new m((P ? P + ":" + N + `
` : "line " + N + `
`) + H + `

` + C.message);
      throw ct.name = C.name, ct;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function g(C, O) {
      var N = this.config, z = O && O.async ? l : Function;
      try {
        return new z(N.varName, "options", this.compileToString.call(this, C, O));
      } catch (x) {
        throw x instanceof SyntaxError ? new m(`Bad template syntax

` + x.message + `
` + Array(x.message.length + 1).join("=") + `
` + this.compileToString.call(this, C, O) + `
`) : x;
      }
    }
    function s(C, O) {
      var N = this.config, z = O && O.async, x = this.parse.call(this, C), I = N.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (N.debug ? ', line: 1, templateStr: "' + C.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (N.debug ? "try {" : "") + (N.useWith ? "with(" + N.varName + "||{}){" : "") + `

` + d.call(this, x) + `
if (__eta.layout) {
  __eta.res = ` + (z ? "await includeAsync" : "include") + " (__eta.layout, {..." + N.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (N.useWith ? "}" : "") + (N.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (N.plugins)
        for (var q = 0; q < N.plugins.length; q++) {
          var P = N.plugins[q];
          P.processFnString && (I = P.processFnString(I, N));
        }
      return I;
    }
    function d(C) {
      for (var O = this.config, N = 0, z = C.length, x = ""; N < z; N++) {
        var I = C[N];
        if (typeof I == "string")
          x += "__eta.res+='" + I + `'
`;
        else {
          var q = I.t, P = I.val || "";
          O.debug && (x += "__eta.line=" + I.lineNo + `
`), q === "r" ? (O.autoFilter && (P = "__eta.f(" + P + ")"), x += "__eta.res+=" + P + `
`) : q === "i" ? (O.autoFilter && (P = "__eta.f(" + P + ")"), O.autoEscape && (P = "__eta.e(" + P + ")"), x += "__eta.res+=" + P + `
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
    var S = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(C) {
      var O = String(C);
      return /[&<>"']/.test(O) ? O.replace(/[&<>"']/g, w) : O;
    }, filterFunction: function(C) {
      return String(C);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, U = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, F = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, L = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function R(C) {
      return C.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function W(C, O) {
      return C.slice(0, O).split(`
`).length;
    }
    function D(C) {
      var O = this.config, N = [], z = !1, x = 0, I = O.parse;
      if (O.plugins)
        for (var q = 0; q < O.plugins.length; q++) {
          var P = O.plugins[q];
          P.processTemplate && (C = P.processTemplate(C, O));
        }
      function H(_, j) {
        _ && (_ = function(G, B, J, $) {
          var Z, tt;
          return Array.isArray(B.autoTrim) ? (Z = B.autoTrim[1], tt = B.autoTrim[0]) : Z = tt = B.autoTrim, (J || J === !1) && (Z = J), ($ || $ === !1) && (tt = $), tt || Z ? Z === "slurp" && tt === "slurp" ? G.trim() : (Z === "_" || Z === "slurp" ? G = G.trimStart() : Z !== "-" && Z !== "nl" || (G = G.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? G = G.trimEnd() : tt !== "-" && tt !== "nl" || (G = G.replace(/(?:\r\n|\n|\r)$/, "")), G) : G;
        }(_, O, z, j), _ && (_ = _.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), N.push(_)));
      }
      O.rmWhitespace && (C = C.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), U.lastIndex = 0, F.lastIndex = 0, L.lastIndex = 0;
      for (var ct, gt = [I.exec, I.interpolate, I.raw].reduce(function(_, j) {
        return _ && j ? _ + "|" + R(j) : j ? R(j) : _;
      }, ""), ot = new RegExp(R(O.tags[0]) + "(-|_)?\\s*(" + gt + ")?\\s*", "g"), at = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + R(O.tags[1]) + ")", "g"); ct = ot.exec(C); ) {
        var ft = C.slice(x, ct.index);
        x = ct[0].length + ct.index;
        var ut = ct[2] || "";
        H(ft, ct[1]), at.lastIndex = x;
        for (var mt = void 0, yt = !1; mt = at.exec(C); ) {
          if (mt[1]) {
            var t = C.slice(x, mt.index);
            ot.lastIndex = x = at.lastIndex, z = mt[2], yt = { t: ut === I.exec ? "e" : ut === I.raw ? "r" : ut === I.interpolate ? "i" : "", val: t };
            break;
          }
          var Q = mt[0];
          if (Q === "/*") {
            var V = C.indexOf("*/", at.lastIndex);
            V === -1 && b("unclosed comment", C, mt.index), at.lastIndex = V;
          } else
            Q === "'" ? (F.lastIndex = mt.index, F.exec(C) ? at.lastIndex = F.lastIndex : b("unclosed string", C, mt.index)) : Q === '"' ? (L.lastIndex = mt.index, L.exec(C) ? at.lastIndex = L.lastIndex : b("unclosed string", C, mt.index)) : Q === "`" && (U.lastIndex = mt.index, U.exec(C) ? at.lastIndex = U.lastIndex : b("unclosed string", C, mt.index));
        }
        yt ? (O.debug && (yt.lineNo = W(C, ct.index)), N.push(yt)) : b("unclosed tag", C, ct.index);
      }
      if (H(C.slice(x, C.length), !1), O.plugins)
        for (var v = 0; v < O.plugins.length; v++) {
          var A = O.plugins[v];
          A.processAST && (N = A.processAST(N, O));
        }
      return N;
    }
    function X(C, O) {
      var N = O && O.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !C.startsWith("@")) {
        var z = O.filepath, x = N.get(z);
        if (this.config.cache && x)
          return x;
        var I = this.readFile(z), q = this.compile(I, O);
        return this.config.cache && N.define(z, q), q;
      }
      var P = N.get(C);
      if (P)
        return P;
      throw new m("Failed to get template '" + C + "'");
    }
    function rt(C, O, N) {
      var z, x = h({}, N, { async: !1 });
      return typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (x.filepath = this.resolvePath(C, x)), z = X.call(this, C, x)) : z = C, z.call(this, O, x);
    }
    function k(C, O, N) {
      var z, x = h({}, N, { async: !0 });
      typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (x.filepath = this.resolvePath(C, x)), z = X.call(this, C, x)) : z = C;
      var I = z.call(this, O, x);
      return Promise.resolve(I);
    }
    function T(C, O) {
      var N = this.compile(C, { async: !1 });
      return rt.call(this, N, O);
    }
    function i(C, O) {
      var N = this.compile(C, { async: !0 });
      return k.call(this, N, O);
    }
    var M = /* @__PURE__ */ function() {
      function C(N) {
        this.config = void 0, this.RuntimeErr = y, this.compile = g, this.compileToString = s, this.parse = D, this.render = rt, this.renderAsync = k, this.renderString = T, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = N ? h({}, S, N) : h({}, S);
      }
      var O = C.prototype;
      return O.configure = function(N) {
        this.config = h({}, this.config, N);
      }, O.withConfig = function(N) {
        return h({}, this, { config: h({}, this.config, N) });
      }, O.loadTemplate = function(N, z, x) {
        if (typeof z == "string")
          (x && x.async ? this.templatesAsync : this.templatesSync).define(N, this.compile(z, x));
        else {
          var I = this.templatesSync;
          (z.constructor.name === "AsyncFunction" || x && x.async) && (I = this.templatesAsync), I.define(N, z);
        }
      }, C;
    }(), it = /* @__PURE__ */ function(C) {
      function O() {
        return C.apply(this, arguments) || this;
      }
      return c(O, C), O;
    }(M);
    e.Eta = it;
  });
})(Ht, Ht.exports);
var qe = Ht.exports;
const Ke = new qe.Eta({
  autoTrim: !1
});
function Tt(E, f) {
  return Ke.renderString(E, f);
}
const $e = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
loom_version=1.11-SNAPSHOT
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_version=<%= it.fabricVersion %>`, tn = `plugins {
	id 'fabric-loom' version "\${loom_version}"
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
	mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${project.yarn_mappings}:v2"<% } %>
	modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
	<% if (it.kotlin) { %>modImplementation "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"<% } %>
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
}`, en = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`;
function nn(E) {
  return Jt(E) >= 17;
}
function rn(E) {
  return Jt(E) >= 19;
}
function Jt(E) {
  return Ee(E)[1];
}
function an(E) {
  return Ee(E)[2];
}
function Ee(E) {
  return E.split("-")[0].split(".").map((e) => parseInt(e));
}
function Se(E, f) {
  let e = [];
  const h = f ? "Modid" : "Mod Name";
  return E.length == 0 ? [`${h} is empty!`] : (E.length == 1 ? e.push(`${h} is only a single character! (It must be at least 2 characters long)!`) : E.length > 64 && e.push(`${h} has more than 64 characters!`), E.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function sn(E) {
  if (E === void 0)
    return;
  let f = Se(E, !0) ?? [];
  const e = E.charAt(0);
  (e < "a" || e > "z") && f.push("Modid starts with an invalid character '" + e + "' (it must belowercase a-z)");
  let h = null;
  for (let c = 1; c < E.length; c++) {
    let r = E.charAt(c);
    r == "-" || r == "_" || "0" <= r && r <= "9" || "a" <= r && r <= "z" || (h == null && (h = []), h.push(r));
  }
  if (h != null) {
    let c = "Modid contains invalid characters: " + h.map((r) => "'" + r + "'").join(", ") + "!";
    f.push(c + "!");
  }
  if (f.length != 0)
    return f;
}
function on(E) {
  return E.toLocaleLowerCase().replace(/\s+/g, ".").replace(/[^a-za-z0-9_\.]/, "");
}
function ln(E) {
  return E.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
const cn = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, un = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, Kt = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
}, hn = {
  compatibility: "VERSION_21",
  mixin: "JAVA_21",
  release: 21,
  kotlinRelease: "21"
};
function Yt(E) {
  const f = Jt(E);
  return f <= 16 ? cn : f == 17 ? un : f <= 19 || f == 20 && an(E) <= 4 ? Kt : hn;
}
const An = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, dn = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/), fn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function pn(E) {
  let f = [];
  An.test(E.toLowerCase()) || f.push("Package name is not a valid Java package name!");
  const e = E.split(".").filter((h) => dn.includes(h));
  e.length != 0 && f.push(`Package name contains illegal component: '${e[0]}'`);
  for (let h of fn)
    E.toLowerCase().startsWith(h) ? f.push(`Package name starts with '${h}', which is reserved!`) : E.toLowerCase() + "." == h && f.push(`Package name is '${h}', which is reserved!`);
  return f;
}
async function mn(E, f) {
  await E.write("gradle.properties", Tt($e, f)), await E.write("build.gradle", Tt(tn, { ...f, java: Yt(f.minecraftVersion) })), await E.write("settings.gradle", en);
}
const Ce = `package <%= it.packageName %>;

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
async function gn(E, f) {
  const e = f.packageName + ".mixin", h = "ExampleMixin", c = "MinecraftServer", r = "net.minecraft.server.MinecraftServer", a = f.mojmap ? "loadLevel" : "loadWorld", n = {
    required: !0,
    package: e,
    compatibilityLevel: Yt(f.minecraftVersion).mixin,
    mixins: [
      h
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${f.modid}.mixins.json`;
  return await E.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/main/java/${e.replaceAll(".", "/")}/${h}.java`, Tt(Ce, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: r,
    targetMethod: a
  })), [o];
}
async function bn(E, f) {
  const e = f.packageName + ".mixin.client", h = "ExampleClientMixin", c = f.mojmap ? "Minecraft" : "MinecraftClient", r = `net.minecraft.client.${c}`, a = "run", n = {
    required: !0,
    package: e,
    compatibilityLevel: Yt(f.minecraftVersion).mixin,
    client: [
      h
    ],
    injectors: {
      defaultRequire: 1
    }
  }, o = `${f.modid}.client.mixins.json`;
  return await E.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/client/java/${e.replaceAll(".", "/")}/${h}.java`, Tt(Ce, {
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
const vn = `package <%= it.package %>;

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
}`, yn = `package <%= it.package %>

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
}`, wn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, kn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, En = `package <%= it.package %>;

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
async function Cn(E, f) {
  const e = xn(f.projectName), h = {
    package: f.packageName,
    className: e,
    classFullName: f.packageName + "." + e,
    path: f.packageName.replaceAll(".", "/") + "/" + e,
    modid: f.modid,
    slf4j: Jt(f.minecraftVersion) >= 18,
    clientEntrypoint: f.splitSources,
    dataEntrypoint: f.dataGeneration
  };
  return f.kotlin ? await _n(E, h) : await In(E, h);
}
function xn(E) {
  return E.split(" ").map((f) => f[0].toUpperCase() + f.slice(1)).join("").replace(/\W+/g, "");
}
async function In(E, f) {
  var e = {
    main: [
      f.classFullName
    ]
  };
  if (await E.write(`src/main/java/${f.path}.java`, Tt(vn, f)), f.clientEntrypoint && (await E.write(`src/client/java/${f.path}Client.java`, Tt(wn, { ...f, className: f.className + "Client" })), e = {
    ...e,
    client: [
      f.classFullName + "Client"
    ]
  }), f.dataEntrypoint) {
    const h = f.clientEntrypoint ? "client" : "main";
    await E.write(`src/${h}/java/${f.path}DataGenerator.java`, Tt(En, { ...f, className: f.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        f.classFullName + "DataGenerator"
      ]
    };
  }
  return e;
}
async function _n(E, f) {
  var e = {
    main: [
      {
        value: f.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await E.write(`src/main/kotlin/${f.path}.kt`, Tt(yn, f)), f.clientEntrypoint && (await E.write(`src/client/kotlin/${f.path}Client.kt`, Tt(kn, { ...f, className: f.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: f.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), f.dataEntrypoint) {
    const h = f.clientEntrypoint ? "client" : "main";
    await E.write(`src/${h}/kotlin/${f.path}DataGenerator.kt`, Tt(Sn, { ...f, className: f.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        {
          value: f.classFullName + "DataGenerator",
          adapter: "kotlin"
        }
      ]
    };
  }
  return e;
}
const $t = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Nn(E, f, e) {
  if (!f)
    return Zt($t);
  const h = e.create(128, 128);
  return h != null && Fn(h, E) ? h.getPng() : Zt($t);
}
function Fn(E, f) {
  const e = E.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const h = f.split(/\s+/);
  let c = 0, r = Array(h.length), a = 65;
  for (; ; ) {
    c = 0;
    for (const o of h) {
      let p = a;
      do
        p--, e.font = `${p}px ${Lt}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, p);
    }
    for (let o = 0; o < h.length; o++) {
      const p = h[o];
      e.font = `${a}px ${Lt}`;
      const m = E.measureText(e, p);
      r[o] = m.ascent + m.descent, c += r[o];
    }
    if (c += (h.length - 1) * 2, c <= 124)
      break;
  }
  const n = (128 - c) / 2;
  for (let o = 0; o < h.length; o++) {
    let p = 0;
    for (const y of r.slice(0, o))
      p += y + 2;
    const m = h[o];
    e.font = `${a}px ${Lt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const b = E.measureText(e, m);
    e.fillText(m, 64, n + p + b.ascent);
  }
  return !0;
}
function Bn(E) {
  return Number(E.split(".")[1]) >= 59;
}
async function Un(E, f, e) {
  const h = [
    ...await gn(E, e),
    ...e.splitSources ? await bn(E, e) : []
  ], c = e.minecraftVersion.indexOf("-"), r = e.minecraftVersion.substring(0, c === -1 ? e.minecraftVersion.length : c + 1), a = {
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
    entrypoints: await Cn(E, e),
    mixins: h,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Yt(e.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  a.depends[Bn(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await E.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await E.write(`src/main/resources/assets/${e.modid}/icon.png`, Nn(e.projectName, e.uniqueModIcon, f));
}
const Vn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Tn = `Creative Commons Legal Code

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
async function On(E, f) {
  await E.write(".gitattributes", Vn), await E.write(".gitignore", we), await E.write(".github/workflows/build.yml", ke), await E.write("LICENSE", Tn);
}
const Lt = "Comic Relief";
async function Dn(E) {
  const f = await Rn(E.config);
  await Xe(E), await mn(E.writer, f), await Un(E.writer, E.canvas, f), await On(E.writer);
}
async function xe() {
  let E = await Re();
  return E.filter((f) => {
    const e = f.version;
    if (e.startsWith("1.14") && e != "1.14.4")
      return !1;
    if (!f.stable) {
      const h = E[0].version == e, c = e.includes("-pre") || e.includes("-rc");
      return h && c;
    }
    return !0;
  });
}
async function Rn(E) {
  return {
    ...E,
    loaderVersion: (await Ge()).find((f) => f.stable).version,
    fabricVersion: await Le(E.minecraftVersion),
    yarnVersion: (await Qe(E.minecraftVersion))[0].version,
    kotlin: await Gn(E)
  };
}
async function Gn(E) {
  if (!E.useKotlin)
    return;
  const e = (await Me()).pop(), h = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: h
  };
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Lt,
  generateTemplate: Dn,
  getTemplateGameVersions: xe
}, Symbol.toStringTag, { value: "Module" }));
function te(E, f, e) {
  const h = E.slice();
  return h[31] = f[e], h;
}
function ee(E, f, e) {
  const h = E.slice();
  return h[34] = f[e], h;
}
function ne(E, f, e) {
  const h = E.slice();
  return h[34] = f[e], h;
}
function re(E, f, e) {
  const h = E.slice();
  return h[34] = f[e], h;
}
function Qn(E) {
  let f, e, h = (
    /*error*/
    E[34].message + ""
  ), c, r, a;
  return {
    c() {
      f = nt("p"), e = Nt("Error: "), c = Nt(h), r = lt(), a = nt("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, Dt(f, "color", "red");
    },
    m(n, o) {
      kt(n, f, o), Y(f, e), Y(f, c), kt(n, r, o), kt(n, a, o);
    },
    p: Vt,
    i: Vt,
    o: Vt,
    d(n) {
      n && Et(f), n && Et(r), n && Et(a);
    }
  };
}
function Mn(E) {
  let f, e, h, c, r, a, n, o, p, m, b, y, l, g, s, d, u, w, S, U, F, L, R, W, D, X, rt, k, T, i, M, it, C, O, N, z, x, I, q, P, H, ct, gt, ot, at, ft, ut, mt, yt, t, Q, V, v, A, _, j, G, B, J, $, Z;
  function tt(et, vt) {
    return (
      /*customModId*/
      et[3] != null ? zn : jn
    );
  }
  let ht = tt(E), st = ht(E), pt = (
    /*modIdErrors*/
    E[14] != null && ie(E)
  ), St = (
    /*customModId*/
    E[3] != null && se(E)
  ), _t = (
    /*packageNameErrors*/
    E[12]
  ), wt = [];
  for (let et = 0; et < _t.length; et += 1)
    wt[et] = ce(ee(E, _t, et));
  let dt = (
    /*data*/
    E[30].game
  ), Ct = [];
  for (let et = 0; et < dt.length; et += 1)
    Ct[et] = ue(te(E, dt, et));
  let It = (
    /*supportsDataGen*/
    E[11] && he(E)
  ), bt = (
    /*supportsSplitSources*/
    E[10] && Ae(E)
  );
  const Rt = [Zn, Wn], Bt = [];
  function jt(et, vt) {
    return (
      /*loading*/
      et[9] ? 0 : 1
    );
  }
  return G = jt(E), B = Bt[G] = Rt[G](E), {
    c() {
      f = nt("div"), e = nt("div"), h = nt("h3"), h.textContent = "Mod Name:", c = lt(), r = nt("hr"), a = lt(), st.c(), n = lt(), o = nt("input"), p = lt(), pt && pt.c(), m = lt(), St && St.c(), b = lt(), y = nt("div"), l = nt("h3"), l.textContent = "Package Name:", g = lt(), s = nt("hr"), d = lt(), u = nt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = lt(), S = nt("input"), U = lt();
      for (let et = 0; et < wt.length; et += 1)
        wt[et].c();
      F = lt(), L = nt("div"), R = nt("h3"), R.textContent = "Minecraft Version:", W = lt(), D = nt("hr"), X = lt(), rt = nt("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = lt(), T = nt("select");
      for (let et = 0; et < Ct.length; et += 1)
        Ct[et].c();
      i = lt(), M = nt("hr"), it = lt(), C = nt("br"), O = lt(), N = nt("h4"), N.textContent = "Advanced Options:", z = lt(), x = nt("div"), I = nt("div"), q = nt("input"), P = lt(), H = nt("label"), H.textContent = "Kotlin Programming Language", ct = lt(), gt = nt("p"), gt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = lt(), at = nt("div"), ft = nt("div"), ut = nt("input"), mt = lt(), yt = nt("label"), yt.textContent = "Mojang Mappings", t = lt(), Q = nt("p"), Q.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", V = lt(), It && It.c(), v = lt(), bt && bt.c(), A = lt(), _ = nt("br"), j = lt(), B.c(), K(h, "class", "svelte-c4460r"), K(r, "class", "svelte-c4460r"), K(o, "id", "project-name"), K(o, "class", "svelte-c4460r"), K(e, "class", "form-line svelte-c4460r"), K(l, "class", "svelte-c4460r"), K(s, "class", "svelte-c4460r"), K(u, "class", "svelte-c4460r"), K(S, "id", "package-name"), K(S, "class", "svelte-c4460r"), K(y, "class", "form-line svelte-c4460r"), K(R, "class", "svelte-c4460r"), K(D, "class", "svelte-c4460r"), K(rt, "class", "svelte-c4460r"), K(T, "id", "minecraft-version"), Dt(T, "min-width", "200px"), K(T, "class", "svelte-c4460r"), /*minecraftVersion*/
      E[0] === void 0 && Te(() => (
        /*select_change_handler*/
        E[24].call(T)
      )), K(L, "class", "form-line svelte-c4460r"), K(M, "class", "svelte-c4460r"), K(C, "class", "svelte-c4460r"), K(N, "class", "svelte-c4460r"), K(q, "id", "kotlin"), K(q, "type", "checkbox"), K(q, "class", "option-input svelte-c4460r"), K(H, "for", "kotlin"), K(H, "class", "option-label svelte-c4460r"), K(I, "class", "option-container svelte-c4460r"), K(gt, "class", "option-body svelte-c4460r"), K(x, "class", "svelte-c4460r"), K(ut, "id", "mojmap"), K(ut, "type", "checkbox"), K(ut, "class", "option-input svelte-c4460r"), K(yt, "for", "mojmap"), K(yt, "class", "option-label svelte-c4460r"), K(ft, "class", "option-container svelte-c4460r"), K(Q, "class", "option-body svelte-c4460r"), K(at, "class", "svelte-c4460r"), K(_, "class", "svelte-c4460r"), K(f, "class", "template svelte-c4460r");
    },
    m(et, vt) {
      kt(et, f, vt), Y(f, e), Y(e, h), Y(e, c), Y(e, r), Y(e, a), st.m(e, null), Y(e, n), Y(e, o), Ot(
        o,
        /*projectName*/
        E[1]
      ), Y(e, p), pt && pt.m(e, null), Y(f, m), St && St.m(f, null), Y(f, b), Y(f, y), Y(y, l), Y(y, g), Y(y, s), Y(y, d), Y(y, u), Y(y, w), Y(y, S), Ot(
        S,
        /*packageName*/
        E[2]
      ), Y(y, U);
      for (let xt = 0; xt < wt.length; xt += 1)
        wt[xt] && wt[xt].m(y, null);
      Y(f, F), Y(f, L), Y(L, R), Y(L, W), Y(L, D), Y(L, X), Y(L, rt), Y(L, k), Y(L, T);
      for (let xt = 0; xt < Ct.length; xt += 1)
        Ct[xt] && Ct[xt].m(T, null);
      qt(
        T,
        /*minecraftVersion*/
        E[0],
        !0
      ), Y(f, i), Y(f, M), Y(f, it), Y(f, C), Y(f, O), Y(f, N), Y(f, z), Y(f, x), Y(x, I), Y(I, q), q.checked = /*useKotlin*/
      E[5], Y(I, P), Y(I, H), Y(x, ct), Y(x, gt), Y(f, ot), Y(f, at), Y(at, ft), Y(ft, ut), ut.checked = /*mojmap*/
      E[6], Y(ft, mt), Y(ft, yt), Y(at, t), Y(at, Q), Y(f, V), It && It.m(f, null), Y(f, v), bt && bt.m(f, null), Y(f, A), Y(f, _), Y(f, j), Bt[G].m(f, null), J = !0, $ || (Z = [
        Ft(
          o,
          "input",
          /*input0_input_handler*/
          E[21]
        ),
        Ft(
          o,
          "blur",
          /*doFormatProjectName*/
          E[17]
        ),
        Ft(
          S,
          "keyup",
          /*doFormatPackageName*/
          E[18]
        ),
        Ft(
          S,
          "input",
          /*input1_input_handler*/
          E[23]
        ),
        Ft(
          T,
          "change",
          /*select_change_handler*/
          E[24]
        ),
        Ft(
          q,
          "change",
          /*input2_change_handler*/
          E[25]
        ),
        Ft(
          ut,
          "change",
          /*input3_change_handler*/
          E[26]
        )
      ], $ = !0);
    },
    p(et, vt) {
      if (ht === (ht = tt(et)) && st ? st.p(et, vt) : (st.d(1), st = ht(et), st && (st.c(), st.m(e, n))), vt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      et[1] && Ot(
        o,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[14] != null ? pt ? pt.p(et, vt) : (pt = ie(et), pt.c(), pt.m(e, null)) : pt && (pt.d(1), pt = null), /*customModId*/
      et[3] != null ? St ? St.p(et, vt) : (St = se(et), St.c(), St.m(f, b)) : St && (St.d(1), St = null), vt[0] & /*packageName*/
      4 && S.value !== /*packageName*/
      et[2] && Ot(
        S,
        /*packageName*/
        et[2]
      ), vt[0] & /*packageNameErrors*/
      4096) {
        _t = /*packageNameErrors*/
        et[12];
        let At;
        for (At = 0; At < _t.length; At += 1) {
          const Gt = ee(et, _t, At);
          wt[At] ? wt[At].p(Gt, vt) : (wt[At] = ce(Gt), wt[At].c(), wt[At].m(y, null));
        }
        for (; At < wt.length; At += 1)
          wt[At].d(1);
        wt.length = _t.length;
      }
      if (vt[0] & /*versions*/
      32768) {
        dt = /*data*/
        et[30].game;
        let At;
        for (At = 0; At < dt.length; At += 1) {
          const Gt = te(et, dt, At);
          Ct[At] ? Ct[At].p(Gt, vt) : (Ct[At] = ue(Gt), Ct[At].c(), Ct[At].m(T, null));
        }
        for (; At < Ct.length; At += 1)
          Ct[At].d(1);
        Ct.length = dt.length;
      }
      vt[0] & /*minecraftVersion, versions*/
      32769 && qt(
        T,
        /*minecraftVersion*/
        et[0]
      ), vt[0] & /*useKotlin*/
      32 && (q.checked = /*useKotlin*/
      et[5]), vt[0] & /*mojmap*/
      64 && (ut.checked = /*mojmap*/
      et[6]), /*supportsDataGen*/
      et[11] ? It ? It.p(et, vt) : (It = he(et), It.c(), It.m(f, v)) : It && (It.d(1), It = null), /*supportsSplitSources*/
      et[10] ? bt ? bt.p(et, vt) : (bt = Ae(et), bt.c(), bt.m(f, A)) : bt && (bt.d(1), bt = null);
      let xt = G;
      G = jt(et), G === xt ? Bt[G].p(et, vt) : (Oe(), Mt(Bt[xt], 1, 1, () => {
        Bt[xt] = null;
      }), De(), B = Bt[G], B ? B.p(et, vt) : (B = Bt[G] = Rt[G](et), B.c()), Qt(B, 1), B.m(f, null));
    },
    i(et) {
      J || (Qt(B), J = !0);
    },
    o(et) {
      Mt(B), J = !1;
    },
    d(et) {
      et && Et(f), st.d(), pt && pt.d(), St && St.d(), Wt(wt, et), Wt(Ct, et), It && It.d(), bt && bt.d(), Bt[G].d(), $ = !1, de(Z);
    }
  };
}
function jn(E) {
  let f, e, h, c, r, a, n, o;
  return {
    c() {
      f = nt("p"), e = Nt("Choose a name for your new mod. The mod ID will be "), h = nt("code"), c = Nt(
        /*modid*/
        E[4]
      ), r = Nt(". "), a = nt("a"), a.textContent = "Use custom id", K(h, "class", "svelte-c4460r"), K(a, "href", ""), K(a, "class", "svelte-c4460r"), K(f, "class", "svelte-c4460r");
    },
    m(p, m) {
      kt(p, f, m), Y(f, e), Y(f, h), Y(h, c), Y(f, r), Y(f, a), n || (o = Ft(a, "click", Xt(
        /*useCustomModId*/
        E[19]
      )), n = !0);
    },
    p(p, m) {
      m[0] & /*modid*/
      16 && Pt(
        c,
        /*modid*/
        p[4]
      );
    },
    d(p) {
      p && Et(f), n = !1, o();
    }
  };
}
function zn(E) {
  let f;
  return {
    c() {
      f = nt("p"), f.textContent = "Choose a name for your new mod.", K(f, "class", "svelte-c4460r");
    },
    m(e, h) {
      kt(e, f, h);
    },
    p: Vt,
    d(e) {
      e && Et(f);
    }
  };
}
function ie(E) {
  let f, e, h = (
    /*modIdErrors*/
    E[14]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = ae(re(E, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      f = lt(), e = nt("br"), K(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, f, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*modIdErrors*/
      16384) {
        h = /*modIdErrors*/
        r[14];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = re(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = ae(o), c[n].c(), c[n].m(f.parentNode, f));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      Wt(c, r), r && Et(f), r && Et(e);
    }
  };
}
function ae(E) {
  let f, e = (
    /*error*/
    E[34] + ""
  ), h;
  return {
    c() {
      f = nt("li"), h = Nt(e), Dt(f, "color", "red"), K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p(c, r) {
      r[0] & /*modIdErrors*/
      16384 && e !== (e = /*error*/
      c[34] + "") && Pt(h, e);
    },
    d(c) {
      c && Et(f);
    }
  };
}
function se(E) {
  let f, e, h, c, r, a, n, o, p, m, b, y, l, g = (
    /*customIdErrors*/
    E[13] != null && oe(E)
  );
  return {
    c() {
      f = nt("div"), e = nt("h3"), e.textContent = "Mod ID:", h = lt(), c = nt("hr"), r = lt(), a = nt("p"), n = Nt("Enter the modid you wish to use for your mod. "), o = nt("a"), o.textContent = "Use default", p = lt(), g && g.c(), m = lt(), b = nt("input"), K(e, "class", "svelte-c4460r"), K(c, "class", "svelte-c4460r"), K(o, "href", ""), K(o, "class", "svelte-c4460r"), K(a, "class", "svelte-c4460r"), K(b, "id", "mod-id"), K(b, "class", "svelte-c4460r"), K(f, "class", "form-line svelte-c4460r");
    },
    m(s, d) {
      kt(s, f, d), Y(f, e), Y(f, h), Y(f, c), Y(f, r), Y(f, a), Y(a, n), Y(a, o), Y(f, p), g && g.m(f, null), Y(f, m), Y(f, b), Ot(
        b,
        /*customModId*/
        E[3]
      ), y || (l = [
        Ft(o, "click", Xt(
          /*useDefaultModId*/
          E[20]
        )),
        Ft(
          b,
          "input",
          /*input_input_handler*/
          E[22]
        )
      ], y = !0);
    },
    p(s, d) {
      /*customIdErrors*/
      s[13] != null ? g ? g.p(s, d) : (g = oe(s), g.c(), g.m(f, m)) : g && (g.d(1), g = null), d[0] & /*customModId*/
      8 && b.value !== /*customModId*/
      s[3] && Ot(
        b,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && Et(f), g && g.d(), y = !1, de(l);
    }
  };
}
function oe(E) {
  let f, e, h = (
    /*customIdErrors*/
    E[13]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = le(ne(E, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      f = lt(), e = nt("br"), K(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, f, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*customIdErrors*/
      8192) {
        h = /*customIdErrors*/
        r[13];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = ne(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = le(o), c[n].c(), c[n].m(f.parentNode, f));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      Wt(c, r), r && Et(f), r && Et(e);
    }
  };
}
function le(E) {
  let f, e = (
    /*error*/
    E[34] + ""
  ), h;
  return {
    c() {
      f = nt("li"), h = Nt(e), Dt(f, "color", "red"), K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p(c, r) {
      r[0] & /*customIdErrors*/
      8192 && e !== (e = /*error*/
      c[34] + "") && Pt(h, e);
    },
    d(c) {
      c && Et(f);
    }
  };
}
function ce(E) {
  let f, e = (
    /*error*/
    E[34] + ""
  ), h;
  return {
    c() {
      f = nt("li"), h = Nt(e), Dt(f, "color", "red"), K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p(c, r) {
      r[0] & /*packageNameErrors*/
      4096 && e !== (e = /*error*/
      c[34] + "") && Pt(h, e);
    },
    d(c) {
      c && Et(f);
    }
  };
}
function ue(E) {
  let f, e = (
    /*version*/
    E[31].version + ""
  ), h;
  return {
    c() {
      f = nt("option"), h = Nt(e), f.__value = /*version*/
      E[31].version, f.value = f.__value, K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p: Vt,
    d(c) {
      c && Et(f);
    }
  };
}
function he(E) {
  let f, e, h, c, r, a, n, o, p;
  return {
    c() {
      f = nt("div"), e = nt("div"), h = nt("input"), c = lt(), r = nt("label"), r.textContent = "Data Generation", a = lt(), n = nt("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', K(h, "id", "datagen"), K(h, "type", "checkbox"), K(h, "class", "option-input svelte-c4460r"), K(r, "for", "datagen"), K(r, "class", "option-label svelte-c4460r"), K(e, "class", "option-container svelte-c4460r"), K(n, "class", "option-body svelte-c4460r"), K(f, "class", "svelte-c4460r");
    },
    m(m, b) {
      kt(m, f, b), Y(f, e), Y(e, h), h.checked = /*dataGeneration*/
      E[7], Y(e, c), Y(e, r), Y(f, a), Y(f, n), o || (p = Ft(
        h,
        "change",
        /*input_change_handler*/
        E[27]
      ), o = !0);
    },
    p(m, b) {
      b[0] & /*dataGeneration*/
      128 && (h.checked = /*dataGeneration*/
      m[7]);
    },
    d(m) {
      m && Et(f), o = !1, p();
    }
  };
}
function Ae(E) {
  let f, e, h, c, r, a, n, o, p;
  return {
    c() {
      f = nt("div"), e = nt("div"), h = nt("input"), c = lt(), r = nt("label"), r.textContent = "Split client and common sources", a = lt(), n = nt("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, K(h, "id", "splitSources"), K(h, "type", "checkbox"), K(h, "class", "option-input svelte-c4460r"), K(r, "for", "splitSources"), K(r, "class", "option-label svelte-c4460r"), K(e, "class", "option-container svelte-c4460r"), K(n, "class", "option-body svelte-c4460r"), K(f, "class", "svelte-c4460r");
    },
    m(m, b) {
      kt(m, f, b), Y(f, e), Y(e, h), h.checked = /*splitSources*/
      E[8], Y(e, c), Y(e, r), Y(f, a), Y(f, n), o || (p = Ft(
        h,
        "change",
        /*input_change_handler_1*/
        E[28]
      ), o = !0);
    },
    p(m, b) {
      b[0] & /*splitSources*/
      256 && (h.checked = /*splitSources*/
      m[8]);
    },
    d(m) {
      m && Et(f), o = !1, p();
    }
  };
}
function Wn(E) {
  let f, e, h, c, r, a;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Nt(" Download Template (.ZIP)"), K(f, "class", "button primary large download-button svelte-c4460r"), K(f, "href", "");
    },
    m(n, o) {
      kt(n, f, o), pe(e, f, null), Y(f, h), c = !0, r || (a = Ft(f, "click", Xt(
        /*generate*/
        E[16]
      )), r = !0);
    },
    p: Vt,
    i(n) {
      c || (Qt(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Mt(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && Et(f), me(e), r = !1, a();
    }
  };
}
function Zn(E) {
  let f, e, h, c;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Nt(" Generating..."), K(f, "class", "button primary download-button svelte-c4460r"), K(f, "href", "");
    },
    m(r, a) {
      kt(r, f, a), pe(e, f, null), Y(f, h), c = !0;
    },
    p: Vt,
    i(r) {
      c || (Qt(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Mt(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && Et(f), me(e);
    }
  };
}
function Pn(E) {
  let f, e, h, c;
  return {
    c() {
      f = nt("p"), e = Nt(`Loading data
    
        
        `), h = nt("span"), c = Nt("..."), Dt(h, "font-family", Lt);
    },
    m(r, a) {
      kt(r, f, a), Y(f, e), Y(f, h), Y(h, c);
    },
    p: Vt,
    i: Vt,
    o: Vt,
    d(r) {
      r && Et(f);
    }
  };
}
function Jn(E) {
  let f, e, h = {
    ctx: E,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Pn,
    then: Mn,
    catch: Qn,
    value: 30,
    error: 34,
    blocks: [, , ,]
  };
  return Fe(
    /*versions*/
    E[15],
    h
  ), {
    c() {
      f = Be(), h.block.c();
    },
    m(c, r) {
      kt(c, f, r), h.block.m(c, h.anchor = r), h.mount = () => f.parentNode, h.anchor = f, e = !0;
    },
    p(c, r) {
      E = c, Ue(h, E, r);
    },
    i(c) {
      e || (Qt(h.block), e = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const a = h.blocks[r];
        Mt(a);
      }
      e = !1;
    },
    d(c) {
      c && Et(f), h.block.d(c), h.token = null, h = null;
    }
  };
}
function Yn(E, f, e) {
  let h, c, r, a, n, o, p, m = "Template Mod", b = "com.example", y = !1, l = !1, g = !1, s = !0, d, u = !1;
  const w = Promise.all([xe()]).then(([C]) => (e(0, p = C.find((O) => O.stable).version), { game: C }));
  function S(C) {
    if (C !== void 0)
      return Se(C, d === void 0);
  }
  async function U() {
    if (a !== void 0 || d !== void 0 && n !== void 0 || o.length > 0)
      return;
    e(9, u = !0);
    const C = await Promise.resolve().then(() => Ln), O = {
      modid: d ?? h,
      minecraftVersion: p,
      projectName: m,
      packageName: b,
      useKotlin: y,
      mojmap: l,
      dataGeneration: g && c,
      splitSources: s && r,
      uniqueModIcon: !0
    }, N = new ze();
    await C.generateTemplate({
      config: O,
      writer: {
        write: async (z, x, I) => {
          N.file(z, x, {
            unixPermissions: I != null && I.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(z, x) {
          const I = document.createElement("canvas");
          return I.width = z, I.height = x, {
            getContext: (q) => I.getContext(q),
            getPng: () => Zt(I.toDataURL().split(";base64,")[1]),
            measureText(q, P) {
              const H = q.measureText(P);
              return {
                width: H.width,
                ascent: H.actualBoundingBoxAscent,
                descent: H.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Ze.saveAs(await N.generateAsync({ type: "blob", platform: "UNIX" }), `${h}-template-${O.minecraftVersion}.zip`), e(9, u = !1);
  }
  function F() {
    e(1, m = m.trim());
  }
  function L() {
    e(2, b = on(b));
  }
  function R() {
    e(3, d = h);
  }
  function W() {
    e(3, d = void 0);
  }
  function D() {
    m = this.value, e(1, m);
  }
  function X() {
    d = this.value, e(3, d);
  }
  function rt() {
    b = this.value, e(2, b);
  }
  function k() {
    p = Ve(this), e(0, p), e(15, w);
  }
  function T() {
    y = this.checked, e(5, y);
  }
  function i() {
    l = this.checked, e(6, l);
  }
  function M() {
    g = this.checked, e(7, g);
  }
  function it() {
    s = this.checked, e(8, s);
  }
  return E.$$.update = () => {
    E.$$.dirty[0] & /*projectName*/
    2 && e(4, h = ln(m)), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, c = nn(p || "1.99")), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(10, r = rn(p || "1.99")), E.$$.dirty[0] & /*modid*/
    16 && e(14, a = S(h)), E.$$.dirty[0] & /*customModId*/
    8 && e(13, n = sn(d)), E.$$.dirty[0] & /*packageName*/
    4 && e(12, o = pn(b));
  }, [
    p,
    m,
    b,
    d,
    h,
    y,
    l,
    g,
    s,
    u,
    r,
    c,
    o,
    n,
    a,
    w,
    U,
    F,
    L,
    R,
    W,
    D,
    X,
    rt,
    k,
    T,
    i,
    M,
    it
  ];
}
class Kn extends Ie {
  constructor(f) {
    super(), _e(this, f, Yn, Jn, Ne, {}, null, [-1, -1]);
  }
}
export {
  Kn as default
};

import { S as Be, i as Ie, s as Re, h as Fe, b as _e, c as kt, u as Te, o as Mt, p as Ut, d as Et, q as Ne, e as nt, t as Rt, a as lt, f as zt, g as H, n as Nt, k as K, r as Ve, C as Ot, l as qt, m as Ft, D as Oe, E as ze, j as Zt, B as de, A as jt, y as Xt, v as fe, w as pe, x as me } from "./index.4deac2e0.js";
import ge from "./DownloadIcon.39c279f6.js";
import { d as Ge, b as De, h as Le, i as Me, j as Ue } from "./Api.43537f9a.js";
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function be(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
function Wt(E) {
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
            var b = typeof Wt == "function" && Wt;
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
      for (var n = typeof Wt == "function" && Wt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, h, c) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var p, m, b, y, l, g, s, d = [], u = 0, w = o.length, C = w, T = r.getTypeOf(o) !== "string"; u < o.length; )
          C = w - u, b = T ? (p = o[u++], m = u < w ? o[u++] : 0, u < w ? o[u++] : 0) : (p = o.charCodeAt(u++), m = u < w ? o.charCodeAt(u++) : 0, u < w ? o.charCodeAt(u++) : 0), y = p >> 2, l = (3 & p) << 4 | m >> 4, g = 1 < C ? (15 & m) << 2 | b >> 6 : 64, s = 2 < C ? 63 & b : 64, d.push(n.charAt(y) + n.charAt(l) + n.charAt(g) + n.charAt(s));
        return d.join("");
      }, c.decode = function(o) {
        var p, m, b, y, l, g, s = 0, d = 0, u = "data:";
        if (o.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, C = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && C--, o.charAt(o.length - 2) === n.charAt(64) && C--, C % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | C) : new Array(0 | C); s < o.length; )
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
        var C, T, F = l.file, L = l.compression, G = w !== p.utf8encode, Z = n.transformTo("string", w(F.name)), z = n.transformTo("string", p.utf8encode(F.name)), X = F.comment, rt = n.transformTo("string", w(X)), k = n.transformTo("string", p.utf8encode(X)), V = z.length !== F.name.length, i = k.length !== X.length, U = "", it = "", x = "", O = F.dir, R = F.date, W = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !s || (W.crc32 = l.crc32, W.compressedSize = l.compressedSize, W.uncompressedSize = l.uncompressedSize);
        var S = 0;
        g && (S |= 8), G || !V && !i || (S |= 2048);
        var B = 0, q = 0;
        O && (B |= 16), u === "UNIX" ? (q = 798, B |= function(J, ct) {
          var gt = J;
          return J || (gt = ct ? 16893 : 33204), (65535 & gt) << 16;
        }(F.unixPermissions, O)) : (q = 20, B |= function(J) {
          return 63 & (J || 0);
        }(F.dosPermissions)), C = R.getUTCHours(), C <<= 6, C |= R.getUTCMinutes(), C <<= 5, C |= R.getUTCSeconds() / 2, T = R.getUTCFullYear() - 1980, T <<= 4, T |= R.getUTCMonth() + 1, T <<= 5, T |= R.getUTCDate(), V && (it = r(1, 1) + r(m(Z), 4) + z, U += "up" + r(it.length, 2) + it), i && (x = r(1, 1) + r(m(rt), 4) + k, U += "uc" + r(x.length, 2) + x);
        var j = "";
        return j += `
\0`, j += r(S, 2), j += L.magic, j += r(C, 2), j += r(T, 2), j += r(W.crc32, 4), j += r(W.compressedSize, 4), j += r(W.uncompressedSize, 4), j += r(Z.length, 2), j += r(U.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + j + Z + U, dirRecord: b.CENTRAL_FILE_HEADER + r(q, 2) + j + r(rt.length, 2) + "\0\0\0\0" + r(B, 4) + r(d, 4) + Z + U + rt };
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
        var s = this.bytesWritten - l, d = function(u, w, C, T, F) {
          var L = n.transformTo("string", F(T));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(u, 2) + r(u, 2) + r(w, 4) + r(C, 4) + r(L.length, 2) + L;
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
            var g = function(w, C) {
              var T = w || C, F = r[T];
              if (!F)
                throw new Error(T + " is not a valid compression method !");
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
            var C = u[w], T = C.fileNameStr, F = r.resolve(C.fileNameStr);
            g.file(F, C.decompressed, { binary: !0, optimizedBinaryString: !0, date: C.date, dir: C.dir, comment: C.fileCommentStr.length ? C.fileCommentStr : null, unixPermissions: C.unixPermissions, dosPermissions: C.dosPermissions, createFolders: l.createFolders }), C.dir || (g.file(F).unsafeOriginalName = T);
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
      function r(F, L, G) {
        var Z, z = n.getTypeOf(L), X = n.extend(G || {}, m);
        X.date = X.date || /* @__PURE__ */ new Date(), X.compression !== null && (X.compression = X.compression.toUpperCase()), typeof X.unixPermissions == "string" && (X.unixPermissions = parseInt(X.unixPermissions, 8)), X.unixPermissions && 16384 & X.unixPermissions && (X.dir = !0), X.dosPermissions && 16 & X.dosPermissions && (X.dir = !0), X.dir && (F = u(F)), X.createFolders && (Z = d(F)) && w.call(this, Z, !0);
        var rt = z === "string" && X.binary === !1 && X.base64 === !1;
        G && G.binary !== void 0 || (X.binary = !rt), (L instanceof b && L.uncompressedSize === 0 || X.dir || !L || L.length === 0) && (X.base64 = !1, X.binary = !0, L = "", X.compression = "STORE", z = "string");
        var k = null;
        k = L instanceof b || L instanceof o ? L : g.isNode && g.isStream(L) ? new s(F, L) : n.prepareContent(F, L, X.binary, X.optimizedBinaryString, X.base64);
        var V = new y(F, k, X);
        this.files[F] = V;
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
      function C(F) {
        return Object.prototype.toString.call(F) === "[object RegExp]";
      }
      var T = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(F) {
        var L, G, Z;
        for (L in this.files)
          Z = this.files[L], (G = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && F(G, Z);
      }, filter: function(F) {
        var L = [];
        return this.forEach(function(G, Z) {
          F(G, Z) && L.push(Z);
        }), L;
      }, file: function(F, L, G) {
        if (arguments.length !== 1)
          return F = this.root + F, r.call(this, F, L, G), this;
        if (C(F)) {
          var Z = F;
          return this.filter(function(X, rt) {
            return !rt.dir && Z.test(X);
          });
        }
        var z = this.files[this.root + F];
        return z && !z.dir ? z : null;
      }, folder: function(F) {
        if (!F)
          return this;
        if (C(F))
          return this.filter(function(z, X) {
            return X.dir && F.test(z);
          });
        var L = this.root + F, G = w.call(this, L), Z = this.clone();
        return Z.root = G.name, Z;
      }, remove: function(F) {
        F = this.root + F;
        var L = this.files[F];
        if (L || (F.slice(-1) !== "/" && (F += "/"), L = this.files[F]), L && !L.dir)
          delete this.files[F];
        else
          for (var G = this.filter(function(z, X) {
            return X.name.slice(0, F.length) === F;
          }), Z = 0; Z < G.length; Z++)
            delete this.files[G[Z].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(F) {
        var L, G = {};
        try {
          if ((G = n.extend(F || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = G.type.toLowerCase(), G.compression = G.compression.toUpperCase(), G.type === "binarystring" && (G.type = "string"), !G.type)
            throw new Error("No output type specified.");
          n.checkSupport(G.type), G.platform !== "darwin" && G.platform !== "freebsd" && G.platform !== "linux" && G.platform !== "sunos" || (G.platform = "UNIX"), G.platform === "win32" && (G.platform = "DOS");
          var Z = G.comment || this.comment || "";
          L = l.generateWorker(this, G, Z);
        } catch (z) {
          (L = new o("error")).error(z);
        }
        return new p(L, G.type || "string", G.mimeType);
      }, generateAsync: function(F, L) {
        return this.generateInternalStream(F).accumulate(L);
      }, generateNodeStream: function(F, L) {
        return (F = F || {}).type || (F.type = "nodebuffer"), this.generateInternalStream(F).toNodejsStream(L);
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
          var w = [], C = g._internalType, T = g._outputType, F = g._mimeType;
          g.on("data", function(L, G) {
            w.push(L), s && s(G);
          }).on("error", function(L) {
            w = [], u(L);
          }).on("end", function() {
            try {
              var L = function(G, Z, z) {
                switch (G) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", Z), z);
                  case "base64":
                    return o.encode(Z);
                  default:
                    return r.transformTo(G, Z);
                }
              }(T, function(G, Z) {
                var z, X = 0, rt = null, k = 0;
                for (z = 0; z < Z.length; z++)
                  k += Z[z].length;
                switch (G) {
                  case "string":
                    return Z.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Z);
                  case "uint8array":
                    for (rt = new Uint8Array(k), z = 0; z < Z.length; z++)
                      rt.set(Z[z], X), X += Z[z].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(Z);
                  default:
                    throw new Error("concat : unsupported type '" + G + "'");
                }
              }(C, w), F);
              d(L);
            } catch (G) {
              u(G);
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
          var s, d, u, w, C, T = g.length, F = 0;
          for (w = 0; w < T; w++)
            (64512 & (d = g.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = g.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), F += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(F) : new Array(F), w = C = 0; C < F; w++)
            (64512 & (d = g.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = g.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), d < 128 ? s[C++] = d : (d < 2048 ? s[C++] = 192 | d >>> 6 : (d < 65536 ? s[C++] = 224 | d >>> 12 : (s[C++] = 240 | d >>> 18, s[C++] = 128 | d >>> 12 & 63), s[C++] = 128 | d >>> 6 & 63), s[C++] = 128 | 63 & d);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(g) {
          var s, d, u, w, C = g.length, T = new Array(2 * C);
          for (s = d = 0; s < C; )
            if ((u = g[s++]) < 128)
              T[d++] = u;
            else if (4 < (w = p[u]))
              T[d++] = 65533, s += w - 1;
            else {
              for (u &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < C; )
                u = u << 6 | 63 & g[s++], w--;
              1 < w ? T[d++] = 65533 : u < 65536 ? T[d++] = u : (u -= 65536, T[d++] = 55296 | u >> 10 & 1023, T[d++] = 56320 | 1023 & u);
            }
          return T.length !== d && (T.subarray ? T = T.subarray(0, d) : T.length = d), r.applyFromCharCode(T);
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
        var d = function(w, C) {
          var T;
          for ((C = C || w.length) > w.length && (C = w.length), T = C - 1; 0 <= T && (192 & w[T]) == 128; )
            T--;
          return T < 0 || T === 0 ? C : T + p[w[T]] > C ? T : C;
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
        var w = [], C = 0, T = s.length;
        if (T <= u)
          return String.fromCharCode.apply(null, s);
        for (; C < T; )
          d === "array" || d === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(C, Math.min(C + u, T)))) : w.push(String.fromCharCode.apply(null, s.subarray(C, Math.min(C + u, T)))), C += u;
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
          var C = d[w];
          C === "." || C === "" && w !== 0 && w !== d.length - 1 || (C === ".." ? u.pop() : u.push(C));
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
      }, c.prepareContent = function(s, d, u, w, C) {
        return o.Promise.resolve(d).then(function(T) {
          return r.blob && (T instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(F, L) {
            var G = new FileReader();
            G.onload = function(Z) {
              F(Z.target.result);
            }, G.onerror = function(Z) {
              L(Z.target.error);
            }, G.readAsArrayBuffer(T);
          }) : T;
        }).then(function(T) {
          var F = c.getTypeOf(T);
          return F ? (F === "arraybuffer" ? T = c.transformTo("uint8array", T) : F === "string" && (C ? T = a.decode(T) : u && w !== !0 && (T = function(L) {
            return m(L, r.uint8array ? new Uint8Array(L.length) : new Array(L.length));
          }(T))), T) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
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
        } catch (C) {
          (s = new m("error")).error(C);
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
      }).call(this, typeof Tt < "u" ? Tt : typeof self < "u" ? self : typeof window < "u" ? window : {});
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
      function y(u, w, C) {
        this.promise = u, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      function l(u, w, C) {
        r(function() {
          var T;
          try {
            T = w(C);
          } catch (F) {
            return n.reject(u, F);
          }
          T === u ? n.reject(u, new TypeError("Cannot resolve promise with itself")) : n.resolve(u, T);
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
        var C = !1;
        function T(G) {
          C || (C = !0, n.reject(u, G));
        }
        function F(G) {
          C || (C = !0, n.resolve(u, G));
        }
        var L = d(function() {
          w(F, T);
        });
        L.status === "error" && T(L.value);
      }
      function d(u, w) {
        var C = {};
        try {
          C.value = u(w), C.status = "success";
        } catch (T) {
          C.status = "error", C.value = T;
        }
        return C;
      }
      (h.exports = b).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var w = this.constructor;
        return this.then(function(C) {
          return w.resolve(u()).then(function() {
            return C;
          });
        }, function(C) {
          return w.resolve(u()).then(function() {
            throw C;
          });
        });
      }, b.prototype.catch = function(u) {
        return this.then(null, u);
      }, b.prototype.then = function(u, w) {
        if (typeof u != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var C = new this.constructor(a);
        return this.state !== m ? l(C, this.state === p ? u : w, this.outcome) : this.queue.push(new y(C, u, w)), C;
      }, y.prototype.callFulfilled = function(u) {
        n.resolve(this.promise, u);
      }, y.prototype.otherCallFulfilled = function(u) {
        l(this.promise, this.onFulfilled, u);
      }, y.prototype.callRejected = function(u) {
        n.reject(this.promise, u);
      }, y.prototype.otherCallRejected = function(u) {
        l(this.promise, this.onRejected, u);
      }, n.resolve = function(u, w) {
        var C = d(g, w);
        if (C.status === "error")
          return n.reject(u, C.value);
        var T = C.value;
        if (T)
          s(u, T);
        else {
          u.state = p, u.outcome = w;
          for (var F = -1, L = u.queue.length; ++F < L; )
            u.queue[F].callFulfilled(w);
        }
        return u;
      }, n.reject = function(u, w) {
        u.state = o, u.outcome = w;
        for (var C = -1, T = u.queue.length; ++C < T; )
          u.queue[C].callRejected(w);
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
        var C = u.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var F = new Array(C), L = 0, G = -1, Z = new this(a); ++G < C; )
          z(u[G], G);
        return Z;
        function z(X, rt) {
          w.resolve(X).then(function(k) {
            F[rt] = k, ++L !== C || T || (T = !0, n.resolve(Z, F));
          }, function(k) {
            T || (T = !0, n.reject(Z, k));
          });
        }
      }, b.race = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = u.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var F = -1, L = new this(a); ++F < C; )
          G = u[F], w.resolve(G).then(function(Z) {
            T || (T = !0, n.resolve(L, Z));
          }, function(Z) {
            T || (T = !0, n.reject(L, Z));
          });
        var G;
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
        var C = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (C !== b)
          throw new Error(o[C]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var T;
          if (T = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (C = r.deflateSetDictionary(this.strm, T)) !== b)
            throw new Error(o[C]);
          this._dict_set = !0;
        }
      }
      function d(u, w) {
        var C = new s(w);
        if (C.push(u, !0), C.err)
          throw C.msg || o[C.err];
        return C.result;
      }
      s.prototype.push = function(u, w) {
        var C, T, F = this.strm, L = this.options.chunkSize;
        if (this.ended)
          return !1;
        T = w === ~~w ? w : w === !0 ? 4 : 0, typeof u == "string" ? F.input = n.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? F.input = new Uint8Array(u) : F.input = u, F.next_in = 0, F.avail_in = F.input.length;
        do {
          if (F.avail_out === 0 && (F.output = new a.Buf8(L), F.next_out = 0, F.avail_out = L), (C = r.deflate(F, T)) !== 1 && C !== b)
            return this.onEnd(C), !(this.ended = !0);
          F.avail_out !== 0 && (F.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(F.output, F.next_out))) : this.onData(a.shrinkBuf(F.output, F.next_out)));
        } while ((0 < F.avail_in || F.avail_out === 0) && C !== 1);
        return T === 4 ? (C = r.deflateEnd(this.strm), this.onEnd(C), this.ended = !0, C === b) : T !== 2 || (this.onEnd(b), !(F.avail_out = 0));
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
        var u, w, C, T, F, L, G = this.strm, Z = this.options.chunkSize, z = this.options.dictionary, X = !1;
        if (this.ended)
          return !1;
        w = d === ~~d ? d : d === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? G.input = n.binstring2buf(s) : y.call(s) === "[object ArrayBuffer]" ? G.input = new Uint8Array(s) : G.input = s, G.next_in = 0, G.avail_in = G.input.length;
        do {
          if (G.avail_out === 0 && (G.output = new a.Buf8(Z), G.next_out = 0, G.avail_out = Z), (u = r.inflate(G, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && z && (L = typeof z == "string" ? n.string2buf(z) : y.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, u = r.inflateSetDictionary(this.strm, L)), u === o.Z_BUF_ERROR && X === !0 && (u = o.Z_OK, X = !1), u !== o.Z_STREAM_END && u !== o.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          G.next_out && (G.avail_out !== 0 && u !== o.Z_STREAM_END && (G.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (C = n.utf8border(G.output, G.next_out), T = G.next_out - C, F = n.buf2string(G.output, C), G.next_out = T, G.avail_out = Z - T, T && a.arraySet(G.output, G.output, C, T, 0), this.onData(F)) : this.onData(a.shrinkBuf(G.output, G.next_out)))), G.avail_in === 0 && G.avail_out === 0 && (X = !0);
        } while ((0 < G.avail_in || G.avail_out === 0) && u !== o.Z_STREAM_END);
        return u === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (u = r.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(G.avail_out = 0));
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
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), b = 0, y = 4, l = 0, g = -2, s = -1, d = 4, u = 2, w = 8, C = 9, T = 286, F = 30, L = 19, G = 2 * T + 1, Z = 15, z = 3, X = 258, rt = X + z + 1, k = 42, V = 113, i = 1, U = 2, it = 3, x = 4;
      function O(t, M) {
        return t.msg = m[M], M;
      }
      function R(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function W(t) {
        for (var M = t.length; 0 <= --M; )
          t[M] = 0;
      }
      function S(t) {
        var M = t.state, N = M.pending;
        N > t.avail_out && (N = t.avail_out), N !== 0 && (a.arraySet(t.output, M.pending_buf, M.pending_out, N, t.next_out), t.next_out += N, M.pending_out += N, t.total_out += N, t.avail_out -= N, M.pending -= N, M.pending === 0 && (M.pending_out = 0));
      }
      function B(t, M) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, M), t.block_start = t.strstart, S(t.strm);
      }
      function q(t, M) {
        t.pending_buf[t.pending++] = M;
      }
      function j(t, M) {
        t.pending_buf[t.pending++] = M >>> 8 & 255, t.pending_buf[t.pending++] = 255 & M;
      }
      function J(t, M) {
        var N, v, A = t.max_chain_length, I = t.strstart, Q = t.prev_length, D = t.nice_match, _ = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, Y = t.window, $ = t.w_mask, P = t.prev, tt = t.strstart + X, ht = Y[I + Q - 1], st = Y[I + Q];
        t.prev_length >= t.good_match && (A >>= 2), D > t.lookahead && (D = t.lookahead);
        do
          if (Y[(N = M) + Q] === st && Y[N + Q - 1] === ht && Y[N] === Y[I] && Y[++N] === Y[I + 1]) {
            I += 2, N++;
            do
              ;
            while (Y[++I] === Y[++N] && Y[++I] === Y[++N] && Y[++I] === Y[++N] && Y[++I] === Y[++N] && Y[++I] === Y[++N] && Y[++I] === Y[++N] && Y[++I] === Y[++N] && Y[++I] === Y[++N] && I < tt);
            if (v = X - (tt - I), I = tt - X, Q < v) {
              if (t.match_start = M, D <= (Q = v))
                break;
              ht = Y[I + Q - 1], st = Y[I + Q];
            }
          }
        while ((M = P[M & $]) > _ && --A != 0);
        return Q <= t.lookahead ? Q : t.lookahead;
      }
      function ct(t) {
        var M, N, v, A, I, Q, D, _, Y, $, P = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= P + (P - rt)) {
            for (a.arraySet(t.window, t.window, P, P, 0), t.match_start -= P, t.strstart -= P, t.block_start -= P, M = N = t.hash_size; v = t.head[--M], t.head[M] = P <= v ? v - P : 0, --N; )
              ;
            for (M = N = P; v = t.prev[--M], t.prev[M] = P <= v ? v - P : 0, --N; )
              ;
            A += P;
          }
          if (t.strm.avail_in === 0)
            break;
          if (Q = t.strm, D = t.window, _ = t.strstart + t.lookahead, Y = A, $ = void 0, $ = Q.avail_in, Y < $ && ($ = Y), N = $ === 0 ? 0 : (Q.avail_in -= $, a.arraySet(D, Q.input, Q.next_in, $, _), Q.state.wrap === 1 ? Q.adler = o(Q.adler, D, $, _) : Q.state.wrap === 2 && (Q.adler = p(Q.adler, D, $, _)), Q.next_in += $, Q.total_in += $, $), t.lookahead += N, t.lookahead + t.insert >= z)
            for (I = t.strstart - t.insert, t.ins_h = t.window[I], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + z - 1]) & t.hash_mask, t.prev[I & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = I, I++, t.insert--, !(t.lookahead + t.insert < z)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function gt(t, M) {
        for (var N, v; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && M === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (N = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), N !== 0 && t.strstart - N <= t.w_size - rt && (t.match_length = J(t, N)), t.match_length >= z)
            if (v = n._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            v = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (v && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, M === y ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : U;
      }
      function ot(t, M) {
        for (var N, v, A; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && M === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (N = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, N !== 0 && t.prev_length < t.max_lazy_match && t.strstart - N <= t.w_size - rt && (t.match_length = J(t, N), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - z, v = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, v && (B(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((v = n._tr_tally(t, 0, t.window[t.strstart - 1])) && B(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (v = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, M === y ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : U;
      }
      function at(t, M, N, v, A) {
        this.good_length = t, this.max_lazy = M, this.nice_length = N, this.max_chain = v, this.func = A;
      }
      function ft() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * G), this.dyn_dtree = new a.Buf16(2 * (2 * F + 1)), this.bl_tree = new a.Buf16(2 * (2 * L + 1)), W(this.dyn_ltree), W(this.dyn_dtree), W(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(Z + 1), this.heap = new a.Buf16(2 * T + 1), W(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * T + 1), W(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ut(t) {
        var M;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (M = t.state).pending = 0, M.pending_out = 0, M.wrap < 0 && (M.wrap = -M.wrap), M.status = M.wrap ? k : V, t.adler = M.wrap === 2 ? 0 : 1, M.last_flush = b, n._tr_init(M), l) : O(t, g);
      }
      function mt(t) {
        var M = ut(t);
        return M === l && function(N) {
          N.window_size = 2 * N.w_size, W(N.head), N.max_lazy_match = r[N.level].max_lazy, N.good_match = r[N.level].good_length, N.nice_match = r[N.level].nice_length, N.max_chain_length = r[N.level].max_chain, N.strstart = 0, N.block_start = 0, N.lookahead = 0, N.insert = 0, N.match_length = N.prev_length = z - 1, N.match_available = 0, N.ins_h = 0;
        }(t.state), M;
      }
      function yt(t, M, N, v, A, I) {
        if (!t)
          return g;
        var Q = 1;
        if (M === s && (M = 6), v < 0 ? (Q = 0, v = -v) : 15 < v && (Q = 2, v -= 16), A < 1 || C < A || N !== w || v < 8 || 15 < v || M < 0 || 9 < M || I < 0 || d < I)
          return O(t, g);
        v === 8 && (v = 9);
        var D = new ft();
        return (t.state = D).strm = t, D.wrap = Q, D.gzhead = null, D.w_bits = v, D.w_size = 1 << D.w_bits, D.w_mask = D.w_size - 1, D.hash_bits = A + 7, D.hash_size = 1 << D.hash_bits, D.hash_mask = D.hash_size - 1, D.hash_shift = ~~((D.hash_bits + z - 1) / z), D.window = new a.Buf8(2 * D.w_size), D.head = new a.Buf16(D.hash_size), D.prev = new a.Buf16(D.w_size), D.lit_bufsize = 1 << A + 6, D.pending_buf_size = 4 * D.lit_bufsize, D.pending_buf = new a.Buf8(D.pending_buf_size), D.d_buf = 1 * D.lit_bufsize, D.l_buf = 3 * D.lit_bufsize, D.level = M, D.strategy = I, D.method = N, mt(t);
      }
      r = [new at(0, 0, 0, 0, function(t, M) {
        var N = 65535;
        for (N > t.pending_buf_size - 5 && (N = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ct(t), t.lookahead === 0 && M === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var v = t.block_start + N;
          if ((t.strstart === 0 || t.strstart >= v) && (t.lookahead = t.strstart - v, t.strstart = v, B(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, M === y ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : (t.strstart > t.block_start && (B(t, !1), t.strm.avail_out), i);
      }), new at(4, 4, 8, 4, gt), new at(4, 5, 16, 8, gt), new at(4, 6, 32, 32, gt), new at(4, 4, 16, 16, ot), new at(8, 16, 32, 32, ot), new at(8, 16, 128, 128, ot), new at(8, 32, 128, 256, ot), new at(32, 128, 258, 1024, ot), new at(32, 258, 258, 4096, ot)], c.deflateInit = function(t, M) {
        return yt(t, M, w, 15, 8, 0);
      }, c.deflateInit2 = yt, c.deflateReset = mt, c.deflateResetKeep = ut, c.deflateSetHeader = function(t, M) {
        return t && t.state ? t.state.wrap !== 2 ? g : (t.state.gzhead = M, l) : g;
      }, c.deflate = function(t, M) {
        var N, v, A, I;
        if (!t || !t.state || 5 < M || M < 0)
          return t ? O(t, g) : g;
        if (v = t.state, !t.output || !t.input && t.avail_in !== 0 || v.status === 666 && M !== y)
          return O(t, t.avail_out === 0 ? -5 : g);
        if (v.strm = t, N = v.last_flush, v.last_flush = M, v.status === k)
          if (v.wrap === 2)
            t.adler = 0, q(v, 31), q(v, 139), q(v, 8), v.gzhead ? (q(v, (v.gzhead.text ? 1 : 0) + (v.gzhead.hcrc ? 2 : 0) + (v.gzhead.extra ? 4 : 0) + (v.gzhead.name ? 8 : 0) + (v.gzhead.comment ? 16 : 0)), q(v, 255 & v.gzhead.time), q(v, v.gzhead.time >> 8 & 255), q(v, v.gzhead.time >> 16 & 255), q(v, v.gzhead.time >> 24 & 255), q(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), q(v, 255 & v.gzhead.os), v.gzhead.extra && v.gzhead.extra.length && (q(v, 255 & v.gzhead.extra.length), q(v, v.gzhead.extra.length >> 8 & 255)), v.gzhead.hcrc && (t.adler = p(t.adler, v.pending_buf, v.pending, 0)), v.gzindex = 0, v.status = 69) : (q(v, 0), q(v, 0), q(v, 0), q(v, 0), q(v, 0), q(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), q(v, 3), v.status = V);
          else {
            var Q = w + (v.w_bits - 8 << 4) << 8;
            Q |= (2 <= v.strategy || v.level < 2 ? 0 : v.level < 6 ? 1 : v.level === 6 ? 2 : 3) << 6, v.strstart !== 0 && (Q |= 32), Q += 31 - Q % 31, v.status = V, j(v, Q), v.strstart !== 0 && (j(v, t.adler >>> 16), j(v, 65535 & t.adler)), t.adler = 1;
          }
        if (v.status === 69)
          if (v.gzhead.extra) {
            for (A = v.pending; v.gzindex < (65535 & v.gzhead.extra.length) && (v.pending !== v.pending_buf_size || (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), S(t), A = v.pending, v.pending !== v.pending_buf_size)); )
              q(v, 255 & v.gzhead.extra[v.gzindex]), v.gzindex++;
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), v.gzindex === v.gzhead.extra.length && (v.gzindex = 0, v.status = 73);
          } else
            v.status = 73;
        if (v.status === 73)
          if (v.gzhead.name) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), S(t), A = v.pending, v.pending === v.pending_buf_size)) {
                I = 1;
                break;
              }
              I = v.gzindex < v.gzhead.name.length ? 255 & v.gzhead.name.charCodeAt(v.gzindex++) : 0, q(v, I);
            } while (I !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), I === 0 && (v.gzindex = 0, v.status = 91);
          } else
            v.status = 91;
        if (v.status === 91)
          if (v.gzhead.comment) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), S(t), A = v.pending, v.pending === v.pending_buf_size)) {
                I = 1;
                break;
              }
              I = v.gzindex < v.gzhead.comment.length ? 255 & v.gzhead.comment.charCodeAt(v.gzindex++) : 0, q(v, I);
            } while (I !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), I === 0 && (v.status = 103);
          } else
            v.status = 103;
        if (v.status === 103 && (v.gzhead.hcrc ? (v.pending + 2 > v.pending_buf_size && S(t), v.pending + 2 <= v.pending_buf_size && (q(v, 255 & t.adler), q(v, t.adler >> 8 & 255), t.adler = 0, v.status = V)) : v.status = V), v.pending !== 0) {
          if (S(t), t.avail_out === 0)
            return v.last_flush = -1, l;
        } else if (t.avail_in === 0 && R(M) <= R(N) && M !== y)
          return O(t, -5);
        if (v.status === 666 && t.avail_in !== 0)
          return O(t, -5);
        if (t.avail_in !== 0 || v.lookahead !== 0 || M !== b && v.status !== 666) {
          var D = v.strategy === 2 ? function(_, Y) {
            for (var $; ; ) {
              if (_.lookahead === 0 && (ct(_), _.lookahead === 0)) {
                if (Y === b)
                  return i;
                break;
              }
              if (_.match_length = 0, $ = n._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++, $ && (B(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Y === y ? (B(_, !0), _.strm.avail_out === 0 ? it : x) : _.last_lit && (B(_, !1), _.strm.avail_out === 0) ? i : U;
          }(v, M) : v.strategy === 3 ? function(_, Y) {
            for (var $, P, tt, ht, st = _.window; ; ) {
              if (_.lookahead <= X) {
                if (ct(_), _.lookahead <= X && Y === b)
                  return i;
                if (_.lookahead === 0)
                  break;
              }
              if (_.match_length = 0, _.lookahead >= z && 0 < _.strstart && (P = st[tt = _.strstart - 1]) === st[++tt] && P === st[++tt] && P === st[++tt]) {
                ht = _.strstart + X;
                do
                  ;
                while (P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && tt < ht);
                _.match_length = X - (ht - tt), _.match_length > _.lookahead && (_.match_length = _.lookahead);
              }
              if (_.match_length >= z ? ($ = n._tr_tally(_, 1, _.match_length - z), _.lookahead -= _.match_length, _.strstart += _.match_length, _.match_length = 0) : ($ = n._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++), $ && (B(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Y === y ? (B(_, !0), _.strm.avail_out === 0 ? it : x) : _.last_lit && (B(_, !1), _.strm.avail_out === 0) ? i : U;
          }(v, M) : r[v.level].func(v, M);
          if (D !== it && D !== x || (v.status = 666), D === i || D === it)
            return t.avail_out === 0 && (v.last_flush = -1), l;
          if (D === U && (M === 1 ? n._tr_align(v) : M !== 5 && (n._tr_stored_block(v, 0, 0, !1), M === 3 && (W(v.head), v.lookahead === 0 && (v.strstart = 0, v.block_start = 0, v.insert = 0))), S(t), t.avail_out === 0))
            return v.last_flush = -1, l;
        }
        return M !== y ? l : v.wrap <= 0 ? 1 : (v.wrap === 2 ? (q(v, 255 & t.adler), q(v, t.adler >> 8 & 255), q(v, t.adler >> 16 & 255), q(v, t.adler >> 24 & 255), q(v, 255 & t.total_in), q(v, t.total_in >> 8 & 255), q(v, t.total_in >> 16 & 255), q(v, t.total_in >> 24 & 255)) : (j(v, t.adler >>> 16), j(v, 65535 & t.adler)), S(t), 0 < v.wrap && (v.wrap = -v.wrap), v.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var M;
        return t && t.state ? (M = t.state.status) !== k && M !== 69 && M !== 73 && M !== 91 && M !== 103 && M !== V && M !== 666 ? O(t, g) : (t.state = null, M === V ? O(t, -3) : l) : g;
      }, c.deflateSetDictionary = function(t, M) {
        var N, v, A, I, Q, D, _, Y, $ = M.length;
        if (!t || !t.state || (I = (N = t.state).wrap) === 2 || I === 1 && N.status !== k || N.lookahead)
          return g;
        for (I === 1 && (t.adler = o(t.adler, M, $, 0)), N.wrap = 0, $ >= N.w_size && (I === 0 && (W(N.head), N.strstart = 0, N.block_start = 0, N.insert = 0), Y = new a.Buf8(N.w_size), a.arraySet(Y, M, $ - N.w_size, N.w_size, 0), M = Y, $ = N.w_size), Q = t.avail_in, D = t.next_in, _ = t.input, t.avail_in = $, t.next_in = 0, t.input = M, ct(N); N.lookahead >= z; ) {
          for (v = N.strstart, A = N.lookahead - (z - 1); N.ins_h = (N.ins_h << N.hash_shift ^ N.window[v + z - 1]) & N.hash_mask, N.prev[v & N.w_mask] = N.head[N.ins_h], N.head[N.ins_h] = v, v++, --A; )
            ;
          N.strstart = v, N.lookahead = z - 1, ct(N);
        }
        return N.strstart += N.lookahead, N.block_start = N.strstart, N.insert = N.lookahead, N.lookahead = 0, N.match_length = N.prev_length = z - 1, N.match_available = 0, t.next_in = D, t.input = _, t.avail_in = Q, N.wrap = I, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, c) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, c) {
      h.exports = function(r, a) {
        var n, o, p, m, b, y, l, g, s, d, u, w, C, T, F, L, G, Z, z, X, rt, k, V, i, U;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, U = r.output, b = m - (a - r.avail_out), y = m + (r.avail_out - 257), l = n.dmax, g = n.wsize, s = n.whave, d = n.wnext, u = n.window, w = n.hold, C = n.bits, T = n.lencode, F = n.distcode, L = (1 << n.lenbits) - 1, G = (1 << n.distbits) - 1;
        t:
          do {
            C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), Z = T[w & L];
            e:
              for (; ; ) {
                if (w >>>= z = Z >>> 24, C -= z, (z = Z >>> 16 & 255) === 0)
                  U[m++] = 65535 & Z;
                else {
                  if (!(16 & z)) {
                    if (!(64 & z)) {
                      Z = T[(65535 & Z) + (w & (1 << z) - 1)];
                      continue e;
                    }
                    if (32 & z) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  X = 65535 & Z, (z &= 15) && (C < z && (w += i[o++] << C, C += 8), X += w & (1 << z) - 1, w >>>= z, C -= z), C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), Z = F[w & G];
                  n:
                    for (; ; ) {
                      if (w >>>= z = Z >>> 24, C -= z, !(16 & (z = Z >>> 16 & 255))) {
                        if (!(64 & z)) {
                          Z = F[(65535 & Z) + (w & (1 << z) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & Z, C < (z &= 15) && (w += i[o++] << C, (C += 8) < z && (w += i[o++] << C, C += 8)), l < (rt += w & (1 << z) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= z, C -= z, (z = m - b) < rt) {
                        if (s < (z = rt - z) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (V = u, (k = 0) === d) {
                          if (k += g - z, z < X) {
                            for (X -= z; U[m++] = u[k++], --z; )
                              ;
                            k = m - rt, V = U;
                          }
                        } else if (d < z) {
                          if (k += g + d - z, (z -= d) < X) {
                            for (X -= z; U[m++] = u[k++], --z; )
                              ;
                            if (k = 0, d < X) {
                              for (X -= z = d; U[m++] = u[k++], --z; )
                                ;
                              k = m - rt, V = U;
                            }
                          }
                        } else if (k += d - z, z < X) {
                          for (X -= z; U[m++] = u[k++], --z; )
                            ;
                          k = m - rt, V = U;
                        }
                        for (; 2 < X; )
                          U[m++] = V[k++], U[m++] = V[k++], U[m++] = V[k++], X -= 3;
                        X && (U[m++] = V[k++], 1 < X && (U[m++] = V[k++]));
                      } else {
                        for (k = m - rt; U[m++] = U[k++], U[m++] = U[k++], U[m++] = U[k++], 2 < (X -= 3); )
                          ;
                        X && (U[m++] = U[k++], 1 < X && (U[m++] = U[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < y);
        o -= X = C >> 3, w &= (1 << (C -= X << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < y ? y - m + 257 : 257 - (m - y), n.hold = w, n.bits = C;
      };
    }, {}], 49: [function(e, h, c) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, b = 2, y = 0, l = -2, g = 1, s = 852, d = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function C(k) {
        var V;
        return k && k.state ? (V = k.state, k.total_in = k.total_out = V.total = 0, k.msg = "", V.wrap && (k.adler = 1 & V.wrap), V.mode = g, V.last = 0, V.havedict = 0, V.dmax = 32768, V.head = null, V.hold = 0, V.bits = 0, V.lencode = V.lendyn = new r.Buf32(s), V.distcode = V.distdyn = new r.Buf32(d), V.sane = 1, V.back = -1, y) : l;
      }
      function T(k) {
        var V;
        return k && k.state ? ((V = k.state).wsize = 0, V.whave = 0, V.wnext = 0, C(k)) : l;
      }
      function F(k, V) {
        var i, U;
        return k && k.state ? (U = k.state, V < 0 ? (i = 0, V = -V) : (i = 1 + (V >> 4), V < 48 && (V &= 15)), V && (V < 8 || 15 < V) ? l : (U.window !== null && U.wbits !== V && (U.window = null), U.wrap = i, U.wbits = V, T(k))) : l;
      }
      function L(k, V) {
        var i, U;
        return k ? (U = new w(), (k.state = U).window = null, (i = F(k, V)) !== y && (k.state = null), i) : l;
      }
      var G, Z, z = !0;
      function X(k) {
        if (z) {
          var V;
          for (G = new r.Buf32(512), Z = new r.Buf32(32), V = 0; V < 144; )
            k.lens[V++] = 8;
          for (; V < 256; )
            k.lens[V++] = 9;
          for (; V < 280; )
            k.lens[V++] = 7;
          for (; V < 288; )
            k.lens[V++] = 8;
          for (p(m, k.lens, 0, 288, G, 0, k.work, { bits: 9 }), V = 0; V < 32; )
            k.lens[V++] = 5;
          p(b, k.lens, 0, 32, Z, 0, k.work, { bits: 5 }), z = !1;
        }
        k.lencode = G, k.lenbits = 9, k.distcode = Z, k.distbits = 5;
      }
      function rt(k, V, i, U) {
        var it, x = k.state;
        return x.window === null && (x.wsize = 1 << x.wbits, x.wnext = 0, x.whave = 0, x.window = new r.Buf8(x.wsize)), U >= x.wsize ? (r.arraySet(x.window, V, i - x.wsize, x.wsize, 0), x.wnext = 0, x.whave = x.wsize) : (U < (it = x.wsize - x.wnext) && (it = U), r.arraySet(x.window, V, i - U, it, x.wnext), (U -= it) ? (r.arraySet(x.window, V, i - U, U, 0), x.wnext = U, x.whave = x.wsize) : (x.wnext += it, x.wnext === x.wsize && (x.wnext = 0), x.whave < x.wsize && (x.whave += it))), 0;
      }
      c.inflateReset = T, c.inflateReset2 = F, c.inflateResetKeep = C, c.inflateInit = function(k) {
        return L(k, 15);
      }, c.inflateInit2 = L, c.inflate = function(k, V) {
        var i, U, it, x, O, R, W, S, B, q, j, J, ct, gt, ot, at, ft, ut, mt, yt, t, M, N, v, A = 0, I = new r.Buf8(4), Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), O = k.next_out, it = k.output, W = k.avail_out, x = k.next_in, U = k.input, R = k.avail_in, S = i.hold, B = i.bits, q = R, j = W, M = y;
        t:
          for (; ; )
            switch (i.mode) {
              case g:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; B < 16; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                if (2 & i.wrap && S === 35615) {
                  I[i.check = 0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0), B = S = 0, i.mode = 2;
                  break;
                }
                if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & S) << 8) + (S >> 8)) % 31) {
                  k.msg = "incorrect header check", i.mode = 30;
                  break;
                }
                if ((15 & S) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (B -= 4, t = 8 + (15 & (S >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  k.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, k.adler = i.check = 1, i.mode = 512 & S ? 10 : 12, B = S = 0;
                break;
              case 2:
                for (; B < 16; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                if (i.flags = S, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = S >> 8 & 1), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0, i.mode = 3;
              case 3:
                for (; B < 32; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                i.head && (i.head.time = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, I[2] = S >>> 16 & 255, I[3] = S >>> 24 & 255, i.check = n(i.check, I, 4, 0)), B = S = 0, i.mode = 4;
              case 4:
                for (; B < 16; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                i.head && (i.head.xflags = 255 & S, i.head.os = S >> 8), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; B < 16; ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  i.length = S, i.head && (i.head.extra_len = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (R < (J = i.length) && (J = R), J && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, U, x, J, t)), 512 & i.flags && (i.check = n(i.check, U, J, x)), R -= J, x += J, i.length -= J), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (R === 0)
                    break t;
                  for (J = 0; t = U[x + J++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && J < R; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, U, J, x)), R -= J, x += J, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (R === 0)
                    break t;
                  for (J = 0; t = U[x + J++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && J < R; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, U, J, x)), R -= J, x += J, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; B < 16; ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  if (S !== (65535 & i.check)) {
                    k.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), k.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; B < 32; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                k.adler = i.check = u(S), B = S = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = O, k.avail_out = W, k.next_in = x, k.avail_in = R, i.hold = S, i.bits = B, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (V === 5 || V === 6)
                  break t;
              case 13:
                if (i.last) {
                  S >>>= 7 & B, B -= 7 & B, i.mode = 27;
                  break;
                }
                for (; B < 3; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                switch (i.last = 1 & S, B -= 1, 3 & (S >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (X(i), i.mode = 20, V !== 6)
                      break;
                    S >>>= 2, B -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", i.mode = 30;
                }
                S >>>= 2, B -= 2;
                break;
              case 14:
                for (S >>>= 7 & B, B -= 7 & B; B < 32; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                if ((65535 & S) != (S >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & S, B = S = 0, i.mode = 15, V === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (J = i.length) {
                  if (R < J && (J = R), W < J && (J = W), J === 0)
                    break t;
                  r.arraySet(it, U, x, J, O), R -= J, x += J, W -= J, O += J, i.length -= J;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; B < 14; ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                if (i.nlen = 257 + (31 & S), S >>>= 5, B -= 5, i.ndist = 1 + (31 & S), S >>>= 5, B -= 5, i.ncode = 4 + (15 & S), S >>>= 4, B -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; B < 3; ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  i.lens[Q[i.have++]] = 7 & S, S >>>= 3, B -= 3;
                }
                for (; i.have < 19; )
                  i.lens[Q[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, N = { bits: i.lenbits }, M = p(0, i.lens, 0, 19, i.lencode, 0, i.work, N), i.lenbits = N.bits, M) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; at = (A = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= B); ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  if (ft < 16)
                    S >>>= ot, B -= ot, i.lens[i.have++] = ft;
                  else {
                    if (ft === 16) {
                      for (v = ot + 2; B < v; ) {
                        if (R === 0)
                          break t;
                        R--, S += U[x++] << B, B += 8;
                      }
                      if (S >>>= ot, B -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], J = 3 + (3 & S), S >>>= 2, B -= 2;
                    } else if (ft === 17) {
                      for (v = ot + 3; B < v; ) {
                        if (R === 0)
                          break t;
                        R--, S += U[x++] << B, B += 8;
                      }
                      B -= ot, t = 0, J = 3 + (7 & (S >>>= ot)), S >>>= 3, B -= 3;
                    } else {
                      for (v = ot + 7; B < v; ) {
                        if (R === 0)
                          break t;
                        R--, S += U[x++] << B, B += 8;
                      }
                      B -= ot, t = 0, J = 11 + (127 & (S >>>= ot)), S >>>= 7, B -= 7;
                    }
                    if (i.have + J > i.nlen + i.ndist) {
                      k.msg = "invalid bit length repeat", i.mode = 30;
                      break;
                    }
                    for (; J--; )
                      i.lens[i.have++] = t;
                  }
                }
                if (i.mode === 30)
                  break;
                if (i.lens[256] === 0) {
                  k.msg = "invalid code -- missing end-of-block", i.mode = 30;
                  break;
                }
                if (i.lenbits = 9, N = { bits: i.lenbits }, M = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, N), i.lenbits = N.bits, M) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, N = { bits: i.distbits }, M = p(b, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, N), i.distbits = N.bits, M) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, V === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= R && 258 <= W) {
                  k.next_out = O, k.avail_out = W, k.next_in = x, k.avail_in = R, i.hold = S, i.bits = B, o(k, j), O = k.next_out, it = k.output, W = k.avail_out, x = k.next_in, U = k.input, R = k.avail_in, S = i.hold, B = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; at = (A = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= B); ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                if (at && !(240 & at)) {
                  for (ut = ot, mt = at, yt = ft; at = (A = i.lencode[yt + ((S & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= B); ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  S >>>= ut, B -= ut, i.back += ut;
                }
                if (S >>>= ot, B -= ot, i.back += ot, i.length = ft, at === 0) {
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
                  for (v = i.extra; B < v; ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  i.length += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; at = (A = i.distcode[S & (1 << i.distbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= B); ) {
                  if (R === 0)
                    break t;
                  R--, S += U[x++] << B, B += 8;
                }
                if (!(240 & at)) {
                  for (ut = ot, mt = at, yt = ft; at = (A = i.distcode[yt + ((S & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= B); ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  S >>>= ut, B -= ut, i.back += ut;
                }
                if (S >>>= ot, B -= ot, i.back += ot, 64 & at) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = ft, i.extra = 15 & at, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (v = i.extra; B < v; ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  i.offset += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (W === 0)
                  break t;
                if (J = j - W, i.offset > J) {
                  if ((J = i.offset - J) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ct = J > i.wnext ? (J -= i.wnext, i.wsize - J) : i.wnext - J, J > i.length && (J = i.length), gt = i.window;
                } else
                  gt = it, ct = O - i.offset, J = i.length;
                for (W < J && (J = W), W -= J, i.length -= J; it[O++] = gt[ct++], --J; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (W === 0)
                  break t;
                it[O++] = i.length, W--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; B < 32; ) {
                    if (R === 0)
                      break t;
                    R--, S |= U[x++] << B, B += 8;
                  }
                  if (j -= W, k.total_out += j, i.total += j, j && (k.adler = i.check = i.flags ? n(i.check, it, j, O - j) : a(i.check, it, j, O - j)), j = W, (i.flags ? S : u(S)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; B < 32; ) {
                    if (R === 0)
                      break t;
                    R--, S += U[x++] << B, B += 8;
                  }
                  if (S !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 29;
              case 29:
                M = 1;
                break t;
              case 30:
                M = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = O, k.avail_out = W, k.next_in = x, k.avail_in = R, i.hold = S, i.bits = B, (i.wsize || j !== k.avail_out && i.mode < 30 && (i.mode < 27 || V !== 4)) && rt(k, k.output, k.next_out, j - k.avail_out) ? (i.mode = 31, -4) : (q -= k.avail_in, j -= k.avail_out, k.total_in += q, k.total_out += j, i.total += j, i.wrap && j && (k.adler = i.check = i.flags ? n(i.check, it, j, k.next_out - j) : a(i.check, it, j, k.next_out - j)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (q == 0 && j === 0 || V === 4) && M === y && (M = -5), M);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var V = k.state;
        return V.window && (V.window = null), k.state = null, y;
      }, c.inflateGetHeader = function(k, V) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = V).done = !1, y) : l;
      }, c.inflateSetDictionary = function(k, V) {
        var i, U = V.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, V, U, 0) !== i.check ? -3 : rt(k, V, U, U) ? (i.mode = 31, -4) : (i.havedict = 1, y) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, c) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(m, b, y, l, g, s, d, u) {
        var w, C, T, F, L, G, Z, z, X, rt = u.bits, k = 0, V = 0, i = 0, U = 0, it = 0, x = 0, O = 0, R = 0, W = 0, S = 0, B = null, q = 0, j = new r.Buf16(16), J = new r.Buf16(16), ct = null, gt = 0;
        for (k = 0; k <= 15; k++)
          j[k] = 0;
        for (V = 0; V < l; V++)
          j[b[y + V]]++;
        for (it = rt, U = 15; 1 <= U && j[U] === 0; U--)
          ;
        if (U < it && (it = U), U === 0)
          return g[s++] = 20971520, g[s++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < U && j[i] === 0; i++)
          ;
        for (it < i && (it = i), k = R = 1; k <= 15; k++)
          if (R <<= 1, (R -= j[k]) < 0)
            return -1;
        if (0 < R && (m === 0 || U !== 1))
          return -1;
        for (J[1] = 0, k = 1; k < 15; k++)
          J[k + 1] = J[k] + j[k];
        for (V = 0; V < l; V++)
          b[y + V] !== 0 && (d[J[b[y + V]]++] = V);
        if (G = m === 0 ? (B = ct = d, 19) : m === 1 ? (B = a, q -= 257, ct = n, gt -= 257, 256) : (B = o, ct = p, -1), k = i, L = s, O = V = S = 0, T = -1, F = (W = 1 << (x = it)) - 1, m === 1 && 852 < W || m === 2 && 592 < W)
          return 1;
        for (; ; ) {
          for (Z = k - O, X = d[V] < G ? (z = 0, d[V]) : d[V] > G ? (z = ct[gt + d[V]], B[q + d[V]]) : (z = 96, 0), w = 1 << k - O, i = C = 1 << x; g[L + (S >> O) + (C -= w)] = Z << 24 | z << 16 | X | 0, C !== 0; )
            ;
          for (w = 1 << k - 1; S & w; )
            w >>= 1;
          if (w !== 0 ? (S &= w - 1, S += w) : S = 0, V++, --j[k] == 0) {
            if (k === U)
              break;
            k = b[y + d[V]];
          }
          if (it < k && (S & F) !== T) {
            for (O === 0 && (O = it), L += i, R = 1 << (x = k - O); x + O < U && !((R -= j[x + O]) <= 0); )
              x++, R <<= 1;
            if (W += 1 << x, m === 1 && 852 < W || m === 2 && 592 < W)
              return 1;
            g[T = S & F] = it << 24 | x << 16 | L - s | 0;
          }
        }
        return S !== 0 && (g[L + S] = k - O << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, c) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, c) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(A) {
        for (var I = A.length; 0 <= --I; )
          A[I] = 0;
      }
      var p = 0, m = 29, b = 256, y = b + 1 + m, l = 30, g = 19, s = 2 * y + 1, d = 15, u = 16, w = 7, C = 256, T = 16, F = 17, L = 18, G = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], X = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (y + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var V = new Array(512);
      o(V);
      var i = new Array(256);
      o(i);
      var U = new Array(m);
      o(U);
      var it, x, O, R = new Array(l);
      function W(A, I, Q, D, _) {
        this.static_tree = A, this.extra_bits = I, this.extra_base = Q, this.elems = D, this.max_length = _, this.has_stree = A && A.length;
      }
      function S(A, I) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = I;
      }
      function B(A) {
        return A < 256 ? V[A] : V[256 + (A >>> 7)];
      }
      function q(A, I) {
        A.pending_buf[A.pending++] = 255 & I, A.pending_buf[A.pending++] = I >>> 8 & 255;
      }
      function j(A, I, Q) {
        A.bi_valid > u - Q ? (A.bi_buf |= I << A.bi_valid & 65535, q(A, A.bi_buf), A.bi_buf = I >> u - A.bi_valid, A.bi_valid += Q - u) : (A.bi_buf |= I << A.bi_valid & 65535, A.bi_valid += Q);
      }
      function J(A, I, Q) {
        j(A, Q[2 * I], Q[2 * I + 1]);
      }
      function ct(A, I) {
        for (var Q = 0; Q |= 1 & A, A >>>= 1, Q <<= 1, 0 < --I; )
          ;
        return Q >>> 1;
      }
      function gt(A, I, Q) {
        var D, _, Y = new Array(d + 1), $ = 0;
        for (D = 1; D <= d; D++)
          Y[D] = $ = $ + Q[D - 1] << 1;
        for (_ = 0; _ <= I; _++) {
          var P = A[2 * _ + 1];
          P !== 0 && (A[2 * _] = ct(Y[P]++, P));
        }
      }
      function ot(A) {
        var I;
        for (I = 0; I < y; I++)
          A.dyn_ltree[2 * I] = 0;
        for (I = 0; I < l; I++)
          A.dyn_dtree[2 * I] = 0;
        for (I = 0; I < g; I++)
          A.bl_tree[2 * I] = 0;
        A.dyn_ltree[2 * C] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function at(A) {
        8 < A.bi_valid ? q(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function ft(A, I, Q, D) {
        var _ = 2 * I, Y = 2 * Q;
        return A[_] < A[Y] || A[_] === A[Y] && D[I] <= D[Q];
      }
      function ut(A, I, Q) {
        for (var D = A.heap[Q], _ = Q << 1; _ <= A.heap_len && (_ < A.heap_len && ft(I, A.heap[_ + 1], A.heap[_], A.depth) && _++, !ft(I, D, A.heap[_], A.depth)); )
          A.heap[Q] = A.heap[_], Q = _, _ <<= 1;
        A.heap[Q] = D;
      }
      function mt(A, I, Q) {
        var D, _, Y, $, P = 0;
        if (A.last_lit !== 0)
          for (; D = A.pending_buf[A.d_buf + 2 * P] << 8 | A.pending_buf[A.d_buf + 2 * P + 1], _ = A.pending_buf[A.l_buf + P], P++, D === 0 ? J(A, _, I) : (J(A, (Y = i[_]) + b + 1, I), ($ = G[Y]) !== 0 && j(A, _ -= U[Y], $), J(A, Y = B(--D), Q), ($ = Z[Y]) !== 0 && j(A, D -= R[Y], $)), P < A.last_lit; )
            ;
        J(A, C, I);
      }
      function yt(A, I) {
        var Q, D, _, Y = I.dyn_tree, $ = I.stat_desc.static_tree, P = I.stat_desc.has_stree, tt = I.stat_desc.elems, ht = -1;
        for (A.heap_len = 0, A.heap_max = s, Q = 0; Q < tt; Q++)
          Y[2 * Q] !== 0 ? (A.heap[++A.heap_len] = ht = Q, A.depth[Q] = 0) : Y[2 * Q + 1] = 0;
        for (; A.heap_len < 2; )
          Y[2 * (_ = A.heap[++A.heap_len] = ht < 2 ? ++ht : 0)] = 1, A.depth[_] = 0, A.opt_len--, P && (A.static_len -= $[2 * _ + 1]);
        for (I.max_code = ht, Q = A.heap_len >> 1; 1 <= Q; Q--)
          ut(A, Y, Q);
        for (_ = tt; Q = A.heap[1], A.heap[1] = A.heap[A.heap_len--], ut(A, Y, 1), D = A.heap[1], A.heap[--A.heap_max] = Q, A.heap[--A.heap_max] = D, Y[2 * _] = Y[2 * Q] + Y[2 * D], A.depth[_] = (A.depth[Q] >= A.depth[D] ? A.depth[Q] : A.depth[D]) + 1, Y[2 * Q + 1] = Y[2 * D + 1] = _, A.heap[1] = _++, ut(A, Y, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(st, pt) {
          var Ct, It, wt, dt, xt, Bt, bt = pt.dyn_tree, Gt = pt.max_code, _t = pt.stat_desc.static_tree, Qt = pt.stat_desc.has_stree, et = pt.stat_desc.extra_bits, vt = pt.stat_desc.extra_base, St = pt.stat_desc.max_length, At = 0;
          for (dt = 0; dt <= d; dt++)
            st.bl_count[dt] = 0;
          for (bt[2 * st.heap[st.heap_max] + 1] = 0, Ct = st.heap_max + 1; Ct < s; Ct++)
            St < (dt = bt[2 * bt[2 * (It = st.heap[Ct]) + 1] + 1] + 1) && (dt = St, At++), bt[2 * It + 1] = dt, Gt < It || (st.bl_count[dt]++, xt = 0, vt <= It && (xt = et[It - vt]), Bt = bt[2 * It], st.opt_len += Bt * (dt + xt), Qt && (st.static_len += Bt * (_t[2 * It + 1] + xt)));
          if (At !== 0) {
            do {
              for (dt = St - 1; st.bl_count[dt] === 0; )
                dt--;
              st.bl_count[dt]--, st.bl_count[dt + 1] += 2, st.bl_count[St]--, At -= 2;
            } while (0 < At);
            for (dt = St; dt !== 0; dt--)
              for (It = st.bl_count[dt]; It !== 0; )
                Gt < (wt = st.heap[--Ct]) || (bt[2 * wt + 1] !== dt && (st.opt_len += (dt - bt[2 * wt + 1]) * bt[2 * wt], bt[2 * wt + 1] = dt), It--);
          }
        }(A, I), gt(Y, ht, A.bl_count);
      }
      function t(A, I, Q) {
        var D, _, Y = -1, $ = I[1], P = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), I[2 * (Q + 1) + 1] = 65535, D = 0; D <= Q; D++)
          _ = $, $ = I[2 * (D + 1) + 1], ++P < tt && _ === $ || (P < ht ? A.bl_tree[2 * _] += P : _ !== 0 ? (_ !== Y && A.bl_tree[2 * _]++, A.bl_tree[2 * T]++) : P <= 10 ? A.bl_tree[2 * F]++ : A.bl_tree[2 * L]++, Y = _, ht = (P = 0) === $ ? (tt = 138, 3) : _ === $ ? (tt = 6, 3) : (tt = 7, 4));
      }
      function M(A, I, Q) {
        var D, _, Y = -1, $ = I[1], P = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), D = 0; D <= Q; D++)
          if (_ = $, $ = I[2 * (D + 1) + 1], !(++P < tt && _ === $)) {
            if (P < ht)
              for (; J(A, _, A.bl_tree), --P != 0; )
                ;
            else
              _ !== 0 ? (_ !== Y && (J(A, _, A.bl_tree), P--), J(A, T, A.bl_tree), j(A, P - 3, 2)) : P <= 10 ? (J(A, F, A.bl_tree), j(A, P - 3, 3)) : (J(A, L, A.bl_tree), j(A, P - 11, 7));
            Y = _, ht = (P = 0) === $ ? (tt = 138, 3) : _ === $ ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      o(R);
      var N = !1;
      function v(A, I, Q, D) {
        j(A, (p << 1) + (D ? 1 : 0), 3), function(_, Y, $, P) {
          at(_), P && (q(_, $), q(_, ~$)), r.arraySet(_.pending_buf, _.window, Y, $, _.pending), _.pending += $;
        }(A, I, Q, !0);
      }
      c._tr_init = function(A) {
        N || (function() {
          var I, Q, D, _, Y, $ = new Array(d + 1);
          for (_ = D = 0; _ < m - 1; _++)
            for (U[_] = D, I = 0; I < 1 << G[_]; I++)
              i[D++] = _;
          for (i[D - 1] = _, _ = Y = 0; _ < 16; _++)
            for (R[_] = Y, I = 0; I < 1 << Z[_]; I++)
              V[Y++] = _;
          for (Y >>= 7; _ < l; _++)
            for (R[_] = Y << 7, I = 0; I < 1 << Z[_] - 7; I++)
              V[256 + Y++] = _;
          for (Q = 0; Q <= d; Q++)
            $[Q] = 0;
          for (I = 0; I <= 143; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (; I <= 255; )
            rt[2 * I + 1] = 9, I++, $[9]++;
          for (; I <= 279; )
            rt[2 * I + 1] = 7, I++, $[7]++;
          for (; I <= 287; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (gt(rt, y + 1, $), I = 0; I < l; I++)
            k[2 * I + 1] = 5, k[2 * I] = ct(I, 5);
          it = new W(rt, G, b + 1, y, d), x = new W(k, Z, 0, l, d), O = new W(new Array(0), z, 0, g, w);
        }(), N = !0), A.l_desc = new S(A.dyn_ltree, it), A.d_desc = new S(A.dyn_dtree, x), A.bl_desc = new S(A.bl_tree, O), A.bi_buf = 0, A.bi_valid = 0, ot(A);
      }, c._tr_stored_block = v, c._tr_flush_block = function(A, I, Q, D) {
        var _, Y, $ = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(P) {
          var tt, ht = 4093624447;
          for (tt = 0; tt <= 31; tt++, ht >>>= 1)
            if (1 & ht && P.dyn_ltree[2 * tt] !== 0)
              return a;
          if (P.dyn_ltree[18] !== 0 || P.dyn_ltree[20] !== 0 || P.dyn_ltree[26] !== 0)
            return n;
          for (tt = 32; tt < b; tt++)
            if (P.dyn_ltree[2 * tt] !== 0)
              return n;
          return a;
        }(A)), yt(A, A.l_desc), yt(A, A.d_desc), $ = function(P) {
          var tt;
          for (t(P, P.dyn_ltree, P.l_desc.max_code), t(P, P.dyn_dtree, P.d_desc.max_code), yt(P, P.bl_desc), tt = g - 1; 3 <= tt && P.bl_tree[2 * X[tt] + 1] === 0; tt--)
            ;
          return P.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(A), _ = A.opt_len + 3 + 7 >>> 3, (Y = A.static_len + 3 + 7 >>> 3) <= _ && (_ = Y)) : _ = Y = Q + 5, Q + 4 <= _ && I !== -1 ? v(A, I, Q, D) : A.strategy === 4 || Y === _ ? (j(A, 2 + (D ? 1 : 0), 3), mt(A, rt, k)) : (j(A, 4 + (D ? 1 : 0), 3), function(P, tt, ht, st) {
          var pt;
          for (j(P, tt - 257, 5), j(P, ht - 1, 5), j(P, st - 4, 4), pt = 0; pt < st; pt++)
            j(P, P.bl_tree[2 * X[pt] + 1], 3);
          M(P, P.dyn_ltree, tt - 1), M(P, P.dyn_dtree, ht - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, $ + 1), mt(A, A.dyn_ltree, A.dyn_dtree)), ot(A), D && at(A);
      }, c._tr_tally = function(A, I, Q) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = I >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & I, A.pending_buf[A.l_buf + A.last_lit] = 255 & Q, A.last_lit++, I === 0 ? A.dyn_ltree[2 * Q]++ : (A.matches++, I--, A.dyn_ltree[2 * (i[Q] + b + 1)]++, A.dyn_dtree[2 * B(I)]++), A.last_lit === A.lit_bufsize - 1;
      }, c._tr_align = function(A) {
        j(A, 2, 3), J(A, C, rt), function(I) {
          I.bi_valid === 16 ? (q(I, I.bi_buf), I.bi_buf = 0, I.bi_valid = 0) : 8 <= I.bi_valid && (I.pending_buf[I.pending++] = 255 & I.bi_buf, I.bi_buf >>= 8, I.bi_valid -= 8);
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
            d = d && d.setTimeout ? d : a, o = {}.toString.call(a.process) === "[object process]" ? function(T) {
              process.nextTick(function() {
                w(T);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var T = !0, F = a.onmessage;
                return a.onmessage = function() {
                  T = !1;
                }, a.postMessage("", "*"), a.onmessage = F, T;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", C, !1) : a.attachEvent("onmessage", C), function(T) {
              a.postMessage(b + T, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(T) {
              w(T.data);
            }, function(T) {
              m.port2.postMessage(T);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(T) {
              var F = s.createElement("script");
              F.onreadystatechange = function() {
                w(T), F.onreadystatechange = null, p.removeChild(F), F = null;
              }, p.appendChild(F);
            }) : function(T) {
              setTimeout(w, 0, T);
            }, d.setImmediate = function(T) {
              typeof T != "function" && (T = new Function("" + T));
              for (var F = new Array(arguments.length - 1), L = 0; L < F.length; L++)
                F[L] = arguments[L + 1];
              var G = { callback: T, args: F };
              return l[y] = G, o(y), y++;
            }, d.clearImmediate = u;
          }
          function u(T) {
            delete l[T];
          }
          function w(T) {
            if (g)
              setTimeout(w, 0, T);
            else {
              var F = l[T];
              if (F) {
                g = !0;
                try {
                  (function(L) {
                    var G = L.callback, Z = L.args;
                    switch (Z.length) {
                      case 0:
                        G();
                        break;
                      case 1:
                        G(Z[0]);
                        break;
                      case 2:
                        G(Z[0], Z[1]);
                        break;
                      case 3:
                        G(Z[0], Z[1], Z[2]);
                        break;
                      default:
                        G.apply(n, Z);
                    }
                  })(F);
                } finally {
                  u(T), g = !1;
                }
              }
            }
          }
          function C(T) {
            T.source === a && typeof T.data == "string" && T.data.indexOf(b) === 0 && w(+T.data.slice(b.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Tt < "u" ? Tt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(ve);
var Qe = ve.exports;
const We = /* @__PURE__ */ be(Qe);
var ye = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h();
  })(Tt, function() {
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Tt == "object" && Tt.global === Tt ? Tt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
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
          var C = d.result;
          C = s ? C : C.replace(/^data:[^;]*;/, "data:attachment/file;"), y ? y.location.href = C : location = C, y = null;
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
var Ze = ye.exports;
const Pe = /* @__PURE__ */ be(Ze);
function Pt(E) {
  for (var f = globalThis.atob(E), e = f.length, h = new Uint8Array(e), c = 0; c < e; c++)
    h[c] = f.charCodeAt(c);
  return h.buffer;
}
const je = `#!/bin/sh

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
`, Ye = `@rem\r
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
`, He = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-9.1.0-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Je = "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bW1hbmRMaW5lQXJndW1lbnRFeGNlcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAB8oKXo4CAADbAwAAJgAJAAAAAAAAAAAAAACbEAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVPcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA1/rjwFwCAAC2BAAAMwAJAAAAAAAAAAAAAACGEwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQWZ0ZXJPcHRpb25zLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAJScugpUAwAAkwcAADwACQAAAAAAAAAAAAAATBYAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEJlZm9yZUZpcnN0U3ViQ29tbWFuZC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAOu2qxRgcAAAIPAAA9AAkAAAAAAAAAAAAAABMaAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRLbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhANOFUblMAgAAlwQAADwACQAAAAAAAAAAAAAAzSEAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE1pc3NpbmdPcHRpb25BcmdTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCkz5GR1gIAAEoFAAA9AAkAAAAAAAAAAAAAAIwkAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25Bd2FyZVBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAMO8XlqgAQAAfQIAADgACQAAAAAAAAAAAAAA1icAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAHd6JWoiAgAAZgMAADMACQAAAAAAAAAAAAAA5SkAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblN0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", we = `# gradle

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
  await E.write("gradlew", je, {
    executable: !0
  }), await E.write("gradlew.bat", Ye), await E.write("gradle/wrapper/gradle-wrapper.properties", He), await E.write("gradle/wrapper/gradle-wrapper.jar", Pt(Je)), await E.write(".gitignore", we), await E.write(".github/workflows/build.yml", ke);
}
var Jt = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h(f);
  })(Tt, function(e) {
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(x) {
        for (var O = 1; O < arguments.length; O++) {
          var R = arguments[O];
          for (var W in R)
            Object.prototype.hasOwnProperty.call(R, W) && (x[W] = R[W]);
        }
        return x;
      }, h.apply(this, arguments);
    }
    function c(x, O) {
      x.prototype = Object.create(O.prototype), x.prototype.constructor = x, a(x, O);
    }
    function r(x) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(O) {
        return O.__proto__ || Object.getPrototypeOf(O);
      }, r(x);
    }
    function a(x, O) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, W) {
        return R.__proto__ = W, R;
      }, a(x, O);
    }
    function n(x, O, R) {
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
      }() ? Reflect.construct.bind() : function(W, S, B) {
        var q = [null];
        q.push.apply(q, S);
        var j = new (Function.bind.apply(W, q))();
        return B && a(j, B.prototype), j;
      }, n.apply(null, arguments);
    }
    function o(x) {
      var O = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(R) {
        if (R === null || Function.toString.call(R).indexOf("[native code]") === -1)
          return R;
        if (typeof R != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (O !== void 0) {
          if (O.has(R))
            return O.get(R);
          O.set(R, W);
        }
        function W() {
          return n(R, arguments, r(this).constructor);
        }
        return W.prototype = Object.create(R.prototype, { constructor: { value: W, enumerable: !1, writable: !0, configurable: !0 } }), a(W, R);
      }, o(x);
    }
    var p = /* @__PURE__ */ function() {
      function x(R) {
        this.cache = void 0, this.cache = R;
      }
      var O = x.prototype;
      return O.define = function(R, W) {
        this.cache[R] = W;
      }, O.get = function(R) {
        return this.cache[R];
      }, O.remove = function(R) {
        delete this.cache[R];
      }, O.reset = function() {
        this.cache = {};
      }, O.load = function(R) {
        this.cache = h({}, this.cache, R);
      }, x;
    }(), m = /* @__PURE__ */ function(x) {
      function O(R) {
        var W;
        return (W = x.call(this, R) || this).name = "Eta Error", W;
      }
      return c(O, x), O;
    }(/* @__PURE__ */ o(Error));
    function b(x, O, R) {
      var W = O.slice(0, R).split(/\n/), S = W.length, B = W[S - 1].length + 1;
      throw x += " at line " + S + " col " + B + `:

  ` + O.split(/\n/)[S - 1] + `
  ` + Array(B).join(" ") + "^", new m(x);
    }
    function y(x, O, R, W) {
      var S = O.split(`
`), B = Math.max(R - 3, 0), q = Math.min(S.length, R + 3), j = W, J = S.slice(B, q).map(function(gt, ot) {
        var at = ot + B + 1;
        return (at == R ? " >> " : "    ") + at + "| " + gt;
      }).join(`
`), ct = new m((j ? j + ":" + R + `
` : "line " + R + `
`) + J + `

` + x.message);
      throw ct.name = x.name, ct;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function g(x, O) {
      var R = this.config, W = O && O.async ? l : Function;
      try {
        return new W(R.varName, "options", this.compileToString.call(this, x, O));
      } catch (S) {
        throw S instanceof SyntaxError ? new m(`Bad template syntax

` + S.message + `
` + Array(S.message.length + 1).join("=") + `
` + this.compileToString.call(this, x, O) + `
`) : S;
      }
    }
    function s(x, O) {
      var R = this.config, W = O && O.async, S = this.parse.call(this, x), B = R.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (R.debug ? ', line: 1, templateStr: "' + x.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (R.debug ? "try {" : "") + (R.useWith ? "with(" + R.varName + "||{}){" : "") + `

` + d.call(this, S) + `
if (__eta.layout) {
  __eta.res = ` + (W ? "await includeAsync" : "include") + " (__eta.layout, {..." + R.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (R.useWith ? "}" : "") + (R.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (R.plugins)
        for (var q = 0; q < R.plugins.length; q++) {
          var j = R.plugins[q];
          j.processFnString && (B = j.processFnString(B, R));
        }
      return B;
    }
    function d(x) {
      for (var O = this.config, R = 0, W = x.length, S = ""; R < W; R++) {
        var B = x[R];
        if (typeof B == "string")
          S += "__eta.res+='" + B + `'
`;
        else {
          var q = B.t, j = B.val || "";
          O.debug && (S += "__eta.line=" + B.lineNo + `
`), q === "r" ? (O.autoFilter && (j = "__eta.f(" + j + ")"), S += "__eta.res+=" + j + `
`) : q === "i" ? (O.autoFilter && (j = "__eta.f(" + j + ")"), O.autoEscape && (j = "__eta.e(" + j + ")"), S += "__eta.res+=" + j + `
`) : q === "e" && (S += j + `
`);
        }
      }
      return S;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(x) {
      return u[x];
    }
    var C = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(x) {
      var O = String(x);
      return /[&<>"']/.test(O) ? O.replace(/[&<>"']/g, w) : O;
    }, filterFunction: function(x) {
      return String(x);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, T = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, F = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, L = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function G(x) {
      return x.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function Z(x, O) {
      return x.slice(0, O).split(`
`).length;
    }
    function z(x) {
      var O = this.config, R = [], W = !1, S = 0, B = O.parse;
      if (O.plugins)
        for (var q = 0; q < O.plugins.length; q++) {
          var j = O.plugins[q];
          j.processTemplate && (x = j.processTemplate(x, O));
        }
      function J(I, Q) {
        I && (I = function(D, _, Y, $) {
          var P, tt;
          return Array.isArray(_.autoTrim) ? (P = _.autoTrim[1], tt = _.autoTrim[0]) : P = tt = _.autoTrim, (Y || Y === !1) && (P = Y), ($ || $ === !1) && (tt = $), tt || P ? P === "slurp" && tt === "slurp" ? D.trim() : (P === "_" || P === "slurp" ? D = D.trimStart() : P !== "-" && P !== "nl" || (D = D.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? D = D.trimEnd() : tt !== "-" && tt !== "nl" || (D = D.replace(/(?:\r\n|\n|\r)$/, "")), D) : D;
        }(I, O, W, Q), I && (I = I.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), R.push(I)));
      }
      O.rmWhitespace && (x = x.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), T.lastIndex = 0, F.lastIndex = 0, L.lastIndex = 0;
      for (var ct, gt = [B.exec, B.interpolate, B.raw].reduce(function(I, Q) {
        return I && Q ? I + "|" + G(Q) : Q ? G(Q) : I;
      }, ""), ot = new RegExp(G(O.tags[0]) + "(-|_)?\\s*(" + gt + ")?\\s*", "g"), at = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + G(O.tags[1]) + ")", "g"); ct = ot.exec(x); ) {
        var ft = x.slice(S, ct.index);
        S = ct[0].length + ct.index;
        var ut = ct[2] || "";
        J(ft, ct[1]), at.lastIndex = S;
        for (var mt = void 0, yt = !1; mt = at.exec(x); ) {
          if (mt[1]) {
            var t = x.slice(S, mt.index);
            ot.lastIndex = S = at.lastIndex, W = mt[2], yt = { t: ut === B.exec ? "e" : ut === B.raw ? "r" : ut === B.interpolate ? "i" : "", val: t };
            break;
          }
          var M = mt[0];
          if (M === "/*") {
            var N = x.indexOf("*/", at.lastIndex);
            N === -1 && b("unclosed comment", x, mt.index), at.lastIndex = N;
          } else
            M === "'" ? (F.lastIndex = mt.index, F.exec(x) ? at.lastIndex = F.lastIndex : b("unclosed string", x, mt.index)) : M === '"' ? (L.lastIndex = mt.index, L.exec(x) ? at.lastIndex = L.lastIndex : b("unclosed string", x, mt.index)) : M === "`" && (T.lastIndex = mt.index, T.exec(x) ? at.lastIndex = T.lastIndex : b("unclosed string", x, mt.index));
        }
        yt ? (O.debug && (yt.lineNo = Z(x, ct.index)), R.push(yt)) : b("unclosed tag", x, ct.index);
      }
      if (J(x.slice(S, x.length), !1), O.plugins)
        for (var v = 0; v < O.plugins.length; v++) {
          var A = O.plugins[v];
          A.processAST && (R = A.processAST(R, O));
        }
      return R;
    }
    function X(x, O) {
      var R = O && O.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !x.startsWith("@")) {
        var W = O.filepath, S = R.get(W);
        if (this.config.cache && S)
          return S;
        var B = this.readFile(W), q = this.compile(B, O);
        return this.config.cache && R.define(W, q), q;
      }
      var j = R.get(x);
      if (j)
        return j;
      throw new m("Failed to get template '" + x + "'");
    }
    function rt(x, O, R) {
      var W, S = h({}, R, { async: !1 });
      return typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), W = X.call(this, x, S)) : W = x, W.call(this, O, S);
    }
    function k(x, O, R) {
      var W, S = h({}, R, { async: !0 });
      typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), W = X.call(this, x, S)) : W = x;
      var B = W.call(this, O, S);
      return Promise.resolve(B);
    }
    function V(x, O) {
      var R = this.compile(x, { async: !1 });
      return rt.call(this, R, O);
    }
    function i(x, O) {
      var R = this.compile(x, { async: !0 });
      return k.call(this, R, O);
    }
    var U = /* @__PURE__ */ function() {
      function x(R) {
        this.config = void 0, this.RuntimeErr = y, this.compile = g, this.compileToString = s, this.parse = z, this.render = rt, this.renderAsync = k, this.renderString = V, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = R ? h({}, C, R) : h({}, C);
      }
      var O = x.prototype;
      return O.configure = function(R) {
        this.config = h({}, this.config, R);
      }, O.withConfig = function(R) {
        return h({}, this, { config: h({}, this.config, R) });
      }, O.loadTemplate = function(R, W, S) {
        if (typeof W == "string")
          (S && S.async ? this.templatesAsync : this.templatesSync).define(R, this.compile(W, S));
        else {
          var B = this.templatesSync;
          (W.constructor.name === "AsyncFunction" || S && S.async) && (B = this.templatesAsync), B.define(R, W);
        }
      }, x;
    }(), it = /* @__PURE__ */ function(x) {
      function O() {
        return x.apply(this, arguments) || this;
      }
      return c(O, x), O;
    }(U);
    e.Eta = it;
  });
})(Jt, Jt.exports);
var qe = Jt.exports;
const Ke = new qe.Eta({
  autoTrim: !1
});
function Vt(E, f) {
  return Ke.renderString(E, f);
}
const $e = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# IntelliJ IDEA is not yet fully compatible with configuration cache, see: https://github.com/FabricMC/fabric-loom/issues/1349
org.gradle.configuration-cache=false

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
loom_version=1.12-SNAPSHOT
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
  return Yt(E) >= 17;
}
function rn(E) {
  return Yt(E) >= 19;
}
function Yt(E) {
  return Ee(E)[1];
}
function an(E) {
  return Ee(E)[2];
}
function Ee(E) {
  return E.split("-")[0].split(".").map((e) => parseInt(e));
}
function Ce(E, f) {
  let e = [];
  const h = f ? "Modid" : "Mod Name";
  return E.length == 0 ? [`${h} is empty!`] : (E.length == 1 ? e.push(`${h} is only a single character! (It must be at least 2 characters long)!`) : E.length > 64 && e.push(`${h} has more than 64 characters!`), E.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function sn(E) {
  if (E === void 0)
    return;
  let f = Ce(E, !0) ?? [];
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
function Ht(E) {
  const f = Yt(E);
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
  await E.write("gradle.properties", Vt($e, f)), await E.write("build.gradle", Vt(tn, { ...f, java: Ht(f.minecraftVersion) })), await E.write("settings.gradle", en);
}
const xe = `package <%= it.packageName %>;

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
    compatibilityLevel: Ht(f.minecraftVersion).mixin,
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
  return await E.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/main/java/${e.replaceAll(".", "/")}/${h}.java`, Vt(xe, {
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
    compatibilityLevel: Ht(f.minecraftVersion).mixin,
    client: [
      h
    ],
    injectors: {
      defaultRequire: 1
    }
  }, o = `${f.modid}.client.mixins.json`;
  return await E.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/client/java/${e.replaceAll(".", "/")}/${h}.java`, Vt(xe, {
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
`, Cn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function xn(E, f) {
  const e = Sn(f.projectName), h = {
    package: f.packageName,
    className: e,
    classFullName: f.packageName + "." + e,
    path: f.packageName.replaceAll(".", "/") + "/" + e,
    modid: f.modid,
    slf4j: Yt(f.minecraftVersion) >= 18,
    clientEntrypoint: f.splitSources,
    dataEntrypoint: f.dataGeneration
  };
  return f.kotlin ? await In(E, h) : await Bn(E, h);
}
function Sn(E) {
  return E.split(" ").map((f) => f[0].toUpperCase() + f.slice(1)).join("").replace(/\W+/g, "");
}
async function Bn(E, f) {
  var e = {
    main: [
      f.classFullName
    ]
  };
  if (await E.write(`src/main/java/${f.path}.java`, Vt(vn, f)), f.clientEntrypoint && (await E.write(`src/client/java/${f.path}Client.java`, Vt(wn, { ...f, className: f.className + "Client" })), e = {
    ...e,
    client: [
      f.classFullName + "Client"
    ]
  }), f.dataEntrypoint) {
    const h = f.clientEntrypoint ? "client" : "main";
    await E.write(`src/${h}/java/${f.path}DataGenerator.java`, Vt(En, { ...f, className: f.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        f.classFullName + "DataGenerator"
      ]
    };
  }
  return e;
}
async function In(E, f) {
  var e = {
    main: [
      {
        value: f.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await E.write(`src/main/kotlin/${f.path}.kt`, Vt(yn, f)), f.clientEntrypoint && (await E.write(`src/client/kotlin/${f.path}Client.kt`, Vt(kn, { ...f, className: f.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: f.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), f.dataEntrypoint) {
    const h = f.clientEntrypoint ? "client" : "main";
    await E.write(`src/${h}/kotlin/${f.path}DataGenerator.kt`, Vt(Cn, { ...f, className: f.className + "DataGenerator" })), e = {
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
function Rn(E, f, e) {
  if (!f)
    return Pt($t);
  const h = e.create(128, 128);
  return h != null && Fn(h, E) ? h.getPng() : Pt($t);
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
function _n(E) {
  return Number(E.split(".")[1]) >= 59;
}
async function Tn(E, f, e) {
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
    entrypoints: await xn(E, e),
    mixins: h,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Ht(e.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  a.depends[_n(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await E.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await E.write(`src/main/resources/assets/${e.modid}/icon.png`, Rn(e.projectName, e.uniqueModIcon, f));
}
const Nn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Vn = `Creative Commons Legal Code

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
  await E.write(".gitattributes", Nn), await E.write(".gitignore", we), await E.write(".github/workflows/build.yml", ke), await E.write("LICENSE", Vn);
}
const Lt = "Comic Relief";
async function zn(E) {
  const f = await Gn(E.config);
  await Xe(E), await mn(E.writer, f), await Tn(E.writer, E.canvas, f), await On(E.writer);
}
async function Se() {
  let E = await Ge();
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
async function Gn(E) {
  return {
    ...E,
    loaderVersion: (await De()).find((f) => f.stable).version,
    fabricVersion: await Le(E.minecraftVersion),
    yarnVersion: (await Me(E.minecraftVersion))[0].version,
    kotlin: await Dn(E)
  };
}
async function Dn(E) {
  if (!E.useKotlin)
    return;
  const e = (await Ue()).pop(), h = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: h
  };
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Lt,
  generateTemplate: zn,
  getTemplateGameVersions: Se
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
function Mn(E) {
  let f, e, h = (
    /*error*/
    E[34].message + ""
  ), c, r, a;
  return {
    c() {
      f = nt("p"), e = Rt("Error: "), c = Rt(h), r = lt(), a = nt("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, zt(f, "color", "red");
    },
    m(n, o) {
      kt(n, f, o), H(f, e), H(f, c), kt(n, r, o), kt(n, a, o);
    },
    p: Nt,
    i: Nt,
    o: Nt,
    d(n) {
      n && Et(f), n && Et(r), n && Et(a);
    }
  };
}
function Un(E) {
  let f, e, h, c, r, a, n, o, p, m, b, y, l, g, s, d, u, w, C, T, F, L, G, Z, z, X, rt, k, V, i, U, it, x, O, R, W, S, B, q, j, J, ct, gt, ot, at, ft, ut, mt, yt, t, M, N, v, A, I, Q, D, _, Y, $, P;
  function tt(et, vt) {
    return (
      /*customModId*/
      et[3] != null ? Wn : Qn
    );
  }
  let ht = tt(E), st = ht(E), pt = (
    /*modIdErrors*/
    E[14] != null && ie(E)
  ), Ct = (
    /*customModId*/
    E[3] != null && se(E)
  ), It = (
    /*packageNameErrors*/
    E[12]
  ), wt = [];
  for (let et = 0; et < It.length; et += 1)
    wt[et] = ce(ee(E, It, et));
  let dt = (
    /*data*/
    E[30].game
  ), xt = [];
  for (let et = 0; et < dt.length; et += 1)
    xt[et] = ue(te(E, dt, et));
  let Bt = (
    /*supportsDataGen*/
    E[11] && he(E)
  ), bt = (
    /*supportsSplitSources*/
    E[10] && Ae(E)
  );
  const Gt = [Pn, Zn], _t = [];
  function Qt(et, vt) {
    return (
      /*loading*/
      et[9] ? 0 : 1
    );
  }
  return D = Qt(E), _ = _t[D] = Gt[D](E), {
    c() {
      f = nt("div"), e = nt("div"), h = nt("h3"), h.textContent = "Mod Name:", c = lt(), r = nt("hr"), a = lt(), st.c(), n = lt(), o = nt("input"), p = lt(), pt && pt.c(), m = lt(), Ct && Ct.c(), b = lt(), y = nt("div"), l = nt("h3"), l.textContent = "Package Name:", g = lt(), s = nt("hr"), d = lt(), u = nt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = lt(), C = nt("input"), T = lt();
      for (let et = 0; et < wt.length; et += 1)
        wt[et].c();
      F = lt(), L = nt("div"), G = nt("h3"), G.textContent = "Minecraft Version:", Z = lt(), z = nt("hr"), X = lt(), rt = nt("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = lt(), V = nt("select");
      for (let et = 0; et < xt.length; et += 1)
        xt[et].c();
      i = lt(), U = nt("hr"), it = lt(), x = nt("br"), O = lt(), R = nt("h4"), R.textContent = "Advanced Options:", W = lt(), S = nt("div"), B = nt("div"), q = nt("input"), j = lt(), J = nt("label"), J.textContent = "Kotlin Programming Language", ct = lt(), gt = nt("p"), gt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = lt(), at = nt("div"), ft = nt("div"), ut = nt("input"), mt = lt(), yt = nt("label"), yt.textContent = "Mojang Mappings", t = lt(), M = nt("p"), M.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", N = lt(), Bt && Bt.c(), v = lt(), bt && bt.c(), A = lt(), I = nt("br"), Q = lt(), _.c(), K(h, "class", "svelte-c4460r"), K(r, "class", "svelte-c4460r"), K(o, "id", "project-name"), K(o, "class", "svelte-c4460r"), K(e, "class", "form-line svelte-c4460r"), K(l, "class", "svelte-c4460r"), K(s, "class", "svelte-c4460r"), K(u, "class", "svelte-c4460r"), K(C, "id", "package-name"), K(C, "class", "svelte-c4460r"), K(y, "class", "form-line svelte-c4460r"), K(G, "class", "svelte-c4460r"), K(z, "class", "svelte-c4460r"), K(rt, "class", "svelte-c4460r"), K(V, "id", "minecraft-version"), zt(V, "min-width", "200px"), K(V, "class", "svelte-c4460r"), /*minecraftVersion*/
      E[0] === void 0 && Ve(() => (
        /*select_change_handler*/
        E[24].call(V)
      )), K(L, "class", "form-line svelte-c4460r"), K(U, "class", "svelte-c4460r"), K(x, "class", "svelte-c4460r"), K(R, "class", "svelte-c4460r"), K(q, "id", "kotlin"), K(q, "type", "checkbox"), K(q, "class", "option-input svelte-c4460r"), K(J, "for", "kotlin"), K(J, "class", "option-label svelte-c4460r"), K(B, "class", "option-container svelte-c4460r"), K(gt, "class", "option-body svelte-c4460r"), K(S, "class", "svelte-c4460r"), K(ut, "id", "mojmap"), K(ut, "type", "checkbox"), K(ut, "class", "option-input svelte-c4460r"), K(yt, "for", "mojmap"), K(yt, "class", "option-label svelte-c4460r"), K(ft, "class", "option-container svelte-c4460r"), K(M, "class", "option-body svelte-c4460r"), K(at, "class", "svelte-c4460r"), K(I, "class", "svelte-c4460r"), K(f, "class", "template svelte-c4460r");
    },
    m(et, vt) {
      kt(et, f, vt), H(f, e), H(e, h), H(e, c), H(e, r), H(e, a), st.m(e, null), H(e, n), H(e, o), Ot(
        o,
        /*projectName*/
        E[1]
      ), H(e, p), pt && pt.m(e, null), H(f, m), Ct && Ct.m(f, null), H(f, b), H(f, y), H(y, l), H(y, g), H(y, s), H(y, d), H(y, u), H(y, w), H(y, C), Ot(
        C,
        /*packageName*/
        E[2]
      ), H(y, T);
      for (let St = 0; St < wt.length; St += 1)
        wt[St] && wt[St].m(y, null);
      H(f, F), H(f, L), H(L, G), H(L, Z), H(L, z), H(L, X), H(L, rt), H(L, k), H(L, V);
      for (let St = 0; St < xt.length; St += 1)
        xt[St] && xt[St].m(V, null);
      qt(
        V,
        /*minecraftVersion*/
        E[0],
        !0
      ), H(f, i), H(f, U), H(f, it), H(f, x), H(f, O), H(f, R), H(f, W), H(f, S), H(S, B), H(B, q), q.checked = /*useKotlin*/
      E[5], H(B, j), H(B, J), H(S, ct), H(S, gt), H(f, ot), H(f, at), H(at, ft), H(ft, ut), ut.checked = /*mojmap*/
      E[6], H(ft, mt), H(ft, yt), H(at, t), H(at, M), H(f, N), Bt && Bt.m(f, null), H(f, v), bt && bt.m(f, null), H(f, A), H(f, I), H(f, Q), _t[D].m(f, null), Y = !0, $ || (P = [
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
          C,
          "keyup",
          /*doFormatPackageName*/
          E[18]
        ),
        Ft(
          C,
          "input",
          /*input1_input_handler*/
          E[23]
        ),
        Ft(
          V,
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
      et[3] != null ? Ct ? Ct.p(et, vt) : (Ct = se(et), Ct.c(), Ct.m(f, b)) : Ct && (Ct.d(1), Ct = null), vt[0] & /*packageName*/
      4 && C.value !== /*packageName*/
      et[2] && Ot(
        C,
        /*packageName*/
        et[2]
      ), vt[0] & /*packageNameErrors*/
      4096) {
        It = /*packageNameErrors*/
        et[12];
        let At;
        for (At = 0; At < It.length; At += 1) {
          const Dt = ee(et, It, At);
          wt[At] ? wt[At].p(Dt, vt) : (wt[At] = ce(Dt), wt[At].c(), wt[At].m(y, null));
        }
        for (; At < wt.length; At += 1)
          wt[At].d(1);
        wt.length = It.length;
      }
      if (vt[0] & /*versions*/
      32768) {
        dt = /*data*/
        et[30].game;
        let At;
        for (At = 0; At < dt.length; At += 1) {
          const Dt = te(et, dt, At);
          xt[At] ? xt[At].p(Dt, vt) : (xt[At] = ue(Dt), xt[At].c(), xt[At].m(V, null));
        }
        for (; At < xt.length; At += 1)
          xt[At].d(1);
        xt.length = dt.length;
      }
      vt[0] & /*minecraftVersion, versions*/
      32769 && qt(
        V,
        /*minecraftVersion*/
        et[0]
      ), vt[0] & /*useKotlin*/
      32 && (q.checked = /*useKotlin*/
      et[5]), vt[0] & /*mojmap*/
      64 && (ut.checked = /*mojmap*/
      et[6]), /*supportsDataGen*/
      et[11] ? Bt ? Bt.p(et, vt) : (Bt = he(et), Bt.c(), Bt.m(f, v)) : Bt && (Bt.d(1), Bt = null), /*supportsSplitSources*/
      et[10] ? bt ? bt.p(et, vt) : (bt = Ae(et), bt.c(), bt.m(f, A)) : bt && (bt.d(1), bt = null);
      let St = D;
      D = Qt(et), D === St ? _t[D].p(et, vt) : (Oe(), Ut(_t[St], 1, 1, () => {
        _t[St] = null;
      }), ze(), _ = _t[D], _ ? _.p(et, vt) : (_ = _t[D] = Gt[D](et), _.c()), Mt(_, 1), _.m(f, null));
    },
    i(et) {
      Y || (Mt(_), Y = !0);
    },
    o(et) {
      Ut(_), Y = !1;
    },
    d(et) {
      et && Et(f), st.d(), pt && pt.d(), Ct && Ct.d(), Zt(wt, et), Zt(xt, et), Bt && Bt.d(), bt && bt.d(), _t[D].d(), $ = !1, de(P);
    }
  };
}
function Qn(E) {
  let f, e, h, c, r, a, n, o;
  return {
    c() {
      f = nt("p"), e = Rt("Choose a name for your new mod. The mod ID will be "), h = nt("code"), c = Rt(
        /*modid*/
        E[4]
      ), r = Rt(". "), a = nt("a"), a.textContent = "Use custom id", K(h, "class", "svelte-c4460r"), K(a, "href", ""), K(a, "class", "svelte-c4460r"), K(f, "class", "svelte-c4460r");
    },
    m(p, m) {
      kt(p, f, m), H(f, e), H(f, h), H(h, c), H(f, r), H(f, a), n || (o = Ft(a, "click", Xt(
        /*useCustomModId*/
        E[19]
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
      p && Et(f), n = !1, o();
    }
  };
}
function Wn(E) {
  let f;
  return {
    c() {
      f = nt("p"), f.textContent = "Choose a name for your new mod.", K(f, "class", "svelte-c4460r");
    },
    m(e, h) {
      kt(e, f, h);
    },
    p: Nt,
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
      Zt(c, r), r && Et(f), r && Et(e);
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
      f = nt("li"), h = Rt(e), zt(f, "color", "red"), K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), H(f, h);
    },
    p(c, r) {
      r[0] & /*modIdErrors*/
      16384 && e !== (e = /*error*/
      c[34] + "") && jt(h, e);
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
      f = nt("div"), e = nt("h3"), e.textContent = "Mod ID:", h = lt(), c = nt("hr"), r = lt(), a = nt("p"), n = Rt("Enter the modid you wish to use for your mod. "), o = nt("a"), o.textContent = "Use default", p = lt(), g && g.c(), m = lt(), b = nt("input"), K(e, "class", "svelte-c4460r"), K(c, "class", "svelte-c4460r"), K(o, "href", ""), K(o, "class", "svelte-c4460r"), K(a, "class", "svelte-c4460r"), K(b, "id", "mod-id"), K(b, "class", "svelte-c4460r"), K(f, "class", "form-line svelte-c4460r");
    },
    m(s, d) {
      kt(s, f, d), H(f, e), H(f, h), H(f, c), H(f, r), H(f, a), H(a, n), H(a, o), H(f, p), g && g.m(f, null), H(f, m), H(f, b), Ot(
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
      Zt(c, r), r && Et(f), r && Et(e);
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
      f = nt("li"), h = Rt(e), zt(f, "color", "red"), K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), H(f, h);
    },
    p(c, r) {
      r[0] & /*customIdErrors*/
      8192 && e !== (e = /*error*/
      c[34] + "") && jt(h, e);
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
      f = nt("li"), h = Rt(e), zt(f, "color", "red"), K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), H(f, h);
    },
    p(c, r) {
      r[0] & /*packageNameErrors*/
      4096 && e !== (e = /*error*/
      c[34] + "") && jt(h, e);
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
      f = nt("option"), h = Rt(e), f.__value = /*version*/
      E[31].version, f.value = f.__value, K(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), H(f, h);
    },
    p: Nt,
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
      kt(m, f, b), H(f, e), H(e, h), h.checked = /*dataGeneration*/
      E[7], H(e, c), H(e, r), H(f, a), H(f, n), o || (p = Ft(
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
      kt(m, f, b), H(f, e), H(e, h), h.checked = /*splitSources*/
      E[8], H(e, c), H(e, r), H(f, a), H(f, n), o || (p = Ft(
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
function Zn(E) {
  let f, e, h, c, r, a;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Rt(" Download Template (.ZIP)"), K(f, "class", "button primary large download-button svelte-c4460r"), K(f, "href", "");
    },
    m(n, o) {
      kt(n, f, o), pe(e, f, null), H(f, h), c = !0, r || (a = Ft(f, "click", Xt(
        /*generate*/
        E[16]
      )), r = !0);
    },
    p: Nt,
    i(n) {
      c || (Mt(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && Et(f), me(e), r = !1, a();
    }
  };
}
function Pn(E) {
  let f, e, h, c;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Rt(" Generating..."), K(f, "class", "button primary download-button svelte-c4460r"), K(f, "href", "");
    },
    m(r, a) {
      kt(r, f, a), pe(e, f, null), H(f, h), c = !0;
    },
    p: Nt,
    i(r) {
      c || (Mt(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Ut(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && Et(f), me(e);
    }
  };
}
function jn(E) {
  let f, e, h, c;
  return {
    c() {
      f = nt("p"), e = Rt(`Loading data
    
        
        `), h = nt("span"), c = Rt("..."), zt(h, "font-family", Lt);
    },
    m(r, a) {
      kt(r, f, a), H(f, e), H(f, h), H(h, c);
    },
    p: Nt,
    i: Nt,
    o: Nt,
    d(r) {
      r && Et(f);
    }
  };
}
function Yn(E) {
  let f, e, h = {
    ctx: E,
    current: null,
    token: null,
    hasCatch: !0,
    pending: jn,
    then: Un,
    catch: Mn,
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
      f = _e(), h.block.c();
    },
    m(c, r) {
      kt(c, f, r), h.block.m(c, h.anchor = r), h.mount = () => f.parentNode, h.anchor = f, e = !0;
    },
    p(c, r) {
      E = c, Te(h, E, r);
    },
    i(c) {
      e || (Mt(h.block), e = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const a = h.blocks[r];
        Ut(a);
      }
      e = !1;
    },
    d(c) {
      c && Et(f), h.block.d(c), h.token = null, h = null;
    }
  };
}
function Hn(E, f, e) {
  let h, c, r, a, n, o, p, m = "Template Mod", b = "com.example", y = !1, l = !1, g = !1, s = !0, d, u = !1;
  const w = Promise.all([Se()]).then(([x]) => (e(0, p = x.find((O) => O.stable).version), { game: x }));
  function C(x) {
    if (x !== void 0)
      return Ce(x, d === void 0);
  }
  async function T() {
    if (a !== void 0 || d !== void 0 && n !== void 0 || o.length > 0)
      return;
    e(9, u = !0);
    const x = await Promise.resolve().then(() => Ln), O = {
      modid: d ?? h,
      minecraftVersion: p,
      projectName: m,
      packageName: b,
      useKotlin: y,
      mojmap: l,
      dataGeneration: g && c,
      splitSources: s && r,
      uniqueModIcon: !0
    }, R = new We();
    await x.generateTemplate({
      config: O,
      writer: {
        write: async (W, S, B) => {
          R.file(W, S, {
            unixPermissions: B != null && B.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(W, S) {
          const B = document.createElement("canvas");
          return B.width = W, B.height = S, {
            getContext: (q) => B.getContext(q),
            getPng: () => Pt(B.toDataURL().split(";base64,")[1]),
            measureText(q, j) {
              const J = q.measureText(j);
              return {
                width: J.width,
                ascent: J.actualBoundingBoxAscent,
                descent: J.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Pe.saveAs(await R.generateAsync({ type: "blob", platform: "UNIX" }), `${h}-template-${O.minecraftVersion}.zip`), e(9, u = !1);
  }
  function F() {
    e(1, m = m.trim());
  }
  function L() {
    e(2, b = on(b));
  }
  function G() {
    e(3, d = h);
  }
  function Z() {
    e(3, d = void 0);
  }
  function z() {
    m = this.value, e(1, m);
  }
  function X() {
    d = this.value, e(3, d);
  }
  function rt() {
    b = this.value, e(2, b);
  }
  function k() {
    p = Ne(this), e(0, p), e(15, w);
  }
  function V() {
    y = this.checked, e(5, y);
  }
  function i() {
    l = this.checked, e(6, l);
  }
  function U() {
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
    16 && e(14, a = C(h)), E.$$.dirty[0] & /*customModId*/
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
    T,
    F,
    L,
    G,
    Z,
    z,
    X,
    rt,
    k,
    V,
    i,
    U,
    it
  ];
}
class Kn extends Be {
  constructor(f) {
    super(), Ie(this, f, Hn, Yn, Re, {}, null, [-1, -1]);
  }
}
export {
  Kn as default
};

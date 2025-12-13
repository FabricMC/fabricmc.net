import { S as Be, i as Fe, s as _e, h as Re, b as Te, c as yt, u as Ue, o as zt, p as Dt, d as wt, q as Ve, e as nt, t as St, a as ut, f as Ut, g as Y, n as Ft, k as $, r as Ne, C as Tt, l as Xt, m as It, D as ze, E as De, j as Wt, B as de, A as Qt, y as Jt, v as Ae, w as fe, x as pe } from "./index.4deac2e0.js";
import me from "./DownloadIcon.39c279f6.js";
import { d as Ge, b as Oe, h as We, i as Le, j as Qe } from "./Api.9983e186.js";
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ge(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
function Ot(k) {
  throw new Error('Could not dynamically require "' + k + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
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
(function(k, d) {
  (function(e) {
    k.exports = e();
  })(function() {
    return function e(h, c, n) {
      function a(p, m) {
        if (!c[p]) {
          if (!h[p]) {
            var g = typeof Ot == "function" && Ot;
            if (!m && g)
              return g(p, !0);
            if (r)
              return r(p, !0);
            var v = new Error("Cannot find module '" + p + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var l = c[p] = { exports: {} };
          h[p][0].call(l.exports, function(b) {
            var s = h[p][1][b];
            return a(s || b);
          }, l, l.exports, e, h, c, n);
        }
        return c[p].exports;
      }
      for (var r = typeof Ot == "function" && Ot, o = 0; o < n.length; o++)
        a(n[o]);
      return a;
    }({ 1: [function(e, h, c) {
      var n = e("./utils"), a = e("./support"), r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var p, m, g, v, l, b, s, f = [], u = 0, w = o.length, C = w, T = n.getTypeOf(o) !== "string"; u < o.length; )
          C = w - u, g = T ? (p = o[u++], m = u < w ? o[u++] : 0, u < w ? o[u++] : 0) : (p = o.charCodeAt(u++), m = u < w ? o.charCodeAt(u++) : 0, u < w ? o.charCodeAt(u++) : 0), v = p >> 2, l = (3 & p) << 4 | m >> 4, b = 1 < C ? (15 & m) << 2 | g >> 6 : 64, s = 2 < C ? 63 & g : 64, f.push(r.charAt(v) + r.charAt(l) + r.charAt(b) + r.charAt(s));
        return f.join("");
      }, c.decode = function(o) {
        var p, m, g, v, l, b, s = 0, f = 0, u = "data:";
        if (o.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, C = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === r.charAt(64) && C--, o.charAt(o.length - 2) === r.charAt(64) && C--, C % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | C) : new Array(0 | C); s < o.length; )
          p = r.indexOf(o.charAt(s++)) << 2 | (v = r.indexOf(o.charAt(s++))) >> 4, m = (15 & v) << 4 | (l = r.indexOf(o.charAt(s++))) >> 2, g = (3 & l) << 6 | (b = r.indexOf(o.charAt(s++))), w[f++] = p, l !== 64 && (w[f++] = m), b !== 64 && (w[f++] = g);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, h, c) {
      var n = e("./external"), a = e("./stream/DataWorker"), r = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function p(m, g, v, l, b) {
        this.compressedSize = m, this.uncompressedSize = g, this.crc32 = v, this.compression = l, this.compressedContent = b;
      }
      p.prototype = { getContentWorker: function() {
        var m = new a(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), g = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== g.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, p.createWorkerFrom = function(m, g, v) {
        return m.pipe(new r()).pipe(new o("uncompressedSize")).pipe(g.compressWorker(v)).pipe(new o("compressedSize")).withStreamInfo("compression", g);
      }, h.exports = p;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, h, c) {
      var n = e("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new n("STORE compression");
      }, uncompressWorker: function() {
        return new n("STORE decompression");
      } }, c.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, h, c) {
      var n = e("./utils"), a = function() {
        for (var r, o = [], p = 0; p < 256; p++) {
          r = p;
          for (var m = 0; m < 8; m++)
            r = 1 & r ? 3988292384 ^ r >>> 1 : r >>> 1;
          o[p] = r;
        }
        return o;
      }();
      h.exports = function(r, o) {
        return r !== void 0 && r.length ? n.getTypeOf(r) !== "string" ? function(p, m, g, v) {
          var l = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ l[255 & (p ^ m[s])];
          return -1 ^ p;
        }(0 | o, r, r.length, 0) : function(p, m, g, v) {
          var l = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ l[255 & (p ^ m.charCodeAt(s))];
          return -1 ^ p;
        }(0 | o, r, r.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, h, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(e, h, c) {
      var n = null;
      n = typeof Promise < "u" ? Promise : e("lie"), h.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(e, h, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), r = e("./utils"), o = e("./stream/GenericWorker"), p = n ? "uint8array" : "array";
      function m(g, v) {
        o.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = v, this.meta = {};
      }
      c.magic = "\b\0", r.inherits(m, o), m.prototype.processChunk = function(g) {
        this.meta = g.meta, this._pako === null && this._createPako(), this._pako.push(r.transformTo(p, g.data), !1);
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
      function n(l, b) {
        var s, f = "";
        for (s = 0; s < b; s++)
          f += String.fromCharCode(255 & l), l >>>= 8;
        return f;
      }
      function a(l, b, s, f, u, w) {
        var C, T, R = l.file, O = l.compression, G = w !== p.utf8encode, Z = r.transformTo("string", w(R.name)), z = r.transformTo("string", p.utf8encode(R.name)), X = R.comment, rt = r.transformTo("string", w(X)), E = r.transformTo("string", p.utf8encode(X)), N = z.length !== R.name.length, i = E.length !== X.length, L = "", it = "", x = "", V = R.dir, F = R.date, P = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !s || (P.crc32 = l.crc32, P.compressedSize = l.compressedSize, P.uncompressedSize = l.uncompressedSize);
        var S = 0;
        b && (S |= 8), G || !N && !i || (S |= 2048);
        var B = 0, K = 0;
        V && (B |= 16), u === "UNIX" ? (K = 798, B |= function(H, ct) {
          var pt = H;
          return H || (pt = ct ? 16893 : 33204), (65535 & pt) << 16;
        }(R.unixPermissions, V)) : (K = 20, B |= function(H) {
          return 63 & (H || 0);
        }(R.dosPermissions)), C = F.getUTCHours(), C <<= 6, C |= F.getUTCMinutes(), C <<= 5, C |= F.getUTCSeconds() / 2, T = F.getUTCFullYear() - 1980, T <<= 4, T |= F.getUTCMonth() + 1, T <<= 5, T |= F.getUTCDate(), N && (it = n(1, 1) + n(m(Z), 4) + z, L += "up" + n(it.length, 2) + it), i && (x = n(1, 1) + n(m(rt), 4) + E, L += "uc" + n(x.length, 2) + x);
        var J = "";
        return J += `
\0`, J += n(S, 2), J += O.magic, J += n(C, 2), J += n(T, 2), J += n(P.crc32, 4), J += n(P.compressedSize, 4), J += n(P.uncompressedSize, 4), J += n(Z.length, 2), J += n(L.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + J + Z + L, dirRecord: g.CENTRAL_FILE_HEADER + n(K, 2) + J + n(rt.length, 2) + "\0\0\0\0" + n(B, 4) + n(f, 4) + Z + L + rt };
      }
      var r = e("../utils"), o = e("../stream/GenericWorker"), p = e("../utf8"), m = e("../crc32"), g = e("../signature");
      function v(l, b, s, f) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = s, this.encodeFileName = f, this.streamFiles = l, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      r.inherits(v, o), v.prototype.push = function(l) {
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
            return g.DATA_DESCRIPTOR + n(f.crc32, 4) + n(f.compressedSize, 4) + n(f.uncompressedSize, 4);
          }(l), meta: { percent: 100 } });
        else
          for (this.push({ data: s.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, v.prototype.flush = function() {
        for (var l = this.bytesWritten, b = 0; b < this.dirRecords.length; b++)
          this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
        var s = this.bytesWritten - l, f = function(u, w, C, T, R) {
          var O = r.transformTo("string", R(T));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(u, 2) + n(u, 2) + n(w, 4) + n(C, 4) + n(O.length, 2) + O;
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
      var n = e("../compressions"), a = e("./ZipFileWorker");
      c.generateWorker = function(r, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), g = 0;
        try {
          r.forEach(function(v, l) {
            g++;
            var b = function(w, C) {
              var T = w || C, R = n[T];
              if (!R)
                throw new Error(T + " is not a valid compression method !");
              return R;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, f = l.dir, u = l.date;
            l._compressWorker(b, s).withStreamInfo("file", { name: v, dir: f, date: u, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = g;
        } catch (v) {
          m.error(v);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, h, c) {
      function n() {
        if (!(this instanceof n))
          return new n();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new n();
          for (var r in this)
            typeof this[r] != "function" && (a[r] = this[r]);
          return a;
        };
      }
      (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(a, r) {
        return new n().loadAsync(a, r);
      }, n.external = e("./external"), h.exports = n;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, h, c) {
      var n = e("./utils"), a = e("./external"), r = e("./utf8"), o = e("./zipEntries"), p = e("./stream/Crc32Probe"), m = e("./nodejsUtils");
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
        return l = n.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: r.utf8decode }), m.isNode && m.isStream(v) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", v, !0, l.optimizedBinaryString, l.base64).then(function(s) {
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
            var C = u[w], T = C.fileNameStr, R = n.resolve(C.fileNameStr);
            b.file(R, C.decompressed, { binary: !0, optimizedBinaryString: !0, date: C.date, dir: C.dir, comment: C.fileCommentStr.length ? C.fileCommentStr : null, unixPermissions: C.unixPermissions, dosPermissions: C.dosPermissions, createFolders: l.createFolders }), C.dir || (b.file(R).unsafeOriginalName = T);
          }
          return f.zipComment.length && (b.comment = f.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, h, c) {
      var n = e("../utils"), a = e("../stream/GenericWorker");
      function r(o, p) {
        a.call(this, "Nodejs stream input adapter for " + o), this._upstreamEnded = !1, this._bindStream(p);
      }
      n.inherits(r, a), r.prototype._bindStream = function(o) {
        var p = this;
        (this._stream = o).pause(), o.on("data", function(m) {
          p.push({ data: m, meta: { percent: 0 } });
        }).on("error", function(m) {
          p.isPaused ? this.generatedError = m : p.error(m);
        }).on("end", function() {
          p.isPaused ? p._upstreamEnded = !0 : p.end();
        });
      }, r.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, r.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, h.exports = r;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, h, c) {
      var n = e("readable-stream").Readable;
      function a(r, o, p) {
        n.call(this, o), this._helper = r;
        var m = this;
        r.on("data", function(g, v) {
          m.push(g) || m._helper.pause(), p && p(v);
        }).on("error", function(g) {
          m.emit("error", g);
        }).on("end", function() {
          m.push(null);
        });
      }
      e("../utils").inherits(a, n), a.prototype._read = function() {
        this._helper.resume();
      }, h.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, h, c) {
      h.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(n, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(n, a);
        if (typeof n == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(n, a);
      }, allocBuffer: function(n) {
        if (Buffer.alloc)
          return Buffer.alloc(n);
        var a = new Buffer(n);
        return a.fill(0), a;
      }, isBuffer: function(n) {
        return Buffer.isBuffer(n);
      }, isStream: function(n) {
        return n && typeof n.on == "function" && typeof n.pause == "function" && typeof n.resume == "function";
      } };
    }, {}], 15: [function(e, h, c) {
      function n(R, O, G) {
        var Z, z = r.getTypeOf(O), X = r.extend(G || {}, m);
        X.date = X.date || /* @__PURE__ */ new Date(), X.compression !== null && (X.compression = X.compression.toUpperCase()), typeof X.unixPermissions == "string" && (X.unixPermissions = parseInt(X.unixPermissions, 8)), X.unixPermissions && 16384 & X.unixPermissions && (X.dir = !0), X.dosPermissions && 16 & X.dosPermissions && (X.dir = !0), X.dir && (R = u(R)), X.createFolders && (Z = f(R)) && w.call(this, Z, !0);
        var rt = z === "string" && X.binary === !1 && X.base64 === !1;
        G && G.binary !== void 0 || (X.binary = !rt), (O instanceof g && O.uncompressedSize === 0 || X.dir || !O || O.length === 0) && (X.base64 = !1, X.binary = !0, O = "", X.compression = "STORE", z = "string");
        var E = null;
        E = O instanceof g || O instanceof o ? O : b.isNode && b.isStream(O) ? new s(R, O) : r.prepareContent(R, O, X.binary, X.optimizedBinaryString, X.base64);
        var N = new v(R, E, X);
        this.files[R] = N;
      }
      var a = e("./utf8"), r = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), g = e("./compressedObject"), v = e("./zipObject"), l = e("./generate"), b = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), f = function(R) {
        R.slice(-1) === "/" && (R = R.substring(0, R.length - 1));
        var O = R.lastIndexOf("/");
        return 0 < O ? R.substring(0, O) : "";
      }, u = function(R) {
        return R.slice(-1) !== "/" && (R += "/"), R;
      }, w = function(R, O) {
        return O = O !== void 0 ? O : m.createFolders, R = u(R), this.files[R] || n.call(this, R, null, { dir: !0, createFolders: O }), this.files[R];
      };
      function C(R) {
        return Object.prototype.toString.call(R) === "[object RegExp]";
      }
      var T = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(R) {
        var O, G, Z;
        for (O in this.files)
          Z = this.files[O], (G = O.slice(this.root.length, O.length)) && O.slice(0, this.root.length) === this.root && R(G, Z);
      }, filter: function(R) {
        var O = [];
        return this.forEach(function(G, Z) {
          R(G, Z) && O.push(Z);
        }), O;
      }, file: function(R, O, G) {
        if (arguments.length !== 1)
          return R = this.root + R, n.call(this, R, O, G), this;
        if (C(R)) {
          var Z = R;
          return this.filter(function(X, rt) {
            return !rt.dir && Z.test(X);
          });
        }
        var z = this.files[this.root + R];
        return z && !z.dir ? z : null;
      }, folder: function(R) {
        if (!R)
          return this;
        if (C(R))
          return this.filter(function(z, X) {
            return X.dir && R.test(z);
          });
        var O = this.root + R, G = w.call(this, O), Z = this.clone();
        return Z.root = G.name, Z;
      }, remove: function(R) {
        R = this.root + R;
        var O = this.files[R];
        if (O || (R.slice(-1) !== "/" && (R += "/"), O = this.files[R]), O && !O.dir)
          delete this.files[R];
        else
          for (var G = this.filter(function(z, X) {
            return X.name.slice(0, R.length) === R;
          }), Z = 0; Z < G.length; Z++)
            delete this.files[G[Z].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(R) {
        var O, G = {};
        try {
          if ((G = r.extend(R || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = G.type.toLowerCase(), G.compression = G.compression.toUpperCase(), G.type === "binarystring" && (G.type = "string"), !G.type)
            throw new Error("No output type specified.");
          r.checkSupport(G.type), G.platform !== "darwin" && G.platform !== "freebsd" && G.platform !== "linux" && G.platform !== "sunos" || (G.platform = "UNIX"), G.platform === "win32" && (G.platform = "DOS");
          var Z = G.comment || this.comment || "";
          O = l.generateWorker(this, G, Z);
        } catch (z) {
          (O = new o("error")).error(z);
        }
        return new p(O, G.type || "string", G.mimeType);
      }, generateAsync: function(R, O) {
        return this.generateInternalStream(R).accumulate(O);
      }, generateNodeStream: function(R, O) {
        return (R = R || {}).type || (R.type = "nodebuffer"), this.generateInternalStream(R).toNodejsStream(O);
      } };
      h.exports = T;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, h, c) {
      h.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, h, c) {
      var n = e("./DataReader");
      function a(r) {
        n.call(this, r);
        for (var o = 0; o < this.data.length; o++)
          r[o] = 255 & r[o];
      }
      e("../utils").inherits(a, n), a.prototype.byteAt = function(r) {
        return this.data[this.zero + r];
      }, a.prototype.lastIndexOfSignature = function(r) {
        for (var o = r.charCodeAt(0), p = r.charCodeAt(1), m = r.charCodeAt(2), g = r.charCodeAt(3), v = this.length - 4; 0 <= v; --v)
          if (this.data[v] === o && this.data[v + 1] === p && this.data[v + 2] === m && this.data[v + 3] === g)
            return v - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(r) {
        var o = r.charCodeAt(0), p = r.charCodeAt(1), m = r.charCodeAt(2), g = r.charCodeAt(3), v = this.readData(4);
        return o === v[0] && p === v[1] && m === v[2] && g === v[3];
      }, a.prototype.readData = function(r) {
        if (this.checkOffset(r), r === 0)
          return [];
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, o;
      }, h.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, h, c) {
      var n = e("../utils");
      function a(r) {
        this.data = r, this.length = r.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(r) {
        this.checkIndex(this.index + r);
      }, checkIndex: function(r) {
        if (this.length < this.zero + r || r < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + r + "). Corrupted zip ?");
      }, setIndex: function(r) {
        this.checkIndex(r), this.index = r;
      }, skip: function(r) {
        this.setIndex(this.index + r);
      }, byteAt: function() {
      }, readInt: function(r) {
        var o, p = 0;
        for (this.checkOffset(r), o = this.index + r - 1; o >= this.index; o--)
          p = (p << 8) + this.byteAt(o);
        return this.index += r, p;
      }, readString: function(r) {
        return n.transformTo("string", this.readData(r));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var r = this.readInt(4);
        return new Date(Date.UTC(1980 + (r >> 25 & 127), (r >> 21 & 15) - 1, r >> 16 & 31, r >> 11 & 31, r >> 5 & 63, (31 & r) << 1));
      } }, h.exports = a;
    }, { "../utils": 32 }], 19: [function(e, h, c) {
      var n = e("./Uint8ArrayReader");
      function a(r) {
        n.call(this, r);
      }
      e("../utils").inherits(a, n), a.prototype.readData = function(r) {
        this.checkOffset(r);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, o;
      }, h.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, h, c) {
      var n = e("./DataReader");
      function a(r) {
        n.call(this, r);
      }
      e("../utils").inherits(a, n), a.prototype.byteAt = function(r) {
        return this.data.charCodeAt(this.zero + r);
      }, a.prototype.lastIndexOfSignature = function(r) {
        return this.data.lastIndexOf(r) - this.zero;
      }, a.prototype.readAndCheckSignature = function(r) {
        return r === this.readData(4);
      }, a.prototype.readData = function(r) {
        this.checkOffset(r);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, o;
      }, h.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, h, c) {
      var n = e("./ArrayReader");
      function a(r) {
        n.call(this, r);
      }
      e("../utils").inherits(a, n), a.prototype.readData = function(r) {
        if (this.checkOffset(r), r === 0)
          return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, o;
      }, h.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, h, c) {
      var n = e("../utils"), a = e("../support"), r = e("./ArrayReader"), o = e("./StringReader"), p = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      h.exports = function(g) {
        var v = n.getTypeOf(g);
        return n.checkSupport(v), v !== "string" || a.uint8array ? v === "nodebuffer" ? new p(g) : a.uint8array ? new m(n.transformTo("uint8array", g)) : new r(n.transformTo("array", g)) : new o(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, h, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, h, c) {
      var n = e("./GenericWorker"), a = e("../utils");
      function r(o) {
        n.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      a.inherits(r, n), r.prototype.processChunk = function(o) {
        this.push({ data: a.transformTo(this.destType, o.data), meta: o.meta });
      }, h.exports = r;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, h, c) {
      var n = e("./GenericWorker"), a = e("../crc32");
      function r() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(r, n), r.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = a(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, h.exports = r;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, h, c) {
      var n = e("../utils"), a = e("./GenericWorker");
      function r(o) {
        a.call(this, "DataLengthProbe for " + o), this.propName = o, this.withStreamInfo(o, 0);
      }
      n.inherits(r, a), r.prototype.processChunk = function(o) {
        if (o) {
          var p = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = p + o.data.length;
        }
        a.prototype.processChunk.call(this, o);
      }, h.exports = r;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, h, c) {
      var n = e("../utils"), a = e("./GenericWorker");
      function r(o) {
        a.call(this, "DataWorker");
        var p = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, o.then(function(m) {
          p.dataIsReady = !0, p.data = m, p.max = m && m.length || 0, p.type = n.getTypeOf(m), p.isPaused || p._tickAndRepeat();
        }, function(m) {
          p.error(m);
        });
      }
      n.inherits(r, a), r.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, r.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
      }, r.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, r.prototype._tick = function() {
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
      }, h.exports = r;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, h, c) {
      function n(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      n.prototype = { push: function(a) {
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
      }, on: function(a, r) {
        return this._listeners[a].push(r), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, r) {
        if (this._listeners[a])
          for (var o = 0; o < this._listeners[a].length; o++)
            this._listeners[a][o].call(this, r);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var r = this;
        return a.on("data", function(o) {
          r.processChunk(o);
        }), a.on("end", function() {
          r.end();
        }), a.on("error", function(o) {
          r.error(o);
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
      }, withStreamInfo: function(a, r) {
        return this.extraStreamInfo[a] = r, this.mergeStreamInfo(), this;
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
      } }, h.exports = n;
    }, {}], 29: [function(e, h, c) {
      var n = e("../utils"), a = e("./ConvertWorker"), r = e("./GenericWorker"), o = e("../base64"), p = e("../support"), m = e("../external"), g = null;
      if (p.nodestream)
        try {
          g = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function v(b, s) {
        return new m.Promise(function(f, u) {
          var w = [], C = b._internalType, T = b._outputType, R = b._mimeType;
          b.on("data", function(O, G) {
            w.push(O), s && s(G);
          }).on("error", function(O) {
            w = [], u(O);
          }).on("end", function() {
            try {
              var O = function(G, Z, z) {
                switch (G) {
                  case "blob":
                    return n.newBlob(n.transformTo("arraybuffer", Z), z);
                  case "base64":
                    return o.encode(Z);
                  default:
                    return n.transformTo(G, Z);
                }
              }(T, function(G, Z) {
                var z, X = 0, rt = null, E = 0;
                for (z = 0; z < Z.length; z++)
                  E += Z[z].length;
                switch (G) {
                  case "string":
                    return Z.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Z);
                  case "uint8array":
                    for (rt = new Uint8Array(E), z = 0; z < Z.length; z++)
                      rt.set(Z[z], X), X += Z[z].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(Z);
                  default:
                    throw new Error("concat : unsupported type '" + G + "'");
                }
              }(C, w), R);
              f(O);
            } catch (G) {
              u(G);
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
          this._internalType = u, this._outputType = s, this._mimeType = f, n.checkSupport(u), this._worker = b.pipe(new a(u)), b.lock();
        } catch (w) {
          this._worker = new r("error"), this._worker.error(w);
        }
      }
      l.prototype = { accumulate: function(b) {
        return v(this, b);
      }, on: function(b, s) {
        var f = this;
        return b === "data" ? this._worker.on(b, function(u) {
          s.call(f, u.data, u.meta);
        }) : this._worker.on(b, function() {
          n.delay(s, arguments, f);
        }), this;
      }, resume: function() {
        return n.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(b) {
        if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new g(this, { objectMode: this._outputType !== "nodebuffer" }, b);
      } }, h.exports = l;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, h, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        c.blob = !1;
      else {
        var n = new ArrayBuffer(0);
        try {
          c.blob = new Blob([n], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(n), c.blob = a.getBlob("application/zip").size === 0;
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
      for (var n = e("./utils"), a = e("./support"), r = e("./nodejsUtils"), o = e("./stream/GenericWorker"), p = new Array(256), m = 0; m < 256; m++)
        p[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      p[254] = p[254] = 1;
      function g() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(l) {
        return a.nodebuffer ? r.newBufferFrom(l, "utf-8") : function(b) {
          var s, f, u, w, C, T = b.length, R = 0;
          for (w = 0; w < T; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (u - 56320), w++), R += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(R) : new Array(R), w = C = 0; C < R; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (u - 56320), w++), f < 128 ? s[C++] = f : (f < 2048 ? s[C++] = 192 | f >>> 6 : (f < 65536 ? s[C++] = 224 | f >>> 12 : (s[C++] = 240 | f >>> 18, s[C++] = 128 | f >>> 12 & 63), s[C++] = 128 | f >>> 6 & 63), s[C++] = 128 | 63 & f);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? n.transformTo("nodebuffer", l).toString("utf-8") : function(b) {
          var s, f, u, w, C = b.length, T = new Array(2 * C);
          for (s = f = 0; s < C; )
            if ((u = b[s++]) < 128)
              T[f++] = u;
            else if (4 < (w = p[u]))
              T[f++] = 65533, s += w - 1;
            else {
              for (u &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < C; )
                u = u << 6 | 63 & b[s++], w--;
              1 < w ? T[f++] = 65533 : u < 65536 ? T[f++] = u : (u -= 65536, T[f++] = 55296 | u >> 10 & 1023, T[f++] = 56320 | 1023 & u);
            }
          return T.length !== f && (T.subarray ? T = T.subarray(0, f) : T.length = f), n.applyFromCharCode(T);
        }(l = n.transformTo(a.uint8array ? "uint8array" : "array", l));
      }, n.inherits(g, o), g.prototype.processChunk = function(l) {
        var b = n.transformTo(a.uint8array ? "uint8array" : "array", l.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var s = b;
            (b = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), b.set(s, this.leftOver.length);
          } else
            b = this.leftOver.concat(b);
          this.leftOver = null;
        }
        var f = function(w, C) {
          var T;
          for ((C = C || w.length) > w.length && (C = w.length), T = C - 1; 0 <= T && (192 & w[T]) == 128; )
            T--;
          return T < 0 || T === 0 ? C : T + p[w[T]] > C ? T : C;
        }(b), u = b;
        f !== b.length && (a.uint8array ? (u = b.subarray(0, f), this.leftOver = b.subarray(f, b.length)) : (u = b.slice(0, f), this.leftOver = b.slice(f, b.length))), this.push({ data: c.utf8decode(u), meta: l.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = g, n.inherits(v, o), v.prototype.processChunk = function(l) {
        this.push({ data: c.utf8encode(l.data), meta: l.meta });
      }, c.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, h, c) {
      var n = e("./support"), a = e("./base64"), r = e("./nodejsUtils"), o = e("./external");
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
        var w = [], C = 0, T = s.length;
        if (T <= u)
          return String.fromCharCode.apply(null, s);
        for (; C < T; )
          f === "array" || f === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(C, Math.min(C + u, T)))) : w.push(String.fromCharCode.apply(null, s.subarray(C, Math.min(C + u, T)))), C += u;
        return w.join("");
      }, stringifyByChar: function(s) {
        for (var f = "", u = 0; u < s.length; u++)
          f += String.fromCharCode(s[u]);
        return f;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return n.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return n.nodebuffer && String.fromCharCode.apply(null, r.allocBuffer(1)).length === 1;
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
        return m(s, r.allocBuffer(s.length));
      } }, b.array = { string: v, array: p, arraybuffer: function(s) {
        return new Uint8Array(s).buffer;
      }, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return r.newBufferFrom(s);
      } }, b.arraybuffer = { string: function(s) {
        return v(new Uint8Array(s));
      }, array: function(s) {
        return l(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: p, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return r.newBufferFrom(new Uint8Array(s));
      } }, b.uint8array = { string: v, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: p, nodebuffer: function(s) {
        return r.newBufferFrom(s);
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
          var C = f[w];
          C === "." || C === "" && w !== 0 && w !== f.length - 1 || (C === ".." ? u.pop() : u.push(C));
        }
        return u.join("/");
      }, c.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : n.nodebuffer && r.isBuffer(s) ? "nodebuffer" : n.uint8array && s instanceof Uint8Array ? "uint8array" : n.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(s) {
        if (!n[s.toLowerCase()])
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
      }, c.prepareContent = function(s, f, u, w, C) {
        return o.Promise.resolve(f).then(function(T) {
          return n.blob && (T instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(R, O) {
            var G = new FileReader();
            G.onload = function(Z) {
              R(Z.target.result);
            }, G.onerror = function(Z) {
              O(Z.target.error);
            }, G.readAsArrayBuffer(T);
          }) : T;
        }).then(function(T) {
          var R = c.getTypeOf(T);
          return R ? (R === "arraybuffer" ? T = c.transformTo("uint8array", T) : R === "string" && (C ? T = a.decode(T) : u && w !== !0 && (T = function(O) {
            return m(O, n.uint8array ? new Uint8Array(O.length) : new Array(O.length));
          }(T))), T) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, h, c) {
      var n = e("./reader/readerFor"), a = e("./utils"), r = e("./signature"), o = e("./zipEntry"), p = e("./support");
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
          v = this.files[g], this.reader.setIndex(v.localHeaderOffset), this.checkSignature(r.LOCAL_FILE_HEADER), v.readLocalPart(this.reader), v.handleUTF8(), v.processAttributes();
      }, readCentralDir: function() {
        var g;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER); )
          (g = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(g);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var g = this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);
        if (g < 0)
          throw this.isSignature(0, r.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(g);
        var v = g;
        if (this.checkSignature(r.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (g = this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(g), this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, r.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var l = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (l += 20, l += 12 + this.zip64EndOfCentralSize);
        var b = v - l;
        if (0 < b)
          this.isSignature(v, r.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
        else if (b < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = n(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, h, c) {
      var n = e("./reader/readerFor"), a = e("./utils"), r = e("./compressedObject"), o = e("./crc32"), p = e("./utf8"), m = e("./compressions"), g = e("./support");
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
        this.decompressed = new r(this.compressedSize, this.uncompressedSize, this.crc32, b, l.readData(this.compressedSize));
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
          var l = n(this.extraFields[1].value);
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
          var b = n(l.value);
          return b.readInt(1) !== 1 || o(this.fileName) !== b.readInt(4) ? null : p.utf8decode(b.readData(l.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var l = this.extraFields[25461];
        if (l) {
          var b = n(l.value);
          return b.readInt(1) !== 1 || o(this.fileComment) !== b.readInt(4) ? null : p.utf8decode(b.readData(l.length - 5));
        }
        return null;
      } }, h.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, h, c) {
      function n(b, s, f) {
        this.name = b, this.dir = f.dir, this.date = f.date, this.comment = f.comment, this.unixPermissions = f.unixPermissions, this.dosPermissions = f.dosPermissions, this._data = s, this._dataBinary = f.binary, this.options = { compression: f.compression, compressionOptions: f.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), r = e("./stream/DataWorker"), o = e("./utf8"), p = e("./compressedObject"), m = e("./stream/GenericWorker");
      n.prototype = { internalStream: function(b) {
        var s = null, f = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var u = (f = b.toLowerCase()) === "string" || f === "text";
          f !== "binarystring" && f !== "text" || (f = "string"), s = this._decompressWorker();
          var w = !this._dataBinary;
          w && !u && (s = s.pipe(new o.Utf8EncodeWorker())), !w && u && (s = s.pipe(new o.Utf8DecodeWorker()));
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
        return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof m ? this._data : new r(this._data);
      } };
      for (var g = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], v = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, l = 0; l < g.length; l++)
        n.prototype[g[l]] = v;
      h.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, h, c) {
      (function(n) {
        var a, r, o = n.MutationObserver || n.WebKitMutationObserver;
        if (o) {
          var p = 0, m = new o(b), g = n.document.createTextNode("");
          m.observe(g, { characterData: !0 }), a = function() {
            g.data = p = ++p % 2;
          };
        } else if (n.setImmediate || n.MessageChannel === void 0)
          a = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
            var s = n.document.createElement("script");
            s.onreadystatechange = function() {
              b(), s.onreadystatechange = null, s.parentNode.removeChild(s), s = null;
            }, n.document.documentElement.appendChild(s);
          } : function() {
            setTimeout(b, 0);
          };
        else {
          var v = new n.MessageChannel();
          v.port1.onmessage = b, a = function() {
            v.port2.postMessage(0);
          };
        }
        var l = [];
        function b() {
          var s, f;
          r = !0;
          for (var u = l.length; u; ) {
            for (f = l, l = [], s = -1; ++s < u; )
              f[s]();
            u = l.length;
          }
          r = !1;
        }
        h.exports = function(s) {
          l.push(s) !== 1 || r || a();
        };
      }).call(this, typeof Bt < "u" ? Bt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, h, c) {
      var n = e("immediate");
      function a() {
      }
      var r = {}, o = ["REJECTED"], p = ["FULFILLED"], m = ["PENDING"];
      function g(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, u !== a && s(this, u);
      }
      function v(u, w, C) {
        this.promise = u, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      function l(u, w, C) {
        n(function() {
          var T;
          try {
            T = w(C);
          } catch (R) {
            return r.reject(u, R);
          }
          T === u ? r.reject(u, new TypeError("Cannot resolve promise with itself")) : r.resolve(u, T);
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
        var C = !1;
        function T(G) {
          C || (C = !0, r.reject(u, G));
        }
        function R(G) {
          C || (C = !0, r.resolve(u, G));
        }
        var O = f(function() {
          w(R, T);
        });
        O.status === "error" && T(O.value);
      }
      function f(u, w) {
        var C = {};
        try {
          C.value = u(w), C.status = "success";
        } catch (T) {
          C.status = "error", C.value = T;
        }
        return C;
      }
      (h.exports = g).prototype.finally = function(u) {
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
      }, g.prototype.catch = function(u) {
        return this.then(null, u);
      }, g.prototype.then = function(u, w) {
        if (typeof u != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var C = new this.constructor(a);
        return this.state !== m ? l(C, this.state === p ? u : w, this.outcome) : this.queue.push(new v(C, u, w)), C;
      }, v.prototype.callFulfilled = function(u) {
        r.resolve(this.promise, u);
      }, v.prototype.otherCallFulfilled = function(u) {
        l(this.promise, this.onFulfilled, u);
      }, v.prototype.callRejected = function(u) {
        r.reject(this.promise, u);
      }, v.prototype.otherCallRejected = function(u) {
        l(this.promise, this.onRejected, u);
      }, r.resolve = function(u, w) {
        var C = f(b, w);
        if (C.status === "error")
          return r.reject(u, C.value);
        var T = C.value;
        if (T)
          s(u, T);
        else {
          u.state = p, u.outcome = w;
          for (var R = -1, O = u.queue.length; ++R < O; )
            u.queue[R].callFulfilled(w);
        }
        return u;
      }, r.reject = function(u, w) {
        u.state = o, u.outcome = w;
        for (var C = -1, T = u.queue.length; ++C < T; )
          u.queue[C].callRejected(w);
        return u;
      }, g.resolve = function(u) {
        return u instanceof this ? u : r.resolve(new this(a), u);
      }, g.reject = function(u) {
        var w = new this(a);
        return r.reject(w, u);
      }, g.all = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = u.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var R = new Array(C), O = 0, G = -1, Z = new this(a); ++G < C; )
          z(u[G], G);
        return Z;
        function z(X, rt) {
          w.resolve(X).then(function(E) {
            R[rt] = E, ++O !== C || T || (T = !0, r.resolve(Z, R));
          }, function(E) {
            T || (T = !0, r.reject(Z, E));
          });
        }
      }, g.race = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = u.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var R = -1, O = new this(a); ++R < C; )
          G = u[R], w.resolve(G).then(function(Z) {
            T || (T = !0, r.resolve(O, Z));
          }, function(Z) {
            T || (T = !0, r.reject(O, Z));
          });
        var G;
        return O;
      };
    }, { immediate: 36 }], 38: [function(e, h, c) {
      var n = {};
      (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), h.exports = n;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, h, c) {
      var n = e("./zlib/deflate"), a = e("./utils/common"), r = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, g = 0, v = -1, l = 0, b = 8;
      function s(u) {
        if (!(this instanceof s))
          return new s(u);
        this.options = a.assign({ level: v, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, u || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var C = n.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (C !== g)
          throw new Error(o[C]);
        if (w.header && n.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var T;
          if (T = typeof w.dictionary == "string" ? r.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (C = n.deflateSetDictionary(this.strm, T)) !== g)
            throw new Error(o[C]);
          this._dict_set = !0;
        }
      }
      function f(u, w) {
        var C = new s(w);
        if (C.push(u, !0), C.err)
          throw C.msg || o[C.err];
        return C.result;
      }
      s.prototype.push = function(u, w) {
        var C, T, R = this.strm, O = this.options.chunkSize;
        if (this.ended)
          return !1;
        T = w === ~~w ? w : w === !0 ? 4 : 0, typeof u == "string" ? R.input = r.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? R.input = new Uint8Array(u) : R.input = u, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new a.Buf8(O), R.next_out = 0, R.avail_out = O), (C = n.deflate(R, T)) !== 1 && C !== g)
            return this.onEnd(C), !(this.ended = !0);
          R.avail_out !== 0 && (R.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(r.buf2binstring(a.shrinkBuf(R.output, R.next_out))) : this.onData(a.shrinkBuf(R.output, R.next_out)));
        } while ((0 < R.avail_in || R.avail_out === 0) && C !== 1);
        return T === 4 ? (C = n.deflateEnd(this.strm), this.onEnd(C), this.ended = !0, C === g) : T !== 2 || (this.onEnd(g), !(R.avail_out = 0));
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
      var n = e("./zlib/inflate"), a = e("./utils/common"), r = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), g = e("./zlib/gzheader"), v = Object.prototype.toString;
      function l(s) {
        if (!(this instanceof l))
          return new l(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var f = this.options;
        f.raw && 0 <= f.windowBits && f.windowBits < 16 && (f.windowBits = -f.windowBits, f.windowBits === 0 && (f.windowBits = -15)), !(0 <= f.windowBits && f.windowBits < 16) || s && s.windowBits || (f.windowBits += 32), 15 < f.windowBits && f.windowBits < 48 && !(15 & f.windowBits) && (f.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var u = n.inflateInit2(this.strm, f.windowBits);
        if (u !== o.Z_OK)
          throw new Error(p[u]);
        this.header = new g(), n.inflateGetHeader(this.strm, this.header);
      }
      function b(s, f) {
        var u = new l(f);
        if (u.push(s, !0), u.err)
          throw u.msg || p[u.err];
        return u.result;
      }
      l.prototype.push = function(s, f) {
        var u, w, C, T, R, O, G = this.strm, Z = this.options.chunkSize, z = this.options.dictionary, X = !1;
        if (this.ended)
          return !1;
        w = f === ~~f ? f : f === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? G.input = r.binstring2buf(s) : v.call(s) === "[object ArrayBuffer]" ? G.input = new Uint8Array(s) : G.input = s, G.next_in = 0, G.avail_in = G.input.length;
        do {
          if (G.avail_out === 0 && (G.output = new a.Buf8(Z), G.next_out = 0, G.avail_out = Z), (u = n.inflate(G, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && z && (O = typeof z == "string" ? r.string2buf(z) : v.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, u = n.inflateSetDictionary(this.strm, O)), u === o.Z_BUF_ERROR && X === !0 && (u = o.Z_OK, X = !1), u !== o.Z_STREAM_END && u !== o.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          G.next_out && (G.avail_out !== 0 && u !== o.Z_STREAM_END && (G.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (C = r.utf8border(G.output, G.next_out), T = G.next_out - C, R = r.buf2string(G.output, C), G.next_out = T, G.avail_out = Z - T, T && a.arraySet(G.output, G.output, C, T, 0), this.onData(R)) : this.onData(a.shrinkBuf(G.output, G.next_out)))), G.avail_in === 0 && G.avail_out === 0 && (X = !0);
        } while ((0 < G.avail_in || G.avail_out === 0) && u !== o.Z_STREAM_END);
        return u === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (u = n.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(G.avail_out = 0));
      }, l.prototype.onData = function(s) {
        this.chunks.push(s);
      }, l.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, c.Inflate = l, c.inflate = b, c.inflateRaw = function(s, f) {
        return (f = f || {}).raw = !0, b(s, f);
      }, c.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, h, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
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
      } }, r = { arraySet: function(o, p, m, g, v) {
        for (var l = 0; l < g; l++)
          o[v + l] = p[m + l];
      }, flattenChunks: function(o) {
        return [].concat.apply([], o);
      } };
      c.setTyped = function(o) {
        o ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, r));
      }, c.setTyped(n);
    }, {}], 42: [function(e, h, c) {
      var n = e("./common"), a = !0, r = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        r = !1;
      }
      for (var o = new n.Buf8(256), p = 0; p < 256; p++)
        o[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
      function m(g, v) {
        if (v < 65537 && (g.subarray && r || !g.subarray && a))
          return String.fromCharCode.apply(null, n.shrinkBuf(g, v));
        for (var l = "", b = 0; b < v; b++)
          l += String.fromCharCode(g[b]);
        return l;
      }
      o[254] = o[254] = 1, c.string2buf = function(g) {
        var v, l, b, s, f, u = g.length, w = 0;
        for (s = 0; s < u; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), w += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (v = new n.Buf8(w), s = f = 0; f < w; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), l < 128 ? v[f++] = l : (l < 2048 ? v[f++] = 192 | l >>> 6 : (l < 65536 ? v[f++] = 224 | l >>> 12 : (v[f++] = 240 | l >>> 18, v[f++] = 128 | l >>> 12 & 63), v[f++] = 128 | l >>> 6 & 63), v[f++] = 128 | 63 & l);
        return v;
      }, c.buf2binstring = function(g) {
        return m(g, g.length);
      }, c.binstring2buf = function(g) {
        for (var v = new n.Buf8(g.length), l = 0, b = v.length; l < b; l++)
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
      h.exports = function(n, a, r, o) {
        for (var p = 65535 & n | 0, m = n >>> 16 & 65535 | 0, g = 0; r !== 0; ) {
          for (r -= g = 2e3 < r ? 2e3 : r; m = m + (p = p + a[o++] | 0) | 0, --g; )
            ;
          p %= 65521, m %= 65521;
        }
        return p | m << 16 | 0;
      };
    }, {}], 44: [function(e, h, c) {
      h.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, h, c) {
      var n = function() {
        for (var a, r = [], o = 0; o < 256; o++) {
          a = o;
          for (var p = 0; p < 8; p++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          r[o] = a;
        }
        return r;
      }();
      h.exports = function(a, r, o, p) {
        var m = n, g = p + o;
        a ^= -1;
        for (var v = p; v < g; v++)
          a = a >>> 8 ^ m[255 & (a ^ r[v])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, h, c) {
      var n, a = e("../utils/common"), r = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), g = 0, v = 4, l = 0, b = -2, s = -1, f = 4, u = 2, w = 8, C = 9, T = 286, R = 30, O = 19, G = 2 * T + 1, Z = 15, z = 3, X = 258, rt = X + z + 1, E = 42, N = 113, i = 1, L = 2, it = 3, x = 4;
      function V(t, D) {
        return t.msg = m[D], D;
      }
      function F(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function P(t) {
        for (var D = t.length; 0 <= --D; )
          t[D] = 0;
      }
      function S(t) {
        var D = t.state, U = D.pending;
        U > t.avail_out && (U = t.avail_out), U !== 0 && (a.arraySet(t.output, D.pending_buf, D.pending_out, U, t.next_out), t.next_out += U, D.pending_out += U, t.total_out += U, t.avail_out -= U, D.pending -= U, D.pending === 0 && (D.pending_out = 0));
      }
      function B(t, D) {
        r._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, D), t.block_start = t.strstart, S(t.strm);
      }
      function K(t, D) {
        t.pending_buf[t.pending++] = D;
      }
      function J(t, D) {
        t.pending_buf[t.pending++] = D >>> 8 & 255, t.pending_buf[t.pending++] = 255 & D;
      }
      function H(t, D) {
        var U, y, A = t.max_chain_length, I = t.strstart, Q = t.prev_length, W = t.nice_match, _ = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, j = t.window, q = t.w_mask, M = t.prev, tt = t.strstart + X, lt = j[I + Q - 1], at = j[I + Q];
        t.prev_length >= t.good_match && (A >>= 2), W > t.lookahead && (W = t.lookahead);
        do
          if (j[(U = D) + Q] === at && j[U + Q - 1] === lt && j[U] === j[I] && j[++U] === j[I + 1]) {
            I += 2, U++;
            do
              ;
            while (j[++I] === j[++U] && j[++I] === j[++U] && j[++I] === j[++U] && j[++I] === j[++U] && j[++I] === j[++U] && j[++I] === j[++U] && j[++I] === j[++U] && j[++I] === j[++U] && I < tt);
            if (y = X - (tt - I), I = tt - X, Q < y) {
              if (t.match_start = D, W <= (Q = y))
                break;
              lt = j[I + Q - 1], at = j[I + Q];
            }
          }
        while ((D = M[D & q]) > _ && --A != 0);
        return Q <= t.lookahead ? Q : t.lookahead;
      }
      function ct(t) {
        var D, U, y, A, I, Q, W, _, j, q, M = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= M + (M - rt)) {
            for (a.arraySet(t.window, t.window, M, M, 0), t.match_start -= M, t.strstart -= M, t.block_start -= M, D = U = t.hash_size; y = t.head[--D], t.head[D] = M <= y ? y - M : 0, --U; )
              ;
            for (D = U = M; y = t.prev[--D], t.prev[D] = M <= y ? y - M : 0, --U; )
              ;
            A += M;
          }
          if (t.strm.avail_in === 0)
            break;
          if (Q = t.strm, W = t.window, _ = t.strstart + t.lookahead, j = A, q = void 0, q = Q.avail_in, j < q && (q = j), U = q === 0 ? 0 : (Q.avail_in -= q, a.arraySet(W, Q.input, Q.next_in, q, _), Q.state.wrap === 1 ? Q.adler = o(Q.adler, W, q, _) : Q.state.wrap === 2 && (Q.adler = p(Q.adler, W, q, _)), Q.next_in += q, Q.total_in += q, q), t.lookahead += U, t.lookahead + t.insert >= z)
            for (I = t.strstart - t.insert, t.ins_h = t.window[I], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + z - 1]) & t.hash_mask, t.prev[I & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = I, I++, t.insert--, !(t.lookahead + t.insert < z)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function pt(t, D) {
        for (var U, y; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && D === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (U = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), U !== 0 && t.strstart - U <= t.w_size - rt && (t.match_length = H(t, U)), t.match_length >= z)
            if (y = r._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            y = r._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (y && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, D === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : L;
      }
      function ot(t, D) {
        for (var U, y, A; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && D === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (U = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, U !== 0 && t.prev_length < t.max_lazy_match && t.strstart - U <= t.w_size - rt && (t.match_length = H(t, U), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - z, y = r._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, y && (B(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((y = r._tr_tally(t, 0, t.window[t.strstart - 1])) && B(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (y = r._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, D === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : L;
      }
      function st(t, D, U, y, A) {
        this.good_length = t, this.max_lazy = D, this.nice_length = U, this.max_chain = y, this.func = A;
      }
      function mt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * G), this.dyn_dtree = new a.Buf16(2 * (2 * R + 1)), this.bl_tree = new a.Buf16(2 * (2 * O + 1)), P(this.dyn_ltree), P(this.dyn_dtree), P(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(Z + 1), this.heap = new a.Buf16(2 * T + 1), P(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * T + 1), P(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ht(t) {
        var D;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (D = t.state).pending = 0, D.pending_out = 0, D.wrap < 0 && (D.wrap = -D.wrap), D.status = D.wrap ? E : N, t.adler = D.wrap === 2 ? 0 : 1, D.last_flush = g, r._tr_init(D), l) : V(t, b);
      }
      function At(t) {
        var D = ht(t);
        return D === l && function(U) {
          U.window_size = 2 * U.w_size, P(U.head), U.max_lazy_match = n[U.level].max_lazy, U.good_match = n[U.level].good_length, U.nice_match = n[U.level].nice_length, U.max_chain_length = n[U.level].max_chain, U.strstart = 0, U.block_start = 0, U.lookahead = 0, U.insert = 0, U.match_length = U.prev_length = z - 1, U.match_available = 0, U.ins_h = 0;
        }(t.state), D;
      }
      function Et(t, D, U, y, A, I) {
        if (!t)
          return b;
        var Q = 1;
        if (D === s && (D = 6), y < 0 ? (Q = 0, y = -y) : 15 < y && (Q = 2, y -= 16), A < 1 || C < A || U !== w || y < 8 || 15 < y || D < 0 || 9 < D || I < 0 || f < I)
          return V(t, b);
        y === 8 && (y = 9);
        var W = new mt();
        return (t.state = W).strm = t, W.wrap = Q, W.gzhead = null, W.w_bits = y, W.w_size = 1 << W.w_bits, W.w_mask = W.w_size - 1, W.hash_bits = A + 7, W.hash_size = 1 << W.hash_bits, W.hash_mask = W.hash_size - 1, W.hash_shift = ~~((W.hash_bits + z - 1) / z), W.window = new a.Buf8(2 * W.w_size), W.head = new a.Buf16(W.hash_size), W.prev = new a.Buf16(W.w_size), W.lit_bufsize = 1 << A + 6, W.pending_buf_size = 4 * W.lit_bufsize, W.pending_buf = new a.Buf8(W.pending_buf_size), W.d_buf = 1 * W.lit_bufsize, W.l_buf = 3 * W.lit_bufsize, W.level = D, W.strategy = I, W.method = U, At(t);
      }
      n = [new st(0, 0, 0, 0, function(t, D) {
        var U = 65535;
        for (U > t.pending_buf_size - 5 && (U = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ct(t), t.lookahead === 0 && D === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var y = t.block_start + U;
          if ((t.strstart === 0 || t.strstart >= y) && (t.lookahead = t.strstart - y, t.strstart = y, B(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, D === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : (t.strstart > t.block_start && (B(t, !1), t.strm.avail_out), i);
      }), new st(4, 4, 8, 4, pt), new st(4, 5, 16, 8, pt), new st(4, 6, 32, 32, pt), new st(4, 4, 16, 16, ot), new st(8, 16, 32, 32, ot), new st(8, 16, 128, 128, ot), new st(8, 32, 128, 256, ot), new st(32, 128, 258, 1024, ot), new st(32, 258, 258, 4096, ot)], c.deflateInit = function(t, D) {
        return Et(t, D, w, 15, 8, 0);
      }, c.deflateInit2 = Et, c.deflateReset = At, c.deflateResetKeep = ht, c.deflateSetHeader = function(t, D) {
        return t && t.state ? t.state.wrap !== 2 ? b : (t.state.gzhead = D, l) : b;
      }, c.deflate = function(t, D) {
        var U, y, A, I;
        if (!t || !t.state || 5 < D || D < 0)
          return t ? V(t, b) : b;
        if (y = t.state, !t.output || !t.input && t.avail_in !== 0 || y.status === 666 && D !== v)
          return V(t, t.avail_out === 0 ? -5 : b);
        if (y.strm = t, U = y.last_flush, y.last_flush = D, y.status === E)
          if (y.wrap === 2)
            t.adler = 0, K(y, 31), K(y, 139), K(y, 8), y.gzhead ? (K(y, (y.gzhead.text ? 1 : 0) + (y.gzhead.hcrc ? 2 : 0) + (y.gzhead.extra ? 4 : 0) + (y.gzhead.name ? 8 : 0) + (y.gzhead.comment ? 16 : 0)), K(y, 255 & y.gzhead.time), K(y, y.gzhead.time >> 8 & 255), K(y, y.gzhead.time >> 16 & 255), K(y, y.gzhead.time >> 24 & 255), K(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), K(y, 255 & y.gzhead.os), y.gzhead.extra && y.gzhead.extra.length && (K(y, 255 & y.gzhead.extra.length), K(y, y.gzhead.extra.length >> 8 & 255)), y.gzhead.hcrc && (t.adler = p(t.adler, y.pending_buf, y.pending, 0)), y.gzindex = 0, y.status = 69) : (K(y, 0), K(y, 0), K(y, 0), K(y, 0), K(y, 0), K(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), K(y, 3), y.status = N);
          else {
            var Q = w + (y.w_bits - 8 << 4) << 8;
            Q |= (2 <= y.strategy || y.level < 2 ? 0 : y.level < 6 ? 1 : y.level === 6 ? 2 : 3) << 6, y.strstart !== 0 && (Q |= 32), Q += 31 - Q % 31, y.status = N, J(y, Q), y.strstart !== 0 && (J(y, t.adler >>> 16), J(y, 65535 & t.adler)), t.adler = 1;
          }
        if (y.status === 69)
          if (y.gzhead.extra) {
            for (A = y.pending; y.gzindex < (65535 & y.gzhead.extra.length) && (y.pending !== y.pending_buf_size || (y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), S(t), A = y.pending, y.pending !== y.pending_buf_size)); )
              K(y, 255 & y.gzhead.extra[y.gzindex]), y.gzindex++;
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), y.gzindex === y.gzhead.extra.length && (y.gzindex = 0, y.status = 73);
          } else
            y.status = 73;
        if (y.status === 73)
          if (y.gzhead.name) {
            A = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), S(t), A = y.pending, y.pending === y.pending_buf_size)) {
                I = 1;
                break;
              }
              I = y.gzindex < y.gzhead.name.length ? 255 & y.gzhead.name.charCodeAt(y.gzindex++) : 0, K(y, I);
            } while (I !== 0);
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), I === 0 && (y.gzindex = 0, y.status = 91);
          } else
            y.status = 91;
        if (y.status === 91)
          if (y.gzhead.comment) {
            A = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), S(t), A = y.pending, y.pending === y.pending_buf_size)) {
                I = 1;
                break;
              }
              I = y.gzindex < y.gzhead.comment.length ? 255 & y.gzhead.comment.charCodeAt(y.gzindex++) : 0, K(y, I);
            } while (I !== 0);
            y.gzhead.hcrc && y.pending > A && (t.adler = p(t.adler, y.pending_buf, y.pending - A, A)), I === 0 && (y.status = 103);
          } else
            y.status = 103;
        if (y.status === 103 && (y.gzhead.hcrc ? (y.pending + 2 > y.pending_buf_size && S(t), y.pending + 2 <= y.pending_buf_size && (K(y, 255 & t.adler), K(y, t.adler >> 8 & 255), t.adler = 0, y.status = N)) : y.status = N), y.pending !== 0) {
          if (S(t), t.avail_out === 0)
            return y.last_flush = -1, l;
        } else if (t.avail_in === 0 && F(D) <= F(U) && D !== v)
          return V(t, -5);
        if (y.status === 666 && t.avail_in !== 0)
          return V(t, -5);
        if (t.avail_in !== 0 || y.lookahead !== 0 || D !== g && y.status !== 666) {
          var W = y.strategy === 2 ? function(_, j) {
            for (var q; ; ) {
              if (_.lookahead === 0 && (ct(_), _.lookahead === 0)) {
                if (j === g)
                  return i;
                break;
              }
              if (_.match_length = 0, q = r._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++, q && (B(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, j === v ? (B(_, !0), _.strm.avail_out === 0 ? it : x) : _.last_lit && (B(_, !1), _.strm.avail_out === 0) ? i : L;
          }(y, D) : y.strategy === 3 ? function(_, j) {
            for (var q, M, tt, lt, at = _.window; ; ) {
              if (_.lookahead <= X) {
                if (ct(_), _.lookahead <= X && j === g)
                  return i;
                if (_.lookahead === 0)
                  break;
              }
              if (_.match_length = 0, _.lookahead >= z && 0 < _.strstart && (M = at[tt = _.strstart - 1]) === at[++tt] && M === at[++tt] && M === at[++tt]) {
                lt = _.strstart + X;
                do
                  ;
                while (M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && M === at[++tt] && tt < lt);
                _.match_length = X - (lt - tt), _.match_length > _.lookahead && (_.match_length = _.lookahead);
              }
              if (_.match_length >= z ? (q = r._tr_tally(_, 1, _.match_length - z), _.lookahead -= _.match_length, _.strstart += _.match_length, _.match_length = 0) : (q = r._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++), q && (B(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, j === v ? (B(_, !0), _.strm.avail_out === 0 ? it : x) : _.last_lit && (B(_, !1), _.strm.avail_out === 0) ? i : L;
          }(y, D) : n[y.level].func(y, D);
          if (W !== it && W !== x || (y.status = 666), W === i || W === it)
            return t.avail_out === 0 && (y.last_flush = -1), l;
          if (W === L && (D === 1 ? r._tr_align(y) : D !== 5 && (r._tr_stored_block(y, 0, 0, !1), D === 3 && (P(y.head), y.lookahead === 0 && (y.strstart = 0, y.block_start = 0, y.insert = 0))), S(t), t.avail_out === 0))
            return y.last_flush = -1, l;
        }
        return D !== v ? l : y.wrap <= 0 ? 1 : (y.wrap === 2 ? (K(y, 255 & t.adler), K(y, t.adler >> 8 & 255), K(y, t.adler >> 16 & 255), K(y, t.adler >> 24 & 255), K(y, 255 & t.total_in), K(y, t.total_in >> 8 & 255), K(y, t.total_in >> 16 & 255), K(y, t.total_in >> 24 & 255)) : (J(y, t.adler >>> 16), J(y, 65535 & t.adler)), S(t), 0 < y.wrap && (y.wrap = -y.wrap), y.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var D;
        return t && t.state ? (D = t.state.status) !== E && D !== 69 && D !== 73 && D !== 91 && D !== 103 && D !== N && D !== 666 ? V(t, b) : (t.state = null, D === N ? V(t, -3) : l) : b;
      }, c.deflateSetDictionary = function(t, D) {
        var U, y, A, I, Q, W, _, j, q = D.length;
        if (!t || !t.state || (I = (U = t.state).wrap) === 2 || I === 1 && U.status !== E || U.lookahead)
          return b;
        for (I === 1 && (t.adler = o(t.adler, D, q, 0)), U.wrap = 0, q >= U.w_size && (I === 0 && (P(U.head), U.strstart = 0, U.block_start = 0, U.insert = 0), j = new a.Buf8(U.w_size), a.arraySet(j, D, q - U.w_size, U.w_size, 0), D = j, q = U.w_size), Q = t.avail_in, W = t.next_in, _ = t.input, t.avail_in = q, t.next_in = 0, t.input = D, ct(U); U.lookahead >= z; ) {
          for (y = U.strstart, A = U.lookahead - (z - 1); U.ins_h = (U.ins_h << U.hash_shift ^ U.window[y + z - 1]) & U.hash_mask, U.prev[y & U.w_mask] = U.head[U.ins_h], U.head[U.ins_h] = y, y++, --A; )
            ;
          U.strstart = y, U.lookahead = z - 1, ct(U);
        }
        return U.strstart += U.lookahead, U.block_start = U.strstart, U.insert = U.lookahead, U.lookahead = 0, U.match_length = U.prev_length = z - 1, U.match_available = 0, t.next_in = W, t.input = _, t.avail_in = Q, U.wrap = I, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, c) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, c) {
      h.exports = function(n, a) {
        var r, o, p, m, g, v, l, b, s, f, u, w, C, T, R, O, G, Z, z, X, rt, E, N, i, L;
        r = n.state, o = n.next_in, i = n.input, p = o + (n.avail_in - 5), m = n.next_out, L = n.output, g = m - (a - n.avail_out), v = m + (n.avail_out - 257), l = r.dmax, b = r.wsize, s = r.whave, f = r.wnext, u = r.window, w = r.hold, C = r.bits, T = r.lencode, R = r.distcode, O = (1 << r.lenbits) - 1, G = (1 << r.distbits) - 1;
        t:
          do {
            C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), Z = T[w & O];
            e:
              for (; ; ) {
                if (w >>>= z = Z >>> 24, C -= z, (z = Z >>> 16 & 255) === 0)
                  L[m++] = 65535 & Z;
                else {
                  if (!(16 & z)) {
                    if (!(64 & z)) {
                      Z = T[(65535 & Z) + (w & (1 << z) - 1)];
                      continue e;
                    }
                    if (32 & z) {
                      r.mode = 12;
                      break t;
                    }
                    n.msg = "invalid literal/length code", r.mode = 30;
                    break t;
                  }
                  X = 65535 & Z, (z &= 15) && (C < z && (w += i[o++] << C, C += 8), X += w & (1 << z) - 1, w >>>= z, C -= z), C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), Z = R[w & G];
                  n:
                    for (; ; ) {
                      if (w >>>= z = Z >>> 24, C -= z, !(16 & (z = Z >>> 16 & 255))) {
                        if (!(64 & z)) {
                          Z = R[(65535 & Z) + (w & (1 << z) - 1)];
                          continue n;
                        }
                        n.msg = "invalid distance code", r.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & Z, C < (z &= 15) && (w += i[o++] << C, (C += 8) < z && (w += i[o++] << C, C += 8)), l < (rt += w & (1 << z) - 1)) {
                        n.msg = "invalid distance too far back", r.mode = 30;
                        break t;
                      }
                      if (w >>>= z, C -= z, (z = m - g) < rt) {
                        if (s < (z = rt - z) && r.sane) {
                          n.msg = "invalid distance too far back", r.mode = 30;
                          break t;
                        }
                        if (N = u, (E = 0) === f) {
                          if (E += b - z, z < X) {
                            for (X -= z; L[m++] = u[E++], --z; )
                              ;
                            E = m - rt, N = L;
                          }
                        } else if (f < z) {
                          if (E += b + f - z, (z -= f) < X) {
                            for (X -= z; L[m++] = u[E++], --z; )
                              ;
                            if (E = 0, f < X) {
                              for (X -= z = f; L[m++] = u[E++], --z; )
                                ;
                              E = m - rt, N = L;
                            }
                          }
                        } else if (E += f - z, z < X) {
                          for (X -= z; L[m++] = u[E++], --z; )
                            ;
                          E = m - rt, N = L;
                        }
                        for (; 2 < X; )
                          L[m++] = N[E++], L[m++] = N[E++], L[m++] = N[E++], X -= 3;
                        X && (L[m++] = N[E++], 1 < X && (L[m++] = N[E++]));
                      } else {
                        for (E = m - rt; L[m++] = L[E++], L[m++] = L[E++], L[m++] = L[E++], 2 < (X -= 3); )
                          ;
                        X && (L[m++] = L[E++], 1 < X && (L[m++] = L[E++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < v);
        o -= X = C >> 3, w &= (1 << (C -= X << 3)) - 1, n.next_in = o, n.next_out = m, n.avail_in = o < p ? p - o + 5 : 5 - (o - p), n.avail_out = m < v ? v - m + 257 : 257 - (m - v), r.hold = w, r.bits = C;
      };
    }, {}], 49: [function(e, h, c) {
      var n = e("../utils/common"), a = e("./adler32"), r = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, g = 2, v = 0, l = -2, b = 1, s = 852, f = 592;
      function u(E) {
        return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function C(E) {
        var N;
        return E && E.state ? (N = E.state, E.total_in = E.total_out = N.total = 0, E.msg = "", N.wrap && (E.adler = 1 & N.wrap), N.mode = b, N.last = 0, N.havedict = 0, N.dmax = 32768, N.head = null, N.hold = 0, N.bits = 0, N.lencode = N.lendyn = new n.Buf32(s), N.distcode = N.distdyn = new n.Buf32(f), N.sane = 1, N.back = -1, v) : l;
      }
      function T(E) {
        var N;
        return E && E.state ? ((N = E.state).wsize = 0, N.whave = 0, N.wnext = 0, C(E)) : l;
      }
      function R(E, N) {
        var i, L;
        return E && E.state ? (L = E.state, N < 0 ? (i = 0, N = -N) : (i = 1 + (N >> 4), N < 48 && (N &= 15)), N && (N < 8 || 15 < N) ? l : (L.window !== null && L.wbits !== N && (L.window = null), L.wrap = i, L.wbits = N, T(E))) : l;
      }
      function O(E, N) {
        var i, L;
        return E ? (L = new w(), (E.state = L).window = null, (i = R(E, N)) !== v && (E.state = null), i) : l;
      }
      var G, Z, z = !0;
      function X(E) {
        if (z) {
          var N;
          for (G = new n.Buf32(512), Z = new n.Buf32(32), N = 0; N < 144; )
            E.lens[N++] = 8;
          for (; N < 256; )
            E.lens[N++] = 9;
          for (; N < 280; )
            E.lens[N++] = 7;
          for (; N < 288; )
            E.lens[N++] = 8;
          for (p(m, E.lens, 0, 288, G, 0, E.work, { bits: 9 }), N = 0; N < 32; )
            E.lens[N++] = 5;
          p(g, E.lens, 0, 32, Z, 0, E.work, { bits: 5 }), z = !1;
        }
        E.lencode = G, E.lenbits = 9, E.distcode = Z, E.distbits = 5;
      }
      function rt(E, N, i, L) {
        var it, x = E.state;
        return x.window === null && (x.wsize = 1 << x.wbits, x.wnext = 0, x.whave = 0, x.window = new n.Buf8(x.wsize)), L >= x.wsize ? (n.arraySet(x.window, N, i - x.wsize, x.wsize, 0), x.wnext = 0, x.whave = x.wsize) : (L < (it = x.wsize - x.wnext) && (it = L), n.arraySet(x.window, N, i - L, it, x.wnext), (L -= it) ? (n.arraySet(x.window, N, i - L, L, 0), x.wnext = L, x.whave = x.wsize) : (x.wnext += it, x.wnext === x.wsize && (x.wnext = 0), x.whave < x.wsize && (x.whave += it))), 0;
      }
      c.inflateReset = T, c.inflateReset2 = R, c.inflateResetKeep = C, c.inflateInit = function(E) {
        return O(E, 15);
      }, c.inflateInit2 = O, c.inflate = function(E, N) {
        var i, L, it, x, V, F, P, S, B, K, J, H, ct, pt, ot, st, mt, ht, At, Et, t, D, U, y, A = 0, I = new n.Buf8(4), Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0)
          return l;
        (i = E.state).mode === 12 && (i.mode = 13), V = E.next_out, it = E.output, P = E.avail_out, x = E.next_in, L = E.input, F = E.avail_in, S = i.hold, B = i.bits, K = F, J = P, D = v;
        t:
          for (; ; )
            switch (i.mode) {
              case b:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; B < 16; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                if (2 & i.wrap && S === 35615) {
                  I[i.check = 0] = 255 & S, I[1] = S >>> 8 & 255, i.check = r(i.check, I, 2, 0), B = S = 0, i.mode = 2;
                  break;
                }
                if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & S) << 8) + (S >> 8)) % 31) {
                  E.msg = "incorrect header check", i.mode = 30;
                  break;
                }
                if ((15 & S) != 8) {
                  E.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (B -= 4, t = 8 + (15 & (S >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  E.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, E.adler = i.check = 1, i.mode = 512 & S ? 10 : 12, B = S = 0;
                break;
              case 2:
                for (; B < 16; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                if (i.flags = S, (255 & i.flags) != 8) {
                  E.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  E.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = S >> 8 & 1), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = r(i.check, I, 2, 0)), B = S = 0, i.mode = 3;
              case 3:
                for (; B < 32; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                i.head && (i.head.time = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, I[2] = S >>> 16 & 255, I[3] = S >>> 24 & 255, i.check = r(i.check, I, 4, 0)), B = S = 0, i.mode = 4;
              case 4:
                for (; B < 16; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                i.head && (i.head.xflags = 255 & S, i.head.os = S >> 8), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = r(i.check, I, 2, 0)), B = S = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; B < 16; ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  i.length = S, i.head && (i.head.extra_len = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = r(i.check, I, 2, 0)), B = S = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (F < (H = i.length) && (H = F), H && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), n.arraySet(i.head.extra, L, x, H, t)), 512 & i.flags && (i.check = r(i.check, L, H, x)), F -= H, x += H, i.length -= H), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (F === 0)
                    break t;
                  for (H = 0; t = L[x + H++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && H < F; )
                    ;
                  if (512 & i.flags && (i.check = r(i.check, L, H, x)), F -= H, x += H, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (F === 0)
                    break t;
                  for (H = 0; t = L[x + H++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && H < F; )
                    ;
                  if (512 & i.flags && (i.check = r(i.check, L, H, x)), F -= H, x += H, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; B < 16; ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  if (S !== (65535 & i.check)) {
                    E.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), E.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; B < 32; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                E.adler = i.check = u(S), B = S = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return E.next_out = V, E.avail_out = P, E.next_in = x, E.avail_in = F, i.hold = S, i.bits = B, 2;
                E.adler = i.check = 1, i.mode = 12;
              case 12:
                if (N === 5 || N === 6)
                  break t;
              case 13:
                if (i.last) {
                  S >>>= 7 & B, B -= 7 & B, i.mode = 27;
                  break;
                }
                for (; B < 3; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                switch (i.last = 1 & S, B -= 1, 3 & (S >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (X(i), i.mode = 20, N !== 6)
                      break;
                    S >>>= 2, B -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    E.msg = "invalid block type", i.mode = 30;
                }
                S >>>= 2, B -= 2;
                break;
              case 14:
                for (S >>>= 7 & B, B -= 7 & B; B < 32; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                if ((65535 & S) != (S >>> 16 ^ 65535)) {
                  E.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & S, B = S = 0, i.mode = 15, N === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (H = i.length) {
                  if (F < H && (H = F), P < H && (H = P), H === 0)
                    break t;
                  n.arraySet(it, L, x, H, V), F -= H, x += H, P -= H, V += H, i.length -= H;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; B < 14; ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                if (i.nlen = 257 + (31 & S), S >>>= 5, B -= 5, i.ndist = 1 + (31 & S), S >>>= 5, B -= 5, i.ncode = 4 + (15 & S), S >>>= 4, B -= 4, 286 < i.nlen || 30 < i.ndist) {
                  E.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; B < 3; ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  i.lens[Q[i.have++]] = 7 & S, S >>>= 3, B -= 3;
                }
                for (; i.have < 19; )
                  i.lens[Q[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, U = { bits: i.lenbits }, D = p(0, i.lens, 0, 19, i.lencode, 0, i.work, U), i.lenbits = U.bits, D) {
                  E.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; st = (A = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((ot = A >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  if (mt < 16)
                    S >>>= ot, B -= ot, i.lens[i.have++] = mt;
                  else {
                    if (mt === 16) {
                      for (y = ot + 2; B < y; ) {
                        if (F === 0)
                          break t;
                        F--, S += L[x++] << B, B += 8;
                      }
                      if (S >>>= ot, B -= ot, i.have === 0) {
                        E.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], H = 3 + (3 & S), S >>>= 2, B -= 2;
                    } else if (mt === 17) {
                      for (y = ot + 3; B < y; ) {
                        if (F === 0)
                          break t;
                        F--, S += L[x++] << B, B += 8;
                      }
                      B -= ot, t = 0, H = 3 + (7 & (S >>>= ot)), S >>>= 3, B -= 3;
                    } else {
                      for (y = ot + 7; B < y; ) {
                        if (F === 0)
                          break t;
                        F--, S += L[x++] << B, B += 8;
                      }
                      B -= ot, t = 0, H = 11 + (127 & (S >>>= ot)), S >>>= 7, B -= 7;
                    }
                    if (i.have + H > i.nlen + i.ndist) {
                      E.msg = "invalid bit length repeat", i.mode = 30;
                      break;
                    }
                    for (; H--; )
                      i.lens[i.have++] = t;
                  }
                }
                if (i.mode === 30)
                  break;
                if (i.lens[256] === 0) {
                  E.msg = "invalid code -- missing end-of-block", i.mode = 30;
                  break;
                }
                if (i.lenbits = 9, U = { bits: i.lenbits }, D = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, U), i.lenbits = U.bits, D) {
                  E.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, U = { bits: i.distbits }, D = p(g, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, U), i.distbits = U.bits, D) {
                  E.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, N === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= F && 258 <= P) {
                  E.next_out = V, E.avail_out = P, E.next_in = x, E.avail_in = F, i.hold = S, i.bits = B, o(E, J), V = E.next_out, it = E.output, P = E.avail_out, x = E.next_in, L = E.input, F = E.avail_in, S = i.hold, B = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; st = (A = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((ot = A >>> 24) <= B); ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                if (st && !(240 & st)) {
                  for (ht = ot, At = st, Et = mt; st = (A = i.lencode[Et + ((S & (1 << ht + At) - 1) >> ht)]) >>> 16 & 255, mt = 65535 & A, !(ht + (ot = A >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  S >>>= ht, B -= ht, i.back += ht;
                }
                if (S >>>= ot, B -= ot, i.back += ot, i.length = mt, st === 0) {
                  i.mode = 26;
                  break;
                }
                if (32 & st) {
                  i.back = -1, i.mode = 12;
                  break;
                }
                if (64 & st) {
                  E.msg = "invalid literal/length code", i.mode = 30;
                  break;
                }
                i.extra = 15 & st, i.mode = 22;
              case 22:
                if (i.extra) {
                  for (y = i.extra; B < y; ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  i.length += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; st = (A = i.distcode[S & (1 << i.distbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((ot = A >>> 24) <= B); ) {
                  if (F === 0)
                    break t;
                  F--, S += L[x++] << B, B += 8;
                }
                if (!(240 & st)) {
                  for (ht = ot, At = st, Et = mt; st = (A = i.distcode[Et + ((S & (1 << ht + At) - 1) >> ht)]) >>> 16 & 255, mt = 65535 & A, !(ht + (ot = A >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  S >>>= ht, B -= ht, i.back += ht;
                }
                if (S >>>= ot, B -= ot, i.back += ot, 64 & st) {
                  E.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = mt, i.extra = 15 & st, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (y = i.extra; B < y; ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  i.offset += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  E.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (P === 0)
                  break t;
                if (H = J - P, i.offset > H) {
                  if ((H = i.offset - H) > i.whave && i.sane) {
                    E.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ct = H > i.wnext ? (H -= i.wnext, i.wsize - H) : i.wnext - H, H > i.length && (H = i.length), pt = i.window;
                } else
                  pt = it, ct = V - i.offset, H = i.length;
                for (P < H && (H = P), P -= H, i.length -= H; it[V++] = pt[ct++], --H; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (P === 0)
                  break t;
                it[V++] = i.length, P--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; B < 32; ) {
                    if (F === 0)
                      break t;
                    F--, S |= L[x++] << B, B += 8;
                  }
                  if (J -= P, E.total_out += J, i.total += J, J && (E.adler = i.check = i.flags ? r(i.check, it, J, V - J) : a(i.check, it, J, V - J)), J = P, (i.flags ? S : u(S)) !== i.check) {
                    E.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; B < 32; ) {
                    if (F === 0)
                      break t;
                    F--, S += L[x++] << B, B += 8;
                  }
                  if (S !== (4294967295 & i.total)) {
                    E.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 29;
              case 29:
                D = 1;
                break t;
              case 30:
                D = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return E.next_out = V, E.avail_out = P, E.next_in = x, E.avail_in = F, i.hold = S, i.bits = B, (i.wsize || J !== E.avail_out && i.mode < 30 && (i.mode < 27 || N !== 4)) && rt(E, E.output, E.next_out, J - E.avail_out) ? (i.mode = 31, -4) : (K -= E.avail_in, J -= E.avail_out, E.total_in += K, E.total_out += J, i.total += J, i.wrap && J && (E.adler = i.check = i.flags ? r(i.check, it, J, E.next_out - J) : a(i.check, it, J, E.next_out - J)), E.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (K == 0 && J === 0 || N === 4) && D === v && (D = -5), D);
      }, c.inflateEnd = function(E) {
        if (!E || !E.state)
          return l;
        var N = E.state;
        return N.window && (N.window = null), E.state = null, v;
      }, c.inflateGetHeader = function(E, N) {
        var i;
        return E && E.state && 2 & (i = E.state).wrap ? ((i.head = N).done = !1, v) : l;
      }, c.inflateSetDictionary = function(E, N) {
        var i, L = N.length;
        return E && E.state ? (i = E.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, N, L, 0) !== i.check ? -3 : rt(E, N, L, L) ? (i.mode = 31, -4) : (i.havedict = 1, v) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, c) {
      var n = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], r = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(m, g, v, l, b, s, f, u) {
        var w, C, T, R, O, G, Z, z, X, rt = u.bits, E = 0, N = 0, i = 0, L = 0, it = 0, x = 0, V = 0, F = 0, P = 0, S = 0, B = null, K = 0, J = new n.Buf16(16), H = new n.Buf16(16), ct = null, pt = 0;
        for (E = 0; E <= 15; E++)
          J[E] = 0;
        for (N = 0; N < l; N++)
          J[g[v + N]]++;
        for (it = rt, L = 15; 1 <= L && J[L] === 0; L--)
          ;
        if (L < it && (it = L), L === 0)
          return b[s++] = 20971520, b[s++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < L && J[i] === 0; i++)
          ;
        for (it < i && (it = i), E = F = 1; E <= 15; E++)
          if (F <<= 1, (F -= J[E]) < 0)
            return -1;
        if (0 < F && (m === 0 || L !== 1))
          return -1;
        for (H[1] = 0, E = 1; E < 15; E++)
          H[E + 1] = H[E] + J[E];
        for (N = 0; N < l; N++)
          g[v + N] !== 0 && (f[H[g[v + N]]++] = N);
        if (G = m === 0 ? (B = ct = f, 19) : m === 1 ? (B = a, K -= 257, ct = r, pt -= 257, 256) : (B = o, ct = p, -1), E = i, O = s, V = N = S = 0, T = -1, R = (P = 1 << (x = it)) - 1, m === 1 && 852 < P || m === 2 && 592 < P)
          return 1;
        for (; ; ) {
          for (Z = E - V, X = f[N] < G ? (z = 0, f[N]) : f[N] > G ? (z = ct[pt + f[N]], B[K + f[N]]) : (z = 96, 0), w = 1 << E - V, i = C = 1 << x; b[O + (S >> V) + (C -= w)] = Z << 24 | z << 16 | X | 0, C !== 0; )
            ;
          for (w = 1 << E - 1; S & w; )
            w >>= 1;
          if (w !== 0 ? (S &= w - 1, S += w) : S = 0, N++, --J[E] == 0) {
            if (E === L)
              break;
            E = g[v + f[N]];
          }
          if (it < E && (S & R) !== T) {
            for (V === 0 && (V = it), O += i, F = 1 << (x = E - V); x + V < L && !((F -= J[x + V]) <= 0); )
              x++, F <<= 1;
            if (P += 1 << x, m === 1 && 852 < P || m === 2 && 592 < P)
              return 1;
            b[T = S & R] = it << 24 | x << 16 | O - s | 0;
          }
        }
        return S !== 0 && (b[O + S] = E - V << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, c) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, c) {
      var n = e("../utils/common"), a = 0, r = 1;
      function o(A) {
        for (var I = A.length; 0 <= --I; )
          A[I] = 0;
      }
      var p = 0, m = 29, g = 256, v = g + 1 + m, l = 30, b = 19, s = 2 * v + 1, f = 15, u = 16, w = 7, C = 256, T = 16, R = 17, O = 18, G = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], X = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (v + 2));
      o(rt);
      var E = new Array(2 * l);
      o(E);
      var N = new Array(512);
      o(N);
      var i = new Array(256);
      o(i);
      var L = new Array(m);
      o(L);
      var it, x, V, F = new Array(l);
      function P(A, I, Q, W, _) {
        this.static_tree = A, this.extra_bits = I, this.extra_base = Q, this.elems = W, this.max_length = _, this.has_stree = A && A.length;
      }
      function S(A, I) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = I;
      }
      function B(A) {
        return A < 256 ? N[A] : N[256 + (A >>> 7)];
      }
      function K(A, I) {
        A.pending_buf[A.pending++] = 255 & I, A.pending_buf[A.pending++] = I >>> 8 & 255;
      }
      function J(A, I, Q) {
        A.bi_valid > u - Q ? (A.bi_buf |= I << A.bi_valid & 65535, K(A, A.bi_buf), A.bi_buf = I >> u - A.bi_valid, A.bi_valid += Q - u) : (A.bi_buf |= I << A.bi_valid & 65535, A.bi_valid += Q);
      }
      function H(A, I, Q) {
        J(A, Q[2 * I], Q[2 * I + 1]);
      }
      function ct(A, I) {
        for (var Q = 0; Q |= 1 & A, A >>>= 1, Q <<= 1, 0 < --I; )
          ;
        return Q >>> 1;
      }
      function pt(A, I, Q) {
        var W, _, j = new Array(f + 1), q = 0;
        for (W = 1; W <= f; W++)
          j[W] = q = q + Q[W - 1] << 1;
        for (_ = 0; _ <= I; _++) {
          var M = A[2 * _ + 1];
          M !== 0 && (A[2 * _] = ct(j[M]++, M));
        }
      }
      function ot(A) {
        var I;
        for (I = 0; I < v; I++)
          A.dyn_ltree[2 * I] = 0;
        for (I = 0; I < l; I++)
          A.dyn_dtree[2 * I] = 0;
        for (I = 0; I < b; I++)
          A.bl_tree[2 * I] = 0;
        A.dyn_ltree[2 * C] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function st(A) {
        8 < A.bi_valid ? K(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function mt(A, I, Q, W) {
        var _ = 2 * I, j = 2 * Q;
        return A[_] < A[j] || A[_] === A[j] && W[I] <= W[Q];
      }
      function ht(A, I, Q) {
        for (var W = A.heap[Q], _ = Q << 1; _ <= A.heap_len && (_ < A.heap_len && mt(I, A.heap[_ + 1], A.heap[_], A.depth) && _++, !mt(I, W, A.heap[_], A.depth)); )
          A.heap[Q] = A.heap[_], Q = _, _ <<= 1;
        A.heap[Q] = W;
      }
      function At(A, I, Q) {
        var W, _, j, q, M = 0;
        if (A.last_lit !== 0)
          for (; W = A.pending_buf[A.d_buf + 2 * M] << 8 | A.pending_buf[A.d_buf + 2 * M + 1], _ = A.pending_buf[A.l_buf + M], M++, W === 0 ? H(A, _, I) : (H(A, (j = i[_]) + g + 1, I), (q = G[j]) !== 0 && J(A, _ -= L[j], q), H(A, j = B(--W), Q), (q = Z[j]) !== 0 && J(A, W -= F[j], q)), M < A.last_lit; )
            ;
        H(A, C, I);
      }
      function Et(A, I) {
        var Q, W, _, j = I.dyn_tree, q = I.stat_desc.static_tree, M = I.stat_desc.has_stree, tt = I.stat_desc.elems, lt = -1;
        for (A.heap_len = 0, A.heap_max = s, Q = 0; Q < tt; Q++)
          j[2 * Q] !== 0 ? (A.heap[++A.heap_len] = lt = Q, A.depth[Q] = 0) : j[2 * Q + 1] = 0;
        for (; A.heap_len < 2; )
          j[2 * (_ = A.heap[++A.heap_len] = lt < 2 ? ++lt : 0)] = 1, A.depth[_] = 0, A.opt_len--, M && (A.static_len -= q[2 * _ + 1]);
        for (I.max_code = lt, Q = A.heap_len >> 1; 1 <= Q; Q--)
          ht(A, j, Q);
        for (_ = tt; Q = A.heap[1], A.heap[1] = A.heap[A.heap_len--], ht(A, j, 1), W = A.heap[1], A.heap[--A.heap_max] = Q, A.heap[--A.heap_max] = W, j[2 * _] = j[2 * Q] + j[2 * W], A.depth[_] = (A.depth[Q] >= A.depth[W] ? A.depth[Q] : A.depth[W]) + 1, j[2 * Q + 1] = j[2 * W + 1] = _, A.heap[1] = _++, ht(A, j, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(at, ft) {
          var kt, xt, Ct, gt, et, bt, vt = ft.dyn_tree, dt = ft.max_code, Rt = ft.stat_desc.static_tree, xe = ft.stat_desc.has_stree, Ie = ft.stat_desc.extra_bits, Yt = ft.stat_desc.extra_base, Vt = ft.stat_desc.max_length, Gt = 0;
          for (gt = 0; gt <= f; gt++)
            at.bl_count[gt] = 0;
          for (vt[2 * at.heap[at.heap_max] + 1] = 0, kt = at.heap_max + 1; kt < s; kt++)
            Vt < (gt = vt[2 * vt[2 * (xt = at.heap[kt]) + 1] + 1] + 1) && (gt = Vt, Gt++), vt[2 * xt + 1] = gt, dt < xt || (at.bl_count[gt]++, et = 0, Yt <= xt && (et = Ie[xt - Yt]), bt = vt[2 * xt], at.opt_len += bt * (gt + et), xe && (at.static_len += bt * (Rt[2 * xt + 1] + et)));
          if (Gt !== 0) {
            do {
              for (gt = Vt - 1; at.bl_count[gt] === 0; )
                gt--;
              at.bl_count[gt]--, at.bl_count[gt + 1] += 2, at.bl_count[Vt]--, Gt -= 2;
            } while (0 < Gt);
            for (gt = Vt; gt !== 0; gt--)
              for (xt = at.bl_count[gt]; xt !== 0; )
                dt < (Ct = at.heap[--kt]) || (vt[2 * Ct + 1] !== gt && (at.opt_len += (gt - vt[2 * Ct + 1]) * vt[2 * Ct], vt[2 * Ct + 1] = gt), xt--);
          }
        }(A, I), pt(j, lt, A.bl_count);
      }
      function t(A, I, Q) {
        var W, _, j = -1, q = I[1], M = 0, tt = 7, lt = 4;
        for (q === 0 && (tt = 138, lt = 3), I[2 * (Q + 1) + 1] = 65535, W = 0; W <= Q; W++)
          _ = q, q = I[2 * (W + 1) + 1], ++M < tt && _ === q || (M < lt ? A.bl_tree[2 * _] += M : _ !== 0 ? (_ !== j && A.bl_tree[2 * _]++, A.bl_tree[2 * T]++) : M <= 10 ? A.bl_tree[2 * R]++ : A.bl_tree[2 * O]++, j = _, lt = (M = 0) === q ? (tt = 138, 3) : _ === q ? (tt = 6, 3) : (tt = 7, 4));
      }
      function D(A, I, Q) {
        var W, _, j = -1, q = I[1], M = 0, tt = 7, lt = 4;
        for (q === 0 && (tt = 138, lt = 3), W = 0; W <= Q; W++)
          if (_ = q, q = I[2 * (W + 1) + 1], !(++M < tt && _ === q)) {
            if (M < lt)
              for (; H(A, _, A.bl_tree), --M != 0; )
                ;
            else
              _ !== 0 ? (_ !== j && (H(A, _, A.bl_tree), M--), H(A, T, A.bl_tree), J(A, M - 3, 2)) : M <= 10 ? (H(A, R, A.bl_tree), J(A, M - 3, 3)) : (H(A, O, A.bl_tree), J(A, M - 11, 7));
            j = _, lt = (M = 0) === q ? (tt = 138, 3) : _ === q ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      o(F);
      var U = !1;
      function y(A, I, Q, W) {
        J(A, (p << 1) + (W ? 1 : 0), 3), function(_, j, q, M) {
          st(_), M && (K(_, q), K(_, ~q)), n.arraySet(_.pending_buf, _.window, j, q, _.pending), _.pending += q;
        }(A, I, Q, !0);
      }
      c._tr_init = function(A) {
        U || (function() {
          var I, Q, W, _, j, q = new Array(f + 1);
          for (_ = W = 0; _ < m - 1; _++)
            for (L[_] = W, I = 0; I < 1 << G[_]; I++)
              i[W++] = _;
          for (i[W - 1] = _, _ = j = 0; _ < 16; _++)
            for (F[_] = j, I = 0; I < 1 << Z[_]; I++)
              N[j++] = _;
          for (j >>= 7; _ < l; _++)
            for (F[_] = j << 7, I = 0; I < 1 << Z[_] - 7; I++)
              N[256 + j++] = _;
          for (Q = 0; Q <= f; Q++)
            q[Q] = 0;
          for (I = 0; I <= 143; )
            rt[2 * I + 1] = 8, I++, q[8]++;
          for (; I <= 255; )
            rt[2 * I + 1] = 9, I++, q[9]++;
          for (; I <= 279; )
            rt[2 * I + 1] = 7, I++, q[7]++;
          for (; I <= 287; )
            rt[2 * I + 1] = 8, I++, q[8]++;
          for (pt(rt, v + 1, q), I = 0; I < l; I++)
            E[2 * I + 1] = 5, E[2 * I] = ct(I, 5);
          it = new P(rt, G, g + 1, v, f), x = new P(E, Z, 0, l, f), V = new P(new Array(0), z, 0, b, w);
        }(), U = !0), A.l_desc = new S(A.dyn_ltree, it), A.d_desc = new S(A.dyn_dtree, x), A.bl_desc = new S(A.bl_tree, V), A.bi_buf = 0, A.bi_valid = 0, ot(A);
      }, c._tr_stored_block = y, c._tr_flush_block = function(A, I, Q, W) {
        var _, j, q = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(M) {
          var tt, lt = 4093624447;
          for (tt = 0; tt <= 31; tt++, lt >>>= 1)
            if (1 & lt && M.dyn_ltree[2 * tt] !== 0)
              return a;
          if (M.dyn_ltree[18] !== 0 || M.dyn_ltree[20] !== 0 || M.dyn_ltree[26] !== 0)
            return r;
          for (tt = 32; tt < g; tt++)
            if (M.dyn_ltree[2 * tt] !== 0)
              return r;
          return a;
        }(A)), Et(A, A.l_desc), Et(A, A.d_desc), q = function(M) {
          var tt;
          for (t(M, M.dyn_ltree, M.l_desc.max_code), t(M, M.dyn_dtree, M.d_desc.max_code), Et(M, M.bl_desc), tt = b - 1; 3 <= tt && M.bl_tree[2 * X[tt] + 1] === 0; tt--)
            ;
          return M.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(A), _ = A.opt_len + 3 + 7 >>> 3, (j = A.static_len + 3 + 7 >>> 3) <= _ && (_ = j)) : _ = j = Q + 5, Q + 4 <= _ && I !== -1 ? y(A, I, Q, W) : A.strategy === 4 || j === _ ? (J(A, 2 + (W ? 1 : 0), 3), At(A, rt, E)) : (J(A, 4 + (W ? 1 : 0), 3), function(M, tt, lt, at) {
          var ft;
          for (J(M, tt - 257, 5), J(M, lt - 1, 5), J(M, at - 4, 4), ft = 0; ft < at; ft++)
            J(M, M.bl_tree[2 * X[ft] + 1], 3);
          D(M, M.dyn_ltree, tt - 1), D(M, M.dyn_dtree, lt - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, q + 1), At(A, A.dyn_ltree, A.dyn_dtree)), ot(A), W && st(A);
      }, c._tr_tally = function(A, I, Q) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = I >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & I, A.pending_buf[A.l_buf + A.last_lit] = 255 & Q, A.last_lit++, I === 0 ? A.dyn_ltree[2 * Q]++ : (A.matches++, I--, A.dyn_ltree[2 * (i[Q] + g + 1)]++, A.dyn_dtree[2 * B(I)]++), A.last_lit === A.lit_bufsize - 1;
      }, c._tr_align = function(A) {
        J(A, 2, 3), H(A, C, rt), function(I) {
          I.bi_valid === 16 ? (K(I, I.bi_buf), I.bi_buf = 0, I.bi_valid = 0) : 8 <= I.bi_valid && (I.pending_buf[I.pending++] = 255 & I.bi_buf, I.bi_buf >>= 8, I.bi_valid -= 8);
        }(A);
      };
    }, { "../utils/common": 41 }], 53: [function(e, h, c) {
      h.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, h, c) {
      (function(n) {
        (function(a, r) {
          if (!a.setImmediate) {
            var o, p, m, g, v = 1, l = {}, b = !1, s = a.document, f = Object.getPrototypeOf && Object.getPrototypeOf(a);
            f = f && f.setTimeout ? f : a, o = {}.toString.call(a.process) === "[object process]" ? function(T) {
              process.nextTick(function() {
                w(T);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var T = !0, R = a.onmessage;
                return a.onmessage = function() {
                  T = !1;
                }, a.postMessage("", "*"), a.onmessage = R, T;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", C, !1) : a.attachEvent("onmessage", C), function(T) {
              a.postMessage(g + T, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(T) {
              w(T.data);
            }, function(T) {
              m.port2.postMessage(T);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(T) {
              var R = s.createElement("script");
              R.onreadystatechange = function() {
                w(T), R.onreadystatechange = null, p.removeChild(R), R = null;
              }, p.appendChild(R);
            }) : function(T) {
              setTimeout(w, 0, T);
            }, f.setImmediate = function(T) {
              typeof T != "function" && (T = new Function("" + T));
              for (var R = new Array(arguments.length - 1), O = 0; O < R.length; O++)
                R[O] = arguments[O + 1];
              var G = { callback: T, args: R };
              return l[v] = G, o(v), v++;
            }, f.clearImmediate = u;
          }
          function u(T) {
            delete l[T];
          }
          function w(T) {
            if (b)
              setTimeout(w, 0, T);
            else {
              var R = l[T];
              if (R) {
                b = !0;
                try {
                  (function(O) {
                    var G = O.callback, Z = O.args;
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
                        G.apply(r, Z);
                    }
                  })(R);
                } finally {
                  u(T), b = !1;
                }
              }
            }
          }
          function C(T) {
            T.source === a && typeof T.data == "string" && T.data.indexOf(g) === 0 && w(+T.data.slice(g.length));
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, typeof Bt < "u" ? Bt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(be);
var Me = be.exports;
const je = /* @__PURE__ */ ge(Me);
var ve = { exports: {} };
(function(k, d) {
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
    function n(p) {
      try {
        p.dispatchEvent(new MouseEvent("click"));
      } catch {
        var m = document.createEvent("MouseEvents");
        m.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), p.dispatchEvent(m);
      }
    }
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Bt == "object" && Bt.global === Bt ? Bt : void 0, r = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !r ? function(p, m, g) {
      var v = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || p.name || "download", l.download = m, l.rel = "noopener", typeof p == "string" ? (l.href = p, l.origin === location.origin ? n(l) : c(l.href) ? h(p, m, g) : n(l, l.target = "_blank")) : (l.href = v.createObjectURL(p), setTimeout(function() {
        v.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        n(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, g) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, g), m);
      else if (c(p))
        h(p, m, g);
      else {
        var v = document.createElement("a");
        v.href = p, v.target = "_blank", setTimeout(function() {
          n(v);
        });
      }
    } : function(p, m, g, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof p == "string")
        return h(p, m, g);
      var l = p.type === "application/octet-stream", b = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && b || r) && typeof FileReader < "u") {
        var f = new FileReader();
        f.onloadend = function() {
          var C = f.result;
          C = s ? C : C.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = C : location = C, v = null;
        }, f.readAsDataURL(p);
      } else {
        var u = a.URL || a.webkitURL, w = u.createObjectURL(p);
        v ? v.location = w : location.href = w, v = null, setTimeout(function() {
          u.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, k.exports = o;
  });
})(ve);
var Pe = ve.exports;
const Je = /* @__PURE__ */ ge(Pe);
function Lt(k) {
  for (var d = globalThis.atob(k), e = d.length, h = new Uint8Array(e), c = 0; c < e; c++)
    h[c] = d.charCodeAt(c);
  return h.buffer;
}
const Ze = `#!/bin/sh

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
`, Xe = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-9.2.1-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, He = "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", ye = `# gradle

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
async function Ke({ writer: k }) {
  await k.write("gradlew", Ze, {
    executable: !0
  }), await k.write("gradlew.bat", Ye), await k.write("gradle/wrapper/gradle-wrapper.properties", Xe), await k.write("gradle/wrapper/gradle-wrapper.jar", Lt(He)), await k.write(".gitignore", ye), await k.write(".github/workflows/build.yml", we);
}
var Pt = { exports: {} };
(function(k, d) {
  (function(e, h) {
    h(d);
  })(Bt, function(e) {
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(x) {
        for (var V = 1; V < arguments.length; V++) {
          var F = arguments[V];
          for (var P in F)
            Object.prototype.hasOwnProperty.call(F, P) && (x[P] = F[P]);
        }
        return x;
      }, h.apply(this, arguments);
    }
    function c(x, V) {
      x.prototype = Object.create(V.prototype), x.prototype.constructor = x, a(x, V);
    }
    function n(x) {
      return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(V) {
        return V.__proto__ || Object.getPrototypeOf(V);
      }, n(x);
    }
    function a(x, V) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, P) {
        return F.__proto__ = P, F;
      }, a(x, V);
    }
    function r(x, V, F) {
      return r = function() {
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
      }() ? Reflect.construct.bind() : function(P, S, B) {
        var K = [null];
        K.push.apply(K, S);
        var J = new (Function.bind.apply(P, K))();
        return B && a(J, B.prototype), J;
      }, r.apply(null, arguments);
    }
    function o(x) {
      var V = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(F) {
        if (F === null || Function.toString.call(F).indexOf("[native code]") === -1)
          return F;
        if (typeof F != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (V !== void 0) {
          if (V.has(F))
            return V.get(F);
          V.set(F, P);
        }
        function P() {
          return r(F, arguments, n(this).constructor);
        }
        return P.prototype = Object.create(F.prototype, { constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 } }), a(P, F);
      }, o(x);
    }
    var p = /* @__PURE__ */ function() {
      function x(F) {
        this.cache = void 0, this.cache = F;
      }
      var V = x.prototype;
      return V.define = function(F, P) {
        this.cache[F] = P;
      }, V.get = function(F) {
        return this.cache[F];
      }, V.remove = function(F) {
        delete this.cache[F];
      }, V.reset = function() {
        this.cache = {};
      }, V.load = function(F) {
        this.cache = h({}, this.cache, F);
      }, x;
    }(), m = /* @__PURE__ */ function(x) {
      function V(F) {
        var P;
        return (P = x.call(this, F) || this).name = "Eta Error", P;
      }
      return c(V, x), V;
    }(/* @__PURE__ */ o(Error));
    function g(x, V, F) {
      var P = V.slice(0, F).split(/\n/), S = P.length, B = P[S - 1].length + 1;
      throw x += " at line " + S + " col " + B + `:

  ` + V.split(/\n/)[S - 1] + `
  ` + Array(B).join(" ") + "^", new m(x);
    }
    function v(x, V, F, P) {
      var S = V.split(`
`), B = Math.max(F - 3, 0), K = Math.min(S.length, F + 3), J = P, H = S.slice(B, K).map(function(pt, ot) {
        var st = ot + B + 1;
        return (st == F ? " >> " : "    ") + st + "| " + pt;
      }).join(`
`), ct = new m((J ? J + ":" + F + `
` : "line " + F + `
`) + H + `

` + x.message);
      throw ct.name = x.name, ct;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function b(x, V) {
      var F = this.config, P = V && V.async ? l : Function;
      try {
        return new P(F.varName, "options", this.compileToString.call(this, x, V));
      } catch (S) {
        throw S instanceof SyntaxError ? new m(`Bad template syntax

` + S.message + `
` + Array(S.message.length + 1).join("=") + `
` + this.compileToString.call(this, x, V) + `
`) : S;
      }
    }
    function s(x, V) {
      var F = this.config, P = V && V.async, S = this.parse.call(this, x), B = F.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (F.debug ? ', line: 1, templateStr: "' + x.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (F.debug ? "try {" : "") + (F.useWith ? "with(" + F.varName + "||{}){" : "") + `

` + f.call(this, S) + `
if (__eta.layout) {
  __eta.res = ` + (P ? "await includeAsync" : "include") + " (__eta.layout, {..." + F.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (F.useWith ? "}" : "") + (F.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (F.plugins)
        for (var K = 0; K < F.plugins.length; K++) {
          var J = F.plugins[K];
          J.processFnString && (B = J.processFnString(B, F));
        }
      return B;
    }
    function f(x) {
      for (var V = this.config, F = 0, P = x.length, S = ""; F < P; F++) {
        var B = x[F];
        if (typeof B == "string")
          S += "__eta.res+='" + B + `'
`;
        else {
          var K = B.t, J = B.val || "";
          V.debug && (S += "__eta.line=" + B.lineNo + `
`), K === "r" ? (V.autoFilter && (J = "__eta.f(" + J + ")"), S += "__eta.res+=" + J + `
`) : K === "i" ? (V.autoFilter && (J = "__eta.f(" + J + ")"), V.autoEscape && (J = "__eta.e(" + J + ")"), S += "__eta.res+=" + J + `
`) : K === "e" && (S += J + `
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
      var V = String(x);
      return /[&<>"']/.test(V) ? V.replace(/[&<>"']/g, w) : V;
    }, filterFunction: function(x) {
      return String(x);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, T = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, R = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, O = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function G(x) {
      return x.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function Z(x, V) {
      return x.slice(0, V).split(`
`).length;
    }
    function z(x) {
      var V = this.config, F = [], P = !1, S = 0, B = V.parse;
      if (V.plugins)
        for (var K = 0; K < V.plugins.length; K++) {
          var J = V.plugins[K];
          J.processTemplate && (x = J.processTemplate(x, V));
        }
      function H(I, Q) {
        I && (I = function(W, _, j, q) {
          var M, tt;
          return Array.isArray(_.autoTrim) ? (M = _.autoTrim[1], tt = _.autoTrim[0]) : M = tt = _.autoTrim, (j || j === !1) && (M = j), (q || q === !1) && (tt = q), tt || M ? M === "slurp" && tt === "slurp" ? W.trim() : (M === "_" || M === "slurp" ? W = W.trimStart() : M !== "-" && M !== "nl" || (W = W.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? W = W.trimEnd() : tt !== "-" && tt !== "nl" || (W = W.replace(/(?:\r\n|\n|\r)$/, "")), W) : W;
        }(I, V, P, Q), I && (I = I.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), F.push(I)));
      }
      V.rmWhitespace && (x = x.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), T.lastIndex = 0, R.lastIndex = 0, O.lastIndex = 0;
      for (var ct, pt = [B.exec, B.interpolate, B.raw].reduce(function(I, Q) {
        return I && Q ? I + "|" + G(Q) : Q ? G(Q) : I;
      }, ""), ot = new RegExp(G(V.tags[0]) + "(-|_)?\\s*(" + pt + ")?\\s*", "g"), st = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + G(V.tags[1]) + ")", "g"); ct = ot.exec(x); ) {
        var mt = x.slice(S, ct.index);
        S = ct[0].length + ct.index;
        var ht = ct[2] || "";
        H(mt, ct[1]), st.lastIndex = S;
        for (var At = void 0, Et = !1; At = st.exec(x); ) {
          if (At[1]) {
            var t = x.slice(S, At.index);
            ot.lastIndex = S = st.lastIndex, P = At[2], Et = { t: ht === B.exec ? "e" : ht === B.raw ? "r" : ht === B.interpolate ? "i" : "", val: t };
            break;
          }
          var D = At[0];
          if (D === "/*") {
            var U = x.indexOf("*/", st.lastIndex);
            U === -1 && g("unclosed comment", x, At.index), st.lastIndex = U;
          } else
            D === "'" ? (R.lastIndex = At.index, R.exec(x) ? st.lastIndex = R.lastIndex : g("unclosed string", x, At.index)) : D === '"' ? (O.lastIndex = At.index, O.exec(x) ? st.lastIndex = O.lastIndex : g("unclosed string", x, At.index)) : D === "`" && (T.lastIndex = At.index, T.exec(x) ? st.lastIndex = T.lastIndex : g("unclosed string", x, At.index));
        }
        Et ? (V.debug && (Et.lineNo = Z(x, ct.index)), F.push(Et)) : g("unclosed tag", x, ct.index);
      }
      if (H(x.slice(S, x.length), !1), V.plugins)
        for (var y = 0; y < V.plugins.length; y++) {
          var A = V.plugins[y];
          A.processAST && (F = A.processAST(F, V));
        }
      return F;
    }
    function X(x, V) {
      var F = V && V.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !x.startsWith("@")) {
        var P = V.filepath, S = F.get(P);
        if (this.config.cache && S)
          return S;
        var B = this.readFile(P), K = this.compile(B, V);
        return this.config.cache && F.define(P, K), K;
      }
      var J = F.get(x);
      if (J)
        return J;
      throw new m("Failed to get template '" + x + "'");
    }
    function rt(x, V, F) {
      var P, S = h({}, F, { async: !1 });
      return typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), P = X.call(this, x, S)) : P = x, P.call(this, V, S);
    }
    function E(x, V, F) {
      var P, S = h({}, F, { async: !0 });
      typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), P = X.call(this, x, S)) : P = x;
      var B = P.call(this, V, S);
      return Promise.resolve(B);
    }
    function N(x, V) {
      var F = this.compile(x, { async: !1 });
      return rt.call(this, F, V);
    }
    function i(x, V) {
      var F = this.compile(x, { async: !0 });
      return E.call(this, F, V);
    }
    var L = /* @__PURE__ */ function() {
      function x(F) {
        this.config = void 0, this.RuntimeErr = v, this.compile = b, this.compileToString = s, this.parse = z, this.render = rt, this.renderAsync = E, this.renderString = N, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = F ? h({}, C, F) : h({}, C);
      }
      var V = x.prototype;
      return V.configure = function(F) {
        this.config = h({}, this.config, F);
      }, V.withConfig = function(F) {
        return h({}, this, { config: h({}, this.config, F) });
      }, V.loadTemplate = function(F, P, S) {
        if (typeof P == "string")
          (S && S.async ? this.templatesAsync : this.templatesSync).define(F, this.compile(P, S));
        else {
          var B = this.templatesSync;
          (P.constructor.name === "AsyncFunction" || S && S.async) && (B = this.templatesAsync), B.define(F, P);
        }
      }, x;
    }(), it = /* @__PURE__ */ function(x) {
      function V() {
        return x.apply(this, arguments) || this;
      }
      return c(V, x), V;
    }(L);
    e.Eta = it;
  });
})(Pt, Pt.exports);
var qe = Pt.exports;
const $e = new qe.Eta({
  autoTrim: !1
});
function _t(k, d) {
  return $e.renderString(k, d);
}
const tn = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# IntelliJ IDEA is not yet fully compatible with configuration cache, see: https://github.com/FabricMC/fabric-loom/issues/1349
org.gradle.configuration-cache=false

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap && !it.unobfuscated) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
loom_version=1.14-SNAPSHOT
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_version=<%= it.fabricVersion %>`, en = `plugins {
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
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %> "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
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
}`, nn = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`;
function rn(k) {
  return Mt(k) >= 17;
}
function an(k) {
  return Mt(k) >= 19;
}
function ke(k) {
  return sn(k) >= 26 || k.endsWith("_unobfuscated");
}
function sn(k) {
  return Zt(k)[1];
}
function Mt(k) {
  return Zt(k)[1];
}
function on(k) {
  return Zt(k)[2];
}
function Zt(k) {
  return k.split("-")[0].split(".").map((e) => parseInt(e));
}
function Ee(k, d) {
  let e = [];
  const h = d ? "Modid" : "Mod Name";
  return k.length == 0 ? [`${h} is empty!`] : (k.length == 1 ? e.push(`${h} is only a single character! (It must be at least 2 characters long)!`) : k.length > 64 && e.push(`${h} has more than 64 characters!`), k.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function ln(k) {
  if (k === void 0)
    return;
  let d = Ee(k, !0) ?? [];
  const e = k.charAt(0);
  (e < "a" || e > "z") && d.push("Modid starts with an invalid character '" + e + "' (it must belowercase a-z)");
  let h = null;
  for (let c = 1; c < k.length; c++) {
    let n = k.charAt(c);
    n == "-" || n == "_" || "0" <= n && n <= "9" || "a" <= n && n <= "z" || (h == null && (h = []), h.push(n));
  }
  if (h != null) {
    let c = "Modid contains invalid characters: " + h.map((n) => "'" + n + "'").join(", ") + "!";
    d.push(c + "!");
  }
  if (d.length != 0)
    return d;
}
function cn(k) {
  return k.toLocaleLowerCase().replace(/\s+/g, ".").replace(/[^a-za-z0-9_\.]/, "");
}
function un(k) {
  return k.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
const hn = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, dn = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, Ht = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
}, An = {
  compatibility: "VERSION_21",
  mixin: "JAVA_21",
  release: 21,
  kotlinRelease: "21"
};
function jt(k) {
  const d = Mt(k);
  return d <= 16 ? hn : d == 17 ? dn : d <= 19 || d == 20 && on(k) <= 4 ? Ht : An;
}
const fn = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, pn = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/), mn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function gn(k) {
  let d = [];
  fn.test(k.toLowerCase()) || d.push("Package name is not a valid Java package name!");
  const e = k.split(".").filter((h) => pn.includes(h));
  e.length != 0 && d.push(`Package name contains illegal component: '${e[0]}'`);
  for (let h of mn)
    k.toLowerCase().startsWith(h) ? d.push(`Package name starts with '${h}', which is reserved!`) : k.toLowerCase() + "." == h && d.push(`Package name is '${h}', which is reserved!`);
  return d;
}
async function bn(k, d) {
  await k.write("gradle.properties", _t(tn, d)), await k.write("build.gradle", _t(en, { ...d, java: jt(d.minecraftVersion) })), await k.write("settings.gradle", nn);
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
async function vn(k, d) {
  const e = d.packageName + ".mixin", h = "ExampleMixin", c = "MinecraftServer", n = "net.minecraft.server.MinecraftServer", a = d.mojmap ? "loadLevel" : "loadWorld", r = {
    required: !0,
    package: e,
    compatibilityLevel: jt(d.minecraftVersion).mixin,
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
  return await k.write(`src/main/resources/${o}`, JSON.stringify(r, null, "	")), await k.write(`src/main/java/${e.replaceAll(".", "/")}/${h}.java`, _t(Ce, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: n,
    targetMethod: a
  })), [o];
}
async function yn(k, d) {
  const e = d.packageName + ".mixin.client", h = "ExampleClientMixin", c = d.mojmap ? "Minecraft" : "MinecraftClient", n = `net.minecraft.client.${c}`, a = "run", r = {
    required: !0,
    package: e,
    compatibilityLevel: jt(d.minecraftVersion).mixin,
    client: [
      h
    ],
    injectors: {
      defaultRequire: 1
    }
  }, o = `${d.modid}.client.mixins.json`;
  return await k.write(`src/client/resources/${o}`, JSON.stringify(r, null, "	")), await k.write(`src/client/java/${e.replaceAll(".", "/")}/${h}.java`, _t(Ce, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: n,
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
}`, Cn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, Sn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, xn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function In(k, d) {
  const e = Bn(d.projectName), h = {
    package: d.packageName,
    className: e,
    classFullName: d.packageName + "." + e,
    path: d.packageName.replaceAll(".", "/") + "/" + e,
    modid: d.modid,
    slf4j: Mt(d.minecraftVersion) >= 18,
    clientEntrypoint: d.splitSources,
    dataEntrypoint: d.dataGeneration
  };
  return d.kotlin ? await _n(k, h) : await Fn(k, h);
}
function Bn(k) {
  return k.split(" ").map((d) => d[0].toUpperCase() + d.slice(1)).join("").replace(/\W+/g, "");
}
async function Fn(k, d) {
  var e = {
    main: [
      d.classFullName
    ]
  };
  if (await k.write(`src/main/java/${d.path}.java`, _t(wn, d)), d.clientEntrypoint && (await k.write(`src/client/java/${d.path}Client.java`, _t(En, { ...d, className: d.className + "Client" })), e = {
    ...e,
    client: [
      d.classFullName + "Client"
    ]
  }), d.dataEntrypoint) {
    const h = d.clientEntrypoint ? "client" : "main";
    await k.write(`src/${h}/java/${d.path}DataGenerator.java`, _t(Sn, { ...d, className: d.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        d.classFullName + "DataGenerator"
      ]
    };
  }
  return e;
}
async function _n(k, d) {
  var e = {
    main: [
      {
        value: d.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await k.write(`src/main/kotlin/${d.path}.kt`, _t(kn, d)), d.clientEntrypoint && (await k.write(`src/client/kotlin/${d.path}Client.kt`, _t(Cn, { ...d, className: d.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: d.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), d.dataEntrypoint) {
    const h = d.clientEntrypoint ? "client" : "main";
    await k.write(`src/${h}/kotlin/${d.path}DataGenerator.kt`, _t(xn, { ...d, className: d.className + "DataGenerator" })), e = {
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
const Kt = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Rn(k, d, e) {
  if (!d)
    return Lt(Kt);
  const h = e.create(128, 128);
  return h != null && Tn(h, k) ? h.getPng() : Lt(Kt);
}
function Tn(k, d) {
  const e = k.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const h = d.split(/\s+/);
  let c = 0, n = Array(h.length), a = 65;
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
      const m = k.measureText(e, p);
      n[o] = m.ascent + m.descent, c += n[o];
    }
    if (c += (h.length - 1) * 2, c <= 124)
      break;
  }
  const r = (128 - c) / 2;
  for (let o = 0; o < h.length; o++) {
    let p = 0;
    for (const v of n.slice(0, o))
      p += v + 2;
    const m = h[o];
    e.font = `${a}px ${Nt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const g = k.measureText(e, m);
    e.fillText(m, 64, r + p + g.ascent);
  }
  return !0;
}
function Un(k) {
  return Number(k.split(".")[1]) >= 59;
}
async function Vn(k, d, e) {
  const h = [
    ...await vn(k, e),
    ...e.splitSources ? await yn(k, e) : []
  ], c = e.minecraftVersion.indexOf("-");
  var n = e.minecraftVersion.substring(0, c === -1 ? e.minecraftVersion.length : c + 1);
  n.endsWith("_unobfuscated") && (n = "1.21.11");
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
    entrypoints: await In(k, e),
    mixins: h,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + n,
      java: ">=" + jt(e.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  a.depends[Un(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await k.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await k.write(`src/main/resources/assets/${e.modid}/icon.png`, Rn(e.projectName, e.uniqueModIcon, d));
}
const Nn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, zn = `Creative Commons Legal Code

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
async function Dn(k, d) {
  await k.write(".gitattributes", Nn), await k.write(".gitignore", ye), await k.write(".github/workflows/build.yml", we), await k.write("LICENSE", zn);
}
const Nt = "Comic Relief";
async function Gn(k) {
  const d = await On(k.config);
  await Ke(k), await bn(k.writer, d), await Vn(k.writer, k.canvas, d), await Dn(k.writer);
}
async function Se() {
  const k = await Ge();
  let d = k.filter((e) => {
    const h = e.version;
    if (h.startsWith("1.14") && h != "1.14.4")
      return !1;
    if (!e.stable) {
      const c = k[0].version == h, n = h.includes("-pre") || h.includes("-rc");
      return c && n;
    }
    return !0;
  });
  return d.push({
    version: "1.21.11_unobfuscated",
    stable: !1
  }), d;
}
async function On(k) {
  const d = ke(k.minecraftVersion);
  return {
    ...k,
    loaderVersion: (await Oe()).find((e) => e.stable).version,
    fabricVersion: await We(k.minecraftVersion),
    yarnVersion: d ? void 0 : (await Le(k.minecraftVersion))[0].version,
    kotlin: await Wn(k),
    unobfuscated: d
  };
}
async function Wn(k) {
  if (!k.useKotlin)
    return;
  const e = (await Qe()).pop(), h = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: h
  };
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Nt,
  generateTemplate: Gn,
  getTemplateGameVersions: Se
}, Symbol.toStringTag, { value: "Module" }));
function qt(k, d, e) {
  const h = k.slice();
  return h[32] = d[e], h;
}
function $t(k, d, e) {
  const h = k.slice();
  return h[35] = d[e], h;
}
function te(k, d, e) {
  const h = k.slice();
  return h[35] = d[e], h;
}
function ee(k, d, e) {
  const h = k.slice();
  return h[35] = d[e], h;
}
function Qn(k) {
  let d, e, h = (
    /*error*/
    k[35].message + ""
  ), c, n, a;
  return {
    c() {
      d = nt("p"), e = St("Error: "), c = St(h), n = ut(), a = nt("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, Ut(d, "color", "red");
    },
    m(r, o) {
      yt(r, d, o), Y(d, e), Y(d, c), yt(r, n, o), yt(r, a, o);
    },
    p: Ft,
    i: Ft,
    o: Ft,
    d(r) {
      r && wt(d), r && wt(n), r && wt(a);
    }
  };
}
function Mn(k) {
  let d, e, h, c, n, a, r, o, p, m, g, v, l, b, s, f, u, w, C, T, R, O, G, Z, z, X, rt, E, N, i, L, it, x, V, F, P, S, B, K, J, H, ct, pt, ot, st, mt, ht, At, Et, t, D, U, y, A;
  function I(et, bt) {
    return (
      /*customModId*/
      et[3] != null ? Pn : jn
    );
  }
  let Q = I(k), W = Q(k), _ = (
    /*modIdErrors*/
    k[15] != null && ne(k)
  ), j = (
    /*customModId*/
    k[3] != null && ie(k)
  ), q = (
    /*packageNameErrors*/
    k[13]
  ), M = [];
  for (let et = 0; et < q.length; et += 1)
    M[et] = oe($t(k, q, et));
  let tt = (
    /*data*/
    k[31].game
  ), lt = [];
  for (let et = 0; et < tt.length; et += 1)
    lt[et] = le(qt(k, tt, et));
  let at = !/*isUnobfuscated*/
  k[12] && ce(k), ft = (
    /*supportsDataGen*/
    k[11] && ue(k)
  ), kt = (
    /*supportsSplitSources*/
    k[10] && he(k)
  );
  const xt = [Zn, Jn], Ct = [];
  function gt(et, bt) {
    return (
      /*loading*/
      et[9] ? 0 : 1
    );
  }
  return t = gt(k), D = Ct[t] = xt[t](k), {
    c() {
      d = nt("div"), e = nt("div"), h = nt("h3"), h.textContent = "Mod Name:", c = ut(), n = nt("hr"), a = ut(), W.c(), r = ut(), o = nt("input"), p = ut(), _ && _.c(), m = ut(), j && j.c(), g = ut(), v = nt("div"), l = nt("h3"), l.textContent = "Package Name:", b = ut(), s = nt("hr"), f = ut(), u = nt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = ut(), C = nt("input"), T = ut();
      for (let et = 0; et < M.length; et += 1)
        M[et].c();
      R = ut(), O = nt("div"), G = nt("h3"), G.textContent = "Minecraft Version:", Z = ut(), z = nt("hr"), X = ut(), rt = nt("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, E = ut(), N = nt("select");
      for (let et = 0; et < lt.length; et += 1)
        lt[et].c();
      i = ut(), L = nt("hr"), it = ut(), x = nt("br"), V = ut(), F = nt("h4"), F.textContent = "Advanced Options:", P = ut(), S = nt("div"), B = nt("div"), K = nt("input"), J = ut(), H = nt("label"), H.textContent = "Kotlin Programming Language", ct = ut(), pt = nt("p"), pt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = ut(), at && at.c(), st = ut(), ft && ft.c(), mt = ut(), kt && kt.c(), ht = ut(), At = nt("br"), Et = ut(), D.c(), $(h, "class", "svelte-c4460r"), $(n, "class", "svelte-c4460r"), $(o, "id", "project-name"), $(o, "class", "svelte-c4460r"), $(e, "class", "form-line svelte-c4460r"), $(l, "class", "svelte-c4460r"), $(s, "class", "svelte-c4460r"), $(u, "class", "svelte-c4460r"), $(C, "id", "package-name"), $(C, "class", "svelte-c4460r"), $(v, "class", "form-line svelte-c4460r"), $(G, "class", "svelte-c4460r"), $(z, "class", "svelte-c4460r"), $(rt, "class", "svelte-c4460r"), $(N, "id", "minecraft-version"), Ut(N, "min-width", "200px"), $(N, "class", "svelte-c4460r"), /*minecraftVersion*/
      k[0] === void 0 && Ne(() => (
        /*select_change_handler*/
        k[25].call(N)
      )), $(O, "class", "form-line svelte-c4460r"), $(L, "class", "svelte-c4460r"), $(x, "class", "svelte-c4460r"), $(F, "class", "svelte-c4460r"), $(K, "id", "kotlin"), $(K, "type", "checkbox"), $(K, "class", "option-input svelte-c4460r"), $(H, "for", "kotlin"), $(H, "class", "option-label svelte-c4460r"), $(B, "class", "option-container svelte-c4460r"), $(pt, "class", "option-body svelte-c4460r"), $(S, "class", "svelte-c4460r"), $(At, "class", "svelte-c4460r"), $(d, "class", "template svelte-c4460r");
    },
    m(et, bt) {
      yt(et, d, bt), Y(d, e), Y(e, h), Y(e, c), Y(e, n), Y(e, a), W.m(e, null), Y(e, r), Y(e, o), Tt(
        o,
        /*projectName*/
        k[1]
      ), Y(e, p), _ && _.m(e, null), Y(d, m), j && j.m(d, null), Y(d, g), Y(d, v), Y(v, l), Y(v, b), Y(v, s), Y(v, f), Y(v, u), Y(v, w), Y(v, C), Tt(
        C,
        /*packageName*/
        k[2]
      ), Y(v, T);
      for (let vt = 0; vt < M.length; vt += 1)
        M[vt] && M[vt].m(v, null);
      Y(d, R), Y(d, O), Y(O, G), Y(O, Z), Y(O, z), Y(O, X), Y(O, rt), Y(O, E), Y(O, N);
      for (let vt = 0; vt < lt.length; vt += 1)
        lt[vt] && lt[vt].m(N, null);
      Xt(
        N,
        /*minecraftVersion*/
        k[0],
        !0
      ), Y(d, i), Y(d, L), Y(d, it), Y(d, x), Y(d, V), Y(d, F), Y(d, P), Y(d, S), Y(S, B), Y(B, K), K.checked = /*useKotlin*/
      k[5], Y(B, J), Y(B, H), Y(S, ct), Y(S, pt), Y(d, ot), at && at.m(d, null), Y(d, st), ft && ft.m(d, null), Y(d, mt), kt && kt.m(d, null), Y(d, ht), Y(d, At), Y(d, Et), Ct[t].m(d, null), U = !0, y || (A = [
        It(
          o,
          "input",
          /*input0_input_handler*/
          k[22]
        ),
        It(
          o,
          "blur",
          /*doFormatProjectName*/
          k[18]
        ),
        It(
          C,
          "keyup",
          /*doFormatPackageName*/
          k[19]
        ),
        It(
          C,
          "input",
          /*input1_input_handler*/
          k[24]
        ),
        It(
          N,
          "change",
          /*select_change_handler*/
          k[25]
        ),
        It(
          K,
          "change",
          /*input2_change_handler*/
          k[26]
        )
      ], y = !0);
    },
    p(et, bt) {
      if (Q === (Q = I(et)) && W ? W.p(et, bt) : (W.d(1), W = Q(et), W && (W.c(), W.m(e, r))), bt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      et[1] && Tt(
        o,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[15] != null ? _ ? _.p(et, bt) : (_ = ne(et), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null), /*customModId*/
      et[3] != null ? j ? j.p(et, bt) : (j = ie(et), j.c(), j.m(d, g)) : j && (j.d(1), j = null), bt[0] & /*packageName*/
      4 && C.value !== /*packageName*/
      et[2] && Tt(
        C,
        /*packageName*/
        et[2]
      ), bt[0] & /*packageNameErrors*/
      8192) {
        q = /*packageNameErrors*/
        et[13];
        let dt;
        for (dt = 0; dt < q.length; dt += 1) {
          const Rt = $t(et, q, dt);
          M[dt] ? M[dt].p(Rt, bt) : (M[dt] = oe(Rt), M[dt].c(), M[dt].m(v, null));
        }
        for (; dt < M.length; dt += 1)
          M[dt].d(1);
        M.length = q.length;
      }
      if (bt[0] & /*versions*/
      65536) {
        tt = /*data*/
        et[31].game;
        let dt;
        for (dt = 0; dt < tt.length; dt += 1) {
          const Rt = qt(et, tt, dt);
          lt[dt] ? lt[dt].p(Rt, bt) : (lt[dt] = le(Rt), lt[dt].c(), lt[dt].m(N, null));
        }
        for (; dt < lt.length; dt += 1)
          lt[dt].d(1);
        lt.length = tt.length;
      }
      bt[0] & /*minecraftVersion, versions*/
      65537 && Xt(
        N,
        /*minecraftVersion*/
        et[0]
      ), bt[0] & /*useKotlin*/
      32 && (K.checked = /*useKotlin*/
      et[5]), /*isUnobfuscated*/
      et[12] ? at && (at.d(1), at = null) : at ? at.p(et, bt) : (at = ce(et), at.c(), at.m(d, st)), /*supportsDataGen*/
      et[11] ? ft ? ft.p(et, bt) : (ft = ue(et), ft.c(), ft.m(d, mt)) : ft && (ft.d(1), ft = null), /*supportsSplitSources*/
      et[10] ? kt ? kt.p(et, bt) : (kt = he(et), kt.c(), kt.m(d, ht)) : kt && (kt.d(1), kt = null);
      let vt = t;
      t = gt(et), t === vt ? Ct[t].p(et, bt) : (ze(), Dt(Ct[vt], 1, 1, () => {
        Ct[vt] = null;
      }), De(), D = Ct[t], D ? D.p(et, bt) : (D = Ct[t] = xt[t](et), D.c()), zt(D, 1), D.m(d, null));
    },
    i(et) {
      U || (zt(D), U = !0);
    },
    o(et) {
      Dt(D), U = !1;
    },
    d(et) {
      et && wt(d), W.d(), _ && _.d(), j && j.d(), Wt(M, et), Wt(lt, et), at && at.d(), ft && ft.d(), kt && kt.d(), Ct[t].d(), y = !1, de(A);
    }
  };
}
function jn(k) {
  let d, e, h, c, n, a, r, o;
  return {
    c() {
      d = nt("p"), e = St("Choose a name for your new mod. The mod ID will be "), h = nt("code"), c = St(
        /*modid*/
        k[4]
      ), n = St(". "), a = nt("a"), a.textContent = "Use custom id", $(h, "class", "svelte-c4460r"), $(a, "href", ""), $(a, "class", "svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(p, m) {
      yt(p, d, m), Y(d, e), Y(d, h), Y(h, c), Y(d, n), Y(d, a), r || (o = It(a, "click", Jt(
        /*useCustomModId*/
        k[20]
      )), r = !0);
    },
    p(p, m) {
      m[0] & /*modid*/
      16 && Qt(
        c,
        /*modid*/
        p[4]
      );
    },
    d(p) {
      p && wt(d), r = !1, o();
    }
  };
}
function Pn(k) {
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
function ne(k) {
  let d, e, h = (
    /*modIdErrors*/
    k[15]
  ), c = [];
  for (let n = 0; n < h.length; n += 1)
    c[n] = re(ee(k, h, n));
  return {
    c() {
      for (let n = 0; n < c.length; n += 1)
        c[n].c();
      d = ut(), e = nt("br"), $(e, "class", "svelte-c4460r");
    },
    m(n, a) {
      for (let r = 0; r < c.length; r += 1)
        c[r] && c[r].m(n, a);
      yt(n, d, a), yt(n, e, a);
    },
    p(n, a) {
      if (a[0] & /*modIdErrors*/
      32768) {
        h = /*modIdErrors*/
        n[15];
        let r;
        for (r = 0; r < h.length; r += 1) {
          const o = ee(n, h, r);
          c[r] ? c[r].p(o, a) : (c[r] = re(o), c[r].c(), c[r].m(d.parentNode, d));
        }
        for (; r < c.length; r += 1)
          c[r].d(1);
        c.length = h.length;
      }
    },
    d(n) {
      Wt(c, n), n && wt(d), n && wt(e);
    }
  };
}
function re(k) {
  let d, e = (
    /*error*/
    k[35] + ""
  ), h;
  return {
    c() {
      d = nt("li"), h = St(e), Ut(d, "color", "red"), $(d, "class", "svelte-c4460r");
    },
    m(c, n) {
      yt(c, d, n), Y(d, h);
    },
    p(c, n) {
      n[0] & /*modIdErrors*/
      32768 && e !== (e = /*error*/
      c[35] + "") && Qt(h, e);
    },
    d(c) {
      c && wt(d);
    }
  };
}
function ie(k) {
  let d, e, h, c, n, a, r, o, p, m, g, v, l, b = (
    /*customIdErrors*/
    k[14] != null && ae(k)
  );
  return {
    c() {
      d = nt("div"), e = nt("h3"), e.textContent = "Mod ID:", h = ut(), c = nt("hr"), n = ut(), a = nt("p"), r = St("Enter the modid you wish to use for your mod. "), o = nt("a"), o.textContent = "Use default", p = ut(), b && b.c(), m = ut(), g = nt("input"), $(e, "class", "svelte-c4460r"), $(c, "class", "svelte-c4460r"), $(o, "href", ""), $(o, "class", "svelte-c4460r"), $(a, "class", "svelte-c4460r"), $(g, "id", "mod-id"), $(g, "class", "svelte-c4460r"), $(d, "class", "form-line svelte-c4460r");
    },
    m(s, f) {
      yt(s, d, f), Y(d, e), Y(d, h), Y(d, c), Y(d, n), Y(d, a), Y(a, r), Y(a, o), Y(d, p), b && b.m(d, null), Y(d, m), Y(d, g), Tt(
        g,
        /*customModId*/
        k[3]
      ), v || (l = [
        It(o, "click", Jt(
          /*useDefaultModId*/
          k[21]
        )),
        It(
          g,
          "input",
          /*input_input_handler*/
          k[23]
        )
      ], v = !0);
    },
    p(s, f) {
      /*customIdErrors*/
      s[14] != null ? b ? b.p(s, f) : (b = ae(s), b.c(), b.m(d, m)) : b && (b.d(1), b = null), f[0] & /*customModId*/
      8 && g.value !== /*customModId*/
      s[3] && Tt(
        g,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && wt(d), b && b.d(), v = !1, de(l);
    }
  };
}
function ae(k) {
  let d, e, h = (
    /*customIdErrors*/
    k[14]
  ), c = [];
  for (let n = 0; n < h.length; n += 1)
    c[n] = se(te(k, h, n));
  return {
    c() {
      for (let n = 0; n < c.length; n += 1)
        c[n].c();
      d = ut(), e = nt("br"), $(e, "class", "svelte-c4460r");
    },
    m(n, a) {
      for (let r = 0; r < c.length; r += 1)
        c[r] && c[r].m(n, a);
      yt(n, d, a), yt(n, e, a);
    },
    p(n, a) {
      if (a[0] & /*customIdErrors*/
      16384) {
        h = /*customIdErrors*/
        n[14];
        let r;
        for (r = 0; r < h.length; r += 1) {
          const o = te(n, h, r);
          c[r] ? c[r].p(o, a) : (c[r] = se(o), c[r].c(), c[r].m(d.parentNode, d));
        }
        for (; r < c.length; r += 1)
          c[r].d(1);
        c.length = h.length;
      }
    },
    d(n) {
      Wt(c, n), n && wt(d), n && wt(e);
    }
  };
}
function se(k) {
  let d, e = (
    /*error*/
    k[35] + ""
  ), h;
  return {
    c() {
      d = nt("li"), h = St(e), Ut(d, "color", "red"), $(d, "class", "svelte-c4460r");
    },
    m(c, n) {
      yt(c, d, n), Y(d, h);
    },
    p(c, n) {
      n[0] & /*customIdErrors*/
      16384 && e !== (e = /*error*/
      c[35] + "") && Qt(h, e);
    },
    d(c) {
      c && wt(d);
    }
  };
}
function oe(k) {
  let d, e = (
    /*error*/
    k[35] + ""
  ), h;
  return {
    c() {
      d = nt("li"), h = St(e), Ut(d, "color", "red"), $(d, "class", "svelte-c4460r");
    },
    m(c, n) {
      yt(c, d, n), Y(d, h);
    },
    p(c, n) {
      n[0] & /*packageNameErrors*/
      8192 && e !== (e = /*error*/
      c[35] + "") && Qt(h, e);
    },
    d(c) {
      c && wt(d);
    }
  };
}
function le(k) {
  let d, e = (
    /*version*/
    k[32].version + ""
  ), h;
  return {
    c() {
      d = nt("option"), h = St(e), d.__value = /*version*/
      k[32].version, d.value = d.__value, $(d, "class", "svelte-c4460r");
    },
    m(c, n) {
      yt(c, d, n), Y(d, h);
    },
    p: Ft,
    d(c) {
      c && wt(d);
    }
  };
}
function ce(k) {
  let d, e, h, c, n, a, r, o, p;
  return {
    c() {
      d = nt("div"), e = nt("div"), h = nt("input"), c = ut(), n = nt("label"), n.textContent = "Mojang Mappings", a = ut(), r = nt("p"), r.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", $(h, "id", "mojmap"), $(h, "type", "checkbox"), $(h, "class", "option-input svelte-c4460r"), $(n, "for", "mojmap"), $(n, "class", "option-label svelte-c4460r"), $(e, "class", "option-container svelte-c4460r"), $(r, "class", "option-body svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(m, g) {
      yt(m, d, g), Y(d, e), Y(e, h), h.checked = /*mojmap*/
      k[6], Y(e, c), Y(e, n), Y(d, a), Y(d, r), o || (p = It(
        h,
        "change",
        /*input_change_handler*/
        k[27]
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
function ue(k) {
  let d, e, h, c, n, a, r, o, p;
  return {
    c() {
      d = nt("div"), e = nt("div"), h = nt("input"), c = ut(), n = nt("label"), n.textContent = "Data Generation", a = ut(), r = nt("p"), r.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', $(h, "id", "datagen"), $(h, "type", "checkbox"), $(h, "class", "option-input svelte-c4460r"), $(n, "for", "datagen"), $(n, "class", "option-label svelte-c4460r"), $(e, "class", "option-container svelte-c4460r"), $(r, "class", "option-body svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(m, g) {
      yt(m, d, g), Y(d, e), Y(e, h), h.checked = /*dataGeneration*/
      k[7], Y(e, c), Y(e, n), Y(d, a), Y(d, r), o || (p = It(
        h,
        "change",
        /*input_change_handler_1*/
        k[28]
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
function he(k) {
  let d, e, h, c, n, a, r, o, p;
  return {
    c() {
      d = nt("div"), e = nt("div"), h = nt("input"), c = ut(), n = nt("label"), n.textContent = "Split client and common sources", a = ut(), r = nt("p"), r.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, $(h, "id", "splitSources"), $(h, "type", "checkbox"), $(h, "class", "option-input svelte-c4460r"), $(n, "for", "splitSources"), $(n, "class", "option-label svelte-c4460r"), $(e, "class", "option-container svelte-c4460r"), $(r, "class", "option-body svelte-c4460r"), $(d, "class", "svelte-c4460r");
    },
    m(m, g) {
      yt(m, d, g), Y(d, e), Y(e, h), h.checked = /*splitSources*/
      k[8], Y(e, c), Y(e, n), Y(d, a), Y(d, r), o || (p = It(
        h,
        "change",
        /*input_change_handler_2*/
        k[29]
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
function Jn(k) {
  let d, e, h, c, n, a;
  return e = new me({}), {
    c() {
      d = nt("a"), Ae(e.$$.fragment), h = St(" Download Template (.ZIP)"), $(d, "class", "button primary large download-button svelte-c4460r"), $(d, "href", "");
    },
    m(r, o) {
      yt(r, d, o), fe(e, d, null), Y(d, h), c = !0, n || (a = It(d, "click", Jt(
        /*generate*/
        k[17]
      )), n = !0);
    },
    p: Ft,
    i(r) {
      c || (zt(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Dt(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && wt(d), pe(e), n = !1, a();
    }
  };
}
function Zn(k) {
  let d, e, h, c;
  return e = new me({}), {
    c() {
      d = nt("a"), Ae(e.$$.fragment), h = St(" Generating..."), $(d, "class", "button primary download-button svelte-c4460r"), $(d, "href", "");
    },
    m(n, a) {
      yt(n, d, a), fe(e, d, null), Y(d, h), c = !0;
    },
    p: Ft,
    i(n) {
      c || (zt(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Dt(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && wt(d), pe(e);
    }
  };
}
function Yn(k) {
  let d, e, h, c;
  return {
    c() {
      d = nt("p"), e = St(`Loading data
    
        
        `), h = nt("span"), c = St("..."), Ut(h, "font-family", Nt);
    },
    m(n, a) {
      yt(n, d, a), Y(d, e), Y(d, h), Y(h, c);
    },
    p: Ft,
    i: Ft,
    o: Ft,
    d(n) {
      n && wt(d);
    }
  };
}
function Xn(k) {
  let d, e, h = {
    ctx: k,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Yn,
    then: Mn,
    catch: Qn,
    value: 31,
    error: 35,
    blocks: [, , ,]
  };
  return Re(
    /*versions*/
    k[16],
    h
  ), {
    c() {
      d = Te(), h.block.c();
    },
    m(c, n) {
      yt(c, d, n), h.block.m(c, h.anchor = n), h.mount = () => d.parentNode, h.anchor = d, e = !0;
    },
    p(c, n) {
      k = c, Ue(h, k, n);
    },
    i(c) {
      e || (zt(h.block), e = !0);
    },
    o(c) {
      for (let n = 0; n < 3; n += 1) {
        const a = h.blocks[n];
        Dt(a);
      }
      e = !1;
    },
    d(c) {
      c && wt(d), h.block.d(c), h.token = null, h = null;
    }
  };
}
function Hn(k, d, e) {
  let h, c, n, a, r, o, p, m, g = "Template Mod", v = "com.example", l = !1, b = !0, s = !1, f = !0, u, w = !1;
  const C = Promise.all([Se()]).then(([V]) => (e(0, m = V.find((F) => F.stable).version), { game: V }));
  function T(V) {
    if (V !== void 0)
      return Ee(V, u === void 0);
  }
  async function R() {
    if (r !== void 0 || u !== void 0 && o !== void 0 || p.length > 0)
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
      splitSources: f && n,
      uniqueModIcon: !0
    }, P = new je();
    await V.generateTemplate({
      config: F,
      writer: {
        write: async (S, B, K) => {
          P.file(S, B, {
            unixPermissions: K != null && K.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(S, B) {
          const K = document.createElement("canvas");
          return K.width = S, K.height = B, {
            getContext: (J) => K.getContext(J),
            getPng: () => Lt(K.toDataURL().split(";base64,")[1]),
            measureText(J, H) {
              const ct = J.measureText(H);
              return {
                width: ct.width,
                ascent: ct.actualBoundingBoxAscent,
                descent: ct.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Je.saveAs(await P.generateAsync({ type: "blob", platform: "UNIX" }), `${h}-template-${F.minecraftVersion}.zip`), e(9, w = !1);
  }
  function O() {
    e(1, g = g.trim());
  }
  function G() {
    e(2, v = cn(v));
  }
  function Z() {
    e(3, u = h);
  }
  function z() {
    e(3, u = void 0);
  }
  function X() {
    g = this.value, e(1, g);
  }
  function rt() {
    u = this.value, e(3, u);
  }
  function E() {
    v = this.value, e(2, v);
  }
  function N() {
    m = Ve(this), e(0, m), e(16, C);
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
  function x() {
    f = this.checked, e(8, f);
  }
  return k.$$.update = () => {
    k.$$.dirty[0] & /*projectName*/
    2 && e(4, h = un(g)), k.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, c = rn(m || "1.99")), k.$$.dirty[0] & /*minecraftVersion*/
    1 && e(10, n = an(m || "1.99")), k.$$.dirty[0] & /*minecraftVersion*/
    1 && e(12, a = ke(m || "1.99")), k.$$.dirty[0] & /*modid*/
    16 && e(15, r = T(h)), k.$$.dirty[0] & /*customModId*/
    8 && e(14, o = ln(u)), k.$$.dirty[0] & /*packageName*/
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
    n,
    c,
    a,
    p,
    o,
    r,
    C,
    R,
    O,
    G,
    Z,
    z,
    X,
    rt,
    E,
    N,
    i,
    L,
    it,
    x
  ];
}
class tr extends Be {
  constructor(d) {
    super(), Fe(this, d, Hn, Xn, _e, {}, null, [-1, -1]);
  }
}
export {
  tr as default
};

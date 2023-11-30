import { S as ve, i as ye, s as we, h as ke, b as Ee, c as bt, u as Ce, r as _t, v as It, d as vt, f as Se, e as rt, t as Et, a as ht, g as zt, j as q, n as St, o as $, m as xe, C as Nt, p as Wt, q as kt, D as Be, E as Ne, l as Mt, B as re, k as Gt, z as jt, w as ie, x as ae, y as se } from "./index.61dc58cf.js";
import oe from "./DownloadIcon.214b8f5e.js";
import { d as Fe, b as _e, h as Ie, i as Re, j as Te } from "./Api.96f42ec7.js";
var Ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function le(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
function Ot(_) {
  throw new Error('Could not dynamically require "' + _ + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ce = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(_, p) {
  (function(i) {
    _.exports = i();
  })(function() {
    return function i(y, c, r) {
      function s(f, b) {
        if (!c[f]) {
          if (!y[f]) {
            var g = typeof Ot == "function" && Ot;
            if (!b && g)
              return g(f, !0);
            if (e)
              return e(f, !0);
            var v = new Error("Cannot find module '" + f + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var o = c[f] = { exports: {} };
          y[f][0].call(o.exports, function(d) {
            var a = y[f][1][d];
            return s(a || d);
          }, o, o.exports, i, y, c, r);
        }
        return c[f].exports;
      }
      for (var e = typeof Ot == "function" && Ot, l = 0; l < r.length; l++)
        s(r[l]);
      return s;
    }({ 1: [function(i, y, c) {
      var r = i("./utils"), s = i("./support"), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(l) {
        for (var f, b, g, v, o, d, a, A = [], u = 0, w = l.length, E = w, I = r.getTypeOf(l) !== "string"; u < l.length; )
          E = w - u, g = I ? (f = l[u++], b = u < w ? l[u++] : 0, u < w ? l[u++] : 0) : (f = l.charCodeAt(u++), b = u < w ? l.charCodeAt(u++) : 0, u < w ? l.charCodeAt(u++) : 0), v = f >> 2, o = (3 & f) << 4 | b >> 4, d = 1 < E ? (15 & b) << 2 | g >> 6 : 64, a = 2 < E ? 63 & g : 64, A.push(e.charAt(v) + e.charAt(o) + e.charAt(d) + e.charAt(a));
        return A.join("");
      }, c.decode = function(l) {
        var f, b, g, v, o, d, a = 0, A = 0, u = "data:";
        if (l.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, E = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === e.charAt(64) && E--, l.charAt(l.length - 2) === e.charAt(64) && E--, E % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = s.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); a < l.length; )
          f = e.indexOf(l.charAt(a++)) << 2 | (v = e.indexOf(l.charAt(a++))) >> 4, b = (15 & v) << 4 | (o = e.indexOf(l.charAt(a++))) >> 2, g = (3 & o) << 6 | (d = e.indexOf(l.charAt(a++))), w[A++] = f, o !== 64 && (w[A++] = b), d !== 64 && (w[A++] = g);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(i, y, c) {
      var r = i("./external"), s = i("./stream/DataWorker"), e = i("./stream/Crc32Probe"), l = i("./stream/DataLengthProbe");
      function f(b, g, v, o, d) {
        this.compressedSize = b, this.uncompressedSize = g, this.crc32 = v, this.compression = o, this.compressedContent = d;
      }
      f.prototype = { getContentWorker: function() {
        var b = new s(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), g = this;
        return b.on("end", function() {
          if (this.streamInfo.data_length !== g.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), b;
      }, getCompressedWorker: function() {
        return new s(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, f.createWorkerFrom = function(b, g, v) {
        return b.pipe(new e()).pipe(new l("uncompressedSize")).pipe(g.compressWorker(v)).pipe(new l("compressedSize")).withStreamInfo("compression", g);
      }, y.exports = f;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(i, y, c) {
      var r = i("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, c.DEFLATE = i("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(i, y, c) {
      var r = i("./utils"), s = function() {
        for (var e, l = [], f = 0; f < 256; f++) {
          e = f;
          for (var b = 0; b < 8; b++)
            e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
          l[f] = e;
        }
        return l;
      }();
      y.exports = function(e, l) {
        return e !== void 0 && e.length ? r.getTypeOf(e) !== "string" ? function(f, b, g, v) {
          var o = s, d = v + g;
          f ^= -1;
          for (var a = v; a < d; a++)
            f = f >>> 8 ^ o[255 & (f ^ b[a])];
          return -1 ^ f;
        }(0 | l, e, e.length, 0) : function(f, b, g, v) {
          var o = s, d = v + g;
          f ^= -1;
          for (var a = v; a < d; a++)
            f = f >>> 8 ^ o[255 & (f ^ b.charCodeAt(a))];
          return -1 ^ f;
        }(0 | l, e, e.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(i, y, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(i, y, c) {
      var r = null;
      r = typeof Promise < "u" ? Promise : i("lie"), y.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(i, y, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = i("pako"), e = i("./utils"), l = i("./stream/GenericWorker"), f = r ? "uint8array" : "array";
      function b(g, v) {
        l.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = v, this.meta = {};
      }
      c.magic = "\b\0", e.inherits(b, l), b.prototype.processChunk = function(g) {
        this.meta = g.meta, this._pako === null && this._createPako(), this._pako.push(e.transformTo(f, g.data), !1);
      }, b.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, b.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, b.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var g = this;
        this._pako.onData = function(v) {
          g.push({ data: v, meta: g.meta });
        };
      }, c.compressWorker = function(g) {
        return new b("Deflate", g);
      }, c.uncompressWorker = function() {
        return new b("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(i, y, c) {
      function r(o, d) {
        var a, A = "";
        for (a = 0; a < d; a++)
          A += String.fromCharCode(255 & o), o >>>= 8;
        return A;
      }
      function s(o, d, a, A, u, w) {
        var E, I, F = o.file, j = o.compression, V = w !== f.utf8encode, Z = e.transformTo("string", w(F.name)), z = e.transformTo("string", f.utf8encode(F.name)), J = F.comment, nt = e.transformTo("string", w(J)), k = e.transformTo("string", f.utf8encode(J)), D = z.length !== F.name.length, n = k.length !== J.length, G = "", it = "", x = "", O = F.dir, N = F.date, W = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        d && !a || (W.crc32 = o.crc32, W.compressedSize = o.compressedSize, W.uncompressedSize = o.uncompressedSize);
        var S = 0;
        d && (S |= 8), V || !D && !n || (S |= 2048);
        var B = 0, K = 0;
        O && (B |= 16), u === "UNIX" ? (K = 798, B |= function(H, ot) {
          var mt = H;
          return H || (mt = ot ? 16893 : 33204), (65535 & mt) << 16;
        }(F.unixPermissions, O)) : (K = 20, B |= function(H) {
          return 63 & (H || 0);
        }(F.dosPermissions)), E = N.getUTCHours(), E <<= 6, E |= N.getUTCMinutes(), E <<= 5, E |= N.getUTCSeconds() / 2, I = N.getUTCFullYear() - 1980, I <<= 4, I |= N.getUTCMonth() + 1, I <<= 5, I |= N.getUTCDate(), D && (it = r(1, 1) + r(b(Z), 4) + z, G += "up" + r(it.length, 2) + it), n && (x = r(1, 1) + r(b(nt), 4) + k, G += "uc" + r(x.length, 2) + x);
        var Y = "";
        return Y += `
\0`, Y += r(S, 2), Y += j.magic, Y += r(E, 2), Y += r(I, 2), Y += r(W.crc32, 4), Y += r(W.compressedSize, 4), Y += r(W.uncompressedSize, 4), Y += r(Z.length, 2), Y += r(G.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + Y + Z + G, dirRecord: g.CENTRAL_FILE_HEADER + r(K, 2) + Y + r(nt.length, 2) + "\0\0\0\0" + r(B, 4) + r(A, 4) + Z + G + nt };
      }
      var e = i("../utils"), l = i("../stream/GenericWorker"), f = i("../utf8"), b = i("../crc32"), g = i("../signature");
      function v(o, d, a, A) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = d, this.zipPlatform = a, this.encodeFileName = A, this.streamFiles = o, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      e.inherits(v, l), v.prototype.push = function(o) {
        var d = o.meta.percent || 0, a = this.entriesCount, A = this._sources.length;
        this.accumulate ? this.contentBuffer.push(o) : (this.bytesWritten += o.data.length, l.prototype.push.call(this, { data: o.data, meta: { currentFile: this.currentFile, percent: a ? (d + 100 * (a - A - 1)) / a : 100 } }));
      }, v.prototype.openedSource = function(o) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = o.file.name;
        var d = this.streamFiles && !o.file.dir;
        if (d) {
          var a = s(o, d, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: a.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, v.prototype.closedSource = function(o) {
        this.accumulate = !1;
        var d = this.streamFiles && !o.file.dir, a = s(o, d, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(a.dirRecord), d)
          this.push({ data: function(A) {
            return g.DATA_DESCRIPTOR + r(A.crc32, 4) + r(A.compressedSize, 4) + r(A.uncompressedSize, 4);
          }(o), meta: { percent: 100 } });
        else
          for (this.push({ data: a.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, v.prototype.flush = function() {
        for (var o = this.bytesWritten, d = 0; d < this.dirRecords.length; d++)
          this.push({ data: this.dirRecords[d], meta: { percent: 100 } });
        var a = this.bytesWritten - o, A = function(u, w, E, I, F) {
          var j = e.transformTo("string", F(I));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(u, 2) + r(u, 2) + r(w, 4) + r(E, 4) + r(j.length, 2) + j;
        }(this.dirRecords.length, a, o, this.zipComment, this.encodeFileName);
        this.push({ data: A, meta: { percent: 100 } });
      }, v.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, v.prototype.registerPrevious = function(o) {
        this._sources.push(o);
        var d = this;
        return o.on("data", function(a) {
          d.processChunk(a);
        }), o.on("end", function() {
          d.closedSource(d.previous.streamInfo), d._sources.length ? d.prepareNextSource() : d.end();
        }), o.on("error", function(a) {
          d.error(a);
        }), this;
      }, v.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, v.prototype.error = function(o) {
        var d = this._sources;
        if (!l.prototype.error.call(this, o))
          return !1;
        for (var a = 0; a < d.length; a++)
          try {
            d[a].error(o);
          } catch {
          }
        return !0;
      }, v.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var o = this._sources, d = 0; d < o.length; d++)
          o[d].lock();
      }, y.exports = v;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(i, y, c) {
      var r = i("../compressions"), s = i("./ZipFileWorker");
      c.generateWorker = function(e, l, f) {
        var b = new s(l.streamFiles, f, l.platform, l.encodeFileName), g = 0;
        try {
          e.forEach(function(v, o) {
            g++;
            var d = function(w, E) {
              var I = w || E, F = r[I];
              if (!F)
                throw new Error(I + " is not a valid compression method !");
              return F;
            }(o.options.compression, l.compression), a = o.options.compressionOptions || l.compressionOptions || {}, A = o.dir, u = o.date;
            o._compressWorker(d, a).withStreamInfo("file", { name: v, dir: A, date: u, comment: o.comment || "", unixPermissions: o.unixPermissions, dosPermissions: o.dosPermissions }).pipe(b);
          }), b.entriesCount = g;
        } catch (v) {
          b.error(v);
        }
        return b;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(i, y, c) {
      function r() {
        if (!(this instanceof r))
          return new r();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new r();
          for (var e in this)
            typeof this[e] != "function" && (s[e] = this[e]);
          return s;
        };
      }
      (r.prototype = i("./object")).loadAsync = i("./load"), r.support = i("./support"), r.defaults = i("./defaults"), r.version = "3.10.1", r.loadAsync = function(s, e) {
        return new r().loadAsync(s, e);
      }, r.external = i("./external"), y.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(i, y, c) {
      var r = i("./utils"), s = i("./external"), e = i("./utf8"), l = i("./zipEntries"), f = i("./stream/Crc32Probe"), b = i("./nodejsUtils");
      function g(v) {
        return new s.Promise(function(o, d) {
          var a = v.decompressed.getContentWorker().pipe(new f());
          a.on("error", function(A) {
            d(A);
          }).on("end", function() {
            a.streamInfo.crc32 !== v.decompressed.crc32 ? d(new Error("Corrupted zip : CRC32 mismatch")) : o();
          }).resume();
        });
      }
      y.exports = function(v, o) {
        var d = this;
        return o = r.extend(o || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: e.utf8decode }), b.isNode && b.isStream(v) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", v, !0, o.optimizedBinaryString, o.base64).then(function(a) {
          var A = new l(o);
          return A.load(a), A;
        }).then(function(a) {
          var A = [s.Promise.resolve(a)], u = a.files;
          if (o.checkCRC32)
            for (var w = 0; w < u.length; w++)
              A.push(g(u[w]));
          return s.Promise.all(A);
        }).then(function(a) {
          for (var A = a.shift(), u = A.files, w = 0; w < u.length; w++) {
            var E = u[w], I = E.fileNameStr, F = r.resolve(E.fileNameStr);
            d.file(F, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: o.createFolders }), E.dir || (d.file(F).unsafeOriginalName = I);
          }
          return A.zipComment.length && (d.comment = A.zipComment), d;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(i, y, c) {
      var r = i("../utils"), s = i("../stream/GenericWorker");
      function e(l, f) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(f);
      }
      r.inherits(e, s), e.prototype._bindStream = function(l) {
        var f = this;
        (this._stream = l).pause(), l.on("data", function(b) {
          f.push({ data: b, meta: { percent: 0 } });
        }).on("error", function(b) {
          f.isPaused ? this.generatedError = b : f.error(b);
        }).on("end", function() {
          f.isPaused ? f._upstreamEnded = !0 : f.end();
        });
      }, e.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, e.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, y.exports = e;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(i, y, c) {
      var r = i("readable-stream").Readable;
      function s(e, l, f) {
        r.call(this, l), this._helper = e;
        var b = this;
        e.on("data", function(g, v) {
          b.push(g) || b._helper.pause(), f && f(v);
        }).on("error", function(g) {
          b.emit("error", g);
        }).on("end", function() {
          b.push(null);
        });
      }
      i("../utils").inherits(s, r), s.prototype._read = function() {
        this._helper.resume();
      }, y.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(i, y, c) {
      y.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(r, s);
        if (typeof r == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(r, s);
      }, allocBuffer: function(r) {
        if (Buffer.alloc)
          return Buffer.alloc(r);
        var s = new Buffer(r);
        return s.fill(0), s;
      }, isBuffer: function(r) {
        return Buffer.isBuffer(r);
      }, isStream: function(r) {
        return r && typeof r.on == "function" && typeof r.pause == "function" && typeof r.resume == "function";
      } };
    }, {}], 15: [function(i, y, c) {
      function r(F, j, V) {
        var Z, z = e.getTypeOf(j), J = e.extend(V || {}, b);
        J.date = J.date || /* @__PURE__ */ new Date(), J.compression !== null && (J.compression = J.compression.toUpperCase()), typeof J.unixPermissions == "string" && (J.unixPermissions = parseInt(J.unixPermissions, 8)), J.unixPermissions && 16384 & J.unixPermissions && (J.dir = !0), J.dosPermissions && 16 & J.dosPermissions && (J.dir = !0), J.dir && (F = u(F)), J.createFolders && (Z = A(F)) && w.call(this, Z, !0);
        var nt = z === "string" && J.binary === !1 && J.base64 === !1;
        V && V.binary !== void 0 || (J.binary = !nt), (j instanceof g && j.uncompressedSize === 0 || J.dir || !j || j.length === 0) && (J.base64 = !1, J.binary = !0, j = "", J.compression = "STORE", z = "string");
        var k = null;
        k = j instanceof g || j instanceof l ? j : d.isNode && d.isStream(j) ? new a(F, j) : e.prepareContent(F, j, J.binary, J.optimizedBinaryString, J.base64);
        var D = new v(F, k, J);
        this.files[F] = D;
      }
      var s = i("./utf8"), e = i("./utils"), l = i("./stream/GenericWorker"), f = i("./stream/StreamHelper"), b = i("./defaults"), g = i("./compressedObject"), v = i("./zipObject"), o = i("./generate"), d = i("./nodejsUtils"), a = i("./nodejs/NodejsStreamInputAdapter"), A = function(F) {
        F.slice(-1) === "/" && (F = F.substring(0, F.length - 1));
        var j = F.lastIndexOf("/");
        return 0 < j ? F.substring(0, j) : "";
      }, u = function(F) {
        return F.slice(-1) !== "/" && (F += "/"), F;
      }, w = function(F, j) {
        return j = j !== void 0 ? j : b.createFolders, F = u(F), this.files[F] || r.call(this, F, null, { dir: !0, createFolders: j }), this.files[F];
      };
      function E(F) {
        return Object.prototype.toString.call(F) === "[object RegExp]";
      }
      var I = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(F) {
        var j, V, Z;
        for (j in this.files)
          Z = this.files[j], (V = j.slice(this.root.length, j.length)) && j.slice(0, this.root.length) === this.root && F(V, Z);
      }, filter: function(F) {
        var j = [];
        return this.forEach(function(V, Z) {
          F(V, Z) && j.push(Z);
        }), j;
      }, file: function(F, j, V) {
        if (arguments.length !== 1)
          return F = this.root + F, r.call(this, F, j, V), this;
        if (E(F)) {
          var Z = F;
          return this.filter(function(J, nt) {
            return !nt.dir && Z.test(J);
          });
        }
        var z = this.files[this.root + F];
        return z && !z.dir ? z : null;
      }, folder: function(F) {
        if (!F)
          return this;
        if (E(F))
          return this.filter(function(z, J) {
            return J.dir && F.test(z);
          });
        var j = this.root + F, V = w.call(this, j), Z = this.clone();
        return Z.root = V.name, Z;
      }, remove: function(F) {
        F = this.root + F;
        var j = this.files[F];
        if (j || (F.slice(-1) !== "/" && (F += "/"), j = this.files[F]), j && !j.dir)
          delete this.files[F];
        else
          for (var V = this.filter(function(z, J) {
            return J.name.slice(0, F.length) === F;
          }), Z = 0; Z < V.length; Z++)
            delete this.files[V[Z].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(F) {
        var j, V = {};
        try {
          if ((V = e.extend(F || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = V.type.toLowerCase(), V.compression = V.compression.toUpperCase(), V.type === "binarystring" && (V.type = "string"), !V.type)
            throw new Error("No output type specified.");
          e.checkSupport(V.type), V.platform !== "darwin" && V.platform !== "freebsd" && V.platform !== "linux" && V.platform !== "sunos" || (V.platform = "UNIX"), V.platform === "win32" && (V.platform = "DOS");
          var Z = V.comment || this.comment || "";
          j = o.generateWorker(this, V, Z);
        } catch (z) {
          (j = new l("error")).error(z);
        }
        return new f(j, V.type || "string", V.mimeType);
      }, generateAsync: function(F, j) {
        return this.generateInternalStream(F).accumulate(j);
      }, generateNodeStream: function(F, j) {
        return (F = F || {}).type || (F.type = "nodebuffer"), this.generateInternalStream(F).toNodejsStream(j);
      } };
      y.exports = I;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(i, y, c) {
      y.exports = i("stream");
    }, { stream: void 0 }], 17: [function(i, y, c) {
      var r = i("./DataReader");
      function s(e) {
        r.call(this, e);
        for (var l = 0; l < this.data.length; l++)
          e[l] = 255 & e[l];
      }
      i("../utils").inherits(s, r), s.prototype.byteAt = function(e) {
        return this.data[this.zero + e];
      }, s.prototype.lastIndexOfSignature = function(e) {
        for (var l = e.charCodeAt(0), f = e.charCodeAt(1), b = e.charCodeAt(2), g = e.charCodeAt(3), v = this.length - 4; 0 <= v; --v)
          if (this.data[v] === l && this.data[v + 1] === f && this.data[v + 2] === b && this.data[v + 3] === g)
            return v - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(e) {
        var l = e.charCodeAt(0), f = e.charCodeAt(1), b = e.charCodeAt(2), g = e.charCodeAt(3), v = this.readData(4);
        return l === v[0] && f === v[1] && b === v[2] && g === v[3];
      }, s.prototype.readData = function(e) {
        if (this.checkOffset(e), e === 0)
          return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, y.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(i, y, c) {
      var r = i("../utils");
      function s(e) {
        this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(e) {
        this.checkIndex(this.index + e);
      }, checkIndex: function(e) {
        if (this.length < this.zero + e || e < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
      }, setIndex: function(e) {
        this.checkIndex(e), this.index = e;
      }, skip: function(e) {
        this.setIndex(this.index + e);
      }, byteAt: function() {
      }, readInt: function(e) {
        var l, f = 0;
        for (this.checkOffset(e), l = this.index + e - 1; l >= this.index; l--)
          f = (f << 8) + this.byteAt(l);
        return this.index += e, f;
      }, readString: function(e) {
        return r.transformTo("string", this.readData(e));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var e = this.readInt(4);
        return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
      } }, y.exports = s;
    }, { "../utils": 32 }], 19: [function(i, y, c) {
      var r = i("./Uint8ArrayReader");
      function s(e) {
        r.call(this, e);
      }
      i("../utils").inherits(s, r), s.prototype.readData = function(e) {
        this.checkOffset(e);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, y.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(i, y, c) {
      var r = i("./DataReader");
      function s(e) {
        r.call(this, e);
      }
      i("../utils").inherits(s, r), s.prototype.byteAt = function(e) {
        return this.data.charCodeAt(this.zero + e);
      }, s.prototype.lastIndexOfSignature = function(e) {
        return this.data.lastIndexOf(e) - this.zero;
      }, s.prototype.readAndCheckSignature = function(e) {
        return e === this.readData(4);
      }, s.prototype.readData = function(e) {
        this.checkOffset(e);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, y.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(i, y, c) {
      var r = i("./ArrayReader");
      function s(e) {
        r.call(this, e);
      }
      i("../utils").inherits(s, r), s.prototype.readData = function(e) {
        if (this.checkOffset(e), e === 0)
          return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, y.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(i, y, c) {
      var r = i("../utils"), s = i("../support"), e = i("./ArrayReader"), l = i("./StringReader"), f = i("./NodeBufferReader"), b = i("./Uint8ArrayReader");
      y.exports = function(g) {
        var v = r.getTypeOf(g);
        return r.checkSupport(v), v !== "string" || s.uint8array ? v === "nodebuffer" ? new f(g) : s.uint8array ? new b(r.transformTo("uint8array", g)) : new e(r.transformTo("array", g)) : new l(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(i, y, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(i, y, c) {
      var r = i("./GenericWorker"), s = i("../utils");
      function e(l) {
        r.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(e, r), e.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, y.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(i, y, c) {
      var r = i("./GenericWorker"), s = i("../crc32");
      function e() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      i("../utils").inherits(e, r), e.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, y.exports = e;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(i, y, c) {
      var r = i("../utils"), s = i("./GenericWorker");
      function e(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      r.inherits(e, s), e.prototype.processChunk = function(l) {
        if (l) {
          var f = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = f + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, y.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(i, y, c) {
      var r = i("../utils"), s = i("./GenericWorker");
      function e(l) {
        s.call(this, "DataWorker");
        var f = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(b) {
          f.dataIsReady = !0, f.data = b, f.max = b && b.length || 0, f.type = r.getTypeOf(b), f.isPaused || f._tickAndRepeat();
        }, function(b) {
          f.error(b);
        });
      }
      r.inherits(e, s), e.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, e.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
      }, e.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, e.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var l = null, f = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, f);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, f);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, f);
        }
        return this.index = f, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, y.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(i, y, c) {
      function r(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      r.prototype = { push: function(s) {
        this.emit("data", s);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (s) {
          this.emit("error", s);
        }
        return !0;
      }, error: function(s) {
        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
      }, on: function(s, e) {
        return this._listeners[s].push(e), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, e) {
        if (this._listeners[s])
          for (var l = 0; l < this._listeners[s].length; l++)
            this._listeners[s][l].call(this, e);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var e = this;
        return s.on("data", function(l) {
          e.processChunk(l);
        }), s.on("end", function() {
          e.end();
        }), s.on("error", function(l) {
          e.error(l);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var s = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
      }, flush: function() {
      }, processChunk: function(s) {
        this.push(s);
      }, withStreamInfo: function(s, e) {
        return this.extraStreamInfo[s] = e, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, y.exports = r;
    }, {}], 29: [function(i, y, c) {
      var r = i("../utils"), s = i("./ConvertWorker"), e = i("./GenericWorker"), l = i("../base64"), f = i("../support"), b = i("../external"), g = null;
      if (f.nodestream)
        try {
          g = i("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function v(d, a) {
        return new b.Promise(function(A, u) {
          var w = [], E = d._internalType, I = d._outputType, F = d._mimeType;
          d.on("data", function(j, V) {
            w.push(j), a && a(V);
          }).on("error", function(j) {
            w = [], u(j);
          }).on("end", function() {
            try {
              var j = function(V, Z, z) {
                switch (V) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", Z), z);
                  case "base64":
                    return l.encode(Z);
                  default:
                    return r.transformTo(V, Z);
                }
              }(I, function(V, Z) {
                var z, J = 0, nt = null, k = 0;
                for (z = 0; z < Z.length; z++)
                  k += Z[z].length;
                switch (V) {
                  case "string":
                    return Z.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Z);
                  case "uint8array":
                    for (nt = new Uint8Array(k), z = 0; z < Z.length; z++)
                      nt.set(Z[z], J), J += Z[z].length;
                    return nt;
                  case "nodebuffer":
                    return Buffer.concat(Z);
                  default:
                    throw new Error("concat : unsupported type '" + V + "'");
                }
              }(E, w), F);
              A(j);
            } catch (V) {
              u(V);
            }
            w = [];
          }).resume();
        });
      }
      function o(d, a, A) {
        var u = a;
        switch (a) {
          case "blob":
          case "arraybuffer":
            u = "uint8array";
            break;
          case "base64":
            u = "string";
        }
        try {
          this._internalType = u, this._outputType = a, this._mimeType = A, r.checkSupport(u), this._worker = d.pipe(new s(u)), d.lock();
        } catch (w) {
          this._worker = new e("error"), this._worker.error(w);
        }
      }
      o.prototype = { accumulate: function(d) {
        return v(this, d);
      }, on: function(d, a) {
        var A = this;
        return d === "data" ? this._worker.on(d, function(u) {
          a.call(A, u.data, u.meta);
        }) : this._worker.on(d, function() {
          r.delay(a, arguments, A);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(d) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new g(this, { objectMode: this._outputType !== "nodebuffer" }, d);
      } }, y.exports = o;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(i, y, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        c.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          c.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(r), c.blob = s.getBlob("application/zip").size === 0;
          } catch {
            c.blob = !1;
          }
        }
      }
      try {
        c.nodestream = !!i("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(i, y, c) {
      for (var r = i("./utils"), s = i("./support"), e = i("./nodejsUtils"), l = i("./stream/GenericWorker"), f = new Array(256), b = 0; b < 256; b++)
        f[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
      f[254] = f[254] = 1;
      function g() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        l.call(this, "utf-8 encode");
      }
      c.utf8encode = function(o) {
        return s.nodebuffer ? e.newBufferFrom(o, "utf-8") : function(d) {
          var a, A, u, w, E, I = d.length, F = 0;
          for (w = 0; w < I; w++)
            (64512 & (A = d.charCodeAt(w))) == 55296 && w + 1 < I && (64512 & (u = d.charCodeAt(w + 1))) == 56320 && (A = 65536 + (A - 55296 << 10) + (u - 56320), w++), F += A < 128 ? 1 : A < 2048 ? 2 : A < 65536 ? 3 : 4;
          for (a = s.uint8array ? new Uint8Array(F) : new Array(F), w = E = 0; E < F; w++)
            (64512 & (A = d.charCodeAt(w))) == 55296 && w + 1 < I && (64512 & (u = d.charCodeAt(w + 1))) == 56320 && (A = 65536 + (A - 55296 << 10) + (u - 56320), w++), A < 128 ? a[E++] = A : (A < 2048 ? a[E++] = 192 | A >>> 6 : (A < 65536 ? a[E++] = 224 | A >>> 12 : (a[E++] = 240 | A >>> 18, a[E++] = 128 | A >>> 12 & 63), a[E++] = 128 | A >>> 6 & 63), a[E++] = 128 | 63 & A);
          return a;
        }(o);
      }, c.utf8decode = function(o) {
        return s.nodebuffer ? r.transformTo("nodebuffer", o).toString("utf-8") : function(d) {
          var a, A, u, w, E = d.length, I = new Array(2 * E);
          for (a = A = 0; a < E; )
            if ((u = d[a++]) < 128)
              I[A++] = u;
            else if (4 < (w = f[u]))
              I[A++] = 65533, a += w - 1;
            else {
              for (u &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && a < E; )
                u = u << 6 | 63 & d[a++], w--;
              1 < w ? I[A++] = 65533 : u < 65536 ? I[A++] = u : (u -= 65536, I[A++] = 55296 | u >> 10 & 1023, I[A++] = 56320 | 1023 & u);
            }
          return I.length !== A && (I.subarray ? I = I.subarray(0, A) : I.length = A), r.applyFromCharCode(I);
        }(o = r.transformTo(s.uint8array ? "uint8array" : "array", o));
      }, r.inherits(g, l), g.prototype.processChunk = function(o) {
        var d = r.transformTo(s.uint8array ? "uint8array" : "array", o.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var a = d;
            (d = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), d.set(a, this.leftOver.length);
          } else
            d = this.leftOver.concat(d);
          this.leftOver = null;
        }
        var A = function(w, E) {
          var I;
          for ((E = E || w.length) > w.length && (E = w.length), I = E - 1; 0 <= I && (192 & w[I]) == 128; )
            I--;
          return I < 0 || I === 0 ? E : I + f[w[I]] > E ? I : E;
        }(d), u = d;
        A !== d.length && (s.uint8array ? (u = d.subarray(0, A), this.leftOver = d.subarray(A, d.length)) : (u = d.slice(0, A), this.leftOver = d.slice(A, d.length))), this.push({ data: c.utf8decode(u), meta: o.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = g, r.inherits(v, l), v.prototype.processChunk = function(o) {
        this.push({ data: c.utf8encode(o.data), meta: o.meta });
      }, c.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(i, y, c) {
      var r = i("./support"), s = i("./base64"), e = i("./nodejsUtils"), l = i("./external");
      function f(a) {
        return a;
      }
      function b(a, A) {
        for (var u = 0; u < a.length; ++u)
          A[u] = 255 & a.charCodeAt(u);
        return A;
      }
      i("setimmediate"), c.newBlob = function(a, A) {
        c.checkSupport("blob");
        try {
          return new Blob([a], { type: A });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(a), u.getBlob(A);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(a, A, u) {
        var w = [], E = 0, I = a.length;
        if (I <= u)
          return String.fromCharCode.apply(null, a);
        for (; E < I; )
          A === "array" || A === "nodebuffer" ? w.push(String.fromCharCode.apply(null, a.slice(E, Math.min(E + u, I)))) : w.push(String.fromCharCode.apply(null, a.subarray(E, Math.min(E + u, I)))), E += u;
        return w.join("");
      }, stringifyByChar: function(a) {
        for (var A = "", u = 0; u < a.length; u++)
          A += String.fromCharCode(a[u]);
        return A;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return r.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return r.nodebuffer && String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function v(a) {
        var A = 65536, u = c.getTypeOf(a), w = !0;
        if (u === "uint8array" ? w = g.applyCanBeUsed.uint8array : u === "nodebuffer" && (w = g.applyCanBeUsed.nodebuffer), w)
          for (; 1 < A; )
            try {
              return g.stringifyByChunk(a, u, A);
            } catch {
              A = Math.floor(A / 2);
            }
        return g.stringifyByChar(a);
      }
      function o(a, A) {
        for (var u = 0; u < a.length; u++)
          A[u] = a[u];
        return A;
      }
      c.applyFromCharCode = v;
      var d = {};
      d.string = { string: f, array: function(a) {
        return b(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return d.string.uint8array(a).buffer;
      }, uint8array: function(a) {
        return b(a, new Uint8Array(a.length));
      }, nodebuffer: function(a) {
        return b(a, e.allocBuffer(a.length));
      } }, d.array = { string: v, array: f, arraybuffer: function(a) {
        return new Uint8Array(a).buffer;
      }, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return e.newBufferFrom(a);
      } }, d.arraybuffer = { string: function(a) {
        return v(new Uint8Array(a));
      }, array: function(a) {
        return o(new Uint8Array(a), new Array(a.byteLength));
      }, arraybuffer: f, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return e.newBufferFrom(new Uint8Array(a));
      } }, d.uint8array = { string: v, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return a.buffer;
      }, uint8array: f, nodebuffer: function(a) {
        return e.newBufferFrom(a);
      } }, d.nodebuffer = { string: v, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return d.nodebuffer.uint8array(a).buffer;
      }, uint8array: function(a) {
        return o(a, new Uint8Array(a.length));
      }, nodebuffer: f }, c.transformTo = function(a, A) {
        if (A = A || "", !a)
          return A;
        c.checkSupport(a);
        var u = c.getTypeOf(A);
        return d[u][a](A);
      }, c.resolve = function(a) {
        for (var A = a.split("/"), u = [], w = 0; w < A.length; w++) {
          var E = A[w];
          E === "." || E === "" && w !== 0 && w !== A.length - 1 || (E === ".." ? u.pop() : u.push(E));
        }
        return u.join("/");
      }, c.getTypeOf = function(a) {
        return typeof a == "string" ? "string" : Object.prototype.toString.call(a) === "[object Array]" ? "array" : r.nodebuffer && e.isBuffer(a) ? "nodebuffer" : r.uint8array && a instanceof Uint8Array ? "uint8array" : r.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(a) {
        if (!r[a.toLowerCase()])
          throw new Error(a + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(a) {
        var A, u, w = "";
        for (u = 0; u < (a || "").length; u++)
          w += "\\x" + ((A = a.charCodeAt(u)) < 16 ? "0" : "") + A.toString(16).toUpperCase();
        return w;
      }, c.delay = function(a, A, u) {
        setImmediate(function() {
          a.apply(u || null, A || []);
        });
      }, c.inherits = function(a, A) {
        function u() {
        }
        u.prototype = A.prototype, a.prototype = new u();
      }, c.extend = function() {
        var a, A, u = {};
        for (a = 0; a < arguments.length; a++)
          for (A in arguments[a])
            Object.prototype.hasOwnProperty.call(arguments[a], A) && u[A] === void 0 && (u[A] = arguments[a][A]);
        return u;
      }, c.prepareContent = function(a, A, u, w, E) {
        return l.Promise.resolve(A).then(function(I) {
          return r.blob && (I instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(I)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(F, j) {
            var V = new FileReader();
            V.onload = function(Z) {
              F(Z.target.result);
            }, V.onerror = function(Z) {
              j(Z.target.error);
            }, V.readAsArrayBuffer(I);
          }) : I;
        }).then(function(I) {
          var F = c.getTypeOf(I);
          return F ? (F === "arraybuffer" ? I = c.transformTo("uint8array", I) : F === "string" && (E ? I = s.decode(I) : u && w !== !0 && (I = function(j) {
            return b(j, r.uint8array ? new Uint8Array(j.length) : new Array(j.length));
          }(I))), I) : l.Promise.reject(new Error("Can't read the data of '" + a + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(i, y, c) {
      var r = i("./reader/readerFor"), s = i("./utils"), e = i("./signature"), l = i("./zipEntry"), f = i("./support");
      function b(g) {
        this.files = [], this.loadOptions = g;
      }
      b.prototype = { checkSignature: function(g) {
        if (!this.reader.readAndCheckSignature(g)) {
          this.reader.index -= 4;
          var v = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(v) + ", expected " + s.pretty(g) + ")");
        }
      }, isSignature: function(g, v) {
        var o = this.reader.index;
        this.reader.setIndex(g);
        var d = this.reader.readString(4) === v;
        return this.reader.setIndex(o), d;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var g = this.reader.readData(this.zipCommentLength), v = f.uint8array ? "uint8array" : "array", o = s.transformTo(v, g);
        this.zipComment = this.loadOptions.decodeFileName(o);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var g, v, o, d = this.zip64EndOfCentralSize - 44; 0 < d; )
          g = this.reader.readInt(2), v = this.reader.readInt(4), o = this.reader.readData(v), this.zip64ExtensibleData[g] = { id: g, length: v, value: o };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var g, v;
        for (g = 0; g < this.files.length; g++)
          v = this.files[g], this.reader.setIndex(v.localHeaderOffset), this.checkSignature(e.LOCAL_FILE_HEADER), v.readLocalPart(this.reader), v.handleUTF8(), v.processAttributes();
      }, readCentralDir: function() {
        var g;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(e.CENTRAL_FILE_HEADER); )
          (g = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(g);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var g = this.reader.lastIndexOfSignature(e.CENTRAL_DIRECTORY_END);
        if (g < 0)
          throw this.isSignature(0, e.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(g);
        var v = g;
        if (this.checkSignature(e.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (g = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(g), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, e.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var o = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (o += 20, o += 12 + this.zip64EndOfCentralSize);
        var d = v - o;
        if (0 < d)
          this.isSignature(v, e.CENTRAL_FILE_HEADER) || (this.reader.zero = d);
        else if (d < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(d) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = r(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, y.exports = b;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(i, y, c) {
      var r = i("./reader/readerFor"), s = i("./utils"), e = i("./compressedObject"), l = i("./crc32"), f = i("./utf8"), b = i("./compressions"), g = i("./support");
      function v(o, d) {
        this.options = o, this.loadOptions = d;
      }
      v.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(o) {
        var d, a;
        if (o.skip(22), this.fileNameLength = o.readInt(2), a = o.readInt(2), this.fileName = o.readData(this.fileNameLength), o.skip(a), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((d = function(A) {
          for (var u in b)
            if (Object.prototype.hasOwnProperty.call(b, u) && b[u].magic === A)
              return b[u];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new e(this.compressedSize, this.uncompressedSize, this.crc32, d, o.readData(this.compressedSize));
      }, readCentralPart: function(o) {
        this.versionMadeBy = o.readInt(2), o.skip(2), this.bitFlag = o.readInt(2), this.compressionMethod = o.readString(2), this.date = o.readDate(), this.crc32 = o.readInt(4), this.compressedSize = o.readInt(4), this.uncompressedSize = o.readInt(4);
        var d = o.readInt(2);
        if (this.extraFieldsLength = o.readInt(2), this.fileCommentLength = o.readInt(2), this.diskNumberStart = o.readInt(2), this.internalFileAttributes = o.readInt(2), this.externalFileAttributes = o.readInt(4), this.localHeaderOffset = o.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        o.skip(d), this.readExtraFields(o), this.parseZIP64ExtraField(o), this.fileComment = o.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var o = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), o == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), o == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var o = r(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = o.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = o.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = o.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = o.readInt(4));
        }
      }, readExtraFields: function(o) {
        var d, a, A, u = o.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); o.index + 4 < u; )
          d = o.readInt(2), a = o.readInt(2), A = o.readData(a), this.extraFields[d] = { id: d, length: a, value: A };
        o.setIndex(u);
      }, handleUTF8: function() {
        var o = g.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = f.utf8decode(this.fileName), this.fileCommentStr = f.utf8decode(this.fileComment);
        else {
          var d = this.findExtraFieldUnicodePath();
          if (d !== null)
            this.fileNameStr = d;
          else {
            var a = s.transformTo(o, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(a);
          }
          var A = this.findExtraFieldUnicodeComment();
          if (A !== null)
            this.fileCommentStr = A;
          else {
            var u = s.transformTo(o, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var o = this.extraFields[28789];
        if (o) {
          var d = r(o.value);
          return d.readInt(1) !== 1 || l(this.fileName) !== d.readInt(4) ? null : f.utf8decode(d.readData(o.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var o = this.extraFields[25461];
        if (o) {
          var d = r(o.value);
          return d.readInt(1) !== 1 || l(this.fileComment) !== d.readInt(4) ? null : f.utf8decode(d.readData(o.length - 5));
        }
        return null;
      } }, y.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(i, y, c) {
      function r(d, a, A) {
        this.name = d, this.dir = A.dir, this.date = A.date, this.comment = A.comment, this.unixPermissions = A.unixPermissions, this.dosPermissions = A.dosPermissions, this._data = a, this._dataBinary = A.binary, this.options = { compression: A.compression, compressionOptions: A.compressionOptions };
      }
      var s = i("./stream/StreamHelper"), e = i("./stream/DataWorker"), l = i("./utf8"), f = i("./compressedObject"), b = i("./stream/GenericWorker");
      r.prototype = { internalStream: function(d) {
        var a = null, A = "string";
        try {
          if (!d)
            throw new Error("No output type specified.");
          var u = (A = d.toLowerCase()) === "string" || A === "text";
          A !== "binarystring" && A !== "text" || (A = "string"), a = this._decompressWorker();
          var w = !this._dataBinary;
          w && !u && (a = a.pipe(new l.Utf8EncodeWorker())), !w && u && (a = a.pipe(new l.Utf8DecodeWorker()));
        } catch (E) {
          (a = new b("error")).error(E);
        }
        return new s(a, A, "");
      }, async: function(d, a) {
        return this.internalStream(d).accumulate(a);
      }, nodeStream: function(d, a) {
        return this.internalStream(d || "nodebuffer").toNodejsStream(a);
      }, _compressWorker: function(d, a) {
        if (this._data instanceof f && this._data.compression.magic === d.magic)
          return this._data.getCompressedWorker();
        var A = this._decompressWorker();
        return this._dataBinary || (A = A.pipe(new l.Utf8EncodeWorker())), f.createWorkerFrom(A, d, a);
      }, _decompressWorker: function() {
        return this._data instanceof f ? this._data.getContentWorker() : this._data instanceof b ? this._data : new e(this._data);
      } };
      for (var g = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], v = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, o = 0; o < g.length; o++)
        r.prototype[g[o]] = v;
      y.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(i, y, c) {
      (function(r) {
        var s, e, l = r.MutationObserver || r.WebKitMutationObserver;
        if (l) {
          var f = 0, b = new l(d), g = r.document.createTextNode("");
          b.observe(g, { characterData: !0 }), s = function() {
            g.data = f = ++f % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0)
          s = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
            var a = r.document.createElement("script");
            a.onreadystatechange = function() {
              d(), a.onreadystatechange = null, a.parentNode.removeChild(a), a = null;
            }, r.document.documentElement.appendChild(a);
          } : function() {
            setTimeout(d, 0);
          };
        else {
          var v = new r.MessageChannel();
          v.port1.onmessage = d, s = function() {
            v.port2.postMessage(0);
          };
        }
        var o = [];
        function d() {
          var a, A;
          e = !0;
          for (var u = o.length; u; ) {
            for (A = o, o = [], a = -1; ++a < u; )
              A[a]();
            u = o.length;
          }
          e = !1;
        }
        y.exports = function(a) {
          o.push(a) !== 1 || e || s();
        };
      }).call(this, typeof Ct < "u" ? Ct : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(i, y, c) {
      var r = i("immediate");
      function s() {
      }
      var e = {}, l = ["REJECTED"], f = ["FULFILLED"], b = ["PENDING"];
      function g(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = b, this.queue = [], this.outcome = void 0, u !== s && a(this, u);
      }
      function v(u, w, E) {
        this.promise = u, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function o(u, w, E) {
        r(function() {
          var I;
          try {
            I = w(E);
          } catch (F) {
            return e.reject(u, F);
          }
          I === u ? e.reject(u, new TypeError("Cannot resolve promise with itself")) : e.resolve(u, I);
        });
      }
      function d(u) {
        var w = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof w == "function")
          return function() {
            w.apply(u, arguments);
          };
      }
      function a(u, w) {
        var E = !1;
        function I(V) {
          E || (E = !0, e.reject(u, V));
        }
        function F(V) {
          E || (E = !0, e.resolve(u, V));
        }
        var j = A(function() {
          w(F, I);
        });
        j.status === "error" && I(j.value);
      }
      function A(u, w) {
        var E = {};
        try {
          E.value = u(w), E.status = "success";
        } catch (I) {
          E.status = "error", E.value = I;
        }
        return E;
      }
      (y.exports = g).prototype.finally = function(u) {
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
        if (typeof u != "function" && this.state === f || typeof w != "function" && this.state === l)
          return this;
        var E = new this.constructor(s);
        return this.state !== b ? o(E, this.state === f ? u : w, this.outcome) : this.queue.push(new v(E, u, w)), E;
      }, v.prototype.callFulfilled = function(u) {
        e.resolve(this.promise, u);
      }, v.prototype.otherCallFulfilled = function(u) {
        o(this.promise, this.onFulfilled, u);
      }, v.prototype.callRejected = function(u) {
        e.reject(this.promise, u);
      }, v.prototype.otherCallRejected = function(u) {
        o(this.promise, this.onRejected, u);
      }, e.resolve = function(u, w) {
        var E = A(d, w);
        if (E.status === "error")
          return e.reject(u, E.value);
        var I = E.value;
        if (I)
          a(u, I);
        else {
          u.state = f, u.outcome = w;
          for (var F = -1, j = u.queue.length; ++F < j; )
            u.queue[F].callFulfilled(w);
        }
        return u;
      }, e.reject = function(u, w) {
        u.state = l, u.outcome = w;
        for (var E = -1, I = u.queue.length; ++E < I; )
          u.queue[E].callRejected(w);
        return u;
      }, g.resolve = function(u) {
        return u instanceof this ? u : e.resolve(new this(s), u);
      }, g.reject = function(u) {
        var w = new this(s);
        return e.reject(w, u);
      }, g.all = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, I = !1;
        if (!E)
          return this.resolve([]);
        for (var F = new Array(E), j = 0, V = -1, Z = new this(s); ++V < E; )
          z(u[V], V);
        return Z;
        function z(J, nt) {
          w.resolve(J).then(function(k) {
            F[nt] = k, ++j !== E || I || (I = !0, e.resolve(Z, F));
          }, function(k) {
            I || (I = !0, e.reject(Z, k));
          });
        }
      }, g.race = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, I = !1;
        if (!E)
          return this.resolve([]);
        for (var F = -1, j = new this(s); ++F < E; )
          V = u[F], w.resolve(V).then(function(Z) {
            I || (I = !0, e.resolve(j, Z));
          }, function(Z) {
            I || (I = !0, e.reject(j, Z));
          });
        var V;
        return j;
      };
    }, { immediate: 36 }], 38: [function(i, y, c) {
      var r = {};
      (0, i("./lib/utils/common").assign)(r, i("./lib/deflate"), i("./lib/inflate"), i("./lib/zlib/constants")), y.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(i, y, c) {
      var r = i("./zlib/deflate"), s = i("./utils/common"), e = i("./utils/strings"), l = i("./zlib/messages"), f = i("./zlib/zstream"), b = Object.prototype.toString, g = 0, v = -1, o = 0, d = 8;
      function a(u) {
        if (!(this instanceof a))
          return new a(u);
        this.options = s.assign({ level: v, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: o, to: "" }, u || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
        var E = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (E !== g)
          throw new Error(l[E]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var I;
          if (I = typeof w.dictionary == "string" ? e.string2buf(w.dictionary) : b.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (E = r.deflateSetDictionary(this.strm, I)) !== g)
            throw new Error(l[E]);
          this._dict_set = !0;
        }
      }
      function A(u, w) {
        var E = new a(w);
        if (E.push(u, !0), E.err)
          throw E.msg || l[E.err];
        return E.result;
      }
      a.prototype.push = function(u, w) {
        var E, I, F = this.strm, j = this.options.chunkSize;
        if (this.ended)
          return !1;
        I = w === ~~w ? w : w === !0 ? 4 : 0, typeof u == "string" ? F.input = e.string2buf(u) : b.call(u) === "[object ArrayBuffer]" ? F.input = new Uint8Array(u) : F.input = u, F.next_in = 0, F.avail_in = F.input.length;
        do {
          if (F.avail_out === 0 && (F.output = new s.Buf8(j), F.next_out = 0, F.avail_out = j), (E = r.deflate(F, I)) !== 1 && E !== g)
            return this.onEnd(E), !(this.ended = !0);
          F.avail_out !== 0 && (F.avail_in !== 0 || I !== 4 && I !== 2) || (this.options.to === "string" ? this.onData(e.buf2binstring(s.shrinkBuf(F.output, F.next_out))) : this.onData(s.shrinkBuf(F.output, F.next_out)));
        } while ((0 < F.avail_in || F.avail_out === 0) && E !== 1);
        return I === 4 ? (E = r.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === g) : I !== 2 || (this.onEnd(g), !(F.avail_out = 0));
      }, a.prototype.onData = function(u) {
        this.chunks.push(u);
      }, a.prototype.onEnd = function(u) {
        u === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = a, c.deflate = A, c.deflateRaw = function(u, w) {
        return (w = w || {}).raw = !0, A(u, w);
      }, c.gzip = function(u, w) {
        return (w = w || {}).gzip = !0, A(u, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(i, y, c) {
      var r = i("./zlib/inflate"), s = i("./utils/common"), e = i("./utils/strings"), l = i("./zlib/constants"), f = i("./zlib/messages"), b = i("./zlib/zstream"), g = i("./zlib/gzheader"), v = Object.prototype.toString;
      function o(a) {
        if (!(this instanceof o))
          return new o(a);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, a || {});
        var A = this.options;
        A.raw && 0 <= A.windowBits && A.windowBits < 16 && (A.windowBits = -A.windowBits, A.windowBits === 0 && (A.windowBits = -15)), !(0 <= A.windowBits && A.windowBits < 16) || a && a.windowBits || (A.windowBits += 32), 15 < A.windowBits && A.windowBits < 48 && !(15 & A.windowBits) && (A.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
        var u = r.inflateInit2(this.strm, A.windowBits);
        if (u !== l.Z_OK)
          throw new Error(f[u]);
        this.header = new g(), r.inflateGetHeader(this.strm, this.header);
      }
      function d(a, A) {
        var u = new o(A);
        if (u.push(a, !0), u.err)
          throw u.msg || f[u.err];
        return u.result;
      }
      o.prototype.push = function(a, A) {
        var u, w, E, I, F, j, V = this.strm, Z = this.options.chunkSize, z = this.options.dictionary, J = !1;
        if (this.ended)
          return !1;
        w = A === ~~A ? A : A === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof a == "string" ? V.input = e.binstring2buf(a) : v.call(a) === "[object ArrayBuffer]" ? V.input = new Uint8Array(a) : V.input = a, V.next_in = 0, V.avail_in = V.input.length;
        do {
          if (V.avail_out === 0 && (V.output = new s.Buf8(Z), V.next_out = 0, V.avail_out = Z), (u = r.inflate(V, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && z && (j = typeof z == "string" ? e.string2buf(z) : v.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, u = r.inflateSetDictionary(this.strm, j)), u === l.Z_BUF_ERROR && J === !0 && (u = l.Z_OK, J = !1), u !== l.Z_STREAM_END && u !== l.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          V.next_out && (V.avail_out !== 0 && u !== l.Z_STREAM_END && (V.avail_in !== 0 || w !== l.Z_FINISH && w !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = e.utf8border(V.output, V.next_out), I = V.next_out - E, F = e.buf2string(V.output, E), V.next_out = I, V.avail_out = Z - I, I && s.arraySet(V.output, V.output, E, I, 0), this.onData(F)) : this.onData(s.shrinkBuf(V.output, V.next_out)))), V.avail_in === 0 && V.avail_out === 0 && (J = !0);
        } while ((0 < V.avail_in || V.avail_out === 0) && u !== l.Z_STREAM_END);
        return u === l.Z_STREAM_END && (w = l.Z_FINISH), w === l.Z_FINISH ? (u = r.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === l.Z_OK) : w !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(V.avail_out = 0));
      }, o.prototype.onData = function(a) {
        this.chunks.push(a);
      }, o.prototype.onEnd = function(a) {
        a === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg;
      }, c.Inflate = o, c.inflate = d, c.inflateRaw = function(a, A) {
        return (A = A || {}).raw = !0, d(a, A);
      }, c.ungzip = d;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(i, y, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(l) {
        for (var f = Array.prototype.slice.call(arguments, 1); f.length; ) {
          var b = f.shift();
          if (b) {
            if (typeof b != "object")
              throw new TypeError(b + "must be non-object");
            for (var g in b)
              b.hasOwnProperty(g) && (l[g] = b[g]);
          }
        }
        return l;
      }, c.shrinkBuf = function(l, f) {
        return l.length === f ? l : l.subarray ? l.subarray(0, f) : (l.length = f, l);
      };
      var s = { arraySet: function(l, f, b, g, v) {
        if (f.subarray && l.subarray)
          l.set(f.subarray(b, b + g), v);
        else
          for (var o = 0; o < g; o++)
            l[v + o] = f[b + o];
      }, flattenChunks: function(l) {
        var f, b, g, v, o, d;
        for (f = g = 0, b = l.length; f < b; f++)
          g += l[f].length;
        for (d = new Uint8Array(g), f = v = 0, b = l.length; f < b; f++)
          o = l[f], d.set(o, v), v += o.length;
        return d;
      } }, e = { arraySet: function(l, f, b, g, v) {
        for (var o = 0; o < g; o++)
          l[v + o] = f[b + o];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      c.setTyped = function(l) {
        l ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, s)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, e));
      }, c.setTyped(r);
    }, {}], 42: [function(i, y, c) {
      var r = i("./common"), s = !0, e = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        e = !1;
      }
      for (var l = new r.Buf8(256), f = 0; f < 256; f++)
        l[f] = 252 <= f ? 6 : 248 <= f ? 5 : 240 <= f ? 4 : 224 <= f ? 3 : 192 <= f ? 2 : 1;
      function b(g, v) {
        if (v < 65537 && (g.subarray && e || !g.subarray && s))
          return String.fromCharCode.apply(null, r.shrinkBuf(g, v));
        for (var o = "", d = 0; d < v; d++)
          o += String.fromCharCode(g[d]);
        return o;
      }
      l[254] = l[254] = 1, c.string2buf = function(g) {
        var v, o, d, a, A, u = g.length, w = 0;
        for (a = 0; a < u; a++)
          (64512 & (o = g.charCodeAt(a))) == 55296 && a + 1 < u && (64512 & (d = g.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (d - 56320), a++), w += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4;
        for (v = new r.Buf8(w), a = A = 0; A < w; a++)
          (64512 & (o = g.charCodeAt(a))) == 55296 && a + 1 < u && (64512 & (d = g.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (d - 56320), a++), o < 128 ? v[A++] = o : (o < 2048 ? v[A++] = 192 | o >>> 6 : (o < 65536 ? v[A++] = 224 | o >>> 12 : (v[A++] = 240 | o >>> 18, v[A++] = 128 | o >>> 12 & 63), v[A++] = 128 | o >>> 6 & 63), v[A++] = 128 | 63 & o);
        return v;
      }, c.buf2binstring = function(g) {
        return b(g, g.length);
      }, c.binstring2buf = function(g) {
        for (var v = new r.Buf8(g.length), o = 0, d = v.length; o < d; o++)
          v[o] = g.charCodeAt(o);
        return v;
      }, c.buf2string = function(g, v) {
        var o, d, a, A, u = v || g.length, w = new Array(2 * u);
        for (o = d = 0; o < u; )
          if ((a = g[o++]) < 128)
            w[d++] = a;
          else if (4 < (A = l[a]))
            w[d++] = 65533, o += A - 1;
          else {
            for (a &= A === 2 ? 31 : A === 3 ? 15 : 7; 1 < A && o < u; )
              a = a << 6 | 63 & g[o++], A--;
            1 < A ? w[d++] = 65533 : a < 65536 ? w[d++] = a : (a -= 65536, w[d++] = 55296 | a >> 10 & 1023, w[d++] = 56320 | 1023 & a);
          }
        return b(w, d);
      }, c.utf8border = function(g, v) {
        var o;
        for ((v = v || g.length) > g.length && (v = g.length), o = v - 1; 0 <= o && (192 & g[o]) == 128; )
          o--;
        return o < 0 || o === 0 ? v : o + l[g[o]] > v ? o : v;
      };
    }, { "./common": 41 }], 43: [function(i, y, c) {
      y.exports = function(r, s, e, l) {
        for (var f = 65535 & r | 0, b = r >>> 16 & 65535 | 0, g = 0; e !== 0; ) {
          for (e -= g = 2e3 < e ? 2e3 : e; b = b + (f = f + s[l++] | 0) | 0, --g; )
            ;
          f %= 65521, b %= 65521;
        }
        return f | b << 16 | 0;
      };
    }, {}], 44: [function(i, y, c) {
      y.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(i, y, c) {
      var r = function() {
        for (var s, e = [], l = 0; l < 256; l++) {
          s = l;
          for (var f = 0; f < 8; f++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          e[l] = s;
        }
        return e;
      }();
      y.exports = function(s, e, l, f) {
        var b = r, g = f + l;
        s ^= -1;
        for (var v = f; v < g; v++)
          s = s >>> 8 ^ b[255 & (s ^ e[v])];
        return -1 ^ s;
      };
    }, {}], 46: [function(i, y, c) {
      var r, s = i("../utils/common"), e = i("./trees"), l = i("./adler32"), f = i("./crc32"), b = i("./messages"), g = 0, v = 4, o = 0, d = -2, a = -1, A = 4, u = 2, w = 8, E = 9, I = 286, F = 30, j = 19, V = 2 * I + 1, Z = 15, z = 3, J = 258, nt = J + z + 1, k = 42, D = 113, n = 1, G = 2, it = 3, x = 4;
      function O(t, M) {
        return t.msg = b[M], M;
      }
      function N(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function W(t) {
        for (var M = t.length; 0 <= --M; )
          t[M] = 0;
      }
      function S(t) {
        var M = t.state, T = M.pending;
        T > t.avail_out && (T = t.avail_out), T !== 0 && (s.arraySet(t.output, M.pending_buf, M.pending_out, T, t.next_out), t.next_out += T, M.pending_out += T, t.total_out += T, t.avail_out -= T, M.pending -= T, M.pending === 0 && (M.pending_out = 0));
      }
      function B(t, M) {
        e._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, M), t.block_start = t.strstart, S(t.strm);
      }
      function K(t, M) {
        t.pending_buf[t.pending++] = M;
      }
      function Y(t, M) {
        t.pending_buf[t.pending++] = M >>> 8 & 255, t.pending_buf[t.pending++] = 255 & M;
      }
      function H(t, M) {
        var T, m, h = t.max_chain_length, C = t.strstart, U = t.prev_length, L = t.nice_match, R = t.strstart > t.w_size - nt ? t.strstart - (t.w_size - nt) : 0, P = t.window, X = t.w_mask, Q = t.prev, tt = t.strstart + J, ut = P[C + U - 1], lt = P[C + U];
        t.prev_length >= t.good_match && (h >>= 2), L > t.lookahead && (L = t.lookahead);
        do
          if (P[(T = M) + U] === lt && P[T + U - 1] === ut && P[T] === P[C] && P[++T] === P[C + 1]) {
            C += 2, T++;
            do
              ;
            while (P[++C] === P[++T] && P[++C] === P[++T] && P[++C] === P[++T] && P[++C] === P[++T] && P[++C] === P[++T] && P[++C] === P[++T] && P[++C] === P[++T] && P[++C] === P[++T] && C < tt);
            if (m = J - (tt - C), C = tt - J, U < m) {
              if (t.match_start = M, L <= (U = m))
                break;
              ut = P[C + U - 1], lt = P[C + U];
            }
          }
        while ((M = Q[M & X]) > R && --h != 0);
        return U <= t.lookahead ? U : t.lookahead;
      }
      function ot(t) {
        var M, T, m, h, C, U, L, R, P, X, Q = t.w_size;
        do {
          if (h = t.window_size - t.lookahead - t.strstart, t.strstart >= Q + (Q - nt)) {
            for (s.arraySet(t.window, t.window, Q, Q, 0), t.match_start -= Q, t.strstart -= Q, t.block_start -= Q, M = T = t.hash_size; m = t.head[--M], t.head[M] = Q <= m ? m - Q : 0, --T; )
              ;
            for (M = T = Q; m = t.prev[--M], t.prev[M] = Q <= m ? m - Q : 0, --T; )
              ;
            h += Q;
          }
          if (t.strm.avail_in === 0)
            break;
          if (U = t.strm, L = t.window, R = t.strstart + t.lookahead, P = h, X = void 0, X = U.avail_in, P < X && (X = P), T = X === 0 ? 0 : (U.avail_in -= X, s.arraySet(L, U.input, U.next_in, X, R), U.state.wrap === 1 ? U.adler = l(U.adler, L, X, R) : U.state.wrap === 2 && (U.adler = f(U.adler, L, X, R)), U.next_in += X, U.total_in += X, X), t.lookahead += T, t.lookahead + t.insert >= z)
            for (C = t.strstart - t.insert, t.ins_h = t.window[C], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[C + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[C + z - 1]) & t.hash_mask, t.prev[C & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = C, C++, t.insert--, !(t.lookahead + t.insert < z)); )
              ;
        } while (t.lookahead < nt && t.strm.avail_in !== 0);
      }
      function mt(t, M) {
        for (var T, m; ; ) {
          if (t.lookahead < nt) {
            if (ot(t), t.lookahead < nt && M === g)
              return n;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), T !== 0 && t.strstart - T <= t.w_size - nt && (t.match_length = H(t, T)), t.match_length >= z)
            if (m = e._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            m = e._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (m && (B(t, !1), t.strm.avail_out === 0))
            return n;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, M === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? n : G;
      }
      function st(t, M) {
        for (var T, m, h; ; ) {
          if (t.lookahead < nt) {
            if (ot(t), t.lookahead < nt && M === g)
              return n;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, T !== 0 && t.prev_length < t.max_lazy_match && t.strstart - T <= t.w_size - nt && (t.match_length = H(t, T), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (h = t.strstart + t.lookahead - z, m = e._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= h && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, m && (B(t, !1), t.strm.avail_out === 0))
              return n;
          } else if (t.match_available) {
            if ((m = e._tr_tally(t, 0, t.window[t.strstart - 1])) && B(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return n;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (m = e._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, M === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? n : G;
      }
      function at(t, M, T, m, h) {
        this.good_length = t, this.max_lazy = M, this.nice_length = T, this.max_chain = m, this.func = h;
      }
      function ft() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * V), this.dyn_dtree = new s.Buf16(2 * (2 * F + 1)), this.bl_tree = new s.Buf16(2 * (2 * j + 1)), W(this.dyn_ltree), W(this.dyn_dtree), W(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(Z + 1), this.heap = new s.Buf16(2 * I + 1), W(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * I + 1), W(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function At(t) {
        var M;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (M = t.state).pending = 0, M.pending_out = 0, M.wrap < 0 && (M.wrap = -M.wrap), M.status = M.wrap ? k : D, t.adler = M.wrap === 2 ? 0 : 1, M.last_flush = g, e._tr_init(M), o) : O(t, d);
      }
      function ct(t) {
        var M = At(t);
        return M === o && function(T) {
          T.window_size = 2 * T.w_size, W(T.head), T.max_lazy_match = r[T.level].max_lazy, T.good_match = r[T.level].good_length, T.nice_match = r[T.level].nice_length, T.max_chain_length = r[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = z - 1, T.match_available = 0, T.ins_h = 0;
        }(t.state), M;
      }
      function dt(t, M, T, m, h, C) {
        if (!t)
          return d;
        var U = 1;
        if (M === a && (M = 6), m < 0 ? (U = 0, m = -m) : 15 < m && (U = 2, m -= 16), h < 1 || E < h || T !== w || m < 8 || 15 < m || M < 0 || 9 < M || C < 0 || A < C)
          return O(t, d);
        m === 8 && (m = 9);
        var L = new ft();
        return (t.state = L).strm = t, L.wrap = U, L.gzhead = null, L.w_bits = m, L.w_size = 1 << L.w_bits, L.w_mask = L.w_size - 1, L.hash_bits = h + 7, L.hash_size = 1 << L.hash_bits, L.hash_mask = L.hash_size - 1, L.hash_shift = ~~((L.hash_bits + z - 1) / z), L.window = new s.Buf8(2 * L.w_size), L.head = new s.Buf16(L.hash_size), L.prev = new s.Buf16(L.w_size), L.lit_bufsize = 1 << h + 6, L.pending_buf_size = 4 * L.lit_bufsize, L.pending_buf = new s.Buf8(L.pending_buf_size), L.d_buf = 1 * L.lit_bufsize, L.l_buf = 3 * L.lit_bufsize, L.level = M, L.strategy = C, L.method = T, ct(t);
      }
      r = [new at(0, 0, 0, 0, function(t, M) {
        var T = 65535;
        for (T > t.pending_buf_size - 5 && (T = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ot(t), t.lookahead === 0 && M === g)
              return n;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var m = t.block_start + T;
          if ((t.strstart === 0 || t.strstart >= m) && (t.lookahead = t.strstart - m, t.strstart = m, B(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - nt && (B(t, !1), t.strm.avail_out === 0))
            return n;
        }
        return t.insert = 0, M === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : (t.strstart > t.block_start && (B(t, !1), t.strm.avail_out), n);
      }), new at(4, 4, 8, 4, mt), new at(4, 5, 16, 8, mt), new at(4, 6, 32, 32, mt), new at(4, 4, 16, 16, st), new at(8, 16, 32, 32, st), new at(8, 16, 128, 128, st), new at(8, 32, 128, 256, st), new at(32, 128, 258, 1024, st), new at(32, 258, 258, 4096, st)], c.deflateInit = function(t, M) {
        return dt(t, M, w, 15, 8, 0);
      }, c.deflateInit2 = dt, c.deflateReset = ct, c.deflateResetKeep = At, c.deflateSetHeader = function(t, M) {
        return t && t.state ? t.state.wrap !== 2 ? d : (t.state.gzhead = M, o) : d;
      }, c.deflate = function(t, M) {
        var T, m, h, C;
        if (!t || !t.state || 5 < M || M < 0)
          return t ? O(t, d) : d;
        if (m = t.state, !t.output || !t.input && t.avail_in !== 0 || m.status === 666 && M !== v)
          return O(t, t.avail_out === 0 ? -5 : d);
        if (m.strm = t, T = m.last_flush, m.last_flush = M, m.status === k)
          if (m.wrap === 2)
            t.adler = 0, K(m, 31), K(m, 139), K(m, 8), m.gzhead ? (K(m, (m.gzhead.text ? 1 : 0) + (m.gzhead.hcrc ? 2 : 0) + (m.gzhead.extra ? 4 : 0) + (m.gzhead.name ? 8 : 0) + (m.gzhead.comment ? 16 : 0)), K(m, 255 & m.gzhead.time), K(m, m.gzhead.time >> 8 & 255), K(m, m.gzhead.time >> 16 & 255), K(m, m.gzhead.time >> 24 & 255), K(m, m.level === 9 ? 2 : 2 <= m.strategy || m.level < 2 ? 4 : 0), K(m, 255 & m.gzhead.os), m.gzhead.extra && m.gzhead.extra.length && (K(m, 255 & m.gzhead.extra.length), K(m, m.gzhead.extra.length >> 8 & 255)), m.gzhead.hcrc && (t.adler = f(t.adler, m.pending_buf, m.pending, 0)), m.gzindex = 0, m.status = 69) : (K(m, 0), K(m, 0), K(m, 0), K(m, 0), K(m, 0), K(m, m.level === 9 ? 2 : 2 <= m.strategy || m.level < 2 ? 4 : 0), K(m, 3), m.status = D);
          else {
            var U = w + (m.w_bits - 8 << 4) << 8;
            U |= (2 <= m.strategy || m.level < 2 ? 0 : m.level < 6 ? 1 : m.level === 6 ? 2 : 3) << 6, m.strstart !== 0 && (U |= 32), U += 31 - U % 31, m.status = D, Y(m, U), m.strstart !== 0 && (Y(m, t.adler >>> 16), Y(m, 65535 & t.adler)), t.adler = 1;
          }
        if (m.status === 69)
          if (m.gzhead.extra) {
            for (h = m.pending; m.gzindex < (65535 & m.gzhead.extra.length) && (m.pending !== m.pending_buf_size || (m.gzhead.hcrc && m.pending > h && (t.adler = f(t.adler, m.pending_buf, m.pending - h, h)), S(t), h = m.pending, m.pending !== m.pending_buf_size)); )
              K(m, 255 & m.gzhead.extra[m.gzindex]), m.gzindex++;
            m.gzhead.hcrc && m.pending > h && (t.adler = f(t.adler, m.pending_buf, m.pending - h, h)), m.gzindex === m.gzhead.extra.length && (m.gzindex = 0, m.status = 73);
          } else
            m.status = 73;
        if (m.status === 73)
          if (m.gzhead.name) {
            h = m.pending;
            do {
              if (m.pending === m.pending_buf_size && (m.gzhead.hcrc && m.pending > h && (t.adler = f(t.adler, m.pending_buf, m.pending - h, h)), S(t), h = m.pending, m.pending === m.pending_buf_size)) {
                C = 1;
                break;
              }
              C = m.gzindex < m.gzhead.name.length ? 255 & m.gzhead.name.charCodeAt(m.gzindex++) : 0, K(m, C);
            } while (C !== 0);
            m.gzhead.hcrc && m.pending > h && (t.adler = f(t.adler, m.pending_buf, m.pending - h, h)), C === 0 && (m.gzindex = 0, m.status = 91);
          } else
            m.status = 91;
        if (m.status === 91)
          if (m.gzhead.comment) {
            h = m.pending;
            do {
              if (m.pending === m.pending_buf_size && (m.gzhead.hcrc && m.pending > h && (t.adler = f(t.adler, m.pending_buf, m.pending - h, h)), S(t), h = m.pending, m.pending === m.pending_buf_size)) {
                C = 1;
                break;
              }
              C = m.gzindex < m.gzhead.comment.length ? 255 & m.gzhead.comment.charCodeAt(m.gzindex++) : 0, K(m, C);
            } while (C !== 0);
            m.gzhead.hcrc && m.pending > h && (t.adler = f(t.adler, m.pending_buf, m.pending - h, h)), C === 0 && (m.status = 103);
          } else
            m.status = 103;
        if (m.status === 103 && (m.gzhead.hcrc ? (m.pending + 2 > m.pending_buf_size && S(t), m.pending + 2 <= m.pending_buf_size && (K(m, 255 & t.adler), K(m, t.adler >> 8 & 255), t.adler = 0, m.status = D)) : m.status = D), m.pending !== 0) {
          if (S(t), t.avail_out === 0)
            return m.last_flush = -1, o;
        } else if (t.avail_in === 0 && N(M) <= N(T) && M !== v)
          return O(t, -5);
        if (m.status === 666 && t.avail_in !== 0)
          return O(t, -5);
        if (t.avail_in !== 0 || m.lookahead !== 0 || M !== g && m.status !== 666) {
          var L = m.strategy === 2 ? function(R, P) {
            for (var X; ; ) {
              if (R.lookahead === 0 && (ot(R), R.lookahead === 0)) {
                if (P === g)
                  return n;
                break;
              }
              if (R.match_length = 0, X = e._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, X && (B(R, !1), R.strm.avail_out === 0))
                return n;
            }
            return R.insert = 0, P === v ? (B(R, !0), R.strm.avail_out === 0 ? it : x) : R.last_lit && (B(R, !1), R.strm.avail_out === 0) ? n : G;
          }(m, M) : m.strategy === 3 ? function(R, P) {
            for (var X, Q, tt, ut, lt = R.window; ; ) {
              if (R.lookahead <= J) {
                if (ot(R), R.lookahead <= J && P === g)
                  return n;
                if (R.lookahead === 0)
                  break;
              }
              if (R.match_length = 0, R.lookahead >= z && 0 < R.strstart && (Q = lt[tt = R.strstart - 1]) === lt[++tt] && Q === lt[++tt] && Q === lt[++tt]) {
                ut = R.strstart + J;
                do
                  ;
                while (Q === lt[++tt] && Q === lt[++tt] && Q === lt[++tt] && Q === lt[++tt] && Q === lt[++tt] && Q === lt[++tt] && Q === lt[++tt] && Q === lt[++tt] && tt < ut);
                R.match_length = J - (ut - tt), R.match_length > R.lookahead && (R.match_length = R.lookahead);
              }
              if (R.match_length >= z ? (X = e._tr_tally(R, 1, R.match_length - z), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : (X = e._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), X && (B(R, !1), R.strm.avail_out === 0))
                return n;
            }
            return R.insert = 0, P === v ? (B(R, !0), R.strm.avail_out === 0 ? it : x) : R.last_lit && (B(R, !1), R.strm.avail_out === 0) ? n : G;
          }(m, M) : r[m.level].func(m, M);
          if (L !== it && L !== x || (m.status = 666), L === n || L === it)
            return t.avail_out === 0 && (m.last_flush = -1), o;
          if (L === G && (M === 1 ? e._tr_align(m) : M !== 5 && (e._tr_stored_block(m, 0, 0, !1), M === 3 && (W(m.head), m.lookahead === 0 && (m.strstart = 0, m.block_start = 0, m.insert = 0))), S(t), t.avail_out === 0))
            return m.last_flush = -1, o;
        }
        return M !== v ? o : m.wrap <= 0 ? 1 : (m.wrap === 2 ? (K(m, 255 & t.adler), K(m, t.adler >> 8 & 255), K(m, t.adler >> 16 & 255), K(m, t.adler >> 24 & 255), K(m, 255 & t.total_in), K(m, t.total_in >> 8 & 255), K(m, t.total_in >> 16 & 255), K(m, t.total_in >> 24 & 255)) : (Y(m, t.adler >>> 16), Y(m, 65535 & t.adler)), S(t), 0 < m.wrap && (m.wrap = -m.wrap), m.pending !== 0 ? o : 1);
      }, c.deflateEnd = function(t) {
        var M;
        return t && t.state ? (M = t.state.status) !== k && M !== 69 && M !== 73 && M !== 91 && M !== 103 && M !== D && M !== 666 ? O(t, d) : (t.state = null, M === D ? O(t, -3) : o) : d;
      }, c.deflateSetDictionary = function(t, M) {
        var T, m, h, C, U, L, R, P, X = M.length;
        if (!t || !t.state || (C = (T = t.state).wrap) === 2 || C === 1 && T.status !== k || T.lookahead)
          return d;
        for (C === 1 && (t.adler = l(t.adler, M, X, 0)), T.wrap = 0, X >= T.w_size && (C === 0 && (W(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), P = new s.Buf8(T.w_size), s.arraySet(P, M, X - T.w_size, T.w_size, 0), M = P, X = T.w_size), U = t.avail_in, L = t.next_in, R = t.input, t.avail_in = X, t.next_in = 0, t.input = M, ot(T); T.lookahead >= z; ) {
          for (m = T.strstart, h = T.lookahead - (z - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[m + z - 1]) & T.hash_mask, T.prev[m & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = m, m++, --h; )
            ;
          T.strstart = m, T.lookahead = z - 1, ot(T);
        }
        return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = z - 1, T.match_available = 0, t.next_in = L, t.input = R, t.avail_in = U, T.wrap = C, o;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(i, y, c) {
      y.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(i, y, c) {
      y.exports = function(r, s) {
        var e, l, f, b, g, v, o, d, a, A, u, w, E, I, F, j, V, Z, z, J, nt, k, D, n, G;
        e = r.state, l = r.next_in, n = r.input, f = l + (r.avail_in - 5), b = r.next_out, G = r.output, g = b - (s - r.avail_out), v = b + (r.avail_out - 257), o = e.dmax, d = e.wsize, a = e.whave, A = e.wnext, u = e.window, w = e.hold, E = e.bits, I = e.lencode, F = e.distcode, j = (1 << e.lenbits) - 1, V = (1 << e.distbits) - 1;
        t:
          do {
            E < 15 && (w += n[l++] << E, E += 8, w += n[l++] << E, E += 8), Z = I[w & j];
            e:
              for (; ; ) {
                if (w >>>= z = Z >>> 24, E -= z, (z = Z >>> 16 & 255) === 0)
                  G[b++] = 65535 & Z;
                else {
                  if (!(16 & z)) {
                    if (!(64 & z)) {
                      Z = I[(65535 & Z) + (w & (1 << z) - 1)];
                      continue e;
                    }
                    if (32 & z) {
                      e.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", e.mode = 30;
                    break t;
                  }
                  J = 65535 & Z, (z &= 15) && (E < z && (w += n[l++] << E, E += 8), J += w & (1 << z) - 1, w >>>= z, E -= z), E < 15 && (w += n[l++] << E, E += 8, w += n[l++] << E, E += 8), Z = F[w & V];
                  n:
                    for (; ; ) {
                      if (w >>>= z = Z >>> 24, E -= z, !(16 & (z = Z >>> 16 & 255))) {
                        if (!(64 & z)) {
                          Z = F[(65535 & Z) + (w & (1 << z) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", e.mode = 30;
                        break t;
                      }
                      if (nt = 65535 & Z, E < (z &= 15) && (w += n[l++] << E, (E += 8) < z && (w += n[l++] << E, E += 8)), o < (nt += w & (1 << z) - 1)) {
                        r.msg = "invalid distance too far back", e.mode = 30;
                        break t;
                      }
                      if (w >>>= z, E -= z, (z = b - g) < nt) {
                        if (a < (z = nt - z) && e.sane) {
                          r.msg = "invalid distance too far back", e.mode = 30;
                          break t;
                        }
                        if (D = u, (k = 0) === A) {
                          if (k += d - z, z < J) {
                            for (J -= z; G[b++] = u[k++], --z; )
                              ;
                            k = b - nt, D = G;
                          }
                        } else if (A < z) {
                          if (k += d + A - z, (z -= A) < J) {
                            for (J -= z; G[b++] = u[k++], --z; )
                              ;
                            if (k = 0, A < J) {
                              for (J -= z = A; G[b++] = u[k++], --z; )
                                ;
                              k = b - nt, D = G;
                            }
                          }
                        } else if (k += A - z, z < J) {
                          for (J -= z; G[b++] = u[k++], --z; )
                            ;
                          k = b - nt, D = G;
                        }
                        for (; 2 < J; )
                          G[b++] = D[k++], G[b++] = D[k++], G[b++] = D[k++], J -= 3;
                        J && (G[b++] = D[k++], 1 < J && (G[b++] = D[k++]));
                      } else {
                        for (k = b - nt; G[b++] = G[k++], G[b++] = G[k++], G[b++] = G[k++], 2 < (J -= 3); )
                          ;
                        J && (G[b++] = G[k++], 1 < J && (G[b++] = G[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (l < f && b < v);
        l -= J = E >> 3, w &= (1 << (E -= J << 3)) - 1, r.next_in = l, r.next_out = b, r.avail_in = l < f ? f - l + 5 : 5 - (l - f), r.avail_out = b < v ? v - b + 257 : 257 - (b - v), e.hold = w, e.bits = E;
      };
    }, {}], 49: [function(i, y, c) {
      var r = i("../utils/common"), s = i("./adler32"), e = i("./crc32"), l = i("./inffast"), f = i("./inftrees"), b = 1, g = 2, v = 0, o = -2, d = 1, a = 852, A = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(k) {
        var D;
        return k && k.state ? (D = k.state, k.total_in = k.total_out = D.total = 0, k.msg = "", D.wrap && (k.adler = 1 & D.wrap), D.mode = d, D.last = 0, D.havedict = 0, D.dmax = 32768, D.head = null, D.hold = 0, D.bits = 0, D.lencode = D.lendyn = new r.Buf32(a), D.distcode = D.distdyn = new r.Buf32(A), D.sane = 1, D.back = -1, v) : o;
      }
      function I(k) {
        var D;
        return k && k.state ? ((D = k.state).wsize = 0, D.whave = 0, D.wnext = 0, E(k)) : o;
      }
      function F(k, D) {
        var n, G;
        return k && k.state ? (G = k.state, D < 0 ? (n = 0, D = -D) : (n = 1 + (D >> 4), D < 48 && (D &= 15)), D && (D < 8 || 15 < D) ? o : (G.window !== null && G.wbits !== D && (G.window = null), G.wrap = n, G.wbits = D, I(k))) : o;
      }
      function j(k, D) {
        var n, G;
        return k ? (G = new w(), (k.state = G).window = null, (n = F(k, D)) !== v && (k.state = null), n) : o;
      }
      var V, Z, z = !0;
      function J(k) {
        if (z) {
          var D;
          for (V = new r.Buf32(512), Z = new r.Buf32(32), D = 0; D < 144; )
            k.lens[D++] = 8;
          for (; D < 256; )
            k.lens[D++] = 9;
          for (; D < 280; )
            k.lens[D++] = 7;
          for (; D < 288; )
            k.lens[D++] = 8;
          for (f(b, k.lens, 0, 288, V, 0, k.work, { bits: 9 }), D = 0; D < 32; )
            k.lens[D++] = 5;
          f(g, k.lens, 0, 32, Z, 0, k.work, { bits: 5 }), z = !1;
        }
        k.lencode = V, k.lenbits = 9, k.distcode = Z, k.distbits = 5;
      }
      function nt(k, D, n, G) {
        var it, x = k.state;
        return x.window === null && (x.wsize = 1 << x.wbits, x.wnext = 0, x.whave = 0, x.window = new r.Buf8(x.wsize)), G >= x.wsize ? (r.arraySet(x.window, D, n - x.wsize, x.wsize, 0), x.wnext = 0, x.whave = x.wsize) : (G < (it = x.wsize - x.wnext) && (it = G), r.arraySet(x.window, D, n - G, it, x.wnext), (G -= it) ? (r.arraySet(x.window, D, n - G, G, 0), x.wnext = G, x.whave = x.wsize) : (x.wnext += it, x.wnext === x.wsize && (x.wnext = 0), x.whave < x.wsize && (x.whave += it))), 0;
      }
      c.inflateReset = I, c.inflateReset2 = F, c.inflateResetKeep = E, c.inflateInit = function(k) {
        return j(k, 15);
      }, c.inflateInit2 = j, c.inflate = function(k, D) {
        var n, G, it, x, O, N, W, S, B, K, Y, H, ot, mt, st, at, ft, At, ct, dt, t, M, T, m, h = 0, C = new r.Buf8(4), U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return o;
        (n = k.state).mode === 12 && (n.mode = 13), O = k.next_out, it = k.output, W = k.avail_out, x = k.next_in, G = k.input, N = k.avail_in, S = n.hold, B = n.bits, K = N, Y = W, M = v;
        t:
          for (; ; )
            switch (n.mode) {
              case d:
                if (n.wrap === 0) {
                  n.mode = 13;
                  break;
                }
                for (; B < 16; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                if (2 & n.wrap && S === 35615) {
                  C[n.check = 0] = 255 & S, C[1] = S >>> 8 & 255, n.check = e(n.check, C, 2, 0), B = S = 0, n.mode = 2;
                  break;
                }
                if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & S) << 8) + (S >> 8)) % 31) {
                  k.msg = "incorrect header check", n.mode = 30;
                  break;
                }
                if ((15 & S) != 8) {
                  k.msg = "unknown compression method", n.mode = 30;
                  break;
                }
                if (B -= 4, t = 8 + (15 & (S >>>= 4)), n.wbits === 0)
                  n.wbits = t;
                else if (t > n.wbits) {
                  k.msg = "invalid window size", n.mode = 30;
                  break;
                }
                n.dmax = 1 << t, k.adler = n.check = 1, n.mode = 512 & S ? 10 : 12, B = S = 0;
                break;
              case 2:
                for (; B < 16; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                if (n.flags = S, (255 & n.flags) != 8) {
                  k.msg = "unknown compression method", n.mode = 30;
                  break;
                }
                if (57344 & n.flags) {
                  k.msg = "unknown header flags set", n.mode = 30;
                  break;
                }
                n.head && (n.head.text = S >> 8 & 1), 512 & n.flags && (C[0] = 255 & S, C[1] = S >>> 8 & 255, n.check = e(n.check, C, 2, 0)), B = S = 0, n.mode = 3;
              case 3:
                for (; B < 32; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                n.head && (n.head.time = S), 512 & n.flags && (C[0] = 255 & S, C[1] = S >>> 8 & 255, C[2] = S >>> 16 & 255, C[3] = S >>> 24 & 255, n.check = e(n.check, C, 4, 0)), B = S = 0, n.mode = 4;
              case 4:
                for (; B < 16; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                n.head && (n.head.xflags = 255 & S, n.head.os = S >> 8), 512 & n.flags && (C[0] = 255 & S, C[1] = S >>> 8 & 255, n.check = e(n.check, C, 2, 0)), B = S = 0, n.mode = 5;
              case 5:
                if (1024 & n.flags) {
                  for (; B < 16; ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  n.length = S, n.head && (n.head.extra_len = S), 512 & n.flags && (C[0] = 255 & S, C[1] = S >>> 8 & 255, n.check = e(n.check, C, 2, 0)), B = S = 0;
                } else
                  n.head && (n.head.extra = null);
                n.mode = 6;
              case 6:
                if (1024 & n.flags && (N < (H = n.length) && (H = N), H && (n.head && (t = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(n.head.extra, G, x, H, t)), 512 & n.flags && (n.check = e(n.check, G, H, x)), N -= H, x += H, n.length -= H), n.length))
                  break t;
                n.length = 0, n.mode = 7;
              case 7:
                if (2048 & n.flags) {
                  if (N === 0)
                    break t;
                  for (H = 0; t = G[x + H++], n.head && t && n.length < 65536 && (n.head.name += String.fromCharCode(t)), t && H < N; )
                    ;
                  if (512 & n.flags && (n.check = e(n.check, G, H, x)), N -= H, x += H, t)
                    break t;
                } else
                  n.head && (n.head.name = null);
                n.length = 0, n.mode = 8;
              case 8:
                if (4096 & n.flags) {
                  if (N === 0)
                    break t;
                  for (H = 0; t = G[x + H++], n.head && t && n.length < 65536 && (n.head.comment += String.fromCharCode(t)), t && H < N; )
                    ;
                  if (512 & n.flags && (n.check = e(n.check, G, H, x)), N -= H, x += H, t)
                    break t;
                } else
                  n.head && (n.head.comment = null);
                n.mode = 9;
              case 9:
                if (512 & n.flags) {
                  for (; B < 16; ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  if (S !== (65535 & n.check)) {
                    k.msg = "header crc mismatch", n.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), k.adler = n.check = 0, n.mode = 12;
                break;
              case 10:
                for (; B < 32; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                k.adler = n.check = u(S), B = S = 0, n.mode = 11;
              case 11:
                if (n.havedict === 0)
                  return k.next_out = O, k.avail_out = W, k.next_in = x, k.avail_in = N, n.hold = S, n.bits = B, 2;
                k.adler = n.check = 1, n.mode = 12;
              case 12:
                if (D === 5 || D === 6)
                  break t;
              case 13:
                if (n.last) {
                  S >>>= 7 & B, B -= 7 & B, n.mode = 27;
                  break;
                }
                for (; B < 3; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                switch (n.last = 1 & S, B -= 1, 3 & (S >>>= 1)) {
                  case 0:
                    n.mode = 14;
                    break;
                  case 1:
                    if (J(n), n.mode = 20, D !== 6)
                      break;
                    S >>>= 2, B -= 2;
                    break t;
                  case 2:
                    n.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", n.mode = 30;
                }
                S >>>= 2, B -= 2;
                break;
              case 14:
                for (S >>>= 7 & B, B -= 7 & B; B < 32; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                if ((65535 & S) != (S >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", n.mode = 30;
                  break;
                }
                if (n.length = 65535 & S, B = S = 0, n.mode = 15, D === 6)
                  break t;
              case 15:
                n.mode = 16;
              case 16:
                if (H = n.length) {
                  if (N < H && (H = N), W < H && (H = W), H === 0)
                    break t;
                  r.arraySet(it, G, x, H, O), N -= H, x += H, W -= H, O += H, n.length -= H;
                  break;
                }
                n.mode = 12;
                break;
              case 17:
                for (; B < 14; ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                if (n.nlen = 257 + (31 & S), S >>>= 5, B -= 5, n.ndist = 1 + (31 & S), S >>>= 5, B -= 5, n.ncode = 4 + (15 & S), S >>>= 4, B -= 4, 286 < n.nlen || 30 < n.ndist) {
                  k.msg = "too many length or distance symbols", n.mode = 30;
                  break;
                }
                n.have = 0, n.mode = 18;
              case 18:
                for (; n.have < n.ncode; ) {
                  for (; B < 3; ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  n.lens[U[n.have++]] = 7 & S, S >>>= 3, B -= 3;
                }
                for (; n.have < 19; )
                  n.lens[U[n.have++]] = 0;
                if (n.lencode = n.lendyn, n.lenbits = 7, T = { bits: n.lenbits }, M = f(0, n.lens, 0, 19, n.lencode, 0, n.work, T), n.lenbits = T.bits, M) {
                  k.msg = "invalid code lengths set", n.mode = 30;
                  break;
                }
                n.have = 0, n.mode = 19;
              case 19:
                for (; n.have < n.nlen + n.ndist; ) {
                  for (; at = (h = n.lencode[S & (1 << n.lenbits) - 1]) >>> 16 & 255, ft = 65535 & h, !((st = h >>> 24) <= B); ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  if (ft < 16)
                    S >>>= st, B -= st, n.lens[n.have++] = ft;
                  else {
                    if (ft === 16) {
                      for (m = st + 2; B < m; ) {
                        if (N === 0)
                          break t;
                        N--, S += G[x++] << B, B += 8;
                      }
                      if (S >>>= st, B -= st, n.have === 0) {
                        k.msg = "invalid bit length repeat", n.mode = 30;
                        break;
                      }
                      t = n.lens[n.have - 1], H = 3 + (3 & S), S >>>= 2, B -= 2;
                    } else if (ft === 17) {
                      for (m = st + 3; B < m; ) {
                        if (N === 0)
                          break t;
                        N--, S += G[x++] << B, B += 8;
                      }
                      B -= st, t = 0, H = 3 + (7 & (S >>>= st)), S >>>= 3, B -= 3;
                    } else {
                      for (m = st + 7; B < m; ) {
                        if (N === 0)
                          break t;
                        N--, S += G[x++] << B, B += 8;
                      }
                      B -= st, t = 0, H = 11 + (127 & (S >>>= st)), S >>>= 7, B -= 7;
                    }
                    if (n.have + H > n.nlen + n.ndist) {
                      k.msg = "invalid bit length repeat", n.mode = 30;
                      break;
                    }
                    for (; H--; )
                      n.lens[n.have++] = t;
                  }
                }
                if (n.mode === 30)
                  break;
                if (n.lens[256] === 0) {
                  k.msg = "invalid code -- missing end-of-block", n.mode = 30;
                  break;
                }
                if (n.lenbits = 9, T = { bits: n.lenbits }, M = f(b, n.lens, 0, n.nlen, n.lencode, 0, n.work, T), n.lenbits = T.bits, M) {
                  k.msg = "invalid literal/lengths set", n.mode = 30;
                  break;
                }
                if (n.distbits = 6, n.distcode = n.distdyn, T = { bits: n.distbits }, M = f(g, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, T), n.distbits = T.bits, M) {
                  k.msg = "invalid distances set", n.mode = 30;
                  break;
                }
                if (n.mode = 20, D === 6)
                  break t;
              case 20:
                n.mode = 21;
              case 21:
                if (6 <= N && 258 <= W) {
                  k.next_out = O, k.avail_out = W, k.next_in = x, k.avail_in = N, n.hold = S, n.bits = B, l(k, Y), O = k.next_out, it = k.output, W = k.avail_out, x = k.next_in, G = k.input, N = k.avail_in, S = n.hold, B = n.bits, n.mode === 12 && (n.back = -1);
                  break;
                }
                for (n.back = 0; at = (h = n.lencode[S & (1 << n.lenbits) - 1]) >>> 16 & 255, ft = 65535 & h, !((st = h >>> 24) <= B); ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                if (at && !(240 & at)) {
                  for (At = st, ct = at, dt = ft; at = (h = n.lencode[dt + ((S & (1 << At + ct) - 1) >> At)]) >>> 16 & 255, ft = 65535 & h, !(At + (st = h >>> 24) <= B); ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  S >>>= At, B -= At, n.back += At;
                }
                if (S >>>= st, B -= st, n.back += st, n.length = ft, at === 0) {
                  n.mode = 26;
                  break;
                }
                if (32 & at) {
                  n.back = -1, n.mode = 12;
                  break;
                }
                if (64 & at) {
                  k.msg = "invalid literal/length code", n.mode = 30;
                  break;
                }
                n.extra = 15 & at, n.mode = 22;
              case 22:
                if (n.extra) {
                  for (m = n.extra; B < m; ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  n.length += S & (1 << n.extra) - 1, S >>>= n.extra, B -= n.extra, n.back += n.extra;
                }
                n.was = n.length, n.mode = 23;
              case 23:
                for (; at = (h = n.distcode[S & (1 << n.distbits) - 1]) >>> 16 & 255, ft = 65535 & h, !((st = h >>> 24) <= B); ) {
                  if (N === 0)
                    break t;
                  N--, S += G[x++] << B, B += 8;
                }
                if (!(240 & at)) {
                  for (At = st, ct = at, dt = ft; at = (h = n.distcode[dt + ((S & (1 << At + ct) - 1) >> At)]) >>> 16 & 255, ft = 65535 & h, !(At + (st = h >>> 24) <= B); ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  S >>>= At, B -= At, n.back += At;
                }
                if (S >>>= st, B -= st, n.back += st, 64 & at) {
                  k.msg = "invalid distance code", n.mode = 30;
                  break;
                }
                n.offset = ft, n.extra = 15 & at, n.mode = 24;
              case 24:
                if (n.extra) {
                  for (m = n.extra; B < m; ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  n.offset += S & (1 << n.extra) - 1, S >>>= n.extra, B -= n.extra, n.back += n.extra;
                }
                if (n.offset > n.dmax) {
                  k.msg = "invalid distance too far back", n.mode = 30;
                  break;
                }
                n.mode = 25;
              case 25:
                if (W === 0)
                  break t;
                if (H = Y - W, n.offset > H) {
                  if ((H = n.offset - H) > n.whave && n.sane) {
                    k.msg = "invalid distance too far back", n.mode = 30;
                    break;
                  }
                  ot = H > n.wnext ? (H -= n.wnext, n.wsize - H) : n.wnext - H, H > n.length && (H = n.length), mt = n.window;
                } else
                  mt = it, ot = O - n.offset, H = n.length;
                for (W < H && (H = W), W -= H, n.length -= H; it[O++] = mt[ot++], --H; )
                  ;
                n.length === 0 && (n.mode = 21);
                break;
              case 26:
                if (W === 0)
                  break t;
                it[O++] = n.length, W--, n.mode = 21;
                break;
              case 27:
                if (n.wrap) {
                  for (; B < 32; ) {
                    if (N === 0)
                      break t;
                    N--, S |= G[x++] << B, B += 8;
                  }
                  if (Y -= W, k.total_out += Y, n.total += Y, Y && (k.adler = n.check = n.flags ? e(n.check, it, Y, O - Y) : s(n.check, it, Y, O - Y)), Y = W, (n.flags ? S : u(S)) !== n.check) {
                    k.msg = "incorrect data check", n.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                n.mode = 28;
              case 28:
                if (n.wrap && n.flags) {
                  for (; B < 32; ) {
                    if (N === 0)
                      break t;
                    N--, S += G[x++] << B, B += 8;
                  }
                  if (S !== (4294967295 & n.total)) {
                    k.msg = "incorrect length check", n.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                n.mode = 29;
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
                return o;
            }
        return k.next_out = O, k.avail_out = W, k.next_in = x, k.avail_in = N, n.hold = S, n.bits = B, (n.wsize || Y !== k.avail_out && n.mode < 30 && (n.mode < 27 || D !== 4)) && nt(k, k.output, k.next_out, Y - k.avail_out) ? (n.mode = 31, -4) : (K -= k.avail_in, Y -= k.avail_out, k.total_in += K, k.total_out += Y, n.total += Y, n.wrap && Y && (k.adler = n.check = n.flags ? e(n.check, it, Y, k.next_out - Y) : s(n.check, it, Y, k.next_out - Y)), k.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === 12 ? 128 : 0) + (n.mode === 20 || n.mode === 15 ? 256 : 0), (K == 0 && Y === 0 || D === 4) && M === v && (M = -5), M);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return o;
        var D = k.state;
        return D.window && (D.window = null), k.state = null, v;
      }, c.inflateGetHeader = function(k, D) {
        var n;
        return k && k.state && 2 & (n = k.state).wrap ? ((n.head = D).done = !1, v) : o;
      }, c.inflateSetDictionary = function(k, D) {
        var n, G = D.length;
        return k && k.state ? (n = k.state).wrap !== 0 && n.mode !== 11 ? o : n.mode === 11 && s(1, D, G, 0) !== n.check ? -3 : nt(k, D, G, G) ? (n.mode = 31, -4) : (n.havedict = 1, v) : o;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(i, y, c) {
      var r = i("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], e = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], f = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      y.exports = function(b, g, v, o, d, a, A, u) {
        var w, E, I, F, j, V, Z, z, J, nt = u.bits, k = 0, D = 0, n = 0, G = 0, it = 0, x = 0, O = 0, N = 0, W = 0, S = 0, B = null, K = 0, Y = new r.Buf16(16), H = new r.Buf16(16), ot = null, mt = 0;
        for (k = 0; k <= 15; k++)
          Y[k] = 0;
        for (D = 0; D < o; D++)
          Y[g[v + D]]++;
        for (it = nt, G = 15; 1 <= G && Y[G] === 0; G--)
          ;
        if (G < it && (it = G), G === 0)
          return d[a++] = 20971520, d[a++] = 20971520, u.bits = 1, 0;
        for (n = 1; n < G && Y[n] === 0; n++)
          ;
        for (it < n && (it = n), k = N = 1; k <= 15; k++)
          if (N <<= 1, (N -= Y[k]) < 0)
            return -1;
        if (0 < N && (b === 0 || G !== 1))
          return -1;
        for (H[1] = 0, k = 1; k < 15; k++)
          H[k + 1] = H[k] + Y[k];
        for (D = 0; D < o; D++)
          g[v + D] !== 0 && (A[H[g[v + D]]++] = D);
        if (V = b === 0 ? (B = ot = A, 19) : b === 1 ? (B = s, K -= 257, ot = e, mt -= 257, 256) : (B = l, ot = f, -1), k = n, j = a, O = D = S = 0, I = -1, F = (W = 1 << (x = it)) - 1, b === 1 && 852 < W || b === 2 && 592 < W)
          return 1;
        for (; ; ) {
          for (Z = k - O, J = A[D] < V ? (z = 0, A[D]) : A[D] > V ? (z = ot[mt + A[D]], B[K + A[D]]) : (z = 96, 0), w = 1 << k - O, n = E = 1 << x; d[j + (S >> O) + (E -= w)] = Z << 24 | z << 16 | J | 0, E !== 0; )
            ;
          for (w = 1 << k - 1; S & w; )
            w >>= 1;
          if (w !== 0 ? (S &= w - 1, S += w) : S = 0, D++, --Y[k] == 0) {
            if (k === G)
              break;
            k = g[v + A[D]];
          }
          if (it < k && (S & F) !== I) {
            for (O === 0 && (O = it), j += n, N = 1 << (x = k - O); x + O < G && !((N -= Y[x + O]) <= 0); )
              x++, N <<= 1;
            if (W += 1 << x, b === 1 && 852 < W || b === 2 && 592 < W)
              return 1;
            d[I = S & F] = it << 24 | x << 16 | j - a | 0;
          }
        }
        return S !== 0 && (d[j + S] = k - O << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(i, y, c) {
      y.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(i, y, c) {
      var r = i("../utils/common"), s = 0, e = 1;
      function l(h) {
        for (var C = h.length; 0 <= --C; )
          h[C] = 0;
      }
      var f = 0, b = 29, g = 256, v = g + 1 + b, o = 30, d = 19, a = 2 * v + 1, A = 15, u = 16, w = 7, E = 256, I = 16, F = 17, j = 18, V = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], J = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], nt = new Array(2 * (v + 2));
      l(nt);
      var k = new Array(2 * o);
      l(k);
      var D = new Array(512);
      l(D);
      var n = new Array(256);
      l(n);
      var G = new Array(b);
      l(G);
      var it, x, O, N = new Array(o);
      function W(h, C, U, L, R) {
        this.static_tree = h, this.extra_bits = C, this.extra_base = U, this.elems = L, this.max_length = R, this.has_stree = h && h.length;
      }
      function S(h, C) {
        this.dyn_tree = h, this.max_code = 0, this.stat_desc = C;
      }
      function B(h) {
        return h < 256 ? D[h] : D[256 + (h >>> 7)];
      }
      function K(h, C) {
        h.pending_buf[h.pending++] = 255 & C, h.pending_buf[h.pending++] = C >>> 8 & 255;
      }
      function Y(h, C, U) {
        h.bi_valid > u - U ? (h.bi_buf |= C << h.bi_valid & 65535, K(h, h.bi_buf), h.bi_buf = C >> u - h.bi_valid, h.bi_valid += U - u) : (h.bi_buf |= C << h.bi_valid & 65535, h.bi_valid += U);
      }
      function H(h, C, U) {
        Y(h, U[2 * C], U[2 * C + 1]);
      }
      function ot(h, C) {
        for (var U = 0; U |= 1 & h, h >>>= 1, U <<= 1, 0 < --C; )
          ;
        return U >>> 1;
      }
      function mt(h, C, U) {
        var L, R, P = new Array(A + 1), X = 0;
        for (L = 1; L <= A; L++)
          P[L] = X = X + U[L - 1] << 1;
        for (R = 0; R <= C; R++) {
          var Q = h[2 * R + 1];
          Q !== 0 && (h[2 * R] = ot(P[Q]++, Q));
        }
      }
      function st(h) {
        var C;
        for (C = 0; C < v; C++)
          h.dyn_ltree[2 * C] = 0;
        for (C = 0; C < o; C++)
          h.dyn_dtree[2 * C] = 0;
        for (C = 0; C < d; C++)
          h.bl_tree[2 * C] = 0;
        h.dyn_ltree[2 * E] = 1, h.opt_len = h.static_len = 0, h.last_lit = h.matches = 0;
      }
      function at(h) {
        8 < h.bi_valid ? K(h, h.bi_buf) : 0 < h.bi_valid && (h.pending_buf[h.pending++] = h.bi_buf), h.bi_buf = 0, h.bi_valid = 0;
      }
      function ft(h, C, U, L) {
        var R = 2 * C, P = 2 * U;
        return h[R] < h[P] || h[R] === h[P] && L[C] <= L[U];
      }
      function At(h, C, U) {
        for (var L = h.heap[U], R = U << 1; R <= h.heap_len && (R < h.heap_len && ft(C, h.heap[R + 1], h.heap[R], h.depth) && R++, !ft(C, L, h.heap[R], h.depth)); )
          h.heap[U] = h.heap[R], U = R, R <<= 1;
        h.heap[U] = L;
      }
      function ct(h, C, U) {
        var L, R, P, X, Q = 0;
        if (h.last_lit !== 0)
          for (; L = h.pending_buf[h.d_buf + 2 * Q] << 8 | h.pending_buf[h.d_buf + 2 * Q + 1], R = h.pending_buf[h.l_buf + Q], Q++, L === 0 ? H(h, R, C) : (H(h, (P = n[R]) + g + 1, C), (X = V[P]) !== 0 && Y(h, R -= G[P], X), H(h, P = B(--L), U), (X = Z[P]) !== 0 && Y(h, L -= N[P], X)), Q < h.last_lit; )
            ;
        H(h, E, C);
      }
      function dt(h, C) {
        var U, L, R, P = C.dyn_tree, X = C.stat_desc.static_tree, Q = C.stat_desc.has_stree, tt = C.stat_desc.elems, ut = -1;
        for (h.heap_len = 0, h.heap_max = a, U = 0; U < tt; U++)
          P[2 * U] !== 0 ? (h.heap[++h.heap_len] = ut = U, h.depth[U] = 0) : P[2 * U + 1] = 0;
        for (; h.heap_len < 2; )
          P[2 * (R = h.heap[++h.heap_len] = ut < 2 ? ++ut : 0)] = 1, h.depth[R] = 0, h.opt_len--, Q && (h.static_len -= X[2 * R + 1]);
        for (C.max_code = ut, U = h.heap_len >> 1; 1 <= U; U--)
          At(h, P, U);
        for (R = tt; U = h.heap[1], h.heap[1] = h.heap[h.heap_len--], At(h, P, 1), L = h.heap[1], h.heap[--h.heap_max] = U, h.heap[--h.heap_max] = L, P[2 * R] = P[2 * U] + P[2 * L], h.depth[R] = (h.depth[U] >= h.depth[L] ? h.depth[U] : h.depth[L]) + 1, P[2 * U + 1] = P[2 * L + 1] = R, h.heap[1] = R++, At(h, P, 1), 2 <= h.heap_len; )
          ;
        h.heap[--h.heap_max] = h.heap[1], function(lt, et) {
          var gt, yt, wt, pt, Rt, Lt, Bt = et.dyn_tree, Qt = et.max_code, me = et.stat_desc.static_tree, ge = et.stat_desc.has_stree, be = et.stat_desc.extra_bits, Pt = et.stat_desc.extra_base, Ft = et.stat_desc.max_length, Tt = 0;
          for (pt = 0; pt <= A; pt++)
            lt.bl_count[pt] = 0;
          for (Bt[2 * lt.heap[lt.heap_max] + 1] = 0, gt = lt.heap_max + 1; gt < a; gt++)
            Ft < (pt = Bt[2 * Bt[2 * (yt = lt.heap[gt]) + 1] + 1] + 1) && (pt = Ft, Tt++), Bt[2 * yt + 1] = pt, Qt < yt || (lt.bl_count[pt]++, Rt = 0, Pt <= yt && (Rt = be[yt - Pt]), Lt = Bt[2 * yt], lt.opt_len += Lt * (pt + Rt), ge && (lt.static_len += Lt * (me[2 * yt + 1] + Rt)));
          if (Tt !== 0) {
            do {
              for (pt = Ft - 1; lt.bl_count[pt] === 0; )
                pt--;
              lt.bl_count[pt]--, lt.bl_count[pt + 1] += 2, lt.bl_count[Ft]--, Tt -= 2;
            } while (0 < Tt);
            for (pt = Ft; pt !== 0; pt--)
              for (yt = lt.bl_count[pt]; yt !== 0; )
                Qt < (wt = lt.heap[--gt]) || (Bt[2 * wt + 1] !== pt && (lt.opt_len += (pt - Bt[2 * wt + 1]) * Bt[2 * wt], Bt[2 * wt + 1] = pt), yt--);
          }
        }(h, C), mt(P, ut, h.bl_count);
      }
      function t(h, C, U) {
        var L, R, P = -1, X = C[1], Q = 0, tt = 7, ut = 4;
        for (X === 0 && (tt = 138, ut = 3), C[2 * (U + 1) + 1] = 65535, L = 0; L <= U; L++)
          R = X, X = C[2 * (L + 1) + 1], ++Q < tt && R === X || (Q < ut ? h.bl_tree[2 * R] += Q : R !== 0 ? (R !== P && h.bl_tree[2 * R]++, h.bl_tree[2 * I]++) : Q <= 10 ? h.bl_tree[2 * F]++ : h.bl_tree[2 * j]++, P = R, ut = (Q = 0) === X ? (tt = 138, 3) : R === X ? (tt = 6, 3) : (tt = 7, 4));
      }
      function M(h, C, U) {
        var L, R, P = -1, X = C[1], Q = 0, tt = 7, ut = 4;
        for (X === 0 && (tt = 138, ut = 3), L = 0; L <= U; L++)
          if (R = X, X = C[2 * (L + 1) + 1], !(++Q < tt && R === X)) {
            if (Q < ut)
              for (; H(h, R, h.bl_tree), --Q != 0; )
                ;
            else
              R !== 0 ? (R !== P && (H(h, R, h.bl_tree), Q--), H(h, I, h.bl_tree), Y(h, Q - 3, 2)) : Q <= 10 ? (H(h, F, h.bl_tree), Y(h, Q - 3, 3)) : (H(h, j, h.bl_tree), Y(h, Q - 11, 7));
            P = R, ut = (Q = 0) === X ? (tt = 138, 3) : R === X ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      l(N);
      var T = !1;
      function m(h, C, U, L) {
        Y(h, (f << 1) + (L ? 1 : 0), 3), function(R, P, X, Q) {
          at(R), Q && (K(R, X), K(R, ~X)), r.arraySet(R.pending_buf, R.window, P, X, R.pending), R.pending += X;
        }(h, C, U, !0);
      }
      c._tr_init = function(h) {
        T || (function() {
          var C, U, L, R, P, X = new Array(A + 1);
          for (R = L = 0; R < b - 1; R++)
            for (G[R] = L, C = 0; C < 1 << V[R]; C++)
              n[L++] = R;
          for (n[L - 1] = R, R = P = 0; R < 16; R++)
            for (N[R] = P, C = 0; C < 1 << Z[R]; C++)
              D[P++] = R;
          for (P >>= 7; R < o; R++)
            for (N[R] = P << 7, C = 0; C < 1 << Z[R] - 7; C++)
              D[256 + P++] = R;
          for (U = 0; U <= A; U++)
            X[U] = 0;
          for (C = 0; C <= 143; )
            nt[2 * C + 1] = 8, C++, X[8]++;
          for (; C <= 255; )
            nt[2 * C + 1] = 9, C++, X[9]++;
          for (; C <= 279; )
            nt[2 * C + 1] = 7, C++, X[7]++;
          for (; C <= 287; )
            nt[2 * C + 1] = 8, C++, X[8]++;
          for (mt(nt, v + 1, X), C = 0; C < o; C++)
            k[2 * C + 1] = 5, k[2 * C] = ot(C, 5);
          it = new W(nt, V, g + 1, v, A), x = new W(k, Z, 0, o, A), O = new W(new Array(0), z, 0, d, w);
        }(), T = !0), h.l_desc = new S(h.dyn_ltree, it), h.d_desc = new S(h.dyn_dtree, x), h.bl_desc = new S(h.bl_tree, O), h.bi_buf = 0, h.bi_valid = 0, st(h);
      }, c._tr_stored_block = m, c._tr_flush_block = function(h, C, U, L) {
        var R, P, X = 0;
        0 < h.level ? (h.strm.data_type === 2 && (h.strm.data_type = function(Q) {
          var tt, ut = 4093624447;
          for (tt = 0; tt <= 31; tt++, ut >>>= 1)
            if (1 & ut && Q.dyn_ltree[2 * tt] !== 0)
              return s;
          if (Q.dyn_ltree[18] !== 0 || Q.dyn_ltree[20] !== 0 || Q.dyn_ltree[26] !== 0)
            return e;
          for (tt = 32; tt < g; tt++)
            if (Q.dyn_ltree[2 * tt] !== 0)
              return e;
          return s;
        }(h)), dt(h, h.l_desc), dt(h, h.d_desc), X = function(Q) {
          var tt;
          for (t(Q, Q.dyn_ltree, Q.l_desc.max_code), t(Q, Q.dyn_dtree, Q.d_desc.max_code), dt(Q, Q.bl_desc), tt = d - 1; 3 <= tt && Q.bl_tree[2 * J[tt] + 1] === 0; tt--)
            ;
          return Q.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(h), R = h.opt_len + 3 + 7 >>> 3, (P = h.static_len + 3 + 7 >>> 3) <= R && (R = P)) : R = P = U + 5, U + 4 <= R && C !== -1 ? m(h, C, U, L) : h.strategy === 4 || P === R ? (Y(h, 2 + (L ? 1 : 0), 3), ct(h, nt, k)) : (Y(h, 4 + (L ? 1 : 0), 3), function(Q, tt, ut, lt) {
          var et;
          for (Y(Q, tt - 257, 5), Y(Q, ut - 1, 5), Y(Q, lt - 4, 4), et = 0; et < lt; et++)
            Y(Q, Q.bl_tree[2 * J[et] + 1], 3);
          M(Q, Q.dyn_ltree, tt - 1), M(Q, Q.dyn_dtree, ut - 1);
        }(h, h.l_desc.max_code + 1, h.d_desc.max_code + 1, X + 1), ct(h, h.dyn_ltree, h.dyn_dtree)), st(h), L && at(h);
      }, c._tr_tally = function(h, C, U) {
        return h.pending_buf[h.d_buf + 2 * h.last_lit] = C >>> 8 & 255, h.pending_buf[h.d_buf + 2 * h.last_lit + 1] = 255 & C, h.pending_buf[h.l_buf + h.last_lit] = 255 & U, h.last_lit++, C === 0 ? h.dyn_ltree[2 * U]++ : (h.matches++, C--, h.dyn_ltree[2 * (n[U] + g + 1)]++, h.dyn_dtree[2 * B(C)]++), h.last_lit === h.lit_bufsize - 1;
      }, c._tr_align = function(h) {
        Y(h, 2, 3), H(h, E, nt), function(C) {
          C.bi_valid === 16 ? (K(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
        }(h);
      };
    }, { "../utils/common": 41 }], 53: [function(i, y, c) {
      y.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(i, y, c) {
      (function(r) {
        (function(s, e) {
          if (!s.setImmediate) {
            var l, f, b, g, v = 1, o = {}, d = !1, a = s.document, A = Object.getPrototypeOf && Object.getPrototypeOf(s);
            A = A && A.setTimeout ? A : s, l = {}.toString.call(s.process) === "[object process]" ? function(I) {
              process.nextTick(function() {
                w(I);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var I = !0, F = s.onmessage;
                return s.onmessage = function() {
                  I = !1;
                }, s.postMessage("", "*"), s.onmessage = F, I;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", E, !1) : s.attachEvent("onmessage", E), function(I) {
              s.postMessage(g + I, "*");
            }) : s.MessageChannel ? ((b = new MessageChannel()).port1.onmessage = function(I) {
              w(I.data);
            }, function(I) {
              b.port2.postMessage(I);
            }) : a && "onreadystatechange" in a.createElement("script") ? (f = a.documentElement, function(I) {
              var F = a.createElement("script");
              F.onreadystatechange = function() {
                w(I), F.onreadystatechange = null, f.removeChild(F), F = null;
              }, f.appendChild(F);
            }) : function(I) {
              setTimeout(w, 0, I);
            }, A.setImmediate = function(I) {
              typeof I != "function" && (I = new Function("" + I));
              for (var F = new Array(arguments.length - 1), j = 0; j < F.length; j++)
                F[j] = arguments[j + 1];
              var V = { callback: I, args: F };
              return o[v] = V, l(v), v++;
            }, A.clearImmediate = u;
          }
          function u(I) {
            delete o[I];
          }
          function w(I) {
            if (d)
              setTimeout(w, 0, I);
            else {
              var F = o[I];
              if (F) {
                d = !0;
                try {
                  (function(j) {
                    var V = j.callback, Z = j.args;
                    switch (Z.length) {
                      case 0:
                        V();
                        break;
                      case 1:
                        V(Z[0]);
                        break;
                      case 2:
                        V(Z[0], Z[1]);
                        break;
                      case 3:
                        V(Z[0], Z[1], Z[2]);
                        break;
                      default:
                        V.apply(e, Z);
                    }
                  })(F);
                } finally {
                  u(I), d = !1;
                }
              }
            }
          }
          function E(I) {
            I.source === s && typeof I.data == "string" && I.data.indexOf(g) === 0 && w(+I.data.slice(g.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Ct < "u" ? Ct : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(ce);
var Oe = ce.exports;
const ze = /* @__PURE__ */ le(Oe);
var ue = { exports: {} };
(function(_, p) {
  (function(i, y) {
    y();
  })(Ct, function() {
    function i(f, b) {
      return typeof b > "u" ? b = { autoBom: !1 } : typeof b != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b = { autoBom: !b }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type) ? new Blob(["\uFEFF", f], { type: f.type }) : f;
    }
    function y(f, b, g) {
      var v = new XMLHttpRequest();
      v.open("GET", f), v.responseType = "blob", v.onload = function() {
        l(v.response, b, g);
      }, v.onerror = function() {
        console.error("could not download file");
      }, v.send();
    }
    function c(f) {
      var b = new XMLHttpRequest();
      b.open("HEAD", f, !1);
      try {
        b.send();
      } catch {
      }
      return 200 <= b.status && 299 >= b.status;
    }
    function r(f) {
      try {
        f.dispatchEvent(new MouseEvent("click"));
      } catch {
        var b = document.createEvent("MouseEvents");
        b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), f.dispatchEvent(b);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Ct == "object" && Ct.global === Ct ? Ct : void 0, e = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !e ? function(f, b, g) {
      var v = s.URL || s.webkitURL, o = document.createElement("a");
      b = b || f.name || "download", o.download = b, o.rel = "noopener", typeof f == "string" ? (o.href = f, o.origin === location.origin ? r(o) : c(o.href) ? y(f, b, g) : r(o, o.target = "_blank")) : (o.href = v.createObjectURL(f), setTimeout(function() {
        v.revokeObjectURL(o.href);
      }, 4e4), setTimeout(function() {
        r(o);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, b, g) {
      if (b = b || f.name || "download", typeof f != "string")
        navigator.msSaveOrOpenBlob(i(f, g), b);
      else if (c(f))
        y(f, b, g);
      else {
        var v = document.createElement("a");
        v.href = f, v.target = "_blank", setTimeout(function() {
          r(v);
        });
      }
    } : function(f, b, g, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof f == "string")
        return y(f, b, g);
      var o = f.type === "application/octet-stream", d = /constructor/i.test(s.HTMLElement) || s.safari, a = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((a || o && d || e) && typeof FileReader < "u") {
        var A = new FileReader();
        A.onloadend = function() {
          var E = A.result;
          E = a ? E : E.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = E : location = E, v = null;
        }, A.readAsDataURL(f);
      } else {
        var u = s.URL || s.webkitURL, w = u.createObjectURL(f);
        v ? v.location = w : location.href = w, v = null, setTimeout(function() {
          u.revokeObjectURL(w);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, _.exports = l;
  });
})(ue);
var Ve = ue.exports;
const Ue = /* @__PURE__ */ le(Ve);
function he(_) {
  for (var p = window.atob(_), i = p.length, y = new Uint8Array(i), c = 0; c < i; c++)
    y[c] = p.charCodeAt(c);
  return y.buffer;
}
const Le = `#!/bin/sh

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
#       https://github.com/gradle/gradle/blob/HEAD/subprojects/plugins/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
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
APP_HOME=$( cd "\${APP_HOME:-./}" > /dev/null && pwd -P ) || exit

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

CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar


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
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect \${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '\${Hostname}' itself on the command line.

set -- \\
        "-Dorg.gradle.appname=$APP_BASE_NAME" \\
        -classpath "$CLASSPATH" \\
        org.gradle.wrapper.GradleWrapperMain \\
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
`, De = `@rem\r
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
echo.\r
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.\r
echo.\r
echo Please set the JAVA_HOME variable in your environment to match the\r
echo location of your Java installation.\r
\r
goto fail\r
\r
:findJavaFromJavaHome\r
set JAVA_HOME=%JAVA_HOME:"=%\r
set JAVA_EXE=%JAVA_HOME%/bin/java.exe\r
\r
if exist "%JAVA_EXE%" goto execute\r
\r
echo.\r
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%\r
echo.\r
echo Please set the JAVA_HOME variable in your environment to match the\r
echo location of your Java installation.\r
\r
goto fail\r
\r
:execute\r
@rem Setup the command line\r
\r
set CLASSPATH=%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar\r
\r
\r
@rem Execute Gradle\r
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*\r
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
`, Me = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.5-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Ge = "UEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAQAAkATUVUQS1JTkYvTElDRU5TRVVUBQABAAAAAN1aW3PbNhZ+z6/AaGZn7BlGSbvt7rZ9UmOnVTeVM5K9mT5CJChhQxIsQFrW/vo9F9woyU72dT2Z1qKJg4Nz+c53DvRKfOln0ctyr8QHXarOqVcvvPkvZZ02nfh2/rYQv8lulPYovn379rtnF+2Hof/xzZvD4TCXtM3c2N2bhrdyb17hwvvb9e8bsVjdiHd3q5vl/fJutRHv79biYXNbiPXtx/XdzcM7fFzQWzfLzf16+fMDPiEB38zFjap1pwdQzs1feW1m/kQz4fayaUSrZCcGOOmgbOuE7CpRmq7iVaI2VoxOFcKq3ppqLPFx4UXhu5V2g9XbEZ8L6USFW6pKbI9io0oW8g3It2bc7cUPwtTwQcN7phxb1Q2nehl7plhp+qPVu/0gzKFTVoBKsFAPRyHHYW+s/g/t5+VcWjHs5SBg052VsLDb0UveDpkCaicbcUuiz5QYOzwgaa+ELElK0ALMAO96MQZe8Apq5XhrMOhgTVMIaVX40JDSBZ4Gn45dBctK07am85L8i+Kghz3L4Q3n4r2xpEc/2t5AxCSrRocHH828lBkdxYkrfc1LzUHZAtxnwUuohO7490IMRpQSnI7veSn8J7KAFa3s5E6h83BfN5Z7r1ghDntFxwfv076SZOeWOWiMJpBypUETco/b6x4l1boGa/bKlij66vu3f7mm7QyYhw0fBI2DG8Dq6ANwk1UuSASRW9WBEUoNrpxIz/RMLv/DjDNxBWvxNzu7zr0O/9Amj7oaUZYVeXx4AeoJtNUOFQG9W+0cBTzFGScBueUs1DawWwkpCOnVnkZab1WtrIXl9NeaLP4Zt2hNpeFokrIqOFh3ZTOSKSAJRWcG0ehW4+7gR2fq4YDh5WhDcEoF1g+5R4K8GH6hCPlf691o6e/glkZl8HG3/TeEwrnqsjvyM3DH2FB+1Na08MdyLzvQOiQIREXn8E0ZAoqeNP5jLaRg85C4YnpAL+PkmJA2vcaEMqScP+YOIgHOAI8nB87RC076yOjtUA7nbqsqLcVw7PNjfzL28xkoHOAhaUw4hJGWUkB34RgxAdh0/litrABIHqVu5LYJ+Z/hUoFoigFYSh9KMuJCQDcwA7wc4Y0tBS9rMqscBqwtZKGgrRdxBQdQT7LtYWdYCNAOYc4L8c1F3yvY+QmSqTGH62SFG2X1I1jxUQk0iJudRgDucdkG/vReEtsgKL6VDp3XUSpWuAdGP0QPYxVuRe7CXDjsdbnPwACcNUANgMy06lGTKzGKwTQ+T4QCCxsbPoEI7+Y8m7wwrHLKQaSQ9SVsZhpKClimd7qDXc59fo7HAafqSfoX4tR83noYzd53JN5XDataqWN+ql5aihS0Cx2jVVY1R8iD7jMZbgvRgnHSyVZdB6drACJby5KKRJHVyGjUM6XQOsrUyevvEMp9jb/o8dMciCmb7RcN6BMu1NKoBwqb+IRiuPJMJEgybBtaBX9/TvkiS4oBUd/A1k2AbTduATs8eATeQdFFmpN6PhVoI8LxM1oRvEzl7sVqkRMVRGXaHuN9q8CYNZjiefLyddVezOKZZl4W1/sIy7BINZCA1gAYF+iFrWwojg4W13VEPsbOW19gFuRGV8lQaKfBpWQh+7vixVIUsSvfA/4lnQARdYOLG6CUIC0rWZEKuaMbVOtyCIeaOyosISXVSP8Gux8rH7OVyLVyoxcZjEyiILM22g04bjk6qvK0Y0t46WnkJ0K8VJrUUzDC9KwhHuEortflaEYHydtK+xmhzyZ2FCiXcnrXEfZDKKKPyLAXIxHBarYCe0uR5+p8dp7CJ/w6Hjtk4BcpT25AxMf2ZFOxB2W2CuIJKKMiJAel831SEjr15wjx0+C2pQF7c7lGwpulHwPRt3PxC9Iq3PZdPH5gVmIzcnH1sXqxmcnSLEdlBVVSZAYSCCGgM7E44gVADuGUwPB6NYBlQvgB9DXVQSPX6Ez3mjzv4MT48TWwHrvDxskcZTMcX9dWwScNxO7RlAjkZ9Xc93+4Yei2YAXkWI9xfIZ0Cc77cQtrwYoQqH0jIdDjE9CZS62jJ55Y5H1bTvMjFhNZPtvxQjknbGEH/TVz0EeJoPt/4J0rWKb6ARMMWo4hUCRQ0HFDdC16PmvmPaDrIGwvHxWxvKAQ9dGmrpHnQRFQDcAv/xcQxdiBHRNxwBNlzwoJZsLJ0ATso7Cr7PsG203TgdPJyohdXrWykRrsze9mhwMrkpDcuhE3O8he56TVlJ21BfQJHY3SofbliX/lrqENNp3yFRHgDxhJZPW07HRBOBB3uL7agvpM8qbK+S0O6IpQ6+ZiWaP/Yy/kAKkwpqNTBr1jFeRO4p8J5HzjfpUKVuTW1jj3mgyGxyjNiPyJP4PnpWjkwY16wKM2asdFACwWlE+c4AQVXwI4qgmsuPOtdpJTJuccw7GCP1piqiCGqdg0EgNlCs2oz5TQaKQc8yUvsCquDpii6L0QK9IFwlbBwxB80bogDfvEiqHgu7lYq3wyNKetW3lMyHaKQoCDOnCbCR69wPLIJUgbYbMRQI7iCBkN/N/Eijxtm7mEP4NkRWqFyCAptFql2Mu1aaAn4voesOvHUGev5DWfdIRI26G+qB73G+BWDUdE0Mqpb+wO8efsoJLqw2kn8ROV0bDnNtuTBzeJSmMfhf07D3UshhC0D7rDOOHu0WXbI8TFkEaZ2LrvyBiK5Ux3LrOdrRogwYrAm7MWnroD0Oj0cNnGccMUEAVmWKqOhY/uAmGxUsibioxMUIgOKd382XgEcUGfU0jFn8TcGD2DDFKuMkRoocrgMdGcnHF2SIWLT3JeqqdGq64RtKL/feOHrp6t7u6X725nkHxPA9kb087vgZQ72yfPrgwCLmTKmWXJX5mo0HpK8KGsqMdMQacumhVBSeKcNxPjQY2QgQ9CRyi+xq6ZmMsWvmhXCjaQ0SjpsJ3Kp/R+ScpWIEaw6Y9BTRl0TLZOFppElXtRh59yMJ8EWZ7X0wGU0HXCGSyZu1QBz+UbW5xbWQaul025fG9wwUr1SaYQgYAOkJ0FAm31Gg95jL7pcD4HDTMSCyWhCb3fcxeG+HVu5szfRB64lY5DPughUvOKDGWqjs8tQqzjZDYfy4asKvzdYr+TR2QmJajuLfQ1mVCw9R04Ij8T9VM43qgq1VVjG2jrJGICsHD/F9x5imlk4DDEADNcTCaaVkHPxDzAjqfxx4Z57t7ioolSV0G0lYb1TABOBl+ZK1CIP0euMo7kNLLWCcu9wODTaO/ClRGLye6KTH1BmyKlTU3N4vGZViSfzsVUInm4dTbNSwqc3VZNqnBk3ThLJiqNcTQZy8RO5aQTmDjke2p2/E0A96qJBbq5eOigijpymnqCjUqN7S9JzC5I4nzjeMois2FWNsZ6dnSVmD7ueDrIYaq3zafP/0tr5mkWqZkFDItg6lqF20devzIDLoq3N1RftoabMkzbHbV3WEZINTdCOXCqUnwRhGmQucRvxOyCB6RgxdgS7aCno8A/+gyhjkw9qTKDeALeaBCrdtLyvdJp7+HvAv4GUBgIiENYzHh0ZQg5B6bc2Y0QGt5fqDF9CdcYssW5WWQ0OPVS9hFn+v4j6ORjmF8OQRs0DpGS2lSr/hy1vz3Cgu7AJ1jSyaVQ+E2L19OoDVgZeEcJB/SuiE0HTmrP5rMhm4LffDW4UALYUn+fixvtqHXCS9tafAL+CXY5xiSIqm6P3MBS540tVoIB8iI1L2kKViSH+dx3SdUr1BWHBqctav42ji8nzr3GuRZA/myxEcvNTPy82Cw3wbiflve/3j3ci0+L9Xqxul/ebsTdOr+Wv3svFqs/xD+XqxugO5pvgJ9wOurSSTThSpWNSVMG0ZxUBpw6QpNLpqKGyJ5DLBjzfnn/4bYAq69eL1fv18vVL7e/367uC/H77frdr6Dl4uflh+X9HxRC75f3q9sNf31g4WV8XKzBYQ8fFmvx8WH98W5zy9WWbwsbvFkA/XvYVNOtA93McFc4DRfwnDW91UjP6cA1RBe+QvGXEDebl/K00TngRHjcANfaEbI7U+rYJjOo+3tWmsbmF63nzSzH3j/m8DmYFBd90HKrG7o8X2LlFUB/uoH0YBnwqKFhJ+gInXY2agk3WRBAQz4y6NSu0cC+SnVdxNvuYjLKjZOfL8b7FRMFnOk3ekuEjpTb4Twi3luELQf8BoKj2/HL+cHoOSkfOJQJLms0bewnAuRa2crddIaPq8NXAtKXA1yv8G49u32GhAJiy1cJSGB4posXcl5oQGicuYHeOK62fGeOVTzWarw1Pm10yZpjxJiRn+jOOzPD1XxicPXinXjQCo/dGA7YnTHVQTf57PAzFGXT9xKnhMgJRlS8lroZLVcj2dRjl8gNFcEL3wTBWwAM3twevLFyEDgYh0jQTwdxXkYcpsvqUdMlae2/vgEZ4I0QvtzgxXMG/DAXixJrAlohIC/uvEiFOkuKT3uk7tN0Pb0sfPG6LbDQcm8MT0Fp0jm5bKeZK/C2WhGeANSRhrIrFR+i5zGoR78jxZ1qO/xqSRqIsVmboLsw28ZPoYi3vEHYQebLVy1wHswX31/pgKCxwfjVHLAT4lYyGozsmQlO56NvtHRNdhsSObe/FqEhrn+MQJpglPQlppNuURKip0lRFgZ+Jow9k64ZnzHhOd/JNnW0TaVqaFd4BTDj6sLoXNqWkCiQ62jFlM6jtem2zE+OAZOhK8dmlYeoxfnceHv0ZCMd6IgWSDaNZP6QRWNGG6MuHMC3qxusq5e+Bvfqv1BLBwiwt6Me6Q0AAL4nAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAABQACQBNRVRBLUlORi9NQU5JRkVTVC5NRlVUBQABAAAAAPNNzMtMSy0u0Q1LLSrOzM+zUjDUM+Dl8swtyEnNTc0rSSwBCuqGZJbkpFopuBclpuSkKoQXJRYUpBbxcvFyAQBQSwcIbbE+PUAAAAA/AAAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAxAAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVBcmd1bWVudEV4Y2VwdGlvbi5jbGFzc1VUBQABAAAAAE1PzUoDMRCetLWttV4ELx5zUtvt0qqwVBGk6KmnFryn2Wkam2SXZLcIYh/Et/AkePABfChxFhSdgYHvZ/4+v94/AGAE+wxetttZ8sQXQq7RpXzM5ZL3ucxsro0odOYim6VIvEeDIiCJKxEiuUK5DqUNfLwUJmCf5yqyIo90NSM9T4cXowV5ffLbvyyNISKsRDQkiE5ph+i1U8Ru0AfaRXwyOBskUYob/twGxqAzz0ov8U4bZNDLvIqVF6nBWBodTzJrhUunNOnGq9KiK24fJebV3S1oMDh6EBsRG+FUPCtdoS3+05sMmlfa6eKaweHx9M86L6qzLk/uu9CG3Q60oMOgMaE/YAg7BKtglKRS7RI6gBolQPO09wZ7rz+OOtUa1L8BUEsHCEst73wiAQAAcAEAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAJgAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lT3B0aW9uLmNsYXNzVVQFAAEAAAAAZVJbTxNREP4OFJa2K1CgCF5xvbWlSy0XrWB8IV5IqhhLIBhfTncP2wN7aXa3RGPkf+gf8FWNSNDE+Ozv8Heoswu1JbycOTPnm++bMzO//nz7AWAWSwzv9/aeV95odW7sCNfUFjVjSytqhuc0pc1D6bm645mC4r6wBQ8EPTZ4oBsNYewELSfQFre4HYii1rR0hzd1GXGY82Z5YbZOWL/Szt9q2TYFggbXy+QK15KuEL50LYruCj8gLYpXZuZmKropdrW3A2AMqZrX8g3xUNqCYcrzrZLlc9MWJcOWpWXPcbhrVolptRkVqyDBMLzNd3nJ5q5VWq1vCyNU0M+geDEiYBitxoBWKO3SYx40aiKkRqjct1qOcMO1102SylQ7LMs2DwKCpE0RGL6MeRhGuhC1MPoIQZKW77WaGzJsMPTfk64M75NgrkuxKoNwKb/O0JvLr6sYQiYFBSOkeKoqBWMpZDGiYgDJJPpwlmGwI7ruSVPBJENibfPZAxXnkU7iHC6oSEW3PlxSMXiUOEXldhJXQuHzui0UaAwDMvJCz2cYz+W7Cl05ji+puIbraVzFjTbLiXcFOeouLcVT8SqMv/VCRQHTaeRRpOLcODzW5u6aCzHPoBThbp2Y2lE3FcwSGzdNhmzudG6kMo+FqEG3aU0sEa62B5w98Y/OiBPLtIooUz8UWv8EMlFf6caihsVWxRmymahtZHsoMoRhOhfJq6EfvWQfTRc2Xx5g9DuymwcY38fEZ1zcx+X//pVD3GSoTh9CZ3iHyQLdygw/MffkCyaKX3Fn48Pf35+AWKqCu8cCGbKMbF+BYB/jZxYr9qD3H1BLBwif7LRCbgIAALMDAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAADMACQBvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRBZnRlck9wdGlvbnMuY2xhc3NVVAUAAQAAAACVU+1OE0EUPdMCS7elgAj4La4gbWFpippUakyQxMSkASOKKX/MdHe6LOzONrNblBh5EJ/BH5qgJJr4AD6U8W5bAkKTxt1k7szcc+49c+fO7z8/fgFYRoHh0+Hhy/IHo86tPSFtY8WwGsaiYQV+0/V45AbS9ANb0L4SnuChIOcOD01rR1h7YcsPjZUG90KxaDQd0+dN041j2A/s0sPlOmFV+YTfaHkebYQ73CzRUkjHlUIoVzq0uy9USLlov7x0f6ls2mLf+DgMxqBvBi1liWeuJxjMQDlFR3HbE0XLc4trge9zaVcp0guuQqFmVxuRUBvNWHioYYBhsS+lYzYjHgkNQwxp6xTCYFTPBWjD7TNhKgxDj13pRk8Y5nL94fkthoHc8/xWBjoyOjSMZDCMVAqDGGUY8/lBXZAcFXXOwTCZq+7yfV70uHSKm1Fcs0p+m2EkkP/gtnvgejDPS7xYkk7AM4WhMz7qy3ot92TwTl4ga5hkEL209a1Vf6lnRXZKOq1jClfoHgO5HsiT2jztVcP/C88w00+whhsMWfE+UnxVOS1fyCik++ukbkWuV1xVih9U3TCqZHALt1O4iRmGiR4ADQZDktv2uQbYqO8KK6IGyGAWczru4h411Bq9MobRWMR6y68L9YrXPYESNZVGb51hPO4xmg3QXEeaxhytppFEgmy6UEseI7vwDWNfEX/j9F/qgrJkY1Ai+bnrm8Dlrm+eEiTJjv7EVK1whLGFt4VjXP3SzpmncYhsup3/Gq53SYVu1myhRowj3Fn4jvk3pxydvIM0T5Fl7fAJJP8CUEsHCFPj6zlcAgAAtgQAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAPAAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEJlZm9yZUZpcnN0U3ViQ29tbWFuZC5jbGFzc1VUBQABAAAAALVVa0/TYBR+XkAKtSAX79dRgcG2MgHFwRQFVEhEMU5NhonmXfeyVXpZ2g40Rn+GiX72B2iiYiRevpn4o4yn64wgSPnimrV9z/ucc55zeU9//Pz0BcAI5hhePX9+O/NULXB9WdhFdULVl9SUqjtWxTC5bzi2ZjlFQXJXmIJ7gjbL3NP0stCXvarlqRNL3PRESq2UNItXNCOwUTxbHD43UiCsm/mtv1Q1TRJ4Za4N01LYJcMWwjXsEklXhOuRL5JnhkaHMlpRrKjPWsAY5JxTdXVxzTAFw5jjltIllxdNkdZNIz3jWBa3i/Nk6RZ3PeH2ToslxyW06/m5aqG+L6GJ4Xyk7kIliHdqlbt1Sc7nvpDQzNDslw2v9wyDOh9lJkvoC4Zt+JMMswPR8L8RNXFxAy47eE9BC1pbsQeKAhl7ZUhoZ2hzbGLo+iFvhsWB+Ud8hadNbpfSOT9IbXarZDCSUj0RG3JAMWm71Aq9SOhiiO+Oz70gpv0yunGAIRblRsIhhn1OzZc3/SQ0wtAdGq76hpme4175Bq9kFRzB0VYcxjGGzi3bEk4wNJaEz9C/kehC4ZHQfUrTFpGCU4jJOImeHXmGeZBwmlhx03RW79rLtrNqh3KPgS0q6EN/wCzOMB6Z2E36mzpzkGGv/ge/TXtu7SYFSaRaqYM0BrFdhSItRDfQxtYJ65uWkQCdn+S/dafcUtUStn/1sS7qKRxh6Pi7DBLOMvTUcxKrR6+ZZCAWdkUs3ufFh1owtkn5d19m6HjSiLA41X18m/Dv79wKdZSCCWRljOMCw4FtrIRBT8oYxaXdjJ7r/yjwFMPr6Bmy6ejtVJ4Q959KPCNjGlcYmmZo4NMZDcA3q1ZBuHd4wRQYpvkl0WeHdXQG44zeGsCCcUb3a7Q6jEa6ACWRT75HWzK1hn1vEfw60UH/EPUCzWii54PEOrrzNwPUwXdoe4fjqQ9Qv6E3f+M7RhM10cBLdK0jkafVUPJhYg3Db9Yxmm/6jHP5641arut84iMuruHy13VM11DzWipJuKtvAp6YpXs/MaUPEbFsQDvx6yLvPRRJnHiMUDxjtLtIGFbj3oDGX1BLBwgfXvC3LQMAAF0HAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAAD0ACQBvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRLbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAnVZpdxNlFH5emjJtOqIta1lkCAJtmjSyqLVFtK2oSNIiqa1BXKaZt+nAZCbOTFqqgvu+7+K+ILiL2kXluHzyg189+gf0+AM8x3P8JN53JmkDCZb6JTNz33vv+9znbvnpn2++A7AJXzK8cujQ7rY7QoNqej83tVB7KD0UioTSVjanG6qrW2Y0a2mc5DY3uOpwOhxWnWh6mKf3O/msE2ofUg2HR0K5TDSr5qK68KFt0TZetGmQdO22ov1Q3jBI4Ayr0Y30yc2MbnJu62aGpCPcdugukre1bm5ti2p8JHSwBowhmLTydppfpRuc4RLLzsQytqoZPJY29Fi3lc2qphYnT7tU2+H2BTtNa9TszQngviTpqi6XEGDYNKtxBbv5DLLliZOuwMoQi5+lH9+gg2G+74Ah9B+mvg1p16VnhBVMvCu0EkMyqXYEWIbW2aGVBCeQjahGnjsMi+P71BE1lnd1I9Zp2+pYXHdcobBVN3V3G8ORpjmGPXuos0c2t3Ca+xkCTTua+2U0YFEQEhYzLKwQl4SlDFVNvmJjEMuwXMZ5qK9FNVbKqEGteDtfRhB14k2RIeMc8RaSsQDnircLqDIts9PO5LPcdBm6mnwGDdXMxAoUNM81HcpsnEloonpUC7f2jeUo6fUlF3cbquN0yAijpRbNiDAsmDnst3RNQiuR1JfatV3GhUIpho0M550OXcJmyr1BPeoOe1TtkHERLg5iCy6hb1XTqGRKI+4d3MfTbkfzHhmXol1Q2uERRBHkDC5q88KmOdIh4zJsCxLVlzO0nNmymILtB9K8wFHnKRH50CR0M2ztNBWezbljSpFCZVR1lJxtjega15Qhy1YK3Rc1yLfiN66yYZ2zobUG24kTUsmqlO9LK+T7xgqElGvJuBrXCCZ3nMZhsWq8stwZRBfiDJu7z4BH0SzuKKblKq66nyuqOR0TIe2hxItOVG23hx9wiSMGSXe2i9i9fFKersNukackw8Wz5iWhOw5h84uQvBWG4/U0kc96LpzaqiLGgSD6cQNBzXD3GtWZaaZ4j/U/MqSM6u6wonEnbeuetN0T1+BGhqWn09yV1w2N2xJuCuJmLKexW2LI0FApb7dCFV01SGWg5nK0LRmiFdv+DJeRCw1c3DfEUONaxY2yqKlimQxDF7r76JY5jV4JhhhdhDULs3yolI1ZCTmGc30ina6xIqqFJSuBsjOcUHMEyoZTi9tASaovO5YwQsVFyWRYX2k4lItkHMBYEKO4nUxmw1kcgXdSxeRs7lBx+CKnHGySC+eHcJcAezcVfyE8GfcKWTPuYzhnxoTUJTwg8qppnYbB0NhU4rDbMgxCK3aWaJyH8HAdHsQjNEgd/XYu4zExGZfh8VocxMriyPUs/W3zFMO2RN5wdRqF03XtKKPc5mc9e56hitFdbquuZTMsKVaMd8uOgpwifg7PCygvUAWXn0t4iZigf29iJsg4jN11eBmvUBwmCU6vw+kUvYbXhd4bDLUZ28rnBqjNZLzl8/h2WSF4XL4bxBGBooaqwVtKlKJTvBc31VEcC+JKvE/c2zxrjRCdH4oFcgQfEZO+SOstJu8TP6GfinNaMIFu+mtJtSuqoyefHeR2nzpocGykrSHRH9xq1IttTm/1Ypd7T9rk3pP2uPekve9pEmNYSL+fe3+MJZIA68OpvXurprDkBJaldk5hRXgCq1omsDoygTXRCaxtDExgnbAQntZjQ8H+EFnPo+ee8DjWjCP6BTa9hy0tk2g7jPpwapycTGLrwCSuOH4CXSnSWr0z8C2uTMWrwsmGq1q+wrVTSHxf4ay3eEbeGb6g3wYE6I24oBslVFFcAcKyC9sKWBIkY/RcV4plCX2smkTfYcgn0J8KTyF1PCzgTLtdQiEIxxK5XUAuVtLXGo/QPdhdcB2jM+F6YalrKXAMgaqPpx0FSanoqF6sdN+Y/UyS+fRMlhr3TeO6NkzRxxv2JqpF7D2ChqpbkoEOUj6Bm1PtgSncMo50qr36R9Q1BhqrJ5EZaElFoqnljYFJ7E8WeAqniO61cTIfh5Ug656WceQjk7jjBxxMJcL0dU90HPd/jUfnYcC7/Ymt43iSHituDRxBawFew9NHMf8YVlfIybPFnPjgX4y3fI1XGbVXY4Te3mT4AVt6yGVU5PzYyd99j+9M4r1pzXi4qNlMGNf2REj3A0JzPyklIr7SyV+ikaK79gDBFnF+fPjkbwT/M/F+nJz/Ss7XzWTRxIqy4hDN0U7UX02SfmqPYWoQg9J0GzVIntrjPmqQB0nzcWqQ56g9XqS0vUtldpTa41Mswh9YjD+pPv7CUvyNZWw5Gtkq2qC93l1VdOs8VP0LUEsHCFiCmA/YBgAAYg4AAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAPAAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE1pc3NpbmdPcHRpb25BcmdTdGF0ZS5jbGFzc1VUBQABAAAAAJ1TbU/TUBR+LoN1jE5gOhHf0AravXQTRF3AaJRoYoJgnMHIt7v2rlTa26XtSIyRH+Jv8IMmOhM/+AP8UcbTrjNoSBDa5J57T5/nOafnnPvz1/cfAJZgMHzY33/RfKe1ubkrpKWtaGZHq2mm73Udl0eOLw3PtwT5A+EKHgr6uMNDw9wR5m7Y80JtpcPdUNS0rm14vGs4sYa1bC3eXmoTNmgO+Z2e65Ij3OHGIh2FtB0pROBIm7x7IggpFvmb9Vv1pmGJPe19Dowh3/J7gSmeOK5guOMHdsMOuOWKhuk6jTXf87i01knpOQ9CEcw/c8KQJDe7ceoPA7sV8UgoGGWoHckdmJSRZcj6iQrD8vqR3EHAAwqrxL/nSCe6z3BXP4lAeYthVH9a3lKRh5qHgoKKHMbHMYZJhimPv20LggbRZppnSV9/w/d4w+XSbrSiuLar5W0GRX8Qlo16NYfTxPsXoqBEEI9H1NNQxQyKeZzFOYaCL/+S3z5E/pCAJyvW0vFZCi7SfPiSoF1XRDQfN/X/iH4wrorLmMvjEq6oOI8LcZE1hglfbvhy+NuPDqvq8cIkadI09jwhIxXXsRDHvEHNSLIfMh9LiyGjJ41fo1vDMBm7N3peWwQvedsVWKTmK3R3GabjWaDdGO3zmKC1SqcZZDBCdqLyOvMNp6pfMfUZ8TNNbzEFzREkBinV4pk+Zj8mejVas2RZok3FSMGzpJghW6h8wVQfV6u1Pq59SjXnsZDCSqnmeAyr9qEPIWVU/kBi7RRCSq8GmbFEfgSZ31BLBwjSJnHTTAIAAJcEAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAAD0ACQBvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25Bd2FyZVBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAhVRrT9NQGH4OG5SNcRk3AVGhgm5sZVxlXIRMgoYEBwEiwS/krD2UQtuR0w4hRn6Iv8EPargkmvgD/FHGtwyUW7I2Oe153ud93st5299/fvwCMII5hs/Hx6vZj2qB63vCNdQpVd9W06pedPYtm/tW0dWcoiEIl8IW3BNk3OGepu8Ifc8rOZ46tc1tT6TVfVNz+L5mBRrGmDE8PlIgrsxe+W+XbJsAb4drw7QVrmm5QkjLNQk9ENKjWIRnB0cHs5ohDtRPtWAM0bViSeritWULhomiNDOm5IYtMrptZeaLjsNdY4mUVrj0hOxb3g9yzn3g8hJZ87kvFIQZ0hWdb3jUMNTp/ykM6tItgQu6cU1mmqHG37G8vqF72HfCBewZy7X8WYY3icr0yuGT72KIoi6CajQwhBOLARBDUxQK4jHUIhKYWhiaHH5UEFSo9MsNY2hLLO3yA56xuWtm1vzgXKaT7xmUxJyX1AZTtXhAfrcpCjqJ4nCf5sGL4SHao+hCN7Wu6OaL7pX4q/vEK1Z8/TyoWT2V6lfQw9AgDn3Jc9IsOcL1PSqsHLrkW3YmJyU/WrI8fzoGFU8j6EUfQ8s9BAXPGELcMG51ZrmwK3SfOhNDAskonmPgbmZ3KlGQpjDLK+uLy/mtfO7twtZKbn19YTXP0HktPSlMcUh1+b6QLqU4iEwEGoZuNL6cgYIRhlpT+PM296jKlkTyWpYXIAmMYTyKUbxg0Co2O7dNUcsH5inIMvTfmcn7Jy6GqSgmQScUnqdPnaExMOVLTkHIdV6wRbiXpk6hH04V4sEQAk3xYE4JCYGRfz2tL2nXjTAhZB7Y3EydojF0jub0KVq/IbjiaEP7JfMJaVXRU0k1d5zh0Rd6ZZiltYaewR3HYyKVySskGpD7BjZP0HqC/tQZUhsnaPyO4Y0zTGz8xOTmAJnOMfP1n1IXaVXTe4R860mhlZLrIKTnIkboopzQX1BLBwgvy2DF1wIAAEoFAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAADgACQBvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAJVQTW8TMRAdN5+EkrRA6YkDqx6SKpttUpCitqpEK1UgRWnVoB568+5ONk693pXtjZAQ/SH8C05IHPgB/CjUcZqq3BA++Hnem3memd9/fv4CgAFsM/h2e3s5/OKFPLpBFXsHXjT1ul6UpbmQ3IpM+WkWI/EaJXKDJM648aMZRjemSI13MOXSYNfLEz/luS+cR/w27r8bhJSrhw/100JKIsyM+30KUSVCIWqhEmIXqA39Rfywt98b+jEuvK91YAwak6zQEZ4JiQwGmU6CRPNYYhBJEZxmacpVPCKnC64N6p3z3PV8H0wst1iDMoONOV/wQHKVBOfhHCNbgyqD6pFQwh4zKLU7V+tQhycNqEGDQbn9sXPVgIp7NzNFPtqO8bN9rxMGe+3O6J9t/NXAIc2QKSotUlSWwUl79NjNxLoFHP63YzNB+4GbR1ca4Xr5EVXmEi0tq3xKi2fQcibjIg1Rf+KhxPIbGqwG7lSBuanp3qJok5ARVnZ/wNPvTt9w8vpKfk24tpKfOZnBq5UHvWnJTWjBctnk5PA5vFjiS8dTVonuNSjdAVBLBwgG+EJVpAEAAH0CAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAADMACQBvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NVVAUAAQAAAAB1Ul1PE0EUPUNrt9TV0gJWQUVXlLZ0aYqaNGB8kMQnIkQMpr6Y6e50O7Bfmd32xcj/0D/gqyZQEk38Af4o4922xI/WTDJ758w9Z+49e3/8/PodwCZMho8nJy+b74w2t46FbxtbhtUxaoYVeKF0eSwD3/QCWxCuhCt4JOiyyyPT6grrOOp5kbHV4W4kakbomB4PTZlo2I/sxuPNNuWq5gW/03NdAqIuNxt0FL4jfSGU9B1C+0JF9BbhzY2HG03TFn3jfRaMIXcQ9JQlnktXMJiBcuqO4rYr6pYr6zuB53Hf3iWlfa4ioVb3wqTmgzjR1ZBmmDvifV53ue/U99pHwoo1ZBhSXDkMxd3flyPKNkMmGEpQ8ET6Mn7KsFaezJtEKockW64c6riMKzlouKoji9lZXMKcjtwoKjJk42DEYFgoV6ZVMGOaWVz7q/SLhq6TIVHMVRy9lnGXYXFKaZU3OpawnMMN3GQo/Xv/rCddWygNt/9DH3ZwJ4cV3CUTeBjSXJD101InoLH4to57WE0k7utYwGISrTEw6qvCkN6hiWDIJ7/tRc9rC/WKt12BBhmk0VzOoJA4R1Eh8W2IMKpJp32dTstI0QLy1VbrHPn1MxRqZ5j/Agwp9N44cR9pioBm9RSFYmmAWx+w9A0rrerbYukcxinmB3gwQPkTSmO4+if8mbgMNdoz9B2t1LCc1C9QSwcIgRNoyQ0CAABDAwAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAyAAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAACFUc1KAzEQntjaarVa/08eXDy00nXxD4qKB0VBKCpWPHjL7k630WxSstuCiD6Ib+FJ8OAD+FDipNY/KBhIvpn5Jt8kM2/vL68AsA4LDB4fHs5rd47PgxtUobPtBE2n6gQ6bgvJU6GVG+sQKW5QIk+QyBZP3KCFwU3SiRNnu8llglWnHbkxb7vCaoSb4drWuk+5pvZ1v9mRkgJJi7tr5KKKhEI0QkUU7aJJqBbFa6sbqzU3xK5zPwKMQaGhOybAIyGRQVWbyIsMDyV6gRTegY5jrsI6KZ1xk6BZ/oRGylPMQ5ZB6Zp3uSe5irxT/xqDNA85BrldoUS6xyBTrlyOwwiMFiAPBQbZ8nHlsgDD1i7F/NZHkjLpadt2gsFcuf6j10jt43cqVwyKWv3JuxqQN+Bm/d/vfAr++tQOgzGtTrT6KrU/6En/C/+VLGn1K+VQhdSJAxobg0kbOOnEPpoL7kvMLlFz8mBXDpjtHJ1z5E0RMsLhlWcYe7J8ydLjfXqRcKhPFy3NYL6vQTYNagImoTcwUrI4DTO9rNnvCsWeT7unTmaGziHIfABQSwcI2aDao6cBAADOAgAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAA/AAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAlVPtThNRED2XthTKCpZvFRRX1LZ0u4AaKxgTJDEaGzCiGIiJud29LAv70dzdosbIg/gM/tCkYOIPH8CHMs4tRRokafizM3dmzpkzc/f+/vPzF4B5zDJ82d9/Wf6kV7m1KwJbX9CtLb2oW6Ffcz0eu2Fg+KEtKC6FJ3gkKLnNI8PaFtZuVPcjfWGLe5Eo6jXH8HnNcBWHfdeeuzdfpVpZPsZv1T2PAtE2N+boKALHDYSQbuBQdE/IiHpRvFy6UyobttjTP/eAMWTWwrq0xBPXEwwPQumYjuS2J0zLc83l0Pd5YFeI6QWXkZDTr4PdIHwfrNaU9KPYWsxjkUaSYb4j/AxcN0MqUi5DqdKRoA26yJDg0mEYrOzwPW56PHDMtVhNTKk+6wTLoJ9mbvLYbfwE6X7oBm78iEHk/mfsTHA+8fl1hmTuWX5dQz8uZpBGVkMGfb1IYUiDhgvKG9HQg17ljTH0OyJ+yqMl6dR9EcQ0fi6/SeEwIEoZr4gP8ZLax2wuf95FZsKASmqeiIWGSUxkqOPVZvik2+MztnLuRlOd1piGTiPRKJIft44YRo5a12PXM5ek5B8rbhQvapjGzV7cwC2GoTMK0sipf8S2iaBd/Gp1R1jxYn5TQwEzGeRRpMtYpnfEMKBErNT9qpCveNUTmKNVpOk1J5BVd0FeVt1T09ItkU2BFGOAviU6TdE5SXa4sPE28QODMwcYLh5g1DjA+HegibuEy63qfrKMbFfyayt3BROtXLaVSxUOce1bKz2F623prtPpyX/o+6RYoccKGxsNjD5vkKIGbr87hPGmgXEFYDCbEhI0Dk1ObENNUEIJQuIvUEsHCACMZ11zAgAAxwQAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAJgAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzVVQFAAEAAAAAjVVdexNFFH6HBDYNUdqUD4OFrpHaNG0a24KUlg9DKFLbJqUpYChYp7vTZNvNbtjdABXhwsdrn4dLuPSGWxVMqzyi19544U/wf4hnNv2yHzzuxe7MmXfOnPOeM+/+8c8vrwD0o8bw9NGjqcEH8TmuLQpLjw/Ftfl4T1yzK1XD5J5hW6mKrQuyO8IU3BW0WOZuSisLbdGtVdz40Dw3XdETr5ZSFV5NGdKHflLvO9U/R1hncG3/fM00yeCWeaqPpsIqGZYQjmGVyHpXOC6dRfbB3oHewZQu7sYfhsAYwgW75mjismEKBtV2SumSw3VTpDXTSGftSoVb+jh5muSOKxwFQYbmBX6Xp01uldL5uQWheQr2MbTmJ6dH87nZXGZiZHYyMz09MpVjiI374JpnmGlHlMT99CT3POFYw7TjBHfJpyTBvWS4fM4UOgO7yXDArvrWi0sFT2ZA2E1+rnC3PMGr0gM3TfveNWvRsu9Z+cYehn1nDcvwzjMEEl3XIziA5jAUtDC0bPOhoDWMg2iJIIK3mrAXhxlCZyn1hoMDG5lmTQpWQYzhsC5cwxF6Zi34gse9musfdzOCd9EWxlEciyCM/dJlO0Nb4taFr25VH2RMq1Z5OLM+Ss3eTnaF8B7DkV1oUvA+g9JoFypQKjG+EVKDm+GuXSmOoAMfhHECnRGE0CSD6SJ6GuQynE7M7ORt9x5oMEy879dsy+OG5Y6JJYZDm4NqdMSwZCKFXklummqaCqHvP43TOE3BAHWg63HHc28YXnmLr7WQyNcpfBTGSZwmMirco9vhMAxsxmbL3CmIOzVhaWIHSiYam4iSMxiSlAzvwPkqSMG59WPcCC7Igp7HxwzxjeNGTVOUuJlxSrWKsLyR+5rwyVFwkWEmyy3L9lSu62qDbLWzw+1Uuatya82iyaFlLqmrXKrcrJY5dQXdWU3VKB2uURVdupNqZ6rT/8x29oZwiUo4bzsUH8OZHeia2aEa21ERXMYnktIru5Du35xPw8hijGHof2YkMX451XtUThk3BTzB0J7ftMmgTaYjuL6k6mKe+konUP6N6pNfJffqWhP5Vcs4Dl+iS1kgRrg7brjESEdi9/z9TRJG2V/D9TCmcYNEJLF1tZF7MYwpkBgp9pqwbBWhgpCebuF2EyE/36YvtKzgCxIUg+rIPZta9nBicyijq3ZyMgctDA7Sv+j2dQXzFAb9FnLivhdBGW37UYLBELTIwHAw0bU95wgWYUpchZSpWiPY4A739M29su7KRlVe5Tt0ZJZ+N6SMsiq5WmVOONNSuNFH4qLQTy+ImNQaoDkmBZAsLVJb6cvwtj8P0Ig0md4uzY77cyCaLC4j+hIHi2PLOJT8CUd+gHxCeGcd2449PrY1ureO48Gvn0ONxleQeI5kA/wY3ehZBf9FAe2l73L3q3OB88favsOXye5j/UPBFzgSC9bx4VNcjQWj/XUMPkX6RySl8WwdmSdo+ibAnr3+8yWyxeCvUIpjgViwEB1JrmB0GeO/bbHndrFPbtinisWJ7hV8toyZF5itQ4x3/4wFhic4mqQRafHvOJmjwFI9dTg3nr3+u+d7nzGP3mHK+lsaP/azD5BlDwL/AlBLBwjFuB8+sQQAAGMIAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAACYACQBvcmcvZ3JhZGxlL2NsaS9QYXJzZWRDb21tYW5kTGluZS5jbGFzc1VUBQABAAAAAI1V23YTVRj+dpN20ulYaKBQQCREStscGnvC0APY1iLQpEWi1EA9TGZ20mknM3Fm0gXLJcsH8AXkBbjFtWoDZqlceeHyBbz0Raz/zgESk6XmYvY//3z/aX/f3vntrx9/BjANk+HJ48d3k1+Fc6q2xy09PB/W8uFYWLOLJcNUPcO24kVb5+R3uMlVl9PHHdWNaztc23PLRTc8n1dNl8fCpUK8qJbihsihz+pTc9M5wjrJZny+bJrkcHfU+BS9cqtgWJw7hlUg7z53XKpF/uTkzGQyrvP98NcBMAY5Y5cdjd8wTM4Qsp1CouCouskTmmkk7qiOy/VVu1hULT1F+ST4GY7vqvtqwlStQmIzt8s1T0IfwzG7JMZxVx5lPFGV4USqBix7hpm4qbo7abW0wDBYcrjLLW+zDu+EZbgnYA4v2vtcfwUb5A89R112CuUiRZNjuCVu2XHURynDFZF9i4ZleNcYTo13yTxxj8E3PnFPwTEMyZAQZBjq6FPCSRnDCCoIoL8fvTjdgaJkEs7IOCtQMgYE6k0FSt16i+bq0p6EkIyLIuINDArc2wwBw+OO6tmO6HiipeVbDf+CglFcFpXGGIKd3yVMMEikmg3aotp09xVEERtABHEGv1Vzn2zmbiGOMifwjsBNdZLfQnudBAkzDJf/SyJN7JyMK2Jz5QJ/zfVw24BNThQkcVXGLObbxFXXkYRFmqlUphGS450TdHq6jnkN1wWh7zEoX5Ztjy9b+m3bsBimW0WynHNJY5q3apsmxVHPbdnqDZHETv/Tt1I2TJ0TE+/LWBNTB18jajTlTDo7HwzgpuCwJxYK4DYpVS2V6FJgiI93Vuks3ChC06SQFnU2GNhYAHdIQ57dPHXtPDeSKbiLjAj5SMEKVmVSHp2DmcaRnQ+NurFQ+/mq+9oPofAF8Ak1nredokqMXO3S+IN/p+RVR/fxQMYStildvQ+Gxa778P8UR7T4SGqk0C4q6aqJL6AKTeQYwi1sEfMF1Wzuw9pDjTcETTyN1EuFxkbdsZBleyGd56kBfTKAvBB3l+5rF82ODA6DjuIq3dWYot2X6P/BjyFxvZA1JC6Q2qo0Vroeagi6V3Gcnnv09i1F9dL6TTSSzW5XcKKK4WyqglPRHzBSxVlhnyP7fIt9oYqLwg6TfekQ46noC0wyfIclMqYZXmK2iivZdAXvHmKBABvxOuDoj0i8gVia9x9g5Iw/dojlradHf34P8esXQmp0lqVOfbSmI1WsZdcruOFffIFbDOlYo9zUuVgzW+oJ5Ehw/RCbWzRH8ENhRMWjbvoWnx79HjnEx89qZYaEchtlFmh8P60JijvA+efYWj/AJVpSB7hAS7rvJ0jZ7Q1fJOOPZnpjmWA2/hyfNhN9hs8bieYoUQ+tExEajGprL2kP1n9Fb+RZFTzrF2nWfdFMsBCh+Ap2f6mlYLUhe+D7G1BLBwjzb0e5OwQAAOEHAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAACwACQBvcmcvZ3JhZGxlL2NsaS9QYXJzZWRDb21tYW5kTGluZU9wdGlvbi5jbGFzc1VUBQABAAAAAG1QzUrDQBD+1mpTa9W26tVDDqKlMdQfKCqCFLxYUBQEj9tkmq7dJGU3KYjYB/EtPEhBwQfwocRpwZuXYb6f/WZmv38+vgAcYFPgdTK5bT+7PRkMKQndEzfou003SOOR0jJTaeLFaUjMG9IkLbE4kNYLBhQMbR5b96QvtaWmO4q8WI48NcsIj8LW8UGPvab9976fa82EHUivxZCSSCVERiURs2Mylmcx394/3G97IY3dlxKEQPkuzU1Al0qTwE5qIj8yMtTkB1r5N9JYCjtpHMsk7HLe9Wi2soNFgeqjHEtfyyTyr3uPFGQOigLFsdQ5WYGt7lzPM6X9C2PkU1fZ7JQNZypR2blAYXfvvoIyVspwUBHY+MfvYK2MdVQqKGF5GUuoCSx2+F60GDj8xwK1mTbvxCyN6wajbRS4A+qNhylWP7H+cDVFtfGO+hswdxe4LqDwC1BLBwjKKg1BUwEAAKwBAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAADMACQBvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvUGF0aFRyYXZlcnNhbENoZWNrZXIuY2xhc3NVVAUAAQAAAAB1U11z00YUPRubSDGmgIC0FGgVFUgiYqlJoJgkhVITWsDDl2kZKC9reS0L9GF21wkZhvwP/APoa4cHl4GBvvdHdbgSw4SPVDOSds+999xz997997+XbwAsoMkw3Ny8WX/stHnwQKQdZ8kJus6cE2RJP4q5jrK0lmQdQbgUseBKkLHHVS3oieCBGiTKWeryWIk5px/WEt6vRTlH52Rn/tRCm3xl/X18dxDHBKger83TVqRhlAohozQkdE1IRbkIr3uLXr3WEWvOExOModLKBjIQF6NYMNQyGfqh5J1Y+FGqhUx57HfJ5F/nundL8pyHx41cnJAGygx77vM17sc8Df1r7fsi0AbGGaqKd0Uec5UnxHt8prnl1tK5qOXZz6GP2N5hBioMRqRWk77eYCjNzN6toopdFezEFwzMN7GHilCaS61uR7rHcGC7ZBRlYV8etZ+i7pmYZBjzPBNfMZhBlmoepYrh0IexjR6XLfFwINJAFAxf41DOcJh03Mtjv6FYamqRtwr7Hf8UWT2PMnxHCz93O1YgpHSaUi+ZmKWKMuWldDQmTnxc9IbSIjFQY9gZCn1dZn0h9UYVPiYq8PD9e++BjmK/mQU8FgYWqJbfWgxW81PbchUncWoCi/iBGHXWzNaFbNCYbfXkQ+9telJFHWfyupZI9XqUdrJ1ZWKFwdlyvRTHIuTxeRkOEpHq1UeB6OejbeAsgzd9TE3bkbLTTNvczgfD5jLoRWvCJme5YWfS7tOo2PmB0HH9xDDezWTCNcOZbXr5R/PTkdte989o5LovEN1KlEb67P+Mxu9VXMQvFZzDrwzlBt0mht1NujxXB0lbyFu8HYvyFHbAQP4wTMCkl+Ey7Z4RPkb/TXeE3UMErrV3hAND3HWtL4vFDdc6OMKRIcb/xLRrfTuCM8SKax0twEXXOl4grmvNFMiUaxHVkaeYtOZeYP45To+wbP1Y2Ha4f73CuTvl1zDuNEtuyzp/4gVW/8alfwpdV+g7SXpoymhUx0hfCTdRRlhgJbKOofQWUEsHCNiWaX4BAwAAnAQAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAPgAJAG9yZy9ncmFkbGUvdXRpbC9pbnRlcm5hbC9XcmFwcGVyRGlzdHJpYnV0aW9uVXJsQ29udmVydGVyLmNsYXNzVVQFAAEAAAAAhVFdT9RAFD0jC8WlKgiL3yLlZdHtVlCThjW+YExMMBo2aPZxtr3bHZhOm+l0X4z8EH8FT0siia8m/ijjlAU1aOIkk8k9c84998x8//HlK4BNrDJ8PjzcDT96fR4dkIq9LS8aeC0vytJcSG5Epvw0i8nimiTxguzlkBd+NKTooCjTwtsacFlQy8sTP+W5L6oe8dN449lm33J1eK4flFJaoBhyf8OWpBKhiLRQiUVHpAvrZfGw/aQd+jGNvE+zYAz1blbqiF4JSQxhppMg0TyWFJRGyEAoQ1pxGXzQPM9JvxSF0aJfVoPvabmdKdvZUhzUGOb3+YgHkqskeNvfp8g4mGFYjiakC1KGx82dU4HIgsq9s/Nb3jXV3J31CaTIBHu7rzsM7p+1gzrDzHOhhHnB0Gj+Q//ehYsrdczhKsPlhEzXvmtqgy411/+mu5jHQkW+fu50NpqDJWvwS97NKRIDEb3j2rhYnmhuMKz9P9DpQLfqaOA2w7TJbAz7bs0LQV3cxb2KdJ+htm2/t7aKaTiols2BWbsZHtiqjRqm7OmdYK7Xe/PoGNfGWPyGxRM0eg9bY9w8xp0xVo5aR2fqin0JUz8BUEsHCFAafz3CAQAAowIAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAALwAJAG9yZy9ncmFkbGUvd3JhcHBlci9Cb290c3RyYXBNYWluU3RhcnRlciQxLmNsYXNzVVQFAAEAAAAAbVHLbhNBEKwhjzXGQB4kgevCwY68XjmAZCUohyBxCkLCEgfEpb3bXo8zO7uaGZsDIh/CN+SSC0g55AP4KETbAQESl2l1dVV1zcz3H1fXAA7wSOHL+fnbwad4RNkZ2zw+jLNx3I2zqqy1oaArm5RVzoI7NkyeZTghn2QTzs78rPTx4ZiM525cF0lJdaIXHvmzvP/8YCRcN/itH8+MEcBPKOlLy7bQltlpWwg6Z+dll+CD3tPeIMl5Hn9uQCk0h9XMZfxKG1boVK5IC0e54fSjo7pml55UVfBBmtek7TCQC+ye9COsKmxMaU6pIVukb0ZTzkKEdYXdJaqrdOFpqVx4iyZCQ2H9hbY6HCustDvvWmjiThMRWjKgLOM6KDxun/6tPzr9s2MYFrc56rxX2LsJmRiaWXkql/T2P/Sm5BrY+CfWjSTClkJUUhCqV9hp/8+0hQfYaWIbuwqrL+VN0ceahFO4LX95S6qklfOhdJtSldS1/W+4ewksoXu4/2u8LfQVqVF3a/Mr9i6WBLWEZPATUEsHCM8OjbmPAQAAHgIAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAQQAJAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCREZWZhdWx0RG93bmxvYWRQcm9ncmVzc0xpc3RlbmVyLmNsYXNzVVQFAAEAAAAAjVNRb9NWFP7u0tSt55aUNlCoIKtHWRKahhYoWQMbrAwpJaxTg4oiTWI39o3j1rGzaztFmuCFNx72xAs8wCPPSGupmAR7Amn7T9PONTA6xNBsyefcc797vnPO5/vHX8+eA1jANwwPbt9eq/xstri1KXzbXDKttjlrWkG353o8cgO/1A1sQXEpPMFDQZsdHpasjrA2w7gbmktt7oVi1uw5pS7vlVyVwz5tz59ZaBFWVt6eb8eeR4Gww0vztBS+4/pCSNd3KNoXMiQuilfmTs1VSrbom7eGwBj0RhBLS1x2PcFQDaRTdiS3PVHekrzXE7J8KdjyvYDbxy6JNo+96O36exk4UoRh3Q0j4QupYYAhs8H7vOxx3ymvtjaEFWkYZBj0AscRkmGq/gGCerJZZRiyaQQOj6iQ8x8C/t9KKNXBnhR9N4jDfzCCmvQjBlajes65vht9xXA0/5GCCusMqXxh3cAoMjo0jBkYwvAw0hg3oONT5WUNGBhR3kGGrP2GrRHxKA6XOzQHYTOk8ysrhfXBC00kD8PouzFd5VFHwxGi6vKbClqrFWoGcvhMx1FMq7jrG/j89frYv0bciJS8Go4zaH3uxWK1TUXka4X6+5iqgTwKOr5AkeHQf/asYZamoyI+lX0yvycPNSMb4qdY+Jao7iW4mKB5yxNEMoeyjhJOEkl++SOoBYU6xXD4HWIt9iO3K769aYmeuhcazjBM7i3hWkcGW0mK16Kc1bGICkk6N4QlA4dwWCcdzjGMJ2fcoFxb3ZOO9B5YprvCsK9OV+O7uNsS8prKh3k6p5EyKYwpickbUwInWpG8ZD9RqmEffS/QKocBigDjxeYPT7H/xDYm2DYOpLYx+SSReExV8wb8JwbpBe7khu89xI/FX3HgFZoZPWNP383dDSYwtflL6sYuzF3MZHTvRqe5mL6PCuEms+lHKBezafInsuldnNjBfGZmMf07Stn0Dk5fJ8LHGLnyGxabxaf48kVu+t59jCj4/iphryuy5pWXGC7mpndw/gn1OYXjaOJrJUJiz+JyYlewltgGfZVluEhFj9JMjpA/Q/1ukE//YzKN1N9QSwcIJkddjykDAADkBAAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAA0AAkAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJFByb3h5QXV0aGVudGljYXRvci5jbGFzc1VUBQABAAAAAI1UW08TQRT+BpAtpchFBVERXKuWQlvAWwVEsIgXrtZLbHww092hXd3u1tktSIz8EOOzz2iwRE2MT5r4o4xnBEwLBNmHyZ4z3znnm3O+mV+/v3wDMIQ0w9vV1XTytZ7lxgvhmPqwbizq/brhFoqWzX3LdWIF1xTkl8IW3BO0medezMgL44VXKnj68CK3PdGvF3OxAi/GLJXDvGQOXh7KElYmt+MXS7ZNDi/PY4NkCidnOUJIy8mRd0lIj2qRPxm/GE/GTLGkvwmAMQQfuCVpiCnLFgxxV+YSOclNWySWJS8WhUxMusuO7XIzvCDdVysTJT8vHN8yuO9KDXUM7c/5Ek84wk/s2KtnqPfzlhceYOia2SfzCAFHLcfyxxh6Ivsiex+HEEBDAw4hxFAbUXYQh4PQ0MzQmRP+Ave8ZVeaFWTo4AxnI70z/5juDSIeLZQhLV6WhEdHeLhSpJ5EKgOrjhiuQo6EcARHFZNjDOGDRGjoYDi0kJ5/kmE4f9AinTjRgOM4WUWWpvwoPUOuSrLkIXwXTitS3Qyhyh0NZxgaVcOk67uGazMc3Q62uZNLPPCVdijBWYSD0HGO4eQ+o9Fwgcp7K54vCpSStnxLeAzNmylLvmUnZnmR8vUi2oAI+hg6dla7WbJsU5B2YkHE1UTrVRHHZIhFdlPbzXYrnooMYFClGCKBx4tKuI88IQO4xBDw3U1wCFfUyeK4ytBURVLDNRIX9YbGUll3PvtcGH5V3S1XCCMYbcQwrlMTdrLScIPh8CaNbeUFMMFAUk4xdP9Hlhpu0aR8N5XnckJKvsJQF+l9mgrhNu4EMY671Mk92vM0tXk7poOYwkwIrWhTQpij8BQ9GWo09ELMlQpZIR/yrC0wSNdKo4eLtbSqW0Z/NaAGopHWBbLaUUseIBjN9H1C0wZaPkB9rSr3FuYd6ggFvIqW0f4Rp97DjmbK6CmTwtfRtI7+r4hn+p5tIFHGxbbLtJSR/IyxGnzHeGb2B0aje+Bu7sBN/0R92+T0V0xlqNC9fsLNrkU3ML+m+OM+rW3EpJ3+O4nzGHGaIJv95VaD2j9QSwcIVKd4qR8DAACjBQAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAhAAkAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkLmNsYXNzVVQFAAEAAAAApVcJfBxVGf+/ZDez3WxLsm0DSykOIYFcu+ltmkChSa+Qg5JNUpcW62T3ZTPN7swyM5uDSlERL0DFo5aqKF4VRW2EbhoiULW0igeieKKi4n0fqHhRvzezm26SNfan+eW333zfe9/xvut97/EXHnoEwBqcYTh84EBP0/7KASU6zLVYZXNldLCyoTKqJ1NqQrFUXQsm9RgnusETXDE5LQ4pZjA6xKPDZjppVjYPKgmTN1Sm4sGkkgqqQkZsXWz1+jUDtNdoyvEPphMJIphDSnA1oVyLqxrnhqrFiTrCDZN0Eb0ptDbUFIzxkcqbPWAM3rCeNqJ8m5rgDCt0I94YN5RYgjeOGkoqxY3GLfqoltCVmAQXQ9k+ZURpTChavPHagX08akkoYShJ6PE4N4i/s4CATnuxhZhThh43uGl2qqbFNcFwZSGGnMaqLXxQSSesHL5zDrsQaY7Td5JWiNFSuclwXqdtY9pSE41dSoo2LdG4Naobw71qkutpi4G1M5wf1TXyihWeJ6C+Jk/C2YWW2jzyDsUccoSXzyNK8JNLrlA11drEUFxT2+/DMiz3YikqGJYVki3hAgYP1yxjPMzJwPKafGVEavHhQqzwIoCLGBbPWpJwMfGqFjcUSyeXVszibc/SSYCMS0rxIlQy+OevS6hikCjzuvmYZVt9vQ+X4fJSVKOGwaXZ5GU52XkZQJLrUC/2NTAsneX7qq3iRBJC5I84tzr4uA+rxN5GrCabLT1sifycK9ehkty1WOeFhPW0l9j7lUSa+/BiR0ATGZkSwWyqmW/SfEpBu5vRIqJyBcOamgUyt0Dc22v7hWUVPniwaBHcuNoHHxaLr1aGlv8jqSVsYbh4IXOcfNrmxVZs98GLUqG13YclOE98dTBcRLk9qMbTBifpY+Ob09YQ5ZYatfuND10iGd3opoCbyiDvM1Rbo31KKpXGvp72nL9yKIMvH5fQw7CIYhKmPpWkoPSKSIXRRyKJukM3LR92ObSXOLSduuHkFVl6PXaLlT3ZFcUa8uGlzu69TqyvS3ODkkVxiAMMpUTcZijxJB3Eh5hDp46VqpmfOOdCaf/f2Bzfx4XyIYYLz673pMnBSb51LMpTwssS9lE1bFOorcZkS5dTimFymVznQYKhbmGre4cMfVQZSPCsPs2LYejUXvNjEB7XLGUsT+GN1OmGLCsVSomg95nc8MCc1S3s5pSmKMRFk7msQOEULJNRjJViBOPUW4V8M1/BfobQQtk+NwFFp7mZQS6Y4Dmu7LFv8eIAXkEdbebYcwS9iq4vk1vZiiL/5CXxrK22wFfjNi9uxWtIoBKLtSqmGp1dGQy1c6ogH+ts0zWNHEIbSRw1Ucf4UNZ4xx1vmHVFOpGVcAepnL17p2KadCXFPHgjXUVzOVrTaiImWsGbvbhLXBolgkmLMQQLJM781pnlp9C9FW8TIt5OPaGmbeGN7xAbD4mf9U65iRO1a4O6D+90yu1dDG47ATy4h2ziN6ZpMmFYXiiP6PZ4L+714k68j+G2XZt7utu7t8t9JimVd/T27pRt/8uzAyDrdCPLiiarmsmj1L7k6IzPRRHFsvkhE5O83XaoHKO+aagDabEnJO+0ZyjBZqp0MDk9ozAc8uADDIH/2FclfIgqgyaZOSfKq/wP4z4vjuAjVFTCcN1Qb7Lt9uB+8odzIg8+LnL3PuHIo1QxZwW1JSjoEj5JZUretbFOOowYgwKz7r+8JYrMgzjmxQPIZDMrJCo5RLr4hnUeHCdjCzJKeIg6tHCWTWSo/i+ZY28jdZ/Cw15M4xEqLbJyqxal6ZIS+4TT77s4HZvy8OoC0nbPk5Yv3+CDCYpkoyOBFH0GnxXnOslwwdxzVc2oPUXO4jbSmx0WPPgcQ9HuVgmPZzkLyZfwRYqIqo3ow3RJbCyQobvPsfl9GU948SV8hXK/r3dbsMmDrzpXVOu4JabFikJ+3d3qw1P4ukj/b1CzExvGQmPJRGhA1WKhLYqlWOMp3uZMoOKc36KZL0W8luOAVlVTjHEPvpPf/Ga1IAnfpRZEza+HypCbVnaWpB59+TndiCKdv49nvPgefsBwQ67zimopUFimPKpaQwsUrmrKmm7JZjqVonuerjyijdPDQr6mv4sK70e5ydA2Ie/O+jEdIqokoml6C3HRcDbHSSr1HzslRqjn6eSdn2XHj1D2GePBL7KVFRpJniX+iuYJ3QxpSpJ78BtKYEJmFn/nLCpGdMiDP4jJwz7mqAd/ogfBKg/+TPdHtdlYbco11WaL/V+b9+nBXymjBnUjqVhzMqpA/hfIqJmp9m/4u0iMf9BU3UaJLV4s9FLrTicHuNErbn2spulMogekC+VivqSvcjHn2ZCmTBvStEewhFbLCGP4F2F7UUw8QLhuGksjHZM4P4OVU7iUobN+CrUMd2MjfQQZTqAxEumawhqGDDZ0T2Ejw2l4WNcRLG6wMSJ31QUbMrhy15EzJ+uOQvzRpI5NWWWrSLlQVlUX2bNnElfVH8PmhmNom8bWSEf9JHbUHcM1K4+hM4NrJ2zuRdiJ67LctxImjnjVNMIRISGD/g5GeyNdGdywKYOXNbsyiDa7MxhsLqmrb1gZcAXcgZJJqEc7pjEc8SfrJpF61BZSSi8FgzxSbkM/ltuwgl5LAq7AxTaUcakNq+lhLqDwIo3CWYO2kO8YwZq6B9Hmt6ZwUxF5pNzGXm5jp7BkGgcipPaVx/HaCdsdL9CvF0W4hL6rCJbjdXi9I5EdIAeVEFxiy7jdlnECd0a6bfxNObzZdQrVAfqRp3FXJLh3Em/J4GBZcwZ3B8gFBzM43H0EnvoM3t0dPA3XBH31+9+zN4P3H4aPZG32fzCDj/o/1iH4O/2fmMSEn9w2GYk0u/xTGTzq/3Txw3ggg8ea3f7TAv+8i/BIsf8LYSIG3IyWpQyeJKoUCRZvcPu/lsE3l7v30vKTZCGpX7sr4PJ/W/A+nc/LsiybbI6VOYYjZ55oqKsPOsZn8MMJJ2LPOhFbhP3ko5P4CW7HQRsewj02vBf323CC/CLgY9Rriwg+RY1QwKfxjA2fxXM2dPxfQdVCJUzJVURRLcbzcLFiopXjp1iXje4heO1MuUOkmnD/z3Pu7xDYL3NYp8B+ncO6BPbbHNYtsN+fDZtA/ziDuss8whckfk9zSbH/ubDL/5ewOxguCbjCUsAd9tSFy0rqw2VSQ9j/fKDkOP6ZK6li+i1C8b8BUEsHCIy7w7BmCQAANRIAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAMwAJAG9yZy9ncmFkbGUvd3JhcHBlci9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAGVQy24TMRQ9pkmnSRPaEJoPGDZt1OkofUhRqSqhqqxACJDK2uO5mTj1PGRnAhUiH8IPsO6qKguWLPioqndGQSzwwlfn4XOv75+Hn78AHGIg8H25/DD+6kdSXVMW+6e+mvj7vsrTQhs513kWpHlMzFsyJB2xOJUuUFNS165MnX86kcbRvl8kQSqLQFcZ8XE8OjmM2GvHf99PSmOYcFMZjBhSluiMyOosYXZB1nEv5scHRwfjIKaF/20DQqD9MS+totfakECQ2yRMrIwNhZ+tLAqy4eUXZUqnF7XllVLk3FuZyYSsh4bA9kwuZGhkloTvohmpuYd1gfUznen5ucDa7t5VBxtoteGhLdBL5U1EFyZ39L7UNDc3AoPdN3WIzsNakJGhl3tXbP6P9vBUoKkq2ME2WpvYQk+g/28IHpeKaq8e+gKNC14ORmhy9+o8gaiG4XuHUY+r4Noc3mHztja00EF3Jb9YyVvD3+gO7/FM4Acan26ZbLCpi+cs8hfr3LVHUEsHCPGMLh9/AQAA9QEAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAALQAJAG9yZy9ncmFkbGUvd3JhcHBlci9HcmFkbGVVc2VySG9tZUxvb2t1cC5jbGFzc1VUBQABAAAAAI1SXU8TQRQ9QyvdfqBYUVD8YlUoCdsNqEmDxASlwEMNprUmPjXT3dvt0v3K7G4NMfJD/BfGBI0m/gB/lPFu0RjFB19m5py5595z78y375+/AtjAssC74+N2443el9aIAlvf1K2BvqZboR+5nkzcMDD80CbmFXkkY+LLoYwNa0jWKE79WN8cSC+mNT1yDF9GhpvlsB/Y6w83+hyrGr/0g9TzmIiH0lhnSIHjBkTKDRxmx6RirsV8o36/3jBsGutvNQiBUidMlUW7rkcCK6FyTEdJ2yPztZJRRMrcm8BuTGo/9KkVhqM0KiAvMHsox9L0ZOCYB/1DspICpgUWdpq7293Wi95ee3un1ex1O812b//gWVOg2vqt6CSZs0cC2pbluYGbPBbI1VZfCsz/HfQkdT2bVAEVgemtSWwF51EuYQYXBIopW6sP2ZuGi3+46hzFCfkFXBIoO5Q8VyH3kxwJLNfOOlk9S1VwGVdKmMM8F86GEdgCxn9pf3rmFFdxLTO6yJ2a9dPRarjBKAlPQwXmav8sfgu3M+VSBRqKRZzDHYH8U37s/BKDAn8wwdn5bnLSUEKZ93uMVjDFJ2DxC2ZefcRstfoJCye4Xr3Jywn0D7j7HpjIcrxOIfcDUEsHCAt+fs/ZAQAAsgIAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAKgAJAG9yZy9ncmFkbGUvd3JhcHBlci9HcmFkbGVXcmFwcGVyTWFpbi5jbGFzc1VUBQABAAAAAJVZCXwb5ZV/bzTSjMbKYStOIkKC4iREji2bhJBDIRBfSZzITrATgnJgxtLYFpE0RkcS0xa2tLSFLgtdeoWyPehhuqWF0kQ2uBBKIUBLL9pC6d3tTU96snSX9P/NSLZlyyHNL8lovu+99737+OZLrz38KBGtkWJMd91wQ9eGN9T06tHDRipWE6qJ9tXU10TN5GA8oWfjZiqYNGMG1tNGwtAzBjYH9EwwOmBED2dyyUxNqE9PZIz6msH+YFIfDMYFjdja2OpL1vQCNr2hiN+XSySwkBnQg6vxaqT64ynDSMdT/Vg9YqQzOAvrGxoubtgQjBlHat6kEjNp3WYuHTW2xhMG03Iz3d/Yn9ZjCaPxaFofHDTSjdus1332W4ceTykkM829Vj+iNyb0VH/jrt5rjWhWIReTnMQ+0/zAgfDEfndWMLGp9kqmOROrLQk9k1FIY/L2G9ndaTMLImCx1bRp1ARqbRoZI5pLx7NDjVNhNnnIQ7M0qqDZTEvODqvQXKZZOKgFyrIlZjp/2hETuyBeRV6NKmke08KZoBSaz1QBsmEzahkTiikSTRnZxr1dYRBaSD6NFtB5TJ7JOwqdz+TMmnu72qehtQNtCV2g0WLyl6K1K1TD5MaZ3fCRJMSYV0SdrG0PLacVGi2jC2GVPhhXpUCJ1Ww4hVYxuYzrcvAxpupAeKpZN9Xu91A9BTWqowbYyuYkbjYKmo279ewAjHgRkwMMwX8CpUIUZZoMD9bW0MUaraa1TFXT9xVaB5aypu2R43oBiFgB9gbaWEHrKVTUS2FHoUuZFOFLIOKhy2zxLwetS+OpePayKeKNe6WHmqhZo83UYqt1t542UlkPtQkCm2mrTbRTTxoe2m6vwV6ugw3X6unlKu2EAzQMpk0ERzZuZFTqAF9pYzChi6BKZ6CVDWXOLcNJOSPuot1C81cwrTw3IpY43YLJPbbD2+IIBXnoStoodvYx+ScFejQRh0snk3oqFkbKAELGSCsUgVEDNr0DGu2ng7C+nkiYR/emDqfMo6ldg8Lh4TUMD7maetyAuQZv/Sr1wm428WAOtIIDZhL+h2ToMgftKFlfNkOEZ+bKPg0a6aN+wc3AWWWwoRW6FrbQ0/25JFSwZ2gQ/lQZnpKCQDJBSTcdJrDF16k0iKC8Lhc3siqlsdKqEkxYkRnKZI1kUBhapSNMsy0yuWw80RiOZ5D9jkGobiPrtwH9BY8Y8pt9/uyA4d9xZYc/YDT0N/iDrckhsbs5OXRET+SM2gaVrscJMSMTTccL+qkq5wxvpDcJPm8oxrF1elM6rQ8hBv8N2tUzghemFSXaLQZyuJRlELyJ3qLRm+mt03VpOUFskkYVehuUN0Fhu54ZgLgKvQNZ3bZqpnnIZhWOEi6F7NAHcdyt9E7hJP8+jRC2FfoPCGApBC61MDCZ2xYzkbCTOYjcQe/S6Hb6TyZfoDyM7bPv1ugWeo+oReFpXBdA3qfR2+n9TOteLxiWNxt9ZtoO5+5cb2FfobuYtgXO4rQ29qapENOUW+Dnbo0+QP9VTIqW7dqzRlrvFcntQ0xqXLxlzbSQarKC2gvrUM9H6J4K+jB9tEilZF+hjyObob3oNI5lrfBG6A7TvRX0Cfok6kTKWi6tJwXv8dCn6D4B92mm+tfVl/3ozupZcH4//DWpD/UaeE9ndxU8vGwyBjufpQc1eoA+xyQFgyqdZAq+7nFNfRCwkI8UGhEBcK46f0ijUXoYWgkGD1y9+VCdSp/HS1LPorhmPPSo4KaOTqE0ZHK9mYJ7Vwfay2brL9DjAvqLyLxmqkTa/edYAl5XVJvgJP3i2CfptFDZU0xr/nV8hZ5BNiuwK/yiKQ0JLwqcAy+lXHyZntXoS/QVUAtcnqkt6HNzwyqVvgaVxlMx49iuPngZlNfuoW/Qc0JX3xS+3D6TOr8tQJ5Hk2qmmgppnKm5nOf8q9x+h14U3H4XBcLiVjBr8fp9ZK/lqAuinMOdWuMZEX8xD/3QLnE/QqouYAQPCYSfFPtDi5+mImZbOi0C7qca/UyUzoqomcqiEc3sNIY89AvRUN1Ov2RaMFWU5lw8ERP199coPgiA32j0kmhNXKL/TqGGBsuKPwMZSPp7+oMg8Ufkj6xpb3roT6KReYn+DGOhR0BaLKrXQ3+le4Vm/mZpHWocTBhZ9A6v2Ob9X3CSwGyRHbDyBwz5D/o/YaX/h4xmqtMs9AUeOiM0/ACEoLkWnaI52lIxD0uip3iAHaUtqVU6FXYWOpfxpmpqQZjY2eRhhVWNXewWCoWiLz0X75iWDSbaC/agKvAspgvPDUfhOUgI4SkFuVBg7+BKN8/lqmLjXAqg8DyNq0Wu5s0qL5ghJ4pYYQwQdYwBglTG0OAYzE1tKwtpesayX5LLeQljtLidMVrMK6dVhTFiuHBIUyKBQjK5gopKjszJy3mFxssY08XswbSRgeeM94NTi78ouB4OcK0bisW4oRZDwcPWYHELB0V+yLQlB7NDHm6E/3E1Y6aQM/HrDQ+vgYNh4eJpeXe8NK3hSwQE5oYLJpVONAT9esIK+LZjUaNgrQ1Mi2xW/SiE/mQukY3Dxf1269GgckjjjSLgLihAxUwj40+ZWYAfMfx6asgGBeRmdOUzDsx7kQe2o+8Nm+bh3KDCGEQWtrZtbdob3tOzraupNdzWs7e7ratn+66ONg83obXjLdw83jg3iMa5wWqcudWeMQv2GYJrnlMKgNK38jYRG9tBduqZKu+AjUHWSB3xcNgGxOxSWTh/0kjDu5iWBUrHsBlGD74CAwZ3Ma0qoxg7vifcbDsCKYFUx3vsS4Cp+9NPrS3XV/KVvE/jvXwVWsIyp4bN/n5xyH5RevbbXB7U+AAfEpPvMcQhHLFHJL3NjPmlpgyJwuVH2zEjmhNtFPfC90WyWVlWK1NzlH2moXGUUf9ccP++OGpsSVaaclSLBZNL63Za4gGOu4GOeWZRGaRWjGMJU48pnCjvkuWoKoy+ZDYm9aNm+vCeeNIwRVLhdg8P8nVuNhlt5gLwegRSTLdMXWAGWctaKMs5jZOMuWlNoJzUto02lcFtt5V3TKDD888rg9yeymQxmCr8htI5prgv7gNEWU72Ws72JoR2WbONO5l14o0a38AYqg6dleGzGKPsZgkvhZNu0viN/BY0IrG4aDB7c3bLOHvKfRDfzG8TZnk7jNSo8i1ICphfs+12X+Xhd9pFAtMVIzdhmlIyep+xNx1nWjLDtcw46Tv4XULBGKpmZc2m7pb29kKjwO+2rlEYg5Sjo/USld8HDyy9DeswMhm932iN9xuipB23k5VllJS4ZVs9c7IqTwP8fIDv1vguxiykglbzUFa4nByoPdDs4Q/xh4WcH0Ek5QZjSO6Y1wMHmkVR+ih/TKB9vFjW0MYPNDbH+9tTWcPKAcNAilmHePiToAPg/8ZSoN3Chy3u0/he/rTojx4Xv+4XTRLifO5k0zTrGVSlB0XGNhlzirK7a9eOtpY9Kp+cAmndRPGIDTkKyOvjgzb2w/bamL1mwz1irz0KLzeORRO5TPyIdS3bFI1CPR16ChpCTDaW86u2GRGgzcf4C2642ONM588cPstXK/wEU/qsoVHqN+UYKVAru1c2t9l6P63xk/yUbW7rWgYVoWQMLdzV8DP8JY0U/jLcoSERPawy5g1X8nAMo7mHv2Zn8a/DBePo3NPoDsw0Worn7HXMGudNUOzKpbLIepNag29j7mkxc4mYVe6jaQPO5R+07s/8sSI1f5+Z9ifM6GG/uLH0q/wC0xxw3dSbMRO5rGHb8kXropC/q/HzopdQU3rKFDnWapp3ePgH/ENRb3/kJPFnTvMWB/G3HitOElB3F2qjmbQtad1u8s8wEaePqvwLjX8uKqwmVDWgp1IGkv7SwKSr1qi9mrFsVgCB6n7NLwnU3zAtPiuowr+DW2bTQ2FIKZLHTKTFPuj+gf+o8e/55dJJ/fU9U2GMH5XWzUBLwswYV4hLt8TQxJUNzrM2xABmNZ1/5b9p/Bf+e8nUsGcAhkLpw2TizCQMY1Bkih0C/B+MxvFVxmQiR+GTHj5DiO8nJSr6QVmJFEmC+IWvMR5JxqQiOSTMJI5EvFeVFBTuMmI2m2YWga8Pii8k1iyNkXO1Irk1SRMZxJ1AXhBHwLNrS2MspSeFcrKiIByYctkteaRZcCRpdnFSLHw7sMIhjCoDNUpzxaWuv/AtIeyRvOJ7wzJpHhrmKQFUxJiPDDnecE3aEZdq06LO3gIvCyWfJi2QzvNQm/3rfCHLgdLPHTNgW2EuLdGkSukCVBnkfRFWtu2mXjnZqzhwqVQDA0rLIEhGfLpBGj+WLWH3vMDM50krpAsF+kr4MCzWUGhsE3ouFR1Ac2336cJeqlQrLATMQu5Z8ToNdiEbSXVSvdAD5hdvmftsRWpUMbBZXxU6jOyACUm3lKF8YBrlyWeljT5xs9loU8Cha6SLNaqQ1pbcO5RCKZL4hhJPHTEPI+VsLDMoznxBXDJaSRukjZq0XgrBu6IiFj3SpSIgKiUMP20TyTIhvn8Z1k23rVZ/Uc3+HU1d/niquDy5PPpXrsisbFAl8Y0GWRXVegqvZfRThtfitCM1Sc3oDCTk24pCPytu31WpTXzqK3PFNOmORNqGSi9hTmr0w/fAd8x/VI9nAWTl+/F67NetDObPmlb6D4G6GKNEURe/wzjaH8/4c/YnElXqxNETWsLAOQBdYLD221eJEH43ZqWzXw4iHMyjxRyIIOpCUZG6meoL9dQ/MarZNUmodWJstUYcHLSX6bIW5DosxTD1pZPxlOGPCncbRMmyxCwkM/8OPe3vS5tJf9SMGb2QrWipfeIm5iysRQRr+4stYqFP6B7CuH9sos5KB4ufay0anabl861G31Yzl4rZ92bS1cUrEwtmEjJGNFl8gEXVFZcwnblkr5HeI3igpeQkxSqoiDlS8Y+lXiL3n/Grgkj1VjnzNCdP1XlalKelkXCeVlbV5qnxuPJi3Shd8hBtYgoPU9W+Mdoc6ajL05YRaq0Pr6orvm/Dvx1V4arOPHWN0N48XWX/DY/R/sjBg50jdEg+SbrzEaqLRBxV0W65yujOU7yq7iSZxdXrsJoRq/uKKzmsHBUrkaohAFa94STdOEo3j9HbIyF5jG6JBE/QbXm6c4TeO0LHx+gDkZAz6JNH6IMP0ceYQi6f6yFCI3ucT/uc4vdnmB4D6ZCSpxPH+eM+pSovxKTKMRoFrkAdGz7zLNYfydNjx8kHNAXKecKn9OTp6Tx9NeQcPnMf9r9u7TeI/bmb8/StdQKwGqAv2KDVTvka69cTefqeQDoKpB9YSH6BJE+A+hTXBNjuB+nHd9FCAP+PBewapoox+llkhH5+Kgg0QIZUSO1T8/Sr4zRP0BK/i7zNDRZoh9wCym1BvcXnHKOXIj53T9VvR+h3eXo5T38Re09D6Dz9/Th5i4LabLz2jA8vr4acznVqteqDul6757WTPme1Kl8jJK1WLVFDqkVWLSFrM/NqCCA+NQQCw2dOwU56KbOvilOiM/JVAGgWGHlm8XudTwZTLI+y1jlGt4PzEa6oyuV59gn25nn+hLWpvcTWXl6Y50WRderdVCnoeXlxnpfuGz7znM8Sxac4qlUhjSJfUzC1tf05nxwJiiNXVkWFnnj2vhNcJxYajlO3Dw64OeSsimI9EnJZPKyWbxI+Yb+slT9KC4Tb4c2R5/VgBlEzTMYYb4x4edMIX3rK/nmZ+Pkgt+zzctsot+Os01QtQgsiOYHjc0F+Cnp55yh3zrA7x1pxgooIzWBEvNZ5efcId49yBDKIBZ+zZIUPRDohY9V1iKaidPjRMMJX51k/7nhijKORSP0YL4uMcGyE+0/w4Y4xTgI8WH+CM7DEKB/tGeHrx/iNkQ5E3hjfAJLOuhF+c3CE3wr4SOcJfoegT1vAsJdvzfNtkXXK3cKxZ/tc1bbOhe28fHtxT4NMyjDN8rkc1YplmWAEZEb5zjy/N6R6+f2j/MFIyA1f4nvy/IkxvhdOJK/D66eqVTD0mbnL8/yA5VsKXj8LzxJH08s9to+FFGE89QSfABXo1UoCms8Zcg/DR7BipQXpPXUhd9Cn+tyCUlAQOsEPjdMSYSGIQaGCmvsEfz4S0orU3D5nWIioFYmtrPe56yYROlVKqPDTNU7zBH9xjJ+MhH0Q0yfXQ59P5/lZKwVHOkSQXFWIHUu+HRaJr45jYzvSmedv3EWrg8KYNAuPb1n5xD/Gz0cEbn2Pl78j4o6/V8T7/inu5BBi7Mfz+CdJL//0Zn29k0OKT3mK9hZW5zvffTdtH+OfR6zg+mU9OPhVnn9redGfIp1P0RKEOWi8gr+V9PTNo/zaMGk7fUrnMM9HfuqEcc88sHOY3T7lNH2nLi8xfAdakFzAsI5/5THaHLZFrfNKqhBICFFbbwlRUz8maZGOEamiPi/NiXScprn1j8ofJq3esaZjmJzcUX+a9oxJlZGDYUBU5aXqDvkRWhxx1HePSovy0uIRyT8qLcfJAa+0Ki81YLciEnZ4pYu6vdJqrF+CFQUrq7oZb5v25aXLPiv0Zi3vdNQBbMuqUalVqGwa89x5qqhjGMcrbbWM89O81O6Vdgoru0tUvipY1NY4mk/r8Uoddk70SrsmYMcB3DMA7BQQXumKVSPSnlOTOK4Hx1cWOZ4iyVXFdQsZmAdO0Ty0C7NVt3SIFtFyCkg98v3ySeVZSZdH5S9az2fkF8TTVela6MoRuVa6GqznWtd667nJ1WI9W1xbXQae7a6w9bzCdcB69rgM63mD6yblcjxvct1mwd/hulM8lcuVHdazQ9ltPbuUmPXsV24UTzQxUfzXQDutxmYjSbSbHLSfZDLQ8MTJRUNoe25Ew/MuNDr3kEaopfRJ8tB9NIvup9n0NZpDz9Fc1qiSq6hK+jR5pYdpnnSKqqXHab5jMS1w+GmhYwX5HLV0nmMdLXK00PmO3bTYMUBLHCm6wPFW8jveQUsd36Qax99omeyg5bJCK+Q5dKFcRSvlAAXkeqqV19IqeT3VyU1UL19FQfkQNchRapRvpovkj9FqeZjWyPfTxfILtFb+M10iv0Lr5NdovXMpbXCuoo3OIIWcW2mTM0yXOq+lzc4MXeY8Qpc730NbnPdRk6uSml1rqcV1J7W63kdtrudpq9JK25RbabvyFWpXXqQdysvQFeZ16Esixz8BUEsHCKvvOiD/FAAAjSkAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAIgAJAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJDEuY2xhc3NVVAUAAQAAAACNVwt8W2UV/39J03t7mz3artvSvbJug65t2r1aRhiPrQMplDLWjZJtUm6T2/ZuSW65uVk3XiIiIooCgtqBKKhUdArMLi0UGKBuMEBRVB5OXoLgA1FUVMDNc74kXdpluP5+6bnn+77zPt8559t/8IGHASwRqwV2XHHF2uWXVnbq4S1GPFIZrAx3VdZWhq1YrxnVHdOKB2JWxKB124gaesKgzR49EQj3GOEtiWQsURns0qMJo7aytzsQ03sDJvOILIssbljSSWft5Vn6rmQ0SguJHj2wmFAj3m3GDcM24920utWwEySL1pfXLa1bHogYWysvVyEEtDYraYeNM8yoITDTsrvru209EjXq+2y9t9ew65vjCUePRucvVlAgMHmzvlWvj+rx7vpzOzcbYUdBocAsuZp0zGh92IqHk7ZtxJ36JiLTO6OGApUIt+rR+VErrEc3mL1paRNbJJlp1TN+kkAxn4mYCWe1aQuUZTHb7Eyyp9bb0VGiuOHUr1/bTEQlfIykdpndSVt6VGBhSx5D2tOwKfco0Rc6PWZi/iIyPh9Rxno+t8KMm84pAnbVWL3zYVn1PorlMeu48HwvSlBaBA/KvdBQzF/TvPCmv3xeTMBE/prhxSRM5q9ZAu4qpivDHA0K/AIF5Hry35SqhS3jY0jWeXONUDBfYEK34azROZDpaE3OEmYt9eI4HK9hAaoEph1m2eZwzq1KmtGIYSuo1lDD4hVi16rHjPEapI8TswDqmFk9eZp9EI8IBKqOPHgkbUYUsViMJSxtKRlfZ21R0SCgOlb6lBcnsIAaLBeYlzeCY6RI1wVZIc5LM0EZSY6y7O3SsRu8OBmn8O6ppK6ZYC5erEwvrRKYRMau7ExY0aRjrNGdHi9Wp607XaDi6Cmh4GN0IfVw2EhQRi6inOyu+sgM+n9WfATx/Axs4kJDvmvGWRrOxNkCxx8jkYJzSNv0wTOtGDngXE7IVqwZUybaticcI6ZgLXnOsOlel4+qvYa0dEhXQ4+RBuuwvghtOJ/ueJduRpO2cQ75Qe+mlCnNlzAXIMTSNlClyMNQwSZKul5eiFJFKM+XShTkC9Gh4eO4iMIYoQLskBWd6TCGKXkojE1RPZEgEWOSVi6SCga6+HZ153davsuswCRlcqtaW4++pKGxLRnzYgtbtBl0S7Uui4uy4YR7BObkTddsiWEr4rA4eL1khbGNeCe8sNNWkOrlh4tzkxWNUhqT1ISCpECREet1trcQBfk4a6E8yWtkYB+2adgKyvqiKK2weOJYUrVw4/hacCkuY3mXZ6Mhuay0bV2yV/AJDVdyHXDrkci4cGSKEN+qq/ApPnc15cBYXRRcQ/EwHYPcaFESTR2jbXNmnfS4Fp8txmdwHRl05L6Cz1NSUH9tNbY5XnwBpxTjenyRimNcLtyIebxwE/kxanV3GyRoRr471CI3SdrNuKWIHP9lsno1pw+llT+SLRV+FV/lMtLBZWeHgO+onBTcRp4hkV7czse/hq+Tx9MJKXthybgUYF/dgTs56N+k4p2bT158m7vBZtyVreqZTFHwHarqjrWyram5OVsUv8t16W58jzxKM4LZtX211RePWnqkKTOACDTkuTrHUj+/jx+wfvdQNifjl5i9Ldz8j5bNo4YR4X3YxYQ/TDeNdP3cndYzRWt1CXljVAwTYhtUZbdSiag8eq/I3hQvHsAIc3mQrM1KXZXs6jJsI7LW0GW/ejibOBmNsuuP5AmCbBKPaXgUP+IKMbqbpsns/0TDHuyl5KWqFGmhmcyLx9mYPXhCwBOOWglaeZLb9B48RUnSZCWjEX/ccvxdfP39lK09fioHlE0/pXTMk0PZkCl4hjyS0LuM9TZVmdlV4wrFeG/8As9q+Dl+Oa7RZq/jRzbaX3NOPycg6lS8QMaRyQkrHiQlf5OtAJJyXY9t9aWHwN9ytzCcTFH34mX2wkt4hXS2EnVxmg1UvEbNlmNuW2SYQ2XnuGMaAUil1/GGRt3j99nek64cnHIk+i0B1/q20T6Ss0eUf8SfivAH/Hls15J8FfyFFHKsFquP6jhN54cVyuWRV6G/4m8a3sG7ZF6fGY9YfQkV/yBP0ajq6GacyuiMXNuaenS7zbg4acTD6ev9Hv7F9P8mr3Wa8UzMVbwvMP0wFTmKh4XRaetDTqkeehGoOEgV5YSGBhq9yTBuZHrcipukr7xQwiUHEuHmUrrxKAOQ8Gj4r6D53kNd33a4bOeamhF+kleooohPanRHjthWhJddoJvOGVy4aXpq9oqJYpImJojJlO/ZS9Mc701menfmzolSagOkec4OTZo5Y2jOBikxRZQzz6nkoKq8R9I2TddEmfCNaVOkWEx3HBY5QxMz5bS8ILEgrorZ1Am65K7AijypuPGo92YsY1LPL+YSb1HJApaPyTW6I2SwIhZQec68ndJL42fl9CrxOl5UaeI4sZCaBM03NFUlex2vqKEiQqu1AtWHi0jCcPzGNiOcdPgW+ulaxcwEvwUTXFTowoo6FkuMHaPV6JOTrFgkhwexmKbVw9LXJuOOGTNO3xY2euUoI5ZqYhk3tlnZCmRE/LmtyN9F3EhCIyWZ30yQPn56rJkRP3UDuVeniuVZGdJhtFFP78McGcEx5SRnY0XO3Nd8bs4GPdFmH6ZozvrHiOScOY0i3ETvZhrVuSS3JmOdhr2OPUS1zUMjHXkWnskl/NoCCHozkF5aEtI7S0J6l9FL30XnyzCF3tOrCKsm+kKCs6tDmzb5CnZjas1uTK/djYrAbsz0eXZj9hDm3gf+K0El5qXpPNtIJnF3X1Y9ggWhlupBTE9h4QhqQtUdQ6iV6KIUlpU20r8UThzCikFUpHBaPxpqUmjqRx3RTKVfRSiFM4bREjpnEOeFWveicMD1Qc0utBOTjSnoKUTaq0OhTXSaTkxvHcTMYAGRBT2DmB0KFtam0NM+iFhQcTeqhY1FAcldLVf7odUGfAUpXOzzpODsQPEwLgmqA2hm/IpQUN1Hsg697VNHcGUoqA3hkw83FrsbveXe8uI7McenlnuXhIITpNLFPs1HX59uv9orBg694tOCqk+9H58TSH/cINCPpfz1JYFHyCVBjfT/CjvEp3WU9g/hVjIz7YsUvjGMb7UPHHqC9CscxEAKOwM+ZRj3smKDZMYAXmwvLyq8A3t9yj48WitPhYKKZKewg1MYYu/en+X4UFAdkVJ9qk8LZEIRSJ9clHOS4kAOGcGe0CameJS0G8KPh7Avhf1BNYWnfWpQGUAr+6nIxwt7akNZQ5SO0p+RIcP4VQrPl744ak12X+0oPSANfXV0SwSVgka1vMh1Uaix6HaxqFzdcfCibOTpN1My25kTf6oItB0KFnBcS383jDd34e0U/l76zxT+008Rw5PSUk+g9AOyRrSO4L+hwofwTijk83SE3KWH2grKhGjzNBamREF5YUfbkFBSophSJSVK+rGFjW8dEWUhHy1MGxIVZP2ImEn7Q2IWuW4/OXovqnyFZWJOUC14CEooWOT2KW3k2qKUmEeBO9A6gMn0q2AW8+ljamBYVKcEUb9KmCphYC/m+gqyvvF0lIn6cVlQW12TEkva5WWJEDivNXDviFgW4swfEg17+DsdxzJxgqR9vkycmAkk7WMRvQJuEReIk2gKv1vCnTTDMhzE/RI+hn0S7qeBjOGLeFnC1/CGhG/hHQnfF4Ih9VhNwglimoQVYq6EleJECU8WayWMiV7xHGEXi2slvE5cL+EN4lYJbxPDEj4oHpfwcfGkOACIp8UzEj8gXmPousp1net9caqE74mVrhtdN0ucIeO3uPolzpDx21x3S5wh4ztd90icIeO7XLslzpDxIdcTEmfI+FOuZyXOkPEXXC9JnCHjr7helzhDxt90vStxhowfdLslzpBwqoZNVBk3owI8u5xN1bUdbmxEAb3WPfRELMQ1VGFvgoq7qGJ+CI1oisVqeEU3JogYJroaMMl1Nia71qHEtQGlrgtR5nIwxX0qyt1nYap7Daa512O6+wL43JukHLes4u7/AVBLBwg04ZRMwwsAALoVAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAAC0ACQBvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbCRJbnN0YWxsQ2hlY2suY2xhc3NVVAUAAQAAAABlkdtKAzEQhv9YtVpXaz3deLcKnrou9QBFxRtBFBRBQfAy3Z1uo9kDybZeiD6Ib+GFCF74AD6UOFsVERnIzPz55k9I3j9e3wBsYE7g8eHhvHnntmRwQ0no7rhB2627QRpnSstcpYkXpyGxbkiTtMSbHWm9oEPBje3G1t1pS22p7maRF8vMU4VHuBU2tjdazJrmz3y7qzULtiO9BreURCohMiqJWO2RsXwW6831zfWmF1LPvR+BEKhcpF0T0KHSJLCUmsiPjAw1+bdGZhkZ/zixudR68TsfFBcrY1Bg8lr2pK9lEvlnrWsK8jKG2e9r/CiN2W/ipM+o1C/8d1loS6W7hk7JWhkxMXXy63KRF7dlanhPJSrfF1hY/mvwH165FCgtr1w6cDBRQRlVByMYHcUQag4qGCuqaYHBA34lNLgp888MoFZQXNUKhrPgcDDO6yx38yhxANXVq6sXTK49Y6r+jJknoI+W+halT1BLBwiTJO0AagEAAOcBAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAACAACQBvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbC5jbGFzc1VUBQABAAAAAKVYC3xT53U/B0mWfBEP2xgiHolicJAly+YRMDEJqW1IYiwexRCqQEKupWv7gnSve+8V4GSh3Ub26raubboWuoYs2+JsS7uygeyUFvZqsmVdu25du2e3NVm3da+uez9S+j+fJFu2ZdJt/Pjp3O/7zne+853zP4/Pr33rk9eJaAvnmC6eO3dox5MtQ3rmlGFlW7pbMsMt7S0ZOz9m5nTPtK1k3s4amHeMnKG7BhZHdTeZGTUyp9xC3m3pHtZzrtHeMjaSzOtjSVNkZO/Obt62ZQi8zo7K/uFCLocJd1RPbsbQsEZMyzAc0xrB7GnDcXEW5nd0bO3Ykcwap1ueChEzaYN2wckYD5g5g2m17Yx0jjh6Nmd0nnH0sTHD6ey3XE/P5YLkZ1p+Uj+td+Z0a6TzwNBJI+MFqY6pLmePjBgO05pUjf0ptbiTKZS1z1g5W88yravFuLu8DNbVxtlMruCap5VePZmM4br7dEtXp3TW2rxnwQ0QV3evaZneLqZHY7fQ8JY61Vo8qHujPa5r5Idy2N72MJMv1vZwmJbSco2C1MCU/F9pGqQmjVZQQ5jCtKSeArQyTCGql6/bwqTRYvlaDZfpateGTZs2MY3UvFLZaTtTymGm3SmHlUfKfYOeIGNn2y02byjTPoGi+G/E8PpyuusyNcXaqmSpyZ1hup3ukHtHmcLVxwapBS4wzpqu5yoTPRKmDdSq0Xq6i6lZsRY8M9fZZ+dywBRw6gYpxlRv5Me88RT2MTVWTlScMocD45TQqI3awZrDjByGExpibcdm3ztMHdQp58FeTTNSehxHV+KDtEWjreKwxaa723SghO2Mh2lbScvt0FrPArbNsdTcANgpt9lB98j+bqals3UM0r1MQdPdIxcJ0y5qXUz30f1Mjz+oTB7Ngskxhwpy6ejGVndjNGsbbtSyvWjGtjzdtKK6NQ62kk6m4XZE95wdw8DIRj07Omxa2ahxVs94ufHo5mm+8Y4Q9cwK15K/g9QHVwzbTl6HTe+JzQfEsRo3nM8Vpj30gEa76UGmjd8hgoLUz7Q+9paIVAE0oNFeSjH5XfMJQ4GmP0z76YCY7yDieEHzla3mwjh2NP9/td0hHAm0i8f72+ZbJEyH6YioIiGfM4dC9A7BCfRtq2GMXtv2oKY+tg+KDXq64xnOhs1BOqbRccFc22ybWHpeUoMnKaUGjh+Tk04w7X1rBMnxuiNXncZStMYu3FdnWokSYQ6PVxJeX7n+MG2rgZK3diJgP/hQT3LLtu0hggPXKBbXyBQc0xvv3If0hYy32xwxJEhGEHgwt0KLlQH75hpnlv1QWwZMY9JJjUbpFNOqau36rbGCBxGGng9SXrLDbOVLeLM1smiskh2wNmsbio4fX8gAgdixXoGiRwWNXDqNaCqMZXUPOgex1N8v4s7SuGjyBNgzOds1wvRdUhFcegrsWaUvBCJL9YbpXfRu4f3uitZVN+4tmLmsVIXv1ei8AKVhhqPf8gxVMb4PpvPsh4yzpT3zEDsdsD9AP6jR99MPSblGb+CNhumH6YDE8I9gSqBi4X5rY33zd5cVgZD30o+JLu9DZVvYQwvs/IDsfAZlxLMruq6I1VT1x+lDwvthqRrvLKD7CdNFybC76SNiQPRJHmz60VJyfpZpGbDTM+TauYJnSE0O03MiYT39JPPowwJrM6Narag9XCsAosM6kJC9s9VqtdLohmry5PXx6Kh+2ogOGYYV9fQ8Qht55IzpjXa0Wn22NWw6+ag3qnv4MaIbqzcPjuoIhMFCfmN0zLGx0RuPIhrH5axSskiWk0VHeR3JCvkJOpgugteRzIRCkJUtUd2BauUwhcHUceXt0WHHziPKPafgSpZzVW/XIReL7q6+zREn1x1tdVutSrxHU3bJRqXp6TxZ6UO7VW6BmGhPxoNP5i2E6KfQt81481DB8sy8gW7HGBO5QfqZOQV0VsKf0OgFehGFvOReFOEaofoIwian2oHm6Ro/Gzov0cfE8R8P08/Rz2tolz6BICxYT5iI7Ttq1p6ZPDCrF8GOzkfMsVL/ckWjq5IdgoblSR1hisxqR/ZYhbzhKPNBh0maEv6XZ8mrYgnSNWAWTf4+2zH25Iw8pALin5bm4FN0HQFtGWe98sLcIJmuQL9MvyLsv4rMPU/rPVBzPEi/Do0RGvtRUML0ioTEZ+jV2U2piTziWHquU8CmGtrDji6PBb1UtCXF/Cb6OVcfVqElspju+o6CH0r+Fn1Wo9fot+VkdFF1+VOosrjr75Ri9wtIOBUn9BaGhyWiDhS8qsz7e0y3Vbtp9urva/Ql8UtkxrPVDGVo/YFGX6Q/RG+mSsz0Kh4SsVRt01UuM7sO4D5/TH8irv1TeKXWgUH6M8DtDMoTDP4XUgX+nL4qP0/JLmR/TUFRQi0Xpl+kXxKE/hX6tD67kMuqmq0YoiH6G8mAiAe/lO8Q/R0To07/A+664AMmSN+QdsQeCdM3JZ7+if4Z2fYQHpUS1SH610p5Uz46POrYZ/Qhgfe/QzHYplxQw/SfApX/oP+qLocHqgL5f8CPHhKPRsPLjC4UWJbhdR451K8CawnEH0TesrzSO3N5rG1OZ4P7MSDBiwQXAGmgYwyNUogDAN/uqmQX4iC6iVu81IJcD9gLXo84JtPtsTnazB6GeTGHNdZ4yZyStmDvW1XSeBmcxMsrz52yzCA3Qn3PPnIoVXXR0mIKB67gZo2beOXsbakg3waIIvlLLbFKzyAk1Dn7Z9YgaTWv0TjCa5EC8Dzp1V0z01NANUDiLeXymd6yct+FhCFS+Ha+QyyB51sj8Jkp5NDWHHENp2cEEsPcAlRgeT2cL7NJNR3i1koCmic0yBshyjW8Q6ji6HkOlksfngwLtpRzCgO3cVzjGCdgGsg/YzunDqOo2AXkRe4Pc5I76qFTJ2oFzikfPc3hj0k7xpt5i8jYChlKGT1b5gjzttISUtOq2IIxzzuE5x44c0Sd4eHeqVILxTvRQmHx3llvLYSWIUDcBeCjWRXYl6bmJvPSLDz5Nu7R+H7uxQbTld7OcQpjKL9h3o1MiZU9AZJ/y4lwEnqEEQfBKi9Mw5I/idx3q79dbNhtDOuFnFcZH5yzHef3816x4wDTzv+HoCDvQ82rtCZ46XgFt28UFzVU57x3r3jjAB/UeD+/HZlsuvc4o7tRc+bWHSEe1OhNehE6EaKCQnwUmcxRT6PDdpjTUtvXM9qBhurcoJqfEB8H6sotXXfUK7k6GgvxY9Le1miOqyP6cYlovIZ8ebctxBmm+K2hOp1FS7WGDejNw0iJ0yExaKOKVjA5k0QZedPfZ2eRDJelTMvYX8gPGc5hEUWbURWC8LaPGuTvP/hqkL/+KBqmJaBBwGApLUPOPInRRvD7QdfE08cnqfEarUgPTFJz/CqtSlylSPtVWnNZwaee1tK60iZ+EFvqQBcn4kW682iRNl4kbYqSAxN0f6JIm9MDr1LdxM1vxK/R1nRqku6+vsu33d/sX/c8rYs3+7ekuwNF6rpAWiKCj51Hz/t54ubriYH4y/Q2pgsU9X+agukBX/tgY298ih4auEZ70ymOT9K+CfoQuIAA/6VqtsF5bGNx38t0dBF6nfWYX59Op+KN6Ul6BMpeoFhCnX9n4hodFwUfxfjxdOoVWpa47n+O6hO+LRPk51erjxiad8QSNYgzBolPwETMp/Abh73rYOODtAiPMx+dhrHeCys/i9kJWP91+OWbMOdN8NVThrJlo9ZhXTz3ufZXyX+5cXiKcvuvkZXu9icm6Z0Ny+lToe5AxC8WO5PeXvcsNSYjAV9zXZGenIC16QPNdYsuidm/koz4i3SuSN+D/eexf5Ke9m0PNAeS15+njmRzYGsD3Tw3Re9Jd2Pzj+K+iyP+5ZuK9P6jEI+pDx49H4BDvtAuci6k9xfpJy5ApUS6SJfg7OdTQTFK+ni33xcf9CcGA+2DdcnBxp+O+EsWeiEN+/zsDaXFDVigmVbTNtxsLcqz0Db8bpu211JwBGCv98Fer+G7XtrvMjp7seID3R5X/kqC/IK4aYPvvrUJ3GateDaeWLsFjp2iyxcp4Hvp/CLo/gY4L71UBi6apbKNt5ej4/lrdDWd3gc1i0X6pODuhuDuPD5+jQGZz6T3i2SYPlmk35iizyngfP4CLZNL/e7RiZufn6Bj7clr9EXh/FJaPDNJX44EJumPivSVbn+Df46/PkLLKv56feLm15PpspPewP+Jm+8eiOOkN260F+kvL8vPDUSohnjtVRZaoegqiiraQq2Kxmi7ovfQLkX30F5FU3RA0UN0XNHjdALWJdJpWNFRshUt0HsUlV/hez99WNGSXzT4A9jE6iLkjq9VbIi5oMoYBxPtU/TXl9P74+krFBGkJU40fn2S/hYIAYYa/x4/7eXvf8QPoFSkfymzJk80/pti/e/plRs4i+CfOmRvyVbfQoSoExcBoJK5+Ep7PK1CeSBRZF/pRGC7yLDkB5u4riRKuerS0fJB7SeaOISTpnhpkRsqOqzZL+ZG5mKfuJO7/dwdUCyrEBTi1e6guBUA+bJ4lNcJ2hFX8j8tccF3FnlDE991osjtV3hTke9Wv11F7u4ONMTg/H1Fvm+7v74rVN+lRQLtCgVhRKg3xX1FfuAiPb5SWxlqDj99vCukd+FTx8cKfjBf/8xHKbxSa/Y//cxFWpVcKZNGV+gKpzC1UivyoUiw3dccBpBEQpfWFZq4+dxAJNjtnyC3TLuv0ZvpJj48yUduJCLBSCB5hR9u4nfg+hXYIQ+GEmKqOMx57OhlZO9tA7JN7Aa7NvGjsCgSAjc08Ql8JtUVh5o4W7J0fJJHblRLfoVCAvdzEb98wStvxG9QhEboJA+xqehj8G2ezqqxUBmfpSd5A8ZC12L8LnpBjYXK+EX6mBoLlfHH6bIaC5WxRK+Mhcr4FfqsGguV8Vfpa2osVMZvogGUsVCM2ccNMlZUxu3cpcZCZZzhZ5SepbhoBPrfDqw+Ros4RT7OYMwqSy0i37cBUEsHCEtDILafDgAAvhsAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAHwAJAG9yZy9ncmFkbGUvd3JhcHBlci9Mb2dnZXIuY2xhc3NVVAUAAQAAAACFk/tOE0EUxr+Ry0IplnITLCiut7awrEVNGmpMDIkJSYPGGoz8N909bBf2UvaCMUYehKdQo5j4hw/gQxnP0CIktGEnO7tz5vudbyZn5s/fX78BrMEUOD46elP9pDeltU+Bra/r1q6+oluh33Y9mbhhYPihTRyPyCMZE0+2ZGxYLbL249SP9fVd6cW0orcdw5dtw1U57Cd25elak7VR9YzfTT2PA3FLGhUeUuC4AVHkBg5HDymK2Yvj1dXHq1XDpkP98wiEQKYRppFFL12PBObDyDGdSNoemR8i2W5TZNZDx6FIw6DAxJ48lKYnA8d81dwjK9EwLDB9Hn3BRGDLpkcaRgSGDlKXEgGxIzD8zA3c5LnAYHGntC0wUCxtZ5HF9Qw05LLIYGwUQ8jzjBc6AjPF+nneRqL2UVPchTU0PsYJ+RpmmAlT9pnpIG5ovmZ9whRJv5bFDcyNYhbzAlM9BBoKAlpbBbwgi0VMZ7CAW7xkebodgUcX17LRklGDDlIKLKqV6r02XxMwr0IuLXIJuvK9K7DWl93c7GtYuRrqYflAWT7kwhc3+mae+z/XI0FZJVjmqm7wKRTI1fnQbaV+k6K3CkeFa6pBYJTfvCoy34sh/s9inHuDR7O4xg3IlN//xEThBya/Qj15TGG6qyl0Nbnyd0weI/MNN5dPcPtMuIQ7XWGpK8x3hGMd4b135S8cFFjlfpi/YJHC7nexZQxyA6Y62LjCFhZPULwMDpyCpf5+hROsXMb4EjCqfAf+AVBLBwjqm7DZPAIAAB4EAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAACYACQBvcmcvZ3JhZGxlL3dyYXBwZXIvUGF0aEFzc2VtYmxlci5jbGFzc1VUBQABAAAAAFWPz0rDQBDGZ03/xFpFn0DZUytNQ6uFUEUQwZOgKPS+2UyTbTebsJvWg9gH8S08CR58AB9KnIgenIX5+H77zSz7+fX+AQBj2GPwstncR088FnKJJuFTLud8wGWRl0qLShUmyIsEiVvUKBzSZSZcIDOUS7fKHZ/OhXY44GUa5KIMVL0jOU1Gk3FMWRv9zc9XWhNwmQhGZNGkyiBaZVKia7SO3iIeDU+GUZDgmj/7wBh0HoqVlXitNDI4KmwaplYkGsNHK8oSbXgnquzSOcxjjbYNDQb7C7EWoRYmDW/jBcqqDS0GrXNlVHXB4LB38xNQRVhvPfvv+jMGXq8/64IPnQ60YYdB44q+ACNokq2L0fFhm/ouuQNSj7R5/Abd199ADbbA+wZQSwcIp18O2iQBAABqAQAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAwAAkAb3JnL2dyYWRsZS93cmFwcGVyL1N5c3RlbVByb3BlcnRpZXNIYW5kbGVyLmNsYXNzVVQFAAEAAAAAjVRLc9NWFP5u40SubEpICAG3FGNo6pfiJkDrOtAHNDQuedAYSEUf9Fq+lkVkySPJCUymTP8GWXTLlpU84Jmy6K6L7vob+i+anuuQxHl0Ws9Y0vnO457Hd+7vf7/8FcA0GgybT54sFzdSVW6sCqeWKqWMeiqfMtxmy7J5YLmO1nRrgnBP2IL7gpQN7mtGQxirfrvpp0p1bvsin2qZWpO3NEvGqF2uTV2ZrpKtV9zxr7dtmwC/wbUpEoVjWo4QnuWYhK4Jz6ezCC9OXposajWxlvopCsagVty2Z4ibli0Ysq5nFkyP12xRWPd4qyW8QuWxH4jmbc8lIbCEP8cdUnsKIgzDD/kaL9jcMQtL1YfCCBQMMYyaIjjoxXAhPd+zttyCPGwmsy22A8suzHG/scBbMwwnDoEKVIahq5ZjBZ8wDKQz9+KI45iKGN5iiPfHVDBMppa/XQyZ3o9jBKMqTuAkw8m90Ht5KTilYlxGGu+PVHZa7aASeII3FZyhtA4m30vibRUJvMMQsV1eYzi9Z9Tn37N9F+fkMUmGQcN2fRFHSpaQwAVKeFU8rohAHtLfE4Jm4ngPE9LxfYZj+1QKMgxRKxAeD1yP4dQ+3/JrnALkkI8hC41h5LBeQYFBIb4tikdBHFMYjeEDTFNFDgHUsp2ofSOmmJdxRdp9SBkELlVJHDtou42SbREfq1BQYoj5u5yYjOLqPvZsmyugCat+wL3AX7EC2p6x9OGYcqqf4XMVn+I6w5t+u+q/TmEsXT4yhy8wK61vUq9t2gsZmMhRjmMOZan4imRTTmAifbjcIzswjwU5lkVypEEzFI9w/J+hbuNryeVlhsSedrntBFZTzD4yREteEgru7DC0r7TrbcuuyVW8R+s163mul1xvCCcp6UjqZGuX5sk6sfZaFN/8S0t7dL6vYgXfUpPk4jtEaO0/2rEvCyrle/wgQzyQDxp49oiT+pA7Dc9d59XdbaqquAuDro/dJVrqq58WOnKDbrrIeQwSn+SPho8o/RlMkv7AEGmAzWwXMX2+g+MhxjYxmHvexbiuL3RwuouEvpjX9GwHZ0OcD3ExRPoFJhluZV/gEsNTlOjjIwZ9McTMyLUQN55u/aXR93AsxJd6KRLi1i9bf+bORPKELpEiRGXl2dZvuefzzxAl7OKrLu7qXazo2QcjegffhfgxBM91UHtF+SVwFuuo4xwmeu8JZLBBWWeQ78kb+Ln3ltUN0PMNDPwDUEsHCHqsTvCcAwAATgYAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAALQAJAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyQ29uZmlndXJhdGlvbi5jbGFzc1VUBQABAAAAAH2TbU8TQRDHZ6HQUo/SFhCkKnKIfYBSWx6sgChPKgmKaQUDISHb3vZ6cL02d9eSaOSD+Bl8oYmNiS/8AH4o42zvTkt72CY3szv/3+zuzO6v3z9+AkAGtgh8urzMZT+IBVo8Z5okrojFkjgnFquVmqJSU6lqyUpVYjivM5VRg2GwTI1kscyK50a9YogrJaoabE6syckKrSUVnkNalNJLmQJq9azDl+qqihNGmSbTOGSarGiM6Yom42yD6QauhfPZ+YX5bFJiDfGjDwgBf75a14vsuaIyAtGqLqdknUoqS13otFZjeuqdZbeqWkmR63prz17wEAie0QZNqVSTU/uFM1Y0vdBPQJAUw9SVQp3rCAT2WiqNmamD3O4qUu3xTTwwgfDev0x5k++4U/eGmmUCo+1T+TLNLC3n6xUC3vdKzcrEPUsbwBUvqvr5W6XCqnWTANklMNagqiJRk223JTrQVYweE+hfUzTFXCfQG4sfCjACo37wwk3cyovcxvbezulBfid3+nL/1Y4PxgXww40B6IMJAoNOqfj+DB/cFkCwgncFCFjePQGGLE8UIAgh7t0XIAzD3HtAYMhg5vaV0oViV2vHN+WDAa5PEBiWr+qtAozE4m7FHDbcxKOxbm38sDu1VdHOHNbseIf2b1sEGLTOu4Ai4xoRXj/kj532+Y32gRWxlrEj1iCEkdcd7cWeYYNDRnfEE9vlh5pA6PC69iONF2DC+I/EEzvmaTxb+Nogjefy4gvHF8Rbgh7h96FlBdsO2jZg2yHbYvNbFluPNoge3jT8buJoAbMStNHE0dHJyXcYC99qQiR8pwmT3Jvi3nQoGmzCjKcJ0a/AfyGIQdxOEIYe/AP0J2abMOvE5yBpx0No+QJ9iW8Q+WKH5yHlhkcc/KErPungaXd80sEzrviigy+544sOvuyKTzn4I3d8ysGzrvi0gz92x6cdfAVWXfCZz3Z4DZ504RHsjoOvw1MXPOrgz2DDDbcbi/cSvz3Q+wdQSwcIaeLVLe8CAABQBgAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAoAAkAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJFeGVjdXRvci5jbGFzc1VUBQABAAAAAI1W+XcTVRT+nk2bEMLSUHbQGAXaNGnYLZsKBbTSjQaKKQJOk5dk6GQmzkxaFsFdQXFfQVxREEUtSqcVRH7wHH7wj/J430zSJG3q4Zyc3Hnv3e8u333vvvfPvzf/ArAWtxkunD7d23oyOCAlBrmaDG4OJlLBcDChZXOyIpmypkayWpLTvM4VLhmcFjOSEUlkeGLQyGeN4OaUpBg8HMylI1kpF5GFjeT65JoNawdIV28t4lN5RaEJIyNF1tCQq2lZ5VyX1TTNDnHdIF8039qyrqU1kuRDwVMeMAZvTMvrCb5bVjhDUNPT0bQuJRUeHdalXI7r0QOO3HWMJ/KmprvhYph7VBqSooqkpqPdA0d5wnSjjkzldI00TZkbDAs6bJ28KSvRnon5LQyzS1qO09mOpqxFxZg06hKampLTDE0d08fTZuvkdZtDAdoqq7L5KMOqxkp71eNo6mOoaWzq82E25nrhRj0h79GbG/O8aEC9Dz7MmoFaLPDBgxnia5EPXswUX0sYfOVxuLGMguTHZMM0bNf9PtyPB7xYjgBxoGhSshSeD0HM8ZKVhxhm6VxK7iSYru3XFYaGxqaOEv0xU1R4iw8rsFIAVhEgzc0eSeeq6fA7twgoMuJDE0LCcTNDa1nONkeyanJdlZRi5rZneSAvEif/RATtJVJxI0JFTjjDSUoMq6sWoTziQkwqN6P7e9sppihWe9GCNQxzDF5hkaG+sVJb1G0d1osqbKAEk2XKO+gMefAIw7x0pRWx4MMmQVMDNjPMFDQ5jB8nHhqnhjht0JXMb8U2wTxtvXnGVJcM86uYFgk8ju0ilB2TEuiRzIwHO6cmIBZ82O0k8MRUb856u2P1KfJbbjWWkdZu2BjLZz3oYFg0yfTEqg9djv1uhk33REn/NJzsFZz0kitjWlf7nFD300k5Iedi1Fy4U70D1Esown455xQt7sTUT9NG2fQzDv5QGd4h78gE3uFEcvADE3hnOungqUT1pN3FzWFNH9wnZ7mWN+0j2u5DGhmhIzO4GtvFxFYMisxoj9cbU0FCiUqrQhOoHMMSstwnKXJSMvmkU+KDLs5/AwyB6xcNYSvywvgQ4YxpcY42eTmG4wJ+grRLJejNqyZFs+tYguecZvU8Q7hNyyvJgKqZAdFoAoXuFii14kBK17KBVSuMVS0enK7o8E5R3XiR+ldK07OSWX1vHOyYfCtUPy8v4xUvXsKrDKH/32H7Mro2LA1Q+3D69OtenMIbtPFLKmVpnmVYWN5z2tVc3iSjXMq68VaphxRbkmPzbS/O4R3qqtVuCTfeI7IFY7SPS/Ayy7aVD/ChF+/jo2JklSpufMJQm1A0sWU/E5fNpzhPTS5ZWVUPPmdYWa1VVD9fXwiXXzJs79ICQ5KS54Fh2cwEBvlxu4oBI8cTckrmyYCsVq03cVCs99eCie2C3W/pKlIr9rQH3zG4bQ/dKdHM2qsGdBlXRFF/IJ5Lq+10l6TFVfEjgycn6QYVxZymIdLRuoafvfgJv1Ahh6pvfQ9GBLx6z7mM30QIv1eEsEPT6FlF22OUuoQdQmFmmjDoEI5h3AsLf1Dp2+hpRaXqoJdUVz47wPV9YjtiDZ1RNz3walAvLn76qhfXvi3pSUDSDSISc+j/FsDcWAIXzf7dHGoOhUPxMfhvoSEe7xrD/FEsHMXiUSy18OB5XIqEIvGpP8KFx/GwhcZOC2H6XGtho7+VBlvCRyw8ZqHNv4tGTxZGe/ydNOoJH6mxELPQ53+ahgcLi4f9z9IoURilLBy1kLXwnAXTwrCFk1ewrPMWTsVdt+GOd9U0x/wvRMbxWngMZ+5cp9SC2IGreBNt6LZlDw7Z8jAGbanghC1P4owtz9K/kCCqgkVSECZKakguuoVz8c7mcGgM74YtfGzhwnWSF+6Q3kzSngfYxNIDp4DsRR3uI7kxdAOL/RctfHUXvpD/InNRtiMiclpYuqdWhB/vqPFfjLlCMf83zZTDGC7dISTDn/TvJSv19D3flnSNF+wHCpF5iHXb5ASijqRTdroGCtotpC2i8YeW+r/fM46roSMCNI5fr1V4mmlvCcdTvgr2OmFvFLE3J2NrCVtnY/cWsPtpXEtym2ChmUiIb3bdRd1i10j4LmrDI8svoJZNZqOTqmmTEZ5MhkhtOYXD7NTvQ81/UEsHCK4Q2uBTBgAAxQwAAFBLAQIUABQACAgIAAAAIQCwt6Me6Q0AAL4nAAAQAAkAAAAAAAAAAAAAAAAAAABNRVRBLUlORi9MSUNFTlNFVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAG2xPj1AAAAAPwAAABQACQAAAAAAAAAAAAAAMA4AAE1FVEEtSU5GL01BTklGRVNULk1GVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAEst73wiAQAAcAEAADEACQAAAAAAAAAAAAAAuw4AAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lQXJndW1lbnRFeGNlcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAn+y0Qm4CAACzAwAAJgAJAAAAAAAAAAAAAABFEAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVPcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAU+PrOVwCAAC2BAAAMwAJAAAAAAAAAAAAAAAQEwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQWZ0ZXJPcHRpb25zLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAB9e8LctAwAAXQcAADwACQAAAAAAAAAAAAAA1hUAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEJlZm9yZUZpcnN0U3ViQ29tbWFuZC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBYgpgP2AYAAGIOAAA9AAkAAAAAAAAAAAAAAHYZAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRLbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhANImcdNMAgAAlwQAADwACQAAAAAAAAAAAAAAwiAAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE1pc3NpbmdPcHRpb25BcmdTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAvy2DF1wIAAEoFAAA9AAkAAAAAAAAAAAAAAIEjAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25Bd2FyZVBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAAb4QlWkAQAAfQIAADgACQAAAAAAAAAAAAAAzCYAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAIETaMkNAgAAQwMAADMACQAAAAAAAAAAAAAA3ygAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblN0cmluZy5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDZoNqjpwEAAM4CAAAyAAkAAAAAAAAAAAAAAFYrAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRQYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAAjGddcwIAAMcEAAA/AAkAAAAAAAAAAAAAAGYtAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRVbmtub3duT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAxbgfPrEEAABjCAAAJgAJAAAAAAAAAAAAAABPMAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA829HuTsEAADhBwAAJgAJAAAAAAAAAAAAAABdNQAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAyioNQVMBAACsAQAALAAJAAAAAAAAAAAAAAD1OQAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmVPcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA2JZpfgEDAACcBAAAMwAJAAAAAAAAAAAAAACrOwAAb3JnL2dyYWRsZS9pbnRlcm5hbC9maWxlL1BhdGhUcmF2ZXJzYWxDaGVja2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFAafz3CAQAAowIAAD4ACQAAAAAAAAAAAAAAFj8AAG9yZy9ncmFkbGUvdXRpbC9pbnRlcm5hbC9XcmFwcGVyRGlzdHJpYnV0aW9uVXJsQ29udmVydGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAM8OjbmPAQAAHgIAAC8ACQAAAAAAAAAAAAAATUEAAG9yZy9ncmFkbGUvd3JhcHBlci9Cb290c3RyYXBNYWluU3RhcnRlciQxLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhACZHXY8pAwAA5AQAAEEACQAAAAAAAAAAAAAAQkMAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCREZWZhdWx0RG93bmxvYWRQcm9ncmVzc0xpc3RlbmVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFSneKkfAwAAowUAADQACQAAAAAAAAAAAAAA40YAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCRQcm94eUF1dGhlbnRpY2F0b3IuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAjLvDsGYJAAA1EgAAIQAJAAAAAAAAAAAAAABtSgAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAPGMLh9/AQAA9QEAADMACQAAAAAAAAAAAAAAK1QAAG9yZy9ncmFkbGUvd3JhcHBlci9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQALfn7P2QEAALICAAAtAAkAAAAAAAAAAAAAABRWAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlVXNlckhvbWVMb29rdXAuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAq+86IP8UAACNKQAAKgAJAAAAAAAAAAAAAABRWAAAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVdyYXBwZXJNYWluLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhADThlEzDCwAAuhUAACIACQAAAAAAAAAAAAAAsW0AAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJDEuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAkyTtAGoBAADnAQAALQAJAAAAAAAAAAAAAADNeQAAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwkSW5zdGFsbENoZWNrLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAEtDILafDgAAvhsAACAACQAAAAAAAAAAAAAAm3sAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOqbsNk8AgAAHgQAAB8ACQAAAAAAAAAAAAAAkYoAAG9yZy9ncmFkbGUvd3JhcHBlci9Mb2dnZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAp18O2iQBAABqAQAAJgAJAAAAAAAAAAAAAAAjjQAAb3JnL2dyYWRsZS93cmFwcGVyL1BhdGhBc3NlbWJsZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAeqxO8JwDAABOBgAAMAAJAAAAAAAAAAAAAACkjgAAb3JnL2dyYWRsZS93cmFwcGVyL1N5c3RlbVByb3BlcnRpZXNIYW5kbGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAGni1S3vAgAAUAYAAC0ACQAAAAAAAAAAAAAAp5IAAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyQ29uZmlndXJhdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCuENrgUwYAAMUMAAAoAAkAAAAAAAAAAAAAAPqVAABvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckV4ZWN1dG9yLmNsYXNzVVQFAAEAAAAAUEsFBgAAAAAhACEABA0AAKycAAAAAA==", Ae = `# gradle

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
`, de = `# Automatically build the project and run any configured tests for every push
# and submitted pull request. This can help catch issues that only occur on
# certain platforms or Java versions, and provides a first line of defence
# against bad commits.

name: build
on: [pull_request, push]

jobs:
  build:
    strategy:
      matrix:
        # Use these Java versions
        java: [
          17,    # Current Java LTS & minimum supported by Minecraft
          21,    # Current Java LTS
        ]
        # and run on both Linux and Windows
        os: [ubuntu-22.04, windows-2022]
    runs-on: \${{ matrix.os }}
    steps:
      - name: checkout repository
        uses: actions/checkout@v4
      - name: validate gradle wrapper
        uses: gradle/wrapper-validation-action@v1
      - name: setup jdk \${{ matrix.java }}
        uses: actions/setup-java@v4
        with:
          java-version: \${{ matrix.java }}
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        if: \${{ runner.os != 'Windows' }}
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        if: \${{ runner.os == 'Linux' && matrix.java == '21' }} # Only upload artifacts built from latest java on one OS
        uses: actions/upload-artifact@v3
        with:
          name: Artifacts
          path: build/libs/`;
async function je({ writer: _ }) {
  await _.write("gradlew", Le, {
    executable: !0
  }), await _.write("gradlew.bat", De), await _.write("gradle/wrapper/gradle-wrapper.properties", Me), await _.write("gradle/wrapper/gradle-wrapper.jar", he(Ge)), await _.write(".gitignore", Ae), await _.write(".github/workflows/build.yml", de);
}
var Dt = { exports: {} };
(function(_, p) {
  (function(i, y) {
    y(p);
  })(Ct, function(i) {
    function y() {
      return y = Object.assign ? Object.assign.bind() : function(x) {
        for (var O = 1; O < arguments.length; O++) {
          var N = arguments[O];
          for (var W in N)
            Object.prototype.hasOwnProperty.call(N, W) && (x[W] = N[W]);
        }
        return x;
      }, y.apply(this, arguments);
    }
    function c(x, O) {
      x.prototype = Object.create(O.prototype), x.prototype.constructor = x, s(x, O);
    }
    function r(x) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(O) {
        return O.__proto__ || Object.getPrototypeOf(O);
      }, r(x);
    }
    function s(x, O) {
      return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, W) {
        return N.__proto__ = W, N;
      }, s(x, O);
    }
    function e(x, O, N) {
      return e = function() {
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
        var K = [null];
        K.push.apply(K, S);
        var Y = new (Function.bind.apply(W, K))();
        return B && s(Y, B.prototype), Y;
      }, e.apply(null, arguments);
    }
    function l(x) {
      var O = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return l = function(N) {
        if (N === null || Function.toString.call(N).indexOf("[native code]") === -1)
          return N;
        if (typeof N != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (O !== void 0) {
          if (O.has(N))
            return O.get(N);
          O.set(N, W);
        }
        function W() {
          return e(N, arguments, r(this).constructor);
        }
        return W.prototype = Object.create(N.prototype, { constructor: { value: W, enumerable: !1, writable: !0, configurable: !0 } }), s(W, N);
      }, l(x);
    }
    var f = /* @__PURE__ */ function() {
      function x(N) {
        this.cache = void 0, this.cache = N;
      }
      var O = x.prototype;
      return O.define = function(N, W) {
        this.cache[N] = W;
      }, O.get = function(N) {
        return this.cache[N];
      }, O.remove = function(N) {
        delete this.cache[N];
      }, O.reset = function() {
        this.cache = {};
      }, O.load = function(N) {
        this.cache = y({}, this.cache, N);
      }, x;
    }(), b = /* @__PURE__ */ function(x) {
      function O(N) {
        var W;
        return (W = x.call(this, N) || this).name = "Eta Error", W;
      }
      return c(O, x), O;
    }(/* @__PURE__ */ l(Error));
    function g(x, O, N) {
      var W = O.slice(0, N).split(/\n/), S = W.length, B = W[S - 1].length + 1;
      throw x += " at line " + S + " col " + B + `:

  ` + O.split(/\n/)[S - 1] + `
  ` + Array(B).join(" ") + "^", new b(x);
    }
    function v(x, O, N, W) {
      var S = O.split(`
`), B = Math.max(N - 3, 0), K = Math.min(S.length, N + 3), Y = W, H = S.slice(B, K).map(function(mt, st) {
        var at = st + B + 1;
        return (at == N ? " >> " : "    ") + at + "| " + mt;
      }).join(`
`), ot = new b((Y ? Y + ":" + N + `
` : "line " + N + `
`) + H + `

` + x.message);
      throw ot.name = x.name, ot;
    }
    var o = function() {
      return Promise.resolve();
    }.constructor;
    function d(x, O) {
      var N = this.config, W = O && O.async ? o : Function;
      try {
        return new W(N.varName, "options", this.compileToString.call(this, x, O));
      } catch (S) {
        throw S instanceof SyntaxError ? new b(`Bad template syntax

` + S.message + `
` + Array(S.message.length + 1).join("=") + `
` + this.compileToString.call(this, x, O) + `
`) : S;
      }
    }
    function a(x, O) {
      var N = this.config, W = O && O.async, S = this.parse.call(this, x), B = N.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (N.debug ? ', line: 1, templateStr: "' + x.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (N.debug ? "try {" : "") + (N.useWith ? "with(" + N.varName + "||{}){" : "") + `

` + A.call(this, S) + `
if (__eta.layout) {
  __eta.res = ` + (W ? "await includeAsync" : "include") + " (__eta.layout, {..." + N.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (N.useWith ? "}" : "") + (N.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (N.plugins)
        for (var K = 0; K < N.plugins.length; K++) {
          var Y = N.plugins[K];
          Y.processFnString && (B = Y.processFnString(B, N));
        }
      return B;
    }
    function A(x) {
      for (var O = this.config, N = 0, W = x.length, S = ""; N < W; N++) {
        var B = x[N];
        if (typeof B == "string")
          S += "__eta.res+='" + B + `'
`;
        else {
          var K = B.t, Y = B.val || "";
          O.debug && (S += "__eta.line=" + B.lineNo + `
`), K === "r" ? (O.autoFilter && (Y = "__eta.f(" + Y + ")"), S += "__eta.res+=" + Y + `
`) : K === "i" ? (O.autoFilter && (Y = "__eta.f(" + Y + ")"), O.autoEscape && (Y = "__eta.e(" + Y + ")"), S += "__eta.res+=" + Y + `
`) : K === "e" && (S += Y + `
`);
        }
      }
      return S;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(x) {
      return u[x];
    }
    var E = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(x) {
      var O = String(x);
      return /[&<>"']/.test(O) ? O.replace(/[&<>"']/g, w) : O;
    }, filterFunction: function(x) {
      return String(x);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, I = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, F = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, j = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function V(x) {
      return x.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function Z(x, O) {
      return x.slice(0, O).split(`
`).length;
    }
    function z(x) {
      var O = this.config, N = [], W = !1, S = 0, B = O.parse;
      if (O.plugins)
        for (var K = 0; K < O.plugins.length; K++) {
          var Y = O.plugins[K];
          Y.processTemplate && (x = Y.processTemplate(x, O));
        }
      function H(C, U) {
        C && (C = function(L, R, P, X) {
          var Q, tt;
          return Array.isArray(R.autoTrim) ? (Q = R.autoTrim[1], tt = R.autoTrim[0]) : Q = tt = R.autoTrim, (P || P === !1) && (Q = P), (X || X === !1) && (tt = X), tt || Q ? Q === "slurp" && tt === "slurp" ? L.trim() : (Q === "_" || Q === "slurp" ? L = L.trimStart() : Q !== "-" && Q !== "nl" || (L = L.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? L = L.trimEnd() : tt !== "-" && tt !== "nl" || (L = L.replace(/(?:\r\n|\n|\r)$/, "")), L) : L;
        }(C, O, W, U), C && (C = C.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), N.push(C)));
      }
      O.rmWhitespace && (x = x.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), I.lastIndex = 0, F.lastIndex = 0, j.lastIndex = 0;
      for (var ot, mt = [B.exec, B.interpolate, B.raw].reduce(function(C, U) {
        return C && U ? C + "|" + V(U) : U ? V(U) : C;
      }, ""), st = new RegExp(V(O.tags[0]) + "(-|_)?\\s*(" + mt + ")?\\s*", "g"), at = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + V(O.tags[1]) + ")", "g"); ot = st.exec(x); ) {
        var ft = x.slice(S, ot.index);
        S = ot[0].length + ot.index;
        var At = ot[2] || "";
        H(ft, ot[1]), at.lastIndex = S;
        for (var ct = void 0, dt = !1; ct = at.exec(x); ) {
          if (ct[1]) {
            var t = x.slice(S, ct.index);
            st.lastIndex = S = at.lastIndex, W = ct[2], dt = { t: At === B.exec ? "e" : At === B.raw ? "r" : At === B.interpolate ? "i" : "", val: t };
            break;
          }
          var M = ct[0];
          if (M === "/*") {
            var T = x.indexOf("*/", at.lastIndex);
            T === -1 && g("unclosed comment", x, ct.index), at.lastIndex = T;
          } else
            M === "'" ? (F.lastIndex = ct.index, F.exec(x) ? at.lastIndex = F.lastIndex : g("unclosed string", x, ct.index)) : M === '"' ? (j.lastIndex = ct.index, j.exec(x) ? at.lastIndex = j.lastIndex : g("unclosed string", x, ct.index)) : M === "`" && (I.lastIndex = ct.index, I.exec(x) ? at.lastIndex = I.lastIndex : g("unclosed string", x, ct.index));
        }
        dt ? (O.debug && (dt.lineNo = Z(x, ot.index)), N.push(dt)) : g("unclosed tag", x, ot.index);
      }
      if (H(x.slice(S, x.length), !1), O.plugins)
        for (var m = 0; m < O.plugins.length; m++) {
          var h = O.plugins[m];
          h.processAST && (N = h.processAST(N, O));
        }
      return N;
    }
    function J(x, O) {
      var N = O && O.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !x.startsWith("@")) {
        var W = O.filepath, S = N.get(W);
        if (this.config.cache && S)
          return S;
        var B = this.readFile(W), K = this.compile(B, O);
        return this.config.cache && N.define(W, K), K;
      }
      var Y = N.get(x);
      if (Y)
        return Y;
      throw new b("Failed to get template '" + x + "'");
    }
    function nt(x, O, N) {
      var W, S = y({}, N, { async: !1 });
      return typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), W = J.call(this, x, S)) : W = x, W.call(this, O, S);
    }
    function k(x, O, N) {
      var W, S = y({}, N, { async: !0 });
      typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), W = J.call(this, x, S)) : W = x;
      var B = W.call(this, O, S);
      return Promise.resolve(B);
    }
    function D(x, O) {
      var N = this.compile(x, { async: !1 });
      return nt.call(this, N, O);
    }
    function n(x, O) {
      var N = this.compile(x, { async: !0 });
      return k.call(this, N, O);
    }
    var G = /* @__PURE__ */ function() {
      function x(N) {
        this.config = void 0, this.RuntimeErr = v, this.compile = d, this.compileToString = a, this.parse = z, this.render = nt, this.renderAsync = k, this.renderString = D, this.renderStringAsync = n, this.filepathCache = {}, this.templatesSync = new f({}), this.templatesAsync = new f({}), this.resolvePath = null, this.readFile = null, this.config = N ? y({}, E, N) : y({}, E);
      }
      var O = x.prototype;
      return O.configure = function(N) {
        this.config = y({}, this.config, N);
      }, O.withConfig = function(N) {
        return y({}, this, { config: y({}, this.config, N) });
      }, O.loadTemplate = function(N, W, S) {
        if (typeof W == "string")
          (S && S.async ? this.templatesAsync : this.templatesSync).define(N, this.compile(W, S));
        else {
          var B = this.templatesSync;
          (W.constructor.name === "AsyncFunction" || S && S.async) && (B = this.templatesAsync), B.define(N, W);
        }
      }, x;
    }(), it = /* @__PURE__ */ function(x) {
      function O() {
        return x.apply(this, arguments) || this;
      }
      return c(O, x), O;
    }(G);
    i.Eta = it;
  });
})(Dt, Dt.exports);
var Qe = Dt.exports;
const Pe = new Qe.Eta({
  autoTrim: !1
});
function xt(_, p) {
  return Pe.renderString(_, p);
}
const We = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
yarn_mappings=<%= it.yarnVersion %>
loader_version=<%= it.loaderVersion %>
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_version=<%= it.fabricVersion %>`, Ze = `plugins {
	id 'fabric-loom' version '1.4-SNAPSHOT'
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
<% if (it.dataGeneration || it.splitSources) { %>
loom {
<% if (it.splitSources) { %>    splitEnvironmentSourceSets()

	mods {
		"<%= it.modid %>" {
			sourceSet sourceSets.main
			sourceSet sourceSets.client
		}
	}
<% } %><% if (it.dataGeneration) { %>    runs {
		// This adds a new gradle task that runs the datagen API: "gradlew runDatagen"
		datagen {
			inherit server
			name "Data Generation"
			vmArg "-Dfabric-api.datagen"
			vmArg "-Dfabric-api.datagen.output-dir=\${file("src/main/generated")}"
			vmArg "-Dfabric-api.datagen.modid=<%= it.modid %>"
 
			runDir "build/datagen"
		}
	}<% } %>
}
<% } %><% if (it.dataGeneration) { %>
// Add the generated resources to the main source set
sourceSets {
	main {
		resources {
			srcDirs += [
					'src/main/generated'
			]
		}
	}
}<% } %>
dependencies {
	// To change the versions see the gradle.properties file
	minecraft "com.mojang:minecraft:\${project.minecraft_version}"
	mappings "net.fabricmc:yarn:\${project.yarn_mappings}:v2"
	modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
	<% if (it.kotlin) { %>modImplementation "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"<% } %>
	// Uncomment the following line to enable the deprecated Fabric API modules. 
	// These are included in the Fabric API production distribution and allow you to update your mod to the latest modules at a later more convenient time.

	// modImplementation "net.fabricmc.fabric-api:fabric-api-deprecated:\${project.fabric_version}"
}

processResources {
	inputs.property "version", project.version

	filesMatching("fabric.mod.json") {
		expand "version": project.version
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
	from("LICENSE") {
		rename { "\${it}_\${project.base.archivesName.get()}"}
	}
}

// configure the maven publication
publishing {
	publications {
		mavenJava(MavenPublication) {
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
}`, Ye = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`;
function Je(_) {
  return Vt(_) >= 17;
}
function He(_) {
  return Vt(_) >= 19;
}
function Vt(_) {
  return Number(_.split(".")[1]);
}
function fe(_, p) {
  let i = [];
  const y = p ? "Modid" : "Mod Name";
  return _.length == 0 ? [`${y} is empty!`] : (_.length == 1 ? i.push(`${y} is only a single character! (It must be at least 2 characters long)!`) : _.length > 64 && i.push(`${y} has more than 64 characters!`), i.length === 0 ? void 0 : i);
}
function Xe(_) {
  if (_ === void 0)
    return;
  let p = fe(_, !0) ?? [];
  const i = _.charAt(0);
  (i < "a" || i > "z") && p.push("Modid starts with an invalid character '" + i + "' (it must belowercase a-z)");
  let y = null;
  for (let c = 1; c < _.length; c++) {
    let r = _.charAt(c);
    r == "-" || r == "_" || "0" <= r && r <= "9" || "a" <= r && r <= "z" || (y == null && (y = []), y.push(r));
  }
  if (y != null) {
    let c = "Modid contains invalid characters: " + y.map((r) => "'" + r + "'").join(", ") + "!";
    p.push(c + "!");
  }
  if (p.length != 0)
    return p;
}
function qe(_) {
  return _.toLocaleLowerCase().replace(/\s+/g, ".").replace(/[^a-za-z0-9_\.]/, "");
}
function Ke(_) {
  return _.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
const $e = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, tn = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, en = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
};
function Ut(_) {
  const p = Vt(_);
  return p < 16 ? $e : p == 16 ? tn : en;
}
async function nn(_, p) {
  await _.write("gradle.properties", xt(We, p)), await _.write("build.gradle", xt(Ze, { ...p, java: Ut(p.minecraftVersion) })), await _.write("settings.gradle", Ye);
}
const rn = `package <%= it.packageName %>;

import net.minecraft.server.MinecraftServer;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(MinecraftServer.class)
public class <%= it.className %> {
	@Inject(at = @At("HEAD"), method = "loadWorld")
	private void init(CallbackInfo info) {
		// This code is injected into the start of MinecraftServer.loadWorld()V
	}
}`, an = `package <%= it.packageName %>;

import net.minecraft.client.MinecraftClient;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(MinecraftClient.class)
public class <%= it.className %> {
	@Inject(at = @At("HEAD"), method = "run")
	private void run(CallbackInfo info) {
		// This code is injected into the start of MinecraftClient.run()V
	}
}`;
async function sn(_, p) {
  const i = p.packageName + ".mixin", y = "ExampleMixin", c = {
    required: !0,
    package: i,
    compatibilityLevel: Ut(p.minecraftVersion).mixin,
    mixins: [
      y
    ],
    injectors: {
      defaultRequire: 1
    }
  }, r = `${p.modid}.mixins.json`;
  return await _.write(`src/main/resources/${r}`, JSON.stringify(c, null, "	")), await _.write(`src/main/java/${i.replaceAll(".", "/")}/${y}.java`, xt(rn, {
    className: y,
    packageName: i
  })), [r];
}
async function on(_, p) {
  const i = p.packageName + ".mixin.client", y = "ExampleClientMixin", c = {
    required: !0,
    package: i,
    compatibilityLevel: Ut(p.minecraftVersion).mixin,
    client: [
      y
    ],
    injectors: {
      defaultRequire: 1
    }
  }, r = `${p.modid}.client.mixins.json`;
  return await _.write(`src/client/resources/${r}`, JSON.stringify(c, null, "	")), await _.write(`src/client/java/${i.replaceAll(".", "/")}/${y}.java`, xt(an, {
    className: y,
    packageName: i
  })), [
    {
      config: r,
      environment: "client"
    }
  ];
}
const ln = `package <%= it.package %>;

import net.fabricmc.api.ModInitializer;
<% if (it.slf4j) { %>
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
<% } else { %>
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
<% } %>
public class <%= it.className %> implements ModInitializer {
	// This logger is used to write text to the console and the log file.
	// It is considered best practice to use your mod id as the logger's name.
	// That way, it's clear which mod wrote info, warnings, and errors.
<% if (it.slf4j) { %>    public static final Logger LOGGER = LoggerFactory.getLogger("<%= it.modid %>");
<% } else { %>    public static final Logger LOGGER = LogManager.getLogger("<%= it.modid %>");<% } %>
	@Override
	public void onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.

		LOGGER.info("Hello Fabric world!");
	}
}`, cn = `package <%= it.package %>

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
}`, un = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, hn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, An = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, dn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function fn(_, p) {
  const i = pn(p.projectName), y = {
    package: p.packageName,
    className: i,
    classFullName: p.packageName + "." + i,
    path: p.packageName.replaceAll(".", "/") + "/" + i,
    modid: p.modid,
    slf4j: Vt(p.minecraftVersion) >= 18,
    clientEntrypoint: p.splitSources,
    dataEntrypoint: p.dataGeneration
  };
  return p.kotlin ? await gn(_, y) : await mn(_, y);
}
function pn(_) {
  return _.split(" ").map((p) => p[0].toUpperCase() + p.slice(1)).join("").replace(/\W+/g, "");
}
async function mn(_, p) {
  var i = {
    main: [
      p.classFullName
    ]
  };
  return await _.write(`src/main/java/${p.path}.java`, xt(ln, p)), p.clientEntrypoint && (await _.write(`src/client/java/${p.path}Client.java`, xt(un, { ...p, className: p.className + "Client" })), i = {
    ...i,
    client: [
      p.classFullName + "Client"
    ]
  }), p.dataEntrypoint && (await _.write(`src/main/java/${p.path}DataGenerator.java`, xt(An, { ...p, className: p.className + "DataGenerator" })), i = {
    ...i,
    "fabric-datagen": [
      p.classFullName + "DataGenerator"
    ]
  }), i;
}
async function gn(_, p) {
  var i = {
    main: [
      {
        value: p.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  return await _.write(`src/main/kotlin/${p.path}.kt`, xt(cn, p)), p.clientEntrypoint && (await _.write(`src/client/kotlin/${p.path}Client.kt`, xt(hn, { ...p, className: p.className + "Client" })), i = {
    ...i,
    client: [
      {
        value: p.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), p.dataEntrypoint && (await _.write(`src/main/kotlin/${p.path}DataGenerator.kt`, xt(dn, { ...p, className: p.className + "DataGenerator" })), i = {
    ...i,
    "fabric-datagen": [
      {
        value: p.classFullName + "DataGenerator",
        adapter: "kotlin"
      }
    ]
  }), i;
}
function bn(_) {
  return Number(_.split(".")[1]) >= 59;
}
async function vn(_, p) {
  var i = [
    ...await sn(_, p),
    ...p.splitSources ? await on(_, p) : []
  ], y = {
    schemaVersion: 1,
    id: p.modid,
    version: "${version}",
    name: p.projectName,
    description: "This is an example description! Tell everyone what your mod is about!",
    authors: [
      "Me!"
    ],
    contact: {
      homepage: "https://fabricmc.net/",
      sources: "https://github.com/FabricMC/fabric-example-mod"
    },
    license: "CC0-1.0",
    icon: `assets/${p.modid}/icon.png`,
    environment: "*",
    entrypoints: await fn(_, p),
    mixins: i,
    depends: {
      fabricloader: ">=" + p.loaderVersion,
      minecraft: "~" + p.minecraftVersion,
      java: ">=" + Ut(p.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  y.depends[bn(p.fabricVersion) ? "fabric-api" : "fabric"] = "*", p.kotlin && (y.depends = {
    ...y.depends,
    "fabric-language-kotlin": ">=" + p.kotlin.kotlinVersion
  }), await _.write("src/main/resources/fabric.mod.json", JSON.stringify(y, null, "	")), await _.write(`src/main/resources/assets/${p.modid}/icon.png`, he(yn));
}
const yn = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC", wn = `Creative Commons Legal Code

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
async function kn(_, p) {
  await _.write(".gitignore", Ae), await _.write(".github/workflows/build.yml", de), await _.write("LICENSE", wn);
}
async function En(_) {
  const p = await Cn(_.config);
  await je(_), await nn(_.writer, p), await vn(_.writer, p), await kn(_.writer);
}
async function pe() {
  return (await Fe()).filter((p) => p.stable).filter((p) => {
    const i = p.version;
    return !(i.startsWith("1.14") && i != "1.14.4");
  });
}
async function Cn(_) {
  return {
    ..._,
    loaderVersion: (await _e()).find((p) => p.stable).version,
    fabricVersion: await Ie(_.minecraftVersion),
    yarnVersion: (await Re(_.minecraftVersion))[0].version,
    kotlin: await Sn(_)
  };
}
async function Sn(_) {
  if (!_.useKotlin)
    return;
  const i = (await Te()).pop(), y = i.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: i,
    kotlinVersion: y
  };
}
const xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateTemplate: En,
  getTemplateGameVersions: pe
}, Symbol.toStringTag, { value: "Module" }));
function Zt(_, p, i) {
  const y = _.slice();
  return y[28] = p[i], y;
}
function Yt(_, p, i) {
  const y = _.slice();
  return y[31] = p[i], y;
}
function Jt(_, p, i) {
  const y = _.slice();
  return y[31] = p[i], y;
}
function Bn(_) {
  let p, i, y = (
    /*error*/
    _[31].message + ""
  ), c, r, s;
  return {
    c() {
      p = rt("p"), i = Et("Error: "), c = Et(y), r = ht(), s = rt("p"), s.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, zt(p, "color", "red");
    },
    m(e, l) {
      bt(e, p, l), q(p, i), q(p, c), bt(e, r, l), bt(e, s, l);
    },
    p: St,
    i: St,
    o: St,
    d(e) {
      e && vt(p), e && vt(r), e && vt(s);
    }
  };
}
function Nn(_) {
  let p, i, y, c, r, s, e, l, f, b, g, v, o, d, a, A, u, w, E, I, F, j, V, Z, z, J, nt, k, D, n, G, it, x, O, N, W, S, B, K, Y, H, ot, mt, st, at, ft, At, ct, dt, t, M, T;
  function m(et, gt) {
    return (
      /*customModId*/
      et[2] != null ? _n : Fn
    );
  }
  let h = m(_), C = h(_), U = (
    /*modIdErrors*/
    _[12] != null && Ht(_)
  ), L = (
    /*customModId*/
    _[2] != null && qt(_)
  ), R = (
    /*data*/
    _[27].game
  ), P = [];
  for (let et = 0; et < R.length; et += 1)
    P[et] = te(Zt(_, R, et));
  let X = (
    /*supportsDataGen*/
    _[10] && ee(_)
  ), Q = (
    /*supportsSplitSources*/
    _[9] && ne(_)
  );
  const tt = [Rn, In], ut = [];
  function lt(et, gt) {
    return (
      /*loading*/
      et[8] ? 0 : 1
    );
  }
  return ct = lt(_), dt = ut[ct] = tt[ct](_), {
    c() {
      p = rt("div"), i = rt("div"), y = rt("h3"), y.textContent = "Mod Name:", c = ht(), r = rt("hr"), s = ht(), C.c(), e = ht(), l = rt("input"), f = ht(), U && U.c(), b = ht(), L && L.c(), g = ht(), v = rt("div"), o = rt("h3"), o.textContent = "Package Name:", d = ht(), a = rt("hr"), A = ht(), u = rt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-1sr08ub">name.modid</code>.`, w = ht(), E = rt("input"), I = ht(), F = rt("div"), j = rt("h3"), j.textContent = "Minecraft Version:", V = ht(), Z = rt("hr"), z = ht(), J = rt("p"), J.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, nt = ht(), k = rt("select");
      for (let et = 0; et < P.length; et += 1)
        P[et].c();
      D = ht(), n = rt("hr"), G = ht(), it = rt("br"), x = ht(), O = rt("h4"), O.textContent = "Advanced Options:", N = ht(), W = rt("div"), S = rt("div"), B = rt("input"), K = ht(), Y = rt("label"), Y.textContent = "Kotlin Programming Language", H = ht(), ot = rt("p"), ot.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-1sr08ub">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-1sr08ub">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, mt = ht(), X && X.c(), st = ht(), Q && Q.c(), at = ht(), ft = rt("br"), At = ht(), dt.c(), $(y, "class", "svelte-1sr08ub"), $(r, "class", "svelte-1sr08ub"), $(l, "id", "project-name"), $(l, "class", "svelte-1sr08ub"), $(i, "class", "form-line svelte-1sr08ub"), $(o, "class", "svelte-1sr08ub"), $(a, "class", "svelte-1sr08ub"), $(u, "class", "svelte-1sr08ub"), $(E, "id", "package-name"), $(E, "class", "svelte-1sr08ub"), $(v, "class", "form-line svelte-1sr08ub"), $(j, "class", "svelte-1sr08ub"), $(Z, "class", "svelte-1sr08ub"), $(J, "class", "svelte-1sr08ub"), $(k, "id", "minecraft-version"), zt(k, "min-width", "200px"), $(k, "class", "svelte-1sr08ub"), /*minecraftVersion*/
      _[0] === void 0 && xe(() => (
        /*select_change_handler*/
        _[22].call(k)
      )), $(F, "class", "form-line svelte-1sr08ub"), $(n, "class", "svelte-1sr08ub"), $(it, "class", "svelte-1sr08ub"), $(O, "class", "svelte-1sr08ub"), $(B, "id", "kotlin"), $(B, "type", "checkbox"), $(B, "class", "option-input svelte-1sr08ub"), $(Y, "for", "kotlin"), $(Y, "class", "option-label svelte-1sr08ub"), $(S, "class", "option-container svelte-1sr08ub"), $(ot, "class", "option-body svelte-1sr08ub"), $(W, "class", "svelte-1sr08ub"), $(ft, "class", "svelte-1sr08ub"), $(p, "class", "template svelte-1sr08ub");
    },
    m(et, gt) {
      bt(et, p, gt), q(p, i), q(i, y), q(i, c), q(i, r), q(i, s), C.m(i, null), q(i, e), q(i, l), Nt(
        l,
        /*projectName*/
        _[1]
      ), q(i, f), U && U.m(i, null), q(p, b), L && L.m(p, null), q(p, g), q(p, v), q(v, o), q(v, d), q(v, a), q(v, A), q(v, u), q(v, w), q(v, E), Nt(
        E,
        /*packageName*/
        _[4]
      ), q(p, I), q(p, F), q(F, j), q(F, V), q(F, Z), q(F, z), q(F, J), q(F, nt), q(F, k);
      for (let yt = 0; yt < P.length; yt += 1)
        P[yt] && P[yt].m(k, null);
      Wt(
        k,
        /*minecraftVersion*/
        _[0],
        !0
      ), q(p, D), q(p, n), q(p, G), q(p, it), q(p, x), q(p, O), q(p, N), q(p, W), q(W, S), q(S, B), B.checked = /*useKotlin*/
      _[5], q(S, K), q(S, Y), q(W, H), q(W, ot), q(p, mt), X && X.m(p, null), q(p, st), Q && Q.m(p, null), q(p, at), q(p, ft), q(p, At), ut[ct].m(p, null), t = !0, M || (T = [
        kt(
          l,
          "input",
          /*input0_input_handler*/
          _[19]
        ),
        kt(
          l,
          "keyup",
          /*doFormatProjectName*/
          _[15]
        ),
        kt(
          E,
          "keyup",
          /*doFormatPackageName*/
          _[16]
        ),
        kt(
          E,
          "input",
          /*input1_input_handler*/
          _[21]
        ),
        kt(
          k,
          "change",
          /*select_change_handler*/
          _[22]
        ),
        kt(
          B,
          "change",
          /*input2_change_handler*/
          _[23]
        )
      ], M = !0);
    },
    p(et, gt) {
      if (h === (h = m(et)) && C ? C.p(et, gt) : (C.d(1), C = h(et), C && (C.c(), C.m(i, e))), gt[0] & /*projectName*/
      2 && l.value !== /*projectName*/
      et[1] && Nt(
        l,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[12] != null ? U ? U.p(et, gt) : (U = Ht(et), U.c(), U.m(i, null)) : U && (U.d(1), U = null), /*customModId*/
      et[2] != null ? L ? L.p(et, gt) : (L = qt(et), L.c(), L.m(p, g)) : L && (L.d(1), L = null), gt[0] & /*packageName*/
      16 && E.value !== /*packageName*/
      et[4] && Nt(
        E,
        /*packageName*/
        et[4]
      ), gt[0] & /*versions*/
      8192) {
        R = /*data*/
        et[27].game;
        let wt;
        for (wt = 0; wt < R.length; wt += 1) {
          const pt = Zt(et, R, wt);
          P[wt] ? P[wt].p(pt, gt) : (P[wt] = te(pt), P[wt].c(), P[wt].m(k, null));
        }
        for (; wt < P.length; wt += 1)
          P[wt].d(1);
        P.length = R.length;
      }
      gt[0] & /*minecraftVersion, versions*/
      8193 && Wt(
        k,
        /*minecraftVersion*/
        et[0]
      ), gt[0] & /*useKotlin*/
      32 && (B.checked = /*useKotlin*/
      et[5]), /*supportsDataGen*/
      et[10] ? X ? X.p(et, gt) : (X = ee(et), X.c(), X.m(p, st)) : X && (X.d(1), X = null), /*supportsSplitSources*/
      et[9] ? Q ? Q.p(et, gt) : (Q = ne(et), Q.c(), Q.m(p, at)) : Q && (Q.d(1), Q = null);
      let yt = ct;
      ct = lt(et), ct === yt ? ut[ct].p(et, gt) : (Be(), It(ut[yt], 1, 1, () => {
        ut[yt] = null;
      }), Ne(), dt = ut[ct], dt ? dt.p(et, gt) : (dt = ut[ct] = tt[ct](et), dt.c()), _t(dt, 1), dt.m(p, null));
    },
    i(et) {
      t || (_t(dt), t = !0);
    },
    o(et) {
      It(dt), t = !1;
    },
    d(et) {
      et && vt(p), C.d(), U && U.d(), L && L.d(), Mt(P, et), X && X.d(), Q && Q.d(), ut[ct].d(), M = !1, re(T);
    }
  };
}
function Fn(_) {
  let p, i, y, c, r, s, e, l;
  return {
    c() {
      p = rt("p"), i = Et("Choose a name for your new mod. The mod ID will be "), y = rt("code"), c = Et(
        /*modid*/
        _[3]
      ), r = Et(". "), s = rt("a"), s.textContent = "Use custom id", $(y, "class", "svelte-1sr08ub"), $(s, "href", ""), $(s, "class", "svelte-1sr08ub"), $(p, "class", "svelte-1sr08ub");
    },
    m(f, b) {
      bt(f, p, b), q(p, i), q(p, y), q(y, c), q(p, r), q(p, s), e || (l = kt(s, "click", jt(
        /*useCustomModId*/
        _[17]
      )), e = !0);
    },
    p(f, b) {
      b[0] & /*modid*/
      8 && Gt(
        c,
        /*modid*/
        f[3]
      );
    },
    d(f) {
      f && vt(p), e = !1, l();
    }
  };
}
function _n(_) {
  let p;
  return {
    c() {
      p = rt("p"), p.textContent = "Choose a name for your new mod.", $(p, "class", "svelte-1sr08ub");
    },
    m(i, y) {
      bt(i, p, y);
    },
    p: St,
    d(i) {
      i && vt(p);
    }
  };
}
function Ht(_) {
  let p, i, y = (
    /*modIdErrors*/
    _[12]
  ), c = [];
  for (let r = 0; r < y.length; r += 1)
    c[r] = Xt(Jt(_, y, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      p = ht(), i = rt("br"), $(i, "class", "svelte-1sr08ub");
    },
    m(r, s) {
      for (let e = 0; e < c.length; e += 1)
        c[e] && c[e].m(r, s);
      bt(r, p, s), bt(r, i, s);
    },
    p(r, s) {
      if (s[0] & /*modIdErrors*/
      4096) {
        y = /*modIdErrors*/
        r[12];
        let e;
        for (e = 0; e < y.length; e += 1) {
          const l = Jt(r, y, e);
          c[e] ? c[e].p(l, s) : (c[e] = Xt(l), c[e].c(), c[e].m(p.parentNode, p));
        }
        for (; e < c.length; e += 1)
          c[e].d(1);
        c.length = y.length;
      }
    },
    d(r) {
      Mt(c, r), r && vt(p), r && vt(i);
    }
  };
}
function Xt(_) {
  let p, i = (
    /*error*/
    _[31] + ""
  ), y;
  return {
    c() {
      p = rt("li"), y = Et(i), zt(p, "color", "red"), $(p, "class", "svelte-1sr08ub");
    },
    m(c, r) {
      bt(c, p, r), q(p, y);
    },
    p(c, r) {
      r[0] & /*modIdErrors*/
      4096 && i !== (i = /*error*/
      c[31] + "") && Gt(y, i);
    },
    d(c) {
      c && vt(p);
    }
  };
}
function qt(_) {
  let p, i, y, c, r, s, e, l, f, b, g, v, o, d = (
    /*customIdErrors*/
    _[11] != null && Kt(_)
  );
  return {
    c() {
      p = rt("div"), i = rt("h3"), i.textContent = "Mod ID:", y = ht(), c = rt("hr"), r = ht(), s = rt("p"), e = Et("Enter the modid you wish to use for your mod. "), l = rt("a"), l.textContent = "Use default", f = ht(), d && d.c(), b = ht(), g = rt("input"), $(i, "class", "svelte-1sr08ub"), $(c, "class", "svelte-1sr08ub"), $(l, "href", ""), $(l, "class", "svelte-1sr08ub"), $(s, "class", "svelte-1sr08ub"), $(g, "id", "mod-id"), $(g, "class", "svelte-1sr08ub"), $(p, "class", "form-line svelte-1sr08ub");
    },
    m(a, A) {
      bt(a, p, A), q(p, i), q(p, y), q(p, c), q(p, r), q(p, s), q(s, e), q(s, l), q(p, f), d && d.m(p, null), q(p, b), q(p, g), Nt(
        g,
        /*customModId*/
        _[2]
      ), v || (o = [
        kt(l, "click", jt(
          /*useDefaultModId*/
          _[18]
        )),
        kt(
          g,
          "input",
          /*input_input_handler*/
          _[20]
        )
      ], v = !0);
    },
    p(a, A) {
      /*customIdErrors*/
      a[11] != null ? d ? d.p(a, A) : (d = Kt(a), d.c(), d.m(p, b)) : d && (d.d(1), d = null), A[0] & /*customModId*/
      4 && g.value !== /*customModId*/
      a[2] && Nt(
        g,
        /*customModId*/
        a[2]
      );
    },
    d(a) {
      a && vt(p), d && d.d(), v = !1, re(o);
    }
  };
}
function Kt(_) {
  let p, i, y = (
    /*customIdErrors*/
    _[11]
  ), c = [];
  for (let r = 0; r < y.length; r += 1)
    c[r] = $t(Yt(_, y, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      p = ht(), i = rt("br"), $(i, "class", "svelte-1sr08ub");
    },
    m(r, s) {
      for (let e = 0; e < c.length; e += 1)
        c[e] && c[e].m(r, s);
      bt(r, p, s), bt(r, i, s);
    },
    p(r, s) {
      if (s[0] & /*customIdErrors*/
      2048) {
        y = /*customIdErrors*/
        r[11];
        let e;
        for (e = 0; e < y.length; e += 1) {
          const l = Yt(r, y, e);
          c[e] ? c[e].p(l, s) : (c[e] = $t(l), c[e].c(), c[e].m(p.parentNode, p));
        }
        for (; e < c.length; e += 1)
          c[e].d(1);
        c.length = y.length;
      }
    },
    d(r) {
      Mt(c, r), r && vt(p), r && vt(i);
    }
  };
}
function $t(_) {
  let p, i = (
    /*error*/
    _[31] + ""
  ), y;
  return {
    c() {
      p = rt("li"), y = Et(i), zt(p, "color", "red"), $(p, "class", "svelte-1sr08ub");
    },
    m(c, r) {
      bt(c, p, r), q(p, y);
    },
    p(c, r) {
      r[0] & /*customIdErrors*/
      2048 && i !== (i = /*error*/
      c[31] + "") && Gt(y, i);
    },
    d(c) {
      c && vt(p);
    }
  };
}
function te(_) {
  let p, i = (
    /*version*/
    _[28].version + ""
  ), y;
  return {
    c() {
      p = rt("option"), y = Et(i), p.__value = /*version*/
      _[28].version, p.value = p.__value, $(p, "class", "svelte-1sr08ub");
    },
    m(c, r) {
      bt(c, p, r), q(p, y);
    },
    p: St,
    d(c) {
      c && vt(p);
    }
  };
}
function ee(_) {
  let p, i, y, c, r, s, e, l, f;
  return {
    c() {
      p = rt("div"), i = rt("div"), y = rt("input"), c = ht(), r = rt("label"), r.textContent = "Data Generation", s = ht(), e = rt("p"), e.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-1sr08ub">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', $(y, "id", "datagen"), $(y, "type", "checkbox"), $(y, "class", "option-input svelte-1sr08ub"), $(r, "for", "datagen"), $(r, "class", "option-label svelte-1sr08ub"), $(i, "class", "option-container svelte-1sr08ub"), $(e, "class", "option-body svelte-1sr08ub"), $(p, "class", "svelte-1sr08ub");
    },
    m(b, g) {
      bt(b, p, g), q(p, i), q(i, y), y.checked = /*dataGeneration*/
      _[6], q(i, c), q(i, r), q(p, s), q(p, e), l || (f = kt(
        y,
        "change",
        /*input_change_handler*/
        _[24]
      ), l = !0);
    },
    p(b, g) {
      g[0] & /*dataGeneration*/
      64 && (y.checked = /*dataGeneration*/
      b[6]);
    },
    d(b) {
      b && vt(p), l = !1, f();
    }
  };
}
function ne(_) {
  let p, i, y, c, r, s, e, l, f;
  return {
    c() {
      p = rt("div"), i = rt("div"), y = rt("input"), c = ht(), r = rt("label"), r.textContent = "Split client and common sources", s = ht(), e = rt("p"), e.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, $(y, "id", "splitSources"), $(y, "type", "checkbox"), $(y, "class", "option-input svelte-1sr08ub"), $(r, "for", "splitSources"), $(r, "class", "option-label svelte-1sr08ub"), $(i, "class", "option-container svelte-1sr08ub"), $(e, "class", "option-body svelte-1sr08ub"), $(p, "class", "svelte-1sr08ub");
    },
    m(b, g) {
      bt(b, p, g), q(p, i), q(i, y), y.checked = /*splitSources*/
      _[7], q(i, c), q(i, r), q(p, s), q(p, e), l || (f = kt(
        y,
        "change",
        /*input_change_handler_1*/
        _[25]
      ), l = !0);
    },
    p(b, g) {
      g[0] & /*splitSources*/
      128 && (y.checked = /*splitSources*/
      b[7]);
    },
    d(b) {
      b && vt(p), l = !1, f();
    }
  };
}
function In(_) {
  let p, i, y, c, r, s;
  return i = new oe({}), {
    c() {
      p = rt("a"), ie(i.$$.fragment), y = Et(" Download Template (.ZIP)"), $(p, "class", "button primary download-button svelte-1sr08ub"), $(p, "href", "");
    },
    m(e, l) {
      bt(e, p, l), ae(i, p, null), q(p, y), c = !0, r || (s = kt(p, "click", jt(
        /*generate*/
        _[14]
      )), r = !0);
    },
    p: St,
    i(e) {
      c || (_t(i.$$.fragment, e), c = !0);
    },
    o(e) {
      It(i.$$.fragment, e), c = !1;
    },
    d(e) {
      e && vt(p), se(i), r = !1, s();
    }
  };
}
function Rn(_) {
  let p, i, y, c;
  return i = new oe({}), {
    c() {
      p = rt("a"), ie(i.$$.fragment), y = Et(" Generating..."), $(p, "class", "button primary download-button svelte-1sr08ub"), $(p, "href", "");
    },
    m(r, s) {
      bt(r, p, s), ae(i, p, null), q(p, y), c = !0;
    },
    p: St,
    i(r) {
      c || (_t(i.$$.fragment, r), c = !0);
    },
    o(r) {
      It(i.$$.fragment, r), c = !1;
    },
    d(r) {
      r && vt(p), se(i);
    }
  };
}
function Tn(_) {
  let p;
  return {
    c() {
      p = rt("p"), p.textContent = "Loading data..";
    },
    m(i, y) {
      bt(i, p, y);
    },
    p: St,
    i: St,
    o: St,
    d(i) {
      i && vt(p);
    }
  };
}
function On(_) {
  let p, i, y = {
    ctx: _,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Tn,
    then: Nn,
    catch: Bn,
    value: 27,
    error: 31,
    blocks: [, , ,]
  };
  return ke(
    /*versions*/
    _[13],
    y
  ), {
    c() {
      p = Ee(), y.block.c();
    },
    m(c, r) {
      bt(c, p, r), y.block.m(c, y.anchor = r), y.mount = () => p.parentNode, y.anchor = p, i = !0;
    },
    p(c, r) {
      _ = c, Ce(y, _, r);
    },
    i(c) {
      i || (_t(y.block), i = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const s = y.blocks[r];
        It(s);
      }
      i = !1;
    },
    d(c) {
      c && vt(p), y.block.d(c), y.token = null, y = null;
    }
  };
}
function zn(_, p, i) {
  let y, c, r, s, e, l, f = "Template Mod", b = "com.example", g = !1, v = !1, o = !0, d, a = !1;
  const A = Promise.all([pe()]).then(([n]) => {
    const G = n;
    return i(0, l = G[0].version), { game: G };
  });
  function u(n) {
    if (n !== void 0)
      return fe(n, d === void 0);
  }
  async function w() {
    if (s !== void 0 || d !== void 0 && e !== void 0)
      return;
    i(8, a = !0);
    const n = await Promise.resolve().then(() => xn), G = {
      modid: d ?? y,
      minecraftVersion: l,
      projectName: f,
      packageName: b,
      useKotlin: g,
      dataGeneration: v && c,
      splitSources: o && r
    }, it = new ze();
    await n.generateTemplate({
      config: G,
      writer: {
        write: async (x, O, N) => {
          it.file(x, O, {
            unixPermissions: N != null && N.executable ? "774" : void 0
          });
        }
      }
    }), Ue.saveAs(await it.generateAsync({ type: "blob", platform: "UNIX" }), `${y}-template-${G.minecraftVersion}.zip`), i(8, a = !1);
  }
  function E() {
    i(1, f = f.trim());
  }
  function I() {
    i(4, b = qe(b));
  }
  function F() {
    i(2, d = y);
  }
  function j() {
    i(2, d = void 0);
  }
  function V() {
    f = this.value, i(1, f);
  }
  function Z() {
    d = this.value, i(2, d);
  }
  function z() {
    b = this.value, i(4, b);
  }
  function J() {
    l = Se(this), i(0, l), i(13, A);
  }
  function nt() {
    g = this.checked, i(5, g);
  }
  function k() {
    v = this.checked, i(6, v);
  }
  function D() {
    o = this.checked, i(7, o);
  }
  return _.$$.update = () => {
    _.$$.dirty[0] & /*projectName*/
    2 && i(3, y = Ke(f)), _.$$.dirty[0] & /*minecraftVersion*/
    1 && i(10, c = Je(l || "1.99")), _.$$.dirty[0] & /*minecraftVersion*/
    1 && i(9, r = He(l || "1.99")), _.$$.dirty[0] & /*modid*/
    8 && i(12, s = u(y)), _.$$.dirty[0] & /*customModId*/
    4 && i(11, e = Xe(d));
  }, [
    l,
    f,
    d,
    y,
    b,
    g,
    v,
    o,
    a,
    r,
    c,
    e,
    s,
    A,
    w,
    E,
    I,
    F,
    j,
    V,
    Z,
    z,
    J,
    nt,
    k,
    D
  ];
}
class Dn extends ve {
  constructor(p) {
    super(), ye(this, p, zn, On, we, {}, null, [-1, -1]);
  }
}
export {
  Dn as default
};

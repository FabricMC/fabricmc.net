import { S as ge, i as ye, s as ve, h as we, b as ke, c as bt, u as Ie, r as Gt, v as Bt, d as gt, f as Se, e as et, t as It, a as ct, g as Ft, j as D, n as St, o as H, m as Ce, C as Rt, p as jt, q as kt, D as xe, E as Ze, l as Tt, B as ne, k as Ot, z as Jt, w as ie, x as re, y as ae } from "./index.1b882cd4.js";
import { b as Re, h as Ee, i as Ge, j as Be, d as Le } from "./Api.93a83966.js";
import se from "./DownloadIcon.81b5365d.js";
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nt(R) {
  throw new Error('Could not dynamically require "' + R + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var oe = { exports: {} };
(function(R, m) {
  (function(r) {
    R.exports = r();
  })(function() {
    return function r(w, d, i) {
      function s(h, y) {
        if (!d[h]) {
          if (!w[h]) {
            var b = typeof Nt == "function" && Nt;
            if (!y && b)
              return b(h, !0);
            if (n)
              return n(h, !0);
            var g = new Error("Cannot find module '" + h + "'");
            throw g.code = "MODULE_NOT_FOUND", g;
          }
          var o = d[h] = { exports: {} };
          w[h][0].call(o.exports, function(f) {
            var a = w[h][1][f];
            return s(a || f);
          }, o, o.exports, r, w, d, i);
        }
        return d[h].exports;
      }
      for (var n = typeof Nt == "function" && Nt, l = 0; l < i.length; l++)
        s(i[l]);
      return s;
    }({ 1: [function(r, w, d) {
      var i = r("./utils"), s = r("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      d.encode = function(l) {
        for (var h, y, b, g, o, f, a, u = [], c = 0, v = l.length, I = v, x = i.getTypeOf(l) !== "string"; c < l.length; )
          I = v - c, b = x ? (h = l[c++], y = c < v ? l[c++] : 0, c < v ? l[c++] : 0) : (h = l.charCodeAt(c++), y = c < v ? l.charCodeAt(c++) : 0, c < v ? l.charCodeAt(c++) : 0), g = h >> 2, o = (3 & h) << 4 | y >> 4, f = 1 < I ? (15 & y) << 2 | b >> 6 : 64, a = 2 < I ? 63 & b : 64, u.push(n.charAt(g) + n.charAt(o) + n.charAt(f) + n.charAt(a));
        return u.join("");
      }, d.decode = function(l) {
        var h, y, b, g, o, f, a = 0, u = 0, c = "data:";
        if (l.substr(0, c.length) === c)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var v, I = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === n.charAt(64) && I--, l.charAt(l.length - 2) === n.charAt(64) && I--, I % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (v = s.uint8array ? new Uint8Array(0 | I) : new Array(0 | I); a < l.length; )
          h = n.indexOf(l.charAt(a++)) << 2 | (g = n.indexOf(l.charAt(a++))) >> 4, y = (15 & g) << 4 | (o = n.indexOf(l.charAt(a++))) >> 2, b = (3 & o) << 6 | (f = n.indexOf(l.charAt(a++))), v[u++] = h, o !== 64 && (v[u++] = y), f !== 64 && (v[u++] = b);
        return v;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, w, d) {
      var i = r("./external"), s = r("./stream/DataWorker"), n = r("./stream/Crc32Probe"), l = r("./stream/DataLengthProbe");
      function h(y, b, g, o, f) {
        this.compressedSize = y, this.uncompressedSize = b, this.crc32 = g, this.compression = o, this.compressedContent = f;
      }
      h.prototype = { getContentWorker: function() {
        var y = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), b = this;
        return y.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), y;
      }, getCompressedWorker: function() {
        return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, h.createWorkerFrom = function(y, b, g) {
        return y.pipe(new n()).pipe(new l("uncompressedSize")).pipe(b.compressWorker(g)).pipe(new l("compressedSize")).withStreamInfo("compression", b);
      }, w.exports = h;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, w, d) {
      var i = r("./stream/GenericWorker");
      d.STORE = { magic: "\0\0", compressWorker: function() {
        return new i("STORE compression");
      }, uncompressWorker: function() {
        return new i("STORE decompression");
      } }, d.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, w, d) {
      var i = r("./utils"), s = function() {
        for (var n, l = [], h = 0; h < 256; h++) {
          n = h;
          for (var y = 0; y < 8; y++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          l[h] = n;
        }
        return l;
      }();
      w.exports = function(n, l) {
        return n !== void 0 && n.length ? i.getTypeOf(n) !== "string" ? function(h, y, b, g) {
          var o = s, f = g + b;
          h ^= -1;
          for (var a = g; a < f; a++)
            h = h >>> 8 ^ o[255 & (h ^ y[a])];
          return -1 ^ h;
        }(0 | l, n, n.length, 0) : function(h, y, b, g) {
          var o = s, f = g + b;
          h ^= -1;
          for (var a = g; a < f; a++)
            h = h >>> 8 ^ o[255 & (h ^ y.charCodeAt(a))];
          return -1 ^ h;
        }(0 | l, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, w, d) {
      d.base64 = !1, d.binary = !1, d.dir = !1, d.createFolders = !0, d.date = null, d.compression = null, d.compressionOptions = null, d.comment = null, d.unixPermissions = null, d.dosPermissions = null;
    }, {}], 6: [function(r, w, d) {
      var i = null;
      i = typeof Promise < "u" ? Promise : r("lie"), w.exports = { Promise: i };
    }, { lie: 37 }], 7: [function(r, w, d) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = r("pako"), n = r("./utils"), l = r("./stream/GenericWorker"), h = i ? "uint8array" : "array";
      function y(b, g) {
        l.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = g, this.meta = {};
      }
      d.magic = "\b\0", n.inherits(y, l), y.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(h, b.data), !1);
      }, y.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, y.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, y.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(g) {
          b.push({ data: g, meta: b.meta });
        };
      }, d.compressWorker = function(b) {
        return new y("Deflate", b);
      }, d.uncompressWorker = function() {
        return new y("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, w, d) {
      function i(o, f) {
        var a, u = "";
        for (a = 0; a < f; a++)
          u += String.fromCharCode(255 & o), o >>>= 8;
        return u;
      }
      function s(o, f, a, u, c, v) {
        var I, x, C = o.file, T = o.compression, W = v !== h.utf8encode, Y = n.transformTo("string", v(C.name)), L = n.transformTo("string", h.utf8encode(C.name)), P = C.comment, $ = n.transformTo("string", v(P)), k = n.transformTo("string", h.utf8encode(P)), N = L.length !== C.name.length, e = k.length !== P.length, X = "", tt = "", J = "", rt = C.dir, j = C.date, nt = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        f && !a || (nt.crc32 = o.crc32, nt.compressedSize = o.compressedSize, nt.uncompressedSize = o.uncompressedSize);
        var G = 0;
        f && (G |= 8), W || !N && !e || (G |= 2048);
        var E = 0, it = 0;
        rt && (E |= 16), c === "UNIX" ? (it = 798, E |= function(Q, dt) {
          var yt = Q;
          return Q || (yt = dt ? 16893 : 33204), (65535 & yt) << 16;
        }(C.unixPermissions, rt)) : (it = 20, E |= function(Q) {
          return 63 & (Q || 0);
        }(C.dosPermissions)), I = j.getUTCHours(), I <<= 6, I |= j.getUTCMinutes(), I <<= 5, I |= j.getUTCSeconds() / 2, x = j.getUTCFullYear() - 1980, x <<= 4, x |= j.getUTCMonth() + 1, x <<= 5, x |= j.getUTCDate(), N && (tt = i(1, 1) + i(y(Y), 4) + L, X += "up" + i(tt.length, 2) + tt), e && (J = i(1, 1) + i(y($), 4) + k, X += "uc" + i(J.length, 2) + J);
        var K = "";
        return K += `
\0`, K += i(G, 2), K += T.magic, K += i(I, 2), K += i(x, 2), K += i(nt.crc32, 4), K += i(nt.compressedSize, 4), K += i(nt.uncompressedSize, 4), K += i(Y.length, 2), K += i(X.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + K + Y + X, dirRecord: b.CENTRAL_FILE_HEADER + i(it, 2) + K + i($.length, 2) + "\0\0\0\0" + i(E, 4) + i(u, 4) + Y + X + $ };
      }
      var n = r("../utils"), l = r("../stream/GenericWorker"), h = r("../utf8"), y = r("../crc32"), b = r("../signature");
      function g(o, f, a, u) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = f, this.zipPlatform = a, this.encodeFileName = u, this.streamFiles = o, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(g, l), g.prototype.push = function(o) {
        var f = o.meta.percent || 0, a = this.entriesCount, u = this._sources.length;
        this.accumulate ? this.contentBuffer.push(o) : (this.bytesWritten += o.data.length, l.prototype.push.call(this, { data: o.data, meta: { currentFile: this.currentFile, percent: a ? (f + 100 * (a - u - 1)) / a : 100 } }));
      }, g.prototype.openedSource = function(o) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = o.file.name;
        var f = this.streamFiles && !o.file.dir;
        if (f) {
          var a = s(o, f, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: a.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, g.prototype.closedSource = function(o) {
        this.accumulate = !1;
        var f = this.streamFiles && !o.file.dir, a = s(o, f, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(a.dirRecord), f)
          this.push({ data: function(u) {
            return b.DATA_DESCRIPTOR + i(u.crc32, 4) + i(u.compressedSize, 4) + i(u.uncompressedSize, 4);
          }(o), meta: { percent: 100 } });
        else
          for (this.push({ data: a.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, g.prototype.flush = function() {
        for (var o = this.bytesWritten, f = 0; f < this.dirRecords.length; f++)
          this.push({ data: this.dirRecords[f], meta: { percent: 100 } });
        var a = this.bytesWritten - o, u = function(c, v, I, x, C) {
          var T = n.transformTo("string", C(x));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(c, 2) + i(c, 2) + i(v, 4) + i(I, 4) + i(T.length, 2) + T;
        }(this.dirRecords.length, a, o, this.zipComment, this.encodeFileName);
        this.push({ data: u, meta: { percent: 100 } });
      }, g.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, g.prototype.registerPrevious = function(o) {
        this._sources.push(o);
        var f = this;
        return o.on("data", function(a) {
          f.processChunk(a);
        }), o.on("end", function() {
          f.closedSource(f.previous.streamInfo), f._sources.length ? f.prepareNextSource() : f.end();
        }), o.on("error", function(a) {
          f.error(a);
        }), this;
      }, g.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, g.prototype.error = function(o) {
        var f = this._sources;
        if (!l.prototype.error.call(this, o))
          return !1;
        for (var a = 0; a < f.length; a++)
          try {
            f[a].error(o);
          } catch {
          }
        return !0;
      }, g.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var o = this._sources, f = 0; f < o.length; f++)
          o[f].lock();
      }, w.exports = g;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, w, d) {
      var i = r("../compressions"), s = r("./ZipFileWorker");
      d.generateWorker = function(n, l, h) {
        var y = new s(l.streamFiles, h, l.platform, l.encodeFileName), b = 0;
        try {
          n.forEach(function(g, o) {
            b++;
            var f = function(v, I) {
              var x = v || I, C = i[x];
              if (!C)
                throw new Error(x + " is not a valid compression method !");
              return C;
            }(o.options.compression, l.compression), a = o.options.compressionOptions || l.compressionOptions || {}, u = o.dir, c = o.date;
            o._compressWorker(f, a).withStreamInfo("file", { name: g, dir: u, date: c, comment: o.comment || "", unixPermissions: o.unixPermissions, dosPermissions: o.dosPermissions }).pipe(y);
          }), y.entriesCount = b;
        } catch (g) {
          y.error(g);
        }
        return y;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, w, d) {
      function i() {
        if (!(this instanceof i))
          return new i();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new i();
          for (var n in this)
            typeof this[n] != "function" && (s[n] = this[n]);
          return s;
        };
      }
      (i.prototype = r("./object")).loadAsync = r("./load"), i.support = r("./support"), i.defaults = r("./defaults"), i.version = "3.10.1", i.loadAsync = function(s, n) {
        return new i().loadAsync(s, n);
      }, i.external = r("./external"), w.exports = i;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, w, d) {
      var i = r("./utils"), s = r("./external"), n = r("./utf8"), l = r("./zipEntries"), h = r("./stream/Crc32Probe"), y = r("./nodejsUtils");
      function b(g) {
        return new s.Promise(function(o, f) {
          var a = g.decompressed.getContentWorker().pipe(new h());
          a.on("error", function(u) {
            f(u);
          }).on("end", function() {
            a.streamInfo.crc32 !== g.decompressed.crc32 ? f(new Error("Corrupted zip : CRC32 mismatch")) : o();
          }).resume();
        });
      }
      w.exports = function(g, o) {
        var f = this;
        return o = i.extend(o || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), y.isNode && y.isStream(g) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", g, !0, o.optimizedBinaryString, o.base64).then(function(a) {
          var u = new l(o);
          return u.load(a), u;
        }).then(function(a) {
          var u = [s.Promise.resolve(a)], c = a.files;
          if (o.checkCRC32)
            for (var v = 0; v < c.length; v++)
              u.push(b(c[v]));
          return s.Promise.all(u);
        }).then(function(a) {
          for (var u = a.shift(), c = u.files, v = 0; v < c.length; v++) {
            var I = c[v], x = I.fileNameStr, C = i.resolve(I.fileNameStr);
            f.file(C, I.decompressed, { binary: !0, optimizedBinaryString: !0, date: I.date, dir: I.dir, comment: I.fileCommentStr.length ? I.fileCommentStr : null, unixPermissions: I.unixPermissions, dosPermissions: I.dosPermissions, createFolders: o.createFolders }), I.dir || (f.file(C).unsafeOriginalName = x);
          }
          return u.zipComment.length && (f.comment = u.zipComment), f;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, w, d) {
      var i = r("../utils"), s = r("../stream/GenericWorker");
      function n(l, h) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(h);
      }
      i.inherits(n, s), n.prototype._bindStream = function(l) {
        var h = this;
        (this._stream = l).pause(), l.on("data", function(y) {
          h.push({ data: y, meta: { percent: 0 } });
        }).on("error", function(y) {
          h.isPaused ? this.generatedError = y : h.error(y);
        }).on("end", function() {
          h.isPaused ? h._upstreamEnded = !0 : h.end();
        });
      }, n.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, w.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, w, d) {
      var i = r("readable-stream").Readable;
      function s(n, l, h) {
        i.call(this, l), this._helper = n;
        var y = this;
        n.on("data", function(b, g) {
          y.push(b) || y._helper.pause(), h && h(g);
        }).on("error", function(b) {
          y.emit("error", b);
        }).on("end", function() {
          y.push(null);
        });
      }
      r("../utils").inherits(s, i), s.prototype._read = function() {
        this._helper.resume();
      }, w.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, w, d) {
      w.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(i, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(i, s);
        if (typeof i == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(i, s);
      }, allocBuffer: function(i) {
        if (Buffer.alloc)
          return Buffer.alloc(i);
        var s = new Buffer(i);
        return s.fill(0), s;
      }, isBuffer: function(i) {
        return Buffer.isBuffer(i);
      }, isStream: function(i) {
        return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
      } };
    }, {}], 15: [function(r, w, d) {
      function i(C, T, W) {
        var Y, L = n.getTypeOf(T), P = n.extend(W || {}, y);
        P.date = P.date || new Date(), P.compression !== null && (P.compression = P.compression.toUpperCase()), typeof P.unixPermissions == "string" && (P.unixPermissions = parseInt(P.unixPermissions, 8)), P.unixPermissions && 16384 & P.unixPermissions && (P.dir = !0), P.dosPermissions && 16 & P.dosPermissions && (P.dir = !0), P.dir && (C = c(C)), P.createFolders && (Y = u(C)) && v.call(this, Y, !0);
        var $ = L === "string" && P.binary === !1 && P.base64 === !1;
        W && W.binary !== void 0 || (P.binary = !$), (T instanceof b && T.uncompressedSize === 0 || P.dir || !T || T.length === 0) && (P.base64 = !1, P.binary = !0, T = "", P.compression = "STORE", L = "string");
        var k = null;
        k = T instanceof b || T instanceof l ? T : f.isNode && f.isStream(T) ? new a(C, T) : n.prepareContent(C, T, P.binary, P.optimizedBinaryString, P.base64);
        var N = new g(C, k, P);
        this.files[C] = N;
      }
      var s = r("./utf8"), n = r("./utils"), l = r("./stream/GenericWorker"), h = r("./stream/StreamHelper"), y = r("./defaults"), b = r("./compressedObject"), g = r("./zipObject"), o = r("./generate"), f = r("./nodejsUtils"), a = r("./nodejs/NodejsStreamInputAdapter"), u = function(C) {
        C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
        var T = C.lastIndexOf("/");
        return 0 < T ? C.substring(0, T) : "";
      }, c = function(C) {
        return C.slice(-1) !== "/" && (C += "/"), C;
      }, v = function(C, T) {
        return T = T !== void 0 ? T : y.createFolders, C = c(C), this.files[C] || i.call(this, C, null, { dir: !0, createFolders: T }), this.files[C];
      };
      function I(C) {
        return Object.prototype.toString.call(C) === "[object RegExp]";
      }
      var x = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(C) {
        var T, W, Y;
        for (T in this.files)
          Y = this.files[T], (W = T.slice(this.root.length, T.length)) && T.slice(0, this.root.length) === this.root && C(W, Y);
      }, filter: function(C) {
        var T = [];
        return this.forEach(function(W, Y) {
          C(W, Y) && T.push(Y);
        }), T;
      }, file: function(C, T, W) {
        if (arguments.length !== 1)
          return C = this.root + C, i.call(this, C, T, W), this;
        if (I(C)) {
          var Y = C;
          return this.filter(function(P, $) {
            return !$.dir && Y.test(P);
          });
        }
        var L = this.files[this.root + C];
        return L && !L.dir ? L : null;
      }, folder: function(C) {
        if (!C)
          return this;
        if (I(C))
          return this.filter(function(L, P) {
            return P.dir && C.test(L);
          });
        var T = this.root + C, W = v.call(this, T), Y = this.clone();
        return Y.root = W.name, Y;
      }, remove: function(C) {
        C = this.root + C;
        var T = this.files[C];
        if (T || (C.slice(-1) !== "/" && (C += "/"), T = this.files[C]), T && !T.dir)
          delete this.files[C];
        else
          for (var W = this.filter(function(L, P) {
            return P.name.slice(0, C.length) === C;
          }), Y = 0; Y < W.length; Y++)
            delete this.files[W[Y].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(C) {
        var T, W = {};
        try {
          if ((W = n.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = W.type.toLowerCase(), W.compression = W.compression.toUpperCase(), W.type === "binarystring" && (W.type = "string"), !W.type)
            throw new Error("No output type specified.");
          n.checkSupport(W.type), W.platform !== "darwin" && W.platform !== "freebsd" && W.platform !== "linux" && W.platform !== "sunos" || (W.platform = "UNIX"), W.platform === "win32" && (W.platform = "DOS");
          var Y = W.comment || this.comment || "";
          T = o.generateWorker(this, W, Y);
        } catch (L) {
          (T = new l("error")).error(L);
        }
        return new h(T, W.type || "string", W.mimeType);
      }, generateAsync: function(C, T) {
        return this.generateInternalStream(C).accumulate(T);
      }, generateNodeStream: function(C, T) {
        return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(T);
      } };
      w.exports = x;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, w, d) {
      w.exports = r("stream");
    }, { stream: void 0 }], 17: [function(r, w, d) {
      var i = r("./DataReader");
      function s(n) {
        i.call(this, n);
        for (var l = 0; l < this.data.length; l++)
          n[l] = 255 & n[l];
      }
      r("../utils").inherits(s, i), s.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, s.prototype.lastIndexOfSignature = function(n) {
        for (var l = n.charCodeAt(0), h = n.charCodeAt(1), y = n.charCodeAt(2), b = n.charCodeAt(3), g = this.length - 4; 0 <= g; --g)
          if (this.data[g] === l && this.data[g + 1] === h && this.data[g + 2] === y && this.data[g + 3] === b)
            return g - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(n) {
        var l = n.charCodeAt(0), h = n.charCodeAt(1), y = n.charCodeAt(2), b = n.charCodeAt(3), g = this.readData(4);
        return l === g[0] && h === g[1] && y === g[2] && b === g[3];
      }, s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, w.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, w, d) {
      var i = r("../utils");
      function s(n) {
        this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(n) {
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
        var l, h = 0;
        for (this.checkOffset(n), l = this.index + n - 1; l >= this.index; l--)
          h = (h << 8) + this.byteAt(l);
        return this.index += n, h;
      }, readString: function(n) {
        return i.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, w.exports = s;
    }, { "../utils": 32 }], 19: [function(r, w, d) {
      var i = r("./Uint8ArrayReader");
      function s(n) {
        i.call(this, n);
      }
      r("../utils").inherits(s, i), s.prototype.readData = function(n) {
        this.checkOffset(n);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, w.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, w, d) {
      var i = r("./DataReader");
      function s(n) {
        i.call(this, n);
      }
      r("../utils").inherits(s, i), s.prototype.byteAt = function(n) {
        return this.data.charCodeAt(this.zero + n);
      }, s.prototype.lastIndexOfSignature = function(n) {
        return this.data.lastIndexOf(n) - this.zero;
      }, s.prototype.readAndCheckSignature = function(n) {
        return n === this.readData(4);
      }, s.prototype.readData = function(n) {
        this.checkOffset(n);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, w.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, w, d) {
      var i = r("./ArrayReader");
      function s(n) {
        i.call(this, n);
      }
      r("../utils").inherits(s, i), s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, w.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, w, d) {
      var i = r("../utils"), s = r("../support"), n = r("./ArrayReader"), l = r("./StringReader"), h = r("./NodeBufferReader"), y = r("./Uint8ArrayReader");
      w.exports = function(b) {
        var g = i.getTypeOf(b);
        return i.checkSupport(g), g !== "string" || s.uint8array ? g === "nodebuffer" ? new h(b) : s.uint8array ? new y(i.transformTo("uint8array", b)) : new n(i.transformTo("array", b)) : new l(b);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, w, d) {
      d.LOCAL_FILE_HEADER = "PK", d.CENTRAL_FILE_HEADER = "PK", d.CENTRAL_DIRECTORY_END = "PK", d.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", d.ZIP64_CENTRAL_DIRECTORY_END = "PK", d.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, w, d) {
      var i = r("./GenericWorker"), s = r("../utils");
      function n(l) {
        i.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(n, i), n.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, w.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, w, d) {
      var i = r("./GenericWorker"), s = r("../crc32");
      function n() {
        i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(n, i), n.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, w.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, w, d) {
      var i = r("../utils"), s = r("./GenericWorker");
      function n(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      i.inherits(n, s), n.prototype.processChunk = function(l) {
        if (l) {
          var h = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = h + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, w.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, w, d) {
      var i = r("../utils"), s = r("./GenericWorker");
      function n(l) {
        s.call(this, "DataWorker");
        var h = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(y) {
          h.dataIsReady = !0, h.data = y, h.max = y && y.length || 0, h.type = i.getTypeOf(y), h.isPaused || h._tickAndRepeat();
        }, function(y) {
          h.error(y);
        });
      }
      i.inherits(n, s), n.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
      }, n.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, n.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var l = null, h = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, h);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, h);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, h);
        }
        return this.index = h, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, w.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, w, d) {
      function i(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      i.prototype = { push: function(s) {
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
      }, on: function(s, n) {
        return this._listeners[s].push(n), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, n) {
        if (this._listeners[s])
          for (var l = 0; l < this._listeners[s].length; l++)
            this._listeners[s][l].call(this, n);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var n = this;
        return s.on("data", function(l) {
          n.processChunk(l);
        }), s.on("end", function() {
          n.end();
        }), s.on("error", function(l) {
          n.error(l);
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
      }, withStreamInfo: function(s, n) {
        return this.extraStreamInfo[s] = n, this.mergeStreamInfo(), this;
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
      } }, w.exports = i;
    }, {}], 29: [function(r, w, d) {
      var i = r("../utils"), s = r("./ConvertWorker"), n = r("./GenericWorker"), l = r("../base64"), h = r("../support"), y = r("../external"), b = null;
      if (h.nodestream)
        try {
          b = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function g(f, a) {
        return new y.Promise(function(u, c) {
          var v = [], I = f._internalType, x = f._outputType, C = f._mimeType;
          f.on("data", function(T, W) {
            v.push(T), a && a(W);
          }).on("error", function(T) {
            v = [], c(T);
          }).on("end", function() {
            try {
              var T = function(W, Y, L) {
                switch (W) {
                  case "blob":
                    return i.newBlob(i.transformTo("arraybuffer", Y), L);
                  case "base64":
                    return l.encode(Y);
                  default:
                    return i.transformTo(W, Y);
                }
              }(x, function(W, Y) {
                var L, P = 0, $ = null, k = 0;
                for (L = 0; L < Y.length; L++)
                  k += Y[L].length;
                switch (W) {
                  case "string":
                    return Y.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Y);
                  case "uint8array":
                    for ($ = new Uint8Array(k), L = 0; L < Y.length; L++)
                      $.set(Y[L], P), P += Y[L].length;
                    return $;
                  case "nodebuffer":
                    return Buffer.concat(Y);
                  default:
                    throw new Error("concat : unsupported type '" + W + "'");
                }
              }(I, v), C);
              u(T);
            } catch (W) {
              c(W);
            }
            v = [];
          }).resume();
        });
      }
      function o(f, a, u) {
        var c = a;
        switch (a) {
          case "blob":
          case "arraybuffer":
            c = "uint8array";
            break;
          case "base64":
            c = "string";
        }
        try {
          this._internalType = c, this._outputType = a, this._mimeType = u, i.checkSupport(c), this._worker = f.pipe(new s(c)), f.lock();
        } catch (v) {
          this._worker = new n("error"), this._worker.error(v);
        }
      }
      o.prototype = { accumulate: function(f) {
        return g(this, f);
      }, on: function(f, a) {
        var u = this;
        return f === "data" ? this._worker.on(f, function(c) {
          a.call(u, c.data, c.meta);
        }) : this._worker.on(f, function() {
          i.delay(a, arguments, u);
        }), this;
      }, resume: function() {
        return i.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(f) {
        if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new b(this, { objectMode: this._outputType !== "nodebuffer" }, f);
      } }, w.exports = o;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, w, d) {
      if (d.base64 = !0, d.array = !0, d.string = !0, d.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", d.nodebuffer = typeof Buffer < "u", d.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        d.blob = !1;
      else {
        var i = new ArrayBuffer(0);
        try {
          d.blob = new Blob([i], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(i), d.blob = s.getBlob("application/zip").size === 0;
          } catch {
            d.blob = !1;
          }
        }
      }
      try {
        d.nodestream = !!r("readable-stream").Readable;
      } catch {
        d.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(r, w, d) {
      for (var i = r("./utils"), s = r("./support"), n = r("./nodejsUtils"), l = r("./stream/GenericWorker"), h = new Array(256), y = 0; y < 256; y++)
        h[y] = 252 <= y ? 6 : 248 <= y ? 5 : 240 <= y ? 4 : 224 <= y ? 3 : 192 <= y ? 2 : 1;
      h[254] = h[254] = 1;
      function b() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function g() {
        l.call(this, "utf-8 encode");
      }
      d.utf8encode = function(o) {
        return s.nodebuffer ? n.newBufferFrom(o, "utf-8") : function(f) {
          var a, u, c, v, I, x = f.length, C = 0;
          for (v = 0; v < x; v++)
            (64512 & (u = f.charCodeAt(v))) == 55296 && v + 1 < x && (64512 & (c = f.charCodeAt(v + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (c - 56320), v++), C += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
          for (a = s.uint8array ? new Uint8Array(C) : new Array(C), v = I = 0; I < C; v++)
            (64512 & (u = f.charCodeAt(v))) == 55296 && v + 1 < x && (64512 & (c = f.charCodeAt(v + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (c - 56320), v++), u < 128 ? a[I++] = u : (u < 2048 ? a[I++] = 192 | u >>> 6 : (u < 65536 ? a[I++] = 224 | u >>> 12 : (a[I++] = 240 | u >>> 18, a[I++] = 128 | u >>> 12 & 63), a[I++] = 128 | u >>> 6 & 63), a[I++] = 128 | 63 & u);
          return a;
        }(o);
      }, d.utf8decode = function(o) {
        return s.nodebuffer ? i.transformTo("nodebuffer", o).toString("utf-8") : function(f) {
          var a, u, c, v, I = f.length, x = new Array(2 * I);
          for (a = u = 0; a < I; )
            if ((c = f[a++]) < 128)
              x[u++] = c;
            else if (4 < (v = h[c]))
              x[u++] = 65533, a += v - 1;
            else {
              for (c &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && a < I; )
                c = c << 6 | 63 & f[a++], v--;
              1 < v ? x[u++] = 65533 : c < 65536 ? x[u++] = c : (c -= 65536, x[u++] = 55296 | c >> 10 & 1023, x[u++] = 56320 | 1023 & c);
            }
          return x.length !== u && (x.subarray ? x = x.subarray(0, u) : x.length = u), i.applyFromCharCode(x);
        }(o = i.transformTo(s.uint8array ? "uint8array" : "array", o));
      }, i.inherits(b, l), b.prototype.processChunk = function(o) {
        var f = i.transformTo(s.uint8array ? "uint8array" : "array", o.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var a = f;
            (f = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), f.set(a, this.leftOver.length);
          } else
            f = this.leftOver.concat(f);
          this.leftOver = null;
        }
        var u = function(v, I) {
          var x;
          for ((I = I || v.length) > v.length && (I = v.length), x = I - 1; 0 <= x && (192 & v[x]) == 128; )
            x--;
          return x < 0 || x === 0 ? I : x + h[v[x]] > I ? x : I;
        }(f), c = f;
        u !== f.length && (s.uint8array ? (c = f.subarray(0, u), this.leftOver = f.subarray(u, f.length)) : (c = f.slice(0, u), this.leftOver = f.slice(u, f.length))), this.push({ data: d.utf8decode(c), meta: o.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: d.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, d.Utf8DecodeWorker = b, i.inherits(g, l), g.prototype.processChunk = function(o) {
        this.push({ data: d.utf8encode(o.data), meta: o.meta });
      }, d.Utf8EncodeWorker = g;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, w, d) {
      var i = r("./support"), s = r("./base64"), n = r("./nodejsUtils"), l = r("./external");
      function h(a) {
        return a;
      }
      function y(a, u) {
        for (var c = 0; c < a.length; ++c)
          u[c] = 255 & a.charCodeAt(c);
        return u;
      }
      r("setimmediate"), d.newBlob = function(a, u) {
        d.checkSupport("blob");
        try {
          return new Blob([a], { type: u });
        } catch {
          try {
            var c = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return c.append(a), c.getBlob(u);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var b = { stringifyByChunk: function(a, u, c) {
        var v = [], I = 0, x = a.length;
        if (x <= c)
          return String.fromCharCode.apply(null, a);
        for (; I < x; )
          u === "array" || u === "nodebuffer" ? v.push(String.fromCharCode.apply(null, a.slice(I, Math.min(I + c, x)))) : v.push(String.fromCharCode.apply(null, a.subarray(I, Math.min(I + c, x)))), I += c;
        return v.join("");
      }, stringifyByChar: function(a) {
        for (var u = "", c = 0; c < a.length; c++)
          u += String.fromCharCode(a[c]);
        return u;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return i.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function g(a) {
        var u = 65536, c = d.getTypeOf(a), v = !0;
        if (c === "uint8array" ? v = b.applyCanBeUsed.uint8array : c === "nodebuffer" && (v = b.applyCanBeUsed.nodebuffer), v)
          for (; 1 < u; )
            try {
              return b.stringifyByChunk(a, c, u);
            } catch {
              u = Math.floor(u / 2);
            }
        return b.stringifyByChar(a);
      }
      function o(a, u) {
        for (var c = 0; c < a.length; c++)
          u[c] = a[c];
        return u;
      }
      d.applyFromCharCode = g;
      var f = {};
      f.string = { string: h, array: function(a) {
        return y(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return f.string.uint8array(a).buffer;
      }, uint8array: function(a) {
        return y(a, new Uint8Array(a.length));
      }, nodebuffer: function(a) {
        return y(a, n.allocBuffer(a.length));
      } }, f.array = { string: g, array: h, arraybuffer: function(a) {
        return new Uint8Array(a).buffer;
      }, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return n.newBufferFrom(a);
      } }, f.arraybuffer = { string: function(a) {
        return g(new Uint8Array(a));
      }, array: function(a) {
        return o(new Uint8Array(a), new Array(a.byteLength));
      }, arraybuffer: h, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return n.newBufferFrom(new Uint8Array(a));
      } }, f.uint8array = { string: g, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return a.buffer;
      }, uint8array: h, nodebuffer: function(a) {
        return n.newBufferFrom(a);
      } }, f.nodebuffer = { string: g, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return f.nodebuffer.uint8array(a).buffer;
      }, uint8array: function(a) {
        return o(a, new Uint8Array(a.length));
      }, nodebuffer: h }, d.transformTo = function(a, u) {
        if (u = u || "", !a)
          return u;
        d.checkSupport(a);
        var c = d.getTypeOf(u);
        return f[c][a](u);
      }, d.resolve = function(a) {
        for (var u = a.split("/"), c = [], v = 0; v < u.length; v++) {
          var I = u[v];
          I === "." || I === "" && v !== 0 && v !== u.length - 1 || (I === ".." ? c.pop() : c.push(I));
        }
        return c.join("/");
      }, d.getTypeOf = function(a) {
        return typeof a == "string" ? "string" : Object.prototype.toString.call(a) === "[object Array]" ? "array" : i.nodebuffer && n.isBuffer(a) ? "nodebuffer" : i.uint8array && a instanceof Uint8Array ? "uint8array" : i.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, d.checkSupport = function(a) {
        if (!i[a.toLowerCase()])
          throw new Error(a + " is not supported by this platform");
      }, d.MAX_VALUE_16BITS = 65535, d.MAX_VALUE_32BITS = -1, d.pretty = function(a) {
        var u, c, v = "";
        for (c = 0; c < (a || "").length; c++)
          v += "\\x" + ((u = a.charCodeAt(c)) < 16 ? "0" : "") + u.toString(16).toUpperCase();
        return v;
      }, d.delay = function(a, u, c) {
        setImmediate(function() {
          a.apply(c || null, u || []);
        });
      }, d.inherits = function(a, u) {
        function c() {
        }
        c.prototype = u.prototype, a.prototype = new c();
      }, d.extend = function() {
        var a, u, c = {};
        for (a = 0; a < arguments.length; a++)
          for (u in arguments[a])
            Object.prototype.hasOwnProperty.call(arguments[a], u) && c[u] === void 0 && (c[u] = arguments[a][u]);
        return c;
      }, d.prepareContent = function(a, u, c, v, I) {
        return l.Promise.resolve(u).then(function(x) {
          return i.blob && (x instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(x)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(C, T) {
            var W = new FileReader();
            W.onload = function(Y) {
              C(Y.target.result);
            }, W.onerror = function(Y) {
              T(Y.target.error);
            }, W.readAsArrayBuffer(x);
          }) : x;
        }).then(function(x) {
          var C = d.getTypeOf(x);
          return C ? (C === "arraybuffer" ? x = d.transformTo("uint8array", x) : C === "string" && (I ? x = s.decode(x) : c && v !== !0 && (x = function(T) {
            return y(T, i.uint8array ? new Uint8Array(T.length) : new Array(T.length));
          }(x))), x) : l.Promise.reject(new Error("Can't read the data of '" + a + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, w, d) {
      var i = r("./reader/readerFor"), s = r("./utils"), n = r("./signature"), l = r("./zipEntry"), h = r("./support");
      function y(b) {
        this.files = [], this.loadOptions = b;
      }
      y.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var g = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(g) + ", expected " + s.pretty(b) + ")");
        }
      }, isSignature: function(b, g) {
        var o = this.reader.index;
        this.reader.setIndex(b);
        var f = this.reader.readString(4) === g;
        return this.reader.setIndex(o), f;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), g = h.uint8array ? "uint8array" : "array", o = s.transformTo(g, b);
        this.zipComment = this.loadOptions.decodeFileName(o);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, g, o, f = this.zip64EndOfCentralSize - 44; 0 < f; )
          b = this.reader.readInt(2), g = this.reader.readInt(4), o = this.reader.readData(g), this.zip64ExtensibleData[b] = { id: b, length: g, value: o };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, g;
        for (b = 0; b < this.files.length; b++)
          g = this.files[b], this.reader.setIndex(g.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), g.readLocalPart(this.reader), g.handleUTF8(), g.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (b = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (b < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var g = b;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var o = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (o += 20, o += 12 + this.zip64EndOfCentralSize);
        var f = g - o;
        if (0 < f)
          this.isSignature(g, n.CENTRAL_FILE_HEADER) || (this.reader.zero = f);
        else if (f < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(f) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = i(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, w.exports = y;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, w, d) {
      var i = r("./reader/readerFor"), s = r("./utils"), n = r("./compressedObject"), l = r("./crc32"), h = r("./utf8"), y = r("./compressions"), b = r("./support");
      function g(o, f) {
        this.options = o, this.loadOptions = f;
      }
      g.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(o) {
        var f, a;
        if (o.skip(22), this.fileNameLength = o.readInt(2), a = o.readInt(2), this.fileName = o.readData(this.fileNameLength), o.skip(a), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((f = function(u) {
          for (var c in y)
            if (Object.prototype.hasOwnProperty.call(y, c) && y[c].magic === u)
              return y[c];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, f, o.readData(this.compressedSize));
      }, readCentralPart: function(o) {
        this.versionMadeBy = o.readInt(2), o.skip(2), this.bitFlag = o.readInt(2), this.compressionMethod = o.readString(2), this.date = o.readDate(), this.crc32 = o.readInt(4), this.compressedSize = o.readInt(4), this.uncompressedSize = o.readInt(4);
        var f = o.readInt(2);
        if (this.extraFieldsLength = o.readInt(2), this.fileCommentLength = o.readInt(2), this.diskNumberStart = o.readInt(2), this.internalFileAttributes = o.readInt(2), this.externalFileAttributes = o.readInt(4), this.localHeaderOffset = o.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        o.skip(f), this.readExtraFields(o), this.parseZIP64ExtraField(o), this.fileComment = o.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var o = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), o == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), o == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var o = i(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = o.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = o.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = o.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = o.readInt(4));
        }
      }, readExtraFields: function(o) {
        var f, a, u, c = o.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); o.index + 4 < c; )
          f = o.readInt(2), a = o.readInt(2), u = o.readData(a), this.extraFields[f] = { id: f, length: a, value: u };
        o.setIndex(c);
      }, handleUTF8: function() {
        var o = b.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = h.utf8decode(this.fileName), this.fileCommentStr = h.utf8decode(this.fileComment);
        else {
          var f = this.findExtraFieldUnicodePath();
          if (f !== null)
            this.fileNameStr = f;
          else {
            var a = s.transformTo(o, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(a);
          }
          var u = this.findExtraFieldUnicodeComment();
          if (u !== null)
            this.fileCommentStr = u;
          else {
            var c = s.transformTo(o, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(c);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var o = this.extraFields[28789];
        if (o) {
          var f = i(o.value);
          return f.readInt(1) !== 1 || l(this.fileName) !== f.readInt(4) ? null : h.utf8decode(f.readData(o.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var o = this.extraFields[25461];
        if (o) {
          var f = i(o.value);
          return f.readInt(1) !== 1 || l(this.fileComment) !== f.readInt(4) ? null : h.utf8decode(f.readData(o.length - 5));
        }
        return null;
      } }, w.exports = g;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, w, d) {
      function i(f, a, u) {
        this.name = f, this.dir = u.dir, this.date = u.date, this.comment = u.comment, this.unixPermissions = u.unixPermissions, this.dosPermissions = u.dosPermissions, this._data = a, this._dataBinary = u.binary, this.options = { compression: u.compression, compressionOptions: u.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), n = r("./stream/DataWorker"), l = r("./utf8"), h = r("./compressedObject"), y = r("./stream/GenericWorker");
      i.prototype = { internalStream: function(f) {
        var a = null, u = "string";
        try {
          if (!f)
            throw new Error("No output type specified.");
          var c = (u = f.toLowerCase()) === "string" || u === "text";
          u !== "binarystring" && u !== "text" || (u = "string"), a = this._decompressWorker();
          var v = !this._dataBinary;
          v && !c && (a = a.pipe(new l.Utf8EncodeWorker())), !v && c && (a = a.pipe(new l.Utf8DecodeWorker()));
        } catch (I) {
          (a = new y("error")).error(I);
        }
        return new s(a, u, "");
      }, async: function(f, a) {
        return this.internalStream(f).accumulate(a);
      }, nodeStream: function(f, a) {
        return this.internalStream(f || "nodebuffer").toNodejsStream(a);
      }, _compressWorker: function(f, a) {
        if (this._data instanceof h && this._data.compression.magic === f.magic)
          return this._data.getCompressedWorker();
        var u = this._decompressWorker();
        return this._dataBinary || (u = u.pipe(new l.Utf8EncodeWorker())), h.createWorkerFrom(u, f, a);
      }, _decompressWorker: function() {
        return this._data instanceof h ? this._data.getContentWorker() : this._data instanceof y ? this._data : new n(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], g = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, o = 0; o < b.length; o++)
        i.prototype[b[o]] = g;
      w.exports = i;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, w, d) {
      (function(i) {
        var s, n, l = i.MutationObserver || i.WebKitMutationObserver;
        if (l) {
          var h = 0, y = new l(f), b = i.document.createTextNode("");
          y.observe(b, { characterData: !0 }), s = function() {
            b.data = h = ++h % 2;
          };
        } else if (i.setImmediate || i.MessageChannel === void 0)
          s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
            var a = i.document.createElement("script");
            a.onreadystatechange = function() {
              f(), a.onreadystatechange = null, a.parentNode.removeChild(a), a = null;
            }, i.document.documentElement.appendChild(a);
          } : function() {
            setTimeout(f, 0);
          };
        else {
          var g = new i.MessageChannel();
          g.port1.onmessage = f, s = function() {
            g.port2.postMessage(0);
          };
        }
        var o = [];
        function f() {
          var a, u;
          n = !0;
          for (var c = o.length; c; ) {
            for (u = o, o = [], a = -1; ++a < c; )
              u[a]();
            c = o.length;
          }
          n = !1;
        }
        w.exports = function(a) {
          o.push(a) !== 1 || n || s();
        };
      }).call(this, typeof Zt < "u" ? Zt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, w, d) {
      var i = r("immediate");
      function s() {
      }
      var n = {}, l = ["REJECTED"], h = ["FULFILLED"], y = ["PENDING"];
      function b(c) {
        if (typeof c != "function")
          throw new TypeError("resolver must be a function");
        this.state = y, this.queue = [], this.outcome = void 0, c !== s && a(this, c);
      }
      function g(c, v, I) {
        this.promise = c, typeof v == "function" && (this.onFulfilled = v, this.callFulfilled = this.otherCallFulfilled), typeof I == "function" && (this.onRejected = I, this.callRejected = this.otherCallRejected);
      }
      function o(c, v, I) {
        i(function() {
          var x;
          try {
            x = v(I);
          } catch (C) {
            return n.reject(c, C);
          }
          x === c ? n.reject(c, new TypeError("Cannot resolve promise with itself")) : n.resolve(c, x);
        });
      }
      function f(c) {
        var v = c && c.then;
        if (c && (typeof c == "object" || typeof c == "function") && typeof v == "function")
          return function() {
            v.apply(c, arguments);
          };
      }
      function a(c, v) {
        var I = !1;
        function x(W) {
          I || (I = !0, n.reject(c, W));
        }
        function C(W) {
          I || (I = !0, n.resolve(c, W));
        }
        var T = u(function() {
          v(C, x);
        });
        T.status === "error" && x(T.value);
      }
      function u(c, v) {
        var I = {};
        try {
          I.value = c(v), I.status = "success";
        } catch (x) {
          I.status = "error", I.value = x;
        }
        return I;
      }
      (w.exports = b).prototype.finally = function(c) {
        if (typeof c != "function")
          return this;
        var v = this.constructor;
        return this.then(function(I) {
          return v.resolve(c()).then(function() {
            return I;
          });
        }, function(I) {
          return v.resolve(c()).then(function() {
            throw I;
          });
        });
      }, b.prototype.catch = function(c) {
        return this.then(null, c);
      }, b.prototype.then = function(c, v) {
        if (typeof c != "function" && this.state === h || typeof v != "function" && this.state === l)
          return this;
        var I = new this.constructor(s);
        return this.state !== y ? o(I, this.state === h ? c : v, this.outcome) : this.queue.push(new g(I, c, v)), I;
      }, g.prototype.callFulfilled = function(c) {
        n.resolve(this.promise, c);
      }, g.prototype.otherCallFulfilled = function(c) {
        o(this.promise, this.onFulfilled, c);
      }, g.prototype.callRejected = function(c) {
        n.reject(this.promise, c);
      }, g.prototype.otherCallRejected = function(c) {
        o(this.promise, this.onRejected, c);
      }, n.resolve = function(c, v) {
        var I = u(f, v);
        if (I.status === "error")
          return n.reject(c, I.value);
        var x = I.value;
        if (x)
          a(c, x);
        else {
          c.state = h, c.outcome = v;
          for (var C = -1, T = c.queue.length; ++C < T; )
            c.queue[C].callFulfilled(v);
        }
        return c;
      }, n.reject = function(c, v) {
        c.state = l, c.outcome = v;
        for (var I = -1, x = c.queue.length; ++I < x; )
          c.queue[I].callRejected(v);
        return c;
      }, b.resolve = function(c) {
        return c instanceof this ? c : n.resolve(new this(s), c);
      }, b.reject = function(c) {
        var v = new this(s);
        return n.reject(v, c);
      }, b.all = function(c) {
        var v = this;
        if (Object.prototype.toString.call(c) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var I = c.length, x = !1;
        if (!I)
          return this.resolve([]);
        for (var C = new Array(I), T = 0, W = -1, Y = new this(s); ++W < I; )
          L(c[W], W);
        return Y;
        function L(P, $) {
          v.resolve(P).then(function(k) {
            C[$] = k, ++T !== I || x || (x = !0, n.resolve(Y, C));
          }, function(k) {
            x || (x = !0, n.reject(Y, k));
          });
        }
      }, b.race = function(c) {
        var v = this;
        if (Object.prototype.toString.call(c) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var I = c.length, x = !1;
        if (!I)
          return this.resolve([]);
        for (var C = -1, T = new this(s); ++C < I; )
          W = c[C], v.resolve(W).then(function(Y) {
            x || (x = !0, n.resolve(T, Y));
          }, function(Y) {
            x || (x = !0, n.reject(T, Y));
          });
        var W;
        return T;
      };
    }, { immediate: 36 }], 38: [function(r, w, d) {
      var i = {};
      (0, r("./lib/utils/common").assign)(i, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), w.exports = i;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, w, d) {
      var i = r("./zlib/deflate"), s = r("./utils/common"), n = r("./utils/strings"), l = r("./zlib/messages"), h = r("./zlib/zstream"), y = Object.prototype.toString, b = 0, g = -1, o = 0, f = 8;
      function a(c) {
        if (!(this instanceof a))
          return new a(c);
        this.options = s.assign({ level: g, method: f, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: o, to: "" }, c || {});
        var v = this.options;
        v.raw && 0 < v.windowBits ? v.windowBits = -v.windowBits : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new h(), this.strm.avail_out = 0;
        var I = i.deflateInit2(this.strm, v.level, v.method, v.windowBits, v.memLevel, v.strategy);
        if (I !== b)
          throw new Error(l[I]);
        if (v.header && i.deflateSetHeader(this.strm, v.header), v.dictionary) {
          var x;
          if (x = typeof v.dictionary == "string" ? n.string2buf(v.dictionary) : y.call(v.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(v.dictionary) : v.dictionary, (I = i.deflateSetDictionary(this.strm, x)) !== b)
            throw new Error(l[I]);
          this._dict_set = !0;
        }
      }
      function u(c, v) {
        var I = new a(v);
        if (I.push(c, !0), I.err)
          throw I.msg || l[I.err];
        return I.result;
      }
      a.prototype.push = function(c, v) {
        var I, x, C = this.strm, T = this.options.chunkSize;
        if (this.ended)
          return !1;
        x = v === ~~v ? v : v === !0 ? 4 : 0, typeof c == "string" ? C.input = n.string2buf(c) : y.call(c) === "[object ArrayBuffer]" ? C.input = new Uint8Array(c) : C.input = c, C.next_in = 0, C.avail_in = C.input.length;
        do {
          if (C.avail_out === 0 && (C.output = new s.Buf8(T), C.next_out = 0, C.avail_out = T), (I = i.deflate(C, x)) !== 1 && I !== b)
            return this.onEnd(I), !(this.ended = !0);
          C.avail_out !== 0 && (C.avail_in !== 0 || x !== 4 && x !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(s.shrinkBuf(C.output, C.next_out))) : this.onData(s.shrinkBuf(C.output, C.next_out)));
        } while ((0 < C.avail_in || C.avail_out === 0) && I !== 1);
        return x === 4 ? (I = i.deflateEnd(this.strm), this.onEnd(I), this.ended = !0, I === b) : x !== 2 || (this.onEnd(b), !(C.avail_out = 0));
      }, a.prototype.onData = function(c) {
        this.chunks.push(c);
      }, a.prototype.onEnd = function(c) {
        c === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
      }, d.Deflate = a, d.deflate = u, d.deflateRaw = function(c, v) {
        return (v = v || {}).raw = !0, u(c, v);
      }, d.gzip = function(c, v) {
        return (v = v || {}).gzip = !0, u(c, v);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, w, d) {
      var i = r("./zlib/inflate"), s = r("./utils/common"), n = r("./utils/strings"), l = r("./zlib/constants"), h = r("./zlib/messages"), y = r("./zlib/zstream"), b = r("./zlib/gzheader"), g = Object.prototype.toString;
      function o(a) {
        if (!(this instanceof o))
          return new o(a);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, a || {});
        var u = this.options;
        u.raw && 0 <= u.windowBits && u.windowBits < 16 && (u.windowBits = -u.windowBits, u.windowBits === 0 && (u.windowBits = -15)), !(0 <= u.windowBits && u.windowBits < 16) || a && a.windowBits || (u.windowBits += 32), 15 < u.windowBits && u.windowBits < 48 && !(15 & u.windowBits) && (u.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new y(), this.strm.avail_out = 0;
        var c = i.inflateInit2(this.strm, u.windowBits);
        if (c !== l.Z_OK)
          throw new Error(h[c]);
        this.header = new b(), i.inflateGetHeader(this.strm, this.header);
      }
      function f(a, u) {
        var c = new o(u);
        if (c.push(a, !0), c.err)
          throw c.msg || h[c.err];
        return c.result;
      }
      o.prototype.push = function(a, u) {
        var c, v, I, x, C, T, W = this.strm, Y = this.options.chunkSize, L = this.options.dictionary, P = !1;
        if (this.ended)
          return !1;
        v = u === ~~u ? u : u === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof a == "string" ? W.input = n.binstring2buf(a) : g.call(a) === "[object ArrayBuffer]" ? W.input = new Uint8Array(a) : W.input = a, W.next_in = 0, W.avail_in = W.input.length;
        do {
          if (W.avail_out === 0 && (W.output = new s.Buf8(Y), W.next_out = 0, W.avail_out = Y), (c = i.inflate(W, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && L && (T = typeof L == "string" ? n.string2buf(L) : g.call(L) === "[object ArrayBuffer]" ? new Uint8Array(L) : L, c = i.inflateSetDictionary(this.strm, T)), c === l.Z_BUF_ERROR && P === !0 && (c = l.Z_OK, P = !1), c !== l.Z_STREAM_END && c !== l.Z_OK)
            return this.onEnd(c), !(this.ended = !0);
          W.next_out && (W.avail_out !== 0 && c !== l.Z_STREAM_END && (W.avail_in !== 0 || v !== l.Z_FINISH && v !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (I = n.utf8border(W.output, W.next_out), x = W.next_out - I, C = n.buf2string(W.output, I), W.next_out = x, W.avail_out = Y - x, x && s.arraySet(W.output, W.output, I, x, 0), this.onData(C)) : this.onData(s.shrinkBuf(W.output, W.next_out)))), W.avail_in === 0 && W.avail_out === 0 && (P = !0);
        } while ((0 < W.avail_in || W.avail_out === 0) && c !== l.Z_STREAM_END);
        return c === l.Z_STREAM_END && (v = l.Z_FINISH), v === l.Z_FINISH ? (c = i.inflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === l.Z_OK) : v !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(W.avail_out = 0));
      }, o.prototype.onData = function(a) {
        this.chunks.push(a);
      }, o.prototype.onEnd = function(a) {
        a === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg;
      }, d.Inflate = o, d.inflate = f, d.inflateRaw = function(a, u) {
        return (u = u || {}).raw = !0, f(a, u);
      }, d.ungzip = f;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, w, d) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      d.assign = function(l) {
        for (var h = Array.prototype.slice.call(arguments, 1); h.length; ) {
          var y = h.shift();
          if (y) {
            if (typeof y != "object")
              throw new TypeError(y + "must be non-object");
            for (var b in y)
              y.hasOwnProperty(b) && (l[b] = y[b]);
          }
        }
        return l;
      }, d.shrinkBuf = function(l, h) {
        return l.length === h ? l : l.subarray ? l.subarray(0, h) : (l.length = h, l);
      };
      var s = { arraySet: function(l, h, y, b, g) {
        if (h.subarray && l.subarray)
          l.set(h.subarray(y, y + b), g);
        else
          for (var o = 0; o < b; o++)
            l[g + o] = h[y + o];
      }, flattenChunks: function(l) {
        var h, y, b, g, o, f;
        for (h = b = 0, y = l.length; h < y; h++)
          b += l[h].length;
        for (f = new Uint8Array(b), h = g = 0, y = l.length; h < y; h++)
          o = l[h], f.set(o, g), g += o.length;
        return f;
      } }, n = { arraySet: function(l, h, y, b, g) {
        for (var o = 0; o < b; o++)
          l[g + o] = h[y + o];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      d.setTyped = function(l) {
        l ? (d.Buf8 = Uint8Array, d.Buf16 = Uint16Array, d.Buf32 = Int32Array, d.assign(d, s)) : (d.Buf8 = Array, d.Buf16 = Array, d.Buf32 = Array, d.assign(d, n));
      }, d.setTyped(i);
    }, {}], 42: [function(r, w, d) {
      var i = r("./common"), s = !0, n = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        n = !1;
      }
      for (var l = new i.Buf8(256), h = 0; h < 256; h++)
        l[h] = 252 <= h ? 6 : 248 <= h ? 5 : 240 <= h ? 4 : 224 <= h ? 3 : 192 <= h ? 2 : 1;
      function y(b, g) {
        if (g < 65537 && (b.subarray && n || !b.subarray && s))
          return String.fromCharCode.apply(null, i.shrinkBuf(b, g));
        for (var o = "", f = 0; f < g; f++)
          o += String.fromCharCode(b[f]);
        return o;
      }
      l[254] = l[254] = 1, d.string2buf = function(b) {
        var g, o, f, a, u, c = b.length, v = 0;
        for (a = 0; a < c; a++)
          (64512 & (o = b.charCodeAt(a))) == 55296 && a + 1 < c && (64512 & (f = b.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), a++), v += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4;
        for (g = new i.Buf8(v), a = u = 0; u < v; a++)
          (64512 & (o = b.charCodeAt(a))) == 55296 && a + 1 < c && (64512 & (f = b.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), a++), o < 128 ? g[u++] = o : (o < 2048 ? g[u++] = 192 | o >>> 6 : (o < 65536 ? g[u++] = 224 | o >>> 12 : (g[u++] = 240 | o >>> 18, g[u++] = 128 | o >>> 12 & 63), g[u++] = 128 | o >>> 6 & 63), g[u++] = 128 | 63 & o);
        return g;
      }, d.buf2binstring = function(b) {
        return y(b, b.length);
      }, d.binstring2buf = function(b) {
        for (var g = new i.Buf8(b.length), o = 0, f = g.length; o < f; o++)
          g[o] = b.charCodeAt(o);
        return g;
      }, d.buf2string = function(b, g) {
        var o, f, a, u, c = g || b.length, v = new Array(2 * c);
        for (o = f = 0; o < c; )
          if ((a = b[o++]) < 128)
            v[f++] = a;
          else if (4 < (u = l[a]))
            v[f++] = 65533, o += u - 1;
          else {
            for (a &= u === 2 ? 31 : u === 3 ? 15 : 7; 1 < u && o < c; )
              a = a << 6 | 63 & b[o++], u--;
            1 < u ? v[f++] = 65533 : a < 65536 ? v[f++] = a : (a -= 65536, v[f++] = 55296 | a >> 10 & 1023, v[f++] = 56320 | 1023 & a);
          }
        return y(v, f);
      }, d.utf8border = function(b, g) {
        var o;
        for ((g = g || b.length) > b.length && (g = b.length), o = g - 1; 0 <= o && (192 & b[o]) == 128; )
          o--;
        return o < 0 || o === 0 ? g : o + l[b[o]] > g ? o : g;
      };
    }, { "./common": 41 }], 43: [function(r, w, d) {
      w.exports = function(i, s, n, l) {
        for (var h = 65535 & i | 0, y = i >>> 16 & 65535 | 0, b = 0; n !== 0; ) {
          for (n -= b = 2e3 < n ? 2e3 : n; y = y + (h = h + s[l++] | 0) | 0, --b; )
            ;
          h %= 65521, y %= 65521;
        }
        return h | y << 16 | 0;
      };
    }, {}], 44: [function(r, w, d) {
      w.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, w, d) {
      var i = function() {
        for (var s, n = [], l = 0; l < 256; l++) {
          s = l;
          for (var h = 0; h < 8; h++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          n[l] = s;
        }
        return n;
      }();
      w.exports = function(s, n, l, h) {
        var y = i, b = h + l;
        s ^= -1;
        for (var g = h; g < b; g++)
          s = s >>> 8 ^ y[255 & (s ^ n[g])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, w, d) {
      var i, s = r("../utils/common"), n = r("./trees"), l = r("./adler32"), h = r("./crc32"), y = r("./messages"), b = 0, g = 4, o = 0, f = -2, a = -1, u = 4, c = 2, v = 8, I = 9, x = 286, C = 30, T = 19, W = 2 * x + 1, Y = 15, L = 3, P = 258, $ = P + L + 1, k = 42, N = 113, e = 1, X = 2, tt = 3, J = 4;
      function rt(t, z) {
        return t.msg = y[z], z;
      }
      function j(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function nt(t) {
        for (var z = t.length; 0 <= --z; )
          t[z] = 0;
      }
      function G(t) {
        var z = t.state, B = z.pending;
        B > t.avail_out && (B = t.avail_out), B !== 0 && (s.arraySet(t.output, z.pending_buf, z.pending_out, B, t.next_out), t.next_out += B, z.pending_out += B, t.total_out += B, t.avail_out -= B, z.pending -= B, z.pending === 0 && (z.pending_out = 0));
      }
      function E(t, z) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, z), t.block_start = t.strstart, G(t.strm);
      }
      function it(t, z) {
        t.pending_buf[t.pending++] = z;
      }
      function K(t, z) {
        t.pending_buf[t.pending++] = z >>> 8 & 255, t.pending_buf[t.pending++] = 255 & z;
      }
      function Q(t, z) {
        var B, p, A = t.max_chain_length, S = t.strstart, F = t.prev_length, U = t.nice_match, Z = t.strstart > t.w_size - $ ? t.strstart - (t.w_size - $) : 0, O = t.window, M = t.w_mask, V = t.prev, _ = t.strstart + P, ot = O[S + F - 1], st = O[S + F];
        t.prev_length >= t.good_match && (A >>= 2), U > t.lookahead && (U = t.lookahead);
        do
          if (O[(B = z) + F] === st && O[B + F - 1] === ot && O[B] === O[S] && O[++B] === O[S + 1]) {
            S += 2, B++;
            do
              ;
            while (O[++S] === O[++B] && O[++S] === O[++B] && O[++S] === O[++B] && O[++S] === O[++B] && O[++S] === O[++B] && O[++S] === O[++B] && O[++S] === O[++B] && O[++S] === O[++B] && S < _);
            if (p = P - (_ - S), S = _ - P, F < p) {
              if (t.match_start = z, U <= (F = p))
                break;
              ot = O[S + F - 1], st = O[S + F];
            }
          }
        while ((z = V[z & M]) > Z && --A != 0);
        return F <= t.lookahead ? F : t.lookahead;
      }
      function dt(t) {
        var z, B, p, A, S, F, U, Z, O, M, V = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= V + (V - $)) {
            for (s.arraySet(t.window, t.window, V, V, 0), t.match_start -= V, t.strstart -= V, t.block_start -= V, z = B = t.hash_size; p = t.head[--z], t.head[z] = V <= p ? p - V : 0, --B; )
              ;
            for (z = B = V; p = t.prev[--z], t.prev[z] = V <= p ? p - V : 0, --B; )
              ;
            A += V;
          }
          if (t.strm.avail_in === 0)
            break;
          if (F = t.strm, U = t.window, Z = t.strstart + t.lookahead, O = A, M = void 0, M = F.avail_in, O < M && (M = O), B = M === 0 ? 0 : (F.avail_in -= M, s.arraySet(U, F.input, F.next_in, M, Z), F.state.wrap === 1 ? F.adler = l(F.adler, U, M, Z) : F.state.wrap === 2 && (F.adler = h(F.adler, U, M, Z)), F.next_in += M, F.total_in += M, M), t.lookahead += B, t.lookahead + t.insert >= L)
            for (S = t.strstart - t.insert, t.ins_h = t.window[S], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[S + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[S + L - 1]) & t.hash_mask, t.prev[S & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = S, S++, t.insert--, !(t.lookahead + t.insert < L)); )
              ;
        } while (t.lookahead < $ && t.strm.avail_in !== 0);
      }
      function yt(t, z) {
        for (var B, p; ; ) {
          if (t.lookahead < $) {
            if (dt(t), t.lookahead < $ && z === b)
              return e;
            if (t.lookahead === 0)
              break;
          }
          if (B = 0, t.lookahead >= L && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask, B = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), B !== 0 && t.strstart - B <= t.w_size - $ && (t.match_length = Q(t, B)), t.match_length >= L)
            if (p = n._tr_tally(t, t.strstart - t.match_start, t.match_length - L), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= L) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask, B = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            p = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (p && (E(t, !1), t.strm.avail_out === 0))
            return e;
        }
        return t.insert = t.strstart < L - 1 ? t.strstart : L - 1, z === g ? (E(t, !0), t.strm.avail_out === 0 ? tt : J) : t.last_lit && (E(t, !1), t.strm.avail_out === 0) ? e : X;
      }
      function at(t, z) {
        for (var B, p, A; ; ) {
          if (t.lookahead < $) {
            if (dt(t), t.lookahead < $ && z === b)
              return e;
            if (t.lookahead === 0)
              break;
          }
          if (B = 0, t.lookahead >= L && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask, B = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = L - 1, B !== 0 && t.prev_length < t.max_lazy_match && t.strstart - B <= t.w_size - $ && (t.match_length = Q(t, B), t.match_length <= 5 && (t.strategy === 1 || t.match_length === L && 4096 < t.strstart - t.match_start) && (t.match_length = L - 1)), t.prev_length >= L && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - L, p = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - L), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask, B = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = L - 1, t.strstart++, p && (E(t, !1), t.strm.avail_out === 0))
              return e;
          } else if (t.match_available) {
            if ((p = n._tr_tally(t, 0, t.window[t.strstart - 1])) && E(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return e;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (p = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < L - 1 ? t.strstart : L - 1, z === g ? (E(t, !0), t.strm.avail_out === 0 ? tt : J) : t.last_lit && (E(t, !1), t.strm.avail_out === 0) ? e : X;
      }
      function lt(t, z, B, p, A) {
        this.good_length = t, this.max_lazy = z, this.nice_length = B, this.max_chain = p, this.func = A;
      }
      function mt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * W), this.dyn_dtree = new s.Buf16(2 * (2 * C + 1)), this.bl_tree = new s.Buf16(2 * (2 * T + 1)), nt(this.dyn_ltree), nt(this.dyn_dtree), nt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(Y + 1), this.heap = new s.Buf16(2 * x + 1), nt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * x + 1), nt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function At(t) {
        var z;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = c, (z = t.state).pending = 0, z.pending_out = 0, z.wrap < 0 && (z.wrap = -z.wrap), z.status = z.wrap ? k : N, t.adler = z.wrap === 2 ? 0 : 1, z.last_flush = b, n._tr_init(z), o) : rt(t, f);
      }
      function ht(t) {
        var z = At(t);
        return z === o && function(B) {
          B.window_size = 2 * B.w_size, nt(B.head), B.max_lazy_match = i[B.level].max_lazy, B.good_match = i[B.level].good_length, B.nice_match = i[B.level].nice_length, B.max_chain_length = i[B.level].max_chain, B.strstart = 0, B.block_start = 0, B.lookahead = 0, B.insert = 0, B.match_length = B.prev_length = L - 1, B.match_available = 0, B.ins_h = 0;
        }(t.state), z;
      }
      function ft(t, z, B, p, A, S) {
        if (!t)
          return f;
        var F = 1;
        if (z === a && (z = 6), p < 0 ? (F = 0, p = -p) : 15 < p && (F = 2, p -= 16), A < 1 || I < A || B !== v || p < 8 || 15 < p || z < 0 || 9 < z || S < 0 || u < S)
          return rt(t, f);
        p === 8 && (p = 9);
        var U = new mt();
        return (t.state = U).strm = t, U.wrap = F, U.gzhead = null, U.w_bits = p, U.w_size = 1 << U.w_bits, U.w_mask = U.w_size - 1, U.hash_bits = A + 7, U.hash_size = 1 << U.hash_bits, U.hash_mask = U.hash_size - 1, U.hash_shift = ~~((U.hash_bits + L - 1) / L), U.window = new s.Buf8(2 * U.w_size), U.head = new s.Buf16(U.hash_size), U.prev = new s.Buf16(U.w_size), U.lit_bufsize = 1 << A + 6, U.pending_buf_size = 4 * U.lit_bufsize, U.pending_buf = new s.Buf8(U.pending_buf_size), U.d_buf = 1 * U.lit_bufsize, U.l_buf = 3 * U.lit_bufsize, U.level = z, U.strategy = S, U.method = B, ht(t);
      }
      i = [new lt(0, 0, 0, 0, function(t, z) {
        var B = 65535;
        for (B > t.pending_buf_size - 5 && (B = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (dt(t), t.lookahead === 0 && z === b)
              return e;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var p = t.block_start + B;
          if ((t.strstart === 0 || t.strstart >= p) && (t.lookahead = t.strstart - p, t.strstart = p, E(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - $ && (E(t, !1), t.strm.avail_out === 0))
            return e;
        }
        return t.insert = 0, z === g ? (E(t, !0), t.strm.avail_out === 0 ? tt : J) : (t.strstart > t.block_start && (E(t, !1), t.strm.avail_out), e);
      }), new lt(4, 4, 8, 4, yt), new lt(4, 5, 16, 8, yt), new lt(4, 6, 32, 32, yt), new lt(4, 4, 16, 16, at), new lt(8, 16, 32, 32, at), new lt(8, 16, 128, 128, at), new lt(8, 32, 128, 256, at), new lt(32, 128, 258, 1024, at), new lt(32, 258, 258, 4096, at)], d.deflateInit = function(t, z) {
        return ft(t, z, v, 15, 8, 0);
      }, d.deflateInit2 = ft, d.deflateReset = ht, d.deflateResetKeep = At, d.deflateSetHeader = function(t, z) {
        return t && t.state ? t.state.wrap !== 2 ? f : (t.state.gzhead = z, o) : f;
      }, d.deflate = function(t, z) {
        var B, p, A, S;
        if (!t || !t.state || 5 < z || z < 0)
          return t ? rt(t, f) : f;
        if (p = t.state, !t.output || !t.input && t.avail_in !== 0 || p.status === 666 && z !== g)
          return rt(t, t.avail_out === 0 ? -5 : f);
        if (p.strm = t, B = p.last_flush, p.last_flush = z, p.status === k)
          if (p.wrap === 2)
            t.adler = 0, it(p, 31), it(p, 139), it(p, 8), p.gzhead ? (it(p, (p.gzhead.text ? 1 : 0) + (p.gzhead.hcrc ? 2 : 0) + (p.gzhead.extra ? 4 : 0) + (p.gzhead.name ? 8 : 0) + (p.gzhead.comment ? 16 : 0)), it(p, 255 & p.gzhead.time), it(p, p.gzhead.time >> 8 & 255), it(p, p.gzhead.time >> 16 & 255), it(p, p.gzhead.time >> 24 & 255), it(p, p.level === 9 ? 2 : 2 <= p.strategy || p.level < 2 ? 4 : 0), it(p, 255 & p.gzhead.os), p.gzhead.extra && p.gzhead.extra.length && (it(p, 255 & p.gzhead.extra.length), it(p, p.gzhead.extra.length >> 8 & 255)), p.gzhead.hcrc && (t.adler = h(t.adler, p.pending_buf, p.pending, 0)), p.gzindex = 0, p.status = 69) : (it(p, 0), it(p, 0), it(p, 0), it(p, 0), it(p, 0), it(p, p.level === 9 ? 2 : 2 <= p.strategy || p.level < 2 ? 4 : 0), it(p, 3), p.status = N);
          else {
            var F = v + (p.w_bits - 8 << 4) << 8;
            F |= (2 <= p.strategy || p.level < 2 ? 0 : p.level < 6 ? 1 : p.level === 6 ? 2 : 3) << 6, p.strstart !== 0 && (F |= 32), F += 31 - F % 31, p.status = N, K(p, F), p.strstart !== 0 && (K(p, t.adler >>> 16), K(p, 65535 & t.adler)), t.adler = 1;
          }
        if (p.status === 69)
          if (p.gzhead.extra) {
            for (A = p.pending; p.gzindex < (65535 & p.gzhead.extra.length) && (p.pending !== p.pending_buf_size || (p.gzhead.hcrc && p.pending > A && (t.adler = h(t.adler, p.pending_buf, p.pending - A, A)), G(t), A = p.pending, p.pending !== p.pending_buf_size)); )
              it(p, 255 & p.gzhead.extra[p.gzindex]), p.gzindex++;
            p.gzhead.hcrc && p.pending > A && (t.adler = h(t.adler, p.pending_buf, p.pending - A, A)), p.gzindex === p.gzhead.extra.length && (p.gzindex = 0, p.status = 73);
          } else
            p.status = 73;
        if (p.status === 73)
          if (p.gzhead.name) {
            A = p.pending;
            do {
              if (p.pending === p.pending_buf_size && (p.gzhead.hcrc && p.pending > A && (t.adler = h(t.adler, p.pending_buf, p.pending - A, A)), G(t), A = p.pending, p.pending === p.pending_buf_size)) {
                S = 1;
                break;
              }
              S = p.gzindex < p.gzhead.name.length ? 255 & p.gzhead.name.charCodeAt(p.gzindex++) : 0, it(p, S);
            } while (S !== 0);
            p.gzhead.hcrc && p.pending > A && (t.adler = h(t.adler, p.pending_buf, p.pending - A, A)), S === 0 && (p.gzindex = 0, p.status = 91);
          } else
            p.status = 91;
        if (p.status === 91)
          if (p.gzhead.comment) {
            A = p.pending;
            do {
              if (p.pending === p.pending_buf_size && (p.gzhead.hcrc && p.pending > A && (t.adler = h(t.adler, p.pending_buf, p.pending - A, A)), G(t), A = p.pending, p.pending === p.pending_buf_size)) {
                S = 1;
                break;
              }
              S = p.gzindex < p.gzhead.comment.length ? 255 & p.gzhead.comment.charCodeAt(p.gzindex++) : 0, it(p, S);
            } while (S !== 0);
            p.gzhead.hcrc && p.pending > A && (t.adler = h(t.adler, p.pending_buf, p.pending - A, A)), S === 0 && (p.status = 103);
          } else
            p.status = 103;
        if (p.status === 103 && (p.gzhead.hcrc ? (p.pending + 2 > p.pending_buf_size && G(t), p.pending + 2 <= p.pending_buf_size && (it(p, 255 & t.adler), it(p, t.adler >> 8 & 255), t.adler = 0, p.status = N)) : p.status = N), p.pending !== 0) {
          if (G(t), t.avail_out === 0)
            return p.last_flush = -1, o;
        } else if (t.avail_in === 0 && j(z) <= j(B) && z !== g)
          return rt(t, -5);
        if (p.status === 666 && t.avail_in !== 0)
          return rt(t, -5);
        if (t.avail_in !== 0 || p.lookahead !== 0 || z !== b && p.status !== 666) {
          var U = p.strategy === 2 ? function(Z, O) {
            for (var M; ; ) {
              if (Z.lookahead === 0 && (dt(Z), Z.lookahead === 0)) {
                if (O === b)
                  return e;
                break;
              }
              if (Z.match_length = 0, M = n._tr_tally(Z, 0, Z.window[Z.strstart]), Z.lookahead--, Z.strstart++, M && (E(Z, !1), Z.strm.avail_out === 0))
                return e;
            }
            return Z.insert = 0, O === g ? (E(Z, !0), Z.strm.avail_out === 0 ? tt : J) : Z.last_lit && (E(Z, !1), Z.strm.avail_out === 0) ? e : X;
          }(p, z) : p.strategy === 3 ? function(Z, O) {
            for (var M, V, _, ot, st = Z.window; ; ) {
              if (Z.lookahead <= P) {
                if (dt(Z), Z.lookahead <= P && O === b)
                  return e;
                if (Z.lookahead === 0)
                  break;
              }
              if (Z.match_length = 0, Z.lookahead >= L && 0 < Z.strstart && (V = st[_ = Z.strstart - 1]) === st[++_] && V === st[++_] && V === st[++_]) {
                ot = Z.strstart + P;
                do
                  ;
                while (V === st[++_] && V === st[++_] && V === st[++_] && V === st[++_] && V === st[++_] && V === st[++_] && V === st[++_] && V === st[++_] && _ < ot);
                Z.match_length = P - (ot - _), Z.match_length > Z.lookahead && (Z.match_length = Z.lookahead);
              }
              if (Z.match_length >= L ? (M = n._tr_tally(Z, 1, Z.match_length - L), Z.lookahead -= Z.match_length, Z.strstart += Z.match_length, Z.match_length = 0) : (M = n._tr_tally(Z, 0, Z.window[Z.strstart]), Z.lookahead--, Z.strstart++), M && (E(Z, !1), Z.strm.avail_out === 0))
                return e;
            }
            return Z.insert = 0, O === g ? (E(Z, !0), Z.strm.avail_out === 0 ? tt : J) : Z.last_lit && (E(Z, !1), Z.strm.avail_out === 0) ? e : X;
          }(p, z) : i[p.level].func(p, z);
          if (U !== tt && U !== J || (p.status = 666), U === e || U === tt)
            return t.avail_out === 0 && (p.last_flush = -1), o;
          if (U === X && (z === 1 ? n._tr_align(p) : z !== 5 && (n._tr_stored_block(p, 0, 0, !1), z === 3 && (nt(p.head), p.lookahead === 0 && (p.strstart = 0, p.block_start = 0, p.insert = 0))), G(t), t.avail_out === 0))
            return p.last_flush = -1, o;
        }
        return z !== g ? o : p.wrap <= 0 ? 1 : (p.wrap === 2 ? (it(p, 255 & t.adler), it(p, t.adler >> 8 & 255), it(p, t.adler >> 16 & 255), it(p, t.adler >> 24 & 255), it(p, 255 & t.total_in), it(p, t.total_in >> 8 & 255), it(p, t.total_in >> 16 & 255), it(p, t.total_in >> 24 & 255)) : (K(p, t.adler >>> 16), K(p, 65535 & t.adler)), G(t), 0 < p.wrap && (p.wrap = -p.wrap), p.pending !== 0 ? o : 1);
      }, d.deflateEnd = function(t) {
        var z;
        return t && t.state ? (z = t.state.status) !== k && z !== 69 && z !== 73 && z !== 91 && z !== 103 && z !== N && z !== 666 ? rt(t, f) : (t.state = null, z === N ? rt(t, -3) : o) : f;
      }, d.deflateSetDictionary = function(t, z) {
        var B, p, A, S, F, U, Z, O, M = z.length;
        if (!t || !t.state || (S = (B = t.state).wrap) === 2 || S === 1 && B.status !== k || B.lookahead)
          return f;
        for (S === 1 && (t.adler = l(t.adler, z, M, 0)), B.wrap = 0, M >= B.w_size && (S === 0 && (nt(B.head), B.strstart = 0, B.block_start = 0, B.insert = 0), O = new s.Buf8(B.w_size), s.arraySet(O, z, M - B.w_size, B.w_size, 0), z = O, M = B.w_size), F = t.avail_in, U = t.next_in, Z = t.input, t.avail_in = M, t.next_in = 0, t.input = z, dt(B); B.lookahead >= L; ) {
          for (p = B.strstart, A = B.lookahead - (L - 1); B.ins_h = (B.ins_h << B.hash_shift ^ B.window[p + L - 1]) & B.hash_mask, B.prev[p & B.w_mask] = B.head[B.ins_h], B.head[B.ins_h] = p, p++, --A; )
            ;
          B.strstart = p, B.lookahead = L - 1, dt(B);
        }
        return B.strstart += B.lookahead, B.block_start = B.strstart, B.insert = B.lookahead, B.lookahead = 0, B.match_length = B.prev_length = L - 1, B.match_available = 0, t.next_in = U, t.input = Z, t.avail_in = F, B.wrap = S, o;
      }, d.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, w, d) {
      w.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, w, d) {
      w.exports = function(i, s) {
        var n, l, h, y, b, g, o, f, a, u, c, v, I, x, C, T, W, Y, L, P, $, k, N, e, X;
        n = i.state, l = i.next_in, e = i.input, h = l + (i.avail_in - 5), y = i.next_out, X = i.output, b = y - (s - i.avail_out), g = y + (i.avail_out - 257), o = n.dmax, f = n.wsize, a = n.whave, u = n.wnext, c = n.window, v = n.hold, I = n.bits, x = n.lencode, C = n.distcode, T = (1 << n.lenbits) - 1, W = (1 << n.distbits) - 1;
        t:
          do {
            I < 15 && (v += e[l++] << I, I += 8, v += e[l++] << I, I += 8), Y = x[v & T];
            e:
              for (; ; ) {
                if (v >>>= L = Y >>> 24, I -= L, (L = Y >>> 16 & 255) === 0)
                  X[y++] = 65535 & Y;
                else {
                  if (!(16 & L)) {
                    if (!(64 & L)) {
                      Y = x[(65535 & Y) + (v & (1 << L) - 1)];
                      continue e;
                    }
                    if (32 & L) {
                      n.mode = 12;
                      break t;
                    }
                    i.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  P = 65535 & Y, (L &= 15) && (I < L && (v += e[l++] << I, I += 8), P += v & (1 << L) - 1, v >>>= L, I -= L), I < 15 && (v += e[l++] << I, I += 8, v += e[l++] << I, I += 8), Y = C[v & W];
                  n:
                    for (; ; ) {
                      if (v >>>= L = Y >>> 24, I -= L, !(16 & (L = Y >>> 16 & 255))) {
                        if (!(64 & L)) {
                          Y = C[(65535 & Y) + (v & (1 << L) - 1)];
                          continue n;
                        }
                        i.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if ($ = 65535 & Y, I < (L &= 15) && (v += e[l++] << I, (I += 8) < L && (v += e[l++] << I, I += 8)), o < ($ += v & (1 << L) - 1)) {
                        i.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (v >>>= L, I -= L, (L = y - b) < $) {
                        if (a < (L = $ - L) && n.sane) {
                          i.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (N = c, (k = 0) === u) {
                          if (k += f - L, L < P) {
                            for (P -= L; X[y++] = c[k++], --L; )
                              ;
                            k = y - $, N = X;
                          }
                        } else if (u < L) {
                          if (k += f + u - L, (L -= u) < P) {
                            for (P -= L; X[y++] = c[k++], --L; )
                              ;
                            if (k = 0, u < P) {
                              for (P -= L = u; X[y++] = c[k++], --L; )
                                ;
                              k = y - $, N = X;
                            }
                          }
                        } else if (k += u - L, L < P) {
                          for (P -= L; X[y++] = c[k++], --L; )
                            ;
                          k = y - $, N = X;
                        }
                        for (; 2 < P; )
                          X[y++] = N[k++], X[y++] = N[k++], X[y++] = N[k++], P -= 3;
                        P && (X[y++] = N[k++], 1 < P && (X[y++] = N[k++]));
                      } else {
                        for (k = y - $; X[y++] = X[k++], X[y++] = X[k++], X[y++] = X[k++], 2 < (P -= 3); )
                          ;
                        P && (X[y++] = X[k++], 1 < P && (X[y++] = X[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (l < h && y < g);
        l -= P = I >> 3, v &= (1 << (I -= P << 3)) - 1, i.next_in = l, i.next_out = y, i.avail_in = l < h ? h - l + 5 : 5 - (l - h), i.avail_out = y < g ? g - y + 257 : 257 - (y - g), n.hold = v, n.bits = I;
      };
    }, {}], 49: [function(r, w, d) {
      var i = r("../utils/common"), s = r("./adler32"), n = r("./crc32"), l = r("./inffast"), h = r("./inftrees"), y = 1, b = 2, g = 0, o = -2, f = 1, a = 852, u = 592;
      function c(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function v() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function I(k) {
        var N;
        return k && k.state ? (N = k.state, k.total_in = k.total_out = N.total = 0, k.msg = "", N.wrap && (k.adler = 1 & N.wrap), N.mode = f, N.last = 0, N.havedict = 0, N.dmax = 32768, N.head = null, N.hold = 0, N.bits = 0, N.lencode = N.lendyn = new i.Buf32(a), N.distcode = N.distdyn = new i.Buf32(u), N.sane = 1, N.back = -1, g) : o;
      }
      function x(k) {
        var N;
        return k && k.state ? ((N = k.state).wsize = 0, N.whave = 0, N.wnext = 0, I(k)) : o;
      }
      function C(k, N) {
        var e, X;
        return k && k.state ? (X = k.state, N < 0 ? (e = 0, N = -N) : (e = 1 + (N >> 4), N < 48 && (N &= 15)), N && (N < 8 || 15 < N) ? o : (X.window !== null && X.wbits !== N && (X.window = null), X.wrap = e, X.wbits = N, x(k))) : o;
      }
      function T(k, N) {
        var e, X;
        return k ? (X = new v(), (k.state = X).window = null, (e = C(k, N)) !== g && (k.state = null), e) : o;
      }
      var W, Y, L = !0;
      function P(k) {
        if (L) {
          var N;
          for (W = new i.Buf32(512), Y = new i.Buf32(32), N = 0; N < 144; )
            k.lens[N++] = 8;
          for (; N < 256; )
            k.lens[N++] = 9;
          for (; N < 280; )
            k.lens[N++] = 7;
          for (; N < 288; )
            k.lens[N++] = 8;
          for (h(y, k.lens, 0, 288, W, 0, k.work, { bits: 9 }), N = 0; N < 32; )
            k.lens[N++] = 5;
          h(b, k.lens, 0, 32, Y, 0, k.work, { bits: 5 }), L = !1;
        }
        k.lencode = W, k.lenbits = 9, k.distcode = Y, k.distbits = 5;
      }
      function $(k, N, e, X) {
        var tt, J = k.state;
        return J.window === null && (J.wsize = 1 << J.wbits, J.wnext = 0, J.whave = 0, J.window = new i.Buf8(J.wsize)), X >= J.wsize ? (i.arraySet(J.window, N, e - J.wsize, J.wsize, 0), J.wnext = 0, J.whave = J.wsize) : (X < (tt = J.wsize - J.wnext) && (tt = X), i.arraySet(J.window, N, e - X, tt, J.wnext), (X -= tt) ? (i.arraySet(J.window, N, e - X, X, 0), J.wnext = X, J.whave = J.wsize) : (J.wnext += tt, J.wnext === J.wsize && (J.wnext = 0), J.whave < J.wsize && (J.whave += tt))), 0;
      }
      d.inflateReset = x, d.inflateReset2 = C, d.inflateResetKeep = I, d.inflateInit = function(k) {
        return T(k, 15);
      }, d.inflateInit2 = T, d.inflate = function(k, N) {
        var e, X, tt, J, rt, j, nt, G, E, it, K, Q, dt, yt, at, lt, mt, At, ht, ft, t, z, B, p, A = 0, S = new i.Buf8(4), F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return o;
        (e = k.state).mode === 12 && (e.mode = 13), rt = k.next_out, tt = k.output, nt = k.avail_out, J = k.next_in, X = k.input, j = k.avail_in, G = e.hold, E = e.bits, it = j, K = nt, z = g;
        t:
          for (; ; )
            switch (e.mode) {
              case f:
                if (e.wrap === 0) {
                  e.mode = 13;
                  break;
                }
                for (; E < 16; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                if (2 & e.wrap && G === 35615) {
                  S[e.check = 0] = 255 & G, S[1] = G >>> 8 & 255, e.check = n(e.check, S, 2, 0), E = G = 0, e.mode = 2;
                  break;
                }
                if (e.flags = 0, e.head && (e.head.done = !1), !(1 & e.wrap) || (((255 & G) << 8) + (G >> 8)) % 31) {
                  k.msg = "incorrect header check", e.mode = 30;
                  break;
                }
                if ((15 & G) != 8) {
                  k.msg = "unknown compression method", e.mode = 30;
                  break;
                }
                if (E -= 4, t = 8 + (15 & (G >>>= 4)), e.wbits === 0)
                  e.wbits = t;
                else if (t > e.wbits) {
                  k.msg = "invalid window size", e.mode = 30;
                  break;
                }
                e.dmax = 1 << t, k.adler = e.check = 1, e.mode = 512 & G ? 10 : 12, E = G = 0;
                break;
              case 2:
                for (; E < 16; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                if (e.flags = G, (255 & e.flags) != 8) {
                  k.msg = "unknown compression method", e.mode = 30;
                  break;
                }
                if (57344 & e.flags) {
                  k.msg = "unknown header flags set", e.mode = 30;
                  break;
                }
                e.head && (e.head.text = G >> 8 & 1), 512 & e.flags && (S[0] = 255 & G, S[1] = G >>> 8 & 255, e.check = n(e.check, S, 2, 0)), E = G = 0, e.mode = 3;
              case 3:
                for (; E < 32; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                e.head && (e.head.time = G), 512 & e.flags && (S[0] = 255 & G, S[1] = G >>> 8 & 255, S[2] = G >>> 16 & 255, S[3] = G >>> 24 & 255, e.check = n(e.check, S, 4, 0)), E = G = 0, e.mode = 4;
              case 4:
                for (; E < 16; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                e.head && (e.head.xflags = 255 & G, e.head.os = G >> 8), 512 & e.flags && (S[0] = 255 & G, S[1] = G >>> 8 & 255, e.check = n(e.check, S, 2, 0)), E = G = 0, e.mode = 5;
              case 5:
                if (1024 & e.flags) {
                  for (; E < 16; ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  e.length = G, e.head && (e.head.extra_len = G), 512 & e.flags && (S[0] = 255 & G, S[1] = G >>> 8 & 255, e.check = n(e.check, S, 2, 0)), E = G = 0;
                } else
                  e.head && (e.head.extra = null);
                e.mode = 6;
              case 6:
                if (1024 & e.flags && (j < (Q = e.length) && (Q = j), Q && (e.head && (t = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Array(e.head.extra_len)), i.arraySet(e.head.extra, X, J, Q, t)), 512 & e.flags && (e.check = n(e.check, X, Q, J)), j -= Q, J += Q, e.length -= Q), e.length))
                  break t;
                e.length = 0, e.mode = 7;
              case 7:
                if (2048 & e.flags) {
                  if (j === 0)
                    break t;
                  for (Q = 0; t = X[J + Q++], e.head && t && e.length < 65536 && (e.head.name += String.fromCharCode(t)), t && Q < j; )
                    ;
                  if (512 & e.flags && (e.check = n(e.check, X, Q, J)), j -= Q, J += Q, t)
                    break t;
                } else
                  e.head && (e.head.name = null);
                e.length = 0, e.mode = 8;
              case 8:
                if (4096 & e.flags) {
                  if (j === 0)
                    break t;
                  for (Q = 0; t = X[J + Q++], e.head && t && e.length < 65536 && (e.head.comment += String.fromCharCode(t)), t && Q < j; )
                    ;
                  if (512 & e.flags && (e.check = n(e.check, X, Q, J)), j -= Q, J += Q, t)
                    break t;
                } else
                  e.head && (e.head.comment = null);
                e.mode = 9;
              case 9:
                if (512 & e.flags) {
                  for (; E < 16; ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  if (G !== (65535 & e.check)) {
                    k.msg = "header crc mismatch", e.mode = 30;
                    break;
                  }
                  E = G = 0;
                }
                e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), k.adler = e.check = 0, e.mode = 12;
                break;
              case 10:
                for (; E < 32; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                k.adler = e.check = c(G), E = G = 0, e.mode = 11;
              case 11:
                if (e.havedict === 0)
                  return k.next_out = rt, k.avail_out = nt, k.next_in = J, k.avail_in = j, e.hold = G, e.bits = E, 2;
                k.adler = e.check = 1, e.mode = 12;
              case 12:
                if (N === 5 || N === 6)
                  break t;
              case 13:
                if (e.last) {
                  G >>>= 7 & E, E -= 7 & E, e.mode = 27;
                  break;
                }
                for (; E < 3; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                switch (e.last = 1 & G, E -= 1, 3 & (G >>>= 1)) {
                  case 0:
                    e.mode = 14;
                    break;
                  case 1:
                    if (P(e), e.mode = 20, N !== 6)
                      break;
                    G >>>= 2, E -= 2;
                    break t;
                  case 2:
                    e.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", e.mode = 30;
                }
                G >>>= 2, E -= 2;
                break;
              case 14:
                for (G >>>= 7 & E, E -= 7 & E; E < 32; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                if ((65535 & G) != (G >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", e.mode = 30;
                  break;
                }
                if (e.length = 65535 & G, E = G = 0, e.mode = 15, N === 6)
                  break t;
              case 15:
                e.mode = 16;
              case 16:
                if (Q = e.length) {
                  if (j < Q && (Q = j), nt < Q && (Q = nt), Q === 0)
                    break t;
                  i.arraySet(tt, X, J, Q, rt), j -= Q, J += Q, nt -= Q, rt += Q, e.length -= Q;
                  break;
                }
                e.mode = 12;
                break;
              case 17:
                for (; E < 14; ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                if (e.nlen = 257 + (31 & G), G >>>= 5, E -= 5, e.ndist = 1 + (31 & G), G >>>= 5, E -= 5, e.ncode = 4 + (15 & G), G >>>= 4, E -= 4, 286 < e.nlen || 30 < e.ndist) {
                  k.msg = "too many length or distance symbols", e.mode = 30;
                  break;
                }
                e.have = 0, e.mode = 18;
              case 18:
                for (; e.have < e.ncode; ) {
                  for (; E < 3; ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  e.lens[F[e.have++]] = 7 & G, G >>>= 3, E -= 3;
                }
                for (; e.have < 19; )
                  e.lens[F[e.have++]] = 0;
                if (e.lencode = e.lendyn, e.lenbits = 7, B = { bits: e.lenbits }, z = h(0, e.lens, 0, 19, e.lencode, 0, e.work, B), e.lenbits = B.bits, z) {
                  k.msg = "invalid code lengths set", e.mode = 30;
                  break;
                }
                e.have = 0, e.mode = 19;
              case 19:
                for (; e.have < e.nlen + e.ndist; ) {
                  for (; lt = (A = e.lencode[G & (1 << e.lenbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((at = A >>> 24) <= E); ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  if (mt < 16)
                    G >>>= at, E -= at, e.lens[e.have++] = mt;
                  else {
                    if (mt === 16) {
                      for (p = at + 2; E < p; ) {
                        if (j === 0)
                          break t;
                        j--, G += X[J++] << E, E += 8;
                      }
                      if (G >>>= at, E -= at, e.have === 0) {
                        k.msg = "invalid bit length repeat", e.mode = 30;
                        break;
                      }
                      t = e.lens[e.have - 1], Q = 3 + (3 & G), G >>>= 2, E -= 2;
                    } else if (mt === 17) {
                      for (p = at + 3; E < p; ) {
                        if (j === 0)
                          break t;
                        j--, G += X[J++] << E, E += 8;
                      }
                      E -= at, t = 0, Q = 3 + (7 & (G >>>= at)), G >>>= 3, E -= 3;
                    } else {
                      for (p = at + 7; E < p; ) {
                        if (j === 0)
                          break t;
                        j--, G += X[J++] << E, E += 8;
                      }
                      E -= at, t = 0, Q = 11 + (127 & (G >>>= at)), G >>>= 7, E -= 7;
                    }
                    if (e.have + Q > e.nlen + e.ndist) {
                      k.msg = "invalid bit length repeat", e.mode = 30;
                      break;
                    }
                    for (; Q--; )
                      e.lens[e.have++] = t;
                  }
                }
                if (e.mode === 30)
                  break;
                if (e.lens[256] === 0) {
                  k.msg = "invalid code -- missing end-of-block", e.mode = 30;
                  break;
                }
                if (e.lenbits = 9, B = { bits: e.lenbits }, z = h(y, e.lens, 0, e.nlen, e.lencode, 0, e.work, B), e.lenbits = B.bits, z) {
                  k.msg = "invalid literal/lengths set", e.mode = 30;
                  break;
                }
                if (e.distbits = 6, e.distcode = e.distdyn, B = { bits: e.distbits }, z = h(b, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, B), e.distbits = B.bits, z) {
                  k.msg = "invalid distances set", e.mode = 30;
                  break;
                }
                if (e.mode = 20, N === 6)
                  break t;
              case 20:
                e.mode = 21;
              case 21:
                if (6 <= j && 258 <= nt) {
                  k.next_out = rt, k.avail_out = nt, k.next_in = J, k.avail_in = j, e.hold = G, e.bits = E, l(k, K), rt = k.next_out, tt = k.output, nt = k.avail_out, J = k.next_in, X = k.input, j = k.avail_in, G = e.hold, E = e.bits, e.mode === 12 && (e.back = -1);
                  break;
                }
                for (e.back = 0; lt = (A = e.lencode[G & (1 << e.lenbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((at = A >>> 24) <= E); ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                if (lt && !(240 & lt)) {
                  for (At = at, ht = lt, ft = mt; lt = (A = e.lencode[ft + ((G & (1 << At + ht) - 1) >> At)]) >>> 16 & 255, mt = 65535 & A, !(At + (at = A >>> 24) <= E); ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  G >>>= At, E -= At, e.back += At;
                }
                if (G >>>= at, E -= at, e.back += at, e.length = mt, lt === 0) {
                  e.mode = 26;
                  break;
                }
                if (32 & lt) {
                  e.back = -1, e.mode = 12;
                  break;
                }
                if (64 & lt) {
                  k.msg = "invalid literal/length code", e.mode = 30;
                  break;
                }
                e.extra = 15 & lt, e.mode = 22;
              case 22:
                if (e.extra) {
                  for (p = e.extra; E < p; ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  e.length += G & (1 << e.extra) - 1, G >>>= e.extra, E -= e.extra, e.back += e.extra;
                }
                e.was = e.length, e.mode = 23;
              case 23:
                for (; lt = (A = e.distcode[G & (1 << e.distbits) - 1]) >>> 16 & 255, mt = 65535 & A, !((at = A >>> 24) <= E); ) {
                  if (j === 0)
                    break t;
                  j--, G += X[J++] << E, E += 8;
                }
                if (!(240 & lt)) {
                  for (At = at, ht = lt, ft = mt; lt = (A = e.distcode[ft + ((G & (1 << At + ht) - 1) >> At)]) >>> 16 & 255, mt = 65535 & A, !(At + (at = A >>> 24) <= E); ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  G >>>= At, E -= At, e.back += At;
                }
                if (G >>>= at, E -= at, e.back += at, 64 & lt) {
                  k.msg = "invalid distance code", e.mode = 30;
                  break;
                }
                e.offset = mt, e.extra = 15 & lt, e.mode = 24;
              case 24:
                if (e.extra) {
                  for (p = e.extra; E < p; ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  e.offset += G & (1 << e.extra) - 1, G >>>= e.extra, E -= e.extra, e.back += e.extra;
                }
                if (e.offset > e.dmax) {
                  k.msg = "invalid distance too far back", e.mode = 30;
                  break;
                }
                e.mode = 25;
              case 25:
                if (nt === 0)
                  break t;
                if (Q = K - nt, e.offset > Q) {
                  if ((Q = e.offset - Q) > e.whave && e.sane) {
                    k.msg = "invalid distance too far back", e.mode = 30;
                    break;
                  }
                  dt = Q > e.wnext ? (Q -= e.wnext, e.wsize - Q) : e.wnext - Q, Q > e.length && (Q = e.length), yt = e.window;
                } else
                  yt = tt, dt = rt - e.offset, Q = e.length;
                for (nt < Q && (Q = nt), nt -= Q, e.length -= Q; tt[rt++] = yt[dt++], --Q; )
                  ;
                e.length === 0 && (e.mode = 21);
                break;
              case 26:
                if (nt === 0)
                  break t;
                tt[rt++] = e.length, nt--, e.mode = 21;
                break;
              case 27:
                if (e.wrap) {
                  for (; E < 32; ) {
                    if (j === 0)
                      break t;
                    j--, G |= X[J++] << E, E += 8;
                  }
                  if (K -= nt, k.total_out += K, e.total += K, K && (k.adler = e.check = e.flags ? n(e.check, tt, K, rt - K) : s(e.check, tt, K, rt - K)), K = nt, (e.flags ? G : c(G)) !== e.check) {
                    k.msg = "incorrect data check", e.mode = 30;
                    break;
                  }
                  E = G = 0;
                }
                e.mode = 28;
              case 28:
                if (e.wrap && e.flags) {
                  for (; E < 32; ) {
                    if (j === 0)
                      break t;
                    j--, G += X[J++] << E, E += 8;
                  }
                  if (G !== (4294967295 & e.total)) {
                    k.msg = "incorrect length check", e.mode = 30;
                    break;
                  }
                  E = G = 0;
                }
                e.mode = 29;
              case 29:
                z = 1;
                break t;
              case 30:
                z = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return o;
            }
        return k.next_out = rt, k.avail_out = nt, k.next_in = J, k.avail_in = j, e.hold = G, e.bits = E, (e.wsize || K !== k.avail_out && e.mode < 30 && (e.mode < 27 || N !== 4)) && $(k, k.output, k.next_out, K - k.avail_out) ? (e.mode = 31, -4) : (it -= k.avail_in, K -= k.avail_out, k.total_in += it, k.total_out += K, e.total += K, e.wrap && K && (k.adler = e.check = e.flags ? n(e.check, tt, K, k.next_out - K) : s(e.check, tt, K, k.next_out - K)), k.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === 12 ? 128 : 0) + (e.mode === 20 || e.mode === 15 ? 256 : 0), (it == 0 && K === 0 || N === 4) && z === g && (z = -5), z);
      }, d.inflateEnd = function(k) {
        if (!k || !k.state)
          return o;
        var N = k.state;
        return N.window && (N.window = null), k.state = null, g;
      }, d.inflateGetHeader = function(k, N) {
        var e;
        return k && k.state && 2 & (e = k.state).wrap ? ((e.head = N).done = !1, g) : o;
      }, d.inflateSetDictionary = function(k, N) {
        var e, X = N.length;
        return k && k.state ? (e = k.state).wrap !== 0 && e.mode !== 11 ? o : e.mode === 11 && s(1, N, X, 0) !== e.check ? -3 : $(k, N, X, X) ? (e.mode = 31, -4) : (e.havedict = 1, g) : o;
      }, d.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, w, d) {
      var i = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], h = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      w.exports = function(y, b, g, o, f, a, u, c) {
        var v, I, x, C, T, W, Y, L, P, $ = c.bits, k = 0, N = 0, e = 0, X = 0, tt = 0, J = 0, rt = 0, j = 0, nt = 0, G = 0, E = null, it = 0, K = new i.Buf16(16), Q = new i.Buf16(16), dt = null, yt = 0;
        for (k = 0; k <= 15; k++)
          K[k] = 0;
        for (N = 0; N < o; N++)
          K[b[g + N]]++;
        for (tt = $, X = 15; 1 <= X && K[X] === 0; X--)
          ;
        if (X < tt && (tt = X), X === 0)
          return f[a++] = 20971520, f[a++] = 20971520, c.bits = 1, 0;
        for (e = 1; e < X && K[e] === 0; e++)
          ;
        for (tt < e && (tt = e), k = j = 1; k <= 15; k++)
          if (j <<= 1, (j -= K[k]) < 0)
            return -1;
        if (0 < j && (y === 0 || X !== 1))
          return -1;
        for (Q[1] = 0, k = 1; k < 15; k++)
          Q[k + 1] = Q[k] + K[k];
        for (N = 0; N < o; N++)
          b[g + N] !== 0 && (u[Q[b[g + N]]++] = N);
        if (W = y === 0 ? (E = dt = u, 19) : y === 1 ? (E = s, it -= 257, dt = n, yt -= 257, 256) : (E = l, dt = h, -1), k = e, T = a, rt = N = G = 0, x = -1, C = (nt = 1 << (J = tt)) - 1, y === 1 && 852 < nt || y === 2 && 592 < nt)
          return 1;
        for (; ; ) {
          for (Y = k - rt, P = u[N] < W ? (L = 0, u[N]) : u[N] > W ? (L = dt[yt + u[N]], E[it + u[N]]) : (L = 96, 0), v = 1 << k - rt, e = I = 1 << J; f[T + (G >> rt) + (I -= v)] = Y << 24 | L << 16 | P | 0, I !== 0; )
            ;
          for (v = 1 << k - 1; G & v; )
            v >>= 1;
          if (v !== 0 ? (G &= v - 1, G += v) : G = 0, N++, --K[k] == 0) {
            if (k === X)
              break;
            k = b[g + u[N]];
          }
          if (tt < k && (G & C) !== x) {
            for (rt === 0 && (rt = tt), T += e, j = 1 << (J = k - rt); J + rt < X && !((j -= K[J + rt]) <= 0); )
              J++, j <<= 1;
            if (nt += 1 << J, y === 1 && 852 < nt || y === 2 && 592 < nt)
              return 1;
            f[x = G & C] = tt << 24 | J << 16 | T - a | 0;
          }
        }
        return G !== 0 && (f[T + G] = k - rt << 24 | 64 << 16 | 0), c.bits = tt, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, w, d) {
      w.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, w, d) {
      var i = r("../utils/common"), s = 0, n = 1;
      function l(A) {
        for (var S = A.length; 0 <= --S; )
          A[S] = 0;
      }
      var h = 0, y = 29, b = 256, g = b + 1 + y, o = 30, f = 19, a = 2 * g + 1, u = 15, c = 16, v = 7, I = 256, x = 16, C = 17, T = 18, W = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Y = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], L = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], $ = new Array(2 * (g + 2));
      l($);
      var k = new Array(2 * o);
      l(k);
      var N = new Array(512);
      l(N);
      var e = new Array(256);
      l(e);
      var X = new Array(y);
      l(X);
      var tt, J, rt, j = new Array(o);
      function nt(A, S, F, U, Z) {
        this.static_tree = A, this.extra_bits = S, this.extra_base = F, this.elems = U, this.max_length = Z, this.has_stree = A && A.length;
      }
      function G(A, S) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = S;
      }
      function E(A) {
        return A < 256 ? N[A] : N[256 + (A >>> 7)];
      }
      function it(A, S) {
        A.pending_buf[A.pending++] = 255 & S, A.pending_buf[A.pending++] = S >>> 8 & 255;
      }
      function K(A, S, F) {
        A.bi_valid > c - F ? (A.bi_buf |= S << A.bi_valid & 65535, it(A, A.bi_buf), A.bi_buf = S >> c - A.bi_valid, A.bi_valid += F - c) : (A.bi_buf |= S << A.bi_valid & 65535, A.bi_valid += F);
      }
      function Q(A, S, F) {
        K(A, F[2 * S], F[2 * S + 1]);
      }
      function dt(A, S) {
        for (var F = 0; F |= 1 & A, A >>>= 1, F <<= 1, 0 < --S; )
          ;
        return F >>> 1;
      }
      function yt(A, S, F) {
        var U, Z, O = new Array(u + 1), M = 0;
        for (U = 1; U <= u; U++)
          O[U] = M = M + F[U - 1] << 1;
        for (Z = 0; Z <= S; Z++) {
          var V = A[2 * Z + 1];
          V !== 0 && (A[2 * Z] = dt(O[V]++, V));
        }
      }
      function at(A) {
        var S;
        for (S = 0; S < g; S++)
          A.dyn_ltree[2 * S] = 0;
        for (S = 0; S < o; S++)
          A.dyn_dtree[2 * S] = 0;
        for (S = 0; S < f; S++)
          A.bl_tree[2 * S] = 0;
        A.dyn_ltree[2 * I] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function lt(A) {
        8 < A.bi_valid ? it(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function mt(A, S, F, U) {
        var Z = 2 * S, O = 2 * F;
        return A[Z] < A[O] || A[Z] === A[O] && U[S] <= U[F];
      }
      function At(A, S, F) {
        for (var U = A.heap[F], Z = F << 1; Z <= A.heap_len && (Z < A.heap_len && mt(S, A.heap[Z + 1], A.heap[Z], A.depth) && Z++, !mt(S, U, A.heap[Z], A.depth)); )
          A.heap[F] = A.heap[Z], F = Z, Z <<= 1;
        A.heap[F] = U;
      }
      function ht(A, S, F) {
        var U, Z, O, M, V = 0;
        if (A.last_lit !== 0)
          for (; U = A.pending_buf[A.d_buf + 2 * V] << 8 | A.pending_buf[A.d_buf + 2 * V + 1], Z = A.pending_buf[A.l_buf + V], V++, U === 0 ? Q(A, Z, S) : (Q(A, (O = e[Z]) + b + 1, S), (M = W[O]) !== 0 && K(A, Z -= X[O], M), Q(A, O = E(--U), F), (M = Y[O]) !== 0 && K(A, U -= j[O], M)), V < A.last_lit; )
            ;
        Q(A, I, S);
      }
      function ft(A, S) {
        var F, U, Z, O = S.dyn_tree, M = S.stat_desc.static_tree, V = S.stat_desc.has_stree, _ = S.stat_desc.elems, ot = -1;
        for (A.heap_len = 0, A.heap_max = a, F = 0; F < _; F++)
          O[2 * F] !== 0 ? (A.heap[++A.heap_len] = ot = F, A.depth[F] = 0) : O[2 * F + 1] = 0;
        for (; A.heap_len < 2; )
          O[2 * (Z = A.heap[++A.heap_len] = ot < 2 ? ++ot : 0)] = 1, A.depth[Z] = 0, A.opt_len--, V && (A.static_len -= M[2 * Z + 1]);
        for (S.max_code = ot, F = A.heap_len >> 1; 1 <= F; F--)
          At(A, O, F);
        for (Z = _; F = A.heap[1], A.heap[1] = A.heap[A.heap_len--], At(A, O, 1), U = A.heap[1], A.heap[--A.heap_max] = F, A.heap[--A.heap_max] = U, O[2 * Z] = O[2 * F] + O[2 * U], A.depth[Z] = (A.depth[F] >= A.depth[U] ? A.depth[F] : A.depth[U]) + 1, O[2 * F + 1] = O[2 * U + 1] = Z, A.heap[1] = Z++, At(A, O, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(st, q) {
          var pt, vt, wt, ut, Lt, Ut, xt = q.dyn_tree, Vt = q.max_code, pe = q.stat_desc.static_tree, me = q.stat_desc.has_stree, be = q.stat_desc.extra_bits, Yt = q.stat_desc.extra_base, Et = q.stat_desc.max_length, Wt = 0;
          for (ut = 0; ut <= u; ut++)
            st.bl_count[ut] = 0;
          for (xt[2 * st.heap[st.heap_max] + 1] = 0, pt = st.heap_max + 1; pt < a; pt++)
            Et < (ut = xt[2 * xt[2 * (vt = st.heap[pt]) + 1] + 1] + 1) && (ut = Et, Wt++), xt[2 * vt + 1] = ut, Vt < vt || (st.bl_count[ut]++, Lt = 0, Yt <= vt && (Lt = be[vt - Yt]), Ut = xt[2 * vt], st.opt_len += Ut * (ut + Lt), me && (st.static_len += Ut * (pe[2 * vt + 1] + Lt)));
          if (Wt !== 0) {
            do {
              for (ut = Et - 1; st.bl_count[ut] === 0; )
                ut--;
              st.bl_count[ut]--, st.bl_count[ut + 1] += 2, st.bl_count[Et]--, Wt -= 2;
            } while (0 < Wt);
            for (ut = Et; ut !== 0; ut--)
              for (vt = st.bl_count[ut]; vt !== 0; )
                Vt < (wt = st.heap[--pt]) || (xt[2 * wt + 1] !== ut && (st.opt_len += (ut - xt[2 * wt + 1]) * xt[2 * wt], xt[2 * wt + 1] = ut), vt--);
          }
        }(A, S), yt(O, ot, A.bl_count);
      }
      function t(A, S, F) {
        var U, Z, O = -1, M = S[1], V = 0, _ = 7, ot = 4;
        for (M === 0 && (_ = 138, ot = 3), S[2 * (F + 1) + 1] = 65535, U = 0; U <= F; U++)
          Z = M, M = S[2 * (U + 1) + 1], ++V < _ && Z === M || (V < ot ? A.bl_tree[2 * Z] += V : Z !== 0 ? (Z !== O && A.bl_tree[2 * Z]++, A.bl_tree[2 * x]++) : V <= 10 ? A.bl_tree[2 * C]++ : A.bl_tree[2 * T]++, O = Z, ot = (V = 0) === M ? (_ = 138, 3) : Z === M ? (_ = 6, 3) : (_ = 7, 4));
      }
      function z(A, S, F) {
        var U, Z, O = -1, M = S[1], V = 0, _ = 7, ot = 4;
        for (M === 0 && (_ = 138, ot = 3), U = 0; U <= F; U++)
          if (Z = M, M = S[2 * (U + 1) + 1], !(++V < _ && Z === M)) {
            if (V < ot)
              for (; Q(A, Z, A.bl_tree), --V != 0; )
                ;
            else
              Z !== 0 ? (Z !== O && (Q(A, Z, A.bl_tree), V--), Q(A, x, A.bl_tree), K(A, V - 3, 2)) : V <= 10 ? (Q(A, C, A.bl_tree), K(A, V - 3, 3)) : (Q(A, T, A.bl_tree), K(A, V - 11, 7));
            O = Z, ot = (V = 0) === M ? (_ = 138, 3) : Z === M ? (_ = 6, 3) : (_ = 7, 4);
          }
      }
      l(j);
      var B = !1;
      function p(A, S, F, U) {
        K(A, (h << 1) + (U ? 1 : 0), 3), function(Z, O, M, V) {
          lt(Z), V && (it(Z, M), it(Z, ~M)), i.arraySet(Z.pending_buf, Z.window, O, M, Z.pending), Z.pending += M;
        }(A, S, F, !0);
      }
      d._tr_init = function(A) {
        B || (function() {
          var S, F, U, Z, O, M = new Array(u + 1);
          for (Z = U = 0; Z < y - 1; Z++)
            for (X[Z] = U, S = 0; S < 1 << W[Z]; S++)
              e[U++] = Z;
          for (e[U - 1] = Z, Z = O = 0; Z < 16; Z++)
            for (j[Z] = O, S = 0; S < 1 << Y[Z]; S++)
              N[O++] = Z;
          for (O >>= 7; Z < o; Z++)
            for (j[Z] = O << 7, S = 0; S < 1 << Y[Z] - 7; S++)
              N[256 + O++] = Z;
          for (F = 0; F <= u; F++)
            M[F] = 0;
          for (S = 0; S <= 143; )
            $[2 * S + 1] = 8, S++, M[8]++;
          for (; S <= 255; )
            $[2 * S + 1] = 9, S++, M[9]++;
          for (; S <= 279; )
            $[2 * S + 1] = 7, S++, M[7]++;
          for (; S <= 287; )
            $[2 * S + 1] = 8, S++, M[8]++;
          for (yt($, g + 1, M), S = 0; S < o; S++)
            k[2 * S + 1] = 5, k[2 * S] = dt(S, 5);
          tt = new nt($, W, b + 1, g, u), J = new nt(k, Y, 0, o, u), rt = new nt(new Array(0), L, 0, f, v);
        }(), B = !0), A.l_desc = new G(A.dyn_ltree, tt), A.d_desc = new G(A.dyn_dtree, J), A.bl_desc = new G(A.bl_tree, rt), A.bi_buf = 0, A.bi_valid = 0, at(A);
      }, d._tr_stored_block = p, d._tr_flush_block = function(A, S, F, U) {
        var Z, O, M = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(V) {
          var _, ot = 4093624447;
          for (_ = 0; _ <= 31; _++, ot >>>= 1)
            if (1 & ot && V.dyn_ltree[2 * _] !== 0)
              return s;
          if (V.dyn_ltree[18] !== 0 || V.dyn_ltree[20] !== 0 || V.dyn_ltree[26] !== 0)
            return n;
          for (_ = 32; _ < b; _++)
            if (V.dyn_ltree[2 * _] !== 0)
              return n;
          return s;
        }(A)), ft(A, A.l_desc), ft(A, A.d_desc), M = function(V) {
          var _;
          for (t(V, V.dyn_ltree, V.l_desc.max_code), t(V, V.dyn_dtree, V.d_desc.max_code), ft(V, V.bl_desc), _ = f - 1; 3 <= _ && V.bl_tree[2 * P[_] + 1] === 0; _--)
            ;
          return V.opt_len += 3 * (_ + 1) + 5 + 5 + 4, _;
        }(A), Z = A.opt_len + 3 + 7 >>> 3, (O = A.static_len + 3 + 7 >>> 3) <= Z && (Z = O)) : Z = O = F + 5, F + 4 <= Z && S !== -1 ? p(A, S, F, U) : A.strategy === 4 || O === Z ? (K(A, 2 + (U ? 1 : 0), 3), ht(A, $, k)) : (K(A, 4 + (U ? 1 : 0), 3), function(V, _, ot, st) {
          var q;
          for (K(V, _ - 257, 5), K(V, ot - 1, 5), K(V, st - 4, 4), q = 0; q < st; q++)
            K(V, V.bl_tree[2 * P[q] + 1], 3);
          z(V, V.dyn_ltree, _ - 1), z(V, V.dyn_dtree, ot - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, M + 1), ht(A, A.dyn_ltree, A.dyn_dtree)), at(A), U && lt(A);
      }, d._tr_tally = function(A, S, F) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = S >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & S, A.pending_buf[A.l_buf + A.last_lit] = 255 & F, A.last_lit++, S === 0 ? A.dyn_ltree[2 * F]++ : (A.matches++, S--, A.dyn_ltree[2 * (e[F] + b + 1)]++, A.dyn_dtree[2 * E(S)]++), A.last_lit === A.lit_bufsize - 1;
      }, d._tr_align = function(A) {
        K(A, 2, 3), Q(A, I, $), function(S) {
          S.bi_valid === 16 ? (it(S, S.bi_buf), S.bi_buf = 0, S.bi_valid = 0) : 8 <= S.bi_valid && (S.pending_buf[S.pending++] = 255 & S.bi_buf, S.bi_buf >>= 8, S.bi_valid -= 8);
        }(A);
      };
    }, { "../utils/common": 41 }], 53: [function(r, w, d) {
      w.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, w, d) {
      (function(i) {
        (function(s, n) {
          if (!s.setImmediate) {
            var l, h, y, b, g = 1, o = {}, f = !1, a = s.document, u = Object.getPrototypeOf && Object.getPrototypeOf(s);
            u = u && u.setTimeout ? u : s, l = {}.toString.call(s.process) === "[object process]" ? function(x) {
              process.nextTick(function() {
                v(x);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var x = !0, C = s.onmessage;
                return s.onmessage = function() {
                  x = !1;
                }, s.postMessage("", "*"), s.onmessage = C, x;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", I, !1) : s.attachEvent("onmessage", I), function(x) {
              s.postMessage(b + x, "*");
            }) : s.MessageChannel ? ((y = new MessageChannel()).port1.onmessage = function(x) {
              v(x.data);
            }, function(x) {
              y.port2.postMessage(x);
            }) : a && "onreadystatechange" in a.createElement("script") ? (h = a.documentElement, function(x) {
              var C = a.createElement("script");
              C.onreadystatechange = function() {
                v(x), C.onreadystatechange = null, h.removeChild(C), C = null;
              }, h.appendChild(C);
            }) : function(x) {
              setTimeout(v, 0, x);
            }, u.setImmediate = function(x) {
              typeof x != "function" && (x = new Function("" + x));
              for (var C = new Array(arguments.length - 1), T = 0; T < C.length; T++)
                C[T] = arguments[T + 1];
              var W = { callback: x, args: C };
              return o[g] = W, l(g), g++;
            }, u.clearImmediate = c;
          }
          function c(x) {
            delete o[x];
          }
          function v(x) {
            if (f)
              setTimeout(v, 0, x);
            else {
              var C = o[x];
              if (C) {
                f = !0;
                try {
                  (function(T) {
                    var W = T.callback, Y = T.args;
                    switch (Y.length) {
                      case 0:
                        W();
                        break;
                      case 1:
                        W(Y[0]);
                        break;
                      case 2:
                        W(Y[0], Y[1]);
                        break;
                      case 3:
                        W(Y[0], Y[1], Y[2]);
                        break;
                      default:
                        W.apply(n, Y);
                    }
                  })(C);
                } finally {
                  c(x), f = !1;
                }
              }
            }
          }
          function I(x) {
            x.source === s && typeof x.data == "string" && x.data.indexOf(b) === 0 && v(+x.data.slice(b.length));
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, typeof Zt < "u" ? Zt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(oe);
const We = oe.exports;
var le = { exports: {} };
(function(R, m) {
  (function(r, w) {
    w();
  })(Zt, function() {
    function r(h, y) {
      return typeof y > "u" ? y = { autoBom: !1 } : typeof y != "object" && (console.warn("Deprecated: Expected third argument to be a object"), y = { autoBom: !y }), y.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type) ? new Blob(["\uFEFF", h], { type: h.type }) : h;
    }
    function w(h, y, b) {
      var g = new XMLHttpRequest();
      g.open("GET", h), g.responseType = "blob", g.onload = function() {
        l(g.response, y, b);
      }, g.onerror = function() {
        console.error("could not download file");
      }, g.send();
    }
    function d(h) {
      var y = new XMLHttpRequest();
      y.open("HEAD", h, !1);
      try {
        y.send();
      } catch {
      }
      return 200 <= y.status && 299 >= y.status;
    }
    function i(h) {
      try {
        h.dispatchEvent(new MouseEvent("click"));
      } catch {
        var y = document.createEvent("MouseEvents");
        y.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), h.dispatchEvent(y);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Zt == "object" && Zt.global === Zt ? Zt : void 0, n = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(h, y, b) {
      var g = s.URL || s.webkitURL, o = document.createElement("a");
      y = y || h.name || "download", o.download = y, o.rel = "noopener", typeof h == "string" ? (o.href = h, o.origin === location.origin ? i(o) : d(o.href) ? w(h, y, b) : i(o, o.target = "_blank")) : (o.href = g.createObjectURL(h), setTimeout(function() {
        g.revokeObjectURL(o.href);
      }, 4e4), setTimeout(function() {
        i(o);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(h, y, b) {
      if (y = y || h.name || "download", typeof h != "string")
        navigator.msSaveOrOpenBlob(r(h, b), y);
      else if (d(h))
        w(h, y, b);
      else {
        var g = document.createElement("a");
        g.href = h, g.target = "_blank", setTimeout(function() {
          i(g);
        });
      }
    } : function(h, y, b, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), typeof h == "string")
        return w(h, y, b);
      var o = h.type === "application/octet-stream", f = /constructor/i.test(s.HTMLElement) || s.safari, a = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((a || o && f || n) && typeof FileReader < "u") {
        var u = new FileReader();
        u.onloadend = function() {
          var I = u.result;
          I = a ? I : I.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = I : location = I, g = null;
        }, u.readAsDataURL(h);
      } else {
        var c = s.URL || s.webkitURL, v = c.createObjectURL(h);
        g ? g.location = v : location.href = v, g = null, setTimeout(function() {
          c.revokeObjectURL(v);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, R.exports = l;
  });
})(le);
const Ne = le.exports;
function ce(R) {
  for (var m = window.atob(R), r = m.length, w = new Uint8Array(r), d = 0; d < r; d++)
    w[d] = m.charCodeAt(d);
  return w.buffer;
}
const Fe = `#!/bin/sh

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
APP_HOME=$( cd "\${APP_HOME:-./}" && pwd -P ) || exit

# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

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
    which java >/dev/null 2>&1 || die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC3045 
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC3045 
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

# Collect all arguments for the java command;
#   * $DEFAULT_JVM_OPTS, $JAVA_OPTS, and $GRADLE_OPTS can contain fragments of
#     shell script including quotes and variable substitutions, so put them in
#     double quotes to make sure that they get re-expanded; and
#   * put everything else in single quotes, so that it's not re-expanded.

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
`, Xe = `@rem\r
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
`, ze = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-7.6-bin.zip
networkTimeout=10000
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Ue = "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RhUAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lQ29udmVydGVyLmNsYXNzUEsBAhQDCgAACAgAAABBAFNmCtUCBgAAZw4AACYAAAAAAAAAAAAAAKSBphYAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lT3B0aW9uLmNsYXNzUEsBAhQDCgAACAgAAABBAPztiq+lAAAA5QAAACgAAAAAAAAAAAAAAKSB7BwAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJDEuY2xhc3NQSwECFAMKAAAICAAAAEEA6Phpv0sDAAC/CQAAOwAAAAAAAAAAAAAApIHXHQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQWZ0ZXJGaXJzdFN1YkNvbW1hbmQuY2xhc3NQSwECFAMKAAAICAAAAEEAuHVgn6ICAAAmBwAAMwAAAAAAAAAAAAAApIF7IQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQWZ0ZXJPcHRpb25zLmNsYXNzUEsBAhQDCgAACAgAAABBAAcrvyT9AwAAdQsAADwAAAAAAAAAAAAAAKSBbiQAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEJlZm9yZUZpcnN0U3ViQ29tbWFuZC5jbGFzc1BLAQIUAwoAAAgIAAAAQQDwbfASSwIAAO8EAABGAAAAAAAAAAAAAACkgcUoAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRDYXNlSW5zZW5zaXRpdmVTdHJpbmdDb21wYXJhdG9yLmNsYXNzUEsBAhQDCgAACAgAAABBAFujexfTBgAAJhEAAD0AAAAAAAAAAAAAAKSBdCsAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEtub3duT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NQSwECFAMKAAAICAAAAEEAqz0B4qQCAAD0BgAAPAAAAAAAAAAAAAAApIGiMgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkTWlzc2luZ09wdGlvbkFyZ1N0YXRlLmNsYXNzUEsBAhQDCgAACAgAAABBAIdeAmGqAgAAxAYAAD0AAAAAAAAAAAAAAKSBoDUAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvbkF3YXJlUGFyc2VyU3RhdGUuY2xhc3NQSwECFAMKAAAICAAAAEEADLKTXrsCAACqBgAANwAAAAAAAAAAAAAApIGlOAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uQ29tcGFyYXRvci5jbGFzc1BLAQIUAwoAAAgIAAAAQQCZLL/jpwEAAKMDAAA4AAAAAAAAAAAAAACkgbU7AABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1BLAQIUAwoAAAgIAAAAQQA5LCfsqQIAALYFAAAzAAAAAAAAAAAAAACkgbI9AABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NQSwECFAMKAAAICAAAAEEAhP9RcZUCAAB4BQAAPQAAAAAAAAAAAAAApIGsQAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uU3RyaW5nQ29tcGFyYXRvci5jbGFzc1BLAQIUAwoAAAgIAAAAQQCsDMYcBQIAALgEAAAyAAAAAAAAAAAAAACkgZxDAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRQYXJzZXJTdGF0ZS5jbGFzc1BLAQIUAwoAAAgIAAAAQQDblf+B3QIAAGsHAAA/AAAAAAAAAAAAAACkgfFFAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRVbmtub3duT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NQSwECFAMKAAAICAAAAEEAovq+7l8SAADpKQAAJgAAAAAAAAAAAAAApIErSQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIuY2xhc3NQSwECFAMKAAAICAAAAEEAGovlPskHAAAAEgAAJgAAAAAAAAAAAAAApIHOWwAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmUuY2xhc3NQSwECFAMKAAAICAAAAEEAed8FdNoCAABFBQAALAAAAAAAAAAAAAAApIHbYwAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmVPcHRpb24uY2xhc3NQSwECFAMKAAAICAAAAEEAXHbGQnwBAAALAwAAOgAAAAAAAAAAAAAApIH/ZgAAb3JnL2dyYWRsZS9jbGkvUHJvamVjdFByb3BlcnRpZXNDb21tYW5kTGluZUNvbnZlcnRlci5jbGFzc1BLAQIUAwoAAAgIAAAAQQAKzzg9fAEAAPwCAAA5AAAAAAAAAAAAAACkgdNoAABvcmcvZ3JhZGxlL2NsaS9TeXN0ZW1Qcm9wZXJ0aWVzQ29tbWFuZExpbmVDb252ZXJ0ZXIuY2xhc3NQSwECFAMKAAAICAAAAEEAAAAAAAIAAAAAAAAAEAAAAAAAAAAAABAA7UGmagAAb3JnL2dyYWRsZS91dGlsL1BLAQIUAwoAAAgIAAAAQQAAAAAAAgAAAAAAAAAZAAAAAAAAAAAAEADtQdZqAABvcmcvZ3JhZGxlL3V0aWwvaW50ZXJuYWwvUEsBAhQDCgAACAgAAABBALy7FWh+AwAAGAYAACYAAAAAAAAAAAAAAKSBD2sAAG9yZy9ncmFkbGUvdXRpbC9pbnRlcm5hbC9aaXBTbGlwLmNsYXNzUEsBAhQDCgAACAgAAABBAJUl06a5AQAAGQMAAC8AAAAAAAAAAAAAAKSB0W4AAG9yZy9ncmFkbGUvd3JhcHBlci9Cb290c3RyYXBNYWluU3RhcnRlciQxLmNsYXNzUEsBAhQDCgAACAgAAABBAGkBLKsfBQAAJAoAAC0AAAAAAAAAAAAAAKSB13AAAG9yZy9ncmFkbGUvd3JhcHBlci9Cb290c3RyYXBNYWluU3RhcnRlci5jbGFzc1BLAQIUAwoAAAgIAAAAQQBoUf59ogAAANIAAAAjAAAAAAAAAAAAAACkgUF2AABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkMS5jbGFzc1BLAQIUAwoAAAgIAAAAQQAgyxSVMgQAANgHAABBAAAAAAAAAAAAAACkgSR3AABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkRGVmYXVsdERvd25sb2FkUHJvZ3Jlc3NMaXN0ZW5lci5jbGFzc1BLAQIUAwoAAAgIAAAAQQBGalHIogMAAH4HAAA0AAAAAAAAAAAAAACkgbV7AABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkUHJveHlBdXRoZW50aWNhdG9yLmNsYXNzUEsBAhQDCgAACAgAAABBAIewVPrdEgAAgCkAACEAAAAAAAAAAAAAAKSBqX8AAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZC5jbGFzc1BLAQIUAwoAAAgIAAAAQQB5gUyioQAAAMoAAAAxAAAAAAAAAAAAAACkgcWSAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWRQcm9ncmVzc0xpc3RlbmVyLmNsYXNzUEsBAhQDCgAACAgAAABBACE5fAi2BgAAhAwAADMAAAAAAAAAAAAAAKSBtZMAAG9yZy9ncmFkbGUvd3JhcHBlci9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1BLAQIUAwoAAAgIAAAAQQCQ7IQseQIAAIYEAAAtAAAAAAAAAAAAAACkgbyaAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlVXNlckhvbWVMb29rdXAuY2xhc3NQSwECFAMKAAAICAAAAEEA+uIY5qoAAADbAAAAIgAAAAAAAAAAAAAApIGAnQAAb3JnL2dyYWRsZS93cmFwcGVyL0lEb3dubG9hZC5jbGFzc1BLAQIUAwoAAAgIAAAAQQAtBqxeXQgAAJISAAAiAAAAAAAAAAAAAACkgWqeAABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbCQxLmNsYXNzUEsBAhQDCgAACAgAAABBAIEZP/R7AgAAGQYAAC0AAAAAAAAAAAAAAKSBB6cAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJEluc3RhbGxDaGVjay5jbGFzc1BLAQIUAwoAAAgIAAAAQQBnS2Xf2BQAAH8tAAAgAAAAAAAAAAAAAACkgc2pAABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbC5jbGFzc1BLAQIUAwoAAAgIAAAAQQDwvzr2bwIAADQFAAAfAAAAAAAAAAAAAACkgeO+AABvcmcvZ3JhZGxlL3dyYXBwZXIvTG9nZ2VyLmNsYXNzUEsBAhQDCgAACAgAAABBAOkSYJiOAQAA7wIAADgAAAAAAAAAAAAAAKSBj8EAAG9yZy9ncmFkbGUvd3JhcHBlci9QYXRoQXNzZW1ibGVyJExvY2FsRGlzdHJpYnV0aW9uLmNsYXNzUEsBAhQDCgAACAgAAABBAKDhtjsEBwAAKw4AACYAAAAAAAAAAAAAAKSBc8MAAG9yZy9ncmFkbGUvd3JhcHBlci9QYXRoQXNzZW1ibGVyLmNsYXNzUEsBAhQDCgAACAgAAABBAIR/zevCBAAAfAkAADAAAAAAAAAAAAAAAKSBu8oAAG9yZy9ncmFkbGUvd3JhcHBlci9TeXN0ZW1Qcm9wZXJ0aWVzSGFuZGxlci5jbGFzc1BLAQIUAwoAAAgIAAAAQQAXgZdZFgMAAFAIAAAtAAAAAAAAAAAAAACkgcvPAABvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckNvbmZpZ3VyYXRpb24uY2xhc3NQSwECFAMKAAAICAAAAEEAt1icedsJAACsFQAAKAAAAAAAAAAAAAAApIEs0wAAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJFeGVjdXRvci5jbGFzc1BLBQYAAAAANwA3ACMTAABN3QAAAAA=", de = `# gradle

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
`, Ae = `# Automatically build the project and run any configured tests for every push
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
        ]
        # and run on both Linux and Windows
        os: [ubuntu-22.04, windows-2022]
    runs-on: \${{ matrix.os }}
    steps:
      - name: checkout repository
        uses: actions/checkout@v3
      - name: validate gradle wrapper
        uses: gradle/wrapper-validation-action@v1
      - name: setup jdk \${{ matrix.java }}
        uses: actions/setup-java@v3
        with:
          java-version: \${{ matrix.java }}
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        if: \${{ runner.os != 'Windows' }}
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        if: \${{ runner.os == 'Linux' && matrix.java == '17' }} # Only upload artifacts built from latest java on one OS
        uses: actions/upload-artifact@v3
        with:
          name: Artifacts
          path: build/libs/`;
async function Te({ writer: R }) {
  await R.write("gradlew", Fe, {
    unixPermissions: "774"
  }), await R.write("gradlew.bat", Xe), await R.write("gradle/wrapper/gradle-wrapper.properties", ze), await R.write("gradle/wrapper/gradle-wrapper.jar", ce(Ue)), await R.write(".gitignore", de), await R.write(".github/workflows/build.yml", Ae);
}
const Oe = "data:application/javascript;base64,IWZ1bmN0aW9uKGUsbil7Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzJiYidW5kZWZpbmVkIiE9dHlwZW9mIG1vZHVsZT9uKGV4cG9ydHMpOiJmdW5jdGlvbiI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFsiZXhwb3J0cyJdLG4pOm4oKGU9InVuZGVmaW5lZCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuRXRhPXt9KX0odGhpcywoZnVuY3Rpb24oZSl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIG4oZSl7dmFyIHQscixpPW5ldyBFcnJvcihlKTtyZXR1cm4gdD1pLHI9bi5wcm90b3R5cGUsT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LHIpOnQuX19wcm90b19fPXIsaX1mdW5jdGlvbiB0KGUsdCxyKXt2YXIgaT10LnNsaWNlKDAscikuc3BsaXQoL1xuLyksYT1pLmxlbmd0aCxvPWlbYS0xXS5sZW5ndGgrMTt0aHJvdyBuKGUrPSIgYXQgbGluZSAiK2ErIiBjb2wgIitvKyI6XG5cbiAgIit0LnNwbGl0KC9cbi8pW2EtMV0rIlxuICAiK0FycmF5KG8pLmpvaW4oIiAiKSsiXiIpfW4ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLHtuYW1lOnt2YWx1ZToiRXRhIEVycm9yIixlbnVtZXJhYmxlOiExfX0pO3ZhciByPW5ldyBGdW5jdGlvbigicmV0dXJuIHRoaXMiKSgpLlByb21pc2U7ZnVuY3Rpb24gaShlLG4pe2Zvcih2YXIgdCBpbiBuKXI9bixpPXQsT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsaSkmJihlW3RdPW5bdF0pO3ZhciByLGk7cmV0dXJuIGV9ZnVuY3Rpb24gYShlLG4sdCxyKXt2YXIgaSxhO3JldHVybiBBcnJheS5pc0FycmF5KG4uYXV0b1RyaW0pPyhpPW4uYXV0b1RyaW1bMV0sYT1uLmF1dG9UcmltWzBdKTppPWE9bi5hdXRvVHJpbSwodHx8ITE9PT10KSYmKGk9dCksKHJ8fCExPT09cikmJihhPXIpLGF8fGk/InNsdXJwIj09PWkmJiJzbHVycCI9PT1hP2UudHJpbSgpOigiXyI9PT1pfHwic2x1cnAiPT09aT9lPWZ1bmN0aW9uKGUpe3JldHVybiBTdHJpbmcucHJvdG90eXBlLnRyaW1MZWZ0P2UudHJpbUxlZnQoKTplLnJlcGxhY2UoL15ccysvLCIiKX0oZSk6Ii0iIT09aSYmIm5sIiE9PWl8fChlPWUucmVwbGFjZSgvXig/OlxyXG58XG58XHIpLywiIikpLCJfIj09PWF8fCJzbHVycCI9PT1hP2U9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5wcm90b3R5cGUudHJpbVJpZ2h0P2UudHJpbVJpZ2h0KCk6ZS5yZXBsYWNlKC9ccyskLywiIil9KGUpOiItIiE9PWEmJiJubCIhPT1hfHwoZT1lLnJlcGxhY2UoLyg/OlxyXG58XG58XHIpJC8sIiIpKSxlKTplfXZhciBvPXsiJiI6IiZhbXA7IiwiPCI6IiZsdDsiLCI+IjoiJmd0OyIsJyInOiImcXVvdDsiLCInIjoiJiMzOTsifTtmdW5jdGlvbiBjKGUpe3JldHVybiBvW2VdfXZhciBzPS9gKD86XFxbXHNcU118XCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pKn18KD8hXCR7KVteXFxgXSkqYC9nLGw9LycoPzpcXFtcc1x3IidcXGBdfFteXG5ccidcXF0pKj8nL2csdT0vIig/OlxcW1xzXHciJ1xcYF18W15cblxyIlxcXSkqPyIvZztmdW5jdGlvbiBwKGUpe3JldHVybiBlLnJlcGxhY2UoL1suKitcLT9eJHt9KCl8W1xdXFxdL2csIlxcJCYiKX1mdW5jdGlvbiBmKGUsbil7dmFyIHI9W10saT0hMSxvPTAsYz1uLnBhcnNlO2lmKG4ucGx1Z2lucylmb3IodmFyIGY9MDtmPG4ucGx1Z2lucy5sZW5ndGg7ZisrKXsoVD1uLnBsdWdpbnNbZl0pLnByb2Nlc3NUZW1wbGF0ZSYmKGU9VC5wcm9jZXNzVGVtcGxhdGUoZSxuKSl9ZnVuY3Rpb24gZChlLHQpe2UmJihlPWEoZSxuLGksdCkpJiYoZT1lLnJlcGxhY2UoL1xcfCcvZywiXFwkJiIpLnJlcGxhY2UoL1xyXG58XG58XHIvZywiXFxuIiksci5wdXNoKGUpKX1uLnJtV2hpdGVzcGFjZSYmKGU9ZS5yZXBsYWNlKC9bXHJcbl0rL2csIlxuIikucmVwbGFjZSgvXlxzK3xccyskL2dtLCIiKSkscy5sYXN0SW5kZXg9MCxsLmxhc3RJbmRleD0wLHUubGFzdEluZGV4PTA7Zm9yKHZhciBnLGg9W2MuZXhlYyxjLmludGVycG9sYXRlLGMucmF3XS5yZWR1Y2UoKGZ1bmN0aW9uKGUsbil7cmV0dXJuIGUmJm4/ZSsifCIrcChuKTpuP3Aobik6ZX0pLCIiKSxtPW5ldyBSZWdFeHAoIihbXl0qPykiK3Aobi50YWdzWzBdKSsiKC18Xyk/XFxzKigiK2grIik/XFxzKiIsImciKSx2PW5ldyBSZWdFeHAoIid8XCJ8YHxcXC9cXCp8KFxccyooLXxfKT8iK3Aobi50YWdzWzFdKSsiKSIsImciKTtnPW0uZXhlYyhlKTspe289Z1swXS5sZW5ndGgrZy5pbmRleDt2YXIgeT1nWzFdLHg9Z1syXSxfPWdbM118fCIiO2QoeSx4KSx2Lmxhc3RJbmRleD1vO2Zvcih2YXIgdz12b2lkIDAsYj0hMTt3PXYuZXhlYyhlKTspe2lmKHdbMV0pe3ZhciBFPWUuc2xpY2Uobyx3LmluZGV4KTttLmxhc3RJbmRleD1vPXYubGFzdEluZGV4LGk9d1syXSxiPXt0Ol89PT1jLmV4ZWM/ImUiOl89PT1jLnJhdz8iciI6Xz09PWMuaW50ZXJwb2xhdGU/ImkiOiIiLHZhbDpFfTticmVha312YXIgST13WzBdO2lmKCIvKiI9PT1JKXt2YXIgUj1lLmluZGV4T2YoIiovIix2Lmxhc3RJbmRleCk7LTE9PT1SJiZ0KCJ1bmNsb3NlZCBjb21tZW50IixlLHcuaW5kZXgpLHYubGFzdEluZGV4PVJ9ZWxzZSBpZigiJyI9PT1JKXtsLmxhc3RJbmRleD13LmluZGV4LGwuZXhlYyhlKT92Lmxhc3RJbmRleD1sLmxhc3RJbmRleDp0KCJ1bmNsb3NlZCBzdHJpbmciLGUsdy5pbmRleCl9ZWxzZSBpZignIic9PT1JKXt1Lmxhc3RJbmRleD13LmluZGV4LHUuZXhlYyhlKT92Lmxhc3RJbmRleD11Lmxhc3RJbmRleDp0KCJ1bmNsb3NlZCBzdHJpbmciLGUsdy5pbmRleCl9ZWxzZSBpZigiYCI9PT1JKXtzLmxhc3RJbmRleD13LmluZGV4LHMuZXhlYyhlKT92Lmxhc3RJbmRleD1zLmxhc3RJbmRleDp0KCJ1bmNsb3NlZCBzdHJpbmciLGUsdy5pbmRleCl9fWI/ci5wdXNoKGIpOnQoInVuY2xvc2VkIHRhZyIsZSxnLmluZGV4K3kubGVuZ3RoKX1pZihkKGUuc2xpY2UobyxlLmxlbmd0aCksITEpLG4ucGx1Z2lucylmb3IoZj0wO2Y8bi5wbHVnaW5zLmxlbmd0aDtmKyspe3ZhciBUOyhUPW4ucGx1Z2luc1tmXSkucHJvY2Vzc0FTVCYmKHI9VC5wcm9jZXNzQVNUKHIsbikpfXJldHVybiByfWZ1bmN0aW9uIGQoZSxuKXt2YXIgdD1mKGUsbikscj0idmFyIHRSPScnLF9fbCxfX2xQIisobi5pbmNsdWRlPyIsaW5jbHVkZT1FLmluY2x1ZGUuYmluZChFKSI6IiIpKyhuLmluY2x1ZGVGaWxlPyIsaW5jbHVkZUZpbGU9RS5pbmNsdWRlRmlsZS5iaW5kKEUpIjoiIikrIlxuZnVuY3Rpb24gbGF5b3V0KHAsZCl7X19sPXA7X19sUD1kfVxuIisobi51c2VXaXRoPyJ3aXRoKCIrbi52YXJOYW1lKyJ8fHt9KXsiOiIiKStmdW5jdGlvbihlLG4pe3ZhciB0PTAscj1lLmxlbmd0aCxpPSIiO2Zvcig7dDxyO3QrKyl7dmFyIGE9ZVt0XTtpZigic3RyaW5nIj09dHlwZW9mIGEpe2krPSJ0Uis9JyIrYSsiJ1xuIn1lbHNle3ZhciBvPWEudCxjPWEudmFsfHwiIjsiciI9PT1vPyhuLmZpbHRlciYmKGM9IkUuZmlsdGVyKCIrYysiKSIpLGkrPSJ0Uis9IitjKyJcbiIpOiJpIj09PW8/KG4uZmlsdGVyJiYoYz0iRS5maWx0ZXIoIitjKyIpIiksbi5hdXRvRXNjYXBlJiYoYz0iRS5lKCIrYysiKSIpLGkrPSJ0Uis9IitjKyJcbiIpOiJlIj09PW8mJihpKz1jKyJcbiIpfX1yZXR1cm4gaX0odCxuKSsobi5pbmNsdWRlRmlsZT8iaWYoX19sKXRSPSIrKG4uYXN5bmM/ImF3YWl0ICI6IiIpKyJpbmNsdWRlRmlsZShfX2wsT2JqZWN0LmFzc2lnbigiK24udmFyTmFtZSsiLHtib2R5OnRSfSxfX2xQKSlcbiI6bi5pbmNsdWRlPyJpZihfX2wpdFI9Iisobi5hc3luYz8iYXdhaXQgIjoiIikrImluY2x1ZGUoX19sLE9iamVjdC5hc3NpZ24oIituLnZhck5hbWUrIix7Ym9keTp0Un0sX19sUCkpXG4iOiIiKSsiaWYoY2Ipe2NiKG51bGwsdFIpfSByZXR1cm4gdFIiKyhuLnVzZVdpdGg/In0iOiIiKTtpZihuLnBsdWdpbnMpZm9yKHZhciBpPTA7aTxuLnBsdWdpbnMubGVuZ3RoO2krKyl7dmFyIGE9bi5wbHVnaW5zW2ldO2EucHJvY2Vzc0ZuU3RyaW5nJiYocj1hLnByb2Nlc3NGblN0cmluZyhyLG4pKX1yZXR1cm4gcn12YXIgZz1uZXcoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMuY2FjaGU9ZX1yZXR1cm4gZS5wcm90b3R5cGUuZGVmaW5lPWZ1bmN0aW9uKGUsbil7dGhpcy5jYWNoZVtlXT1ufSxlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY2FjaGVbZV19LGUucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihlKXtkZWxldGUgdGhpcy5jYWNoZVtlXX0sZS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPXt9fSxlLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGUpe2kodGhpcy5jYWNoZSxlKX0sZX0oKSkoe30pO3ZhciBoPXthc3luYzohMSxhdXRvRXNjYXBlOiEwLGF1dG9UcmltOlshMSwibmwiXSxjYWNoZTohMSxlOmZ1bmN0aW9uKGUpe3ZhciBuPVN0cmluZyhlKTtyZXR1cm4vWyY8PiInXS8udGVzdChuKT9uLnJlcGxhY2UoL1smPD4iJ10vZyxjKTpufSxpbmNsdWRlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy50ZW1wbGF0ZXMuZ2V0KGUpO2lmKCFyKXRocm93IG4oJ0NvdWxkIG5vdCBmZXRjaCB0ZW1wbGF0ZSAiJytlKyciJyk7cmV0dXJuIHIodCx0aGlzKX0scGFyc2U6e2V4ZWM6IiIsaW50ZXJwb2xhdGU6Ij0iLHJhdzoifiJ9LHBsdWdpbnM6W10scm1XaGl0ZXNwYWNlOiExLHRhZ3M6WyI8JSIsIiU+Il0sdGVtcGxhdGVzOmcsdXNlV2l0aDohMSx2YXJOYW1lOiJpdCJ9O2Z1bmN0aW9uIG0oZSxuKXt2YXIgdD17fTtyZXR1cm4gaSh0LGgpLG4mJmkodCxuKSxlJiZpKHQsZSksdH1mdW5jdGlvbiB2KGUsdCl7dmFyIHI9bSh0fHx7fSksaT1yLmFzeW5jP2Z1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgRnVuY3Rpb24oInJldHVybiAoYXN5bmMgZnVuY3Rpb24oKXt9KS5jb25zdHJ1Y3RvciIpKCl9Y2F0Y2goZSl7dGhyb3cgZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yP24oIlRoaXMgZW52aXJvbm1lbnQgZG9lc24ndCBzdXBwb3J0IGFzeW5jL2F3YWl0Iik6ZX19KCk6RnVuY3Rpb247dHJ5e3JldHVybiBuZXcgaShyLnZhck5hbWUsIkUiLCJjYiIsZChlLHIpKX1jYXRjaCh0KXt0aHJvdyB0IGluc3RhbmNlb2YgU3ludGF4RXJyb3I/bigiQmFkIHRlbXBsYXRlIHN5bnRheFxuXG4iK3QubWVzc2FnZSsiXG4iK0FycmF5KHQubWVzc2FnZS5sZW5ndGgrMSkuam9pbigiPSIpKyJcbiIrZChlLHIpKyJcbiIpOnR9fWZ1bmN0aW9uIHkoZSxuKXtpZihuLmNhY2hlJiZuLm5hbWUmJm4udGVtcGxhdGVzLmdldChuLm5hbWUpKXJldHVybiBuLnRlbXBsYXRlcy5nZXQobi5uYW1lKTt2YXIgdD0iZnVuY3Rpb24iPT10eXBlb2YgZT9lOnYoZSxuKTtyZXR1cm4gbi5jYWNoZSYmbi5uYW1lJiZuLnRlbXBsYXRlcy5kZWZpbmUobi5uYW1lLHQpLHR9ZnVuY3Rpb24geChlLHQsaSxhKXt2YXIgbz1tKGl8fHt9KTtpZighby5hc3luYylyZXR1cm4geShlLG8pKHQsbyk7aWYoIWEpe2lmKCJmdW5jdGlvbiI9PXR5cGVvZiByKXJldHVybiBuZXcgcigoZnVuY3Rpb24obixyKXt0cnl7bih5KGUsbykodCxvKSl9Y2F0Y2goZSl7cihlKX19KSk7dGhyb3cgbigiUGxlYXNlIHByb3ZpZGUgYSBjYWxsYmFjayBmdW5jdGlvbiwgdGhpcyBlbnYgZG9lc24ndCBzdXBwb3J0IFByb21pc2VzIil9dHJ5e3koZSxvKSh0LG8sYSl9Y2F0Y2goZSl7cmV0dXJuIGEoZSl9fWUuY29tcGlsZT12LGUuY29tcGlsZVRvU3RyaW5nPWQsZS5jb25maWc9aCxlLmNvbmZpZ3VyZT1mdW5jdGlvbihlKXtyZXR1cm4gaShoLGUpfSxlLmRlZmF1bHRDb25maWc9aCxlLmdldENvbmZpZz1tLGUucGFyc2U9ZixlLnJlbmRlcj14LGUucmVuZGVyQXN5bmM9ZnVuY3Rpb24oZSxuLHQscil7cmV0dXJuIHgoZSxuLE9iamVjdC5hc3NpZ24oe30sdCx7YXN5bmM6ITB9KSxyKX0sZS50ZW1wbGF0ZXM9ZyxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwiX19lc01vZHVsZSIse3ZhbHVlOiEwfSl9KSk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWV0YS5taW4uanMubWFwCg==", ue = document.createElement("script");
ue.src = Oe;
document.body.append(ue);
function Ct(R, m) {
  return Eta.configure({
    autoTrim: !1
  }), Eta.render(R, m);
}
const Je = `# Done to increase the memory available to gradle.
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
fabric_version=<%= it.fabricVersion %>`, Ve = `plugins {
	id 'fabric-loom' version '1.1-SNAPSHOT'
	id 'maven-publish'
	<%_ if (it.kotlin) { %>
  id "org.jetbrains.kotlin.jvm" version "<%= it.kotlin.kotlinVersion %>"
  <%_ } %>
}

sourceCompatibility = JavaVersion.<%= it.java.compatibility %>
targetCompatibility = JavaVersion.<%= it.java.compatibility %>

archivesBaseName = project.archives_base_name
version = project.mod_version
group = project.maven_group

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
}

jar {
	from("LICENSE") {
		rename { "\${it}_\${project.archivesBaseName}"}
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
}`, je = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, Pe = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, Me = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
};
function Xt(R) {
  const m = zt(R);
  return m < 16 ? je : m == 16 ? Pe : Me;
}
function zt(R) {
  return Number(R.split(".")[1]);
}
async function Qe(R, m) {
  await R.write("gradle.properties", Ct(Je, m)), await R.write("build.gradle", Ct(Ve, { ...m, java: Xt(m.minecraftVersion) })), await R.write("settings.gradle", Ye);
}
const De = `package <%= it.packageName %>;

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
}`, Ke = `package <%= it.packageName %>;

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
async function He(R, m) {
  const r = m.packageName + ".mixin", w = "ExampleMixin", d = {
    required: !0,
    package: r,
    compatibilityLevel: Xt(m.minecraftVersion).mixin,
    mixins: [
      w
    ],
    injectors: {
      defaultRequire: 1
    }
  }, i = `${m.modid}.mixins.json`;
  return await R.write(`src/main/resources/${i}`, JSON.stringify(d, null, "	")), await R.write(`src/main/java/${r.replaceAll(".", "/")}/${w}.java`, Ct(De, {
    className: w,
    packageName: r
  })), [i];
}
async function qe(R, m) {
  const r = m.packageName + ".mixin.client", w = "ExampleClientMixin", d = {
    required: !0,
    package: r,
    compatibilityLevel: Xt(m.minecraftVersion).mixin,
    client: [
      w
    ],
    injectors: {
      defaultRequire: 1
    }
  }, i = `${m.modid}.client.mixins.json`;
  return await R.write(`src/client/resources/${i}`, JSON.stringify(d, null, "	")), await R.write(`src/client/java/${r.replaceAll(".", "/")}/${w}.java`, Ct(Ke, {
    className: w,
    packageName: r
  })), [
    {
      config: i,
      environment: "client"
    }
  ];
}
const _e = `package <%= it.package %>;

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
}`, $e = `package <%= it.package %>

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
}`, tn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
    @Override
    public void onInitializeClient() {
        // This entrypoint is suitable for setting up client-specific logic, such as rendering.
    }
}`, en = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
    override fun onInitializeClient() {
        // This entrypoint is suitable for setting up client-specific logic, such as rendering.
    }
}`, nn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
    @Override
    public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

    }
}
`, rn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
    override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
    }
}`;
async function an(R, m) {
  const r = "ExampleMod", w = {
    package: m.packageName,
    className: r,
    classFullName: m.packageName + "." + r,
    path: m.packageName.replaceAll(".", "/") + "/" + r,
    modid: m.modid,
    slf4j: zt(m.minecraftVersion) >= 18,
    clientEntrypoint: m.splitSources,
    dataEntrypoint: m.dataGeneration
  };
  return m.kotlin ? await on(R, w) : await sn(R, w);
}
async function sn(R, m) {
  var r = {
    main: [
      m.classFullName
    ]
  };
  return await R.write(`src/main/java/${m.path}.java`, Ct(_e, m)), m.clientEntrypoint && (await R.write(`src/client/java/${m.path}Client.java`, Ct(tn, { ...m, className: m.className + "Client" })), r = {
    ...r,
    client: [
      m.classFullName + "Client"
    ]
  }), m.dataEntrypoint && (await R.write(`src/main/java/${m.path}DataGenerator.java`, Ct(nn, { ...m, className: m.className + "DataGenerator" })), r = {
    ...r,
    "fabric-datagen": [
      m.classFullName + "DataGenerator"
    ]
  }), r;
}
async function on(R, m) {
  var r = {
    main: [
      {
        value: m.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  return await R.write(`src/main/kotlin/${m.path}.kt`, Ct($e, m)), m.clientEntrypoint && (await R.write(`src/client/kotlin/${m.path}Client.kt`, Ct(en, { ...m, className: m.className + "Client" })), r = {
    ...r,
    client: [
      {
        value: m.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), m.dataEntrypoint && (await R.write(`src/main/kotlin/${m.path}DataGenerator.kt`, Ct(rn, { ...m, className: m.className + "DataGenerator" })), r = {
    ...r,
    "fabric-datagen": [
      {
        value: m.classFullName + "DataGenerator",
        adapter: "kotlin"
      }
    ]
  }), r;
}
async function ln(R, m) {
  var r = [
    ...await He(R, m),
    ...m.splitSources ? await qe(R, m) : []
  ], w = {
    schemaVersion: 1,
    id: m.modid,
    version: "${version}",
    name: m.projectName,
    description: "This is an example description! Tell everyone what your mod is about!",
    authors: [
      "Me!"
    ],
    contact: {
      homepage: "https://fabricmc.net/",
      sources: "https://github.com/FabricMC/fabric-example-mod"
    },
    license: "CC0-1.0",
    icon: `assets/${m.modid}/icon.png`,
    environment: "*",
    entrypoints: await an(R, m),
    mixins: r,
    depends: {
      fabricloader: ">=" + m.loaderVersion,
      minecraft: "~" + m.minecraftVersion,
      java: ">=" + Xt(m.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  w.depends[zt(m.minecraftVersion) >= 16 ? "fabric-api" : "fabric"] = "*", m.kotlin && (w.depends = {
    ...w.depends,
    "fabric-language-kotlin": ">=" + m.kotlin.kotlinVersion
  }), await R.write("src/main/resources/fabric.mod.json", JSON.stringify(w, null, "	")), await R.write(`src/main/resources/assets/${m.modid}/icon.png`, ce(cn));
}
const cn = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC", dn = `Creative Commons Legal Code

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
async function An(R, m) {
  await R.write(".gitignore", de), await R.write(".github/workflows/build.yml", Ae), await R.write("LICENSE", dn);
}
async function un(R) {
  const m = await hn(R.config);
  await Te(R), await Qe(R.writer, m), await ln(R.writer, m), await An(R.writer);
}
function he(R) {
  return R.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
async function hn(R) {
  return {
    ...R,
    loaderVersion: (await Re()).find((m) => m.stable).version,
    fabricVersion: await Ee(R.minecraftVersion),
    yarnVersion: (await Ge(R.minecraftVersion))[0].version,
    kotlin: await fn(R)
  };
}
async function fn(R) {
  if (!R.useKotlin)
    return;
  const r = (await Be()).pop(), w = r.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: r,
    kotlinVersion: w
  };
}
const pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateTemplate: un,
  nameToModId: he
}, Symbol.toStringTag, { value: "Module" }));
function Pt(R, m, r) {
  const w = R.slice();
  return w[28] = m[r], w;
}
function Mt(R, m, r) {
  const w = R.slice();
  return w[31] = m[r], w;
}
function Qt(R, m, r) {
  const w = R.slice();
  return w[31] = m[r], w;
}
function mn(R) {
  let m, r, w = R[31].message + "", d, i, s;
  return {
    c() {
      m = et("p"), r = It("Error: "), d = It(w), i = ct(), s = et("p"), s.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, Ft(m, "color", "red");
    },
    m(n, l) {
      bt(n, m, l), D(m, r), D(m, d), bt(n, i, l), bt(n, s, l);
    },
    p: St,
    i: St,
    o: St,
    d(n) {
      n && gt(m), n && gt(i), n && gt(s);
    }
  };
}
function bn(R) {
  let m, r, w, d, i, s, n, l, h, y, b, g, o, f, a, u, c, v, I, x, C, T, W, Y, L, P, $, k, N, e, X, tt, J, rt, j, nt, G, E, it, K, Q, dt, yt, at, lt, mt, At, ht, ft, t, z, B;
  function p(q, pt) {
    return q[2] != null ? yn : gn;
  }
  let A = p(R), S = A(R), F = R[12] != null && Dt(R), U = R[2] != null && Ht(R), Z = R[27].game, O = [];
  for (let q = 0; q < Z.length; q += 1)
    O[q] = $t(Pt(R, Z, q));
  let M = R[10] && te(R), V = R[9] && ee(R);
  const _ = [wn, vn], ot = [];
  function st(q, pt) {
    return q[8] ? 0 : 1;
  }
  return ht = st(R), ft = ot[ht] = _[ht](R), {
    c() {
      m = et("div"), r = et("div"), w = et("h3"), w.textContent = "Mod Name:", d = ct(), i = et("hr"), s = ct(), S.c(), n = ct(), l = et("input"), h = ct(), F && F.c(), y = ct(), U && U.c(), b = ct(), g = et("div"), o = et("h3"), o.textContent = "Package Name:", f = ct(), a = et("hr"), u = ct(), c = et("p"), c.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-1sr08ub">name.modid</code>.`, v = ct(), I = et("input"), x = ct(), C = et("div"), T = et("h3"), T.textContent = "Minecraft Version:", W = ct(), Y = et("hr"), L = ct(), P = et("p"), P.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, $ = ct(), k = et("select");
      for (let q = 0; q < O.length; q += 1)
        O[q].c();
      N = ct(), e = et("hr"), X = ct(), tt = et("br"), J = ct(), rt = et("h4"), rt.textContent = "Advanced Options:", j = ct(), nt = et("div"), G = et("div"), E = et("input"), it = ct(), K = et("label"), K.textContent = "Kotlin Programming Language", Q = ct(), dt = et("p"), dt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-1sr08ub">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-1sr08ub">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, yt = ct(), M && M.c(), at = ct(), V && V.c(), lt = ct(), mt = et("br"), At = ct(), ft.c(), H(w, "class", "svelte-1sr08ub"), H(i, "class", "svelte-1sr08ub"), H(l, "id", "project-name"), H(l, "class", "svelte-1sr08ub"), H(r, "class", "form-line svelte-1sr08ub"), H(o, "class", "svelte-1sr08ub"), H(a, "class", "svelte-1sr08ub"), H(c, "class", "svelte-1sr08ub"), H(I, "id", "package-name"), H(I, "class", "svelte-1sr08ub"), H(g, "class", "form-line svelte-1sr08ub"), H(T, "class", "svelte-1sr08ub"), H(Y, "class", "svelte-1sr08ub"), H(P, "class", "svelte-1sr08ub"), H(k, "id", "minecraft-version"), Ft(k, "min-width", "200px"), H(k, "class", "svelte-1sr08ub"), R[0] === void 0 && Ce(() => R[22].call(k)), H(C, "class", "form-line svelte-1sr08ub"), H(e, "class", "svelte-1sr08ub"), H(tt, "class", "svelte-1sr08ub"), H(rt, "class", "svelte-1sr08ub"), H(E, "id", "kotlin"), H(E, "type", "checkbox"), H(E, "class", "option-input svelte-1sr08ub"), H(K, "for", "kotlin"), H(K, "class", "option-label svelte-1sr08ub"), H(G, "class", "option-container svelte-1sr08ub"), H(dt, "class", "option-body svelte-1sr08ub"), H(nt, "class", "svelte-1sr08ub"), H(mt, "class", "svelte-1sr08ub"), H(m, "class", "template svelte-1sr08ub");
    },
    m(q, pt) {
      bt(q, m, pt), D(m, r), D(r, w), D(r, d), D(r, i), D(r, s), S.m(r, null), D(r, n), D(r, l), Rt(l, R[1]), D(r, h), F && F.m(r, null), D(m, y), U && U.m(m, null), D(m, b), D(m, g), D(g, o), D(g, f), D(g, a), D(g, u), D(g, c), D(g, v), D(g, I), Rt(I, R[4]), D(m, x), D(m, C), D(C, T), D(C, W), D(C, Y), D(C, L), D(C, P), D(C, $), D(C, k);
      for (let vt = 0; vt < O.length; vt += 1)
        O[vt].m(k, null);
      jt(k, R[0]), D(m, N), D(m, e), D(m, X), D(m, tt), D(m, J), D(m, rt), D(m, j), D(m, nt), D(nt, G), D(G, E), E.checked = R[5], D(G, it), D(G, K), D(nt, Q), D(nt, dt), D(m, yt), M && M.m(m, null), D(m, at), V && V.m(m, null), D(m, lt), D(m, mt), D(m, At), ot[ht].m(m, null), t = !0, z || (B = [
        kt(l, "input", R[19]),
        kt(I, "keyup", R[15]),
        kt(I, "input", R[21]),
        kt(k, "change", R[22]),
        kt(E, "change", R[23])
      ], z = !0);
    },
    p(q, pt) {
      if (A === (A = p(q)) && S ? S.p(q, pt) : (S.d(1), S = A(q), S && (S.c(), S.m(r, n))), pt[0] & 2 && l.value !== q[1] && Rt(l, q[1]), q[12] != null ? F ? F.p(q, pt) : (F = Dt(q), F.c(), F.m(r, null)) : F && (F.d(1), F = null), q[2] != null ? U ? U.p(q, pt) : (U = Ht(q), U.c(), U.m(m, b)) : U && (U.d(1), U = null), pt[0] & 16 && I.value !== q[4] && Rt(I, q[4]), pt[0] & 8192) {
        Z = q[27].game;
        let wt;
        for (wt = 0; wt < Z.length; wt += 1) {
          const ut = Pt(q, Z, wt);
          O[wt] ? O[wt].p(ut, pt) : (O[wt] = $t(ut), O[wt].c(), O[wt].m(k, null));
        }
        for (; wt < O.length; wt += 1)
          O[wt].d(1);
        O.length = Z.length;
      }
      pt[0] & 8193 && jt(k, q[0]), pt[0] & 32 && (E.checked = q[5]), q[10] ? M ? M.p(q, pt) : (M = te(q), M.c(), M.m(m, at)) : M && (M.d(1), M = null), q[9] ? V ? V.p(q, pt) : (V = ee(q), V.c(), V.m(m, lt)) : V && (V.d(1), V = null);
      let vt = ht;
      ht = st(q), ht === vt ? ot[ht].p(q, pt) : (xe(), Bt(ot[vt], 1, 1, () => {
        ot[vt] = null;
      }), Ze(), ft = ot[ht], ft ? ft.p(q, pt) : (ft = ot[ht] = _[ht](q), ft.c()), Gt(ft, 1), ft.m(m, null));
    },
    i(q) {
      t || (Gt(ft), t = !0);
    },
    o(q) {
      Bt(ft), t = !1;
    },
    d(q) {
      q && gt(m), S.d(), F && F.d(), U && U.d(), Tt(O, q), M && M.d(), V && V.d(), ot[ht].d(), z = !1, ne(B);
    }
  };
}
function gn(R) {
  let m, r, w, d, i, s, n, l;
  return {
    c() {
      m = et("p"), r = It("Choose a name for your new mod. The mod ID will be "), w = et("code"), d = It(R[3]), i = It(". "), s = et("a"), s.textContent = "Use custom id", H(w, "class", "svelte-1sr08ub"), H(s, "href", ""), H(s, "class", "svelte-1sr08ub"), H(m, "class", "svelte-1sr08ub");
    },
    m(h, y) {
      bt(h, m, y), D(m, r), D(m, w), D(w, d), D(m, i), D(m, s), n || (l = kt(s, "click", Jt(R[16])), n = !0);
    },
    p(h, y) {
      y[0] & 8 && Ot(d, h[3]);
    },
    d(h) {
      h && gt(m), n = !1, l();
    }
  };
}
function yn(R) {
  let m;
  return {
    c() {
      m = et("p"), m.textContent = "Choose a name for your new mod.", H(m, "class", "svelte-1sr08ub");
    },
    m(r, w) {
      bt(r, m, w);
    },
    p: St,
    d(r) {
      r && gt(m);
    }
  };
}
function Dt(R) {
  let m, r, w = R[12], d = [];
  for (let i = 0; i < w.length; i += 1)
    d[i] = Kt(Qt(R, w, i));
  return {
    c() {
      for (let i = 0; i < d.length; i += 1)
        d[i].c();
      m = ct(), r = et("br"), H(r, "class", "svelte-1sr08ub");
    },
    m(i, s) {
      for (let n = 0; n < d.length; n += 1)
        d[n].m(i, s);
      bt(i, m, s), bt(i, r, s);
    },
    p(i, s) {
      if (s[0] & 4096) {
        w = i[12];
        let n;
        for (n = 0; n < w.length; n += 1) {
          const l = Qt(i, w, n);
          d[n] ? d[n].p(l, s) : (d[n] = Kt(l), d[n].c(), d[n].m(m.parentNode, m));
        }
        for (; n < d.length; n += 1)
          d[n].d(1);
        d.length = w.length;
      }
    },
    d(i) {
      Tt(d, i), i && gt(m), i && gt(r);
    }
  };
}
function Kt(R) {
  let m, r = R[31] + "", w;
  return {
    c() {
      m = et("li"), w = It(r), Ft(m, "color", "red"), H(m, "class", "svelte-1sr08ub");
    },
    m(d, i) {
      bt(d, m, i), D(m, w);
    },
    p(d, i) {
      i[0] & 4096 && r !== (r = d[31] + "") && Ot(w, r);
    },
    d(d) {
      d && gt(m);
    }
  };
}
function Ht(R) {
  let m, r, w, d, i, s, n, l, h, y, b, g, o, f = R[11] != null && qt(R);
  return {
    c() {
      m = et("div"), r = et("h3"), r.textContent = "Mod ID:", w = ct(), d = et("hr"), i = ct(), s = et("p"), n = It("Enter the modid you wish to use for your mod. "), l = et("a"), l.textContent = "Use default", h = ct(), f && f.c(), y = ct(), b = et("input"), H(r, "class", "svelte-1sr08ub"), H(d, "class", "svelte-1sr08ub"), H(l, "href", ""), H(l, "class", "svelte-1sr08ub"), H(s, "class", "svelte-1sr08ub"), H(b, "id", "mod-id"), H(b, "class", "svelte-1sr08ub"), H(m, "class", "form-line svelte-1sr08ub");
    },
    m(a, u) {
      bt(a, m, u), D(m, r), D(m, w), D(m, d), D(m, i), D(m, s), D(s, n), D(s, l), D(m, h), f && f.m(m, null), D(m, y), D(m, b), Rt(b, R[2]), g || (o = [
        kt(l, "click", Jt(R[17])),
        kt(b, "input", R[20])
      ], g = !0);
    },
    p(a, u) {
      a[11] != null ? f ? f.p(a, u) : (f = qt(a), f.c(), f.m(m, y)) : f && (f.d(1), f = null), u[0] & 4 && b.value !== a[2] && Rt(b, a[2]);
    },
    d(a) {
      a && gt(m), f && f.d(), g = !1, ne(o);
    }
  };
}
function qt(R) {
  let m, r, w = R[11], d = [];
  for (let i = 0; i < w.length; i += 1)
    d[i] = _t(Mt(R, w, i));
  return {
    c() {
      for (let i = 0; i < d.length; i += 1)
        d[i].c();
      m = ct(), r = et("br"), H(r, "class", "svelte-1sr08ub");
    },
    m(i, s) {
      for (let n = 0; n < d.length; n += 1)
        d[n].m(i, s);
      bt(i, m, s), bt(i, r, s);
    },
    p(i, s) {
      if (s[0] & 2048) {
        w = i[11];
        let n;
        for (n = 0; n < w.length; n += 1) {
          const l = Mt(i, w, n);
          d[n] ? d[n].p(l, s) : (d[n] = _t(l), d[n].c(), d[n].m(m.parentNode, m));
        }
        for (; n < d.length; n += 1)
          d[n].d(1);
        d.length = w.length;
      }
    },
    d(i) {
      Tt(d, i), i && gt(m), i && gt(r);
    }
  };
}
function _t(R) {
  let m, r = R[31] + "", w;
  return {
    c() {
      m = et("li"), w = It(r), Ft(m, "color", "red"), H(m, "class", "svelte-1sr08ub");
    },
    m(d, i) {
      bt(d, m, i), D(m, w);
    },
    p(d, i) {
      i[0] & 2048 && r !== (r = d[31] + "") && Ot(w, r);
    },
    d(d) {
      d && gt(m);
    }
  };
}
function $t(R) {
  let m, r = R[28].version + "", w;
  return {
    c() {
      m = et("option"), w = It(r), m.__value = R[28].version, m.value = m.__value, H(m, "class", "svelte-1sr08ub");
    },
    m(d, i) {
      bt(d, m, i), D(m, w);
    },
    p: St,
    d(d) {
      d && gt(m);
    }
  };
}
function te(R) {
  let m, r, w, d, i, s, n, l, h;
  return {
    c() {
      m = et("div"), r = et("div"), w = et("input"), d = ct(), i = et("label"), i.textContent = "Data Generation", s = ct(), n = et("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-1sr08ub">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', H(w, "id", "datagen"), H(w, "type", "checkbox"), H(w, "class", "option-input svelte-1sr08ub"), H(i, "for", "datagen"), H(i, "class", "option-label svelte-1sr08ub"), H(r, "class", "option-container svelte-1sr08ub"), H(n, "class", "option-body svelte-1sr08ub"), H(m, "class", "svelte-1sr08ub");
    },
    m(y, b) {
      bt(y, m, b), D(m, r), D(r, w), w.checked = R[6], D(r, d), D(r, i), D(m, s), D(m, n), l || (h = kt(w, "change", R[24]), l = !0);
    },
    p(y, b) {
      b[0] & 64 && (w.checked = y[6]);
    },
    d(y) {
      y && gt(m), l = !1, h();
    }
  };
}
function ee(R) {
  let m, r, w, d, i, s, n, l, h;
  return {
    c() {
      m = et("div"), r = et("div"), w = et("input"), d = ct(), i = et("label"), i.textContent = "Split client and common sources", s = ct(), n = et("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, H(w, "id", "splitSources"), H(w, "type", "checkbox"), H(w, "class", "option-input svelte-1sr08ub"), H(i, "for", "splitSources"), H(i, "class", "option-label svelte-1sr08ub"), H(r, "class", "option-container svelte-1sr08ub"), H(n, "class", "option-body svelte-1sr08ub"), H(m, "class", "svelte-1sr08ub");
    },
    m(y, b) {
      bt(y, m, b), D(m, r), D(r, w), w.checked = R[7], D(r, d), D(r, i), D(m, s), D(m, n), l || (h = kt(w, "change", R[25]), l = !0);
    },
    p(y, b) {
      b[0] & 128 && (w.checked = y[7]);
    },
    d(y) {
      y && gt(m), l = !1, h();
    }
  };
}
function vn(R) {
  let m, r, w, d, i, s;
  return r = new se({}), {
    c() {
      m = et("a"), ie(r.$$.fragment), w = It(" Download Template (.ZIP)"), H(m, "class", "button download-button svelte-1sr08ub"), H(m, "href", "");
    },
    m(n, l) {
      bt(n, m, l), re(r, m, null), D(m, w), d = !0, i || (s = kt(m, "click", Jt(R[14])), i = !0);
    },
    p: St,
    i(n) {
      d || (Gt(r.$$.fragment, n), d = !0);
    },
    o(n) {
      Bt(r.$$.fragment, n), d = !1;
    },
    d(n) {
      n && gt(m), ae(r), i = !1, s();
    }
  };
}
function wn(R) {
  let m, r, w, d;
  return r = new se({}), {
    c() {
      m = et("a"), ie(r.$$.fragment), w = It(" Generating..."), H(m, "class", "button download-button svelte-1sr08ub"), H(m, "href", "");
    },
    m(i, s) {
      bt(i, m, s), re(r, m, null), D(m, w), d = !0;
    },
    p: St,
    i(i) {
      d || (Gt(r.$$.fragment, i), d = !0);
    },
    o(i) {
      Bt(r.$$.fragment, i), d = !1;
    },
    d(i) {
      i && gt(m), ae(r);
    }
  };
}
function kn(R) {
  let m;
  return {
    c() {
      m = et("p"), m.textContent = "Loading data..";
    },
    m(r, w) {
      bt(r, m, w);
    },
    p: St,
    i: St,
    o: St,
    d(r) {
      r && gt(m);
    }
  };
}
function In(R) {
  let m, r, w = {
    ctx: R,
    current: null,
    token: null,
    hasCatch: !0,
    pending: kn,
    then: bn,
    catch: mn,
    value: 27,
    error: 31,
    blocks: [, , ,]
  };
  return we(R[13], w), {
    c() {
      m = ke(), w.block.c();
    },
    m(d, i) {
      bt(d, m, i), w.block.m(d, w.anchor = i), w.mount = () => m.parentNode, w.anchor = m, r = !0;
    },
    p(d, i) {
      R = d, Ie(w, R, i);
    },
    i(d) {
      r || (Gt(w.block), r = !0);
    },
    o(d) {
      for (let i = 0; i < 3; i += 1) {
        const s = w.blocks[i];
        Bt(s);
      }
      r = !1;
    },
    d(d) {
      d && gt(m), w.block.d(d), w.token = null, w = null;
    }
  };
}
function fe(R, m) {
  let r = [];
  const w = m ? "Modid" : "Mod Name";
  return R.length == 0 ? [`${w} is empty!`] : (R.length == 1 ? r.push(`${w} is only a single character! (It must be at least 2 characters long)!`) : R.length > 64 && r.push(`${w} has more than 64 characters!`), r.length === 0 ? void 0 : r);
}
function Sn(R) {
  if (R === void 0)
    return;
  let m = fe(R, !0) ?? [];
  const r = R.charAt(0);
  (r < "a" || r > "z") && m.push("Modid starts with an invalid character '" + r + "' (it must belowercase a-z)");
  let w = null;
  for (let d = 1; d < R.length; d++) {
    let i = R.charAt(d);
    i == "-" || i == "_" || "0" <= i && i <= "9" || "a" <= i && i <= "z" || (w == null && (w = []), w.push(i));
  }
  if (w != null) {
    let d = "Modid contains invalid characters: " + w.map((i) => "'" + i + "'").join(", ") + "!";
    m.push(d + "!");
  }
  if (m.length != 0)
    return m;
}
function Cn(R, m, r) {
  let w, d, i, s, n, l, h, y = "Template Mod", b = "com.example", g = !1, o = !1, f = !0, a, u = !1;
  const c = Promise.all([Le()]).then(([e]) => {
    const X = e.filter((tt) => tt.stable).filter((tt) => {
      const J = tt.version;
      return !(J.startsWith("1.14") && J != "1.14.4");
    });
    return r(0, h = X[0].version), { game: X };
  });
  function v(e) {
    if (e !== void 0)
      return fe(e, a === void 0);
  }
  async function I() {
    if (n !== void 0 || a !== void 0 && l !== void 0)
      return;
    r(8, u = !0);
    const e = await Promise.resolve().then(() => pn), X = {
      modid: a ?? w,
      minecraftVersion: h,
      projectName: y,
      packageName: b,
      useKotlin: g,
      dataGeneration: o && i,
      splitSources: f && s
    }, tt = new We();
    await e.generateTemplate({
      config: X,
      writer: {
        write: async (J, rt, j) => {
          tt.file(J, rt, j);
        }
      }
    }), Ne.saveAs(await tt.generateAsync({ type: "blob", platform: "UNIX" }), `${w}-template-${X.minecraftVersion}.zip`), r(8, u = !1);
  }
  function x() {
    r(4, b = b.toLocaleLowerCase().replace(/\s+/g, "_").replace(/[^a-za-z0-9_\.]/, ""));
  }
  function C() {
    r(2, a = w);
  }
  function T() {
    r(2, a = void 0);
  }
  function W() {
    y = this.value, r(1, y);
  }
  function Y() {
    a = this.value, r(2, a);
  }
  function L() {
    b = this.value, r(4, b);
  }
  function P() {
    h = Se(this), r(0, h), r(13, c);
  }
  function $() {
    g = this.checked, r(5, g);
  }
  function k() {
    o = this.checked, r(6, o);
  }
  function N() {
    f = this.checked, r(7, f);
  }
  return R.$$.update = () => {
    R.$$.dirty[0] & 2 && r(3, w = he(y)), R.$$.dirty[0] & 1 && r(18, d = zt(h || "1.99")), R.$$.dirty[0] & 262144 && r(10, i = d >= 17), R.$$.dirty[0] & 262144 && r(9, s = d >= 19), R.$$.dirty[0] & 8 && r(12, n = v(w)), R.$$.dirty[0] & 4 && r(11, l = Sn(a));
  }, [
    h,
    y,
    a,
    w,
    b,
    g,
    o,
    f,
    u,
    s,
    i,
    l,
    n,
    c,
    I,
    x,
    C,
    T,
    d,
    W,
    Y,
    L,
    P,
    $,
    k,
    N
  ];
}
class En extends ge {
  constructor(m) {
    super(), ye(this, m, Cn, In, ve, {}, null, [-1, -1]);
  }
}
export {
  En as default
};

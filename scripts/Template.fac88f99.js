import { S as Ie, i as Fe, s as Be, h as _e, b as Ne, c as kt, u as Re, o as Ot, p as Gt, d as Et, q as Ve, e as nt, t as Bt, a as lt, f as zt, g as H, n as Vt, k as q, r as Te, C as Ut, l as Kt, m as _t, D as Ue, E as ze, j as Jt, B as de, A as jt, y as Yt, v as fe, w as pe, x as me } from "./index.4deac2e0.js";
import ge from "./DownloadIcon.39c279f6.js";
import { d as Le, b as De, h as Me, i as Oe, j as Ge } from "./Api.280716b7.js";
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function be(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
function Pt(E) {
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
            var b = typeof Pt == "function" && Pt;
            if (!m && b)
              return b(p, !0);
            if (n)
              return n(p, !0);
            var w = new Error("Cannot find module '" + p + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var l = c[p] = { exports: {} };
          h[p][0].call(l.exports, function(g) {
            var s = h[p][1][g];
            return a(s || g);
          }, l, l.exports, e, h, c, r);
        }
        return c[p].exports;
      }
      for (var n = typeof Pt == "function" && Pt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, h, c) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var p, m, b, w, l, g, s, d = [], u = 0, y = o.length, C = y, R = r.getTypeOf(o) !== "string"; u < o.length; )
          C = y - u, b = R ? (p = o[u++], m = u < y ? o[u++] : 0, u < y ? o[u++] : 0) : (p = o.charCodeAt(u++), m = u < y ? o.charCodeAt(u++) : 0, u < y ? o.charCodeAt(u++) : 0), w = p >> 2, l = (3 & p) << 4 | m >> 4, g = 1 < C ? (15 & m) << 2 | b >> 6 : 64, s = 2 < C ? 63 & b : 64, d.push(n.charAt(w) + n.charAt(l) + n.charAt(g) + n.charAt(s));
        return d.join("");
      }, c.decode = function(o) {
        var p, m, b, w, l, g, s = 0, d = 0, u = "data:";
        if (o.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var y, C = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && C--, o.charAt(o.length - 2) === n.charAt(64) && C--, C % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (y = a.uint8array ? new Uint8Array(0 | C) : new Array(0 | C); s < o.length; )
          p = n.indexOf(o.charAt(s++)) << 2 | (w = n.indexOf(o.charAt(s++))) >> 4, m = (15 & w) << 4 | (l = n.indexOf(o.charAt(s++))) >> 2, b = (3 & l) << 6 | (g = n.indexOf(o.charAt(s++))), y[d++] = p, l !== 64 && (y[d++] = m), g !== 64 && (y[d++] = b);
        return y;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, h, c) {
      var r = e("./external"), a = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function p(m, b, w, l, g) {
        this.compressedSize = m, this.uncompressedSize = b, this.crc32 = w, this.compression = l, this.compressedContent = g;
      }
      p.prototype = { getContentWorker: function() {
        var m = new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), b = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, p.createWorkerFrom = function(m, b, w) {
        return m.pipe(new n()).pipe(new o("uncompressedSize")).pipe(b.compressWorker(w)).pipe(new o("compressedSize")).withStreamInfo("compression", b);
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
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(p, m, b, w) {
          var l = a, g = w + b;
          p ^= -1;
          for (var s = w; s < g; s++)
            p = p >>> 8 ^ l[255 & (p ^ m[s])];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : function(p, m, b, w) {
          var l = a, g = w + b;
          p ^= -1;
          for (var s = w; s < g; s++)
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
      function m(b, w) {
        o.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = w, this.meta = {};
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
        this._pako.onData = function(w) {
          b.push({ data: w, meta: b.meta });
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
      function a(l, g, s, d, u, y) {
        var C, R, _ = l.file, M = l.compression, L = y !== p.utf8encode, J = n.transformTo("string", y(_.name)), z = n.transformTo("string", p.utf8encode(_.name)), Y = _.comment, rt = n.transformTo("string", y(Y)), k = n.transformTo("string", p.utf8encode(Y)), T = z.length !== _.name.length, i = k.length !== Y.length, G = "", it = "", S = "", U = _.dir, B = _.date, P = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !s || (P.crc32 = l.crc32, P.compressedSize = l.compressedSize, P.uncompressedSize = l.uncompressedSize);
        var x = 0;
        g && (x |= 8), L || !T && !i || (x |= 2048);
        var I = 0, K = 0;
        U && (I |= 16), u === "UNIX" ? (K = 798, I |= function(X, ct) {
          var gt = X;
          return X || (gt = ct ? 16893 : 33204), (65535 & gt) << 16;
        }(_.unixPermissions, U)) : (K = 20, I |= function(X) {
          return 63 & (X || 0);
        }(_.dosPermissions)), C = B.getUTCHours(), C <<= 6, C |= B.getUTCMinutes(), C <<= 5, C |= B.getUTCSeconds() / 2, R = B.getUTCFullYear() - 1980, R <<= 4, R |= B.getUTCMonth() + 1, R <<= 5, R |= B.getUTCDate(), T && (it = r(1, 1) + r(m(J), 4) + z, G += "up" + r(it.length, 2) + it), i && (S = r(1, 1) + r(m(rt), 4) + k, G += "uc" + r(S.length, 2) + S);
        var j = "";
        return j += `
\0`, j += r(x, 2), j += M.magic, j += r(C, 2), j += r(R, 2), j += r(P.crc32, 4), j += r(P.compressedSize, 4), j += r(P.uncompressedSize, 4), j += r(J.length, 2), j += r(G.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + j + J + G, dirRecord: b.CENTRAL_FILE_HEADER + r(K, 2) + j + r(rt.length, 2) + "\0\0\0\0" + r(I, 4) + r(d, 4) + J + G + rt };
      }
      var n = e("../utils"), o = e("../stream/GenericWorker"), p = e("../utf8"), m = e("../crc32"), b = e("../signature");
      function w(l, g, s, d) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = s, this.encodeFileName = d, this.streamFiles = l, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(w, o), w.prototype.push = function(l) {
        var g = l.meta.percent || 0, s = this.entriesCount, d = this._sources.length;
        this.accumulate ? this.contentBuffer.push(l) : (this.bytesWritten += l.data.length, o.prototype.push.call(this, { data: l.data, meta: { currentFile: this.currentFile, percent: s ? (g + 100 * (s - d - 1)) / s : 100 } }));
      }, w.prototype.openedSource = function(l) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = l.file.name;
        var g = this.streamFiles && !l.file.dir;
        if (g) {
          var s = a(l, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: s.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, w.prototype.closedSource = function(l) {
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
      }, w.prototype.flush = function() {
        for (var l = this.bytesWritten, g = 0; g < this.dirRecords.length; g++)
          this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
        var s = this.bytesWritten - l, d = function(u, y, C, R, _) {
          var M = n.transformTo("string", _(R));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(u, 2) + r(u, 2) + r(y, 4) + r(C, 4) + r(M.length, 2) + M;
        }(this.dirRecords.length, s, l, this.zipComment, this.encodeFileName);
        this.push({ data: d, meta: { percent: 100 } });
      }, w.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, w.prototype.registerPrevious = function(l) {
        this._sources.push(l);
        var g = this;
        return l.on("data", function(s) {
          g.processChunk(s);
        }), l.on("end", function() {
          g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
        }), l.on("error", function(s) {
          g.error(s);
        }), this;
      }, w.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, w.prototype.error = function(l) {
        var g = this._sources;
        if (!o.prototype.error.call(this, l))
          return !1;
        for (var s = 0; s < g.length; s++)
          try {
            g[s].error(l);
          } catch {
          }
        return !0;
      }, w.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var l = this._sources, g = 0; g < l.length; g++)
          l[g].lock();
      }, h.exports = w;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, h, c) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      c.generateWorker = function(n, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), b = 0;
        try {
          n.forEach(function(w, l) {
            b++;
            var g = function(y, C) {
              var R = y || C, _ = r[R];
              if (!_)
                throw new Error(R + " is not a valid compression method !");
              return _;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, d = l.dir, u = l.date;
            l._compressWorker(g, s).withStreamInfo("file", { name: w, dir: d, date: u, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = b;
        } catch (w) {
          m.error(w);
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
      function b(w) {
        return new a.Promise(function(l, g) {
          var s = w.decompressed.getContentWorker().pipe(new p());
          s.on("error", function(d) {
            g(d);
          }).on("end", function() {
            s.streamInfo.crc32 !== w.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : l();
          }).resume();
        });
      }
      h.exports = function(w, l) {
        var g = this;
        return l = r.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(w) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", w, !0, l.optimizedBinaryString, l.base64).then(function(s) {
          var d = new o(l);
          return d.load(s), d;
        }).then(function(s) {
          var d = [a.Promise.resolve(s)], u = s.files;
          if (l.checkCRC32)
            for (var y = 0; y < u.length; y++)
              d.push(b(u[y]));
          return a.Promise.all(d);
        }).then(function(s) {
          for (var d = s.shift(), u = d.files, y = 0; y < u.length; y++) {
            var C = u[y], R = C.fileNameStr, _ = r.resolve(C.fileNameStr);
            g.file(_, C.decompressed, { binary: !0, optimizedBinaryString: !0, date: C.date, dir: C.dir, comment: C.fileCommentStr.length ? C.fileCommentStr : null, unixPermissions: C.unixPermissions, dosPermissions: C.dosPermissions, createFolders: l.createFolders }), C.dir || (g.file(_).unsafeOriginalName = R);
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
        n.on("data", function(b, w) {
          m.push(b) || m._helper.pause(), p && p(w);
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
      function r(_, M, L) {
        var J, z = n.getTypeOf(M), Y = n.extend(L || {}, m);
        Y.date = Y.date || /* @__PURE__ */ new Date(), Y.compression !== null && (Y.compression = Y.compression.toUpperCase()), typeof Y.unixPermissions == "string" && (Y.unixPermissions = parseInt(Y.unixPermissions, 8)), Y.unixPermissions && 16384 & Y.unixPermissions && (Y.dir = !0), Y.dosPermissions && 16 & Y.dosPermissions && (Y.dir = !0), Y.dir && (_ = u(_)), Y.createFolders && (J = d(_)) && y.call(this, J, !0);
        var rt = z === "string" && Y.binary === !1 && Y.base64 === !1;
        L && L.binary !== void 0 || (Y.binary = !rt), (M instanceof b && M.uncompressedSize === 0 || Y.dir || !M || M.length === 0) && (Y.base64 = !1, Y.binary = !0, M = "", Y.compression = "STORE", z = "string");
        var k = null;
        k = M instanceof b || M instanceof o ? M : g.isNode && g.isStream(M) ? new s(_, M) : n.prepareContent(_, M, Y.binary, Y.optimizedBinaryString, Y.base64);
        var T = new w(_, k, Y);
        this.files[_] = T;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), b = e("./compressedObject"), w = e("./zipObject"), l = e("./generate"), g = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), d = function(_) {
        _.slice(-1) === "/" && (_ = _.substring(0, _.length - 1));
        var M = _.lastIndexOf("/");
        return 0 < M ? _.substring(0, M) : "";
      }, u = function(_) {
        return _.slice(-1) !== "/" && (_ += "/"), _;
      }, y = function(_, M) {
        return M = M !== void 0 ? M : m.createFolders, _ = u(_), this.files[_] || r.call(this, _, null, { dir: !0, createFolders: M }), this.files[_];
      };
      function C(_) {
        return Object.prototype.toString.call(_) === "[object RegExp]";
      }
      var R = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(_) {
        var M, L, J;
        for (M in this.files)
          J = this.files[M], (L = M.slice(this.root.length, M.length)) && M.slice(0, this.root.length) === this.root && _(L, J);
      }, filter: function(_) {
        var M = [];
        return this.forEach(function(L, J) {
          _(L, J) && M.push(J);
        }), M;
      }, file: function(_, M, L) {
        if (arguments.length !== 1)
          return _ = this.root + _, r.call(this, _, M, L), this;
        if (C(_)) {
          var J = _;
          return this.filter(function(Y, rt) {
            return !rt.dir && J.test(Y);
          });
        }
        var z = this.files[this.root + _];
        return z && !z.dir ? z : null;
      }, folder: function(_) {
        if (!_)
          return this;
        if (C(_))
          return this.filter(function(z, Y) {
            return Y.dir && _.test(z);
          });
        var M = this.root + _, L = y.call(this, M), J = this.clone();
        return J.root = L.name, J;
      }, remove: function(_) {
        _ = this.root + _;
        var M = this.files[_];
        if (M || (_.slice(-1) !== "/" && (_ += "/"), M = this.files[_]), M && !M.dir)
          delete this.files[_];
        else
          for (var L = this.filter(function(z, Y) {
            return Y.name.slice(0, _.length) === _;
          }), J = 0; J < L.length; J++)
            delete this.files[L[J].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(_) {
        var M, L = {};
        try {
          if ((L = n.extend(_ || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = L.type.toLowerCase(), L.compression = L.compression.toUpperCase(), L.type === "binarystring" && (L.type = "string"), !L.type)
            throw new Error("No output type specified.");
          n.checkSupport(L.type), L.platform !== "darwin" && L.platform !== "freebsd" && L.platform !== "linux" && L.platform !== "sunos" || (L.platform = "UNIX"), L.platform === "win32" && (L.platform = "DOS");
          var J = L.comment || this.comment || "";
          M = l.generateWorker(this, L, J);
        } catch (z) {
          (M = new o("error")).error(z);
        }
        return new p(M, L.type || "string", L.mimeType);
      }, generateAsync: function(_, M) {
        return this.generateInternalStream(_).accumulate(M);
      }, generateNodeStream: function(_, M) {
        return (_ = _ || {}).type || (_.type = "nodebuffer"), this.generateInternalStream(_).toNodejsStream(M);
      } };
      h.exports = R;
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
        for (var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), b = n.charCodeAt(3), w = this.length - 4; 0 <= w; --w)
          if (this.data[w] === o && this.data[w + 1] === p && this.data[w + 2] === m && this.data[w + 3] === b)
            return w - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(n) {
        var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), b = n.charCodeAt(3), w = this.readData(4);
        return o === w[0] && p === w[1] && m === w[2] && b === w[3];
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
        var w = r.getTypeOf(b);
        return r.checkSupport(w), w !== "string" || a.uint8array ? w === "nodebuffer" ? new p(b) : a.uint8array ? new m(r.transformTo("uint8array", b)) : new n(r.transformTo("array", b)) : new o(b);
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
      function w(g, s) {
        return new m.Promise(function(d, u) {
          var y = [], C = g._internalType, R = g._outputType, _ = g._mimeType;
          g.on("data", function(M, L) {
            y.push(M), s && s(L);
          }).on("error", function(M) {
            y = [], u(M);
          }).on("end", function() {
            try {
              var M = function(L, J, z) {
                switch (L) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", J), z);
                  case "base64":
                    return o.encode(J);
                  default:
                    return r.transformTo(L, J);
                }
              }(R, function(L, J) {
                var z, Y = 0, rt = null, k = 0;
                for (z = 0; z < J.length; z++)
                  k += J[z].length;
                switch (L) {
                  case "string":
                    return J.join("");
                  case "array":
                    return Array.prototype.concat.apply([], J);
                  case "uint8array":
                    for (rt = new Uint8Array(k), z = 0; z < J.length; z++)
                      rt.set(J[z], Y), Y += J[z].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(J);
                  default:
                    throw new Error("concat : unsupported type '" + L + "'");
                }
              }(C, y), _);
              d(M);
            } catch (L) {
              u(L);
            }
            y = [];
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
        } catch (y) {
          this._worker = new n("error"), this._worker.error(y);
        }
      }
      l.prototype = { accumulate: function(g) {
        return w(this, g);
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
      function w() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(l) {
        return a.nodebuffer ? n.newBufferFrom(l, "utf-8") : function(g) {
          var s, d, u, y, C, R = g.length, _ = 0;
          for (y = 0; y < R; y++)
            (64512 & (d = g.charCodeAt(y))) == 55296 && y + 1 < R && (64512 & (u = g.charCodeAt(y + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), y++), _ += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(_) : new Array(_), y = C = 0; C < _; y++)
            (64512 & (d = g.charCodeAt(y))) == 55296 && y + 1 < R && (64512 & (u = g.charCodeAt(y + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), y++), d < 128 ? s[C++] = d : (d < 2048 ? s[C++] = 192 | d >>> 6 : (d < 65536 ? s[C++] = 224 | d >>> 12 : (s[C++] = 240 | d >>> 18, s[C++] = 128 | d >>> 12 & 63), s[C++] = 128 | d >>> 6 & 63), s[C++] = 128 | 63 & d);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(g) {
          var s, d, u, y, C = g.length, R = new Array(2 * C);
          for (s = d = 0; s < C; )
            if ((u = g[s++]) < 128)
              R[d++] = u;
            else if (4 < (y = p[u]))
              R[d++] = 65533, s += y - 1;
            else {
              for (u &= y === 2 ? 31 : y === 3 ? 15 : 7; 1 < y && s < C; )
                u = u << 6 | 63 & g[s++], y--;
              1 < y ? R[d++] = 65533 : u < 65536 ? R[d++] = u : (u -= 65536, R[d++] = 55296 | u >> 10 & 1023, R[d++] = 56320 | 1023 & u);
            }
          return R.length !== d && (R.subarray ? R = R.subarray(0, d) : R.length = d), r.applyFromCharCode(R);
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
        var d = function(y, C) {
          var R;
          for ((C = C || y.length) > y.length && (C = y.length), R = C - 1; 0 <= R && (192 & y[R]) == 128; )
            R--;
          return R < 0 || R === 0 ? C : R + p[y[R]] > C ? R : C;
        }(g), u = g;
        d !== g.length && (a.uint8array ? (u = g.subarray(0, d), this.leftOver = g.subarray(d, g.length)) : (u = g.slice(0, d), this.leftOver = g.slice(d, g.length))), this.push({ data: c.utf8decode(u), meta: l.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = b, r.inherits(w, o), w.prototype.processChunk = function(l) {
        this.push({ data: c.utf8encode(l.data), meta: l.meta });
      }, c.Utf8EncodeWorker = w;
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
        var y = [], C = 0, R = s.length;
        if (R <= u)
          return String.fromCharCode.apply(null, s);
        for (; C < R; )
          d === "array" || d === "nodebuffer" ? y.push(String.fromCharCode.apply(null, s.slice(C, Math.min(C + u, R)))) : y.push(String.fromCharCode.apply(null, s.subarray(C, Math.min(C + u, R)))), C += u;
        return y.join("");
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
      function w(s) {
        var d = 65536, u = c.getTypeOf(s), y = !0;
        if (u === "uint8array" ? y = b.applyCanBeUsed.uint8array : u === "nodebuffer" && (y = b.applyCanBeUsed.nodebuffer), y)
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
      c.applyFromCharCode = w;
      var g = {};
      g.string = { string: p, array: function(s) {
        return m(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return g.string.uint8array(s).buffer;
      }, uint8array: function(s) {
        return m(s, new Uint8Array(s.length));
      }, nodebuffer: function(s) {
        return m(s, n.allocBuffer(s.length));
      } }, g.array = { string: w, array: p, arraybuffer: function(s) {
        return new Uint8Array(s).buffer;
      }, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.arraybuffer = { string: function(s) {
        return w(new Uint8Array(s));
      }, array: function(s) {
        return l(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: p, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(new Uint8Array(s));
      } }, g.uint8array = { string: w, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: p, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.nodebuffer = { string: w, array: function(s) {
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
        for (var d = s.split("/"), u = [], y = 0; y < d.length; y++) {
          var C = d[y];
          C === "." || C === "" && y !== 0 && y !== d.length - 1 || (C === ".." ? u.pop() : u.push(C));
        }
        return u.join("/");
      }, c.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(s) {
        var d, u, y = "";
        for (u = 0; u < (s || "").length; u++)
          y += "\\x" + ((d = s.charCodeAt(u)) < 16 ? "0" : "") + d.toString(16).toUpperCase();
        return y;
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
      }, c.prepareContent = function(s, d, u, y, C) {
        return o.Promise.resolve(d).then(function(R) {
          return r.blob && (R instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(R)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(_, M) {
            var L = new FileReader();
            L.onload = function(J) {
              _(J.target.result);
            }, L.onerror = function(J) {
              M(J.target.error);
            }, L.readAsArrayBuffer(R);
          }) : R;
        }).then(function(R) {
          var _ = c.getTypeOf(R);
          return _ ? (_ === "arraybuffer" ? R = c.transformTo("uint8array", R) : _ === "string" && (C ? R = a.decode(R) : u && y !== !0 && (R = function(M) {
            return m(M, r.uint8array ? new Uint8Array(M.length) : new Array(M.length));
          }(R))), R) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
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
          var w = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(w) + ", expected " + a.pretty(b) + ")");
        }
      }, isSignature: function(b, w) {
        var l = this.reader.index;
        this.reader.setIndex(b);
        var g = this.reader.readString(4) === w;
        return this.reader.setIndex(l), g;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), w = p.uint8array ? "uint8array" : "array", l = a.transformTo(w, b);
        this.zipComment = this.loadOptions.decodeFileName(l);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, w, l, g = this.zip64EndOfCentralSize - 44; 0 < g; )
          b = this.reader.readInt(2), w = this.reader.readInt(4), l = this.reader.readData(w), this.zip64ExtensibleData[b] = { id: b, length: w, value: l };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, w;
        for (b = 0; b < this.files.length; b++)
          w = this.files[b], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
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
        var w = b;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var l = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (l += 20, l += 12 + this.zip64EndOfCentralSize);
        var g = w - l;
        if (0 < g)
          this.isSignature(w, n.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
        else if (g < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = r(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./compressedObject"), o = e("./crc32"), p = e("./utf8"), m = e("./compressions"), b = e("./support");
      function w(l, g) {
        this.options = l, this.loadOptions = g;
      }
      w.prototype = { isEncrypted: function() {
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
      } }, h.exports = w;
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
          var y = !this._dataBinary;
          y && !u && (s = s.pipe(new o.Utf8EncodeWorker())), !y && u && (s = s.pipe(new o.Utf8DecodeWorker()));
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
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, l = 0; l < b.length; l++)
        r.prototype[b[l]] = w;
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
          var w = new r.MessageChannel();
          w.port1.onmessage = g, a = function() {
            w.port2.postMessage(0);
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
      }).call(this, typeof Rt < "u" ? Rt : typeof self < "u" ? self : typeof window < "u" ? window : {});
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
      function w(u, y, C) {
        this.promise = u, typeof y == "function" && (this.onFulfilled = y, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      function l(u, y, C) {
        r(function() {
          var R;
          try {
            R = y(C);
          } catch (_) {
            return n.reject(u, _);
          }
          R === u ? n.reject(u, new TypeError("Cannot resolve promise with itself")) : n.resolve(u, R);
        });
      }
      function g(u) {
        var y = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof y == "function")
          return function() {
            y.apply(u, arguments);
          };
      }
      function s(u, y) {
        var C = !1;
        function R(L) {
          C || (C = !0, n.reject(u, L));
        }
        function _(L) {
          C || (C = !0, n.resolve(u, L));
        }
        var M = d(function() {
          y(_, R);
        });
        M.status === "error" && R(M.value);
      }
      function d(u, y) {
        var C = {};
        try {
          C.value = u(y), C.status = "success";
        } catch (R) {
          C.status = "error", C.value = R;
        }
        return C;
      }
      (h.exports = b).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var y = this.constructor;
        return this.then(function(C) {
          return y.resolve(u()).then(function() {
            return C;
          });
        }, function(C) {
          return y.resolve(u()).then(function() {
            throw C;
          });
        });
      }, b.prototype.catch = function(u) {
        return this.then(null, u);
      }, b.prototype.then = function(u, y) {
        if (typeof u != "function" && this.state === p || typeof y != "function" && this.state === o)
          return this;
        var C = new this.constructor(a);
        return this.state !== m ? l(C, this.state === p ? u : y, this.outcome) : this.queue.push(new w(C, u, y)), C;
      }, w.prototype.callFulfilled = function(u) {
        n.resolve(this.promise, u);
      }, w.prototype.otherCallFulfilled = function(u) {
        l(this.promise, this.onFulfilled, u);
      }, w.prototype.callRejected = function(u) {
        n.reject(this.promise, u);
      }, w.prototype.otherCallRejected = function(u) {
        l(this.promise, this.onRejected, u);
      }, n.resolve = function(u, y) {
        var C = d(g, y);
        if (C.status === "error")
          return n.reject(u, C.value);
        var R = C.value;
        if (R)
          s(u, R);
        else {
          u.state = p, u.outcome = y;
          for (var _ = -1, M = u.queue.length; ++_ < M; )
            u.queue[_].callFulfilled(y);
        }
        return u;
      }, n.reject = function(u, y) {
        u.state = o, u.outcome = y;
        for (var C = -1, R = u.queue.length; ++C < R; )
          u.queue[C].callRejected(y);
        return u;
      }, b.resolve = function(u) {
        return u instanceof this ? u : n.resolve(new this(a), u);
      }, b.reject = function(u) {
        var y = new this(a);
        return n.reject(y, u);
      }, b.all = function(u) {
        var y = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = u.length, R = !1;
        if (!C)
          return this.resolve([]);
        for (var _ = new Array(C), M = 0, L = -1, J = new this(a); ++L < C; )
          z(u[L], L);
        return J;
        function z(Y, rt) {
          y.resolve(Y).then(function(k) {
            _[rt] = k, ++M !== C || R || (R = !0, n.resolve(J, _));
          }, function(k) {
            R || (R = !0, n.reject(J, k));
          });
        }
      }, b.race = function(u) {
        var y = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = u.length, R = !1;
        if (!C)
          return this.resolve([]);
        for (var _ = -1, M = new this(a); ++_ < C; )
          L = u[_], y.resolve(L).then(function(J) {
            R || (R = !0, n.resolve(M, J));
          }, function(J) {
            R || (R = !0, n.reject(M, J));
          });
        var L;
        return M;
      };
    }, { immediate: 36 }], 38: [function(e, h, c) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), h.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, h, c) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, b = 0, w = -1, l = 0, g = 8;
      function s(u) {
        if (!(this instanceof s))
          return new s(u);
        this.options = a.assign({ level: w, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, u || {});
        var y = this.options;
        y.raw && 0 < y.windowBits ? y.windowBits = -y.windowBits : y.gzip && 0 < y.windowBits && y.windowBits < 16 && (y.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var C = r.deflateInit2(this.strm, y.level, y.method, y.windowBits, y.memLevel, y.strategy);
        if (C !== b)
          throw new Error(o[C]);
        if (y.header && r.deflateSetHeader(this.strm, y.header), y.dictionary) {
          var R;
          if (R = typeof y.dictionary == "string" ? n.string2buf(y.dictionary) : m.call(y.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(y.dictionary) : y.dictionary, (C = r.deflateSetDictionary(this.strm, R)) !== b)
            throw new Error(o[C]);
          this._dict_set = !0;
        }
      }
      function d(u, y) {
        var C = new s(y);
        if (C.push(u, !0), C.err)
          throw C.msg || o[C.err];
        return C.result;
      }
      s.prototype.push = function(u, y) {
        var C, R, _ = this.strm, M = this.options.chunkSize;
        if (this.ended)
          return !1;
        R = y === ~~y ? y : y === !0 ? 4 : 0, typeof u == "string" ? _.input = n.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? _.input = new Uint8Array(u) : _.input = u, _.next_in = 0, _.avail_in = _.input.length;
        do {
          if (_.avail_out === 0 && (_.output = new a.Buf8(M), _.next_out = 0, _.avail_out = M), (C = r.deflate(_, R)) !== 1 && C !== b)
            return this.onEnd(C), !(this.ended = !0);
          _.avail_out !== 0 && (_.avail_in !== 0 || R !== 4 && R !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(_.output, _.next_out))) : this.onData(a.shrinkBuf(_.output, _.next_out)));
        } while ((0 < _.avail_in || _.avail_out === 0) && C !== 1);
        return R === 4 ? (C = r.deflateEnd(this.strm), this.onEnd(C), this.ended = !0, C === b) : R !== 2 || (this.onEnd(b), !(_.avail_out = 0));
      }, s.prototype.onData = function(u) {
        this.chunks.push(u);
      }, s.prototype.onEnd = function(u) {
        u === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = s, c.deflate = d, c.deflateRaw = function(u, y) {
        return (y = y || {}).raw = !0, d(u, y);
      }, c.gzip = function(u, y) {
        return (y = y || {}).gzip = !0, d(u, y);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, h, c) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), b = e("./zlib/gzheader"), w = Object.prototype.toString;
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
        var u, y, C, R, _, M, L = this.strm, J = this.options.chunkSize, z = this.options.dictionary, Y = !1;
        if (this.ended)
          return !1;
        y = d === ~~d ? d : d === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? L.input = n.binstring2buf(s) : w.call(s) === "[object ArrayBuffer]" ? L.input = new Uint8Array(s) : L.input = s, L.next_in = 0, L.avail_in = L.input.length;
        do {
          if (L.avail_out === 0 && (L.output = new a.Buf8(J), L.next_out = 0, L.avail_out = J), (u = r.inflate(L, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && z && (M = typeof z == "string" ? n.string2buf(z) : w.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, u = r.inflateSetDictionary(this.strm, M)), u === o.Z_BUF_ERROR && Y === !0 && (u = o.Z_OK, Y = !1), u !== o.Z_STREAM_END && u !== o.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          L.next_out && (L.avail_out !== 0 && u !== o.Z_STREAM_END && (L.avail_in !== 0 || y !== o.Z_FINISH && y !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (C = n.utf8border(L.output, L.next_out), R = L.next_out - C, _ = n.buf2string(L.output, C), L.next_out = R, L.avail_out = J - R, R && a.arraySet(L.output, L.output, C, R, 0), this.onData(_)) : this.onData(a.shrinkBuf(L.output, L.next_out)))), L.avail_in === 0 && L.avail_out === 0 && (Y = !0);
        } while ((0 < L.avail_in || L.avail_out === 0) && u !== o.Z_STREAM_END);
        return u === o.Z_STREAM_END && (y = o.Z_FINISH), y === o.Z_FINISH ? (u = r.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === o.Z_OK) : y !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(L.avail_out = 0));
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
      var a = { arraySet: function(o, p, m, b, w) {
        if (p.subarray && o.subarray)
          o.set(p.subarray(m, m + b), w);
        else
          for (var l = 0; l < b; l++)
            o[w + l] = p[m + l];
      }, flattenChunks: function(o) {
        var p, m, b, w, l, g;
        for (p = b = 0, m = o.length; p < m; p++)
          b += o[p].length;
        for (g = new Uint8Array(b), p = w = 0, m = o.length; p < m; p++)
          l = o[p], g.set(l, w), w += l.length;
        return g;
      } }, n = { arraySet: function(o, p, m, b, w) {
        for (var l = 0; l < b; l++)
          o[w + l] = p[m + l];
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
      function m(b, w) {
        if (w < 65537 && (b.subarray && n || !b.subarray && a))
          return String.fromCharCode.apply(null, r.shrinkBuf(b, w));
        for (var l = "", g = 0; g < w; g++)
          l += String.fromCharCode(b[g]);
        return l;
      }
      o[254] = o[254] = 1, c.string2buf = function(b) {
        var w, l, g, s, d, u = b.length, y = 0;
        for (s = 0; s < u; s++)
          (64512 & (l = b.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = b.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), y += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (w = new r.Buf8(y), s = d = 0; d < y; s++)
          (64512 & (l = b.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = b.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), l < 128 ? w[d++] = l : (l < 2048 ? w[d++] = 192 | l >>> 6 : (l < 65536 ? w[d++] = 224 | l >>> 12 : (w[d++] = 240 | l >>> 18, w[d++] = 128 | l >>> 12 & 63), w[d++] = 128 | l >>> 6 & 63), w[d++] = 128 | 63 & l);
        return w;
      }, c.buf2binstring = function(b) {
        return m(b, b.length);
      }, c.binstring2buf = function(b) {
        for (var w = new r.Buf8(b.length), l = 0, g = w.length; l < g; l++)
          w[l] = b.charCodeAt(l);
        return w;
      }, c.buf2string = function(b, w) {
        var l, g, s, d, u = w || b.length, y = new Array(2 * u);
        for (l = g = 0; l < u; )
          if ((s = b[l++]) < 128)
            y[g++] = s;
          else if (4 < (d = o[s]))
            y[g++] = 65533, l += d - 1;
          else {
            for (s &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && l < u; )
              s = s << 6 | 63 & b[l++], d--;
            1 < d ? y[g++] = 65533 : s < 65536 ? y[g++] = s : (s -= 65536, y[g++] = 55296 | s >> 10 & 1023, y[g++] = 56320 | 1023 & s);
          }
        return m(y, g);
      }, c.utf8border = function(b, w) {
        var l;
        for ((w = w || b.length) > b.length && (w = b.length), l = w - 1; 0 <= l && (192 & b[l]) == 128; )
          l--;
        return l < 0 || l === 0 ? w : l + o[b[l]] > w ? l : w;
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
        for (var w = p; w < b; w++)
          a = a >>> 8 ^ m[255 & (a ^ n[w])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, h, c) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), b = 0, w = 4, l = 0, g = -2, s = -1, d = 4, u = 2, y = 8, C = 9, R = 286, _ = 30, M = 19, L = 2 * R + 1, J = 15, z = 3, Y = 258, rt = Y + z + 1, k = 42, T = 113, i = 1, G = 2, it = 3, S = 4;
      function U(t, O) {
        return t.msg = m[O], O;
      }
      function B(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function P(t) {
        for (var O = t.length; 0 <= --O; )
          t[O] = 0;
      }
      function x(t) {
        var O = t.state, V = O.pending;
        V > t.avail_out && (V = t.avail_out), V !== 0 && (a.arraySet(t.output, O.pending_buf, O.pending_out, V, t.next_out), t.next_out += V, O.pending_out += V, t.total_out += V, t.avail_out -= V, O.pending -= V, O.pending === 0 && (O.pending_out = 0));
      }
      function I(t, O) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, O), t.block_start = t.strstart, x(t.strm);
      }
      function K(t, O) {
        t.pending_buf[t.pending++] = O;
      }
      function j(t, O) {
        t.pending_buf[t.pending++] = O >>> 8 & 255, t.pending_buf[t.pending++] = 255 & O;
      }
      function X(t, O) {
        var V, v, A = t.max_chain_length, F = t.strstart, W = t.prev_length, D = t.nice_match, N = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, Z = t.window, $ = t.w_mask, Q = t.prev, tt = t.strstart + Y, ht = Z[F + W - 1], st = Z[F + W];
        t.prev_length >= t.good_match && (A >>= 2), D > t.lookahead && (D = t.lookahead);
        do
          if (Z[(V = O) + W] === st && Z[V + W - 1] === ht && Z[V] === Z[F] && Z[++V] === Z[F + 1]) {
            F += 2, V++;
            do
              ;
            while (Z[++F] === Z[++V] && Z[++F] === Z[++V] && Z[++F] === Z[++V] && Z[++F] === Z[++V] && Z[++F] === Z[++V] && Z[++F] === Z[++V] && Z[++F] === Z[++V] && Z[++F] === Z[++V] && F < tt);
            if (v = Y - (tt - F), F = tt - Y, W < v) {
              if (t.match_start = O, D <= (W = v))
                break;
              ht = Z[F + W - 1], st = Z[F + W];
            }
          }
        while ((O = Q[O & $]) > N && --A != 0);
        return W <= t.lookahead ? W : t.lookahead;
      }
      function ct(t) {
        var O, V, v, A, F, W, D, N, Z, $, Q = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= Q + (Q - rt)) {
            for (a.arraySet(t.window, t.window, Q, Q, 0), t.match_start -= Q, t.strstart -= Q, t.block_start -= Q, O = V = t.hash_size; v = t.head[--O], t.head[O] = Q <= v ? v - Q : 0, --V; )
              ;
            for (O = V = Q; v = t.prev[--O], t.prev[O] = Q <= v ? v - Q : 0, --V; )
              ;
            A += Q;
          }
          if (t.strm.avail_in === 0)
            break;
          if (W = t.strm, D = t.window, N = t.strstart + t.lookahead, Z = A, $ = void 0, $ = W.avail_in, Z < $ && ($ = Z), V = $ === 0 ? 0 : (W.avail_in -= $, a.arraySet(D, W.input, W.next_in, $, N), W.state.wrap === 1 ? W.adler = o(W.adler, D, $, N) : W.state.wrap === 2 && (W.adler = p(W.adler, D, $, N)), W.next_in += $, W.total_in += $, $), t.lookahead += V, t.lookahead + t.insert >= z)
            for (F = t.strstart - t.insert, t.ins_h = t.window[F], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[F + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[F + z - 1]) & t.hash_mask, t.prev[F & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = F, F++, t.insert--, !(t.lookahead + t.insert < z)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function gt(t, O) {
        for (var V, v; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && O === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (V = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), V !== 0 && t.strstart - V <= t.w_size - rt && (t.match_length = X(t, V)), t.match_length >= z)
            if (v = n._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            v = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (v && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, O === w ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : G;
      }
      function ot(t, O) {
        for (var V, v, A; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && O === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (V = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, V !== 0 && t.prev_length < t.max_lazy_match && t.strstart - V <= t.w_size - rt && (t.match_length = X(t, V), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - z, v = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, v && (I(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((v = n._tr_tally(t, 0, t.window[t.strstart - 1])) && I(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (v = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, O === w ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : G;
      }
      function at(t, O, V, v, A) {
        this.good_length = t, this.max_lazy = O, this.nice_length = V, this.max_chain = v, this.func = A;
      }
      function ft() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * L), this.dyn_dtree = new a.Buf16(2 * (2 * _ + 1)), this.bl_tree = new a.Buf16(2 * (2 * M + 1)), P(this.dyn_ltree), P(this.dyn_dtree), P(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(J + 1), this.heap = new a.Buf16(2 * R + 1), P(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * R + 1), P(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ut(t) {
        var O;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (O = t.state).pending = 0, O.pending_out = 0, O.wrap < 0 && (O.wrap = -O.wrap), O.status = O.wrap ? k : T, t.adler = O.wrap === 2 ? 0 : 1, O.last_flush = b, n._tr_init(O), l) : U(t, g);
      }
      function mt(t) {
        var O = ut(t);
        return O === l && function(V) {
          V.window_size = 2 * V.w_size, P(V.head), V.max_lazy_match = r[V.level].max_lazy, V.good_match = r[V.level].good_length, V.nice_match = r[V.level].nice_length, V.max_chain_length = r[V.level].max_chain, V.strstart = 0, V.block_start = 0, V.lookahead = 0, V.insert = 0, V.match_length = V.prev_length = z - 1, V.match_available = 0, V.ins_h = 0;
        }(t.state), O;
      }
      function wt(t, O, V, v, A, F) {
        if (!t)
          return g;
        var W = 1;
        if (O === s && (O = 6), v < 0 ? (W = 0, v = -v) : 15 < v && (W = 2, v -= 16), A < 1 || C < A || V !== y || v < 8 || 15 < v || O < 0 || 9 < O || F < 0 || d < F)
          return U(t, g);
        v === 8 && (v = 9);
        var D = new ft();
        return (t.state = D).strm = t, D.wrap = W, D.gzhead = null, D.w_bits = v, D.w_size = 1 << D.w_bits, D.w_mask = D.w_size - 1, D.hash_bits = A + 7, D.hash_size = 1 << D.hash_bits, D.hash_mask = D.hash_size - 1, D.hash_shift = ~~((D.hash_bits + z - 1) / z), D.window = new a.Buf8(2 * D.w_size), D.head = new a.Buf16(D.hash_size), D.prev = new a.Buf16(D.w_size), D.lit_bufsize = 1 << A + 6, D.pending_buf_size = 4 * D.lit_bufsize, D.pending_buf = new a.Buf8(D.pending_buf_size), D.d_buf = 1 * D.lit_bufsize, D.l_buf = 3 * D.lit_bufsize, D.level = O, D.strategy = F, D.method = V, mt(t);
      }
      r = [new at(0, 0, 0, 0, function(t, O) {
        var V = 65535;
        for (V > t.pending_buf_size - 5 && (V = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ct(t), t.lookahead === 0 && O === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var v = t.block_start + V;
          if ((t.strstart === 0 || t.strstart >= v) && (t.lookahead = t.strstart - v, t.strstart = v, I(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, O === w ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : (t.strstart > t.block_start && (I(t, !1), t.strm.avail_out), i);
      }), new at(4, 4, 8, 4, gt), new at(4, 5, 16, 8, gt), new at(4, 6, 32, 32, gt), new at(4, 4, 16, 16, ot), new at(8, 16, 32, 32, ot), new at(8, 16, 128, 128, ot), new at(8, 32, 128, 256, ot), new at(32, 128, 258, 1024, ot), new at(32, 258, 258, 4096, ot)], c.deflateInit = function(t, O) {
        return wt(t, O, y, 15, 8, 0);
      }, c.deflateInit2 = wt, c.deflateReset = mt, c.deflateResetKeep = ut, c.deflateSetHeader = function(t, O) {
        return t && t.state ? t.state.wrap !== 2 ? g : (t.state.gzhead = O, l) : g;
      }, c.deflate = function(t, O) {
        var V, v, A, F;
        if (!t || !t.state || 5 < O || O < 0)
          return t ? U(t, g) : g;
        if (v = t.state, !t.output || !t.input && t.avail_in !== 0 || v.status === 666 && O !== w)
          return U(t, t.avail_out === 0 ? -5 : g);
        if (v.strm = t, V = v.last_flush, v.last_flush = O, v.status === k)
          if (v.wrap === 2)
            t.adler = 0, K(v, 31), K(v, 139), K(v, 8), v.gzhead ? (K(v, (v.gzhead.text ? 1 : 0) + (v.gzhead.hcrc ? 2 : 0) + (v.gzhead.extra ? 4 : 0) + (v.gzhead.name ? 8 : 0) + (v.gzhead.comment ? 16 : 0)), K(v, 255 & v.gzhead.time), K(v, v.gzhead.time >> 8 & 255), K(v, v.gzhead.time >> 16 & 255), K(v, v.gzhead.time >> 24 & 255), K(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), K(v, 255 & v.gzhead.os), v.gzhead.extra && v.gzhead.extra.length && (K(v, 255 & v.gzhead.extra.length), K(v, v.gzhead.extra.length >> 8 & 255)), v.gzhead.hcrc && (t.adler = p(t.adler, v.pending_buf, v.pending, 0)), v.gzindex = 0, v.status = 69) : (K(v, 0), K(v, 0), K(v, 0), K(v, 0), K(v, 0), K(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), K(v, 3), v.status = T);
          else {
            var W = y + (v.w_bits - 8 << 4) << 8;
            W |= (2 <= v.strategy || v.level < 2 ? 0 : v.level < 6 ? 1 : v.level === 6 ? 2 : 3) << 6, v.strstart !== 0 && (W |= 32), W += 31 - W % 31, v.status = T, j(v, W), v.strstart !== 0 && (j(v, t.adler >>> 16), j(v, 65535 & t.adler)), t.adler = 1;
          }
        if (v.status === 69)
          if (v.gzhead.extra) {
            for (A = v.pending; v.gzindex < (65535 & v.gzhead.extra.length) && (v.pending !== v.pending_buf_size || (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending !== v.pending_buf_size)); )
              K(v, 255 & v.gzhead.extra[v.gzindex]), v.gzindex++;
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), v.gzindex === v.gzhead.extra.length && (v.gzindex = 0, v.status = 73);
          } else
            v.status = 73;
        if (v.status === 73)
          if (v.gzhead.name) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending === v.pending_buf_size)) {
                F = 1;
                break;
              }
              F = v.gzindex < v.gzhead.name.length ? 255 & v.gzhead.name.charCodeAt(v.gzindex++) : 0, K(v, F);
            } while (F !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), F === 0 && (v.gzindex = 0, v.status = 91);
          } else
            v.status = 91;
        if (v.status === 91)
          if (v.gzhead.comment) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending === v.pending_buf_size)) {
                F = 1;
                break;
              }
              F = v.gzindex < v.gzhead.comment.length ? 255 & v.gzhead.comment.charCodeAt(v.gzindex++) : 0, K(v, F);
            } while (F !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), F === 0 && (v.status = 103);
          } else
            v.status = 103;
        if (v.status === 103 && (v.gzhead.hcrc ? (v.pending + 2 > v.pending_buf_size && x(t), v.pending + 2 <= v.pending_buf_size && (K(v, 255 & t.adler), K(v, t.adler >> 8 & 255), t.adler = 0, v.status = T)) : v.status = T), v.pending !== 0) {
          if (x(t), t.avail_out === 0)
            return v.last_flush = -1, l;
        } else if (t.avail_in === 0 && B(O) <= B(V) && O !== w)
          return U(t, -5);
        if (v.status === 666 && t.avail_in !== 0)
          return U(t, -5);
        if (t.avail_in !== 0 || v.lookahead !== 0 || O !== b && v.status !== 666) {
          var D = v.strategy === 2 ? function(N, Z) {
            for (var $; ; ) {
              if (N.lookahead === 0 && (ct(N), N.lookahead === 0)) {
                if (Z === b)
                  return i;
                break;
              }
              if (N.match_length = 0, $ = n._tr_tally(N, 0, N.window[N.strstart]), N.lookahead--, N.strstart++, $ && (I(N, !1), N.strm.avail_out === 0))
                return i;
            }
            return N.insert = 0, Z === w ? (I(N, !0), N.strm.avail_out === 0 ? it : S) : N.last_lit && (I(N, !1), N.strm.avail_out === 0) ? i : G;
          }(v, O) : v.strategy === 3 ? function(N, Z) {
            for (var $, Q, tt, ht, st = N.window; ; ) {
              if (N.lookahead <= Y) {
                if (ct(N), N.lookahead <= Y && Z === b)
                  return i;
                if (N.lookahead === 0)
                  break;
              }
              if (N.match_length = 0, N.lookahead >= z && 0 < N.strstart && (Q = st[tt = N.strstart - 1]) === st[++tt] && Q === st[++tt] && Q === st[++tt]) {
                ht = N.strstart + Y;
                do
                  ;
                while (Q === st[++tt] && Q === st[++tt] && Q === st[++tt] && Q === st[++tt] && Q === st[++tt] && Q === st[++tt] && Q === st[++tt] && Q === st[++tt] && tt < ht);
                N.match_length = Y - (ht - tt), N.match_length > N.lookahead && (N.match_length = N.lookahead);
              }
              if (N.match_length >= z ? ($ = n._tr_tally(N, 1, N.match_length - z), N.lookahead -= N.match_length, N.strstart += N.match_length, N.match_length = 0) : ($ = n._tr_tally(N, 0, N.window[N.strstart]), N.lookahead--, N.strstart++), $ && (I(N, !1), N.strm.avail_out === 0))
                return i;
            }
            return N.insert = 0, Z === w ? (I(N, !0), N.strm.avail_out === 0 ? it : S) : N.last_lit && (I(N, !1), N.strm.avail_out === 0) ? i : G;
          }(v, O) : r[v.level].func(v, O);
          if (D !== it && D !== S || (v.status = 666), D === i || D === it)
            return t.avail_out === 0 && (v.last_flush = -1), l;
          if (D === G && (O === 1 ? n._tr_align(v) : O !== 5 && (n._tr_stored_block(v, 0, 0, !1), O === 3 && (P(v.head), v.lookahead === 0 && (v.strstart = 0, v.block_start = 0, v.insert = 0))), x(t), t.avail_out === 0))
            return v.last_flush = -1, l;
        }
        return O !== w ? l : v.wrap <= 0 ? 1 : (v.wrap === 2 ? (K(v, 255 & t.adler), K(v, t.adler >> 8 & 255), K(v, t.adler >> 16 & 255), K(v, t.adler >> 24 & 255), K(v, 255 & t.total_in), K(v, t.total_in >> 8 & 255), K(v, t.total_in >> 16 & 255), K(v, t.total_in >> 24 & 255)) : (j(v, t.adler >>> 16), j(v, 65535 & t.adler)), x(t), 0 < v.wrap && (v.wrap = -v.wrap), v.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var O;
        return t && t.state ? (O = t.state.status) !== k && O !== 69 && O !== 73 && O !== 91 && O !== 103 && O !== T && O !== 666 ? U(t, g) : (t.state = null, O === T ? U(t, -3) : l) : g;
      }, c.deflateSetDictionary = function(t, O) {
        var V, v, A, F, W, D, N, Z, $ = O.length;
        if (!t || !t.state || (F = (V = t.state).wrap) === 2 || F === 1 && V.status !== k || V.lookahead)
          return g;
        for (F === 1 && (t.adler = o(t.adler, O, $, 0)), V.wrap = 0, $ >= V.w_size && (F === 0 && (P(V.head), V.strstart = 0, V.block_start = 0, V.insert = 0), Z = new a.Buf8(V.w_size), a.arraySet(Z, O, $ - V.w_size, V.w_size, 0), O = Z, $ = V.w_size), W = t.avail_in, D = t.next_in, N = t.input, t.avail_in = $, t.next_in = 0, t.input = O, ct(V); V.lookahead >= z; ) {
          for (v = V.strstart, A = V.lookahead - (z - 1); V.ins_h = (V.ins_h << V.hash_shift ^ V.window[v + z - 1]) & V.hash_mask, V.prev[v & V.w_mask] = V.head[V.ins_h], V.head[V.ins_h] = v, v++, --A; )
            ;
          V.strstart = v, V.lookahead = z - 1, ct(V);
        }
        return V.strstart += V.lookahead, V.block_start = V.strstart, V.insert = V.lookahead, V.lookahead = 0, V.match_length = V.prev_length = z - 1, V.match_available = 0, t.next_in = D, t.input = N, t.avail_in = W, V.wrap = F, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, c) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, c) {
      h.exports = function(r, a) {
        var n, o, p, m, b, w, l, g, s, d, u, y, C, R, _, M, L, J, z, Y, rt, k, T, i, G;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, G = r.output, b = m - (a - r.avail_out), w = m + (r.avail_out - 257), l = n.dmax, g = n.wsize, s = n.whave, d = n.wnext, u = n.window, y = n.hold, C = n.bits, R = n.lencode, _ = n.distcode, M = (1 << n.lenbits) - 1, L = (1 << n.distbits) - 1;
        t:
          do {
            C < 15 && (y += i[o++] << C, C += 8, y += i[o++] << C, C += 8), J = R[y & M];
            e:
              for (; ; ) {
                if (y >>>= z = J >>> 24, C -= z, (z = J >>> 16 & 255) === 0)
                  G[m++] = 65535 & J;
                else {
                  if (!(16 & z)) {
                    if (!(64 & z)) {
                      J = R[(65535 & J) + (y & (1 << z) - 1)];
                      continue e;
                    }
                    if (32 & z) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  Y = 65535 & J, (z &= 15) && (C < z && (y += i[o++] << C, C += 8), Y += y & (1 << z) - 1, y >>>= z, C -= z), C < 15 && (y += i[o++] << C, C += 8, y += i[o++] << C, C += 8), J = _[y & L];
                  n:
                    for (; ; ) {
                      if (y >>>= z = J >>> 24, C -= z, !(16 & (z = J >>> 16 & 255))) {
                        if (!(64 & z)) {
                          J = _[(65535 & J) + (y & (1 << z) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & J, C < (z &= 15) && (y += i[o++] << C, (C += 8) < z && (y += i[o++] << C, C += 8)), l < (rt += y & (1 << z) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (y >>>= z, C -= z, (z = m - b) < rt) {
                        if (s < (z = rt - z) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (T = u, (k = 0) === d) {
                          if (k += g - z, z < Y) {
                            for (Y -= z; G[m++] = u[k++], --z; )
                              ;
                            k = m - rt, T = G;
                          }
                        } else if (d < z) {
                          if (k += g + d - z, (z -= d) < Y) {
                            for (Y -= z; G[m++] = u[k++], --z; )
                              ;
                            if (k = 0, d < Y) {
                              for (Y -= z = d; G[m++] = u[k++], --z; )
                                ;
                              k = m - rt, T = G;
                            }
                          }
                        } else if (k += d - z, z < Y) {
                          for (Y -= z; G[m++] = u[k++], --z; )
                            ;
                          k = m - rt, T = G;
                        }
                        for (; 2 < Y; )
                          G[m++] = T[k++], G[m++] = T[k++], G[m++] = T[k++], Y -= 3;
                        Y && (G[m++] = T[k++], 1 < Y && (G[m++] = T[k++]));
                      } else {
                        for (k = m - rt; G[m++] = G[k++], G[m++] = G[k++], G[m++] = G[k++], 2 < (Y -= 3); )
                          ;
                        Y && (G[m++] = G[k++], 1 < Y && (G[m++] = G[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < w);
        o -= Y = C >> 3, y &= (1 << (C -= Y << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < w ? w - m + 257 : 257 - (m - w), n.hold = y, n.bits = C;
      };
    }, {}], 49: [function(e, h, c) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, b = 2, w = 0, l = -2, g = 1, s = 852, d = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function y() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function C(k) {
        var T;
        return k && k.state ? (T = k.state, k.total_in = k.total_out = T.total = 0, k.msg = "", T.wrap && (k.adler = 1 & T.wrap), T.mode = g, T.last = 0, T.havedict = 0, T.dmax = 32768, T.head = null, T.hold = 0, T.bits = 0, T.lencode = T.lendyn = new r.Buf32(s), T.distcode = T.distdyn = new r.Buf32(d), T.sane = 1, T.back = -1, w) : l;
      }
      function R(k) {
        var T;
        return k && k.state ? ((T = k.state).wsize = 0, T.whave = 0, T.wnext = 0, C(k)) : l;
      }
      function _(k, T) {
        var i, G;
        return k && k.state ? (G = k.state, T < 0 ? (i = 0, T = -T) : (i = 1 + (T >> 4), T < 48 && (T &= 15)), T && (T < 8 || 15 < T) ? l : (G.window !== null && G.wbits !== T && (G.window = null), G.wrap = i, G.wbits = T, R(k))) : l;
      }
      function M(k, T) {
        var i, G;
        return k ? (G = new y(), (k.state = G).window = null, (i = _(k, T)) !== w && (k.state = null), i) : l;
      }
      var L, J, z = !0;
      function Y(k) {
        if (z) {
          var T;
          for (L = new r.Buf32(512), J = new r.Buf32(32), T = 0; T < 144; )
            k.lens[T++] = 8;
          for (; T < 256; )
            k.lens[T++] = 9;
          for (; T < 280; )
            k.lens[T++] = 7;
          for (; T < 288; )
            k.lens[T++] = 8;
          for (p(m, k.lens, 0, 288, L, 0, k.work, { bits: 9 }), T = 0; T < 32; )
            k.lens[T++] = 5;
          p(b, k.lens, 0, 32, J, 0, k.work, { bits: 5 }), z = !1;
        }
        k.lencode = L, k.lenbits = 9, k.distcode = J, k.distbits = 5;
      }
      function rt(k, T, i, G) {
        var it, S = k.state;
        return S.window === null && (S.wsize = 1 << S.wbits, S.wnext = 0, S.whave = 0, S.window = new r.Buf8(S.wsize)), G >= S.wsize ? (r.arraySet(S.window, T, i - S.wsize, S.wsize, 0), S.wnext = 0, S.whave = S.wsize) : (G < (it = S.wsize - S.wnext) && (it = G), r.arraySet(S.window, T, i - G, it, S.wnext), (G -= it) ? (r.arraySet(S.window, T, i - G, G, 0), S.wnext = G, S.whave = S.wsize) : (S.wnext += it, S.wnext === S.wsize && (S.wnext = 0), S.whave < S.wsize && (S.whave += it))), 0;
      }
      c.inflateReset = R, c.inflateReset2 = _, c.inflateResetKeep = C, c.inflateInit = function(k) {
        return M(k, 15);
      }, c.inflateInit2 = M, c.inflate = function(k, T) {
        var i, G, it, S, U, B, P, x, I, K, j, X, ct, gt, ot, at, ft, ut, mt, wt, t, O, V, v, A = 0, F = new r.Buf8(4), W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), U = k.next_out, it = k.output, P = k.avail_out, S = k.next_in, G = k.input, B = k.avail_in, x = i.hold, I = i.bits, K = B, j = P, O = w;
        t:
          for (; ; )
            switch (i.mode) {
              case g:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; I < 16; ) {
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                if (2 & i.wrap && x === 35615) {
                  F[i.check = 0] = 255 & x, F[1] = x >>> 8 & 255, i.check = n(i.check, F, 2, 0), I = x = 0, i.mode = 2;
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
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                if (i.flags = x, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = x >> 8 & 1), 512 & i.flags && (F[0] = 255 & x, F[1] = x >>> 8 & 255, i.check = n(i.check, F, 2, 0)), I = x = 0, i.mode = 3;
              case 3:
                for (; I < 32; ) {
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                i.head && (i.head.time = x), 512 & i.flags && (F[0] = 255 & x, F[1] = x >>> 8 & 255, F[2] = x >>> 16 & 255, F[3] = x >>> 24 & 255, i.check = n(i.check, F, 4, 0)), I = x = 0, i.mode = 4;
              case 4:
                for (; I < 16; ) {
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                i.head && (i.head.xflags = 255 & x, i.head.os = x >> 8), 512 & i.flags && (F[0] = 255 & x, F[1] = x >>> 8 & 255, i.check = n(i.check, F, 2, 0)), I = x = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; I < 16; ) {
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
                  }
                  i.length = x, i.head && (i.head.extra_len = x), 512 & i.flags && (F[0] = 255 & x, F[1] = x >>> 8 & 255, i.check = n(i.check, F, 2, 0)), I = x = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (B < (X = i.length) && (X = B), X && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, G, S, X, t)), 512 & i.flags && (i.check = n(i.check, G, X, S)), B -= X, S += X, i.length -= X), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (B === 0)
                    break t;
                  for (X = 0; t = G[S + X++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && X < B; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, G, X, S)), B -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (B === 0)
                    break t;
                  for (X = 0; t = G[S + X++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && X < B; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, G, X, S)), B -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; I < 16; ) {
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
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
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                k.adler = i.check = u(x), I = x = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = U, k.avail_out = P, k.next_in = S, k.avail_in = B, i.hold = x, i.bits = I, 2;
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
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                switch (i.last = 1 & x, I -= 1, 3 & (x >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (Y(i), i.mode = 20, T !== 6)
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
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
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
                if (X = i.length) {
                  if (B < X && (X = B), P < X && (X = P), X === 0)
                    break t;
                  r.arraySet(it, G, S, X, U), B -= X, S += X, P -= X, U += X, i.length -= X;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; I < 14; ) {
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                if (i.nlen = 257 + (31 & x), x >>>= 5, I -= 5, i.ndist = 1 + (31 & x), x >>>= 5, I -= 5, i.ncode = 4 + (15 & x), x >>>= 4, I -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; I < 3; ) {
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
                  }
                  i.lens[W[i.have++]] = 7 & x, x >>>= 3, I -= 3;
                }
                for (; i.have < 19; )
                  i.lens[W[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, V = { bits: i.lenbits }, O = p(0, i.lens, 0, 19, i.lencode, 0, i.work, V), i.lenbits = V.bits, O) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; at = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
                  }
                  if (ft < 16)
                    x >>>= ot, I -= ot, i.lens[i.have++] = ft;
                  else {
                    if (ft === 16) {
                      for (v = ot + 2; I < v; ) {
                        if (B === 0)
                          break t;
                        B--, x += G[S++] << I, I += 8;
                      }
                      if (x >>>= ot, I -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], X = 3 + (3 & x), x >>>= 2, I -= 2;
                    } else if (ft === 17) {
                      for (v = ot + 3; I < v; ) {
                        if (B === 0)
                          break t;
                        B--, x += G[S++] << I, I += 8;
                      }
                      I -= ot, t = 0, X = 3 + (7 & (x >>>= ot)), x >>>= 3, I -= 3;
                    } else {
                      for (v = ot + 7; I < v; ) {
                        if (B === 0)
                          break t;
                        B--, x += G[S++] << I, I += 8;
                      }
                      I -= ot, t = 0, X = 11 + (127 & (x >>>= ot)), x >>>= 7, I -= 7;
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
                if (i.lenbits = 9, V = { bits: i.lenbits }, O = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, V), i.lenbits = V.bits, O) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, V = { bits: i.distbits }, O = p(b, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, V), i.distbits = V.bits, O) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, T === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= B && 258 <= P) {
                  k.next_out = U, k.avail_out = P, k.next_in = S, k.avail_in = B, i.hold = x, i.bits = I, o(k, j), U = k.next_out, it = k.output, P = k.avail_out, S = k.next_in, G = k.input, B = k.avail_in, x = i.hold, I = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; at = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                if (at && !(240 & at)) {
                  for (ut = ot, mt = at, wt = ft; at = (A = i.lencode[wt + ((x & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= I); ) {
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
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
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
                  }
                  i.length += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; at = (A = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (B === 0)
                    break t;
                  B--, x += G[S++] << I, I += 8;
                }
                if (!(240 & at)) {
                  for (ut = ot, mt = at, wt = ft; at = (A = i.distcode[wt + ((x & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= I); ) {
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
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
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
                  }
                  i.offset += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (P === 0)
                  break t;
                if (X = j - P, i.offset > X) {
                  if ((X = i.offset - X) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ct = X > i.wnext ? (X -= i.wnext, i.wsize - X) : i.wnext - X, X > i.length && (X = i.length), gt = i.window;
                } else
                  gt = it, ct = U - i.offset, X = i.length;
                for (P < X && (X = P), P -= X, i.length -= X; it[U++] = gt[ct++], --X; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (P === 0)
                  break t;
                it[U++] = i.length, P--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; I < 32; ) {
                    if (B === 0)
                      break t;
                    B--, x |= G[S++] << I, I += 8;
                  }
                  if (j -= P, k.total_out += j, i.total += j, j && (k.adler = i.check = i.flags ? n(i.check, it, j, U - j) : a(i.check, it, j, U - j)), j = P, (i.flags ? x : u(x)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; I < 32; ) {
                    if (B === 0)
                      break t;
                    B--, x += G[S++] << I, I += 8;
                  }
                  if (x !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 29;
              case 29:
                O = 1;
                break t;
              case 30:
                O = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = U, k.avail_out = P, k.next_in = S, k.avail_in = B, i.hold = x, i.bits = I, (i.wsize || j !== k.avail_out && i.mode < 30 && (i.mode < 27 || T !== 4)) && rt(k, k.output, k.next_out, j - k.avail_out) ? (i.mode = 31, -4) : (K -= k.avail_in, j -= k.avail_out, k.total_in += K, k.total_out += j, i.total += j, i.wrap && j && (k.adler = i.check = i.flags ? n(i.check, it, j, k.next_out - j) : a(i.check, it, j, k.next_out - j)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (K == 0 && j === 0 || T === 4) && O === w && (O = -5), O);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var T = k.state;
        return T.window && (T.window = null), k.state = null, w;
      }, c.inflateGetHeader = function(k, T) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = T).done = !1, w) : l;
      }, c.inflateSetDictionary = function(k, T) {
        var i, G = T.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, T, G, 0) !== i.check ? -3 : rt(k, T, G, G) ? (i.mode = 31, -4) : (i.havedict = 1, w) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, c) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(m, b, w, l, g, s, d, u) {
        var y, C, R, _, M, L, J, z, Y, rt = u.bits, k = 0, T = 0, i = 0, G = 0, it = 0, S = 0, U = 0, B = 0, P = 0, x = 0, I = null, K = 0, j = new r.Buf16(16), X = new r.Buf16(16), ct = null, gt = 0;
        for (k = 0; k <= 15; k++)
          j[k] = 0;
        for (T = 0; T < l; T++)
          j[b[w + T]]++;
        for (it = rt, G = 15; 1 <= G && j[G] === 0; G--)
          ;
        if (G < it && (it = G), G === 0)
          return g[s++] = 20971520, g[s++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < G && j[i] === 0; i++)
          ;
        for (it < i && (it = i), k = B = 1; k <= 15; k++)
          if (B <<= 1, (B -= j[k]) < 0)
            return -1;
        if (0 < B && (m === 0 || G !== 1))
          return -1;
        for (X[1] = 0, k = 1; k < 15; k++)
          X[k + 1] = X[k] + j[k];
        for (T = 0; T < l; T++)
          b[w + T] !== 0 && (d[X[b[w + T]]++] = T);
        if (L = m === 0 ? (I = ct = d, 19) : m === 1 ? (I = a, K -= 257, ct = n, gt -= 257, 256) : (I = o, ct = p, -1), k = i, M = s, U = T = x = 0, R = -1, _ = (P = 1 << (S = it)) - 1, m === 1 && 852 < P || m === 2 && 592 < P)
          return 1;
        for (; ; ) {
          for (J = k - U, Y = d[T] < L ? (z = 0, d[T]) : d[T] > L ? (z = ct[gt + d[T]], I[K + d[T]]) : (z = 96, 0), y = 1 << k - U, i = C = 1 << S; g[M + (x >> U) + (C -= y)] = J << 24 | z << 16 | Y | 0, C !== 0; )
            ;
          for (y = 1 << k - 1; x & y; )
            y >>= 1;
          if (y !== 0 ? (x &= y - 1, x += y) : x = 0, T++, --j[k] == 0) {
            if (k === G)
              break;
            k = b[w + d[T]];
          }
          if (it < k && (x & _) !== R) {
            for (U === 0 && (U = it), M += i, B = 1 << (S = k - U); S + U < G && !((B -= j[S + U]) <= 0); )
              S++, B <<= 1;
            if (P += 1 << S, m === 1 && 852 < P || m === 2 && 592 < P)
              return 1;
            g[R = x & _] = it << 24 | S << 16 | M - s | 0;
          }
        }
        return x !== 0 && (g[M + x] = k - U << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, c) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, c) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(A) {
        for (var F = A.length; 0 <= --F; )
          A[F] = 0;
      }
      var p = 0, m = 29, b = 256, w = b + 1 + m, l = 30, g = 19, s = 2 * w + 1, d = 15, u = 16, y = 7, C = 256, R = 16, _ = 17, M = 18, L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (w + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var T = new Array(512);
      o(T);
      var i = new Array(256);
      o(i);
      var G = new Array(m);
      o(G);
      var it, S, U, B = new Array(l);
      function P(A, F, W, D, N) {
        this.static_tree = A, this.extra_bits = F, this.extra_base = W, this.elems = D, this.max_length = N, this.has_stree = A && A.length;
      }
      function x(A, F) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = F;
      }
      function I(A) {
        return A < 256 ? T[A] : T[256 + (A >>> 7)];
      }
      function K(A, F) {
        A.pending_buf[A.pending++] = 255 & F, A.pending_buf[A.pending++] = F >>> 8 & 255;
      }
      function j(A, F, W) {
        A.bi_valid > u - W ? (A.bi_buf |= F << A.bi_valid & 65535, K(A, A.bi_buf), A.bi_buf = F >> u - A.bi_valid, A.bi_valid += W - u) : (A.bi_buf |= F << A.bi_valid & 65535, A.bi_valid += W);
      }
      function X(A, F, W) {
        j(A, W[2 * F], W[2 * F + 1]);
      }
      function ct(A, F) {
        for (var W = 0; W |= 1 & A, A >>>= 1, W <<= 1, 0 < --F; )
          ;
        return W >>> 1;
      }
      function gt(A, F, W) {
        var D, N, Z = new Array(d + 1), $ = 0;
        for (D = 1; D <= d; D++)
          Z[D] = $ = $ + W[D - 1] << 1;
        for (N = 0; N <= F; N++) {
          var Q = A[2 * N + 1];
          Q !== 0 && (A[2 * N] = ct(Z[Q]++, Q));
        }
      }
      function ot(A) {
        var F;
        for (F = 0; F < w; F++)
          A.dyn_ltree[2 * F] = 0;
        for (F = 0; F < l; F++)
          A.dyn_dtree[2 * F] = 0;
        for (F = 0; F < g; F++)
          A.bl_tree[2 * F] = 0;
        A.dyn_ltree[2 * C] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function at(A) {
        8 < A.bi_valid ? K(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function ft(A, F, W, D) {
        var N = 2 * F, Z = 2 * W;
        return A[N] < A[Z] || A[N] === A[Z] && D[F] <= D[W];
      }
      function ut(A, F, W) {
        for (var D = A.heap[W], N = W << 1; N <= A.heap_len && (N < A.heap_len && ft(F, A.heap[N + 1], A.heap[N], A.depth) && N++, !ft(F, D, A.heap[N], A.depth)); )
          A.heap[W] = A.heap[N], W = N, N <<= 1;
        A.heap[W] = D;
      }
      function mt(A, F, W) {
        var D, N, Z, $, Q = 0;
        if (A.last_lit !== 0)
          for (; D = A.pending_buf[A.d_buf + 2 * Q] << 8 | A.pending_buf[A.d_buf + 2 * Q + 1], N = A.pending_buf[A.l_buf + Q], Q++, D === 0 ? X(A, N, F) : (X(A, (Z = i[N]) + b + 1, F), ($ = L[Z]) !== 0 && j(A, N -= G[Z], $), X(A, Z = I(--D), W), ($ = J[Z]) !== 0 && j(A, D -= B[Z], $)), Q < A.last_lit; )
            ;
        X(A, C, F);
      }
      function wt(A, F) {
        var W, D, N, Z = F.dyn_tree, $ = F.stat_desc.static_tree, Q = F.stat_desc.has_stree, tt = F.stat_desc.elems, ht = -1;
        for (A.heap_len = 0, A.heap_max = s, W = 0; W < tt; W++)
          Z[2 * W] !== 0 ? (A.heap[++A.heap_len] = ht = W, A.depth[W] = 0) : Z[2 * W + 1] = 0;
        for (; A.heap_len < 2; )
          Z[2 * (N = A.heap[++A.heap_len] = ht < 2 ? ++ht : 0)] = 1, A.depth[N] = 0, A.opt_len--, Q && (A.static_len -= $[2 * N + 1]);
        for (F.max_code = ht, W = A.heap_len >> 1; 1 <= W; W--)
          ut(A, Z, W);
        for (N = tt; W = A.heap[1], A.heap[1] = A.heap[A.heap_len--], ut(A, Z, 1), D = A.heap[1], A.heap[--A.heap_max] = W, A.heap[--A.heap_max] = D, Z[2 * N] = Z[2 * W] + Z[2 * D], A.depth[N] = (A.depth[W] >= A.depth[D] ? A.depth[W] : A.depth[D]) + 1, Z[2 * W + 1] = Z[2 * D + 1] = N, A.heap[1] = N++, ut(A, Z, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(st, pt) {
          var Ct, Ft, yt, dt, St, It, bt = pt.dyn_tree, Lt = pt.max_code, Nt = pt.stat_desc.static_tree, Wt = pt.stat_desc.has_stree, et = pt.stat_desc.extra_bits, vt = pt.stat_desc.extra_base, xt = pt.stat_desc.max_length, At = 0;
          for (dt = 0; dt <= d; dt++)
            st.bl_count[dt] = 0;
          for (bt[2 * st.heap[st.heap_max] + 1] = 0, Ct = st.heap_max + 1; Ct < s; Ct++)
            xt < (dt = bt[2 * bt[2 * (Ft = st.heap[Ct]) + 1] + 1] + 1) && (dt = xt, At++), bt[2 * Ft + 1] = dt, Lt < Ft || (st.bl_count[dt]++, St = 0, vt <= Ft && (St = et[Ft - vt]), It = bt[2 * Ft], st.opt_len += It * (dt + St), Wt && (st.static_len += It * (Nt[2 * Ft + 1] + St)));
          if (At !== 0) {
            do {
              for (dt = xt - 1; st.bl_count[dt] === 0; )
                dt--;
              st.bl_count[dt]--, st.bl_count[dt + 1] += 2, st.bl_count[xt]--, At -= 2;
            } while (0 < At);
            for (dt = xt; dt !== 0; dt--)
              for (Ft = st.bl_count[dt]; Ft !== 0; )
                Lt < (yt = st.heap[--Ct]) || (bt[2 * yt + 1] !== dt && (st.opt_len += (dt - bt[2 * yt + 1]) * bt[2 * yt], bt[2 * yt + 1] = dt), Ft--);
          }
        }(A, F), gt(Z, ht, A.bl_count);
      }
      function t(A, F, W) {
        var D, N, Z = -1, $ = F[1], Q = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), F[2 * (W + 1) + 1] = 65535, D = 0; D <= W; D++)
          N = $, $ = F[2 * (D + 1) + 1], ++Q < tt && N === $ || (Q < ht ? A.bl_tree[2 * N] += Q : N !== 0 ? (N !== Z && A.bl_tree[2 * N]++, A.bl_tree[2 * R]++) : Q <= 10 ? A.bl_tree[2 * _]++ : A.bl_tree[2 * M]++, Z = N, ht = (Q = 0) === $ ? (tt = 138, 3) : N === $ ? (tt = 6, 3) : (tt = 7, 4));
      }
      function O(A, F, W) {
        var D, N, Z = -1, $ = F[1], Q = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), D = 0; D <= W; D++)
          if (N = $, $ = F[2 * (D + 1) + 1], !(++Q < tt && N === $)) {
            if (Q < ht)
              for (; X(A, N, A.bl_tree), --Q != 0; )
                ;
            else
              N !== 0 ? (N !== Z && (X(A, N, A.bl_tree), Q--), X(A, R, A.bl_tree), j(A, Q - 3, 2)) : Q <= 10 ? (X(A, _, A.bl_tree), j(A, Q - 3, 3)) : (X(A, M, A.bl_tree), j(A, Q - 11, 7));
            Z = N, ht = (Q = 0) === $ ? (tt = 138, 3) : N === $ ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      o(B);
      var V = !1;
      function v(A, F, W, D) {
        j(A, (p << 1) + (D ? 1 : 0), 3), function(N, Z, $, Q) {
          at(N), Q && (K(N, $), K(N, ~$)), r.arraySet(N.pending_buf, N.window, Z, $, N.pending), N.pending += $;
        }(A, F, W, !0);
      }
      c._tr_init = function(A) {
        V || (function() {
          var F, W, D, N, Z, $ = new Array(d + 1);
          for (N = D = 0; N < m - 1; N++)
            for (G[N] = D, F = 0; F < 1 << L[N]; F++)
              i[D++] = N;
          for (i[D - 1] = N, N = Z = 0; N < 16; N++)
            for (B[N] = Z, F = 0; F < 1 << J[N]; F++)
              T[Z++] = N;
          for (Z >>= 7; N < l; N++)
            for (B[N] = Z << 7, F = 0; F < 1 << J[N] - 7; F++)
              T[256 + Z++] = N;
          for (W = 0; W <= d; W++)
            $[W] = 0;
          for (F = 0; F <= 143; )
            rt[2 * F + 1] = 8, F++, $[8]++;
          for (; F <= 255; )
            rt[2 * F + 1] = 9, F++, $[9]++;
          for (; F <= 279; )
            rt[2 * F + 1] = 7, F++, $[7]++;
          for (; F <= 287; )
            rt[2 * F + 1] = 8, F++, $[8]++;
          for (gt(rt, w + 1, $), F = 0; F < l; F++)
            k[2 * F + 1] = 5, k[2 * F] = ct(F, 5);
          it = new P(rt, L, b + 1, w, d), S = new P(k, J, 0, l, d), U = new P(new Array(0), z, 0, g, y);
        }(), V = !0), A.l_desc = new x(A.dyn_ltree, it), A.d_desc = new x(A.dyn_dtree, S), A.bl_desc = new x(A.bl_tree, U), A.bi_buf = 0, A.bi_valid = 0, ot(A);
      }, c._tr_stored_block = v, c._tr_flush_block = function(A, F, W, D) {
        var N, Z, $ = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(Q) {
          var tt, ht = 4093624447;
          for (tt = 0; tt <= 31; tt++, ht >>>= 1)
            if (1 & ht && Q.dyn_ltree[2 * tt] !== 0)
              return a;
          if (Q.dyn_ltree[18] !== 0 || Q.dyn_ltree[20] !== 0 || Q.dyn_ltree[26] !== 0)
            return n;
          for (tt = 32; tt < b; tt++)
            if (Q.dyn_ltree[2 * tt] !== 0)
              return n;
          return a;
        }(A)), wt(A, A.l_desc), wt(A, A.d_desc), $ = function(Q) {
          var tt;
          for (t(Q, Q.dyn_ltree, Q.l_desc.max_code), t(Q, Q.dyn_dtree, Q.d_desc.max_code), wt(Q, Q.bl_desc), tt = g - 1; 3 <= tt && Q.bl_tree[2 * Y[tt] + 1] === 0; tt--)
            ;
          return Q.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(A), N = A.opt_len + 3 + 7 >>> 3, (Z = A.static_len + 3 + 7 >>> 3) <= N && (N = Z)) : N = Z = W + 5, W + 4 <= N && F !== -1 ? v(A, F, W, D) : A.strategy === 4 || Z === N ? (j(A, 2 + (D ? 1 : 0), 3), mt(A, rt, k)) : (j(A, 4 + (D ? 1 : 0), 3), function(Q, tt, ht, st) {
          var pt;
          for (j(Q, tt - 257, 5), j(Q, ht - 1, 5), j(Q, st - 4, 4), pt = 0; pt < st; pt++)
            j(Q, Q.bl_tree[2 * Y[pt] + 1], 3);
          O(Q, Q.dyn_ltree, tt - 1), O(Q, Q.dyn_dtree, ht - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, $ + 1), mt(A, A.dyn_ltree, A.dyn_dtree)), ot(A), D && at(A);
      }, c._tr_tally = function(A, F, W) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = F >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & F, A.pending_buf[A.l_buf + A.last_lit] = 255 & W, A.last_lit++, F === 0 ? A.dyn_ltree[2 * W]++ : (A.matches++, F--, A.dyn_ltree[2 * (i[W] + b + 1)]++, A.dyn_dtree[2 * I(F)]++), A.last_lit === A.lit_bufsize - 1;
      }, c._tr_align = function(A) {
        j(A, 2, 3), X(A, C, rt), function(F) {
          F.bi_valid === 16 ? (K(F, F.bi_buf), F.bi_buf = 0, F.bi_valid = 0) : 8 <= F.bi_valid && (F.pending_buf[F.pending++] = 255 & F.bi_buf, F.bi_buf >>= 8, F.bi_valid -= 8);
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
            var o, p, m, b, w = 1, l = {}, g = !1, s = a.document, d = Object.getPrototypeOf && Object.getPrototypeOf(a);
            d = d && d.setTimeout ? d : a, o = {}.toString.call(a.process) === "[object process]" ? function(R) {
              process.nextTick(function() {
                y(R);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var R = !0, _ = a.onmessage;
                return a.onmessage = function() {
                  R = !1;
                }, a.postMessage("", "*"), a.onmessage = _, R;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", C, !1) : a.attachEvent("onmessage", C), function(R) {
              a.postMessage(b + R, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(R) {
              y(R.data);
            }, function(R) {
              m.port2.postMessage(R);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(R) {
              var _ = s.createElement("script");
              _.onreadystatechange = function() {
                y(R), _.onreadystatechange = null, p.removeChild(_), _ = null;
              }, p.appendChild(_);
            }) : function(R) {
              setTimeout(y, 0, R);
            }, d.setImmediate = function(R) {
              typeof R != "function" && (R = new Function("" + R));
              for (var _ = new Array(arguments.length - 1), M = 0; M < _.length; M++)
                _[M] = arguments[M + 1];
              var L = { callback: R, args: _ };
              return l[w] = L, o(w), w++;
            }, d.clearImmediate = u;
          }
          function u(R) {
            delete l[R];
          }
          function y(R) {
            if (g)
              setTimeout(y, 0, R);
            else {
              var _ = l[R];
              if (_) {
                g = !0;
                try {
                  (function(M) {
                    var L = M.callback, J = M.args;
                    switch (J.length) {
                      case 0:
                        L();
                        break;
                      case 1:
                        L(J[0]);
                        break;
                      case 2:
                        L(J[0], J[1]);
                        break;
                      case 3:
                        L(J[0], J[1], J[2]);
                        break;
                      default:
                        L.apply(n, J);
                    }
                  })(_);
                } finally {
                  u(R), g = !1;
                }
              }
            }
          }
          function C(R) {
            R.source === a && typeof R.data == "string" && R.data.indexOf(b) === 0 && y(+R.data.slice(b.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Rt < "u" ? Rt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(ve);
var We = ve.exports;
const Pe = /* @__PURE__ */ be(We);
var we = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h();
  })(Rt, function() {
    function e(p, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type) ? new Blob(["\uFEFF", p], { type: p.type }) : p;
    }
    function h(p, m, b) {
      var w = new XMLHttpRequest();
      w.open("GET", p), w.responseType = "blob", w.onload = function() {
        o(w.response, m, b);
      }, w.onerror = function() {
        console.error("could not download file");
      }, w.send();
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Rt == "object" && Rt.global === Rt ? Rt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(p, m, b) {
      var w = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || p.name || "download", l.download = m, l.rel = "noopener", typeof p == "string" ? (l.href = p, l.origin === location.origin ? r(l) : c(l.href) ? h(p, m, b) : r(l, l.target = "_blank")) : (l.href = w.createObjectURL(p), setTimeout(function() {
        w.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        r(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, b) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, b), m);
      else if (c(p))
        h(p, m, b);
      else {
        var w = document.createElement("a");
        w.href = p, w.target = "_blank", setTimeout(function() {
          r(w);
        });
      }
    } : function(p, m, b, w) {
      if (w = w || open("", "_blank"), w && (w.document.title = w.document.body.innerText = "downloading..."), typeof p == "string")
        return h(p, m, b);
      var l = p.type === "application/octet-stream", g = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && g || n) && typeof FileReader < "u") {
        var d = new FileReader();
        d.onloadend = function() {
          var C = d.result;
          C = s ? C : C.replace(/^data:[^;]*;/, "data:attachment/file;"), w ? w.location.href = C : location = C, w = null;
        }, d.readAsDataURL(p);
      } else {
        var u = a.URL || a.webkitURL, y = u.createObjectURL(p);
        w ? w.location = y : location.href = y, w = null, setTimeout(function() {
          u.revokeObjectURL(y);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, E.exports = o;
  });
})(we);
var Je = we.exports;
const Qe = /* @__PURE__ */ be(Je);
function Qt(E) {
  for (var f = globalThis.atob(E), e = f.length, h = new Uint8Array(e), c = 0; c < e; c++)
    h[c] = f.charCodeAt(c);
  return h.buffer;
}
const je = `#!/bin/sh

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
`, Ze = `@rem\r
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
`, He = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.12.1-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Xe = "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AAAAAAAAAEQQAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZU9wdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBkor0gWgIAALYEAAAzAAkAAAAAAAAAAAAAAA8TAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRBZnRlck9wdGlvbnMuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAi+MxFywDAABdBwAAPAAJAAAAAAAAAAAAAADTFQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQmVmb3JlRmlyc3RTdWJDb21tYW5kLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOnaD7PfBgAAYg4AAD0ACQAAAAAAAAAAAAAAchkAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEtub3duT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAQyd8okwCAACXBAAAPAAJAAAAAAAAAAAAAADFIAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkTWlzc2luZ09wdGlvbkFyZ1N0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhALSUW6PXAgAASgUAAD0ACQAAAAAAAAAAAAAAhCMAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvbkF3YXJlUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAdVt6P6IBAAB9AgAAOAAJAAAAAAAAAAAAAADPJgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAFtfpHA0CAABDAwAAMwAJAAAAAAAAAAAAAADgKAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uU3RyaW5nLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAJDJyYmnAQAAzgIAADIACQAAAAAAAAAAAAAAVysAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJFBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAEvPlqBzAgAAxwQAAD8ACQAAAAAAAAAAAAAAZy0AAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJFVua25vd25PcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAdjJnprwQAAGMIAAAmAAkAAAAAAAAAAAAAAFAwAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDrMneNOgQAAOEHAAAmAAkAAAAAAAAAAAAAAFw1AABvcmcvZ3JhZGxlL2NsaS9QYXJzZWRDb21tYW5kTGluZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBa3XZtVAEAAKwBAAAsAAkAAAAAAAAAAAAAAPM5AABvcmcvZ3JhZGxlL2NsaS9QYXJzZWRDb21tYW5kTGluZU9wdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQD5JE8U/wIAAJwEAAAzAAkAAAAAAAAAAAAAAKo7AABvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvUGF0aFRyYXZlcnNhbENoZWNrZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAebV3yocBAAADAgAAQQAJAAAAAAAAAAAAAAATPwAAb3JnL2dyYWRsZS9pbnRlcm5hbC9maWxlL2xvY2tpbmcvRXhjbHVzaXZlRmlsZUFjY2Vzc01hbmFnZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAYqcGisEBAACjAgAAPgAJAAAAAAAAAAAAAAASQQAAb3JnL2dyYWRsZS91dGlsL2ludGVybmFsL1dyYXBwZXJEaXN0cmlidXRpb25VcmxDb252ZXJ0ZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAnEXSmo4BAAAeAgAALwAJAAAAAAAAAAAAAABIQwAAb3JnL2dyYWRsZS93cmFwcGVyL0Jvb3RzdHJhcE1haW5TdGFydGVyJDEuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAgNMlBikDAADkBAAAQQAJAAAAAAAAAAAAAAA8RQAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJERlZmF1bHREb3dubG9hZFByb2dyZXNzTGlzdGVuZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAd6O2JuUCAAARBQAANAAJAAAAAAAAAAAAAADdSAAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJFByb3h5QXV0aGVudGljYXRvci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAYBLAMZQkAACoSAAAhAAkAAAAAAAAAAAAAAC1MAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAQXMXCdkBAACyAgAALQAJAAAAAAAAAAAAAADqVQAAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVVzZXJIb21lTG9va3VwLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhADWs/NofFQAA0CkAACoACQAAAAAAAAAAAAAAJ1gAAG9yZy9ncmFkbGUvd3JhcHBlci9HcmFkbGVXcmFwcGVyTWFpbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQA384MN5AsAAP8VAAAiAAkAAAAAAAAAAAAAAKdtAABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbCQxLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAKoEk0pqAQAA5wEAAC0ACQAAAAAAAAAAAAAA5HkAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJEluc3RhbGxDaGVjay5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAZ0HXP9w4AAHgcAAAgAAkAAAAAAAAAAAAAALJ7AABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBd9rVvOwIAAB4EAAAfAAkAAAAAAAAAAAAAAACLAABvcmcvZ3JhZGxlL3dyYXBwZXIvTG9nZ2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOopkz4kAQAAagEAACYACQAAAAAAAAAAAAAAkY0AAG9yZy9ncmFkbGUvd3JhcHBlci9QYXRoQXNzZW1ibGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhANbjJayaAwAATgYAADAACQAAAAAAAAAAAAAAEo8AAG9yZy9ncmFkbGUvd3JhcHBlci9TeXN0ZW1Qcm9wZXJ0aWVzSGFuZGxlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDmEQTJ7gIAAFAGAAAtAAkAAAAAAAAAAAAAABOTAABvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckNvbmZpZ3VyYXRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAEVlh6FMGAADFDAAAKAAJAAAAAAAAAAAAAABllgAAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJFeGVjdXRvci5jbGFzc1VUBQABAAAAAFBLBQYAAAAAIQAhABINAAAXnQAAAAA=", ye = `# gradle

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
async function Ye({ writer: E }) {
  await E.write("gradlew", je, {
    executable: !0
  }), await E.write("gradlew.bat", Ze), await E.write("gradle/wrapper/gradle-wrapper.properties", He), await E.write("gradle/wrapper/gradle-wrapper.jar", Qt(Xe)), await E.write(".gitignore", ye), await E.write(".github/workflows/build.yml", ke);
}
var Xt = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h(f);
  })(Rt, function(e) {
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(S) {
        for (var U = 1; U < arguments.length; U++) {
          var B = arguments[U];
          for (var P in B)
            Object.prototype.hasOwnProperty.call(B, P) && (S[P] = B[P]);
        }
        return S;
      }, h.apply(this, arguments);
    }
    function c(S, U) {
      S.prototype = Object.create(U.prototype), S.prototype.constructor = S, a(S, U);
    }
    function r(S) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(U) {
        return U.__proto__ || Object.getPrototypeOf(U);
      }, r(S);
    }
    function a(S, U) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(B, P) {
        return B.__proto__ = P, B;
      }, a(S, U);
    }
    function n(S, U, B) {
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
      }() ? Reflect.construct.bind() : function(P, x, I) {
        var K = [null];
        K.push.apply(K, x);
        var j = new (Function.bind.apply(P, K))();
        return I && a(j, I.prototype), j;
      }, n.apply(null, arguments);
    }
    function o(S) {
      var U = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(B) {
        if (B === null || Function.toString.call(B).indexOf("[native code]") === -1)
          return B;
        if (typeof B != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (U !== void 0) {
          if (U.has(B))
            return U.get(B);
          U.set(B, P);
        }
        function P() {
          return n(B, arguments, r(this).constructor);
        }
        return P.prototype = Object.create(B.prototype, { constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 } }), a(P, B);
      }, o(S);
    }
    var p = /* @__PURE__ */ function() {
      function S(B) {
        this.cache = void 0, this.cache = B;
      }
      var U = S.prototype;
      return U.define = function(B, P) {
        this.cache[B] = P;
      }, U.get = function(B) {
        return this.cache[B];
      }, U.remove = function(B) {
        delete this.cache[B];
      }, U.reset = function() {
        this.cache = {};
      }, U.load = function(B) {
        this.cache = h({}, this.cache, B);
      }, S;
    }(), m = /* @__PURE__ */ function(S) {
      function U(B) {
        var P;
        return (P = S.call(this, B) || this).name = "Eta Error", P;
      }
      return c(U, S), U;
    }(/* @__PURE__ */ o(Error));
    function b(S, U, B) {
      var P = U.slice(0, B).split(/\n/), x = P.length, I = P[x - 1].length + 1;
      throw S += " at line " + x + " col " + I + `:

  ` + U.split(/\n/)[x - 1] + `
  ` + Array(I).join(" ") + "^", new m(S);
    }
    function w(S, U, B, P) {
      var x = U.split(`
`), I = Math.max(B - 3, 0), K = Math.min(x.length, B + 3), j = P, X = x.slice(I, K).map(function(gt, ot) {
        var at = ot + I + 1;
        return (at == B ? " >> " : "    ") + at + "| " + gt;
      }).join(`
`), ct = new m((j ? j + ":" + B + `
` : "line " + B + `
`) + X + `

` + S.message);
      throw ct.name = S.name, ct;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function g(S, U) {
      var B = this.config, P = U && U.async ? l : Function;
      try {
        return new P(B.varName, "options", this.compileToString.call(this, S, U));
      } catch (x) {
        throw x instanceof SyntaxError ? new m(`Bad template syntax

` + x.message + `
` + Array(x.message.length + 1).join("=") + `
` + this.compileToString.call(this, S, U) + `
`) : x;
      }
    }
    function s(S, U) {
      var B = this.config, P = U && U.async, x = this.parse.call(this, S), I = B.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (B.debug ? ', line: 1, templateStr: "' + S.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (B.debug ? "try {" : "") + (B.useWith ? "with(" + B.varName + "||{}){" : "") + `

` + d.call(this, x) + `
if (__eta.layout) {
  __eta.res = ` + (P ? "await includeAsync" : "include") + " (__eta.layout, {..." + B.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (B.useWith ? "}" : "") + (B.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (B.plugins)
        for (var K = 0; K < B.plugins.length; K++) {
          var j = B.plugins[K];
          j.processFnString && (I = j.processFnString(I, B));
        }
      return I;
    }
    function d(S) {
      for (var U = this.config, B = 0, P = S.length, x = ""; B < P; B++) {
        var I = S[B];
        if (typeof I == "string")
          x += "__eta.res+='" + I + `'
`;
        else {
          var K = I.t, j = I.val || "";
          U.debug && (x += "__eta.line=" + I.lineNo + `
`), K === "r" ? (U.autoFilter && (j = "__eta.f(" + j + ")"), x += "__eta.res+=" + j + `
`) : K === "i" ? (U.autoFilter && (j = "__eta.f(" + j + ")"), U.autoEscape && (j = "__eta.e(" + j + ")"), x += "__eta.res+=" + j + `
`) : K === "e" && (x += j + `
`);
        }
      }
      return x;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function y(S) {
      return u[S];
    }
    var C = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(S) {
      var U = String(S);
      return /[&<>"']/.test(U) ? U.replace(/[&<>"']/g, y) : U;
    }, filterFunction: function(S) {
      return String(S);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, R = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, _ = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, M = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function L(S) {
      return S.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function J(S, U) {
      return S.slice(0, U).split(`
`).length;
    }
    function z(S) {
      var U = this.config, B = [], P = !1, x = 0, I = U.parse;
      if (U.plugins)
        for (var K = 0; K < U.plugins.length; K++) {
          var j = U.plugins[K];
          j.processTemplate && (S = j.processTemplate(S, U));
        }
      function X(F, W) {
        F && (F = function(D, N, Z, $) {
          var Q, tt;
          return Array.isArray(N.autoTrim) ? (Q = N.autoTrim[1], tt = N.autoTrim[0]) : Q = tt = N.autoTrim, (Z || Z === !1) && (Q = Z), ($ || $ === !1) && (tt = $), tt || Q ? Q === "slurp" && tt === "slurp" ? D.trim() : (Q === "_" || Q === "slurp" ? D = D.trimStart() : Q !== "-" && Q !== "nl" || (D = D.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? D = D.trimEnd() : tt !== "-" && tt !== "nl" || (D = D.replace(/(?:\r\n|\n|\r)$/, "")), D) : D;
        }(F, U, P, W), F && (F = F.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), B.push(F)));
      }
      U.rmWhitespace && (S = S.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), R.lastIndex = 0, _.lastIndex = 0, M.lastIndex = 0;
      for (var ct, gt = [I.exec, I.interpolate, I.raw].reduce(function(F, W) {
        return F && W ? F + "|" + L(W) : W ? L(W) : F;
      }, ""), ot = new RegExp(L(U.tags[0]) + "(-|_)?\\s*(" + gt + ")?\\s*", "g"), at = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + L(U.tags[1]) + ")", "g"); ct = ot.exec(S); ) {
        var ft = S.slice(x, ct.index);
        x = ct[0].length + ct.index;
        var ut = ct[2] || "";
        X(ft, ct[1]), at.lastIndex = x;
        for (var mt = void 0, wt = !1; mt = at.exec(S); ) {
          if (mt[1]) {
            var t = S.slice(x, mt.index);
            ot.lastIndex = x = at.lastIndex, P = mt[2], wt = { t: ut === I.exec ? "e" : ut === I.raw ? "r" : ut === I.interpolate ? "i" : "", val: t };
            break;
          }
          var O = mt[0];
          if (O === "/*") {
            var V = S.indexOf("*/", at.lastIndex);
            V === -1 && b("unclosed comment", S, mt.index), at.lastIndex = V;
          } else
            O === "'" ? (_.lastIndex = mt.index, _.exec(S) ? at.lastIndex = _.lastIndex : b("unclosed string", S, mt.index)) : O === '"' ? (M.lastIndex = mt.index, M.exec(S) ? at.lastIndex = M.lastIndex : b("unclosed string", S, mt.index)) : O === "`" && (R.lastIndex = mt.index, R.exec(S) ? at.lastIndex = R.lastIndex : b("unclosed string", S, mt.index));
        }
        wt ? (U.debug && (wt.lineNo = J(S, ct.index)), B.push(wt)) : b("unclosed tag", S, ct.index);
      }
      if (X(S.slice(x, S.length), !1), U.plugins)
        for (var v = 0; v < U.plugins.length; v++) {
          var A = U.plugins[v];
          A.processAST && (B = A.processAST(B, U));
        }
      return B;
    }
    function Y(S, U) {
      var B = U && U.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !S.startsWith("@")) {
        var P = U.filepath, x = B.get(P);
        if (this.config.cache && x)
          return x;
        var I = this.readFile(P), K = this.compile(I, U);
        return this.config.cache && B.define(P, K), K;
      }
      var j = B.get(S);
      if (j)
        return j;
      throw new m("Failed to get template '" + S + "'");
    }
    function rt(S, U, B) {
      var P, x = h({}, B, { async: !1 });
      return typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), P = Y.call(this, S, x)) : P = S, P.call(this, U, x);
    }
    function k(S, U, B) {
      var P, x = h({}, B, { async: !0 });
      typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), P = Y.call(this, S, x)) : P = S;
      var I = P.call(this, U, x);
      return Promise.resolve(I);
    }
    function T(S, U) {
      var B = this.compile(S, { async: !1 });
      return rt.call(this, B, U);
    }
    function i(S, U) {
      var B = this.compile(S, { async: !0 });
      return k.call(this, B, U);
    }
    var G = /* @__PURE__ */ function() {
      function S(B) {
        this.config = void 0, this.RuntimeErr = w, this.compile = g, this.compileToString = s, this.parse = z, this.render = rt, this.renderAsync = k, this.renderString = T, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = B ? h({}, C, B) : h({}, C);
      }
      var U = S.prototype;
      return U.configure = function(B) {
        this.config = h({}, this.config, B);
      }, U.withConfig = function(B) {
        return h({}, this, { config: h({}, this.config, B) });
      }, U.loadTemplate = function(B, P, x) {
        if (typeof P == "string")
          (x && x.async ? this.templatesAsync : this.templatesSync).define(B, this.compile(P, x));
        else {
          var I = this.templatesSync;
          (P.constructor.name === "AsyncFunction" || x && x.async) && (I = this.templatesAsync), I.define(B, P);
        }
      }, S;
    }(), it = /* @__PURE__ */ function(S) {
      function U() {
        return S.apply(this, arguments) || this;
      }
      return c(U, S), U;
    }(G);
    e.Eta = it;
  });
})(Xt, Xt.exports);
var Ke = Xt.exports;
const qe = new Ke.Eta({
  autoTrim: !1
});
function Tt(E, f) {
  return qe.renderString(E, f);
}
const $e = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_version=<%= it.fabricVersion %>`, tn = `plugins {
	id 'fabric-loom' version '1.10-SNAPSHOT'
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
  return Zt(E) >= 17;
}
function rn(E) {
  return Zt(E) >= 19;
}
function Zt(E) {
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
}, qt = {
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
  const f = Zt(E);
  return f <= 16 ? cn : f == 17 ? un : f <= 19 || f == 20 && an(E) <= 4 ? qt : hn;
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
  await E.write("gradle.properties", Tt($e, f)), await E.write("build.gradle", Tt(tn, { ...f, java: Ht(f.minecraftVersion) })), await E.write("settings.gradle", en);
}
const Se = `package <%= it.packageName %>;

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
    }
  }, o = `${f.modid}.mixins.json`;
  return await E.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/main/java/${e.replaceAll(".", "/")}/${h}.java`, Tt(Se, {
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
  return await E.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/client/java/${e.replaceAll(".", "/")}/${h}.java`, Tt(Se, {
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
}`, wn = `package <%= it.package %>

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
}`, yn = `package <%= it.package %>;

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
async function Sn(E, f) {
  const e = xn(f.projectName), h = {
    package: f.packageName,
    className: e,
    classFullName: f.packageName + "." + e,
    path: f.packageName.replaceAll(".", "/") + "/" + e,
    modid: f.modid,
    slf4j: Zt(f.minecraftVersion) >= 18,
    clientEntrypoint: f.splitSources,
    dataEntrypoint: f.dataGeneration
  };
  return f.kotlin ? await Fn(E, h) : await In(E, h);
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
  if (await E.write(`src/main/java/${f.path}.java`, Tt(vn, f)), f.clientEntrypoint && (await E.write(`src/client/java/${f.path}Client.java`, Tt(yn, { ...f, className: f.className + "Client" })), e = {
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
async function Fn(E, f) {
  var e = {
    main: [
      {
        value: f.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await E.write(`src/main/kotlin/${f.path}.kt`, Tt(wn, f)), f.clientEntrypoint && (await E.write(`src/client/kotlin/${f.path}Client.kt`, Tt(kn, { ...f, className: f.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: f.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), f.dataEntrypoint) {
    const h = f.clientEntrypoint ? "client" : "main";
    await E.write(`src/${h}/kotlin/${f.path}DataGenerator.kt`, Tt(Cn, { ...f, className: f.className + "DataGenerator" })), e = {
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
function Bn(E, f, e) {
  if (!f)
    return Qt($t);
  const h = e.create(128, 128);
  return h != null && _n(h, E) ? h.getPng() : Qt($t);
}
function _n(E, f) {
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
        p--, e.font = `${p}px ${Mt}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, p);
    }
    for (let o = 0; o < h.length; o++) {
      const p = h[o];
      e.font = `${a}px ${Mt}`;
      const m = E.measureText(e, p);
      r[o] = m.ascent + m.descent, c += r[o];
    }
    if (c += (h.length - 1) * 2, c <= 124)
      break;
  }
  const n = (128 - c) / 2;
  for (let o = 0; o < h.length; o++) {
    let p = 0;
    for (const w of r.slice(0, o))
      p += w + 2;
    const m = h[o];
    e.font = `${a}px ${Mt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const b = E.measureText(e, m);
    e.fillText(m, 64, n + p + b.ascent);
  }
  return !0;
}
function Nn(E) {
  return Number(E.split(".")[1]) >= 59;
}
async function Rn(E, f, e) {
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
    entrypoints: await Sn(E, e),
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
  a.depends[Nn(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await E.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await E.write(`src/main/resources/assets/${e.modid}/icon.png`, Bn(e.projectName, e.uniqueModIcon, f));
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
async function Un(E, f) {
  await E.write(".gitattributes", Vn), await E.write(".gitignore", ye), await E.write(".github/workflows/build.yml", ke), await E.write("LICENSE", Tn);
}
const Mt = "Comic Relief";
async function zn(E) {
  const f = await Ln(E.config);
  await Ye(E), await mn(E.writer, f), await Rn(E.writer, E.canvas, f), await Un(E.writer);
}
async function xe() {
  let E = await Le();
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
async function Ln(E) {
  return {
    ...E,
    loaderVersion: (await De()).find((f) => f.stable).version,
    fabricVersion: await Me(E.minecraftVersion),
    yarnVersion: (await Oe(E.minecraftVersion))[0].version,
    kotlin: await Dn(E)
  };
}
async function Dn(E) {
  if (!E.useKotlin)
    return;
  const e = (await Ge()).pop(), h = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: h
  };
}
const Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Mt,
  generateTemplate: zn,
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
function On(E) {
  let f, e, h = (
    /*error*/
    E[34].message + ""
  ), c, r, a;
  return {
    c() {
      f = nt("p"), e = Bt("Error: "), c = Bt(h), r = lt(), a = nt("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, zt(f, "color", "red");
    },
    m(n, o) {
      kt(n, f, o), H(f, e), H(f, c), kt(n, r, o), kt(n, a, o);
    },
    p: Vt,
    i: Vt,
    o: Vt,
    d(n) {
      n && Et(f), n && Et(r), n && Et(a);
    }
  };
}
function Gn(E) {
  let f, e, h, c, r, a, n, o, p, m, b, w, l, g, s, d, u, y, C, R, _, M, L, J, z, Y, rt, k, T, i, G, it, S, U, B, P, x, I, K, j, X, ct, gt, ot, at, ft, ut, mt, wt, t, O, V, v, A, F, W, D, N, Z, $, Q;
  function tt(et, vt) {
    return (
      /*customModId*/
      et[3] != null ? Pn : Wn
    );
  }
  let ht = tt(E), st = ht(E), pt = (
    /*modIdErrors*/
    E[14] != null && ie(E)
  ), Ct = (
    /*customModId*/
    E[3] != null && se(E)
  ), Ft = (
    /*packageNameErrors*/
    E[12]
  ), yt = [];
  for (let et = 0; et < Ft.length; et += 1)
    yt[et] = ce(ee(E, Ft, et));
  let dt = (
    /*data*/
    E[30].game
  ), St = [];
  for (let et = 0; et < dt.length; et += 1)
    St[et] = ue(te(E, dt, et));
  let It = (
    /*supportsDataGen*/
    E[11] && he(E)
  ), bt = (
    /*supportsSplitSources*/
    E[10] && Ae(E)
  );
  const Lt = [Qn, Jn], Nt = [];
  function Wt(et, vt) {
    return (
      /*loading*/
      et[9] ? 0 : 1
    );
  }
  return D = Wt(E), N = Nt[D] = Lt[D](E), {
    c() {
      f = nt("div"), e = nt("div"), h = nt("h3"), h.textContent = "Mod Name:", c = lt(), r = nt("hr"), a = lt(), st.c(), n = lt(), o = nt("input"), p = lt(), pt && pt.c(), m = lt(), Ct && Ct.c(), b = lt(), w = nt("div"), l = nt("h3"), l.textContent = "Package Name:", g = lt(), s = nt("hr"), d = lt(), u = nt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, y = lt(), C = nt("input"), R = lt();
      for (let et = 0; et < yt.length; et += 1)
        yt[et].c();
      _ = lt(), M = nt("div"), L = nt("h3"), L.textContent = "Minecraft Version:", J = lt(), z = nt("hr"), Y = lt(), rt = nt("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = lt(), T = nt("select");
      for (let et = 0; et < St.length; et += 1)
        St[et].c();
      i = lt(), G = nt("hr"), it = lt(), S = nt("br"), U = lt(), B = nt("h4"), B.textContent = "Advanced Options:", P = lt(), x = nt("div"), I = nt("div"), K = nt("input"), j = lt(), X = nt("label"), X.textContent = "Kotlin Programming Language", ct = lt(), gt = nt("p"), gt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = lt(), at = nt("div"), ft = nt("div"), ut = nt("input"), mt = lt(), wt = nt("label"), wt.textContent = "Mojang Mappings", t = lt(), O = nt("p"), O.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", V = lt(), It && It.c(), v = lt(), bt && bt.c(), A = lt(), F = nt("br"), W = lt(), N.c(), q(h, "class", "svelte-c4460r"), q(r, "class", "svelte-c4460r"), q(o, "id", "project-name"), q(o, "class", "svelte-c4460r"), q(e, "class", "form-line svelte-c4460r"), q(l, "class", "svelte-c4460r"), q(s, "class", "svelte-c4460r"), q(u, "class", "svelte-c4460r"), q(C, "id", "package-name"), q(C, "class", "svelte-c4460r"), q(w, "class", "form-line svelte-c4460r"), q(L, "class", "svelte-c4460r"), q(z, "class", "svelte-c4460r"), q(rt, "class", "svelte-c4460r"), q(T, "id", "minecraft-version"), zt(T, "min-width", "200px"), q(T, "class", "svelte-c4460r"), /*minecraftVersion*/
      E[0] === void 0 && Te(() => (
        /*select_change_handler*/
        E[24].call(T)
      )), q(M, "class", "form-line svelte-c4460r"), q(G, "class", "svelte-c4460r"), q(S, "class", "svelte-c4460r"), q(B, "class", "svelte-c4460r"), q(K, "id", "kotlin"), q(K, "type", "checkbox"), q(K, "class", "option-input svelte-c4460r"), q(X, "for", "kotlin"), q(X, "class", "option-label svelte-c4460r"), q(I, "class", "option-container svelte-c4460r"), q(gt, "class", "option-body svelte-c4460r"), q(x, "class", "svelte-c4460r"), q(ut, "id", "mojmap"), q(ut, "type", "checkbox"), q(ut, "class", "option-input svelte-c4460r"), q(wt, "for", "mojmap"), q(wt, "class", "option-label svelte-c4460r"), q(ft, "class", "option-container svelte-c4460r"), q(O, "class", "option-body svelte-c4460r"), q(at, "class", "svelte-c4460r"), q(F, "class", "svelte-c4460r"), q(f, "class", "template svelte-c4460r");
    },
    m(et, vt) {
      kt(et, f, vt), H(f, e), H(e, h), H(e, c), H(e, r), H(e, a), st.m(e, null), H(e, n), H(e, o), Ut(
        o,
        /*projectName*/
        E[1]
      ), H(e, p), pt && pt.m(e, null), H(f, m), Ct && Ct.m(f, null), H(f, b), H(f, w), H(w, l), H(w, g), H(w, s), H(w, d), H(w, u), H(w, y), H(w, C), Ut(
        C,
        /*packageName*/
        E[2]
      ), H(w, R);
      for (let xt = 0; xt < yt.length; xt += 1)
        yt[xt] && yt[xt].m(w, null);
      H(f, _), H(f, M), H(M, L), H(M, J), H(M, z), H(M, Y), H(M, rt), H(M, k), H(M, T);
      for (let xt = 0; xt < St.length; xt += 1)
        St[xt] && St[xt].m(T, null);
      Kt(
        T,
        /*minecraftVersion*/
        E[0],
        !0
      ), H(f, i), H(f, G), H(f, it), H(f, S), H(f, U), H(f, B), H(f, P), H(f, x), H(x, I), H(I, K), K.checked = /*useKotlin*/
      E[5], H(I, j), H(I, X), H(x, ct), H(x, gt), H(f, ot), H(f, at), H(at, ft), H(ft, ut), ut.checked = /*mojmap*/
      E[6], H(ft, mt), H(ft, wt), H(at, t), H(at, O), H(f, V), It && It.m(f, null), H(f, v), bt && bt.m(f, null), H(f, A), H(f, F), H(f, W), Nt[D].m(f, null), Z = !0, $ || (Q = [
        _t(
          o,
          "input",
          /*input0_input_handler*/
          E[21]
        ),
        _t(
          o,
          "blur",
          /*doFormatProjectName*/
          E[17]
        ),
        _t(
          C,
          "keyup",
          /*doFormatPackageName*/
          E[18]
        ),
        _t(
          C,
          "input",
          /*input1_input_handler*/
          E[23]
        ),
        _t(
          T,
          "change",
          /*select_change_handler*/
          E[24]
        ),
        _t(
          K,
          "change",
          /*input2_change_handler*/
          E[25]
        ),
        _t(
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
      et[1] && Ut(
        o,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[14] != null ? pt ? pt.p(et, vt) : (pt = ie(et), pt.c(), pt.m(e, null)) : pt && (pt.d(1), pt = null), /*customModId*/
      et[3] != null ? Ct ? Ct.p(et, vt) : (Ct = se(et), Ct.c(), Ct.m(f, b)) : Ct && (Ct.d(1), Ct = null), vt[0] & /*packageName*/
      4 && C.value !== /*packageName*/
      et[2] && Ut(
        C,
        /*packageName*/
        et[2]
      ), vt[0] & /*packageNameErrors*/
      4096) {
        Ft = /*packageNameErrors*/
        et[12];
        let At;
        for (At = 0; At < Ft.length; At += 1) {
          const Dt = ee(et, Ft, At);
          yt[At] ? yt[At].p(Dt, vt) : (yt[At] = ce(Dt), yt[At].c(), yt[At].m(w, null));
        }
        for (; At < yt.length; At += 1)
          yt[At].d(1);
        yt.length = Ft.length;
      }
      if (vt[0] & /*versions*/
      32768) {
        dt = /*data*/
        et[30].game;
        let At;
        for (At = 0; At < dt.length; At += 1) {
          const Dt = te(et, dt, At);
          St[At] ? St[At].p(Dt, vt) : (St[At] = ue(Dt), St[At].c(), St[At].m(T, null));
        }
        for (; At < St.length; At += 1)
          St[At].d(1);
        St.length = dt.length;
      }
      vt[0] & /*minecraftVersion, versions*/
      32769 && Kt(
        T,
        /*minecraftVersion*/
        et[0]
      ), vt[0] & /*useKotlin*/
      32 && (K.checked = /*useKotlin*/
      et[5]), vt[0] & /*mojmap*/
      64 && (ut.checked = /*mojmap*/
      et[6]), /*supportsDataGen*/
      et[11] ? It ? It.p(et, vt) : (It = he(et), It.c(), It.m(f, v)) : It && (It.d(1), It = null), /*supportsSplitSources*/
      et[10] ? bt ? bt.p(et, vt) : (bt = Ae(et), bt.c(), bt.m(f, A)) : bt && (bt.d(1), bt = null);
      let xt = D;
      D = Wt(et), D === xt ? Nt[D].p(et, vt) : (Ue(), Gt(Nt[xt], 1, 1, () => {
        Nt[xt] = null;
      }), ze(), N = Nt[D], N ? N.p(et, vt) : (N = Nt[D] = Lt[D](et), N.c()), Ot(N, 1), N.m(f, null));
    },
    i(et) {
      Z || (Ot(N), Z = !0);
    },
    o(et) {
      Gt(N), Z = !1;
    },
    d(et) {
      et && Et(f), st.d(), pt && pt.d(), Ct && Ct.d(), Jt(yt, et), Jt(St, et), It && It.d(), bt && bt.d(), Nt[D].d(), $ = !1, de(Q);
    }
  };
}
function Wn(E) {
  let f, e, h, c, r, a, n, o;
  return {
    c() {
      f = nt("p"), e = Bt("Choose a name for your new mod. The mod ID will be "), h = nt("code"), c = Bt(
        /*modid*/
        E[4]
      ), r = Bt(". "), a = nt("a"), a.textContent = "Use custom id", q(h, "class", "svelte-c4460r"), q(a, "href", ""), q(a, "class", "svelte-c4460r"), q(f, "class", "svelte-c4460r");
    },
    m(p, m) {
      kt(p, f, m), H(f, e), H(f, h), H(h, c), H(f, r), H(f, a), n || (o = _t(a, "click", Yt(
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
function Pn(E) {
  let f;
  return {
    c() {
      f = nt("p"), f.textContent = "Choose a name for your new mod.", q(f, "class", "svelte-c4460r");
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
      f = lt(), e = nt("br"), q(e, "class", "svelte-c4460r");
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
      Jt(c, r), r && Et(f), r && Et(e);
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
      f = nt("li"), h = Bt(e), zt(f, "color", "red"), q(f, "class", "svelte-c4460r");
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
  let f, e, h, c, r, a, n, o, p, m, b, w, l, g = (
    /*customIdErrors*/
    E[13] != null && oe(E)
  );
  return {
    c() {
      f = nt("div"), e = nt("h3"), e.textContent = "Mod ID:", h = lt(), c = nt("hr"), r = lt(), a = nt("p"), n = Bt("Enter the modid you wish to use for your mod. "), o = nt("a"), o.textContent = "Use default", p = lt(), g && g.c(), m = lt(), b = nt("input"), q(e, "class", "svelte-c4460r"), q(c, "class", "svelte-c4460r"), q(o, "href", ""), q(o, "class", "svelte-c4460r"), q(a, "class", "svelte-c4460r"), q(b, "id", "mod-id"), q(b, "class", "svelte-c4460r"), q(f, "class", "form-line svelte-c4460r");
    },
    m(s, d) {
      kt(s, f, d), H(f, e), H(f, h), H(f, c), H(f, r), H(f, a), H(a, n), H(a, o), H(f, p), g && g.m(f, null), H(f, m), H(f, b), Ut(
        b,
        /*customModId*/
        E[3]
      ), w || (l = [
        _t(o, "click", Yt(
          /*useDefaultModId*/
          E[20]
        )),
        _t(
          b,
          "input",
          /*input_input_handler*/
          E[22]
        )
      ], w = !0);
    },
    p(s, d) {
      /*customIdErrors*/
      s[13] != null ? g ? g.p(s, d) : (g = oe(s), g.c(), g.m(f, m)) : g && (g.d(1), g = null), d[0] & /*customModId*/
      8 && b.value !== /*customModId*/
      s[3] && Ut(
        b,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && Et(f), g && g.d(), w = !1, de(l);
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
      f = lt(), e = nt("br"), q(e, "class", "svelte-c4460r");
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
      Jt(c, r), r && Et(f), r && Et(e);
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
      f = nt("li"), h = Bt(e), zt(f, "color", "red"), q(f, "class", "svelte-c4460r");
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
      f = nt("li"), h = Bt(e), zt(f, "color", "red"), q(f, "class", "svelte-c4460r");
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
      f = nt("option"), h = Bt(e), f.__value = /*version*/
      E[31].version, f.value = f.__value, q(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), H(f, h);
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
      f = nt("div"), e = nt("div"), h = nt("input"), c = lt(), r = nt("label"), r.textContent = "Data Generation", a = lt(), n = nt("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', q(h, "id", "datagen"), q(h, "type", "checkbox"), q(h, "class", "option-input svelte-c4460r"), q(r, "for", "datagen"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(f, "class", "svelte-c4460r");
    },
    m(m, b) {
      kt(m, f, b), H(f, e), H(e, h), h.checked = /*dataGeneration*/
      E[7], H(e, c), H(e, r), H(f, a), H(f, n), o || (p = _t(
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
                This enforces a clear separation between the client and server code.`, q(h, "id", "splitSources"), q(h, "type", "checkbox"), q(h, "class", "option-input svelte-c4460r"), q(r, "for", "splitSources"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(f, "class", "svelte-c4460r");
    },
    m(m, b) {
      kt(m, f, b), H(f, e), H(e, h), h.checked = /*splitSources*/
      E[8], H(e, c), H(e, r), H(f, a), H(f, n), o || (p = _t(
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
function Jn(E) {
  let f, e, h, c, r, a;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Bt(" Download Template (.ZIP)"), q(f, "class", "button primary large download-button svelte-c4460r"), q(f, "href", "");
    },
    m(n, o) {
      kt(n, f, o), pe(e, f, null), H(f, h), c = !0, r || (a = _t(f, "click", Yt(
        /*generate*/
        E[16]
      )), r = !0);
    },
    p: Vt,
    i(n) {
      c || (Ot(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Gt(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && Et(f), me(e), r = !1, a();
    }
  };
}
function Qn(E) {
  let f, e, h, c;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Bt(" Generating..."), q(f, "class", "button primary download-button svelte-c4460r"), q(f, "href", "");
    },
    m(r, a) {
      kt(r, f, a), pe(e, f, null), H(f, h), c = !0;
    },
    p: Vt,
    i(r) {
      c || (Ot(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Gt(e.$$.fragment, r), c = !1;
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
      f = nt("p"), e = Bt(`Loading data
    
        
        `), h = nt("span"), c = Bt("..."), zt(h, "font-family", Mt);
    },
    m(r, a) {
      kt(r, f, a), H(f, e), H(f, h), H(h, c);
    },
    p: Vt,
    i: Vt,
    o: Vt,
    d(r) {
      r && Et(f);
    }
  };
}
function Zn(E) {
  let f, e, h = {
    ctx: E,
    current: null,
    token: null,
    hasCatch: !0,
    pending: jn,
    then: Gn,
    catch: On,
    value: 30,
    error: 34,
    blocks: [, , ,]
  };
  return _e(
    /*versions*/
    E[15],
    h
  ), {
    c() {
      f = Ne(), h.block.c();
    },
    m(c, r) {
      kt(c, f, r), h.block.m(c, h.anchor = r), h.mount = () => f.parentNode, h.anchor = f, e = !0;
    },
    p(c, r) {
      E = c, Re(h, E, r);
    },
    i(c) {
      e || (Ot(h.block), e = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const a = h.blocks[r];
        Gt(a);
      }
      e = !1;
    },
    d(c) {
      c && Et(f), h.block.d(c), h.token = null, h = null;
    }
  };
}
function Hn(E, f, e) {
  let h, c, r, a, n, o, p, m = "Template Mod", b = "com.example", w = !1, l = !1, g = !1, s = !0, d, u = !1;
  const y = Promise.all([xe()]).then(([S]) => (e(0, p = S.find((U) => U.stable).version), { game: S }));
  function C(S) {
    if (S !== void 0)
      return Ce(S, d === void 0);
  }
  async function R() {
    if (a !== void 0 || d !== void 0 && n !== void 0 || o.length > 0)
      return;
    e(9, u = !0);
    const S = await Promise.resolve().then(() => Mn), U = {
      modid: d ?? h,
      minecraftVersion: p,
      projectName: m,
      packageName: b,
      useKotlin: w,
      mojmap: l,
      dataGeneration: g && c,
      splitSources: s && r,
      uniqueModIcon: !0
    }, B = new Pe();
    await S.generateTemplate({
      config: U,
      writer: {
        write: async (P, x, I) => {
          B.file(P, x, {
            unixPermissions: I != null && I.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(P, x) {
          const I = document.createElement("canvas");
          return I.width = P, I.height = x, {
            getContext: (K) => I.getContext(K),
            getPng: () => Qt(I.toDataURL().split(";base64,")[1]),
            measureText(K, j) {
              const X = K.measureText(j);
              return {
                width: X.width,
                ascent: X.actualBoundingBoxAscent,
                descent: X.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Qe.saveAs(await B.generateAsync({ type: "blob", platform: "UNIX" }), `${h}-template-${U.minecraftVersion}.zip`), e(9, u = !1);
  }
  function _() {
    e(1, m = m.trim());
  }
  function M() {
    e(2, b = on(b));
  }
  function L() {
    e(3, d = h);
  }
  function J() {
    e(3, d = void 0);
  }
  function z() {
    m = this.value, e(1, m);
  }
  function Y() {
    d = this.value, e(3, d);
  }
  function rt() {
    b = this.value, e(2, b);
  }
  function k() {
    p = Ve(this), e(0, p), e(15, y);
  }
  function T() {
    w = this.checked, e(5, w);
  }
  function i() {
    l = this.checked, e(6, l);
  }
  function G() {
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
    w,
    l,
    g,
    s,
    u,
    r,
    c,
    o,
    n,
    a,
    y,
    R,
    _,
    M,
    L,
    J,
    z,
    Y,
    rt,
    k,
    T,
    i,
    G,
    it
  ];
}
class qn extends Ie {
  constructor(f) {
    super(), Fe(this, f, Hn, Zn, Be, {}, null, [-1, -1]);
  }
}
export {
  qn as default
};

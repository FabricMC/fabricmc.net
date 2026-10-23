import { A as e, B as t, C as n, D as r, E as i, F as a, I as o, L as s, M as c, N as l, O as u, P as d, T as f, a as p, b as m, c as h, f as g, g as _, h as v, j as y, k as b, l as x, m as S, n as C, o as w, p as T, s as E, t as D, u as O, v as k, w as A, x as j, y as M, z as N } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { c as P, l as F, o as I, r as L, t as R, u as z } from "./Api-DQbTMgo_.js";
import B from "./DownloadIcon-Dx6AF_oA.js";
import { a as V, c as H, i as U, l as W, n as G, o as K, r as q, s as J, t as ee, u as te } from "./minecraft-BzvMyynV.js";
//#region \0rolldown/runtime.js
var Y = Object.create, ne = Object.defineProperty, re = Object.getOwnPropertyDescriptor, ie = Object.getOwnPropertyNames, ae = Object.getPrototypeOf, oe = Object.prototype.hasOwnProperty, X = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), se = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ie(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !oe.call(e, s) && s !== n && ne(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = re(t, s)) || r.enumerable
	});
	return e;
}, ce = (e, t, n) => (n = e == null ? {} : Y(ae(e)), se(t || !e || !e.__esModule || !oe.call(e, "default") ? ne(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Z = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), le = /* @__PURE__ */ X(((e, t) => {
	(function(n) {
		typeof e == "object" && t !== void 0 ? t.exports = n() : typeof define == "function" && define.amd ? define([], n) : (typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this).JSZip = n();
	})(function() {
		return function e(t, n, r) {
			function i(o, s) {
				if (!n[o]) {
					if (!t[o]) {
						var c = typeof Z == "function" && Z;
						if (!s && c) return c(o, !0);
						if (a) return a(o, !0);
						var l = /* @__PURE__ */ Error("Cannot find module '" + o + "'");
						throw l.code = "MODULE_NOT_FOUND", l;
					}
					var u = n[o] = { exports: {} };
					t[o][0].call(u.exports, function(e) {
						var n = t[o][1][e];
						return i(n || e);
					}, u, u.exports, e, t, n, r);
				}
				return n[o].exports;
			}
			for (var a = typeof Z == "function" && Z, o = 0; o < r.length; o++) i(r[o]);
			return i;
		}({
			1: [function(e, t, n) {
				var r = e("./utils"), i = e("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				n.encode = function(e) {
					for (var t, n, i, o, s, c, l, u = [], d = 0, f = e.length, p = f, m = r.getTypeOf(e) !== "string"; d < e.length;) p = f - d, i = m ? (t = e[d++], n = d < f ? e[d++] : 0, d < f ? e[d++] : 0) : (t = e.charCodeAt(d++), n = d < f ? e.charCodeAt(d++) : 0, d < f ? e.charCodeAt(d++) : 0), o = t >> 2, s = (3 & t) << 4 | n >> 4, c = 1 < p ? (15 & n) << 2 | i >> 6 : 64, l = 2 < p ? 63 & i : 64, u.push(a.charAt(o) + a.charAt(s) + a.charAt(c) + a.charAt(l));
					return u.join("");
				}, n.decode = function(e) {
					var t, n, r, o, s, c, l = 0, u = 0, d = "data:";
					if (e.substr(0, d.length) === d) throw Error("Invalid base64 input, it looks like a data url.");
					var f, p = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
					if (e.charAt(e.length - 1) === a.charAt(64) && p--, e.charAt(e.length - 2) === a.charAt(64) && p--, p % 1 != 0) throw Error("Invalid base64 input, bad content length.");
					for (f = i.uint8array ? new Uint8Array(0 | p) : Array(0 | p); l < e.length;) t = a.indexOf(e.charAt(l++)) << 2 | (o = a.indexOf(e.charAt(l++))) >> 4, n = (15 & o) << 4 | (s = a.indexOf(e.charAt(l++))) >> 2, r = (3 & s) << 6 | (c = a.indexOf(e.charAt(l++))), f[u++] = t, s !== 64 && (f[u++] = n), c !== 64 && (f[u++] = r);
					return f;
				};
			}, {
				"./support": 30,
				"./utils": 32
			}],
			2: [function(e, t, n) {
				var r = e("./external"), i = e("./stream/DataWorker"), a = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
				function s(e, t, n, r, i) {
					this.compressedSize = e, this.uncompressedSize = t, this.crc32 = n, this.compression = r, this.compressedContent = i;
				}
				s.prototype = {
					getContentWorker: function() {
						var e = new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), t = this;
						return e.on("end", function() {
							if (this.streamInfo.data_length !== t.uncompressedSize) throw Error("Bug : uncompressed data size mismatch");
						}), e;
					},
					getCompressedWorker: function() {
						return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
					}
				}, s.createWorkerFrom = function(e, t, n) {
					return e.pipe(new a()).pipe(new o("uncompressedSize")).pipe(t.compressWorker(n)).pipe(new o("compressedSize")).withStreamInfo("compression", t);
				}, t.exports = s;
			}, {
				"./external": 6,
				"./stream/Crc32Probe": 25,
				"./stream/DataLengthProbe": 26,
				"./stream/DataWorker": 27
			}],
			3: [function(e, t, n) {
				var r = e("./stream/GenericWorker");
				n.STORE = {
					magic: "\0\0",
					compressWorker: function() {
						return new r("STORE compression");
					},
					uncompressWorker: function() {
						return new r("STORE decompression");
					}
				}, n.DEFLATE = e("./flate");
			}, {
				"./flate": 7,
				"./stream/GenericWorker": 28
			}],
			4: [function(e, t, n) {
				var r = e("./utils"), i = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t) {
					return e !== void 0 && e.length ? r.getTypeOf(e) === "string" ? function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t.charCodeAt(s))];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : 0;
				};
			}, { "./utils": 32 }],
			5: [function(e, t, n) {
				n.base64 = !1, n.binary = !1, n.dir = !1, n.createFolders = !0, n.date = null, n.compression = null, n.compressionOptions = null, n.comment = null, n.unixPermissions = null, n.dosPermissions = null;
			}, {}],
			6: [function(e, t, n) {
				var r = null;
				r = typeof Promise < "u" ? Promise : e("lie"), t.exports = { Promise: r };
			}, { lie: 37 }],
			7: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", i = e("pako"), a = e("./utils"), o = e("./stream/GenericWorker"), s = r ? "uint8array" : "array";
				function c(e, t) {
					o.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
				}
				n.magic = "\b\0", a.inherits(c, o), c.prototype.processChunk = function(e) {
					this.meta = e.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(s, e.data), !1);
				}, c.prototype.flush = function() {
					o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
				}, c.prototype.cleanUp = function() {
					o.prototype.cleanUp.call(this), this._pako = null;
				}, c.prototype._createPako = function() {
					this._pako = new i[this._pakoAction]({
						raw: !0,
						level: this._pakoOptions.level || -1
					});
					var e = this;
					this._pako.onData = function(t) {
						e.push({
							data: t,
							meta: e.meta
						});
					};
				}, n.compressWorker = function(e) {
					return new c("Deflate", e);
				}, n.uncompressWorker = function() {
					return new c("Inflate", {});
				};
			}, {
				"./stream/GenericWorker": 28,
				"./utils": 32,
				pako: 38
			}],
			8: [function(e, t, n) {
				function r(e, t) {
					var n, r = "";
					for (n = 0; n < t; n++) r += String.fromCharCode(255 & e), e >>>= 8;
					return r;
				}
				function i(e, t, n, i, o, u) {
					var d, f, p = e.file, m = e.compression, h = u !== s.utf8encode, g = a.transformTo("string", u(p.name)), _ = a.transformTo("string", s.utf8encode(p.name)), v = p.comment, y = a.transformTo("string", u(v)), b = a.transformTo("string", s.utf8encode(v)), x = _.length !== p.name.length, S = b.length !== v.length, C = "", w = "", T = "", E = p.dir, D = p.date, O = {
						crc32: 0,
						compressedSize: 0,
						uncompressedSize: 0
					};
					t && !n || (O.crc32 = e.crc32, O.compressedSize = e.compressedSize, O.uncompressedSize = e.uncompressedSize);
					var k = 0;
					t && (k |= 8), h || !x && !S || (k |= 2048);
					var A = 0, j = 0;
					E && (A |= 16), o === "UNIX" ? (j = 798, A |= function(e, t) {
						var n = e;
						return e || (n = t ? 16893 : 33204), (65535 & n) << 16;
					}(p.unixPermissions, E)) : (j = 20, A |= function(e) {
						return 63 & (e || 0);
					}(p.dosPermissions)), d = D.getUTCHours(), d <<= 6, d |= D.getUTCMinutes(), d <<= 5, d |= D.getUTCSeconds() / 2, f = D.getUTCFullYear() - 1980, f <<= 4, f |= D.getUTCMonth() + 1, f <<= 5, f |= D.getUTCDate(), x && (w = r(1, 1) + r(c(g), 4) + _, C += "up" + r(w.length, 2) + w), S && (T = r(1, 1) + r(c(y), 4) + b, C += "uc" + r(T.length, 2) + T);
					var M = "";
					return M += "\n\0", M += r(k, 2), M += m.magic, M += r(d, 2), M += r(f, 2), M += r(O.crc32, 4), M += r(O.compressedSize, 4), M += r(O.uncompressedSize, 4), M += r(g.length, 2), M += r(C.length, 2), {
						fileRecord: l.LOCAL_FILE_HEADER + M + g + C,
						dirRecord: l.CENTRAL_FILE_HEADER + r(j, 2) + M + r(y.length, 2) + "\0\0\0\0" + r(A, 4) + r(i, 4) + g + C + y
					};
				}
				var a = e("../utils"), o = e("../stream/GenericWorker"), s = e("../utf8"), c = e("../crc32"), l = e("../signature");
				function u(e, t, n, r) {
					o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = n, this.encodeFileName = r, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
				}
				a.inherits(u, o), u.prototype.push = function(e) {
					var t = e.meta.percent || 0, n = this.entriesCount, r = this._sources.length;
					this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, o.prototype.push.call(this, {
						data: e.data,
						meta: {
							currentFile: this.currentFile,
							percent: n ? (t + 100 * (n - r - 1)) / n : 100
						}
					}));
				}, u.prototype.openedSource = function(e) {
					this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
					var t = this.streamFiles && !e.file.dir;
					if (t) {
						var n = i(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						this.push({
							data: n.fileRecord,
							meta: { percent: 0 }
						});
					} else this.accumulate = !0;
				}, u.prototype.closedSource = function(e) {
					this.accumulate = !1;
					var t = this.streamFiles && !e.file.dir, n = i(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
					if (this.dirRecords.push(n.dirRecord), t) this.push({
						data: function(e) {
							return l.DATA_DESCRIPTOR + r(e.crc32, 4) + r(e.compressedSize, 4) + r(e.uncompressedSize, 4);
						}(e),
						meta: { percent: 100 }
					});
					else for (this.push({
						data: n.fileRecord,
						meta: { percent: 0 }
					}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
					this.currentFile = null;
				}, u.prototype.flush = function() {
					for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
						data: this.dirRecords[t],
						meta: { percent: 100 }
					});
					var n = this.bytesWritten - e, i = function(e, t, n, i, o) {
						var s = a.transformTo("string", o(i));
						return l.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(e, 2) + r(e, 2) + r(t, 4) + r(n, 4) + r(s.length, 2) + s;
					}(this.dirRecords.length, n, e, this.zipComment, this.encodeFileName);
					this.push({
						data: i,
						meta: { percent: 100 }
					});
				}, u.prototype.prepareNextSource = function() {
					this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
				}, u.prototype.registerPrevious = function(e) {
					this._sources.push(e);
					var t = this;
					return e.on("data", function(e) {
						t.processChunk(e);
					}), e.on("end", function() {
						t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
					}), e.on("error", function(e) {
						t.error(e);
					}), this;
				}, u.prototype.resume = function() {
					return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
				}, u.prototype.error = function(e) {
					var t = this._sources;
					if (!o.prototype.error.call(this, e)) return !1;
					for (var n = 0; n < t.length; n++) try {
						t[n].error(e);
					} catch {}
					return !0;
				}, u.prototype.lock = function() {
					o.prototype.lock.call(this);
					for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
				}, t.exports = u;
			}, {
				"../crc32": 4,
				"../signature": 23,
				"../stream/GenericWorker": 28,
				"../utf8": 31,
				"../utils": 32
			}],
			9: [function(e, t, n) {
				var r = e("../compressions"), i = e("./ZipFileWorker");
				n.generateWorker = function(e, t, n) {
					var a = new i(t.streamFiles, n, t.platform, t.encodeFileName), o = 0;
					try {
						e.forEach(function(e, n) {
							o++;
							var i = function(e, t) {
								var n = e || t, i = r[n];
								if (!i) throw Error(n + " is not a valid compression method !");
								return i;
							}(n.options.compression, t.compression), s = n.options.compressionOptions || t.compressionOptions || {}, c = n.dir, l = n.date;
							n._compressWorker(i, s).withStreamInfo("file", {
								name: e,
								dir: c,
								date: l,
								comment: n.comment || "",
								unixPermissions: n.unixPermissions,
								dosPermissions: n.dosPermissions
							}).pipe(a);
						}), a.entriesCount = o;
					} catch (e) {
						a.error(e);
					}
					return a;
				};
			}, {
				"../compressions": 3,
				"./ZipFileWorker": 8
			}],
			10: [function(e, t, n) {
				function r() {
					if (!(this instanceof r)) return new r();
					if (arguments.length) throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
					this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
						var e = new r();
						for (var t in this) typeof this[t] != "function" && (e[t] = this[t]);
						return e;
					};
				}
				(r.prototype = e("./object")).loadAsync = e("./load"), r.support = e("./support"), r.defaults = e("./defaults"), r.version = "3.10.2", r.loadAsync = function(e, t) {
					return new r().loadAsync(e, t);
				}, r.external = e("./external"), t.exports = r;
			}, {
				"./defaults": 5,
				"./external": 6,
				"./load": 11,
				"./object": 15,
				"./support": 30
			}],
			11: [function(e, t, n) {
				var r = e("./utils"), i = e("./external"), a = e("./utf8"), o = e("./zipEntries"), s = e("./stream/Crc32Probe"), c = e("./nodejsUtils");
				function l(e) {
					return new i.Promise(function(t, n) {
						var r = e.decompressed.getContentWorker().pipe(new s());
						r.on("error", function(e) {
							n(e);
						}).on("end", function() {
							r.streamInfo.crc32 === e.decompressed.crc32 ? t() : n(/* @__PURE__ */ Error("Corrupted zip : CRC32 mismatch"));
						}).resume();
					});
				}
				t.exports = function(e, t) {
					var n = this;
					return t = r.extend(t || {}, {
						base64: !1,
						checkCRC32: !1,
						optimizedBinaryString: !1,
						createFolders: !1,
						decodeFileName: a.utf8decode
					}), c.isNode && c.isStream(e) ? i.Promise.reject(/* @__PURE__ */ Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", e, !0, t.optimizedBinaryString, t.base64).then(function(e) {
						var n = new o(t);
						return n.load(e), n;
					}).then(function(e) {
						var n = [i.Promise.resolve(e)], r = e.files;
						if (t.checkCRC32) for (var a = 0; a < r.length; a++) n.push(l(r[a]));
						return i.Promise.all(n);
					}).then(function(e) {
						for (var i = e.shift(), a = i.files, o = 0; o < a.length; o++) {
							var s = a[o], c = s.fileNameStr, l = r.resolve(s.fileNameStr);
							n.file(l, s.decompressed, {
								binary: !0,
								optimizedBinaryString: !0,
								date: s.date,
								dir: s.dir,
								comment: s.fileCommentStr.length ? s.fileCommentStr : null,
								unixPermissions: s.unixPermissions,
								dosPermissions: s.dosPermissions,
								createFolders: t.createFolders
							}), s.dir || (n.file(l).unsafeOriginalName = c);
						}
						return i.zipComment.length && (n.comment = i.zipComment), n;
					});
				};
			}, {
				"./external": 6,
				"./nodejsUtils": 14,
				"./stream/Crc32Probe": 25,
				"./utf8": 31,
				"./utils": 32,
				"./zipEntries": 33
			}],
			12: [function(e, t, n) {
				var r = e("../utils"), i = e("../stream/GenericWorker");
				function a(e, t) {
					i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
				}
				r.inherits(a, i), a.prototype._bindStream = function(e) {
					var t = this;
					(this._stream = e).pause(), e.on("data", function(e) {
						t.push({
							data: e,
							meta: { percent: 0 }
						});
					}).on("error", function(e) {
						t.isPaused ? this.generatedError = e : t.error(e);
					}).on("end", function() {
						t.isPaused ? t._upstreamEnded = !0 : t.end();
					});
				}, a.prototype.pause = function() {
					return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
				}, t.exports = a;
			}, {
				"../stream/GenericWorker": 28,
				"../utils": 32
			}],
			13: [function(e, t, n) {
				var r = e("readable-stream").Readable;
				function i(e, t, n) {
					r.call(this, t), this._helper = e;
					var i = this;
					e.on("data", function(e, t) {
						i.push(e) || i._helper.pause(), n && n(t);
					}).on("error", function(e) {
						i.emit("error", e);
					}).on("end", function() {
						i.push(null);
					});
				}
				e("../utils").inherits(i, r), i.prototype._read = function() {
					this._helper.resume();
				}, t.exports = i;
			}, {
				"../utils": 32,
				"readable-stream": 16
			}],
			14: [function(e, t, n) {
				t.exports = {
					isNode: typeof Buffer < "u",
					newBufferFrom: function(e, t) {
						if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
						if (typeof e == "number") throw Error("The \"data\" argument must not be a number");
						return new Buffer(e, t);
					},
					allocBuffer: function(e) {
						if (Buffer.alloc) return Buffer.alloc(e);
						var t = new Buffer(e);
						return t.fill(0), t;
					},
					isBuffer: function(e) {
						return Buffer.isBuffer(e);
					},
					isStream: function(e) {
						return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
					}
				};
			}, {}],
			15: [function(e, t, n) {
				function r(e, t, n) {
					var r, i = a.getTypeOf(t), s = a.extend(n || {}, c);
					s.date = s.date || /* @__PURE__ */ new Date(), s.compression !== null && (s.compression = s.compression.toUpperCase()), typeof s.unixPermissions == "string" && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = h(e)), s.createFolders && (r = m(e)) && g.call(this, r, !0);
					var d = i === "string" && !1 === s.binary && !1 === s.base64;
					n && n.binary !== void 0 || (s.binary = !d), (t instanceof l && t.uncompressedSize === 0 || s.dir || !t || t.length === 0) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
					var _ = null;
					_ = t instanceof l || t instanceof o ? t : f.isNode && f.isStream(t) ? new p(e, t) : a.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
					var v = new u(e, _, s);
					this.files[e] = v;
				}
				var i = e("./utf8"), a = e("./utils"), o = e("./stream/GenericWorker"), s = e("./stream/StreamHelper"), c = e("./defaults"), l = e("./compressedObject"), u = e("./zipObject"), d = e("./generate"), f = e("./nodejsUtils"), p = e("./nodejs/NodejsStreamInputAdapter"), m = function(e) {
					e.slice(-1) === "/" && (e = e.substring(0, e.length - 1));
					var t = e.lastIndexOf("/");
					return 0 < t ? e.substring(0, t) : "";
				}, h = function(e) {
					return e.slice(-1) !== "/" && (e += "/"), e;
				}, g = function(e, t) {
					return t = t === void 0 ? c.createFolders : t, e = h(e), this.files[e] || r.call(this, e, null, {
						dir: !0,
						createFolders: t
					}), this.files[e];
				};
				function _(e) {
					return Object.prototype.toString.call(e) === "[object RegExp]";
				}
				t.exports = {
					load: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					forEach: function(e) {
						var t, n, r;
						for (t in this.files) r = this.files[t], (n = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(n, r);
					},
					filter: function(e) {
						var t = [];
						return this.forEach(function(n, r) {
							e(n, r) && t.push(r);
						}), t;
					},
					file: function(e, t, n) {
						if (arguments.length !== 1) return e = this.root + e, r.call(this, e, t, n), this;
						if (_(e)) {
							var i = e;
							return this.filter(function(e, t) {
								return !t.dir && i.test(e);
							});
						}
						var a = this.files[this.root + e];
						return a && !a.dir ? a : null;
					},
					folder: function(e) {
						if (!e) return this;
						if (_(e)) return this.filter(function(t, n) {
							return n.dir && e.test(t);
						});
						var t = this.root + e, n = g.call(this, t), r = this.clone();
						return r.root = n.name, r;
					},
					remove: function(e) {
						e = this.root + e;
						var t = this.files[e];
						if (t ||= (e.slice(-1) !== "/" && (e += "/"), this.files[e]), t && !t.dir) delete this.files[e];
						else for (var n = this.filter(function(t, n) {
							return n.name.slice(0, e.length) === e;
						}), r = 0; r < n.length; r++) delete this.files[n[r].name];
						return this;
					},
					generate: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					generateInternalStream: function(e) {
						var t, n = {};
						try {
							if ((n = a.extend(e || {}, {
								streamFiles: !1,
								compression: "STORE",
								compressionOptions: null,
								type: "",
								platform: "DOS",
								comment: null,
								mimeType: "application/zip",
								encodeFileName: i.utf8encode
							})).type = n.type.toLowerCase(), n.compression = n.compression.toUpperCase(), n.type === "binarystring" && (n.type = "string"), !n.type) throw Error("No output type specified.");
							a.checkSupport(n.type), n.platform !== "darwin" && n.platform !== "freebsd" && n.platform !== "linux" && n.platform !== "sunos" || (n.platform = "UNIX"), n.platform === "win32" && (n.platform = "DOS");
							var r = n.comment || this.comment || "";
							t = d.generateWorker(this, n, r);
						} catch (e) {
							(t = new o("error")).error(e);
						}
						return new s(t, n.type || "string", n.mimeType);
					},
					generateAsync: function(e, t) {
						return this.generateInternalStream(e).accumulate(t);
					},
					generateNodeStream: function(e, t) {
						return (e ||= {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
					}
				};
			}, {
				"./compressedObject": 2,
				"./defaults": 5,
				"./generate": 9,
				"./nodejs/NodejsStreamInputAdapter": 12,
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31,
				"./utils": 32,
				"./zipObject": 35
			}],
			16: [function(e, t, n) {
				t.exports = e("stream");
			}, { stream: void 0 }],
			17: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
					for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data[this.zero + e];
				}, i.prototype.lastIndexOfSignature = function(e) {
					for (var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.length - 4; 0 <= a; --a) if (this.data[a] === t && this.data[a + 1] === n && this.data[a + 2] === r && this.data[a + 3] === i) return a - this.zero;
					return -1;
				}, i.prototype.readAndCheckSignature = function(e) {
					var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.readData(4);
					return t === a[0] && n === a[1] && r === a[2] && i === a[3];
				}, i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return [];
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			18: [function(e, t, n) {
				var r = e("../utils");
				function i(e) {
					this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
				}
				i.prototype = {
					checkOffset: function(e) {
						this.checkIndex(this.index + e);
					},
					checkIndex: function(e) {
						if (this.length < this.zero + e || e < 0) throw Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
					},
					setIndex: function(e) {
						this.checkIndex(e), this.index = e;
					},
					skip: function(e) {
						this.setIndex(this.index + e);
					},
					byteAt: function() {},
					readInt: function(e) {
						var t, n = 0;
						for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) n = (n << 8) + this.byteAt(t);
						return this.index += e, n;
					},
					readString: function(e) {
						return r.transformTo("string", this.readData(e));
					},
					readData: function() {},
					lastIndexOfSignature: function() {},
					readAndCheckSignature: function() {},
					readDate: function() {
						var e = this.readInt(4);
						return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
					}
				}, t.exports = i;
			}, { "../utils": 32 }],
			19: [function(e, t, n) {
				var r = e("./Uint8ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./Uint8ArrayReader": 21
			}],
			20: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data.charCodeAt(this.zero + e);
				}, i.prototype.lastIndexOfSignature = function(e) {
					return this.data.lastIndexOf(e) - this.zero;
				}, i.prototype.readAndCheckSignature = function(e) {
					return e === this.readData(4);
				}, i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			21: [function(e, t, n) {
				var r = e("./ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return /* @__PURE__ */ new Uint8Array();
					var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./ArrayReader": 17
			}],
			22: [function(e, t, n) {
				var r = e("../utils"), i = e("../support"), a = e("./ArrayReader"), o = e("./StringReader"), s = e("./NodeBufferReader"), c = e("./Uint8ArrayReader");
				t.exports = function(e) {
					var t = r.getTypeOf(e);
					return r.checkSupport(t), t !== "string" || i.uint8array ? t === "nodebuffer" ? new s(e) : i.uint8array ? new c(r.transformTo("uint8array", e)) : new a(r.transformTo("array", e)) : new o(e);
				};
			}, {
				"../support": 30,
				"../utils": 32,
				"./ArrayReader": 17,
				"./NodeBufferReader": 19,
				"./StringReader": 20,
				"./Uint8ArrayReader": 21
			}],
			23: [function(e, t, n) {
				n.LOCAL_FILE_HEADER = "PK", n.CENTRAL_FILE_HEADER = "PK", n.CENTRAL_DIRECTORY_END = "PK", n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", n.ZIP64_CENTRAL_DIRECTORY_END = "PK", n.DATA_DESCRIPTOR = "PK\x07\b";
			}, {}],
			24: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../utils");
				function a(e) {
					r.call(this, "ConvertWorker to " + e), this.destType = e;
				}
				i.inherits(a, r), a.prototype.processChunk = function(e) {
					this.push({
						data: i.transformTo(this.destType, e.data),
						meta: e.meta
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			25: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../crc32");
				function a() {
					r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
				}
				e("../utils").inherits(a, r), a.prototype.processChunk = function(e) {
					this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
				}, t.exports = a;
			}, {
				"../crc32": 4,
				"../utils": 32,
				"./GenericWorker": 28
			}],
			26: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
				}
				r.inherits(a, i), a.prototype.processChunk = function(e) {
					if (e) {
						var t = this.streamInfo[this.propName] || 0;
						this.streamInfo[this.propName] = t + e.data.length;
					}
					i.prototype.processChunk.call(this, e);
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			27: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataWorker");
					var t = this;
					this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
						t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = r.getTypeOf(e), t.isPaused || t._tickAndRepeat();
					}, function(e) {
						t.error(e);
					});
				}
				r.inherits(a, i), a.prototype.cleanUp = function() {
					i.prototype.cleanUp.call(this), this.data = null;
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
				}, a.prototype._tickAndRepeat = function() {
					this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
				}, a.prototype._tick = function() {
					if (this.isPaused || this.isFinished) return !1;
					var e = null, t = Math.min(this.max, this.index + 16384);
					if (this.index >= this.max) return this.end();
					switch (this.type) {
						case "string":
							e = this.data.substring(this.index, t);
							break;
						case "uint8array":
							e = this.data.subarray(this.index, t);
							break;
						case "array":
						case "nodebuffer": e = this.data.slice(this.index, t);
					}
					return this.index = t, this.push({
						data: e,
						meta: { percent: this.max ? this.index / this.max * 100 : 0 }
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			28: [function(e, t, n) {
				function r(e) {
					this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
						data: [],
						end: [],
						error: []
					}, this.previous = null;
				}
				r.prototype = {
					push: function(e) {
						this.emit("data", e);
					},
					end: function() {
						if (this.isFinished) return !1;
						this.flush();
						try {
							this.emit("end"), this.cleanUp(), this.isFinished = !0;
						} catch (e) {
							this.emit("error", e);
						}
						return !0;
					},
					error: function(e) {
						return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
					},
					on: function(e, t) {
						return this._listeners[e].push(t), this;
					},
					cleanUp: function() {
						this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
					},
					emit: function(e, t) {
						if (this._listeners[e]) for (var n = 0; n < this._listeners[e].length; n++) this._listeners[e][n].call(this, t);
					},
					pipe: function(e) {
						return e.registerPrevious(this);
					},
					registerPrevious: function(e) {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
						var t = this;
						return e.on("data", function(e) {
							t.processChunk(e);
						}), e.on("end", function() {
							t.end();
						}), e.on("error", function(e) {
							t.error(e);
						}), this;
					},
					pause: function() {
						return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
					},
					resume: function() {
						if (!this.isPaused || this.isFinished) return !1;
						var e = this.isPaused = !1;
						return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
					},
					flush: function() {},
					processChunk: function(e) {
						this.push(e);
					},
					withStreamInfo: function(e, t) {
						return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
					},
					mergeStreamInfo: function() {
						for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
					},
					lock: function() {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.isLocked = !0, this.previous && this.previous.lock();
					},
					toString: function() {
						var e = "Worker " + this.name;
						return this.previous ? this.previous + " -> " + e : e;
					}
				}, t.exports = r;
			}, {}],
			29: [function(e, t, n) {
				var r = e("../utils"), i = e("./ConvertWorker"), a = e("./GenericWorker"), o = e("../base64"), s = e("../support"), c = e("../external"), l = null;
				if (s.nodestream) try {
					l = e("../nodejs/NodejsStreamOutputAdapter");
				} catch {}
				function u(e, t) {
					return new c.Promise(function(n, i) {
						var a = [], s = e._internalType, c = e._outputType, l = e._mimeType;
						e.on("data", function(e, n) {
							a.push(e), t && t(n);
						}).on("error", function(e) {
							a = [], i(e);
						}).on("end", function() {
							try {
								n(function(e, t, n) {
									switch (e) {
										case "blob": return r.newBlob(r.transformTo("arraybuffer", t), n);
										case "base64": return o.encode(t);
										default: return r.transformTo(e, t);
									}
								}(c, function(e, t) {
									var n, r = 0, i = null, a = 0;
									for (n = 0; n < t.length; n++) a += t[n].length;
									switch (e) {
										case "string": return t.join("");
										case "array": return Array.prototype.concat.apply([], t);
										case "uint8array":
											for (i = new Uint8Array(a), n = 0; n < t.length; n++) i.set(t[n], r), r += t[n].length;
											return i;
										case "nodebuffer": return Buffer.concat(t);
										default: throw Error("concat : unsupported type '" + e + "'");
									}
								}(s, a), l));
							} catch (e) {
								i(e);
							}
							a = [];
						}).resume();
					});
				}
				function d(e, t, n) {
					var o = t;
					switch (t) {
						case "blob":
						case "arraybuffer":
							o = "uint8array";
							break;
						case "base64": o = "string";
					}
					try {
						this._internalType = o, this._outputType = t, this._mimeType = n, r.checkSupport(o), this._worker = e.pipe(new i(o)), e.lock();
					} catch (e) {
						this._worker = new a("error"), this._worker.error(e);
					}
				}
				d.prototype = {
					accumulate: function(e) {
						return u(this, e);
					},
					on: function(e, t) {
						var n = this;
						return e === "data" ? this._worker.on(e, function(e) {
							t.call(n, e.data, e.meta);
						}) : this._worker.on(e, function() {
							r.delay(t, arguments, n);
						}), this;
					},
					resume: function() {
						return r.delay(this._worker.resume, [], this._worker), this;
					},
					pause: function() {
						return this._worker.pause(), this;
					},
					toNodejsStream: function(e) {
						if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw Error(this._outputType + " is not supported by this method");
						return new l(this, { objectMode: this._outputType !== "nodebuffer" }, e);
					}
				}, t.exports = d;
			}, {
				"../base64": 1,
				"../external": 6,
				"../nodejs/NodejsStreamOutputAdapter": 13,
				"../support": 30,
				"../utils": 32,
				"./ConvertWorker": 24,
				"./GenericWorker": 28
			}],
			30: [function(e, t, n) {
				if (n.base64 = !0, n.array = !0, n.string = !0, n.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", n.nodebuffer = typeof Buffer < "u", n.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") n.blob = !1;
				else {
					var r = /* @__PURE__ */ new ArrayBuffer(0);
					try {
						n.blob = new Blob([r], { type: "application/zip" }).size === 0;
					} catch {
						try {
							var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							i.append(r), n.blob = i.getBlob("application/zip").size === 0;
						} catch {
							n.blob = !1;
						}
					}
				}
				try {
					n.nodestream = !!e("readable-stream").Readable;
				} catch {
					n.nodestream = !1;
				}
			}, { "readable-stream": 16 }],
			31: [function(e, t, n) {
				for (var r = e("./utils"), i = e("./support"), a = e("./nodejsUtils"), o = e("./stream/GenericWorker"), s = Array(256), c = 0; c < 256; c++) s[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
				s[254] = s[254] = 1;
				function l() {
					o.call(this, "utf-8 decode"), this.leftOver = null;
				}
				function u() {
					o.call(this, "utf-8 encode");
				}
				n.utf8encode = function(e) {
					return i.nodebuffer ? a.newBufferFrom(e, "utf-8") : function(e) {
						var t, n, r, a, o, s = e.length, c = 0;
						for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
						for (t = i.uint8array ? new Uint8Array(c) : Array(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
						return t;
					}(e);
				}, n.utf8decode = function(e) {
					return i.nodebuffer ? r.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
						var t, n, i, a, o = e.length, c = Array(2 * o);
						for (t = n = 0; t < o;) if ((i = e[t++]) < 128) c[n++] = i;
						else if (4 < (a = s[i])) c[n++] = 65533, t += a - 1;
						else {
							for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && t < o;) i = i << 6 | 63 & e[t++], a--;
							1 < a ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, c[n++] = 56320 | 1023 & i);
						}
						return c.length !== n && (c.subarray ? c = c.subarray(0, n) : c.length = n), r.applyFromCharCode(c);
					}(e = r.transformTo(i.uint8array ? "uint8array" : "array", e));
				}, r.inherits(l, o), l.prototype.processChunk = function(e) {
					var t = r.transformTo(i.uint8array ? "uint8array" : "array", e.data);
					if (this.leftOver && this.leftOver.length) {
						if (i.uint8array) {
							var a = t;
							(t = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), t.set(a, this.leftOver.length);
						} else t = this.leftOver.concat(t);
						this.leftOver = null;
					}
					var o = function(e, t) {
						var n;
						for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
						return n < 0 || n === 0 ? t : n + s[e[n]] > t ? n : t;
					}(t), c = t;
					o !== t.length && (i.uint8array ? (c = t.subarray(0, o), this.leftOver = t.subarray(o, t.length)) : (c = t.slice(0, o), this.leftOver = t.slice(o, t.length))), this.push({
						data: n.utf8decode(c),
						meta: e.meta
					});
				}, l.prototype.flush = function() {
					this.leftOver && this.leftOver.length && (this.push({
						data: n.utf8decode(this.leftOver),
						meta: {}
					}), this.leftOver = null);
				}, n.Utf8DecodeWorker = l, r.inherits(u, o), u.prototype.processChunk = function(e) {
					this.push({
						data: n.utf8encode(e.data),
						meta: e.meta
					});
				}, n.Utf8EncodeWorker = u;
			}, {
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./support": 30,
				"./utils": 32
			}],
			32: [function(e, t, n) {
				var r = e("./support"), i = e("./base64"), a = e("./nodejsUtils"), o = e("./external");
				function s(e) {
					return e;
				}
				function c(e, t) {
					for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
					return t;
				}
				e("setimmediate"), n.newBlob = function(e, t) {
					n.checkSupport("blob");
					try {
						return new Blob([e], { type: t });
					} catch {
						try {
							var r = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							return r.append(e), r.getBlob(t);
						} catch {
							throw Error("Bug : can't construct the Blob.");
						}
					}
				};
				var l = {
					stringifyByChunk: function(e, t, n) {
						var r = [], i = 0, a = e.length;
						if (a <= n) return String.fromCharCode.apply(null, e);
						for (; i < a;) t === "array" || t === "nodebuffer" ? r.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + n, a)))) : r.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + n, a)))), i += n;
						return r.join("");
					},
					stringifyByChar: function(e) {
						for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
						return t;
					},
					applyCanBeUsed: {
						uint8array: function() {
							try {
								return r.uint8array && String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1)).length === 1;
							} catch {
								return !1;
							}
						}(),
						nodebuffer: function() {
							try {
								return r.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
							} catch {
								return !1;
							}
						}()
					}
				};
				function u(e) {
					var t = 65536, r = n.getTypeOf(e), i = !0;
					if (r === "uint8array" ? i = l.applyCanBeUsed.uint8array : r === "nodebuffer" && (i = l.applyCanBeUsed.nodebuffer), i) for (; 1 < t;) try {
						return l.stringifyByChunk(e, r, t);
					} catch {
						t = Math.floor(t / 2);
					}
					return l.stringifyByChar(e);
				}
				function d(e, t) {
					for (var n = 0; n < e.length; n++) t[n] = e[n];
					return t;
				}
				n.applyFromCharCode = u;
				var f = {};
				f.string = {
					string: s,
					array: function(e) {
						return c(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.string.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return c(e, new Uint8Array(e.length));
					},
					nodebuffer: function(e) {
						return c(e, a.allocBuffer(e.length));
					}
				}, f.array = {
					string: u,
					array: s,
					arraybuffer: function(e) {
						return new Uint8Array(e).buffer;
					},
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.arraybuffer = {
					string: function(e) {
						return u(new Uint8Array(e));
					},
					array: function(e) {
						return d(new Uint8Array(e), Array(e.byteLength));
					},
					arraybuffer: s,
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(new Uint8Array(e));
					}
				}, f.uint8array = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return e.buffer;
					},
					uint8array: s,
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.nodebuffer = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.nodebuffer.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return d(e, new Uint8Array(e.length));
					},
					nodebuffer: s
				}, n.transformTo = function(e, t) {
					return t ||= "", e ? (n.checkSupport(e), f[n.getTypeOf(t)][e](t)) : t;
				}, n.resolve = function(e) {
					for (var t = e.split("/"), n = [], r = 0; r < t.length; r++) {
						var i = t[r];
						i === "." || i === "" && r !== 0 && r !== t.length - 1 || (i === ".." ? n.pop() : n.push(i));
					}
					return n.join("/");
				}, n.getTypeOf = function(e) {
					if (typeof e == "string") return "string";
					var t = Object.prototype.toString.call(e);
					return t === "[object Array]" ? "array" : r.nodebuffer && a.isBuffer(e) ? "nodebuffer" : r.uint8array && t === "[object Uint8Array]" ? "uint8array" : r.arraybuffer && t === "[object ArrayBuffer]" ? "arraybuffer" : void 0;
				}, n.checkSupport = function(e) {
					if (!r[e.toLowerCase()]) throw Error(e + " is not supported by this platform");
				}, n.MAX_VALUE_16BITS = 65535, n.MAX_VALUE_32BITS = -1, n.pretty = function(e) {
					var t, n, r = "";
					for (n = 0; n < (e || "").length; n++) r += "\\x" + ((t = e.charCodeAt(n)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
					return r;
				}, n.delay = function(e, t, n) {
					setImmediate(function() {
						e.apply(n || null, t || []);
					});
				}, n.inherits = function(e, t) {
					function n() {}
					n.prototype = t.prototype, e.prototype = new n();
				}, n.extend = function() {
					var e, t, n = {};
					for (e = 0; e < arguments.length; e++) for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && n[t] === void 0 && (n[t] = arguments[e][t]);
					return n;
				}, n.prepareContent = function(e, t, a, s, l) {
					return o.Promise.resolve(t).then(function(t) {
						return r.blob && (t instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(t)) !== -1) ? Blob.prototype.arrayBuffer === void 0 ? typeof FileReader < "u" ? new o.Promise(function(e, n) {
							var r = new FileReader();
							r.onload = function(t) {
								e(t.target.result);
							}, r.onerror = function(e) {
								n(e.target.error);
							}, r.readAsArrayBuffer(t);
						}) : o.Promise.reject(/* @__PURE__ */ Error(e + " is a Blob, but we have no way of reading it.")) : t.arrayBuffer() : t;
					}).then(function(t) {
						var u = n.getTypeOf(t);
						return u ? (u === "arraybuffer" ? t = n.transformTo("uint8array", t) : u === "string" && (l ? t = i.decode(t) : a && !0 !== s && (t = function(e) {
							return c(e, r.uint8array ? new Uint8Array(e.length) : Array(e.length));
						}(t))), t) : o.Promise.reject(/* @__PURE__ */ Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
					});
				};
			}, {
				"./base64": 1,
				"./external": 6,
				"./nodejsUtils": 14,
				"./support": 30,
				setimmediate: 54
			}],
			33: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./signature"), o = e("./zipEntry"), s = e("./support");
				function c(e) {
					this.files = [], this.loadOptions = e;
				}
				c.prototype = {
					checkSignature: function(e) {
						if (!this.reader.readAndCheckSignature(e)) {
							this.reader.index -= 4;
							var t = this.reader.readString(4);
							throw Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
						}
					},
					isSignature: function(e, t) {
						var n = this.reader.index;
						this.reader.setIndex(e);
						var r = this.reader.readString(4) === t;
						return this.reader.setIndex(n), r;
					},
					readBlockEndOfCentral: function() {
						this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
						var e = this.reader.readData(this.zipCommentLength), t = s.uint8array ? "uint8array" : "array", n = i.transformTo(t, e);
						this.zipComment = this.loadOptions.decodeFileName(n);
					},
					readBlockZip64EndOfCentral: function() {
						this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
						for (var e, t, n, r = this.zip64EndOfCentralSize - 44; 0 < r;) e = this.reader.readInt(2), t = this.reader.readInt(4), n = this.reader.readData(t), this.zip64ExtensibleData[e] = {
							id: e,
							length: t,
							value: n
						};
					},
					readBlockZip64EndOfCentralLocator: function() {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw Error("Multi-volumes zip are not supported");
					},
					readLocalFiles: function() {
						for (var e = 0, t; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
					},
					readCentralDir: function() {
						var e;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);) (e = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
						if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
					},
					readEndOfCentral: function() {
						var e = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
						if (e < 0) throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? /* @__PURE__ */ Error("Corrupted zip: can't find end of central directory") : /* @__PURE__ */ Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
						this.reader.setIndex(e);
						var t = e;
						if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
							if (this.reader.setIndex(e), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error("Corrupted zip: can't find the ZIP64 end of central directory");
							this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
						}
						var n = this.centralDirOffset + this.centralDirSize;
						this.zip64 && (n += 20, n += 12 + this.zip64EndOfCentralSize);
						var r = t - n;
						if (0 < r) this.isSignature(t, a.CENTRAL_FILE_HEADER) || (this.reader.zero = r);
						else if (r < 0) throw Error("Corrupted zip: missing " + Math.abs(r) + " bytes.");
					},
					prepareReader: function(e) {
						this.reader = r(e);
					},
					load: function(e) {
						this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
					}
				}, t.exports = c;
			}, {
				"./reader/readerFor": 22,
				"./signature": 23,
				"./support": 30,
				"./utils": 32,
				"./zipEntry": 34
			}],
			34: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./compressedObject"), o = e("./crc32"), s = e("./utf8"), c = e("./compressions"), l = e("./support");
				function u(e, t) {
					this.options = e, this.loadOptions = t;
				}
				u.prototype = {
					isEncrypted: function() {
						return (1 & this.bitFlag) == 1;
					},
					useUTF8: function() {
						return (2048 & this.bitFlag) == 2048;
					},
					readLocalPart: function(e) {
						var t, n;
						if (e.skip(22), this.fileNameLength = e.readInt(2), n = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(n), this.compressedSize === -1 || this.uncompressedSize === -1) throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
						if ((t = function(e) {
							for (var t in c) if (Object.prototype.hasOwnProperty.call(c, t) && c[t].magic === e) return c[t];
							return null;
						}(this.compressionMethod)) === null) throw Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
						this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
					},
					readCentralPart: function(e) {
						this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
						var t = e.readInt(2);
						if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
						e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
					},
					processAttributes: function() {
						this.unixPermissions = null, this.dosPermissions = null;
						var e = this.versionMadeBy >> 8;
						this.dir = !!(16 & this.externalFileAttributes), e == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), e == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
					},
					parseZIP64ExtraField: function() {
						if (this.extraFields[1]) {
							var e = r(this.extraFields[1].value);
							this.uncompressedSize === i.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === i.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === i.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === i.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
						}
					},
					readExtraFields: function(e) {
						var t, n, r, i = e.index + this.extraFieldsLength;
						for (this.extraFields ||= {}; e.index + 4 < i;) t = e.readInt(2), n = e.readInt(2), r = e.readData(n), this.extraFields[t] = {
							id: t,
							length: n,
							value: r
						};
						e.setIndex(i);
					},
					handleUTF8: function() {
						var e = l.uint8array ? "uint8array" : "array";
						if (this.useUTF8()) this.fileNameStr = s.utf8decode(this.fileName), this.fileCommentStr = s.utf8decode(this.fileComment);
						else {
							var t = this.findExtraFieldUnicodePath();
							if (t !== null) this.fileNameStr = t;
							else {
								var n = i.transformTo(e, this.fileName);
								this.fileNameStr = this.loadOptions.decodeFileName(n);
							}
							var r = this.findExtraFieldUnicodeComment();
							if (r !== null) this.fileCommentStr = r;
							else {
								var a = i.transformTo(e, this.fileComment);
								this.fileCommentStr = this.loadOptions.decodeFileName(a);
							}
						}
					},
					findExtraFieldUnicodePath: function() {
						var e = this.extraFields[28789];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) === 1 && o(this.fileName) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
						}
						return null;
					},
					findExtraFieldUnicodeComment: function() {
						var e = this.extraFields[25461];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) === 1 && o(this.fileComment) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
						}
						return null;
					}
				}, t.exports = u;
			}, {
				"./compressedObject": 2,
				"./compressions": 3,
				"./crc32": 4,
				"./reader/readerFor": 22,
				"./support": 30,
				"./utf8": 31,
				"./utils": 32
			}],
			35: [function(e, t, n) {
				function r(e, t, n) {
					this.name = e, this.dir = n.dir, this.date = n.date, this.comment = n.comment, this.unixPermissions = n.unixPermissions, this.dosPermissions = n.dosPermissions, this._data = t, this._dataBinary = n.binary, this.options = {
						compression: n.compression,
						compressionOptions: n.compressionOptions
					};
				}
				var i = e("./stream/StreamHelper"), a = e("./stream/DataWorker"), o = e("./utf8"), s = e("./compressedObject"), c = e("./stream/GenericWorker");
				r.prototype = {
					internalStream: function(e) {
						var t = null, n = "string";
						try {
							if (!e) throw Error("No output type specified.");
							var r = (n = e.toLowerCase()) === "string" || n === "text";
							n !== "binarystring" && n !== "text" || (n = "string"), t = this._decompressWorker();
							var a = !this._dataBinary;
							a && !r && (t = t.pipe(new o.Utf8EncodeWorker())), !a && r && (t = t.pipe(new o.Utf8DecodeWorker()));
						} catch (e) {
							(t = new c("error")).error(e);
						}
						return new i(t, n, "");
					},
					async: function(e, t) {
						return this.internalStream(e).accumulate(t);
					},
					nodeStream: function(e, t) {
						return this.internalStream(e || "nodebuffer").toNodejsStream(t);
					},
					_compressWorker: function(e, t) {
						if (this._data instanceof s && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
						var n = this._decompressWorker();
						return this._dataBinary || (n = n.pipe(new o.Utf8EncodeWorker())), s.createWorkerFrom(n, e, t);
					},
					_decompressWorker: function() {
						return this._data instanceof s ? this._data.getContentWorker() : this._data instanceof c ? this._data : new a(this._data);
					}
				};
				for (var l = [
					"asText",
					"asBinary",
					"asNodeBuffer",
					"asUint8Array",
					"asArrayBuffer"
				], u = function() {
					throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
				}, d = 0; d < l.length; d++) r.prototype[l[d]] = u;
				t.exports = r;
			}, {
				"./compressedObject": 2,
				"./stream/DataWorker": 27,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31
			}],
			36: [function(e, t, n) {
				(function(e) {
					var n, r, i = e.MutationObserver || e.WebKitMutationObserver;
					if (i) {
						var a = 0, o = new i(u), s = e.document.createTextNode("");
						o.observe(s, { characterData: !0 }), n = function() {
							s.data = a = ++a % 2;
						};
					} else if (e.setImmediate || e.MessageChannel === void 0) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
						var t = e.document.createElement("script");
						t.onreadystatechange = function() {
							u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
						}, e.document.documentElement.appendChild(t);
					} : function() {
						setTimeout(u, 0);
					};
					else {
						var c = new e.MessageChannel();
						c.port1.onmessage = u, n = function() {
							c.port2.postMessage(0);
						};
					}
					var l = [];
					function u() {
						var e, t;
						r = !0;
						for (var n = l.length; n;) {
							for (t = l, l = [], e = -1; ++e < n;) t[e]();
							n = l.length;
						}
						r = !1;
					}
					t.exports = function(e) {
						l.push(e) !== 1 || r || n();
					};
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}],
			37: [function(e, t, n) {
				var r = e("immediate");
				function i() {}
				var a = {}, o = ["REJECTED"], s = ["FULFILLED"], c = ["PENDING"];
				function l(e) {
					if (typeof e != "function") throw TypeError("resolver must be a function");
					this.state = c, this.queue = [], this.outcome = void 0, e !== i && p(this, e);
				}
				function u(e, t, n) {
					this.promise = e, typeof t == "function" && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), typeof n == "function" && (this.onRejected = n, this.callRejected = this.otherCallRejected);
				}
				function d(e, t, n) {
					r(function() {
						var r;
						try {
							r = t(n);
						} catch (t) {
							return a.reject(e, t);
						}
						r === e ? a.reject(e, /* @__PURE__ */ TypeError("Cannot resolve promise with itself")) : a.resolve(e, r);
					});
				}
				function f(e) {
					var t = e && e.then;
					if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") return function() {
						t.apply(e, arguments);
					};
				}
				function p(e, t) {
					var n = !1;
					function r(t) {
						n || (n = !0, a.reject(e, t));
					}
					function i(t) {
						n || (n = !0, a.resolve(e, t));
					}
					var o = m(function() {
						t(i, r);
					});
					o.status === "error" && r(o.value);
				}
				function m(e, t) {
					var n = {};
					try {
						n.value = e(t), n.status = "success";
					} catch (e) {
						n.status = "error", n.value = e;
					}
					return n;
				}
				(t.exports = l).prototype.finally = function(e) {
					if (typeof e != "function") return this;
					var t = this.constructor;
					return this.then(function(n) {
						return t.resolve(e()).then(function() {
							return n;
						});
					}, function(n) {
						return t.resolve(e()).then(function() {
							throw n;
						});
					});
				}, l.prototype.catch = function(e) {
					return this.then(null, e);
				}, l.prototype.then = function(e, t) {
					if (typeof e != "function" && this.state === s || typeof t != "function" && this.state === o) return this;
					var n = new this.constructor(i);
					return this.state === c ? this.queue.push(new u(n, e, t)) : d(n, this.state === s ? e : t, this.outcome), n;
				}, u.prototype.callFulfilled = function(e) {
					a.resolve(this.promise, e);
				}, u.prototype.otherCallFulfilled = function(e) {
					d(this.promise, this.onFulfilled, e);
				}, u.prototype.callRejected = function(e) {
					a.reject(this.promise, e);
				}, u.prototype.otherCallRejected = function(e) {
					d(this.promise, this.onRejected, e);
				}, a.resolve = function(e, t) {
					var n = m(f, t);
					if (n.status === "error") return a.reject(e, n.value);
					var r = n.value;
					if (r) p(e, r);
					else {
						e.state = s, e.outcome = t;
						for (var i = -1, o = e.queue.length; ++i < o;) e.queue[i].callFulfilled(t);
					}
					return e;
				}, a.reject = function(e, t) {
					e.state = o, e.outcome = t;
					for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
					return e;
				}, l.resolve = function(e) {
					return e instanceof this ? e : a.resolve(new this(i), e);
				}, l.reject = function(e) {
					var t = new this(i);
					return a.reject(t, e);
				}, l.all = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = Array(n), s = 0, c = -1, l = new this(i); ++c < n;) u(e[c], c);
					return l;
					function u(e, i) {
						t.resolve(e).then(function(e) {
							o[i] = e, ++s !== n || r || (r = !0, a.resolve(l, o));
						}, function(e) {
							r || (r = !0, a.reject(l, e));
						});
					}
				}, l.race = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = -1, s = new this(i); ++o < n;) c = e[o], t.resolve(c).then(function(e) {
						r || (r = !0, a.resolve(s, e));
					}, function(e) {
						r || (r = !0, a.reject(s, e));
					});
					var c;
					return s;
				};
			}, { immediate: 36 }],
			38: [function(e, t, n) {
				var r = {};
				(0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = r;
			}, {
				"./lib/deflate": 39,
				"./lib/inflate": 40,
				"./lib/utils/common": 41,
				"./lib/zlib/constants": 44
			}],
			39: [function(e, t, n) {
				var r = e("./zlib/deflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/messages"), s = e("./zlib/zstream"), c = Object.prototype.toString, l = 0, u = -1, d = 0, f = 8;
				function p(e) {
					if (!(this instanceof p)) return new p(e);
					this.options = i.assign({
						level: u,
						method: f,
						chunkSize: 16384,
						windowBits: 15,
						memLevel: 8,
						strategy: d,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
					var n = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
					if (n !== l) throw Error(o[n]);
					if (t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary) {
						var m = typeof t.dictionary == "string" ? a.string2buf(t.dictionary) : c.call(t.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(t.dictionary) : t.dictionary;
						if ((n = r.deflateSetDictionary(this.strm, m)) !== l) throw Error(o[n]);
						this._dict_set = !0;
					}
				}
				function m(e, t) {
					var n = new p(t);
					if (n.push(e, !0), n.err) throw n.msg || o[n.err];
					return n.result;
				}
				p.prototype.push = function(e, t) {
					var n, o, s = this.strm, u = this.options.chunkSize;
					if (this.ended) return !1;
					o = t === ~~t ? t : !0 === t ? 4 : 0, s.input = typeof e == "string" ? a.string2buf(e) : c.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, s.next_in = 0, s.avail_in = s.input.length;
					do {
						if (s.avail_out === 0 && (s.output = new i.Buf8(u), s.next_out = 0, s.avail_out = u), (n = r.deflate(s, o)) !== 1 && n !== l) return this.onEnd(n), !(this.ended = !0);
						s.avail_out !== 0 && (s.avail_in !== 0 || o !== 4 && o !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)));
					} while ((0 < s.avail_in || s.avail_out === 0) && n !== 1);
					return o === 4 ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === l) : o !== 2 || (this.onEnd(l), !(s.avail_out = 0));
				}, p.prototype.onData = function(e) {
					this.chunks.push(e);
				}, p.prototype.onEnd = function(e) {
					e === l && (this.result = this.options.to === "string" ? this.chunks.join("") : i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Deflate = p, n.deflate = m, n.deflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, m(e, t);
				}, n.gzip = function(e, t) {
					return (t ||= {}).gzip = !0, m(e, t);
				};
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/deflate": 46,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			40: [function(e, t, n) {
				var r = e("./zlib/inflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/constants"), s = e("./zlib/messages"), c = e("./zlib/zstream"), l = e("./zlib/gzheader"), u = Object.prototype.toString;
				function d(e) {
					if (!(this instanceof d)) return new d(e);
					this.options = i.assign({
						chunkSize: 16384,
						windowBits: 0,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && !(15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
					var n = r.inflateInit2(this.strm, t.windowBits);
					if (n !== o.Z_OK) throw Error(s[n]);
					this.header = new l(), r.inflateGetHeader(this.strm, this.header);
				}
				function f(e, t) {
					var n = new d(t);
					if (n.push(e, !0), n.err) throw n.msg || s[n.err];
					return n.result;
				}
				d.prototype.push = function(e, t) {
					var n, s, c, l, d, f, p = this.strm, m = this.options.chunkSize, h = this.options.dictionary, g = !1;
					if (this.ended) return !1;
					s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH, p.input = typeof e == "string" ? a.binstring2buf(e) : u.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, p.next_in = 0, p.avail_in = p.input.length;
					do {
						if (p.avail_out === 0 && (p.output = new i.Buf8(m), p.next_out = 0, p.avail_out = m), (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && h && (f = typeof h == "string" ? a.string2buf(h) : u.call(h) === "[object ArrayBuffer]" ? new Uint8Array(h) : h, n = r.inflateSetDictionary(this.strm, f)), n === o.Z_BUF_ERROR && !0 === g && (n = o.Z_OK, g = !1), n !== o.Z_STREAM_END && n !== o.Z_OK) return this.onEnd(n), !(this.ended = !0);
						p.next_out && (p.avail_out !== 0 && n !== o.Z_STREAM_END && (p.avail_in !== 0 || s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (c = a.utf8border(p.output, p.next_out), l = p.next_out - c, d = a.buf2string(p.output, c), p.next_out = l, p.avail_out = m - l, l && i.arraySet(p.output, p.output, c, l, 0), this.onData(d)) : this.onData(i.shrinkBuf(p.output, p.next_out)))), p.avail_in === 0 && p.avail_out === 0 && (g = !0);
					} while ((0 < p.avail_in || p.avail_out === 0) && n !== o.Z_STREAM_END);
					return n === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === o.Z_OK) : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(p.avail_out = 0));
				}, d.prototype.onData = function(e) {
					this.chunks.push(e);
				}, d.prototype.onEnd = function(e) {
					e === o.Z_OK && (this.result = this.options.to === "string" ? this.chunks.join("") : i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Inflate = d, n.inflate = f, n.inflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, f(e, t);
				}, n.ungzip = f;
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/constants": 44,
				"./zlib/gzheader": 47,
				"./zlib/inflate": 49,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			41: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
				n.assign = function(e) {
					for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
						var n = t.shift();
						if (n) {
							if (typeof n != "object") throw TypeError(n + "must be non-object");
							for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
						}
					}
					return e;
				}, n.shrinkBuf = function(e, t) {
					return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
				};
				var i = {
					arraySet: function(e, t, n, r, i) {
						if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
						else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						for (var t = r = 0, n = e.length, r, i, a, o; t < n; t++) r += e[t].length;
						for (o = new Uint8Array(r), t = i = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
						return o;
					}
				}, a = {
					arraySet: function(e, t, n, r, i) {
						for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						return [].concat.apply([], e);
					}
				};
				n.setTyped = function(e) {
					e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, i)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, a));
				}, n.setTyped(r);
			}, {}],
			42: [function(e, t, n) {
				var r = e("./common"), i = !0, a = !0;
				try {
					String.fromCharCode.apply(null, [0]);
				} catch {
					i = !1;
				}
				try {
					String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
				} catch {
					a = !1;
				}
				for (var o = new r.Buf8(256), s = 0; s < 256; s++) o[s] = 252 <= s ? 6 : 248 <= s ? 5 : 240 <= s ? 4 : 224 <= s ? 3 : 192 <= s ? 2 : 1;
				function c(e, t) {
					if (t < 65537 && (e.subarray && a || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
					for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[o]);
					return n;
				}
				o[254] = o[254] = 1, n.string2buf = function(e) {
					var t, n, i, a, o, s = e.length, c = 0;
					for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
					for (t = new r.Buf8(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
					return t;
				}, n.buf2binstring = function(e) {
					return c(e, e.length);
				}, n.binstring2buf = function(e) {
					for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
					return t;
				}, n.buf2string = function(e, t) {
					var n, r, i, a, s = t || e.length, l = Array(2 * s);
					for (n = r = 0; n < s;) if ((i = e[n++]) < 128) l[r++] = i;
					else if (4 < (a = o[i])) l[r++] = 65533, n += a - 1;
					else {
						for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && n < s;) i = i << 6 | 63 & e[n++], a--;
						1 < a ? l[r++] = 65533 : i < 65536 ? l[r++] = i : (i -= 65536, l[r++] = 55296 | i >> 10 & 1023, l[r++] = 56320 | 1023 & i);
					}
					return c(l, r);
				}, n.utf8border = function(e, t) {
					var n;
					for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
					return n < 0 || n === 0 ? t : n + o[e[n]] > t ? n : t;
				};
			}, { "./common": 41 }],
			43: [function(e, t, n) {
				t.exports = function(e, t, n, r) {
					for (var i = 65535 & e, a = e >>> 16 & 65535, o = 0; n !== 0;) {
						for (n -= o = 2e3 < n ? 2e3 : n; a = a + (i = i + t[r++] | 0) | 0, --o;);
						i %= 65521, a %= 65521;
					}
					return i | a << 16;
				};
			}, {}],
			44: [function(e, t, n) {
				t.exports = {
					Z_NO_FLUSH: 0,
					Z_PARTIAL_FLUSH: 1,
					Z_SYNC_FLUSH: 2,
					Z_FULL_FLUSH: 3,
					Z_FINISH: 4,
					Z_BLOCK: 5,
					Z_TREES: 6,
					Z_OK: 0,
					Z_STREAM_END: 1,
					Z_NEED_DICT: 2,
					Z_ERRNO: -1,
					Z_STREAM_ERROR: -2,
					Z_DATA_ERROR: -3,
					Z_BUF_ERROR: -5,
					Z_NO_COMPRESSION: 0,
					Z_BEST_SPEED: 1,
					Z_BEST_COMPRESSION: 9,
					Z_DEFAULT_COMPRESSION: -1,
					Z_FILTERED: 1,
					Z_HUFFMAN_ONLY: 2,
					Z_RLE: 3,
					Z_FIXED: 4,
					Z_DEFAULT_STRATEGY: 0,
					Z_BINARY: 0,
					Z_TEXT: 1,
					Z_UNKNOWN: 2,
					Z_DEFLATED: 8
				};
			}, {}],
			45: [function(e, t, n) {
				var r = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t, n, i) {
					var a = r, o = i + n;
					e ^= -1;
					for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
					return -1 ^ e;
				};
			}, {}],
			46: [function(e, t, n) {
				var r, i = e("../utils/common"), a = e("./trees"), o = e("./adler32"), s = e("./crc32"), c = e("./messages"), l = 0, u = 4, d = 0, f = -2, p = -1, m = 4, h = 2, g = 8, _ = 9, v = 286, y = 30, b = 19, x = 2 * v + 1, S = 15, C = 3, w = 258, T = w + C + 1, E = 42, D = 113, O = 1, k = 2, A = 3, j = 4;
				function M(e, t) {
					return e.msg = c[t], t;
				}
				function N(e) {
					return (e << 1) - (4 < e ? 9 : 0);
				}
				function P(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				function F(e) {
					var t = e.state, n = t.pending;
					n > e.avail_out && (n = e.avail_out), n !== 0 && (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, t.pending === 0 && (t.pending_out = 0));
				}
				function I(e, t) {
					a._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, F(e.strm);
				}
				function L(e, t) {
					e.pending_buf[e.pending++] = t;
				}
				function R(e, t) {
					e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
				}
				function z(e, t) {
					var n, r, i = e.max_chain_length, a = e.strstart, o = e.prev_length, s = e.nice_match, c = e.strstart > e.w_size - T ? e.strstart - (e.w_size - T) : 0, l = e.window, u = e.w_mask, d = e.prev, f = e.strstart + w, p = l[a + o - 1], m = l[a + o];
					e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
					do
						if (l[(n = t) + o] === m && l[n + o - 1] === p && l[n] === l[a] && l[++n] === l[a + 1]) {
							a += 2, n++;
							do							;
while (l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && a < f);
							if (r = w - (f - a), a = f - w, o < r) {
								if (e.match_start = t, s <= (o = r)) break;
								p = l[a + o - 1], m = l[a + o];
							}
						}
					while ((t = d[t & u]) > c && --i != 0);
					return o <= e.lookahead ? o : e.lookahead;
				}
				function B(e) {
					var t, n, r, a, c, l, u, d, f, p, m = e.w_size;
					do {
						if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= m + (m - T)) {
							for (i.arraySet(e.window, e.window, m, m, 0), e.match_start -= m, e.strstart -= m, e.block_start -= m, t = n = e.hash_size; r = e.head[--t], e.head[t] = m <= r ? r - m : 0, --n;);
							for (t = n = m; r = e.prev[--t], e.prev[t] = m <= r ? r - m : 0, --n;);
							a += m;
						}
						if (e.strm.avail_in === 0) break;
						if (l = e.strm, u = e.window, d = e.strstart + e.lookahead, f = a, p = void 0, p = l.avail_in, f < p && (p = f), n = p === 0 ? 0 : (l.avail_in -= p, i.arraySet(u, l.input, l.next_in, p, d), l.state.wrap === 1 ? l.adler = o(l.adler, u, p, d) : l.state.wrap === 2 && (l.adler = s(l.adler, u, p, d)), l.next_in += p, l.total_in += p, p), e.lookahead += n, e.lookahead + e.insert >= C) for (c = e.strstart - e.insert, e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + C - 1]) & e.hash_mask, e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < C)););
					} while (e.lookahead < T && e.strm.avail_in !== 0);
				}
				function V(e, t) {
					for (var n, r;;) {
						if (e.lookahead < T) {
							if (B(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), n !== 0 && e.strstart - n <= e.w_size - T && (e.match_length = z(e, n)), e.match_length >= C) {
							if (r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - C), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= C) {
								for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0;);
								e.strstart++;
							} else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
						} else r = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
						if (r && (I(e, !1), e.strm.avail_out === 0)) return O;
					}
					return e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function H(e, t) {
					for (var n, r, i;;) {
						if (e.lookahead < T) {
							if (B(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = C - 1, n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - T && (e.match_length = z(e, n), e.match_length <= 5 && (e.strategy === 1 || e.match_length === C && 4096 < e.strstart - e.match_start) && (e.match_length = C - 1)), e.prev_length >= C && e.match_length <= e.prev_length) {
							for (i = e.strstart + e.lookahead - C, r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - C), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0;);
							if (e.match_available = 0, e.match_length = C - 1, e.strstart++, r && (I(e, !1), e.strm.avail_out === 0)) return O;
						} else if (e.match_available) {
							if ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && I(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return O;
						} else e.match_available = 1, e.strstart++, e.lookahead--;
					}
					return e.match_available &&= (r = a._tr_tally(e, 0, e.window[e.strstart - 1]), 0), e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function U(e, t, n, r, i) {
					this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i;
				}
				function W() {
					this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * x), this.dyn_dtree = new i.Buf16(2 * (2 * y + 1)), this.bl_tree = new i.Buf16(2 * (2 * b + 1)), P(this.dyn_ltree), P(this.dyn_dtree), P(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(S + 1), this.heap = new i.Buf16(2 * v + 1), P(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * v + 1), P(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
				}
				function G(e) {
					var t;
					return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = h, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? E : D, e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = l, a._tr_init(t), d) : M(e, f);
				}
				function K(e) {
					var t = G(e);
					return t === d && function(e) {
						e.window_size = 2 * e.w_size, P(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = C - 1, e.match_available = 0, e.ins_h = 0;
					}(e.state), t;
				}
				function q(e, t, n, r, a, o) {
					if (!e) return f;
					var s = 1;
					if (t === p && (t = 6), r < 0 ? (s = 0, r = -r) : 15 < r && (s = 2, r -= 16), a < 1 || _ < a || n !== g || r < 8 || 15 < r || t < 0 || 9 < t || o < 0 || m < o) return M(e, f);
					r === 8 && (r = 9);
					var c = new W();
					return (e.state = c).strm = e, c.wrap = s, c.gzhead = null, c.w_bits = r, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = a + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + C - 1) / C), c.window = new i.Buf8(2 * c.w_size), c.head = new i.Buf16(c.hash_size), c.prev = new i.Buf16(c.w_size), c.lit_bufsize = 1 << a + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new i.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = o, c.method = n, K(e);
				}
				r = [
					new U(0, 0, 0, 0, function(e, t) {
						var n = 65535;
						for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
							if (e.lookahead <= 1) {
								if (B(e), e.lookahead === 0 && t === l) return O;
								if (e.lookahead === 0) break;
							}
							e.strstart += e.lookahead, e.lookahead = 0;
							var r = e.block_start + n;
							if ((e.strstart === 0 || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, I(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - T && (I(e, !1), e.strm.avail_out === 0)) return O;
						}
						return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : (e.strstart > e.block_start && (I(e, !1), e.strm.avail_out), O);
					}),
					new U(4, 4, 8, 4, V),
					new U(4, 5, 16, 8, V),
					new U(4, 6, 32, 32, V),
					new U(4, 4, 16, 16, H),
					new U(8, 16, 32, 32, H),
					new U(8, 16, 128, 128, H),
					new U(8, 32, 128, 256, H),
					new U(32, 128, 258, 1024, H),
					new U(32, 258, 258, 4096, H)
				], n.deflateInit = function(e, t) {
					return q(e, t, g, 15, 8, 0);
				}, n.deflateInit2 = q, n.deflateReset = K, n.deflateResetKeep = G, n.deflateSetHeader = function(e, t) {
					return e && e.state && e.state.wrap === 2 ? (e.state.gzhead = t, d) : f;
				}, n.deflate = function(e, t) {
					var n, i, o, c;
					if (!e || !e.state || 5 < t || t < 0) return e ? M(e, f) : f;
					if (i = e.state, !e.output || !e.input && e.avail_in !== 0 || i.status === 666 && t !== u) return M(e, e.avail_out === 0 ? -5 : f);
					if (i.strm = e, n = i.last_flush, i.last_flush = t, i.status === E) {
						if (i.wrap === 2) e.adler = 0, L(i, 31), L(i, 139), L(i, 8), i.gzhead ? (L(i, +!!i.gzhead.text + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), L(i, 255 & i.gzhead.time), L(i, i.gzhead.time >> 8 & 255), L(i, i.gzhead.time >> 16 & 255), L(i, i.gzhead.time >> 24 & 255), L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), L(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (L(i, 255 & i.gzhead.extra.length), L(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (L(i, 0), L(i, 0), L(i, 0), L(i, 0), L(i, 0), L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), L(i, 3), i.status = D);
						else {
							var p = g + (i.w_bits - 8 << 4) << 8;
							p |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6, i.strstart !== 0 && (p |= 32), p += 31 - p % 31, i.status = D, R(i, p), i.strstart !== 0 && (R(i, e.adler >>> 16), R(i, 65535 & e.adler)), e.adler = 1;
						}
					}
					if (i.status === 69) {
						if (i.gzhead.extra) {
							for (o = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending !== i.pending_buf_size));) L(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
						} else i.status = 73;
					}
					if (i.status === 73) {
						if (i.gzhead.name) {
							o = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending === i.pending_buf_size)) {
									c = 1;
									break;
								}
								c = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, L(i, c);
							} while (c !== 0);
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.gzindex = 0, i.status = 91);
						} else i.status = 91;
					}
					if (i.status === 91) {
						if (i.gzhead.comment) {
							o = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending === i.pending_buf_size)) {
									c = 1;
									break;
								}
								c = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, L(i, c);
							} while (c !== 0);
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.status = 103);
						} else i.status = 103;
					}
					if (i.status === 103 && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && F(e), i.pending + 2 <= i.pending_buf_size && (L(i, 255 & e.adler), L(i, e.adler >> 8 & 255), e.adler = 0, i.status = D)) : i.status = D), i.pending !== 0) {
						if (F(e), e.avail_out === 0) return i.last_flush = -1, d;
					} else if (e.avail_in === 0 && N(t) <= N(n) && t !== u) return M(e, -5);
					if (i.status === 666 && e.avail_in !== 0) return M(e, -5);
					if (e.avail_in !== 0 || i.lookahead !== 0 || t !== l && i.status !== 666) {
						var m = i.strategy === 2 ? function(e, t) {
							for (var n;;) {
								if (e.lookahead === 0 && (B(e), e.lookahead === 0)) {
									if (t === l) return O;
									break;
								}
								if (e.match_length = 0, n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (I(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : i.strategy === 3 ? function(e, t) {
							for (var n, r, i, o, s = e.window;;) {
								if (e.lookahead <= w) {
									if (B(e), e.lookahead <= w && t === l) return O;
									if (e.lookahead === 0) break;
								}
								if (e.match_length = 0, e.lookahead >= C && 0 < e.strstart && (r = s[i = e.strstart - 1]) === s[++i] && r === s[++i] && r === s[++i]) {
									o = e.strstart + w;
									do									;
while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < o);
									e.match_length = w - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
								}
								if (e.match_length >= C ? (n = a._tr_tally(e, 1, e.match_length - C), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (I(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : r[i.level].func(i, t);
						if (m !== A && m !== j || (i.status = 666), m === O || m === A) return e.avail_out === 0 && (i.last_flush = -1), d;
						if (m === k && (t === 1 ? a._tr_align(i) : t !== 5 && (a._tr_stored_block(i, 0, 0, !1), t === 3 && (P(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), F(e), e.avail_out === 0)) return i.last_flush = -1, d;
					}
					return t === u ? i.wrap <= 0 ? 1 : (i.wrap === 2 ? (L(i, 255 & e.adler), L(i, e.adler >> 8 & 255), L(i, e.adler >> 16 & 255), L(i, e.adler >> 24 & 255), L(i, 255 & e.total_in), L(i, e.total_in >> 8 & 255), L(i, e.total_in >> 16 & 255), L(i, e.total_in >> 24 & 255)) : (R(i, e.adler >>> 16), R(i, 65535 & e.adler)), F(e), 0 < i.wrap && (i.wrap = -i.wrap), i.pending === 0 ? 1 : d) : d;
				}, n.deflateEnd = function(e) {
					var t;
					return e && e.state ? (t = e.state.status) !== E && t !== 69 && t !== 73 && t !== 91 && t !== 103 && t !== D && t !== 666 ? M(e, f) : (e.state = null, t === D ? M(e, -3) : d) : f;
				}, n.deflateSetDictionary = function(e, t) {
					var n, r, a, s, c, l, u, p, m = t.length;
					if (!e || !e.state || (s = (n = e.state).wrap) === 2 || s === 1 && n.status !== E || n.lookahead) return f;
					for (s === 1 && (e.adler = o(e.adler, t, m, 0)), n.wrap = 0, m >= n.w_size && (s === 0 && (P(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), p = new i.Buf8(n.w_size), i.arraySet(p, t, m - n.w_size, n.w_size, 0), t = p, m = n.w_size), c = e.avail_in, l = e.next_in, u = e.input, e.avail_in = m, e.next_in = 0, e.input = t, B(n); n.lookahead >= C;) {
						for (r = n.strstart, a = n.lookahead - (C - 1); n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + C - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++, --a;);
						n.strstart = r, n.lookahead = C - 1, B(n);
					}
					return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = C - 1, n.match_available = 0, e.next_in = l, e.input = u, e.avail_in = c, n.wrap = s, d;
				}, n.deflateInfo = "pako deflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./messages": 51,
				"./trees": 52
			}],
			47: [function(e, t, n) {
				t.exports = function() {
					this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
				};
			}, {}],
			48: [function(e, t, n) {
				t.exports = function(e, t) {
					var n = e.state, r = e.next_in, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e.input, E;
					i = r + (e.avail_in - 5), a = e.next_out, E = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, d = n.wnext, f = n.window, p = n.hold, m = n.bits, h = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
					e: do {
						m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = h[p & _];
						t: for (;;) {
							if (p >>>= b = y >>> 24, m -= b, (b = y >>> 16 & 255) == 0) E[a++] = 65535 & y;
							else {
								if (!(16 & b)) {
									if (!(64 & b)) {
										y = h[(65535 & y) + (p & (1 << b) - 1)];
										continue t;
									}
									if (32 & b) {
										n.mode = 12;
										break e;
									}
									e.msg = "invalid literal/length code", n.mode = 30;
									break e;
								}
								x = 65535 & y, (b &= 15) && (m < b && (p += T[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = g[p & v];
								r: for (;;) {
									if (p >>>= b = y >>> 24, m -= b, !(16 & (b = y >>> 16 & 255))) {
										if (!(64 & b)) {
											y = g[(65535 & y) + (p & (1 << b) - 1)];
											continue r;
										}
										e.msg = "invalid distance code", n.mode = 30;
										break e;
									}
									if (S = 65535 & y, m < (b &= 15) && (p += T[r++] << m, (m += 8) < b && (p += T[r++] << m, m += 8)), c < (S += p & (1 << b) - 1)) {
										e.msg = "invalid distance too far back", n.mode = 30;
										break e;
									}
									if (p >>>= b, m -= b, (b = a - o) < S) {
										if (u < (b = S - b) && n.sane) {
											e.msg = "invalid distance too far back", n.mode = 30;
											break e;
										}
										if (w = f, (C = 0) === d) {
											if (C += l - b, b < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												C = a - S, w = E;
											}
										} else if (d < b) {
											if (C += l + d - b, (b -= d) < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												if (C = 0, d < x) {
													for (x -= b = d; E[a++] = f[C++], --b;);
													C = a - S, w = E;
												}
											}
										} else if (C += d - b, b < x) {
											for (x -= b; E[a++] = f[C++], --b;);
											C = a - S, w = E;
										}
										for (; 2 < x;) E[a++] = w[C++], E[a++] = w[C++], E[a++] = w[C++], x -= 3;
										x && (E[a++] = w[C++], 1 < x && (E[a++] = w[C++]));
									} else {
										for (C = a - S; E[a++] = E[C++], E[a++] = E[C++], E[a++] = E[C++], 2 < (x -= 3););
										x && (E[a++] = E[C++], 1 < x && (E[a++] = E[C++]));
									}
									break;
								}
							}
							break;
						}
					} while (r < i && a < s);
					r -= x = m >> 3, p &= (1 << (m -= x << 3)) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), n.hold = p, n.bits = m;
				};
			}, {}],
			49: [function(e, t, n) {
				var r = e("../utils/common"), i = e("./adler32"), a = e("./crc32"), o = e("./inffast"), s = e("./inftrees"), c = 1, l = 2, u = 0, d = -2, f = 1, p = 852, m = 592;
				function h(e) {
					return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
				}
				function g() {
					this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
				}
				function _(e) {
					var t;
					return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = f, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(p), t.distcode = t.distdyn = new r.Buf32(m), t.sane = 1, t.back = -1, u) : d;
				}
				function v(e) {
					var t;
					return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, _(e)) : d;
				}
				function y(e, t) {
					var n, r;
					return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? d : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, v(e))) : d;
				}
				function b(e, t) {
					var n, r;
					return e ? (r = new g(), (e.state = r).window = null, (n = y(e, t)) !== u && (e.state = null), n) : d;
				}
				var x, S, C = !0;
				function w(e) {
					if (C) {
						var t;
						for (x = new r.Buf32(512), S = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
						for (; t < 256;) e.lens[t++] = 9;
						for (; t < 280;) e.lens[t++] = 7;
						for (; t < 288;) e.lens[t++] = 8;
						for (s(c, e.lens, 0, 288, x, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
						s(l, e.lens, 0, 32, S, 0, e.work, { bits: 5 }), C = !1;
					}
					e.lencode = x, e.lenbits = 9, e.distcode = S, e.distbits = 5;
				}
				function T(e, t, n, i) {
					var a, o = e.state;
					return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new r.Buf8(o.wsize)), i >= o.wsize ? (r.arraySet(o.window, t, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (i < (a = o.wsize - o.wnext) && (a = i), r.arraySet(o.window, t, n - i, a, o.wnext), (i -= a) ? (r.arraySet(o.window, t, n - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += a, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += a))), 0;
				}
				n.inflateReset = v, n.inflateReset2 = y, n.inflateResetKeep = _, n.inflateInit = function(e) {
					return b(e, 15);
				}, n.inflateInit2 = b, n.inflate = function(e, t) {
					var n, p, m, g, _, v, y, b, x, S, C, E, D, O, k, A, j, M, N, P, F, I, L, R, z = 0, B = new r.Buf8(4), V = [
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					];
					if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return d;
					(n = e.state).mode === 12 && (n.mode = 13), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, S = v, C = y, I = u;
					e: for (;;) switch (n.mode) {
						case f:
							if (n.wrap === 0) {
								n.mode = 13;
								break;
							}
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (2 & n.wrap && b === 35615) {
								B[n.check = 0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0), x = b = 0, n.mode = 2;
								break;
							}
							if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
								e.msg = "incorrect header check", n.mode = 30;
								break;
							}
							if ((15 & b) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (x -= 4, F = 8 + (15 & (b >>>= 4)), n.wbits === 0) n.wbits = F;
							else if (F > n.wbits) {
								e.msg = "invalid window size", n.mode = 30;
								break;
							}
							n.dmax = 1 << F, e.adler = n.check = 1, n.mode = 512 & b ? 10 : 12, x = b = 0;
							break;
						case 2:
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.flags = b, (255 & n.flags) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (57344 & n.flags) {
								e.msg = "unknown header flags set", n.mode = 30;
								break;
							}
							n.head && (n.head.text = b >> 8 & 1), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0, n.mode = 3;
						case 3:
							for (; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.time = b), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, B[2] = b >>> 16 & 255, B[3] = b >>> 24 & 255, n.check = a(n.check, B, 4, 0)), x = b = 0, n.mode = 4;
						case 4:
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.xflags = 255 & b, n.head.os = b >> 8), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0, n.mode = 5;
						case 5:
							if (1024 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length = b, n.head && (n.head.extra_len = b), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0;
							} else n.head && (n.head.extra = null);
							n.mode = 6;
						case 6:
							if (1024 & n.flags && (v < (E = n.length) && (E = v), E && (n.head && (F = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), r.arraySet(n.head.extra, p, g, E, F)), 512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, n.length -= E), n.length)) break e;
							n.length = 0, n.mode = 7;
						case 7:
							if (2048 & n.flags) {
								if (v === 0) break e;
								for (E = 0; F = p[g + E++], n.head && F && n.length < 65536 && (n.head.name += String.fromCharCode(F)), F && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, F) break e;
							} else n.head && (n.head.name = null);
							n.length = 0, n.mode = 8;
						case 8:
							if (4096 & n.flags) {
								if (v === 0) break e;
								for (E = 0; F = p[g + E++], n.head && F && n.length < 65536 && (n.head.comment += String.fromCharCode(F)), F && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, F) break e;
							} else n.head && (n.head.comment = null);
							n.mode = 9;
						case 9:
							if (512 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (65535 & n.check)) {
									e.msg = "header crc mismatch", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = 12;
							break;
						case 10:
							for (; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							e.adler = n.check = h(b), x = b = 0, n.mode = 11;
						case 11:
							if (n.havedict === 0) return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, 2;
							e.adler = n.check = 1, n.mode = 12;
						case 12: if (t === 5 || t === 6) break e;
						case 13:
							if (n.last) {
								b >>>= 7 & x, x -= 7 & x, n.mode = 27;
								break;
							}
							for (; x < 3;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							switch (n.last = 1 & b, --x, 3 & (b >>>= 1)) {
								case 0:
									n.mode = 14;
									break;
								case 1:
									if (w(n), n.mode = 20, t !== 6) break;
									b >>>= 2, x -= 2;
									break e;
								case 2:
									n.mode = 17;
									break;
								case 3: e.msg = "invalid block type", n.mode = 30;
							}
							b >>>= 2, x -= 2;
							break;
						case 14:
							for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if ((65535 & b) != (b >>> 16 ^ 65535)) {
								e.msg = "invalid stored block lengths", n.mode = 30;
								break;
							}
							if (n.length = 65535 & b, x = b = 0, n.mode = 15, t === 6) break e;
						case 15: n.mode = 16;
						case 16:
							if (E = n.length) {
								if (v < E && (E = v), y < E && (E = y), E === 0) break e;
								r.arraySet(m, p, g, E, _), v -= E, g += E, y -= E, _ += E, n.length -= E;
								break;
							}
							n.mode = 12;
							break;
						case 17:
							for (; x < 14;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.nlen = 257 + (31 & b), b >>>= 5, x -= 5, n.ndist = 1 + (31 & b), b >>>= 5, x -= 5, n.ncode = 4 + (15 & b), b >>>= 4, x -= 4, 286 < n.nlen || 30 < n.ndist) {
								e.msg = "too many length or distance symbols", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 18;
						case 18:
							for (; n.have < n.ncode;) {
								for (; x < 3;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.lens[V[n.have++]] = 7 & b, b >>>= 3, x -= 3;
							}
							for (; n.have < 19;) n.lens[V[n.have++]] = 0;
							if (n.lencode = n.lendyn, n.lenbits = 7, L = { bits: n.lenbits }, I = s(0, n.lens, 0, 19, n.lencode, 0, n.work, L), n.lenbits = L.bits, I) {
								e.msg = "invalid code lengths set", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 19;
						case 19:
							for (; n.have < n.nlen + n.ndist;) {
								for (; A = (z = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (j < 16) b >>>= k, x -= k, n.lens[n.have++] = j;
								else {
									if (j === 16) {
										for (R = k + 2; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										if (b >>>= k, x -= k, n.have === 0) {
											e.msg = "invalid bit length repeat", n.mode = 30;
											break;
										}
										F = n.lens[n.have - 1], E = 3 + (3 & b), b >>>= 2, x -= 2;
									} else if (j === 17) {
										for (R = k + 3; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, F = 0, E = 3 + (7 & (b >>>= k)), b >>>= 3, x -= 3;
									} else {
										for (R = k + 7; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, F = 0, E = 11 + (127 & (b >>>= k)), b >>>= 7, x -= 7;
									}
									if (n.have + E > n.nlen + n.ndist) {
										e.msg = "invalid bit length repeat", n.mode = 30;
										break;
									}
									for (; E--;) n.lens[n.have++] = F;
								}
							}
							if (n.mode === 30) break;
							if (n.lens[256] === 0) {
								e.msg = "invalid code -- missing end-of-block", n.mode = 30;
								break;
							}
							if (n.lenbits = 9, L = { bits: n.lenbits }, I = s(c, n.lens, 0, n.nlen, n.lencode, 0, n.work, L), n.lenbits = L.bits, I) {
								e.msg = "invalid literal/lengths set", n.mode = 30;
								break;
							}
							if (n.distbits = 6, n.distcode = n.distdyn, L = { bits: n.distbits }, I = s(l, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, L), n.distbits = L.bits, I) {
								e.msg = "invalid distances set", n.mode = 30;
								break;
							}
							if (n.mode = 20, t === 6) break e;
						case 20: n.mode = 21;
						case 21:
							if (6 <= v && 258 <= y) {
								e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, o(e, C), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, n.mode === 12 && (n.back = -1);
								break;
							}
							for (n.back = 0; A = (z = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (A && !(240 & A)) {
								for (M = k, N = A, P = j; A = (z = n.lencode[P + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & z, !(M + (k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, n.length = j, A === 0) {
								n.mode = 26;
								break;
							}
							if (32 & A) {
								n.back = -1, n.mode = 12;
								break;
							}
							if (64 & A) {
								e.msg = "invalid literal/length code", n.mode = 30;
								break;
							}
							n.extra = 15 & A, n.mode = 22;
						case 22:
							if (n.extra) {
								for (R = n.extra; x < R;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							n.was = n.length, n.mode = 23;
						case 23:
							for (; A = (z = n.distcode[b & (1 << n.distbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (!(240 & A)) {
								for (M = k, N = A, P = j; A = (z = n.distcode[P + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & z, !(M + (k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, 64 & A) {
								e.msg = "invalid distance code", n.mode = 30;
								break;
							}
							n.offset = j, n.extra = 15 & A, n.mode = 24;
						case 24:
							if (n.extra) {
								for (R = n.extra; x < R;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.offset += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							if (n.offset > n.dmax) {
								e.msg = "invalid distance too far back", n.mode = 30;
								break;
							}
							n.mode = 25;
						case 25:
							if (y === 0) break e;
							if (E = C - y, n.offset > E) {
								if ((E = n.offset - E) > n.whave && n.sane) {
									e.msg = "invalid distance too far back", n.mode = 30;
									break;
								}
								D = E > n.wnext ? (E -= n.wnext, n.wsize - E) : n.wnext - E, E > n.length && (E = n.length), O = n.window;
							} else O = m, D = _ - n.offset, E = n.length;
							for (y < E && (E = y), y -= E, n.length -= E; m[_++] = O[D++], --E;);
							n.length === 0 && (n.mode = 21);
							break;
						case 26:
							if (y === 0) break e;
							m[_++] = n.length, y--, n.mode = 21;
							break;
						case 27:
							if (n.wrap) {
								for (; x < 32;) {
									if (v === 0) break e;
									v--, b |= p[g++] << x, x += 8;
								}
								if (C -= y, e.total_out += C, n.total += C, C && (e.adler = n.check = n.flags ? a(n.check, m, C, _ - C) : i(n.check, m, C, _ - C)), C = y, (n.flags ? b : h(b)) !== n.check) {
									e.msg = "incorrect data check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 28;
						case 28:
							if (n.wrap && n.flags) {
								for (; x < 32;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (0 | n.total)) {
									e.msg = "incorrect length check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 29;
						case 29:
							I = 1;
							break e;
						case 30:
							I = -3;
							break e;
						case 31: return -4;
						default: return d;
					}
					return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, (n.wsize || C !== e.avail_out && n.mode < 30 && (n.mode < 27 || t !== 4)) && T(e, e.output, e.next_out, C - e.avail_out) ? (n.mode = 31, -4) : (S -= e.avail_in, C -= e.avail_out, e.total_in += S, e.total_out += C, n.total += C, n.wrap && C && (e.adler = n.check = n.flags ? a(n.check, m, C, e.next_out - C) : i(n.check, m, C, e.next_out - C)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === 12 ? 128 : 0) + (n.mode === 20 || n.mode === 15 ? 256 : 0), (S == 0 && C === 0 || t === 4) && I === u && (I = -5), I);
				}, n.inflateEnd = function(e) {
					if (!e || !e.state) return d;
					var t = e.state;
					return t.window &&= null, e.state = null, u;
				}, n.inflateGetHeader = function(e, t) {
					var n;
					return e && e.state && 2 & (n = e.state).wrap ? ((n.head = t).done = !1, u) : d;
				}, n.inflateSetDictionary = function(e, t) {
					var n, r = t.length;
					return e && e.state ? (n = e.state).wrap !== 0 && n.mode !== 11 ? d : n.mode === 11 && i(1, t, r, 0) !== n.check ? -3 : T(e, t, r, r) ? (n.mode = 31, -4) : (n.havedict = 1, u) : d;
				}, n.inflateInfo = "pako inflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./inffast": 48,
				"./inftrees": 50
			}],
			50: [function(e, t, n) {
				var r = e("../utils/common"), i = [
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					13,
					15,
					17,
					19,
					23,
					27,
					31,
					35,
					43,
					51,
					59,
					67,
					83,
					99,
					115,
					131,
					163,
					195,
					227,
					258,
					0,
					0
				], a = [
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					17,
					17,
					17,
					17,
					18,
					18,
					18,
					18,
					19,
					19,
					19,
					19,
					20,
					20,
					20,
					20,
					21,
					21,
					21,
					21,
					16,
					72,
					78
				], o = [
					1,
					2,
					3,
					4,
					5,
					7,
					9,
					13,
					17,
					25,
					33,
					49,
					65,
					97,
					129,
					193,
					257,
					385,
					513,
					769,
					1025,
					1537,
					2049,
					3073,
					4097,
					6145,
					8193,
					12289,
					16385,
					24577,
					0,
					0
				], s = [
					16,
					16,
					16,
					16,
					17,
					17,
					18,
					18,
					19,
					19,
					20,
					20,
					21,
					21,
					22,
					22,
					23,
					23,
					24,
					24,
					25,
					25,
					26,
					26,
					27,
					27,
					28,
					28,
					29,
					29,
					64,
					64
				];
				t.exports = function(e, t, n, c, l, u, d, f) {
					var p, m, h, g, _, v, y, b, x, S = f.bits, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = null, P = 0, F = new r.Buf16(16), I = new r.Buf16(16), L = null, R = 0;
					for (C = 0; C <= 15; C++) F[C] = 0;
					for (w = 0; w < c; w++) F[t[n + w]]++;
					for (D = S, E = 15; 1 <= E && F[E] === 0; E--);
					if (E < D && (D = E), E === 0) return l[u++] = 20971520, l[u++] = 20971520, f.bits = 1, 0;
					for (T = 1; T < E && F[T] === 0; T++);
					for (D < T && (D = T), C = A = 1; C <= 15; C++) if (A <<= 1, (A -= F[C]) < 0) return -1;
					if (0 < A && (e === 0 || E !== 1)) return -1;
					for (I[1] = 0, C = 1; C < 15; C++) I[C + 1] = I[C] + F[C];
					for (w = 0; w < c; w++) t[n + w] !== 0 && (d[I[t[n + w]]++] = w);
					if (v = e === 0 ? (N = L = d, 19) : e === 1 ? (N = i, P -= 257, L = a, R -= 257, 256) : (N = o, L = s, -1), C = T, _ = u, k = w = M = 0, h = -1, g = (j = 1 << (O = D)) - 1, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
					for (;;) {
						for (y = C - k, x = d[w] < v ? (b = 0, d[w]) : d[w] > v ? (b = L[R + d[w]], N[P + d[w]]) : (b = 96, 0), p = 1 << C - k, T = m = 1 << O; l[_ + (M >> k) + (m -= p)] = y << 24 | b << 16 | x, m !== 0;);
						for (p = 1 << C - 1; M & p;) p >>= 1;
						if (p === 0 ? M = 0 : (M &= p - 1, M += p), w++, --F[C] == 0) {
							if (C === E) break;
							C = t[n + d[w]];
						}
						if (D < C && (M & g) !== h) {
							for (k === 0 && (k = D), _ += T, A = 1 << (O = C - k); O + k < E && !((A -= F[O + k]) <= 0);) O++, A <<= 1;
							if (j += 1 << O, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
							l[h = M & g] = D << 24 | O << 16 | _ - u;
						}
					}
					return M !== 0 && (l[_ + M] = C - k << 24 | 4194304), f.bits = D, 0;
				};
			}, { "../utils/common": 41 }],
			51: [function(e, t, n) {
				t.exports = {
					2: "need dictionary",
					1: "stream end",
					0: "",
					"-1": "file error",
					"-2": "stream error",
					"-3": "data error",
					"-4": "insufficient memory",
					"-5": "buffer error",
					"-6": "incompatible version"
				};
			}, {}],
			52: [function(e, t, n) {
				var r = e("../utils/common"), i = 0, a = 1;
				function o(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				var s = 0, c = 29, l = 256, u = l + 1 + c, d = 30, f = 19, p = 2 * u + 1, m = 15, h = 16, g = 7, _ = 256, v = 16, y = 17, b = 18, x = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					1,
					1,
					1,
					2,
					2,
					2,
					2,
					3,
					3,
					3,
					3,
					4,
					4,
					4,
					4,
					5,
					5,
					5,
					5,
					0
				], S = [
					0,
					0,
					0,
					0,
					1,
					1,
					2,
					2,
					3,
					3,
					4,
					4,
					5,
					5,
					6,
					6,
					7,
					7,
					8,
					8,
					9,
					9,
					10,
					10,
					11,
					11,
					12,
					12,
					13,
					13
				], C = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					2,
					3,
					7
				], w = [
					16,
					17,
					18,
					0,
					8,
					7,
					9,
					6,
					10,
					5,
					11,
					4,
					12,
					3,
					13,
					2,
					14,
					1,
					15
				], T = Array(2 * (u + 2));
				o(T);
				var E = Array(2 * d);
				o(E);
				var D = Array(512);
				o(D);
				var O = Array(256);
				o(O);
				var k = Array(c);
				o(k);
				var A, j, M, N = Array(d);
				function P(e, t, n, r, i) {
					this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length;
				}
				function F(e, t) {
					this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
				}
				function I(e) {
					return e < 256 ? D[e] : D[256 + (e >>> 7)];
				}
				function L(e, t) {
					e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
				}
				function R(e, t, n) {
					e.bi_valid > h - n ? (e.bi_buf |= t << e.bi_valid & 65535, L(e, e.bi_buf), e.bi_buf = t >> h - e.bi_valid, e.bi_valid += n - h) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
				}
				function z(e, t, n) {
					R(e, n[2 * t], n[2 * t + 1]);
				}
				function B(e, t) {
					for (var n = 0; n |= 1 & e, e >>>= 1, n <<= 1, 0 < --t;);
					return n >>> 1;
				}
				function V(e, t, n) {
					var r, i, a = Array(m + 1), o = 0;
					for (r = 1; r <= m; r++) a[r] = o = o + n[r - 1] << 1;
					for (i = 0; i <= t; i++) {
						var s = e[2 * i + 1];
						s !== 0 && (e[2 * i] = B(a[s]++, s));
					}
				}
				function H(e) {
					for (var t = 0; t < u; t++) e.dyn_ltree[2 * t] = 0;
					for (t = 0; t < d; t++) e.dyn_dtree[2 * t] = 0;
					for (t = 0; t < f; t++) e.bl_tree[2 * t] = 0;
					e.dyn_ltree[2 * _] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
				}
				function U(e) {
					8 < e.bi_valid ? L(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
				}
				function W(e, t, n, r) {
					var i = 2 * t, a = 2 * n;
					return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n];
				}
				function G(e, t, n) {
					for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && W(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !W(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
					e.heap[n] = r;
				}
				function K(e, t, n) {
					var r, i, a, o, s = 0;
					if (e.last_lit !== 0) for (; r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, r === 0 ? z(e, i, t) : (z(e, (a = O[i]) + l + 1, t), (o = x[a]) !== 0 && R(e, i -= k[a], o), z(e, a = I(--r), n), (o = S[a]) !== 0 && R(e, r -= N[a], o)), s < e.last_lit;);
					z(e, _, t);
				}
				function q(e, t) {
					var n, r, i, a = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, c = t.stat_desc.elems, l = -1;
					for (e.heap_len = 0, e.heap_max = p, n = 0; n < c; n++) a[2 * n] === 0 ? a[2 * n + 1] = 0 : (e.heap[++e.heap_len] = l = n, e.depth[n] = 0);
					for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= o[2 * i + 1]);
					for (t.max_code = l, n = e.heap_len >> 1; 1 <= n; n--) G(e, a, n);
					for (i = c; n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], G(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, G(e, a, 1), 2 <= e.heap_len;);
					e.heap[--e.heap_max] = e.heap[1], function(e, t) {
						var n, r, i, a, o, s, c = t.dyn_tree, l = t.max_code, u = t.stat_desc.static_tree, d = t.stat_desc.has_stree, f = t.stat_desc.extra_bits, h = t.stat_desc.extra_base, g = t.stat_desc.max_length, _ = 0;
						for (a = 0; a <= m; a++) e.bl_count[a] = 0;
						for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < p; n++) g < (a = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) && (a = g, _++), c[2 * r + 1] = a, l < r || (e.bl_count[a]++, o = 0, h <= r && (o = f[r - h]), s = c[2 * r], e.opt_len += s * (a + o), d && (e.static_len += s * (u[2 * r + 1] + o)));
						if (_ !== 0) {
							do {
								for (a = g - 1; e.bl_count[a] === 0;) a--;
								e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[g]--, _ -= 2;
							} while (0 < _);
							for (a = g; a !== 0; a--) for (r = e.bl_count[a]; r !== 0;) l < (i = e.heap[--n]) || (c[2 * i + 1] !== a && (e.opt_len += (a - c[2 * i + 1]) * c[2 * i], c[2 * i + 1] = a), r--);
						}
					}(e, t), V(a, l, e.bl_count);
				}
				function J(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, o = t[2 * (r + 1) + 1], ++s < c && i === o || (s < l ? e.bl_tree[2 * i] += s : i === 0 ? s <= 10 ? e.bl_tree[2 * y]++ : e.bl_tree[2 * b]++ : (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * v]++), a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4));
				}
				function ee(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], !(++s < c && i === o)) {
						if (s < l) for (; z(e, i, e.bl_tree), --s != 0;);
						else i === 0 ? s <= 10 ? (z(e, y, e.bl_tree), R(e, s - 3, 3)) : (z(e, b, e.bl_tree), R(e, s - 11, 7)) : (i !== a && (z(e, i, e.bl_tree), s--), z(e, v, e.bl_tree), R(e, s - 3, 2));
						a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4);
					}
				}
				o(N);
				var te = !1;
				function Y(e, t, n, i) {
					R(e, (s << 1) + +!!i, 3), function(e, t, n, i) {
						U(e), i && (L(e, n), L(e, ~n)), r.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n;
					}(e, t, n, !0);
				}
				n._tr_init = function(e) {
					te ||= (function() {
						var e, t, n, r, i, a = Array(m + 1);
						for (r = n = 0; r < c - 1; r++) for (k[r] = n, e = 0; e < 1 << x[r]; e++) O[n++] = r;
						for (O[n - 1] = r, r = i = 0; r < 16; r++) for (N[r] = i, e = 0; e < 1 << S[r]; e++) D[i++] = r;
						for (i >>= 7; r < d; r++) for (N[r] = i << 7, e = 0; e < 1 << S[r] - 7; e++) D[256 + i++] = r;
						for (t = 0; t <= m; t++) a[t] = 0;
						for (e = 0; e <= 143;) T[2 * e + 1] = 8, e++, a[8]++;
						for (; e <= 255;) T[2 * e + 1] = 9, e++, a[9]++;
						for (; e <= 279;) T[2 * e + 1] = 7, e++, a[7]++;
						for (; e <= 287;) T[2 * e + 1] = 8, e++, a[8]++;
						for (V(T, u + 1, a), e = 0; e < d; e++) E[2 * e + 1] = 5, E[2 * e] = B(e, 5);
						A = new P(T, x, l + 1, u, m), j = new P(E, S, 0, d, m), M = new P([], C, 0, f, g);
					}(), !0), e.l_desc = new F(e.dyn_ltree, A), e.d_desc = new F(e.dyn_dtree, j), e.bl_desc = new F(e.bl_tree, M), e.bi_buf = 0, e.bi_valid = 0, H(e);
				}, n._tr_stored_block = Y, n._tr_flush_block = function(e, t, n, r) {
					var o, s, c = 0;
					0 < e.level ? (e.strm.data_type === 2 && (e.strm.data_type = function(e) {
						var t, n = 4093624447;
						for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && e.dyn_ltree[2 * t] !== 0) return i;
						if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) return a;
						for (t = 32; t < l; t++) if (e.dyn_ltree[2 * t] !== 0) return a;
						return i;
					}(e)), q(e, e.l_desc), q(e, e.d_desc), c = function(e) {
						var t;
						for (J(e, e.dyn_ltree, e.l_desc.max_code), J(e, e.dyn_dtree, e.d_desc.max_code), q(e, e.bl_desc), t = f - 1; 3 <= t && e.bl_tree[2 * w[t] + 1] === 0; t--);
						return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
					}(e), o = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= o && (o = s)) : o = s = n + 5, n + 4 <= o && t !== -1 ? Y(e, t, n, r) : e.strategy === 4 || s === o ? (R(e, 2 + +!!r, 3), K(e, T, E)) : (R(e, 4 + +!!r, 3), function(e, t, n, r) {
						var i;
						for (R(e, t - 257, 5), R(e, n - 1, 5), R(e, r - 4, 4), i = 0; i < r; i++) R(e, e.bl_tree[2 * w[i] + 1], 3);
						ee(e, e.dyn_ltree, t - 1), ee(e, e.dyn_dtree, n - 1);
					}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), K(e, e.dyn_ltree, e.dyn_dtree)), H(e), r && U(e);
				}, n._tr_tally = function(e, t, n) {
					return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, t === 0 ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (O[n] + l + 1)]++, e.dyn_dtree[2 * I(t)]++), e.last_lit === e.lit_bufsize - 1;
				}, n._tr_align = function(e) {
					R(e, 2, 3), z(e, _, T), function(e) {
						e.bi_valid === 16 ? (L(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
					}(e);
				};
			}, { "../utils/common": 41 }],
			53: [function(e, t, n) {
				t.exports = function() {
					this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
				};
			}, {}],
			54: [function(e, t, n) {
				(function(e) {
					(function(e, t) {
						if (!e.setImmediate) {
							var n, r, i, a, o = 1, s = {}, c = !1, l = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
							u = u && u.setTimeout ? u : e, n = {}.toString.call(e.process) === "[object process]" ? function(e) {
								process.nextTick(function() {
									f(e);
								});
							} : function() {
								if (e.postMessage && !e.importScripts) {
									var t = !0, n = e.onmessage;
									return e.onmessage = function() {
										t = !1;
									}, e.postMessage("", "*"), e.onmessage = n, t;
								}
							}() ? (a = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", p, !1) : e.attachEvent("onmessage", p), function(t) {
								e.postMessage(a + t, "*");
							}) : e.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function(e) {
								f(e.data);
							}, function(e) {
								i.port2.postMessage(e);
							}) : l && "onreadystatechange" in l.createElement("script") ? (r = l.documentElement, function(e) {
								var t = l.createElement("script");
								t.onreadystatechange = function() {
									f(e), t.onreadystatechange = null, r.removeChild(t), t = null;
								}, r.appendChild(t);
							}) : function(e) {
								setTimeout(f, 0, e);
							}, u.setImmediate = function(e) {
								typeof e != "function" && (e = Function("" + e));
								for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
								return s[o] = {
									callback: e,
									args: t
								}, n(o), o++;
							}, u.clearImmediate = d;
						}
						function d(e) {
							delete s[e];
						}
						function f(e) {
							if (c) setTimeout(f, 0, e);
							else {
								var n = s[e];
								if (n) {
									c = !0;
									try {
										(function(e) {
											var n = e.callback, r = e.args;
											switch (r.length) {
												case 0:
													n();
													break;
												case 1:
													n(r[0]);
													break;
												case 2:
													n(r[0], r[1]);
													break;
												case 3:
													n(r[0], r[1], r[2]);
													break;
												default: n.apply(t, r);
											}
										})(n);
									} finally {
										d(e), c = !1;
									}
								}
							}
						}
						function p(t) {
							t.source === e && typeof t.data == "string" && t.data.indexOf(a) === 0 && f(+t.data.slice(a.length));
						}
					})(typeof self > "u" ? e === void 0 ? this : e : self);
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}]
		}, {}, [10])(10);
	});
})), ue = /* @__PURE__ */ X(((e, t) => {
	(function(t, n) {
		typeof define == "function" && define.amd ? define([], n) : e === void 0 ? (n(), t.FileSaver = { exports: {} }.exports) : n();
	})(e, function() {
		function e(e, t) {
			return t === void 0 ? t = { autoBom: !1 } : typeof t != "object" && (console.warn("Deprecated: Expected third argument to be a object"), t = { autoBom: !t }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
		}
		function n(e, t, n) {
			var r = new XMLHttpRequest();
			r.open("GET", e), r.responseType = "blob", r.onload = function() {
				s(r.response, t, n);
			}, r.onerror = function() {
				console.error("could not download file");
			}, r.send();
		}
		function r(e) {
			var t = new XMLHttpRequest();
			t.open("HEAD", e, !1);
			try {
				t.send();
			} catch {}
			return 200 <= t.status && 299 >= t.status;
		}
		function i(e) {
			try {
				e.dispatchEvent(new MouseEvent("click"));
			} catch {
				var t = document.createEvent("MouseEvents");
				t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
			}
		}
		var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : void 0, o = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), s = a.saveAs || (typeof window != "object" || window !== a ? function() {} : "download" in HTMLAnchorElement.prototype && !o ? function(e, t, o) {
			var s = a.URL || a.webkitURL, c = document.createElement("a");
			t = t || e.name || "download", c.download = t, c.rel = "noopener", typeof e == "string" ? (c.href = e, c.origin === location.origin ? i(c) : r(c.href) ? n(e, t, o) : i(c, c.target = "_blank")) : (c.href = s.createObjectURL(e), setTimeout(function() {
				s.revokeObjectURL(c.href);
			}, 4e4), setTimeout(function() {
				i(c);
			}, 0));
		} : "msSaveOrOpenBlob" in navigator ? function(t, a, o) {
			if (a = a || t.name || "download", typeof t != "string") navigator.msSaveOrOpenBlob(e(t, o), a);
			else if (r(t)) n(t, a, o);
			else {
				var s = document.createElement("a");
				s.href = t, s.target = "_blank", setTimeout(function() {
					i(s);
				});
			}
		} : function(e, t, r, i) {
			if (i ||= open("", "_blank"), i && (i.document.title = i.document.body.innerText = "downloading..."), typeof e == "string") return n(e, t, r);
			var s = e.type === "application/octet-stream", c = /constructor/i.test(a.HTMLElement) || a.safari, l = /CriOS\/[\d]+/.test(navigator.userAgent);
			if ((l || s && c || o) && typeof FileReader < "u") {
				var u = new FileReader();
				u.onloadend = function() {
					var e = u.result;
					e = l ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = e : location = e, i = null;
				}, u.readAsDataURL(e);
			} else {
				var d = a.URL || a.webkitURL, f = d.createObjectURL(e);
				i ? i.location = f : location.href = f, i = null, setTimeout(function() {
					d.revokeObjectURL(f);
				}, 4e4);
			}
		});
		a.saveAs = s.saveAs = s, t !== void 0 && (t.exports = s);
	});
})), de = /* @__PURE__ */ ce(le()), fe = /* @__PURE__ */ ce(ue()), pe = class extends Error {
	constructor(e) {
		super(e), this.name = "Eta Error";
	}
}, me = class extends pe {
	constructor(e) {
		super(e), this.name = "EtaParser Error";
	}
}, he = class extends pe {
	constructor(e) {
		super(e), this.name = "EtaRuntime Error";
	}
}, ge = class extends pe {
	constructor(e) {
		super(e), this.name = "EtaNameResolution Error";
	}
};
function Q(e, t, n) {
	let r = t.slice(0, n).split(/\n/), i = r.length, a = r[i - 1].length + 1;
	throw e += " at line " + i + " col " + a + ":\n\n  " + t.split(/\n/)[i - 1] + "\n  " + Array(a).join(" ") + "^", new me(e);
}
function _e(e, t, n, r) {
	let i = t.split("\n"), a = Math.max(n - 3, 0), o = Math.min(i.length, n + 3), s = r, c = i.slice(a, o).map((e, t) => {
		let r = t + a + 1;
		return (r === n ? " >> " : "    ") + r + "| " + e;
	}).join("\n"), l = new he((s ? s + ":" + n + "\n" : "line " + n + "\n") + c + "\n\n" + e.message);
	throw l.name = e.name, l.cause = e, l;
}
var ve = (async () => {}).constructor;
function ye(e, t) {
	let n = this.config, r = t?.async ? ve : Function;
	try {
		return new r(n.varName, "options", this.compileToString.call(this, e, t));
	} catch (n) {
		throw n instanceof SyntaxError ? new me("Bad template syntax\n\n" + n.message + "\n" + Array(n.message.length + 1).join("=") + "\n" + this.compileToString.call(this, e, t) + "\n") : n;
	}
}
function be(e, t) {
	let n = this.config, r = t?.async, i = this.compileBody, a = this.parse.call(this, e), o = `${n.functionHeader}
let include = (__eta_t, __eta_d) => this.render(__eta_t, {...${n.varName}, ...(__eta_d ?? {})}, options);
let includeAsync = (__eta_t, __eta_d) => this.renderAsync(__eta_t, {...${n.varName}, ...(__eta_d ?? {})}, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction, blocks: {}${n.debug ? ", line: 1, templateStr: \"" + e.replace(/\\|"/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + "\"" : ""}};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}${n.debug ? "try {" : ""}${n.useWith ? "with(" + n.varName + "||{}){" : ""}

function ${n.outputFunctionName}(s){__eta.res+=s;}
function capture(fn){const s=__eta.res;__eta.res='';try{fn();return __eta.res}finally{__eta.res=s;}}
async function captureAsync(fn){const s=__eta.res;__eta.res='';try{await fn();return __eta.res}finally{__eta.res=s;}}
function block(name,fn){if(__eta.layout){if(fn){__eta.blocks[name]=capture(fn);}return '';}const b=${n.varName}.__blocks||{};if(name in b){return b[name];}return fn?capture(fn):'';}
async function blockAsync(name,fn){if(__eta.layout){if(fn){__eta.blocks[name]=await captureAsync(fn);}return '';}const b=${n.varName}.__blocks||{};if(name in b){return b[name];}return fn?await captureAsync(fn):'';}

${i.call(this, a)}
if (__eta.layout) {
  __eta.res = ${r ? "await includeAsync" : "include"} (__eta.layout, {...${n.varName}, body: __eta.res, ...__eta.layoutData, __blocks: __eta.blocks});
}
${n.useWith ? "}" : ""}${n.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : ""}
return __eta.res;
`;
	if (n.plugins) for (let e = 0; e < n.plugins.length; e++) {
		let t = n.plugins[e];
		t.processFnString && (o = t.processFnString(o, n));
	}
	return o;
}
function xe(e) {
	let t = this.config, n = 0, r = e.length, i = "";
	for (; n < r; n++) {
		let r = e[n];
		if (typeof r == "string") i += "__eta.res+='" + r + "';\n";
		else {
			let e = r.t, n = r.val || "";
			t.debug && (i += "__eta.line=" + r.lineNo + "\n"), e === "r" ? (t.autoFilter && (n = "__eta.f(" + n + ")"), i += "__eta.res+=" + n + ";\n") : e === "i" ? (t.autoFilter && (n = "__eta.f(" + n + ")"), t.autoEscape && (n = "__eta.e(" + n + ")"), i += "__eta.res+=" + n + ";\n") : e === "e" ? i += n + "\n" : Object.hasOwn(t.customTags, e) && (i += `__eta.res+=this.config.customTags[${JSON.stringify(e)}](${JSON.stringify(n)},${t.varName});\n`);
		}
	}
	return i;
}
function Se(e, t, n, r) {
	let i, a;
	return Array.isArray(t.autoTrim) ? (i = t.autoTrim[1], a = t.autoTrim[0]) : i = a = t.autoTrim, (n || n === !1) && (i = n), (r || r === !1) && (a = r), !a && !i ? e : i === "slurp" && a === "slurp" ? e.trim() : (i === "_" || i === "slurp" ? e = e.trimStart() : (i === "-" || i === "nl") && (e = e.replace(/^(?:\r\n|\n|\r)/, "")), a === "_" || a === "slurp" ? e = e.trimEnd() : (a === "-" || a === "nl") && (e = e.replace(/(?:\r\n|\n|\r)$/, "")), e);
}
var Ce = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function we(e) {
	return Ce[e];
}
function Te(e) {
	let t = String(e);
	return /[&<>"']/.test(t) ? t.replace(/[&<>"']/g, we) : t;
}
var Ee = {
	autoEscape: !0,
	autoFilter: !1,
	autoTrim: [!1, "nl"],
	cache: !1,
	cacheFilepaths: !0,
	customTags: {},
	debug: !1,
	escapeFunction: Te,
	filterFunction: (e) => String(e),
	outputFunctionName: "output",
	functionHeader: "",
	parse: {
		exec: "",
		interpolate: "=",
		raw: "~"
	},
	plugins: [],
	rmWhitespace: !1,
	tags: ["<%", "%>"],
	useWith: !1,
	varName: "it",
	defaultExtension: ".eta"
}, De = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, Oe = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, ke = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
function Ae(e) {
	return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function je(e, t) {
	return e.slice(0, t).split("\n").length;
}
function Me(e) {
	let t = this.config, n = [], r = !1, i = 0, a = t.parse, o = Object.keys(t.customTags);
	if (t.plugins) for (let n = 0; n < t.plugins.length; n++) {
		let r = t.plugins[n];
		r.processTemplate && (e = r.processTemplate(e, t));
	}
	t.rmWhitespace && (e = e.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "")), De.lastIndex = 0, Oe.lastIndex = 0, ke.lastIndex = 0;
	function s(e, i) {
		e && (e = Se(e, t, r, i), e && (e = e.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), n.push(e)));
	}
	let c = [
		a.exec,
		a.interpolate,
		a.raw,
		...o
	].reduce((e, t) => e && t ? e + "|" + Ae(t) : t ? Ae(t) : e, ""), l = RegExp(Ae(t.tags[0]) + "(-|_)?\\s*(" + c + ")?\\s*", "g"), u = RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + Ae(t.tags[1]) + ")", "g"), d;
	for (; d = l.exec(e);) {
		let c = e.slice(i, d.index);
		i = d[0].length + d.index;
		let f = d[1], p = d[2] || "";
		s(c, f), u.lastIndex = i;
		let m, h = !1;
		for (; m = u.exec(e);) if (m[1]) {
			let t = e.slice(i, m.index);
			l.lastIndex = i = u.lastIndex, r = m[2], h = {
				t: p === a.exec ? "e" : p === a.raw ? "r" : p === a.interpolate ? "i" : o.includes(p) ? p : "",
				val: t
			};
			break;
		} else {
			let t = m[0];
			if (t === "/*") {
				let t = e.indexOf("*/", u.lastIndex);
				t === -1 && Q("unclosed comment", e, m.index), u.lastIndex = t;
			} else t === "'" ? (Oe.lastIndex = m.index, Oe.exec(e) ? u.lastIndex = Oe.lastIndex : Q("unclosed string", e, m.index)) : t === "\"" ? (ke.lastIndex = m.index, ke.exec(e) ? u.lastIndex = ke.lastIndex : Q("unclosed string", e, m.index)) : t === "`" && (De.lastIndex = m.index, De.exec(e) ? u.lastIndex = De.lastIndex : Q("unclosed string", e, m.index));
		}
		h ? (t.debug && (h.lineNo = je(e, d.index)), n.push(h)) : Q("unclosed tag", e, d.index);
	}
	if (s(e.slice(i, e.length), !1), t.plugins) for (let e = 0; e < t.plugins.length; e++) {
		let r = t.plugins[e];
		r.processAST && (n = r.processAST(n, t));
	}
	return n;
}
function Ne(e, t) {
	let n = t?.async ? this.templatesAsync : this.templatesSync;
	if (this.resolvePath && this.readFile && !e.startsWith("@")) {
		let e = t.filepath, r = n.get(e);
		if (this.config.cache && r) return r;
		{
			let r = this.readFile(e), i = this.compile(r, t);
			return this.config.cache && n.define(e, i), i;
		}
	}
	{
		let t = n.get(e);
		if (t) return t;
		throw new ge(`Failed to get template '${e}'`);
	}
}
function Pe(e, t, n) {
	let r, i = {
		...n,
		async: !1
	};
	return typeof e == "string" ? (this.resolvePath && this.readFile && !e.startsWith("@") && (i.filepath = this.resolvePath(e, i)), r = Ne.call(this, e, i)) : r = e, r.call(this, t, i);
}
function Fe(e, t, n) {
	let r, i = {
		...n,
		async: !0
	};
	typeof e == "string" ? (this.resolvePath && this.readFile && !e.startsWith("@") && (i.filepath = this.resolvePath(e, i)), r = Ne.call(this, e, i)) : r = e;
	let a = r.call(this, t, i);
	return Promise.resolve(a);
}
function Ie(e, t) {
	let n = this.compile(e, { async: !1 });
	return Pe.call(this, n, t);
}
function Le(e, t) {
	let n = this.compile(e, { async: !0 });
	return Fe.call(this, n, t);
}
var Re = class {
	constructor(e) {
		this.cache = e;
	}
	define(e, t) {
		this.cache[e] = t;
	}
	get(e) {
		return this.cache[e];
	}
	remove(e) {
		delete this.cache[e];
	}
	reset() {
		this.cache = {};
	}
	load(e) {
		this.cache = {
			...this.cache,
			...e
		};
	}
}, ze = class {
	constructor(e) {
		this.config = e ? {
			...Ee,
			...e
		} : { ...Ee };
		let t = [
			this.config.parse.exec,
			this.config.parse.interpolate,
			this.config.parse.raw,
			"-",
			"_"
		];
		for (let e of Object.keys(this.config.customTags)) if (t.includes(e)) throw new pe(`Custom tag prefix "${e}" conflicts with a built-in prefix`);
	}
	config;
	RuntimeErr = _e;
	compile = ye;
	compileToString = be;
	compileBody = xe;
	parse = Me;
	render = Pe;
	renderAsync = Fe;
	renderString = Ie;
	renderStringAsync = Le;
	filepathCache = {};
	templatesSync = new Re({});
	templatesAsync = new Re({});
	resolvePath = null;
	readFile = null;
	configure(e) {
		this.config = {
			...this.config,
			...e
		};
	}
	withConfig(e) {
		return {
			...this,
			config: {
				...this.config,
				...e
			}
		};
	}
	loadTemplate(e, t, n) {
		if (typeof t == "string") (n?.async ? this.templatesAsync : this.templatesSync).define(e, this.compile(t, n));
		else {
			let r = this.templatesSync;
			(t.constructor.name === "AsyncFunction" || n?.async) && (r = this.templatesAsync), r.define(e, t);
		}
	}
}, Be = new class extends ze {}({ autoTrim: !1 });
function $(e, t) {
	return Be.renderString(e, t);
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/groovy/build.gradle.eta?raw
var Ve = "<% if (it.kotlin) { -%>\nimport org.jetbrains.kotlin.gradle.dsl.JvmTarget\n\n<% } -%>\nplugins {\n<% const loomSuffix = it.unobfuscated ? '' : '-remap'; -%>\n	id 'net.fabricmc.fabric-loom<%= loomSuffix %>' version \"${loom_version}\"\n	id 'maven-publish'\n<% if (it.kotlin) { -%>\n	id \"org.jetbrains.kotlin.jvm\" version \"<%= it.kotlin.kotlinVersion %>\"\n<% } -%>\n}\n\nrepositories {\n	// Add repositories to retrieve artifacts from in here.\n	// You should only use this when depending on other mods because\n	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.\n	// See https://docs.gradle.org/current/userguide/declaring_repositories.html\n	// for more information about repositories.\n}\n\n<% if (it.splitSources) { -%>\nloom {\n	splitEnvironmentSourceSets()\n\n	mods {\n		\"<%= it.modid %>\" {\n			sourceSet sourceSets.main\n			sourceSet sourceSets.client\n		}\n	}\n}\n\n<% } -%>\n<% if (it.dataGeneration) { -%>\nfabricApi {\n	configureDataGeneration {\n		client = true\n		modId = \"<%= it.modid %>\"\n	}\n}\n\n<% } -%>\ndependencies {\n<% const implementation = it.unobfuscated ? 'implementation' : 'modImplementation' -%>\n	// To change the versions see the gradle.properties file\n	minecraft \"com.mojang:minecraft:${project.minecraft_version}\"\n<% if (!it.unobfuscated) { -%>\n	mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>\"net.fabricmc:yarn:${project.yarn_mappings}:v2\"<% } %>\n<% } -%>\n	<%= implementation %> \"net.fabricmc:fabric-loader:${project.loader_version}\"\n\n	// Fabric API. This is technically optional, but you probably want it anyway.\n	<%= implementation %> \"net.fabricmc.fabric-api:fabric-api:${project.fabric_api_version}\"\n<% if (it.kotlin) { -%>\n    <%= implementation %> \"net.fabricmc:fabric-language-kotlin:${project.fabric_kotlin_version}\"\n<% } -%>\n}\n\nprocessResources {\n	def version = project.version\n	inputs.property \"version\", version\n\n	filesMatching(\"fabric.mod.json\") {\n		expand \"version\": version\n	}\n}\n\ntasks.withType(JavaCompile).configureEach {\n	it.options.release = <%= it.java.release %>\n}\n\n<% if (it.kotlin) { -%>\nkotlin {\n	compilerOptions {\n		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>\n	}\n}\n\n<% } -%>\njava {\n	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the \"build\" task\n	// if it is present.\n	// If you remove this line, sources will not be generated.\n	withSourcesJar()\n\n	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n}\n\njar {\n	def projectName = project.name\n	inputs.property \"projectName\", projectName\n\n	from(\"LICENSE\") {\n		rename { \"${it}_$projectName\"}\n	}\n}\n\n// configure the maven publication\npublishing {\n	publications {\n		create(\"mavenJava\", MavenPublication) {\n			from components.java\n		}\n	}\n\n	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.\n	repositories {\n		// Add repositories to publish to here.\n		// Notice: This block does NOT have the same function as the block in the top level.\n		// The repositories here will be used for publishing your artifact, not for\n		// retrieving dependencies.\n	}\n}\n", He = "pluginManagement {\n	repositories {\n		maven {\n			name = 'Fabric'\n			url = 'https://maven.fabricmc.net/'\n		}\n		mavenCentral()\n		gradlePluginPortal()\n	}\n}\n\n// Should match your modid\nrootProject.name = '<%= it.modid %>'\n", Ue = {
	compatibility: "1_8",
	mixin: "JAVA_8",
	release: 8
}, We = {
	compatibility: "16",
	mixin: "JAVA_16",
	release: 16
}, Ge = {
	compatibility: "17",
	mixin: "JAVA_17",
	release: 17
}, Ke = {
	compatibility: "21",
	mixin: "JAVA_21",
	release: 21
}, qe = {
	compatibility: "25",
	mixin: "JAVA_25",
	release: 25
};
function Je(e) {
	let t = G(e), n = q(e);
	return t >= 26 ? qe : n <= 16 ? Ue : n == 17 ? We : n <= 19 || n == 20 && U(e) <= 4 ? Ge : Ke;
}
var Ye = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, Xe = "abstract continue for new switch assert default goto package synchronized\n	boolean do if private this break double implements protected throw byte else\n	import public throws case enum instanceof return transient catch extends int\n	short try char final interface static void class finally long strictfp\n	volatile const float native super while _ true false null".split(/\s+/), Ze = [
	"net.minecraft.",
	"com.mojang.",
	"net.fabricmc.",
	"java."
];
function Qe(e) {
	let t = [];
	Ye.test(e.toLowerCase()) || t.push("Package name is not a valid Java package name!");
	let n = e.split(".").filter((e) => Xe.includes(e));
	n.length != 0 && t.push(`Package name contains illegal component: '${n[0]}'`);
	for (let n of Ze) e.toLowerCase().startsWith(n) ? t.push(`Package name starts with '${n}', which is reserved!`) : e.toLowerCase() + "." == n && t.push(`Package name is '${n}', which is reserved!`);
	return t;
}
var $e = [
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
function et(e) {
	let t = e.match(/^\d+/);
	if (!(t && t[0])) return [e];
	let n = t[0], r = e.substring(n.length);
	return [...n.split("").map((e) => $e[parseInt(e)]), r];
}
function tt(e) {
	return e.filter(Boolean).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function nt(e) {
	return tt(et(tt(e.split(/\b/).map((e) => e.replaceAll(/\W/g, "")))));
}
function rt(e) {
	return e.toLowerCase().replaceAll(/[\s/]+/g, ".").replaceAll(/[^a-z0-9_\.]/g, "");
}
//#endregion
//#region scripts/src/lib/template/gradlegroovy.ts
async function it(e, t) {
	await e.write("build.gradle", $(Ve, {
		...t,
		java: Je(t.minecraftVersion)
	})), await e.write("settings.gradle", $(He, t));
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/kotlin/build.gradle.kts.eta?raw
var at = "<% if (it.kotlin) { -%>\nimport org.jetbrains.kotlin.gradle.dsl.JvmTarget\n\n<% } -%>\nplugins {\n<% const pluginSuffix = it.unobfuscated ? '' : '-remap' -%>\n	id(\"net.fabricmc.fabric-loom<%= pluginSuffix %>\")\n	`maven-publish`\n<% if (it.kotlin) { -%>\n	id(\"org.jetbrains.kotlin.jvm\") version \"<%= it.kotlin.kotlinVersion %>\"\n<% } -%>\n}\n\nrepositories {\n	// Add repositories to retrieve artifacts from in here.\n	// You should only use this when depending on other mods because\n	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.\n	// See https://docs.gradle.org/current/userguide/declaring_repositories.html\n	// for more information about repositories.\n}\n\n<% if (it.splitSources) { -%>\nloom {\n	splitEnvironmentSourceSets()\n\n	mods {\n		register(\"<%= it.modid %>\") {\n			sourceSet(sourceSets.main.get())\n			sourceSet(sourceSets.getByName(\"client\"))\n		}\n	}\n}\n\n<% } -%>\n<% if (it.dataGeneration) { -%>\nfabricApi {\n	configureDataGeneration {\n		client = true\n		modId = \"<%= it.modid %>\"\n	}\n}\n\n<% } -%>\ndependencies {\n<% const implementation = it.unobfuscated ? 'implementation' : 'modImplementation' -%>\n	// To change the versions see the gradle.properties file\n	minecraft(\"com.mojang:minecraft:${providers.gradleProperty(\"minecraft_version\").get()}\")\n<% if (!it.unobfuscated) { -%>\n    mappings(<% if(it.mojmap) { %>loom.officialMojangMappings()<% } else { %>\"net.fabricmc:yarn:${providers.gradleProperty(\"yarn_mappings\").get()}:v2\"<% } %>)\n<% } -%>\n	<%= implementation %>(\"net.fabricmc:fabric-loader:${providers.gradleProperty(\"loader_version\").get()}\")\n\n	// Fabric API. This is technically optional, but you probably want it anyway.\n	<%= implementation %>(\"net.fabricmc.fabric-api:fabric-api:${providers.gradleProperty(\"fabric_api_version\").get()}\")\n<% if (it.kotlin) { -%>\n    <%= implementation %>(\"net.fabricmc:fabric-language-kotlin:${providers.gradleProperty(\"fabric_kotlin_version\").get()}\")\n<% } -%>\n}\n\ntasks.processResources {\n	val version = version\n	inputs.property(\"version\", version)\n\n	filesMatching(\"fabric.mod.json\") {\n		expand(\"version\" to version)\n	}\n}\n\ntasks.withType<JavaCompile>().configureEach {\n	options.release = <%= it.java.release %>\n}\n\n<% if (it.kotlin) { -%>\nkotlin {\n	compilerOptions {\n		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>\n	}\n}\n\n<% } -%>\njava {\n	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the \"build\" task\n	// if it is present.\n	// If you remove this line, sources will not be generated.\n	withSourcesJar()\n\n	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n}\n\ntasks.jar {\n	val projectName = project.name\n	inputs.property(\"projectName\", projectName)\n\n	from(\"LICENSE\") {\n		rename { \"${it}_$projectName\" }\n	}\n}\n\n// configure the maven publication\npublishing {\n	publications {\n		register<MavenPublication>(\"mavenJava\") {\n			from(components[\"java\"])\n		}\n	}\n\n	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.\n	repositories {\n		// Add repositories to publish to here.\n		// Notice: This block does NOT have the same function as the block in the top level.\n		// The repositories here will be used for publishing your artifact, not for\n		// retrieving dependencies.\n	}\n}\n", ot = "pluginManagement {\n	repositories {\n		maven {\n			name = \"Fabric\"\n			url = uri(\"https://maven.fabricmc.net/\")\n		}\n		mavenCentral()\n		gradlePluginPortal()\n	}\n\n	plugins {\n<% const pluginSuffix = it.unobfuscated ? '' : '-remap' -%>\n		id(\"net.fabricmc.fabric-loom<%= pluginSuffix %>\") version providers.gradleProperty(\"loom_version\")\n	}\n}\n\n// Should match your modid\nrootProject.name = \"<%= it.modid %>\"\n";
//#endregion
//#region scripts/src/lib/template/gradlekotlin.ts
async function st(e, t) {
	await e.write("build.gradle.kts", $(at, {
		...t,
		java: Je(t.minecraftVersion)
	})), await e.write("settings.gradle.kts", $(ot, t));
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/gradle.properties.eta?raw
var ct = "# Done to increase the memory available to gradle.\norg.gradle.jvmargs=-Xmx1G\norg.gradle.parallel=true\norg.gradle.configuration-cache=true\n\n# Fabric Properties\n# check these on https://fabricmc.net/develop\nminecraft_version=<%= it.minecraftVersion %>\n<% if (!it.mojmap && !it.unobfuscated) { -%>\nyarn_mappings=<%= it.yarnVersion %>\n<% } -%>\nloader_version=<%= it.loaderVersion %>\nloom_version=1.19-SNAPSHOT\n<% if (it.kotlin) { -%>\nfabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>\n<% } -%>\n\n# Mod Properties\nversion=1.0.0\ngroup=<%= it.packageName %>\n\n# Dependencies\nfabric_api_version=<%= it.fabricVersion %>\n";
//#endregion
//#region scripts/src/lib/template/gradle.ts
async function lt(e, t) {
	await e.write("gradle.properties", $(ct, t)), t.gradleKotlin ? await st(e, t) : await it(e, t);
}
//#endregion
//#region scripts/src/lib/template/utils.ts
function ut(e) {
	for (var t = globalThis.atob(e), n = t.length, r = new Uint8Array(n), i = 0; i < n; i++) r[i] = t.charCodeAt(i);
	return r.buffer;
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/wrapper/gradlew?raw
var dt = "#!/bin/sh\n\n#\n# Copyright © 2015 the original authors.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#      https://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n# SPDX-License-Identifier: Apache-2.0\n#\n\n##############################################################################\n#\n#   gradlew start up script for POSIX generated by Gradle.\n#\n#   Important for running:\n#\n#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is\n#       noncompliant, but you have some other compliant shell such as ksh or\n#       bash, then to run this script, type that shell name before the whole\n#       command line, like:\n#\n#           ksh gradlew\n#\n#       Busybox and similar reduced shells will NOT work, because this script\n#       requires all of these POSIX shell features:\n#         * functions;\n#         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,\n#           «${var#prefix}», «${var%suffix}», and «$( cmd )»;\n#         * compound commands having a testable exit status, especially «case»;\n#         * various built-in commands including «command», «set», and «ulimit».\n#\n#   Important for patching:\n#\n#   (2) This script targets any POSIX shell, so it avoids extensions provided\n#       by Bash, Ksh, etc; in particular arrays are avoided.\n#\n#       The \"traditional\" practice of packing multiple parameters into a\n#       space-separated string is a well documented source of bugs and security\n#       problems, so this is (mostly) avoided, by progressively accumulating\n#       options in \"$@\", and eventually passing that to Java.\n#\n#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,\n#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;\n#       see the in-line comments for details.\n#\n#       There are tweaks for specific operating systems such as AIX, CygWin,\n#       Darwin, MinGW, and NonStop.\n#\n#   (3) This script is generated from the Groovy template\n#       https://github.com/gradle/gradle/blob/3d91ce3b8caaf77ad09f381f43615b715b53f72c/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt\n#       within the Gradle project.\n#\n#       You can find Gradle at https://github.com/gradle/gradle/.\n#\n##############################################################################\n\n# Attempt to set APP_HOME\n\n# Resolve links: $0 may be a link\napp_path=$0\n\n# Need this for daisy-chained symlinks.\nwhile\n    APP_HOME=${app_path%\"${app_path##*/}\"}  # leaves a trailing /; empty if no leading path\n    [ -h \"$app_path\" ]\ndo\n    ls=$( ls -ld \"$app_path\" )\n    link=${ls#*' -> '}\n    case $link in             #(\n      /*)   app_path=$link ;; #(\n      *)    app_path=$APP_HOME$link ;;\n    esac\ndone\n\n# This is normally unused\n# shellcheck disable=SC2034\nAPP_BASE_NAME=${0##*/}\n# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)\nAPP_HOME=$( cd -P \"${APP_HOME:-./}\" > /dev/null && printf '%s\\n' \"$PWD\" ) || exit\n\n# Use the maximum available, or set MAX_FD != -1 to use that value.\nMAX_FD=maximum\n\nwarn () {\n    echo \"$*\"\n} >&2\n\ndie () {\n    echo\n    echo \"$*\"\n    echo\n    exit 1\n} >&2\n\n# OS specific support (must be 'true' or 'false').\ncygwin=false\nmsys=false\ndarwin=false\nnonstop=false\ncase \"$( uname )\" in                #(\n  CYGWIN* )         cygwin=true  ;; #(\n  Darwin* )         darwin=true  ;; #(\n  MSYS* | MINGW* )  msys=true    ;; #(\n  NONSTOP* )        nonstop=true ;;\nesac\n\n\n\n# Determine the Java command to use to start the JVM.\nif [ -n \"$JAVA_HOME\" ] ; then\n    if [ -x \"$JAVA_HOME/jre/sh/java\" ] ; then\n        # IBM's JDK on AIX uses strange locations for the executables\n        JAVACMD=$JAVA_HOME/jre/sh/java\n    else\n        JAVACMD=$JAVA_HOME/bin/java\n    fi\n    if [ ! -x \"$JAVACMD\" ] ; then\n        die \"ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME\n\nPlease set the JAVA_HOME variable in your environment to match the\nlocation of your Java installation.\"\n    fi\nelse\n    JAVACMD=java\n    if ! command -v java >/dev/null 2>&1\n    then\n        die \"ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.\n\nPlease set the JAVA_HOME variable in your environment to match the\nlocation of your Java installation.\"\n    fi\nfi\n\n# Increase the maximum file descriptors if we can.\nif ! \"$cygwin\" && ! \"$darwin\" && ! \"$nonstop\" ; then\n    case $MAX_FD in #(\n      max*)\n        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.\n        # shellcheck disable=SC2039,SC3045\n        MAX_FD=$( ulimit -H -n ) ||\n            warn \"Could not query maximum file descriptor limit\"\n    esac\n    case $MAX_FD in  #(\n      '' | soft) :;; #(\n      *)\n        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.\n        # shellcheck disable=SC2039,SC3045\n        ulimit -n \"$MAX_FD\" ||\n            warn \"Could not set maximum file descriptor limit to $MAX_FD\"\n    esac\nfi\n\n# Collect all arguments for the java command, stacking in reverse order:\n#   * args from the command line\n#   * the main class name\n#   * -classpath\n#   * -D...appname settings\n#   * --module-path (only if needed)\n#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.\n\n# For Cygwin or MSYS, switch paths to Windows format before running java\nif \"$cygwin\" || \"$msys\" ; then\n    APP_HOME=$( cygpath --path --mixed \"$APP_HOME\" )\n\n    JAVACMD=$( cygpath --unix \"$JAVACMD\" )\n\n    # Now convert the arguments - kludge to limit ourselves to /bin/sh\n    for arg do\n        if\n            case $arg in                                #(\n              -*)   false ;;                            # don't mess with options #(\n              /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath\n                    [ -e \"$t\" ] ;;                      #(\n              *)    false ;;\n            esac\n        then\n            arg=$( cygpath --path --ignore --mixed \"$arg\" )\n        fi\n        # Roll the args list around exactly as many times as the number of\n        # args, so each arg winds up back in the position where it started, but\n        # possibly modified.\n        #\n        # NB: a `for` loop captures its iteration list before it begins, so\n        # changing the positional parameters here affects neither the number of\n        # iterations, nor the values presented in `arg`.\n        shift                   # remove old arg\n        set -- \"$@\" \"$arg\"      # push replacement arg\n    done\nfi\n\n\n# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.\nDEFAULT_JVM_OPTS='\"-Xmx64m\" \"-Xms64m\"'\n\n# Collect all arguments for the java command:\n#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,\n#     and any embedded shellness will be escaped.\n#   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be\n#     treated as '${Hostname}' itself on the command line.\n\nset -- \\\n        \"-Dorg.gradle.appname=$APP_BASE_NAME\" \\\n        -jar \"$APP_HOME/gradle/wrapper/gradle-wrapper.jar\" \\\n        \"$@\"\n\n# Stop when \"xargs\" is not available.\nif ! command -v xargs >/dev/null 2>&1\nthen\n    die \"xargs is not available\"\nfi\n\n# Use \"xargs\" to parse quoted args.\n#\n# With -n1 it outputs one arg per line, with the quotes and backslashes removed.\n#\n# In Bash we could simply go:\n#\n#   readarray ARGS < <( xargs -n1 <<<\"$var\" ) &&\n#   set -- \"${ARGS[@]}\" \"$@\"\n#\n# but POSIX shell has neither arrays nor command substitution, so instead we\n# post-process each arg (as a line of input to sed) to backslash-escape any\n# character that might be a shell metacharacter, then use eval to reverse\n# that process (while maintaining the separation between arguments), and wrap\n# the whole thing up as a single \"set\" statement.\n#\n# This will of course break if any of these variables contains a newline or\n# an unmatched quote.\n#\n\neval \"set -- $(\n        printf '%s\\n' \"$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS\" |\n        xargs -n1 |\n        sed ' s~[^-[:alnum:]+,./:=@_]~\\\\&~g; ' |\n        tr '\\n' ' '\n    )\" '\"$@\"'\n\nexec \"$JAVACMD\" \"$@\"\n", ft = "@rem\r\n@rem Copyright 2015 the original author or authors.\r\n@rem\r\n@rem Licensed under the Apache License, Version 2.0 (the \"License\");\r\n@rem you may not use this file except in compliance with the License.\r\n@rem You may obtain a copy of the License at\r\n@rem\r\n@rem      https://www.apache.org/licenses/LICENSE-2.0\r\n@rem\r\n@rem Unless required by applicable law or agreed to in writing, software\r\n@rem distributed under the License is distributed on an \"AS IS\" BASIS,\r\n@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n@rem See the License for the specific language governing permissions and\r\n@rem limitations under the License.\r\n@rem\r\n@rem SPDX-License-Identifier: Apache-2.0\r\n@rem\r\n\r\n@if \"%DEBUG%\"==\"\" @echo off\r\n@rem ##########################################################################\r\n@rem\r\n@rem  gradlew startup script for Windows\r\n@rem\r\n@rem ##########################################################################\r\n\r\n@rem Set local scope for the variables, and ensure extensions are enabled\r\nsetlocal EnableExtensions\r\n\r\n@rem Catch executions from older scripts and ensure they exit cleanly.\r\n@rem This can be removed once we can be reasonably confident that few people\r\n@rem will be migrating directly to this new wrapper.\r\ngoto afterSafetyNet\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\r\ngoto exitWithErrorLevel\r\n:afterSafetyNet\r\n\r\nset DIRNAME=%~dp0\r\nif \"%DIRNAME%\"==\"\" set DIRNAME=.\r\n@rem This is normally unused\r\nset APP_BASE_NAME=%~n0\r\nset APP_HOME=%DIRNAME%\r\n\r\n@rem Resolve any \".\" and \"..\" in APP_HOME to make it shorter.\r\nfor %%i in (\"%APP_HOME%\") do set APP_HOME=%%~fi\r\n\r\n@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.\r\nset DEFAULT_JVM_OPTS=\"-Xmx64m\" \"-Xms64m\"\r\n\r\n@rem Find java.exe\r\nif defined JAVA_HOME goto findJavaFromJavaHome\r\n\r\nset JAVA_EXE=java.exe\r\n%JAVA_EXE% -version >NUL 2>&1\r\nif %ERRORLEVEL% equ 0 goto execute\r\n\r\n1>&2 echo.\r\n1>&2 echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.\r\n1>&2 echo.\r\n1>&2 echo Please set the JAVA_HOME variable in your environment to match the\r\n1>&2 echo location of your Java installation.\r\n\r\n\"%COMSPEC%\" /c exit 1\r\ngoto exitWithErrorLevel\r\n\r\n:findJavaFromJavaHome\r\nset JAVA_HOME=%JAVA_HOME:\"=%\r\nset JAVA_EXE=%JAVA_HOME%/bin/java.exe\r\n\r\nif exist \"%JAVA_EXE%\" goto execute\r\n\r\n1>&2 echo.\r\n1>&2 echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%\r\n1>&2 echo.\r\n1>&2 echo Please set the JAVA_HOME variable in your environment to match the\r\n1>&2 echo location of your Java installation.\r\n\r\n\"%COMSPEC%\" /c exit 1\r\ngoto exitWithErrorLevel\r\n\r\n:execute\r\n@rem Setup the command line\r\n\r\n\r\n\r\n@rem Execute gradlew\r\n@rem endlocal doesn't take effect until after the line is parsed and variables are expanded\r\n@rem which allows us to clear the local environment before executing the java command\r\nendlocal & \"%JAVA_EXE%\" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% \"-Dorg.gradle.appname=%APP_BASE_NAME%\" -jar \"%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar\" %* & call :exitWithErrorLevel & goto exitWithErrorLevel\r\n\r\n@rem This label must not be changed. We rely on old scripts being able to jump to this point.\r\n:exitWithErrorLevel\r\n@rem Use \"%COMSPEC%\" /c exit to allow operators to work properly in scripts\r\n\"%COMSPEC%\" /c exit %ERRORLEVEL%\r\n", pt = "distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://services.gradle.org/distributions/gradle-9.8.2-bin.zip\nnetworkTimeout=10000\nretries=0\nretryBackOffMs=500\nvalidateDistributionUrl=true\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n", mt = "UEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAQAAkATUVUQS1JTkYvTElDRU5TRVVUBQABAAAAAN1aW3PbNhZ+z6/AaGZn7BlGSbvt7rZ9UmOnVTeVM5K9mT5CJChhQxIsQFrW/vo9F9woyU72dT2Z1qKJg4Nz+c53DvRKfOln0ctyr8QHXarOqVcvvPkvZZ02nfh2/rYQv8lulPYovn379rtnF+2Hof/xzZvD4TCXtM3c2N2bhrdyb17hwvvb9e8bsVjdiHd3q5vl/fJutRHv79biYXNbiPXtx/XdzcM7fFzQWzfLzf16+fMDPiEB38zFjap1pwdQzs1feW1m/kQz4fayaUSrZCcGOOmgbOuE7CpRmq7iVaI2VoxOFcKq3ppqLPFx4UXhu5V2g9XbEZ8L6USFW6pKbI9io0oW8g3It2bc7cUPwtTwQcN7phxb1Q2nehl7plhp+qPVu/0gzKFTVoBKsFAPRyHHYW+s/g/t5+VcWjHs5SBg052VsLDb0UveDpkCaicbcUuiz5QYOzwgaa+ELElK0ALMAO96MQZe8Apq5XhrMOhgTVMIaVX40JDSBZ4Gn45dBctK07am85L8i+Kghz3L4Q3n4r2xpEc/2t5AxCSrRocHH828lBkdxYkrfc1LzUHZAtxnwUuohO7490IMRpQSnI7veSn8J7KAFa3s5E6h83BfN5Z7r1ghDntFxwfv076SZOeWOWiMJpBypUETco/b6x4l1boGa/bKlij66vu3f7mm7QyYhw0fBI2DG8Dq6ANwk1UuSASRW9WBEUoNrpxIz/RMLv/DjDNxBWvxNzu7zr0O/9Amj7oaUZYVeXx4AeoJtNUOFQG9W+0cBTzFGScBueUs1DawWwkpCOnVnkZab1WtrIXl9NeaLP4Zt2hNpeFokrIqOFh3ZTOSKSAJRWcG0ehW4+7gR2fq4YDh5WhDcEoF1g+5R4K8GH6hCPlf691o6e/glkZl8HG3/TeEwrnqsjvyM3DH2FB+1Na08MdyLzvQOiQIREXn8E0ZAoqeNP5jLaRg85C4YnpAL+PkmJA2vcaEMqScP+YOIgHOAI8nB87RC076yOjtUA7nbqsqLcVw7PNjfzL28xkoHOAhaUw4hJGWUkB34RgxAdh0/litrABIHqVu5LYJ+Z/hUoFoigFYSh9KMuJCQDcwA7wc4Y0tBS9rMqscBqwtZKGgrRdxBQdQT7LtYWdYCNAOYc4L8c1F3yvY+QmSqTGH62SFG2X1I1jxUQk0iJudRgDucdkG/vReEtsgKL6VDp3XUSpWuAdGP0QPYxVuRe7CXDjsdbnPwACcNUANgMy06lGTKzGKwTQ+T4QCCxsbPoEI7+Y8m7wwrHLKQaSQ9SVsZhpKClimd7qDXc59fo7HAafqSfoX4tR83noYzd53JN5XDataqWN+ql5aihS0Cx2jVVY1R8iD7jMZbgvRgnHSyVZdB6drACJby5KKRJHVyGjUM6XQOsrUyevvEMp9jb/o8dMciCmb7RcN6BMu1NKoBwqb+IRiuPJMJEgybBtaBX9/TvkiS4oBUd/A1k2AbTduATs8eATeQdFFmpN6PhVoI8LxM1oRvEzl7sVqkRMVRGXaHuN9q8CYNZjiefLyddVezOKZZl4W1/sIy7BINZCA1gAYF+iFrWwojg4W13VEPsbOW19gFuRGV8lQaKfBpWQh+7vixVIUsSvfA/4lnQARdYOLG6CUIC0rWZEKuaMbVOtyCIeaOyosISXVSP8Gux8rH7OVyLVyoxcZjEyiILM22g04bjk6qvK0Y0t46WnkJ0K8VJrUUzDC9KwhHuEortflaEYHydtK+xmhzyZ2FCiXcnrXEfZDKKKPyLAXIxHBarYCe0uR5+p8dp7CJ/w6Hjtk4BcpT25AxMf2ZFOxB2W2CuIJKKMiJAel831SEjr15wjx0+C2pQF7c7lGwpulHwPRt3PxC9Iq3PZdPH5gVmIzcnH1sXqxmcnSLEdlBVVSZAYSCCGgM7E44gVADuGUwPB6NYBlQvgB9DXVQSPX6Ez3mjzv4MT48TWwHrvDxskcZTMcX9dWwScNxO7RlAjkZ9Xc93+4Yei2YAXkWI9xfIZ0Cc77cQtrwYoQqH0jIdDjE9CZS62jJ55Y5H1bTvMjFhNZPtvxQjknbGEH/TVz0EeJoPt/4J0rWKb6ARMMWo4hUCRQ0HFDdC16PmvmPaDrIGwvHxWxvKAQ9dGmrpHnQRFQDcAv/xcQxdiBHRNxwBNlzwoJZsLJ0ATso7Cr7PsG203TgdPJyohdXrWykRrsze9mhwMrkpDcuhE3O8he56TVlJ21BfQJHY3SofbliX/lrqENNp3yFRHgDxhJZPW07HRBOBB3uL7agvpM8qbK+S0O6IpQ6+ZiWaP/Yy/kAKkwpqNTBr1jFeRO4p8J5HzjfpUKVuTW1jj3mgyGxyjNiPyJP4PnpWjkwY16wKM2asdFACwWlE+c4AQVXwI4qgmsuPOtdpJTJuccw7GCP1piqiCGqdg0EgNlCs2oz5TQaKQc8yUvsCquDpii6L0QK9IFwlbBwxB80bogDfvEiqHgu7lYq3wyNKetW3lMyHaKQoCDOnCbCR69wPLIJUgbYbMRQI7iCBkN/N/Eijxtm7mEP4NkRWqFyCAptFql2Mu1aaAn4voesOvHUGev5DWfdIRI26G+qB73G+BWDUdE0Mqpb+wO8efsoJLqw2kn8ROV0bDnNtuTBzeJSmMfhf07D3UshhC0D7rDOOHu0WXbI8TFkEaZ2LrvyBiK5Ux3LrOdrRogwYrAm7MWnroD0Oj0cNnGccMUEAVmWKqOhY/uAmGxUsibioxMUIgOKd382XgEcUGfU0jFn8TcGD2DDFKuMkRoocrgMdGcnHF2SIWLT3JeqqdGq64RtKL/feOHrp6t7u6X725nkHxPA9kb087vgZQ72yfPrgwCLmTKmWXJX5mo0HpK8KGsqMdMQacumhVBSeKcNxPjQY2QgQ9CRyi+xq6ZmMsWvmhXCjaQ0SjpsJ3Kp/R+ScpWIEaw6Y9BTRl0TLZOFppElXtRh59yMJ8EWZ7X0wGU0HXCGSyZu1QBz+UbW5xbWQaul025fG9wwUr1SaYQgYAOkJ0FAm31Gg95jL7pcD4HDTMSCyWhCb3fcxeG+HVu5szfRB64lY5DPughUvOKDGWqjs8tQqzjZDYfy4asKvzdYr+TR2QmJajuLfQ1mVCw9R04Ij8T9VM43qgq1VVjG2jrJGICsHD/F9x5imlk4DDEADNcTCaaVkHPxDzAjqfxx4Z57t7ioolSV0G0lYb1TABOBl+ZK1CIP0euMo7kNLLWCcu9wODTaO/ClRGLye6KTH1BmyKlTU3N4vGZViSfzsVUInm4dTbNSwqc3VZNqnBk3ThLJiqNcTQZy8RO5aQTmDjke2p2/E0A96qJBbq5eOigijpymnqCjUqN7S9JzC5I4nzjeMois2FWNsZ6dnSVmD7ueDrIYaq3zafP/0tr5mkWqZkFDItg6lqF20devzIDLoq3N1RftoabMkzbHbV3WEZINTdCOXCqUnwRhGmQucRvxOyCB6RgxdgS7aCno8A/+gyhjkw9qTKDeALeaBCrdtLyvdJp7+HvAv4GUBgIiENYzHh0ZQg5B6bc2Y0QGt5fqDF9CdcYssW5WWQ0OPVS9hFn+v4j6ORjmF8OQRs0DpGS2lSr/hy1vz3Cgu7AJ1jSyaVQ+E2L19OoDVgZeEcJB/SuiE0HTmrP5rMhm4LffDW4UALYUn+fixvtqHXCS9tafAL+CXY5xiSIqm6P3MBS540tVoIB8iI1L2kKViSH+dx3SdUr1BWHBqctav42ji8nzr3GuRZA/myxEcvNTPy82Cw3wbiflve/3j3ci0+L9Xqxul/ebsTdOr+Wv3svFqs/xD+XqxugO5pvgJ9wOurSSTThSpWNSVMG0ZxUBpw6QpNLpqKGyJ5DLBjzfnn/4bYAq69eL1fv18vVL7e/367uC/H77frdr6Dl4uflh+X9HxRC75f3q9sNf31g4WV8XKzBYQ8fFmvx8WH98W5zy9WWbwsbvFkA/XvYVNOtA93McFc4DRfwnDW91UjP6cA1RBe+QvGXEDebl/K00TngRHjcANfaEbI7U+rYJjOo+3tWmsbmF63nzSzH3j/m8DmYFBd90HKrG7o8X2LlFUB/uoH0YBnwqKFhJ+gInXY2agk3WRBAQz4y6NSu0cC+SnVdxNvuYjLKjZOfL8b7FRMFnOk3ekuEjpTb4Twi3luELQf8BoKj2/HL+cHoOSkfOJQJLms0bewnAuRa2crddIaPq8NXAtKXA1yv8G49u32GhAJiy1cJSGB4posXcl5oQGicuYHeOK62fGeOVTzWarw1Pm10yZpjxJiRn+jOOzPD1XxicPXinXjQCo/dGA7YnTHVQTf57PAzFGXT9xKnhMgJRlS8lroZLVcj2dRjl8gNFcEL3wTBWwAM3twevLFyEDgYh0jQTwdxXkYcpsvqUdMlae2/vgEZ4I0QvtzgxXMG/DAXixJrAlohIC/uvEiFOkuKT3uk7tN0Pb0sfPG6LbDQcm8MT0Fp0jm5bKeZK/C2WhGeANSRhrIrFR+i5zGoR78jxZ1qO/xqSRqIsVmboLsw28ZPoYi3vEHYQebLVy1wHswX31/pgKCxwfjVHLAT4lYyGozsmQlO56NvtHRNdhsSObe/FqEhrn+MQJpglPQlppNuURKip0lRFgZ+Jow9k64ZnzHhOd/JNnW0TaVqaFd4BTDj6sLoXNqWkCiQ62jFlM6jtem2zE+OAZOhK8dmlYeoxfnceHv0ZCMd6IgWSDaNZP6QRWNGG6MuHMC3qxusq5e+Bvfqv1BLBwiwt6Me6Q0AAL4nAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAABQACQBNRVRBLUlORi9NQU5JRkVTVC5NRlVUBQABAAAAAHWOQQrCMBBF94HcIQdwgrrsLliRQlsEtbqN6bQG0jQkQa9vahUEcTvz/v+vklZ3GCI06IMebcZWfElJMTiDA9ooYzrCUUeDGdt52RpkZy+dQ/9DNWjb0X+wBSus4n8gKNqMjb7n/Yul5LDPL1BqhTZgeiZcdxpTmXBS3RDWk1UltYWNkSF8h/lj9uHz7ttuYinZWnk1CHXaviMIpXDKirKEU12LaptTQskTUEsHCASaCKSqAAAABAEAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAMQAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lQXJndW1lbnRFeGNlcHRpb24uY2xhc3NVVAUAAQAAAABNTk1Lw0AQnW1rW2M9KHjxuCe1TQPWQqwiSNFTTy1432wm6drdTdgkpSAW/EmeBA/+AH+UOAFFZ+DB+5jHfH69fwDABewzeNlu5+ETj4RcoY35hMuED7jMTK60KFVmfZPFSLpDjaJAMpei8OUS5aqoTMEnidAFDnie+kbkvqo7cHx+GUUjyrrw9z6ptCZhja6gVhLC4Xg4GvPnLjAG3iKrnMR7pZFBP3NpkDoRawykVsE0M0bYeKYs3rq0MmjLu43EvH6vAy0Gx49iLQItbBrMK1sqg//8NoP2tbKqvGFwdDL7iy5Kp2x6dfrQgy7setABj0FrSu/CAewQrYfRkkvYI3YIDVqA9ln/DfZefxJNwgY0vwFQSwcISfuT7BQBAABXAQAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAmAAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVPcHRpb24uY2xhc3NVVAUAAQAAAABlUttOU0EUXUNLD20Pl5aL4AXxeKGFlipQLWB8IV5IChhLIBhfpucM7cC5NOeCGiOJn+EX+KwRCZoYn/0Of8IXcZ+DSAkvM3vvWXutPWvm55+v3wHMYoHh3d7es8obrc71HWEb2rymb2kFTXesljS5Lx27aDmGoLorTME9QYdN7hX1ptB3vMDytPktbnqioLUaRYu3ijLkEOXpuXp9hrBu5aR/KzBNKuwK1yNWKlSmylMzZe1tFxhDquYEri4eSVMwjDluo9RwuWGKkm7K0qJjWdw2qtIWq61wJgVxhr5tvstLJrcbpdX6ttB9BQkGxYkQHkN/NQIEvjRLT7jXrAmf7qtytxFYwvbXXrdIKlM9ZVk0uecRJG0IT3dlxMOQbUPUfFfaDYIkG64TtDak32RI3Je29B+QYK5NsSo9fyG/zhDL5ddV9CKTgoIsKZ6bSsFACoPIquhCMolOXGDoORVdd6ShYIQhvrb59KGKS0gncRGXVaTCqBOjKnqOG8do3NPGJV+4vG4KBRpDlwwz33EZhnL5tkGX/tUXVNzAzTSu49YJy5lzBTlyl95+Rbzyo2s9VzGByTTyKNBwdlQeOOFuexdinkIpxN0+82rHbiqYJjZuGAyDufO9ocosyqFBd0llkT4TQ3fNp/+6zFtr4f0YesOvsRJYdeFGFWTIDIW+eJwiMpUiFroV7Sq6ac+EnkU5taOP1gplL5FAjPbHkxObLw7Q/w2DmwcY2sfwJ1zZx9X/+bVDjDNUJw9RZHiPkQmK7jD8wMzyZwwXvuDexoejXx+JqgNztGbRcYRxdCjoVMgI/MYo5qmeIOF4NEQswsb+AlBLBwj97JNocgIAAJwDAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAADMACQBvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRBZnRlck9wdGlvbnMuY2xhc3NVVAUAAQAAAACVU11PE0EUPdMWli6lpSL4rbiCtoWyidikgDGpJD41YEQx8GJmd6dlYXe2md2ixEji//EBE5REE3+AP8p4+4HW0qRxJ5m5e+fcc8/cufPz17cfAB6hwPDx+PhF+b1hcftASMdYNeyasWjYgd9wPR65gSz6gSPIr4QneChoc4+HRXtP2Adh0w+N1Rr3QrFoNOpFnzeKbotDlB6uWNYyYVX5PL7W9DxyHAoVEis5ykulpeWS8WEMjEHfCprKFs9cTzAUA1U364o7njBtzzXXA9/n0qm6UjznKhRqrlKLhNpstPSFGhIMi0NDOstWxCOhYZRh3P4LYTCqfQRtuNNDs8Yw+tiVbvSEYT43HJ7fZojn8tsp6Ejp0DCRwhiSSYwgwzDp8yNLkBoVdY7BMJ2r7vNDbnpc1s2tSLmyvpbfZZgI5D+43QG4AZH9Ci9WpEPYUxc64srQqFfyQAZv5YVgDdMMYpC2oaUaLrVXZKekV3TM4CpdYyA3Anlem6eDavh/9AyzwwRruMmQFu8ixSuq3vSFjEK6v07qZuR6ZkUpflR1w2gthdu4k8QtzDJMDQBoMKhPuOP0NcCmtS/siBoghTnM67iH+wyJdXpLDJmWiI2mbwn1klueQJaaSqMXzciiHiMrQbaOcZpz9GcgRgPQCztnSC98weTnNjpP8yitsXZkFpe6+HTbB8Tin9D6spjC5e7eDcoVpzXzHTM7hVNMLrwpnOHaSRd4nQAdYIFgLZJ0YYdQp7i78BUPXp/8SazT7gjZyXb6FmUM8d9QSwcIEDyAZkkCAACbBAAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAA8AAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQmVmb3JlRmlyc3RTdWJDb21tYW5kLmNsYXNzVVQFAAEAAAAAtVVtb9NWFH5u29WpSYGmFPbGCF4gaRI3rCV9Cy9ry9sgbYEMqlRI1Y1zm7h17Mh26KZplfYz9n0/gE2slRYJ+DZpPwo4tsNom1LzBUW2c899zrnPPfc55/73+p8XAC7jAcNv29sPp39RKlzbFGZVmVW0dSWraFajqRvc1S1TbVhVQXZbGII7gibr3FG1utA2nVbDUWbXueGIrNKsqQ3eVHUvhsiPz1QqE4S1p9/5r7cMgwxPhe1QVDJMj+XHJvLKrxEwBrlktWxN3NINwTBp2bVczeZVQ+Q0Q88tWI0GN6tF3RT3ue0IOzEv1i2b0LbjllqVzryEPoapUN/lpretuS1udywll7tCQj9Dv1vXncQlBqUYFqZA6Cu6qbvXGG6nwuEHEb65ugdXGH0cRQQDA/gM0ShkHJMh4TjDoGUSQ9sNeDOspoob/CnPGdys5UqurZu1QrdlNJRSJxF7ckB7Uj/SK1hFQowh+XF8Hnt7OiVjGCMM8bBlJJxhOGH5aznzPwdBGIaDwC1XN3J3uFNf5M1CFF/gywF8jq8YhrqmJZxl6K0Jl+HiXqLLlQ2huZSmLlMU5xCX8Q3OH8kzyIOEb4kVNwxr65G5aVpbZmB3GNhqFBdw0WOWZJgJTew+/33KHGU4pr3HHyLPbjVFkUF2gBSkMojDTig0QriA9konON+cjDSofjIf9p2za62GMN2bP2mik8JxhjMHCc63dKPq6eAyw9lOauKdJKgGxYkH4ognI5hkGDlkiwGlaRl5zFC18maTOhxJPEQG+9anPBZwxQtxlaEnORbB9QMR/q+3oyLMeRHmGSKu9U7Kp1LdLoS9gZse9paMCY91eDu79wHR/MDwR3hf2lfORx15gPtEsrkn4y6KDH0LdFdQ3XvgpVajIuwfecW7EQYJrW1SOftjDFGPlOgGYyeHvJZJ/3rAvJZJ7yUaJdBLPyCaLmf+xmAmu4sTf3p4LNO7n7699AzhJD2Bx18Up4++9XQbw+Ulz+P0cww+x9fZHSivkCgv/ourad+U+h2xNtJlGo1l1tK7+O5ZGxPlNvLlJ+pabGoXszu4thL7fgcLKzu4vYs7L9u46+OLajZDHovPfM736R1HzxtM+otL1Bzxhix9kr/BhG/wOccIcJy4xsjrPLFP0pj5e+xB71tQSwcIO/HSvGUDAADQBwAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAA9AAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkS25vd25PcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAJVWaXcTVRh+bpsybRiRtIBUQcYIts3SKgiWskipqNi0RYvUYBWmyW06dDITZyYtdUFx3/cNF9zB/agnTY9yjvrJD37XP6Af/AGe43LQ+t6ZSYlNtfRDMnfufe9zn/d5lzvf//3V1wAux6cMR48cuaH9jvCQmhrlRjrcEU4Nh2PhlJnNabrqaKYRz5ppTvMW17lqc1ocUe14aoSnRu181g53DKu6zWPhXCaeVXNxTWDwjes3Dw1tIFurvbR/OK/rNDHGLZtQaaK9dWPrho3hu2rBGIL9Zt5K8as1nTNcYVqZtoylpnXeltK1ti4zm1WNdEIz+B7Vsrm1ttswx42+nODnzfQ7qsMlBBjWz7t5jn2LGGTTne53LM3IMLQlzhLH27CFYZEHwBD+n63eHrJenDozOccW94h02UbaUmMLsgyt81Mrc04wG1P1PLcZlicOqWNqW97R9LZOy1InEprtCIOtmqE52xnebV6g2/O7Or9nC3OnZR9DdXPLPhn1WBaEhOUMDXO4JeG8IFZiuYylCNWhBufLqEWdGK2SEcRiMbpQhoxzxEiRsQTnilGYstE0Oq1MPssNh2Fns6earhqZNt/tloWGQJlPJwmXUA6q/ql7J3IU6FDZwV26attbZDSjpQ5NiDAsObO4z9TSEmIMgb3JPbtktAqjONoYls6mLuEyirfOjYwz4gq5W8YGXB7EemykdzWdpjQp97hv6BBPOVta9su4Au1C0s2uQORBTuciHy9tXqAcMrZga5Ck3sYQ/e+dpRDsOpzivkZXMpw326OdeU1Pc0tCJ0N7p6HwbM6ZUEpKKuOqreQsc0xL87QybFqKX3hxnY5QvJpVmmrRNcvvUqTdRNsVxE5cTcKpuRy1SYb4XBJV7PapkcPXYreAuI6hqqm1FolZCDNp9X8IvQKhj6HWMUtdallz5RayvR43CNv+IHYI1su75naZKmlVk5I2ua0YpqM46ihXVGNGOuJ5E6WZqHXVcnr5YYciwiBp9i4hsZs9lBU3Y1BkxS0Mm+bNgh7Ntomil/KE5rffA9Tzz7rz/LsZiOioQRzEEFHNcOda1S7ljZCAmsPiNLdTluY35/q59BpGRhQVFUR8Qe1PwiG6cHrNhWebTlFpUsY1Z0Qpo9chlogko0dONCmiNQqrsn1UNFEJ1KnqqHr7fD9vnSO95m/WFYVccZBvKGMM40HkcZiajq3dzmXcLrrIStzBcMnZgUi4qw5HcH6plbn922vd9zB09OR1R6MWMyOurYxzi5+VvPdSlWgOt1THJPVWlKrEPWG3P08+3I8HBOUHKS0q1yU8TMlOHzsi82U8isHFeASPkb8GTcyuPb8HyHgCTwq7pygcGcvM5wY00WgbyghQio70c2H7DJ4VefcctfqKZQkvBPGi4LZ09ikSXib/KNndS4HA/8WkdFO8gleDOIbXyAlPGFvGce/AN0jynMVtErWvtPSWWMrjbWpyFs+aYxTRd0W/fxHvkbU3lZ6xPulZvy/W6T4IdNFHHsO5Iri9+ewQt/aqQ+JT7hyq09Roj5pz3xGipi/Rp2cNjegyplFIXMXuky5i90nXsPuka9u1pOCggf4/ordttLuGnusiycHBKaw4hZXJ7ik0RiZxQXQSq2OTWBOfxEWNgUlc/DkZMnxM/4voGaBfCGuxzoc6TgSq6GlEClhTQPQLXPoetkeL2HQMoUiyQIBFdAwUsf2zU9iRJKvV3aewMzkYOVB/1RSuKaJ7oL6niD1ksncKN35TYTVQskqWWdGJVfjE5VT1J8LrXH71LjvBsYocrCYJAsR1P7b6XHtpjrlul3FdQS8XFHHrMcincDAZmULqs4igO3MEbVJc/CU0FCdItCDGIaQx6GNvpTmB3VCOLQVOIlD98QySJMiGdnhqBmmyhBYSV7mHVFVDgaTgsBvLkYZmWN4USZJE3aRQgtaFSD1T4AVoyd7vUBeLC5EiyRjp5CnYE4klo7H6bElF01Nxz0D9bWV6EvxFIlqrC7AFbvRAERPJhHfqndsKuJseqw4GKJd9WvVHT2DRSbRUxOu+uaLqAT3UE/sSjzMqp8YojZ5m+Jb6PoHHRY6cnP7Zw36+iJcSUd8yEYn6lk09RLJXePj6QAFvklEJbvqH+AxcR6CAdxoDRZw4Nv1TvIAPxPhDAv+RwC8+E9XtqJtGB6pr0ShhVKJLDtO4DMytjM2nsU7CkdOQJDzyBy48jSAN/sJa+peQ/x0xN4T7saIi4dbS/hil5Saa6aTiyFN9TlCwH6OwPknV+SrV53GyPEH1+QtV568U/N8odf9EA1uFZWwNXbbXu7jVLtfqfwBQSwcIv1X2/coGAABnDgAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAA8AAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkTWlzc2luZ09wdGlvbkFyZ1N0YXRlLmNsYXNzVVQFAAEAAAAAnZNdb9MwFIZft1vTZilrCwXG1yBs0O+ifUDZEIhNcFU2RNEQu3NTtwtLnCpJJyHEJP4PF0yCInHBD+BHIU6yFG2o0thiyXac532Pc3z86/ePnwCWUGH4tL//qvFBb3NjV8iOvqIbXb2iG47dNy3um46s2k5H0LorLME9QR93uFc1doSx6w1sT1/pcssTFb3fq9q8XzUDD7G88LDdXiTWbYz03YFl0cKecD1ypYVGbbm2uKx/TIIxqC1n4BriuWkJhvuO26v3XN6xRN2wzPq6Y9tcdpqmFC+56wl37oXpeabsbfaDHT51ey2f+0LBBEPlRO3hECkSDAkndGFYap6oPQx4xGGV9I9MafqPGR4UzmJQ3GKIF4pbGlRoKhSkNSSRSmES0wwZm79vCyJdfzPaZr7QfMf3eN3isldv+S7lYbW4zaAUnnjFaq2cxHnS/YsoyBNic59OztNwCTkVF3GZIe3IY/bbY+zHBDxbrhZOr1JwjcrDkYT2LeFTedwr/Ef0o3E13MCsiuu4qeEKrgZJ1hmmHLnhyNFvr43L6unChNukYhzYQvoa7mA+iHmXDiPc/Uj5THYYJtbpVjBMBwsbA7st3Ne8bQlk6dgVupuMZlQFNJukuYop6kv0piNGDVBLb7/jXPkbMgchXaY+QWMsVGaRi/jZiFfKuQtDzHw+BrMQpoxE8Azi1IB06SsyQ9wqV4a4/QXBk8Uc5iMsH3mmAqw8RGGEFKH9RQLvCCGnNwchwkL7GOJ/AFBLBwjl/hawOAIAAIIEAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAAD0ACQBvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25Bd2FyZVBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAhVPpThNRFP4uBaYtZSmbIC44gnalCFTKIqQSNCa1EGgk9Q+5nV7KwCzNnSlCjCS+jz/UsCSa+AA+lPEMBWVLOpPc5ZzvfGe9v//8+AVgCosMnw8P1zIf1RLXdoVVVmdVbUtNqJptVnWDu7ptJU27LEguhSG4I0i5zZ2kti20XadmOursFjcckVCrlaTJq0nd4xDpiZlSaZKwMnNhv1UzDBLsCekQKwkyY+mxybT6yQ/GEFy3a1ITr3RDMEzbspKqSF42REoz9NSSbZrcKud0S6xy6Qg5slL1Qst+4PJcsu5yVyhoZkg0NL5i0crQpv2HMKi5awRn8PIlmjmGVndbd0bGb0HfcOeh53VLdxcYXkcawxu7j74LIYi2AFrQweCLePcQuoJQEA7Bj4Cn6WHoMvlBSVCe0q3Xi6EvktvhezxlcKuSWnelblXmou8ZlMiiE02Oxf24Q3bXIQoGCWJyl7ruhDCE/iDu4h5VzrbytnVB/vI28oYJX24H1Wq4UfoKhhk6xL4reVZWaqawXIcSq7uuubqRykrJD3K6486FoOJxAI8wwtBzC0DBEyogL5evVWaltCM0lyoTQgTRIJ4idjOyG5koSJCbldXCm5X8Zj77dnlzNVsoLK/lGQYvhSdFRexTXq4rpEUhjiEVQBLjVwpfj0DBBIO/ItwlgzuUZU8keinKMyERTCEdxCSeMyQbFju7RV7rDXMUZBhGb4zk7QMXwmwQM6AONS/Rg2bo9FT5mlkSssBLhqCn10ITCDQh7A0h0BX2xpQkPjCyb6f1Bd2G0EwSoDNWLMaP0XmK7sQxer/B+8LoQ/858CFRNdGuxLsHTnD/Cx0ZFmhtpd37w3hAoDo4R5weeCRWPELvEUbjJ4hvHKHzO55tnGB64ydmijFSnWL+6z+mfoq5hc4Bsm0nhl6KbeBM4jvLxPcXUEsHCJynk12+AgAAKwUAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAOAAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAlVBNS8NAEJ21X1q19fPoJXio0jaiFqoVQQviobRixYO3TTpNt91swmYjgljwJ3kSPPgD/FHiJCL1Ju5hZuftvDdv5+Pz7R0ADmGTwfN0et18tBzuTlANrGPLHVpVyw38UEhuRKBqfjBAwjVK5BHS44hHNXeE7iSK/cg6HnIZYdUKvZrPw5pINLCxf+Q4B9Srmz/8YSwlAfeoI1IloFlv1A8a1tM8MAbFfhBrFy+ERAb7gfZsT/OBRNuVwm4Hvs/VoCMUXnEdod7uhYm176JvuMECZBmsjPk9tyVXnt1zxuiaAuQZ5E+EEuaUQaayc7sE87BQhAIUGZQCRVxtuvhgzrTHYK+y0/lz9K+hLfIdKKLGPirD4LzSmTnoGy2U1/q3YslDc8mjmSrZvksHETOUaGhB2TbtlEE5EenGvoP6hjsSaQU5+lpycsCSn1Jcp2qLMkvQ3VdYfKELgw2K+RRmRFuCZUg2WIJymldgNc1rCU49GYpzkPkCUEsHCHTbTIB3AQAAOQIAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAMwAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblN0cmluZy5jbGFzc1VUBQABAAAAAHVSW28SQRT+BhAoLlKgFa2X6rbKpSwkVhJsjQ828alaI6YGX8zsMl223Vtml74Ym/gz/AW+atLSRBN/gD9KPcslXsBM9uyZ71zmm+/M9x9fvgG4jwbD+5OTF+23qs6NI+H21C3VOFDrquE5vmXz0PJczfF6gnApbMEDQcE+DzSjL4yjYOAE6tYBtwNRV31Tc7ivWVEP0br3QNc3KVe2p/UHA9sm4FjIgLoS0G60Gpst9V0ajCHT8QbSEE8sWzBonjSbpuQ9WzQN22rueI7D3d6u5YrnXAZCru/5EbVOKC3XTCHBsHjIj3nT5q7Z3NMPhRGmkGSIc2kyFHZ/B8cl2wxJb9SCnIeWa4WPGMqV2bxZpLpPbSvVfQUXkc0ghUsK0lhYwAUsKsiMvQJDOvTGFQxLleo8BjFNS+PyX9SnF7pCggQhl2Hwygr7DMtzqFVfK1jBtQyu4jpD6d/444Fl94RM4eZ/ykc3uJXBKm6TCNz3afwk/bzUGWjSfFvBGtajFncULGE58soMjO5VZUjs0OAZctHYng0cXciXXI/Gm+2E9Nqecn+0R54ES9FzjJFHSpKXj3QcIYw4KmQ3aFdGnBaQq3W758htnCFfP0PxM0EMdbJJ+sfpy0dcJkUGEuQB7dop8oXSEDc+YOUrVru1N4XSOdRTFIe4O0TlI0oTuPYn/GlEQyObRWztJ4rRaSnSfHrgeMVHafFfUEsHCA6K3lYYAgAAWQMAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAMgAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJFBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAhVFNSwMxEJ3YT2ur9evoZfFQpe2CWqhVPCh6KlWsePCW3Z1uU7NJyW4FEQv+JE+CB3+AP0qc3VKtUDCQmczLm5fMzOfX+wcAHMAmg5fx+Lr5ZDncvUflWS3L7VlVy9XBUEgeCa1qgfaQcIMSeYh02edhze2jex+OgtBq9bgMsWoN/VrAhzURa2Bj79Bx9olrmtP83khKAh7QhKRKQLPeqO83rOc8MAaFrh4ZFy+ERAZVbXzbN9yTaLtS2Gc6CLjy2kLhFTchmu2J60Y8whykGZQH/IHbkivfvnQG6EY5yDLIHgslohMGqcrObRHysFiAHBSIHvBHByndRJfDuEgGm5X2r0Y3MkL5Rzt3DEpa/eHdzeHNyWz/W8JEcKaQIwZLWnW0mj51Ou9L/wv/lSxrNUM5Vx6D9BlNhMFKDHRGgYPmhjsSqY0Zak+8MsDibpFdp2iLPIvR3TdYeqUDgw2y2QRmlFaEEsRTWIaVxJdhNWGt/UiUkpj2a6JPEyG7AKlvUEsHCOsmSnSAAQAAigIAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAPwAJAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJFVua25vd25PcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAJVTbU8TQRB+lraUlrNYypsKiidqW9oeAYm8GBMkMSY2YEQxEBOzvdseB/fS7F1RYyTx//gBk4KJH/wB/ijj3FGgQZKGXG5nbmaeZ56dvf3z99dvAI8ww/Dt4OD1whe1xvU94RrqkqrX1ZKqe07DsnlgeW7Z8QxBcSlswX1ByR3ul/Udoe/5TcdXl+rc9kVJbZhlhzfKVsgh5mcXa7U5qpULp/h607YpsC+kT6wUWKjMV+bm1a99YAzpDa8pdfHcsgXDoidNzZTcsIWm25a26jkOd42q5YpXXPpCTr1191zvo7veCBWexDYCHogk4gyzXeGX4HoZEn7oMlSqXQk6oMsMMS5NhsHqLt/nms1dU9sIpOWalOrXz7EM6kXmiMfo4CdI7xPLtYKnDCL/P2N3gquJL2yS/HxhU0EG19NIIqsgjf4UEsgpUHAt9IYV9CEVeqMMGVMEL7i/Is2mI9wggm9T2HOJUQZr4lOwEo5jJl+46hzTnkslDVsEQsEExtPU8XYUPu/27JKhXLnRZLcpJqHSlmgrkp+29hmGT1o3A8vWVqTkn6uWHywrmML9FO7hAUPukoIk8uEvYhhE0Cl+vbYr9GC5sK2giOk0CigxxFfptjAMhCLWmk5NyDe8ZgtkaRRJurMx8ugsyMuG5xRZOiWyCZBiDNBaoa9pxOkBcsWt9z8xOH2EodIRRspHGPtBYQaN1l6yMXqzuIGbbWCGLCPbE/8ORPS3MN7OZdu5RPEYdw7b6Unc7Uj3XExPnKEfR72A0eLWVgsjL1sYKrbw8MMxyu9aGDs8k5Whwn7yB4gtF4FioSDE/gFQSwcIrxaYlmgCAAC4BAAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAmAAkAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIuY2xhc3NVVAUAAQAAAAB9VVt3E1UU/g5JmTQEoSkXg0XSCCZNm0YpldJyC6FIpU0qLdRAMZ5MTpOhk5kwM6GtXBT0D/gmPPrCi2t5AVOUtdBnX3zyF/g7tO4zaUqvdK1OztnznW/v/e199vz5328vARzDVwwP7t+/PHAnUuDqrDCKkcGIOhPpiahmparp3NFMI1Exi4LsltAFtwW9LHM7oZaFOmvXKnZkcIbrtuiJVEuJCq8mNMkh+o+eKBT6CGsNNM/P1HSdDLeFZRMrGQZ6+3v7+iP3fGAM/gmzZqnigqYLhrBplZIlixd1kVR1LZk2KxVuFEc1Q4xzyxaWAi/D7pv8Nk/q3Cgls4WbQnUUbGdoz45PjmQz+UxqbDg/npqcHL6cYQiNuuCao+lJS5TEfHKcO46wjCE6cZjbxClztc9rNi/oosjArjHsMquu9dzChGNpRomwq3gucrs8xquSgeu6OXfFmDXMOSPbOMOw/aRmaM5pBk+s62oAu7DbDwVtDG0bOBS0+7EHbQEEsLMVLdjH4DtJqTcIdr3KNK1TsApCDPuKwtYsUUw1g59wuFOzXXfXAngLHX4cwMEA/NghKQ8xdMSmz9ydrt5J6Uatcu/6yiqRvxHv8qGTYf8WMil4h0FpdAUVKBEbfRVSQ5uhri0lDuAI3vXjMKIB+NAqg+kieRriMhyPXd+MbeseaChMuu9QTcPhmmFfEgsMe1cH1eiIIalEAr1S3CTVNOHD+2sap+FNQR91oO1wy7GnNKe8jqsZEnH14wM/3ZvjJEaFO3QJLIa+1dh0mVsT4lZNGKrYRJKxxiGS5AQGpSRDm2i+DFJwasWNHcAZWdDTOMsQeeVuRNdFiespq1SrCMMZnleFK46Cc03iVSmcq2l6URKfp55Nc8MwnTAvFsONSoSjPlzYInW3fy/6MYwRqhyvVmlWvLYNNnqlnC9hVFKMMVyIhrkd5kbTtSqXhr4QXq5omOvVMqfeFJamhlUSlavUSzZNhnA0EXV/8tFeH7J0URyzeT33xDa6J78f47L0O+FHWsZ/ZKNzqYRb//Ac1V+6IO6rxJ1dkeYTkiYa1uigbgleXAgXxQw1Y5GANCraN+lhBdOvnWXZ5VJ92mxJtwdSlsUX6Ip/JoW2RzXboYjXXJFmb6/qLgmjRAtQ/eCg0rTH1r9t1HDGjzxIKcVsjqn1I21CSCYNN1sJObthWtFrBRVSRqN6cMekC7AvtjqUkWU7kZio+mHgFkNw43sF5Fyhb0lGzDsB1NCxAw5uM3gNMqyv5XLOAcxjQeI+pzlXrRFsYJNbv6VWa6nu4p4cDPfJZZq+UQw7aYSqszSPJ+VHgOaurFKmVikIy7WgjUaXQl9OL0JykgG7Q3K8kqVNTm76ZXjD3XtoRROfnl/S7m13DwTjuUUEX2BP7tIi9sZ/wf6fIP98eHMFewjbXGx7sKWOt70PnyIcjDxH7CniDfA36EZPA8yO09EWsv3d/fKU5/TBju/wbbz74NFB7zPsD3nreO8xRMgbPFrHwGOc+BlxaTxZR+oRWr/2sCdLf71AOvcCw7npkDcf/HARH9WRmQqOy2cdk4u48vvmiKmtELkm4voaRD6XG+t+DrGI8jPodVij3b9ijuERDsRpdYfhDxzLUNiJnjq+mHqy9E/Pj5TYNjyg51ko/6KFsSX0uelSEY4BnZ1L6MQ2BS0KbgBLaIfH3VCH5uX+EMkOd42H9O8ntu9JuB9chT0uu+d/UEsHCPercTYLBQAADAkAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAJgAJAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzVVQFAAEAAAAAlVVdVxtlEH5eEroQUlrSQqEVSdPKRz6I5aNSmlb56CchVKhgKrZusi9hYbOb7m6wWNtT/4D3+gd6i+cgKXKO1hsvPP4BL/0ZXmicd7NpQ5NzVHLYmUxm5n1mnnlnf/37hx8BjOEJw1dPny5OPA5l5Owm15XQZCi7FoqGska+oGqyrRp6LG8onOwm17hscfpxXbZi2XWe3bSKeSs0uSZrFo+GCrlYXi7EVJGDj49cymRGydecqMavFTWNDFvctCgrGSaGx4dHx0NPWsAYfEtG0czy66rGGYKGmYvnTFnReDyrqfE7smlxZcbI52VdSao6l+BlOL4hb8lxTdZz8YXMBs/aEo4wHDMKArU1vb1km6qeYziRdByLtqrFb8rW+rxcuMzQXjC5xXV7oeJe77bEbeFm8ryxxZVXbu38kW3KU2aumKdoMnTWxE2ZprydVC0ReSSh6qp9laFrsEHmoWUGz+DQsh/H0OGDhABDRx1OCSd96ETAjxa0tqIZp+q8KJmEHh9OCy8f2oTXW374K9rbVFcDeBKCPpwVEUfRLvzOMbSoNjdl2zAF4qEayLdc+2U/3kG/OGmAIVD/u4QhBomGI0Utcqq750cE0TaEEWPw6o75ZDV3DXGUOY53hd+FevJraK+QIGGUof/fRqTqO+7DRdFcyZ0LPyZEa8Zw6dAEVYZFAhHnKRQJ58RgPcx6S8NaruCqYO19Bv/DomHzKV25bag6w0jtJExlLBqkrD1jaBrFEbZD2SqACM6pN23TRVVTOLV7xodZUVrgtYfDRUajC3K9DTcEUU3RYAtu0TjKhQJdcIbYYP0p9Qe7h1A1c0iKc+YZ2EALFmhQbKN6tQ6T6Sbz40MsipAlP6Yw7aPx+oih1e3/JMFZoVvTCIVzG9Ii9B5VFQ0evmoictWxH76Twn6fCqwcwJBoWOB/mxdBf44T/f0N6G9IdgZZQTY1NlRDA1Gak7Uq9GuPstwdxzXqX+WoIHVznfbJQFA37KDC1wiEMtyCDR9yov5WWXErZLjfoKQ3K6qv5X8UXbNUKpVZEgxn+z0sqiZPGXqK1rcfD0W1BdCOOPo6wllBthgxRZnSNIae2jmvnW9aCFv4vA1FPKKFMEMvBkq0ZNO7h5bdXTG4tMAFsFQxn+GmY0EHDZBErysvabQGSesQi86RflfSGiPZDArHcXp+Qd9+pqhmks8i4XR6tYQTB+hMJ0voinyP7gOcFvoZ0ntr9L4DnBV6iPTzexhMRvYxzPANrpAywvASYwe4mJ4v4b1dTJJDKlZxKP8ejrkeiUnvLrp7vNE9fLDyvPzHd4ShCY/p2QdPGQk0ES6Jlh3+QlDCRVLLtIzF35f07yPnZSohTbJVXCC3nK+pAR6S8+EDzKbnSrjmTezjJsN81MV44Uy0CiH5LXzhwO09pFao+MAdoUTEo6J6Es/Lv4X3cHfnFbZzAlsHPBJmmQOujF7nm4SE8/1PdDv4jhAe8ekQ19zFtkQ0eEneoMN20fsCy3O7OE8iuYs+EvMCcjoVjaUjsXQ4Fvi4hE8cNJ+Kp6M9qGouKsHqZ5DdAxaJ+SaSo2FqLRXCXxILc7+gObxzgFxapF+NPAio1bybbqYStJ8ojDklHgUrI0B5qCQnfx66mz9BrRXNDdbkfwGLnmTojRLX+9huwsqOk6xKUxfpPSSZE9sEzz9QSwcInq78NesEAABZCQAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAsAAkAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmVPcHRpb24uY2xhc3NVVAUAAQAAAABtUF1LAkEUPdOaq5vlV732MA9R4rqQCWYRhNBLglEQ+Djujjo6uyszu0JEQj+phxAK+gH9qGgUeuvlcu455x7uvd8/H18AzrBP8Lpc3ref6ZD5Mx4FtEP9Ea1TPw7nQrJExJEbxgE3vOKSM82NOGHa9Sfcn+k01LQzYlLzOp2P3ZDNXbHO4K3T8+Gwabyq/Tc/SqU0xIIrbVIN0W60Gs0WfcmBEDgPcap8fiMkJziK1dgbKxZI7vlSeHdMaR504zBkUdATEe/P15vZyBCUpmzBPMmisdcfTrmf2MgSZBdMplwTHPQ2epoI6V0rxZ56QicXxnApIpFcEVjHJ48FONhxYKNAUP3Hb2PPQRGFAnLI57GNMkGma85C2TS2eSUxyGgbRNZpplZNdwjLIKBSG6yw+4ni4HaFUu0dlTdg47ZM3YL1C1BLBwh01QX7QwEAAJMBAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAADMACQBvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvUGF0aFRyYXZlcnNhbENoZWNrZXIuY2xhc3NVVAUAAQAAAACNVd1zE1UU/90W2G2aQlm+pcISFEKaNvJRKOVDIYBG04INUIPVcrO5TZZudpfdTUtFQPzCT14d+sQbr4ozqdgZ8dFRX3zzUWf4K5zReO6mLaXUGR96e/d8/M655/zOyc//fP8DgH24zXDz+vXB3quxAjfGhF2M9cWM0VgyZjgV17R4YDp2V8UpCpJ7whLcF6Qsc7/LKAtjzK9W/FjfKLd8kYy5pa4Kd7tMiSF69hwsFPaSrdc75z9atSwSjAvPJ1QS9Hb3dO/tiV1TwRgiOafqGeKUaQmGLscrpUoeL1oiZdqB8GxupUZJlTrDg/JZj0sQbqVlDsJTsIyh/RIf5ymL26XU6cIlYQQKVhBqJjcylBk4cXoox8AuMER9PiokyACvUKAd8exjv1zgmXbp0K6nRU/AN2QKogyK6Z+suMEkQ3N814UoVmJVBG1oj0JFSwuWQ6OofSrWMqiGYwfctH2GzQuDpsvcy4nLVWEb4pDEWI8NEmMjeaZUPENv8APuBf6QGZQZ1i2VMHl14FnptYW8hlXo9NDQzHRSsqIKYgxtvnC5xwPHkzHJMB3Fc3i+Bduxg57iCdfiBtVkfTydXqIGUcSxS8ZIMKw4bNpmcPQ/0jkfRRJdEcLtJtPAkeWWsLOgNiU130uCfQG7pe0ehjWhvhqYVuqY5/HJrOlTG/cxaE87KthPjyyJQDYy7VTtIGxCJopeHGzFAfQxLItnGskcjqAHR6gJJnFJVmBBOmG4zKyc0nkRL0n3Y3NRn9ArSFOpiP8D4koQxUmsasUJnKJQNgkY1sYXVq5BRMJ8BRlp9yplEDiNMi22na9yFv0y/gA9hxeLi0o8iyg7fgavy1cNyoOSberuVnGO6k1conmMYkjq2/AGNZo0RH2VxjtkURTDDba8xbD1MXbGskSJW7mAB+LkFUO4cvgVjDBsWJzm8appFeXgcYaN5+wx25mwddkafZ5jfboKI4JCyAHuuhScoSO+BLNmwejpoyhJj7I8BiK4KH1jTyV4zCtVK8IOFuRo0SN3qrBpc/yvgV4Y0pXRLjN07tRNX7edQOe6XBI694yyOS50CuVN6o6nu0Q73Sa6UT39CCoyPfWwYc3OArHvPJHD8buljYorT26NST8QFQXvMLQSa894jiu8YDKKd9EawVVcm7MO+ZZ1DC7H9gY19hytLi27WEe538T7LXgPHxBi4GSdCeGlaT8/XmoLrZek2kf4WNLgFmU9YdpFZ8JX8SlxOU0Lm/YFMcEY6+fuWV6QS3lV1rTFQLVSEF4ooaW7HAr9jDBskvuObk10RtBKks9J/BVJm+n/8kQNq6fwx32suYNoQltXw6Yp/JbQNtewdQo/JbRt4eXhDLZn72Nn/kj78F2sTLSnOmro7L+H1R3tqbu4lWgfDgWd+eQ0UjXszWdn0JPv73wA2tDTOPoAxxmy9Pkywx1sStLtNYYfceABTjPUkBu6V3+UrOHsvM3uOZO2fL92vob8FA7KNOt/JrU35Wf99/Dy9hS23av/mvh6BhfzMyjkO0a04jREDWYNl6YxRrlXQsVwYkRzQo03pAXyDA2qD8PyfEHnMFrW/42EijirU/WbFbTRnU6gji3ht4ITCo31/Ddmv5ahqaEF/sL+OtVZ1ldqNoKFCPiS/raQPU0ELewmWn7NGCTH29SsX7ACj0inYhwTjSZBJxtCwFpt8jtcv48Pa/hE+4w69C3WfAOE7W0Oc2/+F1BLBwhgxN3UDAUAADYIAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAAEEACQBvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvbG9ja2luZy9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAGVRPW8TQRB9E39c4vhwTPhqaK5KrDgnEYxMgpBQBFUCgqBQ763Hl433PnR7ZxEhIvFrqFMhKCgp+FHA3CmIgi1mZ968efs0+/PXt+8AHuIe4dPl5ZvphyBSesHpLNgP9DzYCXSW5Maq0mTpOMlmLHjBlpVjaZ4pN9ZnrBeuSlywP1fW8U6Qx+NE5WNTa/DkweMo2hNuMf07P6+sFWDJhRNVAaa7k929SfBxFUTonWRVofmFsUw4yIo4jAs1sxyatOQiVTacSyu0mV6YNA6fv9e2cmbZDDzTmp07VqmKufDQJmycq6UKrRLmq+icdemhS+g+MakpnxJaW9unfaxirQcPPcIwURcRH9rM8evKcGkvCHe2jhoRk4VNQ0WWD7ZPhfwf7OEGoaPrso8NrK1jgCFh858Jsct5vUwPm4T2oWyEMDgyKb+skoiLt7UMwT8p5RuOVd7UGKIj/uqzAqrtSrwt1X25Se7O6AvWryQRtxK7DUxC68O/pj66pg5GP+CPvuIm4TPa764EbAvJxy3J7grBx8pvCaLlCSZgq3m29QdQSwcINbjq9p8BAAArAgAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAxAAkAb3JnL2dyYWRsZS91dGlsL2ludGVybmFsL1dyYXBwZXJDcmVkZW50aWFscy5jbGFzc1VUBQABAAAAAI1W21MTVxj/HZO4IUQNQUVFLaYWwoaQeldEW6CoaQJYAW20FjebE1jZ7MbNRkWrrb3Z+/0yHZ87vvhgHY1ap61PdKb/Tp/sOKXf2YR76MglnPNdf+f3fd85/PXvr78D2IkfGa5dvXps7+VQWlHHuZEJdYTUbKgtpJq5vKYrtmYa0ZyZ4SS3uM6VAiflmFKIqmNcHS8Uc4VQR1bRC7wtlB+N5pR8VBMx+K7t+9LpHWRr7Z32zxZ1nQTnuVWgqCTY276rfceu0BUvGINv0CxaKj+k6ZwhYlqjsVFLyeg8VrQ1PaYZNrcMRY+dsJR8nls9Fs9ww9YoswQ3Q+Cscl6J6YoxGhtIn+WqLWE5g8c26UwMweSsetC2NGN0P8OKtFLQ1OECt+JG1mRY3qkZmn2QoSW82HyxpPU4gyvcetyPWqzwQcJKP7yoqYEHAT985VWQYaVtTRzm9lHLJNj2BMPwM4UvS5yzZ4uGKuoQO1RZ7G+tdp7AQpmEtQySxfO6ohKna8M9PVUc/ViH9T40YMN0CCdp0lQVnUvYyOA+NjAwNEPiHC35bsZzNdiEJoZa20yaF6gy1CIMzeHF1lWTh/C8SL6VoWGhtruo6RluSWimY5Sbod2LMMOaKgyWCyH70III1VI0iZFhiFYzXSSqZCI4UbSLEDGGjeEqbM013CYMtzN4bbOsZFgdrnrGndglbHczNP5PVSXspY4l4PrELH9zOnoe7orIjw7sr8U+dNKZVdNQFXuB75JnJt+DeElw/zJDvVK0x0xLu+QM/BGu0CGpItPHcQD3KfmtvQZ1s5idrrn2XrxCFermisWtJi8OEZZuMVu0PjKvqUjKd++U8CqN+yi3ew3VdBJtnJeobLW1oiWcSfT5kEA/wxbHytDMmDqmWAVu02EUI6NYmZ7ynm6Do8Ti8NChEWJzQ3KRfcWOoh7DYA1eA3W2l7B0T9i8wLA5vLRL66luP47jhODsdYZ1SyGWcJLGnjuboZneWBs+1V21Cm/gtA+n8CaDPBuxK12wLUW1BemDWi6v83guV7SVtM6dGkg4s+CiqnRElbZxJiPtgwJ1GrWj7yrQ3Sfq12tZJqGmsY3GK/dsExeyjqZhg1/MUxSeaVJnr9ymgq3YYhhHFwzjvJSaD1mcpWbg54rktITpyTL/PbpSIJP6eRPkCIkiA6a4YfMMdbMUlQNQwa1nZuKkHzpsHwooUlZ6xcZ6qEbOPR6ne04InEJVcY37MYFLwvUyoVz8Cl324goNQefQQKK3/6AXb9OQ5An9BdPKNGVNMRfXSK8ZGX5xIEvJwnER8z28L9rpA4aaQlHUvNIr8XjVXrmOj4T5x4LLpSw+FRafEcgqoyvhC6oH0Z3gEwuvq5kr5St8XYsv8Q2BLNOzgoZMHacgQ6L/GFYlNYP3F3NpbjkS1NFTJ9H/E8toRW8grerEC0h/l4NeBvjp8zvaNcJF38AqOZW6j1WRe6hru4f6XyC+arAaayqGJgUUhn3yJDrb5EB7YKSExjvYUsILiUdoSckjwdb7aCvhxUB7CTsitChhz0McWIbHaEglJuGRb7cFW0nRNS29TQEZvqfPANgUDlAGCQ0S3Z4Cbzd6KslvwE0nAU7Lwd7kXdRNorGS8jClJEE5WeImZPku6icRFepgnJQPMCBEdzBcQqqEkYrlIyipiHwfmduPkE0Fx+5j/A+HLgFmHVxPESIkU2jGMgdRA/CE+PiBtCsJpZuAxcl6kNZ11MG5CtBhkgmgHZFJ7KGTngt6Rn7GcoEr8hgegT1Cvw9w/iesEbhoV+/sJPdNuF23XLdmKKmBu+4JttJbQCku4GIlRTMVQqTYIKcoUoL8k57fIKVSLnnQHRl8gLduOcWrE49c2YfVEmAPya7Lgpdk8GqZtUnUBN8h0rgj7gu+64jrU/1/wstIvi0a6Cjhw9TBG1N/i2z1rk0lfCJSbnKfKeHzfsFih1uOEo/r3QnqjID8EN8yUVpy97BEm1zhOyIWgSvUGLS7PcP0SUhPBb0tUwg6xW+hH2CK8LoleMp7h/0pet9dEpRZk8A8Bya0DdP7f6jpRa2CFChEugHKlyZ7y6mcy8nv+g9QSwcIOVq4nhwGAABzCwAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAA+AAkAb3JnL2dyYWRsZS91dGlsL2ludGVybmFsL1dyYXBwZXJEaXN0cmlidXRpb25VcmxDb252ZXJ0ZXIuY2xhc3NVVAUAAQAAAACtU11PE0EUPSPo1rIo4gfyodb1q2wpVbFaiiBQJWlEUSqaJvowbaft6nZ3MzuLEKOJv8M/4KNPSyKJvvngbzLq3a5GVOKTmzR3e+695565e+bz1/cfAFzBEsPrV69WCy+MGq8/E07DKBr1pjFh1N2OZ9lcWa6T7bgNQbgUtuC+oGSb+9l6W9Sf+UHHN4pNbvtiwvBa2Q73slbEIfKXp2u1KaqVhZ/9zcC2CVgX0idWAgqT+cmpvPEyAcaQrLiBrIslyxYMBVe2ci3JG7bIBcqyc5ajhHS4nXskuecJedPylbRqQaRvTdol1yFaKtHQyzDwlK/znM2dVm6l9lTUlYZ9DAd83hRr0qJWz+abDEZ6uVvoCJVbWy3PjC//6qsQu9OaYdB3lmhIEtISaiFQbVdailiOpHfp06GjP4k+HPhNTZzVMMDQZ3NflZ2G2FhpMvSmy+NlHYM4nMQhHGEY+rNpMbDsRnS+Yww9pmkmcJxh33XLsdQcw9H03xrGH+oYwWgSQxhj2O8HNb+biKrLu2o+iVPR+BQRR0t2GgzZ3Yj/gn6IIwoDZ6KBZxkSyo2TOs5HuxjCBVJBu6uQczpCx3i8IZNBI/QeV20dEzGWpXbC7gdCburIxeBFWhqBS5K3OsJROi7H+BTDk11U/i8kXmM+mnSVoV+5C5VSufzzaIVYwzTD6E6jVDYdxTdubdSFFzlUAzlp5Bf1auAoqyN25GeJYImT9xsp5aY8Ln2Reh5bPUV8CdxgMP99ygdt6T7nNVv8kLyQxBwWyVslun6kvKLoht/h3oOohm7JXmiIHvoqSNCP4Sb9e0voXoqPzRAHq8ufcC4zMB/iaHX2DUa2MVS9mxnLDg5v4USI0yHOhUgvb6OvalYfh8jcDjF5J8SluyGuFHvNzER2uHcL10IU393exlx1cN7cQukjTcggj3u4jquY7sYiZrtxDgvdWMJKNzLcIjWD2PMFGQ2HvuFsJFnrZnrodQ96vgNQSwcIo6OuTugCAADNBAAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAvAAkAb3JnL2dyYWRsZS93cmFwcGVyL0Jvb3RzdHJhcE1haW5TdGFydGVyJDEuY2xhc3NVVAUAAQAAAABtUU1PU0EUPSMfr5QqtLWA26eLlvT1BUqT2hIXmrjCmNjEhXFzO50+psz7yLxpWRCa8H/YuJGEBT+AH0W4LRo1cTMnc+45Z07u3D/c3gE4wiuBq/n8S/fCH5I8U8nI7/ly7Dd9mcaZNuR0mgRxOlLMW2UU5YqHp5QH8lTJs3wa535vTCZXTT+LgpiyQC8yVOfw7XDYZq3t/vaPp8YwMVM251Qmuq1Oq93xLwsQAsVBOrVSfdRGCTRSG4WRpZFR4bmlLFM2fJ+mLnd8+UQ6GTiyTtk3Bx5WBbYnNKPQUBKFn4cTJZ2HdYGdJavTcJGZULzIZo+HgsD6sU60eyewUm98LaGIzSI8lHhAUqrMCbyun/zt75/8eWPgrE6ifuObwO5TycDQNOGN2KC1/701IVvA9j+1niweKgJeTI6luUCt/r/QEl6iVkQVOwKrH3h1KGONywls8Jc9Y+S2fO7xrcwoGNf2b/D8B7CkXmDr17jK8hVGr1kp/8Tu9VIglhQPHgFQSwcIZk3OrIABAAAFAgAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAABBAAkAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJERlZmF1bHREb3dubG9hZFByb2dyZXNzTGlzdGVuZXIuY2xhc3NVVAUAAQAAAACNU11v01YYfg6J48a4bUobKFSQ1aOQpE0DlJbQwAYrIKWEFTWoKNIkduKcOG4dO/NHizSBNO2Oi11xww1cco1ES7VJ2642af9k/2BXsPcYGGViaJZ83o/zvJ+P/cfLH38GcBZLDN/dv79a+dZocXNDuG1j0TA7xoxher2+7fDQ9txSz2sL8vvCETwQdNnlQcnsCnMjiHqBsdjhTiBmjL5V6vF+yZY5xPyZ863WHGH9ytv4TuQ45NgUfkBZyVGZnZ+dmzfuDYAxaA0v8k1xzXYEQ9XzrbLl87Yjyls+7/eFX77ibbmOx9vHr4gOj5zwrX3T9yxfBEHdDkLhCl9FkiGzzjd52eGuVV5prQszVJFiSDmeZQmfYaL+gQL1+LLKMNCmSS0eUiMXPwT8v51QqkN9X2zaXhT8gxE0pBsysBr1c8F27fAzhmP5jzRUWGNI5AtrOoaQ0aBiRMcA0mkoGNWhYb/Usjp0DErtEEO2/aZaI+RhFCx1aQ+izaDkl5cLa6lLTcQPw9C7Nd3gYVfFUSrV43cltFYr1HTk8ImGY5iUftvV8elr+/h7K26Evu1aKk4wqJvcicRKh5rI1wr1f2OqOvIoaDiJIsPh/5xZxQxtR3pcavtUfk8eGsZviG8i4ZqiurfA5RjNW46gIrMoayjhFBXJL30EdUai5hhGY4TtlWsrV++aoi+/exXzDEfeha5Gbmj3xJ77cwzje3u71fW9rTj3a7bOa6hgkbieHcAFHYdxRCOCiO/kEv0SDMN12xVfRr2W8G/JMIZBYszcuMH7sY0RgqvEVII0opy0EUl4zB3RTXKfZBHDdF4iaxpJ8gCjxeZXL3BgehtjbBsHE9sYfxYHXaYzRTJB74hs6E3gn+RNkfw+l374GF8Xn+Pg72hmtEx78kHugTeGiY0fEnd2YexiKqM5d7rNBeURKoQbzypPUC5mFdLHssoupndwOjO1oPyKUlbZwdnbVPwpBq//hEqz+ALVX3KTDx9hUMIPXCTsbVmsef03pIu5yR18/oxmnsAJNLEgCYrlOVyL5TJWY9mgU8p9+IKaHkfyFeQ3zVQsvERahZJMDv9Fe5HjDtGwR2nMKUKvx4Mn4r0l/gZQSwcIKnyulD8DAAAFBQAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAA0AAkAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJFByb3h5QXV0aGVudGljYXRvci5jbGFzc1VUBQABAAAAAI1UWU8TURT+bgtMGaaCiBsu6Ig6LbRVEWVxg7qggBBAY8ODuZ1e2oHpTL0zBYmRxD/io89qtERJjE+a+KPUMwVMW0z0Ye5yznfW+5358fPzFwCXMc3wamNjbuiFnuXminBy+ohuLun9uukWS5bNfct1EkU3J0guhS24J0hZ4F7CLAhzxSsXPX1kidue6NdL+USRlxJW4EMMXhrOZgcIK4d27ZfKtk2CVSE98kqCoeRgcmBQfxkBY1Dn3bI0xV3LFgxJV+ZTeclztkitSV4qCZm67a45tstzvbPSfb4+VvYLwvEtk/uuVNDEcGiZr/KUI/xUg66FocNb93xRJEvy5FvCY2ifquLLvmWnpnlplKHlmuVY/g3yZNToJrhXCPSxxwxhI/ZYgwpNhYKohghaW9GMdoajeeHPcs9bc2WuJjzVyXDGiE39ye3vIIreQR7mxLOy8CjphfUSdcGoNawrqrcOOarhALqCnA4y9P6PhYLDDM2zczNPMgzn/jfIUXS34giO1SVrOflHc1Mkqk2WJIQ/gZNBUj0MWq1GwWmGtqBh0vVd07UZunaNbe7kU/O+JK/k4Ax6Veg4y3C4UTtetuycoNc9r8JAlF4vYImTY0gYe13t9b5jT0Hi6Atc9BMFk6WAWo88ISNIMkR8dxus4UKQiYGLDNE62igYIFpQLdTG2rgz2WVh+nVxd0QaBnGljUbvKvWsMSsFwwz7ttPYZUoExA6i2nWGnn/QSMFN6qzvpgtcjknJ1xmajNhiWsMYxlWMIE2d/Et7FtPbvL6j4hbuatiPzuDhJsg8TbMbDIvliIflYlbIBZ4NJjQ679MPgzpQvZNFMxkAjE40FXQK0VlFG60P6KbTPUS7Gs9sYl/fR3S8q6InaW2hPVS1pLg7+NdoQph2Ga/g0Hscf4OleKaCUxVi6wd0bMHI9D3dRKyCRGeKlgoufcJQCF8xkpn+huF4I+haA2jyO1o6b0xu4VaGQtzuJ9y9t/FN3H9bzWuK1m6EfuEpwgo1LvjwC1EwhSoNEOFqjeHfUEsHCJoruYYIAwAASgUAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAIQAJAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZC5jbGFzc1VUBQABAAAAAKVYC4BUZ3X+DszsvTs7YR/DIwMkGTbELPtEkEAGQmRJWDYsC2F3IUNQvDt7d3fYeeXODI/EoFGxvrUaY0191rZEa22SwuyStYJtBWtta9NWatOHta22tVZr01ZbdPude2d2Zx9Ba3nc/z/n///zn/c5/3zpx899DsAr5N2Cx06fPrDlkcZBKz5mp4cao43x4cbWxngmlU0krXwik25LZYZs4h07aVs5m4ujVq4tPmrHx3KFVK4xOmwlc3ZrY3akLWVl2xJKw9604c7BwY3c62wpnx8uJJNEHLedHKkSsaV9U/vGTY2PmhBBoC9TcOL2rkTSFqzKOCMdI441lLQ7TjhWNms7HfdkTqSTGWvIgE9Qd8w6bnUkrfRIx77BY3Y8b6BKsHqBY90z50xBVTIzMmI7vKFngb097uJWgUG410qRk4aemZv68k4iPcLlAJcPemKQlayTGXHsXK4nkcvbaSV+10LEy3ysvccetgrJfBneP+c46dflTnGe4goP5hN2TlDr8VHIJ5Ide60sNy1J2/kTGWesP5GyM4W8QLop37ZEOpHfLril6ToCdq87SBm9tRMmVvDsehPhWWrtc1kwsEpww4idr+TlxqZ1FdzMrGwN4ibcHMBq3CKon9mx28qNkmcDawSLm9YdDGIZbg2gEWsFodnb8tZg0jbwMoFpp/POqT6bgtXPuo8oXtSEdQHcjmZyN2vJQCvPJvK2Y+UzNMXyWWe7S3gSaEdHDdqwXhB+SUUZ2DBbJ64DGIwbNMwnauAOapWx0WufzLuSHg5iC+6swWZEBb60i15aZqjCecnONtyl+7bP0giVtvZeVYOBV9K2NMMe+1QQnbp3B3ZS0HzG42ku3ZKrBnEvdgVgoIt7efyglSzYQXR7BO4jk1n1nC1N81maj1mQ7x7sVUv26iVrgwigphp+3B9EEDforC+IJd5sIIh6NOjskGDr/yNADMQEN1/Pvz0XezCAwzgSRC3q9NZXBxHCUp29hsEzms9n2xm5J08N5GzHxCB1MaLO9rIFdLGg5EOwVfJhxqYSy1VSGxW0X0/C/bp1RyE/SidPxD3nOabO2jMvakrCJAMYQ4pb3A0M/Y45xzNMSzk7X9IdE1yJ1rytLsGH4ASQBYPZyFnD9oCTcFU6fWLgQHdZ6jIoCFbCBk4IqqmyPlaCFJ3qlHraSTysmcXO787k8kG81sM96uH2ZxwvLrqDeB1eryuPlVas/GgQb/R2v8nz1fsLtkNnf7OH/DlBDZG7HGskRVGCeKuHf5sg2zTf8X8aTPfPdsyzxzv08ndSzZU66TuVzlsn7z0Zt7NaOA2wvK6cIXCgQBuk7Ir1nyeBXRZL3lAkn4lkLSdnR0rOEiE9E+8TNF9fvP5RJ3NCs2aJsfcH8F48QRUOlZzNrQWzLOlBiUyHFtutWguClRgDT5ZyvuVQ1V5Friunl/KxID6EDwfwi/gIM1NqbCjh5IL4GO5U1McFa/tsh5U+4tj5gpOmfLv7+/cTymUzaQoZZ0sQjZj4RBAFHA8wKH9F4M9nBg70VNzlMdzDu87iKVX4J1njy1x0FoaHbcce2lfIM4lRMbbFcvVrLE+VfM5e/XUtJnPFV639RgCfwdOsBTOrlSdLu54N4NP4zdmB0GPgPPMJa2B6ZyadZm5wu4KVc2SYWaM045gIoIgL5MYaGqqITvfougXNNZ+O8jSJz6ryfosFKW4l4wV2bLamoB0jbpBc1CDx4xJzg2LbXLSJ367MI7OIGvhdkmIeOWA/VLBz5bJ/SnD7TxVlytNlXAngC/gipSOhEu3pLsXX1K2bvoTf101fpurc26yh0o4g/tBb+qNy7CiTu5lh5zD6x0y8I3rUc6md9Kgg/kTTyvP403IZpR270xUO8NXKhX0VkfjnghVzpeksJJJDWm/+QrBsAfE9p/jLAF7AXzEINGzTDLfVlHDe5hItGv9v8HU98be0SWQ4o3Heo5Hwd4K2he64LqV/UErfnHNygaI1/+Q/6sl/0k9XAF9T/kML5BQD32H6mLZCX4ZvhLIpK5T3XVqRpqjQNLVZkTAqFnj5v+H7at9/Z6CPuP7Bqp7vsdMjWgP+Qw34BfynYNGDnQZ+QIfhMWrV3/RgpxaO/8b/BHAV12Y1ZmTY1g7/x0xc8YKjactDze2LPOzWIDteCWBKFvFAItdNFhynkM3bQ0HxaQ6bEr8f+qcOoPHLubQvb+ULuZ2jJGW7PN13H51AqiXAXkNqeNtC2cOQG7j3hMOulOWOcnRrCEit1AVkidQz65Qbg8gJKxdJzHDTbkpIwIfLMtZNPl2CskL9baPcSILxZCZnB2Wl9tJXZZXSWqUGZVddXyZIq0eGnUwqYgp78obIsFtsopG8Z8NIkynalKdy60y5VR3hiVmdu+dKOUPYkC9xmBISjt2bSffyJReUJjZAcrusq4M9qwvXVl9aa6QNw7XV0j6npXpJv95aJ2zGG2fQifTxzJjd0WOlBoesvXbeGrbi7F9OGcKuvCY1gxB8ufKG0jmeGM0M7bbS7MBya3symbFC9voFftbB/lNZ+2db9K68/tl181d3WslkH12EzvkK2RSQjXJHbZVspqGZWJIUsr2yO3Q7wwp4uJB282LHrtKEZO6UaAPdl51b7RB7ZycxWNCVASdpyl0/setfwFDl3lea5G41/Su9169bIVgpjieYXUzpZIEsNTH9FCxtyj2Clop22GXY9fK0lew45G3dyVKuVdBK0t120d347OmyKwrQwP+hzXsJlSz0QpLd0h2QLrlPc/kVnfWUu7qFqRjSS/crCei2+7KfGi4h9lu5HF/lQ6Yc0Eqw87pZWPoZrzLA6Bm0com4EutOD2dMOeR1u2VEUGJutyuH6Q3uY8OUI6w4DEiqa05xKqf/w0F5tRwNYJPwvRM6tONAb3dvV2QgpynBbcZMGXR7LpooKEN8pFF2RnKw02bf50RKtuPT0t+p3JnCN0IqMrtbiWS0ybPSTFo5m5lXO7tyidaWtpw4IzwU6XLNH6n0xfbIfvdHJT2WU/eJFKYZ7GP2GyPrFm/MOImH3Qt3M33rTywrZr3rpx/KtGdK0mpFvoeaZzbsGOSdzBa6sS+Ryibt7lSq4P7a4D2w5aGAONipHz6La/Rk+3GW8wzNWyh1fO2ln65M4dOn1sOkZpD0USOTa09bKduUR1jeCUwvPuotWk581JTXsfx0mMLHzyLNwG8kuNWUM0zE6xTmW0eYj9/K2qddDd2DdSc+Rt77lWH9MSiRtnsLqUFGmIep68xk8ipi1ksyOb61/XyS84mGKs75Lmcxq9dXuTsuKY21WuA48mXujnwhc/RrzcNy1si3M39s4N5qYp9tuLG3YWXUN4HIJBpjUf84biui5QJeLohWhasugJnmg+jU2d2CS9gRi0WNC2D0F7E7al7AHsEVVEvUOIvasOHCumKE/WEzbBSx79DZqefC/ubVzTF+w77mtuaW5nHsP48D59F/HgfP44FJHI61jONV53H0PKyGeBEjV3BD2N+Q4OwyaicxxsPjSE8g/wy5XiTv4PcwqqZwE4wqg8XTwCb3X6OBzcCP0GFgBxFT1FH1vA3eHPgBglPYTmXqHy4BU65OIe/kZwkWU8eC41iE93Ferc8aT394PyGD492TOBlrjh05UsQje6SniNN7i3jD9iLORH1FvCXqL+Lt0armltabwj5qpGoc73p6zyTeG2t4nEr4wEWXSA024j28rt4dG2gmHZcj7I6rcLM7RnCrO96GDe4orhKCkCmCZNkgrh6/QGu5LC6+7DmIPNbSWsRHi/ilQw2/3CtRn0T9E/jVIj4Vi1ZN4tM05yQ+E2sdxzPjOFfEc7HY3uZW/o3puc8V8fmG3zlaxO+dg1XEH7jfr3wez38QXa2X8HwRfxbbVo8vfgxVZ7FpEl+LTeKF2KqjbeP46yK+0fD3RXwrXFXEPxfx7XH8y8WesBH1ncVXSuMHWmNFvBj11zfhsya19193VXdWbzbD/pYifhS7I7Doozg8IYuLUvUkdi031ywLnDnSaW0211hHOpeKkap+/MOoWW6uPvP4k1javIYou/Mcjq4+s9wsSjBstCxeFihKA09uNjvPTn1KGQzJUuUkTA9tPocDIVlelHBRVhflpmd6KERPWYpxuTkkkbIAIWnktNlVwDdCspYAZWoZl9suVhK6DHJPamGfznwk2nIRa9SI0oHvuWMLrbUGrS6so8Kt6MDjhHVUs27AgAvrqPADOOrCOip8DA+5sI4KO/wqrKPCH8LHXVhHhT+Bp1xYR4U/yUevwjoq/CwmXFhHhS+yX1dYR4WvsgdVWEeFv4vvu7COCr8oi1xYR8Jsm5cr7I4KrxfLldONXLkFtVNk3TTgZwplJBq4aqBokBlG4Bp3wQvJq1AkfftfpzirwJe2c+V70ysGmZ1Napm7YOCH4pvG+4BrLKB1U4yW+QR5KDDvfiKXospDEla0x9JiGJVY0ihxBHeB08olklnvkuHZaUJEhlzePZQmpWo3/VS5iZ6tu/4gUErbT8Gn2UpWtNDjHohNSPOh52QbEOttCcn2CdlxKCQ7dWAiCsm9bROyJxalJ9ZPSlesN+yTcdl7FicYXaeJD8n93g5/mPM+nfdexra2y9ii/h/2H2UI0M/rokU52OY5fK9SivraQvIA77lERXLT3rCv9ywiLUV5MNZbuo2Jpk1vm/omc87Zqa+3XYHvGV78SEhedbQo1pOItmnY7NGrekISZ8Y4J8OXUROSUc0NZkiORX3NLQwifCskSe9+hlhrW1Gyl8SJ7SlKjhw0FyXPgTlqpjbsQ/U1bDdk3xT2q77576S6hyFdwA/hX36NKOnyTTHi6BobDbzAZXf1miJYOBqoa5SRrkWa6RoNtMh6FoS7afvXcMfDtN0TtMlHuHUCJr5Km32H++r1d5qS1YCVbrF9UQvFERouJMcvSPsiltNNe1zwZBnsccGHy+BeF3xtGex1wdNlMOpz4ddPw/5z6I9WncNBzekvxI5EzdawGWvh/2b+14ocYxkyY206MfRTFTY9G9Nx3qCDN33TzPTNC07f8pM2vM2bfvtpt7Yuorbcr7zLq1myhfMW6ZCX/y9QSwcIuTzeAeMOAAC3HAAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAtAAkAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVVzZXJIb21lTG9va3VwLmNsYXNzVVQFAAEAAAAAjVJdTxNBFD1Dgd1+oFhRUPxcFUrCdhOxSUViglLgoQbTUhKfmunudLt0dmczu4shRhJ/kjFBo4k/wB9lvC0ao/jgy8z9Oueee2e+ff/8FcAjLDG8Ozlp1d9YPe4OReRZ65bbt1YtV4VxIHkaqMgOlScoroUUPBGUHPDEdgfCHSZZmFjrfS4TsWrFvh3y2A5GHKL28HGvt0a1uv4L38+kpMCR0AmxUqBerVXXatZbE4yh0FaZdsV2IAXDstK+42vuSeG81jyOhXZ2xm4nEXpXhaKp1DCLDUwyzB7yI+5IHvnOXu9QuKmBaYaFrcb2Zqe5391pbW41G91Ou9Hq7u69aDCUm78R7VQHkf+EwdxwZRAF6VOGXGXlgGH+76JnWSA9oQ2UGKY3xrUlXECxgBlcZMhnJK06IG0mLv2hqn2cpCI0cJmh6Iv0pVY0T3rMsFQ5r2TlfKiEK7hawBzmqfFoGZHHYP8X9qdmoriG6yOhizSpUz1brYmb5KXqrJRhrvLP5rdxZ4S8W4KJfB5TuMcw+ZzelHY/BYP+ESN2yo0tEwUU6X5A3jImyAIWv2Dm1UfMlsufsHCKG+VbdJzC+oD774ExLEfnBHI/AFBLBwhSPjSgyQEAAJkCAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAADEACQBvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlV3JhcHBlck1haW4kQWN0aW9uLmNsYXNzVVQFAAEAAAAANY7BSsNAEIZnjZrak8+weFDadMEaiL150VMRFPQ82UzSbTfJsptUQSz4Wh58AB9KnFicwzD/N/P/zPfP5xcAXMFYwMdu95C9yRz1hppCLqQu5VTqtnbGYmfaJqnbgph7soSBeLnCkOgV6U3o6yAXJdpAU+mqpEaXmCGD0svrPJ/zrc/+/WVvLYMt+cCpDLJZOpun8n0EQsD4se29pltjScCk9ZWqPBaW1ItH58iruz/5vFdLNM3ZjR7ei+FQwOkat6gsNpW6z9ekuxiOBcT0SrrvODA6v3hicAQxDCXYMoKTYYKI+wFEv1BLBwjJWlOc6AAAABMBAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAACoACQBvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlV3JhcHBlck1haW4uY2xhc3NVVAUAAQAAAADNWXt8U/XZf54kzUlPA5SUCgGBUAq9pp2oCEHUQgtU0sIoUAMonKanbSTJqckJUO+XOXVuc5fXuU73zsu2bl6mMkiKnaLOMV9lzr3OuYtz95vb3MVddFO67++cpE3StOD718untOf8fs/z/J775XeeO/HYE0R0lqWU6bqrr96y4oqKLiW4V412V/gqgj0V9RVBLdIfCit6SIt6I1q3ivWYGlaVuIrNPiXuDfapwb3xRCRe4etRwnG1vqK/1xtR+r0hQUM9e9nKrq4zARtbkcHvSYTDWNinxuKgioUVDWc3nHl2xVUOYia5Q0vEguq6UFhlqtRivY29MaU7rDbujyn9/Wqscb3x2mm+tSmhqEQ2ptJLlX1KY1iJ9jZu6rpUDeoS2ZlsEewznVa90z++36HHQtHeVTXbmWaMr64NK/G4RDJTWa+qb45pOoiAv2bNpFFRXWPSiKvBRCykDzTmw6xykpOmyVRC05kWTA0rETQ+DQethU5MiZlOn3DE+C6Iu6hMppk0i2nOZFASncZUArJ+LWjYDIrJEI2qeuO2LX4QmkNumWbTXCZn9o5EpzMV6dq2La0T0FqBtoAWyjSfPLlorRJVMBXjzA64QgRizMqgZmvbSZW0RKbFtBRW6YFxHVSdYzUTTqJaJrt6WQKuxFRe7c8366qaHU6qJ69MddQAW5mchLRGQbNxs6L3wYjvY7KCIfhPda4QGZmy4cHaMjpTpjPoLCbXxH2JloMlXTM9ckwvABErwF5BK0voHPKBmwJuJtG5GW8wlts1w9Oa1Z51WiLa3RKLaTGJzssoNU1WoguYJOGI4MBJa0zdrQUj54aiIf28PN2MubSTWmidTE20nml6f0ztV2KZUGHaXCgMcqWp8Z9KxFU2Ga4M2VvpQpmKaCNT3XtAlKgN0qkH4MA6dGqtFoxvos0l1E7vZ5o7zuSWRFQPRdSWA0G138TsYJqdL8SaRCjcrUKN25h8a5VoVNM93aquxiKhqOoJCn33Q4+eHi3mSfPmuVCJeXpiWsQTRPR0IZ95qhzUKdN2oTq7gIl2M3kLeeAEJabPhz520E5BYheTparBQZfkUcjYaUoKewQFhcmha+amk4LC/tupW6atgr152U7dMRDVlQNZGupFgsg+dGtfTNuvdAnrGv4RElQuNWN2M/wjqjspLA5ooojpdO1KRHWSZq71Qx27Gi5VYpUOghOVNPTHNChQD6lxByHGnPCysCIydiyO1xUF5D0VDUD0fbRfhPUBpqpTI2KIc7lg8gozm5riCE920lW0UuxczeTJcs1gOIR8GYko0W4/nAMIceE41wpKm2W6jq5HGCvhsLZ/W3RvVNsf3WRoFcmIkXg+QDcWA+aDeOt10M1IByZZbwJUvH1aBGntQ9CX1m8m33MKFh7/5PyYp0EXH6aPCG4+OiX3m9IW/xisoMR6ExEIv3WgHyE1M+tYI9+A5Cfok8X0cfovMH+Zgz6FXH9ZIqTqDvo0Vpod9BkYNz4Q19WIV5jYQXchhxhkEnoo3OgPxVFU/5tpVYeqxz2K58LtbR4T3pN2iQFPtQgx9YAS6Q+r9R5vc2RAbK2ODOxTwgm1BiFxN07pVuPBWCitI1chV7iX7hO8fj5TIgwOmmIxZQDp/YsiQOOCH6YlORrOjdAxtkHwS/RlmYbo/on6NFygO0urEj0IBY5T2KDE+yCyRF9Bw2BaNr5mwGQVzuLPhWxT+nHcI/SocJSDEwhhW6JDEMBQSFyEaja3a7VwWM0k1ySlZDpMw0zu6sIwZgQ8JtPDNCLaHP8ErtMgj8v0ED3BtPxkoVC5RoUJzWDuSHSl9yV6kml99RSOa2KvyoeYoNw0P0/L9BR9PVNvDdu1Il+LLCXRN5D7QuJN12JCqmwFtabXoZ5v0rMldIz+h6n+pFKZfzp0RQf95zPn5lCU6FvIfmhp29UDulGUEPDfphdL6AX6DpqWqLGc29yk/c1JL9F3BdzL8NeIMtCl4qSYvint4QVLNYi/Qt+X6Tj9AMXC63XQj1AsTipIUw/YTeckiX4sAuBUdf4TmV6jn0JGr3fnJasvrnPQz/ESUXT0bXEn/VJwU0e/QmGIJ7riafcur24tmKt/Q78V0L9D3tWiOdLuOMUCcFJRTYJZlsOxv6c/CJX9kWnZe8eX6E/IaGl2hZWbYpDwfdWnwEsuF3+hv8r0Z3oT1KrPj9ek9bm6odZBf4dKQ9Fu9cCmHvgMlNfqpH/SW0JXbwtfbp1Mnf8WIO9g/tGiTelUzrSmYPPwHrk9QaPgFjmenAa3glnBK1uQvSpRG0Qxhzs1h+Ii/rqdbDPKHBchVacxvBcLBCkzehj8NGUwzR6Wi2WWRfksCWroSELR+EZ1wMlO0asf5mk43+vgGVAZ6jSSU0ZIJ8+kFwV/LkN2CIPSoatOnmUomcuRK8NqtFfvM2Ky1cmzeQ50xW6cpEXbtXSFdvI8IedxxhBTatDJKKUlCpEWiOp+nBeKhAoezz0VxU4IpPHqzBVIqLyYaemp4Ui8BLHkz6tl6dqU5KpiXsrVmXEmF0DiWpnrRJrj1Q72TpJOhJtxo9ALhh9y8DJoqz+R34+l89XUPW0mqfFZfLYwHcafmaaE2a0fr2BaXJ07PUzSorEPjRivYqouMCNsHiMpSGyA1sJoyHi1OYd3GP3FOAzTwrwzs4uDUXv5fL5A5vO4CVm+Om/TZGetkKoZfgUFNYXDTl5nLq0f6+caRD/XYPRzjGF46UmmgLEysIw3CkL+3MnWkEHidtFfGVcLRq/k5M3od3kTY+KZlsOmxB3m9BZHfIz1n/mNhijuTt7G24vhiZ0omZmwc3JAxNzDvEPkonhLpF8ctgtRxnV8MbJSPHQ54ms3wggLeybk+CxpugREEErPKtNoPnqVsJFcxocORs85z2TVgxLqiSTCegiB7DHbnAYH98rcI2aXhWmobk2Ne8Sg1qfsUz1KdMAEBSRGk6pJh8ltMMwG2MWvaXsT0FQYKam5ZV3TNv/W3eu3NDX7W3Zv62jZsnvDprYWJ0fRRnKENfNSJKP5PINOMZLwZRwTJoL6S/OpOzgBFwJZNbrPyftNQMwu9pga0fZBwZebzpAZTbJ8OLfnG9/BgVfx1YLONTm5QJhbN3ojvk7m64WjugtoyK/19orY+YCoPDtMX/+gzDfyTUzv72za0t7avt7T2htFf9ftCSbiOqZfU6se4e8e4e+ecPrmCHNxtCfUmxCwoegEOJ/HwbegH4ZkTV1xLYxB3riq4FuNqZE/jPwT1nqd/FFaJ1i4TVzrHEA6g3t+XCT8Jv4EU0UBKdLXBS3G7YCoKxhYZhXSlsSfkvkOkc2rCuahfOWaChmU+XbGqGM35WMqeOWRZmJtWgeKmff5Lv5sMdAxBM0rgNSMcTGsKd0S313YhQtRlfheBDtm+f1abO/WUETVRNZm1LnP8xeK+T7+opHzJjX3qlZTri/JfA9/uZQ2M80OK5GubqUy9/6nEoXhtoKE8jS+qtAt0eTnF9pqzahiVSHDjKXu7U5+kB+SqYi/MsPOD8Mfxg8ORfdpe9VGvyFKm6orPUoQzA1I/CiiOTK+wHQ8O5rTeMDo07rNchKvNLNFgfo0GaKYov9vm+aRU+PWTNxdq4TDHSHRr/FX+ZDMB/kwVJJkGvn/ZbL3eD+4iYddRHwEM1p63zPeQ3jEHaunakm8arwaGDkCRQDjrB2DKKYTppUFsvXkU39uAn+cnxBN0VGmuYWEjsZ1KF7ip3LvBcaaE6Q00eZGuoym5OsT248JHo1Q/IbMz/AxpkumCtuT2OBkzKSPelbmpxmtoRyMqSjIzcadyMqpXCY3peVfZvPzfFyQ/JZI36EuB38bwRbCaBBTjWBz8nfM5P2/SJwFDlmjaTpGR6VfuIExZyHxnCHxd2V+WWTq4jA4FEehCtbkqjKqRMRXH13ItjOfrVf4++LUH2Quf9OfLIyrLT8UJqzzI3Hd50l/wvA7+TXxmWMx/wQNTt5lWAbjZ6gsY01m1o64cMn2pqwt8PIL/qXMP+dfOSlsPv1GyLIz9yvLJNim1X4n86v8ek6TuLUPBkTl+AO6hWAiJq4xzaX8KwdzFWy8wX+S+Y+Mwa48Lr4jRXVMtDlCzK2enAv+K78p0P/GtAB2bEj3vWElEQ32ofc1Y1pY0cH/EHYDpkHCuHGYsnlK3zfyW/y20M6/HBhHjMtmMwMyXXCSeDYJZJOMqT3iyiudQ0H7XT4hUwmP5gykuVCShZFDzPSal0PSCeMkOSTTB1usFptssVgwDhcFw1pcdVokTJP8qgVytazVEuFuI3UZnZPq0fvUTLeU0abnwqYtWU1Ud0jcrnQljDZLpL8Gh0VGzya+48H8CJvgXowBW0XHhxZLTJHtiUiXGkuvlI5HmSFpHKN9EUkk/lmpmBz4zxYn3l7BsxV/I66iJM1IUnmS5iVpUcCfpCpXTZIaB6m2bpjOPkKYzvxD5OocoaZAW12SmlO0od4vNv1HaAvToyO0NTBC2wO76na7LkpRIEkXd7p2J6mrM0lqinqObhQQtSnae5QsOHI6BamP5lElVdP5ZLFME9+ZyTaKV6hvtUSLiSU6fxSA5nsT0SjJwBVbePQAARB9lukGNSEGzIj9NXiWxZcnU0jIXYx3sg3V1mW4j+L/Za64K5GkgRRdmaRrzB//CF0X2LWrPUU32A7TTUWPU10gYHXd0mFz3dqRpNtcdYfp9szqHVgdFKudmZU7sfJZsRJwfQ6ArnsO0xeG6YEReijgs43QwwHvIfpqko6k6GspOjpCTwV8RV63LUXPHKHnmHx2t/0IIXMO8vPuIvH8PaYnQdonJemHg3y/W3K9ahhl5gi9BlyB+rOh0eNY/0WSfj1IbqBJMOXrbgmqfyNJf/MVDY0+iP1/GPsNYr90dZL+tVwAlgP0XRO0vMi2x3h6PckskPa7pTK2GlgegWUbh3VL9nG4TQfZ/hkcDGiHAW0fopIRlgMpLjnqBR5AfQ7I7XYkefogzRLE8DzG3XRvmrivWEAVG1A3uouEM7mLd5dxqeFNXXAjbNIbkDvJZYNUlpHVZOTEMTfWT/MVFS13lDvcUpLn3nvioLuo3GHbI4QtdxjS+hwGXUcuXYMdIAPG7fCBwtDoE7DVTTnsCuJDJ3ZPzlkaYrVASfJ88XyG2ybY8ozQ4UB7ihe57kxy5SGuSXI9zFdkWpvWi6eMre1l3JDkMwLLpbuo1OvG65lJPqdzaPQlvJRLbru1XBKC2G17hKHtu83dw8K368p4ZYrPHeY1viJxZMALdlPckuQNZXxhktvME46RE69u+zBv6XTbAq5bsAa+Og/xRW487BykDjf8tclnd92CdfifwfIltuuFC5kviu0+mu22G2/WJHeDMlLCEKkj3BMo474Uh46aj3vF40Hu78SZw6wb55cLbn0QBjhuyQef8ZbxvmEemGR3hrFiBxUsZXZNYQ05fbA4pIaohpxXHiPJNkQ2q9j0Fbsd7uKMHowVRF2Ru9hcGOZrhYluGOEbA+1CG3cgWDPawMPOFN88SPO9htUlWP1Dwur8EdPwSf5YfZI/OUhnjfDtQKxFPAfqR/gO+P+nU3znIf7cxhG+J9DmrT3EQym+v95tr3uMHyN6RORD2+MkBTZa6zvK+Gu1w/ykSJRIZEY65Nvo9FG6lyQz/Rk/10n0kETHJXqB6B1aLlHdwrOqRqlMpPZRpDpHQViACfBK/B2l9QWA/pwBGkWuLJ6MBov9ZpIn2zd/BNDsSYBENjYAFk3F6SiVkH1sm8xNsTwva1miw8YGaL5LjYK7t2i+UAlvHaXNQh+yKBcTEHgr0SIAlmDpXaoxNy7gUZSjLEXzjYJVo+ScI0qL8WxUmoNUjxqDDhC/F2OrgWy0DOV1DdlpA+B2oKTuhRb7cXgMgiTISQdomuUKmm65gWZYbqZSy6000/IauSxvUJnlXZplnUPl1vl0mnURzbY20BzrKnJbN9Bc6x6aZ+2h061X0nzrtbTA+iwttL5JHttptMi2gCpsdbTY1kiVtnNoie08Wmq7iKpsOlXbDlCN7RqqtV1PdbbbwK8sxmizGrIDPNohx7ERfjpQuxuu+kxgo8hSKf6mtzbFz8Fjk/zCRhFkgbbaMn4RMWZ4eA0c/aVBqgDKy4G2FH8P7z8MtB2j0vonbHeTXG9d1jaEWb2t/hh1jPCrgV0bAfHjJP+0DW4+PwAvH+ZfJ/m3Kf79MP+lNsl/L+N/Jvnf2C1BELhWIwreqU1aKB0VdR2MN3tn0lL86Fiw+K21HWWWkrq8YKE5ZB2li0SvAAOuFu6O5qDpbeowrOaClebAavNgtYWw2iV4txg9A35bZuCvk5hTZOUH+BF+4D9QSwcIzs9P05ASAAD4JgAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAiAAkAb3JnL2dyYWRsZS93cmFwcGVyL0lEb3dubG9hZC5jbGFzc1VUBQABAAAAADWMTW7CMBCFx9AmiFUP0JXXCZZKIwXWVaWuKtETTJxJCJnElp3AoipSr9UFB+BQqEaIt3iL7/2cL38nAHiFmYDf43GTf8sCdUt9KddSVzKR2nS2YRwa06edKSlwR0zoKYRb9Knekm792Hm5rpA9JdLWaYc2ba4flL2simIZui6/76uROYA9OR9eA8gX2WKZyZ8ZCAHzLzM6Te8Nk4Bn42pVOyyZ1MGhteTUx5s59GywjOFBwNMO96gY+1p9FjvSQwxRJOARYrhJwDT4BKb/UEsHCDz+rqrOAAAA7AAAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAALQAJAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJEluc3RhbGxDaGVjay5jbGFzc1VUBQABAAAAAGWRy0oDMRSG/1i1F8devG3cjYKttg5YC/WCG0EUFMFCoct0mk5TMxeSqS7Ego/koggufAAfSjxTFRE5kJxz8p0vkLx/vL4B2Mcaw9N4fNN8sLvcvRVBzz603b5dtd3Qj6TisQyDmh/2BPW1UIIbQYcDbmruQLi3ZuQb+7DPlRFVO/JqPo9qMnGIxt5Bt1snVjd/5vsjpahxJ7QhKzWau43desN+zIAx5FrhSLviTCrBsBVqz/E07ynh3GseRUI7F4GJuVKb3/tpcn8aswzFIb/jjuKB51x3h8KN05gn39f4eeiTL385ZWToJP4javS5VCMtroQx3CNi6fLX0oq1DDyi5o9lIOMTho3yX8F/uNJmSJUrbQsW8jmkUbCQQTaLOZQs5LCQZMsMs6f0GChRkaYPmKGMKMpKCUM7o7CwSOsqVetIUQCF7U7nBcWdCZaqE6w8A1M0NVWkPgFQSwcICnU/uVoBAADOAQAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAgAAkAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwuY2xhc3NVVAUAAQAAAACtWwtglNWVPufO45+ZDJAQAg4PHd55R0ACDr4ggASSYAkxHUFxkvwhI5OZOA8gWq0PfNXtk9ouWqXVdtNttasWJ6GouNsuurVbt1273T5sbeu2a6vVPrdr0ex37v/PIzCh3e4qzpn7Pvfcc7/znTv41Xe+9DQRnaf+iunmG2/ctvr6BT2R3j1mvG9BaEFv/4L6Bb2JwaFoLJKOJuINg4k+E/VJM2ZGUiYaByKpht4Bs3dPKjOYWhDqj8RSZv2Cod0Ng5GhhqjMYa5cfn5Pzwr0Ta7Oje/PxGKo2GsmU5gVFasbVzauWLngBg8xk68zkUn2mhujMZNpdiK5u2l3MtIXM5v2JSNDQ2ayqTWeSkdiMYOcTOXXRPZGmmKR+O6mrT3XmL1pg9xM7lhi924zyTSnrcT4Nt24hsnTl9gXjyUifUxnl+rYut5uR98pQ5H0wNpUyhzsicnMC0oNuKy4DwbNNvf3xjKp6F69m7W9vWYq1R6JR7RuFxbPEI2nzWQ8EmvqR8emWKJ3TxRb2jDpcEzuviAaj6YvYrqq+gy7PPO+/vQmai5nclTXXO6ncpruI4Mqmdb8HxQ3qMpHM6nST1NpmpdcdJafPOSVb7P95KMy+TbXT36aIt/OZpoJP4n2D6+PptLJaE9GHHFbIpFm2lLdpk8/mmiSZda0FXyhE13ju9fUlNy95T6LbNki7gtz+ovnMmgBDGzux5opvf8r/LSIFvtoIS2Z4HTWQgZVM1XpWugXa2pJxGLwRWiaMqiWyWsODqWH2zAb0/TqmrZCT6lb46d6avBRHTWiaww1ogLWraiu2TFxi346l5aJFsuZpp3SZtB5TJWFqdcmkxG9pkHNPlolB1cWTa2PJqFZIjnsp/OtDYWwwUgf7kBVddupt2mNbPwCulDGw9OmTlTcoEuYjGhqg+zOT+tocRmtpRamWacaaF0mGuuTw9+AZS7V5xHsKzrQ4FIPXXqKBrkz1K7X6qONtBlnImcYh7INpbqeVmWvC7u1UbtM0cHUujTYlzBTwXgiHexNxNORaDwYiQ9DH8syUTPVGNywfwgFsy+YTgT7o/G+oLk/0puODQeX5fsNN3roMoBIOmGtxTSj+nQNsPQ26pSltzMt/TPd0SDcuoV/2r21ad7to24KMzlT0etM7aytftpBO+UsrmTauDS3yxQ2kwgO/qV73YW5d5tpOaXWmtM9xU8R6pE1e9EvFu3xkCneBcVqSux6HW4wjj8y1A7FOtORJFBk0TKDBnwUFU+tmbj5eGRQoCQtgFTiSuyRlWJMK4qOVtaJJGVP+UMOlvA8bCxewBgbF1vskMa0soSb/eljwa3o3LS2YfnKZg9JFNJdUmZvJhlNDze1Aw0Bheuju025Q7BoGeyqzz/eixNcNrlrl54DNthL+3yUof24IemEIDj2lPPGOFTV6Cz16HsdXS/2eg/TWRPbt+JqbR0Sqxh0Yw5L8q0alAy6CTAQN/e1xocyaShnRmCljdWlVtrRNtn0ue2gpWgeqHYL3eqjm+lAbvGJHQy6nUntWGfQnXB31AAHXNU71onDv4/u9tEdBBrjzgz1RdKwo4Gm1la5JB+gD4p1PpSbVlt2+0AysS/SI2D/EczTG0ukTD99VKLcHXQP5unTxsVKgOF1fvo4/bVMckjuMjy0ojBTK2KgDm2fwFGmE5vM/TlEOOWq5CHhATrso/vpk0JVzPju9ICfHqSdPqqhh5jmVrecGck+Iyr8jQSoazNgXH76rCB0Df2tKA1ulsY+Pm+B+8OIE3CutT2pRCyTNuVc/PQFAaSF9Hes3JeL30d7Nb0LJvpL3ZBgfwSn1zd/cXxxPAxqVrLPYGQ4OBDZawZ7TDMeTEcGccmBKPui6YHGxfGWRLw/mhwMpgciaXyYwaXFgzsHIrgpnZnBpcGhZAID08NBXNdhWcuCjQYbNhrtdsBWUFwqGE3hdicFowDhfTIkGElCNfsew256OXt4sD+ZGAQMpJOZlOBdShPNRtlYMbsIdiVjoeDiFGrteYJtCctEVnUeMHPUNxRcuji1dHF8bW8aB1JUHbQbLo+moungQDo9lAo12VjYKLBoU+kCiW4SxLLQSKueb5DTSfTjrKJYodh8QPDWfstaPeIkwUwK5okEe7FJbLe4a30wZZr6UILRdEqsvTcKpwIGPgbX6U8kByPw9/NL4M+OEtSglGN/kY6IJz4B7lto3ZaJp6ODJkihaaPLqI/GJJxPAfHozAwNJQFnJm7zWcVL5y+oDnRfomM+OkhPgiJZPg4mIxRpIhrXXIH7GtNEqyrPniaq+Az9vXj/PwAMSrQb9BU/PU3HfSCfJwALmfh10SGmc0oG4/yql0+gfxjRdEV0yCKSXy2hpI7bX/PR8/TPgCkznpZAzBSYQA03xDODZlK7HbR+gf5F+n9jwkJFXQz6V1x15GPtiaS5IWYOYlYgw7eEk71I/wZgipv703bDqVQlH8L/nb4j3b+L6HHadjZAzWGDvg+NgSgdiMh++oEgyUv0Q/CxSXMCwZztyYhkexGL3ghU/giMOxXp14gkczEt+bMYHZT8Cb3iox/Tf8jKIK/uwT2gKdjrf1qQ9yoQNGfudZn+fgGirZl0URT5BSyFEFZcyXTpXx7DiieCfq/TLyWIvSEHWrqP5QC/8tFr9GuEUx39i1Rpqm4rbf1J4+Zv6XfiHb/HwZZa0KA/wJX3gTngzN6SYPjf9Ef5uEdGIdb5etFNrlTKuv8lGFu3JTWU787Yflkz0bFLM9xSIw1Gpu8vxibYwba1mW7q2ta6xs8OdnpZsYupuSMxMd50bWsLpoDCCF7AYUSLHMT3Fq/iYSMXqLUtLT9PGezFaklET9DbjkS8IxMDeVxdIv05s0fmrg2Xsd/HPp6SyyLtLRg8DfkBTrclFknhfldOuHS6EoMrWPJqrrTulY7QXIV7xeU8k4mbPHwWbi86w0n6zP1b+yfJk1r9PJvnAH15LlPwTyX2BiO19qYyPSk93M9BoSQ1PB9LNnp4ofDH1pLkhYO8WHoiEZ5TYpVczDQYObEhV7wrGWU6u3ri6daceti1XOfjGq5HUEgn1na2tLZ22po1WsZoQl7Rvn6lh5fBl7u2b2xY7eEVln3XDacFP2eWMguoG6/kZtF4lU0XhRHy+SBzHMpdGAS+gaZ10d05KscXAFiqW63O5XyRjy/kiyWVOyzf1jKVF7vjOoRwZPaljNXC68WHkfeWX7pt7fq2Dbu6Ojds27Vpa/sGD18ql1+brytlJjclBAannpLecCtv9vI5vAXWvGzb1s0bWrZ7uB3TIXqL+xUSet5q9bzsFO0sl9pmKdKJaQAporGfu6y6y606q9+7rbpwOX0HHhuLDPb0RRYV4GHRuUy9ZwyGEw/2L4USP+/kKxGE+appLkbqWV59SodyjjAtKFg8Gt+b2GM2tWmF2810pD+izWIwEtKywUIF09eK/cQehxEDib5NYJHIcha1JRJ7MkMlrv9kA7cPD5l/WaO15JnH1pze2hKJxTqB5zCUyf0+7uPd09yMtM/ZGxE0+1BJELcfGUqe2P/P+WmcBQgjT02CaWg9NYfz8zW8ZzoRQ7kpGuikXVb0c5wjiNyckPANLuFsjPXu8TDo3bktiQwYrX6q0S4YHNLDCg8TQbDWoDw7WgmBhxHA5p1RE4P3TnzCG0YyMGgwcmdPPBJPbI8OWs8om/18HV/v42F+j4vkn2nrLnEQv/hMLnGGxbbh9BKD1gun5nt8c2594Qy9A5F43IyltGVbrILBt+bY8WldkGfsMfg2ZLnJfR6+w8e3yAOKT0KI1Y1pfnFaX2p+WPp9fDeGMpJhA6xBJhUAnmyctGPQB/iDPj7ASJIrkM31mC2SEL8rEzXTseECtmKwbsjxcv4IH/TRTP7oBJuCupsSAj4GxE3FTHNIsujN0v2v+ZCPP873wh3ANXkfI2c27CzIzw8g++bb+TBurBxDIpOWtMfDn5KsuEQ0KsqK+SFkxfxpsKcg1kbahOwzEk1LCigukn+JD0b0YVmPXTEzhNkllRZAlO+fxdKSVmbie+KIZB7+3IRHg0IOw0it5xbcE8wbSZWQsqAVURFEv8BUO+n7UYkUp5wfRV7EyMV8Ou2QrDPmp+fonwQIjxQ/imwtUiQL0xcU0SOxkTGYXDbp4S+BiE76A4HBT8p7XQJx9mlq9fFTfBz3YBuOQ7JdD/+95X72e5OfvyyM/yB/BdUwa6+50Uz3DohXnglE5BWGiTz8HA57bySWMYXFzJx4onbohSd+lZ/30f38NaZVweqkCReWU1zcF5QsMlVvJbCReFB+/5BsWH6xktxYfAW9BlM1Hv46WJLWTYYWR0MP/wucshE4kvbwN8HY1hc9Fnj4RRDBImNpEMnnMzbwFT8WdCVjwEEkN2mxJfKsqTblQaehWAQ3Z0Fp5jORJvw7f8fH3+bvFjLNPACfljr6+PvClF7COSX1y+j2hJ9/KCnrQn4Z1G9tOi2/N8AUTbCG9XrTGMwd6eKUh39s4RmRwtk3JoC1P8UViKYsNLbyKH7VT0GaL573C/EBbQ+hKH5+HTyDuvmXGGwmgdJVeR0vw3byWQm/yb/yAj0lxREtMkkz70a/BcvAFL8r8umisQb/FxxlSCpicT//tzjmH/gtrFTy3cjPJy3S8rbGEjubZhDicUWoV6zpPvxoHTxla39/e8qvHFaT088n+FnsUrlhTwRUhLNEsuj1VHtAq12/xq88yltGa5UPfO/0dkP5oQKwoAPJtl9NRfatpihkAc64rqgA5qFiOra9Xh4xLOfMhTKPmuGnIbpWtJnp5y/qe6/OykWLCelg/vqr2aekziWeZwqJipqLREXNg5KNKW0+jzpHGy2ViO01C85aIuXJU3U1Xy0AIVcLc68ERYk2vEx+51GLgTklUtVc81IgRnEwSqYweWcawTSS7GuxyilD1VhMf9dqmKDttP52PyhUp+q9qlY1MC0v4FBxhjz5YI27qsmnqtW5kqHlh1uq2u3LfWqJWqEvXKSvLRo3/WolgBCVzfiQDDpQQOB+gR0rIEjk8ajzYeFEqlGuqketsZ77L7NfOv3qQnoFHENdlAug1s9rAv2moS4BFejqzOcWRW3Y9jrV4lVr1Xr96tyW2AdKphORJdWn9y6FOmqjuhR5kdoE/fZFQWT2pTxqM3aZ+8EIGV6xP4jNOpE1m/FeeWnzqzbVLuM7gA890biNmR51WY4g6VHYqQTc3E+Aahs2KoQGVCsehW467VDb9Zu06pKX+IHBRJ9HdQNeVq1c6VFhuY0lnuqso9nhU51qp/AM+RVJP/u1nbY49nqV2iU9r57wcm83G6pHTAC6sDGR9Ks+2ulTvQqWnFU96YuL2i19Bib85LpRv6BKJFDX+NQe+ZnAKQ/GHjXIdMH/6ll14nzysqoSmFKBSZ09MWYmk5mhtNlXhAhJWXs7aLZNfS02duqjn1ULy2TUXlAytY/JG83N51fDQsU+rq4Dhym4Nm4MmJTZm0kLaQnCgwejKflLHClxdfAF9R5ZVlP1DnOfjifqRh1P1HtBjHOxFuRs4k8Mmrurm0/5XXfSl+Yi3qduBe9TB+AjQtviiSD4RbQvKCRIZm30qNtxCi2JPhznFEBM7572yNB2UZ9pmlzljsxgj5m0a8oLP0zq9CtFFeQiA6HSiW8e8uJbhfw1BS39NEXLqTQN0ksYjxKrO1GqJzfGEAVrw+GdozTjGM0MbxmlWbVPUKDuCZpT/wTNa3iCznlMB2KvxFprJB/Fim7ImbVZWnov+caoacsIXYzSivCWZ8k9Mv5m7TFaFW4fpdVPX+RodlY55z1I82qrnMvDIVeW1hwiX30AXy7uPuDkkfGf1G+pPUpAiUO05BhtDO+cvmmUttRlaWv39HfJZ5a6thyj7jDXjtIVj6LvVbDY4dM7X12is+Mo9Sl6hhaicmE43F47vX+UdkPxQ1Rdr3WZX3+MoqLsNSgPhttP0LT6p52fJG+9Y/kIOfnZ0xdKnL6QfKtl+Sa0Rd2Fzwj5x3E0Cv/VEI3DZsqghXahTAordeEdmmLQKubAOAzrkN4oSh+WPmt1n7r6cVpbGH8JvrxFi9X7sEwtjhtsgrZgpRjG78OxHsJMn8GCX8Bsr4LXCpeQv73ilfBtH+N30O7B+FfrnyXnY3XTU2M03JGlGxxP0XvH6LaQ09HsqiinJz0hd5VLHaZgwBlwZ+n94WbXA+NvNgTcjiqc4YdHxl/B6R8MOE+QJ+DM0scasnRvuENMFnKO0n1PN7scze4qzPEgNTZUuVdU0PiNY/SpcMjI0qdh57KAs/zcLI10Y35DDHvADaf4Rr1M1hWGRp87JPqFs/QIbP5om/EUGXBZ6Ffb6azrdNV3uhs6pz8ecI5RFgcyFsZ5HD0u+pRrfUbIU7srS0/VHodh5sCP12LT1dSk5Up8ivwu/Rj/5k7uc+R3jdNcMvRZLNSfGYPuYIPukoM5mzRBRQ2h6uA4rO46pSvRW+QdpxkT5rjLQAqIROOkLo/jdhaGYbaNMvdUchaN0L7SJN0O2gui7Ner6g+ndoGpUMANF3gALvB9fPfKL0T2PR/ArkXbC2q1t6+A+HK47QTV1j19oeOieXMfpGDdvOUhp1yP2gBObPcYPXsvuRwPH3DgHH6E/o88nLcMVnqHqgz6R+Y5fwD5k9Xd2v2AzpIJ2s71WxuVvniMnpdbN0pfz9I35Z5/W+75X+HL9xjX8iXxlIXwlDq4zctj9FN9OX92yDq7n3ePjL8A7+qpbzhGr4U7pM72zzdH6TdZ+q+Qs8IpLuqC87i0c7rvo2kNAZejCr56cmT85w1h7QVZeht/RsZv2tIgMu8TuPPvPCYfRW5Sjpsyhdbp7c7QchbcRuQCWqxlNTVreT5dpOVG3D6R7bRTy520iz6sIaBfywFKaJmhu7WUT+n3EdjiEOQh+qQuf4YepoKxDwuAwOIGvaj94Xk5/BU4X5LvRZ5nNxv0Er5Ip/nkLqp9DX6jPfctOmscocCpJ0C9PYchSxzMT+oU5LEXwVzOQqsGsVN8zwef68OAuyFxteHd2gNc30RXRCN1sq627gi7K9kzxlOf4fL2I3QObjXP6C6uhQdkeRbCQyUHsjwPx/gJBBKaGnBVuZ1XZ3kBThhti3JtvoArhPYp1kHz0pC7DgDADVk+N+Ss5OXAMgBMAF/Py/LqLK85xheGA4azGb5wb5Vz1yhfUo7J1glMBdy7gFNAHlmbtsIJtgJ59I0IuY8wcMyo5E0ah/wNR7gtZIzQjADqNDbxm6h7V8ioC7gDhkxXJ7Md4e35CcX/ZEa4tkxpHOHucMiTm7JMpuwYocqAJzfjDTJjR23AaCia74qJ89lfXfmpj1AAIwLu+rov8SDRFrGwDnltQFUe0hs19Eb5Wj0+lR+K5nA7btu9tKxeR8YpVmSEgYMCqJYWlZxBAAQC58YdPc7t3DHGN8zgGwcr+abbIqucHHIH3M9Sp1070/nRT9DGY3xLOBzCYd+JvfBdWX6/OMCHw+3P0ryAu2GM78GfCnrutjG+b4R8WwLu9hGK10PgjMcfBwBEAu4TdG49gk7tUb6fZXefxBhZ/Z5aBPdHpamojtuP5xTHjiv5Qb3jm7L8mUoeEbsZE/ZRW28rkR8V8GC/f6v3i4GfL3TNdzAm6aBDUCX/Xe0oP36cplOS9qs3+BG6nu7S8oN0v0j+If9UIfLw7/ikSKWUS0uvqtCyQs1QyyBnqoCWZ6ulWtapZVpuVtuVCdmlduj+V6qrtTRVQstrVVrLvepOLe9WD4m0oIWfpKpxulCCk8tgZXC5wefIJyGlBUz4TtIMHsf9LdHBDkpx8kxo0w0eOmo3l0/arAHqEvKe3ow2D/vtCaYVT5CLhlYPab5N8yo911z05H26oGOkrpTAqysNvsXgA06Db88vLYEJdfJxiw2B7kL3263ut9jdPRou9SR5yJX1cnVUmPkcmbmo2u4vvDxfndOvTsL8wXy12NprP3rl+GJQ07MJFTg5gx/RuJvEvh3AXbBKCuDbXOhZjai7GTXXYEQSo+/HnEeB0E+Dbn4FtOE1hLXfIaL8gaZxBZXzLKrgC2g6b0AmuAknvpuq+HqayT+kWUrRWSpCARWl2eoRmqPexAoV8uZj84o01pD8YXtd/Rg/8Vi4ozZ8hObkoOJoHioq+Rg+63OFRdZNyfIzdu8G9P4H6c3/mG8Cd8HMyDJAqFmHQoSdjQZKFfIaZmmg6rE7+AJfOu8+gSqX46Iqp/7mqeDfNjvn1WKFkOt+Kqvkf5JggQRk3hj/c8gtH4ZL08iQxxFwd4J4dlbyCwEPKCTYLqiEZvwIDJX8DeuOd1uqd1sKghrdtsrFIaez2agy5j1EX66rDWu0BZOx0bauGGz/tQC2oLH21jU0fUusM8bfK7LLvGe4Rugv/0CjcXmdjMG2Qs4RYctY4Efdj2FZ2WDAOa/KkA155MMLK4Z8btnazlCZI+DB1rydroAP2/tJoAzbwwIP0rSZrp3A2hn8SnSV64ABmndhwHkcRj5A76P/hJk/QPdo+TF6VMvH6CUtX6ZXtHydfqOldTgPWYmOS//BDSqX4xMSUahhDSvGSeRTJ6nC4KdO0hJNgRstiLE64YSdemi0uFb+PwppEipS3JkWWp2NElP8kTZJNmXRdCiKLFh+sLU8xzMbdwOZsePOek0+XSWP7GdFRybEGbGWf34ImRgykUfH+LWwkIM3QA5OECL/owHX4/ybAKp+n+U/yoEFnEf4nZDb0Wy4mz11eqynyjhEs8Gyw0eUajaOKFezt66hyqjyZpVRr7NpnFGTEIxN9ZJOhwydT/9SmMWqcMgrGXWzz9FcVlVW5XuQzgkYVWVIqv1aw7KAN+DXWXUZTvTlgBcEyDiqypisL+XCvM+Tb5VCvbFxb63tiQHvrkpVVRze4SfIA8C/n6utQ3D8HujNmJpVn1UBbGiEp3VXedyfoj9KsP+9bCgMNjemztZUzl3EqniWGFMF7VnVopChbe4tZfNcN6EzMJBPDCS7Mqp8VWUw0TG1BH4NUQ2NC6nq46pxVC0bVedl1SpklWp1wJD7fpXYcWYIw1E1Ql5sEvw+4D2eRyq54CqEbVv3rwQ66TB/KjyB5Mi996irw82eB3hxlXHvO/OFQnxP3KJdvKLjBKtKdcGYuvhxtSGrWivVlqzaqinVi1bC01Cp3oV9cscx1Skpiro85MbFrQnvrFTvduzqrFRXOHfh6ro7R9WVWRWBWbOq/xClxQgdYgKcKqqi2P2uXdh/wIAFjqk96DiqYg2whfbN6oC7UsVDHqeAQsjrANQFPLCeuhaH+30Qz3L8N1tmSuPLzIYxtT+rrsd2UfI0iGw4QcG8ozhhsRtOcZT6OtwNdVO3hjZ+Q9wAlEx4UD2uQzFrQmhQt8hodVuluqNAmpDVRGmQQ2oOUqT3aHkj3azlrfQhLQ/Sx7S8jw5r+Vl6RMtH6YiWzyAnFfkcPa/l1+lbWr5MP9PyVXpTy9/Q2yI1pIj0cFDLRXyelt18Bf8A/GwHp7TM8H4tr+dbtLwV/FPkYX5Qy0/z41pm+QUtX+Bv8k8QlV7kb+vyf/Dr/DrKr/PvpawOqPc7XDyqJauU+qD6vC6LlPIX1GO6LFLKR9SoLouU8lH1pC6LlPJx9aIui5Tyt9UPdFmklF9Rr+qySCn/Qr2hyyKl/Gv1ti6LRNnhdUyVspYoW3xRpWn+27RF87Dut6j8HRKaxizvWF4bfDX+Cl+znjMAwjPdhjxWlO5g0EqWt69y/fY1V9DaN8lM9nOYY9KZ1rLF1CZpV1N0e+gMqnYZas44AlmpHjqeCe+SAFS6g6GWsM32vCW3IXPk8mbXOCjbJPPAYUTVdWdQdXKTsm5tlNzfau0WsmkTzr58lES1WmKPVnukbUnRELJaoKlKtSB0nkT6r/aIdYumVSm7F8kjVlEDjxYanBMUqSk0BIVuW4vltKuyHhy67adRq1rz3DjNoYux73bUbkOvLsx7FZzlGkwyjH43QrO7YPX3k/yl2zJeSn7eQlO4g6byveC5h8FzH6YK1U7TVRdVqitphspQlWMzzXRso1mOLjrLAZ7r6KPZjgGspUQT+VR3Q/qJOUoOoMHV3PM/UEsHCNVrAi2MHQAAjToAAFBLAwQUAAgICAAAACEAAAAAAAAAAAAAAAAAHwAJAG9yZy9ncmFkbGUvd3JhcHBlci9Mb2dnZXIuY2xhc3NVVAUAAQAAAACFk2tPE0EUht8B2oXSUspNsKC4KraFsgjUVGpMDIkJSb3EGox8m26HZWFv7AVjjCT+DX+FGq2JH/wB/iL1g/FMW4RoKzvZzew753nPmZyZb7++fAWwjhWGN8fHT8qv1DrXD4TTUDdUfVddUnXX9kyLh6brFG23IUj3hSV4IGhxjwdFfU/oB0FkB+rGLrcCsaR6RtHmXtGUHqK0erteX6NYv3zC70aWRcKR8ANyJaG8XFpeK6mvB8EYEjU38nVx37QEw4zrG5rh84YltBc+9zzha1XXMISvYIBhdJ8fcc3ijqE9qu8LPVQQZ5g4Ve8R4TR43RIKBhlih5EpQga2wxC/YzpmeJdhILeT32boz+W3k0hiJAEF6SQSGB5CDBlasVyDYTJXPfWthb7pGBXJnamh9jIIha1gkhg3ojyTbcR0tccUHxIluF1J4gKmhzCFGYbxLgEKsgyKJwXLSWIOEwnM4hKVzFvbYVg5W8vmHvdr4jASji4q+Wq3zVcYtPOQf4qchyrzXmVY7clubfVMePN8qEvKBZnyBjU+t9nTefrPWheDgjRYpK5u0mFjSNVCOs8PuPdUwgzpqumIh5FdF35LQYZ6rIBhiN6MbDpdhxjNk0jRt0h/U+ijASQKzz9jNPsJY+8hnwzGMdGJWejEpAsfMfYWiQ+4uNjEZRnIsNy2/IERYuZxpcOsd5hMmxluM9eeFd6R2HdC/UQaGk3jRElZOlzvONzCAA1gvO2Qkg6zc03k/vL4TtSpR3/LI9+7imwTS/+tgi4Qucjl/t9QSwcIq+YLyUwCAABBBAAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAmAAkAb3JnL2dyYWRsZS93cmFwcGVyL1BhdGhBc3NlbWJsZXIuY2xhc3NVVAUAAQAAAABVkE9LQkEUxc9kqamZ9mfVonir/vh6kAlmEUQRLYKiKGg573nVp/Ocx4waEQl9pBYStOgD9KGiq9JCLty598zvHJj5+f36BnCIdYH34fCu+ur4MuhQt+7UnKDhlJxAR3GoZC/UXTfSdWLdkCJpiS9b0rpBi4KO7UfWqTWkslRy4qYbydgNxxlUOTjy/TKzpvrvb/SVYmFAxnIqC9X9yn654rylIQQy97pvAroMFQlsadP0mkbWFXnPRsYxGe9W9lpn1lLkKzIpzAsU2nIgPSW7Te/Gb1PQSyEpkJ/6HiyZKx1xWP56woXaG4cfsy82eoxfhIa7Ni8CyZOwG/ZOBTa3Z+nZbedRILG985hDFksZpJDPIY3FRSygkENmOq0IzJ/zk1HkJcXfPMcTUzwVxwyfgiuLHPc13jaQ4AKWd5+ePrG8N0KxNMLqBzBBE5OIxB9QSwcI4CcwZVABAAC0AQAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAuAAkAb3JnL2dyYWRsZS93cmFwcGVyL1Byb3BlcnRpZXNGaWxlSGFuZGxlci5jbGFzc1VUBQABAAAAAI1UW1cTVxT+DiCTToIiFxFbagwtDSEhrUiLUWsVsVADWEKlsRc7GU6SgcnMdOYMl15c+uCPsA/to68+BZW16kPf+t7f0N/Ql6b7TMAkQFebtSYzs799O998e//+94tfAVzAdwwP799fmvo+VtD0dW6txjIxvRhLxnS74himJgzbSlXsVU52l5tc8ziBZc1L6WWur3t+xYtliprp8WTMKaUqmpMyZA4+ef5ioTBBvu7UfnzRN00ybHDXo6xkmBqfHJ+YjP0YAmNQc7bv6vymYXKGuO2W0iVXWzV5etPVHIe76duuTTdhcE/6zGoWga6CDobuNW1DS5uaVUovFta4LhR0MvSWuMhte4JXGpEMZ+PZwNuw0zLNpdH6qy8MMz2vOZcYIs24ApWh0/DqbbXHR+9GEEGXijCOM/Q3Yqdt06TKdDBPQTdDiFccsU0ZGU7GDxaJoAe9Kk6ij6GvATX6VHCKyl42LEN8GJS9E8FpDKoYwBmGgeYO5yzHFznhcq2i4A1Z7cABg9A3VQzhLEOHaWurDKcbTk3xge85xGSZYYZjuml7PIK3ZeEhjFDuRq+zmlemoyiIqxiVTfW2YkIrSPbG6BjrfDvHxUEeyEQ8pDCuIok0Q1cLpOA94tAQ3NWE7TKcaomd27NTgglcCOM8Jhl6DuMKPmBQSK0LfEtEcBFdYUwhQzRYZCDu97M2aYdyXsYV6UfMh4RN1BhW6aBv3Uq+H+GaCgXXGcLeK7GNh3CjRZZ1dwU3Seee0FzhrRiiTAKKH84pJTaLORUf4xOG1zy/4O210B+fO7KHLOal9wJxbXKrJBOTZOYiuI1PJbDUorIbRiBTzd1WsEyeJfltRuKHiTiSmztYUfEZPqdA0g3D1BGB/zPVXXwhtfMlwwnfoh1hFA0pmmBmovEDI3N4hL7GPTlC3+xLT2p5cWZL5448noLCPhBUXS679mZdk6T/Mw1gybeEUeFNgcX9CWti+bpvmKty3RC3wzOua7vRzTK3onKcCI46r0Y3WqSpuxLC2r983WAcTRUGKvS95GqzqKHUf/Df0gUd3oYjU3wr/0h7iSMqZY84/F55oaIEn8ZgmjYzjV5O0PInVpelD32OrGHxBb9S4G5goRV7jDQufyRIhOhi2KSXcXQSAvySqOLET1Ceof/pLgby+ewOXt/FUH5+LJlP7CBaxVtVvLOL0fytHZDzu8/xPsN88jlo4T5Ghh6uMuQXqpjumani1uPanyl67g5XsZjPdFSR+7n2R2KwY4yseQKq+GrlSe23xDNoT7NPEEpS9pe7KOV3YeQT93rWd2BV4Vbhje1g4yU12Uc77QfoGEQ0uEcxjAfU+jBGgvcHeBTc27BF1mvoDNcwhnYFowoGFNoG+AtXa+gAU2j3059eQ7vEw8TMkDRwibaRgTBKsU3XcXIhZyrRhof0TEND1ja0/wNQSwcIaxwKbzYEAACABwAAUEsDBBQACAgIAAAAIQAAAAAAAAAAAAAAAAAtAAkAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJDb25maWd1cmF0aW9uLmNsYXNzVVQFAAEAAAAAXVJdbxJBFD0jWChuKWCxfn+sH7QV2ISKwWqa2Ba1CQ0GRFND0gzLAFuWXTK7S6PGJv4kH4iJD/4Af4/Pxru7NJK+zDn33HvPvbOzv//+/AXgCTSGb6enjcoXtcP1obC66paq99S8qtujsWFy17CtwsjuCtKlMAV3BCUH3CnoA6EPHW/kqFs9bjoir477hREfFwzfQ5RLzzqdTaqVlbP+nmeaJEyEdMiVhEqxXNwsq1/jYAyJpu1JXbwyTMGQs2Vf60veNYV2Ivl4LKT2IcRd2+oZfU8Gq8UQZUgd8wnXTG71tXrnWOhuDAsMStdwXGl0PL+OIVkLqizhaq3G/nPqms/v0L0YMrX/Tk3KWf3zdW+5O2DIzkvNAS+Vnza9EUPsszEOnXwW1iZp4okth++MkbA9l4HtM6xOuGl0uSv25oxa0qTsR2qWgkThULPPPu3Qy9R7vQMSFl4YluFuM0TW1t8ruILVBGK4Slu+brzcq1WPWs1q4+hN/aAax3UFCVxaxEXcZFg6+4r+6k4ctxUoYfKugmTIVAXLIXugIIW0zx4pyOCyz9YUrITahoJsyPIM0V16XKQpiNEPlQBDHIvEmD88QGWGSzNMznB5hjQpQJoT4Moszs6Q+deks0jRNnkzwtLG4WG73f6Ba5kbU9zK3Jnins/u++xhOpeaIhedYj0yxeM0+zNF4TsQuEXovIDIP1BLBwiOMfGNEQIAAAEDAABQSwMEFAAICAgAAAAhAAAAAAAAAAAAAAAAACgACQBvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckV4ZWN1dG9yLmNsYXNzVVQFAAEAAAAAjVZrbBxXFf5udtez3k6TePJ03NDNpvFjvWuTuM7DSdM2bkpNYyfZddJsYmpm17PriXd3NrOzsd1HSgO0hZY+KCE0UGhpIRRamtL6ISwaiR+pVAmJH0j8QSAh8QOJP0hIvKSG787Y8TrZVGilvXPO/e453z33nHPvx5/88kMAd+J9gSfPnEnsfDSS1jNjRnEk0hPJZCOxSMYqlMy87phWMV6wRgzqbSNv6GWDk6N6OZ4ZNTJj5UqhHOnJ6vmyEYuUcvGCXoqb0obRvW1XOt1FrL1zYX22ks9Tcdqwy7RKxc6O7o6u7sjjQQiBUNKq2BnjfjNvCEQsO9eZs/WRvNE5buulkmF3PuSN+yeMTMWxbAV+gZUn9dN6Z14v5joPpk8aGUdBHU2VbItIxzTKAmsPuJiKY+Y7D13T7xZYvojynC73kKbVKWUi6jJWMWvmBNoO3JxPr4up2G6o5KI9ZtF09gq0tC61V5tH21EBX2vbURXLsTIEBQ1c+X96U7AqhNVoUKHi1noEsFZFEPXya72KEG6RXxsE1GoeCm4jSWPCLDtl1/VxFZ/B7SFsRFhgXTW0r1iqOEnHNvSCgohAw3U78ljfEcJmbBFYXWt/CloE/HlLHxFYv7i8yrJrpQ3REFrRLrCqBkRBXCCQyVtlQ0WnDFMHPiuwYoR7sM10RcbiiJ0PYpvALTnDmXc/KdA879LNEBozi7ndbTeqVFZCtySwXWBXjSU3ao7fxMrOEEO+S+BWSUO3jaLj5dbK1ralsVOxG3tk0O9aOJ+i4XQeSfQpuFtgTS3ebrTvDeEe7BOop4Mka7BA46tba7K5D/sl+H6auwZOloyMmTUz5OaoeMBD9AlsrpmsN7p/UFI+wNNwLHKt2tc8e7odwEEJOsR9VR/QtfpaRCaQrGf+DtJMNXIfm0wQrAut1q6O4phclLpu0SHdGQ3ihIoT3vwXuOvq+eSovq17e7JSCGJYxbAH0snxEbOUZDsxPK8ZAYUaKagwPFS2CuW5GfVQUlBx0kONcYPc2rhljw2aBcOqOEEUBESfigIsiSgt6VfehhTYtHVaz1eMg1l57n01j9JBJYQyTrMGF2f7io6RM9gIJwSCJd0us2Cdm+QOWTyCR0OYxGMscvozR3THuO/6AjpDwuwHZ/AlSfhJaax2pjv4siT0lSWE9lkWbwi2pacYMZfQvOYmpOjpGXwthKfxdQbBNqg2ykE8p+I5L2LPM6ZSPbmPl9PBbLafsy+qeNGb/eZCt3CN7p/IGCWvK35LoKk61ZKTRUefqAJ8m7m1pzo7whU7vzeI73h1leA1ZxVVXJDlcR7fXezln94UvBJ5Va75vsCGxflEpegwJ6oYvCZw74AVdg8+PG46o+ExYzLcsqXcEi57JWqMhM1ieL79hxfvqnCW9ekiO4L4IVt51rILulO7cZ2oUnkXZO329yZ+JI/zxyG8LptLVVgHR21rXE/Le+MtgVivVcmPhIuWE5Y9vSY92yos0PuZQPTTI3fN/Hzw3pEMfs4ro5dvBrbRpMOT79dLgxLDln/ALBoDlULasF0NGthuFb5kfPzi1cevBnnxuSMvRY7LwCTCCv5fImw3tXWAONUebY/GoqkZaHNYnRqYwZr4FNZNoXEKTdPY9Io4HJvD5lSPP9boT7XPoHkasWls1bqmseMK/tse1bqEfxo9/dPY2+Ofwz2pVE8gNoPeaXzuI6ybw8ZUY2Aan2/0D8+AoMM9gWgqNTQ0FG8MTOGI9lD8AxyXBuLDUziuDVF8eEF8WPsixbRvXkxrIxRzC7M5zaSYXxDzWpHiqVmMS80sHpfKU9oTVJ6dxVc95bNSeVb7BpUvLEW+oL1E5ctLlS9fRKL/Irb3z+F8Kqa9Qv7fi3EfP7g8h9dT2huBX0FJpbQu33DS356cxcUZ/ORyIw1sdQF+OT3ga09qb8c5yai8e/k9rEQEzWITzvG23+qOW3GnSLjP0D2ufDcecMc+3jByHMBhsYXFJEcpH2HXl7IcpZzCkDsO45Q7lsUmOYpmEXfHDpFwx4Q45s4vw3v0NgjlKnO9TkFA4T2lsJMovARxFe9g2bxSKDjXq+B8w1VskBpXSdhmOfPTq0w6n6ckDvgX1uEXtPxH7JAI/i/DfqZkH/zkHiDPOjzG1U8wRc8ySZ9iij7LJH2eyfgSk/QcE/QCU/RVxug1Ju6b0PAWVuFtUnsXa/A+1mKWPuawHh+iEb8mqY/QhI9xG35DYr/lA+53uB2/Rxh/wCb8iZH+M5n8BXfgr9iCv6EZf0cL/sEXzj8Z/f8gik/42GI9izq+rerRIfiwEiv4qlrFs1nLh1QTukQzz2cHusUg30XHuKsG+cDxCgkl7inA8a7oB2hsZ1GwVK6grtF/KXYFgdiljRcQEJdkNhDQ9KCXMf3MCX80qb0Rm88Ztz7loayBr0GG1e+GtUwn+DdFGdU6CjwR/nwu3Pc/UEsHCFwGuFkvBwAAvQwAAFBLAQIUABQACAgIAAAAIQCwt6Me6Q0AAL4nAAAQAAkAAAAAAAAAAAAAAAAAAABNRVRBLUlORi9MSUNFTlNFVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAASaCKSqAAAABAEAABQACQAAAAAAAAAAAAAAMA4AAE1FVEEtSU5GL01BTklGRVNULk1GVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAEn7k+wUAQAAVwEAADEACQAAAAAAAAAAAAAAJQ8AAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lQXJndW1lbnRFeGNlcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA/eyTaHICAACcAwAAJgAJAAAAAAAAAAAAAAChEAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVPcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAEDyAZkkCAACbBAAAMwAJAAAAAAAAAAAAAABwEwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQWZ0ZXJPcHRpb25zLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhADvx0rxlAwAA0AcAADwACQAAAAAAAAAAAAAAIxYAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEJlZm9yZUZpcnN0U3ViQ29tbWFuZC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQC/Vfb9ygYAAGcOAAA9AAkAAAAAAAAAAAAAAPsZAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRLbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOX+FrA4AgAAggQAADwACQAAAAAAAAAAAAAAOSEAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE1pc3NpbmdPcHRpb25BcmdTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCcp5NdvgIAACsFAAA9AAkAAAAAAAAAAAAAAOQjAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25Bd2FyZVBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAHTbTIB3AQAAOQIAADgACQAAAAAAAAAAAAAAFicAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAA6K3lYYAgAAWQMAADMACQAAAAAAAAAAAAAA/CgAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblN0cmluZy5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDrJkp0gAEAAIoCAAAyAAkAAAAAAAAAAAAAAH4rAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRQYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCvFpiWaAIAALgEAAA/AAkAAAAAAAAAAAAAAGctAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRVbmtub3duT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA96txNgsFAAAMCQAAJgAJAAAAAAAAAAAAAABFMAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAnq78NesEAABZCQAAJgAJAAAAAAAAAAAAAACtNQAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAdNUF+0MBAACTAQAALAAJAAAAAAAAAAAAAAD1OgAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmVPcHRpb24uY2xh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", ht = "# gradle\n\n.gradle/\nbuild/\nout/\nclasses/\n\n# eclipse\n\n*.launch\n\n# idea\n\n.idea/\n*.iml\n*.ipr\n*.iws\n\n# vscode\n\n.settings/\n.vscode/\nbin/\n.classpath\n.project\n\n# macos\n\n*.DS_Store\n\n# fabric\n\nrun/\n\n# java\n\nhs_err_*.log\nreplay_*.log\n*.hprof\n*.jfr\n", gt = "# Automatically build the project and run any configured tests for every push\n# and submitted pull request. This can help catch issues that only occur on\n# certain platforms or Java versions, and provides a first line of defence\n# against bad commits.\n\nname: build\non: [pull_request, push]\n\njobs:\n  build:\n    runs-on: ubuntu-24.04\n    steps:\n      - name: checkout repository\n        uses: actions/checkout@v6\n      - name: validate gradle wrapper\n        uses: gradle/actions/wrapper-validation@v6\n      - name: setup jdk\n        uses: actions/setup-java@v5\n        with:\n          java-version: '25'\n          distribution: 'microsoft'\n      - name: make gradle wrapper executable\n        run: chmod +x ./gradlew\n      - name: build\n        run: ./gradlew build\n      - name: capture build artifacts\n        uses: actions/upload-artifact@v7\n        with:\n          name: Artifacts\n          path: build/libs/\n";
//#endregion
//#region scripts/src/lib/template/gradlewrapper.ts
async function _t({ writer: e }) {
	await e.write("gradlew", dt, { executable: !0 }), await e.write("gradlew.bat", ft), await e.write("gradle/wrapper/gradle-wrapper.properties", pt), await e.write("gradle/wrapper/gradle-wrapper.jar", ut(mt)), await e.write(".gitignore", ht), await e.write(".github/workflows/build.yml", gt);
}
//#endregion
//#region scripts/src/lib/template/templates/mixin/Mixin.java.eta?raw
var vt = "package <%= it.packageName %>;\n\nimport <%= it.targetClassFull %>;\nimport org.spongepowered.asm.mixin.Mixin;\nimport org.spongepowered.asm.mixin.injection.At;\nimport org.spongepowered.asm.mixin.injection.Inject;\nimport org.spongepowered.asm.mixin.injection.callback.CallbackInfo;\n\n@Mixin(<%= it.targetClass %>.class)\npublic class <%= it.className %> {\n	@Inject(at = @At(\"HEAD\"), method = \"<%= it.targetMethod %>\")\n	private void init(CallbackInfo info) {\n		// This code is injected into the start of <%= it.targetClass %>.<%= it.targetMethod %>()V\n	}\n}";
//#endregion
//#region scripts/src/lib/template/mixin.ts
async function yt(e, t) {
	let n = t.packageName + ".mixin", r = "ExampleMixin", i = t.mojmap ? "loadLevel" : "loadWorld", a = {
		required: !0,
		package: n,
		compatibilityLevel: Je(t.minecraftVersion).mixin,
		mixins: [r],
		injectors: { defaultRequire: 1 },
		overwrites: { requireAnnotations: !0 }
	}, o = `${t.modid}.mixins.json`;
	return await e.write(`src/main/resources/${o}`, JSON.stringify(a, null, "	")), await e.write(`src/main/java/${n.replaceAll(".", "/")}/${r}.java`, $(vt, {
		className: r,
		packageName: n,
		targetClass: "MinecraftServer",
		targetClassFull: "net.minecraft.server.MinecraftServer",
		targetMethod: i
	})), [o];
}
async function bt(e, t) {
	let n = t.packageName + ".client.mixin", r = "ExampleClientMixin", i = t.mojmap ? "Minecraft" : "MinecraftClient", a = `net.minecraft.client.${i}`, o = {
		required: !0,
		package: n,
		compatibilityLevel: Je(t.minecraftVersion).mixin,
		client: [r],
		injectors: { defaultRequire: 1 },
		overwrites: { requireAnnotations: !0 }
	}, s = `${t.modid}.client.mixins.json`;
	return await e.write(`src/client/resources/${s}`, JSON.stringify(o, null, "	")), await e.write(`src/client/java/${n.replaceAll(".", "/")}/${r}.java`, $(vt, {
		className: r,
		packageName: n,
		targetClass: i,
		targetClassFull: a,
		targetMethod: "run"
	})), [{
		config: s,
		environment: "client"
	}];
}
//#endregion
//#region scripts/src/lib/template/templates/entrypoint/Entrypoint.java.eta?raw
var xt = "package <%= it.package %>;\n\nimport net.fabricmc.api.ModInitializer;\n\nimport <%= it.identifier.package %>.<%= it.identifier.class %>;\n\n<% if (it.slf4j) { -%>\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n<% } else { -%>\nimport org.apache.logging.log4j.LogManager;\nimport org.apache.logging.log4j.Logger;\n<% } -%>\n\npublic class <%= it.className %> implements ModInitializer {\n	public static final String MOD_ID = \"<%= it.modid %>\";\n\n	// This logger is used to write text to the console and the log file.\n	// It is considered best practice to use your mod id as the logger's name.\n	// That way, it's clear which mod wrote info, warnings, and errors.\n<% if (it.slf4j) { -%>\n	public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);\n<% } else { -%>\n	public static final Logger LOGGER = LogManager.getLogger(MOD_ID);\n<% } -%>\n\n	@Override\n	public void onInitialize() {\n		// This code runs as soon as Minecraft is in a mod-load-ready state.\n		// However, some things (like resources) may still be uninitialized.\n		// Proceed with mild caution.\n\n		LOGGER.info(\"Hello Fabric world!\");\n	}\n\n<% const idNew = it.identifier.factory.isConstructor ? \"new \" : \"\" -%>\n	public static <%= it.identifier.class %> id(String path) {\n		return <%= idNew %><%= it.identifier.factory.name %>(MOD_ID, path);\n	}\n}\n", St = "package <%= it.package %>\n\nimport net.fabricmc.api.ModInitializer\nimport <%= it.identifier.package %>.<%= it.identifier.class %>\n<% if (it.slf4j) { -%>\nimport org.slf4j.LoggerFactory\n<% } else { -%>\nimport org.apache.logging.log4j.LogManager\n<% } -%>\n\nobject <%= it.className %> : ModInitializer {\n	const val MOD_ID: String = \"<%= it.modid %>\"\n\n<% if (it.slf4j) { -%>\n	private val LOGGER = LoggerFactory.getLogger(MOD_ID)\n<% } else { -%>\n	private val LOGGER = LogManager.getLogger(MOD_ID)\n<% } -%>\n\n	override fun onInitialize() {\n		// This code runs as soon as Minecraft is in a mod-load-ready state.\n		// However, some things (like resources) may still be uninitialized.\n		// Proceed with mild caution.\n\n		LOGGER.info(\"Hello Fabric world!\")\n	}\n\n	fun id(path: String): <%= it.identifier.class %>\n		= <%= it.identifier.factory.name %>(MOD_ID, path)\n}\n", Ct = "package <%= it.package %>;\n\nimport net.fabricmc.api.ClientModInitializer;\n\npublic class <%= it.className %> implements ClientModInitializer {\n	@Override\n	public void onInitializeClient() {\n		// This entrypoint is suitable for setting up client-specific logic, such as rendering.\n	}\n}", wt = "package <%= it.package %>\n\nimport net.fabricmc.api.ClientModInitializer\n\nobject <%= it.className %> : ClientModInitializer {\n	override fun onInitializeClient() {\n		// This entrypoint is suitable for setting up client-specific logic, such as rendering.\n	}\n}", Tt = "package <%= it.package %>;\n\nimport net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;\nimport net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;\n\npublic class <%= it.className %> implements DataGeneratorEntrypoint {\n	@Override\n	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {\n\n	}\n}\n", Et = "package <%= it.package %>\n\nimport net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint\nimport net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator\n\nobject <%= it.className %> : DataGeneratorEntrypoint {\n	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {\n	}\n}";
//#endregion
//#region scripts/src/lib/template/modentrypoint.ts
function Dt(e, t) {
	let n = G(t), r = q(t);
	return n > 1 || r > 20 ? {
		name: `${e.class}.${e.factoryName}`,
		isConstructor: !1
	} : {
		name: e.class,
		isConstructor: !0
	};
}
function Ot(e) {
	if (!(e.unobfuscated || e.mojmap)) return {
		package: "net.minecraft.util",
		class: "Identifier",
		factoryName: "of"
	};
	let t = G(e.minecraftVersion), n = q(e.minecraftVersion), r = U(e.minecraftVersion);
	return {
		package: "net.minecraft.resources",
		class: t > 1 || n == 21 && r == 11 ? "Identifier" : "ResourceLocation",
		factoryName: "fromNamespaceAndPath"
	};
}
function kt(e) {
	let t = Ot(e), n = Dt(t, e.minecraftVersion);
	return {
		...t,
		factory: n
	};
}
async function At(e, t) {
	let n = nt(t.projectName), r = {
		package: t.packageName,
		clientPackage: t.packageName + ".client",
		className: n,
		classFullName: t.packageName + "." + n,
		clientClassFullName: t.packageName + ".client." + n,
		path: t.packageName.replaceAll(".", "/") + "/" + n,
		clientPath: t.packageName.replaceAll(".", "/") + "/client/" + n,
		modid: t.modid,
		slf4j: J(t.minecraftVersion),
		clientEntrypoint: t.splitSources,
		dataEntrypoint: t.dataGeneration,
		identifier: kt(t)
	};
	return t.kotlin ? await Mt(e, r) : await jt(e, r);
}
async function jt(e, t) {
	var n = { main: [t.classFullName] };
	if (await e.write(`src/main/java/${t.path}.java`, $(xt, t)), t.clientEntrypoint && (await e.write(`src/client/java/${t.clientPath}Client.java`, $(Ct, {
		...t,
		className: t.className + "Client",
		package: t.clientPackage
	})), n = {
		...n,
		client: [t.clientClassFullName + "Client"]
	}), t.dataEntrypoint) {
		let r = t.clientEntrypoint ? "client" : "main", i = t.clientEntrypoint ? t.clientPath : t.path, a = t.clientEntrypoint ? t.clientClassFullName : t.classFullName;
		await e.write(`src/${r}/java/${i}DataGenerator.java`, $(Tt, {
			...t,
			className: t.className + "DataGenerator",
			package: t.clientEntrypoint ? t.clientPackage : t.package
		})), n = {
			...n,
			"fabric-datagen": [a + "DataGenerator"]
		};
	}
	return n;
}
async function Mt(e, t) {
	var n = { main: [{
		value: t.classFullName,
		adapter: "kotlin"
	}] };
	if (await e.write(`src/main/kotlin/${t.path}.kt`, $(St, t)), t.clientEntrypoint && (await e.write(`src/client/kotlin/${t.clientPath}Client.kt`, $(wt, {
		...t,
		className: t.className + "Client",
		package: t.clientPackage
	})), n = {
		...n,
		client: [{
			value: t.clientClassFullName + "Client",
			adapter: "kotlin"
		}]
	}), t.dataEntrypoint) {
		let r = t.clientEntrypoint ? "client" : "main", i = t.clientEntrypoint ? t.clientPath : t.path, a = t.clientEntrypoint ? t.clientClassFullName : t.classFullName;
		await e.write(`src/${r}/kotlin/${i}DataGenerator.kt`, $(Et, {
			...t,
			className: t.className + "DataGenerator",
			package: t.clientEntrypoint ? t.clientPackage : t.package
		})), n = {
			...n,
			"fabric-datagen": [{
				value: a + "DataGenerator",
				adapter: "kotlin"
			}]
		};
	}
	return n;
}
//#endregion
//#region scripts/src/lib/template/icon.ts
var Nt = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Pt(e, t, n) {
	if (!t) return ut(Nt);
	let r = n.create(128, 128);
	return r != null && Ft(r, e) ? r.getPng() : ut(Nt);
}
function Ft(e, t) {
	let n = e.getContext("2d");
	if (n == null) return !1;
	n.fillStyle = "#ffffff", n.fillRect(0, 0, 128, 128);
	let r = t.split(/\s+/), i = 0, a = Array(r.length), o = 65;
	for (;;) {
		i = 0;
		for (let e of r) {
			let t = o;
			do
				t--, n.font = `${t}px ${Ut}`;
			while (n.measureText(e).width > 124);
			o = Math.min(o, t);
		}
		for (let t = 0; t < r.length; t++) {
			let s = r[t];
			n.font = `${o}px ${Ut}`;
			let c = e.measureText(n, s);
			a[t] = c.ascent + c.descent, i += a[t];
		}
		if (i += (r.length - 1) * 2, i <= 124) break;
	}
	let s = (128 - i) / 2;
	for (let t = 0; t < r.length; t++) {
		let i = 0;
		for (let e of a.slice(0, t)) i += e + 2;
		let c = r[t];
		n.font = `${o}px ${Ut}`, n.fillStyle = "#000000", n.textAlign = "center";
		let l = e.measureText(n, c);
		n.fillText(c, 64, s + i + l.ascent);
	}
	return !0;
}
//#endregion
//#region scripts/src/lib/template/modjson.ts
function It(e) {
	return Number(e.split(".")[1]) >= 59;
}
async function Lt(e, t, n) {
	let r = [...await yt(e, n), ...n.splitSources ? await bt(e, n) : []], i = n.minecraftVersion.indexOf("-");
	var a = n.minecraftVersion.substring(0, i === -1 ? n.minecraftVersion.length : i + 1);
	let o = {
		schemaVersion: 1,
		id: n.modid,
		version: "${version}",
		name: n.projectName,
		description: "This is an example description! Tell everyone what your mod is about!",
		authors: ["Me!"],
		contact: {
			homepage: "https://fabricmc.net/",
			sources: "https://github.com/FabricMC/fabric-example-mod"
		},
		license: "CC0-1.0",
		icon: `assets/${n.modid}/icon.png`,
		environment: "*",
		entrypoints: await At(e, n),
		mixins: r,
		depends: {
			fabricloader: ">=" + n.loaderVersion,
			minecraft: "~" + a,
			java: ">=" + Je(n.minecraftVersion).release
		}
	};
	o.depends[It(n.fabricVersion) ? "fabric-api" : "fabric"] = "*", n.kotlin && (o.depends = {
		...o.depends,
		"fabric-language-kotlin": "*"
	}), await e.write("src/main/resources/fabric.mod.json", JSON.stringify(o, null, "	")), await e.write(`src/main/resources/assets/${n.modid}/icon.png`, Pt(n.projectName, n.uniqueModIcon, t));
}
//#endregion
//#region scripts/src/lib/template/templates/git/gitattributes?raw
var Rt = "#\n# https://help.github.com/articles/dealing-with-line-endings/\n#\n# Linux start script should use lf\n/gradlew        text eol=lf\n\n# These are Windows script files and should use crlf\n*.bat           text eol=crlf\n\n", zt = "Creative Commons Legal Code\n\nCC0 1.0 Universal\n\n    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE\n    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN\n    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS\n    INFORMATION ON AN \"AS-IS\" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES\n    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS\n    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM\n    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED\n    HEREUNDER.\n\nStatement of Purpose\n\nThe laws of most jurisdictions throughout the world automatically confer\nexclusive Copyright and Related Rights (defined below) upon the creator\nand subsequent owner(s) (each and all, an \"owner\") of an original work of\nauthorship and/or a database (each, a \"Work\").\n\nCertain owners wish to permanently relinquish those rights to a Work for\nthe purpose of contributing to a commons of creative, cultural and\nscientific works (\"Commons\") that the public can reliably and without fear\nof later claims of infringement build upon, modify, incorporate in other\nworks, reuse and redistribute as freely as possible in any form whatsoever\nand for any purposes, including without limitation commercial purposes.\nThese owners may contribute to the Commons to promote the ideal of a free\nculture and the further production of creative, cultural and scientific\nworks, or to gain reputation or greater distribution for their Work in\npart through the use and efforts of others.\n\nFor these and/or other purposes and motivations, and without any\nexpectation of additional consideration or compensation, the person\nassociating CC0 with a Work (the \"Affirmer\"), to the extent that he or she\nis an owner of Copyright and Related Rights in the Work, voluntarily\nelects to apply CC0 to the Work and publicly distribute the Work under its\nterms, with knowledge of his or her Copyright and Related Rights in the\nWork and the meaning and intended legal effect of CC0 on those rights.\n\n1. Copyright and Related Rights. A Work made available under CC0 may be\nprotected by copyright and related or neighboring rights (\"Copyright and\nRelated Rights\"). Copyright and Related Rights include, but are not\nlimited to, the following:\n\n  i. the right to reproduce, adapt, distribute, perform, display,\n     communicate, and translate a Work;\n ii. moral rights retained by the original author(s) and/or performer(s);\niii. publicity and privacy rights pertaining to a person's image or\n     likeness depicted in a Work;\n iv. rights protecting against unfair competition in regards to a Work,\n     subject to the limitations in paragraph 4(a), below;\n  v. rights protecting the extraction, dissemination, use and reuse of data\n     in a Work;\n vi. database rights (such as those arising under Directive 96/9/EC of the\n     European Parliament and of the Council of 11 March 1996 on the legal\n     protection of databases, and under any national implementation\n     thereof, including any amended or successor version of such\n     directive); and\nvii. other similar, equivalent or corresponding rights throughout the\n     world based on applicable law or treaty, and any national\n     implementations thereof.\n\n2. Waiver. To the greatest extent permitted by, but not in contravention\nof, applicable law, Affirmer hereby overtly, fully, permanently,\nirrevocably and unconditionally waives, abandons, and surrenders all of\nAffirmer's Copyright and Related Rights and associated claims and causes\nof action, whether now known or unknown (including existing as well as\nfuture claims and causes of action), in the Work (i) in all territories\nworldwide, (ii) for the maximum duration provided by applicable law or\ntreaty (including future time extensions), (iii) in any current or future\nmedium and for any number of copies, and (iv) for any purpose whatsoever,\nincluding without limitation commercial, advertising or promotional\npurposes (the \"Waiver\"). Affirmer makes the Waiver for the benefit of each\nmember of the public at large and to the detriment of Affirmer's heirs and\nsuccessors, fully intending that such Waiver shall not be subject to\nrevocation, rescission, cancellation, termination, or any other legal or\nequitable action to disrupt the quiet enjoyment of the Work by the public\nas contemplated by Affirmer's express Statement of Purpose.\n\n3. Public License Fallback. Should any part of the Waiver for any reason\nbe judged legally invalid or ineffective under applicable law, then the\nWaiver shall be preserved to the maximum extent permitted taking into\naccount Affirmer's express Statement of Purpose. In addition, to the\nextent the Waiver is so judged Affirmer hereby grants to each affected\nperson a royalty-free, non transferable, non sublicensable, non exclusive,\nirrevocable and unconditional license to exercise Affirmer's Copyright and\nRelated Rights in the Work (i) in all territories worldwide, (ii) for the\nmaximum duration provided by applicable law or treaty (including future\ntime extensions), (iii) in any current or future medium and for any number\nof copies, and (iv) for any purpose whatsoever, including without\nlimitation commercial, advertising or promotional purposes (the\n\"License\"). The License shall be deemed effective as of the date CC0 was\napplied by Affirmer to the Work. Should any part of the License for any\nreason be judged legally invalid or ineffective under applicable law, such\npartial invalidity or ineffectiveness shall not invalidate the remainder\nof the License, and in such case Affirmer hereby affirms that he or she\nwill not (i) exercise any of his or her remaining Copyright and Related\nRights in the Work or (ii) assert any associated claims and causes of\naction with respect to the Work, in either case contrary to Affirmer's\nexpress Statement of Purpose.\n\n4. Limitations and Disclaimers.\n\n a. No trademark or patent rights held by Affirmer are waived, abandoned,\n    surrendered, licensed or otherwise affected by this document.\n b. Affirmer offers the Work as-is and makes no representations or\n    warranties of any kind concerning the Work, express, implied,\n    statutory or otherwise, including without limitation warranties of\n    title, merchantability, fitness for a particular purpose, non\n    infringement, or the absence of latent or other defects, accuracy, or\n    the present or absence of errors, whether or not discoverable, all to\n    the greatest extent permissible under applicable law.\n c. Affirmer disclaims responsibility for clearing rights of other persons\n    that may apply to the Work or any use thereof, including without\n    limitation any person's Copyright and Related Rights in the Work.\n    Further, Affirmer disclaims responsibility for obtaining any necessary\n    consents, permissions or other rights required for any use of the\n    Work.\n d. Affirmer understands and acknowledges that Creative Commons is not a\n    party to this document and has no duty or obligation with respect to\n    this CC0 or use of the Work.", Bt = "# <%= it.projectName %>\n\n## Setup\n\nFor setup instructions, please see the [Fabric Documentation page](https://docs.fabricmc.net/develop/getting-started/creating-a-project#setting-up) related to the IDE that you are using.\n\n## License\n\nThis template is available under the CC0 license. Feel free to learn from it and incorporate it in your own projects.\n";
//#endregion
//#region scripts/src/lib/template/git.ts
async function Vt(e, t) {
	await e.write(".gitattributes", Rt), await e.write(".gitignore", ht), await e.write(".github/workflows/build.yml", gt), await e.write("LICENSE", zt), await e.write("README.md", $(Bt, t));
}
//#endregion
//#region scripts/src/lib/template/versions.ts
async function Ht() {
	let e = await L();
	return e.filter((t) => {
		let n = t.version;
		return n.startsWith("1.14") && n != "1.14.4" ? !1 : t.stable ? !0 : e[0].version == n;
	});
}
//#endregion
//#region scripts/src/lib/template/template.ts
var Ut = "Comic Relief";
async function Wt(e) {
	let t = await Gt(e.config);
	await _t(e), await lt(e.writer, t), await Lt(e.writer, e.canvas, t), await Vt(e.writer, t);
}
async function Gt(e) {
	let t = V(e.minecraftVersion), [n, r] = await Promise.all([L(), P()]), i = n.find((t) => t.version === e.minecraftVersion);
	return {
		...e,
		splitSources: H(e.minecraftVersion) && e.splitSources,
		dataGeneration: K(e.minecraftVersion) && e.dataGeneration,
		loaderVersion: z(i, r),
		fabricVersion: await R(e.minecraftVersion),
		yarnVersion: t ? void 0 : (await F(e.minecraftVersion))[0].version,
		kotlin: await Kt(e),
		unobfuscated: t
	};
}
async function Kt(e) {
	if (!e.useKotlin) return;
	let t = (await I()).pop();
	return {
		fabricKotlinAdapterVersion: t,
		kotlinVersion: t.split("+kotlin.")[1]
	};
}
//#endregion
//#region scripts/src/lib/Template.svelte
var qt = j("<p class=\"svelte-8wpoko\">Choose a name for your new mod.</p>"), Jt = j("<p class=\"svelte-8wpoko\">Choose a name for your new mod. The mod ID will be <code class=\"svelte-8wpoko\"> </code>. <a class=\"svelte-8wpoko\">Use custom id</a></p>"), Yt = j("<li style=\"color: red\" class=\"svelte-8wpoko\"> </li>"), Xt = j("<!> <br class=\"svelte-8wpoko\"/>", 1), Zt = j("<div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Mod ID:</h3> <hr class=\"svelte-8wpoko\"/> <p class=\"svelte-8wpoko\">Enter the modid you wish to use for your mod. <a class=\"svelte-8wpoko\">Use default</a></p> <!> <input id=\"mod-id\" class=\"svelte-8wpoko\"/></div>"), Qt = j("<option class=\"svelte-8wpoko\"> </option>"), $t = j("<div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"mojmap\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"mojmap\" class=\"option-label svelte-8wpoko\">Mojang Mappings</label></div> <p class=\"option-body svelte-8wpoko\">Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.</p></div>"), en = j("<div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"datagen\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"datagen\" class=\"option-label svelte-8wpoko\">Data Generation</label></div> <p class=\"option-body svelte-8wpoko\">This option configures the <a href=\"https://docs.fabricmc.net/develop/data-generation/setup\" class=\"svelte-8wpoko\">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.</p></div>"), tn = j("<div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"splitSources\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"splitSources\" class=\"option-label svelte-8wpoko\">Split client and common sources</label></div> <p class=\"option-body svelte-8wpoko\">A common source of server crashes comes from calling client only code when installed on a server.\n                This option configures your mod to be built from two source sets, client and main.\n                This enforces a clear separation between the client and server code.</p></div>"), nn = j("<a class=\"button primary download-button svelte-8wpoko\"><!> Generating...</a>"), rn = j("<a class=\"button primary large download-button svelte-8wpoko\"><!> Download Template (.ZIP)</a>"), an = j("<div class=\"template svelte-8wpoko\"><div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Mod Name:</h3> <hr class=\"svelte-8wpoko\"/> <!> <input id=\"project-name\" class=\"svelte-8wpoko\"/> <!></div> <!> <div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Package Name:</h3> <hr class=\"svelte-8wpoko\"/> <p class=\"svelte-8wpoko\">Choose a unique package name for your new mod. The package name\n                should be unique to you. If you are unsure about this use <code class=\"svelte-8wpoko\">name.modid</code>.</p> <input id=\"package-name\" class=\"svelte-8wpoko\"/> <!></div> <div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Minecraft Version:</h3> <hr class=\"svelte-8wpoko\"/> <p class=\"svelte-8wpoko\">Select the version of Minecraft that you wish to use for your\n                mod.</p> <select id=\"minecraft-version\" style=\"min-width: 200px\" class=\"svelte-8wpoko\"></select></div> <hr class=\"svelte-8wpoko\"/> <br class=\"svelte-8wpoko\"/> <h4 class=\"svelte-8wpoko\">Advanced Options:</h4> <div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"kotlin\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"kotlin\" class=\"option-label svelte-8wpoko\">Kotlin Programming Language</label></div> <p class=\"option-body svelte-8wpoko\"><a href=\"https://kotlinlang.org/\" class=\"svelte-8wpoko\">Kotlin</a> is a alternative programming language that can be used to develop mods.\n                The <a href=\"https://github.com/FabricMC/fabric-language-kotlin\" class=\"svelte-8wpoko\">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.</p></div> <!> <!> <!> <div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"gradleKotlin\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"gradleKotlin\" class=\"option-label svelte-8wpoko\">Kotlin Build Script</label></div> <p class=\"option-body svelte-8wpoko\">The Gradle build script will use the Kotlin programming language instead of Groovy.</p></div> <br class=\"svelte-8wpoko\"/> <!></div>"), on = j("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), sn = j("<p>Loading data <span>...</span></p>");
function cn(j, P) {
	s(P, !1);
	let F = d(), I = d(), L = d(), R = d(), z = d(), U = d(), G = d(), q = d(), J = d("Template Mod"), Y = d("com.example"), ne = d(!1), re = d(!0), ie = d(!1), ae = d(!0), oe = d(!1), X = d(), se = d(!1), ce = Promise.all([Ht()]).then(([e]) => (a(q, e.find((e) => e.stable).version), { game: e }));
	function Z(e) {
		if (e !== void 0) return te(e, f(X) === void 0);
	}
	async function le() {
		if (f(z) !== void 0 || f(X) !== void 0 && f(U) !== void 0 || f(G).length > 0) return;
		a(se, !0);
		let e = {
			modid: f(X) ?? f(F),
			minecraftVersion: f(q),
			projectName: f(J),
			packageName: f(Y),
			useKotlin: f(ne),
			mojmap: f(re) || f(R),
			dataGeneration: f(ie) && f(I),
			splitSources: f(ae) && f(L),
			uniqueModIcon: !0,
			gradleKotlin: f(oe)
		}, t = new de.default();
		await Wt({
			config: e,
			writer: { write: async (e, n, r) => {
				let i = typeof n == "string" ? n : new Uint8Array(n);
				t.file(e, i, { unixPermissions: r?.executable ? "774" : void 0 });
			} },
			canvas: { create(e, t) {
				let n = document.createElement("canvas");
				return n.width = e, n.height = t, {
					getContext: (e) => n.getContext(e),
					getPng: () => ut(n.toDataURL().split(";base64,")[1]),
					measureText(e, t) {
						let n = e.measureText(t);
						return {
							width: n.width,
							ascent: n.actualBoundingBoxAscent,
							descent: n.actualBoundingBoxDescent
						};
					}
				};
			} }
		}), fe.default.saveAs(await t.generateAsync({
			type: "blob",
			platform: "UNIX"
		}), `${f(F)}-template-${e.minecraftVersion}.zip`), a(se, !1);
	}
	function ue() {
		a(J, f(J).trim());
	}
	function pe() {
		a(Y, rt(f(Y)));
	}
	function me() {
		a(X, f(F));
	}
	function he() {
		a(X, void 0);
	}
	r(() => f(J), () => {
		a(F, W(f(J)));
	}), r(() => f(q), () => {
		a(I, K(f(q) || "1.99"));
	}), r(() => f(q), () => {
		a(L, H(f(q) || "1.99"));
	}), r(() => f(q), () => {
		a(R, V(f(q) || "1.99"));
	}), r(() => f(F), () => {
		a(z, Z(f(F)));
	}), r(() => f(X), () => {
		a(U, ee(f(X)));
	}), r(() => f(Y), () => {
		a(G, Qe(f(Y)));
	}), u(), D();
	var ge = m(), Q = y(ge);
	_(Q, () => ce, (n) => {
		var r = sn(), i = l(e(r));
		t(r), b(() => g(i, "font-family: Comic Relief;")), M(n, r);
	}, (r, o) => {
		var s = an(), u = e(s), d = l(e(u), 4), m = (e) => {
			var t = qt();
			M(e, t);
		}, g = (r) => {
			var i = Jt(), a = l(e(i)), o = c(a, !0), s = l(a, 2);
			h(s, "href", ""), t(i), b(() => k(o, f(F))), n("click", s, C(me)), M(r, i);
		};
		v(d, (e) => {
			f(X) == null ? e(g, -1) : e(m);
		});
		var _ = l(d, 2);
		E(_);
		var D = l(_, 2), j = (e) => {
			var t = Xt(), n = y(t);
			T(n, 1, () => f(z), S, (e, t) => {
				var n = Yt(), r = c(n, !0);
				b(() => k(r, f(t))), M(e, n);
			}), N(2), M(e, t);
		};
		v(D, (e) => {
			f(z) != null && e(j);
		}), t(u);
		var P = l(u, 2), V = (r) => {
			var i = Zt(), o = l(e(i), 4), s = l(e(o));
			h(s, "href", ""), t(o);
			var u = l(o, 2), d = (e) => {
				var t = Xt(), n = y(t);
				T(n, 1, () => f(U), S, (e, t) => {
					var n = Yt(), r = c(n, !0);
					b(() => k(r, f(t))), M(e, n);
				}), N(2), M(e, t);
			};
			v(u, (e) => {
				f(U) != null && e(d);
			});
			var p = l(u, 2);
			E(p), t(i), n("click", s, C(he)), w(p, () => f(X), (e) => a(X, e)), M(r, i);
		};
		v(P, (e) => {
			f(X) != null && e(V);
		});
		var H = l(P, 2), W = l(e(H), 6);
		E(W);
		var K = l(W, 2);
		T(K, 1, () => f(G), S, (e, t) => {
			var n = Yt(), r = c(n, !0);
			b(() => k(r, f(t))), M(e, n);
		}), t(H);
		var ee = l(H, 2), te = l(e(ee), 6);
		T(te, 5, () => (A(f(o)), i(() => f(o).game)), S, (e, t) => {
			var n = Qt(), r = c(n, !0), a = {};
			b(() => {
				k(r, (f(t), i(() => f(t).version))), a !== (a = (f(t), i(() => f(t).version))) && (n.value = (n.__value = a) ?? "");
			}), M(e, n);
		}), t(te), O(te), t(ee);
		var ce = l(ee, 8), Z = e(ce), de = e(Z);
		E(de), N(2), t(Z), N(2), t(ce);
		var fe = l(ce, 2), ge = (n) => {
			var r = $t(), i = e(r), o = e(i);
			E(o), N(2), t(i), N(2), t(r), p(o, () => f(re), (e) => a(re, e)), M(n, r);
		};
		v(fe, (e) => {
			f(R) || e(ge);
		});
		var Q = l(fe, 2), _e = (n) => {
			var r = en(), i = e(r), o = e(i);
			E(o), N(2), t(i), N(2), t(r), p(o, () => f(ie), (e) => a(ie, e)), M(n, r);
		};
		v(Q, (e) => {
			f(I) && e(_e);
		});
		var ve = l(Q, 2), ye = (n) => {
			var r = tn(), i = e(r), o = e(i);
			E(o), N(2), t(i), N(2), t(r), p(o, () => f(ae), (e) => a(ae, e)), M(n, r);
		};
		v(ve, (e) => {
			f(L) && e(ye);
		});
		var be = l(ve, 2), xe = e(be), Se = e(xe);
		E(Se), N(2), t(xe), N(2), t(be);
		var Ce = l(be, 4), we = (n) => {
			var r = nn();
			h(r, "href", "");
			var i = e(r);
			B(i, {}), N(), t(r), M(n, r);
		}, Te = (r) => {
			var i = rn();
			h(i, "href", "");
			var a = e(i);
			B(a, {}), N(), t(i), n("click", i, C(le)), M(r, i);
		};
		v(Ce, (e) => {
			f(se) ? e(we) : e(Te, -1);
		}), t(s), w(_, () => f(J), (e) => a(J, e)), n("blur", _, ue), n("keyup", W, pe), w(W, () => f(Y), (e) => a(Y, e)), x(te, () => f(q), (e) => a(q, e)), p(de, () => f(ne), (e) => a(ne, e)), p(Se, () => f(oe), (e) => a(oe, e)), M(r, s);
	}, (e, t) => {
		var n = on(), r = y(n), a = c(r);
		N(2), b(() => k(a, `Error: ${A(f(t)), i(() => f(t).message) ?? ""}`)), M(e, n);
	}), M(j, ge), o();
}
//#endregion
export { cn as default };

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.SimpleBar = e()
}(this, function() {
    "use strict";
    var t = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        e = function(e) {
            if (!t(e)) throw TypeError(e + " is not an object!");
            return e
        },
        i = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        r = !i(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function s(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var o = s(function(t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        }),
        a = o.document,
        l = t(a) && t(a.createElement),
        c = function(t) {
            return l ? a.createElement(t) : {}
        },
        h = !r && !i(function() {
            return 7 != Object.defineProperty(c("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        u = Object.defineProperty,
        f = {
            f: r ? Object.defineProperty : function(i, r, n) {
                if (e(i), r = function(e, i) {
                        if (!t(e)) return e;
                        var r, n;
                        if ("function" == typeof(r = e.toString) && !t(n = r.call(e))) return n;
                        if ("function" == typeof(r = e.valueOf) && !t(n = r.call(e))) return n;
                        throw TypeError("Can't convert object to primitive value")
                    }(r), e(n), h) try {
                    return u(i, r, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (i[r] = n.value), i
            }
        },
        d = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        p = r ? function(t, e, i) {
            return f.f(t, e, d(1, i))
        } : function(t, e, i) {
            return t[e] = i, t
        },
        v = {}.hasOwnProperty,
        y = function(t, e) {
            return v.call(t, e)
        },
        b = 0,
        m = Math.random(),
        g = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++b + m).toString(36))
        },
        x = s(function(t) {
            var e = t.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = e)
        }),
        w = (x.version, s(function(t) {
            var e = g("src"),
                i = "toString",
                r = Function[i],
                n = ("" + r).split(i);
            x.inspectSource = function(t) {
                return r.call(t)
            }, (t.exports = function(t, i, r, s) {
                var a = "function" == typeof r;
                a && (y(r, "name") || p(r, "name", i)), t[i] !== r && (a && (y(r, e) || p(r, e, t[i] ? "" + t[i] : n.join(String(i)))), t === o ? t[i] = r : s ? t[i] ? t[i] = r : p(t, i, r) : (delete t[i], p(t, i, r)))
            })(Function.prototype, i, function() {
                return "function" == typeof this && this[e] || r.call(this)
            })
        })),
        E = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        },
        _ = s(function(t) {
            var e = "__core-js_shared__",
                i = o[e] || (o[e] = {});
            (t.exports = function(t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: x.version,
                mode: "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
            })
        }),
        O = s(function(t) {
            var e = _("wks"),
                i = o.Symbol,
                r = "function" == typeof i;
            (t.exports = function(t) {
                return e[t] || (e[t] = r && i[t] || (r ? i : g)("Symbol." + t))
            }).store = e
        }),
        S = function(t, e, r) {
            var n = O(t),
                s = r(E, n, "" [t]),
                o = s[0],
                a = s[1];
            i(function() {
                var e = {};
                return e[n] = function() {
                    return 7
                }, 7 != "" [t](e)
            }) && (w(String.prototype, t, o), p(RegExp.prototype, n, 2 == e ? function(t, e) {
                return a.call(t, this, e)
            } : function(t) {
                return a.call(t, this)
            }))
        };
    S("replace", 2, function(t, e, i) {
        return [function(r, n) {
            var s = t(this),
                o = null == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, s, n) : i.call(String(s), r, n)
        }, i]
    });
    var k = f.f,
        A = Function.prototype,
        L = /^\s*function ([^ (]*)/,
        M = "name";
    M in A || r && k(A, M, {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(L)[1]
            } catch (t) {
                return ""
            }
        }
    }), S("match", 1, function(t, e, i) {
        return [function(i) {
            var r = t(this),
                n = null == i ? void 0 : i[e];
            return void 0 !== n ? n.call(i, r) : new RegExp(i)[e](String(r))
        }, i]
    });
    var T = O("unscopables"),
        j = Array.prototype;
    null == j[T] && p(j, T, {});
    var N = function(t) {
            j[T][t] = !0
        },
        R = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        },
        W = {},
        C = {}.toString,
        z = function(t) {
            return C.call(t).slice(8, -1)
        },
        D = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == z(t) ? t.split("") : Object(t)
        },
        V = function(t) {
            return D(E(t))
        },
        B = function(t, e, i) {
            if (function(t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!")
                }(t), void 0 === e) return t;
            switch (i) {
                case 1:
                    return function(i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function(i, r) {
                        return t.call(e, i, r)
                    };
                case 3:
                    return function(i, r, n) {
                        return t.call(e, i, r, n)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        P = "prototype",
        F = function(t, e, i) {
            var r, n, s, a, l = t & F.F,
                c = t & F.G,
                h = t & F.S,
                u = t & F.P,
                f = t & F.B,
                d = c ? o : h ? o[e] || (o[e] = {}) : (o[e] || {})[P],
                v = c ? x : x[e] || (x[e] = {}),
                y = v[P] || (v[P] = {});
            for (r in c && (i = e), i) s = ((n = !l && d && void 0 !== d[r]) ? d : i)[r], a = f && n ? B(s, o) : u && "function" == typeof s ? B(Function.call, s) : s, d && w(d, r, s, t & F.U), v[r] != s && p(v, r, a), u && y[r] != s && (y[r] = s)
        };
    o.core = x, F.F = 1, F.G = 2, F.S = 4, F.P = 8, F.B = 16, F.W = 32, F.U = 64, F.R = 128;
    var H = F,
        q = Math.ceil,
        I = Math.floor,
        X = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? I : q)(t)
        },
        Y = Math.min,
        G = function(t) {
            return t > 0 ? Y(X(t), 9007199254740991) : 0
        },
        $ = Math.max,
        U = Math.min,
        J = _("keys"),
        K = function(t) {
            return J[t] || (J[t] = g(t))
        },
        Q = (!1, function(t, e, i) {
            var r, n, s = V(t),
                o = G(s.length),
                a = (n = o, (r = X(r = i)) < 0 ? $(r + n, 0) : U(r, n));
            for (0; o > a; a++)
                if (a in s && s[a] === e) return a || 0;
            return -1
        }),
        Z = K("IE_PROTO"),
        tt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        et = Object.keys || function(t) {
            return function(t, e) {
                var i, r = V(t),
                    n = 0,
                    s = [];
                for (i in r) i != Z && y(r, i) && s.push(i);
                for (; e.length > n;) y(r, i = e[n++]) && (~Q(s, i) || s.push(i));
                return s
            }(t, tt)
        },
        it = r ? Object.defineProperties : function(t, i) {
            e(t);
            for (var r, n = et(i), s = n.length, o = 0; s > o;) f.f(t, r = n[o++], i[r]);
            return t
        },
        rt = o.document,
        nt = rt && rt.documentElement,
        st = K("IE_PROTO"),
        ot = function() {},
        at = "prototype",
        lt = function() {
            var t, e = c("iframe"),
                i = tt.length;
            for (e.style.display = "none", nt.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), lt = t.F; i--;) delete lt[at][tt[i]];
            return lt()
        },
        ct = Object.create || function(t, i) {
            var r;
            return null !== t ? (ot[at] = e(t), r = new ot, ot[at] = null, r[st] = t) : r = lt(), void 0 === i ? r : it(r, i)
        },
        ht = f.f,
        ut = O("toStringTag"),
        ft = function(t, e, i) {
            t && !y(t = i ? t : t.prototype, ut) && ht(t, ut, {
                configurable: !0,
                value: e
            })
        },
        dt = {};
    p(dt, O("iterator"), function() {
        return this
    });
    var pt = function(t) {
            return Object(E(t))
        },
        vt = K("IE_PROTO"),
        yt = Object.prototype,
        bt = Object.getPrototypeOf || function(t) {
            return t = pt(t), y(t, vt) ? t[vt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? yt : null
        },
        mt = O("iterator"),
        gt = !([].keys && "next" in [].keys()),
        xt = "values",
        wt = function() {
            return this
        },
        Et = function(t, e, i, r, n, s, o) {
            var a, l, c;
            l = e, c = r, (a = i).prototype = ct(dt, {
                next: d(1, c)
            }), ft(a, l + " Iterator");
            var h, u, f, v = function(t) {
                    if (!gt && t in g) return g[t];
                    switch (t) {
                        case "keys":
                        case xt:
                            return function() {
                                return new i(this, t)
                            }
                    }
                    return function() {
                        return new i(this, t)
                    }
                },
                y = e + " Iterator",
                b = n == xt,
                m = !1,
                g = t.prototype,
                x = g[mt] || g["@@iterator"] || n && g[n],
                E = x || v(n),
                _ = n ? b ? v("entries") : E : void 0,
                O = "Array" == e && g.entries || x;
            if (O && (f = bt(O.call(new t))) !== Object.prototype && f.next && (ft(f, y, !0), "function" != typeof f[mt] && p(f, mt, wt)), b && x && x.name !== xt && (m = !0, E = function() {
                    return x.call(this)
                }), (gt || m || !g[mt]) && p(g, mt, E), W[e] = E, W[y] = wt, n)
                if (h = {
                        values: b ? E : v(xt),
                        keys: s ? E : v("keys"),
                        entries: _
                    }, o)
                    for (u in h) u in g || w(g, u, h[u]);
                else H(H.P + H.F * (gt || m), e, h);
            return h
        },
        _t = Et(Array, "Array", function(t, e) {
            this._t = V(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                i = this._i++;
            return !t || i >= t.length ? (this._t = void 0, R(1)) : R(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
        }, "values");
    W.Arguments = W.Array, N("keys"), N("values"), N("entries");
    for (var Ot = O("iterator"), St = O("toStringTag"), kt = W.Array, At = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, Lt = et(At), Mt = 0; Mt < Lt.length; Mt++) {
        var Tt, jt = Lt[Mt],
            Nt = At[jt],
            Rt = o[jt],
            Wt = Rt && Rt.prototype;
        if (Wt && (Wt[Ot] || p(Wt, Ot, kt), Wt[St] || p(Wt, St, jt), W[jt] = kt, Nt))
            for (Tt in _t) Wt[Tt] || w(Wt, Tt, _t[Tt], !0)
    }
    var Ct = (!0, function(t, e) {
        var i, r, n = String(E(t)),
            s = X(e),
            o = n.length;
        return s < 0 || s >= o ? "" : (i = n.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === o || (r = n.charCodeAt(s + 1)) < 56320 || r > 57343 ? n.charAt(s) : n.slice(s, s + 2)
    });
    Et(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            i = this._i;
        return i >= e.length ? {
            value: void 0,
            done: !0
        } : (t = Ct(e, i), this._i += t.length, {
            value: t,
            done: !1
        })
    });
    var zt = function(t, i, r, n) {
            try {
                return n ? i(e(r)[0], r[1]) : i(r)
            } catch (i) {
                var s = t.return;
                throw void 0 !== s && e(s.call(t)), i
            }
        },
        Dt = O("iterator"),
        Vt = Array.prototype,
        Bt = function(t, e, i) {
            e in t ? f.f(t, e, d(0, i)) : t[e] = i
        },
        Pt = O("toStringTag"),
        Ft = "Arguments" == z(function() {
            return arguments
        }()),
        Ht = O("iterator"),
        qt = x.getIteratorMethod = function(t) {
            if (null != t) return t[Ht] || t["@@iterator"] || W[(e = t, void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(i = Object(e), Pt)) ? r : Ft ? z(i) : "Object" == (n = z(i)) && "function" == typeof i.callee ? "Arguments" : n)];
            var e, i, r, n
        },
        It = O("iterator"),
        Xt = !1;
    try {
        [7][It]().return = function() {
            Xt = !0
        }
    } catch (t) {}

    function Yt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Gt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable
            }))), r.forEach(function(e) {
                var r, n, s;
                r = t, n = e, s = i[e], n in r ? Object.defineProperty(r, n, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = s
            })
        }
        return t
    }
    H(H.S + H.F * ! function(t, e) {
        if (!Xt) return !1;
        var i = !1;
        try {
            var r = [7],
                n = r[It]();
            n.next = function() {
                return {
                    done: i = !0
                }
            }, r[It] = function() {
                return n
            }
        } catch (t) {}
        return i
    }(), "Array", {
        from: function(t) {
            var e, i, r, n, s, o = pt(t),
                a = "function" == typeof this ? this : Array,
                l = arguments.length,
                c = l > 1 ? arguments[1] : void 0,
                h = void 0 !== c,
                u = 0,
                f = qt(o);
            if (h && (c = B(c, l > 2 ? arguments[2] : void 0, 2)), null != f && (a != Array || void 0 === (s = f) || W.Array !== s && Vt[Dt] !== s))
                for (n = f.call(o), i = new a; !(r = n.next()).done; u++) Bt(i, u, h ? zt(n, c, [r.value, u], !0) : r.value);
            else
                for (i = new a(e = G(o.length)); e > u; u++) Bt(i, u, h ? c(o[u], u) : o[u]);
            return i.length = u, i
        }
    });
    var $t = s(function(t, e) {
            t.exports = function() {
                if ("undefined" == typeof document) return 0;
                var t, e = document.body,
                    i = document.createElement("div"),
                    r = i.style;
                return r.position = "absolute", r.top = r.left = "-9999px", r.width = r.height = "100px", r.overflow = "scroll", e.appendChild(i), t = i.offsetWidth - i.clientWidth, e.removeChild(i), t
            }
        }),
        Ut = "Expected a function",
        Jt = NaN,
        Kt = "[object Symbol]",
        Qt = /^\s+|\s+$/g,
        Zt = /^[-+]0x[0-9a-f]+$/i,
        te = /^0b[01]+$/i,
        ee = /^0o[0-7]+$/i,
        ie = parseInt,
        re = "object" == typeof n && n && n.Object === Object && n,
        ne = "object" == typeof self && self && self.Object === Object && self,
        se = re || ne || Function("return this")(),
        oe = Object.prototype.toString,
        ae = Math.max,
        le = Math.min,
        ce = function() {
            return se.Date.now()
        };

    function he(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function ue(t) {
        if ("number" == typeof t) return t;
        if ("symbol" == typeof(e = t) || (i = e) && "object" == typeof i && oe.call(e) == Kt) return Jt;
        var e, i;
        if (he(t)) {
            var r = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = he(r) ? r + "" : r
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Qt, "");
        var n = te.test(t);
        return n || ee.test(t) ? ie(t.slice(2), n ? 2 : 8) : Zt.test(t) ? Jt : +t
    }
    var fe = function(t, e, i) {
            var r = !0,
                n = !0;
            if ("function" != typeof t) throw new TypeError(Ut);
            return he(i) && (r = "leading" in i ? !!i.leading : r, n = "trailing" in i ? !!i.trailing : n),
                function(t, e, i) {
                    var r, n, s, o, a, l, c = 0,
                        h = !1,
                        u = !1,
                        f = !0;
                    if ("function" != typeof t) throw new TypeError(Ut);

                    function d(e) {
                        var i = r,
                            s = n;
                        return r = n = void 0, c = e, o = t.apply(s, i)
                    }

                    function p(t) {
                        var i = t - l;
                        return void 0 === l || i >= e || i < 0 || u && t - c >= s
                    }

                    function v() {
                        var t, i, r = ce();
                        if (p(r)) return y(r);
                        a = setTimeout(v, (i = e - ((t = r) - l), u ? le(i, s - (t - c)) : i))
                    }

                    function y(t) {
                        return a = void 0, f && r ? d(t) : (r = n = void 0, o)
                    }

                    function b() {
                        var t, i = ce(),
                            s = p(i);
                        if (r = arguments, n = this, l = i, s) {
                            if (void 0 === a) return c = t = l, a = setTimeout(v, e), h ? d(t) : o;
                            if (u) return a = setTimeout(v, e), d(l)
                        }
                        return void 0 === a && (a = setTimeout(v, e)), o
                    }
                    return e = ue(e) || 0, he(i) && (h = !!i.leading, s = (u = "maxWait" in i) ? ae(ue(i.maxWait) || 0, e) : s, f = "trailing" in i ? !!i.trailing : f), b.cancel = function() {
                        void 0 !== a && clearTimeout(a), c = 0, r = l = n = a = void 0
                    }, b.flush = function() {
                        return void 0 === a ? o : y(ce())
                    }, b
                }(t, e, {
                    leading: r,
                    maxWait: e,
                    trailing: n
                })
        },
        de = NaN,
        pe = "[object Symbol]",
        ve = /^\s+|\s+$/g,
        ye = /^[-+]0x[0-9a-f]+$/i,
        be = /^0b[01]+$/i,
        me = /^0o[0-7]+$/i,
        ge = parseInt,
        xe = "object" == typeof n && n && n.Object === Object && n,
        we = "object" == typeof self && self && self.Object === Object && self,
        Ee = xe || we || Function("return this")(),
        _e = Object.prototype.toString,
        Oe = Math.max,
        Se = Math.min,
        ke = function() {
            return Ee.Date.now()
        };

    function Ae(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function Le(t) {
        if ("number" == typeof t) return t;
        if ("symbol" == typeof(e = t) || (i = e) && "object" == typeof i && _e.call(e) == pe) return de;
        var e, i;
        if (Ae(t)) {
            var r = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Ae(r) ? r + "" : r
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(ve, "");
        var n = be.test(t);
        return n || me.test(t) ? ge(t.slice(2), n ? 2 : 8) : ye.test(t) ? de : +t
    }
    var Me, Te = function(t, e, i) {
            var r, n, s, o, a, l, c = 0,
                h = !1,
                u = !1,
                f = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");

            function d(e) {
                var i = r,
                    s = n;
                return r = n = void 0, c = e, o = t.apply(s, i)
            }

            function p(t) {
                var i = t - l;
                return void 0 === l || i >= e || i < 0 || u && t - c >= s
            }

            function v() {
                var t, i, r = ke();
                if (p(r)) return y(r);
                a = setTimeout(v, (i = e - ((t = r) - l), u ? Se(i, s - (t - c)) : i))
            }

            function y(t) {
                return a = void 0, f && r ? d(t) : (r = n = void 0, o)
            }

            function b() {
                var t, i = ke(),
                    s = p(i);
                if (r = arguments, n = this, l = i, s) {
                    if (void 0 === a) return c = t = l, a = setTimeout(v, e), h ? d(t) : o;
                    if (u) return a = setTimeout(v, e), d(l)
                }
                return void 0 === a && (a = setTimeout(v, e)), o
            }
            return e = Le(e) || 0, Ae(i) && (h = !!i.leading, s = (u = "maxWait" in i) ? Oe(Le(i.maxWait) || 0, e) : s, f = "trailing" in i ? !!i.trailing : f), b.cancel = function() {
                void 0 !== a && clearTimeout(a), c = 0, r = l = n = a = void 0
            }, b.flush = function() {
                return void 0 === a ? o : y(ke())
            }, b
        },
        je = "Expected a function",
        Ne = "__lodash_hash_undefined__",
        Re = "[object Function]",
        We = "[object GeneratorFunction]",
        Ce = /^\[object .+?Constructor\]$/,
        ze = "object" == typeof n && n && n.Object === Object && n,
        De = "object" == typeof self && self && self.Object === Object && self,
        Ve = ze || De || Function("return this")(),
        Be = Array.prototype,
        Pe = Function.prototype,
        Fe = Object.prototype,
        He = Ve["__core-js_shared__"],
        qe = (Me = /[^.]+$/.exec(He && He.keys && He.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Me : "",
        Ie = Pe.toString,
        Xe = Fe.hasOwnProperty,
        Ye = Fe.toString,
        Ge = RegExp("^" + Ie.call(Xe).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        $e = Be.splice,
        Ue = ii(Ve, "Map"),
        Je = ii(Object, "create");

    function Ke(t) {
        var e = -1,
            i = t ? t.length : 0;
        for (this.clear(); ++e < i;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }

    function Qe(t) {
        var e = -1,
            i = t ? t.length : 0;
        for (this.clear(); ++e < i;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }

    function Ze(t) {
        var e = -1,
            i = t ? t.length : 0;
        for (this.clear(); ++e < i;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }

    function ti(t, e) {
        for (var i, r, n = t.length; n--;)
            if ((i = t[n][0]) === (r = e) || i != i && r != r) return n;
        return -1
    }

    function ei(t, e) {
        var i, r, n = t.__data__;
        return ("string" == (r = typeof(i = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== i : null === i) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }

    function ii(t, e) {
        var i, r = null == (i = t) ? void 0 : i[e];
        return function(t) {
            return !(!ni(t) || qe && qe in t) && ((i = ni(e = t) ? Ye.call(e) : "") == Re || i == We || function(t) {
                var e = !1;
                if (null != t && "function" != typeof t.toString) try {
                    e = !!(t + "")
                } catch (t) {}
                return e
            }(t) ? Ge : Ce).test(function(t) {
                if (null != t) {
                    try {
                        return Ie.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }(t));
            var e, i
        }(r) ? r : void 0
    }

    function ri(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(je);
        var i = function() {
            var r = arguments,
                n = e ? e.apply(this, r) : r[0],
                s = i.cache;
            if (s.has(n)) return s.get(n);
            var o = t.apply(this, r);
            return i.cache = s.set(n, o), o
        };
        return i.cache = new(ri.Cache || Ze), i
    }

    function ni(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    Ke.prototype.clear = function() {
        this.__data__ = Je ? Je(null) : {}
    }, Ke.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }, Ke.prototype.get = function(t) {
        var e = this.__data__;
        if (Je) {
            var i = e[t];
            return i === Ne ? void 0 : i
        }
        return Xe.call(e, t) ? e[t] : void 0
    }, Ke.prototype.has = function(t) {
        var e = this.__data__;
        return Je ? void 0 !== e[t] : Xe.call(e, t)
    }, Ke.prototype.set = function(t, e) {
        return this.__data__[t] = Je && void 0 === e ? Ne : e, this
    }, Qe.prototype.clear = function() {
        this.__data__ = []
    }, Qe.prototype.delete = function(t) {
        var e = this.__data__,
            i = ti(e, t);
        return !(i < 0 || (i == e.length - 1 ? e.pop() : $e.call(e, i, 1), 0))
    }, Qe.prototype.get = function(t) {
        var e = this.__data__,
            i = ti(e, t);
        return i < 0 ? void 0 : e[i][1]
    }, Qe.prototype.has = function(t) {
        return ti(this.__data__, t) > -1
    }, Qe.prototype.set = function(t, e) {
        var i = this.__data__,
            r = ti(i, t);
        return r < 0 ? i.push([t, e]) : i[r][1] = e, this
    }, Ze.prototype.clear = function() {
        this.__data__ = {
            hash: new Ke,
            map: new(Ue || Qe),
            string: new Ke
        }
    }, Ze.prototype.delete = function(t) {
        return ei(this, t).delete(t)
    }, Ze.prototype.get = function(t) {
        return ei(this, t).get(t)
    }, Ze.prototype.has = function(t) {
        return ei(this, t).has(t)
    }, Ze.prototype.set = function(t, e) {
        return ei(this, t).set(t, e), this
    }, ri.Cache = Ze;
    var si = ri,
        oi = function() {
            if ("undefined" != typeof Map) return Map;

            function t(t, e) {
                var i = -1;
                return t.some(function(t, r) {
                    return t[0] === e && (i = r, !0)
                }), i
            }
            return function() {
                function e() {
                    this.__entries__ = []
                }
                var i = {
                    size: {
                        configurable: !0
                    }
                };
                return i.size.get = function() {
                    return this.__entries__.length
                }, e.prototype.get = function(e) {
                    var i = t(this.__entries__, e),
                        r = this.__entries__[i];
                    return r && r[1]
                }, e.prototype.set = function(e, i) {
                    var r = t(this.__entries__, e);
                    ~r ? this.__entries__[r][1] = i : this.__entries__.push([e, i])
                }, e.prototype.delete = function(e) {
                    var i = this.__entries__,
                        r = t(i, e);
                    ~r && i.splice(r, 1)
                }, e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e)
                }, e.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var i = 0, r = this.__entries__; i < r.length; i += 1) {
                        var n = r[i];
                        t.call(e, n[1], n[0])
                    }
                }, Object.defineProperties(e.prototype, i), e
            }()
        }(),
        ai = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        li = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        ci = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(li) : function(t) {
            return setTimeout(function() {
                return t(Date.now())
            }, 1e3 / 60)
        },
        hi = 2,
        ui = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        fi = "undefined" != typeof MutationObserver,
        di = function() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                var i = !1,
                    r = !1,
                    n = 0;

                function s() {
                    i && (i = !1, t()), r && a()
                }

                function o() {
                    ci(s)
                }

                function a() {
                    var t = Date.now();
                    if (i) {
                        if (t - n < hi) return;
                        r = !0
                    } else i = !0, r = !1, setTimeout(o, e);
                    n = t
                }
                return a
            }(this.refresh.bind(this), 20)
        };
    di.prototype.addObserver = function(t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
    }, di.prototype.removeObserver = function(t) {
        var e = this.observers_,
            i = e.indexOf(t);
        ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
    }, di.prototype.refresh = function() {
        this.updateObservers_() && this.refresh()
    }, di.prototype.updateObservers_ = function() {
        var t = this.observers_.filter(function(t) {
            return t.gatherActive(), t.hasActive()
        });
        return t.forEach(function(t) {
            return t.broadcastActive()
        }), t.length > 0
    }, di.prototype.connect_ = function() {
        ai && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), fi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
    }, di.prototype.disconnect_ = function() {
        ai && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
    }, di.prototype.onTransitionEnd_ = function(t) {
        var e = t.propertyName;
        void 0 === e && (e = ""), ui.some(function(t) {
            return !!~e.indexOf(t)
        }) && this.refresh()
    }, di.getInstance = function() {
        return this.instance_ || (this.instance_ = new di), this.instance_
    }, di.instance_ = null;
    var pi = function(t, e) {
            for (var i = 0, r = Object.keys(e); i < r.length; i += 1) {
                var n = r[i];
                Object.defineProperty(t, n, {
                    value: e[n],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return t
        },
        vi = function(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || li
        },
        yi = wi(0, 0, 0, 0);

    function bi(t) {
        return parseFloat(t) || 0
    }

    function mi(t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        return e.reduce(function(e, i) {
            return e + bi(t["border-" + i + "-width"])
        }, 0)
    }
    var gi = "undefined" != typeof SVGGraphicsElement ? function(t) {
        return t instanceof vi(t).SVGGraphicsElement
    } : function(t) {
        return t instanceof vi(t).SVGElement && "function" == typeof t.getBBox
    };

    function xi(t) {
        return ai ? gi(t) ? wi(0, 0, (e = t.getBBox()).width, e.height) : function(t) {
            var e = t.clientWidth,
                i = t.clientHeight;
            if (!e && !i) return yi;
            var r, n = vi(t).getComputedStyle(t),
                s = function(t) {
                    for (var e = {}, i = 0, r = ["top", "right", "bottom", "left"]; i < r.length; i += 1) {
                        var n = r[i],
                            s = t["padding-" + n];
                        e[n] = bi(s)
                    }
                    return e
                }(n),
                o = s.left + s.right,
                a = s.top + s.bottom,
                l = bi(n.width),
                c = bi(n.height);
            if ("border-box" === n.boxSizing && (Math.round(l + o) !== e && (l -= mi(n, "left", "right") + o), Math.round(c + a) !== i && (c -= mi(n, "top", "bottom") + a)), (r = t) !== vi(r).document.documentElement) {
                var h = Math.round(l + o) - e,
                    u = Math.round(c + a) - i;
                1 !== Math.abs(h) && (l -= h), 1 !== Math.abs(u) && (c -= u)
            }
            return wi(s.left, s.top, l, c)
        }(t) : yi;
        var e
    }

    function wi(t, e, i, r) {
        return {
            x: t,
            y: e,
            width: i,
            height: r
        }
    }
    var Ei = function(t) {
        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = wi(0, 0, 0, 0), this.target = t
    };
    Ei.prototype.isActive = function() {
        var t = xi(this.target);
        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
    }, Ei.prototype.broadcastRect = function() {
        var t = this.contentRect_;
        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
    };
    var _i = function(t, e) {
            var i, r, n, s, o, a, l, c = (r = (i = e).x, n = i.y, s = i.width, o = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), pi(l, {
                x: r,
                y: n,
                width: s,
                height: o,
                top: n,
                right: r + s,
                bottom: o + n,
                left: r
            }), l);
            pi(this, {
                target: t,
                contentRect: c
            })
        },
        Oi = function(t, e, i) {
            if (this.activeObservations_ = [], this.observations_ = new oi, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
        };
    Oi.prototype.observe = function(t) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof vi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) || (e.set(t, new Ei(t)), this.controller_.addObserver(this), this.controller_.refresh())
        }
    }, Oi.prototype.unobserve = function(t) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof vi(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
        }
    }, Oi.prototype.disconnect = function() {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
    }, Oi.prototype.gatherActive = function() {
        var t = this;
        this.clearActive(), this.observations_.forEach(function(e) {
            e.isActive() && t.activeObservations_.push(e)
        })
    }, Oi.prototype.broadcastActive = function() {
        if (this.hasActive()) {
            var t = this.callbackCtx_,
                e = this.activeObservations_.map(function(t) {
                    return new _i(t.target, t.broadcastRect())
                });
            this.callback_.call(t, e, t), this.clearActive()
        }
    }, Oi.prototype.clearActive = function() {
        this.activeObservations_.splice(0)
    }, Oi.prototype.hasActive = function() {
        return this.activeObservations_.length > 0
    };
    var Si = "undefined" != typeof WeakMap ? new WeakMap : new oi,
        ki = function(t) {
            if (!(this instanceof ki)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var e = di.getInstance(),
                i = new Oi(t, e, this);
            Si.set(this, i)
        };
    ["observe", "unobserve", "disconnect"].forEach(function(t) {
        ki.prototype[t] = function() {
            return (e = Si.get(this))[t].apply(e, arguments);
            var e
        }
    });
    var Ai = void 0 !== li.ResizeObserver ? li.ResizeObserver : ki,
        Li = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Mi = function() {
            function t(e, i) {
                var r = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.onScroll = function() {
                    r.scrollXTicking || (window.requestAnimationFrame(r.scrollX), r.scrollXTicking = !0), r.scrollYTicking || (window.requestAnimationFrame(r.scrollY), r.scrollYTicking = !0)
                }, this.scrollX = function() {
                    r.axis.x.isOverflowing && (r.showScrollbar("x"), r.positionScrollbar("x")), r.scrollXTicking = !1
                }, this.scrollY = function() {
                    r.axis.y.isOverflowing && (r.showScrollbar("y"), r.positionScrollbar("y")), r.scrollYTicking = !1
                }, this.onMouseEnter = function() {
                    r.showScrollbar("x"), r.showScrollbar("y")
                }, this.onMouseMove = function(t) {
                    r.mouseX = t.clientX, r.mouseY = t.clientY, (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseMoveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseMoveForAxis("y")
                }, this.onMouseLeave = function() {
                    r.onMouseMove.cancel(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseLeaveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseLeaveForAxis("y"), r.mouseX = -1, r.mouseY = -1
                }, this.onWindowResize = function() {
                    r.scrollbarWidth = $t(), r.hideNativeScrollbar()
                }, this.hideScrollbars = function() {
                    r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(), r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(), r.isWithinBounds(r.axis.y.track.rect) || (r.axis.y.scrollbar.el.classList.remove(r.classNames.visible), r.axis.y.isVisible = !1), r.isWithinBounds(r.axis.x.track.rect) || (r.axis.x.scrollbar.el.classList.remove(r.classNames.visible), r.axis.x.isVisible = !1)
                }, this.onPointerEvent = function(t) {
                    var e, i;
                    r.axis.x.scrollbar.rect = r.axis.x.scrollbar.el.getBoundingClientRect(), r.axis.y.scrollbar.rect = r.axis.y.scrollbar.el.getBoundingClientRect(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && (i = r.isWithinBounds(r.axis.x.scrollbar.rect)), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && (e = r.isWithinBounds(r.axis.y.scrollbar.rect)), (e || i) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && r.onDragStart(t, "y"), i && r.onDragStart(t, "x")))
                }, this.drag = function(e) {
                    var i = r.axis[r.draggedAxis].track,
                        n = i.rect[r.axis[r.draggedAxis].sizeAttr],
                        s = r.axis[r.draggedAxis].scrollbar;
                    e.preventDefault(), e.stopPropagation();
                    var o = (("y" === r.draggedAxis ? e.pageY : e.pageX) - i.rect[r.axis[r.draggedAxis].offsetAttr] - r.axis[r.draggedAxis].dragOffset) / i.rect[r.axis[r.draggedAxis].sizeAttr] * r.contentEl[r.axis[r.draggedAxis].scrollSizeAttr];
                    "x" === r.draggedAxis && (o = r.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? o - (n + s.size) : o, o = r.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -o : o), r.contentEl[r.axis[r.draggedAxis].scrollOffsetAttr] = o
                }, this.onEndDrag = function(t) {
                    t.preventDefault(), t.stopPropagation(), document.removeEventListener("mousemove", r.drag), document.removeEventListener("mouseup", r.onEndDrag)
                }, this.el = e, this.flashTimeout, this.contentEl, this.offsetEl, this.maskEl, this.globalObserver, this.mutationObserver, this.resizeObserver, this.scrollbarWidth, this.minScrollbarWidth = 20, this.options = Gt({}, t.defaultOptions, i), this.classNames = Gt({}, t.defaultOptions.classNames, this.options.classNames), this.isRtl, this.axis = {
                    x: {
                        scrollOffsetAttr: "scrollLeft",
                        sizeAttr: "width",
                        scrollSizeAttr: "scrollWidth",
                        offsetAttr: "left",
                        overflowAttr: "overflowX",
                        dragOffset: 0,
                        isOverflowing: !0,
                        isVisible: !1,
                        forceVisible: !1,
                        track: {},
                        scrollbar: {}
                    },
                    y: {
                        scrollOffsetAttr: "scrollTop",
                        sizeAttr: "height",
                        scrollSizeAttr: "scrollHeight",
                        offsetAttr: "top",
                        overflowAttr: "overflowY",
                        dragOffset: 0,
                        isOverflowing: !0,
                        isVisible: !1,
                        forceVisible: !1,
                        track: {},
                        scrollbar: {}
                    }
                }, this.recalculate = fe(this.recalculate.bind(this), 64), this.onMouseMove = fe(this.onMouseMove.bind(this), 64), this.hideScrollbars = Te(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = Te(this.onWindowResize.bind(this), 64, {
                    leading: !0
                }), t.getRtlHelpers = si(t.getRtlHelpers), this.getContentElement = this.getScrollElement, this.init()
            }
            var e, i, r;
            return e = t, r = [{
                key: "getRtlHelpers",
                value: function() {
                    var e = document.createElement("div");
                    e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                    var i = e.firstElementChild;
                    document.body.appendChild(i);
                    var r = i.firstElementChild;
                    i.scrollLeft = 0;
                    var n = t.getOffset(i),
                        s = t.getOffset(r);
                    i.scrollLeft = 999;
                    var o = t.getOffset(r);
                    return {
                        isRtlScrollingInverted: n.left !== s.left && s.left - o.left != 0,
                        isRtlScrollbarInverted: n.left !== s.left
                    }
                }
            }, {
                key: "initHtmlApi",
                value: function() {
                    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            Array.from(e.addedNodes).forEach(function(e) {
                                1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                                    !e.SimpleBar && new t(e, t.getElOptions(e))
                                }))
                            }), Array.from(e.removedNodes).forEach(function(t) {
                                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t) {
                                    t.SimpleBar && t.SimpleBar.unMount()
                                }))
                            })
                        })
                    }), this.globalObserver.observe(document, {
                        childList: !0,
                        subtree: !0
                    })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
                }
            }, {
                key: "getElOptions",
                value: function(t) {
                    return Array.from(t.attributes).reduce(function(t, e) {
                        var i = e.name.match(/data-simplebar-(.+)/);
                        if (i) {
                            var r = i[1].replace(/\W+(.)/g, function(t, e) {
                                return e.toUpperCase()
                            });
                            switch (e.value) {
                                case "true":
                                    t[r] = !0;
                                    break;
                                case "false":
                                    t[r] = !1;
                                    break;
                                case void 0:
                                    t[r] = !0;
                                    break;
                                default:
                                    t[r] = e.value
                            }
                        }
                        return t
                    }, {})
                }
            }, {
                key: "removeObserver",
                value: function() {
                    this.globalObserver.disconnect()
                }
            }, {
                key: "initDOMLoadedElements",
                value: function() {
                    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                        e.SimpleBar || new t(e, t.getElOptions(e))
                    })
                }
            }, {
                key: "getOffset",
                value: function(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        top: e.top + (window.pageYOffset || document.documentElement.scrollTop),
                        left: e.left + (window.pageXOffset || document.documentElement.scrollLeft)
                    }
                }
            }], (i = [{
                key: "init",
                value: function() {
                    this.el.SimpleBar = this, this.initDOM(), Li && (this.scrollbarWidth = $t(), this.recalculate(), this.initListeners())
                }
            }, {
                key: "initDOM",
                value: function() {
                    var t = this;
                    if (Array.from(this.el.children).filter(function(e) {
                            return e.classList.contains(t.classNames.wrapper)
                        }).length) this.wrapperEl = this.el.querySelector(".".concat(this.classNames.wrapper)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content)), this.offsetEl = this.el.querySelector(".".concat(this.classNames.offset)), this.maskEl = this.el.querySelector(".".concat(this.classNames.mask)), this.placeholderEl = this.el.querySelector(".".concat(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.horizontal)), this.axis.y.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.vertical));
                    else {
                        for (this.wrapperEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentEl.classList.add(this.classNames.content), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                        this.offsetEl.appendChild(this.contentEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var e = document.createElement("div"),
                            i = document.createElement("div");
                        e.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), this.options.autoHide || i.classList.add(this.classNames.visible), e.appendChild(i), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
                    }
                    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar)), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar)), this.el.setAttribute("data-simplebar", "init")
                }
            }, {
                key: "initListeners",
                value: function() {
                    var t = this;
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick", "touchstart", "touchend", "touchmove"].forEach(function(e) {
                        t.el.addEventListener(e, t.onPointerEvent, !0)
                    }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentEl.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onWindowResize), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            e.target !== t.el && t.isChildNode(e.target) && !e.addedNodes.length || t.recalculate()
                        })
                    }), this.mutationObserver.observe(this.el, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })), this.resizeObserver = new Ai(this.recalculate), this.resizeObserver.observe(this.el)
                }
            }, {
                key: "recalculate",
                value: function() {
                    var t = this.heightAutoObserverEl.offsetHeight <= 1;
                    this.elStyles = window.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction, this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.contentEl.style.height = t ? "auto" : "100%", this.placeholderEl.style.width = "".concat(this.contentEl.scrollWidth, "px"), this.placeholderEl.style.height = "".concat(this.contentEl.scrollHeight, "px"), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft), this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect(), this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect(), this.axis.x.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollWidth : this.contentEl.scrollWidth - this.minScrollbarWidth) > Math.ceil(this.axis.x.track.rect.width), this.axis.y.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollHeight : this.contentEl.scrollHeight - this.minScrollbarWidth) > Math.ceil(this.axis.y.track.rect.height), this.axis.x.isOverflowing = "hidden" !== this.elStyles.overflowX && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== this.elStyles.overflowY && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px"), this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px"), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y"), this.hideNativeScrollbar()
                }
            }, {
                key: "getScrollbarSize",
                value: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                        i = this.scrollbarWidth ? this.contentEl[this.axis[e].scrollSizeAttr] : this.contentEl[this.axis[e].scrollSizeAttr] - this.minScrollbarWidth,
                        r = this.axis[e].track.rect[this.axis[e].sizeAttr];
                    if (this.axis[e].isOverflowing) {
                        var n = r / i;
                        return t = Math.max(~~(n * r), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (t = Math.min(t, this.options.scrollbarMaxSize)), t
                    }
                }
            }, {
                key: "positionScrollbar",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                        i = this.contentEl[this.axis[e].scrollSizeAttr],
                        r = this.axis[e].track.rect[this.axis[e].sizeAttr],
                        n = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                        s = this.axis[e].scrollbar,
                        o = this.contentEl[this.axis[e].scrollOffsetAttr],
                        a = (o = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (i - n),
                        l = ~~((r - s.size) * a);
                    l = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? l + (r - s.size) : l, s.el.style.transform = "x" === e ? "translate3d(".concat(l, "px, 0, 0)") : "translate3d(0, ".concat(l, "px, 0)")
                }
            }, {
                key: "toggleTrackVisibility",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                        e = this.axis[t].track.el,
                        i = this.axis[t].scrollbar.el;
                    this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? i.style.visibility = "visible" : i.style.visibility = "hidden"
                }
            }, {
                key: "hideNativeScrollbar",
                value: function() {
                    if (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0, !this.scrollbarWidth) {
                        var t = [this.isRtl ? "paddingLeft" : "paddingRight"];
                        this.contentEl.style[t] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "calc(".concat(this.elStyles[t], " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles[t], this.contentEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "calc(".concat(this.elStyles.paddingBottom, " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles.paddingBottom
                    }
                }
            }, {
                key: "onMouseMoveForAxis",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
                }
            }, {
                key: "onMouseLeaveForAxis",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
                }
            }, {
                key: "showScrollbar",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
                        e = this.axis[t].scrollbar.el;
                    this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
                }
            }, {
                key: "onDragStart",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
                        i = this.axis[e].scrollbar.el,
                        r = "y" === e ? t.pageY : t.pageX;
                    this.axis[e].dragOffset = r - i.getBoundingClientRect()[this.axis[e].offsetAttr], this.draggedAxis = e, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag)
                }
            }, {
                key: "getScrollElement",
                value: function() {
                    return this.contentEl
                }
            }, {
                key: "removeListeners",
                value: function() {
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), this.contentEl.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver.disconnect()
                }
            }, {
                key: "unMount",
                value: function() {
                    this.removeListeners(), this.el.SimpleBar = null
                }
            }, {
                key: "isChildNode",
                value: function(t) {
                    return null !== t && (t === this.el || this.isChildNode(t.parentNode))
                }
            }, {
                key: "isWithinBounds",
                value: function(t) {
                    return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
                }
            }]) && Yt(e.prototype, i), r && Yt(e, r), t
        }();
    return Mi.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        classNames: {
            content: "simplebar-content",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, Li && Mi.initHtmlApi(), Mi
});
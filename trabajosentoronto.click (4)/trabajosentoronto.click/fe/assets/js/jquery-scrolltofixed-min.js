! function(e) {
    e.isScrollToFixed = function(o) {
        return !!e(o).data("ScrollToFixed")
    }, e.ScrollToFixed = function(o, t) {
        var i = this;
        i.$el = e(o), i.el = o, i.$el.data("ScrollToFixed", i);
        var n, r, l, s, d = !1,
            a = i.$el,
            c = 0,
            u = 0,
            f = -1,
            p = -1,
            x = null;

        function m() {
            var e = i.options.limit;
            return e ? "function" == typeof e ? e.apply(a) : e : 0
        }

        function w() {
            return "fixed" === n
        }

        function h() {
            return "absolute" === n
        }

        function g() {
            return !(w() || h())
        }

        function b() {
            if (!w()) {
                var e = a[0].getBoundingClientRect();
                x.css({
                    display: a.css("display"),
                    width: e.width,
                    height: e.height,
                    float: a.css("float")
                }), cssOptions = {
                    "z-index": i.options.zIndex,
                    position: "fixed",
                    top: -1 == i.options.bottom ? y() : "",
                    bottom: -1 == i.options.bottom ? "" : i.options.bottom,
                    "margin-left": "0px"
                }, i.options.dontSetWidth || (cssOptions.width = a.css("width")), a.css(cssOptions), a.addClass(i.options.baseClassName), i.options.className && a.addClass(i.options.className), n = "fixed"
            }
        }

        function S() {
            var e = m(),
                o = u;
            i.options.removeOffsets && (o = "", e -= c), cssOptions = {
                position: "absolute",
                top: e,
                left: o,
                "margin-left": "0px",
                bottom: ""
            }, i.options.dontSetWidth || (cssOptions.width = a.css("width")), a.css(cssOptions), n = "absolute"
        }

        function v() {
            g() || (p = -1, x.css("display", "none"), a.css({
                "z-index": s,
                width: "",
                position: r,
                left: "",
                top: l,
                "margin-left": ""
            }), a.removeClass("scroll-to-fixed-fixed"), i.options.className && a.removeClass(i.options.className), n = null)
        }

        function T(e) {
            e != p && (a.css("left", u - e), p = e)
        }

        function y() {
            var e = i.options.marginTop;
            return e ? "function" == typeof e ? e.apply(a) : e : 0
        }

        function F() {
            if (e.isScrollToFixed(a) && !a.is(":hidden")) {
                var o = d,
                    t = g();
                d ? g() && (c = a.offset().top, u = a.offset().left) : (a.trigger("preUnfixed.ScrollToFixed"), v(), a.trigger("unfixed.ScrollToFixed"), p = -1, c = a.offset().top, u = a.offset().left, i.options.offsets && (u += a.offset().left - a.position().left), -1 == f && (f = u), n = a.css("position"), d = !0, -1 != i.options.bottom && (a.trigger("preFixed.ScrollToFixed"), b(), a.trigger("fixed.ScrollToFixed")));
                var l = e(window).scrollLeft(),
                    s = e(window).scrollTop(),
                    x = m();
                i.options.minWidth && e(window).width() < i.options.minWidth ? g() && o || (D(), a.trigger("preUnfixed.ScrollToFixed"), v(), a.trigger("unfixed.ScrollToFixed")) : i.options.maxWidth && e(window).width() > i.options.maxWidth ? g() && o || (D(), a.trigger("preUnfixed.ScrollToFixed"), v(), a.trigger("unfixed.ScrollToFixed")) : -1 == i.options.bottom ? x > 0 && s >= x - y() ? t || h() && o || (D(), a.trigger("preAbsolute.ScrollToFixed"), S(), a.trigger("unfixed.ScrollToFixed")) : s >= c - y() ? (w() && o || (D(), a.trigger("preFixed.ScrollToFixed"), b(), p = -1, a.trigger("fixed.ScrollToFixed")), T(l)) : g() && o || (D(), a.trigger("preUnfixed.ScrollToFixed"), v(), a.trigger("unfixed.ScrollToFixed")) : x > 0 ? s + e(window).height() - a.outerHeight(!0) >= x - (y() || - function() {
                    if (!i.options.bottom) return 0;
                    return i.options.bottom
                }()) ? w() && (D(), a.trigger("preUnfixed.ScrollToFixed"), "absolute" === r ? S() : v(), a.trigger("unfixed.ScrollToFixed")) : (w() || (D(), a.trigger("preFixed.ScrollToFixed"), b()), T(l), a.trigger("fixed.ScrollToFixed")) : T(l)
            }
        }

        function D() {
            var e = a.css("position");
            "absolute" == e ? a.trigger("postAbsolute.ScrollToFixed") : "fixed" == e ? a.trigger("postFixed.ScrollToFixed") : a.trigger("postUnfixed.ScrollToFixed")
        }
        var k = function(e) {
                a.is(":visible") ? (d = !1, F()) : v()
            },
            C = function(e) {
                window.requestAnimationFrame ? requestAnimationFrame(F) : F()
            };
        i.init = function() {
            i.options = e.extend({}, e.ScrollToFixed.defaultOptions, t), s = a.css("z-index"), i.$el.css("z-index", i.options.zIndex), x = e("<div />"), n = a.css("position"), r = a.css("position"), a.css("float"), l = a.css("top"), g() && i.$el.after(x), e(window).bind("resize.ScrollToFixed", k), e(window).bind("scroll.ScrollToFixed", C), "ontouchmove" in window && e(window).bind("touchmove.ScrollToFixed", F), i.options.preFixed && a.bind("preFixed.ScrollToFixed", i.options.preFixed), i.options.postFixed && a.bind("postFixed.ScrollToFixed", i.options.postFixed), i.options.preUnfixed && a.bind("preUnfixed.ScrollToFixed", i.options.preUnfixed), i.options.postUnfixed && a.bind("postUnfixed.ScrollToFixed", i.options.postUnfixed), i.options.preAbsolute && a.bind("preAbsolute.ScrollToFixed", i.options.preAbsolute), i.options.postAbsolute && a.bind("postAbsolute.ScrollToFixed", i.options.postAbsolute), i.options.fixed && a.bind("fixed.ScrollToFixed", i.options.fixed), i.options.unfixed && a.bind("unfixed.ScrollToFixed", i.options.unfixed), i.options.spacerClass && x.addClass(i.options.spacerClass), a.bind("resize.ScrollToFixed", function() {
                x.height(a.height())
            }), a.bind("scroll.ScrollToFixed", function() {
                a.trigger("preUnfixed.ScrollToFixed"), v(), a.trigger("unfixed.ScrollToFixed"), F()
            }), a.bind("detach.ScrollToFixed", function(o) {
                ! function(e) {
                    (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                }(o), a.trigger("preUnfixed.ScrollToFixed"), v(), a.trigger("unfixed.ScrollToFixed"), e(window).unbind("resize.ScrollToFixed", k), e(window).unbind("scroll.ScrollToFixed", C), a.unbind(".ScrollToFixed"), x.remove(), i.$el.removeData("ScrollToFixed")
            }), k()
        }, i.init()
    }, e.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3,
        baseClassName: "scroll-to-fixed-fixed"
    }, e.fn.scrollToFixed = function(o) {
        return this.each(function() {
            new e.ScrollToFixed(this, o)
        })
    }
}(jQuery),
function() {
    var e, o, t, i = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            fixedBackground: !0,
            excluded: ""
        },
        n = i,
        r = !1,
        l = !1,
        s = {
            x: 0,
            y: 0
        },
        d = !1,
        a = document.documentElement,
        c = [],
        u = /^Mac/.test(navigator.platform),
        f = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        p = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        };

    function x() {
        if (!d && document.body) {
            d = !0;
            var i = document.body,
                s = document.documentElement,
                c = window.innerHeight,
                u = i.scrollHeight;
            if (a = document.compatMode.indexOf("CSS") >= 0 ? s : i, e = i, n.keyboardSupport && H("keydown", S), top != self) l = !0;
            else if (G && u > c && (i.offsetHeight <= c || s.offsetHeight <= c)) {
                var f, p = document.createElement("div");
                p.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + a.scrollHeight + "px", document.body.appendChild(p), t = function() {
                    f || (f = setTimeout(function() {
                        r || (p.style.height = "0", p.style.height = a.scrollHeight + "px", f = null)
                    }, 500))
                }, setTimeout(t, 10), H("resize", t);
                if ((o = new W(t)).observe(i, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), a.offsetHeight <= c) {
                    var x = document.createElement("div");
                    x.style.clear = "both", i.appendChild(x)
                }
            }
            n.fixedBackground || r || (i.style.backgroundAttachment = "scroll", s.style.backgroundAttachment = "scroll")
        }
    }
    var m = [],
        w = !1,
        h = Date.now();

    function g(e, o, t) {
        var i, r;
        if (i = (i = o) > 0 ? 1 : -1, r = (r = t) > 0 ? 1 : -1, (s.x !== i || s.y !== r) && (s.x = i, s.y = r, m = [], h = 0), 1 != n.accelerationMax) {
            var l = Date.now() - h;
            if (l < n.accelerationDelta) {
                var d = (1 + 50 / l) / 2;
                d > 1 && (d = Math.min(d, n.accelerationMax), o *= d, t *= d)
            }
            h = Date.now()
        }
        if (m.push({
                x: o,
                y: t,
                lastX: o < 0 ? .99 : -.99,
                lastY: t < 0 ? .99 : -.99,
                start: Date.now()
            }), !w) {
            var a = e === document.body,
                c = function(i) {
                    for (var r = Date.now(), l = 0, s = 0, d = 0; d < m.length; d++) {
                        var u = m[d],
                            f = r - u.start,
                            p = f >= n.animationTime,
                            x = p ? 1 : f / n.animationTime;
                        n.pulseAlgorithm && (x = K(x));
                        var h = u.x * x - u.lastX >> 0,
                            g = u.y * x - u.lastY >> 0;
                        l += h, s += g, u.lastX += h, u.lastY += g, p && (m.splice(d, 1), d--)
                    }
                    a ? window.scrollBy(l, s) : (l && (e.scrollLeft += l), s && (e.scrollTop += s)), o || t || (m = []), m.length ? Y(c, e, 1e3 / n.frameRate + 1) : w = !1
                };
            Y(c, e, 0), w = !0
        }
    }

    function b(o) {
        d || x();
        var t = o.target;
        if (o.defaultPrevented || o.ctrlKey) return !0;
        if (N(e, "embed") || N(t, "embed") && /\.pdf/i.test(t.src) || N(e, "object") || t.shadowRoot) return !0;
        var i = -o.wheelDeltaX || o.deltaX || 0,
            r = -o.wheelDeltaY || o.deltaY || 0;
        u && (o.wheelDeltaX && L(o.wheelDeltaX, 120) && (i = o.wheelDeltaX / Math.abs(o.wheelDeltaX) * -120), o.wheelDeltaY && L(o.wheelDeltaY, 120) && (r = o.wheelDeltaY / Math.abs(o.wheelDeltaY) * -120)), i || r || (r = -o.wheelDelta || 0), 1 === o.deltaMode && (i *= 40, r *= 40);
        var s = M(t);
        return s ? !! function(e) {
            if (!e) return;
            c.length || (c = [e, e, e]);
            return e = Math.abs(e), c.push(e), c.shift(), clearTimeout(F), F = setTimeout(function() {
                try {
                    localStorage.SS_deltaBuffer = c.join(",")
                } catch (e) {}
            }, 1e3), !B(120) && !B(100)
        }(r) || (Math.abs(i) > 1.2 && (i *= n.stepSize / 120), Math.abs(r) > 1.2 && (r *= n.stepSize / 120), g(s, i, r), o.preventDefault(), void C()) : !l || !P || (Object.defineProperty(o, "target", {
            value: window.frameElement
        }), parent.wheel(o))
    }

    function S(o) {
        var t = o.target,
            i = o.ctrlKey || o.altKey || o.metaKey || o.shiftKey && o.keyCode !== f.spacebar;
        document.body.contains(e) || (e = document.activeElement);
        var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (o.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || N(t, "input") && !r.test(t.type) || N(e, "video") || function(e) {
                var o = e.target,
                    t = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                    do {
                        if (t = o.classList && o.classList.contains("html5-video-controls")) break
                    } while (o = o.parentNode);
                return t
            }(o) || t.isContentEditable || i) return !0;
        if ((N(t, "button") || N(t, "input") && r.test(t.type)) && o.keyCode === f.spacebar) return !0;
        if (N(t, "input") && "radio" == t.type && p[o.keyCode]) return !0;
        var s = 0,
            d = 0,
            a = M(e);
        if (!a) return !l || !P || parent.keydown(o);
        var c = a.clientHeight;
        switch (a == document.body && (c = window.innerHeight), o.keyCode) {
            case f.up:
                d = -n.arrowScroll;
                break;
            case f.down:
                d = n.arrowScroll;
                break;
            case f.spacebar:
                d = -(o.shiftKey ? 1 : -1) * c * .9;
                break;
            case f.pageup:
                d = .9 * -c;
                break;
            case f.pagedown:
                d = .9 * c;
                break;
            case f.home:
                d = -a.scrollTop;
                break;
            case f.end:
                var u = a.scrollHeight - a.scrollTop - c;
                d = u > 0 ? u + 10 : 0;
                break;
            case f.left:
                s = -n.arrowScroll;
                break;
            case f.right:
                s = n.arrowScroll;
                break;
            default:
                return !0
        }
        g(a, s, d), o.preventDefault(), C()
    }

    function v(o) {
        e = o.target
    }
    var T, y, F, D = (T = 0, function(e) {
            return e.uniqueID || (e.uniqueID = T++)
        }),
        k = {};

    function C() {
        clearTimeout(y), y = setInterval(function() {
            k = {}
        }, 1e3)
    }

    function z(e, o) {
        for (var t = e.length; t--;) k[D(e[t])] = o;
        return o
    }

    function M(e) {
        var o = [],
            t = document.body,
            i = a.scrollHeight;
        do {
            var n = k[D(e)];
            if (n) return z(o, n);
            if (o.push(e), i === e.scrollHeight) {
                var r = O(a) && O(t) || E(a);
                if (l && A(a) || !l && r) return z(o, $())
            } else if (A(e) && E(e)) return z(o, e)
        } while (e = e.parentElement)
    }

    function A(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }

    function O(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }

    function E(e) {
        var o = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === o || "auto" === o
    }

    function H(e, o) {
        window.addEventListener(e, o, {
            passive: false,
            capture: !1
        })
    }

    function U(e, o) {
        window.removeEventListener(e, o, !1)
    }

    function N(e, o) {
        return (e.nodeName || "").toLowerCase() === o.toLowerCase()
    }
    if (window.localStorage && localStorage.SS_deltaBuffer) try {
        c = localStorage.SS_deltaBuffer.split(",")
    } catch (e) {}

    function L(e, o) {
        return Math.floor(e / o) == e / o
    }

    function B(e) {
        return L(c[0], e) && L(c[1], e) && L(c[2], e)
    }
    var X, Y = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, o, t) {
            window.setTimeout(e, t || 1e3 / 60)
        },
        W = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        $ = function() {
            if (!X) {
                var e = document.createElement("div");
                e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                var o = document.body.scrollTop;
                document.documentElement.scrollTop, window.scrollBy(0, 3), X = document.body.scrollTop != o ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
            }
            return X
        };

    function q(e) {
        var o, t;
        return (e *= n.pulseScale) < 1 ? o = e - (1 - Math.exp(-e)) : (e -= 1, o = (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t)), o * n.pulseNormalize
    }

    function K(e) {
        return e >= 1 ? 1 : e <= 0 ? 0 : (1 == n.pulseNormalize && (n.pulseNormalize /= q(1)), q(e))
    }
    var R, j = window.navigator.userAgent,
        I = /Edge/.test(j),
        P = /chrome/i.test(j) && !I,
        V = /safari/i.test(j) && !I,
        _ = /mobile/i.test(j),
        Q = /Windows NT 6.1/i.test(j) && /rv:11/i.test(j),
        G = V && (/Version\/8/i.test(j) || /Version\/9/i.test(j)),
        J = (P || V || Q) && !_;

    function Z(e) {
        for (var o in e) i.hasOwnProperty(o) && (n[o] = e[o])
    }
    "onwheel" in document.createElement("div") ? R = "wheel" : "onmousewheel" in document.createElement("div") && (R = "mousewheel"), R && J && (H(R, b), H("mousedown", v), H("load", x)), Z.destroy = function() {
        o && o.disconnect(), U(R, b), U("mousedown", v), U("keydown", S), U("resize", t), U("load", x)
    }, window.SmoothScrollOptions && Z(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
        return Z
    }) : "object" == typeof exports ? module.exports = Z : window.SmoothScroll = Z
}();
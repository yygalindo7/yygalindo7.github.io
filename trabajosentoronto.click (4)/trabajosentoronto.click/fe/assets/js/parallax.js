! function(t) {
    "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "use strict";
    var e = {},
        i = Math.max,
        n = Math.min;
    e.c = {}, e.c.d = t(document), e.c.t = function(t) {
        return t.originalEvent.touches.length - 1
    }, e.o = function() {
        var i = this;
        this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative = !1, this.relativeWidth = !1, this.relativeHeight = !1, this.$div = null, this.run = function() {
            var e = function(t, e) {
                var n;
                for (n in e) i.o[n] = e[n];
                i._carve().init(), i._configure()._draw()
            };
            if (!this.$.data("kontroled")) {
                if (this.$.data("kontroled", !0), this.extend(), this.o = t.extend({
                        min: void 0 !== this.$.data("min") ? this.$.data("min") : 0,
                        max: void 0 !== this.$.data("max") ? this.$.data("max") : 100,
                        stopper: !0,
                        readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                        cursor: (!0 === this.$.data("cursor") ? 30 : this.$.data("cursor")) || 0,
                        thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                        lineCap: this.$.data("linecap") || "butt",
                        width: this.$.data("width") || 200,
                        height: this.$.data("height") || 200,
                        displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                        displayPrevious: this.$.data("displayprevious"),
                        fgColor: this.$.data("fgcolor") || "#87CEEB",
                        inputColor: this.$.data("inputcolor"),
                        font: this.$.data("font") || "Arial",
                        fontWeight: this.$.data("font-weight") || "bold",
                        inline: !1,
                        step: this.$.data("step") || 1,
                        rotation: this.$.data("rotation"),
                        draw: null,
                        change: null,
                        cancel: null,
                        release: null,
                        format: function(t) {
                            return t
                        },
                        parse: function(t) {
                            return parseFloat(t)
                        }
                    }, this.o), this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation, this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(e) {
                        var n = t(this);
                        i.i[e] = n, i.v[e] = i.o.parse(n.val()), n.bind("change blur", function() {
                            var t = {};
                            t[e] = n.val(), i.val(i._validate(t))
                        })
                    }), this.$.find("legend").remove()) : (this.i = this.$, this.v = this.o.parse(this.$.val()), "" === this.v && (this.v = this.o.min), this.$.bind("change blur", function() {
                        i.val(i._validate(i.o.parse(i.$.val())))
                    })), !this.o.displayInput && this.$.hide(), this.$c = t(document.createElement("canvas")).attr({
                        width: this.o.width,
                        height: this.o.height
                    }), this.$div = t('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null, !this.c) throw {
                    name: "CanvasNotSupportedException",
                    message: "Canvas not supported. Please use excanvas on IE8.0.",
                    toString: function() {
                        return this.name + ": " + this.message
                    }
                };
                return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width % 1 != 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height % 1 != 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind("configure", e).parent().bind("configure", e), this._listen()._configure()._xy().init(), this.isInit = !0, this.$.val(this.o.format(this.v)), this._draw(), this
            }
        }, this._carve = function() {
            if (this.relative) {
                var t = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                    e = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                this.w = this.h = Math.min(t, e)
            } else this.w = this.o.width, this.h = this.o.height;
            return this.$div.css({
                width: this.w + "px",
                height: this.h + "px"
            }), this.$c.attr({
                width: this.w,
                height: this.h
            }), 1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), this
        }, this._draw = function() {
            var t = !0;
            i.g = i.c, i.clear(), i.dH && (t = i.dH()), !1 !== t && i.draw()
        }, this._touch = function(t) {
            var n = function(t) {
                var e = i.xy2val(t.originalEvent.touches[i.t].pageX, t.originalEvent.touches[i.t].pageY);
                e != i.cv && (i.cH && !1 === i.cH(e) || (i.change(i._validate(e)), i._draw()))
            };
            return this.t = e.c.t(t), n(t), e.c.d.bind("touchmove.k", n).bind("touchend.k", function() {
                e.c.d.unbind("touchmove.k touchend.k"), i.val(i.cv)
            }), this
        }, this._mouse = function(t) {
            var n = function(t) {
                var e = i.xy2val(t.pageX, t.pageY);
                e != i.cv && (i.cH && !1 === i.cH(e) || (i.change(i._validate(e)), i._draw()))
            };
            return n(t), e.c.d.bind("mousemove.k", n).bind("keyup.k", function(t) {
                if (27 === t.keyCode) {
                    if (e.c.d.unbind("mouseup.k mousemove.k keyup.k"), i.eH && !1 === i.eH()) return;
                    i.cancel()
                }
            }).bind("mouseup.k", function(t) {
                e.c.d.unbind("mousemove.k mouseup.k keyup.k"), i.val(i.cv)
            }), this
        }, this._xy = function() {
            var t = this.$c.offset();
            return this.x = t.left, this.y = t.top, this
        }, this._listen = function() {
            return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(t) {
                t.preventDefault(), i._xy()._mouse(t)
            }).bind("touchstart", function(t) {
                t.preventDefault(), i._xy()._touch(t)
            }), this.listen()), this.relative && t(window).resize(function() {
                i._carve().init(), i._draw()
            }), this
        }, this._configure = function() {
            return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor, this
        }, this._clear = function() {
            this.$c[0].width = this.$c[0].width
        }, this._validate = function(t) {
            var e = ~~((0 > t ? -.5 : .5) + t / this.o.step) * this.o.step;
            return Math.round(100 * e) / 100
        }, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function(t) {}, this.val = function(t) {}, this.xy2val = function(t, e) {}, this.draw = function() {}, this.clear = function() {
            this._clear()
        }, this.h2rgba = function(t, e) {
            var i;
            return t = t.substring(1, 7), "rgba(" + (i = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)])[0] + "," + i[1] + "," + i[2] + "," + e + ")"
        }, this.copy = function(t, e) {
            for (var i in t) e[i] = t[i]
        }
    }, e.Dial = function() {
        e.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
            this.o = t.extend({
                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                angleOffset: this.$.data("angleoffset") || 0,
                angleArc: this.$.data("anglearc") || 360,
                inline: !0
            }, this.o)
        }, this.val = function(t, e) {
            return null == t ? this.v : (t = this.o.parse(t), void(!1 !== e && t != this.v && this.rH && !1 === this.rH(t) || (this.cv = this.o.stopper ? i(n(t, this.o.max), this.o.min) : t, this.v = this.cv, this.$.val(this.o.format(this.v)), this._draw())))
        }, this.xy2val = function(t, e) {
            var s, o;
            return s = Math.atan2(t - (this.x + this.w2), -(e - this.y - this.w2)) - this.angleOffset, this.o.flip && (s = this.angleArc - s - this.PI2), this.angleArc != this.PI2 && 0 > s && s > -.5 ? s = 0 : 0 > s && (s += this.PI2), o = s * (this.o.max - this.o.min) / this.angleArc + this.o.min, this.o.stopper && (o = i(n(o, this.o.max), this.o.min)), o
        }, this.listen = function() {
            var e, s, o, r, a = this,
                l = function(t) {
                    t.preventDefault();
                    var o = t.originalEvent,
                        r = o.detail || o.wheelDeltaX,
                        l = o.detail || o.wheelDeltaY,
                        h = a._validate(a.o.parse(a.$.val())) + (r > 0 || l > 0 ? a.o.step : 0 > r || 0 > l ? -a.o.step : 0);
                    h = i(n(h, a.o.max), a.o.min), a.val(h, !1), a.rH && (clearTimeout(e), e = setTimeout(function() {
                        a.rH(h), e = null
                    }, 100), s || (s = setTimeout(function() {
                        e && a.rH(h), s = null
                    }, 200)))
                },
                h = 1,
                c = {
                    37: -a.o.step,
                    38: a.o.step,
                    39: a.o.step,
                    40: -a.o.step
                };
            this.$.bind("keydown", function(e) {
                var s = e.keyCode;
                if (s >= 96 && 105 >= s && (s = e.keyCode = s - 48), o = parseInt(String.fromCharCode(s)), isNaN(o) && (13 !== s && 8 !== s && 9 !== s && 189 !== s && (190 !== s || a.$.val().match(/\./)) && e.preventDefault(), t.inArray(s, [37, 38, 39, 40]) > -1)) {
                    e.preventDefault();
                    var l = a.o.parse(a.$.val()) + c[s] * h;
                    a.o.stopper && (l = i(n(l, a.o.max), a.o.min)), a.change(a._validate(l)), a._draw(), r = window.setTimeout(function() {
                        h *= 2
                    }, 30)
                }
            }).bind("keyup", function(t) {
                isNaN(o) ? r && (window.clearTimeout(r), r = null, h = 1, a.val(a.$.val())) : a.$.val() > a.o.max && a.$.val(a.o.max) || a.$.val() < a.o.min && a.$.val(a.o.min)
            }), this.$c.bind("mousewheel DOMMouseScroll", l), this.$.bind("mousewheel DOMMouseScroll", l)
        }, this.init = function() {
            (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            var t = i(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
            this.o.displayInput && this.i.css({
                width: (this.w / 2 + 4 >> 0) + "px",
                height: (this.w / 3 >> 0) + "px",
                position: "absolute",
                "vertical-align": "middle",
                "margin-top": (this.w / 3 >> 0) + "px",
                "margin-left": "-" + (3 * this.w / 4 + 2 >> 0) + "px",
                border: 0,
                background: "none",
                font: this.o.fontWeight + " " + (this.w / t >> 0) + "px " + this.o.font,
                "text-align": "center",
                color: this.o.inputColor || this.o.fgColor,
                padding: "0px",
                "-webkit-appearance": "none"
            }) || this.i.css({
                width: "0px",
                visibility: "hidden"
            })
        }, this.change = function(t) {
            this.cv = t, this.$.val(this.o.format(t))
        }, this.angle = function(t) {
            return (t - this.o.min) * this.angleArc / (this.o.max - this.o.min)
        }, this.arc = function(t) {
            var e, i;
            return t = this.angle(t), this.o.flip ? i = (e = this.endAngle + 1e-5) - t - 1e-5 : i = (e = this.startAngle - 1e-5) + t + 1e-5, this.o.cursor && (e = i - this.cursorExt) && (i += this.cursorExt), {
                s: e,
                e: i,
                d: this.o.flip && !this.o.cursor
            }
        }, this.draw = function() {
            var t, e = this.g,
                i = this.arc(this.cv),
                n = 1;
            e.lineWidth = this.lineWidth, e.lineCap = this.lineCap, "none" !== this.o.bgColor && (e.beginPath(), e.strokeStyle = this.o.bgColor, e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), e.stroke()), this.o.displayPrevious && (t = this.arc(this.v), e.beginPath(), e.strokeStyle = this.pColor, e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d), e.stroke(), n = this.cv == this.v), e.beginPath(), e.strokeStyle = n ? this.o.fgColor : this.fgColor, e.arc(this.xy, this.xy, this.radius, i.s, i.e, i.d), e.stroke()
        }, this.cancel = function() {
            this.val(this.v)
        }
    }, t.fn.dial = t.fn.knob = function(i) {
        return this.each(function() {
            var n = new e.Dial;
            n.o = i, n.$ = t(this), n.run()
        }).parent()
    }
}),
function(t, e, i, n) {
    function s(e, i) {
        this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = o, this.init()
    }
    var o = "stellar",
        r = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(t) {
                t.hide()
            },
            showElement: function(t) {
                t.show()
            }
        },
        a = {
            scroll: {
                getLeft: function(t) {
                    return t.scrollLeft()
                },
                setLeft: function(t, e) {
                    t.scrollLeft(e)
                },
                getTop: function(t) {
                    return t.scrollTop()
                },
                setTop: function(t, e) {
                    t.scrollTop(e)
                }
            },
            position: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("margin-left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(t) {
                    var e = getComputedStyle(t[0])[h];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(t) {
                    var e = getComputedStyle(t[0])[h];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        l = {
            position: {
                setLeft: function(t, e) {
                    t.css("left", e)
                },
                setTop: function(t, e) {
                    t.css("top", e)
                }
            },
            transform: {
                setPosition: function(t, e, i, n, s) {
                    t[0].style[h] = "translate3d(" + (e - i) + "px, " + (n - s) + "px, 0)"
                }
            }
        },
        h = function() {
            var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = t("script")[0].style,
                s = "";
            for (e in n)
                if (i.test(e)) {
                    s = e.match(i)[0];
                    break
                }
            return "WebkitOpacity" in n && (s = "Webkit"), "KhtmlOpacity" in n && (s = "Khtml"),
                function(t) {
                    return s + (s.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                }
        }()("transform"),
        c = t("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== n,
        f = c ? function(t, e, i) {
            t.css({
                "background-position-x": e,
                "background-position-y": i
            })
        } : function(t, e, i) {
            t.css("background-position", e + " " + i)
        },
        u = c ? function(t) {
            return [t.css("background-position-x"), t.css("background-position-y")]
        } : function(t) {
            return t.css("background-position").split(" ")
        },
        d = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        };
    s.prototype = {
        init: function() {
            this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var t = this,
                e = a[t.options.scrollProperty];
            this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement)
            }, this._getScrollTop = function() {
                return e.getTop(t.$scrollElement)
            }
        },
        _defineSetters: function() {
            var e = this,
                i = a[e.options.scrollProperty],
                n = l[e.options.positionProperty],
                s = i.setLeft,
                o = i.setTop;
            this._setScrollLeft = "function" == typeof s ? function(t) {
                s(e.$scrollElement, t)
            } : t.noop, this._setScrollTop = "function" == typeof o ? function(t) {
                o(e.$scrollElement, t)
            } : t.noop, this._setPosition = n.setPosition || function(t, i, s, o, r) {
                e.options.horizontalScrolling && n.setLeft(t, i, s), e.options.verticalScrolling && n.setTop(t, o, r)
            }
        },
        _handleWindowLoadAndResize: function() {
            var i = this,
                n = t(e);
            i.options.responsive && n.bind("load." + this.name, function() {
                i.refresh()
            }), n.bind("resize." + this.name, function() {
                i._detectViewport(), i.options.responsive && i.refresh()
            })
        },
        refresh: function(i) {
            var n = this,
                s = n._getScrollLeft(),
                o = n._getScrollTop();
            i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                var t = n._getScrollLeft(),
                    e = n._getScrollTop();
                n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
            }), this._setScrollLeft(s), this._setScrollTop(o)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== n;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var e = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
                for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var i, s, o, r, a, l, h, c, f, u = t(this),
                    d = 0,
                    p = 0,
                    g = 0,
                    v = 0;
                if (u.data("stellar-elementIsActive")) {
                    if (u.data("stellar-elementIsActive") !== this) return
                } else u.data("stellar-elementIsActive", this);
                e.options.showElement(u), u.data("stellar-startingLeft") ? (u.css("left", u.data("stellar-startingLeft")), u.css("top", u.data("stellar-startingTop"))) : (u.data("stellar-startingLeft", u.css("left")), u.data("stellar-startingTop", u.css("top"))), o = u.position().left, r = u.position().top, a = "auto" === u.css("margin-left") ? 0 : parseInt(u.css("margin-left"), 10), l = "auto" === u.css("margin-top") ? 0 : parseInt(u.css("margin-top"), 10), c = u.offset().left - a, f = u.offset().top - l, u.parents().each(function() {
                    var e = t(this);
                    return !0 === e.data("stellar-offset-parent") ? (d = g, p = v, h = e, !1) : (g += e.position().left, void(v += e.position().top))
                }), i = u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : h !== n && h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : e.horizontalOffset, s = u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : h !== n && h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                    $element: u,
                    $offsetParent: h,
                    isFixed: "fixed" === u.css("position"),
                    horizontalOffset: i,
                    verticalOffset: s,
                    startingPositionLeft: o,
                    startingPositionTop: r,
                    startingOffsetLeft: c,
                    startingOffsetTop: f,
                    parentOffsetLeft: d,
                    parentOffsetTop: p,
                    stellarRatio: u.data("stellar-ratio") !== n ? u.data("stellar-ratio") : 1,
                    width: u.outerWidth(!0),
                    height: u.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var e, i = this,
                s = this._getScrollLeft(),
                o = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                var e, r, a, l, h, c, d, p = t(this),
                    g = u(p),
                    v = 0,
                    m = 0,
                    y = 0,
                    b = 0;
                if (p.data("stellar-backgroundIsActive")) {
                    if (p.data("stellar-backgroundIsActive") !== this) return
                } else p.data("stellar-backgroundIsActive", this);
                p.data("stellar-backgroundStartingLeft") ? f(p, p.data("stellar-backgroundStartingLeft"), p.data("stellar-backgroundStartingTop")) : (p.data("stellar-backgroundStartingLeft", g[0]), p.data("stellar-backgroundStartingTop", g[1])), a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), h = p.offset().left - a - s, c = p.offset().top - l - o, p.parents().each(function() {
                    var e = t(this);
                    return !0 === e.data("stellar-offset-parent") ? (v = y, m = b, d = e, !1) : (y += e.position().left, void(b += e.position().top))
                }), e = p.data("stellar-horizontal-offset") !== n ? p.data("stellar-horizontal-offset") : d !== n && d.data("stellar-horizontal-offset") !== n ? d.data("stellar-horizontal-offset") : i.horizontalOffset, r = p.data("stellar-vertical-offset") !== n ? p.data("stellar-vertical-offset") : d !== n && d.data("stellar-vertical-offset") !== n ? d.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                    $element: p,
                    $offsetParent: d,
                    isFixed: "fixed" === p.css("background-attachment"),
                    horizontalOffset: e,
                    verticalOffset: r,
                    startingValueLeft: g[0],
                    startingValueTop: g[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                    startingPositionLeft: p.position().left,
                    startingPositionTop: p.position().top,
                    startingOffsetLeft: h,
                    startingOffsetTop: c,
                    parentOffsetLeft: v,
                    parentOffsetTop: m,
                    stellarRatio: p.data("stellar-background-ratio") === n ? 1 : p.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var t, e, i, n, s;
            for (s = this.particles.length - 1; s >= 0; s--) e = (t = this.particles[s]).$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (s = this.backgrounds.length - 1; s >= 0; s--)(n = this.backgrounds[s]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), f(n.$element, n.startingValueLeft, n.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var i = this,
                n = t(e);
            n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                i.horizontalOffset = i.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                i.verticalOffset = i.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t, e, i, n, s, o, r, a, l, h, c = this._getScrollLeft(),
                u = this._getScrollTop(),
                d = !0,
                p = !0;
            if (this.currentScrollLeft !== c || this.currentScrollTop !== u || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = c, this.currentScrollTop = u, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, h = this.particles.length - 1; h >= 0; h--) e = (t = this.particles[h]).isFixed ? 1 : 0, this.options.horizontalScrolling ? a = (o = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (o = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? l = (r = (u + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, d = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : u) && l < (t.isFixed ? 0 : u) + this.viewportHeight + this.viewportOffsetTop), p && d ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, o, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                for (h = this.backgrounds.length - 1; h >= 0; h--) e = (i = this.backgrounds[h]).isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, s = this.options.verticalScrolling ? (u + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, f(i.$element, n, s)
            }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                i = function() {
                    t._repositionElements(), e = !1
                },
                n = function() {
                    e || (d(i), e = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, n), n()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() {
                d(t._animationLoop), t._repositionElements()
            }, this._animationLoop()
        }
    }, t.fn[o] = function(e) {
        var i = arguments;
        return e === n || "object" == typeof e ? this.each(function() {
            t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new s(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
            var n = t.data(this, "plugin_" + o);
            n instanceof s && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + o, null)
        }) : void 0
    }, t[o] = function() {
        var i = t(e);
        return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
    }, t[o].scrollProperty = a, t[o].positionProperty = l, e.Stellar = s
}(jQuery, this, document),
function(t) {
    var e = t(window),
        i = e.height();
    e.resize(function() {
        i = e.height()
    }), t.fn.parallax = function(n, s, o) {
        function r() {
            var o = e.scrollTop();
            h.each(function() {
                var e = t(this),
                    r = e.offset().top,
                    c = a(e);
                o > r + c || r > o + i || h.css("backgroundPosition", n + " " + Math.round((l - o) * s) + "px")
            })
        }
        var a, l, h = t(this);
        h.each(function() {
            l = h.offset().top
        }), a = o ? function(t) {
            return t.outerHeight(!0)
        } : function(t) {
            return t.height()
        }, (arguments.length < 1 || null === n) && (n = "50%"), (arguments.length < 2 || null === s) && (s = .1), (arguments.length < 3 || null === o) && (o = !0), e.bind("scroll", r).resize(r), r()
    }
}(jQuery), window.Modernizr = function(t, e, i) {
        function n(t) {
            g.cssText = t
        }

        function s(t, e) {
            return typeof t === e
        }

        function o(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function r(t, e) {
            for (var n in t) {
                var s = t[n];
                if (!o(s, "-") && g[s] !== i) return "pfx" != e || s
            }
            return !1
        }

        function a(t, e, n) {
            for (var o in t) {
                var r = e[t[o]];
                if (r !== i) return !1 === n ? t[o] : s(r, "function") ? r.bind(n || e) : r
            }
            return !1
        }

        function l(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + y.join(n + " ") + n).split(" ");
            return s(e, "string") || s(e, "undefined") ? r(o, e) : a(o = (t + " " + b.join(n + " ") + n).split(" "), e, i)
        }
        var h, c, f = {},
            u = e.documentElement,
            d = "modernizr",
            p = e.createElement(d),
            g = p.style,
            v = " -webkit- -moz- -o- -ms- ".split(" "),
            m = "Webkit Moz O ms",
            y = m.split(" "),
            b = m.toLowerCase().split(" "),
            w = {},
            $ = [],
            x = $.slice,
            _ = function(t, i, n, s) {
                var o, r, a, l, h = e.createElement("div"),
                    c = e.body,
                    f = c || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;)(a = e.createElement("div")).id = s ? s[n] : d + (n + 1), h.appendChild(a);
                return o = ["&#173;", '<style id="s', d, '">', t, "</style>"].join(""), h.id = d, (c ? h : f).innerHTML += o, f.appendChild(h), c || (f.style.background = "", f.style.overflow = "hidden", l = u.style.overflow, u.style.overflow = "hidden", u.appendChild(f)), r = i(h, t), c ? h.parentNode.removeChild(h) : (f.parentNode.removeChild(f), u.style.overflow = l), !!r
            },
            k = {}.hasOwnProperty;
        for (var O in c = s(k, "undefined") || s(k.call, "undefined") ? function(t, e) {
                return e in t && s(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return k.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                var e = this;
                if ("function" != typeof e) throw new TypeError;
                var i = x.call(arguments, 1),
                    n = function() {
                        if (this instanceof n) {
                            var s = function() {};
                            s.prototype = e.prototype;
                            var o = new s,
                                r = e.apply(o, i.concat(x.call(arguments)));
                            return Object(r) === r ? r : o
                        }
                        return e.apply(t, i.concat(x.call(arguments)))
                    };
                return n
            }), w.touch = function() {
                var i;
                return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : _(["@media (", v.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                    i = 9 === t.offsetTop
                }), i
            }, w.csstransitions = function() {
                return l("transition")
            }, w) c(w, O) && (h = O.toLowerCase(), f[h] = w[O](), $.push((f[h] ? "" : "no-") + h));
        return f.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) c(t, n) && f.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), f[t] !== i) return f;
                    e = "function" == typeof e ? e() : e, u.className += " " + (e ? "" : "no-") + t, f[t] = e
                }
                return f
            }, n(""), p = null,
            function(t, e) {
                function i() {
                    var t = p.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function n(t) {
                    var e = d[t[f]];
                    return e || (e = {}, u++, t[f] = u, d[u] = e), e
                }

                function s(t, i, s) {
                    return i || (i = e), a ? i.createElement(t) : (s || (s = n(i)), !(o = s.cache[t] ? s.cache[t].cloneNode() : c.test(t) ? (s.cache[t] = s.createElem(t)).cloneNode() : s.createElem(t)).canHaveChildren || h.test(t) || o.tagUrn ? o : s.frag.appendChild(o));
                    var o
                }

                function o(t) {
                    t || (t = e);
                    var o = n(t);
                    return p.shivCSS && !r && !o.hasCSS && (o.hasCSS = !! function(t, e) {
                        var i = t.createElement("p"),
                            n = t.getElementsByTagName("head")[0] || t.documentElement;
                        return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                    }(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), a || function(t, e) {
                        e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                            return p.shivMethods ? s(i, t, e) : e.createElem(i)
                        }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                            return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                        }) + ");return n}")(p, e.frag)
                    }(t, o), t
                }
                var r, a, l = t.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f = "_html5shiv",
                    u = 0,
                    d = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", r = "hidden" in t, a = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        r = !0, a = !0
                    }
                }();
                var p = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== l.shivCSS,
                    supportsUnknownElements: a,
                    shivMethods: !1 !== l.shivMethods,
                    type: "default",
                    shivDocument: o,
                    createElement: s,
                    createDocumentFragment: function(t, s) {
                        if (t || (t = e), a) return t.createDocumentFragment();
                        for (var o = (s = s || n(t)).frag.cloneNode(), r = 0, l = i(), h = l.length; r < h; r++) o.createElement(l[r]);
                        return o
                    }
                };
                t.html5 = p, o(e)
            }(this, e), f._version = "2.8.3", f._prefixes = v, f._domPrefixes = b, f._cssomPrefixes = y, f.mq = function(e) {
                var i, n = t.matchMedia || t.msMatchMedia;
                return n ? n(e) && n(e).matches || !1 : (_("@media " + e + " { #" + d + " { position: absolute; } }", function(e) {
                    i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), i)
            }, f.testProp = function(t) {
                return r([t])
            }, f.testAllProps = l, f.testStyles = _, u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + $.join(" "), f
    }(this, this.document),
    function(t, e, i) {
        function n(t) {
            return "[object Function]" == v.call(t)
        }

        function s(t) {
            return "string" == typeof t
        }

        function o() {}

        function r(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = m.shift();
            y = 1, t ? t.t ? p(function() {
                ("c" == t.t ? u.injectCss : u.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : y = 0
        }

        function l(t, i, n, s, o, l, h) {
            function c(e) {
                if (!d && r(f.readyState) && (b.r = d = 1, !y && a(), f.onload = f.onreadystatechange = null, e))
                    for (var n in "img" != t && p(function() {
                            $.removeChild(f)
                        }, 50), S[i]) S[i].hasOwnProperty(n) && S[i][n].onload()
            }
            h = h || u.errorTimeout;
            var f = e.createElement(t),
                d = 0,
                v = 0,
                b = {
                    t: n,
                    s: i,
                    e: o,
                    a: l,
                    x: h
                };
            1 === S[i] && (v = 1, S[i] = []), "object" == t ? f.data = i : (f.src = i, f.type = t), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function() {
                c.call(this, v)
            }, m.splice(s, 0, b), "img" != t && (v || 2 === S[i] ? ($.insertBefore(f, w ? null : g), p(c, h)) : S[i].push(f))
        }

        function h(t, e, i, n, o) {
            return y = 0, e = e || "j", s(t) ? l("c" == e ? _ : x, t, e, this.i++, i, n, o) : (m.splice(this.i++, 0, t), 1 == m.length && a()), this
        }

        function c() {
            var t = u;
            return t.loader = {
                load: h,
                i: 0
            }, t
        }
        var f, u, d = e.documentElement,
            p = t.setTimeout,
            g = e.getElementsByTagName("script")[0],
            v = {}.toString,
            m = [],
            y = 0,
            b = "MozAppearance" in d.style,
            w = b && !!e.createRange().compareNode,
            $ = w ? d : g.parentNode,
            x = (d = t.opera && "[object Opera]" == v.call(t.opera), d = !!e.attachEvent && !d, b ? "object" : d ? "script" : "img"),
            _ = d ? "script" : x,
            k = Array.isArray || function(t) {
                return "[object Array]" == v.call(t)
            },
            O = [],
            S = {},
            E = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (u = function(t) {
            function e(t, e, s, o, r) {
                var a = function(t) {
                        t = t.split("!");
                        var e, i, n, s = O.length,
                            o = t.pop(),
                            r = t.length;
                        for (o = {
                                url: o,
                                origUrl: o,
                                prefixes: t
                            }, i = 0; i < r; i++) n = t[i].split("="), (e = E[n.shift()]) && (o = e(o, n));
                        for (i = 0; i < s; i++) o = O[i](o);
                        return o
                    }(t),
                    l = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (e && (e = n(e) ? e : e[t] || e[o] || e[t.split("/").pop().split("?")[0]]), a.instead ? a.instead(t, e, s, o, r) : (S[a.url] ? a.noexec = !0 : S[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : i, a.noexec, a.attrs, a.timeout), (n(e) || n(l)) && s.load(function() {
                    c(), e && e(a.origUrl, r, o), l && l(a.origUrl, r, o), S[a.url] = 2
                })))
            }

            function r(t, i) {
                function r(t, o) {
                    if (t) {
                        if (s(t)) o || (f = function() {
                            var t = [].slice.call(arguments);
                            u.apply(this, t), d()
                        }), e(t, f, i, 0, h);
                        else if (Object(t) === t)
                            for (l in a = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!o && !--a && (n(f) ? f = function() {
                                var t = [].slice.call(arguments);
                                u.apply(this, t), d()
                            } : f[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), d()
                                }
                            }(u[l])), e(t[l], f, i, l, h))
                    } else !o && d()
                }
                var a, l, h = !!t.test,
                    c = t.load || t.both,
                    f = t.callback || o,
                    u = f,
                    d = t.complete || o;
                r(h ? t.yep : t.nope, !!c), c && r(c)
            }
            var a, l, h = this.yepnope.loader;
            if (s(t)) e(t, 0, h, 0);
            else if (k(t))
                for (a = 0; a < t.length; a++) s(l = t[a]) ? e(l, 0, h, 0) : k(l) ? u(l) : Object(l) === l && r(l, h);
            else Object(t) === t && r(t, h)
        }).addPrefix = function(t, e) {
            E[t] = e
        }, u.addFilter = function(t) {
            O.push(t)
        }, u.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", f = function() {
            e.removeEventListener("DOMContentLoaded", f, 0), e.readyState = "complete"
        }, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, n, s, l, h) {
            var c, f, d = e.createElement("script");
            s = s || u.errorTimeout;
            for (f in d.src = t, n) d.setAttribute(f, n[f]);
            i = h ? a : i || o, d.onreadystatechange = d.onload = function() {
                !c && r(d.readyState) && (c = 1, i(), d.onload = d.onreadystatechange = null)
            }, p(function() {
                c || (c = 1, i(1))
            }, s), l ? d.onload() : g.parentNode.insertBefore(d, g)
        }, t.yepnope.injectCss = function(t, i, n, s, r, l) {
            var h;
            s = e.createElement("link"), i = l ? a : i || o;
            for (h in s.href = t, s.rel = "stylesheet", s.type = "text/css", n) s.setAttribute(h, n[h]);
            r || (g.parentNode.insertBefore(s, g), p(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
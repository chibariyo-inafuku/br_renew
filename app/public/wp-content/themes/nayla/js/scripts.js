/*! E-Gallery v1.2.0 by Elementor */
var EGallery = function(t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var s = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    return i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var s in t)
                i.d(n, s, function(e) {
                    return t[e]
                }.bind(null, s));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 9)
}([function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e) {
    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    t.exports = function(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }
}, function(t, e, i) {
    var n = i(5),
        s = i(6);
    t.exports = function(t, e) {
        return !e || "object" !== n(e) && "function" != typeof e ? s(t) : e
    }
}, function(t, e) {
    function i(e) {
        return t.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, i(e)
    }
    t.exports = i
}, function(t, e, i) {
    var n = i(7);
    t.exports = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && n(t, e)
    }
}, function(t, e) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function(t) {
            return i(t)
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
        })(t)
    }
    function s(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = s = function(t) {
            return n(t)
        } : t.exports = s = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, s(e)
    }
    t.exports = s
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}, function(t, e) {
    function i(e, n) {
        return t.exports = i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, i(e, n)
    }
    t.exports = i
}, function(t, e, i) {}, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(0),
        s = i.n(n),
        r = i(1),
        a = i.n(r),
        o = i(2),
        l = i.n(o),
        u = i(3),
        c = i.n(u),
        h = i(4),
        y = i.n(h);
    var g = function() {
            function t(e) {
                var i = this;
                s()(this, t),
                this.settings = jQuery.extend(!0, this.getDefaultSettings(), e),
                this.$container = jQuery(this.settings.container),
                this.timeouts = [],
                this.initElements(),
                this.prepareGallery();
                var n = this.runGallery.bind(this);
                this.runGallery = this.debounce(function() {
                    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
                        e[s] = arguments[s];
                    i.settings.lazyLoad ? n.apply(void 0, e) : i.allImagesPromise.then(function() {
                        return n.apply(void 0, e)
                    })
                }, 300),
                this.settings.lazyLoad && (this.handleScroll = this.debounce(function() {
                    return i.lazyLoadImages()
                }, 16)),
                this.bindEvents(),
                this.runGallery()
            }
            return a()(t, [{
                key: "getDefaultSettings",
                value: function() {
                    return {}
                }
            }, {
                key: "getItemClass",
                value: function(t) {
                    return this.settings.classesPrefix + t
                }
            }, {
                key: "initElements",
                value: function() {
                    this.elements = {
                        $window: jQuery(window)
                    };
                    var t = "-" + (this.settings.rtl ? "rtl" : "ltr"),
                        e = this.getItemClass(this.settings.classes.container) + " " + this.getItemClass(this.settings.type) + " " + this.getItemClass(t);
                    this.settings.lazyLoad && (e += " " + this.getItemClass(this.settings.classes.lazyLoad)),
                    this.$container.addClass(e)
                }
            }, {
                key: "bindEvents",
                value: function() {
                    this.elements.$window.on("resize", this.runGallery),
                    this.settings.lazyLoad && this.elements.$window.on("scroll", this.handleScroll)
                }
            }, {
                key: "getNestedObjectData",
                value: function(t, e) {
                    var i = e.split("."),
                        n = i.splice(0, 1);
                    return i.length ? this.getNestedObjectData(t[n], i.join(".")) : {
                        object: t,
                        key: e
                    }
                }
            }, {
                key: "getTemplateArgs",
                value: function(t, e) {
                    var i = this.getNestedObjectData(t, e);
                    return i.object[i.key] || ""
                }
            }, {
                key: "getCurrentBreakpoint",
                value: function() {
                    var t = Object.keys(this.settings.breakpoints).map(Number).sort(function(t, e) {
                            return t - e
                        }),
                        e = 0;
                    return t.some(function(t) {
                        return innerWidth < t && (e = t, !0)
                    }), e
                }
            }, {
                key: "getCurrentDeviceSetting",
                value: function(t) {
                    var e = this.getCurrentBreakpoint();
                    return e ? this.settings.breakpoints[e][t] : this.settings[t]
                }
            }, {
                key: "getActiveItems",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = this.settings.tags,
                        i = [];
                    if (!e.length)
                        return t ? (this.$items.each(function(t) {
                            i.push(t)
                        }), i) : this.$items;
                    var n = this.$items.filter(function(n, s) {
                        var r = s.dataset.eGalleryTags;
                        return !!r && (r = r.split(/[ ,]+/), !!e.some(function(t) {
                                return r.includes(t)
                            }) && (t && i.push(n), !0))
                    });
                    return t ? i : n
                }
            }, {
                key: "getImageData",
                value: function(t) {
                    return this.settings.tags.length && (t = this.getActiveItems(!0)[t]), this.imagesData[t]
                }
            }, {
                key: "compileTemplate",
                value: function(t, e) {
                    var i = this;
                    return t.replace(/{{([^}]+)}}/g, function(t, n) {
                        return i.getTemplateArgs(e, n.trim())
                    })
                }
            }, {
                key: "createOverlay",
                value: function(t) {
                    var e = this.settings,
                        i = e.classes,
                        n = e.overlayTemplate,
                        s = jQuery("<div>", {
                            class: this.getItemClass(i.overlay)
                        }),
                        r = this.compileTemplate(n, jQuery.extend(!0, this.settings, t));
                    return s.html(r), s
                }
            }, {
                key: "createItem",
                value: function(t) {
                    var e,
                        i = this.settings.classes,
                        n = jQuery("<div>", {
                            class: this.getItemClass(i.item),
                            "data-e-gallery-tags": t.tags
                        }),
                        s = jQuery("<div>", {
                            class: this.getItemClass(i.image)
                        });
                    this.settings.lazyLoad || s.css("background-image", "url(" + t.thumbnail + ")"),
                    this.settings.overlay && (e = this.createOverlay(t));
                    var r = n;
                    return t.url && (r = jQuery("<a>", {
                        class: this.getItemClass(i.link),
                        href: t.url
                    }), n.html(r)), r.html(s), e && r.append(e), n
                }
            }, {
                key: "debounce",
                value: function(t, e) {
                    var i,
                        n = this;
                    return function() {
                        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
                            r[a] = arguments[a];
                        clearTimeout(i),
                        i = setTimeout(function() {
                            return t.apply(void 0, r)
                        }, e),
                        n.timeouts.push(i)
                    }
                }
            }, {
                key: "buildGallery",
                value: function() {
                    var t = this,
                        e = this.settings.items;
                    this.$items = jQuery(),
                    e.forEach(function(e) {
                        var i = t.createItem(e);
                        t.$items = t.$items.add(i),
                        t.$container.append(i)
                    })
                }
            }, {
                key: "loadImages",
                value: function() {
                    var t = this,
                        e = [];
                    this.settings.items.forEach(function(i, n) {
                        var s = new Image,
                            r = new Promise(function(t) {
                                s.onload = t
                            });
                        e.push(r),
                        r.then(function() {
                            return t.calculateImageSize(s, n)
                        }),
                        s.src = i.thumbnail
                    }),
                    this.allImagesPromise = Promise.all(e)
                }
            }, {
                key: "lazyLoadImages",
                value: function() {
                    var t = this;
                    if (!this.lazyLoadComplete) {
                        var e = this.getActiveItems(),
                            i = this.getActiveItems(!0);
                        e.each(function(e, n) {
                            var s = t.settings.items[i[e]];
                            if (s.loading || !function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                                    i = t.getBoundingClientRect().top,
                                    n = t.offsetHeight,
                                    s = i + n;
                                return ("middle" === e ? i + n / 2 : "bottom" === e ? s : i) <= innerHeight && s >= 0
                            }(n))
                                return !0;
                            s.loading = !0;
                            var r = jQuery(n),
                                a = new Image;
                            return new Promise(function(t) {
                                a.onload = t
                            }).then(function() {
                                r.find(t.settings.selectors.image).css("background-image", 'url("' + s.thumbnail + '")').addClass(t.getItemClass(t.settings.classes.imageLoaded)),
                                t.loadedItemsCount++,
                                t.loadedItemsCount === t.settings.items.length && (t.lazyLoadComplete = !0)
                            }), a.src = s.thumbnail, !0
                        })
                    }
                }
            }, {
                key: "calculateImageSize",
                value: function(t, e) {
                    this.imagesData[e] = {
                        width: t.width,
                        height: t.height,
                        ratio: t.width / t.height
                    }
                }
            }, {
                key: "createImagesData",
                value: function() {
                    var t = this;
                    this.settings.items.forEach(function(e, i) {
                        return t.calculateImageSize(e, i)
                    })
                }
            }, {
                key: "makeGalleryFromContent",
                value: function() {
                    var t = this.settings.selectors,
                        e = this.settings.lazyLoad,
                        i = [];
                    this.$items = this.$container.find(t.items),
                    this.$items.each(function(n, s) {
                        var r = jQuery(s).find(t.image);
                        i[n] = {
                            thumbnail: r.data("thumbnail")
                        },
                        e ? (i[n].width = r.data("width"), i[n].height = r.data("height")) : r.css("background-image", 'url("'.concat(r.data("thumbnail"), '")'))
                    }),
                    this.settings.items = i
                }
            }, {
                key: "prepareGallery",
                value: function() {
                    this.settings.items ? this.buildGallery() : this.makeGalleryFromContent(),
                    this.imagesData = [],
                    this.settings.lazyLoad ? (this.loadedItemsCount = 0, this.lazyLoadComplete = !1, this.createImagesData()) : this.loadImages()
                }
            }, {
                key: "runGallery",
                value: function(t) {
                    var e = this,
                        i = this.$container[0].style;
                    i.setProperty("--hgap", this.getCurrentDeviceSetting("horizontalGap") + "px"),
                    i.setProperty("--vgap", this.getCurrentDeviceSetting("verticalGap") + "px"),
                    i.setProperty("--animation-duration", this.settings.animationDuration + "ms"),
                    this.$items.addClass(this.getItemClass(this.settings.classes.hidden)),
                    this.getActiveItems().removeClass(this.getItemClass(this.settings.classes.hidden)),
                    this.settings.lazyLoad && setTimeout(function() {
                        return e.lazyLoadImages()
                    }, 300),
                    this.run(t)
                }
            }, {
                key: "setSettings",
                value: function(t, e) {
                    var i = this.getNestedObjectData(this.settings, t);
                    i.object && (i.object[i.key] = e, this.runGallery(!0))
                }
            }, {
                key: "unbindEvents",
                value: function() {
                    this.elements.$window.off("resize", this.runGallery)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unbindEvents(),
                    this.$container.empty(),
                    this.timeouts.forEach(function(t) {
                        return clearTimeout(t)
                    })
                }
            }]), t
        }(),
        f = function(t) {
            function e() {
                return s()(this, e), l()(this, c()(e).apply(this, arguments))
            }
            return y()(e, t), a()(e, [{
                key: "getDefaultSettings",
                value: function() {
                    return {
                        aspectRatio: "16:9"
                    }
                }
            }, {
                key: "setItemsPosition",
                value: function() {
                    var t = this.getCurrentDeviceSetting("columns");
                    this.getActiveItems().each(function(e, i) {
                        i.style.setProperty("--column", e % t),
                        i.style.setProperty("--row", Math.floor(e / t))
                    })
                }
            }, {
                key: "setContainerSize",
                value: function() {
                    var t = this.getCurrentDeviceSetting("columns"),
                        e = Math.ceil(this.getActiveItems().length / t),
                        i = this.$container[0].style;
                    i.setProperty("--columns", t),
                    i.setProperty("--rows", e);
                    var n = this.getActiveItems().width(),
                        s = this.settings.aspectRatio.split(":"),
                        r = s[1] / s[0],
                        a = (r * n * e + this.getCurrentDeviceSetting("horizontalGap") * (e - 1)) / this.$container.width() * 100;
                    i.setProperty("--aspect-ratio", 100 * r + "%"),
                    i.setProperty("--container-aspect-ratio", a + "%")
                }
            }, {
                key: "run",
                value: function() {
                    var t = this,
                        e = this.getItemClass(this.settings.classes.animated);
                    this.$container.addClass(e),
                    setTimeout(function() {
                        t.setItemsPosition(),
                        t.setContainerSize(),
                        setTimeout(function() {
                            return t.$container.removeClass(e)
                        }, t.settings.animationDuration)
                    }, 50)
                }
            }]), e
        }(g),
        m = function(t) {
            function e() {
                return s()(this, e), l()(this, c()(e).apply(this, arguments))
            }
            return y()(e, t), a()(e, [{
                key: "getDefaultSettings",
                value: function() {
                    return {
                        idealRowHeight: 200,
                        lastRow: "auto",
                        breakpoints: {
                            1024: {
                                idealRowHeight: 150
                            },
                            768: {
                                idealRowHeight: 100
                            }
                        }
                    }
                }
            }, {
                key: "run",
                value: function() {
                    this.rowsHeights = [],
                    this.rowsCount = 0,
                    this.containerWidth = this.$container.width(),
                    this.makeJustifiedRow(0)
                }
            }, {
                key: "makeJustifiedRow",
                value: function(t) {
                    for (var e = 0, i = t;; i++) {
                        var n = this.getImageData(i),
                            s = Math.round(this.getCurrentDeviceSetting("idealRowHeight") * n.ratio);
                        s > this.containerWidth && (s = this.containerWidth);
                        var r = e + s;
                        if (r > this.containerWidth)
                            if (this.containerWidth - e < r - this.containerWidth) {
                                this.fitImagesInContainer(t, i, e),
                                this.rowsCount++,
                                this.makeJustifiedRow(i);
                                break
                            }
                        var a = i === this.getActiveItems().length - 1;
                        if (n.computedWidth = s, a) {
                            var o = this.getCurrentDeviceSetting("lastRow");
                            if ("hide" !== o) {
                                var l = "fit" === o || .7 <= r / this.containerWidth ? r : this.containerWidth;
                                this.fitImagesInContainer(t, i + 1, l)
                            }
                            this.inflateGalleryHeight();
                            break
                        }
                        e = r
                    }
                }
            }, {
                key: "fitImagesInContainer",
                value: function(t, e, i) {
                    for (var n = e - t - 1, s = this.getActiveItems(), r = 0, a = t; a < e; a++) {
                        var o = this.getImageData(a),
                            l = o.computedWidth / i,
                            u = s.get(a),
                            c = this.getItemClass(this.settings.classes.firstRowItem);
                        if (u.style.setProperty("--item-width", l), u.style.setProperty("--gap-count", n), u.style.setProperty("--item-height", o.height / o.width * 100 + "%"), u.style.setProperty("--item-start", r), u.style.setProperty("--item-row-index", a - t), r += l, a === t) {
                            u.classList.add(c);
                            var h = l * (this.containerWidth - n * this.getCurrentDeviceSetting("horizontalGap"));
                            this.rowsHeights.push(h / o.ratio)
                        } else
                            u.classList.remove(c)
                    }
                }
            }, {
                key: "inflateGalleryHeight",
                value: function() {
                    var t = this.rowsHeights.reduce(function(t, e) {
                            return t + e
                        }) + this.rowsCount * this.getCurrentDeviceSetting("verticalGap"),
                        e = t / this.containerWidth,
                        i = this.rowsHeights.map(function(e) {
                            return e / t * 100
                        }),
                        n = -1,
                        s = 0;
                    this.getActiveItems().each(function(t, e) {
                        "0" === e.style.getPropertyValue("--item-row-index") && ++n && (s += i[n - 1]),
                        e.style.setProperty("--item-top", s + "%"),
                        e.style.setProperty("--item-height", i[n] + "%"),
                        e.style.setProperty("--row", n)
                    }),
                    this.$container[0].style.setProperty("--container-aspect-ratio", e)
                }
            }]), e
        }(g),
        d = function(t) {
            function e() {
                return s()(this, e), l()(this, c()(e).apply(this, arguments))
            }
            return y()(e, t), a()(e, [{
                key: "run",
                value: function(t) {
                    var e = this,
                        i = this.getCurrentBreakpoint();
                    if (t || i !== this.currentBreakpoint) {
                        this.currentBreakpoint = i;
                        for (var n = [], s = [], r = [], a = this.getCurrentDeviceSetting("columns"), o = this.$container.width(), l = (o - this.getCurrentDeviceSetting("horizontalGap") * (a - 1)) / a, u = this.getActiveItems(), c = 0, h = 0; h < a; h++)
                            s[h] = 0,
                            n[h] = 0;
                        u.each(function(t, i) {
                            var o = e.getImageData(t),
                                u = l / o.ratio,
                                h = t % a;
                            c = n[h],
                            jQuery.each(n, function(t, e) {
                                e && c > e + 5 && (c = e, h = t)
                            }),
                            r[t] = n[h],
                            n[h] += u,
                            i.style.setProperty("--item-height", o.height / o.width * 100 + "%"),
                            i.style.setProperty("--column", h),
                            i.style.setProperty("--items-in-column", s[h]),
                            s[h]++
                        });
                        var y = Math.max.apply(Math, n),
                            g = n.indexOf(y),
                            f = s[g] - 1,
                            m = y / o;
                        this.$container[0].style.setProperty("--columns", a),
                        this.$container[0].style.setProperty("--highest-column-gap-count", f),
                        this.$container.css("padding-bottom", 100 * m + "%"),
                        u.each(function(t, e) {
                            var i = r[t] ? r[t] / y * 100 : 0;
                            e.style.setProperty("--percent-height", i + "%")
                        })
                    }
                }
            }]), e
        }(g);
    i(8);
    i.d(e, "default", function() {
        return p
    });
    var p = function() {
        function t(e) {
            s()(this, t),
            this.userSettings = e,
            this.initGalleriesTypes(),
            this.createGallery()
        }
        return a()(t, [{
            key: "getDefaultSettings",
            value: function() {
                return {
                    container: null,
                    items: null,
                    type: "grid",
                    tags: [],
                    overlay: !1,
                    overlayTemplate: '<div class="{{ classesPrefix }}{{ classes.overlayTitle }}">{{ title }}</div><div class="{{ classesPrefix }}{{ classes.overlayDescription }}">{{ description }}</div>',
                    columns: 5,
                    horizontalGap: 10,
                    verticalGap: 10,
                    rtl: !1,
                    animationDuration: 350,
                    lazyLoad: !1,
                    classesPrefix: "e-gallery-",
                    classes: {
                        container: "container",
                        item: "item",
                        image: "image",
                        overlay: "overlay",
                        overlayTitle: "overlay__title",
                        overlayDescription: "overlay__description",
                        link: "link",
                        firstRowItem: "first-row-item",
                        animated: "-animated",
                        hidden: "item--hidden",
                        lazyLoad: "-lazyload",
                        imageLoaded: "image-loaded"
                    },
                    selectors: {
                        items: ".e-gallery-item",
                        image: ".e-gallery-image"
                    },
                    breakpoints: {
                        1024: {
                            horizontalGap: 5,
                            verticalGap: 5,
                            columns: 4
                        },
                        768: {
                            horizontalGap: 1,
                            verticalGap: 1,
                            columns: 2
                        }
                    }
                }
            }
        }, {
            key: "initGalleriesTypes",
            value: function() {
                this.galleriesTypes = {
                    grid: f,
                    justified: m,
                    masonry: d
                }
            }
        }, {
            key: "createGallery",
            value: function() {
                var t = jQuery.extend(this.getDefaultSettings(), this.userSettings),
                    e = this.galleriesTypes[t.type];
                this.galleryHandler = new e(t)
            }
        }, {
            key: "setSettings",
            value: function(t, e) {
                this.galleryHandler.setSettings(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.galleryHandler.destroy()
            }
        }]), t
    }()
}]).default;



 (function ($) {
    "use strict";
     
    gsap.config({
        nullTargetWarn: false
    });

    gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, CSSRulePlugin, ScrollToPlugin, MorphSVGPlugin, CustomEase, InertiaPlugin, ScrollSmoother, TextPlugin, Flip);


    var mobileQuery = window.matchMedia('(max-width: 450px)'),
        siteHeader = $('.site-header'),
        matchMedia = gsap.matchMedia(),
        isPhone = '(max-width: 450px)',
        isTablet = '(min-width: 450px) and (max-width: 900px)',
        isDesktop = '(min-width: 900px)';


    var keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }


    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassive = true;
            }
        }));
    } catch (e) {}

    var wheelOpt = supportsPassive ? {
        passive: false
    } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {

        if ($('body').hasClass('smooth-scroll')) {

            let aliothSmoother = ScrollSmoother.get();
            aliothSmoother.paused(true);

        } else {

            window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
            window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
            window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
            window.addEventListener('keydown', preventDefaultForScrollKeys, false);
        }

    }

    // call this to Enable
    function enableScroll() {

        if ($('body').hasClass('smooth-scroll')) {

            let aliothSmoother = ScrollSmoother.get();
            aliothSmoother.paused(false);


        } else {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            window.removeEventListener('touchmove', preventDefault, wheelOpt);
            window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        }

    }


    var cursorDark, cursorLight, cursorY;

    /** Mouse Cursor **/
    function naylaMouseCursor() {

        var mouseCursor = $('#mouseCursor'),
            $cursorInner = ' <div class="mouse-cursor-icon"></div><svg height="100%" width="100%" viewbox="0 0 100 100"><circle class="main-circle" cx="50" cy="50" r="40" /></svg><span class="mouse-cursor-text"></span>';

        if (mouseCursor.length) {


            mouseCursor.append($cursorInner);

            let cursorText = mouseCursor.children('.mouse-cursor-text').wrapInner('<span></span>'),
                cursorIcon = mouseCursor.children('.mouse-cursor-icon'),
                yperc,
                cursorActive;



            gsap.set(mouseCursor, {
                xPercent: -50,
                yPercent: -50
            });

            let xTo = gsap.quickTo(mouseCursor, "x", {
                    duration: 0.6,
                    ease: "power3"
                }),
                yTo = gsap.quickTo(mouseCursor, "y", {
                    duration: 0.6,
                    ease: "power3"
                });


            function icko(e) {

                xTo(e.clientX);
                yTo(e.clientY);

                cursorY = e.clientY;


            }

            $(window).on('mousemove', (e) => {
                icko(e)
            })

            // * Default Hover Stte *//

            function defaultHover(targets) {

                $(targets).on('mouseenter', function () {

                    mouseCursor.addClass('hover-size')

                })

                $(targets).on('mouseleave', function () {

                    mouseCursor.removeClass('hover-size');
                })

            }


            defaultHover('a , .menu-toggle, .rotate-text-area , .project-slide-button, button, .hover-classic, .cv-toggle,  .scroll-button');



            function textHover(targets) {

                $(targets).on('mouseenter', function () {

                    let $this = $(this),
                        text = $this.data('cursor-text');

                    mouseCursor.addClass('hover-size');
                    mouseCursor.addClass('hover-text');
                    cursorText.children('span').html(text)

                })

                $(targets).on('mouseleave', function () {

                    mouseCursor.removeClass('hover-size');
                    mouseCursor.removeClass('hover-text');

                    cursorText.find('span').empty()
                })

            }

            textHover('.cursor-text')


            function iconHover(targets) {

                $(targets).on('mouseenter', function () {

                    let $this = $(this),
                        icon = $this.data('cursor-icon'),
                        lib = $this.data('lib');


                    icon == null ? icon = 'arrow_outward' : '';

                    cursorIcon.attr('data-icon', icon);

                    cursorIcon.css({
                        "font-family": '"' + lib + '"'
                    });

                    mouseCursor.addClass('hover-size');
                    mouseCursor.addClass('hover-icon');

                })

                $(targets).on('mouseleave', function () {

                    mouseCursor.removeClass('hover-size');
                    mouseCursor.removeClass('hover-icon');
                })
            }

            iconHover('.cursor-icon, .showcase-carousel .showcase-project a');

            mouseCursor.hasClass('dark') ? cursorDark = true : '';
            mouseCursor.hasClass('light') ? cursorLight = true : '';


            function dragHover(targets) {

                $(targets).on('mouseenter', function (e) {

                    let $this = $(this),
                        winWidth = $(window).outerWidth();

                    mouseCursor.addClass('hover-size');
                    mouseCursor.addClass('hover-icon');

                })

                $(targets).on('mouseleave', function () {

                    mouseCursor.removeClass('hover-size');
                    mouseCursor.removeClass('hover-icon');
                })


                $(targets).on('mousemove', function (e) {


                    let $this = $(this),
                        winWidth = $(window).outerWidth();


                    if (e.clientX < winWidth / 2) {

                        cursorIcon.attr('data-icon', 'arrow_back');

                    } else {

                        cursorIcon.attr('data-icon', 'arrow_forward');
                    }

                })


            }

            dragHover('.drag-hover')

            function zoomHover(targets) {


                $(targets).on('mouseenter', function (e) {

                    if (!$(targets).hasClass('img-lightbox-open')) {

                        let $this = $(this),
                            winWidth = $(window).outerWidth();

                        mouseCursor.addClass('hover-size');
                        mouseCursor.addClass('hover-icon');

                        cursorIcon.attr('data-icon', 'fullscreen');

                    }

                })

                $(targets).on('click', function (e) {

                    mouseCursor.removeClass('hover-size');
                    mouseCursor.removeClass('hover-icon');

                })

                $(targets).on('mouseleave', function (e) {

                    mouseCursor.removeClass('hover-size');
                    mouseCursor.removeClass('hover-icon');

                })

                $('.lightbox-focus').on('mouseenter', function () {

                    mouseCursor.addClass('hover-size');
                    mouseCursor.addClass('hover-icon');

                    cursorIcon.attr('data-icon', 'fullscreen_exit');


                })

                $('.lightbox-focus').on('mouseleave', function () {

                    mouseCursor.removeClass('hover-size');
                    mouseCursor.removeClass('hover-icon');


                })

                $('.lightbox-focus').children('span').on('mouseenter', function () {

                    gsap.to(mouseCursor, {
                        opacity: .5
                    })

                })

                $('.lightbox-focus').children('span').on('mouseleave', function () {

                    gsap.to(mouseCursor, {
                        opacity: 1
                    })

                })



            }
            zoomHover('.zoom-hover')


        }

    }

    function cursorLayoutChange(layout, color, reset) {


        var mouseCursor = $('#mouseCursor');


        if (mouseCursor.length) {

            mouseCursor.removeClass('dark light');

            if (reset) {

                cursorDark ? mouseCursor.addClass('dark') : '';
                cursorLight ? mouseCursor.addClass('light') : '';

            }

            if (color) {

                let hsl = gsap.utils.splitColor(color, true),
                    lightness = hsl[hsl.length - 1];

                lightness <= 50 ? mouseCursor.addClass('light') : '';
                lightness > 50 ? mouseCursor.addClass('dark') : '';


            } else if (layout) {

                layout === 'light' ? mouseCursor.addClass('light') : '';
                layout === 'dark' ? mouseCursor.addClass('dark') : '';
            }

        }


    }



    var winLoaded;
    winLoaded = false


    $(window).on('load', function () {

        setTimeout(function () {
            winLoaded = true

        }, 100)

    })

    function pageLoader() {

        if ($('.page-loader').length) {

            let perc = $('.page-loader-percentage'),
                totImages,
                loadedImages,
                percentage,
                minTime = 5,
                overlays = $('.page-loader-overlays'),
                img = $('.page-loader-logo').children('img'),
                caption = $('.page-loader-caption'),
                countLabels = [0],
                i = 0;



            if (img.length) {

                img.clone().addClass('clone').insertAfter(img)
            }

            countLabels.push(Math.floor(gsap.utils.random(20, 30)));
            countLabels.push(Math.floor(gsap.utils.random(40, 60)));
            countLabels.push(Math.floor(gsap.utils.random(60, 80)));
            countLabels.push(100);

            perc.append('<div class="page-loader-count"></div>');

            countLabels.forEach(element => $('.page-loader-count').append('<span class="count_' + element + '">' + element + '</span>'));


            var innerTl = gsap.timeline({
                id: 'innerTl',
                paused: true,
            })

            let tl = gsap.timeline({
                delay: .1,
                id: 'pageLoaderAnimation',
                onUpdate: () => {


                    if ($('body').hasClass('elementor-editor-active')) {

                        tl.kill();

                        $('.page-loader').remove();
                        let instance = ScrollTrigger.getAll(),
                            i = 0;

                        if (instance.length) {

                            for (i = 0; i < instance.length; i++) {

                                instance[i].enable();

                            }
                        }


                        $('html').removeClass('loading');
                    }



                },
                onStart: () => {
                    $('html').addClass('loading');
                },
                onComplete: () => {

                    if (winLoaded == true) {

                        setTimeout(function () {

                            if (overlays.hasClass('columns')) {

                                let div = $('.page-loader > div').not('.page-loader-overlays');

                                innerTl.to(div, {
                                    opacity: 0,
                                    yPercent: -100,
                                    ease: 'power3.in'
                                })


                                innerTl.to('.loader-col', {
                                    height: '0%',
                                    delay: 0,
                                    id: 'loader-end',
                                    stagger: {
                                        grid: [1, 20],
                                        from: "random",
                                        amount: .3,

                                    },
                                    duration: 1.2,
                                    ease: 'expo.out',
                                    onStart: () => {

                                        let instance = ScrollTrigger.getAll(),
                                            i = 0;

                                        for (i = 0; i < instance.length; i++) {

                                            instance[i].enable();

                                        }

                                        $('html').removeClass('loading');

                                    },
                                    onComplete: () => {

                                        transitions.removeClass('half')

                                    }

                                })

                                innerTl.play()


                            } else if (overlays.hasClass('overlay')) {

                                let div = $('.page-loader > div').not('.page-loader-overlays');

                                innerTl.to(div, {
                                    opacity: 0,
                                    yPercent: -100,
                                    ease: 'power3.in'
                                })


                                innerTl.to('.loader-overlay', {
                                    height: '0%',
                                    delay: 0,
                                    duration: 1,
                                    ease: 'expo.inOut',
                                    onStart: () => {
                                        setTimeout(function () {

                                            let instance = ScrollTrigger.getAll(),
                                                i = 0;

                                            for (i = 0; i < instance.length; i++) {

                                                instance[i].enable();

                                            }


                                            $('html').removeClass('loading');
                                        }, 50)

                                    },
                                    onComplete: () => {

                                        transitions.removeClass('half')

                                    }

                                })

                                innerTl.play()

                            } else if (overlays.hasClass('blocks')) {

                                let div = $('.page-loader > div').not('.page-loader-overlays');

                                innerTl.to(div, {
                                    opacity: 0,
                                    yPercent: -100,
                                    ease: 'power3.in'
                                })


                                innerTl.to('.loader-block span', {
                                    height: '0%',
                                    stagger: -0.03,
                                    delay: 0,
                                    duration: 1,
                                    ease: 'power1.out',
                                    onStart: () => {


                                        let instance = ScrollTrigger.getAll(),
                                            i = 0;

                                        for (i = 0; i < instance.length; i++) {

                                            instance[i].enable();

                                        }

                                        $('html').removeClass('loading');


                                    },
                                    onComplete: () => {
                                        transitions.removeClass('half')

                                    }

                                });

                                innerTl.play()

                            }

                        }, 100)

                    } else {

                        window.onload = function () {


                            setTimeout(function () {

                                if (overlays.hasClass('columns')) {

                                    let div = $('.page-loader > div').not('.page-loader-overlays');

                                    innerTl.to(div, {
                                        opacity: 0,
                                        yPercent: -100,
                                        ease: 'power3.in'
                                    })


                                    innerTl.to('.loader-col', {
                                        height: '0%',
                                        delay: 0,
                                        id: 'loader-end',
                                        stagger: {
                                            grid: [1, 20],
                                            from: "random",
                                            amount: .3,

                                        },
                                        duration: 1.2,
                                        ease: 'expo.out',
                                        onStart: () => {
                                            let instance = ScrollTrigger.getAll(),
                                                i = 0;

                                            for (i = 0; i < instance.length; i++) {

                                                instance[i].enable();

                                            }


                                            $('html').removeClass('loading');

                                        },
                                        onComplete: () => {

                                            transitions.removeClass('half')

                                        }

                                    })

                                    innerTl.play()


                                } else if (overlays.hasClass('overlay')) {

                                    let div = $('.page-loader > div').not('.page-loader-overlays');

                                    innerTl.to(div, {
                                        opacity: 0,
                                        yPercent: -100,
                                        ease: 'power3.in'
                                    })


                                    innerTl.to('.loader-overlay', {
                                        height: '0%',
                                        delay: 0,
                                        duration: 1,
                                        ease: 'expo.inOut',
                                        onStart: () => {
                                            setTimeout(function () {

                                                let instance = ScrollTrigger.getAll(),
                                                    i = 0;

                                                for (i = 0; i < instance.length; i++) {

                                                    instance[i].enable();

                                                }


                                                $('html').removeClass('loading');
                                            }, 50)

                                        },
                                        onComplete: () => {

                                            transitions.removeClass('half')

                                        }

                                    })

                                    innerTl.play()

                                } else if (overlays.hasClass('blocks')) {

                                    let div = $('.page-loader > div').not('.page-loader-overlays');

                                    innerTl.to(div, {
                                        opacity: 0,
                                        yPercent: -100,
                                        ease: 'power3.in'
                                    })


                                    innerTl.to('.loader-block span', {
                                        height: '0%',
                                        stagger: -0.03,
                                        delay: 0,
                                        duration: 1,
                                        ease: 'power1.out',
                                        onStart: () => {



                                            let instance = ScrollTrigger.getAll(),
                                                i = 0;

                                            for (i = 0; i < instance.length; i++) {

                                                instance[i].enable();

                                            }

                                            $('html').removeClass('loading');


                                        },
                                        onComplete: () => {
                                            transitions.removeClass('half')

                                        }

                                    });

                                    innerTl.play()

                                }


                            }, 100)



                        };
                    }



                }
            });




            if (caption.length) {
                new SplitText(caption, {
                    type: 'lines, chars',
                    linesClass: 'capt_line',
                    charsClass: 'capt_char'
                })

                let lines = caption.find('.capt_line'),
                    chars = caption.find('.capt_char');


                lines.clone().addClass('clone').appendTo(caption)

                gsap.from(chars, {
                    yPercent: 100,
                    duration: .75,
                    stagger: 0.02,
                    delay: .5,
                    ease: 'expo.out',
                    onStart: () => {

                        gsap.set(caption, {
                            visibility: 'visible'
                        })

                    }
                })


            }


            $('body').imagesLoaded()

                .progress(function (instance, image) {


                    totImages = instance.images.length;
                    loadedImages = instance.progressedCount;
                    percentage = 100 / (totImages / loadedImages);

                    let snapPerc = gsap.utils.snap(countLabels, percentage);

                    if (perc.length) {

                        let countFind = '.count_' + snapPerc + '',
                            transVal = $(countFind).position().top,
                            calc = 100 / snapPerc,
                            calcWin = $(window).outerHeight() / calc,
                            i = 0,
                            spacing = mobileQuery.matches ? 60 : 150;


                        tl.to('.page-loader-count', {
                            y: -1 * $(countFind).position().top,
                            duration: 1,
                            ease: 'expo.inOut'
                        }, 'label_' + snapPerc);

                        tl.to(perc, {
                            y: -1 * (calcWin - (calcWin != 0 ? perc.outerHeight() : 0) - (calcWin == $(window).outerHeight() ? spacing : 0)),
                            duration: 1,
                            ease: 'expo.inOut'
                        }, 'label_' + snapPerc);
                    }

                    if (img.length) {
                        let logoMask = 'inset(' + (100 - percentage) + '% 0% 0% 0%)'

                        tl.to('img.clone', {
                            clipPath: logoMask
                        }, 'label_' + snapPerc);
                    }

                    if (caption.length) {


                        let capt = caption.find('.capt_line.clone'),
                            wido = percentage + '%'

                        tl.to(capt, {
                            width: wido,
                            duration: 1,
                            ease: 'expo.inOut'
                        }, 'label_' + snapPerc);

                    }

                }).done(function () {


                });

        }



    };

    var naylaSmoother = false;

    function smoothScroll() {

        let body = $('body');

        if (body.hasClass('smooth-scroll')) {

            naylaSmoother = true;

            $('#page').wrap('<div id="smooth-wrapper"></div>');
            $('main').wrap('<div id="smooth-content"></div>');

            if ((!siteHeader.hasClass('fixed')) && (!siteHeader.hasClass('sticky'))) {

                siteHeader.prependTo('#smooth-content')
                $('.menu-overlay').prependTo('#smooth-content')

            }

            $('#footer').appendTo('#smooth-content')

            let options = $('.smooth-scroll-options'),
                strength = options.data('smooth'),
                normalize = options.data('normalize'),
                speed = options.data('speed'),
                touch = options.data('touch'),
                touchStrength = options.data('touch-strength');

            let wrap = $('#smooth-wrapper');
            let cont = $('#smooth-content');

            var smoother = ScrollSmoother.create({
                wrapper: wrap,
                content: cont,
                smooth: strength,
                speed: speed,
                normalizeScroll: normalize,

            });

        }

    }



    var headerLight = false,
        headerDark = true,
        headerBlended = false;

    if (siteHeader.hasClass('light')) {
        headerLight = true
        headerDark = false
    }

    if (siteHeader.hasClass('blend')) {
        headerLight = false
        headerDark = false
        headerBlended = true
    }

    function headerLayoutChange(layout, color, smooth, reset) {


        if (!siteHeader.hasClass('blend')) {

            function resetHeader() {


                if (smooth) {

                    let tl = gsap.timeline({

                    });

                    tl.to(siteHeader, {
                        opacity: 0,
                        duration: 0.175,
                        ease: 'none',
                        onComplete: () => {
                            siteHeader.removeClass('dark light');

                        }
                    }, 0);

                    tl.to(siteHeader, {
                        opacity: 1,
                        duration: 0.175,
                        ease: 'none',
                        onStart: () => {
                            headerLight ? siteHeader.addClass('light') : siteHeader.removeClass('light');
                            headerDark ? siteHeader.addClass('dark') : siteHeader.removeClass('dark');

                        }
                    }, 0.2)

                } else {



                    setTimeout(function () {

                        headerDark ? siteHeader.addClass('dark') : siteHeader.removeClass('dark');
                        headerLight ? siteHeader.addClass('light') : siteHeader.removeClass('light');

                    })


                };


            }

            function changeLayout() {

                siteHeader.removeClass('dark light')

                if (color) {

                    let hsl = gsap.utils.splitColor(color, true),
                        lightness = hsl[hsl.length - 1];

                    lightness < 50 ? siteHeader.addClass('light') : '';
                    lightness > 50 ? siteHeader.addClass('dark') : '';



                } else if (layout) {

                    layout === 'light' ? siteHeader.addClass('light') : '';
                    layout === 'dark' ? siteHeader.addClass('dark') : '';
                }
            }

            function smoothChange() {

                let tl = gsap.timeline();

                tl.to(siteHeader, {
                    opacity: 0,
                    duration: 0.175,
                    ease: 'none',
                    onComplete: () => {
                        changeLayout();
                    }
                });

                tl.to(siteHeader, {
                    opacity: 1,
                    duration: 0.175,
                    ease: 'none',
                })

            }

            reset ? resetHeader() : '';
            smooth ? smoothChange() : changeLayout();

        }


    }


    function naylaHeader() {

        var siteHeader = $('.site-header');

        var headerHeight = siteHeader.outerHeight(),
            stickyTargets = siteHeader.find('.hide-sticky'),
            logo = $('.site-logo'),
            stickyLogo = $('.sticky-logo'),
            allInstances = ScrollTrigger.getAll(),
            headerPaddingTop = siteHeader.children('div').css('paddingTop'),
            headerPaddingBottom = siteHeader.children('div').css('paddingBottom'),
            resetDelay = 1,
            fixed,
            sticky,
            dynamic;

        matchMedia.add({
            isMobile: "(max-width: 450px)"

        }, (context) => {
            let {
                isMobile
            } = context.conditions;

            if (siteHeader.hasClass('blend')) {

                gsap.set(siteHeader, {
                    mixBlendMode: 'exclusion'
                })

            }

            return () => {

            }
        });


        function animateLogos(direction) {

            if (stickyLogo) {

                let tl = gsap.timeline();

                if (direction == 'play') {

                    tl.to(logo, {
                        opacity: 0,
                        duration: 0.35,
                        onComplete: () => {
                            logo.hide()
                        }
                    })

                    tl.fromTo(stickyLogo, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.35,
                        onStart: () => {
                            stickyLogo.show()
                        }
                    });


                } else if (direction == 'reverse') {


                    tl.to(stickyLogo, {
                        opacity: 0,
                        duration: 0.35,
                        onComplete: () => {
                            stickyLogo.hide()
                        }
                    })

                    tl.fromTo(logo, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.35,
                        onStart: () => {
                            logo.show()
                        }
                    });

                    if (stickyTargets.length) {

                        tl.to(stickyTargets, {
                            opacity: 1,
                            yPercent: 0,
                            duration: .6,
                            ease: 'power1.inOut'
                        }, 0)

                    }
                }

            }

        }

        animateLogos()

        if (siteHeader.hasClass('sticky')) {
            sticky = true;
        }

        if (siteHeader.hasClass('fixed')) {
            fixed = true;

            resetDelay = 0.1
        }

        if (siteHeader.hasClass('dynamic')) {
            dynamic = true;
        } else {
            dynamic = false;
        }

        function resetHeader(stAnim) {

            animateLogos('reverse');


            if (dynamic != true) {

                if (sticky) {

                    gsap.to(siteHeader, {
                        duration: .6,
                        onComplete: () => {
                            siteHeader.removeClass('sticked');

                            headerBlended ? siteHeader.addClass('blend') : '';


                            headerLight ? siteHeader.addClass('light') : siteHeader.removeClass('light');
                            headerDark ? siteHeader.addClass('dark') : siteHeader.removeClass('dark');

                            headerBlended ? siteHeader.removeClass('light') : '';
                            headerBlended ? siteHeader.removeClass('dark') : '';

                            gsap.set(siteHeader, {
                                clearProps: 'all'
                            })

                        }
                    })

                    gsap.to(siteHeader.children('div'), {
                        paddingTop: headerPaddingTop,
                        paddingBottom: headerPaddingBottom,
                        duration: .6,
                        ease: 'power1.inOut',
                        onComplete: () => {

                            gsap.set(siteHeader.children('div'), {
                                clearProps: 'all'
                            })

                        }

                    })

                    if (stickyTargets.length) {

                        gsap.to(stickyTargets, {
                            opacity: 1,
                            yPercent: 0,
                            duration: .6,
                            ease: 'power1.inOut'
                        })

                    }



                } else if (fixed) {

                    siteHeader.removeClass('sticked');
                }

            } else {

                siteHeader.removeClass('sticked');

            }
            //            ScrollTrigger.getById('stickyAnim').disable()
        }

        var delayedCall = gsap.delayedCall(resetDelay, resetHeader);
        delayedCall.kill();


        function fixedHeader() {

            var fixedStart = 'top top';

            allInstances.forEach(function (st) {


                if ((st.pin != null) && (st.start <= 0)) {

                    fixedStart = 'top+=' + st.end + ' top';
                }

            })



            ScrollTrigger.create({
                trigger: $('body').hasClass('smooth-scroll') ? '#smooth-content' : 'body',
                start: fixedStart,
                end: 'bottom bottom',
                id: 'fixed_header',
                onEnter: () => {


                    animateLogos('play');

                    if (stickyTargets.length) {
                        gsap.to(stickyTargets, {
                            opacity: 0,
                            y: -50,
                            stagger: 0.05,
                            duration: .35,
                            ease: 'power3.in',
                            overwrite: true
                        })
                    }

                },
                onLeaveBack: () => {

                    resetHeader();

                    if (stickyTargets.length) {
                        gsap.to(stickyTargets, {
                            opacity: 1,
                            y: 0,
                            duration: 1.5,
                            stagger: 0.1,
                            ease: 'expo.out',
                            overwrite: true
                        })
                    }
                }

            })

            let fixedHeader = ScrollTrigger.getById('fixed_header');





        }

        if (siteHeader.hasClass('fixed')) {

            setTimeout(function () {

                fixedHeader()
            }, 1)


        }

        function dynamicHeader() {

            var fixedStart;

            allInstances.forEach(function (st) {

                if ((st.pin != null) && (st.start <= 0)) {

                    fixedStart = 'top+=' + st.vars.end + ' top';

                    ScrollTrigger.create({
                        trigger: 'body',
                        pin: siteHeader,
                        start: 'top top',
                        end: fixedStart,
                        id: 'header_pin'
                    })


                }

            })



        }


        if (siteHeader.hasClass('dynamic')) {
            dynamicHeader()
        }


        function stickyHeader() {

            let stickyStart = 'top+=1000 center',
                stickyReset = 'top top',
                topPin = [],
                smoothSticky;


            var stickyAnim = ScrollTrigger.create({
                trigger: "body",
                start: 'top top',
                end: 'bottom bottom',
                id: 'stickyAnim',
                onEnter: () => {

                    if (smoothSticky != null) {
                        smoothSticky.disable();
                    }

                },
                onUpdate: function (self) {

                    if (self.direction == -1) {
                        gsap.to(siteHeader, {
                            y: '0%'
                        })

                    } else if (self.direction == 1) {

                        gsap.to(siteHeader, {
                            y: '-100%'
                        })
                    }

                },

            });

            stickyAnim.disable();

            allInstances.forEach(function (st) {

                if ((st.pin != null) && (st.start <= 0)) {
                    topPin.push(st);

                }

            })

            if (topPin.length) {

                stickyStart = 'top+=' + (600 + topPin[0].end) + ' center';
                stickyReset = 'top+=' + topPin[0].end + ' top';

                if ($('body').hasClass('smooth-scroll')) {

                    let pin = ScrollTrigger.create({
                        trigger: 'body',
                        pin: siteHeader,
                        start: 'top top',
                        end: stickyReset,
                        scroller: '#smooth-content'

                    })

                } else {

                    let pin = ScrollTrigger.create({
                        trigger: 'body',
                        pin: siteHeader,
                        start: 'top top',
                        end: stickyReset,

                    })
                }


                ScrollTrigger.create({
                    trigger: 'body',
                    start: stickyReset,
                    end: stickyStart,
                    onLeave: () => {

                        gsap.set(stickyTargets, {
                            opacity: 0,
                            yPercent: -100
                        })


                        siteHeader.hasClass('sticky-dark') ? siteHeader.addClass('dark') : siteHeader.removeClass('dark');
                        siteHeader.hasClass('sticky-light') ? siteHeader.addClass('light') : siteHeader.removeClass('light');


                        gsap.set(siteHeader, {
                            y: '-100%'
                        })
                        stickyAnim.enable();
                        siteHeader.addClass('sticked');
                        animateLogos('play')

                    },
                    onLeaveBack: () => {

                        siteHeader.removeClass('sticked');
                        stickyAnim.disable();
                        animateLogos('reverse');
                    },
                    onEnter: () => {
                        delayedCall.kill();

                        headerLight ? siteHeader.addClass('light') : siteHeader.removeClass('light');
                        headerDark ? siteHeader.addClass('dark') : siteHeader.removeClass('dark');
                    }

                })

            } else {

                if ($('body').hasClass('smooth-scroll')) {

                    gsap.to(siteHeader.children('div'), {
                        yPercent: -100,
                        scrollTrigger: {
                            trigger: 'body',
                            start: 'top top',
                            end: 'top+=' + siteHeader.outerHeight() + ' top',
                            scrub: true,
                            id: 'smoothSticky'
                        }
                    })

                    smoothSticky = ScrollTrigger.getById('smoothSticky');

                }

                ScrollTrigger.create({
                    trigger: 'body',
                    start: 'top top',
                    end: 'top+=1000 center',
                    onLeave: () => {

                        gsap.set(stickyTargets, {
                            opacity: 0,
                            yPercent: -100
                        })

                        if (siteHeader.hasClass('light')) {
                            headerLight = true
                            headerDark = false
                        } else {
                            headerLight = false
                            headerDark = true

                        }

                        siteHeader.hasClass('sticky-dark') ? siteHeader.addClass('dark') : siteHeader.removeClass('dark');
                        siteHeader.hasClass('sticky-light') ? siteHeader.addClass('light') : siteHeader.removeClass('light');

                        headerBlended ? siteHeader.removeClass('blend') : '';

                        gsap.to(siteHeader, {
                            y: '-100%'
                        })

                        stickyAnim.enable();
                        siteHeader.addClass('sticked');
                        animateLogos('play')

                    },
                    onLeaveBack: (self) => {
                        delayedCall.restart(true);
                        stickyAnim.disable();


                        if (smoothSticky != null) {

                            smoothSticky.enable();

                        }


                    },
                    onEnter: () => {
                        delayedCall.kill();
                    }

                })

            }

        }


        if (siteHeader.hasClass('sticky')) {

            setTimeout(function () {
                stickyHeader()

            }, 100)


        }


    }


    function siteNavigation() {


        // Classic Navigation //

        var resetNavigation = '';

        function classicNavigation() {

            let nav = $('#site-navigation.classic'),
                overlay = $('.menu-overlay'),
                headerHeight = siteHeader.outerHeight(),
                subBg = nav.data('sub-background');


            if (nav.hasClass('one-page')) {

                nav.children('ul').children('li').each(function () {

                    let $this = $(this),
                        target = $this.children('a').attr('href');

                    $this.find('a').on('click', (e) => {

                        e.preventDefault()

                    })

                    $this.find('a').addClass('scroll-button');

                    $this.find('a').attr('data-scroll-to', target);

                })

            }


            let hasChild = nav.find('.main-menu').children('.nayla-has-children');

            var resetHeader = gsap.delayedCall(.7, headerLayoutChange, [false, false, false, true]);
            resetHeader.kill();

            setTimeout(function () {

                hasChild.each(function (i) {

                    let $this = $(this),
                        classes = $this.attr('class'),
                        arr = classes.split(' '),
                        tltl = gsap.timeline({
                            id: 'sub_menu_tl_' + i
                        }),
                        x = 0;


                    var subTl = gsap.getById('sub_menu_tl_' + i);

                    for (x = 0; x < arr.length; x++) {

                        if (arr[x].includes('sub_id')) {

                            var subid = arr[x].split('_')[2];
                            $this.attr('data-sub-id', subid);



                            let sub = '.sub_' + subid,
                                bg = $(sub).children('div').children('.elementor-section').css('backgroundColor'),
                                overlay = $(sub).find('.sub-menu-overlay'),
                                ht = $(sub).outerHeight() + siteHeader.outerHeight(),
                                gs = gsap.fromTo($(sub), {
                                    height: 0
                                }, {
                                    height: ht,
                                    duration: 1,
                                    ease: 'power3.inOut',
                                    onStart: () => {
                                        $(sub).addClass('active');

                                        setTimeout(function () {

                                            headerLayoutChange(false, bg, false, false)

                                        }, 350)
                                    },
                                    onReverseComplete: () => {
                                        $(sub).removeClass('active')

                                    }
                                });

                            $(sub).insertBefore(siteHeader)

                            gsap.set($(sub).children('div').children('.elementor-section'), {
                                paddingTop: siteHeader.outerHeight()
                            })

                            //                        let subTweens = gsap.getTweensOf($(sub).find('*')),
                            //                            index = 0;
                            //
                            //                        for (index = 0; index < subTweens.length; index++) {
                            //
                            //                            subTweens[index].parent ? subTweens[index].parent.pause() : '';
                            //                            subTweens[index].parent.scrollTrigger ? subTweens[index].parent.scrollTrigger.kill() : '';
                            //                            subTl.add(subTweens[index], (0))
                            //                        }

                            subTl.add(gs, (0))
                            subTl.pause();

                        }
                    }


                    $this.children('a').on('mouseenter', function () {

                        subTl.restart(true);
                        resetHeader.kill()

                    })

                    $this.children('a').on('mouseleave', function () {

                        subTl.reverse(true);
                        resetHeader.restart(true);

                    })

                    let findSub = '.sub_' + $this.data('sub-id');

                    $(findSub).on('mouseenter', function () {



                        let $this = $(this),
                            bg = $this.children('div').children('.elementor-section').css('backgroundColor');

                        cursorLayoutChange(false, bg, false)




                        subTl.pause();
                        resetHeader.kill()

                    })

                    $(findSub).on('mouseleave', function () {

                        subTl.reverse(true);
                        resetHeader.restart(true);
                        cursorLayoutChange(false, false, true)


                    })

                })



            }, 90)




            if (nav.length) {


                nav.each(function () {

                    let $this = $(this),
                        menu = $this.children('ul'),
                        menuItems = menu.children('li');

                    menuItems.each(function () {

                        let menuItem = $(this),
                            link = menuItem.children('a');

                        link.wrapInner('<span class="hov_span" data-text="' + link.text() + '"></span>');
                    })

                })

            }

        }
        classicNavigation();

        function menuItemAnims(menu, direction) {

            menu.each(function () {

                let items = $(this).children('li'),
                    targets = [items.children('a').find('.mt_char'), items.children('.sub-toggle')],
                    val = items.outerHeight(),
                    stg = 0.02;

                $(this).hasClass('sub-menu') ? stg = 0.01 : '';

                if ((direction === 'in') && (targets.length > 0)) {

                    gsap.fromTo(targets, {
                        y: val
                    }, {
                        y: 0,
                        stagger: stg,
                        duration: 1.5,
                        ease: 'expo.out',
                        onStart: () => {
                            $(this).addClass('active');
                        },

                    })
                } else if ((direction === 'out') && (targets.length > 0)) {

                    var animOut = gsap.fromTo(targets, {
                        y: 0
                    }, {
                        y: -1 * val,
                        stagger: 0.005,
                        duration: .5,
                        ease: 'expo.in',
                        onStart: () => {
                            $(this).addClass('animating')
                        },
                        onComplete: () => {

                            $(this).removeClass('active')
                            $(this).removeClass('animating')
                        }

                    })

                }

            })



        }

        // Fullscreen Navigation //
        function fullscreenNavigation() {

            $('.section-fullscreen-menu').addClass('fullscreen_menu');
            $('.section-fullscreen-menu').attr('id', 'site-navigation');


            let nav = $('#site-navigation.fullscreen_menu'),
                wrapper = nav.children('.fullscreen-menu-wrapper'),
                mainMenu = nav.find('.main-menu'),
                headerHeight = $('.site-header').outerHeight(),
                items = mainMenu.find('li a'),
                hasChildren = mainMenu.find('li.menu-item-has-children');

            setTimeout(function () {


                nav.find('.has-anim-text').each(function () {

                    new naylaTextAnimation($(this));

                })

                nav.find('.has-anim-image').each(function () {

                    new naylaImageAnimation($(this));

                })

                nav.find('.has-anim').each(function () {

                    new naylaGeneralAnimations($(this));

                })

            }, 50)



            items.addClass('menu-link');

            if (nav.length) {

                hasChildren.each(function () {

                    let childLength = $(this).find('li').not('.sub-menu-title').length;
                    $(this).append('<span class="sub-toggle">(' + childLength + ')</span>');

                })

                mainMenu.append('<span class="sub-close"><span class="material-icons">close</span></span>')

                let subClose = nav.find('.sub-close');

                new SplitText(items, {
                    type: 'lines, chars',
                    linesClass: 'mt_line',
                    charsClass: 'mt_char'
                })

                wrapper.css('paddingTop', headerHeight + 50);

                hasChildren.children('.sub-toggle').on('click', function () {

                    let $this = $(this).parent('li'),
                        parentMenu = $this.parent('ul'),
                        subMenu = $this.children('.sub-menu-wrapper').children('.sub-menu');

                    subClose.addClass('active')

                    parentMenu.length ? menuItemAnims(parentMenu, 'out') : '';
                    gsap.delayedCall(.5, menuItemAnims, [subMenu, "in"]);

                })

                hasChildren.children('a').on('click', function () {

                    let parentLi = $(this).parent('li'),
                        toggle = parentLi.children('.sub-toggle');

                    $(this).attr('href').length <= 2 ? toggle.click() : '';

                })

                // Closing Sub Menus //
                subClose.on('click', function () {

                    let outMenu = nav.find('ul.sub-menu.active'),
                        inMenu = outMenu.parent('div').parent('li').parent('ul');

                    menuItemAnims(outMenu, 'out');
                    gsap.delayedCall(.5, menuItemAnims, [inMenu, "in"]);

                    if (inMenu.hasClass('main-menu')) {

                        subClose.removeClass('active')
                    }

                })

            }

            items.click(function () {

                var href = $(this).attr('href');
                if (href && href.indexOf('#') !== -1) {

                    $('.menu-toggle').trigger('click')

                }

            });

        }
        fullscreenNavigation();


        // Menu Toggle //
        function menuToggle(targetMenu) {

            var menuToggle = $('.menu-toggle'),
                overlay = $('.menu-overlay'),
                text = menuToggle.find('.toggle-text'),
                closeText = text.attr('data-close-text'),
                bgColor = $('#site-navigation.fullscreen_menu').css('backgroundColor');

            text.wrapInner('<span data-close-text="' + closeText + '"></span>');

            var headerReset = gsap.delayedCall(1, headerLayoutChange, [false, false, false, true]);
            headerReset.kill();

            var tltl = gsap.timeline({
                id: 'fs_menu_tl'
            });

            let navTweens = gsap.getTweensOf(targetMenu.find('*').not('.main-menu *, .nayla-button, .nayla-button *')),
                i = 0;

            if (navTweens.length > 0) {

                for (i = 0; i < navTweens.length; i++) {

                    if (navTweens[i]) {

                        if (navTweens[i].parent) {

                            navTweens[i].parent.pause()
                            navTweens[i].parent.scrollTrigger !== null ? navTweens[i].parent.scrollTrigger.kill() : '';
                            tltl.add(navTweens[i], (0 + i / 10))

                        } else {

                            navTweens[i].pause()
                            navTweens[i].scrollTrigger !== null ? navTweens[i].scrollTrigger.kill() : '';
                            tltl.add(navTweens[i], (0 + i / 10))
                        }

                    }

                }

            }

            tltl.pause();

            menuToggle.data('clicks', false)

            menuToggle.on('click', function () {


                var clicks = $(this).data('clicks'),
                    mainMenu = targetMenu.find('.menu.main-menu');

                if (clicks) {

                    if (!$(this).hasClass('is-opening')) {

                        $(this).data("clicks", !clicks);


                        $(this).addClass('is-closing')

                        enableScroll();

                        let activeMenu = targetMenu.find('ul.menu.active, ul.sub-menu.active');
                        targetMenu.find('.sub-close').removeClass('active');



                        $('html').hasClass('loading') ? '' : headerReset.restart(true);

                        menuItemAnims(activeMenu, 'out');


                        tltl.timeScale(3)
                        tltl.reverse();

                        gsap.to(targetMenu, {
                            height: 0,
                            duration: .7,
                            delay: .5,
                            ease: 'expo.inOut',
                            onComplete: () => {
                                $(this).removeClass('is-closing')
                                menuToggle.removeClass('active');
                                targetMenu.removeClass('active');
                                siteHeader.removeClass('menu-open');
                                if (headerBlended) {

                                    siteHeader.addClass('blend');

                                    if (mobileQuery.matches) {

                                        gsap.set(siteHeader, {
                                            mixBlendMode: 'exclusion'
                                        })
                                    }

                                }
                            }
                        })

                    }



                } else {

                    if (!$(this).hasClass('is-closing')) {

                        $(this).data("clicks", !clicks);

                        disableScroll();

                        if (headerBlended) {

                            siteHeader.removeClass('blend');

                            if (mobileQuery.matches) {

                                gsap.set(siteHeader, {
                                    clearProps: 'mix-blend-mode'
                                })
                            }

                        }



                        $(this).addClass('is-opening')

                        menuToggle.addClass('active')
                        targetMenu.addClass('active');
                        siteHeader.addClass('menu-open');

                        headerReset.kill();

                        headerLayoutChange(false, bgColor, false, false);

                        menuItemAnims(mainMenu, 'in');

                        gsap.to(targetMenu, {
                            height: '100vh',
                            duration: 1,
                            delay: 0,
                            ease: 'expo.out',
                            onComplete: () => {
                                menuToggle.removeClass('is-opening');



                            }
                        })

                        tltl.timeScale(1)
                        tltl.restart(true);
                    }

                }



            })

        }
        menuToggle($('#site-navigation.fullscreen_menu'));


    }



    function naylaVideo(select) {

        var video = $(select),
            mouseCursor = $('#mouseCursor');

        if ((video.length) && (!video.hasClass('vid-ready'))) {

            video.each(function (i) {

                i++
                let $this = $(this),
                    video = $this.find('.n-video'),
                    playText = $this.data('play-text'),
                    pauseText = $this.data('pause-text'),
                    muteText = $this.data('mute-text'),
                    unmuteText = $this.data('unmute-text'),
                    nautoplay = $this.data('autoplay'),
                    nmuted = $this.data('muted'),
                    nloop = $this.data('loop'),
                    play = $this.data('play'),
                    controls;


                $this.data('controls') != false ? controls = $this.data('controls').split(" ") : '';


                playText == null ? playText = 'Play' : '';
                pauseText == null ? pauseText = 'Pause' : '';
                muteText == null ? muteText = 'Mute' : '';
                unmuteText == null ? unmuteText = 'Unmute' : '';


                const naylaVid = new Plyr(video, {
                    controls: controls,
                    clickToPlay: true,
                    autopause: false,
                    debug: false,
                    fullscreen: false,
                    storage: {
                        enabled: false
                    },
                    youtube: {
                        modestbranding: 1,
                        controls: 0,
                        rel: 0,
                        cc_load_policy: 0,
                        iv_load_policy: 3,
                        noCookie: true,
                        frameborder: 0,
                    },
                    vimeo: {
                        autopause: false,
                        controls: false,
                    }

                });



                if (!$this.hasClass('n-self')) {
                    naylaVid.autoplay = nautoplay
                    naylaVid.muted = nmuted
                    naylaVid.loop = nloop
                }



                naylaVid.on('ready', (event) => {

                    if ($this.find('video').attr('autoplay')) {

                        naylaVid.play()
                    }

                    $this.addClass('vid-ready');


                    $this.find('.plyr').addClass('nayla_video_' + i);
                    $this.addClass('nayla-fake-running');

                    let vid = $('.nayla_video_' + i);



                    vid.find('.plyr__video-wrapper').addClass('nayla-video-wrap');
                    vid.find('.plyr__controls').addClass('nayla-controls-wrap');

                    vid.find('.plyr__control[data-plyr="play"]').append('<span class="hover-default nayla-player-control nayla-play">' + playText + '</span><span class="hover-default nayla-player-control nayla-pause">' + pauseText + '</span>')

                    vid.find('.plyr__controls__item.plyr__volume button[data-plyr="mute"]').append('<span class="hover-default nayla-player-control nayla-mute">' + muteText + '</span><span class="hover-default nayla-player-control nayla-unmute">' + unmuteText + '</span>');

                    if ($this.hasClass('play-inner')) {

                        $this.find('.nayla-play-button').on('click', function () {


                            if ($this.hasClass('lightbox-play')) {

                                lightboxPlay();

                            } else {

                                naylaVid.muted = false;
                                naylaVid.restart();
                                naylaVid.play();
                                $this.addClass('nayla-running');
                                $this.removeClass('nayla-fake-running');

                            }


                        })
                    }

                    if ($this.hasClass('play-cursor')) {

                        $this.on('click', function () {

                            if ($this.hasClass('lightbox-play')) {

                                $this.removeClass('cursor-icon');
                                $this.removeClass('cursor-text');

                                mouseCursor.removeClass('hover-size')
                                mouseCursor.removeClass('hover-text')
                                mouseCursor.removeClass('hover-icon')
                                lightboxPlay();

                            } else {

                                if ($this.hasClass('nayla-fake-running')) {
                                    $this.removeClass('cursor-icon');
                                    $this.removeClass('cursor-text');

                                    mouseCursor.removeClass('hover-size')
                                    mouseCursor.removeClass('hover-text')
                                    mouseCursor.removeClass('hover-icon')

                                    naylaVid.muted = false;
                                    naylaVid.restart();
                                    naylaVid.play();
                                    $this.addClass('nayla-running');
                                    $this.removeClass('nayla-fake-running');
                                }
                            }


                        })

                        $this.on('mouseenter', function () {
                            if ($this.hasClass('nayla-running')) {

                                mouseCursor.removeClass('hover-size')
                                mouseCursor.removeClass('hover-text')
                                mouseCursor.removeClass('hover-icon')
                            }
                        })


                    }

                    function lightboxPlay() {


                        naylaVid.fullscreen = false

                        vid.append('<span class="lightbox-close">Close</span>')
                        vid.addClass('nlv').prependTo('#page');

                        $('.nlv').addClass('lightbox-open');

                        gsap.to('.nlv', {
                            opacity: 1,
                            duration: .3
                        })

                        vid.find('.plyr__video-wrapper').addClass('nayla-video-wrap');
                        vid.find('.plyr__controls').addClass('nayla-controls-wrap');

                        vid.addClass('lightbox-open');
                        naylaVid.muted = false;
                        naylaVid.restart();
                        naylaVid.play();

                        $this.addClass('nayla-running');
                        $this.removeClass('nayla-fake-running');

                        if ($this.hasClass('ratio-adjusted')) {

                            let $iframe = $('.nlv').find('.nayla-video-wrap');

                            gsap.set($iframe, {
                                clearProps: 'all'
                            });

                            gsap.set($('.nlv').find('.plyr__video-embed__container'), {
                                clearProps: 'all'
                            })

                        }



                        $('.lightbox-close').on('click', function () {

                            gsap.to('.nlv', {
                                opacity: 0,
                                duration: .3,
                                onComplete: () => {

                                    gsap.set(vid, {

                                        opacity: 1
                                    })

                                    vid.off('click');

                                    vid.removeClass('nlv lightbox-open');

                                    vid.find('.plyr__video-wrapper').removeClass('nayla-video-wrap');
                                    vid.find('.plyr__controls').removeClass('nayla-controls-wrap');

                                    naylaVid.muted = true;

                                    vid.prependTo($this);

                                    $this.removeClass('nayla-running');
                                    $this.addClass('nayla-fake-running');

                                }
                            })

                            if ($this.hasClass('ratio-adjusted')) {

                                let parent = $this.parent('div');

                                const targetHeight = parent.outerHeight(),
                                    parentWidth = parent.outerWidth(),
                                    parentHeight = parent.outerHeight();


                                $this.attr('ratio', naylaVid.ratio);

                                let rat = naylaVid.ratio.split(':')[0] / naylaVid.ratio.split(':')[1],
                                    parentRatio = parentWidth / parentHeight;

                                if (parentRatio < rat) {

                                    $this.addClass('ratio-adjusted');

                                    function adjustIframeSize() {

                                        const aspectRatio = rat;
                                        const $iframe = $this.find('.nayla-video-wrap');

                                        const targetWidth = targetHeight * aspectRatio;

                                        gsap.set($iframe, {
                                            width: targetWidth + 10,
                                            height: targetHeight + 10,
                                            x: -1 * (targetWidth - parentWidth) / 2
                                        })

                                        gsap.set($this.find('.plyr__video-embed__container'), {
                                            paddingBottom: 0,
                                            y: 0,
                                            yPercent: 0
                                        })

                                    }

                                    adjustIframeSize();

                                }


                            }


                        })


                    }

                    if ($this.hasClass('play-on-hover')) {

                        naylaVid.pause();

                        $this.on('mouseenter', () => {

                            naylaVid.play();
                        })

                        $this.on('mouseleave', () => {

                            naylaVid.pause();
                        })

                    }


                    if (naylaVid.autoplay == true) {

                        naylaVid.play();
                    }

                });

                if ($this.parents('.has-anim').length && $this.parents('.project-page').length) {

                    setTimeout(function () {

                        let anim = gsap.getTweensOf($this.parents('.has-anim'));

                        anim[0].parent.pause()
                        anim[0].parent.scrollTrigger !== null ? anim[0].parent.scrollTrigger.kill() : '';

                        naylaVid.once('playing', (event) => {
                            anim[0].parent.play();

                        });

                    }, 2)

                }


                naylaVid.once('playing', (event) => {


                    if (naylaVid.isEmbed) {

                        let parent = $this.parent('div');

                        const targetHeight = parent.outerHeight(),
                            parentWidth = parent.outerWidth(),
                            parentHeight = parent.outerHeight();


                        $this.attr('ratio', naylaVid.ratio);

                        let rat = naylaVid.ratio.split(':')[0] / naylaVid.ratio.split(':')[1],
                            parentRatio = parentWidth / parentHeight;

                        if (parentRatio < rat) {

                            $this.addClass('ratio-adjusted');

                            function adjustIframeSize() {

                                const aspectRatio = rat;
                                const $iframe = $this.find('.nayla-video-wrap');

                                const targetWidth = targetHeight * aspectRatio;

                                gsap.set($iframe, {
                                    width: targetWidth + 10,
                                    height: targetHeight + 10,
                                    x: -1 * (targetWidth - parentWidth) / 2
                                })

                                gsap.set($this.find('.plyr__video-embed__container'), {
                                    paddingBottom: 0,
                                    y: 0,
                                    yPercent: 0
                                })

                            }

                            adjustIframeSize();

                        }

                    }

                });


            })

        }


    }




    /////// Single Post ////////

    function naylaSinglePostPage() {

        var singlePost = $('.single-blog-post.split');

        singlePost.each(function () {

            let post = $(this),
                meta = post.find('.entry-meta'),
                metaWrap = post.find('.entry-meta-wrap'),
                trigEnd = "bottom bottom-=" + (metaWrap.outerHeight() / 2 - 75) + "'",
                content = post.find('.entry-content'),
                image = post.find('.post-featured-image'),
                title = post.find('.post-title-sub');

            new SplitText(title, {
                type: 'words, lines',
                wordsClass: 'pt-sub-word'
            })

            ScrollTrigger.create({
                trigger: content,
                start: 'top top+=50',
                end: trigEnd,

                pin: meta,
                onEnter: () => {

                    gsap.fromTo('.pt-sub-word', {
                        yPercent: 100
                    }, {
                        yPercent: 0,

                        stagger: 0.025,
                        duration: 1,
                        ease: 'expo.out'

                    })


                    gsap.to(image, {
                        scale: .7,
                        marginTop: '1em'
                    })

                },
                onLeaveBack: () => {
                    gsap.to(image, {
                        scale: 1,
                        marginTop: 0
                    })

                }
            })



        })



    }




    /////// Project Pages ////////

    function naylaProjectPages() {

        let $this = $('.project-page'),
            header = $this.find('.project-page-header'),
            wrapper = header.children('div'),
            image = header.find('.project-image.featured'),
            title = header.find('.project-title'),
            backButton = header.find('.project-back-button'),
            nextProjSec = $this.find('.nayla-next-project');


        if (nextProjSec.length) {

            naylaMarquee(nextProjSec.find('.nayla-marquee'))

        }


        backButton.on('click', function () {
            history.back()
        })


        if ((header.hasClass('image-gallery-horizontal')) || (header.hasClass('image-gallery-vertical'))) {

            let hero = header.find('.project-hero'),
                images = header.find('.project-images'),
                slideButton = header.find('.project-slide-button'),
                slider = images.children('.project-images-slider'),
                speed = $(window).outerHeight() * images.data('speed'),
                vertical, horizontal,
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: header,
                        start: 'top top',
                        pin: true,
                        scrub: 1,
                        end: speed,
                        id: 'projectImagesScroll',
                    }
                }),
                heroTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: header,
                        start: 1,
                        scrub: 1,
                        end: 500,


                    }
                });


            if (header.hasClass('image-gallery-vertical')) {
                vertical = true;
                horizontal = false;
            } else if (header.hasClass('image-gallery-horizontal')) {
                horizontal = true;
                vertical = false;
            }

            if (vertical) {


                header.find('.has-anim-image').each(function () {


                    new naylaImageAnimation($(this));

                })

            }


            var sliderHeight, sliderTop, transVal, sliderWidth, sliderLeft;

            function initAnim() {

                sliderWidth = slider.outerWidth();
                sliderLeft = slider.offset().left;
                sliderHeight = slider.outerHeight();
                sliderTop = slider.offset().top;
                transVal = sliderHeight + sliderTop - $(window).outerHeight() + 50;

                tl.clear();

                if (horizontal) {
                    tl.to(slider, {
                        xPercent: -100,
                    }, 0)



                } else if (vertical) {
                    tl.to(slider, {
                        y: -1 * transVal,

                    }, 0)

                }

            }

            initAnim();

            if (horizontal) {

                let words = title.find('.anim_word'),
                    state = Flip.getState(words),
                    tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: header,
                            start: 0,
                            scrub: 1,
                            end: 250,
                        }
                    });



                Flip.from(state, {
                    duration: 1,
                    absolute: true,
                    absoluteOnLeave: true,
                    scrollTrigger: {
                        trigger: header,
                        start: -1,
                        scrub: 1,
                        end: 500,
                    }
                });


                tl.to(slideButton.find('i'), {
                    rotate: -45,

                }, 0)

                tl.to(header.find('.elementor-widget-naylaprojectmeta'), {
                    opacity: 0

                }, 0)

                tl.to(title, {
                    opacity: 0

                }, 0)

                tl.to(slideButton, {
                    opacity: 0

                }, 0)

                slideButton.on('click', () => {
                    gsap.to(window, {
                        duration: .45,
                        scrollTo: 250,
                        ease: 'expo.inOut',

                    });
                })


            } else if (vertical) {

                slideButton.on('click', function () {

                    let scrollToo = 750 * Math.ceil(ScrollTrigger.getById('projectImagesScroll').progress * 10);

                    if (scrollToo > transVal) {
                        scrollToo = transVal;
                    }

                    if (slideButton.hasClass('return')) {

                        gsap.to(window, {
                            duration: .45,
                            scrollTo: 0,
                            ease: 'expo.inOut',
                            onComplete: () => {
                                slideButton.removeClass('return');
                            }
                        });

                    } else {

                        gsap.to(window, {
                            duration: .75,
                            scrollTo: scrollToo,
                            ease: 'expo.out',
                        });
                    }

                    if (transVal == scrollToo) {

                        slideButton.addClass('return');
                    }
                })


                matchMedia.add({
                    isMobile: "(max-width: 450px)"

                }, (context) => {
                    let {
                        isMobile
                    } = context.conditions;

                    initAnim()

                    heroTl.to(hero, {
                        opacity: 0,
                        y: -100
                    })

                    return () => {
                        heroTl.clear();
                        initAnim()

                    }
                });
            }


        }


        if ((header.hasClass('half-image')) || (header.hasClass('tall-image'))) {

            //            gsap.to(image.find('img'), {
            //                yPercent: 30,
            //                ease: 'none',
            //                scrollTrigger: {
            //                    trigger: '#smooth-content',
            //                    start: 'top top',
            //                    end: 'bottom top',
            //                    scrub: 1
            //                }
            //            });

            //            new naylaImageAnimation(image);

        }


        if (header.hasClass('creative')) {


            new naylaImageAnimation(image);

        }




        if (header.hasClass('video')) {

            naylaVideo($this.find('.project-video .nayla-video'))
        }

        if (header.find('.project-image.featured .nayla-video').length) {


            naylaVideo($this.find('.project-image.featured .nayla-video'))


        }

        if (header.find('.n-vimeo').length || header.find('.n-youtube').length) {

            new naylaGeneralAnimations(header.find('.project-image.featured'));
        }

    }


    /////////////////////////////////
    //  General Scroll Animations  //
    /////////////////////////////////

    class naylaGeneralAnimations {

        DOM = {
            el: null,
        };

        animations = ['fadeIn', 'fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight', 'scaleIn', 'slideUp', 'slideLeft', 'slideRight', 'maskUp', 'maskDown', 'maskLeft', 'maskRight', 'maskCustom'];

        // Animation Defaults
        defaults = {

            duration: 1,
            delay: 0,
            stagger: 0,
            ease: 'power1.inOut',

        };

        // Animation start stages
        from = {

        }

        // Scroll options
        scroll = {
            scrollTrigger: {
                trigger: null,
                scrub: null,
                pin: null,
                start: 'top bottom',
                pinSpacing: 'margin',

            }
        }

        out = {
            yPercent: null,
            stagger: null,
            duration: null,
            ease: 'expo.in',
            delay: 0
        }

        constructor(DOM_el, options, fromOptions, scroll, out) {

            this.DOM.el = DOM_el;
            this.stagger = $(this.DOM.el).data('stagger');
            this.duration = $(this.DOM.el).data('duration');
            this.delay = $(this.DOM.el).data('delay');
            this.scrub = $(this.DOM.el).data('scrub');
            this.pin = $(this.DOM.el).data('pin');
            this.animOut = $(this.DOM.el).data('out');
            this.target = $(this.DOM.el).data('trigger');

            this.target == null ? this.scroll.scrollTrigger.trigger = this.DOM.el : this.scroll.scrollTrigger.trigger = $(this.target);




            this.progress = 0;

            this.pin == null ? this.pin = false : '';
            this.scrub == null ? this.scrub = false : '';

            this.animOut == null ? this.animOut = false : '';

            this.classes = this.DOM.el.attr('class').split(' ');

            let animations = this.animations,
                classes = this.classes;

            const activeAnimation = classes.filter(function (obj) {
                return animations.indexOf(obj) !== -1;
            });


            // Set Animation Targets
            this.target = $(this.DOM.el);
            this.img = $(this.DOM.el).children('img');
            ////

            this.scaleimage = false;
            classes.includes('imgScale') ? this.scaleimage = true : '';

            this.from.visibility = 'visible'
            // Defaults for animations

            if (activeAnimation[0] === 'fadeIn') {

                this.from.opacity = 0;

                this.defaults.opacity = 1;
                this.defaults.duration = 1.25;

            }

            if ((activeAnimation[0] === 'fadeUp') || (activeAnimation[0] === 'fadeDown')) {

                this.from.opacity = 0;


                activeAnimation[0] === 'fadeUp' ? this.from.y = 100 : this.from.yPercent = -100;

                this.defaults.opacity = 1;
                this.defaults.y = 0;

                this.defaults.duration = 1.25;


                this.scroll.scrollTrigger.start = 'top-=100 bottom'

            }

            if ((activeAnimation[0] === 'fadeLeft') || (activeAnimation[0] === 'fadeRight')) {

                this.from.opacity = 0;

                activeAnimation[0] === 'fadeLeft' ? this.from.xPercent = 100 : this.from.xPercent = -100;

                this.defaults.opacity = 1;
                this.defaults.xPercent = 0;
                this.defaults.duration = 1.25;

            }

            if (activeAnimation[0] === 'scaleIn') {

                this.target.attr('data-start') == null ? this.from.scale = 0 : this.from.scale = this.target.attr('data-start');

                this.target.css('transformOrigin', this.target.attr('data-origin'))

                this.defaults.scale = 1;

                this.scrub || this.pin ? this.defaults.ease = 'none' : this.defaults.ease = 'power4.out';
            }

            if ((activeAnimation[0] === 'slideRight') || (activeAnimation[0] === 'slideLeft')) {

                let leftVal = this.target.offset().left + this.target.outerWidth(),
                    rightVal = $(window).outerWidth() - leftVal + this.target.outerWidth();

                activeAnimation[0] === 'slideRight' ? this.from.x = -1 * leftVal : this.from.x = rightVal;

                this.defaults.x = 0
                this.defaults.duration = 2
                this.defaults.ease = 'power4.out'

                this.scrub || this.pin ? this.defaults.ease = 'none' : this.defaults.ease = 'power4.out';
            }

            if ((activeAnimation[0] === 'slideUp')) {

                this.from.y = $(window).outerHeight();

                this.scroll.scrollTrigger.trigger = this.target[0].offsetParent;

                this.defaults.y = 0
                this.defaults.duration = 2
                this.defaults.ease = 'expo.out'

                this.scrub || this.pin ? this.defaults.ease = 'none' : this.defaults.ease = 'expo.out';

            }


            if (activeAnimation[0] === 'maskUp' || activeAnimation[0] === 'maskDown' || activeAnimation[0] === 'maskLeft' || activeAnimation[0] === 'maskRight' || activeAnimation[0] === 'maskCustom') {


                activeAnimation[0] === 'maskUp' ? this.from.clipPath = 'inset(100% 0% 0% 0%)' : '';
                activeAnimation[0] === 'maskDown' ? this.from.clipPath = 'inset(0% 0% 100% 0%)' : '';
                activeAnimation[0] === 'maskRight' ? this.from.clipPath = 'inset(0% 100% 0% 0%)' : '';
                activeAnimation[0] === 'maskLeft' ? this.from.clipPath = 'inset(0% 0% 0% 100%)' : '';

                if (activeAnimation[0] === 'maskCustom') {

                    let startWidth = this.target.data('width'),
                        startLeft = this.target.data('left'),
                        startPath = 'inset(0% ' + (100 - startWidth - startLeft) + '% 0% ' + startLeft + '%)';

                    this.from.clipPath = startPath

                }

                this.defaults.clipPath = 'inset(0% 0% 0% 0%)'
                this.defaults.duration = 2

                this.scrub || this.pin ? this.defaults.ease = 'none' : this.defaults.ease = 'power4.inOut';

            }


            // Return default if data is null
            this.stagger == null ? this.stagger = this.defaults.stagger : '';
            this.delay == null ? this.delay = this.defaults.delay : '';
            this.duration == null ? this.duration = this.defaults.duration : '';

            // Asign options
            this.options = Object.assign(this.defaults, options);
            this.fromOptions = Object.assign(this.from, fromOptions);
            this.scroll = Object.assign(this.scroll, scroll);

            this.options.stagger = this.stagger;
            this.options.delay = this.delay;
            this.options.duration = this.duration;

            if (this.pin) {

                this.scrub = true

                this.scroll.scrollTrigger.pin = true;
                this.scroll.scrollTrigger.scrub = 1;
                this.scroll.scrollTrigger.start = 'center center';


                this.scroll.scrollTrigger.end = this.duration == null ? 'botom top' : 'bottom+=' + (this.duration * 1000) + ' top';
            }

            if ((this.scrub) && (!this.pin)) {
                this.scroll.scrollTrigger.scrub = 1;
                this.scroll.scrollTrigger.start = 'top bottom';
                this.scroll.scrollTrigger.end = 'top center'

            }

            if (this.animOut) {

                this.out.stagger = this.options.stagger;
                this.out.duration = this.options.duration;

                this.out = Object.assign(this.out, out);

            }

            this.render();
        }

        render() {

            var tl = gsap.timeline(this.scroll)

            tl.fromTo(this.target, this.fromOptions, this.options);



            this.animOut == true ? this.tl.to(this.target, this.out) : '';

            tl.eventCallback("onComplete", () => {

                $(this.DOM.el).addClass('is-inview');

                if (!this.scrub) {
                    gsap.set($(this.DOM.el), {

                        clearProps: 'clipPath,transform,rotate,scale,translate'
                    })
                }

            });

            tl.eventCallback("onStart", () => {

                $(this.DOM.el).addClass('anim_start')

            });


        }

    };


    /////////////////////////////////
    //   Image Scroll Animations   //
    /////////////////////////////////


    class naylaImageAnimation {

        DOM = {
            el: null,
            image: null
        };

        animations = ['slideLeft', 'slideRight', 'slideUp', 'slideDown', 'blockUp', 'blockLeft', 'blockRight', 'blockDown', 'maskCustom'];

        // Animation Defaults
        defaults = {

            duration: 1,
            delay: 0,
            stagger: 0,
            ease: 'expo.out',

        };

        // Animation start stages
        from = {
            yPercent: 0,

        }

        // Scroll options
        scroll = {
            scrollTrigger: {
                trigger: null,
                scrub: null,
                pin: null,
                start: 'top bottom',
            }
        }

        out = {
            yPercent: null,
            stagger: null,
            duration: null,
            ease: 'expo.in',
            delay: 0
        }


        constructor(DOM_el, options, fromOptions, scroll, out) {

            this.DOM.el = DOM_el;

            this.duration = $(this.DOM.el).data('duration');
            this.delay = $(this.DOM.el).data('delay');
            this.scrub = $(this.DOM.el).data('scrub');
            this.pin = $(this.DOM.el).data('pin');
            this.animOut = $(this.DOM.el).data('anim-out');
            this.imageScale = $(this.DOM.el).data('image-scale');

            this.scroll.scrollTrigger.trigger = this.DOM.el;

            this.classes = this.DOM.el.attr('class').split(' ');

            let animations = this.animations,
                classes = this.classes;

            const activeAnimation = classes.filter(function (obj) {
                return animations.indexOf(obj) !== -1;
            });

            this.pin == null ? this.pin = false : '';
            this.scrub == null ? this.scrub = false : '';
            this.imageScale == null ? this.imageScale = false : '';

            this.animOut == null ? this.animOut = false : '';
            // Set Animation Targets
            this.target = $(this.DOM.el);
            this.img = $(this.DOM.el).children('img');
            ////

            this.scaleimage = false;
            this.imageScale == true ? this.scaleimage = true : '';


            if (activeAnimation[0] === 'maskCustom') {

                let startWidth = this.target.data('width'),
                    startLeft = this.target.data('left'),
                    startPath = 'inset(0% ' + (100 - startWidth - startLeft) + '% 0% ' + startLeft + '%)';

                this.from.clipPath = startPath

            }

            this.defaults.clipPath = 'inset(0% 0% 0% 0%)'
            this.defaults.duration = 2
            this.defaults.ease = 'power4.inOut'


            // Defaults for animations

            if (activeAnimation[0] === 'slideLeft') {

                this.from.clipPath = 'inset(0% 0% 0% 100%)';

                this.defaults.clipPath = 'inset(0% 0% 0% 0%)';
                this.defaults.duration = 2;

                this.animOut ? this.out.clipPath = 'inset(0% 100% 0% 0%)' : '';

            }

            if (activeAnimation[0] === 'slideRight') {

                this.from.clipPath = 'inset(0% 100% 0% 0%)';

                this.defaults.clipPath = 'inset(0% 0% 0% 0%)';
                this.defaults.duration = 1.25;

                this.animOut ? this.out.clipPath = 'inset(0% 0% 0% 100%)' : '';

            }

            if (activeAnimation[0] === 'slideUp') {

                this.from.clipPath = 'inset(100% 0% 0% 0%)';

                this.defaults.clipPath = 'inset(0% 0% 0% 0%)';
                this.defaults.duration = 2;

                this.animOut ? this.out.clipPath = 'inset(0% 0% 100% 0%)' : '';

            }

            if (activeAnimation[0] === 'slideDown') {

                this.from.clipPath = 'inset(0% 0% 100% 0%)';

                this.defaults.clipPath = 'inset(0% 0% 0% 0%)';
                this.defaults.duration = 1.25;

                this.defaults.ease = 'power3.inOut';
                this.animOut ? this.out.clipPath = 'inset(100% 0% 0% 0%)' : '';
            }

            if ((activeAnimation[0] === 'blockUp') || (activeAnimation[0] === 'blockDown') || (activeAnimation[0] === 'blockLeft') || (activeAnimation[0] === 'blockRight')) {


                $(this.DOM.el).append('<span class="block-ov"></div>');
                this.target = $(this.DOM.el).find('.block-ov');

                let bg = $(this.DOM.el).data('block-color');

                if (bg === 'auto') {

                    let imgSrc = $(this.DOM.el).find('img').attr('src')

                    colorjs.average(imgSrc, {
                        amount: 1
                    }).then(imgColor => {

                        $(this.DOM.el).find('.block-ov').css('backgroundColor', "rgb" + "(" + imgColor + ")");

                    })

                } else {
                    $(this.DOM.el).find('.block-ov').css('backgroundColor', $(this.DOM.el).data('block-color'));
                }

                activeAnimation[0] === 'blockUp' ? this.from.height = '100%' : '';


                if ((activeAnimation[0] === 'blockUp') || (activeAnimation[0] === 'blockDown')) {
                    this.defaults.height = '0%';
                    this.animOut ? this.out.height = '100%' : '';

                }

                if ((activeAnimation[0] === 'blockLeft') || (activeAnimation[0] === 'blockRight')) {
                    this.defaults.width = '0%';

                    this.animOut ? this.out.width = '100%' : '';
                }


                this.defaults.duration = 1;
                this.defaults.ease = 'expo.inOut';

            }


            // Return default if data is null

            this.delay == null ? this.delay = this.defaults.delay : '';
            this.duration == null ? this.duration = this.defaults.duration : '';

            this.scrub == null ? this.scrub = false : '';


            // Asign options
            this.options = Object.assign(this.defaults, options);
            this.fromOptions = Object.assign(this.from, fromOptions);
            this.scroll = Object.assign(this.scroll, scroll);

            if (this.pin) {

                this.scrub = true

                this.scroll.scrollTrigger.pin = true;
                this.scroll.scrollTrigger.scrub = 1;
                this.scroll.scrollTrigger.start = 'center center';

                this.scroll.scrollTrigger.end = this.duration == null ? 'botom top' : 'bottom+=' + (this.duration * 1000) + ' top';
            }

            if ((this.scrub) && (!this.pin)) {

                this.scroll.scrollTrigger.scrub = 1;
                this.scroll.scrollTrigger.start = 'top bottom';
                this.scroll.scrollTrigger.end = 'bottom center'
            }

            if (this.animOut) {

                this.out.stagger = this.options.stagger;
                this.out.duration = this.options.duration;

                this.out = Object.assign(this.out, out);

            }

            this.options.delay = this.delay;
            this.options.duration = this.duration;
            this.scroll.scrollTrigger.scrub = this.scrub




            // If anim out

            if (this.animOut) {

                this.out.stagger = this.options.stagger;
                this.out.duration = this.options.duration;

                this.out = Object.assign(this.out, out);

            } else {

                this.out = null;
            }

            requestAnimationFrame(() => this.render());
        }

        render() {


            var tl = gsap.timeline(this.scroll)


            tl.fromTo(this.target, this.fromOptions, this.options);

            if (this.scaleimage) {

                tl.fromTo(this.img, {
                    scale: 1.2
                }, {
                    scale: 1,
                    duration: this.options.duration,
                    ease: this.options.ease,
                    delay: this.options.delay
                }, 0)

            }



            this.animOut == true ? tl.to(this.target, this.out) : '';

            tl.eventCallback("onStart", () => {

                $(this.DOM.el).addClass('anim_start')
            });




        }

    };

    function naylaImageAnims() {

        $('.has-anim-image').each(function () {


            let $this = $(this);
            new naylaImageAnimation($this);

        })
    }


    /////////////////////////////////
    //    Text Scroll Animations   //
    /////////////////////////////////

    class naylaTextAnimation {

        DOM = {
            el: null,
            chars: null,
            words: null,
            lines: null
        };

        animations = ['charsUp', 'charsDown', 'charsRight', 'charsLeft', 'wordsUp', 'wordsDown', 'linesUp', 'linesDown', 'charsFadeOn', 'wordsFadeOn', 'linesFadeOn', 'charsScaleUp', 'charsScaleDown', 'charsRotateIn', 'charsFlipUp', 'charsFlipDown', 'linesMask', 'wordsJustifyCollapse', 'wordsJustifyExpand', 'slideLeft', 'slideRight'];

        // Animation Defaults
        defaults = {
            yPercent: 0,
            duration: 1,
            delay: 0,
            stagger: 0,
            ease: 'expo.out',
            x: 0,
        };

        // Animation start stages
        from = {
            yPercent: 0,
            x: 0
        }

        // Scroll options
        scroll = {
            scrollTrigger: {
                trigger: null,
                scrub: null,
                pin: null,
                start: 'top bottom',
                onEnter: () => {

                    $(this.DOM.el).addClass('viewport-enter')

                }
            }
        }

        out = {
            yPercent: null,
            stagger: null,
            duration: null,
            ease: 'expo.in',
            delay: 0
        }

        constructor(DOM_el, options, fromOptions, scroll, out) {

            this.DOM.el = DOM_el;
            this.stagger = $(this.DOM.el).data('stagger');
            this.duration = $(this.DOM.el).data('duration');
            this.delay = $(this.DOM.el).data('delay');
            this.scrub = $(this.DOM.el).data('scrub');
            this.pin = $(this.DOM.el).data('pin');
            this.animOut = $(this.DOM.el).data('out');
            this.target = $(this.DOM.el).data('trigger');


            this.target == null ? this.scroll.scrollTrigger.trigger = this.DOM.el : this.scroll.scrollTrigger.trigger = $(this.target);

            this.progress = 0;

            // Set default inetraction settings
            this.pin == null ? this.pin = false : '';
            this.scrub == null ? this.scrub = false : '';

            this.animOut == null ? this.animOut = false : '';

            this.classes = this.DOM.el.attr('class').split(' ');

            let animations = this.animations,
                classes = this.classes;

            const activeAnimation = classes.filter(function (obj) {
                return animations.indexOf(obj) !== -1;
            });

            const isFade = classes.includes('fade'),
                isMask = classes.includes('mask'),
                noRevert = classes.includes('no-revert');

            isFade ? this.from.opacity = 0 : '';
            isFade ? this.defaults.opacity = 1 : '';

            noRevert ? this.noRevert = true : '';

            this.anim = activeAnimation[0];

            activeAnimation[0].includes('chars') ? this.type = 'chars, lines' : '';
            activeAnimation[0].includes('words') ? this.type = 'words' : '';
            activeAnimation[0].includes('lines') ? this.type = 'lines' : '';
            activeAnimation[0].includes('Justify') ? this.type = 'lines, words' : '';


            this.split = new SplitText(this.DOM.el, {
                type: this.type,
                charsClass: 'anim_char',
                linesClass: 'anim_line',
                wordsClass: 'anim_word',
                reduceWhiteSpace: true
            })


            // Set Animation Targets

            if (activeAnimation[0].includes('words')) {

                $(this.DOM.el).find('.anim_word').wrapInner('<span></span>')
                this.target = $(this.DOM.el).find('.anim_word').children('span');
            }

            if (activeAnimation[0].includes('chars')) {

                $(this.DOM.el).find('.anim_char').wrapInner('<span></span>')
                this.target = $(this.DOM.el).find('.anim_char').children('span');
            }

            if (activeAnimation[0].includes('lines')) {

                $(this.DOM.el).find('.anim_line').wrapInner('<span></span>')
                this.target = $(this.DOM.el).find('.anim_line').children('span');
            }

            // Defaults for animations

            if (activeAnimation[0] === 'charsUp') {

                this.from.yPercent = 100;

                this.defaults.yPercent = 0;
                this.defaults.stagger = 0.05;
                this.defaults.duration = 2;



                this.animOut ? this.out.yPercent = -100 : '';

            }

            if (activeAnimation[0] === 'charsDown') {

                this.from.yPercent = -100

                this.defaults.stagger = 0.035;
                this.defaults.duration = 2;

                this.animOut ? this.out.yPercent = 100 : '';
            }

            if (activeAnimation[0] === 'charsRight') {

                let arr = [];
                $(this.DOM.el).find('.anim_char').each(function () {
                    arr.push($(this).outerWidth())
                })

                this.from.x = -1 * Math.max(...arr)

                this.defaults.stagger = -0.035;
                this.defaults.duration = 1.5;

                this.animOut ? this.out.x = this.from.x * -1 : '';
            }

            if (activeAnimation[0] === 'charsLeft') {

                let arr = [];

                $(this.DOM.el).find('.anim_char').each(function () {
                    arr.push($(this).outerWidth())
                })

                this.from.x = Math.max(...arr)

                this.defaults.stagger = 0.035;
                this.defaults.duration = 1.5;

                this.animOut ? this.out.x = this.from.x * -1 : '';
            }

            if (activeAnimation[0] === 'wordsUp') {

                this.from.yPercent = 100

                this.defaults.stagger = 0.025;
                this.defaults.duration = 2;

                this.animOut ? this.out.yPercent = -100 : '';
            }

            if (activeAnimation[0] === 'wordsDown') {

                this.from.yPercent = -100

                this.defaults.stagger = -0.01;
                this.defaults.duration = 2;
            }

            if (activeAnimation[0] === 'linesUp') {

                this.from.yPercent = 100

                this.defaults.stagger = 0.15;
                this.defaults.duration = 2;
                this.defaults.ease = 'expo.out';
            }

            if (activeAnimation[0] === 'linesDown') {

                this.from.yPercent = -100

                this.defaults.stagger = -0.1;
                this.defaults.duration = 1.5;
            }

            if (activeAnimation[0] === 'charsFadeOn') {

                isMask ? this.from.opacity = 0.01 : this.from.opacity = 0;

                this.defaults.opacity = 1;

                this.defaults.stagger = 0.01;
                this.defaults.duration = 1.5;

                this.animOut ? this.out.opacity = 0 : '';
                this.animOut ? this.out.stagger = -0.01 : '';
                this.animOut ? this.out.ease = 'none' : '';
            }

            if (activeAnimation[0] === 'wordsFadeOn') {

                isMask ? this.from.opacity = 0.1 : this.from.opacity = 0;


                this.defaults.opacity = 1;

                this.defaults.stagger = 0.02;
                this.defaults.duration = 3;
            }

            if (activeAnimation[0] === 'linesFadeOn') {

                isMask ? this.from.opacity = 0.01 : this.from.opacity = 0;

                this.defaults.opacity = 1;

                this.defaults.stagger = 0.1;
                this.defaults.duration = 2;
            }

            if ((activeAnimation[0] === 'charsScaleUp') || (activeAnimation[0] === 'charsScaleDown')) {
                this.from.scaleY = 0

                this.defaults.scaleY = 1
                this.defaults.stagger = 0.05;
                this.defaults.duration = 2;
            }

            if (activeAnimation[0] === 'charsRotateIn') {

                this.from.rotateX = -90

                this.defaults.rotateX = 0;

                this.defaults.stagger = 0.03;
                this.defaults.duration = 2;

                this.animOut ? this.out.rotateX = 90 : '';



            }

            if (activeAnimation[0] === 'charsFlipUp') {

                this.from.x = -50
                this.from.yPercent = 50
                this.from.rotateY = 180
                this.from.opacity = 0

                this.defaults.x = 0
                this.defaults.yPercent = 0
                this.defaults.rotateY = 0
                this.defaults.opacity = 1

                this.defaults.stagger = -0.05;
                this.defaults.duration = 1;
            }

            if (activeAnimation[0] === 'charsFlipDown') {

                this.from.x = 50
                this.from.yPercent = -50
                this.from.rotateY = -180
                this.from.opacity = 0

                this.defaults.x = 0
                this.defaults.yPercent = 0
                this.defaults.rotateY = 0
                this.defaults.opacity = 1

                this.defaults.stagger = 0.05;
                this.defaults.duration = 1;
            }

            if (activeAnimation[0] === 'linesMask') {

                $(this.DOM.el).find('.anim_line').each(function () {

                    let $this = $(this),
                        span = $this.children('span');

                    span.clone().addClass('clone').appendTo($this);


                })


                this.from.width = '0%'

                this.defaults.width = '100%'
                this.defaults.stagger = 0.2;
                this.defaults.duration = 2;

                this.scrub == true ? this.defaults.ease = 'none' : '';

                this.scroll.scrollTrigger.start = 'top 70%'
                this.scroll.scrollTrigger.end = 'bottom center'

            }

            if (activeAnimation[0] === 'slideLeft') {

                this.target = $(this.DOM.el).find('.anim_line');
                this.from.x = -1 * this.target.outerWidth();

                if (this.target.outerWidth() > $(window).outerWidth()) {

                    this.defaults.x = 0
                } else {
                    this.defaults.x = 0;
                }

                this.animOut ? this.defaults.x = -1 * $(window).outerWidth() - 400 : '';
                this.animOut ? this.out.ease = 'none' : '';

                this.defaults.ease = 'none';

            }

            if (activeAnimation[0] === 'slideRight') {

                this.target = $(this.DOM.el).find('.anim_line');
                this.from.x = $(window).outerWidth();

                if (this.target.outerWidth() > $(window).outerWidth()) {

                    this.defaults.x = 0 - (this.target.outerWidth() - $(window).outerWidth() + 300)
                } else {
                    this.defaults.x = 0;
                }

                this.animOut ? this.defaults.x = -1 * $(window).outerWidth() - 400 : '';
                this.animOut ? this.out.ease = 'none' : '';

                this.defaults.ease = 'none';



            }

            // Return default if data is null
            this.stagger == null ? this.stagger = this.defaults.stagger : '';
            this.delay == null ? this.delay = this.defaults.delay : '';
            this.duration == null ? this.duration = this.defaults.duration : '';

            // Asign options
            this.options = Object.assign(this.defaults, options);
            this.fromOptions = Object.assign(this.from, fromOptions);
            this.scroll = Object.assign(this.scroll, scroll);

            this.options.stagger = this.stagger;
            this.options.delay = this.delay;
            this.options.duration = this.duration;

            if (this.pin) {

                this.scrub = true

                this.scroll.scrollTrigger.pin = true;
                this.scroll.scrollTrigger.scrub = 1;
                this.scroll.scrollTrigger.start = 'center center';

                this.scroll.scrollTrigger.end = this.duration == null ? 'botom top' : 'bottom+=' + (this.duration * 1000) + ' top';
            }

            if ((this.scrub) && (!this.pin)) {

                this.scroll.scrollTrigger.scrub = 1;
                this.scroll.scrollTrigger.start = 'top+=100 bottom';
                this.scroll.scrollTrigger.end = 'bottom center'
            }

            if (this.animOut) {

                this.out.stagger = this.options.stagger;
                this.out.duration = this.options.duration;

                this.out = Object.assign(this.out, out);

            }

            this.render();
        }

        render() {

            this.tl = gsap.timeline(this.scroll)

            this.tl.fromTo(this.target, this.fromOptions, this.options);

            this.animOut == true ? this.tl.to(this.target, this.out) : '';

            this.tl.eventCallback("onComplete", () => {

                let loader = gsap.getById("innerTl");

                $(this.DOM.el).addClass('is-inview')

                this.scrub != true && !this.noRevert && loader == null ? this.split.revert() : '';

                this.progress = 1;

            });

            this.tl.eventCallback("onStart", () => {

                $(this.DOM.el).addClass('anim_start')

            });


        }

    };

    function detectPov() {

        $('.detect-pov').each(function () {

            let $this = $(this);

            ScrollTrigger.create({
                trigger: $this,
                onEnter: () => {
                    $this.addClass('is-inview')
                }
            })

        })
    }

    function naylaNextProject() {

        let next = $('.nayla-next-project');

        next.each(function () {

            let $this = $(this);


            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: next,
                    scrub: true,
                    start: 'top bottom',
                    end: 'top top'
                }
            });

            tl.to(next, {
                opacity: 1,

            }, 0)

            tl.fromTo(next.find('.next-project-title'), {
                opacity: 0,
                yPercent: -300

            }, {
                opacity: 1,
                yPercent: -50
            }, 0)

            tl.fromTo(next.find('.next-project-caption'), {
                opacity: 0,
                y: -100

            }, {
                opacity: 1,
                y: 0
            }, 0)

            tl.fromTo(next.find('.project-image'), {
                clipPath: 'inset(100%)'

            }, {
                clipPath: 'inset(0%)',
                ease: 'none'

            }, 0)

        })

        if (next.find('.nayla-video').length) {

            naylaVideo(next.find('.nayla-video'))

        }


    }

    function naylaScrollButtons(button) {


        button.each(function () {

            let $this = $(this),
                target = $this.data('scroll-to');

            $this.attr('href', '');

            $this.on('click', () => {

                disableScroll();


                setTimeout(function () {

                    enableScroll();

                    gsap.to(window, {
                        duration: 1,
                        scrollTo: isNaN(target) ? $(target).offset().top - 25 : target,
                        ease: 'expo.inOut',
                        onComplete: () => {

                        }
                    });

                }, 100)


            })


        })

    }


    ///////////////////////////
    //    Elementor Widgets  //
    ///////////////////////////

    var switchedDark,
        switchedLight;

    $(window).on('elementor/frontend/init', function () {


        function slideNav(slider, parent) {

            let prev = parent.find('.slide-prev'),
                next = parent.find('.slide-next');

            next.on('click', function () {
                slider.slideNext();
            })

            prev.on('click', function () {
                slider.slidePrev();
            })

        }

        function projectColorSettings(project) {

            let $this = project,
                img = project.find('img'),
                imgSrc = img.attr('src'),
                bgColor = project.data('primary-color'),
                elementsColor = project.data('secondary-color');

            if ((bgColor == null) && (img.length)) {

                colorjs.average(imgSrc, {
                    amount: 1
                }).then(imgColor => {

                    let finalColor = "rgb" + "(" + imgColor + ")";
                    $this.attr('data-primary-color', finalColor);

                })

            }

            if (((bgColor == null) && (!img.length))) {

                project.attr('data-primary-color', false)
            }


            if (elementsColor == null) {

                $this.attr('data-secondary-color', false)
            }

        }

        function changeHeaderStatus() {
            siteHeader.hasClass('dark') ? headerDark = true : headerDark = false;
            siteHeader.hasClass('light') ? headerLight = true : headerLight = false;
        }



        function layoutChange(target, project, parent) {

            if (project) {

                let primaryColor = project.data('primary-color'),
                    secondaryColor = project.data('secondary-color'),
                    tl = gsap.timeline();

                if (primaryColor) {

                    tl.to(target, {
                        backgroundColor: primaryColor,
                        duration: .75,
                        ease: 'sine.out',
                        onStart: () => {
                            headerLayoutChange(false, primaryColor, false, false);
                            cursorLayoutChange(false, primaryColor, false);

                            let hsl = gsap.utils.splitColor(primaryColor, true),
                                lightness = hsl[hsl.length - 1];

                            if (parent) {
                                lightness < 50 ? parent.addClass('light') : parent.removeClass('light');
                                lightness > 50 ? parent.addClass('dark') : parent.removeClass('dark');

                            }

                        }
                    }, 0)

                } else {

                    tl.to(target, {
                        backgroundColor: 'transparent',
                        duration: .75,
                        ease: 'sine.out',
                        onStart: () => {
                            headerLayoutChange(false, false, false, true);
                            cursorLayoutChange(false, false, true)
                        }
                    }, 0);

                    parent ? parent.removeAttr('style') : '';

                }


                if (parent) {
                    if (secondaryColor) {
                        parent.attr('style', '--mainColor: ' + secondaryColor + '')

                    } else {

                        parent.removeAttr('style');
                        parent.removeClass('dark light')
                    }

                }


            } else {

                gsap.to(target, {
                    backgroundColor: 'transparent',
                    duration: .75,
                    ease: 'sine.out',
                    onStart: () => {
                        headerLayoutChange(false, false, false, true);
                        cursorLayoutChange(false, false, true)
                    }
                });

                parent.removeAttr('style');
                parent.removeClass('dark light')

            }
        }


        //// Widgets Global ////

        elementorFrontend.hooks.addAction('frontend/element_ready/widget', function ($scope, $) {

            var button = $scope.find('.nayla-button'),
                animText = $scope.find('.has-anim-text'),
                project = $scope.find('.single-project'),
                parallaxImage = $scope.find('.parallax-image'),
                generalAnim = $scope.find('.has-anim'),
                imageAnim = $scope.find('.has-anim-image'),
                form = $scope.find('.wpcf7-form');

            if (form.length) {

                form.each(function () {

                    let $this = $(this),
                        inputs = $this.find('input, textarea');


                    inputs.each(function () {

                        let $this = $(this),
                            wrap = $this.parents('div.field-wrap , div.message-wrap'),
                            label = wrap.find('label');

                        $this.on('focus', () => {

                            wrap.addClass('active');

                        })

                        $this.on('focusout', () => {

                            $this.val().length > 0 ? '' : wrap.removeClass('active');



                        })




                    })


                })




            }


            if (imageAnim.length) {

                if (!imageAnim.parents('.fullscreen_menu').length) {


                    imageAnim.each(function () {

                        new naylaImageAnimation($(this));


                    })

                }

            }


            button.each(function () {

                let button = $(this),
                    $this = $(this).children('a'),
                    icon = $this.find('.button-icon'),
                    tl = gsap.timeline({
                        paused: true
                    }),
                    line,
                    animation = $this.data('animation'),
                    stagger = $this.data('stagger'),
                    duration = $this.data('duration');

                button.hasClass('underline') ? $this.append('<span class="button-line"></span>') : '';

            });


            if ((animText.length)) {

                document.fonts.ready.then((fontFaceSet) => {
                    naylaTextAnims();
                });



                function naylaTextAnims() {

                    let hasAnim = animText;

                    if (!hasAnim.parents('.fullscreen_menu').length) {
                        hasAnim.each(function () {

                            let $this = $(this)

                            let textAnim = new naylaTextAnimation($this);


                            //            matchMedia.add({
                            //                isMobile: "(max-width: 450px)"
                            //
                            //            }, (context) => {
                            //
                            //                if (textAnim.progress == 0) {
                            //
                            //                    textAnim.split.revert();
                            //                    textAnim.tl.revert();
                            //
                            //                    new naylaTextAnimation($this);
                            //
                            //                }
                            //
                            //                return () => {
                            //
                            //                }
                            //            });



                            if ($this.hasClass('wordsJustifyCollapse') || $this.hasClass('wordsJustifyExpand')) {

                                let words = $this.find('.anim_word'),
                                    start = $this.offset().top < $(window).outerHeight() ? 0 : 'top bottom+=200',
                                    scrub = $this.data('scrub')

                                $this.hasClass('wordsJustifyExpand') ? $this.css('textAlignLast', 'justify') : $this.css('textAlignLast', 'auto');

                                const state = Flip.getState(words);

                                $this.hasClass('wordsJustifyExpand') ? $this.css('textAlignLast', 'auto') : $this.css('textAlignLast', 'justify');


                                if (scrub) {

                                    Flip.to(state, {
                                        duration: 1,
                                        ease: "none",
                                        stagger: 0,
                                        absolute: true,
                                        absoluteOnLeave: true,
                                        scrollTrigger: {
                                            trigger: $this,
                                            start: start,
                                            end: 'top center',
                                            scrub: 1.2,
                                        }

                                    });

                                } else {

                                    ScrollTrigger.create({
                                        trigger: $this,
                                        start: start,
                                        end: 'bottom center',
                                        onEnter: () => {
                                            Flip.to(state, {
                                                duration: 2,
                                                ease: "expo.out",
                                                stagger: 0,
                                                absolute: true,
                                                absoluteOnLeave: true,
                                            });
                                        }

                                    })
                                }

                            }


                        })



                    }


                }

            }

            if (project.length) {

                project.each(function () {

                    let $this = $(this),
                        hoverImage, hoverTitle, hoverArrow,
                        image = $this.find('img'),
                        metas = $this.find('.single-project-meta').children('div'),
                        title = $this.find('.single-project-title'),
                        category = $this.find('.single-project-category'),
                        titleText = title.text();


                    $this.hasClass('hover-image-mask') ? hoverImage = true : hoverImage = false;
                    $this.hasClass('hover-title') ? hoverTitle = true : hoverTitle = false;
                    $this.hasClass('hover-arrow') ? hoverArrow = true : hoverArrow = false;

                    if (hoverTitle) {

                        title.wrapInner('<span></span>')
                        title.append('<span class="clone">' + titleText + '</span');

                        new SplitText(title.children('span'), {
                            type: 'chars',
                            charsClass: 'tit_char'
                        })


                        $this.on('mouseenter', function () {

                            let tl = gsap.timeline();

                            tl.to($this.find(title.children('span').first().children('.tit_char')), {
                                yPercent: -100,
                                duration: .25,
                                ease: 'power1.in',
                                stagger: 0.02
                            }, 0)

                            tl.to($this.find(title.children('span').last().children('.tit_char')), {
                                yPercent: -100,
                                duration: .25,
                                ease: 'power1.out',
                                stagger: 0.02
                            }, .1)


                        })

                        $this.on('mouseleave', function () {

                            let tl = gsap.timeline();

                            tl.to($this.find(title.children('span').first().children('.tit_char')), {
                                yPercent: 0,
                                duration: .25,
                                ease: 'power1.out',
                                stagger: 0.02
                            }, .1)

                            tl.to($this.find(title.children('span').last().children('.tit_char')), {
                                yPercent: 0,
                                duration: .25,
                                ease: 'power1.in',
                                stagger: 0.02
                            }, 0)


                        })

                    }


                    if (hoverImage) {

                        image.clone().addClass('masked').insertAfter(image)


                    }


                })

            }

            if (parallaxImage.length) {
                $scope.imagesLoaded(function () {
                    naylaParallaxImages();
                });



                function naylaParallaxImages() {

                    var image = parallaxImage;

                    image.each(function () {

                        let $this = $(this),
                            img = $this.find('img'),
                            width = $this.outerWidth(),
                            height = $this.outerHeight(),
                            speed = $this.data('parallax-speed') == null ? 60 : $this.data('parallax-speed'),
                            parallaxVal = height * (speed / 100),
                            imgHeight = 'calc(100% + ' + parallaxVal + 'px)';

                        $this.wrapInner('<div class="image-parallax-wrap"></div>');

                        let wrap = $this.find('.image-parallax-wrap');

                        $this.css('height', height);

                        wrap.css('height', imgHeight)

                        gsap.from(wrap, {
                            y: -parallaxVal,
                            ease: 'none',
                            id: 'parallaximg',
                            scrollTrigger: {
                                trigger: $this,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true,
                                onUpdate: () => {

                                }
                            }
                        })

                    })


                }

            }

        })


        //// Columns Global ////
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($scope, $) {

            if ($scope.hasClass('has-anim')) {

                if (!$scope.parents('.fullscreen_menu').length) {

                    new naylaGeneralAnimations($scope);

                }
            }

            if ($scope.hasClass('pinned')) {

                let pinned = $scope;

                pinned.each(function () {

                    let $this = $(this),
                        dataPin = $this.attr('data-pin'),
                        height = $this.outerHeight(),
                        siteHeader = $('.site-header');

                    let pinnedScroll = ScrollTrigger.create({
                        trigger: dataPin,
                        pin: $this,
                        pinSpacing: false,
                        start: siteHeader.hasClass('fixed') ? 'top top+=' + (siteHeader.outerHeight() + 25) + '' : 'top top+=50',
                        end: 'bottom top+=' + (height + siteHeader.outerHeight()) + '',
                    })

                    matchMedia.add({
                        isMobile: "(max-width: 450px)"

                    }, (context) => {

                        pinnedScroll.kill()

                        return () => {

                        }
                    });

                })

            }

            if ($scope.hasClass('has-parallax')) {

                naylaParallax();

                function naylaParallax() {

                    const item = $scope;

                    item.each(function () {

                        let $this = $(this),
                            tl = gsap.timeline({

                                scrollTrigger: {
                                    trigger: $this,
                                    start: 'top bottom',
                                    end: 'bottom top',
                                    scrub: 1
                                }
                            }),
                            speed = $this.data('parallax-speed'),
                            direction = $this.data('parallax-direction'),
                            start = $this.data('start'),
                            end = $this.data('end'),
                            x = 0,
                            y = 0;

                        speed == null ? speed = 20 : '';
                        direction == null ? direction = 'up' : '';

                        direction == 'up' ? y = (speed * -1) : '';
                        direction == 'down' ? y = speed : '';


                        if (direction === 'horizontal') {


                            tl.fromTo($this, {
                                xPercent: start
                            }, {
                                xPercent: end
                            })


                        } else {

                            tl.to($this, {
                                yPercent: y,
                                xPercent: x,

                            });

                        }



                        matchMedia.add({
                            isMobile: "(max-width: 450px)"

                        }, (context) => {
                            let {
                                isMobile
                            } = context.conditions;

                            tl.clear();
                            gsap.set($this, {
                                clearProps: 'all'
                            })

                            return () => {
                                tl.to($this, {
                                    yPercent: y,
                                    xPercent: x,

                                });

                            }
                        });

                    })


                }

            }

            if ($scope.hasClass('parallax_background_image')) {

                var bgURL = $scope.css('backgroundImage').replace(/url/g, "").split('"')[1];

                $scope.append('<div class="section-background"><div class="single-image"><img src="' + bgURL + '" /></div></div>')

                gsap.set($scope, {
                    backgroundImage: 'none'
                })

                var image = $scope.find('.section-background .single-image');

                image.each(function () {

                    let $this = $(this),
                        img = $this.find('img'),
                        width = $this.outerWidth(),
                        height = $this.outerHeight(),
                        speed = $this.data('parallax-speed') == null ? 60 : $this.data('parallax-speed'),
                        parallaxVal = height * (speed / 100),
                        imgHeight = 'calc(100% + ' + parallaxVal + 'px)';

                    $this.wrapInner('<div class="image-parallax-wrap"></div>');

                    let wrap = $this.find('.image-parallax-wrap');

                    $this.css('height', height);

                    wrap.css('height', imgHeight)


                    gsap.from(wrap, {
                        y: -parallaxVal,
                        ease: 'none',
                        id: 'parallaximg',
                        scrollTrigger: {
                            trigger: $this,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                            onUpdate: () => {

                            }
                        }
                    })

                })

            }

            if ($scope.hasClass('boxed-bg')) {

                var bgURL = $scope.css('backgroundImage').replace(/url/g, "").split('"')[1];

                $scope.append('<div class="section-background"><div class="single-image"><img src="' + bgURL + '" /></div></div>')

                gsap.set($scope, {
                    backgroundImage: 'none'
                })

            }

            if ($scope.hasClass('fixed-bg')) {

                ScrollTrigger.create({
                    trigger: $scope,
                    pin: $scope.find('.section-background'),
                    start: 'top top',
                    end: 'bottom bottom',
                    pinSpacing: false,

                });

            }



            if ($scope.hasClass('anim-bg')) {

                var $this = $scope,
                    cl = $this.css('background-color').split(' '),
                    bgColor = $this.css('background-color'),
                    bg = $this.find('.section-background'),
                    sectionLayout,
                    pinnedBg;

                if (cl.length >= 4) {

                    cl[3] = '1)';

                    var bgColor = cl[0] + cl[1] + cl[2] + cl[3];
                }

                $this.hasClass('light') ? sectionLayout = 'light' : sectionLayout = 'dark';

                function changeBg(section, color, leave) {

                    gsap.to('#page', {
                        backgroundColor: color,
                        duration: .6,
                        onComplete: () => {
                            if (leave) {
                                gsap.set('#page', {
                                    clearProps: 'all'
                                })
                            }
                        }
                    });

                    section.addClass('active')

                    if ((siteHeader.hasClass('fixed')) && (!siteHeader.hasClass('blend'))) {

                        headerLayoutChange(false, color, true, false);
                        leave ? headerLayoutChange(false, false, true, true) : '';
                    }

                    cursorLayoutChange(false, color, false)

                    leave ? cursorLayoutChange(false, false, true) : '';
                    leave ? section.removeClass('active') : '';
                }



                $(window).on('scroll', function (e) {

                    let topPos = $this.offset().top - $(window).scrollTop(),
                        height = $this.outerHeight(),
                        deadLine = topPos + height;


                    if ((topPos < cursorY) && (cursorY < deadLine)) {

                        if (!$this.hasClass('anim-bg')) {

                            if (($this.css('background-color') === 'rgba(0, 0, 0, 0)') && (sectionLayout != null)) {

                                cursorLayoutChange(sectionLayout, false, false)

                            } else if (($this.css('background-color') !== 'rgba(0, 0, 0, 0)')) {

                                cursorLayoutChange(false, bgColor, false)
                            }

                        }

                    } else if (cursorY > deadLine) {

                        $('.section.active').length ? '' : cursorLayoutChange(false, false, true);

                    }
                })


                if (!$this.hasClass('anim-bg')) {

                    $this.on('mouseenter', function () {

                        if (($this.css('background-color') === 'rgba(0, 0, 0, 0)') && (sectionLayout != null)) {

                            cursorLayoutChange(sectionLayout, false, false)

                        } else if (($this.css('background-color') !== 'rgba(0, 0, 0, 0)')) {

                            cursorLayoutChange(false, bgColor, false)
                        }

                    })

                    $this.on('mouseleave', function () {

                        $('.section.active').length ? '' : cursorLayoutChange(false, false, true);

                    })

                }

                // Cursor change

                // Background Animations
                if ($this.hasClass('anim-bg')) {

                    $this.css('background', 'transparent');

                    var pageBg;

                    ScrollTrigger.create({
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        onUpdate: () => {
                            pageBg = $('body').css('backgroundColor')

                        }
                    });

                    ScrollTrigger.create({
                        trigger: $this,
                        start: 'top center',
                        end: 'bottom center',
                        onEnter: () => changeBg($this, bgColor, false),
                        onEnterBack: () => changeBg($this, bgColor, false),
                        onLeave: () => changeBg($this, pageBg, true),
                        onLeaveBack: () => changeBg($this, pageBg, true)

                    });

                } else {

                    if (siteHeader.hasClass('sticky') || siteHeader.hasClass('fixed')) {

                        if (($this.css('background-color') === 'rgba(0, 0, 0, 0)') && (sectionLayout != null)) {

                            ScrollTrigger.create({
                                trigger: $this,
                                start: 'top top+=50',
                                end: 'bottom top+=50',

                                onEnter: () => headerLayoutChange(sectionLayout, false, false, false),
                                onEnterBack: () => headerLayoutChange(sectionLayout, false, false, false),
                                onLeave: () => headerLayoutChange(false, false, false, true),
                                onLeave: () => headerLayoutChange(false, false, false, true),
                                onLeaveBack: () => headerLayoutChange(false, false, false, true)
                            });


                        } else if (($this.css('background-color') !== 'rgba(0, 0, 0, 0)') && ($this.offset().top > 0)) {


                            // If background not alpha
                            ScrollTrigger.create({
                                trigger: $this,
                                start: 'top top+=75',

                                end: 'bottom top+=75',
                                onEnter: () => headerLayoutChange(false, bgColor, false, false),
                                onEnterBack: () => headerLayoutChange(false, bgColor, false, false),
                                onLeave: () => headerLayoutChange(false, false, false, true),
                                onLeaveBack: () => headerLayoutChange(false, false, false, true)
                            });

                        }
                    }
                }
                // Background Animations

                if (bg.hasClass('fixed-bg')) {

                    ScrollTrigger.create({
                        trigger: $this,
                        pin: bg,
                        start: 'top top',
                        end: 'bottom bottom',
                        pinSpacing: false,

                    });



                }


            }


            if ($scope.hasClass('video_background')) {

                let provider = $scope.data('video-provider'),
                    url = $scope.data('video-url'),
                    vimeoId = $scope.data('vimeo-ids'),
                    youtubeId = $scope.data('youtube-id'),
                    $bg = '<div class="section-background"></div>';


                if (provider === 'self') {

                    $scope.append('<div class="section-background"><div class="nayla-video n-self no-interactions" data-controls="false"><video autoplay playsinline muted loop class="n-video"><source src="' + url + '"></video></div></div>')


                } else if (provider === 'vimeo') {

                    $scope.append('<div class="section-background"><div class="nayla-video n-vimeo no-interactions" data-controls="false" data-autoplay=true data-muted=true data-loop=true> <div class="n-video" data-plyr-provider="vimeo" data-plyr-embed-id="' + vimeoId + '"></div></div></div>')

                } else if (provider === 'youtube') {

                    $scope.append('<div class="section-background"><div class="nayla-video n-youtube no-interactions" data-controls="false" data-autoplay=true data-muted=true data-loop=true> <div class="n-video" data-plyr-provider="vimeo" data-plyr-embed-id="' + youtubeId + '"></div></div></div>')

                }

                naylaVideo($scope.find('.nayla-video'))

                $('.section-background').next('iframe').remove();

            }


            if ($scope.hasClass('displacement_masked_background')) {

                let url = $scope.data('displacement-image');


                $scope.append('<div class="section-background"><div class="circle-mask-background"><img src="' + $scope.data('displacement-image') + '"></div></div>');



                $scope.find('.circle-mask-background').each(function () {

                    let $this = $(this),
                        img = $this.children('img'),
                        url = img.attr('src');

                    img.remove();

                    $this.append('<svg class="mask-bg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><defs><filter id="displacementFilter"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" /></filter><mask id="circleMask"><circle cx="50%" cy="50%" r="00" fill="white" class="mask" style="filter: url(#displacementFilter);" /></mask></defs><image xlink:href="' + url + '" x=0 y=0 width="100%" mask="url(#circleMask)" /></svg>');

                    let circle = $this.find('#circleMask > circle');

                    $(window).on('mousemove', function (e) {

                        let top = e.clientY / ($this.outerHeight() / 100),
                            left = e.clientX / ($this.outerWidth() / 100);

                        gsap.to(circle, {
                            cx: left,
                            cy: top,

                        })
                    })

                    gsap.to(circle, {
                        r: 350,
                        scrollTrigger: {
                            trigger: $this,

                        }
                    })

                })




            }

        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaanimatedheading.default', function ($scope, $) {


            let wrap = $scope.find('.text-wrapper'),
                dynamic = wrap.find('.dynamic'),
                firstText = dynamic.text(),
                duration = wrap.data('duration'),
                words = wrap.data('dynamic-words').split(' '),
                length = words.length + 2,
                parent = dynamic.parent(),
                tl = gsap.timeline({
                    repeat: -1

                });

            words.push(firstText)
            words.unshift(firstText)



            new SplitText(parent, {
                type: 'lines, chars, words',
                wordsClass: 'anim_word',
                linesClass: 'anim_line',
                charsClass: 'anim_char',

            })

            dynamic.wrapInner('<span class="hidden"></span>');
            dynamic.append('<span class="sec-texts"></span>')


            let secText = wrap.find('.sec-texts')


            gsap.set(secText, {
                yPercent: -1 * (100 / length)
            })


            words.forEach(function (element, i) {

                i++
                dynamic.find('.sec-texts').append('<span class="tt">' + element + '</span>');
                let delay = (i - 1) * duration;


                tl.to(secText, {
                    yPercent: -i * (100 / length),
                    duration: 1,
                    ease: 'power3.out',
                    onStart: () => {

                        let state = Flip.getState('.anim_word');

                        $('.hidden').text(element);

                        Flip.from(state, {
                            duration: .9,
                            ease: 'power1.out',
                            absolute: false,
                            simple: true,
                            prune: true,
                        });

                    }

                }, delay)


            })

        })


        elementorFrontend.hooks.addAction('frontend/element_ready/naylascrollbutton.default', function ($scope, $) {

            let button = $scope.find('.nayla-scroll-button')

            button.each(function () {

                let $this = $(this),
                    target = $this.data('scroll-to');

                $this.attr('href', '');

                $this.on('click', () => {

                    disableScroll();

                    setTimeout(function () {

                        enableScroll();

                        gsap.to(window, {
                            duration: 1,
                            scrollTo: isNaN(target) ? $(target).offset().top - 25 : target,
                            ease: 'expo.inOut',
                            onComplete: () => {

                            }
                        });

                    }, 100)


                })


            })
        })


        elementorFrontend.hooks.addAction('frontend/element_ready/naylavideo.default', function ($scope, $) {


            var video = $scope.find('.nayla-video'),
                mouseCursor = $('#mouseCursor');

            if (video.length) {

                video.each(function (i) {

                    if (!$(this).find('.plyr').length) {

                        i++
                        let $this = $(this),
                            video = $this.find('.n-video'),
                            playText = $this.data('play-text'),
                            pauseText = $this.data('pause-text'),
                            muteText = $this.data('mute-text'),
                            unmuteText = $this.data('unmute-text'),
                            nautoplay = $this.data('autoplay'),
                            nmuted = $this.data('muted'),
                            nloop = $this.data('loop'),
                            play = $this.data('play'),
                            controls;


                        // [play-large play progress mute fullscreen]

                        $this.data('controls') != false ? controls = $this.data('controls').split(" ") : '';


                        playText == null ? playText = 'Play' : '';
                        pauseText == null ? pauseText = 'Pause' : '';
                        muteText == null ? muteText = 'Mute' : '';
                        unmuteText == null ? unmuteText = 'Unmute' : '';


                        const naylaVid = new Plyr(video, {
                            controls: controls,
                            clickToPlay: true,
                            autopause: false,
                            debug: false,
                            fullscreen: false,
                            storage: {
                                enabled: false
                            },
                            youtube: {
                                modestbranding: 1,
                                controls: 0,
                                rel: 0,
                                cc_load_policy: 0,
                                iv_load_policy: 3,
                                noCookie: true,
                                frameborder: 0,
                            },
                            vimeo: {
                                autopause: false,
                                controls: false,
                            }

                        });

                        if (!$this.hasClass('n-self')) {
                            naylaVid.autoplay = nautoplay
                            naylaVid.muted = nmuted
                            naylaVid.loop = nloop
                        }



                        naylaVid.on('ready', (event) => {



                            //
                            //                            if ($this.find('video').attr('autoplay')) {
                            //
                            //                                naylaVid.play()
                            //                            }


                            $this.find('.plyr').addClass('nayla_video_' + i);
                            $this.addClass('nayla-fake-running');

                            let vid = $('.nayla_video_' + i);



                            vid.find('.plyr__video-wrapper').addClass('nayla-video-wrap');
                            vid.find('.plyr__controls').addClass('nayla-controls-wrap');

                            vid.find('.plyr__control[data-plyr="play"]').append('<span class="hover-default nayla-player-control nayla-play">' + playText + '</span><span class="hover-default nayla-player-control nayla-pause">' + pauseText + '</span>')

                            vid.find('.plyr__controls__item.plyr__volume button[data-plyr="mute"]').append('<span class="hover-default nayla-player-control nayla-mute">' + muteText + '</span><span class="hover-default nayla-player-control nayla-unmute">' + unmuteText + '</span>');

                            if ($this.hasClass('play-inner')) {

                                $this.find('.nayla-play-button').on('click', function () {


                                    if ($this.hasClass('lightbox-play')) {

                                        lightboxPlay();

                                    } else {

                                        naylaVid.muted = false;
                                        naylaVid.restart();
                                        naylaVid.play();
                                        $this.addClass('nayla-running');
                                        $this.removeClass('nayla-fake-running');

                                    }

                                })
                            }

                            if ($this.hasClass('play-cursor')) {

                                $this.on('click', function () {

                                    if ($this.hasClass('lightbox-play')) {

                                        $this.removeClass('cursor-icon');
                                        $this.removeClass('cursor-text');

                                        mouseCursor.removeClass('hover-size')
                                        mouseCursor.removeClass('hover-text')
                                        mouseCursor.removeClass('hover-icon')
                                        lightboxPlay();

                                    } else {

                                        if ($this.hasClass('nayla-fake-running')) {
                                            $this.removeClass('cursor-icon');
                                            $this.removeClass('cursor-text');

                                            mouseCursor.removeClass('hover-size')
                                            mouseCursor.removeClass('hover-text')
                                            mouseCursor.removeClass('hover-icon')

                                            naylaVid.muted = false;
                                            naylaVid.restart();
                                            naylaVid.play();
                                            $this.addClass('nayla-running');
                                            $this.removeClass('nayla-fake-running');
                                        }
                                    }


                                })

                                $this.on('mouseenter', function () {
                                    if ($this.hasClass('nayla-running')) {

                                        mouseCursor.removeClass('hover-size')
                                        mouseCursor.removeClass('hover-text')
                                        mouseCursor.removeClass('hover-icon')
                                    }
                                })


                            }

                            function lightboxPlay() {


                                naylaVid.fullscreen = false

                                vid.append('<span class="lightbox-close">Close</span>')
                                vid.addClass('nlv').prependTo('#page');

                                $('.nlv').addClass('lightbox-open');

                                gsap.to('.nlv', {
                                    opacity: 1,
                                    duration: .3
                                })

                                vid.find('.plyr__video-wrapper').addClass('nayla-video-wrap');
                                vid.find('.plyr__controls').addClass('nayla-controls-wrap');

                                vid.addClass('lightbox-open');
                                naylaVid.muted = false;
                                naylaVid.restart();
                                naylaVid.play();

                                $this.addClass('nayla-running');
                                $this.removeClass('nayla-fake-running');

                                $('.lightbox-close').on('click', function () {


                                    gsap.to('.nlv', {
                                        opacity: 0,
                                        duration: .3,
                                        onComplete: () => {

                                            gsap.set(vid, {

                                                opacity: 1
                                            })

                                            vid.off('click');

                                            vid.removeClass('nlv lightbox-open');

                                            vid.find('.plyr__video-wrapper').removeClass('nayla-video-wrap');
                                            vid.find('.plyr__controls').removeClass('nayla-controls-wrap');

                                            naylaVid.muted = true;

                                            vid.prependTo($this);

                                            $this.removeClass('nayla-running');
                                            $this.addClass('nayla-fake-running');

                                        }
                                    })



                                })


                            }

                            if ($this.hasClass('play-on-hover')) {

                                naylaVid.pause();

                                $this.on('mouseenter', () => {

                                    naylaVid.play();
                                })

                                $this.on('mouseleave', () => {

                                    naylaVid.pause();
                                })

                            }


                        });



                    }


                })


            }





        })


        elementorFrontend.hooks.addAction('frontend/element_ready/naylaprojecttitle.default', function ($scope, $) {


            $scope.find('.nayla-marquee').each(function (i) {

                naylaMarquee($(this))
            })


        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaprojectscarousel.default', function ($scope, $) {

            naylaDynamicCarousel();

            if ($scope.find('.has-anim').length) {

                new naylaGeneralAnimations($scope.find('.has-anim'));

            }

            if ($scope.find('.nayla-video').length) {

                naylaVideo($scope.find('.nayla-video'))
            }

            function naylaDynamicCarousel() {

                const carousel = $scope.find('.nayla-dynamic-carousel');

                carousel.each(function () {

                    let carousel = $(this),
                        wrapper = carousel.children('.carousel--wrapper'),
                        items = wrapper.children('.carousel--item'),
                        end,
                        length = items.length,
                        parentLeft,
                        next = carousel.find('.carousel--next'),
                        prev = carousel.find('.carousel--prev'),
                        animation = carousel.data('animation'),
                        customPin = carousel.data('pin'),
                        speed = carousel.data('scroll-speed'),
                        carouselDrag,
                        wrapScroll,
                        val;


                    val = 0;
                    end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);
                    parentLeft = carousel.offset().left,

                        carousel.find('.carousel--total').html(length);

                    items.each(function (i) {

                        let $this = $(this);

                        $this.attr('data-index', i);
                        $this.addClass('carousel--item--' + i);

                        if (carousel.hasClass('parallax-on')) {

                            $this.find('img').wrap('<div class="parallax-wrap"></div>');
                            $this.find('.parallax-wrap').css('height', $this.find('img').outerHeight());
                            $this.find('.parallax-wrap').css('width', $this.find('img').outerWidth());

                            $this.find('img').wrap('<div class="parallax-inner"></div>')

                            $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            $(window).on('resize', () => {

                                $this.find('.parallax-wrap').css('width', $this.outerWidth());
                                $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            })
                        }


                    })

                    function getCurrentItem() {

                        items.each(function () {

                            let $this = $(this),
                                pad = $this.css('paddingRight'),
                                entrance = $this.offset().left,
                                deadLine = $this.offset().left + $this.outerWidth(),
                                center = $(window).outerWidth() / 2;

                            entrance < center && center < deadLine ? $this.addClass('active') : $this.removeClass('active');

                            let activeItem = wrapper.find('.carousel--item.active');

                            items.removeClass('prev next');
                            prev.removeClass('disabled');
                            next.removeClass('disabled');

                            !activeItem.next().length ? next.addClass('disabled') : activeItem.next().addClass('next');
                            !activeItem.prev().length ? prev.addClass('disabled') : activeItem.prev().addClass('prev');


                            activeItem.data('index') == null ? '' : carousel.find('.carousel--current').html(activeItem.data('index') + 1);


                            if (carousel.hasClass('parallax-on')) {

                                let piv = ScrollTrigger.positionInViewport(this, 'right', true) * (mobileQuery.matches ? 50 : 100);

                                if ($this.find('.parallax-inner').length) {
                                    gsap.to($this.find('img'), {
                                        x: Math.floor(-piv)
                                    })
                                }

                            }

                        })


                    }
                    getCurrentItem();

                    function navDrag() {

                        wrapper.addClass('cursor-text');
                        wrapper.attr('data-cursor-text', carousel.attr('data-drag-text'));

                        carouselDrag = Draggable.create(wrapper, {
                            type: 'x',
                            bounds: {
                                minX: 0,
                                maxX: -end
                            },
                            lockAxis: true,
                            dragResistance: 0.5,
                            inertia: true,
                            onThrowUpdate: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            },
                            zIndexBoost: false,
                            onDrag: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            }
                        });

                    }

                    function navScroll() {

                        let endtrigger = speed == null ? 'bottom+=3000 bottom' : 'bottom+=' + speed + ' bottom',
                            start = customPin == null ? 'center center' : 'top top',
                            pinTarget = customPin == null ? carousel : customPin,
                            endNumber = speed == null ? 1000 : 1000 + speed;




                        if (carousel.hasClass('items-bottom')) {

                            start = 'bottom bottom'

                        }

                        //                carousel.find('.carousel-controls') ? start = 'center center+=50' : '';

                        wrapScroll = gsap.timeline({
                            scrollTrigger: {
                                trigger: pinTarget,
                                start: start,
                                end: carousel.offset().top < $(window).outerHeight() ? endNumber : endtrigger,
                                pin: true,
                                id: 'caroScroll',
                                scrub: 1,
                                pinReparent: $('body').hasClass('smooth-scroll') ? true : false,
                                onLeaveBack: () => getCurrentItem(),
                                onEnterBack: () => getCurrentItem(),
                                onScrubComplete: () => getCurrentItem(),
                                onEnter: () => getCurrentItem(),
                                onLeave: () => getCurrentItem(),
                                onUpdate: () => getCurrentItem()
                            }
                        });



                        wrapScroll.to(wrapper, {
                            x: -end,

                        })

                    }

                    var snaps;

                    function getSnaps() {

                        snaps = items.map(function () {
                            if (mobileQuery.matches) {
                                return -($(this).position().left + ($(this).outerWidth()) + parentLeft);
                            } else {
                                return -($(this).position().left + ($(this).outerWidth() / 2) + parentLeft);
                            }
                        }).get();



                    }

                    function navPrevNext() {

                        next.on('click', function () {

                            getSnaps();
                            let nextProj = wrapper.find('.carousel--item.next'),
                                marg = parseInt(nextProj.css('marginRight')),
                                index = nextProj.data('index') - 1

                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? snaps[index] : snaps[index] + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })

                        prev.on('click', function () {

                            getSnaps();

                            let prevProj = wrapper.find('.carousel--item.prev'),
                                marg = parseInt(prevProj.css('marginRight')),
                                index = prevProj.data('index') - 1,
                                val = snaps[index];

                            val == null ? val = 0 : '';
                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? val : val + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })
                    }


                    carousel.hasClass('navScroll') ? navScroll() : navDrag();

                    carousel.find('.carousel--navigation').length ? navPrevNext() : '';




                    matchMedia.add({
                        isMobile: "(max-width: 450px)"

                    }, (context) => {

                        let {
                            isMobile
                        } = context.conditions;

                        gsap.set(wrapper, {
                            x: 0
                        })

                        gsap.set(wrapper.find('img'), {
                            clearProps: 'transform'
                        })

                        parentLeft = carousel.offset().left;

                        gsap.set(items.find('img'), {
                            clearProps: 'transform'
                        })

                        end = wrapper.outerWidth() - items.last().outerWidth();

                        if (carouselDrag) {

                            carouselDrag[0].applyBounds({
                                minX: 0,
                                maxX: -end
                            })

                            carouselDrag[0].update()
                        }


                        if (wrapScroll) {
                            wrapScroll.clear()

                            wrapScroll.to(wrapper, {
                                x: -end,

                            })

                        }

                        return () => {


                            gsap.set(wrapper.find('img'), {
                                clearProps: 'transform'
                            })

                            gsap.set(wrapper, {
                                x: 0
                            })
                            parentLeft = carousel.offset().left;

                            gsap.set(items.find('img'), {
                                clearProps: 'transform'
                            })

                            end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);

                            if (carouselDrag) {
                                carouselDrag[0].applyBounds({
                                    minX: 0,
                                    maxX: -end
                                })
                                carouselDrag[0].update()
                            }

                            if (wrapScroll) {
                                wrapScroll.clear()

                                wrapScroll.to(wrapper, {
                                    x: -end,

                                })

                            }




                        }
                    });


                })

            }




        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylainteractivecarousel.default', function ($scope, $) {

            if ($scope.find('.has-anim').length) {

                $scope.find('.has-anim').each(function () {
                    new naylaGeneralAnimations($(this));

                })

            }

            if ($scope.find('.nayla-video').length) {

                $scope.find('.nayla-video').each(function () {

                    naylaVideo($(this))
                })


            }


            function naylaInteractiveCarousel() {

                let carousel = $('.nayla-interactive-carousel')


                carousel.each(function () {

                    var grid = $(this),
                        projects = carousel.find('.inc--item'),
                        wrapper = carousel.find('.inc--wrapper'),
                        wrapperWidth = wrapper.outerWidth(),
                        positions = [],
                        x = 0,
                        bigWidth = ($(window).outerWidth() / 100) * parseFloat(grid.css('--bigWidth')),
                        marg = parseFloat(grid.css('--bigGap')),
                        val = (bigWidth / 2) + marg,
                        progress;

                    progress = 0;

                    let not = grid.find('.inc--notification');

                    not.wrapInner('<span></span>')
                    not.find('span').clone().addClass('clone').insertAfter(not.find('span'));


                    function findProgress(x) {

                        let prog = (wrapperWidth),
                            cum = -x / prog

                        progress = cum * 100;
                        gsap.to(not.find('.clone'), {
                            width: progress + '%'
                        })
                    }

                    findProgress(x);

                    projects.each(function (i) {



                        let $this = $(this),
                            left = $this.offset().left - $(window).outerWidth() / 2 + val,
                            singlePos = [];

                        $this.attr('data-left', left)

                        left > $(window).outerWidth() / 2 ? $this.addClass('project-right') : $this.addClass('project-left');

                        $this.attr('data-index', i)

                        singlePos.push(top, left)
                        positions.push(singlePos);

                    })

                    var carouselDrag = Draggable.create(wrapper, {
                        type: 'x',
                        bounds: {
                            minX: 0,
                            maxX: -wrapperWidth
                        },
                        lockAxis: true,
                        dragResistance: 0.5,
                        zIndexBoost: false,
                        onDrag: () => {
                            x = carouselDrag[0].x;

                            findProgress(x);
                        },

                    });

                    //NavbyWheel
                    var thumbsWheeler = Hamster(document.querySelector('.nayla-interactive-carousel')),
                        isSliding;

                    isSliding = false;

                    thumbsWheeler.wheel(function (event, delta, deltaX, deltaY) {

                        findProgress(x);

                        if (!grid.hasClass('inc-zoomed')) {

                            carouselDrag[0].update();

                            x += event.deltaY * 1.1;

                            x > 0 ? x = 0 : '';
                            x < -wrapperWidth ? x = -wrapperWidth : '';

                            if (x < 0 && x >= -wrapperWidth)

                                gsap.to(wrapper, {
                                    x: x,
                                })

                        } else {

                            let activeProj = $('.inc--item.active'),
                                nextProj = activeProj.next('.inc--item'),
                                prevProj = activeProj.prev('.inc--item');

                            if (deltaY > 0 && prevProj.length) {

                                isSliding != true ? zoomIn(prevProj) : '';

                                isSliding = true

                            }

                            if (deltaY < 0 && nextProj.length) {

                                isSliding != true ? zoomIn(nextProj) : '';

                                isSliding = true;
                            }

                        }


                    });

                    var lastX;

                    function zoomIn(active) {

                        lastX = x;
                        carouselDrag[0].disable();

                        let state = Flip.getState(projects),
                            tl = gsap.timeline({
                                onStart: () => {
                                    isSliding = true;
                                },
                                onUpdate: () => {
                                    carouselDrag[0].endDrag();
                                    carouselDrag[0].update();
                                },
                                onComplete: () => {

                                    isSliding = false

                                }
                            }),
                            left = positions[active.data('index')][1] - 25;

                        grid.find('.inc-project-image').removeClass('trans-media');

                        projects.removeClass('active');
                        active.addClass('active');
                        active.find('.inc-project-image').addClass('trans-media');


                        grid.find('.inc-project-meta').removeClass('active');
                        grid.find('.inc--meta_' + active.data('item')).addClass('active')

                        gsap.set(wrapper, {
                            x: -1 * left,

                        })



                        grid.addClass('inc-zoomed')
                        wrapper.addClass('inc-carousel-scatter')

                        var flippo = Flip.from(state, {
                            duration: 1,
                            ease: 'expo.out',
                            absolute: true,
                            simple: true,
                            prune: true,
                        });


                        tl.add(flippo);

                    }

                    function zoomOut() {

                        carouselDrag[0].enable();

                        let state = Flip.getState(projects),
                            tl = gsap.timeline();

                        projects.removeClass('active');

                        gsap.set(wrapper, {
                            x: lastX,

                        })

                        grid.removeClass('inc-zoomed')
                        grid.find('.inc-project-meta').removeClass('active');
                        wrapper.removeClass('inc-carousel-scatter')

                        var flippo = Flip.from(state, {
                            duration: 1,
                            ease: 'expo.inOut',
                            absolute: true,
                            simple: true,
                            prune: true,
                        });


                        tl.add(flippo);

                    }

                    projects.on('click', function () {

                        let $this = $(this);

                        zoomIn($this);

                    })

                    $('.inc--close').on('click', () => {

                        zoomOut()


                    })

                    $(document).keyup(function (e) {

                        let activeProj = $('.inc--item.active'),
                            nextProj = activeProj.next('.inc--item'),
                            prevProj = activeProj.prev('.inc--item');


                        if (e.key === "Escape" && !grid.hasClass('inc--zoomed')) {
                            zoomOut()
                        }

                        if (e.keyCode == 37) { // left

                            isSliding != true ? zoomIn(prevProj) : '';

                            isSliding = true
                        }

                        if (e.keyCode == 39) { // right

                            isSliding != true ? zoomIn(nextProj) : '';

                            isSliding = true;
                        }

                    });

                })


            }
            naylaInteractiveCarousel();


        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylateamcarousel.default', function ($scope, $) {

            naylaDynamicCarousel();

            if ($scope.find('.has-anim').length) {


                new naylaGeneralAnimations($scope.find('.has-anim'));


            }

            function naylaDynamicCarousel() {
                const carousel = $scope.find('.nayla-dynamic-carousel');

                carousel.each(function () {

                    let carousel = $(this),
                        wrapper = carousel.children('.carousel--wrapper'),
                        items = wrapper.children('.carousel--item'),
                        end,
                        length = items.length,
                        parentLeft,
                        next = carousel.find('.carousel--next'),
                        prev = carousel.find('.carousel--prev'),
                        animation = carousel.data('animation'),
                        customPin = carousel.data('pin'),
                        speed = carousel.data('scroll-speed'),
                        carouselDrag,
                        wrapScroll,
                        val;


                    val = 0;
                    end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);
                    parentLeft = carousel.offset().left,

                        carousel.find('.carousel--total').html(length);

                    items.each(function (i) {

                        let $this = $(this);

                        $this.attr('data-index', i);
                        $this.addClass('carousel--item--' + i);

                        if (carousel.hasClass('parallax-on')) {

                            $this.find('img').wrap('<div class="parallax-wrap"></div>');
                            $this.find('.parallax-wrap').css('height', $this.find('img').outerHeight());
                            $this.find('.parallax-wrap').css('width', $this.find('img').outerWidth());

                            $this.find('img').wrap('<div class="parallax-inner"></div>')

                            $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            $(window).on('resize', () => {

                                $this.find('.parallax-wrap').css('width', $this.outerWidth());
                                $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            })
                        }


                    })

                    function getCurrentItem() {

                        items.each(function () {

                            let $this = $(this),
                                pad = $this.css('paddingRight'),
                                entrance = $this.offset().left,
                                deadLine = $this.offset().left + $this.outerWidth(),
                                center = $(window).outerWidth() / 2;

                            entrance < center && center < deadLine ? $this.addClass('active') : $this.removeClass('active');

                            let activeItem = wrapper.find('.carousel--item.active');

                            items.removeClass('prev next');
                            prev.removeClass('disabled');
                            next.removeClass('disabled');

                            !activeItem.next().length ? next.addClass('disabled') : activeItem.next().addClass('next');
                            !activeItem.prev().length ? prev.addClass('disabled') : activeItem.prev().addClass('prev');


                            activeItem.data('index') == null ? '' : carousel.find('.carousel--current').html(activeItem.data('index') + 1);


                            if (carousel.hasClass('parallax-on')) {

                                let piv = ScrollTrigger.positionInViewport(this, 'right', true) * (mobileQuery.matches ? 50 : 100);

                                if ($this.find('.parallax-inner').length) {
                                    gsap.to($this.find('img'), {
                                        x: Math.floor(-piv)
                                    })
                                }

                            }

                        })


                    }
                    getCurrentItem();

                    function navDrag() {

                        wrapper.addClass('cursor-text');
                        wrapper.attr('data-cursor-text', carousel.attr('data-drag-text'));

                        carouselDrag = Draggable.create(wrapper, {
                            type: 'x',
                            bounds: {
                                minX: 0,
                                maxX: -end
                            },
                            lockAxis: true,
                            dragResistance: 0.5,
                            inertia: true,
                            onThrowUpdate: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            },
                            zIndexBoost: false,
                            onDrag: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            }
                        });

                    }

                    function navScroll() {

                        let endtrigger = speed == null ? 'bottom+=3000 bottom' : 'bottom+=' + speed + ' bottom',
                            start = customPin == null ? 'center center' : 'top top',
                            pinTarget = customPin == null ? carousel : customPin,
                            endNumber = speed == null ? 1000 : 1000 + speed;




                        if (carousel.hasClass('items-bottom')) {

                            start = 'bottom bottom'

                        }

                        //                carousel.find('.carousel-controls') ? start = 'center center+=50' : '';

                        wrapScroll = gsap.timeline({
                            scrollTrigger: {
                                trigger: pinTarget,
                                start: start,
                                end: carousel.offset().top < $(window).outerHeight() ? endNumber : endtrigger,
                                pin: true,
                                id: 'caroScroll',
                                scrub: 1,
                                pinReparent: $('body').hasClass('smooth-scroll') ? true : false,
                                onLeaveBack: () => getCurrentItem(),
                                onEnterBack: () => getCurrentItem(),
                                onScrubComplete: () => getCurrentItem(),
                                onEnter: () => getCurrentItem(),
                                onLeave: () => getCurrentItem(),
                                onUpdate: () => getCurrentItem()
                            }
                        });



                        wrapScroll.to(wrapper, {
                            x: -end,

                        })

                    }

                    var snaps;

                    function getSnaps() {

                        snaps = items.map(function () {
                            if (mobileQuery.matches) {
                                return -($(this).position().left + ($(this).outerWidth()) + parentLeft);
                            } else {
                                return -($(this).position().left + ($(this).outerWidth() / 2) + parentLeft);
                            }
                        }).get();



                    }

                    function navPrevNext() {

                        next.on('click', function () {

                            getSnaps();
                            let nextProj = wrapper.find('.carousel--item.next'),
                                marg = parseInt(nextProj.css('marginRight')),
                                index = nextProj.data('index') - 1

                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? snaps[index] : snaps[index] + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })

                        prev.on('click', function () {

                            getSnaps();

                            let prevProj = wrapper.find('.carousel--item.prev'),
                                marg = parseInt(prevProj.css('marginRight')),
                                index = prevProj.data('index') - 1,
                                val = snaps[index];

                            val == null ? val = 0 : '';
                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? val : val + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })
                    }


                    carousel.hasClass('navScroll') ? navScroll() : navDrag();

                    carousel.find('.carousel--navigation').length ? navPrevNext() : '';




                    matchMedia.add({
                        isMobile: "(max-width: 450px)"

                    }, (context) => {

                        let {
                            isMobile
                        } = context.conditions;

                        gsap.set(wrapper, {
                            x: 0
                        })

                        gsap.set(wrapper.find('img'), {
                            clearProps: 'transform'
                        })

                        parentLeft = carousel.offset().left;

                        gsap.set(items.find('img'), {
                            clearProps: 'transform'
                        })

                        end = wrapper.outerWidth() - items.last().outerWidth();

                        if (carouselDrag) {

                            carouselDrag[0].applyBounds({
                                minX: 0,
                                maxX: -end
                            })

                            carouselDrag[0].update()
                        }


                        if (wrapScroll) {
                            wrapScroll.clear()

                            wrapScroll.to(wrapper, {
                                x: -end,

                            })

                        }

                        return () => {


                            gsap.set(wrapper.find('img'), {
                                clearProps: 'transform'
                            })

                            gsap.set(wrapper, {
                                x: 0
                            })
                            parentLeft = carousel.offset().left;

                            gsap.set(items.find('img'), {
                                clearProps: 'transform'
                            })

                            end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);

                            if (carouselDrag) {
                                carouselDrag[0].applyBounds({
                                    minX: 0,
                                    maxX: -end
                                })
                                carouselDrag[0].update()
                            }

                            if (wrapScroll) {
                                wrapScroll.clear()

                                wrapScroll.to(wrapper, {
                                    x: -end,

                                })

                            }




                        }
                    });


                })

            }

            naylaTeamMember();

            function naylaTeamMember() {

                const member = $scope.find('.nayla-team-member');

                member.each(function () {

                    let $this = $(this),
                        cv = $this.find('.team-member-cv'),
                        card = $this.find('.team-member-card'),
                        image = $this.find('.team-member-image'),

                        parentHeight = $this.outerHeight(),
                        cardHeight = card.outerHeight(),
                        cvHeight = cv.outerHeight();

                    image.append('<div class="cv-toggle"><span class="material-icons">add</span></div>')


                    let cvToggle = $this.find('.cv-toggle');

                    cvToggle.on('click', function () {

                        var clicks = $(this).data('clicks'),
                            tl = gsap.timeline();

                        if (clicks) {

                            //Close

                            $this.removeClass('active');

                            tl.to(cv, {
                                opacity: 0,
                                duration: .5,
                                display: 'none',
                                onComplete: () => {
                                    gsap.set(card, {
                                        paddingBottom: cvHeight + 50,
                                    })
                                }

                            })

                            if ($this.hasClass('overlay')) {

                                tl.to(card, {
                                    paddingBottom: 0,

                                }, 0.5)

                            } else {

                                tl.to(image, {
                                    height: 'auto',
                                    duration: .75,
                                    ease: 'expo.out'
                                }, 0.5)

                                tl.to(card, {
                                    paddingBottom: 0,
                                    duration: .75,
                                    ease: 'expo.out'
                                }, 0.5)


                            }




                        } else {

                            // Open

                            $this.addClass('active');

                            if ($this.hasClass('overlay')) {

                                tl.to(card, {
                                    paddingBottom: cvHeight + 50,
                                })

                            } else {

                                tl.to(image, {
                                    height: parentHeight - (cardHeight + cvHeight + 50 + 15),
                                    duration: 1,
                                    ease: 'expo.out'
                                })

                                tl.to(card, {
                                    paddingBottom: cvHeight + 50,
                                    duration: 1,
                                    ease: 'expo.out'
                                }, 0)

                            }

                            tl.to(cv, {
                                opacity: 1,
                                duration: .5,
                                display: 'block',
                                onStart: () => {
                                    gsap.set(card, {
                                        paddingBottom: 0,
                                    })
                                }

                            })

                        }
                        $(this).data("clicks", !clicks);

                    })




                })


            }





        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaimagescarousel.default', function ($scope, $) {

            naylaDynamicCarousel();

            function naylaDynamicCarousel() {
                const carousel = $scope.find('.nayla-dynamic-carousel');

                carousel.each(function () {

                    let carousel = $(this),
                        wrapper = carousel.children('.carousel--wrapper'),
                        items = wrapper.children('.carousel--item'),
                        end,
                        length = items.length,
                        parentLeft,
                        next = carousel.find('.carousel--next'),
                        prev = carousel.find('.carousel--prev'),
                        animation = carousel.data('animation'),
                        customPin = carousel.data('pin'),
                        speed = carousel.data('scroll-speed'),
                        carouselDrag,
                        wrapScroll,
                        val;



                    val = 0;
                    end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);
                    parentLeft = carousel.offset().left,

                        carousel.find('.carousel--total').html(length);

                    items.each(function (i) {

                        let $this = $(this);

                        $this.attr('data-index', i);
                        $this.addClass('carousel--item--' + i);

                        if (carousel.hasClass('parallax-on')) {

                            $this.find('img').wrap('<div class="parallax-wrap"></div>');
                            $this.find('.parallax-wrap').css('height', $this.find('img').outerHeight());
                            $this.find('.parallax-wrap').css('width', $this.find('img').outerWidth());

                            $this.find('img').wrap('<div class="parallax-inner"></div>')

                            $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            $(window).on('resize', () => {

                                $this.find('.parallax-wrap').css('width', $this.outerWidth());
                                $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            })
                        }


                    })

                    function getCurrentItem() {

                        items.each(function () {

                            let $this = $(this),
                                pad = $this.css('paddingRight'),
                                entrance = $this.offset().left,
                                deadLine = $this.offset().left + $this.outerWidth(),
                                center = $(window).outerWidth() / 2;

                            entrance < center && center < deadLine ? $this.addClass('active') : $this.removeClass('active');

                            let activeItem = wrapper.find('.carousel--item.active');

                            items.removeClass('prev next');
                            prev.removeClass('disabled');
                            next.removeClass('disabled');

                            !activeItem.next().length ? next.addClass('disabled') : activeItem.next().addClass('next');
                            !activeItem.prev().length ? prev.addClass('disabled') : activeItem.prev().addClass('prev');


                            activeItem.data('index') == null ? '' : carousel.find('.carousel--current').html(activeItem.data('index') + 1);


                            if (carousel.hasClass('parallax-on')) {

                                let piv = ScrollTrigger.positionInViewport(this, 'right', true) * (mobileQuery.matches ? 50 : 100);

                                if ($this.find('.parallax-inner').length) {
                                    gsap.to($this.find('img'), {
                                        x: Math.floor(-piv)
                                    })
                                }

                            }

                        })


                    }
                    getCurrentItem();

                    function navDrag() {

                        wrapper.addClass('cursor-text');
                        wrapper.attr('data-cursor-text', carousel.attr('data-drag-text'));

                        carouselDrag = Draggable.create(wrapper, {
                            type: 'x',
                            bounds: {
                                minX: 0,
                                maxX: -end
                            },
                            lockAxis: true,
                            dragResistance: 0.5,
                            inertia: true,
                            onThrowUpdate: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            },
                            zIndexBoost: false,
                            onDrag: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            }
                        });

                    }

                    function navScroll() {

                        let endtrigger = speed == null ? 'bottom+=3000 bottom' : 'bottom+=' + speed + ' bottom',
                            start = customPin == null ? 'center center' : 'top top',
                            pinTarget = customPin == null ? carousel : customPin,
                            endNumber = speed == null ? 1000 : 1000 + speed;




                        if (carousel.hasClass('items-bottom')) {

                            start = 'bottom bottom'

                        }

                        //                carousel.find('.carousel-controls') ? start = 'center center+=50' : '';

                        wrapScroll = gsap.timeline({
                            scrollTrigger: {
                                trigger: pinTarget,
                                start: start,
                                end: carousel.offset().top < $(window).outerHeight() ? endNumber : endtrigger,
                                pin: true,
                                id: 'caroScroll',
                                scrub: 1,
                                pinReparent: $('body').hasClass('smooth-scroll') ? true : false,
                                onLeaveBack: () => getCurrentItem(),
                                onEnterBack: () => getCurrentItem(),
                                onScrubComplete: () => getCurrentItem(),
                                onEnter: () => getCurrentItem(),
                                onLeave: () => getCurrentItem(),
                                onUpdate: () => getCurrentItem()
                            }
                        });



                        wrapScroll.to(wrapper, {
                            x: -end,

                        })

                    }

                    var snaps;

                    function getSnaps() {

                        snaps = items.map(function () {
                            if (mobileQuery.matches) {
                                return -($(this).position().left + ($(this).outerWidth()) + parentLeft);
                            } else {
                                return -($(this).position().left + ($(this).outerWidth() / 2) + parentLeft);
                            }
                        }).get();



                    }

                    function navPrevNext() {

                        next.on('click', function () {

                            getSnaps();
                            let nextProj = wrapper.find('.carousel--item.next'),
                                marg = parseInt(nextProj.css('marginRight')),
                                index = nextProj.data('index') - 1

                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? snaps[index] : snaps[index] + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })

                        prev.on('click', function () {

                            getSnaps();

                            let prevProj = wrapper.find('.carousel--item.prev'),
                                marg = parseInt(prevProj.css('marginRight')),
                                index = prevProj.data('index') - 1,
                                val = snaps[index];

                            val == null ? val = 0 : '';
                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? val : val + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })
                    }


                    carousel.hasClass('navScroll') ? navScroll() : navDrag();

                    carousel.find('.carousel--navigation').length ? navPrevNext() : '';




                    matchMedia.add({
                        isMobile: "(max-width: 450px)"

                    }, (context) => {

                        let {
                            isMobile
                        } = context.conditions;

                        gsap.set(wrapper, {
                            x: 0
                        })

                        gsap.set(wrapper.find('img'), {
                            clearProps: 'transform'
                        })

                        parentLeft = carousel.offset().left;

                        gsap.set(items.find('img'), {
                            clearProps: 'transform'
                        })

                        end = wrapper.outerWidth() - items.last().outerWidth();

                        if (carouselDrag) {

                            carouselDrag[0].applyBounds({
                                minX: 0,
                                maxX: -end
                            })

                            carouselDrag[0].update()
                        }


                        if (wrapScroll) {
                            wrapScroll.clear()

                            wrapScroll.to(wrapper, {
                                x: -end,

                            })

                        }

                        return () => {


                            gsap.set(wrapper.find('img'), {
                                clearProps: 'transform'
                            })

                            gsap.set(wrapper, {
                                x: 0
                            })
                            parentLeft = carousel.offset().left;

                            gsap.set(items.find('img'), {
                                clearProps: 'transform'
                            })

                            end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);

                            if (carouselDrag) {
                                carouselDrag[0].applyBounds({
                                    minX: 0,
                                    maxX: -end
                                })
                                carouselDrag[0].update()
                            }

                            if (wrapScroll) {
                                wrapScroll.clear()

                                wrapScroll.to(wrapper, {
                                    x: -end,

                                })

                            }




                        }
                    });


                })

            }




        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylainfoboxcarousel.default', function ($scope, $) {

            naylaDynamicCarousel();

            function naylaDynamicCarousel() {
                const carousel = $scope.find('.nayla-dynamic-carousel');

                carousel.each(function () {

                    let carousel = $(this),
                        wrapper = carousel.children('.carousel--wrapper'),
                        items = wrapper.children('.carousel--item'),
                        end,
                        length = items.length,
                        parentLeft,
                        next = carousel.find('.carousel--next'),
                        prev = carousel.find('.carousel--prev'),
                        animation = carousel.data('animation'),
                        customPin = carousel.data('pin'),
                        speed = carousel.data('scroll-speed'),
                        carouselDrag,
                        wrapScroll,
                        val;


                    val = 0;
                    end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);
                    parentLeft = carousel.offset().left,

                        carousel.find('.carousel--total').html(length);

                    items.each(function (i) {

                        let $this = $(this);

                        $this.attr('data-index', i);
                        $this.addClass('carousel--item--' + i);

                        if (carousel.hasClass('parallax-on')) {

                            $this.find('img').wrap('<div class="parallax-wrap"></div>');
                            $this.find('.parallax-wrap').css('height', $this.find('img').outerHeight());
                            $this.find('.parallax-wrap').css('width', $this.find('img').outerWidth());

                            $this.find('img').wrap('<div class="parallax-inner"></div>')

                            $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            $(window).on('resize', () => {

                                $this.find('.parallax-wrap').css('width', $this.outerWidth());
                                $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            })
                        }


                    })

                    function getCurrentItem() {

                        items.each(function () {

                            let $this = $(this),
                                pad = $this.css('paddingRight'),
                                entrance = $this.offset().left,
                                deadLine = $this.offset().left + $this.outerWidth(),
                                center = $(window).outerWidth() / 2;

                            entrance < center && center < deadLine ? $this.addClass('active') : $this.removeClass('active');

                            let activeItem = wrapper.find('.carousel--item.active');

                            items.removeClass('prev next');
                            prev.removeClass('disabled');
                            next.removeClass('disabled');

                            !activeItem.next().length ? next.addClass('disabled') : activeItem.next().addClass('next');
                            !activeItem.prev().length ? prev.addClass('disabled') : activeItem.prev().addClass('prev');


                            activeItem.data('index') == null ? '' : carousel.find('.carousel--current').html(activeItem.data('index') + 1);


                            if (carousel.hasClass('parallax-on')) {

                                let piv = ScrollTrigger.positionInViewport(this, 'right', true) * (mobileQuery.matches ? 50 : 100);

                                if ($this.find('.parallax-inner').length) {
                                    gsap.to($this.find('img'), {
                                        x: Math.floor(-piv)
                                    })
                                }

                            }

                        })


                    }
                    getCurrentItem();

                    function navDrag() {

                        wrapper.addClass('cursor-text');
                        wrapper.attr('data-cursor-text', carousel.attr('data-drag-text'));

                        carouselDrag = Draggable.create(wrapper, {
                            type: 'x',
                            bounds: {
                                minX: 0,
                                maxX: -end
                            },
                            lockAxis: true,
                            dragResistance: 0.5,
                            inertia: true,
                            onThrowUpdate: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            },
                            zIndexBoost: false,
                            onDrag: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            }
                        });

                    }

                    function navScroll() {

                        let endtrigger = speed == null ? 'bottom+=3000 bottom' : 'bottom+=' + speed + ' bottom',
                            start = customPin == null ? 'center center' : 'top top',
                            pinTarget = customPin == null ? carousel : customPin,
                            endNumber = speed == null ? 1000 : 1000 + speed;




                        if (carousel.hasClass('items-bottom')) {

                            start = 'bottom bottom'

                        }

                        //                carousel.find('.carousel-controls') ? start = 'center center+=50' : '';

                        wrapScroll = gsap.timeline({
                            scrollTrigger: {
                                trigger: pinTarget,
                                start: start,
                                end: carousel.offset().top < $(window).outerHeight() ? endNumber : endtrigger,
                                pin: true,
                                id: 'caroScroll',
                                scrub: 1,
                                pinSpacing: 'padding',
                                pinReparent: $('body').hasClass('smooth-scroll') ? true : false,
                                onLeaveBack: () => getCurrentItem(),
                                onEnterBack: () => getCurrentItem(),
                                onScrubComplete: () => getCurrentItem(),
                                onEnter: () => getCurrentItem(),
                                onLeave: () => getCurrentItem(),
                                onUpdate: () => getCurrentItem()
                            }
                        });

                        wrapScroll.to(wrapper, {
                            x: -end,

                        })

                    }

                    var snaps;

                    function getSnaps() {

                        snaps = items.map(function () {
                            if (mobileQuery.matches) {
                                return -($(this).position().left + ($(this).outerWidth()) + parentLeft);
                            } else {
                                return -($(this).position().left + ($(this).outerWidth() / 2) + parentLeft);
                            }
                        }).get();



                    }

                    function navPrevNext() {

                        next.on('click', function () {

                            getSnaps();
                            let nextProj = wrapper.find('.carousel--item.next'),
                                marg = parseInt(nextProj.css('marginRight')),
                                index = nextProj.data('index') - 1

                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? snaps[index] : snaps[index] + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })

                        prev.on('click', function () {

                            getSnaps();

                            let prevProj = wrapper.find('.carousel--item.prev'),
                                marg = parseInt(prevProj.css('marginRight')),
                                index = prevProj.data('index') - 1,
                                val = snaps[index];

                            val == null ? val = 0 : '';
                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? val : val + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })
                    }


                    carousel.hasClass('navScroll') ? navScroll() : navDrag();

                    carousel.find('.carousel--navigation').length ? navPrevNext() : '';




                    matchMedia.add({
                        isMobile: "(max-width: 450px)"

                    }, (context) => {

                        let {
                            isMobile
                        } = context.conditions;

                        gsap.set(wrapper, {
                            x: 0
                        })

                        gsap.set(wrapper.find('img'), {
                            clearProps: 'transform'
                        })

                        parentLeft = carousel.offset().left;

                        gsap.set(items.find('img'), {
                            clearProps: 'transform'
                        })

                        end = wrapper.outerWidth() - items.last().outerWidth();

                        if (carouselDrag) {

                            carouselDrag[0].applyBounds({
                                minX: 0,
                                maxX: -end
                            })

                            carouselDrag[0].update()
                        }


                        if (wrapScroll) {
                            wrapScroll.clear()

                            wrapScroll.to(wrapper, {
                                x: -end,

                            })

                        }

                        return () => {


                            gsap.set(wrapper.find('img'), {
                                clearProps: 'transform'
                            })

                            gsap.set(wrapper, {
                                x: 0
                            })
                            parentLeft = carousel.offset().left;

                            gsap.set(items.find('img'), {
                                clearProps: 'transform'
                            })

                            end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);

                            if (carouselDrag) {
                                carouselDrag[0].applyBounds({
                                    minX: 0,
                                    maxX: -end
                                })
                                carouselDrag[0].update()
                            }

                            if (wrapScroll) {
                                wrapScroll.clear()

                                wrapScroll.to(wrapper, {
                                    x: -end,

                                })

                            }




                        }
                    });


                })

            }




        })


        elementorFrontend.hooks.addAction('frontend/element_ready/naylainteractivegrid.default', function ($scope, $) {


            if ($scope.find('.nayla-video').length) {

                naylaVideo($scope.find('.nayla-video'))
            }

            showcaseInteractiveGrid()

            function showcaseInteractiveGrid() {

                let grid = $scope.find('.showcase-interactive-grid');



                grid.each(function () {

                    let grid = $(this),
                        wrapper = grid.children('.projects-wrapper'),
                        projects = wrapper.find('.showcase-project'),
                        animation = grid.data('animation'),
                        positions = [];

                    projects.each(function (i) {

                        let $this = $(this),
                            left = $this.offset().left + ($this.offset().left > $(window).outerWidth() / 2 ? 75 : 0),
                            top = $this.offset().top > $(window).outerHeight() / 2 ? $this.offset().top + ($(window).outerHeight() / 4) : $this.offset().top,
                            title = $this.find('.project-title'),
                            details = $this.find('.project-details'),
                            singlePos = [];



                        animation ? $this.addClass('has-anim ' + animation) : '';
                        animation ? $this.attr('data-delay', (i / 15)) : '';
                        animation ? $this.attr('data-duration', 1.5) : '';

                        $this.attr('data-left', left)

                        left > $(window).outerWidth() / 2 ? $this.addClass('project-right') : $this.addClass('project-left');

                        $this.attr('data-index', i)

                        singlePos.push(top, left)
                        positions.push(singlePos);

                        new SplitText(title, {
                            type: 'chars, lines',
                            linesClass: 'tit_line',
                            charsClass: 'tit_char',
                        })

                    })


                    function zoomIn(active) {

                        let state = Flip.getState(projects, {
                                props: 'opacity, filter'
                            }),
                            tl = gsap.timeline(),
                            left = positions[active.data('index')][1] - 25,
                            top = positions[active.data('index')][0] - 25;

                        projects.removeClass('active');
                        active.addClass('active');

                        projects.find('.project-image').removeClass('trans-media');
                        $('.showcase-project.active').find('.project-image').addClass('trans-media');

                        if (!mobileQuery.matches) {
                            gsap.set(wrapper, {
                                x: -1 * left,
                                y: -1 * top
                            })

                        }

                        grid.addClass('scatter-active')

                        wrapper.addClass('intro-grid--scatter')

                        var flippo = Flip.from(state, {
                            duration: 1,
                            ease: 'expo.inOut',
                            absolute: true,

                            simple: true,
                            prune: true,
                        });


                        tl.add(flippo);


                        tl.from(active.find('.tit_char'), {
                            yPercent: 100,
                            stagger: 0.025,
                            duration: 1,
                            ease: 'expo.out',

                        }, 0.5)

                        tl.from(active.find('.project-details'), {
                            y: 100,
                            opacity: 0,
                            duration: 1.5,
                            ease: 'expo.out',
                        }, 1)


                    }

                    function zoomOut() {

                        let state = Flip.getState(projects, {
                                props: 'opacity, filter'
                            }),
                            tl = gsap.timeline();

                        projects.removeClass('active');

                        gsap.set(wrapper, {
                            x: 0,
                            y: 0
                        })

                        grid.removeClass('scatter-active')

                        wrapper.removeClass('intro-grid--scatter')

                        var flippo = Flip.from(state, {
                            duration: 1,
                            ease: 'expo.inOut',
                            absolute: true,
                            simple: true,
                            prune: true,
                        });


                        tl.add(flippo);

                    }


                    projects.on('click', function () {

                        let $this = $(this);

                        zoomIn($this);



                    })

                    $('.scatter-close').on('click', () => {

                        zoomOut()


                    })

                    if (grid.hasClass('animate-in')) {

                        grid.addClass('will-animated')
                        wrapper.addClass('intro-grid--scatter')

                        gsap.set(wrapper, {
                            x: -500,
                            y: -500
                        })



                        ScrollTrigger.create({
                            trigger: 'body',
                            start: 'top-=1 top',
                            onEnter: () => {
                                zoomOut()

                                grid.removeClass('will-animated')
                            }


                        })

                    }


                })

            }


        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylalayoutswitcher.default', function ($scope, $) {


            let switchDark = $scope.find('.switch-dark'),
                switchLight = $scope.find('.switch-light'),
                follower = $scope.find('.active-follower'),
                body = $('body'),
                switcher = $scope.find('.nayla-layout-switcher'),
                styleSheet = $('style#nayla-body-styles')[0],
                styleSheetContent = styleSheet.innerHTML,
                variables = {
                    mainBackground: [],
                    mainColor: []
                };


            // CSS metnini satır satır bölelim ve her satırı inceleyelim
            styleSheetContent.split(';').forEach(function (line) {
                var backgroundMatches = line.match(/--mainBackground:\s*#([A-Fa-f0-9]+)!important/);
                var colorMatches = line.match(/--mainColor:\s*#([A-Fa-f0-9]+)!important/);

                if (backgroundMatches) {
                    var variableValue = '#' + backgroundMatches[1];
                    variables.mainBackground.push(variableValue);
                }

                if (colorMatches) {
                    var variableValue = '#' + colorMatches[1];
                    variables.mainColor.push(variableValue);
                }
            });

            var lightBg = variables.mainBackground[0],
                darkBg = variables.mainBackground[1],
                lightColor = variables.mainColor[0],
                darkColor = variables.mainColor[1];

            if (!$('.nayla-layout-switcher').hasClass('init')) {

                $('.nayla-layout-switcher').addClass('init');

                function logosSwitch() {

                    let inverts = $('.ls-invert'),
                        brights = $('.ls-bright');


                    if (inverts.length) {
                        inverts.find('img').toggleClass('inverted')
                    }

                    if (brights.length) {

                        brights.find('img').toggleClass('brighted')

                    }

                }


                if (switcher.hasClass('ls_switcher')) {


                    body.hasClass('light') ? switchLight.addClass('active') : switchLight.removeClass('active');
                    body.hasClass('dark') ? switchDark.addClass('active') : switchDark.removeClass('active');

                    switchDark.on('click', function () {

                        if (!body.hasClass('layout-changing')) {

                            body.addClass('layout-changing');

                            switchLight.removeClass('active');
                            $(this).addClass('active');

                            gsap.fromTo('body', {
                                '--changingBg': lightBg,
                                '--changingColor': lightColor,
                            }, {
                                '--changingBg': darkBg,
                                '--changingColor': darkColor,
                                onComplete: () => {

                                    setTimeout(function () {


                                        body.removeClass('layout-changing');
                                        body.removeClass('light');
                                        body.addClass('dark')

                                    }, 100)

                                }
                            })


                            if (!$('.project-page-header.half-image').length && !$('.project-page-header.fullscreen-image').length && !$('.project-page-header.tall-image').length) {

                                if (!siteHeader.hasClass('blend')) {

                                    if (siteHeader.hasClass('dark')) {

                                        headerDark = false
                                        headerLight = true


                                        siteHeader.removeClass('dark')
                                        siteHeader.addClass('light')

                                    }

                                }


                            }


                            gsap.to(follower, {
                                left: '49%'
                            })

                            logosSwitch()

                            switchedDark = true;
                            switchedLight = false;
                        }

                    })

                    switchLight.on('click', function () {

                        if (!body.hasClass('layout-changing')) {

                            body.addClass('layout-changing');


                            switchDark.removeClass('active');
                            $(this).addClass('active')

                            gsap.fromTo('body', {
                                '--changingBg': darkBg,
                                '--changingColor': darkColor,
                            }, {
                                '--changingBg': lightBg,
                                '--changingColor': lightColor,
                                onComplete: () => {


                                    setTimeout(function () {

                                        $('body').removeClass('layout-changing');
                                        $('body').removeClass('dark');
                                        $('body').addClass('light')

                                    }, 100)


                                }
                            })
                            if (!$('.project-page-header.half-image').length && !$('.project-page-header.fullscreen-image').length && !$('.project-page-header.tall-image').length) {


                                if (!siteHeader.hasClass('blend')) {

                                    if (siteHeader.hasClass('light')) {

                                        siteHeader.removeClass('light')
                                        siteHeader.addClass('dark')

                                        headerDark = true
                                        headerLight = false


                                    }
                                }

                            }
                            gsap.to(follower, {
                                left: '1%'
                            })

                            logosSwitch()

                            switchedDark = false;
                            switchedLight = true;

                        }


                    })

                } else if (switcher.hasClass('ls_button')) {

                    body.hasClass('light') ? switcher.addClass('light-active') : switcher.removeClass('light-active');;
                    body.hasClass('dark') ? switcher.addClass('dark-active') : switcher.removeClass('dark-active');;


                    switcher.on('click', function () {

                        if (!body.hasClass('layout-changing')) {

                            body.addClass('layout-changing');

                            logosSwitch()

                            if (body.hasClass('light')) {

                                gsap.fromTo('body', {
                                    '--changingBg': lightBg,
                                    '--changingColor': lightColor,
                                }, {
                                    '--changingBg': darkBg,
                                    '--changingColor': darkColor,
                                    onComplete: () => {

                                        setTimeout(function () {


                                            body.removeClass('layout-changing');
                                            body.removeClass('light');
                                            body.addClass('dark')

                                        }, 100)

                                    }
                                })

                                if (!$('.project-page-header.half-image').length && !$('.project-page-header.fullscreen-image').length && !$('.project-page-header.tall-image').length) {

                                    if (!siteHeader.hasClass('blend')) {
                                        headerDark = true
                                        headerLight = false


                                        siteHeader.removeClass('dark')
                                        siteHeader.addClass('light')
                                    }

                                }

                                switcher.removeClass('light-active');
                                switcher.addClass('dark-active');



                            } else if (body.hasClass('dark')) {


                                gsap.fromTo('body', {
                                    '--changingBg': darkBg,
                                    '--changingColor': darkColor,
                                }, {
                                    '--changingBg': lightBg,
                                    '--changingColor': lightColor,
                                    onComplete: () => {


                                        setTimeout(function () {

                                            $('body').removeClass('layout-changing');
                                            $('body').removeClass('dark');
                                            $('body').addClass('light')

                                        }, 100)


                                    }
                                })

                                if (!$('.project-page-header.half-image').length && !$('.project-page-header.fullscreen-image').length && !$('.project-page-header.tall-image').length) {

                                    if (!siteHeader.hasClass('blend')) {

                                        headerDark = false
                                        headerLight = true


                                        siteHeader.addClass('dark')
                                        siteHeader.removeClass('light')
                                    }
                                }

                                switcher.removeClass('dark-active');
                                switcher.addClass('light-active');

                            }

                        }



                    })

                }

            } else {

                if (switcher.hasClass('ls_switcher')) {

                    body.hasClass('light') ? switchLight.addClass('active') : switchLight.removeClass('active');
                    body.hasClass('dark') ? switchDark.addClass('active') : switchDark.removeClass('active');

                } else if (switcher.hasClass('ls_button')) {

                    body.hasClass('light') ? switcher.addClass('light-active') : switcher.removeClass('light-active');;
                    body.hasClass('dark') ? switcher.addClass('dark-active') : switcher.removeClass('dark-active');;


                }

            }



        })


        elementorFrontend.hooks.addAction('frontend/element_ready/naylaimagesgrid.default', function ($scope, $) {

            naylaDynamicGrid()


            function naylaLightboxGallery(gallery, items) {

                let $items = $(items),
                    $gallery = $(gallery),
                    itemsLenght = $items.length,
                    thumbsDragger, thumbsWheeler;

                const $lightbox = $('<div>', {
                        class: 'nayla-lightbox-hold',
                        html: `
                    <div class="lightbox-overlay"></div>
                    <div class="lightbox-gal"></div>
                    <span class="active-hold"></span>
                    <div class="lightbox-close">CLOSE</div>
                    <div class="lightbox-fraction"><div class="lf-curr"></div><div class="lf-tot">${itemsLenght}</div></div>
                       `
                    }),
                    lightboxReset = $lightbox.html(),
                    itemsState = Flip.getState($items, {
                        props: 'padding , opacity, filter'
                    });




                function createNav(range, length, index) {

                    let wrap = $('.lightbox-convert'),
                        x = 0,
                        result = 0,
                        prevVal = [];


                    for (x = 0; x < index; x++) {
                        prevVal.push($('.thumb_' + x).outerWidth())
                    }

                    prevVal.length != 0 ? result = prevVal.reduce((a, b) => a + b, 0) : '';

                    let curr = $('.thumb_' + index).outerWidth() / 2,
                        currX = -result - curr;

                    gsap.to(wrap, {
                        x: currX,
                        duration: 2,
                        ease: 'expo.inOut',
                    })

                    const snaps = $items.map(function () {
                        return -($(this).position().left + ($(this).outerWidth() / 2));
                    }).get();

                    function detectActive() {

                        $items.each(function () {

                            let $this = $(this),
                                entrance = $this.offset().left,
                                deadLine = $this.offset().left + $this.outerWidth(),
                                center = $(window).outerWidth() / 2;

                            entrance < center && center < deadLine ? $this.addClass('active') : $this.removeClass('active');

                            let active = $('.grid--item.active').data('index');

                            $('.lightbox-gal img').removeClass('active')
                            $('.lb--img--' + active).addClass('active')

                        })

                        gsap.to('.active-hold', {
                            width: $('.lightbox-thumb.active').outerWidth() - 13,
                            duration: .35
                        })

                        // Update Fraction
                        $lightbox.find('.lf-curr').html($('.lightbox-thumb.active').data('index') + 1)

                    }



                    // NavbyDrag
                    thumbsDragger = Draggable.create(wrap, {
                        type: 'x',
                        bounds: {
                            minX: -$items.first().outerWidth() / 2,
                            maxX: -range + ($items.last().outerWidth() / 2)
                        },
                        lockAxis: true,
                        inertia: true,
                        zIndexBoost: false,
                        id: 'lightboxThumbs',
                        snap: snaps,
                        onDrag: () => detectActive(),
                        onThrowUpdate: () => detectActive()
                    });
                    thumbsDragger[0].disable();



                    //NavbyWheel
                    thumbsWheeler = Hamster(document.querySelector('.nayla-lightbox-hold'));
                    var xVal = currX;

                    thumbsWheeler.wheel(function (event, delta, deltaX, deltaY) {

                        detectActive();
                        thumbsDragger[0].update();

                        xVal += event.deltaY * 1.1;
                        xVal = Math.min(Math.max(-range + ($items.last().outerWidth() / 2), xVal), -$items.first().outerWidth() / 2);

                        gsap.to(wrap, {
                            x: xVal,
                            onComplete: () => {
                                gsap.to(wrap, {
                                    x: gsap.utils.snap(snaps, xVal),
                                })
                            }
                        })
                    });

                    //NavbyClick
                    //            $items.on('click', function () {
                    //
                    //                if ($gallery.hasClass('lightbox-active')) {
                    //                    
                    //                    
                    //                    gsap.to(wrap, {
                    //                        x: -($(this).position().left + ($(this).outerWidth() / 2)),
                    //                        duration: 1,
                    //                        ease: 'expo.inOut',
                    //                        onUpdate: () => {
                    //                            detectActive();
                    //                            thumbsDragger[0].update();
                    //                        }
                    //                    })
                    //
                    //                }
                    //
                    //            })


                }

                $(items).each(function (i) {

                    let $this = $(this),
                        img = $this.find('img'),
                        cl = $(items).find('img').clone();

                    $this.attr('data-index', i);
                    $this.addClass('thumb_' + i);


                    $this.on('click', () => {

                        if (!$gallery.hasClass('lightbox-active')) {
                            $this.addClass('active');
                            //Resets
                            disableScroll();
                            gsap.killTweensOf($items);
                            $('body').append($lightbox);
                            $gallery.addClass('lightbox-active');

                            setTimeout(function () {
                                cl.appendTo('.lightbox-gal');

                                $('.lightbox-gal').find('img').each(function (i) {
                                    $(this).addClass('lb--img--' + i);
                                });
                                $lightbox.find('.lf-curr').html(i + 1)

                            })

                            let itemIndex = $(this).data('index');

                            $gallery.addClass('lightbox-convert');

                            gsap.set($gallery.parents('.elementor-section'), {
                                zIndex: 999999,
                                pointerEvents: 'none'
                            })

                            $items.addClass('lightbox-thumb');

                            const result = $items.toArray().reduce((a, item) => a + Math.floor($(item).outerWidth()), 10);

                            gsap.to('.active-hold', {
                                width: $this.outerWidth() - 9,
                                duration: 1
                            })

                            createNav(result, 18, itemIndex)


                            lightboxAnim('in')

                            Flip.from(itemsState, {
                                duration: 2,
                                ease: 'expo.inOut',
                                absolute: true,
                                onStart: () => {
                                    setTimeout(function () {
                                        let activeImage = $('.lb--img--' + $this.data('index'));
                                        activeImage.addClass('active');

                                        gsap.fromTo(activeImage, {
                                            clipPath: 'inset(100% 0% 0% 0%)',
                                            scale: .5
                                        }, {
                                            clipPath: 'inset(0% 0% 0% 0%)',
                                            delay: 1.6,
                                            scale: .5,
                                            duration: 1.5,
                                            ease: 'expo.out',
                                            onComplete: () => {
                                                gsap.to(activeImage, {
                                                    scale: 1,
                                                    duration: 1,
                                                    ease: 'expo.inOut',
                                                    onComplete: () => {
                                                        gsap.set('body', {
                                                            clearProps: 'cursor'
                                                        })
                                                    }
                                                })
                                            }

                                        })

                                    })

                                },
                                onComplete: () => {
                                    $lightbox.find('.lightbox-close').on('click', () => closeLightBox())
                                }

                            });


                        }


                    })


                })


                function lightboxAnim(direction) {

                    let tl = gsap.timeline({
                            onStart: () => {
                                $('body').css('cursor', 'wait')
                            },
                        }),
                        lightbox = $lightbox,
                        overlay = lightbox.find('.lightbox-overlay');

                    if (direction === 'in') {

                        tl.to(overlay, {
                            height: '100%',
                            duration: 1.5,
                            ease: 'expo.out',
                            delay: 1,
                            onComplete: () => {
                                $lightbox.addClass('active');
                                thumbsDragger[0].enable();
                            }
                        })

                    } else if (direction === 'out') {

                        tl.to(lightbox, {
                            clipPath: 'inset(0% 0% 100% 0%)',
                            duration: 1,
                            ease: 'expo.inOut',
                            onStart: () => {
                                $gallery.css('zIndex', 9999999999999);
                                thumbsDragger[0].disable();

                            },
                            onComplete: () => {
                                gsap.set(lightbox, {
                                    clearProps: 'all'
                                })
                                lightbox.find('img').removeClass('active');
                                lightbox.html(lightboxReset)
                                lightbox.removeClass('active')
                                lightbox.remove();
                                gsap.set($gallery, {
                                    clearProps: 'all'
                                })

                            }
                        })


                    }


                }


                function closeLightBox() {


                    thumbsDragger[0].kill()
                    thumbsWheeler.unwheel();

                    enableScroll()
                    const itemsNewState = Flip.getState($items, {
                        props: 'padding , opacity, filter'
                    });

                    lightboxAnim('out')

                    $gallery.removeClass('lightbox-convert');
                    $gallery.removeClass('lightbox-active');
                    $items.removeClass('lightbox-thumb active');


                    gsap.to($gallery, {
                        x: 0,
                        duration: 2,
                        ease: 'expo.inOut',

                    })



                    Flip.from(itemsNewState, {
                        duration: 2,

                        ease: 'expo.inOut',
                        absolute: true,
                        onComplete: () => {
                            gsap.set('body', {
                                clearProps: 'cursor'
                            });

                            gsap.set($gallery.parents('.elementor-section'), {
                                clearProps: 'all'
                            })

                        }

                    });


                }


            }


            function naylaDynamicGrid() {

                const grid = $scope.find('.nayla-dynamic-grid');

                grid.each(function () {

                    let grid = $(this),
                        wrapper = grid.children('.grid--wrapper'),
                        items = wrapper.children('.grid--item'),
                        animation = grid.data('animation');



                    grid.hasClass('lightbox-gallery') ? grid.css('height', grid.outerHeight()) : '';

                    grid.hasClass('lightbox-gallery') ? naylaLightboxGallery(wrapper, items) : '';

                    items.each(function (i) {

                        i++

                        let $this = $(this);

                        if (grid.hasClass('parallax-on') && $this.find('img').length) {

                            $this.find('img').wrap('<div class="parallax-wrap"></div>');

                            $this.find('.parallax-wrap').css('width', $this.outerWidth());
                            $this.find('img').css('height', 'calc(100% + 100px)');

                            gsap.to($this.find('img'), {
                                y: -100,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: $this,
                                    scrub: 1,
                                    start: 'top bottom',
                                    emd: 'bottom top',
                                }
                            })

                            $(window).on('resize', () => {

                                gsap.set($this.find('.parallax-wrap'), {
                                    clearProps: 'width'
                                })
                                $this.find('.parallax-wrap').css('width', $this.outerWidth());

                            })

                        }

                        if (animation != null) {

                            let stg = 0;

                            grid.attr('data-stagger') < 0 ? stg = -1 * (grid.attr('data-stagger') / i) : stg = grid.attr('data-stagger') * i;


                            $this.addClass(animation);
                            $this.attr('data-duration', grid.attr('data-duration'));
                            $this.attr('data-delay', stg)
                            $this.attr('data-block-color', grid.attr('data-block-color'))

                            grid.hasClass('image-grid') ? new naylaImageAnimation($this) : new naylaGeneralAnimations($this);

                        }

                    })


                })

            }



        })

        elementorFrontend.hooks.addAction('frontend/element_ready/nayladynamicgrid.default', function ($scope, $) {


            let wrapper = $scope.find('.nfg--wrapper'),
                items = $scope.find('.nfg--item'),
                filtersWrapper = $scope.find('.nfg--filters--wrapper'),
                filters = $scope.find('.nfg--filters--wrapper li');

            items.each(function (i) {
                i++

                let $this = $(this),
                    cats = $this.data('cats'),
                    arr = cats.split(','),
                    currCats = [];


                for (i = 0; i < arr.length; i++) {

                    currCats.push(arr[i].split(' ').join('_').toLowerCase())
                }

                for (i = 0; i < currCats.length; i++) {

                    $this.addClass('cat_' + currCats[i])
                };


            })

            filters.each(function () {

                let $this = $(this);

                $this.on('click', function () {

                    filters.not($this).removeClass('active');
                    $this.addClass('active');

                    let state = Flip.getState(items);

                    gsap.to(window, {
                        scrollTo: wrapper.offset().top - 100,
                        duration: .5,
                        onComplete: () => {



                            ScrollTrigger.refresh()



                        }
                    })

                    if ($this.hasClass('all')) {

                        items.show();

                    } else {

                        let cat = $this.data('cat'),
                            findProjs = $('.cat_' + cat);

                        items.not(findProjs).hide();
                        findProjs.show();

                    }


                    Flip.from(state, {
                        duration: .75,
                        scale: false,
                        ease: "expo.inOut",
                        stagger: 0,
                        absolute: true,
                        absoluteOnLeave: true,
                        onEnter: elements => gsap.fromTo(elements, {
                            opacity: 0,
                            scale: 0
                        }, {
                            opacity: 1,
                            scale: 1,

                        }),
                        onLeave: elements => gsap.to(elements, {
                            opacity: 0,
                            scale: 0,

                        })
                    });


                })

            })

            ScrollTrigger.create({
                trigger: wrapper,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => {
                    filtersWrapper.addClass('active')
                },
                onEnterBack: () => {
                    filtersWrapper.addClass('active')
                },
                onLeave: () => {
                    filtersWrapper.removeClass('active')
                },
                onLeaveBack: () => {
                    filtersWrapper.removeClass('active')
                }
            })

        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylainfinitegrid.default', function ($scope, $) {

            showcaseInfiniteGrid()
            naylaMarquee($scope.find('.nayla-marquee'));

            function showcaseInfiniteGrid() {

                let fullscreenGrid = $scope.find('.showcase-infinite-grid');

                fullscreenGrid.each(function (i) {
                    i++

                    var mainWrap = $(this),
                        id = 'grid_' + i,
                        grid = mainWrap.find('.sfg-grid-wrapper'),
                        cols = 2,
                        projectImages = mainWrap.find('.project-image'),
                        titlesWrap = mainWrap.find('.sfg-titles'),
                        overlay = mainWrap.find('.sfg-overlay'),
                        colorAnim, horizontal;

                    if (!grid.find('.showcase-project').length % 2 === 0) {
                        grid.append('<div class="showcase-project"></div>')
                    }

                    if (mainWrap.hasClass('col-3')) {

                        cols = 3;
                    }

                    if (mainWrap.hasClass('horizontal')) {

                        horizontal = true;

                        grid.append('<div class="sfg_grid_row sfg_grid_row_top"></div>')
                        grid.append('<div class="sfg_grid_row sfg_grid_row_bottom"></div>')

                    }

                    colorAnim = true;

                    mainWrap.attr('id', id);

                    let parent = document.getElementById(id);

                    const repeatItems = (parentEl, total = 0) => {
                        const items = [...parentEl.children];
                        for (let i = 0; i <= total - 1; ++i) {
                            var cln = items[i].cloneNode(true);
                            parentEl.appendChild(cln);
                        }
                    };
                    repeatItems(parent.querySelector('.sfg-grid-wrapper'), cols * 2);

                    let projects = grid.find('.showcase-project');

                    projects.each(function (i) {
                        i++
                        let $this = $(this),
                            image = $this.find('.project-image'),
                            img = $this.find('img');


                        if (horizontal && (i % 2 === 0)) {

                            $this.appendTo('.sfg_grid_row_bottom')

                        } else {
                            $this.appendTo('.sfg_grid_row_top')
                        }


                        $this.attr('data-index', i)


                        if (!mobileQuery.matches) {

                            for (let i = 0; i <= 5; ++i) {
                                img.clone().appendTo($this.find('.project-image'))
                            }

                            img = $this.find('img');

                            img.each(function (i) {

                                i++
                                gsap.set($(this), {
                                    opacity: '0.' + i
                                })
                            })

                        }



                        $this.find('a').on('mouseenter', () => {
                            grid.addClass('hovered')
                            $this.addClass('current');


                        })

                        $this.find('a').on('mouseleave', () => {
                            grid.removeClass('hovered');
                            $this.removeClass('current');

                        })

                        $this.find('a').on('click', () => {

                            $this.find('.project-image').find('img').not(':first-child').remove();

                            gsap.set($this.find('.project-image').find('img').first(), {
                                opacity: 1
                            })

                        })



                    })



                    let direction = 'vertical';

                    if (horizontal) {
                        direction = 'horizontal'
                    }

                    const lenis = new Lenis({
                        wrapper: parent.querySelector('.sfg-infinite-wrap'),
                        content: parent.querySelector('.sfg-grid-wrapper'),
                        smooth: true,
                        infinite: true,
                        smoothTouch: true,
                        lerp: 0.001,
                        direction: direction

                    });

                    function raf(time) {
                        lenis.raf(time);
                        requestAnimationFrame(raf);
                    }

                    requestAnimationFrame(raf);

                    lenis.on('scroll', (e) => {
                        var bgMarquee = gsap.getById('nayla_marquee'),
                            velocity = e.velocity / 15

                        if ((e.velocity < 5) && (e.velocity > -5)) {

                            mainWrap.removeClass('lenis-scrolling')

                        } else {
                            mainWrap.addClass('lenis-scrolling')
                        }

                        projects.each(function () {

                            let $this = $(this),
                                img = $this.find('img');


                            if (!mobileQuery.matches) {

                                img.each(function (i) {
                                    i++
                                    let yVal = (e.velocity) / 1.5 * i;

                                    if (i > 1) {

                                        if (horizontal) {
                                            gsap.to($(this), {
                                                x: -1 * yVal,
                                                ease: 'power3.out',

                                            })

                                        } else {
                                            gsap.to($(this), {
                                                y: -1 * yVal,
                                                ease: 'power3.out',

                                            })
                                        }

                                    }

                                })



                            }

                        })
                    })

                })

            }






        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylashowcasecarousel.default', function ($scope, $) {

            showcaseCarousel();

            function showcaseCarousel() {

                var mainWrap = $scope.find('.showcase-carousel');

                if ($scope.find('.nayla-video').length) {

                    naylaVideo($scope.find('.nayla-video'))
                }

                mainWrap.each(function () {

                    let mainWrap = $(this),
                        overlay = mainWrap.find('.sfc-overlay'),
                        images = mainWrap.find('.sc-images'),
                        scWrap = mainWrap.find('.sc-wrapper'),
                        wrapperWidth = scWrap.outerWidth(),
                        projectsWrap = mainWrap.find('.sc-projects-wrap'),
                        projects = projectsWrap.find('.showcase-project'),
                        wrapperHeight = mainWrap.outerHeight(),
                        speed = wrapperHeight + mainWrap.data('speed'),
                        frac = mainWrap.find('.slides-fraction'),
                        curr = frac.find('.slide-current'),
                        tot = frac.find('.slide-total'),
                        colorAnim;


                    curr.html('1')
                    tot.html(projects.length)

                    mainWrap.hasClass('animate-colors') ? colorAnim = true : colorAnim = false;

                    images.addClass('swiper-container').wrapInner('<div class="swiper-wrapper"></div>');

                    // Project Settings

                    projects.each(function (i) {

                        let $this = $(this),
                            image = $this.find('.project-image');

                        $this.find('a').addClass('sc-link')


                        $this.attr('data-index', i);
                        $this.addClass('project_' + i);

                        colorAnim ? projectColorSettings($this) : '';

                        image.addClass('swiper-slide image_' + i).wrapInner('<div class="fs-parallax-wrap"><div class="slide-bgimg"></div></div>').appendTo(images.find('.swiper-wrapper'));

                    })

                    // Init first

                    if (colorAnim) {

                        let bgColor = $('.project_0').data('primary-color');

                        gsap.set(overlay, {
                            backgroundColor: bgColor
                        })


                        layoutChange(overlay, $('.project_0'), $('.showcase-footer, .sc-wrapper'))

                    }

                    // Init Images Slider
                    var interleaveOffset = 0.8,
                        imagesSlider = new Swiper('.sc-images', {
                            slidesPerView: 1,
                            speed: 700,
                            // mousewheel: true,
                            parallax: true,
                            watchSlidesProgress: true,
                            on: {
                                progress: function () {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        let slideProgress = swiper.slides[i].progress,
                                            innerOffset = swiper.width * interleaveOffset,
                                            innerTranslate = slideProgress * innerOffset;

                                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                            "translateX(" + innerTranslate + "px)";
                                    }
                                },
                                setTransition: function (speed) {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        swiper.slides[i].style.transition = speed + "ms";
                                        swiper.slides[i].querySelector(".slide-bgimg").style.transition = 700 + "ms";
                                    }
                                },
                                slideChange: function () {

                                    let activeProject = mainWrap.find('.showcase-project.active'),
                                        bgColor = activeProject.data('primary-color'),
                                        elementsColor = activeProject.data('secondary-color');

                                    colorAnim ? layoutChange(overlay, activeProject, $('.showcase-footer, .sc-wrapper')) : '';

                                }

                            },

                        })

                    // Scroll

                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: mainWrap,
                            pin: true,
                            scrub: 1,
                            end: speed,

                            id: 'showcaseCarouselScroll',
                            onUpdate: (self) => {

                                if (self.progress <= 0.0001) {

                                    projects.removeClass('active');

                                    mainWrap.find('.project_0').addClass('active');

                                } else if (self.progress >= 0.0001) {

                                    projects.each(function (i) {

                                        let $this = $(this),
                                            ofLeft = $this.offset().left,
                                            windowWidth = $(window).outerWidth(),
                                            deadLine = (windowWidth / 2) - $this.outerWidth(),
                                            currentTransform = scWrap.css('transform');

                                        if ((ofLeft < (windowWidth / 2)) && (ofLeft > deadLine)) {
                                            $this.addClass('active');
                                        } else {
                                            $this.removeClass('active');
                                        }

                                    });

                                }

                                let activeProject = mainWrap.find('.showcase-project.active'),
                                    slideGo = activeProject.data('index');

                                $('.project-image.swiper-slide').removeClass('transition--media');
                                $('.image_' + slideGo).addClass('transition--media');

                                curr.html(slideGo + 1)

                                imagesSlider.slideTo(slideGo, 700);


                            },

                        }
                    });


                    let firstPos = ($(window).outerWidth() / 2) - ($('.project_0').outerWidth() / 2) + 75,
                        fillLine = mainWrap.find('.sc-line-fill'),
                        lastPos = (wrapperWidth * -1) + ($(window).outerWidth() / 2);

                    tl.to(fillLine, {
                        width: '100%'
                    }, 0)

                    tl.fromTo(scWrap, {
                        x: firstPos
                    }, {
                        x: lastPos,
                        ease: 'none',
                        id: 'willUpdated'
                    }, 0)

                    // Mobile


                    matchMedia.add({
                        isMobile: "(max-width: 550px)"

                    }, (context) => {
                        let {
                            isMobile
                        } = context.conditions;

                        tl.revert();
                        window.scrollTo(0, 0)

                        let wrapperWidth = scWrap.outerWidth(),
                            firstPos = ($(window).outerWidth() / 2) - ($('.project_0').outerWidth() / 2) + 75,
                            fillLine = mainWrap.find('.sc-line-fill'),
                            lastPos = (wrapperWidth * -1) + ($(window).outerWidth() / 2),
                            proga = 0;

                        projects.removeClass('active');

                        mainWrap.find('.project_0').addClass('active');

                        $('.project-image.swiper-slide').removeClass('transition--media');
                        $('.image_0').addClass('transition--media');


                        let scDrag = Draggable.create(scWrap, {
                            type: 'x',
                            bounds: {
                                minX: 0,
                                maxX: lastPos
                            },
                            lockAxis: true,
                            trigger: '.showcase-carousel',
                            dragResistance: 0.5,
                            inertia: true,
                            onThrowUpdate: () => {

                                let prog = Math.floor((scDrag[0].endX * 100) / lastPos) / 100;


                                if (prog <= 0) {
                                    projects.removeClass('active');

                                    mainWrap.find('.project_0').addClass('active');

                                    let activeProject = mainWrap.find('.showcase-project.active'),
                                        slideGo = activeProject.data('index');

                                    $('.project-image.swiper-slide').removeClass('transition--media');
                                    $('.image_' + slideGo).addClass('transition--media');


                                } else if (prog >= 0) {

                                    projects.each(function (i) {

                                        let $this = $(this),
                                            ofLeft = $this.offset().left,
                                            windowWidth = $(window).outerWidth(),
                                            deadLine = (windowWidth / 2) - $this.outerWidth(),
                                            currentTransform = scWrap.css('transform');


                                        if ((ofLeft < (windowWidth / 2)) && (ofLeft > deadLine)) {
                                            $this.addClass('active');
                                        } else {
                                            $this.removeClass('active');
                                        }

                                    });

                                }

                                let activeProject = mainWrap.find('.showcase-project.active'),
                                    slideGo = activeProject.data('index');

                                $('.project-image.swiper-slide').removeClass('transition--media');
                                $('.image_' + slideGo).addClass('transition--media');


                                imagesSlider.slideTo(slideGo, 700);
                            },
                            zIndexBoost: false,
                            onDrag: () => {

                                let prog = Math.floor((scDrag[0].endX * 100) / lastPos) / 100;


                                if (prog <= 0.1) {
                                    projects.removeClass('active');

                                    mainWrap.find('.project_0').addClass('active');

                                } else if (prog >= 0) {

                                    projects.each(function (i) {

                                        let $this = $(this),
                                            ofLeft = $this.offset().left,
                                            windowWidth = $(window).outerWidth(),
                                            deadLine = (windowWidth / 2) - $this.outerWidth(),
                                            currentTransform = scWrap.css('transform');


                                        if ((ofLeft < (windowWidth / 2)) && (ofLeft > deadLine)) {
                                            $this.addClass('active');
                                        } else {
                                            $this.removeClass('active');
                                        }

                                    });

                                }

                                let activeProject = mainWrap.find('.showcase-project.active'),
                                    slideGo = activeProject.data('index');

                                $('.project-image.swiper-slide').removeClass('transition--media');
                                $('.image_' + slideGo).addClass('transition--media');


                                curr.html(slideGo + 1)
                                imagesSlider.slideTo(slideGo, 700);

                            }
                        });


                        return () => {

                            let wrapperHeight = mainWrap.outerHeight(),
                                speed = wrapperHeight + mainWrap.data('speed'),
                                wrapperWidth = scWrap.outerWidth(),
                                firstPos = ($(window).outerWidth() / 2) - ($('.project_0').outerWidth() / 2) + 75,
                                fillLine = mainWrap.find('.sc-line-fill'),
                                lastPos = (wrapperWidth * -1) + ($(window).outerWidth() / 2);
                            tl.to(fillLine, {
                                width: '100%'
                            }, 0)

                            tl.fromTo(scWrap, {
                                x: firstPos
                            }, {
                                x: lastPos,
                                ease: 'none',
                            }, 0);

                            ScrollTrigger.getById('showcaseCarouselScroll').vars.end = lastPos * -1

                        }
                    });



                    function scIntro() {

                        let intro = gsap.timeline({
                            once: true,
                            scrollTrigger: {
                                start: 'top-=1 top'
                            }

                        });

                        projects.each(function () {

                            let $this = $(this),
                                title = $this.find('.project-title');

                            var splitTitle = new SplitText(title, {
                                type: 'lines, chars',
                                linesClass: 'pt_line',
                                charsClass: 'pt_char',
                                display: 'inline-block',
                                reduceWhiteSpace: false

                            })

                            let char = $this.find('.pt_char'),
                                line = $this.find('.pt_line');

                            char.wrapInner('<span></span>');

                            intro.from(line, {
                                x: 200,
                                duration: 1,
                                ease: 'power2.out',
                            }, .5)

                            intro.from(char.find('span'), {
                                x: 120,
                                stagger: 0.05,
                                ease: 'power1.out',
                                duration: 1,
                                onComplete: () => {

                                    splitTitle.revert();
                                }
                            }, .5)

                            intro.fromTo(images, {
                                clipPath: 'inset(100% 0% 0% 0%)',
                            }, {
                                clipPath: 'inset(0% 0% 0% 0%)',
                                ease: 'expo.inOut',
                                duration: 1

                            }, 0)

                            intro.fromTo(mainWrap.find('.sc-line').first(), {
                                width: '0%'
                            }, {
                                width: '100%',
                                ease: 'power2.inOut',
                                duration: 1.6

                            }, .5)

                            intro.fromTo(mainWrap.find('.showcase-footer'), {
                                y: 100
                            }, {
                                y: 0,
                                duration: 1,
                                ease: 'power2.out'
                            }, .5)

                        })



                    }

                    mainWrap.hasClass('animate-in') ? scIntro() : '';




                })


            }

        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylaprojectslist.default', function ($scope, $) {

            naylaPortfolioList();

            function naylaPortfolioList() {

                let portfolio = $scope.find('.portfolio-list'),
                    titlesWrap = $scope.find('.list-projects-wrapper'),
                    imagesWrap = $scope.find('.list-images-wrapper');


                titlesWrap.hover(
                    () => {
                        imagesWrap.addClass('active');
                        titlesWrap.addClass('active');

                    },
                    () => {
                        imagesWrap.removeClass('active')
                        titlesWrap.removeClass('active')
                    }
                );

                gsap.set(imagesWrap, {
                    xPercent: -75,
                    yPercent: -50
                });

                titlesWrap.on('mousemove', function (e) {

                    let xTo = gsap.quickTo(imagesWrap, "left", {
                            duration: 0.6,
                            ease: "power3"
                        }),
                        yTo = gsap.quickTo(imagesWrap, "top", {
                            duration: 0.6,
                            ease: "power3"
                        });


                    function icko(e) {
                        xTo(e.pageX);
                        yTo(e.pageY - portfolio.offset().top);
                    }

                    icko(e)

                });

                matchMedia.add({
                    isMobile: "(max-width: 550px)"

                }, (context) => {
                    let {
                        isMobile
                    } = context.conditions;


                    titlesWrap.off('mousemove')

                    return () => {

                        titlesWrap.on('mousemove')


                    }
                });



                let projects = titlesWrap.find('.list-project'),
                    count = 0;


                projects.each(function () {

                    let $this = $(this);


                    $this.on('mouseenter', function () {

                        let image = $('.image_' + $this.data('id'));
                        $this.addClass('active')

                        gsap.set(image, {
                            zIndex: 1
                        })

                        image.addClass('active')
                        image.addClass('trans-media')

                        let tl = gsap.timeline();

                        tl.fromTo(image, {

                            y: '100%'
                        }, {

                            y: '0%',
                            duration: 1.5,
                            ease: 'power3.inOut'
                        }, 0)

                        tl.fromTo(image.children('div'), {

                            scale: 1.3,
                            y: '-100%'
                        }, {

                            y: '0%',
                            scale: 1,
                            duration: 1.5,
                            ease: 'power3.inOut'
                        }, 0)

                    })

                    $this.on('mouseleave', function () {

                        count++

                        $this.removeClass('active')

                        let image = $('.image_' + $this.data('id'));

                        image.removeClass('active')
                        image.removeClass('trans-media')

                        gsap.set(image, {
                            zIndex: 0 - count
                        })

                        let tl = gsap.timeline();

                        tl.fromTo(image, {

                            y: '0%'
                        }, {

                            y: '-100%',
                            duration: 1.5,
                            ease: 'power3.inOut'
                        }, 0)

                        tl.fromTo(image.children('div'), {

                            y: '0%',
                            scale: 1
                        }, {

                            y: '100%',
                            scale: 1.3,
                            duration: 1.5,
                            ease: 'power3.inOut'
                        }, 0)

                    })

                    $this.find('a').on('click', function () {

                        $this.off('mouseleave')


                    })


                })


                let portfolioFilters = portfolio.find('.portfolio-list-filters'),
                    filterCats = portfolioFilters.find('li'),
                    projectsLength = projects.length;

                filterCats.each(function () {

                    let $this = $(this),
                        id = $this.attr('id'),
                        length;

                    id == 'all' ? length = projectsLength : length = portfolio.find('.' + id).length;

                    $this.on('click', () => {

                        id == 'all' ? portfolio.removeClass('filtered') : portfolio.addClass('filtered');

                        filterCats.removeClass('active');
                        $this.addClass('active');

                        if (id === 'all') {
                            projects.removeClass('op-down')

                        } else {
                            projects.removeClass('op-down')
                            projects.not('.' + id).addClass('op-down');

                        }




                    })

                });

            }



        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaprojectsgrid.default', function ($scope, $) {

            naylaPortfolio();

            if ($scope.find('.has-anim').length) {

                $scope.find('.has-anim').each(function () {
                    new naylaGeneralAnimations($(this));

                })

            }


            function naylaPortfolio() {

                let portfolio = $scope.find('.portfolio-grid');

                portfolio.each(function () {

                    let portfolio = $(this),
                        controls = portfolio.children('.grid-controls'),
                        projectsWrapper = portfolio.children('.grid-projects-wrapper'),
                        padTop = parseInt(projectsWrapper.css('paddingTop'), 10),
                        projects = projectsWrapper.find('.grid-project'),
                        viewText = portfolio.data('view-text'),
                        hovers = portfolio.data('hovers').split(' '),
                        projectsLength = projects.length,
                        lineCount = Math.floor(projectsLength / 2),
                        projectsHeight = projects.outerHeight(),
                        projectsWidth = projects.outerWidth(),
                        gridGap = parseInt(projectsWrapper.css('gap'), 10),
                        columns = 2,
                        hoverImage, hoverCursor, hoverArrow,
                        count = portfolio.data('total');


                    portfolio.hasClass('col-3') ? columns = 3 : '';
                    portfolio.hasClass('col-4') ? columns = 4 : '';

                    hovers.includes('imageMask') ? hoverImage = true : '';
                    hovers.includes('cursor') ? hoverCursor = true : '';
                    hovers.includes('imageMask') ? hoverArrow = true : '';
                    projectHovers(projectsWrapper.find('.grid-project'));

                    // Hovers
                    function projectHovers(projects) {

                        projects.each(function (i) {

                            i++
                            let $this = $(this),
                                image = $this.find('img'),
                                metas = $this.find('.grid-project-meta').children('div'),
                                title = $this.find('.grid-project-title'),
                                category = $this.find('.grid-project-category'),
                                titleText = title.text();

                            $this.addClass('project_' + i);
                            $this.attr('data-index', i)

                            if (hovers.includes('classic')) {

                                portfolio.addClass('hover-classic')


                                metas.children('span').length ? '' : metas.wrapInner('<span></span>');

                                title.children('span').attr('data-hover', titleText)

                            }

                            if (hoverImage) {
                                portfolio.addClass('hover-imageMask');
                                image.clone().addClass('masked').insertAfter(image)
                            }


                            // Parallax Images 
                            if (portfolio.hasClass('parallax-on')) {

                                gsap.to(image.not('masked'), {
                                    y: -100,

                                    scrollTrigger: {
                                        trigger: $this,
                                        scrub: 2,
                                    }
                                })

                            }

                            $this.find('a').hover(
                                () => {
                                    $this.find('.project-image').addClass('trans-media')
                                },
                                () => {
                                    $this.find('.project-image').removeClass('trans-media')
                                }
                            );

                        })
                    }
                    // Create seperators
                    function createSeperators(lengths) {

                        portfolio.find('hr').remove();

                        if (!portfolio.hasClass('masonry')) {

                            let line = '<hr></hr>',
                                i = 1;

                            projectsWrapper.find('.grid-project:visible').each(function (i) {
                                i++
                                $(this).attr('data-current-index', i)

                            })

                            for (i = 1; i < lengths; i++) {

                                i % columns == 0 ? $(line).insertAfter(projectsWrapper.find('.grid-project:visible[data-current-index="' + i + '"]')) : '';
                            }
                        }
                    }
                    createSeperators(projectsLength);


                    // Filtering
                    if (portfolio.hasClass('filterable')) {

                        let portfolioFilters = portfolio.find('.portfolio-filters'),
                            filterCats = portfolioFilters.find('li');

                        filterCats.each(function () {

                            let $this = $(this),
                                id = $this.attr('id'),
                                length;

                            id == 'all' ? length = projectsLength : length = portfolio.find('.' + id).length;

                            $this.append('<span class="projects-length">(' + length + ')</span>');

                            $this.on('click', () => {

                                id == 'all' ? portfolio.removeClass('filtered') : portfolio.addClass('filtered');

                                let projects = $scope.find('.grid-project');

                                filterCats.removeClass('active');
                                $this.addClass('active');

                                let state = Flip.getState(projects);

                                if (id === 'all') {
                                    projects.show();
                                    portfolio.hasClass('grid-list') ? '' : createSeperators(projectsLength);
                                } else {
                                    projects.show();
                                    projects.not('.' + id).hide();
                                    let visibleLength = projectsLength - projects.not('.' + id).length;

                                    portfolio.hasClass('grid-list') ? '' : createSeperators(visibleLength);
                                }

                                if (portfolio.hasClass('grid-list')) {

                                    Flip.from(state, {
                                        duration: 1,
                                        scale: false,
                                        ease: "expo.out",
                                        stagger: 0,
                                        absolute: true,
                                        absoluteOnLeave: true,
                                        onEnter: elements => gsap.fromTo(elements, {
                                            opacity: 0,
                                            x: 25
                                        }, {
                                            opacity: 1,
                                            x: 0
                                        }),
                                        onLeave: elements => gsap.to(elements, {
                                            opacity: 0,
                                            x: -25

                                        })
                                    });


                                } else {

                                    Flip.from(state, {
                                        duration: 1,
                                        scale: false,
                                        ease: "expo.out",
                                        stagger: 0,
                                        absolute: true,
                                        absoluteOnLeave: true,
                                        onUpdate: () => {
                                            ScrollTrigger.refresh(true)
                                            ScrollTrigger.update(true)
                                        },
                                        onEnter: elements => gsap.fromTo(elements, {
                                            opacity: 0,
                                            scale: 0
                                        }, {
                                            opacity: 1,
                                            scale: 1,

                                        }),
                                        onLeave: elements => gsap.to(elements, {
                                            opacity: 0,
                                            scale: 0,

                                        })
                                    });

                                }



                            })

                        });

                        function filtersVisible() {

                            let state = Flip.getState(filterCats);

                            portfolioFilters.toggleClass('hovered')

                            Flip.from(state, {
                                duration: 1,
                                ease: 'expo.out',
                                absolute: false,
                                absoluteOnLeave: true,
                                onEnter: elements => gsap.fromTo(elements, {
                                    opacity: 0,

                                }, {
                                    opacity: 0.5,
                                    stagger: 0.05
                                }),
                                onLeave: elements => gsap.to(elements, {
                                    opacity: 0,
                                    stagger: -0.05
                                })
                            })
                        }

                        portfolioFilters.hover(
                            () => filtersVisible(),
                            () => filtersVisible()
                        );
                    }

                    // Layout Switch 

                    let switchGrid = portfolio.find('.switch-grid'),
                        switchList = portfolio.find('.switch-list');

                    // List
                    switchList.on('click', () => {

                        let projects = $scope.find('.grid-project');

                        switchList.addClass('active');
                        switchGrid.removeClass('active');

                        gsap.to(portfolio.find('hr'), {
                            opacity: 0,
                        })

                        gsap.to(projects, {
                            clipPath: 'inset(0% 0% 100% 0%)',
                            y: -25,
                            duration: .75,
                            ease: 'circ.inOut',
                            onComplete: () => {
                                portfolio.removeClass('hover-arrow hover-imageMask hover-cursor');
                                portfolio.find('hr').remove();
                                portfolio.find('img.masked').remove();
                                portfolio.addClass('grid-list');
                                portfolio.find('.grid-project-meta > *');
                                $('<span class="g-list-arrow material-icons">arrow_outward</span>').insertBefore(projects.find('.grid-project-wrap .grid-project-meta > div:last-child'))

                                projects.each(function (i) {

                                    let delay = 0 + (i / 8)

                                    gsap.fromTo($(this).find('.grid-project-meta > *'), {
                                        y: 50
                                    }, {
                                        y: 0,
                                        duration: 1.5,
                                        ease: 'expo.out',
                                        delay: delay,
                                        stagger: 0.04,
                                        onStart: () => {

                                            portfolio.addClass('animating');
                                            $(this).addClass('gl-inview');

                                            gsap.set(projects, {
                                                clearProps: 'clipPath'
                                            })

                                        },
                                        onComplete: () => {
                                            portfolio.removeClass('animating');
                                            ScrollTrigger.refresh(true)
                                            ScrollTrigger.update(true)

                                        }
                                    })

                                })
                            }
                        })

                    });


                    // Grid
                    switchGrid.on('click', () => {

                        let projects = $scope.find('.grid-project');

                        switchGrid.addClass('active');
                        switchList.removeClass('active');

                        portfolio.addClass('animating');
                        projects.removeClass('gl-inview');


                        gsap.to(portfolio.find('.grid-project-meta > *'), {
                            opacity: 0,
                            duration: .75,
                            ease: 'expo.out',
                            onComplete: () => {

                                gsap.set('.grid-project-meta > *', {
                                    clearProps: 'all'
                                })

                                let currLength = projectsWrapper.find('.grid-project:visible').length;
                                portfolio.removeClass('grid-list');

                                createSeperators(currLength);
                                portfolio.find('.g-list-arrow').remove();
                                portfolio.removeClass('animating');

                                gsap.fromTo(projects, {
                                    clipPath: 'inset(100% 0% 0% 0%)',
                                    y: 100
                                }, {
                                    clipPath: 'inset(0% 0% 0% 0%)',
                                    y: 0,
                                    duration: 1.5,
                                    ease: 'expo.out',
                                    stagger: 0,

                                })
                                projectHovers(projectsWrapper.find('.grid-project'));
                                ScrollTrigger.refresh(true)
                                ScrollTrigger.update(true)

                            }
                        })

                    })


                    var loadMore = $scope.find('.projects-load-more'),
                        loadClicks = 0,
                        currentWrapper = $scope.find('.grid-projects-wrapper'),
                        baseHeight = currentWrapper.outerHeight(),
                        startLength = $scope.find('.grid-project').length;

                    loadMore.on('click', function () {

                        loadClicks++

                        event.preventDefault();

                        // Build the URL based on form data
                        var apiUrl = $(location).attr('href') + '?offset=' + loadClicks;

                        $.ajax({
                            type: 'GET',
                            url: apiUrl,
                            beforeSend: function () {

                                loadMore.addClass('posts-loading')

                                $('html').addClass('loading');
                                $('#mouseCursor').removeClass('hover-size hover-text hover-icon');

                            },
                            success: function (response) {

                                setTimeout(function () {

                                    let newPosts = $(response).find('.grid-projects-wrapper').find('.grid-project');

                                    if (newPosts.length) {

                                        newPosts.each(function () {

                                            let $this = $(this);
                                            $this.appendTo(currentWrapper);



                                            loadMore.removeClass('posts-loading')
                                            $('html').removeClass('loading');

                                            naylaMouseCursor()
                                        })


                                        currentWrapper.find('.grid-project').length == count ? loadMore.addClass('hidden') : '';

                                        if ($scope.find('.has-anim').not('.is-inview').length) {

                                            $scope.find('.has-anim').not('.is-inview').each(function () {
                                                new naylaGeneralAnimations($(this));

                                            })

                                        }

                                        if ($scope.find('.nayla-video').length) {

                                            $scope.find('.nayla-video').each(function () {

                                                naylaVideo($(this));

                                            })
                                        }


                                        if (!portfolio.hasClass('grid-list')) {

                                            projectHovers(newPosts);

                                            createSeperators($scope.find('.grid-project').length)

                                        } else {

                                            newPosts.addClass('gl-inview');

                                            $('<span class="g-list-arrow material-icons">arrow_outward</span>').insertBefore(newPosts.find('.grid-project-wrap .grid-project-meta > div:last-child'))
                                        }

                                        $scope.find('.portfolio-filters li').each(function () {

                                            let $this = $(this),
                                                id = $this.attr('id'),
                                                length;

                                            id == 'all' ? length = $scope.find('.grid-project').length : length = $scope.find('.' + id).length;

                                            $this.find('.projects-length').text('(' + length + ')')

                                        });


                                    } else {

                                        gsap.to(loadMore, {
                                            opacity: 0
                                        })
                                    }

                                }, 100)

                            },
                            error: function (error) {
                                console.log(error)
                            }
                        });


                    })


                })

            }

            if ($scope.find('.nayla-video').length) {

                naylaVideo($scope.find('.nayla-video'))
            }



        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylashowcasecards.default', function ($scope, $) {

            showcaseCards();

            function showcaseCards() {

                let showcaseCards = $scope.find('.showcase-cards');

                showcaseCards.each(function () {
                    let cards = $(this),
                        wrapper = cards.find('.ssv-projects-wrap'),
                        item = cards.find('.showcase-project'),
                        speed = cards.data('speed'),
                        length = item.length,
                        height = item.outerHeight(),
                        scEnd = height * length;

                    item.clone().addClass('clone').appendTo(wrapper)
                    item.clone().appendTo(wrapper)

                    item = cards.find('.showcase-project');

                    item.each(function (i) {

                        $(this).addClass('anim-project')

                        $(this).addClass('anim-project_' + i)

                        gsap.set($(this), {
                            zIndex: 100 - i
                        })
                        gsap.set($(this), {
                            z: -i * 100,
                            y: -i * 30,

                        })

                        $(this).attr('data-z', -i * 100)
                        $(this).attr('data-y', -i * 30);


                        $(this).on('mouseenter', function () {


                            $(this).find('.project-image').addClass('transition--media')
                            $(this).addClass('active')

                        })

                        $(this).on('mouseleave', function () {

                            $(this).find('.project-image').removeClass('transition--media');
                            $(this).removeClass('active')

                        })

                        $(this).on('click', function () {

                            $(this).off('mouseleave');

                        })

                    })

                    cards.find('.clone').each(function (i) {

                        $(this).removeAttr('data-index')
                        $(this).removeClass('anim-project');
                        $(this).attr('data-index', i)
                        $(this).addClass('clone-project_' + i)

                    })

                    cards.find('.anim-project').each(function (i) {

                        $(this).attr('data-index', i)

                    })

                    let tl = gsap.timeline({
                        ease: 'none',

                    })

                    let sct = new ScrollTrigger.create({
                        animation: tl,
                        trigger: cards,
                        pin: true,
                        start: 'top top',
                        end: scEnd * 3,
                        scrub: true,
                    });

                    cards.find('.anim-project').each(function (i) {

                        tl.to($(this), {
                            ease: 'none',
                            y: $(this).data('y') + (cards.find('.clone').length * 30),
                            z: $(this).data('z') + (cards.find('.clone').length * 100),
                            onUpdate: () => {

                                let cloneItem = cards.find('.clone-project_' + $(this).data('index'))

                                gsap.set(cloneItem, {
                                    ease: 'none',
                                    y: $(this).css('transform').split(',')['13'] - (cards.find('.clone').length * 30),
                                    z: $(this).css('transform').split(',')['14'] - (cards.find('.clone').length * 100),

                                })

                            },
                        }, 0)


                        let cardOut = gsap.timeline();

                        cardOut.to($(this), {
                            ease: 'none',
                            bottom: '-100vh'
                        })

                        ScrollTrigger.create({
                            trigger: $(this),
                            start: i * (height * 3),
                            end: (i + 1) * (height * 3),
                            scrub: true,
                            animation: cardOut
                        })

                    })

                    const lenis = new Lenis({

                        infinite: true,
                        smooth: true,
                        infinite: true,
                        smoothTouch: false,
                        duration: 2

                    });

                    function raf(time) {
                        lenis.raf(time);
                        ScrollTrigger.update();
                        requestAnimationFrame(raf);
                    }

                    requestAnimationFrame(raf);

                    barba.hooks.beforeLeave(() => {

                        lenis.destroy();
                    });



                })

            }
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylashowcasetable.default', function ($scope, $) {


            if ($scope.find('.nayla-video').length) {

                naylaVideo($scope.find('.nayla-video'))
            }

            showcaseTable()

            function showcaseTable() {

                let mainWrap = $scope.find('.showcase-table');

                mainWrap.each(function () {

                    let $this = $(this),
                        srWrap = $this.find('.st-wrapper'),
                        project = $this.find('.showcase-project'),
                        itemWidth = project.outerWidth(),
                        itemHeight = project.outerHeight(),
                        top = window.innerHeight / 3 - 50,
                        left = window.innerWidth / 3 - 100;


                    var itemsTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: $this,
                        }
                    })

                    project.each(function (i) {

                        let item = $(this),
                            random = gsap.utils.random,
                            rotate = gsap.utils.random(-45, 45);

                        item.find('a').on('mouseenter', function () {

                            item.addClass('hovered')
                            item.find('.project-image').addClass('transition--media')

                            gsap.to(item, {
                                scale: 1.1
                            })

                        })

                        item.find('a').on('mouseleave', function () {

                            item.removeClass('hovered');
                            item.find('.project-image').removeClass('transition--media')
                            gsap.to(item, {
                                scale: 1
                            })

                        })

                        item.find('a').on('click', function () {

                            item.find('a').off('mouseleave');
                        })

                        var itemsDrag = Draggable.create(item, {
                            type: "left,top",
                            edgeResistance: 0.75,
                            id: 'dragger_item_' + i,
                            bounds: {
                                top: -item.outerHeight() / 2,
                                left: -item.outerWidth() / 2,
                                width: $this.outerWidth() + (item.outerWidth() * 1.5),
                                height: $this.outerHeight() + (item.outerWidth() * 1.5)
                            },
                            dragResistance: 0.35,
                            inertia: true,
                            onThrowUpdate: () => {

                            },
                            zIndexBoost: true,
                            allowEventDefault: true,
                            onPress: () => {

                                item.addClass('dragging')

                            },
                            onRelease: () => {

                                item.removeClass('dragging')

                            },
                            onDrag: (e) => {}
                        });


                        item.attr('data-rotate', random)

                        if (i === 0) {

                            itemsTl.to(item, {
                                top: random(-40, top),
                                left: random(-100, left),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        } else if (i === 1) {

                            itemsTl.to(item, {
                                top: random(-40, top),
                                left: random(left, left * 2),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        } else if (i === 2) {

                            itemsTl.to(item, {
                                top: random(-40, top),
                                left: random(left * 2, left * 3),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        } else if (i === 3) {

                            itemsTl.to(item, {
                                top: random(top, top * 2),
                                left: random(-100, left),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, 0)
                        } else if (i === 4) {

                            itemsTl.to(item, {
                                top: random(top, top * 2),
                                left: random(left, left * 2),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        } else if (i === 5) {

                            itemsTl.to(item, {
                                top: random(top, top * 2),
                                left: random(left * 2, left * 3),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        } else if (i === 6) {

                            itemsTl.to(item, {
                                top: random(top * 2, top * 3),
                                left: random(-40, left),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        } else if (i === 7) {

                            itemsTl.to(item, {
                                top: random(top * 2, top * 3),
                                left: random(left, left * 2),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        } else if (i === 8) {

                            itemsTl.to(item, {
                                top: random(top * 2, top * 3),
                                left: random(left * 2, left * 3),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))

                        } else if (i >= 9) {

                            itemsTl.to(item, {
                                top: random(top * 2, top * 3),
                                left: random(left * 2, left * 3),
                                rotate: rotate,
                                duration: 2,
                                delay: 0,
                                ease: 'expo.out'
                            }, random(0.1, 0.5))
                        }

                    })


                    matchMedia.add({
                        isMobile: "(max-width: 450px)"

                    }, (context) => {

                        let {
                            isMobile
                        } = context.conditions;

                        itemsTl.kill();

                        gsap.set(project, {
                            clearProps: 'all'
                        })

                        project.each(function () {

                            Draggable.get($(this)).kill();

                        })

                        return () => {}
                    });



                })

            }

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylashowcaselist.default', function ($scope, $) {

            showcaseList();

            if ($scope.find('.nayla-video').length) {

                naylaVideo($scope.find('.nayla-video'))
            }

            function showcaseList() {

                var sflWrap = $scope.find('.showcase-list');

                sflWrap.each(function () {

                    let $this = $(this),
                        projectsWrap = $this.find('.sfl-projects-wrap'),
                        speed = $this.attr('data-speed'),
                        wrapHeight = projectsWrap.outerHeight(),
                        end = speed == null ? wrapHeight + 1000 : (wrapHeight + parseInt(speed)),
                        transVal = $(window).outerHeight() - wrapHeight,
                        project = $this.find('.showcase-project'),
                        overlay = $this.find('.sc-overlay');


                    project.each(function (i) {

                        i++
                        let $this = $(this),
                            image = $this.find('.project-image'),
                            img = image.find('img'),
                            findImage = '.image_' + i,
                            imgSrc = image.find('img').attr('src'),
                            secondary = $this.find('a');


                        i >= 10 ? $this.attr('data-index', i) : $this.attr('data-index', '0' + i);


                        image.addClass('image_' + i);

                        $this.on('mouseenter', function (e) {

                            let mouseLeft = e.clientX,
                                myLeft = mouseLeft - $this.offset().left;

                            project.not($this).addClass('op-down')
                            $this.addClass('hovered')
                            $this.find('.project-image').addClass('transition--media')

                            gsap.set($this, {
                                zIndex: 2
                            });

                            gsap.fromTo(image, {
                                scale: .5,
                                opacity: .5
                            }, {
                                scale: 1,
                                opacity: 1
                            })

                            gsap.set(image, {
                                left: myLeft,
                                rotate: event.movementX / 7,

                            })

                        });

                        $this.on('mousemove', function (e) {

                            let mouseLeft = e.clientX,
                                myLeft = mouseLeft - $this.offset().left,
                                bright = 'brightness(' + event.movementX + ')';

                            gsap.to(image, {
                                left: myLeft,
                                rotate: event.movementX / 7,
                                duration: 1,
                                ease: 'power3.out',
                            })



                        })

                        projectsWrap.on('mouseleave', function () {

                            gsap.to(overlay, {
                                backgroundColor: 'transparent',

                            })

                        })



                        $this.on('mouseleave', function () {

                            gsap.set($this, {
                                clearProps: 'all'
                            });

                            project.removeClass('op-down');
                            project.removeClass('hovered');
                            project.find('.project-image').removeClass('transition--media')

                        })

                        $this.find('a').on('click', () => {
                            $this.off('mouseleave')
                        })




                    })



                })


            }

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaminimallist.default', function ($scope, $) {

            showcaseMinimalList();

            if ($scope.find('.nayla-video').length) {

                naylaVideo($scope.find('.nayla-video'))
            }

            function showcaseMinimalList() {

                var mainWrap = $scope.find('.showcase-minimal-list');

                mainWrap.each(function () {

                    var mainWrap = $(this),
                        projectsWrap = mainWrap.find('.sml-projects-wrap'),
                        pwHeight = projectsWrap.outerHeight(),
                        project = projectsWrap.find('.showcase-project'),
                        projectsLength = project.length,
                        images = mainWrap.find('.sml-images'),
                        overlay = mainWrap.find('.sfc-overlay'),
                        animation = mainWrap.data('animation'),
                        speed = mainWrap.data('speed'),
                        colorAnim;

                    let startY = 0;

                    if (mainWrap.hasClass('infinity')) {

                        project.clone().addClass('clone clone-next').appendTo(projectsWrap.find('.sml-wrap'))

                        project.clone().addClass('clone clone-prev prev-el').prependTo(projectsWrap.find('.sml-wrap'))

                        let prevHeight = mainWrap.find('.clone-prev').length * mainWrap.find('.clone-prev').innerHeight(),
                            cloneLength = (window.innerHeight / 2) / prevHeight;

                        if (cloneLength >= 1) {

                            let e = 0

                            for (e = 1; e < cloneLength; e++) {

                                project.clone().addClass('clone clone-next').appendTo(projectsWrap.find('.sml-wrap'))

                                project.clone().addClass('clone clone-prev').prependTo(projectsWrap.find('.sml-wrap'))
                            }

                        }

                        startY = -1 * mainWrap.find('.clone-prev').innerHeight() * mainWrap.find('.clone-prev').length

                        const lenis = new Lenis({
                            smooth: true,
                            infinite: true,
                            smoothTouch: true,
                            lerp: 0.001,
                        });

                        function raf(time) {

                            lenis.raf(time);

                            requestAnimationFrame(raf);
                        }

                        requestAnimationFrame(raf);

                        barba.hooks.beforeLeave(() => {

                            lenis.destroy();

                        });

                    }


                    project = projectsWrap.find('.showcase-project')
                    colorAnim = true;

                    if (!mainWrap.hasClass('animate-colors')) {

                        colorAnim = false

                    }
                    project.each(function (i) {

                        let $this = $(this),
                            title = $this.find('.project-title'),
                            image = $this.find('.project-image');

                        animation ? title.addClass('has-anim-text ' + animation) : '';

                        $this.find('a').addClass('showcase-project-link');

                        if (colorAnim == true) {

                            projectColorSettings($this);

                        }

                        if (!$this.hasClass('clone')) {

                            $this.attr('data-index', (i - mainWrap.find('.clone-prev').length))

                            image.addClass('image_' + (i - mainWrap.find('.clone-prev').length)).appendTo(images);


                            $this.addClass('project_' + (i - mainWrap.find('.clone-prev').length));
                        }

                    })

                    gsap.set(projectsWrap, {
                        y: startY
                    })

                    let sct = new ScrollTrigger.create({
                        trigger: mainWrap,
                        start: 'top top',
                        end: speed,
                        pin: true,
                        scrub: true
                    })

                    mainWrap.find('.project_0').addClass('active')
                    mainWrap.find('.image_0').addClass('active')
                    mainWrap.find('.image_0').addClass('trans-media')
                    mainWrap.find('.image_0').show();

                    layoutChange(overlay, $('.project_0'), projectsWrap.find('a'))

                    window.addEventListener('scroll', function () {
                        let progY = (scrollY / speed) * (project.outerHeight(true) * projectsLength);
                        gsap.set(projectsWrap, {
                            y: startY - progY
                        })
                        let activeIndex = Math.floor((scrollY / speed) * projectsLength),
                            activeProject = mainWrap.find('.project_' + activeIndex),
                            activeImage = images.find('.image_' + activeIndex),
                            path = activeProject.data('mask'),
                            bgColor = activeProject.data('background-color'),
                            elementsColor = activeProject.data('elements-color');
                        activeProject.addClass('active')
                        activeProject.nextAll().removeClass('active')
                        activeProject.prevAll().removeClass('active');

                        images.find('.project-image').hide();
                        images.find('.project-image').removeClass('active');
                        images.find('.project-image').removeClass('trans-media');

                        $(activeImage).show();

                        $(activeImage).addClass('active');
                        $(activeImage).addClass('trans-media');


                        layoutChange(overlay, activeProject, projectsWrap.find('a'))
                        changeHeaderStatus()
                    })
                })
            }

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylafullscreenslideshow.default', function ($scope, $) {

            showcaseFullscreenSlideshow();

            function showcaseFullscreenSlideshow() {

                var fullscreenSlideshow = $scope.find('.showcase-fullscreen-slideshow');

                if ($scope.find('.nayla-video').length) {

                    naylaVideo($scope.find('.nayla-video'))
                }

                fullscreenSlideshow.each(function () {

                    let fsSlideshow = $(this),
                        projects = fsSlideshow.find('.showcase-project'),
                        images = fsSlideshow.find('.fs-images-slider'),
                        footer = fsSlideshow.find('.showcase-footer'),
                        current = fsSlideshow.find('.sfs-current'),
                        total = fsSlideshow.find('.sfs-total'),
                        headerChange, footerChange;

                    current.html('01')
                    total.html(projects.length < 10 ? '0' + projects.length : projects.length)

                    headerChange = false;
                    footerChange = false;


                    if (fsSlideshow.hasClass('header-change')) {
                        headerChange = true;
                        siteHeader.addClass('mx-difference');
                    }

                    if (fsSlideshow.hasClass('footer-change')) {
                        footerChange = true;
                        footer.addClass('mx-difference');
                    }

                    projects.each(function (i) {

                        let $this = $(this),
                            image = $this.find('.project-image'),
                            layout = $this.data('layout'),
                            elements = $this.find('.project-inner, .project-button a'),
                            title = $this.find('.project-title'),
                            cat = $this.find('.project-category'),
                            summary = $this.find('.project-summary');


                        $this.addClass('wrapper');

                        new SplitText([cat, summary], {
                            type: 'words',
                            wordsClass: 'pd_word'
                        })

                        $this.find('.pd_word').wrapInner('<span></span>')

                        new SplitText(title, {
                            type: 'words, chars',
                            wordsClass: 'pt_word',
                            charsClass: 'pt_char'
                        })

                        $this.find('.pt_char').wrapInner('<span></span>')

                        $this.addClass('project_' + i);
                        $this.attr('data-index', i);

                        image.addClass('swiper-slide image_' + i).wrapInner('<div class="fs-parallax-wrap"><div class="slide-bgimg"></div></div>').appendTo(images.find('.swiper-wrapper'));
                    })




                    let link = $('.project_0 a').attr('href');
                    $('.project-button > a').attr('href', link);
                    $('.project-button > a').addClass('sc-link');

                    $('.project_0').addClass('active')

                    images.find('.project-image').first().find('.fs-parallax-wrap').addClass('transition--media');

                    function headerMainChange(color, delay1, delay2) {


                        let hsl = gsap.utils.splitColor(color, true),
                            lightness = hsl[hsl.length - 1];

                        setTimeout(function () {

                            if ((lightness > 50) && (lightness != 0)) {

                                fsSlideshow.removeClass('temp_dark')
                                fsSlideshow.addClass('temp_light')


                            } else if ((lightness < 50) && (lightness != 0)) {

                                fsSlideshow.removeClass('temp_light')
                                fsSlideshow.addClass('temp_dark');
                            }


                        }, delay1)

                        setTimeout(function () {

                            if ((lightness > 50) && (lightness != 0)) {

                                siteHeader.removeClass('temp_dark')
                                siteHeader.addClass('temp_light')

                            } else if ((lightness < 50) && (lightness != 0)) {

                                siteHeader.removeClass('temp_light')
                                siteHeader.addClass('temp_dark')
                            }

                        }, delay2)

                    }

                    let firtsColor = fsSlideshow.find('.project_0').data('elements-color');
                    headerMainChange(firtsColor, 0, 0)

                    var interleaveOffset = 0.7,
                        imagesSwiper = new Swiper(".fs-images-slider", {
                            autoplay: fsSlideshow.hasClass('autoplay-on') ? true : false,
                            speed: 1000,
                            slidesPerView: 1,
                            init: false,
                            edgeSwipeDetection: true,
                            mousewheel: fsSlideshow.hasClass('mousewheel-on') ? true : false,
                            direction: 'vetical',
                            parallax: true,
                            allowTouchMove: true,
                            watchSlideProgress: true,
                            on: {
                                slideChange: function () {
                                    let swiper = this,
                                        projectIn = fsSlideshow.find('.project_' + swiper.activeIndex),
                                        projectOut = fsSlideshow.find('.project_' + swiper.previousIndex),
                                        outMetas = projectOut.find('.pd_word > span'),
                                        outTitle = projectOut.find('.pt_char > span'),
                                        outButton = projectOut.find('.project-button > span'),
                                        inButton = projectIn.find('.project-button > span'),
                                        inMetas = projectIn.find('.pd_word > span'),
                                        inTitle = projectIn.find('.pt_char > span');

                                    projectIn.addClass('active');
                                    projectOut.removeClass('active');

                                    $('.fs-parallax-wrap').removeClass('transition--media');
                                    images.find('.image_' + swiper.activeIndex).find('.fs-parallax-wrap').addClass('transition--media');


                                    let bgaColor = projectIn.data('elements-color');

                                    if (swiper.activeIndex > swiper.previousIndex) {

                                        headerMainChange(bgaColor, 350, 750)

                                        gsap.set([outMetas, outTitle, inMetas, inTitle], {
                                            clearProps: 'all'
                                        })

                                        let metasOut = gsap.to(outMetas, {
                                            yPercent: -100,
                                            ease: 'power3.in',
                                            duration: .4,
                                            stagger: 0.01,

                                        });
                                        gsap.to(outTitle, {
                                            yPercent: -100,
                                            ease: 'power3.in',
                                            duration: .4,
                                            stagger: 0.01,
                                            onComplete: () => {
                                                projectOut.hide();
                                            }
                                        })

                                        gsap.from(inTitle, {
                                            yPercent: 100,
                                            ease: 'power3.out',
                                            duration: .6,
                                            stagger: 0.02,
                                            delay: .6,
                                            onStart: () => {
                                                projectIn.show();
                                            }
                                        })


                                        gsap.from(inMetas, {
                                            yPercent: 100,
                                            ease: 'power3.out',
                                            duration: .6,
                                            stagger: 0.03,
                                            delay: 1
                                        })

                                        gsap.from(inButton, {
                                            yPercent: 100,
                                            xPercent: -100,
                                            ease: 'power3.out',
                                            duration: .6,
                                            stagger: 0.03,
                                            delay: 1
                                        })

                                    } else {

                                        //Prev Animation

                                        headerMainChange(bgaColor, 750, 350)
                                        gsap.set([outMetas, outTitle, inMetas, inTitle], {
                                            clearProps: 'all'
                                        })

                                        gsap.to(outMetas, {
                                            yPercent: 100,
                                            ease: 'power3.in',
                                            duration: .4,
                                            stagger: 0.01
                                        });

                                        gsap.to(outTitle, {
                                            yPercent: 100,
                                            ease: 'power3.in',
                                            duration: .4,
                                            stagger: 0.01,
                                            onComplete: () => {
                                                projectOut.hide();
                                            }
                                        })

                                        gsap.from(inTitle, {
                                            yPercent: -100,
                                            ease: 'power3.out',
                                            duration: .6,
                                            stagger: 0.02,
                                            delay: .6,
                                            onStart: () => {
                                                projectIn.show();
                                            }
                                        })


                                        gsap.from(inMetas, {
                                            yPercent: -100,
                                            ease: 'power3.out',
                                            duration: .6,
                                            stagger: -0.03,
                                            delay: 1
                                        })

                                        gsap.from(inButton, {
                                            yPercent: 100,
                                            xPercent: -100,
                                            ease: 'power3.out',
                                            duration: .6,
                                            stagger: 0.03,
                                            delay: 1
                                        })



                                    };

                                    let activeProj = fsSlideshow.find('.showcase-project.active'),
                                        bgColor = activeProj.data('background-color');

                                },
                                progress: function () {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        let slideProgress = swiper.slides[i].progress,
                                            innerOffset = swiper.height * interleaveOffset,
                                            innerTranslate = slideProgress * innerOffset;

                                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                            "translateY(" + innerTranslate + "px)";
                                    }
                                },
                                setTransition: function (speed) {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        swiper.slides[i].style.transition = speed + "ms";
                                        swiper.slides[i].querySelector(".slide-bgimg").style.transition = 1000 + "ms";
                                    }
                                },
                                slideChangeTransitionEnd: function () {

                                    let swiper = this;

                                    let link = $('.showcase-project.active a').attr('href');
                                    $('.project-button > a').attr('href', link)


                                    current.html($('.showcase-project.active').data('index') < 10 ? '0' + ($('.showcase-project.active').data('index') + 1) : ($('.showcase-project.active').data('index') + 1))


                                    if (($('body').innerHeight()) > ($(window).outerHeight())) {

                                        if (swiper.slides.length == (swiper.activeIndex + 1)) {

                                            swiper.mousewheel.disable();

                                            ScrollTrigger.create({
                                                trigger: fsSlideshow,
                                                start: 'top top',
                                                end: 'center top',
                                                onLeave: function () {

                                                },
                                                onLeaveBack: (self) => {

                                                    setTimeout(function () {


                                                        self.kill();
                                                        swiper.mousewheel.enable();

                                                    }, 1000)

                                                }
                                            })

                                        }

                                    }

                                }

                            }
                        });


                    let prev = $scope.find('.sfs-prev'),
                        next = $scope.find('.sfs-next');

                    next.on('click', function () {
                        if (!imagesSwiper.isEnd) {

                            imagesSwiper.slideNext();


                        } else {
                            imagesSwiper.slideTo(0, 1000);
                        }

                    })

                    prev.on('click', function () {
                        imagesSwiper.slidePrev();

                    })


                    $(document).ready(function () {

                        imagesSwiper.init();

                    })

                })

            }

            naylaCircleText();

            function naylaCircleText() {
                let circularText = $scope.find(".nayla-circular-text");
                circularText.each(function (i) {
                    let $this = $(this),
                        textWrap = $this.find('.circular-text-wrap'),
                        circularContent = $this.find(".circular-text-content"),
                        dataHeight = $this.data("height"),
                        dataDuration = $this.data("duration"),
                        dataTarget = $this.data('target'),
                        circleSplit = new SplitText($this.find('.circle-text'), {
                            type: "words, chars",
                            charsClass: "circle-char",
                            wordsClass: "circle-word",
                            position: "absolute"
                        }),
                        fontSize = parseInt($this.find('.circle-char').css('font-size')),
                        charLenght = $this.find('.circle-char').length,
                        textLenght = (dataHeight / charLenght) / (fontSize / 1.75),
                        circleChar = $this.find('.circle-char'),
                        circleWord = $this.find('.circle-word'),
                        snap = gsap.utils.snap(1),
                        dataIcon = $this.data('icon');

                    for (i = 2; i <= snap(textLenght); i++) {
                        circularContent.clone().appendTo(textWrap)
                    }


                    gsap.set($this.find(".circular-text-content"), {
                        width: dataHeight,
                        height: dataHeight
                    })

                    $this.find('.circle-word').append("<span class='circle-char'></span>")

                    $this.find('.circle-word').each(function (i) {
                        let $this = $(this)
                        gsap.set($this, {
                            left: '50%',
                            top: 0,
                            height: "100%",
                            xPercent: -50
                        })
                    })

                    let char = $this.find('.circle-char'),
                        circleText = $this.find('.circle-text');
                    char.each(function (i) {
                        i++;
                        let $this = $(this),
                            rotateMultiplier = 360 / (char.length);
                        gsap.set($this, {
                            rotate: rotateMultiplier * i,
                            left: '50%',
                            xPercent: -50,
                            top: 0,
                            height: "50%"
                        })
                    })
                    gsap.set(textWrap, {
                        width: dataHeight,
                        height: dataHeight
                    })
                    let tl = gsap.timeline()
                    if ($this.hasClass('counter-clockwise')) {
                        tl.to(textWrap, {
                            rotate: -360,
                            duration: dataDuration,
                            ease: "none",
                            repeat: -1
                        })
                    } else {
                        tl.to(textWrap, {
                            rotate: 360,
                            duration: dataDuration,
                            ease: "none",
                            repeat: -1
                        })
                    }

                    let whaler = Hamster(document.querySelector('body')),
                        wheelDeltaY, currentDeltaY;

                    function createWheelStopListener(element, callback, timeout) {
                        var handle = null;
                        var onScroll = function () {
                            if (handle) {
                                clearTimeout(handle);
                            }
                            handle = setTimeout(callback, timeout || 200); // default 200 ms
                        };
                        element.addEventListener('wheel', onScroll);
                        return function () {
                            element.removeEventListener('wheel', onScroll);
                        };
                    }

                    whaler.wheel(function (event, delta, deltaX, deltaY) {

                        wheelDeltaY = event.deltaY;

                        event.deltaY < 0 ? wheelDeltaY = -1 * event.deltaY : '';

                        tl.timeScale(1 + (wheelDeltaY * 2))

                    });

                    createWheelStopListener(window, function () {

                        tl.timeScale(1)

                    });



                    $this.on('click', function () {
                        gsap.to(window, {
                            scrollTo: dataTarget,
                            ease: "power3.out",
                            duration: 3
                        })
                    })
                })
            }


        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylafullscreencarousel.default', function ($scope, $) {

            showcaseFullscreenCarousel();

            function showcaseFullscreenCarousel() {

                var showcaseFullscreenCarousel = $scope.find('.showcase-fullscreen-carousel');

                showcaseFullscreenCarousel.each(function (i) {
                    i++

                    let mainWrap = $(this),
                        projectsWrap = mainWrap.find('.fc-slideshow-wrap'),
                        projects = projectsWrap.find('.showcase-project'),
                        imagesWrap = mainWrap.find('.fc-images-slider'),
                        overlay = mainWrap.find('.sfc-overlay'),
                        footer = mainWrap.find('.showcase-footer'),
                        dragger = mainWrap.find('.dragging-class'),
                        frac = mainWrap.find('.sfc-fraction'),
                        curr = frac.find('.sfc-current'),
                        tot = frac.find('.sfc-total'),
                        cat = mainWrap.find('.sfc-categories'),
                        headerChange, footerChange, colorAnim;


                    curr.html('01')
                    tot.html(projects.length > 9 ? projects.length : '0' + projects.length)


                    colorAnim = false;

                    if (mainWrap.hasClass('animate-colors')) {
                        colorAnim = true
                    }

                    projectsWrap.addClass('swiper-container').wrapInner('<div class="swiper-wrapper"></div>')


                    projects.each(function (i) {

                        let $this = $(this),
                            title = $this.find('.project-title'),
                            image = $this.find('.project-image');


                        colorAnim ? projectColorSettings($this) : '';

                        $this.attr('data-index', i)
                        title.attr('data-hover', title.find('*').text())
                        $this.addClass('project_' + i)

                        $this.find('a').addClass('sc-link');

                        image.addClass('swiper-slide s-img_' + i).wrapInner('<div class="fs-parallax-wrap"><div class="slide-bgimg"></div></div>').appendTo(imagesWrap.find('.swiper-wrapper'));

                        $this.addClass('swiper-slide');

                    })

                    imagesWrap.find('.nayla-video').each(function () {

                        naylaVideo($(this))

                    })


                    colorAnim ? layoutChange(overlay, $('.project_0'), projectsWrap) : '';

                    imagesWrap.find('.project-image').first().find('.fs-parallax-wrap').addClass('transition--media')

                    var titlesSlider = new Swiper('.fc-slideshow-wrap', {
                            slidesPerView: 'auto',
                            centeredSlides: true,
                            speed: 1500,
                            noSwiping: true,
                            slideToClickedSlide: true,
                            allowTouchMove: false,
                            mousewheel: {
                                invert: false,
                                eventsTarget: '.dragging-class'

                            }
                        }),
                        interleaveOffset = 0.5,
                        imagesSlider = new Swiper('.fc-images-slider', {
                            slidesPerView: 1,
                            speed: 1500,
                            parallax: true,
                            noSwiping: true,
                            watchSlideProgress: true,
                            on: {
                                slideChange: function () {

                                    projects.removeClass('active');

                                    gsap.set(dragger, {
                                        x: (this.snapGrid[this.activeIndex - 1] * -1) / projLength
                                    })

                                    if (colorAnim == true) {

                                        let act = projectsWrap.find('.project_' + this.activeIndex);
                                        layoutChange(overlay, act, projectsWrap);

                                        $('.fs-parallax-wrap').removeClass('transition--media');
                                        $('.s-img_' + this.activeIndex).find('.fs-parallax-wrap').addClass('transition--media');

                                        let category = act.find('.project-category').text();

                                        gsap.to(cat, {
                                            duration: 1.5,
                                            text: {
                                                value: category,

                                            },
                                            ease: "expo.out"
                                        });


                                    }

                                },
                                slideChangeTransitionEnd: function () {

                                    let index = $('.showcase-project.swiper-slide-active').data('index') + 1;



                                    curr.html(index > 9 ? index : '0' + index)

                                },
                                progress: function () {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        let slideProgress = swiper.slides[i].progress,
                                            innerOffset = swiper.width * interleaveOffset,
                                            innerTranslate = slideProgress * innerOffset;

                                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                            "translateX(" + innerTranslate + "px)";
                                    }
                                },
                                setTransition: function (speed) {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        swiper.slides[i].style.transition = speed + "ms";
                                        swiper.slides[i].querySelector(".slide-bgimg").style.transition = 1500 + "ms";
                                    }
                                },
                            }

                        });

                    function checkActiveProject() {

                        projects.each(function () {

                            let $this = $(this),
                                projWidth = Math.PI * $this.outerWidth(),
                                projLeft = Math.PI * $this.offset().left,
                                activeLine = (Math.PI * $(window).outerWidth()) / 2,
                                deadLine = activeLine - (projWidth * 0.5),
                                index = $this.data('index'),
                                bgColor = $this.data('background-color'),
                                elementsColor = $this.data('elements-color');

                            if ((projLeft < activeLine) && (projLeft > deadLine)) {

                                $this.addClass('active');

                                imagesSlider.slideTo(index, 1500);

                                $('.fs-parallax-wrap').removeClass('transition--media');
                                $('.s-img_' + this.activeIndex).find('.fs-parallax-wrap').addClass('transition--media');


                            } else {

                                $this.removeClass('active')
                            }
                        })

                    }

                    checkActiveProject();

                    let wrapWidth = mainWrap.find('.swiper-wrapper').outerWidth(),
                        snapGrid = titlesSlider.snapGrid,
                        draggerEnd = -1 * snapGrid[snapGrid.length - 1],
                        firstTranslate = titlesSlider.getTranslate(),
                        projLength = projects.length;

                    dragger.css('width', wrapWidth)

                    var titlesDrag = Draggable.create(dragger, {
                        type: 'x',
                        bounds: {
                            minX: 0,
                            //                    minX: titlesSlider.getTranslate(),
                            maxX: draggerEnd / projLength
                        },
                        lockAxis: true,
                        inertia: false,
                        zIndexBoost: false,
                        dragResistence: 1,
                        onPress: self => {

                            titlesSlider.disable();
                            mainWrap.addClass('dragging');
                            $('.swiper-slide-active').addClass('active');
                            gsap.set(projectsWrap.find('.swiper-wrapper'), {
                                clearProps: 'transition-duration'
                            });

                            if (colorAnim == true) {
                                let project = projectsWrap.find('.showcase-project.swiper-slide-active');
                                layoutChange(overlay, project, projectsWrap)
                            }

                            gsap.to([siteHeader, mainWrap.find('.showcase-footer, .sfc-fraction')], {
                                opacity: 0,
                                duration: .3
                            })

                        },
                        onDrag: self => {
                            let currentTransform = dragger.css('transform'),
                                gimmeThat = currentTransform.split(" ")[4].replace(/\,/g, ''),
                                myVal = gimmeThat * projLength;


                            gsap.to(projectsWrap.find('.swiper-wrapper'), {
                                x: myVal,

                            })

                            if (gimmeThat == 0) {
                                titlesDrag[0].applyBounds({
                                    minX: firstTranslate,
                                    maxX: draggerEnd / projLength
                                })
                            }
                            if (gimmeThat > 0) {
                                titlesDrag[0].applyBounds({
                                    minX: firstTranslate / projLength,
                                    maxX: draggerEnd / projLength
                                })
                            }
                            gsap.ticker.add(checkActiveProject);

                            if (colorAnim == true) {
                                let project = projectsWrap.find('.showcase-project.active');
                                layoutChange(overlay, project, projectsWrap)
                            }



                        },
                        onRelease: self => {

                            gsap.ticker.remove(checkActiveProject);
                            mainWrap.removeClass('dragging');

                            let activeProj = projectsWrap.find('.showcase-project.active').data('index');

                            gsap.to([siteHeader, mainWrap.find('.showcase-footer, .sfc-fraction')], {
                                opacity: 1,
                                duration: .5,
                                delay: .3
                            })

                            gsap.to(projectsWrap.find('.swiper-wrapper'), {
                                x: snapGrid[activeProj] * -1,

                                onComplete: () => {
                                    projects.removeClass('active')
                                    titlesSlider.enable();
                                    titlesSlider.slideTo(activeProj, 1500);
                                    titlesSlider.update();

                                }
                            })



                        }

                    });

                    titlesSlider.controller.control = imagesSlider;

                })

            }
        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylainfinitetabs.default', function ($scope, $) {
            naylaInfiniteTabs()

            function naylaInfiniteTabs() {
                let naylaInfiniteTab = $scope.find('.nayla-infinite-tabs');

                naylaInfiniteTab.each(function () {
                    let $this = $(this),
                        tabTitleWrap = $this.find('.tab-title-wrap'),
                        tabTitle = $this.find('.tab-title');

                    $this.find('.tab-content').each(function (i) {
                        i++;
                        $(this).addClass('data-index_' + i)
                    })

                    tabTitle.each(function (i) {
                        i++;
                        $(this).attr('data-index', i)
                    })

                    tabTitle.on('click', function () {
                        tabTitle.removeClass('active')
                        $(this).addClass('active');

                        let prevWidth = 0;

                        $(this).prevAll().each(function (i) {
                            prevWidth += parseInt($(this).outerWidth(true), 10)
                        })
                        gsap.to(tabTitleWrap, {
                            x: -1 * prevWidth,
                            duration: 1.5,
                            ease: 'expo.out',
                            onStart: () => {

                                let tl = gsap.timeline()

                                tl.to($this.find('.tab-content'), {
                                    opacity: 0,
                                    duration: $this.data('duration') / 2,
                                    onComplete: () => {
                                        $this.find('.tab-content').hide()
                                        $this.find('.tab-content.data-index_' + $(this).data('index')).show()
                                    }
                                })

                                tl.to($this.find('.tab-content.data-index_' + $(this).data('index')), {
                                    opacity: 1,
                                    duration: $this.data('duration') / 2
                                })

                                gsap.to($this.find('.tab-contents-wrap'), {
                                    height: $this.find('.tab-content.data-index_' + $(this).data('index')).outerHeight(true)
                                })

                            },
                            onComplete: () => {

                                $(this).prevAll().appendTo(tabTitleWrap)
                                gsap.set(tabTitleWrap, {
                                    x: 0
                                })
                            }
                        })
                    })

                })

                //        function updateOnResize() {
                //            prevWidth = 0
                //            $(this).prevAll().each(function (i) {
                //                prevWidth += parseInt($(this).outerWidth(true), 10)
                //                $this.find('.tab-content.data-index_' + $(this).data('index')).outerHeight(true)
                //            })
                //        }
                //        matchMedia.add(isPhone, () => {
                //            updateOnResize()
                //        });
                //        matchMedia.add(isTablet, () => {
                //            updateOnResize()
                //        });
                //        matchMedia.add(isDesktop, () => {
                //            updateOnResize()
                //        });
            }


        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaproductcategorytabs.default', function ($scope, $) {
            naylaInfiniteTabs()

            function naylaInfiniteTabs() {
                let naylaInfiniteTab = $scope.find('.nayla-infinite-tabs');

                naylaInfiniteTab.each(function () {
                    let $this = $(this),
                        tabTitleWrap = $this.find('.tab-title-wrap'),
                        tabTitle = $this.find('.tab-title');

                    $this.find('.tab-content').each(function (i) {
                        i++;
                        $(this).addClass('data-index_' + i)
                    })

                    tabTitle.each(function (i) {
                        i++;
                        $(this).attr('data-index', i);

                        $(this).clone().removeClass('active').addClass('tab-title-clone').appendTo(tabTitleWrap)
                    })


                    tabTitle = $this.find('.tab-title');

                    tabTitle.on('click', function () {

                        tabTitle.removeClass('active')
                        $(this).addClass('active');

                        let prevWidth = 0;

                        $(this).prevAll().each(function (i) {
                            prevWidth += parseInt($(this).outerWidth(true), 10)
                        })

                        gsap.to(tabTitleWrap, {
                            x: -1 * prevWidth,
                            duration: 1.5,
                            ease: 'expo.out',
                            onStart: () => {

                                let tl = gsap.timeline()

                                tl.to($this.find('.tab-content'), {
                                    opacity: 0,
                                    duration: $this.data('duration') / 2,
                                    onComplete: () => {
                                        $this.find('.tab-content').hide()
                                        $this.find('.tab-content.data-index_' + $(this).data('index')).show()
                                    }
                                })

                                tl.to($this.find('.tab-content.data-index_' + $(this).data('index')), {
                                    opacity: 1,
                                    duration: $this.data('duration') / 2
                                })

                                gsap.to($this.find('.tab-contents-wrap'), {
                                    height: $this.find('.tab-content.data-index_' + $(this).data('index')).outerHeight(true)
                                })

                            },
                            onComplete: () => {

                                $(this).prevAll().appendTo(tabTitleWrap)
                                gsap.set(tabTitleWrap, {
                                    x: 0
                                })
                            }
                        })
                    })

                })

                //        function updateOnResize() {
                //            prevWidth = 0
                //            $(this).prevAll().each(function (i) {
                //                prevWidth += parseInt($(this).outerWidth(true), 10)
                //                $this.find('.tab-content.data-index_' + $(this).data('index')).outerHeight(true)
                //            })
                //        }
                //        matchMedia.add(isPhone, () => {
                //            updateOnResize()
                //        });
                //        matchMedia.add(isTablet, () => {
                //            updateOnResize()
                //        });
                //        matchMedia.add(isDesktop, () => {
                //            updateOnResize()
                //        });
            }

            naylaDynamicCarousel();

            function naylaDynamicCarousel() {

                const carousel = $scope.find('.nayla-dynamic-carousel');

                carousel.each(function () {

                    let carousel = $(this),
                        wrapper = carousel.children('.carousel--wrapper'),
                        items = wrapper.children('.carousel--item'),
                        end,
                        length = items.length,
                        parentLeft,
                        next = carousel.find('.carousel--next'),
                        prev = carousel.find('.carousel--prev'),
                        animation = carousel.data('animation'),
                        customPin = carousel.data('pin'),
                        speed = carousel.data('scroll-speed'),
                        carouselDrag,
                        wrapScroll,
                        val;

                    val = 0;
                    end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);
                    parentLeft = carousel.offset().left,

                        carousel.find('.carousel--total').html(length);

                    items.each(function (i) {

                        let $this = $(this);

                        $this.attr('data-index', i);
                        $this.addClass('carousel--item--' + i);

                        if (carousel.hasClass('parallax-on')) {

                            $this.find('img').wrap('<div class="parallax-wrap"></div>');
                            $this.find('.parallax-wrap').css('height', $this.find('img').outerHeight());
                            $this.find('.parallax-wrap').css('width', $this.find('img').outerWidth());

                            $this.find('img').wrap('<div class="parallax-inner"></div>')

                            $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            $(window).on('resize', () => {

                                $this.find('.parallax-wrap').css('width', $this.outerWidth());
                                $this.find('.parallax-inner').css('width', mobileQuery.matches ? 'calc(100% + 50px)' : 'calc(100% + 100px)');

                            })
                        }


                    })

                    function getCurrentItem() {

                        items.each(function () {

                            let $this = $(this),
                                pad = $this.css('paddingRight'),
                                entrance = $this.offset().left,
                                deadLine = $this.offset().left + $this.outerWidth(),
                                center = $(window).outerWidth() / 2;

                            entrance < center && center < deadLine ? $this.addClass('active') : $this.removeClass('active');

                            let activeItem = wrapper.find('.carousel--item.active');

                            items.removeClass('prev next');
                            prev.removeClass('disabled');
                            next.removeClass('disabled');

                            !activeItem.next().length ? next.addClass('disabled') : activeItem.next().addClass('next');
                            !activeItem.prev().length ? prev.addClass('disabled') : activeItem.prev().addClass('prev');


                            activeItem.data('index') == null ? '' : carousel.find('.carousel--current').html(activeItem.data('index') + 1);


                            if (carousel.hasClass('parallax-on')) {

                                let piv = ScrollTrigger.positionInViewport(this, 'right', true) * (mobileQuery.matches ? 50 : 100);

                                if ($this.find('.parallax-inner').length) {
                                    gsap.to($this.find('img'), {
                                        x: Math.floor(-piv)
                                    })
                                }

                            }

                        })
                    }

                    getCurrentItem();

                    function navDrag() {

                        carouselDrag = Draggable.create(wrapper, {
                            type: 'x',
                            bounds: {
                                minX: 0,
                                maxX: -end
                            },
                            lockAxis: true,
                            dragResistance: 0.5,
                            inertia: true,
                            onThrowUpdate: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            },
                            zIndexBoost: false,
                            onDrag: () => {
                                getCurrentItem();
                                val = carouselDrag[0].x * -1
                            }
                        });

                    }

                    function navScroll() {

                        let endtrigger = speed == null ? 'bottom+=3000 bottom' : 'bottom+=' + speed + ' bottom',
                            start = customPin == null ? 'center center' : 'top top',
                            pinTarget = customPin == null ? carousel : customPin,
                            endNumber = speed == null ? 1000 : 1000 + speed;




                        if (carousel.hasClass('items-bottom')) {

                            start = 'bottom bottom'

                        }

                        //                carousel.find('.carousel-controls') ? start = 'center center+=50' : '';

                        wrapScroll = gsap.timeline({
                            scrollTrigger: {
                                trigger: pinTarget,
                                start: start,
                                end: carousel.offset().top < $(window).outerHeight() ? endNumber : endtrigger,
                                pin: true,
                                id: 'caroScroll',
                                scrub: 1,
                                pinReparent: $('body').hasClass('smooth-scroll') ? true : false,
                                onLeaveBack: () => getCurrentItem(),
                                onEnterBack: () => getCurrentItem(),
                                onScrubComplete: () => getCurrentItem(),
                                onEnter: () => getCurrentItem(),
                                onLeave: () => getCurrentItem(),
                                onUpdate: () => getCurrentItem()
                            }
                        });



                        wrapScroll.to(wrapper, {
                            x: -end,

                        })

                    }

                    var snaps;

                    function getSnaps() {

                        snaps = items.map(function () {
                            if (mobileQuery.matches) {
                                return -($(this).position().left + ($(this).outerWidth()) + parentLeft);
                            } else {
                                return -($(this).position().left + ($(this).outerWidth() / 2) + parentLeft);
                            }
                        }).get();



                    }

                    function navPrevNext() {

                        next.on('click', function () {

                            getSnaps();
                            let nextProj = wrapper.find('.carousel--item.next'),
                                marg = parseInt(nextProj.css('marginRight')),
                                index = nextProj.data('index') - 1

                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? snaps[index] : snaps[index] + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })

                        prev.on('click', function () {

                            getSnaps();

                            let prevProj = wrapper.find('.carousel--item.prev'),
                                marg = parseInt(prevProj.css('marginRight')),
                                index = prevProj.data('index') - 1,
                                val = snaps[index];

                            val == null ? val = 0 : '';
                            gsap.to(wrapper, {
                                x: mobileQuery.matches ? val : val + marg,
                                duration: 1.5,
                                ease: 'expo.out',
                                onUpdate: () => {
                                    getCurrentItem();
                                    carouselDrag ? carouselDrag[0].update() : '';
                                }
                            })

                        })
                    }


                    carousel.hasClass('navScroll') ? navScroll() : navDrag();

                    carousel.find('.carousel--navigation').length ? navPrevNext() : '';




                    matchMedia.add({
                        isMobile: "(max-width: 450px)"

                    }, (context) => {

                        let {
                            isMobile
                        } = context.conditions;

                        gsap.set(wrapper, {
                            x: 0
                        })

                        gsap.set(wrapper.find('img'), {
                            clearProps: 'transform'
                        })

                        parentLeft = carousel.offset().left;

                        gsap.set(items.find('img'), {
                            clearProps: 'transform'
                        })

                        end = wrapper.outerWidth() - items.last().outerWidth();

                        if (carouselDrag) {

                            carouselDrag[0].applyBounds({
                                minX: 0,
                                maxX: -end
                            })

                            carouselDrag[0].update()
                        }


                        if (wrapScroll) {
                            wrapScroll.clear()

                            wrapScroll.to(wrapper, {
                                x: -end,

                            })

                        }

                        return () => {


                            gsap.set(wrapper.find('img'), {
                                clearProps: 'transform'
                            })

                            gsap.set(wrapper, {
                                x: 0
                            })
                            parentLeft = carousel.offset().left;

                            gsap.set(items.find('img'), {
                                clearProps: 'transform'
                            })

                            end = wrapper.outerWidth() - items.last().outerWidth() - (items.last().outerWidth() / 2);

                            if (carouselDrag) {
                                carouselDrag[0].applyBounds({
                                    minX: 0,
                                    maxX: -end
                                })
                                carouselDrag[0].update()
                            }

                            if (wrapScroll) {
                                wrapScroll.clear()

                                wrapScroll.to(wrapper, {
                                    x: -end,

                                })

                            }




                        }
                    });


                })

            }

            $scope.find('.tab-content').not('.active').hide();


        });
        elementorFrontend.hooks.addAction('frontend/element_ready/naylafullscreenwall.default', function ($scope, $) {


            showcaseFullscreenWall();

            function showcaseFullscreenWall() {



                var main = $scope.find('.showcase-fullscreen-wall');

                main.each(function () {

                    let parent = $(this),
                        wrapper = parent.find('.sfw-projects-wrapper'),
                        projects = wrapper.find('.showcase-project'),
                        switcList = parent.find('.switch-titles'),
                        switchImages = parent.find('.switch-images'),
                        animation = parent.data('animation');


                    projects.each(function (i) {
                        i++

                        let $this = $(this),
                            image = $this.find('.project-image'),
                            title = $this.find('.project-title');

                        $this.find('a').addClass('sc-link')

                        new SplitText(title, {
                            type: 'lines',
                            linesClass: 'title_line'
                        })

                        image.css('width', image.outerWidth())
                        image.css('height', image.outerHeight())

                        $this.attr('data-index', i);

                        $this.on('mousemove', function (e) {

                            let mouseLeft = e.clientX,
                                mouseTop = e.clientY,
                                myLeft = mouseLeft - $this.offset().left,
                                myTop = mouseTop - $this.offset().top,
                                movX = event.movementX < 0 ? event.movementX * -1 : event.movementX;

                            gsap.to(image, {
                                left: myLeft,
                                top: myTop,
                                rotate: gsap.utils.clamp(-10, 10, (event.movementX / 5)),
                                duration: 1,
                                ease: 'power3.out',
                            })



                        })

                        $this.on('mouseenter', function () {

                            parent.addClass('hovered')
                            $this.addClass('current')
                            $this.find('.project-image').addClass('transition--media')

                        })

                        $this.on('mouseleave', function () {

                            parent.removeClass('hovered')
                            $this.removeClass('current')
                            $this.find('.project-image').removeClass('transition--media');

                        })

                        $this.find('a').on('click', function () {

                            $this.off('mouseleave');
                            gsap.to($this.find('img'), {
                                scale: 1
                            })
                        })

                        if (animation) {

                            title.find('.title_line').addClass('has-anim-text')
                            title.find('.title_line').addClass(animation)


                            title.find('.title_line').attr('data-delay', (i / 20))

                            $this.addClass('detect-pov')

                        }

                    });

                })




            }


        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylablogposts.default', function ($scope, $) {


            function postsGrid() {

                var grid = $scope.find('.nayla-posts-grid'),
                    loadMore = $scope.find('.nbp--load-more');


                grid.each(function () {


                    let grid = $(this),
                        filters = grid.find('.grid--filters .filters-list > li'),

                        switcher = grid.find('.grid--switcher');


                    filters.each(function () {

                        let $this = $(this),
                            cat = $this.data('category');

                        $this.on('click', function () {

                            let posts = grid.find('.grid--post--item');

                            filters.removeClass('active')
                            $this.addClass('active')

                            if (cat === 'all') {


                                let postsState = Flip.getState(posts);

                                posts.show();

                                Flip.from(postsState, {
                                    duration: 1,
                                    scale: false,
                                    ease: "expo.out",
                                    stagger: 0,
                                    absolute: true,
                                    absoluteOnLeave: true,
                                    onEnter: elements => gsap.fromTo(elements, {
                                        opacity: 0,
                                        scale: 0
                                    }, {
                                        opacity: 1,
                                        scale: 1,

                                    }),
                                    onLeave: elements => gsap.to(elements, {
                                        opacity: 0,
                                        scale: 0,

                                    })
                                });


                            } else {


                                let findCat = '.cat_' + cat,
                                    postsState = Flip.getState(posts);

                                posts.show();
                                posts.hide();
                                $(findCat).show();

                                Flip.from(postsState, {
                                    duration: 1,
                                    scale: false,
                                    ease: "expo.out",
                                    stagger: 0,
                                    absolute: true,
                                    absoluteOnLeave: true,
                                    onEnter: elements => gsap.fromTo(elements, {
                                        opacity: 0,
                                        scale: grid.hasClass('grid-list') ? 1 : 0,
                                    }, {
                                        opacity: 1,
                                        scale: 1,

                                    }),
                                    onLeave: elements => gsap.to(elements, {
                                        opacity: 0,
                                        scale: grid.hasClass('grid-list') ? 1 : 0,

                                    })
                                });

                            }

                        })

                    })


                    let switchCol = switcher.find('.switch-col'),
                        switchList = switcher.find('.switch-list');


                    switchCol.on('click', function () {

                        if (grid.hasClass('grid-list')) {

                            gsap.to(grid, {
                                opacity: 0,
                                onComplete: () => {
                                    grid.removeClass('grid-list');
                                    grid.addClass('grid-col');

                                    gsap.to(grid, {
                                        opacity: 1
                                    })
                                }

                            })


                        }


                    })

                    switchList.on('click', function () {

                        if (grid.hasClass('grid-col')) {

                            gsap.to(grid, {
                                opacity: 0,
                                onComplete: () => {
                                    grid.removeClass('grid-col');
                                    grid.addClass('grid-list');

                                    gsap.to(grid, {
                                        opacity: 1
                                    })
                                }
                            })
                        }

                    })

                })


                var loadClicks = 0,
                    currentWrapper = $scope.find('.grid--posts'),
                    baseHeight = currentWrapper.outerHeight(),
                    count = grid.data('total');

                loadMore.on('click', function () {

                    loadClicks++

                    event.preventDefault();

                    // Build the URL based on form data
                    var apiUrl = $(location).attr('href') + '?offset=' + loadClicks;

                    $.ajax({
                        type: 'GET',
                        url: apiUrl,
                        beforeSend: function () {

                            loadMore.addClass('posts-loading')

                            $('html').addClass('loading');
                            $('#mouseCursor').removeClass('hover-size hover-text hover-icon');

                        },
                        success: function (response) {
                            setTimeout(function () {

                                let newPosts = $(response).find('.grid--posts').find('.grid--post--item');

                                if (newPosts.length) {

                                    gsap.to(currentWrapper, {
                                        paddingBottom: baseHeight,
                                        duration: .5,
                                        ease: 'power2.inOut',
                                        onComplete: () => {

                                            newPosts.each(function () {

                                                let $this = $(this);

                                                $this.appendTo(currentWrapper);

                                                gsap.set(currentWrapper, {
                                                    clearProps: 'all'
                                                })

                                                gsap.fromTo($this, {
                                                    opacity: 0,
                                                    y: 20,
                                                }, {
                                                    opacity: 1,
                                                    y: 0,
                                                    duration: .5,
                                                    stagger: 0.2,
                                                    onComplete: () => {

                                                        loadMore.removeClass('posts-loading')
                                                        $('html').removeClass('loading');

                                                        naylaMouseCursor();

                                                        grid.find('.grid--post--item').length == count ? loadMore.addClass('hidden') : '';

                                                    }


                                                })



                                            })



                                        }
                                    })


                                } else {

                                    gsap.to(loadMore, {
                                        opacity: 0
                                    })
                                }




                            }, 100)

                        },
                        error: function (error) {

                        }
                    });


                })

            }

            postsGrid()

        })

        elementorFrontend.hooks.addAction('frontend/element_ready/naylashowcase3dtitles.default', function ($scope, $) {

            showcase3dTitles();


            function showcase3dTitles() {

                let showcase3dTitles = $scope.find('.showcase-3d-titles');


                showcase3dTitles.each(function () {



                    let $this = $(this),
                        projectsWrap = $this.find('.s3t-projects-wrap'),
                        project = $this.find('.showcase-project'),
                        imagesWrap = $this.find('.s3t-images'),
                        fontSize = parseInt($this.find('.project-title').css('font-size'));

                    $this.on('mousemove', function (e) {

                        let xTo = gsap.quickTo(imagesWrap, "left", {
                                duration: 0.6,
                                ease: "power3"
                            }),
                            yTo = gsap.quickTo(imagesWrap, "top", {
                                duration: 0.6,
                                ease: "power3"
                            });


                        function icko(e) {
                            xTo(e.pageX);
                            yTo(e.pageY - $this.offset().top);
                        }

                        icko(e)

                    });



                    project.first().addClass('active');

                    let projectLength = project.length,
                        rotateX = 360 / projectLength;

                    project.each(function (i) {
                        let $this = $(this),
                            image = $this.find('.project-image');

                        $this.data('index', i)

                        $(this).css('--rotateX', -1 * rotateX * i + "deg")

                        $(this).addClass('active-title_' + i)

                        if (270 > rotateX * i && 90 < rotateX * i) {
                            gsap.set($(this), {
                                opacity: 0
                            })
                        }

                        let count = 0;

                        $this.find('.project-title span').on('mouseenter', () => {

                            imagesWrap.addClass('active');

                            if ($this.hasClass('active')) {

                                imagesWrap.addClass('active');

                                let activeImage = $('.image_' + i).parent('.d-img');
                                activeImage.addClass('active')
                                activeImage.addClass('transition--media')


                                gsap.set(activeImage, {
                                    zIndex: 1
                                })



                                let tl = gsap.timeline();

                                tl.fromTo(activeImage, {

                                    y: '100%'
                                }, {

                                    y: '0%',
                                    duration: 1.5,
                                    ease: 'power3.inOut'
                                }, 0)

                                tl.fromTo(activeImage.children('div'), {

                                    scale: 1.3,
                                    y: '-100%'
                                }, {

                                    y: '0%',
                                    scale: 1,
                                    duration: 1.5,
                                    ease: 'power3.inOut'
                                }, 0)


                            }
                        })

                        $this.find('.project-title span').on('mouseleave', () => {

                            imagesWrap.removeClass('active');


                            count++

                            let image = $('.image_' + $this.data('index')).parent('.d-img');

                            image.removeClass('active')
                            image.removeClass('transition--media')

                            gsap.set(image, {
                                zIndex: 0 - count
                            })

                            let tl = gsap.timeline();

                            tl.fromTo(image, {

                                y: '0%'
                            }, {

                                y: '-100%',
                                duration: 1.5,
                                ease: 'power3.inOut'
                            }, 0)

                            tl.fromTo(image.children('div'), {

                                y: '0%',
                                scale: 1
                            }, {

                                y: '100%',
                                scale: 1.3,
                                duration: 1.5,
                                ease: 'power3.inOut'
                            }, 0)
                        })

                        $this.find('a').on('click', () => {
                            $this.find('.project-title span').off('mouseleave')


                        })

                    })


                    $this.css('--transformZ', projectLength * fontSize / 6.4 + "px");

                    let dsc = ScrollTrigger.create({
                        trigger: $this,
                        start: 'top top',
                        end: 10000,
                        pin: true,
                        scrub: true,

                    })

                    matchMedia.add({
                        isMobile: "(max-width: 550px)"

                    }, (context) => {
                        let {
                            isMobile
                        } = context.conditions;


                        $('.project-title span').off('mousemove')

                        return () => {

                            $('.project-title span').on('mousemove')


                        }
                    });



                    const lenis = new Lenis({
                        infinite: true,
                        smooth: true,
                        infinite: true,
                        smoothTouch: false,
                        duration: 2
                    });

                    window.addEventListener('scroll', function () {
                        gsap.set(projectsWrap, {
                            rotateX: this.scrollY / 10000 * 360
                        })
                        let activeIndex = Math.round(this.scrollY / 10000 * (project.length)),
                            rotateProgress = this.scrollY / 10000 * 360;
                        let positive = rotateProgress + 90,
                            negative = rotateProgress + 270;


                        if (positive > 360) {
                            positive = positive - 360
                        }
                        if (negative > 360) {
                            negative = negative - 360
                        }

                        $this.find('.active-title_' + activeIndex).addClass('active');

                        $this.find('.active-title_' + activeIndex).nextAll().removeClass('active')
                        $this.find('.active-title_' + activeIndex).prevAll().removeClass('active')


                        imagesWrap.find('.image_' + activeIndex).addClass('active')
                        imagesWrap.find('.image_' + activeIndex).prevAll().removeClass('active')
                        imagesWrap.find('.image_' + activeIndex).nextAll().removeClass('active')


                        project.each(function () {
                            let itemRotate = parseInt($(this).css('--rotateX')) * -1
                            if (negative - positive > 0) {
                                if (itemRotate > positive && itemRotate < negative) {
                                    gsap.set($(this), {
                                        opacity: 0
                                    })
                                } else {
                                    gsap.set($(this), {
                                        opacity: 1
                                    })
                                }
                            } else {
                                if (itemRotate < positive && itemRotate > negative) {
                                    gsap.set($(this), {
                                        opacity: 1
                                    })
                                } else {
                                    gsap.set($(this), {
                                        opacity: 0
                                    })
                                }
                            }
                        })
                    })


                    function raf(time) {
                        lenis.raf(time);
                        ScrollTrigger.update(true);
                        requestAnimationFrame(raf);
                    }
                    requestAnimationFrame(raf);

                    barba.hooks.beforeLeave(() => {

                        lenis.destroy();
                    });



                })
            }

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylashowcase3dtitlesold.default', function ($scope, $) {

            showcase3dTitles();

            function showcase3dTitles() {

                let showcase3dTitles = $scope.find('.showcase-3d-titles-old');

                showcase3dTitles.each(function () {

                    let $this = $(this),
                        projectsWrap = $this.find('.s3t-projects-wrap'),
                        project = $this.find('.showcase-project'),
                        imagesWrap = $this.find('.s3t-images'),
                        projectLength = project.length,
                        rotateX = 360 / projectLength,
                        fontSize = parseInt($this.find('.project-title').css('font-size'));

                    imagesWrap.addClass('transition--media');

                    project.each(function (i) {

                        let $this = $(this),
                            image = $this.find('.project-image');

                        $this.find('a').addClass('sc-link');

                        $this.find('a').on('click', () => {
                            $this.off('mouseleave')
                        })

                        $this.data('index', i)

                        image.addClass('image_' + i).appendTo(imagesWrap)

                        $(this).css('--rotateX', -1 * rotateX * i + "deg")
                        $(this).addClass('active-title_' + i)

                        $this.on('mouseenter', () => {

                            if ($this.hasClass('active')) {


                                imagesWrap.addClass('active')
                            }

                        })

                        $this.on('mouseleave', () => {

                            if ($this.hasClass('active')) {

                                let image = '.image_' + $this.data('index');


                                imagesWrap.removeClass('active')

                            }


                        })


                    })

                    $this.css('--transformZ', projectLength * fontSize / 6.4 + "px")


                    let endo = $(window).outerHeight() * projectLength / 3;

                    gsap.to(projectsWrap, {
                        rotateX: "360",
                        ease: "none",
                        scrollTrigger: {
                            trigger: $this,
                            pin: true,
                            start: "top-=10 top",
                            end: endo,
                            scrub: 1,
                            repeat: -1,
                            onUpdate: (self) => {
                                let prog = self.progress * projectLength,
                                    snap = gsap.utils.snap(1)


                                $this.find('.active-title_' + snap(prog) % projectLength).addClass('active')

                                $this.find('.active-title_' + snap(prog) % projectLength).prevAll().removeClass('active')

                                $this.find('.active-title_' + snap(prog) % projectLength).nextAll().removeClass('active');


                                let activeProj = $('.showcase-project.active'),
                                    image = '.image_' + activeProj.data('index');

                                $('.project-image').removeClass('active')
                                $(image).addClass('active')


                            },

                        }
                    })



                })

            }

        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylashowcasewall.default', function ($scope, $) {

            showcaseWall();

            function showcaseWall() {

                var wallWrap = $scope.find('.showcase-wall');

                wallWrap.each(function () {

                    let mainWrap = $(this),
                        wrapper = mainWrap.find('.showcase-wall-wrap,  .showcase-footer'),
                        overlay = mainWrap.find('.sw-overlay'),
                        project = mainWrap.find('.showcase-project'),
                        title = project.find('.project-title'),
                        projectWraps = mainWrap.find('.sw-projects-wrap'),
                        height = mainWrap.outerHeight(),
                        speed = mainWrap.data('speed'),
                        end = speed == null ? height + 1000 : height + speed,
                        tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: mainWrap,
                                scrub: 1,
                                pin: true,
                                start: 'top top',
                                end: end,
                                id: 'showcaseWallScroll'
                            }
                        });


                    if (mainWrap.hasClass('animate-in')) {

                        disableScroll();

                        mainWrap.addClass('animating');

                        new SplitText(title, {
                            type: 'chars',
                            charsClass: 'pt_char'
                        })

                        $('.sw-projects-wrap').each(function () {

                            let
                                $this = $(this),
                                char = $this.find('.pt_char'),
                                tl = gsap.timeline({
                                    onComplete: function () {
                                        mainWrap.removeClass('animating');
                                        enableScroll();
                                    }
                                });

                            tl.from($(this), {
                                x: 1000,
                                duration: 1.5,
                                ease: 'power2.out',
                            }, 0)

                            tl.fromTo(char, {
                                y: 200,
                            }, {
                                y: 0,
                                duration: 1.5,
                                ease: 'power2.out',
                                stagger: 0.02
                            }, 0)
                        })
                    }

                    projectWraps.each(function () {

                        let $this = $(this),
                            startPos = $this.data('start-pos'),
                            endPos = $this.data('end-pos');

                        tl.fromTo($this, {
                            xPercent: startPos,
                        }, {
                            xPercent: endPos
                        }, 0)

                    });



                    var layoutReset = gsap.delayedCall(0.1, layoutChange, [overlay, false, wrapper], {
                        oncomplete: () => {
                            wrapper.removeClass('dark light')
                        }
                    });
                    layoutReset.kill();


                    project.each(function (i) {

                        i++
                        let $this = $(this),
                            image = $this.find('.project-image'),
                            findImage = '.image_' + i,
                            img = image.find('img').attr('src'),
                            secondary = $this.find('a');


                        $this.attr('data-index', i);

                        $this.prepend('<span class="project-index">' + i + '</span>')

                        image.addClass('image_' + i)

                        mainWrap.hasClass('animate-colors') ? projectColorSettings($this) : '';


                        image.css('width', image.outerWidth())
                        image.css('height', image.outerHeight())

                        $this.attr('data-index', i);

                        $this.on('mousemove', function (e) {

                            let mouseLeft = e.clientX,
                                mouseTop = e.clientY,
                                myLeft = mouseLeft - $this.offset().left,
                                myTop = mouseTop - $this.offset().top + $(window).scrollTop(),
                                movX = event.movementX < 0 ? event.movementX * -1 : event.movementX;

                            gsap.to(image, {
                                left: myLeft,
                                top: myTop,
                                rotate: gsap.utils.clamp(-10, 10, (event.movementX / 5)),
                                duration: 1,
                                ease: 'power3.out',
                            })

                        })

                        $this.find('a').on('mouseenter', function () {

                            layoutReset.kill();

                            mainWrap.addClass('hovered');
                            $this.addClass('current');

                            image.addClass('transition--media')

                            mainWrap.hasClass('animate-colors') ? layoutChange(overlay, $this, wrapper) : '';


                        })

                        $this.find('a').on('mouseleave', function () {

                            mainWrap.removeClass('hovered')
                            $this.removeClass('current')

                            image.removeClass('transition--media')

                            mainWrap.hasClass('animate-colors') ? layoutReset.restart(true) : '';

                        })

                        $this.find('a').on('click', function () {


                            $this.find('a').off('mouseleave')

                        })

                    })


                    matchMedia.add({
                        isMobile: "(max-width: 550px)"

                    }, (context) => {
                        let {
                            isMobile
                        } = context.conditions;


                        tl.revert()



                        return () => {




                        }
                    });



                })


            }

        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylasingleimage.default', function ($scope, $) {


            if ($scope.find('.single-image').hasClass('lightbox-image')) {

                let lightbox = $scope.find('img');

                lightbox.each(function () {

                    let $this = $(this),
                        imgSrc = $this.attr('src'),
                        height = $this.outerHeight(),
                        parent = $this.parent('div.single-image'),
                        focus = parent.find('.lightbox-focus'),
                        flipImage;

                    $this.on('click', () => {

                        if (!parent.hasClass('lightbox-active')) {

                            gsap.set(parent, {
                                clearProps: 'all'
                            })


                            parent.css('height', height)

                            const state = Flip.getState($this, {
                                props: 'transform, left, x, y'
                            });

                            parent.addClass('lightbox-active');
                            parent.parents('.elementor-section , .elementor-column').addClass('lightbox-active')
                            parent.parents('.elementor-element').first().addClass('lightbox-active');

                            $this.addClass('img-lightbox-open');

                            focus.addClass('open');



                            flipImage = Flip.from(state, {
                                duration: 1.25,
                                ease: "expo.inOut",
                                absolute: true,
                                absoluteOnLeave: true,
                                prune: true,
                                simple: true,
                                onReverseComplete: () => {

                                    $this.removeClass('img-lightbox-open');
                                    parent.removeClass('lightbox-active');
                                    parent.parents('.elementor-section , .elementor-column').removeClass('lightbox-active')

                                    gsap.set([$this, parent], {
                                        clearProps: 'all'
                                    })

                                    Flip.killFlipsOf($this);

                                    enableScroll();
                                }

                            });

                            disableScroll()

                        }

                    })


                    focus.on('click', function () {

                        flipImage.reverse();
                        focus.removeClass('open')

                    })

                })

            }

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylamarquee.default', function ($scope, $) {

            naylaMarquee($scope.find('.nayla-marquee'));


        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylasingleproject.default', function ($scope, $) {

            if ($scope.find('.nayla-video').length) {

                let video = $scope.find('.nayla-video'),
                    wrap = $scope.find('.single-project-image');

                naylaVideo(video)


            }

        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylaaccordion.default', function ($scope, $) {

            naylaAccordion();

            function naylaAccordion() {
                let naylaAccordion = $scope.find('.nayla-accordion');

                naylaAccordion.each(function () {
                    let $this = $(this),
                        acrdTitle = $this.find('.accordion-title'),
                        acrdContent = $this.find('.accordion-content'),
                        activeContent = $this.find('.active > .accordion-content')

                    //                    acrdTitle.append('<span class="material-symbols-outlined accordion-toggle">' + icon + '</span>')


                    acrdContent.wrapInner("<div class='accordion-content-wrap'></div>")

                    $this.find('.accordion-content-wrap').each(function () {
                        $(this).css('height', $(this).outerHeight(true))
                    })

                    $this.find('.accordion-wrap').children().each(function (i) {
                        i++;
                        if (i < 10) {
                            $(this).attr('data-index', '0' + i)
                        } else {
                            $(this).attr('data-index', i)
                        }
                    })

                    acrdContent.css('height', 0)
                    activeContent.css('height', activeContent.children().outerHeight(true))

                    acrdTitle.on('click', function () {

                        let acrdItem = $(this).parent()
                        gsap.to(acrdContent, {
                            height: 0,
                            duration: .5,

                        })

                        if (acrdItem.hasClass('active')) {
                            acrdItem.removeClass('active')

                        } else {

                            acrdTitle.parent().removeClass('active')
                            $(this).parent().addClass('active')
                            gsap.to($(this).next(), {
                                height: $(this).next().children().outerHeight(true),
                                duration: .5,
                                onUpdate: () => {

                                    ScrollTrigger.refresh(true)
                                }
                            })
                            //
                            //                    gsap.to(window, {
                            //                        scrollTo: $('li.active').offset().top - 200,
                            //                        delay: dataDuration,
                            //
                            //                    })
                        }
                    })
                })
            }

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylacircletext.default', function ($scope, $) {

            naylaCircleText();

            function naylaCircleText() {
                let circularText = $scope.find(".nayla-circular-text");
                circularText.each(function (i) {
                    let $this = $(this),
                        textWrap = $this.find('.circular-text-wrap'),
                        circularContent = $this.find(".circular-text-content"),
                        dataHeight = $this.data("height"),
                        dataDuration = $this.data("duration"),
                        dataTarget = $this.data('target'),
                        circleSplit = new SplitText($this.find('.circle-text'), {
                            type: "words, chars",
                            charsClass: "circle-char",
                            wordsClass: "circle-word",
                            position: "absolute"
                        }),
                        fontSize = parseInt($this.find('.circle-char').css('font-size')),
                        charLenght = $this.find('.circle-char').length,
                        textLenght = (dataHeight / charLenght) / (fontSize / 1.75),
                        circleChar = $this.find('.circle-char'),
                        circleWord = $this.find('.circle-word'),
                        snap = gsap.utils.snap(1),
                        dataIcon = $this.data('icon');

                    for (i = 2; i <= snap(textLenght); i++) {
                        circularContent.clone().appendTo(textWrap)
                    }


                    gsap.set($this.find(".circular-text-content"), {
                        width: dataHeight,
                        height: dataHeight
                    })

                    $this.find('.circle-word').append("<span class='circle-char'></span>")

                    $this.find('.circle-word').each(function (i) {
                        let $this = $(this)
                        gsap.set($this, {
                            left: '50%',
                            top: 0,
                            height: "100%",
                            xPercent: -50
                        })
                    })

                    let char = $this.find('.circle-char'),
                        circleText = $this.find('.circle-text');
                    char.each(function (i) {
                        i++;
                        let $this = $(this),
                            rotateMultiplier = 360 / (char.length);
                        gsap.set($this, {
                            rotate: rotateMultiplier * i,
                            left: '50%',
                            xPercent: -50,
                            top: 0,
                            height: "50%"
                        })
                    })
                    gsap.set(textWrap, {
                        width: dataHeight,
                        height: dataHeight
                    })
                    let tl = gsap.timeline()
                    if ($this.hasClass('counter-clockwise')) {
                        tl.to(textWrap, {
                            rotate: -360,
                            duration: dataDuration,
                            ease: "none",
                            repeat: -1
                        })
                    } else {
                        tl.to(textWrap, {
                            rotate: 360,
                            duration: dataDuration,
                            ease: "none",
                            repeat: -1
                        })
                    }

                    let whaler = Hamster(document.querySelector('body')),
                        wheelDeltaY, currentDeltaY;

                    function createWheelStopListener(element, callback, timeout) {
                        var handle = null;
                        var onScroll = function () {
                            if (handle) {
                                clearTimeout(handle);
                            }
                            handle = setTimeout(callback, timeout || 200); // default 200 ms
                        };
                        element.addEventListener('wheel', onScroll);
                        return function () {
                            element.removeEventListener('wheel', onScroll);
                        };
                    }

                    whaler.wheel(function (event, delta, deltaX, deltaY) {

                        wheelDeltaY = event.deltaY;

                        event.deltaY < 0 ? wheelDeltaY = -1 * event.deltaY : '';

                        tl.timeScale(1 + (wheelDeltaY * 2))

                    });

                    createWheelStopListener(window, function () {

                        tl.timeScale(1)

                    });



                    $this.on('click', function () {
                        gsap.to(window, {
                            scrollTo: dataTarget,
                            ease: "power3.out",
                            duration: 3
                        })
                    })
                })
            }

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylatextwrapper.default', function ($scope, $) {


            var bump = $scope.find('.bump'),
                turn = $scope.find('.turn'),
                rotateX = $scope.find('.rotateX'),
                rotateY = $scope.find('.rotateY');

            if (bump.length) {

                let tl = gsap.timeline({
                    repeat: -1,
                })

                tl.fromTo(bump, {
                    scale: 0.6

                }, {
                    scale: 1,
                    ease: 'power4.inOut'
                })

                tl.to(bump, {
                    scale: 0.6
                })

            }

            if ($scope.find('.turn').length) {

                let turn = $scope.find('.turn');

                let tl = gsap.timeline({
                    repeat: -1,
                    repeatDelay: 1
                });

                tl.to(turn, {
                    rotate: 360,
                    duration: 2,
                    ease: 'expo.inOut'
                })


            }

            if ($scope.find('.rotateY').length) {

                let rotateY = $scope.find('.rotateY');

                let tl = gsap.timeline({
                    repeat: -1,
                });

                tl.to(rotateY, {
                    rotateY: 360,
                    duration: 2,
                    ease: 'none'
                })


            }

            if ($scope.find('.rotateX').length) {

                let rotateX = $scope.find('.rotateX');

                let tl = gsap.timeline({
                    repeat: -1,
                });



                tl.to(rotateX, {
                    rotateX: 360,
                    duration: 2,
                    ease: 'none'
                })


            }

            if ($scope.find('.slide-right').length) {

                let sRight = $scope.find('.slide-right');

                sRight.wrapInner('<span><span>')

                let tl = gsap.timeline({
                    repeat: -1,
                });

                tl.fromTo(sRight.children('span'), {
                    xPercent: 0,
                }, {
                    xPercent: 100,
                    ease: 'power3.in',
                    duration: .75
                })

                tl.fromTo(sRight.children('span'), {
                    xPercent: -100
                }, {
                    xPercent: 0,
                    duration: .75,
                    ease: 'power3.out',
                })

            }

            if ($scope.find('.slide-left').length) {

                let sLeft = $scope.find('.slide-left');

                sLeft.wrapInner('<span><span>')

                let tl = gsap.timeline({
                    repeat: -1,
                });

                tl.fromTo(sLeft.children('span'), {
                    xPercent: 0,
                }, {
                    xPercent: -100,
                    ease: 'power3.in',
                    duration: .75
                })

                tl.fromTo(sLeft.children('span'), {
                    xPercent: 100
                }, {
                    xPercent: 0,
                    duration: .75,
                    ease: 'power3.out',
                })

            }





        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaheading.default', function ($scope, $) {


            var bump = $scope.find('.bump'),
                turn = $scope.find('.turn'),
                rotateX = $scope.find('.rotateX'),
                rotateY = $scope.find('.rotateY');

            if (bump.length) {

                let tl = gsap.timeline({
                    repeat: -1,
                })

                tl.fromTo(bump, {
                    scale: 0.6

                }, {
                    scale: 1,
                    ease: 'power4.inOut'
                })

                tl.to(bump, {
                    scale: 0.6
                })

            }



            if ($scope.find('.turn').length) {

                let turn = $scope.find('.turn');

                let tl = gsap.timeline({
                    repeat: -1,
                    repeatDelay: 1
                });

                tl.to(turn, {
                    rotate: 360,
                    duration: 2,
                    ease: 'expo.inOut'
                })


            }

            if ($scope.find('.rotateY').length) {

                let rotateY = $scope.find('.rotateY');

                let tl = gsap.timeline({
                    repeat: -1,
                });

                tl.to(rotateY, {
                    rotateY: 360,
                    duration: 2,
                    ease: 'none'
                })


            }

            if ($scope.find('.rotateX').length) {

                let rotateX = $scope.find('.rotateX');

                let tl = gsap.timeline({
                    repeat: -1,
                });



                tl.to(rotateX, {
                    rotateX: 360,
                    duration: 2,
                    ease: 'none'
                })


            }

            if ($scope.find('.slide-right').length) {

                let sRight = $scope.find('.slide-right');

                sRight.wrapInner('<span><span>')

                let tl = gsap.timeline({
                    repeat: -1,
                });

                tl.fromTo(sRight.children('span'), {
                    xPercent: 0,
                }, {
                    xPercent: 100,
                    ease: 'power3.in',
                    duration: .75
                })

                tl.fromTo(sRight.children('span'), {
                    xPercent: -100
                }, {
                    xPercent: 0,
                    duration: .75,
                    ease: 'power3.out',
                })

            }

            if ($scope.find('.slide-left').length) {

                let sLeft = $scope.find('.slide-left');

                sLeft.wrapInner('<span><span>')

                let tl = gsap.timeline({
                    repeat: -1,
                });

                tl.fromTo(sLeft.children('span'), {
                    xPercent: 0,
                }, {
                    xPercent: -100,
                    ease: 'power3.in',
                    duration: .75
                })

                tl.fromTo(sLeft.children('span'), {
                    xPercent: 100
                }, {
                    xPercent: 0,
                    duration: .75,
                    ease: 'power3.out',
                })

            }





        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylatestimonials.default', function ($scope, $) {

            naylaTestimonials();

            function naylaTestimonials() {

                let testimonials = $scope.find('.nayla-testimonials');

                testimonials.each(function () {

                    let testimonials = $(this),
                        wrap = testimonials.find('.testimonials-wrapper'),
                        single = wrap.find('.testimonial'),
                        nav = testimonials.find('.testimonials-nav'),
                        avatars = single.find('.testimonial-avatar'),
                        prev = testimonials.find('.test-prev'),
                        next = testimonials.find('.test-next'),
                        current = testimonials.find('.test_current'),
                        total = testimonials.find('.test_total');

                    current.html('01')
                    total.html(single.length > 10 ? single.length : '0' + single.length)

                    avatars.append('<svg height="100%" width="100%" viewbox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg>')

                    wrap.css('height', single.first().outerHeight());
                    single.first().addClass('active');


                    let tl = gsap.timeline({
                        repeat: -1
                    });

                    single.each(function (i) {

                        let $this = $(this),
                            circle = $this.find('svg circle');

                        $this.addClass('testimonial_' + i)

                        $this.attr('data-index', i);

                        tl.to($this, {
                            opacity: 0,
                            duration: 0.5,
                            delay: 5,
                            onComplete: () => {
                                $this.removeClass('active');
                                $this.next().addClass('active');
                            }
                        }, 'label' + i)

                        tl.from(circle, 5, {
                            duration: 2,
                            drawSVG: 0,
                            onComplete: () => {
                                gsap.set(circle, {
                                    drawSVG: 0
                                })
                            }
                        }, 'label' + i);

                        if ($this.next().length) {

                            tl.to($this.next(), {
                                opacity: 1,
                                duration: 0.5,
                                delay: 6,
                                onStart: () => {
                                    current.html($this.next().data('index') + 1 > 10 ? $this.next().data('index') + 1 : '0' + ($this.next().data('index') + 1))
                                }
                            }, 'label' + i)

                            tl.to(wrap, {
                                height: $this.next().outerHeight(),
                                duration: 0.5,
                                delay: 5.9,
                            }, 'label' + i)

                        } else {


                            tl.to($('.testimonial_0'), {
                                opacity: 1,
                                duration: 0.5,
                                delay: 6,
                                onStart: () => {
                                    current.html('01')
                                }
                            }, 'label' + i)


                        }

                    })



                    nav.on('mouseenter', () => {
                        tl.pause()
                    })

                    nav.on('mouseleave', () => {
                        tl.resume()
                    })


                    let clicksForward = 0,
                        clicksBackward = single.length;

                    next.on('click', () => {

                        clicksForward++

                        if (clicksForward >= single.length) {
                            clicksForward = -1
                            clicksForward++
                        }

                        gsap.to(wrap, {
                            opacity: 0,
                            onComplete: () => {
                                let tlSeek = 'label' + clicksForward;
                                tl.seek(tlSeek)

                                gsap.to(wrap, {
                                    opacity: 1
                                })

                            }
                        })

                    })

                    prev.on('click', () => {

                        clicksBackward--

                        if (clicksBackward < 0) {

                            clicksBackward = single.length - 1
                            clicksBackward--
                        }




                        gsap.to(wrap, {
                            opacity: 0,
                            onComplete: () => {
                                let tlSeek = 'label' + clicksBackward;
                                tl.seek(tlSeek)

                                gsap.to(wrap, {
                                    opacity: 1
                                })

                            }
                        })

                    })


                })



            }


        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylabutton.default', function ($scope, $) {

            naylaButtons();

            function naylaButtons() {

                var button = $scope.find('.nayla-button');

                button.each(function () {

                    let button = $(this),
                        $this = $(this).children('a'),
                        icon = $this.find('.button-icon'),
                        tl = gsap.timeline({
                            paused: true
                        }),
                        line,
                        animation = $this.data('animation'),
                        stagger = $this.data('stagger'),
                        duration = $this.data('duration');

                    if (animation) {

                        $this.wrapInner('<span class="button-anim-holder has-anim-text ' + animation + '"></span>')

                        $this.find('.button-anim-holder').attr('data-duration', duration)
                        $this.find('.button-anim-holder').attr('data-stagger', stagger)

                        $this.addClass('detect-pov')

                        new naylaTextAnimation($this.find('.button-anim-holder'))

                    }


                    button.hasClass('underline') ? $this.append('<span class="button-line"></span>') : '';

                })



            }


        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylaclientscarousel.default', function ($scope, $) {

            naylaClientsCarousel();

            function naylaClientsCarousel() {

                let clientCarousel = $scope.find('.nayla-clients-carousel');


                clientCarousel.each(function () {

                    let $this = $(this),
                        clientWrap = $this.find('.clients-wrapper'),
                        clientFullWidth = clientWrap.outerWidth(),
                        dataDuration = $this.data('duration'),
                        windowWidth = window.innerWidth,
                        clients = $this.find('.client');

                    if (clients.length > 0) {

                        let tl = gsap.timeline();

                        if (clientFullWidth < windowWidth) {

                            let i = 0,
                                clientLenght = Math.ceil(windowWidth * 2 / clientFullWidth);

                            for (i = 1; i <= clientLenght; i++) {

                                clientWrap.clone().appendTo($this)
                            }

                            $this.css('width', (clientLenght + 1) * clientFullWidth)

                        } else {

                            clientWrap.clone().appendTo($this)
                            $this.css('width', (clientFullWidth * 2))

                        }

                        function dragMove() {
                            var x = parseInt($this.css('transform').split(',')[4]),
                                speed = clientFullWidth / dataDuration


                            if ($this.hasClass('left-to-right')) {
                                gsap.fromTo($this, {
                                    x: x
                                }, {
                                    x: 0,
                                    duration: (-1 * x) / speed,
                                    ease: 'none',
                                    onComplete: () => {
                                        gsap.set($this, {
                                            x: 0
                                        })

                                        tl.fromTo($this, {
                                            x: -1 * clientFullWidth
                                        }, {
                                            x: 0,
                                            duration: dataDuration,
                                            ease: 'none',
                                            repeat: -1
                                        })
                                    }
                                })

                            } else {
                                gsap.fromTo($this, {
                                    x: x
                                }, {
                                    x: -1 * clientFullWidth,
                                    ease: 'none',
                                    duration: (clientFullWidth - (-1 * x)) / speed,
                                    onComplete: () => {
                                        gsap.set($this, {
                                            x: 0
                                        })
                                        tl.to($this, {
                                            x: -1 * clientFullWidth,
                                            duration: dataDuration,
                                            ease: 'none',
                                            repeat: -1
                                        })
                                    }
                                })
                            }

                        }

                        if ($this.hasClass('left-to-right')) {
                            tl.fromTo($this, {
                                x: -1 * clientFullWidth
                            }, {
                                x: 0,
                                duration: dataDuration,
                                ease: 'none',
                                repeat: -1,
                            })
                        } else {
                            tl.to($this, {
                                x: -1 * clientFullWidth,
                                duration: dataDuration,
                                ease: 'none',
                                repeat: -1
                            })
                        }
                        Draggable.create($this, {
                            type: 'x',
                            edgeResistance: 0.4,
                            onDrag: (self) => {
                                var x = parseInt($this.css('transform').split(',')[4]);
                                if ($this.hasClass('left-to-right')) {
                                    if (x > 0) {
                                        gsap.set($this, {
                                            x: (-1 * clientFullWidth) + x
                                        })
                                    } else if (x < -1 * clientFullWidth) {
                                        gsap.set($this, {
                                            x: x + (clientFullWidth)
                                        })
                                    }
                                } else {
                                    if (-1 * x > clientFullWidth) {
                                        gsap.set($this, {
                                            x: x + clientFullWidth
                                        })
                                    } else if (x > 0) {
                                        gsap.set($this, {
                                            x: (-1 * clientFullWidth) + x
                                        })
                                    }
                                }
                            },
                            onUpdate: () => {
                                if (x > 0) {
                                    gsap.set($this, {
                                        x: (-1 * clientFullWidth) + x
                                    })
                                } else if (x < -1 * clientFullWidth) {
                                    gsap.set($this, {
                                        x: x + (clientFullWidth)
                                    })
                                }
                            },
                            onDragEnd: () => {
                                dragMove();
                            }
                        })
                        $this.on('click', function () {
                            dragMove()
                        })

                    }


                })
            }


        });

        elementorFrontend.hooks.addAction('frontend/element_ready/naylateamperson.default', function ($scope, $) {

            naylaTeamMember();

            function naylaTeamMember() {

                const member = $scope.find('.nayla-team-member');

                member.each(function () {

                    let $this = $(this),
                        cv = $this.find('.team-member-cv'),
                        card = $this.find('.team-member-card'),
                        image = $this.find('.team-member-image'),

                        parentHeight = $this.outerHeight(),
                        cardHeight = card.outerHeight(),
                        cvHeight = cv.outerHeight();

                    image.append('<div class="cv-toggle"><span class="material-icons">add</span></div>')


                    let cvToggle = $this.find('.cv-toggle');

                    cvToggle.on('click', function () {

                        var clicks = $(this).data('clicks'),
                            tl = gsap.timeline();

                        if (clicks) {

                            //Close

                            $this.removeClass('active');

                            tl.to(cv, {
                                opacity: 0,
                                duration: .5,
                                display: 'none',
                                onComplete: () => {
                                    gsap.set(card, {
                                        paddingBottom: cvHeight + 50,
                                    })
                                }

                            })

                            if ($this.hasClass('overlay')) {

                                tl.to(card, {
                                    paddingBottom: 0,

                                }, 0.5)

                            } else {

                                tl.to(image, {
                                    height: 'auto',
                                    duration: .75,
                                    ease: 'expo.out'
                                }, 0.5)

                                tl.to(card, {
                                    paddingBottom: 0,
                                    duration: .75,
                                    ease: 'expo.out'
                                }, 0.5)


                            }




                        } else {

                            // Open

                            $this.addClass('active');

                            if ($this.hasClass('overlay')) {

                                tl.to(card, {
                                    paddingBottom: cvHeight + 50,
                                })

                            } else {

                                tl.to(image, {
                                    height: parentHeight - (cardHeight + cvHeight + 50 + 15),
                                    duration: 1,
                                    ease: 'expo.out'
                                })

                                tl.to(card, {
                                    paddingBottom: cvHeight + 50,
                                    duration: 1,
                                    ease: 'expo.out'
                                }, 0)

                            }

                            tl.to(cv, {
                                opacity: 1,
                                duration: .5,
                                display: 'block',
                                onStart: () => {
                                    gsap.set(card, {
                                        paddingBottom: 0,
                                    })
                                }

                            })

                        }
                        $(this).data("clicks", !clicks);

                    })




                })


            }

        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylainfinitytabs.default', function ($scope, $) {

            naylaInfiniteTabs();

            function naylaInfiniteTabs() {
                let naylaInfiniteTab = $scope.find('.nayla-infinite-tabs');

                naylaInfiniteTab.each(function () {
                    let $this = $(this),
                        tabTitleWrap = $this.find('.tab-title-wrap'),
                        tabTitle = $this.find('.tab-title');

                    tabTitle.first().addClass('active')
                    $this.find('.tab-content').first().addClass('active')

                    $this.find('.tab-content').each(function (i) {
                        i++;
                        $(this).addClass('data-index_' + i)
                    })

                    tabTitle.each(function (i) {
                        i++;
                        $(this).attr('data-index', i)
                    })

                    tabTitle.on('click', function () {
                        tabTitle.removeClass('active')
                        $(this).addClass('active');

                        let prevWidth = 0;

                        $(this).prevAll().each(function (i) {
                            prevWidth += parseInt($(this).outerWidth(true), 10)
                        })
                        gsap.to(tabTitleWrap, {
                            x: -1 * prevWidth,
                            duration: 1.5,
                            ease: 'expo.out',
                            onStart: () => {

                                let tl = gsap.timeline()

                                tl.to($this.find('.tab-content'), {
                                    opacity: 0,
                                    duration: $this.data('duration') / 2,
                                    onComplete: () => {
                                        $this.find('.tab-content').hide()
                                        $this.find('.tab-content.data-index_' + $(this).data('index')).show()
                                    }
                                })

                                tl.to($this.find('.tab-content.data-index_' + $(this).data('index')), {
                                    opacity: 1,
                                    duration: $this.data('duration') / 2
                                })

                                gsap.to($this.find('.tab-contents-wrap'), {
                                    height: $this.find('.tab-content.data-index_' + $(this).data('index')).outerHeight(true)
                                })

                            },
                            onComplete: () => {

                                $(this).prevAll().appendTo(tabTitleWrap)
                                gsap.set(tabTitleWrap, {
                                    x: 0
                                })
                            }
                        })
                    })

                })

                //        function updateOnResize() {
                //            prevWidth = 0
                //            $(this).prevAll().each(function (i) {
                //                prevWidth += parseInt($(this).outerWidth(true), 10)
                //                $this.find('.tab-content.data-index_' + $(this).data('index')).outerHeight(true)
                //            })
                //        }
                //        matchMedia.add(isPhone, () => {
                //            updateOnResize()
                //        });
                //        matchMedia.add(isTablet, () => {
                //            updateOnResize()
                //        });
                //        matchMedia.add(isDesktop, () => {
                //            updateOnResize()
                //        });
            }

        });


        elementorFrontend.hooks.addAction('frontend/element_ready/nayladynamiclist.default', function ($scope, $) {

            naylaDynamicList();

            function naylaDynamicList() {

                let list = $scope.find('.nayla-dynamic-list');


                list.each(function () {

                    let list = $(this),
                        item = list.find('ul').children('li'),
                        image = item.find('.list-image'),
                        animation = list.data('animation'),
                        scrub = list.data('scrub');

                    animation ? list.find('a').addClass(animation) : '';
                    scrub ? list.find('a').data('scrub', true) : '';


                    item.each(function () {

                        let $this = $(this);

                        animation ? new naylaTextAnimation($this.find('a')) : '';

                        $this.find('a').on('mouseenter', () => {

                            list.addClass('hovered');
                            $this.addClass('current');

                        })

                        $this.find('a').on('mousemove', function (e) {

                            let mouseLeft = e.clientX,
                                mouseTop = e.clientY,
                                myLeft = mouseLeft - $this.offset().left,
                                myTop = mouseTop - $this.offset().top + $(window).scrollTop(),
                                movX = event.movementX < 0 ? event.movementX * -1 : event.movementX;

                            gsap.to(image, {
                                left: myLeft,
                                top: myTop,
                                duration: 1,
                                ease: 'power3.out',
                            })

                        })

                        $this.find('a').on('mouseleave', () => {

                            list.removeClass('hovered');
                            $this.removeClass('current');

                        })



                    })




                })




            }


        });


        elementorFrontend.hooks.addAction('frontend/element_ready/naylanumbercounter.default', function ($scope, $) {

            naylaNumberCounter();

            function naylaNumberCounter() {

                let numberCt = $scope.find('.nayla-number-counter');

                numberCt.each(function () {

                    let $this = $(this),
                        ctNumberSplit = new SplitText($this.find('.ct-number'), {
                            type: 'words, chars',
                            charsClass: 'ct-number-char',
                            wordsClass: 'ct-number-word'
                        }),
                        ctChar = $this.find('.ct-number-char'),
                        ctWord = $this.find('.ct-number-word'),
                        dataCount = $this.data('count'),
                        ctStart = $this.find('.count-start'),
                        ctEnd = $this.find('.count-end');



                    ctChar.each(function () {

                        let $this = $(this);

                        $this.wrapInner("<div class='value-loop-char'></div>")
                        let valueLoop = $this.find('.value-loop-char'),
                            valueChar = parseInt($this.text()),
                            i = 0;

                        for (i = valueChar + 1; i < valueChar + dataCount; i++) {
                            $this.prepend("<div class='value-loop-char'>" + i + "</div>")
                        }

                        gsap.set($this.find('.value-loop-char'), {
                            yPercent: '100'
                        })

                        $this.find('.value-loop-char').each(function () {
                            let $this = $(this),
                                valueNo = $this.text();

                            if (valueNo > 9) {
                                $this.html(parseInt(valueNo) - 10)
                            }
                        })
                    })

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: $this,
                            start: 'top bottom',
                        },
                    })


                    if (ctStart.length == 1) {
                        tl.to(ctStart, {
                            y: 0,
                            duration: $this.data('duration') == null ? 2.5 : $this.data('duration'),
                            ease: 'expo.out',
                        }, 0)

                    }

                    tl.to(ctChar, {
                        yPercent: -100,
                        duration: $this.data('duration') == null ? 2.5 : $this.data('duration'),
                        stagger: $this.data('stagger') == null ? 0.1 : $this.data('stagger'),
                        ease: 'expo.out',
                    }, 0);


                    if (ctEnd.length == 1) {
                        tl.to(ctEnd, {
                            y: 0,
                            duration: $this.data('duration') == null ? 2.5 : $this.data('duration'),
                            ease: 'expo.out',
                        }, 0.5)

                    }




                })
            }
        });

        let loader = gsap.getById("innerTl");

        if (loader != null) {

            setTimeout(function () {

                let instance = ScrollTrigger.getAll(),
                    i = 0;

                for (i = 0; i < instance.length; i++) {

                    instance[i].disable();

                }

            }, 3)

        }


    })


    function naylaMarquee(target) {
        var velocity;
        let marquee = target;
        marquee.each(function () {
            let $this = $(this),
                text = $this.children('*'),
                dataDuration = $this.data('duration'),
                seperator = $this.data('seperator');
            $this.wrapInner('<div class="marquee-wrap"></div>')
            let infItem = $this.find('.marquee-wrap'),
                infWidht = infItem.outerWidth();
                
            if (infWidht > 0) {
                
                          
            let infLenght = window.innerWidth / infWidht,
                gap = infItem.offset().left;
            if ($this.hasClass('icon_font')) {
                gsap.set(infItem.find('.seperator'), {
                    fontSize: infItem.children().css('font-size')
                })
            }

            function infinityOnResize() {
                let i = 2;
                for (i = 2; i < infLenght + 2; i++) {
                    infItem.clone().appendTo($this)
                }
                let infItemLenght = $this.find('.maruqee-wrap').length;
                let parse = parseInt(infWidht);
                gsap.set(infItem, {
                    width: parse
                })
                gsap.set($this, {
                    width: infItemLenght * $this.find('.marquee-wrap').outerWidth(true),
                    display: 'flex'
                })
                let tl = gsap.timeline({
                    repeat: -1,
                })
                let tl2 = gsap.timeline({
                    repeat: -1
                })
                if ($this.hasClass('left-to-right')) {
                    tl.fromTo($this, {
                        x: -1 * (parse + gap)
                    }, {
                        x: -1 * gap,
                        ease: 'none',
                        duration: parse / 1000 * dataDuration
                    })
                } else {
                    tl.fromTo($this, {
                        x: -1 * gap
                    }, {
                        x: -1 * (parse + gap),
                        ease: 'none',
                        duration: parse / 1000 * dataDuration
                    })
                }
                if ($this.hasClass('rotating_seperator')) {
                    let sepDuration = $this.data('sepduration')
                    if ($this.hasClass('counter-clockwise')) {
                        tl2.fromTo($this.find('.seperator'), {
                            rotate: 0
                        }, {
                            rotate: -360,
                            duration: sepDuration,
                            ease: 'none',
                        })
                    } else {
                        tl2.fromTo($this.find('.seperator'), {
                            rotate: 0
                        }, {
                            rotate: 360,
                            duration: sepDuration,
                            ease: 'none'
                        })
                    }
                }
                let whaler = Hamster(document.querySelector('body')),
                    wheelDeltaY, currentDeltaY;

                function createWheelStopListener(element, callback, timeout) {
                    var handle = null;
                    var onScroll = function () {
                        if (handle) {
                            clearTimeout(handle);
                        }
                        handle = setTimeout(callback, timeout || 200); // default 200 ms
                    };
                    element.addEventListener('wheel', onScroll);
                    return function () {
                        element.removeEventListener('wheel', onScroll);
                    };
                }
                whaler.wheel(function (event, delta, deltaX, deltaY) {
                    wheelDeltaY = event.deltaY;
                    event.deltaY < 0 ? wheelDeltaY = -1 * event.deltaY : '';
                    tl.timeScale(1 + (wheelDeltaY * 2))
                    tl2.timeScale(1 + (wheelDeltaY * 2))
                });
                createWheelStopListener(window, function () {
                    tl.timeScale(1)
                    tl2.timeScale(1)
                });
            }
            
            infinityOnResize();
            
            window.onresize = function () {
                $this.find('.nayla-marquee:first-child').nextAll().remove()
                let infItem = $this.find('.infinity-item'),
                    infWidht = infItem.outerWidth(),
                    infLenght = window.innerWidth / infWidht;
                infinityOnResize();
            }
                
                
            }
  
        })
    }

    function nayla404page() {

        if ($('.marquee-404').length) {

            naylaMarquee($('.marquee-404'))

        }

    }





    function naylaProductPage() {

        var productPage = $('.product-page'),
            head = productPage.find('.nayla-product-head'),
            gallery = productPage.find('.product-gallery'),
            info = productPage.find('.product-info'),
            endo = gallery.outerHeight() - info.outerHeight();

        if (gallery.length && !head.hasClass('gal-static')) {

            var galleryScroll = ScrollTrigger.create({
                trigger: gallery,
                pin: info,
                start: 'top top',
                end: endo,
                id: 'pGalleryScroll'

            })
        }

        if (head.hasClass('img-masonry')) {


            var msnry = $('.product-gallery-wrap').masonry({
                // set itemSelector so .grid-sizer is not used in layout
                itemSelector: '.product-gallery-image',
                // use element for option
                columnWidth: '.grid-sizer',
                percentPosition: true,
                gutter: '.grid-gutter'
            })

            matchMedia.add({
                isMobile: "(max-width: 450px)"

            }, (context) => {
                let {
                    isMobile
                } = context.conditions;

                msnry.masonry('destroy')

                return () => {


                }
            });


        }


        function productDetailTabs() {

            let tabs = $('.tab-titles-wrap'),
                titles = tabs.find('.tab-title'),
                contents = $('.product-detail-tabs').find('.tab-content');

            titles.first().addClass('active')
            contents.first().addClass('active')

            titles.on('click', function () {

                let $this = $(this),
                    findContent = '.tab_' + $this.attr('data-tab');

                $('.tab-content').removeClass('active');
                $('.tab-title').removeClass('active');
                $(findContent).addClass('active')
                $this.addClass('active')

            })

        }
        productDetailTabs()

        function naylaUpdateCart() {

            var quantity = $('.product-add-to-cart, .nayla_add_to_cart');

            quantity.find('.single_add_to_cart_button').on('mouseenter', function () {

                quantity.addClass('hovered')


            })

            quantity.find('.single_add_to_cart_button').on('mouseleave', function () {

                quantity.removeClass('hovered')


            })

            quantity.each(function () {

                let $this = $(this),
                    input = $this.find('.qty'),
                    incrs = $this.find('.incrs'),
                    dcrs = $this.find('.dcrs');

                let clicks = 0;

                incrs.on('click', function () {

                    $('.update_cart').removeAttr('disabled');

                    clicks++

                    if (clicks < 1) {
                        clicks = 1
                    }

                    var currentVal = parseInt(input.val());

                    if (!isNaN(currentVal)) {
                        input.val(clicks);
                    }

                });
                dcrs.on('click', function () {

                    clicks--

                    if (clicks < 1) {

                        clicks = 1
                    }

                    $('.update_cart').removeAttr('disabled');


                    var currentVal = parseInt(input.val());

                    if (!isNaN(currentVal) && currentVal > 0) {
                        input.val(clicks);
                    }
                });

            })

        }
        naylaUpdateCart()


        matchMedia.add({
            isMobile: "(max-width: 450px)"

        }, (context) => {
            let {
                isMobile
            } = context.conditions;

            let galScroll = ScrollTrigger.getById('pGalleryScroll')

            if (galScroll != null) {

                galScroll.kill()
            }

            var max = $('.product-gallery-wrap').outerWidth() - 375;

            var galeryDrag = Draggable.create(gallery.find('.product-gallery-wrap'), {
                type: 'x',
                bounds: {
                    minX: 0,
                    maxX: max * -1,

                },
                lockAxis: true,
                dragResistance: 0.5,
                inertia: true,

                zIndexBoost: false,

            });


            return () => {


            }
        });

    }



    function naylaArchiveProducts() {

        var archive = $('.archive-products-section'),
            filters = archive.find('.nayla-products-filtering li'),
            grid = archive.find('.nayla-products-grid'),
            products = grid.find('.nayla-single-product'),
            layoutSwitch = archive.find('.npg-switch');


        filters.not('.all').on('click', function () {

            let $this = $(this),
                findCat = '.product_cat-' + $this.data('cat');

            filters.removeClass('active');
            $this.addClass('active')


            let state = Flip.getState(products);

            grid.addClass('filtered')
            products.hide();
            $(findCat).show();

            Flip.from(state, {
                duration: 1,
                scale: false,
                ease: 'power3.out',
                stagger: 0,
                absolute: true,
                absoluteOnLeave: true,
                onEnter: elements => gsap.fromTo(elements, {
                    clipPath: 'inset(100%)'
                }, {
                    opacity: 1,
                    clipPath: 'inset(0%)',
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1

                }),
                onLeave: elements => gsap.to(elements, {
                    clipPath: 'inset(100%)',
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1

                })
            });




        })

        archive.find('.all').on('click', function () {
            let state = Flip.getState(products);

            filters.removeClass('active');
            $(this).addClass('active')

            grid.removeClass('filtered')

            products.show();

            Flip.from(state, {
                duration: 1,
                scale: false,
                ease: "expo.out",
                stagger: 0,
                absolute: true,
                absoluteOnLeave: true,
                onEnter: elements => gsap.fromTo(elements, {
                    clipPath: 'inset(100%)'
                }, {
                    opacity: 1,
                    clipPath: 'inset(0%)',
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1

                }),
                onLeave: elements => gsap.to(elements, {
                    clipPath: 'inset(100%)',
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1

                })
            });

        })

        if (layoutSwitch.length) {

            let swDefault = layoutSwitch.children('.switch-def'),
                sw2 = layoutSwitch.children('.switch-2');

            grid.addClass('grid-default');

            sw2.on('click', function () {

                if (grid.hasClass('grid-default')) {

                    swDefault.removeClass('active')
                    sw2.addClass('active')

                    let state = Flip.getState(products);

                    grid.removeClass('grid-default');
                    grid.addClass('grid-2');



                    Flip.from(state, {
                        duration: 1,
                        scale: false,
                        ease: 'power3.out',
                        stagger: 0,
                        absolute: true,
                        absoluteOnLeave: true,

                    });



                }


            })

            swDefault.on('click', function () {

                swDefault.addClass('active')
                sw2.removeClass('active')

                if (grid.hasClass('grid-2')) {

                    let state = Flip.getState(products);

                    grid.removeClass('grid-2');
                    grid.addClass('grid-default');



                    Flip.from(state, {
                        duration: 1,
                        scale: false,
                        ease: 'power3.out',
                        stagger: 0,
                        absolute: true,
                        absoluteOnLeave: true,

                    });



                }


            })

        }

        matchMedia.add({
            isMobile: "(max-width: 450px)"

        }, (context) => {
            let {
                isMobile
            } = context.conditions;


            let filtersDrag = Draggable.create(archive.find('.nayla-products-filtering'), {
                type: 'x',
                bounds: {
                    minX: 0,

                },
                lockAxis: true,
                dragResistance: 0.5,
                inertia: true,
            });


            return () => {

            }
        });


    }

    function naylaCartPage() {

        function quanto() {

            let quantity = $('.nayla-cart-section').find('.product-quantity');

            quantity.each(function () {

                let $this = $(this),
                    input = $this.find('.qty'),
                    incrs = $this.find('.incrs'),
                    dcrs = $this.find('.dcrs');

                let clicks = 0;

                incrs.on('click', function () {

                    $('.update_cart').removeAttr('disabled');

                    clicks++


                    var currentVal = parseInt(input.val());

                    if (!isNaN(currentVal)) {
                        input.val(currentVal + 1);
                    }

                });
                dcrs.on('click', function () {

                    clicks--

                    $('.update_cart').removeAttr('disabled')

                    var currentVal = parseInt(input.val());
                    if (!isNaN(currentVal) && currentVal > 0) {
                        input.val(currentVal - 1);
                    }
                });

            })
        }

        quanto();


        $(document).on('click', 'button[name="update_cart"]', function () {
            var totalQuantity = 0;

            var cartItems = $('.cart_item');

            cartItems.each(function () {
                var quantityInput = $(this).find('.quantity input');
                var quanto = parseInt(quantityInput.val());
                totalQuantity += quanto;
            });

            $('.cart-count > span').html(totalQuantity);

            setTimeout(function () {

                quanto();


            }, 2000)


        });


    }






    //////////////////////////
    //   Page Transitions   //
    //////////////////////////


    let caption = $('.page-transition-caption');

    new SplitText(caption, {
        type: 'lines, chars, words',
        linesClass: 'capt_lines',
        wordsClass: 'capt_words',
        charsClass: 'capt_chars'
    })

    let chars = $('.capt_chars'),
        words = $('.capt_words'),
        lines = $('.capt_lines');

    chars.wrapInner('<span></span>');

    function transitionCaption(tl, intro, outro, response) {

        if (transitions.hasClass('default')) {

            if (intro) {

                tl.fromTo(chars.find('span'), {
                    y: 100
                }, {
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.01,


                }, .3)


            }
            if (outro) {

                tl.to(chars.find('span'), {
                    y: -100,
                    duration: .6,
                    stagger: -0.01,
                    ease: 'power3.in',
                    onComplete: () => {


                        gsap.set(transitions, {
                            visibility: 'hidden'
                        })


                    }
                }, .3)

            }


        } else if (transitions.hasClass('offset-x')) {



            if (intro) {

                tl.fromTo(chars.find('span'), {
                    x: 50
                }, {
                    x: 0,
                    duration: .6,
                    ease: 'power3.out',
                    stagger: 0.02,


                }, .5)


            }
            if (outro) {

                tl.to(chars.find('span'), {
                    x: -50,
                    duration: .6,
                    stagger: 0.02,
                    ease: 'power3.in',
                }, .3)

            }



        } else if (transitions.hasClass('opacit')) {


            if (intro) {

                tl.fromTo(chars, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: .6,
                    ease: 'power3.out',
                    stagger: 0.02,


                }, 0.3)


            }
            if (outro) {

                tl.to(chars, {
                    opacity: 0,
                    duration: .6,
                    stagger: 0.02,
                    ease: 'power3.in',
                }, .3)

            }

        }


    }

    let transitions = $('.nayla-page-transition'),
        block, paper, columns, overlay, up, down, left, right, opacity, pageOver;

    transitions.hasClass('up') ? up = true : transitions.hasClass('down') ? down = true : transitions.hasClass('left') ? left = true : transitions.hasClass('right') ? right = true : '';

    transitions.hasClass('block') ? block = true : transitions.hasClass('overlay') ? overlay = true : transitions.hasClass('opacity') ? opacity = true : transitions.hasClass('page-over') ? pageOver = true : transitions.hasClass('columns') ? columns = true : '';


    function animateBlocks(time, intro, outro, data) {

        let stagger = up ? -0.04 : down ? 0.04 : left ? 0.04 : right ? -0.04 : '',
            ease = up ? 'power4.out' : down ? 'power4.out' : left ? 'power4.inOut' : right ? 'power4.inOut' : '',
            duration = up ? .75 : down ? .75 : left ? .75 : right ? .75 : '';

        var colorChange;
        colorChange = false;

        if (intro) {

            transitions.css('visibility', 'visible');

            time.to('.transition-block span', {
                height: '100%',
                width: '100%',
                duration: duration,
                ease: ease,
                stagger: stagger,
                onComplete: () => {

                    transitions.addClass('half')

                }
            })
        }

        if (data) {

            var response = data.next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                current = data.current.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                targetTransBg = $(response).filter('notbody').find('.nayla-page-transition').data('bg'),
                currTransBg = $(current).filter('notbody').find('.nayla-page-transition').data('bg');

            if (targetTransBg !== currTransBg) {


                transitions.find('.transition-block').each(function () {

                    let sp = $(this).children('span');

                    sp.clone().css('backgroundColor', targetTransBg).addClass('t-span-mask').insertAfter(sp);

                })

                colorChange = true;

                time.to('.transition-block span.t-span-mask', {
                    height: '100%',
                    width: '100%',
                    duration: duration,
                    ease: ease,
                    stagger: stagger,
                })
            }

        }


        if (outro) {

            time.to('.transition-block span', {
                height: up || down ? '0%' : '100%',
                width: left || right ? '0%' : '100%',
                duration: duration,
                ease: ease,
                stagger: stagger / 2,
                delay: .3,
                onComplete: () => {

                    transitions.removeClass('half');
                    transitions.find('.t-span-mask').remove();

                }
            })
        }
    }

    function animateOverlay(time, intro, outro, data) {

        var colorChange;
        colorChange = false;

        if (data) {

            var response = data.next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                current = data.current.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                targetTransBg = $(response).filter('notbody').find('.nayla-page-transition').data('bg'),
                currTransBg = $(current).filter('notbody').find('.nayla-page-transition').data('bg');

            if (targetTransBg !== currTransBg) {

                transitions.append('<span style="background-color:' + targetTransBg + '" class="transition-overlay t-overlay-mask"></span>');

                colorChange = true;

                time.to(transitions.find('.t-overlay-mask'), {
                    height: '100%',
                    width: '100%',
                    duration: 1,
                    ease: 'expo.inOut',
                    onComplete: () => {

                        transitions.attr('data-bg', targetTransBg)

                        transitions.addClass('half');

                    }

                }, 1)
            }

        }

        if (intro) {

            time.to(transitions.find('.transition-overlay').not('.t-overlay-mask'), {
                height: '100%',
                width: '100%',
                duration: 1,
                ease: 'expo.inOut',
                onComplete: () => {

                    !colorChange ? transitions.addClass('half') : '';
                }
            }, 0)

        }

        if (outro) {

            time.to(transitions.find('.transition-overlay'), {
                height: up || down ? '0%' : '100%',
                width: left || right ? '0%' : '100%',
                duration: 1,
                delay: .3,
                ease: 'expo.inOut',
                onComplete: () => {

                    transitions.removeClass('half');
                    transitions.find('.t-overlay-mask').remove();

                }
            }, 0)

        }

    }

    function animateColumns(time, intro, outro, data) {

        var colorChange;
        colorChange = false;

        if (intro) {

            transitions.css('visibility', 'visible');

            if (left || right) {

                time.to('.trans-col', {
                    width: '100%',
                    stagger: {
                        grid: [1, 20],
                        from: "random",
                        amount: .3,

                    },
                    duration: .8,
                    ease: 'expo.out',
                    onComplete: () => {

                        transitions.addClass('half')

                    }
                })

            } else {

                time.to('.trans-col', {
                    height: '100%',
                    stagger: {
                        grid: [1, 20],
                        from: "random",
                        amount: .3,

                    },
                    duration: .8,
                    ease: 'expo.out',
                    onComplete: () => {

                        colorChange ? '' : transitions.addClass('half')
                    }
                })

                if (data) {

                    var response = data.next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                        current = data.current.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                        targetTransBg = $(response).filter('notbody').find('.nayla-page-transition').data('bg'),
                        currTransBg = $(current).filter('notbody').find('.nayla-page-transition').data('bg');

                    if (targetTransBg !== currTransBg) {

                        transitions.find('.trans-col').append('<span style="background-color:' + targetTransBg + '" class="t-col-mask"></span>')

                        colorChange = true;

                        time.to(transitions.find('.t-col-mask'), {
                            height: '100%',
                            stagger: {
                                grid: [1, 20],
                                from: "random",
                                amount: .3,
                            },
                            duration: .5,
                            ease: 'expo.out',
                            onComplete: () => {

                                transitions.addClass('half')

                            }
                        })
                    }

                }

            }

        }


        if (outro) {

            if (left || right) {

                time.to('.trans-col', {
                    width: '0%',
                    delay: .5,
                    stagger: {
                        grid: [1, 20],
                        from: "random",
                        amount: .3,

                    },
                    duration: 1.2,
                    ease: 'expo.out',
                    onComplete: () => {

                        transitions.removeClass('half');
                        transitions.find('.t-col-mask').remove();
                    }

                })


            } else {

                time.to('.trans-col', {
                    height: '0%',
                    delay: .5,
                    stagger: {
                        grid: [1, 20],
                        from: "random",
                        amount: .3,

                    },
                    duration: 1.2,
                    ease: 'expo.out',
                    onComplete: () => {

                        transitions.removeClass('half');
                        transitions.find('.t-col-mask').remove();

                    }

                })

            }



        }

    }

    function animateOpacity(time, intro, outro, data) {

        if (intro) {

            time.to('#primary, .project-page-header', {
                y: up ? -100 : down ? 100 : 0,
                x: left ? 100 : right ? -100 : 0,
                opacity: 0,
                duration: 1,
                ease: 'power3.in',
            }, 0)

        }


        if (outro) {

            time.from('#primary, .project-page-header', {
                y: up ? 100 : down ? -100 : 0,
                x: left ? -100 : right ? 100 : 0,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            }, 0)

        }


    }

    function animatePageOver(time, intro, outro, data) {

        let origin = $(window).scrollTop(),
            brightOverlay = '<span class="bright-ov"></span>';

        gsap.set('#content , .project-page-header', {
            transformOrigin: 'center ' + origin
        })

        if (intro) {

            time.to(transitions, {
                height: '100vh',
                width: '100vw',
                duration: 1.5,
                ease: 'expo.inOut'

            }, 0)

            time.to('.page-over-ovs', {
                opacity: 1,
                scale: 1,
                duration: 1,

            }, 0)


        }


        if (outro) {

            gsap.set('.page-over-ovs', {
                clearProps: 'all'
            })

            time.to(transitions, {
                opacity: 0,

                duration: 1
            }, 0)


        }

    }



    // General Resets

    function getMediaToCenter(tl, duration) {

        var media = $('.transition--media'),
            medTop = media.offset().top,
            medLeft = media.offset().left;

        media.clone().addClass('clone').insertAfter(media);

        media.addClass('animating');

        let state = Flip.getState(media, {
                props: 'top, left, right, bottom, x, y, maxWidth, maxHeight'
            }),
            height = media.outerHeight(),
            width = media.outerWidth();

        if (!media.find('.plyr__video-embed__container').length) {

            $('body').hasClass('smooth-scroll') ? media.insertBefore('#smooth-content') : media.insertBefore('main');

        }

        gsap.set(media, {
            rotate: 0,
            position: 'fixed',
            height: height,
            width: width,
            top: $('div.showcase-table').length ? medTop : window.innerHeight / 2,
            left: $('div.showcase-table').length ? medLeft : window.innerWidth / 2,
            right: 'unset',
            bottom: 'unset',
            xPercent: $('div.showcase-table').length ? 0 : -50,
            yPercent: $('div.showcase-table').length ? 0 : -50,
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            clipPath: 'inset(0%)',
            display: 'block',
            maxHeight: 'unset',
            maxWidth: 'unset',
            zIndex: 9999,
            mixBlendMode: 'unset'
        })

        //        let flip = Flip.from(state, {
        //            duration: duration,
        //            absolute: true,
        //            absoluteOnLeave: true,
        //            ease: 'expo.inOut',
        //            onStart: () => {
        //
        //                gsap.set('.clone', {
        //                    visibility: 'hidden'
        //                })
        //
        //            }
        //        });
        //
        //        tl.add(flip, 0);


    }


    function animateMedia(tl, fullscreen, slide, mask, direction) {

        var media = document.querySelector('.transition--media');

        if (fullscreen) {

            tl.to(media, {
                width: '100vw',
                height: '100vh',
                duration: 1,
                ease: 'expo.inOut',
            })


        }

        if (mask) {

            tl.to(media, {
                clipPath: 'inset(0% 0% 100% 0%)',
                duration: 1,
                ease: 'expo.inOut',
            }, 1.5)


        }



    }

    function projectBackground(current, next, tl, delay, smooth) {


        if (current === next) {

        } else {

            let ov = document.createElement('span')
            ov.classList.add('project-trans-overlay');
            ov.style.backgroundColor = next;

            document.querySelector('#page').append(ov);

            if ($('.animating').find('.n-vimeo').length || $('.animating').find('.n-youtube').length) {

                ov.style.zIndex = 0;
            }

            tl.to(ov, {
                height: '100svh',
                duration: 1,
                ease: 'expo.inOut',
                onStart: () => {

                    if (smooth) {

                        setTimeout(function () {

                            gsap.to(siteHeader.children('div').children('section'), {
                                opacity: 0,
                                duration: .3

                            })
                        }, 650)

                        setTimeout(function () {


                            gsap.to(siteHeader.children('div').children('section'), {
                                opacity: 1,
                                duration: .3

                            })
                        }, 1200)

                    } else {

                        setTimeout(function () {

                            headerLayoutChange(false, next, false, false)

                        }, 650)


                    }

                }
            }, delay)

        }

    }

    // Showcase Animations

    function fullscreenCarouselOut(tl) {

        let slides = $('.showcase-fullscreen-carousel .showcase-project.swiper-slide').not('.swiper-slide-active'),
            title = $('.showcase-project.swiper-slide-active').find('.project-title');

        new SplitText(title, {
            type: 'chars',
            charsClass: 'fc_char'
        })

        tl.to([slides, '.sfc-fraction', '.showcase-footer', '.project-button'], {
                opacity: 0
            }, 0),

            tl.to('.fc_char', {
                yPercent: -100,
                duration: .5,
                stagger: 0.05,
                ease: 'power3.in'
            }, 0)

    }



    function fullscreenSlideshowOut(tl) {


        let active = $('.fs-slideshow-wrap .showcase-project.active');

        tl.to([active.find('.pt_char'), active.find('.pd_word span')], {
            yPercent: -100,
            duration: .75,
            ease: 'expo.in',
            stagger: 0.02
        }, 0)

        tl.to('.showcase-footer', {
            opacity: 0
        }, 0)

        tl.to('.project-button', {
            opacity: 0
        }, 0)

    }

    function showcaseListOut(tl) {

        tl.to('.sfl-projects .project-title, .sfl-projects .project-meta', {
            yPercent: -100,
            opacity: 0
        }, 0)


    }

    function outAnimShowcaseCarousel(time) {

        let carousel = $('.showcase-carousel'),
            project = carousel.find('.showcase-project.active'),
            title = carousel.find('.project-title');

        time.to(title, {
            yPercent: -100,
            duration: 1,
            ease: 'expo.inOut'
        }, 0)

        time.to([$('.showcase-footer'), $('.sc-lines')], {
            opacity: 0,
            duration: 1,
            ease: 'expo.inOut',
            onComplete: () => {

                carousel.addClass('animatingg');

            }
        }, 0)

    }

    function outAnimShowcaseTable(tl) {

        let carousel = $('.showcase-table'),
            projects = carousel.find('.showcase-project'),
            activeProject = carousel.find('.showcase-project.hovered');

        projects.not(activeProject).each(function () {

            let $this = $(this),
                left = $this.offset().left + ($this.outerWidth() / 2),
                top = $this.offset().top + ($this.outerHeight() / 2),
                winWidth = $(window).outerWidth() / 2,
                winHeight = $(window).outerHeight() / 2;


            if (left < winWidth) {

                var animLeft = (left + $this.outerWidth()) * -1

            } else {

                var animLeft = left + winWidth
            }

            if (top < winHeight) {

                var animTop = (top + $this.outerHeight()) * -1

            } else {

                var animTop = top + winHeight
            }

            tl.to($this, {
                left: animLeft,
                top: animTop,
                rotate: random(60, -60),
                duration: 2,
                ease: 'power2.inOut'
            }, 0)

        })

        tl.to(activeProject, {
            top: '50%',
            left: '50%',
            yPercent: -50,
            xPercent: -50,
            scale: 1,
            rotate: 0,
            duration: 2,
            ease: 'power2.out'
        }, 0)

    }


    function outAnimInteractiveCarousel(time) {

        let carousel = $('.nayla-interactive-carousel'),
            project = carousel.find('.inc--item.active'),
            next = project.next('.inc--item'),
            prev = project.prev('.inc--item');

        if (next.length) {
            time.to(next, {
                xPercent: 100,
                duration: 1,
                ease: 'expo.in'
            }, 0)
        }

        if (prev.length) {

            time.to(prev, {
                xPercent: -100,
                duration: 1,
                ease: 'expo.in'
            }, 0)
        }


        time.to([$('.showcase-footer'), '.inc--metas'], {
            opacity: 0,
            duration: 1,
            ease: 'expo.inOut',
            onComplete: () => {

                carousel.addClass('animatingg');

            }
        }, 0)

    }

    function showcaseCardsOut(tl) {

        let items = $('.showcase-project'),
            active = $('.showcase-project.active');

        gsap.killTweensOf(items)

        tl.to(items.not(active), {
            opacity: 0,
            duration: .7,
            stagger: -0.1
        }, 0)

        tl.to(active, {
            y: '-50%',
            top: '50vh',
            bottom: 'unset',
            duration: 1,
            borderRadius: 0,
            z: 0,
        }, 0.5)

        tl.to(active.find('.project-meta'), {
            opacity: 0,
            duration: 1,

        }, 1)

    }

    function minimalListOut(tl) {

        tl.to('.sml-wrapper .project-title', {

            yPercent: -100,
            duration: 1,
            ease: 'power4.in',
            stagger: 0.025

        }, 0)

    }

    function fullscreenWallOut(tl) {

        let targets = $('main').find('*').not('trans-image');

        tl.to('.title_line', {
            yPercent: -25,
            rotateX: -90,
            duration: 1,
            ease: 'expo.in'
        }, 0)

        tl.to('.project-title, .project-category, .showcase-footer', {
            opacity: 0,
            duration: 1,
            ease: 'expo.in'
        }, 0)

    }

    function showcase3dTitlesOut(tl) {

        let currRot = $('.s3t-projects-wrap').css('transform');



        tl.to('.s3t-projects-wrap .project-title', {
            y: -200,
            duration: 1,
            ease: 'expo.in',
            opacity: 0,
            onComplete: () => {

                $('.showcase-3d-titles').addClass('animatingg');

            }
        }, 0)

        tl.to('.showcase-footer', {
            opacity: 0
        }, 0)



    }

    function barbaPrevents() {

        var prevents = $('.elementor-image-gallery a, .lang-item, .lang-item a, .elementor-gallery__container a, .elementor-image-gallery, #wpadminbar, .elementor-editor-wp-page, .woocommerce-cart-form');

        prevents.attr('data-barba-prevent', 'all')
    }

    barbaPrevents();


    function projectImageLeave(tl, media) {


        let medTop = media.offset().top - $(window).scrollTop(),
            targets = $('main').find('.elementor-widget-container'),
            exclude = media.parents('.elementor-widget-container').first(),
            others = exclude.find('.single-project-meta'),
            wido = media.outerWidth(),
            height = media.outerHeight(),
            left = media.offset().left;

        let margTop = parseInt(media.parents('.elementor-section').last().css('marginTop'), 10),
            margBottom = parseInt(media.parents('.elementor-section').last().css('marginBottom'), 10);

        media.attr('data-margins', margTop)


        if (media.find('.n-vimeo').length || media.find('.n-youtube').length) {


        } else {
            media.clone().addClass('clone').insertAfter(media);

            gsap.set(media, {
                top: medTop,
                width: wido,
                height: height,
                left: left,
                position: 'fixed',
                zIndex: 999
            })

        }



        if (media.find('.n-vimeo').length || media.find('.n-youtube').length) {

            let targets = $('main').find('.elementor-widget-container'),
                exclude = media.parents('.elementor-widget-container').first();

            tl.to(targets.not(exclude), {

                opacity: 0,
                duration: .4
            })

            media.addClass('animating')

        } else {

            $('body').hasClass('smooth-scroll') ? media.insertBefore('#smooth-content') : media.insertBefore('main');

            media.addClass('animating')

            tl.to($('main').first(), {
                opacity: 0,
                duration: .4
            }, 0)
        }



    }


    function showcaseImageLeave(tl, media) {


        let medTop = media.offset().top - $(window).scrollTop(),
            targets = $('main').find('.elementor-widget-container'),
            exclude = media.parents('.elementor-widget-container').first(),
            others = exclude.find('.single-project-meta'),
            wido = media.outerWidth(),
            height = media.outerHeight(),
            left = media.offset().left;

        if (media.find('.n-vimeo').length || media.find('.n-youtube').length) {


        } else {

            gsap.set(media, {
                top: medTop,
                width: wido,
                height: height,
                left: left,
                xPercent: 0,
                yPercent: 0,
                x: 0,
                y: 0,
                position: 'fixed',
                zIndex: 999
            })
            $('body').hasClass('smooth-scroll') ? media.insertBefore('#smooth-content') : media.insertBefore('main');

        }




        media.addClass('animating')

    }

    function projectImageEnter(tl, response) {

        let image = response.find('.project-page-header .project-image.featured'),
            height = image.outerHeight(),
            width = image.outerWidth(),
            left = image.offset().left,
            transImage = $('.animating'),
            top = image.offset().top - $('main').first().outerHeight() - $('main').first().offset().top;

        if (mobileQuery.matches) {

            let top = image.offset().top - $('main').first().outerHeight() - $('main').first().offset().top - (transImage.data('margins') != null ? transImage.data('margins') : 0);

        }

        image.hide();


        let next = $('main').last().css('--bg'),
            current = $('body').css('backgroundColor');

        projectBackground(current, next, tl, 0, true)

        if (transImage.find('.n-vimeo').length || transImage.find('.n-youtube').length) {

            tl.to(transImage, {
                clipPath: 'inset(0% 0% 100% 0%)',
                duration: 1,
                ease: 'expo.inOut',
            }, 1)

        } else {

            let state = Flip.getState(transImage);

            gsap.set(transImage, {
                position: 'fixed',
                top: top,
                height: height,
                width: width,
                left: left,
                y: 0,
                x: 0,
                yPercent: 0,
                xPercent: 0
            })


            let imgTo = Flip.from(state, {
                duration: 1,
                ease: 'expo.inOut',

            })

            tl.add(imgTo, 0);

        }

    }

    function showcaseImageEnter(tl, response) {

        let image = response.find('.project-page-header .project-image.featured'),
            top = image.offset().top - $('main').first().outerHeight(),
            height = image.outerHeight(),
            width = image.outerWidth(),
            left = image.offset().left,
            transImage = $('.animating');

        image.hide();


        let next = $('main').last().css('--bg'),
            current = $('body').css('backgroundColor');

        projectBackground(current, next, tl, 0, false)


        if (transImage.find('.n-vimeo').length || transImage.find('.n-youtube').length) {

            tl.to(transImage, {
                clipPath: 'inset(0% 0% 100% 0%)',
                duration: 1,
                ease: 'expo.inOut',
            }, 1)

        } else {

            let state = Flip.getState(transImage);

            gsap.set(transImage, {
                position: 'fixed',
                top: $('div.showcase-carousel').length ? top - 150 : $('div.showcase-wall').length ? top - 128 : top,
                height: height,
                width: width,
                left: left,
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0
            })

            let imgTo = Flip.from(state, {
                duration: 1.2,
                ease: 'expo.inOut',
            })

            tl.add(imgTo, 0);

        }

        if ($('.showcase-table').length) {

            gsap.to($('.showcase-project.hovered'), {
                opacity: 0,
                delay: 1
            })

        }



    }

    if ($('body').hasClass('ajax-enabled')) {

        barba.init({
            timeout: 30000,
            debug: false,
            transitions: [
                {
                    name: 'default-transition',
                    leave(data) {

                        return new Promise(function (resolve, reject) {

                            transitions.addClass('running');

                            let tl = gsap.timeline({
                                onStart: () => {
                                    gsap.set(transitions, {
                                        visibility: 'visible'
                                    })
                                },

                                onComplete: () => {

                                    resolve();
                                }
                            });

                            block ? animateBlocks(tl, true, false, data) : overlay ? animateOverlay(tl, true, false, data) : opacity ? animateOpacity(tl, true, false, data) : pageOver ? animatePageOver(tl, true, false, data) : columns ? animateColumns(tl, true, false, data) : '';

                            transitionCaption(tl, true, false, data)
                        })

                    },
                    beforeEnter(data) {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                onStart: () => {
                                    resolve();
                                    transitions.removeClass('running');
                                },
                                onComplete: () => {

                                    gsap.set(transitions, {
                                        clearProps: 'all'
                                    })

                                    if (block) {

                                        gsap.set('.transition-block', {
                                            clearProps: 'all'
                                        })

                                    }

                                }
                            });

                            block ? animateBlocks(tl, false, true, false) : overlay ? animateOverlay(tl, false, true, false) : opacity ? animateOpacity(tl, false, true, false) : pageOver ? animatePageOver(tl, false, true, false) : columns ? animateColumns(tl, false, true, false) : '';

                            transitionCaption(tl, false, true, false)

                        })
                    }

                }, {
                    name: 'fullscreen-menu-transition',
                    from: {
                        custom: ({
                            trigger
                        }) => {
                            return trigger.classList && trigger.classList.contains('menu-link');
                        },
                    },
                    leave(data) {

                        return new Promise(function (resolve, reject) {

                            transitions.addClass('running')

                            let tl = gsap.timeline({
                                    onStart: () => {
                                        gsap.set(transitions, {
                                            visibility: 'visible'
                                        })
                                    },

                                    onComplete: () => {
                                        resolve();
                                    }
                                }),
                                toggle = $('.menu-toggle');

                            toggle.trigger('click')

                            block ? animateBlocks(tl, true, false, data) : overlay ? animateOverlay(tl, true, false, data) : opacity ? animateOpacity(tl, true, false, data) : pageOver ? animatePageOver(tl, true, false, data) : columns ? animateColumns(tl, true, false, data) : '';

                            transitionCaption(tl, true, false, data)





                        })

                    },
                    beforeEnter(data) {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                onStart: () => {
                                    resolve();
                                    transitions.removeClass('running')
                                },
                                onComplete: () => {
                                    gsap.set(transitions, {
                                        clearProps: 'all'
                                    })
                                }

                            });

                            block ? animateBlocks(tl, false, true, false) : overlay ? animateOverlay(tl, false, true, false) : opacity ? animateOpacity(tl, false, true, false) : pageOver ? animatePageOver(tl, false, true, false) : columns ? animateColumns(tl, false, true, false) : '';

                            transitionCaption(tl, false, true, false)



                        })
                    }
            },
                {
                    name: 'media-center-to-image',
                    from: {
                        custom: ({
                            trigger
                        }) => {
                            return trigger.classList && trigger.classList.contains('sc-link');
                        },
                    },
                    to: {
                        namespace: ['project-half-image', 'project-image-gallery-horizontal', 'project-no-image', 'project-image-gallery-vertical', 'project-video', 'project-creative', 'project-boxed-image', 'project-fullscreen-image', 'project-tall-image']
                    },
                    leave() {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                onComplete: () => {
                                    resolve();
                                }
                            })

                            if ($('div.showcase-carousel').length || $('div.showcase-fullscreen-carousel').length || $('div.showcase-fullscreen-slideshow').length || $('div.showcase-3d-titles').length || $('div.showcase-cards').length || $('div.showcase-table').length) {

                            } else {

                                getMediaToCenter(tl, 1.5);
                            }


                            $('div.showcase-table').length ? outAnimShowcaseTable(tl) : $('div.showcase-cards').length ? showcaseCardsOut(tl) : $('div.showcase-carousel').length ? outAnimShowcaseCarousel(tl) : $('div.showcase-fullscreen-carousel').length ? fullscreenCarouselOut(tl) : $('div.showcase-fullscreen-slideshow').length ? fullscreenSlideshowOut(tl) : $('div.showcase-minimal-list').length ? minimalListOut(tl) : $('div.showcase-fullscreen-wall').length ? fullscreenWallOut(tl) : $('div.showcase-list').length ? showcaseListOut(tl) : $('div.showcase-3d-titles').length ? showcase3dTitlesOut(tl) : null;

                        })
                    },
                    afterLeave() {

                        return new Promise(function (resolve, reject) {

                            if ($('div.showcase-carousel').length || $('div.showcase-fullscreen-carousel').length || $('div.showcase-fullscreen-slideshow').length || $('div.showcase-3d-titles').length || $('div.showcase-cards').length || $('div.showcase-table').length) {

                                let tl = gsap.timeline({
                                    onComplete: () => {
                                        resolve();
                                    }
                                })


                                $('div.showcase-table').length ? getMediaToCenter(tl, 0) :
                                    $('div.showcase-carousel').length ? getMediaToCenter(tl, 0) : $('div.showcase-cards').length ? getMediaToCenter(tl, 0) : getMediaToCenter(tl, 1.5);

                            } else {

                                resolve();
                            }

                        })

                    },
                    beforeEnter() {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                delay: 1.5,
                                onComplete: () => {

                                    resolve();
                                    setTimeout(function () {

                                        $('.project-trans-overlay').remove();
                                        $('.project-image.featured').show();
                                        $('.animating').remove();
                                    }, $('body').hasClass('smooth-scroll') ? 300 : 100)
                                }
                            })

                            showcaseImageEnter(tl, $('main').last())
                        })

                    }
                }, {
                    name: 'inline-project-transition',
                    from: {
                        custom: ({
                            trigger
                        }) => {
                            return trigger.classList && trigger.classList.contains('inner-project-link');
                        },
                    },
                    to: {
                        namespace: ['project-boxed-image', 'project-fullscreen-image', 'project-half-image', 'project-creative', 'project-tall-image', 'project-image-gallery-horizontal', 'project-image-gallery-vertical', 'project-video']
                    },
                    leave(trigger) {

                        return new Promise(function (resolve, reject) {

                            let clicked = $(trigger.trigger);

                            let tl = gsap.timeline({
                                    onComplete: () => {

                                        resolve();
                                    }
                                }),
                                media;

                            if (clicked.find('.trans-media').length) {

                                media = clicked.find('.trans-media');

                            } else {
                                media = $('.trans-media')
                            }

                            projectImageLeave(tl, media);

                        })
                    },
                    beforeEnter(data) {

                        return new Promise(function (resolve, reject) {


                            let tl = gsap.timeline({
                                delay: 2,
                                onComplete: () => {

                                    resolve();

                                    setTimeout(function () {

                                        $('.project-trans-overlay').remove();
                                        $('.project-image.featured').show();
                                        $('.animating').remove();
                                    }, $('body').hasClass('smooth-scroll') ? 300 : 100)

                                }

                            })

                            projectImageEnter(tl, $('main').last())

                        })

                    },

                }, {
                    name: 'showcase-project-transition',
                    from: {
                        custom: ({
                            trigger
                        }) => {
                            return trigger.classList && trigger.classList.contains('showcase-project-link');
                        },
                    },
                    to: {
                        namespace: ['project-boxed-image', 'project-fullscreen-image', 'project-half-image', 'project-creative', 'project-tall-image', 'project-image-gallery-horizontal', 'project-image-gallery-vertical', 'project-video']
                    },
                    leave() {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                onComplete: () => {
                                    resolve();
                                }
                            })

                            showcaseImageLeave(tl, $('.trans-media'));

                            $('div.nayla-interactive-carousel').length ? outAnimInteractiveCarousel(tl) : $('div.showcase-carousel').length ? outAnimShowcaseCarousel(tl) : $('div.showcase-fullscreen-carousel').length ? fullscreenCarouselOut(tl) : $('div.showcase-fullscreen-slideshow').length ? fullscreenSlideshowOut(tl) : $('div.showcase-minimal-list').length ? minimalListOut(tl) : $('div.showcase-fullscreen-wall').length ? fullscreenWallOut(tl) : $('div.showcase-list').length ? showcaseListOut(tl) : $('div.showcase-3d-titles').length ? showcase3dTitlesOut(tl) : null;



                        })
                    },
                    beforeEnter(data) {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                delay: 1.5,
                                onComplete: () => {

                                    resolve();
                                    setTimeout(function () {

                                        $('.project-trans-overlay').remove();
                                        $('.project-image.featured').show();
                                        $('.animating').remove();
                                    }, $('body').hasClass('smooth-scroll') ? 300 : 100)

                                }

                            })

                            showcaseImageEnter(tl, $('main').last())

                        })

                    }
                }, {
                    name: 'projects-grid-transition',
                    from: {
                        custom: ({
                            trigger
                        }) => {
                            return trigger.classList && trigger.classList.contains('grid-project-link');
                        },
                    },
                    to: {
                        namespace: ['project-boxed-image', 'project-fullscreen-image', 'project-half-image', 'project-creative', 'project-tall-image', 'project-image-gallery-horizontal', 'project-image-gallery-vertical', 'project-video']
                    },
                    leave() {

                        return new Promise(function (resolve, reject) {


                            let tl = gsap.timeline({
                                onComplete: () => {

                                    resolve();
                                }
                            })


                            let media = $('.trans-media'),
                                target;

                            if ($('body').hasClass('smooth-scroll')) {

                                let aliothSmoother = ScrollSmoother.get();
                                aliothSmoother.scrollTo(media.offset().top - ($(window).outerHeight() - media.outerHeight()) + (($(window).outerHeight() - media.outerHeight()) / 2), 2);

                            } else {

                                target = window
                            }

                            tl.to(window, {
                                scrollTo: media.offset().top - ($(window).outerHeight() - media.outerHeight()) + (($(window).outerHeight() - media.outerHeight()) / 2),
                                duration: 2,
                                ease: 'power3.out',
                                onComplete: () => {

                                    let medTop = media.offset().top - $(window).scrollTop(),
                                        wido = media.outerWidth(),
                                        height = media.outerHeight(),
                                        left = media.offset().left;


                                    if (media.find('.n-vimeo').length || media.find('.n-youtube').length) {


                                    } else {

                                        $('body').hasClass('smooth-scroll') ? media.insertBefore('#smooth-content') : media.insertBefore('main');


                                        gsap.set(media, {
                                            top: medTop,
                                            width: wido,
                                            height: height,
                                            left: left,
                                            position: 'fixed',
                                            zIndex: 999,
                                        })

                                    }

                                    media.addClass('animating');

                                }
                            });

                            let otherProj = $('.grid-project').not(media.parents()),
                                targets = $('main').find('.elementor-widget-container'),
                                exclude = media.parents('.elementor-widget-container').first(),
                                lastTar;

                            if (targets.length > 1) {

                                lastTar = targets.not(exclude)
                            } else {

                                lastTar = null
                            }


                            if (media.find('.nayla-video').length) {

                                tl.to([otherProj, '.grid-controls', lastTar], {
                                    opacity: 0
                                }, 0)



                            } else {

                                tl.to([otherProj, media.parent('div').find('.masked'), '.grid-controls', lastTar], {
                                    opacity: 0
                                }, 0)

                            }


                            tl.to('hr', {
                                width: 0
                            }, 0)


                        })
                    },
                    beforeEnter(data) {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                onStart: () => {

                                    gsap.set($('main').last(), {
                                        opacity: 0
                                    })

                                },
                                onComplete: () => {

                                    resolve();
                                    gsap.set($('main').last(), {
                                        opacity: 1
                                    })

                                    setTimeout(function () {

                                        $('.project-trans-overlay').remove();
                                        $('.project-image.featured').show();
                                        $('.animating').remove();
                                    }, $('body').hasClass('smooth-scroll') ? 300 : 100)

                                }

                            })


                            projectImageEnter(tl, $('main').last())


                        })

                    }
                }, {
                    name: 'next-project-transition',
                    from: {
                        custom: ({
                            trigger
                        }) => {
                            return trigger.classList && trigger.classList.contains('next-project-link');
                        },
                    },
                    to: {
                        namespace: ['project-boxed-image', 'project-fullscreen-image', 'project-half-image', 'project-creative', 'project-tall-image', 'project-image-gallery-horizontal', 'project-image-gallery-vertical', 'project-video']
                    },
                    leave() {

                        return new Promise(function (resolve, reject) {


                            let tl = gsap.timeline({
                                onComplete: () => {

                                    resolve();
                                }
                            })


                            let media = $('.next-project-image'),
                                parent = $('.nayla-next-project'),
                                targets = ['div.next-project-caption , .next-project-title, .next-project-metas'],
                                bg = parent.css('backgroundColor'),
                                target;

                            headerLayoutChange(false, bg, false, true)


                            tl.to(window, {
                                scrollTo: parent.offset().top,
                                duration: 1,
                                ease: 'power3.out',
                                onComplete: () => {

                                    let medTop = media.offset().top - $(window).scrollTop(),
                                        wido = media.outerWidth(),
                                        height = media.outerHeight(),
                                        left = media.offset().left;

                                    $('body').hasClass('smooth-scroll') ? media.insertBefore('#smooth-content') : media.insertBefore('main');;

                                    gsap.set(media, {
                                        top: medTop,
                                        width: wido,
                                        height: height,
                                        left: left,
                                        xPercent: 0,
                                        yPercent: 0,
                                        x: 0,
                                        y: 0,
                                        position: 'fixed',
                                        zIndex: 999,
                                    })
                                    media.addClass('animating');

                                }
                            });

                            tl.to(targets, {
                                opacity: 0
                            })



                        })
                    },
                    beforeEnter(data) {

                        return new Promise(function (resolve, reject) {

                            let tl = gsap.timeline({
                                onStart: () => {

                                    gsap.set($('main').last(), {
                                        opacity: 0
                                    })

                                },
                                onComplete: () => {

                                    resolve();
                                    gsap.set($('main').last(), {
                                        opacity: 1
                                    })

                                    setTimeout(function () {

                                        $('.project-trans-overlay').remove();
                                        $('.project-image.featured').show();
                                        $('.animating').remove();
                                    }, $('body').hasClass('smooth-scroll') ? 300 : 100)

                                }

                            })


                            let response = $('main').last();

                            let image = response.find('.project-page-header .project-image.featured'),
                                top = image.offset().top - $('main').first().outerHeight() - ($('main').first().find('.project-page').outerHeight()),
                                height = image.outerHeight(),
                                width = image.outerWidth(),
                                left = image.offset().left,
                                transImage = $('.animating');

                            image.hide();

                            let state = Flip.getState(transImage);

                            gsap.set(transImage, {
                                position: 'fixed',
                                top: top,
                                height: height,
                                width: width,
                                left: left,
                            })

                            let next = $('.project-page-header').css('backgroundColor'),
                                current = $('main').css('backgroundColor')



                            let imgTo = Flip.from(state, {
                                duration: 1,
                                ease: 'expo.inOut',

                            })

                            tl.add(imgTo, 0);


                        })

                    }
                }

            ]
        })


        if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
        }

        ScrollTrigger.clearScrollMemory('manual');

        function startLoading() {

            $('html').addClass('loading');

            disableScroll();

            $('#mouseCursor').removeClass('hover-size hover-text hover-icon')
        }

        $(document).ready(function () {

            $('.inner-project-link, .next-project-link, .grid-project-link, .menu-link, .sc-link, .showcase-project-link').on('click', () => {

                startLoading()

            })

        })


        barba.hooks.before((data) => {

            startLoading();

        });

        barba.hooks.enter((data) => {

            var response = data.next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                current = data.current.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html),
                bodyClasses = $(response).filter('notbody').attr('class'),
                bodyStyles = $(response).filter('notbody').attr('style'),
                headerClasses = $(response).filter('notbody').find('.site-header').attr('class'),
                headerInner = $(response).filter('notbody').find('.site-header').html(),
                targetTransBg = $(response).filter('notbody').find('.nayla-page-transition').data('bg'),
                currTransBg = $(current).filter('notbody').find('.nayla-page-transition').data('bg');

            transitions.attr('data-bg', targetTransBg)


            gsap.set('#page', {
                clearProps: 'all'
            })

            $('body').attr('class', bodyClasses);

            if (switchedDark == true) {
                $('body').addClass('dark')
                $('body').removeClass('light')
            }

            if (switchedLight == true) {
                $('body').removeClass('dark')
                $('body').addClass('light')
            }

            naylaSmoother == true ? $('body').addClass('smooth-scroll') : '';

            $('body').attr('style', bodyStyles);

            $('.site-header').attr('class', headerClasses);

            if (switchedDark == true) {

                headerLight = true;
                headerDark = false;

                $('.site-header').removeClass('dark')
                $('.site-header').addClass('light')

            } else if (switchedLight == true) {

                $('.site-header').removeClass('light')
                $('.site-header').addClass('dark')

            }

            var $newPageHead = $('<head />').html(
                $.parseHTML(
                    data.next.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0], // <- use data argument
                    document,
                    true
                )
            );

            var elementorTags = [
            			         'link[id*="elementor"]',
            			         'link[id*="eael"]', // Essential Addons plugin post CSS
            			         'style[id*="elementor"]',
            			         'style[id*="eael"]', // Essential Addons plugin inline CSS
                                'style[id*=elementor-frontend-inline]',
								'style[id*="elementor-post"]',
								'link[id*="elementor-post"]',
            ].join(',');

            var headTags = [
            			         'meta[name="keywords"]',
            			         'meta[name="description"]',
            			         'meta[property^="og"]',
            			         'meta[name^="twitter"]',
            			         'meta[itemprop]',
            			         'link[itemprop]',
            			         'link[rel="prev"]',
            			         'link[rel="next"]',
            			         'link[rel="canonical"]',
            			         'link[rel="alternate"]',
            			         'link[rel="shortlink"]',
								'link[id*="google-fonts"]',
                                'style[id*="nayla-body-styles"]'
            ].join(',');


            let oldElementorTags = $('head').find(elementorTags),
                newElementorTags = $newPageHead.find(elementorTags);

            if (bodyClasses.indexOf("elementor-page") >= 0) {

                $('head').find(elementorTags).remove();
                $newPageHead.find(elementorTags).appendTo('head');

            }

            $(response).remove();

            $('head').find(headTags).remove();
            $newPageHead.find(headTags).appendTo('head');

            if ($('body').hasClass('smooth-scroll')) {

                let aliothSmoother = ScrollSmoother.get();
                aliothSmoother.scrollTo(0, false);
                window.scrollTo(0, 0);

            } else {

                window.scrollTo(0, 0);
            }

            let Alltrigger = ScrollTrigger.getAll()

            for (let i = 0; i < Alltrigger.length; i++) {
                Alltrigger[i].kill(true)
            }

            gsap.set(siteHeader, {
                clearProps: 'all'
            })

            $('html').removeClass('loading');

            enableScroll();

            setTimeout(function () {

                if (typeof window.elementorFrontend !== 'undefined') {

                    elementorFrontend.init();
                };

                initScripts();
                shopScripts();
                barbaPrevents();

            }, 100)


            setTimeout(function () {

                let siteHeader = $('.site-header'),
                    stickyTargets;

                ScrollTrigger.refresh()

                if (siteHeader.find('.hide-sticky').length) {

                    stickyTargets = siteHeader.find('.hide-sticky');
                }

                siteHeader.removeClass('sticked');

                gsap.set([siteHeader, stickyTargets, siteHeader.children('div'), siteHeader.find('.site-logo'), siteHeader.find('.sticky-logo')], {
                    clearProps: 'all'
                });


                naylaHeader();

                ScrollTrigger.refresh(true);

                var forms = $('div.wpcf7 > form');

                if (forms.length) {

                    forms.each(function () {
                        var $form = $(this);
                        wpcf7.init($form[0]);
                    });

                }


            }, 200)



        });

    }


    if (!$('body').hasClass('elementor-editor-active')) {
        pageLoader();
    }

    function initScripts() {

        detectPov();
        naylaProjectPages();
        naylaMouseCursor();
        naylaSinglePostPage();
        naylaNextProject();
        nayla404page();
    }

    function shopScripts() {
        naylaProductPage()
        naylaArchiveProducts()
        naylaCartPage();

        $(document).on('click', '.product-acts a.button', function (e) {


            var $thisbutton = $(this);


            if (!$thisbutton.parents('.product-type-variable').length) {

                e.preventDefault();

                let $form = $thisbutton.closest('form.cart'),
                    id = $(this).data('product-id'),
                    product_qty = 1,
                    product_id = $(this).data('product-id'),
                    variation_id = $(this).data('product-id');

                var data = {
                    action: 'woocommerce_ajax_add_to_cart',
                    product_id: product_id,
                    product_sku: '',
                    quantity: product_qty,

                };


                $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

                $.ajax({
                    type: 'post',
                    url: wc_add_to_cart_params.ajax_url,
                    data: data,
                    beforeSend: function (response) {
                        $thisbutton.removeClass('added').addClass('loading');
                    },
                    complete: function (response) {
                        $thisbutton.addClass('added').removeClass('loading');


                        let curr = $('.cart-count > span').html(),
                            rs = parseInt(curr);

                        $('.cart-count > span').html(rs + 1);


                    },
                    success: function (response) {

                        if (response.error && response.product_url) {

                            return;
                        } else {
                            $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);


                        }
                    },
                });

                return false;
            }



        });

        $(document).on('click', '.single_add_to_cart_button', function (e) {
            e.preventDefault();

            var $thisbutton = $(this),
                $form = $thisbutton.closest('form.cart'),
                id = $thisbutton.val(),
                product_qty = $form.find('input[name=quantity]').val() || 1,
                product_id = $form.find('input[name=product_id]').val() || id,
                variation_id = $form.find('input[name=variation_id]').val() || 0;



            var data = {
                action: 'woocommerce_ajax_add_to_cart',
                product_id: product_id,
                product_sku: '',
                quantity: product_qty,
                variation_id: variation_id,
            };

            $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

            $.ajax({
                type: 'post',
                url: wc_add_to_cart_params.ajax_url,
                data: data,
                beforeSend: function (response) {
                    $thisbutton.removeClass('added').addClass('loading');
                },
                complete: function (response) {
                    $thisbutton.addClass('added').removeClass('loading');


                    let curr = $('.cart-count > span').html(),
                        rs = parseInt(curr),
                        qty = parseInt(product_qty);

                    $('.cart-count > span').html(rs + qty);

                },
                success: function (response) {

                    if (response.error && response.product_url) {
                        window.location = response.product_url;
                        return;
                    } else {
                        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                    }
                },
            });

            return false;
        });


    }


    let loader = gsap.getById("innerTl");

    if (loader != null) {

        loader.eventCallback('onComplete', () => {

            gsap.set('.page-loader', {
                height: 0,
                visibility: 'hidden'
            });

            setTimeout(function () {

                if (!$('body').hasClass('elementor-editor-active')) {
                    smoothScroll();
                }

                initScripts();
                shopScripts();
                naylaHeader();
                siteNavigation();
                naylaScrollButtons($('.menu').find('.scroll-button'));
            }, 50)
        })

    } else {

        window.onload = function () {

            setTimeout(function () {

                let instance = ScrollTrigger.getAll(),
                    i = 0;

                for (i = 0; i < instance.length; i++) {

                    instance[i].enable();

                }

                if (!$('body').hasClass('elementor-editor-active')) {
                    smoothScroll();
                }


                initScripts();
                shopScripts()
                naylaHeader();
                siteNavigation();
                naylaScrollButtons($('.menu').find('.scroll-button'));

            }, 200)

        };

    }


}(jQuery));

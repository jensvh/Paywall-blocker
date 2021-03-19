! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 159)
}([function(e, t) {
    e.exports = React
}, function(e, t, n) {
    var r;
    /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
    */
    ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                    var o = typeof r;
                    if ("string" === o || "number" === o) e.push(r);
                    else if (Array.isArray(r) && r.length) {
                        var i = a.apply(null, r);
                        i && e.push(i)
                    } else if ("object" === o)
                        for (var c in r) n.call(r, c) && r[c] && e.push(c)
                }
            }
            return e.join(" ")
        }
        e.exports ? (a.default = a, e.exports = a) : void 0 === (r = function() {
            return a
        }.apply(t, [])) || (e.exports = r)
    }()
}, , function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(118),
        a = n(170),
        o = n(119);
    e.exports = function(e, t) {
        return r(e) || a(e, t) || o()
    }
}, function(e, t) {
    e.exports = {
        ARTICLE_CONTENT: "ArticleContent",
        PACO_ARTICLE_CONTENT: "PacoArticleContent",
        PACO_PAYWALL: "PacoPaywall",
        ARTICLE_SOCIAL_BAR: "ArticleSocialBar",
        MOBILE_SOCIAL_BAR: "MobileSocialBar",
        ARTICLE_TAGS: "ArticleTags",
        DEFAULT_ASPECT_RATIO_IMAGES: "3:2",
        DEFAULT_ASPECT_RATIO_VIDEO: "16:9",
        DEFAULT_IMAGE_SIZE: "xlarge",
        DEFAULT_IMAGE_SIZE_CROPPED: "xlarge_cropped",
        DEFAULT_THUMBNAIL_SIZE: "small",
        SCRIBBLE_POSTS_PER_PAGE: 20,
        SCRIBBLE_TOKEN: "FvtLLowi",
        SECTION_SPORTS_ID: "4dff3e33-6c32-4e60-803c-a2ac00ede26c",
        DATASOURCE_ACTIVE_PERSO: "ActivePersonalisation",
        DATASOURCE_READ_LATER: "ReadLater",
        TYPE_DESKTOP: "desktop",
        TYPE_MOBILE: "mobile",
        DEVICE_WWW: "www",
        DEVICE_MOB: "mobile"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return i
    }));
    var r = n(0),
        a = Object(r.createContext)(null),
        o = a.Provider,
        i = function() {
            return Object(r.useContext)(a)
        }
}, function(e, t) {
    function n() {
        return e.exports = n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, n.apply(this, arguments)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "index";
        return e.map((function(e, n) {
            return e[t] = n
        }))
    }
    var a = n(4),
        o = n.n(a),
        i = n(7),
        c = n.n(i),
        l = n(0),
        u = n.n(l),
        s = n(199),
        f = n(201),
        d = n(102),
        v = n(53),
        g = n(46),
        h = n.n(g),
        p = n(6),
        m = function(e) {
            var t, n = e.item,
                r = e.type,
                a = void 0 === r ? "post" : r,
                o = n && Object.values(n)[0],
                i = Object(p.b)().isKioskPreview;
            if (!o) return null;
            if ("post" === a) t = "fb-post";
            else {
                if ("comments" !== a) return null;
                t = "fb-comments"
            }
            return void 0 !== i && i ? u.a.createElement(l.Fragment, null, u.a.createElement("div", {
                id: "fb-root"
            }), u.a.createElement("script", {
                src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0"
            }), u.a.createElement("div", {
                class: "fb-post",
                "data-href": o,
                "data-width": "500"
            })) : u.a.createElement(l.Fragment, null, u.a.createElement(d.a, {
                mb: 5,
                className: t,
                "data-href": o,
                "data-testid": "embed-facebook"
            }), u.a.createElement(h.a, {
                url: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0",
                attributes: {
                    async: !0,
                    "data-testid": "facebook-script"
                }
            }))
        },
        b = function(e) {
            var t = e.url,
                n = Object(l.useRef)(null),
                r = Object(p.b)().isKioskPreview,
                a = void 0 !== r && r,
                o = At(t);
            return u.a.createElement(l.Fragment, null, u.a.createElement(d.a, {
                mb: 5,
                ref: n,
                "data-testid": "embed-twitter"
            }), a ? u.a.createElement(l.Fragment, null, u.a.createElement("div", {
                id: "embed-twitter-preview-".concat(o)
            }), u.a.createElement("script", {
                src: "https://platform.twitter.com/widgets.js"
            }), u.a.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: '<script>if(window.twttr) {\n            window.twttr.widgets.createTweet("'.concat(o, '", document.getElementById("embed-twitter-preview-').concat(o, '"), {})\n          }<\/script>')
                }
            })) : u.a.createElement(h.a, {
                url: "https://platform.twitter.com/widgets.js",
                onLoad: function() {
                    var e = window.twttr;
                    e && n.current && o && e.widgets.createTweet(o, n.current, {})
                },
                attributes: {
                    async: !0,
                    "data-testid": "twitter-script"
                }
            }))
        },
        y = n(140),
        w = n.n(y),
        E = function(e) {
            var t = e.url,
                n = new URL(t);
            n.search = "";
            var r = Object(p.b)().brand,
                a = "https://graph.facebook.com/v8.0/instagram_oembed/?url=".concat(n, "&access_token=").concat(Xt(null == r ? void 0 : r.code)),
                i = Object(l.useState)(null),
                c = o()(i, 2),
                s = c[0],
                f = c[1],
                v = Object(p.b)().isKioskPreview,
                g = void 0 !== v && v;
            return Object(l.useEffect)((function() {
                w.a.get(a).then((function(e) {
                    return e && e.data && f(e.data.html)
                })).catch((function(e) {
                    throw new Error(e)
                }))
            }), []), g ? u.a.createElement(l.Fragment, null, u.a.createElement("iframe", {
                src: "".concat(n, "embed/captioned"),
                title: "embed-instagram-preview",
                width: "500",
                height: "580"
            })) : s && u.a.createElement(l.Fragment, null, u.a.createElement(d.a, {
                mb: 5,
                dangerouslySetInnerHTML: {
                    __html: s
                },
                "data-testid": "embed-instagram"
            }), u.a.createElement(h.a, {
                url: "https://platform.instagram.com/en_US/embeds.js",
                attributes: {
                    async: !0,
                    "data-testid": "instagram-script"
                }
            }))
        },
        x = n(5),
        _ = n(61),
        O = n(44),
        R = n(141),
        z = n.n(R),
        C = function(e) {
            return /(px|%)$/.test(e) ? e : "".concat(e, "px")
        },
        M = function(e) {
            var t = e.height,
                n = e.src,
                r = e.width,
                a = e.caption,
                o = e.credit,
                i = Boolean(t && r),
                c = i ? {
                    height: C(t),
                    width: C(r)
                } : {},
                l = i ? "".concat(r, ":").concat(t) : x.DEFAULT_ASPECT_RATIO_VIDEO;
            return n ? u.a.createElement(d.a, {
                mb: 5
            }, u.a.createElement(O.a, {
                aspectRatio: l,
                style: c
            }, u.a.createElement("iframe", {
                className: z.a.iframe,
                src: n,
                title: n
            })), u.a.createElement(_.a, {
                caption: a,
                credit: o
            })) : null
        },
        A = n(16),
        j = n(143),
        S = n(144),
        L = n(142),
        B = n.n(L),
        P = function(e) {
            var t = e.videoId,
                n = e.type,
                r = e.caption,
                a = e.credit,
                i = e.index,
                c = Object(p.b)(),
                s = (c && c.brand).code,
                f = jt(s),
                d = "".concat("//shared.mediahuis.be", "/videoplayers/").concat(St(s), "/video-theoplayer.js"),
                v = Object(l.useState)(!1),
                g = o()(v, 2),
                m = g[0],
                b = g[1],
                y = Object(A.d)("\n  query Embed($brand: ID!, $type: String!, $videoId: String!) {\n    embed(brand: $brand, type: $type) {\n      replace(url: $videoId)\n    }\n  }\n", {
                    variables: {
                        brand: f,
                        type: n,
                        videoId: t
                    }
                }),
                w = y.loading,
                E = y.error,
                R = y.data;
            Object(l.useEffect)((function() {
                var e;
                (b(0 === document.querySelectorAll('script[src*="video-theoplayer.js"]').length), w) || (null === (e = window.VideoTheoplayer) || void 0 === e || e.checkUnitializedPlayers())
            }), [w]);
            var z = "streamone" === n;
            return u.a.createElement(l.Fragment, null, u.a.createElement("div", {
                className: "video ".concat(B.a.placeholder),
                "data-testid": "embed-video",
                "data-index": i
            }, u.a.createElement(O.a, {
                aspectRatio: x.DEFAULT_ASPECT_RATIO_VIDEO
            }, w && u.a.createElement(j.a, {
                justifyContent: "center",
                alignItems: "center"
            }, u.a.createElement(S.a, null)), E && "Error loading video: ".concat(E.message), (null == R ? void 0 : R.embed) && u.a.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: R.embed.replace
                }
            }))), u.a.createElement(_.a, {
                caption: r,
                credit: a
            }), z && m && u.a.createElement(h.a, {
                defer: !0,
                url: d
            }))
        },
        T = n(1),
        k = n.n(T),
        H = n(45),
        I = n.n(H),
        F = n(9),
        D = n(157),
        N = n(42),
        V = n(95),
        W = n(10),
        U = n(47),
        $ = n.n(U);

    function G() {
        return (G = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Y = [],
        q = Object(l.forwardRef)((function(e, t) {
            var n = e.children,
                r = e.icon,
                a = e.iconColor,
                o = e.accessibilityLabel,
                i = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["children", "icon", "iconColor", "accessibilityLabel"]),
                c = Object(W.a)(i, Y),
                l = c[0],
                s = c[1],
                f = c[2],
                d = Object(D.a)(r, "ListItem", F.Bullet);
            return u.a.createElement("li", G({}, f, {
                ref: t,
                className: k()($.a.listItemRoot, r && $.a.customIcon, l),
                style: s
            }), u.a.createElement(N.a, G({
                "aria-hidden": "true"
            }, d, {
                color: a,
                className: $.a.icon
            })), o && u.a.createElement(V.a, null, o, " "), n)
        }));
    q.displayName = "ListItem", q.identifier = q.displayName, q.clonableProps = Y, q.defaultProps = {
        accessibilityLabel: ""
    };
    var J = q,
        K = n(18);

    function X() {
        return (X = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Z = ["flexProps", "marginProps", "floatProps", "positioningProps", "widthProps"],
        Q = Object(l.forwardRef)((function(e, t) {
            var n, r = e.as,
                a = e.children,
                o = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["as", "children"]),
                i = Object(W.a)(o, Z),
                c = i[0],
                l = i[1],
                s = i[2],
                f = ((n = {})[$.a.root] = !0, n[$.a.bullet] = "ul" === r, n[$.a.decimal] = "ol" === r, n);
            return u.a.createElement(K.a, X({}, s, {
                ref: t,
                className: k()(f, c),
                style: l,
                as: r
            }), a)
        }));
    Q.displayName = "List", Q.identifier = Q.displayName, Q.clonableProps = Z, Q.defaultProps = {
        as: "ul"
    };
    var ee = Q,
        te = n(145),
        ne = n.n(te),
        re = function(e) {
            var t = e.items,
                n = e.type,
                r = void 0 === n ? "bullet" : n,
                a = I()(e, ["items", "type"]),
                o = "number" === r;
            return u.a.createElement(ee, c()({
                as: o ? "ol" : "ul",
                className: ne.a.root,
                "data-testid": "content-list"
            }, a), function(e) {
                return e.map((function(e) {
                    return u.a.createElement(J, {
                        key: e,
                        fontFamily: "primary"
                    }, u.a.createElement(d.a, {
                        display: "inline-block",
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }))
                }))
            }(t))
        },
        ae = n(32),
        oe = n(200),
        ie = function(e) {
            var t = e.handleClick;
            return u.a.createElement(d.a, {
                bgColor: "colorGrey10",
                p: 4,
                mb: 5,
                "data-testid": "embed-message-gdpr"
            }, u.a.createElement(s.a, {
                mb: 4
            }, "Hier staat ingevoegde content uit een social media netwerk dat cookies wil schrijven of uitlezen. U heeft hiervoor geen toestemming gegeven."), u.a.createElement(oe.a, {
                appearance: "primary",
                onClick: t,
                size: "small"
            }, "Klik hier om uw voorkeuren aan te passen"))
        },
        ce = function(e) {
            return e && e.cookies && e.socialMedia
        },
        le = function() {
            var e, t, n, r;
            null === (e = window) || void 0 === e || null === (t = e.Didomi) || void 0 === t || null === (n = t.preferences) || void 0 === n || null === (r = n.show) || void 0 === r || r.call(n)
        },
        ue = function(e) {
            return function(t) {
                var n = Object(p.b)().isKioskPreview,
                    r = void 0 !== n && n,
                    a = Object(l.useState)(!1),
                    i = o()(a, 2),
                    s = i[0],
                    f = i[1];
                return Object(l.useEffect)((function() {
                    return window.gdprConsents ? f(ce(window.gdprConsents)) : ae.a.subscribe("GDPR/loaded", (function(e) {
                            var t = e.mhConsents;
                            f(ce(void 0 === t ? {} : t))
                        })), ae.a.subscribe("GDPR/update", (function(e) {
                            var t = e.mhConsents;
                            f(ce(void 0 === t ? {} : t))
                        })),
                        function() {
                            ae.a.unsubscribe("GDPR/update")
                        }
                })), e ? s || r ? u.a.createElement(e, t) : u.a.createElement(ie, c()({}, t, {
                    handleClick: le
                })) : null
            }
        },
        se = n(139),
        fe = n(43),
        de = n(96),
        ve = n(40),
        ge = "https://".concat("", "liveapi.sportwereld.be/livesports/JsonLiveMatchesTeasers/?sids=");

    function he(e) {
        var t = e.windowKey,
            n = e.value;
        return "undefined" != typeof window ? null : u.a.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: '<script type="text/javascript">window[\''.concat(t, "']=\"").concat(n, '";<\/script>')
            }
        })
    }
    var pe = "undefined" == typeof window,
        me = function(e) {
            var t, n = e.teamName,
                r = e.teamLogo,
                a = Object(p.b)(),
                o = jt(null == a ? void 0 : null === (t = a.brand) || void 0 === t ? void 0 : t.code);
            return u.a.createElement(d.a, {
                width: "30%"
            }, u.a.createElement(se.a, {
                src: "https://sportimages.".concat(o, "/").concat(r),
                alt: "Logo ".concat(n),
                maxWidth: "50px"
            }), u.a.createElement(fe.a, {
                as: "div",
                fontFamily: "system",
                size: "Caption2",
                textTransform: "uppercase",
                decoration: "underline"
            }, n))
        };

    function be(e) {
        var t, n = e.sid,
            r = "live-teaser-event-".concat(n),
            a = null,
            i = Object(de.b)().liveMatchIds,
            c = "".concat(ge).concat(i.join("_")),
            l = Object(ve.c)({
                url: c,
                expiry: 24e4,
                type: "json",
                refreshInterval: 6e4,
                defaultData: pe ? null : JSON.parse(decodeURIComponent(window[r] || null))
            }).data,
            s = (null == l ? void 0 : null === (t = l.events) || void 0 === t ? void 0 : t.filter((function(e) {
                return e.sid === Number(n)
            }))) || [],
            f = o()(s, 1)[0];
        if (pe) {
            if (!f) return null;
            a = u.a.createElement(he, {
                windowKey: r,
                value: encodeURIComponent(JSON.stringify(f))
            })
        }
        var v = f || {},
            g = v.homeTeam,
            h = v.homeTeamLogo,
            p = v.awayTeam,
            m = v.awayTeamLogo,
            b = v.result,
            y = v.status;
        return g ? u.a.createElement(d.a, {
            bgColor: "colorGrey20",
            mr: 4,
            pt: 2,
            pr: 2,
            pl: 2,
            width: "50%",
            float: "left",
            display: "flex",
            textAlign: "center"
        }, a, u.a.createElement(d.a, {
            as: "a",
            width: "100%",
            p: 2,
            href: "https://www.nieuwsblad.be/sportwereld/live/voetbal/".concat(n),
            target: "_blank"
        }, u.a.createElement(d.a, {
            display: "flex",
            bgColor: "colorWhiteBase",
            py: 2
        }, u.a.createElement(me, {
            teamName: g,
            teamLogo: h
        }), u.a.createElement(d.a, {
            display: "flex",
            flexDirection: "column",
            width: "40%"
        }, u.a.createElement(fe.a, {
            fontFamily: "system",
            size: "Caption2",
            decoration: "underline"
        }, y), u.a.createElement(fe.a, {
            fontFamily: "system",
            size: "Heading2",
            color: "primaryBase",
            decoration: "none"
        }, "".concat(null == b ? void 0 : b.homeTeam, " - ").concat(null == b ? void 0 : b.awayTeam)), u.a.createElement("span", {
            className: "soccer-logo-unibet"
        })), u.a.createElement(me, {
            teamName: p,
            teamLogo: m
        })), u.a.createElement(d.a, {
            as: "footer",
            display: "flex",
            justifyContent: "center"
        }, u.a.createElement(fe.a, {
            m: 2,
            fontFamily: "system",
            size: "Caption2",
            decoration: "underline"
        }, "Verslag"), u.a.createElement(fe.a, {
            m: 2,
            fontFamily: "system",
            size: "Caption2",
            decoration: "underline"
        }, "Opstellingen")))) : null
    }
    var ye = n(3),
        we = n.n(ye),
        Ee = n(30),
        xe = n.n(Ee),
        _e = n(19),
        Oe = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Re = {
            xs: "screen and (min-width: " + _e.gridBreakpointXSmall + ")",
            sm: "screen and (min-width: " + _e.gridBreakpointSmall + ")",
            md: "screen and (min-width: " + _e.gridBreakpointMedium + ")",
            lg: "screen and (min-width: " + _e.gridBreakpointLarge + ")",
            xl: "screen and (min-width: " + _e.gridBreakpointXLarge + ")"
        },
        ze = function(e, t) {
            if (!Oe || !window.matchMedia) return t;
            var n = Object.keys(Re).map((function(e) {
                    return window.matchMedia(Re[e])
                })),
                r = function() {
                    var r = n.filter((function(e) {
                        return e.matches
                    })).length - 1;
                    if (Array.isArray(e)) {
                        var a = function(e) {
                            var t = e[0],
                                n = void 0 !== e[1] ? e[1] : t,
                                r = void 0 !== e[2] ? e[2] : n,
                                a = void 0 !== e[3] ? e[3] : r;
                            return [t, n, r, a, void 0 !== e[4] ? e[4] : a]
                        }(e);
                        if (void 0 !== a[r]) return a[r]
                    }
                    if ("object" === xe()(e)) {
                        var o = function(e) {
                            var t = e.xs,
                                n = void 0 !== e.sm ? e.sm : t,
                                r = void 0 !== e.md ? e.md : n,
                                a = void 0 !== e.lg ? e.lg : r;
                            return [t, n, r, a, void 0 !== e.xl ? e.xl : a]
                        }(e);
                        if (void 0 !== o[r]) return o[r]
                    }
                    return t
                },
                a = Object(l.useState)(r),
                o = a[0],
                i = a[1];
            return Object(l.useEffect)((function() {
                var e = function() {
                    return i(r)
                };
                return n.forEach((function(t) {
                        return t.addListener(e)
                    })),
                    function() {
                        n.forEach((function(t) {
                            return t.removeListener(e)
                        }))
                    }
            }), []), o
        },
        Ce = n(20),
        Me = n.n(Ce),
        Ae = {
            embedRegexes: {
                instagram: new RegExp("https://www.instagram.com/p/([^/]*)", "igm"),
                twitter: new RegExp("https://twitter.com/[^/]+/status/([^/]+)", "igm"),
                facebook: new RegExp("https://www.facebook.com/", "igm")
            }
        };

    function je(e) {
        var t = e.Content,
            n = null;
        if ("undefined" != typeof document) {
            var r = document.createElement("div");
            r.innerHTML = t;
            n = [].slice.call(r.querySelectorAll(".scrbbl-post-embed, .twitter-tweet a, .fb-post, .fb-video")).map((function(e) {
                var t = e.getAttribute("data-url") || e.getAttribute("data-href") || e.href || "",
                    n = null;
                if (null !== t.match(Ae.embedRegexes.instagram) ? n = E : null !== t.match(Ae.embedRegexes.twitter) ? n = b : null !== t.match(Ae.embedRegexes.facebook) && (n = m), n) {
                    if (n === b) {
                        for (var r = e.parentNode; !(null === (a = r) || void 0 === a ? void 0 : null === (o = a.getAttribute("class")) || void 0 === o ? void 0 : o.match("twitter-tweet")) && r.parentNode !== document.documentElement;) {
                            var a, o;
                            r = r.parentNode
                        }
                        r.parentNode.removeChild(r)
                    } else e.parentNode.removeChild(e);
                    return ue(n)({
                        url: t
                    })
                }
                return null
            })), t = r.innerHTML.replace(/&nbsp;/g, " ")
        }
        return u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: t
            }
        }), n)
    }
    var Se = n(138);

    function Le(e) {
        var t = e.Content,
            n = e.Media,
            r = e.isLazy;
        return u.a.createElement(l.Fragment, null, u.a.createElement("figure", null, u.a.createElement(se.a, {
            maxWidth: "full",
            src: null == n ? void 0 : n.Url,
            alt: null == n ? void 0 : n.Caption
        }), u.a.createElement(Se.a, {
            dangerouslySetInnerHTML: {
                __html: null == n ? void 0 : n.Caption
            }
        })), u.a.createElement(je, {
            Content: t,
            isLazy: r
        }))
    }
    var Be = function(e) {
            var t = e.Content,
                n = e.Media,
                r = e.isLazy,
                a = Object(l.useRef)(null);
            return u.a.createElement(l.Fragment, null, u.a.createElement("figure", {
                className: "live-feed__video"
            }, u.a.createElement("div", {
                className: "live-feed__video__wrapper"
            }, u.a.createElement("video", {
                src: null == n ? void 0 : n.Url,
                controls: !0,
                width: "420",
                height: "315",
                onClick: function() {
                    var e, t, n, r, o;
                    (null == a ? void 0 : null === (e = a.current) || void 0 === e ? void 0 : e.paused) ? null == a || null === (t = a.current) || void 0 === t || null === (n = t.play) || void 0 === n || n.call(t): null == a || null === (r = a.current) || void 0 === r || null === (o = r.pause) || void 0 === o || o.call(r)
                },
                poster: null == n ? void 0 : n.Thumbnail,
                preload: "metadata"
            }))), u.a.createElement(je, {
                Content: t,
                isLazy: r
            }))
        },
        Pe = n(52),
        Te = n.n(Pe);

    function ke(e) {
        var t, n = e.Icons,
            r = e.CreationDate,
            a = e.PostMeta,
            o = Date.now(),
            i = "BREAKING" === (null == n ? void 0 : null === (t = n.Name) || void 0 === t ? void 0 : t.toUpperCase()),
            c = o / 1e3 - (null == a ? void 0 : a.CreationDate) < 43200;
        return u.a.createElement(d.a, {
            as: "header",
            mb: 4,
            position: "relative"
        }, i && u.a.createElement(d.a, {
            as: "span",
            bgColor: "colorRed50",
            p: 2,
            borderColor: "colorRed50",
            borderStyle: "solid",
            borderWidth: 2,
            color: "whiteBase"
        }, "BREAKING"), u.a.createElement(d.a, {
            display: "inline-block",
            p: 2,
            borderColor: "colorGrey20",
            borderStyle: "solid",
            borderWidth: 2,
            className: Te.a.timestamp
        }, u.a.createElement(fe.a, {
            as: "time",
            color: "colorPrimaryBase",
            dateTime: "true",
            size: "Caption1"
        }, c && Wt(r), !c && Vt(r))))
    }
    var He = n(17),
        Ie = n.n(He);

    function Fe() {
        return (Fe = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var De = function(e) {
        return u.a.createElement("p", Fe({}, e, {
            className: Ie.a.info
        }))
    };

    function Ne() {
        return (Ne = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Ve = function(e) {
        return u.a.createElement("p", Ne({}, e, {
            className: Ie.a.title
        }))
    };

    function We() {
        return (We = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Ue = function(e) {
        return u.a.createElement("div", We({}, e, {
            className: Ie.a.body
        }))
    };

    function $e() {
        return ($e = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Ge = function(e) {
            return u.a.createElement(Se.a, $e({
                as: "span"
            }, e, {
                className: Ie.a.caption
            }))
        },
        Ye = function(e) {
            var t = e.src,
                n = e.alt;
            return (u.a.createElement("img", {
                src: t,
                alt: n,
                className: Ie.a.image
            }))
        };

    function qe() {
        return (qe = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Je = ["marginProps", "floatProps"],
        Ke = Object(l.forwardRef)((function(e, t) {
            var n, r = e.caption,
                a = e.children,
                o = e.disabled,
                i = e.id,
                c = e.imageAlt,
                l = e.imageSrc,
                s = e.info,
                f = e.labelProps,
                d = e.name,
                v = e.title,
                g = e.type,
                h = e.value,
                p = e.onFocus,
                m = e.onBlur,
                b = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["caption", "children", "disabled", "id", "imageAlt", "imageSrc", "info", "labelProps", "name", "title", "type", "value", "onFocus", "onBlur"]),
                y = Object(W.a)(b, Je),
                w = y[0],
                E = y[1],
                x = y[2];
            return u.a.createElement("label", qe({
                className: k()(w, Ie.a.root),
                style: E,
                htmlFor: i
            }, f), u.a.createElement("input", qe({}, x, {
                className: Ie.a.input,
                disabled: o,
                id: i,
                name: d,
                type: g,
                value: h,
                ref: t,
                onFocus: p,
                onBlur: m
            })), u.a.createElement("div", {
                className: Ie.a.content
            }, u.a.createElement("figure", {
                className: k()((n = {}, n[Ie.a.iconContainer] = !0, n[Ie.a.checkboxContainer] = "checkbox" === g, n[Ie.a.radioContainer] = "radio" === g, n))
            }, u.a.createElement(N.a, {
                className: Ie.a.icon,
                as: F.Checkmark,
                size: "small"
            })), u.a.createElement("header", {
                className: Ie.a.header
            }, !!l && u.a.createElement(Ye, {
                src: l,
                alt: c
            }), u.a.createElement("div", {
                className: Ie.a.center
            }, s && u.a.createElement(De, null, s), u.a.createElement(Ve, null, v), r && u.a.createElement(Ge, null, r))), a && u.a.createElement(Ue, null, a)))
        }));
    Ke.displayName = "Choice", Ke.identifier = Ke.displayName, Ke.clonableProps = Je, Ke.defaultProps = {
        type: "radio"
    };
    var Xe = Ke;

    function Ze(e) {
        var t = e.Entities,
            n = e.Id,
            r = "scribble-poll-".concat(n),
            a = Object(l.useState)(en(r, -1)),
            i = o()(a, 2),
            c = i[0],
            s = i[1];
        return Object(l.useEffect)((function() {
            c && (fetch("".concat("https://apiv1.scribblelive.com/poll", "/").concat(t.Id, "/vote/").concat(c)), Qt(r, c))
        }), [c]), u.a.createElement(l.Fragment, null, u.a.createElement(f.a, null, t.Question), u.a.createElement("ul", {
            className: Te.a.pollList
        }, t.Answers.map((function(e) {
            return u.a.createElement("li", {
                key: e.Id
            }, !c && u.a.createElement(Xe, {
                value: e.Id,
                title: e.Text,
                name: "poll-".concat(t.Id),
                onChange: function(e) {
                    var t = e.target;
                    return s(t.value)
                }
            }), c && u.a.createElement(d.a, null, u.a.createElement(f.a, {
                level: 3
            }, e.Text), u.a.createElement(d.a, {
                width: "".concat(e.Votes / t.TotalVotes * 100, "%"),
                bgColor: "colorPrimaryBase",
                color: "colorWhiteBase",
                p: 2,
                my: 2
            }, Math.round(e.Votes / t.TotalVotes * 100), "%"), u.a.createElement(d.a, {
                my: 2
            }, e.Votes, " ", 1 === e.Votes ? "stem" : "stemmen")))
        }))))
    }

    function Qe(e) {
        var t = e.posts,
            n = Math.max.apply(Math, Me()(t.map((function(e) {
                return e.Rank
            }))));
        return u.a.createElement(d.a, {
            as: "ul",
            m: 0
        }, null == t ? void 0 : t.map((function(e) {
            var t = e.Type,
                r = I()(e, ["Type"]),
                a = {
                    AUDIO: je,
                    HTML: je,
                    IMAGE: Le,
                    TEXT: je,
                    VIDEO: Be,
                    POLL: Ze
                } [t],
                o = r.Rank !== n,
                i = k()(Te.a.entry, we()({}, Te.a.sticky, o));
            return u.a.createElement(d.a, {
                as: "li",
                display: "block",
                ml: 10,
                mb: 6,
                key: r.Id,
                className: i,
                bgColor: o ? "primaryBase" : null,
                color: o ? "textPrimaryBase" : null,
                px: o ? 4 : 0,
                py: 4,
                borderRadius: o ? 3 : 0,
                "data-testid": "scribble-post"
            }, !o && u.a.createElement(ke, r), u.a.createElement(a, c()({}, r, {
                isSticky: o
            })))
        })))
    }
    var et = function(e) {
            return '<blockquote class="twitter-tweet"><a href="'.concat(e, '"></a></blockquote>')
        },
        tt = function(e) {
            var t, n;
            if ("twitter:tweet" === (null == e ? void 0 : null === (t = e.PostMeta) || void 0 === t ? void 0 : t.Type) || "twitter" === (null == e ? void 0 : null === (n = e.PostMeta) || void 0 === n ? void 0 : n.source)) {
                var r = e.PostMeta.Tweet,
                    a = e.PostMeta,
                    o = a.screen_name,
                    i = a.id;
                r && (o = r.user.screen_name, i = r.id_str || r.id), e.Type = "HTML", e.Content = et("https://twitter.com/".concat(o, "/status/").concat(i))
            } else {
                var c = document.createElement("div");
                c.innerHTML = e.Content;
                var l = Array.from(c.querySelectorAll(".sltc-twitter"));
                l.length && (l.forEach((function(e) {
                    var t = [].slice.call(e.querySelectorAll(".sltc-lower a")).find((function(e) {
                        return e.href.match(/twitter.com\/[^/]*\/status\/[^/]*/gim)
                    }));
                    if (null == t ? void 0 : t.href) {
                        var n = document.createElement("div");
                        n.innerHTML = et(t.href), e.parentNode.replaceChild(n.firstElementChild, e)
                    }
                })), e.Content = c.innerHTML)
            }
            return e
        },
        nt = ["breaking"],
        rt = function(e, t) {
            var n, r, a;
            return !(null === (n = e.Icons) || void 0 === n ? void 0 : n.Name) || [t].concat(nt).includes(null === (r = e.Icons) || void 0 === r ? void 0 : null === (a = r.Name) || void 0 === a ? void 0 : a.toLowerCase())
        },
        at = function(e) {
            var t = e.totalPages,
                n = e.loadMore,
                r = e.scrollToTop,
                a = e.currentPage,
                o = e.numberOfPosts,
                i = e.fetching;
            return u.a.createElement(d.a, {
                ml: 3
            }, a < t - 1 && u.a.createElement(d.a, {
                my: 2
            }, u.a.createElement(oe.a, {
                appearance: "secondary",
                width: "full",
                iconRight: F.Add,
                onClick: n,
                disabled: i,
                "data-testid": "scribble-load-more"
            }, "Laad meer")), o > 1 && u.a.createElement(d.a, {
                my: 2
            }, u.a.createElement(oe.a, {
                appearance: "secondary",
                width: "full",
                iconRight: F.ArrowUp,
                onClick: r,
                "data-testid": "scribble-scroll-to-top"
            }, "Terug naar omhoog")))
        };

    function ot(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function it(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ot(Object(n), !0).forEach((function(t) {
                we()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var ct = {},
        lt = "undefined" == typeof window,
        ut = function(e) {
            var t;
            return !1 !== (null == e ? void 0 : null === (t = e.streamMeta) || void 0 === t ? void 0 : t.IsLive)
        },
        st = function(e) {
            return ut(e) ? 6e4 : 0
        };

    function ft(e) {
        var t, n, r, a, i, c, s, f, v, g, h, m = e.id,
            b = "scribble-".concat(m),
            y = lt ? null : JSON.parse(decodeURIComponent(window[b] || null)),
            w = Object(p.b)().brand,
            E = Object(l.useState)(st(y)),
            _ = o()(E, 2),
            O = _[0],
            R = _[1],
            z = Object(l.useRef)(null),
            C = Object(l.useState)(0),
            M = o()(C, 2),
            A = M[0],
            j = M[1],
            S = Object(l.useState)(0),
            L = o()(S, 2),
            B = L[0],
            P = L[1],
            T = Object(l.useState)(lt && !ct[m] || !lt && !ut(y)),
            k = o()(T, 2),
            H = k[0],
            I = k[1],
            F = x.SCRIBBLE_POSTS_PER_PAGE,
            D = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return "https://api.scribblelive.com/v1/stream/".concat(e, "/posts?PageNumber=").concat(t, "&PageSize=").concat(n, "&NewestAtBottom=").concat(r, "&token=FvtLLowi")
            }(m, A === B ? 0 : A, F, JSON.stringify(H)),
            N = Object(ve.c)({
                url: D,
                type: "json",
                expiry: lt ? 15e4 : 5e3,
                refreshInterval: O,
                defaultData: y
            }).data;
        "boolean" == typeof(null == N ? void 0 : null === (t = N.streamMeta) || void 0 === t ? void 0 : t.IsLive) && (ct[m] = ut(N));
        var V = st(N),
            W = Object(l.useState)((null == N ? void 0 : null === (n = N.posts) || void 0 === n ? void 0 : n.filter((function(e) {
                return rt(e, null == w ? void 0 : w.code)
            }))) || []),
            U = o()(W, 2),
            $ = U[0],
            G = U[1];
        V !== O && R(st(N)), H || !1 !== (null == N ? void 0 : null === (r = N.streamMeta) || void 0 === r ? void 0 : r.IsLive) || (I(!0), G([])), Object(l.useEffect)((function() {
            var e, t = $;
            H && !(null == N ? void 0 : null === (e = N.posts) || void 0 === e ? void 0 : e.length) && 0 === A && $.length && (t = []);
            var n = (null == N ? void 0 : N.posts) || [];
            P(A), n = n.map(tt), G(function(e, t) {
                var n = t.map((function(e) {
                    return e.Id
                })) || [];
                return [].concat(Me()(e.filter((function(e) {
                    var t = e.Id;
                    return -1 === n.indexOf(t)
                }))), Me()(t || []))
            }(t, n).filter((function(e) {
                return rt(e, null == w ? void 0 : w.code)
            })).sort(function(e) {
                return function(t, n) {
                    if (t.Rank !== n.Rank) return t.Rank > n.Rank ? 1 : -1;
                    var r = new Date(t.CreationDate),
                        a = new Date(n.CreationDate);
                    return e ? r - a : a - r
                }
            }(H)))
        }), [null == N ? void 0 : null === (a = N.streamMeta) || void 0 === a ? void 0 : a.LastModified, D, null == N ? void 0 : null === (i = N.streamMeta) || void 0 === i ? void 0 : i.IsLive, null == N ? void 0 : null === (c = N.posts) || void 0 === c ? void 0 : null === (s = c.slice(-1)) || void 0 === s ? void 0 : null === (f = s[0]) || void 0 === f ? void 0 : f.Id]);
        var Y = ze([4, 4, "auto", "auto", "auto"], "auto"),
            q = ze([4, 4, 0, 0, 0], 0);
        return u.a.createElement(d.a, {
            position: "relative",
            maxWidth: "960px",
            mx: Y,
            my: q,
            ref: z,
            "data-testid": "scribble-native"
        }, u.a.createElement(d.a, {
            as: "span",
            position: "absolute",
            top: 5,
            bottom: 0,
            left: 2,
            width: "2px",
            bgColor: "colorGrey20"
        }), u.a.createElement(he, {
            windowKey: b,
            value: lt ? encodeURIComponent(JSON.stringify(it({}, N, {
                posts: null == N ? void 0 : null === (v = N.posts) || void 0 === v ? void 0 : v.filter((function(e) {
                    return rt(e, null == w ? void 0 : w.code)
                }))
            }))) : null
        }), u.a.createElement(Qe, {
            posts: $
        }), u.a.createElement(at, {
            totalPages: null == N ? void 0 : null === (g = N.pagination) || void 0 === g ? void 0 : g.TotalPages,
            numberOfPosts: null == N ? void 0 : null === (h = N.pagination) || void 0 === h ? void 0 : h.TotalPosts,
            currentPage: A,
            loadMore: function() {
                return j(A + 1)
            },
            fetching: A !== B,
            scrollToTop: function() {
                var e, t;
                null == z || null === (e = z.current) || void 0 === e || null === (t = e.scrollIntoView) || void 0 === t || t.call(e)
            }
        }))
    }
    var dt = n(148),
        vt = n.n(dt),
        gt = function(e) {
            var t = e.text,
                n = e.quotee,
                r = void 0 === n ? {} : n,
                a = null == r ? void 0 : r.name,
                o = null == r ? void 0 : r.function;
            return u.a.createElement(d.a, {
                as: "blockquote",
                "data-testid": "inline-quote",
                borderLeftColor: "primaryBase",
                borderLeftStyle: "solid",
                borderLeftWidth: 4,
                my: 5,
                px: 5,
                py: 3
            }, u.a.createElement(fe.a, {
                as: "p",
                className: vt.a.quoteText,
                fontFamily: "primary",
                fontWeight: "medium"
            }, t), a && u.a.createElement(fe.a, {
                as: "p",
                mt: 3,
                size: "Caption1",
                fontFamily: "system",
                color: "colorGrey70"
            }, o && "".concat(o, " "), a))
        },
        ht = n(78),
        pt = n.n(ht);

    function mt() {
        return (mt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var bt = ["flexProps", "marginProps", "positioningProps", "textProps", "widthProps", "floatProps"],
        yt = Object(l.forwardRef)((function(e, t) {
            var n, r = e.as,
                a = e.branded,
                o = e.children,
                i = e.disabled,
                c = e.onBlur,
                l = e.onClick,
                s = e.onFocus,
                f = e.tabIndex,
                d = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["as", "branded", "children", "disabled", "onBlur", "onClick", "onFocus", "tabIndex"]),
                v = Object(W.a)(d, bt),
                g = v[0],
                h = v[1],
                p = v[2],
                m = ((n = {})[pt.a.root] = !0, n[pt.a.system] = !a, n[pt.a.branded] = a, n[pt.a.disabled] = i, n);
            return u.a.createElement(K.a, mt({
                tabIndex: f,
                as: r,
                className: k()(m, g),
                disabled: i,
                onFocus: s,
                onBlur: c,
                onClick: l,
                ref: t,
                style: h
            }, p), o)
        }));
    yt.displayName = "LinkText", yt.identifier = yt.displayName, yt.clonableProps = bt, yt.defaultProps = {
        as: "a",
        branded: !1,
        tabIndex: "0"
    };
    var wt = yt,
        Et = function(e) {
            var t = e.article,
                n = null == t ? void 0 : t.label,
                r = null == t ? void 0 : t.webcmsId,
                a = null == t ? void 0 : t.title;
            return a && r ? u.a.createElement(s.a, {
                "data-testid": "related-article",
                fontFamily: "system",
                mb: 5
            }, n && u.a.createElement(fe.a, {
                mr: 2,
                as: "span",
                size: "Caption1",
                fontWeight: "bold"
            }, n), u.a.createElement(wt, {
                href: "/cnt/".concat(r)
            }, a)) : null
        },
        xt = n(101),
        _t = function(e) {
            return "https://hollandmediacombinatie.qualifioapp.com/20/a7459784-acde-f746-142c-379f6c8bf2b7/v1.cfm?id=".concat(e)
        },
        Ot = {
            color: "#ff5500",
            auto_play: !1,
            hide_related: !1,
            show_comments: !0,
            show_user: !0,
            show_teaser: !0,
            show_reposts: !1,
            visual: !0
        },
        Rt = function(e) {
            var t = Object.entries(Ot).map((function(e) {
                var t = o()(e, 2),
                    n = t[0],
                    r = t[1];
                return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(r))
            })).join("&");
            return "https://w.soundcloud.com/player/?url=".concat(e, "&").concat(t)
        },
        zt = function(e, t, n, r) {
            var a, o, i;
            if (!t) return null;
            var l, g, h = "".concat(e, "-").concat(n);
            switch (e) {
                case "p":
                case "extract":
                    return u.a.createElement(s.a, c()({
                        key: h,
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        color: "colorBlackBase",
                        fontFamily: "system",
                        mt: 0
                    }, r), r.children);
                case "quote":
                    return u.a.createElement(gt, {
                        key: h,
                        text: t.text,
                        quotee: null == t ? void 0 : t.quotee
                    });
                case "related":
                    if (t.article) return u.a.createElement(Et, {
                        key: h,
                        article: t.article
                    });
                    throw new Error("this type of related content has not been implemented!");
                case "subhead":
                    return u.a.createElement(f.a, c()({
                        key: h,
                        as: "h2",
                        color: "colorText10",
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        level: 4
                    }, r));
                case "image":
                    return l = null == t ? void 0 : null === (a = t.metadata) || void 0 === a ? void 0 : a.alignment, g = null == t ? void 0 : null === (o = t.meta) || void 0 === o ? void 0 : o.aspectRatio, (null == t ? void 0 : t.cropped) && (g = t.cropped.width / t.cropped.height), u.a.createElement(d.a, c()({
                        key: h
                    }, r), u.a.createElement(v.a, {
                        align: l ? l.toLowerCase() : "center",
                        aspectRatio: g ? "".concat(g, ":1") : x.DEFAULT_ASPECT_RATIO_IMAGES,
                        crop: null == t ? void 0 : null === (i = t.metadata) || void 0 === i ? void 0 : i.cropping,
                        caption: null == t ? void 0 : t.caption,
                        credit: null == t ? void 0 : t.credit,
                        src: null == t ? void 0 : t.url
                    }));
                case "livesports":
                    return u.a.createElement(be, {
                        sid: t.id
                    });
                case "external-widget":
                    if ("live-digest" === t.type) return u.a.createElement(be, {
                        sid: t.properties["event-id"]
                    });
                    if ("livesports" === t.type) return u.a.createElement(be, {
                        sid: t.id
                    });
                    throw new Error("this type of external-widget has not been implemented!");
                case "numbered_list":
                    return u.a.createElement(re, c()({
                        key: h,
                        items: t,
                        type: "number"
                    }, r));
                case "bullet_list":
                    return u.a.createElement(re, c()({
                        key: h,
                        items: t,
                        type: "bullet"
                    }, r));
                case "twitter":
                    return ue(b)({
                        key: h,
                        url: t
                    });
                case "facebook":
                    return ue(m)({
                        key: h,
                        item: t,
                        type: "post"
                    });
                case "instagram":
                    return ue(E)({
                        key: h,
                        url: t
                    });
                case "qualifio":
                    return u.a.createElement(M, {
                        key: h,
                        src: _t(null == t ? void 0 : t.uuid)
                    });
                case "soundcloud":
                    return u.a.createElement(M, {
                        key: h,
                        src: Rt(null == t ? void 0 : t.url)
                    });
                case "iframe":
                    return u.a.createElement(M, {
                        key: h,
                        src: t
                    });
                case "iframe_sized":
                    return u.a.createElement(M, {
                        key: h,
                        src: t.url,
                        height: t.height,
                        width: t.width
                    });
                case "scribblelive":
                    return u.a.createElement(ft, {
                        id: null == t ? void 0 : t.id
                    });
                case "livevideo":
                case "playsports":
                case "streamone":
                case "vimeo":
                case "vmma":
                case "youtube":
                    return u.a.createElement(d.a, c()({
                        key: h
                    }, r), u.a.createElement(P, {
                        videoId: (null == t ? void 0 : t.id) || (null == t ? void 0 : t.brand),
                        type: e,
                        credit: null == t ? void 0 : t.credit,
                        caption: null == t ? void 0 : t.caption,
                        index: null == t ? void 0 : t.index
                    }));
                case "external-video":
                case "vijftv":
                case "viertv":
                case "vrtsyndicatie":
                    return u.a.createElement(M, {
                        key: h,
                        src: null == t ? void 0 : t.id,
                        caption: null == t ? void 0 : t.caption,
                        credit: null == t ? void 0 : t.credit
                    });
                case "legacy-ml":
                    return u.a.createElement(d.a, c()({
                        key: h,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }, r));
                case "infoblock":
                    return u.a.createElement(xt.a, {
                        title: null == t ? void 0 : t.title,
                        content: null == t ? void 0 : t.content
                    });
                default:
                    return null
            }
        },
        Ct = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return null == e ? void 0 : null === (t = e.map) || void 0 === t ? void 0 : t.call(e, (function(t, r) {
                if (!Object.prototype.hasOwnProperty.call(n, "mb")) {
                    var a = (null == e ? void 0 : e.length) === r + 1;
                    n.mb = a ? 0 : 5
                }
                return Object.entries(t).map((function(e) {
                    var t = o()(e, 2),
                        a = t[0],
                        i = t[1];
                    return zt(a, i, r, n)
                }))
            }))
        },
        Mt = function(e) {
            if ("object" === ("undefined" == typeof window ? "undefined" : xe()(window)) && window.matchMedia) {
                var t = Object(l.useState)(window.matchMedia(e).matches),
                    n = o()(t, 2),
                    r = n[0],
                    a = n[1];
                return Object(l.useEffect)((function() {
                    var t = window.matchMedia(e);
                    t.matches !== r && a(t.matches);
                    var n = function() {
                        return a(t.matches)
                    };
                    return t.addListener(n),
                        function() {
                            return t.removeListener(n)
                        }
                }), [r, e]), r
            }
        },
        At = function(e) {
            var t = e.match(/twitter\.com\/.*\/status(?:es)?\/([^/?]+)/);
            return t ? t[1] : null
        },
        jt = function(e) {
            switch (e) {
                case "mh":
                    return "mediahuis.be";
                case "dl":
                    return "limburger.nl";
                case "ds":
                    return "standaard.be";
                case "gva":
                    return "gva.be";
                case "hbvl":
                    return "hbvl.be";
                case "nb":
                    return "nieuwsblad.be";
                case "tmg":
                    return "tmg.nl";
                case "tel":
                    return "telegraaf.nl";
                case "hmc-nhd":
                    return "noordhollandsdagblad.nl";
                case "hmc-ge":
                    return "gooieneemlander.nl";
                case "hmc-ld":
                    return "leidschdagblad.nl";
                case "hmc-yc":
                    return "ijmuidercourant.nl";
                case "hmc-hd":
                    return "haarlemsdagblad.nl";
                default:
                    return null
            }
        },
        St = function(e) {
            switch (e) {
                case "mh":
                case "dl":
                case "ds":
                case "gva":
                case "hbvl":
                case "nb":
                case "jani":
                case "sw":
                    return "mediahuis";
                case "hmc":
                case "hmc-nhd":
                case "hmc-ge":
                case "hmc-ld":
                case "hmc-yc":
                case "hmc-hd":
                    return "hmc";
                default:
                    return null
            }
        },
        Lt = n(22),
        Bt = n.n(Lt),
        Pt = n(97),
        Tt = n.n(Pt),
        kt = n(98),
        Ht = n.n(kt),
        It = n(99),
        Ft = n.n(It),
        Dt = n(100),
        Nt = n.n(Dt);
    Bt.a.extend(Tt.a), Bt.a.extend(Ft.a), Bt.a.extend(Nt.a), Bt()().format("L LT");
    var Vt = function(e) {
        if (Bt()(e).isValid()) {
            var t = Bt()(e).locale(Ht.a).calendar(null, {
                sameDay: "[Vandaag om] HH:mm",
                lastDay: "[Gisteren om] HH:mm",
                lastWeek: "dddd D MMMM YYYY [om] HH:mm",
                sameElse: "dddd D MMMM YYYY [om] HH:mm",
                nextDay: "dddd D MMMM YYYY [om] HH:mm",
                nextWeek: "dddd D MMMM YYYY [om] HH:mm"
            });
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        return ""
    };
    Bt.a.extend(Tt.a), Bt.a.extend(Ft.a), Bt.a.extend(Nt.a), Bt()().format("L LT");
    var Wt = function(e) {
            if (Bt()(e).isValid()) {
                var t = Bt()(e).locale(Ht.a).fromNow();
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            return ""
        },
        Ut = n(67),
        $t = function() {
            var e, t;
            return "mobile" === (null === (e = Object(p.b)()) || void 0 === e ? void 0 : null === (t = e.site) || void 0 === t ? void 0 : t.type)
        };
    var Gt = function(e, t) {
            if (!t) return "#";
            var n = "",
                r = Object(p.b)().brand;
            if (jt(null == r ? void 0 : r.code) !== e) {
                var a = $t() ? "m" : "www";
                n = "https://".concat(a, ".").concat(e)
            }
            return n += "/cnt/".concat(t)
        },
        Yt = function(e, t, n) {
            var r, a, i = "",
                c = "regio" === e,
                l = n.filter((function(t) {
                    return t.type === e
                })),
                u = function(e) {
                    return e.sort((function(e, t) {
                        return e.sequence - t.sequence
                    }))
                },
                s = l.filter((function(e) {
                    return e && e.zipcodes
                })).map((function(e) {
                    return e.zipcodes
                })),
                f = o()(s, 1)[0],
                d = l.filter((function(e) {
                    return e && e.subsections
                })).map((function(e) {
                    return e.subsections
                })),
                v = o()(d, 1)[0],
                g = (null == v ? void 0 : v.length) > 0 ? v.filter((function(e) {
                    return !e.isHidden
                })) : [],
                h = (null == g ? void 0 : g.length) > 0 ? u((r = t, g.filter((function(e) {
                    return r.some((function(t) {
                        return e.uuid === t.uuid
                    }))
                })))) : [];
            if (c && (null == f ? void 0 : f.length) > 0) i = null === (a = l[0]) || void 0 === a ? void 0 : a.slug;
            else if (c && 0 === (null == f ? void 0 : f.length) && (null == h ? void 0 : h.length) > 0) {
                var p;
                i = null == h ? void 0 : null === (p = h.slice(-1)[0]) || void 0 === p ? void 0 : p.slug
            } else if (c && 0 === (null == f ? void 0 : f.length) && 0 === (null == v ? void 0 : v.length)) {
                var m, b;
                i = null === (m = u(t)) || void 0 === m ? void 0 : null === (b = m.slice(-1)[0]) || void 0 === b ? void 0 : b.slug
            }
            return i
        },
        qt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return (null == e ? void 0 : e.length) > 0 ? e.filter((function(e) {
                return e["external-widget"].type === t
            })).map((function(e) {
                return e["external-widget"]
            })) : null
        },
        Jt = function() {
            return $t(), 0
        },
        Kt = {
            ds: "155215551216365|92229e38a098fbfaf9d7cc03f48d1ecc",
            gva: "122351784513266|554b7590ef6832bf834a827c0d91b4c3",
            hbvl: "193878777324687|309b24c01ece67de6b884644397f3c57",
            nb: "152476521481961|e7657042f7565e1778ebd84938ecfe56",
            "hmc-nhd": "213829875357236|cabb527976d27647b155b6cbefa8cc7f",
            "hmc-ge": "199910173416751|223f9060444ae47ff94a88d21684acba",
            "hmc-ld": "234626469915247|f4408573e3085b9ca53fa37ece208d9c",
            "hmc-yc": "136773786425027|7a2652b14e7552d83cf15e00d8ecd256",
            "hmc-hd": "257419734305708|7887c2e5a8fe9796eefeb4426b4e1c88"
        },
        Xt = function(e) {
            return Kt[e]
        };

    function Zt(e, t) {
        switch (e) {
            case "facebook":
            case "twitter":
                ! function(e) {
                    window.open(e, "sharedialog", "width=626,height=436")
                }(t);
                break;
            case "mail":
            case "whatsapp":
                window.location.href = t;
                break;
            case "link":
                ! function(e) {
                    if (!navigator.clipboard) return void
                    function(e) {
                        var t = document.createElement("textarea");
                        t.value = e, t.style.opacity = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
                        try {
                            document.execCommand("copy")
                        } catch (e) {
                            throw new Error("Fallback copy failed.")
                        }
                        document.body.removeChild(t)
                    }(e);
                    navigator.clipboard.writeText(e).then((function() {
                        return "link copied with clipboard"
                    })).catch((function() {
                        throw new Error("Clipboard failed.")
                    }))
                }(t);
                break;
            default:
                throw new Error("No button type detected.")
        }
    }
    var Qt = function(e, t) {
            try {
                return localStorage.setItem(e, t), !0
            } catch (e) {
                return !1
            }
        },
        en = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
                return localStorage.getItem(e)
            } catch (e) {
                return t
            }
        };
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return Ct
    })), n.d(t, "r", (function() {
        return Mt
    })), n.d(t, "m", (function() {
        return At
    })), n.d(t, "f", (function() {
        return jt
    })), n.d(t, "e", (function() {
        return St
    })), n.d(t, "c", (function() {
        return Vt
    })), n.d(t, "d", (function() {
        return Wt
    })), n.d(t, "k", (function() {
        return Ut.a
    })), n.d(t, "n", (function() {
        return Gt
    })), n.d(t, "l", (function() {
        return Yt
    })), n.d(t, "h", (function() {
        return qt
    })), n.d(t, "o", (function() {
        return $t
    })), n.d(t, "g", (function() {
        return Jt
    })), n.d(t, "j", (function() {
        return Xt
    })), n.d(t, "q", (function() {
        return Zt
    })), n.d(t, "i", (function() {
        return en
    })), n.d(t, "p", (function() {
        return Qt
    }))
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Add", (function() {
        return c
    })), n.d(t, "Archive", (function() {
        return l
    })), n.d(t, "ArrowBack", (function() {
        return u
    })), n.d(t, "ArrowDown", (function() {
        return s
    })), n.d(t, "ArrowForward", (function() {
        return f
    })), n.d(t, "ArrowUp", (function() {
        return d
    })), n.d(t, "Attatchment", (function() {
        return v
    })), n.d(t, "Backward", (function() {
        return g
    })), n.d(t, "BookmarkFill", (function() {
        return h
    })), n.d(t, "Bookmark", (function() {
        return p
    })), n.d(t, "Brand", (function() {
        return m
    })), n.d(t, "BreakingFill", (function() {
        return b
    })), n.d(t, "Bullet", (function() {
        return y
    })), n.d(t, "Calendar", (function() {
        return w
    })), n.d(t, "CameraFill", (function() {
        return E
    })), n.d(t, "Camera", (function() {
        return x
    })), n.d(t, "Cart", (function() {
        return _
    })), n.d(t, "Checkmark", (function() {
        return O
    })), n.d(t, "ChevronBack", (function() {
        return R
    })), n.d(t, "ChevronDown", (function() {
        return z
    })), n.d(t, "ChevronForward", (function() {
        return C
    })), n.d(t, "ChevronUp", (function() {
        return M
    })), n.d(t, "Clipboard", (function() {
        return A
    })), n.d(t, "ClockFill", (function() {
        return j
    })), n.d(t, "Clock", (function() {
        return S
    })), n.d(t, "Close", (function() {
        return L
    })), n.d(t, "Comment", (function() {
        return B
    })), n.d(t, "ConditionsFill", (function() {
        return P
    })), n.d(t, "Conditions", (function() {
        return T
    })), n.d(t, "Copy", (function() {
        return k
    })), n.d(t, "CustomerSupport", (function() {
        return H
    })), n.d(t, "Cut", (function() {
        return I
    })), n.d(t, "Delete", (function() {
        return F
    })), n.d(t, "Discover", (function() {
        return D
    })), n.d(t, "Document", (function() {
        return N
    })), n.d(t, "Download", (function() {
        return V
    })), n.d(t, "Edit", (function() {
        return W
    })), n.d(t, "Error", (function() {
        return U
    })), n.d(t, "Favourite", (function() {
        return $
    })), n.d(t, "Feedback", (function() {
        return G
    })), n.d(t, "Filter", (function() {
        return Y
    })), n.d(t, "Flag", (function() {
        return q
    })), n.d(t, "Folder", (function() {
        return J
    })), n.d(t, "Football", (function() {
        return K
    })), n.d(t, "Forbidden", (function() {
        return X
    })), n.d(t, "Forward", (function() {
        return Z
    })), n.d(t, "Gallery", (function() {
        return Q
    })), n.d(t, "GiftFill", (function() {
        return ee
    })), n.d(t, "Gift", (function() {
        return te
    })), n.d(t, "Hide", (function() {
        return ne
    })), n.d(t, "History", (function() {
        return re
    })), n.d(t, "Home", (function() {
        return ae
    })), n.d(t, "Inbox", (function() {
        return oe
    })), n.d(t, "InfoFill", (function() {
        return ie
    })), n.d(t, "Info", (function() {
        return ce
    })), n.d(t, "LayoutGridFill", (function() {
        return le
    })), n.d(t, "LayoutGrid", (function() {
        return ue
    })), n.d(t, "Layout", (function() {
        return se
    })), n.d(t, "Link", (function() {
        return fe
    })), n.d(t, "List", (function() {
        return de
    })), n.d(t, "LiveFill", (function() {
        return ve
    })), n.d(t, "Live", (function() {
        return ge
    })), n.d(t, "LockClosed", (function() {
        return he
    })), n.d(t, "LockOpen", (function() {
        return pe
    })), n.d(t, "Mail", (function() {
        return me
    })), n.d(t, "Mic", (function() {
        return be
    })), n.d(t, "MoreHorizontalFill", (function() {
        return ye
    })), n.d(t, "MoreHorizontal", (function() {
        return we
    })), n.d(t, "Music", (function() {
        return Ee
    })), n.d(t, "Notification", (function() {
        return xe
    })), n.d(t, "Opinion", (function() {
        return _e
    })), n.d(t, "Palette", (function() {
        return Oe
    })), n.d(t, "Pause", (function() {
        return Re
    })), n.d(t, "PersonFill", (function() {
        return ze
    })), n.d(t, "Person", (function() {
        return Ce
    })), n.d(t, "Phone", (function() {
        return Me
    })), n.d(t, "PinFill", (function() {
        return Ae
    })), n.d(t, "Pin", (function() {
        return je
    })), n.d(t, "PlayArrow", (function() {
        return Se
    })), n.d(t, "Play", (function() {
        return Le
    })), n.d(t, "Podcast", (function() {
        return Be
    })), n.d(t, "Print", (function() {
        return Pe
    })), n.d(t, "RecentlyViewedFill", (function() {
        return Te
    })), n.d(t, "RecentlyViewed", (function() {
        return ke
    })), n.d(t, "Refresh", (function() {
        return He
    })), n.d(t, "Save", (function() {
        return Ie
    })), n.d(t, "Send", (function() {
        return Fe
    })), n.d(t, "SettingsFill", (function() {
        return De
    })), n.d(t, "Settings", (function() {
        return Ne
    })), n.d(t, "Shape", (function() {
        return Ve
    })), n.d(t, "Share", (function() {
        return We
    })), n.d(t, "Shield", (function() {
        return Ue
    })), n.d(t, "ShoppingBag", (function() {
        return $e
    })), n.d(t, "Sound", (function() {
        return Ge
    })), n.d(t, "StarFill", (function() {
        return Ye
    })), n.d(t, "Star", (function() {
        return qe
    })), n.d(t, "Stop", (function() {
        return Je
    })), n.d(t, "TagFill", (function() {
        return Ke
    })), n.d(t, "Tag", (function() {
        return Xe
    })), n.d(t, "Textsize", (function() {
        return Ze
    })), n.d(t, "Trending", (function() {
        return Qe
    })), n.d(t, "Tune", (function() {
        return et
    })), n.d(t, "Unknown", (function() {
        return tt
    })), n.d(t, "Upload", (function() {
        return nt
    })), n.d(t, "Videocam", (function() {
        return rt
    })), n.d(t, "Wallet", (function() {
        return at
    })), n.d(t, "Warning", (function() {
        return ot
    })), n.d(t, "Breaking", (function() {
        return it
    })), n.d(t, "Cast", (function() {
        return ct
    })), n.d(t, "ChevronDoubleBack", (function() {
        return lt
    })), n.d(t, "ChevronDoubleForward", (function() {
        return ut
    })), n.d(t, "CommentFill", (function() {
        return st
    })), n.d(t, "CustomerSupportFill", (function() {
        return ft
    })), n.d(t, "DiscoverFill", (function() {
        return dt
    })), n.d(t, "Drag", (function() {
        return vt
    })), n.d(t, "ErrorFill", (function() {
        return gt
    })), n.d(t, "Exit", (function() {
        return ht
    })), n.d(t, "Expand", (function() {
        return pt
    })), n.d(t, "ExternalLink", (function() {
        return mt
    })), n.d(t, "Facebook", (function() {
        return bt
    })), n.d(t, "FavouriteFill", (function() {
        return yt
    })), n.d(t, "FeedbackFill", (function() {
        return wt
    })), n.d(t, "FilterFill", (function() {
        return Et
    })), n.d(t, "FlagFill", (function() {
        return xt
    })), n.d(t, "FootballFill", (function() {
        return _t
    })), n.d(t, "GalleryFill", (function() {
        return Ot
    })), n.d(t, "Github", (function() {
        return Rt
    })), n.d(t, "HomeFill", (function() {
        return zt
    })), n.d(t, "Instagram", (function() {
        return Ct
    })), n.d(t, "ListFill", (function() {
        return Mt
    })), n.d(t, "MailFill", (function() {
        return At
    })), n.d(t, "MenuFill", (function() {
        return jt
    })), n.d(t, "Menu", (function() {
        return St
    })), n.d(t, "MicFill", (function() {
        return Lt
    })), n.d(t, "MoreVerticalFill", (function() {
        return Bt
    })), n.d(t, "MoreVertical", (function() {
        return Pt
    })), n.d(t, "MusicFill", (function() {
        return Tt
    })), n.d(t, "NotificationFill", (function() {
        return kt
    })), n.d(t, "OpinionFill", (function() {
        return Ht
    })), n.d(t, "PaletteFill", (function() {
        return It
    })), n.d(t, "PhoneFill", (function() {
        return Ft
    })), n.d(t, "Pinterest", (function() {
        return Dt
    })), n.d(t, "Placeholder", (function() {
        return Nt
    })), n.d(t, "PodcastFill", (function() {
        return Vt
    })), n.d(t, "PrintFill", (function() {
        return Wt
    })), n.d(t, "SearchFill", (function() {
        return Ut
    })), n.d(t, "Search", (function() {
        return $t
    })), n.d(t, "ShareFill", (function() {
        return Gt
    })), n.d(t, "ShieldFill", (function() {
        return Yt
    })), n.d(t, "Skype", (function() {
        return qt
    })), n.d(t, "SoundFill", (function() {
        return Jt
    })), n.d(t, "Spinner", (function() {
        return Kt
    })), n.d(t, "Spotify", (function() {
        return Xt
    })), n.d(t, "StopFill", (function() {
        return Zt
    })), n.d(t, "TrendingFill", (function() {
        return Qt
    })), n.d(t, "TuneFill", (function() {
        return en
    })), n.d(t, "Twitter", (function() {
        return tn
    })), n.d(t, "VideocamFill", (function() {
        return nn
    })), n.d(t, "WarningFill", (function() {
        return rn
    })), n.d(t, "Whatsapp", (function() {
        return an
    })), n.d(t, "Youtube", (function() {
        return on
    })), n.d(t, "ZoomIn", (function() {
        return cn
    })), n.d(t, "ZoomOut", (function() {
        return ln
    }));
    var r = n(0),
        a = n.n(r);

    function o() {
        return (o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function i(e, t) {
        if (null == e) return {};
        var n, r, a = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
    }
    var c = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z"
            })))
        },
        l = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M21.706 5.291l-2.999-2.998A.996.996 0 0018 2H6a.996.996 0 00-.707.293L2.294 5.291A.994.994 0 002 5.999V19c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5.999a.994.994 0 00-.294-.708zM6.414 4h11.172l.999.999H5.415L6.414 4zM4 19V6.999h16L20.002 19H4z"
            }), a.a.createElement("path", {
                d: "M15 12H9v-2H7v4h10v-4h-2v2z"
            })))
        },
        u = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707 1.414-1.414z"
            })))
        },
        s = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M6.414 10.293L5 11.707l6.707 6.707 6.707-6.707L17 10.293l-4.293 4.293V5h-2v9.586l-4.293-4.293z"
            })))
        },
        f = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586l-4.293 4.293z"
            })))
        },
        d = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16.586 13.121L18 11.707 11.293 5l-6.707 6.707L6 13.121l4.293-4.293v9.586h2V8.828l4.293 4.293z"
            })))
        },
        v = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M17.004 5H9c-1.838 0-3.586.737-4.924 2.076C2.737 8.415 2 10.163 2 12c0 1.838.737 3.586 2.076 4.924C5.414 18.263 7.162 19 9 19h8v-2H9c-1.303 0-2.55-.529-3.51-1.49C4.529 14.55 4 13.303 4 12c0-1.302.529-2.549 1.49-3.51C6.45 7.529 7.697 7 9 7h8V6l.001 1h.003c.79 0 1.539.314 2.109.886.571.571.886 1.322.887 2.116a2.966 2.966 0 01-.884 2.11A2.988 2.988 0 0117 13H9a.99.99 0 01-.698-.3A.991.991 0 018 12c0-.252.11-.507.301-.698A.987.987 0 019 11h8V9H9c-.79 0-1.541.315-2.114.889A2.972 2.972 0 006 12c0 .789.314 1.54.888 2.114A2.974 2.974 0 009 15h8.001a4.97 4.97 0 003.528-1.473 4.967 4.967 0 00-.001-7.055A4.95 4.95 0 0017.004 5z"
            })))
        },
        g = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8z"
            }), a.a.createElement("path", {
                d: "M11 16l-5-4 5-4v8zm6 0l-5-4 5-4v8z"
            })))
        },
        h = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z"
            })))
        },
        p = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553l-6-3.428-6 3.428V4h12v14.553z"
            })))
        },
        m = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M4.276 4c1.558 0 2.192 1.276 2.192 1.276V4.188h1.487v5.605H6.468l-.005-1.446c0-1.191-.163-2.726-1.36-2.726-.943 0-1.028 1.14-1.034 1.25v10.367s0 1.088 1.016 1.088c1.013 0 .986-.98.986-.98V13.44l-.704.005v-1.67h3.508l-.004 1.67-.625-.009-.005 6.375-1.483.005-.423-.869S5.521 20 4.412 20c-2.53 0-2.403-2.802-2.403-2.802L2 6.834v-.029C2.009 6.51 2.139 4 4.277 4zm15.09 0l1.85 14.099.784.004v1.577l-3.555-.005v-1.567l.624-.01-.186-1.44h-1.837l-.19 1.44.593.01-.005 1.567-2.944.005v-1.572l.673-.005 1.815-14.098L19.366 4zm-7.494 0v1.568h-.7l1.107 8.617 1.09-8.617-.811-.005L12.553 4h3.197v1.568h-.673L13.235 19.68h-2.342L9.03 5.568l-.779-.005V4h3.622zm6.095 5.25l-.669 5.377h1.32l-.651-5.376z"
            })))
        },
        b = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.664 3.478L8 8v7l.748.267-1.127 2.254a1.999 1.999 0 001.156 2.792l4.084 1.361a2.015 2.015 0 002.421-1.003l1.303-2.606 4.079 1.457A1 1 0 0022 18.581V4.419a1 1 0 00-1.336-.941zm-7.171 16.299L9.41 18.416l1.235-2.471 4.042 1.444-1.194 2.388zM4 15h2V8H4c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2z"
            })))
        },
        y = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 16a4 4 0 100-8 4 4 0 000 8z"
            })))
        },
        w = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"
            }), a.a.createElement("path", {
                d: "M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
            })))
        },
        E = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3 3-1.374 3-3-1.374-3-3-3z"
            }), a.a.createElement("path", {
                d: "M20 5h-2.586l-2.707-2.707A.996.996 0 0014 2h-4a.996.996 0 00-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5s2.29-5 5-5 5 2.29 5 5-2.29 5-5 5z"
            })))
        },
        x = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"
            }), a.a.createElement("path", {
                d: "M20 5h-2.586l-2.707-2.707A.996.996 0 0014 2h-4a.996.996 0 00-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0017 7h3l.002 11H4z"
            })))
        },
        _ = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M21 4H2v2h2.3l3.282 9.025A3.01 3.01 0 0010.401 17H19v-2h-8.599c-.419 0-.797-.265-.94-.658L8.973 13h9.273c.89 0 1.68-.598 1.923-1.451l1.793-6.274A1.003 1.003 0 0021 4zm-2.754 7h-10L6.428 6h13.247l-1.429 5zM10.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            })))
        },
        O = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414L10 15.586z"
            })))
        },
        R = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M13.939 4.939L6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939-2.122-2.122z"
            })))
        },
        z = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16.939 7.939L12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06-2.122-2.122z"
            })))
        },
        C = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M10.061 19.061L17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939 2.122 2.122z"
            })))
        },
        M = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 6.879l-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122L12 6.879z"
            })))
        },
        A = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 3h-2.25a1 1 0 00-1-1h-7.5a1 1 0 00-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"
            })))
        },
        j = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M13 3h4v2h-4V3zM3 8h4v2H3V8zm0 8h4v2H3v-2zm-1-4h3.99v2H2v-2zm19.707-5.293l-1.414-1.414L18.586 7A6.937 6.937 0 0015 6c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7a6.968 6.968 0 00-1.855-4.73l1.562-1.563zM16 14h-2V8.958h2V14z"
            })))
        },
        S = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.145 8.27l1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 00-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
            }), a.a.createElement("path", {
                d: "M14 10h2v4h-2v-4zm-1-7h4v2h-4V3zM3 8h4v2H3V8zm0 8h4v2H3v-2zm-1-4h3.99v2H2v-2z"
            })))
        },
        L = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242-1.414-1.414z"
            })))
        },
        B = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M7 7h10v2H7V7zm0 4h7v2H7v-2z"
            }), a.a.createElement("path", {
                d: "M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
            })))
        },
        P = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M18 22a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v16a2 2 0 002 2h12zM13 4l5 5h-5V4zM7 8h3v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"
            })))
        },
        T = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19.903 8.586a.997.997 0 00-.196-.293l-6-6a.997.997 0 00-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 00-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 00-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 001 1h5l.002 10H6z"
            }), a.a.createElement("path", {
                d: "M8 12h8v2H8v-2zm0 4h8v2H8v-2zm0-8h2v2H8V8z"
            })))
        },
        k = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"
            })))
        },
        H = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"
            }), a.a.createElement("path", {
                d: "M7 7h10v2H7V7zm0 4h7v2H7v-2z"
            })))
        },
        I = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M10 6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5 4.57 10 6.5 10a3.45 3.45 0 001.613-.413l2.357 2.528-2.318 2.318A3.46 3.46 0 006.5 14C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5c0-.601-.166-1.158-.434-1.652l2.269-2.268L17 19.121a3 3 0 002.121.879H22L9.35 8.518c.406-.572.65-1.265.65-2.018zM6.5 8C5.673 8 5 7.327 5 6.5S5.673 5 6.5 5 8 5.673 8 6.5 7.327 8 6.5 8zm0 11c-.827 0-1.5-.673-1.5-1.5S5.673 16 6.5 16s1.5.673 1.5 1.5S7.327 19 6.5 19z"
            }), a.a.createElement("path", {
                d: "M17 4.879l-3.707 4.414 1.414 1.414L22 4h-2.879A3 3 0 0017 4.879z"
            })))
        },
        F = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M5.003 20c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2h-6c-1.103 0-2 .897-2 2v2h-4v2h2v12zm4-16h6v2h-6V4zm8 4l.001 12H7.003V8h10z"
            }), a.a.createElement("path", {
                d: "M9.003 10h2v8h-2v-8zm4 0h2v8h-2v-8z"
            })))
        },
        D = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            }), a.a.createElement("path", {
                d: "M8 16l5.991-2L16 8l-6 2-2 6z"
            })))
        },
        N = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 00-.196-.293l-6-6a.997.997 0 00-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 00-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 00-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 001 1h5l.002 10H6z"
            })))
        },
        V = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 16l4-5h-3V4h-2v7H8l4 5z"
            }), a.a.createElement("path", {
                d: "M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"
            })))
        },
        W = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19.045 7.401c.378-.378.586-.88.586-1.414 0-.534-.208-1.036-.586-1.414l-1.586-1.586a1.986 1.986 0 00-1.414-.586c-.534 0-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3l1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4v-2z"
            })))
        },
        U = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"
            }), a.a.createElement("path", {
                d: "M11 7h2v7h-2V7zm0 8h2v2h-2v-2z"
            })))
        },
        $ = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 4.595a5.904 5.904 0 00-3.996-1.558 5.942 5.942 0 00-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 00.792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 00-4.209-1.754A5.906 5.906 0 0012 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584a3.953 3.953 0 012.799-1.172c1.045 0 2.035.416 2.789 1.17l.5.5a.999.999 0 001.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"
            })))
        },
        G = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M11 6h2v5h-2V6zm0 6h2v2h-2v-2z"
            }), a.a.createElement("path", {
                d: "M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
            })))
        },
        Y = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M21 3H5a1 1 0 00-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 001.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 00-1-1zm-6.707 9.293A.996.996 0 0014 13v5.382l-2 1V13a.996.996 0 00-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"
            })))
        },
        q = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 4H6V2H4v18H3v2h4v-2H6v-5h13a1 1 0 001-1V5a1 1 0 00-1-1zm-1 9H6V6h12v7z"
            })))
        },
        J = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 5h-8.586L9.707 3.293A.997.997 0 009 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"
            })))
        },
        K = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19.078 4.935A9.947 9.947 0 0012.005 2 9.954 9.954 0 004.93 4.935c-3.9 3.895-3.9 10.234 0 14.13A9.95 9.95 0 0012.006 22a9.947 9.947 0 007.073-2.934c3.901-3.895 3.901-10.234 0-14.13zm-6.893-.928h-.359c.061 0 .12-.009.18-.009.061 0 .118.008.18.01zm6.065 12.989h-2.244l-1.258 2.513a7.967 7.967 0 01-2.743.493 7.972 7.972 0 01-2.747-.494l-1.255-2.502H5.767a7.948 7.948 0 01-1.624-3.53l1.859-2.475-1.217-2.43a7.929 7.929 0 011.56-2.223 7.999 7.999 0 013.221-1.967l2.438 1.624 2.44-1.623a8.015 8.015 0 013.22 1.966 7.93 7.93 0 011.56 2.22L18.006 11l1.859 2.476a7.94 7.94 0 01-1.616 3.518z"
            }), a.a.createElement("path", {
                d: "M8.5 11l1.5 4h4l1.5-4L12 8.5 8.5 11z"
            })))
        },
        X = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.946 7.946 0 0112 20c-4.411 0-8-3.589-8-8zm14.312 4.897L7.103 5.688A7.948 7.948 0 0112 4c4.411 0 8 3.589 8 8a7.954 7.954 0 01-1.688 4.897z"
            })))
        },
        Z = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            }), a.a.createElement("path", {
                d: "M13 16l5-4-5-4v8zm-6 0l5-4-5-4v8z"
            })))
        },
        Q = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"
            }), a.a.createElement("path", {
                d: "M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"
            }), a.a.createElement("path", {
                d: "M12 12l-1-1-2 3h10l-4-6-3 4z"
            })))
        },
        ee = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M5 12H4v8a2 2 0 002 2h5V12H5zm13 0h-5v10h5a2 2 0 002-2v-8h-2zm.791-5A4.92 4.92 0 0019 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H2v4h9V9h2v2h9V7h-3.209zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM15.5 4c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.477c.51-1.576 1.251-3 1.977-3z"
            })))
        },
        te = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 7h-1.209A4.92 4.92 0 0019 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z"
            })))
        },
        ne = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.643 8.643 0 011.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 000 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 000-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0112 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"
            })))
        },
        re = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 8v5h5v-2h-3V8h-2z"
            }), a.a.createElement("path", {
                d: "M21.292 8.497a8.957 8.957 0 00-1.928-2.862 9.004 9.004 0 00-4.55-2.452 9.09 9.09 0 00-3.626 0 8.965 8.965 0 00-4.552 2.453 9.048 9.048 0 00-1.928 2.86A8.963 8.963 0 004 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 011.195-3.913 7.066 7.066 0 011.891-1.892 7.034 7.034 0 012.503-1.054 7.003 7.003 0 018.269 5.445 7.117 7.117 0 010 2.824 6.936 6.936 0 01-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 01-2.225 1.501 6.98 6.98 0 01-1.313.408 7.117 7.117 0 01-2.823 0 6.957 6.957 0 01-2.501-1.053 7.066 7.066 0 01-1.037-.855l-1.414 1.414A8.985 8.985 0 0013 21a9.05 9.05 0 003.503-.707 9.009 9.009 0 003.959-3.26A8.968 8.968 0 0022 12a8.928 8.928 0 00-.708-3.503z"
            })))
        },
        ae = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M5.003 22h14c1.103 0 2-.897 2-2v-9a.997.997 0 00-.293-.707l-8-8a.999.999 0 00-1.414 0l-8 8a.997.997 0 00-.293.707v9c0 1.103.897 2 2 2zm5-2v-5h4v5h-4zm-5-8.586l7-7 7 7L19.004 20h-3.001v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5h-3v-8.586z"
            })))
        },
        oe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M4 3h16c1.103 0 2 .897 2 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.103.897-2 2-2zm12 9h4V5H4v7h4.142A3.99 3.99 0 0012 15a3.99 3.99 0 003.858-3H16zM4 14v5h16v-5h-3s-1 3-5 3-5-3-5-3H4z",
                clipRule: "evenodd"
            })))
        },
        ie = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            })))
        },
        ce = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            }), a.a.createElement("path", {
                d: "M11 11h2v6h-2v-6zm0-4h2v2h-2V7z"
            })))
        },
        le = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M4 11h6a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v6a1 1 0 001 1zm10 0h6a1 1 0 001-1V4a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1zM4 21h6a1 1 0 001-1v-6a1 1 0 00-1-1H4a1 1 0 00-1 1v6a1 1 0 001 1zm10 0h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z"
            })))
        },
        ue = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 001-1V4a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h4v4h-4V5zM3 20a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H4a1 1 0 00-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6zm2-5h4v4h-4v-4z"
            })))
        },
        se = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2l.001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z"
            })))
        },
        fe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707a4.965 4.965 0 00-3.535-1.465 4.965 4.965 0 00-3.535 1.465L4.929 12a5.008 5.008 0 000 7.071 4.983 4.983 0 003.535 1.462A4.982 4.982 0 0012 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 01-4.243 0 3.005 3.005 0 010-4.243l2.122-2.121z"
            }), a.a.createElement("path", {
                d: "M12 4.929l-.707.707 1.414 1.414.707-.707a3.007 3.007 0 014.243 0 3.005 3.005 0 010 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707a4.965 4.965 0 003.535 1.465 4.965 4.965 0 003.535-1.465L19.071 12a5.008 5.008 0 000-7.071 5.006 5.006 0 00-7.071 0z"
            })))
        },
        de = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M4 6h2v2H4V6zm0 5h2v2H4v-2zm0 5h2v2H4v-2zm16-8V6H8.023v2H20zM8 11h12v2H8v-2zm0 5h12v2H8v-2z"
            })))
        },
        ve = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19.707 4.293l-1.414 1.414c2.733 2.733 2.733 7.353 0 10.086l1.414 1.414c3.5-3.5 3.5-9.414 0-12.914zm-4.414 4.414c.566.566.879 1.292.879 2.043 0 .751-.313 1.477-.879 2.043l1.414 1.414c.944-.943 1.465-2.172 1.465-3.457 0-1.285-.521-2.514-1.465-3.457l-1.414 1.414zm-9.086-3L4.793 4.293c-3.5 3.5-3.5 9.414 0 12.914l1.414-1.414c-2.733-2.733-2.733-7.353 0-10.086z"
            }), a.a.createElement("path", {
                d: "M7.293 7.293c-.944.943-1.465 2.172-1.465 3.457 0 1.285.521 2.514 1.465 3.457l1.414-1.414c-.566-.566-.879-1.292-.879-2.043 0-.751.313-1.477.879-2.043L7.293 7.293zM14 10.5a2 2 0 00-4 0 1.993 1.993 0 00.895 1.666L10.002 22h3.996l-.893-9.835c.54-.358.895-.97.895-1.665z"
            })))
        },
        ge = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 14a2 2 0 100-4 2 2 0 000 4zM7.758 16.243l1.414-1.415a3.97 3.97 0 01-1.173-2.831c0-1.068.417-2.071 1.173-2.825L7.758 7.756a5.957 5.957 0 00-1.76 4.24c0 1.604.625 3.112 1.76 4.247zm8.484 0A5.96 5.96 0 0018 12a5.96 5.96 0 00-1.758-4.243l-1.414 1.414A3.975 3.975 0 0116 12a3.975 3.975 0 01-1.172 2.829l1.414 1.414z"
            }), a.a.createElement("path", {
                d: "M6.344 17.657a7.953 7.953 0 01-2.345-5.659c0-2.137.833-4.145 2.345-5.654L4.93 4.929a9.92 9.92 0 00-2.931 7.069 9.936 9.936 0 002.931 7.073l1.414-1.414zM17.657 6.343A7.948 7.948 0 0120 12a7.948 7.948 0 01-2.343 5.657l1.414 1.414A9.932 9.932 0 0022 12a9.934 9.934 0 00-2.929-7.071l-1.414 1.414z"
            })))
        },
        he = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"
            })))
        },
        pe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 4c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3zm6.002 16H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"
            })))
        },
        me = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z"
            })))
        },
        be = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16 12V6c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 00-.209.025A4.006 4.006 0 008 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4zm-6 0V6c0-1.103.897-2 2-2a.89.89 0 00.163-.015C13.188 4.06 14 4.935 14 6v6c0 1.103-.897 2-2 2s-2-.897-2-2z"
            }), a.a.createElement("path", {
                d: "M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z"
            })))
        },
        ye = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M2.25 9.5h5v5h-5v-5zM9.5 9.5h5v5h-5v-5zM16.75 9.5h5v5h-5v-5z"
            })))
        },
        we = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M10 10h4v4h-4v-4zm6 0h4v4h-4v-4zM4 10h4v4H4v-4z"
            })))
        },
        Ee = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19.684 5.821l-9-3.272A1.998 1.998 0 008 4.428v6.129A3.953 3.953 0 006 10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V4.428L19 7.7v6.856A3.962 3.962 0 0017 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879zM6 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm11 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
            })))
        },
        xe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742A1.99 1.99 0 0012 2a1.99 1.99 0 00-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 003 16v2a1 1 0 001 1h16a1 1 0 001-1v-2a.996.996 0 00-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 007 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 002.818-2H9.182A2.98 2.98 0 0012 22z"
            })))
        },
        _e = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M7 7h10v2H7V7zm0 4h7v2H7v-2z"
            }), a.a.createElement("path", {
                d: "M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
            })))
        },
        Oe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M13.4 2.096a10.08 10.08 0 00-8.937 3.331A10.054 10.054 0 002.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 002.618.354l.142-.001a3.001 3.001 0 002.516-1.426 2.989 2.989 0 00.153-2.879l-.199-.416a1.919 1.919 0 01.094-1.912 2.004 2.004 0 012.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0022 12.14a9.936 9.936 0 00-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909l-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 01-.051.961.992.992 0 01-.844.479h-.112a8.061 8.061 0 01-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 017.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"
            }), a.a.createElement("path", {
                d: "M7.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM14.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            })))
        },
        Re = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            }), a.a.createElement("path", {
                d: "M13 9h2v6h-2V9zM9 9h2v6H9V9z"
            })))
        },
        ze = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2a4.505 4.505 0 00-4.5 4.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
            })))
        },
        Ce = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm9 19v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2zM15 7a3 3 0 11-6 0 3 3 0 016 0z",
                clipRule: "evenodd"
            })))
        },
        Me = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M17.707 12.293a.999.999 0 00-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594-.874-.874-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 000-1.414l-4-4a.999.999 0 00-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268 3.898 3.898 8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 000-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 00-.272.912c.024.115.611 2.842 2.271 4.502 1.66 1.66 4.387 2.247 4.502 2.271a.991.991 0 00.912-.271L17 14.414 19.586 17l-2.006 2.005z"
            })))
        },
        Ae = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 17l1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2z"
            }), a.a.createElement("path", {
                d: "M16.267 10.563l-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"
            })))
        },
        je = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 17l1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2zM10 6c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"
            }), a.a.createElement("path", {
                d: "M16.267 10.563l-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"
            })))
        },
        Se = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M7 6v12l10-6L7 6z"
            })))
        },
        Le = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            }), a.a.createElement("path", {
                d: "M9 17l8-5-8-5v10z"
            })))
        },
        Be = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 12v-1.707c0-4.442-3.479-8.16-7.755-8.29-2.204-.05-4.251.736-5.816 2.256A7.933 7.933 0 004 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 011.821-4.306 5.977 5.977 0 014.363-1.69C15.392 4.098 18 6.92 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"
            }), a.a.createElement("path", {
                d: "M7 12h2v8H7v-8zm8 0h2v8h-2v-8z"
            })))
        },
        Pe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 7h-1V2H6v5H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h2v3h12v-3h2c1.103 0 2-.897 2-2v-7c0-1.654-1.346-3-3-3zM8 4h8v3H8V4zm8 16H8v-4h8v4zm4-3h-2v-3H6v3H4v-7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1v7z"
            }), a.a.createElement("path", {
                d: "M14 10h4v2h-4v-2z"
            })))
        },
        Te = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12.054 5c-7.633 0-9.927 6.617-9.948 6.684L2 12l.105.316C2.127 12.383 4.421 19 12.054 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.981 11.617 19.687 5 12.054 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
            }), a.a.createElement("path", {
                d: "M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"
            })))
        },
        ke = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 9a3.02 3.02 0 00-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"
            }), a.a.createElement("path", {
                d: "M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"
            })))
        },
        He = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M10 11H7.101l.001-.009a4.956 4.956 0 01.752-1.787 5.054 5.054 0 012.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 012.018 0 4.978 4.978 0 012.525 1.361l1.416-1.412a7.036 7.036 0 00-2.224-1.501 6.921 6.921 0 00-1.315-.408 7.079 7.079 0 00-2.819 0 6.94 6.94 0 00-1.316.409 7.04 7.04 0 00-3.08 2.534 6.978 6.978 0 00-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 01-2.103 3.138 4.943 4.943 0 01-1.787.752 5.073 5.073 0 01-2.017 0 4.956 4.956 0 01-1.787-.752 5.072 5.072 0 01-.74-.61L7.05 16.95a7.032 7.032 0 002.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 002.818 0 7.031 7.031 0 004.395-2.945 6.974 6.974 0 001.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"
            })))
        },
        Ie = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M5 21h14c1.103 0 2-.897 2-2V8a.997.997 0 00-.293-.707l-4-4A.996.996 0 0016 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM15.586 5L19 8.414 19.001 19H17v-5c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v5H5V5h2v4h8V5h.586zM15 14H9v5h6v-5zm-2-9h-2v2h2V5z",
                clipRule: "evenodd"
            })))
        },
        Fe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M21.426 11.095l-17-8A.999.999 0 003.03 4.242L4.969 12 3.03 19.758a.998.998 0 001.396 1.147l17-8a1 1 0 000-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"
            })))
        },
        De = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M2.344 15.271l2 3.46a1 1 0 001.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 001 1h4a1 1 0 001-1v-1.598a8.094 8.094 0 001.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 00-.365-1.366l-1.372-.793a7.683 7.683 0 00-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 00-1.366-.365l-1.396.806A8.034 8.034 0 0015 4.598V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.598A8.094 8.094 0 007.105 5.71L5.71 4.904a.999.999 0 00-1.366.365l-2 3.46a1.004 1.004 0 00.365 1.366l1.372.793a7.683 7.683 0 000 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"
            })))
        },
        Ne = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"
            }), a.a.createElement("path", {
                d: "M2.352 16.136l1.054 1.73c.559.917 1.905 1.261 2.875.73l.557-.306a8.647 8.647 0 001.997 1.112V20c0 1.103.945 2 2.107 2h2.106c1.162 0 2.107-.897 2.107-2v-.598a8.68 8.68 0 001.997-1.111l.557.306c.972.53 2.315.188 2.876-.731l1.053-1.729c.581-.955.236-2.181-.77-2.732l-.532-.292a7.332 7.332 0 000-2.224l.532-.292c1.006-.552 1.351-1.777.77-2.732l-1.053-1.729c-.559-.92-1.904-1.265-2.876-.732l-.557.306a8.646 8.646 0 00-1.997-1.112V4c0-1.103-.945-2-2.107-2h-2.106c-1.162 0-2.107.897-2.107 2v.598a8.68 8.68 0 00-1.997 1.111l-.557-.306c-.973-.531-2.317-.187-2.876.732L2.352 7.864c-.581.955-.236 2.181.77 2.732l.532.292a7.302 7.302 0 000 2.223l-.532.292c-1.006.552-1.351 1.778-.77 2.733zm3.504-2.758A5.43 5.43 0 015.676 12c0-.462.06-.926.178-1.378a.98.98 0 00-.495-1.108l-1.182-.65 1.05-1.729 1.207.662c.404.221.913.165 1.251-.142a6.478 6.478 0 012.511-1.399c.444-.128.746-.517.746-.956V4h2.106v1.3c0 .439.303.828.746.956a6.49 6.49 0 012.511 1.399c.338.307.849.362 1.251.142l1.205-.661 1.053 1.729-1.183.649a.98.98 0 00-.495 1.108c.117.452.179.916.179 1.378 0 .461-.062.925-.18 1.378a.981.981 0 00.496 1.108l1.182.649-1.05 1.729-1.207-.661a1.092 1.092 0 00-1.251.142 6.478 6.478 0 01-2.511 1.399 1.007 1.007 0 00-.746.956l.002 1.3h-2.108v-1.3c0-.439-.303-.828-.746-.956a6.49 6.49 0 01-2.51-1.399 1.094 1.094 0 00-1.251-.141l-1.206.662-1.053-1.729 1.183-.651a.981.981 0 00.497-1.108z"
            })))
        },
        Ve = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M21 6c0-1.654-1.346-3-3-3a2.993 2.993 0 00-2.815 2h-6.37A2.993 2.993 0 006 3C4.346 3 3 4.346 3 6c0 1.302.839 2.401 2 2.815v6.369A2.997 2.997 0 003 18c0 1.654 1.346 3 3 3a2.993 2.993 0 002.815-2h6.369a2.994 2.994 0 002.815 2c1.654 0 3-1.346 3-3a2.997 2.997 0 00-2-2.816V8.816A2.996 2.996 0 0021 6zm-3-1a1.001 1.001 0 010 2 1.001 1.001 0 010-2zm-2.815 12h-6.37A2.99 2.99 0 007 15.184V8.816A2.99 2.99 0 008.815 7h6.369A2.99 2.99 0 0017 8.815v6.369A2.99 2.99 0 0015.185 17zM6 5a1.001 1.001 0 010 2 1.001 1.001 0 010-2zm0 14a1.001 1.001 0 010-2 1.001 1.001 0 010 2zm12 0a1.001 1.001 0 010-2 1.001 1.001 0 010 2z"
            })))
        },
        We = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M3 12c0 1.654 1.346 3 3 3 .794 0 1.512-.315 2.049-.82l5.991 3.424c-.018.13-.04.26-.04.396 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.794 0-1.512.315-2.049.82L8.96 12.397c.018-.131.04-.261.04-.397s-.022-.266-.04-.397l5.991-3.423c.537.505 1.255.82 2.049.82 1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .136.022.266.04.397L8.049 9.82A2.982 2.982 0 006 9c-1.654 0-3 1.346-3 3z"
            })))
        },
        Ue = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.995 6.903a.997.997 0 00-.547-.797l-7.973-4a.997.997 0 00-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.74 8.541 15.008a.995.995 0 00.969-.01c9.307-5.258 8.514-14.572 8.476-14.966zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.51c.005 1.87-.481 8.244-7.006 12.218z"
            })))
        },
        $e = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 00-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 00-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"
            })))
        },
        Ge = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16 21c3.527-1.547 5.999-4.91 5.999-9 0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7 0 2.953-1.612 5.614-3.999 7v2z"
            }), a.a.createElement("path", {
                d: "M16 7v10c1.225-1.1 2-3.23 2-5 0-1.771-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 001.027.05A1 1 0 0014 20V4a1 1 0 00-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.02a1.027 1.027 0 00.38-.115c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 00-.382-.116c-.032-.003-.059-.02-.091-.02H4V9z"
            })))
        },
        Ye = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
            })))
        },
        qe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M6.516 14.323l-1.49 6.452a.998.998 0 001.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 00-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 00-1.822 0L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 00.832-.586L12 5.43l1.799 3.981a.998.998 0 00.832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 00-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 00-.276-.94l-3.038-2.962 4.09-.326z"
            })))
        },
        Je = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            }), a.a.createElement("path", {
                d: "M9 9h6v6H9V9z"
            })))
        },
        Ke = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12.586 2.586A2 2 0 0011.172 2H4a2 2 0 00-2 2v7.172a2 2 0 00.586 1.414l8 8a2 2 0 002.828 0l7.172-7.172a2 2 0 000-2.828l-8-8zM7 9a2 2 0 11.001-4.001A2 2 0 017 9z"
            })))
        },
        Xe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M13.707 3.293A.996.996 0 0013 3H4a1 1 0 00-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 001.414 0l9-9a.999.999 0 000-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"
            }), a.a.createElement("path", {
                d: "M8.496 10a1.505 1.505 0 100-3.01 1.505 1.505 0 000 3.01z"
            })))
        },
        Ze = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M11 4L5 20h2.137l1.875-5h6.363l1.875 5h2.137l-6-16H11zm-1.239 9l2.432-6.485L14.625 13H9.761z"
            })))
        },
        Qe = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M10 10.414l4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414L10 10.414z"
            })))
        },
        et = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M7.5 14.5c-1.58 0-2.903 1.06-3.337 2.5H2v2h2.163c.434 1.44 1.757 2.5 3.337 2.5 1.58 0 2.903-1.06 3.337-2.5H22v-2H10.837c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5S9 17.173 9 18s-.673 1.5-1.5 1.5zm9-11c-1.58 0-2.903 1.06-3.337 2.5H2v2h11.163c.434 1.44 1.757 2.5 3.337 2.5 1.58 0 2.903-1.06 3.337-2.5H22v-2h-2.163c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
            }), a.a.createElement("path", {
                d: "M12.837 5C12.403 3.56 11.08 2.5 9.5 2.5 7.92 2.5 6.597 3.56 6.163 5H2v2h4.163C6.597 8.44 7.92 9.5 9.5 9.5c1.58 0 2.903-1.06 3.337-2.5h9.288V5h-9.288zM9.5 7.5C8.673 7.5 8 6.827 8 6s.673-1.5 1.5-1.5S11 5.173 11 6s-.673 1.5-1.5 1.5z"
            })))
        },
        tt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2v-2z"
            })))
        },
        nt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M11 15h2V9h3l-4-5-4 5h3v6z"
            }), a.a.createElement("path", {
                d: "M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"
            })))
        },
        rt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.998 10H4V7h12l.001 4.999L16 12l.001.001.001 4.999z"
            })))
        },
        at = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16 12h2v4h-2v-4z"
            }), a.a.createElement("path", {
                d: "M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 010-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"
            })))
        },
        ot = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M11.5 10h2v5h-2v-5zm0 6h2v2h-2v-2z"
            }), a.a.createElement("path", {
                d: "M14.109 4.062A1.998 1.998 0 0012.34 3c-.742 0-1.42.407-1.768 1.063L3.235 17.926a1.986 1.986 0 00.054 1.968 1.984 1.984 0 001.713.968H19.68c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 00.054-1.968l-7.34-13.864zm-9.107 14.8L12.34 4.999l7.344 13.863H5.002z"
            })))
        },
        it = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M17.146 13.647l-.002.002.002-.002.02-.023c.02-.023.051-.06.09-.112a3.2 3.2 0 00.297-.486c.22-.438.447-1.112.447-2.026 0-.914-.228-1.588-.447-2.026a3.197 3.197 0 00-.297-.486 1.916 1.916 0 00-.11-.134l-.002-.003a.5.5 0 01.71-.705v.001l.001.001.002.002.005.005.014.015.043.048c.035.04.082.096.137.17.11.146.251.359.391.638.28.562.553 1.388.553 2.474 0 1.086-.272 1.912-.553 2.474a4.19 4.19 0 01-.39.639 2.908 2.908 0 01-.2.237l-.002.002-.001.002a.5.5 0 01-.71-.705",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M19.496 16.972a.5.5 0 01-.038-.707l.05-.061c.04-.05.097-.126.168-.232.142-.21.337-.535.533-.972.391-.874.791-2.204.791-4 0-1.796-.4-3.126-.791-4a6.514 6.514 0 00-.533-.972 3.965 3.965 0 00-.21-.284l-.008-.01a.5.5 0 01.744-.668l.001.001.028.032.064.079c.053.067.125.164.21.291.172.254.395.628.616 1.122.444.99.879 2.46.879 4.409 0 1.949-.435 3.418-.879 4.409a7.523 7.523 0 01-.615 1.122 4.904 4.904 0 01-.303.403l-.745-.669.744.67a.5.5 0 01-.706.037z"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M13.793 3.704c.63-.63 1.707-.184 1.707.707v13.171c0 .891-1.077 1.337-1.707.707l-3-3a1 1 0 00-.707-.293H3.5a1 1 0 01-1-1v-6a1 1 0 011-1h6.586a1 1 0 00.707-.292l3-3zM11.5 7.41l3-3v13.171l-3-3a2 2 0 00-1.414-.586H3.5v-6h6.586a2 2 0 001.414-.585z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M5 19v-4h1v4a.5.5 0 00.5.5h1A.5.5 0 008 19v-4h1v4a1.5 1.5 0 01-1.5 1.5h-1A1.5 1.5 0 015 19z",
                clipRule: "evenodd"
            })))
        },
        ct = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.5 4A1.5 1.5 0 0122 5.5v13a1.5 1.5 0 01-1.5 1.5H13v-1h7.5a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-17a.5.5 0 00-.5.5V9H2V5.5A1.5 1.5 0 013.5 4h17zM2 10.5a9.5 9.5 0 019.5 9.5h-1A8.5 8.5 0 002 11.5v-1zm0 3A6.5 6.5 0 018.5 20h-1A5.5 5.5 0 002 14.5v-1zm0 3A3.5 3.5 0 015.5 20h-1A2.5 2.5 0 002 17.5v-1zm.5 2.5a.5.5 0 110 1 .5.5 0 010-1z"
            })))
        },
        lt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M18.341 4.97a.75.75 0 00-1.06 0L10.25 12l7.03 7.03a.75.75 0 001.061-1.06L12.371 12l5.97-5.97a.75.75 0 000-1.06z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M13.841 4.97a.75.75 0 00-1.06 0L5.75 12l7.03 7.03a.75.75 0 001.061-1.06L7.871 12l5.97-5.97a.75.75 0 000-1.06z",
                clipRule: "evenodd"
            })))
        },
        ut = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M5.97 4.97a.75.75 0 011.06 0L14.06 12l-7.03 7.03a.75.75 0 01-1.06-1.06L11.94 12 5.97 6.03a.75.75 0 010-1.06z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M10.47 4.97a.75.75 0 011.06 0L18.56 12l-7.03 7.03a.75.75 0 11-1.06-1.06L16.44 12l-5.97-5.97a.75.75 0 010-1.06z",
                clipRule: "evenodd"
            })))
        },
        st = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.5 8.1A1.5 1.5 0 0122 9.6v7.5a1.5 1.5 0 01-1.5 1.5H20v3.5l-3.707-3.5H9.5A1.5 1.5 0 018 17.1v-2.5h9.5a1.5 1.5 0 001.5-1.5v-5h1.5zm-4-5.5A1.5 1.5 0 0118 4.1v8a1.5 1.5 0 01-1.5 1.5H7.707L4 17.1v-3.5h-.5A1.5 1.5 0 012 12.1v-8a1.5 1.5 0 011.5-1.5h13z"
            })))
        },
        ft = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.5 8A1.5 1.5 0 0122 9.5V17a1.5 1.5 0 01-1.5 1.5H20V22l-3.707-3.5H9.5A1.5 1.5 0 018 17v-2.5h9.5A1.5 1.5 0 0019 13V8h1.5zm-4-5.5A1.5 1.5 0 0118 4v8a1.5 1.5 0 01-1.5 1.5H7.707L4 17v-3.5h-.5A1.5 1.5 0 012 12V4a1.5 1.5 0 011.5-1.5h13zm-6.625 7.75a.5.5 0 100 1 .5.5 0 000-1zm0-5.5C8.841 4.75 8 5.552 8 6.538h.938l.006-.104c.054-.444.451-.79.931-.79.517 0 .938.401.938.894a.867.867 0 01-.306.66l-1.1.961V9.25h.937v-.697l.796-.695.123-.118c.311-.328.487-.757.487-1.202 0-.986-.841-1.788-1.875-1.788z"
            })))
        },
        dt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 100 18 9 9 0 000-18zm4.787 4.213l-3.42 6.155-6.154 3.419 3.42-6.155 6.154-3.419z"
            })))
        },
        vt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M11.646 20.854l-2.182-2.182a.5.5 0 01.707-.707l1.329 1.328 1-14.586v14.586l1.328-1.328a.5.5 0 11.708.707l-2.182 2.182a.5.5 0 01-.708 0z"
            }), a.a.createElement("path", {
                d: "M11.646 3.146L9.464 5.328a.5.5 0 00.707.708L11.5 4.707v14.586l1-14.586 1.328 1.329a.5.5 0 10.708-.708l-2.182-2.182a.5.5 0 00-.708 0z"
            }), a.a.createElement("path", {
                d: "M20.854 12.354l-2.182 2.182a.5.5 0 11-.707-.708l1.328-1.328-14.586-1h14.586l-1.328-1.328a.5.5 0 11.707-.708l2.182 2.182a.5.5 0 010 .708z"
            }), a.a.createElement("path", {
                d: "M3.146 12.354l2.182 2.182a.5.5 0 10.708-.708L4.707 12.5h14.586l-14.586-1 1.329-1.328a.5.5 0 00-.708-.708l-2.182 2.182a.5.5 0 000 .708z"
            })))
        },
        gt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.5 14.5a.5.5 0 10-1 0 .5.5 0 001 0zm0-9a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z",
                clipRule: "evenodd"
            })))
        },
        ht = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M13.6 2a1 1 0 011 1v4h-1V3h-11v18h11v-4h1v4a1 1 0 01-1 1h-11a1 1 0 01-1-1V3a1 1 0 011-1h11zm2.98 5.247L22.39 12l-5.81 4.753a.6.6 0 01-.98-.464V14.5h-3.5v-5h3.5V7.711a.6.6 0 01.98-.464zm.02 1.308V10.5h-3.5v3h3.5v1.945L20.81 12 16.6 8.555z"
            })))
        },
        pt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 4v3.759a.5.5 0 01-.992.09L19 7.758V5.707L15.706 9a.5.5 0 01-.638.058L15 9a.5.5 0 01-.058-.638l.058-.07L18.292 5h-2.05a.5.5 0 01-.493-.41l-.008-.09a.5.5 0 01.41-.492l.09-.008H20zM4 4v3.759a.5.5 0 00.992.09L5 7.758V5.707L8.294 9a.5.5 0 00.638.058L9 9a.5.5 0 00.057-.638L9 8.292 5.708 5h2.05a.5.5 0 00.493-.41l.008-.09a.5.5 0 00-.41-.492L7.759 4H4zM20 20v-3.759a.5.5 0 00-.992-.09l-.008.09v2.052L15.706 15a.5.5 0 00-.638-.058L15 15a.5.5 0 00-.057.638l.058.07L18.292 19h-2.05a.5.5 0 00-.493.41l-.008.09a.5.5 0 00.41.492l.09.008H20zM4 20v-3.759a.5.5 0 01.992-.09l.008.09v2.052L8.294 15a.5.5 0 01.638-.058L9 15a.5.5 0 01.058.638l-.058.07L5.708 19h2.05a.5.5 0 01.493.41l.008.09a.5.5 0 01-.41.492l-.09.008H4z"
            })))
        },
        mt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M14.101 5v1H4v14h14v-9.885h1V20a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h10.101zM21 3v4.759a.5.5 0 01-.992.09L20 7.758V4.707L15.706 9a.5.5 0 01-.638.058L15 9a.5.5 0 01-.058-.638l.058-.07L19.292 4h-3.05a.5.5 0 01-.493-.41l-.008-.09a.5.5 0 01.41-.492l.09-.008H21z"
            })))
        },
        bt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M22 5.334C22 3.582 20.419 2 18.667 2H5.333C3.581 2 2 3.582 2 5.334v13.332C2 20.418 3.581 22 5.334 22H12v-7.556H9.556v-3.333H12V9.812c0-2.24 1.682-4.256 3.75-4.256h2.694v3.333H15.75c-.295 0-.639.358-.639.894v1.328h3.333v3.333h-3.333V22h3.556C20.419 22 22 20.418 22 18.666V5.334z"
            })))
        },
        yt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M13.332 19.82a2 2 0 01-2.66-.005l-.122-.11C5.4 15.125 2 12.103 2 8.395 2 5.374 4.42 3 7.5 3c1.74 0 3.41.795 4.5 2.05A6.037 6.037 0 0116.5 3C19.58 3 22 5.374 22 8.395c0 3.708-3.4 6.73-8.55 11.32l-.118.105z"
            })))
        },
        wt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-7 13h-2v-2h2v2zm0-4h-2V5h2v6z"
            })))
        },
        Et = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5v.667a1.5 1.5 0 01-.3.9l-5.6 7.466a.5.5 0 00-.1.3v4.132c0 .501-.25.97-.668 1.248l-2.244 1.496A.7.7 0 0110 20.126v-6.293a.5.5 0 00-.1-.3L4.3 6.067a1.5 1.5 0 01-.3-.9V4.5z",
                clipRule: "evenodd"
            })))
        },
        xt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M3 2h8.5a1.5 1.5 0 011.2.6l.9 1.2a.5.5 0 00.4.2h5.5A1.5 1.5 0 0121 5.5V15a1.5 1.5 0 01-1.5 1.5H14a1.5 1.5 0 01-1.2-.6l-.9-1.2a.5.5 0 00-.4-.2H4v7a.5.5 0 01-1 0V2zm1 11.5h7.5a1.5 1.5 0 011.2.6l.9 1.2a.5.5 0 00.4.2h5.5a.5.5 0 00.5-.5V5.5a.5.5 0 00-.5-.5H14a1.5 1.5 0 01-1.2-.6l-.9-1.2a.5.5 0 00-.4-.2H4v10.5z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M11.5 13.5H4V3h7.5a.5.5 0 01.4.2l.9 1.2A1.5 1.5 0 0014 5h5.5a.5.5 0 01.5.5V15a.5.5 0 01-.5.5H14a.5.5 0 01-.4-.2l-.9-1.2a1.5 1.5 0 00-1.2-.6z"
            })))
        },
        _t = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M14.217 15.5l1.243 2.071-.872 3.051A9.002 9.002 0 0112 21c-.9 0-1.768-.132-2.588-.378l-.872-3.05L9.783 15.5h4.434zm4.139-4.47l2.568 2.141A8.948 8.948 0 0119.484 17h-3.2l-1.249-2.08.87-3.48 2.451-.41zm-12.712 0l2.45.41.87 3.48-1.225 2.043-3.521-.44a8.941 8.941 0 01-1.142-3.352l2.568-2.14zm2.988-7.379l2.868 1.64v2.952l-3.122 2.23-2.526-.421-1.32-3.078a9.031 9.031 0 014.1-3.323zm6.736 0a9.03 9.03 0 013.983 3.155l-1.218 3.248-2.51.419-3.123-2.23V5.29l2.868-1.639zm5.098 3.024A9.993 9.993 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.953 9.953 0 00-1.533-5.322l-.001-.003z"
            })))
        },
        Ot = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M5 5a1 1 0 011-1h15a1 1 0 011 1v11a1 1 0 01-1 1h-1v-1h1V5H6v1H5V5z"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M14.5 9a2 2 0 100 4 2 2 0 000-4zm-1 2a1 1 0 112 0 1 1 0 01-2 0z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M19 8a1 1 0 00-1-1H3a1 1 0 00-1 1v11a1 1 0 001 1h15a1 1 0 001-1V8zM3 8v6.293l3.5-3.5 5.064 5.064 2.953-1.97L18 16.5V8H3z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M14.5 10a1 1 0 100 2 1 1 0 000-2z"
            })))
        },
        Rt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2.5c-5.522 0-10 4.36-10 9.74 0 4.304 2.866 7.956 6.839 9.243.5.09.684-.211.684-.469 0-.232-.01-1-.014-1.813-2.783.59-3.37-1.15-3.37-1.15-.455-1.125-1.11-1.425-1.11-1.425-.907-.604.07-.592.07-.592 1.003.069 1.532 1.004 1.532 1.004.891 1.489 2.339 1.058 2.91.81.089-.63.348-1.06.635-1.303-2.222-.246-4.557-1.082-4.557-4.814 0-1.063.391-1.932 1.031-2.615-.104-.245-.446-1.236.097-2.577 0 0 .84-.262 2.75.998a9.835 9.835 0 012.504-.328c.849.004 1.705.112 2.505.328 1.908-1.26 2.747-.998 2.747-.998.544 1.341.201 2.332.098 2.577a3.708 3.708 0 011.029 2.615c0 3.741-2.34 4.565-4.566 4.806.358.303.678.895.678 1.804 0 1.304-.012 2.353-.012 2.673 0 .26.18.564.687.468 3.971-1.29 6.833-4.94 6.833-9.241C22 6.86 17.523 2.5 12 2.5z"
            })))
        },
        zt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M3.5 11a.5.5 0 01.5.5v9a.5.5 0 00.5.5H9v-6a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 15v6h4.5a.5.5 0 00.5-.5v-9a.5.5 0 011 0v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20.5v-9a.5.5 0 01.5-.5zM14 21v-6a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v6h4zM12.297 3.34a.5.5 0 00-.594 0L2.797 9.903a.5.5 0 01-.594-.805l8.907-6.563a1.5 1.5 0 011.78 0l8.907 6.563a.5.5 0 11-.594.805L12.297 3.34z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M14 15v6h-4v-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
            })))
        },
        Ct = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M13.067 2c1.772.004 2.155.02 3.067.063 1.063.046 1.79.218 2.427.465a4.89 4.89 0 011.77 1.152 4.692 4.692 0 011.145 1.778c.246.632.418 1.363.465 2.425.04.915.055 1.295.058 3.094v2.055c-.003 1.8-.018 2.18-.058 3.094-.047 1.062-.219 1.788-.465 2.425a4.893 4.893 0 01-1.153 1.77 4.88 4.88 0 01-1.77 1.152c-.634.246-1.364.418-2.428.465-.914.04-1.295.055-3.095.058h-2.056c-1.8-.003-2.181-.018-3.096-.058-1.063-.047-1.79-.219-2.427-.465a4.89 4.89 0 01-1.77-1.152 4.88 4.88 0 01-1.157-1.774c-.246-.632-.418-1.363-.465-2.425-.04-.915-.055-1.295-.058-3.094V10.94c.003-1.771.018-2.152.058-3.064.047-1.063.219-1.79.465-2.426a4.896 4.896 0 011.157-1.77 4.875 4.875 0 011.774-1.156c.633-.246 1.364-.418 2.427-.465.991-.043 1.355-.056 3.577-.058h1.608zm-.253 1.802h-1.617c-1.945.002-2.3.016-3.234.058-.973.043-1.504.207-1.856.344a3.136 3.136 0 00-1.15.75 3.102 3.102 0 00-.746 1.149c-.137.351-.301.878-.344 1.855-.044.974-.057 1.32-.059 3.484v1.111c.002 2.163.015 2.507.059 3.484.043.972.207 1.504.344 1.855.183.465.398.797.75 1.149.348.348.684.566 1.15.746.351.137.879.3 1.856.344.974.043 1.32.056 3.486.058h1.112c2.164-.002 2.508-.015 3.485-.058.973-.044 1.505-.207 1.857-.344a3.14 3.14 0 001.149-.75c.348-.348.566-.683.746-1.148.137-.352.301-.879.344-1.856.047-1.051.06-1.371.06-4.04v-.286c-.002-2.406-.014-2.737-.06-3.753-.043-.973-.207-1.503-.344-1.855a3.135 3.135 0 00-.75-1.149 3.097 3.097 0 00-1.149-.746c-.352-.137-.879-.3-1.856-.344-.935-.042-1.289-.056-3.233-.058zM12 7.488a5.138 5.138 0 11-5.137 5.137A5.138 5.138 0 0112 7.488zm0 1.805a3.332 3.332 0 100 6.664 3.332 3.332 0 000-6.664zm5.34-3.207a1.2 1.2 0 110 2.398 1.2 1.2 0 010-2.398z"
            })))
        },
        Mt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M4.75 5.25h-1.5v1.5h1.5v-1.5zm-1.5-1a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1v-1.5a1 1 0 00-1-1h-1.5zM20.75 5.25h-12v1.5h12v-1.5zm-12-1a1 1 0 00-1 1v1.5a1 1 0 001 1h12a1 1 0 001-1v-1.5a1 1 0 00-1-1h-12zM20.75 11.25h-12v1.5h12v-1.5zm-12-1a1 1 0 00-1 1v1.5a1 1 0 001 1h12a1 1 0 001-1v-1.5a1 1 0 00-1-1h-12zM4.75 17.25h-1.5v1.5h1.5v-1.5zm-1.5-1a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1v-1.5a1 1 0 00-1-1h-1.5zM20.75 17.25h-12v1.5h12v-1.5zm-12-1a1 1 0 00-1 1v1.5a1 1 0 001 1h12a1 1 0 001-1v-1.5a1 1 0 00-1-1h-12z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M3.25 5.25h1.5v1.5h-1.5v-1.5z"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M2.25 11.25a1 1 0 011-1h1.5a1 1 0 011 1v1.5a1 1 0 01-1 1h-1.5a1 1 0 01-1-1v-1.5zm2.5 0h-1.5v1.5h1.5v-1.5z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M3.25 11.25h1.5v1.5h-1.5v-1.5zM3.25 17.25h1.5v1.5h-1.5v-1.5zM8.75 11.25h12v1.5h-12v-1.5zM8.75 17.25h12v1.5h-12v-1.5zM8.75 5.25h12v1.5h-12v-1.5z"
            })))
        },
        At = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M3 4.5h18a1 1 0 011 1v13a1 1 0 01-1 1H3a1 1 0 01-1-1v-13a1 1 0 011-1zm2.29 3.093a.5.5 0 00-.58.814l6.418 4.585a1.5 1.5 0 001.744 0l6.419-4.585a.5.5 0 10-.582-.814l-6.418 4.585a.5.5 0 01-.582 0L5.291 7.593z"
            })))
        },
        jt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M19 16a1 1 0 110 2H5a1 1 0 110-2h14zm0-5a1 1 0 110 2H5a1 1 0 110-2h14zm0-5a1 1 0 110 2H5a1 1 0 010-2h14z"
            })))
        },
        St = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M4 7.1a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM4 12.1a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM4 17.1a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
            })))
        },
        Lt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M12 3.5A3.5 3.5 0 008.5 7v5a3.5 3.5 0 107 0V7A3.5 3.5 0 0012 3.5z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M6.5 11.5a.5.5 0 01.5.5 5 5 0 0010 0 .5.5 0 011 0 6 6 0 01-5.5 5.98V20a.5.5 0 01-1 0v-2.02A6 6 0 016 12a.5.5 0 01.5-.5z",
                clipRule: "evenodd"
            })))
        },
        Bt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
            })))
        },
        Pt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 1c-.548 0-1 .452-1 1s.452 1 1 1 1-.452 1-1-.452-1-1-1zm0-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 1c-.548 0-1 .452-1 1s.452 1 1 1 1-.452 1-1-.452-1-1-1zm0-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 1c-.548 0-1 .452-1 1s.452 1 1 1 1-.452 1-1-.452-1-1-1z"
            })))
        },
        Tt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M6.5 15a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zM17.5 15a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M8.5 5a1 1 0 011-1h10a1 1 0 011 1v12l-1 .5V8h-10v9l-1 .5V5zm1 2h10V5h-10v2z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M6.5 15a2 2 0 100 4 2 2 0 000-4zM19.5 7h-10V5h10v2zM17.5 15a2 2 0 100 4 2 2 0 000-4z"
            })))
        },
        kt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M20.425 19.263A.5.5 0 0120 19.5H4a.5.5 0 01-.447-.724c.142-.284.35-.593.556-.9l.036-.053c.203-.3.414-.612.61-.95.418-.715.745-1.5.745-2.373V10a6.502 6.502 0 014.323-6.126.608.608 0 00.103-.153c.041-.075.082-.16.133-.27v-.002c.05-.104.107-.227.173-.35.133-.244.32-.526.612-.744C11.147 2.131 11.527 2 12 2c.473 0 .853.13 1.156.355.292.218.479.5.612.745.066.122.123.245.172.35l.001.001c.051.11.092.195.133.27a.61.61 0 00.103.153A6.503 6.503 0 0118.5 10v4.5c0 .873.327 1.658.744 2.373.198.338.409.65.61.95l.037.053c.207.306.414.616.556.9a.5.5 0 01-.022.487zm-2.044-1.886c-.458-.785-.881-1.75-.881-2.877V10a5.503 5.503 0 00-3.667-5.187c-.344-.122-.53-.416-.638-.614-.055-.102-.107-.212-.153-.31l-.007-.015a5.672 5.672 0 00-.147-.298c-.101-.188-.204-.325-.329-.418C12.444 3.072 12.277 3 12 3c-.277 0-.444.072-.559.158-.125.093-.228.23-.33.418-.05.094-.096.19-.146.298l-.007.015c-.046.098-.098.208-.153.31-.108.198-.294.492-.638.614A5.503 5.503 0 006.5 10v4.5c0 1.127-.423 2.092-.88 2.877-.215.367-.443.705-.643 1l-.04.059-.042.064h14.21l-.043-.064-.04-.059c-.199-.295-.427-.633-.641-1z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M14 18.5a.5.5 0 01.5.5 2.5 2.5 0 01-5 0 .5.5 0 011 0 1.497 1.497 0 001.5 1.5 1.5 1.5 0 001.5-1.5.5.5 0 01.5-.5z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M18.38 17.377c-.457-.785-.88-1.75-.88-2.877V10a5.503 5.503 0 00-3.667-5.187c-.344-.122-.53-.416-.638-.614-.055-.102-.107-.212-.153-.31l-.007-.015a5.672 5.672 0 00-.147-.298c-.101-.188-.204-.325-.329-.418C12.444 3.072 12.277 3 12 3c-.277 0-.444.072-.559.158-.125.093-.228.23-.33.418-.05.094-.096.19-.146.298l-.007.015c-.046.098-.098.208-.153.31-.108.198-.294.492-.638.614A5.503 5.503 0 006.5 10v4.5c0 1.127-.423 2.092-.88 2.877-.215.367-.443.705-.643 1l-.04.059-.042.064h14.21l-.043-.064-.04-.059c-.199-.295-.427-.633-.641-1zM13.415 19.5h-2.83a1.5 1.5 0 002.83 0z"
            })))
        },
        Ht = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.5 3A1.5 1.5 0 0122 4.5V16a1.5 1.5 0 01-1.5 1.5H9.007L4.533 21v-3.5H3.5A1.5 1.5 0 012 16V4.5A1.5 1.5 0 013.5 3h17z"
            })))
        },
        It = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M3 12c0 5.04 3.596 9 8.5 9 .597 0 1.034-.03 1.349-.078.1-.016.18-.032.247-.047a5.506 5.506 0 00-.13-.252l-.133-.239a24.801 24.801 0 01-.247-.445C12.33 19.456 12 18.766 12 18c0-.673.172-1.286.573-1.784.392-.487.922-.76 1.445-.922.959-.295 2.21-.294 3.37-.294h.112c1.88 0 3.5-1.481 3.5-4 0-4.836-3.885-8-9-8a9 9 0 00-9 9zm10.192 9.125v-.003.003zM17.5 16c2.5 0 4.5-2 4.5-5 0-5.523-4.477-9-10-9S2 6.477 2 12s3.977 10 9.5 10c3.39 0 2.873-.92 2.188-2.135C13.363 19.288 13 18.644 13 18c0-2 2-2 4.5-2z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M12 8a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM7 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM17 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                d: "M8 10a1 1 0 11-2 0 1 1 0 012 0zM13 7a1 1 0 11-2 0 1 1 0 012 0zM18 10a1 1 0 11-2 0 1 1 0 012 0z"
            })))
        },
        Ft = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M19.807 21.992a19.927 19.927 0 01-8.678-3.081 19.59 19.59 0 01-6.034-6.022 19.836 19.836 0 01-3.087-8.701 2.003 2.003 0 011.19-2.017c.256-.112.532-.17.811-.17h3.017a2.014 2.014 0 012.011 1.725c.196.734.24.912.464 1.833.063.26.14.58.24.987a2.003 2.003 0 01-.452 2.118L8.012 9.939a16.074 16.074 0 006.033 6.021l1.277-1.274a2.012 2.012 0 012.122-.452l.89.224 1.936.479A2.013 2.013 0 0122 16.974v3.01a2.006 2.006 0 01-2.193 2.008z",
                clipRule: "evenodd"
            })))
        },
        Dt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.478 2 2 6.476 2 11.998c0 4.236 2.637 7.85 6.357 9.307-.085-.79-.166-2.006.037-2.867.18-.78 1.172-4.966 1.172-4.966s-.297-.6-.297-1.483c0-1.388.807-2.43 1.807-2.43.852 0 1.267.64 1.267 1.407 0 .856-.545 2.14-.83 3.326-.238.996.497 1.807 1.48 1.807 1.775 0 3.141-1.875 3.141-4.579 0-2.393-1.721-4.066-4.174-4.066-2.845 0-4.513 2.132-4.513 4.34 0 .862.329 1.781.744 2.282a.294.294 0 01.068.288c-.077.316-.244.996-.28 1.136-.045.185-.144.22-.334.136-1.248-.581-2.029-2.407-2.029-3.872 0-3.155 2.29-6.049 6.605-6.049 3.467 0 6.163 2.47 6.163 5.774 0 3.444-2.172 6.22-5.189 6.22-1.014 0-1.966-.527-2.29-1.15l-.623 2.376c-.226.87-.834 1.956-1.244 2.619.937.288 1.93.446 2.962.446 5.523 0 10-4.476 10-9.998 0-5.525-4.477-10.001-10-10.001V2z"
            })))
        },
        Nt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M3 18v3h3v1H3a1 1 0 01-1-1v-3h1zm19 0v3a1 1 0 01-1 1h-3v-1h3v-3h1zm-11 3v1H8v-1h3zm5 0v1h-3v-1h3zM3 13v3H2v-3h1zm19 0v3h-1v-3h1zM3 8v3H2V8h1zm19 0v3h-1V8h1zM6 2v1H3v3H2V3a1 1 0 011-1h3zm15 0a1 1 0 01.993.883L22 3v3h-1V3h-3V2h3zM11 2v1H8V2h3zm5 0v1h-3V2h3z"
            })))
        },
        Vt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M12 3a9 9 0 00-9 9v5H2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5h-1v-5a9 9 0 00-9-9z",
                clipRule: "evenodd"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M5.898 12.122c.928-.209 1.602.59 1.602 1.378v7c0 .789-.674 1.587-1.602 1.378a5.002 5.002 0 010-9.756zM16.5 13.5c0-.789.674-1.587 1.602-1.378a5.002 5.002 0 010 9.756c-.928.209-1.602-.59-1.602-1.378v-7z",
                clipRule: "evenodd"
            })))
        },
        Wt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16 13.5a1 1 0 011 1V21a1 1 0 01-1 1H8a1 1 0 01-1-1v-6.5a1 1 0 011-1h8zm-1.5 5.75h-5a.5.5 0 000 1h5a.5.5 0 000-1zm0-2h-5a.5.5 0 000 1h5a.5.5 0 000-1zM21 8a1 1 0 011 1v7.5a1 1 0 01-1 1h-3v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4H3a1 1 0 01-1-1V9a1 1 0 011-1h18zm-6.5 7.25h-5a.5.5 0 000 1h5a.5.5 0 000-1zM4 9.5a.5.5 0 100 1 .5.5 0 000-1zM17.5 2a1 1 0 011 1v4h-13V3a1 1 0 011-1h11z"
            })))
        },
        Ut = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "nonzero",
                d: "M15.657 4.343c2.84 2.84 3.115 8.022.147 11.169l.206-.209 5.84 5.847a.491.491 0 010 .7.491.491 0 01-.7 0l-5.847-5.84.357-.35c-3.12 3.13-8.432 2.881-11.317-.003A8 8 0 1115.657 4.343zm-1.704 7.108h-8a.5.5 0 00-.09.992l.09.008h8a.5.5 0 100-1zm-3.789-3.994H6.021a.5.5 0 00-.09.992l.09.008h4.143a.5.5 0 100-1z"
            })))
        },
        $t = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M15.657 4.343A8 8 0 114.343 15.657 8 8 0 0115.657 4.343zm-.707.707a7 7 0 10-9.9 9.9 7 7 0 009.9-9.9zm6.9 16.1a.491.491 0 010 .7.491.491 0 01-.7 0l-5.847-5.84.707-.707 5.84 5.847z"
            })))
        },
        Gt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                fillRule: "nonzero",
                d: "M15.5 4a2 2 0 11.728 1.543l-7.867 5.722a1.996 1.996 0 010 1.47l7.867 5.722a2 2 0 11-.589.808l-7.867-5.722a2 2 0 110-3.087l7.867-5.721A1.995 1.995 0 0115.5 4z"
            })))
        },
        Yt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M20.72 7.133c-.033-.532-.033-1.033-.033-1.534 0-.407-.324-.72-.746-.72-3.115 0-5.451-.876-7.43-2.691a.812.812 0 00-1.039 0C9.525 4.034 7.156 4.88 4.042 4.88c-.422 0-.747.312-.747.72 0 .5 0 1-.032 1.533-.065 5.008-.195 11.925 8.501 14.804l.26.063.26-.063c8.663-2.88 8.565-9.765 8.436-14.804zm-9.286 7.195a.78.78 0 01-.49.172h-.03a.654.654 0 01-.49-.23L8.25 12l1.04-.89 1.715 1.78 3.796-3.39.949.977-4.316 3.85z"
            })))
        },
        qt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M7.59 2a5.61 5.61 0 012.621.658 9.506 9.506 0 011.794-.169 9.37 9.37 0 013.676.744 9.456 9.456 0 013 2.028 9.441 9.441 0 012.023 3.01 9.427 9.427 0 01.743 3.685 9.66 9.66 0 01-.156 1.715h-.001v.001l-.001.001-.018.1a.446.446 0 00.01-.05l.008-.05.146.281c.32.666.51 1.39.555 2.127l.01.316a5.577 5.577 0 01-1.637 3.962A5.552 5.552 0 0116.41 22a5.588 5.588 0 01-2.75-.729l.002.001c-.005.002-.006.001-.006.001l-.405.063a9.371 9.371 0 01-4.919-.66 9.438 9.438 0 01-3.004-2.028 9.443 9.443 0 01-2.766-6.69c0-.549.047-1.097.141-1.633v.002l-.002-.01A5.634 5.634 0 012 7.603c0-1.496.583-2.905 1.637-3.962A5.55 5.55 0 017.59 2zm4.255 3.77c-2.242 0-4.629.955-4.629 3.495 0 1.226.438 2.53 2.84 3.133l2.985.747c.902.223 1.128.733 1.128 1.19 0 .764-.757 1.512-2.128 1.512-2.68 0-2.305-2.067-3.743-2.067-.644 0-1.113.447-1.113 1.08 0 1.242 1.5 2.894 4.856 2.894 3.19-.001 4.773-1.544 4.773-3.607 0-1.331-.613-2.748-3.031-3.289l-2.212-.493c-.84-.191-1.809-.446-1.809-1.24 0-.796.676-1.351 1.903-1.351 2.469 0 2.243 1.7 3.469 1.7.645 0 1.211-.38 1.211-1.034 0-1.528-2.434-2.67-4.5-2.67z"
            })))
        },
        Jt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M18.358 2.648c.04.04.08.082.147.16.09.102.215.253.364.45.297.397.688.985 1.078 1.765.78 1.561 1.553 3.887 1.553 6.973 0 3.087-.772 5.413-1.553 6.974-.39.78-.781 1.368-1.078 1.764a7.718 7.718 0 01-.364.451 3.658 3.658 0 01-.15.164.5.5 0 01-.71-.705l.002-5.801a9.62 9.62 0 01-.7 1.877 7.889 7.889 0 01-.76 1.234c-.171.228-.497.232-.7.03l-.045-.046a.47.47 0 01-.03-.617c.172-.228.406-.578.64-1.048.47-.94.948-2.363.948-4.277 0-1.913-.478-3.337-.947-4.276a6.887 6.887 0 00-.64-1.049c-.138-.182-.137-.435.02-.594l.043-.044a.498.498 0 01.736.038c.204.272.47.672.735 1.202C17.477 8.334 18 9.91 18 11.996c0 1.088-.142 2.036-.353 2.846v5.8l.003-.002.019-.02.084-.094c.074-.084.183-.215.316-.392.265-.354.624-.891.984-1.611.72-1.44 1.447-3.613 1.447-6.527 0-2.913-.728-5.087-1.447-6.526-.36-.72-.719-1.257-.984-1.611a6.764 6.764 0 00-.4-.485l-.02-.02-.003-.004-.058-.07a.5.5 0 01.058-.637.509.509 0 01.712.005zM9.793 4.704c.63-.63 1.707-.184 1.707.707v13.171c0 .891-1.077 1.337-1.707.707l-3-3a1 1 0 00-.707-.293H3.5a1 1 0 01-1-1v-6a1 1 0 011-1h2.586a1 1 0 00.707-.292l3-3zm4.06 3.939l.002.001c.073.075.139.156.201.24.11.146.251.36.391.639.28.56.553 1.387.553 2.473 0 1.087-.272 1.913-.553 2.474a4.19 4.19 0 01-.39.639 2.908 2.908 0 01-.203.24.5.5 0 01-.71-.704l.023-.025c.02-.022.05-.06.09-.111a3.2 3.2 0 00.296-.486c.22-.44.447-1.113.447-2.027 0-.913-.228-1.587-.447-2.026a3.197 3.197 0 00-.297-.486 1.916 1.916 0 00-.11-.134.506.506 0 010-.707.5.5 0 01.708 0z"
            })))
        },
        Kt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 17a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zm3.183-.487l2 3.464a.5.5 0 01-.866.5l-2-3.464a.5.5 0 01.866-.5zM9.5 16.33a.5.5 0 01.183.683l-2 3.464a.5.5 0 11-.866-.5l2-3.464a.5.5 0 01.683-.183zm7.513-2.013l3.464 2a.5.5 0 11-.5.866l-3.464-2a.5.5 0 01.5-.866zM7.67 14.5a.5.5 0 01-.183.683l-3.464 2a.5.5 0 01-.5-.866l3.464-2a.5.5 0 01.683.183zm13.83-3a.5.5 0 010 1h-4a.5.5 0 010-1h4zm-15 0a.5.5 0 010 1h-4a.5.5 0 010-1h4zM20.66 7a.5.5 0 01-.183.683l-3.464 2a.5.5 0 01-.5-.866l3.464-2A.5.5 0 0120.66 7zM4.023 6.817l3.464 2a.5.5 0 11-.5.866l-3.464-2a.5.5 0 11.5-.866zM17 3.34a.5.5 0 01.183.683l-2 3.464a.5.5 0 01-.866-.5l2-3.464A.5.5 0 0117 3.34zm-9.317.183l2 3.464a.5.5 0 11-.866.5l-2-3.464a.5.5 0 11.866-.5zM12 2a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 0112 2z"
            })))
        },
        Xt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.55 2 12 2zm4.602 14.45c-.2.3-.55.398-.852.199-2.351-1.45-5.3-1.75-8.8-.95-.353.102-.649-.148-.75-.449-.102-.352.147-.649.449-.75 3.8-.852 7.102-.5 9.7 1.101.351.149.402.547.253.848zM17.8 13.7c-.25.351-.7.5-1.051.25-2.7-1.649-6.8-2.15-9.95-1.149-.398.102-.85-.102-.949-.5-.101-.398.101-.852.5-.95 3.649-1.1 8.148-.55 11.25 1.353.297.148.45.648.2.996zm.098-2.801C14.699 9 9.349 8.797 6.297 9.75c-.5.149-1-.149-1.149-.602-.148-.5.148-1 .602-1.149 3.55-1.05 9.399-.851 13.101 1.352.45.25.602.851.352 1.3-.254.348-.852.497-1.304.247z"
            })))
        },
        Zt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 100 18 9 9 0 000-18z"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M9 8a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H9z",
                clipRule: "evenodd"
            })))
        },
        Qt = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M6.289 9.187C5.319 10.615 4.5 12.149 4.5 14c0 4.418 3.57 8 7.972 8 4.402 0 7.473-4 6.975-8-.334-2.684-2.268-4.395-3.792-5.744-.73-.646-1.366-1.209-1.688-1.756-.827-1.401-.792-2.564-.64-3.356l.032-.151a8.05 8.05 0 01.123-.48c.093-.332.144-.513-.014-.513-.107 0-.428.137-.845.402a6.823 6.823 0 00-.179.118C10.892 3.577 8.358 6.201 9.981 10c1.067 2.5.185 5 0 5-.499 0-1.383-.75-1.993-2.5-.363-1.04-.537-2.202-.656-3.064l-.024-.178-.02-.142c-.05-.361-.091-.646-.138-.811-.044-.155-.094-.205-.159-.114a51.958 51.958 0 00-.702.996z"
            })))
        },
        en = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M17.855 5.75a2 2 0 01-3.71 0H2.5a.5.5 0 010-1h11.515a2 2 0 013.97 0H21.5a.5.5 0 010 1h-3.645zM13 16a2 2 0 00-1.985 1.75H2.5a.5.5 0 000 1h8.645a2 2 0 003.71 0H21.5a.5.5 0 000-1h-6.515A2 2 0 0013 16zm8.5-3.75a.5.5 0 000-1H9.985a2 2 0 00-3.97 0H2.5a.5.5 0 000 1h3.645a2 2 0 003.71 0H21.5z"
            })))
        },
        tn = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M22 5.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0021.5 4.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288-.417.66-.584 1.32-.584 2.062 0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C6.667 17.608 4.917 18.268 3 18.268c-.333 0-.667 0-1-.082C3.833 19.34 6 20 8.25 20c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062z"
            })))
        },
        nn = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M16 6.5a1 1 0 011 1v2.395l3.445-2.23c.633-.41 1.47-.01 1.55.7l.005.108v7.054c0 .776-.89 1.239-1.555.808L17 14.104V16.5a1 1 0 01-.883.993L16 17.5H3a1 1 0 01-1-1v-9a1 1 0 011-1h13z"
            })))
        },
        rn = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M12 2l10 20H2L12 2zm0 16a.5.5 0 100 1 .5.5 0 000-1zm0-9a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6A.5.5 0 0012 9z"
            })))
        },
        an = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M22 11.743c0 5.38-4.396 9.742-9.818 9.742-1.722 0-3.34-.44-4.746-1.212L2 22l1.772-5.227a9.64 9.64 0 01-1.408-5.03C2.364 6.362 6.759 2 12.182 2 17.606 2 22 6.362 22 11.743zm-9.818-8.191c-4.553 0-8.255 3.674-8.255 8.19A8.1 8.1 0 005.5 16.545l-1.03 3.043 3.171-1.008a8.254 8.254 0 004.542 1.354c4.551 0 8.254-3.674 8.254-8.19s-3.703-8.191-8.254-8.191zm4.958 10.435c-.06-.1-.221-.16-.461-.28-.24-.118-1.425-.697-1.645-.776-.22-.08-.382-.12-.542.12-.16.238-.621.776-.762.936-.14.16-.28.179-.521.06-.241-.12-1.016-.373-1.936-1.185-.715-.633-1.198-1.415-1.34-1.654-.139-.239-.013-.368.107-.487.109-.108.241-.28.36-.418.122-.14.162-.239.241-.398.08-.16.04-.3-.02-.42-.06-.118-.542-1.294-.741-1.772-.2-.477-.402-.398-.542-.398s-.301-.02-.46-.02c-.161 0-.423.06-.643.299-.22.238-.842.817-.842 1.992s.861 2.31.983 2.47c.12.158 1.663 2.648 4.11 3.604s2.447.637 2.888.597c.441-.04 1.424-.578 1.626-1.135.2-.558.2-1.036.14-1.135z"
            })))
        },
        on = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M21.797 8.02S21.6 6.649 21 6.047c-.762-.793-1.613-.797-2.004-.844C16.2 5 12 5 12 5h-.008s-4.199 0-6.996.202c-.39.047-1.242.05-2.004.844C2.392 6.648 2.2 8.02 2.2 8.02S2 9.63 2 11.244v1.508c0 1.61.2 3.223.2 3.223s.195 1.372.792 1.975c.762.793 1.762.766 2.207.852C6.801 18.953 12 19 12 19s4.203-.008 7-.206c.39-.047 1.242-.05 2.004-.843.601-.603.797-1.975.797-1.975s.199-1.61.199-3.223v-1.509c-.004-1.61-.203-3.223-.203-3.223zM9.93 14.584V8.99l5.402 2.807-5.402 2.787z"
            })))
        },
        cn = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M15.657 4.343A8 8 0 114.343 15.657 8 8 0 0115.657 4.343zm-.707.707a7 7 0 10-9.9 9.9 7 7 0 009.9-9.9zm6.9 16.1a.491.491 0 010 .7.491.491 0 01-.7 0l-5.847-5.84.707-.707 5.84 5.847z"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M10 6.5a.5.5 0 01.5.5v2.5H13a.5.5 0 010 1h-2.5V13a.5.5 0 01-1 0v-2.5H7a.5.5 0 010-1h2.5V7a.5.5 0 01.5-.5z",
                clipRule: "evenodd"
            })))
        },
        ln = function(e) {
            var t = e.svgRef,
                n = i(e, ["svgRef"]);
            return (a.a.createElement("svg", o({
                viewBox: "0 0 24 24",
                ref: t
            }, n), a.a.createElement("path", {
                d: "M15.657 4.343A8 8 0 114.343 15.657 8 8 0 0115.657 4.343zm-.707.707a7 7 0 10-9.9 9.9 7 7 0 009.9-9.9zm6.9 16.1a.491.491 0 010 .7.491.491 0 01-.7 0l-5.847-5.84.707-.707 5.84 5.847z"
            }), a.a.createElement("path", {
                fillRule: "evenodd",
                d: "M6.5 10a.5.5 0 01.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5z",
                clipRule: "evenodd"
            })))
        }
}, function(e, t, n) {
    "use strict";
    var r = n(94),
        a = n(54);

    function o() {
        return (o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var i = function(e, t) {
        var n = Object(a.a)(t),
            i = Object(a.b)(e, n),
            c = Object(a.c)(e, n),
            l = c.className,
            u = c.style,
            s = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(c, ["className", "style"]),
            f = Object(r.a)(o({}, i, {
                className: l,
                style: u
            }));
        return [f[0], f[1], s]
    };
    t.a = i
}, function(e, t, n) {
    e.exports = n(168)()
}, function(e, t, n) {
    e.exports = {
        h0: "gva-8ae88418_h0",
        h1: "gva-8ae88418_h1",
        h2: "gva-8ae88418_h2",
        h3: "gva-8ae88418_h3",
        h4: "gva-8ae88418_h4",
        h5: "gva-8ae88418_h5",
        h6: "gva-8ae88418_h6",
        h7: "gva-8ae88418_h7",
        h8: "gva-8ae88418_h8",
        h9: "gva-8ae88418_h9",
        h10: "gva-8ae88418_h10",
        h11: "gva-8ae88418_h11",
        hFull: "gva-8ae88418_hfull",
        hAuto: "gva-8ae88418_hauto",
        mh0: "gva-8ae88418_mh0",
        mh1: "gva-8ae88418_mh1",
        mh2: "gva-8ae88418_mh2",
        mh3: "gva-8ae88418_mh3",
        mh4: "gva-8ae88418_mh4",
        mh5: "gva-8ae88418_mh5",
        mh6: "gva-8ae88418_mh6",
        mh7: "gva-8ae88418_mh7",
        mh8: "gva-8ae88418_mh8",
        mh9: "gva-8ae88418_mh9",
        mh10: "gva-8ae88418_mh10",
        mh11: "gva-8ae88418_mh11",
        mhFull: "gva-8ae88418_mhfull",
        mhAuto: "gva-8ae88418_mhauto"
    }
}, function(e, t, n) {
    e.exports = {
        w0: "gva-3d46ffe1_w0",
        w1: "gva-3d46ffe1_w1",
        w2: "gva-3d46ffe1_w2",
        w3: "gva-3d46ffe1_w3",
        w4: "gva-3d46ffe1_w4",
        w5: "gva-3d46ffe1_w5",
        w6: "gva-3d46ffe1_w6",
        w7: "gva-3d46ffe1_w7",
        w8: "gva-3d46ffe1_w8",
        w9: "gva-3d46ffe1_w9",
        w10: "gva-3d46ffe1_w10",
        w11: "gva-3d46ffe1_w11",
        wFull: "gva-3d46ffe1_wfull",
        wAuto: "gva-3d46ffe1_wauto",
        mw0: "gva-3d46ffe1_mw0",
        mw1: "gva-3d46ffe1_mw1",
        mw2: "gva-3d46ffe1_mw2",
        mw3: "gva-3d46ffe1_mw3",
        mw4: "gva-3d46ffe1_mw4",
        mw5: "gva-3d46ffe1_mw5",
        mw6: "gva-3d46ffe1_mw6",
        mw7: "gva-3d46ffe1_mw7",
        mw8: "gva-3d46ffe1_mw8",
        mw9: "gva-3d46ffe1_mw9",
        mw10: "gva-3d46ffe1_mw10",
        mw11: "gva-3d46ffe1_mw11",
        mwFull: "gva-3d46ffe1_mwfull",
        mwAuto: "gva-3d46ffe1_mwauto"
    }
}, function(e, t, n) {
    e.exports = {
        displayInline: "gva-ac23a49d_displayinline",
        displayBlock: "gva-ac23a49d_displayblock",
        displayFlex: "gva-ac23a49d_displayflex",
        displayGrid: "gva-ac23a49d_displaygrid",
        displayInlineBlock: "gva-ac23a49d_displayinlineblock",
        displayInlineFlex: "gva-ac23a49d_displayinlineflex",
        displayInlineGrid: "gva-ac23a49d_displayinlinegrid",
        displayInlineTable: "gva-ac23a49d_displayinlinetable",
        displayListItem: "gva-ac23a49d_displaylistitem",
        displayRunIn: "gva-ac23a49d_displayrunin",
        displayTable: "gva-ac23a49d_displaytable",
        displayTableCaption: "gva-ac23a49d_displaytablecaption",
        displayTableColumnGroup: "gva-ac23a49d_displaytablecolumngroup",
        displayTableHeaderGroup: "gva-ac23a49d_displaytableheadergroup",
        displayTableFooterGroup: "gva-ac23a49d_displaytablefootergroup",
        displayTableRowGroup: "gva-ac23a49d_displaytablerowgroup",
        displayTableCell: "gva-ac23a49d_displaytablecell",
        displayTableColumn: "gva-ac23a49d_displaytablecolumn",
        displayTableRow: "gva-ac23a49d_displaytablerow",
        displayNone: "gva-ac23a49d_displaynone",
        displayinitial: "gva-ac23a49d_displayinitial",
        displayinherit: "gva-ac23a49d_displayinherit"
    }
}, function(e, t, n) {
    e.exports = {
        scoreBoardWrapper: "gva-4372ef22_scoreboardwrapper",
        scoreBoardWrapperLiveFinished: "gva-4372ef22_scoreboardwrapperlivefinished",
        homeTeam: "gva-4372ef22_hometeam",
        score: "gva-4372ef22_score",
        awayTeam: "gva-4372ef22_awayteam",
        teamWrapper: "gva-4372ef22_teamwrapper",
        teamWrapperHome: "gva-4372ef22_teamwrapperhome",
        teamWrapperAway: "gva-4372ef22_teamwrapperaway",
        teamNameHome: "gva-4372ef22_teamnamehome",
        teamNameAway: "gva-4372ef22_teamnameaway",
        teamLogoHome: "gva-4372ef22_teamlogohome",
        teamLogoAway: "gva-4372ef22_teamlogoaway",
        goalMakers: "gva-4372ef22_goalmakers",
        goalMakersHome: "gva-4372ef22_goalmakershome",
        goalMakersAway: "gva-4372ef22_goalmakersaway",
        matchStatus: "gva-4372ef22_matchstatus",
        matchStatusIsLive: "gva-4372ef22_matchstatusislive",
        liveSpinner: "gva-4372ef22_livespinner",
        rotate: "gva-4372ef22_rotate"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(109),
        i = Object.prototype.hasOwnProperty;

    function c(e, t, n) {
        for (n of e.keys())
            if (l(n, t)) return n
    }

    function l(e, t) {
        var n, r, a;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
            if (n === Date) return e.getTime() === t.getTime();
            if (n === RegExp) return e.toString() === t.toString();
            if (n === Array) {
                if ((r = e.length) === t.length)
                    for (; r-- && l(e[r], t[r]););
                return -1 === r
            }
            if (n === Set) {
                if (e.size !== t.size) return !1;
                for (r of e) {
                    if ((a = r) && "object" == typeof a && !(a = c(t, a))) return !1;
                    if (!t.has(a)) return !1
                }
                return !0
            }
            if (n === Map) {
                if (e.size !== t.size) return !1;
                for (r of e) {
                    if ((a = r[0]) && "object" == typeof a && !(a = c(t, a))) return !1;
                    if (!l(r[1], t.get(a))) return !1
                }
                return !0
            }
            if (n === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
            else if (n === DataView) {
                if ((r = e.byteLength) === t.byteLength)
                    for (; r-- && e.getInt8(r) === t.getInt8(r););
                return -1 === r
            }
            if (ArrayBuffer.isView(e)) {
                if ((r = e.byteLength) === t.byteLength)
                    for (; r-- && e[r] === t[r];);
                return -1 === r
            }
            if (!n || "object" == typeof e) {
                for (n in r = 0, e) {
                    if (i.call(e, n) && ++r && !i.call(t, n)) return !1;
                    if (!(n in t && l(e[n], t[n]))) return !1
                }
                return Object.keys(t).length === r
            }
        }
        return e != e && t != t
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function(t) {
                u(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    n.d(t, "a", (function() {
        return d
    })), n.d(t, "b", (function() {
        return g
    })), n.d(t, "c", (function() {
        return _
    })), n.d(t, "d", (function() {
        return x
    }));
    var d = a.a.createContext();
    d.displayName = "ClientContext";
    var v = function(e) {
            return Object(o.isExtractableFile)(e) || null !== e && "object" == typeof e && "function" == typeof e.pipe
        },
        g = function() {
            function e(e) {
                if (void 0 === e && (e = {}), !e.url) throw new Error("GraphQLClient: config.url is required");
                if (e.fetch && "function" != typeof e.fetch) throw new Error("GraphQLClient: config.fetch must be a function");
                if (!e.fetch && !fetch) throw new Error("GraphQLClient: fetch must be polyfilled or passed in new GraphQLClient({ fetch })");
                if (e.ssrMode && !e.cache) throw new Error("GraphQLClient: config.cache is required when in ssrMode");
                this.cache = e.cache, this.headers = e.headers || {}, this.ssrMode = e.ssrMode, this.ssrPromises = [], this.url = e.url, this.fetch = e.fetch || fetch.bind(), this.fetchOptions = e.fetchOptions || {}, this.FormData = e.FormData || ("undefined" != typeof FormData ? FormData : void 0), this.logErrors = void 0 === e.logErrors || e.logErrors, this.onError = e.onError, this.useGETForQueries = !0 === e.useGETForQueries, this.subscriptionClient = e.subscriptionClient
            }
            var t = e.prototype;
            return t.setHeader = function(e, t) {
                return this.headers[e] = t, this
            }, t.setHeaders = function(e) {
                return this.headers = e, this
            }, t.removeHeader = function(e) {
                return delete this.headers[e], this
            }, t.logErrorResult = function(e) {
                var t = e.result,
                    n = e.operation;
                console.error("GraphQL Hooks Error"), console.groupCollapsed("---\x3e Full Error Details"), console.groupCollapsed("Operation:"), console.log(n), console.groupEnd();
                var r = t.error;
                r && (r.fetchError && (console.groupCollapsed("FETCH ERROR:"), console.log(r.fetchError), console.groupEnd()), r.httpError && (console.groupCollapsed("HTTP ERROR:"), console.log(r.httpError), console.groupEnd()), r.graphQLErrors && r.graphQLErrors.length > 0 && (console.groupCollapsed("GRAPHQL ERROR:"), r.graphQLErrors.forEach((function(e) {
                    return console.log(e)
                })), console.groupEnd())), console.groupEnd()
            }, t.generateResult = function(e) {
                var t = e.fetchError,
                    n = e.httpError,
                    r = e.graphQLErrors,
                    a = e.data;
                return !!(r && r.length > 0 || t || n) ? {
                    data: a,
                    error: {
                        fetchError: t,
                        httpError: n,
                        graphQLErrors: r
                    }
                } : {
                    data: a
                }
            }, t.getCacheKey = function(e, t) {
                return void 0 === t && (t = {}), {
                    operation: e,
                    fetchOptions: f(f({}, this.fetchOptions), t.fetchOptionsOverrides)
                }
            }, t.getCache = function(e) {
                var t = this.cache ? this.cache.get(e) : null;
                if (t) return t
            }, t.saveCache = function(e, t) {
                this.cache && this.cache.set(e, t)
            }, t.getFetchOptions = function(e, t) {
                void 0 === t && (t = {});
                var n = f(f({
                    method: "POST",
                    headers: f({}, this.headers)
                }, this.fetchOptions), t);
                if ("GET" === n.method) return n;
                var r = Object(o.extractFiles)(e, "", v),
                    a = r.clone,
                    i = r.files,
                    c = JSON.stringify(a);
                if (i.size) {
                    if (!this.FormData) throw new Error("GraphQLClient: FormData must be polyfilled or passed in new GraphQLClient({ FormData })");
                    var l = new this.FormData;
                    l.append("operations", c);
                    var u = {},
                        s = 0;
                    i.forEach((function(e) {
                        u[++s] = e
                    })), l.append("map", JSON.stringify(u)), s = 0, i.forEach((function(e, t) {
                        l.append("" + ++s, t, t.name)
                    })), n.body = l
                } else n.headers["Content-Type"] = "application/json", n.body = c;
                return n
            }, t.request = function(e, t) {
                var n = this;
                void 0 === t && (t = {});
                var r = this.url;
                "GET" === this.getFetchOptions(e, t.fetchOptionsOverrides).method && (r = r + "?" + Object.entries(e).filter((function(e) {
                    return !!e[1]
                })).map((function(e) {
                    var t = e[0],
                        n = e[1];
                    return "variables" === t && (n = JSON.stringify(n)), t + "=" + encodeURIComponent(n)
                })).join("&"));
                return this.fetch(r, this.getFetchOptions(e, t.fetchOptionsOverrides)).then((function(e) {
                    return e.ok ? e.json().then((function(e) {
                        var t = e.errors,
                            r = e.data;
                        return n.generateResult({
                            graphQLErrors: t,
                            data: r
                        })
                    })) : e.text().then((function(t) {
                        var r = e.status,
                            a = e.statusText;
                        return n.generateResult({
                            httpError: {
                                status: r,
                                statusText: a,
                                body: t
                            }
                        })
                    }))
                })).catch((function(e) {
                    return n.generateResult({
                        fetchError: e
                    })
                })).then((function(t) {
                    return t.error && (n.logErrors && n.logErrorResult({
                        result: t,
                        operation: e
                    }), n.onError && n.onError({
                        result: t,
                        operation: e
                    })), t
                }))
            }, t.createSubscription = function(e) {
                if (!this.subscriptionClient) throw new Error("No SubscriptionClient! Please set in the constructor.");
                return this.subscriptionClient.request(e)
            }, e
        }(),
        h = "RESET_STATE",
        p = "LOADING",
        m = "CACHE_HIT",
        b = "REQUEST_RESULT";

    function y(e, t) {
        switch (t.type) {
            case h:
                return t.initialState;
            case p:
                return e.error ? f(f({}, t.initialState), {}, {
                    data: e.data,
                    loading: !0
                }) : e.loading ? e : f(f({}, e), {}, {
                    loading: !0
                });
            case m:
                return e.cacheHit && !t.resetState ? e : f(f({}, t.result), {}, {
                    cacheHit: !0,
                    loading: !1
                });
            case b:
                return f(f({}, t.result), {}, {
                    data: e.data && t.result.data && t.updateData ? t.updateData(e.data, t.result.data) : t.result.data,
                    cacheHit: !1,
                    loading: !1
                });
            default:
                return e
        }
    }

    function w(e, t) {
        if (void 0 === t && (t = {}), "string" != typeof e) throw new Error("Your query must be a string. If you are using the `gql` template literal from graphql-tag, remove it from your query.");
        var n = a.a.useContext(d),
            r = t.client || n,
            o = a.a.useRef(!0),
            i = a.a.useRef(null),
            c = {
                query: e,
                variables: t.variables,
                operationName: t.operationName,
                persisted: t.persisted
            };
        (t.persisted || r.useGETForQueries && !t.isMutation) && (t.fetchOptionsOverrides = f(f({}, t.fetchOptionsOverrides), {}, {
            method: "GET"
        }));
        var u = r.getCacheKey(c, t),
            s = t.isMutation || t.isManual,
            v = t.skipCache || !r.cache ? null : r.cache.get(u),
            g = f(f({}, v), {}, {
                cacheHit: !!v,
                loading: !s && !v
            }),
            w = a.a.useReducer(y, g),
            E = w[0],
            x = w[1],
            _ = JSON.stringify(u);
        a.a.useEffect((function() {
            t.updateData || x({
                type: h,
                initialState: g
            })
        }), [_]), a.a.useEffect((function() {
            return o.current = !0,
                function() {
                    o.current = !1
                }
        }), []);
        var O, R, z, C = (O = function(e) {
            if (!o.current) return Promise.resolve();
            var n = f(f({}, t), e),
                a = f(f({}, c), {}, {
                    variables: n.variables,
                    operationName: n.operationName
                }),
                l = r.getCacheKey(a, n);
            i.current = l;
            var u = n.skipCache ? null : r.getCache(l);
            return u ? (x({
                type: m,
                result: u,
                resetState: _ !== JSON.stringify(E.cacheKey)
            }), Promise.resolve(u)) : (x({
                type: p,
                initialState: g
            }), r.request(a, n).then((function(e) {
                if (n.updateData && "function" != typeof n.updateData) throw new Error("options.updateData must be a function");
                var t = f({}, e);
                if (n.useCache && (t.useCache = !0, t.cacheKey = l, r.ssrMode)) {
                    var a = {
                        error: t.error,
                        data: n.updateData ? n.updateData(E.data, t.data) : t.data
                    };
                    r.saveCache(l, a)
                }
                return o.current && l === i.current && x({
                    type: b,
                    updateData: n.updateData,
                    result: t
                }), e
            })))
        }, R = [r, t, c], z = a.a.useRef(), l(R, z.current) || (z.current = R), a.a.useCallback(O, z.current));
        a.a.useEffect((function() {
            E.useCache && r.saveCache(E.cacheKey, E)
        }), [r, E]);
        return [C, E, function(e) {
            return void 0 === e && (e = {}), x({
                type: h,
                initialState: f(f({}, g), e)
            })
        }]
    }
    var E = {
        useCache: !0
    };

    function x(e, t) {
        void 0 === t && (t = {});
        var n = f(f({}, E), t),
            r = a.a.useContext(d),
            o = t.client || r,
            i = a.a.useState(!1),
            c = i[0],
            l = i[1],
            u = w(e, n),
            s = u[0],
            v = u[1];
        if (o.ssrMode && !1 !== t.ssr && !c && !t.skipCache) {
            if (!v.data && !v.error) {
                var g = s();
                o.ssrPromises.push(g)
            }
            l(!0)
        }
        var h = JSON.stringify(n);
        return a.a.useEffect((function() {
            s()
        }), [e, h]), f(f({}, v), {}, {
            refetch: a.a.useCallback((function(e) {
                return void 0 === e && (e = {}), s(f({
                    skipCache: !0,
                    updateData: function(e, t) {
                        return t
                    }
                }, e))
            }), [s])
        })
    }
    var _ = function(e, t) {
        return w(e, f({
            isMutation: !0
        }, t))
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-3424fc43_root",
        content: "gva-3424fc43_content",
        center: "gva-3424fc43_center",
        header: "gva-3424fc43_header",
        input: "gva-3424fc43_input",
        body: "gva-3424fc43_body",
        icon: "gva-3424fc43_icon",
        iconContainer: "gva-3424fc43_iconcontainer",
        info: "gva-3424fc43_info",
        title: "gva-3424fc43_title",
        caption: "gva-3424fc43_caption",
        radioContainer: "gva-3424fc43_radiocontainer",
        checkboxContainer: "gva-3424fc43_checkboxcontainer",
        image: "gva-3424fc43_image"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(11),
        i = n.n(o);

    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var l = a.a.forwardRef((function(e, t) {
        var n = e.as,
            r = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, ["as"]);
        return a.a.createElement(n, c({}, r, {
            ref: t
        }))
    }));
    l.displayName = "Base", l.identifier = l.displayName, l.propTypes = {
        as: i.a.oneOfType([i.a.func, i.a.string, i.a.node, i.a.object])
    }, l.defaultProps = {
        as: "div"
    }, t.a = l
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "aliasBackdropColorBase", (function() {
        return r
    })), n.d(t, "aliasBackdropOpacityBase", (function() {
        return a
    })), n.d(t, "aliasFocusColor", (function() {
        return o
    })), n.d(t, "aliasFocusColorError", (function() {
        return i
    })), n.d(t, "aliasFocusWidth", (function() {
        return c
    })), n.d(t, "aliasFocusBoxShadow", (function() {
        return l
    })), n.d(t, "aliasFocusBoxShadowError", (function() {
        return u
    })), n.d(t, "aliasFocusRingColorBase", (function() {
        return s
    })), n.d(t, "aliasFocusRingColorError", (function() {
        return f
    })), n.d(t, "aliasFocusRingSizeBase", (function() {
        return d
    })), n.d(t, "aliasInputBorderWidth", (function() {
        return v
    })), n.d(t, "aliasInputBorderColor", (function() {
        return g
    })), n.d(t, "aliasInputBorderColorHover", (function() {
        return h
    })), n.d(t, "aliasInputBorderColorError", (function() {
        return p
    })), n.d(t, "aliasInputBorderColorActive", (function() {
        return m
    })), n.d(t, "aliasInputBorderColorFocus", (function() {
        return b
    })), n.d(t, "aliasInputBorderColorDisabled", (function() {
        return y
    })), n.d(t, "aliasInputBorderColorChecked", (function() {
        return w
    })), n.d(t, "aliasInputBackgroundColor", (function() {
        return E
    })), n.d(t, "aliasInputBackgroundColorError", (function() {
        return x
    })), n.d(t, "aliasInputBackgroundColorActive", (function() {
        return _
    })), n.d(t, "aliasInputBackgroundColorFocus", (function() {
        return O
    })), n.d(t, "aliasInputBackgroundColorDisabled", (function() {
        return R
    })), n.d(t, "aliasInputBackgroundColorChecked", (function() {
        return z
    })), n.d(t, "aliasInputTextColorChecked", (function() {
        return C
    })), n.d(t, "aliasInputBoxShadow", (function() {
        return M
    })), n.d(t, "aliasInputBoxShadowActive", (function() {
        return A
    })), n.d(t, "aliasInputBoxShadowFocus", (function() {
        return j
    })), n.d(t, "aliasInputBoxShadowError", (function() {
        return S
    })), n.d(t, "aliasFieldBorderWidthBase", (function() {
        return L
    })), n.d(t, "aliasFieldBorderColorBase", (function() {
        return B
    })), n.d(t, "aliasFieldBorderColorHover", (function() {
        return P
    })), n.d(t, "aliasFieldBorderColorError", (function() {
        return T
    })), n.d(t, "aliasFieldBorderColorActive", (function() {
        return k
    })), n.d(t, "aliasFieldBorderColorFocus", (function() {
        return H
    })), n.d(t, "aliasFieldBorderColorDisabled", (function() {
        return I
    })), n.d(t, "aliasFieldBorderColorChecked", (function() {
        return F
    })), n.d(t, "aliasFieldBackgroundColorBase", (function() {
        return D
    })), n.d(t, "aliasFieldBackgroundColorError", (function() {
        return N
    })), n.d(t, "aliasFieldBackgroundColorActive", (function() {
        return V
    })), n.d(t, "aliasFieldBackgroundColorFocus", (function() {
        return W
    })), n.d(t, "aliasFieldBackgroundColorDisabled", (function() {
        return U
    })), n.d(t, "aliasFieldBackgroundColorChecked", (function() {
        return $
    })), n.d(t, "aliasFieldTextChecked", (function() {
        return G
    })), n.d(t, "aliasFieldShadowBase", (function() {
        return Y
    })), n.d(t, "aliasFieldShadowActive", (function() {
        return q
    })), n.d(t, "aliasFieldShadowFocus", (function() {
        return J
    })), n.d(t, "aliasFieldShadowError", (function() {
        return K
    })), n.d(t, "colorBlackBase", (function() {
        return X
    })), n.d(t, "colorBlue10", (function() {
        return Z
    })), n.d(t, "colorBlue20", (function() {
        return Q
    })), n.d(t, "colorBlue30", (function() {
        return ee
    })), n.d(t, "colorBlue40", (function() {
        return te
    })), n.d(t, "colorBlue50", (function() {
        return ne
    })), n.d(t, "colorBlue60", (function() {
        return re
    })), n.d(t, "colorBlue70", (function() {
        return ae
    })), n.d(t, "colorBlue80", (function() {
        return oe
    })), n.d(t, "colorBlue90", (function() {
        return ie
    })), n.d(t, "colorBlue100", (function() {
        return ce
    })), n.d(t, "colorBlueLight", (function() {
        return le
    })), n.d(t, "colorBlueBase", (function() {
        return ue
    })), n.d(t, "colorBlueDark", (function() {
        return se
    })), n.d(t, "colorText10", (function() {
        return fe
    })), n.d(t, "colorText20", (function() {
        return de
    })), n.d(t, "colorText30", (function() {
        return ve
    })), n.d(t, "colorText40", (function() {
        return ge
    })), n.d(t, "colorText50", (function() {
        return he
    })), n.d(t, "colorText60", (function() {
        return pe
    })), n.d(t, "colorText70", (function() {
        return me
    })), n.d(t, "colorText80", (function() {
        return be
    })), n.d(t, "colorText90", (function() {
        return ye
    })), n.d(t, "colorText100", (function() {
        return we
    })), n.d(t, "colorTextBlueLight", (function() {
        return Ee
    })), n.d(t, "colorTextBlueBase", (function() {
        return xe
    })), n.d(t, "colorTextBlueDark", (function() {
        return _e
    })), n.d(t, "colorTextGreenLight", (function() {
        return Oe
    })), n.d(t, "colorTextGreenBase", (function() {
        return Re
    })), n.d(t, "colorTextGreenDark", (function() {
        return ze
    })), n.d(t, "colorTextGreyLight", (function() {
        return Ce
    })), n.d(t, "colorTextGreyBase", (function() {
        return Me
    })), n.d(t, "colorTextGreyDark", (function() {
        return Ae
    })), n.d(t, "colorTextMarketingLight", (function() {
        return je
    })), n.d(t, "colorTextMarketingBase", (function() {
        return Se
    })), n.d(t, "colorTextMarketingDark", (function() {
        return Le
    })), n.d(t, "colorTextPrimaryLight", (function() {
        return Be
    })), n.d(t, "colorTextPrimaryBase", (function() {
        return Pe
    })), n.d(t, "colorTextPrimaryDark", (function() {
        return Te
    })), n.d(t, "colorTextRedLight", (function() {
        return ke
    })), n.d(t, "colorTextRedBase", (function() {
        return He
    })), n.d(t, "colorTextRedDark", (function() {
        return Ie
    })), n.d(t, "colorTextSecondaryLight", (function() {
        return Fe
    })), n.d(t, "colorTextSecondaryBase", (function() {
        return De
    })), n.d(t, "colorTextSecondaryDark", (function() {
        return Ne
    })), n.d(t, "colorTextTertiaryLight", (function() {
        return Ve
    })), n.d(t, "colorTextTertiaryBase", (function() {
        return We
    })), n.d(t, "colorTextTertiaryDark", (function() {
        return Ue
    })), n.d(t, "colorGreen10", (function() {
        return $e
    })), n.d(t, "colorGreen20", (function() {
        return Ge
    })), n.d(t, "colorGreen30", (function() {
        return Ye
    })), n.d(t, "colorGreen40", (function() {
        return qe
    })), n.d(t, "colorGreen50", (function() {
        return Je
    })), n.d(t, "colorGreen60", (function() {
        return Ke
    })), n.d(t, "colorGreen70", (function() {
        return Xe
    })), n.d(t, "colorGreen80", (function() {
        return Ze
    })), n.d(t, "colorGreen90", (function() {
        return Qe
    })), n.d(t, "colorGreen100", (function() {
        return et
    })), n.d(t, "colorGreenLight", (function() {
        return tt
    })), n.d(t, "colorGreenBase", (function() {
        return nt
    })), n.d(t, "colorGreenDark", (function() {
        return rt
    })), n.d(t, "colorGrey10", (function() {
        return at
    })), n.d(t, "colorGrey20", (function() {
        return ot
    })), n.d(t, "colorGrey30", (function() {
        return it
    })), n.d(t, "colorGrey40", (function() {
        return ct
    })), n.d(t, "colorGrey50", (function() {
        return lt
    })), n.d(t, "colorGrey60", (function() {
        return ut
    })), n.d(t, "colorGrey70", (function() {
        return st
    })), n.d(t, "colorGrey80", (function() {
        return ft
    })), n.d(t, "colorGrey90", (function() {
        return dt
    })), n.d(t, "colorGrey100", (function() {
        return vt
    })), n.d(t, "colorGreyLight", (function() {
        return gt
    })), n.d(t, "colorGreyBase", (function() {
        return ht
    })), n.d(t, "colorGreyDark", (function() {
        return pt
    })), n.d(t, "colorMarketing10", (function() {
        return mt
    })), n.d(t, "colorMarketing20", (function() {
        return bt
    })), n.d(t, "colorMarketing30", (function() {
        return yt
    })), n.d(t, "colorMarketing40", (function() {
        return wt
    })), n.d(t, "colorMarketing50", (function() {
        return Et
    })), n.d(t, "colorMarketing60", (function() {
        return xt
    })), n.d(t, "colorMarketing70", (function() {
        return _t
    })), n.d(t, "colorMarketing80", (function() {
        return Ot
    })), n.d(t, "colorMarketing90", (function() {
        return Rt
    })), n.d(t, "colorMarketing100", (function() {
        return zt
    })), n.d(t, "colorMarketingLight", (function() {
        return Ct
    })), n.d(t, "colorMarketingBase", (function() {
        return Mt
    })), n.d(t, "colorMarketingDark", (function() {
        return At
    })), n.d(t, "colorPrimary10", (function() {
        return jt
    })), n.d(t, "colorPrimary20", (function() {
        return St
    })), n.d(t, "colorPrimary30", (function() {
        return Lt
    })), n.d(t, "colorPrimary40", (function() {
        return Bt
    })), n.d(t, "colorPrimary50", (function() {
        return Pt
    })), n.d(t, "colorPrimary60", (function() {
        return Tt
    })), n.d(t, "colorPrimary70", (function() {
        return kt
    })), n.d(t, "colorPrimary80", (function() {
        return Ht
    })), n.d(t, "colorPrimary90", (function() {
        return It
    })), n.d(t, "colorPrimary100", (function() {
        return Ft
    })), n.d(t, "colorPrimaryLight", (function() {
        return Dt
    })), n.d(t, "colorPrimaryBase", (function() {
        return Nt
    })), n.d(t, "colorPrimaryDark", (function() {
        return Vt
    })), n.d(t, "colorRed10", (function() {
        return Wt
    })), n.d(t, "colorRed20", (function() {
        return Ut
    })), n.d(t, "colorRed30", (function() {
        return $t
    })), n.d(t, "colorRed40", (function() {
        return Gt
    })), n.d(t, "colorRed50", (function() {
        return Yt
    })), n.d(t, "colorRed60", (function() {
        return qt
    })), n.d(t, "colorRed70", (function() {
        return Jt
    })), n.d(t, "colorRed80", (function() {
        return Kt
    })), n.d(t, "colorRed90", (function() {
        return Xt
    })), n.d(t, "colorRed100", (function() {
        return Zt
    })), n.d(t, "colorRedLight", (function() {
        return Qt
    })), n.d(t, "colorRedBase", (function() {
        return en
    })), n.d(t, "colorRedDark", (function() {
        return tn
    })), n.d(t, "colorSecondary10", (function() {
        return nn
    })), n.d(t, "colorSecondary20", (function() {
        return rn
    })), n.d(t, "colorSecondary30", (function() {
        return an
    })), n.d(t, "colorSecondary40", (function() {
        return on
    })), n.d(t, "colorSecondary50", (function() {
        return cn
    })), n.d(t, "colorSecondary60", (function() {
        return ln
    })), n.d(t, "colorSecondary70", (function() {
        return un
    })), n.d(t, "colorSecondary80", (function() {
        return sn
    })), n.d(t, "colorSecondary90", (function() {
        return fn
    })), n.d(t, "colorSecondary100", (function() {
        return dn
    })), n.d(t, "colorSecondaryLight", (function() {
        return vn
    })), n.d(t, "colorSecondaryBase", (function() {
        return gn
    })), n.d(t, "colorSecondaryDark", (function() {
        return hn
    })), n.d(t, "colorTertiary10", (function() {
        return pn
    })), n.d(t, "colorTertiary20", (function() {
        return mn
    })), n.d(t, "colorTertiary30", (function() {
        return bn
    })), n.d(t, "colorTertiary40", (function() {
        return yn
    })), n.d(t, "colorTertiary50", (function() {
        return wn
    })), n.d(t, "colorTertiary60", (function() {
        return En
    })), n.d(t, "colorTertiary70", (function() {
        return xn
    })), n.d(t, "colorTertiary80", (function() {
        return _n
    })), n.d(t, "colorTertiary90", (function() {
        return On
    })), n.d(t, "colorTertiary100", (function() {
        return Rn
    })), n.d(t, "colorTertiaryLight", (function() {
        return zn
    })), n.d(t, "colorTertiaryBase", (function() {
        return Cn
    })), n.d(t, "colorTertiaryDark", (function() {
        return Mn
    })), n.d(t, "colorWhiteBase", (function() {
        return An
    })), n.d(t, "accordionItemTitleColor", (function() {
        return jn
    })), n.d(t, "brandedHeadingRootColor", (function() {
        return Sn
    })), n.d(t, "brandedHeadingRootBorderColor", (function() {
        return Ln
    })), n.d(t, "brandedHeadingRootSpacingTop", (function() {
        return Bn
    })), n.d(t, "brandedHeadingRootSpacingBottom", (function() {
        return Pn
    })), n.d(t, "brandedHeadingRootFontFamily", (function() {
        return Tn
    })), n.d(t, "brandedHeadingRootFontWeight", (function() {
        return kn
    })), n.d(t, "brandedHeadingRootBorderTop", (function() {
        return Hn
    })), n.d(t, "brandedHeadingRootPaddingLeft", (function() {
        return In
    })), n.d(t, "brandedHeadingRootPaddingRight", (function() {
        return Fn
    })), n.d(t, "brandedHeadingLargeTextAlign", (function() {
        return Dn
    })), n.d(t, "brandedHeadingLargePaddingTop", (function() {
        return Nn
    })), n.d(t, "brandedHeadingLargePaddingBottom", (function() {
        return Vn
    })), n.d(t, "brandedHeadingLargeFontSize", (function() {
        return Wn
    })), n.d(t, "brandedHeadingLargeLineHeight", (function() {
        return Un
    })), n.d(t, "brandedHeadingLargeInnerBorderTopWidth", (function() {
        return $n
    })), n.d(t, "brandedHeadingLargeInnerBorderTopStyle", (function() {
        return Gn
    })), n.d(t, "brandedHeadingLargeInnerBorderTopColor", (function() {
        return Yn
    })), n.d(t, "brandedHeadingLargeInnerPaddingTop", (function() {
        return qn
    })), n.d(t, "brandedHeadingLargeInnerDisplay", (function() {
        return Jn
    })), n.d(t, "brandedHeadingLargeBreakpointMediumPaddingTop", (function() {
        return Kn
    })), n.d(t, "brandedHeadingLargeBreakpointMediumPaddingBottom", (function() {
        return Xn
    })), n.d(t, "brandedHeadingLargeBreakpointMediumTextAlign", (function() {
        return Zn
    })), n.d(t, "brandedHeadingLargeBreakpointMediumInnerBorderTop", (function() {
        return Qn
    })), n.d(t, "brandedHeadingLargeBreakpointMediumInnerPaddingTop", (function() {
        return er
    })), n.d(t, "brandedHeadingLargeBreakpointMediumInnerPaddingLeft", (function() {
        return tr
    })), n.d(t, "brandedHeadingLargeBreakpointMediumInnerBorderLeftWidth", (function() {
        return nr
    })), n.d(t, "brandedHeadingLargeBreakpointMediumInnerBorderLeftStyle", (function() {
        return rr
    })), n.d(t, "brandedHeadingLargeBreakpointMediumInnerBorderLeftColor", (function() {
        return ar
    })), n.d(t, "brandedHeadingSmallPaddingTop", (function() {
        return or
    })), n.d(t, "brandedHeadingSmallPaddingBottom", (function() {
        return ir
    })), n.d(t, "brandedHeadingSmallInnerBorderLeftWidth", (function() {
        return cr
    })), n.d(t, "brandedHeadingSmallInnerBorderLeftStyle", (function() {
        return lr
    })), n.d(t, "brandedHeadingSmallInnerBorderLeftColor", (function() {
        return ur
    })), n.d(t, "brandedHeadingSmallInnerPaddingLeft", (function() {
        return sr
    })), n.d(t, "brandedHeadingSmallBreakpointMediumInnerFontSize", (function() {
        return fr
    })), n.d(t, "brandedHeadingSmallBreakpointMediumInnerBorderLeftWidth", (function() {
        return dr
    })), n.d(t, "brandedHeadingPrimaryColor", (function() {
        return vr
    })), n.d(t, "checkboxCheckedColor", (function() {
        return gr
    })), n.d(t, "checkboxCheckedBackground", (function() {
        return hr
    })), n.d(t, "choiceInfoColor", (function() {
        return pr
    })), n.d(t, "choiceTitleColor", (function() {
        return mr
    })), n.d(t, "choiceCaptionColor", (function() {
        return br
    })), n.d(t, "choiceCheckedInfoColor", (function() {
        return yr
    })), n.d(t, "choiceCheckedTitleColor", (function() {
        return wr
    })), n.d(t, "choiceCheckedBackground", (function() {
        return Er
    })), n.d(t, "choiceCheckedBorderColor", (function() {
        return xr
    })), n.d(t, "choiceCheckedIconColor", (function() {
        return _r
    })), n.d(t, "choiceCheckedIconBackground", (function() {
        return Or
    })), n.d(t, "choiceInputCheckedContentBackgroundColor", (function() {
        return Rr
    })), n.d(t, "choiceInputCheckedContentTitleColor", (function() {
        return zr
    })), n.d(t, "choiceInputCheckedContentInfoColor", (function() {
        return Cr
    })), n.d(t, "choiceInputCheckedContentIconContainerBackgroundColor", (function() {
        return Mr
    })), n.d(t, "choiceInputCheckedContentIconContainerBorderColor", (function() {
        return Ar
    })), n.d(t, "choiceInputCheckedContentIconContainerColor", (function() {
        return jr
    })), n.d(t, "linkTextBrandedColor", (function() {
        return Sr
    })), n.d(t, "linkTextBrandedHoverColor", (function() {
        return Lr
    })), n.d(t, "linkTextBrandedVisitedColor", (function() {
        return Br
    })), n.d(t, "linkTextBrandedActiveColor", (function() {
        return Pr
    })), n.d(t, "loaderColorBase", (function() {
        return Tr
    })), n.d(t, "loaderColorLight", (function() {
        return kr
    })), n.d(t, "loaderXxLarge", (function() {
        return Hr
    })), n.d(t, "loaderXLarge", (function() {
        return Ir
    })), n.d(t, "loaderLarge", (function() {
        return Fr
    })), n.d(t, "loaderMedium", (function() {
        return Dr
    })), n.d(t, "loaderSmall", (function() {
        return Nr
    })), n.d(t, "radioCheckedColor", (function() {
        return Vr
    })), n.d(t, "stepCompletedNumberColor", (function() {
        return Wr
    })), n.d(t, "stepCompletedNumberBackground", (function() {
        return Ur
    })), n.d(t, "stepCompletedLineColor", (function() {
        return $r
    })), n.d(t, "stepCompletedLabelColor", (function() {
        return Gr
    })), n.d(t, "switchCheckedColor", (function() {
        return Yr
    })), n.d(t, "switchCheckedBackground", (function() {
        return qr
    })), n.d(t, "switchActiveBackground", (function() {
        return Jr
    })), n.d(t, "shadow0", (function() {
        return Kr
    })), n.d(t, "shadow1", (function() {
        return Xr
    })), n.d(t, "shadow2", (function() {
        return Zr
    })), n.d(t, "shadow3", (function() {
        return Qr
    })), n.d(t, "shadow4", (function() {
        return ea
    })), n.d(t, "shadowInset1", (function() {
        return ta
    })), n.d(t, "shadowInset2", (function() {
        return na
    })), n.d(t, "zIndex100", (function() {
        return ra
    })), n.d(t, "zIndex200", (function() {
        return aa
    })), n.d(t, "zIndex300", (function() {
        return oa
    })), n.d(t, "zIndex400", (function() {
        return ia
    })), n.d(t, "zIndex500", (function() {
        return ca
    })), n.d(t, "zIndex600", (function() {
        return la
    })), n.d(t, "zIndex700", (function() {
        return ua
    })), n.d(t, "zIndex800", (function() {
        return sa
    })), n.d(t, "zIndex900", (function() {
        return fa
    })), n.d(t, "gridBreakpointXSmall", (function() {
        return da
    })), n.d(t, "gridBreakpointSmall", (function() {
        return va
    })), n.d(t, "gridBreakpointMedium", (function() {
        return ga
    })), n.d(t, "gridBreakpointLarge", (function() {
        return ha
    })), n.d(t, "gridBreakpointXLarge", (function() {
        return pa
    })), n.d(t, "gridGutter", (function() {
        return ma
    })), n.d(t, "gridWrapFluid", (function() {
        return ba
    })), n.d(t, "gridWrapStatic", (function() {
        return ya
    })), n.d(t, "space1", (function() {
        return wa
    })), n.d(t, "space2", (function() {
        return Ea
    })), n.d(t, "space3", (function() {
        return xa
    })), n.d(t, "space4", (function() {
        return _a
    })), n.d(t, "space5", (function() {
        return Oa
    })), n.d(t, "space6", (function() {
        return Ra
    })), n.d(t, "space7", (function() {
        return za
    })), n.d(t, "space8", (function() {
        return Ca
    })), n.d(t, "space9", (function() {
        return Ma
    })), n.d(t, "space10", (function() {
        return Aa
    })), n.d(t, "space11", (function() {
        return ja
    })), n.d(t, "motionDurationFast", (function() {
        return Sa
    })), n.d(t, "motionDurationMedium", (function() {
        return La
    })), n.d(t, "motionDurationSlow", (function() {
        return Ba
    })), n.d(t, "overlayFill", (function() {
        return Pa
    })), n.d(t, "overlayGradientLinearFadeToTop", (function() {
        return Ta
    })), n.d(t, "overlayGradientLinearFadeToBottom", (function() {
        return ka
    })), n.d(t, "borderRadius0", (function() {
        return Ha
    })), n.d(t, "borderRadius1", (function() {
        return Ia
    })), n.d(t, "borderRadius2", (function() {
        return Fa
    })), n.d(t, "borderRadius3", (function() {
        return Da
    })), n.d(t, "borderRadius4", (function() {
        return Na
    })), n.d(t, "borderRadius5", (function() {
        return Va
    })), n.d(t, "borderRadius6", (function() {
        return Wa
    })), n.d(t, "borderRadius7", (function() {
        return Ua
    })), n.d(t, "borderRadius8", (function() {
        return $a
    })), n.d(t, "borderRadius9", (function() {
        return Ga
    })), n.d(t, "borderRadius10", (function() {
        return Ya
    })), n.d(t, "borderRadius11", (function() {
        return qa
    })), n.d(t, "borderRadiusSides", (function() {
        return Ja
    })), n.d(t, "borderRadiusFill", (function() {
        return Ka
    })), n.d(t, "fontCaption1Size", (function() {
        return Xa
    })), n.d(t, "fontCaption1LineHeight", (function() {
        return Za
    })), n.d(t, "fontCaption2Size", (function() {
        return Qa
    })), n.d(t, "fontCaption2LineHeight", (function() {
        return eo
    })), n.d(t, "fontHeading1Size", (function() {
        return to
    })), n.d(t, "fontHeading1LineHeight", (function() {
        return no
    })), n.d(t, "fontHeading1Weight", (function() {
        return ro
    })), n.d(t, "fontHeading1LargeSize", (function() {
        return ao
    })), n.d(t, "fontHeading1LargeLineHeight", (function() {
        return oo
    })), n.d(t, "fontHeading2Size", (function() {
        return io
    })), n.d(t, "fontHeading2LineHeight", (function() {
        return co
    })), n.d(t, "fontHeading2Weight", (function() {
        return lo
    })), n.d(t, "fontHeading2LargeSize", (function() {
        return uo
    })), n.d(t, "fontHeading2LargeLineHeight", (function() {
        return so
    })), n.d(t, "fontHeading3Size", (function() {
        return fo
    })), n.d(t, "fontHeading3LineHeight", (function() {
        return vo
    })), n.d(t, "fontHeading3Weight", (function() {
        return go
    })), n.d(t, "fontHeading3LargeSize", (function() {
        return ho
    })), n.d(t, "fontHeading3LargeLineHeight", (function() {
        return po
    })), n.d(t, "fontHeading4Size", (function() {
        return mo
    })), n.d(t, "fontHeading4LineHeight", (function() {
        return bo
    })), n.d(t, "fontHeading4Weight", (function() {
        return yo
    })), n.d(t, "fontHeading5Size", (function() {
        return wo
    })), n.d(t, "fontHeading5LineHeight", (function() {
        return Eo
    })), n.d(t, "fontHeading5Weight", (function() {
        return xo
    })), n.d(t, "fontHeading6Size", (function() {
        return _o
    })), n.d(t, "fontHeading6LineHeight", (function() {
        return Oo
    })), n.d(t, "fontHeading6Weight", (function() {
        return Ro
    })), n.d(t, "fontParagraphSize", (function() {
        return zo
    })), n.d(t, "fontParagraphLineHeight", (function() {
        return Co
    })), n.d(t, "fontParagraphLargeSize", (function() {
        return Mo
    })), n.d(t, "fontParagraphLargeLineHeight", (function() {
        return Ao
    })), n.d(t, "fontFamilyHalant", (function() {
        return jo
    })), n.d(t, "fontFamilyHelveticaLtStdCond", (function() {
        return So
    })), n.d(t, "fontFamilyVitesse", (function() {
        return Lo
    })), n.d(t, "fontFamilyBwModelica", (function() {
        return Bo
    })), n.d(t, "fontFamilySofiaProCondensed", (function() {
        return Po
    })), n.d(t, "fontFamilyBarlowSemiCondensed", (function() {
        return To
    })), n.d(t, "fontFamilyMerriweather", (function() {
        return ko
    })), n.d(t, "fontFamilyGeorgia", (function() {
        return Ho
    })), n.d(t, "fontFamilyOpenSans", (function() {
        return Io
    })), n.d(t, "fontFamilyMarkproNarrow", (function() {
        return Fo
    })), n.d(t, "fontFamilyFFGoodProWide", (function() {
        return Do
    })), n.d(t, "fontFamilyFFGoodOtCondensed", (function() {
        return No
    })), n.d(t, "fontFamilyBrandPrimary", (function() {
        return Vo
    })), n.d(t, "fontFamilyBrandSecondary", (function() {
        return Wo
    })), n.d(t, "fontFamilySystem", (function() {
        return Uo
    })), n.d(t, "fontSize6XLarge", (function() {
        return $o
    })), n.d(t, "fontSize5XLarge", (function() {
        return Go
    })), n.d(t, "fontSize4XLarge", (function() {
        return Yo
    })), n.d(t, "fontSize3XLarge", (function() {
        return qo
    })), n.d(t, "fontSizeXxLarge", (function() {
        return Jo
    })), n.d(t, "fontSizeXLarge", (function() {
        return Ko
    })), n.d(t, "fontSizeLarge", (function() {
        return Xo
    })), n.d(t, "fontSizeMedium", (function() {
        return Zo
    })), n.d(t, "fontSizeSmall", (function() {
        return Qo
    })), n.d(t, "fontSizeXSmall", (function() {
        return ei
    })), n.d(t, "fontWeightRegular", (function() {
        return ti
    })), n.d(t, "fontWeightMedium", (function() {
        return ni
    })), n.d(t, "fontWeightBold", (function() {
        return ri
    })), n.d(t, "lineHeight4XLarge", (function() {
        return ai
    })), n.d(t, "lineHeight3XLarge", (function() {
        return oi
    })), n.d(t, "lineHeightXxLarge", (function() {
        return ii
    })), n.d(t, "lineHeightXLarge", (function() {
        return ci
    })), n.d(t, "lineHeightLarge", (function() {
        return li
    })), n.d(t, "lineHeightMedium", (function() {
        return ui
    })), n.d(t, "lineHeightSmall", (function() {
        return si
    })), n.d(t, "lineHeightXSmall", (function() {
        return fi
    })), n.d(t, "buttonOutlineBorderColor", (function() {
        return di
    })), n.d(t, "buttonOutlineColor", (function() {
        return vi
    })), n.d(t, "buttonOutlineHoverBorderColor", (function() {
        return gi
    })), n.d(t, "buttonOutlineHoverColor", (function() {
        return hi
    })), n.d(t, "buttonOutlineActiveBackground", (function() {
        return pi
    })), n.d(t, "buttonOutlineActiveBorderColor", (function() {
        return mi
    })), n.d(t, "buttonOutlineActiveColor", (function() {
        return bi
    })), n.d(t, "buttonPlainColor", (function() {
        return yi
    })), n.d(t, "buttonPlainHoverBackground", (function() {
        return wi
    })), n.d(t, "buttonPlainActiveBackground", (function() {
        return Ei
    })), n.d(t, "buttonPrimaryBackground", (function() {
        return xi
    })), n.d(t, "buttonPrimaryColor", (function() {
        return _i
    })), n.d(t, "buttonPrimaryHoverBackground", (function() {
        return Oi
    })), n.d(t, "buttonPrimaryHoverColor", (function() {
        return Ri
    })), n.d(t, "buttonPrimaryActiveBackground", (function() {
        return zi
    })), n.d(t, "buttonPrimaryActiveColor", (function() {
        return Ci
    })), n.d(t, "buttonFontFamily", (function() {
        return Mi
    })), n.d(t, "buttonFontWeight", (function() {
        return Ai
    })), n.d(t, "buttonSecondaryColor", (function() {
        return ji
    })), n.d(t, "iconXLarge", (function() {
        return Si
    })), n.d(t, "iconLarge", (function() {
        return Li
    })), n.d(t, "iconMedium", (function() {
        return Bi
    })), n.d(t, "iconSmall", (function() {
        return Pi
    }));
    var r = "#000000",
        a = .73,
        o = "#BDCBD1",
        i = "#f97a7d",
        c = "3px",
        l = "0 0 0 3px #BDCBD1",
        u = "0 0 0 3px #f97a7d",
        s = "#BDCBD1",
        f = "#f97a7d",
        d = "3px",
        v = "1px",
        g = "#7E888B",
        h = "#2A2D2E",
        p = "#e92326",
        m = "#000000",
        b = "#7E888B",
        y = "#BDCBD1",
        w = "#2A2D2E",
        E = "#ffffff",
        x = "#e92326",
        _ = "#151717",
        O = "#ffa600",
        R = "#D2E2E8",
        z = "#2A2D2E",
        C = "#ffffff",
        M = "0 2px 4px rgba(0, 0, 0, .12)",
        A = "inset 0 1px 5px 0 #000000",
        j = "0 0 0 3px #BDCBD1",
        S = "0 0 0 3px #f97a7d",
        L = "1px",
        B = "#7E888B",
        P = "#2A2D2E",
        T = "#e92326",
        k = "#000000",
        H = "#7E888B",
        I = "#BDCBD1",
        F = "#2A2D2E",
        D = "#ffffff",
        N = "#e92326",
        V = "#151717",
        W = "#ffa600",
        U = "#D2E2E8",
        $ = "#2A2D2E",
        G = "#ffffff",
        Y = "0 2px 4px rgba(0, 0, 0, .12)",
        q = "inset 0 1px 5px 0 #000000",
        J = "0 0 0 3px #BDCBD1",
        K = "0 0 0 3px #f97a7d",
        X = "#000000",
        Z = "#e0f3ff",
        Q = "#ade2fe",
        ee = "#68c3f5",
        te = "#2da2e3",
        ne = "#0280c6",
        re = "#00649c",
        ae = "#004c75",
        oe = "#003958",
        ie = "#002d46",
        ce = "#00283d",
        le = "#2da2e3",
        ue = "#0280c6",
        se = "#00649c",
        fe = "#000000",
        de = "#000000",
        ve = "#000000",
        ge = "#000000",
        he = "#000000",
        pe = "#ffffff",
        me = "#ffffff",
        be = "#ffffff",
        ye = "#ffffff",
        we = "#ffffff",
        Ee = "#000000",
        xe = "#000000",
        _e = "#ffffff",
        Oe = "#000000",
        Re = "#000000",
        ze = "#ffffff",
        Ce = "#000000",
        Me = "#000000",
        Ae = "#ffffff",
        je = "#000000",
        Se = "#000000",
        Le = "#000000",
        Be = "#000000",
        Pe = "#ffffff",
        Te = "#ffffff",
        ke = "#000000",
        He = "#000000",
        Ie = "#ffffff",
        Fe = "#000000",
        De = "#000000",
        Ne = "#000000",
        Ve = "#000000",
        We = "#000000",
        Ue = "#000000",
        $e = "#e0ffe0",
        Ge = "#b2f9b4",
        Ye = "#74eb76",
        qe = "#40d342",
        Je = "#1ab11d",
        Ke = "#048907",
        Xe = "#006402",
        Ze = "#005a02",
        Qe = "#003b01",
        et = "#003601",
        tt = "#40d342",
        nt = "#1ab11d",
        rt = "#048907",
        at = "#F2F7F8",
        ot = "#D2E2E8",
        it = "#BDCBD1",
        ct = "#A8B5BA",
        lt = "#7E888B",
        ut = "#697174",
        st = "#545A5D",
        ft = "#3F4446",
        dt = "#2A2D2E",
        vt = "#151717",
        gt = "#A8B5BA",
        ht = "#7E888B",
        pt = "#697174",
        mt = "#fff5e0",
        bt = "#ffe7b3",
        yt = "#ffd275",
        wt = "#ffa600",
        Et = "#e89700",
        xt = "#d68000",
        _t = "#c27000",
        Ot = "#9e6600",
        Rt = "#754c00",
        zt = "#472b00",
        Ct = "#ffd275",
        Mt = "#ffa600",
        At = "#e89700",
        jt = "#ffe0e4",
        St = "#feb3b8",
        Lt = "#fb7a82",
        Bt = "#f54953",
        Pt = "#ed222f",
        Tt = "#e20714",
        kt = "#c3000c",
        Ht = "#9e000a",
        It = "#730007",
        Ft = "#470005",
        Dt = "#ed222f",
        Nt = "#e20714",
        Vt = "#c3000c",
        Wt = "#ffebeb",
        Ut = "#fdb5b6",
        $t = "#f97a7d",
        Gt = "#f2494c",
        Yt = "#e92326",
        qt = "#dd070b",
        Jt = "#cd0003",
        Kt = "#b80003",
        Xt = "#a00003",
        Zt = "#870002",
        Qt = "#f97a7d",
        en = "#e92326",
        tn = "#cd0003",
        nn = "#fff5e0",
        rn = "#ffe7b3",
        an = "#ffd275",
        on = "#ffa600",
        cn = "#e89700",
        ln = "#d68000",
        un = "#c27000",
        sn = "#9e6600",
        fn = "#754c00",
        dn = "#472b00",
        vn = "#ffd275",
        gn = "#ffa600",
        hn = "#e89700",
        pn = "#F2F7F8",
        mn = "#D2E2E8",
        bn = "#BDCBD1",
        yn = "#A8B5BA",
        wn = "#7E888B",
        En = "#697174",
        xn = "#545A5D",
        _n = "#3F4446",
        On = "#2A2D2E",
        Rn = "#151717",
        zn = "#D2E2E8",
        Cn = "#BDCBD1",
        Mn = "#A8B5BA",
        An = "#ffffff",
        jn = "#e20714",
        Sn = "#e20714",
        Ln = "#e20714",
        Bn = "8px",
        Pn = "8px",
        Tn = "FFGoodOTCondensed, Open Sans, Arial, Helvetica, sans-serif",
        kn = "500",
        Hn = "none",
        In = "0",
        Fn = "0",
        Dn = "center",
        Nn = "48px",
        Vn = "24px",
        Wn = "32px",
        Un = "32px",
        $n = "4px",
        Gn = "solid",
        Yn = "#e20714",
        qn = "8px",
        Jn = "inline-block",
        Kn = "24px",
        Xn = "24px",
        Zn = "left",
        Qn = "none",
        er = 0,
        tr = "8px",
        nr = "8px",
        rr = "solid",
        ar = "#e20714",
        or = "8px",
        ir = "8px",
        cr = "4px",
        lr = "solid",
        ur = "#e20714",
        sr = "8px",
        fr = "24px",
        dr = "8px",
        vr = "#3F4446",
        gr = "#ffffff",
        hr = "#2A2D2E",
        pr = "#3F4446",
        mr = "#3F4446",
        br = "#697174",
        yr = "#151717",
        wr = "#470005",
        Er = "#F2F7F8",
        xr = "#2A2D2E",
        _r = "#ffffff",
        Or = "#2A2D2E",
        Rr = "#F2F7F8",
        zr = "#151717",
        Cr = "#151717",
        Mr = "#151717",
        Ar = "#151717",
        jr = "#ffffff",
        Sr = "#e20714",
        Lr = "#e20714",
        Br = "#ed222f",
        Pr = "#c3000c",
        Tr = "#e20714",
        kr = "#feb3b8",
        Hr = "40px",
        Ir = "32px",
        Fr = "28px",
        Dr = "24px",
        Nr = "16px",
        Vr = "#2A2D2E",
        Wr = "#ffffff",
        Ur = "#e20714",
        $r = "#e20714",
        Gr = "#e20714",
        Yr = "#ffffff",
        qr = "#2A2D2E",
        Jr = "#151717",
        Kr = "none",
        Xr = "0 2px 4px rgba(0, 0, 0, .12)",
        Zr = "0 2px 7px rgba(0, 0, 0, .28)",
        Qr = "0 7px 14px rgba(0, 0, 0, .28)",
        ea = "0 14px 28px rgba(0, 0, 0, .28)",
        ta = "inset 0 1px 10px 0 rgba(0, 0, 0, .24)",
        na = "inset 0 1px 15px 0 rgba(0, 0, 0, 0.28)",
        ra = 100,
        aa = 200,
        oa = 300,
        ia = 400,
        ca = 500,
        la = 600,
        ua = 700,
        sa = 800,
        fa = 900,
        da = "0px",
        va = "480px",
        ga = "786px",
        ha = "1010px",
        pa = "1440px",
        ma = "16px",
        ba = "calc(100% - 32px)",
        ya = "1200px",
        wa = "2px",
        Ea = "4px",
        xa = "8px",
        _a = "12px",
        Oa = "16px",
        Ra = "24px",
        za = "32px",
        Ca = "40px",
        Ma = "48px",
        Aa = "64px",
        ja = "96px",
        Sa = "200ms",
        La = "300ms",
        Ba = "500ms",
        Pa = "rgba(0, 0, 0, 0.33)",
        Ta = "linear-gradient(-180deg, rgba(213, 219, 224, 0) 0%, rgba(0, 0, 0, 0.33) 100%)",
        ka = "linear-gradient(-180deg, rgba(0, 0, 0, 0.33) 0%, rgba(255, 255, 255, 0) 100%)",
        Ha = "0px",
        Ia = "2px",
        Fa = "4px",
        Da = "8px",
        Na = "12px",
        Va = "16px",
        Wa = "24px",
        Ua = "32px",
        $a = "40px",
        Ga = "48px",
        Ya = "64px",
        qa = "96px",
        Ja = "9999px",
        Ka = "50%",
        Xa = "14px",
        Za = "16px",
        Qa = "12px",
        eo = "16px",
        to = "28px",
        no = "32px",
        ro = "700",
        ao = "40px",
        oo = "44px",
        io = "24px",
        co = "28px",
        lo = "700",
        uo = "32px",
        so = "40px",
        fo = "22px",
        vo = "28px",
        go = "700",
        ho = "24px",
        po = "32px",
        mo = "20px",
        bo = "24px",
        yo = "700",
        wo = "18px",
        Eo = "24px",
        xo = "700",
        _o = "16px",
        Oo = "20px",
        Ro = "700",
        zo = "16px",
        Co = "24px",
        Mo = "16px",
        Ao = "24px",
        jo = "Halant, 'Times New Roman', Times, serif",
        So = "Helvetica Neue Condensed, Arial, Helvetica, sans-serif",
        Lo = "Vitesse, 'Times New Roman', Times, serif",
        Bo = "BwModelica, Open Sans, sans-serif",
        Po = "Sofia Pro Condensed, Arial, Helvetica, sans-serif",
        To = "BarlowSemiCondensed, Arial, Helvetica, sans-serif",
        ko = "Merriweather, 'Times New Roman', Times, serif",
        Ho = "Georgia, serif",
        Io = "OpenSans, Arial, Helvetica, sans-serif",
        Fo = "Mark Pro Narrow, Open Sans, Arial, Helvetica, sans-serif",
        Do = "FFGoodProWide, Open Sans, Arial, Helvetica, sans-serif",
        No = "FFGoodOTCondensed, Open Sans, Arial, Helvetica, sans-serif",
        Vo = "FFGoodProWide, Open Sans, Arial, Helvetica, sans-serif",
        Wo = "FFGoodOTCondensed, Open Sans, Arial, Helvetica, sans-serif",
        Uo = "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        $o = "40px",
        Go = "32px",
        Yo = "28px",
        qo = "24px",
        Jo = "22px",
        Ko = "20px",
        Xo = "18px",
        Zo = "16px",
        Qo = "14px",
        ei = "12px",
        ti = "400",
        ni = "500",
        ri = "700",
        ai = "48px",
        oi = "44px",
        ii = "40px",
        ci = "32px",
        li = "28px",
        ui = "24px",
        si = "20px",
        fi = "16px",
        di = "#000000",
        vi = "#000000",
        gi = "#e20714",
        hi = "#e20714",
        pi = "#ffe0e4",
        mi = "#e20714",
        bi = "#e20714",
        yi = "#e20714",
        wi = "#ffe0e4",
        Ei = "#feb3b8",
        xi = "#e20714",
        _i = "#ffffff",
        Oi = "#ed222f",
        Ri = "#ffffff",
        zi = "#c3000c",
        Ci = "#ffffff",
        Mi = "FFGoodProWide, Open Sans, Arial, Helvetica, sans-serif",
        Ai = "500",
        ji = "#e20714",
        Si = "32px",
        Li = "28px",
        Bi = "24px",
        Pi = "16px"
}, function(e, t, n) {
    var r = n(171),
        a = n(120),
        o = n(172);
    e.exports = function(e) {
        return r(e) || a(e) || o()
    }
}, function(e, t, n) {
    e.exports = {
        highlightsWrapper: "gva-cb4b4ec2_highlightswrapper",
        highlightsHolderHome: "gva-cb4b4ec2_highlightsholderhome",
        highlightsHolderAway: "gva-cb4b4ec2_highlightsholderaway",
        highlightsLogoHome: "gva-cb4b4ec2_highlightslogohome",
        highlightsLogoAway: "gva-cb4b4ec2_highlightslogoaway",
        highlightHomeTeam: "gva-cb4b4ec2_highlighthometeam",
        highlightAwayTeam: "gva-cb4b4ec2_highlightawayteam",
        highlightWrapper: "gva-cb4b4ec2_highlightwrapper",
        popOverMessage: "gva-cb4b4ec2_popovermessage",
        messageWrapper: "gva-cb4b4ec2_messagewrapper",
        messageHeader: "gva-cb4b4ec2_messageheader"
    }
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        var e = "millisecond",
            t = "second",
            n = "minute",
            r = "hour",
            a = "day",
            o = "week",
            i = "month",
            c = "quarter",
            l = "year",
            u = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
            s = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            f = function(e, t, n) {
                var r = String(e);
                return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
            },
            d = {
                s: f,
                z: function(e) {
                    var t = -e.utcOffset(),
                        n = Math.abs(t),
                        r = Math.floor(n / 60),
                        a = n % 60;
                    return (t <= 0 ? "+" : "-") + f(r, 2, "0") + ":" + f(a, 2, "0")
                },
                m: function(e, t) {
                    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        r = e.clone().add(n, i),
                        a = t - r < 0,
                        o = e.clone().add(n + (a ? -1 : 1), i);
                    return Number(-(n + (t - r) / (a ? r - o : o - r)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(u) {
                    return {
                        M: i,
                        y: l,
                        w: o,
                        d: a,
                        D: "date",
                        h: r,
                        m: n,
                        s: t,
                        ms: e,
                        Q: c
                    } [u] || String(u || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            },
            v = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            },
            g = "en",
            h = {};
        h[g] = v;
        var p = function(e) {
                return e instanceof w
            },
            m = function(e, t, n) {
                var r;
                if (!e) return g;
                if ("string" == typeof e) h[e] && (r = e), t && (h[e] = t, r = e);
                else {
                    var a = e.name;
                    h[a] = e, r = a
                }
                return !n && r && (g = r), r || !n && g
            },
            b = function(e, t, n) {
                if (p(e)) return e.clone();
                var r = t ? "string" == typeof t ? {
                    format: t,
                    pl: n
                } : t : {};
                return r.date = e, new w(r)
            },
            y = d;
        y.l = m, y.i = p, y.w = function(e, t) {
            return b(e, {
                locale: t.$L,
                utc: t.$u,
                $offset: t.$offset
            })
        };
        var w = function() {
            function f(e) {
                this.$L = this.$L || m(e.locale, null, !0), this.parse(e)
            }
            var d = f.prototype;
            return d.parse = function(e) {
                this.$d = function(e) {
                    var t = e.date,
                        n = e.utc;
                    if (null === t) return new Date(NaN);
                    if (y.u(t)) return new Date;
                    if (t instanceof Date) return new Date(t);
                    if ("string" == typeof t && !/Z$/i.test(t)) {
                        var r = t.match(u);
                        if (r) return n ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)
                    }
                    return new Date(t)
                }(e), this.init()
            }, d.init = function() {
                var e = this.$d;
                this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
            }, d.$utils = function() {
                return y
            }, d.isValid = function() {
                return !("Invalid Date" === this.$d.toString())
            }, d.isSame = function(e, t) {
                var n = b(e);
                return this.startOf(t) <= n && n <= this.endOf(t)
            }, d.isAfter = function(e, t) {
                return b(e) < this.startOf(t)
            }, d.isBefore = function(e, t) {
                return this.endOf(t) < b(e)
            }, d.$g = function(e, t, n) {
                return y.u(e) ? this[t] : this.set(n, e)
            }, d.year = function(e) {
                return this.$g(e, "$y", l)
            }, d.month = function(e) {
                return this.$g(e, "$M", i)
            }, d.day = function(e) {
                return this.$g(e, "$W", a)
            }, d.date = function(e) {
                return this.$g(e, "$D", "date")
            }, d.hour = function(e) {
                return this.$g(e, "$H", r)
            }, d.minute = function(e) {
                return this.$g(e, "$m", n)
            }, d.second = function(e) {
                return this.$g(e, "$s", t)
            }, d.millisecond = function(t) {
                return this.$g(t, "$ms", e)
            }, d.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, d.valueOf = function() {
                return this.$d.getTime()
            }, d.startOf = function(e, c) {
                var u = this,
                    s = !!y.u(c) || c,
                    f = y.p(e),
                    d = function(e, t) {
                        var n = y.w(u.$u ? Date.UTC(u.$y, t, e) : new Date(u.$y, t, e), u);
                        return s ? n : n.endOf(a)
                    },
                    v = function(e, t) {
                        return y.w(u.toDate()[e].apply(u.toDate("s"), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), u)
                    },
                    g = this.$W,
                    h = this.$M,
                    p = this.$D,
                    m = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                    case l:
                        return s ? d(1, 0) : d(31, 11);
                    case i:
                        return s ? d(1, h) : d(0, h + 1);
                    case o:
                        var b = this.$locale().weekStart || 0,
                            w = (g < b ? g + 7 : g) - b;
                        return d(s ? p - w : p + (6 - w), h);
                    case a:
                    case "date":
                        return v(m + "Hours", 0);
                    case r:
                        return v(m + "Minutes", 1);
                    case n:
                        return v(m + "Seconds", 2);
                    case t:
                        return v(m + "Milliseconds", 3);
                    default:
                        return this.clone()
                }
            }, d.endOf = function(e) {
                return this.startOf(e, !1)
            }, d.$set = function(o, c) {
                var u, s = y.p(o),
                    f = "set" + (this.$u ? "UTC" : ""),
                    d = (u = {}, u[a] = f + "Date", u.date = f + "Date", u[i] = f + "Month", u[l] = f + "FullYear", u[r] = f + "Hours", u[n] = f + "Minutes", u[t] = f + "Seconds", u[e] = f + "Milliseconds", u)[s],
                    v = s === a ? this.$D + (c - this.$W) : c;
                if (s === i || s === l) {
                    var g = this.clone().set("date", 1);
                    g.$d[d](v), g.init(), this.$d = g.set("date", Math.min(this.$D, g.daysInMonth())).toDate()
                } else d && this.$d[d](v);
                return this.init(), this
            }, d.set = function(e, t) {
                return this.clone().$set(e, t)
            }, d.get = function(e) {
                return this[y.p(e)]()
            }, d.add = function(e, c) {
                var u, s = this;
                e = Number(e);
                var f = y.p(c),
                    d = function(t) {
                        var n = b(s);
                        return y.w(n.date(n.date() + Math.round(t * e)), s)
                    };
                if (f === i) return this.set(i, this.$M + e);
                if (f === l) return this.set(l, this.$y + e);
                if (f === a) return d(1);
                if (f === o) return d(7);
                var v = (u = {}, u[n] = 6e4, u[r] = 36e5, u[t] = 1e3, u)[f] || 1,
                    g = this.$d.getTime() + e * v;
                return y.w(g, this)
            }, d.subtract = function(e, t) {
                return this.add(-1 * e, t)
            }, d.format = function(e) {
                var t = this;
                if (!this.isValid()) return "Invalid Date";
                var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                    r = y.z(this),
                    a = this.$locale(),
                    o = this.$H,
                    i = this.$m,
                    c = this.$M,
                    l = a.weekdays,
                    u = a.months,
                    f = function(e, r, a, o) {
                        return e && (e[r] || e(t, n)) || a[r].substr(0, o)
                    },
                    d = function(e) {
                        return y.s(o % 12 || 12, e, "0")
                    },
                    v = a.meridiem || function(e, t, n) {
                        var r = e < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r
                    },
                    g = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: c + 1,
                        MM: y.s(c + 1, 2, "0"),
                        MMM: f(a.monthsShort, c, u, 3),
                        MMMM: u[c] || u(this, n),
                        D: this.$D,
                        DD: y.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: f(a.weekdaysMin, this.$W, l, 2),
                        ddd: f(a.weekdaysShort, this.$W, l, 3),
                        dddd: l[this.$W],
                        H: String(o),
                        HH: y.s(o, 2, "0"),
                        h: d(1),
                        hh: d(2),
                        a: v(o, i, !0),
                        A: v(o, i, !1),
                        m: String(i),
                        mm: y.s(i, 2, "0"),
                        s: String(this.$s),
                        ss: y.s(this.$s, 2, "0"),
                        SSS: y.s(this.$ms, 3, "0"),
                        Z: r
                    };
                return n.replace(s, (function(e, t) {
                    return t || g[e] || r.replace(":", "")
                }))
            }, d.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }, d.diff = function(e, u, s) {
                var f, d = y.p(u),
                    v = b(e),
                    g = 6e4 * (v.utcOffset() - this.utcOffset()),
                    h = this - v,
                    p = y.m(this, v);
                return p = (f = {}, f[l] = p / 12, f[i] = p, f[c] = p / 3, f[o] = (h - g) / 6048e5, f[a] = (h - g) / 864e5, f[r] = h / 36e5, f[n] = h / 6e4, f[t] = h / 1e3, f)[d] || h, s ? p : y.a(p)
            }, d.daysInMonth = function() {
                return this.endOf(i).$D
            }, d.$locale = function() {
                return h[this.$L]
            }, d.locale = function(e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                    r = m(e, t, !0);
                return r && (n.$L = r), n
            }, d.clone = function() {
                return y.w(this.$d, this)
            }, d.toDate = function() {
                return new Date(this.valueOf())
            }, d.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, d.toISOString = function() {
                return this.$d.toISOString()
            }, d.toString = function() {
                return this.$d.toUTCString()
            }, f
        }();
        return b.prototype = w.prototype, b.extend = function(e, t) {
            return e(t, w, b), b
        }, b.locale = m, b.isDayjs = p, b.unix = function(e) {
            return b(1e3 * e)
        }, b.en = h[g], b.Ls = h, b
    }()
}, function(e, t, n) {
    e.exports = {
        br0: "gva-299c5a13_br0",
        br1: "gva-299c5a13_br1",
        br2: "gva-299c5a13_br2",
        br3: "gva-299c5a13_br3",
        br4: "gva-299c5a13_br4",
        br5: "gva-299c5a13_br5",
        br6: "gva-299c5a13_br6",
        br7: "gva-299c5a13_br7",
        br8: "gva-299c5a13_br8",
        br9: "gva-299c5a13_br9",
        br10: "gva-299c5a13_br10",
        br11: "gva-299c5a13_br11",
        brFill: "gva-299c5a13_brfill",
        brSides: "gva-299c5a13_brsides"
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return e ? e.replace(/[-_]+/g, " ").replace(/[^\w\s]/g, "").replace(/\s+(.)(\w+)/g, (function(e, t, n) {
            return t.toUpperCase() + n.toLowerCase()
        })).replace(/\s/g, "").replace(/\w/, (function(e) {
            return e.toUpperCase()
        })) : ""
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-ef5adefe_root",
        content: "gva-ef5adefe_content",
        iconLeft: "gva-ef5adefe_iconleft",
        iconRight: "gva-ef5adefe_iconright",
        small: "gva-ef5adefe_small",
        large: "gva-ef5adefe_large",
        primary: "gva-ef5adefe_primary",
        secondary: "gva-ef5adefe_secondary",
        plain: "gva-ef5adefe_plain",
        outline: "gva-ef5adefe_outline",
        disabled: "gva-ef5adefe_disabled",
        full: "gva-ef5adefe_full",
        loading: "gva-ef5adefe_loading",
        loader: "gva-ef5adefe_loader",
        loaderScale: "gva-ef5adefe_loaderscale"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(121),
        a = Object.prototype.toString;

    function o(e) {
        return "[object Array]" === a.call(e)
    }

    function i(e) {
        return void 0 === e
    }

    function c(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === a.call(e)
    }

    function u(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), o(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
    }
    e.exports = {
        isArray: o,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === a.call(e)
        },
        isBuffer: function(e) {
            return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: c,
        isUndefined: i,
        isDate: function(e) {
            return "[object Date]" === a.call(e)
        },
        isFile: function(e) {
            return "[object File]" === a.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === a.call(e)
        },
        isFunction: l,
        isStream: function(e) {
            return c(e) && l(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: u,
        merge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }
            for (var r = 0, a = arguments.length; r < a; r++) u(arguments[r], n);
            return t
        },
        deepMerge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
            }
            for (var r = 0, a = arguments.length; r < a; r++) u(arguments[r], n);
            return t
        },
        extend: function(e, t, n) {
            return u(t, (function(t, a) {
                e[a] = n && "function" == typeof t ? r(t, n) : t
            })), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = {
        xsmall: {
            width: 120,
            height: 80,
            aspectRatio: "3:2"
        },
        small: {
            width: 160,
            height: 107,
            aspectRatio: "3:2"
        },
        medium: {
            width: 320,
            height: 213,
            aspectRatio: "3:2"
        },
        large: {
            width: 640,
            height: 427,
            aspectRatio: "3:2"
        },
        xlarge: {
            width: 960,
            height: 640,
            aspectRatio: "3:2"
        },
        xxlarge: {
            width: 1280,
            height: 853,
            aspectRatio: "3:2"
        }
    }
}, function(e, t, n) {
    e.exports = {
        swiperContainer: "gva-d32fd143_swipercontainer",
        swiperWrapper: "gva-d32fd143_swiperwrapper",
        swiperSlide: "gva-d32fd143_swiperslide",
        swiperThumb: "gva-d32fd143_swiperthumb",
        activeThumb: "gva-d32fd143_activethumb"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(30),
        i = n.n(o),
        c = n(24),
        l = function(e, t, n) {
            var r, a, o, l = Object(c.a)(n);
            return "string" == typeof t ? ((r = {})[e["" + n + Object(c.a)(t)]] = !!t, r) : Array.isArray(t) ? ((a = {})[e["" + n + Object(c.a)(t[0])]] = !!t[0], a[e["sm" + l + Object(c.a)(t[1])]] = !!t[1], a[e["md" + l + Object(c.a)(t[2])]] = !!t[2], a[e["lg" + l + Object(c.a)(t[3])]] = !!t[3], a[e["xl" + l + Object(c.a)(t[4])]] = !!t[4], a) : "object" === i()(t) ? ((o = {})[e["" + n + Object(c.a)(t.xs)]] = !!t.xs, o[e["sm" + l + Object(c.a)(t.sm)]] = !!t.sm, o[e["md" + l + Object(c.a)(t.md)]] = !!t.md, o[e["lg" + l + Object(c.a)(t.lg)]] = !!t.lg, o[e["xl" + l + Object(c.a)(t.xl)]] = !!t.xl, o) : {}
        },
        u = n(62),
        s = n.n(u);
    n.d(t, "a", (function() {
        return f
    })), n.d(t, "b", (function() {
        return d
    })), n.d(t, "c", (function() {
        return v
    })), n.d(t, "d", (function() {
        return g
    })), n.d(t, "e", (function() {
        return h
    }));
    var f = function(e) {
            return [a()(l(s.a, e, "alignContent")), void 0]
        },
        d = function(e) {
            return [a()(l(s.a, e, "alignItems")), void 0]
        },
        v = function(e) {
            return [a()(l(s.a, e, "flexDirection")), void 0]
        },
        g = function(e) {
            return [a()(l(s.a, e, "flexWrap")), void 0]
        },
        h = function(e) {
            return [a()(l(s.a, e, "justifyContent")), void 0]
        }
}, function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
            return typeof e
        } : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(t)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    }));
    var r = n(19),
        a = n(24),
        o = function(e) {
            if (!e) return [void 0, void 0];
            var t;
            if (e.toLowerCase().includes("black")) return [void 0, "#ffffff"];
            if (e.toLowerCase().includes("white")) return [void 0, "#000000"];
            if (e.includes("Base") || e.includes("Light") || e.includes("Dark"))
                if (e.includes("color")) t = r[("" + e).replace("color", "colorText")];
                else {
                    var n = "colorText" + Object(a.a)(e);
                    t = r[n]
                } return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach((function(n) {
                e.includes("" + n) && (t = r["colorText" + n])
            })), [void 0, t]
        };
    t.a = function(e) {
        if (!e) return [void 0, void 0];
        if (!e.includes("color")) {
            var t = "color" + Object(a.a)(e);
            return [, r[t]]
        }
        return [, r[e]]
    }
}, function(e, t, n) {
    "use strict";
    var r = {}.hasOwnProperty,
        a = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.topics = {}
            }
            return e.prototype.publish = function(e, t) {
                return r.call(this.topics, e) ? ([].concat(this.topics[e]).forEach((function(e) {
                    e(t)
                })), this) : this
            }, e.prototype.subscribe = function(e, t) {
                return r.call(this.topics, e) || (this.topics[e] = []), -1 !== this.topics[e].indexOf(t) ? this : (this.topics[e].push(t), this)
            }, e.prototype.unsubscribe = function(e, t) {
                var n = this.topics[e].indexOf(t);
                return this.topics[e].splice(n, 1), this
            }, e
        }();
    a.prototype.publish = a.prototype.publish, a.prototype.subscribe = a.prototype.subscribe, a.prototype.unsubscribe = a.prototype.unsubscribe;
    var o = a;
    t.a = "undefined" == typeof window ? new o : (window.MEDIAHUIS = window.MEDIAHUIS || {}, window.MEDIAHUIS.pubsub || (window.MEDIAHUIS.pubsub = new o), window.MEDIAHUIS.pubsub)
}, function(e, t, n) {
    e.exports = {
        controlsButtons: "gva-a8b6f5bc_controlsbuttons",
        controlsContainer: "gva-a8b6f5bc_controlscontainer",
        controlsOnSide: "gva-a8b6f5bc_controlsonside",
        buttonPrev: "gva-a8b6f5bc_buttonprev",
        buttonNext: "gva-a8b6f5bc_buttonnext",
        pagination: "gva-a8b6f5bc_pagination",
        bulletPagination: "gva-a8b6f5bc_bulletpagination",
        paginationBullet: "gva-a8b6f5bc_paginationbullet",
        paginationBulletActive: "gva-a8b6f5bc_paginationbulletactive"
    }
}, function(e, t, n) {
    e.exports = {
        middle: "gva-861d12f_middle",
        baseline: "gva-861d12f_baseline",
        top: "gva-861d12f_top",
        bottom: "gva-861d12f_bottom",
        inherit: "gva-861d12f_inherit",
        unset: "gva-861d12f_unset",
        textTop: "gva-861d12f_texttop",
        textBottom: "gva-861d12f_textbottom",
        sub: "gva-861d12f_sub",
        super: "gva-861d12f_super"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-5b1109f5_root",
        square: "gva-5b1109f5_square",
        circular: "gva-5b1109f5_circular",
        small: "gva-5b1109f5_small",
        large: "gva-5b1109f5_large",
        default: "gva-5b1109f5_default",
        primary: "gva-5b1109f5_primary",
        secondary: "gva-5b1109f5_secondary",
        plain: "gva-5b1109f5_plain",
        outline: "gva-5b1109f5_outline",
        disabled: "gva-5b1109f5_disabled"
    }
}, , function(e, t, n) {
    e.exports = {
        zIndex0: "gva-a3704023_zindex0",
        zIndex100: "gva-a3704023_zindex100",
        zIndex200: "gva-a3704023_zindex200",
        zIndex300: "gva-a3704023_zindex300",
        zIndex400: "gva-a3704023_zindex400",
        zIndex500: "gva-a3704023_zindex500",
        zIndex600: "gva-a3704023_zindex600",
        zIndex700: "gva-a3704023_zindex700",
        zIndex800: "gva-a3704023_zindex800",
        zIndex900: "gva-a3704023_zindex900"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-9b00ef5_root",
        heading1: "gva-9b00ef5_heading1",
        heading2: "gva-9b00ef5_heading2",
        heading3: "gva-9b00ef5_heading3",
        heading4: "gva-9b00ef5_heading4",
        heading5: "gva-9b00ef5_heading5",
        heading6: "gva-9b00ef5_heading6",
        paragraph: "gva-9b00ef5_paragraph",
        caption1: "gva-9b00ef5_caption1",
        caption2: "gva-9b00ef5_caption2"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return c
    })), n.d(t, "c", (function() {
        return l
    })), n.d(t, "a", (function() {
        return u
    })), n.d(t, "b", (function() {
        return s
    }));
    var r = n(1),
        a = n.n(r),
        o = n(76),
        i = n.n(o),
        c = function(e) {
            var t;
            return [a()(((t = {})[i.a["top" + e]] = "number" == typeof e, t))]
        },
        l = function(e) {
            var t;
            return [a()(((t = {})[i.a["right" + e]] = "number" == typeof e, t))]
        },
        u = function(e) {
            var t;
            return [a()(((t = {})[i.a["bottom" + e]] = "number" == typeof e, t))]
        },
        s = function(e) {
            var t;
            return [a()(((t = {})[i.a["left" + e]] = "number" == typeof e, t))]
        }
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        a = n.n(r),
        o = n(0),
        i = n(32),
        c = function() {
            var e = Object(o.useState)(!1),
                t = a()(e, 2),
                n = t[0],
                r = t[1];
            return Object(o.useEffect)((function() {
                var e, t;
                if (null === (e = window) || void 0 === e ? void 0 : null === (t = e.MEDIAHUIS) || void 0 === t ? void 0 : t.user) {
                    var n = window.MEDIAHUIS.user.isLoggedIn;
                    r(Boolean(n))
                } else i.a.subscribe("account/getidentity/complete", (function(e) {
                    var t = e.isLoggedIn;
                    return r(Boolean(t))
                }))
            }), []), n
        },
        l = n(147),
        u = n.n(l),
        s = new Map;

    function f(e, t, n, r) {
        return u()(e).then((function(e) {
            if (e.ok) return "json" === r ? e.json() : e.text();
            throw new Error(e.statusText)
        })).then((function(r) {
            return s.set(e, {
                data: r,
                expiry: t + n
            }), r
        }))
    }
    var d = function(e) {
            var t = e.url,
                n = e.expiry,
                r = e.type,
                i = e.defaultData,
                c = void 0 === i ? null : i,
                l = e.refreshInterval,
                u = void 0 === l ? null : l,
                d = Object(o.useState)(Date.now()),
                v = a()(d, 2),
                g = v[0],
                h = v[1],
                p = function(e, t) {
                    var n = s.get(e),
                        r = null;
                    return n && (n.expiry - t >= 0 ? r = n.data : s.delete(e)), r
                }(t, g),
                m = Object(o.useState)(p || c),
                b = a()(m, 2),
                y = b[0],
                w = b[1];
            return "undefined" == typeof window && f(t, g, n, r), Object(o.useEffect)((function() {
                p || (y && w(null), f(t, g, n, r).then((function(e) {
                    return w(e), e
                })).catch((function() {
                    s.set(t, {
                        data: null,
                        expiry: g + 2e3
                    })
                })))
            }), [t, n, g, p]), Object(o.useEffect)((function() {
                if (u) {
                    var e = setInterval((function() {
                        return h(Date.now())
                    }), u);
                    return function() {
                        return clearInterval(e)
                    }
                }
                return function() {
                    return null
                }
            }), [t, h, u]), {
                data: y
            }
        },
        v = function() {
            var e = Object(o.useState)(!1),
                t = a()(e, 2),
                n = t[0],
                r = t[1];
            return Object(o.useEffect)((function() {
                var e, t;
                if (null === (e = window) || void 0 === e ? void 0 : null === (t = e.MEDIAHUIS) || void 0 === t ? void 0 : t.user) {
                    var n = window.MEDIAHUIS.user,
                        a = n.isLoggedIn,
                        o = n.isSubscriber;
                    r(Boolean(a && o))
                } else i.a.subscribe("account/getidentity/complete", (function(e) {
                    var t = e.isLoggedIn,
                        n = e.isSubscriber;
                    return r(Boolean(t && n))
                }))
            }), []), n
        };
    n.d(t, "a", (function() {
        return c
    })), n.d(t, "c", (function() {
        return d
    })), n.d(t, "b", (function() {
        return v
    }))
}, function(e, t) {
    e.exports = ReactDOM
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(9),
        l = n(108),
        u = n(10),
        s = n(18),
        f = n(65),
        d = n.n(f);

    function v() {
        return (v = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var g = ["colorProps", "flexProps", "marginProps", "positioningProps", "floatProps"],
        h = Object(r.forwardRef)((function(e, t) {
            var n, r = e.name,
                o = e.size,
                f = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["name", "size"]),
                h = f.as || Object(l.a)(r) || c.Placeholder,
                p = Object(u.a)(f, g),
                m = p[0],
                b = p[1],
                y = p[2];
            r && console.warn('[DEPRECATED](Icon): "name" (' + r + ') is deprecated. Use the "as" prop instead.');
            var w = ((n = {})[d.a.root] = !0, n[d.a.small] = "small" === o, n[d.a.medium] = "medium" === o, n[d.a.large] = "large" === o, n[d.a.xLarge] = "xLarge" === o, n);
            return (a.a.createElement(s.a, v({
                as: h,
                className: i()(w, m),
                style: b,
                svgRef: t
            }, y)))
        }));
    h.displayName = "Icon", h.identifier = h.displayName, h.clonableProps = g, h.defaultProps = {
        size: "medium"
    }, t.a = h
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(18),
        l = n(10),
        u = n(38),
        s = n.n(u);

    function f() {
        return (f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var d = ["colorProps", "flexProps", "marginProps", "textProps", "floatProps", "displayProps"],
        v = Object(r.forwardRef)((function(e, t) {
            var n, r = e.size,
                o = e.as,
                u = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["size", "as"]),
                v = ((n = {})[s.a.root] = !0, n[s.a.heading1] = "Heading1" === r, n[s.a.heading2] = "Heading2" === r, n[s.a.heading3] = "Heading3" === r, n[s.a.heading4] = "Heading4" === r, n[s.a.heading5] = "Heading5" === r, n[s.a.heading6] = "Heading6" === r, n[s.a.paragraph] = "Paragraph" === r, n[s.a.caption1] = "Caption1" === r, n[s.a.caption2] = "Caption2" === r, n),
                g = Object(l.a)(u, d),
                h = g[0],
                p = g[1],
                m = g[2];
            return a.a.createElement(c.a, f({
                as: o,
                className: i()(v, h),
                ref: t,
                style: p
            }, m))
        }));
    v.displayName = "Text", v.identifier = v.displayName, v.clonableProps = d, v.defaultProps = {
        as: "span",
        size: "Heading6"
    }, t.a = v
}, function(e, t, n) {
    "use strict";
    var r = n(7),
        a = n.n(r),
        o = n(45),
        i = n.n(o),
        c = n(0),
        l = n.n(c),
        u = n(1),
        s = n.n(u),
        f = n(18),
        d = n(111),
        v = n.n(d);
    t.a = function(e) {
        var t, n, r, o = e.aspectRatio,
            c = e.children,
            u = e.className,
            d = i()(e, ["aspectRatio", "children", "className"]);
        return l.a.createElement(f.a, a()({
            className: s()(v.a.root, u)
        }, d), l.a.createElement("svg", {
            className: v.a.placeholder,
            viewBox: "0 0 ".concat(null == o ? void 0 : null === (t = o.split) || void 0 === t ? void 0 : null === (n = t.call(o, ":")) || void 0 === n ? void 0 : null === (r = n.join) || void 0 === r ? void 0 : r.call(n, " ")),
            "aria-hidden": "true"
        }), c)
    }
}, function(e, t, n) {
    var r = n(173);
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, a, o = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        },
        c = n(11);
    var l = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.scriptLoaderId = "id" + n.constructor.idCount++, n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), a(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this.props,
                    t = e.onError,
                    n = e.onLoad,
                    r = e.url;
                this.constructor.loadedScripts[r] ? n() : this.constructor.erroredScripts[r] ? t() : this.constructor.scriptObservers[r] ? this.constructor.scriptObservers[r][this.scriptLoaderId] = this.props : (this.constructor.scriptObservers[r] = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, this.scriptLoaderId, this.props), this.createScript())
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                var e = this.props.url,
                    t = this.constructor.scriptObservers[e];
                t && delete t[this.scriptLoaderId]
            }
        }, {
            key: "createScript",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.onCreate,
                    r = t.url,
                    a = t.attributes,
                    o = document.createElement("script");
                n(), a && Object.keys(a).forEach((function(e) {
                    return o.setAttribute(e, a[e])
                })), o.src = r, o.hasAttribute("async") || (o.async = 1);
                var i = function(t) {
                    var n = e.constructor.scriptObservers[r];
                    Object.keys(n).forEach((function(a) {
                        t(n[a]) && delete e.constructor.scriptObservers[r][e.scriptLoaderId]
                    }))
                };
                o.onload = function() {
                    e.constructor.loadedScripts[r] = !0, i((function(e) {
                        return e.onLoad(), !0
                    }))
                }, o.onerror = function() {
                    e.constructor.erroredScripts[r] = !0, i((function(e) {
                        return e.onError(), !0
                    }))
                }, document.body.appendChild(o)
            }
        }, {
            key: "render",
            value: function() {
                return null
            }
        }]), t
    }(i.default.Component);
    l.propTypes = {
        attributes: c.PropTypes.object,
        onCreate: c.PropTypes.func,
        onError: c.PropTypes.func.isRequired,
        onLoad: c.PropTypes.func.isRequired,
        url: c.PropTypes.string.isRequired
    }, l.defaultProps = {
        attributes: {},
        onCreate: function() {},
        onError: function() {},
        onLoad: function() {}
    }, l.scriptObservers = {}, l.loadedScripts = {}, l.erroredScripts = {}, l.idCount = 0, t.default = l, e.exports = t.default
}, function(e, t, n) {
    e.exports = {
        root: "gva-cc4609aa_root",
        bullet: "gva-cc4609aa_bullet",
        listItemRoot: "gva-cc4609aa_listitemroot",
        icon: "gva-cc4609aa_icon",
        decimal: "gva-cc4609aa_decimal",
        customIcon: "gva-cc4609aa_customicon"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-4f01003e_root",
        shadowInset1: "gva-4f01003e_shadowinset1",
        shadow0: "gva-4f01003e_shadow0",
        shadow1: "gva-4f01003e_shadow1",
        shadow2: "gva-4f01003e_shadow2",
        shadow3: "gva-4f01003e_shadow3",
        hoverable: "gva-4f01003e_hoverable"
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return t.find((function(t) {
            return -1 !== e.indexOf(t)
        }))
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return void 0 !== e || void 0
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r = {
        backgroundProps: ["bgColor"],
        borderProps: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderColor", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderStyle", "borderTopColor", "borderTopStyle", "borderTopWidth", "borderWidth"],
        borderRadiusProps: ["borderRadius"],
        colorProps: ["color"],
        flexProps: ["alignSelf", "flex", "flexBasis", "flexGrow", "flexShrink", "order"],
        flexParentProps: ["alignContent", "alignItems", "flexDirection", "flexWrap", "justifyContent"],
        heightProps: ["height", "maxHeight"],
        marginProps: ["m", "mb", "ml", "mr", "mt", "mx", "my"],
        paddingProps: ["p", "pb", "pl", "pr", "pt", "px", "py"],
        positioningProps: ["position", "bottom", "left", "right", "top", "zIndex"],
        textProps: ["fontWeight", "fontStyle", "textAlign", "fontFamily", "decoration", "textTransform"],
        widthProps: ["width", "maxWidth"],
        floatProps: ["float"],
        displayProps: ["display"]
    }
}, function(e, t, n) {
    e.exports = {
        entry: "gva-71343a63_entry",
        timestamp: "gva-71343a63_timestamp",
        sticky: "gva-71343a63_sticky",
        pollList: "gva-71343a63_polllist"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(7),
        a = n.n(r),
        o = n(3),
        i = n.n(o),
        c = n(0),
        l = n.n(c),
        u = n(1),
        s = n.n(u),
        f = n(6),
        d = n(8),
        v = n(5),
        g = n(77),
        h = n.n(g),
        p = n(16),
        m = n(67),
        b = "\n  query webv2_Image($brand: String!, $url: String!) {\n    resizedImage: image(brand: $brand, url: $url){\n      url\n      meta {\n        aspectRatio\n        width\n        height\n      }\n      ".concat(Object(m.a)("fitIn"), "\n    }\n  }\n"),
        y = "\n  query webv2_Image($brand: String!, $url: String!, $x1: Int!, $x2: Int!, $y1: Int!, $y2: Int!, $resizeMode: ResizeMode) {\n    resizedImage: image(brand: $brand, url: $url){\n      ".concat(Object(m.a)("crop"), "\n    }\n  }\n"),
        w = n(139),
        E = n(102),
        x = n(19),
        _ = n(61),
        O = n(44),
        R = n(27),
        z = Object.keys(R.a),
        C = function(e) {
            var t = e.figureClass,
                n = e.aspectRatio,
                r = e.caption,
                o = e.defaultSource,
                i = e.sources,
                c = e.credit;
            return l.a.createElement("figure", {
                "data-testid": "article-image-wrapper",
                className: t
            }, l.a.createElement(O.a, {
                aspectRatio: n
            }, l.a.createElement(w.a, a()({
                alt: r,
                src: o,
                width: "full",
                "data-testid": "article-image"
            }, function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = [];
                return Object.keys(e).forEach((function(n) {
                    z.includes(n) && t.push("".concat(e[n].url, " ").concat(R.a[n].width, "w"))
                })), t.length ? {
                    srcSet: t,
                    sizes: "(max-width: ".concat(x.gridBreakpointMedium, ") 100vw, ").concat(x.gridBreakpointMedium)
                } : null
            }(i)))), (r || c) && l.a.createElement(E.a, {
                as: "figcaption",
                "data-testid": "image-caption",
                width: "100%"
            }, l.a.createElement(_.a, {
                caption: r,
                credit: c
            })))
        },
        M = function(e) {
            var t, n, r, o, i = Object(d.f)(null === (t = Object(f.b)()) || void 0 === t ? void 0 : null === (n = t.brand) || void 0 === n ? void 0 : n.code),
                c = e.sources,
                u = Object(p.d)(y, {
                    variables: {
                        brand: i,
                        url: e.src,
                        x1: e.crop.topLeft.x,
                        x2: e.crop.bottomRight.x,
                        y1: e.crop.topLeft.y,
                        y2: e.crop.bottomRight.y,
                        resizeMode: "FitIn"
                    }
                }),
                s = u.loading,
                g = u.error,
                h = u.data;
            return s ? "Loading..." : g ? g.message : (h && (c = h.resizedImage), l.a.createElement(C, a()({}, e, {
                defaultSource: (null === (r = c) || void 0 === r ? void 0 : null === (o = r[v.DEFAULT_IMAGE_SIZE]) || void 0 === o ? void 0 : o.url) || e.src
            })))
        },
        A = function(e) {
            var t, n, r, o, i, c, u = Object(d.f)(null === (t = Object(f.b)()) || void 0 === t ? void 0 : null === (n = t.brand) || void 0 === n ? void 0 : n.code),
                s = e.sources,
                g = Object(p.d)(b, {
                    variables: {
                        brand: u,
                        url: e.src
                    }
                }),
                h = g.loading,
                m = g.error,
                y = g.data;
            if (h) return "Loading...";
            if (m) return m.message;
            y && (s = y.resizedImage);
            var w = null === (r = s) || void 0 === r ? void 0 : null === (o = r.meta) || void 0 === o ? void 0 : o.aspectRatio;
            return l.a.createElement(C, a()({}, e, {
                aspectRatio: w ? "".concat(w, ":1") : e.aspectRatio,
                defaultSource: (null === (i = s) || void 0 === i ? void 0 : null === (c = i[v.DEFAULT_IMAGE_SIZE]) || void 0 === c ? void 0 : c.url) || e.src
            }))
        };
    t.a = function(e) {
        var t, n, r, o, c = e.src,
            u = e.credit,
            g = e.caption,
            p = e.crop,
            m = e.align,
            b = void 0 === m ? "center" : m,
            y = e.sources,
            w = e.aspectRatio,
            E = void 0 === w ? v.DEFAULT_ASPECT_RATIO_IMAGES : w,
            x = Object(d.f)(null === (t = Object(f.b)()) || void 0 === t ? void 0 : null === (n = t.brand) || void 0 === n ? void 0 : n.code),
            _ = {
                figureClass: s()(h.a.figure, (r = {}, i()(r, h.a.alignLeft, "left" === b), i()(r, h.a.alignRight, "right" === b), i()(r, h.a.alignCenter, "center" === b), r)),
                aspectRatio: E,
                caption: g,
                sources: y,
                credit: u,
                src: c
            };
        return void 0 === y && x ? p ? l.a.createElement(M, a()({}, _, {
            crop: p
        })) : l.a.createElement(A, _) : l.a.createElement(C, a()({}, _, {
            defaultSource: (null == y ? void 0 : null === (o = y[v.DEFAULT_IMAGE_SIZE]) || void 0 === o ? void 0 : o.url) || c
        }))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return i
    })), n.d(t, "c", (function() {
        return c
    }));
    var r = n(115),
        a = n(51),
        o = function(e) {
            var t = [],
                n = e.filter((function(e) {
                    return !e.includes("Props")
                }));
            return Object.keys(a.a).forEach((function(n) {
                e.includes("" + n) && (t = [].concat(a.a[n], t))
            })), [].concat(n, t)
        },
        i = function(e, t) {
            return Object.keys(e).filter((function(e) {
                return t.includes(e)
            })).reduce((function(t, n) {
                return t[n] = e[n], t
            }), {})
        },
        c = function(e) {
            var t = function() {
                var e = [];
                return Object.keys(a.a).forEach((function(t) {
                    e = [].concat(a.a[t], e)
                })), e
            }();
            return Object(r.a)(Object.keys(e).filter((function(e) {
                return !t.includes(e)
            })).reduce((function(t, n) {
                return t[n] = e[n], t
            }), {}))
        }
}, function(e, t, n) {
    e.exports = {
        auto: "gva-1703df16_auto",
        flexStart: "gva-1703df16_flexstart",
        flexEnd: "gva-1703df16_flexend",
        center: "gva-1703df16_center",
        baseline: "gva-1703df16_baseline",
        stretch: "gva-1703df16_stretch"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-9ca734f9_root",
        loaderRotate: "gva-9ca734f9_loaderrotate",
        small: "gva-9ca734f9_small",
        medium: "gva-9ca734f9_medium",
        large: "gva-9ca734f9_large",
        xLarge: "gva-9ca734f9_xlarge",
        xxLarge: "gva-9ca734f9_xxlarge"
    }
}, function(e, t, n) {
    e.exports = {
        heading1Weight: "gva-2eecf800_heading1weight",
        heading2Weight: "gva-2eecf800_heading2weight",
        heading3Weight: "gva-2eecf800_heading3weight",
        heading4Weight: "gva-2eecf800_heading4weight",
        heading5Weight: "gva-2eecf800_heading5weight",
        heading6Weight: "gva-2eecf800_heading6weight"
    }
}, function(e, t, n) {
    e.exports = {
        progressbarHolder: "gva-562d74d0_progressbarholder",
        progressbarHolderExtraTime: "gva-562d74d0_progressbarholderextratime",
        firstHalf: "gva-562d74d0_firsthalf",
        secondHalf: "gva-562d74d0_secondhalf",
        firstHalfExtraTime: "gva-562d74d0_firsthalfextratime",
        secondHalfExtraTime: "gva-562d74d0_secondhalfextratime"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return l
    }));
    var r = n(1),
        a = n.n(r),
        o = n(107),
        i = n(12),
        c = n.n(i),
        l = function(e) {
            var t;
            return [a()(((t = {})[c.a.mhFull] = "full" === e, t[c.a.mhAuto] = "auto" === e, t[c.a.mh0] = 0 === e, t[c.a.mh1] = 1 === e, t[c.a.mh2] = 2 === e, t[c.a.mh3] = 3 === e, t[c.a.mh4] = 4 === e, t[c.a.mh5] = 5 === e, t[c.a.mh6] = 6 === e, t[c.a.mh7] = 7 === e, t[c.a.mh8] = 8 === e, t[c.a.mh9] = 9 === e, t[c.a.mh10] = 10 === e, t[c.a.mh11] = 11 === e, t)), Object(o.a)(e, ["full", "auto", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])]
        };
    t.a = function(e) {
        var t;
        return [a()(((t = {})[c.a.hFull] = "full" === e, t[c.a.hAuto] = "auto" === e, t[c.a.h0] = 0 === e, t[c.a.h1] = 1 === e, t[c.a.h2] = 2 === e, t[c.a.h3] = 3 === e, t[c.a.h4] = 4 === e, t[c.a.h5] = 5 === e, t[c.a.h6] = 6 === e, t[c.a.h7] = 7 === e, t[c.a.h8] = 8 === e, t[c.a.h9] = 9 === e, t[c.a.h10] = 10 === e, t[c.a.h11] = 11 === e, t)), Object(o.a)(e, ["full", "auto", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])]
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return l
    }));
    var r = n(1),
        a = n.n(r),
        o = n(107),
        i = n(13),
        c = n.n(i),
        l = function(e) {
            var t;
            return [a()(((t = {})[c.a.mwFull] = "full" === e, t[c.a.mwAuto] = "auto" === e, t[c.a.mw0] = 0 === e, t[c.a.mw1] = 1 === e, t[c.a.mw2] = 2 === e, t[c.a.mw3] = 3 === e, t[c.a.mw4] = 4 === e, t[c.a.mw5] = 5 === e, t[c.a.mw6] = 6 === e, t[c.a.mw7] = 7 === e, t[c.a.mw8] = 8 === e, t[c.a.mw9] = 9 === e, t[c.a.mw10] = 10 === e, t[c.a.mw11] = 11 === e, t)), Object(o.a)(e, ["full", "auto", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])]
        };
    t.a = function(e) {
        var t;
        return [a()(((t = {})[c.a.wFull] = "full" === e, t[c.a.wAuto] = "auto" === e, t[c.a.w0] = 0 === e, t[c.a.w1] = 1 === e, t[c.a.w2] = 2 === e, t[c.a.w3] = 3 === e, t[c.a.w4] = 4 === e, t[c.a.w5] = 5 === e, t[c.a.w6] = 6 === e, t[c.a.w7] = 7 === e, t[c.a.w8] = 8 === e, t[c.a.w9] = 9 === e, t[c.a.w10] = 10 === e, t[c.a.w11] = 11 === e, t)), Object(o.a)(e, ["full", "auto", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(138);
    t.a = function(e) {
        var t, n, r = e.caption,
            i = e.credit,
            c = Boolean(null == r ? void 0 : null === (t = r.trim) || void 0 === t ? void 0 : t.call(r)),
            l = Boolean(null == i ? void 0 : null === (n = i.trim) || void 0 === n ? void 0 : n.call(i));
        return c || l ? a.a.createElement(o.a, {
            textAlign: "center",
            color: "grey-50",
            level: 2,
            mt: 3
        }, r, l && c && " — ", l && "© ".concat(i)) : null
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-51552310_root",
        alignContentCenter: "gva-51552310_aligncontentcenter",
        alignContentFlexEnd: "gva-51552310_aligncontentflexend",
        alignContentFlexStart: "gva-51552310_aligncontentflexstart",
        alignContentSpaceAround: "gva-51552310_aligncontentspacearound",
        alignContentSpaceBetween: "gva-51552310_aligncontentspacebetween",
        alignContentSpaceEvenly: "gva-51552310_aligncontentspaceevenly",
        alignContentStretch: "gva-51552310_aligncontentstretch",
        smAlignContentCenter: "gva-51552310_smaligncontentcenter",
        smAlignContentFlexEnd: "gva-51552310_smaligncontentflexend",
        smAlignContentFlexStart: "gva-51552310_smaligncontentflexstart",
        smAlignContentSpaceAround: "gva-51552310_smaligncontentspacearound",
        smAlignContentSpaceBetween: "gva-51552310_smaligncontentspacebetween",
        smAlignContentSpaceEvenly: "gva-51552310_smaligncontentspaceevenly",
        smAlignContentStretch: "gva-51552310_smaligncontentstretch",
        mdAlignContentCenter: "gva-51552310_mdaligncontentcenter",
        mdAlignContentFlexEnd: "gva-51552310_mdaligncontentflexend",
        mdAlignContentFlexStart: "gva-51552310_mdaligncontentflexstart",
        mdAlignContentSpaceAround: "gva-51552310_mdaligncontentspacearound",
        mdAlignContentSpaceBetween: "gva-51552310_mdaligncontentspacebetween",
        mdAlignContentSpaceEvenly: "gva-51552310_mdaligncontentspaceevenly",
        mdAlignContentStretch: "gva-51552310_mdaligncontentstretch",
        lgAlignContentCenter: "gva-51552310_lgaligncontentcenter",
        lgAlignContentFlexEnd: "gva-51552310_lgaligncontentflexend",
        lgAlignContentFlexStart: "gva-51552310_lgaligncontentflexstart",
        lgAlignContentSpaceAround: "gva-51552310_lgaligncontentspacearound",
        lgAlignContentSpaceBetween: "gva-51552310_lgaligncontentspacebetween",
        lgAlignContentSpaceEvenly: "gva-51552310_lgaligncontentspaceevenly",
        lgAlignContentStretch: "gva-51552310_lgaligncontentstretch",
        xlAlignContentCenter: "gva-51552310_xlaligncontentcenter",
        xlAlignContentFlexEnd: "gva-51552310_xlaligncontentflexend",
        xlAlignContentFlexStart: "gva-51552310_xlaligncontentflexstart",
        xlAlignContentSpaceAround: "gva-51552310_xlaligncontentspacearound",
        xlAlignContentSpaceBetween: "gva-51552310_xlaligncontentspacebetween",
        xlAlignContentSpaceEvenly: "gva-51552310_xlaligncontentspaceevenly",
        xlAlignContentStretch: "gva-51552310_xlaligncontentstretch",
        alignItemsBaseline: "gva-51552310_alignitemsbaseline",
        alignItemsCenter: "gva-51552310_alignitemscenter",
        alignItemsFlexEnd: "gva-51552310_alignitemsflexend",
        alignItemsFlexStart: "gva-51552310_alignitemsflexstart",
        alignItemsStretch: "gva-51552310_alignitemsstretch",
        smAlignItemsBaseline: "gva-51552310_smalignitemsbaseline",
        smAlignItemsCenter: "gva-51552310_smalignitemscenter",
        smAlignItemsFlexEnd: "gva-51552310_smalignitemsflexend",
        smAlignItemsFlexStart: "gva-51552310_smalignitemsflexstart",
        smAlignItemsStretch: "gva-51552310_smalignitemsstretch",
        mdAlignItemsBaseline: "gva-51552310_mdalignitemsbaseline",
        mdAlignItemsCenter: "gva-51552310_mdalignitemscenter",
        mdAlignItemsFlexEnd: "gva-51552310_mdalignitemsflexend",
        mdAlignItemsFlexStart: "gva-51552310_mdalignitemsflexstart",
        mdAlignItemsStretch: "gva-51552310_mdalignitemsstretch",
        lgAlignItemsBaseline: "gva-51552310_lgalignitemsbaseline",
        lgAlignItemsCenter: "gva-51552310_lgalignitemscenter",
        lgAlignItemsFlexEnd: "gva-51552310_lgalignitemsflexend",
        lgAlignItemsFlexStart: "gva-51552310_lgalignitemsflexstart",
        lgAlignItemsStretch: "gva-51552310_lgalignitemsstretch",
        xlAlignItemsBaseline: "gva-51552310_xlalignitemsbaseline",
        xlAlignItemsCenter: "gva-51552310_xlalignitemscenter",
        xlAlignItemsFlexEnd: "gva-51552310_xlalignitemsflexend",
        xlAlignItemsFlexStart: "gva-51552310_xlalignitemsflexstart",
        xlAlignItemsStretch: "gva-51552310_xlalignitemsstretch",
        flexDirectionColumn: "gva-51552310_flexdirectioncolumn",
        flexDirectionColumnReverse: "gva-51552310_flexdirectioncolumnreverse",
        flexDirectionRow: "gva-51552310_flexdirectionrow",
        flexDirectionRowReverse: "gva-51552310_flexdirectionrowreverse",
        smFlexDirectionColumn: "gva-51552310_smflexdirectioncolumn",
        smFlexDirectionColumnReverse: "gva-51552310_smflexdirectioncolumnreverse",
        smFlexDirectionRow: "gva-51552310_smflexdirectionrow",
        smFlexDirectionRowReverse: "gva-51552310_smflexdirectionrowreverse",
        mdFlexDirectionColumn: "gva-51552310_mdflexdirectioncolumn",
        mdFlexDirectionColumnReverse: "gva-51552310_mdflexdirectioncolumnreverse",
        mdFlexDirectionRow: "gva-51552310_mdflexdirectionrow",
        mdFlexDirectionRowReverse: "gva-51552310_mdflexdirectionrowreverse",
        lgFlexDirectionColumn: "gva-51552310_lgflexdirectioncolumn",
        lgFlexDirectionColumnReverse: "gva-51552310_lgflexdirectioncolumnreverse",
        lgFlexDirectionRow: "gva-51552310_lgflexdirectionrow",
        lgFlexDirectionRowReverse: "gva-51552310_lgflexdirectionrowreverse",
        xlFlexDirectionColumn: "gva-51552310_xlflexdirectioncolumn",
        xlFlexDirectionColumnReverse: "gva-51552310_xlflexdirectioncolumnreverse",
        xlFlexDirectionRow: "gva-51552310_xlflexdirectionrow",
        xlFlexDirectionRowReverse: "gva-51552310_xlflexdirectionrowreverse",
        flexWrapNowrap: "gva-51552310_flexwrapnowrap",
        flexWrapWrap: "gva-51552310_flexwrapwrap",
        flexWrapWrapReverse: "gva-51552310_flexwrapwrapreverse",
        smFlexWrapNowrap: "gva-51552310_smflexwrapnowrap",
        smFlexWrapWrap: "gva-51552310_smflexwrapwrap",
        smFlexWrapWrapReverse: "gva-51552310_smflexwrapwrapreverse",
        mdFlexWrapNowrap: "gva-51552310_mdflexwrapnowrap",
        mdFlexWrapWrap: "gva-51552310_mdflexwrapwrap",
        mdFlexWrapWrapReverse: "gva-51552310_mdflexwrapwrapreverse",
        lgFlexWrapNowrap: "gva-51552310_lgflexwrapnowrap",
        lgFlexWrapWrap: "gva-51552310_lgflexwrapwrap",
        lgFlexWrapWrapReverse: "gva-51552310_lgflexwrapwrapreverse",
        xlFlexWrapNowrap: "gva-51552310_xlflexwrapnowrap",
        xlFlexWrapWrap: "gva-51552310_xlflexwrapwrap",
        xlFlexWrapWrapReverse: "gva-51552310_xlflexwrapwrapreverse",
        justifyContentCenter: "gva-51552310_justifycontentcenter",
        justifyContentFlexEnd: "gva-51552310_justifycontentflexend",
        justifyContentFlexStart: "gva-51552310_justifycontentflexstart",
        justifyContentSpaceAround: "gva-51552310_justifycontentspacearound",
        justifyContentSpaceBetween: "gva-51552310_justifycontentspacebetween",
        justifyContentSpaceEvenly: "gva-51552310_justifycontentspaceevenly",
        smJustifyContentCenter: "gva-51552310_smjustifycontentcenter",
        smJustifyContentFlexEnd: "gva-51552310_smjustifycontentflexend",
        smJustifyContentFlexStart: "gva-51552310_smjustifycontentflexstart",
        smJustifyContentSpaceAround: "gva-51552310_smjustifycontentspacearound",
        smJustifyContentSpaceBetween: "gva-51552310_smjustifycontentspacebetween",
        smJustifyContentSpaceEvenly: "gva-51552310_smjustifycontentspaceevenly",
        mdJustifyContentCenter: "gva-51552310_mdjustifycontentcenter",
        mdJustifyContentFlexEnd: "gva-51552310_mdjustifycontentflexend",
        mdJustifyContentFlexStart: "gva-51552310_mdjustifycontentflexstart",
        mdJustifyContentSpaceAround: "gva-51552310_mdjustifycontentspacearound",
        mdJustifyContentSpaceBetween: "gva-51552310_mdjustifycontentspacebetween",
        mdJustifyContentSpaceEvenly: "gva-51552310_mdjustifycontentspaceevenly",
        lgJustifyContentCenter: "gva-51552310_lgjustifycontentcenter",
        lgJustifyContentFlexEnd: "gva-51552310_lgjustifycontentflexend",
        lgJustifyContentFlexStart: "gva-51552310_lgjustifycontentflexstart",
        lgJustifyContentSpaceAround: "gva-51552310_lgjustifycontentspacearound",
        lgJustifyContentSpaceBetween: "gva-51552310_lgjustifycontentspacebetween",
        lgJustifyContentSpaceEvenly: "gva-51552310_lgjustifycontentspaceevenly",
        xlJustifyContentCenter: "gva-51552310_xljustifycontentcenter",
        xlJustifyContentFlexEnd: "gva-51552310_xljustifycontentflexend",
        xlJustifyContentFlexStart: "gva-51552310_xljustifycontentflexstart",
        xlJustifyContentSpaceAround: "gva-51552310_xljustifycontentspacearound",
        xlJustifyContentSpaceBetween: "gva-51552310_xljustifycontentspacebetween",
        xlJustifyContentSpaceEvenly: "gva-51552310_xljustifycontentspaceevenly"
    }
}, function(e, t, n) {
    e.exports = {
        center: "gva-f57f2db7_center",
        inherit: "gva-f57f2db7_inherit",
        justify: "gva-f57f2db7_justify",
        left: "gva-f57f2db7_left",
        right: "gva-f57f2db7_right"
    }
}, function(e, t, n) {
    e.exports = {
        inherit: "gva-ec921d76_inherit",
        none: "gva-ec921d76_none",
        capitalize: "gva-ec921d76_capitalize",
        uppercase: "gva-ec921d76_uppercase",
        lowercase: "gva-ec921d76_lowercase"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-670aa423_root",
        small: "gva-670aa423_small",
        medium: "gva-670aa423_medium",
        large: "gva-670aa423_large",
        xLarge: "gva-670aa423_xlarge"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(14),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()(((t = {})[i.a.displayInline] = "inline" === e, t[i.a.displayBlock] = "block" === e, t[i.a.displayFlex] = "flex" === e, t[i.a.displayGrid] = "grid" === e, t[i.a.displayInlineBlock] = "inline-block" === e, t[i.a.displayInlineFlex] = "inline-flex" === e, t[i.a.displayInlineGrid] = "inline-grid" === e, t[i.a.displayInlineTable] = "inline-table" === e, t[i.a.displayListItem] = "list-item" === e, t[i.a.displayRunIn] = "run-in" === e, t[i.a.displayTable] = "table" === e, t[i.a.displayTableCaption] = "table-caption" === e, t[i.a.displayTableColumnGroup] = "table-column-group" === e, t[i.a.displayTableHeaderGroup] = "table-header-group" === e, t[i.a.displayTableFooterGroup] = "table-footer-group" === e, t[i.a.displayTableRowGroup] = "table-row-group" === e, t[i.a.displayTableCell] = "table-cell" === e, t[i.a.displayTableColumn] = "table-column" === e, t[i.a.displayTableRow] = "table-row" === e, t[i.a.displayNone] = "none" === e, t[i.a.displayInitial] = "initial" === e, t[i.a.displayInherit] = "inherit" === e, t)), void 0]
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }));
    var r = n(4),
        a = n.n(r),
        o = n(27),
        i = ["fitIn", "smartCrop", "crop", "cropped"];

    function c(e, t) {
        return Object.entries(o.a).map((function(n) {
            var r = a()(n, 2),
                o = r[0],
                c = r[1];
            return "".concat(o).concat(t ? "_".concat(t) : "", ": ").concat(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "fitIn",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = i.includes(e),
                    r = n ? e : "fitIn";
                return "crop" === r ? "".concat(r, "(width: ").concat(t.width, ", height: ").concat(t.height, ", x1: $x1, x2: $x2, y1: $y1, y2: $y2, resizeMode: $resizeMode){\n      url\n      height\n      width\n    }") : "cropped" === r ? "".concat(r, "(width: ").concat(t.width, ", height: ").concat(t.height, ", resizeMode: $resizeMode){\n      url\n      height\n      width\n    }") : "".concat(r, "(width: ").concat(t.width, ", height: ").concat(t.height, "){\n    url\n    height\n    width\n  }")
            }(e, c))
        })).join(" ")
    }
}, function(e, t, n) {
    e.exports = {
        tagList: "gva-96325640_taglist",
        noBorderLeft: "gva-96325640_noborderleft",
        noBorderRadiusLeft: "gva-96325640_noborderradiusleft",
        noBorderRadiusRight: "gva-96325640_noborderradiusright"
    }
}, function(e, t, n) {
    e.exports = {
        inherit: "gva-d8d142a5_inherit",
        none: "gva-d8d142a5_none",
        underline: "gva-d8d142a5_underline",
        lineThrough: "gva-d8d142a5_linethrough"
    }
}, function(e, t, n) {
    e.exports = {
        inherit: "gva-43ddc4a2_inherit",
        primary: "gva-43ddc4a2_primary",
        secondary: "gva-43ddc4a2_secondary",
        system: "gva-43ddc4a2_system"
    }
}, function(e, t, n) {
    e.exports = {
        inherit: "gva-f2f864c3_inherit",
        normal: "gva-f2f864c3_normal",
        italic: "gva-f2f864c3_italic",
        oblique: "gva-f2f864c3_oblique"
    }
}, function(e, t, n) {
    e.exports = {
        inherit: "gva-24ab25d4_inherit",
        regular: "gva-24ab25d4_regular",
        medium: "gva-24ab25d4_medium",
        bold: "gva-24ab25d4_bold"
    }
}, function(e, t, n) {
    e.exports = {
        marginBottom1: "gva-52f5cff9_marginbottom1",
        marginBottom2: "gva-52f5cff9_marginbottom2",
        marginBottom3: "gva-52f5cff9_marginbottom3",
        marginBottom4: "gva-52f5cff9_marginbottom4",
        marginBottom5: "gva-52f5cff9_marginbottom5",
        marginBottom6: "gva-52f5cff9_marginbottom6",
        marginBottom7: "gva-52f5cff9_marginbottom7",
        marginBottom8: "gva-52f5cff9_marginbottom8",
        marginBottom9: "gva-52f5cff9_marginbottom9",
        marginBottom10: "gva-52f5cff9_marginbottom10",
        marginBottom11: "gva-52f5cff9_marginbottom11",
        marginBottom0: "gva-52f5cff9_marginbottom0",
        marginBottomauto: "gva-52f5cff9_marginbottomauto",
        marginLeft1: "gva-52f5cff9_marginleft1",
        marginLeft2: "gva-52f5cff9_marginleft2",
        marginLeft3: "gva-52f5cff9_marginleft3",
        marginLeft4: "gva-52f5cff9_marginleft4",
        marginLeft5: "gva-52f5cff9_marginleft5",
        marginLeft6: "gva-52f5cff9_marginleft6",
        marginLeft7: "gva-52f5cff9_marginleft7",
        marginLeft8: "gva-52f5cff9_marginleft8",
        marginLeft9: "gva-52f5cff9_marginleft9",
        marginLeft10: "gva-52f5cff9_marginleft10",
        marginLeft11: "gva-52f5cff9_marginleft11",
        marginLeft0: "gva-52f5cff9_marginleft0",
        marginLeftauto: "gva-52f5cff9_marginleftauto",
        marginRight1: "gva-52f5cff9_marginright1",
        marginRight2: "gva-52f5cff9_marginright2",
        marginRight3: "gva-52f5cff9_marginright3",
        marginRight4: "gva-52f5cff9_marginright4",
        marginRight5: "gva-52f5cff9_marginright5",
        marginRight6: "gva-52f5cff9_marginright6",
        marginRight7: "gva-52f5cff9_marginright7",
        marginRight8: "gva-52f5cff9_marginright8",
        marginRight9: "gva-52f5cff9_marginright9",
        marginRight10: "gva-52f5cff9_marginright10",
        marginRight11: "gva-52f5cff9_marginright11",
        marginRight0: "gva-52f5cff9_marginright0",
        marginRightauto: "gva-52f5cff9_marginrightauto",
        marginTop1: "gva-52f5cff9_margintop1",
        marginTop2: "gva-52f5cff9_margintop2",
        marginTop3: "gva-52f5cff9_margintop3",
        marginTop4: "gva-52f5cff9_margintop4",
        marginTop5: "gva-52f5cff9_margintop5",
        marginTop6: "gva-52f5cff9_margintop6",
        marginTop7: "gva-52f5cff9_margintop7",
        marginTop8: "gva-52f5cff9_margintop8",
        marginTop9: "gva-52f5cff9_margintop9",
        marginTop10: "gva-52f5cff9_margintop10",
        marginTop11: "gva-52f5cff9_margintop11",
        marginTop0: "gva-52f5cff9_margintop0",
        marginTopauto: "gva-52f5cff9_margintopauto",
        marginBottomNegative1: "gva-52f5cff9_marginbottomnegative1",
        marginBottomNegative2: "gva-52f5cff9_marginbottomnegative2",
        marginBottomNegative3: "gva-52f5cff9_marginbottomnegative3",
        marginBottomNegative4: "gva-52f5cff9_marginbottomnegative4",
        marginBottomNegative5: "gva-52f5cff9_marginbottomnegative5",
        marginBottomNegative6: "gva-52f5cff9_marginbottomnegative6",
        marginBottomNegative7: "gva-52f5cff9_marginbottomnegative7",
        marginBottomNegative8: "gva-52f5cff9_marginbottomnegative8",
        marginBottomNegative9: "gva-52f5cff9_marginbottomnegative9",
        marginBottomNegative10: "gva-52f5cff9_marginbottomnegative10",
        marginBottomNegative11: "gva-52f5cff9_marginbottomnegative11",
        marginLeftNegative1: "gva-52f5cff9_marginleftnegative1",
        marginLeftNegative2: "gva-52f5cff9_marginleftnegative2",
        marginLeftNegative3: "gva-52f5cff9_marginleftnegative3",
        marginLeftNegative4: "gva-52f5cff9_marginleftnegative4",
        marginLeftNegative5: "gva-52f5cff9_marginleftnegative5",
        marginLeftNegative6: "gva-52f5cff9_marginleftnegative6",
        marginLeftNegative7: "gva-52f5cff9_marginleftnegative7",
        marginLeftNegative8: "gva-52f5cff9_marginleftnegative8",
        marginLeftNegative9: "gva-52f5cff9_marginleftnegative9",
        marginLeftNegative10: "gva-52f5cff9_marginleftnegative10",
        marginLeftNegative11: "gva-52f5cff9_marginleftnegative11",
        marginRightNegative1: "gva-52f5cff9_marginrightnegative1",
        marginRightNegative2: "gva-52f5cff9_marginrightnegative2",
        marginRightNegative3: "gva-52f5cff9_marginrightnegative3",
        marginRightNegative4: "gva-52f5cff9_marginrightnegative4",
        marginRightNegative5: "gva-52f5cff9_marginrightnegative5",
        marginRightNegative6: "gva-52f5cff9_marginrightnegative6",
        marginRightNegative7: "gva-52f5cff9_marginrightnegative7",
        marginRightNegative8: "gva-52f5cff9_marginrightnegative8",
        marginRightNegative9: "gva-52f5cff9_marginrightnegative9",
        marginRightNegative10: "gva-52f5cff9_marginrightnegative10",
        marginRightNegative11: "gva-52f5cff9_marginrightnegative11",
        marginTopNegative1: "gva-52f5cff9_margintopnegative1",
        marginTopNegative2: "gva-52f5cff9_margintopnegative2",
        marginTopNegative3: "gva-52f5cff9_margintopnegative3",
        marginTopNegative4: "gva-52f5cff9_margintopnegative4",
        marginTopNegative5: "gva-52f5cff9_margintopnegative5",
        marginTopNegative6: "gva-52f5cff9_margintopnegative6",
        marginTopNegative7: "gva-52f5cff9_margintopnegative7",
        marginTopNegative8: "gva-52f5cff9_margintopnegative8",
        marginTopNegative9: "gva-52f5cff9_margintopnegative9",
        marginTopNegative10: "gva-52f5cff9_margintopnegative10",
        marginTopNegative11: "gva-52f5cff9_margintopnegative11"
    }
}, function(e, t, n) {
    e.exports = {
        paddingBottom0: "gva-27a51796_paddingbottom0",
        paddingBottom1: "gva-27a51796_paddingbottom1",
        paddingBottom2: "gva-27a51796_paddingbottom2",
        paddingBottom3: "gva-27a51796_paddingbottom3",
        paddingBottom4: "gva-27a51796_paddingbottom4",
        paddingBottom5: "gva-27a51796_paddingbottom5",
        paddingBottom6: "gva-27a51796_paddingbottom6",
        paddingBottom7: "gva-27a51796_paddingbottom7",
        paddingBottom8: "gva-27a51796_paddingbottom8",
        paddingBottom9: "gva-27a51796_paddingbottom9",
        paddingBottom10: "gva-27a51796_paddingbottom10",
        paddingBottom11: "gva-27a51796_paddingbottom11",
        paddingLeft0: "gva-27a51796_paddingleft0",
        paddingLeft1: "gva-27a51796_paddingleft1",
        paddingLeft2: "gva-27a51796_paddingleft2",
        paddingLeft3: "gva-27a51796_paddingleft3",
        paddingLeft4: "gva-27a51796_paddingleft4",
        paddingLeft5: "gva-27a51796_paddingleft5",
        paddingLeft6: "gva-27a51796_paddingleft6",
        paddingLeft7: "gva-27a51796_paddingleft7",
        paddingLeft8: "gva-27a51796_paddingleft8",
        paddingLeft9: "gva-27a51796_paddingleft9",
        paddingLeft10: "gva-27a51796_paddingleft10",
        paddingLeft11: "gva-27a51796_paddingleft11",
        paddingRight0: "gva-27a51796_paddingright0",
        paddingRight1: "gva-27a51796_paddingright1",
        paddingRight2: "gva-27a51796_paddingright2",
        paddingRight3: "gva-27a51796_paddingright3",
        paddingRight4: "gva-27a51796_paddingright4",
        paddingRight5: "gva-27a51796_paddingright5",
        paddingRight6: "gva-27a51796_paddingright6",
        paddingRight7: "gva-27a51796_paddingright7",
        paddingRight8: "gva-27a51796_paddingright8",
        paddingRight9: "gva-27a51796_paddingright9",
        paddingRight10: "gva-27a51796_paddingright10",
        paddingRight11: "gva-27a51796_paddingright11",
        paddingTop0: "gva-27a51796_paddingtop0",
        paddingTop1: "gva-27a51796_paddingtop1",
        paddingTop2: "gva-27a51796_paddingtop2",
        paddingTop3: "gva-27a51796_paddingtop3",
        paddingTop4: "gva-27a51796_paddingtop4",
        paddingTop5: "gva-27a51796_paddingtop5",
        paddingTop6: "gva-27a51796_paddingtop6",
        paddingTop7: "gva-27a51796_paddingtop7",
        paddingTop8: "gva-27a51796_paddingtop8",
        paddingTop9: "gva-27a51796_paddingtop9",
        paddingTop10: "gva-27a51796_paddingtop10",
        paddingTop11: "gva-27a51796_paddingtop11"
    }
}, function(e, t, n) {
    e.exports = {
        positionAbsolute: "gva-decdb07e_positionabsolute",
        positionFixed: "gva-decdb07e_positionfixed",
        positionRelative: "gva-decdb07e_positionrelative",
        positionSticky: "gva-decdb07e_positionsticky"
    }
}, function(e, t, n) {
    e.exports = {
        left1: "gva-da8381e_left1",
        left2: "gva-da8381e_left2",
        left3: "gva-da8381e_left3",
        left4: "gva-da8381e_left4",
        left5: "gva-da8381e_left5",
        left6: "gva-da8381e_left6",
        left7: "gva-da8381e_left7",
        left8: "gva-da8381e_left8",
        left9: "gva-da8381e_left9",
        left10: "gva-da8381e_left10",
        left11: "gva-da8381e_left11",
        left0: "gva-da8381e_left0",
        right1: "gva-da8381e_right1",
        right2: "gva-da8381e_right2",
        right3: "gva-da8381e_right3",
        right4: "gva-da8381e_right4",
        right5: "gva-da8381e_right5",
        right6: "gva-da8381e_right6",
        right7: "gva-da8381e_right7",
        right8: "gva-da8381e_right8",
        right9: "gva-da8381e_right9",
        right10: "gva-da8381e_right10",
        right11: "gva-da8381e_right11",
        right0: "gva-da8381e_right0",
        top1: "gva-da8381e_top1",
        top2: "gva-da8381e_top2",
        top3: "gva-da8381e_top3",
        top4: "gva-da8381e_top4",
        top5: "gva-da8381e_top5",
        top6: "gva-da8381e_top6",
        top7: "gva-da8381e_top7",
        top8: "gva-da8381e_top8",
        top9: "gva-da8381e_top9",
        top10: "gva-da8381e_top10",
        top11: "gva-da8381e_top11",
        top0: "gva-da8381e_top0",
        bottom1: "gva-da8381e_bottom1",
        bottom2: "gva-da8381e_bottom2",
        bottom3: "gva-da8381e_bottom3",
        bottom4: "gva-da8381e_bottom4",
        bottom5: "gva-da8381e_bottom5",
        bottom6: "gva-da8381e_bottom6",
        bottom7: "gva-da8381e_bottom7",
        bottom8: "gva-da8381e_bottom8",
        bottom9: "gva-da8381e_bottom9",
        bottom10: "gva-da8381e_bottom10",
        bottom11: "gva-da8381e_bottom11",
        bottom0: "gva-da8381e_bottom0"
    }
}, function(e, t, n) {
    e.exports = {
        figure: "gva-a466b963_figure",
        figcaption: "gva-a466b963_figcaption",
        alignLeft: "gva-a466b963_alignleft",
        alignRight: "gva-a466b963_alignright",
        alignCenter: "gva-a466b963_aligncenter"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-57c4c815_root",
        system: "gva-57c4c815_system",
        branded: "gva-57c4c815_branded",
        disabled: "gva-57c4c815_disabled"
    }
}, function(e, t, n) {
    e.exports = {
        shareSticky: "gva-92611660_sharesticky",
        shareItemList: "gva-92611660_shareitemlist",
        shareListItem: "gva-92611660_sharelistitem",
        mobileOnly: "gva-92611660_mobileonly"
    }
}, function(e, t, n) {
    e.exports = {
        footerMin: "gva-7ed25308_footermin",
        footerItem: "gva-7ed25308_footeritem",
        footerMax: "gva-7ed25308_footermax",
        footerItemContent: "gva-7ed25308_footeritemcontent"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(55),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.auto] = "auto" === e, t[i.a.flexStart] = "flex-start" === e, t[i.a.flexEnd] = "flex-end" === e, t[i.a.center] = "center" === e, t[i.a.baseline] = "baseline" === e, t[i.a.stretch] = "stretch" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(23),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.brFill] = "fill" === e, t[i.a.brSides] = "sides" === e, t[i.a.br0] = 0 === e, t[i.a.br1] = 1 === e, t[i.a.br2] = 2 === e, t[i.a.br3] = 3 === e, t[i.a.br4] = 4 === e, t[i.a.br5] = 5 === e, t[i.a.br6] = 6 === e, t[i.a.br7] = 7 === e, t[i.a.br8] = 8 === e, t[i.a.br9] = 9 === e, t[i.a.br10] = 10 === e, t[i.a.br11] = 11 === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(69),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.inherit] = "inherit" === e, t[i.a.none] = "none" === e, t[i.a.underline] = "underline" === e, t[i.a.lineThrough] = "line-through" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(104),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.floatLeft] = "left" === e, t[i.a.floatRight] = "right" === e, t[i.a.floatNone] = "none" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(70),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.inherit] = "inherit" === e, t[i.a.primary] = "primary" === e, t[i.a.secondary] = "secondary" === e, t[i.a.system] = "system" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(71),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.inherit] = "inherit" === e, t[i.a.normal] = "normal" === e, t[i.a.italic] = "italic" === e, t[i.a.oblique] = "oblique" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(72),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.inherit] = "inherit" === e, t[i.a.regular] = "regular" === e, t[i.a.medium] = "medium" === e, t[i.a.bold] = "bold" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(49),
        a = n(115),
        o = n(50),
        i = n(73),
        c = n.n(i),
        l = [-11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "auto"],
        u = function(e) {
            return e < 0 ? "Negative" + Math.abs(e) : e
        };
    t.a = function(e, t, n, i, s, f, d) {
        var v, g = Object(r.a)(l, [t, d, e]),
            h = Object(r.a)(l, [n, f, e]),
            p = Object(r.a)(l, [i, f, e]),
            m = Object(r.a)(l, [s, d, e]);
        return [Object(a.a)(((v = {})[c.a["marginBottom" + u(g)]] = Object(o.a)(g), v[c.a["marginLeft" + u(h)]] = Object(o.a)(h), v[c.a["marginRight" + u(p)]] = Object(o.a)(p), v[c.a["marginTop" + u(m)]] = Object(o.a)(m), v))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(49),
        a = n(115),
        o = n(50),
        i = n(74),
        c = n.n(i),
        l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    t.a = function(e, t, n, i, u, s, f) {
        var d, v = Object(r.a)(l, [t, f, e]),
            g = Object(r.a)(l, [n, s, e]),
            h = Object(r.a)(l, [i, s, e]),
            p = Object(r.a)(l, [u, f, e]);
        return [Object(a.a)(((d = {})[c.a["paddingBottom" + v]] = Object(o.a)(v), d[c.a["paddingLeft" + g]] = Object(o.a)(g), d[c.a["paddingRight" + h]] = Object(o.a)(h), d[c.a["paddingTop" + p]] = Object(o.a)(p), d))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(75),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.positionAbsolute] = "absolute" === e, t[i.a.positionRelative] = "relative" === e, t[i.a.positionFixed] = "fixed" === e, t[i.a.positionSticky] = "sticky" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(63),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.center] = "center" === e, t[i.a.inherit] = "inherit" === e, t[i.a.justify] = "justify" === e, t[i.a.left] = "left" === e, t[i.a.right] = "right" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(64),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.inherit] = "inherit" === e, t[i.a.none] = "none" === e, t[i.a.capitalize] = "capitalize" === e, t[i.a.uppercase] = "uppercase" === e, t[i.a.lowercase] = "lowercase" === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(37),
        i = n.n(o);
    t.a = function(e) {
        var t;
        return [a()((t = {}, t[i.a.zIndex0] = 0 === e, t[i.a.zIndex100] = 100 === e, t[i.a.zIndex200] = 200 === e, t[i.a.zIndex300] = 300 === e, t[i.a.zIndex400] = 400 === e, t[i.a.zIndex500] = 500 === e, t[i.a.zIndex600] = 600 === e, t[i.a.zIndex700] = 700 === e, t[i.a.zIndex800] = 800 === e, t[i.a.zIndex900] = 900 === e, t))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(81),
        i = n(82),
        c = n(31),
        l = n(87),
        u = n(86),
        s = n(59),
        f = n(90),
        d = n(91),
        v = n(92),
        g = n(60),
        h = n(39),
        p = n(89),
        m = n(88),
        b = n(84),
        y = n(29),
        w = n(66),
        E = n(85),
        x = n(83),
        _ = n(93),
        O = n(115),
        R = function(e, t) {
            if (void 0 !== e || void 0 !== t) return void 0 !== e ? e : t
        };

    function z() {
        return (z = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    t.a = function(e) {
        var t = e.alignContent,
            n = e.alignItems,
            r = e.alignSelf,
            C = e.bgColor,
            M = e.borderBottomColor,
            A = e.borderBottomStyle,
            j = e.borderBottomWidth,
            S = e.borderColor,
            L = e.borderLeftColor,
            B = e.borderLeftStyle,
            P = e.borderLeftWidth,
            T = e.borderRadius,
            k = e.borderRightColor,
            H = e.borderRightStyle,
            I = e.borderRightWidth,
            F = e.borderStyle,
            D = e.borderTopColor,
            N = e.borderTopStyle,
            V = e.borderTopWidth,
            W = e.borderWidth,
            U = e.bottom,
            $ = e.className,
            G = e.color,
            Y = e.decoration,
            q = e.display,
            J = e.flex,
            K = e.flexBasis,
            X = e.flexDirection,
            Z = e.flexGrow,
            Q = e.flexShrink,
            ee = e.flexWrap,
            te = e.float,
            ne = e.fontFamily,
            re = e.fontStyle,
            ae = e.fontWeight,
            oe = e.height,
            ie = e.justifyContent,
            ce = e.left,
            le = e.m,
            ue = e.maxHeight,
            se = e.maxWidth,
            fe = e.mb,
            de = e.ml,
            ve = e.mr,
            ge = e.mt,
            he = e.mx,
            pe = e.my,
            me = e.order,
            be = e.p,
            ye = e.pb,
            we = e.pl,
            Ee = e.position,
            xe = e.pr,
            _e = e.pt,
            Oe = e.px,
            Re = e.py,
            ze = e.right,
            Ce = e.style,
            Me = e.textAlign,
            Ae = e.textTransform,
            je = e.top,
            Se = e.width,
            Le = e.zIndex,
            Be = Object(o.a)(r)[0],
            Pe = Object(i.a)(T)[0],
            Te = Object(c.a)(C)[1],
            ke = (G ? Object(c.a)(G) : Object(c.b)(C))[1],
            He = Object(c.a)(S)[1],
            Ie = Object(c.a)(D)[1],
            Fe = Object(c.a)(L)[1],
            De = Object(c.a)(k)[1],
            Ne = Object(c.a)(M)[1],
            Ve = Object(x.a)(Y)[0],
            We = Object(w.a)(q)[0],
            Ue = Object(b.a)(te)[0],
            $e = Object(E.a)(ne)[0],
            Ge = Object(u.a)(re)[0],
            Ye = Object(l.a)(ae)[0],
            qe = Object(s.a)(oe),
            Je = qe[0],
            Ke = qe[1],
            Xe = Object(s.b)(ue),
            Ze = Xe[0],
            Qe = Xe[1],
            et = Object(y.a)(t)[0],
            tt = Object(y.b)(n)[0],
            nt = Object(y.c)(X)[0],
            rt = Object(y.d)(ee)[0],
            at = Object(y.e)(ie)[0],
            ot = Object(m.a)(le, fe, de, ve, ge, he, pe)[0],
            it = Object(p.a)(be, ye, we, xe, _e, Oe, Re)[0],
            ct = Object(f.a)(Ee)[0],
            lt = Object(h.d)(je)[0],
            ut = Object(h.a)(U)[0],
            st = Object(h.b)(ce)[0],
            ft = Object(h.c)(ze)[0],
            dt = Object(d.a)(Me)[0],
            vt = Object(v.a)(Ae)[0],
            gt = Object(g.a)(Se),
            ht = gt[0],
            pt = gt[1],
            mt = Object(g.b)(se),
            bt = mt[0],
            yt = mt[1],
            wt = function(e, t, n, r) {
                return e ? [, e] : void 0 !== t || void 0 !== n || void 0 !== r ? [, (void 0 !== t ? t : 0) + " " + (void 0 !== n ? n : 1) + " " + (void 0 !== r ? r : "auto")] : [void 0, void 0]
            }(J, Z, Q, K)[1],
            Et = Object(_.a)(Le)[0];
        return [a()(et, tt, Be, Pe, ut, Ve, We, nt, rt, Ue, $e, Ge, Ye, Je, at, st, ot, Ze, bt, it, ct, ft, dt, vt, lt, ht, Et, $) || void 0, Object(O.a)(z({
            backgroundColor: Te,
            borderLeftColor: R(Fe, He),
            borderRightColor: R(De, He),
            borderTopColor: R(Ie, He),
            borderBottomColor: R(Ne, He),
            borderTopStyle: R(N, F),
            borderRightStyle: R(H, F),
            borderBottomStyle: R(A, F),
            borderLeftStyle: R(B, F),
            borderTopWidth: R(V, W),
            borderRightWidth: R(I, W),
            borderBottomWidth: R(j, W),
            borderLeftWidth: R(P, W),
            color: ke,
            flex: wt,
            height: Ke,
            maxHeight: Qe,
            order: me,
            width: pt,
            maxWidth: yt
        }, Ce))]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(146),
        l = n.n(c);

    function u() {
        return (u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var s = Object(r.forwardRef)((function(e, t) {
        var n = e.className,
            r = e.children,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, ["className", "children"]);
        return (a.a.createElement("span", u({
            ref: t,
            className: i()(l.a.root, n)
        }, o), r))
    }));
    s.displayName = "Screenreader", s.identifier = s.displayName, s.clonableProps = [], s.defaultProps = {}, t.a = s
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return i
    }));
    var r = n(0),
        a = Object(r.createContext)(null),
        o = a.Provider,
        i = function() {
            return Object(r.useContext)(a)
        }
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        return function(e, t, n) {
            var r = "h:mm A",
                a = {
                    lastDay: "[Yesterday at] " + r,
                    sameDay: "[Today at] " + r,
                    nextDay: "[Tomorrow at] " + r,
                    nextWeek: "dddd [at] " + r,
                    lastWeek: "[Last] dddd [at] " + r,
                    sameElse: "MM/DD/YYYY"
                };
            t.prototype.calendar = function(e, t) {
                var r = t || this.$locale().calendar || a,
                    o = n(e || void 0).startOf("d"),
                    i = this.diff(o, "d", !0),
                    c = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse",
                    l = r[c] || a[c];
                return "function" == typeof l ? l.call(this, n()) : this.format(l)
            }
        }
    }()
}, function(e, t, n) {
    e.exports = function(e) {
        "use strict";
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var t = {
            name: "nl-be",
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            weekStart: 1,
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            ordinal: function(e) {
                return e
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            }
        };
        return e.locale(t, null, !0), t
    }(n(22))
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        return function(e, t, n) {
            var r = t.prototype,
                a = r.format,
                o = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                };
            n.en.formats = o, r.format = function(e) {
                void 0 === e && (e = "YYYY-MM-DDTHH:mm:ssZ");
                var t = this.$locale().formats,
                    n = void 0 === t ? {} : t,
                    r = e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(e, t, r) {
                        var a = r && r.toUpperCase();
                        return t || n[r] || o[r] || n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, n) {
                            return t || n.slice(1)
                        }))
                    }));
                return a.call(this, r)
            }
        }
    }()
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        return function(e, t, n) {
            e = e || {};
            var r = t.prototype;
            n.en.relativeTime = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            var a = function(t, r, a, o) {
                for (var i, c, l, u = a.$locale().relativeTime, s = e.thresholds || [{
                        l: "s",
                        r: 44,
                        d: "second"
                    }, {
                        l: "m",
                        r: 89
                    }, {
                        l: "mm",
                        r: 44,
                        d: "minute"
                    }, {
                        l: "h",
                        r: 89
                    }, {
                        l: "hh",
                        r: 21,
                        d: "hour"
                    }, {
                        l: "d",
                        r: 35
                    }, {
                        l: "dd",
                        r: 25,
                        d: "day"
                    }, {
                        l: "M",
                        r: 45
                    }, {
                        l: "MM",
                        r: 10,
                        d: "month"
                    }, {
                        l: "y",
                        r: 17
                    }, {
                        l: "yy",
                        d: "year"
                    }], f = s.length, d = 0; d < f; d += 1) {
                    var v = s[d];
                    v.d && (i = o ? n(t).diff(a, v.d, !0) : a.diff(t, v.d, !0));
                    var g = (e.rounding || Math.round)(Math.abs(i));
                    if (l = i > 0, g <= v.r || !v.r) {
                        g <= 1 && d > 0 && (v = s[d - 1]);
                        var h = u[v.l];
                        c = "string" == typeof h ? h.replace("%d", g) : h(g, r, v.l, l);
                        break
                    }
                }
                return r ? c : (l ? u.future : u.past).replace("%s", c)
            };
            r.to = function(e, t) {
                return a(e, t, this, !0)
            }, r.from = function(e, t) {
                return a(e, t, this)
            };
            var o = function(e) {
                return e.$u ? n.utc() : n()
            };
            r.toNow = function(e) {
                return this.to(o(this), e)
            }, r.fromNow = function(e) {
                return this.from(o(this), e)
            }
        }
    }()
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(102),
        i = n(201),
        c = n(8);
    t.a = function(e) {
        var t = e.title,
            n = e.content;
        return a.a.createElement(o.a, {
            key: t,
            p: 0,
            my: Object(c.o)() ? 6 : 7,
            "data-test-id": "infoblock"
        }, t && a.a.createElement(i.a, {
            as: "h2",
            fontFamily: "primary",
            fontWeight: "medium",
            color: "colorTextBlackBase",
            level: 3,
            mb: 6
        }, t), (null == n ? void 0 : n.length) > 0 && Object(c.b)(n))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(18),
        i = n(115),
        c = n(94),
        l = n(51),
        u = n(54);

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var f = function(e) {
        var t = e.allPropsObj,
            n = e.children,
            r = e.className,
            o = e.rest,
            i = e.style,
            l = e.usedProps;
        return a.a.Children.map(n, (function(e) {
            var n = e.type.clonableProps ? Object(u.a)(e.type.clonableProps) : [];
            ! function(e, t, n) {
                Object.keys(t).forEach((function(t) {
                    e.includes(t) || console.warn('Box clone: "' + t + '" is not allowed in "' + n + '".')
                }))
            }(n, l, e.type.displayName);
            var f = Object(u.b)(t, n),
                d = Object(c.a)(s({}, f, {
                    className: r,
                    style: i
                })),
                v = d[0],
                g = d[1];
            return a.a.cloneElement(e, s({
                style: g,
                className: v
            }, o), e.props.children)
        }))
    };

    function d() {
        return (d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var v = Object(r.forwardRef)((function(e, t) {
        var n = e.alignContent,
            r = e.alignItems,
            l = e.alignSelf,
            u = e.bgColor,
            s = e.borderBottomColor,
            v = e.borderBottomStyle,
            g = e.borderBottomWidth,
            h = e.borderColor,
            p = e.borderLeftColor,
            m = e.borderLeftStyle,
            b = e.borderLeftWidth,
            y = e.borderRadius,
            w = e.borderRightColor,
            E = e.borderRightStyle,
            x = e.borderRightWidth,
            _ = e.borderStyle,
            O = e.borderTopColor,
            R = e.borderTopStyle,
            z = e.borderTopWidth,
            C = e.borderWidth,
            M = e.bottom,
            A = e.children,
            j = e.className,
            S = e.clone,
            L = e.color,
            B = e.display,
            P = e.flex,
            T = e.flexBasis,
            k = e.flexDirection,
            H = e.flexGrow,
            I = e.flexShrink,
            F = e.flexWrap,
            D = e.float,
            N = e.fontStyle,
            V = e.fontWeight,
            W = e.height,
            U = e.justifyContent,
            $ = e.left,
            G = e.m,
            Y = e.maxHeight,
            q = e.maxWidth,
            J = e.mb,
            K = e.ml,
            X = e.mr,
            Z = e.mt,
            Q = e.mx,
            ee = e.my,
            te = e.order,
            ne = e.p,
            re = e.pb,
            ae = e.pl,
            oe = e.position,
            ie = e.pr,
            ce = e.pt,
            le = e.px,
            ue = e.py,
            se = e.right,
            fe = e.style,
            de = e.textAlign,
            ve = e.textTransform,
            ge = e.top,
            he = e.width,
            pe = e.zIndex,
            me = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, ["alignContent", "alignItems", "alignSelf", "bgColor", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderColor", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRadius", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderStyle", "borderTopColor", "borderTopStyle", "borderTopWidth", "borderWidth", "bottom", "children", "className", "clone", "color", "display", "flex", "flexBasis", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "float", "fontStyle", "fontWeight", "height", "justifyContent", "left", "m", "maxHeight", "maxWidth", "mb", "ml", "mr", "mt", "mx", "my", "order", "p", "pb", "pl", "position", "pr", "pt", "px", "py", "right", "style", "textAlign", "textTransform", "top", "width", "zIndex"]),
            be = {
                alignContent: n,
                alignItems: r,
                alignSelf: l,
                bgColor: u,
                borderBottomColor: s,
                borderBottomStyle: v,
                borderBottomWidth: g,
                borderColor: h,
                borderLeftColor: p,
                borderLeftStyle: m,
                borderLeftWidth: b,
                borderRadius: y,
                borderRightColor: w,
                borderRightStyle: E,
                borderRightWidth: x,
                borderStyle: _,
                borderTopColor: O,
                borderTopStyle: R,
                borderTopWidth: z,
                borderWidth: C,
                bottom: M,
                color: L,
                display: B,
                flex: P,
                flexBasis: T,
                flexDirection: k,
                flexGrow: H,
                flexShrink: I,
                flexWrap: F,
                float: D,
                fontStyle: N,
                fontWeight: V,
                height: W,
                justifyContent: U,
                left: $,
                m: G,
                maxHeight: Y,
                maxWidth: q,
                mb: J,
                ml: K,
                mr: X,
                mt: Z,
                mx: Q,
                my: ee,
                order: te,
                p: ne,
                pb: re,
                pl: ae,
                position: oe,
                pr: ie,
                pt: ce,
                px: le,
                py: ue,
                right: se,
                textAlign: de,
                textTransform: ve,
                top: ge,
                width: he,
                zIndex: pe
            },
            ye = Object(i.a)(be);
        if (S) return f({
            children: A,
            className: j,
            usedProps: ye,
            allPropsObj: be,
            rest: me,
            style: fe
        });
        var we = Object(c.a)(d({}, ye, {
                className: j,
                style: fe
            })),
            Ee = we[0],
            xe = we[1];
        return (a.a.createElement(o.a, d({
            className: Ee,
            ref: t,
            style: xe
        }, me), A))
    }));
    v.displayName = "Box", v.identifier = v.displayName, v.aliases = l.a, v.defaultProps = {};
    t.a = v
}, function(e, t, n) {
    e.exports = {
        message: "gva-53faab65_message",
        messageIsVisible: "gva-53faab65_messageisvisible",
        messageIsHidden: "gva-53faab65_messageishidden"
    }
}, function(e, t, n) {
    e.exports = {
        floatLeft: "gva-5dfb37_floatleft",
        floatRight: "gva-5dfb37_floatright",
        floatNone: "gva-5dfb37_floatnone"
    }
}, function(e, t, n) {
    e.exports = {
        digestHeader: "gva-eda4204c_digestheader",
        digestBody: "gva-eda4204c_digestbody",
        digestFooter: "gva-eda4204c_digestfooter",
        digestMob: "gva-eda4204c_digestmob",
        digestPub: "gva-eda4204c_digestpub"
    }
}, function(e, t, n) {
    e.exports = {
        boxColumn: "gva-a5a70c0_boxcolumn",
        contentWrapper: "gva-a5a70c0_contentwrapper"
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        if (!(!e || t && t.includes(e) || "string" != typeof e)) return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9);
    t.a = function(e) {
        return r[e]
    }
}, function(e, t, n) {
    "use strict";
    t.ReactNativeFile = n(116), t.extractFiles = n(162), t.isExtractableFile = n(117)
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        class e {
            constructor(e = 0, t = 0) {
                this.first = null, this.items = Object.create(null), this.last = null, this.max = e, this.size = 0, this.ttl = t
            }
            has(e) {
                return e in this.items
            }
            clear() {
                return this.first = null, this.items = Object.create(null), this.last = null, this.size = 0, this
            }
            delete(e) {
                if (this.has(e)) {
                    const t = this.items[e];
                    delete this.items[e], this.size--, null !== t.prev && (t.prev.next = t.next), null !== t.next && (t.next.prev = t.prev), this.first === t && (this.first = t.next), this.last === t && (this.last = t.prev)
                }
                return this
            }
            evict() {
                const e = this.first;
                return delete this.items[e.key], this.first = e.next, this.first.prev = null, this.size--, this
            }
            get(e) {
                let t;
                if (this.has(e)) {
                    const n = this.items[e];
                    this.ttl > 0 && n.expiry <= (new Date).getTime() ? this.delete(e) : (t = n.value, this.set(e, t, !0))
                }
                return t
            }
            keys() {
                return Object.keys(this.items)
            }
            set(e, t, n = !1) {
                let r;
                if (n || this.has(e)) {
                    if (r = this.items[e], r.value = t, !1 === n && (r.expiry = this.ttl > 0 ? (new Date).getTime() + this.ttl : this.ttl), this.last !== r) {
                        const e = this.last,
                            t = r.next,
                            n = r.prev;
                        this.first === r && (this.first = r.next), r.next = null, r.prev = this.last, e.next = r, null !== n && (n.next = t), null !== t && (t.prev = n)
                    }
                } else this.max > 0 && this.size === this.max && this.evict(), r = this.items[e] = {
                    expiry: this.ttl > 0 ? (new Date).getTime() + this.ttl : this.ttl,
                    key: e,
                    prev: this.last,
                    next: null,
                    value: t
                }, 1 == ++this.size ? this.first = r : this.last.next = r;
                return this.last = r, this
            }
        }
        return function(t = 1e3, n = 0) {
            if (isNaN(t) || t < 0) throw new TypeError("Invalid max value");
            if (isNaN(n) || n < 0) throw new TypeError("Invalid ttl value");
            return new e(t, n)
        }
    }()
}, function(e, t, n) {
    e.exports = {
        root: "gva-850fa7e3_root",
        placeholder: "gva-850fa7e3_placeholder"
    }
}, function(e, t, n) {
    e.exports = {
        mediaWrapper: "gva-75019743_mediawrapper",
        clearfix: "gva-75019743_clearfix"
    }
}, function(e, t, n) {
    e.exports = {
        figure: "gva-327307c8_figure",
        imageTag: "gva-327307c8_imagetag"
    }
}, function(e, t, n) {
    e.exports = {
        header: "gva-be814012_header",
        headerPrefix: "gva-be814012_headerprefix"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(30),
        a = n.n(r);
    t.a = function e(t, n) {
        return void 0 === n && (n = !1), Object.keys(t).forEach((function(r) {
            t[r] && "object" === a()(t[r]) && n ? e(t[r]) : void 0 === t[r] && delete t[r]
        })), t
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.uri,
            n = e.name,
            r = e.type;
        this.uri = t, this.name = n, this.type = r
    }
}, function(e, t, n) {
    "use strict";
    var r = n(116);
    e.exports = function(e) {
        return "undefined" != typeof File && e instanceof File || "undefined" != typeof Blob && e instanceof Blob || e instanceof r
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26);

    function a(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var o;
        if (n) o = n(t);
        else if (r.isURLSearchParams(t)) o = t.toString();
        else {
            var i = [];
            r.forEach(t, (function(e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(a(t) + "=" + a(e))
                })))
            })), o = i.join("&")
        }
        if (o) {
            var c = e.indexOf("#"); - 1 !== c && (e = e.slice(0, c)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(26),
            a = n(180),
            o = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function i(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var c, l = {
            adapter: ("undefined" != typeof XMLHttpRequest ? c = n(125) : void 0 !== t && "[object process]" === Object.prototype.toString.call(t) && (c = n(125)), c),
            transformRequest: [function(e, t) {
                return a(t, "Accept"), a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        l.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, r.forEach(["delete", "get", "head"], (function(e) {
            l.headers[e] = {}
        })), r.forEach(["post", "put", "patch"], (function(e) {
            l.headers[e] = r.merge(o)
        })), e.exports = l
    }).call(this, n(179))
}, function(e, t, n) {
    "use strict";
    var r = n(26),
        a = n(181),
        o = n(122),
        i = n(183),
        c = n(186),
        l = n(187),
        u = n(126);
    e.exports = function(e) {
        return new Promise((function(t, s) {
            var f = e.data,
                d = e.headers;
            r.isFormData(f) && delete d["Content-Type"];
            var v = new XMLHttpRequest;
            if (e.auth) {
                var g = e.auth.username || "",
                    h = e.auth.password || "";
                d.Authorization = "Basic " + btoa(g + ":" + h)
            }
            var p = i(e.baseURL, e.url);
            if (v.open(e.method.toUpperCase(), o(p, e.params, e.paramsSerializer), !0), v.timeout = e.timeout, v.onreadystatechange = function() {
                    if (v && 4 === v.readyState && (0 !== v.status || v.responseURL && 0 === v.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in v ? c(v.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? v.response : v.responseText,
                                status: v.status,
                                statusText: v.statusText,
                                headers: n,
                                config: e,
                                request: v
                            };
                        a(t, s, r), v = null
                    }
                }, v.onabort = function() {
                    v && (s(u("Request aborted", e, "ECONNABORTED", v)), v = null)
                }, v.onerror = function() {
                    s(u("Network Error", e, null, v)), v = null
                }, v.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), s(u(t, e, "ECONNABORTED", v)), v = null
                }, r.isStandardBrowserEnv()) {
                var m = n(188),
                    b = (e.withCredentials || l(p)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
                b && (d[e.xsrfHeaderName] = b)
            }
            if ("setRequestHeader" in v && r.forEach(d, (function(e, t) {
                    void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : v.setRequestHeader(t, e)
                })), r.isUndefined(e.withCredentials) || (v.withCredentials = !!e.withCredentials), e.responseType) try {
                v.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && v.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && v.upload && v.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                v && (v.abort(), s(e), v = null)
            })), void 0 === f && (f = null), v.send(f)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(182);
    e.exports = function(e, t, n, a, o) {
        var i = new Error(e);
        return r(i, t, n, a, o)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26);
    e.exports = function(e, t) {
        t = t || {};
        var n = {},
            a = ["url", "method", "params", "data"],
            o = ["headers", "auth", "proxy"],
            i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        r.forEach(a, (function(e) {
            void 0 !== t[e] && (n[e] = t[e])
        })), r.forEach(o, (function(a) {
            r.isObject(t[a]) ? n[a] = r.deepMerge(e[a], t[a]) : void 0 !== t[a] ? n[a] = t[a] : r.isObject(e[a]) ? n[a] = r.deepMerge(e[a]) : void 0 !== e[a] && (n[a] = e[a])
        })), r.forEach(i, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        }));
        var c = a.concat(o).concat(i),
            l = Object.keys(t).filter((function(e) {
                return -1 === c.indexOf(e)
            }));
        return r.forEach(l, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        })), n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t) {
    var n = Object.prototype.toString;
    e.exports = function(e) {
        switch (n.call(e)) {
            case "[object Date]":
                return "date";
            case "[object RegExp]":
                return "regexp";
            case "[object Arguments]":
                return "arguments";
            case "[object Array]":
                return "array";
            case "[object Error]":
                return "error"
        }
        return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : null != (t = e) && (t._isBuffer || t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)) ? "buffer" : typeof(e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e));
        var t
    }
}, function(e, t) {
    t.set = function(e, t, n) {
        for (var r = t.split("."), a = r.pop(), o = 0; o < r.length; o++) {
            var i = r[o];
            e[i] = e[i] || {}, e = e[i]
        }
        e[a] = n
    }, t.get = function(e, t) {
        for (var n = t.split("."), r = n.pop(), a = 0; a < n.length; a++) {
            var o = n[a];
            if (!e[o]) return;
            e = e[o]
        }
        return e[r]
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function o(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (o = function(e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return c(e, arguments, u(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(r, e)
        })(e)
    }

    function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function c(e, t, n) {
        return (c = i() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var a = new(Function.bind.apply(e, r));
            return n && l(a, n.prototype), a
        }).apply(null, arguments)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var s = function(e) {
        function t(e, n) {
            var o;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), o = function(e, t) {
                return !t || "object" !== r(t) && "function" != typeof t ? a(e) : t
            }(this, u(t).call(this, e)), f(a(o), "path", n), f(a(o), "expose", !0), f(a(o), "status", 400), Error.captureStackTrace && Error.captureStackTrace(a(o), t), o
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(t, e), t
    }(o(Error));
    t.default = s;
    var f = function(e, t, n) {
        Object.defineProperty(e, t, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: n
        })
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.assign = function(e, t, n) {
        if ("string" == typeof e) return void(n[e] = t);
        Object.keys(e).forEach((function(t) {
            return n[t] = e[t]
        }))
    }, t.walk = function e(t, n, r) {
        var i = t.split(/\.\$(?=\.|$)/),
            c = i.shift(),
            l = a.default.get(n, c);
        if (!i.length) return r(c, l);
        if (!Array.isArray(l)) return;
        for (var u = 0; u < l.length; u++) {
            var s = o(u, c) + i.join(".$");
            e(s, n, r)
        }
    }, t.join = o;
    var r, a = (r = n(130)) && r.__esModule ? r : {
        default: r
    };

    function o(e, t) {
        return t ? "".concat(t, ".").concat(e) : e
    }
}, function(e, t, n) {
    "use strict";

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var a = function(e, t, n, a, o) {
            void 0 === e && (e = "https://shared.mediahuis.be"), void 0 === t && (t = ["v1.0.0"]), void 0 === n && (n = "v1.0.0"), void 0 === a && (a = "latest"), void 0 === o && (o = "");
            var i = {};
            return [].concat(t, [a]).forEach((function(t) {
                return i[t] = e + "/fonts/" + o + t + "/fonts.css"
            })), r({
                activeVersion: n
            }, i)
        },
        o = {
            cdn: {
                reset: function(e, t, n) {
                    void 0 === e && (e = "https://shared.mediahuis.be"), void 0 === t && (t = ["v1"]), void 0 === n && (n = "v1");
                    var a = {};
                    return [].concat(t, ["latest"]).forEach((function(t) {
                        return a[t] = e + "/reset/" + t + "/index.min.css"
                    })), r({
                        activeVersion: n
                    }, a)
                }("https://shared.mediahuis.be", ["v1"], "v1"),
                fonts: a("https://shared.mediahuis.be", ["v1.0.0"], "v1.0.0"),
                logos: {
                    activeVersion: "v2",
                    baseUrl: "https://shared.mediahuis.be/logos/gva/",
                    alt: "Gazet Van Antwerpen",
                    v2: {
                        main: {
                            "brand-main": {
                                png: "brand-main.png",
                                svg: "brand-main.svg"
                            },
                            "brand-square-main": {
                                png: "brand-square-main.png",
                                svg: "brand-square-main.svg"
                            },
                            "brand-plus-main": {
                                png: "brand-plus-main.png",
                                svg: "brand-plus-main.svg",
                                alt: "Plus Artikel"
                            }
                        },
                        variations: {
                            "brand-square-icon-name-vertical": {
                                png: "brand-square-icon-name-vertical.png",
                                svg: "brand-square-icon-name-vertical.svg"
                            },
                            "brand-square-icon": {
                                png: "brand-square-icon.png",
                                svg: "brand-square-icon.svg"
                            },
                            "brand-square-icon-white": {
                                png: "brand-square-icon-white.png",
                                svg: "brand-square-icon-white.svg"
                            },
                            "brand-square-icon-name-horizontal": {
                                png: "brand-square-icon-name-horizontal.png",
                                svg: "brand-square-icon-name-horizontal.svg"
                            },
                            "brand-square-icon-name-horizontal-white": {
                                png: "brand-square-icon-name-horizontal-white.png",
                                svg: "brand-square-icon-name-horizontal-white.svg"
                            },
                            "brand-icon": {
                                png: "brand-icon.png",
                                svg: "brand-icon.svg"
                            },
                            "brand-icon-white": {
                                png: "brand-icon-white.png",
                                svg: "brand-icon-white.svg"
                            },
                            "brand-plus": {
                                png: "brand-plus.png",
                                svg: "brand-plus.svg",
                                alt: "Plus Artikel"
                            }
                        },
                        subscriptions: {
                            "abo-slim": {
                                png: "abo-slim.png",
                                svg: "abo-slim.svg",
                                alt: "Abonnement Slim"
                            },
                            "abo-snel": {
                                png: "abo-snel.png",
                                svg: "abo-snel.svg",
                                alt: "Abonnement Snel"
                            },
                            "abo-super": {
                                png: "abo-super.png",
                                svg: "abo-super.svg",
                                alt: "Abonnement Super"
                            },
                            "abo-digitaal": {
                                png: "abo-digitaal.png",
                                svg: "abo-digitaal.svg",
                                alt: "Abonnement Digitaal"
                            }
                        }
                    }
                }
            }
        };

    function i() {
        return (i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var c = a("https://markup.gva.be", ["v2.0.0"], "v2.0.0"),
        l = {
            cdn: i({}, o.cdn, {
                fonts: c
            })
        };
    t.a = function(e, t, n) {
        return void 0 === e && (e = "brand-main"), void 0 === t && (t = "main"), void 0 === n && (n = l.cdn.logos.activeVersion), !l.cdn.logos[n] || l.cdn.logos[n] && !l.cdn.logos[n][t] || l.cdn.logos[n] && l.cdn.logos[n][t] && !l.cdn.logos[n][t][e] ? {
            svg: void 0,
            png: void 0,
            alt: void 0
        } : {
            svg: "" + l.cdn.logos.baseUrl + n + "/" + l.cdn.logos[n][t][e].svg,
            png: "" + l.cdn.logos.baseUrl + n + "/" + l.cdn.logos[n][t][e].png,
            alt: l.cdn.logos[n][t][e].alt || l.cdn.logos.alt
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(41),
        a = n.n(r),
        o = n(0),
        i = n.n(o);
    let c = !1;
    t.a = function(e, t, n, r) {
        if (c) return;
        let o = {};
        const l = [...document.querySelectorAll(`script[data-fragment-name="${r}"]`)].map(e => e.getAttribute("data-fragment-id")),
            u = t => {
                if (t) {
                    window[`__PROPS__${t}`] && (o = window[`__PROPS__${t}`] || {});
                    const r = function(e, t, n, r) {
                        let a = i.a.createElement(e, n);
                        // Injection starts
                        n.pageContext.paidContent.canViewArticle = true;
                        n.pageContext.paidContent.isPaidArticle = false;
                        // Injection ends
                        return t && 0 !== t.length && t.forEach(e => {
                            a = e[0].modifyApp(a, e[1], "production", r)
                        }), a
                    }(e, n, o, t);
                    a.a.hydrate(r, document.getElementById(t))
                }
            };
        l.length ? (c = !0, l.forEach(u)) : u(document.currentScript.getAttribute("data-fragment-id")), t.hot && t.hot.accept()
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(16),
        i = n(136);
    t.a = {
        modifyApp: function(e, t, n, r) {
            let c = "https://graphql.1platform.be/graphql/";
            t.brandDomain && (c = `https://graphql.${t.brandDomain}/graphql`), c || console.error("No graphql url passed to the client");
            const l = window[`__PRELOADED_STATE_GRAPH__${r}`];
            delete window[`__PRELOADED_STATE_GRAPH__${r}`];
            let u = "0.0.200-gva";
            "development" === n && (u += "-dev");
            const s = {
                "apollographql-client-name": "article-detail-v2",
                "apollographql-client-version": u
            };
            if ("development" === n) {
                const e = localStorage.getItem("gql_accessToken");
                s.authorization = e ? `Bearer ${e}` : ""
            }
            const f = new o.b({
                url: c,
                useGETForQueries: !0,
                fetchOptions: {
                    credentials: "include"
                },
                headers: s,
                cache: Object(i.a)({
                    initialState: l
                })
            });
            return a.a.createElement(o.a.Provider, {
                value: f
            }, e)
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(110),
            a = n.n(r);

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function l(t) {
            return function(t) {
                if (t instanceof e) return function(e) {
                    for (var t = 2166136261, n = 0; n < e.length;) t ^= e[n++], t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                    return t >>> 0
                }(t);
                if ("string" == typeof t) return function(e) {
                    for (var t = 2166136261, n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                    return t >>> 0
                }(t);
                throw new Error("input must be a string or a Buffer")
            }(JSON.stringify(t)).toString(36)
        }
        t.a = function(e) {
            var t = void 0 === e ? {} : e,
                n = t.size,
                r = void 0 === n ? 100 : n,
                o = t.ttl,
                i = void 0 === o ? 0 : o,
                u = t.debug,
                s = void 0 !== u && u,
                f = t.initialState,
                d = a()(r, i),
                v = s ? a()(r, i) : void 0;
            return f && Object.keys(f).map((function(e) {
                d.set(e, f[e])
            })), {
                get: function(e) {
                    return d.get(l(e))
                },
                rawGet: function(e) {
                    return d.get(e)
                },
                rawToKey: function(e) {
                    if (!v) throw "not allowed unless in debug mode";
                    return v.get(e)
                },
                set: function(e, t) {
                    var n = l(e);
                    d.set(n, t), v && v.set(n, e)
                },
                delete: function(e) {
                    return d.delete(l(e))
                },
                clear: function() {
                    return d.clear()
                },
                keys: function() {
                    return d.keys()
                },
                getInitialState: function() {
                    return d.keys().reduce((function(e, t) {
                        var n;
                        return c(c({}, e), {}, ((n = {})[t] = d.get(t), n))
                    }), {})
                }
            }
        }
    }).call(this, n(163).Buffer)
}, function(e, t, n) {
    var r = n(118),
        a = n(120),
        o = n(119);
    e.exports = function(e) {
        return r(e) || a(e) || o()
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(43);

    function i() {
        return (i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var c = o.a.clonableProps,
        l = Object(r.forwardRef)((function(e, t) {
            var n = e.level,
                r = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["level"]);
            return (a.a.createElement(o.a, i({
                ref: t
            }, r, {
                size: "Caption" + n
            })))
        }));
    l.displayName = "Caption", l.identifier = l.displayName, l.clonableProps = c, l.defaultProps = {
        as: "p",
        decoration: "none",
        fontFamily: "system",
        fontWeight: "regular",
        level: 1,
        textAlign: "inherit"
    }, t.a = l
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(10),
        l = n(34),
        u = n.n(l);

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var f = ["borderRadiusProps", "flexProps", "floatProps", "heightProps", "marginProps", "positioningProps", "widthProps"],
        d = Object(r.forwardRef)((function(e, t) {
            var n, r = e.alt,
                o = e.src,
                l = e.verticalAlign,
                d = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["alt", "src", "verticalAlign"]),
                v = Object(c.a)(d, f),
                g = v[0],
                h = v[1],
                p = v[2],
                m = ((n = {})[u.a.root] = !0, n[u.a.baseline] = "baseline" === l, n[u.a.bottom] = "bottom" === l, n[u.a.inherit] = "inherit" === l, n[u.a.middle] = "middle" === l, n[u.a.sub] = "sub" === l, n[u.a.super] = "super" === l, n[u.a.textBottom] = "text-bottom" === l, n[u.a.textTop] = "text-top" === l, n[u.a.top] = "top" === l, n[u.a.unset] = "unset" === l, n);
            return a.a.createElement("img", s({
                alt: r,
                className: i()(m, g),
                ref: t,
                src: o,
                style: h
            }, p))
        }));
    d.displayName = "Image", d.identifier = d.displayName, d.clonableProps = ["flexProps", "heightProps", "marginProps", "borderRadiusProps", "positioningProps", "widthProps", "floatProps"], d.defaultProps = {
        maxWidth: "full",
        height: "auto",
        verticalAlign: "middle",
        width: "auto"
    }, t.a = d
}, function(e, t, n) {
    e.exports = n(174)
}, function(e, t, n) {
    e.exports = {
        iframe: "gva-da4a8267_iframe"
    }
}, function(e, t, n) {
    e.exports = {
        placeholder: "gva-de7549c7_placeholder"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(10),
        l = n(66),
        u = n(18);

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var f = ["backgroundProps", "borderProps", "borderRadiusProps", "colorProps", "flexParentProps", "flexProps", "floatProps", "heightProps", "marginProps", "paddingProps", "positioningProps", "textProps", "widthProps"],
        d = Object(r.forwardRef)((function(e, t) {
            var n = e.display,
                r = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["display"]),
                o = Object(c.a)(r, f),
                d = o[0],
                v = o[1],
                g = o[2],
                h = Object(l.a)(n);
            return a.a.createElement(u.a, s({
                ref: t,
                className: i()(h, d),
                style: v
            }, g))
        }));
    d.displayName = "Flex", d.identifier = d.displayName, d.clonableProps = f, d.defaultProps = {
        display: "flex"
    }, t.a = d
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(10),
        l = n(56),
        u = n.n(l);

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var f = ["flexProps", "marginProps", "positioningProps", "floatProps"],
        d = Object(r.forwardRef)((function(e, t) {
            e.name;
            var n, r = e.size,
                o = (e.color, e.accessibilityLabel),
                l = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["name", "size", "color", "accessibilityLabel"]),
                d = Object(c.a)(l, f),
                v = d[0],
                g = d[1],
                h = d[2],
                p = ((n = {})[u.a.root] = !0, n[u.a.small] = "small" === r, n[u.a.medium] = "medium" === r, n[u.a.large] = "large" === r, n[u.a.xLarge] = "xLarge" === r, n[u.a.xxLarge] = "xxLarge" === r, n);
            return a.a.createElement("div", s({
                "aria-label": o,
                className: i()(p, v),
                style: g,
                ref: t
            }, h))
        }));
    d.displayName = "Loader", d.identifier = d.displayName, d.clonableProps = f, d.defaultProps = {
        accessibilityLabel: "Loading",
        size: "medium"
    }, t.a = d
}, function(e, t, n) {
    e.exports = {
        root: "gva-a58b1f03_root"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-b96836a1_root"
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== r) return r;
        throw new Error("unable to locate global object")
    }();
    e.exports = t = r.fetch, r.fetch && (t.default = r.fetch.bind(r)), t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response
}, function(e, t, n) {
    e.exports = {
        quoteText: "gva-b184cee3_quotetext"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-7199e23_root"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-804a7bc3_root"
    }
}, function(e, t) {
    e.exports = Swiper
}, function(e, t, n) {
    e.exports = {
        plusIcon: "gva-67ecba23_plusicon"
    }
}, function(e, t, n) {
    e.exports = {
        root: "gva-d0cbe57a_root",
        large: "gva-d0cbe57a_large",
        inner: "gva-d0cbe57a_inner",
        small: "gva-d0cbe57a_small",
        primary: "gva-d0cbe57a_primary",
        secondary: "gva-d0cbe57a_secondary"
    }
}, function(e, t, n) {
    const r = n(192),
        {
            throwMissingDataError: a,
            throwGenericError: o
        } = n(197),
        {
            validateObjectKeysAsString: i
        } = n(198);
    e.exports = {
        Schema: r,
        validateObjectKeysAsString: i,
        throwMissingDataError: a,
        throwGenericError: o
    }
}, function(e, t, n) {
    t.hot = function(e) {
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        a = n.n(r),
        o = (n(155), n(0)),
        i = n.n(o),
        c = n(41),
        l = n.n(c),
        u = n(11),
        s = n.n(u),
        f = !("undefined" == typeof window || !window.document || !window.document.createElement),
        d = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function v(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function g(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var h = function(e) {
        function t() {
            return v(this, t), g(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), d(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null
            }
        }, {
            key: "render",
            value: function() {
                return f ? (this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode)), l.a.createPortal(this.props.children, this.props.node || this.defaultNode)) : null
            }
        }]), t
    }(i.a.Component);
    h.propTypes = {
        children: s.a.node.isRequired,
        node: s.a.any
    };
    var p = h,
        m = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function b(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function y(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var w = function(e) {
            function t() {
                return b(this, t), y(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), m(t, [{
                key: "componentDidMount",
                value: function() {
                    this.renderPortal()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.renderPortal()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    l.a.unmountComponentAtNode(this.defaultNode || this.props.node), this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null, this.portal = null
                }
            }, {
                key: "renderPortal",
                value: function(e) {
                    this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode));
                    var t = this.props.children;
                    "function" == typeof this.props.children.type && (t = i.a.cloneElement(this.props.children)), this.portal = l.a.unstable_renderSubtreeIntoContainer(this, t, this.props.node || this.defaultNode)
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(i.a.Component),
        E = w;
    w.propTypes = {
        children: s.a.node.isRequired,
        node: s.a.any
    };
    var x = l.a.createPortal ? p : E,
        _ = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var O = 27,
        R = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.portalNode = null, n.state = {
                    active: !!e.defaultOpen
                }, n.openPortal = n.openPortal.bind(n), n.closePortal = n.closePortal.bind(n), n.wrapWithPortal = n.wrapWithPortal.bind(n), n.handleOutsideMouseClick = n.handleOutsideMouseClick.bind(n), n.handleKeydown = n.handleKeydown.bind(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), _(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.closeOnEsc && document.addEventListener("keydown", this.handleKeydown), this.props.closeOnOutsideClick && document.addEventListener("click", this.handleOutsideMouseClick)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.closeOnEsc && document.removeEventListener("keydown", this.handleKeydown), this.props.closeOnOutsideClick && document.removeEventListener("click", this.handleOutsideMouseClick)
                }
            }, {
                key: "openPortal",
                value: function(e) {
                    this.state.active || (e && e.nativeEvent && e.nativeEvent.stopImmediatePropagation(), this.setState({
                        active: !0
                    }, this.props.onOpen))
                }
            }, {
                key: "closePortal",
                value: function() {
                    this.state.active && this.setState({
                        active: !1
                    }, this.props.onClose)
                }
            }, {
                key: "wrapWithPortal",
                value: function(e) {
                    var t = this;
                    return this.state.active ? i.a.createElement(x, {
                        node: this.props.node,
                        key: "react-portal",
                        ref: function(e) {
                            return t.portalNode = e
                        }
                    }, e) : null
                }
            }, {
                key: "handleOutsideMouseClick",
                value: function(e) {
                    if (this.state.active) {
                        var t = this.portalNode.props.node || this.portalNode.defaultNode;
                        !t || t.contains(e.target) || e.button && 0 !== e.button || this.closePortal()
                    }
                }
            }, {
                key: "handleKeydown",
                value: function(e) {
                    e.keyCode === O && this.state.active && this.closePortal()
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children({
                        openPortal: this.openPortal,
                        closePortal: this.closePortal,
                        portal: this.wrapWithPortal,
                        isOpen: this.state.active
                    })
                }
            }]), t
        }(i.a.Component);
    R.propTypes = {
        children: s.a.func.isRequired,
        defaultOpen: s.a.bool,
        node: s.a.any,
        openByClickOn: s.a.element,
        closeOnEsc: s.a.bool,
        closeOnOutsideClick: s.a.bool,
        onOpen: s.a.func,
        onClose: s.a.func
    }, R.defaultProps = {
        onOpen: function() {},
        onClose: function() {}
    };
    var z = n(6),
        C = n(4),
        M = n.n(C),
        A = n(137),
        j = n.n(A),
        S = n(20),
        L = n.n(S);

    function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? B(Object(n), !0).forEach((function(t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var T = Object(o.createContext)(),
        k = Object(o.createContext)(),
        H = function(e, t) {
            switch (t.type) {
                case "add":
                    return P({}, e, {
                        queue: [].concat(L()(e.queue), [t.payload])
                    });
                case "show":
                    var n = j()(e.queue);
                    return P({}, e, {
                        active: n[0],
                        isShowing: !0,
                        queue: n.slice(1)
                    });
                case "hide":
                    return P({}, e, {
                        isShowing: !1
                    });
                default:
                    throw new Error
            }
        },
        I = function(e) {
            var t = e.children,
                n = Object(o.useReducer)(H, {
                    active: null,
                    isShowing: !1,
                    queue: []
                }),
                r = M()(n, 2),
                a = r[0],
                c = r[1];
            return i.a.createElement(k.Provider, {
                value: c
            }, i.a.createElement(T.Provider, {
                value: a
            }, t))
        },
        F = function() {
            return Object(o.useContext)(k)
        },
        D = n(1),
        N = n.n(D),
        V = n(10),
        W = n(18),
        U = n(48),
        $ = n.n(U);

    function G() {
        return (G = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Y = ["backgroundProps", "borderProps", "borderRadiusProps", "colorProps", "flexProps", "flexParentProps", "heightProps", "marginProps", "paddingProps", "positioningProps", "textProps", "widthProps", "floatProps", "displayProps"],
        q = Object(o.forwardRef)((function(e, t) {
            var n, r = e.as,
                a = e.children,
                o = e.elevation,
                c = e.hoverable,
                l = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["as", "children", "elevation", "hoverable"]),
                u = Object(V.a)(l, Y),
                s = u[0],
                f = u[1],
                d = u[2],
                v = ((n = {})[$.a.root] = !0, n[$.a.shadowInset1] = -1 === o, n[$.a.shadow0] = 0 === o, n[$.a.shadow1] = 1 === o, n[$.a.shadow2] = 2 === o, n[$.a.shadow3] = 3 === o, n[$.a.hoverable] = !!c, n);
            return i.a.createElement(W.a, G({
                as: r,
                className: N()(v, s),
                style: f,
                ref: t
            }, d), a)
        }));
    q.displayName = "Paper", q.identifier = q.displayName, q.clonableProps = Y, q.defaultProps = {
        as: "div",
        elevation: 1,
        hoverable: !1,
        display: "block",
        borderRadius: 1
    };
    var J = q,
        K = n(103),
        X = n.n(K),
        Z = function() {
            var e, t = F(),
                n = Object(o.useContext)(T),
                r = n.isShowing && n.active,
                c = N()(X.a.message, (e = {}, a()(e, X.a.messageIsVisible, r), a()(e, X.a.messageIsHidden, !r), e));
            return Object(o.useEffect)((function() {
                var e;
                return n.active && (e = setTimeout((function() {
                        t({
                            type: "hide"
                        }), setTimeout((function() {
                            t({
                                type: "show"
                            })
                        }), 500)
                    }), 2e3)), !n.active && n.queue && n.queue.length && t({
                        type: "show"
                    }),
                    function() {
                        return e && clearTimeout(e)
                    }
            }), [n.active, n.queue.length]), i.a.createElement(J, {
                display: "flex",
                alignItems: "center",
                p: 5,
                m: 5,
                elevation: 2,
                className: c
            }, n.active)
        },
        Q = n(30),
        ee = n.n(Q),
        te = n(102),
        ne = n(143),
        re = n(43),
        ae = function(e) {
            var t = e.children;
            return t && i.a.createElement(re.a, {
                color: "primaryBase",
                fontWeight: "medium",
                fontFamily: "primary",
                size: "Paragraph",
                "data-testid": "article-dateline",
                textTransform: "none"
            }, t)
        },
        oe = n(8),
        ie = n(149),
        ce = n.n(ie),
        le = function(e) {
            var t = e.intro,
                n = e.dateline,
                r = null == n ? void 0 : n.join(" / "),
                a = (null == t ? void 0 : t.length) > 0;
            return i.a.createElement(te.a, {
                mb: 6,
                px: Object(oe.g)(),
                className: ce.a.root,
                "data-auth-intro": "article",
                "data-testid": "article-intro"
            }, r && i.a.createElement(ae, null, r), (null == r ? void 0 : r.length) > 0 && a && " - ", a && Object(oe.b)(t, {
                fontWeight: "medium",
                fontFamily: "primary",
                color: "grey60"
            }))
        },
        ue = n(7),
        se = n.n(ue),
        fe = n(199),
        de = n(101),
        ve = n(150),
        ge = n.n(ve),
        he = function(e) {
            var t = e.body,
                n = e.attachments,
                r = e.infoblocks,
                a = void 0 === r ? [] : r,
                o = Object(z.b)().paidContent.isPaidArticle,
                c = o ? {
                    "data-auth-premium-content": "true"
                } : {};
            return i.a.createElement(te.a, se()({
                px: Object(oe.g)(),
                className: "".concat(ge.a.root).concat(o ? " subscribers-content" : ""),
                "data-testid": "article-body"
            }, c), t && Object(oe.b)(t), n && function(e) {
                return e && e.length ? e.filter((function(e) {
                    return !!e.filename
                })).map((function(e) {
                    return i.a.createElement(fe.a, {
                        key: e.id,
                        "data-testid": "article-attachment"
                    }, i.a.createElement("a", {
                        href: e.url,
                        target: "_blank"
                    }, e.filename))
                })) : null
            }(n), (null == a ? void 0 : a.length) > 0 && a.map((function(e, t) {
                return i.a.createElement(de.a, {
                    key: "".concat(null == e ? void 0 : e.title, "-").concat(t),
                    title: null == e ? void 0 : e.title,
                    content: null == e ? void 0 : e.content
                })
            })))
        },
        pe = function(e) {
            var t = e.dateTime,
                n = Object(oe.c)(t);
            return n ? i.a.createElement(re.a, {
                as: "time",
                dateTime: t,
                display: "block",
                fontFamily: "system",
                color: "colorGrey60",
                size: "Caption2",
                fontWeight: "regular",
                "data-testid": "article-date"
            }, n) : null
        },
        me = function(e) {
            var t = e.author,
                n = e.source,
                r = e.date;
            return i.a.createElement(o.Fragment, null, i.a.createElement(te.a, {
                mb: 3
            }, t && i.a.createElement(re.a, {
                as: "span",
                "data-testid": "article-author",
                display: "block",
                fontFamily: "primary",
                size: "Paragraph",
                fontWeight: "medium",
                color: "colorBlackBase"
            }, t), n && i.a.createElement(re.a, {
                as: "small",
                "data-testid": "article-source",
                display: "block",
                fontFamily: "system",
                size: "Caption2",
                color: "colorGrey60"
            }, "Bron: ", n)), r && i.a.createElement(pe, {
                dateTime: r
            }))
        },
        be = n(201),
        ye = function(e) {
            var t = e.title,
                n = e.subtitle;
            return i.a.createElement(te.a, {
                as: "header",
                mb: 5,
                "data-testid": "article-header"
            }, n && i.a.createElement(fe.a, {
                color: "colorGreyDark",
                fontFamily: "primary",
                fontWeight: "medium",
                my: 0,
                "data-testid": "article-subtitle"
            }, n), i.a.createElement(be.a, {
                as: "h1",
                color: "colorTextGreyBase",
                level: 2,
                fontFamily: "primary",
                fontWeight: "medium",
                "data-testid": "article-title",
                my: 0
            }, t))
        },
        we = n(53),
        Ee = n(151),
        xe = n.n(Ee);
    var _e = function() {
            return Promise.resolve().then(n.t.bind(null, 191, 7)).then((function(e) {
                return e.default
            })).catch((function() {}))
        },
        Oe = n(5),
        Re = n(27),
        ze = {},
        Ce = Object.keys(Re.a).map((function(e) {
            var t = "".concat(e, "_cropped");
            return ze[t] = e, t
        })),
        Me = n(31),
        Ae = n(95),
        je = n(42),
        Se = n(35),
        Le = n.n(Se);

    function Be() {
        return (Be = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Pe = ["flexProps", "marginProps", "floatProps", "positioningProps"],
        Te = Object(o.forwardRef)((function(e, t) {
            var n, r = e.accessibilityLabel,
                a = e.appearance,
                o = e.as,
                c = e.circular,
                l = e.color,
                u = e.disabled,
                s = e.icon,
                f = e.name,
                d = e.onClick,
                v = e.size,
                g = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["accessibilityLabel", "appearance", "as", "circular", "color", "disabled", "icon", "name", "onClick", "size"]),
                h = Object(Me.a)(l)[1],
                p = "default" === a ? h : void 0,
                m = Object(V.a)(g, Pe),
                b = m[0],
                y = m[1],
                w = m[2],
                E = ((n = {})[Le.a.root] = !0, n[Le.a.small] = "small" === v, n[Le.a.large] = "large" === v, n[Le.a.default] = "default" === a, n[Le.a.primary] = "primary" === a, n[Le.a.secondary] = "secondary" === a, n[Le.a.plain] = "plain" === a, n[Le.a.outline] = "outline" === a, n[Le.a.disabled] = u, n[Le.a.square] = !c, n[Le.a.circular] = c, n),
                x = f ? {
                    name: f
                } : {
                    as: s
                };
            return f && console.warn('[DEPRECATED](IconButton): "name" is deprecated. Use the "icon" prop instead.'), i.a.createElement(W.a, Be({
                as: o,
                className: N()(E, b),
                style: Be({
                    color: p
                }, y),
                disabled: u,
                ref: t,
                onClick: d
            }, w), i.a.createElement(je.a, Be({
                "aria-hidden": "true"
            }, x, {
                size: "small"
            })), r || f ? i.a.createElement(Ae.a, null, r || f) : null)
        }));
    Te.displayName = "IconButton", Te.identifier = Te.displayName, Te.clonableProps = Pe, Te.defaultProps = {
        appearance: "default",
        as: "button",
        size: "large"
    };
    var ke = Te,
        He = n(9),
        Ie = n(33),
        Fe = n.n(Ie),
        De = function(e) {
            var t, n = e.children,
                r = e.hasBgColor,
                o = N()((t = {}, a()(t, Fe.a.controlsContainer, !0), a()(t, Fe.a.controlsOnSide, !1), t));
            return i.a.createElement(ne.a, {
                bgColor: r ? "colorWhiteBase" : "none",
                alignItems: "center",
                p: 1,
                className: o
            }, n)
        },
        Ne = Object(o.forwardRef)((function(e, t) {
            var n, r = "left" === e.direction;
            return i.a.createElement(ke, {
                ref: t,
                className: N()(Fe.a.controlsButtons, (n = {}, a()(n, Fe.a.buttonPrev, r), a()(n, Fe.a.buttonNext, !r), n)),
                appearance: "primary",
                color: "colorSecondaryBase",
                size: "small",
                icon: r ? He.ChevronBack : He.ChevronForward,
                "data-testid": "".concat(r ? "carousel-button-prev" : "carousel-button-next")
            })
        })),
        Ve = Object(o.forwardRef)((function(e, t) {
            var n, r = e.children,
                o = e.isBullets,
                c = void 0 !== o && o,
                l = N()((n = {}, a()(n, Fe.a.pagination, !c), a()(n, Fe.a.bulletPagination, c), n));
            return i.a.createElement("div", {
                className: l,
                ref: t,
                "data-testid": "carousel-pagination"
            }, r)
        })),
        We = n(139),
        Ue = n(28),
        $e = n.n(Ue),
        Ge = Object(o.forwardRef)((function(e, t) {
            var n = e.images;
            return i.a.createElement("div", {
                className: $e.a.swiperContainer,
                ref: t,
                "data-testid": "carousel-thumbnails"
            }, i.a.createElement(te.a, {
                className: $e.a.swiperWrapper,
                my: 3,
                "data-testid": "carousel-thumbnail-wrapper"
            }, n.map((function(e) {
                return i.a.createElement(te.a, {
                    className: $e.a.swiperThumb,
                    key: e.id,
                    "data-testid": "carousel-thumb"
                }, i.a.createElement(We.a, {
                    alt: "thumbnail: ".concat(e.caption),
                    src: e[Oe.DEFAULT_THUMBNAIL_SIZE].url,
                    maxWidth: "none",
                    height: "".concat(60, "px"),
                    width: "auto"
                }))
            }))))
        }));
    Ge.propTypes = {
        images: s.a.arrayOf(s.a.shape({
            id: s.a.string,
            caption: s.a.string,
            credit: s.a.string,
            url: s.a.string
        }))
    };
    var Ye = Ge;

    function qe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? qe(Object(n), !0).forEach((function(t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var Ke = function(e) {
            var t, n, r = e.images,
                a = Object(o.useRef)(null),
                c = Object(o.useRef)(null),
                l = Object(o.useRef)(null),
                u = Object(o.useRef)(null),
                s = Object(o.useRef)(null),
                f = Object(o.useRef)(null),
                d = Object(oe.r)("(min-width: 768px)") || "undefined" == typeof window,
                v = "www" === (null === (t = Object(z.b)()) || void 0 === t ? void 0 : null === (n = t.site) || void 0 === n ? void 0 : n.type),
                g = {
                    containerModifierClass: $e.a.swiperContainer,
                    slideClass: $e.a.swiperSlide,
                    wrapperClass: $e.a.swiperWrapper
                },
                h = function() {
                    var e = v ? {
                            thumbs: {
                                swiper: Je({}, g, {
                                    el: l.current,
                                    slideClass: $e.a.swiperThumb,
                                    slidesPerView: "auto",
                                    watchOverflow: !0,
                                    watchSlidesVisibility: !0,
                                    watchSlidesProgress: !0
                                }),
                                slideThumbActiveClass: $e.a.activeThumb
                            }
                        } : {},
                        t = Je({}, g, {
                            loop: !0,
                            on: {
                                slideChange: function() {
                                    var e;
                                    e = this.slides[this.activeIndex], _e().then((function(t) {
                                        var n = e.querySelector(".".concat("js-lazyload"));
                                        return n && t.loader.unveil(n), null
                                    })).catch((function() {}))
                                }
                            },
                            pagination: {
                                type: d ? "fraction" : "bullets",
                                el: u.current,
                                bulletClass: Fe.a.paginationBullet,
                                bulletActiveClass: Fe.a.paginationBulletActive,
                                bulletActiveMainClass: Fe.a.paginationBulletActive
                            },
                            navigation: {
                                nextEl: s.current,
                                prevEl: f.current
                            }
                        }, e);
                    a.current = new xe.a(c.current, t)
                },
                p = function() {
                    return a.current.destroy()
                };
            return Object(o.useEffect)((function() {
                return h(),
                    function() {
                        return p()
                    }
            }), []), Object(o.useEffect)((function() {
                if (null !== a.current) {
                    var e = a.current.activeIndex;
                    p(), h(), null !== e && a.current.slideTo(e)
                }
            }), [d]), i.a.createElement(o.Fragment, null, i.a.createElement("div", {
                className: $e.a.swiperContainer,
                ref: c
            }, i.a.createElement(te.a, {
                className: $e.a.swiperWrapper,
                "data-testid": "carousel-wrapper"
            }, r.map((function(e, t) {
                var n, a, o = -1 === [0, 1, r.length - 1].indexOf(t);
                return (null === (n = e.metadata) || void 0 === n ? void 0 : n.cropping) && (a = {}, Object.keys(e).forEach((function(t) {
                    if (Ce.includes(t)) {
                        var n = ze[t];
                        a[n] = e[t]
                    }
                }))), i.a.createElement(te.a, {
                    alignSelf: "stretch",
                    className: $e.a.swiperSlide,
                    key: e.id,
                    "data-testid": "article-carousel-item"
                }, i.a.createElement(we.a, {
                    src: (a || e)[Oe.DEFAULT_IMAGE_SIZE].url,
                    width: (a || e)[Oe.DEFAULT_IMAGE_SIZE].width,
                    height: (a || e)[Oe.DEFAULT_IMAGE_SIZE].height,
                    meta: e.meta,
                    caption: e.caption,
                    credit: e.credit,
                    sources: a || e,
                    isLazy: o
                }))
            }))), i.a.createElement(De, {
                hasBgColor: d && !0
            }, i.a.createElement(Ne, {
                direction: "left",
                ref: f
            }), i.a.createElement(Ve, {
                ref: u,
                isBullets: !d || !1
            }, d && "1 / ".concat(r.length)), i.a.createElement(Ne, {
                direction: "right",
                ref: s
            }))), v && i.a.createElement(Ye, {
                ref: l,
                images: r
            }))
        },
        Xe = function(e) {
            var t, n = e.images,
                r = e.videos,
                a = e.shouldShowPaywall,
                c = n && Boolean(n.length),
                l = r && Boolean(r.length),
                u = Object(z.b)(),
                s = (null == u ? void 0 : null === (t = u.paidContent) || void 0 === t ? void 0 : t.isPaidArticle) && "object" !== ("undefined" == typeof window ? "undefined" : ee()(window));
            if (c && (a || s) || !l && 1 === (null == n ? void 0 : n.length)) {
                var f, d, v, g, h = null == n ? void 0 : n[0],
                    p = null == r ? void 0 : r.map((function(e, t) {
                        return i.a.createElement("div", {
                            class: "video",
                            key: e.id,
                            "data-index": t
                        })
                    }));
                if (!h) return null;
                if (null === (f = h.metadata) || void 0 === f ? void 0 : f.cropping) {
                    var m, b, y, w = {};
                    return Object.keys(h).forEach((function(e) {
                        if (Ce.includes(e)) {
                            var t = ze[e];
                            w[t] = h[e]
                        }
                    })), i.a.createElement(o.Fragment, null, p, i.a.createElement(we.a, {
                        key: h.id,
                        src: null === (m = w[Oe.DEFAULT_IMAGE_SIZE_CROPPED]) || void 0 === m ? void 0 : m.url,
                        width: null === (b = w[Oe.DEFAULT_IMAGE_SIZE_CROPPED]) || void 0 === b ? void 0 : b.width,
                        height: null === (y = w[Oe.DEFAULT_IMAGE_SIZE_CROPPED]) || void 0 === y ? void 0 : y.height,
                        meta: h.meta,
                        caption: h.caption,
                        credit: h.credit,
                        sources: w
                    }))
                }
                return i.a.createElement(o.Fragment, null, p, i.a.createElement(we.a, {
                    key: h.id,
                    src: null === (d = h[Oe.DEFAULT_IMAGE_SIZE]) || void 0 === d ? void 0 : d.url,
                    width: null === (v = h[Oe.DEFAULT_IMAGE_SIZE]) || void 0 === v ? void 0 : v.width,
                    height: null === (g = h[Oe.DEFAULT_IMAGE_SIZE]) || void 0 === g ? void 0 : g.height,
                    meta: h.meta,
                    caption: h.caption,
                    credit: h.credit,
                    sources: h
                }))
            }
            return l ? Object(oe.b)(r, {
                mb: 0
            }) : c ? i.a.createElement(Ke, {
                images: n
            }) : null
        },
        Ze = n(112),
        Qe = n.n(Ze),
        et = function(e) {
            var t = e.article,
                n = e.hasBgColor,
                r = e.hasMarginBottom;
            if (!t) return null;
            var a = t.images,
                o = t.videos,
                c = t.title,
                l = t.body,
                u = t.intro;
            return i.a.createElement(te.a, {
                bgColor: n ? "colorGrey10" : "colorWhiteBase",
                p: n ? 5 : 0,
                mb: r ? 5 : 0,
                className: Qe.a.clearfix
            }, c && i.a.createElement(be.a, {
                as: "h2",
                color: "colorTextGreyBase",
                level: 4,
                mt: 0,
                mb: 4
            }, c), ((null == a ? void 0 : a.length) > 0 || (null == o ? void 0 : o.length) > 0) && i.a.createElement(te.a, {
                className: Qe.a.mediaWrapper
            }, i.a.createElement(Xe, {
                images: a,
                videos: o
            })), u && i.a.createElement(le, {
                intro: u
            }), (null == l ? void 0 : l.length) > 0 && i.a.createElement(he, {
                body: l
            }))
        },
        tt = n(133);

    function nt() {
        return (nt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var rt = Object(o.forwardRef)((function(e, t) {
        var n = e.name,
            r = e.version,
            a = e.extension,
            o = e.verticalAlign,
            c = e.alt,
            l = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, ["name", "version", "extension", "verticalAlign", "alt"]),
            u = function(e) {
                return e && e.includes(".") ? {
                    scope: e.split(".")[0],
                    name: e.split(".")[1]
                } : {
                    scope: void 0,
                    name: e
                }
            }(n),
            s = Object(tt.a)(u.name, u.scope, r);
        return s[a] ? i.a.createElement(We.a, nt({}, l, {
            ref: t,
            src: s[a] + "?v=" + (r || 1),
            verticalAlign: o,
            alt: c || s.alt
        })) : null
    }));
    rt.displayName = "Logo", rt.identifier = rt.displayName, rt.clonableProps = ["borderRadiusProps", "flexProps", "floatProps", "heightProps", "marginProps", "positioningProps", "widthProps"], rt.defaultProps = {
        extension: "svg",
        verticalAlign: "middle"
    };
    n(152);
    var at = n(19);
    n(44), n(113), Object.keys(Re.a);
    var ot, it = function(e) {
            var t = e.articles;
            if (!t) return null;
            return i.a.createElement(te.a, {
                mb: 5
            }, t.map((function(e, n) {
                var r = e.article;
                return r ? i.a.createElement(et, {
                    key: "".concat(r.title, "-").concat(n),
                    article: r,
                    hasBgColor: n % 2 == 0,
                    hasMarginBottom: (null == t ? void 0 : t.length) > 1
                }) : null
            })), !1)
        },
        ct = n(40),
        lt = Object(o.createContext)(null),
        ut = lt.Provider,
        st = function() {
            return Object(o.useContext)(lt)
        },
        ft = n(79),
        dt = n.n(ft),
        vt = at.colorGrey10,
        gt = n(144),
        ht = n(16),
        pt = (ot = {}, a()(ot, Oe.DATASOURCE_READ_LATER, "lees-later"), a()(ot, Oe.DATASOURCE_ACTIVE_PERSO, "mijn-keuze"), ot),
        mt = {
            access_loginshown: !1,
            access_walltype: null,
            app_url: "https://www.gva.be/account/mijn-gva",
            crm_campaigncode: "CMP-02356-Z1L5D4",
            device_type: "desktop",
            device_application: "www",
            event_category: pt[Oe.DATASOURCE_ACTIVE_PERSO],
            event_action: null,
            event_label: null,
            page_securetype: null,
            page_secure: null,
            page_type: "article-detail",
            tag_oldvalues: null,
            tag_newvalues: null
        },
        bt = {
            crm_campaigncode: "CMP-02205-M9Q6X8",
            event_category: pt[Oe.DATASOURCE_READ_LATER]
        };

    function yt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function wt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? yt(Object(n), !0).forEach((function(t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var Et = function() {
            var e;
            if ("undefined" != typeof window && (null === (e = window) || void 0 === e ? void 0 : e.Data)) {
                for (var t, n, r, a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                return null === (t = window) || void 0 === t ? void 0 : null === (n = t.Data) || void 0 === n ? void 0 : null === (r = n.trackEvent) || void 0 === r ? void 0 : r.apply(null, o)
            }
            return console.warn("window.Data is not defined.")
        },
        xt = n(32),
        _t = function(e) {
            var t = e.isSaved,
                n = "".concat(t ? "Artikel is bewaard in" : "Artikel is niet meer bewaard in", " ").concat("Mijn GVA");
            return i.a.createElement(te.a, {
                display: "flex",
                alignItems: "center"
            }, i.a.createElement(ke, {
                circular: !0,
                appearance: t ? "primary" : "secondary",
                icon: t ? He.BookmarkFill : He.Bookmark,
                flex: "1 0 auto"
            }), i.a.createElement(te.a, {
                ml: 3
            }, i.a.createElement(re.a, {
                as: "div",
                fontFamily: "primary"
            }, n)))
        },
        Ot = function() {
            var e, t = (null === (e = Object(z.b)()) || void 0 === e ? void 0 : e.brand).code,
                n = Object(oe.f)(t),
                r = st(),
                a = r.title,
                c = r.webcms,
                l = void 0 === c ? {} : c,
                u = F(),
                s = Object(o.useState)(!1),
                f = M()(s, 2),
                d = f[0],
                v = f[1],
                g = Object(ht.c)("\n  mutation addReadLaterArticle(\n    $brand: String!\n    $webcmsId: ID!\n  ) {\n    addReadLaterArticle(brand: $brand, webcmsId: $webcmsId) {\n      success\n    }\n  }\n"),
                h = M()(g, 2),
                p = h[0],
                m = h[1].loading,
                b = Object(ht.c)("\n  mutation webv2_ReadLaterArticle(\n    $brand: String!\n    $webcmsId: ID!\n  ) {\n    deleteReadLaterArticle(brand: $brand, webcmsId: $webcmsId) {\n      success\n    }\n  }\n"),
                y = M()(b, 2),
                w = y[0],
                E = y[1].loading,
                x = null == l ? void 0 : l.id;
            if (!x) return null;
            var _ = Object(ht.d)("\n  query webv2_readLaterArticles($brand: String!) {\n    readLaterArticles(brand: $brand) {\n      webcms {\n        id\n      }\n    }\n  }\n", {
                    variables: {
                        brand: n
                    }
                }),
                O = _.data,
                R = _.loading;
            Object(o.useEffect)((function() {
                return xt.a.subscribe("ReadLater/update", (function(e) {
                        v(e)
                    })),
                    function() {
                        xt.a.unsubscribe("ReadLater/update")
                    }
            }), []), Object(o.useEffect)((function() {
                if (O) {
                    var e, t, n = (e = null == O ? void 0 : O.readLaterArticles, t = x, !(!e || !t) && e.filter((function(e) {
                        var n;
                        return (null == e ? void 0 : null === (n = e.webcms) || void 0 === n ? void 0 : n.id) === t
                    })).length > 0);
                    n && v(n)
                }
            }), [O]);
            var C = R || m || E;
            return C ? i.a.createElement(te.a, {
                p: 3,
                borderRadius: 10,
                bgColor: "colorGrey10"
            }, i.a.createElement(gt.a, {
                size: "small"
            })) : i.a.createElement(ke, {
                icon: d ? He.BookmarkFill : He.Bookmark,
                appearance: "default",
                color: "primaryBase",
                style: {
                    backgroundColor: vt
                },
                size: "small",
                circular: !0,
                label: "Bewaar artikel",
                "aria-label": "Bewaar artikel",
                onClick: function() {
                    C || (d ? w : p)({
                        variables: {
                            brand: n,
                            webcmsId: x
                        }
                    }).then((function(e) {
                        var t, n, r;
                        return v(!d), t = a, n = !d, Et(wt({}, bt, {
                            event_label: "".concat(x, "|").concat(t),
                            event_action: n ? "click-add" : "click-delete"
                        })), u({
                            type: "add",
                            payload: i.a.createElement(_t, {
                                isSaved: !d
                            })
                        }), r = !d, xt.a.publish("ReadLater/update", r), e
                    })).catch((function(e) {
                        return console.error(null == e ? void 0 : e.message)
                    }))
                },
                "data-testid": "share-readlater",
                title: d ? "Verwijder uit bewaarde artikels" : "Bewaar artikel"
            })
        },
        Rt = function(e) {
            var t = e.layout,
                n = void 0 === t ? "horizontal" : t,
                r = e.position,
                o = void 0 === r ? "bottom" : r,
                c = st(),
                l = c.brand,
                u = c.title,
                s = c.webcms,
                f = void 0 === s ? {} : s,
                d = (null == f ? void 0 : f.url) || "https://".concat("www", ".").concat(l),
                v = Object(ct.b)(),
                g = i.a.createElement(te.a, {
                    className: "".concat("vertical" === n ? dt.a.shareSticky : ""),
                    "data-testid": "article-share"
                }, i.a.createElement(ne.a, {
                    as: "ul",
                    flexDirection: "vertical" === n ? "column" : "row",
                    className: dt.a.shareItemList
                }, v && i.a.createElement(te.a, {
                    as: "li",
                    mx: 2,
                    key: "readlater"
                }, i.a.createElement(Ot, null)), function(e, t) {
                    var n = encodeURI(e),
                        r = encodeURI(t);
                    return [{
                        bgColor: "#4267b2",
                        name: "facebook",
                        shareUrl: "https://www.facebook.com/sharer.php?u=".concat(n),
                        iconText: "Delen",
                        iconName: He.Facebook
                    }, {
                        bgColor: "#1DA1F2",
                        name: "twitter",
                        shareUrl: "https://twitter.com/intent/tweet?text=".concat(r, "&url=").concat(n),
                        iconText: "Tweet",
                        iconName: He.Twitter
                    }, {
                        bgColor: "#25D366",
                        name: "whatsapp",
                        shareUrl: "https://api.whatsapp.com/send?text=".concat(r, "%20–%20via%20").concat(n),
                        iconText: "Whatsapp",
                        iconName: He.Whatsapp
                    }, {
                        bgColor: "#919191",
                        name: "mail",
                        shareUrl: "mailto:?subject=".concat(r, "&body=Bekijk%20dit%20artikel%20via%20").concat(n),
                        iconText: "Mail",
                        iconName: He.MailFill
                    }]
                }(d, u).map((function(e) {
                    var t = e.name,
                        n = e.shareUrl,
                        r = e.iconText,
                        o = e.iconName,
                        c = e.bgColor;
                    return i.a.createElement(te.a, {
                        as: "li",
                        mx: 2,
                        key: t,
                        className: N()(dt.a.shareListItem, a()({}, dt.a.mobileOnly, "whatsapp" === t))
                    }, i.a.createElement(ke, {
                        href: n,
                        color: "whiteBase",
                        size: "small",
                        circular: !0,
                        icon: o,
                        label: r,
                        style: {
                            backgroundColor: c
                        },
                        "aria-label": t,
                        "data-social": t,
                        "data-testid": "share-".concat(t),
                        onClick: function(e) {
                            e.preventDefault(), Object(oe.q)(t, n)
                        }
                    }))
                }))));
            return "bottom" === o ? i.a.createElement(ne.a, {
                justifyContent: "flex-end",
                mt: 3,
                mb: 3
            }, g) : g
        },
        zt = Object(o.createContext)(),
        Ct = Object(o.createContext)(),
        Mt = zt.Provider,
        At = Ct.Provider,
        jt = function() {
            return Object(o.useContext)(zt)
        },
        St = function() {
            return Object(o.useContext)(Ct)
        },
        Lt = n(114),
        Bt = n.n(Lt),
        Pt = function() {
            var e = jt().competition;
            return i.a.createElement(te.a, {
                width: "100%",
                height: "40px",
                display: "flex",
                bgColor: "primaryBase"
            }, i.a.createElement(te.a, {
                pl: 5,
                position: "relative",
                bgColor: "primaryDark",
                textTransform: "uppercase",
                color: "colorWhiteBase",
                className: Bt.a.headerPrefix
            }, "Live"), i.a.createElement(te.a, {
                pl: 7,
                color: "colorWhiteBase",
                className: Bt.a.header
            }, e))
        },
        Tt = n(80),
        kt = n.n(Tt),
        Ht = function(e) {
            var t = e.itemHeader,
                n = void 0 === t ? null : t,
                r = e.itemContent,
                a = void 0 === r ? null : r,
                o = e.isDivider,
                c = void 0 !== o && o;
            return i.a.createElement(te.a, {
                title: a,
                className: kt.a.footerItem
            }, n && i.a.createElement(re.a, {
                as: "h4",
                size: "Caption2",
                color: "colorGreyDark",
                textTransform: "uppercase",
                fontFamily: "system",
                m: 2
            }, n), a && i.a.createElement(te.a, {
                className: kt.a.footerItemContent
            }, a), c && i.a.createElement(te.a, {
                width: "1px",
                height: "28px",
                bgColor: "colorGreyDark"
            }))
        },
        It = function(e) {
            var t = e.showSpectators,
                n = e.spectators,
                r = jt(),
                a = r.stadium,
                c = r.city,
                l = r.referee,
                u = r.refereeNationalityShort;
            return i.a.createElement(te.a, {
                display: "grid",
                bgColor: "colorGrey10",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                className: t ? kt.a.footerMax : kt.a.footerMin
            }, i.a.createElement(Ht, {
                itemHeader: "stadion",
                itemContent: "".concat(a, " ").concat(c)
            }), i.a.createElement(Ht, {
                isDivider: !0
            }), t && i.a.createElement(o.Fragment, null, i.a.createElement(Ht, {
                itemHeader: "toeschouwers",
                itemContent: "".concat(n)
            }), i.a.createElement(Ht, {
                isDivider: !0
            })), i.a.createElement(Ht, {
                itemHeader: "scheidsrechter",
                itemContent: null !== l ? "".concat(l, " (").concat(u, ")") : "n.n.b."
            }))
        },
        Ft = function(e) {
            var t = new Date(e),
                n = (t.getHours() < 10 ? "0" : "") + t.getHours(),
                r = (t.getMinutes() < 10 ? "0" : "") + t.getMinutes();
            return "".concat(n, ":").concat(r)
        },
        Dt = function() {
            var e = jt(),
                t = e.date,
                n = e.matchDay,
                r = e.phase,
                a = e.matchStartTime,
                o = Ft(a),
                c = "".concat(t[0].toUpperCase()).concat(t.slice(1));
            return i.a.createElement(te.a, {
                my: 3,
                width: "100%"
            }, i.a.createElement(re.a, {
                as: "div",
                mb: 2,
                fontFamily: "system",
                textAlign: "center",
                size: "Caption1",
                color: "colorBlackBase"
            }, r.replace(/>/g, "-"), " - ", n), i.a.createElement(re.a, {
                as: "div",
                mb: 2,
                fontFamily: "system",
                textAlign: "center",
                size: "Caption2",
                color: "colorGreyBase"
            }, c, " ", o))
        },
        Nt = n(15),
        Vt = n.n(Nt),
        Wt = function(e) {
            var t, n, r, o, c = e.team,
                l = jt(),
                u = l.homeTeam,
                s = l.awayTeam,
                f = l.homeTeamLogo,
                d = l.awayTeamLogo,
                v = St(),
                g = v.homeHighlights,
                h = v.awayHighlights,
                p = "home" === c ? u : s,
                m = "home" === c ? f : d,
                b = "home" === c ? g : h,
                y = b.filter((function(e) {
                    return e.actionShort.match(/^(e\.d\.|D)$/)
                })),
                w = N()(Vt.a.teamWrapper, (t = {}, a()(t, Vt.a.teamWrapperHome, "home" === c), a()(t, Vt.a.teamWrapperAway, "away" === c), t)),
                E = N()((n = {}, a()(n, Vt.a.teamNameHome, "home" === c), a()(n, Vt.a.teamNameAway, "away" === c), n)),
                x = N()((r = {}, a()(r, Vt.a.teamLogoHome, "home" === c), a()(r, Vt.a.teamLogoAway, "away" === c), r)),
                _ = N()(Vt.a.goalMakers, (o = {}, a()(o, Vt.a.goalMakersHome, "home" === c), a()(o, Vt.a.goalMakersAway, "away" === c), o));
            return i.a.createElement(te.a, {
                className: w
            }, i.a.createElement(re.a, {
                fontFamily: "primary",
                fontWeight: "bold",
                size: "Heading4",
                className: E,
                title: p
            }, p), i.a.createElement(We.a, {
                maxHeight: "48px",
                className: x,
                src: m,
                alt: p
            }), b && i.a.createElement(te.a, {
                as: "ul",
                p: 0,
                m: 0,
                className: _
            }, y.map((function(e) {
                return i.a.createElement("li", {
                    key: e.actionTime
                }, i.a.createElement(re.a, {
                    as: "span",
                    size: "Caption2",
                    ml: 2,
                    fontFamily: "system",
                    color: "colorGreyBase"
                }, e.actionMinute, " ", e.person))
            }))))
        },
        Ut = function() {
            return i.a.createElement("svg", {
                className: Vt.a.liveSpinner,
                viewBox: "0 0 30 30"
            }, i.a.createElement("circle", {
                cx: "15",
                cy: "15",
                r: "10",
                fill: "none"
            }))
        },
        $t = function(e) {
            var t = e.isLive,
                n = e.isFinished,
                r = St(),
                c = r.homeGoals,
                l = r.awayGoals,
                u = r.isPaused,
                s = r.matchMinutes,
                f = r.matchStatusShort,
                d = r.hasShootout,
                v = r.homeGoalsShootOut,
                g = r.awayGoalsShootOut,
                h = jt().matchStartTime,
                p = Ft(h),
                m = f.match(/^(SS)$/),
                b = !(t || n || u || m),
                y = t && !n && !u && !m,
                w = t && !n && u && !m,
                E = t && !n && !u && m,
                x = !t && n && !u && !m,
                _ = N()(Vt.a.matchStatus, a()({}, Vt.a.matchStatusIsLive, t));
            return i.a.createElement("div", null, i.a.createElement(re.a, {
                as: "div",
                size: "Heading1",
                fontFamily: "primary",
                fontWeight: "bold",
                textAlign: "center"
            }, c, " - ", l), i.a.createElement(te.a, {
                display: "flex",
                justifyContent: "center"
            }, i.a.createElement(te.a, {
                color: "colorSecondary90",
                bgColor: "colorSecondary10",
                className: _
            }, y && i.a.createElement(o.Fragment, null, i.a.createElement(Ut, null), "".concat(s, "'")), w && i.a.createElement(o.Fragment, null, "Rust"), E && i.a.createElement(o.Fragment, null, i.a.createElement(Ut, null), "Penalty's"), x && i.a.createElement(o.Fragment, null, "Einde"), b && i.a.createElement(o.Fragment, null, p))), d && i.a.createElement(re.a, {
                my: 2,
                as: "div",
                size: "Caption2",
                fontFamily: "primary",
                textAlign: "center"
            }, "Pen. (", v, " - ", g, ")"))
        },
        Gt = function(e) {
            var t = e.isLive,
                n = e.isFinished,
                r = N()(Vt.a.scoreBoardWrapper, a()({}, Vt.a.scoreBoardWrapperLiveFinished, t || n));
            return i.a.createElement(te.a, {
                width: "100%",
                className: r
            }, i.a.createElement(te.a, {
                className: Vt.a.homeTeam
            }, i.a.createElement(Wt, {
                team: "home"
            })), i.a.createElement(te.a, {
                className: Vt.a.score
            }, i.a.createElement($t, {
                isLive: t,
                isFinished: n
            })), i.a.createElement(te.a, {
                className: Vt.a.awayTeam
            }, i.a.createElement(Wt, {
                team: "away"
            })))
        },
        Yt = n(58),
        qt = n.n(Yt),
        Jt = function() {
            var e = St(),
                t = e.matchMinutes,
                n = e.hasExtraTime,
                r = 0,
                a = 0,
                c = 0,
                l = 0;
            return n ? (r = 100, a = 100, c = Math.min(100, (t - 90) / 15 * 100), l = Math.max((t - 105) / 15 * 100, 0)) : (r = Math.min(100, t / 45 * 100), a = Math.max((t - 45) / 45 * 100, 0)), i.a.createElement(te.a, {
                width: "100%",
                display: "grid",
                className: n ? qt.a.progressbarHolderExtraTime : qt.a.progressbarHolder
            }, i.a.createElement(te.a, {
                className: qt.a.firstHalf
            }, i.a.createElement(te.a, {
                bgColor: "colorGrey10"
            }, i.a.createElement(te.a, {
                height: 2,
                width: "".concat(r, "%"),
                bgColor: "secondaryBase"
            }))), i.a.createElement(te.a, {
                className: qt.a.secondHalf
            }, i.a.createElement(te.a, {
                bgColor: "colorGrey10"
            }, i.a.createElement(te.a, {
                height: 2,
                width: "".concat(a, "%"),
                bgColor: "secondaryBase"
            }))), n && i.a.createElement(o.Fragment, null, i.a.createElement(te.a, {
                className: qt.a.firstHalfExtraTime
            }, i.a.createElement(te.a, {
                bgColor: "colorGrey10"
            }, i.a.createElement(te.a, {
                height: 2,
                width: "".concat(c, "%"),
                bgColor: "secondaryBase"
            }))), i.a.createElement(te.a, {
                className: qt.a.secondHalfExtraTime
            }, i.a.createElement(te.a, {
                bgColor: "colorGrey10"
            }, i.a.createElement(te.a, {
                height: 2,
                width: "".concat(l, "%"),
                bgColor: "secondaryBase"
            })))))
        },
        Kt = function(e) {
            return i.a.createElement(te.a, se()({
                as: "svg",
                width: "24px",
                height: "24px",
                style: {
                    cursor: "pointer"
                },
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("g", {
                fillRule: "nonzero",
                fill: "none"
            }, i.a.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), i.a.createElement("path", {
                d: "M18.94 8.03c-.053-.095-.105-.19-.163-.281a7.957 7.957 0 0 0-4.722-3.483l-.01-.003a8.067 8.067 0 0 0-4.09 0l-.007.003a7.961 7.961 0 0 0-4.717 3.47l-.001.002-.007.01a7.975 7.975 0 0 0-1.217 3.972v.003A8.01 8.01 0 0 0 5.7 16.929l.092.118.007.009a8.018 8.018 0 0 0 3.464 2.463A7.96 7.96 0 0 0 12 20a7.957 7.957 0 0 0 4.186-1.182 8.028 8.028 0 0 0 2.015-1.763 8.01 8.01 0 0 0 1.793-5.331 7.974 7.974 0 0 0-1.053-3.695zm-6.673-1.018l2.073-1.507a.443.443 0 0 0 .14-.172 7.062 7.062 0 0 1 3.177 2.358.443.443 0 0 0-.092.157l-.788 2.423-2.431.698-.006-.005-2.073-1.506V7.012zm-2.748-1.68a.443.443 0 0 0 .141.173l2.073 1.507v2.446L9.66 10.964l-.006.006-2.431-.698-.788-2.424a.44.44 0 0 0-.092-.157A7.06 7.06 0 0 1 9.52 5.333zm-3.297 10.76c-.012 0-.022.002-.034.003a7.122 7.122 0 0 1-1.29-3.745.442.442 0 0 0 .092-.05l2.078-1.51.006-.006 2.432.698.784 2.415-1.604 2.195H6.222zm7.777 2.732a7.094 7.094 0 0 1-3.998 0L9.212 16.4a.459.459 0 0 0-.034-.077l1.543-2.11h2.543l1.493 2.204c.005.008.012.014.018.02L14 18.825zm3.814-2.73l-.035-.002H15.21l-.027.002-1.478-2.182.002-.007.788-2.423 2.43-.698.007.005L19.01 12.3c.03.021.06.037.092.05a7.126 7.126 0 0 1-1.29 3.745z",
                fill: "#000"
            })))
        },
        Xt = function(e) {
            return i.a.createElement(te.a, se()({
                as: "svg",
                width: "24px",
                height: "24px",
                style: {
                    cursor: "pointer"
                },
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("g", {
                fillRule: "nonzero",
                fill: "none"
            }, i.a.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), i.a.createElement("rect", {
                fill: "#FFED00",
                x: "6.667",
                y: "4",
                width: "11",
                height: "16",
                rx: "2.5"
            })))
        },
        Zt = function(e) {
            return i.a.createElement(te.a, se()({
                as: "svg",
                width: "24px",
                height: "24px",
                style: {
                    cursor: "pointer"
                },
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("g", {
                fillRule: "nonzero",
                fill: "none"
            }, i.a.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), i.a.createElement("rect", {
                fill: "#E90104",
                x: "6.667",
                y: "4",
                width: "11",
                height: "16",
                rx: "2.5"
            })))
        },
        Qt = function(e) {
            return i.a.createElement(te.a, se()({
                as: "svg",
                width: "24px",
                height: "24px",
                style: {
                    cursor: "pointer"
                },
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("g", {
                fillRule: "nonzero",
                fill: "none"
            }, i.a.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), i.a.createElement("path", {
                d: "M13.333 18.1v2.4L18 16.3l-4.667-4.2v2.46C10 14.56 7.667 13.6 6 11.5c.667 3 2.667 6 7.333 6.6z",
                fill: "#E90104"
            }), i.a.createElement("path", {
                d: "M11 5.8V4L7.5 7.15 11 10.3V8.455c2.5 0 4.25.72 5.5 2.295-.5-2.25-2-4.5-5.5-4.95z",
                fill: "#4CB050"
            })))
        },
        en = function(e) {
            return i.a.createElement(te.a, se()({
                as: "svg",
                width: "24px",
                height: "24px",
                style: {
                    cursor: "pointer"
                },
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("g", {
                fillRule: "nonzero",
                fill: "none"
            }, i.a.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), i.a.createElement("rect", {
                fill: "#FFED00",
                x: "2",
                y: "2",
                width: "11",
                height: "16",
                rx: "2.5"
            }), i.a.createElement("rect", {
                stroke: "#FFF",
                strokeWidth: "1.25",
                fill: "#E90104",
                x: "10.375",
                y: "5.375",
                width: "12.25",
                height: "17.25",
                rx: "2.5"
            })))
        },
        tn = function(e) {
            return i.a.createElement(te.a, se()({
                as: "svg",
                width: "24px",
                height: "24px",
                style: {
                    cursor: "pointer"
                },
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("g", {
                fillRule: "nonzero",
                fill: "none"
            }, i.a.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), i.a.createElement("path", {
                d: "M18.94 8.03c-.053-.095-.105-.19-.163-.281a7.957 7.957 0 0 0-4.722-3.483l-.01-.003a8.067 8.067 0 0 0-4.09 0l-.007.003a7.961 7.961 0 0 0-4.717 3.47l-.001.002-.007.01a7.975 7.975 0 0 0-1.217 3.972v.003A8.01 8.01 0 0 0 5.7 16.929l.092.118.007.009a8.018 8.018 0 0 0 3.464 2.463A7.96 7.96 0 0 0 12 20a7.957 7.957 0 0 0 4.186-1.182 8.028 8.028 0 0 0 2.015-1.763 8.01 8.01 0 0 0 1.793-5.331 7.974 7.974 0 0 0-1.053-3.695zm-6.673-1.018l2.073-1.507a.443.443 0 0 0 .14-.172 7.062 7.062 0 0 1 3.177 2.358.443.443 0 0 0-.092.157l-.788 2.423-2.431.698-.006-.005-2.073-1.506V7.012zm-2.748-1.68a.443.443 0 0 0 .141.173l2.073 1.507v2.446L9.66 10.964l-.006.006-2.431-.698-.788-2.424a.44.44 0 0 0-.092-.157A7.06 7.06 0 0 1 9.52 5.333zm-3.297 10.76c-.012 0-.022.002-.034.003a7.122 7.122 0 0 1-1.29-3.745.442.442 0 0 0 .092-.05l2.078-1.51.006-.006 2.432.698.784 2.415-1.604 2.195H6.222zm7.777 2.732a7.094 7.094 0 0 1-3.998 0L9.212 16.4a.459.459 0 0 0-.034-.077l1.543-2.11h2.543l1.493 2.204c.005.008.012.014.018.02L14 18.825zm3.814-2.73l-.035-.002H15.21l-.027.002-1.478-2.182.002-.007.788-2.423 2.43-.698.007.005L19.01 12.3c.03.021.06.037.092.05a7.126 7.126 0 0 1-1.29 3.745z",
                fill: "#000"
            }), i.a.createElement("g", {
                transform: "translate(12 12)"
            }, i.a.createElement("circle", {
                stroke: "#FFF",
                fill: "#E90104",
                cx: "6",
                cy: "6",
                r: "5.5"
            }), i.a.createElement("path", {
                fill: "#FFF",
                d: "M3 9.341l2.026-3.195L3.013 3h1.56l1.323 2.22h.08L7.31 3h1.485L6.71 6.168l2.057 3.173H7.254L5.892 7.192h-.08l-1.38 2.15z"
            }))))
        },
        nn = function(e) {
            return i.a.createElement(te.a, se()({
                as: "svg",
                width: "24px",
                height: "24px",
                style: {
                    cursor: "pointer"
                },
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i.a.createElement("g", {
                fillRule: "nonzero",
                fill: "none"
            }, i.a.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), i.a.createElement("path", {
                d: "M18.94 8.03c-.053-.095-.105-.19-.163-.281a7.957 7.957 0 0 0-4.722-3.483l-.01-.003a8.067 8.067 0 0 0-4.09 0l-.007.003a7.961 7.961 0 0 0-4.717 3.47l-.001.002-.007.01a7.975 7.975 0 0 0-1.217 3.972v.003A8.01 8.01 0 0 0 5.7 16.929l.092.118.007.009a8.018 8.018 0 0 0 3.464 2.463A7.96 7.96 0 0 0 12 20a7.957 7.957 0 0 0 4.186-1.182 8.028 8.028 0 0 0 2.015-1.763 8.01 8.01 0 0 0 1.793-5.331 7.974 7.974 0 0 0-1.053-3.695zm-6.673-1.018l2.073-1.507a.443.443 0 0 0 .14-.172 7.062 7.062 0 0 1 3.177 2.358.443.443 0 0 0-.092.157l-.788 2.423-2.431.698-.006-.005-2.073-1.506V7.012zm-2.748-1.68a.443.443 0 0 0 .141.173l2.073 1.507v2.446L9.66 10.964l-.006.006-2.431-.698-.788-2.424a.44.44 0 0 0-.092-.157A7.06 7.06 0 0 1 9.52 5.333zm-3.297 10.76c-.012 0-.022.002-.034.003a7.122 7.122 0 0 1-1.29-3.745.442.442 0 0 0 .092-.05l2.078-1.51.006-.006 2.432.698.784 2.415-1.604 2.195H6.222zm7.777 2.732a7.094 7.094 0 0 1-3.998 0L9.212 16.4a.459.459 0 0 0-.034-.077l1.543-2.11h2.543l1.493 2.204c.005.008.012.014.018.02L14 18.825zm3.814-2.73l-.035-.002H15.21l-.027.002-1.478-2.182.002-.007.788-2.423 2.43-.698.007.005L19.01 12.3c.03.021.06.037.092.05a7.126 7.126 0 0 1-1.29 3.745z",
                fill: "#000"
            }), i.a.createElement("g", {
                transform: "translate(12 12)"
            }, i.a.createElement("circle", {
                stroke: "#FFF",
                fill: "#000",
                cx: "6",
                cy: "6",
                r: "5.5"
            }), i.a.createElement("path", {
                d: "M4 10V3h2.115c.801 0 1.324.035 1.567.105.374.105.687.333.94.685.252.352.378.806.378 1.363 0 .43-.073.792-.218 1.084A1.887 1.887 0 0 1 7.544 7.26c-.315.067-.77.1-1.367.1h-.86V10H4zm1.318-5.816v1.987h.721c.52 0 .867-.037 1.042-.11a.877.877 0 0 0 .412-.344.99.99 0 0 0 .149-.544.944.944 0 0 0-.21-.63.896.896 0 0 0-.53-.311c-.156-.032-.472-.048-.947-.048h-.637z",
                fill: "#FFF"
            }))))
        },
        rn = n(21),
        an = n.n(rn),
        on = function(e) {
            var t = e.children,
                n = e.message,
                r = Object(o.useState)(!1),
                a = M()(r, 2),
                c = a[0],
                l = a[1];
            return i.a.createElement(te.a, {
                position: "relative",
                onMouseEnter: function() {
                    l(!0)
                },
                onMouseLeave: function() {
                    l(!1)
                }
            }, t, c && i.a.createElement(re.a, {
                size: "Caption2",
                fontFamily: "system",
                className: an.a.popOverMessage
            }, n))
        },
        cn = function(e) {
            var t = e.actionShort,
                n = e.actionMinute,
                r = e.action,
                a = e.person,
                c = e.homeGoals,
                l = e.awayGoals,
                u = e.personIn,
                s = e.personOut,
                f = t.match(/^(e\.d\.|D|str\.-)$/),
                d = t.match(/Wis/),
                v = t.match(/^(G|R|RD|R2G)$/);
            return (f || v || d) && i.a.createElement(J, {
                bgColor: "colorWhiteBase",
                borderRadius: 2,
                elevation: 1,
                position: "relative",
                className: an.a.messageWrapper
            }, i.a.createElement(te.a, {
                color: "colorBlackBase",
                bgColor: "secondaryBase",
                m: 0,
                py: 2,
                px: 3,
                className: an.a.messageHeader
            }, n, " ", r), i.a.createElement(te.a, {
                py: 2,
                px: 3
            }, f && "".concat(a, " (").concat(c, " - ").concat(l, ")"), d && i.a.createElement(o.Fragment, null, i.a.createElement("div", null, "In: ", u), i.a.createElement("div", null, "Out: ", s)), v && "".concat(a)))
        },
        ln = function(e) {
            var t, n = e.event,
                r = e.hasExtraTime,
                o = e.team,
                c = r ? 120 : 90,
                l = n.actionTime / c * 100,
                u = function(e) {
                    var t = e.actionShort,
                        n = e.isPenalty,
                        r = e.penaltyMissed;
                    switch (t) {
                        case "D":
                            return n && !r ? nn : Kt;
                        case "e.d.":
                            return Kt;
                        case "str.-":
                            return n && r ? tn : Kt;
                        case "Wis":
                            return Qt;
                        case "G":
                            return Xt;
                        case "R":
                        case "DR":
                            return Zt;
                        case "R2G":
                            return en;
                        default:
                            return i.a.Fragment
                    }
                }(n),
                s = i.a.createElement(cn, n),
                f = N()(an.a.highlightWrapper, (t = {}, a()(t, an.a.highlightHomeTeam, "home" === o), a()(t, an.a.highlightAwayTeam, "away" === o), t));
            return i.a.createElement(te.a, {
                className: f,
                style: {
                    left: "".concat(l, "%")
                }
            }, i.a.createElement(on, {
                message: s
            }, i.a.createElement(u, null)))
        },
        un = function(e) {
            var t, n, r = e.team,
                o = jt(),
                c = o.homeTeam,
                l = o.awayTeam,
                u = o.homeTeamLogo,
                s = o.awayTeamLogo,
                f = St(),
                d = f.homeHighlights,
                v = f.awayHighlights,
                g = f.hasExtraTime,
                h = "home" === r ? u : s,
                p = "home" === r ? c : l,
                m = "home" === r ? d : v,
                b = N()((t = {}, a()(t, an.a.highlightsHolderHome, "home" === r), a()(t, an.a.highlightsHolderAway, "away" === r), t)),
                y = N()((n = {}, a()(n, an.a.highlightsLogoHome, "home" === r), a()(n, an.a.highlightsLogoAway, "away" === r), n));
            return i.a.createElement(te.a, {
                className: an.a.highlightsWrapper
            }, i.a.createElement(We.a, {
                maxHeight: "20px",
                className: y,
                src: h,
                alt: p
            }), i.a.createElement(te.a, {
                width: "100%",
                position: "relative",
                className: b
            }, m && m.map((function(e) {
                return i.a.createElement(ln, {
                    key: e.actionId,
                    hasExtraTime: g,
                    event: e,
                    team: r
                })
            }))))
        },
        sn = n(105),
        fn = n.n(sn),
        dn = function() {
            return i.a.createElement(J, {
                elevation: 2,
                m: 4,
                p: 2,
                "data-testid": "live-digest"
            }, i.a.createElement(te.a, {
                className: fn.a.digestHeader,
                m: 2,
                height: "40px",
                bgColor: "colorGrey20"
            }), i.a.createElement(te.a, {
                className: fn.a.digestBody,
                m: 2,
                height: "290px",
                bgColor: "colorGrey20"
            }), i.a.createElement(te.a, {
                className: fn.a.digestFooter,
                m: 2,
                height: "56px",
                bgColor: "colorGrey20"
            }))
        },
        vn = "undefined" == typeof window,
        gn = !!vn || window.innerWidth <= 480,
        hn = function() {
            var e, t, n, r, a = vn ? null : JSON.parse((null === (e = document.getElementById("live-digest")) || void 0 === e ? void 0 : null === (t = e.content) || void 0 === t ? void 0 : t.textContent) || null),
                c = st().externalWidgets || {},
                l = Object(oe.h)(c, "livesports") || [],
                u = Object(oe.h)(c, "live-digest") || [],
                s = null === (n = [].concat(L()(l), L()(u))) || void 0 === n ? void 0 : null === (r = n.shift) || void 0 === r ? void 0 : r.call(n);
            if (!(null == s ? void 0 : s.id)) return null;
            var f = Object(o.useState)(null),
                d = M()(f, 2),
                v = d[0],
                g = d[1],
                h = Object(o.useState)(null),
                p = M()(h, 2),
                m = p[0],
                b = p[1],
                y = Object(o.useState)(null),
                w = M()(y, 2),
                E = w[0],
                x = w[1],
                _ = Object(o.useState)(null),
                O = M()(_, 2),
                R = O[0],
                z = O[1],
                C = Object(o.useState)(null),
                A = M()(C, 2),
                j = A[0],
                S = A[1],
                B = Object(o.useState)(s.id),
                P = M()(B, 2),
                T = P[0],
                k = P[1],
                H = Object(ct.c)({
                    url: T,
                    type: "json",
                    expiry: vn ? 15e4 : 5e3,
                    refreshInterval: j,
                    defaultData: a
                }).data;
            return Object(o.useEffect)((function() {
                H && (g(H.general), b(H.progress), x(H.isLive), z(H.isFinished), S(H.syncInterval), H.nextSyncUrl ? k(H.nextSyncUrl) : S(null))
            }), [null == H ? void 0 : H.general, null == H ? void 0 : H.progress, null == H ? void 0 : H.isLive, null == H ? void 0 : H.isFinished, null == H ? void 0 : H.syncInterval, null == H ? void 0 : H.nextSyncUrl]), i.a.createElement(o.Fragment, null, v && m ? i.a.createElement(J, {
                elevation: 2,
                my: 5,
                "data-testid": "live-digest"
            }, i.a.createElement(Mt, {
                value: v
            }, i.a.createElement(Pt, null), i.a.createElement(At, {
                value: m
            }, i.a.createElement(te.a, {
                p: gn ? 3 : 5,
                width: "100%"
            }, i.a.createElement(Dt, null), i.a.createElement(Gt, {
                isLive: E,
                isFinished: R
            }), (E || R) && !gn && i.a.createElement(i.a.Fragment, null, i.a.createElement(un, {
                team: "home"
            }), i.a.createElement(Jt, null), i.a.createElement(un, {
                team: "away"
            })))), i.a.createElement(It, {
                spectators: m.spectators,
                showSpectators: m.spectators && !gn
            }))) : i.a.createElement(dn, null))
        },
        pn = function() {
            return Object(o.useEffect)((function() {
                window.initAd && initAd("mediumrectangle", "t1")
            }), []), i.a.createElement("div", {
                id: "ad_mediumrectangle-t1",
                className: "ad ad--mediumrectangle",
                "data-ad": "mediumrectangle",
                "data-testid": "ad-mediumrectangle"
            })
        },
        mn = n(96),
        bn = function(e) {
            var t = e.isPaidArticle,
                n = e.canViewArticle;
            return !t || n
        },
        yn = n(106),
        wn = n.n(yn),
        En = function() {
            var e, t, n, r = st(),
                a = r.attachments,
                c = r.author,
                l = r.body,
                u = r.images,
                s = r.infoblocks,
                f = r.intro,
                d = r.publishedAt,
                v = r.relatedArticles,
                g = r.source,
                h = r.subtitle,
                p = r.tags,
                m = (p = void 0 === p ? {} : p).dateline,
                b = r.title,
                y = r.videos;
                w = Object(z.b)().paidContent,
                E = !bn(w),
                x = !((null == w ? void 0 : w.isPaidArticle) && "object" !== ("undefined" == typeof window ? "undefined" : ee()(window))),
                _ = null == l ? void 0 : null === (e = l.filter) || void 0 === e ? void 0 : null === (t = e.call(l, (function(e) {
                    return !!e.livesports
                }))) || void 0 === t ? void 0 : null === (n = t.map) || void 0 === n ? void 0 : n.call(t, (function(e) {
                    return e.livesports.id
                }));
            return i.a.createElement(o.Fragment, null, i.a.createElement(mn.a, {
                value: {
                    liveMatchIds: _
                }
            }, i.a.createElement(te.a, {
                mb: 5,
                className: wn.a.contentWrapper
            }, i.a.createElement(hn, null), ((null == u ? void 0 : u.length) > 0 || (null == y ? void 0 : y.length) > 0) && i.a.createElement(te.a, {
                mb: 4
            }, i.a.createElement(Xe, {
                images: u,
                videos: y,
                shouldShowPaywall: E
            })), b && i.a.createElement(ye, {
                title: b,
                subtitle: h
            }), f && i.a.createElement(le, {
                dateline: m,
                intro: f
            }), i.a.createElement(ne.a, {
                alignItems: "center",
                justifyContent: "flex-end",
                flexWrap: "wrap",
                mb: 6
            }, (c || d) && i.a.createElement(te.a, {
                flexGrow: 1,
                mr: 2,
                className: wn.a.boxColumn
            }, i.a.createElement(me, {
                author: c,
                date: d,
                source: g
            })), x && i.a.createElement(te.a, {
                className: wn.a.boxColumn
            }, i.a.createElement(Rt, {
                position: "top"
            }))), !(null == w ? void 0 : w.isPaidArticle) && i.a.createElement(pn, null), !E && l && i.a.createElement(he, {
                body: l,
                attachments: a,
                infoblocks: s
            })), !E && (null == v ? void 0 : v.length) > 0 && i.a.createElement(it, {
                articles: v
            })))
        };

    function xn() {
        return (xn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var _n = ["flexProps", "marginProps", "floatProps"],
        On = Object(o.forwardRef)((function(e, t) {
            var n, r = e.as,
                a = e.children,
                o = e.appearance,
                c = e.size,
                l = e.styles,
                u = e.className,
                s = e.style,
                f = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["as", "children", "appearance", "size", "styles", "className", "style"]),
                d = ((n = {})[l.root] = !0, n[l.primary] = "primary" === o, n[l.secondary] = "secondary" === o, n[l.small] = "small" === c, n[l.large] = "large" === c, n);
            return i.a.createElement(te.a, xn({
                ref: t,
                className: N()(d, u),
                style: s,
                as: r,
                width: "full",
                position: "relative"
            }, f), i.a.createElement("span", {
                className: l.inner
            }, a))
        }));
    On.defaultProps = {
        appearance: "primary",
        as: "h1",
        size: "large"
    };
    var Rn = On,
        zn = n(153),
        Cn = n.n(zn);

    function Mn() {
        return (Mn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var An = Object(o.forwardRef)((function(e, t) {
        var n = e.as,
            r = e.appearance,
            a = e.size,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, ["as", "appearance", "size"]),
            c = Object(V.a)(o, _n),
            l = c[0],
            u = c[1],
            s = c[2];
        return i.a.createElement(Rn, Mn({
            ref: t,
            className: l,
            style: u,
            as: n,
            styles: Cn.a,
            appearance: r,
            size: a
        }, s))
    }));
    An.displayName = "BrandedHeading", An.identifier = An.displayName, An.clonableProps = _n, An.defaultProps = {
        appearance: "primary",
        as: "h1",
        size: "large"
    };
    var jn = An,
        Sn = n(68),
        Ln = n.n(Sn),
        Bn = function(e) {
            var t = e.name,
                n = e.follow,
                r = "".concat(t, " ").concat(n ? "is toegevoegd aan" : "is verwijderd uit", " ").concat("Mijn GVA");
            return i.a.createElement(te.a, {
                display: "flex",
                alignItems: "center"
            }, i.a.createElement(ke, {
                circular: !0,
                appearance: n ? "primary" : "secondary",
                icon: He.Tag,
                flex: "1 0 auto"
            }), i.a.createElement(te.a, {
                ml: 3
            }, i.a.createElement(re.a, {
                as: "div",
                fontFamily: "primary"
            }, r)))
        },
        Pn = function(e) {
            var t = e.name,
                n = e.id,
                r = e.isFollowed,
                a = e.brandDomain,
                c = e.onTagUpdate,
                l = Object(o.useState)(r),
                u = M()(l, 2),
                s = u[0],
                f = u[1],
                d = F();
            Object(o.useEffect)((function() {
                f(r)
            }), [r]);
            var v = Object(ht.c)("\n  mutation webv2_AddTheme(\n    $brand: String!\n    $uuid: ID!\n    $type: ThemeType!\n  ) {\n    addTheme(brand: $brand, uuid: $uuid, type: $type) {\n      success\n    }\n  }\n"),
                g = M()(v, 2),
                h = g[0],
                p = g[1].loading,
                m = Object(ht.c)("\n  mutation webv2_DeleteTheme(\n    $brand: String!\n    $uuid: ID!\n    $type: ThemeType!\n  ) {\n    deleteTheme(brand: $brand, uuid: $uuid, type: $type) {\n      success\n    }\n  }\n"),
                b = M()(m, 2),
                y = b[0],
                w = b[1].loading;
            return i.a.createElement(ke, {
                appearance: "outline",
                size: "small",
                onClick: function() {
                    p || w || (s ? y : h)({
                        variables: {
                            brand: a,
                            uuid: n,
                            type: "Keyword"
                        }
                    }).then((function(e) {
                        return f(!s), c(t, !s), d({
                            type: "add",
                            payload: i.a.createElement(Bn, {
                                name: t,
                                follow: !s
                            })
                        }), e
                    })).catch((function(e) {
                        return console.error(null == e ? void 0 : e.message)
                    }))
                },
                icon: s ? He.Checkmark : He.Add,
                ml: -1,
                className: N()(Ln.a.noBorderRadiusLeft, Ln.a.noBorderLeft)
            })
        },
        Tn = n(45),
        kn = n.n(Tn),
        Hn = n(200),
        In = function(e) {
            var t = e.name,
                n = e.slug,
                r = e.brandSections,
                a = e.keywordSections,
                c = e.children,
                l = kn()(e, ["name", "slug", "brandSections", "keywordSections", "children"]),
                u = Object(o.useState)(!1),
                s = M()(u, 2),
                f = s[0],
                d = s[1],
                v = Object(oe.l)("regio", r, a),
                g = v ? "".concat(v, "?t=").concat(n) : "/tag/".concat(n);
            return i.a.createElement(te.a, {
                as: "li",
                mr: 3,
                mt: 3,
                rel: "tag"
            }, i.a.createElement(Hn.a, se()({
                as: "a",
                size: "small",
                appearance: "outline",
                href: g,
                onMouseEnter: function() {
                    return d(!0)
                },
                onMouseLeave: function() {
                    return d(!1)
                },
                iconLeft: f ? He.TagFill : He.Tag,
                "data-testid": "article-tag",
                px: 2
            }, l), t), c)
        },
        Fn = function(e) {
            var t, n = e.children;
            return i.a.createElement(te.a, {
                as: "aside",
                my: 5,
                "data-testid": "article-tags"
            }, i.a.createElement(jn, {
                as: "h3",
                my: 0,
                size: "small"
            }, "Lees meer over of volg"), i.a.createElement(ne.a, {
                flexWrap: "wrap",
                as: "ul",
                className: Ln.a.tagList
            }, n), i.a.createElement("meta", {
                name: "keywords",
                content: "".concat(null == n ? void 0 : null === (t = n.map) || void 0 === t ? void 0 : t.call(n, (function(e) {
                    var t = e.props;
                    return null == t ? void 0 : t.name
                })).join(", "))
            }))
        },
        Dn = function(e) {
            var t = e.brandSections,
                n = e.brandKeywords;
            return (null == n ? void 0 : n.length) > 0 && i.a.createElement(Fn, null, n.map((function(e) {
                var n = e.name,
                    r = e.slug,
                    a = e.uuid,
                    o = e.sections;
                return i.a.createElement(In, {
                    key: a,
                    name: n,
                    id: a,
                    slug: r,
                    brandSections: t,
                    keywordSections: o
                })
            })))
        },
        Nn = function(e) {
            var t, n = e.brandSections,
                r = e.brandKeywords,
                a = e.articleId,
                c = e.siteType,
                l = e.brandDomain,
                u = Object(o.useState)([]),
                s = M()(u, 2),
                f = s[0],
                d = s[1],
                v = Object(ht.d)("\n  query webv2_Themes($brand: String!) {\n    themes(brand: $brand){\n      id\n      uuid\n      name\n      type\n      section {\n        id\n        uuid\n        name\n        slug\n      }\n      keyword {\n        id\n        uuid\n        name\n        slug\n      }\n    }\n  }\n", {
                    variables: {
                        brand: l
                    }
                }),
                g = v.data,
                h = v.loading;
            Object(o.useEffect)((function() {
                var e;
                d(null == g ? void 0 : null === (e = g.themes) || void 0 === e ? void 0 : e.map((function(e) {
                    return e.name
                })))
            }), [null == g ? void 0 : null === (t = g.themes) || void 0 === t ? void 0 : t.length]);
            var p = function(e, t) {
                var n = t ? [].concat(L()(f), [e]) : f.filter((function(t) {
                        return t !== e
                    })),
                    r = JSON.stringify(f),
                    o = JSON.stringify(n);
                return d(n),
                    function(e) {
                        var t = e.articleId,
                            n = e.deviceApp,
                            r = e.oldValues,
                            a = e.newValues,
                            o = n === Oe.DEVICE_WWW ? Oe.TYPE_DESKTOP : Oe.TYPE_MOBILE;
                        return Et(wt({}, mt, {
                            event_action: "click-save",
                            event_label: "article-detail | ".concat(t),
                            page_secureType: "register",
                            page_secure: !1,
                            device_type: o,
                            device_application: n,
                            page_type: "detail",
                            tag_oldvalues: r,
                            tag_newvalues: a
                        }))
                    }({
                        articleId: a,
                        deviceApp: c,
                        oldValues: r,
                        newValues: o
                    })
            };
            return g || h ? (null == r ? void 0 : r.length) > 0 && i.a.createElement(Fn, null, r.map((function(e) {
                var t = e.name,
                    r = e.slug,
                    a = e.uuid,
                    o = e.sections,
                    c = function(e, t) {
                        return !!e && e.filter((function(e) {
                            return e.uuid === t
                        })).length > 0
                    }(null == g ? void 0 : g.themes, a);
                return i.a.createElement(In, {
                    key: a,
                    name: t,
                    id: a,
                    slug: r,
                    brandSections: n,
                    keywordSections: o
                }, i.a.createElement(Pn, {
                    name: t,
                    id: a,
                    isFollowed: c,
                    brandDomain: l,
                    onTagUpdate: function(e, t) {
                        return p(e, t)
                    }
                }))
            }))) : null
        },
        Vn = function() {
            var e = st(),
                t = e.keywords,
                n = e.sections,
                r = Object(z.b)(),
                a = r.brand.code,
                o = r.site.type,
                c = r.article.articleId,
                l = Object(oe.f)(a),
                u = t.filter((function(e) {
                    var t, n;
                    return (null == e ? void 0 : null === (t = e.brands) || void 0 === t ? void 0 : t.length) > 0 && (null == e ? void 0 : null === (n = e.brands) || void 0 === n ? void 0 : n.includes(l)) && !e.isHidden
                })),
                s = n.filter((function(e) {
                    return e.brand === l && !e.isHidden
                })),
                f = Object(ct.a)();
            return "undefined" != typeof window && f ? i.a.createElement(Nn, {
                brandKeywords: u,
                brandSections: s,
                brandDomain: l,
                siteType: o,
                articleId: c
            }) : i.a.createElement(Dn, {
                brandKeywords: u,
                brandSections: s
            })
        },
        Wn = function() {
            var e = Object(z.b)().paidContent;
            return !bn(e) && i.a.createElement("div", {
                "data-cj-root": "subscription-wall",
                "data-cj-variant": "auto",
                "data-testid": "subscription-wall-auto"
            })
        },
        Un = n(154),
        $n = "\n  fragment section on Section {\n    brand\n    isHidden\n    name\n    sequence\n    slug\n    type\n    uuid\n    zipcodes\n  }\n  fragment basicArticle on Article {\n    brand\n    body\n    images {\n      id\n      caption\n      credit\n      url\n      metadata\n      ".concat(Object(oe.k)("smartCrop"), "\n      ").concat(Object(oe.k)("cropped", "cropped"), "\n    }\n    infoblocks {\n      content\n      title\n      type\n    }\n    intro\n    premium\n    sections {\n      ...section\n    }\n    source\n    subtitle\n    title\n    webcms {\n      id\n      url\n    }\n  }\n  fragment fullArticle on Article {\n    ...basicArticle\n    attachments {\n      filename\n      id\n      url\n    }\n    author\n    externalWidgets: external_widgets\n    keywords {\n      name\n      slug\n      uuid\n      isHidden\n      brands\n      sections {\n        ...section\n        subsections {\n          ...section\n        }\n      }\n    }\n    publishedAt: published_at\n    relatedArticles {\n      article {\n        ...basicArticle\n      }\n    }\n    tags\n    type\n    videos\n  }\n  query webv2_Article($articleId: ID!, $brand: String!, $isPreview: Boolean!, $resizeMode: ResizeMode) {\n    article: articleByExternalId(brand: $brand, webcmsId: $articleId) @skip(if: $isPreview) {\n      ...fullArticle\n    }\n    previewArticle: article(brand: $brand, uuid: $articleId, preview: $isPreview) @include(if: $isPreview) {\n      ...fullArticle\n    }\n  }\n");

    function Gn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Yn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Gn(Object(n), !0).forEach((function(t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var qn, Jn = /test|preview|local/.test(void 0);

    function Kn(e) {
        var t = e.children,
            n = Object(z.b)(),
            r = n.article.articleId,
            a = n.brand.code,
            o = n.isKioskPreview,
            c = Object(ht.d)($n, {
                variables: {
                    articleId: r,
                    brand: Object(oe.f)(a),
                    resizeMode: "SmartCrop",
                    isPreview: !!o
                }
            }),
            l = c.loading,
            u = c.error,
            s = c.data;
        if (!s && l) return Jn ? "Loading..." : null;
        if (!s && u) return console.error(u.message), Jn ? "Error: ".concat(u.message) : null;
        var f = s.article,
            d = s.previewArticle;
        f || d || Object(Un.throwMissingDataError)(r);
        var v = f || d,
            g = v.videos,
            h = v.body;
        return Object(oe.a)([].concat(L()(g), L()(h)).filter((function(e) {
            return !!e.streamone
        })).map((function(e) {
            return e.streamone
        }))), i.a.createElement(ut, {
            value: Yn({}, f || d)
        }, t)
    }
    var Xn = (qn = {}, a()(qn, Oe.ARTICLE_CONTENT, En), a()(qn, Oe.PACO_ARTICLE_CONTENT, En), a()(qn, Oe.PACO_PAYWALL, Wn), a()(qn, Oe.ARTICLE_SOCIAL_BAR, Rt), a()(qn, Oe.MOBILE_SOCIAL_BAR, Rt), a()(qn, Oe.ARTICLE_TAGS, Vn), qn);
    //console.log(Xn);
    t.a = function(e) {
        var t = e.widgetConfig,
            n = e.pageContext,
            r = Xn[t.widgetType];
        return i.a.createElement(z.a, {
            value: n
        }, i.a.createElement(Kn, null, i.a.createElement(I, null, i.a.createElement(r, null), i.a.createElement(x, null, i.a.createElement(Z, null)))))
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t, n) {
        return void 0 === t && (t = ""), e ? "string" == typeof e ? (console.warn("[DEPRECATED](" + t + "): Don't use string name (" + e + ") as icon: Use imported icons instead."), {
            name: e
        }) : {
            as: e
        } : n ? {
            as: n
        } : {}
    }
}, , function(e, t, n) {
    e.exports = n(160)
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            var t = n(134),
                r = n(135),
                a = n(156),
                o = n(8);
            Object(t.a)(a.a, e, [
                [r.a, {
                    brandDomain: "gva".includes("hmc") ? null : Object(o.f)("gva")
                }]
            ], "articleDetail")
        }.call(this, n(161)(e))
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    var r = n(117);
    e.exports = function e(t, n, a) {
        var o;
        void 0 === n && (n = ""), void 0 === a && (a = r);
        var i = new Map;

        function c(e, t) {
            var n = i.get(t);
            n ? n.push.apply(n, e) : i.set(t, e)
        }
        if (a(t)) o = null, c([n], t);
        else {
            var l = n ? n + "." : "";
            if ("undefined" != typeof FileList && t instanceof FileList) o = Array.prototype.map.call(t, (function(e, t) {
                return c(["" + l + t], e), null
            }));
            else if (Array.isArray(t)) o = t.map((function(t, n) {
                var r = e(t, "" + l + n, a);
                return r.files.forEach(c), r.clone
            }));
            else if (t && t.constructor === Object)
                for (var u in o = {}, t) {
                    var s = e(t[u], "" + l + u, a);
                    s.files.forEach(c), o[u] = s.clone
                } else o = t
        }
        return {
            clone: o,
            files: i
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author Feross Aboukhadijeh <http://feross.org>
         * @license MIT
         */
        var r = n(165),
            a = n(166),
            o = n(167);

        function i() {
            return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function c(e, t) {
            if (i() < t) throw new RangeError("Invalid typed array length");
            return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
        }

        function l(e, t, n) {
            if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, e)
            }
            return u(this, e, t, n)
        }

        function u(e, t, n, r) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = d(e, t);
                return e
            }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | g(t, n),
                    a = (e = c(e, r)).write(t, n);
                a !== r && (e = e.slice(0, a));
                return e
            }(e, t, n) : function(e, t) {
                if (l.isBuffer(t)) {
                    var n = 0 | v(t.length);
                    return 0 === (e = c(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? c(e, 0) : d(e, t);
                    if ("Buffer" === t.type && o(t.data)) return d(e, t.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function s(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function f(e, t) {
            if (s(t), e = c(e, t < 0 ? 0 : 0 | v(t)), !l.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function d(e, t) {
            var n = t.length < 0 ? 0 : 0 | v(t.length);
            e = c(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e
        }

        function v(e) {
            if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | e
        }

        function g(e, t) {
            if (l.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return D(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return N(e).length;
                default:
                    if (r) return D(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function h(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return A(this, t, n);
                case "utf8":
                case "utf-8":
                    return z(this, t, n);
                case "ascii":
                    return C(this, t, n);
                case "latin1":
                case "binary":
                    return M(this, t, n);
                case "base64":
                    return R(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return j(this, t, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), r = !0
            }
        }

        function p(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r
        }

        function m(e, t, n, r, a) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (a) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!a) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, r, a);
            if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, r, a);
            throw new TypeError("val must be string, number or Buffer")
        }

        function b(e, t, n, r, a) {
            var o, i = 1,
                c = e.length,
                l = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2) return -1;
                i = 2, c /= 2, l /= 2, n /= 2
            }

            function u(e, t) {
                return 1 === i ? e[t] : e.readUInt16BE(t * i)
            }
            if (a) {
                var s = -1;
                for (o = n; o < c; o++)
                    if (u(e, o) === u(t, -1 === s ? 0 : o - s)) {
                        if (-1 === s && (s = o), o - s + 1 === l) return s * i
                    } else -1 !== s && (o -= o - s), s = -1
            } else
                for (n + l > c && (n = c - l), o = n; o >= 0; o--) {
                    for (var f = !0, d = 0; d < l; d++)
                        if (u(e, o + d) !== u(t, d)) {
                            f = !1;
                            break
                        } if (f) return o
                }
            return -1
        }

        function y(e, t, n, r) {
            n = Number(n) || 0;
            var a = e.length - n;
            r ? (r = Number(r)) > a && (r = a) : r = a;
            var o = t.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            r > o / 2 && (r = o / 2);
            for (var i = 0; i < r; ++i) {
                var c = parseInt(t.substr(2 * i, 2), 16);
                if (isNaN(c)) return i;
                e[n + i] = c
            }
            return i
        }

        function w(e, t, n, r) {
            return V(D(t, e.length - n), e, n, r)
        }

        function E(e, t, n, r) {
            return V(function(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }

        function x(e, t, n, r) {
            return E(e, t, n, r)
        }

        function _(e, t, n, r) {
            return V(N(t), e, n, r)
        }

        function O(e, t, n, r) {
            return V(function(e, t) {
                for (var n, r, a, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = e.charCodeAt(i), r = n >> 8, a = n % 256, o.push(a), o.push(r);
                return o
            }(t, e.length - n), e, n, r)
        }

        function R(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }

        function z(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], a = t; a < n;) {
                var o, i, c, l, u = e[a],
                    s = null,
                    f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (a + f <= n) switch (f) {
                    case 1:
                        u < 128 && (s = u);
                        break;
                    case 2:
                        128 == (192 & (o = e[a + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (s = l);
                        break;
                    case 3:
                        o = e[a + 1], i = e[a + 2], 128 == (192 & o) && 128 == (192 & i) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & i) > 2047 && (l < 55296 || l > 57343) && (s = l);
                        break;
                    case 4:
                        o = e[a + 1], i = e[a + 2], c = e[a + 3], 128 == (192 & o) && 128 == (192 & i) && 128 == (192 & c) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & i) << 6 | 63 & c) > 65535 && l < 1114112 && (s = l)
                }
                null === s ? (s = 65533, f = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), a += f
            }
            return function(e) {
                var t = e.length;
                if (t <= 4096) return String.fromCharCode.apply(String, e);
                var n = "",
                    r = 0;
                for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                return n
            }(r)
        }
        t.Buffer = l, t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return l.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = i(), l.poolSize = 8192, l._augment = function(e) {
            return e.__proto__ = l.prototype, e
        }, l.from = function(e, t, n) {
            return u(null, e, t, n)
        }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
            value: null,
            configurable: !0
        })), l.alloc = function(e, t, n) {
            return function(e, t, n, r) {
                return s(t), t <= 0 ? c(e, t) : void 0 !== n ? "string" == typeof r ? c(e, t).fill(n, r) : c(e, t).fill(n) : c(e, t)
            }(null, e, t, n)
        }, l.allocUnsafe = function(e) {
            return f(null, e)
        }, l.allocUnsafeSlow = function(e) {
            return f(null, e)
        }, l.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, l.compare = function(e, t) {
            if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, r = t.length, a = 0, o = Math.min(n, r); a < o; ++a)
                if (e[a] !== t[a]) {
                    n = e[a], r = t[a];
                    break
                } return n < r ? -1 : r < n ? 1 : 0
        }, l.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function(e, t) {
            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return l.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = l.allocUnsafe(t),
                a = 0;
            for (n = 0; n < e.length; ++n) {
                var i = e[n];
                if (!l.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                i.copy(r, a), a += i.length
            }
            return r
        }, l.byteLength = g, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) p(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
            return this
        }, l.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? z(this, 0, e) : h.apply(this, arguments)
        }, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, l.prototype.compare = function(e, t, n, r, a) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw new RangeError("out of range index");
            if (r >= a && t >= n) return 0;
            if (r >= a) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var o = (a >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), c = Math.min(o, i), u = this.slice(r, a), s = e.slice(t, n), f = 0; f < c; ++f)
                if (u[f] !== s[f]) {
                    o = u[f], i = s[f];
                    break
                } return o < i ? -1 : i < o ? 1 : 0
        }, l.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, l.prototype.indexOf = function(e, t, n) {
            return m(this, e, t, n, !0)
        }, l.prototype.lastIndexOf = function(e, t, n) {
            return m(this, e, t, n, !1)
        }, l.prototype.write = function(e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var a = this.length - t;
            if ((void 0 === n || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1;;) switch (r) {
                case "hex":
                    return y(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return w(this, e, t, n);
                case "ascii":
                    return E(this, e, t, n);
                case "latin1":
                case "binary":
                    return x(this, e, t, n);
                case "base64":
                    return _(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return O(this, e, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };

        function C(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
            return r
        }

        function M(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
            return r
        }

        function A(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var a = "", o = t; o < n; ++o) a += F(e[o]);
            return a
        }

        function j(e, t, n) {
            for (var r = e.slice(t, n), a = "", o = 0; o < r.length; o += 2) a += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return a
        }

        function S(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function L(e, t, n, r, a, o) {
            if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > a || t < o) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range")
        }

        function B(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var a = 0, o = Math.min(e.length - n, 2); a < o; ++a) e[n + a] = (t & 255 << 8 * (r ? a : 1 - a)) >>> 8 * (r ? a : 1 - a)
        }

        function P(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var a = 0, o = Math.min(e.length - n, 4); a < o; ++a) e[n + a] = t >>> 8 * (r ? a : 3 - a) & 255
        }

        function T(e, t, n, r, a, o) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function k(e, t, n, r, o) {
            return o || T(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4
        }

        function H(e, t, n, r, o) {
            return o || T(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8
        }
        l.prototype.slice = function(e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
            else {
                var a = t - e;
                n = new l(a, void 0);
                for (var o = 0; o < a; ++o) n[o] = this[o + e]
            }
            return n
        }, l.prototype.readUIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || S(e, t, this.length);
            for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
            return r
        }, l.prototype.readUIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || S(e, t, this.length);
            for (var r = this[e + --t], a = 1; t > 0 && (a *= 256);) r += this[e + --t] * a;
            return r
        }, l.prototype.readUInt8 = function(e, t) {
            return t || S(e, 1, this.length), this[e]
        }, l.prototype.readUInt16LE = function(e, t) {
            return t || S(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUInt16BE = function(e, t) {
            return t || S(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUInt32LE = function(e, t) {
            return t || S(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, l.prototype.readUInt32BE = function(e, t) {
            return t || S(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || S(e, t, this.length);
            for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
            return r >= (a *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, l.prototype.readIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || S(e, t, this.length);
            for (var r = t, a = 1, o = this[e + --r]; r > 0 && (a *= 256);) o += this[e + --r] * a;
            return o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o
        }, l.prototype.readInt8 = function(e, t) {
            return t || S(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, l.prototype.readInt16LE = function(e, t) {
            t || S(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt16BE = function(e, t) {
            t || S(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt32LE = function(e, t) {
            return t || S(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function(e, t) {
            return t || S(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readFloatLE = function(e, t) {
            return t || S(e, 4, this.length), a.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function(e, t) {
            return t || S(e, 4, this.length), a.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(e, t) {
            return t || S(e, 8, this.length), a.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(e, t) {
            return t || S(e, 8, this.length), a.read(this, e, !1, 52, 8)
        }, l.prototype.writeUIntLE = function(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256);) this[t + o] = e / a & 255;
            return t + n
        }, l.prototype.writeUIntBE = function(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = n - 1,
                o = 1;
            for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) this[t + a] = e / o & 255;
            return t + n
        }, l.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, l.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
        }, l.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
        }, l.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : P(this, e, t, !0), t + 4
        }, l.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
        }, l.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var a = Math.pow(2, 8 * n - 1);
                L(this, e, t, n, a - 1, -a)
            }
            var o = 0,
                i = 1,
                c = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256);) e < 0 && 0 === c && 0 !== this[t + o - 1] && (c = 1), this[t + o] = (e / i >> 0) - c & 255;
            return t + n
        }, l.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var a = Math.pow(2, 8 * n - 1);
                L(this, e, t, n, a - 1, -a)
            }
            var o = n - 1,
                i = 1,
                c = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) e < 0 && 0 === c && 0 !== this[t + o + 1] && (c = 1), this[t + o] = (e / i >> 0) - c & 255;
            return t + n
        }, l.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
        }, l.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
        }, l.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : P(this, e, t, !0), t + 4
        }, l.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
        }, l.prototype.writeFloatLE = function(e, t, n) {
            return k(this, e, t, !0, n)
        }, l.prototype.writeFloatBE = function(e, t, n) {
            return k(this, e, t, !1, n)
        }, l.prototype.writeDoubleLE = function(e, t, n) {
            return H(this, e, t, !0, n)
        }, l.prototype.writeDoubleBE = function(e, t, n) {
            return H(this, e, t, !1, n)
        }, l.prototype.copy = function(e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var a, o = r - n;
            if (this === e && n < t && t < r)
                for (a = o - 1; a >= 0; --a) e[a + t] = this[a + n];
            else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                for (a = 0; a < o; ++a) e[a + t] = this[a + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o
        }, l.prototype.fill = function(e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                    var a = e.charCodeAt(0);
                    a < 256 && (e = a)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                for (o = t; o < n; ++o) this[o] = e;
            else {
                var i = l.isBuffer(e) ? e : D(new l(e, r).toString()),
                    c = i.length;
                for (o = 0; o < n - t; ++o) this[o + t] = i[o % c]
            }
            return this
        };
        var I = /[^+\/0-9A-Za-z-_]/g;

        function F(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function D(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, a = null, o = [], i = 0; i < r; ++i) {
                if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                    if (!a) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (i + 1 === r) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        a = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), a = n;
                        continue
                    }
                    n = 65536 + (a - 55296 << 10 | n - 56320)
                } else a && (t -= 3) > -1 && o.push(239, 191, 189);
                if (a = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function N(e) {
            return r.toByteArray(function(e) {
                if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(I, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function V(e, t, n, r) {
            for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
            return a
        }
    }).call(this, n(164))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
        var t = u(e),
            n = t[0],
            r = t[1];
        return 3 * (n + r) / 4 - r
    }, t.toByteArray = function(e) {
        var t, n, r = u(e),
            i = r[0],
            c = r[1],
            l = new o(function(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, i, c)),
            s = 0,
            f = c > 0 ? i - 4 : i;
        for (n = 0; n < f; n += 4) t = a[e.charCodeAt(n)] << 18 | a[e.charCodeAt(n + 1)] << 12 | a[e.charCodeAt(n + 2)] << 6 | a[e.charCodeAt(n + 3)], l[s++] = t >> 16 & 255, l[s++] = t >> 8 & 255, l[s++] = 255 & t;
        2 === c && (t = a[e.charCodeAt(n)] << 2 | a[e.charCodeAt(n + 1)] >> 4, l[s++] = 255 & t);
        1 === c && (t = a[e.charCodeAt(n)] << 10 | a[e.charCodeAt(n + 1)] << 4 | a[e.charCodeAt(n + 2)] >> 2, l[s++] = t >> 8 & 255, l[s++] = 255 & t);
        return l
    }, t.fromByteArray = function(e) {
        for (var t, n = e.length, a = n % 3, o = [], i = 0, c = n - a; i < c; i += 16383) o.push(s(e, i, i + 16383 > c ? c : i + 16383));
        1 === a ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === a && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return o.join("")
    };
    for (var r = [], a = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, l = i.length; c < l; ++c) r[c] = i[c], a[i.charCodeAt(c)] = c;

    function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function s(e, t, n) {
        for (var a, o, i = [], c = t; c < n; c += 3) a = (e[c] << 16 & 16711680) + (e[c + 1] << 8 & 65280) + (255 & e[c + 2]), i.push(r[(o = a) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        return i.join("")
    }
    a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63
}, function(e, t) {
    t.read = function(e, t, n, r, a) {
        var o, i, c = 8 * a - r - 1,
            l = (1 << c) - 1,
            u = l >> 1,
            s = -7,
            f = n ? a - 1 : 0,
            d = n ? -1 : 1,
            v = e[t + f];
        for (f += d, o = v & (1 << -s) - 1, v >>= -s, s += c; s > 0; o = 256 * o + e[t + f], f += d, s -= 8);
        for (i = o & (1 << -s) - 1, o >>= -s, s += r; s > 0; i = 256 * i + e[t + f], f += d, s -= 8);
        if (0 === o) o = 1 - u;
        else {
            if (o === l) return i ? NaN : 1 / 0 * (v ? -1 : 1);
            i += Math.pow(2, r), o -= u
        }
        return (v ? -1 : 1) * i * Math.pow(2, o - r)
    }, t.write = function(e, t, n, r, a, o) {
        var i, c, l, u = 8 * o - a - 1,
            s = (1 << u) - 1,
            f = s >> 1,
            d = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            v = r ? 0 : o - 1,
            g = r ? 1 : -1,
            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (c = isNaN(t) ? 1 : 0, i = s) : (i = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -i)) < 1 && (i--, l *= 2), (t += i + f >= 1 ? d / l : d * Math.pow(2, 1 - f)) * l >= 2 && (i++, l /= 2), i + f >= s ? (c = 0, i = s) : i + f >= 1 ? (c = (t * l - 1) * Math.pow(2, a), i += f) : (c = t * Math.pow(2, f - 1) * Math.pow(2, a), i = 0)); a >= 8; e[n + v] = 255 & c, v += g, c /= 256, a -= 8);
        for (i = i << a | c, u += a; u > 0; e[n + v] = 255 & i, v += g, i /= 256, u -= 8);
        e[n + v - g] |= 128 * h
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(169);

    function a() {}

    function o() {}
    o.resetWarningCache = a, e.exports = function() {
        function e(e, t, n, a, o, i) {
            if (i !== r) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: a
        };
        return n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t) {
    e.exports = function(e, t) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (a) throw o
                }
            }
            return n
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26),
        a = n(121),
        o = n(175),
        i = n(127);

    function c(e) {
        var t = new o(e),
            n = a(o.prototype.request, t);
        return r.extend(n, o.prototype, t), r.extend(n, t), n
    }
    var l = c(n(124));
    l.Axios = o, l.create = function(e) {
        return c(i(l.defaults, e))
    }, l.Cancel = n(128), l.CancelToken = n(189), l.isCancel = n(123), l.all = function(e) {
        return Promise.all(e)
    }, l.spread = n(190), e.exports = l, e.exports.default = l
}, function(e, t, n) {
    "use strict";
    var r = n(26),
        a = n(122),
        o = n(176),
        i = n(177),
        c = n(127);

    function l(e) {
        this.defaults = e, this.interceptors = {
            request: new o,
            response: new o
        }
    }
    l.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = c(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [i, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, l.prototype.getUri = function(e) {
        return e = c(this.defaults, e), a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], (function(e) {
        l.prototype[e] = function(t, n) {
            return this.request(r.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    })), r.forEach(["post", "put", "patch"], (function(e) {
        l.prototype[e] = function(t, n, a) {
            return this.request(r.merge(a || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    })), e.exports = l
}, function(e, t, n) {
    "use strict";
    var r = n(26);

    function a() {
        this.handlers = []
    }
    a.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, a.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, a.prototype.forEach = function(e) {
        r.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = n(26),
        a = n(178),
        o = n(123),
        i = n(124);

    function c(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return c(e), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        })), (e.adapter || i.adapter)(e).then((function(t) {
            return c(e), t.data = a(t.data, t.headers, e.transformResponse), t
        }), (function(t) {
            return o(t) || (c(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26);
    e.exports = function(e, t, n) {
        return r.forEach(n, (function(n) {
            e = n(e, t)
        })), e
    }
}, function(e, t) {
    var n, r, a = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            r = i
        }
    }();
    var l, u = [],
        s = !1,
        f = -1;

    function d() {
        s && l && (s = !1, l.length ? u = l.concat(u) : f = -1, u.length && v())
    }

    function v() {
        if (!s) {
            var e = c(d);
            s = !0;
            for (var t = u.length; t;) {
                for (l = u, u = []; ++f < t;) l && l[f].run();
                f = -1, t = u.length
            }
            l = null, s = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function g(e, t) {
        this.fun = e, this.array = t
    }

    function h() {}
    a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new g(e, t)), 1 !== u.length || s || c(v)
    }, g.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function(e) {
        return []
    }, a.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, a.cwd = function() {
        return "/"
    }, a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, a.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26);
    e.exports = function(e, t) {
        r.forEach(e, (function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(126);
    e.exports = function(e, t, n) {
        var a = n.config.validateStatus;
        !a || a(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, a) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = a, e.isAxiosError = !0, e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(184),
        a = n(185);
    e.exports = function(e, t) {
        return e && !r(t) ? a(e, t) : t
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26),
        a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, o, i = {};
        return e ? (r.forEach(e.split("\n"), (function(e) {
            if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
                if (i[t] && a.indexOf(t) >= 0) return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
            }
        })), i) : i
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26);
    e.exports = r.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function a(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = a(window.location.href),
            function(t) {
                var n = r.isString(t) ? a(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function(e, t, n, a, o, i) {
            var c = [];
            c.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), r.isString(a) && c.push("path=" + a), r.isString(o) && c.push("domain=" + o), !0 === i && c.push("secure"), document.cookie = c.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var r = n(128);

    function a(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        var n = this;
        e((function(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        }))
    }
    a.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, a.source = function() {
        var e;
        return {
            token: new a((function(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t, n) {
    ! function(t, n) {
        var r = function(e, t, n) {
            "use strict";
            var r, a;
            if (function() {
                    var t, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (t in a = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in a || (a[t] = n[t])
                }(), !t || !t.getElementsByClassName) return {
                init: function() {},
                cfg: a,
                noSupport: !0
            };
            var o = t.documentElement,
                i = e.HTMLPictureElement,
                c = e.addEventListener.bind(e),
                l = e.setTimeout,
                u = e.requestAnimationFrame || l,
                s = e.requestIdleCallback,
                f = /^picture$/i,
                d = ["load", "error", "lazyincluded", "_lazyloaded"],
                v = {},
                g = Array.prototype.forEach,
                h = function(e, t) {
                    return v[t] || (v[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), v[t].test(e.getAttribute("class") || "") && v[t]
                },
                p = function(e, t) {
                    h(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
                },
                m = function(e, t) {
                    var n;
                    (n = h(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(n, " "))
                },
                b = function(e, t, n) {
                    var r = n ? "addEventListener" : "removeEventListener";
                    n && b(e, t), d.forEach((function(n) {
                        e[r](n, t)
                    }))
                },
                y = function(e, n, a, o, i) {
                    var c = t.createEvent("Event");
                    return a || (a = {}), a.instance = r, c.initEvent(n, !o, !i), c.detail = a, e.dispatchEvent(c), c
                },
                w = function(t, n) {
                    var r;
                    !i && (r = e.picturefill || a.pf) ? (n && n.src && !t.getAttribute("srcset") && t.setAttribute("srcset", n.src), r({
                        reevaluate: !0,
                        elements: [t]
                    })) : n && n.src && (t.src = n.src)
                },
                E = function(e, t) {
                    return (getComputedStyle(e, null) || {})[t]
                },
                x = function(e, t, n) {
                    for (n = n || e.offsetWidth; n < a.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                    return n
                },
                _ = (ve = [], ge = [], he = ve, pe = function() {
                    var e = he;
                    for (he = ve.length ? ge : ve, fe = !0, de = !1; e.length;) e.shift()();
                    fe = !1
                }, me = function(e, n) {
                    fe && !n ? e.apply(this, arguments) : (he.push(e), de || (de = !0, (t.hidden ? l : u)(pe)))
                }, me._lsFlush = pe, me),
                O = function(e, t) {
                    return t ? function() {
                        _(e)
                    } : function() {
                        var t = this,
                            n = arguments;
                        _((function() {
                            e.apply(t, n)
                        }))
                    }
                },
                R = function(e) {
                    var t, r, a = function() {
                            t = null, e()
                        },
                        o = function() {
                            var e = n.now() - r;
                            e < 99 ? l(o, 99 - e) : (s || a)(a)
                        };
                    return function() {
                        r = n.now(), t || (t = l(o, 99))
                    }
                },
                z = ($ = /^img$/i, G = /^iframe$/i, Y = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent), q = 0, J = 0, K = -1, X = function(e) {
                    J--, (!e || J < 0 || !e.target) && (J = 0)
                }, Z = function(e) {
                    return null == U && (U = "hidden" == E(t.body, "visibility")), U || !("hidden" == E(e.parentNode, "visibility") && "hidden" == E(e, "visibility"))
                }, Q = function(e, n) {
                    var r, a = e,
                        i = Z(e);
                    for (D -= n, W += n, N -= n, V += n; i && (a = a.offsetParent) && a != t.body && a != o;)(i = (E(a, "opacity") || 1) > 0) && "visible" != E(a, "overflow") && (r = a.getBoundingClientRect(), i = V > r.left && N < r.right && W > r.top - 1 && D < r.bottom + 1);
                    return i
                }, ee = function() {
                    var e, n, i, c, l, u, s, f, d, v, g, h, p = r.elements;
                    if ((k = a.loadMode) && J < 8 && (e = p.length)) {
                        for (n = 0, K++; n < e; n++)
                            if (p[n] && !p[n]._lazyRace)
                                if (!Y || r.prematureUnveil && r.prematureUnveil(p[n])) ce(p[n]);
                                else if ((f = p[n].getAttribute("data-expand")) && (u = 1 * f) || (u = q), v || (v = !a.expand || a.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : a.expand, r._defEx = v, g = v * a.expFactor, h = a.hFac, U = null, q < g && J < 1 && K > 2 && k > 2 && !t.hidden ? (q = g, K = 0) : q = k > 1 && K > 1 && J < 6 ? v : 0), d !== u && (I = innerWidth + u * h, F = innerHeight + u, s = -1 * u, d = u), i = p[n].getBoundingClientRect(), (W = i.bottom) >= s && (D = i.top) <= F && (V = i.right) >= s * h && (N = i.left) <= I && (W || V || N || D) && (a.loadHidden || Z(p[n])) && (P && J < 3 && !f && (k < 3 || K < 4) || Q(p[n], u))) {
                            if (ce(p[n]), l = !0, J > 9) break
                        } else !l && P && !c && J < 4 && K < 4 && k > 2 && (B[0] || a.preloadAfterLoad) && (B[0] || !f && (W || V || N || D || "auto" != p[n].getAttribute(a.sizesAttr))) && (c = B[0] || p[n]);
                        c && !l && ce(c)
                    }
                }, te = function(e) {
                    var t, r = 0,
                        o = a.throttleDelay,
                        i = a.ricTimeout,
                        c = function() {
                            t = !1, r = n.now(), e()
                        },
                        u = s && i > 49 ? function() {
                            s(c, {
                                timeout: i
                            }), i !== a.ricTimeout && (i = a.ricTimeout)
                        } : O((function() {
                            l(c)
                        }), !0);
                    return function(e) {
                        var a;
                        (e = !0 === e) && (i = 33), t || (t = !0, (a = o - (n.now() - r)) < 0 && (a = 0), e || a < 9 ? u() : l(u, a))
                    }
                }(ee), ne = function(e) {
                    var t = e.target;
                    t._lazyCache ? delete t._lazyCache : (X(e), p(t, a.loadedClass), m(t, a.loadingClass), b(t, ae), y(t, "lazyloaded"))
                }, re = O(ne), ae = function(e) {
                    re({
                        target: e.target
                    })
                }, oe = function(e) {
                    var t, n = e.getAttribute(a.srcsetAttr);
                    (t = a.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                }, ie = O((function(e, t, n, r, o) {
                    var i, c, u, s, d, v;
                    (d = y(e, "lazybeforeunveil", t)).defaultPrevented || (r && (n ? p(e, a.autosizesClass) : e.setAttribute("sizes", r)), c = e.getAttribute(a.srcsetAttr), i = e.getAttribute(a.srcAttr), o && (s = (u = e.parentNode) && f.test(u.nodeName || "")), v = t.firesLoad || "src" in e && (c || i || s), d = {
                        target: e
                    }, p(e, a.loadingClass), v && (clearTimeout(T), T = l(X, 2500), b(e, ae, !0)), s && g.call(u.getElementsByTagName("source"), oe), c ? e.setAttribute("srcset", c) : i && !s && (G.test(e.nodeName) ? function(e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch (n) {
                            e.src = t
                        }
                    }(e, i) : e.src = i), o && (c || s) && w(e, {
                        src: i
                    })), e._lazyRace && delete e._lazyRace, m(e, a.lazyClass), _((function() {
                        var t = e.complete && e.naturalWidth > 1;
                        v && !t || (t && p(e, "ls-is-cached"), ne(d), e._lazyCache = !0, l((function() {
                            "_lazyCache" in e && delete e._lazyCache
                        }), 9)), "lazy" == e.loading && J--
                    }), !0)
                })), ce = function(e) {
                    if (!e._lazyRace) {
                        var t, n = $.test(e.nodeName),
                            r = n && (e.getAttribute(a.sizesAttr) || e.getAttribute("sizes")),
                            o = "auto" == r;
                        (!o && P || !n || !e.getAttribute("src") && !e.srcset || e.complete || h(e, a.errorClass) || !h(e, a.lazyClass)) && (t = y(e, "lazyunveilread").detail, o && C.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, J++, ie(e, t, o, r, n))
                    }
                }, le = R((function() {
                    a.loadMode = 3, te()
                })), ue = function() {
                    3 == a.loadMode && (a.loadMode = 2), le()
                }, se = function() {
                    P || (n.now() - H < 999 ? l(se, 999) : (P = !0, a.loadMode = 3, te(), c("scroll", ue, !0)))
                }, {
                    _: function() {
                        H = n.now(), r.elements = t.getElementsByClassName(a.lazyClass), B = t.getElementsByClassName(a.lazyClass + " " + a.preloadClass), c("scroll", te, !0), c("resize", te, !0), c("pageshow", (function(e) {
                            if (e.persisted) {
                                var n = t.querySelectorAll("." + a.loadingClass);
                                n.length && n.forEach && u((function() {
                                    n.forEach((function(e) {
                                        e.complete && ce(e)
                                    }))
                                }))
                            }
                        })), e.MutationObserver ? new MutationObserver(te).observe(o, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (o.addEventListener("DOMNodeInserted", te, !0), o.addEventListener("DOMAttrModified", te, !0), setInterval(te, 999)), c("hashchange", te, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                            t.addEventListener(e, te, !0)
                        })), /d$|^c/.test(t.readyState) ? se() : (c("load", se), t.addEventListener("DOMContentLoaded", te), l(se, 2e4)), r.elements.length ? (ee(), _._lsFlush()) : te()
                    },
                    checkElems: te,
                    unveil: ce,
                    _aLSL: ue
                }),
                C = (j = O((function(e, t, n, r) {
                    var a, o, i;
                    if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), f.test(t.nodeName || ""))
                        for (o = 0, i = (a = t.getElementsByTagName("source")).length; o < i; o++) a[o].setAttribute("sizes", r);
                    n.detail.dataAttr || w(e, n.detail)
                })), S = function(e, t, n) {
                    var r, a = e.parentNode;
                    a && (n = x(e, a, n), (r = y(e, "lazybeforesizes", {
                        width: n,
                        dataAttr: !!t
                    })).defaultPrevented || (n = r.detail.width) && n !== e._lazysizesWidth && j(e, a, r, n))
                }, L = R((function() {
                    var e, t = A.length;
                    if (t)
                        for (e = 0; e < t; e++) S(A[e])
                })), {
                    _: function() {
                        A = t.getElementsByClassName(a.autosizesClass), c("resize", L)
                    },
                    checkElems: L,
                    updateElem: S
                }),
                M = function() {
                    !M.i && t.getElementsByClassName && (M.i = !0, C._(), z._())
                };
            var A, j, S, L;
            var B, P, T, k, H, I, F, D, N, V, W, U, $, G, Y, q, J, K, X, Z, Q, ee, te, ne, re, ae, oe, ie, ce, le, ue, se;
            var fe, de, ve, ge, he, pe, me;
            return l((function() {
                a.init && M()
            })), r = {
                cfg: a,
                autoSizer: C,
                loader: z,
                init: M,
                uP: w,
                aC: p,
                rC: m,
                hC: h,
                fire: y,
                gW: x,
                rAF: _
            }
        }(t, t.document, Date);
        t.lazySizes = r, e.exports && (e.exports = r)
    }("undefined" != typeof window ? window : {})
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = f(n(129)),
        a = f(n(130)),
        o = f(n(193)),
        i = f(n(194)),
        c = f(n(195)),
        l = f(n(196)),
        u = f(n(131)),
        s = n(132);

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (a) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function v(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var h = function() {
        function e() {
            var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            v(this, e), this.opts = r, this.hooks = [], this.props = {}, this.messages = Object.assign({}, c.default), this.validators = Object.assign({}, l.default), this.typecasters = Object.assign({}, o.default), Object.keys(n).forEach((function(e) {
                return t.path(e, n[e])
            }))
        }
        var t, n, u;
        return t = e, (n = [{
            key: "path",
            value: function(t, n) {
                var r = this,
                    a = t.split("."),
                    o = a.pop(),
                    c = a.join(".");
                if (c && this.path(c), "$" === o && this.path(c).type(Array), n instanceof e) return n.hook((function(e, n) {
                    return r.path((0, s.join)(e, t), n)
                })), this.path(t, n.props);
                if (n instanceof i.default) return this.props[t] = n, this.propagate(t, n), n;
                var l = this.props[t] || new i.default(t, this);
                if (this.props[t] = l, this.propagate(t, l), !n) return l;
                if ("string" == typeof n || "function" == typeof n) return l.type(n), l;
                if (Array.isArray(n)) return l.type(Array), 1 === n.length ? l.each(n[0]) : l.elements(n), l;
                var u = !1;
                for (var f in n)
                    if (n.hasOwnProperty(f) && "function" != typeof l[f]) {
                        l.type(Object), u = !0;
                        break
                    } return Object.keys(n).forEach((function(e) {
                    var a = n[e];
                    if (u) return r.path((0, s.join)(e, t), a);
                    l[e](a)
                })), l
            }
        }, {
            key: "typecast",
            value: function(e) {
                for (var t = function() {
                        var t = d(r[n], 2),
                            o = t[0],
                            i = t[1];
                        (0, s.walk)(o, e, (function(t, n) {
                            if (null != n) {
                                var r = i.typecast(n);
                                r !== n && a.default.set(e, t, r)
                            }
                        }))
                    }, n = 0, r = Object.entries(this.props); n < r.length; n++) t();
                return this
            }
        }, {
            key: "strip",
            value: function(e, t) {
                var n = this,
                    a = (0, r.default)(e);
                if ("array" === a) return e.forEach((function(e, r) {
                    return n.strip(e, (0, s.join)("$", t))
                })), this;
                if ("object" !== a) return this;
                for (var o = 0, i = Object.entries(e); o < i.length; o++) {
                    var c = d(i[o], 2),
                        l = c[0],
                        u = c[1],
                        f = (0, s.join)(l, t);
                    this.props[f] ? this.strip(u, f) : delete e[l]
                }
                return this
            }
        }, {
            key: "validate",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t = Object.assign(this.opts, t);
                var n = [];
                t.typecast && this.typecast(e), !1 !== t.strip && this.strip(e);
                for (var r = function() {
                        var t = d(o[a], 2),
                            r = t[0],
                            i = t[1];
                        (0, s.walk)(r, e, (function(t, r) {
                            var a = i.validate(r, e, t);
                            a && n.push(a)
                        }))
                    }, a = 0, o = Object.entries(this.props); a < o.length; a++) r();
                return n
            }
        }, {
            key: "assert",
            value: function(e, t) {
                var n = d(this.validate(e, t), 1)[0];
                if (n) throw n
            }
        }, {
            key: "message",
            value: function(e, t) {
                return (0, s.assign)(e, t, this.messages), this
            }
        }, {
            key: "validator",
            value: function(e, t) {
                return (0, s.assign)(e, t, this.validators), this
            }
        }, {
            key: "typecaster",
            value: function(e, t) {
                return (0, s.assign)(e, t, this.typecasters), this
            }
        }, {
            key: "hook",
            value: function(e) {
                return this.hooks.push(e), this
            }
        }, {
            key: "propagate",
            value: function(e, t) {
                return this.hooks.forEach((function(n) {
                    return n(e, t)
                })), this
            }
        }]) && g(t.prototype, n), u && g(t, u), e
    }();
    t.default = h, h.ValidationError = u.default, e.exports = t.default
}, function(e, t) {
    function n(e, t) {
        var r = n[t];
        if ("function" != typeof r) throw new Error("cannot cast to " + t);
        return r(e)
    }
    e.exports = n, n.string = function(e) {
        return e.toString()
    }, n.number = function(e) {
        var t = parseFloat(e);
        return isNaN(t) ? null : t
    }, n.date = function(e) {
        var t = new Date(e);
        return isNaN(t.valueOf()) ? null : t
    }, n.array = function(e) {
        if (e instanceof Array) return e;
        for (var t = e.toString().split(","), n = 0; n < t.length; n++) t[n] = t[n].trim();
        return t
    }, n.boolean = function(e) {
        return !!e && "false" !== e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r, a = (r = n(131)) && r.__esModule ? r : {
            default: r
        },
        o = n(132);

    function i(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (a) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var u = function() {
        function e(t, n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.name = t, this.registry = {}, this._schema = n, this._type = null, this.messages = {}
        }
        var t, n, r;
        return t = e, (n = [{
            key: "message",
            value: function(e) {
                "string" == typeof e && (e = {
                    default: e
                });
                for (var t = 0, n = Object.entries(e); t < n.length; t++) {
                    var r = c(n[t], 2),
                        a = r[0],
                        o = r[1];
                    this.messages[a] = o
                }
                return this
            }
        }, {
            key: "schema",
            value: function(e) {
                return this._schema.path(this.name, e), this
            }
        }, {
            key: "use",
            value: function(e) {
                var t = this;
                return Object.keys(e).forEach((function(n) {
                    var r = e[n];
                    Array.isArray(r) || (r = [r]);
                    var a = r.shift();
                    t._register(n, r, a)
                })), this
            }
        }, {
            key: "required",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return this._register("required", [e])
            }
        }, {
            key: "type",
            value: function(e) {
                return this._type = e, this._register("type", [e])
            }
        }, {
            key: "string",
            value: function() {
                return this.type(String)
            }
        }, {
            key: "number",
            value: function() {
                return this.type(Number)
            }
        }, {
            key: "array",
            value: function() {
                return this.type(Array)
            }
        }, {
            key: "date",
            value: function() {
                return this.type(Date)
            }
        }, {
            key: "length",
            value: function(e) {
                return this._register("length", [e])
            }
        }, {
            key: "size",
            value: function(e) {
                return this._register("size", [e])
            }
        }, {
            key: "enum",
            value: function(e) {
                return this._register("enum", [e])
            }
        }, {
            key: "match",
            value: function(e) {
                return this._register("match", [e])
            }
        }, {
            key: "each",
            value: function(e) {
                return this._schema.path((0, o.join)("$", this.name), e), this
            }
        }, {
            key: "elements",
            value: function(e) {
                var t = this;
                return e.forEach((function(e, n) {
                    t._schema.path((0, o.join)(n, t.name), e)
                })), this
            }
        }, {
            key: "properties",
            value: function(e) {
                for (var t = 0, n = Object.entries(e); t < n.length; t++) {
                    var r = c(n[t], 2),
                        a = r[0],
                        i = r[1];
                    this._schema.path((0, o.join)(a, this.name), i)
                }
                return this
            }
        }, {
            key: "path",
            value: function() {
                var e;
                return (e = this._schema).path.apply(e, arguments)
            }
        }, {
            key: "typecast",
            value: function(e) {
                var t = this._schema,
                    n = this._type;
                if (!n) return e;
                "function" == typeof n && (n = n.name);
                var r = t.typecasters[n] || t.typecasters[n.toLowerCase()];
                if ("function" != typeof r) throw new Error("Typecasting failed: No typecaster defined for ".concat(n, "."));
                return r(e)
            }
        }, {
            key: "validate",
            value: function(e, t) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.name, r = Object.keys(this.registry), a = 0, o = r; a < o.length; a++) {
                    var i = o[a],
                        c = this._run(i, e, t, n);
                    if (c) return c
                }
                return null
            }
        }, {
            key: "_run",
            value: function(e, t, n, r) {
                if (this.registry[e]) {
                    var a = this._schema,
                        o = this.registry[e],
                        c = o.args;
                    return (o.fn || a.validators[e]).apply(void 0, [t, n].concat(i(c), [r])) ? void 0 : this._error(e, n, c, r)
                }
            }
        }, {
            key: "_register",
            value: function(e, t, n) {
                return this.registry[e] = {
                    args: t,
                    fn: n
                }, this
            }
        }, {
            key: "_error",
            value: function(e, t, n, r) {
                var o = this._schema,
                    c = this.messages[e] || this.messages.default || o.messages[e] || o.messages.default;
                return "function" == typeof c && (c = c.apply(void 0, [r, t].concat(i(n)))), new a.default(c, r)
            }
        }]) && l(t.prototype, n), r && l(t, r), e
    }();
    t.default = u, e.exports = t.default
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = {
        type: function(e, t, n) {
            return "function" == typeof n && (n = n.name), "".concat(e, " must be of type ").concat(n, ".")
        },
        required: function(e) {
            return "".concat(e, " is required.")
        },
        match: function(e, t, n) {
            return "".concat(e, " must match ").concat(n, ".")
        },
        length: function(e, t, n) {
            if ("number" == typeof n) return "".concat(e, " must have a length of ").concat(n, ".");
            var r = n.min,
                a = n.max;
            return r && a ? "".concat(e, " must have a length between ").concat(r, " and ").concat(a, ".") : a ? "".concat(e, " must have a maximum length of ").concat(a, ".") : r ? "".concat(e, " must have a minimum length of ").concat(r, ".") : void 0
        },
        size: function(e, t, n) {
            if ("number" == typeof n) return "".concat(e, " must have a size of ").concat(n, ".");
            var r = n.min,
                a = n.max;
            return void 0 !== r && void 0 !== a ? "".concat(e, " must be between ").concat(r, " and ").concat(a, ".") : void 0 !== a ? "".concat(e, " must be less than ").concat(a, ".") : void 0 !== r ? "".concat(e, " must be greater than ").concat(r, ".") : void 0
        },
        enum: function(e, t, n) {
            var r = n.slice(),
                a = r.pop();
            return "".concat(e, " must be either ").concat(r.join(", "), " or ").concat(a, ".")
        },
        default: function(e) {
            return "Validation failed for ".concat(e, ".")
        }
    };
    t.default = r, e.exports = t.default
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r, a = (r = n(129)) && r.__esModule ? r : {
        default: r
    };
    var o = {
        required: function(e, t, n) {
            return !1 === n || null != e && "" !== e
        },
        type: function(e, t, n) {
            return null == e || ("function" == typeof n ? e.constructor === n : (0, a.default)(e) === n)
        },
        length: function(e, t, n) {
            if (null == e) return !0;
            if ("number" == typeof n) return e.length === n;
            var r = n.min,
                a = n.max;
            return !(r && e.length < r) && !(a && e.length > a)
        },
        size: function(e, t, n) {
            if (null == e) return !0;
            if ("number" == typeof n) return e === n;
            var r = n.min,
                a = n.max;
            return !(null != parseInt(r) && e < r) && !(null != parseInt(a) && e > a)
        },
        enum: function(e, t, n) {
            return null == e || n.includes(e)
        },
        match: function(e, t, n) {
            return null == e || n.test(e)
        }
    };
    t.default = o, e.exports = t.default
}, function(e, t) {
    const n = Object.freeze({
        Verbose: 0,
        Information: 1,
        Warning: 2,
        Error: 3,
        Critical: 4
    });
    class r extends Error {
        constructor(e) {
            super(e), this.name = "NotFoundError"
        }
    }
    class a extends Error {
        constructor(e, t) {
            super(t), this.name = e
        }
    }

    function o(e, t, r, o = n.Error) {
        let i;
        throw i = "string" == typeof e ? new a(e, r) : new e(r), i.status = t, i.severityLevel = o, i
    }
    e.exports = {
        throwGenericError: function(e, t, r = n.Error) {
            const a = new Error(t);
            throw a.status = e, a.severityLevel = r, a
        },
        throwCustomError: o,
        throwMissingDataError: function(e) {
            o(r, 404, `Article with ID ${e} was not found via GraphQL`, n.Error)
        },
        NotFoundError: r,
        CustomError: a,
        SeverityLevel: n
    }
}, function(e, t) {
    e.exports = {
        validateObjectKeysAsString: function(e) {
            Object.values(e).forEach(e => {
                if ("string" != typeof e) return !1
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(43),
        i = n(10);

    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var l = [].concat(o.a.clonableProps, ["paddingProps", "widthProps"]),
        u = Object(r.forwardRef)((function(e, t) {
            var n = Object(i.a)(e, l),
                r = n[0],
                u = n[1],
                s = n[2];
            return (a.a.createElement(o.a, c({
                className: r,
                ref: t,
                style: u
            }, s, {
                size: "Paragraph"
            })))
        }));
    u.displayName = "Paragraph", u.identifier = u.displayName, u.clonableProps = l, u.defaultProps = {
        as: "p",
        decoration: "none",
        fontFamily: "system",
        textAlign: "inherit"
    }, t.a = u
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(157),
        l = n(10),
        u = n(18),
        s = n(42),
        f = n(102),
        d = n(143),
        v = n(144),
        g = n(25),
        h = n.n(g);

    function p() {
        return (p = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var m = ["flexProps", "marginProps", "floatProps"],
        b = Object(r.forwardRef)((function(e, t) {
            var n, r = e.appearance,
                o = e.as,
                g = e.children,
                b = e.disabled,
                y = e.iconLeft,
                w = e.iconRight,
                E = e.size,
                x = e.width,
                _ = e.loading,
                O = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["appearance", "as", "children", "disabled", "iconLeft", "iconRight", "size", "width", "loading"]),
                R = b || _,
                z = ((n = {})[h.a.root] = !0, n[h.a.small] = "small" === E, n[h.a.large] = "large" === E, n[h.a.primary] = "primary" === r, n[h.a.secondary] = "secondary" === r, n[h.a.plain] = "plain" === r, n[h.a.outline] = "outline" === r, n[h.a.full] = "full" === x, n[h.a.disabled] = R, n[h.a.loading] = _, n),
                C = Object(l.a)(O, m),
                M = C[0],
                A = C[1],
                j = C[2],
                S = Object(c.a)(y, "Button"),
                L = Object(c.a)(w, "Button");
            return a.a.createElement(u.a, p({
                as: o,
                className: i()(z, M),
                style: A,
                disabled: R,
                ref: t
            }, j), y && a.a.createElement(s.a, p({}, S, {
                size: "small",
                className: g && h.a.iconLeft
            })), a.a.createElement("span", {
                className: h.a.content
            }, g), w && a.a.createElement(s.a, p({}, L, {
                size: "small",
                className: g && h.a.iconRight
            })), _ && a.a.createElement(f.a, {
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                className: h.a.loader,
                clone: !0
            }, a.a.createElement(d.a, {
                justifyContent: "center",
                alignItems: "center"
            }, a.a.createElement(v.a, {
                role: "status",
                size: "small" === E ? "small" : "medium"
            }))))
        }));
    b.displayName = "Button", b.identifier = b.displayName, b.clonableProps = m, b.defaultProps = {
        appearance: "primary",
        as: "button",
        size: "large",
        width: "auto"
    }, t.a = b
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = n(1),
        i = n.n(o),
        c = n(43),
        l = n(57),
        u = n.n(l);

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var f = c.a.clonableProps,
        d = Object(r.forwardRef)((function(e, t) {
            var n, r = e.as,
                o = e.level,
                l = e.className,
                f = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, ["as", "level", "className"]),
                d = ((n = {})[u.a.heading1Weight] = 1 === o && !f.fontWeight, n[u.a.heading2Weight] = 2 === o && !f.fontWeight, n[u.a.heading3Weight] = 3 === o && !f.fontWeight, n[u.a.heading4Weight] = 4 === o && !f.fontWeight, n[u.a.heading5Weight] = 5 === o && !f.fontWeight, n[u.a.heading6Weight] = 6 === o && !f.fontWeight, n);
            return a.a.createElement(c.a, s({
                className: i()(d, l),
                ref: t,
                as: r || "h" + o
            }, f, {
                size: "Heading" + o
            }))
        }));
    d.displayName = "Heading", d.identifier = d.displayName, d.clonableProps = f, d.defaultProps = {
        decoration: "none",
        fontFamily: "system",
        level: 1,
        textAlign: "inherit"
    }, t.a = d
}]);
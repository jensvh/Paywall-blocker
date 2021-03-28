(window.webpackJsonp = window.webpackJsonp || []).push([
    [31], {
        564: function(e, t, r) {
            "use strict";
            var n, o = r(1),
                i = r.n(o),
                a = (r(3), r(6)),
                c = r.n(a),
                l = r(5),
                u = r.n(l),
                s = r(0),
                f = r.n(s),
                p = r(2);
            r(9);

            function y(e) {
                return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t, r, o) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    a = arguments.length - 3;
                if (t || 0 === a || (t = {
                        children: void 0
                    }), 1 === a) t.children = o;
                else if (a > 1) {
                    for (var c = new Array(a), l = 0; l < a; l++) c[l] = arguments[l + 3];
                    t.children = c
                }
                if (t && i)
                    for (var u in i) void 0 === t[u] && (t[u] = i[u]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return g(this, r)
                }
            }

            function g(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var w = u()("PremiumLabelWithLine"),
                j = {
                    premium: Object(p.a)("metering.label"),
                    bestOf: "Het beste van De Telegraaf"
                },
                S = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && v(e, t)
                    }(i, e);
                    var t, r, n, o = h(i);

                    function i() {
                        return b(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = f()(this.props, "className");
                            return d("div", {
                                className: c()(w("body"), e)
                            }, void 0, d("p", {
                                className: w("label")
                            }, void 0, j.premium), d("p", {
                                className: w("bestOf")
                            }, void 0, j.bestOf))
                        }
                    }]) && m(t.prototype, r), n && m(t, n), i
                }(i.a.PureComponent);
            S.defaultProps = {
                className: ""
            }, t.a = S
        },
        569: function(e, t, r) {
            "use strict";
            var n, o = r(1),
                i = r.n(o),
                a = r(0),
                c = r.n(a),
                l = r(20),
                u = r(16),
                s = r(3),
                f = r.n(s),
                p = r(5),
                y = r.n(p),
                d = r(201),
                b = r(205),
                m = r(99),
                v = r(76),
                h = ["zero", "één", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien"],
                g = r(2);
            r(9);

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t, r, o) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    a = arguments.length - 3;
                if (t || 0 === a || (t = {
                        children: void 0
                    }), 1 === a) t.children = o;
                else if (a > 1) {
                    for (var c = new Array(a), l = 0; l < a; l++) c[l] = arguments[l + 3];
                    t.children = c
                }
                if (t && i)
                    for (var u in i) void 0 === t[u] && (t[u] = i[u]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function j(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function k(e, t) {
                return (k = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function P(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return _(this, r)
                }
            }

            function _(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var R, E = y()("MeteringNotification"),
                A = {
                    title: "De eerste <amount> ".concat(Object(g.a)("metering.label"), "-artikelen kreeg u cadeau. Verder lezen?"),
                    titleIncognito: "Verder lezen?",
                    list: ["Onbeperkt toegang tot onze beste artikelen, video's en podcasts", "Lees, kijk en luister alles op Telegraaf.nl en in De Telegraaf-app"],
                    buyLink: "Bekijk de aanbieding",
                    loginLink: "Inloggen voor abonnees"
                },
                N = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && k(e, t)
                    }(i, e);
                    var t, r, n, o = P(i);

                    function i() {
                        return j(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "renderLogin",
                        value: function() {
                            var e = c()(this.props, "sessionLoaded"),
                                t = c()(this.props, "loggedIn");
                            if (!e || t) return null;
                            var r = c()(this.props, "search", ""),
                                n = c()(this.props, "pathName", "/"),
                                o = Object(g.a)("login.routes.login"),
                                i = Object(m.c)(m.b.login, o, n + r),
                                a = Object(g.a)("metering.loginLink") || A.loginLink,
                                l = c()(this.props, "onClickLogin");
                            return w("div", {
                                className: E("loginBlock")
                            }, void 0, w("a", {
                                href: i,
                                className: E("loginLink"),
                                onClick: l
                            }, void 0, a))
                        }
                    }, {
                        key: "renderDescription",
                        value: function() {
                            var e = Object(g.a)("metering.list") || A.list;
                            return 1 === e.length ? w("p", {
                                className: E("oneLineText")
                            }, void 0, e[0]) : w("ul", {
                                className: E("list")
                            }, void 0, e.map((function(e, t) {
                                return w("li", {
                                    className: E("text")
                                }, t, e)
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = c()(this.props, "articleUrl"),
                                t = "".concat((c()(this.props, "articleIntro") || "").slice(0, 300), "..."),
                                r = Object(g.a)("metering.freeArticlesLimit"),
                                n = Object(g.a)("metering.textTitle") || A.title,
                                o = c()(this.props, "loggedIn"),
                                i = "b" === c()(this.props, "paywallVersion"),
                                a = c()(this.props, "articleIsTimewall") ? Object(g.a)("metering.subscriptionUrlTimewall") : Object(g.a)("metering.subscriptionUrl");
                            return w(i ? "div" : d.a, {
                                className: E("backdrop", {
                                    inline: i
                                })
                            }, void 0, i && t && w("div", {
                                dangerouslySetInnerHTML: {
                                    __html: t
                                },
                                className: E("intro")
                            }), w("div", {
                                className: E({
                                    inline: i
                                }),
                                id: b.a
                            }, void 0, w("h1", {
                                className: E("title")
                            }, void 0, c()(this.props, "isIncognito") ? Object(g.a)("metering.titleIncognito") || A.titleIncognito : n.replace("<amount>", h[r] || r).replace(/<br\s*\/?>/g, "\n")), this.renderDescription(), w("a", {
                                href: a + Object(v.a)(e),
                                className: E("buyLink", {
                                    bottomMargin: o
                                }),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: c()(this.props, "onClickSubscription")
                            }, void 0, Object(g.a)("metering.buyLink") || A.buyLink), this.renderLogin()))
                        }
                    }]) && S(t.prototype, r), n && S(t, n), i
                }(i.a.Component);

            function C(e) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function x(e, t, r, n) {
                R || (R = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: R,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function D(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function I(e, t) {
                return (I = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function L(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return $(this, r)
                }
            }

            function $(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? B(e) : t
            }

            function B(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function M(e) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            N.defaultProps = {
                pathName: "/",
                sessionLoaded: !1,
                search: "",
                isIncognito: !1,
                loggedIn: !1
            }, N.contextTypes = {
                trackEvent: f.a.func
            };
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && I(e, t)
                }(i, e);
                var t, r, n, o = L(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = o.call(this, e)).state = {
                        paywallVersion: "a"
                    }, t.onClickLogin = t.onClickLogin.bind(B(t)), t.onClickSubscription = t.onClickSubscription.bind(B(t)), t.localStorageUpdated = t.localStorageUpdated.bind(B(t)), t
                }
                return t = i, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = localStorage.getItem("paywall") || "a";
                        "a" !== e && this.localStorageUpdated(), window.addEventListener("storage", this.localStorageUpdated), c()(this.props, "pageViewTracked") && e === this.state.paywallVersion && this.trackEvent("show")
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        c()(this.props, "articleUrl") === c()(e, "articleUrl") && c()(this.props, "pageViewTracked") === c()(e, "pageViewTracked") || this.trackEvent("show")
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("storage", this.localStorageUpdated)
                    }
                }, {
                    key: "onClickLogin",
                    value: function(e) {
                        e.preventDefault();
                        var t = c()(e, "currentTarget.href");
                        this.trackEvent("login"), setTimeout((function() {
                            window.location.href = t
                        }), 600)
                    }
                }, {
                    key: "onClickSubscription",
                    value: function() {
                        this.trackEvent("subscribe")
                    }
                }, {
                    key: "localStorageUpdated",
                    value: function() {
                        var e = this,
                            t = localStorage.getItem("paywall");
                        t && t !== this.state.paywallVersion && this.setState({
                            paywallVersion: t
                        }, (function() {
                            return e.trackEvent("show")
                        }))
                    }
                }, {
                    key: "trackEvent",
                    value: function(e) {
                        var t = c()(this.context, "trackEvent"),
                            r = c()(this.props, "articleUrl"),
                            n = c()(this.props, "articleIsPremium"),
                            o = c()(this.props, "articleIsTimewall");
                        t({
                            event: {
                                action: e,
                                paywallversion: c()(this.state, "paywallVersion"),
                                type: "paywall",
                                url: r,
                                premium: n,
                                timewall: o
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Object(g.a)("metering.enabled") ? x(N, {
                            onClickLogin: this.onClickLogin,
                            onClickSubscription: this.onClickSubscription,
                            articleUrl: c()(this.props, "articleUrl"),
                            articleIntro: c()(this.props, "articleIntro"),
                            pathName: c()(this.props, "location.pathname", "/"),
                            sessionLoaded: c()(this.props, "user.sessionIsLoaded"),
                            loggedIn: c()(this.props, "user.session.isActive"),
                            search: c()(this.props, "location.search", ""),
                            isIncognito: c()(this.props, "user.metering.incognitoMode"),
                            articleIsTimewall: c()(this.props, "articleIsTimewall"),
                            paywallVersion: this.state.paywallVersion
                        }) : null
                    }
                }]) && D(t.prototype, r), n && D(t, n), i
            }(i.a.Component);
            U.defaultProps = {
                articleIntro: "",
                pageViewTracked: !1
            }, U.contextTypes = {
                trackEvent: f.a.func
            };
            t.a = Object(l.b)((function(e) {
                return {
                    user: e.user,
                    pageViewTracked: e.pageEvents.pageViewTracked
                }
            }), null)(Object(u.f)(U))
        },
        573: function(e, t, r) {
            "use strict";
            var n, o = r(1),
                i = r.n(o),
                a = r(3),
                c = r.n(a),
                l = r(11),
                u = r(40),
                s = r.n(u),
                f = r(0),
                p = r.n(f),
                y = r(5),
                d = r.n(y),
                b = r(14);
            var m, v, h, g = r.n(b)()(n || (m = ["\n  query PartnerContentBiograpqhy($tag: String) {\n    listArticlesByTags(tagType: FOLLOWED_THEME_TAGS, tags: [$tag], articleType: BIOGRAFIE) {\n      ... on Article {\n        id\n        title\n        bodyBlocks {\n          ... on HtmlBlock {\n            contentHTML\n          }\n        }\n        teaser {\n          title\n          image {\n            id\n            url\n            description\n          }\n        }\n        mainSection {\n          id\n          name\n          path\n\n          parentSection {\n            id\n            name\n          }\n        }\n        sectionList {\n          id\n          path\n        }\n        sectionTree {\n          id\n          path\n        }\n      }\n    }\n    listArticlesByAuthorTags:listArticlesByTags(tagType: AUTHORS_TAGS, tags: [$tag], articleType: BIOGRAFIE) {\n      ... on Article {\n        id\n        title\n        bodyBlocks {\n          ... on HtmlBlock {\n            contentHTML\n          }\n        }\n        teaser {\n          title\n          image {\n            id\n            url\n            description\n          }\n        }\n        mainSection {\n          id\n          name\n          path\n\n          parentSection {\n            id\n            name\n          }\n        }\n        sectionList {\n          id\n          path\n        }\n        sectionTree {\n          id\n          path\n        }\n      }\n    }\n  }\n"], v || (v = m.slice(0)), n = Object.freeze(Object.defineProperties(m, {
                    raw: {
                        value: Object.freeze(v)
                    }
                })))),
                O = r(41);
            r(9);

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function j(e, t, r, n) {
                h || (h = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: h,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        P(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function P(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function R(e, t) {
                return (R = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = N(e);
                    if (t) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return A(this, r)
                }
            }

            function A(e, t) {
                return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var C = d()("PartnerContentBiography"),
                x = "Deze inhoud valt buiten de verantwoordelijkheid van de hoofdredactie van De Telegraaf.",
                D = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && R(e, t)
                    }(i, e);
                    var t, r, n, o = E(i);

                    function i() {
                        return _(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "getChildContext",
                        value: function() {
                            var e = this;
                            return {
                                trackEvent: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        r = p()(e.props, "listArticlesByTags[0]");
                                    e.context.trackEvent(k(k({}, t), {}, {
                                        article: r
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "articlePage"),
                                t = p()(this.props, "listArticlesByTags[0]"),
                                r = p()(this.props, "listArticlesByAuthorTags[0]"),
                                n = t || r,
                                o = p()(n, "teaser.title", "Gesponsord");
                            if (e) return j("div", {
                                className: C("body")
                            }, void 0, j("div", {
                                className: C("content")
                            }, void 0, j("div", {}, void 0, "Gesponsord door ".concat(o))), j("div", {
                                className: C("description", {
                                    banner: !0
                                })
                            }, void 0, x));
                            var i = p()(n, "mainSection.name"),
                                a = p()(n, "teaser.image.url");
                            return j("div", {
                                className: C("body", {
                                    withPicture: !0
                                })
                            }, void 0, j(s.a, {
                                title: "".concat(o, " | Het laatste nieuws uit Nederland leest u op Telegraaf.nl")
                            }), j("div", {
                                className: C("imageWrapper")
                            }, void 0, j("img", {
                                alt: "teaser",
                                className: C("image"),
                                src: Object(O.b)(a, 120, 120, "jpeg", 80)
                            })), j("div", {
                                className: C("textWrapper")
                            }, void 0, j("p", {
                                className: C("section")
                            }, void 0, i), j("p", {
                                className: C("title")
                            }, void 0, o), j("p", {
                                className: C("description")
                            }, void 0, x)))
                        }
                    }]) && T(t.prototype, r), n && T(t, n), i
                }(i.a.Component);
            D.contextTypes = {
                trackEvent: c.a.func
            }, D.childContextTypes = {
                trackEvent: c.a.func
            };
            t.a = Object(l.d)(g, {
                options: function(e) {
                    return {
                        variables: {
                            tag: e.tag
                        }
                    }
                },
                props: function(e) {
                    return k({}, e.data)
                }
            })(D)
        },
        606: function(e, t, r) {
            "use strict";
            r.r(t);
            var n, o = r(3),
                i = r.n(o),
                a = r(1),
                c = r.n(a),
                l = r(11),
                u = r(18),
                s = r(20),
                f = r(0),
                p = r.n(f),
                y = r(5),
                d = r.n(y),
                b = r(6),
                m = r.n(b),
                v = r(58),
                h = r(562),
                g = r(83),
                O = r(192),
                w = r(588),
                j = r(571),
                S = r(584),
                k = r(585),
                P = r(570),
                _ = r(568),
                T = r(40),
                R = r.n(T),
                E = r(2);

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function N(e, t, r, o) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    a = arguments.length - 3;
                if (t || 0 === a || (t = {
                        children: void 0
                    }), 1 === a) t.children = o;
                else if (a > 1) {
                    for (var c = new Array(a), l = 0; l < a; l++) c[l] = arguments[l + 3];
                    t.children = c
                }
                if (t && i)
                    for (var u in i) void 0 === t[u] && (t[u] = i[u]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function D(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = $(e);
                    if (t) {
                        var o = $(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? L(e) : t
            }

            function L(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function $(e) {
                return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var B, M = N("div", {
                    id: "coral_thread"
                }, "coral_thread"),
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && x(e, t)
                    }(i, e);
                    var t, r, n, o = D(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = o.call(this, e)).handleCoralLogout = t.handleCoralLogout.bind(L(t)), t
                    }
                    return t = i, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("message", this.handleCoralLogout, !1)
                        }
                    }, {
                        key: "handleCoralLogout",
                        value: function(e) {
                            return 'pymxPYMxcoral_threadxPYMxeventxPYMx{"eventName":"mutation.signOut"}' === e.data && (window.location.href = "//".concat(Object(E.a)("sso.host", "accounts.tnet.nl"), "/tl/uitloggen/?reset=1&new_style=1&social_disabled=0&marketing_opt_in=1&redirect_url=").concat(Object(E.a)("baseUrl", "https://www.telegraaf.nl"), "/accounts/logout?returnTo=").concat(window.location.href)), !0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return N(c.a.Fragment, {}, void 0, M, N(R.a, {}, void 0, N("script", {
                                defer: !0,
                                src: "".concat(Object(E.a)("talk.baseUrl", "https://talk.telegraaf.nl/"), "assets/js/count.js")
                            }), Object(E.a)("useCdn", !1) ? N("script", {
                                id: "coral-init",
                                "data-articleUID": this.props.articleUID,
                                src: "/cdn/statics/js/coral-init.js?v=".concat(Object(E.a)("version", ""))
                            }) : N("script", {
                                id: "coral-init",
                                "data-articleUID": this.props.articleUID,
                                src: "/statics/js/coral-init.js?v=".concat(Object(E.a)("version", ""))
                            })))
                        }
                    }]) && C(t.prototype, r), n && C(t, n), i
                }(c.a.PureComponent);

            function W(e) {
                return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function z(e, t, r, n) {
                B || (B = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: B,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function V(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function F(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function H(e, t) {
                return (H = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function G(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Y(e);
                    if (t) {
                        var o = Y(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return q(this, r)
                }
            }

            function q(e, t) {
                return !t || "object" !== W(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Y(e) {
                return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Q, K = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && H(e, t)
                    }(i, e);
                    var t, r, n, o = G(i);

                    function i() {
                        return V(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            return z(U, {
                                articleUID: this.props.articleUID
                            })
                        }
                    }]) && F(t.prototype, r), n && F(t, n), i
                }(c.a.PureComponent),
                J = r(564),
                X = r(31),
                Z = r(75),
                ee = r(14),
                te = r.n(ee),
                re = r(59);
            var ne, oe, ie, ae = te()(Q || (ne = ["\n  query ArticleBreakingThemeTeaser(\n  $uid: Long,\n  $src: ArticleSourceEnum\n  $theme: String\n  ) {\n    article(uid: $uid, src: $src) {\n      id\n      mainSection {\n        id\n        name\n      }\n    }\n    listArticlesByTags(tagType: FOLLOWED_THEME_TAGS, tags: [$theme]) {\n      id\n      uid\n      theme\n      ...Teaser\n    }\n  }\n  ", "\n"], oe || (oe = ne.slice(0)), Q = Object.freeze(Object.defineProperties(ne, {
                raw: {
                    value: Object.freeze(oe)
                }
            }))), re.a);
            r(9);

            function ce(e) {
                return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function le(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ue(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function se(e, t, r, n) {
                ie || (ie = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: ie,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function fe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function pe(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function ye(e, t) {
                return (ye = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function de(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = me(e);
                    if (t) {
                        var o = me(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return be(this, r)
                }
            }

            function be(e, t) {
                return !t || "object" !== ce(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function me(e) {
                return (me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ve = d()("ThemeTeaser"),
                he = se(g.a, {
                    xlarge: 12,
                    gutters: !1
                }),
                ge = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && ye(e, t)
                    }(i, e);
                    var t, r, n, o = de(i);

                    function i() {
                        return fe(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "loading"),
                                t = (p()(this.props, "theme"), p()(this.props, "listArticlesByTags") || []),
                                r = !!p()(this.props, "article.mainSection.name"),
                                n = t.length > 1;
                            if (e || !r || !n) return null;
                            var o = t[0],
                                i = p()(o, "theme", null),
                                a = p()(o, "teaser.image", null),
                                c = p()(o, "type", null),
                                l = i ? Object(E.a)("themeTagPath") + i : "";
                            return l && se("section", {
                                className: ve("body")
                            }, void 0, he, se(g.a, {
                                small: 100,
                                xlarge: 75,
                                gutters: !1
                            }, void 0, se("div", {
                                className: ve("teaserWrapper"),
                                "data-element": "breakingNewsArticleTeaser"
                            }, void 0, se("div", {
                                className: ve("teaserText")
                            }, void 0, se("span", {
                                className: ve("theme"),
                                "data-element": "breakingNewsArticleTheme"
                            }, void 0, i), se("span", {
                                className: ve("title"),
                                "data-element": "breakingNewsArticleTitle"
                            }, void 0, "Lees meer over dit thema en vind alle verhalen in een overzicht"), se(X.b, {
                                to: l,
                                className: ve("link"),
                                "data-element": "breakingNewsArticleButton"
                            }, void 0, "Meer lezen hierover")), se("div", {
                                className: ve("image")
                            }, void 0, se(Z.a, {
                                image: a,
                                type: c,
                                articleURL: l,
                                widths: [170, 170, 170, 170]
                            })))))
                        }
                    }]) && pe(t.prototype, r), n && pe(t, n), i
                }(c.a.PureComponent);
            ge.defaultProps = {
                loading: !1,
                theme: "",
                article: {},
                listArticlesByTags: []
            };
            var Oe, we = Object(l.d)(ae, {
                    options: function(e) {
                        var t = e.theme;
                        return {
                            variables: {
                                uid: e.uid,
                                src: e.src,
                                theme: t
                            }
                        }
                    },
                    props: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? le(Object(r), !0).forEach((function(t) {
                                    ue(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : le(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, e.data)
                    }
                })(ge),
                je = r(555),
                Se = r(579),
                ke = r(199),
                Pe = r(208),
                _e = r(26);
            var Te, Re = te()(Oe || (Oe = function(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n  query RelatedArticles(\n    $articleCount: Int,\n    $tagCount: Int,\n    $src: ArticleSourceEnum,\n    $uid: Long,\n    $exclude: [Long]\n  ) {\n    article(uid: $uid, src: $src) {\n      id\n      uid\n      tagWithRelatedArticles: tags(first: $tagCount) {\n        articles(first: $articleCount, exclude: $exclude) {\n          id\n          uid\n          ...Teaser\n        }\n      }\n    }\n  }\n  ", "\n"])), re.a);

            function Ee(e) {
                return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ae(e, t, r, n) {
                Te || (Te = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Te,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Ne(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(r), !0).forEach((function(t) {
                        xe(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ne(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function xe(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function De(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ie(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Le(e, t) {
                return (Le = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function $e(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Me(e);
                    if (t) {
                        var o = Me(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Be(this, r)
                }
            }

            function Be(e, t) {
                return !t || "object" !== Ee(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Me(e) {
                return (Me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Ue = d()("RelatedArticles"),
                We = "Gerelateerde artikelen",
                ze = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Le(e, t)
                    }(i, e);
                    var t, r, n, o = $e(i);

                    function i() {
                        return De(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "getChildContext",
                        value: function() {
                            var e = this;
                            return {
                                trackEvent: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    e.context.trackEvent(Ce(Ce({}, t), {}, {
                                        container: {
                                            type: "related-articles",
                                            title: "Related article"
                                        }
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (p()(this.props, "loading")) return null;
                            var e = p()(this.props, "article.tagWithRelatedArticles[0].articles", []);
                            return e && e.length > 0 ? Ae("section", {
                                className: Ue("container"),
                                "data-vr-zone": "Related articles"
                            }, void 0, Ae("h1", {
                                className: Ue("title"),
                                "data-element": "relatedArticleHeader"
                            }, void 0, We), e.map((function(e, t) {
                                return Ae(g.a, {
                                    medium: 60,
                                    large: 50,
                                    className: Ue("articles"),
                                    "data-element": "relatedArticleContainer"
                                }, t, Ae(_e.a, {
                                    article: e,
                                    rootClasses: Ue("teaser"),
                                    imageClasses: Ue("teaserImage"),
                                    infoWrapClasses: Ue("teaserInfoWrap"),
                                    headlineClasses: Ue("teaserHeadline"),
                                    playIconClasses: Ue("teaserPlayIcon"),
                                    imageWidths: [170, 170, 170, 170],
                                    position: t + 1,
                                    summaryClasses: Ue("summary"),
                                    metadataWrapperClasses: Ue("metadata")
                                }))
                            }))) : null
                        }
                    }]) && Ie(t.prototype, r), n && Ie(t, n), i
                }(c.a.Component);
            ze.defaultProps = {
                article: {},
                match: {
                    params: {
                        articleId: ""
                    }
                }
            }, ze.contextTypes = {
                trackEvent: i.a.func
            }, ze.childContextTypes = {
                trackEvent: i.a.func
            };
            var Ve, Fe = Object(l.d)(Re, {
                options: function(e) {
                    var t = p()(e, "match.params.articleId"),
                        r = parseInt(t, 10);
                    return {
                        variables: {
                            articleCount: 6,
                            tagCount: 1,
                            src: p()(e, "src", "KIOSK"),
                            uid: r,
                            exclude: [r]
                        },
                        fetchPolicy: "cache-and-network"
                    }
                },
                props: function(e) {
                    return Ce({}, e.data)
                }
            })(ze);

            function He(e) {
                return (He = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ge(e, t, r, n) {
                Ve || (Ve = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Ve,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function qe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ye(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Qe(e, t) {
                return (Qe = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Ke(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Xe(e);
                    if (t) {
                        var o = Xe(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Je(this, r)
                }
            }

            function Je(e, t) {
                return !t || "object" !== He(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Xe(e) {
                return (Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Ze, et = d()("ArticlePrologBlock"),
                tt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Qe(e, t)
                    }(i, e);
                    var t, r, n, o = Ke(i);

                    function i() {
                        return qe(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "maxAllowedItems") || 6,
                                t = p()(this.props, "article.prologBlocks", []).filter((function(e) {
                                    return p()(e, "contentHTML")
                                })).slice(0, e);
                            return t.length ? Ge("div", {
                                className: et("body")
                            }, void 0, t.map((function(e, t) {
                                return "HtmlBlock" !== e.__typename ? (console.warn("Unknown body-block found of type:", e.__typename), null) : Ge("p", {
                                    dangerouslySetInnerHTML: {
                                        __html: "&mdash; ".concat(e.contentHTML)
                                    }
                                }, t)
                            }))) : null
                        }
                    }]) && Ye(t.prototype, r), n && Ye(t, n), i
                }(c.a.PureComponent);

            function rt(e) {
                return (rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function nt(e, t, r, n) {
                Ze || (Ze = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Ze,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function ot(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function it(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function at(e, t) {
                return (at = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ct(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = ut(e);
                    if (t) {
                        var o = ut(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return lt(this, r)
                }
            }

            function lt(e, t) {
                return !t || "object" !== rt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ut(e) {
                return (ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            tt.defaultProps = {
                maxAllowedItems: 6
            };
            var st, ft = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && at(e, t)
                    }(i, e);
                    var t, r, n, o = ct(i);

                    function i() {
                        return ot(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            return nt(tt, {
                                maxAllowedItems: p()(this.props, "maxAllowedItems"),
                                article: p()(this.props, "article")
                            })
                        }
                    }]) && it(t.prototype, r), n && it(t, n), i
                }(c.a.PureComponent),
                pt = r(587),
                yt = r(580),
                dt = r(581),
                bt = r(573),
                mt = r(252),
                vt = r(46);

            function ht(e) {
                return (ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function gt(e, t, r, n) {
                st || (st = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: st,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Ot(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function wt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function jt(e, t) {
                return (jt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function St(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Pt(e);
                    if (t) {
                        var o = Pt(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return kt(this, r)
                }
            }

            function kt(e, t) {
                return !t || "object" !== ht(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Pt(e) {
                return (Pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var _t = d()("TeaserSectionLink"),
                Tt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && jt(e, t)
                    }(i, e);
                    var t, r, n, o = St(i);

                    function i() {
                        return Ot(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "text"),
                                t = p()(this.props, "url") || "",
                                r = p()(this.props, "className") || "",
                                n = p()(this.props, "dataElement") || "",
                                o = m()(_t("link"), r);
                            return gt(X.b, {
                                to: t,
                                className: o,
                                "data-element": n
                            }, void 0, e || gt(vt.a, {
                                className: _t("skeleton")
                            }))
                        }
                    }]) && wt(t.prototype, r), n && wt(t, n), i
                }(c.a.PureComponent);
            Tt.defaultProps = {
                text: "",
                url: "",
                className: ""
            };
            var Rt, Et = r(145),
                At = r(198),
                Nt = r(97),
                Ct = r(15);

            function xt(e) {
                return (xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Dt(e, t, r, n) {
                Rt || (Rt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Rt,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function It(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Lt(e, t) {
                return (Lt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function $t(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Ut(e);
                    if (t) {
                        var o = Ut(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Bt(this, r)
                }
            }

            function Bt(e, t) {
                return !t || "object" !== xt(t) && "function" != typeof t ? Mt(e) : t
            }

            function Mt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Ut(e) {
                return (Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Wt, zt = d()("SmallListTeaser"),
                Vt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Lt(e, t)
                    }(i, e);
                    var t, r, n, o = $t(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = o.call(this, e)).handleClick = t.handleClick.bind(Mt(t)), t
                    }
                    return t = i, (r = [{
                        key: "handleClick",
                        value: function() {
                            var e = this.context.trackEvent,
                                t = p()(this.props, "position"),
                                r = p()(this.props, "article.url", "");
                            t && e({
                                event: {
                                    type: "teaser",
                                    position: t,
                                    url: r
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "imageWidths"),
                                t = p()(this.props, "className") || "",
                                r = p()(this.props, "position"),
                                n = p()(this.props, "article.url", ""),
                                o = p()(this.props, "article.mainSection.path", ""),
                                i = p()(this.props, "article.mainSection.name"),
                                a = p()(this.props, "article.shortReadableDate"),
                                c = p()(this.props, "article.publishDate"),
                                l = p()(this.props, "article.teaser.image"),
                                u = p()(this.props, "article.teaser.title"),
                                s = p()(this.props, "article.type"),
                                f = p()(this.props, "article.premium") || !1,
                                y = p()(this.props, "article.comments.enabled") || !1,
                                d = !!l || !u && !l;
                            return Dt("article", {
                                className: t,
                                "data-element": "smallListTeaserRoot",
                                onClick: this.handleClick,
                                "data-vr-contentbox": "Position ".concat(r),
                                "data-vr-contentbox-url": "https://www.telegraaf.nl".concat(n)
                            }, void 0, Dt(g.a, {
                                small: d ? 66 : 100,
                                medium: d ? 66 : 100,
                                large: d ? 66 : 100,
                                xlarge: d ? 75 : 100,
                                gutters: !1
                            }, void 0, Dt(At.b, {}, void 0, f && Dt(At.a, {
                                className: zt("premiumLabelWrapper")
                            }, void 0, Dt(Nt.a, {
                                className: zt("premiumLabel")
                            })), Dt(At.a, {}, void 0, Dt(Et.a, {
                                dateText: a,
                                dateTime: c,
                                className: zt("timestamp", {
                                    premium: f
                                })
                            })), y && Dt(At.a, {}, void 0, Dt("span", {
                                className: zt("commentsIcon")
                            })), Dt(At.a, {
                                className: zt("sectionLinkWrapper")
                            }, void 0, Dt(Tt, {
                                url: o,
                                text: i,
                                className: zt("sectionLink", {
                                    commentsEnabled: y
                                })
                            }))), Dt(Ct.a, {
                                url: n,
                                className: zt("teaserLink")
                            }, void 0, Dt(mt.a, {
                                text: u,
                                articleURL: n,
                                className: zt("headline")
                            }))), d && Dt(g.a, {
                                small: 33,
                                medium: 33,
                                large: 33,
                                xlarge: 25,
                                gutters: !1
                            }, void 0, Dt(Ct.a, {
                                url: n,
                                className: zt("teaserLink")
                            }, void 0, Dt(Z.a, {
                                image: l,
                                articleURL: n,
                                widths: e,
                                type: s,
                                playIconClasses: zt("playIcon")
                            }))))
                        }
                    }]) && It(t.prototype, r), n && It(t, n), i
                }(c.a.PureComponent);
            Vt.defaultProps = {
                className: "",
                position: null
            }, Vt.contextTypes = {
                trackEvent: i.a.func
            };
            var Ft, Ht = te()(Wt || (Wt = function(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n  fragment SmallListTeaser on Article {\n    id\n    uid\n    type\n    url\n    publishDate\n    shortReadableDate\n    premium\n    comments {\n      enabled\n    }\n    teaser {\n      title\n      image {\n        id\n        url\n      }\n    }\n    mainSection {\n      id\n      name\n      path\n    }\n  }\n"])));
            var Gt, qt = te()(Ft || (Ft = function(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n  query PartnerContentMoreArticles($first: Int, $tag: String, $skip: Boolean!) {\n    listArticlesByTags(\n      first: $first,\n      tagType: FOLLOWED_THEME_TAGS,\n      tags: [$tag],\n      articleType: NORMAL\n    ) @skip(if: $skip) {\n      id\n      ...SmallListTeaser\n    }\n    listArticlesByAuthorTags:listArticlesByTags(\n      first: $first,\n      tagType: AUTHORS_TAGS,\n      tags: [$tag],\n      articleType: NORMAL\n    ) @skip(if: $skip) {\n      id\n      ...SmallListTeaser\n    }\n  }\n  ", "\n"])), Ht);

            function Yt(e) {
                return (Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Qt() {
                return (Qt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Kt(e, t, r, n) {
                Gt || (Gt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Gt,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Jt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Xt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Jt(Object(r), !0).forEach((function(t) {
                        Zt(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Zt(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function er(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function tr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function rr(e, t) {
                return (rr = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function nr(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = ir(e);
                    if (t) {
                        var o = ir(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return or(this, r)
                }
            }

            function or(e, t) {
                return !t || "object" !== Yt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ir(e) {
                return (ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ar = d()("PartnerContentMoreArticles"),
                cr = "Meer artikelen over",
                lr = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && rr(e, t)
                    }(i, e);
                    var t, r, n, o = nr(i);

                    function i() {
                        return er(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "getChildContext",
                        value: function() {
                            var e = this;
                            return {
                                trackEvent: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        r = p()(e.props, "disableTracking");
                                    r || e.context.trackEvent(Xt(Xt({}, t), {}, {
                                        container: {
                                            type: "sidebar"
                                        }
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "getHeader",
                        value: function() {
                            var e = p()(this.props, "listArticlesByTags"),
                                t = p()(this.props, "listArticlesByAuthorTags"),
                                r = e && e.length > 0 ? e : t,
                                n = p()(this.props, "theme"),
                                o = p()(r, "0.author"),
                                i = n ? n.replace(/_/g, " ") : o;
                            return Kt("div", {
                                className: ar("headerWrapper")
                            }, void 0, Kt("h2", {
                                className: ar("header")
                            }, void 0, cr, " ", i))
                        }
                    }, {
                        key: "getArticleList",
                        value: function() {
                            var e = p()(this.props, "listArticlesByTags") || [],
                                t = p()(this.props, "listArticlesByAuthorTags") || [],
                                r = e.length > 0 ? e : t,
                                n = {
                                    imageWidths: [178, 125, 110, 102]
                                };
                            return Kt("div", {
                                className: ar("articleWrapper")
                            }, void 0, r.map((function(e, t) {
                                return Kt("div", {
                                    className: ar("listWrapper")
                                }, t, c.a.createElement(Vt, Qt({}, n, {
                                    className: ar("list", {
                                        bordered: t !== r.length - 1
                                    }),
                                    article: e,
                                    position: t + 1
                                })))
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (p()(this.props, "loading")) return null;
                            var e = p()(this.props, "listArticlesByTags"),
                                t = p()(this.props, "listArticlesByAuthorTags"),
                                r = e && e.length > 0 ? e : t;
                            return r && r.length > 1 ? Kt("div", {
                                className: ar("body")
                            }, void 0, this.getHeader(), this.getArticleList()) : null
                        }
                    }]) && tr(t.prototype, r), n && tr(t, n), i
                }(c.a.Component);
            lr.defaultProps = {
                loading: !1,
                theme: "",
                listArticlesByTags: [],
                listArticlesByAuthorTags: []
            }, lr.contextTypes = {
                trackEvent: i.a.func
            }, lr.childContextTypes = {
                trackEvent: i.a.func
            };
            var ur, sr = Object(l.d)(qt, {
                    options: function(e) {
                        var t = p()(e, "theme"),
                            r = p()(e, "author"),
                            n = t || r;
                        return {
                            variables: {
                                first: 7,
                                tag: n,
                                skip: !n
                            }
                        }
                    },
                    props: function(e) {
                        return Xt({}, e.data)
                    }
                })(lr),
                fr = r(572),
                pr = r(194);
            var yr, dr = te()(ur || (ur = function(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }(["\n  query MostReadVideos (\n    $path: String,\n    $first: Int,\n    $articleType: ArticleType,\n    $autoFill: Boolean,\n    $premiumOnly: Boolean,\n  ) {\n    mostReadVideos: section(path: $path) {\n      id\n      allArticles(first: $first, sort: MOSTREAD, articleType: $articleType, autoFill: $autoFill, premiumOnly: $premiumOnly) {\n        id\n        ...Teaser\n      }\n    }\n  }\n  ", "\n"])), re.a),
                br = r(127);

            function mr(e) {
                return (mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function vr(e, t, r, n) {
                yr || (yr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: yr,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function hr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function gr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? hr(Object(r), !0).forEach((function(t) {
                        Or(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hr(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Or(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function wr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function jr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Sr(e, t) {
                return (Sr = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function kr(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = _r(e);
                    if (t) {
                        var o = _r(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Pr(this, r)
                }
            }

            function Pr(e, t) {
                return !t || "object" !== mr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _r(e) {
                return (_r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Tr, Rr = d()("MostReadVideos"),
                Er = "POPULAIRE VIDEO'S",
                Ar = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Sr(e, t)
                    }(i, e);
                    var t, r, n, o = kr(i);

                    function i() {
                        return wr(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "getChildContext",
                        value: function() {
                            var e = this;
                            return {
                                trackEvent: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    e.context.trackEvent(gr(gr({}, t), {}, {
                                        container: {
                                            type: "related-articles",
                                            title: "Related video"
                                        }
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "renderTeasers",
                        value: function() {
                            return p()(this.props, "articles", []).map((function(e, t) {
                                return vr(_e.a, {
                                    article: e,
                                    position: t + 1,
                                    timestampSeparator: !1,
                                    rootClasses: Rr("teaser"),
                                    imageClasses: Rr("teaserImage"),
                                    playIconClasses: Rr("playIcon"),
                                    imageWidths: [144, 150, 246, 246],
                                    timestampClasses: Rr("timestamp"),
                                    headlineClasses: Rr("teaserHeadline"),
                                    summaryClasses: Rr("summary"),
                                    sectionNameClasses: Rr("sectionName"),
                                    premiumLabelClasses: Rr("premiumLabel")
                                }, p()(e, "id") || t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return vr("section", {}, void 0, vr("div", {
                                className: Rr("contentWrapper")
                            }, void 0, vr("h2", {
                                className: Rr("title"),
                                "data-element": "mostReadVideosTitle"
                            }, void 0, Er), vr("div", {
                                className: Rr("articlesWrapper"),
                                "data-element": "mostReadVideoRoot"
                            }, void 0, this.renderTeasers())), vr(br.a, {
                                className: Rr("separator")
                            }))
                        }
                    }]) && jr(t.prototype, r), n && jr(t, n), i
                }(c.a.Component);

            function Nr(e) {
                return (Nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Cr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function xr(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Dr(e, t, r, n) {
                Tr || (Tr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Tr,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Ir(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Lr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function $r(e, t) {
                return ($r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Br(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Ur(e);
                    if (t) {
                        var o = Ur(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Mr(this, r)
                }
            }

            function Mr(e, t) {
                return !t || "object" !== Nr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ur(e) {
                return (Ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Ar.contextTypes = {
                trackEvent: i.a.func
            }, Ar.childContextTypes = {
                trackEvent: i.a.func
            };
            var Wr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && $r(e, t)
                }(i, e);
                var t, r, n, o = Br(i);

                function i() {
                    return Ir(this, i), o.apply(this, arguments)
                }
                return t = i, (r = [{
                    key: "render",
                    value: function() {
                        var e = p()(this.props, "loading"),
                            t = p()(this.props, "mostReadVideos.allArticles", []);
                        return !e && t && t.length ? Dr(Ar, {
                            articles: t
                        }) : null
                    }
                }]) && Lr(t.prototype, r), n && Lr(t, n), i
            }(c.a.Component);
            Wr.defaultProps = {
                mostReadVideos: null
            };
            var zr, Vr = Object(l.d)(dr, {
                options: function(e) {
                    return {
                        variables: {
                            path: e.path || "/",
                            first: 4,
                            articleType: e.articleType || "VIDEO",
                            autoFill: !1,
                            premiumOnly: !!e.premiumOnly
                        },
                        fetchPolicy: "cache-and-network"
                    }
                },
                props: function(e) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Cr(Object(r), !0).forEach((function(t) {
                                xr(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cr(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e.data)
                }
            })(Wr);

            function Fr(e) {
                return (Fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Hr(e, t, r, n) {
                zr || (zr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: zr,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Gr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function qr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Yr(e, t) {
                return (Yr = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Qr(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Jr(e);
                    if (t) {
                        var o = Jr(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Kr(this, r)
                }
            }

            function Kr(e, t) {
                return !t || "object" !== Fr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Jr(e) {
                return (Jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Xr, Zr, en = d()("MostRecentPremium"),
                tn = "HET BESTE VAN DE TELEGRAAF",
                rn = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Yr(e, t)
                    }(i, e);
                    var t, r, n, o = Qr(i);

                    function i() {
                        return Gr(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "renderTeasers",
                        value: function(e) {
                            return e.map((function(e, t) {
                                return Hr(_e.a, {
                                    hiddenSummary: !0,
                                    article: e,
                                    position: t + 1,
                                    rootClasses: en("teaser"),
                                    imageClasses: en("teaserImage"),
                                    imageWidths: [144, 150, 246, 246],
                                    timestampClasses: en("timestamp"),
                                    headlineClasses: en("teaserHeadline")
                                }, e.id)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "articles") || [];
                            return e && !e.length ? null : Hr("section", {
                                className: en("contentWrapper"),
                                "data-element": "theBestOfPremiumArticles"
                            }, void 0, Hr("h2", {
                                className: en("title"),
                                "data-element": "theBestOfPremiumTitle"
                            }, void 0, tn), Hr("div", {
                                className: en("teaserWrapper")
                            }, void 0, this.renderTeasers(e)))
                        }
                    }]) && qr(t.prototype, r), n && qr(t, n), i
                }(c.a.PureComponent);

            function nn(e) {
                return (nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function on(e, t, r, n) {
                Zr || (Zr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Zr,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function an(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function cn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? an(Object(r), !0).forEach((function(t) {
                        ln(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : an(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function ln(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function un(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function sn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function fn(e, t) {
                return (fn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function pn(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = dn(e);
                    if (t) {
                        var o = dn(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return yn(this, r)
                }
            }

            function yn(e, t) {
                return !t || "object" !== nn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function dn(e) {
                return (dn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            rn.defaultProps = {
                articles: []
            };
            var bn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && fn(e, t)
                }(i, e);
                var t, r, n, o = pn(i);

                function i() {
                    return un(this, i), o.apply(this, arguments)
                }
                return t = i, (r = [{
                    key: "getChildContext",
                    value: function() {
                        var e = this;
                        return {
                            trackEvent: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                e.context.trackEvent(cn(cn({}, t), {}, {
                                    container: {
                                        type: "content-block",
                                        title: "Related ".concat(Object(E.a)("metering.label"), " Article")
                                    }
                                }))
                            }
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return on(rn, {
                            articles: p()(this.props, "articles", [])
                        })
                    }
                }]) && sn(t.prototype, r), n && sn(t, n), i
            }(c.a.Component);
            bn.childContextTypes = {
                trackEvent: i.a.func
            }, bn.contextTypes = {
                trackEvent: i.a.func
            };
            var mn, vn = Object(l.d)(te()(Xr || (Xr = function(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }(["\n  query MostRecentPremium (\n    $path: String,\n  ) {\n    mostRecentPremium: section(path: $path) {\n      id\n      allArticles(first: 4, sort: MOSTRECENT, articleType: NORMAL, autoFill: false, premiumOnly: true) {\n        ...Teaser\n      }\n    }\n  }\n  ", "\n"])), re.a), {
                    options: function(e) {
                        return {
                            variables: {
                                path: e.path || "/"
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    },
                    props: function(e) {
                        var t = e.data;
                        return {
                            articles: p()(t, "mostRecentPremium.allArticles")
                        }
                    }
                })(bn),
                hn = r(12),
                gn = r(569),
                On = r(99);

            function wn(e) {
                return (wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function jn(e, t, r, n) {
                mn || (mn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: mn,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Sn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function kn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Pn(e, t) {
                return (Pn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _n(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Rn(e);
                    if (t) {
                        var o = Rn(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Tn(this, r)
                }
            }

            function Tn(e, t) {
                return !t || "object" !== wn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Rn(e) {
                return (Rn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var En, An = d()("PremiumBannerBlock"),
                Nn = {
                    alreadyHaveAccount: "Heb je al een account?",
                    readMore: "Verder lezen?",
                    readMore1: "Interessant artikel?",
                    makeAccount: "Maak een account aan",
                    makeAccountFull: "Maak een account aan en lees alle Telegraaf ".concat(Object(E.a)("metering.label"), "-artikelen nu tijdelijk helemaal gratis."),
                    makeAccountFull1: "Maak snel een account aan en lees alle ".concat(Object(E.a)("metering.label"), "-artikelen. Helemaal gratis."),
                    oneMinute: "Het is makkelijk en in 1 minuut geregeld!",
                    login: "Log hier dan in!",
                    sorryLoginDisabled: "Onze excuses, login is momenteel niet mogelijk."
                },
                Cn = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Pn(e, t)
                    }(i, e);
                    var t, r, n, o = _n(i);

                    function i() {
                        return Sn(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "loading"),
                                t = p()(this.props, "article"),
                                r = p()(t, "premium") || p()(t, "timewall");
                            if (e || !r) return null;
                            var n = p()(this.props, "refererIsValid"),
                                o = Object(E.a)("login.routes.login"),
                                i = Object(On.c)(On.b.login, o, p()(t, "absoluteUrl")),
                                a = Object(On.c)(On.b.register, o, p()(t, "absoluteUrl"));
                            return jn("div", {
                                className: An("body")
                            }, void 0, !n && jn("div", {
                                className: An("intro")
                            }, void 0, jn("p", {
                                dangerouslySetInnerHTML: {
                                    __html: t.intro
                                }
                            })), Object(E.a)("login.enabled") && Object(E.a)("login.premiumBanner") ? jn("div", {
                                className: An("modal")
                            }, void 0, jn("div", {
                                className: An("gradient", {
                                    referred: n
                                })
                            }), jn("div", {
                                className: An("cardWrapper")
                            }, void 0, jn("div", {
                                className: An("card")
                            }, void 0, jn("p", {
                                className: An("title")
                            }, void 0, n ? Nn.readMore1 : Nn.readMore), jn("p", {
                                className: An("makeAccount")
                            }, void 0, n ? Nn.makeAccountFull1 : Nn.makeAccountFull), jn("div", {
                                className: An("buttonWrapper")
                            }, void 0, jn("a", {
                                href: a
                            }, void 0, jn("button", {
                                type: "button",
                                className: An("button")
                            }, void 0, Nn.makeAccount)), jn("p", {
                                className: An("buttonSubtitle")
                            }, void 0, Nn.oneMinute))), jn("div", {
                                className: An("bottomWrapper")
                            }, void 0, Nn.alreadyHaveAccount, " ", jn("a", {
                                href: i,
                                className: An("link")
                            }, void 0, Nn.login)))) : jn("span", {}, void 0, Nn.sorryLoginDisabled))
                        }
                    }]) && kn(t.prototype, r), n && kn(t, n), i
                }(c.a.PureComponent);
            Cn.defaultProps = {
                refererIsValid: !1
            };
            var xn, Dn = te()(En || (En = function(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n  query PremiumBanner(\n    $uid: Long,\n    $src: ArticleSourceEnum\n  ) {\n    article(uid: $uid, src: $src) {\n      id\n      absoluteUrl\n      intro\n      premium\n      timewall\n    }\n  }\n"])));

            function In(e) {
                return (In = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ln(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function $n(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Bn(e, t, r, n) {
                xn || (xn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: xn,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Mn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Un(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Wn(e, t) {
                return (Wn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function zn(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Fn(e);
                    if (t) {
                        var o = Fn(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Vn(this, r)
                }
            }

            function Vn(e, t) {
                return !t || "object" !== In(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Fn(e) {
                return (Fn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Hn, Gn = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Wn(e, t)
                    }(i, e);
                    var t, r, n, o = zn(i);

                    function i() {
                        return Mn(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            return Bn(Cn, {
                                loading: p()(this.props, "loading"),
                                article: p()(this.props, "article"),
                                refererIsValid: p()(this.props, "referer.isValid")
                            })
                        }
                    }]) && Un(t.prototype, r), n && Un(t, n), i
                }(c.a.PureComponent),
                qn = Object(l.d)(Dn, {
                    options: function(e) {
                        return {
                            variables: {
                                src: p()(e, "src", "KIOSK"),
                                uid: parseInt(p()(e, "match.params.articleId"), 10)
                            }
                        }
                    },
                    props: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ln(Object(r), !0).forEach((function(t) {
                                    $n(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ln(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, e.data)
                    }
                })(Gn),
                Yn = r(561);

            function Qn(e) {
                return (Qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Kn(e, t, r, n) {
                Hn || (Hn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Hn,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Jn(e) {
                return function(e) {
                    if (Array.isArray(e)) return Xn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Xn(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xn(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Zn(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function eo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zn(Object(r), !0).forEach((function(t) {
                        to(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zn(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function to(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function ro(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function no(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function oo(e, t) {
                return (oo = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function io(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = co(e);
                    if (t) {
                        var o = co(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return ao(this, r)
                }
            }

            function ao(e, t) {
                return !t || "object" !== Qn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function co(e) {
                return (co = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var lo = d()("ArticleStocksWidget"),
                uo = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && oo(e, t)
                    }(i, e);
                    var t, r, n, o = io(i);

                    function i() {
                        return ro(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = p()(this.props, "isMobile", !1),
                                t = p()(this.props, "mockData"),
                                r = t ? p()(t, "data.article.categories") : p()(this.props, "article.categories") || [],
                                n = t ? p()(t, "data.aex.list") : p()(this.props, "aex.list") || [],
                                o = t ? p()(t, "data.amx.list") : p()(this.props, "amx.list") || [],
                                i = n.map((function(e) {
                                    return eo(eo({}, e), {}, {
                                        type: "aex"
                                    })
                                })),
                                a = o.map((function(e) {
                                    return eo(eo({}, e), {}, {
                                        type: "amx"
                                    })
                                })),
                                c = [].concat(Jn(i), Jn(a)).filter((function(e) {
                                    var t = r.filter((function(t) {
                                        if (0 === t.indexOf("Beurzen")) {
                                            var r = t.replace("Beurzen/", "").split("/"),
                                                n = r[0],
                                                o = r[1];
                                            if (e && n && e.isin && e.isin === n) return !0;
                                            if (e && o && e.name && 0 === e.name.indexOf(o)) return !0
                                        }
                                        return !1
                                    }));
                                    return t && t.length
                                }));
                            return c && c.length ? [c.map((function(t) {
                                var r = t.name.length >= 20 ? Object(Yn.a)(t.name, 20) : t.name,
                                    n = "/financieel/bedrijven/".concat(t.type, "/").concat(t.slug, "/overzicht");
                                return Kn("div", {
                                    className: lo("wrapper", {
                                        medium: e,
                                        large: !e
                                    })
                                }, t.id, Kn(X.b, {
                                    to: n,
                                    className: lo("link")
                                }, void 0, Kn("button", {
                                    type: "button",
                                    className: lo("name")
                                }, void 0, r), Kn("button", {
                                    type: "button",
                                    className: lo("price")
                                }, void 0, Kn("span", {
                                    className: lo("+" === t.direction ? "price-up" : "price-down")
                                }, void 0, t.price), Kn("span", {
                                    className: lo("+" === t.direction ? "relvar-up" : "relvar-down")
                                }, void 0, t.relvar, "%"))))
                            }))] : null
                        }
                    }]) && no(t.prototype, r), n && no(t, n), i
                }(c.a.PureComponent);

            function so(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function fo(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var po, yo = Object(l.c)(Object(l.d)({
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArticleStocksWidget"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uid"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Long"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "article"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uid"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uid"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "categories"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "aex"
                                },
                                name: {
                                    kind: "Name",
                                    value: "vwdQuotes"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "FUND_TYPE"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "predicate"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "url:/financieel/koersen/market/amsterdam/aex",
                                        block: !1
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "amx"
                                },
                                name: {
                                    kind: "Name",
                                    value: "vwdQuotes"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "FUND_TYPE"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "predicate"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "url:/financieel/koersen/market/amsterdam/amx",
                                        block: !1
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 267,
                        source: {
                            body: 'query ArticleStocksWidget($uid: Long) {\n  article(uid: $uid) {\n    categories\n  }\n  aex:vwdQuotes(type: FUND_TYPE, predicate: "url:/financieel/koersen/market/amsterdam/aex")\n  amx:vwdQuotes(type: FUND_TYPE, predicate: "url:/financieel/koersen/market/amsterdam/amx")\n}',
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                }, {
                    options: function(e) {
                        var t = p()(e, "articleUid");
                        return {
                            variables: {
                                uid: parseInt(t, 10)
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    },
                    props: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? so(Object(r), !0).forEach((function(t) {
                                    fo(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : so(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, e.data)
                    }
                }))(uo),
                bo = r(188);

            function mo(e) {
                return (mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function vo(e, t, r, n) {
                po || (po = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: po,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function ho(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function go(e, t) {
                return (go = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Oo(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = So(e);
                    if (t) {
                        var o = So(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return wo(this, r)
                }
            }

            function wo(e, t) {
                return !t || "object" !== mo(t) && "function" != typeof t ? jo(e) : t
            }

            function jo(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function So(e) {
                return (So = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ko, Po, _o = d()("TextArticlePage"),
                To = vo("track", {
                    kind: "captions"
                }),
                Ro = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && go(e, t)
                    }(i, e);
                    var t, r, n, o = Oo(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = o.call(this, e)).readSpeaker = t.readSpeaker.bind(jo(t)), t.state = {
                            buttonClass: "Play"
                        }, t
                    }
                    return t = i, n = [{
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            return ko !== e.articleUid ? (ko = e.articleUid, {
                                buttonClass: "Play"
                            }) : null
                        }
                    }], (r = [{
                        key: "readSpeaker",
                        value: function(e) {
                            e.preventDefault();
                            try {
                                "Play" === this.state.buttonClass ? (document.getElementById("readSpeaker").play(), this.setState({
                                    buttonClass: "Stop"
                                })) : (document.getElementById("readSpeaker").pause(), this.setState({
                                    buttonClass: "Play"
                                }))
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, r, n = Object(E.a)("baseUrl") || "https://www.telegraaf.nl",
                                o = p()(this.props, "articleUid") || "",
                                i = p()(this.props, "isMobile", !1),
                                a = p()(this.props, "brandSection"),
                                l = p()(this.props, "isDisabled", !1);
                            return c.a.createElement(c.a.Fragment, null, Object(E.a)("readspeaker.enabled", !1) && vo("div", {
                                className: _o("SpeakerPosition", {
                                    medium: i,
                                    large: !i
                                })
                            }, void 0, vo("div", {
                                className: _o("ReadSpeaker", (e = {}, t = a, r = !!a, t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e))
                            }, void 0, !l && vo("audio", {
                                id: "readSpeaker",
                                preload: "none",
                                onEnded: this.readSpeaker
                            }, void 0, vo("source", {
                                src: "".concat(Object(E.a)("readspeaker.audioURL", ""), "&url=").concat(n, "/readspeaker/").concat(o),
                                type: "audio/mpeg"
                            }), To), vo("button", {
                                type: "button",
                                className: this.state.buttonClass,
                                disabled: l,
                                onClick: this.readSpeaker
                            }))))
                        }
                    }]) && ho(t.prototype, r), n && ho(t, n), i
                }(c.a.Component),
                Eo = r(80),
                Ao = r(100),
                No = r(98);

            function Co(e) {
                return (Co = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function xo(e, t, r, n) {
                Po || (Po = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Po,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Do(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Io(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Lo(e, t) {
                return (Lo = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function $o(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Mo(e);
                    if (t) {
                        var o = Mo(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Bo(this, r)
                }
            }

            function Bo(e, t) {
                return !t || "object" !== Co(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Mo(e) {
                return (Mo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Uo, Wo = xo(T.Helmet, {}, void 0, xo("script", {
                    async: !0,
                    type: "text/javascript",
                    src: "https://widgets.outbrain.com/outbrain.js"
                })),
                zo = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Lo(e, t)
                    }(i, e);
                    var t, r, n, o = $o(i);

                    function i() {
                        return Do(this, i), o.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            return xo(a.Fragment, {}, void 0, xo("div", {
                                className: "OUTBRAIN",
                                "data-src": p()(window, "location.href"),
                                "data-widget-id": "AR_1"
                            }), Wo)
                        }
                    }]) && Io(t.prototype, r), n && Io(t, n), i
                }(c.a.Component);

            function Vo(e) {
                return (Vo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Fo(e, t, r, n) {
                Uo || (Uo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = n;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o) void 0 === t[l] && (t[l] = o[l]);
                else t || (t = o || {});
                return {
                    $$typeof: Uo,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function Ho(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Go(e, t) {
                return (Go = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function qo(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Qo(e);
                    if (t) {
                        var o = Qo(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Yo(this, r)
                }
            }

            function Yo(e, t) {
                return !t || "object" !== Vo(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Qo(e) {
                return (Qo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Ko = r(45).noTrailingSlashes,
                Jo = d()("TextArticlePage"),
                Xo = Fo(dt.a, {}),
                Zo = Fo(zo, {}),
                ei = Fo(g.a, {
                    gutters: !0,
                    xlarge: 8
                }),
                ti = Fo(g.a, {
                    gutters: !0,
                    xlarge: 8
                }),
                ri = Fo(g.a, {
                    xlarge: 12,
                    gutters: !1
                }),
                ni = Fo(g.a, {
                    xlarge: 12,
                    gutters: !1
                }),
                oi = Fo("div", {
                    id: "comments"
                }),
                ii = Fo(g.a, {
                    xlarge: 12,
                    gutters: !1
                }),
                ai = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Go(e, t)
                    }(i, e);
                    var t, r, n, o = qo(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = o.call(this, e)).state = {
                            referer: "telegraaf.nl"
                        }, t
                    }
                    return t = i, n = [{
                        key: "PAGE_TYPE",
                        get: function() {
                            return hn.a.ARTICLE_PAGE
                        }
                    }], (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                referer: document.referrer
                            }), Object(je.b)(window.location.hash, 1e3)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            Object(je.b)(window.location.hash, 1e3)
                        }
                    }, {
                        key: "getReferer",
                        value: function() {
                            var e = this.state.referer,
                                t = e.includes("facebook"),
                                r = e.includes("twitter") || e.includes("t.co");
                            return {
                                name: (t ? "Facebook" : r && "Twitter") || "sociale media",
                                isValid: t || r
                            }
                        }
                    }, {
                        key: "getBrandSection",
                        value: function(e) {
                            return (p()(e, "sectionTree[1].name") || "").toLowerCase()
                        }
                    }, {
                        key: "getComponentsInRotation",
                        value: function() {
                            var e = p()(this.props, "match"),
                                t = Object(E.a)("componentRotation", []),
                                r = Fo(yt.a, {
                                    match: e
                                });
                            return t.map((function(e) {
                                var n = 100 / t.length;
                                switch (e) {
                                    case "plista":
                                        return Object(E.a)("plista.publicKey") ? {
                                            Component: r,
                                            percentage: n
                                        } : null;
                                    case "ligatus":
                                        return Object(E.a)("ligatus.ids") ? {
                                            Component: Xo,
                                            percentage: n
                                        } : null;
                                    case "outbrain":
                                        return {
                                            Component: Zo, percentage: n
                                        };
                                    default:
                                        return null
                                }
                            }))
                        }
                    }, {
                        key: "isPuzzle",
                        value: function(e) {
                            return "puzzle" === p()(e, "type")
                        }
                    }, {
                        key: "shouldRenderPremiumTeaser",
                        value: function(e) {
                            var t = p()(e, "premium") || p()(e, "timewall"),
                                r = p()(this.props, "user.session.isActive"),
                                n = p()(this.props, "user.sessionIsLoaded");
                                // Injection starts
                            return false;
                                //return No.a ? t && !(n && r) : t
                        }
                    }, {
                        key: "shouldRenderBody",
                        value: function(e) {
                            var t = p()(e, "uid"),
                                r = p()(e, "premium") || p()(e, "timewall"),
                                n = p()(this.props, "showMeteringContent");
                                // Injection starts
                            return true;
                                //return !r || n(t)
                        }
                    }, {
                        key: "renderArticleAuthor",
                        value: function(e) {
                            return Fo(k.a, {
                                article: e,
                                brandSection: this.getBrandSection(e)
                            })
                        }
                    }, {
                        key: "renderArticleImage",
                        value: function(e) {
                            return this.isPuzzle(e) ? null : Fo(j.a, {
                                image: p()(e, "images[0]"),
                                widths: [535, 770, 670, 840]
                            })
                        }
                    }, {
                        key: "renderArticleBodyBlocks",
                        value: function(e) {
                            return this.shouldRenderBody(e) ? Fo(S.a, {
                                article: e,
                                match: p()(this.props, "match"),
                                src: p()(this.props, "variables.src")
                            }) : null
                        }
                    }, {
                        key: "renderMeteringNotification",
                        value: function(e) {
                            var t = p()(e, "uid"),
                                r = false; //p()(e, "premium") || p()(e, "timewall"),
                                n = p()(this.props, "showMeteringBlocker");
                            return r && n(t) ? Fo(gn.a, {
                                articleUrl: p()(e, "url"),
                                articleIntro: p()(e, "intro"),
                                articleIsPremium: p()(e, "premium"),
                                articleIsTimewall: p()(e, "timewall")
                            }) : null
                        }
                    }, {
                        key: "renderPremiumBanner",
                        value: function(e) {
                            var t = Object(E.a)("metering.enabled"),
                                r = p()(e, "mainSection.name"),
                                n = this.shouldRenderPremiumTeaser(e);
                            return !t && "Gesponsord" !== r && n ? Fo(qn, {
                                match: p()(this.props, "match"),
                                referer: this.getReferer()
                            }) : null
                        }
                    }, {
                        key: "renderArticleIntro",
                        value: function(e) {
                            return Fo(Se.a, {
                                article: e
                            }, "article-intro")
                        }
                    }, {
                        key: "renderArticleSocialButtons",
                        value: function(e) {
                            var t = e.className,
                                r = e.isTop;
                            return Fo(P.a, {
                                className: t,
                                isTop: r,
                                location: p()(this.props, "location"),
                                match: p()(this.props, "match"),
                                src: p()(this.props, "variables.src")
                            })
                        }
                    }, {
                        key: "renderArticleTags",
                        value: function(e) {
                            return Fo(_.a, {
                                className: Jo("tags"),
                                brandSection: this.getBrandSection(e),
                                match: p()(this.props, "match"),
                                src: p()(this.props, "variables.src")
                            })
                        }
                    }, {
                        key: "renderArticleTitle",
                        value: function(e) {
                            return Fo(w.a, {
                                article: e
                            })
                        }
                    }, {
                        key: "renderLatestNews",
                        value: function(e) {
                            var t = p()(this.props, "loading"),
                                r = p()(e, "theme"),
                                n = p()(e, "author"),
                                o = p()(e, "mainSection.path"),
                                i = p()(e, "mainSection.name"),
                                a = p()(e, "uid"),
                                c = o && o.includes("vrouw"),
                                l = "/lifestyle/puzzels/" === o ? "Meer puzzels" : null;
                            return t ? null : "Gesponsord" === i ? Fo(sr, {
                                path: o,
                                count: 8,
                                disableTracking: !1,
                                excludeArticleUids: [a],
                                title: l,
                                showIcon: c,
                                theme: r,
                                author: n,
                                loading: t
                            }) : Fo(ke.a, {
                                path: o,
                                count: 8,
                                disableTracking: !1,
                                excludeArticleUids: [a],
                                title: l,
                                showIcon: c
                            })
                        }
                    }, {
                        key: "renderArticleThemeTeaser",
                        value: function(e) {
                            var t = p()(e, "mainSection.name"),
                                r = p()(e, "theme");
                            return r && "Gesponsord" !== t ? Fo(we, {
                                uid: p()(e, "uid"),
                                src: p()(this.props, "variables.src"),
                                theme: r
                            }) : null
                        }
                    }, {
                        key: "renderRelatedArticles",
                        value: function() {
                            return Fo(Fe, {
                                match: p()(this.props, "match"),
                                src: p()(this.props, "variables.src")
                            })
                        }
                    }, {
                        key: "renderPremiumLabelWithLine",
                        value: function(e) {
                            return e ? Fo(J.a, {
                                className: Jo("premiumLabel")
                            }) : null
                        }
                    }, {
                        key: "renderComponentRotation",
                        value: function(e) {
                            var t = p()(e, "mainSection.name"),
                                r = p()(e, "uid"),
                                n = p()(e, "premium"),
                                o = p()(this.props, "showMeteringContent");
                            return n && !o(r) || "Gesponsord" === t ? null : Fo(pt.a, {
                                components: this.getComponentsInRotation()
                            })
                        }
                    }, {
                        key: "renderPartnerBiography",
                        value: function(e) {
                            var t = p()(e, "mainSection.name"),
                                r = p()(e, "theme"),
                                n = p()(e, "author"),
                                o = r ? Ko(r) : n;
                            return o && "Gesponsord" === t ? Fo(bt.a, {
                                articlePage: !0,
                                tag: o
                            }) : null
                        }
                    }, {
                        key: "renderMostReadVideos",
                        value: function(e) {
                            var t = p()(e, "premium") || p()(e, "timewall"),
                                r = p()(e, "sectionTree") || [],
                                n = r[1] || r[0],
                                o = p()(n, "path") || "/";
                            return Fo(t ? vn : Vr, {
                                path: o
                            })
                        }
                    }, {
                        key: "renderReadSpeakerWrapper",
                        value: function(e, t) {
                            var r = p()(this.props, "showMeteringBlocker") || function() {
                                    return !1
                                },
                                n = p()(t, "uid") || "",
                                o = this.getBrandSection(t),
                                i = !(!p()(t, "premium") && !p()(t, "timewall")) && r(n);
                            return this.isPuzzle(t) ? null : Fo("div", {
                                className: Jo("readSpeakerWrapper")
                            }, void 0, Fo(Ro, {
                                isDisabled: i,
                                isMobile: e,
                                articleUid: n,
                                brandSection: o
                            }), Fo(yo, {
                                isMobile: e,
                                articleUid: n
                            }))
                        }
                    }, {
                        key: "renderMostRead",
                        value: function(e) {
                            var t = p()(e, "mainSection.path");
                            return t && t.includes("vrouw") ? Fo(bo.a, {
                                lazyLoadQuery: !0,
                                path: t,
                                ssr: !1
                            }) : null
                        }
                    }, {
                        key: "renderWebshop",
                        value: function(e, t) {
                            var r = p()(e, "mainSection.path");
                            return r && r.includes("gesponsord") ? null : Fo(Pe.a, {
                                isMobile: t,
                                eventType: "webshopArticle"
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = p()(this.props, "loading"),
                                r = p()(this.props, "match"),
                                n = Object(E.a)("dfp.pageTypes.".concat(hn.a.ARTICLE_PAGE, ".banners")),
                                o = p()(this.props, "insertBanner"),
                                i = p()(this.props, "browser"),
                                a = p()(this.props, "consentIsCollected");
                            return Fo(fr.b, {
                                banners: n,
                                isVideo: !1,
                                match: r
                            }, void 0, Fo(fr.a.Consumer, {}, void 0, (function(r) {
                                var c = r.article,
                                    l = (Object(E.a)("baseUrl") || "https://www.telegraaf.nl") + (p()(c, "url") || ""),
                                    u = "Gesponsord" === p()(c, "mainSection.name"),
                                    s = p()(c, "comments.enabled"),
                                    f = p()(c, "premium") || p()(c, "timewall");
                                return Fo(O.a, {}, void 0, Fo("div", {
                                    className: m()(Jo("content"), "io-article-body"),
                                    "data-io-article-url": l
                                }, void 0, Fo("section", {}, void 0, ei, Fo(g.a, {
                                    gutters: !0,
                                    xlarge: 75,
                                    className: Jo("header")
                                }, void 0, e.renderPremiumLabelWithLine(f), e.renderPartnerBiography(c), e.renderArticleTitle(c), Fo("div", {
                                    className: Jo("prologWrapper")
                                }, void 0, Fo(ft, {
                                    article: c
                                })), Fo("div", {
                                    className: Jo("socialWrapper")
                                }, void 0, e.renderArticleAuthor(c), e.renderArticleSocialButtons({
                                    isTop: !0
                                })))), Fo("section", {}, void 0, ti, Fo(g.a, {
                                    gutters: !0,
                                    small: 100,
                                    xlarge: 75
                                }, void 0, e.renderReadSpeakerWrapper(!1, c), Fo("div", {
                                    className: Jo("introWrapper"),
                                    "data-element": "articleIntro"
                                }, void 0, Fo("div", {
                                    className: Jo("imageWrapper", {
                                        desktop: !0
                                    })
                                }, void 0, e.renderArticleImage(c), e.renderReadSpeakerWrapper(!0, c)), e.renderArticleIntro(c)))), Fo(g.a, {
                                    gutters: !0,
                                    large: 66,
                                    className: Jo("mainColumn")
                                }, void 0, Fo("section", {
                                    className: Jo("imageWrapper", {
                                        mobile: !0
                                    })
                                }, void 0, e.renderArticleImage(c)), Fo("section", {
                                    className: Jo("bodyText"),
                                    "data-element": "articleBody"
                                }, void 0, ri, Fo(g.a, {
                                    small: 100,
                                    xlarge: 75,
                                    gutters: !1
                                }, void 0, !t && e.renderArticleBodyBlocks(c), !t && e.renderPremiumBanner(c), e.renderMeteringNotification(c))), Fo("section", {}, void 0, ni, Fo(g.a, {
                                    small: 100,
                                    xlarge: 75,
                                    gutters: !1
                                }, void 0, e.renderArticleSocialButtons({
                                    className: Jo("socialButtons", {
                                        bottom: !0
                                    })
                                }), !t && e.renderArticleTags(c))), !t && e.renderArticleThemeTeaser(c), !t && e.renderMostReadVideos(c), !t && e.renderRelatedArticles(), !t && e.renderWebshop(c, !0), !u && !f && p()(c, "bannersEnabled", !0) && o({
                                    adFormat: p()(n, "[4].adFormat"),
                                    position: p()(n, "[4].position"),
                                    alias: p()(c, "mainSection.name")
                                }), oi, Fo(pr.a, {}, void 0, Fo("section", {
                                    className: Jo("commentsWrapper")
                                }, void 0, ii, Fo(g.a, {
                                    small: 100,
                                    xlarge: 75,
                                    gutters: !1
                                }, void 0, !t && s && Fo(K, {
                                    articleUID: c.uid
                                }))))), Fo(g.a, {
                                    large: 33,
                                    className: Jo("secondaryColumn")
                                }, void 0, Fo("div", {
                                    className: Jo("latestNewsWrapper")
                                }, void 0, !p()(i, "lessThan.large") && !u && p()(c, "bannersEnabled", !0) && Fo("div", {
                                    className: Jo("bannerWrapper", {
                                        "position-1": !0
                                    })
                                }, void 0, o({
                                    adFormat: p()(n, "[1].adFormat"),
                                    position: p()(n, "[1].position"),
                                    alias: p()(c, "mainSection.name")
                                })), Fo(pr.a, {}, void 0, !t && e.renderLatestNews(c)), !p()(i, "lessThan.large") && !u && p()(c, "bannersEnabled", !0) && Fo("div", {
                                    className: Jo("bannerWrapper", {
                                        "position-2": !0
                                    })
                                }, void 0, o({
                                    adFormat: p()(n, "[2].adFormat"),
                                    position: p()(n, "[2].position"),
                                    alias: p()(c, "mainSection.name")
                                })), e.renderMostRead(c), !t && e.renderWebshop(c, !1)))), !u && p()(c, "bannersEnabled", !0) && o({
                                    adFormat: p()(n, "[3].adFormat"),
                                    position: p()(n, "[3].position"),
                                    alias: p()(c, "mainSection.name")
                                }), Fo(pr.a, {}, void 0, !t && a && e.renderComponentRotation(c)))
                            })))
                        }
                    }]) && Ho(t.prototype, r), n && Ho(t, n), i
                }(a.Component);
            ai.defaultProps = {
                article: null,
                loading: !1,
                consentIsCollected: !1
            };
            t.default = Object(l.c)(Object(s.b)((function(e) {
                return {
                    user: e.user,
                    browser: e.browser,
                    consentIsCollected: p()(e, "didomiInfo.consentIsCollected")
                }
            }), (function(e) {
                return {
                    actions: {
                        notification: Object(u.a)(Eo, e),
                        user: Object(u.a)(Ao, e)
                    }
                }
            })), h.a, v.a)(ai)
        }
    }
]);
//# sourceMappingURL=TextArticlePage.2.3.122.198352.js.map
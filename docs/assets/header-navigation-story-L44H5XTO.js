// node_modules/preact/dist/preact.mjs
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var h = Array.isArray;
function v(n2, l2) {
  for (var u3 in l2)
    n2[u3] = l2[u3];
  return n2;
}
function p(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function d(n2, t2, i3, o2, r2) {
  var f3 = { type: n2, props: t2, key: i3, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1, __u: 0 };
  return null == r2 && null != l.vnode && l.vnode(f3), f3;
}
function g(n2) {
  return n2.children;
}
function b(n2, l2) {
  this.props = n2, this.context = l2;
}
function m(n2, l2) {
  if (null == l2)
    return n2.__ ? m(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++)
    if (null != (u3 = n2.__k[l2]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? m(n2) : null;
}
function k(n2) {
  var l2, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u3 = n2.__k[l2]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return k(n2);
  }
}
function w(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
  var n2, u3, t2, o2, r2, e2, c2, s2, a2;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (u3 = i.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, s2 = [], a2 = [], (c2 = t2.__P) && ((o2 = v({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(o2), L(c2, o2, r2, t2.__n, void 0 !== c2.ownerSVGElement, 32 & r2.__u ? [e2] : null, s2, null == e2 ? m(r2) : e2, !!(32 & r2.__u), a2), o2.__.__k[o2.__i] = o2, M(s2, o2, a2), o2.__e != e2 && k(o2)), i.length > u3 && i.sort(f));
  x.__r = 0;
}
function C(n2, l2, u3, t2, i3, o2, r2, f3, e2, a2, h2) {
  var v2, p2, y, d2, _, g2 = t2 && t2.__k || s, b2 = l2.length;
  for (u3.__d = e2, P(u3, l2, g2), e2 = u3.__d, v2 = 0; v2 < b2; v2++)
    null != (y = u3.__k[v2]) && "boolean" != typeof y && "function" != typeof y && (p2 = -1 === y.__i ? c : g2[y.__i] || c, y.__i = v2, L(n2, y, p2, i3, o2, r2, f3, e2, a2, h2), d2 = y.__e, y.ref && p2.ref != y.ref && (p2.ref && z(p2.ref, null, y), h2.push(y.ref, y.__c || d2, y)), null == _ && null != d2 && (_ = d2), 65536 & y.__u || p2.__k === y.__k ? e2 = S(y, e2, n2) : "function" == typeof y.type && void 0 !== y.__d ? e2 = y.__d : d2 && (e2 = d2.nextSibling), y.__d = void 0, y.__u &= -196609);
  u3.__d = e2, u3.__e = _;
}
function P(n2, l2, u3) {
  var t2, i3, o2, r2, f3, e2 = l2.length, c2 = u3.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++)
    null != (i3 = n2.__k[t2] = null == (i3 = l2[t2]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? d(null, i3, null, null, i3) : h(i3) ? d(g, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? d(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = H(i3, u3, r2 = t2 + a2, s2), i3.__i = f3, o2 = null, -1 !== f3 && (s2--, (o2 = u3[f3]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f3 && a2--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r2 && (f3 === r2 + 1 ? a2++ : f3 > r2 ? s2 > e2 - r2 ? a2 += f3 - r2 : a2-- : a2 = f3 < r2 && f3 == r2 - 1 ? f3 - r2 : 0, f3 !== t2 + a2 && (i3.__u |= 65536))) : (o2 = u3[t2]) && null == o2.key && o2.__e && (o2.__e == n2.__d && (n2.__d = m(o2)), N(o2, o2, false), u3[t2] = null, s2--);
  if (s2)
    for (t2 = 0; t2 < c2; t2++)
      null != (o2 = u3[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = m(o2)), N(o2, o2));
}
function S(n2, l2, u3) {
  var t2, i3;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i3 = 0; t2 && i3 < t2.length; i3++)
      t2[i3] && (t2[i3].__ = n2, l2 = S(t2[i3], l2, u3));
    return l2;
  }
  return n2.__e != l2 && (u3.insertBefore(n2.__e, l2 || null), l2 = n2.__e), l2 && l2.nextSibling;
}
function H(n2, l2, u3, t2) {
  var i3 = n2.key, o2 = n2.type, r2 = u3 - 1, f3 = u3 + 1, e2 = l2[u3];
  if (null === e2 || e2 && i3 == e2.key && o2 === e2.type)
    return u3;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0))
    for (; r2 >= 0 || f3 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i3 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f3 < l2.length) {
        if ((e2 = l2[f3]) && 0 == (131072 & e2.__u) && i3 == e2.key && o2 === e2.type)
          return f3;
        f3++;
      }
    }
  return -1;
}
function I(n2, l2, u3) {
  "-" === l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || a.test(l2) ? u3 : u3 + "px";
}
function T(n2, l2, u3, t2, i3) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u3 && l2 in u3 || I(n2.style, l2, "");
        if (u3)
          for (l2 in u3)
            t2 && u3[l2] === t2[l2] || I(n2.style, l2, u3[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u3, u3 ? t2 ? u3.u = t2.u : (u3.u = Date.now(), n2.addEventListener(l2, o2 ? D : A, o2)) : n2.removeEventListener(l2, o2 ? D : A, o2);
    else {
      if (i3)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && "role" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u3));
    }
}
function A(n2) {
  var u3 = this.l[n2.type + false];
  if (n2.t) {
    if (n2.t <= u3.u)
      return;
  } else
    n2.t = Date.now();
  return u3(l.event ? l.event(n2) : n2);
}
function D(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function L(n2, u3, t2, i3, o2, r2, f3, e2, c2, s2) {
  var a2, p2, y, d2, _, m2, k2, w2, x2, P2, S2, $, H2, I2, T2, A2 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
  n:
    if ("function" == typeof A2)
      try {
        if (w2 = u3.props, x2 = (a2 = A2.contextType) && i3[a2.__c], P2 = a2 ? x2 ? x2.props.value : a2.__ : i3, t2.__c ? k2 = (p2 = u3.__c = t2.__c).__ = p2.__E : ("prototype" in A2 && A2.prototype.render ? u3.__c = p2 = new A2(w2, P2) : (u3.__c = p2 = new b(w2, P2), p2.constructor = A2, p2.render = O), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = P2, p2.__n = i3, y = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != A2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, A2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _ = p2.state, p2.__v = u3, y)
          null == A2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == A2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, P2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, P2) || u3.__v === t2.__v)) {
            for (u3.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), S2 = 0; S2 < p2._sb.length; S2++)
              p2.__h.push(p2._sb[S2]);
            p2._sb = [], p2.__h.length && f3.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, P2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _, m2);
          });
        }
        if (p2.context = P2, p2.props = w2, p2.__P = n2, p2.__e = false, $ = l.__r, H2 = 0, "prototype" in A2 && A2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $ && $(u3), a2 = p2.render(p2.props, p2.state, p2.context), I2 = 0; I2 < p2._sb.length; I2++)
            p2.__h.push(p2._sb[I2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $ && $(u3), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++H2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i3 = v(v({}, i3), p2.getChildContext())), y || null == p2.getSnapshotBeforeUpdate || (m2 = p2.getSnapshotBeforeUpdate(d2, _)), C(n2, h(T2 = null != a2 && a2.type === g && null == a2.key ? a2.props.children : a2) ? T2 : [T2], u3, t2, i3, o2, r2, f3, e2, c2, s2), p2.base = u3.__e, u3.__u &= -161, p2.__h.length && f3.push(p2), k2 && (p2.__E = p2.__ = null);
      } catch (n3) {
        u3.__v = null, c2 || null != r2 ? (u3.__e = e2, u3.__u |= c2 ? 160 : 32, r2[r2.indexOf(e2)] = null) : (u3.__e = t2.__e, u3.__k = t2.__k), l.__e(n3, u3, t2);
      }
    else
      null == r2 && u3.__v === t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : u3.__e = j(t2.__e, u3, t2, i3, o2, r2, f3, c2, s2);
  (a2 = l.diffed) && a2(u3);
}
function M(n2, u3, t2) {
  u3.__d = void 0;
  for (var i3 = 0; i3 < t2.length; i3++)
    z(t2[i3], t2[++i3], t2[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function j(l2, u3, t2, i3, o2, r2, f3, e2, s2) {
  var a2, v2, y, d2, _, g2, b2, k2 = t2.props, w2 = u3.props, x2 = u3.type;
  if ("svg" === x2 && (o2 = true), null != r2) {
    for (a2 = 0; a2 < r2.length; a2++)
      if ((_ = r2[a2]) && "setAttribute" in _ == !!x2 && (x2 ? _.localName === x2 : 3 === _.nodeType)) {
        l2 = _, r2[a2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === x2)
      return document.createTextNode(w2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", x2) : document.createElement(x2, w2.is && w2), r2 = null, e2 = false;
  }
  if (null === x2)
    k2 === w2 || e2 && l2.data === w2 || (l2.data = w2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), k2 = t2.props || c, !e2 && null != r2)
      for (k2 = {}, a2 = 0; a2 < l2.attributes.length; a2++)
        k2[(_ = l2.attributes[a2]).name] = _.value;
    for (a2 in k2)
      _ = k2[a2], "children" == a2 || ("dangerouslySetInnerHTML" == a2 ? y = _ : "key" === a2 || a2 in w2 || T(l2, a2, null, _, o2));
    for (a2 in w2)
      _ = w2[a2], "children" == a2 ? d2 = _ : "dangerouslySetInnerHTML" == a2 ? v2 = _ : "value" == a2 ? g2 = _ : "checked" == a2 ? b2 = _ : "key" === a2 || e2 && "function" != typeof _ || k2[a2] === _ || T(l2, a2, _, k2[a2], o2);
    if (v2)
      e2 || y && (v2.__html === y.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2.__html), u3.__k = [];
    else if (y && (l2.innerHTML = ""), C(l2, h(d2) ? d2 : [d2], u3, t2, i3, o2 && "foreignObject" !== x2, r2, f3, r2 ? r2[0] : t2.__k && m(t2, 0), e2, s2), null != r2)
      for (a2 = r2.length; a2--; )
        null != r2[a2] && p(r2[a2]);
    e2 || (a2 = "value", void 0 !== g2 && (g2 !== l2[a2] || "progress" === x2 && !g2 || "option" === x2 && g2 !== k2[a2]) && T(l2, a2, g2, k2[a2], false), a2 = "checked", void 0 !== b2 && b2 !== l2[a2] && T(l2, a2, b2, k2[a2], false));
  }
  return l2;
}
function z(n2, u3, t2) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function N(n2, u3, t2) {
  var i3, o2;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || z(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    i3.base = i3.__P = null, n2.__c = void 0;
  }
  if (i3 = n2.__k)
    for (o2 = 0; o2 < i3.length; o2++)
      i3[o2] && N(i3[o2], u3, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function O(n2, l2, u3) {
  return this.constructor(n2, u3);
}
n = s.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i3, o2, r2; l2 = l2.__; )
    if ((i3 = l2.__c) && !i3.__)
      try {
        if ((o2 = i3.constructor) && null != o2.getDerivedStateFromError && (i3.setState(o2.getDerivedStateFromError(n2)), r2 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t2 || {}), r2 = i3.__d), r2)
          return i3.__E = i3;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, b.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u3), this.props)), n2 && v(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
}, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x.__r = 0, e = 0;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
var i2 = Array.isArray;
function u2(e2, t2, n2, o2, i3, u3) {
  var a2, c2, p2 = {};
  for (c2 in t2)
    "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps))
    for (c2 in a2)
      void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/package/layouts/esbuild-reload.ce.js
var esbuild_reload_ce_default = "./esbuild-reload.ce-ZYHERQPM.js";

// src/package/css/global.bundle.css
var global_bundle_default = "./global.bundle-2WYMSKUN.css";

// src/package/layouts/head.jsx
var Head = (props) => {
  const frontmatter2 = props.page.frontmatter;
  return /* @__PURE__ */ u2("head", { children: [
    /* @__PURE__ */ u2("meta", { charset: "utf-8" }),
    /* @__PURE__ */ u2("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ u2("title", { children: [
      props.globals.metadata.title,
      " - ",
      frontmatter2.title || frontmatter2.navigation?.heading
    ] }),
    /* @__PURE__ */ u2("meta", { name: "description", content: frontmatter2.description || props.globals.metadata.description }),
    /* @__PURE__ */ u2("meta", { name: "generator", content: props.globals.metadata.generator }),
    /* @__PURE__ */ u2("link", { rel: "icon", type: "image/x-icon", href: `${props.globals.assetUrlPrefix}/${props.favicon}` }),
    /* @__PURE__ */ u2("link", { rel: "stylesheet", type: "text/css", href: `${props.globals.assetUrlPrefix}/${global_bundle_default}` }),
    /* @__PURE__ */ u2("script", { defer: true, src: `${props.globals.assetUrlPrefix}/${esbuild_reload_ce_default}` })
  ] });
};

// src/package/components/navigation/story-menu/story-menu.ce.css
var story_menu_ce_default = "./story-menu.ce-RLMKSRQQ.css";

// src/package/components/navigation/story-menu/story-menu.ce.js
var story_menu_ce_default2 = "./story-menu.ce-32XUZHX6.js";

// src/package/components/navigation/story-menu/story-menu.jsx
var StoryMenu = (props) => /* @__PURE__ */ u2("story-menu", { children: [
  /* @__PURE__ */ u2("template", { shadowrootmode: "open", children: [
    /* @__PURE__ */ u2("div", { children: /* @__PURE__ */ u2("ul", { children: props.mainMenu.map((menuItem) => /* @__PURE__ */ u2("li", { children: [
      /* @__PURE__ */ u2("a", { href: menuItem.url, children: menuItem.heading }),
      Array.isArray(menuItem.children) && /* @__PURE__ */ u2("ul", { children: menuItem.children.map((subMenuItem) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: subMenuItem.url, children: subMenuItem.heading }) })) })
    ] })) }) }),
    /* @__PURE__ */ u2("link", { rel: "stylesheet", type: "text/css", href: `${props.globals.assetUrlPrefix}/${global_bundle_default}` }),
    /* @__PURE__ */ u2("link", { rel: "stylesheet", type: "text/css", href: `${props.globals.assetUrlPrefix}/${story_menu_ce_default}` })
  ] }),
  /* @__PURE__ */ u2("script", { defer: true, src: `${props.globals.assetUrlPrefix}/${story_menu_ce_default2}` })
] });

// src/package/layouts/get-menu-items.js
var getMenuItems = ({ pages }) => {
  const menuItems = pages.filter((page) => page.frontmatter.navigation?.heading).map((page) => {
    const frontmatter2 = page.frontmatter;
    const navigation = frontmatter2.navigation;
    const heading = navigation?.heading;
    const icon = navigation.icon;
    const navigationId = navigation.navigationId;
    const order = navigation.order;
    const parentHeading = navigation.parent;
    let url = page.url;
    if (frontmatter2.navigation.navigationId) {
      const pageWithId = pages.find((p2) => p2.frontmatter.navigation.id === navigationId);
      if (pageWithId) {
        url = pageWithId.url;
      } else {
        console.log(`Warning: Could not find a page with frontmatter.navigation.id === '${navigationId}'`);
      }
    }
    return {
      heading,
      icon,
      navigationId,
      order,
      parentHeading,
      url
    };
  });
  const menuItemsByHeading = menuItems.reduce((prev, current) => {
    if (current.heading) {
      prev[current.heading] = current;
    }
    return prev;
  }, {});
  const nestedMenuItems = [];
  for (const menuItem of menuItems) {
    if (menuItem.parentHeading) {
      const parentMenuItem = menuItemsByHeading[menuItem.parentHeading];
      if (!parentMenuItem) {
        console.log(`Could not find parent with frontmatter.navigation.heading '${menuItem.parentHeading}'`);
        continue;
      }
      if (!Array.isArray(parentMenuItem.children)) {
        parentMenuItem.children = [];
      }
      parentMenuItem.children.push(menuItem);
    } else {
      nestedMenuItems.push(menuItem);
    }
  }
  const alphaSort = (a2, b2) => {
    const headingA = a2.heading || "";
    const headingB = b2.heading || "";
    return headingA.localeCompare(headingB);
  };
  const numberSort = (a2, b2) => {
    const numberA = a2.order || 999;
    const numberB = b2.order || 999;
    return numberA - numberB;
  };
  nestedMenuItems.sort(alphaSort);
  nestedMenuItems.sort(numberSort);
  nestedMenuItems.forEach((item) => {
    if (!item.children) {
      return;
    }
    item.children.sort(alphaSort);
  });
  nestedMenuItems.forEach((item) => {
    if (!item.children) {
      return;
    }
    item.children.sort(numberSort);
  });
  return nestedMenuItems;
};

// src/assets/favicon/favicon.ico
var favicon_default = "./favicon-WMNGZEA5.ico";

// src/data/globals.js
var globals = {
  assetUrlPrefix: "/assets",
  imageSizes: {
    s: 300,
    m: 700,
    l: 1e3
  },
  metadata: {
    author: {
      name: "Jacco Meijer",
      email: "jacco@jaccomeijer.nl",
      url: "https://jaccomeijer.nl"
    },
    branding: "Modelberry UI Library",
    copyright: "Copyright 2024 \xA9 Modelberry UI Library",
    description: "A reference implementation of the Modelberry UI Library.",
    generator: "esbuild",
    language: "en",
    title: "Modelberry UI Library",
    url: "https://blue.modelberry.com",
    vendor: "Made with Modelberry",
    version: "4.0.0"
  }
};

// src/stories/story-layout.jsx
var StoryLayout = (props) => {
  const mainMenu = getMenuItems({
    pages: props.pages
  });
  return /* @__PURE__ */ u2("html", { lang: globals.metadata.language, children: [
    /* @__PURE__ */ u2(
      Head,
      {
        favicon: favicon_default,
        globals,
        page: props.page
      }
    ),
    /* @__PURE__ */ u2("body", { class: "margin-bottom-6", children: /* @__PURE__ */ u2("div", { class: "container", children: [
      /* @__PURE__ */ u2(
        StoryMenu,
        {
          globals,
          mainMenu
        }
      ),
      props.children
    ] }) })
  ] });
};

// src/package/components/navigation/header-navigation/branding.jsx
var Branding = (props) => /* @__PURE__ */ u2("a", { id: "branding", variant: "s", children: props.globals.metadata.branding });

// src/package/components/element/feather-icon/feather-icon.ce.css
var feather_icon_ce_default = "./feather-icon.ce-Q3KOUQ4J.css";

// src/package/components/element/feather-icon/feather-icon.ce.js
var feather_icon_ce_default2 = "./feather-icon.ce-KQAR6BV2.js";

// node_modules/feather-icons/dist/feather-sprite.svg
var feather_sprite_default = "./feather-sprite-LD4UDZHI.svg";

// src/package/components/element/feather-icon/feather-icon.jsx
var FeatherIcon = (props) => {
  const strokeWidth = props.strokeWidth || 2;
  return /* @__PURE__ */ u2("feather-icon", { children: [
    /* @__PURE__ */ u2("template", { shadowrootmode: "open", children: [
      /* @__PURE__ */ u2(
        "svg",
        {
          variant: props.variant || "m",
          width: "20",
          height: "20",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": strokeWidth,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          children: /* @__PURE__ */ u2("use", { href: `${props.globals.assetUrlPrefix}/${feather_sprite_default}#${props.icon}` })
        }
      ),
      /* @__PURE__ */ u2("link", { rel: "stylesheet", type: "text/css", href: `${props.globals.assetUrlPrefix}/${feather_icon_ce_default}` })
    ] }),
    /* @__PURE__ */ u2("script", { defer: true, src: `${props.globals.assetUrlPrefix}/${feather_icon_ce_default2}` })
  ] });
};

// src/package/components/element/icon-link/icon-link.jsx
var IconLink = (props) => /* @__PURE__ */ u2("a", { variant: props.variant, class: props.class, href: props.url || "#", children: [
  props.icon && /* @__PURE__ */ u2(FeatherIcon, { globals: props.globals, icon: props.icon, variant: props.variant }),
  props.children
] });

// src/package/components/navigation/segment/segment.jsx
var Segment = (props) => {
  const menu = props.menu || [];
  return /* @__PURE__ */ u2("ul", { class: "navigation-segment", children: menu.map((item) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2(
    IconLink,
    {
      class: props.pageUrl === item.url && "active",
      globals: props.globals,
      icon: item.icon,
      variant: "s",
      url: item.url,
      children: item.heading
    }
  ) })) });
};

// src/package/components/element/icon-button/icon-button.jsx
var IconButton = (props) => /* @__PURE__ */ u2("button", { variant: props.variant, class: props.class, type: "button", onclick: `location.href='${props.url || "#"}';`, children: [
  props.icon && /* @__PURE__ */ u2(FeatherIcon, { globals: props.globals, icon: props.icon, variant: props.variant }),
  props.children
] });

// src/package/components/navigation/button-segment/button-segment.jsx
var ButtonSegment = (props) => {
  const menu = props.menu || [];
  return /* @__PURE__ */ u2("div", { class: "button-segment", children: menu.map((item) => /* @__PURE__ */ u2(IconButton, { globals: props.globals, variant: "s", icon: item.icon, url: item.url, children: item.heading })) });
};

// src/package/components/navigation/header-navigation/modal-menu.jsx
var ModalMenu = (props) => /* @__PURE__ */ u2("div", { id: "modal-menu", children: [
  /* @__PURE__ */ u2("div", { id: "modal" }),
  /* @__PURE__ */ u2("nav", { children: [
    /* @__PURE__ */ u2("button", { id: "close-button", children: "Close" }),
    /* @__PURE__ */ u2(Segment, { globals: props.globals, menu: props.mainMenu }),
    /* @__PURE__ */ u2(Segment, { globals: props.globals, menu: props.socialMenu }),
    /* @__PURE__ */ u2(ButtonSegment, { globals: props.globals, menu: props.actionMenu })
  ] })
] });

// src/package/components/navigation/navigation.ce.css
var navigation_ce_default = "./navigation.ce-L6FYW374.css";

// src/package/components/navigation/header-navigation/header-navigation.ce.js
var header_navigation_ce_default = "./header-navigation.ce-62A6DOKK.js";

// src/package/components/navigation/header-navigation/header-navigation.jsx
var HeaderNavigation = (props) => {
  return /* @__PURE__ */ u2("header-navigation", { children: [
    /* @__PURE__ */ u2("template", { shadowrootmode: "open", children: [
      /* @__PURE__ */ u2("div", { id: "header-navigation", children: [
        /* @__PURE__ */ u2(Branding, { globals: props.globals }),
        /* @__PURE__ */ u2("nav", { children: [
          /* @__PURE__ */ u2(Segment, { globals: props.globals, menu: props.mainMenu, pageUrl: props.pageUrl }),
          /* @__PURE__ */ u2(Segment, { globals: props.globals, menu: props.socialMenu }),
          /* @__PURE__ */ u2(ButtonSegment, { globals: props.globals, menu: props.actionMenu })
        ] }),
        /* @__PURE__ */ u2("div", { children: [
          /* @__PURE__ */ u2("button", { id: "menu-button", children: "Menu" }),
          /* @__PURE__ */ u2(
            ModalMenu,
            {
              globals: props.globals,
              mainMenu: props.mainMenu,
              socialMenu: props.socialMenu,
              actionMenu: props.actionMenu
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u2("link", { rel: "stylesheet", type: "text/css", href: `${props.globals.assetUrlPrefix}/${global_bundle_default}` }),
      /* @__PURE__ */ u2("link", { rel: "stylesheet", type: "text/css", href: `${props.globals.assetUrlPrefix}/${navigation_ce_default}` })
    ] }),
    /* @__PURE__ */ u2("script", { defer: true, src: `${props.globals.assetUrlPrefix}/${header_navigation_ce_default}` })
  ] });
};

// src/package/components/navigation/header-navigation/header-navigation-story.mdx
var frontmatter = {
  "navigation": {
    "heading": "HeaderNavigation",
    "parent": "Navigation"
  },
  "mainMenu": [{
    "heading": "Main1",
    "url": "/main1"
  }, {
    "heading": "Main2",
    "icon": "archive",
    "url": "/main2"
  }],
  "socialMenu": [{
    "heading": "Heading and icon",
    "icon": "cloud"
  }, {
    "icon": "github"
  }, {
    "icon": "linkedin"
  }],
  "actionMenu": [{
    "heading": "Share",
    "icon": "share"
  }, {
    "icon": "x"
  }, {
    "heading": "Text only"
  }]
};
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return u2(g, {
    children: [u2(_components.h1, {
      children: frontmatter.navigation.heading
    }), "\n", u2(_components.h2, {
      children: "Frontmatter"
    }), "\n", u2(_components.pre, {
      children: u2(_components.code, {
        className: "hljs language-yaml",
        children: [u2(_components.span, {
          className: "hljs-attr",
          children: "mainMenu:"
        }), "\n  ", u2(_components.span, {
          className: "hljs-bullet",
          children: "-"
        }), " ", u2(_components.span, {
          className: "hljs-attr",
          children: "heading:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "Main1"
        }), "\n    ", u2(_components.span, {
          className: "hljs-attr",
          children: "url:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "/main1"
        }), "\n  ", u2(_components.span, {
          className: "hljs-bullet",
          children: "-"
        }), " ", u2(_components.span, {
          className: "hljs-attr",
          children: "heading:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "Main2"
        }), "\n    ", u2(_components.span, {
          className: "hljs-attr",
          children: "icon:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "archive"
        }), "\n    ", u2(_components.span, {
          className: "hljs-attr",
          children: "url:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "/main2"
        }), "\n\n", u2(_components.span, {
          className: "hljs-attr",
          children: "socialMenu:"
        }), "\n  ", u2(_components.span, {
          className: "hljs-bullet",
          children: "-"
        }), " ", u2(_components.span, {
          className: "hljs-attr",
          children: "heading:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "Github"
        }), "\n    ", u2(_components.span, {
          className: "hljs-attr",
          children: "icon:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "github"
        }), "\n  ", u2(_components.span, {
          className: "hljs-bullet",
          children: "-"
        }), " ", u2(_components.span, {
          className: "hljs-attr",
          children: "heading:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "LinkedIn"
        }), "\n    ", u2(_components.span, {
          className: "hljs-attr",
          children: "icon:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "linkedin"
        }), "\n\n", u2(_components.span, {
          className: "hljs-attr",
          children: "actionMenu:"
        }), "\n  ", u2(_components.span, {
          className: "hljs-bullet",
          children: "-"
        }), " ", u2(_components.span, {
          className: "hljs-attr",
          children: "heading:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "Share"
        }), "\n    ", u2(_components.span, {
          className: "hljs-attr",
          children: "icon:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "share"
        }), "\n  ", u2(_components.span, {
          className: "hljs-bullet",
          children: "-"
        }), " ", u2(_components.span, {
          className: "hljs-attr",
          children: "heading:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "Circle"
        }), "\n    ", u2(_components.span, {
          className: "hljs-attr",
          children: "icon:"
        }), " ", u2(_components.span, {
          className: "hljs-string",
          children: "arrow-right"
        }), "\n"]
      })
    }), "\n", u2(_components.h2, {
      children: "Example"
    }), "\n", u2(_components.pre, {
      children: u2(_components.code, {
        className: "hljs language-html",
        children: [u2(_components.span, {
          className: "hljs-tag",
          children: ["<", u2(_components.span, {
            className: "hljs-name",
            children: "HeaderNavigation"
          }), " \n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "globals"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{globals}"
          }), "\n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "mainMenu"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{frontmatter.mainMenu}"
          }), "\n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "socialMenu"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{frontmatter.socialMenu}"
          }), "\n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "actionMenu"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{frontmatter.actionMenu}"
          }), " \n/>"]
        }), "\n"]
      })
    }), "\n", u2(HeaderNavigation, {
      globals,
      mainMenu: frontmatter.mainMenu,
      socialMenu: frontmatter.socialMenu,
      actionMenu: frontmatter.actionMenu
    }), "\n", u2(_components.h2, {
      children: "Example"
    }), "\n", u2(_components.pre, {
      children: u2(_components.code, {
        className: "hljs language-html",
        children: [u2(_components.span, {
          className: "hljs-tag",
          children: ["<", u2(_components.span, {
            className: "hljs-name",
            children: "HeaderNavigation"
          }), " \n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "globals"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{globals}"
          }), "\n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "mainMenu"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{frontmatter.mainMenu}"
          }), "\n/>"]
        }), "\n"]
      })
    }), "\n", u2(HeaderNavigation, {
      globals,
      mainMenu: frontmatter.mainMenu
    }), "\n", u2(_components.h2, {
      children: "Example"
    }), "\n", u2(_components.pre, {
      children: u2(_components.code, {
        className: "hljs language-html",
        children: [u2(_components.span, {
          className: "hljs-tag",
          children: ["<", u2(_components.span, {
            className: "hljs-name",
            children: "HeaderNavigation"
          }), " \n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "globals"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{globals}"
          }), "\n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "actionMenu"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{frontmatter.actionMenu}"
          }), " \n/>"]
        }), "\n"]
      })
    }), "\n", u2(HeaderNavigation, {
      globals,
      actionMenu: frontmatter.actionMenu
    }), "\n", u2(_components.h2, {
      children: "Example"
    }), "\n", u2(_components.pre, {
      children: u2(_components.code, {
        className: "hljs language-html",
        children: [u2(_components.span, {
          className: "hljs-tag",
          children: ["<", u2(_components.span, {
            className: "hljs-name",
            children: "HeaderNavigation"
          }), " \n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "globals"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{globals}"
          }), "\n  ", u2(_components.span, {
            className: "hljs-attr",
            children: "socialMenu"
          }), "=", u2(_components.span, {
            className: "hljs-string",
            children: "{frontmatter.socialMenu}"
          }), "\n/>"]
        }), "\n"]
      })
    }), "\n", u2(HeaderNavigation, {
      globals,
      socialMenu: frontmatter.socialMenu
    })]
  });
}
function MDXContent(props = {}) {
  return u2(StoryLayout, {
    ...props,
    children: u2(_createMdxContent, {
      ...props
    })
  });
}
export {
  MDXContent as default,
  frontmatter
};

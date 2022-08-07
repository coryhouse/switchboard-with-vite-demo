import * as oa from "react";
import ju, { useRef as ii, useEffect as fr, useState as gi } from "react";
function Mu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Mu(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Er() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Mu(e)) && (r && (r += " "), r += t);
  return r;
}
var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $u(e) {
  var t = e.default;
  if (typeof t == "function") {
    var n = function() {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Ei = { exports: {} }, Yn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa;
function $f() {
  if (sa)
    return Yn;
  sa = 1;
  var e = ju, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, u, c) {
    var l, f = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (l in u)
      r.call(u, l) && !o.hasOwnProperty(l) && (f[l] = u[l]);
    if (a && a.defaultProps)
      for (l in u = a.defaultProps, u)
        f[l] === void 0 && (f[l] = u[l]);
    return { $$typeof: t, type: a, key: d, ref: p, props: f, _owner: i.current };
  }
  return Yn.Fragment = n, Yn.jsx = s, Yn.jsxs = s, Yn;
}
var Wn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function Uf() {
  return aa || (aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ju, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), E = Symbol.iterator, y = "@@iterator";
    function g(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var H = E && _[E] || _[y];
      return typeof H == "function" ? H : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(_) {
      {
        for (var H = arguments.length, J = new Array(H > 1 ? H - 1 : 0), le = 1; le < H; le++)
          J[le - 1] = arguments[le];
        L("error", _, J);
      }
    }
    function L(_, H, J) {
      {
        var le = S.ReactDebugCurrentFrame, Ee = le.getStackAddendum();
        Ee !== "" && (H += "%s", J = J.concat([Ee]));
        var Ae = J.map(function(ye) {
          return String(ye);
        });
        Ae.unshift("Warning: " + H), Function.prototype.apply.call(console[_], console, Ae);
      }
    }
    var N = !1, C = !1, w = !1, P = !1, B = !1, b;
    b = Symbol.for("react.module.reference");
    function R(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === o || B || _ === i || _ === c || _ === l || P || _ === p || N || C || w || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === f || _.$$typeof === s || _.$$typeof === a || _.$$typeof === u || _.$$typeof === b || _.getModuleId !== void 0));
    }
    function k(_, H, J) {
      var le = _.displayName;
      if (le)
        return le;
      var Ee = H.displayName || H.name || "";
      return Ee !== "" ? J + "(" + Ee + ")" : J;
    }
    function q(_) {
      return _.displayName || "Context";
    }
    function j(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case a:
            var H = _;
            return q(H) + ".Consumer";
          case s:
            var J = _;
            return q(J._context) + ".Provider";
          case u:
            return k(_, _.render, "ForwardRef");
          case f:
            var le = _.displayName || null;
            return le !== null ? le : j(_.type) || "Memo";
          case d: {
            var Ee = _, Ae = Ee._payload, ye = Ee._init;
            try {
              return j(ye(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, Y = 0, ne, G, K, Z, ie, ue, m;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function A() {
      {
        if (Y === 0) {
          ne = console.log, G = console.info, K = console.warn, Z = console.error, ie = console.group, ue = console.groupCollapsed, m = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        Y++;
      }
    }
    function M() {
      {
        if (Y--, Y === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, _, {
              value: ne
            }),
            info: Q({}, _, {
              value: G
            }),
            warn: Q({}, _, {
              value: K
            }),
            error: Q({}, _, {
              value: Z
            }),
            group: Q({}, _, {
              value: ie
            }),
            groupCollapsed: Q({}, _, {
              value: ue
            }),
            groupEnd: Q({}, _, {
              value: m
            })
          });
        }
        Y < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = S.ReactCurrentDispatcher, re;
    function z(_, H, J) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ee) {
            var le = Ee.stack.trim().match(/\n( *(at )?)/);
            re = le && le[1] || "";
          }
        return `
` + re + _;
      }
    }
    var se = !1, ce;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new _e();
    }
    function be(_, H) {
      if (!_ || se)
        return "";
      {
        var J = ce.get(_);
        if (J !== void 0)
          return J;
      }
      var le;
      se = !0;
      var Ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = ee.current, ee.current = null, A();
      try {
        if (H) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch ($t) {
              le = $t;
            }
            Reflect.construct(_, [], ye);
          } else {
            try {
              ye.call();
            } catch ($t) {
              le = $t;
            }
            _.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($t) {
            le = $t;
          }
          _();
        }
      } catch ($t) {
        if ($t && le && typeof $t.stack == "string") {
          for (var he = $t.stack.split(`
`), Xe = le.stack.split(`
`), xe = he.length - 1, Me = Xe.length - 1; xe >= 1 && Me >= 0 && he[xe] !== Xe[Me]; )
            Me--;
          for (; xe >= 1 && Me >= 0; xe--, Me--)
            if (he[xe] !== Xe[Me]) {
              if (xe !== 1 || Me !== 1)
                do
                  if (xe--, Me--, Me < 0 || he[xe] !== Xe[Me]) {
                    var dt = `
` + he[xe].replace(" at new ", " at ");
                    return _.displayName && dt.includes("<anonymous>") && (dt = dt.replace("<anonymous>", _.displayName)), typeof _ == "function" && ce.set(_, dt), dt;
                  }
                while (xe >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        se = !1, ee.current = Ae, M(), Error.prepareStackTrace = Ee;
      }
      var En = _ ? _.displayName || _.name : "", ia = En ? z(En) : "";
      return typeof _ == "function" && ce.set(_, ia), ia;
    }
    function ct(_, H, J) {
      return be(_, !1);
    }
    function Re(_) {
      var H = _.prototype;
      return !!(H && H.isReactComponent);
    }
    function We(_, H, J) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return be(_, Re(_));
      if (typeof _ == "string")
        return z(_);
      switch (_) {
        case c:
          return z("Suspense");
        case l:
          return z("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case u:
            return ct(_.render);
          case f:
            return We(_.type, H, J);
          case d: {
            var le = _, Ee = le._payload, Ae = le._init;
            try {
              return We(Ae(Ee), H, J);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, At = {}, xt = S.ReactDebugCurrentFrame;
    function V(_) {
      if (_) {
        var H = _._owner, J = We(_.type, _._source, H ? H.type : null);
        xt.setExtraStackFrame(J);
      } else
        xt.setExtraStackFrame(null);
    }
    function Et(_, H, J, le, Ee) {
      {
        var Ae = Function.call.bind(we);
        for (var ye in _)
          if (Ae(_, ye)) {
            var he = void 0;
            try {
              if (typeof _[ye] != "function") {
                var Xe = Error((le || "React class") + ": " + J + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Xe.name = "Invariant Violation", Xe;
              }
              he = _[ye](H, ye, le, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              he = xe;
            }
            he && !(he instanceof Error) && (V(Ee), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", J, ye, typeof he), V(null)), he instanceof Error && !(he.message in At) && (At[he.message] = !0, V(Ee), D("Failed %s type: %s", J, he.message), V(null));
          }
      }
    }
    var Ne = Array.isArray;
    function Ve(_) {
      return Ne(_);
    }
    function yn(_) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, J = H && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return J;
      }
    }
    function Mr(_) {
      try {
        return gn(_), !1;
      } catch {
        return !0;
      }
    }
    function gn(_) {
      return "" + _;
    }
    function Ft(_) {
      if (Mr(_))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(_)), gn(_);
    }
    var Yt = S.ReactCurrentOwner, qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gn, h, v;
    v = {};
    function I(_) {
      if (we.call(_, "ref")) {
        var H = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function x(_) {
      if (we.call(_, "key")) {
        var H = Object.getOwnPropertyDescriptor(_, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function X(_, H) {
      if (typeof _.ref == "string" && Yt.current && H && Yt.current.stateNode !== H) {
        var J = j(Yt.current.type);
        v[J] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Yt.current.type), _.ref), v[J] = !0);
      }
    }
    function ve(_, H) {
      {
        var J = function() {
          Gn || (Gn = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        J.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function je(_, H) {
      {
        var J = function() {
          h || (h = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        J.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var bt = function(_, H, J, le, Ee, Ae, ye) {
      var he = {
        $$typeof: t,
        type: _,
        key: H,
        ref: J,
        props: ye,
        _owner: Ae
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function Wt(_, H, J, le, Ee) {
      {
        var Ae, ye = {}, he = null, Xe = null;
        J !== void 0 && (Ft(J), he = "" + J), x(H) && (Ft(H.key), he = "" + H.key), I(H) && (Xe = H.ref, X(H, Ee));
        for (Ae in H)
          we.call(H, Ae) && !qn.hasOwnProperty(Ae) && (ye[Ae] = H[Ae]);
        if (_ && _.defaultProps) {
          var xe = _.defaultProps;
          for (Ae in xe)
            ye[Ae] === void 0 && (ye[Ae] = xe[Ae]);
        }
        if (he || Xe) {
          var Me = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          he && ve(ye, Me), Xe && je(ye, Me);
        }
        return bt(_, he, Xe, Ee, le, Yt.current, ye);
      }
    }
    var lt = S.ReactCurrentOwner, ft = S.ReactDebugCurrentFrame;
    function Ze(_) {
      if (_) {
        var H = _._owner, J = We(_.type, _._source, H ? H.type : null);
        ft.setExtraStackFrame(J);
      } else
        ft.setExtraStackFrame(null);
    }
    var Tt;
    Tt = !1;
    function _t(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function nt() {
      {
        if (lt.current) {
          var _ = j(lt.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function jt(_) {
      {
        if (_ !== void 0) {
          var H = _.fileName.replace(/^.*[\\\/]/, ""), J = _.lineNumber;
          return `

Check your code at ` + H + ":" + J + ".";
        }
        return "";
      }
    }
    var Qt = {};
    function He(_) {
      {
        var H = nt();
        if (!H) {
          var J = typeof _ == "string" ? _ : _.displayName || _.name;
          J && (H = `

Check the top-level render call using <` + J + ">.");
        }
        return H;
      }
    }
    function Hn(_, H) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var J = He(H);
        if (Qt[J])
          return;
        Qt[J] = !0;
        var le = "";
        _ && _._owner && _._owner !== lt.current && (le = " It was passed a child from " + j(_._owner.type) + "."), Ze(_), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, le), Ze(null);
      }
    }
    function Mt(_, H) {
      {
        if (typeof _ != "object")
          return;
        if (Ve(_))
          for (var J = 0; J < _.length; J++) {
            var le = _[J];
            _t(le) && Hn(le, H);
          }
        else if (_t(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Ee = g(_);
          if (typeof Ee == "function" && Ee !== _.entries)
            for (var Ae = Ee.call(_), ye; !(ye = Ae.next()).done; )
              _t(ye.value) && Hn(ye.value, H);
        }
      }
    }
    function $r(_) {
      {
        var H = _.type;
        if (H == null || typeof H == "string")
          return;
        var J;
        if (typeof H == "function")
          J = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === u || H.$$typeof === f))
          J = H.propTypes;
        else
          return;
        if (J) {
          var le = j(H);
          Et(J, _.props, "prop", le, _);
        } else if (H.PropTypes !== void 0 && !Tt) {
          Tt = !0;
          var Ee = j(H);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pf(_) {
      {
        for (var H = Object.keys(_.props), J = 0; J < H.length; J++) {
          var le = H[J];
          if (le !== "children" && le !== "key") {
            Ze(_), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), Ze(null);
            break;
          }
        }
        _.ref !== null && (Ze(_), D("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    function ra(_, H, J, le, Ee, Ae) {
      {
        var ye = R(_);
        if (!ye) {
          var he = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = jt(Ee);
          Xe ? he += Xe : he += nt();
          var xe;
          _ === null ? xe = "null" : Ve(_) ? xe = "array" : _ !== void 0 && _.$$typeof === t ? (xe = "<" + (j(_.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof _, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, he);
        }
        var Me = Wt(_, H, J, Ee, Ae);
        if (Me == null)
          return Me;
        if (ye) {
          var dt = H.children;
          if (dt !== void 0)
            if (le)
              if (Ve(dt)) {
                for (var En = 0; En < dt.length; En++)
                  Mt(dt[En], _);
                Object.freeze && Object.freeze(dt);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(dt, _);
        }
        return _ === r ? Pf(Me) : $r(Me), Me;
      }
    }
    function xf(_, H, J) {
      return ra(_, H, J, !0);
    }
    function Ff(_, H, J) {
      return ra(_, H, J, !1);
    }
    var jf = Ff, Mf = xf;
    Wn.Fragment = r, Wn.jsx = jf, Wn.jsxs = Mf;
  }()), Wn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $f() : e.exports = Uf();
})(Ei);
const jo = Ei.exports.Fragment, oe = Ei.exports.jsx, ze = Ei.exports.jsxs;
function cn({
  className: e,
  variant: t = "primary",
  ...n
}) {
  return /* @__PURE__ */ oe("button", {
    className: Er(e, "border border-slate-400 p-1 rounded", {
      "bg-blue-600 text-white": t === "primary",
      "bg-white border-none p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100": t === "icon"
    }),
    ...n
  });
}
function Vf(e) {
  const {
    variant: t,
    ...n
  } = e;
  return /* @__PURE__ */ ze(cn, {
    variant: "icon",
    ...n,
    children: [/* @__PURE__ */ oe("span", {
      className: "sr-only",
      children: "Close menu"
    }), /* @__PURE__ */ oe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ oe("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      })
    })]
  });
}
function Bf(e) {
  return /* @__PURE__ */ oe(cn, {
    variant: "icon",
    ...e,
    children: /* @__PURE__ */ oe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ oe("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 4v16m8-8H4"
      })
    })
  });
}
var qf = process.env.NODE_ENV === "production", eo = "Invariant failed";
function bn(e, t) {
  if (!e) {
    if (qf)
      throw new Error(eo);
    var n = typeof t == "function" ? t() : t, r = n ? eo + ": " + n : eo;
    throw new Error(r);
  }
}
var ua = /* @__PURE__ */ new Map([["Win", "Meta"], ["Scroll", "ScrollLock"], ["Spacebar", " "], ["Down", "ArrowDown"], ["Left", "ArrowLeft"], ["Right", "ArrowRight"], ["Up", "ArrowUp"], ["Del", "Delete"], ["Crsel", "CrSel"], ["Exsel", "ExSel"], ["Apps", "ContextMenu"], ["Esc", "Escape"], ["Decimal", "."], ["Multiply", "*"], ["Add", "+"], ["Subtract", "-"], ["Divide", "/"]]), Gf = function(t) {
  if (ua.has(t.key)) {
    var n = ua.get(t.key);
    Object.defineProperty(t, "key", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return n;
      }
    });
  }
}, Hf = function(t, n) {
  Array.isArray(t) || typeof t == "string" || (process.env.NODE_ENV !== "production" ? bn(!1, "Expected `keys` to be an array or string") : bn(!1)), Array.isArray(t) && t.forEach(function(i, o) {
    typeof i != "string" && (process.env.NODE_ENV !== "production" ? bn(!1, "Expected `keys[" + o + "]` to be a string") : bn(!1));
  }), typeof n == "function" || n == null || (process.env.NODE_ENV !== "production" ? bn(!1, "Expected `handler` to be a function") : bn(!1));
  var r = ii();
  fr(function() {
    r.current = function(i) {
      Gf(i), (Array.isArray(t) ? t.includes(i.key) : t === i.key) && (n == null || n(i));
    };
  }, [t, n]), fr(function() {
    var i = function(s) {
      r.current(s);
    };
    return window.addEventListener("keydown", i), function() {
      window.removeEventListener("keydown", i);
    };
  }, []);
};
function Yf(e, t) {
  fr(() => {
    function n(r) {
      e.current && r.target instanceof Node && !e.current.contains(r.target) && t(r);
    }
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [e]);
}
function to(e) {
  const {
    id: t,
    onChange: n,
    value: r,
    checked: i,
    className: o,
    ...s
  } = e;
  return /* @__PURE__ */ ze("span", {
    children: [/* @__PURE__ */ oe("input", {
      className: Er("border-slate-400 border-solid border p-1 rounded", o),
      type: "checkbox",
      id: t,
      checked: i,
      onChange: n,
      ...s
    }), /* @__PURE__ */ oe("label", {
      className: "ml-4",
      htmlFor: t,
      children: e.label
    })]
  });
}
function Uu({
  children: e,
  htmlFor: t
}) {
  return /* @__PURE__ */ oe("label", {
    className: "block",
    htmlFor: t,
    children: e
  });
}
function ca(e) {
  const {
    id: t,
    onChange: n,
    width: r = "default",
    changed: i = !1,
    label: o,
    value: s,
    ...a
  } = e;
  return /* @__PURE__ */ ze(jo, {
    children: [/* @__PURE__ */ oe(Uu, {
      className: "block",
      htmlFor: t,
      children: o
    }), /* @__PURE__ */ oe("select", {
      className: Er("border-slate-400 border-solid border p-1 rounded", {
        "bg-yellow-100": i,
        "w-full": r === "full"
      }),
      id: t,
      value: s,
      onChange: n,
      ...a
    })]
  });
}
function Ut({
  children: e
}) {
  return /* @__PURE__ */ oe("div", {
    className: "mt-4",
    children: e
  });
}
function Wf(e, t, n = null) {
  const r = e.href.split("?")[0], i = new URLSearchParams(e.search);
  return i.delete(t), n && i.append(t, JSON.stringify(n)), r + "?" + i.toString();
}
function Qf(e, t) {
  const n = new URLSearchParams();
  for (const [r, i] of Object.entries(t))
    n.append(r, JSON.stringify(i));
  return e + "?" + n.toString();
}
async function zf(e) {
  const t = "text/plain", n = new Blob([e], {
    type: t
  }), r = [new ClipboardItem({ [t]: n })];
  return navigator.clipboard.write(r);
}
function sn(e, t, n) {
  const [r, i] = gi(() => {
    if (typeof window > "u")
      return t;
    const u = new URLSearchParams(window.location.search).get(e);
    if (u) {
      const c = JSON.parse(u);
      window.localStorage.setItem(e, JSON.stringify(c));
      const l = Wf(new URL(window.location.href), e);
      return window.history.pushState("", "DevTools state update", l), c;
    }
    try {
      const c = window.localStorage.getItem(e);
      return c ? JSON.parse(c) : t;
    } catch (c) {
      return console.log(c), t;
    }
  });
  return [r, (a) => {
    try {
      const u = a instanceof Function ? a(r) : a;
      i(u), typeof window < "u" && (u == t && !(n != null && n.storeDefaultValuesInLocalStorage) ? window.localStorage.removeItem(e) : window.localStorage.setItem(e, JSON.stringify(u)));
    } catch (u) {
      console.error(u);
    }
  }, r !== t];
}
const Cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useDevToolsState: sn
}, Symbol.toStringTag, { value: "Module" }));
function Zr(e) {
  const {
    id: t,
    onChange: n,
    label: r,
    value: i,
    changed: o = !1,
    className: s,
    width: a = "default",
    ...u
  } = e;
  return /* @__PURE__ */ ze("span", {
    children: [/* @__PURE__ */ oe(Uu, {
      className: "block",
      htmlFor: t,
      children: r
    }), /* @__PURE__ */ oe("input", {
      className: Er("border-slate-400 border-solid border rounded p-1", {
        "bg-yellow-100": o
      }, {
        "w-full": a === "full"
      }, s),
      type: "text",
      id: t,
      value: i,
      onChange: n,
      ...u
    })]
  });
}
const Xf = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
var yt = {}, kn = {}, bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.normalizeHeaderName = void 0;
var Jf = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function Kf(e) {
  if (typeof e != "string" && (e = String(e)), Jf.test(e) || e.trim() === "")
    throw new TypeError("Invalid character in header field name");
  return e.toLowerCase();
}
bi.normalizeHeaderName = Kf;
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.normalizeHeaderValue = void 0;
function Zf(e) {
  return typeof e != "string" && (e = String(e)), e;
}
Ti.normalizeHeaderValue = Zf;
var no = W && W.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, la = W && W.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}, Ur = W && W.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, fa, da;
Object.defineProperty(kn, "__esModule", { value: !0 });
var Qn = bi, ed = Ti, pt = Symbol("normalizedHeaders"), Vr = Symbol("rawHeaderNames"), td = function() {
  function e(t) {
    var n = this;
    if (this[fa] = {}, this[da] = /* @__PURE__ */ new Map(), ["Headers", "HeadersPolyfill"].includes(t == null ? void 0 : t.constructor.name) || t instanceof e) {
      var r = t;
      r.forEach(function(i, o) {
        n.append(o, i);
      }, this);
    } else
      Array.isArray(t) ? t.forEach(function(i) {
        var o = la(i, 2), s = o[0], a = o[1];
        n.append(s, Array.isArray(a) ? a.join(", ") : a);
      }) : t && Object.getOwnPropertyNames(t).forEach(function(i) {
        var o = t[i];
        n.append(i, Array.isArray(o) ? o.join(", ") : o);
      });
  }
  return e.prototype[fa = pt, da = Vr, Symbol.iterator] = function() {
    return this.entries();
  }, e.prototype.keys = function() {
    var t, n, r, i, o, s;
    return no(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 7]), t = Ur(Object.keys(this[pt])), n = t.next(), a.label = 1;
        case 1:
          return n.done ? [3, 4] : (r = n.value, [4, r]);
        case 2:
          a.sent(), a.label = 3;
        case 3:
          return n = t.next(), [3, 1];
        case 4:
          return [3, 7];
        case 5:
          return i = a.sent(), o = { error: i }, [3, 7];
        case 6:
          try {
            n && !n.done && (s = t.return) && s.call(t);
          } finally {
            if (o)
              throw o.error;
          }
          return [7];
        case 7:
          return [2];
      }
    });
  }, e.prototype.values = function() {
    var t, n, r, i, o, s;
    return no(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 7]), t = Ur(Object.values(this[pt])), n = t.next(), a.label = 1;
        case 1:
          return n.done ? [3, 4] : (r = n.value, [4, r]);
        case 2:
          a.sent(), a.label = 3;
        case 3:
          return n = t.next(), [3, 1];
        case 4:
          return [3, 7];
        case 5:
          return i = a.sent(), o = { error: i }, [3, 7];
        case 6:
          try {
            n && !n.done && (s = t.return) && s.call(t);
          } finally {
            if (o)
              throw o.error;
          }
          return [7];
        case 7:
          return [2];
      }
    });
  }, e.prototype.entries = function() {
    var t, n, r, i, o, s;
    return no(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 7]), t = Ur(Object.keys(this[pt])), n = t.next(), a.label = 1;
        case 1:
          return n.done ? [3, 4] : (r = n.value, [4, [r, this.get(r)]]);
        case 2:
          a.sent(), a.label = 3;
        case 3:
          return n = t.next(), [3, 1];
        case 4:
          return [3, 7];
        case 5:
          return i = a.sent(), o = { error: i }, [3, 7];
        case 6:
          try {
            n && !n.done && (s = t.return) && s.call(t);
          } finally {
            if (o)
              throw o.error;
          }
          return [7];
        case 7:
          return [2];
      }
    });
  }, e.prototype.get = function(t) {
    return this[pt][Qn.normalizeHeaderName(t)] || null;
  }, e.prototype.set = function(t, n) {
    var r = Qn.normalizeHeaderName(t);
    this[pt][r] = ed.normalizeHeaderValue(n), this[Vr].set(r, t);
  }, e.prototype.append = function(t, n) {
    var r = Qn.normalizeHeaderName(t), i = this.has(r) ? this.get(r) + ", " + n : n;
    this.set(t, i);
  }, e.prototype.delete = function(t) {
    if (!!this.has(t)) {
      var n = Qn.normalizeHeaderName(t);
      delete this[pt][n], this[Vr].delete(n);
    }
  }, e.prototype.all = function() {
    return this[pt];
  }, e.prototype.raw = function() {
    var t, n, r = {};
    try {
      for (var i = Ur(this.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = la(o.value, 2), a = s[0], u = s[1];
        r[this[Vr].get(a)] = u;
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return r;
  }, e.prototype.has = function(t) {
    return this[pt].hasOwnProperty(Qn.normalizeHeaderName(t));
  }, e.prototype.forEach = function(t, n) {
    for (var r in this[pt])
      this[pt].hasOwnProperty(r) && t.call(n, this[pt][r], r, this);
  }, e;
}();
kn.default = td;
var _i = {}, br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.headersToList = void 0;
function nd(e) {
  var t = [];
  return e.forEach(function(n, r) {
    var i = n.includes(",") ? n.split(",").map(function(o) {
      return o.trim();
    }) : n;
    t.push([r, i]);
  }), t;
}
br.headersToList = nd;
var rd = W && W.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.headersToString = void 0;
var id = br;
function od(e) {
  var t = id.headersToList(e), n = t.map(function(r) {
    var i = rd(r, 2), o = i[0], s = i[1], a = [].concat(s);
    return o + ": " + a.join(", ");
  });
  return n.join(`\r
`);
}
_i.headersToString = od;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.headersToObject = void 0;
var sd = ["user-agent"];
function ad(e) {
  var t = {};
  return e.forEach(function(n, r) {
    var i = !sd.includes(r.toLowerCase()) && n.includes(",");
    t[r] = i ? n.split(",").map(function(o) {
      return o.trim();
    }) : n;
  }), t;
}
wi.headersToObject = ad;
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.stringToHeaders = void 0;
var ud = kn;
function cd(e) {
  var t = e.trim().split(/[\r\n]+/);
  return t.reduce(function(n, r) {
    if (r.trim() === "")
      return n;
    var i = r.split(": "), o = i.shift(), s = i.join(": ");
    return n.append(o, s), n;
  }, new ud.default());
}
Ni.stringToHeaders = cd;
var Si = {}, ld = W && W.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
};
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.listToHeaders = void 0;
var fd = kn;
function dd(e) {
  var t = new fd.default();
  return e.forEach(function(n) {
    var r = ld(n, 2), i = r[0], o = r[1], s = [].concat(o);
    s.forEach(function(a) {
      t.append(i, a);
    });
  }), t;
}
Si.listToHeaders = dd;
var Ii = {}, Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.reduceHeadersObject = void 0;
function pd(e, t, n) {
  return Object.keys(e).reduce(function(r, i) {
    return t(r, i, e[i]);
  }, n);
}
Pn.reduceHeadersObject = pd;
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.objectToHeaders = void 0;
var hd = kn, md = Pn;
function vd(e) {
  return md.reduceHeadersObject(e, function(t, n, r) {
    var i = [].concat(r).filter(Boolean);
    return i.forEach(function(o) {
      t.append(n, o);
    }), t;
  }, new hd.default());
}
Ii.objectToHeaders = vd;
var Oi = {}, yd = W && W.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.flattenHeadersList = void 0;
function gd(e) {
  return e.map(function(t) {
    var n = yd(t, 2), r = n[0], i = n[1];
    return [r, [].concat(i).join("; ")];
  });
}
Oi.flattenHeadersList = gd;
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.flattenHeadersObject = void 0;
var Ed = Pn;
function bd(e) {
  return Ed.reduceHeadersObject(e, function(t, n, r) {
    return t[n] = [].concat(r).join("; "), t;
  }, {});
}
Ai.flattenHeadersObject = bd;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.flattenHeadersObject = e.flattenHeadersList = e.reduceHeadersObject = e.objectToHeaders = e.listToHeaders = e.stringToHeaders = e.headersToObject = e.headersToList = e.headersToString = e.Headers = void 0;
  var t = kn;
  Object.defineProperty(e, "Headers", { enumerable: !0, get: function() {
    return t.default;
  } });
  var n = _i;
  Object.defineProperty(e, "headersToString", { enumerable: !0, get: function() {
    return n.headersToString;
  } });
  var r = br;
  Object.defineProperty(e, "headersToList", { enumerable: !0, get: function() {
    return r.headersToList;
  } });
  var i = wi;
  Object.defineProperty(e, "headersToObject", { enumerable: !0, get: function() {
    return i.headersToObject;
  } });
  var o = Ni;
  Object.defineProperty(e, "stringToHeaders", { enumerable: !0, get: function() {
    return o.stringToHeaders;
  } });
  var s = Si;
  Object.defineProperty(e, "listToHeaders", { enumerable: !0, get: function() {
    return s.listToHeaders;
  } });
  var a = Ii;
  Object.defineProperty(e, "objectToHeaders", { enumerable: !0, get: function() {
    return a.objectToHeaders;
  } });
  var u = Pn;
  Object.defineProperty(e, "reduceHeadersObject", { enumerable: !0, get: function() {
    return u.reduceHeadersObject;
  } });
  var c = Oi;
  Object.defineProperty(e, "flattenHeadersList", { enumerable: !0, get: function() {
    return c.flattenHeadersList;
  } });
  var l = Ai;
  Object.defineProperty(e, "flattenHeadersObject", { enumerable: !0, get: function() {
    return l.flattenHeadersObject;
  } });
})(yt);
var Tr = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Tr.parse = wd;
Tr.serialize = Nd;
var Td = decodeURIComponent, _d = encodeURIComponent, Br = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function wd(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var n = {}, r = t || {}, i = e.split(";"), o = r.decode || Td, s = 0; s < i.length; s++) {
    var a = i[s], u = a.indexOf("=");
    if (!(u < 0)) {
      var c = a.substring(0, u).trim();
      if (n[c] == null) {
        var l = a.substring(u + 1, a.length).trim();
        l[0] === '"' && (l = l.slice(1, -1)), n[c] = Sd(l, o);
      }
    }
  }
  return n;
}
function Nd(e, t, n) {
  var r = n || {}, i = r.encode || _d;
  if (typeof i != "function")
    throw new TypeError("option encode is invalid");
  if (!Br.test(e))
    throw new TypeError("argument name is invalid");
  var o = i(t);
  if (o && !Br.test(o))
    throw new TypeError("argument val is invalid");
  var s = e + "=" + o;
  if (r.maxAge != null) {
    var a = r.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (r.domain) {
    if (!Br.test(r.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!Br.test(r.path))
      throw new TypeError("option path is invalid");
    s += "; Path=" + r.path;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + r.expires.toUTCString();
  }
  if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.sameSite) {
    var u = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
    switch (u) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return s;
}
function Sd(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
var dr = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(W, function(n) {
    function r() {
      return typeof navigator < "u" && navigator.product === "ReactNative" ? !0 : !!(typeof process < "u" && process.versions && process.versions.node);
    }
    n.isNodeProcess = r, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(dr, dr.exports);
var qr = { exports: {} }, pa;
function Id() {
  return pa || (pa = 1, function(e, t) {
    var n = function() {
      if (typeof self < "u")
        return self;
      if (typeof window < "u")
        return window;
      if (typeof r < "u")
        return r;
      throw new Error("unable to locate global object");
    }, r = n();
    e.exports = t = r.fetch, r.fetch && (t.default = r.fetch.bind(r)), t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response;
  }(qr, qr.exports)), qr.exports;
}
var Ko = {}, Ri = {}, Zo = { exports: {} }, Sn = typeof Reflect == "object" ? Reflect : null, ha = Sn && typeof Sn.apply == "function" ? Sn.apply : function(t, n, r) {
  return Function.prototype.apply.call(t, n, r);
}, ei;
Sn && typeof Sn.ownKeys == "function" ? ei = Sn.ownKeys : Object.getOwnPropertySymbols ? ei = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : ei = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Od(e) {
  console && console.warn && console.warn(e);
}
var Vu = Number.isNaN || function(t) {
  return t !== t;
};
function Oe() {
  Oe.init.call(this);
}
Zo.exports = Oe;
Zo.exports.once = Cd;
Oe.EventEmitter = Oe;
Oe.prototype._events = void 0;
Oe.prototype._eventsCount = 0;
Oe.prototype._maxListeners = void 0;
var ma = 10;
function Di(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Oe, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ma;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Vu(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    ma = e;
  }
});
Oe.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Oe.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Vu(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Bu(e) {
  return e._maxListeners === void 0 ? Oe.defaultMaxListeners : e._maxListeners;
}
Oe.prototype.getMaxListeners = function() {
  return Bu(this);
};
Oe.prototype.emit = function(t) {
  for (var n = [], r = 1; r < arguments.length; r++)
    n.push(arguments[r]);
  var i = t === "error", o = this._events;
  if (o !== void 0)
    i = i && o.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var s;
    if (n.length > 0 && (s = n[0]), s instanceof Error)
      throw s;
    var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw a.context = s, a;
  }
  var u = o[t];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    ha(u, this, n);
  else
    for (var c = u.length, l = Wu(u, c), r = 0; r < c; ++r)
      ha(l[r], this, n);
  return !0;
};
function qu(e, t, n, r) {
  var i, o, s;
  if (Di(n), o = e._events, o === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), s === void 0)
    s = o[t] = n, ++e._eventsCount;
  else if (typeof s == "function" ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = Bu(e), i > 0 && s.length > i && !s.warned) {
    s.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = s.length, Od(a);
  }
  return e;
}
Oe.prototype.addListener = function(t, n) {
  return qu(this, t, n, !1);
};
Oe.prototype.on = Oe.prototype.addListener;
Oe.prototype.prependListener = function(t, n) {
  return qu(this, t, n, !0);
};
function Ad() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Gu(e, t, n) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, i = Ad.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
Oe.prototype.once = function(t, n) {
  return Di(n), this.on(t, Gu(this, t, n)), this;
};
Oe.prototype.prependOnceListener = function(t, n) {
  return Di(n), this.prependListener(t, Gu(this, t, n)), this;
};
Oe.prototype.removeListener = function(t, n) {
  var r, i, o, s, a;
  if (Di(n), i = this._events, i === void 0)
    return this;
  if (r = i[t], r === void 0)
    return this;
  if (r === n || r.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (o = -1, s = r.length - 1; s >= 0; s--)
      if (r[s] === n || r[s].listener === n) {
        a = r[s].listener, o = s;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? r.shift() : Rd(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, a || n);
  }
  return this;
};
Oe.prototype.off = Oe.prototype.removeListener;
Oe.prototype.removeAllListeners = function(t) {
  var n, r, i;
  if (r = this._events, r === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var o = Object.keys(r), s;
    for (i = 0; i < o.length; ++i)
      s = o[i], s !== "removeListener" && this.removeAllListeners(s);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = r[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (i = n.length - 1; i >= 0; i--)
      this.removeListener(t, n[i]);
  return this;
};
function Hu(e, t, n) {
  var r = e._events;
  if (r === void 0)
    return [];
  var i = r[t];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? Dd(i) : Wu(i, i.length);
}
Oe.prototype.listeners = function(t) {
  return Hu(this, t, !0);
};
Oe.prototype.rawListeners = function(t) {
  return Hu(this, t, !1);
};
Oe.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Yu.call(e, t);
};
Oe.prototype.listenerCount = Yu;
function Yu(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
Oe.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ei(this._events) : [];
};
function Wu(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r)
    n[r] = e[r];
  return n;
}
function Rd(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Dd(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function Cd(e, t) {
  return new Promise(function(n, r) {
    function i(s) {
      e.removeListener(t, o), r(s);
    }
    function o() {
      typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
    }
    Qu(e, t, o, { once: !0 }), t !== "error" && Ld(e, i, { once: !0 });
  });
}
function Ld(e, t, n) {
  typeof e.on == "function" && Qu(e, "error", t, n);
}
function Qu(e, t, n, r) {
  if (typeof e.on == "function")
    r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function i(o) {
      r.once && e.removeEventListener(t, i), n(o);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var kd = W && W.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
    }, e(t, n);
  };
  return function(t, n) {
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Pd = W && W.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
      r[i] = o[s];
  return r;
};
Ri.__esModule = !0;
Ri.StrictEventEmitter = void 0;
var xd = Zo.exports, Fd = function(e) {
  kd(t, e);
  function t() {
    return e.call(this) || this;
  }
  return t.prototype.on = function(n, r) {
    return e.prototype.on.call(this, n.toString(), r);
  }, t.prototype.once = function(n, r) {
    return e.prototype.on.call(this, n.toString(), r);
  }, t.prototype.off = function(n, r) {
    return e.prototype.off.call(this, n.toString(), r);
  }, t.prototype.emit = function(n) {
    for (var r = [], i = 1; i < arguments.length; i++)
      r[i - 1] = arguments[i];
    return e.prototype.emit.apply(this, Pd([n.toString()], r));
  }, t.prototype.addListener = function(n, r) {
    return e.prototype.addListener.call(this, n.toString(), r);
  }, t.prototype.prependListener = function(n, r) {
    return e.prototype.prependListener.call(this, n.toString(), r);
  }, t.prototype.prependOnceListener = function(n, r) {
    return e.prototype.prependOnceListener.call(this, n.toString(), r);
  }, t.prototype.removeListener = function(n, r) {
    return e.prototype.removeListener.call(this, n.toString(), r);
  }, t.prototype.removeAllListeners = function(n) {
    return e.prototype.removeAllListeners.call(this, n ? n.toString() : void 0);
  }, t.prototype.eventNames = function() {
    return e.prototype.eventNames.call(this);
  }, t.prototype.listeners = function(n) {
    return e.prototype.listeners.call(this, n.toString());
  }, t.prototype.rawListeners = function(n) {
    return e.prototype.rawListeners.call(this, n.toString());
  }, t.prototype.listenerCount = function(n) {
    return e.prototype.listenerCount.call(this, n.toString());
  }, t;
}(xd.EventEmitter);
Ri.StrictEventEmitter = Fd;
(function(e) {
  var t = W && W.__createBinding || (Object.create ? function(r, i, o, s) {
    s === void 0 && (s = o), Object.defineProperty(r, s, { enumerable: !0, get: function() {
      return i[o];
    } });
  } : function(r, i, o, s) {
    s === void 0 && (s = o), r[s] = i[o];
  }), n = W && W.__exportStar || function(r, i) {
    for (var o in r)
      o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
  };
  e.__esModule = !0, n(Ri, e);
})(Ko);
var pn = {}, es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.until = async (e) => {
  try {
    const t = await e().catch((n) => {
      throw n;
    });
    return [null, t];
  } catch (t) {
    return [t, null];
  }
};
Object.defineProperty(pn, "__esModule", { value: !0 });
var jd = es;
pn.until = jd.until;
var hn = {}, zu = {}, _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.format = void 0;
var Md = /(%?)(%([sdjo]))/g;
function $d(e, t) {
  switch (t) {
    case "s":
      return e;
    case "d":
    case "i":
      return Number(e);
    case "j":
      return JSON.stringify(e);
    case "o": {
      if (typeof e == "string")
        return e;
      var n = JSON.stringify(e);
      return n === "{}" || n === "[]" || /^\[object .+?\]$/.test(n) ? e : n;
    }
  }
}
function Ud(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (t.length === 0)
    return e;
  var r = 0, i = e.replace(Md, function(o, s, a, u) {
    var c = t[r], l = $d(c, u);
    return s ? o : (r++, l);
  });
  return r < t.length && (i += " " + t.slice(r).join(" ")), i = i.replace(/%{2,2}/g, "%"), i;
}
_r.format = Ud;
(function(e) {
  var t = W && W.__extends || function() {
    var c = function(l, f) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, p) {
        d.__proto__ = p;
      } || function(d, p) {
        for (var E in p)
          Object.prototype.hasOwnProperty.call(p, E) && (d[E] = p[E]);
      }, c(l, f);
    };
    return function(l, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      c(l, f);
      function d() {
        this.constructor = l;
      }
      l.prototype = f === null ? Object.create(f) : (d.prototype = f.prototype, new d());
    };
  }(), n = W && W.__spreadArray || function(c, l) {
    for (var f = 0, d = l.length, p = c.length; f < d; f++, p++)
      c[p] = l[f];
    return c;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.invariant = e.createInvariantWith = e.InvariantError = void 0;
  var r = _r, i = 2;
  function o(c) {
    if (!!c.stack) {
      var l = c.stack.split(`
`);
      l.splice(1, i), c.stack = l.join(`
`);
    }
  }
  var s = function(c) {
    t(l, c);
    function l(f) {
      for (var d = [], p = 1; p < arguments.length; p++)
        d[p - 1] = arguments[p];
      var E = c.call(this, f) || this;
      return E.message = f, E.name = "Invariant Violation", E.message = r.format.apply(void 0, n([f], d)), o(E), E;
    }
    return l;
  }(Error);
  e.InvariantError = s;
  function a(c) {
    var l = function(f, d) {
      for (var p = [], E = 2; E < arguments.length; E++)
        p[E - 2] = arguments[E];
      if (!f) {
        var y = r.format.apply(void 0, n([d], p)), g = !!c.prototype.name, S = g ? new c(y) : c(y);
        throw o(S), S;
      }
    };
    return l;
  }
  e.createInvariantWith = a;
  function u(c) {
    for (var l = [], f = 1; f < arguments.length; f++)
      l[f - 1] = arguments[f];
    return a(c).apply(void 0, l);
  }
  e.invariant = a(s), e.invariant.as = u;
})(zu);
(function(e) {
  var t = W && W.__createBinding || (Object.create ? function(r, i, o, s) {
    s === void 0 && (s = o), Object.defineProperty(r, s, { enumerable: !0, get: function() {
      return i[o];
    } });
  } : function(r, i, o, s) {
    s === void 0 && (s = o), r[s] = i[o];
  }), n = W && W.__exportStar || function(r, i) {
    for (var o in r)
      o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(zu, e), n(_r, e);
})(hn);
var Ci = {}, xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.IS_PATCHED_MODULE = void 0;
xn.IS_PATCHED_MODULE = Symbol("isPatchedModule");
var wr = {}, oi = { exports: {} }, ro, va;
function Vd() {
  if (va)
    return ro;
  va = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, i = r * 7, o = r * 365.25;
  ro = function(l, f) {
    f = f || {};
    var d = typeof l;
    if (d === "string" && l.length > 0)
      return s(l);
    if (d === "number" && isFinite(l))
      return f.long ? u(l) : a(l);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(l));
  };
  function s(l) {
    if (l = String(l), !(l.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);
      if (!!f) {
        var d = parseFloat(f[1]), p = (f[2] || "ms").toLowerCase();
        switch (p) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * o;
          case "weeks":
          case "week":
          case "w":
            return d * i;
          case "days":
          case "day":
          case "d":
            return d * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function a(l) {
    var f = Math.abs(l);
    return f >= r ? Math.round(l / r) + "d" : f >= n ? Math.round(l / n) + "h" : f >= t ? Math.round(l / t) + "m" : f >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function u(l) {
    var f = Math.abs(l);
    return f >= r ? c(l, f, r, "day") : f >= n ? c(l, f, n, "hour") : f >= t ? c(l, f, t, "minute") : f >= e ? c(l, f, e, "second") : l + " ms";
  }
  function c(l, f, d, p) {
    var E = f >= d * 1.5;
    return Math.round(l / d) + " " + p + (E ? "s" : "");
  }
  return ro;
}
function Bd(e) {
  n.debug = n, n.default = n, n.coerce = u, n.disable = o, n.enable = i, n.enabled = s, n.humanize = Vd(), n.destroy = c, Object.keys(e).forEach((l) => {
    n[l] = e[l];
  }), n.names = [], n.skips = [], n.formatters = {};
  function t(l) {
    let f = 0;
    for (let d = 0; d < l.length; d++)
      f = (f << 5) - f + l.charCodeAt(d), f |= 0;
    return n.colors[Math.abs(f) % n.colors.length];
  }
  n.selectColor = t;
  function n(l) {
    let f, d = null, p, E;
    function y(...g) {
      if (!y.enabled)
        return;
      const S = y, D = Number(new Date()), L = D - (f || D);
      S.diff = L, S.prev = f, S.curr = D, f = D, g[0] = n.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
      let N = 0;
      g[0] = g[0].replace(/%([a-zA-Z%])/g, (w, P) => {
        if (w === "%%")
          return "%";
        N++;
        const B = n.formatters[P];
        if (typeof B == "function") {
          const b = g[N];
          w = B.call(S, b), g.splice(N, 1), N--;
        }
        return w;
      }), n.formatArgs.call(S, g), (S.log || n.log).apply(S, g);
    }
    return y.namespace = l, y.useColors = n.useColors(), y.color = n.selectColor(l), y.extend = r, y.destroy = n.destroy, Object.defineProperty(y, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => d !== null ? d : (p !== n.namespaces && (p = n.namespaces, E = n.enabled(l)), E),
      set: (g) => {
        d = g;
      }
    }), typeof n.init == "function" && n.init(y), y;
  }
  function r(l, f) {
    const d = n(this.namespace + (typeof f > "u" ? ":" : f) + l);
    return d.log = this.log, d;
  }
  function i(l) {
    n.save(l), n.namespaces = l, n.names = [], n.skips = [];
    let f;
    const d = (typeof l == "string" ? l : "").split(/[\s,]+/), p = d.length;
    for (f = 0; f < p; f++)
      !d[f] || (l = d[f].replace(/\*/g, ".*?"), l[0] === "-" ? n.skips.push(new RegExp("^" + l.slice(1) + "$")) : n.names.push(new RegExp("^" + l + "$")));
  }
  function o() {
    const l = [
      ...n.names.map(a),
      ...n.skips.map(a).map((f) => "-" + f)
    ].join(",");
    return n.enable(""), l;
  }
  function s(l) {
    if (l[l.length - 1] === "*")
      return !0;
    let f, d;
    for (f = 0, d = n.skips.length; f < d; f++)
      if (n.skips[f].test(l))
        return !1;
    for (f = 0, d = n.names.length; f < d; f++)
      if (n.names[f].test(l))
        return !0;
    return !1;
  }
  function a(l) {
    return l.toString().substring(2, l.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(l) {
    return l instanceof Error ? l.stack || l.message : l;
  }
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return n.enable(n.load()), n;
}
var qd = Bd;
(function(e, t) {
  t.formatArgs = r, t.save = i, t.load = o, t.useColors = n, t.storage = s(), t.destroy = (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function n() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function r(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const c = "color: " + this.color;
    u.splice(1, 0, c, "color: inherit");
    let l = 0, f = 0;
    u[0].replace(/%[a-zA-Z%]/g, (d) => {
      d !== "%%" && (l++, d === "%c" && (f = l));
    }), u.splice(f, 0, c);
  }
  t.log = console.debug || console.log || (() => {
  });
  function i(u) {
    try {
      u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function o() {
    let u;
    try {
      u = t.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function s() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = qd(t);
  const { formatters: a } = e.exports;
  a.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(oi, oi.exports);
var Xu = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.nextTickAsync = ln.nextTick = void 0;
function Gd(e) {
  setTimeout(e, 0);
}
ln.nextTick = Gd;
function Hd(e) {
  return new Promise(function(t) {
    setTimeout(function() {
      t(e());
    }, 0);
  });
}
ln.nextTickAsync = Hd;
(function(e) {
  var t = W && W.__extends || function() {
    var f = function(d, p) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, y) {
        E.__proto__ = y;
      } || function(E, y) {
        for (var g in y)
          Object.prototype.hasOwnProperty.call(y, g) && (E[g] = y[g]);
      }, f(d, p);
    };
    return function(d, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      f(d, p);
      function E() {
        this.constructor = d;
      }
      d.prototype = p === null ? Object.create(p) : (E.prototype = p.prototype, new E());
    };
  }(), n = W && W.__awaiter || function(f, d, p, E) {
    function y(g) {
      return g instanceof p ? g : new p(function(S) {
        S(g);
      });
    }
    return new (p || (p = Promise))(function(g, S) {
      function D(C) {
        try {
          N(E.next(C));
        } catch (w) {
          S(w);
        }
      }
      function L(C) {
        try {
          N(E.throw(C));
        } catch (w) {
          S(w);
        }
      }
      function N(C) {
        C.done ? g(C.value) : y(C.value).then(D, L);
      }
      N((E = E.apply(f, d || [])).next());
    });
  }, r = W && W.__generator || function(f, d) {
    var p = { label: 0, sent: function() {
      if (g[0] & 1)
        throw g[1];
      return g[1];
    }, trys: [], ops: [] }, E, y, g, S;
    return S = { next: D(0), throw: D(1), return: D(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function D(N) {
      return function(C) {
        return L([N, C]);
      };
    }
    function L(N) {
      if (E)
        throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (E = 1, y && (g = N[0] & 2 ? y.return : N[0] ? y.throw || ((g = y.return) && g.call(y), 0) : y.next) && !(g = g.call(y, N[1])).done)
            return g;
          switch (y = 0, g && (N = [N[0] & 2, g.value]), N[0]) {
            case 0:
            case 1:
              g = N;
              break;
            case 4:
              return p.label++, { value: N[1], done: !1 };
            case 5:
              p.label++, y = N[1], N = [0];
              continue;
            case 7:
              N = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (g = p.trys, !(g = g.length > 0 && g[g.length - 1]) && (N[0] === 6 || N[0] === 2)) {
                p = 0;
                continue;
              }
              if (N[0] === 3 && (!g || N[1] > g[0] && N[1] < g[3])) {
                p.label = N[1];
                break;
              }
              if (N[0] === 6 && p.label < g[1]) {
                p.label = g[1], g = N;
                break;
              }
              if (g && p.label < g[2]) {
                p.label = g[2], p.ops.push(N);
                break;
              }
              g[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          N = d.call(f, p);
        } catch (C) {
          N = [6, C], y = 0;
        } finally {
          E = g = 0;
        }
      if (N[0] & 5)
        throw N[1];
      return { value: N[0] ? N[1] : void 0, done: !0 };
    }
  }, i = W && W.__read || function(f, d) {
    var p = typeof Symbol == "function" && f[Symbol.iterator];
    if (!p)
      return f;
    var E = p.call(f), y, g = [], S;
    try {
      for (; (d === void 0 || d-- > 0) && !(y = E.next()).done; )
        g.push(y.value);
    } catch (D) {
      S = { error: D };
    } finally {
      try {
        y && !y.done && (p = E.return) && p.call(E);
      } finally {
        if (S)
          throw S.error;
      }
    }
    return g;
  }, o = W && W.__spreadArray || function(f, d) {
    for (var p = 0, E = d.length, y = f.length; p < E; p++, y++)
      f[y] = d[p];
    return f;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AsyncEventEmitter = e.AsyncEventEmitterReadyState = void 0;
  var s = oi.exports, a = Ko, u = ln, c;
  (function(f) {
    f.ACTIVE = "ACTIVE", f.DEACTIVATED = "DEACTIVATED";
  })(c = e.AsyncEventEmitterReadyState || (e.AsyncEventEmitterReadyState = {}));
  var l = function(f) {
    t(d, f);
    function d() {
      var p = f.call(this) || this;
      return p.log = s.debug("async-event-emitter"), p.queue = /* @__PURE__ */ new Map(), p.readyState = c.ACTIVE, p;
    }
    return d.prototype.on = function(p, E) {
      var y = this, g = this.log.extend("on");
      return g('adding "%s" listener...', p), this.readyState === c.DEACTIVATED ? (g("the emitter is destroyed, skipping!"), this) : f.prototype.on.call(this, p, function() {
        for (var S = [], D = 0; D < arguments.length; D++)
          S[D] = arguments[D];
        return n(y, void 0, void 0, function() {
          var L, N = this;
          return r(this, function(C) {
            return L = this.openListenerQueue(p), g('awaiting the "%s" listener...', p), L.push({
              args: S,
              done: new Promise(function(w, P) {
                return n(N, void 0, void 0, function() {
                  var B;
                  return r(this, function(b) {
                    switch (b.label) {
                      case 0:
                        return b.trys.push([0, 2, , 3]), [4, E.apply(void 0, o([], i(S)))];
                      case 1:
                        return b.sent(), w(), g('"%s" listener has resolved!', p), [3, 3];
                      case 2:
                        return B = b.sent(), g('"%s" listener has rejected!', B), P(B), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              })
            }), [2];
          });
        });
      });
    }, d.prototype.emit = function(p) {
      for (var E = this, y = [], g = 1; g < arguments.length; g++)
        y[g - 1] = arguments[g];
      var S = this.log.extend("emit");
      return S('emitting "%s" event...', p), this.readyState === c.DEACTIVATED ? (S("the emitter is destroyed, skipping!"), !1) : (this.openListenerQueue(p), S('appending a one-time cleanup "%s" listener...', p), this.once(p, function() {
        u.nextTick(function() {
          E.queue.delete(p), S('cleaned up "%s" listeners queue!', p);
        });
      }), f.prototype.emit.apply(this, o([p], i(y))));
    }, d.prototype.untilIdle = function(p, E) {
      return E === void 0 && (E = function() {
        return !0;
      }), n(this, void 0, void 0, function() {
        var y, g = this;
        return r(this, function(S) {
          switch (S.label) {
            case 0:
              return y = this.queue.get(p) || [], [4, Promise.all(y.filter(E).map(function(D) {
                var L = D.done;
                return L;
              })).finally(function() {
                g.queue.delete(p);
              })];
            case 1:
              return S.sent(), [2];
          }
        });
      });
    }, d.prototype.openListenerQueue = function(p) {
      var E = this.log.extend("openListenerQueue");
      E('opening "%s" listeners queue...', p);
      var y = this.queue.get(p);
      return y ? (E("returning an exising queue:", y), y) : (E("no queue found, creating one..."), this.queue.set(p, []), []);
    }, d.prototype.removeAllListeners = function(p) {
      var E = this.log.extend("removeAllListeners");
      return E("event:", p), p ? (this.queue.delete(p), E('cleared the "%s" listeners queue!', p, this.queue.get(p))) : (this.queue.clear(), E("cleared the listeners queue!", this.queue)), f.prototype.removeAllListeners.call(this, p);
    }, d.prototype.activate = function() {
      var p = this.log.extend("activate");
      this.readyState = c.ACTIVE, p("set state to:", this.readyState);
    }, d.prototype.deactivate = function() {
      var p = this.log.extend("deactivate");
      p("removing all listeners..."), this.removeAllListeners(), this.readyState = c.DEACTIVATED, p("set state to:", this.readyState);
    }, d;
  }(a.StrictEventEmitter);
  e.AsyncEventEmitter = l;
})(Xu);
(function(e) {
  var t = W && W.__values || function(l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = f && l[f], p = 0;
    if (d)
      return d.call(l);
    if (l && typeof l.length == "number")
      return {
        next: function() {
          return l && p >= l.length && (l = void 0), { value: l && l[p++], done: !l };
        }
      };
    throw new TypeError(f ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Interceptor = e.InterceptorReadyState = e.deleteGlobalSymbol = e.getGlobalSymbol = void 0;
  var n = oi.exports, r = Xu, i = ln;
  function o(l) {
    return globalThis[l] || void 0;
  }
  e.getGlobalSymbol = o;
  function s(l, f) {
    globalThis[l] = f;
  }
  function a(l) {
    delete globalThis[l];
  }
  e.deleteGlobalSymbol = a;
  var u;
  (function(l) {
    l.IDLE = "IDLE", l.APPLYING = "APPLYING", l.APPLIED = "APPLIED", l.DISPOSING = "DISPOSING", l.DISPOSED = "DISPOSED";
  })(u = e.InterceptorReadyState || (e.InterceptorReadyState = {}));
  var c = function() {
    function l(f) {
      this.symbol = f, this.readyState = u.IDLE, this.emitter = new r.AsyncEventEmitter(), this.subscriptions = [], this.log = n.debug(f.description), this.emitter.setMaxListeners(0), this.log("constructing the interceptor...");
    }
    return l.prototype.checkEnvironment = function() {
      return !0;
    }, l.prototype.apply = function() {
      var f = this, d = this.log.extend("apply");
      if (d("applying the interceptor..."), this.readyState === u.APPLIED) {
        d("intercepted already applied!");
        return;
      }
      var p = this.checkEnvironment();
      if (!p) {
        d("the interceptor cannot be applied in this environment!");
        return;
      }
      this.readyState = u.APPLYING, this.emitter.activate(), d("activated the emiter!", this.emitter.readyState);
      var E = this.getInstance();
      if (E) {
        d("found a running instance, reusing..."), this.on = function(y, g) {
          d('proxying the "%s" listener', y), E.emitter.addListener(y, g), f.subscriptions.push(function() {
            E.emitter.removeListener(y, g), d('removed proxied "%s" listener!', y);
          });
        }, i.nextTick(function() {
          f.readyState = u.APPLIED;
        });
        return;
      }
      d("no running instance found, setting up a new instance..."), this.setup(), this.setInstance(), i.nextTick(function() {
        f.readyState = u.APPLIED;
      });
    }, l.prototype.setup = function() {
    }, l.prototype.on = function(f, d) {
      var p = this.log.extend("on");
      if (this.readyState === u.DISPOSING || this.readyState === u.DISPOSED) {
        p("cannot listen to events, already disposed!");
        return;
      }
      p('adding "%s" event listener:', f, d.name), this.emitter.on(f, d);
    }, l.prototype.dispose = function() {
      var f, d, p = this, E = this.log.extend("dispose");
      if (this.readyState === u.DISPOSED) {
        E("cannot dispose, already disposed!");
        return;
      }
      if (E("disposing the interceptor..."), this.readyState = u.DISPOSING, !this.getInstance()) {
        E("no interceptors running, skipping dispose...");
        return;
      }
      if (this.clearInstance(), E("global symbol deleted:", o(this.symbol)), this.subscriptions.length > 0) {
        E("disposing of %d subscriptions...", this.subscriptions.length);
        try {
          for (var y = t(this.subscriptions), g = y.next(); !g.done; g = y.next()) {
            var S = g.value;
            S();
          }
        } catch (D) {
          f = { error: D };
        } finally {
          try {
            g && !g.done && (d = y.return) && d.call(y);
          } finally {
            if (f)
              throw f.error;
          }
        }
        this.subscriptions = [], E("disposed of all subscriptions!", this.subscriptions.length);
      }
      this.emitter.deactivate(), E("destroyed the listener!"), i.nextTick(function() {
        p.readyState = u.DISPOSED;
      });
    }, l.prototype.getInstance = function() {
      var f, d = o(this.symbol);
      return this.log("retrieved global instance:", (f = d == null ? void 0 : d.constructor) === null || f === void 0 ? void 0 : f.name), d;
    }, l.prototype.setInstance = function() {
      s(this.symbol, this), this.log("set global instance!", this.symbol.description);
    }, l.prototype.clearInstance = function() {
      a(this.symbol), this.log("cleared global instance!", this.symbol.description);
    }, l;
  }();
  e.Interceptor = c;
})(wr);
var Li = {}, Yd = W && W.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Wd = W && W.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Li, "__esModule", { value: !0 });
Li.BatchInterceptor = void 0;
var Qd = wr, zd = function(e) {
  Yd(t, e);
  function t(n) {
    var r = this;
    return t.symbol = Symbol(n.name), r = e.call(this, t.symbol) || this, r.interceptors = n.interceptors, r;
  }
  return t.prototype.setup = function() {
    var n, r, i = this.log.extend("setup");
    i("applying all %d interceptors...", this.interceptors.length);
    var o = function(l) {
      i('applying "%s" interceptor...', l.constructor.name), l.apply(), i("adding interceptor dispose subscription"), s.subscriptions.push(function() {
        return l.dispose();
      });
    }, s = this;
    try {
      for (var a = Wd(this.interceptors), u = a.next(); !u.done; u = a.next()) {
        var c = u.value;
        o(c);
      }
    } catch (l) {
      n = { error: l };
    } finally {
      try {
        u && !u.done && (r = a.return) && r.call(a);
      } finally {
        if (n)
          throw n.error;
      }
    }
  }, t.prototype.on = function(n, r) {
    this.interceptors.forEach(function(i) {
      i.on(n, r);
    });
  }, t;
}(Qd.Interceptor);
Li.BatchInterceptor = zd;
var mn = {}, St = {}, ts = {}, io = {}, oo = {}, so, ya;
function Ju() {
  return ya || (ya = 1, so = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[n] = i;
    for (n in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (o.length !== 1 || o[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = Object.getOwnPropertyDescriptor(t, n);
      if (s.value !== i || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), so;
}
var ao, ga;
function ki() {
  if (ga)
    return ao;
  ga = 1;
  var e = Ju();
  return ao = function() {
    return e() && !!Symbol.toStringTag;
  }, ao;
}
var uo, Ea;
function Xd() {
  if (Ea)
    return uo;
  Ea = 1;
  var e = typeof Symbol < "u" && Symbol, t = Ju();
  return uo = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, uo;
}
var co, ba;
function Jd() {
  if (ba)
    return co;
  ba = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Array.prototype.slice, n = Object.prototype.toString, r = "[object Function]";
  return co = function(o) {
    var s = this;
    if (typeof s != "function" || n.call(s) !== r)
      throw new TypeError(e + s);
    for (var a = t.call(arguments, 1), u, c = function() {
      if (this instanceof u) {
        var E = s.apply(this, a.concat(t.call(arguments)));
        return Object(E) === E ? E : this;
      } else
        return s.apply(o, a.concat(t.call(arguments)));
    }, l = Math.max(0, s.length - a.length), f = [], d = 0; d < l; d++)
      f.push("$" + d);
    if (u = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(c), s.prototype) {
      var p = function() {
      };
      p.prototype = s.prototype, u.prototype = new p(), p.prototype = null;
    }
    return u;
  }, co;
}
var lo, Ta;
function ns() {
  if (Ta)
    return lo;
  Ta = 1;
  var e = Jd();
  return lo = Function.prototype.bind || e, lo;
}
var fo, _a;
function Kd() {
  if (_a)
    return fo;
  _a = 1;
  var e = ns();
  return fo = e.call(Function.call, Object.prototype.hasOwnProperty), fo;
}
var po, wa;
function rs() {
  if (wa)
    return po;
  wa = 1;
  var e, t = SyntaxError, n = Function, r = TypeError, i = function(R) {
    try {
      return n('"use strict"; return (' + R + ").constructor;")();
    } catch {
    }
  }, o = Object.getOwnPropertyDescriptor;
  if (o)
    try {
      o({}, "");
    } catch {
      o = null;
    }
  var s = function() {
    throw new r();
  }, a = o ? function() {
    try {
      return arguments.callee, s;
    } catch {
      try {
        return o(arguments, "callee").get;
      } catch {
        return s;
      }
    }
  }() : s, u = Xd()(), c = Object.getPrototypeOf || function(R) {
    return R.__proto__;
  }, l = {}, f = typeof Uint8Array > "u" ? e : c(Uint8Array), d = {
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": u ? c([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": l,
    "%AsyncGenerator%": l,
    "%AsyncGeneratorFunction%": l,
    "%AsyncIteratorPrototype%": l,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": n,
    "%GeneratorFunction%": l,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": u ? c(c([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !u ? e : c((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !u ? e : c((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": u ? c(""[Symbol.iterator]()) : e,
    "%Symbol%": u ? Symbol : e,
    "%SyntaxError%": t,
    "%ThrowTypeError%": a,
    "%TypedArray%": f,
    "%TypeError%": r,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet
  }, p = function R(k) {
    var q;
    if (k === "%AsyncFunction%")
      q = i("async function () {}");
    else if (k === "%GeneratorFunction%")
      q = i("function* () {}");
    else if (k === "%AsyncGeneratorFunction%")
      q = i("async function* () {}");
    else if (k === "%AsyncGenerator%") {
      var j = R("%AsyncGeneratorFunction%");
      j && (q = j.prototype);
    } else if (k === "%AsyncIteratorPrototype%") {
      var Q = R("%AsyncGenerator%");
      Q && (q = c(Q.prototype));
    }
    return d[k] = q, q;
  }, E = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, y = ns(), g = Kd(), S = y.call(Function.call, Array.prototype.concat), D = y.call(Function.apply, Array.prototype.splice), L = y.call(Function.call, String.prototype.replace), N = y.call(Function.call, String.prototype.slice), C = y.call(Function.call, RegExp.prototype.exec), w = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, P = /\\(\\)?/g, B = function(k) {
    var q = N(k, 0, 1), j = N(k, -1);
    if (q === "%" && j !== "%")
      throw new t("invalid intrinsic syntax, expected closing `%`");
    if (j === "%" && q !== "%")
      throw new t("invalid intrinsic syntax, expected opening `%`");
    var Q = [];
    return L(k, w, function(Y, ne, G, K) {
      Q[Q.length] = G ? L(K, P, "$1") : ne || Y;
    }), Q;
  }, b = function(k, q) {
    var j = k, Q;
    if (g(E, j) && (Q = E[j], j = "%" + Q[0] + "%"), g(d, j)) {
      var Y = d[j];
      if (Y === l && (Y = p(j)), typeof Y > "u" && !q)
        throw new r("intrinsic " + k + " exists, but is not available. Please file an issue!");
      return {
        alias: Q,
        name: j,
        value: Y
      };
    }
    throw new t("intrinsic " + k + " does not exist!");
  };
  return po = function(k, q) {
    if (typeof k != "string" || k.length === 0)
      throw new r("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof q != "boolean")
      throw new r('"allowMissing" argument must be a boolean');
    if (C(/^%?[^%]*%?$/g, k) === null)
      throw new t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var j = B(k), Q = j.length > 0 ? j[0] : "", Y = b("%" + Q + "%", q), ne = Y.name, G = Y.value, K = !1, Z = Y.alias;
    Z && (Q = Z[0], D(j, S([0, 1], Z)));
    for (var ie = 1, ue = !0; ie < j.length; ie += 1) {
      var m = j[ie], O = N(m, 0, 1), A = N(m, -1);
      if ((O === '"' || O === "'" || O === "`" || A === '"' || A === "'" || A === "`") && O !== A)
        throw new t("property names with quotes must have matching quotes");
      if ((m === "constructor" || !ue) && (K = !0), Q += "." + m, ne = "%" + Q + "%", g(d, ne))
        G = d[ne];
      else if (G != null) {
        if (!(m in G)) {
          if (!q)
            throw new r("base intrinsic for " + k + " exists, but the property is not available.");
          return;
        }
        if (o && ie + 1 >= j.length) {
          var M = o(G, m);
          ue = !!M, ue && "get" in M && !("originalValue" in M.get) ? G = M.get : G = G[m];
        } else
          ue = g(G, m), G = G[m];
        ue && !K && (d[ne] = G);
      }
    }
    return G;
  }, po;
}
var ho = { exports: {} }, Na;
function Zd() {
  return Na || (Na = 1, function(e) {
    var t = ns(), n = rs(), r = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), o = n("%Reflect.apply%", !0) || t.call(i, r), s = n("%Object.getOwnPropertyDescriptor%", !0), a = n("%Object.defineProperty%", !0), u = n("%Math.max%");
    if (a)
      try {
        a({}, "a", { value: 1 });
      } catch {
        a = null;
      }
    e.exports = function(f) {
      var d = o(t, i, arguments);
      if (s && a) {
        var p = s(d, "length");
        p.configurable && a(d, "length", { value: 1 + u(0, f.length - (arguments.length - 1)) });
      }
      return d;
    };
    var c = function() {
      return o(t, r, arguments);
    };
    a ? a(e.exports, "apply", { value: c }) : e.exports.apply = c;
  }(ho)), ho.exports;
}
var mo, Sa;
function is() {
  if (Sa)
    return mo;
  Sa = 1;
  var e = rs(), t = Zd(), n = t(e("String.prototype.indexOf"));
  return mo = function(i, o) {
    var s = e(i, !!o);
    return typeof s == "function" && n(i, ".prototype.") > -1 ? t(s) : s;
  }, mo;
}
var vo, Ia;
function ep() {
  if (Ia)
    return vo;
  Ia = 1;
  var e = ki()(), t = is(), n = t("Object.prototype.toString"), r = function(a) {
    return e && a && typeof a == "object" && Symbol.toStringTag in a ? !1 : n(a) === "[object Arguments]";
  }, i = function(a) {
    return r(a) ? !0 : a !== null && typeof a == "object" && typeof a.length == "number" && a.length >= 0 && n(a) !== "[object Array]" && n(a.callee) === "[object Function]";
  }, o = function() {
    return r(arguments);
  }();
  return r.isLegacyArguments = i, vo = o ? r : i, vo;
}
var yo, Oa;
function tp() {
  if (Oa)
    return yo;
  Oa = 1;
  var e = Object.prototype.toString, t = Function.prototype.toString, n = /^\s*(?:function)?\*/, r = ki()(), i = Object.getPrototypeOf, o = function() {
    if (!r)
      return !1;
    try {
      return Function("return function*() {}")();
    } catch {
    }
  }, s;
  return yo = function(u) {
    if (typeof u != "function")
      return !1;
    if (n.test(t.call(u)))
      return !0;
    if (!r) {
      var c = e.call(u);
      return c === "[object GeneratorFunction]";
    }
    if (!i)
      return !1;
    if (typeof s > "u") {
      var l = o();
      s = l ? i(l) : !1;
    }
    return i(u) === s;
  }, yo;
}
var go, Aa;
function np() {
  if (Aa)
    return go;
  Aa = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, n, r;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      n = Object.defineProperty({}, "length", {
        get: function() {
          throw r;
        }
      }), r = {}, t(function() {
        throw 42;
      }, null, n);
    } catch (d) {
      d !== r && (t = null);
    }
  else
    t = null;
  var i = /^\s*class\b/, o = function(p) {
    try {
      var E = e.call(p);
      return i.test(E);
    } catch {
      return !1;
    }
  }, s = function(p) {
    try {
      return o(p) ? !1 : (e.call(p), !0);
    } catch {
      return !1;
    }
  }, a = Object.prototype.toString, u = "[object Function]", c = "[object GeneratorFunction]", l = typeof Symbol == "function" && !!Symbol.toStringTag, f = typeof document == "object" && typeof document.all > "u" && document.all !== void 0 ? document.all : {};
  return go = t ? function(p) {
    if (p === f)
      return !0;
    if (!p || typeof p != "function" && typeof p != "object")
      return !1;
    if (typeof p == "function" && !p.prototype)
      return !0;
    try {
      t(p, null, n);
    } catch (E) {
      if (E !== r)
        return !1;
    }
    return !o(p);
  } : function(p) {
    if (p === f)
      return !0;
    if (!p || typeof p != "function" && typeof p != "object")
      return !1;
    if (typeof p == "function" && !p.prototype)
      return !0;
    if (l)
      return s(p);
    if (o(p))
      return !1;
    var E = a.call(p);
    return E === u || E === c;
  }, go;
}
var Eo, Ra;
function Ku() {
  if (Ra)
    return Eo;
  Ra = 1;
  var e = np(), t = Object.prototype.toString, n = Object.prototype.hasOwnProperty, r = function(u, c, l) {
    for (var f = 0, d = u.length; f < d; f++)
      n.call(u, f) && (l == null ? c(u[f], f, u) : c.call(l, u[f], f, u));
  }, i = function(u, c, l) {
    for (var f = 0, d = u.length; f < d; f++)
      l == null ? c(u.charAt(f), f, u) : c.call(l, u.charAt(f), f, u);
  }, o = function(u, c, l) {
    for (var f in u)
      n.call(u, f) && (l == null ? c(u[f], f, u) : c.call(l, u[f], f, u));
  }, s = function(u, c, l) {
    if (!e(c))
      throw new TypeError("iterator must be a function");
    var f;
    arguments.length >= 3 && (f = l), t.call(u) === "[object Array]" ? r(u, c, f) : typeof u == "string" ? i(u, c, f) : o(u, c, f);
  };
  return Eo = s, Eo;
}
var bo, Da;
function Zu() {
  if (Da)
    return bo;
  Da = 1;
  var e = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
  ], t = typeof globalThis > "u" ? W : globalThis;
  return bo = function() {
    for (var r = [], i = 0; i < e.length; i++)
      typeof t[e[i]] == "function" && (r[r.length] = e[i]);
    return r;
  }, bo;
}
var To, Ca;
function ec() {
  if (Ca)
    return To;
  Ca = 1;
  var e = rs(), t = e("%Object.getOwnPropertyDescriptor%", !0);
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return To = t, To;
}
var _o, La;
function tc() {
  if (La)
    return _o;
  La = 1;
  var e = Ku(), t = Zu(), n = is(), r = n("Object.prototype.toString"), i = ki()(), o = typeof globalThis > "u" ? W : globalThis, s = t(), a = n("Array.prototype.indexOf", !0) || function(E, y) {
    for (var g = 0; g < E.length; g += 1)
      if (E[g] === y)
        return g;
    return -1;
  }, u = n("String.prototype.slice"), c = {}, l = ec(), f = Object.getPrototypeOf;
  i && l && f && e(s, function(p) {
    var E = new o[p]();
    if (Symbol.toStringTag in E) {
      var y = f(E), g = l(y, Symbol.toStringTag);
      if (!g) {
        var S = f(y);
        g = l(S, Symbol.toStringTag);
      }
      c[p] = g.get;
    }
  });
  var d = function(E) {
    var y = !1;
    return e(c, function(g, S) {
      if (!y)
        try {
          y = g.call(E) === S;
        } catch {
        }
    }), y;
  };
  return _o = function(E) {
    if (!E || typeof E != "object")
      return !1;
    if (!i || !(Symbol.toStringTag in E)) {
      var y = u(r(E), 8, -1);
      return a(s, y) > -1;
    }
    return l ? d(E) : !1;
  }, _o;
}
var wo, ka;
function rp() {
  if (ka)
    return wo;
  ka = 1;
  var e = Ku(), t = Zu(), n = is(), r = n("Object.prototype.toString"), i = ki()(), o = typeof globalThis > "u" ? W : globalThis, s = t(), a = n("String.prototype.slice"), u = {}, c = ec(), l = Object.getPrototypeOf;
  i && c && l && e(s, function(p) {
    if (typeof o[p] == "function") {
      var E = new o[p]();
      if (Symbol.toStringTag in E) {
        var y = l(E), g = c(y, Symbol.toStringTag);
        if (!g) {
          var S = l(y);
          g = c(S, Symbol.toStringTag);
        }
        u[p] = g.get;
      }
    }
  });
  var f = function(E) {
    var y = !1;
    return e(u, function(g, S) {
      if (!y)
        try {
          var D = g.call(E);
          D === S && (y = D);
        } catch {
        }
    }), y;
  }, d = tc();
  return wo = function(E) {
    return d(E) ? !i || !(Symbol.toStringTag in E) ? a(r(E), 8, -1) : f(E) : !1;
  }, wo;
}
var Pa;
function ip() {
  return Pa || (Pa = 1, function(e) {
    var t = ep(), n = tp(), r = rp(), i = tc();
    function o(V) {
      return V.call.bind(V);
    }
    var s = typeof BigInt < "u", a = typeof Symbol < "u", u = o(Object.prototype.toString), c = o(Number.prototype.valueOf), l = o(String.prototype.valueOf), f = o(Boolean.prototype.valueOf);
    if (s)
      var d = o(BigInt.prototype.valueOf);
    if (a)
      var p = o(Symbol.prototype.valueOf);
    function E(V, Et) {
      if (typeof V != "object")
        return !1;
      try {
        return Et(V), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = n, e.isTypedArray = i;
    function y(V) {
      return typeof Promise < "u" && V instanceof Promise || V !== null && typeof V == "object" && typeof V.then == "function" && typeof V.catch == "function";
    }
    e.isPromise = y;
    function g(V) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(V) : i(V) || O(V);
    }
    e.isArrayBufferView = g;
    function S(V) {
      return r(V) === "Uint8Array";
    }
    e.isUint8Array = S;
    function D(V) {
      return r(V) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = D;
    function L(V) {
      return r(V) === "Uint16Array";
    }
    e.isUint16Array = L;
    function N(V) {
      return r(V) === "Uint32Array";
    }
    e.isUint32Array = N;
    function C(V) {
      return r(V) === "Int8Array";
    }
    e.isInt8Array = C;
    function w(V) {
      return r(V) === "Int16Array";
    }
    e.isInt16Array = w;
    function P(V) {
      return r(V) === "Int32Array";
    }
    e.isInt32Array = P;
    function B(V) {
      return r(V) === "Float32Array";
    }
    e.isFloat32Array = B;
    function b(V) {
      return r(V) === "Float64Array";
    }
    e.isFloat64Array = b;
    function R(V) {
      return r(V) === "BigInt64Array";
    }
    e.isBigInt64Array = R;
    function k(V) {
      return r(V) === "BigUint64Array";
    }
    e.isBigUint64Array = k;
    function q(V) {
      return u(V) === "[object Map]";
    }
    q.working = typeof Map < "u" && q(/* @__PURE__ */ new Map());
    function j(V) {
      return typeof Map > "u" ? !1 : q.working ? q(V) : V instanceof Map;
    }
    e.isMap = j;
    function Q(V) {
      return u(V) === "[object Set]";
    }
    Q.working = typeof Set < "u" && Q(/* @__PURE__ */ new Set());
    function Y(V) {
      return typeof Set > "u" ? !1 : Q.working ? Q(V) : V instanceof Set;
    }
    e.isSet = Y;
    function ne(V) {
      return u(V) === "[object WeakMap]";
    }
    ne.working = typeof WeakMap < "u" && ne(/* @__PURE__ */ new WeakMap());
    function G(V) {
      return typeof WeakMap > "u" ? !1 : ne.working ? ne(V) : V instanceof WeakMap;
    }
    e.isWeakMap = G;
    function K(V) {
      return u(V) === "[object WeakSet]";
    }
    K.working = typeof WeakSet < "u" && K(/* @__PURE__ */ new WeakSet());
    function Z(V) {
      return K(V);
    }
    e.isWeakSet = Z;
    function ie(V) {
      return u(V) === "[object ArrayBuffer]";
    }
    ie.working = typeof ArrayBuffer < "u" && ie(new ArrayBuffer());
    function ue(V) {
      return typeof ArrayBuffer > "u" ? !1 : ie.working ? ie(V) : V instanceof ArrayBuffer;
    }
    e.isArrayBuffer = ue;
    function m(V) {
      return u(V) === "[object DataView]";
    }
    m.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && m(new DataView(new ArrayBuffer(1), 0, 1));
    function O(V) {
      return typeof DataView > "u" ? !1 : m.working ? m(V) : V instanceof DataView;
    }
    e.isDataView = O;
    var A = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function M(V) {
      return u(V) === "[object SharedArrayBuffer]";
    }
    function ee(V) {
      return typeof A > "u" ? !1 : (typeof M.working > "u" && (M.working = M(new A())), M.working ? M(V) : V instanceof A);
    }
    e.isSharedArrayBuffer = ee;
    function re(V) {
      return u(V) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = re;
    function z(V) {
      return u(V) === "[object Map Iterator]";
    }
    e.isMapIterator = z;
    function se(V) {
      return u(V) === "[object Set Iterator]";
    }
    e.isSetIterator = se;
    function ce(V) {
      return u(V) === "[object Generator]";
    }
    e.isGeneratorObject = ce;
    function _e(V) {
      return u(V) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = _e;
    function be(V) {
      return E(V, c);
    }
    e.isNumberObject = be;
    function ct(V) {
      return E(V, l);
    }
    e.isStringObject = ct;
    function Re(V) {
      return E(V, f);
    }
    e.isBooleanObject = Re;
    function We(V) {
      return s && E(V, d);
    }
    e.isBigIntObject = We;
    function we(V) {
      return a && E(V, p);
    }
    e.isSymbolObject = we;
    function At(V) {
      return be(V) || ct(V) || Re(V) || We(V) || we(V);
    }
    e.isBoxedPrimitive = At;
    function xt(V) {
      return typeof Uint8Array < "u" && (ue(V) || ee(V));
    }
    e.isAnyArrayBuffer = xt, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(V) {
      Object.defineProperty(e, V, {
        enumerable: !1,
        value: function() {
          throw new Error(V + " is not supported in userland");
        }
      });
    });
  }(oo)), oo;
}
var No, xa;
function op() {
  return xa || (xa = 1, No = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), No;
}
var Gr = { exports: {} }, Fa;
function sp() {
  return Fa || (Fa = 1, typeof Object.create == "function" ? Gr.exports = function(t, n) {
    n && (t.super_ = n, t.prototype = Object.create(n.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Gr.exports = function(t, n) {
    if (n) {
      t.super_ = n;
      var r = function() {
      };
      r.prototype = n.prototype, t.prototype = new r(), t.prototype.constructor = t;
    }
  }), Gr.exports;
}
var ja;
function nc() {
  return ja || (ja = 1, function(e) {
    var t = Object.getOwnPropertyDescriptors || function(O) {
      for (var A = Object.keys(O), M = {}, ee = 0; ee < A.length; ee++)
        M[A[ee]] = Object.getOwnPropertyDescriptor(O, A[ee]);
      return M;
    }, n = /%[sdj%]/g;
    e.format = function(m) {
      if (!C(m)) {
        for (var O = [], A = 0; A < arguments.length; A++)
          O.push(s(arguments[A]));
        return O.join(" ");
      }
      for (var A = 1, M = arguments, ee = M.length, re = String(m).replace(n, function(se) {
        if (se === "%%")
          return "%";
        if (A >= ee)
          return se;
        switch (se) {
          case "%s":
            return String(M[A++]);
          case "%d":
            return Number(M[A++]);
          case "%j":
            try {
              return JSON.stringify(M[A++]);
            } catch {
              return "[Circular]";
            }
          default:
            return se;
        }
      }), z = M[A]; A < ee; z = M[++A])
        D(z) || !b(z) ? re += " " + z : re += " " + s(z);
      return re;
    }, e.deprecate = function(m, O) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return m;
      if (typeof process > "u")
        return function() {
          return e.deprecate(m, O).apply(this, arguments);
        };
      var A = !1;
      function M() {
        if (!A) {
          if (process.throwDeprecation)
            throw new Error(O);
          process.traceDeprecation ? console.trace(O) : console.error(O), A = !0;
        }
        return m.apply(this, arguments);
      }
      return M;
    };
    var r = {}, i = /^$/;
    if (process.env.NODE_DEBUG) {
      var o = process.env.NODE_DEBUG;
      o = o.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = new RegExp("^" + o + "$", "i");
    }
    e.debuglog = function(m) {
      if (m = m.toUpperCase(), !r[m])
        if (i.test(m)) {
          var O = process.pid;
          r[m] = function() {
            var A = e.format.apply(e, arguments);
            console.error("%s %d: %s", m, O, A);
          };
        } else
          r[m] = function() {
          };
      return r[m];
    };
    function s(m, O) {
      var A = {
        seen: [],
        stylize: u
      };
      return arguments.length >= 3 && (A.depth = arguments[2]), arguments.length >= 4 && (A.colors = arguments[3]), S(O) ? A.showHidden = O : O && e._extend(A, O), P(A.showHidden) && (A.showHidden = !1), P(A.depth) && (A.depth = 2), P(A.colors) && (A.colors = !1), P(A.customInspect) && (A.customInspect = !0), A.colors && (A.stylize = a), l(A, m, A.depth);
    }
    e.inspect = s, s.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, s.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    };
    function a(m, O) {
      var A = s.styles[O];
      return A ? "\x1B[" + s.colors[A][0] + "m" + m + "\x1B[" + s.colors[A][1] + "m" : m;
    }
    function u(m, O) {
      return m;
    }
    function c(m) {
      var O = {};
      return m.forEach(function(A, M) {
        O[A] = !0;
      }), O;
    }
    function l(m, O, A) {
      if (m.customInspect && O && q(O.inspect) && O.inspect !== e.inspect && !(O.constructor && O.constructor.prototype === O)) {
        var M = O.inspect(A, m);
        return C(M) || (M = l(m, M, A)), M;
      }
      var ee = f(m, O);
      if (ee)
        return ee;
      var re = Object.keys(O), z = c(re);
      if (m.showHidden && (re = Object.getOwnPropertyNames(O)), k(O) && (re.indexOf("message") >= 0 || re.indexOf("description") >= 0))
        return d(O);
      if (re.length === 0) {
        if (q(O)) {
          var se = O.name ? ": " + O.name : "";
          return m.stylize("[Function" + se + "]", "special");
        }
        if (B(O))
          return m.stylize(RegExp.prototype.toString.call(O), "regexp");
        if (R(O))
          return m.stylize(Date.prototype.toString.call(O), "date");
        if (k(O))
          return d(O);
      }
      var ce = "", _e = !1, be = ["{", "}"];
      if (g(O) && (_e = !0, be = ["[", "]"]), q(O)) {
        var ct = O.name ? ": " + O.name : "";
        ce = " [Function" + ct + "]";
      }
      if (B(O) && (ce = " " + RegExp.prototype.toString.call(O)), R(O) && (ce = " " + Date.prototype.toUTCString.call(O)), k(O) && (ce = " " + d(O)), re.length === 0 && (!_e || O.length == 0))
        return be[0] + ce + be[1];
      if (A < 0)
        return B(O) ? m.stylize(RegExp.prototype.toString.call(O), "regexp") : m.stylize("[Object]", "special");
      m.seen.push(O);
      var Re;
      return _e ? Re = p(m, O, A, z, re) : Re = re.map(function(We) {
        return E(m, O, A, z, We, _e);
      }), m.seen.pop(), y(Re, ce, be);
    }
    function f(m, O) {
      if (P(O))
        return m.stylize("undefined", "undefined");
      if (C(O)) {
        var A = "'" + JSON.stringify(O).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return m.stylize(A, "string");
      }
      if (N(O))
        return m.stylize("" + O, "number");
      if (S(O))
        return m.stylize("" + O, "boolean");
      if (D(O))
        return m.stylize("null", "null");
    }
    function d(m) {
      return "[" + Error.prototype.toString.call(m) + "]";
    }
    function p(m, O, A, M, ee) {
      for (var re = [], z = 0, se = O.length; z < se; ++z)
        K(O, String(z)) ? re.push(E(m, O, A, M, String(z), !0)) : re.push("");
      return ee.forEach(function(ce) {
        ce.match(/^\d+$/) || re.push(E(m, O, A, M, ce, !0));
      }), re;
    }
    function E(m, O, A, M, ee, re) {
      var z, se, ce;
      if (ce = Object.getOwnPropertyDescriptor(O, ee) || { value: O[ee] }, ce.get ? ce.set ? se = m.stylize("[Getter/Setter]", "special") : se = m.stylize("[Getter]", "special") : ce.set && (se = m.stylize("[Setter]", "special")), K(M, ee) || (z = "[" + ee + "]"), se || (m.seen.indexOf(ce.value) < 0 ? (D(A) ? se = l(m, ce.value, null) : se = l(m, ce.value, A - 1), se.indexOf(`
`) > -1 && (re ? se = se.split(`
`).map(function(_e) {
        return "  " + _e;
      }).join(`
`).substr(2) : se = `
` + se.split(`
`).map(function(_e) {
        return "   " + _e;
      }).join(`
`))) : se = m.stylize("[Circular]", "special")), P(z)) {
        if (re && ee.match(/^\d+$/))
          return se;
        z = JSON.stringify("" + ee), z.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (z = z.substr(1, z.length - 2), z = m.stylize(z, "name")) : (z = z.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), z = m.stylize(z, "string"));
      }
      return z + ": " + se;
    }
    function y(m, O, A) {
      var M = m.reduce(function(ee, re) {
        return re.indexOf(`
`) >= 0, ee + re.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return M > 60 ? A[0] + (O === "" ? "" : O + `
 `) + " " + m.join(`,
  `) + " " + A[1] : A[0] + O + " " + m.join(", ") + " " + A[1];
    }
    e.types = ip();
    function g(m) {
      return Array.isArray(m);
    }
    e.isArray = g;
    function S(m) {
      return typeof m == "boolean";
    }
    e.isBoolean = S;
    function D(m) {
      return m === null;
    }
    e.isNull = D;
    function L(m) {
      return m == null;
    }
    e.isNullOrUndefined = L;
    function N(m) {
      return typeof m == "number";
    }
    e.isNumber = N;
    function C(m) {
      return typeof m == "string";
    }
    e.isString = C;
    function w(m) {
      return typeof m == "symbol";
    }
    e.isSymbol = w;
    function P(m) {
      return m === void 0;
    }
    e.isUndefined = P;
    function B(m) {
      return b(m) && Q(m) === "[object RegExp]";
    }
    e.isRegExp = B, e.types.isRegExp = B;
    function b(m) {
      return typeof m == "object" && m !== null;
    }
    e.isObject = b;
    function R(m) {
      return b(m) && Q(m) === "[object Date]";
    }
    e.isDate = R, e.types.isDate = R;
    function k(m) {
      return b(m) && (Q(m) === "[object Error]" || m instanceof Error);
    }
    e.isError = k, e.types.isNativeError = k;
    function q(m) {
      return typeof m == "function";
    }
    e.isFunction = q;
    function j(m) {
      return m === null || typeof m == "boolean" || typeof m == "number" || typeof m == "string" || typeof m == "symbol" || typeof m > "u";
    }
    e.isPrimitive = j, e.isBuffer = op();
    function Q(m) {
      return Object.prototype.toString.call(m);
    }
    function Y(m) {
      return m < 10 ? "0" + m.toString(10) : m.toString(10);
    }
    var ne = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function G() {
      var m = new Date(), O = [
        Y(m.getHours()),
        Y(m.getMinutes()),
        Y(m.getSeconds())
      ].join(":");
      return [m.getDate(), ne[m.getMonth()], O].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", G(), e.format.apply(e, arguments));
    }, e.inherits = sp(), e._extend = function(m, O) {
      if (!O || !b(O))
        return m;
      for (var A = Object.keys(O), M = A.length; M--; )
        m[A[M]] = O[A[M]];
      return m;
    };
    function K(m, O) {
      return Object.prototype.hasOwnProperty.call(m, O);
    }
    var Z = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    e.promisify = function(O) {
      if (typeof O != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (Z && O[Z]) {
        var A = O[Z];
        if (typeof A != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(A, Z, {
          value: A,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), A;
      }
      function A() {
        for (var M, ee, re = new Promise(function(ce, _e) {
          M = ce, ee = _e;
        }), z = [], se = 0; se < arguments.length; se++)
          z.push(arguments[se]);
        z.push(function(ce, _e) {
          ce ? ee(ce) : M(_e);
        });
        try {
          O.apply(this, z);
        } catch (ce) {
          ee(ce);
        }
        return re;
      }
      return Object.setPrototypeOf(A, Object.getPrototypeOf(O)), Z && Object.defineProperty(A, Z, {
        value: A,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(A, t(O));
    }, e.promisify.custom = Z;
    function ie(m, O) {
      if (!m) {
        var A = new Error("Promise was rejected with a falsy value");
        A.reason = m, m = A;
      }
      return O(m);
    }
    function ue(m) {
      if (typeof m != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function O() {
        for (var A = [], M = 0; M < arguments.length; M++)
          A.push(arguments[M]);
        var ee = A.pop();
        if (typeof ee != "function")
          throw new TypeError("The last argument must be of type Function");
        var re = this, z = function() {
          return ee.apply(re, arguments);
        };
        m.apply(this, A).then(function(se) {
          process.nextTick(z.bind(null, null, se));
        }, function(se) {
          process.nextTick(ie.bind(null, se, z));
        });
      }
      return Object.setPrototypeOf(O, Object.getPrototypeOf(m)), Object.defineProperties(O, t(m)), O;
    }
    e.callbackify = ue;
  }(io)), io;
}
ts.TextEncoder = typeof TextEncoder < "u" ? TextEncoder : nc().TextEncoder;
ts.TextDecoder = typeof TextDecoder < "u" ? TextDecoder : nc().TextDecoder;
Object.defineProperty(St, "__esModule", { value: !0 });
St.getArrayBuffer = St.decodeBuffer = St.encodeBuffer = void 0;
var rc = ts;
function ap(e) {
  var t = new rc.TextEncoder(), n = t.encode(e);
  return ic(n);
}
St.encodeBuffer = ap;
function up(e, t) {
  var n = new rc.TextDecoder(t);
  return n.decode(e);
}
St.decodeBuffer = up;
function ic(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
St.getArrayBuffer = ic;
var Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.uuidv4 = void 0;
function cp() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    var t = Math.random() * 16 | 0, n = e == "x" ? t : t & 3 | 8;
    return n.toString(16);
  });
}
Pi.uuidv4 = cp;
var So = W && W.__awaiter || function(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}, Io = W && W.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.IsomorphicRequest = void 0;
var lp = yt, Oo = hn, Ma = St, fp = Pi, dp = function() {
  function e(t, n) {
    n === void 0 && (n = {});
    var r = new ArrayBuffer(0);
    if (this._bodyUsed = !1, t instanceof e) {
      this.id = t.id, this.url = t.url, this.method = t.method, this.headers = t.headers, this.credentials = t.credentials, this._body = t._body || r;
      return;
    }
    this.id = fp.uuidv4(), this.url = t, this.method = n.method || "GET", this.headers = new lp.Headers(n.headers), this.credentials = n.credentials || "same-origin", this._body = n.body || r;
  }
  return Object.defineProperty(e.prototype, "bodyUsed", {
    get: function() {
      return this._bodyUsed;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.text = function() {
    return So(this, void 0, void 0, function() {
      return Io(this, function(t) {
        return Oo.invariant(!this.bodyUsed, 'Failed to execute "text" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, Ma.decodeBuffer(this._body)];
      });
    });
  }, e.prototype.json = function() {
    return So(this, void 0, void 0, function() {
      var t;
      return Io(this, function(n) {
        return Oo.invariant(!this.bodyUsed, 'Failed to execute "json" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, t = Ma.decodeBuffer(this._body), [2, JSON.parse(t)];
      });
    });
  }, e.prototype.arrayBuffer = function() {
    return So(this, void 0, void 0, function() {
      return Io(this, function(t) {
        return Oo.invariant(!this.bodyUsed, 'Failed to execute "arrayBuffer" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, this._body];
      });
    });
  }, e.prototype.clone = function() {
    return new e(this);
  }, e;
}();
mn.IsomorphicRequest = dp;
var Fn = {}, xi = {}, pp = W && W.__awaiter || function(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}, hp = W && W.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.createLazyCallback = void 0;
function mp(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = 0, r, i, o = new Promise(function(a) {
    i = a;
  }).finally(function() {
    clearTimeout(r);
  }), s = function() {
    for (var a, u = [], c = 0; c < arguments.length; c++)
      u[c] = arguments[c];
    e.maxCalls && n >= e.maxCalls && ((a = e.maxCallsCallback) === null || a === void 0 || a.call(e)), i(u), n++;
  };
  return s.invoked = function() {
    return pp(t, void 0, void 0, function() {
      return hp(this, function(a) {
        return r = setTimeout(function() {
          i([]);
        }, 0), [2, o];
      });
    });
  }, s;
}
xi.createLazyCallback = mp;
var vp = W && W.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.InteractiveIsomorphicRequest = void 0;
var yp = hn, gp = mn, Ep = xi, bp = function(e) {
  vp(t, e);
  function t(n) {
    var r = e.call(this, n) || this;
    return r.respondWith = Ep.createLazyCallback({
      maxCalls: 1,
      maxCallsCallback: function() {
        yp.invariant(!1, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', r.method, r.url.href);
      }
    }), r;
  }
  return t;
}(gp.IsomorphicRequest);
Fn.InteractiveIsomorphicRequest = bp;
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.getCleanUrl = void 0;
function Tp(e, t) {
  return t === void 0 && (t = !0), [t && e.origin, e.pathname].filter(Boolean).join("");
}
Nr.getCleanUrl = Tp;
(function(e) {
  var t = W && W.__createBinding || (Object.create ? function(o, s, a, u) {
    u === void 0 && (u = a), Object.defineProperty(o, u, { enumerable: !0, get: function() {
      return s[a];
    } });
  } : function(o, s, a, u) {
    u === void 0 && (u = a), o[u] = s[a];
  }), n = W && W.__exportStar || function(o, s) {
    for (var a in o)
      a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && t(s, o, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeBuffer = e.encodeBuffer = e.getCleanUrl = void 0, n(xn, e), n(wr, e), n(Li, e), n(mn, e), n(Fn, e);
  var r = Nr;
  Object.defineProperty(e, "getCleanUrl", { enumerable: !0, get: function() {
    return r.getCleanUrl;
  } });
  var i = St;
  Object.defineProperty(e, "encodeBuffer", { enumerable: !0, get: function() {
    return i.encodeBuffer;
  } }), Object.defineProperty(e, "decodeBuffer", { enumerable: !0, get: function() {
    return i.decodeBuffer;
  } });
})(Ci);
var os = {}, oc = {}, Sr = { exports: {} }, wn = {
  decodeValues: !0,
  map: !1,
  silent: !1
};
function Mo(e) {
  return typeof e == "string" && !!e.trim();
}
function $o(e, t) {
  var n = e.split(";").filter(Mo), r = n.shift().split("="), i = r.shift(), o = r.join("=");
  t = t ? Object.assign({}, wn, t) : wn;
  try {
    o = t.decodeValues ? decodeURIComponent(o) : o;
  } catch (a) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + o + "'. Set options.decodeValues to false to disable this feature.", a);
  }
  var s = {
    name: i,
    value: o
  };
  return n.forEach(function(a) {
    var u = a.split("="), c = u.shift().trimLeft().toLowerCase(), l = u.join("=");
    c === "expires" ? s.expires = new Date(l) : c === "max-age" ? s.maxAge = parseInt(l, 10) : c === "secure" ? s.secure = !0 : c === "httponly" ? s.httpOnly = !0 : c === "samesite" ? s.sameSite = l : s[c] = l;
  }), s;
}
function sc(e, t) {
  if (t = t ? Object.assign({}, wn, t) : wn, !e)
    return t.map ? {} : [];
  if (e.headers && e.headers["set-cookie"])
    e = e.headers["set-cookie"];
  else if (e.headers) {
    var n = e.headers[Object.keys(e.headers).find(function(i) {
      return i.toLowerCase() === "set-cookie";
    })];
    !n && e.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = n;
  }
  if (Array.isArray(e) || (e = [e]), t = t ? Object.assign({}, wn, t) : wn, t.map) {
    var r = {};
    return e.filter(Mo).reduce(function(i, o) {
      var s = $o(o, t);
      return i[s.name] = s, i;
    }, r);
  } else
    return e.filter(Mo).map(function(i) {
      return $o(i, t);
    });
}
function _p(e) {
  if (Array.isArray(e))
    return e;
  if (typeof e != "string")
    return [];
  var t = [], n = 0, r, i, o, s, a;
  function u() {
    for (; n < e.length && /\s/.test(e.charAt(n)); )
      n += 1;
    return n < e.length;
  }
  function c() {
    return i = e.charAt(n), i !== "=" && i !== ";" && i !== ",";
  }
  for (; n < e.length; ) {
    for (r = n, a = !1; u(); )
      if (i = e.charAt(n), i === ",") {
        for (o = n, n += 1, u(), s = n; n < e.length && c(); )
          n += 1;
        n < e.length && e.charAt(n) === "=" ? (a = !0, n = s, t.push(e.substring(r, o)), r = n) : n = o + 1;
      } else
        n += 1;
    (!a || n >= e.length) && t.push(e.substring(r, e.length));
  }
  return t;
}
Sr.exports = sc;
Sr.exports.parse = sc;
Sr.exports.parseString = $o;
Sr.exports.splitCookiesString = _p;
(function(e) {
  var t = W && W.__rest || function(o, s) {
    var a = {};
    for (var u in o)
      Object.prototype.hasOwnProperty.call(o, u) && s.indexOf(u) < 0 && (a[u] = o[u]);
    if (o != null && typeof Object.getOwnPropertySymbols == "function")
      for (var c = 0, u = Object.getOwnPropertySymbols(o); c < u.length; c++)
        s.indexOf(u[c]) < 0 && Object.prototype.propertyIsEnumerable.call(o, u[c]) && (a[u[c]] = o[u[c]]);
    return a;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.store = e.PERSISTENCY_KEY = void 0;
  const n = Sr.exports;
  e.PERSISTENCY_KEY = "MSW_COOKIE_STORE";
  function r() {
    try {
      if (localStorage == null)
        return !1;
      const o = e.PERSISTENCY_KEY + "_test";
      return localStorage.setItem(o, "test"), localStorage.getItem(o), localStorage.removeItem(o), !0;
    } catch {
      return !1;
    }
  }
  class i {
    constructor() {
      this.store = /* @__PURE__ */ new Map();
    }
    add(s, a) {
      if (s.credentials === "omit")
        return;
      const u = new URL(s.url), c = a.headers.get("set-cookie");
      if (!c)
        return;
      const l = Date.now(), f = n.parse(c).map((p) => {
        var { maxAge: E } = p, y = t(p, ["maxAge"]);
        return Object.assign(Object.assign({}, y), { expires: E === void 0 ? y.expires : new Date(l + E * 1e3), maxAge: E });
      }), d = this.store.get(u.origin) || /* @__PURE__ */ new Map();
      f.forEach((p) => {
        this.store.set(u.origin, d.set(p.name, p));
      });
    }
    get(s) {
      this.deleteExpiredCookies();
      const a = new URL(s.url), u = this.store.get(a.origin) || /* @__PURE__ */ new Map();
      switch (s.credentials) {
        case "include":
          return typeof document > "u" || n.parse(document.cookie).forEach((l) => {
            u.set(l.name, l);
          }), u;
        case "same-origin":
          return u;
        default:
          return /* @__PURE__ */ new Map();
      }
    }
    getAll() {
      return this.deleteExpiredCookies(), this.store;
    }
    deleteAll(s) {
      const a = new URL(s.url);
      this.store.delete(a.origin);
    }
    clear() {
      this.store.clear();
    }
    hydrate() {
      if (!r())
        return;
      const s = localStorage.getItem(e.PERSISTENCY_KEY);
      if (!!s)
        try {
          JSON.parse(s).forEach(([u, c]) => {
            this.store.set(u, new Map(c.map((l) => {
              var [f, d] = l, { expires: p } = d, E = t(d, ["expires"]);
              return [
                f,
                p === void 0 ? E : Object.assign(Object.assign({}, E), { expires: new Date(p) })
              ];
            })));
          });
        } catch (a) {
          console.warn(`
	[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${e.PERSISTENCY_KEY}").

	Stored value:
	${localStorage.getItem(e.PERSISTENCY_KEY)}

	Thrown exception:
	${a}

	Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`), localStorage.removeItem(e.PERSISTENCY_KEY);
        }
    }
    persist() {
      if (!r())
        return;
      const s = Array.from(this.store.entries()).map(([a, u]) => [a, Array.from(u.entries())]);
      localStorage.setItem(e.PERSISTENCY_KEY, JSON.stringify(s));
    }
    deleteExpiredCookies() {
      const s = Date.now();
      this.store.forEach((a, u) => {
        a.forEach(({ expires: c, name: l }) => {
          c !== void 0 && c.getTime() <= s && a.delete(l);
        }), a.size === 0 && this.store.delete(u);
      });
    }
  }
  e.store = new i();
})(oc);
(function(e) {
  var t = W && W.__createBinding || (Object.create ? function(r, i, o, s) {
    s === void 0 && (s = o), Object.defineProperty(r, s, { enumerable: !0, get: function() {
      return i[o];
    } });
  } : function(r, i, o, s) {
    s === void 0 && (s = o), r[s] = i[o];
  }), n = W && W.__exportStar || function(r, i) {
    for (var o in r)
      o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(oc, e);
})(os);
var Ao, $a;
function wp() {
  return $a || ($a = 1, Ao = function() {
    function e(t, n, r, i, o) {
      return t < n || r < n ? t > r ? r + 1 : t + 1 : i === o ? n : n + 1;
    }
    return function(t, n) {
      if (t === n)
        return 0;
      if (t.length > n.length) {
        var r = t;
        t = n, n = r;
      }
      for (var i = t.length, o = n.length; i > 0 && t.charCodeAt(i - 1) === n.charCodeAt(o - 1); )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === n.charCodeAt(s); )
        s++;
      if (i -= s, o -= s, i === 0 || o < 3)
        return o;
      var a = 0, u, c, l, f, d, p, E, y, g, S, D, L, N = [];
      for (u = 0; u < i; u++)
        N.push(u + 1), N.push(t.charCodeAt(s + u));
      for (var C = N.length - 1; a < o - 3; )
        for (g = n.charCodeAt(s + (c = a)), S = n.charCodeAt(s + (l = a + 1)), D = n.charCodeAt(s + (f = a + 2)), L = n.charCodeAt(s + (d = a + 3)), p = a += 4, u = 0; u < C; u += 2)
          E = N[u], y = N[u + 1], c = e(E, c, l, g, y), l = e(c, l, f, S, y), f = e(l, f, d, D, y), p = e(f, d, p, L, y), N[u] = p, d = f, f = l, l = c, c = E;
      for (; a < o; )
        for (g = n.charCodeAt(s + (c = a)), p = ++a, u = 0; u < C; u += 2)
          E = N[u], N[u] = p = e(E, c, p, g, N[u + 1]), c = E;
      return p;
    };
  }()), Ao;
}
const Np = "16.5.0", Sp = Object.freeze({
  major: 16,
  minor: 5,
  patch: 0,
  preReleaseTag: null
});
function pe(e, t) {
  if (!Boolean(e))
    throw new Error(t);
}
function ot(e) {
  return typeof (e == null ? void 0 : e.then) == "function";
}
function st(e) {
  return typeof e == "object" && e !== null;
}
function Fe(e, t) {
  if (!Boolean(e))
    throw new Error(t != null ? t : "Unexpected invariant triggered.");
}
const Ip = /\r\n|[\n\r]/g;
function si(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(Ip)) {
    if (typeof i.index == "number" || Fe(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function ac(e) {
  return ss(e.source, si(e.source, e.start));
}
function ss(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, o = e.locationOffset.line - 1, s = t.line + o, a = t.line === 1 ? n : 0, u = t.column + a, c = `${e.name}:${s}:${u}
`, l = r.split(/\r\n|[\n\r]/g), f = l[i];
  if (f.length > 120) {
    const d = Math.floor(u / 80), p = u % 80, E = [];
    for (let y = 0; y < f.length; y += 80)
      E.push(f.slice(y, y + 80));
    return c + Ua([
      [`${s} |`, E[0]],
      ...E.slice(1, d + 1).map((y) => ["|", y]),
      ["|", "^".padStart(p)],
      ["|", E[d + 1]]
    ]);
  }
  return c + Ua([
    [`${s - 1} |`, l[i - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, l[i + 1]]
  ]);
}
function Ua(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function Op(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t ? {
    nodes: t,
    source: e[1],
    positions: e[2],
    path: e[3],
    originalError: e[4],
    extensions: e[5]
  } : t;
}
class F extends Error {
  constructor(t, ...n) {
    var r, i, o;
    const { nodes: s, source: a, positions: u, path: c, originalError: l, extensions: f } = Op(n);
    super(t), this.name = "GraphQLError", this.path = c != null ? c : void 0, this.originalError = l != null ? l : void 0, this.nodes = Va(Array.isArray(s) ? s : s ? [s] : void 0);
    const d = Va((r = this.nodes) === null || r === void 0 ? void 0 : r.map((E) => E.loc).filter((E) => E != null));
    this.source = a != null ? a : d == null || (i = d[0]) === null || i === void 0 ? void 0 : i.source, this.positions = u != null ? u : d == null ? void 0 : d.map((E) => E.start), this.locations = u && a ? u.map((E) => si(a, E)) : d == null ? void 0 : d.map((E) => si(E.source, E.start));
    const p = st(l == null ? void 0 : l.extensions) ? l == null ? void 0 : l.extensions : void 0;
    this.extensions = (o = f != null ? f : p) !== null && o !== void 0 ? o : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), l != null && l.stack ? Object.defineProperty(this, "stack", {
      value: l.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, F) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc && (t += `

` + ac(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + ss(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Va(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function Ap(e) {
  return e.toString();
}
function Rp(e) {
  return e.toJSON();
}
function Ye(e, t, n) {
  return new F(`Syntax Error: ${n}`, {
    source: e,
    positions: [t]
  });
}
class uc {
  constructor(t, n, r) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = r;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class as {
  constructor(t, n, r, i, o, s) {
    this.kind = t, this.start = n, this.end = r, this.line = i, this.column = o, this.value = s, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const cc = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, Dp = new Set(Object.keys(cc));
function Uo(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Dp.has(t);
}
let qe;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(qe || (qe = {}));
let ae;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(ae || (ae = {}));
let T;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(T || (T = {}));
function Vo(e) {
  return e === 9 || e === 32;
}
function pr(e) {
  return e >= 48 && e <= 57;
}
function lc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function us(e) {
  return lc(e) || e === 95;
}
function fc(e) {
  return lc(e) || pr(e) || e === 95;
}
function Cp(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
  for (let s = 0; s < e.length; ++s) {
    var o;
    const a = e[s], u = Lp(a);
    u !== a.length && (r = (o = r) !== null && o !== void 0 ? o : s, i = s, s !== 0 && u < n && (n = u));
  }
  return e.map((s, a) => a === 0 ? s : s.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
}
function Lp(e) {
  let t = 0;
  for (; t < e.length && Vo(e.charCodeAt(t)); )
    ++t;
  return t;
}
function kp(e) {
  if (e === "")
    return !0;
  let t = !0, n = !1, r = !0, i = !1;
  for (let o = 0; o < e.length; ++o)
    switch (e.codePointAt(o)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 11:
      case 12:
      case 14:
      case 15:
        return !1;
      case 13:
        return !1;
      case 10:
        if (t && !i)
          return !1;
        i = !0, t = !0, n = !1;
        break;
      case 9:
      case 32:
        n || (n = t);
        break;
      default:
        r && (r = n), t = !1;
    }
  return !(t || r && i);
}
function dc(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, o = r.length > 1 && r.slice(1).every((p) => p.length === 0 || Vo(p.charCodeAt(0))), s = n.endsWith('\\"""'), a = e.endsWith('"') && !s, u = e.endsWith("\\"), c = a || u, l = !(t != null && t.minimize) && (!i || e.length > 70 || c || o || s);
  let f = "";
  const d = i && Vo(e.charCodeAt(0));
  return (l && !d || o) && (f += `
`), f += n, (l || c) && (f += `
`), '"""' + f + '"""';
}
let $;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})($ || ($ = {}));
class cs {
  constructor(t) {
    const n = new as($.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== $.EOF)
      do
        if (t.next)
          t = t.next;
        else {
          const n = Pp(this, t.end);
          t.next = n, n.prev = t, t = n;
        }
      while (t.kind === $.COMMENT);
    return t;
  }
}
function pc(e) {
  return e === $.BANG || e === $.DOLLAR || e === $.AMP || e === $.PAREN_L || e === $.PAREN_R || e === $.SPREAD || e === $.COLON || e === $.EQUALS || e === $.AT || e === $.BRACKET_L || e === $.BRACKET_R || e === $.BRACE_L || e === $.PIPE || e === $.BRACE_R;
}
function jn(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function Fi(e, t) {
  return hc(e.charCodeAt(t)) && mc(e.charCodeAt(t + 1));
}
function hc(e) {
  return e >= 55296 && e <= 56319;
}
function mc(e) {
  return e >= 56320 && e <= 57343;
}
function fn(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0)
    return $.EOF;
  if (n >= 32 && n <= 126) {
    const r = String.fromCodePoint(n);
    return r === '"' ? `'"'` : `"${r}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function $e(e, t, n, r, i) {
  const o = e.line, s = 1 + n - e.lineStart;
  return new as(t, n, r, o, s, i);
}
function Pp(e, t) {
  const n = e.source.body, r = n.length;
  let i = t;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    switch (o) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++e.line, e.lineStart = i;
        continue;
      case 13:
        n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
        continue;
      case 35:
        return xp(e, i);
      case 33:
        return $e(e, $.BANG, i, i + 1);
      case 36:
        return $e(e, $.DOLLAR, i, i + 1);
      case 38:
        return $e(e, $.AMP, i, i + 1);
      case 40:
        return $e(e, $.PAREN_L, i, i + 1);
      case 41:
        return $e(e, $.PAREN_R, i, i + 1);
      case 46:
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
          return $e(e, $.SPREAD, i, i + 3);
        break;
      case 58:
        return $e(e, $.COLON, i, i + 1);
      case 61:
        return $e(e, $.EQUALS, i, i + 1);
      case 64:
        return $e(e, $.AT, i, i + 1);
      case 91:
        return $e(e, $.BRACKET_L, i, i + 1);
      case 93:
        return $e(e, $.BRACKET_R, i, i + 1);
      case 123:
        return $e(e, $.BRACE_L, i, i + 1);
      case 124:
        return $e(e, $.PIPE, i, i + 1);
      case 125:
        return $e(e, $.BRACE_R, i, i + 1);
      case 34:
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? Vp(e, i) : jp(e, i);
    }
    if (pr(o) || o === 45)
      return Fp(e, i, o);
    if (us(o))
      return Bp(e, i);
    throw Ye(e.source, i, o === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : jn(o) || Fi(n, i) ? `Unexpected character: ${fn(e, i)}.` : `Invalid character: ${fn(e, i)}.`);
  }
  return $e(e, $.EOF, r, r);
}
function xp(e, t) {
  const n = e.source.body, r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    if (o === 10 || o === 13)
      break;
    if (jn(o))
      ++i;
    else if (Fi(n, i))
      i += 2;
    else
      break;
  }
  return $e(e, $.COMMENT, t, i, n.slice(t + 1, i));
}
function Fp(e, t, n) {
  const r = e.source.body;
  let i = t, o = n, s = !1;
  if (o === 45 && (o = r.charCodeAt(++i)), o === 48) {
    if (o = r.charCodeAt(++i), pr(o))
      throw Ye(e.source, i, `Invalid number, unexpected digit after 0: ${fn(e, i)}.`);
  } else
    i = Ro(e, i, o), o = r.charCodeAt(i);
  if (o === 46 && (s = !0, o = r.charCodeAt(++i), i = Ro(e, i, o), o = r.charCodeAt(i)), (o === 69 || o === 101) && (s = !0, o = r.charCodeAt(++i), (o === 43 || o === 45) && (o = r.charCodeAt(++i)), i = Ro(e, i, o), o = r.charCodeAt(i)), o === 46 || us(o))
    throw Ye(e.source, i, `Invalid number, expected digit but got: ${fn(e, i)}.`);
  return $e(e, s ? $.FLOAT : $.INT, t, i, r.slice(t, i));
}
function Ro(e, t, n) {
  if (!pr(n))
    throw Ye(e.source, t, `Invalid number, expected digit but got: ${fn(e, t)}.`);
  const r = e.source.body;
  let i = t + 1;
  for (; pr(r.charCodeAt(i)); )
    ++i;
  return i;
}
function jp(e, t) {
  const n = e.source.body, r = n.length;
  let i = t + 1, o = i, s = "";
  for (; i < r; ) {
    const a = n.charCodeAt(i);
    if (a === 34)
      return s += n.slice(o, i), $e(e, $.STRING, t, i + 1, s);
    if (a === 92) {
      s += n.slice(o, i);
      const u = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? Mp(e, i) : $p(e, i) : Up(e, i);
      s += u.value, i += u.size, o = i;
      continue;
    }
    if (a === 10 || a === 13)
      break;
    if (jn(a))
      ++i;
    else if (Fi(n, i))
      i += 2;
    else
      throw Ye(e.source, i, `Invalid character within String: ${fn(e, i)}.`);
  }
  throw Ye(e.source, i, "Unterminated string.");
}
function Mp(e, t) {
  const n = e.source.body;
  let r = 0, i = 3;
  for (; i < 12; ) {
    const o = n.charCodeAt(t + i++);
    if (o === 125) {
      if (i < 5 || !jn(r))
        break;
      return {
        value: String.fromCodePoint(r),
        size: i
      };
    }
    if (r = r << 4 | sr(o), r < 0)
      break;
  }
  throw Ye(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function $p(e, t) {
  const n = e.source.body, r = Ba(n, t + 2);
  if (jn(r))
    return {
      value: String.fromCodePoint(r),
      size: 6
    };
  if (hc(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = Ba(n, t + 8);
    if (mc(i))
      return {
        value: String.fromCodePoint(r, i),
        size: 12
      };
  }
  throw Ye(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function Ba(e, t) {
  return sr(e.charCodeAt(t)) << 12 | sr(e.charCodeAt(t + 1)) << 8 | sr(e.charCodeAt(t + 2)) << 4 | sr(e.charCodeAt(t + 3));
}
function sr(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function Up(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw Ye(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function Vp(e, t) {
  const n = e.source.body, r = n.length;
  let i = e.lineStart, o = t + 3, s = o, a = "";
  const u = [];
  for (; o < r; ) {
    const c = n.charCodeAt(o);
    if (c === 34 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34) {
      a += n.slice(s, o), u.push(a);
      const l = $e(e, $.BLOCK_STRING, t, o + 3, Cp(u).join(`
`));
      return e.line += u.length - 1, e.lineStart = i, l;
    }
    if (c === 92 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34 && n.charCodeAt(o + 3) === 34) {
      a += n.slice(s, o), s = o + 1, o += 4;
      continue;
    }
    if (c === 10 || c === 13) {
      a += n.slice(s, o), u.push(a), c === 13 && n.charCodeAt(o + 1) === 10 ? o += 2 : ++o, a = "", s = o, i = o;
      continue;
    }
    if (jn(c))
      ++o;
    else if (Fi(n, o))
      o += 2;
    else
      throw Ye(e.source, o, `Invalid character within String: ${fn(e, o)}.`);
  }
  throw Ye(e.source, o, "Unterminated string.");
}
function Bp(e, t) {
  const n = e.source.body, r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    if (fc(o))
      ++i;
    else
      break;
  }
  return $e(e, $.NAME, t, i, n.slice(t, i));
}
const qp = 10, vc = 2;
function U(e) {
  return ji(e, []);
}
function ji(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Gp(e, t);
    default:
      return String(e);
  }
}
function Gp(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (Hp(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : ji(r, n);
  } else if (Array.isArray(e))
    return Wp(e, n);
  return Yp(e, n);
}
function Hp(e) {
  return typeof e.toJSON == "function";
}
function Yp(e, t) {
  const n = Object.entries(e);
  if (n.length === 0)
    return "{}";
  if (t.length > vc)
    return "[" + Qp(e) + "]";
  const r = n.map(([i, o]) => i + ": " + ji(o, t));
  return "{ " + r.join(", ") + " }";
}
function Wp(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > vc)
    return "[Array]";
  const n = Math.min(qp, e.length), r = e.length - n, i = [];
  for (let o = 0; o < n; ++o)
    i.push(ji(e[o], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Qp(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const Ot = process.env.NODE_ENV === "production" ? function(t, n) {
  return t instanceof n;
} : function(t, n) {
  if (t instanceof n)
    return !0;
  if (typeof t == "object" && t !== null) {
    var r;
    const i = n.prototype[Symbol.toStringTag], o = Symbol.toStringTag in t ? t[Symbol.toStringTag] : (r = t.constructor) === null || r === void 0 ? void 0 : r.name;
    if (i === o) {
      const s = U(t);
      throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
    }
  }
  return !1;
};
class Mi {
  constructor(t, n = "GraphQL request", r = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || pe(!1, `Body must be a string. Received: ${U(t)}.`), this.body = t, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || pe(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || pe(!1, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function yc(e) {
  return Ot(e, Mi);
}
function $i(e, t) {
  return new Ui(e, t).parseDocument();
}
function gc(e, t) {
  const n = new Ui(e, t);
  n.expectToken($.SOF);
  const r = n.parseValueLiteral(!1);
  return n.expectToken($.EOF), r;
}
function zp(e, t) {
  const n = new Ui(e, t);
  n.expectToken($.SOF);
  const r = n.parseConstValueLiteral();
  return n.expectToken($.EOF), r;
}
function Xp(e, t) {
  const n = new Ui(e, t);
  n.expectToken($.SOF);
  const r = n.parseTypeReference();
  return n.expectToken($.EOF), r;
}
class Ui {
  constructor(t, n) {
    const r = yc(t) ? t : new Mi(t);
    this._lexer = new cs(r), this._options = n;
  }
  parseName() {
    const t = this.expectToken($.NAME);
    return this.node(t, {
      kind: T.NAME,
      value: t.value
    });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: T.DOCUMENT,
      definitions: this.many($.SOF, this.parseDefinition, $.EOF)
    });
  }
  parseDefinition() {
    if (this.peek($.BRACE_L))
      return this.parseOperationDefinition();
    const t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === $.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw Ye(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek($.BRACE_L))
      return this.node(t, {
        kind: T.OPERATION_DEFINITION,
        operation: qe.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const n = this.parseOperationType();
    let r;
    return this.peek($.NAME) && (r = this.parseName()), this.node(t, {
      kind: T.OPERATION_DEFINITION,
      operation: n,
      name: r,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseOperationType() {
    const t = this.expectToken($.NAME);
    switch (t.value) {
      case "query":
        return qe.QUERY;
      case "mutation":
        return qe.MUTATION;
      case "subscription":
        return qe.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany($.PAREN_L, this.parseVariableDefinition, $.PAREN_R);
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: T.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken($.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken($.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken($.DOLLAR), this.node(t, {
      kind: T.VARIABLE,
      name: this.parseName()
    });
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: T.SELECTION_SET,
      selections: this.many($.BRACE_L, this.parseSelection, $.BRACE_R)
    });
  }
  parseSelection() {
    return this.peek($.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const t = this._lexer.token, n = this.parseName();
    let r, i;
    return this.expectOptionalToken($.COLON) ? (r = n, i = this.parseName()) : i = n, this.node(t, {
      kind: T.FIELD,
      alias: r,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek($.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany($.PAREN_L, n, $.PAREN_R);
  }
  parseArgument(t = !1) {
    const n = this._lexer.token, r = this.parseName();
    return this.expectToken($.COLON), this.node(n, {
      kind: T.ARGUMENT,
      name: r,
      value: this.parseValueLiteral(t)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken($.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek($.NAME) ? this.node(t, {
      kind: T.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: T.INLINE_FRAGMENT,
      typeCondition: n ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentDefinition() {
    var t;
    const n = this._lexer.token;
    return this.expectKeyword("fragment"), ((t = this._options) === null || t === void 0 ? void 0 : t.allowLegacyFragmentVariables) === !0 ? this.node(n, {
      kind: T.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(n, {
      kind: T.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case $.BRACKET_L:
        return this.parseList(t);
      case $.BRACE_L:
        return this.parseObject(t);
      case $.INT:
        return this._lexer.advance(), this.node(n, {
          kind: T.INT,
          value: n.value
        });
      case $.FLOAT:
        return this._lexer.advance(), this.node(n, {
          kind: T.FLOAT,
          value: n.value
        });
      case $.STRING:
      case $.BLOCK_STRING:
        return this.parseStringLiteral();
      case $.NAME:
        switch (this._lexer.advance(), n.value) {
          case "true":
            return this.node(n, {
              kind: T.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(n, {
              kind: T.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(n, {
              kind: T.NULL
            });
          default:
            return this.node(n, {
              kind: T.ENUM,
              value: n.value
            });
        }
      case $.DOLLAR:
        if (t)
          if (this.expectToken($.DOLLAR), this._lexer.token.kind === $.NAME) {
            const r = this._lexer.token.value;
            throw Ye(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`);
          } else
            throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return this._lexer.advance(), this.node(t, {
      kind: T.STRING,
      value: t.value,
      block: t.kind === $.BLOCK_STRING
    });
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: T.LIST,
      values: this.any($.BRACKET_L, n, $.BRACKET_R)
    });
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: T.OBJECT,
      fields: this.any($.BRACE_L, n, $.BRACE_R)
    });
  }
  parseObjectField(t) {
    const n = this._lexer.token, r = this.parseName();
    return this.expectToken($.COLON), this.node(n, {
      kind: T.OBJECT_FIELD,
      name: r,
      value: this.parseValueLiteral(t)
    });
  }
  parseDirectives(t) {
    const n = [];
    for (; this.peek($.AT); )
      n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(t) {
    const n = this._lexer.token;
    return this.expectToken($.AT), this.node(n, {
      kind: T.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(t)
    });
  }
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken($.BRACKET_L)) {
      const r = this.parseTypeReference();
      this.expectToken($.BRACKET_R), n = this.node(t, {
        kind: T.LIST_TYPE,
        type: r
      });
    } else
      n = this.parseNamedType();
    return this.expectOptionalToken($.BANG) ? this.node(t, {
      kind: T.NON_NULL_TYPE,
      type: n
    }) : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: T.NAMED_TYPE,
      name: this.parseName()
    });
  }
  peekDescription() {
    return this.peek($.STRING) || this.peek($.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    const r = this.parseConstDirectives(), i = this.many($.BRACE_L, this.parseOperationTypeDefinition, $.BRACE_R);
    return this.node(t, {
      kind: T.SCHEMA_DEFINITION,
      description: n,
      directives: r,
      operationTypes: i
    });
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token, n = this.parseOperationType();
    this.expectToken($.COLON);
    const r = this.parseNamedType();
    return this.node(t, {
      kind: T.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: r
    });
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    const r = this.parseName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: T.SCALAR_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i
    });
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: T.OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: o,
      fields: s
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany($.AMP, this.parseNamedType) : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany($.BRACE_L, this.parseFieldDefinition, $.BRACE_R);
  }
  parseFieldDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), r = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken($.COLON);
    const o = this.parseTypeReference(), s = this.parseConstDirectives();
    return this.node(t, {
      kind: T.FIELD_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      type: o,
      directives: s
    });
  }
  parseArgumentDefs() {
    return this.optionalMany($.PAREN_L, this.parseInputValueDef, $.PAREN_R);
  }
  parseInputValueDef() {
    const t = this._lexer.token, n = this.parseDescription(), r = this.parseName();
    this.expectToken($.COLON);
    const i = this.parseTypeReference();
    let o;
    this.expectOptionalToken($.EQUALS) && (o = this.parseConstValueLiteral());
    const s = this.parseConstDirectives();
    return this.node(t, {
      kind: T.INPUT_VALUE_DEFINITION,
      description: n,
      name: r,
      type: i,
      defaultValue: o,
      directives: s
    });
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: T.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: o,
      fields: s
    });
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    const r = this.parseName(), i = this.parseConstDirectives(), o = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: T.UNION_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      types: o
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken($.EQUALS) ? this.delimitedMany($.PIPE, this.parseNamedType) : [];
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    const r = this.parseName(), i = this.parseConstDirectives(), o = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: T.ENUM_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      values: o
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany($.BRACE_L, this.parseEnumValueDefinition, $.BRACE_R);
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), r = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: T.ENUM_VALUE_DEFINITION,
      description: n,
      name: r,
      directives: i
    });
  }
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw Ye(this._lexer.source, this._lexer.token.start, `${Hr(this._lexer.token)} is reserved and cannot be used for an enum value.`);
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    const r = this.parseName(), i = this.parseConstDirectives(), o = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: T.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      fields: o
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany($.BRACE_L, this.parseInputValueDef, $.BRACE_R);
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === $.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(), r = this.optionalMany($.BRACE_L, this.parseOperationTypeDefinition, $.BRACE_R);
    if (n.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: T.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: r
    });
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(), r = this.parseConstDirectives();
    if (r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: T.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: r
    });
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: T.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: o
    });
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: T.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: o
    });
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: T.UNION_TYPE_EXTENSION,
      name: n,
      directives: r,
      types: i
    });
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: T.ENUM_TYPE_EXTENSION,
      name: n,
      directives: r,
      values: i
    });
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: T.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: r,
      fields: i
    });
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken($.AT);
    const r = this.parseName(), i = this.parseArgumentDefs(), o = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const s = this.parseDirectiveLocations();
    return this.node(t, {
      kind: T.DIRECTIVE_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      repeatable: o,
      locations: s
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany($.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const t = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(ae, n.value))
      return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    var r;
    return ((r = this._options) === null || r === void 0 ? void 0 : r.noLocation) !== !0 && (n.loc = new uc(t, this._lexer.lastToken, this._lexer.source)), n;
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t)
      return this._lexer.advance(), n;
    throw Ye(this._lexer.source, n.start, `Expected ${Ec(t)}, found ${Hr(n)}.`);
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this._lexer.advance(), !0) : !1;
  }
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === $.NAME && n.value === t)
      this._lexer.advance();
    else
      throw Ye(this._lexer.source, n.start, `Expected "${t}", found ${Hr(n)}.`);
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === $.NAME && n.value === t ? (this._lexer.advance(), !0) : !1;
  }
  unexpected(t) {
    const n = t != null ? t : this._lexer.token;
    return Ye(this._lexer.source, n.start, `Unexpected ${Hr(n)}.`);
  }
  any(t, n, r) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(r); )
      i.push(n.call(this));
    return i;
  }
  optionalMany(t, n, r) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do
        i.push(n.call(this));
      while (!this.expectOptionalToken(r));
      return i;
    }
    return [];
  }
  many(t, n, r) {
    this.expectToken(t);
    const i = [];
    do
      i.push(n.call(this));
    while (!this.expectOptionalToken(r));
    return i;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const r = [];
    do
      r.push(n.call(this));
    while (this.expectOptionalToken(t));
    return r;
  }
}
function Hr(e) {
  const t = e.value;
  return Ec(e.kind) + (t != null ? ` "${t}"` : "");
}
function Ec(e) {
  return pc(e) ? `"${e}"` : e;
}
const Jp = 5;
function qt(e, t) {
  const [n, r] = t ? [e, t] : [void 0, e];
  let i = " Did you mean ";
  n && (i += n + " ");
  const o = r.map((u) => `"${u}"`);
  switch (o.length) {
    case 0:
      return "";
    case 1:
      return i + o[0] + "?";
    case 2:
      return i + o[0] + " or " + o[1] + "?";
  }
  const s = o.slice(0, Jp), a = s.pop();
  return i + s.join(", ") + ", or " + a + "?";
}
function qa(e) {
  return e;
}
function Gt(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function Xt(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function Bt(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function Ir(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), o = t.charCodeAt(r);
    if (Yr(i) && Yr(o)) {
      let s = 0;
      do
        ++n, s = s * 10 + i - Bo, i = e.charCodeAt(n);
      while (Yr(i) && s > 0);
      let a = 0;
      do
        ++r, a = a * 10 + o - Bo, o = t.charCodeAt(r);
      while (Yr(o) && a > 0);
      if (s < a)
        return -1;
      if (s > a)
        return 1;
    } else {
      if (i < o)
        return -1;
      if (i > o)
        return 1;
      ++n, ++r;
    }
  }
  return e.length - t.length;
}
const Bo = 48, Kp = 57;
function Yr(e) {
  return !isNaN(e) && Bo <= e && e <= Kp;
}
function tn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new Zp(e), i = Math.floor(e.length * 0.4) + 1;
  for (const o of t) {
    const s = r.measure(o, i);
    s !== void 0 && (n[o] = s);
  }
  return Object.keys(n).sort((o, s) => {
    const a = n[o] - n[s];
    return a !== 0 ? a : Ir(o, s);
  });
}
class Zp {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = Ga(this._inputLowerCase), this._rows = [
      new Array(t.length + 1).fill(0),
      new Array(t.length + 1).fill(0),
      new Array(t.length + 1).fill(0)
    ];
  }
  measure(t, n) {
    if (this._input === t)
      return 0;
    const r = t.toLowerCase();
    if (this._inputLowerCase === r)
      return 1;
    let i = Ga(r), o = this._inputArray;
    if (i.length < o.length) {
      const l = i;
      i = o, o = l;
    }
    const s = i.length, a = o.length;
    if (s - a > n)
      return;
    const u = this._rows;
    for (let l = 0; l <= a; l++)
      u[0][l] = l;
    for (let l = 1; l <= s; l++) {
      const f = u[(l - 1) % 3], d = u[l % 3];
      let p = d[0] = l;
      for (let E = 1; E <= a; E++) {
        const y = i[l - 1] === o[E - 1] ? 0 : 1;
        let g = Math.min(f[E] + 1, d[E - 1] + 1, f[E - 1] + y);
        if (l > 1 && E > 1 && i[l - 1] === o[E - 2] && i[l - 2] === o[E - 1]) {
          const S = u[(l - 2) % 3][E - 2];
          g = Math.min(g, S + 1);
        }
        g < p && (p = g), d[E] = g;
      }
      if (p > n)
        return;
    }
    const c = u[s % 3][a];
    return c <= n ? c : void 0;
  }
}
function Ga(e) {
  const t = e.length, n = new Array(t);
  for (let r = 0; r < t; ++r)
    n[r] = e.charCodeAt(r);
  return n;
}
function gt(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, r] of Object.entries(e))
    t[n] = r;
  return t;
}
function eh(e) {
  return `"${e.replace(th, nh)}"`;
}
const th = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function nh(e) {
  return rh[e.charCodeAt(0)];
}
const rh = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], Nn = Object.freeze({});
function Mn(e, t, n = cc) {
  const r = /* @__PURE__ */ new Map();
  for (const S of Object.values(T))
    r.set(S, On(t, S));
  let i, o = Array.isArray(e), s = [e], a = -1, u = [], c = e, l, f;
  const d = [], p = [];
  do {
    a++;
    const S = a === s.length, D = S && u.length !== 0;
    if (S) {
      if (l = p.length === 0 ? void 0 : d[d.length - 1], c = f, f = p.pop(), D)
        if (o) {
          c = c.slice();
          let N = 0;
          for (const [C, w] of u) {
            const P = C - N;
            w === null ? (c.splice(P, 1), N++) : c[P] = w;
          }
        } else {
          c = Object.defineProperties({}, Object.getOwnPropertyDescriptors(c));
          for (const [N, C] of u)
            c[N] = C;
        }
      a = i.index, s = i.keys, u = i.edits, o = i.inArray, i = i.prev;
    } else if (f) {
      if (l = o ? a : s[a], c = f[l], c == null)
        continue;
      d.push(l);
    }
    let L;
    if (!Array.isArray(c)) {
      var E, y;
      Uo(c) || pe(!1, `Invalid AST Node: ${U(c)}.`);
      const N = S ? (E = r.get(c.kind)) === null || E === void 0 ? void 0 : E.leave : (y = r.get(c.kind)) === null || y === void 0 ? void 0 : y.enter;
      if (L = N == null ? void 0 : N.call(t, c, l, f, d, p), L === Nn)
        break;
      if (L === !1) {
        if (!S) {
          d.pop();
          continue;
        }
      } else if (L !== void 0 && (u.push([l, L]), !S))
        if (Uo(L))
          c = L;
        else {
          d.pop();
          continue;
        }
    }
    if (L === void 0 && D && u.push([l, c]), S)
      d.pop();
    else {
      var g;
      i = {
        inArray: o,
        index: a,
        keys: s,
        edits: u,
        prev: i
      }, o = Array.isArray(c), s = o ? c : (g = n[c.kind]) !== null && g !== void 0 ? g : [], a = -1, u = [], f && p.push(f), f = c;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function ls(e) {
  const t = new Array(e.length).fill(null), n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.values(T)) {
    let i = !1;
    const o = new Array(e.length).fill(void 0), s = new Array(e.length).fill(void 0);
    for (let u = 0; u < e.length; ++u) {
      const { enter: c, leave: l } = On(e[u], r);
      i || (i = c != null || l != null), o[u] = c, s[u] = l;
    }
    if (!i)
      continue;
    const a = {
      enter(...u) {
        const c = u[0];
        for (let f = 0; f < e.length; f++)
          if (t[f] === null) {
            var l;
            const d = (l = o[f]) === null || l === void 0 ? void 0 : l.apply(e[f], u);
            if (d === !1)
              t[f] = c;
            else if (d === Nn)
              t[f] = Nn;
            else if (d !== void 0)
              return d;
          }
      },
      leave(...u) {
        const c = u[0];
        for (let f = 0; f < e.length; f++)
          if (t[f] === null) {
            var l;
            const d = (l = s[f]) === null || l === void 0 ? void 0 : l.apply(e[f], u);
            if (d === Nn)
              t[f] = Nn;
            else if (d !== void 0 && d !== !1)
              return d;
          } else
            t[f] === c && (t[f] = null);
      }
    };
    n[r] = a;
  }
  return n;
}
function On(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function ih(e, t, n) {
  const { enter: r, leave: i } = On(e, t);
  return n ? i : r;
}
function De(e) {
  return Mn(e, sh);
}
const oh = 80, sh = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  Document: {
    leave: (e) => te(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = me("(", te(e.variableDefinitions, ", "), ")"), n = te([
        e.operation,
        te([e.name, t]),
        te(e.directives, " ")
      ], " ");
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + me(" = ", n) + me(" ", te(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => wt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const o = me("", e, ": ") + t;
      let s = o + me("(", te(n, ", "), ")");
      return s.length > oh && (s = o + me(`(
`, ti(te(n, `
`)), `
)`)), te([s, te(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + me(" ", te(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => te([
      "...",
      me("on ", e),
      te(t, " "),
      n
    ], " ")
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => `fragment ${e}${me("(", te(n, ", "), ")")} on ${t} ${me("", te(r, " "), " ")}` + i
  },
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: t }) => t ? dc(e) : eh(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + te(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + te(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + me("(", te(t, ", "), ")")
  },
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: n }) => me("", e, `
`) + te(["schema", te(t, " "), wt(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => me("", e, `
`) + te(["scalar", t, te(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => me("", e, `
`) + te([
      "type",
      t,
      me("implements ", te(n, " & ")),
      te(r, " "),
      wt(i)
    ], " ")
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => me("", e, `
`) + t + (Ha(n) ? me(`(
`, ti(te(n, `
`)), `
)`) : me("(", te(n, ", "), ")")) + ": " + r + me(" ", te(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => me("", e, `
`) + te([t + ": " + n, me("= ", r), te(i, " ")], " ")
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => me("", e, `
`) + te([
      "interface",
      t,
      me("implements ", te(n, " & ")),
      te(r, " "),
      wt(i)
    ], " ")
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => me("", e, `
`) + te(["union", t, te(n, " "), me("= ", te(r, " | "))], " ")
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => me("", e, `
`) + te(["enum", t, te(n, " "), wt(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => me("", e, `
`) + te([t, te(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => me("", e, `
`) + te(["input", t, te(n, " "), wt(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => me("", e, `
`) + "directive @" + t + (Ha(n) ? me(`(
`, ti(te(n, `
`)), `
)`) : me("(", te(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + te(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => te(["extend schema", te(e, " "), wt(t)], " ")
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => te(["extend scalar", e, te(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => te([
      "extend type",
      e,
      me("implements ", te(t, " & ")),
      te(n, " "),
      wt(r)
    ], " ")
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => te([
      "extend interface",
      e,
      me("implements ", te(t, " & ")),
      te(n, " "),
      wt(r)
    ], " ")
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => te([
      "extend union",
      e,
      te(t, " "),
      me("= ", te(n, " | "))
    ], " ")
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => te(["extend enum", e, te(t, " "), wt(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => te(["extend input", e, te(t, " "), wt(n)], " ")
  }
};
function te(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function wt(e) {
  return me(`{
`, ti(te(e, `
`)), `
}`);
}
function me(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function ti(e) {
  return me("  ", e.replace(/\n/g, `
  `));
}
function Ha(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function ai(e, t) {
  switch (e.kind) {
    case T.NULL:
      return null;
    case T.INT:
      return parseInt(e.value, 10);
    case T.FLOAT:
      return parseFloat(e.value);
    case T.STRING:
    case T.ENUM:
    case T.BOOLEAN:
      return e.value;
    case T.LIST:
      return e.values.map((n) => ai(n, t));
    case T.OBJECT:
      return Xt(e.fields, (n) => n.name.value, (n) => ai(n.value, t));
    case T.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function at(e) {
  if (e != null || pe(!1, "Must provide name."), typeof e == "string" || pe(!1, "Expected name to be a string."), e.length === 0)
    throw new F("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!fc(e.charCodeAt(t)))
      throw new F(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
  if (!us(e.charCodeAt(0)))
    throw new F(`Names must start with [_a-zA-Z] but "${e}" does not.`);
  return e;
}
function bc(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new F(`Enum values cannot be named: ${e}`);
  return at(e);
}
function Or(e) {
  return ut(e) || ge(e) || Te(e) || Ge(e) || Ue(e) || Le(e) || Ce(e) || fe(e);
}
function ah(e) {
  if (!Or(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL type.`);
  return e;
}
function ut(e) {
  return Ot(e, kt);
}
function uh(e) {
  if (!ut(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL Scalar type.`);
  return e;
}
function ge(e) {
  return Ot(e, mt);
}
function Tc(e) {
  if (!ge(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL Object type.`);
  return e;
}
function Te(e) {
  return Ot(e, An);
}
function _c(e) {
  if (!Te(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL Interface type.`);
  return e;
}
function Ge(e) {
  return Ot(e, Rn);
}
function ch(e) {
  if (!Ge(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL Union type.`);
  return e;
}
function Ue(e) {
  return Ot(e, en);
}
function lh(e) {
  if (!Ue(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL Enum type.`);
  return e;
}
function Le(e) {
  return Ot(e, Dn);
}
function fh(e) {
  if (!Le(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL Input Object type.`);
  return e;
}
function Ce(e) {
  return Ot(e, Qe);
}
function dh(e) {
  if (!Ce(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL List type.`);
  return e;
}
function fe(e) {
  return Ot(e, de);
}
function ph(e) {
  if (!fe(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL Non-Null type.`);
  return e;
}
function et(e) {
  return ut(e) || Ue(e) || Le(e) || Ar(e) && et(e.ofType);
}
function hh(e) {
  if (!et(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL input type.`);
  return e;
}
function Kt(e) {
  return ut(e) || ge(e) || Te(e) || Ge(e) || Ue(e) || Ar(e) && Kt(e.ofType);
}
function mh(e) {
  if (!Kt(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL output type.`);
  return e;
}
function Ct(e) {
  return ut(e) || Ue(e);
}
function vh(e) {
  if (!Ct(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL leaf type.`);
  return e;
}
function Lt(e) {
  return ge(e) || Te(e) || Ge(e);
}
function yh(e) {
  if (!Lt(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL composite type.`);
  return e;
}
function Dt(e) {
  return Te(e) || Ge(e);
}
function gh(e) {
  if (!Dt(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL abstract type.`);
  return e;
}
class Qe {
  constructor(t) {
    Or(t) || pe(!1, `Expected ${U(t)} to be a GraphQL type.`), this.ofType = t;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLList";
  }
  toString() {
    return "[" + String(this.ofType) + "]";
  }
  toJSON() {
    return this.toString();
  }
}
class de {
  constructor(t) {
    fs(t) || pe(!1, `Expected ${U(t)} to be a GraphQL nullable type.`), this.ofType = t;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLNonNull";
  }
  toString() {
    return String(this.ofType) + "!";
  }
  toJSON() {
    return this.toString();
  }
}
function Ar(e) {
  return Ce(e) || fe(e);
}
function Eh(e) {
  if (!Ar(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL wrapping type.`);
  return e;
}
function fs(e) {
  return Or(e) && !fe(e);
}
function wc(e) {
  if (!fs(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL nullable type.`);
  return e;
}
function ds(e) {
  if (e)
    return fe(e) ? e.ofType : e;
}
function Rr(e) {
  return ut(e) || ge(e) || Te(e) || Ge(e) || Ue(e) || Le(e);
}
function bh(e) {
  if (!Rr(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL named type.`);
  return e;
}
function Je(e) {
  if (e) {
    let t = e;
    for (; Ar(t); )
      t = t.ofType;
    return t;
  }
}
function ps(e) {
  return typeof e == "function" ? e() : e;
}
function hs(e) {
  return typeof e == "function" ? e() : e;
}
class kt {
  constructor(t) {
    var n, r, i, o;
    const s = (n = t.parseValue) !== null && n !== void 0 ? n : qa;
    this.name = at(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : qa, this.parseValue = s, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (a, u) => s(ai(a, u)), this.extensions = gt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (o = t.extensionASTNodes) !== null && o !== void 0 ? o : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || pe(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${U(t.specifiedByURL)}.`), t.serialize == null || typeof t.serialize == "function" || pe(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || pe(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
  }
  get [Symbol.toStringTag]() {
    return "GraphQLScalarType";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      specifiedByURL: this.specifiedByURL,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
class mt {
  constructor(t) {
    var n;
    this.name = at(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = gt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => Sc(t), this._interfaces = () => Nc(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || pe(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${U(t.isTypeOf)}.`);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  getInterfaces() {
    return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: Oc(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Nc(e) {
  var t;
  const n = ps((t = e.interfaces) !== null && t !== void 0 ? t : []);
  return Array.isArray(n) || pe(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n;
}
function Sc(e) {
  const t = hs(e.fields);
  return In(t) || pe(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Bt(t, (n, r) => {
    var i;
    In(n) || pe(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || pe(!1, `${e.name}.${r} field resolver must be a function if provided, but got: ${U(n.resolve)}.`);
    const o = (i = n.args) !== null && i !== void 0 ? i : {};
    return In(o) || pe(!1, `${e.name}.${r} args must be an object with argument names as keys.`), {
      name: at(r),
      description: n.description,
      type: n.type,
      args: Ic(o),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: gt(n.extensions),
      astNode: n.astNode
    };
  });
}
function Ic(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: at(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: gt(n.extensions),
    astNode: n.astNode
  }));
}
function In(e) {
  return st(e) && !Array.isArray(e);
}
function Oc(e) {
  return Bt(e, (t) => ({
    description: t.description,
    type: t.type,
    args: Ac(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function Ac(e) {
  return Xt(e, (t) => t.name, (t) => ({
    description: t.description,
    type: t.type,
    defaultValue: t.defaultValue,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function nn(e) {
  return fe(e.type) && e.defaultValue === void 0;
}
class An {
  constructor(t) {
    var n;
    this.name = at(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = gt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Sc.bind(void 0, t), this._interfaces = Nc.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || pe(!1, `${this.name} must provide "resolveType" as a function, but got: ${U(t.resolveType)}.`);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInterfaceType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  getInterfaces() {
    return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: Oc(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
class Rn {
  constructor(t) {
    var n;
    this.name = at(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = gt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = Th.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || pe(!1, `${this.name} must provide "resolveType" as a function, but got: ${U(t.resolveType)}.`);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLUnionType";
  }
  getTypes() {
    return typeof this._types == "function" && (this._types = this._types()), this._types;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Th(e) {
  const t = ps(e.types);
  return Array.isArray(t) || pe(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t;
}
class en {
  constructor(t) {
    var n;
    this.name = at(t.name), this.description = t.description, this.extensions = gt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = _h(this.name, t.values), this._valueLookup = new Map(this._values.map((r) => [r.value, r])), this._nameLookup = Gt(this._values, (r) => r.name);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLEnumType";
  }
  getValues() {
    return this._values;
  }
  getValue(t) {
    return this._nameLookup[t];
  }
  serialize(t) {
    const n = this._valueLookup.get(t);
    if (n === void 0)
      throw new F(`Enum "${this.name}" cannot represent value: ${U(t)}`);
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const r = U(t);
      throw new F(`Enum "${this.name}" cannot represent non-string value: ${r}.` + Wr(this, r));
    }
    const n = this.getValue(t);
    if (n == null)
      throw new F(`Value "${t}" does not exist in "${this.name}" enum.` + Wr(this, t));
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== T.ENUM) {
      const i = De(t);
      throw new F(`Enum "${this.name}" cannot represent non-enum value: ${i}.` + Wr(this, i), {
        nodes: t
      });
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = De(t);
      throw new F(`Value "${i}" does not exist in "${this.name}" enum.` + Wr(this, i), {
        nodes: t
      });
    }
    return r.value;
  }
  toConfig() {
    const t = Xt(this.getValues(), (n) => n.name, (n) => ({
      description: n.description,
      value: n.value,
      deprecationReason: n.deprecationReason,
      extensions: n.extensions,
      astNode: n.astNode
    }));
    return {
      name: this.name,
      description: this.description,
      values: t,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Wr(e, t) {
  const n = e.getValues().map((i) => i.name), r = tn(t, n);
  return qt("the enum value", r);
}
function _h(e, t) {
  return In(t) || pe(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([n, r]) => (In(r) || pe(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${U(r)}.`), {
    name: bc(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: gt(r.extensions),
    astNode: r.astNode
  }));
}
class Dn {
  constructor(t) {
    var n;
    this.name = at(t.name), this.description = t.description, this.extensions = gt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = wh.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = Bt(this.getFields(), (n) => ({
      description: n.description,
      type: n.type,
      defaultValue: n.defaultValue,
      deprecationReason: n.deprecationReason,
      extensions: n.extensions,
      astNode: n.astNode
    }));
    return {
      name: this.name,
      description: this.description,
      fields: t,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function wh(e) {
  const t = hs(e.fields);
  return In(t) || pe(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Bt(t, (n, r) => (!("resolve" in n) || pe(!1, `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`), {
    name: at(r),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: gt(n.extensions),
    astNode: n.astNode
  }));
}
function Vi(e) {
  return fe(e.type) && e.defaultValue === void 0;
}
function ui(e, t) {
  return e === t ? !0 : fe(e) && fe(t) || Ce(e) && Ce(t) ? ui(e.ofType, t.ofType) : !1;
}
function an(e, t, n) {
  return t === n ? !0 : fe(n) ? fe(t) ? an(e, t.ofType, n.ofType) : !1 : fe(t) ? an(e, t.ofType, n) : Ce(n) ? Ce(t) ? an(e, t.ofType, n.ofType) : !1 : Ce(t) ? !1 : Dt(n) && (Te(t) || ge(t)) && e.isSubType(n, t);
}
function qo(e, t, n) {
  return t === n ? !0 : Dt(t) ? Dt(n) ? e.getPossibleTypes(t).some((r) => e.isSubType(n, r)) : e.isSubType(t, n) : Dt(n) ? e.isSubType(n, t) : !1;
}
const ni = 2147483647, ri = -2147483648, Rc = new kt({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = Cr(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new F(`Int cannot represent non-integer value: ${U(t)}`);
    if (n > ni || n < ri)
      throw new F("Int cannot represent non 32-bit signed integer value: " + U(t));
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new F(`Int cannot represent non-integer value: ${U(e)}`);
    if (e > ni || e < ri)
      throw new F(`Int cannot represent non 32-bit signed integer value: ${e}`);
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== T.INT)
      throw new F(`Int cannot represent non-integer value: ${De(e)}`, {
        nodes: e
      });
    const t = parseInt(e.value, 10);
    if (t > ni || t < ri)
      throw new F(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {
        nodes: e
      });
    return t;
  }
}), Dc = new kt({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = Cr(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new F(`Float cannot represent non numeric value: ${U(t)}`);
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new F(`Float cannot represent non numeric value: ${U(e)}`);
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== T.FLOAT && e.kind !== T.INT)
      throw new F(`Float cannot represent non numeric value: ${De(e)}`, e);
    return parseFloat(e.value);
  }
}), Pe = new kt({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = Cr(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new F(`String cannot represent value: ${U(e)}`);
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new F(`String cannot represent a non string value: ${U(e)}`);
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== T.STRING)
      throw new F(`String cannot represent a non string value: ${De(e)}`, {
        nodes: e
      });
    return e.value;
  }
}), it = new kt({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = Cr(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new F(`Boolean cannot represent a non boolean value: ${U(t)}`);
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new F(`Boolean cannot represent a non boolean value: ${U(e)}`);
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== T.BOOLEAN)
      throw new F(`Boolean cannot represent a non boolean value: ${De(e)}`, {
        nodes: e
      });
    return e.value;
  }
}), ms = new kt({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = Cr(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new F(`ID cannot represent value: ${U(e)}`);
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new F(`ID cannot represent value: ${U(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== T.STRING && e.kind !== T.INT)
      throw new F("ID cannot represent a non-string and non-integer value: " + De(e), {
        nodes: e
      });
    return e.value;
  }
}), Dr = Object.freeze([
  Pe,
  Rc,
  Dc,
  it,
  ms
]);
function Bi(e) {
  return Dr.some(({ name: t }) => e.name === t);
}
function Cr(e) {
  if (st(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!st(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
function qi(e) {
  return Ot(e, Pt);
}
function Nh(e) {
  if (!qi(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL directive.`);
  return e;
}
class Pt {
  constructor(t) {
    var n, r;
    this.name = at(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = gt(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || pe(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    st(i) && !Array.isArray(i) || pe(!1, `@${t.name} args must be an object with argument names as keys.`), this.args = Ic(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: Ac(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  }
  toString() {
    return "@" + this.name;
  }
  toJSON() {
    return this.toString();
  }
}
const vs = new Pt({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    ae.FIELD,
    ae.FRAGMENT_SPREAD,
    ae.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new de(it),
      description: "Included when true."
    }
  }
}), ys = new Pt({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    ae.FIELD,
    ae.FRAGMENT_SPREAD,
    ae.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new de(it),
      description: "Skipped when true."
    }
  }
}), gs = "No longer supported", Gi = new Pt({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    ae.FIELD_DEFINITION,
    ae.ARGUMENT_DEFINITION,
    ae.INPUT_FIELD_DEFINITION,
    ae.ENUM_VALUE
  ],
  args: {
    reason: {
      type: Pe,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: gs
    }
  }
}), Es = new Pt({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [ae.SCALAR],
  args: {
    url: {
      type: new de(Pe),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
}), rn = Object.freeze([
  vs,
  ys,
  Gi,
  Es
]);
function bs(e) {
  return rn.some(({ name: t }) => t === e.name);
}
function Ts(e) {
  return typeof e == "object" && typeof (e == null ? void 0 : e[Symbol.iterator]) == "function";
}
function Jt(e, t) {
  if (fe(t)) {
    const n = Jt(e, t.ofType);
    return (n == null ? void 0 : n.kind) === T.NULL ? null : n;
  }
  if (e === null)
    return {
      kind: T.NULL
    };
  if (e === void 0)
    return null;
  if (Ce(t)) {
    const n = t.ofType;
    if (Ts(e)) {
      const r = [];
      for (const i of e) {
        const o = Jt(i, n);
        o != null && r.push(o);
      }
      return {
        kind: T.LIST,
        values: r
      };
    }
    return Jt(e, n);
  }
  if (Le(t)) {
    if (!st(e))
      return null;
    const n = [];
    for (const r of Object.values(t.getFields())) {
      const i = Jt(e[r.name], r.type);
      i && n.push({
        kind: T.OBJECT_FIELD,
        name: {
          kind: T.NAME,
          value: r.name
        },
        value: i
      });
    }
    return {
      kind: T.OBJECT,
      fields: n
    };
  }
  if (Ct(t)) {
    const n = t.serialize(e);
    if (n == null)
      return null;
    if (typeof n == "boolean")
      return {
        kind: T.BOOLEAN,
        value: n
      };
    if (typeof n == "number" && Number.isFinite(n)) {
      const r = String(n);
      return Ya.test(r) ? {
        kind: T.INT,
        value: r
      } : {
        kind: T.FLOAT,
        value: r
      };
    }
    if (typeof n == "string")
      return Ue(t) ? {
        kind: T.ENUM,
        value: n
      } : t === ms && Ya.test(n) ? {
        kind: T.INT,
        value: n
      } : {
        kind: T.STRING,
        value: n
      };
    throw new TypeError(`Cannot convert value to AST: ${U(n)}.`);
  }
  Fe(!1, "Unexpected input type: " + U(t));
}
const Ya = /^-?(?:0|[1-9][0-9]*)$/, Hi = new mt({
  name: "__Schema",
  description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
  fields: () => ({
    description: {
      type: Pe,
      resolve: (e) => e.description
    },
    types: {
      description: "A list of all types supported by this server.",
      type: new de(new Qe(new de(ht))),
      resolve(e) {
        return Object.values(e.getTypeMap());
      }
    },
    queryType: {
      description: "The type that query operations will be rooted at.",
      type: new de(ht),
      resolve: (e) => e.getQueryType()
    },
    mutationType: {
      description: "If this server supports mutation, the type that mutation operations will be rooted at.",
      type: ht,
      resolve: (e) => e.getMutationType()
    },
    subscriptionType: {
      description: "If this server support subscription, the type that subscription operations will be rooted at.",
      type: ht,
      resolve: (e) => e.getSubscriptionType()
    },
    directives: {
      description: "A list of all directives supported by this server.",
      type: new de(new Qe(new de(_s))),
      resolve: (e) => e.getDirectives()
    }
  })
}), _s = new mt({
  name: "__Directive",
  description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
  fields: () => ({
    name: {
      type: new de(Pe),
      resolve: (e) => e.name
    },
    description: {
      type: Pe,
      resolve: (e) => e.description
    },
    isRepeatable: {
      type: new de(it),
      resolve: (e) => e.isRepeatable
    },
    locations: {
      type: new de(new Qe(new de(ws))),
      resolve: (e) => e.locations
    },
    args: {
      type: new de(new Qe(new de(Lr))),
      args: {
        includeDeprecated: {
          type: it,
          defaultValue: !1
        }
      },
      resolve(e, { includeDeprecated: t }) {
        return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
      }
    }
  })
}), ws = new en({
  name: "__DirectiveLocation",
  description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
  values: {
    QUERY: {
      value: ae.QUERY,
      description: "Location adjacent to a query operation."
    },
    MUTATION: {
      value: ae.MUTATION,
      description: "Location adjacent to a mutation operation."
    },
    SUBSCRIPTION: {
      value: ae.SUBSCRIPTION,
      description: "Location adjacent to a subscription operation."
    },
    FIELD: {
      value: ae.FIELD,
      description: "Location adjacent to a field."
    },
    FRAGMENT_DEFINITION: {
      value: ae.FRAGMENT_DEFINITION,
      description: "Location adjacent to a fragment definition."
    },
    FRAGMENT_SPREAD: {
      value: ae.FRAGMENT_SPREAD,
      description: "Location adjacent to a fragment spread."
    },
    INLINE_FRAGMENT: {
      value: ae.INLINE_FRAGMENT,
      description: "Location adjacent to an inline fragment."
    },
    VARIABLE_DEFINITION: {
      value: ae.VARIABLE_DEFINITION,
      description: "Location adjacent to a variable definition."
    },
    SCHEMA: {
      value: ae.SCHEMA,
      description: "Location adjacent to a schema definition."
    },
    SCALAR: {
      value: ae.SCALAR,
      description: "Location adjacent to a scalar definition."
    },
    OBJECT: {
      value: ae.OBJECT,
      description: "Location adjacent to an object type definition."
    },
    FIELD_DEFINITION: {
      value: ae.FIELD_DEFINITION,
      description: "Location adjacent to a field definition."
    },
    ARGUMENT_DEFINITION: {
      value: ae.ARGUMENT_DEFINITION,
      description: "Location adjacent to an argument definition."
    },
    INTERFACE: {
      value: ae.INTERFACE,
      description: "Location adjacent to an interface definition."
    },
    UNION: {
      value: ae.UNION,
      description: "Location adjacent to a union definition."
    },
    ENUM: {
      value: ae.ENUM,
      description: "Location adjacent to an enum definition."
    },
    ENUM_VALUE: {
      value: ae.ENUM_VALUE,
      description: "Location adjacent to an enum value definition."
    },
    INPUT_OBJECT: {
      value: ae.INPUT_OBJECT,
      description: "Location adjacent to an input object type definition."
    },
    INPUT_FIELD_DEFINITION: {
      value: ae.INPUT_FIELD_DEFINITION,
      description: "Location adjacent to an input object field definition."
    }
  }
}), ht = new mt({
  name: "__Type",
  description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
  fields: () => ({
    kind: {
      type: new de(Is),
      resolve(e) {
        if (ut(e))
          return Se.SCALAR;
        if (ge(e))
          return Se.OBJECT;
        if (Te(e))
          return Se.INTERFACE;
        if (Ge(e))
          return Se.UNION;
        if (Ue(e))
          return Se.ENUM;
        if (Le(e))
          return Se.INPUT_OBJECT;
        if (Ce(e))
          return Se.LIST;
        if (fe(e))
          return Se.NON_NULL;
        Fe(!1, `Unexpected type: "${U(e)}".`);
      }
    },
    name: {
      type: Pe,
      resolve: (e) => "name" in e ? e.name : void 0
    },
    description: {
      type: Pe,
      resolve: (e) => "description" in e ? e.description : void 0
    },
    specifiedByURL: {
      type: Pe,
      resolve: (e) => "specifiedByURL" in e ? e.specifiedByURL : void 0
    },
    fields: {
      type: new Qe(new de(Ns)),
      args: {
        includeDeprecated: {
          type: it,
          defaultValue: !1
        }
      },
      resolve(e, { includeDeprecated: t }) {
        if (ge(e) || Te(e)) {
          const n = Object.values(e.getFields());
          return t ? n : n.filter((r) => r.deprecationReason == null);
        }
      }
    },
    interfaces: {
      type: new Qe(new de(ht)),
      resolve(e) {
        if (ge(e) || Te(e))
          return e.getInterfaces();
      }
    },
    possibleTypes: {
      type: new Qe(new de(ht)),
      resolve(e, t, n, { schema: r }) {
        if (Dt(e))
          return r.getPossibleTypes(e);
      }
    },
    enumValues: {
      type: new Qe(new de(Ss)),
      args: {
        includeDeprecated: {
          type: it,
          defaultValue: !1
        }
      },
      resolve(e, { includeDeprecated: t }) {
        if (Ue(e)) {
          const n = e.getValues();
          return t ? n : n.filter((r) => r.deprecationReason == null);
        }
      }
    },
    inputFields: {
      type: new Qe(new de(Lr)),
      args: {
        includeDeprecated: {
          type: it,
          defaultValue: !1
        }
      },
      resolve(e, { includeDeprecated: t }) {
        if (Le(e)) {
          const n = Object.values(e.getFields());
          return t ? n : n.filter((r) => r.deprecationReason == null);
        }
      }
    },
    ofType: {
      type: ht,
      resolve: (e) => "ofType" in e ? e.ofType : void 0
    }
  })
}), Ns = new mt({
  name: "__Field",
  description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
  fields: () => ({
    name: {
      type: new de(Pe),
      resolve: (e) => e.name
    },
    description: {
      type: Pe,
      resolve: (e) => e.description
    },
    args: {
      type: new de(new Qe(new de(Lr))),
      args: {
        includeDeprecated: {
          type: it,
          defaultValue: !1
        }
      },
      resolve(e, { includeDeprecated: t }) {
        return t ? e.args : e.args.filter((n) => n.deprecationReason == null);
      }
    },
    type: {
      type: new de(ht),
      resolve: (e) => e.type
    },
    isDeprecated: {
      type: new de(it),
      resolve: (e) => e.deprecationReason != null
    },
    deprecationReason: {
      type: Pe,
      resolve: (e) => e.deprecationReason
    }
  })
}), Lr = new mt({
  name: "__InputValue",
  description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
  fields: () => ({
    name: {
      type: new de(Pe),
      resolve: (e) => e.name
    },
    description: {
      type: Pe,
      resolve: (e) => e.description
    },
    type: {
      type: new de(ht),
      resolve: (e) => e.type
    },
    defaultValue: {
      type: Pe,
      description: "A GraphQL-formatted string representing the default value for this input value.",
      resolve(e) {
        const { type: t, defaultValue: n } = e, r = Jt(n, t);
        return r ? De(r) : null;
      }
    },
    isDeprecated: {
      type: new de(it),
      resolve: (e) => e.deprecationReason != null
    },
    deprecationReason: {
      type: Pe,
      resolve: (e) => e.deprecationReason
    }
  })
}), Ss = new mt({
  name: "__EnumValue",
  description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
  fields: () => ({
    name: {
      type: new de(Pe),
      resolve: (e) => e.name
    },
    description: {
      type: Pe,
      resolve: (e) => e.description
    },
    isDeprecated: {
      type: new de(it),
      resolve: (e) => e.deprecationReason != null
    },
    deprecationReason: {
      type: Pe,
      resolve: (e) => e.deprecationReason
    }
  })
});
let Se;
(function(e) {
  e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
})(Se || (Se = {}));
const Is = new en({
  name: "__TypeKind",
  description: "An enum describing what kind of type a given `__Type` is.",
  values: {
    SCALAR: {
      value: Se.SCALAR,
      description: "Indicates this type is a scalar."
    },
    OBJECT: {
      value: Se.OBJECT,
      description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
    },
    INTERFACE: {
      value: Se.INTERFACE,
      description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
    },
    UNION: {
      value: Se.UNION,
      description: "Indicates this type is a union. `possibleTypes` is a valid field."
    },
    ENUM: {
      value: Se.ENUM,
      description: "Indicates this type is an enum. `enumValues` is a valid field."
    },
    INPUT_OBJECT: {
      value: Se.INPUT_OBJECT,
      description: "Indicates this type is an input object. `inputFields` is a valid field."
    },
    LIST: {
      value: Se.LIST,
      description: "Indicates this type is a list. `ofType` is a valid field."
    },
    NON_NULL: {
      value: Se.NON_NULL,
      description: "Indicates this type is a non-null. `ofType` is a valid field."
    }
  }
}), hr = {
  name: "__schema",
  type: new de(Hi),
  description: "Access the current type schema of this server.",
  args: [],
  resolve: (e, t, n, { schema: r }) => r,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, mr = {
  name: "__type",
  type: ht,
  description: "Request the type information of a single type.",
  args: [
    {
      name: "name",
      description: void 0,
      type: new de(Pe),
      defaultValue: void 0,
      deprecationReason: void 0,
      extensions: /* @__PURE__ */ Object.create(null),
      astNode: void 0
    }
  ],
  resolve: (e, { name: t }, n, { schema: r }) => r.getType(t),
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, vr = {
  name: "__typename",
  type: new de(Pe),
  description: "The name of the current Object type at runtime.",
  args: [],
  resolve: (e, t, n, { parentType: r }) => r.name,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, kr = Object.freeze([
  Hi,
  _s,
  ws,
  ht,
  Ns,
  Lr,
  Ss,
  Is
]);
function vn(e) {
  return kr.some(({ name: t }) => e.name === t);
}
function Cc(e) {
  return Ot(e, $n);
}
function Os(e) {
  if (!Cc(e))
    throw new Error(`Expected ${U(e)} to be a GraphQL schema.`);
  return e;
}
class $n {
  constructor(t) {
    var n, r;
    this.__validationErrors = t.assumeValid === !0 ? [] : void 0, st(t) || pe(!1, "Must provide configuration object."), !t.types || Array.isArray(t.types) || pe(!1, `"types" must be Array if provided but got: ${U(t.types)}.`), !t.directives || Array.isArray(t.directives) || pe(!1, `"directives" must be Array if provided but got: ${U(t.directives)}.`), this.description = t.description, this.extensions = gt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._queryType = t.query, this._mutationType = t.mutation, this._subscriptionType = t.subscription, this._directives = (r = t.directives) !== null && r !== void 0 ? r : rn;
    const i = new Set(t.types);
    if (t.types != null)
      for (const o of t.types)
        i.delete(o), Nt(o, i);
    this._queryType != null && Nt(this._queryType, i), this._mutationType != null && Nt(this._mutationType, i), this._subscriptionType != null && Nt(this._subscriptionType, i);
    for (const o of this._directives)
      if (qi(o))
        for (const s of o.args)
          Nt(s.type, i);
    Nt(Hi, i), this._typeMap = /* @__PURE__ */ Object.create(null), this._subTypeMap = /* @__PURE__ */ Object.create(null), this._implementationsMap = /* @__PURE__ */ Object.create(null);
    for (const o of i) {
      if (o == null)
        continue;
      const s = o.name;
      if (s || pe(!1, "One of the provided types for building the Schema is missing a name."), this._typeMap[s] !== void 0)
        throw new Error(`Schema must contain uniquely named types but contains multiple types named "${s}".`);
      if (this._typeMap[s] = o, Te(o)) {
        for (const a of o.getInterfaces())
          if (Te(a)) {
            let u = this._implementationsMap[a.name];
            u === void 0 && (u = this._implementationsMap[a.name] = {
              objects: [],
              interfaces: []
            }), u.interfaces.push(o);
          }
      } else if (ge(o)) {
        for (const a of o.getInterfaces())
          if (Te(a)) {
            let u = this._implementationsMap[a.name];
            u === void 0 && (u = this._implementationsMap[a.name] = {
              objects: [],
              interfaces: []
            }), u.objects.push(o);
          }
      }
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLSchema";
  }
  getQueryType() {
    return this._queryType;
  }
  getMutationType() {
    return this._mutationType;
  }
  getSubscriptionType() {
    return this._subscriptionType;
  }
  getRootType(t) {
    switch (t) {
      case qe.QUERY:
        return this.getQueryType();
      case qe.MUTATION:
        return this.getMutationType();
      case qe.SUBSCRIPTION:
        return this.getSubscriptionType();
    }
  }
  getTypeMap() {
    return this._typeMap;
  }
  getType(t) {
    return this.getTypeMap()[t];
  }
  getPossibleTypes(t) {
    return Ge(t) ? t.getTypes() : this.getImplementations(t).objects;
  }
  getImplementations(t) {
    const n = this._implementationsMap[t.name];
    return n != null ? n : {
      objects: [],
      interfaces: []
    };
  }
  isSubType(t, n) {
    let r = this._subTypeMap[t.name];
    if (r === void 0) {
      if (r = /* @__PURE__ */ Object.create(null), Ge(t))
        for (const i of t.getTypes())
          r[i.name] = !0;
      else {
        const i = this.getImplementations(t);
        for (const o of i.objects)
          r[o.name] = !0;
        for (const o of i.interfaces)
          r[o.name] = !0;
      }
      this._subTypeMap[t.name] = r;
    }
    return r[n.name] !== void 0;
  }
  getDirectives() {
    return this._directives;
  }
  getDirective(t) {
    return this.getDirectives().find((n) => n.name === t);
  }
  toConfig() {
    return {
      description: this.description,
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      types: Object.values(this.getTypeMap()),
      directives: this.getDirectives(),
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes,
      assumeValid: this.__validationErrors !== void 0
    };
  }
}
function Nt(e, t) {
  const n = Je(e);
  if (!t.has(n)) {
    if (t.add(n), Ge(n))
      for (const r of n.getTypes())
        Nt(r, t);
    else if (ge(n) || Te(n)) {
      for (const r of n.getInterfaces())
        Nt(r, t);
      for (const r of Object.values(n.getFields())) {
        Nt(r.type, t);
        for (const i of r.args)
          Nt(i.type, t);
      }
    } else if (Le(n))
      for (const r of Object.values(n.getFields()))
        Nt(r.type, t);
  }
  return t;
}
function As(e) {
  if (Os(e), e.__validationErrors)
    return e.__validationErrors;
  const t = new Sh(e);
  Ih(t), Oh(t), Ah(t);
  const n = t.getErrors();
  return e.__validationErrors = n, n;
}
function Rs(e) {
  const t = As(e);
  if (t.length !== 0)
    throw new Error(t.map((n) => n.message).join(`

`));
}
class Sh {
  constructor(t) {
    this._errors = [], this.schema = t;
  }
  reportError(t, n) {
    const r = Array.isArray(n) ? n.filter(Boolean) : n;
    this._errors.push(new F(t, {
      nodes: r
    }));
  }
  getErrors() {
    return this._errors;
  }
}
function Ih(e) {
  const t = e.schema, n = t.getQueryType();
  if (!n)
    e.reportError("Query root type must be provided.", t.astNode);
  else if (!ge(n)) {
    var r;
    e.reportError(`Query root type must be Object type, it cannot be ${U(n)}.`, (r = Do(t, qe.QUERY)) !== null && r !== void 0 ? r : n.astNode);
  }
  const i = t.getMutationType();
  if (i && !ge(i)) {
    var o;
    e.reportError(`Mutation root type must be Object type if provided, it cannot be ${U(i)}.`, (o = Do(t, qe.MUTATION)) !== null && o !== void 0 ? o : i.astNode);
  }
  const s = t.getSubscriptionType();
  if (s && !ge(s)) {
    var a;
    e.reportError(`Subscription root type must be Object type if provided, it cannot be ${U(s)}.`, (a = Do(t, qe.SUBSCRIPTION)) !== null && a !== void 0 ? a : s.astNode);
  }
}
function Do(e, t) {
  var n;
  return (n = [e.astNode, ...e.extensionASTNodes].flatMap((r) => {
    var i;
    return (i = r == null ? void 0 : r.operationTypes) !== null && i !== void 0 ? i : [];
  }).find((r) => r.operation === t)) === null || n === void 0 ? void 0 : n.type;
}
function Oh(e) {
  for (const n of e.schema.getDirectives()) {
    if (!qi(n)) {
      e.reportError(`Expected directive but got: ${U(n)}.`, n == null ? void 0 : n.astNode);
      continue;
    }
    dn(e, n);
    for (const r of n.args)
      if (dn(e, r), et(r.type) || e.reportError(`The type of @${n.name}(${r.name}:) must be Input Type but got: ${U(r.type)}.`, r.astNode), nn(r) && r.deprecationReason != null) {
        var t;
        e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [
          Ds(r.astNode),
          (t = r.astNode) === null || t === void 0 ? void 0 : t.type
        ]);
      }
  }
}
function dn(e, t) {
  t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode);
}
function Ah(e) {
  const t = Ph(e), n = e.schema.getTypeMap();
  for (const r of Object.values(n)) {
    if (!Rr(r)) {
      e.reportError(`Expected GraphQL named type but got: ${U(r)}.`, r.astNode);
      continue;
    }
    vn(r) || dn(e, r), ge(r) || Te(r) ? (Wa(e, r), Qa(e, r)) : Ge(r) ? Ch(e, r) : Ue(r) ? Lh(e, r) : Le(r) && (kh(e, r), t(r));
  }
}
function Wa(e, t) {
  const n = Object.values(t.getFields());
  n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [
    t.astNode,
    ...t.extensionASTNodes
  ]);
  for (const s of n) {
    if (dn(e, s), !Kt(s.type)) {
      var r;
      e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${U(s.type)}.`, (r = s.astNode) === null || r === void 0 ? void 0 : r.type);
    }
    for (const a of s.args) {
      const u = a.name;
      if (dn(e, a), !et(a.type)) {
        var i;
        e.reportError(`The type of ${t.name}.${s.name}(${u}:) must be Input Type but got: ${U(a.type)}.`, (i = a.astNode) === null || i === void 0 ? void 0 : i.type);
      }
      if (nn(a) && a.deprecationReason != null) {
        var o;
        e.reportError(`Required argument ${t.name}.${s.name}(${u}:) cannot be deprecated.`, [
          Ds(a.astNode),
          (o = a.astNode) === null || o === void 0 ? void 0 : o.type
        ]);
      }
    }
  }
}
function Qa(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of t.getInterfaces()) {
    if (!Te(r)) {
      e.reportError(`Type ${U(t)} must only implement Interface types, it cannot implement ${U(r)}.`, cr(t, r));
      continue;
    }
    if (t === r) {
      e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, cr(t, r));
      continue;
    }
    if (n[r.name]) {
      e.reportError(`Type ${t.name} can only implement ${r.name} once.`, cr(t, r));
      continue;
    }
    n[r.name] = !0, Dh(e, t, r), Rh(e, t, r);
  }
}
function Rh(e, t, n) {
  const r = t.getFields();
  for (const u of Object.values(n.getFields())) {
    const c = u.name, l = r[c];
    if (!l) {
      e.reportError(`Interface field ${n.name}.${c} expected but ${t.name} does not provide it.`, [u.astNode, t.astNode, ...t.extensionASTNodes]);
      continue;
    }
    if (!an(e.schema, l.type, u.type)) {
      var i, o;
      e.reportError(`Interface field ${n.name}.${c} expects type ${U(u.type)} but ${t.name}.${c} is type ${U(l.type)}.`, [
        (i = u.astNode) === null || i === void 0 ? void 0 : i.type,
        (o = l.astNode) === null || o === void 0 ? void 0 : o.type
      ]);
    }
    for (const f of u.args) {
      const d = f.name, p = l.args.find((E) => E.name === d);
      if (!p) {
        e.reportError(`Interface field argument ${n.name}.${c}(${d}:) expected but ${t.name}.${c} does not provide it.`, [f.astNode, l.astNode]);
        continue;
      }
      if (!ui(f.type, p.type)) {
        var s, a;
        e.reportError(`Interface field argument ${n.name}.${c}(${d}:) expects type ${U(f.type)} but ${t.name}.${c}(${d}:) is type ${U(p.type)}.`, [
          (s = f.astNode) === null || s === void 0 ? void 0 : s.type,
          (a = p.astNode) === null || a === void 0 ? void 0 : a.type
        ]);
      }
    }
    for (const f of l.args) {
      const d = f.name;
      !u.args.find((E) => E.name === d) && nn(f) && e.reportError(`Object field ${t.name}.${c} includes required argument ${d} that is missing from the Interface field ${n.name}.${c}.`, [f.astNode, u.astNode]);
    }
  }
}
function Dh(e, t, n) {
  const r = t.getInterfaces();
  for (const i of n.getInterfaces())
    r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [
      ...cr(n, i),
      ...cr(t, n)
    ]);
}
function Ch(e, t) {
  const n = t.getTypes();
  n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of n) {
    if (r[i.name]) {
      e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, za(t, i.name));
      continue;
    }
    r[i.name] = !0, ge(i) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${U(i)}.`, za(t, String(i)));
  }
}
function Lh(e, t) {
  const n = t.getValues();
  n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
  for (const r of n)
    dn(e, r);
}
function kh(e, t) {
  const n = Object.values(t.getFields());
  n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
  for (const o of n) {
    if (dn(e, o), !et(o.type)) {
      var r;
      e.reportError(`The type of ${t.name}.${o.name} must be Input Type but got: ${U(o.type)}.`, (r = o.astNode) === null || r === void 0 ? void 0 : r.type);
    }
    if (Vi(o) && o.deprecationReason != null) {
      var i;
      e.reportError(`Required input field ${t.name}.${o.name} cannot be deprecated.`, [
        Ds(o.astNode),
        (i = o.astNode) === null || i === void 0 ? void 0 : i.type
      ]);
    }
  }
}
function Ph(e) {
  const t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
  return i;
  function i(o) {
    if (t[o.name])
      return;
    t[o.name] = !0, r[o.name] = n.length;
    const s = Object.values(o.getFields());
    for (const a of s)
      if (fe(a.type) && Le(a.type.ofType)) {
        const u = a.type.ofType, c = r[u.name];
        if (n.push(a), c === void 0)
          i(u);
        else {
          const l = n.slice(c), f = l.map((d) => d.name).join(".");
          e.reportError(`Cannot reference Input Object "${u.name}" within itself through a series of non-null fields: "${f}".`, l.map((d) => d.astNode));
        }
        n.pop();
      }
    r[o.name] = void 0;
  }
}
function cr(e, t) {
  const { astNode: n, extensionASTNodes: r } = e;
  return (n != null ? [n, ...r] : r).flatMap((o) => {
    var s;
    return (s = o.interfaces) !== null && s !== void 0 ? s : [];
  }).filter((o) => o.name.value === t.name);
}
function za(e, t) {
  const { astNode: n, extensionASTNodes: r } = e;
  return (n != null ? [n, ...r] : r).flatMap((o) => {
    var s;
    return (s = o.types) !== null && s !== void 0 ? s : [];
  }).filter((o) => o.name.value === t);
}
function Ds(e) {
  var t;
  return e == null || (t = e.directives) === null || t === void 0 ? void 0 : t.find((n) => n.name.value === Gi.name);
}
function tt(e, t) {
  switch (t.kind) {
    case T.LIST_TYPE: {
      const n = tt(e, t.type);
      return n && new Qe(n);
    }
    case T.NON_NULL_TYPE: {
      const n = tt(e, t.type);
      return n && new de(n);
    }
    case T.NAMED_TYPE:
      return e.getType(t.name.value);
  }
}
class Cs {
  constructor(t, n, r) {
    this._schema = t, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = r != null ? r : xh, n && (et(n) && this._inputTypeStack.push(n), Lt(n) && this._parentTypeStack.push(n), Kt(n) && this._typeStack.push(n));
  }
  get [Symbol.toStringTag]() {
    return "TypeInfo";
  }
  getType() {
    if (this._typeStack.length > 0)
      return this._typeStack[this._typeStack.length - 1];
  }
  getParentType() {
    if (this._parentTypeStack.length > 0)
      return this._parentTypeStack[this._parentTypeStack.length - 1];
  }
  getInputType() {
    if (this._inputTypeStack.length > 0)
      return this._inputTypeStack[this._inputTypeStack.length - 1];
  }
  getParentInputType() {
    if (this._inputTypeStack.length > 1)
      return this._inputTypeStack[this._inputTypeStack.length - 2];
  }
  getFieldDef() {
    if (this._fieldDefStack.length > 0)
      return this._fieldDefStack[this._fieldDefStack.length - 1];
  }
  getDefaultValue() {
    if (this._defaultValueStack.length > 0)
      return this._defaultValueStack[this._defaultValueStack.length - 1];
  }
  getDirective() {
    return this._directive;
  }
  getArgument() {
    return this._argument;
  }
  getEnumValue() {
    return this._enumValue;
  }
  enter(t) {
    const n = this._schema;
    switch (t.kind) {
      case T.SELECTION_SET: {
        const i = Je(this.getType());
        this._parentTypeStack.push(Lt(i) ? i : void 0);
        break;
      }
      case T.FIELD: {
        const i = this.getParentType();
        let o, s;
        i && (o = this._getFieldDef(n, i, t), o && (s = o.type)), this._fieldDefStack.push(o), this._typeStack.push(Kt(s) ? s : void 0);
        break;
      }
      case T.DIRECTIVE:
        this._directive = n.getDirective(t.name.value);
        break;
      case T.OPERATION_DEFINITION: {
        const i = n.getRootType(t.operation);
        this._typeStack.push(ge(i) ? i : void 0);
        break;
      }
      case T.INLINE_FRAGMENT:
      case T.FRAGMENT_DEFINITION: {
        const i = t.typeCondition, o = i ? tt(n, i) : Je(this.getType());
        this._typeStack.push(Kt(o) ? o : void 0);
        break;
      }
      case T.VARIABLE_DEFINITION: {
        const i = tt(n, t.type);
        this._inputTypeStack.push(et(i) ? i : void 0);
        break;
      }
      case T.ARGUMENT: {
        var r;
        let i, o;
        const s = (r = this.getDirective()) !== null && r !== void 0 ? r : this.getFieldDef();
        s && (i = s.args.find((a) => a.name === t.name.value), i && (o = i.type)), this._argument = i, this._defaultValueStack.push(i ? i.defaultValue : void 0), this._inputTypeStack.push(et(o) ? o : void 0);
        break;
      }
      case T.LIST: {
        const i = ds(this.getInputType()), o = Ce(i) ? i.ofType : i;
        this._defaultValueStack.push(void 0), this._inputTypeStack.push(et(o) ? o : void 0);
        break;
      }
      case T.OBJECT_FIELD: {
        const i = Je(this.getInputType());
        let o, s;
        Le(i) && (s = i.getFields()[t.name.value], s && (o = s.type)), this._defaultValueStack.push(s ? s.defaultValue : void 0), this._inputTypeStack.push(et(o) ? o : void 0);
        break;
      }
      case T.ENUM: {
        const i = Je(this.getInputType());
        let o;
        Ue(i) && (o = i.getValue(t.value)), this._enumValue = o;
        break;
      }
    }
  }
  leave(t) {
    switch (t.kind) {
      case T.SELECTION_SET:
        this._parentTypeStack.pop();
        break;
      case T.FIELD:
        this._fieldDefStack.pop(), this._typeStack.pop();
        break;
      case T.DIRECTIVE:
        this._directive = null;
        break;
      case T.OPERATION_DEFINITION:
      case T.INLINE_FRAGMENT:
      case T.FRAGMENT_DEFINITION:
        this._typeStack.pop();
        break;
      case T.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();
        break;
      case T.ARGUMENT:
        this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
        break;
      case T.LIST:
      case T.OBJECT_FIELD:
        this._defaultValueStack.pop(), this._inputTypeStack.pop();
        break;
      case T.ENUM:
        this._enumValue = null;
        break;
    }
  }
}
function xh(e, t, n) {
  const r = n.name.value;
  if (r === hr.name && e.getQueryType() === t)
    return hr;
  if (r === mr.name && e.getQueryType() === t)
    return mr;
  if (r === vr.name && Lt(t))
    return vr;
  if (ge(t) || Te(t))
    return t.getFields()[r];
}
function Ls(e, t) {
  return {
    enter(...n) {
      const r = n[0];
      e.enter(r);
      const i = On(t, r.kind).enter;
      if (i) {
        const o = i.apply(t, n);
        return o !== void 0 && (e.leave(r), Uo(o) && e.enter(o)), o;
      }
    },
    leave(...n) {
      const r = n[0], i = On(t, r.kind).leave;
      let o;
      return i && (o = i.apply(t, n)), e.leave(r), o;
    }
  };
}
function Fh(e) {
  return ks(e) || Ps(e) || xs(e);
}
function ks(e) {
  return e.kind === T.OPERATION_DEFINITION || e.kind === T.FRAGMENT_DEFINITION;
}
function jh(e) {
  return e.kind === T.FIELD || e.kind === T.FRAGMENT_SPREAD || e.kind === T.INLINE_FRAGMENT;
}
function Lc(e) {
  return e.kind === T.VARIABLE || e.kind === T.INT || e.kind === T.FLOAT || e.kind === T.STRING || e.kind === T.BOOLEAN || e.kind === T.NULL || e.kind === T.ENUM || e.kind === T.LIST || e.kind === T.OBJECT;
}
function Go(e) {
  return Lc(e) && (e.kind === T.LIST ? e.values.some(Go) : e.kind === T.OBJECT ? e.fields.some((t) => Go(t.value)) : e.kind !== T.VARIABLE);
}
function Mh(e) {
  return e.kind === T.NAMED_TYPE || e.kind === T.LIST_TYPE || e.kind === T.NON_NULL_TYPE;
}
function Ps(e) {
  return e.kind === T.SCHEMA_DEFINITION || Un(e) || e.kind === T.DIRECTIVE_DEFINITION;
}
function Un(e) {
  return e.kind === T.SCALAR_TYPE_DEFINITION || e.kind === T.OBJECT_TYPE_DEFINITION || e.kind === T.INTERFACE_TYPE_DEFINITION || e.kind === T.UNION_TYPE_DEFINITION || e.kind === T.ENUM_TYPE_DEFINITION || e.kind === T.INPUT_OBJECT_TYPE_DEFINITION;
}
function xs(e) {
  return e.kind === T.SCHEMA_EXTENSION || Yi(e);
}
function Yi(e) {
  return e.kind === T.SCALAR_TYPE_EXTENSION || e.kind === T.OBJECT_TYPE_EXTENSION || e.kind === T.INTERFACE_TYPE_EXTENSION || e.kind === T.UNION_TYPE_EXTENSION || e.kind === T.ENUM_TYPE_EXTENSION || e.kind === T.INPUT_OBJECT_TYPE_EXTENSION;
}
function kc(e) {
  return {
    Document(t) {
      for (const n of t.definitions)
        if (!ks(n)) {
          const r = n.kind === T.SCHEMA_DEFINITION || n.kind === T.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
          e.reportError(new F(`The ${r} definition is not executable.`, {
            nodes: n
          }));
        }
      return !1;
    }
  };
}
function Pc(e) {
  return {
    Field(t) {
      const n = e.getParentType();
      if (n && !e.getFieldDef()) {
        const i = e.getSchema(), o = t.name.value;
        let s = qt("to use an inline fragment on", $h(i, n, o));
        s === "" && (s = qt(Uh(n, o))), e.reportError(new F(`Cannot query field "${o}" on type "${n.name}".` + s, {
          nodes: t
        }));
      }
    }
  };
}
function $h(e, t, n) {
  if (!Dt(t))
    return [];
  const r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ Object.create(null);
  for (const s of e.getPossibleTypes(t))
    if (!!s.getFields()[n]) {
      r.add(s), i[s.name] = 1;
      for (const a of s.getInterfaces()) {
        var o;
        !a.getFields()[n] || (r.add(a), i[a.name] = ((o = i[a.name]) !== null && o !== void 0 ? o : 0) + 1);
      }
    }
  return [...r].sort((s, a) => {
    const u = i[a.name] - i[s.name];
    return u !== 0 ? u : Te(s) && e.isSubType(s, a) ? -1 : Te(a) && e.isSubType(a, s) ? 1 : Ir(s.name, a.name);
  }).map((s) => s.name);
}
function Uh(e, t) {
  if (ge(e) || Te(e)) {
    const n = Object.keys(e.getFields());
    return tn(t, n);
  }
  return [];
}
function xc(e) {
  return {
    InlineFragment(t) {
      const n = t.typeCondition;
      if (n) {
        const r = tt(e.getSchema(), n);
        if (r && !Lt(r)) {
          const i = De(n);
          e.reportError(new F(`Fragment cannot condition on non composite type "${i}".`, {
            nodes: n
          }));
        }
      }
    },
    FragmentDefinition(t) {
      const n = tt(e.getSchema(), t.typeCondition);
      if (n && !Lt(n)) {
        const r = De(t.typeCondition);
        e.reportError(new F(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`, {
          nodes: t.typeCondition
        }));
      }
    }
  };
}
function Fc(e) {
  return {
    ...jc(e),
    Argument(t) {
      const n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
      if (!n && r && i) {
        const o = t.name.value, s = r.args.map((u) => u.name), a = tn(o, s);
        e.reportError(new F(`Unknown argument "${o}" on field "${i.name}.${r.name}".` + qt(a), {
          nodes: t
        }));
      }
    }
  };
}
function jc(e) {
  const t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : rn;
  for (const s of r)
    t[s.name] = s.args.map((a) => a.name);
  const i = e.getDocument().definitions;
  for (const s of i)
    if (s.kind === T.DIRECTIVE_DEFINITION) {
      var o;
      const a = (o = s.arguments) !== null && o !== void 0 ? o : [];
      t[s.name.value] = a.map((u) => u.name.value);
    }
  return {
    Directive(s) {
      const a = s.name.value, u = t[a];
      if (s.arguments && u)
        for (const c of s.arguments) {
          const l = c.name.value;
          if (!u.includes(l)) {
            const f = tn(l, u);
            e.reportError(new F(`Unknown argument "${l}" on directive "@${a}".` + qt(f), {
              nodes: c
            }));
          }
        }
      return !1;
    }
  };
}
function Fs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : rn;
  for (const o of r)
    t[o.name] = o.locations;
  const i = e.getDocument().definitions;
  for (const o of i)
    o.kind === T.DIRECTIVE_DEFINITION && (t[o.name.value] = o.locations.map((s) => s.value));
  return {
    Directive(o, s, a, u, c) {
      const l = o.name.value, f = t[l];
      if (!f) {
        e.reportError(new F(`Unknown directive "@${l}".`, {
          nodes: o
        }));
        return;
      }
      const d = Vh(c);
      d && !f.includes(d) && e.reportError(new F(`Directive "@${l}" may not be used on ${d}.`, {
        nodes: o
      }));
    }
  };
}
function Vh(e) {
  const t = e[e.length - 1];
  switch ("kind" in t || Fe(!1), t.kind) {
    case T.OPERATION_DEFINITION:
      return Bh(t.operation);
    case T.FIELD:
      return ae.FIELD;
    case T.FRAGMENT_SPREAD:
      return ae.FRAGMENT_SPREAD;
    case T.INLINE_FRAGMENT:
      return ae.INLINE_FRAGMENT;
    case T.FRAGMENT_DEFINITION:
      return ae.FRAGMENT_DEFINITION;
    case T.VARIABLE_DEFINITION:
      return ae.VARIABLE_DEFINITION;
    case T.SCHEMA_DEFINITION:
    case T.SCHEMA_EXTENSION:
      return ae.SCHEMA;
    case T.SCALAR_TYPE_DEFINITION:
    case T.SCALAR_TYPE_EXTENSION:
      return ae.SCALAR;
    case T.OBJECT_TYPE_DEFINITION:
    case T.OBJECT_TYPE_EXTENSION:
      return ae.OBJECT;
    case T.FIELD_DEFINITION:
      return ae.FIELD_DEFINITION;
    case T.INTERFACE_TYPE_DEFINITION:
    case T.INTERFACE_TYPE_EXTENSION:
      return ae.INTERFACE;
    case T.UNION_TYPE_DEFINITION:
    case T.UNION_TYPE_EXTENSION:
      return ae.UNION;
    case T.ENUM_TYPE_DEFINITION:
    case T.ENUM_TYPE_EXTENSION:
      return ae.ENUM;
    case T.ENUM_VALUE_DEFINITION:
      return ae.ENUM_VALUE;
    case T.INPUT_OBJECT_TYPE_DEFINITION:
    case T.INPUT_OBJECT_TYPE_EXTENSION:
      return ae.INPUT_OBJECT;
    case T.INPUT_VALUE_DEFINITION: {
      const n = e[e.length - 3];
      return "kind" in n || Fe(!1), n.kind === T.INPUT_OBJECT_TYPE_DEFINITION ? ae.INPUT_FIELD_DEFINITION : ae.ARGUMENT_DEFINITION;
    }
    default:
      Fe(!1, "Unexpected kind: " + U(t.kind));
  }
}
function Bh(e) {
  switch (e) {
    case qe.QUERY:
      return ae.QUERY;
    case qe.MUTATION:
      return ae.MUTATION;
    case qe.SUBSCRIPTION:
      return ae.SUBSCRIPTION;
  }
}
function Mc(e) {
  return {
    FragmentSpread(t) {
      const n = t.name.value;
      e.getFragment(n) || e.reportError(new F(`Unknown fragment "${n}".`, {
        nodes: t.name
      }));
    }
  };
}
function js(e) {
  const t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  for (const o of e.getDocument().definitions)
    Un(o) && (r[o.name.value] = !0);
  const i = [
    ...Object.keys(n),
    ...Object.keys(r)
  ];
  return {
    NamedType(o, s, a, u, c) {
      const l = o.name.value;
      if (!n[l] && !r[l]) {
        var f;
        const d = (f = c[2]) !== null && f !== void 0 ? f : a, p = d != null && qh(d);
        if (p && Xa.includes(l))
          return;
        const E = tn(l, p ? Xa.concat(i) : i);
        e.reportError(new F(`Unknown type "${l}".` + qt(E), {
          nodes: o
        }));
      }
    }
  };
}
const Xa = [...Dr, ...kr].map((e) => e.name);
function qh(e) {
  return "kind" in e && (Ps(e) || xs(e));
}
function $c(e) {
  let t = 0;
  return {
    Document(n) {
      t = n.definitions.filter((r) => r.kind === T.OPERATION_DEFINITION).length;
    },
    OperationDefinition(n) {
      !n.name && t > 1 && e.reportError(new F("This anonymous operation must be the only defined operation.", {
        nodes: n
      }));
    }
  };
}
function Uc(e) {
  var t, n, r;
  const i = e.getSchema(), o = (t = (n = (r = i == null ? void 0 : i.astNode) !== null && r !== void 0 ? r : i == null ? void 0 : i.getQueryType()) !== null && n !== void 0 ? n : i == null ? void 0 : i.getMutationType()) !== null && t !== void 0 ? t : i == null ? void 0 : i.getSubscriptionType();
  let s = 0;
  return {
    SchemaDefinition(a) {
      if (o) {
        e.reportError(new F("Cannot define a new schema within a schema extension.", {
          nodes: a
        }));
        return;
      }
      s > 0 && e.reportError(new F("Must provide only one schema definition.", {
        nodes: a
      })), ++s;
    }
  };
}
function Vc(e) {
  const t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: () => !1,
    FragmentDefinition(o) {
      return i(o), !1;
    }
  };
  function i(o) {
    if (t[o.name.value])
      return;
    const s = o.name.value;
    t[s] = !0;
    const a = e.getFragmentSpreads(o.selectionSet);
    if (a.length !== 0) {
      r[s] = n.length;
      for (const u of a) {
        const c = u.name.value, l = r[c];
        if (n.push(u), l === void 0) {
          const f = e.getFragment(c);
          f && i(f);
        } else {
          const f = n.slice(l), d = f.slice(0, -1).map((p) => '"' + p.name.value + '"').join(", ");
          e.reportError(new F(`Cannot spread fragment "${c}" within itself` + (d !== "" ? ` via ${d}.` : "."), {
            nodes: f
          }));
        }
        n.pop();
      }
      r[s] = void 0;
    }
  }
}
function Bc(e) {
  let t = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        t = /* @__PURE__ */ Object.create(null);
      },
      leave(n) {
        const r = e.getRecursiveVariableUsages(n);
        for (const { node: i } of r) {
          const o = i.name.value;
          t[o] !== !0 && e.reportError(new F(n.name ? `Variable "$${o}" is not defined by operation "${n.name.value}".` : `Variable "$${o}" is not defined.`, {
            nodes: [i, n]
          }));
        }
      }
    },
    VariableDefinition(n) {
      t[n.variable.name.value] = !0;
    }
  };
}
function qc(e) {
  const t = [], n = [];
  return {
    OperationDefinition(r) {
      return t.push(r), !1;
    },
    FragmentDefinition(r) {
      return n.push(r), !1;
    },
    Document: {
      leave() {
        const r = /* @__PURE__ */ Object.create(null);
        for (const i of t)
          for (const o of e.getRecursivelyReferencedFragments(i))
            r[o.name.value] = !0;
        for (const i of n) {
          const o = i.name.value;
          r[o] !== !0 && e.reportError(new F(`Fragment "${o}" is never used.`, {
            nodes: i
          }));
        }
      }
    }
  };
}
function Gc(e) {
  let t = [];
  return {
    OperationDefinition: {
      enter() {
        t = [];
      },
      leave(n) {
        const r = /* @__PURE__ */ Object.create(null), i = e.getRecursiveVariableUsages(n);
        for (const { node: o } of i)
          r[o.name.value] = !0;
        for (const o of t) {
          const s = o.variable.name.value;
          r[s] !== !0 && e.reportError(new F(n.name ? `Variable "$${s}" is never used in operation "${n.name.value}".` : `Variable "$${s}" is never used.`, {
            nodes: o
          }));
        }
      }
    },
    VariableDefinition(n) {
      t.push(n);
    }
  };
}
function Wi(e) {
  switch (e.kind) {
    case T.OBJECT:
      return { ...e, fields: Gh(e.fields) };
    case T.LIST:
      return { ...e, values: e.values.map(Wi) };
    case T.INT:
    case T.FLOAT:
    case T.STRING:
    case T.BOOLEAN:
    case T.NULL:
    case T.ENUM:
    case T.VARIABLE:
      return e;
  }
}
function Gh(e) {
  return e.map((t) => ({
    ...t,
    value: Wi(t.value)
  })).sort((t, n) => Ir(t.name.value, n.name.value));
}
function Hc(e) {
  return Array.isArray(e) ? e.map(([t, n]) => `subfields "${t}" conflict because ` + Hc(n)).join(" and ") : e;
}
function Yc(e) {
  const t = new zh(), n = /* @__PURE__ */ new Map();
  return {
    SelectionSet(r) {
      const i = Hh(e, n, t, e.getParentType(), r);
      for (const [[o, s], a, u] of i) {
        const c = Hc(s);
        e.reportError(new F(`Fields "${o}" conflict because ${c}. Use different aliases on the fields to fetch both if this was intentional.`, {
          nodes: a.concat(u)
        }));
      }
    }
  };
}
function Hh(e, t, n, r, i) {
  const o = [], [s, a] = fi(e, t, r, i);
  if (Wh(e, o, t, n, s), a.length !== 0)
    for (let u = 0; u < a.length; u++) {
      ci(e, o, t, n, !1, s, a[u]);
      for (let c = u + 1; c < a.length; c++)
        li(e, o, t, n, !1, a[u], a[c]);
    }
  return o;
}
function ci(e, t, n, r, i, o, s) {
  const a = e.getFragment(s);
  if (!a)
    return;
  const [u, c] = Yo(e, n, a);
  if (o !== u) {
    Ms(e, t, n, r, i, o, u);
    for (const l of c)
      r.has(l, s, i) || (r.add(l, s, i), ci(e, t, n, r, i, o, l));
  }
}
function li(e, t, n, r, i, o, s) {
  if (o === s || r.has(o, s, i))
    return;
  r.add(o, s, i);
  const a = e.getFragment(o), u = e.getFragment(s);
  if (!a || !u)
    return;
  const [c, l] = Yo(e, n, a), [f, d] = Yo(e, n, u);
  Ms(e, t, n, r, i, c, f);
  for (const p of d)
    li(e, t, n, r, i, o, p);
  for (const p of l)
    li(e, t, n, r, i, p, s);
}
function Yh(e, t, n, r, i, o, s, a) {
  const u = [], [c, l] = fi(e, t, i, o), [f, d] = fi(e, t, s, a);
  Ms(e, u, t, n, r, c, f);
  for (const p of d)
    ci(e, u, t, n, r, c, p);
  for (const p of l)
    ci(e, u, t, n, r, f, p);
  for (const p of l)
    for (const E of d)
      li(e, u, t, n, r, p, E);
  return u;
}
function Wh(e, t, n, r, i) {
  for (const [o, s] of Object.entries(i))
    if (s.length > 1)
      for (let a = 0; a < s.length; a++)
        for (let u = a + 1; u < s.length; u++) {
          const c = Wc(e, n, r, !1, o, s[a], s[u]);
          c && t.push(c);
        }
}
function Ms(e, t, n, r, i, o, s) {
  for (const [a, u] of Object.entries(o)) {
    const c = s[a];
    if (c)
      for (const l of u)
        for (const f of c) {
          const d = Wc(e, n, r, i, a, l, f);
          d && t.push(d);
        }
  }
}
function Wc(e, t, n, r, i, o, s) {
  const [a, u, c] = o, [l, f, d] = s, p = r || a !== l && ge(a) && ge(l);
  if (!p) {
    const D = u.name.value, L = f.name.value;
    if (D !== L)
      return [
        [i, `"${D}" and "${L}" are different fields`],
        [u],
        [f]
      ];
    if (Ja(u) !== Ja(f))
      return [
        [i, "they have differing arguments"],
        [u],
        [f]
      ];
  }
  const E = c == null ? void 0 : c.type, y = d == null ? void 0 : d.type;
  if (E && y && Ho(E, y))
    return [
      [
        i,
        `they return conflicting types "${U(E)}" and "${U(y)}"`
      ],
      [u],
      [f]
    ];
  const g = u.selectionSet, S = f.selectionSet;
  if (g && S) {
    const D = Yh(e, t, n, p, Je(E), g, Je(y), S);
    return Qh(D, i, u, f);
  }
}
function Ja(e) {
  var t;
  const n = (t = e.arguments) !== null && t !== void 0 ? t : [], r = {
    kind: T.OBJECT,
    fields: n.map((i) => ({
      kind: T.OBJECT_FIELD,
      name: i.name,
      value: i.value
    }))
  };
  return De(Wi(r));
}
function Ho(e, t) {
  return Ce(e) ? Ce(t) ? Ho(e.ofType, t.ofType) : !0 : Ce(t) ? !0 : fe(e) ? fe(t) ? Ho(e.ofType, t.ofType) : !0 : fe(t) ? !0 : Ct(e) || Ct(t) ? e !== t : !1;
}
function fi(e, t, n, r) {
  const i = t.get(r);
  if (i)
    return i;
  const o = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  Qc(e, n, r, o, s);
  const a = [o, Object.keys(s)];
  return t.set(r, a), a;
}
function Yo(e, t, n) {
  const r = t.get(n.selectionSet);
  if (r)
    return r;
  const i = tt(e.getSchema(), n.typeCondition);
  return fi(e, t, i, n.selectionSet);
}
function Qc(e, t, n, r, i) {
  for (const o of n.selections)
    switch (o.kind) {
      case T.FIELD: {
        const s = o.name.value;
        let a;
        (ge(t) || Te(t)) && (a = t.getFields()[s]);
        const u = o.alias ? o.alias.value : s;
        r[u] || (r[u] = []), r[u].push([t, o, a]);
        break;
      }
      case T.FRAGMENT_SPREAD:
        i[o.name.value] = !0;
        break;
      case T.INLINE_FRAGMENT: {
        const s = o.typeCondition, a = s ? tt(e.getSchema(), s) : t;
        Qc(e, a, o.selectionSet, r, i);
        break;
      }
    }
}
function Qh(e, t, n, r) {
  if (e.length > 0)
    return [
      [t, e.map(([i]) => i)],
      [n, ...e.map(([, i]) => i).flat()],
      [r, ...e.map(([, , i]) => i).flat()]
    ];
}
class zh {
  constructor() {
    this._data = /* @__PURE__ */ new Map();
  }
  has(t, n, r) {
    var i;
    const [o, s] = t < n ? [t, n] : [n, t], a = (i = this._data.get(o)) === null || i === void 0 ? void 0 : i.get(s);
    return a === void 0 ? !1 : r ? !0 : r === a;
  }
  add(t, n, r) {
    const [i, o] = t < n ? [t, n] : [n, t], s = this._data.get(i);
    s === void 0 ? this._data.set(i, /* @__PURE__ */ new Map([[o, r]])) : s.set(o, r);
  }
}
function zc(e) {
  return {
    InlineFragment(t) {
      const n = e.getType(), r = e.getParentType();
      if (Lt(n) && Lt(r) && !qo(e.getSchema(), n, r)) {
        const i = U(r), o = U(n);
        e.reportError(new F(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${o}".`, {
          nodes: t
        }));
      }
    },
    FragmentSpread(t) {
      const n = t.name.value, r = Xh(e, n), i = e.getParentType();
      if (r && i && !qo(e.getSchema(), r, i)) {
        const o = U(i), s = U(r);
        e.reportError(new F(`Fragment "${n}" cannot be spread here as objects of type "${o}" can never be of type "${s}".`, {
          nodes: t
        }));
      }
    }
  };
}
function Xh(e, t) {
  const n = e.getFragment(t);
  if (n) {
    const r = tt(e.getSchema(), n.typeCondition);
    if (Lt(r))
      return r;
  }
}
function Xc(e) {
  const t = e.getSchema(), n = /* @__PURE__ */ Object.create(null);
  for (const i of e.getDocument().definitions)
    Un(i) && (n[i.name.value] = i);
  return {
    ScalarTypeExtension: r,
    ObjectTypeExtension: r,
    InterfaceTypeExtension: r,
    UnionTypeExtension: r,
    EnumTypeExtension: r,
    InputObjectTypeExtension: r
  };
  function r(i) {
    const o = i.name.value, s = n[o], a = t == null ? void 0 : t.getType(o);
    let u;
    if (s ? u = Jh[s.kind] : a && (u = Kh(a)), u) {
      if (u !== i.kind) {
        const c = Zh(i.kind);
        e.reportError(new F(`Cannot extend non-${c} type "${o}".`, {
          nodes: s ? [s, i] : i
        }));
      }
    } else {
      const c = Object.keys({
        ...n,
        ...t == null ? void 0 : t.getTypeMap()
      }), l = tn(o, c);
      e.reportError(new F(`Cannot extend type "${o}" because it is not defined.` + qt(l), {
        nodes: i.name
      }));
    }
  }
}
const Jh = {
  [T.SCALAR_TYPE_DEFINITION]: T.SCALAR_TYPE_EXTENSION,
  [T.OBJECT_TYPE_DEFINITION]: T.OBJECT_TYPE_EXTENSION,
  [T.INTERFACE_TYPE_DEFINITION]: T.INTERFACE_TYPE_EXTENSION,
  [T.UNION_TYPE_DEFINITION]: T.UNION_TYPE_EXTENSION,
  [T.ENUM_TYPE_DEFINITION]: T.ENUM_TYPE_EXTENSION,
  [T.INPUT_OBJECT_TYPE_DEFINITION]: T.INPUT_OBJECT_TYPE_EXTENSION
};
function Kh(e) {
  if (ut(e))
    return T.SCALAR_TYPE_EXTENSION;
  if (ge(e))
    return T.OBJECT_TYPE_EXTENSION;
  if (Te(e))
    return T.INTERFACE_TYPE_EXTENSION;
  if (Ge(e))
    return T.UNION_TYPE_EXTENSION;
  if (Ue(e))
    return T.ENUM_TYPE_EXTENSION;
  if (Le(e))
    return T.INPUT_OBJECT_TYPE_EXTENSION;
  Fe(!1, "Unexpected type: " + U(e));
}
function Zh(e) {
  switch (e) {
    case T.SCALAR_TYPE_EXTENSION:
      return "scalar";
    case T.OBJECT_TYPE_EXTENSION:
      return "object";
    case T.INTERFACE_TYPE_EXTENSION:
      return "interface";
    case T.UNION_TYPE_EXTENSION:
      return "union";
    case T.ENUM_TYPE_EXTENSION:
      return "enum";
    case T.INPUT_OBJECT_TYPE_EXTENSION:
      return "input object";
    default:
      Fe(!1, "Unexpected kind: " + U(e));
  }
}
function Jc(e) {
  return {
    ...Kc(e),
    Field: {
      leave(t) {
        var n;
        const r = e.getFieldDef();
        if (!r)
          return !1;
        const i = new Set((n = t.arguments) === null || n === void 0 ? void 0 : n.map((o) => o.name.value));
        for (const o of r.args)
          if (!i.has(o.name) && nn(o)) {
            const s = U(o.type);
            e.reportError(new F(`Field "${r.name}" argument "${o.name}" of type "${s}" is required, but it was not provided.`, {
              nodes: t
            }));
          }
      }
    }
  };
}
function Kc(e) {
  var t;
  const n = /* @__PURE__ */ Object.create(null), r = e.getSchema(), i = (t = r == null ? void 0 : r.getDirectives()) !== null && t !== void 0 ? t : rn;
  for (const a of i)
    n[a.name] = Gt(a.args.filter(nn), (u) => u.name);
  const o = e.getDocument().definitions;
  for (const a of o)
    if (a.kind === T.DIRECTIVE_DEFINITION) {
      var s;
      const u = (s = a.arguments) !== null && s !== void 0 ? s : [];
      n[a.name.value] = Gt(u.filter(em), (c) => c.name.value);
    }
  return {
    Directive: {
      leave(a) {
        const u = a.name.value, c = n[u];
        if (c) {
          var l;
          const f = (l = a.arguments) !== null && l !== void 0 ? l : [], d = new Set(f.map((p) => p.name.value));
          for (const [p, E] of Object.entries(c))
            if (!d.has(p)) {
              const y = Or(E.type) ? U(E.type) : De(E.type);
              e.reportError(new F(`Directive "@${u}" argument "${p}" of type "${y}" is required, but it was not provided.`, {
                nodes: a
              }));
            }
        }
      }
    }
  };
}
function em(e) {
  return e.type.kind === T.NON_NULL_TYPE && e.defaultValue == null;
}
function Zc(e) {
  return {
    Field(t) {
      const n = e.getType(), r = t.selectionSet;
      if (n) {
        if (Ct(Je(n))) {
          if (r) {
            const i = t.name.value, o = U(n);
            e.reportError(new F(`Field "${i}" must not have a selection since type "${o}" has no subfields.`, {
              nodes: r
            }));
          }
        } else if (!r) {
          const i = t.name.value, o = U(n);
          e.reportError(new F(`Field "${i}" of type "${o}" must have a selection of subfields. Did you mean "${i} { ... }"?`, {
            nodes: t
          }));
        }
      }
    }
  };
}
function el(e) {
  return e.map((t) => typeof t == "number" ? "[" + t.toString() + "]" : "." + t).join("");
}
function Cn(e, t, n) {
  return {
    prev: e,
    key: t,
    typename: n
  };
}
function rt(e) {
  const t = [];
  let n = e;
  for (; n; )
    t.push(n.key), n = n.prev;
  return t.reverse();
}
function tl(e, t, n = tm) {
  return ar(e, t, n, void 0);
}
function tm(e, t, n) {
  let r = "Invalid value " + U(t);
  throw e.length > 0 && (r += ` at "value${el(e)}"`), n.message = r + ": " + n.message, n;
}
function ar(e, t, n, r) {
  if (fe(t)) {
    if (e != null)
      return ar(e, t.ofType, n, r);
    n(rt(r), e, new F(`Expected non-nullable type "${U(t)}" not to be null.`));
    return;
  }
  if (e == null)
    return null;
  if (Ce(t)) {
    const i = t.ofType;
    return Ts(e) ? Array.from(e, (o, s) => {
      const a = Cn(r, s, void 0);
      return ar(o, i, n, a);
    }) : [ar(e, i, n, r)];
  }
  if (Le(t)) {
    if (!st(e)) {
      n(rt(r), e, new F(`Expected type "${t.name}" to be an object.`));
      return;
    }
    const i = {}, o = t.getFields();
    for (const s of Object.values(o)) {
      const a = e[s.name];
      if (a === void 0) {
        if (s.defaultValue !== void 0)
          i[s.name] = s.defaultValue;
        else if (fe(s.type)) {
          const u = U(s.type);
          n(rt(r), e, new F(`Field "${s.name}" of required type "${u}" was not provided.`));
        }
        continue;
      }
      i[s.name] = ar(a, s.type, n, Cn(r, s.name, t.name));
    }
    for (const s of Object.keys(e))
      if (!o[s]) {
        const a = tn(s, Object.keys(t.getFields()));
        n(rt(r), e, new F(`Field "${s}" is not defined by type "${t.name}".` + qt(a)));
      }
    return i;
  }
  if (Ct(t)) {
    let i;
    try {
      i = t.parseValue(e);
    } catch (o) {
      o instanceof F ? n(rt(r), e, o) : n(rt(r), e, new F(`Expected type "${t.name}". ` + o.message, {
        originalError: o
      }));
      return;
    }
    return i === void 0 && n(rt(r), e, new F(`Expected type "${t.name}".`)), i;
  }
  Fe(!1, "Unexpected input type: " + U(t));
}
function Rt(e, t, n) {
  if (!!e) {
    if (e.kind === T.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && fe(t) ? void 0 : i;
    }
    if (fe(t))
      return e.kind === T.NULL ? void 0 : Rt(e, t.ofType, n);
    if (e.kind === T.NULL)
      return null;
    if (Ce(t)) {
      const r = t.ofType;
      if (e.kind === T.LIST) {
        const o = [];
        for (const s of e.values)
          if (Ka(s, n)) {
            if (fe(r))
              return;
            o.push(null);
          } else {
            const a = Rt(s, r, n);
            if (a === void 0)
              return;
            o.push(a);
          }
        return o;
      }
      const i = Rt(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if (Le(t)) {
      if (e.kind !== T.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = Gt(e.fields, (o) => o.name.value);
      for (const o of Object.values(t.getFields())) {
        const s = i[o.name];
        if (!s || Ka(s.value, n)) {
          if (o.defaultValue !== void 0)
            r[o.name] = o.defaultValue;
          else if (fe(o.type))
            return;
          continue;
        }
        const a = Rt(s.value, o.type, n);
        if (a === void 0)
          return;
        r[o.name] = a;
      }
      return r;
    }
    if (Ct(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    Fe(!1, "Unexpected input type: " + U(t));
  }
}
function Ka(e, t) {
  return e.kind === T.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function nl(e, t, n, r) {
  const i = [], o = r == null ? void 0 : r.maxErrors;
  try {
    const s = nm(e, t, n, (a) => {
      if (o != null && i.length >= o)
        throw new F("Too many errors processing variables, error limit reached. Execution aborted.");
      i.push(a);
    });
    if (i.length === 0)
      return {
        coerced: s
      };
  } catch (s) {
    i.push(s);
  }
  return {
    errors: i
  };
}
function nm(e, t, n, r) {
  const i = {};
  for (const o of t) {
    const s = o.variable.name.value, a = tt(e, o.type);
    if (!et(a)) {
      const c = De(o.type);
      r(new F(`Variable "$${s}" expected value of type "${c}" which cannot be used as an input type.`, {
        nodes: o.type
      }));
      continue;
    }
    if (!rl(n, s)) {
      if (o.defaultValue)
        i[s] = Rt(o.defaultValue, a);
      else if (fe(a)) {
        const c = U(a);
        r(new F(`Variable "$${s}" of required type "${c}" was not provided.`, {
          nodes: o
        }));
      }
      continue;
    }
    const u = n[s];
    if (u === null && fe(a)) {
      const c = U(a);
      r(new F(`Variable "$${s}" of non-null type "${c}" must not be null.`, {
        nodes: o
      }));
      continue;
    }
    i[s] = tl(u, a, (c, l, f) => {
      let d = `Variable "$${s}" got invalid value ` + U(l);
      c.length > 0 && (d += ` at "${s}${el(c)}"`), r(new F(d + "; " + f.message, {
        nodes: o,
        originalError: f.originalError
      }));
    });
  }
  return i;
}
function Qi(e, t, n) {
  var r;
  const i = {}, o = (r = t.arguments) !== null && r !== void 0 ? r : [], s = Gt(o, (a) => a.name.value);
  for (const a of e.args) {
    const u = a.name, c = a.type, l = s[u];
    if (!l) {
      if (a.defaultValue !== void 0)
        i[u] = a.defaultValue;
      else if (fe(c))
        throw new F(`Argument "${u}" of required type "${U(c)}" was not provided.`, {
          nodes: t
        });
      continue;
    }
    const f = l.value;
    let d = f.kind === T.NULL;
    if (f.kind === T.VARIABLE) {
      const E = f.name.value;
      if (n == null || !rl(n, E)) {
        if (a.defaultValue !== void 0)
          i[u] = a.defaultValue;
        else if (fe(c))
          throw new F(`Argument "${u}" of required type "${U(c)}" was provided the variable "$${E}" which was not provided a runtime value.`, {
            nodes: f
          });
        continue;
      }
      d = n[E] == null;
    }
    if (d && fe(c))
      throw new F(`Argument "${u}" of non-null type "${U(c)}" must not be null.`, {
        nodes: f
      });
    const p = Rt(f, c, n);
    if (p === void 0)
      throw new F(`Argument "${u}" has invalid value ${De(f)}.`, {
        nodes: f
      });
    i[u] = p;
  }
  return i;
}
function yr(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find((o) => o.name.value === e.name);
  if (i)
    return Qi(e, i, n);
}
function rl(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function $s(e, t, n, r, i) {
  const o = /* @__PURE__ */ new Map();
  return di(e, t, n, r, i, o, /* @__PURE__ */ new Set()), o;
}
function rm(e, t, n, r, i) {
  const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
  for (const a of i)
    a.selectionSet && di(e, t, n, r, a.selectionSet, o, s);
  return o;
}
function di(e, t, n, r, i, o, s) {
  for (const a of i.selections)
    switch (a.kind) {
      case T.FIELD: {
        if (!Co(n, a))
          continue;
        const u = im(a), c = o.get(u);
        c !== void 0 ? c.push(a) : o.set(u, [a]);
        break;
      }
      case T.INLINE_FRAGMENT: {
        if (!Co(n, a) || !Za(e, a, r))
          continue;
        di(e, t, n, r, a.selectionSet, o, s);
        break;
      }
      case T.FRAGMENT_SPREAD: {
        const u = a.name.value;
        if (s.has(u) || !Co(n, a))
          continue;
        s.add(u);
        const c = t[u];
        if (!c || !Za(e, c, r))
          continue;
        di(e, t, n, r, c.selectionSet, o, s);
        break;
      }
    }
}
function Co(e, t) {
  const n = yr(ys, t, e);
  if ((n == null ? void 0 : n.if) === !0)
    return !1;
  const r = yr(vs, t, e);
  return (r == null ? void 0 : r.if) !== !1;
}
function Za(e, t, n) {
  const r = t.typeCondition;
  if (!r)
    return !0;
  const i = tt(e, r);
  return i === n ? !0 : Dt(i) ? e.isSubType(i, n) : !1;
}
function im(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function il(e) {
  return {
    OperationDefinition(t) {
      if (t.operation === "subscription") {
        const n = e.getSchema(), r = n.getSubscriptionType();
        if (r) {
          const i = t.name ? t.name.value : null, o = /* @__PURE__ */ Object.create(null), s = e.getDocument(), a = /* @__PURE__ */ Object.create(null);
          for (const c of s.definitions)
            c.kind === T.FRAGMENT_DEFINITION && (a[c.name.value] = c);
          const u = $s(n, a, o, r, t.selectionSet);
          if (u.size > 1) {
            const f = [...u.values()].slice(1).flat();
            e.reportError(new F(i != null ? `Subscription "${i}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", {
              nodes: f
            }));
          }
          for (const c of u.values())
            c[0].name.value.startsWith("__") && e.reportError(new F(i != null ? `Subscription "${i}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", {
              nodes: c
            }));
        }
      }
    }
  };
}
function Us(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e) {
    const i = t(r), o = n.get(i);
    o === void 0 ? n.set(i, [r]) : o.push(r);
  }
  return n;
}
function ol(e) {
  return {
    DirectiveDefinition(r) {
      var i;
      const o = (i = r.arguments) !== null && i !== void 0 ? i : [];
      return n(`@${r.name.value}`, o);
    },
    InterfaceTypeDefinition: t,
    InterfaceTypeExtension: t,
    ObjectTypeDefinition: t,
    ObjectTypeExtension: t
  };
  function t(r) {
    var i;
    const o = r.name.value, s = (i = r.fields) !== null && i !== void 0 ? i : [];
    for (const u of s) {
      var a;
      const c = u.name.value, l = (a = u.arguments) !== null && a !== void 0 ? a : [];
      n(`${o}.${c}`, l);
    }
    return !1;
  }
  function n(r, i) {
    const o = Us(i, (s) => s.name.value);
    for (const [s, a] of o)
      a.length > 1 && e.reportError(new F(`Argument "${r}(${s}:)" can only be defined once.`, {
        nodes: a.map((u) => u.name)
      }));
    return !1;
  }
}
function Vs(e) {
  return {
    Field: t,
    Directive: t
  };
  function t(n) {
    var r;
    const i = (r = n.arguments) !== null && r !== void 0 ? r : [], o = Us(i, (s) => s.name.value);
    for (const [s, a] of o)
      a.length > 1 && e.reportError(new F(`There can be only one argument named "${s}".`, {
        nodes: a.map((u) => u.name)
      }));
  }
}
function sl(e) {
  const t = /* @__PURE__ */ Object.create(null), n = e.getSchema();
  return {
    DirectiveDefinition(r) {
      const i = r.name.value;
      if (n != null && n.getDirective(i)) {
        e.reportError(new F(`Directive "@${i}" already exists in the schema. It cannot be redefined.`, {
          nodes: r.name
        }));
        return;
      }
      return t[i] ? e.reportError(new F(`There can be only one directive named "@${i}".`, {
        nodes: [t[i], r.name]
      })) : t[i] = r.name, !1;
    }
  };
}
function Bs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : rn;
  for (const a of r)
    t[a.name] = !a.isRepeatable;
  const i = e.getDocument().definitions;
  for (const a of i)
    a.kind === T.DIRECTIVE_DEFINITION && (t[a.name.value] = !a.repeatable);
  const o = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  return {
    enter(a) {
      if (!("directives" in a) || !a.directives)
        return;
      let u;
      if (a.kind === T.SCHEMA_DEFINITION || a.kind === T.SCHEMA_EXTENSION)
        u = o;
      else if (Un(a) || Yi(a)) {
        const c = a.name.value;
        u = s[c], u === void 0 && (s[c] = u = /* @__PURE__ */ Object.create(null));
      } else
        u = /* @__PURE__ */ Object.create(null);
      for (const c of a.directives) {
        const l = c.name.value;
        t[l] && (u[l] ? e.reportError(new F(`The directive "@${l}" can only be used once at this location.`, {
          nodes: [u[l], c]
        })) : u[l] = c);
      }
    }
  };
}
function al(e) {
  const t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  return {
    EnumTypeDefinition: i,
    EnumTypeExtension: i
  };
  function i(o) {
    var s;
    const a = o.name.value;
    r[a] || (r[a] = /* @__PURE__ */ Object.create(null));
    const u = (s = o.values) !== null && s !== void 0 ? s : [], c = r[a];
    for (const l of u) {
      const f = l.name.value, d = n[a];
      Ue(d) && d.getValue(f) ? e.reportError(new F(`Enum value "${a}.${f}" already exists in the schema. It cannot also be defined in this type extension.`, {
        nodes: l.name
      })) : c[f] ? e.reportError(new F(`Enum value "${a}.${f}" can only be defined once.`, {
        nodes: [c[f], l.name]
      })) : c[f] = l.name;
    }
    return !1;
  }
}
function ul(e) {
  const t = e.getSchema(), n = t ? t.getTypeMap() : /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  return {
    InputObjectTypeDefinition: i,
    InputObjectTypeExtension: i,
    InterfaceTypeDefinition: i,
    InterfaceTypeExtension: i,
    ObjectTypeDefinition: i,
    ObjectTypeExtension: i
  };
  function i(o) {
    var s;
    const a = o.name.value;
    r[a] || (r[a] = /* @__PURE__ */ Object.create(null));
    const u = (s = o.fields) !== null && s !== void 0 ? s : [], c = r[a];
    for (const l of u) {
      const f = l.name.value;
      om(n[a], f) ? e.reportError(new F(`Field "${a}.${f}" already exists in the schema. It cannot also be defined in this type extension.`, {
        nodes: l.name
      })) : c[f] ? e.reportError(new F(`Field "${a}.${f}" can only be defined once.`, {
        nodes: [c[f], l.name]
      })) : c[f] = l.name;
    }
    return !1;
  }
}
function om(e, t) {
  return ge(e) || Te(e) || Le(e) ? e.getFields()[t] != null : !1;
}
function cl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: () => !1,
    FragmentDefinition(n) {
      const r = n.name.value;
      return t[r] ? e.reportError(new F(`There can be only one fragment named "${r}".`, {
        nodes: [t[r], n.name]
      })) : t[r] = n.name, !1;
    }
  };
}
function qs(e) {
  const t = [];
  let n = /* @__PURE__ */ Object.create(null);
  return {
    ObjectValue: {
      enter() {
        t.push(n), n = /* @__PURE__ */ Object.create(null);
      },
      leave() {
        const r = t.pop();
        r || Fe(!1), n = r;
      }
    },
    ObjectField(r) {
      const i = r.name.value;
      n[i] ? e.reportError(new F(`There can be only one input field named "${i}".`, {
        nodes: [n[i], r.name]
      })) : n[i] = r.name;
    }
  };
}
function ll(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition(n) {
      const r = n.name;
      return r && (t[r.value] ? e.reportError(new F(`There can be only one operation named "${r.value}".`, {
        nodes: [
          t[r.value],
          r
        ]
      })) : t[r.value] = r), !1;
    },
    FragmentDefinition: () => !1
  };
}
function fl(e) {
  const t = e.getSchema(), n = /* @__PURE__ */ Object.create(null), r = t ? {
    query: t.getQueryType(),
    mutation: t.getMutationType(),
    subscription: t.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: i,
    SchemaExtension: i
  };
  function i(o) {
    var s;
    const a = (s = o.operationTypes) !== null && s !== void 0 ? s : [];
    for (const u of a) {
      const c = u.operation, l = n[c];
      r[c] ? e.reportError(new F(`Type for ${c} already defined in the schema. It cannot be redefined.`, {
        nodes: u
      })) : l ? e.reportError(new F(`There can be only one ${c} type in schema.`, {
        nodes: [l, u]
      })) : n[c] = u;
    }
    return !1;
  }
}
function dl(e) {
  const t = /* @__PURE__ */ Object.create(null), n = e.getSchema();
  return {
    ScalarTypeDefinition: r,
    ObjectTypeDefinition: r,
    InterfaceTypeDefinition: r,
    UnionTypeDefinition: r,
    EnumTypeDefinition: r,
    InputObjectTypeDefinition: r
  };
  function r(i) {
    const o = i.name.value;
    if (n != null && n.getType(o)) {
      e.reportError(new F(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`, {
        nodes: i.name
      }));
      return;
    }
    return t[o] ? e.reportError(new F(`There can be only one type named "${o}".`, {
      nodes: [t[o], i.name]
    })) : t[o] = i.name, !1;
  }
}
function pl(e) {
  return {
    OperationDefinition(t) {
      var n;
      const r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [], i = Us(r, (o) => o.variable.name.value);
      for (const [o, s] of i)
        s.length > 1 && e.reportError(new F(`There can be only one variable named "$${o}".`, {
          nodes: s.map((a) => a.variable.name)
        }));
    }
  };
}
function hl(e) {
  return {
    ListValue(t) {
      const n = ds(e.getParentInputType());
      if (!Ce(n))
        return on(e, t), !1;
    },
    ObjectValue(t) {
      const n = Je(e.getInputType());
      if (!Le(n))
        return on(e, t), !1;
      const r = Gt(t.fields, (i) => i.name.value);
      for (const i of Object.values(n.getFields()))
        if (!r[i.name] && Vi(i)) {
          const s = U(i.type);
          e.reportError(new F(`Field "${n.name}.${i.name}" of required type "${s}" was not provided.`, {
            nodes: t
          }));
        }
    },
    ObjectField(t) {
      const n = Je(e.getParentInputType());
      if (!e.getInputType() && Le(n)) {
        const i = tn(t.name.value, Object.keys(n.getFields()));
        e.reportError(new F(`Field "${t.name.value}" is not defined by type "${n.name}".` + qt(i), {
          nodes: t
        }));
      }
    },
    NullValue(t) {
      const n = e.getInputType();
      fe(n) && e.reportError(new F(`Expected value of type "${U(n)}", found ${De(t)}.`, {
        nodes: t
      }));
    },
    EnumValue: (t) => on(e, t),
    IntValue: (t) => on(e, t),
    FloatValue: (t) => on(e, t),
    StringValue: (t) => on(e, t),
    BooleanValue: (t) => on(e, t)
  };
}
function on(e, t) {
  const n = e.getInputType();
  if (!n)
    return;
  const r = Je(n);
  if (!Ct(r)) {
    const i = U(n);
    e.reportError(new F(`Expected value of type "${i}", found ${De(t)}.`, {
      nodes: t
    }));
    return;
  }
  try {
    if (r.parseLiteral(t, void 0) === void 0) {
      const o = U(n);
      e.reportError(new F(`Expected value of type "${o}", found ${De(t)}.`, {
        nodes: t
      }));
    }
  } catch (i) {
    const o = U(n);
    i instanceof F ? e.reportError(i) : e.reportError(new F(`Expected value of type "${o}", found ${De(t)}; ` + i.message, {
      nodes: t,
      originalError: i
    }));
  }
}
function ml(e) {
  return {
    VariableDefinition(t) {
      const n = tt(e.getSchema(), t.type);
      if (n !== void 0 && !et(n)) {
        const r = t.variable.name.value, i = De(t.type);
        e.reportError(new F(`Variable "$${r}" cannot be non-input type "${i}".`, {
          nodes: t.type
        }));
      }
    }
  };
}
function vl(e) {
  let t = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        t = /* @__PURE__ */ Object.create(null);
      },
      leave(n) {
        const r = e.getRecursiveVariableUsages(n);
        for (const { node: i, type: o, defaultValue: s } of r) {
          const a = i.name.value, u = t[a];
          if (u && o) {
            const c = e.getSchema(), l = tt(c, u.type);
            if (l && !sm(c, l, u.defaultValue, o, s)) {
              const f = U(l), d = U(o);
              e.reportError(new F(`Variable "$${a}" of type "${f}" used in position expecting type "${d}".`, {
                nodes: [u, i]
              }));
            }
          }
        }
      }
    },
    VariableDefinition(n) {
      t[n.variable.name.value] = n;
    }
  };
}
function sm(e, t, n, r, i) {
  if (fe(r) && !fe(t)) {
    if (!(n != null && n.kind !== T.NULL) && !(i !== void 0))
      return !1;
    const a = r.ofType;
    return an(e, t, a);
  }
  return an(e, t, r);
}
const yl = Object.freeze([
  kc,
  ll,
  $c,
  il,
  js,
  xc,
  ml,
  Zc,
  Pc,
  cl,
  Mc,
  qc,
  zc,
  Vc,
  pl,
  Bc,
  Gc,
  Fs,
  Bs,
  Fc,
  Vs,
  hl,
  Jc,
  vl,
  Yc,
  qs
]), am = Object.freeze([
  Uc,
  fl,
  dl,
  al,
  ul,
  ol,
  sl,
  js,
  Fs,
  Bs,
  Xc,
  jc,
  Vs,
  qs,
  Kc
]);
class gl {
  constructor(t, n) {
    this._ast = t, this._fragments = void 0, this._fragmentSpreads = /* @__PURE__ */ new Map(), this._recursivelyReferencedFragments = /* @__PURE__ */ new Map(), this._onError = n;
  }
  get [Symbol.toStringTag]() {
    return "ASTValidationContext";
  }
  reportError(t) {
    this._onError(t);
  }
  getDocument() {
    return this._ast;
  }
  getFragment(t) {
    let n;
    if (this._fragments)
      n = this._fragments;
    else {
      n = /* @__PURE__ */ Object.create(null);
      for (const r of this.getDocument().definitions)
        r.kind === T.FRAGMENT_DEFINITION && (n[r.name.value] = r);
      this._fragments = n;
    }
    return n[t];
  }
  getFragmentSpreads(t) {
    let n = this._fragmentSpreads.get(t);
    if (!n) {
      n = [];
      const r = [t];
      let i;
      for (; i = r.pop(); )
        for (const o of i.selections)
          o.kind === T.FRAGMENT_SPREAD ? n.push(o) : o.selectionSet && r.push(o.selectionSet);
      this._fragmentSpreads.set(t, n);
    }
    return n;
  }
  getRecursivelyReferencedFragments(t) {
    let n = this._recursivelyReferencedFragments.get(t);
    if (!n) {
      n = [];
      const r = /* @__PURE__ */ Object.create(null), i = [t.selectionSet];
      let o;
      for (; o = i.pop(); )
        for (const s of this.getFragmentSpreads(o)) {
          const a = s.name.value;
          if (r[a] !== !0) {
            r[a] = !0;
            const u = this.getFragment(a);
            u && (n.push(u), i.push(u.selectionSet));
          }
        }
      this._recursivelyReferencedFragments.set(t, n);
    }
    return n;
  }
}
class um extends gl {
  constructor(t, n, r) {
    super(t, r), this._schema = n;
  }
  get [Symbol.toStringTag]() {
    return "SDLValidationContext";
  }
  getSchema() {
    return this._schema;
  }
}
class El extends gl {
  constructor(t, n, r, i) {
    super(n, i), this._schema = t, this._typeInfo = r, this._variableUsages = /* @__PURE__ */ new Map(), this._recursiveVariableUsages = /* @__PURE__ */ new Map();
  }
  get [Symbol.toStringTag]() {
    return "ValidationContext";
  }
  getSchema() {
    return this._schema;
  }
  getVariableUsages(t) {
    let n = this._variableUsages.get(t);
    if (!n) {
      const r = [], i = new Cs(this._schema);
      Mn(t, Ls(i, {
        VariableDefinition: () => !1,
        Variable(o) {
          r.push({
            node: o,
            type: i.getInputType(),
            defaultValue: i.getDefaultValue()
          });
        }
      })), n = r, this._variableUsages.set(t, n);
    }
    return n;
  }
  getRecursiveVariableUsages(t) {
    let n = this._recursiveVariableUsages.get(t);
    if (!n) {
      n = this.getVariableUsages(t);
      for (const r of this.getRecursivelyReferencedFragments(t))
        n = n.concat(this.getVariableUsages(r));
      this._recursiveVariableUsages.set(t, n);
    }
    return n;
  }
  getType() {
    return this._typeInfo.getType();
  }
  getParentType() {
    return this._typeInfo.getParentType();
  }
  getInputType() {
    return this._typeInfo.getInputType();
  }
  getParentInputType() {
    return this._typeInfo.getParentInputType();
  }
  getFieldDef() {
    return this._typeInfo.getFieldDef();
  }
  getDirective() {
    return this._typeInfo.getDirective();
  }
  getArgument() {
    return this._typeInfo.getArgument();
  }
  getEnumValue() {
    return this._typeInfo.getEnumValue();
  }
}
function bl(e, t, n = yl, r, i = new Cs(e)) {
  var o;
  const s = (o = r == null ? void 0 : r.maxErrors) !== null && o !== void 0 ? o : 100;
  t || pe(!1, "Must provide document."), Rs(e);
  const a = Object.freeze({}), u = [], c = new El(e, t, i, (f) => {
    if (u.length >= s)
      throw u.push(new F("Too many validation errors, error limit reached. Validation aborted.")), a;
    u.push(f);
  }), l = ls(n.map((f) => f(c)));
  try {
    Mn(t, Ls(i, l));
  } catch (f) {
    if (f !== a)
      throw f;
  }
  return u;
}
function Tl(e, t, n = am) {
  const r = [], i = new um(e, t, (s) => {
    r.push(s);
  }), o = n.map((s) => s(i));
  return Mn(e, ls(o)), r;
}
function cm(e) {
  const t = Tl(e);
  if (t.length !== 0)
    throw new Error(t.map((n) => n.message).join(`

`));
}
function lm(e, t) {
  const n = Tl(e, t);
  if (n.length !== 0)
    throw new Error(n.map((r) => r.message).join(`

`));
}
function fm(e) {
  let t;
  return function(r, i, o) {
    t === void 0 && (t = /* @__PURE__ */ new WeakMap());
    let s = t.get(r);
    s === void 0 && (s = /* @__PURE__ */ new WeakMap(), t.set(r, s));
    let a = s.get(i);
    a === void 0 && (a = /* @__PURE__ */ new WeakMap(), s.set(i, a));
    let u = a.get(o);
    return u === void 0 && (u = e(r, i, o), a.set(o, u)), u;
  };
}
function dm(e) {
  return Promise.all(Object.values(e)).then((t) => {
    const n = /* @__PURE__ */ Object.create(null);
    for (const [r, i] of Object.keys(e).entries())
      n[i] = t[r];
    return n;
  });
}
function pm(e, t, n) {
  let r = n;
  for (const i of e)
    r = ot(r) ? r.then((o) => t(o, i)) : t(r, i);
  return r;
}
function hm(e) {
  return e instanceof Error ? e : new mm(e);
}
class mm extends Error {
  constructor(t) {
    super("Unexpected error value: " + U(t)), this.name = "NonErrorThrown", this.thrownValue = t;
  }
}
function Ln(e, t, n) {
  var r;
  const i = hm(e);
  return vm(i) ? i : new F(i.message, {
    nodes: (r = i.nodes) !== null && r !== void 0 ? r : t,
    source: i.source,
    positions: i.positions,
    path: n,
    originalError: i
  });
}
function vm(e) {
  return Array.isArray(e.path);
}
const ym = fm((e, t, n) => rm(e.schema, e.fragments, e.variableValues, t, n));
function zi(e) {
  arguments.length < 2 || pe(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
  const { schema: t, document: n, variableValues: r, rootValue: i } = e;
  wl(t, n, r);
  const o = Nl(e);
  if (!("schema" in o))
    return {
      errors: o
    };
  try {
    const { operation: s } = o, a = gm(o, s, i);
    return ot(a) ? a.then((u) => Qr(u, o.errors), (u) => (o.errors.push(u), Qr(null, o.errors))) : Qr(a, o.errors);
  } catch (s) {
    return o.errors.push(s), Qr(null, o.errors);
  }
}
function _l(e) {
  const t = zi(e);
  if (ot(t))
    throw new Error("GraphQL execution failed to complete synchronously.");
  return t;
}
function Qr(e, t) {
  return t.length === 0 ? {
    data: e
  } : {
    errors: t,
    data: e
  };
}
function wl(e, t, n) {
  t || pe(!1, "Must provide document."), Rs(e), n == null || st(n) || pe(!1, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
}
function Nl(e) {
  var t, n;
  const {
    schema: r,
    document: i,
    rootValue: o,
    contextValue: s,
    variableValues: a,
    operationName: u,
    fieldResolver: c,
    typeResolver: l,
    subscribeFieldResolver: f
  } = e;
  let d;
  const p = /* @__PURE__ */ Object.create(null);
  for (const g of i.definitions)
    switch (g.kind) {
      case T.OPERATION_DEFINITION:
        if (u == null) {
          if (d !== void 0)
            return [
              new F("Must provide operation name if query contains multiple operations.")
            ];
          d = g;
        } else
          ((t = g.name) === null || t === void 0 ? void 0 : t.value) === u && (d = g);
        break;
      case T.FRAGMENT_DEFINITION:
        p[g.name.value] = g;
        break;
    }
  if (!d)
    return u != null ? [new F(`Unknown operation named "${u}".`)] : [new F("Must provide an operation.")];
  const E = (n = d.variableDefinitions) !== null && n !== void 0 ? n : [], y = nl(r, E, a != null ? a : {}, {
    maxErrors: 50
  });
  return y.errors ? y.errors : {
    schema: r,
    fragments: p,
    rootValue: o,
    contextValue: s,
    operation: d,
    variableValues: y.coerced,
    fieldResolver: c != null ? c : Qo,
    typeResolver: l != null ? l : Ol,
    subscribeFieldResolver: f != null ? f : Qo,
    errors: []
  };
}
function gm(e, t, n) {
  const r = e.schema.getRootType(t.operation);
  if (r == null)
    throw new F(`Schema is not configured to execute ${t.operation} operation.`, {
      nodes: t
    });
  const i = $s(e.schema, e.fragments, e.variableValues, r, t.selectionSet), o = void 0;
  switch (t.operation) {
    case qe.QUERY:
      return pi(e, r, n, o, i);
    case qe.MUTATION:
      return Em(e, r, n, o, i);
    case qe.SUBSCRIPTION:
      return pi(e, r, n, o, i);
  }
}
function Em(e, t, n, r, i) {
  return pm(i.entries(), (o, [s, a]) => {
    const u = Cn(r, s, t.name), c = Sl(e, t, n, a, u);
    return c === void 0 ? o : ot(c) ? c.then((l) => (o[s] = l, o)) : (o[s] = c, o);
  }, /* @__PURE__ */ Object.create(null));
}
function pi(e, t, n, r, i) {
  const o = /* @__PURE__ */ Object.create(null);
  let s = !1;
  for (const [a, u] of i.entries()) {
    const c = Cn(r, a, t.name), l = Sl(e, t, n, u, c);
    l !== void 0 && (o[a] = l, ot(l) && (s = !0));
  }
  return s ? dm(o) : o;
}
function Sl(e, t, n, r, i) {
  var o;
  const s = Al(e.schema, t, r[0]);
  if (!s)
    return;
  const a = s.type, u = (o = s.resolve) !== null && o !== void 0 ? o : e.fieldResolver, c = Il(e, s, r, t, i);
  try {
    const l = Qi(s, r[0], e.variableValues), f = e.contextValue, d = u(n, l, f, c);
    let p;
    return ot(d) ? p = d.then((E) => gr(e, a, r, c, i, E)) : p = gr(e, a, r, c, i, d), ot(p) ? p.then(void 0, (E) => {
      const y = Ln(E, r, rt(i));
      return hi(y, a, e);
    }) : p;
  } catch (l) {
    const f = Ln(l, r, rt(i));
    return hi(f, a, e);
  }
}
function Il(e, t, n, r, i) {
  return {
    fieldName: t.name,
    fieldNodes: n,
    returnType: t.type,
    parentType: r,
    path: i,
    schema: e.schema,
    fragments: e.fragments,
    rootValue: e.rootValue,
    operation: e.operation,
    variableValues: e.variableValues
  };
}
function hi(e, t, n) {
  if (fe(t))
    throw e;
  return n.errors.push(e), null;
}
function gr(e, t, n, r, i, o) {
  if (o instanceof Error)
    throw o;
  if (fe(t)) {
    const s = gr(e, t.ofType, n, r, i, o);
    if (s === null)
      throw new Error(`Cannot return null for non-nullable field ${r.parentType.name}.${r.fieldName}.`);
    return s;
  }
  if (o == null)
    return null;
  if (Ce(t))
    return bm(e, t, n, r, i, o);
  if (Ct(t))
    return Tm(t, o);
  if (Dt(t))
    return _m(e, t, n, r, i, o);
  if (ge(t))
    return Wo(e, t, n, r, i, o);
  Fe(!1, "Cannot complete value of unexpected output type: " + U(t));
}
function bm(e, t, n, r, i, o) {
  if (!Ts(o))
    throw new F(`Expected Iterable, but did not find one for field "${r.parentType.name}.${r.fieldName}".`);
  const s = t.ofType;
  let a = !1;
  const u = Array.from(o, (c, l) => {
    const f = Cn(i, l, void 0);
    try {
      let d;
      return ot(c) ? d = c.then((p) => gr(e, s, n, r, f, p)) : d = gr(e, s, n, r, f, c), ot(d) ? (a = !0, d.then(void 0, (p) => {
        const E = Ln(p, n, rt(f));
        return hi(E, s, e);
      })) : d;
    } catch (d) {
      const p = Ln(d, n, rt(f));
      return hi(p, s, e);
    }
  });
  return a ? Promise.all(u) : u;
}
function Tm(e, t) {
  const n = e.serialize(t);
  if (n == null)
    throw new Error(`Expected \`${U(e)}.serialize(${U(t)})\` to return non-nullable value, returned: ${U(n)}`);
  return n;
}
function _m(e, t, n, r, i, o) {
  var s;
  const a = (s = t.resolveType) !== null && s !== void 0 ? s : e.typeResolver, u = e.contextValue, c = a(o, u, r, t);
  return ot(c) ? c.then((l) => Wo(e, eu(l, e, t, n, r, o), n, r, i, o)) : Wo(e, eu(c, e, t, n, r, o), n, r, i, o);
}
function eu(e, t, n, r, i, o) {
  if (e == null)
    throw new F(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, r);
  if (ge(e))
    throw new F("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
  if (typeof e != "string")
    throw new F(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}" with value ${U(o)}, received "${U(e)}".`);
  const s = t.schema.getType(e);
  if (s == null)
    throw new F(`Abstract type "${n.name}" was resolved to a type "${e}" that does not exist inside the schema.`, {
      nodes: r
    });
  if (!ge(s))
    throw new F(`Abstract type "${n.name}" was resolved to a non-object type "${e}".`, {
      nodes: r
    });
  if (!t.schema.isSubType(n, s))
    throw new F(`Runtime Object type "${s.name}" is not a possible type for "${n.name}".`, {
      nodes: r
    });
  return s;
}
function Wo(e, t, n, r, i, o) {
  const s = ym(e, t, n);
  if (t.isTypeOf) {
    const a = t.isTypeOf(o, e.contextValue, r);
    if (ot(a))
      return a.then((u) => {
        if (!u)
          throw tu(t, o, n);
        return pi(e, t, o, i, s);
      });
    if (!a)
      throw tu(t, o, n);
  }
  return pi(e, t, o, i, s);
}
function tu(e, t, n) {
  return new F(`Expected value of type "${e.name}" but got: ${U(t)}.`, {
    nodes: n
  });
}
const Ol = function(e, t, n, r) {
  if (st(e) && typeof e.__typename == "string")
    return e.__typename;
  const i = n.schema.getPossibleTypes(r), o = [];
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    if (a.isTypeOf) {
      const u = a.isTypeOf(e, t, n);
      if (ot(u))
        o[s] = u;
      else if (u)
        return a.name;
    }
  }
  if (o.length)
    return Promise.all(o).then((s) => {
      for (let a = 0; a < s.length; a++)
        if (s[a])
          return i[a].name;
    });
}, Qo = function(e, t, n, r) {
  if (st(e) || typeof e == "function") {
    const i = e[r.fieldName];
    return typeof i == "function" ? e[r.fieldName](t, n, r) : i;
  }
};
function Al(e, t, n) {
  const r = n.name.value;
  return r === hr.name && e.getQueryType() === t ? hr : r === mr.name && e.getQueryType() === t ? mr : r === vr.name ? vr : t.getFields()[r];
}
function wm(e) {
  return new Promise((t) => t(Rl(e)));
}
function Nm(e) {
  const t = Rl(e);
  if (ot(t))
    throw new Error("GraphQL execution failed to complete synchronously.");
  return t;
}
function Rl(e) {
  arguments.length < 2 || pe(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
  const {
    schema: t,
    source: n,
    rootValue: r,
    contextValue: i,
    variableValues: o,
    operationName: s,
    fieldResolver: a,
    typeResolver: u
  } = e, c = As(t);
  if (c.length > 0)
    return {
      errors: c
    };
  let l;
  try {
    l = $i(n);
  } catch (d) {
    return {
      errors: [d]
    };
  }
  const f = bl(t, l);
  return f.length > 0 ? {
    errors: f
  } : zi({
    schema: t,
    document: l,
    rootValue: r,
    contextValue: i,
    variableValues: o,
    operationName: s,
    fieldResolver: a,
    typeResolver: u
  });
}
function Dl(e) {
  return typeof (e == null ? void 0 : e[Symbol.asyncIterator]) == "function";
}
function Sm(e, t) {
  const n = e[Symbol.asyncIterator]();
  async function r(i) {
    if (i.done)
      return i;
    try {
      return {
        value: await t(i.value),
        done: !1
      };
    } catch (o) {
      if (typeof n.return == "function")
        try {
          await n.return();
        } catch {
        }
      throw o;
    }
  }
  return {
    async next() {
      return r(await n.next());
    },
    async return() {
      return typeof n.return == "function" ? r(await n.return()) : {
        value: void 0,
        done: !0
      };
    },
    async throw(i) {
      if (typeof n.throw == "function")
        return r(await n.throw(i));
      throw i;
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
async function Im(e) {
  arguments.length < 2 || pe(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
  const {
    schema: t,
    document: n,
    rootValue: r,
    contextValue: i,
    variableValues: o,
    operationName: s,
    fieldResolver: a,
    subscribeFieldResolver: u
  } = e, c = await Cl(t, n, r, i, o, s, u);
  return Dl(c) ? Sm(c, (f) => zi({
    schema: t,
    document: n,
    rootValue: f,
    contextValue: i,
    variableValues: o,
    operationName: s,
    fieldResolver: a
  })) : c;
}
async function Cl(e, t, n, r, i, o, s) {
  wl(e, t, i);
  const a = Nl({
    schema: e,
    document: t,
    rootValue: n,
    contextValue: r,
    variableValues: i,
    operationName: o,
    subscribeFieldResolver: s
  });
  if (!("schema" in a))
    return {
      errors: a
    };
  try {
    const u = await Om(a);
    if (!Dl(u))
      throw new Error(`Subscription field must return Async Iterable. Received: ${U(u)}.`);
    return u;
  } catch (u) {
    if (u instanceof F)
      return {
        errors: [u]
      };
    throw u;
  }
}
async function Om(e) {
  const { schema: t, fragments: n, operation: r, variableValues: i, rootValue: o } = e, s = t.getSubscriptionType();
  if (s == null)
    throw new F("Schema is not configured to execute subscription operation.", {
      nodes: r
    });
  const a = $s(t, n, i, s, r.selectionSet), [u, c] = [...a.entries()][0], l = Al(t, s, c[0]);
  if (!l) {
    const E = c[0].name.value;
    throw new F(`The subscription field "${E}" is not defined.`, {
      nodes: c
    });
  }
  const f = Cn(void 0, u, s.name), d = Il(e, l, c, s, f);
  try {
    var p;
    const E = Qi(l, c[0], i), y = e.contextValue, S = await ((p = l.subscribe) !== null && p !== void 0 ? p : e.subscribeFieldResolver)(o, E, y, d);
    if (S instanceof Error)
      throw S;
    return S;
  } catch (E) {
    throw Ln(E, c, rt(f));
  }
}
function Am(e) {
  return {
    Field(t) {
      const n = e.getFieldDef(), r = n == null ? void 0 : n.deprecationReason;
      if (n && r != null) {
        const i = e.getParentType();
        i != null || Fe(!1), e.reportError(new F(`The field ${i.name}.${n.name} is deprecated. ${r}`, {
          nodes: t
        }));
      }
    },
    Argument(t) {
      const n = e.getArgument(), r = n == null ? void 0 : n.deprecationReason;
      if (n && r != null) {
        const i = e.getDirective();
        if (i != null)
          e.reportError(new F(`Directive "@${i.name}" argument "${n.name}" is deprecated. ${r}`, {
            nodes: t
          }));
        else {
          const o = e.getParentType(), s = e.getFieldDef();
          o != null && s != null || Fe(!1), e.reportError(new F(`Field "${o.name}.${s.name}" argument "${n.name}" is deprecated. ${r}`, {
            nodes: t
          }));
        }
      }
    },
    ObjectField(t) {
      const n = Je(e.getParentInputType());
      if (Le(n)) {
        const r = n.getFields()[t.name.value], i = r == null ? void 0 : r.deprecationReason;
        i != null && e.reportError(new F(`The input field ${n.name}.${r.name} is deprecated. ${i}`, {
          nodes: t
        }));
      }
    },
    EnumValue(t) {
      const n = e.getEnumValue(), r = n == null ? void 0 : n.deprecationReason;
      if (n && r != null) {
        const i = Je(e.getInputType());
        i != null || Fe(!1), e.reportError(new F(`The enum value "${i.name}.${n.name}" is deprecated. ${r}`, {
          nodes: t
        }));
      }
    }
  };
}
function Rm(e) {
  return {
    Field(t) {
      const n = Je(e.getType());
      n && vn(n) && e.reportError(new F(`GraphQL introspection has been disabled, but the requested query contained the field "${t.name.value}".`, {
        nodes: t
      }));
    }
  };
}
function Ll(e) {
  const t = {
    descriptions: !0,
    specifiedByUrl: !1,
    directiveIsRepeatable: !1,
    schemaDescription: !1,
    inputValueDeprecation: !1,
    ...e
  }, n = t.descriptions ? "description" : "", r = t.specifiedByUrl ? "specifiedByURL" : "", i = t.directiveIsRepeatable ? "isRepeatable" : "", o = t.schemaDescription ? n : "";
  function s(a) {
    return t.inputValueDeprecation ? a : "";
  }
  return `
    query IntrospectionQuery {
      __schema {
        ${o}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${n}
          ${i}
          locations
          args${s("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${n}
      ${r}
      fields(includeDeprecated: true) {
        name
        ${n}
        args${s("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${s("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${n}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${n}
      type { ...TypeRef }
      defaultValue
      ${s("isDeprecated")}
      ${s("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}
function Dm(e, t) {
  let n = null;
  for (const i of e.definitions)
    if (i.kind === T.OPERATION_DEFINITION) {
      var r;
      if (t == null) {
        if (n)
          return null;
        n = i;
      } else if (((r = i.name) === null || r === void 0 ? void 0 : r.value) === t)
        return i;
    }
  return n;
}
function Cm(e, t) {
  if (t.operation === "query") {
    const n = e.getQueryType();
    if (!n)
      throw new F("Schema does not define the required query root type.", {
        nodes: t
      });
    return n;
  }
  if (t.operation === "mutation") {
    const n = e.getMutationType();
    if (!n)
      throw new F("Schema is not configured for mutations.", {
        nodes: t
      });
    return n;
  }
  if (t.operation === "subscription") {
    const n = e.getSubscriptionType();
    if (!n)
      throw new F("Schema is not configured for subscriptions.", {
        nodes: t
      });
    return n;
  }
  throw new F("Can only have query, mutation and subscription operations.", {
    nodes: t
  });
}
function Lm(e, t) {
  const n = {
    specifiedByUrl: !0,
    directiveIsRepeatable: !0,
    schemaDescription: !0,
    inputValueDeprecation: !0,
    ...t
  }, r = $i(Ll(n)), i = _l({
    schema: e,
    document: r
  });
  return !i.errors && i.data || Fe(!1), i.data;
}
function km(e, t) {
  st(e) && st(e.__schema) || pe(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${U(e)}.`);
  const n = e.__schema, r = Xt(n.types, (b) => b.name, (b) => d(b));
  for (const b of [...Dr, ...kr])
    r[b.name] && (r[b.name] = b);
  const i = n.queryType ? l(n.queryType) : null, o = n.mutationType ? l(n.mutationType) : null, s = n.subscriptionType ? l(n.subscriptionType) : null, a = n.directives ? n.directives.map(B) : [];
  return new $n({
    description: n.description,
    query: i,
    mutation: o,
    subscription: s,
    types: Object.values(r),
    directives: a,
    assumeValid: t == null ? void 0 : t.assumeValid
  });
  function u(b) {
    if (b.kind === Se.LIST) {
      const R = b.ofType;
      if (!R)
        throw new Error("Decorated type deeper than introspection query.");
      return new Qe(u(R));
    }
    if (b.kind === Se.NON_NULL) {
      const R = b.ofType;
      if (!R)
        throw new Error("Decorated type deeper than introspection query.");
      const k = u(R);
      return new de(wc(k));
    }
    return c(b);
  }
  function c(b) {
    const R = b.name;
    if (!R)
      throw new Error(`Unknown type reference: ${U(b)}.`);
    const k = r[R];
    if (!k)
      throw new Error(`Invalid or incomplete schema, unknown type: ${R}. Ensure that a full introspection query is used in order to build a client schema.`);
    return k;
  }
  function l(b) {
    return Tc(c(b));
  }
  function f(b) {
    return _c(c(b));
  }
  function d(b) {
    if (b != null && b.name != null && b.kind != null)
      switch (b.kind) {
        case Se.SCALAR:
          return p(b);
        case Se.OBJECT:
          return y(b);
        case Se.INTERFACE:
          return g(b);
        case Se.UNION:
          return S(b);
        case Se.ENUM:
          return D(b);
        case Se.INPUT_OBJECT:
          return L(b);
      }
    const R = U(b);
    throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${R}.`);
  }
  function p(b) {
    return new kt({
      name: b.name,
      description: b.description,
      specifiedByURL: b.specifiedByURL
    });
  }
  function E(b) {
    if (b.interfaces === null && b.kind === Se.INTERFACE)
      return [];
    if (!b.interfaces) {
      const R = U(b);
      throw new Error(`Introspection result missing interfaces: ${R}.`);
    }
    return b.interfaces.map(f);
  }
  function y(b) {
    return new mt({
      name: b.name,
      description: b.description,
      interfaces: () => E(b),
      fields: () => N(b)
    });
  }
  function g(b) {
    return new An({
      name: b.name,
      description: b.description,
      interfaces: () => E(b),
      fields: () => N(b)
    });
  }
  function S(b) {
    if (!b.possibleTypes) {
      const R = U(b);
      throw new Error(`Introspection result missing possibleTypes: ${R}.`);
    }
    return new Rn({
      name: b.name,
      description: b.description,
      types: () => b.possibleTypes.map(l)
    });
  }
  function D(b) {
    if (!b.enumValues) {
      const R = U(b);
      throw new Error(`Introspection result missing enumValues: ${R}.`);
    }
    return new en({
      name: b.name,
      description: b.description,
      values: Xt(b.enumValues, (R) => R.name, (R) => ({
        description: R.description,
        deprecationReason: R.deprecationReason
      }))
    });
  }
  function L(b) {
    if (!b.inputFields) {
      const R = U(b);
      throw new Error(`Introspection result missing inputFields: ${R}.`);
    }
    return new Dn({
      name: b.name,
      description: b.description,
      fields: () => w(b.inputFields)
    });
  }
  function N(b) {
    if (!b.fields)
      throw new Error(`Introspection result missing fields: ${U(b)}.`);
    return Xt(b.fields, (R) => R.name, C);
  }
  function C(b) {
    const R = u(b.type);
    if (!Kt(R)) {
      const k = U(R);
      throw new Error(`Introspection must provide output type for fields, but received: ${k}.`);
    }
    if (!b.args) {
      const k = U(b);
      throw new Error(`Introspection result missing field args: ${k}.`);
    }
    return {
      description: b.description,
      deprecationReason: b.deprecationReason,
      type: R,
      args: w(b.args)
    };
  }
  function w(b) {
    return Xt(b, (R) => R.name, P);
  }
  function P(b) {
    const R = u(b.type);
    if (!et(R)) {
      const q = U(R);
      throw new Error(`Introspection must provide input type for arguments, but received: ${q}.`);
    }
    const k = b.defaultValue != null ? Rt(gc(b.defaultValue), R) : void 0;
    return {
      description: b.description,
      type: R,
      defaultValue: k,
      deprecationReason: b.deprecationReason
    };
  }
  function B(b) {
    if (!b.args) {
      const R = U(b);
      throw new Error(`Introspection result missing directive args: ${R}.`);
    }
    if (!b.locations) {
      const R = U(b);
      throw new Error(`Introspection result missing directive locations: ${R}.`);
    }
    return new Pt({
      name: b.name,
      description: b.description,
      isRepeatable: b.isRepeatable,
      locations: b.locations.slice(),
      args: w(b.args)
    });
  }
}
function Pm(e, t, n) {
  Os(e), t != null && t.kind === T.DOCUMENT || pe(!1, "Must provide valid Document AST."), (n == null ? void 0 : n.assumeValid) !== !0 && (n == null ? void 0 : n.assumeValidSDL) !== !0 && lm(t, e);
  const r = e.toConfig(), i = kl(r, t, n);
  return r === i ? e : new $n(i);
}
function kl(e, t, n) {
  var r, i, o, s;
  const a = [], u = /* @__PURE__ */ Object.create(null), c = [];
  let l;
  const f = [];
  for (const m of t.definitions)
    if (m.kind === T.SCHEMA_DEFINITION)
      l = m;
    else if (m.kind === T.SCHEMA_EXTENSION)
      f.push(m);
    else if (Un(m))
      a.push(m);
    else if (Yi(m)) {
      const O = m.name.value, A = u[O];
      u[O] = A ? A.concat([m]) : [m];
    } else
      m.kind === T.DIRECTIVE_DEFINITION && c.push(m);
  if (Object.keys(u).length === 0 && a.length === 0 && c.length === 0 && f.length === 0 && l == null)
    return e;
  const d = /* @__PURE__ */ Object.create(null);
  for (const m of e.types)
    d[m.name] = D(m);
  for (const m of a) {
    var p;
    const O = m.name.value;
    d[O] = (p = nu[O]) !== null && p !== void 0 ? p : ue(m);
  }
  const E = {
    query: e.query && g(e.query),
    mutation: e.mutation && g(e.mutation),
    subscription: e.subscription && g(e.subscription),
    ...l && k([l]),
    ...k(f)
  };
  return {
    description: (r = l) === null || r === void 0 || (i = r.description) === null || i === void 0 ? void 0 : i.value,
    ...E,
    types: Object.values(d),
    directives: [
      ...e.directives.map(S),
      ...c.map(Q)
    ],
    extensions: /* @__PURE__ */ Object.create(null),
    astNode: (o = l) !== null && o !== void 0 ? o : e.astNode,
    extensionASTNodes: e.extensionASTNodes.concat(f),
    assumeValid: (s = n == null ? void 0 : n.assumeValid) !== null && s !== void 0 ? s : !1
  };
  function y(m) {
    return Ce(m) ? new Qe(y(m.ofType)) : fe(m) ? new de(y(m.ofType)) : g(m);
  }
  function g(m) {
    return d[m.name];
  }
  function S(m) {
    const O = m.toConfig();
    return new Pt({
      ...O,
      args: Bt(O.args, R)
    });
  }
  function D(m) {
    if (vn(m) || Bi(m))
      return m;
    if (ut(m))
      return C(m);
    if (ge(m))
      return w(m);
    if (Te(m))
      return P(m);
    if (Ge(m))
      return B(m);
    if (Ue(m))
      return N(m);
    if (Le(m))
      return L(m);
    Fe(!1, "Unexpected type: " + U(m));
  }
  function L(m) {
    var O;
    const A = m.toConfig(), M = (O = u[A.name]) !== null && O !== void 0 ? O : [];
    return new Dn({
      ...A,
      fields: () => ({
        ...Bt(A.fields, (ee) => ({
          ...ee,
          type: y(ee.type)
        })),
        ...G(M)
      }),
      extensionASTNodes: A.extensionASTNodes.concat(M)
    });
  }
  function N(m) {
    var O;
    const A = m.toConfig(), M = (O = u[m.name]) !== null && O !== void 0 ? O : [];
    return new en({
      ...A,
      values: { ...A.values, ...K(M) },
      extensionASTNodes: A.extensionASTNodes.concat(M)
    });
  }
  function C(m) {
    var O;
    const A = m.toConfig(), M = (O = u[A.name]) !== null && O !== void 0 ? O : [];
    let ee = A.specifiedByURL;
    for (const z of M) {
      var re;
      ee = (re = ru(z)) !== null && re !== void 0 ? re : ee;
    }
    return new kt({
      ...A,
      specifiedByURL: ee,
      extensionASTNodes: A.extensionASTNodes.concat(M)
    });
  }
  function w(m) {
    var O;
    const A = m.toConfig(), M = (O = u[A.name]) !== null && O !== void 0 ? O : [];
    return new mt({
      ...A,
      interfaces: () => [
        ...m.getInterfaces().map(g),
        ...Z(M)
      ],
      fields: () => ({
        ...Bt(A.fields, b),
        ...Y(M)
      }),
      extensionASTNodes: A.extensionASTNodes.concat(M)
    });
  }
  function P(m) {
    var O;
    const A = m.toConfig(), M = (O = u[A.name]) !== null && O !== void 0 ? O : [];
    return new An({
      ...A,
      interfaces: () => [
        ...m.getInterfaces().map(g),
        ...Z(M)
      ],
      fields: () => ({
        ...Bt(A.fields, b),
        ...Y(M)
      }),
      extensionASTNodes: A.extensionASTNodes.concat(M)
    });
  }
  function B(m) {
    var O;
    const A = m.toConfig(), M = (O = u[A.name]) !== null && O !== void 0 ? O : [];
    return new Rn({
      ...A,
      types: () => [
        ...m.getTypes().map(g),
        ...ie(M)
      ],
      extensionASTNodes: A.extensionASTNodes.concat(M)
    });
  }
  function b(m) {
    return {
      ...m,
      type: y(m.type),
      args: m.args && Bt(m.args, R)
    };
  }
  function R(m) {
    return { ...m, type: y(m.type) };
  }
  function k(m) {
    const O = {};
    for (const M of m) {
      var A;
      const ee = (A = M.operationTypes) !== null && A !== void 0 ? A : [];
      for (const re of ee)
        O[re.operation] = q(re.type);
    }
    return O;
  }
  function q(m) {
    var O;
    const A = m.name.value, M = (O = nu[A]) !== null && O !== void 0 ? O : d[A];
    if (M === void 0)
      throw new Error(`Unknown type: "${A}".`);
    return M;
  }
  function j(m) {
    return m.kind === T.LIST_TYPE ? new Qe(j(m.type)) : m.kind === T.NON_NULL_TYPE ? new de(j(m.type)) : q(m);
  }
  function Q(m) {
    var O;
    return new Pt({
      name: m.name.value,
      description: (O = m.description) === null || O === void 0 ? void 0 : O.value,
      locations: m.locations.map(({ value: A }) => A),
      isRepeatable: m.repeatable,
      args: ne(m.arguments),
      astNode: m
    });
  }
  function Y(m) {
    const O = /* @__PURE__ */ Object.create(null);
    for (const ee of m) {
      var A;
      const re = (A = ee.fields) !== null && A !== void 0 ? A : [];
      for (const z of re) {
        var M;
        O[z.name.value] = {
          type: j(z.type),
          description: (M = z.description) === null || M === void 0 ? void 0 : M.value,
          args: ne(z.arguments),
          deprecationReason: zr(z),
          astNode: z
        };
      }
    }
    return O;
  }
  function ne(m) {
    const O = m != null ? m : [], A = /* @__PURE__ */ Object.create(null);
    for (const ee of O) {
      var M;
      const re = j(ee.type);
      A[ee.name.value] = {
        type: re,
        description: (M = ee.description) === null || M === void 0 ? void 0 : M.value,
        defaultValue: Rt(ee.defaultValue, re),
        deprecationReason: zr(ee),
        astNode: ee
      };
    }
    return A;
  }
  function G(m) {
    const O = /* @__PURE__ */ Object.create(null);
    for (const ee of m) {
      var A;
      const re = (A = ee.fields) !== null && A !== void 0 ? A : [];
      for (const z of re) {
        var M;
        const se = j(z.type);
        O[z.name.value] = {
          type: se,
          description: (M = z.description) === null || M === void 0 ? void 0 : M.value,
          defaultValue: Rt(z.defaultValue, se),
          deprecationReason: zr(z),
          astNode: z
        };
      }
    }
    return O;
  }
  function K(m) {
    const O = /* @__PURE__ */ Object.create(null);
    for (const ee of m) {
      var A;
      const re = (A = ee.values) !== null && A !== void 0 ? A : [];
      for (const z of re) {
        var M;
        O[z.name.value] = {
          description: (M = z.description) === null || M === void 0 ? void 0 : M.value,
          deprecationReason: zr(z),
          astNode: z
        };
      }
    }
    return O;
  }
  function Z(m) {
    return m.flatMap((O) => {
      var A, M;
      return (A = (M = O.interfaces) === null || M === void 0 ? void 0 : M.map(q)) !== null && A !== void 0 ? A : [];
    });
  }
  function ie(m) {
    return m.flatMap((O) => {
      var A, M;
      return (A = (M = O.types) === null || M === void 0 ? void 0 : M.map(q)) !== null && A !== void 0 ? A : [];
    });
  }
  function ue(m) {
    var O;
    const A = m.name.value, M = (O = u[A]) !== null && O !== void 0 ? O : [];
    switch (m.kind) {
      case T.OBJECT_TYPE_DEFINITION: {
        var ee;
        const be = [m, ...M];
        return new mt({
          name: A,
          description: (ee = m.description) === null || ee === void 0 ? void 0 : ee.value,
          interfaces: () => Z(be),
          fields: () => Y(be),
          astNode: m,
          extensionASTNodes: M
        });
      }
      case T.INTERFACE_TYPE_DEFINITION: {
        var re;
        const be = [m, ...M];
        return new An({
          name: A,
          description: (re = m.description) === null || re === void 0 ? void 0 : re.value,
          interfaces: () => Z(be),
          fields: () => Y(be),
          astNode: m,
          extensionASTNodes: M
        });
      }
      case T.ENUM_TYPE_DEFINITION: {
        var z;
        const be = [m, ...M];
        return new en({
          name: A,
          description: (z = m.description) === null || z === void 0 ? void 0 : z.value,
          values: K(be),
          astNode: m,
          extensionASTNodes: M
        });
      }
      case T.UNION_TYPE_DEFINITION: {
        var se;
        const be = [m, ...M];
        return new Rn({
          name: A,
          description: (se = m.description) === null || se === void 0 ? void 0 : se.value,
          types: () => ie(be),
          astNode: m,
          extensionASTNodes: M
        });
      }
      case T.SCALAR_TYPE_DEFINITION: {
        var ce;
        return new kt({
          name: A,
          description: (ce = m.description) === null || ce === void 0 ? void 0 : ce.value,
          specifiedByURL: ru(m),
          astNode: m,
          extensionASTNodes: M
        });
      }
      case T.INPUT_OBJECT_TYPE_DEFINITION: {
        var _e;
        const be = [m, ...M];
        return new Dn({
          name: A,
          description: (_e = m.description) === null || _e === void 0 ? void 0 : _e.value,
          fields: () => G(be),
          astNode: m,
          extensionASTNodes: M
        });
      }
    }
  }
}
const nu = Gt([...Dr, ...kr], (e) => e.name);
function zr(e) {
  const t = yr(Gi, e);
  return t == null ? void 0 : t.reason;
}
function ru(e) {
  const t = yr(Es, e);
  return t == null ? void 0 : t.url;
}
function Pl(e, t) {
  e != null && e.kind === T.DOCUMENT || pe(!1, "Must provide valid Document AST."), (t == null ? void 0 : t.assumeValid) !== !0 && (t == null ? void 0 : t.assumeValidSDL) !== !0 && cm(e);
  const r = kl({
    description: void 0,
    types: [],
    directives: [],
    extensions: /* @__PURE__ */ Object.create(null),
    extensionASTNodes: [],
    assumeValid: !1
  }, e, t);
  if (r.astNode == null)
    for (const o of r.types)
      switch (o.name) {
        case "Query":
          r.query = o;
          break;
        case "Mutation":
          r.mutation = o;
          break;
        case "Subscription":
          r.subscription = o;
          break;
      }
  const i = [
    ...r.directives,
    ...rn.filter((o) => r.directives.every((s) => s.name !== o.name))
  ];
  return new $n({ ...r, directives: i });
}
function xm(e, t) {
  const n = $i(e, {
    noLocation: t == null ? void 0 : t.noLocation,
    allowLegacyFragmentVariables: t == null ? void 0 : t.allowLegacyFragmentVariables
  });
  return Pl(n, {
    assumeValidSDL: t == null ? void 0 : t.assumeValidSDL,
    assumeValid: t == null ? void 0 : t.assumeValid
  });
}
function Fm(e) {
  const t = e.toConfig(), n = Xt(Lo(t.types), (d) => d.name, f);
  return new $n({
    ...t,
    types: Object.values(n),
    directives: Lo(t.directives).map(s),
    query: o(t.query),
    mutation: o(t.mutation),
    subscription: o(t.subscription)
  });
  function r(d) {
    return Ce(d) ? new Qe(r(d.ofType)) : fe(d) ? new de(r(d.ofType)) : i(d);
  }
  function i(d) {
    return n[d.name];
  }
  function o(d) {
    return d && i(d);
  }
  function s(d) {
    const p = d.toConfig();
    return new Pt({
      ...p,
      locations: xl(p.locations, (E) => E),
      args: a(p.args)
    });
  }
  function a(d) {
    return Xr(d, (p) => ({ ...p, type: r(p.type) }));
  }
  function u(d) {
    return Xr(d, (p) => ({
      ...p,
      type: r(p.type),
      args: p.args && a(p.args)
    }));
  }
  function c(d) {
    return Xr(d, (p) => ({
      ...p,
      type: r(p.type)
    }));
  }
  function l(d) {
    return Lo(d).map(i);
  }
  function f(d) {
    if (ut(d) || vn(d))
      return d;
    if (ge(d)) {
      const p = d.toConfig();
      return new mt({
        ...p,
        interfaces: () => l(p.interfaces),
        fields: () => u(p.fields)
      });
    }
    if (Te(d)) {
      const p = d.toConfig();
      return new An({
        ...p,
        interfaces: () => l(p.interfaces),
        fields: () => u(p.fields)
      });
    }
    if (Ge(d)) {
      const p = d.toConfig();
      return new Rn({
        ...p,
        types: () => l(p.types)
      });
    }
    if (Ue(d)) {
      const p = d.toConfig();
      return new en({
        ...p,
        values: Xr(p.values, (E) => E)
      });
    }
    if (Le(d)) {
      const p = d.toConfig();
      return new Dn({
        ...p,
        fields: () => c(p.fields)
      });
    }
    Fe(!1, "Unexpected type: " + U(d));
  }
}
function Xr(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e).sort(Ir))
    n[r] = t(e[r]);
  return n;
}
function Lo(e) {
  return xl(e, (t) => t.name);
}
function xl(e, t) {
  return e.slice().sort((n, r) => {
    const i = t(n), o = t(r);
    return Ir(i, o);
  });
}
function jm(e) {
  return Fl(e, (t) => !bs(t), $m);
}
function Mm(e) {
  return Fl(e, bs, vn);
}
function $m(e) {
  return !Bi(e) && !vn(e);
}
function Fl(e, t, n) {
  const r = e.getDirectives().filter(t), i = Object.values(e.getTypeMap()).filter(n);
  return [
    Um(e),
    ...r.map((o) => Qm(o)),
    ...i.map((o) => jl(o))
  ].filter(Boolean).join(`

`);
}
function Um(e) {
  if (e.description == null && Vm(e))
    return;
  const t = [], n = e.getQueryType();
  n && t.push(`  query: ${n.name}`);
  const r = e.getMutationType();
  r && t.push(`  mutation: ${r.name}`);
  const i = e.getSubscriptionType();
  return i && t.push(`  subscription: ${i.name}`), vt(e) + `schema {
${t.join(`
`)}
}`;
}
function Vm(e) {
  const t = e.getQueryType();
  if (t && t.name !== "Query")
    return !1;
  const n = e.getMutationType();
  if (n && n.name !== "Mutation")
    return !1;
  const r = e.getSubscriptionType();
  return !(r && r.name !== "Subscription");
}
function jl(e) {
  if (ut(e))
    return Bm(e);
  if (ge(e))
    return qm(e);
  if (Te(e))
    return Gm(e);
  if (Ge(e))
    return Hm(e);
  if (Ue(e))
    return Ym(e);
  if (Le(e))
    return Wm(e);
  Fe(!1, "Unexpected type: " + U(e));
}
function Bm(e) {
  return vt(e) + `scalar ${e.name}` + zm(e);
}
function Ml(e) {
  const t = e.getInterfaces();
  return t.length ? " implements " + t.map((n) => n.name).join(" & ") : "";
}
function qm(e) {
  return vt(e) + `type ${e.name}` + Ml(e) + $l(e);
}
function Gm(e) {
  return vt(e) + `interface ${e.name}` + Ml(e) + $l(e);
}
function Hm(e) {
  const t = e.getTypes(), n = t.length ? " = " + t.join(" | ") : "";
  return vt(e) + "union " + e.name + n;
}
function Ym(e) {
  const t = e.getValues().map((n, r) => vt(n, "  ", !r) + "  " + n.name + Hs(n.deprecationReason));
  return vt(e) + `enum ${e.name}` + Gs(t);
}
function Wm(e) {
  const t = Object.values(e.getFields()).map((n, r) => vt(n, "  ", !r) + "  " + zo(n));
  return vt(e) + `input ${e.name}` + Gs(t);
}
function $l(e) {
  const t = Object.values(e.getFields()).map((n, r) => vt(n, "  ", !r) + "  " + n.name + Ul(n.args, "  ") + ": " + String(n.type) + Hs(n.deprecationReason));
  return Gs(t);
}
function Gs(e) {
  return e.length !== 0 ? ` {
` + e.join(`
`) + `
}` : "";
}
function Ul(e, t = "") {
  return e.length === 0 ? "" : e.every((n) => !n.description) ? "(" + e.map(zo).join(", ") + ")" : `(
` + e.map((n, r) => vt(n, "  " + t, !r) + "  " + t + zo(n)).join(`
`) + `
` + t + ")";
}
function zo(e) {
  const t = Jt(e.defaultValue, e.type);
  let n = e.name + ": " + String(e.type);
  return t && (n += ` = ${De(t)}`), n + Hs(e.deprecationReason);
}
function Qm(e) {
  return vt(e) + "directive @" + e.name + Ul(e.args) + (e.isRepeatable ? " repeatable" : "") + " on " + e.locations.join(" | ");
}
function Hs(e) {
  return e == null ? "" : e !== gs ? ` @deprecated(reason: ${De({
    kind: T.STRING,
    value: e
  })})` : " @deprecated";
}
function zm(e) {
  return e.specifiedByURL == null ? "" : ` @specifiedBy(url: ${De({
    kind: T.STRING,
    value: e.specifiedByURL
  })})`;
}
function vt(e, t = "", n = !0) {
  const { description: r } = e;
  if (r == null)
    return "";
  const i = De({
    kind: T.STRING,
    value: r,
    block: kp(r)
  });
  return (t && !n ? `
` + t : t) + i.replace(/\n/g, `
` + t) + `
`;
}
function Xm(e) {
  const t = [];
  for (const n of e)
    t.push(...n.definitions);
  return {
    kind: T.DOCUMENT,
    definitions: t
  };
}
function Jm(e) {
  const t = [], n = /* @__PURE__ */ Object.create(null);
  for (const i of e.definitions)
    switch (i.kind) {
      case T.OPERATION_DEFINITION:
        t.push(i);
        break;
      case T.FRAGMENT_DEFINITION:
        n[i.name.value] = iu(i.selectionSet);
        break;
    }
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of t) {
    const o = /* @__PURE__ */ new Set();
    for (const a of iu(i.selectionSet))
      Vl(o, n, a);
    const s = i.name ? i.name.value : "";
    r[s] = {
      kind: T.DOCUMENT,
      definitions: e.definitions.filter((a) => a === i || a.kind === T.FRAGMENT_DEFINITION && o.has(a.name.value))
    };
  }
  return r;
}
function Vl(e, t, n) {
  if (!e.has(n)) {
    e.add(n);
    const r = t[n];
    if (r !== void 0)
      for (const i of r)
        Vl(e, t, i);
  }
}
function iu(e) {
  const t = [];
  return Mn(e, {
    FragmentSpread(n) {
      t.push(n.name.value);
    }
  }), t;
}
function Km(e) {
  const t = yc(e) ? e : new Mi(e), n = t.body, r = new cs(t);
  let i = "", o = !1;
  for (; r.advance().kind !== $.EOF; ) {
    const s = r.token, a = s.kind, u = !pc(s.kind);
    o && (u || s.kind === $.SPREAD) && (i += " ");
    const c = n.slice(s.start, s.end);
    a === $.BLOCK_STRING ? i += dc(s.value, {
      minimize: !0
    }) : i += c, o = u;
  }
  return i;
}
function Zm(e) {
  const t = Bl(e);
  if (t)
    throw t;
  return e;
}
function Bl(e) {
  if (typeof e == "string" || pe(!1, "Expected name to be a string."), e.startsWith("__"))
    return new F(`Name "${e}" must not begin with "__", which is reserved by GraphQL introspection.`);
  try {
    at(e);
  } catch (t) {
    return t;
  }
}
let ke;
(function(e) {
  e.TYPE_REMOVED = "TYPE_REMOVED", e.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", e.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", e.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", e.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", e.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", e.FIELD_REMOVED = "FIELD_REMOVED", e.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", e.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", e.ARG_REMOVED = "ARG_REMOVED", e.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", e.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", e.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", e.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", e.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", e.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED";
})(ke || (ke = {}));
let It;
(function(e) {
  e.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", e.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", e.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", e.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", e.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", e.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE";
})(It || (It = {}));
function ev(e, t) {
  return ql(e, t).filter((n) => n.type in ke);
}
function tv(e, t) {
  return ql(e, t).filter((n) => n.type in It);
}
function ql(e, t) {
  return [
    ...rv(e, t),
    ...nv(e, t)
  ];
}
function nv(e, t) {
  const n = [], r = Ht(e.getDirectives(), t.getDirectives());
  for (const i of r.removed)
    n.push({
      type: ke.DIRECTIVE_REMOVED,
      description: `${i.name} was removed.`
    });
  for (const [i, o] of r.persisted) {
    const s = Ht(i.args, o.args);
    for (const a of s.added)
      nn(a) && n.push({
        type: ke.REQUIRED_DIRECTIVE_ARG_ADDED,
        description: `A required arg ${a.name} on directive ${i.name} was added.`
      });
    for (const a of s.removed)
      n.push({
        type: ke.DIRECTIVE_ARG_REMOVED,
        description: `${a.name} was removed from ${i.name}.`
      });
    i.isRepeatable && !o.isRepeatable && n.push({
      type: ke.DIRECTIVE_REPEATABLE_REMOVED,
      description: `Repeatable flag was removed from ${i.name}.`
    });
    for (const a of i.locations)
      o.locations.includes(a) || n.push({
        type: ke.DIRECTIVE_LOCATION_REMOVED,
        description: `${a} was removed from ${i.name}.`
      });
  }
  return n;
}
function rv(e, t) {
  const n = [], r = Ht(Object.values(e.getTypeMap()), Object.values(t.getTypeMap()));
  for (const i of r.removed)
    n.push({
      type: ke.TYPE_REMOVED,
      description: Bi(i) ? `Standard scalar ${i.name} was removed because it is not referenced anymore.` : `${i.name} was removed.`
    });
  for (const [i, o] of r.persisted)
    Ue(i) && Ue(o) ? n.push(...sv(i, o)) : Ge(i) && Ge(o) ? n.push(...ov(i, o)) : Le(i) && Le(o) ? n.push(...iv(i, o)) : ge(i) && ge(o) ? n.push(...su(i, o), ...ou(i, o)) : Te(i) && Te(o) ? n.push(...su(i, o), ...ou(i, o)) : i.constructor !== o.constructor && n.push({
      type: ke.TYPE_CHANGED_KIND,
      description: `${i.name} changed from ${au(i)} to ${au(o)}.`
    });
  return n;
}
function iv(e, t) {
  const n = [], r = Ht(Object.values(e.getFields()), Object.values(t.getFields()));
  for (const i of r.added)
    Vi(i) ? n.push({
      type: ke.REQUIRED_INPUT_FIELD_ADDED,
      description: `A required field ${i.name} on input type ${e.name} was added.`
    }) : n.push({
      type: It.OPTIONAL_INPUT_FIELD_ADDED,
      description: `An optional field ${i.name} on input type ${e.name} was added.`
    });
  for (const i of r.removed)
    n.push({
      type: ke.FIELD_REMOVED,
      description: `${e.name}.${i.name} was removed.`
    });
  for (const [i, o] of r.persisted)
    lr(i.type, o.type) || n.push({
      type: ke.FIELD_CHANGED_KIND,
      description: `${e.name}.${i.name} changed type from ${String(i.type)} to ${String(o.type)}.`
    });
  return n;
}
function ov(e, t) {
  const n = [], r = Ht(e.getTypes(), t.getTypes());
  for (const i of r.added)
    n.push({
      type: It.TYPE_ADDED_TO_UNION,
      description: `${i.name} was added to union type ${e.name}.`
    });
  for (const i of r.removed)
    n.push({
      type: ke.TYPE_REMOVED_FROM_UNION,
      description: `${i.name} was removed from union type ${e.name}.`
    });
  return n;
}
function sv(e, t) {
  const n = [], r = Ht(e.getValues(), t.getValues());
  for (const i of r.added)
    n.push({
      type: It.VALUE_ADDED_TO_ENUM,
      description: `${i.name} was added to enum type ${e.name}.`
    });
  for (const i of r.removed)
    n.push({
      type: ke.VALUE_REMOVED_FROM_ENUM,
      description: `${i.name} was removed from enum type ${e.name}.`
    });
  return n;
}
function ou(e, t) {
  const n = [], r = Ht(e.getInterfaces(), t.getInterfaces());
  for (const i of r.added)
    n.push({
      type: It.IMPLEMENTED_INTERFACE_ADDED,
      description: `${i.name} added to interfaces implemented by ${e.name}.`
    });
  for (const i of r.removed)
    n.push({
      type: ke.IMPLEMENTED_INTERFACE_REMOVED,
      description: `${e.name} no longer implements interface ${i.name}.`
    });
  return n;
}
function su(e, t) {
  const n = [], r = Ht(Object.values(e.getFields()), Object.values(t.getFields()));
  for (const i of r.removed)
    n.push({
      type: ke.FIELD_REMOVED,
      description: `${e.name}.${i.name} was removed.`
    });
  for (const [i, o] of r.persisted)
    n.push(...av(e, i, o)), ur(i.type, o.type) || n.push({
      type: ke.FIELD_CHANGED_KIND,
      description: `${e.name}.${i.name} changed type from ${String(i.type)} to ${String(o.type)}.`
    });
  return n;
}
function av(e, t, n) {
  const r = [], i = Ht(t.args, n.args);
  for (const o of i.removed)
    r.push({
      type: ke.ARG_REMOVED,
      description: `${e.name}.${t.name} arg ${o.name} was removed.`
    });
  for (const [o, s] of i.persisted)
    if (!lr(o.type, s.type))
      r.push({
        type: ke.ARG_CHANGED_KIND,
        description: `${e.name}.${t.name} arg ${o.name} has changed type from ${String(o.type)} to ${String(s.type)}.`
      });
    else if (o.defaultValue !== void 0)
      if (s.defaultValue === void 0)
        r.push({
          type: It.ARG_DEFAULT_VALUE_CHANGE,
          description: `${e.name}.${t.name} arg ${o.name} defaultValue was removed.`
        });
      else {
        const u = uu(o.defaultValue, o.type), c = uu(s.defaultValue, s.type);
        u !== c && r.push({
          type: It.ARG_DEFAULT_VALUE_CHANGE,
          description: `${e.name}.${t.name} arg ${o.name} has changed defaultValue from ${u} to ${c}.`
        });
      }
  for (const o of i.added)
    nn(o) ? r.push({
      type: ke.REQUIRED_ARG_ADDED,
      description: `A required arg ${o.name} on ${e.name}.${t.name} was added.`
    }) : r.push({
      type: It.OPTIONAL_ARG_ADDED,
      description: `An optional arg ${o.name} on ${e.name}.${t.name} was added.`
    });
  return r;
}
function ur(e, t) {
  return Ce(e) ? Ce(t) && ur(e.ofType, t.ofType) || fe(t) && ur(e, t.ofType) : fe(e) ? fe(t) && ur(e.ofType, t.ofType) : Rr(t) && e.name === t.name || fe(t) && ur(e, t.ofType);
}
function lr(e, t) {
  return Ce(e) ? Ce(t) && lr(e.ofType, t.ofType) : fe(e) ? fe(t) && lr(e.ofType, t.ofType) || !fe(t) && lr(e.ofType, t) : Rr(t) && e.name === t.name;
}
function au(e) {
  if (ut(e))
    return "a Scalar type";
  if (ge(e))
    return "an Object type";
  if (Te(e))
    return "an Interface type";
  if (Ge(e))
    return "a Union type";
  if (Ue(e))
    return "an Enum type";
  if (Le(e))
    return "an Input type";
  Fe(!1, "Unexpected type: " + U(e));
}
function uu(e, t) {
  const n = Jt(e, t);
  return n != null || Fe(!1), De(Wi(n));
}
function Ht(e, t) {
  const n = [], r = [], i = [], o = Gt(e, ({ name: a }) => a), s = Gt(t, ({ name: a }) => a);
  for (const a of e) {
    const u = s[a.name];
    u === void 0 ? r.push(a) : i.push([a, u]);
  }
  for (const a of t)
    o[a.name] === void 0 && n.push(a);
  return {
    added: n,
    persisted: i,
    removed: r
  };
}
const uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  version: Np,
  versionInfo: Sp,
  graphql: wm,
  graphqlSync: Nm,
  resolveObjMapThunk: hs,
  resolveReadonlyArrayThunk: ps,
  GraphQLSchema: $n,
  GraphQLDirective: Pt,
  GraphQLScalarType: kt,
  GraphQLObjectType: mt,
  GraphQLInterfaceType: An,
  GraphQLUnionType: Rn,
  GraphQLEnumType: en,
  GraphQLInputObjectType: Dn,
  GraphQLList: Qe,
  GraphQLNonNull: de,
  specifiedScalarTypes: Dr,
  GraphQLInt: Rc,
  GraphQLFloat: Dc,
  GraphQLString: Pe,
  GraphQLBoolean: it,
  GraphQLID: ms,
  GRAPHQL_MAX_INT: ni,
  GRAPHQL_MIN_INT: ri,
  specifiedDirectives: rn,
  GraphQLIncludeDirective: vs,
  GraphQLSkipDirective: ys,
  GraphQLDeprecatedDirective: Gi,
  GraphQLSpecifiedByDirective: Es,
  get TypeKind() {
    return Se;
  },
  DEFAULT_DEPRECATION_REASON: gs,
  introspectionTypes: kr,
  __Schema: Hi,
  __Directive: _s,
  __DirectiveLocation: ws,
  __Type: ht,
  __Field: Ns,
  __InputValue: Lr,
  __EnumValue: Ss,
  __TypeKind: Is,
  SchemaMetaFieldDef: hr,
  TypeMetaFieldDef: mr,
  TypeNameMetaFieldDef: vr,
  isSchema: Cc,
  isDirective: qi,
  isType: Or,
  isScalarType: ut,
  isObjectType: ge,
  isInterfaceType: Te,
  isUnionType: Ge,
  isEnumType: Ue,
  isInputObjectType: Le,
  isListType: Ce,
  isNonNullType: fe,
  isInputType: et,
  isOutputType: Kt,
  isLeafType: Ct,
  isCompositeType: Lt,
  isAbstractType: Dt,
  isWrappingType: Ar,
  isNullableType: fs,
  isNamedType: Rr,
  isRequiredArgument: nn,
  isRequiredInputField: Vi,
  isSpecifiedScalarType: Bi,
  isIntrospectionType: vn,
  isSpecifiedDirective: bs,
  assertSchema: Os,
  assertDirective: Nh,
  assertType: ah,
  assertScalarType: uh,
  assertObjectType: Tc,
  assertInterfaceType: _c,
  assertUnionType: ch,
  assertEnumType: lh,
  assertInputObjectType: fh,
  assertListType: dh,
  assertNonNullType: ph,
  assertInputType: hh,
  assertOutputType: mh,
  assertLeafType: vh,
  assertCompositeType: yh,
  assertAbstractType: gh,
  assertWrappingType: Eh,
  assertNullableType: wc,
  assertNamedType: bh,
  getNullableType: ds,
  getNamedType: Je,
  validateSchema: As,
  assertValidSchema: Rs,
  assertName: at,
  assertEnumValueName: bc,
  Token: as,
  Source: Mi,
  Location: uc,
  get OperationTypeNode() {
    return qe;
  },
  getLocation: si,
  printLocation: ac,
  printSourceLocation: ss,
  Lexer: cs,
  get TokenKind() {
    return $;
  },
  parse: $i,
  parseValue: gc,
  parseConstValue: zp,
  parseType: Xp,
  print: De,
  visit: Mn,
  visitInParallel: ls,
  getVisitFn: ih,
  getEnterLeaveForKind: On,
  BREAK: Nn,
  get Kind() {
    return T;
  },
  get DirectiveLocation() {
    return ae;
  },
  isDefinitionNode: Fh,
  isExecutableDefinitionNode: ks,
  isSelectionNode: jh,
  isValueNode: Lc,
  isConstValueNode: Go,
  isTypeNode: Mh,
  isTypeSystemDefinitionNode: Ps,
  isTypeDefinitionNode: Un,
  isTypeSystemExtensionNode: xs,
  isTypeExtensionNode: Yi,
  execute: zi,
  executeSync: _l,
  defaultFieldResolver: Qo,
  defaultTypeResolver: Ol,
  responsePathAsArray: rt,
  getArgumentValues: Qi,
  getVariableValues: nl,
  getDirectiveValues: yr,
  subscribe: Im,
  createSourceEventStream: Cl,
  validate: bl,
  ValidationContext: El,
  specifiedRules: yl,
  ExecutableDefinitionsRule: kc,
  FieldsOnCorrectTypeRule: Pc,
  FragmentsOnCompositeTypesRule: xc,
  KnownArgumentNamesRule: Fc,
  KnownDirectivesRule: Fs,
  KnownFragmentNamesRule: Mc,
  KnownTypeNamesRule: js,
  LoneAnonymousOperationRule: $c,
  NoFragmentCyclesRule: Vc,
  NoUndefinedVariablesRule: Bc,
  NoUnusedFragmentsRule: qc,
  NoUnusedVariablesRule: Gc,
  OverlappingFieldsCanBeMergedRule: Yc,
  PossibleFragmentSpreadsRule: zc,
  ProvidedRequiredArgumentsRule: Jc,
  ScalarLeafsRule: Zc,
  SingleFieldSubscriptionsRule: il,
  UniqueArgumentNamesRule: Vs,
  UniqueDirectivesPerLocationRule: Bs,
  UniqueFragmentNamesRule: cl,
  UniqueInputFieldNamesRule: qs,
  UniqueOperationNamesRule: ll,
  UniqueVariableNamesRule: pl,
  ValuesOfCorrectTypeRule: hl,
  VariablesAreInputTypesRule: ml,
  VariablesInAllowedPositionRule: vl,
  LoneSchemaDefinitionRule: Uc,
  UniqueOperationTypesRule: fl,
  UniqueTypeNamesRule: dl,
  UniqueEnumValueNamesRule: al,
  UniqueFieldDefinitionNamesRule: ul,
  UniqueArgumentDefinitionNamesRule: ol,
  UniqueDirectiveNamesRule: sl,
  PossibleTypeExtensionsRule: Xc,
  NoDeprecatedCustomRule: Am,
  NoSchemaIntrospectionCustomRule: Rm,
  GraphQLError: F,
  syntaxError: Ye,
  locatedError: Ln,
  printError: Ap,
  formatError: Rp,
  getIntrospectionQuery: Ll,
  getOperationAST: Dm,
  getOperationRootType: Cm,
  introspectionFromSchema: Lm,
  buildClientSchema: km,
  buildASTSchema: Pl,
  buildSchema: xm,
  extendSchema: Pm,
  lexicographicSortSchema: Fm,
  printSchema: jm,
  printType: jl,
  printIntrospectionSchema: Mm,
  typeFromAST: tt,
  valueFromAST: Rt,
  valueFromASTUntyped: ai,
  astFromValue: Jt,
  TypeInfo: Cs,
  visitWithTypeInfo: Ls,
  coerceInputValue: tl,
  concatAST: Xm,
  separateOperations: Jm,
  stripIgnoredCharacters: Km,
  isEqualType: ui,
  isTypeSubTypeOf: an,
  doTypesOverlap: qo,
  assertValidName: Zm,
  isValidNameError: Bl,
  get BreakingChangeType() {
    return ke;
  },
  get DangerousChangeType() {
    return It;
  },
  findBreakingChanges: ev,
  findDangerousChanges: tv
}, Symbol.toStringTag, { value: "Module" })), Gl = /* @__PURE__ */ $u(uv);
function cv(e) {
  for (var t = [], n = 0; n < e.length; ) {
    var r = e[n];
    if (r === "*" || r === "+" || r === "?") {
      t.push({ type: "MODIFIER", index: n, value: e[n++] });
      continue;
    }
    if (r === "\\") {
      t.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
      continue;
    }
    if (r === "{") {
      t.push({ type: "OPEN", index: n, value: e[n++] });
      continue;
    }
    if (r === "}") {
      t.push({ type: "CLOSE", index: n, value: e[n++] });
      continue;
    }
    if (r === ":") {
      for (var i = "", o = n + 1; o < e.length; ) {
        var s = e.charCodeAt(o);
        if (s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 || s === 95) {
          i += e[o++];
          continue;
        }
        break;
      }
      if (!i)
        throw new TypeError("Missing parameter name at ".concat(n));
      t.push({ type: "NAME", index: n, value: i }), n = o;
      continue;
    }
    if (r === "(") {
      var a = 1, u = "", o = n + 1;
      if (e[o] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(o));
      for (; o < e.length; ) {
        if (e[o] === "\\") {
          u += e[o++] + e[o++];
          continue;
        }
        if (e[o] === ")") {
          if (a--, a === 0) {
            o++;
            break;
          }
        } else if (e[o] === "(" && (a++, e[o + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(o));
        u += e[o++];
      }
      if (a)
        throw new TypeError("Unbalanced pattern at ".concat(n));
      if (!u)
        throw new TypeError("Missing pattern at ".concat(n));
      t.push({ type: "PATTERN", index: n, value: u }), n = o;
      continue;
    }
    t.push({ type: "CHAR", index: n, value: e[n++] });
  }
  return t.push({ type: "END", index: n, value: "" }), t;
}
function Ys(e, t) {
  t === void 0 && (t = {});
  for (var n = cv(e), r = t.prefixes, i = r === void 0 ? "./" : r, o = "[^".concat(_n(t.delimiter || "/#?"), "]+?"), s = [], a = 0, u = 0, c = "", l = function(w) {
    if (u < n.length && n[u].type === w)
      return n[u++].value;
  }, f = function(w) {
    var P = l(w);
    if (P !== void 0)
      return P;
    var B = n[u], b = B.type, R = B.index;
    throw new TypeError("Unexpected ".concat(b, " at ").concat(R, ", expected ").concat(w));
  }, d = function() {
    for (var w = "", P; P = l("CHAR") || l("ESCAPED_CHAR"); )
      w += P;
    return w;
  }; u < n.length; ) {
    var p = l("CHAR"), E = l("NAME"), y = l("PATTERN");
    if (E || y) {
      var g = p || "";
      i.indexOf(g) === -1 && (c += g, g = ""), c && (s.push(c), c = ""), s.push({
        name: E || a++,
        prefix: g,
        suffix: "",
        pattern: y || o,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    var S = p || l("ESCAPED_CHAR");
    if (S) {
      c += S;
      continue;
    }
    c && (s.push(c), c = "");
    var D = l("OPEN");
    if (D) {
      var g = d(), L = l("NAME") || "", N = l("PATTERN") || "", C = d();
      f("CLOSE"), s.push({
        name: L || (N ? a++ : ""),
        pattern: L && !N ? o : N,
        prefix: g,
        suffix: C,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    f("END");
  }
  return s;
}
function lv(e, t) {
  return Hl(Ys(e, t), t);
}
function Hl(e, t) {
  t === void 0 && (t = {});
  var n = Ws(t), r = t.encode, i = r === void 0 ? function(u) {
    return u;
  } : r, o = t.validate, s = o === void 0 ? !0 : o, a = e.map(function(u) {
    if (typeof u == "object")
      return new RegExp("^(?:".concat(u.pattern, ")$"), n);
  });
  return function(u) {
    for (var c = "", l = 0; l < e.length; l++) {
      var f = e[l];
      if (typeof f == "string") {
        c += f;
        continue;
      }
      var d = u ? u[f.name] : void 0, p = f.modifier === "?" || f.modifier === "*", E = f.modifier === "*" || f.modifier === "+";
      if (Array.isArray(d)) {
        if (!E)
          throw new TypeError('Expected "'.concat(f.name, '" to not repeat, but got an array'));
        if (d.length === 0) {
          if (p)
            continue;
          throw new TypeError('Expected "'.concat(f.name, '" to not be empty'));
        }
        for (var y = 0; y < d.length; y++) {
          var g = i(d[y], f);
          if (s && !a[l].test(g))
            throw new TypeError('Expected all "'.concat(f.name, '" to match "').concat(f.pattern, '", but got "').concat(g, '"'));
          c += f.prefix + g + f.suffix;
        }
        continue;
      }
      if (typeof d == "string" || typeof d == "number") {
        var g = i(String(d), f);
        if (s && !a[l].test(g))
          throw new TypeError('Expected "'.concat(f.name, '" to match "').concat(f.pattern, '", but got "').concat(g, '"'));
        c += f.prefix + g + f.suffix;
        continue;
      }
      if (!p) {
        var S = E ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(f.name, '" to be ').concat(S));
      }
    }
    return c;
  };
}
function fv(e, t) {
  var n = [], r = Qs(e, n, t);
  return Yl(r, n, t);
}
function Yl(e, t, n) {
  n === void 0 && (n = {});
  var r = n.decode, i = r === void 0 ? function(o) {
    return o;
  } : r;
  return function(o) {
    var s = e.exec(o);
    if (!s)
      return !1;
    for (var a = s[0], u = s.index, c = /* @__PURE__ */ Object.create(null), l = function(d) {
      if (s[d] === void 0)
        return "continue";
      var p = t[d - 1];
      p.modifier === "*" || p.modifier === "+" ? c[p.name] = s[d].split(p.prefix + p.suffix).map(function(E) {
        return i(E, p);
      }) : c[p.name] = i(s[d], p);
    }, f = 1; f < s.length; f++)
      l(f);
    return { path: a, index: u, params: c };
  };
}
function _n(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Ws(e) {
  return e && e.sensitive ? "" : "i";
}
function dv(e, t) {
  if (!t)
    return e;
  for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, i = n.exec(e.source); i; )
    t.push({
      name: i[1] || r++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), i = n.exec(e.source);
  return e;
}
function pv(e, t, n) {
  var r = e.map(function(i) {
    return Qs(i, t, n).source;
  });
  return new RegExp("(?:".concat(r.join("|"), ")"), Ws(n));
}
function hv(e, t, n) {
  return Wl(Ys(e, n), t, n);
}
function Wl(e, t, n) {
  n === void 0 && (n = {});
  for (var r = n.strict, i = r === void 0 ? !1 : r, o = n.start, s = o === void 0 ? !0 : o, a = n.end, u = a === void 0 ? !0 : a, c = n.encode, l = c === void 0 ? function(R) {
    return R;
  } : c, f = n.delimiter, d = f === void 0 ? "/#?" : f, p = n.endsWith, E = p === void 0 ? "" : p, y = "[".concat(_n(E), "]|$"), g = "[".concat(_n(d), "]"), S = s ? "^" : "", D = 0, L = e; D < L.length; D++) {
    var N = L[D];
    if (typeof N == "string")
      S += _n(l(N));
    else {
      var C = _n(l(N.prefix)), w = _n(l(N.suffix));
      if (N.pattern)
        if (t && t.push(N), C || w)
          if (N.modifier === "+" || N.modifier === "*") {
            var P = N.modifier === "*" ? "?" : "";
            S += "(?:".concat(C, "((?:").concat(N.pattern, ")(?:").concat(w).concat(C, "(?:").concat(N.pattern, "))*)").concat(w, ")").concat(P);
          } else
            S += "(?:".concat(C, "(").concat(N.pattern, ")").concat(w, ")").concat(N.modifier);
        else
          N.modifier === "+" || N.modifier === "*" ? S += "((?:".concat(N.pattern, ")").concat(N.modifier, ")") : S += "(".concat(N.pattern, ")").concat(N.modifier);
      else
        S += "(?:".concat(C).concat(w, ")").concat(N.modifier);
    }
  }
  if (u)
    i || (S += "".concat(g, "?")), S += n.endsWith ? "(?=".concat(y, ")") : "$";
  else {
    var B = e[e.length - 1], b = typeof B == "string" ? g.indexOf(B[B.length - 1]) > -1 : B === void 0;
    i || (S += "(?:".concat(g, "(?=").concat(y, "))?")), b || (S += "(?=".concat(g, "|").concat(y, ")"));
  }
  return new RegExp(S, Ws(n));
}
function Qs(e, t, n) {
  return e instanceof RegExp ? dv(e, t) : Array.isArray(e) ? pv(e, t, n) : hv(e, t, n);
}
const mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parse: Ys,
  compile: lv,
  tokensToFunction: Hl,
  match: fv,
  regexpToFunction: Yl,
  tokensToRegexp: Wl,
  pathToRegexp: Qs
}, Symbol.toStringTag, { value: "Module" })), vv = /* @__PURE__ */ $u(mv);
var zn = {}, Xn = {}, cu;
function Ql() {
  if (cu)
    return Xn;
  cu = 1, Object.defineProperty(Xn, "__esModule", { value: !0 }), Xn.toIsoResponse = void 0;
  var e = yt;
  function t(n) {
    return {
      status: n.status || 200,
      statusText: n.statusText || "OK",
      headers: e.objectToHeaders(n.headers || {}),
      body: n.body
    };
  }
  return Xn.toIsoResponse = t, Xn;
}
var lu;
function yv() {
  if (lu)
    return zn;
  lu = 1;
  var e = W && W.__extends || function() {
    var E = function(y, g) {
      return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, D) {
        S.__proto__ = D;
      } || function(S, D) {
        for (var L in D)
          Object.prototype.hasOwnProperty.call(D, L) && (S[L] = D[L]);
      }, E(y, g);
    };
    return function(y, g) {
      if (typeof g != "function" && g !== null)
        throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
      E(y, g);
      function S() {
        this.constructor = y;
      }
      y.prototype = g === null ? Object.create(g) : (S.prototype = g.prototype, new S());
    };
  }(), t = W && W.__assign || function() {
    return t = Object.assign || function(E) {
      for (var y, g = 1, S = arguments.length; g < S; g++) {
        y = arguments[g];
        for (var D in y)
          Object.prototype.hasOwnProperty.call(y, D) && (E[D] = y[D]);
      }
      return E;
    }, t.apply(this, arguments);
  }, n = W && W.__awaiter || function(E, y, g, S) {
    function D(L) {
      return L instanceof g ? L : new g(function(N) {
        N(L);
      });
    }
    return new (g || (g = Promise))(function(L, N) {
      function C(B) {
        try {
          P(S.next(B));
        } catch (b) {
          N(b);
        }
      }
      function w(B) {
        try {
          P(S.throw(B));
        } catch (b) {
          N(b);
        }
      }
      function P(B) {
        B.done ? L(B.value) : D(B.value).then(C, w);
      }
      P((S = S.apply(E, y || [])).next());
    });
  }, r = W && W.__generator || function(E, y) {
    var g = { label: 0, sent: function() {
      if (L[0] & 1)
        throw L[1];
      return L[1];
    }, trys: [], ops: [] }, S, D, L, N;
    return N = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
      return this;
    }), N;
    function C(P) {
      return function(B) {
        return w([P, B]);
      };
    }
    function w(P) {
      if (S)
        throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (S = 1, D && (L = P[0] & 2 ? D.return : P[0] ? D.throw || ((L = D.return) && L.call(D), 0) : D.next) && !(L = L.call(D, P[1])).done)
            return L;
          switch (D = 0, L && (P = [P[0] & 2, L.value]), P[0]) {
            case 0:
            case 1:
              L = P;
              break;
            case 4:
              return g.label++, { value: P[1], done: !1 };
            case 5:
              g.label++, D = P[1], P = [0];
              continue;
            case 7:
              P = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (L = g.trys, !(L = L.length > 0 && L[L.length - 1]) && (P[0] === 6 || P[0] === 2)) {
                g = 0;
                continue;
              }
              if (P[0] === 3 && (!L || P[1] > L[0] && P[1] < L[3])) {
                g.label = P[1];
                break;
              }
              if (P[0] === 6 && g.label < L[1]) {
                g.label = L[1], L = P;
                break;
              }
              if (L && g.label < L[2]) {
                g.label = L[2], g.ops.push(P);
                break;
              }
              L[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          P = y.call(E, g);
        } catch (B) {
          P = [6, B], D = 0;
        } finally {
          S = L = 0;
        }
      if (P[0] & 5)
        throw P[1];
      return { value: P[0] ? P[1] : void 0, done: !0 };
    }
  }, i = W && W.__read || function(E, y) {
    var g = typeof Symbol == "function" && E[Symbol.iterator];
    if (!g)
      return E;
    var S = g.call(E), D, L = [], N;
    try {
      for (; (y === void 0 || y-- > 0) && !(D = S.next()).done; )
        L.push(D.value);
    } catch (C) {
      N = { error: C };
    } finally {
      try {
        D && !D.done && (g = S.return) && g.call(S);
      } finally {
        if (N)
          throw N.error;
      }
    }
    return L;
  };
  Object.defineProperty(zn, "__esModule", { value: !0 }), zn.FetchInterceptor = void 0;
  var o = yt, s = hn, a = mn, u = xn, c = wr, l = Ql(), f = Fn, d = function(E) {
    e(y, E);
    function y() {
      return E.call(this, y.symbol) || this;
    }
    return y.prototype.checkEnvironment = function() {
      return typeof globalThis < "u" && typeof globalThis.fetch < "u";
    }, y.prototype.setup = function() {
      var g = this, S = globalThis.fetch;
      s.invariant(!S[u.IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.'), globalThis.fetch = function(D, L) {
        return n(g, void 0, void 0, function() {
          var N, C, w, P, B, b, R, k, q, j, Q = this;
          return r(this, function(Y) {
            switch (Y.label) {
              case 0:
                return N = new Request(D, L), C = typeof D == "string" ? D : D.url, w = N.method, this.log("[%s] %s", w, C), [4, N.clone().arrayBuffer()];
              case 1:
                return P = Y.sent(), B = new a.IsomorphicRequest(new URL(C, location.origin), {
                  body: P,
                  method: w,
                  headers: new o.Headers(N.headers),
                  credentials: N.credentials
                }), b = new f.InteractiveIsomorphicRequest(B), this.log("isomorphic request", b), this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request")), this.emitter.emit("request", b), this.log("awaiting for the mocked response..."), [4, this.emitter.untilIdle("request", function(ne) {
                  var G = i(ne.args, 1), K = G[0];
                  return K.id === b.id;
                })];
              case 2:
                return Y.sent(), this.log("all request listeners have been resolved!"), [4, b.respondWith.invoked()];
              case 3:
                return R = i.apply(void 0, [Y.sent(), 1]), k = R[0], this.log("event.respondWith called with:", k), k ? (this.log("received mocked response:", k), q = l.toIsoResponse(k), this.log("derived isomorphic response:", q), this.emitter.emit("response", b, q), j = new Response(k.body, t(t({}, q), {
                  headers: o.flattenHeadersObject(k.headers || {})
                })), Object.defineProperty(j, "url", {
                  writable: !1,
                  enumerable: !0,
                  configurable: !1,
                  value: b.url.href
                }), [2, j]) : (this.log("no mocked response received!"), [2, S(N).then(function(ne) {
                  return n(Q, void 0, void 0, function() {
                    var G, K, Z, ie;
                    return r(this, function(ue) {
                      switch (ue.label) {
                        case 0:
                          return G = ne.clone(), this.log("original fetch performed", G), Z = (K = this.emitter).emit, ie = [
                            "response",
                            b
                          ], [4, p(G)];
                        case 1:
                          return Z.apply(K, ie.concat([ue.sent()])), [2, ne];
                      }
                    });
                  });
                })]);
            }
          });
        });
      }, Object.defineProperty(globalThis.fetch, u.IS_PATCHED_MODULE, {
        enumerable: !0,
        configurable: !0,
        value: !0
      }), this.subscriptions.push(function() {
        Object.defineProperty(globalThis.fetch, u.IS_PATCHED_MODULE, {
          value: void 0
        }), globalThis.fetch = S, g.log('restored native "globalThis.fetch"!', globalThis.fetch.name);
      });
    }, y.symbol = Symbol("fetch"), y;
  }(c.Interceptor);
  zn.FetchInterceptor = d;
  function p(E) {
    return n(this, void 0, void 0, function() {
      var y;
      return r(this, function(g) {
        switch (g.label) {
          case 0:
            return y = {
              status: E.status,
              statusText: E.statusText,
              headers: o.objectToHeaders(o.headersToObject(E.headers))
            }, [4, E.text()];
          case 1:
            return [2, (y.body = g.sent(), y)];
        }
      });
    });
  }
  return zn;
}
var Jn = {}, Kn = {}, Zn = {}, Vt = {}, er = {}, fu;
function Xi() {
  if (fu)
    return er;
  fu = 1;
  function e(r, i) {
    return i === void 0 && (i = Object), i && typeof i.freeze == "function" ? i.freeze(r) : r;
  }
  var t = e({
    HTML: "text/html",
    isHTML: function(r) {
      return r === t.HTML;
    },
    XML_APPLICATION: "application/xml",
    XML_TEXT: "text/xml",
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    XML_SVG_IMAGE: "image/svg+xml"
  }), n = e({
    HTML: "http://www.w3.org/1999/xhtml",
    isHTML: function(r) {
      return r === n.HTML;
    },
    SVG: "http://www.w3.org/2000/svg",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
  });
  return er.freeze = e, er.MIME_TYPE = t, er.NAMESPACE = n, er;
}
var du;
function zl() {
  if (du)
    return Vt;
  du = 1;
  var e = Xi(), t = e.NAMESPACE;
  function n(h) {
    return h !== "";
  }
  function r(h) {
    return h ? h.split(/[\t\n\f\r ]+/).filter(n) : [];
  }
  function i(h, v) {
    return h.hasOwnProperty(v) || (h[v] = !0), h;
  }
  function o(h) {
    if (!h)
      return [];
    var v = r(h);
    return Object.keys(v.reduce(i, {}));
  }
  function s(h) {
    return function(v) {
      return h && h.indexOf(v) !== -1;
    };
  }
  function a(h, v) {
    for (var I in h)
      v[I] = h[I];
  }
  function u(h, v) {
    var I = h.prototype;
    if (!(I instanceof v)) {
      let x = function() {
      };
      x.prototype = v.prototype, x = new x(), a(I, x), h.prototype = I = x;
    }
    I.constructor != h && (typeof h != "function" && console.error("unknown Class:" + h), I.constructor = h);
  }
  var c = {}, l = c.ELEMENT_NODE = 1, f = c.ATTRIBUTE_NODE = 2, d = c.TEXT_NODE = 3, p = c.CDATA_SECTION_NODE = 4, E = c.ENTITY_REFERENCE_NODE = 5, y = c.ENTITY_NODE = 6, g = c.PROCESSING_INSTRUCTION_NODE = 7, S = c.COMMENT_NODE = 8, D = c.DOCUMENT_NODE = 9, L = c.DOCUMENT_TYPE_NODE = 10, N = c.DOCUMENT_FRAGMENT_NODE = 11, C = c.NOTATION_NODE = 12, w = {}, P = {};
  w.INDEX_SIZE_ERR = (P[1] = "Index size error", 1), w.DOMSTRING_SIZE_ERR = (P[2] = "DOMString size error", 2);
  var B = w.HIERARCHY_REQUEST_ERR = (P[3] = "Hierarchy request error", 3);
  w.WRONG_DOCUMENT_ERR = (P[4] = "Wrong document", 4), w.INVALID_CHARACTER_ERR = (P[5] = "Invalid character", 5), w.NO_DATA_ALLOWED_ERR = (P[6] = "No data allowed", 6), w.NO_MODIFICATION_ALLOWED_ERR = (P[7] = "No modification allowed", 7);
  var b = w.NOT_FOUND_ERR = (P[8] = "Not found", 8);
  w.NOT_SUPPORTED_ERR = (P[9] = "Not supported", 9);
  var R = w.INUSE_ATTRIBUTE_ERR = (P[10] = "Attribute in use", 10);
  w.INVALID_STATE_ERR = (P[11] = "Invalid state", 11), w.SYNTAX_ERR = (P[12] = "Syntax error", 12), w.INVALID_MODIFICATION_ERR = (P[13] = "Invalid modification", 13), w.NAMESPACE_ERR = (P[14] = "Invalid namespace", 14), w.INVALID_ACCESS_ERR = (P[15] = "Invalid access", 15);
  function k(h, v) {
    if (v instanceof Error)
      var I = v;
    else
      I = this, Error.call(this, P[h]), this.message = P[h], Error.captureStackTrace && Error.captureStackTrace(this, k);
    return I.code = h, v && (this.message = this.message + ": " + v), I;
  }
  k.prototype = Error.prototype, a(w, k);
  function q() {
  }
  q.prototype = {
    length: 0,
    item: function(h) {
      return this[h] || null;
    },
    toString: function(h, v) {
      for (var I = [], x = 0; x < this.length; x++)
        Ft(this[x], I, h, v);
      return I.join("");
    }
  };
  function j(h, v) {
    this._node = h, this._refresh = v, Q(this);
  }
  function Q(h) {
    var v = h._node._inc || h._node.ownerDocument._inc;
    if (h._inc != v) {
      var I = h._refresh(h._node);
      Gn(h, "length", I.length), a(I, h), h._inc = v;
    }
  }
  j.prototype.item = function(h) {
    return Q(this), this[h];
  }, u(j, q);
  function Y() {
  }
  function ne(h, v) {
    for (var I = h.length; I--; )
      if (h[I] === v)
        return I;
  }
  function G(h, v, I, x) {
    if (x ? v[ne(v, x)] = I : v[v.length++] = I, h) {
      I.ownerElement = h;
      var X = h.ownerDocument;
      X && (x && M(X, h, x), A(X, h, I));
    }
  }
  function K(h, v, I) {
    var x = ne(v, I);
    if (x >= 0) {
      for (var X = v.length - 1; x < X; )
        v[x] = v[++x];
      if (v.length = X, h) {
        var ve = h.ownerDocument;
        ve && (M(ve, h, I), I.ownerElement = null);
      }
    } else
      throw k(b, new Error(h.tagName + "@" + I));
  }
  Y.prototype = {
    length: 0,
    item: q.prototype.item,
    getNamedItem: function(h) {
      for (var v = this.length; v--; ) {
        var I = this[v];
        if (I.nodeName == h)
          return I;
      }
    },
    setNamedItem: function(h) {
      var v = h.ownerElement;
      if (v && v != this._ownerElement)
        throw new k(R);
      var I = this.getNamedItem(h.nodeName);
      return G(this._ownerElement, this, h, I), I;
    },
    setNamedItemNS: function(h) {
      var v = h.ownerElement, I;
      if (v && v != this._ownerElement)
        throw new k(R);
      return I = this.getNamedItemNS(h.namespaceURI, h.localName), G(this._ownerElement, this, h, I), I;
    },
    removeNamedItem: function(h) {
      var v = this.getNamedItem(h);
      return K(this._ownerElement, this, v), v;
    },
    removeNamedItemNS: function(h, v) {
      var I = this.getNamedItemNS(h, v);
      return K(this._ownerElement, this, I), I;
    },
    getNamedItemNS: function(h, v) {
      for (var I = this.length; I--; ) {
        var x = this[I];
        if (x.localName == v && x.namespaceURI == h)
          return x;
      }
      return null;
    }
  };
  function Z() {
  }
  Z.prototype = {
    hasFeature: function(h, v) {
      return !0;
    },
    createDocument: function(h, v, I) {
      var x = new O();
      if (x.implementation = this, x.childNodes = new q(), x.doctype = I || null, I && x.appendChild(I), v) {
        var X = x.createElementNS(h, v);
        x.appendChild(X);
      }
      return x;
    },
    createDocumentType: function(h, v, I) {
      var x = new we();
      return x.name = h, x.nodeName = h, x.publicId = v || "", x.systemId = I || "", x;
    }
  };
  function ie() {
  }
  ie.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(h, v) {
      return z(this, h, v);
    },
    replaceChild: function(h, v) {
      this.insertBefore(h, v), v && this.removeChild(v);
    },
    removeChild: function(h) {
      return re(this, h);
    },
    appendChild: function(h) {
      return this.insertBefore(h, null);
    },
    hasChildNodes: function() {
      return this.firstChild != null;
    },
    cloneNode: function(h) {
      return qn(this.ownerDocument || this, this, h);
    },
    normalize: function() {
      for (var h = this.firstChild; h; ) {
        var v = h.nextSibling;
        v && v.nodeType == d && h.nodeType == d ? (this.removeChild(v), h.appendData(v.data)) : (h.normalize(), h = v);
      }
    },
    isSupported: function(h, v) {
      return this.ownerDocument.implementation.hasFeature(h, v);
    },
    hasAttributes: function() {
      return this.attributes.length > 0;
    },
    lookupPrefix: function(h) {
      for (var v = this; v; ) {
        var I = v._nsMap;
        if (I) {
          for (var x in I)
            if (I[x] == h)
              return x;
        }
        v = v.nodeType == f ? v.ownerDocument : v.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function(h) {
      for (var v = this; v; ) {
        var I = v._nsMap;
        if (I && h in I)
          return I[h];
        v = v.nodeType == f ? v.ownerDocument : v.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function(h) {
      var v = this.lookupPrefix(h);
      return v == null;
    }
  };
  function ue(h) {
    return h == "<" && "&lt;" || h == ">" && "&gt;" || h == "&" && "&amp;" || h == '"' && "&quot;" || "&#" + h.charCodeAt() + ";";
  }
  a(c, ie), a(c, ie.prototype);
  function m(h, v) {
    if (v(h))
      return !0;
    if (h = h.firstChild)
      do
        if (m(h, v))
          return !0;
      while (h = h.nextSibling);
  }
  function O() {
  }
  function A(h, v, I) {
    h && h._inc++;
    var x = I.namespaceURI;
    x === t.XMLNS && (v._nsMap[I.prefix ? I.localName : ""] = I.value);
  }
  function M(h, v, I, x) {
    h && h._inc++;
    var X = I.namespaceURI;
    X === t.XMLNS && delete v._nsMap[I.prefix ? I.localName : ""];
  }
  function ee(h, v, I) {
    if (h && h._inc) {
      h._inc++;
      var x = v.childNodes;
      if (I)
        x[x.length++] = I;
      else {
        for (var X = v.firstChild, ve = 0; X; )
          x[ve++] = X, X = X.nextSibling;
        x.length = ve;
      }
    }
  }
  function re(h, v) {
    var I = v.previousSibling, x = v.nextSibling;
    return I ? I.nextSibling = x : h.firstChild = x, x ? x.previousSibling = I : h.lastChild = I, ee(h.ownerDocument, h), v;
  }
  function z(h, v, I) {
    var x = v.parentNode;
    if (x && x.removeChild(v), v.nodeType === N) {
      var X = v.firstChild;
      if (X == null)
        return v;
      var ve = v.lastChild;
    } else
      X = ve = v;
    var je = I ? I.previousSibling : h.lastChild;
    X.previousSibling = je, ve.nextSibling = I, je ? je.nextSibling = X : h.firstChild = X, I == null ? h.lastChild = ve : I.previousSibling = ve;
    do
      X.parentNode = h;
    while (X !== ve && (X = X.nextSibling));
    return ee(h.ownerDocument || h, h), v.nodeType == N && (v.firstChild = v.lastChild = null), v;
  }
  function se(h, v) {
    var I = v.parentNode;
    if (I) {
      var x = h.lastChild;
      I.removeChild(v);
      var x = h.lastChild;
    }
    var x = h.lastChild;
    return v.parentNode = h, v.previousSibling = x, v.nextSibling = null, x ? x.nextSibling = v : h.firstChild = v, h.lastChild = v, ee(h.ownerDocument, h, v), v;
  }
  O.prototype = {
    nodeName: "#document",
    nodeType: D,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(h, v) {
      if (h.nodeType == N) {
        for (var I = h.firstChild; I; ) {
          var x = I.nextSibling;
          this.insertBefore(I, v), I = x;
        }
        return h;
      }
      return this.documentElement == null && h.nodeType == l && (this.documentElement = h), z(this, h, v), h.ownerDocument = this, h;
    },
    removeChild: function(h) {
      return this.documentElement == h && (this.documentElement = null), re(this, h);
    },
    importNode: function(h, v) {
      return Yt(this, h, v);
    },
    getElementById: function(h) {
      var v = null;
      return m(this.documentElement, function(I) {
        if (I.nodeType == l && I.getAttribute("id") == h)
          return v = I, !0;
      }), v;
    },
    getElementsByClassName: function(h) {
      var v = o(h);
      return new j(this, function(I) {
        var x = [];
        return v.length > 0 && m(I.documentElement, function(X) {
          if (X !== I && X.nodeType === l) {
            var ve = X.getAttribute("class");
            if (ve) {
              var je = h === ve;
              if (!je) {
                var bt = o(ve);
                je = v.every(s(bt));
              }
              je && x.push(X);
            }
          }
        }), x;
      });
    },
    createElement: function(h) {
      var v = new ce();
      v.ownerDocument = this, v.nodeName = h, v.tagName = h, v.localName = h, v.childNodes = new q();
      var I = v.attributes = new Y();
      return I._ownerElement = v, v;
    },
    createDocumentFragment: function() {
      var h = new Et();
      return h.ownerDocument = this, h.childNodes = new q(), h;
    },
    createTextNode: function(h) {
      var v = new ct();
      return v.ownerDocument = this, v.appendData(h), v;
    },
    createComment: function(h) {
      var v = new Re();
      return v.ownerDocument = this, v.appendData(h), v;
    },
    createCDATASection: function(h) {
      var v = new We();
      return v.ownerDocument = this, v.appendData(h), v;
    },
    createProcessingInstruction: function(h, v) {
      var I = new Ne();
      return I.ownerDocument = this, I.tagName = I.target = h, I.nodeValue = I.data = v, I;
    },
    createAttribute: function(h) {
      var v = new _e();
      return v.ownerDocument = this, v.name = h, v.nodeName = h, v.localName = h, v.specified = !0, v;
    },
    createEntityReference: function(h) {
      var v = new V();
      return v.ownerDocument = this, v.nodeName = h, v;
    },
    createElementNS: function(h, v) {
      var I = new ce(), x = v.split(":"), X = I.attributes = new Y();
      return I.childNodes = new q(), I.ownerDocument = this, I.nodeName = v, I.tagName = v, I.namespaceURI = h, x.length == 2 ? (I.prefix = x[0], I.localName = x[1]) : I.localName = v, X._ownerElement = I, I;
    },
    createAttributeNS: function(h, v) {
      var I = new _e(), x = v.split(":");
      return I.ownerDocument = this, I.nodeName = v, I.name = v, I.namespaceURI = h, I.specified = !0, x.length == 2 ? (I.prefix = x[0], I.localName = x[1]) : I.localName = v, I;
    }
  }, u(O, ie);
  function ce() {
    this._nsMap = {};
  }
  ce.prototype = {
    nodeType: l,
    hasAttribute: function(h) {
      return this.getAttributeNode(h) != null;
    },
    getAttribute: function(h) {
      var v = this.getAttributeNode(h);
      return v && v.value || "";
    },
    getAttributeNode: function(h) {
      return this.attributes.getNamedItem(h);
    },
    setAttribute: function(h, v) {
      var I = this.ownerDocument.createAttribute(h);
      I.value = I.nodeValue = "" + v, this.setAttributeNode(I);
    },
    removeAttribute: function(h) {
      var v = this.getAttributeNode(h);
      v && this.removeAttributeNode(v);
    },
    appendChild: function(h) {
      return h.nodeType === N ? this.insertBefore(h, null) : se(this, h);
    },
    setAttributeNode: function(h) {
      return this.attributes.setNamedItem(h);
    },
    setAttributeNodeNS: function(h) {
      return this.attributes.setNamedItemNS(h);
    },
    removeAttributeNode: function(h) {
      return this.attributes.removeNamedItem(h.nodeName);
    },
    removeAttributeNS: function(h, v) {
      var I = this.getAttributeNodeNS(h, v);
      I && this.removeAttributeNode(I);
    },
    hasAttributeNS: function(h, v) {
      return this.getAttributeNodeNS(h, v) != null;
    },
    getAttributeNS: function(h, v) {
      var I = this.getAttributeNodeNS(h, v);
      return I && I.value || "";
    },
    setAttributeNS: function(h, v, I) {
      var x = this.ownerDocument.createAttributeNS(h, v);
      x.value = x.nodeValue = "" + I, this.setAttributeNode(x);
    },
    getAttributeNodeNS: function(h, v) {
      return this.attributes.getNamedItemNS(h, v);
    },
    getElementsByTagName: function(h) {
      return new j(this, function(v) {
        var I = [];
        return m(v, function(x) {
          x !== v && x.nodeType == l && (h === "*" || x.tagName == h) && I.push(x);
        }), I;
      });
    },
    getElementsByTagNameNS: function(h, v) {
      return new j(this, function(I) {
        var x = [];
        return m(I, function(X) {
          X !== I && X.nodeType === l && (h === "*" || X.namespaceURI === h) && (v === "*" || X.localName == v) && x.push(X);
        }), x;
      });
    }
  }, O.prototype.getElementsByTagName = ce.prototype.getElementsByTagName, O.prototype.getElementsByTagNameNS = ce.prototype.getElementsByTagNameNS, u(ce, ie);
  function _e() {
  }
  _e.prototype.nodeType = f, u(_e, ie);
  function be() {
  }
  be.prototype = {
    data: "",
    substringData: function(h, v) {
      return this.data.substring(h, h + v);
    },
    appendData: function(h) {
      h = this.data + h, this.nodeValue = this.data = h, this.length = h.length;
    },
    insertData: function(h, v) {
      this.replaceData(h, 0, v);
    },
    appendChild: function(h) {
      throw new Error(P[B]);
    },
    deleteData: function(h, v) {
      this.replaceData(h, v, "");
    },
    replaceData: function(h, v, I) {
      var x = this.data.substring(0, h), X = this.data.substring(h + v);
      I = x + I + X, this.nodeValue = this.data = I, this.length = I.length;
    }
  }, u(be, ie);
  function ct() {
  }
  ct.prototype = {
    nodeName: "#text",
    nodeType: d,
    splitText: function(h) {
      var v = this.data, I = v.substring(h);
      v = v.substring(0, h), this.data = this.nodeValue = v, this.length = v.length;
      var x = this.ownerDocument.createTextNode(I);
      return this.parentNode && this.parentNode.insertBefore(x, this.nextSibling), x;
    }
  }, u(ct, be);
  function Re() {
  }
  Re.prototype = {
    nodeName: "#comment",
    nodeType: S
  }, u(Re, be);
  function We() {
  }
  We.prototype = {
    nodeName: "#cdata-section",
    nodeType: p
  }, u(We, be);
  function we() {
  }
  we.prototype.nodeType = L, u(we, ie);
  function At() {
  }
  At.prototype.nodeType = C, u(At, ie);
  function xt() {
  }
  xt.prototype.nodeType = y, u(xt, ie);
  function V() {
  }
  V.prototype.nodeType = E, u(V, ie);
  function Et() {
  }
  Et.prototype.nodeName = "#document-fragment", Et.prototype.nodeType = N, u(Et, ie);
  function Ne() {
  }
  Ne.prototype.nodeType = g, u(Ne, ie);
  function Ve() {
  }
  Ve.prototype.serializeToString = function(h, v, I) {
    return yn.call(h, v, I);
  }, ie.prototype.toString = yn;
  function yn(h, v) {
    var I = [], x = this.nodeType == 9 && this.documentElement || this, X = x.prefix, ve = x.namespaceURI;
    if (ve && X == null) {
      var X = x.lookupPrefix(ve);
      if (X == null)
        var je = [
          { namespace: ve, prefix: null }
        ];
    }
    return Ft(this, I, h, v, je), I.join("");
  }
  function Mr(h, v, I) {
    var x = h.prefix || "", X = h.namespaceURI;
    if (!X || x === "xml" && X === t.XML || X === t.XMLNS)
      return !1;
    for (var ve = I.length; ve--; ) {
      var je = I[ve];
      if (je.prefix === x)
        return je.namespace !== X;
    }
    return !0;
  }
  function gn(h, v, I) {
    h.push(" ", v, '="', I.replace(/[<&"]/g, ue), '"');
  }
  function Ft(h, v, I, x, X) {
    if (X || (X = []), x)
      if (h = x(h), h) {
        if (typeof h == "string") {
          v.push(h);
          return;
        }
      } else
        return;
    switch (h.nodeType) {
      case l:
        var ve = h.attributes, je = ve.length, He = h.firstChild, bt = h.tagName;
        I = t.isHTML(h.namespaceURI) || I;
        var Wt = bt;
        if (!I && !h.prefix && h.namespaceURI) {
          for (var lt, ft = 0; ft < ve.length; ft++)
            if (ve.item(ft).name === "xmlns") {
              lt = ve.item(ft).value;
              break;
            }
          if (!lt)
            for (var Ze = X.length - 1; Ze >= 0; Ze--) {
              var Tt = X[Ze];
              if (Tt.prefix === "" && Tt.namespace === h.namespaceURI) {
                lt = Tt.namespace;
                break;
              }
            }
          if (lt !== h.namespaceURI)
            for (var Ze = X.length - 1; Ze >= 0; Ze--) {
              var Tt = X[Ze];
              if (Tt.namespace === h.namespaceURI) {
                Tt.prefix && (Wt = Tt.prefix + ":" + bt);
                break;
              }
            }
        }
        v.push("<", Wt);
        for (var _t = 0; _t < je; _t++) {
          var nt = ve.item(_t);
          nt.prefix == "xmlns" ? X.push({ prefix: nt.localName, namespace: nt.value }) : nt.nodeName == "xmlns" && X.push({ prefix: "", namespace: nt.value });
        }
        for (var _t = 0; _t < je; _t++) {
          var nt = ve.item(_t);
          if (Mr(nt, I, X)) {
            var jt = nt.prefix || "", Qt = nt.namespaceURI;
            gn(v, jt ? "xmlns:" + jt : "xmlns", Qt), X.push({ prefix: jt, namespace: Qt });
          }
          Ft(nt, v, I, x, X);
        }
        if (bt === Wt && Mr(h, I, X)) {
          var jt = h.prefix || "", Qt = h.namespaceURI;
          gn(v, jt ? "xmlns:" + jt : "xmlns", Qt), X.push({ prefix: jt, namespace: Qt });
        }
        if (He || I && !/^(?:meta|link|img|br|hr|input)$/i.test(bt)) {
          if (v.push(">"), I && /^script$/i.test(bt))
            for (; He; )
              He.data ? v.push(He.data) : Ft(He, v, I, x, X.slice()), He = He.nextSibling;
          else
            for (; He; )
              Ft(He, v, I, x, X.slice()), He = He.nextSibling;
          v.push("</", Wt, ">");
        } else
          v.push("/>");
        return;
      case D:
      case N:
        for (var He = h.firstChild; He; )
          Ft(He, v, I, x, X.slice()), He = He.nextSibling;
        return;
      case f:
        return gn(v, h.name, h.value);
      case d:
        return v.push(h.data.replace(/[<&]/g, ue).replace(/]]>/g, "]]&gt;"));
      case p:
        return v.push("<![CDATA[", h.data, "]]>");
      case S:
        return v.push("<!--", h.data, "-->");
      case L:
        var Hn = h.publicId, Mt = h.systemId;
        if (v.push("<!DOCTYPE ", h.name), Hn)
          v.push(" PUBLIC ", Hn), Mt && Mt != "." && v.push(" ", Mt), v.push(">");
        else if (Mt && Mt != ".")
          v.push(" SYSTEM ", Mt, ">");
        else {
          var $r = h.internalSubset;
          $r && v.push(" [", $r, "]"), v.push(">");
        }
        return;
      case g:
        return v.push("<?", h.target, " ", h.data, "?>");
      case E:
        return v.push("&", h.nodeName, ";");
      default:
        v.push("??", h.nodeName);
    }
  }
  function Yt(h, v, I) {
    var x;
    switch (v.nodeType) {
      case l:
        x = v.cloneNode(!1), x.ownerDocument = h;
      case N:
        break;
      case f:
        I = !0;
        break;
    }
    if (x || (x = v.cloneNode(!1)), x.ownerDocument = h, x.parentNode = null, I)
      for (var X = v.firstChild; X; )
        x.appendChild(Yt(h, X, I)), X = X.nextSibling;
    return x;
  }
  function qn(h, v, I) {
    var x = new v.constructor();
    for (var X in v) {
      var ve = v[X];
      typeof ve != "object" && ve != x[X] && (x[X] = ve);
    }
    switch (v.childNodes && (x.childNodes = new q()), x.ownerDocument = h, x.nodeType) {
      case l:
        var je = v.attributes, bt = x.attributes = new Y(), Wt = je.length;
        bt._ownerElement = x;
        for (var lt = 0; lt < Wt; lt++)
          x.setAttributeNode(qn(h, je.item(lt), !0));
        break;
      case f:
        I = !0;
    }
    if (I)
      for (var ft = v.firstChild; ft; )
        x.appendChild(qn(h, ft, I)), ft = ft.nextSibling;
    return x;
  }
  function Gn(h, v, I) {
    h[v] = I;
  }
  try {
    if (Object.defineProperty) {
      let h = function(v) {
        switch (v.nodeType) {
          case l:
          case N:
            var I = [];
            for (v = v.firstChild; v; )
              v.nodeType !== 7 && v.nodeType !== 8 && I.push(h(v)), v = v.nextSibling;
            return I.join("");
          default:
            return v.nodeValue;
        }
      };
      Object.defineProperty(j.prototype, "length", {
        get: function() {
          return Q(this), this.$$length;
        }
      }), Object.defineProperty(ie.prototype, "textContent", {
        get: function() {
          return h(this);
        },
        set: function(v) {
          switch (this.nodeType) {
            case l:
            case N:
              for (; this.firstChild; )
                this.removeChild(this.firstChild);
              (v || String(v)) && this.appendChild(this.ownerDocument.createTextNode(v));
              break;
            default:
              this.data = v, this.value = v, this.nodeValue = v;
          }
        }
      }), Gn = function(v, I, x) {
        v["$$" + I] = x;
      };
    }
  } catch {
  }
  return Vt.DocumentType = we, Vt.DOMException = k, Vt.DOMImplementation = Z, Vt.Element = ce, Vt.Node = ie, Vt.NodeList = q, Vt.XMLSerializer = Ve, Vt;
}
var Tn = {}, ko = {}, pu;
function gv() {
  return pu || (pu = 1, function(e) {
    var t = Xi().freeze;
    e.XML_ENTITIES = t({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }), e.HTML_ENTITIES = t({
      lt: "<",
      gt: ">",
      amp: "&",
      quot: '"',
      apos: "'",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      nbsp: "\xA0",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      times: "\xD7",
      divide: "\xF7",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      int: "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      fnof: "\u0192",
      circ: "\u02C6",
      tilde: "\u02DC",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      bull: "\u2022",
      hellip: "\u2026",
      permil: "\u2030",
      prime: "\u2032",
      Prime: "\u2033",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      oline: "\u203E",
      euro: "\u20AC",
      trade: "\u2122",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666"
    }), e.entityMap = e.HTML_ENTITIES;
  }(ko)), ko;
}
var Jr = {}, hu;
function Ev() {
  if (hu)
    return Jr;
  hu = 1;
  var e = Xi().NAMESPACE, t = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, n = new RegExp("[\\-\\.0-9" + t.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), r = new RegExp("^" + t.source + n.source + "*(?::" + t.source + n.source + "*)?$"), i = 0, o = 1, s = 2, a = 3, u = 4, c = 5, l = 6, f = 7;
  function d(b, R) {
    this.message = b, this.locator = R, Error.captureStackTrace && Error.captureStackTrace(this, d);
  }
  d.prototype = new Error(), d.prototype.name = d.name;
  function p() {
  }
  p.prototype = {
    parse: function(b, R, k) {
      var q = this.domBuilder;
      q.startDocument(), N(R, R = {}), E(b, R, k, q, this.errorHandler), q.endDocument();
    }
  };
  function E(b, R, k, q, j) {
    function Q(Ne) {
      if (Ne > 65535) {
        Ne -= 65536;
        var Ve = 55296 + (Ne >> 10), yn = 56320 + (Ne & 1023);
        return String.fromCharCode(Ve, yn);
      } else
        return String.fromCharCode(Ne);
    }
    function Y(Ne) {
      var Ve = Ne.slice(1, -1);
      return Ve in k ? k[Ve] : Ve.charAt(0) === "#" ? Q(parseInt(Ve.substr(1).replace("x", "0x"))) : (j.error("entity not found:" + Ne), Ne);
    }
    function ne(Ne) {
      if (Ne > A) {
        var Ve = b.substring(A, Ne).replace(/&#?\w+;/g, Y);
        ue && G(A), q.characters(Ve, 0, Ne - A), A = Ne;
      }
    }
    function G(Ne, Ve) {
      for (; Ne >= Z && (Ve = ie.exec(b)); )
        K = Ve.index, Z = K + Ve[0].length, ue.lineNumber++;
      ue.columnNumber = Ne - K + 1;
    }
    for (var K = 0, Z = 0, ie = /.*(?:\r\n?|\n)|.*$/g, ue = q.locator, m = [{ currentNSMap: R }], O = {}, A = 0; ; ) {
      try {
        var M = b.indexOf("<", A);
        if (M < 0) {
          if (!b.substr(A).match(/^\s*$/)) {
            var ee = q.doc, re = ee.createTextNode(b.substr(A));
            ee.appendChild(re), q.currentElement = re;
          }
          return;
        }
        switch (M > A && ne(M), b.charAt(M + 1)) {
          case "/":
            var we = b.indexOf(">", M + 3), z = b.substring(M + 2, we).replace(/[ \t\n\r]+$/g, ""), se = m.pop();
            we < 0 ? (z = b.substring(M + 2).replace(/[\s<].*/, ""), j.error("end tag name: " + z + " is not complete:" + se.tagName), we = M + 1 + z.length) : z.match(/\s</) && (z = z.replace(/[\s<].*/, ""), j.error("end tag name: " + z + " maybe not complete"), we = M + 1 + z.length);
            var ce = se.localNSMap, _e = se.tagName == z, be = _e || se.tagName && se.tagName.toLowerCase() == z.toLowerCase();
            if (be) {
              if (q.endElement(se.uri, se.localName, z), ce)
                for (var ct in ce)
                  q.endPrefixMapping(ct);
              _e || j.fatalError("end tag name: " + z + " is not match the current start tagName:" + se.tagName);
            } else
              m.push(se);
            we++;
            break;
          case "?":
            ue && G(M), we = w(b, M, q);
            break;
          case "!":
            ue && G(M), we = C(b, M, q, j);
            break;
          default:
            ue && G(M);
            var Re = new P(), We = m[m.length - 1].currentNSMap, we = g(b, M, Re, We, Y, j), At = Re.length;
            if (!Re.closed && L(b, we, Re.tagName, O) && (Re.closed = !0, k.nbsp || j.warning("unclosed xml attribute")), ue && At) {
              for (var xt = y(ue, {}), V = 0; V < At; V++) {
                var Et = Re[V];
                G(Et.offset), Et.locator = y(ue, {});
              }
              q.locator = xt, S(Re, q, We) && m.push(Re), q.locator = ue;
            } else
              S(Re, q, We) && m.push(Re);
            e.isHTML(Re.uri) && !Re.closed ? we = D(b, we, Re.tagName, Y, q) : we++;
        }
      } catch (Ne) {
        if (Ne instanceof d)
          throw Ne;
        j.error("element parse error: " + Ne), we = -1;
      }
      we > A ? A = we : ne(Math.max(M, A) + 1);
    }
  }
  function y(b, R) {
    return R.lineNumber = b.lineNumber, R.columnNumber = b.columnNumber, R;
  }
  function g(b, R, k, q, j, Q) {
    function Y(ue, m, O) {
      k.attributeNames.hasOwnProperty(ue) && Q.fatalError("Attribute " + ue + " redefined"), k.addValue(ue, m, O);
    }
    for (var ne, G, K = ++R, Z = i; ; ) {
      var ie = b.charAt(K);
      switch (ie) {
        case "=":
          if (Z === o)
            ne = b.slice(R, K), Z = a;
          else if (Z === s)
            Z = a;
          else
            throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (Z === a || Z === o)
            if (Z === o && (Q.warning('attribute value must after "="'), ne = b.slice(R, K)), R = K + 1, K = b.indexOf(ie, R), K > 0)
              G = b.slice(R, K).replace(/&#?\w+;/g, j), Y(ne, G, R - 1), Z = c;
            else
              throw new Error("attribute value no end '" + ie + "' match");
          else if (Z == u)
            G = b.slice(R, K).replace(/&#?\w+;/g, j), Y(ne, G, R), Q.warning('attribute "' + ne + '" missed start quot(' + ie + ")!!"), R = K + 1, Z = c;
          else
            throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (Z) {
            case i:
              k.setTagName(b.slice(R, K));
            case c:
            case l:
            case f:
              Z = f, k.closed = !0;
            case u:
            case o:
            case s:
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return Q.error("unexpected end of input"), Z == i && k.setTagName(b.slice(R, K)), K;
        case ">":
          switch (Z) {
            case i:
              k.setTagName(b.slice(R, K));
            case c:
            case l:
            case f:
              break;
            case u:
            case o:
              G = b.slice(R, K), G.slice(-1) === "/" && (k.closed = !0, G = G.slice(0, -1));
            case s:
              Z === s && (G = ne), Z == u ? (Q.warning('attribute "' + G + '" missed quot(")!'), Y(ne, G.replace(/&#?\w+;/g, j), R)) : ((!e.isHTML(q[""]) || !G.match(/^(?:disabled|checked|selected)$/i)) && Q.warning('attribute "' + G + '" missed value!! "' + G + '" instead!!'), Y(G, G, R));
              break;
            case a:
              throw new Error("attribute value missed!!");
          }
          return K;
        case "\x80":
          ie = " ";
        default:
          if (ie <= " ")
            switch (Z) {
              case i:
                k.setTagName(b.slice(R, K)), Z = l;
                break;
              case o:
                ne = b.slice(R, K), Z = s;
                break;
              case u:
                var G = b.slice(R, K).replace(/&#?\w+;/g, j);
                Q.warning('attribute "' + G + '" missed quot(")!!'), Y(ne, G, R);
              case c:
                Z = l;
                break;
            }
          else
            switch (Z) {
              case s:
                k.tagName, (!e.isHTML(q[""]) || !ne.match(/^(?:disabled|checked|selected)$/i)) && Q.warning('attribute "' + ne + '" missed value!! "' + ne + '" instead2!!'), Y(ne, ne, R), R = K, Z = o;
                break;
              case c:
                Q.warning('attribute space is required"' + ne + '"!!');
              case l:
                Z = o, R = K;
                break;
              case a:
                Z = u, R = K;
                break;
              case f:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
      }
      K++;
    }
  }
  function S(b, R, k) {
    for (var q = b.tagName, j = null, ie = b.length; ie--; ) {
      var Q = b[ie], Y = Q.qName, ne = Q.value, ue = Y.indexOf(":");
      if (ue > 0)
        var G = Q.prefix = Y.slice(0, ue), K = Y.slice(ue + 1), Z = G === "xmlns" && K;
      else
        K = Y, G = null, Z = Y === "xmlns" && "";
      Q.localName = K, Z !== !1 && (j == null && (j = {}, N(k, k = {})), k[Z] = j[Z] = ne, Q.uri = e.XMLNS, R.startPrefixMapping(Z, ne));
    }
    for (var ie = b.length; ie--; ) {
      Q = b[ie];
      var G = Q.prefix;
      G && (G === "xml" && (Q.uri = e.XML), G !== "xmlns" && (Q.uri = k[G || ""]));
    }
    var ue = q.indexOf(":");
    ue > 0 ? (G = b.prefix = q.slice(0, ue), K = b.localName = q.slice(ue + 1)) : (G = null, K = b.localName = q);
    var m = b.uri = k[G || ""];
    if (R.startElement(m, K, q, b), b.closed) {
      if (R.endElement(m, K, q), j)
        for (G in j)
          R.endPrefixMapping(G);
    } else
      return b.currentNSMap = k, b.localNSMap = j, !0;
  }
  function D(b, R, k, q, j) {
    if (/^(?:script|textarea)$/i.test(k)) {
      var Q = b.indexOf("</" + k + ">", R), Y = b.substring(R + 1, Q);
      if (/[&<]/.test(Y))
        return /^script$/i.test(k) ? (j.characters(Y, 0, Y.length), Q) : (Y = Y.replace(/&#?\w+;/g, q), j.characters(Y, 0, Y.length), Q);
    }
    return R + 1;
  }
  function L(b, R, k, q) {
    var j = q[k];
    return j == null && (j = b.lastIndexOf("</" + k + ">"), j < R && (j = b.lastIndexOf("</" + k)), q[k] = j), j < R;
  }
  function N(b, R) {
    for (var k in b)
      R[k] = b[k];
  }
  function C(b, R, k, q) {
    var j = b.charAt(R + 2);
    switch (j) {
      case "-":
        if (b.charAt(R + 3) === "-") {
          var Q = b.indexOf("-->", R + 4);
          return Q > R ? (k.comment(b, R + 4, Q - R - 4), Q + 3) : (q.error("Unclosed comment"), -1);
        } else
          return -1;
      default:
        if (b.substr(R + 3, 6) == "CDATA[") {
          var Q = b.indexOf("]]>", R + 9);
          return k.startCDATA(), k.characters(b, R + 9, Q - R - 9), k.endCDATA(), Q + 3;
        }
        var Y = B(b, R), ne = Y.length;
        if (ne > 1 && /!doctype/i.test(Y[0][0])) {
          var G = Y[1][0], K = !1, Z = !1;
          ne > 3 && (/^public$/i.test(Y[2][0]) ? (K = Y[3][0], Z = ne > 4 && Y[4][0]) : /^system$/i.test(Y[2][0]) && (Z = Y[3][0]));
          var ie = Y[ne - 1];
          return k.startDTD(G, K, Z), k.endDTD(), ie.index + ie[0].length;
        }
    }
    return -1;
  }
  function w(b, R, k) {
    var q = b.indexOf("?>", R);
    if (q) {
      var j = b.substring(R, q).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      return j ? (j[0].length, k.processingInstruction(j[1], j[2]), q + 2) : -1;
    }
    return -1;
  }
  function P() {
    this.attributeNames = {};
  }
  P.prototype = {
    setTagName: function(b) {
      if (!r.test(b))
        throw new Error("invalid tagName:" + b);
      this.tagName = b;
    },
    addValue: function(b, R, k) {
      if (!r.test(b))
        throw new Error("invalid attribute:" + b);
      this.attributeNames[b] = this.length, this[this.length++] = { qName: b, value: R, offset: k };
    },
    length: 0,
    getLocalName: function(b) {
      return this[b].localName;
    },
    getLocator: function(b) {
      return this[b].locator;
    },
    getQName: function(b) {
      return this[b].qName;
    },
    getURI: function(b) {
      return this[b].uri;
    },
    getValue: function(b) {
      return this[b].value;
    }
  };
  function B(b, R) {
    var k, q = [], j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (j.lastIndex = R, j.exec(b); k = j.exec(b); )
      if (q.push(k), k[1])
        return q;
  }
  return Jr.XMLReader = p, Jr.ParseError = d, Jr;
}
var mu;
function bv() {
  if (mu)
    return Tn;
  mu = 1;
  var e = Xi(), t = zl(), n = gv(), r = Ev(), i = t.DOMImplementation, o = e.NAMESPACE, s = r.ParseError, a = r.XMLReader;
  function u(y) {
    this.options = y || { locator: {} };
  }
  u.prototype.parseFromString = function(y, g) {
    var S = this.options, D = new a(), L = S.domBuilder || new l(), N = S.errorHandler, C = S.locator, w = S.xmlns || {}, P = /\/x?html?$/.test(g), B = P ? n.HTML_ENTITIES : n.XML_ENTITIES;
    return C && L.setDocumentLocator(C), D.errorHandler = c(N, L, C), D.domBuilder = S.domBuilder || L, P && (w[""] = o.HTML), w.xml = w.xml || o.XML, y && typeof y == "string" ? D.parse(y, w, B) : D.errorHandler.error("invalid doc source"), L.doc;
  };
  function c(y, g, S) {
    if (!y) {
      if (g instanceof l)
        return g;
      y = g;
    }
    var D = {}, L = y instanceof Function;
    S = S || {};
    function N(C) {
      var w = y[C];
      !w && L && (w = y.length == 2 ? function(P) {
        y(C, P);
      } : y), D[C] = w && function(P) {
        w("[xmldom " + C + "]	" + P + d(S));
      } || function() {
      };
    }
    return N("warning"), N("error"), N("fatalError"), D;
  }
  function l() {
    this.cdata = !1;
  }
  function f(y, g) {
    g.lineNumber = y.lineNumber, g.columnNumber = y.columnNumber;
  }
  l.prototype = {
    startDocument: function() {
      this.doc = new i().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(y, g, S, D) {
      var L = this.doc, N = L.createElementNS(y, S || g), C = D.length;
      E(this, N), this.currentElement = N, this.locator && f(this.locator, N);
      for (var w = 0; w < C; w++) {
        var y = D.getURI(w), P = D.getValue(w), S = D.getQName(w), B = L.createAttributeNS(y, S);
        this.locator && f(D.getLocator(w), B), B.value = B.nodeValue = P, N.setAttributeNode(B);
      }
    },
    endElement: function(y, g, S) {
      var D = this.currentElement;
      D.tagName, this.currentElement = D.parentNode;
    },
    startPrefixMapping: function(y, g) {
    },
    endPrefixMapping: function(y) {
    },
    processingInstruction: function(y, g) {
      var S = this.doc.createProcessingInstruction(y, g);
      this.locator && f(this.locator, S), E(this, S);
    },
    ignorableWhitespace: function(y, g, S) {
    },
    characters: function(y, g, S) {
      if (y = p.apply(this, arguments), y) {
        if (this.cdata)
          var D = this.doc.createCDATASection(y);
        else
          var D = this.doc.createTextNode(y);
        this.currentElement ? this.currentElement.appendChild(D) : /^\s*$/.test(y) && this.doc.appendChild(D), this.locator && f(this.locator, D);
      }
    },
    skippedEntity: function(y) {
    },
    endDocument: function() {
      this.doc.normalize();
    },
    setDocumentLocator: function(y) {
      (this.locator = y) && (y.lineNumber = 0);
    },
    comment: function(y, g, S) {
      y = p.apply(this, arguments);
      var D = this.doc.createComment(y);
      this.locator && f(this.locator, D), E(this, D);
    },
    startCDATA: function() {
      this.cdata = !0;
    },
    endCDATA: function() {
      this.cdata = !1;
    },
    startDTD: function(y, g, S) {
      var D = this.doc.implementation;
      if (D && D.createDocumentType) {
        var L = D.createDocumentType(y, g, S);
        this.locator && f(this.locator, L), E(this, L), this.doc.doctype = L;
      }
    },
    warning: function(y) {
      console.warn("[xmldom warning]	" + y, d(this.locator));
    },
    error: function(y) {
      console.error("[xmldom error]	" + y, d(this.locator));
    },
    fatalError: function(y) {
      throw new s(y, this.locator);
    }
  };
  function d(y) {
    if (y)
      return `
@` + (y.systemId || "") + "#[line:" + y.lineNumber + ",col:" + y.columnNumber + "]";
  }
  function p(y, g, S) {
    return typeof y == "string" ? y.substr(g, S) : y.length >= g + S || g ? new java.lang.String(y, g, S) + "" : y;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(y) {
    l.prototype[y] = function() {
      return null;
    };
  });
  function E(y, g) {
    y.currentElement ? y.currentElement.appendChild(g) : y.doc.appendChild(g);
  }
  return Tn.__DOMHandler = l, Tn.DOMParser = u, Tn.DOMImplementation = t.DOMImplementation, Tn.XMLSerializer = t.XMLSerializer, Tn;
}
var vu;
function Tv() {
  if (vu)
    return Zn;
  vu = 1;
  var e = zl();
  return Zn.DOMImplementation = e.DOMImplementation, Zn.XMLSerializer = e.XMLSerializer, Zn.DOMParser = bv().DOMParser, Zn;
}
var tr = {}, yu;
function _v() {
  if (yu)
    return tr;
  yu = 1, Object.defineProperty(tr, "__esModule", { value: !0 }), tr.parseJson = void 0;
  function e(t) {
    try {
      var n = JSON.parse(t);
      return n;
    } catch {
      return null;
    }
  }
  return tr.parseJson = e, tr;
}
var nr = {}, gu;
function wv() {
  if (gu)
    return nr;
  gu = 1, Object.defineProperty(nr, "__esModule", { value: !0 }), nr.bufferFrom = void 0;
  function e(t) {
    var n = encodeURIComponent(t), r = n.replace(/%([0-9A-F]{2})/g, function(o, s) {
      return String.fromCharCode("0x" + s);
    }), i = new Uint8Array(r.length);
    return Array.prototype.forEach.call(r, function(o, s) {
      i[s] = o.charCodeAt(0);
    }), i;
  }
  return nr.bufferFrom = e, nr;
}
var rr = {}, ir = {}, Eu;
function Xl() {
  if (Eu)
    return ir;
  Eu = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.EventPolyfill = void 0;
  var e = function() {
    function t(n, r) {
      this.AT_TARGET = 0, this.BUBBLING_PHASE = 0, this.CAPTURING_PHASE = 0, this.NONE = 0, this.type = "", this.srcElement = null, this.currentTarget = null, this.eventPhase = 0, this.isTrusted = !0, this.composed = !1, this.cancelable = !0, this.defaultPrevented = !1, this.bubbles = !0, this.lengthComputable = !0, this.loaded = 0, this.total = 0, this.cancelBubble = !1, this.returnValue = !0, this.type = n, this.target = (r == null ? void 0 : r.target) || null, this.currentTarget = (r == null ? void 0 : r.currentTarget) || null, this.timeStamp = Date.now();
    }
    return t.prototype.composedPath = function() {
      return [];
    }, t.prototype.initEvent = function(n, r, i) {
      this.type = n, this.bubbles = !!r, this.cancelable = !!i;
    }, t.prototype.preventDefault = function() {
      this.defaultPrevented = !0;
    }, t.prototype.stopPropagation = function() {
    }, t.prototype.stopImmediatePropagation = function() {
    }, t;
  }();
  return ir.EventPolyfill = e, ir;
}
var or = {}, bu;
function Nv() {
  if (bu)
    return or;
  bu = 1;
  var e = W && W.__extends || function() {
    var r = function(i, o) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, a) {
        s.__proto__ = a;
      } || function(s, a) {
        for (var u in a)
          Object.prototype.hasOwnProperty.call(a, u) && (s[u] = a[u]);
      }, r(i, o);
    };
    return function(i, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(i, o);
      function s() {
        this.constructor = i;
      }
      i.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
    };
  }();
  Object.defineProperty(or, "__esModule", { value: !0 }), or.ProgressEventPolyfill = void 0;
  var t = Xl(), n = function(r) {
    e(i, r);
    function i(o, s) {
      var a = r.call(this, o) || this;
      return a.lengthComputable = (s == null ? void 0 : s.lengthComputable) || !1, a.composed = (s == null ? void 0 : s.composed) || !1, a.loaded = (s == null ? void 0 : s.loaded) || 0, a.total = (s == null ? void 0 : s.total) || 0, a;
    }
    return i;
  }(t.EventPolyfill);
  return or.ProgressEventPolyfill = n, or;
}
var Tu;
function Sv() {
  if (Tu)
    return rr;
  Tu = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.createEvent = void 0;
  var e = Xl(), t = Nv(), n = typeof ProgressEvent < "u";
  function r(i, o, s) {
    var a = [
      "error",
      "progress",
      "loadstart",
      "loadend",
      "load",
      "timeout",
      "abort"
    ], u = n ? ProgressEvent : t.ProgressEventPolyfill, c = a.includes(o) ? new u(o, {
      lengthComputable: !0,
      loaded: (s == null ? void 0 : s.loaded) || 0,
      total: (s == null ? void 0 : s.total) || 0
    }) : new e.EventPolyfill(o, {
      target: i,
      currentTarget: i
    });
    return c;
  }
  return rr.createEvent = r, rr;
}
var _u;
function Iv() {
  if (_u)
    return Kn;
  _u = 1;
  var e = W && W.__awaiter || function(y, g, S, D) {
    function L(N) {
      return N instanceof S ? N : new S(function(C) {
        C(N);
      });
    }
    return new (S || (S = Promise))(function(N, C) {
      function w(b) {
        try {
          B(D.next(b));
        } catch (R) {
          C(R);
        }
      }
      function P(b) {
        try {
          B(D.throw(b));
        } catch (R) {
          C(R);
        }
      }
      function B(b) {
        b.done ? N(b.value) : L(b.value).then(w, P);
      }
      B((D = D.apply(y, g || [])).next());
    });
  }, t = W && W.__generator || function(y, g) {
    var S = { label: 0, sent: function() {
      if (N[0] & 1)
        throw N[1];
      return N[1];
    }, trys: [], ops: [] }, D, L, N, C;
    return C = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
      return this;
    }), C;
    function w(B) {
      return function(b) {
        return P([B, b]);
      };
    }
    function P(B) {
      if (D)
        throw new TypeError("Generator is already executing.");
      for (; S; )
        try {
          if (D = 1, L && (N = B[0] & 2 ? L.return : B[0] ? L.throw || ((N = L.return) && N.call(L), 0) : L.next) && !(N = N.call(L, B[1])).done)
            return N;
          switch (L = 0, N && (B = [B[0] & 2, N.value]), B[0]) {
            case 0:
            case 1:
              N = B;
              break;
            case 4:
              return S.label++, { value: B[1], done: !1 };
            case 5:
              S.label++, L = B[1], B = [0];
              continue;
            case 7:
              B = S.ops.pop(), S.trys.pop();
              continue;
            default:
              if (N = S.trys, !(N = N.length > 0 && N[N.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                S = 0;
                continue;
              }
              if (B[0] === 3 && (!N || B[1] > N[0] && B[1] < N[3])) {
                S.label = B[1];
                break;
              }
              if (B[0] === 6 && S.label < N[1]) {
                S.label = N[1], N = B;
                break;
              }
              if (N && S.label < N[2]) {
                S.label = N[2], S.ops.push(B);
                break;
              }
              N[2] && S.ops.pop(), S.trys.pop();
              continue;
          }
          B = g.call(y, S);
        } catch (b) {
          B = [6, b], L = 0;
        } finally {
          D = N = 0;
        }
      if (B[0] & 5)
        throw B[1];
      return { value: B[0] ? B[1] : void 0, done: !0 };
    }
  }, n = W && W.__values || function(y) {
    var g = typeof Symbol == "function" && Symbol.iterator, S = g && y[g], D = 0;
    if (S)
      return S.call(y);
    if (y && typeof y.length == "number")
      return {
        next: function() {
          return y && D >= y.length && (y = void 0), { value: y && y[D++], done: !y };
        }
      };
    throw new TypeError(g ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }, r = W && W.__read || function(y, g) {
    var S = typeof Symbol == "function" && y[Symbol.iterator];
    if (!S)
      return y;
    var D = S.call(y), L, N = [], C;
    try {
      for (; (g === void 0 || g-- > 0) && !(L = D.next()).done; )
        N.push(L.value);
    } catch (w) {
      C = { error: w };
    } finally {
      try {
        L && !L.done && (S = D.return) && S.call(D);
      } finally {
        if (C)
          throw C.error;
      }
    }
    return N;
  };
  Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.createXMLHttpRequestOverride = void 0;
  var i = pn, o = yt, s = Tv(), a = _v(), u = Ql(), c = wv(), l = Sv(), f = mn, d = St, p = Fn, E = function(y) {
    var g, S = y.XMLHttpRequest, D = y.emitter, L = y.log;
    return g = function() {
      function N() {
        this._events = [], this.log = L, this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this.onreadystatechange = null, this.onabort = null, this.onerror = null, this.onload = null, this.onloadend = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.url = "", this.method = "GET", this.readyState = this.UNSENT, this.withCredentials = !1, this.status = 200, this.statusText = "OK", this.response = "", this.responseType = "text", this.responseText = "", this.responseXML = null, this.responseURL = "", this.upload = {}, this.timeout = 0, this._requestHeaders = new o.Headers(), this._responseHeaders = new o.Headers();
      }
      return N.prototype.setReadyState = function(C) {
        C !== this.readyState && (this.log("readyState change %d -> %d", this.readyState, C), this.readyState = C, C !== this.UNSENT && (this.log("triggering readystate change..."), this.trigger("readystatechange")));
      }, N.prototype.trigger = function(C, w) {
        var P, B;
        this.log('trigger "%s" (%d)', C, this.readyState), this.log('resolve listener for event "%s"', C);
        var b = this["on" + C];
        b == null || b.call(this, l.createEvent(this, C, w));
        try {
          for (var R = n(this._events), k = R.next(); !k.done; k = R.next()) {
            var q = k.value;
            q.name === C && (L('calling mock event listener "%s" (%d)', C, this.readyState), q.listener.call(this, l.createEvent(this, C, w)));
          }
        } catch (j) {
          P = { error: j };
        } finally {
          try {
            k && !k.done && (B = R.return) && B.call(R);
          } finally {
            if (P)
              throw P.error;
          }
        }
        return this;
      }, N.prototype.reset = function() {
        this.log("reset"), this.setReadyState(this.UNSENT), this.status = 200, this.statusText = "OK", this.response = null, this.responseText = null, this.responseXML = null, this._requestHeaders = new o.Headers(), this._responseHeaders = new o.Headers();
      }, N.prototype.open = function(C, w, P, B, b) {
        return P === void 0 && (P = !0), e(this, void 0, void 0, function() {
          return t(this, function(R) {
            return this.log = this.log.extend("request " + C + " " + w), this.log("open", { method: C, url: w, async: P, user: B, password: b }), this.reset(), this.setReadyState(this.OPENED), typeof w > "u" ? (this.url = C, this.method = "GET") : (this.url = w, this.method = C, this.async = P, this.user = B, this.password = b), [2];
          });
        });
      }, N.prototype.send = function(C) {
        var w = this;
        this.log("send %s %s", this.method, this.url);
        var P;
        typeof C == "string" ? P = d.encodeBuffer(C) : P = C || new ArrayBuffer(0);
        var B;
        try {
          B = new URL(this.url);
        } catch {
          B = new URL(this.url, window.location.href);
        }
        this.log("request headers", this._requestHeaders);
        var b = new f.IsomorphicRequest(B, {
          body: P,
          method: this.method,
          headers: this._requestHeaders,
          credentials: this.withCredentials ? "include" : "omit"
        }), R = new p.InteractiveIsomorphicRequest(b);
        this.log('emitting the "request" event for %d listener(s)...', D.listenerCount("request")), D.emit("request", R), this.log("awaiting mocked response..."), Promise.resolve(i.until(function() {
          return e(w, void 0, void 0, function() {
            var k, q;
            return t(this, function(j) {
              switch (j.label) {
                case 0:
                  return [4, D.untilIdle("request", function(Q) {
                    var Y = r(Q.args, 1), ne = Y[0];
                    return ne.id === R.id;
                  })];
                case 1:
                  return j.sent(), this.log("all request listeners have been resolved!"), [4, R.respondWith.invoked()];
                case 2:
                  return k = r.apply(void 0, [j.sent(), 1]), q = k[0], this.log("event.respondWith called with:", q), [2, q];
              }
            });
          });
        })).then(function(k) {
          var q, j = r(k, 2), Q = j[0], Y = j[1];
          if (Q) {
            w.log("middleware function threw an exception!", Q), w.trigger("error"), w.abort();
            return;
          }
          if (Y) {
            if (w.log("received mocked response", Y), w.trigger("loadstart"), w.status = Y.status || 200, w.statusText = Y.statusText || "OK", w._responseHeaders = Y.headers ? o.objectToHeaders(Y.headers) : new o.Headers(), w.log("set response status", w.status, w.statusText), w.log("set response headers", w._responseHeaders), w.setReadyState(w.HEADERS_RECEIVED), w.log("response type", w.responseType), w.response = w.getResponseBody(Y.body), w.responseURL = w.url, w.responseText = Y.body || "", w.responseXML = w.getResponseXML(), w.log("set response body", w.response), Y.body && w.response) {
              w.setReadyState(w.LOADING);
              var ne = c.bufferFrom(Y.body);
              w.trigger("progress", {
                loaded: ne.length,
                total: ne.length
              });
            }
            w.setReadyState(w.DONE), w.trigger("load"), w.trigger("loadend"), D.emit("response", b, u.toIsoResponse(Y));
          } else {
            w.log("no mocked response received!");
            var G = new S();
            w.log("opening an original request %s %s", w.method, w.url), G.open(w.method, w.url, (q = w.async) !== null && q !== void 0 ? q : !0, w.user, w.password), G.addEventListener("load", function() {
              w.log('original "onload"'), w.status = G.status, w.statusText = G.statusText, w.responseURL = G.responseURL, w.responseType = G.responseType, w.response = G.response, w.responseText = G.responseText, w.responseXML = G.responseXML, w.log("set mock request readyState to DONE"), w.setReadyState(w.DONE), w.log("received original response", w.status, w.statusText), w.log("original response body:", w.response);
              var K = G.getAllResponseHeaders();
              w.log(`original response headers:
`, K), w._responseHeaders = o.stringToHeaders(K), w.log("original response headers (normalized)", w._responseHeaders), w.log("original response finished"), D.emit("response", b, {
                status: G.status,
                statusText: G.statusText,
                headers: w._responseHeaders,
                body: G.response
              });
            }), w.propagateCallbacks(G), w.propagateListeners(G), w.propagateHeaders(G, w._requestHeaders), w.async && (G.timeout = w.timeout), w.log("send", C), G.send(C);
          }
        });
      }, N.prototype.abort = function() {
        this.log("abort"), this.readyState > this.UNSENT && this.readyState < this.DONE && (this.setReadyState(this.UNSENT), this.trigger("abort"));
      }, N.prototype.dispatchEvent = function() {
        return !1;
      }, N.prototype.setRequestHeader = function(C, w) {
        this.log('set request header "%s" to "%s"', C, w), this._requestHeaders.append(C, w);
      }, N.prototype.getResponseHeader = function(C) {
        if (this.log('get response header "%s"', C), this.readyState < this.HEADERS_RECEIVED)
          return this.log("cannot return a header: headers not received (state: %s)", this.readyState), null;
        var w = this._responseHeaders.get(C);
        return this.log('resolved response header "%s" to "%s"', C, w, this._responseHeaders), w;
      }, N.prototype.getAllResponseHeaders = function() {
        return this.log("get all response headers"), this.readyState < this.HEADERS_RECEIVED ? (this.log("cannot return headers: headers not received (state: %s)", this.readyState), "") : o.headersToString(this._responseHeaders);
      }, N.prototype.addEventListener = function(C, w) {
        this.log("addEventListener", C, w), this._events.push({
          name: C,
          listener: w
        });
      }, N.prototype.removeEventListener = function(C, w) {
        this.log("removeEventListener", C, w), this._events = this._events.filter(function(P) {
          return P.name !== C && P.listener !== w;
        });
      }, N.prototype.overrideMimeType = function() {
      }, N.prototype.getResponseBody = function(C) {
        var w = C != null ? C : "";
        switch (this.log("coerced response body to", w), this.responseType) {
          case "json":
            return this.log("resolving response body as JSON"), a.parseJson(w);
          case "blob": {
            var P = this.getResponseHeader("content-type") || "text/plain";
            return this.log("resolving response body as Blob", { type: P }), new Blob([w], {
              type: P
            });
          }
          case "arraybuffer": {
            this.log("resolving response body as ArrayBuffer");
            var B = c.bufferFrom(w);
            return B;
          }
          default:
            return w;
        }
      }, N.prototype.getResponseXML = function() {
        var C = this.getResponseHeader("Content-Type");
        return C === "application/xml" || C === "text/xml" ? new s.DOMParser().parseFromString(this.responseText, C) : null;
      }, N.prototype.propagateCallbacks = function(C) {
        var w, P;
        this.log("propagating request callbacks to the original request");
        var B = [
          "abort",
          "onerror",
          "ontimeout",
          "onload",
          "onloadstart",
          "onloadend",
          "onprogress",
          "onreadystatechange"
        ];
        try {
          for (var b = n(B), R = b.next(); !R.done; R = b.next()) {
            var k = R.value, q = this[k];
            q && (C[k] = this[k], this.log('propagated the "%s" callback', k, q));
          }
        } catch (j) {
          w = { error: j };
        } finally {
          try {
            R && !R.done && (P = b.return) && P.call(b);
          } finally {
            if (w)
              throw w.error;
          }
        }
        C.onabort = this.abort, C.onerror = this.onerror, C.ontimeout = this.ontimeout, C.onload = this.onload, C.onloadstart = this.onloadstart, C.onloadend = this.onloadend, C.onprogress = this.onprogress, C.onreadystatechange = this.onreadystatechange;
      }, N.prototype.propagateListeners = function(C) {
        this.log("propagating request listeners (%d) to the original request", this._events.length, this._events), this._events.forEach(function(w) {
          var P = w.name, B = w.listener;
          C.addEventListener(P, B);
        });
      }, N.prototype.propagateHeaders = function(C, w) {
        var P = this;
        this.log("propagating request headers to the original request", w), Object.entries(w.raw()).forEach(function(B) {
          var b = r(B, 2), R = b[0], k = b[1];
          P.log('setting "%s" (%s) header on the original request', R, k), C.setRequestHeader(R, k);
        });
      }, N;
    }(), g.UNSENT = 0, g.OPENED = 1, g.HEADERS_RECEIVED = 2, g.LOADING = 3, g.DONE = 4, g;
  };
  return Kn.createXMLHttpRequestOverride = E, Kn;
}
var wu;
function Ov() {
  if (wu)
    return Jn;
  wu = 1;
  var e = W && W.__extends || function() {
    var s = function(a, u) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, l) {
        c.__proto__ = l;
      } || function(c, l) {
        for (var f in l)
          Object.prototype.hasOwnProperty.call(l, f) && (c[f] = l[f]);
      }, s(a, u);
    };
    return function(a, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      s(a, u);
      function c() {
        this.constructor = a;
      }
      a.prototype = u === null ? Object.create(u) : (c.prototype = u.prototype, new c());
    };
  }();
  Object.defineProperty(Jn, "__esModule", { value: !0 }), Jn.XMLHttpRequestInterceptor = void 0;
  var t = hn, n = xn, r = wr, i = Iv(), o = function(s) {
    e(a, s);
    function a() {
      return s.call(this, a.symbol) || this;
    }
    return a.prototype.checkEnvironment = function() {
      return typeof window < "u" && typeof window.XMLHttpRequest < "u";
    }, a.prototype.setup = function() {
      var u = this.log.extend("setup");
      u('patching "XMLHttpRequest" module...');
      var c = window.XMLHttpRequest;
      t.invariant(!c[n.IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.'), window.XMLHttpRequest = i.createXMLHttpRequestOverride({
        XMLHttpRequest: c,
        emitter: this.emitter,
        log: this.log
      }), u('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name), Object.defineProperty(window.XMLHttpRequest, n.IS_PATCHED_MODULE, {
        enumerable: !0,
        configurable: !0,
        value: !0
      }), this.subscriptions.push(function() {
        Object.defineProperty(window.XMLHttpRequest, n.IS_PATCHED_MODULE, {
          value: void 0
        }), window.XMLHttpRequest = c, u('native "XMLHttpRequest" module restored!', window.XMLHttpRequest.name);
      });
    }, a.symbol = Symbol("xhr"), a;
  }(r.Interceptor);
  return Jn.XMLHttpRequestInterceptor = o, Jn;
}
var Av = Object.create, Pr = Object.defineProperty, Rv = Object.defineProperties, Dv = Object.getOwnPropertyDescriptor, Cv = Object.getOwnPropertyDescriptors, Lv = Object.getOwnPropertyNames, mi = Object.getOwnPropertySymbols, kv = Object.getPrototypeOf, zs = Object.prototype.hasOwnProperty, Jl = Object.prototype.propertyIsEnumerable, Nu = (e, t, n) => t in e ? Pr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t) => {
  for (var n in t || (t = {}))
    zs.call(t, n) && Nu(e, n, t[n]);
  if (mi)
    for (var n of mi(t))
      Jl.call(t, n) && Nu(e, n, t[n]);
  return e;
}, Ke = (e, t) => Rv(e, Cv(t)), Pv = (e, t) => {
  var n = {};
  for (var r in e)
    zs.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && mi)
    for (var r of mi(e))
      t.indexOf(r) < 0 && Jl.call(e, r) && (n[r] = e[r]);
  return n;
}, Kl = (e, t) => {
  for (var n in t)
    Pr(e, n, { get: t[n], enumerable: !0 });
}, Zl = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Lv(t))
      !zs.call(e, i) && i !== n && Pr(e, i, { get: () => t[i], enumerable: !(r = Dv(t, i)) || r.enumerable });
  return e;
}, xr = (e, t, n) => (n = e != null ? Av(kv(e)) : {}, Zl(t || !e || !e.__esModule ? Pr(n, "default", { value: e, enumerable: !0 }) : n, e)), xv = (e) => Zl(Pr({}, "__esModule", { value: !0 }), e), ef = {};
Kl(ef, {
  GraphQLHandler: () => Zi,
  MockedRequest: () => Fr,
  RESTMethods: () => If,
  RequestHandler: () => ta,
  RestHandler: () => Ki,
  cleanUrl: () => Zs,
  compose: () => wf,
  context: () => tf,
  createResponseComposition: () => Xo,
  defaultContext: () => Ji,
  defaultResponse: () => Nf,
  graphql: () => Tg,
  graphqlContext: () => Rf,
  handleRequest: () => na,
  matchRequestUrl: () => ea,
  response: () => Sf,
  rest: () => gg,
  restContext: () => Of,
  setupWorker: () => yg
});
var Fv = xv(ef), tf = {};
Kl(tf, {
  body: () => of,
  cookie: () => Xs,
  data: () => sf,
  delay: () => uf,
  errors: () => cf,
  extensions: () => af,
  fetch: () => lf,
  json: () => Bn,
  set: () => rf,
  status: () => nf,
  text: () => ff,
  xml: () => df
});
var jv = xr(Xf), nf = (e, t) => (n) => (n.status = e, n.statusText = t || jv.default[String(e)], n), Mv = yt;
function rf(...e) {
  return (t) => {
    const [n, r] = e;
    return typeof n == "string" ? t.headers.append(n, r) : (0, Mv.objectToHeaders)(n).forEach((o, s) => {
      t.headers.append(s, o);
    }), t;
  };
}
var $v = xr(Tr), Xs = (e, t, n) => (r) => {
  const i = $v.serialize(e, t, n);
  return r.headers.append("Set-Cookie", i), typeof document < "u" && (document.cookie = i), r;
}, of = (e) => (t) => (t.body = e, t);
function Zt(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function Su(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function Vn(e, t) {
  return Object.entries(t).reduce((n, [r, i]) => {
    const o = n[r];
    return Array.isArray(o) && Array.isArray(i) ? (n[r] = o.concat(i), n) : Su(o) && Su(i) ? (n[r] = Vn(o, i), n) : (n[r] = i, n);
  }, Object.assign({}, e));
}
var Bn = (e) => (t) => (t.headers.set("Content-Type", "application/json"), t.body = JSON.stringify(e), t), sf = (e) => (t) => {
  const n = Zt(t.body) || {}, r = Vn(n, { data: e });
  return Bn(r)(t);
}, af = (e) => (t) => {
  const n = Zt(t.body) || {}, r = Vn(n, { extensions: e });
  return Bn(r)(t);
}, Uv = dr.exports, Po = 2147483647, Iu = 100, Vv = 400, Bv = 5, Ou = () => (0, Uv.isNodeProcess)() ? Bv : Math.floor(Math.random() * (Vv - Iu) + Iu), uf = (e) => (t) => {
  let n;
  if (typeof e == "string")
    switch (e) {
      case "infinite": {
        n = Po;
        break;
      }
      case "real": {
        n = Ou();
        break;
      }
      default:
        throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`);
    }
  else if (typeof e > "u")
    n = Ou();
  else {
    if (e > Po)
      throw new Error(`Failed to delay a response: provided delay duration (${e}) exceeds the maximum allowed duration for "setTimeout" (${Po}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);
    n = e;
  }
  return t.delay = n, t;
}, cf = (e) => (t) => {
  if (e == null)
    return t;
  const n = Zt(t.body) || {}, r = Vn(n, { errors: e });
  return Bn(r)(t);
}, qv = dr.exports, Gv = yt, Au = (0, qv.isNodeProcess)() ? Id() : window.fetch, Ru = (e) => {
  const t = new Gv.Headers(e.headers);
  return t.set("x-msw-bypass", "true"), Ke(Be({}, e), {
    headers: t.all()
  });
}, Hv = (e) => {
  const { body: t, method: n } = e, r = Ke(Be({}, e), {
    body: void 0
  });
  return ["GET", "HEAD"].includes(n) || (typeof t == "object" || typeof t == "number" || typeof t == "boolean" ? r.body = JSON.stringify(t) : r.body = t), r;
}, lf = (e, t = {}) => {
  if (typeof e == "string")
    return Au(e, Ru(t));
  const n = Hv(e), r = Ru(n);
  return Au(e.url.href, r);
}, ff = (e) => (t) => (t.headers.set("Content-Type", "text/plain"), t.body = e, t), df = (e) => (t) => (t.headers.set("Content-Type", "text/xml"), t.body = e, t), Yv = dr.exports, Du = Ko, Wv = pn, Qv = pn, xo = (e, t, n) => [
  e.active,
  e.installing,
  e.waiting
].filter(Boolean).find((s) => n(s.scriptURL, t)) || null;
function zv(e) {
  return new URL(e, location.origin).href;
}
var Xv = hn, Jv = "[MSW]";
function Js(e, ...t) {
  const n = (0, Xv.format)(e, ...t);
  return `${Jv} ${n}`;
}
function Kv(e, ...t) {
  console.warn(Js(e, ...t));
}
function Zv(e, ...t) {
  console.error(Js(e, ...t));
}
var Ie = {
  formatMessage: Js,
  warn: Kv,
  error: Zv
}, ey = async (e, t = {}, n) => {
  const r = zv(e), i = await navigator.serviceWorker.getRegistrations().then((u) => u.filter((c) => xo(c, r, n)));
  !navigator.serviceWorker.controller && i.length > 0 && location.reload();
  const [o] = i;
  if (o)
    return o.update().then(() => [
      xo(o, r, n),
      o
    ]);
  const [s, a] = await (0, Qv.until)(async () => {
    const u = await navigator.serviceWorker.register(e, t);
    return [
      xo(u, r, n),
      u
    ];
  });
  if (s) {
    if (s.message.includes("(404)")) {
      const c = new URL((t == null ? void 0 : t.scope) || "/", location.href);
      throw new Error(Ie.formatMessage(`Failed to register a Service Worker for scope ('${c.href}') with script ('${r}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`));
    }
    throw new Error(Ie.formatMessage(`Failed to register the Service Worker:

%s`, s.message));
  }
  return a;
};
function pf(e = {}) {
  if (e.quiet)
    return;
  const t = e.message || "Mocking enabled.";
  console.groupCollapsed(`%c${Ie.formatMessage(t)}`, "color:orangered;font-weight:bold;"), console.log("%cDocumentation: %chttps://mswjs.io/docs", "font-weight:bold", "font-weight:normal"), console.log("Found an issue? https://github.com/mswjs/msw/issues"), e.workerUrl && console.log("Worker script URL:", e.workerUrl), e.workerScope && console.log("Worker scope:", e.workerScope), console.groupEnd();
}
async function ty(e, t) {
  var n, r;
  if (e.workerChannel.send("MOCK_ACTIVATE"), await e.events.once("MOCKING_ENABLED"), e.isMockingEnabled) {
    Ie.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.');
    return;
  }
  e.isMockingEnabled = !0, pf({
    quiet: t.quiet,
    workerScope: (n = e.registration) == null ? void 0 : n.scope,
    workerUrl: (r = e.worker) == null ? void 0 : r.scriptURL
  });
}
var ny = class {
  constructor(e) {
    this.port = e;
  }
  postMessage(e, ...t) {
    const [n, r] = t;
    this.port.postMessage({ type: e, data: n }, { transfer: r });
  }
}, hf = class extends Error {
  constructor(e) {
    super(e), this.name = "NetworkError";
  }
}, ry = Ci, iy = yt, oy = xr(Tr), Cu = os, sy = Ci, ay = St, uy = yt, cy = xr(Tr);
function Lu() {
  return cy.parse(document.cookie);
}
function ly(e) {
  if (typeof document > "u" || typeof location > "u")
    return {};
  switch (e.credentials) {
    case "same-origin":
      return location.origin === e.url.origin ? Lu() : {};
    case "include":
      return Lu();
    default:
      return {};
  }
}
var fy = yt;
function dy(e) {
  var t, n;
  const r = (0, fy.stringToHeaders)(e), i = r.get("content-type") || "text/plain", o = r.get("content-disposition");
  if (!o)
    throw new Error('"Content-Disposition" header is required.');
  const s = o.split(";").reduce((c, l) => {
    const [f, ...d] = l.trim().split("=");
    return c[f] = d.join("="), c;
  }, {}), a = (t = s.name) == null ? void 0 : t.slice(1, -1), u = (n = s.filename) == null ? void 0 : n.slice(1, -1);
  return {
    name: a,
    filename: u,
    contentType: i
  };
}
function py(e, t) {
  const n = t == null ? void 0 : t.get("content-type");
  if (!n)
    return;
  const [, ...r] = n.split(/; */), i = r.filter((u) => u.startsWith("boundary=")).map((u) => u.replace(/^boundary=/, ""))[0];
  if (!i)
    return;
  const o = new RegExp(`--+${i}`), s = e.split(o).filter((u) => u.startsWith(`\r
`) && u.endsWith(`\r
`)).map((u) => u.trimStart().replace(/\r\n$/, ""));
  if (!s.length)
    return;
  const a = {};
  try {
    for (const u of s) {
      const [c, ...l] = u.split(`\r
\r
`), f = l.join(`\r
\r
`), { contentType: d, filename: p, name: E } = dy(c), y = p === void 0 ? f : new File([f], p, { type: d }), g = a[E];
      g === void 0 ? a[E] = y : Array.isArray(g) ? a[E] = [...g, y] : a[E] = [g, y];
    }
    return a;
  } catch {
    return;
  }
}
function mf(e, t) {
  var n;
  if (!e)
    return e;
  const r = ((n = t == null ? void 0 : t.get("content-type")) == null ? void 0 : n.toLowerCase()) || "";
  return r.startsWith("multipart/form-data") && typeof e != "object" ? py(e.toString(), t) || e : r.includes("json") && typeof e != "object" && Zt(e.toString()) || e;
}
function Ks(e, t) {
  return e.toLowerCase() === t.toLowerCase();
}
var Fr = class extends sy.IsomorphicRequest {
  constructor(e, t = {}) {
    super(e, t), t.id && (this.id = t.id), this.cache = t.cache || "default", this.destination = t.destination || "", this.integrity = t.integrity || "", this.keepalive = t.keepalive || !1, this.mode = t.mode || "cors", this.priority = t.priority || "auto", this.redirect = t.redirect || "follow", this.referrer = t.referrer || "", this.referrerPolicy = t.referrerPolicy || "no-referrer", this.cookies = t.cookies || this.getCookies();
  }
  get body() {
    const e = (0, ay.decodeBuffer)(this._body), t = mf(e, this.headers);
    if (!(Ks(this.method, "GET") && t === ""))
      return t;
  }
  passthrough() {
    return {
      status: 101,
      statusText: "Continue",
      headers: new uy.Headers(),
      body: null,
      passthrough: !0,
      once: !1
    };
  }
  getCookies() {
    var e;
    const t = this.headers.get("cookie"), n = t ? oy.parse(t) : {};
    Cu.store.hydrate();
    const r = Array.from((e = Cu.store.get(Ke(Be({}, this), { url: this.url.href }))) == null ? void 0 : e.entries()).reduce((s, [a, { value: u }]) => Object.assign(s, { [a.trim()]: u }), {}), i = ly(this), o = Be(Be({}, i), r);
    for (const [s, a] of Object.entries(o))
      this.headers.append("cookie", `${s}=${a}`);
    return Be(Be({}, o), n);
  }
};
function hy(e) {
  const t = new URL(e.url), n = new iy.Headers(e.headers);
  return new Fr(t, Ke(Be({}, e), {
    body: (0, ry.encodeBuffer)(e.body || ""),
    headers: n
  }));
}
var my = pn, vy = async (e, t, n) => {
  const r = t.filter((o) => o.test(e, n));
  if (r.length === 0)
    return {
      handler: void 0,
      response: void 0
    };
  const i = await r.reduce(async (o, s) => {
    const a = await o;
    if (a != null && a.response)
      return o;
    const u = await s.run(e, n);
    return u === null || u.handler.shouldSkip ? null : u.response ? (u.response.once && s.markAsSkipped(!0), u) : {
      request: u.request,
      handler: u.handler,
      response: void 0,
      parsedResult: u.parsedResult
    };
  }, Promise.resolve(null));
  return i ? {
    handler: i.handler,
    publicRequest: i.request,
    parsedRequest: i.parsedResult,
    response: i.response
  } : {
    handler: void 0,
    response: void 0
  };
}, vf = xr(wp()), yy = Gl, jr = (e) => e.referrer.startsWith(e.url.origin) ? e.url.pathname : new URL(e.url.pathname, `${e.url.protocol}//${e.url.host}`).href;
function yf(e) {
  var t;
  const n = e.definitions.find((r) => r.kind === "OperationDefinition");
  return {
    operationType: n == null ? void 0 : n.operation,
    operationName: (t = n == null ? void 0 : n.name) == null ? void 0 : t.value
  };
}
function gy(e) {
  try {
    const t = (0, yy.parse)(e);
    return yf(t);
  } catch (t) {
    return t;
  }
}
function Ey(e, t, n) {
  const r = { variables: e };
  for (const [i, o] of Object.entries(t)) {
    if (!(i in n))
      throw new Error(`Given files do not have a key '${i}' .`);
    for (const s of o) {
      const [a, ...u] = s.split(".").reverse(), c = u.reverse();
      let l = r;
      for (const f of c) {
        if (!(f in l))
          throw new Error(`Property '${c}' is not in operations.`);
        l = l[f];
      }
      l[a] = n[i];
    }
  }
  return r.variables;
}
function by(e) {
  var t, n;
  switch (e.method) {
    case "GET": {
      const r = e.url.searchParams.get("query"), i = e.url.searchParams.get("variables") || "";
      return {
        query: r,
        variables: Zt(i)
      };
    }
    case "POST": {
      if ((t = e.body) != null && t.query) {
        const { query: r, variables: i } = e.body;
        return {
          query: r,
          variables: i
        };
      }
      if ((n = e.body) != null && n.operations) {
        const r = e.body, { operations: i, map: o } = r, s = Pv(r, ["operations", "map"]), a = Zt(i) || {};
        if (!a.query)
          return null;
        const u = Zt(o || "") || {}, c = a.variables ? Ey(a.variables, u, s) : {};
        return {
          query: a.query,
          variables: c
        };
      }
    }
    default:
      return null;
  }
}
function gf(e) {
  const t = by(e);
  if (!t || !t.query)
    return;
  const { query: n, variables: r } = t, i = gy(n);
  if (i instanceof Error) {
    const o = jr(e);
    throw new Error(Ie.formatMessage(`Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.

%s`, e.method, o, i.message));
  }
  return {
    operationType: i.operationType,
    operationName: i.operationName,
    variables: r
  };
}
function Ef(e) {
  return e < 300 ? "#69AB32" : e < 400 ? "#F0BB4B" : "#E95F5D";
}
function bf() {
  const e = new Date();
  return [e.getHours(), e.getMinutes(), e.getSeconds()].map(String).map((t) => t.slice(0, 2)).map((t) => t.padStart(2, "0")).join(":");
}
function Tf(e) {
  return Ke(Be({}, e), {
    body: e.body,
    headers: e.headers.all()
  });
}
var Ty = yt;
function _f(e) {
  const t = (0, Ty.objectToHeaders)(e.headers);
  return Ke(Be({}, e), {
    body: mf(e.body, t)
  });
}
var _y = vv, wy = Nr, Ny = /[\?|#].*$/g;
function Sy(e) {
  return new URL(`/${e}`, "http://localhost").searchParams;
}
function Zs(e) {
  return e.replace(Ny, "");
}
function Iy(e) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
}
function Oy(e, t) {
  if (Iy(e) || e.startsWith("*"))
    return e;
  const n = t || typeof document < "u" && document.baseURI;
  return n ? decodeURI(new URL(encodeURI(e), n).href) : e;
}
function Ay(e, t) {
  if (e instanceof RegExp)
    return e;
  const n = Oy(e, t);
  return Zs(n);
}
function Ry(e) {
  return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (t, n, r) => {
    const i = "(.*)";
    return n ? n.startsWith(":") ? `${n}${r}` : `${n}${i}` : i;
  }).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
}
function ea(e, t, n) {
  const r = Ay(t, n), i = typeof r == "string" ? Ry(r) : r, o = (0, wy.getCleanUrl)(e), s = (0, _y.match)(i, { decode: decodeURIComponent })(o), a = s && s.params || {};
  return {
    matches: s !== !1,
    params: a
  };
}
var Dy = yt;
function wf(...e) {
  return (...t) => e.reduceRight((n, r) => n instanceof Promise ? Promise.resolve(n).then(r) : r(n), t[0]);
}
var Nf = {
  status: 200,
  statusText: "OK",
  body: null,
  delay: 0,
  once: !1,
  passthrough: !1
}, Cy = [];
function Xo(e, t = Cy) {
  return async (...n) => {
    const r = Object.assign({}, Nf, {
      headers: new Dy.Headers({
        "x-powered-by": "msw"
      })
    }, e), i = [
      ...t,
      ...n
    ].filter(Boolean);
    return i.length > 0 ? wf(...i)(r) : r;
  };
}
var Sf = Object.assign(Xo(), {
  once: Xo({ once: !0 }),
  networkError(e) {
    throw new hf(e);
  }
}), Ly = /\/msw\/src\/(.+)/, ky = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
function Py(e) {
  const t = e.stack;
  if (!t)
    return;
  const r = t.split(`
`).slice(1).find((o) => !(Ly.test(o) || ky.test(o)));
  return r ? r.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "") : void 0;
}
function xy(e) {
  return e ? typeof e[Symbol.iterator] == "function" : !1;
}
var Ji = {
  status: nf,
  set: rf,
  delay: uf,
  fetch: lf
}, ta = class {
  constructor(e) {
    this.shouldSkip = !1, this.ctx = e.ctx || Ji, this.resolver = e.resolver;
    const t = Py(new Error());
    this.info = Ke(Be({}, e.info), {
      callFrame: t
    });
  }
  parse(e, t) {
    return null;
  }
  test(e, t) {
    return this.predicate(e, this.parse(e, t), t);
  }
  getPublicRequest(e, t) {
    return e;
  }
  markAsSkipped(e = !0) {
    this.shouldSkip = e;
  }
  async run(e, t) {
    if (this.shouldSkip)
      return null;
    const n = this.parse(e, t);
    if (!this.predicate(e, n, t))
      return null;
    const i = this.getPublicRequest(e, n), s = await this.wrapResolver(this.resolver)(i, Sf, this.ctx);
    return this.createExecutionResult(n, i, s);
  }
  wrapResolver(e) {
    return async (t, n, r) => {
      const i = this.resolverGenerator || await e(t, n, r);
      if (xy(i)) {
        const { value: o, done: s } = i[Symbol.iterator]().next(), a = await o;
        return !a && s ? this.resolverGeneratorResult : (this.resolverGenerator || (this.resolverGenerator = i), this.resolverGeneratorResult = a, a);
      }
      return i;
    };
  }
  createExecutionResult(e, t, n) {
    return {
      handler: this,
      parsedResult: e || null,
      request: t,
      response: n || null
    };
  }
}, If = /* @__PURE__ */ ((e) => (e.HEAD = "HEAD", e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.PATCH = "PATCH", e.OPTIONS = "OPTIONS", e.DELETE = "DELETE", e))(If || {}), Of = Ke(Be({}, Ji), {
  cookie: Xs,
  body: of,
  text: ff,
  json: Bn,
  xml: df
}), Fy = class extends Fr {
  constructor(e, t) {
    super(e.url, Ke(Be({}, e), {
      body: e._body
    })), this.params = t, this.id = e.id;
  }
}, Ki = class extends ta {
  constructor(e, t, n) {
    super({
      info: {
        header: `${e} ${t}`,
        path: t,
        method: e
      },
      ctx: Of,
      resolver: n
    }), this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const { method: e, path: t } = this.info;
    if (t instanceof RegExp || Zs(t) === t)
      return;
    Sy(t).forEach((i, o) => {
    }), Ie.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${t}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`);
  }
  parse(e, t) {
    return ea(e.url, this.info.path, t == null ? void 0 : t.baseUrl);
  }
  getPublicRequest(e, t) {
    return new Fy(e, t.params || {});
  }
  predicate(e, t) {
    return (this.info.method instanceof RegExp ? this.info.method.test(e.method) : Ks(this.info.method, e.method)) && t.matches;
  }
  log(e, t) {
    const n = jr(e), r = Tf(e), i = _f(t), o = Ef(t.status);
    console.groupCollapsed(Ie.formatMessage("%s %s %s (%c%s%c)"), bf(), e.method, n, `color:${o}`, `${t.status} ${t.statusText}`, "color:inherit"), console.log("Request", r), console.log("Handler:", {
      mask: this.info.path,
      resolver: this.resolver
    }), console.log("Response", i), console.groupEnd();
  }
}, Kr = hn, jy = (e, t) => (n) => {
  My(e);
  const r = Zt(n.body) || {}, i = Vn(r, { [e]: t });
  return Bn(i)(n);
};
function My(e) {
  (0, Kr.invariant)(e.trim() !== "", Ie.formatMessage("Failed to set a custom field on a GraphQL response: field name cannot be empty.")), (0, Kr.invariant)(e !== "data", Ie.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?', e)), (0, Kr.invariant)(e !== "errors", Ie.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?', e)), (0, Kr.invariant)(e !== "extensions", Ie.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?', e));
}
function Af(e, t) {
  try {
    return e();
  } catch (n) {
    t == null || t(n);
  }
}
var Rf = Ke(Be({}, Ji), {
  data: sf,
  extensions: af,
  errors: cf,
  cookie: Xs,
  field: jy
});
function $y(e) {
  return e == null ? !1 : typeof e == "object" && "kind" in e && "definitions" in e;
}
var Uy = class extends Fr {
  constructor(e, t) {
    super(e.url, Ke(Be({}, e), {
      body: e._body
    })), this.variables = t;
  }
}, Zi = class extends ta {
  constructor(e, t, n, r) {
    let i = t;
    if ($y(t)) {
      const s = yf(t);
      if (s.operationType !== e)
        throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${e}", but got "${s.operationType}").`);
      if (!s.operationName)
        throw new Error("Failed to create a GraphQL handler: provided a DocumentNode with no operation name.");
      i = s.operationName;
    }
    const o = e === "all" ? `${e} (origin: ${n.toString()})` : `${e} ${i} (origin: ${n.toString()})`;
    super({
      info: {
        header: o,
        operationType: e,
        operationName: i
      },
      ctx: Rf,
      resolver: r
    }), this.endpoint = n;
  }
  parse(e) {
    return Af(() => gf(e), (t) => console.error(t.message));
  }
  getPublicRequest(e, t) {
    return new Uy(e, (t == null ? void 0 : t.variables) || {});
  }
  predicate(e, t) {
    if (!t)
      return !1;
    if (!t.operationName && this.info.operationType !== "all") {
      const o = jr(e);
      return Ie.warn(`Failed to intercept a GraphQL request at "${e.method} ${o}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `), !1;
    }
    const n = ea(e.url, this.endpoint), r = this.info.operationType === "all" || t.operationType === this.info.operationType, i = this.info.operationName instanceof RegExp ? this.info.operationName.test(t.operationName || "") : t.operationName === this.info.operationName;
    return n.matches && r && i;
  }
  log(e, t, n, r) {
    const i = Tf(e), o = _f(t), s = Ef(t.status), a = r != null && r.operationName ? `${r == null ? void 0 : r.operationType} ${r == null ? void 0 : r.operationName}` : `anonymous ${r == null ? void 0 : r.operationType}`;
    console.groupCollapsed(Ie.formatMessage("%s %s (%c%s%c)"), bf(), `${a}`, `color:${s}`, `${t.status} ${t.statusText}`, "color:inherit"), console.log("Request:", i), console.log("Handler:", this), console.log("Response:", o), console.groupEnd();
  }
}, Vy = 3, By = 4, Df = 0.5;
function qy(e) {
  return e.reduce((t, n) => (n instanceof Ki && t.rest.push(n), n instanceof Zi && t.graphql.push(n), t), {
    rest: [],
    graphql: []
  });
}
function Gy() {
  return (e, t) => {
    const { path: n, method: r } = t.info;
    if (n instanceof RegExp || r instanceof RegExp)
      return 1 / 0;
    const o = Ks(e.method, r) ? Df : 0, s = jr(e);
    return (0, vf.default)(s, n) - o;
  };
}
function Hy(e) {
  return (t, n) => {
    if (typeof e.operationName > "u")
      return 1 / 0;
    const { operationType: r, operationName: i } = n.info;
    if (typeof i != "string")
      return 1 / 0;
    const s = e.operationType === r ? Df : 0;
    return (0, vf.default)(e.operationName, i) - s;
  };
}
function Yy(e, t, n) {
  return t.reduce((i, o) => {
    const s = n(e, o);
    return i.concat([[s, o]]);
  }, []).sort(([i], [o]) => i - o).filter(([i]) => i <= Vy).slice(0, By).map(([, i]) => i);
}
function Wy(e) {
  return e.length > 1 ? `Did you mean to request one of the following resources instead?

${e.map((t) => `  \u2022 ${t.info.header}`).join(`
`)}` : `Did you mean to request "${e[0].info.header}" instead?`;
}
function Qy(e, t, n = "warn") {
  const r = Af(() => gf(e));
  function i() {
    const a = qy(t), u = r ? a.graphql : a.rest, c = Yy(e, u, r ? Hy(r) : Gy());
    return c.length > 0 ? Wy(c) : "";
  }
  function o() {
    const a = jr(e), u = r ? `${r.operationType} ${r.operationName} (${e.method} ${a})` : `${e.method} ${a}`, c = i();
    return [
      "captured a request without a matching request handler:",
      `  \u2022 ${u}`,
      c,
      `If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`
    ].filter(Boolean).join(`

`);
  }
  function s(a) {
    const u = o();
    switch (a) {
      case "error":
        throw Ie.error("Error: %s", u), new Error(Ie.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));
      case "warn": {
        Ie.warn("Warning: %s", u);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(Ie.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.', a));
    }
  }
  if (typeof n == "function") {
    n(e, {
      warning: s.bind(null, "warn"),
      error: s.bind(null, "error")
    });
    return;
  }
  s(n);
}
var ku = os;
function zy(e, t) {
  ku.store.add(Ke(Be({}, e), { url: e.url.toString() }), t), ku.store.persist();
}
async function na(e, t, n, r, i) {
  var o, s, a, u, c, l, f;
  if (r.emit("request:start", e), e.headers.get("x-msw-bypass") === "true") {
    r.emit("request:end", e), (o = i == null ? void 0 : i.onPassthroughResponse) == null || o.call(i, e);
    return;
  }
  const [d, p] = await (0, my.until)(() => vy(e, t, i == null ? void 0 : i.resolutionContext));
  if (d)
    throw r.emit("unhandledException", d, e), d;
  const { handler: E, response: y } = p;
  if (!E) {
    Qy(e, t, n.onUnhandledRequest), r.emit("request:unhandled", e), r.emit("request:end", e), (s = i == null ? void 0 : i.onPassthroughResponse) == null || s.call(i, e);
    return;
  }
  if (!y) {
    Ie.warn(`Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  \u2022 %s
    %s`, y, E.info.header, E.info.callFrame), r.emit("request:end", e), (a = i == null ? void 0 : i.onPassthroughResponse) == null || a.call(i, e);
    return;
  }
  if (y.passthrough) {
    r.emit("request:end", e), (u = i == null ? void 0 : i.onPassthroughResponse) == null || u.call(i, e);
    return;
  }
  zy(e, y), r.emit("request:match", e);
  const g = p, S = ((c = i == null ? void 0 : i.transformResponse) == null ? void 0 : c.call(i, y)) || y;
  return (l = i == null ? void 0 : i.onMockedResponse) == null || l.call(i, S, g), (f = i == null ? void 0 : i.onMockedResponseSent) == null || f.call(i, S, g), r.emit("request:end", e), S;
}
var Xy = (e, t) => async (n, r) => {
  const i = new ny(n.ports[0]), o = hy(r.payload);
  try {
    await na(o, e.requestHandlers, t, e.emitter, {
      transformResponse: Jy,
      onPassthroughResponse() {
        i.postMessage("NOT_FOUND");
      },
      async onMockedResponse(s) {
        if (s.body instanceof ReadableStream)
          throw new Error(Ie.formatMessage('Failed to construct a mocked response with a "ReadableStream" body: mocked streams are not supported. Follow https://github.com/mswjs/msw/issues/1336 for more details.'));
        const u = await new Response(s.body, s).arrayBuffer(), c = s.body == null ? null : u;
        i.postMessage("MOCK_RESPONSE", Ke(Be({}, s), {
          body: c
        }), [u]);
      },
      onMockedResponseSent(s, { handler: a, publicRequest: u, parsedRequest: c }) {
        t.quiet || a.log(u, s, a, c);
      }
    });
  } catch (s) {
    if (s instanceof hf) {
      i.postMessage("NETWORK_ERROR", {
        name: s.name,
        message: s.message
      });
      return;
    }
    s instanceof Error && (Ie.error(`Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`, o.method, o.url, s), i.postMessage("MOCK_RESPONSE", {
      status: 500,
      statusText: "Request Handler Error",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: s.name,
        message: s.message,
        stack: s.stack
      })
    }));
  }
};
function Jy(e) {
  return {
    status: e.status,
    statusText: e.statusText,
    headers: e.headers.all(),
    body: e.body,
    delay: e.delay
  };
}
async function Ky(e, t) {
  e.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload: n } = await e.events.once("INTEGRITY_CHECK_RESPONSE");
  if (n !== "b3066ef78c2f9090b4ce87e874965995")
    throw new Error(`Currently active Service Worker (${n}) is behind the latest published one (b3066ef78c2f9090b4ce87e874965995).`);
  return t;
}
var Pu = pn;
function Zy(e) {
  const t = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function(...r) {
    (0, Pu.until)(() => e).then(() => {
      window.XMLHttpRequest.prototype.send = t, this.send(...r);
    });
  };
  const n = window.fetch;
  window.fetch = async (...r) => (await (0, Pu.until)(() => e), window.fetch = n, window.fetch(...r));
}
function eg(e) {
  return (t, n) => {
    var r;
    const { payload: i } = n;
    if ((r = i.type) != null && r.includes("opaque"))
      return;
    const o = new Response(i.body || null, i);
    o.headers.get("x-powered-by") === "msw" ? e.emitter.emit("response:mocked", o, i.requestId) : e.emitter.emit("response:bypass", o, i.requestId);
  };
}
function tg(e, t) {
  !(t != null && t.quiet) && !location.href.startsWith(e.scope) && Ie.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
}
var ng = (e) => function(n, r) {
  const o = (async () => {
    e.events.removeAllListeners(), e.workerChannel.on("REQUEST", Xy(e, n)), e.workerChannel.on("RESPONSE", eg(e));
    const s = await ey(n.serviceWorker.url, n.serviceWorker.options, n.findWorker), [a, u] = s;
    if (!a) {
      const l = r != null && r.findWorker ? Ie.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`, n.serviceWorker.url) : Ie.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`, n.serviceWorker.url, location.host);
      throw new Error(l);
    }
    e.worker = a, e.registration = u, e.events.addListener(window, "beforeunload", () => {
      a.state !== "redundant" && e.workerChannel.send("CLIENT_CLOSED"), window.clearInterval(e.keepAliveInterval);
    });
    const [c] = await (0, Wv.until)(() => Ky(e, a));
    return c && Ie.error(`Detected outdated Service Worker: ${c.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `), e.keepAliveInterval = window.setInterval(() => e.workerChannel.send("KEEPALIVE_REQUEST"), 5e3), tg(u, e.startOptions), u;
  })().then(async (s) => {
    const a = s.installing || s.waiting;
    return a && await new Promise((u) => {
      a.addEventListener("statechange", () => {
        if (a.state === "activated")
          return u();
      });
    }), await ty(e, n).catch((u) => {
      throw new Error(`Failed to enable mocking: ${u == null ? void 0 : u.message}`);
    }), s;
  });
  return n.waitUntilReady && Zy(o), o;
};
function Cf(e = {}) {
  e.quiet || console.log(`%c${Ie.formatMessage("Mocking disabled.")}`, "color:orangered;font-weight:bold;");
}
var rg = (e) => function() {
  var n;
  if (!e.isMockingEnabled) {
    Ie.warn('Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.');
    return;
  }
  e.workerChannel.send("MOCK_DEACTIVATE"), e.isMockingEnabled = !1, window.clearInterval(e.keepAliveInterval), Cf({ quiet: (n = e.startOptions) == null ? void 0 : n.quiet });
};
function ig(e, ...t) {
  e.unshift(...t);
}
function og(e) {
  e.forEach((t) => {
    t.markAsSkipped(!1);
  });
}
function sg(e, ...t) {
  return t.length > 0 ? [...t] : [...e];
}
var ag = {
  serviceWorker: {
    url: "/mockServiceWorker.js",
    options: null
  },
  quiet: !1,
  waitUntilReady: !0,
  onUnhandledRequest: "warn",
  findWorker(e, t) {
    return e === t;
  }
};
function ug(e) {
  return Vn(ag, e || {});
}
function cg(e, t) {
  return (n) => (t.startOptions = ug(n), e(t.startOptions, n || {}));
}
var lg = Ci, fg = yv(), dg = Ov();
function pg(e, t) {
  const n = new lg.BatchInterceptor({
    name: "fallback",
    interceptors: [new fg.FetchInterceptor(), new dg.XMLHttpRequestInterceptor()]
  });
  return n.on("request", async (r) => {
    const i = new Fr(r.url, Ke(Be({}, r), {
      body: await r.arrayBuffer()
    })), o = await na(i, e.requestHandlers, t, e.emitter, {
      transformResponse(s) {
        return {
          status: s.status,
          statusText: s.statusText,
          headers: s.headers.all(),
          body: s.body,
          delay: s.delay
        };
      },
      onMockedResponseSent(s, { handler: a, publicRequest: u, parsedRequest: c }) {
        t.quiet || a.log(u, s, a, c);
      }
    });
    o && r.respondWith(o);
  }), n.apply(), n;
}
function hg(e) {
  return async function(n) {
    e.fallbackInterceptor = pg(e, n), pf({
      message: "Mocking enabled (fallback mode).",
      quiet: n.quiet
    });
  };
}
function mg(e) {
  return function() {
    var n, r;
    (n = e.fallbackInterceptor) == null || n.dispose(), Cf({ quiet: (r = e.startOptions) == null ? void 0 : r.quiet });
  };
}
function vg(e, t) {
  const n = e.emit;
  n._isPiped || (e.emit = function(r, ...i) {
    return t.emit(r, ...i), n.call(this, r, ...i);
  }, e.emit._isPiped = !0);
}
var Fo = [];
function yg(...e) {
  if (e.forEach((s) => {
    if (Array.isArray(s))
      throw new Error(Ie.formatMessage('Failed to call "setupWorker" given an Array of request handlers (setupWorker([a, b])), expected to receive each handler individually: setupWorker(a, b).'));
  }), (0, Yv.isNodeProcess)())
    throw new Error(Ie.formatMessage("Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."));
  const t = new Du.StrictEventEmitter(), n = new Du.StrictEventEmitter();
  vg(t, n);
  const r = {
    isMockingEnabled: !1,
    startOptions: void 0,
    worker: null,
    registration: null,
    requestHandlers: [...e],
    emitter: t,
    workerChannel: {
      on(s, a) {
        r.events.addListener(navigator.serviceWorker, "message", (u) => {
          if (u.source !== r.worker)
            return;
          const c = u.data;
          !c || c.type === s && a(u, c);
        });
      },
      send(s) {
        var a;
        (a = r.worker) == null || a.postMessage(s);
      }
    },
    events: {
      addListener(s, a, u) {
        return s.addEventListener(a, u), Fo.push({ eventType: a, target: s, callback: u }), () => {
          s.removeEventListener(a, u);
        };
      },
      removeAllListeners() {
        for (const { target: s, eventType: a, callback: u } of Fo)
          s.removeEventListener(a, u);
        Fo = [];
      },
      once(s) {
        const a = [];
        return new Promise((u, c) => {
          const l = (f) => {
            try {
              const d = f.data;
              d.type === s && u(d);
            } catch (d) {
              c(d);
            }
          };
          a.push(r.events.addListener(navigator.serviceWorker, "message", l), r.events.addListener(navigator.serviceWorker, "messageerror", c));
        }).finally(() => {
          a.forEach((u) => u());
        });
      }
    },
    useFallbackMode: !("serviceWorker" in navigator) || location.protocol === "file:"
  }, i = r.useFallbackMode ? hg(r) : ng(r), o = r.useFallbackMode ? mg(r) : rg(r);
  return {
    start: cg(i, r),
    stop() {
      r.events.removeAllListeners(), r.emitter.removeAllListeners(), n.removeAllListeners(), o();
    },
    use(...s) {
      ig(r.requestHandlers, ...s);
    },
    restoreHandlers() {
      og(r.requestHandlers);
    },
    resetHandlers(...s) {
      r.requestHandlers = sg(e, ...s);
    },
    printHandlers() {
      r.requestHandlers.forEach((s) => {
        const { header: a, callFrame: u } = s.info, c = s.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
        console.groupCollapsed(`${c} ${a}`), u && console.log(`Declaration: ${u}`), console.log("Handler:", s), s instanceof Ki && console.log("Match:", `https://mswjs.io/repl?path=${s.info.path}`), console.groupEnd();
      });
    },
    events: {
      on(...s) {
        return n.on(...s);
      },
      removeListener(...s) {
        return n.removeListener(...s);
      },
      removeAllListeners(...s) {
        return n.removeAllListeners(...s);
      }
    }
  };
}
function zt(e) {
  return (t, n) => new Ki(e, t, n);
}
var gg = {
  all: zt(/.+/),
  head: zt("HEAD"),
  get: zt("GET"),
  post: zt("POST"),
  put: zt("PUT"),
  delete: zt("DELETE"),
  patch: zt("PATCH"),
  options: zt("OPTIONS")
}, vi = Gl;
function yi(e, t) {
  return (n, r) => new Zi(e, n, t, r);
}
function Lf(e) {
  return (t) => new Zi("all", new RegExp(".*"), e, t);
}
var Eg = {
  operation: Lf("*"),
  query: yi(vi.OperationTypeNode.QUERY, "*"),
  mutation: yi(vi.OperationTypeNode.MUTATION, "*")
};
function bg(e) {
  return {
    operation: Lf(e),
    query: yi(vi.OperationTypeNode.QUERY, e),
    mutation: yi(vi.OperationTypeNode.MUTATION, e)
  };
}
var Tg = Ke(Be({}, Eg), {
  link: bg
});
const kf = ({ startOptions: e, requestHandlers: t }, n) => {
  const r = ii(n), [i, o] = gi(!1);
  return fr(() => {
    r.current = n;
  }, [n]), fr(() => {
    const s = Fv.setupWorker(...t(r));
    (async (u) => {
      await u.start(e), o(!0);
    })(s);
  }, []), i;
}, Lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useWorker: kf
}, Symbol.toStringTag, { value: "Module" }));
function Jo(e, t) {
  return Jo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Jo(e, t);
}
function _g(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jo(e, t);
}
var wg = function(t, n) {
  return t === void 0 && (t = []), n === void 0 && (n = []), t.length !== n.length || t.some(function(r, i) {
    return !Object.is(r, n[i]);
  });
}, xu = {
  error: null
}, Ng = /* @__PURE__ */ function(e) {
  _g(t, e);
  function t() {
    for (var r, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return r = e.call.apply(e, [this].concat(o)) || this, r.state = xu, r.resetErrorBoundary = function() {
      for (var a, u = arguments.length, c = new Array(u), l = 0; l < u; l++)
        c[l] = arguments[l];
      r.props.onReset == null || (a = r.props).onReset.apply(a, c), r.reset();
    }, r;
  }
  t.getDerivedStateFromError = function(i) {
    return {
      error: i
    };
  };
  var n = t.prototype;
  return n.reset = function() {
    this.setState(xu);
  }, n.componentDidCatch = function(i, o) {
    var s, a;
    (s = (a = this.props).onError) == null || s.call(a, i, o);
  }, n.componentDidUpdate = function(i, o) {
    var s = this.state.error, a = this.props.resetKeys;
    if (s !== null && o.error !== null && wg(i.resetKeys, a)) {
      var u, c;
      (u = (c = this.props).onResetKeysChange) == null || u.call(c, i.resetKeys, a), this.reset();
    }
  }, n.render = function() {
    var i = this.state.error, o = this.props, s = o.fallbackRender, a = o.FallbackComponent, u = o.fallback;
    if (i !== null) {
      var c = {
        error: i,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ oa.isValidElement(u))
        return u;
      if (typeof s == "function")
        return s(c);
      if (a)
        return /* @__PURE__ */ oe(a, {
          ...c
        });
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, t;
}(oa.Component);
function Sg({
  error: e,
  resetErrorBoundary: t
}) {
  return /* @__PURE__ */ ze("div", {
    role: "alert",
    className: "grid h-screen place-content-center",
    children: [/* @__PURE__ */ oe("p", {
      children: "Something went wrong."
    }), /* @__PURE__ */ oe("pre", {
      children: e.message
    }), /* @__PURE__ */ oe(cn, {
      className: "bg-blue-600 text-white mt-4",
      onClick: t,
      children: "Try again"
    })]
  });
}
function Ig(e) {
  return /* @__PURE__ */ ze(cn, {
    variant: "icon",
    ...e,
    children: [/* @__PURE__ */ oe("span", {
      className: "sr-only",
      children: "Delete"
    }), /* @__PURE__ */ oe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ oe("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      })
    })]
  });
}
function Og({
  customResponse: e,
  setCustomResponses: t
}) {
  const {
    handler: n,
    delay: r,
    status: i,
    response: o
  } = e;
  return /* @__PURE__ */ ze("fieldset", {
    className: "mt-4 border p-2",
    children: [/* @__PURE__ */ ze("legend", {
      children: [n, " ", /* @__PURE__ */ oe(Ig, {
        onClick: () => t((s) => s.filter((a) => a.handler !== n))
      })]
    }), /* @__PURE__ */ ze("div", {
      className: "flex flex-row",
      children: [/* @__PURE__ */ oe(Zr, {
        id: `${n}-delay`,
        type: "number",
        changed: r !== un.delay,
        label: "Delay",
        className: "w-20 mr-4",
        value: r,
        onChange: (s) => t((a) => a.map((u) => u.handler === n ? {
          ...u,
          delay: parseInt(s.target.value)
        } : u))
      }), /* @__PURE__ */ oe(Zr, {
        id: `${n}-status`,
        type: "number",
        changed: i !== un.status,
        label: "Status",
        className: "w-20 mr-4",
        value: i,
        onChange: (s) => t((a) => a.map((u) => u.handler === n ? {
          ...u,
          status: parseInt(s.target.value)
        } : u))
      }), /* @__PURE__ */ oe(Zr, {
        id: `${n}-custom-response`,
        type: "text",
        changed: o !== un.response,
        label: "Response",
        className: "w-20",
        value: o,
        placeholder: "Default",
        onChange: (s) => t((a) => a.map((u) => u.handler === n ? {
          ...u,
          response: s.target.value
        } : u))
      })]
    })]
  });
}
const Fu = "Copy Settings";
function Ag({
  onClick: e,
  ...t
}) {
  const [n, r] = gi(Fu);
  function i(o) {
    r("Copied \u2705"), e && e(o), setTimeout(() => {
      r(Fu);
    }, 2e3);
  }
  return /* @__PURE__ */ oe(cn, {
    variant: "primary",
    onClick: i,
    ...t,
    children: n
  });
}
const un = {
  delay: 0,
  status: 200,
  response: void 0
};
function Rg({
  appSlot: e,
  children: t,
  httpSettings: n,
  customSettings: r,
  className: i,
  ...o
}) {
  const s = n.requestHandlers(ii()), a = B(), [u, c] = sn("openByDefault", a.openByDefault), [l, f] = gi(u), [d, p] = sn("closeViaOutsideClick", a.closeViaOutsideClick), [E, y] = sn("closeViaEscapeKey", a.closeViaEscapeKey), [g, S, D] = sn("delay", a.delay), [L, N] = sn("position", a.position), [C, w] = sn("customResponses", []), P = ii(null);
  function B() {
    var Q, Y, ne, G, K, Z, ie, ue, m, O;
    return {
      closeViaOutsideClick: (Y = (Q = o.defaults) == null ? void 0 : Q.closeViaOutsideClick) != null ? Y : !1,
      closeViaEscapeKey: (G = (ne = o.defaults) == null ? void 0 : ne.closeViaEscapeKey) != null ? G : !0,
      delay: (Z = (K = o.defaults) == null ? void 0 : K.delay) != null ? Z : 0,
      openByDefault: (ue = (ie = o.defaults) == null ? void 0 : ie.openByDefault) != null ? ue : !0,
      position: (O = (m = o.defaults) == null ? void 0 : m.position) != null ? O : "top-left"
    };
  }
  Hf("Escape", () => {
    E && f(!1);
  }), Yf(P, () => {
    d && f(!1);
  });
  const b = () => f(!l);
  function R() {
    const j = {};
    return a.position !== L && (j.position = L), a.openByDefault !== u && (j.openByDefault = u), a.delay != g && (j.delay = g), C.length > 0 && (j.customResponses = C), j;
  }
  async function k() {
    const j = R(), Q = Qf(window.location.href, {
      ...j,
      ...r
    });
    try {
      await zf(Q), Q.length > 2e3 && alert("Warning: The URL copied to your clipboard may not work in all browsers because it's over 2000 characters. To reduce the length, consider redesigning your settings state to store identifiers (such as recordId=1) instead of specifying raw data.");
    } catch {
    }
  }
  return kf(n, {
    delay: g,
    customResponses: C,
    ...r
  }) ? /* @__PURE__ */ ze(jo, {
    children: [/* @__PURE__ */ oe(Ng, {
      FallbackComponent: Sg,
      children: e
    }), /* @__PURE__ */ oe("section", {
      ref: P,
      className: Er("fixed p-4 border shadow-xl max-h-screen overflow-auto bg-white opacity-90", {
        "bottom-0": L.includes("bottom"),
        "top-0": L.includes("top"),
        "right-0": L.includes("right"),
        "left-0": L.includes("left")
      }, i),
      children: l ? /* @__PURE__ */ ze(jo, {
        children: [/* @__PURE__ */ oe("div", {
          className: "flex flex-row-reverse",
          children: /* @__PURE__ */ oe(Vf, {
            "aria-label": "Close DevTools",
            onClick: b
          })
        }), t, /* @__PURE__ */ ze("details", {
          open: !0,
          children: [/* @__PURE__ */ oe("summary", {
            className: "mt-4 font-bold",
            children: "HTTP"
          }), /* @__PURE__ */ oe(Ut, {
            children: /* @__PURE__ */ oe(Zr, {
              id: "globalDelay",
              width: "full",
              changed: D,
              type: "number",
              label: "Global Delay",
              value: g,
              onChange: (j) => S(parseInt(j.target.value))
            })
          }), /* @__PURE__ */ oe(Ut, {
            children: /* @__PURE__ */ ze(ca, {
              width: "full",
              label: "Customize Request Handler",
              value: "",
              onChange: (j) => {
                w([...C, {
                  handler: j.target.value,
                  delay: un.delay,
                  status: un.status,
                  response: un.response
                }]);
              },
              children: [/* @__PURE__ */ oe("option", {
                children: "Select Handler"
              }), s.filter((j) => !C.some((Q) => Q.handler === j.info.header)).sort((j, Q) => j.info.header.localeCompare(Q.info.header)).map((j) => /* @__PURE__ */ oe("option", {
                children: j.info.header
              }, j.info.header))]
            })
          }), C.map((j) => /* @__PURE__ */ oe(Og, {
            customResponse: j,
            setCustomResponses: w
          }, j.handler))]
        }), /* @__PURE__ */ ze("details", {
          className: "mt-4",
          open: !0,
          children: [/* @__PURE__ */ oe("summary", {
            className: "mt-4 font-bold",
            children: "General"
          }), /* @__PURE__ */ oe(Ut, {
            children: /* @__PURE__ */ ze(ca, {
              width: "full",
              label: "Position",
              value: L,
              onChange: (j) => N(j.target.value),
              children: [/* @__PURE__ */ oe("option", {
                value: "top-left",
                children: "Top left"
              }), /* @__PURE__ */ oe("option", {
                value: "top-right",
                children: "Top Right"
              }), /* @__PURE__ */ oe("option", {
                value: "bottom-left",
                children: "Bottom left"
              }), /* @__PURE__ */ oe("option", {
                value: "bottom-right",
                children: "Bottom right"
              })]
            })
          }), /* @__PURE__ */ oe(Ut, {
            children: /* @__PURE__ */ oe(to, {
              id: "openByDefault",
              label: "Open by default",
              onChange: () => c(!u),
              checked: u
            })
          }), /* @__PURE__ */ oe(Ut, {
            children: /* @__PURE__ */ oe(to, {
              id: "closeViaEscapeKey",
              label: "Close via escape key",
              onChange: () => y(!E),
              checked: E
            })
          }), /* @__PURE__ */ oe(Ut, {
            children: /* @__PURE__ */ oe(to, {
              id: "closeViaOutsideClick",
              label: "Close via outside click",
              onChange: () => p(!d),
              checked: d
            })
          }), /* @__PURE__ */ ze("div", {
            className: "flex flex-row",
            children: [/* @__PURE__ */ oe(Ut, {
              children: /* @__PURE__ */ oe(Ag, {
                className: "mr-2 w-32",
                onClick: k
              })
            }), /* @__PURE__ */ oe(Ut, {
              children: /* @__PURE__ */ oe(cn, {
                className: "mr-2",
                onClick: () => {
                  localStorage.clear(), window.location.reload();
                },
                children: "Clear Settings"
              })
            }), /* @__PURE__ */ oe(Ut, {
              children: /* @__PURE__ */ oe(cn, {
                type: "submit",
                onClick: () => window.location.reload(),
                children: "Reload"
              })
            })]
          })]
        })]
      }) : /* @__PURE__ */ oe(Bf, {
        "aria-label": "Open DevTools",
        onClick: b
      })
    })]
  }) : /* @__PURE__ */ oe("p", {
    children: "Initializing..."
  });
}
const kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  customResponseDefaults: un,
  default: Rg
}, Symbol.toStringTag, { value: "Module" }));
export {
  kg as DevTools,
  Cg as useDevToolsState,
  Lg as useWorker
};

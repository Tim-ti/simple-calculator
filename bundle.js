(() => {
  'use strict';
  var n = {
      13: (n, t, e) => {
        e.d(t, { A: () => i });
        var r = e(601),
          o = e.n(r),
          c = e(314),
          a = e.n(c)()(o());
        a.push([
          n.id,
          ".calculator {\n  width: 300px;\n  height: 500px;\n  background-color: var(--background-color-calculator);\n  border-radius: 4%;\n  color: var(--text-color-black);\n  padding: 18px;\n}\n\n.calculator-screen {\n  height: 120px;\n  padding: 10px;\n  display: grid;\n  justify-items: end;\n  align-items: end;\n  margin-bottom: 15px;\n  background-color: var(--background-color-calculator-screen);\n  color: var(--text-color-black);\n}\n\n.calculator-screen p {\n  text-align: right;\n  font-size: 4rem;\n  margin: 0;\n}\n\n.buttons {\n  display: grid;\n  grid-template-areas:\n    'ac plus-minus percent division'\n    'seven eight nine multi'\n    'four five six minus'\n    'one two three plus'\n    'theme zero dot equal';\n  grid-gap: 7px;\n  justify-items: center;\n}\n\n.btn {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 60px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.dark-theme {\n  --background-color-buttons-white: #333;\n  --background-color-buttons-white-grey: #6a6a6a;\n  --background-color-buttons-green: #ff9500;\n  --background-color-calculator: black;\n  --background-color-calculator-screen: rgb(63, 63, 63);\n  --text-color-black: white;\n}\n\n.light-theme {\n  --background-color-buttons-white: #ffffff;\n  --background-color-buttons-white-grey: #d0d0d07f;\n  --background-color-buttons-green: #78e96d;\n  --background-color-calculator: rgb(239, 239, 239);\n  --background-color-calculator-screen: rgb(205, 205, 205);\n  --text-color-black: #000000;\n}\n\n.btn.bg-white {\n  background-color: var(--background-color-buttons-white);\n}\n\n.btn.bg-white-grey {\n  background-color: var(--background-color-buttons-white-grey);\n}\n\n.btn.bg-green {\n  background-color: var(--background-color-buttons-green);\n}\n",
          '',
        ]);
        const i = a;
      },
      314: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (e += '@supports ('.concat(t[4], ') {')),
                  t[2] && (e += '@media '.concat(t[2], ' {')),
                  r &&
                    (e += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {',
                    )),
                  (e += n(t)),
                  r && (e += '}'),
                  t[2] && (e += '}'),
                  t[4] && (e += '}'),
                  e
                );
              }).join('');
            }),
            (t.i = function (n, e, r, o, c) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var l = [].concat(n[s]);
                (r && a[l[0]]) ||
                  (void 0 !== c &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = c)),
                  e &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = e))
                      : (l[2] = e)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === n) {
              e = r;
              break;
            }
          return e;
        }
        function r(n, r) {
          for (var c = {}, a = [], i = 0; i < n.length; i++) {
            var u = n[i],
              s = r.base ? u[0] + r.base : u[0],
              l = c[s] || 0,
              d = ''.concat(s, ' ').concat(l);
            c[s] = l + 1;
            var p = e(d),
              f = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var g = o(f, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: d, updater: g, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var c = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < c.length; a++) {
              var i = e(c[a]);
              t[i].references--;
            }
            for (var u = r(n, o), s = 0; s < c.length; s++) {
              var l = e(c[s]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            c = u;
          };
        };
      },
      659: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var r = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(e);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var t = document.createElement('style');
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      56: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute('nonce', t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var r = '';
                e.supports && (r += '@supports ('.concat(e.supports, ') {')),
                  e.media && (r += '@media '.concat(e.media, ' {'));
                var o = void 0 !== e.layer;
                o &&
                  (r += '@layer'.concat(
                    e.layer.length > 0 ? ' '.concat(e.layer) : '',
                    ' {',
                  )),
                  (r += e.css),
                  o && (r += '}'),
                  e.media && (r += '}'),
                  e.supports && (r += '}');
                var c = e.sourceMap;
                c &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      ' */',
                    )),
                  t.styleTagTransform(r, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var c = (t[r] = { id: r, exports: {} });
    return n[r](c, c.exports, e), c.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0);
  var r = e(72),
    o = e.n(r),
    c = e(825),
    a = e.n(c),
    i = e(659),
    u = e.n(i),
    s = e(56),
    l = e.n(s),
    d = e(540),
    p = e.n(d),
    f = e(113),
    g = e.n(f),
    b = e(13),
    v = {};
  (v.styleTagTransform = g()),
    (v.setAttributes = l()),
    (v.insert = u().bind(null, 'head')),
    (v.domAPI = a()),
    (v.insertStyleElement = p()),
    o()(b.A, v),
    b.A && b.A.locals && b.A.locals;
  const h = 'dark-theme';
  let m = '',
    x = '';
  const y = document.querySelector('.calculator-screen p');
  let k = '',
    C = new Map();
  function w(n) {
    const t = n.target.textContent;
    (k = C.get(t)), (y.textContent += t);
  }
  function E() {
    (document.body.className =
      document.body.className === h ? 'light-theme' : h),
      y.t;
  }
  C.set('+', function (n, t) {
    return n + t;
  }),
    C.set('*', function (n, t) {
      return n * t;
    }),
    C.set('-', function (n, t) {
      return n - t;
    }),
    C.set('/', function (n, t) {
      return n / t;
    }),
    C.set('%', function (n, t) {
      return (n * t) / 100;
    }),
    document.querySelectorAll('.digit').forEach((n) => {
      n.addEventListener('click', function (n) {
        const t = n.target.textContent;
        k
          ? ('.' !== t || y.textContent.includes('.')) &&
            '.' === t &&
            y.textContent.includes('.')
            ? (y.textContent += '')
            : ((x += t), (y.textContent = x))
          : ('.' !== t || y.textContent.includes('.')) &&
              '.' === t &&
              y.textContent.includes('.')
            ? (y.textContent += '')
            : ((m += t), (y.textContent = m)),
          (y.textContent = (function (n) {
            const t = n.replace(/^0+/, '');
            return '' === t ? '0' : t;
          })(y.textContent));
      });
    }),
    document.querySelectorAll('.operation').forEach((n) => {
      n.addEventListener('click', w);
    }),
    document
      .querySelector('.plus-minus')
      .addEventListener('click', function () {
        '' != m && '' === k
          ? ((m = -1 * +m), (y.textContent = m))
          : '' != x && '' != k && ((x = -1 * +x), (y.textContent = x));
      }),
    document.querySelector('.equal').addEventListener('click', function () {
      (m = k(+m, +x)), (y.textContent = m), (k = void 0), (x = '');
    }),
    document.querySelector('.theme').addEventListener('click', E),
    document.querySelector('.ac').addEventListener('click', function () {
      (m = ''), (x = ''), (k = ''), (y.textContent = '');
    }),
    E();
})();

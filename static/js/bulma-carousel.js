!function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.bulmaCarousel = e() : t.bulmaCarousel = e()
 }("undefined" != typeof self ? self : this, function() {
	return function(i) {
	    var n = {};
	    function s(t) {
		   if (n[t])
			  return n[t].exports;
		   var e = n[t] = {
			  i: t,
			  l: !1,
			  exports: {}
		   };
		   return i[t].call(e.exports, e, e.exports, s),
		   e.l = !0,
		   e.exports
	    }
	    return s.m = i,
	    s.c = n,
	    s.d = function(t, e, i) {
		   s.o(t, e) || Object.defineProperty(t, e, {
			  configurable: !1,
			  enumerable: !0,
			  get: i
		   })
	    }
	    ,
	    s.n = function(t) {
		   var e = t && t.__esModule ? function() {
			  return t.default
		   }
		   : function() {
			  return t
		   }
		   ;
		   return s.d(e, "a", e),
		   e
	    }
	    ,
	    s.o = function(t, e) {
		   return Object.prototype.hasOwnProperty.call(t, e)
	    }
	    ,
	    s.p = "",
	    s(s.s = 5)
	}([function(t, e, i) {
	    "use strict";
	    i.d(e, "d", function() {
		   return s
	    }),
	    i.d(e, "e", function() {
		   return r
	    }),
	    i.d(e, "b", function() {
		   return o
	    }),
	    i.d(e, "c", function() {
		   return a
	    }),
	    i.d(e, "a", function() {
		   return l
	    });
	    var n = i(2)
		 , s = function(e, t) {
		   (t = Array.isArray(t) ? t : t.split(" ")).forEach(function(t) {
			  e.classList.remove(t)
		   })
	    }
		 , r = function(t) {
		   return t.getBoundingClientRect().width || t.offsetWidth
	    }
		 , o = function(t) {
		   return t.getBoundingClientRect().height || t.offsetHeight
	    }
		 , a = function(t) {
		   var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
			, i = t.offsetHeight;
		   if (e) {
			  var n = window.getComputedStyle(t);
			  i += parseInt(n.marginTop) + parseInt(n.marginBottom)
		   }
		   return i
	    }
		 , l = function(t, e) {
		   if (!e)
			  return window.getComputedStyle(t);
		   if (Object(n.b)(e)) {
			  var i = "";
			  Object.keys(e).forEach(function(t) {
				 i += t + ": " + e[t] + ";"
			  }),
			  t.style.cssText += i
		   }
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    e.a = function() {
		   var t = !1;
		   try {
			  var e = Object.defineProperty({}, "passive", {
				 get: function() {
					t = !0
				 }
			  });
			  window.addEventListener("testPassive", null, e),
			  window.removeEventListener("testPassive", null, e)
		   } catch (t) {}
		   return t
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    i.d(e, "a", function() {
		   return s
	    }),
	    i.d(e, "c", function() {
		   return r
	    }),
	    i.d(e, "b", function() {
		   return o
	    });
	    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		   return typeof t
	    }
	    : function(t) {
		   return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	    }
		 , s = function(t) {
		   return "function" == typeof t
	    }
		 , r = function(t) {
		   return "string" == typeof t || !!t && "object" === (void 0 === t ? "undefined" : n(t)) && "[object String]" === Object.prototype.toString.call(t)
	    }
		 , o = function(t) {
		   return ("function" == typeof t || "object" === (void 0 === t ? "undefined" : n(t)) && !!t) && !Array.isArray(t)
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    var n = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var s = function() {
		   function e() {
			  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.events = new Map(t)
		   }
		   return n(e, [{
			  key: "on",
			  value: function(t, e) {
				 var i = this;
				 return this.events.set(t, [].concat(function(t) {
					if (Array.isArray(t)) {
					    for (var e = 0, i = Array(t.length); e < t.length; e++)
						   i[e] = t[e];
					    return i
					}
					return Array.from(t)
				 }(this.events.has(t) ? this.events.get(t) : []), [e])),
				 function() {
					return i.events.set(t, i.events.get(t).filter(function(t) {
					    return t !== e
					}))
				 }
			  }
		   }, {
			  key: "emit",
			  value: function(t) {
				 for (var e = arguments.length, i = Array(1 < e ? e - 1 : 0), n = 1; n < e; n++)
					i[n - 1] = arguments[n];
				 return this.events.has(t) && this.events.get(t).map(function(t) {
					return t.apply(void 0, i)
				 })
			  }
		   }]),
		   e
	    }();
	    e.a = s
	}
	, function(t, e, i) {
	    "use strict";
	    var n = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var s = function() {
		   function s() {
			  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
			    , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, s),
			  this._x = t,
			  this._y = e
		   }
		   return n(s, [{
			  key: "add",
			  value: function(t) {
				 return new s(this._x + t._x,this._y + t._y)
			  }
		   }, {
			  key: "sub",
			  value: function(t) {
				 return new s(this._x - t._x,this._y - t._y)
			  }
		   }, {
			  key: "distance",
			  value: function(t) {
				 var e = this._x - t._x
				   , i = this._y - t._y;
				 return Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2))
			  }
		   }, {
			  key: "max",
			  value: function(t) {
				 return new s(Math.max(this._x, t._x),Math.max(this._y, t._y))
			  }
		   }, {
			  key: "equals",
			  value: function(t) {
				 return this == t || !(!t || null == t) && (this._x == t._x && this._y == t._y)
			  }
		   }, {
			  key: "inside",
			  value: function(t, e) {
				 return this._x >= t._x && this._x <= e._x && this._y >= t._y && this._y <= e._y
			  }
		   }, {
			  key: "constrain",
			  value: function(t, e) {
				 if (t._x > e._x || t._y > e._y)
					return this;
				 var i = this._x
				   , n = this._y;
				 return null !== t._x && (i = Math.max(i, t._x)),
				 null !== e._x && (i = Math.min(i, e._x)),
				 null !== t._y && (n = Math.max(n, t._y)),
				 null !== e._y && (n = Math.min(n, e._y)),
				 new s(i,n)
			  }
		   }, {
			  key: "reposition",
			  value: function(t) {
				 t.style.top = this._y + "px",
				 t.style.left = this._x + "px"
			  }
		   }, {
			  key: "toString",
			  value: function() {
				 return "(" + this._x + "," + this._y + ")"
			  }
		   }, {
			  key: "x",
			  get: function() {
				 return this._x
			  },
			  set: function() {
				 var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
				 return this._x = t,
				 this
			  }
		   }, {
			  key: "y",
			  get: function() {
				 return this._y
			  },
			  set: function() {
				 var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
				 return this._y = t,
				 this
			  }
		   }]),
		   s
	    }();
	    e.a = s
	}
	, function(t, e, i) {
	    "use strict";
	    Object.defineProperty(e, "__esModule", {
		   value: !0
	    });
	    var n = i(6)
		 , s = i(0)
		 , a = i(2)
		 , r = i(3)
		 , l = i(7)
		 , h = i(9)
		 , u = i(10)
		 , d = i(11)
		 , c = i(13)
		 , f = i(15)
		 , p = i(18)
		 , v = i(19)
		 , y = i(22)
		 , _ = i(23)
		 , g = i(24)
		 , b = Object.assign || function(t) {
		   for (var e = 1; e < arguments.length; e++) {
			  var i = arguments[e];
			  for (var n in i)
				 Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		   }
		   return t
	    }
		 , w = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var o = function(t) {
		   function o(t) {
			  var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, o);
			  var r = function(t, e) {
				 if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				 return !e || "object" != typeof e && "function" != typeof e ? t : e
			  }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
			  if (r.element = Object(a.c)(t) ? document.querySelector(t) : t,
			  !r.element)
				 throw new Error("An invalid selector or non-DOM node has been provided.");
			  r._clickEvents = ["click", "touch"];
			  var i = r.element.dataset ? Object.keys(r.element.dataset).filter(function(t) {
				 return Object.keys(y.a).includes(t)
			  }).reduce(function(t, e) {
				 return b({}, t, (i = {},
				 n = e,
				 s = r.element.dataset[e],
				 n in i ? Object.defineProperty(i, n, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				 }) : i[n] = s,
				 i));
				 var i, n, s
			  }, {}) : {};
			  return r.options = b({}, y.a, e, i),
			  r._id = Object(n.a)("slider"),
			  r.onShow = r.onShow.bind(r),
			  r._init(),
			  r
		   }
		   return function(t, e) {
			  if ("function" != typeof e && null !== e)
				 throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			  t.prototype = Object.create(e && e.prototype, {
				 constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				 }
			  }),
			  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		   }(o, r["a"]),
		   w(o, [{
			  key: "_init",
			  value: function() {
				 return this._items = Array.from(this.element.children),
				 this._breakpoint = new h.a(this),
				 this._autoplay = new l.a(this),
				 this._navigation = new c.a(this),
				 this._pagination = new f.a(this),
				 this._infinite = new u.a(this),
				 this._loop = new d.a(this),
				 this._swipe = new p.a(this),
				 this._build(),
				 Object(a.a)(this.options.onReady) && this.options.onReady(this),
				 this
			  }
		   }, {
			  key: "_build",
			  value: function() {
				 var i = this;
				 this.node = document.createRange().createContextualFragment(Object(_.a)(this.id)),
				 this._ui = {
					wrapper: this.node.firstChild,
					container: this.node.querySelector(".slider-container")
				 },
				 this.element.appendChild(this.node),
				 this._ui.wrapper.classList.add("is-loading"),
				 this._ui.container.style.opacity = 0,
				 this._transitioner = new v.a(this),
				 this._slides = this._items.map(function(t, e) {
					return i._createSlide(t, e)
				 }),
				 this.reset(),
				 this._bindEvents(),
				 this._ui.container.style.opacity = 1,
				 this._ui.wrapper.classList.remove("is-loading")
			  }
		   }, {
			  key: "_bindEvents",
			  value: function() {
				 this.on("show", this.onShow)
			  }
		   }, {
			  key: "_unbindEvents",
			  value: function() {
				 this.off("show", this.onShow)
			  }
		   }, {
			  key: "_createSlide",
			  value: function(t, e) {
				 var i = document.createRange().createContextualFragment(Object(g.a)()).firstChild;
				 return i.dataset.sliderIndex = e,
				 i.appendChild(t),
				 i
			  }
		   }, {
			  key: "_setDimensions",
			  value: function() {
				 var e = this;
				 this.options.vertical ? (this._ui.wrapper.style.height = Object(s.c)(this._slides[0]) * this.slidesToShow,
				 this.options.centerMode && (this._ui.wrapper.style.padding = this.options.centerPadding + " 0px")) : this.options.centerMode && (this._ui.wrapper.style.padding = "0px " + this.options.centerPadding),
				 this._wrapperWidth = Object(s.e)(this._ui.wrapper),
				 this._wrapperHeight = Object(s.c)(this._ui.wrapper),
				 this.options.vertical ? (this._slideWidth = Math.ceil(this._wrapperWidth),
				 this._containerHeight = Math.ceil(Object(s.c)(this._slides[0]) * this._slides.length),
				 this._ui.container.style.height = this._containerHeight + "px") : (this._slideWidth = Math.ceil(this._wrapperWidth / this.slidesToShow),
				 this._containerWidth = Math.ceil(this._slideWidth * this._slides.length),
				 this._ui.container.style.width = this._containerWidth + "px"),
				 this._slides.forEach(function(t) {
					t.style.width = e._slideWidth + "px"
				 })
			  }
		   }, {
			  key: "_setHeight",
			  value: function() {
				 "translate" !== this.options.effect && (this._ui.container.style.height = Object(s.c)(this._slides[this.state.index]) + "px")
			  }
		   }, {
			  key: "_setClasses",
			  value: function() {
				 var e = this;
				 this._slides.forEach(function(t) {
					Object(s.d)(t, "is-active is-current is-slide-previous is-slide-next"),
					Math.abs((e.state.index - 1) % e.state.length) === parseInt(t.dataset.sliderIndex, 10) && t.classList.add("is-slide-previous"),
					Math.abs(e.state.index % e.state.length) === parseInt(t.dataset.sliderIndex, 10) && t.classList.add("is-current"),
					Math.abs((e.state.index + 1) % e.state.length) === parseInt(t.dataset.sliderIndex, 10) && t.classList.add("is-slide-next")
				 })
			  }
		   }, {
			  key: "onShow",
			  value: function(t) {
				 this._navigation.refresh(),
				 this._pagination.refresh(),
				 this._setClasses()
			  }
		   }, {
			  key: "next",
			  value: function() {
				 !this.options.loop && !this.options.infinite && this.state.index + this.slidesToScroll > this.state.length - this.slidesToShow && !this.options.centerMode ? this.state.next = this.state.index : this.state.next = this.state.index + this.slidesToScroll,
				 this.show()
			  }
		   }, {
			  key: "previous",
			  value: function() {
				 this.options.loop || this.options.infinite || 0 !== this.state.index ? this.state.next = this.state.index - this.slidesToScroll : this.state.next = this.state.index,
				 this.show()
			  }
		   }, {
			  key: "start",
			  value: function() {
				 this._autoplay.start()
			  }
		   }, {
			  key: "pause",
			  value: function() {
				 this._autoplay.pause()
			  }
		   }, {
			  key: "stop",
			  value: function() {
				 this._autoplay.stop()
			  }
		   }, {
			  key: "show",
			  value: function(t) {
				 var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
				 !this.state.length || this.state.length <= this.slidesToShow || ("Number" == typeof t && (this.state.next = t),
				 this.options.loop && this._loop.apply(),
				 this.options.infinite && this._infinite.apply(),
				 this.state.index !== this.state.next && (this.emit("before:show", this.state),
				 this._transitioner.apply(e, this._setHeight.bind(this)),
				 this.emit("after:show", this.state),
				 this.emit("show", this)))
			  }
		   }, {
			  key: "reset",
			  value: function() {
				 var e = this;
				 this.state = {
					length: this._items.length,
					index: Math.abs(this.options.initialSlide),
					next: Math.abs(this.options.initialSlide),
					prev: void 0
				 },
				 this.options.loop && this.options.infinite && (this.options.loop = !1),
				 this.options.slidesToScroll > this.options.slidesToShow && (this.options.slidesToScroll = this.slidesToShow),
				 this._breakpoint.init(),
				 this.state.index >= this.state.length && 0 !== this.state.index && (this.state.index = this.state.index - this.slidesToScroll),
				 this.state.length <= this.slidesToShow && (this.state.index = 0),
				 this._ui.wrapper.appendChild(this._navigation.init().render()),
				 this._ui.wrapper.appendChild(this._pagination.init().render()),
				 this.options.navigationSwipe ? this._swipe.bindEvents() : this._swipe._bindEvents(),
				 this._breakpoint.apply(),
				 this._slides.forEach(function(t) {
					return e._ui.container.appendChild(t)
				 }),
				 this._transitioner.init().apply(!0, this._setHeight.bind(this)),
				 this.options.autoplay && this._autoplay.init().start()
			  }
		   }, {
			  key: "destroy",
			  value: function() {
				 var e = this;
				 this._unbindEvents(),
				 this._items.forEach(function(t) {
					e.element.appendChild(t)
				 }),
				 this.node.remove()
			  }
		   }, {
			  key: "id",
			  get: function() {
				 return this._id
			  }
		   }, {
			  key: "index",
			  set: function(t) {
				 this._index = t
			  },
			  get: function() {
				 return this._index
			  }
		   }, {
			  key: "length",
			  set: function(t) {
				 this._length = t
			  },
			  get: function() {
				 return this._length
			  }
		   }, {
			  key: "slides",
			  get: function() {
				 return this._slides
			  },
			  set: function(t) {
				 this._slides = t
			  }
		   }, {
			  key: "slidesToScroll",
			  get: function() {
				 return "translate" === this.options.effect ? this._breakpoint.getSlidesToScroll() : 1
			  }
		   }, {
			  key: "slidesToShow",
			  get: function() {
				 return "translate" === this.options.effect ? this._breakpoint.getSlidesToShow() : 1
			  }
		   }, {
			  key: "direction",
			  get: function() {
				 return "rtl" === this.element.dir.toLowerCase() || "rtl" === this.element.style.direction ? "rtl" : "ltr"
			  }
		   }, {
			  key: "wrapper",
			  get: function() {
				 return this._ui.wrapper
			  }
		   }, {
			  key: "wrapperWidth",
			  get: function() {
				 return this._wrapperWidth || 0
			  }
		   }, {
			  key: "container",
			  get: function() {
				 return this._ui.container
			  }
		   }, {
			  key: "containerWidth",
			  get: function() {
				 return this._containerWidth || 0
			  }
		   }, {
			  key: "slideWidth",
			  get: function() {
				 return this._slideWidth || 0
			  }
		   }, {
			  key: "transitioner",
			  get: function() {
				 return this._transitioner
			  }
		   }], [{
			  key: "attach",
			  value: function() {
				 var i = this
				   , t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".slider"
				   , n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
				   , s = new Array
				   , e = Object(a.c)(t) ? document.querySelectorAll(t) : Array.isArray(t) ? t : [t];
				 return [].forEach.call(e, function(t) {
					if (void 0 === t[i.constructor.name]) {
					    var e = new o(t,n);
					    t[i.constructor.name] = e,
					    s.push(e)
					} else
					    s.push(t[i.constructor.name])
				 }),
				 s
			  }
		   }]),
		   o
	    }();
	    e.default = o
	}
	, function(t, e, i) {
	    "use strict";
	    i.d(e, "a", function() {
		   return n
	    });
	    var n = function() {
		   return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "") + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(t) {
			  return (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16)
		   })
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    var n = i(3)
		 , s = i(8)
		 , r = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    Symbol("onVisibilityChange"),
	    Symbol("onMouseEnter"),
	    Symbol("onMouseLeave");
	    var o = function(t) {
		   function i(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, i);
			  var e = function(t, e) {
				 if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				 return !e || "object" != typeof e && "function" != typeof e ? t : e
			  }(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
			  return e.slider = t,
			  e.onVisibilityChange = e.onVisibilityChange.bind(e),
			  e.onMouseEnter = e.onMouseEnter.bind(e),
			  e.onMouseLeave = e.onMouseLeave.bind(e),
			  e
		   }
		   return function(t, e) {
			  if ("function" != typeof e && null !== e)
				 throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			  t.prototype = Object.create(e && e.prototype, {
				 constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				 }
			  }),
			  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		   }(i, n["a"]),
		   r(i, [{
			  key: "init",
			  value: function() {
				 return this._bindEvents(),
				 this
			  }
		   }, {
			  key: "_bindEvents",
			  value: function() {
				 document.addEventListener("visibilitychange", this.onVisibilityChange),
				 this.slider.options.pauseOnHover && (this.slider.container.addEventListener(s.a, this.onMouseEnter),
				 this.slider.container.addEventListener(s.b, this.onMouseLeave))
			  }
		   }, {
			  key: "_unbindEvents",
			  value: function() {
				 document.removeEventListener("visibilitychange", this.onVisibilityChange),
				 this.slider.container.removeEventListener(s.a, this.onMouseEnter),
				 this.slider.container.removeEventListener(s.b, this.onMouseLeave)
			  }
		   }, {
			  key: "start",
			  value: function() {
				 var t = this;
				 this.stop(),
				 this.slider.options.autoplay && (this.emit("start", this),
				 this._interval = setInterval(function() {
					t._hovering && t.slider.options.pauseOnHover || (!t.slider.options.centerMode && t.slider.state.next >= t.slider.state.length - t.slider.slidesToShow && !t.slider.options.loop && !t.slider.options.infinite ? t.stop() : t.slider.next())
				 }, this.slider.options.autoplaySpeed))
			  }
		   }, {
			  key: "stop",
			  value: function() {
				 this._interval = clearInterval(this._interval),
				 this.emit("stop", this)
			  }
		   }, {
			  key: "pause",
			  value: function() {
				 var t = this
				   , e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
				 this.paused || (this.timer && this.stop(),
				 this.paused = !0,
				 0 === e ? (this.paused = !1,
				 this.start()) : this.slider.on("transition:end", function() {
					t && (t.paused = !1,
					t.run ? t.start() : t.stop())
				 }))
			  }
		   }, {
			  key: "onVisibilityChange",
			  value: function(t) {
				 document.hidden ? this.stop() : this.start()
			  }
		   }, {
			  key: "onMouseEnter",
			  value: function(t) {
				 this._hovering = !0,
				 this.slider.options.pauseOnHover && this.pause()
			  }
		   }, {
			  key: "onMouseLeave",
			  value: function(t) {
				 this._hovering = !1,
				 this.slider.options.pauseOnHover && this.pause()
			  }
		   }]),
		   i
	    }();
	    e.a = o
	}
	, function(t, e, i) {
	    "use strict";
	    i.d(e, "a", function() {
		   return o
	    }),
	    i.d(e, "b", function() {
		   return a
	    });
	    window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	    window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && window.navigator.maxTouchPoints,
	    navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/),
	    navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/),
	    navigator.userAgent.match(/(iPod)(.*OS\s([\d_]+))?/),
	    !navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/) && navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/),
	    0 <= navigator.userAgent.toLowerCase().indexOf("safari") && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && navigator.userAgent.toLowerCase().indexOf("android"),
	    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
	    var n = !!("ontouchstart"in window)
		 , s = !!("PointerEvent"in window)
		 , r = n || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints
		 , o = r && s ? "pointerenter" : "mouseenter"
		 , a = r && s ? "pointerleave" : "mouseleave"
	}
	, function(t, e, i) {
	    "use strict";
	    var n = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var s = Symbol("onResize")
		 , r = function() {
		   function e(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.slider = t,
			  this.options = t.options,
			  this[s] = this[s].bind(this),
			  this._bindEvents()
		   }
		   return n(e, [{
			  key: "init",
			  value: function() {
				 return this._defaultBreakpoint = {
					slidesToShow: this.options.slidesToShow,
					slidesToScroll: this.options.slidesToScroll
				 },
				 this.options.breakpoints.sort(function(t, e) {
					return parseInt(t.changePoint, 10) > parseInt(e.changePoint, 10)
				 }),
				 this._currentBreakpoint = this._getActiveBreakpoint(),
				 this
			  }
		   }, {
			  key: "destroy",
			  value: function() {
				 this._unbindEvents()
			  }
		   }, {
			  key: "_bindEvents",
			  value: function() {
				 window.addEventListener("resize", this[s]),
				 window.addEventListener("orientationchange", this[s])
			  }
		   }, {
			  key: "_unbindEvents",
			  value: function() {
				 window.removeEventListener("resize", this[s]),
				 window.removeEventListener("orientationchange", this[s])
			  }
		   }, {
			  key: "_getActiveBreakpoint",
			  value: function() {
				 var t = !0
				   , e = !1
				   , i = void 0;
				 try {
					for (var n, s = this.options.breakpoints[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
					    var r = n.value;
					    if (r.changePoint >= window.innerWidth)
						   return r
					}
				 } catch (t) {
					e = !0,
					i = t
				 } finally {
					try {
					    !t && s.return && s.return()
					} finally {
					    if (e)
						   throw i
					}
				 }
				 return this._defaultBreakpoint
			  }
		   }, {
			  key: "getSlidesToShow",
			  value: function() {
				 return this._currentBreakpoint ? this._currentBreakpoint.slidesToShow : this._defaultBreakpoint.slidesToShow
			  }
		   }, {
			  key: "getSlidesToScroll",
			  value: function() {
				 return this._currentBreakpoint ? this._currentBreakpoint.slidesToScroll : this._defaultBreakpoint.slidesToScroll
			  }
		   }, {
			  key: "apply",
			  value: function() {
				 this.slider.state.index >= this.slider.state.length && 0 !== this.slider.state.index && (this.slider.state.index = this.slider.state.index - this._currentBreakpoint.slidesToScroll),
				 this.slider.state.length <= this._currentBreakpoint.slidesToShow && (this.slider.state.index = 0),
				 this.options.loop && this.slider._loop.init().apply(),
				 this.options.infinite && this.slider._infinite.init().apply(),
				 this.slider._setDimensions(),
				 this.slider._transitioner.init().apply(!0, this.slider._setHeight.bind(this.slider)),
				 this.slider._setClasses(),
				 this.slider._navigation.refresh(),
				 this.slider._pagination.refresh()
			  }
		   }, {
			  key: s,
			  value: function(t) {
				 var e = this._getActiveBreakpoint();
				 e.slidesToShow !== this._currentBreakpoint.slidesToShow && (this._currentBreakpoint = e,
				 this.apply())
			  }
		   }]),
		   e
	    }();
	    e.a = r
	}
	, function(t, e, i) {
	    "use strict";
	    var n = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var s = function() {
		   function e(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.slider = t
		   }
		   return n(e, [{
			  key: "init",
			  value: function() {
				 if (this.slider.options.infinite && "translate" === this.slider.options.effect) {
					this.slider.options.centerMode ? this._infiniteCount = Math.ceil(this.slider.slidesToShow + this.slider.slidesToShow / 2) : this._infiniteCount = this.slider.slidesToShow;
					for (var t = [], e = 0, i = this.slider.state.length; i > this.slider.state.length - 1 - this._infiniteCount; i -= 1)
					    e = i - 1,
					    t.unshift(this._cloneSlide(this.slider.slides[e], e - this.slider.state.length));
					for (var n = [], s = 0; s < this._infiniteCount + this.slider.state.length; s += 1)
					    n.push(this._cloneSlide(this.slider.slides[s % this.slider.state.length], s + this.slider.state.length));
					this.slider.slides = [].concat(t, function(t) {
					    if (Array.isArray(t)) {
						   for (var e = 0, i = Array(t.length); e < t.length; e++)
							  i[e] = t[e];
						   return i
					    }
					    return Array.from(t)
					}(this.slider.slides), n)
				 }
				 return this
			  }
		   }, {
			  key: "apply",
			  value: function() {}
		   }, {
			  key: "onTransitionEnd",
			  value: function(t) {
				 this.slider.options.infinite && (this.slider.state.next >= this.slider.state.length ? (this.slider.state.index = this.slider.state.next = this.slider.state.next - this.slider.state.length,
				 this.slider.transitioner.apply(!0)) : this.slider.state.next < 0 && (this.slider.state.index = this.slider.state.next = this.slider.state.length + this.slider.state.next,
				 this.slider.transitioner.apply(!0)))
			  }
		   }, {
			  key: "_cloneSlide",
			  value: function(t, e) {
				 var i = t.cloneNode(!0);
				 return i.dataset.sliderIndex = e,
				 i.dataset.cloned = !0,
				 (i.querySelectorAll("[id]") || []).forEach(function(t) {
					t.setAttribute("id", "")
				 }),
				 i
			  }
		   }]),
		   e
	    }();
	    e.a = s
	}
	, function(t, e, i) {
	    "use strict";
	    var n = i(12)
		 , s = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var r = function() {
		   function e(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.slider = t
		   }
		   return s(e, [{
			  key: "init",
			  value: function() {
				 return this
			  }
		   }, {
			  key: "apply",
			  value: function() {
				 this.slider.options.loop && (0 < this.slider.state.next ? this.slider.state.next < this.slider.state.length ? this.slider.state.next > this.slider.state.length - this.slider.slidesToShow && Object(n.a)(this.slider._slides[this.slider.state.length - 1], this.slider.wrapper) ? this.slider.state.next = 0 : this.slider.state.next = Math.min(Math.max(this.slider.state.next, 0), this.slider.state.length - this.slider.slidesToShow) : this.slider.state.next = 0 : this.slider.state.next <= 0 - this.slider.slidesToScroll ? this.slider.state.next = this.slider.state.length - this.slider.slidesToShow : this.slider.state.next = 0)
			  }
		   }]),
		   e
	    }();
	    e.a = r
	}
	, function(t, e, i) {
	    "use strict";
	    i.d(e, "a", function() {
		   return n
	    });
	    var n = function(t, e) {
		   var i = t.getBoundingClientRect();
		   return e = e || document.documentElement,
		   0 <= i.top && 0 <= i.left && i.bottom <= (window.innerHeight || e.clientHeight) && i.right <= (window.innerWidth || e.clientWidth)
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    var n = i(14)
		 , s = i(1)
		 , r = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var o = function() {
		   function e(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.slider = t,
			  this._clickEvents = ["click", "touch"],
			  this._supportsPassive = Object(s.a)(),
			  this.onPreviousClick = this.onPreviousClick.bind(this),
			  this.onNextClick = this.onNextClick.bind(this),
			  this.onKeyUp = this.onKeyUp.bind(this)
		   }
		   return r(e, [{
			  key: "init",
			  value: function() {
				 return this.node = document.createRange().createContextualFragment(Object(n.a)(this.slider.options.icons)),
				 this._ui = {
					previous: this.node.querySelector(".slider-navigation-previous"),
					next: this.node.querySelector(".slider-navigation-next")
				 },
				 this._unbindEvents(),
				 this._bindEvents(),
				 this.refresh(),
				 this
			  }
		   }, {
			  key: "destroy",
			  value: function() {
				 this._unbindEvents()
			  }
		   }, {
			  key: "_bindEvents",
			  value: function() {
				 var e = this;
				 this.slider.wrapper.addEventListener("keyup", this.onKeyUp),
				 this._clickEvents.forEach(function(t) {
					e._ui.previous.addEventListener(t, e.onPreviousClick),
					e._ui.next.addEventListener(t, e.onNextClick)
				 })
			  }
		   }, {
			  key: "_unbindEvents",
			  value: function() {
				 var e = this;
				 this.slider.wrapper.removeEventListener("keyup", this.onKeyUp),
				 this._clickEvents.forEach(function(t) {
					e._ui.previous.removeEventListener(t, e.onPreviousClick),
					e._ui.next.removeEventListener(t, e.onNextClick)
				 })
			  }
		   }, {
			  key: "onNextClick",
			  value: function(t) {
				 this._supportsPassive || t.preventDefault(),
				 this.slider.options.navigation && this.slider.next()
			  }
		   }, {
			  key: "onPreviousClick",
			  value: function(t) {
				 this._supportsPassive || t.preventDefault(),
				 this.slider.options.navigation && this.slider.previous()
			  }
		   }, {
			  key: "onKeyUp",
			  value: function(t) {
				 this.slider.options.keyNavigation && ("ArrowRight" === t.key || "Right" === t.key ? this.slider.next() : "ArrowLeft" !== t.key && "Left" !== t.key || this.slider.previous())
			  }
		   }, {
			  key: "refresh",
			  value: function() {
				 this.slider.options.loop || this.slider.options.infinite || (this.slider.options.navigation && this.slider.state.length > this.slider.slidesToShow ? (this._ui.previous.classList.remove("is-hidden"),
				 this._ui.next.classList.remove("is-hidden"),
				 0 === this.slider.state.next ? (this._ui.previous.classList.add("is-hidden"),
				 this._ui.next.classList.remove("is-hidden")) : this.slider.state.next >= this.slider.state.length - this.slider.slidesToShow && !this.slider.options.centerMode ? (this._ui.previous.classList.remove("is-hidden"),
				 this._ui.next.classList.add("is-hidden")) : this.slider.state.next >= this.slider.state.length - 1 && this.slider.options.centerMode && (this._ui.previous.classList.remove("is-hidden"),
				 this._ui.next.classList.add("is-hidden"))) : (this._ui.previous.classList.add("is-hidden"),
				 this._ui.next.classList.add("is-hidden")))
			  }
		   }, {
			  key: "render",
			  value: function() {
				 return this.node
			  }
		   }]),
		   e
	    }();
	    e.a = o
	}
	, function(t, e, i) {
	    "use strict";
	    e.a = function(t) {
		   return '<div class="slider-navigation-previous">' + t.previous + '</div>\n<div class="slider-navigation-next">' + t.next + "</div>"
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    var n = i(16)
		 , s = i(17)
		 , r = i(1)
		 , o = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var a = function() {
		   function e(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.slider = t,
			  this._clickEvents = ["click", "touch"],
			  this._supportsPassive = Object(r.a)(),
			  this.onPageClick = this.onPageClick.bind(this),
			  this.onResize = this.onResize.bind(this)
		   }
		   return o(e, [{
			  key: "init",
			  value: function() {
				 return this._pages = [],
				 this.node = document.createRange().createContextualFragment(Object(n.a)()),
				 this._ui = {
					container: this.node.firstChild
				 },
				 this._count = Math.ceil((this.slider.state.length - this.slider.slidesToShow) / this.slider.slidesToScroll),
				 this._draw(),
				 this.refresh(),
				 this
			  }
		   }, {
			  key: "destroy",
			  value: function() {
				 this._unbindEvents()
			  }
		   }, {
			  key: "_bindEvents",
			  value: function() {
				 var i = this;
				 window.addEventListener("resize", this.onResize),
				 window.addEventListener("orientationchange", this.onResize),
				 this._clickEvents.forEach(function(e) {
					i._pages.forEach(function(t) {
					    return t.addEventListener(e, i.onPageClick)
					})
				 })
			  }
		   }, {
			  key: "_unbindEvents",
			  value: function() {
				 var i = this;
				 window.removeEventListener("resize", this.onResize),
				 window.removeEventListener("orientationchange", this.onResize),
				 this._clickEvents.forEach(function(e) {
					i._pages.forEach(function(t) {
					    return t.removeEventListener(e, i.onPageClick)
					})
				 })
			  }
		   }, {
			  key: "_draw",
			  value: function() {
				 if (this._ui.container.innerHTML = "",
				 this.slider.options.pagination && this.slider.state.length > this.slider.slidesToShow) {
					for (var t = 0; t <= this._count; t++) {
					    var e = document.createRange().createContextualFragment(Object(s.a)()).firstChild;
					    e.dataset.index = t * this.slider.slidesToScroll,
					    this._pages.push(e),
					    this._ui.container.appendChild(e)
					}
					this._bindEvents()
				 }
			  }
		   }, {
			  key: "onPageClick",
			  value: function(t) {
				 this._supportsPassive || t.preventDefault(),
				 this.slider.state.next = t.currentTarget.dataset.index,
				 this.slider.show()
			  }
		   }, {
			  key: "onResize",
			  value: function() {
				 this._draw()
			  }
		   }, {
			  key: "refresh",
			  value: function() {
				 var e = this
				   , t = void 0;
				 (t = this.slider.options.infinite ? Math.ceil(this.slider.state.length - 1 / this.slider.slidesToScroll) : Math.ceil((this.slider.state.length - this.slider.slidesToShow) / this.slider.slidesToScroll)) !== this._count && (this._count = t,
				 this._draw()),
				 this._pages.forEach(function(t) {
					t.classList.remove("is-active"),
					parseInt(t.dataset.index, 10) === e.slider.state.next % e.slider.state.length && t.classList.add("is-active")
				 })
			  }
		   }, {
			  key: "render",
			  value: function() {
				 return this.node
			  }
		   }]),
		   e
	    }();
	    e.a = a
	}
	, function(t, e, i) {
	    "use strict";
	    e.a = function() {
		   return '<div class="slider-pagination"></div>'
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    e.a = function() {
		   return '<div class="slider-page"></div>'
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    var n = i(4)
		 , s = i(1)
		 , r = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var o = function() {
		   function e(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.slider = t,
			  this._supportsPassive = Object(s.a)(),
			  this.onStartDrag = this.onStartDrag.bind(this),
			  this.onMoveDrag = this.onMoveDrag.bind(this),
			  this.onStopDrag = this.onStopDrag.bind(this),
			  this._init()
		   }
		   return r(e, [{
			  key: "_init",
			  value: function() {}
		   }, {
			  key: "bindEvents",
			  value: function() {
				 var e = this;
				 this.slider.container.addEventListener("dragstart", function(t) {
					e._supportsPassive || t.preventDefault()
				 }),
				 this.slider.container.addEventListener("mousedown", this.onStartDrag),
				 this.slider.container.addEventListener("touchstart", this.onStartDrag),
				 window.addEventListener("mousemove", this.onMoveDrag),
				 window.addEventListener("touchmove", this.onMoveDrag),
				 window.addEventListener("mouseup", this.onStopDrag),
				 window.addEventListener("touchend", this.onStopDrag),
				 window.addEventListener("touchcancel", this.onStopDrag)
			  }
		   }, {
			  key: "unbindEvents",
			  value: function() {
				 var e = this;
				 this.slider.container.removeEventListener("dragstart", function(t) {
					e._supportsPassive || t.preventDefault()
				 }),
				 this.slider.container.removeEventListener("mousedown", this.onStartDrag),
				 this.slider.container.removeEventListener("touchstart", this.onStartDrag),
				 window.removeEventListener("mousemove", this.onMoveDrag),
				 window.removeEventListener("touchmove", this.onMoveDrag),
				 window.removeEventListener("mouseup", this.onStopDrag),
				 window.removeEventListener("mouseup", this.onStopDrag),
				 window.removeEventListener("touchcancel", this.onStopDrag)
			  }
		   }, {
			  key: "onStartDrag",
			  value: function(t) {
				 if (t.touches) {
					if (1 < t.touches.length)
					    return;
					t = t.touches[0]
				 }
				 this._origin = new n.a(t.screenX,t.screenY),
				 this.width = this.slider.wrapperWidth,
				 this.slider.transitioner.disable()
			  }
		   }, {
			  key: "onMoveDrag",
			  value: function(t) {
				 if (this._origin) {
					var e = t.touches ? t.touches[0] : t;
					this._lastTranslate = new n.a(e.screenX - this._origin.x,e.screenY - this._origin.y),
					t.touches && Math.abs(this._lastTranslate.x) > Math.abs(this._lastTranslate.y) && (this._supportsPassive || t.preventDefault(),
					t.stopPropagation())
				 }
			  }
		   }, {
			  key: "onStopDrag",
			  value: function(t) {
				 this._origin && this._lastTranslate && (Math.abs(this._lastTranslate.x) > .2 * this.width ? this._lastTranslate.x < 0 ? this.slider.next() : this.slider.previous() : this.slider.show(!0)),
				 this._origin = null,
				 this._lastTranslate = null
			  }
		   }]),
		   e
	    }();
	    e.a = o
	}
	, function(t, e, i) {
	    "use strict";
	    var n = i(20)
		 , s = i(21)
		 , r = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var o = function() {
		   function e(t) {
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, e),
			  this.slider = t,
			  this.options = t.options,
			  this._animating = !1,
			  this._animation = void 0,
			  this._translate = new s.a(this,t,t.options),
			  this._fade = new n.a(this,t,t.options)
		   }
		   return r(e, [{
			  key: "init",
			  value: function() {
				 return this._fade.init(),
				 this._translate.init(),
				 this
			  }
		   }, {
			  key: "isAnimating",
			  value: function() {
				 return this._animating
			  }
		   }, {
			  key: "enable",
			  value: function() {
				 this._animation && this._animation.enable()
			  }
		   }, {
			  key: "disable",
			  value: function() {
				 this._animation && this._animation.disable()
			  }
		   }, {
			  key: "apply",
			  value: function(t, e) {
				 if (!this._animating || t) {
					switch (this.options.effect) {
					case "fade":
					    this._animation = this._fade;
					    break;
					case "translate":
					default:
					    this._animation = this._translate
					}
					this._animationCallback = e,
					t ? this._animation && this._animation.disable() : (this._animation && this._animation.enable(),
					this._animating = !0),
					this._animation && this._animation.apply(),
					t && this.end()
				 }
			  }
		   }, {
			  key: "end",
			  value: function() {
				 this._animating = !1,
				 this._animation = void 0,
				 this.slider.state.index = this.slider.state.next,
				 this._animationCallback && this._animationCallback()
			  }
		   }]),
		   e
	    }();
	    e.a = o
	}
	, function(t, e, i) {
	    "use strict";
	    var s = i(0)
		 , r = Object.assign || function(t) {
		   for (var e = 1; e < arguments.length; e++) {
			  var i = arguments[e];
			  for (var n in i)
				 Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		   }
		   return t
	    }
		 , o = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var n = function() {
		   function n(t, e) {
			  var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, n),
			  this.transitioner = t,
			  this.slider = e,
			  this.options = r({}, i)
		   }
		   return o(n, [{
			  key: "init",
			  value: function() {
				 var i = this;
				 return "fade" === this.options.effect && this.slider.slides.forEach(function(t, e) {
					Object(s.a)(t, {
					    position: "absolute",
					    left: 0,
					    top: 0,
					    bottom: 0,
					    "z-index": t.dataset.sliderIndex == i.slider.state.index ? 0 : -2,
					    opacity: t.dataset.sliderIndex == i.slider.state.index ? 1 : 0
					})
				 }),
				 this
			  }
		   }, {
			  key: "enable",
			  value: function() {
				 var e = this;
				 this._oldSlide = this.slider.slides.filter(function(t) {
					return t.dataset.sliderIndex == e.slider.state.index
				 })[0],
				 this._newSlide = this.slider.slides.filter(function(t) {
					return t.dataset.sliderIndex == e.slider.state.next
				 })[0],
				 this._newSlide && (this._newSlide.addEventListener("transitionend", this.onTransitionEnd.bind(this)),
				 this._newSlide.style.transition = this.options.duration + "ms " + this.options.timing,
				 this._oldSlide && (this._oldSlide.addEventListener("transitionend", this.onTransitionEnd.bind(this)),
				 this._oldSlide.style.transition = this.options.duration + "ms " + this.options.timing))
			  }
		   }, {
			  key: "disable",
			  value: function() {
				 var e = this;
				 this._oldSlide = this.slider.slides.filter(function(t) {
					return t.dataset.sliderIndex == e.slider.state.index
				 })[0],
				 this._newSlide = this.slider.slides.filter(function(t) {
					return t.dataset.sliderIndex == e.slider.state.next
				 })[0],
				 this._newSlide && (this._newSlide.removeEventListener("transitionend", this.onTransitionEnd.bind(this)),
				 this._newSlide.style.transition = "none",
				 this._oldSlide && (this._oldSlide.removeEventListener("transitionend", this.onTransitionEnd.bind(this)),
				 this._oldSlide.style.transition = "none"))
			  }
		   }, {
			  key: "apply",
			  value: function(t) {
				 var e = this;
				 this._oldSlide = this.slider.slides.filter(function(t) {
					return t.dataset.sliderIndex == e.slider.state.index
				 })[0],
				 this._newSlide = this.slider.slides.filter(function(t) {
					return t.dataset.sliderIndex == e.slider.state.next
				 })[0],
				 this._oldSlide && this._newSlide && (Object(s.a)(this._oldSlide, {
					opacity: 0
				 }),
				 Object(s.a)(this._newSlide, {
					opacity: 1,
					"z-index": t ? 0 : -1
				 }))
			  }
		   }, {
			  key: "onTransitionEnd",
			  value: function(t) {
				 "fade" === this.options.effect && (this.transitioner.isAnimating() && t.target == this._newSlide && (this._newSlide && (Object(s.a)(this._newSlide, {
					"z-index": 0
				 }),
				 this._newSlide.removeEventListener("transitionend", this.onTransitionEnd.bind(this))),
				 this._oldSlide && (Object(s.a)(this._oldSlide, {
					"z-index": -2
				 }),
				 this._oldSlide.removeEventListener("transitionend", this.onTransitionEnd.bind(this)))),
				 this.transitioner.end())
			  }
		   }]),
		   n
	    }();
	    e.a = n
	}
	, function(t, e, i) {
	    "use strict";
	    var r = i(4)
		 , o = i(0)
		 , s = Object.assign || function(t) {
		   for (var e = 1; e < arguments.length; e++) {
			  var i = arguments[e];
			  for (var n in i)
				 Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		   }
		   return t
	    }
		 , a = function() {
		   function n(t, e) {
			  for (var i = 0; i < e.length; i++) {
				 var n = e[i];
				 n.enumerable = n.enumerable || !1,
				 n.configurable = !0,
				 "value"in n && (n.writable = !0),
				 Object.defineProperty(t, n.key, n)
			  }
		   }
		   return function(t, e, i) {
			  return e && n(t.prototype, e),
			  i && n(t, i),
			  t
		   }
	    }();
	    var n = function() {
		   function n(t, e) {
			  var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
			  !function(t, e) {
				 if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			  }(this, n),
			  this.transitioner = t,
			  this.slider = e,
			  this.options = s({}, i),
			  this.onTransitionEnd = this.onTransitionEnd.bind(this)
		   }
		   return a(n, [{
			  key: "init",
			  value: function() {
				 return this._position = new r.a(this.slider.container.offsetLeft,this.slider.container.offsetTop),
				 this._bindEvents(),
				 this
			  }
		   }, {
			  key: "destroy",
			  value: function() {
				 this._unbindEvents()
			  }
		   }, {
			  key: "_bindEvents",
			  value: function() {
				 this.slider.container.addEventListener("transitionend", this.onTransitionEnd)
			  }
		   }, {
			  key: "_unbindEvents",
			  value: function() {
				 this.slider.container.removeEventListener("transitionend", this.onTransitionEnd)
			  }
		   }, {
			  key: "enable",
			  value: function() {
				 this.slider.container.style.transition = this.options.duration + "ms " + this.options.timing
			  }
		   }, {
			  key: "disable",
			  value: function() {
				 this.slider.container.style.transition = "none"
			  }
		   }, {
			  key: "apply",
			  value: function() {
				 var e = this
				   , t = void 0;
				 if ("translate" === this.options.effect) {
					var i = this.slider.slides.filter(function(t) {
					    return t.dataset.sliderIndex == e.slider.state.next
					})[0]
					  , n = new r.a(i.offsetLeft,i.offsetTop);
					t = this.options.centerMode ? new r.a(Math.round(Object(o.e)(this.slider.container)),Math.round(Object(o.b)(this.slider.container))) : new r.a(Math.round(Object(o.e)(this.slider.container) - Object(o.e)(this.slider.wrapper)),Math.round(Object(o.b)(this.slider.container) - Object(o.b)(this.slider.wrapper)));
					var s = new r.a(Math.min(Math.max(-1 * n.x, -1 * t.x), 0),Math.min(Math.max(-1 * n.y, -1 * t.y), 0));
					this.options.loop && (!this.options.vertical && Math.abs(this._position.x) > t.x ? (s.x = 0,
					this.slider.state.next = 0) : this.options.vertical && Math.abs(this._position.y) > t.y && (s.y = 0,
					this.slider.state.next = 0)),
					this._position.x = s.x,
					this._position.y = s.y,
					this.options.centerMode && (this._position.x = this._position.x + this.slider.wrapperWidth / 2 - Object(o.e)(i) / 2),
					"rtl" === this.slider.direction && (this._position.x = -this._position.x,
					this._position.y = -this._position.y),
					this.slider.container.style.transform = "translate3d(" + this._position.x + "px, " + this._position.y + "px, 0)",
					n.x > t.x && this.slider.transitioner.end()
				 }
			  }
		   }, {
			  key: "onTransitionEnd",
			  value: function(t) {
				 "translate" === this.options.effect && (this.transitioner.isAnimating() && t.target == this.slider.container && this.options.infinite && this.slider._infinite.onTransitionEnd(t),
				 this.transitioner.end())
			  }
		   }]),
		   n
	    }();
	    e.a = n
	}
	, function(t, e, i) {
	    "use strict";
	    e.a = {
		   initialSlide: 0,
		   slidesToScroll: 1,
		   slidesToShow: 1,
		   navigation: !0,
		   navigationKeys: !0,
		   navigationSwipe: !0,
		   pagination: !0,
		   loop: !1,
		   infinite: !1,
		   effect: "translate",
		   duration: 300,
		   timing: "ease",
		   autoplay: !1,
		   autoplaySpeed: 3e3,
		   pauseOnHover: !0,
		   breakpoints: [{
			  changePoint: 480,
			  slidesToShow: 1,
			  slidesToScroll: 1
		   }, {
			  changePoint: 640,
			  slidesToShow: 2,
			  slidesToScroll: 2
		   }, {
			  changePoint: 768,
			  slidesToShow: 3,
			  slidesToScroll: 3
		   }],
		   onReady: null,
		   icons: {
			  previous: '<svg viewBox="0 0 50 80" xml:space="preserve">\n      <polyline fill="currentColor" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n    </svg>',
			  next: '<svg viewBox="0 0 50 80" xml:space="preserve">\n      <polyline fill="currentColor" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n    </svg>'
		   }
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    e.a = function(t) {
		   return '<div id="' + t + '" class="slider" tabindex="0">\n    <div class="slider-container"></div>\n  </div>'
	    }
	}
	, function(t, e, i) {
	    "use strict";
	    e.a = function() {
		   return '<div class="slider-item"></div>'
	    }
	}
	]).default
 });
 
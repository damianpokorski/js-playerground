/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/engine/elements/Rectangle.js":
/*!*********************************************!*\
  !*** ./source/engine/elements/Rectangle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rectangle; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Rectangle =\n/*#__PURE__*/\nfunction (_Element) {\n  _inherits(Rectangle, _Element);\n\n  function Rectangle() {\n    var _this;\n\n    _classCallCheck(this, Rectangle);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).call(this));\n    _this.velocity = new Vector(0, 0);\n    _this.dimensions = new Vector(0, 0);\n    return _this;\n  }\n\n  _createClass(Rectangle, [{\n    key: \"update\",\n    value: function update(delta) {\n      _get(_getPrototypeOf(Rectangle.prototype), \"update\", this).call(this, delta);\n\n      this.wrap_screen();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(delta) {\n      ctx().fillStyle = this.style;\n      ctx().fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);\n    }\n  }]);\n\n  return Rectangle;\n}(_wrapNativeSuper(Element));\n\n;\n\n\n//# sourceURL=webpack:///./source/engine/elements/Rectangle.js?");

/***/ }),

/***/ "./source/engine/elements/element.js":
/*!*******************************************!*\
  !*** ./source/engine/elements/element.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Element; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Element =\n/*#__PURE__*/\nfunction () {\n  function Element() {\n    _classCallCheck(this, Element);\n\n    this.style = \"#FF00FF\";\n    this.position = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n    this.velocity = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n  }\n\n  _createClass(Element, [{\n    key: \"apply_velocity\",\n    value: function apply_velocity(delta) {\n      this.position = this.position.add(this.velocity.multiply(delta));\n    }\n  }, {\n    key: \"wrap_screen\",\n    value: function wrap_screen() {\n      this.position.x = this.position.x % source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().x;\n      this.position.y = this.position.y % source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().y;\n\n      while (this.position.x < 0) {\n        this.position.x += source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().x;\n      }\n\n      while (this.position.y < 0) {\n        this.position.y += source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().y;\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update(delta) {\n      this.apply_velocity(delta);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      Error('Draw function needs to be defined');\n    }\n  }]);\n\n  return Element;\n}();\n\n;\n\n\n//# sourceURL=webpack:///./source/engine/elements/element.js?");

/***/ }),

/***/ "./source/engine/engine.js":
/*!*********************************!*\
  !*** ./source/engine/engine.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Engine =\n/*#__PURE__*/\nfunction () {\n  function Engine() {\n    var _this = this;\n\n    _classCallCheck(this, Engine);\n\n    this.elements = []; // Initialize a clock\n\n    this.total_time = 0;\n    this.last_tick = performance.now(); // Aiming for 60fps\n\n    setInterval(function () {\n      var this_tick = performance.now();\n      var delta = this_tick - _this.last_tick;\n      _this.last_tick = this_tick;\n      _this.total_time += delta;\n\n      _this.draw(delta / 1000);\n    }, 1000 / 60);\n    this.init_game();\n  }\n\n  _createClass(Engine, [{\n    key: \"init_game\",\n    value: function init_game() {\n      // Register player\n      this.elements.push(new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"]()); // Add some mice\n\n      this.elements.push(new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"]());\n      this.elements.push(new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"]());\n      this.elements.push(new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"]());\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(delta) {\n      source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].clear(); // Update all of the elements, then draw them\n\n      this.elements.forEach(function (e) {\n        return e.update(delta);\n      });\n      this.elements.forEach(function (e) {\n        return e.draw(delta);\n      });\n    }\n  }, {\n    key: \"collision_detection\",\n    value: function collision_detection() {\n      // simple collision\n      for (var e1 in this.elements) {\n        for (var e2 in this.elements) {\n          if (e1 instanceof source_import__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"] && e2 instanceof source_import__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"]) {}\n        }\n      }\n    }\n  }]);\n\n  return Engine;\n}();\n\n\n\n//# sourceURL=webpack:///./source/engine/engine.js?");

/***/ }),

/***/ "./source/engine/helpers/canvas.js":
/*!*****************************************!*\
  !*** ./source/engine/helpers/canvas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n  }\n\n  _createClass(Canvas, null, [{\n    key: \"Init\",\n    value: function Init() {\n      Canvas.clear_color = \"#000000\";\n      Canvas.dom = document.createElement('canvas');\n      Canvas.dom.id = \"engine\";\n      source_import__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].Get.body().appendChild(Canvas.dom);\n      Canvas.context = Canvas.dom.getContext(\"2d\");\n      Canvas.resize();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      Canvas.context.width = window.innerWidth;\n      Canvas.context.height = window.innerHeight;\n      Canvas.dom.setAttribute(\"width\", Canvas.context.width);\n      Canvas.dom.setAttribute(\"height\", Canvas.context.height);\n      Canvas.clear();\n    }\n  }, {\n    key: \"size\",\n    value: function size() {\n      return {\n        x: Canvas.context.width,\n        y: Canvas.context.height\n      };\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      Canvas.context.fillStyle = Canvas.clear_color;\n      Canvas.context.fillRect(0, 0, Canvas.size().x, Canvas.size().y);\n    }\n  }, {\n    key: \"ctx\",\n    value: function ctx() {\n      return Canvas.context;\n    }\n  }]);\n\n  return Canvas;\n}();\n\nCanvas.Init();\n\n\n//# sourceURL=webpack:///./source/engine/helpers/canvas.js?");

/***/ }),

/***/ "./source/engine/helpers/dom.js":
/*!**************************************!*\
  !*** ./source/engine/helpers/dom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dom; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Dom = function Dom() {\n  _classCallCheck(this, Dom);\n};\n\n;\n\nDom.Get =\n/*#__PURE__*/\nfunction () {\n  function _class() {\n    _classCallCheck(this, _class);\n  }\n\n  _createClass(_class, null, [{\n    key: \"FirstOfTag\",\n    value: function FirstOfTag(tag) {\n      return document.getElementsByTagName(tag)[0];\n    }\n  }, {\n    key: \"Id\",\n    value: function Id(id) {\n      return document.getElementById(id);\n    }\n  }, {\n    key: \"body\",\n    value: function body() {\n      return Dom.Get.FirstOfTag(\"body\");\n    }\n  }]);\n\n  return _class;\n}();\n\nDom.Events =\n/*#__PURE__*/\nfunction () {\n  function _class2() {\n    _classCallCheck(this, _class2);\n  }\n\n  _createClass(_class2, null, [{\n    key: \"resize\",\n    value: function resize(func) {\n      window.addEventListener('resize', func, true);\n    }\n  }, {\n    key: \"keyup\",\n    value: function keyup(func) {\n      window.addEventListener('keyup', func, true);\n    }\n  }, {\n    key: \"keydown\",\n    value: function keydown(func) {\n      window.addEventListener('keydown', func, true);\n    }\n  }]);\n\n  return _class2;\n}();\n\n\n\n//# sourceURL=webpack:///./source/engine/helpers/dom.js?");

/***/ }),

/***/ "./source/engine/structures/vector.js":
/*!********************************************!*\
  !*** ./source/engine/structures/vector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Vector =\n/*#__PURE__*/\nfunction () {\n  function Vector() {\n    var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n    var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    _classCallCheck(this, Vector);\n\n    this.x = _x;\n    this.y = _y;\n  }\n\n  _createClass(Vector, [{\n    key: \"clone\",\n    value: function clone() {\n      return new Vector(this.x, this.y);\n    }\n  }, {\n    key: \"add\",\n    value: function add(_addition) {\n      return Vector.isVector(_addition) ? new Vector(this.x + _addition.x, this.y + _addition.y) : new Vector(this.x + _addition, this.y + _addition);\n    }\n  }, {\n    key: \"substract\",\n    value: function substract(_substraction) {\n      return Vector.isVector(_substraction) ? new Vector(this.x - _substraction.x, this.y - _substraction.y) : new Vector(this.x - _substraction, this.y - _substraction);\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(_multiplier) {\n      return Vector.isVector(_multiplier) ? new Vector(this.x * _multiplier.x, this.y * _multiplier.y) : new Vector(this.x * _multiplier, this.y * _multiplier);\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(_divider) {\n      return Vector.isVector(_divider) ? new Vector(this.x / _divider.x, this.y / _divider.y) : new Vector(this.x / _divider, this.y / _divider);\n    }\n  }, {\n    key: \"equals\",\n    value: function equals(other) {\n      return this.x == other.x && this.y == other.y;\n    }\n  }, {\n    key: \"align_to_grid\",\n    value: function align_to_grid(_gridDimensions) {\n      return Vector.isVector(_gridDimensions) ? new Vector(this.x - this.x % _gridDimensions.x, this.y - this.y % _gridDimensions.y) : new Vector(this.x - this.x % _gridDimensions, this.y - this.y % _gridDimensions);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"X: \".concat(this.x, \" Y: \").concat(this.y);\n    }\n  }], [{\n    key: \"isVector\",\n    value: function isVector(obj) {\n      return obj instanceof Vector;\n    }\n  }]);\n\n  return Vector;\n}();\n\n\nVector.up = new Vector(0, -1);\nVector.down = new Vector(0, 1);\nVector.left = new Vector(-1, 0);\nVector.right = new Vector(1, 0);\n\n//# sourceURL=webpack:///./source/engine/structures/vector.js?");

/***/ }),

/***/ "./source/game/elements/mouse.js":
/*!***************************************!*\
  !*** ./source/game/elements/mouse.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mouse; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Mouse =\n/*#__PURE__*/\nfunction (_Rectangle) {\n  _inherits(Mouse, _Rectangle);\n\n  function Mouse() {\n    var _this;\n\n    _classCallCheck(this, Mouse);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mouse).call(this));\n    _this.position.x = Math.random() * canvas.size().x;\n    _this.position.y = Math.random() * canvas.size().y;\n    _this.dimensions.x = 40;\n    _this.dimensions.y = 40;\n    _this.position = _this.position.align_to_grid(_this.dimensions);\n    _this.style = \"#FF3300\";\n    return _this;\n  }\n\n  return Mouse;\n}(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"]);\n\n\n\n//# sourceURL=webpack:///./source/game/elements/mouse.js?");

/***/ }),

/***/ "./source/game/elements/snake.js":
/*!***************************************!*\
  !*** ./source/game/elements/snake.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Snake =\n/*#__PURE__*/\nfunction (_Element) {\n  _inherits(Snake, _Element);\n\n  function Snake() {\n    var _this;\n\n    _classCallCheck(this, Snake);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snake).call(this));\n    _this.chunk_size = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](40, 40);\n    _this.position = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n    _this.segments = [];\n    _this.trail_length = 3; // Movement\n\n    _this.speed = 350;\n    _this.direction = source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right;\n    _this.velocity = _this.direction.multiply(_this.speed); // Events\n\n    console.log(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"], source_import__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].Events);\n    source_import__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].Events.keyup(function (x) {\n      return _this.switch_direction(x);\n    });\n    return _this;\n  }\n\n  _createClass(Snake, [{\n    key: \"trail\",\n    value: function trail() {\n      // Trail which follows player\n      var grid_aligned_position = this.position.align_to_grid(this.chunk_size);\n\n      if (this.segments.filter(function (x) {\n        return x.position.equals(grid_aligned_position);\n      }).length == 0) {\n        console.log(new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"]());\n        var t = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Trail\"]();\n        this.segments.push(t);\n      } // Limit trail to the specific length\n\n\n      while (this.segments.length > this.trail_length) {\n        this.segments.shift();\n      }\n    }\n  }, {\n    key: \"switch_direction\",\n    value: function switch_direction(key_event) {\n      switch (key_event.key) {\n        case 'ArrowUp':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].down) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].down : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].up;\n          break;\n\n        case 'ArrowDown':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].up) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].up : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].down;\n          break;\n\n        case 'ArrowLeft':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].left;\n          break;\n\n        case 'ArrowRight':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].left) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].left : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right;\n          break;\n      }\n\n      this.velocity = this.direction.multiply(this.speed);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(delta) {\n      //super.draw(delta);\n      this.segments.forEach(function (segment) {\n        return segment.draw(delta);\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update(delta) {\n      _get(_getPrototypeOf(Snake.prototype), \"update\", this).call(this, delta);\n\n      this.wrap_screen();\n      this.trail();\n      this.segments.forEach(function (segment) {\n        return segment.update(delta);\n      });\n    }\n  }]);\n\n  return Snake;\n}(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Element\"]);\n\n;\n\n\n//# sourceURL=webpack:///./source/game/elements/snake.js?");

/***/ }),

/***/ "./source/game/elements/trail.js":
/*!***************************************!*\
  !*** ./source/game/elements/trail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Trail; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Trail =\n/*#__PURE__*/\nfunction (_Rectangle) {\n  _inherits(Trail, _Rectangle);\n\n  function Trail() {\n    _classCallCheck(this, Trail);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Trail).call(this)); // this.position = _position;\n    // this.dimensions.x = 40;\n    // this.dimensions.y = 40;\n    // this.style = \"#FF00BB\";\n  }\n\n  _createClass(Trail, [{\n    key: \"update\",\n    value: function update(delta) {// super.update(delta);\n    }\n  }]);\n\n  return Trail;\n}(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"]);\n\n\n\n//# sourceURL=webpack:///./source/game/elements/trail.js?");

/***/ }),

/***/ "./source/game/game.js":
/*!*****************************!*\
  !*** ./source/game/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./source/game/game.js?");

/***/ }),

/***/ "./source/import.js":
/*!**************************!*\
  !*** ./source/import.js ***!
  \**************************/
/*! exports provided: Dom, Canvas, Vector, Element, Rectangle, Trail, Snake, Mouse, Engine, Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var source_engine_helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/engine/helpers/dom */ \"./source/engine/helpers/dom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dom\", function() { return source_engine_helpers_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var source_engine_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source/engine/helpers/canvas */ \"./source/engine/helpers/canvas.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return source_engine_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var source_engine_structures_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! source/engine/structures/vector */ \"./source/engine/structures/vector.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vector\", function() { return source_engine_structures_vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var source_engine_elements_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! source/engine/elements/element */ \"./source/engine/elements/element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Element\", function() { return source_engine_elements_element__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var source_engine_elements_Rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! source/engine/elements/Rectangle */ \"./source/engine/elements/Rectangle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Rectangle\", function() { return source_engine_elements_Rectangle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var source_game_elements_trail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! source/game/elements/trail */ \"./source/game/elements/trail.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Trail\", function() { return source_game_elements_trail__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var source_game_elements_snake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! source/game/elements/snake */ \"./source/game/elements/snake.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return source_game_elements_snake__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var source_game_elements_mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! source/game/elements/mouse */ \"./source/game/elements/mouse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mouse\", function() { return source_game_elements_mouse__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var source_engine_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! source/engine/engine */ \"./source/engine/engine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return source_engine_engine__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var source_game_game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! source/game/game */ \"./source/game/game.js\");\n/* harmony import */ var source_game_game__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(source_game_game__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return source_game_game__WEBPACK_IMPORTED_MODULE_9___default.a; });\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./source/import.js?");

/***/ }),

/***/ "./source/main.js":
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\n\nvar e = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"]();\n\n//# sourceURL=webpack:///./source/main.js?");

/***/ })

/******/ });
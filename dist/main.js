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

/***/ "./source/engine/elements/element.js":
/*!*******************************************!*\
  !*** ./source/engine/elements/element.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Element; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Element =\n/*#__PURE__*/\nfunction () {\n  function Element() {\n    _classCallCheck(this, Element);\n\n    this.style = '#FF00FF';\n    this.position = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n    this.velocity = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n  }\n\n  _createClass(Element, [{\n    key: \"applyVelocity\",\n    value: function applyVelocity(delta) {\n      this.position = this.position.add(this.velocity.multiply(delta));\n    }\n  }, {\n    key: \"wrapScreen\",\n    value: function wrapScreen() {\n      this.position.x = this.position.x % source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().x;\n      this.position.y = this.position.y % source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().y;\n\n      while (this.position.x < 0) {\n        this.position.x += source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().x;\n      }\n\n      while (this.position.y < 0) {\n        this.position.y += source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size().y;\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update(delta) {\n      this.applyVelocity(delta);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      Error(\"\".concat(this.constructor.name, \" - which inherits from Element, should not call super on draw function as it's a stub method.\"));\n    }\n  }]);\n\n  return Element;\n}();\n\n\n\n//# sourceURL=webpack:///./source/engine/elements/element.js?");

/***/ }),

/***/ "./source/engine/elements/rectangle.js":
/*!*********************************************!*\
  !*** ./source/engine/elements/rectangle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rectangle; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Rectangle =\n/*#__PURE__*/\nfunction (_Element) {\n  _inherits(Rectangle, _Element);\n\n  function Rectangle() {\n    var _this;\n\n    _classCallCheck(this, Rectangle);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).call(this));\n    _this.velocity = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n    _this.dimensions = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n    return _this;\n  }\n\n  _createClass(Rectangle, [{\n    key: \"update\",\n    value: function update(delta) {\n      _get(_getPrototypeOf(Rectangle.prototype), \"update\", this).call(this, delta);\n\n      this.wrapScreen();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].ctx().fillStyle = this.style;\n      source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].ctx().fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);\n    }\n  }, {\n    key: \"collide\",\n    value: function collide(other) {\n      if (this.position.x < other.position.x + other.dimensions.x && this.position.y < other.position.y + other.dimensions.y && this.position.x + this.dimensions.x > other.position.x && this.position.y + this.dimensions.y > other.position.y) {\n        return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return Rectangle;\n}(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Element\"]);\n\n\n\n//# sourceURL=webpack:///./source/engine/elements/rectangle.js?");

/***/ }),

/***/ "./source/engine/engine.js":
/*!*********************************!*\
  !*** ./source/engine/engine.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Engine =\n/*#__PURE__*/\nfunction () {\n  function Engine() {\n    _classCallCheck(this, Engine);\n\n    // Initialize a clock\n    this.total_time = 0;\n    this.last_tick = performance.now();\n    this.draw_fps = false;\n    this.game = null;\n  }\n\n  _createClass(Engine, [{\n    key: \"loadGame\",\n    value: function loadGame(game) {\n      this.game = game;\n      this.tick();\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      var _this = this;\n\n      Engine.requestFrame(function () {\n        return _this.tick();\n      });\n      var delta = performance.now() - this.last_tick;\n      this.last_tick = performance.now();\n      this.total_time += delta;\n      this.update(delta / 1000);\n      this.draw();\n\n      if (this.draw_fps) {\n        source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].drawText(100, 100, Math.round(1000 / delta));\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].clear();\n      this.game.draw();\n    }\n  }, {\n    key: \"update\",\n    value: function update(delta) {\n      this.game.update(delta);\n    }\n  }], [{\n    key: \"requestFrame\",\n    value: function requestFrame(callback) {\n      var handler = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function () {\n        return window.setTimeout(callback, 1000 / 60);\n      };\n\n      handler(callback);\n    }\n  }]);\n\n  return Engine;\n}();\n\n\n\n//# sourceURL=webpack:///./source/engine/engine.js?");

/***/ }),

/***/ "./source/engine/helpers/canvas.js":
/*!*****************************************!*\
  !*** ./source/engine/helpers/canvas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n  }\n\n  _createClass(Canvas, null, [{\n    key: \"Init\",\n    value: function Init() {\n      Canvas.clear_color = '#000000';\n      Canvas.dom = document.createElement('canvas');\n      Canvas.dom.id = 'engine';\n      source_import__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].Get.body().appendChild(Canvas.dom);\n      Canvas.context = Canvas.dom.getContext('2d');\n      Canvas.resize();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      Canvas.context.width = window.innerWidth;\n      Canvas.context.height = window.innerHeight;\n      Canvas.dom.setAttribute('width', Canvas.context.width);\n      Canvas.dom.setAttribute('height', Canvas.context.height);\n      Canvas.clear();\n    }\n  }, {\n    key: \"size\",\n    value: function size() {\n      return {\n        x: Canvas.context.width,\n        y: Canvas.context.height\n      };\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      Canvas.context.fillStyle = Canvas.clear_color;\n      Canvas.context.fillRect(0, 0, Canvas.size().x, Canvas.size().y);\n    }\n  }, {\n    key: \"ctx\",\n    value: function ctx() {\n      return Canvas.context;\n    }\n  }, {\n    key: \"drawText\",\n    value: function drawText(x, y, text) {\n      Canvas.ctx().fillStyle = '#FFFFFF';\n      Canvas.ctx().font = '30px Arial';\n      Canvas.ctx().fillText(text, x, y);\n    }\n  }]);\n\n  return Canvas;\n}();\n\nCanvas.Init();\n\n\n//# sourceURL=webpack:///./source/engine/helpers/canvas.js?");

/***/ }),

/***/ "./source/engine/helpers/dom.js":
/*!**************************************!*\
  !*** ./source/engine/helpers/dom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dom; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Dom = function Dom() {\n  _classCallCheck(this, Dom);\n};\n\nDom.Get =\n/*#__PURE__*/\nfunction () {\n  function _class() {\n    _classCallCheck(this, _class);\n  }\n\n  _createClass(_class, null, [{\n    key: \"FirstOfTag\",\n    value: function FirstOfTag(tag) {\n      return document.getElementsByTagName(tag)[0];\n    }\n  }, {\n    key: \"Id\",\n    value: function Id(id) {\n      return document.getElementById(id);\n    }\n  }, {\n    key: \"body\",\n    value: function body() {\n      return Dom.Get.FirstOfTag('body');\n    }\n  }]);\n\n  return _class;\n}();\n\nDom.Events =\n/*#__PURE__*/\nfunction () {\n  function _class2() {\n    _classCallCheck(this, _class2);\n  }\n\n  _createClass(_class2, null, [{\n    key: \"resize\",\n    value: function resize(func) {\n      window.addEventListener('resize', func, true);\n    }\n  }, {\n    key: \"keyup\",\n    value: function keyup(func) {\n      window.addEventListener('keyup', func, true);\n    }\n  }, {\n    key: \"keydown\",\n    value: function keydown(func) {\n      window.addEventListener('keydown', func, true);\n    }\n  }, {\n    key: \"click\",\n    value: function click(func) {\n      window.addEventListener('click', func, true);\n    }\n  }]);\n\n  return _class2;\n}();\n\n\n\n//# sourceURL=webpack:///./source/engine/helpers/dom.js?");

/***/ }),

/***/ "./source/engine/structures/vector.js":
/*!********************************************!*\
  !*** ./source/engine/structures/vector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Vector =\n/*#__PURE__*/\nfunction () {\n  function Vector() {\n    var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n    var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    _classCallCheck(this, Vector);\n\n    this.x = _x;\n    this.y = _y;\n  }\n\n  _createClass(Vector, [{\n    key: \"clone\",\n    value: function clone() {\n      return new Vector(this.x, this.y);\n    }\n  }, {\n    key: \"add\",\n    value: function add(_addition) {\n      return Vector.isVector(_addition) ? new Vector(this.x + _addition.x, this.y + _addition.y) : new Vector(this.x + _addition, this.y + _addition);\n    }\n  }, {\n    key: \"substract\",\n    value: function substract(_substraction) {\n      return Vector.isVector(_substraction) ? new Vector(this.x - _substraction.x, this.y - _substraction.y) : new Vector(this.x - _substraction, this.y - _substraction);\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(_multiplier) {\n      return Vector.isVector(_multiplier) ? new Vector(this.x * _multiplier.x, this.y * _multiplier.y) : new Vector(this.x * _multiplier, this.y * _multiplier);\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(_divider) {\n      return Vector.isVector(_divider) ? new Vector(this.x / _divider.x, this.y / _divider.y) : new Vector(this.x / _divider, this.y / _divider);\n    }\n  }, {\n    key: \"equals\",\n    value: function equals(other) {\n      return this.x === other.x && this.y === other.y;\n    }\n  }, {\n    key: \"alignToGrid\",\n    value: function alignToGrid(_gridDimensions) {\n      return Vector.isVector(_gridDimensions) ? new Vector(this.x - this.x % _gridDimensions.x, this.y - this.y % _gridDimensions.y) : new Vector(this.x - this.x % _gridDimensions, this.y - this.y % _gridDimensions);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"X: \".concat(this.x, \" Y: \").concat(this.y);\n    }\n  }], [{\n    key: \"isVector\",\n    value: function isVector(obj) {\n      return obj instanceof Vector;\n    }\n  }, {\n    key: \"randomWithinCanvas\",\n    value: function randomWithinCanvas() {\n      var padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var boundaries = source_import__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"].size();\n      return new Vector(Math.max(padding, Math.min(Math.random() * boundaries.x, boundaries.x - padding)), Math.max(padding, Math.min(Math.random() * boundaries.y, boundaries.y - padding)));\n    }\n  }]);\n\n  return Vector;\n}();\n\n\nVector.up = new Vector(0, -1);\nVector.down = new Vector(0, 1);\nVector.left = new Vector(-1, 0);\nVector.right = new Vector(1, 0);\n\n//# sourceURL=webpack:///./source/engine/structures/vector.js?");

/***/ }),

/***/ "./source/game/config.js":
/*!*******************************!*\
  !*** ./source/game/config.js ***!
  \*******************************/
/*! exports provided: chunkSize, trailLength, playerSpeed, playerSpeedBoost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunkSize\", function() { return chunkSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trailLength\", function() { return trailLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerSpeed\", function() { return playerSpeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerSpeedBoost\", function() { return playerSpeedBoost; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\n\nvar chunkSize = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](25, 25);\nvar trailLength = 5;\nvar playerSpeed = 250;\nvar playerSpeedBoost = 25;\n\n\n//# sourceURL=webpack:///./source/game/config.js?");

/***/ }),

/***/ "./source/game/elements/mouse.js":
/*!***************************************!*\
  !*** ./source/game/elements/mouse.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mouse; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\n/* harmony import */ var source_game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source/game/config */ \"./source/game/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Mouse =\n/*#__PURE__*/\nfunction (_Rectangle) {\n  _inherits(Mouse, _Rectangle);\n\n  function Mouse() {\n    var _this;\n\n    _classCallCheck(this, Mouse);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mouse).call(this));\n    _this.dimensions = source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"chunkSize\"];\n    _this.position = source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].randomWithinCanvas(source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"chunkSize\"].x).alignToGrid(_this.dimensions);\n    _this.style = '#FF3300';\n    return _this;\n  }\n\n  return Mouse;\n}(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"]);\n\n\n\n//# sourceURL=webpack:///./source/game/elements/mouse.js?");

/***/ }),

/***/ "./source/game/elements/snake.js":
/*!***************************************!*\
  !*** ./source/game/elements/snake.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\n/* harmony import */ var source_game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source/game/config */ \"./source/game/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Snake =\n/*#__PURE__*/\nfunction (_Element) {\n  _inherits(Snake, _Element);\n\n  function Snake() {\n    var _this;\n\n    _classCallCheck(this, Snake);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snake).call(this)); // Assume defaults\n\n    _this.reset(); // Events\n\n\n    source_import__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].Events.keyup(function (x) {\n      return _this.switchDirection(x);\n    });\n    return _this;\n  }\n\n  _createClass(Snake, [{\n    key: \"hasTrail\",\n    value: function hasTrail() {\n      return this.segments.length > 0;\n    }\n  }, {\n    key: \"frontSegment\",\n    value: function frontSegment() {\n      return this.segments[this.segments.length - 1];\n    }\n  }, {\n    key: \"trail\",\n    value: function trail() {\n      // Trail which follows player - align pixel perfect moving position to grid.\n      var gridAlignedPosition = this.position.alignToGrid(source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"chunkSize\"]);\n\n      if (!this.hasTrail() || !this.frontSegment().position.equals(gridAlignedPosition)) {\n        this.segments.push(new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Trail\"](gridAlignedPosition));\n        this.calculateVelocity();\n      } // Limit trail to the specific length\n\n\n      while (this.segments.length > this.trailLength) {\n        this.segments.shift();\n      }\n    }\n  }, {\n    key: \"switchDirection\",\n    value: function switchDirection(keyEvent) {\n      switch (keyEvent.key) {\n        case 'ArrowUp':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].down) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].down : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].up;\n          break;\n\n        case 'ArrowDown':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].up) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].up : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].down;\n          break;\n\n        case 'ArrowLeft':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].left;\n          break;\n\n        case 'ArrowRight':\n          this.direction = this.direction.equals(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].left) ? source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].left : source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right;\n          break;\n\n        default:\n          return;\n      }\n\n      this.calculateVelocity();\n    }\n  }, {\n    key: \"calculateVelocity\",\n    value: function calculateVelocity() {\n      this.speed = source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"playerSpeed\"] + source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"playerSpeedBoost\"] * this.segments.length;\n      this.velocity = this.direction.multiply(this.speed);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      this.segments.forEach(function (segment) {\n        return segment.draw();\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update(delta) {\n      _get(_getPrototypeOf(Snake.prototype), \"update\", this).call(this, delta);\n\n      this.collideWithSelf();\n      this.wrapScreen();\n      this.trail();\n      this.segments.forEach(function (segment) {\n        return segment.update(delta);\n      });\n    }\n  }, {\n    key: \"collide\",\n    value: function collide(other) {\n      return this.segments.some(function (segment) {\n        return segment.collide(other);\n      });\n    }\n  }, {\n    key: \"collideWithSelf\",\n    value: function collideWithSelf() {\n      for (var x = 0; x < this.segments.length; x += 1) {\n        for (var y = x + 1; y < this.segments.length; y += 1) {\n          if (this.segments[x].collide(this.segments[y])) {\n            this.reset();\n          }\n        }\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      // Reset all of the properties\n      this.trailLength = 3;\n      this.segments = [];\n      this.speed = source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"playerSpeed\"];\n      this.position = source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].randomWithinCanvas(source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"chunkSize\"].x).alignToGrid(source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"chunkSize\"]);\n      this.direction = source_import__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"].right;\n      this.calculateVelocity();\n    }\n  }]);\n\n  return Snake;\n}(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Element\"]);\n\n\n\n//# sourceURL=webpack:///./source/game/elements/snake.js?");

/***/ }),

/***/ "./source/game/elements/trail.js":
/*!***************************************!*\
  !*** ./source/game/elements/trail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Trail; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\n/* harmony import */ var source_game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source/game/config */ \"./source/game/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Trail =\n/*#__PURE__*/\nfunction (_Rectangle) {\n  _inherits(Trail, _Rectangle);\n\n  function Trail(_position) {\n    var _this;\n\n    _classCallCheck(this, Trail);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Trail).call(this));\n    _this.position = _position;\n    _this.dimensions = source_game_config__WEBPACK_IMPORTED_MODULE_1__[\"chunkSize\"];\n    _this.style = '#22FF22';\n    return _this;\n  }\n\n  _createClass(Trail, [{\n    key: \"update\",\n    value: function update(delta) {\n      _get(_getPrototypeOf(Trail.prototype), \"update\", this).call(this, delta);\n    }\n  }]);\n\n  return Trail;\n}(source_import__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"]);\n\n\n\n//# sourceURL=webpack:///./source/game/elements/trail.js?");

/***/ }),

/***/ "./source/game/game.js":
/*!*****************************!*\
  !*** ./source/game/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SnakeGame; });\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar SnakeGame =\n/*#__PURE__*/\nfunction () {\n  function SnakeGame() {\n    _classCallCheck(this, SnakeGame);\n\n    // Register player\n    this.player = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"](); // Add some mice\n\n    this.elements = [];\n    this.addMouse(3);\n  }\n\n  _createClass(SnakeGame, [{\n    key: \"draw\",\n    value: function draw() {\n      this.player.draw();\n      this.elements.forEach(function (e) {\n        return e.draw();\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update(delta) {\n      this.collide();\n      this.player.update(delta);\n      this.elements.forEach(function (e) {\n        return e.update(delta);\n      });\n    }\n  }, {\n    key: \"collide\",\n    value: function collide() {\n      var _this = this;\n\n      this.elements.filter(function (e) {\n        return _this.player.collide(e);\n      }).forEach(function (e) {\n        _this.player.trailLength += 1;\n\n        _this.elements.splice(_this.elements.indexOf(e), 1);\n\n        _this.addMouse();\n      });\n    }\n  }, {\n    key: \"addMouse\",\n    value: function addMouse() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n      for (var y = 0; y < x; y += 1) {\n        this.elements.push(new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"]());\n      }\n    }\n  }]);\n\n  return SnakeGame;\n}();\n\n\n\n//# sourceURL=webpack:///./source/game/game.js?");

/***/ }),

/***/ "./source/import.js":
/*!**************************!*\
  !*** ./source/import.js ***!
  \**************************/
/*! exports provided: Dom, Canvas, Vector, Element, Rectangle, Trail, Snake, Mouse, Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var source_engine_helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/engine/helpers/dom */ \"./source/engine/helpers/dom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dom\", function() { return source_engine_helpers_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var source_engine_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source/engine/helpers/canvas */ \"./source/engine/helpers/canvas.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return source_engine_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var source_engine_structures_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! source/engine/structures/vector */ \"./source/engine/structures/vector.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vector\", function() { return source_engine_structures_vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var source_engine_elements_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! source/engine/elements/element */ \"./source/engine/elements/element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Element\", function() { return source_engine_elements_element__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var source_engine_elements_rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! source/engine/elements/rectangle */ \"./source/engine/elements/rectangle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Rectangle\", function() { return source_engine_elements_rectangle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var source_game_elements_trail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! source/game/elements/trail */ \"./source/game/elements/trail.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Trail\", function() { return source_game_elements_trail__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var source_game_elements_snake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! source/game/elements/snake */ \"./source/game/elements/snake.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return source_game_elements_snake__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var source_game_elements_mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! source/game/elements/mouse */ \"./source/game/elements/mouse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mouse\", function() { return source_game_elements_mouse__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var source_engine_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! source/engine/engine */ \"./source/engine/engine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return source_engine_engine__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./source/import.js?");

/***/ }),

/***/ "./source/main.js":
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var source_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source/import */ \"./source/import.js\");\n/* harmony import */ var source_game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source/game/game */ \"./source/game/game.js\");\n\n\nvar e = new source_import__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"]();\ne.loadGame(new source_game_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n\n//# sourceURL=webpack:///./source/main.js?");

/***/ })

/******/ });
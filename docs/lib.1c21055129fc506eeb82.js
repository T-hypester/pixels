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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/geometry/types.ts":
/*!***********************************!*\
  !*** ./src/lib/geometry/types.ts ***!
  \***********************************/
/*! exports provided: Cartesian2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cartesian2D\", function() { return Cartesian2D; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Cartesian2D =\n/*#__PURE__*/\nfunction () {\n  function Cartesian2D() {\n    _classCallCheck(this, Cartesian2D);\n\n    _defineProperty(this, \"vector\", [0, 0]);\n\n    this.x = arguments.length <= 0 ? undefined : arguments[0];\n    this.y = arguments.length <= 1 ? undefined : arguments[1];\n  }\n\n  _createClass(Cartesian2D, [{\n    key: 0,\n    get: function get() {\n      return this.vector[0];\n    },\n    set: function set(x) {\n      this.vector[0] = x;\n    }\n  }, {\n    key: \"x\",\n    get: function get() {\n      return this.vector[0];\n    },\n    set: function set(x) {\n      this.vector[0] = x;\n    }\n  }, {\n    key: 1,\n    get: function get() {\n      return this.vector[1];\n    },\n    set: function set(y) {\n      this.vector[1] = y;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this.vector[1];\n    },\n    set: function set(y) {\n      this.vector[1] = y;\n    }\n  }]);\n\n  return Cartesian2D;\n}();\n\n//# sourceURL=webpack:///./src/lib/geometry/types.ts?");

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: HtmlCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_HtmlCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/HtmlCanvas */ \"./src/lib/ui/HtmlCanvas.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HtmlCanvas\", function() { return _ui_HtmlCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/lib/index.ts?");

/***/ }),

/***/ "./src/lib/ui/HtmlCanvas.ts":
/*!**********************************!*\
  !*** ./src/lib/ui/HtmlCanvas.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HtmlCanvas; });\n/* harmony import */ var _geometry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/types */ \"./src/lib/geometry/types.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar HtmlCanvas =\n/*#__PURE__*/\nfunction () {\n  function HtmlCanvas(canvas) {\n    var _this = this;\n\n    _classCallCheck(this, HtmlCanvas);\n\n    _defineProperty(this, \"onMove\", void 0);\n\n    _defineProperty(this, \"canvas\", void 0);\n\n    _defineProperty(this, \"ctx\", void 0);\n\n    _defineProperty(this, \"height\", void 0);\n\n    _defineProperty(this, \"width\", void 0);\n\n    _defineProperty(this, \"onMouseMove\", function (evt) {\n      if (!_this.onMove) return;\n\n      _this.onMove(_this.getPositionFromPointer(new _geometry_types__WEBPACK_IMPORTED_MODULE_0__[\"Cartesian2D\"](evt.offsetX, evt.offsetY)));\n    });\n\n    this.canvas = canvas;\n    this.height = canvas.height;\n    this.width = canvas.width;\n\n    if (canvas.getContext(\"2d\")) {\n      this.ctx = canvas.getContext(\"2d\");\n      this.ctx.translate(-0.5, -0.5);\n    } else {\n      throw new Error(\"HtmlCanvas: Unable to acquire rendering context\");\n    }\n\n    canvas.addEventListener(\"mousemove\", this.onMouseMove);\n  }\n\n  _createClass(HtmlCanvas, [{\n    key: \"setPixel\",\n    value: function setPixel(x, y, color) {\n      this.ctx.fillStyle = color.toCSS();\n      this.ctx.fillRect(x + 0.5, y + 0.5, 1, 1);\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, listener) {\n      throw new Error(\"Method not implemented.\");\n    }\n  }, {\n    key: \"clearPixel\",\n    value: function clearPixel(pixel) {\n      if (!pixel.position) return;\n      this.clearPoint(pixel.position.current.coordinates);\n    }\n  }, {\n    key: \"clearPoint\",\n    value: function clearPoint(position) {\n      this.ctx.fillStyle = \"white\";\n      this.ctx.fillRect(position.x + 0.5, position.y + 0.5, 1, 1);\n    }\n  }, {\n    key: \"getPositionFromPointer\",\n    value: function getPositionFromPointer(point) {\n      return new _geometry_types__WEBPACK_IMPORTED_MODULE_0__[\"Cartesian2D\"](Math.floor(point.x * this.width / this.canvas.clientWidth), Math.floor(point.y * this.height / this.canvas.clientHeight));\n    }\n  }]);\n\n  return HtmlCanvas;\n}();\n\n\n\n//# sourceURL=webpack:///./src/lib/ui/HtmlCanvas.ts?");

/***/ })

/******/ });
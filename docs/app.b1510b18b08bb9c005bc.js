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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/Game.ts":
/*!*************************!*\
  !*** ./src/app/Game.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DefaultGame; });\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./src/app/World.ts\");\n/* harmony import */ var _units_Pixel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units/Pixel */ \"./src/app/units/Pixel.ts\");\n/* harmony import */ var _lib_geometry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/geometry/types */ \"./src/lib/geometry/types.ts\");\n/* harmony import */ var _PixelRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PixelRenderer */ \"./src/app/PixelRenderer.ts\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar TEST_PIXEL_N = 1;\n\nvar DefaultGame = /*#__PURE__*/function () {\n  function DefaultGame(ui) {\n    var _this = this;\n\n    _classCallCheck(this, DefaultGame);\n\n    _defineProperty(this, \"ui\", void 0);\n\n    _defineProperty(this, \"unitRenderer\", void 0);\n\n    _defineProperty(this, \"pixels\", []);\n\n    _defineProperty(this, \"teams\", {});\n\n    _defineProperty(this, \"world\", void 0);\n\n    _defineProperty(this, \"renderFrame\", function () {\n      var _iterator = _createForOfIteratorHelper(_this.pixels),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var pxl = _step.value;\n\n          _this.tryPixelMove(pxl);\n\n          _this.unitRenderer.render(pxl);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      requestAnimationFrame(_this.renderFrame);\n    });\n\n    this.ui = ui;\n    this.unitRenderer = new _PixelRenderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ui);\n    this.world = new _World__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ui.height, this.ui.width);\n    requestAnimationFrame(this.renderFrame);\n    console.log(\"pixel!\");\n  }\n\n  _createClass(DefaultGame, [{\n    key: \"addTeam\",\n    value: function addTeam(team) {\n      if (!team.player) return;\n      this.teams[team.color.toCSS()] = team.player;\n\n      for (var i = 0; i < TEST_PIXEL_N; i++) {\n        var pos = this.world.getPosition(new _lib_geometry_types__WEBPACK_IMPORTED_MODULE_2__[\"Cartesian2D\"](i, i));\n        if (!pos.available || pos.units.length > 0) continue;\n        var pxl = new _units_Pixel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.world);\n        pxl.team = team;\n        pxl.health = Math.min(Math.random() + 0.5, 1);\n        this.world.deployUnit(pxl, new _lib_geometry_types__WEBPACK_IMPORTED_MODULE_2__[\"Cartesian2D\"](i, i));\n        this.pixels.push(pxl);\n      }\n    }\n  }, {\n    key: \"putObstacle\",\n    value: function putObstacle(a, b) {\n      for (var x = a.x; x < b.x; x++) {\n        for (var y = a.y; y < b.y; y++) {\n          var obstacle = new _units_Pixel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.world);\n          this.world.deployUnit(obstacle, new _lib_geometry_types__WEBPACK_IMPORTED_MODULE_2__[\"Cartesian2D\"](x, y));\n          this.world.getPosition(new _lib_geometry_types__WEBPACK_IMPORTED_MODULE_2__[\"Cartesian2D\"](x, y)).available = false;\n          this.pixels.push(obstacle);\n        }\n      }\n    }\n  }, {\n    key: \"tryPixelMove\",\n    value: function tryPixelMove(pxl) {\n      if (!pxl.position) return false;\n      var player = pxl.player;\n      if (!player || !player.position) return false;\n      var playerPosition;\n\n      try {\n        playerPosition = this.world.getPosition(player.position);\n      } catch (_unused) {\n        return false;\n      }\n\n      try {\n        var prevPos = this.world.getPosition(pxl.position.current.coordinates);\n\n        if (pxl.moveToward(playerPosition)) {\n          this.world.moveUnit(pxl, pxl.position.current.coordinates);\n          this.ui.clearPoint(prevPos.coordinates);\n        }\n      } catch (_unused2) {\n        return false;\n      }\n\n      return true;\n    }\n  }]);\n\n  return DefaultGame;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/Game.ts?");

/***/ }),

/***/ "./src/app/PixelRenderer.ts":
/*!**********************************!*\
  !*** ./src/app/PixelRenderer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PixelRenderer; });\n/* harmony import */ var _lib_ui_RGBColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/ui/RGBColor */ \"./src/lib/ui/RGBColor.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar PixelRenderer = /*#__PURE__*/function () {\n  function PixelRenderer(ui) {\n    _classCallCheck(this, PixelRenderer);\n\n    _defineProperty(this, \"ui\", void 0);\n\n    this.ui = ui;\n  }\n\n  _createClass(PixelRenderer, [{\n    key: \"render\",\n    value: function render(unit) {\n      if (!unit.position) return;\n      var team = unit.team;\n      var teamColor = team ? team.color : new _lib_ui_RGBColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0);\n      var color = teamColor.mixWith(new _lib_ui_RGBColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0), 1 - unit.health);\n      var pos = unit.position.current.coordinates;\n      this.ui.setPixel(pos.x, pos.y, color);\n    }\n  }]);\n\n  return PixelRenderer;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/PixelRenderer.ts?");

/***/ }),

/***/ "./src/app/World.ts":
/*!**************************!*\
  !*** ./src/app/World.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DefaultWorld; });\n/* harmony import */ var _lib_geometry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/geometry/types */ \"./src/lib/geometry/types.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar DefaultWorld = /*#__PURE__*/function () {\n  function DefaultWorld(width, height) {\n    _classCallCheck(this, DefaultWorld);\n\n    _defineProperty(this, \"height\", void 0);\n\n    _defineProperty(this, \"width\", void 0);\n\n    _defineProperty(this, \"positions\", void 0);\n\n    this.width = width;\n    this.height = height;\n    this.positions = new Array(this.width);\n\n    for (var x = 0; x < this.width; x++) {\n      this.positions[x] = new Array(this.height);\n\n      for (var y = 0; y < this.height; y++) {\n        var coords = new _lib_geometry_types__WEBPACK_IMPORTED_MODULE_0__[\"Cartesian2D\"]();\n        coords.x = x;\n        coords.y = y;\n        this.positions[x][y] = {\n          available: true,\n          coordinates: coords,\n          units: []\n        };\n      }\n    }\n  }\n\n  _createClass(DefaultWorld, [{\n    key: \"getPosition\",\n    value: function getPosition(point) {\n      if (point.x < 0 || point.y < 0 || point.x >= this.width || point.y >= this.height) throw new Error(\"undefined position: x=\".concat(point.x, \" y=\").concat(point.y));\n      return this.positions[point.x][point.y];\n    }\n  }, {\n    key: \"deployUnit\",\n    value: function deployUnit(pixel, point) {\n      this.updateUnitPosition(pixel, point);\n      return true;\n    }\n  }, {\n    key: \"moveUnit\",\n    value: function moveUnit(unit, position) {\n      var pos = this.getPosition(position);\n\n      if (pos.available && pos.units.length === 0) {\n        if (unit.position) this.clearPosition(unit.position.current.coordinates);\n        this.updateUnitPosition(unit, position);\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"clearPosition\",\n    value: function clearPosition(p) {\n      var pos = this.getPosition(p);\n      pos.units = [];\n    }\n  }, {\n    key: \"updateUnitPosition\",\n    value: function updateUnitPosition(unit, coords) {\n      var pos = this.getPosition(coords);\n      pos.units.push(unit);\n      if (unit.position) unit.position.current.coordinates = coords;else unit.position = {\n        current: pos //moveTo: (pos: Position) => this.moveUnit(unit, pos.coordinates)\n\n      };\n    }\n  }]);\n\n  return DefaultWorld;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/World.ts?");

/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/app/Game.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/app/index.ts?");

/***/ }),

/***/ "./src/app/pathfinding/FuzzyPathfinder.ts":
/*!************************************************!*\
  !*** ./src/app/pathfinding/FuzzyPathfinder.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FuzzyPathfinder; });\n/* harmony import */ var _lib_geometry_TaxicabGeometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/geometry/TaxicabGeometry */ \"./src/lib/geometry/TaxicabGeometry.ts\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar FuzzyPathfinder = /*#__PURE__*/function () {\n  function FuzzyPathfinder(world) {\n    _classCallCheck(this, FuzzyPathfinder);\n\n    _defineProperty(this, \"geometry\", void 0);\n\n    _defineProperty(this, \"world\", void 0);\n\n    this.geometry = new _lib_geometry_TaxicabGeometry__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.world = world;\n  }\n\n  _createClass(FuzzyPathfinder, [{\n    key: \"findNextPosition\",\n    value: function findNextPosition(from, to) {\n      var target = from;\n      var minDist = this.geometry.getDistance(from, to);\n      var adjacent = this.geometry.getAdjacent(from);\n\n      var _iterator = _createForOfIteratorHelper(adjacent),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var tentative = _step.value;\n          var pos = this.world.getPosition(tentative);\n\n          if (pos.available && pos.units.length === 0) {\n            var dist = this.geometry.getDistance(tentative, to);\n\n            if (dist < minDist) {\n              minDist = dist;\n              target = tentative;\n            }\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return target;\n    }\n  }]);\n\n  return FuzzyPathfinder;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/pathfinding/FuzzyPathfinder.ts?");

/***/ }),

/***/ "./src/app/units/Pixel.ts":
/*!********************************!*\
  !*** ./src/app/units/Pixel.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pixel; });\n/* harmony import */ var _pathfinding_FuzzyPathfinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pathfinding/FuzzyPathfinder */ \"./src/app/pathfinding/FuzzyPathfinder.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Pixel = /*#__PURE__*/function () {\n  function Pixel(world, pathfinder) {\n    _classCallCheck(this, Pixel);\n\n    _defineProperty(this, \"health\", 1);\n\n    _defineProperty(this, \"position\", void 0);\n\n    _defineProperty(this, \"team\", void 0);\n\n    _defineProperty(this, \"pathfinder\", void 0);\n\n    this.pathfinder = pathfinder || new _pathfinding_FuzzyPathfinder__WEBPACK_IMPORTED_MODULE_0__[\"default\"](world);\n  }\n\n  _createClass(Pixel, [{\n    key: \"player\",\n    get: function get() {\n      return this.team && this.team.player;\n    }\n  }, {\n    key: \"moveToward\",\n    value: function moveToward(position) {\n      if (!this.position) return false;\n      var newPoint = this.pathfinder.findNextPosition(this.position.current.coordinates, position.coordinates);\n      this.position.current.coordinates = newPoint;\n      return true;\n    }\n  }]);\n\n  return Pixel;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/units/Pixel.ts?");

/***/ }),

/***/ "./src/lib/geometry/TaxicabGeometry.ts":
/*!*********************************************!*\
  !*** ./src/lib/geometry/TaxicabGeometry.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TaxicabGeometry; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/lib/geometry/types.ts\");\n/* harmony import */ var _distances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distances */ \"./src/lib/geometry/distances.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar TaxicabGeometry = /*#__PURE__*/function () {\n  function TaxicabGeometry() {\n    _classCallCheck(this, TaxicabGeometry);\n  }\n\n  _createClass(TaxicabGeometry, [{\n    key: \"getAdjacent\",\n    value: function getAdjacent(p) {\n      var adjacent = [];\n\n      for (var x = -1; x <= 1; x++) {\n        for (var y = -1; y <= 1; y++) {\n          if (x === 0 && y === 0) continue;\n          var a = new _types__WEBPACK_IMPORTED_MODULE_0__[\"Cartesian2D\"]();\n          a.x = p.x + x;\n          a.y = p.y + y;\n          adjacent.push(a);\n        }\n      }\n\n      return adjacent;\n    }\n  }, {\n    key: \"getDistance\",\n    value: function getDistance(a, b) {\n      return Object(_distances__WEBPACK_IMPORTED_MODULE_1__[\"manhattan\"])(a, b);\n    }\n  }]);\n\n  return TaxicabGeometry;\n}();\n\n\n\n//# sourceURL=webpack:///./src/lib/geometry/TaxicabGeometry.ts?");

/***/ }),

/***/ "./src/lib/geometry/distances.ts":
/*!***************************************!*\
  !*** ./src/lib/geometry/distances.ts ***!
  \***************************************/
/*! exports provided: manhattan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"manhattan\", function() { return manhattan; });\nvar manhattan = function manhattan(a, b) {\n  return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);\n};\n\n//# sourceURL=webpack:///./src/lib/geometry/distances.ts?");

/***/ }),

/***/ "./src/lib/geometry/types.ts":
/*!***********************************!*\
  !*** ./src/lib/geometry/types.ts ***!
  \***********************************/
/*! exports provided: Cartesian2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cartesian2D\", function() { return Cartesian2D; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Cartesian2D = /*#__PURE__*/function () {\n  function Cartesian2D() {\n    _classCallCheck(this, Cartesian2D);\n\n    _defineProperty(this, \"vector\", [0, 0]);\n\n    this.x = arguments.length <= 0 ? undefined : arguments[0];\n    this.y = arguments.length <= 1 ? undefined : arguments[1];\n  }\n\n  _createClass(Cartesian2D, [{\n    key: \"0\",\n    get: function get() {\n      return this.vector[0];\n    },\n    set: function set(x) {\n      this.vector[0] = x;\n    }\n  }, {\n    key: \"x\",\n    get: function get() {\n      return this.vector[0];\n    },\n    set: function set(x) {\n      this.vector[0] = x;\n    }\n  }, {\n    key: \"1\",\n    get: function get() {\n      return this.vector[1];\n    },\n    set: function set(y) {\n      this.vector[1] = y;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this.vector[1];\n    },\n    set: function set(y) {\n      this.vector[1] = y;\n    }\n  }]);\n\n  return Cartesian2D;\n}();\n\n//# sourceURL=webpack:///./src/lib/geometry/types.ts?");

/***/ }),

/***/ "./src/lib/ui/RGBColor.ts":
/*!********************************!*\
  !*** ./src/lib/ui/RGBColor.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RGBColor; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar RGBColor = /*#__PURE__*/function () {\n  function RGBColor() {\n    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    _classCallCheck(this, RGBColor);\n\n    _defineProperty(this, \"r\", void 0);\n\n    _defineProperty(this, \"g\", void 0);\n\n    _defineProperty(this, \"b\", void 0);\n\n    this.r = r;\n    this.g = g;\n    this.b = b;\n  }\n\n  _createClass(RGBColor, [{\n    key: \"mixWith\",\n    value: function mixWith(color, ratio) {\n      var r = Math.floor((1 - ratio) * this.r + ratio * color.r);\n      var g = Math.floor((1 - ratio) * this.g + ratio * color.g);\n      var b = Math.floor((1 - ratio) * this.b + ratio * color.b);\n      return new RGBColor(r, g, b);\n    }\n  }, {\n    key: \"toCSS\",\n    value: function toCSS() {\n      return \"rgb(\".concat(this.r, \",\").concat(this.g, \",\").concat(this.b, \")\");\n    }\n  }]);\n\n  return RGBColor;\n}();\n\n\n\n//# sourceURL=webpack:///./src/lib/ui/RGBColor.ts?");

/***/ })

/******/ });
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory(require("lodash"));
	else
		root["webpackNumbers"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(1);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _ref = __webpack_require__(2);

	var _ref2 = _interopRequireDefault(_ref);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransalator() {
	    return {
	        numtoword: function numtoword(num) {
	            return num < 0 || num > 5 ? 'This is a failure' : converttoword(num);
	        },
	        wordtonum: function wordtonum(word) {
	            var num = converttonum(word);
	            return num === -1 ? 'This is a failure' : num;
	        }
	    };
	}

	var converttoword = function converttoword(num) {
	    return _lodash2.default.reduce(_ref2.default, function (accum, ref) {
	        return ref.num === num ? ref.word : accum;
	    }, '');
	};

	var converttonum = function converttonum(word) {
	    return _lodash2.default.reduce(_ref2.default, function (accum, ref) {
	        return ref.word === word && word.toLowerCase() ? ref.num : accum;
	    }, -1);
	};

	module.exports = createTransalator();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	[{
	    "num": 1,
	    "word": "One"
	},{
	    "num": 2,
	    "word": "Two"
	},{
	    "num": 3,
	    "word": "Three"
	},{
	    "num": 4,
	    "word": "Four"
	},{
	    "num": 5,
	    "word": "Five"
	},{
	    "num": 0,
	    "word": "Zero"
	}]

/***/ }
/******/ ])
});
;
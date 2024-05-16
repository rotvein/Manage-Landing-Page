/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://layout/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\nconst mobileNavMenu = document.querySelector('.mobile-nav-menu');\r\nconst iconHamburger = document.querySelector('.icon-hamburger');\r\nconst iconClose = document.querySelector('.icon-close');\r\nconst primaryNavigation = document.querySelector('.primary-navigation');\r\nconst backdrop = document.querySelector('.backdrop');\r\n\r\nfunction toggleHamburger() {\t\r\n\tconsole.log(iconClose.style.display)\r\n\tif (iconClose.style.display === 'none') {\r\n\t\ticonClose.style.display = 'block';\r\n\t\ticonHamburger.style.display = 'none';\r\n\t\tbackdrop.style.display = 'block';\r\n\t} else {\r\n\t\ticonClose.style.display = 'none';\r\n\t\ticonHamburger.style.display = 'block';\r\n\t\tbackdrop.style.display = 'none';\r\n\t}\r\n\tprimaryNavigation.toggleAttribute('data-visible');\r\n\tconsole.log('1.5')\r\n\t\r\n\t\r\n}\r\n\r\nmobileNavMenu.addEventListener('click', toggleHamburger);\r\n\r\n\r\n\r\nconst slider = new A11YSlider(document.querySelector('.slider'), {\r\n    adaptiveHeight: false,\r\n    dots: true,\r\n\t//arrows: true,\r\n\tresponsive: {\r\n\t\t480: {\r\n\t\t\tdots: false\r\n\t\t},\r\n\t\t1440: {\r\n\t\t\tslidesToShow: 3\r\n\t\t}\r\n\t}\r\n  });\t\n\n//# sourceURL=webpack://layout/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
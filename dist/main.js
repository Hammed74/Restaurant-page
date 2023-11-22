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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage(){\n    const contactContainer = document.createElement(\"div\")\n    document.body.appendChild(contactContainer)\n\n    const contactInfo = document.createElement(\"p\")\n    contactContainer.appendChild(contactInfo)\n    contactInfo.textContent = \"Call Us at 444-555-9999\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initialLoad() {\n    const universal = document.querySelector(\"*\")\n    universal.style.margin = \"0\"\n    universal.style.padding = \"0\"\n  const container = document.querySelector(\".container\");\n  container.style.display = \"grid\";\n  container.style.justifyItems = \"center\";\n  document.body.style.backgroundColor = \"black\";\n\n  const navContainer = document.createElement(\"div\");\n  navContainer.style.display = \"flex\";\n  navContainer.style.justifyContent = \"center\";\n  navContainer.style.width = \"100%\";\n  navContainer.style.paddingTop = \"30px\";\n  navContainer.style.paddingBottom = \"30px\";\n\n  container.appendChild(navContainer);\n  const navHome = document.createElement(\"a\");\n  navContainer.appendChild(navHome);\n  navHome.href = \"#\";\n  navHome.textContent = \"HOME\";\n  navHome.style.color = \"white\";\n\n  container.appendChild(navContainer);\n  const navContactUs = document.createElement(\"a\");\n  navContainer.appendChild(navContactUs);\n  navContactUs.href = \"#\";\n  navContactUs.textContent = \"CONTACT US\";\n  navContactUs.style.padding = \"0 100px\";\n  navContactUs.style.color = \"white\";\n\n  container.appendChild(navContainer);\n  const navMenu = document.createElement(\"a\");\n  navContainer.appendChild(navMenu);\n  navMenu.href = \"#\";\n  navMenu.textContent = \"MENU\";\n  navMenu.style.color = \"white\";\n\n  const hero = document.createElement(\"div\");\n  container.appendChild(hero);\n  const heroImage = document.createElement(\"img\");\n  hero.appendChild(heroImage);\n  heroImage.src = \"../assets/hero-image.jpg\";\n  heroImage.style.width = \"100%\";\n\n  const heroCopy = document.createElement(\"p\");\n  hero.appendChild(heroCopy);\n  heroCopy.style.color = \"white\";\n  heroCopy.style.fontSize = \"20px\";\n  heroCopy.style.width = \"80%\";\n  heroCopy.textContent =\n    \"Welcome to Highball, where we celebrate the rich tapestry of American tastes. Our dishes are a harmonious blend of traditional flavors and modern culinary finesse, inviting you to experience the best of American dining. Savor our sizzling, tender steaks or dive into our towering burgers, each bite delivering an explosion of flavor. Delight in our fresh seafood, expertly prepared to satisfy your cravings for oceanic delights. From classic comfort foods to innovative creations, our menu promises a gastronomic adventure that tantalizes your taste buds and leaves you craving more. Join us at Highball and indulge in a dining experience that encapsulates the spirit of American cuisine - where every dish tells a story and every meal is a celebration.\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\nconst contactUs = doc\n\n_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navContactUs.addEventListener(\"click\",() => {\n    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
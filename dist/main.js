/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactPage(){
    const container = document.querySelector(".container")
    const contactContainer = document.createElement("div")
    container.appendChild(contactContainer)
    contactContainer.classList.add("contact-container")

    const contactInfo = document.createElement("p")
    contactContainer.appendChild(contactInfo)
    contactInfo.textContent = "Call Us at 444-555-9999"
    contactInfo.style.color = "white"
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homePage(){
    const container = document.querySelector(".container")
  const hero = document.createElement("div");
  container.appendChild(hero);
    hero.classList.add("hero")

  const heroImage = document.createElement("img");
  hero.appendChild(heroImage);
  heroImage.src = "../assets/hero-image.jpg";
  heroImage.style.width = "100%";


  const heroCopy = document.createElement("p");
  hero.appendChild(heroCopy);
  heroCopy.style.color = "white";
  heroCopy.style.fontSize = "20px";
  heroCopy.style.width = "80%";
  heroCopy.textContent =
    "Welcome to Highball, where we celebrate the rich tapestry of American tastes. Our dishes are a harmonious blend of traditional flavors and modern culinary finesse, inviting you to experience the best of American dining. Savor our sizzling, tender steaks or dive into our towering burgers, each bite delivering an explosion of flavor. Delight in our fresh seafood, expertly prepared to satisfy your cravings for oceanic delights. From classic comfort foods to innovative creations, our menu promises a gastronomic adventure that tantalizes your taste buds and leaves you craving more. Join us at Highball and indulge in a dining experience that encapsulates the spirit of American cuisine - where every dish tells a story and every meal is a celebration.";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initialLoad() {
  const universal = document.querySelector("*");
  universal.style.margin = "0";
  universal.style.padding = "0";
  const container = document.querySelector(".container");
  container.style.display = "grid";
  container.style.justifyItems = "center";
  document.body.style.backgroundColor = "black";

  const navContainer = document.createElement("div");
  container.parentNode.insertBefore(navContainer,container)
  navContainer.style.display = "flex";
  navContainer.style.justifyContent = "center";
  navContainer.style.width = "100%";
  navContainer.style.paddingTop = "30px";
  navContainer.style.paddingBottom = "30px";


  const navHome = document.createElement("a");
  navContainer.appendChild(navHome);
  navHome.href = "#";
  navHome.textContent = "HOME";
  navHome.style.color = "white";
  navHome.classList.add("home")

  const navContactUs = document.createElement("a");
  navContainer.appendChild(navContactUs);
  navContactUs.href = "#";
  navContactUs.textContent = "CONTACT US";
  navContactUs.style.padding = "0 100px";
  navContactUs.style.color = "white";
  navContactUs.classList.add("contact-us");


  const navMenu = document.createElement("a");
  navContainer.appendChild(navMenu);
  navMenu.href = "#";
  navMenu.textContent = "MENU";
  navMenu.style.color = "white";
  navMenu.classList.add("menu")

  const hero = document.createElement("div");
  container.appendChild(hero);
    hero.classList.add("hero")

  const heroImage = document.createElement("img");
  hero.appendChild(heroImage);
  heroImage.src = "../assets/hero-image.jpg";
  heroImage.style.width = "100%";


  const heroCopy = document.createElement("p");
  hero.appendChild(heroCopy);
  heroCopy.style.color = "white";
  heroCopy.style.fontSize = "20px";
  heroCopy.style.width = "80%";
  heroCopy.textContent =
    "Welcome to Highball, where we celebrate the rich tapestry of American tastes. Our dishes are a harmonious blend of traditional flavors and modern culinary finesse, inviting you to experience the best of American dining. Savor our sizzling, tender steaks or dive into our towering burgers, each bite delivering an explosion of flavor. Delight in our fresh seafood, expertly prepared to satisfy your cravings for oceanic delights. From classic comfort foods to innovative creations, our menu promises a gastronomic adventure that tantalizes your taste buds and leaves you craving more. Join us at Highball and indulge in a dining experience that encapsulates the spirit of American cuisine - where every dish tells a story and every meal is a celebration.";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuPage() {
    const container = document.querySelector(".container")
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container")
  container.appendChild(menuContainer);

  const lobster = document.createElement("p");
  menuContainer.appendChild(lobster);
  lobster.textContent = "Lobster 50$ ";
  lobster.style.color = "white";

   const oxtail = document.createElement("p");
   menuContainer.appendChild(oxtail);
   oxtail.textContent = "Oxtail 20$";
   oxtail.style.color = "white";
   
    const friedFish = document.createElement("p");
    menuContainer.appendChild(friedFish);
    friedFish.textContent = "Fried Fish 18$ ";
    friedFish.style.color = "white";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./src/initial.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");





(0,_initial_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

document.addEventListener("DOMContentLoaded", () => {
const home = document.querySelector(".hero");
const contactUs = document.querySelector(".contact-us");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const homeBtn = document.querySelector(".home")
const container = document.querySelector(".container")

contactUs.addEventListener("click", () => {
    container.innerHTML =""
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

});
menu.addEventListener("click", () => {
      container.innerHTML = ""
  ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

});
homeBtn.addEventListener("click", () => {
       container.innerHTML = ""
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
})

})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNaZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3JCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1RDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDdEJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ0E7QUFDTjtBQUNBOztBQUVqQyx1REFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBVzs7QUFFZixDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUscURBQVE7O0FBRVYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1osQ0FBQzs7QUFFRCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIilcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKVxuICAgIGNvbnRhY3RJbmZvLnRleHRDb250ZW50ID0gXCJDYWxsIFVzIGF0IDQ0NC01NTUtOTk5OVwiXG4gICAgY29udGFjdEluZm8uc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2UiLCJmdW5jdGlvbiBob21lUGFnZSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKVxuXG4gIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgaGVyb0ltYWdlLnNyYyA9IFwiLi4vYXNzZXRzL2hlcm8taW1hZ2UuanBnXCI7XG4gIGhlcm9JbWFnZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG5cbiAgY29uc3QgaGVyb0NvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvQ29weSk7XG4gIGhlcm9Db3B5LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICBoZXJvQ29weS5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICBoZXJvQ29weS5zdHlsZS53aWR0aCA9IFwiODAlXCI7XG4gIGhlcm9Db3B5LnRleHRDb250ZW50ID1cbiAgICBcIldlbGNvbWUgdG8gSGlnaGJhbGwsIHdoZXJlIHdlIGNlbGVicmF0ZSB0aGUgcmljaCB0YXBlc3RyeSBvZiBBbWVyaWNhbiB0YXN0ZXMuIE91ciBkaXNoZXMgYXJlIGEgaGFybW9uaW91cyBibGVuZCBvZiB0cmFkaXRpb25hbCBmbGF2b3JzIGFuZCBtb2Rlcm4gY3VsaW5hcnkgZmluZXNzZSwgaW52aXRpbmcgeW91IHRvIGV4cGVyaWVuY2UgdGhlIGJlc3Qgb2YgQW1lcmljYW4gZGluaW5nLiBTYXZvciBvdXIgc2l6emxpbmcsIHRlbmRlciBzdGVha3Mgb3IgZGl2ZSBpbnRvIG91ciB0b3dlcmluZyBidXJnZXJzLCBlYWNoIGJpdGUgZGVsaXZlcmluZyBhbiBleHBsb3Npb24gb2YgZmxhdm9yLiBEZWxpZ2h0IGluIG91ciBmcmVzaCBzZWFmb29kLCBleHBlcnRseSBwcmVwYXJlZCB0byBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MgZm9yIG9jZWFuaWMgZGVsaWdodHMuIEZyb20gY2xhc3NpYyBjb21mb3J0IGZvb2RzIHRvIGlubm92YXRpdmUgY3JlYXRpb25zLCBvdXIgbWVudSBwcm9taXNlcyBhIGdhc3Ryb25vbWljIGFkdmVudHVyZSB0aGF0IHRhbnRhbGl6ZXMgeW91ciB0YXN0ZSBidWRzIGFuZCBsZWF2ZXMgeW91IGNyYXZpbmcgbW9yZS4gSm9pbiB1cyBhdCBIaWdoYmFsbCBhbmQgaW5kdWxnZSBpbiBhIGRpbmluZyBleHBlcmllbmNlIHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBzcGlyaXQgb2YgQW1lcmljYW4gY3Vpc2luZSAtIHdoZXJlIGV2ZXJ5IGRpc2ggdGVsbHMgYSBzdG9yeSBhbmQgZXZlcnkgbWVhbCBpcyBhIGNlbGVicmF0aW9uLlwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZSIsImZ1bmN0aW9uIGluaXRpYWxMb2FkKCkge1xuICBjb25zdCB1bml2ZXJzYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiKlwiKTtcbiAgdW5pdmVyc2FsLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuICB1bml2ZXJzYWwuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgY29udGFpbmVyLnN0eWxlLmp1c3RpZnlJdGVtcyA9IFwiY2VudGVyXCI7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuXG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuYXZDb250YWluZXIsY29udGFpbmVyKVxuICBuYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBuYXZDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICBuYXZDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgbmF2Q29udGFpbmVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjMwcHhcIjtcbiAgbmF2Q29udGFpbmVyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjMwcHhcIjtcblxuXG4gIGNvbnN0IG5hdkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkhvbWUpO1xuICBuYXZIb21lLmhyZWYgPSBcIiNcIjtcbiAgbmF2SG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBuYXZIb21lLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICBuYXZIb21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpXG5cbiAgY29uc3QgbmF2Q29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDb250YWN0VXMpO1xuICBuYXZDb250YWN0VXMuaHJlZiA9IFwiI1wiO1xuICBuYXZDb250YWN0VXMudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcbiAgbmF2Q29udGFjdFVzLnN0eWxlLnBhZGRpbmcgPSBcIjAgMTAwcHhcIjtcbiAgbmF2Q29udGFjdFVzLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICBuYXZDb250YWN0VXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdXNcIik7XG5cblxuICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZNZW51KTtcbiAgbmF2TWVudS5ocmVmID0gXCIjXCI7XG4gIG5hdk1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgbmF2TWVudS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKVxuXG4gIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgaGVyb0ltYWdlLnNyYyA9IFwiLi4vYXNzZXRzL2hlcm8taW1hZ2UuanBnXCI7XG4gIGhlcm9JbWFnZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG5cbiAgY29uc3QgaGVyb0NvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvQ29weSk7XG4gIGhlcm9Db3B5LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICBoZXJvQ29weS5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICBoZXJvQ29weS5zdHlsZS53aWR0aCA9IFwiODAlXCI7XG4gIGhlcm9Db3B5LnRleHRDb250ZW50ID1cbiAgICBcIldlbGNvbWUgdG8gSGlnaGJhbGwsIHdoZXJlIHdlIGNlbGVicmF0ZSB0aGUgcmljaCB0YXBlc3RyeSBvZiBBbWVyaWNhbiB0YXN0ZXMuIE91ciBkaXNoZXMgYXJlIGEgaGFybW9uaW91cyBibGVuZCBvZiB0cmFkaXRpb25hbCBmbGF2b3JzIGFuZCBtb2Rlcm4gY3VsaW5hcnkgZmluZXNzZSwgaW52aXRpbmcgeW91IHRvIGV4cGVyaWVuY2UgdGhlIGJlc3Qgb2YgQW1lcmljYW4gZGluaW5nLiBTYXZvciBvdXIgc2l6emxpbmcsIHRlbmRlciBzdGVha3Mgb3IgZGl2ZSBpbnRvIG91ciB0b3dlcmluZyBidXJnZXJzLCBlYWNoIGJpdGUgZGVsaXZlcmluZyBhbiBleHBsb3Npb24gb2YgZmxhdm9yLiBEZWxpZ2h0IGluIG91ciBmcmVzaCBzZWFmb29kLCBleHBlcnRseSBwcmVwYXJlZCB0byBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MgZm9yIG9jZWFuaWMgZGVsaWdodHMuIEZyb20gY2xhc3NpYyBjb21mb3J0IGZvb2RzIHRvIGlubm92YXRpdmUgY3JlYXRpb25zLCBvdXIgbWVudSBwcm9taXNlcyBhIGdhc3Ryb25vbWljIGFkdmVudHVyZSB0aGF0IHRhbnRhbGl6ZXMgeW91ciB0YXN0ZSBidWRzIGFuZCBsZWF2ZXMgeW91IGNyYXZpbmcgbW9yZS4gSm9pbiB1cyBhdCBIaWdoYmFsbCBhbmQgaW5kdWxnZSBpbiBhIGRpbmluZyBleHBlcmllbmNlIHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBzcGlyaXQgb2YgQW1lcmljYW4gY3Vpc2luZSAtIHdoZXJlIGV2ZXJ5IGRpc2ggdGVsbHMgYSBzdG9yeSBhbmQgZXZlcnkgbWVhbCBpcyBhIGNlbGVicmF0aW9uLlwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDtcbiIsImZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgY29uc3QgbG9ic3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvYnN0ZXIpO1xuICBsb2JzdGVyLnRleHRDb250ZW50ID0gXCJMb2JzdGVyIDUwJCBcIjtcbiAgbG9ic3Rlci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuICAgY29uc3Qgb3h0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG94dGFpbCk7XG4gICBveHRhaWwudGV4dENvbnRlbnQgPSBcIk94dGFpbCAyMCRcIjtcbiAgIG94dGFpbC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgIFxuICAgIGNvbnN0IGZyaWVkRmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJpZWRGaXNoKTtcbiAgICBmcmllZEZpc2gudGV4dENvbnRlbnQgPSBcIkZyaWVkIEZpc2ggMTgkIFwiO1xuICAgIGZyaWVkRmlzaC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsTG9hZCBmcm9tIFwiLi9pbml0aWFsLmpzXCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmluaXRpYWxMb2FkKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XG5jb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtdXNcIik7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxuXG5jb250YWN0VXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID1cIlwiXG4gICAgY29udGFjdFBhZ2UoKVxuXG59KTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG4gIG1lbnVQYWdlKCk7XG5cbn0pO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG4gICAgaG9tZVBhZ2UoKVxufSlcblxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
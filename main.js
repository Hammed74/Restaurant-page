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
  heroImage.src = "./assets/hero-image.jpg";
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
  heroImage.src = "./assets/hero-image.jpg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNaZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3JCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1RDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDdEJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ0E7QUFDTjtBQUNBOztBQUVqQyx1REFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBVzs7QUFFZixDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUscURBQVE7O0FBRVYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1osQ0FBQzs7QUFFRCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIilcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKVxuICAgIGNvbnRhY3RJbmZvLnRleHRDb250ZW50ID0gXCJDYWxsIFVzIGF0IDQ0NC01NTUtOTk5OVwiXG4gICAgY29udGFjdEluZm8uc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2UiLCJmdW5jdGlvbiBob21lUGFnZSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKVxuXG4gIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgaGVyb0ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaGVyby1pbWFnZS5qcGdcIjtcbiAgaGVyb0ltYWdlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cblxuICBjb25zdCBoZXJvQ29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9Db3B5KTtcbiAgaGVyb0NvcHkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIGhlcm9Db3B5LnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gIGhlcm9Db3B5LnN0eWxlLndpZHRoID0gXCI4MCVcIjtcbiAgaGVyb0NvcHkudGV4dENvbnRlbnQgPVxuICAgIFwiV2VsY29tZSB0byBIaWdoYmFsbCwgd2hlcmUgd2UgY2VsZWJyYXRlIHRoZSByaWNoIHRhcGVzdHJ5IG9mIEFtZXJpY2FuIHRhc3Rlcy4gT3VyIGRpc2hlcyBhcmUgYSBoYXJtb25pb3VzIGJsZW5kIG9mIHRyYWRpdGlvbmFsIGZsYXZvcnMgYW5kIG1vZGVybiBjdWxpbmFyeSBmaW5lc3NlLCBpbnZpdGluZyB5b3UgdG8gZXhwZXJpZW5jZSB0aGUgYmVzdCBvZiBBbWVyaWNhbiBkaW5pbmcuIFNhdm9yIG91ciBzaXp6bGluZywgdGVuZGVyIHN0ZWFrcyBvciBkaXZlIGludG8gb3VyIHRvd2VyaW5nIGJ1cmdlcnMsIGVhY2ggYml0ZSBkZWxpdmVyaW5nIGFuIGV4cGxvc2lvbiBvZiBmbGF2b3IuIERlbGlnaHQgaW4gb3VyIGZyZXNoIHNlYWZvb2QsIGV4cGVydGx5IHByZXBhcmVkIHRvIHNhdGlzZnkgeW91ciBjcmF2aW5ncyBmb3Igb2NlYW5pYyBkZWxpZ2h0cy4gRnJvbSBjbGFzc2ljIGNvbWZvcnQgZm9vZHMgdG8gaW5ub3ZhdGl2ZSBjcmVhdGlvbnMsIG91ciBtZW51IHByb21pc2VzIGEgZ2FzdHJvbm9taWMgYWR2ZW50dXJlIHRoYXQgdGFudGFsaXplcyB5b3VyIHRhc3RlIGJ1ZHMgYW5kIGxlYXZlcyB5b3UgY3JhdmluZyBtb3JlLiBKb2luIHVzIGF0IEhpZ2hiYWxsIGFuZCBpbmR1bGdlIGluIGEgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHNwaXJpdCBvZiBBbWVyaWNhbiBjdWlzaW5lIC0gd2hlcmUgZXZlcnkgZGlzaCB0ZWxscyBhIHN0b3J5IGFuZCBldmVyeSBtZWFsIGlzIGEgY2VsZWJyYXRpb24uXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlIiwiZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7XG4gIGNvbnN0IHVuaXZlcnNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xuICB1bml2ZXJzYWwuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gIHVuaXZlcnNhbC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICBjb250YWluZXIuc3R5bGUuanVzdGlmeUl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cbiAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5hdkNvbnRhaW5lcixjb250YWluZXIpXG4gIG5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIG5hdkNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gIG5hdkNvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBuYXZDb250YWluZXIuc3R5bGUucGFkZGluZ1RvcCA9IFwiMzBweFwiO1xuICBuYXZDb250YWluZXIuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMzBweFwiO1xuXG5cbiAgY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2SG9tZSk7XG4gIG5hdkhvbWUuaHJlZiA9IFwiI1wiO1xuICBuYXZIb21lLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gIG5hdkhvbWUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIG5hdkhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIilcblxuICBjb25zdCBuYXZDb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhY3RVcyk7XG4gIG5hdkNvbnRhY3RVcy5ocmVmID0gXCIjXCI7XG4gIG5hdkNvbnRhY3RVcy50ZXh0Q29udGVudCA9IFwiQ09OVEFDVCBVU1wiO1xuICBuYXZDb250YWN0VXMuc3R5bGUucGFkZGluZyA9IFwiMCAxMDBweFwiO1xuICBuYXZDb250YWN0VXMuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIG5hdkNvbnRhY3RVcy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC11c1wiKTtcblxuXG4gIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuICBuYXZNZW51LmhyZWYgPSBcIiNcIjtcbiAgbmF2TWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBuYXZNZW51LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpXG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpXG5cbiAgY29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuICBoZXJvSW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9oZXJvLWltYWdlLmpwZ1wiO1xuICBoZXJvSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuXG4gIGNvbnN0IGhlcm9Db3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0NvcHkpO1xuICBoZXJvQ29weS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgaGVyb0NvcHkuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgaGVyb0NvcHkuc3R5bGUud2lkdGggPSBcIjgwJVwiO1xuICBoZXJvQ29weS50ZXh0Q29udGVudCA9XG4gICAgXCJXZWxjb21lIHRvIEhpZ2hiYWxsLCB3aGVyZSB3ZSBjZWxlYnJhdGUgdGhlIHJpY2ggdGFwZXN0cnkgb2YgQW1lcmljYW4gdGFzdGVzLiBPdXIgZGlzaGVzIGFyZSBhIGhhcm1vbmlvdXMgYmxlbmQgb2YgdHJhZGl0aW9uYWwgZmxhdm9ycyBhbmQgbW9kZXJuIGN1bGluYXJ5IGZpbmVzc2UsIGludml0aW5nIHlvdSB0byBleHBlcmllbmNlIHRoZSBiZXN0IG9mIEFtZXJpY2FuIGRpbmluZy4gU2F2b3Igb3VyIHNpenpsaW5nLCB0ZW5kZXIgc3RlYWtzIG9yIGRpdmUgaW50byBvdXIgdG93ZXJpbmcgYnVyZ2VycywgZWFjaCBiaXRlIGRlbGl2ZXJpbmcgYW4gZXhwbG9zaW9uIG9mIGZsYXZvci4gRGVsaWdodCBpbiBvdXIgZnJlc2ggc2VhZm9vZCwgZXhwZXJ0bHkgcHJlcGFyZWQgdG8gc2F0aXNmeSB5b3VyIGNyYXZpbmdzIGZvciBvY2VhbmljIGRlbGlnaHRzLiBGcm9tIGNsYXNzaWMgY29tZm9ydCBmb29kcyB0byBpbm5vdmF0aXZlIGNyZWF0aW9ucywgb3VyIG1lbnUgcHJvbWlzZXMgYSBnYXN0cm9ub21pYyBhZHZlbnR1cmUgdGhhdCB0YW50YWxpemVzIHlvdXIgdGFzdGUgYnVkcyBhbmQgbGVhdmVzIHlvdSBjcmF2aW5nIG1vcmUuIEpvaW4gdXMgYXQgSGlnaGJhbGwgYW5kIGluZHVsZ2UgaW4gYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgc3Bpcml0IG9mIEFtZXJpY2FuIGN1aXNpbmUgLSB3aGVyZSBldmVyeSBkaXNoIHRlbGxzIGEgc3RvcnkgYW5kIGV2ZXJ5IG1lYWwgaXMgYSBjZWxlYnJhdGlvbi5cIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbExvYWQ7XG4iLCJmdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIilcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gIGNvbnN0IGxvYnN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2JzdGVyKTtcbiAgbG9ic3Rlci50ZXh0Q29udGVudCA9IFwiTG9ic3RlciA1MCQgXCI7XG4gIGxvYnN0ZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbiAgIGNvbnN0IG94dGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChveHRhaWwpO1xuICAgb3h0YWlsLnRleHRDb250ZW50ID0gXCJPeHRhaWwgMjAkXCI7XG4gICBveHRhaWwuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICBcbiAgICBjb25zdCBmcmllZEZpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyaWVkRmlzaCk7XG4gICAgZnJpZWRGaXNoLnRleHRDb250ZW50ID0gXCJGcmllZCBGaXNoIDE4JCBcIjtcbiAgICBmcmllZEZpc2guc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbExvYWQgZnJvbSBcIi4vaW5pdGlhbC5qc1wiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5pbml0aWFsTG9hZCgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xuY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LXVzXCIpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbmNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKVxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIilcblxuY29udGFjdFVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9XCJcIlxuICAgIGNvbnRhY3RQYWdlKClcblxufSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuICBtZW51UGFnZSgpO1xuXG59KTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGhvbWVQYWdlKClcbn0pXG5cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
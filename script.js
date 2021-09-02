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

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Helper {\r\n  createElement(text) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"js-note\");\r\n    div.style.transform = `rotate(${this.plusMinus()}${Math.random() * 4}deg)`;\r\n    div.style.backgroundColor = this.backGroundColor();\r\n    div.innerText = text;\r\n\r\n    return div;\r\n  }\r\n\r\n  plusMinus() {\r\n    if (Math.random() <= 0.5) {\r\n      return \"-\";\r\n    } else {\r\n      return \"+\";\r\n    }\r\n  }\r\n\r\n  backGroundColor() {\r\n    const numbers = \"0123456789abcdef\";\r\n    let background = \"\";\r\n\r\n    for (let i = 0; i < 6; i++) {\r\n      let random = Math.floor(Math.random() * numbers.length);\r\n      background += numbers.substring(random, random + 1);\r\n    }\r\n\r\n    return `#${background}`;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helper);\n\n//# sourceURL=webpack:///./helper.js?");

/***/ }),

/***/ "./modal.js":
/*!******************!*\
  !*** ./modal.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./helper.js\");\n\r\n\r\nclass ModalWindow {\r\n  constructor(addNewNote) {\r\n    this.modal = document.querySelector(\".modal\");\r\n    this.textarea = document.querySelector(\".textarea\");\r\n    this.closeBtn = document.querySelector(\".close\");\r\n\r\n    this.helper = new _helper_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n    this.addNewNote = addNewNote;\r\n  }\r\n\r\n  openModal() {\r\n    this.modal.classList.add(\"open\");\r\n    this.textarea.focus();\r\n  }\r\n\r\n  closeModal() {\r\n    this.modal.classList.remove(\"open\");\r\n    this.textarea.value = \"\";\r\n  }\r\n\r\n  addNewNoteEvent() {\r\n    this.textarea.addEventListener(\"keydown\", (e) => {\r\n      if (e.key == \"Enter\") {\r\n        if (this.textarea.value.trim()) {\r\n          let div = this.helper.createElement(this.textarea.value);\r\n          this.addNewNote(div);\r\n        }\r\n        this.closeModal();\r\n      }\r\n    })\r\n  }\r\n\r\n  addCloseEvent() {\r\n    this.closeBtn.addEventListener(\"click\", () => this.closeModal());\r\n\r\n    this.modal.addEventListener(\"click\", (e) => {\r\n      if (e.target == this.textarea) return;\r\n      if (this.textarea.value.trim()) return;\r\n      this.closeModal();\r\n    })\r\n\r\n    this.textarea.addEventListener(\"keydown\", (e) => {\r\n      if (e.key == \"Escape\" && this.modal.classList.contains(\"open\")) {\r\n        this.closeModal();\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindow);\n\n//# sourceURL=webpack:///./modal.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./modal.js\");\n\r\n\r\nclass StickyNotes {\r\n  constructor() {\r\n    this.addNote = document.querySelector(\".button\");\r\n    this.container = document.querySelector(\".container\");\r\n\r\n    this.modal = new _modal_js__WEBPACK_IMPORTED_MODULE_0__.default(this.addNewNote.bind(this));\r\n\r\n    this.addClickAndKeyEvent();\r\n  }\r\n\r\n  addClickAndKeyEvent() {\r\n    this.addNote.addEventListener(\"click\", () => this.modal.openModal());\r\n\r\n    this.modal.addNewNoteEvent();\r\n\r\n    this.modal.addCloseEvent();\r\n\r\n    this.container.addEventListener(\"dblclick\", (e) => {\r\n      this.container.removeChild(e.target);\r\n    })\r\n  }\r\n\r\n  addNewNote(div) {\r\n    this.container.appendChild(div);\r\n  }\r\n}\r\n\r\nconst stickyNotes = new StickyNotes();\n\n//# sourceURL=webpack:///./script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;
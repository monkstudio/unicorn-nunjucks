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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// import rellax from 'rellax';\n\n(function (html) {\n  html.className = html.className.replace(/\\bno-js\\b/, 'js');\n})(document.documentElement);\n\nvar el = document.querySelector('.menu-item-about'),\n    html = document.documentElement,\n    content = document.querySelector('.main');\n\nel.addEventListener('click', function (event) {\n  event.preventDefault();\n  html.classList.toggle('modal-active');\n\n  if (html.classList.contains('modal-active')) {\n    content.addEventListener('click', function (event) {\n      html.classList.remove('modal-active');\n    });\n  }\n});\n\n(function () {\n  var top = html.scrollTop,\n      layers = document.querySelectorAll('.parallax'),\n      i,\n      breakpoint = 0,\n      speeds = [];\n\n  for (i = 0; i < layers.length; ++i) {\n    // console.log(layers[i]);\n    speeds[i] = layers[i].getAttribute('data-speed') || 100;\n  }\n\n  window.addEventListener(\"scroll\", function () {\n    // if(html.clientWidth > breakpoint){\n    top = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);\n\n    for (var i in speeds) {\n      layers[i].style.transform = \"translate3d(0,\" + -top * (speeds[i] / 100) + \"px,0)\";\n      layers[i].style.msTransform = \"translate3d(0,\" + -top * (speeds[i] / 100) + \"px,0)\";\n      layers[i].style.MozTransform = \"translate3d(0,\" + -top * (speeds[i] / 100) + \"px,0)\";\n      layers[i].style.OTransform = \"translate3d(0,\" + -top * (speeds[i] / 100) + \"px,0)\";\n      layers[i].style.webkitTransform = \"translate3d(0,\" + -top * (speeds[i] / 100) + \"px,0)\";\n    }\n    // }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4uanM/YTgwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIGltcG9ydCByZWxsYXggZnJvbSAncmVsbGF4JztcblxuKGZ1bmN0aW9uIChodG1sKSB7XG4gIGh0bWwuY2xhc3NOYW1lID0gaHRtbC5jbGFzc05hbWUucmVwbGFjZSgvXFxibm8tanNcXGIvLCAnanMnKTtcbn0pKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbnZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWl0ZW0tYWJvdXQnKSxcbiAgICBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLWFjdGl2ZScpO1xuXG4gIGlmIChodG1sLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJykpIHtcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59KTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRvcCA9IGh0bWwuc2Nyb2xsVG9wLFxuICAgICAgbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcmFsbGF4JyksXG4gICAgICBpLFxuICAgICAgYnJlYWtwb2ludCA9IDAsXG4gICAgICBzcGVlZHMgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gY29uc29sZS5sb2cobGF5ZXJzW2ldKTtcbiAgICBzcGVlZHNbaV0gPSBsYXllcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJykgfHwgMTAwO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmKGh0bWwuY2xpZW50V2lkdGggPiBicmVha3BvaW50KXtcbiAgICB0b3AgPSBNYXRoLm1heCh3aW5kb3cucGFnZVlPZmZzZXQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKTtcblxuICAgIGZvciAodmFyIGkgaW4gc3BlZWRzKSB7XG4gICAgICBsYXllcnNbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCgwLFwiICsgLXRvcCAqIChzcGVlZHNbaV0gLyAxMDApICsgXCJweCwwKVwiO1xuICAgICAgbGF5ZXJzW2ldLnN0eWxlLm1zVHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCgwLFwiICsgLXRvcCAqIChzcGVlZHNbaV0gLyAxMDApICsgXCJweCwwKVwiO1xuICAgICAgbGF5ZXJzW2ldLnN0eWxlLk1velRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoMCxcIiArIC10b3AgKiAoc3BlZWRzW2ldIC8gMTAwKSArIFwicHgsMClcIjtcbiAgICAgIGxheWVyc1tpXS5zdHlsZS5PVHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCgwLFwiICsgLXRvcCAqIChzcGVlZHNbaV0gLyAxMDApICsgXCJweCwwKVwiO1xuICAgICAgbGF5ZXJzW2ldLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoMCxcIiArIC10b3AgKiAoc3BlZWRzW2ldIC8gMTAwKSArIFwicHgsMClcIjtcbiAgICB9XG4gICAgLy8gfVxuICB9KTtcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NyaXB0cy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);
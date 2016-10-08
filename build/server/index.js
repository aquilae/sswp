/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _path = __webpack_require__(2);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _express = __webpack_require__(3);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _index = __webpack_require__(4);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _express2.default)().use('/public', _express2.default.static(_path2.default.join(__dirname, '..', 'public')))
	// .use((req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))
	.use(function (req, res) {
	    res.writeHead(200, { 'Content-Type': 'text/html' });
	    res.end(_index2.default);
	}).listen(process.env.PORT || 8080);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("source-map-support/register");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<!doctype html>\r\n<html>\r\n    <head>\r\n        <title>SSWP</title>\r\n    </head>\r\n    <body>\r\n        <div id=\"react-target\"></div>\r\n        <script src=\"//unpkg.com/react@15.3.2/dist/react.min.js\"></script>\r\n        <script src=\"//unpkg.com/react-dom@15.3.2/dist/react-dom.min.js\"></script>\r\n        <script src=\"/public/app.js\"></script>\r\n    </body>\r\n</html>\r\n"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2RiZWE1NzViNmUxYTU3M2NiNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcXFwiKVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlcXVpcmUoXFxcInBhdGhcXFwiKVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlcXVpcmUoXFxcImV4cHJlc3NcXFwiKVwiIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvaW5kZXguaHRtbCJdLCJuYW1lcyI6WyJ1c2UiLCJzdGF0aWMiLCJqb2luIiwiX19kaXJuYW1lIiwicmVxIiwicmVzIiwid3JpdGVIZWFkIiwiZW5kIiwibGlzdGVuIiwicHJvY2VzcyIsImVudiIsIlBPUlQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSwwQkFDS0EsR0FETCxDQUNTLFNBRFQsRUFDb0Isa0JBQVFDLE1BQVIsQ0FBZSxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsSUFBckIsRUFBMkIsUUFBM0IsQ0FBZixDQURwQjtBQUVJO0FBRkosRUFHS0gsR0FITCxDQUdTLFVBQUNJLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2ZBLFNBQUlDLFNBQUosQ0FBYyxHQUFkLEVBQW1CLEVBQUMsZ0JBQWdCLFdBQWpCLEVBQW5CO0FBQ0FELFNBQUlFLEdBQUo7QUFDSCxFQU5MLEVBT0tDLE1BUEwsQ0FPWUMsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBUGhDOzs7Ozs7O0FDUEEseUQ7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsNFoiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGNkYmVhNTc1YjZlMWE1NzNjYjRhXG4gKiovIiwiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5cclxuaW1wb3J0IGluZGV4IGZyb20gJy4uL3B1YmxpYy9pbmRleC5odG1sJ1xyXG5cclxuZXhwcmVzcygpXHJcbiAgICAudXNlKCcvcHVibGljJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycpKSlcclxuICAgIC8vIC51c2UoKHJlcSwgcmVzKSA9PiByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbmRleC5odG1sJykpKVxyXG4gICAgLnVzZSgocmVxLCByZXMpID0+IHtcclxuICAgICAgICByZXMud3JpdGVIZWFkKDIwMCwgeydDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJ30pXHJcbiAgICAgICAgcmVzLmVuZChpbmRleClcclxuICAgIH0pXHJcbiAgICAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MClcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmVyL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcXFwiKVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVxdWlyZShcXFwicGF0aFxcXCIpXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJleHByZXNzXFxcIilcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IWRvY3R5cGUgaHRtbD5cXHJcXG48aHRtbD5cXHJcXG4gICAgPGhlYWQ+XFxyXFxuICAgICAgICA8dGl0bGU+U1NXUDwvdGl0bGU+XFxyXFxuICAgIDwvaGVhZD5cXHJcXG4gICAgPGJvZHk+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJyZWFjdC10YXJnZXRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPHNjcmlwdCBzcmM9XFxcIi8vdW5wa2cuY29tL3JlYWN0QDE1LjMuMi9kaXN0L3JlYWN0Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxyXFxuICAgICAgICA8c2NyaXB0IHNyYz1cXFwiLy91bnBrZy5jb20vcmVhY3QtZG9tQDE1LjMuMi9kaXN0L3JlYWN0LWRvbS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcbiAgICAgICAgPHNjcmlwdCBzcmM9XFxcIi9wdWJsaWMvYXBwLmpzXFxcIj48L3NjcmlwdD5cXHJcXG4gICAgPC9ib2R5PlxcclxcbjwvaHRtbD5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHVibGljL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
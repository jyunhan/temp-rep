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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\n\n\n\n\n\n// import { nodemodule } from './nodemodule'\n// console.log(nodemodule.fib(1))\nvar mod = __webpack_require__(/*! ./nodemodule */ \"./src/server/nodemodule.ts\");\nconsole.log(mod.nodemodule.fib(6));\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.get('*', function (req, res, next) {\n    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], { location: req.url },\n        react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_shared_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n    res.send(\"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>SSR with RR</title>\\n        <link rel='stylesheet' href='/main.css' />\\n        <script src=\\\"/bundle.js\\\" defer></script>\\n      </head>\\n\\n      <body>\\n        <div id=\\\"root\\\">\" + markup + \"</div>\\n      </body>\\n    </html>\\n  \");\n});\napp.listen(3000, function () {\n    console.log(\"Server is listening on port: 3000\");\n});\n\n\n//# sourceURL=webpack:///./src/server/index.tsx?");

/***/ }),

/***/ "./src/server/nodemodule.ts":
/*!**********************************!*\
  !*** ./src/server/nodemodule.ts ***!
  \**********************************/
/*! exports provided: nodemodule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nodemodule\", function() { return nodemodule; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar wasmFile = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync('./build/optimized.wasm');\nvar wasm = new WebAssembly.Module(wasmFile);\nvar nodemodule = new WebAssembly.Instance(wasm, {\n    // export default () => new WebAssembly.Instance(wasm, {\n    env: {\n        memoryBase: 0,\n        tableBase: 0,\n        memory: new WebAssembly.Memory({\n            initial: 256,\n            maximum: 512,\n        }),\n        table: new WebAssembly.Table({\n            initial: 0,\n            maximum: 0,\n            element: 'anyfunc',\n        }),\n        abort: console.log,\n    },\n}).exports;\n\n\n//# sourceURL=webpack:///./src/server/nodemodule.ts?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.ts\");\n/* harmony import */ var _store_StoreIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/StoreIndex */ \"./src/store/StoreIndex.ts\");\n\n\n\n\n\n\nmobx__WEBPACK_IMPORTED_MODULE_3__[\"configure\"]({\n    enforceActions: 'observed',\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n    var rootStore = props.rootStore || new _store_StoreIndex__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], { rootStore: rootStore }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n});\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/LoginPage.tsx":
/*!**********************************!*\
  !*** ./src/shared/LoginPage.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"inject\"])('rootStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"observer\"])(function (props) {\n    var rootStore = props.rootStore;\n    var loginPageManagement = rootStore.loginPageManagement;\n    var accountText = loginPageManagement.accountText, passwordText = loginPageManagement.passwordText;\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: 'container' },\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: 'login' },\n            \"Login: \",\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: 'text', defaultValue: accountText, onChange: function (event) { loginPageManagement.updateAccountText(event.target.value); } }),\n            \"Password: \",\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: 'password', defaultValue: passwordText, onChange: function (event) { loginPageManagement.updatePasswordText(event.target.value); } }),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", { type: 'submit', onClick: function () { return loginPageManagement.login(); } }, \"Log In\"))));\n})));\n\n\n//# sourceURL=webpack:///./src/shared/LoginPage.tsx?");

/***/ }),

/***/ "./src/shared/MediaWindow.tsx":
/*!************************************!*\
  !*** ./src/shared/MediaWindow.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar amazonS3Path = 'https://s3-ap-northeast-1.amazonaws.com/';\nvar bucketName = 'jhliou.mediawindow';\nvar fileNameList = ['baby1', 'baby2', 'baby3', 'baby4', 'baby5'];\nvar imgPathList = fileNameList.map(function (filename) { return \"\" + amazonS3Path + bucketName + \"/\" + filename + \".jpg\"; });\nvar constraints = {\n    audio: true,\n    video: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"inject\"])('rootStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"observer\"])(function (props) {\n    var goCamera = function () { return __awaiter(void 0, void 0, void 0, function () {\n        var videoPlayer, stream, errMsg_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    videoPlayer = document.querySelector('video#video-player');\n                    return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];\n                case 1:\n                    stream = _a.sent();\n                    if (videoPlayer)\n                        videoPlayer.srcObject = stream;\n                    return [3 /*break*/, 3];\n                case 2:\n                    errMsg_1 = _a.sent();\n                    console.error(errMsg_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"video\", { id: 'video-player', width: '250px', height: '400px', controls: true, autoPlay: true }),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { onClick: goCamera }, \"\\u9EDE\\u6211\"),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"video\", { width: '250px', controls: true, autoPlay: true },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"source\", { src: './audio/\\u59B9\\u59B9\\u5BF6\\u5BF6.mp4', type: \"video/mp4\" })),\n        imgPathList.map(function (imgPath, idx) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { key: idx, src: imgPath, width: '250px' }); })));\n})));\n\n\n//# sourceURL=webpack:///./src/shared/MediaWindow.tsx?");

/***/ }),

/***/ "./src/shared/NotFoundPage.tsx":
/*!*************************************!*\
  !*** ./src/shared/NotFoundPage.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Page Not Found..\")); });\n\n\n//# sourceURL=webpack:///./src/shared/NotFoundPage.tsx?");

/***/ }),

/***/ "./src/shared/Theme.tsx":
/*!******************************!*\
  !*** ./src/shared/Theme.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MediaWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaWindow */ \"./src/shared/MediaWindow.tsx\");\n\n\n\nvar headerDOMList = [\n    {\n        moduleName: 'MediaWindow',\n        className: 'mediawindow',\n        DOMText: 'Media Window'\n    },\n    {\n        moduleName: 'Logout',\n        className: 'logout',\n        DOMText: 'Log out'\n    },\n];\nvar moduleMap = {\n    'MediaWindow': react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_MediaWindow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n    'Logout': (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Log out\"))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"inject\"])('rootStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"observer\"])(function (props) {\n    var rootStore = props.rootStore;\n    var mediaWindowManagement = rootStore.mediaWindowManagement;\n    var switchPageByModuleName = function (moduleName) { return mediaWindowManagement.switchPageByModuleName(moduleName); };\n    var renderModule = function (moduleName) { return moduleMap[moduleName]; };\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: 'header' }, headerDOMList.map(function (_a, idx) {\n            var moduleName = _a.moduleName, className = _a.className, DOMText = _a.DOMText;\n            return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: className, key: idx, onClick: function () { return switchPageByModuleName(moduleName); } }, DOMText);\n        })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: 'container' }, renderModule(mediaWindowManagement.currentModuleName)),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: 'footer' })));\n})));\n\n\n//# sourceURL=webpack:///./src/shared/Theme.tsx?");

/***/ }),

/***/ "./src/shared/routes.ts":
/*!******************************!*\
  !*** ./src/shared/routes.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme */ \"./src/shared/Theme.tsx\");\n/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginPage */ \"./src/shared/LoginPage.tsx\");\n/* harmony import */ var _NotFoundPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFoundPage */ \"./src/shared/NotFoundPage.tsx\");\n\n\n\nvar routes = [\n    {\n        path: '/',\n        exact: true,\n        component: _Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    },\n    {\n        path: '/login',\n        exact: true,\n        component: _LoginPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        path: '*',\n        component: _NotFoundPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n\n//# sourceURL=webpack:///./src/shared/routes.ts?");

/***/ }),

/***/ "./src/store/LoginPageManagement.ts":
/*!******************************************!*\
  !*** ./src/store/LoginPageManagement.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\n/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(neo4j_driver__WEBPACK_IMPORTED_MODULE_1__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar LoginPageManagement = /** @class */ (function () {\n    function LoginPageManagement(rootStore) {\n        this.accountText = '';\n        this.passwordText = '';\n        Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"autorun\"])(function () {\n            // this.rootStore = rootStore\n        });\n    }\n    LoginPageManagement.prototype.updateAccountText = function (text) {\n        this.accountText = text;\n    };\n    LoginPageManagement.prototype.updatePasswordText = function (text) {\n        this.passwordText = text;\n    };\n    LoginPageManagement.prototype.login = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var driver, session, result, errMsg_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        driver = neo4j_driver__WEBPACK_IMPORTED_MODULE_1___default.a.driver('bolt://localhost', neo4j_driver__WEBPACK_IMPORTED_MODULE_1___default.a.auth.basic('neo4j', '1234'));\n                        session = driver.session();\n                        return [4 /*yield*/, session.run('MATCH (tom:Person {name: $nameParam})-[:ACTED_IN]->(tomHanksMovies) RETURN tom,tomHanksMovies', {\n                                nameParam: 'Tom Hanks'\n                            })];\n                    case 1:\n                        result = _a.sent();\n                        console.log(result);\n                        driver.close();\n                        return [3 /*break*/, 3];\n                    case 2:\n                        errMsg_1 = _a.sent();\n                        console.error(errMsg_1);\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]\n    ], LoginPageManagement.prototype, \"accountText\", void 0);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]\n    ], LoginPageManagement.prototype, \"passwordText\", void 0);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"] /*async*/\n    ], LoginPageManagement.prototype, \"updateAccountText\", null);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]\n    ], LoginPageManagement.prototype, \"updatePasswordText\", null);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]\n    ], LoginPageManagement.prototype, \"login\", null);\n    return LoginPageManagement;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPageManagement);\n\n\n//# sourceURL=webpack:///./src/store/LoginPageManagement.ts?");

/***/ }),

/***/ "./src/store/MediaWindowManagement.ts":
/*!********************************************!*\
  !*** ./src/store/MediaWindowManagement.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n// import axios from 'axios'\n\nvar MediaWindowManagement = /** @class */ (function () {\n    function MediaWindowManagement(rootStore) {\n        this.currentModuleName = 'MediaWindow';\n        Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"autorun\"])(function () {\n            // this.rootStore = rootStore\n        });\n    }\n    MediaWindowManagement.prototype.switchPageByModuleName = function (moduleName) {\n        console.log(moduleName);\n        this.currentModuleName = moduleName || this.currentModuleName;\n    };\n    MediaWindowManagement.prototype.doStreamimg = function (stream) {\n        this.streamObject = stream;\n    };\n    Object.defineProperty(MediaWindowManagement.prototype, \"openModal\", {\n        get: function () {\n            return 123;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]\n    ], MediaWindowManagement.prototype, \"currentModuleName\", void 0);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]\n    ], MediaWindowManagement.prototype, \"streamObject\", void 0);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"] /*async*/\n    ], MediaWindowManagement.prototype, \"switchPageByModuleName\", null);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]\n    ], MediaWindowManagement.prototype, \"doStreamimg\", null);\n    __decorate([\n        mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]\n    ], MediaWindowManagement.prototype, \"openModal\", null);\n    return MediaWindowManagement;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaWindowManagement);\n\n\n//# sourceURL=webpack:///./src/store/MediaWindowManagement.ts?");

/***/ }),

/***/ "./src/store/StoreIndex.ts":
/*!*********************************!*\
  !*** ./src/store/StoreIndex.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MediaWindowManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaWindowManagement */ \"./src/store/MediaWindowManagement.ts\");\n/* harmony import */ var _LoginPageManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginPageManagement */ \"./src/store/LoginPageManagement.ts\");\n\n\n\nvar StoreIndex = /** @class */ (function () {\n    function StoreIndex() {\n        this.mediaWindowManagement = new _MediaWindowManagement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n        this.loginPageManagement = new _LoginPageManagement__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    }\n    StoreIndex.prototype.dehydrate = function () {\n        return {\n            mediaWindowManagement: Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"toJS\"])(this.mediaWindowManagement),\n            loginPageManagement: Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"toJS\"])(this.loginPageManagement),\n        };\n    };\n    StoreIndex.prototype.hydrate = function (state) {\n        Object.assign(this.mediaWindowManagement, state.mediaWindowManagement);\n        Object.assign(this.loginPageManagement, state.loginPageManagement);\n    };\n    return StoreIndex;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoreIndex);\n\n\n//# sourceURL=webpack:///./src/store/StoreIndex.ts?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/server/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server/index.tsx */\"./src/server/index.tsx\");\n\n\n//# sourceURL=webpack:///multi_./src/server/index.tsx?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "neo4j-driver":
/*!*******************************!*\
  !*** external "neo4j-driver" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"neo4j-driver\");\n\n//# sourceURL=webpack:///external_%22neo4j-driver%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });
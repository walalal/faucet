(this["webpackJsonpfaucet"] = this["webpackJsonpfaucet"] || []).push([[0],{

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 898:
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"faucet\",\"version\":\"0.1.20\",\"private\":true,\"homepage\":\"./\",\"dependencies\":{\"@types/crypto-js\":\"^4.0.1\",\"@types/node\":\"^14.14.10\",\"@types/react\":\"^17.0.0\",\"@types/react-dom\":\"^17.0.0\",\"@types/react-input-autosize\":\"^2.2.0\",\"@types/react-select\":\"^3.0.26\",\"bignumber.js\":\"^9.0.1\",\"crypto-js\":\"^4.0.0\",\"emotion\":\"^11.0.0\",\"immutable\":\"^4.0.0-rc.12\",\"localforage\":\"^1.9.0\",\"node-sass\":\"4.14.1\",\"react\":\"^17.0.1\",\"react-dom\":\"^17.0.1\",\"react-input-autosize\":\"^2.2.2\",\"react-scripts\":\"4.0.1\",\"react-select\":\"^3.1.1\",\"send-crypto\":\"^0.2.28\",\"typescript\":\"^4.1.2\"},\"devDependencies\":{\"gh-pages\":\"^3.1.0\",\"patch-package\":\"^6.2.2\",\"postinstall-postinstall\":\"^2.1.0\",\"tslint\":\"^6.1.3\",\"tslint-microsoft-contrib\":\"^6.2.0\"},\"scripts\":{\"start\":\"PORT=3003 && react-scripts start\",\"build\":\"react-scripts build\",\"eject\":\"react-scripts eject\",\"deploy\":\"npm version --no-git-tag-version patch && yarn build && gh-pages -d build\",\"postinstall\":\"patch-package\"},\"eslintConfig\":{\"extends\":[\"react-app\"]},\"browserslist\":{\"production\":[\">0.2%\",\"not dead\",\"not op_mini all\"],\"development\":[\"last 1 chrome version\",\"last 1 firefox version\",\"last 1 safari version\"]},\"prettier\":{\"printWidth\":80,\"semi\":true,\"singleQuote\":false,\"tabWidth\":4,\"trailingComma\":\"all\",\"endOfLine\":\"lf\",\"arrowParens\":\"always\"}}");

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(83);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js + 4 modules
var createSuper = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(8);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);

// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.es.js
var immutable_es = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(84);
var AutosizeInput_default = /*#__PURE__*/__webpack_require__.n(AutosizeInput);

// EXTERNAL MODULE: ./node_modules/send-crypto/build/module/index.js
var build_module = __webpack_require__(384);

// CONCATENATED MODULE: ./src/lib/sendCrypto.tsx
var sendTokens=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(cryptoAccount,token,recipient,amount,params,memo,addMessage){var txHash;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!isNaN(parseInt(amount,10))){_context.next=2;break;}throw new Error("Invalid amount ".concat(amount));case 2:_context.prev=2;_context.next=5;return new Promise(function(resolve,reject){cryptoAccount.send(recipient,amount,token.sendCrypto||token.name,{params:params===""?undefined:params,memo:memo===""?undefined:memo}).on("transactionHash",resolve).catch(reject);});case 5:txHash=_context.sent;addMessage({type:MessageType.INFO,key:token.name,message:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["Sending ",amount," ",token.name," (",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:token.explorer(txHash),children:"Explorer Link"}),")"]})});_context.next=15;break;case 9:_context.prev=9;_context.t0=_context["catch"](2);console.error(_context.t0);if(!(_context.t0.message&&_context.t0.message.match("newBlockHeaders "))){_context.next=14;break;}return _context.abrupt("return");case 14:addMessage({type:MessageType.ERROR,key:token.name,message:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["Error sending ",token.name,": ",_context.t0.message]})});case 15:case"end":return _context.stop();}}},_callee,null,[[2,9]]);}));return function sendTokens(_x,_x2,_x3,_x4,_x5,_x6,_x7){return _ref.apply(this,arguments);};}();var getAddress=/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(cryptoAccount,token){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",cryptoAccount.address(token.sendCrypto||token.name));case 1:case"end":return _context2.stop();}}},_callee2);}));return function getAddress(_x8,_x9){return _ref2.apply(this,arguments);};}();var balanceOf=/*#__PURE__*/function(){var _ref3=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(cryptoAccount,token){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",cryptoAccount.balanceOf(token.sendCrypto||token.name,{bn:bignumber_default.a}));case 1:case"end":return _context3.stop();}}},_callee3);}));return function balanceOf(_x10,_x11){return _ref3.apply(this,arguments);};}();// tslint:disable-next-line: no-any
var extractError=function extractError(error){if(typeof error==="object"){if(error.response){return extractError(error.response);}if(error.data){return extractError(error.data);}if(error.error){return extractError(error.error);}if(error.message){return extractError(error.message);}if(error.statusText){return extractError(error.statusText);}try{return JSON.stringify(error);}catch(error){// Ignore JSON error
}}return String(error);};
// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/bch.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var bch_ref2 = /*#__PURE__*/react["createElement"]("defs", null, /*#__PURE__*/react["createElement"]("style", null, ".cls-1-bch{fill:#6cc64b;fill-rule:evenodd;}"));

var bch_ref3 = /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, /*#__PURE__*/react["createElement"]("path", {
  id: "Fill-1-Copy-3",
  className: "cls-1-bch",
  d: "M55.36,38.24c1.56,6.12-8.24,7.86-11.3,8.64L41.3,36.05c3.06-.78,12.43-4.2,14.06,2.19m6.81,16.2c1.72,6.73-10,8.9-13.68,9.84l-3-11.94c3.67-.93,14.93-4.93,16.72,2.1m2.68-21.2c-2.25-6.27-8.34-7-15.5-5.84l-2.27-8.91-5.43,1.38,2.21,8.68c-1.42.36-2.87.76-4.31,1.16L37.32,21,31.9,22.36l2.27,8.9c-1.17.33-2.32.64-3.44.93v0l-7.48,1.9,1.48,5.8s4-1.1,3.93-1a2.89,2.89,0,0,1,3.73,1.58L35,50.58a4.66,4.66,0,0,1,.58-.11l-.57.15L38.6,64.84A2,2,0,0,1,37,67.16c.09,0-3.94,1-3.94,1l.57,6.75,7.06-1.8,3.88-1,2.3,9,5.42-1.38L50,70.87c1.45-.33,2.9-.69,4.34-1.06l2.26,8.88,5.42-1.38-2.28-9c9-2.85,14.78-6.77,13.39-15.53C72,45.72,68,43.47,62.52,43.54c2.74-2.4,4-5.72,2.33-10.3m28.24-7.19a49.5,49.5,0,1,1-67-20.13,49.5,49.5,0,0,1,67,20.13"
})));

function SvgBch(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 99.01 99.01",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), bch_ref2, title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "icon-bch") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, bch_ref3);
}

var ForwardRef = /*#__PURE__*/react["forwardRef"](SvgBch);
/* harmony default export */ var bch = (__webpack_require__.p + "static/media/bch.d3543778.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/btc.svg
function btc_extends() { btc_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return btc_extends.apply(this, arguments); }

function btc_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = btc_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function btc_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var btc_ref2 = /*#__PURE__*/react["createElement"]("desc", null, "Created with Sketch.");

var btc_ref3 = /*#__PURE__*/react["createElement"]("g", {
  id: "Page-1",
  stroke: "none",
  strokeWidth: 1,
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "btc"
}, /*#__PURE__*/react["createElement"]("circle", {
  id: "Oval",
  fill: "#F09242",
  cx: 12.5,
  cy: 12.5,
  r: 12.5
}), /*#__PURE__*/react["createElement"]("path", {
  d: "M17.9873,9.54464 C17.8004,7.58259 16.1118,6.92299 13.98263,6.73214 L13.98263,4.0100446 L12.34071,4.0100446 L12.34071,6.66183 C11.90688,6.66183 11.46303,6.66183 11.00583,6.67857 L11.00583,4 L9.35724,4 L9.35724,6.73214 L8.30602,6.73214 L6.0233605,6.73214 L6.0233605,8.50335 C6.0233605,8.50335 7.24478,8.47991 7.22476,8.50335 C7.68601,8.44561 8.10863,8.76846 8.17587,9.22991 L8.17587,16.6931 C8.16643,16.8486 8.09565,16.9939 7.97917,17.097 C7.86269,17.2 7.71011,17.2523 7.55514,17.2422 C7.57517,17.2623 6.353745,17.2422 6.353745,17.2422 L6,19.221 L8.14917,19.221 L9.33054,19.221 L9.33054,22 L11.00583,22 L11.00583,19.2612 L12.34071,19.2612 L12.34071,22 L14.00932,22 L14.00932,19.2377 C16.7892,19.0804 18.7315,18.3772 18.9751,15.7623 C19.172,13.65625 18.1842,12.7154 16.6057,12.3337 C17.5635,11.84487 18.1642,10.99442 18.024,9.54464 L17.9873,9.54464 Z M15.67793,15.4342 C15.67793,17.3233 12.72015,17.2792 11.36845,17.259 C11.24681,17.2572 11.13818,17.2556 11.04587,17.2556 L11.04587,13.60603 C11.15838,13.60637 11.29537,13.60346 11.45074,13.60017 C12.83474,13.57084 15.67793,13.5106 15.67793,15.4342 Z M11.31379,11.93845 C12.44339,11.95701 14.90704,11.99748 14.90704,10.28125 C14.90704,8.52874 12.53714,8.59065 11.38034,8.62086 C11.25087,8.62425 11.13659,8.62723 11.04254,8.62723 L11.04254,11.93527 C11.12013,11.93527 11.21149,11.93677 11.31379,11.93845 Z",
  id: "Shape",
  fill: "#FFFFFF"
})));

function SvgBtc(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = btc_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", btc_extends({
    width: "20px",
    height: "20px",
    viewBox: "0 0 25 25",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "btc") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, btc_ref2, btc_ref3);
}

var btc_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgBtc);
/* harmony default export */ var btc = (__webpack_require__.p + "static/media/btc.807489f4.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/dai.svg
function dai_extends() { dai_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dai_extends.apply(this, arguments); }

function dai_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = dai_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function dai_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var dai_ref2 = /*#__PURE__*/react["createElement"]("circle", {
  cx: 314.15,
  cy: 314.15,
  r: 309,
  fill: "#fff",
  stroke: "#ffce45",
  strokeMiterlimit: 10,
  strokeWidth: 10.3
});

var dai_ref3 = /*#__PURE__*/react["createElement"]("path", {
  fill: "#ffce45",
  d: "M314.152 72.307L550.856 309.01 314.152 545.715 77.448 309.01z"
});

var _ref4 = /*#__PURE__*/react["createElement"]("path", {
  fill: "#febe44",
  d: "M314.15 386.25L77.25 309l236.9-236.7L551.05 309l-236.9 77.25z"
});

var _ref5 = /*#__PURE__*/react["createElement"]("path", {
  fill: "#fff",
  d: "M159.65 293.55H267.8l46.35-51.5 51.5 51.5H473.8L314.15 121.03l-154.5 172.52z"
});

var _ref6 = /*#__PURE__*/react["createElement"]("path", {
  fill: "#d9a547",
  opacity: 0.42,
  d: "M314.15 545.7V72.3L550.85 309l-236.7 236.7z"
});

function SvgDai(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = dai_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", dai_extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 628.3 628.3",
    width: "20px",
    height: "20px",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "dai") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, dai_ref2, dai_ref3, _ref4, _ref5, _ref6);
}

var dai_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgDai);
/* harmony default export */ var dai = (__webpack_require__.p + "static/media/dai.9f1d001b.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/eth.svg
function eth_extends() { eth_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return eth_extends.apply(this, arguments); }

function eth_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = eth_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function eth_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var eth_ref2 = /*#__PURE__*/react["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react["createElement"]("circle", {
  cx: 16,
  cy: 16,
  r: 16,
  fill: "#627eea"
}), /*#__PURE__*/react["createElement"]("g", {
  fill: "#FFF",
  fillRule: "nonzero",
  transform: "translate(9 4)"
}, /*#__PURE__*/react["createElement"]("polygon", {
  fillOpacity: 0.602,
  points: "7.498 0 7.498 8.87 14.995 12.22"
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "7.498 0 0 12.22 7.498 8.87"
}), /*#__PURE__*/react["createElement"]("polygon", {
  fillOpacity: 0.602,
  points: "7.498 17.968 7.498 23.995 15 13.616"
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "7.498 23.995 7.498 17.967 0 13.616"
}), /*#__PURE__*/react["createElement"]("polygon", {
  fillOpacity: 0.2,
  points: "7.498 16.573 14.995 12.22 7.498 8.872"
}), /*#__PURE__*/react["createElement"]("polygon", {
  fillOpacity: 0.602,
  points: "0 12.22 7.498 16.573 7.498 8.872"
})));

function SvgEth(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = eth_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", eth_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20px",
    height: "20px",
    viewBox: "0 0 32 32",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, eth_ref2);
}

var eth_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgEth);
/* harmony default export */ var eth = (__webpack_require__.p + "static/media/eth.198f135b.svg");

// CONCATENATED MODULE: ./src/img/fil.png
/* harmony default export */ var fil = (__webpack_require__.p + "static/media/fil.f25f4794.png");
// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/ren.svg
function ren_extends() { ren_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ren_extends.apply(this, arguments); }

function ren_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ren_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ren_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ren_ref2 = /*#__PURE__*/react["createElement"]("g", {
  fill: "#001c3a"
}, /*#__PURE__*/react["createElement"]("polygon", {
  points: "18.3,19.1 21.6,17.2 22.1,18 34.2,11 33.3,10.4 32.4,9.9 32,9.7 12.2,21.1 12.2,21.6 17.9,18.3  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "18.3,26.3 27.9,20.8 28.3,21.6 40.4,14.5 39.6,14 38.7,13.5 38.2,13.3 12.2,28.3 12.2,28.8 17.9,25.5  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "18.3,29.9 31,22.6 31.4,23.3 43.6,16.3 42.7,15.8 41.8,15.3 41.3,15.1 12.2,31.9 12.2,32.4 17.9,29.1  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "18.3,33.5 34.2,24.3 34.6,25.1 46.7,18.1 45.8,17.6 44.9,17.1 44.4,16.9 12.2,35.5 12.2,36 17.9,32.7  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "18.3,37.1 37.3,26.1 37.7,26.9 49.8,19.9 48.9,19.4 48,18.9 47.6,18.6 12.2,39.1 12.2,39.6 17.9,36.3  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "51.1,20.7 50.7,20.4 12.2,42.7 12.2,43.2 17.9,39.9 18.3,40.7 37.3,29.7 37.7,30.5 51.8,22.4 51.8,21.3 51.8,21.1  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "14.7,45.3 17.8,43.5 18.3,44.3 37.2,33.4 37.6,34.1 51.8,26 51.8,24.9 51.8,23.9 51.8,23.4 14.2,45.1  "
}), /*#__PURE__*/react["createElement"]("polyline", {
  points: "37.2,37 37.6,37.7 51.8,29.6 51.8,28.5 51.8,27.5 51.8,27 17.3,46.9 17.8,47.1 21,45.3 21.5,46  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "20.9,48.9 24.1,47.1 24.6,47.8 37.2,40.5 37.6,41.3 51.8,33.2 51.8,32.1 51.8,31.1 51.8,30.6 20.4,48.7  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "24,50.7 27.2,48.9 27.7,49.6 37.2,44.1 37.6,44.9 51.8,36.7 51.8,35.7 51.8,34.7 51.8,34.2 23.6,50.5  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "26.7,52.3 27.1,52.5 30.3,50.7 30.8,51.4 37.2,47.7 37.6,48.5 51.8,40.3 51.8,39.3 51.8,38.3 51.8,37.8  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "30.2,54.3 33.5,52.5 33.9,53.2 37.2,51.3 37.6,52.1 51.8,43.9 51.8,42.9 51.8,41.9 51.8,41.4 29.8,54.1  "
}), /*#__PURE__*/react["createElement"]("polygon", {
  points: "37.3,12.7 36.4,12.2 36.4,12.2 35.6,11.7 35.1,11.5 12.2,24.7 12.2,25.2 17.9,21.9 18.3,22.7 24.8,19 25.2,19.8  "
}));

function SvgRen(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = ren_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", ren_extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "9 9 46 46",
    style: {
      enableBackground: "new 9 9 46 46"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, ren_ref2);
}

var ren_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgRen);
/* harmony default export */ var ren = (__webpack_require__.p + "static/media/ren.a0a5bbb1.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/renBCH.svg
function renBCH_extends() { renBCH_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return renBCH_extends.apply(this, arguments); }

function renBCH_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = renBCH_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function renBCH_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var renBCH_ref2 = /*#__PURE__*/react["createElement"]("defs", null, /*#__PURE__*/react["createElement"]("style", null, ".cls-1{fill:#87888c;fill-rule:evenodd;}"));

var renBCH_ref3 = /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_2-2",
  "data-name": "Layer 2"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_1-2-2",
  "data-name": "Layer 1-2"
}, /*#__PURE__*/react["createElement"]("path", {
  id: "Fill-1-Copy-3",
  className: "cls-1",
  d: "M39.69,27.41c1.12,4.38-5.91,5.63-8.1,6.19l-2-7.76c2.2-.56,8.91-3,10.08,1.57M44.58,39c1.23,4.83-7.17,6.38-9.81,7.06l-2.15-8.56c2.63-.67,10.7-3.54,12,1.5m1.93-15.2c-1.62-4.49-6-5-11.12-4.19l-1.63-6.39-3.89,1,1.59,6.23c-1,.26-2.06.54-3.09.83L26.76,15l-3.89,1L24.5,22.4c-.84.24-1.66.46-2.47.67h0l-5.36,1.36,1.06,4.16s2.87-.79,2.82-.72A2.07,2.07,0,0,1,23.22,29l1.87,7.24a3.07,3.07,0,0,1,.42-.07l-.41.1,2.58,10.2a1.44,1.44,0,0,1-1.15,1.66c.06,0-2.83.72-2.83.72l.41,4.84,5.06-1.29L32,51.69l1.65,6.46,3.88-1L35.85,50.8c1-.23,2.08-.49,3.11-.76l1.62,6.37,3.89-1L42.83,49c6.46-2,10.6-4.86,9.6-11.14-.81-5.06-3.67-6.67-7.6-6.62,2-1.72,2.87-4.11,1.67-7.39m20.25-5.15A35.49,35.49,0,1,1,18.67,4.25l0,0a35.48,35.48,0,0,1,48,14.44"
})))));

function SvgRenBch(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = renBCH_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", renBCH_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 71 71",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), renBCH_ref2, title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "renBCH") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, renBCH_ref3);
}

var renBCH_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgRenBch);
/* harmony default export */ var renBCH = (__webpack_require__.p + "static/media/renBCH.4e481efb.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/renBTC.svg
function renBTC_extends() { renBTC_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return renBTC_extends.apply(this, arguments); }

function renBTC_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = renBTC_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function renBTC_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var renBTC_ref2 = /*#__PURE__*/react["createElement"]("defs", null, /*#__PURE__*/react["createElement"]("style", null, ".cls-1{fill:#87888c;}"));

var renBTC_ref3 = /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "All"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "Artboard"
}, /*#__PURE__*/react["createElement"]("path", {
  id: "Fill-1-Copy-3-Copy",
  className: "cls-1",
  d: "M42.66,30.12c-1.08,4.36-7.81,2.14-10,1.6L34.6,24c2.18.54,9.2,1.56,8.06,6.11M41.47,42.56c-1.19,4.8-9.27,2.2-11.89,1.55l2.12-8.5c2.62.65,11,2,9.77,7m8.82-12.37C51,25.5,47.43,23,42.55,21.3L44.13,15l-3.86-1-1.54,6.17c-1-.25-2.06-.49-3.09-.72l1.55-6.22-3.86-1-1.59,6.34c-.84-.19-1.66-.38-2.46-.58v0L24,16.68l-1,4.12s2.86.66,2.8.7a2.05,2.05,0,0,1,1.8,2.25L25.73,31a2.16,2.16,0,0,1,.4.12l-.41-.1L23.2,41.13a1.41,1.41,0,0,1-1.77.92c0,.05-2.81-.71-2.81-.71L16.7,45.77l5,1.25c.94.23,1.85.48,2.75.71l-1.59,6.42,3.85,1,1.59-6.35c1,.28,2.05.54,3.07.8l-1.57,6.32,3.86,1,1.6-6.41c6.58,1.25,11.54.75,13.62-5.21,1.68-4.79-.08-7.56-3.55-9.36,2.53-.59,4.43-2.25,4.93-5.67m20.11,5A35.2,35.2,0,1,1,35.2,0,35.2,35.2,0,0,1,70.4,35.2"
})))));

function SvgRenBtc(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = renBTC_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", renBTC_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 70.4 70.4",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), renBTC_ref2, title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "renBTC") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, renBTC_ref3);
}

var renBTC_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgRenBtc);
/* harmony default export */ var renBTC = (__webpack_require__.p + "static/media/renBTC.4cdb5282.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/renZEC.svg
function renZEC_extends() { renZEC_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return renZEC_extends.apply(this, arguments); }

function renZEC_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = renZEC_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function renZEC_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var renZEC_ref2 = /*#__PURE__*/react["createElement"]("defs", null, /*#__PURE__*/react["createElement"]("style", null, ".cls-1{fill:#87888c;}"));

var renZEC_ref3 = /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, /*#__PURE__*/react["createElement"]("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, /*#__PURE__*/react["createElement"]("path", {
  className: "cls-1",
  d: "M35.5,0A35.5,35.5,0,1,0,71,35.5,35.53,35.53,0,0,0,35.5,0Zm0,65.14A29.64,29.64,0,1,1,65.14,35.5,29.67,29.67,0,0,1,35.5,65.14Z"
}), /*#__PURE__*/react["createElement"]("path", {
  className: "cls-1",
  d: "M35.5,7.53a28,28,0,1,0,28,28A28,28,0,0,0,35.5,7.53ZM48.16,24.41l-15,20.38h15V52H38.48V57.9h-6V52H22.84V46.54l15-20.36h-15V19h9.68V13.07h6V19h9.68Z"
})));

function SvgRenZec(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = renZEC_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", renZEC_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 71 71",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), renZEC_ref2, title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "renZEC") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, renZEC_ref3);
}

var renZEC_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgRenZec);
/* harmony default export */ var renZEC = (__webpack_require__.p + "static/media/renZEC.259eaf0b.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/zec.svg
function zec_extends() { zec_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return zec_extends.apply(this, arguments); }

function zec_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = zec_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function zec_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var zec_ref2 = /*#__PURE__*/react["createElement"]("path", {
  fill: "#231f20",
  d: "M245.4,20C121.11,20,20,121.11,20,245.39s101.11,225.4,225.4,225.4,225.39-101.11,225.39-225.4S369.68,20,245.4,20Zm0,413.58c-103.77,0-188.19-84.42-188.19-188.19S141.63,57.21,245.4,57.21s188.18,84.42,188.18,188.18S349.16,433.58,245.4,433.58Z"
});

var zec_ref3 = /*#__PURE__*/react["createElement"]("circle", {
  fill: "#f4b728",
  cx: 245.4,
  cy: 245.39,
  r: 177.65
});

var zec_ref4 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "325.78 175.13 325.78 140.75 264.28 140.75 264.28 103.02 226.51 103.02 226.51 140.75 165.02 140.75 165.02 186.29 260.35 186.29 182.39 293.58 165.02 315.66 165.02 350.04 226.51 350.04 226.51 387.65 231.04 387.65 231.04 387.81 259.75 387.81 259.75 387.65 264.28 387.65 264.28 350.04 325.78 350.04 325.78 304.5 230.44 304.5 308.4 197.21 325.78 175.13"
});

function SvgZec(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = zec_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", zec_extends({
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 493.33 490.18",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "headerArtboard 7") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, zec_ref2, zec_ref3, zec_ref4);
}

var zec_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgZec);
/* harmony default export */ var zec = (__webpack_require__.p + "static/media/zec.dd6d71f0.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/luna.svg
function luna_extends() { luna_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return luna_extends.apply(this, arguments); }

function luna_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = luna_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function luna_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var luna_ref2 = /*#__PURE__*/react["createElement"]("style", {
  type: "text/css"
}, "\n\t.st0{fill:#2043B5;}\n");

var luna_ref3 = /*#__PURE__*/react["createElement"]("g", null, /*#__PURE__*/react["createElement"]("path", {
  className: "st0",
  d: "M51.3,58.5C31,49.4,18.3,31,17.5,12.4c0-0.8-1-1.2-1.6-0.7C6.2,20.4,0,33.1,0.1,47.2 C0.3,72.4,20.8,93,45.9,93.5c20.3,0.4,37.8-12.2,44.6-30c0.3-0.7-0.4-1.4-1.1-1.2C77.6,65.2,64.1,64.2,51.3,58.5z"
}), /*#__PURE__*/react["createElement"]("g", null, /*#__PURE__*/react["createElement"]("path", {
  className: "st0",
  d: "M70.6,11.4c0.5,0.3,0.9,0.6,1.4,1l0,0c0.5,0.3,0.9,0.7,1.4,1.1l0.1,0.1c0.4,0.3,0.8,0.7,1.3,1.1l0.1,0.1 l0.1,0.1c0.4,0.4,0.8,0.7,1.2,1.1l0.1,0.1l0.1,0.1c0.4,0.4,0.8,0.8,1.2,1.2l2.9-2.8l-2.8,2.8c0.4,0.4,0.8,0.9,1.2,1.3 c0.4,0.5,0.8,1,1.2,1.4l0.1,0.1l0,0c0.8,0.9,1.5,1.9,2.1,2.9l0,0.1l0.1,0.1c0.3,0.5,0.6,1,0.9,1.4l0,0l0,0 c0.3,0.5,0.6,1.1,0.9,1.6l0,0.1l0,0c0.3,0.5,0.6,1.1,0.9,1.7c0.2,0.5,0.5,1,0.7,1.6l0,0.1c0.5,1.1,0.9,2.3,1.3,3.4l0,0.1 c0.2,0.6,0.4,1.1,0.5,1.7l0,0.2c0.3,1.2,0.6,2.4,0.9,3.6l0,0.2l0,0.1c0.4,2.4,0.7,4.9,0.7,7.4c-7.8-6.3-13.6-12.1-16.7-22.1 l-0.1-0.3l0-0.1c-0.1-0.4-0.2-0.8-0.3-1.2l0-0.2l-0.1-0.3c-0.1-0.5-0.3-1.1-0.4-1.6c-0.3-1.5-0.5-3.1-0.7-4.8 C71,14.5,70.9,12.9,70.6,11.4 M50,0.2c0.2,0,0.4,0,0.5,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.4,0,0.8,0.1,1.2,0.1c0,0,0,0,0,0 c0.4,0,0.8,0.1,1.2,0.2c0,0,0,0,0,0c0.4,0.1,0.7,0.1,1.1,0.2c0,0,0,0,0,0c0.4,0.1,0.7,0.1,1,0.2c0,0,0,0,0,0 c0.3,0.1,0.6,0.1,1,0.2c0,0,0,0,0.1,0c0.3,0.1,0.6,0.2,0.9,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.6,0.2,0.8,0.3c0,0,0.1,0,0.1,0 c0.3,0.1,0.5,0.2,0.7,0.3c0,0,0.1,0,0.1,0c0.2,0.1,0.5,0.2,0.7,0.3c0,0,0.1,0,0.1,0.1c0.2,0.1,0.4,0.2,0.6,0.3 c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.3c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.1,0.1,0.2,0.2 c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.1,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.2 c0.2,0.2,0.4,0.4,0.5,0.6c0.3,0.3,1.6,2,2.3,5c0.9,3.6,0.7,7.3,1.5,10.9c0.1,0.6,0.3,1.2,0.4,1.8c0,0.2,0.1,0.3,0.1,0.5 c0.1,0.4,0.2,0.9,0.4,1.3c0,0.1,0.1,0.3,0.1,0.4c4.2,13.6,12.6,20,23.9,28.6c0.4-2.4,0.6-4.9,0.6-7.4c0-2.9-0.3-5.7-0.8-8.4v0 c0-0.1,0-0.2-0.1-0.3c0,0,0,0,0,0c-0.3-1.3-0.6-2.7-0.9-4c0-0.1,0-0.1-0.1-0.2c0,0,0,0,0,0c-0.2-0.6-0.4-1.2-0.6-1.9 c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-0.4-1.3-0.9-2.5-1.5-3.8c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-0.3-0.6-0.5-1.2-0.8-1.8c0,0,0,0,0,0 c0,0,0,0,0,0c-0.3-0.6-0.6-1.2-0.9-1.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.3-0.6-0.7-1.2-1-1.8c0,0,0,0,0,0c0,0,0,0,0,0 c-0.3-0.5-0.7-1.1-1-1.6c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c0,0,0,0,0,0c-0.7-1.1-1.5-2.1-2.3-3.2c0-0.1-0.1-0.1-0.1-0.2 c0,0,0,0,0,0c-0.4-0.5-0.9-1.1-1.3-1.6c0,0,0,0,0,0c-0.4-0.5-0.9-1-1.3-1.5c0,0,0,0-0.1-0.1c0,0,0,0,0,0c-0.4-0.4-0.8-0.9-1.3-1.3 c0,0,0,0,0,0C79.1,13.1,79.1,13,79,13c0,0,0,0,0,0c-0.4-0.4-0.9-0.8-1.3-1.2c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0 c-0.5-0.4-0.9-0.8-1.4-1.2l0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-0.5-0.4-1-0.8-1.6-1.2c0,0,0,0,0,0c0,0,0,0,0,0 c-0.5-0.4-1.1-0.8-1.6-1.1c0,0,0,0,0,0c0,0,0,0,0,0c-1.1-0.7-2.2-1.4-3.4-2.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1 c-0.6-0.3-1.1-0.6-1.7-0.9h0c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-1.2-0.6-2.4-1.1-3.6-1.6c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0 c-0.6-0.2-1.3-0.5-1.9-0.7c0,0,0,0,0,0l0,0c-0.6-0.2-1.2-0.4-1.8-0.6c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.7-0.2-1.3-0.4-2-0.5 c0,0,0,0,0,0l0,0c-0.6-0.1-1.3-0.3-1.9-0.4c0,0-0.1,0-0.1,0c0,0,0,0,0,0c-0.7-0.1-1.4-0.2-2-0.3c0,0,0,0,0,0c0,0,0,0,0,0 C52.2,0.4,51.1,0.3,50,0.2L50,0.2z M50.5,0.3C50.5,0.3,50.5,0.3,50.5,0.3C50.5,0.3,50.5,0.3,50.5,0.3L50.5,0.3z"
})), /*#__PURE__*/react["createElement"]("path", {
  className: "st0",
  d: "M93.1,40.3c-1.7-3.8-1.7-3.8-45.9-19.8C24.8,12.5,20.7,4.7,36.8,1.2c0.8-0.2,1.6-0.3,2.4-0.5 c2.5-0.4,5-0.6,7.6-0.6C70.4,0.1,89.9,17.6,93.1,40.3"
}));

function SvgLuna(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = luna_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", luna_extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 93.5 93.5",
    style: {
      enableBackground: "new 0 0 93.5 93.5"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, luna_ref2, luna_ref3);
}

var luna_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgLuna);
/* harmony default export */ var luna = (__webpack_require__.p + "static/media/luna.5dd206ad.svg");

// CONCATENATED MODULE: ./src/tokens.tsx
var etherscan=function etherscan(txHash){return"https://kovan.etherscan.io/tx/".concat(txHash);};var ERC20=function ERC20(address){return{type:"ERC20",address:address};};var Tokens=Object(immutable_es["b" /* OrderedMap */])().set("BTC",{name:"BTC",explorer:function explorer(txHash){return"https://chain.so/tx/BTCTEST/".concat(txHash);},icon:btc_ForwardRef,showAddress:true}).set("ZEC",{name:"ZEC",explorer:function explorer(txHash){return"https://chain.so/tx/ZECTEST/".concat(txHash);},icon:zec_ForwardRef,showAddress:true}).set("BCH",{name:"BCH",explorer:function explorer(txHash){return"https://explorer.bitcoin.com/tbch/tx/".concat(txHash);},icon:ForwardRef,showAddress:true}).set("FIL",{name:"FIL",explorer:function explorer(txHash){return"https://filfox.info/en/message/".concat(txHash);},icon:function icon(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])("img",Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},props),{},{role:"presentation",alt:"",src:fil}));},showAddress:true}).set("LUNA",{name:"LUNA",explorer:function explorer(txHash){return"https://finder.terra.money/tequila-0004/tx/".concat(txHash);},icon:luna_ForwardRef,showAddress:true}).set("ETH",{name:"ETH",explorer:etherscan,icon:eth_ForwardRef,showAddress:true}).set("REN",{name:"REN",sendCrypto:ERC20("0x2CD647668494c1B15743AB283A0f980d90a87394"),explorer:etherscan,icon:ren_ForwardRef}).set("DAI",{name:"DAI",sendCrypto:ERC20("0xC4375B7De8af5a38a93548eb8453a498222C4fF2"),explorer:etherscan,icon:dai_ForwardRef}).set("testBTC",{name:"testBTC",sendCrypto:ERC20("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"),explorer:etherscan,icon:renBTC_ForwardRef}).set("testBCH",{name:"testBCH",sendCrypto:ERC20("0x618dC53e856b1A601119F2Fed5F1E873bCf7Bd6e"),explorer:etherscan,icon:renBCH_ForwardRef}).set("testZEC",{name:"testZEC",sendCrypto:ERC20("0x42805DA220DF1f8a33C16B0DF9CE876B9d416610"),explorer:etherscan,icon:renZEC_ForwardRef});
// CONCATENATED MODULE: ./src/components/Addresses.tsx
var _require=__webpack_require__(898),version=_require.version;var TokensForAddressBox=Tokens.filter(function(tokenDetails){return tokenDetails.showAddress;});var Addresses_Addresses=function Addresses(_ref){var cryptoAccount=_ref.cryptoAccount;var _React$useState=react_default.a.useState(Object(immutable_es["b" /* OrderedMap */])()),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),addresses=_React$useState2[0],setAddresses=_React$useState2[1];react_default.a.useEffect(function(){Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:TokensForAddressBox.forEach(function(token){getAddress(cryptoAccount,token).then(function(address){setAddresses(function(currentAddresses){return currentAddresses.set(token.name,address);});}).catch(console.error);});case 1:case"end":return _context.stop();}}},_callee);}))().catch(console.error);// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);var _React$useState3=react_default.a.useState(false),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),showingAddresses=_React$useState4[0],setShowingAddresses=_React$useState4[1];var toggleAddresses=react_default.a.useCallback(function(){setShowingAddresses(!showingAddresses);},[showingAddresses]);return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"show-addresses ".concat(showingAddresses?"showing-addresses":""),children:showingAddresses?/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:{position:"absolute",top:"20px",right:"20px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"hide-addresses",onClick:toggleAddresses,children:"\u2715"}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:["Version ",version]}),TokensForAddressBox.map(function(token){return/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[token.name," address:"]})," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:addresses.get(token.name)||""})]},token.name);}).valueSeq()]}):/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{onClick:toggleAddresses,role:"button",className:"show-addresses-button",style:{cursor:"pointer",position:"absolute",top:"20px",right:"20px"},children:"Show addresses"})});};
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.browser.esm.js + 40 modules
var react_select_browser_esm = __webpack_require__(396);

// CONCATENATED MODULE: ./src/components/selectToken/Select.tsx
var Select_CustomValue=function CustomValue(props){var className=props.className,cx=props.cx,isDisabled=props.isDisabled,innerProps=props.innerProps,propChildren=props.children;var option=props.data;var children=/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/react_default.a.createElement(option.image),propChildren]});return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({// tslint:disable-next-line: no-any
className:cx({"single-value":true,"single-value--is-disabled":isDisabled},className+" Select--currency__value")},innerProps),{},{children:children}));};var Select_CustomOption=function CustomOption(props){var children=props.children,className=props.className,cx=props.cx,isDisabled=props.isDisabled,isFocused=props.isFocused,isSelected=props.isSelected,innerRef=props.innerRef,innerProps=props.innerProps;var option=props.data;return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({ref:innerRef,className:[// tslint:disable-next-line: no-any
cx({option:true,"option--is-disabled":isDisabled||option.disabled,"option--is-focused":isFocused,"option--is-selected":isSelected},className),isSelected?"Select--currency__option--selected":""].join(" "),style:option.disabled?{opacity:0.5,cursor:"not-allowed"}:{}},innerProps),{},{children:[/*#__PURE__*/react_default.a.createElement(option.image),children,/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:"option-balance",children:["(",option.balance.decimalPlaces(5).toString()," ",option.value,")"]})]}));};
// EXTERNAL MODULE: ./src/components/selectToken/styles.scss
var selectToken_styles = __webpack_require__(899);

// CONCATENATED MODULE: ./src/components/selectToken/SelectToken.tsx
/**
 * SelectToken allows the user to select a market from two token dropdowns
 */var SelectToken_SelectToken=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(SelectToken,_React$Component);var _super=Object(createSuper["a" /* default */])(SelectToken);function SelectToken(){var _this;Object(classCallCheck["a" /* default */])(this,SelectToken);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.handleChange=function(event){var newToken=event.value;_this.props.onChange(newToken);};return _this;}Object(createClass["a" /* default */])(SelectToken,[{key:"render",/**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */value:function render(){// Retrieve the order inputs from the store.
var _this$props=this.props,token=_this$props.token,allTokens=_this$props.allTokens,disabled=_this$props.disabled;var customStyles={// tslint:disable-next-line: no-any
option:function option(provided,state){return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},provided),{},{backgroundColor:state.isSelected?"rgba(0, 27, 58, 0.1)":"transparent","&:hover":{backgroundColor:"rgba(219, 224, 232, 0.3)"}});}};var tokens=allTokens.valueSeq().toArray();return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_select_browser_esm["a" /* default */],{className:"Select--currency",classNamePrefix:"Select--currency",name:"quoteCode",value:tokens.find(function(option){return option.value===token;})||null,onChange:this.handleChange,options:tokens,components:{SingleValue:Select_CustomValue,Option:Select_CustomOption},isClearable:false,backspaceRemovesValue:false,styles:customStyles,placeholder:"",isDisabled:disabled});}// tslint:disable-next-line:no-any
}]);return SelectToken;}(react_default.a.Component);
// CONCATENATED MODULE: ./src/components/Faucet.tsx
var MessageType;(function(MessageType){MessageType["ERROR"]="error";MessageType["INFO"]="info";})(MessageType||(MessageType={}));var Faucet_Faucet=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(Faucet,_React$Component);var _super=Object(createSuper["a" /* default */])(Faucet);function Faucet(props,context){var _this;Object(classCallCheck["a" /* default */])(this,Faucet);_this=_super.call(this,props,context);_this.timeout=void 0;_this.showAddresses=function(){_this.setState({showingAddresses:true});};_this.addMessage=function(msg){var messages=_this.state.messages;_this.setState({messages:messages.push(msg)});};_this.handleSelect=function(selectedToken){// Reset messages.
if(selectedToken!==_this.state.selectedToken){_this.setState({messages:Object(immutable_es["a" /* List */])()});}_this.setState({selectedToken:selectedToken});};_this.handleInput=function(event){var element=event.target;_this.setState(function(state){return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},state),{},Object(defineProperty["a" /* default */])({},element.name,element.value));});};_this.handleFaucet=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(event){var _this$state,recipient,params,memo,cryptoAccount,selectedToken,value,submitting,tokenDetails;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:event.preventDefault();_this$state=_this.state,recipient=_this$state.recipient,params=_this$state.params,memo=_this$state.memo,cryptoAccount=_this$state.cryptoAccount,selectedToken=_this$state.selectedToken,value=_this$state.value,submitting=_this$state.submitting;if(!(!selectedToken||recipient===""||value===""||submitting)){_context.next=4;break;}return _context.abrupt("return");case 4:_this.setState({submitting:true,messages:Object(immutable_es["a" /* List */])()});tokenDetails=Tokens.get(selectedToken);if(tokenDetails){_context.next=8;break;}throw new Error("Unable to find token details for ".concat(selectedToken));case 8:_context.prev=8;_context.next=11;return sendTokens(cryptoAccount,tokenDetails,recipient,value,params,memo,_this.addMessage);case 11:_context.next=17;break;case 13:_context.prev=13;_context.t0=_context["catch"](8);console.error(_context.t0);_this.addMessage({key:"general",type:MessageType.ERROR,message:/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:extractError(_context.t0)})});case 17:_this.setState({submitting:false});case 18:case"end":return _context.stop();}}},_callee,null,[[8,13]]);}));return function(_x){return _ref.apply(this,arguments);};}();_this.state={recipient:"",params:"",memo:"",value:"",selectedToken:undefined,messages:Object(immutable_es["a" /* List */])(),balances:Object(immutable_es["b" /* OrderedMap */])(),balancesLoading:true,cryptoAccount:new build_module["a" /* default */](props.privateKey,{network:"kovan",apiAddress:Object({"NODE_ENV":"production","PUBLIC_URL":".","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true,"REACT_APP_ETHEREUM_NODE":"https://kovan.infura.io/v3/559202b84d4b4ccb8242da5003c2f14f","REACT_APP_PRIVATE_KEY_CIPHER":"U2FsdGVkX19fFBlwrNL7Yl8IIQODJv8T1eOtA9usy0lKffhxGkBh76PdesASRMbyvKcOIFHiUZB423JlMyf53Xr4CdEiCWjuimoDkqkoc8qF6AH/kBJMybDTu5QUDhBD"}).REACT_APP_FILECOIN_TESTNET_URL,terra:{URL:"https://tequila-lcd.terra.dev"}}),submitting:false,showingAddresses:false};return _this;}Object(createClass["a" /* default */])(Faucet,[{key:"componentDidMount",value:function(){var _componentDidMount=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){var _this2=this;var cryptoAccount,loop;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:cryptoAccount=this.state.cryptoAccount;loop=/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this2.setState({balancesLoading:true});_context3.next=3;return Promise.all(Tokens.map(/*#__PURE__*/function(){var _ref3=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(tokenDetails){var balance;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return balanceOf(cryptoAccount,tokenDetails);case 3:balance=_context2.sent;_this2.setState(function(state){return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},state),{},{balances:state.balances.set(tokenDetails.name,balance)});});_context2.next=10;break;case 7:_context2.prev=7;_context2.t0=_context2["catch"](0);console.error(_context2.t0);case 10:case"end":return _context2.stop();}}},_callee2,null,[[0,7]]);}));return function(_x2){return _ref3.apply(this,arguments);};}()));case 3:_this2.setState({balancesLoading:false});if(_this2.timeout){clearTimeout(_this2.timeout);}_this2.timeout=setTimeout(loop,30*1000);case 6:case"end":return _context3.stop();}}},_callee3);}));return function loop(){return _ref2.apply(this,arguments);};}();loop().catch(console.error);case 3:case"end":return _context4.stop();}}},_callee4,this);}));function componentDidMount(){return _componentDidMount.apply(this,arguments);}return componentDidMount;}()},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.timeout){clearTimeout(this.timeout);}}},{key:"render",value:function render(){var _this$state2=this.state,recipient=_this$state2.recipient,params=_this$state2.params,memo=_this$state2.memo,messages=_this$state2.messages,balances=_this$state2.balances,submitting=_this$state2.submitting,cryptoAccount=_this$state2.cryptoAccount;return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Addresses_Addresses,{cryptoAccount:cryptoAccount}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("form",{className:"big-text",onSubmit:this.handleFaucet,children:["I want to receive",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{disabled:submitting,className:"dashed input",name:"value",onChange:this.handleInput})," ",/*#__PURE__*/Object(jsx_runtime["jsx"])(SelectToken_SelectToken,{token:this.state.selectedToken,allTokens:Tokens.map(function(tokenDetails,name){return{label:tokenDetails.name,image:tokenDetails.icon||function(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{role:"presentation",alt:""});},value:name,disabled:tokenDetails.disabled,balance:balances.get(tokenDetails.name,new bignumber_default.a(0))};}),onChange:this.handleSelect,disabled:submitting}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),"at the address",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(AutosizeInput_default.a,{disabled:submitting,className:"input dashed-address",value:recipient,name:"recipient",onChange:this.handleInput}),this.state.selectedToken==="FIL"?/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),"with params",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(AutosizeInput_default.a,{disabled:submitting,className:"input dashed-address",value:params,name:"params",onChange:this.handleInput,placeholder:"base64 (optional)"})]}):null,this.state.selectedToken==="LUNA"?/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),"with memo",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(AutosizeInput_default.a,{disabled:submitting,className:"input dashed-address",value:memo,name:"memo",onChange:this.handleInput,placeholder:"(optional)"})]}):null,/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{disabled:submitting,type:"submit",style:{position:"absolute",left:"-9999px"}}),messages.map(function(msg){if(!msg){return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{});}return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"message message-".concat(msg.type),children:msg.message},msg.key);})]})]});}}]);return Faucet;}(react_default.a.Component);/* harmony default export */ var components_Faucet = (Faucet_Faucet);
// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__(205);
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);

// CONCATENATED MODULE: ./src/components/Loading.tsx
/**
 * Loading is a visual component that renders a spinning animation
 */var Loading_Loading=function Loading(_ref){var alt=_ref.alt;return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"loading lds-dual-ring ".concat(alt?"alt":"")});};
// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/components/Lock.svg
function Lock_extends() { Lock_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Lock_extends.apply(this, arguments); }

function Lock_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Lock_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Lock_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Lock_ref2 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "155.47 168.67 214.45 134.76 222.41 148.47 439.74 23 423.96 13.86 407.89 4.57 399.93 0 45.63 204.64 45.63 213.78 147.51 154.96 155.47 168.67"
});

var Lock_ref3 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "155.47 297.53 325.91 199.04 333.87 212.9 551.2 87.43 535.27 78.14 519.5 69 511.54 64.43 45.63 333.36 45.63 342.5 147.37 283.67 155.47 297.53"
});

var Lock_ref4 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "155.47 361.96 381.64 231.33 389.61 245.04 607.08 119.42 591.15 110.43 575.23 101.14 567.12 96.57 45.63 397.64 45.63 406.93 147.37 348.1 155.47 361.96"
});

var Lock_ref5 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "155.47 426.24 438.85 262.59 446.96 276.3 662.81 151.71 646.74 142.43 630.82 133.28 622.85 128.71 45.63 462.07 45.63 471.21 147.37 412.38 155.47 426.24"
});

var Lock_ref6 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "155.47 490.53 494.58 294.73 502.54 308.59 718.39 183.86 702.47 174.71 686.69 165.43 678.73 160.85 45.63 526.36 45.63 535.5 147.37 476.81 155.47 490.53"
});

var _ref7 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "742.42 197.72 734.46 193 45.63 590.78 45.63 599.93 147.37 541.25 155.47 554.96 494.58 359.16 502.54 372.87 754.37 227.65 754.37 209.22 754.37 204.64 742.42 197.72"
});

var _ref8 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "89.42 639 146.48 606.12 154.44 619.83 493.11 424.33 501.07 438.19 754.37 291.93 754.37 273.5 754.37 255.07 754.37 245.93 81.46 634.43 89.42 639"
});

var _ref9 = /*#__PURE__*/react["createElement"]("polyline", {
  points: "493.11 488.76 501.07 502.62 754.37 356.36 754.37 337.93 754.37 319.5 754.37 310.36 137.19 666.57 145.15 671.14 203.24 637.67 211.06 651.53"
});

var _ref10 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "200.88 703.43 258.98 669.81 266.94 683.67 493.11 553.04 501.07 566.9 754.37 420.64 754.37 402.21 754.37 383.93 754.37 374.64 192.92 698.71 200.88 703.43"
});

var _ref11 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "256.62 735.57 314.71 702.1 322.67 715.81 493.11 617.47 501.07 631.18 754.37 484.92 754.37 466.64 754.37 448.21 754.37 439.07 248.66 731 256.62 735.57"
});

var _ref12 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "304.39 763.14 312.35 767.71 370.44 734.24 378.25 748.1 493.11 681.75 501.07 695.61 754.37 549.36 754.37 530.92 754.37 512.5 754.37 503.35 304.39 763.14"
});

var _ref13 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "368.08 800 426.17 766.38 434.13 780.24 493.11 746.04 501.07 759.9 754.37 613.78 754.37 595.36 754.37 576.93 754.37 567.78 360.12 795.43 368.08 800"
});

var _ref14 = /*#__PURE__*/react["createElement"]("polygon", {
  points: "495.61 55.14 479.54 46 479.54 46 463.62 36.86 455.66 32.14 45.63 268.93 45.63 278.07 147.37 219.39 155.47 233.1 270.18 166.9 278.14 180.76 495.61 55.14"
});

function SvgLock(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = Lock_objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", Lock_extends({
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 800 800",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, "Lock Icon") : title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, Lock_ref2, Lock_ref3, Lock_ref4, Lock_ref5, Lock_ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14);
}

var Lock_ForwardRef = /*#__PURE__*/react["forwardRef"](SvgLock);
/* harmony default export */ var Lock = (__webpack_require__.p + "static/media/Lock.5ed81c30.svg");

// CONCATENATED MODULE: ./src/components/Unlock.tsx
// Private key encrypted using AES
var cipher="U2FsdGVkX19fFBlwrNL7Yl8IIQODJv8T1eOtA9usy0lKffhxGkBh76PdesASRMbyvKcOIFHiUZB423JlMyf53Xr4CdEiCWjuimoDkqkoc8qF6AH/kBJMybDTu5QUDhBD"||false;var Unlock_Unlock=function Unlock(_ref){var unlockCallback=_ref.unlockCallback;var _React$useState=react_default.a.useState(""),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),password=_React$useState2[0],setPassword=_React$useState2[1];var _React$useState3=react_default.a.useState(null),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),error=_React$useState4[0],setError=_React$useState4[1];var _React$useState5=react_default.a.useState(false),_React$useState6=Object(slicedToArray["a" /* default */])(_React$useState5,2),loading=_React$useState6[0],setLoading=_React$useState6[1];var updatePassword=function updatePassword(event){var element=event.target;setPassword(element.value);};var checkPassword=react_default.a.useCallback(/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(passwordToCheck){var originalPassword,passwordHash,i,privateKey;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:originalPassword=passwordToCheck;passwordHash=passwordToCheck;// This doesn't improve the encryption security, but slows down password
// attempts in the front-end.
for(i=0;i<100000;i++){passwordHash=Object(crypto_js["SHA256"])(passwordHash);}passwordHash=passwordHash.toString();// Decrypt
_context.prev=4;privateKey=crypto_js["AES"].decrypt(cipher.toString(),passwordHash).toString(crypto_js["enc"].Utf8);if(!(privateKey==="")){_context.next=8;break;}throw new Error("Access Denied");case 8:console.log("privateKey",privateKey);_context.next=16;break;case 11:_context.prev=11;_context.t0=_context["catch"](4);console.error(_context.t0);setError("Access Denied");return _context.abrupt("return");case 16:localforage_default.a.setItem("faucet-password",originalPassword).catch(console.error);if(!unlockCallback){_context.next=21;break;}unlockCallback(privateKey);_context.next=22;break;case 21:return _context.abrupt("return");case 22:case"end":return _context.stop();}}},_callee,null,[[4,11]]);}));return function(_x){return _ref2.apply(this,arguments);};}(),[unlockCallback]);var handleUnlock=react_default.a.useCallback(function(passwordParam){setLoading(true);setError(null);setTimeout(function(){checkPassword(passwordParam||password).then(function(){setLoading(false);}).catch(function(err){console.error(err);setLoading(false);});},100);},[password,checkPassword]);var handleUnlockForm=react_default.a.useCallback(function(event){event.preventDefault();handleUnlock();},[handleUnlock]);react_default.a.useEffect(function(){Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var storedPassword;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return localforage_default.a.getItem("faucet-password");case 2:storedPassword=_context2.sent;if(storedPassword){setPassword(storedPassword);handleUnlock(storedPassword);}case 4:case"end":return _context2.stop();}}},_callee2);}))().catch(console.error);// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"Unlock",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Lock_ForwardRef,{className:"logo"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("form",{onSubmit:handleUnlockForm,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{className:"password",placeholder:"Password",type:"password",value:password,name:"password",onChange:updatePassword})})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"Unlock--after",children:[loading?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"error",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Loading_Loading,{})}):null,error!==null?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"error",children:error}):null]})]});};/* harmony default export */ var components_Unlock = (Unlock_Unlock);
// CONCATENATED MODULE: ./src/components/App.tsx
var App_App=function App(){var _React$useState=react_default.a.useState(null),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),privateKey=_React$useState2[0],setPrivateKey=_React$useState2[1];return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"app",children:privateKey===null?/*#__PURE__*/Object(jsx_runtime["jsx"])(components_Unlock,{unlockCallback:setPrivateKey}):/*#__PURE__*/Object(jsx_runtime["jsx"])(components_Faucet,{privateKey:privateKey})});};/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./src/components/ErrorBoundary.tsx
var ErrorBoundary_ErrorBoundary=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(ErrorBoundary,_React$Component);var _super=Object(createSuper["a" /* default */])(ErrorBoundary);function ErrorBoundary(props){var _this;Object(classCallCheck["a" /* default */])(this,ErrorBoundary);_this=_super.call(this,props);_this.componentDidCatch=function(error,errorInfo){_this.setState({error:error,errorInfo:errorInfo});};_this.state={error:null,errorInfo:null};return _this;}Object(createClass["a" /* default */])(ErrorBoundary,[{key:"render",/**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */value:function render(){if(this.state.errorInfo){// Error path
return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h2",{children:"Something went wrong."}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),this.state.errorInfo.componentStack]})]});}// Normally, just render children
return this.props.children;}}]);return ErrorBoundary;}(react_default.a.Component);// tslint:disable-next-line: variable-name
var ErrorBoundary_catch_=function _catch_(children){return/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorBoundary_ErrorBoundary,{children:children});};
// CONCATENATED MODULE: ./src/index.tsx
react_dom_default.a.render(ErrorBoundary_catch_(/*#__PURE__*/Object(jsx_runtime["jsx"])(components_App,{})),document.getElementById("root"));

/***/ })

},[[938,1,2]]]);
//# sourceMappingURL=main.df6e2a8e.chunk.js.map
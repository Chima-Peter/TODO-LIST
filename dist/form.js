/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/form.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #f3f4f6;
  box-sizing: border-box;
  padding: 20px 150px;
  font-family: 'Poppins', sans-serif;
}
.main-div {
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 1px 2px 23px 4px rgba(209,213,219,0.74);
  -webkit-box-shadow: 1px 2px 23px 4px rgba(209,213,219,0.74);
  -moz-box-shadow: 1px 2px 23px 4px rgba(209,213,219,0.74);
  border: 1px solid white;
  border-radius: 20px;
  height: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 40px 30px;
  justify-content: space-evenly;
}
.main-div > div {
  width: 50%;
  flex: auto;
}
.div1 {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.div1-1-1 div, .div1-1-2 div {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
  background-color: #cbd5e1;
}
.div1-1, .div1-3 {
  display: flex;
  gap: 70px;
  width: 100%;
  flex-direction: column;
}
.div1-1-1, .div1-1-2 {
  display: flex;
  justify-content: space-evenly;
}
.div1-2 {
  text-align: center;
}
.div1-2 h3 {
  font-size: 1.3rem;
  padding: 0;
  font-weight: bolder;
  margin: 0;
}
.div1-2 span, .div2 h1 span {
  color: #0ea5e9;
}
.div1-2 h1 {
  font-size: 2.5rem;
  padding: 0;
  width: 100%;
  margin: 0 0 40px 0;
  font-weight: bolder;
}
.round {
  width: 30px;
  height: 30px;
  margin: 0 0 0 5px ;
  border: 1px solid #0ea5e9;
  border-radius:  50%;
  background-color: #0ea5e9;
  display: inline-block;
}

.div2 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}
.div2 h1 {
  font-size: 2.5rem;
  font-weight: bolder;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
label {
  display: flex;
  flex-direction: column;
}
label > span {
  align-self: center;
  font-size: 0.7rem;
  color: red;
}
input {
  width: 40ch;
  appearance: none;
  padding: 15px;
  border-radius: 30px;
  outline: none;
  box-sizing: border-box;
  font-size: 1rem;
  text-overflow: ellipsis;
  border: 1px solid #cbd5e1;
}
input[type='text'] {
  font-weight: bolder;
  text-transform: capitalize;
}
input::placeholder {
  font-size: 0.8rem;
  text-transform: none;
font-weight: lighter;
}
input:focus {
  border: 1px solid blue;
}
input:hover {
  border: 1px solid blue;
}
#valid {
  border: 1px solid #cbd5e1;
}
#invalid {
  border: 1px dashed red;
}
button {
  width: fit-content;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  background-color: black;
}
button:hover {
  background-color: white;
  color: black;
}








@media only screen and (max-width: 600px) {
  body {
    padding: 20px 40px;
  }
  .main-div {
    flex-direction: column;
    align-items: normal;
    justify-content: normal;
  }
  .main-div > div {
    width: 100%;
    height: 100%;
  }
  .div1 {
    display: none;
  }
  .div2 {
    align-items: center;
    width: 100%;
  }
  .div2 h1 {
    font-size: 2.5rem;
  }
  input {
    width: 100%;
    padding: 3px 10px;
  }
}




@media only screen and (min-width: 600px) and (max-width: 1100px) {
  body {
    padding: 20px;
  }
  .main-div {
    flex-direction: column;
    align-items: normal;
    justify-content: normal;
  }
  .main-div > div {
    width: 100%;
    height: 100%;
  }
  .div1-1, .div1-2 {
    display: none;
  }
  .div2 {
    width: 100%;
    align-items: center;
  }
  .div2 h1 {
    font-size: 3rem;
  }
  input {
    width: 45ch;
    padding: 12px;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/form.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,kCAAkC;AACpC;AACA;EACE,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,mDAAmD;EACnD,2DAA2D;EAC3D,wDAAwD;EACxD,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,UAAU;EACV,UAAU;AACZ;AACA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,SAAS;EACT,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;AACZ;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,uBAAuB;EACvB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,iBAAiB;EACjB,oBAAoB;AACtB,oBAAoB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,kCAAkC;EAClC,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,YAAY;AACd;;;;;;;;;AASA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,mBAAmB;IACnB,WAAW;EACb;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,iBAAiB;EACnB;AACF;;;;;AAKA;EACE;IACE,aAAa;EACf;EACA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;IACX,aAAa;EACf;AACF","sourcesContent":["body {\r\n  background-color: #f3f4f6;\r\n  box-sizing: border-box;\r\n  padding: 20px 150px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n.main-div {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  background-color: white;\r\n  box-shadow: 1px 2px 23px 4px rgba(209,213,219,0.74);\r\n  -webkit-box-shadow: 1px 2px 23px 4px rgba(209,213,219,0.74);\r\n  -moz-box-shadow: 1px 2px 23px 4px rgba(209,213,219,0.74);\r\n  border: 1px solid white;\r\n  border-radius: 20px;\r\n  height: fit-content;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  padding: 40px 30px;\r\n  justify-content: space-evenly;\r\n}\r\n.main-div > div {\r\n  width: 50%;\r\n  flex: auto;\r\n}\r\n.div1 {\r\n  display: flex;\r\n  gap: 20px;\r\n  flex-direction: column;\r\n}\r\n.div1-1-1 div, .div1-1-2 div {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  border: 1px solid #cbd5e1;\r\n  background-color: #cbd5e1;\r\n}\r\n.div1-1, .div1-3 {\r\n  display: flex;\r\n  gap: 70px;\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n.div1-1-1, .div1-1-2 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n.div1-2 {\r\n  text-align: center;\r\n}\r\n.div1-2 h3 {\r\n  font-size: 1.3rem;\r\n  padding: 0;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n}\r\n.div1-2 span, .div2 h1 span {\r\n  color: #0ea5e9;\r\n}\r\n.div1-2 h1 {\r\n  font-size: 2.5rem;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: 0 0 40px 0;\r\n  font-weight: bolder;\r\n}\r\n.round {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 0 0 5px ;\r\n  border: 1px solid #0ea5e9;\r\n  border-radius:  50%;\r\n  background-color: #0ea5e9;\r\n  display: inline-block;\r\n}\r\n\r\n.div2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.div2 h1 {\r\n  font-size: 2.5rem;\r\n  font-weight: bolder;\r\n}\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  align-items: center;\r\n}\r\nlabel {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nlabel > span {\r\n  align-self: center;\r\n  font-size: 0.7rem;\r\n  color: red;\r\n}\r\ninput {\r\n  width: 40ch;\r\n  appearance: none;\r\n  padding: 15px;\r\n  border-radius: 30px;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  font-size: 1rem;\r\n  text-overflow: ellipsis;\r\n  border: 1px solid #cbd5e1;\r\n}\r\ninput[type='text'] {\r\n  font-weight: bolder;\r\n  text-transform: capitalize;\r\n}\r\ninput::placeholder {\r\n  font-size: 0.8rem;\r\n  text-transform: none;\r\nfont-weight: lighter;\r\n}\r\ninput:focus {\r\n  border: 1px solid blue;\r\n}\r\ninput:hover {\r\n  border: 1px solid blue;\r\n}\r\n#valid {\r\n  border: 1px solid #cbd5e1;\r\n}\r\n#invalid {\r\n  border: 1px dashed red;\r\n}\r\nbutton {\r\n  width: fit-content;\r\n  letter-spacing: 2px;\r\n  padding: 10px 20px;\r\n  border-radius: 20px;\r\n  font-family: 'Poppins', sans-serif;\r\n  border: 1px solid black;\r\n  color: white;\r\n  cursor: pointer;\r\n  background-color: black;\r\n}\r\nbutton:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n  body {\r\n    padding: 20px 40px;\r\n  }\r\n  .main-div {\r\n    flex-direction: column;\r\n    align-items: normal;\r\n    justify-content: normal;\r\n  }\r\n  .main-div > div {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .div1 {\r\n    display: none;\r\n  }\r\n  .div2 {\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n  .div2 h1 {\r\n    font-size: 2.5rem;\r\n  }\r\n  input {\r\n    width: 100%;\r\n    padding: 3px 10px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 1100px) {\r\n  body {\r\n    padding: 20px;\r\n  }\r\n  .main-div {\r\n    flex-direction: column;\r\n    align-items: normal;\r\n    justify-content: normal;\r\n  }\r\n  .main-div > div {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .div1-1, .div1-2 {\r\n    display: none;\r\n  }\r\n  .div2 {\r\n    width: 100%;\r\n    align-items: center;\r\n  }\r\n  .div2 h1 {\r\n    font-size: 3rem;\r\n  }\r\n  input {\r\n    width: 45ch;\r\n    padding: 12px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/form.css":
/*!**************************!*\
  !*** ./src/css/form.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/form.css */ "./src/css/form.css");


const Form = (function () {
  const form = document.querySelector('form');
  const fname = document.querySelector('#fname');
  const lname = document.querySelector('#lname');
  const email = document.querySelector('#email');
  const ferror = document.querySelector('#ferror');
  const lerror = document.querySelector('#lerror');
  const error = document.querySelector('#error');
  const nameRegExp = /^[a-zA-Z]+$/;

  const welcome = () => {
    document.addEventListener("DOMContentLoaded", () => {
      fname.textContent = '';
    lname.textContent = '';
      email.textContent = '';

  fname.addEventListener('input', () => {
    if ((fname.value.length !== 0) && (!checkNameRegExp(fname))) {
      fname.id = 'invalid';
      ferror.textContent = 'First name field should contain only alphabets - not spaces, special characters or digits.'
    } else if (fname.validity.valid) {
      fname.id = "valid";
      ferror.textContent = "";
    } else {
      checkFnError();
    };
  });
  lname.addEventListener('input', () => {
    if ((lname.value.length !== 0) && (!checkNameRegExp(lname))) {
      lname.id = 'invalid';
      lerror.textContent = 'Last name field should contain only alphabets - not spaces, special characters or digits.'
    } else if (lname.validity.valid) {
      lname.id = "valid";
      lerror.textContent = "";
    } else {
      checkLnError();
    };
  });
  email.addEventListener('input', () => {
    if (email.validity.valid) {
      email.id = "valid";
      error.textContent = "";
    } else {
      checkEmailError();
    };
  });
  form.addEventListener('submit', (event) => {
    if (!fname.validity.valid) {
      event.preventDefault();
      checkFnError();
    } else if (!email.validity.valid) {
      checkEmailError();
      event.preventDefault();
    } else if (!lname.validity.valid) {
      event.preventDefault()
      checkLnError();
    };
    saveValues();
  });
  const checkFnError = () => {
    if (fname.validity.valueMissing) {
      fname.id = 'invalid';
      ferror.textContent = 'Please fill in this field';
    } else if (fname.validity.tooShort) {
      fname.id = 'invalid';
      ferror.textContent = `This field requires at least ${fname.minLength} letters but received just ${fname.value.length}`;
    };
  };
  const checkLnError = () => {
    if (lname.validity.valueMissing) {
      lname.id = 'invalid';
      lerror.textContent = 'Please fill in this field';
    } else if (lname.validity.tooShort) {
      lname.id = 'invalid';
      lerror.textContent = `This field requires at least ${lname.minLength} letters but received just ${lname.value.length}`;
    };
  };
  const checkEmailError =  () => {
    if (email.validity.valueMissing) {
      email.id = 'invalid';
      error.textContent = 'Please fill in this field';
    } else if (email.validity.tooShort) {
      email.id = 'invalid';
      error.textContent = `This field requires at least ${email.minLength} letters but received just ${email.value.length}`;
    } else if (email.validity.typeMismatch) {
      email.id = 'invalid';
      error.textContent = "Doesn't match format of an email address";
    }
  };
  const checkNameRegExp = (name) => {
    const isValid = nameRegExp.test(name.value);
    return isValid;
  }
    });
  }
  const saveValues = () => {
    const first = fname.value;
    const second = lname.value;
    const third = email.value;
    const loginData = {'fname': first, 'lname': second, 'email': third};
    localStorage.removeItem('logins');
    localStorage.setItem('logins', JSON.stringify(loginData));
  }
  return { welcome };
})();
Form.welcome();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFB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TUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDJEQUEyRCxpQkFBaUIsNEJBQTRCLG1CQUFtQjtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSwyREFBMkQsaUJBQWlCLDRCQUE0QixtQkFBbUI7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsMERBQTBELGlCQUFpQiw0QkFBNEIsbUJBQW1CO0FBQzFILE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2Zvcm0uY3NzP2JlZGQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDIwcHggMTUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWFpbi1kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAyM3B4IDRweCByZ2JhKDIwOSwyMTMsMjE5LDAuNzQpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAyM3B4IDRweCByZ2JhKDIwOSwyMTMsMjE5LDAuNzQpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDJweCAyM3B4IDRweCByZ2JhKDIwOSwyMTMsMjE5LDAuNzQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNDBweCAzMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5tYWluLWRpdiA+IGRpdiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcbi5kaXYxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5kaXYxLTEtMSBkaXYsIC5kaXYxLTEtMiBkaXYge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xyXG59XHJcbi5kaXYxLTEsIC5kaXYxLTMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmRpdjEtMS0xLCAuZGl2MS0xLTIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmRpdjEtMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kaXYxLTIgaDMge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmRpdjEtMiBzcGFuLCAuZGl2MiBoMSBzcGFuIHtcclxuICBjb2xvcjogIzBlYTVlOTtcclxufVxyXG4uZGl2MS0yIGgxIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAwIDQwcHggMDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5yb3VuZCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogMCAwIDAgNXB4IDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGVhNWU5O1xyXG4gIGJvcmRlci1yYWRpdXM6ICA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYTVlOTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kaXYyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kaXYyIGgxIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmxhYmVsID4gc3BhbiB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA0MGNoO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxufVxyXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbn1cclxuaW5wdXQ6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbn1cclxuI3ZhbGlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG59XHJcbiNpbnZhbGlkIHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gIH1cclxuICAubWFpbi1kaXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcclxuICB9XHJcbiAgLm1haW4tZGl2ID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuZGl2MSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZGl2MiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5kaXYyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLm1haW4tZGl2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5tYWluLWRpdiA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmRpdjEtMSwgLmRpdjEtMiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZGl2MiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kaXYyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDQ1Y2g7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbURBQW1EO0VBQ25ELDJEQUEyRDtFQUMzRCx3REFBd0Q7RUFDeEQsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCLG9CQUFvQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7Ozs7Ozs7O0FBU0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0FBQ0Y7Ozs7O0FBS0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDE1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLm1haW4tZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCAyM3B4IDRweCByZ2JhKDIwOSwyMTMsMjE5LDAuNzQpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDIzcHggNHB4IHJnYmEoMjA5LDIxMywyMTksMC43NCk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDFweCAycHggMjNweCA0cHggcmdiYSgyMDksMjEzLDIxOSwwLjc0KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcbi5tYWluLWRpdiA+IGRpdiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZmxleDogYXV0bztcXHJcXG59XFxyXFxuLmRpdjEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5kaXYxLTEtMSBkaXYsIC5kaXYxLTEtMiBkaXYge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXHJcXG59XFxyXFxuLmRpdjEtMSwgLmRpdjEtMyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA3MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uZGl2MS0xLTEsIC5kaXYxLTEtMiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcbi5kaXYxLTIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGl2MS0yIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5kaXYxLTIgc3BhbiwgLmRpdjIgaDEgc3BhbiB7XFxyXFxuICBjb2xvcjogIzBlYTVlOTtcXHJcXG59XFxyXFxuLmRpdjEtMiBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDQwcHggMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcbi5yb3VuZCB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbjogMCAwIDAgNXB4IDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZWE1ZTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAgNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYTVlOTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRpdjIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uZGl2MiBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxubGFiZWwgPiBzcGFuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuaW5wdXQge1xcclxcbiAgd2lkdGg6IDQwY2g7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcbmlucHV0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcbiN2YWxpZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcclxcbn1cXHJcXG4jaW52YWxpZCB7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgfVxcclxcbiAgLm1haW4tZGl2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XFxyXFxuICB9XFxyXFxuICAubWFpbi1kaXYgPiBkaXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmRpdjEge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLmRpdjIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5kaXYyIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB9XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuICAubWFpbi1kaXYge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcXHJcXG4gIH1cXHJcXG4gIC5tYWluLWRpdiA+IGRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuZGl2MS0xLCAuZGl2MS0yIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5kaXYyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuZGl2MiBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDQ1Y2g7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL2Zvcm0uY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuICBjb25zdCBmbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmbmFtZScpO1xyXG4gIGNvbnN0IGxuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xuYW1lJyk7XHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcclxuICBjb25zdCBmZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVycm9yJyk7XHJcbiAgY29uc3QgbGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlcnJvcicpO1xyXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XHJcbiAgY29uc3QgbmFtZVJlZ0V4cCA9IC9eW2EtekEtWl0rJC87XHJcblxyXG4gIGNvbnN0IHdlbGNvbWUgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgIGZuYW1lLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBsbmFtZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBlbWFpbC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBmbmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgIGlmICgoZm5hbWUudmFsdWUubGVuZ3RoICE9PSAwKSAmJiAoIWNoZWNrTmFtZVJlZ0V4cChmbmFtZSkpKSB7XHJcbiAgICAgIGZuYW1lLmlkID0gJ2ludmFsaWQnO1xyXG4gICAgICBmZXJyb3IudGV4dENvbnRlbnQgPSAnRmlyc3QgbmFtZSBmaWVsZCBzaG91bGQgY29udGFpbiBvbmx5IGFscGhhYmV0cyAtIG5vdCBzcGFjZXMsIHNwZWNpYWwgY2hhcmFjdGVycyBvciBkaWdpdHMuJ1xyXG4gICAgfSBlbHNlIGlmIChmbmFtZS52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICBmbmFtZS5pZCA9IFwidmFsaWRcIjtcclxuICAgICAgZmVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoZWNrRm5FcnJvcigpO1xyXG4gICAgfTtcclxuICB9KTtcclxuICBsbmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgIGlmICgobG5hbWUudmFsdWUubGVuZ3RoICE9PSAwKSAmJiAoIWNoZWNrTmFtZVJlZ0V4cChsbmFtZSkpKSB7XHJcbiAgICAgIGxuYW1lLmlkID0gJ2ludmFsaWQnO1xyXG4gICAgICBsZXJyb3IudGV4dENvbnRlbnQgPSAnTGFzdCBuYW1lIGZpZWxkIHNob3VsZCBjb250YWluIG9ubHkgYWxwaGFiZXRzIC0gbm90IHNwYWNlcywgc3BlY2lhbCBjaGFyYWN0ZXJzIG9yIGRpZ2l0cy4nXHJcbiAgICB9IGVsc2UgaWYgKGxuYW1lLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIGxuYW1lLmlkID0gXCJ2YWxpZFwiO1xyXG4gICAgICBsZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hlY2tMbkVycm9yKCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIGVtYWlsLmlkID0gXCJ2YWxpZFwiO1xyXG4gICAgICBlcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGVja0VtYWlsRXJyb3IoKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZm5hbWUudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY2hlY2tGbkVycm9yKCk7XHJcbiAgICB9IGVsc2UgaWYgKCFlbWFpbC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICBjaGVja0VtYWlsRXJyb3IoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAoIWxuYW1lLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY2hlY2tMbkVycm9yKCk7XHJcbiAgICB9O1xyXG4gICAgc2F2ZVZhbHVlcygpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNoZWNrRm5FcnJvciA9ICgpID0+IHtcclxuICAgIGlmIChmbmFtZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgICAgZm5hbWUuaWQgPSAnaW52YWxpZCc7XHJcbiAgICAgIGZlcnJvci50ZXh0Q29udGVudCA9ICdQbGVhc2UgZmlsbCBpbiB0aGlzIGZpZWxkJztcclxuICAgIH0gZWxzZSBpZiAoZm5hbWUudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgICAgZm5hbWUuaWQgPSAnaW52YWxpZCc7XHJcbiAgICAgIGZlcnJvci50ZXh0Q29udGVudCA9IGBUaGlzIGZpZWxkIHJlcXVpcmVzIGF0IGxlYXN0ICR7Zm5hbWUubWluTGVuZ3RofSBsZXR0ZXJzIGJ1dCByZWNlaXZlZCBqdXN0ICR7Zm5hbWUudmFsdWUubGVuZ3RofWA7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgY29uc3QgY2hlY2tMbkVycm9yID0gKCkgPT4ge1xyXG4gICAgaWYgKGxuYW1lLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgICBsbmFtZS5pZCA9ICdpbnZhbGlkJztcclxuICAgICAgbGVycm9yLnRleHRDb250ZW50ID0gJ1BsZWFzZSBmaWxsIGluIHRoaXMgZmllbGQnO1xyXG4gICAgfSBlbHNlIGlmIChsbmFtZS52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgICBsbmFtZS5pZCA9ICdpbnZhbGlkJztcclxuICAgICAgbGVycm9yLnRleHRDb250ZW50ID0gYFRoaXMgZmllbGQgcmVxdWlyZXMgYXQgbGVhc3QgJHtsbmFtZS5taW5MZW5ndGh9IGxldHRlcnMgYnV0IHJlY2VpdmVkIGp1c3QgJHtsbmFtZS52YWx1ZS5sZW5ndGh9YDtcclxuICAgIH07XHJcbiAgfTtcclxuICBjb25zdCBjaGVja0VtYWlsRXJyb3IgPSAgKCkgPT4ge1xyXG4gICAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgICBlbWFpbC5pZCA9ICdpbnZhbGlkJztcclxuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnUGxlYXNlIGZpbGwgaW4gdGhpcyBmaWVsZCc7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICAgIGVtYWlsLmlkID0gJ2ludmFsaWQnO1xyXG4gICAgICBlcnJvci50ZXh0Q29udGVudCA9IGBUaGlzIGZpZWxkIHJlcXVpcmVzIGF0IGxlYXN0ICR7ZW1haWwubWluTGVuZ3RofSBsZXR0ZXJzIGJ1dCByZWNlaXZlZCBqdXN0ICR7ZW1haWwudmFsdWUubGVuZ3RofWA7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xyXG4gICAgICBlbWFpbC5pZCA9ICdpbnZhbGlkJztcclxuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSBcIkRvZXNuJ3QgbWF0Y2ggZm9ybWF0IG9mIGFuIGVtYWlsIGFkZHJlc3NcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNoZWNrTmFtZVJlZ0V4cCA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gbmFtZVJlZ0V4cC50ZXN0KG5hbWUudmFsdWUpO1xyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHNhdmVWYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGZuYW1lLnZhbHVlO1xyXG4gICAgY29uc3Qgc2Vjb25kID0gbG5hbWUudmFsdWU7XHJcbiAgICBjb25zdCB0aGlyZCA9IGVtYWlsLnZhbHVlO1xyXG4gICAgY29uc3QgbG9naW5EYXRhID0geydmbmFtZSc6IGZpcnN0LCAnbG5hbWUnOiBzZWNvbmQsICdlbWFpbCc6IHRoaXJkfTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dpbnMnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dpbnMnLCBKU09OLnN0cmluZ2lmeShsb2dpbkRhdGEpKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgd2VsY29tZSB9O1xyXG59KSgpO1xyXG5Gb3JtLndlbGNvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
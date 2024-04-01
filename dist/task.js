/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/task.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/task.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `body::before {
  content: "";
  /*background-image: url("../images/image-task.webp");*/
  background-color: white;
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: rotate(180deg);
}
body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  gap: 30px;
}

/* NAV FOR DESKTOP VIEW */
.nav {
  width: 15%;
  background-color: #fff;
  border-right: 1px solid #cbd5e1;
  height: 100%;
  box-sizing:border-box;
  padding: 0;
  top: 0;
  font-weight: 400;
  font-family: 'Quicksand', sans-serif;
  left: 0;
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
}

.nav {
  --sb-track-color: #232E33;
  --sb-thumb-color: #cbd5e1;
  --sb-size: 1px;
}

.nav::-webkit-scrollbar {
  width: var(--sb-size)
}

.nav::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 22px;
}

.nav::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 22px;
  
}

@supports not selector(::-webkit-scrollbar) {
  .nav {
    scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}

svg {
  height: 40px;
  width: 40px;
}

.nav > :first-child > h2 {
  font-size: 0.9rem;
  letter-spacing: 2px;
  padding: 0;
  color: black;
  margin: 0;
  text-transform: capitalize;
}
.nav > :first-child {
  display: flex;
  position: sticky;
  top: 0;
  gap: 5px;
  backdrop-filter: blur(3px);
  align-items: center;
  padding: 30px 10px 0 10px;
}
#list-drop, #tag-drop {
  font-size: 1rem;
  font-weight: bolder;
  color: black;
  display: flex;
  align-items: center;
  color: black;
  width: 80%;
  justify-content: space-between;
}
#list-drop svg, #tag-drop  svg{
  width: 20px;
  height: 20px;
  fill: black;
}
.nav > :nth-child(2), .nav > :nth-child(3) {
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
}
ul li {
  padding: 10px 0px;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
  width: 100%;
  display: flex;
  padding-left: 20px;
  align-items: flex-end;
  gap: 12px;
  font-family: 'Quicksand', sans-serif;
  font-optical-sizing: auto;
  font-weight: 350;
  cursor: pointer;
  font-style: normal;
}
ul li p {
  margin: 0;
}
ul li svg {
  width: 20px;
  height: 20px;
}
ul li:hover, ul li:focus {
  background-color: #f8fafc;
  border: 1px solid #f8fafc;
  color: #0ea5e9;
  fill: #0ea5e9;
}
#tag-div > ul > :nth-child(2) {
  color: orange;
}

.main {
  width: 100%;
  box-sizing: border-box;
  z-index: 99;
  margin-left: 17%;
  height: 90%;
  padding-top: 10px;
}
.main > :first-child {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 90%;
}
.today-first {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  height: 90%;
  width: 70%;
}
.today-first div h2, .today-first div h1 {
  margin: 0;
  padding: 0;
}
.today-first buttton {
  margin: 0;
}
.today-first div h2 {
  color: #cbd5e1;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3rem;

 }
#today-task {
  background-color: white;
  overflow-y: scroll;
}
#today-task iframe {
  border-radius: 10px;
  width: 100%;
}
#today-task, .visible {
  --sb-track-color: #232E33;
  --sb-thumb-color: #cbd5e1;
  --sb-size: 5px;
}

#today-task::-webkit-scrollbar, .visible::-webkit-scrollbar {
  width: var(--sb-size)
}

#today-task::-webkit-scrollbar-track, .visible::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 22px;
}

#today-task::-webkit-scrollbar-thumb, .visible::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 22px;
  
}

@supports not selector(::-webkit-scrollbar) {
  #today-task, .visible {
    scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}
#invalid {
  border: 2px dashed red;
}
#valid {
  border: 2px solid #0ea5e9;
}
.today-first button, form button {
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  color: #0ea5e9;
  font-size: 1.2rem;
  border: 1px solid #0ea5e9;
  background-color: white;
  font-family: 'Raleway', sans-serif;
  font-variant: all-petite-caps;
}
#btnYes, #btnNo {
  width: fit-content;
  padding: 10px 20px;
}
.today-first button:hover, #btnYes:hover, #btnNo:hover {
  background-color: #0ea5e9;
  color: white;
  border: 1px solid white;
}
.invisible {
  display: none;
}
.visible {
  display: flex;
  height: -webkit-fill-available;;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  z-index: 150;
  position: fixed;
  width: -webkit-fill-available;
  justify-content: center;
  backdrop-filter: blur(4px);
}
#add-form form {
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 30px 50px;
  background-color: white;
  border: 1px solid #cbd5e1;
  font-family: 'Raleway', sans-serif;
  border-radius: 20px;
}
#add-form form div {
  display: flex;
  justify-content: space-between;
}
#add-form label {
  letter-spacing: 2px;
  font-size: 0.9rem;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
}
select, input, textarea {
  width: 45ch;
  padding: 10px 20px;
  appearance:none;
  border: 1px solid #cbd5e1;
  font-family: 'Raleway', sans-serif;
  border-radius: 20px;
}
select:focus, input:focus, textarea:focus {
  outline: 0;
  border: 1px solid #0ea5e9;
}
select {
  width: 50ch;
}
.today-sec, .next-today {
  width: 30%;
  padding-top: 20px;
  display: flex;
  font-family: 'Quicksand', sans-serif;
  flex-direction: column;
  gap: 20px;
  height: 95%;
  align-items: flex-start;
}

.today-sec > div {
  --sb-track-color: #232E33;
  --sb-thumb-color: #cbd5e1;
  --sb-size: 5px;
}
.next-today > div {
  --sb-thumb-color: #232E33;
  --sb-track-color: #cbd5e1;
  --sb-size: 5px;
}

.today-sec > div::-webkit-scrollbar, .next-today > :last-child::-webkit-scrollbar {
  width: var(--sb-size)
}

.today-sec > div::-webkit-scrollbar-track, .next-today > :last-child::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 22px;
}

.today-sec > div::-webkit-scrollbar-thumb, .next-today > :last-child::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 22px;
  
}

@supports not selector(::-webkit-scrollbar) {
  .today-sec > div, .next-today > div {
    scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}
.today-sec > h2, .next-today h2 {
  font-size: 2.5rem;
  padding: 0;
  margin: 0;
  letter-spacing: 2px;
}
.today-sec > div, .next-today > :last-child{
  display: flex;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  gap: 10px;
  flex-direction: column;
}
#task-drop, #tab1-list{
  background-color: white;
  border: 1px solid #cbd5e1;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  width: 90%;
  border-radius: 10px;
  height: fit-content;
}
.identify {
  font-size: 0.55rem;
  padding: 0;
  margin: 0;
  text-transform: lowercase;
}
#task-drop h4, #tab1-list h4 {
  margin: 0;
  padding: 0;
  font-size: 0.7rem;
}
.timer {
  color: #0ea5e9;
  padding: 0;
  margin: 0;
  font-size: 0.6rem;
  font-weight:bolder;
  text-transform: capitalize;
}
.divChild, #tab1-list div {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.done {
  text-decoration: line-through;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.svgImage, #tab1-list img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.doneImage {
  width: 10px;
  height: 10px;
  cursor: pointer;
}
.p3 {
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 0.8rem;
}
#active {
  display: flex;
}
#inactive {
  display: none;
}
#present {
  color: #0ea5e9;
  fill: #0ea5e9;
}
#absent {
  color: black;
  fill: black;
}
.current {
  color: #0ea5e9;
  fill: #0ea5e9;
}

.main > :nth-child(2) {
  display: flex;
  width: 100%;
  overflow: none;
  gap: 30px;
}
.main > :nth-child(2) > div {
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: white;
}
.main > :nth-child(2) > div {
  height: 350px;
  box-sizing: border-box;
}
.next-today  h4, .next-today  h5 {
  margin: 0;
  padding: 0;
}
#tab1-list {
  border: none;
  padding: 10px;
}


@media only screen and (min-width: 700px) and (max-width: 950px) {
  .main > :first-child {
    flex-direction: row-reverse;
  }
}

@media only screen and (max-width: 700px) {
  .main {
    margin: 15% 0 0 0;
  }
  .main > :first-child {
    flex-direction: column;
  }
  .nav > :nth-child(2), .nav > :nth-child(3), .nav > :nth-child(4) {
    display: none;
  }
  .today-first, .today-sec {
    width: 100%;
    overflow: hidden;
  }
  .nav {
    width: 100%;
    top: 0;
    z-index: 100;
    background-color: #0ea5e9;
    flex-direction: row;
    height: fit-content;
    padding: 10px;
    color: white;
  }
  svg {
    height: 30px;
    width: 30px;
  }
  
  .nav > :first-child > h2 {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    padding: 0;
    color: white;
    margin: 0;
    text-transform: capitalize;
  }
  .nav > :first-child svg {
    fill: white;
  }
  .nav > :first-child {
    display: flex;
    position: sticky;
    top: 0;
    gap: 5px;
    backdrop-filter: blur(3px);
    align-items: center;
    padding: 10px;
  }
  .today-first {
    gap: 20px;
  }
  .today-sec {
    align-items: center;
  }
  .today-first button {
    position: fixed;
    bottom: 0;
    width: 96%;
    margin: 20px 0 0 0;
  }
  .visible {
    align-items: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/task.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,sDAAsD;EACtD,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,yBAAyB;AAC3B;AACA;EACE,kCAAkC;EAClC,aAAa;EACb,SAAS;AACX;;AAEA,yBAAyB;AACzB;EACE,UAAU;EACV,sBAAsB;EACtB,+BAA+B;EAC/B,YAAY;EACZ,qBAAqB;EACrB,UAAU;EACV,MAAM;EACN,gBAAgB;EAChB,oCAAoC;EACpC,OAAO;EACP,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE;AACF;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;;AAErB;;AAEA;EACE;IACE;0CACsC;EACxC;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,SAAS;EACT,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,MAAM;EACN,QAAQ;EACR,0BAA0B;EAC1B,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,WAAW;EACX,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,2BAA2B;AAC7B;AACA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,SAAS;EACT,oCAAoC;EACpC,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,sBAAsB;EACtB,WAAW;EACX,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,8BAA8B;EAC9B,QAAQ;EACR,WAAW;EACX,UAAU;AACZ;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,SAAS;AACX;AACA;EACE,cAAc;EACd,oCAAoC;EACpC,iBAAiB;;CAElB;AACD;EACE,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE;AACF;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;;AAErB;;AAEA;EACE;IACE;0CACsC;EACxC;AACF;AACA;EACE,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,uBAAuB;EACvB,kCAAkC;EAClC,6BAA6B;AAC/B;AACA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,uBAAuB;EACvB,0BAA0B;AAC5B;AACA;EACE,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB;EACvB,yBAAyB;EACzB,kCAAkC;EAClC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,kCAAkC;EAClC,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,WAAW;AACb;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,oCAAoC;EACpC,sBAAsB;EACtB,SAAS;EACT,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE;AACF;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;;AAErB;;AAEA;EACE;IACE;0CACsC;EACxC;AACF;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,sBAAsB;EACtB,UAAU;EACV,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,UAAU;EACV,SAAS;EACT,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,aAAa;AACf;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;EACb,WAAW;EACX,cAAc;EACd,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,YAAY;EACZ,aAAa;AACf;;;AAGA;EACE;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,MAAM;IACN,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,YAAY;EACd;EACA;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,iBAAiB;IACjB,qBAAqB;IACrB,UAAU;IACV,YAAY;IACZ,SAAS;IACT,0BAA0B;EAC5B;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,gBAAgB;IAChB,MAAM;IACN,QAAQ;IACR,0BAA0B;IAC1B,mBAAmB;IACnB,aAAa;EACf;EACA;IACE,SAAS;EACX;EACA;IACE,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,SAAS;IACT,UAAU;IACV,kBAAkB;EACpB;EACA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["body::before {\r\n  content: \"\";\r\n  /*background-image: url(\"../images/image-task.webp\");*/\r\n  background-color: white;\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  transform: rotate(180deg);\r\n}\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n/* NAV FOR DESKTOP VIEW */\r\n.nav {\r\n  width: 15%;\r\n  background-color: #fff;\r\n  border-right: 1px solid #cbd5e1;\r\n  height: 100%;\r\n  box-sizing:border-box;\r\n  padding: 0;\r\n  top: 0;\r\n  font-weight: 400;\r\n  font-family: 'Quicksand', sans-serif;\r\n  left: 0;\r\n  position: fixed;\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.nav {\r\n  --sb-track-color: #232E33;\r\n  --sb-thumb-color: #cbd5e1;\r\n  --sb-size: 1px;\r\n}\r\n\r\n.nav::-webkit-scrollbar {\r\n  width: var(--sb-size)\r\n}\r\n\r\n.nav::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 22px;\r\n}\r\n\r\n.nav::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 22px;\r\n  \r\n}\r\n\r\n@supports not selector(::-webkit-scrollbar) {\r\n  .nav {\r\n    scrollbar-color: var(--sb-thumb-color)\r\n                     var(--sb-track-color);\r\n  }\r\n}\r\n\r\nsvg {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.nav > :first-child > h2 {\r\n  font-size: 0.9rem;\r\n  letter-spacing: 2px;\r\n  padding: 0;\r\n  color: black;\r\n  margin: 0;\r\n  text-transform: capitalize;\r\n}\r\n.nav > :first-child {\r\n  display: flex;\r\n  position: sticky;\r\n  top: 0;\r\n  gap: 5px;\r\n  backdrop-filter: blur(3px);\r\n  align-items: center;\r\n  padding: 30px 10px 0 10px;\r\n}\r\n#list-drop, #tag-drop {\r\n  font-size: 1rem;\r\n  font-weight: bolder;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  color: black;\r\n  width: 80%;\r\n  justify-content: space-between;\r\n}\r\n#list-drop svg, #tag-drop  svg{\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: black;\r\n}\r\n.nav > :nth-child(2), .nav > :nth-child(3) {\r\n  display: flex;\r\n  width: 100%;\r\n  padding-bottom: 20px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: flex-start;\r\n}\r\nul li {\r\n  padding: 10px 0px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  margin: 0;\r\n  font-size: 0.9rem;\r\n  width: 100%;\r\n  display: flex;\r\n  padding-left: 20px;\r\n  align-items: flex-end;\r\n  gap: 12px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-optical-sizing: auto;\r\n  font-weight: 350;\r\n  cursor: pointer;\r\n  font-style: normal;\r\n}\r\nul li p {\r\n  margin: 0;\r\n}\r\nul li svg {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\nul li:hover, ul li:focus {\r\n  background-color: #f8fafc;\r\n  border: 1px solid #f8fafc;\r\n  color: #0ea5e9;\r\n  fill: #0ea5e9;\r\n}\r\n#tag-div > ul > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.main {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  z-index: 99;\r\n  margin-left: 17%;\r\n  height: 90%;\r\n  padding-top: 10px;\r\n}\r\n.main > :first-child {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 90%;\r\n}\r\n.today-first {\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n  height: 90%;\r\n  width: 70%;\r\n}\r\n.today-first div h2, .today-first div h1 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.today-first buttton {\r\n  margin: 0;\r\n}\r\n.today-first div h2 {\r\n  color: #cbd5e1;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1.3rem;\r\n\r\n }\r\n#today-task {\r\n  background-color: white;\r\n  overflow-y: scroll;\r\n}\r\n#today-task iframe {\r\n  border-radius: 10px;\r\n  width: 100%;\r\n}\r\n#today-task, .visible {\r\n  --sb-track-color: #232E33;\r\n  --sb-thumb-color: #cbd5e1;\r\n  --sb-size: 5px;\r\n}\r\n\r\n#today-task::-webkit-scrollbar, .visible::-webkit-scrollbar {\r\n  width: var(--sb-size)\r\n}\r\n\r\n#today-task::-webkit-scrollbar-track, .visible::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 22px;\r\n}\r\n\r\n#today-task::-webkit-scrollbar-thumb, .visible::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 22px;\r\n  \r\n}\r\n\r\n@supports not selector(::-webkit-scrollbar) {\r\n  #today-task, .visible {\r\n    scrollbar-color: var(--sb-thumb-color)\r\n                     var(--sb-track-color);\r\n  }\r\n}\r\n#invalid {\r\n  border: 2px dashed red;\r\n}\r\n#valid {\r\n  border: 2px solid #0ea5e9;\r\n}\r\n.today-first button, form button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n  color: #0ea5e9;\r\n  font-size: 1.2rem;\r\n  border: 1px solid #0ea5e9;\r\n  background-color: white;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-variant: all-petite-caps;\r\n}\r\n#btnYes, #btnNo {\r\n  width: fit-content;\r\n  padding: 10px 20px;\r\n}\r\n.today-first button:hover, #btnYes:hover, #btnNo:hover {\r\n  background-color: #0ea5e9;\r\n  color: white;\r\n  border: 1px solid white;\r\n}\r\n.invisible {\r\n  display: none;\r\n}\r\n.visible {\r\n  display: flex;\r\n  height: -webkit-fill-available;;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  box-sizing: border-box;\r\n  z-index: 150;\r\n  position: fixed;\r\n  width: -webkit-fill-available;\r\n  justify-content: center;\r\n  backdrop-filter: blur(4px);\r\n}\r\n#add-form form {\r\n  gap: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: fit-content;\r\n  padding: 30px 50px;\r\n  background-color: white;\r\n  border: 1px solid #cbd5e1;\r\n  font-family: 'Raleway', sans-serif;\r\n  border-radius: 20px;\r\n}\r\n#add-form form div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n#add-form label {\r\n  letter-spacing: 2px;\r\n  font-size: 0.9rem;\r\n  font-weight: bolder;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nselect, input, textarea {\r\n  width: 45ch;\r\n  padding: 10px 20px;\r\n  appearance:none;\r\n  border: 1px solid #cbd5e1;\r\n  font-family: 'Raleway', sans-serif;\r\n  border-radius: 20px;\r\n}\r\nselect:focus, input:focus, textarea:focus {\r\n  outline: 0;\r\n  border: 1px solid #0ea5e9;\r\n}\r\nselect {\r\n  width: 50ch;\r\n}\r\n.today-sec, .next-today {\r\n  width: 30%;\r\n  padding-top: 20px;\r\n  display: flex;\r\n  font-family: 'Quicksand', sans-serif;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  height: 95%;\r\n  align-items: flex-start;\r\n}\r\n\r\n.today-sec > div {\r\n  --sb-track-color: #232E33;\r\n  --sb-thumb-color: #cbd5e1;\r\n  --sb-size: 5px;\r\n}\r\n.next-today > div {\r\n  --sb-thumb-color: #232E33;\r\n  --sb-track-color: #cbd5e1;\r\n  --sb-size: 5px;\r\n}\r\n\r\n.today-sec > div::-webkit-scrollbar, .next-today > :last-child::-webkit-scrollbar {\r\n  width: var(--sb-size)\r\n}\r\n\r\n.today-sec > div::-webkit-scrollbar-track, .next-today > :last-child::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 22px;\r\n}\r\n\r\n.today-sec > div::-webkit-scrollbar-thumb, .next-today > :last-child::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 22px;\r\n  \r\n}\r\n\r\n@supports not selector(::-webkit-scrollbar) {\r\n  .today-sec > div, .next-today > div {\r\n    scrollbar-color: var(--sb-thumb-color)\r\n                     var(--sb-track-color);\r\n  }\r\n}\r\n.today-sec > h2, .next-today h2 {\r\n  font-size: 2.5rem;\r\n  padding: 0;\r\n  margin: 0;\r\n  letter-spacing: 2px;\r\n}\r\n.today-sec > div, .next-today > :last-child{\r\n  display: flex;\r\n  height: 400px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n}\r\n#task-drop, #tab1-list{\r\n  background-color: white;\r\n  border: 1px solid #cbd5e1;\r\n  padding: 10px 20px 10px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  box-sizing: border-box;\r\n  width: 90%;\r\n  border-radius: 10px;\r\n  height: fit-content;\r\n}\r\n.identify {\r\n  font-size: 0.55rem;\r\n  padding: 0;\r\n  margin: 0;\r\n  text-transform: lowercase;\r\n}\r\n#task-drop h4, #tab1-list h4 {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 0.7rem;\r\n}\r\n.timer {\r\n  color: #0ea5e9;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 0.6rem;\r\n  font-weight:bolder;\r\n  text-transform: capitalize;\r\n}\r\n.divChild, #tab1-list div {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n.done {\r\n  text-decoration: line-through;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n.svgImage, #tab1-list img {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n.doneImage {\r\n  width: 10px;\r\n  height: 10px;\r\n  cursor: pointer;\r\n}\r\n.p3 {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 0.8rem;\r\n}\r\n#active {\r\n  display: flex;\r\n}\r\n#inactive {\r\n  display: none;\r\n}\r\n#present {\r\n  color: #0ea5e9;\r\n  fill: #0ea5e9;\r\n}\r\n#absent {\r\n  color: black;\r\n  fill: black;\r\n}\r\n.current {\r\n  color: #0ea5e9;\r\n  fill: #0ea5e9;\r\n}\r\n\r\n.main > :nth-child(2) {\r\n  display: flex;\r\n  width: 100%;\r\n  overflow: none;\r\n  gap: 30px;\r\n}\r\n.main > :nth-child(2) > div {\r\n  border: 1px solid #cbd5e1;\r\n  border-radius: 20px;\r\n  padding: 20px 10px;\r\n  box-sizing: border-box;\r\n  background-color: white;\r\n}\r\n.main > :nth-child(2) > div {\r\n  height: 350px;\r\n  box-sizing: border-box;\r\n}\r\n.next-today  h4, .next-today  h5 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n#tab1-list {\r\n  border: none;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n@media only screen and (min-width: 700px) and (max-width: 950px) {\r\n  .main > :first-child {\r\n    flex-direction: row-reverse;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .main {\r\n    margin: 15% 0 0 0;\r\n  }\r\n  .main > :first-child {\r\n    flex-direction: column;\r\n  }\r\n  .nav > :nth-child(2), .nav > :nth-child(3), .nav > :nth-child(4) {\r\n    display: none;\r\n  }\r\n  .today-first, .today-sec {\r\n    width: 100%;\r\n    overflow: hidden;\r\n  }\r\n  .nav {\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 100;\r\n    background-color: #0ea5e9;\r\n    flex-direction: row;\r\n    height: fit-content;\r\n    padding: 10px;\r\n    color: white;\r\n  }\r\n  svg {\r\n    height: 30px;\r\n    width: 30px;\r\n  }\r\n  \r\n  .nav > :first-child > h2 {\r\n    font-size: 1.2rem;\r\n    letter-spacing: 1.5px;\r\n    padding: 0;\r\n    color: white;\r\n    margin: 0;\r\n    text-transform: capitalize;\r\n  }\r\n  .nav > :first-child svg {\r\n    fill: white;\r\n  }\r\n  .nav > :first-child {\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0;\r\n    gap: 5px;\r\n    backdrop-filter: blur(3px);\r\n    align-items: center;\r\n    padding: 10px;\r\n  }\r\n  .today-first {\r\n    gap: 20px;\r\n  }\r\n  .today-sec {\r\n    align-items: center;\r\n  }\r\n  .today-first button {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 96%;\r\n    margin: 20px 0 0 0;\r\n  }\r\n  .visible {\r\n    align-items: center;\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/task.css":
/*!**************************!*\
  !*** ./src/css/task.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/js/dom/clear.js":
/*!*****************************!*\
  !*** ./src/js/dom/clear.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Active: () => (/* binding */ Active),
/* harmony export */   Clear: () => (/* binding */ Clear)
/* harmony export */ });
function Clear(tab1, tab2) {
  tab1.id = 'active';
  tab2.id = 'inactive';
  // tab3.id = 'inactive';
  // tab4.id = 'inactive';
  // tab5.id = 'inactive';
  // tab6.id = 'inactive';
  // tab7.id = 'inactive';
  // tab8.id = 'inactive';
}
function Active (tab1, tab2) {
  tab1.id = 'present';
  tab2.id = 'absent';
}

/***/ }),

/***/ "./src/js/dom/dom-todo.js":
/*!********************************!*\
  !*** ./src/js/dom/dom-todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onlyToday: () => (/* binding */ onlyToday),
/* harmony export */   tabToday: () => (/* binding */ tabToday)
/* harmony export */ });
/* harmony import */ var _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/menu-down.svg */ "./src/images/menu-down.svg");
/* harmony import */ var _images_menu_up_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/menu-up.svg */ "./src/images/menu-up.svg");
/* harmony import */ var _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/circle-outline.svg */ "./src/images/circle-outline.svg");
/* harmony import */ var _images_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/circle.svg */ "./src/images/circle.svg");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/time */ "./src/js/utils/time.js");
/* harmony import */ var _utils_save_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/save_value */ "./src/js/utils/save_value.js");






function tabToday (obj) {
  const divParent = document.querySelector('#today-todo');
  const taskDrop = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const divChild = document.createElement('div');
  const header = document.createElement('h4');
  const svgImage = new Image();
  const doneImage = new Image;

  taskDrop.id = 'task-drop';
  p1.classList.add('identify');
  p1.textContent = `My lists > ${obj.list}`;
  if (obj.done === false) {
    doneImage.src = _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    divChild.className = 'divChild';
  } else {
    doneImage.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_3__;
    divChild.className = 'done';
  }
  header.textContent = obj.title;
  taskDrop.appendChild(p1);
  svgImage.src = _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__;
  svgImage.className = 'svgImage';
  divChild.appendChild(svgImage);
  divChild.appendChild(header);
  doneImage.className = 'doneImage';
  divChild.appendChild(doneImage);
  taskDrop.appendChild(divChild);
  p2.className = 'timer';
  if (_utils_time__WEBPACK_IMPORTED_MODULE_4__.Time.timeDifference(obj.due) !== 'less') {
    p2.textContent = obj.dueDate;
    doneImage.src = _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    divChild.className = 'divChild';
  } else {
    p2.textContent = 'Overdue';
    doneImage.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_3__;
    divChild.className = 'done';
  }
  taskDrop.appendChild(p2);
  divParent.prepend(taskDrop);

  svgImage.addEventListener("click", () => {
    if (svgImage.src === _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__) {
      p3.textContent = obj.desc;
      taskDrop.removeChild(p2);
      p3.className = 'p3';
      svgImage.src = _images_menu_up_svg__WEBPACK_IMPORTED_MODULE_1__;
      taskDrop.appendChild(p3);
      taskDrop.appendChild(p2);
    } else {
      svgImage.src = _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__;
      p3.textContent = '';
      p3.className = '';
      taskDrop.removeChild(p3);
    }
  });
  doneImage.addEventListener("click", () => {
    if (doneImage.src === _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__) {
      doneImage.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_3__;
      divChild.className = 'done';
      _utils_save_value__WEBPACK_IMPORTED_MODULE_5__.Save.update(obj.title, true);
    } else {
      if (p2.textContent !== 'Overdue') {
        doneImage.src = _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
        divChild.className = 'divChild'
        _utils_save_value__WEBPACK_IMPORTED_MODULE_5__.Save.update(obj.title, false);
      }
    }
  })
}
function onlyToday (obj) {
  const divParent = document.querySelector('#next-first');
  const taskDrop = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const divChild = document.createElement('div');
  const header = document.createElement('h4');
  const svgImage = new Image();
  const doneImage = new Image;

  taskDrop.id = 'task-drop';
  p1.classList.add('identify');
  p1.textContent = `My lists > ${obj.list}`;
  if (obj.done === false) {
    doneImage.src = _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    divChild.className = 'divChild';
  } else {
    doneImage.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_3__;
    divChild.className = 'done';
  }
  header.textContent = obj.title;
  taskDrop.appendChild(p1);
  svgImage.src = _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__;
  svgImage.className = 'svgImage';
  divChild.appendChild(svgImage);
  divChild.appendChild(header);
  doneImage.className = 'doneImage';
  divChild.appendChild(doneImage);
  taskDrop.appendChild(divChild);
  p2.className = 'timer';
  p2.textContent = obj.dueDate;
  doneImage.src = _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
  divChild.className = 'divChild';
  taskDrop.appendChild(p2);
  divParent.prepend(taskDrop);

  svgImage.addEventListener("click", () => {
    if (svgImage.src === _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__) {
      p3.textContent = obj.desc;
      taskDrop.removeChild(p2);
      p3.className = 'p3';
      svgImage.src = _images_menu_up_svg__WEBPACK_IMPORTED_MODULE_1__;
      taskDrop.appendChild(p3);
      taskDrop.appendChild(p2);
    } else {
      svgImage.src = _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__;
      p3.textContent = '';
      p3.className = '';
      taskDrop.removeChild(p3);
    }
  });
  doneImage.addEventListener("click", () => {
    if (doneImage.src === _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__) {
      doneImage.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_3__;
      divChild.className = 'done';
      _utils_save_value__WEBPACK_IMPORTED_MODULE_5__.Save.update(obj.title, true);
    } else {
      if (p2.textContent !== 'Overdue') {
        doneImage.src = _images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
        divChild.className = 'divChild'
        _utils_save_value__WEBPACK_IMPORTED_MODULE_5__.Save.update(obj.title, false);
      }
    }
  })
}

/***/ }),

/***/ "./src/js/dom/quote.js":
/*!*****************************!*\
  !*** ./src/js/dom/quote.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeQuote: () => (/* binding */ changeQuote)
/* harmony export */ });
function changeQuote (quote) {
  const actionQuotes = [
    "Start small, dream big.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Every strike brings me closer to the next home run.",
    "Don't wait for the perfect moment, take the moment and make it perfect.",
    "The journey of a thousand miles begins with a single step.",
    "The best way to get started is to quit talking and begin doing.",
    "Focus on progress, not perfection.",
    "Make each day your masterpiece.",
    "Don't let yesterday take up too much of today.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It is during our darkest moments that we must focus to see the light.",
    "Believe you can and you're halfway there.",
    "The best way to predict your future is to create it.",
    "Defeat is not the opposite of success. It's part of it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Action is the foundational key to all success.",
    "Discipline is the bridge between goals and accomplishments.",
    "The path to success is paved with action, not excuses.",
    "Procrastination is the thief of time.",
    "Don't let the fear of striking out keep you from playing the game.",
    "Progress, not perfection, is the key to success.",
    "Big goals require small steps.",
    "The only person you are destined to become is the person you decide to be.",
    "Your actions speak so loudly, I can't hear what you're saying.",
    "What you do speaks so loud that I can't hear what you say.",
    "It is not what happens to you that matters, but how you react to what happens to you.",
    "The truth of a man is not what he is said to be, but what he does.",
    "Character is what you do when no one is watching.",
    "The best revenge is massive success.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can do it.",
    "There are no shortcuts to success. It takes hard work and dedication.",
    "The difference between successful people and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
    "The man who moves a mountain begins by carrying away small stones.",
    "You don't have to be great to start, but you have to start to be great.",
    "The side hustle is the new hustle.",
    "The only person you are destined to compete with is the person you were yesterday.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "It's not about how many times you fall, but how many times you get back up.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    "Stay foolish, stay hungry.",
    "The mind is everything. What you think you become.",
    "The two most important days in your life are the day you are born and the day you find out why.",
    "Whether you think you can or you think you can't, you're right.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Don't be afraid to give up the good to go for the great.",
    "If you're not embarrassed by the first version of your product, you've launched too late.",
    "Done is better than perfect.",
    "You miss 100% of the shots you don't take.",
    "The only way to do great work is to love what you do.",
    "I'm not a businessman. I'm a business, man.",
    "A goal without a plan is just a wish.",
    "The key is to set realistic goals and then work like hell to achieve them.",
    "The mind is everything. What you think you become.",
    "The best revenge is massive success.",
    "The only way to do great work is to love what you do.",
    "If you can dream it"
    ]
  
  quote.textContent = actionQuotes[Math.floor(Math.random() * actionQuotes.length)]  ;
}

/***/ }),

/***/ "./src/js/utils/form-validator.js":
/*!****************************************!*\
  !*** ./src/js/utils/form-validator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testDate: () => (/* binding */ testDate),
/* harmony export */   testForm: () => (/* binding */ testForm),
/* harmony export */   testSelect: () => (/* binding */ testSelect),
/* harmony export */   testText: () => (/* binding */ testText)
/* harmony export */ });
function testText(fname) {
  if (fname.validity.valid) {
    fname.id = "valid";
  } else {
    checkFnError(fname);
  };
}
const checkFnError = (fname) => {
  if (fname.validity.valueMissing) {
    fname.id = 'invalid';
  } else if (fname.validity.tooLong) {
    fname.id = 'invalid';
  }
};

function testDate(date) {
  if (date.value === '') {
    date.id = 'invalid';
    return false;
  } else if ((new Date(date) < new Date())) {
    date.id = 'invalid';
    return false;
  } else {
    date.id = 'valid';
    return true;
  }
}

function testSelect(option) {
  if (option.value === 'Select list') {
    option.id = 'invalid';
    return false;
  } else {
    option.id = 'valid';
    return true;
  }
}

function testForm (title, date, option) {
  if (!title.validity.valid) {
    checkFnError(title);
    return false;
  } else if ((testDate(date) === false)) {
    testDate(date);
    return false;
  } else if ((testSelect(option) === false)) {
    testSelect(option);
    return false;
  };
  return true;
}

/***/ }),

/***/ "./src/js/utils/next-day.js":
/*!**********************************!*\
  !*** ./src/js/utils/next-day.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstSevenDays: () => (/* binding */ firstSevenDays)
/* harmony export */ });
/* harmony import */ var _dom_dom_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom-todo */ "./src/js/dom/dom-todo.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./src/js/utils/time.js");



const firstSevenDays = (function () {
  let saveArray = [];
  const start = () => {
    if (localStorage.getItem('todo') && (saveArray.length === 0)) {
      saveArray = JSON.parse(localStorage.getItem('todo'));
      saveArray.forEach(element => {
        if (_time__WEBPACK_IMPORTED_MODULE_1__.Time.timeDifference(element.due) === "equal") {
          (0,_dom_dom_todo__WEBPACK_IMPORTED_MODULE_0__.onlyToday)(element);
        }
      });
    }
  }
  return ( start )
})();

/***/ }),

/***/ "./src/js/utils/save_value.js":
/*!************************************!*\
  !*** ./src/js/utils/save_value.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Save: () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _dom_dom_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom-todo */ "./src/js/dom/dom-todo.js");

const Save = (function () {
  let saveArray = [];

  const start = (title, desc, dueDate, list) => {
    const obj = new myObj(title, desc, dueDate, list);
    (0,_dom_dom_todo__WEBPACK_IMPORTED_MODULE_0__.tabToday)(obj);


    if (localStorage.getItem('todo')) {
      saveArray = JSON.parse(localStorage.getItem('todo'));
      saveArray[saveArray.length] = obj;
      localStorage.setItem('todo', JSON.stringify(saveArray));
    } else {
      saveArray[saveArray.length] = obj;
      localStorage.setItem('todo', JSON.stringify(saveArray));
    }
    function myObj (title, desc, dueDate, list) {
      const due = new Date(dueDate);
      dueDate = due.toDateString();
      const done = false;
      return { title, desc, due, list, dueDate, done};
    }
  }
  const update = (name, value) => {
    let saveArray = [];
    saveArray = JSON.parse(localStorage.getItem('todo'));
    //localStorage.removeItem('todo');
    saveArray.forEach(element => {
      if (element.title === name) {
        element.done = value;
      }
    });
    localStorage.setItem('todo', JSON.stringify(saveArray));
  }
  return { start, update };
})();

/***/ }),

/***/ "./src/js/utils/time.js":
/*!******************************!*\
  !*** ./src/js/utils/time.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Time: () => (/* binding */ Time)
/* harmony export */ });
const Time = (function () {
  const displayTime = (userTime) => {
    const now = new Date().getHours();
    if ((now >= 5) && (now < 12)) {
      userTime.textContent = 'Good Morning, ';
    } else if ((now >= 12) && (now < 17)) {
      userTime.textContent = 'Good Afternoon, ';
    } else if ((now >= 17) && (now < 20)) {
      userTime.textContent = 'Good Evening, ';
    } else if ((now >= 20) && (now <= 23)) {
      userTime.textContent = 'Good Night, ';
    } else if ((now >= 0) && (now < 5)) {
      userTime.textContent = 'Good Night, ';
    }
  }
  const timeDifference = (time1) => {
    time1 = new Date(time1);
    const time2 = new Date();
    if (time1 > time2) {
      return 'greater';
    } else if (time1.toDateString() === time2.toDateString()) {
      return 'equal';
    }
    return 'less';
  }
  return { displayTime, timeDifference }
})();

/***/ }),

/***/ "./src/js/utils/today.js":
/*!*******************************!*\
  !*** ./src/js/utils/today.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Today: () => (/* binding */ Today)
/* harmony export */ });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./src/js/utils/time.js");
/* harmony import */ var _dom_quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/quote */ "./src/js/dom/quote.js");
/* harmony import */ var _save_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save_value */ "./src/js/utils/save_value.js");
/* harmony import */ var _dom_dom_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/dom-todo */ "./src/js/dom/dom-todo.js");
/* harmony import */ var _form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-validator */ "./src/js/utils/form-validator.js");






const Today = (function () {
  const userName = document.querySelector('#fname');
  const userTime = document.querySelector('#timer');
  const userQuote = document.querySelector('#quote');
  const addBtn = document.querySelector('#btn-add');
  const form = document.querySelector('#add-form');
  const addForm = document.querySelector('#btnYes');
  const cancelForm = document.querySelector('#btnNo');
  const title = document.querySelector('#title');
  const desc = document.querySelector('#desc');
  const dueDate = document.querySelector('#date');
  const myList = document.querySelector('#list');
  let saveArray = [];


  const start = (fname) => {
    userName.textContent = fname.charAt(0).toUpperCase() + fname.slice(1);
    _time__WEBPACK_IMPORTED_MODULE_0__.Time.displayTime(userTime)
    ;(0,_dom_quote__WEBPACK_IMPORTED_MODULE_1__.changeQuote)(userQuote);
    addBtn.addEventListener("click", () => {
      form.classList.remove('invisible');
      form.classList.add('visible');
    })
    cancelForm.addEventListener("click", () => {
      form.classList.add('invisible');
      form.classList.remove('visible');
    })
    title.addEventListener("input", () => {
      ;(0,_form_validator__WEBPACK_IMPORTED_MODULE_4__.testText)(title);
    })
    dueDate.addEventListener("input", () => {
      ;(0,_form_validator__WEBPACK_IMPORTED_MODULE_4__.testDate)(dueDate);
    })
    myList.addEventListener("input", () => {
      ;(0,_form_validator__WEBPACK_IMPORTED_MODULE_4__.testSelect)(myList);
    })
    addForm.addEventListener("click", (event) => {
      event.preventDefault();
      if ((0,_form_validator__WEBPACK_IMPORTED_MODULE_4__.testForm)(title, dueDate, myList) === true) {
        _save_value__WEBPACK_IMPORTED_MODULE_2__.Save.start(title.value, desc.value, dueDate.value, myList.value);
        title.value = '';
        desc.value = '';
        dueDate.value = '';
        myList.value = '';
        form.classList.add('invisible');
        form.classList.remove('visible');
      }
    })
    if (localStorage.getItem('todo') && (saveArray.length === 0)) {
      saveArray = JSON.parse(localStorage.getItem('todo'));
      for (let obj = 0; obj < saveArray.length; obj++)
      {
        (0,_dom_dom_todo__WEBPACK_IMPORTED_MODULE_3__.tabToday)(saveArray[obj]);
      }
    }
  }
  return { start };
})();

/***/ }),

/***/ "./src/images/circle-outline.svg":
/*!***************************************!*\
  !*** ./src/images/circle-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71aa99a10c3cf5fa1544.svg";

/***/ }),

/***/ "./src/images/circle.svg":
/*!*******************************!*\
  !*** ./src/images/circle.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a2344859fad6be6d6f6.svg";

/***/ }),

/***/ "./src/images/menu-down.svg":
/*!**********************************!*\
  !*** ./src/images/menu-down.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40bbd1f273a058081e31.svg";

/***/ }),

/***/ "./src/images/menu-up.svg":
/*!********************************!*\
  !*** ./src/images/menu-up.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70e8dd3a48a017224bad.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
  !*** ./src/js/task.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_task_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/task.css */ "./src/css/task.css");
/* harmony import */ var _utils_today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/today */ "./src/js/utils/today.js");
/* harmony import */ var _utils_next_day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/next-day */ "./src/js/utils/next-day.js");
/* harmony import */ var _dom_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/clear */ "./src/js/dom/clear.js");





const Task = (function () {
  let loginData = localStorage.getItem('logins');
  loginData = JSON.parse(loginData);
  const fname = loginData.fname;
  const lname = loginData.lname;
  const email = loginData.email;
  const user = document.querySelector('#user-name');
  const today = document.querySelector('#link1');
  const todayTab = document.querySelector('#today');
  const sevenDays = document.querySelector('#link2');
  const sevenDaysTab = document.querySelector('#next-days');

  const start = () => {
    document.addEventListener("DOMContentLoaded", () => {
      (0,_dom_clear__WEBPACK_IMPORTED_MODULE_3__.Clear)(todayTab, sevenDaysTab);
      (0,_dom_clear__WEBPACK_IMPORTED_MODULE_3__.Active)(today, sevenDays);
      user.textContent = `${fname}`
      _utils_today__WEBPACK_IMPORTED_MODULE_1__.Today.start(fname);
      today.addEventListener('click', () => {
        (0,_dom_clear__WEBPACK_IMPORTED_MODULE_3__.Clear)(todayTab, sevenDaysTab);
        (0,_dom_clear__WEBPACK_IMPORTED_MODULE_3__.Active)(today, sevenDays);
        _utils_today__WEBPACK_IMPORTED_MODULE_1__.Today.start(fname);
      })
      sevenDays.addEventListener('click', () => {
        ;(0,_dom_clear__WEBPACK_IMPORTED_MODULE_3__.Clear)(sevenDaysTab, todayTab);
        (0,_dom_clear__WEBPACK_IMPORTED_MODULE_3__.Active)(sevenDays, today);
        (0,_utils_next_day__WEBPACK_IMPORTED_MODULE_2__.firstSevenDays)();
      })
    })
  }
  return { start };
})();
Task.start();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxLQUFLLEtBQUssT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUs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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNhO0FBQ1k7QUFDTjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFLO0FBQ1gsTUFBTSxrREFBTTtBQUNaLDRCQUE0QixNQUFNO0FBQ2xDLE1BQU0sK0NBQUs7QUFDWDtBQUNBLFFBQVEsaURBQUs7QUFDYixRQUFRLGtEQUFNO0FBQ2QsUUFBUSwrQ0FBSztBQUNiLE9BQU87QUFDUDtBQUNBLFFBQVEsa0RBQUs7QUFDYixRQUFRLGtEQUFNO0FBQ2QsUUFBUSwrREFBYztBQUN0QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy90YXNrLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvdGFzay5jc3M/ZDUwNCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9kb20vY2xlYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RvbS9kb20tdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZG9tL3F1b3RlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy91dGlscy9mb3JtLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdXRpbHMvbmV4dC1kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL3NhdmVfdmFsdWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL2ltYWdlLXRhc2sud2VicFwiKTsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4vKiBOQVYgRk9SIERFU0tUT1AgVklFVyAqL1xyXG4ubmF2IHtcclxuICB3aWR0aDogMTUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NiZDVlMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAtLXNiLXRyYWNrLWNvbG9yOiAjMjMyRTMzO1xyXG4gIC0tc2ItdGh1bWItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgLS1zYi1zaXplOiAxcHg7XHJcbn1cclxuXHJcbi5uYXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogdmFyKC0tc2Itc2l6ZSlcclxufVxyXG5cclxuLm5hdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG59XHJcblxyXG4ubmF2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItdGh1bWItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgXHJcbn1cclxuXHJcbkBzdXBwb3J0cyBub3Qgc2VsZWN0b3IoOjotd2Via2l0LXNjcm9sbGJhcikge1xyXG4gIC5uYXYge1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcilcclxuICAgICAgICAgICAgICAgICAgICAgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuc3ZnIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5uYXYgPiA6Zmlyc3QtY2hpbGQgPiBoMiB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLm5hdiA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBnYXA6IDVweDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHggMTBweCAwIDEwcHg7XHJcbn1cclxuI2xpc3QtZHJvcCwgI3RhZy1kcm9wIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogODAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4jbGlzdC1kcm9wIHN2ZywgI3RhZy1kcm9wICBzdmd7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZpbGw6IGJsYWNrO1xyXG59XHJcbi5uYXYgPiA6bnRoLWNoaWxkKDIpLCAubmF2ID4gOm50aC1jaGlsZCgzKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxudWwgbGkge1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xyXG4gIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG51bCBsaSBwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxudWwgbGkgc3ZnIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxudWwgbGk6aG92ZXIsIHVsIGxpOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGZhZmM7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbiAgZmlsbDogIzBlYTVlOTtcclxufVxyXG4jdGFnLWRpdiA+IHVsID4gOm50aC1jaGlsZCgyKSB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4ubWFpbiA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuLnRvZGF5LWZpcnN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiA1cHg7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG4udG9kYXktZmlyc3QgZGl2IGgyLCAudG9kYXktZmlyc3QgZGl2IGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4udG9kYXktZmlyc3QgYnV0dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi50b2RheS1maXJzdCBkaXYgaDIge1xyXG4gIGNvbG9yOiAjY2JkNWUxO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuXHJcbiB9XHJcbiN0b2RheS10YXNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuI3RvZGF5LXRhc2sgaWZyYW1lIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiN0b2RheS10YXNrLCAudmlzaWJsZSB7XHJcbiAgLS1zYi10cmFjay1jb2xvcjogIzIzMkUzMztcclxuICAtLXNiLXRodW1iLWNvbG9yOiAjY2JkNWUxO1xyXG4gIC0tc2Itc2l6ZTogNXB4O1xyXG59XHJcblxyXG4jdG9kYXktdGFzazo6LXdlYmtpdC1zY3JvbGxiYXIsIC52aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IHZhcigtLXNiLXNpemUpXHJcbn1cclxuXHJcbiN0b2RheS10YXNrOjotd2Via2l0LXNjcm9sbGJhci10cmFjaywgLnZpc2libGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10cmFjay1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxufVxyXG5cclxuI3RvZGF5LXRhc2s6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLCAudmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRodW1iLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIFxyXG59XHJcblxyXG5Ac3VwcG9ydHMgbm90IHNlbGVjdG9yKDo6LXdlYmtpdC1zY3JvbGxiYXIpIHtcclxuICAjdG9kYXktdGFzaywgLnZpc2libGUge1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcilcclxuICAgICAgICAgICAgICAgICAgICAgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xyXG4gIH1cclxufVxyXG4jaW52YWxpZCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJlZDtcclxufVxyXG4jdmFsaWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZWE1ZTk7XHJcbn1cclxuLnRvZGF5LWZpcnN0IGJ1dHRvbiwgZm9ybSBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlYTVlOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtdmFyaWFudDogYWxsLXBldGl0ZS1jYXBzO1xyXG59XHJcbiNidG5ZZXMsICNidG5ObyB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG4udG9kYXktZmlyc3QgYnV0dG9uOmhvdmVyLCAjYnRuWWVzOmhvdmVyLCAjYnRuTm86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWE1ZTk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5pbnZpc2libGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnZpc2libGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgei1pbmRleDogMTUwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxufVxyXG4jYWRkLWZvcm0gZm9ybSB7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiNhZGQtZm9ybSBmb3JtIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuI2FkZC1mb3JtIGxhYmVsIHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbnNlbGVjdCwgaW5wdXQsIHRleHRhcmVhIHtcclxuICB3aWR0aDogNDVjaDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYXBwZWFyYW5jZTpub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbnNlbGVjdDpmb2N1cywgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZWE1ZTk7XHJcbn1cclxuc2VsZWN0IHtcclxuICB3aWR0aDogNTBjaDtcclxufVxyXG4udG9kYXktc2VjLCAubmV4dC10b2RheSB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnRvZGF5LXNlYyA+IGRpdiB7XHJcbiAgLS1zYi10cmFjay1jb2xvcjogIzIzMkUzMztcclxuICAtLXNiLXRodW1iLWNvbG9yOiAjY2JkNWUxO1xyXG4gIC0tc2Itc2l6ZTogNXB4O1xyXG59XHJcbi5uZXh0LXRvZGF5ID4gZGl2IHtcclxuICAtLXNiLXRodW1iLWNvbG9yOiAjMjMyRTMzO1xyXG4gIC0tc2ItdHJhY2stY29sb3I6ICNjYmQ1ZTE7XHJcbiAgLS1zYi1zaXplOiA1cHg7XHJcbn1cclxuXHJcbi50b2RheS1zZWMgPiBkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLCAubmV4dC10b2RheSA+IDpsYXN0LWNoaWxkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IHZhcigtLXNiLXNpemUpXHJcbn1cclxuXHJcbi50b2RheS1zZWMgPiBkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLCAubmV4dC10b2RheSA+IDpsYXN0LWNoaWxkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItdHJhY2stY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbn1cclxuXHJcbi50b2RheS1zZWMgPiBkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLCAubmV4dC10b2RheSA+IDpsYXN0LWNoaWxkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItdGh1bWItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgXHJcbn1cclxuXHJcbkBzdXBwb3J0cyBub3Qgc2VsZWN0b3IoOjotd2Via2l0LXNjcm9sbGJhcikge1xyXG4gIC50b2RheS1zZWMgPiBkaXYsIC5uZXh0LXRvZGF5ID4gZGl2IHtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2ItdGh1bWItY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcclxuICB9XHJcbn1cclxuLnRvZGF5LXNlYyA+IGgyLCAubmV4dC10b2RheSBoMiB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4udG9kYXktc2VjID4gZGl2LCAubmV4dC10b2RheSA+IDpsYXN0LWNoaWxke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiN0YXNrLWRyb3AsICN0YWIxLWxpc3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4uaWRlbnRpZnkge1xyXG4gIGZvbnQtc2l6ZTogMC41NXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcbiN0YXNrLWRyb3AgaDQsICN0YWIxLWxpc3QgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcbi50aW1lciB7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5kaXZDaGlsZCwgI3RhYjEtbGlzdCBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kb25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc3ZnSW1hZ2UsICN0YWIxLWxpc3QgaW1nIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kb25lSW1hZ2Uge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnAzIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG4jYWN0aXZlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNpbmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jcHJlc2VudCB7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbiAgZmlsbDogIzBlYTVlOTtcclxufVxyXG4jYWJzZW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZmlsbDogYmxhY2s7XHJcbn1cclxuLmN1cnJlbnQge1xyXG4gIGNvbG9yOiAjMGVhNWU5O1xyXG4gIGZpbGw6ICMwZWE1ZTk7XHJcbn1cclxuXHJcbi5tYWluID4gOm50aC1jaGlsZCgyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogbm9uZTtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuLm1haW4gPiA6bnRoLWNoaWxkKDIpID4gZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1haW4gPiA6bnRoLWNoaWxkKDIpID4gZGl2IHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm5leHQtdG9kYXkgIGg0LCAubmV4dC10b2RheSAgaDUge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiN0YWIxLWxpc3Qge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgLm1haW4gPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbjogMTUlIDAgMCAwO1xyXG4gIH1cclxuICAubWFpbiA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubmF2ID4gOm50aC1jaGlsZCgyKSwgLm5hdiA+IDpudGgtY2hpbGQoMyksIC5uYXYgPiA6bnRoLWNoaWxkKDQpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b2RheS1maXJzdCwgLnRvZGF5LXNlYyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNWU5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYgPiA6Zmlyc3QtY2hpbGQgPiBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgLm5hdiA+IDpmaXJzdC1jaGlsZCBzdmcge1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbiAgfVxyXG4gIC5uYXYgPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC50b2RheS1maXJzdCB7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgfVxyXG4gIC50b2RheS1zZWMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnRvZGF5LWZpcnN0IGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gIH1cclxuICAudmlzaWJsZSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90YXNrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxzREFBc0Q7RUFDdEQsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLE1BQU07RUFDTixnQkFBZ0I7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XHJcXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvaW1hZ2UtdGFzay53ZWJwXFxcIik7Ki9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE5BViBGT1IgREVTS1RPUCBWSUVXICovXFxyXFxuLm5hdiB7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmQ1ZTE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIC0tc2ItdHJhY2stY29sb3I6ICMyMzJFMzM7XFxyXFxuICAtLXNiLXRodW1iLWNvbG9yOiAjY2JkNWUxO1xcclxcbiAgLS1zYi1zaXplOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zYi1zaXplKVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10aHVtYi1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbkBzdXBwb3J0cyBub3Qgc2VsZWN0b3IoOjotd2Via2l0LXNjcm9sbGJhcikge1xcclxcbiAgLm5hdiB7XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2ItdGh1bWItY29sb3IpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zdmcge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiA6Zmlyc3QtY2hpbGQgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcbi5uYXYgPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTBweCAwIDEwcHg7XFxyXFxufVxcclxcbiNsaXN0LWRyb3AsICN0YWctZHJvcCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4jbGlzdC1kcm9wIHN2ZywgI3RhZy1kcm9wICBzdmd7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGZpbGw6IGJsYWNrO1xcclxcbn1cXHJcXG4ubmF2ID4gOm50aC1jaGlsZCgyKSwgLm5hdiA+IDpudGgtY2hpbGQoMykge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxyXFxuICBmb250LXdlaWdodDogMzUwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG51bCBsaSBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxudWwgbGkgc3ZnIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG51bCBsaTpob3ZlciwgdWwgbGk6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGZhZmM7XFxyXFxuICBjb2xvcjogIzBlYTVlOTtcXHJcXG4gIGZpbGw6ICMwZWE1ZTk7XFxyXFxufVxcclxcbiN0YWctZGl2ID4gdWwgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcbi5tYWluID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuLnRvZGF5LWZpcnN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG4udG9kYXktZmlyc3QgZGl2IGgyLCAudG9kYXktZmlyc3QgZGl2IGgxIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi50b2RheS1maXJzdCBidXR0dG9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnRvZGF5LWZpcnN0IGRpdiBoMiB7XFxyXFxuICBjb2xvcjogI2NiZDVlMTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcblxcclxcbiB9XFxyXFxuI3RvZGF5LXRhc2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcbiN0b2RheS10YXNrIGlmcmFtZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiN0b2RheS10YXNrLCAudmlzaWJsZSB7XFxyXFxuICAtLXNiLXRyYWNrLWNvbG9yOiAjMjMyRTMzO1xcclxcbiAgLS1zYi10aHVtYi1jb2xvcjogI2NiZDVlMTtcXHJcXG4gIC0tc2Itc2l6ZTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kYXktdGFzazo6LXdlYmtpdC1zY3JvbGxiYXIsIC52aXNpYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogdmFyKC0tc2Itc2l6ZSlcXHJcXG59XFxyXFxuXFxyXFxuI3RvZGF5LXRhc2s6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLCAudmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZGF5LXRhc2s6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLCAudmlzaWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItdGh1bWItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5Ac3VwcG9ydHMgbm90IHNlbGVjdG9yKDo6LXdlYmtpdC1zY3JvbGxiYXIpIHtcXHJcXG4gICN0b2RheS10YXNrLCAudmlzaWJsZSB7XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2ItdGh1bWItY29sb3IpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4jaW52YWxpZCB7XFxyXFxuICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xcclxcbn1cXHJcXG4jdmFsaWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzBlYTVlOTtcXHJcXG59XFxyXFxuLnRvZGF5LWZpcnN0IGJ1dHRvbiwgZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGNvbG9yOiAjMGVhNWU5O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGVhNWU5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC12YXJpYW50OiBhbGwtcGV0aXRlLWNhcHM7XFxyXFxufVxcclxcbiNidG5ZZXMsICNidG5ObyB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxufVxcclxcbi50b2RheS1maXJzdCBidXR0b246aG92ZXIsICNidG5ZZXM6aG92ZXIsICNidG5Obzpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNWU5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5pbnZpc2libGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnZpc2libGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTs7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgei1pbmRleDogMTUwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbn1cXHJcXG4jYWRkLWZvcm0gZm9ybSB7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4jYWRkLWZvcm0gZm9ybSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuI2FkZC1mb3JtIGxhYmVsIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuc2VsZWN0LCBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDQ1Y2g7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBhcHBlYXJhbmNlOm5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbnNlbGVjdDpmb2N1cywgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGVhNWU5O1xcclxcbn1cXHJcXG5zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDUwY2g7XFxyXFxufVxcclxcbi50b2RheS1zZWMsIC5uZXh0LXRvZGF5IHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LXNlYyA+IGRpdiB7XFxyXFxuICAtLXNiLXRyYWNrLWNvbG9yOiAjMjMyRTMzO1xcclxcbiAgLS1zYi10aHVtYi1jb2xvcjogI2NiZDVlMTtcXHJcXG4gIC0tc2Itc2l6ZTogNXB4O1xcclxcbn1cXHJcXG4ubmV4dC10b2RheSA+IGRpdiB7XFxyXFxuICAtLXNiLXRodW1iLWNvbG9yOiAjMjMyRTMzO1xcclxcbiAgLS1zYi10cmFjay1jb2xvcjogI2NiZDVlMTtcXHJcXG4gIC0tc2Itc2l6ZTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktc2VjID4gZGl2Ojotd2Via2l0LXNjcm9sbGJhciwgLm5leHQtdG9kYXkgPiA6bGFzdC1jaGlsZDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IHZhcigtLXNiLXNpemUpXFxyXFxufVxcclxcblxcclxcbi50b2RheS1zZWMgPiBkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLCAubmV4dC10b2RheSA+IDpsYXN0LWNoaWxkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktc2VjID4gZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiwgLm5leHQtdG9kYXkgPiA6bGFzdC1jaGlsZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItdGh1bWItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5Ac3VwcG9ydHMgbm90IHNlbGVjdG9yKDo6LXdlYmtpdC1zY3JvbGxiYXIpIHtcXHJcXG4gIC50b2RheS1zZWMgPiBkaXYsIC5uZXh0LXRvZGF5ID4gZGl2IHtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcilcXHJcXG4gICAgICAgICAgICAgICAgICAgICB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcbi50b2RheS1zZWMgPiBoMiwgLm5leHQtdG9kYXkgaDIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuLnRvZGF5LXNlYyA+IGRpdiwgLm5leHQtdG9kYXkgPiA6bGFzdC1jaGlsZHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4jdGFzay1kcm9wLCAjdGFiMS1saXN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuLmlkZW50aWZ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC41NXJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcclxcbn1cXHJcXG4jdGFzay1kcm9wIGg0LCAjdGFiMS1saXN0IGg0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuLnRpbWVyIHtcXHJcXG4gIGNvbG9yOiAjMGVhNWU5O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcbi5kaXZDaGlsZCwgI3RhYjEtbGlzdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmRvbmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uc3ZnSW1hZ2UsICN0YWIxLWxpc3QgaW1nIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZG9uZUltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucDMge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcbiNhY3RpdmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuI2luYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNwcmVzZW50IHtcXHJcXG4gIGNvbG9yOiAjMGVhNWU5O1xcclxcbiAgZmlsbDogIzBlYTVlOTtcXHJcXG59XFxyXFxuI2Fic2VudCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmaWxsOiBibGFjaztcXHJcXG59XFxyXFxuLmN1cnJlbnQge1xcclxcbiAgY29sb3I6ICMwZWE1ZTk7XFxyXFxuICBmaWxsOiAjMGVhNWU5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IDpudGgtY2hpbGQoMikge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IG5vbmU7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcbi5tYWluID4gOm50aC1jaGlsZCgyKSA+IGRpdiB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1haW4gPiA6bnRoLWNoaWxkKDIpID4gZGl2IHtcXHJcXG4gIGhlaWdodDogMzUwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4ubmV4dC10b2RheSAgaDQsIC5uZXh0LXRvZGF5ICBoNSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4jdGFiMS1saXN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xcclxcbiAgLm1haW4gPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgbWFyZ2luOiAxNSUgMCAwIDA7XFxyXFxuICB9XFxyXFxuICAubWFpbiA+IDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAubmF2ID4gOm50aC1jaGlsZCgyKSwgLm5hdiA+IDpudGgtY2hpbGQoMyksIC5uYXYgPiA6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC50b2RheS1maXJzdCwgLnRvZGF5LXNlYyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgLm5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlYTVlOTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgc3ZnIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdiA+IDpmaXJzdC1jaGlsZCA+IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgfVxcclxcbiAgLm5hdiA+IDpmaXJzdC1jaGlsZCBzdmcge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYgPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC50b2RheS1maXJzdCB7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIC50b2RheS1zZWMge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnRvZGF5LWZpcnN0IGJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogOTYlO1xcclxcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxyXFxuICB9XFxyXFxuICAudmlzaWJsZSB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIENsZWFyKHRhYjEsIHRhYjIpIHtcclxuICB0YWIxLmlkID0gJ2FjdGl2ZSc7XHJcbiAgdGFiMi5pZCA9ICdpbmFjdGl2ZSc7XHJcbiAgLy8gdGFiMy5pZCA9ICdpbmFjdGl2ZSc7XHJcbiAgLy8gdGFiNC5pZCA9ICdpbmFjdGl2ZSc7XHJcbiAgLy8gdGFiNS5pZCA9ICdpbmFjdGl2ZSc7XHJcbiAgLy8gdGFiNi5pZCA9ICdpbmFjdGl2ZSc7XHJcbiAgLy8gdGFiNy5pZCA9ICdpbmFjdGl2ZSc7XHJcbiAgLy8gdGFiOC5pZCA9ICdpbmFjdGl2ZSc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEFjdGl2ZSAodGFiMSwgdGFiMikge1xyXG4gIHRhYjEuaWQgPSAncHJlc2VudCc7XHJcbiAgdGFiMi5pZCA9ICdhYnNlbnQnO1xyXG59IiwiaW1wb3J0IGltYWdlIGZyb20gJy4uLy4uL2ltYWdlcy9tZW51LWRvd24uc3ZnJztcclxuaW1wb3J0IGltYWdlMiBmcm9tICcuLi8uLi9pbWFnZXMvbWVudS11cC5zdmcnO1xyXG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uLy4uL2ltYWdlcy9jaXJjbGUtb3V0bGluZS5zdmcnXHJcbmltcG9ydCBpbWFnZTQgZnJvbSAnLi4vLi4vaW1hZ2VzL2NpcmNsZS5zdmcnO1xyXG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XHJcbmltcG9ydCB7IFNhdmUgfSBmcm9tICcuLi91dGlscy9zYXZlX3ZhbHVlJztcclxuZXhwb3J0IGZ1bmN0aW9uIHRhYlRvZGF5IChvYmopIHtcclxuICBjb25zdCBkaXZQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXktdG9kbycpO1xyXG4gIGNvbnN0IHRhc2tEcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgZGl2Q2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gIGNvbnN0IHN2Z0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgZG9uZUltYWdlID0gbmV3IEltYWdlO1xyXG5cclxuICB0YXNrRHJvcC5pZCA9ICd0YXNrLWRyb3AnO1xyXG4gIHAxLmNsYXNzTGlzdC5hZGQoJ2lkZW50aWZ5Jyk7XHJcbiAgcDEudGV4dENvbnRlbnQgPSBgTXkgbGlzdHMgPiAke29iai5saXN0fWA7XHJcbiAgaWYgKG9iai5kb25lID09PSBmYWxzZSkge1xyXG4gICAgZG9uZUltYWdlLnNyYyA9IGltYWdlMztcclxuICAgIGRpdkNoaWxkLmNsYXNzTmFtZSA9ICdkaXZDaGlsZCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbmVJbWFnZS5zcmMgPSBpbWFnZTQ7XHJcbiAgICBkaXZDaGlsZC5jbGFzc05hbWUgPSAnZG9uZSc7XHJcbiAgfVxyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcclxuICB0YXNrRHJvcC5hcHBlbmRDaGlsZChwMSk7XHJcbiAgc3ZnSW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgc3ZnSW1hZ2UuY2xhc3NOYW1lID0gJ3N2Z0ltYWdlJztcclxuICBkaXZDaGlsZC5hcHBlbmRDaGlsZChzdmdJbWFnZSk7XHJcbiAgZGl2Q2hpbGQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBkb25lSW1hZ2UuY2xhc3NOYW1lID0gJ2RvbmVJbWFnZSc7XHJcbiAgZGl2Q2hpbGQuYXBwZW5kQ2hpbGQoZG9uZUltYWdlKTtcclxuICB0YXNrRHJvcC5hcHBlbmRDaGlsZChkaXZDaGlsZCk7XHJcbiAgcDIuY2xhc3NOYW1lID0gJ3RpbWVyJztcclxuICBpZiAoVGltZS50aW1lRGlmZmVyZW5jZShvYmouZHVlKSAhPT0gJ2xlc3MnKSB7XHJcbiAgICBwMi50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xyXG4gICAgZG9uZUltYWdlLnNyYyA9IGltYWdlMztcclxuICAgIGRpdkNoaWxkLmNsYXNzTmFtZSA9ICdkaXZDaGlsZCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHAyLnRleHRDb250ZW50ID0gJ092ZXJkdWUnO1xyXG4gICAgZG9uZUltYWdlLnNyYyA9IGltYWdlNDtcclxuICAgIGRpdkNoaWxkLmNsYXNzTmFtZSA9ICdkb25lJztcclxuICB9XHJcbiAgdGFza0Ryb3AuYXBwZW5kQ2hpbGQocDIpO1xyXG4gIGRpdlBhcmVudC5wcmVwZW5kKHRhc2tEcm9wKTtcclxuXHJcbiAgc3ZnSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChzdmdJbWFnZS5zcmMgPT09IGltYWdlKSB7XHJcbiAgICAgIHAzLnRleHRDb250ZW50ID0gb2JqLmRlc2M7XHJcbiAgICAgIHRhc2tEcm9wLnJlbW92ZUNoaWxkKHAyKTtcclxuICAgICAgcDMuY2xhc3NOYW1lID0gJ3AzJztcclxuICAgICAgc3ZnSW1hZ2Uuc3JjID0gaW1hZ2UyO1xyXG4gICAgICB0YXNrRHJvcC5hcHBlbmRDaGlsZChwMyk7XHJcbiAgICAgIHRhc2tEcm9wLmFwcGVuZENoaWxkKHAyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN2Z0ltYWdlLnNyYyA9IGltYWdlO1xyXG4gICAgICBwMy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBwMy5jbGFzc05hbWUgPSAnJztcclxuICAgICAgdGFza0Ryb3AucmVtb3ZlQ2hpbGQocDMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGRvbmVJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGRvbmVJbWFnZS5zcmMgPT09IGltYWdlMykge1xyXG4gICAgICBkb25lSW1hZ2Uuc3JjID0gaW1hZ2U0O1xyXG4gICAgICBkaXZDaGlsZC5jbGFzc05hbWUgPSAnZG9uZSc7XHJcbiAgICAgIFNhdmUudXBkYXRlKG9iai50aXRsZSwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocDIudGV4dENvbnRlbnQgIT09ICdPdmVyZHVlJykge1xyXG4gICAgICAgIGRvbmVJbWFnZS5zcmMgPSBpbWFnZTM7XHJcbiAgICAgICAgZGl2Q2hpbGQuY2xhc3NOYW1lID0gJ2RpdkNoaWxkJ1xyXG4gICAgICAgIFNhdmUudXBkYXRlKG9iai50aXRsZSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gb25seVRvZGF5IChvYmopIHtcclxuICBjb25zdCBkaXZQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dC1maXJzdCcpO1xyXG4gIGNvbnN0IHRhc2tEcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgZGl2Q2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gIGNvbnN0IHN2Z0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgZG9uZUltYWdlID0gbmV3IEltYWdlO1xyXG5cclxuICB0YXNrRHJvcC5pZCA9ICd0YXNrLWRyb3AnO1xyXG4gIHAxLmNsYXNzTGlzdC5hZGQoJ2lkZW50aWZ5Jyk7XHJcbiAgcDEudGV4dENvbnRlbnQgPSBgTXkgbGlzdHMgPiAke29iai5saXN0fWA7XHJcbiAgaWYgKG9iai5kb25lID09PSBmYWxzZSkge1xyXG4gICAgZG9uZUltYWdlLnNyYyA9IGltYWdlMztcclxuICAgIGRpdkNoaWxkLmNsYXNzTmFtZSA9ICdkaXZDaGlsZCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbmVJbWFnZS5zcmMgPSBpbWFnZTQ7XHJcbiAgICBkaXZDaGlsZC5jbGFzc05hbWUgPSAnZG9uZSc7XHJcbiAgfVxyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcclxuICB0YXNrRHJvcC5hcHBlbmRDaGlsZChwMSk7XHJcbiAgc3ZnSW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgc3ZnSW1hZ2UuY2xhc3NOYW1lID0gJ3N2Z0ltYWdlJztcclxuICBkaXZDaGlsZC5hcHBlbmRDaGlsZChzdmdJbWFnZSk7XHJcbiAgZGl2Q2hpbGQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBkb25lSW1hZ2UuY2xhc3NOYW1lID0gJ2RvbmVJbWFnZSc7XHJcbiAgZGl2Q2hpbGQuYXBwZW5kQ2hpbGQoZG9uZUltYWdlKTtcclxuICB0YXNrRHJvcC5hcHBlbmRDaGlsZChkaXZDaGlsZCk7XHJcbiAgcDIuY2xhc3NOYW1lID0gJ3RpbWVyJztcclxuICBwMi50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xyXG4gIGRvbmVJbWFnZS5zcmMgPSBpbWFnZTM7XHJcbiAgZGl2Q2hpbGQuY2xhc3NOYW1lID0gJ2RpdkNoaWxkJztcclxuICB0YXNrRHJvcC5hcHBlbmRDaGlsZChwMik7XHJcbiAgZGl2UGFyZW50LnByZXBlbmQodGFza0Ryb3ApO1xyXG5cclxuICBzdmdJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHN2Z0ltYWdlLnNyYyA9PT0gaW1hZ2UpIHtcclxuICAgICAgcDMudGV4dENvbnRlbnQgPSBvYmouZGVzYztcclxuICAgICAgdGFza0Ryb3AucmVtb3ZlQ2hpbGQocDIpO1xyXG4gICAgICBwMy5jbGFzc05hbWUgPSAncDMnO1xyXG4gICAgICBzdmdJbWFnZS5zcmMgPSBpbWFnZTI7XHJcbiAgICAgIHRhc2tEcm9wLmFwcGVuZENoaWxkKHAzKTtcclxuICAgICAgdGFza0Ryb3AuYXBwZW5kQ2hpbGQocDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ZnSW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgICAgIHAzLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIHAzLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICB0YXNrRHJvcC5yZW1vdmVDaGlsZChwMyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9uZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9uZUltYWdlLnNyYyA9PT0gaW1hZ2UzKSB7XHJcbiAgICAgIGRvbmVJbWFnZS5zcmMgPSBpbWFnZTQ7XHJcbiAgICAgIGRpdkNoaWxkLmNsYXNzTmFtZSA9ICdkb25lJztcclxuICAgICAgU2F2ZS51cGRhdGUob2JqLnRpdGxlLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwMi50ZXh0Q29udGVudCAhPT0gJ092ZXJkdWUnKSB7XHJcbiAgICAgICAgZG9uZUltYWdlLnNyYyA9IGltYWdlMztcclxuICAgICAgICBkaXZDaGlsZC5jbGFzc05hbWUgPSAnZGl2Q2hpbGQnXHJcbiAgICAgICAgU2F2ZS51cGRhdGUob2JqLnRpdGxlLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVF1b3RlIChxdW90ZSkge1xyXG4gIGNvbnN0IGFjdGlvblF1b3RlcyA9IFtcclxuICAgIFwiU3RhcnQgc21hbGwsIGRyZWFtIGJpZy5cIixcclxuICAgIFwiVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvcmRpbmFyeSBhbmQgZXh0cmFvcmRpbmFyeSBpcyB0aGF0IGxpdHRsZSBleHRyYS5cIixcclxuICAgIFwiRXZlcnkgc3RyaWtlIGJyaW5ncyBtZSBjbG9zZXIgdG8gdGhlIG5leHQgaG9tZSBydW4uXCIsXHJcbiAgICBcIkRvbid0IHdhaXQgZm9yIHRoZSBwZXJmZWN0IG1vbWVudCwgdGFrZSB0aGUgbW9tZW50IGFuZCBtYWtlIGl0IHBlcmZlY3QuXCIsXHJcbiAgICBcIlRoZSBqb3VybmV5IG9mIGEgdGhvdXNhbmQgbWlsZXMgYmVnaW5zIHdpdGggYSBzaW5nbGUgc3RlcC5cIixcclxuICAgIFwiVGhlIGJlc3Qgd2F5IHRvIGdldCBzdGFydGVkIGlzIHRvIHF1aXQgdGFsa2luZyBhbmQgYmVnaW4gZG9pbmcuXCIsXHJcbiAgICBcIkZvY3VzIG9uIHByb2dyZXNzLCBub3QgcGVyZmVjdGlvbi5cIixcclxuICAgIFwiTWFrZSBlYWNoIGRheSB5b3VyIG1hc3RlcnBpZWNlLlwiLFxyXG4gICAgXCJEb24ndCBsZXQgeWVzdGVyZGF5IHRha2UgdXAgdG9vIG11Y2ggb2YgdG9kYXkuXCIsXHJcbiAgICBcIlRoZSBvbmx5IGxpbWl0IHRvIG91ciByZWFsaXphdGlvbiBvZiB0b21vcnJvdyB3aWxsIGJlIG91ciBkb3VidHMgb2YgdG9kYXkuXCIsXHJcbiAgICBcIkl0IGlzIGR1cmluZyBvdXIgZGFya2VzdCBtb21lbnRzIHRoYXQgd2UgbXVzdCBmb2N1cyB0byBzZWUgdGhlIGxpZ2h0LlwiLFxyXG4gICAgXCJCZWxpZXZlIHlvdSBjYW4gYW5kIHlvdSdyZSBoYWxmd2F5IHRoZXJlLlwiLFxyXG4gICAgXCJUaGUgYmVzdCB3YXkgdG8gcHJlZGljdCB5b3VyIGZ1dHVyZSBpcyB0byBjcmVhdGUgaXQuXCIsXHJcbiAgICBcIkRlZmVhdCBpcyBub3QgdGhlIG9wcG9zaXRlIG9mIHN1Y2Nlc3MuIEl0J3MgcGFydCBvZiBpdC5cIixcclxuICAgIFwiWW91IGFyZSBuZXZlciB0b28gb2xkIHRvIHNldCBhbm90aGVyIGdvYWwgb3IgdG8gZHJlYW0gYSBuZXcgZHJlYW0uXCIsXHJcbiAgICBcIkFjdGlvbiBpcyB0aGUgZm91bmRhdGlvbmFsIGtleSB0byBhbGwgc3VjY2Vzcy5cIixcclxuICAgIFwiRGlzY2lwbGluZSBpcyB0aGUgYnJpZGdlIGJldHdlZW4gZ29hbHMgYW5kIGFjY29tcGxpc2htZW50cy5cIixcclxuICAgIFwiVGhlIHBhdGggdG8gc3VjY2VzcyBpcyBwYXZlZCB3aXRoIGFjdGlvbiwgbm90IGV4Y3VzZXMuXCIsXHJcbiAgICBcIlByb2NyYXN0aW5hdGlvbiBpcyB0aGUgdGhpZWYgb2YgdGltZS5cIixcclxuICAgIFwiRG9uJ3QgbGV0IHRoZSBmZWFyIG9mIHN0cmlraW5nIG91dCBrZWVwIHlvdSBmcm9tIHBsYXlpbmcgdGhlIGdhbWUuXCIsXHJcbiAgICBcIlByb2dyZXNzLCBub3QgcGVyZmVjdGlvbiwgaXMgdGhlIGtleSB0byBzdWNjZXNzLlwiLFxyXG4gICAgXCJCaWcgZ29hbHMgcmVxdWlyZSBzbWFsbCBzdGVwcy5cIixcclxuICAgIFwiVGhlIG9ubHkgcGVyc29uIHlvdSBhcmUgZGVzdGluZWQgdG8gYmVjb21lIGlzIHRoZSBwZXJzb24geW91IGRlY2lkZSB0byBiZS5cIixcclxuICAgIFwiWW91ciBhY3Rpb25zIHNwZWFrIHNvIGxvdWRseSwgSSBjYW4ndCBoZWFyIHdoYXQgeW91J3JlIHNheWluZy5cIixcclxuICAgIFwiV2hhdCB5b3UgZG8gc3BlYWtzIHNvIGxvdWQgdGhhdCBJIGNhbid0IGhlYXIgd2hhdCB5b3Ugc2F5LlwiLFxyXG4gICAgXCJJdCBpcyBub3Qgd2hhdCBoYXBwZW5zIHRvIHlvdSB0aGF0IG1hdHRlcnMsIGJ1dCBob3cgeW91IHJlYWN0IHRvIHdoYXQgaGFwcGVucyB0byB5b3UuXCIsXHJcbiAgICBcIlRoZSB0cnV0aCBvZiBhIG1hbiBpcyBub3Qgd2hhdCBoZSBpcyBzYWlkIHRvIGJlLCBidXQgd2hhdCBoZSBkb2VzLlwiLFxyXG4gICAgXCJDaGFyYWN0ZXIgaXMgd2hhdCB5b3UgZG8gd2hlbiBubyBvbmUgaXMgd2F0Y2hpbmcuXCIsXHJcbiAgICBcIlRoZSBiZXN0IHJldmVuZ2UgaXMgbWFzc2l2ZSBzdWNjZXNzLlwiLFxyXG4gICAgXCJUaGUgb25seSB3YXkgdG8gZG8gZ3JlYXQgd29yayBpcyB0byBsb3ZlIHdoYXQgeW91IGRvLlwiLFxyXG4gICAgXCJJZiB5b3UgY2FuIGRyZWFtIGl0LCB5b3UgY2FuIGRvIGl0LlwiLFxyXG4gICAgXCJUaGVyZSBhcmUgbm8gc2hvcnRjdXRzIHRvIHN1Y2Nlc3MuIEl0IHRha2VzIGhhcmQgd29yayBhbmQgZGVkaWNhdGlvbi5cIixcclxuICAgIFwiVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBzdWNjZXNzZnVsIHBlb3BsZSBhbmQgb3RoZXJzIGlzIG5vdCBhIGxhY2sgb2Ygc3RyZW5ndGgsIG5vdCBhIGxhY2sgb2Yga25vd2xlZGdlLCBidXQgcmF0aGVyIGEgbGFjayBvZiB3aWxsLlwiLFxyXG4gICAgXCJUaGUgbWFuIHdobyBtb3ZlcyBhIG1vdW50YWluIGJlZ2lucyBieSBjYXJyeWluZyBhd2F5IHNtYWxsIHN0b25lcy5cIixcclxuICAgIFwiWW91IGRvbid0IGhhdmUgdG8gYmUgZ3JlYXQgdG8gc3RhcnQsIGJ1dCB5b3UgaGF2ZSB0byBzdGFydCB0byBiZSBncmVhdC5cIixcclxuICAgIFwiVGhlIHNpZGUgaHVzdGxlIGlzIHRoZSBuZXcgaHVzdGxlLlwiLFxyXG4gICAgXCJUaGUgb25seSBwZXJzb24geW91IGFyZSBkZXN0aW5lZCB0byBjb21wZXRlIHdpdGggaXMgdGhlIHBlcnNvbiB5b3Ugd2VyZSB5ZXN0ZXJkYXkuXCIsXHJcbiAgICBcIlN1Y2Nlc3MgaXMgbm90IGZpbmFsLCBmYWlsdXJlIGlzIG5vdCBmYXRhbDogaXQgaXMgdGhlIGNvdXJhZ2UgdG8gY29udGludWUgdGhhdCBjb3VudHMuXCIsXHJcbiAgICBcIkl0J3Mgbm90IGFib3V0IGhvdyBtYW55IHRpbWVzIHlvdSBmYWxsLCBidXQgaG93IG1hbnkgdGltZXMgeW91IGdldCBiYWNrIHVwLlwiLFxyXG4gICAgXCJUaGUgb25seSB3YXkgdG8gZG8gZ3JlYXQgd29yayBpcyB0byBsb3ZlIHdoYXQgeW91IGRvLiBJZiB5b3UgaGF2ZW4ndCBmb3VuZCBpdCB5ZXQsIGtlZXAgbG9va2luZy4gRG9uJ3Qgc2V0dGxlLlwiLFxyXG4gICAgXCJTdGF5IGZvb2xpc2gsIHN0YXkgaHVuZ3J5LlwiLFxyXG4gICAgXCJUaGUgbWluZCBpcyBldmVyeXRoaW5nLiBXaGF0IHlvdSB0aGluayB5b3UgYmVjb21lLlwiLFxyXG4gICAgXCJUaGUgdHdvIG1vc3QgaW1wb3J0YW50IGRheXMgaW4geW91ciBsaWZlIGFyZSB0aGUgZGF5IHlvdSBhcmUgYm9ybiBhbmQgdGhlIGRheSB5b3UgZmluZCBvdXQgd2h5LlwiLFxyXG4gICAgXCJXaGV0aGVyIHlvdSB0aGluayB5b3UgY2FuIG9yIHlvdSB0aGluayB5b3UgY2FuJ3QsIHlvdSdyZSByaWdodC5cIixcclxuICAgIFwiVGhlIGJlc3QgdGltZSB0byBwbGFudCBhIHRyZWUgd2FzIDIwIHllYXJzIGFnby4gVGhlIHNlY29uZCBiZXN0IHRpbWUgaXMgbm93LlwiLFxyXG4gICAgXCJPdXIgZ3JlYXRlc3QgZ2xvcnkgaXMgbm90IGluIG5ldmVyIGZhbGxpbmcsIGJ1dCBpbiByaXNpbmcgZXZlcnkgdGltZSB3ZSBmYWxsLlwiLFxyXG4gICAgXCJUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9yZGluYXJ5IGFuZCBleHRyYW9yZGluYXJ5IGlzIHRoYXQgbGl0dGxlIGV4dHJhLlwiLFxyXG4gICAgXCJEb24ndCBiZSBhZnJhaWQgdG8gZ2l2ZSB1cCB0aGUgZ29vZCB0byBnbyBmb3IgdGhlIGdyZWF0LlwiLFxyXG4gICAgXCJJZiB5b3UncmUgbm90IGVtYmFycmFzc2VkIGJ5IHRoZSBmaXJzdCB2ZXJzaW9uIG9mIHlvdXIgcHJvZHVjdCwgeW91J3ZlIGxhdW5jaGVkIHRvbyBsYXRlLlwiLFxyXG4gICAgXCJEb25lIGlzIGJldHRlciB0aGFuIHBlcmZlY3QuXCIsXHJcbiAgICBcIllvdSBtaXNzIDEwMCUgb2YgdGhlIHNob3RzIHlvdSBkb24ndCB0YWtlLlwiLFxyXG4gICAgXCJUaGUgb25seSB3YXkgdG8gZG8gZ3JlYXQgd29yayBpcyB0byBsb3ZlIHdoYXQgeW91IGRvLlwiLFxyXG4gICAgXCJJJ20gbm90IGEgYnVzaW5lc3NtYW4uIEknbSBhIGJ1c2luZXNzLCBtYW4uXCIsXHJcbiAgICBcIkEgZ29hbCB3aXRob3V0IGEgcGxhbiBpcyBqdXN0IGEgd2lzaC5cIixcclxuICAgIFwiVGhlIGtleSBpcyB0byBzZXQgcmVhbGlzdGljIGdvYWxzIGFuZCB0aGVuIHdvcmsgbGlrZSBoZWxsIHRvIGFjaGlldmUgdGhlbS5cIixcclxuICAgIFwiVGhlIG1pbmQgaXMgZXZlcnl0aGluZy4gV2hhdCB5b3UgdGhpbmsgeW91IGJlY29tZS5cIixcclxuICAgIFwiVGhlIGJlc3QgcmV2ZW5nZSBpcyBtYXNzaXZlIHN1Y2Nlc3MuXCIsXHJcbiAgICBcIlRoZSBvbmx5IHdheSB0byBkbyBncmVhdCB3b3JrIGlzIHRvIGxvdmUgd2hhdCB5b3UgZG8uXCIsXHJcbiAgICBcIklmIHlvdSBjYW4gZHJlYW0gaXRcIlxyXG4gICAgXVxyXG4gIFxyXG4gIHF1b3RlLnRleHRDb250ZW50ID0gYWN0aW9uUXVvdGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFjdGlvblF1b3Rlcy5sZW5ndGgpXSAgO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHRlc3RUZXh0KGZuYW1lKSB7XHJcbiAgaWYgKGZuYW1lLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICBmbmFtZS5pZCA9IFwidmFsaWRcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hlY2tGbkVycm9yKGZuYW1lKTtcclxuICB9O1xyXG59XHJcbmNvbnN0IGNoZWNrRm5FcnJvciA9IChmbmFtZSkgPT4ge1xyXG4gIGlmIChmbmFtZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIGZuYW1lLmlkID0gJ2ludmFsaWQnO1xyXG4gIH0gZWxzZSBpZiAoZm5hbWUudmFsaWRpdHkudG9vTG9uZykge1xyXG4gICAgZm5hbWUuaWQgPSAnaW52YWxpZCc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3REYXRlKGRhdGUpIHtcclxuICBpZiAoZGF0ZS52YWx1ZSA9PT0gJycpIHtcclxuICAgIGRhdGUuaWQgPSAnaW52YWxpZCc7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIGlmICgobmV3IERhdGUoZGF0ZSkgPCBuZXcgRGF0ZSgpKSkge1xyXG4gICAgZGF0ZS5pZCA9ICdpbnZhbGlkJztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGF0ZS5pZCA9ICd2YWxpZCc7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0U2VsZWN0KG9wdGlvbikge1xyXG4gIGlmIChvcHRpb24udmFsdWUgPT09ICdTZWxlY3QgbGlzdCcpIHtcclxuICAgIG9wdGlvbi5pZCA9ICdpbnZhbGlkJztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgb3B0aW9uLmlkID0gJ3ZhbGlkJztcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RGb3JtICh0aXRsZSwgZGF0ZSwgb3B0aW9uKSB7XHJcbiAgaWYgKCF0aXRsZS52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgY2hlY2tGbkVycm9yKHRpdGxlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKCh0ZXN0RGF0ZShkYXRlKSA9PT0gZmFsc2UpKSB7XHJcbiAgICB0ZXN0RGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKCh0ZXN0U2VsZWN0KG9wdGlvbikgPT09IGZhbHNlKSkge1xyXG4gICAgdGVzdFNlbGVjdChvcHRpb24pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0iLCJpbXBvcnQgeyBvbmx5VG9kYXkgfSBmcm9tIFwiLi4vZG9tL2RvbS10b2RvXCI7XHJcbmltcG9ydCB7IFRpbWUgfSBmcm9tIFwiLi90aW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlyc3RTZXZlbkRheXMgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBzYXZlQXJyYXkgPSBbXTtcclxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpICYmIChzYXZlQXJyYXkubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICBzYXZlQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpO1xyXG4gICAgICBzYXZlQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoVGltZS50aW1lRGlmZmVyZW5jZShlbGVtZW50LmR1ZSkgPT09IFwiZXF1YWxcIikge1xyXG4gICAgICAgICAgb25seVRvZGF5KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoIHN0YXJ0IClcclxufSkoKTsiLCJpbXBvcnQgeyB0YWJUb2RheSB9IGZyb20gXCIuLi9kb20vZG9tLXRvZG9cIjtcclxuZXhwb3J0IGNvbnN0IFNhdmUgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBzYXZlQXJyYXkgPSBbXTtcclxuXHJcbiAgY29uc3Qgc3RhcnQgPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIGxpc3QpID0+IHtcclxuICAgIGNvbnN0IG9iaiA9IG5ldyBteU9iaih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgbGlzdCk7XHJcbiAgICB0YWJUb2RheShvYmopO1xyXG5cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSkge1xyXG4gICAgICBzYXZlQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpO1xyXG4gICAgICBzYXZlQXJyYXlbc2F2ZUFycmF5Lmxlbmd0aF0gPSBvYmo7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoc2F2ZUFycmF5KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzYXZlQXJyYXlbc2F2ZUFycmF5Lmxlbmd0aF0gPSBvYmo7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoc2F2ZUFycmF5KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBteU9iaiAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIGxpc3QpIHtcclxuICAgICAgY29uc3QgZHVlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcbiAgICAgIGR1ZURhdGUgPSBkdWUudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIGNvbnN0IGRvbmUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2MsIGR1ZSwgbGlzdCwgZHVlRGF0ZSwgZG9uZX07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHVwZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgbGV0IHNhdmVBcnJheSA9IFtdO1xyXG4gICAgc2F2ZUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKTtcclxuICAgIC8vbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG8nKTtcclxuICAgIHNhdmVBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIGVsZW1lbnQuZG9uZSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoc2F2ZUFycmF5KSk7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN0YXJ0LCB1cGRhdGUgfTtcclxufSkoKTsiLCJleHBvcnQgY29uc3QgVGltZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZGlzcGxheVRpbWUgPSAodXNlclRpbWUpID0+IHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgIGlmICgobm93ID49IDUpICYmIChub3cgPCAxMikpIHtcclxuICAgICAgdXNlclRpbWUudGV4dENvbnRlbnQgPSAnR29vZCBNb3JuaW5nLCAnO1xyXG4gICAgfSBlbHNlIGlmICgobm93ID49IDEyKSAmJiAobm93IDwgMTcpKSB7XHJcbiAgICAgIHVzZXJUaW1lLnRleHRDb250ZW50ID0gJ0dvb2QgQWZ0ZXJub29uLCAnO1xyXG4gICAgfSBlbHNlIGlmICgobm93ID49IDE3KSAmJiAobm93IDwgMjApKSB7XHJcbiAgICAgIHVzZXJUaW1lLnRleHRDb250ZW50ID0gJ0dvb2QgRXZlbmluZywgJztcclxuICAgIH0gZWxzZSBpZiAoKG5vdyA+PSAyMCkgJiYgKG5vdyA8PSAyMykpIHtcclxuICAgICAgdXNlclRpbWUudGV4dENvbnRlbnQgPSAnR29vZCBOaWdodCwgJztcclxuICAgIH0gZWxzZSBpZiAoKG5vdyA+PSAwKSAmJiAobm93IDwgNSkpIHtcclxuICAgICAgdXNlclRpbWUudGV4dENvbnRlbnQgPSAnR29vZCBOaWdodCwgJztcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgdGltZURpZmZlcmVuY2UgPSAodGltZTEpID0+IHtcclxuICAgIHRpbWUxID0gbmV3IERhdGUodGltZTEpO1xyXG4gICAgY29uc3QgdGltZTIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgaWYgKHRpbWUxID4gdGltZTIpIHtcclxuICAgICAgcmV0dXJuICdncmVhdGVyJztcclxuICAgIH0gZWxzZSBpZiAodGltZTEudG9EYXRlU3RyaW5nKCkgPT09IHRpbWUyLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgIHJldHVybiAnZXF1YWwnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdsZXNzJztcclxuICB9XHJcbiAgcmV0dXJuIHsgZGlzcGxheVRpbWUsIHRpbWVEaWZmZXJlbmNlIH1cclxufSkoKTsiLCJpbXBvcnQgeyBUaW1lIH0gZnJvbSBcIi4vdGltZVwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VRdW90ZSB9IGZyb20gXCIuLi9kb20vcXVvdGVcIjtcclxuaW1wb3J0IHsgU2F2ZSB9IGZyb20gXCIuL3NhdmVfdmFsdWVcIjtcclxuaW1wb3J0IHsgdGFiVG9kYXkgfSBmcm9tIFwiLi4vZG9tL2RvbS10b2RvXCI7XHJcbmltcG9ydCB7IHRlc3RTZWxlY3QsIHRlc3RUZXh0LCB0ZXN0Rm9ybSwgdGVzdERhdGUgfSBmcm9tIFwiLi9mb3JtLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZGF5ID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmbmFtZScpO1xyXG4gIGNvbnN0IHVzZXJUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWVyJyk7XHJcbiAgY29uc3QgdXNlclF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1b3RlJyk7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1hZGQnKTtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1mb3JtJyk7XHJcbiAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5ZZXMnKTtcclxuICBjb25zdCBjYW5jZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bk5vJyk7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcclxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuICBjb25zdCBteUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xyXG4gIGxldCBzYXZlQXJyYXkgPSBbXTtcclxuXHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gKGZuYW1lKSA9PiB7XHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IGZuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZm5hbWUuc2xpY2UoMSk7XHJcbiAgICBUaW1lLmRpc3BsYXlUaW1lKHVzZXJUaW1lKVxyXG4gICAgY2hhbmdlUXVvdGUodXNlclF1b3RlKTtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH0pXHJcbiAgICBjYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfSlcclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgIHRlc3RUZXh0KHRpdGxlKTtcclxuICAgIH0pXHJcbiAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgIHRlc3REYXRlKGR1ZURhdGUpO1xyXG4gICAgfSlcclxuICAgIG15TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0ZXN0U2VsZWN0KG15TGlzdCk7XHJcbiAgICB9KVxyXG4gICAgYWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0ZXN0Rm9ybSh0aXRsZSwgZHVlRGF0ZSwgbXlMaXN0KSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIFNhdmUuc3RhcnQodGl0bGUudmFsdWUsIGRlc2MudmFsdWUsIGR1ZURhdGUudmFsdWUsIG15TGlzdC52YWx1ZSk7XHJcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcclxuICAgICAgICBkZXNjLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIG15TGlzdC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSAmJiAoc2F2ZUFycmF5Lmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgc2F2ZUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKTtcclxuICAgICAgZm9yIChsZXQgb2JqID0gMDsgb2JqIDwgc2F2ZUFycmF5Lmxlbmd0aDsgb2JqKyspXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJUb2RheShzYXZlQXJyYXlbb2JqXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgc3RhcnQgfTtcclxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vY3NzL3Rhc2suY3NzJztcclxuaW1wb3J0IHsgVG9kYXkgfSBmcm9tICcuL3V0aWxzL3RvZGF5JztcclxuaW1wb3J0IHsgZmlyc3RTZXZlbkRheXMgfSBmcm9tICcuL3V0aWxzL25leHQtZGF5JztcclxuaW1wb3J0IHsgQ2xlYXIsIEFjdGl2ZSB9IGZyb20gJy4vZG9tL2NsZWFyJztcclxuXHJcbmNvbnN0IFRhc2sgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBsb2dpbkRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW5zJyk7XHJcbiAgbG9naW5EYXRhID0gSlNPTi5wYXJzZShsb2dpbkRhdGEpO1xyXG4gIGNvbnN0IGZuYW1lID0gbG9naW5EYXRhLmZuYW1lO1xyXG4gIGNvbnN0IGxuYW1lID0gbG9naW5EYXRhLmxuYW1lO1xyXG4gIGNvbnN0IGVtYWlsID0gbG9naW5EYXRhLmVtYWlsO1xyXG4gIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1uYW1lJyk7XHJcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluazEnKTtcclxuICBjb25zdCB0b2RheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xyXG4gIGNvbnN0IHNldmVuRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5rMicpO1xyXG4gIGNvbnN0IHNldmVuRGF5c1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LWRheXMnKTtcclxuXHJcbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgIENsZWFyKHRvZGF5VGFiLCBzZXZlbkRheXNUYWIpO1xyXG4gICAgICBBY3RpdmUodG9kYXksIHNldmVuRGF5cyk7XHJcbiAgICAgIHVzZXIudGV4dENvbnRlbnQgPSBgJHtmbmFtZX1gXHJcbiAgICAgIFRvZGF5LnN0YXJ0KGZuYW1lKTtcclxuICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgQ2xlYXIodG9kYXlUYWIsIHNldmVuRGF5c1RhYik7XHJcbiAgICAgICAgQWN0aXZlKHRvZGF5LCBzZXZlbkRheXMpO1xyXG4gICAgICAgIFRvZGF5LnN0YXJ0KGZuYW1lKTtcclxuICAgICAgfSlcclxuICAgICAgc2V2ZW5EYXlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIENsZWFyKHNldmVuRGF5c1RhYiwgdG9kYXlUYWIpO1xyXG4gICAgICAgIEFjdGl2ZShzZXZlbkRheXMsIHRvZGF5KTtcclxuICAgICAgICBmaXJzdFNldmVuRGF5cygpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHsgc3RhcnQgfTtcclxufSkoKTtcclxuVGFzay5zdGFydCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Hello, world!</h1>\r\n<ul>\r\n  <li>PianoTiles Game, It's a fun game build with Angular</li>\r\n  <li> <a href='/PianoTiles'>Start Play</a> </li>\r\n  <li>Check source code on <a href='https://github.com/MhozaifaA/PianoTiles/tree/master/ClientApp/src'>GitHub</a></li>\r\n</ul>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">PianoTiles</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex justify-content-end\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/pianoTiles']\">PianoTiles</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pianoTiles/pianoTiles.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pianoTiles/pianoTiles.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPianoTilesPianoTilesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<h4>\r\n  ⨀ press F / G / K / L / Enter / Mouse\r\n</h4>\r\n\r\n<button tabindex=\"10\"  class=\"mx-1 btn btn-secondary\" (click)=\"start()\">{{textBtn()}}</button>\r\n\r\n<button (click)=\"flipSound()\" [ngClass]=\"sound? 'mx-1 btn btn-warning' : 'mx-1 btn btn-outline-warning'\">Sound</button>\r\n\r\n<span  class=\"m-3\">key pressed : <strong>{{keyPressed}}</strong> </span>\r\n<span class=\"m-3\">Speed-Delay : <strong>{{speedDelay}}</strong> </span>\r\n<span class=\"m-3\">Score : <strong>{{score}}</strong> </span>\r\n<span class=\"m-3\">Decrement-Delay : <strong>{{decrementDelay}}</strong> </span>\r\n<span class=\"m-3\">Tile-To-Delay : <strong>{{tileDelay}}</strong> </span>\r\n\r\n<div  class=\"board\" >\r\n\r\n  <div (click)=\"handelBoardClick('one')\" class=\"column\" [style.background]=\"columnOneLost\" [style.animation]=\"! isStart?'unset':'color_change_col 60s infinite alternate'\" >\r\n      <app-tile (onTile)=\"handelMouseTile($event)\"  *ngFor=\"let item of tiles | filterColumn:filterOne\" [value]=\"item\" [speed]=\"speedDelay\" ></app-tile>\r\n  </div>\r\n\r\n  <div (click)=\"handelBoardClick('two')\" class=\"column\" [style.background]=\"columnTwoLost\"  [style.animation]=\"! isStart?'unset':'color_change_col 60s infinite alternate'\">\r\n      <app-tile (onTile)=\"handelMouseTile($event)\"  *ngFor=\"let item of tiles| filterColumn:filterTwo\" [value]=\"item\"  [speed]=\"speedDelay\"></app-tile>\r\n  </div>\r\n\r\n  <div (click)=\"handelBoardClick('three')\" class=\"column\" [style.background]=\"columnThreeLost\"  [style.animation]=\"! isStart?'unset':'color_change_col 60s infinite alternate'\">\r\n      <app-tile  (onTile)=\"handelMouseTile($event)\" *ngFor=\"let item of tiles| filterColumn:filterThree\" [value]=\"item\"  [speed]=\"speedDelay\"></app-tile>\r\n  </div>\r\n\r\n  <div (click)=\"handelBoardClick('four')\" class=\"column\"  [style.background]=\"columnFourLost\"  [style.animation]=\"! isStart?'unset':'color_change_col 60s infinite alternate'\">\r\n      <app-tile  (onTile)=\"handelMouseTile($event)\" *ngFor=\"let item of tiles| filterColumn:filterFour\" [value]=\"item\"  [speed]=\"speedDelay\"></app-tile>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--<div class=\"column\">\r\n  <div *ngIf=\"tiles.one.exist\" [@tileOne]=tiles.one.state class=\"tile\" [attr.tile]=\"1\" (@tileOne.start)=\"animationStarted($event)\"\r\n       (@tileOne.done)=\"animationDone($event)\"></div>\r\n</div>-->\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _pianoTiles_pianoTiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pianoTiles/pianoTiles.component */
    "./src/app/pianoTiles/pianoTiles.component.ts");
    /* harmony import */


    var _pianoTiles_tile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pianoTiles/tile.component */
    "./src/app/pianoTiles/tile.component.ts");
    /* harmony import */


    var _pipes_filterColumn_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/filterColumn.pipe */
    "./src/app/pipes/filterColumn.pipe.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pianoTiles_pianoTiles_component__WEBPACK_IMPORTED_MODULE_8__["PianoTilesComponent"], _pipes_filterColumn_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterColumn"], _pianoTiles_tile_component__WEBPACK_IMPORTED_MODULE_9__["TileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        pathMatch: 'full'
      }, {
        path: 'pianoTiles',
        component: _pianoTiles_pianoTiles_component__WEBPACK_IMPORTED_MODULE_8__["PianoTilesComponent"]
      }])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);

        this.isExpanded = false;
      }

      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/nav-menu/nav-menu.component.css"))["default"]]
    })], NavMenuComponent);
    /***/
  },

  /***/
  "./src/app/pianoTiles/pianoTiles.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pianoTiles/pianoTiles.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPianoTilesPianoTilesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.board {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-width: 10px;\r\n  border-color: black;\r\n  border: inset;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  overflow:hidden\r\n}\r\n\r\n\r\n.column {\r\n  width: 100px;\r\n  height: 600px;\r\n  background: lightblue;\r\n  margin: 1px;\r\n  text-align: center;\r\n  position: relative;\r\n  -webkit-animation: color_change_col 60s infinite alternate;\r\n          animation: color_change_col 60s infinite alternate;\r\n}\r\n\r\n\r\n.tile {\r\n  width: 100%;\r\n  height: 168px;\r\n  background: black;\r\n  margin: auto;\r\n  position: absolute;\r\n  /*  top: -168px;*/\r\n  box-shadow: inset 0 0 20px lightseagreen;\r\n  border-color: transparent;\r\n  border-width: thin;\r\n  border-style: solid;\r\n  /* transition-dur:50ms;*/\r\n  transition-property: all;\r\n  transition-timing-function: linear;\r\n  color: white;\r\n  color: darkslategrey; /*2f4f4f52*/\r\n  font-size: 1vw;\r\n  line-height: 168px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  text-align: center;\r\n/*  animation: color_change_tile 0.4s infinite alternate;*/\r\n}\r\n\r\n\r\n* {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n\r\n.tile:hover {\r\n    box-shadow: inset 0 0 40px lightseagreen;\r\n  }\r\n\r\n\r\n@-webkit-keyframes color_change_tile {\r\n    from {\r\n    color: darkslategrey;\r\n  }\r\n  to {\r\n    color: #2f4f4f52;\r\n  }\r\n}\r\n\r\n\r\n@keyframes color_change_tile {\r\n    from {\r\n    color: darkslategrey;\r\n  }\r\n  to {\r\n    color: #2f4f4f52;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes color_change_col {\r\n\r\n\r\n  0% {\r\n    background: lightblue;\r\n  }\r\n\r\n  10% {\r\n    background: lightcoral;\r\n  }\r\n\r\n  20% {\r\n    background: lightgoldenrodyellow;\r\n  }\r\n\r\n  30% {\r\n    background-color: lightpink;\r\n  }\r\n\r\n  40% {\r\n    background: lightgreen;\r\n  }\r\n\r\n  50% {\r\n    background: lightsalmon;\r\n  }\r\n\r\n  60% {\r\n    background: lightseagreen;\r\n  }\r\n  70% {\r\n    background: lightskyblue;\r\n  }\r\n  80% {\r\n    background: lightsteelblue;\r\n  }\r\n  90% {\r\n    background: lightyellow;\r\n  }\r\n  100% {\r\n    background: lightblue;\r\n  }\r\n  \r\n}\r\n\r\n\r\n@keyframes color_change_col {\r\n\r\n\r\n  0% {\r\n    background: lightblue;\r\n  }\r\n\r\n  10% {\r\n    background: lightcoral;\r\n  }\r\n\r\n  20% {\r\n    background: lightgoldenrodyellow;\r\n  }\r\n\r\n  30% {\r\n    background-color: lightpink;\r\n  }\r\n\r\n  40% {\r\n    background: lightgreen;\r\n  }\r\n\r\n  50% {\r\n    background: lightsalmon;\r\n  }\r\n\r\n  60% {\r\n    background: lightseagreen;\r\n  }\r\n  70% {\r\n    background: lightskyblue;\r\n  }\r\n  80% {\r\n    background: lightsteelblue;\r\n  }\r\n  90% {\r\n    background: lightyellow;\r\n  }\r\n  100% {\r\n    background: lightblue;\r\n  }\r\n  \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlhbm9UaWxlcy9waWFub1RpbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1o7QUFDRjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwREFBa0Q7VUFBbEQsa0RBQWtEO0FBQ3BEOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osb0JBQW9CLEVBQUUsV0FBVztFQUNqQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIsMERBQTBEO0FBQzFEOzs7QUFDQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7O0FBQ0U7SUFDRSx3Q0FBd0M7RUFDMUM7OztBQUVBO0lBQ0U7SUFDQSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOzs7QUFQRTtJQUNFO0lBQ0Esb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7O0FBRUE7OztFQUdFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUY7OztBQTNDQTs7O0VBR0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BpYW5vVGlsZXMvcGlhbm9UaWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IGluc2V0O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6aGlkZGVuXHJcbn1cclxuXHJcblxyXG4uY29sdW1uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IGNvbG9yX2NoYW5nZV9jb2wgNjBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLnRpbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTY4cHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiAgdG9wOiAtMTY4cHg7Ki9cclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCBsaWdodHNlYWdyZWVuO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLyogdHJhbnNpdGlvbi1kdXI6NTBtczsqL1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JleTsgLyoyZjRmNGY1MiovXHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDE2OHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLyogIGFuaW1hdGlvbjogY29sb3JfY2hhbmdlX3RpbGUgMC40cyBpbmZpbml0ZSBhbHRlcm5hdGU7Ki9cclxufVxyXG4qIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4gIC50aWxlOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0MHB4IGxpZ2h0c2VhZ3JlZW47XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGNvbG9yX2NoYW5nZV90aWxlIHtcclxuICAgIGZyb20ge1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGNvbG9yOiAjMmY0ZjRmNTI7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbG9yX2NoYW5nZV9jb2wge1xyXG5cclxuXHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIH1cclxuXHJcbiAgMTAlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRzYWxtb247XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRzZWFncmVlbjtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2t5Ymx1ZTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c3RlZWxibHVlO1xyXG4gIH1cclxuICA5MCUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pianoTiles/pianoTiles.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pianoTiles/pianoTiles.component.ts ***!
    \****************************************************/

  /*! exports provided: PianoTilesComponent */

  /***/
  function srcAppPianoTilesPianoTilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PianoTilesComponent", function () {
      return PianoTilesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _util_columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/columns */
    "./src/app/util/columns.ts");
    /* harmony import */


    var _util_help_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/help-methods */
    "./src/app/util/help-methods.ts");
    /* harmony import */


    var _util_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../util/Tile */
    "./src/app/util/Tile.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PianoTilesComponent = /*#__PURE__*/function () {
      function PianoTilesComponent() {
        var _this = this;

        _classCallCheck(this, PianoTilesComponent);

        this.backgroundAudio = new Audio("../../../PianoTiles/assets/sound/From Nothing To Everything.mp3");
        this.tiles = [];
        this.maxtop = 592;
        this.defaultSpeedDelay = 50;
        this.keyEnter = 13;
        this.keyF = 102;
        this.keyG = 103;
        this.keyK = 107;
        this.keyL = 108;
        this.isStart = false;
        this.sound = true;
        this.step = 10;
        this.decrementDelay = 1;
        this.tileDelay = 5;
        this.score = 0;
        this.defaultColumnBg = "lightblue";
        this.lostColumnBg = "palevioletred";
        this.filterOne = {
          column: _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].one
        };
        this.filterTwo = {
          column: _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].two
        };
        this.filterThree = {
          column: _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].three
        };
        this.filterFour = {
          column: _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].four
        };

        this.textBtn = function () {
          return _this.isStart ? 'Restart' : 'Start';
        };

        this.flipSound = function () {
          _this.sound = !_this.sound;

          if (_this.sound) {
            _this.backgroundAudio.play();
          } else {
            _this.backgroundAudio.pause();
          }
        };
      }

      _createClass(PianoTilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.backgroundAudio.load();
          this.backgroundAudio.loop = true;
        }
      }, {
        key: "start",
        value: function start() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var isGenerate;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isStart = !this.isStart;
                    this.reset();

                  case 2:
                    if (!this.isStart) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 5;
                    return Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.speedDelay);

                  case 5:
                    isGenerate = this.move();
                    if (isGenerate) this.generate();
                    _context.next = 2;
                    break;

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "move",
        value: function move() {
          var isGenerate = false;

          if (this.tiles.length === 0) {
            isGenerate = true;
          }

          for (var i = 0; i < this.tiles.length; i++) {
            var tile = this.tiles[i];

            if (tile.top + this.step >= this.maxtop) {
              this.lost();
              break;
            } else {
              tile.top += this.step;

              if (tile.top > 0 && !tile.getCross()) {
                isGenerate = true;
                tile.setCross();
              }
            }
          }

          return isGenerate;
        }
      }, {
        key: "generate",
        value: function generate() {
          var isTwice = Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomNextInt"])(0, 10) >= 8 ? true : false;
          var tile = new _util_Tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomColumn"])());
          this.tiles.push(tile);

          if (isTwice) {
            var spilcol = Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomColumn"])();
            var sameId = tile.row;

            while (tile.column == spilcol) {
              spilcol = Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomColumn"])();
            }

            tile = new _util_Tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](spilcol);
            tile.row = sameId;
            this.tiles.push(tile);
          }

          if (tile.row % this.tileDelay == 0) {
            this.speedDelay -= this.decrementDelay;
          }

          if (this.speedDelay < 15) {
            this.speedDelay = Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomNextInt"])(15, 50);
            this.decrementDelay = Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomNextInt"])(1, 4);
            this.tileDelay = Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomNextInt"])(5, 20);
          }
        }
      }, {
        key: "sameRow",
        value: function sameRow(first, secound, keycode) {
          if (keycode === Object(_util_columns__WEBPACK_IMPORTED_MODULE_2__["getKeyCode"])(first.column)) {
            this.tiles.shift();
            this.score++;
          } else if (keycode === Object(_util_columns__WEBPACK_IMPORTED_MODULE_2__["getKeyCode"])(secound.column)) {
            var index = this.tiles.indexOf(secound, 1);

            if (index > -1) {
              this.tiles.splice(index, 1);
            }

            this.score++;
          } else {
            this.lost(Object(_util_columns__WEBPACK_IMPORTED_MODULE_2__["getColumn"])(keycode));
          }
        }
      }, {
        key: "inRow",
        value: function inRow(first, keycode) {
          if (Object(_util_columns__WEBPACK_IMPORTED_MODULE_2__["getKeyCode"])(first.column) === keycode) {
            this.tiles.shift();
            this.score++;
          } else {
            this.lost(Object(_util_columns__WEBPACK_IMPORTED_MODULE_2__["getColumn"])(keycode));
          }
        }
      }, {
        key: "lost",
        value: function lost() {
          var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.isStart = false; // lost

          var col = this.tiles[0]; // delete this.tiles[0];

          this.flipColumnColor(column === null ? col.column : column);
          this.backgroundAudio.pause();
          console.log("lost");
        }
      }, {
        key: "isEnabelKeys",
        value: function isEnabelKeys(keycode) {
          var list = [this.keyF, this.keyG, this.keyK, this.keyL];
          return list.includes(keycode);
        }
      }, {
        key: "flipColumnColor",
        value: function flipColumnColor(column) {
          switch (column) {
            case _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].one:
              this.columnOneLost = this.lostColumnBg;
              break;

            case _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].two:
              this.columnTwoLost = this.lostColumnBg;
              break;

            case _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].three:
              this.columnThreeLost = this.lostColumnBg;
              break;

            case _util_columns__WEBPACK_IMPORTED_MODULE_2__["columns"].four:
              this.columnFourLost = this.lostColumnBg;
              break;
          }
        }
      }, {
        key: "playAudio",
        value: function playAudio() {
          if (this.sound) {
            var audio = new Audio();
            audio.src = "../../../PianoTiles/assets/sound/".concat(Object(_util_help_methods__WEBPACK_IMPORTED_MODULE_3__["randomNextInt"])(1, 24), ".wav");
            audio.load();
            audio.play();
          }
        }
      }, {
        key: "onkeypress",
        value: function onkeypress(event) {
          if (event.keyCode === this.keyEnter) {
            this.start();
            return;
          }

          this.keyPressed = event.key;
          if (!this.isStart || this.tiles.length === 0 || !this.isEnabelKeys(event.keyCode)) return;
          this.playAudio();
          var first = this.tiles[0];
          var secound = this.tiles[1];

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(secound)) {
            this.inRow(first, event.keyCode);
          } else {
            if (first.row === secound.row) {
              this.sameRow(first, secound, event.keyCode);
            } else {
              this.inRow(first, event.keyCode);
            }
          }
        }
      }, {
        key: "handelMouseTile",
        value: function handelMouseTile(tile) {
          if (!this.isStart) return;
          this.keyPressed = "mouse";
          this.playAudio();
          var first = this.tiles[0];
          var secound = this.tiles[1];

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(secound)) {
            if (first.row === tile.row) {
              this.tiles.shift();
              this.score++;
            } else {
              this.lost(tile.column);
            }
          } else {
            if (first.row === secound.row) {
              if (first.column == tile.column) {
                this.tiles.shift();
                this.score++;
              } else {
                var index = this.tiles.indexOf(secound, 1);
                if (index > -1) this.tiles.splice(index, 1);
              }

              this.score++;
            } else {
              if (first.row === tile.row) {
                this.tiles.shift();
                this.score++;
              } else {
                this.lost(tile.column);
              }
            }
          }
        }
      }, {
        key: "handelBoardClick",
        value: function handelBoardClick(col) {
          if (!this.isStart) return;
          this.lost(col);
        }
      }, {
        key: "reset",
        value: function reset() {
          _util_Tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].rest_id();

          this.score = 0;
          this.speedDelay = this.defaultSpeedDelay;
          this.tiles = [];
          this.columnOneLost = this.defaultColumnBg;
          this.columnTwoLost = this.defaultColumnBg;
          this.columnThreeLost = this.defaultColumnBg;
          this.columnFourLost = this.defaultColumnBg;
          this.backgroundAudio.currentTime = 0;

          if (this.sound && this.isStart) {
            this.backgroundAudio.play();
          } else {
            this.backgroundAudio.pause();
          }
        }
      }]);

      return PianoTilesComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [KeyboardEvent]), __metadata("design:returntype", void 0)], PianoTilesComponent.prototype, "onkeypress", null);

    PianoTilesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-pianoTiles',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pianoTiles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pianoTiles/pianoTiles.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./pianoTiles.component.css */
      "./src/app/pianoTiles/pianoTiles.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], PianoTilesComponent);
    /***/
  },

  /***/
  "./src/app/pianoTiles/tile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pianoTiles/tile.component.ts ***!
    \**********************************************/

  /*! exports provided: TileComponent */

  /***/
  function srcAppPianoTilesTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileComponent", function () {
      return TileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _util_Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/Tile */
    "./src/app/util/Tile.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TileComponent = /*#__PURE__*/function () {
      function TileComponent() {
        _classCallCheck(this, TileComponent);

        this.speed = 50;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TileComponent, [{
        key: "HandelClick",
        value: function HandelClick(event) {
          event.stopPropagation();
          this.onClick.emit(this.value);
        }
      }]);

      return TileComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], TileComponent.prototype, "speed", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", _util_Tile__WEBPACK_IMPORTED_MODULE_1__["Tile"])], TileComponent.prototype, "value", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTile'), __metadata("design:type", Object)], TileComponent.prototype, "onClick", void 0);

    TileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-tile',
      template: "\n      <div (click)=\"HandelClick($event)\" class=\"tile\" [attr.tile] =\"value.row\" [style.top.px]=\"value.top\" [style.transition-duration.ms]=\"speed\" >\n\n      </div>"
    })], TileComponent);
    /***/
  },

  /***/
  "./src/app/pipes/filterColumn.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/filterColumn.pipe.ts ***!
    \********************************************/

  /*! exports provided: FilterColumn */

  /***/
  function srcAppPipesFilterColumnPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterColumn", function () {
      return FilterColumn;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FilterColumn = /*#__PURE__*/function () {
      function FilterColumn() {
        _classCallCheck(this, FilterColumn);
      }

      _createClass(FilterColumn, [{
        key: "transform",
        value: function transform(items, filter) {
          if (!items || !filter) {
            return items;
          }

          return items.filter(function (item) {
            return item.column == filter.column;
          });
        }
      }]);

      return FilterColumn;
    }();

    FilterColumn = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'filterColumn',
      pure: false
    })], FilterColumn);
    /***/
  },

  /***/
  "./src/app/util/Tile.ts":
  /*!******************************!*\
    !*** ./src/app/util/Tile.ts ***!
    \******************************/

  /*! exports provided: Tile */

  /***/
  function srcAppUtilTileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tile", function () {
      return Tile;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var id = 0;

    var Tile = /*#__PURE__*/function () {
      function Tile(column) {
        var _this2 = this;

        _classCallCheck(this, Tile);

        this.column = "";
        this.top = -168;
        this.isCross = false;

        this.setCross = function () {
          return _this2.isCross = true;
        };

        this.getCross = function () {
          return _this2.isCross;
        };

        this.row = ++id;
        this.column = column;
      }

      _createClass(Tile, null, [{
        key: "rest_id",
        value: function rest_id() {
          id = 0;
        }
      }]);

      return Tile;
    }();
    /***/

  },

  /***/
  "./src/app/util/columns.ts":
  /*!*********************************!*\
    !*** ./src/app/util/columns.ts ***!
    \*********************************/

  /*! exports provided: columns, getKeyCode, getColumn */

  /***/
  function srcAppUtilColumnsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "columns", function () {
      return columns;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getKeyCode", function () {
      return getKeyCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getColumn", function () {
      return getColumn;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var columns = {
      one: "one",
      two: "two",
      three: "three",
      four: "four"
    };
    var keyEnter = 13;
    var keyF = 102;
    var keyG = 103;
    var keyK = 107;
    var keyL = 108;

    var getKeyCode = function getKeyCode(column) {
      switch (column) {
        case columns.one:
          return keyF;

        case columns.two:
          return keyG;

        case columns.three:
          return keyK;

        case columns.four:
          return keyL;
      }
    };

    var getColumn = function getColumn(keycode) {
      switch (keycode) {
        case keyF:
          return columns.one;

        case keyG:
          return columns.two;

        case keyK:
          return columns.three;

        case keyL:
          return columns.four;
      }
    };
    /***/

  },

  /***/
  "./src/app/util/help-methods.ts":
  /*!**************************************!*\
    !*** ./src/app/util/help-methods.ts ***!
    \**************************************/

  /*! exports provided: delay, randomNextInt, randomColumn */

  /***/
  function srcAppUtilHelpMethodsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "delay", function () {
      return delay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomNextInt", function () {
      return randomNextInt;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomColumn", function () {
      return randomColumn;
    });
    /* harmony import */


    var _columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./columns */
    "./src/app/util/columns.ts");
    /* harmony import */


    var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! es6-promise */
    "./node_modules/es6-promise/dist/es6-promise.js");
    /* harmony import */


    var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function delay(ms) {
      return new es6_promise__WEBPACK_IMPORTED_MODULE_1__["Promise"](function (resolve) {
        return setTimeout(resolve, ms);
      });
    }

    function randomNextInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColumn() {
      switch (randomNextInt(1, 4)) {
        case 1:
          return _columns__WEBPACK_IMPORTED_MODULE_0__["columns"].one;

        case 2:
          return _columns__WEBPACK_IMPORTED_MODULE_0__["columns"].two;

        case 3:
          return _columns__WEBPACK_IMPORTED_MODULE_0__["columns"].three;

        case 4:
          return _columns__WEBPACK_IMPORTED_MODULE_0__["columns"].four;

        default:
          return "";
      }
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HP\Source\Repos\PianoTiles\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
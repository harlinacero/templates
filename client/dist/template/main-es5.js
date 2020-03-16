function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

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


    __webpack_exports__["default"] = "<div class=\"wrapper\" id=\"wrapper\">\r\n    <app-sidemenu [widthSidebar]=\"widthSidebar\" *ngIf=\"!!session\"></app-sidemenu>\r\n    <div id=\"content\" role=\"main\">\r\n        <app-navbar (emitExpandSidebar)=\"toggleSidebar($event)\" *ngIf=\"!!session\"> </app-navbar>\r\n        <div class=\"custom-container\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n    <p>What's your favorite animal?</p>\n    <mat-form-field>\n        <mat-label>Favorite Animal</mat-label>\n        <input matInput [(ngModel)]=\"data.animal\">\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tables/tables.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tables/tables.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsTablesTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"table-responsive\">\n    <table class=\"table\" id=\"table\">\n        <caption>List of users</caption>\n        <thead>\n            <tr>\n                <th scope=\"col\" *ngFor=\"let item of datasource.fields\"> {{item.name}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            {{listData}}\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/navbar/navbar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/navbar/navbar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Header__container\">\r\n    <div class=\"Header__right-container\" (click)=\"toggleSidebar()\">\r\n        <!-- <img src=\"https://upload.wikimedia.org/wikipedia/commons/3/34/The_Clorox_Company_logo.svg\" alt=\"Enterprise logo\" *ngIf=\"isExpandSidebar\"> -->\r\n        <i class=\"{{menuIcon}} menuIcon\"></i>\r\n    </div>\r\n    <div class=\"Header__left-container\">\r\n\r\n        <div>\r\n            <div class=\"Avatar__container Avatar__ripple\">\r\n                <div class=\"Avatar__company-logo\">\r\n                    {{account}}\r\n                </div>\r\n\r\n                <div class=\"Avatar__company-logo\" title=\"Exit\">\r\n                    <a routerLinkActive=\"router-link-active\" class=\"button\" (click)=\"logOut()\">\r\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n                        <span class=\"menuText\"></span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/sidemenu/sidemenu.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/sidemenu/sidemenu.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutSidemenuSidemenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav id=\"sidebar\" [ngStyle]=\"{'width': widthSidebar}\">\r\n    <div class=\"sidebar-header\" [ngStyle]=\"{'background-color': getBackground(widthSidebar)}\">\r\n        <img src=\"./assets/images/enterpriseImage.png\" alt=\"Empresa\" *ngIf=\"widthSidebar !== '50px'\">\r\n    </div>\r\n\r\n    <ul class=\"list-unstyled components\">\r\n        <li *ngFor=\"let menu of menuItems\">\r\n            <a [routerLink]=\"[menu.component]\" routerLinkActive=\"router-link-active\" class=\"button\">\r\n                <i class=\"icon {{menu.icon}}\" aria-hidden=\"true\"></i>\r\n                <span class=\"menuText\" *ngIf=\"widthSidebar !== '50px'\"> {{menu.name}}</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/title/title.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/title/title.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutTitleTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"h3\">\r\n    <span>{{title}}</span>\r\n</h2>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-home-home-module */
        "modules-home-home-module").then(__webpack_require__.bind(null,
        /*! ./modules/home/home.module */
        "./src/app/modules/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'billing',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-billing-billing-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modules-billing-billing-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/billing/billing.module */
        "./src/app/modules/billing/billing.module.ts")).then(function (m) {
          return m.BillingModule;
        });
      }
    }, {
      path: 'shopping',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-shopping-shopping-module */
        "modules-shopping-shopping-module").then(__webpack_require__.bind(null,
        /*! ./modules/shopping/shopping.module */
        "./src/app/modules/shopping/shopping.module.ts")).then(function (m) {
          return m.ShoppingModule;
        });
      }
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-admin-admin-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modules-admin-admin-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/admin/admin.module */
        "./src/app/modules/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      }
    }, {
      path: 'reports',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-reports-reports-module */
        "modules-reports-reports-module").then(__webpack_require__.bind(null,
        /*! ./modules/reports/reports.module */
        "./src/app/modules/reports/reports.module.ts")).then(function (m) {
          return m.ReportsModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-settings-settings-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modules-settings-settings-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/settings/settings.module */
        "./src/app/modules/settings/settings.module.ts")).then(function (m) {
          return m.SettingsModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-session-session-module */
        "modules-session-session-module").then(__webpack_require__.bind(null,
        /*! ./modules/session/session.module */
        "./src/app/modules/session/session.module.ts")).then(function (m) {
          return m.SessionModule;
        });
      }
    }, {
      path: 'not-found',
      redirectTo: 'home'
    }, {
      path: '**',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .wrapper #content {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background-size: cover;\n    /* Resize the background image to cover the entire container */ }\n  .wrapper #content .custom-container {\n      overflow: auto;\n      height: 100%;\n      padding: 2em 2em 5em 2em; }\n  p {\n  font-family: 'Poppins', sans-serif;\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999; }\n  a,\na:hover,\na:focus {\n  color: inherit;\n  text-decoration: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxoYXJmZVxcRG9jdW1lbnRzXFxQcm95ZWN0b3NcXHRlbXBsYXRlc1xcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwwQkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFMcEI7SUFPUSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUloQixzQkFBc0I7SUFDdEIsOERBQUEsRUFBK0Q7RUFkdkU7TUFnQlksY0FBYztNQUNkLFlBQVk7TUFDWix3QkFBd0IsRUFBQTtFQUtwQztFQUNJLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFHZjs7O0VBR0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQiw0QkFBb0I7RUFBcEIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAjY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICAgICAgLmN1c3RvbS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyZW0gMmVtIDVlbSAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn0iXX0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'template';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.widthSidebar = '50px';
          this.session = localStorage.getItem('session');
          this.addBackgroundImage(this.session);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar(event) {
          if (event) {
            this.widthSidebar = '250px';
          } else {
            this.widthSidebar = '50px';
          }
        }
      }, {
        key: "addBackgroundImage",
        value: function addBackgroundImage(session) {// if (!(!!session)) {
          //   const a = document.getElementById('wrapper');
          //   a.style.backgroundImage = 'url("./assets/images/loginImage.jpg")';
          //   a.style.backgroundPosition = 'center';
          //   a.style.backgroundRepeat = 'no-repeat';
          //   a.style.backgroundSize = 'cover';
          //   a.style.height = '100vh';
          // }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared/components/modal/modal.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/modal/modal.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsModalModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/modal/modal.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/modal/modal.component.ts ***!
    \************************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppSharedComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(dialogRef, data) {
        _classCallCheck(this, ModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ModalComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.scss */
      "./src/app/shared/components/modal/modal.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/tables/tables.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/tables/tables.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsTablesTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/tables/tables.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/tables/tables.component.ts ***!
    \**************************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcAppSharedComponentsTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TablesComponent =
    /*#__PURE__*/
    function () {
      function TablesComponent() {
        _classCallCheck(this, TablesComponent);

        this.listData = [];
        var table = document.getElementById('table');
        this.datasource = {
          fields: [{
            code: 'name',
            name: 'Nombre'
          }, {
            code: 'lastName',
            name: 'Apellido'
          }, {
            code: 'age',
            name: 'Edad'
          }],
          data: [{
            name: 'juan1',
            lastName: 'aas1',
            age: '1'
          }, {
            name: 'juan2',
            lastName: 'aas2',
            age: '2'
          }, {
            name: 'juan3',
            lastName: 'aas3',
            age: '3'
          }, {
            name: 'juan4',
            lastName: 'aas4',
            age: '4'
          }]
        };
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.datasource.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;
            var cells = '';

            for (var _i = 0, _Object$values = Object.values(key); _i < _Object$values.length; _i++) {
              var cell = _Object$values[_i];
              cells += '<td>' + cell + '</td>';
            }

            this.listData.push('<tr>' + cells + '</tr>');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        console.log(this.listData);
      }

      _createClass(TablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TablesComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TablesComponent.prototype, "datasource", void 0);
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tables',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tables/tables.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tables.component.scss */
      "./src/app/shared/components/tables/tables.component.scss")).default]
    })], TablesComponent);
    /***/
  },

  /***/
  "./src/app/shared/globals/localStorage.const.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/globals/localStorage.const.ts ***!
    \******************************************************/

  /*! exports provided: URLS, SESSION */

  /***/
  function srcAppSharedGlobalsLocalStorageConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URLS", function () {
      return URLS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SESSION", function () {
      return SESSION;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var URLS = 'urls';
    var SESSION = 'session';
    /***/
  },

  /***/
  "./src/app/shared/layout/layout.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/layout/layout.module.ts ***!
    \************************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppSharedLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidemenu/sidemenu.component */
    "./src/app/shared/layout/sidemenu/sidemenu.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/shared/layout/navbar/navbar.component.ts");
    /* harmony import */


    var _title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./title/title.component */
    "./src/app/shared/layout/title/title.component.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__["SidemenuComponent"], _title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
      exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__["SidemenuComponent"], _title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"]]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/shared/layout/navbar/navbar.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/shared/layout/navbar/navbar.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Header__container {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 50px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0 1em;\n  background-color: #2b2b2b;\n  color: #fff;\n  color: var(--header-color-icon);\n  font-size: 1em;\n  box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.1); }\n  .Header__container .Header__right-container {\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    height: 100%;\n    width: 200px; }\n  .Header__container .Header__right-container img {\n      vertical-align: middle;\n      border-style: none;\n      height: 50px;\n      width: 100%; }\n  .Header__container .Header__right-container .menuIcon {\n      font-size: 1.2em;\n      color: whitesmoke; }\n  .Header__container .Header__left-container {\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    height: 100%; }\n  .Header__container .Header__left-container .Avatar__container {\n      -webkit-box-align: center;\n              align-items: center;\n      cursor: pointer;\n      display: -webkit-box;\n      display: flex;\n      height: 100%;\n      padding: 0 .3em; }\n  .Header__container .Header__left-container .Avatar__container .Avatar__company-logo {\n        background-repeat: no-repeat;\n        background-size: 100% auto;\n        background-position: 50%;\n        text-align: center;\n        margin-right: 1em;\n        color: whitesmoke; }\n  .Header__container .Header__left-container .Avatar__container .Avatar__company-logo a i {\n          font-size: 1.2em;\n          color: whitesmoke; }\n  .Header__container .Header__left-container .Avatar__ripple {\n      background-position: 50%;\n      -webkit-transition: background .4s;\n      transition: background .4s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9uYXZiYXIvQzpcXFVzZXJzXFxoYXJmZVxcRG9jdW1lbnRzXFxQcm95ZWN0b3NcXHRlbXBsYXRlc1xcY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsZ0RBQTZDLEVBQUE7RUFYakQ7SUFhUSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVksRUFBQTtFQWpCcEI7TUFtQlksc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVyxFQUFBO0VBdEJ2QjtNQXlCWSxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7RUExQjdCO0lBOEJRLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixZQUFZLEVBQUE7RUFqQ3BCO01BbUNZLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLG9CQUFhO01BQWIsYUFBYTtNQUNiLFlBQVk7TUFDWixlQUFlLEVBQUE7RUF2QzNCO1FBeUNnQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQixFQUFBO0VBOUNqQztVQWlEd0IsZ0JBQWdCO1VBQ2hCLGlCQUFpQixFQUFBO0VBbER6QztNQXdEWSx3QkFBd0I7TUFDeEIsa0NBQWtDO01BQ2xDLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkhlYWRlcl9fY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvci1pY29uKTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgaHNsYSgwLCAwJSwgMTAwJSwgLjEpO1xyXG4gICAgLkhlYWRlcl9fcmlnaHQtY29udGFpbmVyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudUljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuSGVhZGVyX19sZWZ0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLkF2YXRhcl9fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgLjNlbTtcclxuICAgICAgICAgICAgLkF2YXRhcl9fY29tcGFueS1sb2dvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5BdmF0YXJfX3JpcHBsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC40cztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/layout/navbar/navbar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/layout/navbar/navbar.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedLayoutNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals_localStorage_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../globals/localStorage.const */
    "./src/app/shared/globals/localStorage.const.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.emitExpandSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isExpandSidebar = false;
          var sessionString = localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_3__["SESSION"]);

          if (!!sessionString) {
            var session = JSON.parse(sessionString);
            this.menuIcon = 'fa fa-bars';
            this.account = session.person.firstName + ' ' + session.person.lastName;
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.clear();
          location.reload();
          this.router.navigate(['/login']);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.isExpandSidebar = !this.isExpandSidebar;
          this.toggleIconMenu(this.isExpandSidebar);
          this.emitExpandSidebar.emit(this.isExpandSidebar);
        }
      }, {
        key: "toggleIconMenu",
        value: function toggleIconMenu(isExapand) {
          if (isExapand) {
            this.menuIcon = 'fa fa-times';
          } else {
            this.menuIcon = 'fa fa-bars';
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavbarComponent.prototype, "emitExpandSidebar", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/shared/layout/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/sidemenu/sidemenu.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/layout/sidemenu/sidemenu.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutSidemenuSidemenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#sidebar {\n  /* don't forget to add all the previously mentioned styles here too */\n  background: rgba(43, 43, 43, 0.8);\n  color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  height: 100%;\n  font-size: 12px; }\n  #sidebar .sidebar-header {\n    background: #fff;\n    height: 50px;\n    text-align: center;\n    padding: 1em; }\n  #sidebar .sidebar-header img {\n      height: 35px; }\n  #sidebar ul li a {\n    color: #fff;\n    padding: 10px;\n    font-size: 1.1em;\n    display: block; }\n  #sidebar ul li a .icon {\n      margin: 5px;\n      font-size: 1.5em; }\n  #sidebar ul li a .menuText {\n      margin: 5px; }\n  #sidebar ul li a:hover {\n    color: #fff;\n    background: #0b4f86;\n    text-decoration: none;\n    cursor: pointer; }\n  #sidebar ul li.active > a,\na[aria-expanded=\"true\"] {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9zaWRlbWVudS9DOlxcVXNlcnNcXGhhcmZlXFxEb2N1bWVudHNcXFByb3llY3Rvc1xcdGVtcGxhdGVzXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcbGF5b3V0XFxzaWRlbWVudVxcc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRUFBQTtFQUNBLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBTmpCO0lBU0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0VBWmhCO01BZ0JNLFlBQVksRUFBQTtFQWhCbEI7SUF1QlEsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0VBMUJ0QjtNQTZCVSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUE5QjFCO01Ba0NVLFdBQVcsRUFBQTtFQWxDckI7SUF1Q1EsV0FBVztJQUNYLG1CQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZUFBZSxFQUFBO0VBTXZCOztFQUVFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZWJhciB7XHJcbiAgLyogZG9uJ3QgZm9yZ2V0IHRvIGFkZCBhbGwgdGhlIHByZXZpb3VzbHkgbWVudGlvbmVkIHN0eWxlcyBoZXJlIHRvbyAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAvLyB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnVUZXh0IHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDExLCA3OSwgMTM0KTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaS5hY3RpdmU+YSxcclxuYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLy8gYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/layout/sidemenu/sidemenu.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/layout/sidemenu/sidemenu.component.ts ***!
    \**************************************************************/

  /*! exports provided: SidemenuComponent */

  /***/
  function srcAppSharedLayoutSidemenuSidemenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function () {
      return SidemenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidemenuComponent =
    /*#__PURE__*/
    function () {
      function SidemenuComponent() {
        _classCallCheck(this, SidemenuComponent);

        this.menuItems = [{
          icon: 'fa fa-home',
          name: 'Inicio',
          component: '/home'
        }, {
          icon: 'fa fa-file-text-o',
          name: 'Gestión de Facturas',
          component: '/billing'
        }, {
          icon: 'fa fa-shopping-cart',
          name: 'Órdenes de Compra',
          component: '/shopping'
        }, {
          icon: 'fa fa-users',
          name: 'Administración',
          component: '/admin'
        }, {
          icon: 'fa fa-line-chart',
          name: 'Informes',
          component: '/reports'
        }, {
          icon: 'fa fa-cog',
          name: 'Configuración',
          component: '/settings'
        }];
        var session = JSON.parse(localStorage.getItem('session'));

        if (!!session) {
          this.menuItems = session.menus;
        }
      }

      _createClass(SidemenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getBackground",
        value: function getBackground(widthSidebar) {
          if (widthSidebar === '250px') {
            return '#fff';
          } else {
            return 'rgba(43, 43, 43, 0.8)';
          }
        }
      }]);

      return SidemenuComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidemenuComponent.prototype, "widthSidebar", void 0);
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidemenu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidemenu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/sidemenu/sidemenu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidemenu.component.scss */
      "./src/app/shared/layout/sidemenu/sidemenu.component.scss")).default]
    })], SidemenuComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/title/title.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/shared/layout/title/title.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutTitleTitleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".h3 {\n  font-family: fantasy; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC90aXRsZS9DOlxcVXNlcnNcXGhhcmZlXFxEb2N1bWVudHNcXFByb3llY3Rvc1xcdGVtcGxhdGVzXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcbGF5b3V0XFx0aXRsZVxcdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/layout/title/title.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/layout/title/title.component.ts ***!
    \********************************************************/

  /*! exports provided: TitleComponent */

  /***/
  function srcAppSharedLayoutTitleTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleComponent", function () {
      return TitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TitleComponent =
    /*#__PURE__*/
    function () {
      function TitleComponent() {
        _classCallCheck(this, TitleComponent);
      }

      _createClass(TitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TitleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TitleComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TitleComponent.prototype, "title", void 0);
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-title',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./title.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/title/title.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./title.component.scss */
      "./src/app/shared/layout/title/title.component.scss")).default]
    })], TitleComponent);
    /***/
  },

  /***/
  "./src/app/shared/material/material.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/material/material.module.ts ***!
    \****************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-material-file-input */
    "./node_modules/ngx-material-file-input/fesm2015/ngx-material-file-input.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__["MaterialFileInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__["MaterialFileInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/shared/pipes/arraySort.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/pipes/arraySort.pipe.ts ***!
    \************************************************/

  /*! exports provided: ArraySortPipe */

  /***/
  function srcAppSharedPipesArraySortPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArraySortPipe", function () {
      return ArraySortPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArraySortPipe =
    /*#__PURE__*/
    function () {
      function ArraySortPipe() {
        _classCallCheck(this, ArraySortPipe);
      }

      _createClass(ArraySortPipe, [{
        key: "transform",
        value: function transform(array, field) {
          if (!Array.isArray(array)) {
            return;
          }

          array.sort(function (a, b) {
            if (a[field] < b[field]) {
              return -1;
            } else if (a[field] > b[field]) {
              return 1;
            } else {
              return 0;
            }
          });
          return array;
        }
      }]);

      return ArraySortPipe;
    }();

    ArraySortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "sort"
    })], ArraySortPipe);
    /***/
  },

  /***/
  "./src/app/shared/services/service.base.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/service.base.ts ***!
    \*************************************************/

  /*! exports provided: ServiceBase */

  /***/
  function srcAppSharedServicesServiceBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceBase", function () {
      return ServiceBase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals/localStorage.const */
    "./src/app/shared/globals/localStorage.const.ts");

    var ServiceBase =
    /*#__PURE__*/
    function () {
      function ServiceBase(http, router) {
        _classCallCheck(this, ServiceBase);

        this.http = http;
        this.router = router;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.getUrls();
      }

      _createClass(ServiceBase, [{
        key: "getUrls",
        value: function getUrls() {
          var _this = this;

          this.http.get('./assets/config/urls.json').subscribe(function (res) {
            _this.urls = res;
            localStorage.setItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["URLS"], JSON.stringify(_this.urls));
          });
        }
      }, {
        key: "validateSession",
        value: function validateSession() {
          var session = localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["SESSION"]);

          if (!!!session) {
            this.router.navigate(['login']);
          } else {
            this.session = JSON.parse(session);
          }
        }
      }]);

      return ServiceBase;
    }();

    ServiceBase.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ServiceBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServiceBase);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/tables/tables.component */
    "./src/app/shared/components/tables/tables.component.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/app/shared/layout/layout.module.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/shared/material/material.module.ts");
    /* harmony import */


    var _services_service_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/service.base */
    "./src/app/shared/services/service.base.ts");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/modal/modal.component */
    "./src/app/shared/components/modal/modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pipes_arraySort_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pipes/arraySort.pipe */
    "./src/app/shared/pipes/arraySort.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _pipes_arraySort_pipe__WEBPACK_IMPORTED_MODULE_12__["ArraySortPipe"]],
      imports: [angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
      exports: [_pipes_arraySort_pipe__WEBPACK_IMPORTED_MODULE_12__["ArraySortPipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
      entryComponents: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"]],
      providers: [_services_service_base__WEBPACK_IMPORTED_MODULE_9__["ServiceBase"]]
    })], SharedModule);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://localhost:53973/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
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
    /*! C:\Users\harfe\Documents\Proyectos\templates\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
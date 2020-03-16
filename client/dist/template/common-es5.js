function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/services/admin.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/admin.service.ts ***!
    \**************************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppSharedServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
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


    var src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/service.base */
    "./src/app/shared/services/service.base.ts");
    /* harmony import */


    var _globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals/localStorage.const */
    "./src/app/shared/globals/localStorage.const.ts");

    var AdminService =
    /*#__PURE__*/
    function () {
      function AdminService(http, serviceBase) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.serviceBase = serviceBase;
        this.urls = JSON.parse(localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["URLS"]));

        if (this.urls === undefined) {
          this.serviceBase.validateSession();
        }
      }

      _createClass(AdminService, [{
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get("".concat(this.urls.urlbase, "Admin/GetAllPerson"));
        }
      }, {
        key: "saveUser",
        value: function saveUser(person) {
          return this.http.post("".concat(this.urls.urlbase, "Admin/SavePerson"), person);
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get("".concat(this.urls.urlbase, "Admin/SavePerson?id=").concat(id));
        }
      }, {
        key: "getAllRoles",
        value: function getAllRoles() {
          return this.http.get("".concat(this.urls.urlbase, "Admin/GetAllRole"));
        }
      }, {
        key: "saveRole",
        value: function saveRole(role) {
          return this.http.post("".concat(this.urls.urlbase, "Admin/SaveRole"), role);
        }
      }, {
        key: "getRole",
        value: function getRole(id) {
          return this.http.get("".concat(this.urls.urlbase, "Admin/GetRoles?id=").concat(id));
        }
      }, {
        key: "getDocumentTypes",
        value: function getDocumentTypes() {
          return this.http.get("".concat(this.urls.urlbase, "Admin/GetDocumentTypes"));
        }
      }, {
        key: "getAllProviders",
        value: function getAllProviders() {
          return this.http.get("".concat(this.urls.urlbase, "Provider/GetAllProviders"));
        }
      }, {
        key: "saveProvider",
        value: function saveProvider(provider) {
          return this.http.post("".concat(this.urls.urlbase, "Provider/SaveProvider"), provider);
        }
      }, {
        key: "getProvider",
        value: function getProvider(id) {
          return this.http.get("".concat(this.urls.urlbase, "Provider/GetProvider?id=").concat(id));
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.http.get("".concat(this.urls.urlbase, "Product/GetAllProducts"));
        }
      }, {
        key: "saveProduct",
        value: function saveProduct(product) {
          return this.http.post("".concat(this.urls.urlbase, "Product/SaveProduct"), product);
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.http.get("".concat(this.urls.urlbase, "Product/GetProduct?id=").concat(id));
        }
      }, {
        key: "saveCostCenter",
        value: function saveCostCenter(costCenter) {
          return this.http.post("".concat(this.urls.urlbase, "Company/SaveCostCenter"), costCenter);
        }
      }, {
        key: "getAllCostCenter",
        value: function getAllCostCenter() {
          return this.http.get("".concat(this.urls.urlbase, "Company/GetAllCostCenter"));
        }
      }, {
        key: "getCostCenter",
        value: function getCostCenter(id) {
          return this.http.get("".concat(this.urls.urlbase, "Company/GetCostCenterById?id=").concat(id));
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__["ServiceBase"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/shared/services/aprovalMatrix.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/aprovalMatrix.service.ts ***!
    \**********************************************************/

  /*! exports provided: AprovalMatrixService */

  /***/
  function srcAppSharedServicesAprovalMatrixServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AprovalMatrixService", function () {
      return AprovalMatrixService;
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


    var _service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service.base */
    "./src/app/shared/services/service.base.ts");
    /* harmony import */


    var _globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals/localStorage.const */
    "./src/app/shared/globals/localStorage.const.ts");

    var AprovalMatrixService =
    /*#__PURE__*/
    function () {
      function AprovalMatrixService(http, serviceBase) {
        _classCallCheck(this, AprovalMatrixService);

        this.http = http;
        this.serviceBase = serviceBase;
        this.urls = JSON.parse(localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["URLS"]));

        if (this.urls === undefined) {
          this.serviceBase.validateSession();
        }
      }

      _createClass(AprovalMatrixService, [{
        key: "getAllMoney",
        value: function getAllMoney() {
          return this.http.get("".concat(this.urls.urlbase, "AprovaMatrix/GetAllMoney"));
        }
      }, {
        key: "GetAllAprovalMatrix",
        value: function GetAllAprovalMatrix() {
          return this.http.get("".concat(this.urls.urlbase, "AprovaMatrix/GetAllAprovalMatrix"));
        }
      }, {
        key: "SaveAprovalMatrix",
        value: function SaveAprovalMatrix(levelsAproval) {
          return this.http.post("".concat(this.urls.urlbase, "AprovaMatrix/SaveAprovalMatrix"), levelsAproval);
        }
      }]);

      return AprovalMatrixService;
    }();

    AprovalMatrixService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _service_base__WEBPACK_IMPORTED_MODULE_3__["ServiceBase"]
      }];
    };

    AprovalMatrixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AprovalMatrixService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map
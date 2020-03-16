(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/admin.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/admin.service.ts ***!
  \**************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/service.base */ "./src/app/shared/services/service.base.ts");
/* harmony import */ var _globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/localStorage.const */ "./src/app/shared/globals/localStorage.const.ts");





let AdminService = class AdminService {
    constructor(http, serviceBase) {
        this.http = http;
        this.serviceBase = serviceBase;
        this.urls = JSON.parse(localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["URLS"]));
        if (this.urls === undefined) {
            this.serviceBase.validateSession();
        }
    }
    getAllUsers() {
        return this.http.get(`${this.urls.urlbase}Admin/GetAllPerson`);
    }
    saveUser(person) {
        return this.http.post(`${this.urls.urlbase}Admin/SavePerson`, person);
    }
    getUser(id) {
        return this.http.get(`${this.urls.urlbase}Admin/SavePerson?id=${id}`);
    }
    getAllRoles() {
        return this.http.get(`${this.urls.urlbase}Admin/GetAllRole`);
    }
    saveRole(role) {
        return this.http.post(`${this.urls.urlbase}Admin/SaveRole`, role);
    }
    getRole(id) {
        return this.http.get(`${this.urls.urlbase}Admin/GetRoles?id=${id}`);
    }
    getDocumentTypes() {
        return this.http.get(`${this.urls.urlbase}Admin/GetDocumentTypes`);
    }
    getAllProviders() {
        return this.http.get(`${this.urls.urlbase}Provider/GetAllProviders`);
    }
    saveProvider(provider) {
        return this.http.post(`${this.urls.urlbase}Provider/SaveProvider`, provider);
    }
    getProvider(id) {
        return this.http.get(`${this.urls.urlbase}Provider/GetProvider?id=${id}`);
    }
    getAllProducts() {
        return this.http.get(`${this.urls.urlbase}Product/GetAllProducts`);
    }
    saveProduct(product) {
        return this.http.post(`${this.urls.urlbase}Product/SaveProduct`, product);
    }
    getProduct(id) {
        return this.http.get(`${this.urls.urlbase}Product/GetProduct?id=${id}`);
    }
    saveCostCenter(costCenter) {
        return this.http.post(`${this.urls.urlbase}Company/SaveCostCenter`, costCenter);
    }
    getAllCostCenter() {
        return this.http.get(`${this.urls.urlbase}Company/GetAllCostCenter`);
    }
    getCostCenter(id) {
        return this.http.get(`${this.urls.urlbase}Company/GetCostCenterById?id=${id}`);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__["ServiceBase"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AdminService);



/***/ }),

/***/ "./src/app/shared/services/aprovalMatrix.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/aprovalMatrix.service.ts ***!
  \**********************************************************/
/*! exports provided: AprovalMatrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprovalMatrixService", function() { return AprovalMatrixService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.base */ "./src/app/shared/services/service.base.ts");
/* harmony import */ var _globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/localStorage.const */ "./src/app/shared/globals/localStorage.const.ts");





let AprovalMatrixService = class AprovalMatrixService {
    constructor(http, serviceBase) {
        this.http = http;
        this.serviceBase = serviceBase;
        this.urls = JSON.parse(localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["URLS"]));
        if (this.urls === undefined) {
            this.serviceBase.validateSession();
        }
    }
    getAllMoney() {
        return this.http.get(`${this.urls.urlbase}AprovaMatrix/GetAllMoney`);
    }
    GetAllAprovalMatrix() {
        return this.http.get(`${this.urls.urlbase}AprovaMatrix/GetAllAprovalMatrix`);
    }
    SaveAprovalMatrix(levelsAproval) {
        return this.http.post(`${this.urls.urlbase}AprovaMatrix/SaveAprovalMatrix`, levelsAproval);
    }
};
AprovalMatrixService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _service_base__WEBPACK_IMPORTED_MODULE_3__["ServiceBase"] }
];
AprovalMatrixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AprovalMatrixService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/reports.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/reports.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reports works!</p>\n");

/***/ }),

/***/ "./src/app/modules/reports/reports-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/reports/reports-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "./src/app/modules/reports/reports.component.ts");




const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
    }
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ReportsRoutingModule);



/***/ }),

/***/ "./src/app/modules/reports/reports.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/reports/reports.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/reports/reports.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.ts ***!
  \******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/service.base */ "./src/app/shared/services/service.base.ts");



let ReportsComponent = class ReportsComponent {
    constructor(serviceBase) {
        this.serviceBase = serviceBase;
    }
    ngOnInit() {
        this.serviceBase.validateSession();
    }
};
ReportsComponent.ctorParameters = () => [
    { type: src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__["ServiceBase"] }
];
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/modules/reports/reports.component.scss")).default]
    })
], ReportsComponent);



/***/ }),

/***/ "./src/app/modules/reports/reports.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/reports/reports.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "./src/app/modules/reports/reports.component.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/reports/reports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let ReportsModule = class ReportsModule {
};
ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ReportsModule);



/***/ })

}]);
//# sourceMappingURL=modules-reports-reports-module-es2015.js.map
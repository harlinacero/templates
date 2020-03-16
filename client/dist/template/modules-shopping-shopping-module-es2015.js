(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shopping-shopping-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shopping/shopping.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shopping/shopping.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>shopping works!</p>\n");

/***/ }),

/***/ "./src/app/modules/shopping/shopping-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shopping/shopping-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShoppingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingRoutingModule", function() { return ShoppingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shopping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping.component */ "./src/app/modules/shopping/shopping.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




const routes = [
    {
        path: '',
        component: _shopping_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingComponent"]
    }
];
let ShoppingRoutingModule = class ShoppingRoutingModule {
};
ShoppingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ShoppingRoutingModule);



/***/ }),

/***/ "./src/app/modules/shopping/shopping.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/shopping/shopping.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcHBpbmcvc2hvcHBpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shopping/shopping.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/shopping/shopping.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/service.base */ "./src/app/shared/services/service.base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShoppingComponent = class ShoppingComponent {
    constructor(serviceBase, router) {
        this.serviceBase = serviceBase;
        this.router = router;
    }
    ngOnInit() {
        this.serviceBase.validateSession();
        this.router.navigate(['billing']);
    }
};
ShoppingComponent.ctorParameters = () => [
    { type: src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__["ServiceBase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShoppingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shopping/shopping.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping.component.scss */ "./src/app/modules/shopping/shopping.component.scss")).default]
    })
], ShoppingComponent);



/***/ }),

/***/ "./src/app/modules/shopping/shopping.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shopping/shopping.module.ts ***!
  \*****************************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shopping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping.component */ "./src/app/modules/shopping/shopping.component.ts");
/* harmony import */ var _shopping_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-routing.module */ "./src/app/modules/shopping/shopping-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let ShoppingModule = class ShoppingModule {
};
ShoppingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _shopping_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _shopping_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShoppingRoutingModule"]
        ]
    })
], ShoppingModule);



/***/ })

}]);
//# sourceMappingURL=modules-shopping-shopping-module-es2015.js.map
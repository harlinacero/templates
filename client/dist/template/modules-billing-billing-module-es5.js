function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-billing-billing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/billing.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/billing.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesBillingBillingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-title [title]=\"'Facturación'\" [icon]=\"'fa fa-file-text-o'\"></app-title>\r\n\r\n\r\n<div class=\"example-header\">\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\r\n    </mat-form-field>\r\n</div>\r\n<div class=\"example-container mat-elevation-z8\" *ngIf=\"!!dataSource\">\r\n\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"numberbilling\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> No. Factura</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.numberBilling}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Progress Column -->\r\n        <ng-container matColumnDef=\"providerid\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Proveedor </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{ getNameById('providerid', row.providerId)}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"billingtype\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Tipo Factura </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{getNameById('billingtype', row.billingType)}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"producttype\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Tipo Producto </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.productType}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- DateBill Column -->\r\n        <ng-container matColumnDef=\"costcenterid\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Centro de Costo </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{ getNameById('costcenterid', row.costcenterId)}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Date Aprobate Column -->\r\n        <!-- <ng-container matColumnDef=\"moneyid\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Moneda </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{ getNameById('moneyid', row.moneyId) }} </mat-cell>\r\n        </ng-container> -->\r\n\r\n\r\n        <!-- Date Pay datePay -->\r\n        <ng-container matColumnDef=\"exchangerate\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Tasa de cambio </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.exchangeRate }} </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Area Column -->\r\n        <ng-container matColumnDef=\"datebilling\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Fecha Factura </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.dateBilling | date}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Value Column -->\r\n        <ng-container matColumnDef=\"datelimit\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Fecha Límite </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.dateLimit| date}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"datefiled\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Fecha Radicado </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.dateFiled | date}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"valuebill\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Valor </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{row.valueBill | currency}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Indicator Column -->\r\n        <ng-container matColumnDef=\"stateid\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\" [style.background]=\"getColorById(row.stateid)\" [ngStyle]=\"{'padding-left':'10px'}\">\r\n                {{ getNameById('stateid', row.stateid) }}\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"setAprovalMatrix(row)\">\r\n        </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n<button class=\"mdc-fab\" aria-label=\"Favorite\" (click)=\"addCostCenter()\" [title]=\"'Agregar'\">\r\n  <div class=\"mdc-fab__ripple\"></div>\r\n  <span class=\"mdc-fab__icon material-icons\">add</span>\r\n</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/detailbilling/detailbilling.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/detailbilling/detailbilling.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesBillingDetailbillingDetailbillingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"return()\"><i class=\"fa fa-arrow-left\"></i> Salir</button>\r\n\r\n<div class=\"container\">\r\n    <app-title [title]=\"title\" [icon]=\"'fa fa-file-text-o'\"></app-title>\r\n</div>\r\n\r\n<div *ngIf=\"!!detailBilling && !!detailBilling[0]\">\r\n    <div class=\"container-group\">\r\n        <div class=\"group-field\">\r\n            <div class=\"title-group\">Factura</div>\r\n            <div class=\"value-group\">{{detailBilling[0].numeroFactura}}</div>\r\n        </div>\r\n        <div class=\"group-field\">\r\n            <div class=\"title-group\">Proveedor</div>\r\n            <div class=\"value-group\">{{detailBilling[0].proveedor}}</div>\r\n        </div>\r\n        <div class=\"group-field\">\r\n            <div class=\"title-group\">Referencia</div>\r\n            <div class=\"value-group\">{{detailBilling[0].tipoProducto}}</div>\r\n        </div>\r\n        <div class=\"group-field\">\r\n            <div class=\"title-group\">Fecha Factura</div>\r\n            <div class=\"value-group\">{{detailBilling[0].fechaFactura | date}}</div>\r\n        </div>\r\n        <div class=\"group-field\">\r\n            <div class=\"title-group\">Fecha Vencimiento</div>\r\n            <div class=\"value-group\">{{detailBilling[0].fechaLimite | date }}</div>\r\n        </div>\r\n        <div class=\"group-field\">\r\n            <div class=\"title-group\">Valor</div>\r\n            <div class=\"value-group\">{{detailBilling[0].valorText}}</div>\r\n        </div>\r\n        <div class=\"group-field\">\r\n            <div class=\"title-group\">Área</div>\r\n            <div class=\"value-group\">{{detailBilling[0].costCenter}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"example-container mat-elevation-z8\" *ngIf=\"!!dataSource\">\r\n    <!-- 'levelaproval', 'aprovalperson', 'dateRequest', 'dateResponse', 'acordingDays', 'executiondays', 'indicator', 'comments' -->\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"levelaproval\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Nivel</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.levelAprobation}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"aprovalperson\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Responsable </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{ row.aprobador}} </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"dateRequest\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Fecha Solicitud </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.fechaSolicitudText }} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"dateResponse\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Fecha Respuesta </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.fechaRespestaAprobadorText}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"acordingDays\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Dias Pactados </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{ row.diasPactados}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"executiondays\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Dias Ejecución </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.diasRespuesta }} </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Area Column -->\r\n        <ng-container matColumnDef=\"indicator\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Indicador</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\" [ngStyle]=\"{'background': row.colorIndicador}\"> {{row.estadoAprobacion }}\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Value Column -->\r\n        <ng-container matColumnDef=\"comments\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Observaciones </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.observaciones }} </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n<div mat-dialog-actions class=\"buttons\" *ngIf=\"isRequestAvailable\">\r\n    <!-- <button mat-button class=\"btn btn-danger\" (click)=\"regectBilling()\">Rechazar</button> -->\r\n    <button mat-button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#rejectedlModal\">\r\n    Rechazar\r\n  </button>\r\n    <!-- <button mat-button class=\"btn btn-success\" (click)=\"aprovalBilling()\">Aprobar</button> -->\r\n    <button mat-button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#aprovalModal\">\r\n    Aprobar\r\n  </button>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<!-- <div class=\"modal fade\" id=\"aprovalModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                asdf\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button class=\"btn btn-success\" (click)=\"aprovalBilling()\">Aprobar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"aprovalModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\" *ngIf=\"!!detailBilling\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Aprobar Factura <span>{{detailBilling[0].numeroFactura}}</span>\r\n                </h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"message-text\" class=\"col-form-label\">Observaciones:</label>\r\n                        <textarea class=\"form-control\" id=\"message-text\"></textarea>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button class=\"btn btn-success\" (click)=\"aprovalBilling()\">Aprobar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"rejectedlModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"rejectedlModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\" *ngIf=\"!!detailBilling\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Rechazar Factura <span>{{detailBilling[0].numeroFactura}}</span>\r\n                </h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"rejectionCause\" class=\"col-form-label\">Causal de Rechazo:</label>\r\n                        <textarea class=\"form-control\" id=\"rejectionCause\"></textarea>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button class=\"btn btn-success\" (click)=\"regectBilling()\">Confirmar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/pupup-billing/pupup-billing.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/pupup-billing/pupup-billing.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesBillingPupupBillingPupupBillingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box\">\r\n    <mat-card-header>\r\n        <mat-card-title>{{title}} {{data.numberBilling}}</mat-card-title>\r\n    </mat-card-header>\r\n\r\n    <!-- enctype=\"multipart/form-data\" method=\"post\"  -->\r\n    <form class=\"example-form\" enctype=\"multipart/form-data\" method=\"post\">\r\n        <div mat-dialog-content>\r\n\r\n            <div *ngIf=\"data.id > 0\">\r\n                <a href=\"{{data.routeFile}}\"></a>\r\n            </div>\r\n\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>No. Factura</mat-label>\r\n                <input type=\"number\" min=\"0\" matInput [(ngModel)]=\"data.numberBilling\" name=\"numberBilling\" [disabled]=\"disabled\" required>\r\n                <span style=\"color: red;\" id=\"numberBilling-error\"></span>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Proveedor</mat-label>\r\n                <!-- <input matInput [(ngModel)]=\"data.providerid\" name=\"businessName\" disabled=\"disabled\" required> -->\r\n                <mat-select [(value)]=\"data.providerId\" [(ngModel)]=\"data.providerId\" name=\"providerid\" [disabled]=\"disabled\" required>\r\n                    <mat-option *ngFor=\"let pro of providers\" [(value)]=\"pro.id\">\r\n                        {{pro.businessName}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                <span style=\"color: red;\" id=\"providerId-error\"></span>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Tipo Factura</mat-label>\r\n                <!-- <input matInput [(ngModel)]=\"data.billingtype\" name=\"billingtype\" disabled=\"disabled\" required> -->\r\n                <mat-select [(value)]=\"data.billingType\" [(ngModel)]=\"data.billingType\" name=\"billingtype\" [disabled]=\"disabled\" required>\r\n                    <mat-option *ngFor=\"let type of typesBilling\" [(value)]=\"type.id\">\r\n                        {{type.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Tipo Producto</mat-label>\r\n                <mat-select [(value)]=\"data.productType\" [(ngModel)]=\"data.productType\" name=\"producttype\" matNativeControl [disabled]=\"disabled\" required>\r\n                    <mat-option value=1>Producto </mat-option>\r\n                    <mat-option value=2>Servicio </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Centro de Costo</mat-label>\r\n                <mat-select [(value)]=\"data.costcenterId\" [(ngModel)]=\"data.costcenterId\" name=\"costcenterid\" [disabled]=\"disabled\" required (selectionChange)=\"validateCostCenter($event.value)\">\r\n                    <mat-option *ngFor=\"let pro of costCenters\" [(value)]=\"pro.id\">\r\n                        {{pro.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Moneda</mat-label>\r\n                <mat-select [(value)]=\"data.moneyId\" [(ngModel)]=\"data.moneyId\" name=\"moneyid\" [disabled]=\"disabled\" required>\r\n                    <mat-option *ngFor=\"let pro of moneys\" [(value)]=\"pro.id\">\r\n                        {{pro.unitymoney}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Tasa de Cambio</mat-label>\r\n                <input type=\"number\" min=\"0\" matInput [(ngModel)]=\"data.exchangeRate\" name=\"exchangerate\" value=\"{{data.exchangeRate }}\" [disabled]=\"disabled\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Valor</mat-label>\r\n                <input type=\"number\" currencyMask min=\"0\" matInput [(ngModel)]=\"data.valueBill\" name=\"exchangerate\" value=\"{{data.valueBill }}\" [disabled]=\"disabled\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Fecha factura</mat-label>\r\n                <input matInput [matDatepicker]=\"datebilling\" [(ngModel)]=\"data.dateBilling\" name=\"datebilling\" [disabled]=\"disabled\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"datebilling\"></mat-datepicker-toggle>\r\n                <mat-datepicker #datebilling [startAt]=\"datebilling\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Fecha Límite</mat-label>\r\n                <input matInput [matDatepicker]=\"datelimit\" [(ngModel)]=\"data.dateLimit\" name=\"datelimit\" [disabled]=\"disabled\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"datelimit\"></mat-datepicker-toggle>\r\n                <mat-datepicker #datelimit [startAt]=\"datelimit\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\">\r\n                <mat-label>Fecha Radicado</mat-label>\r\n                <input matInput [matDatepicker]=\"datefiled\" [(ngModel)]=\"data.dateFiled\" name=\"datefiled\" [disabled]=\"disabled\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"datefiled\"></mat-datepicker-toggle>\r\n                <mat-datepicker #datefiled [startAt]=\"datelimit\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"example-full-width\" *ngIf=\"isVisible\">\r\n                <mat-label>Causal de Rechazo</mat-label>\r\n                <input matInput [(ngModel)]=\"data.casueRejection\" name=\"casueRejection\" [width]=\"100\" [disabled]=\"!disabled\">\r\n            </mat-form-field>\r\n\r\n            <div class=\"file-content\">\r\n                <mat-label id=\"labelFile\"></mat-label>\r\n                <button type=\"button\" mat-raised-button (click)=\"fileInput.click()\" *ngIf=\"!disabled\"> <i\r\n                        class=\"fa fa-file-pdf-o\"></i>\r\n                    Adjuntar Factura</button>\r\n                <input hidden (change)=\"onFileSelected()\" #fileInput type=\"file\" id=\"file\" accept=\"application/pdf\">\r\n            </div>\r\n\r\n        </div>\r\n        <div mat-dialog-actions class=\"buttons\">\r\n            <button mat-button class=\"btn btn-light\" (click)=\"onNoClick()\">Cancelar</button>\r\n            <button mat-button class=\"btn btn-success\" [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"validateForm()\">Guardar</button>\r\n        </div>\r\n\r\n\r\n    </form>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/modules/billing/billing-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/billing/billing-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BillingRoutingModule */

  /***/
  function srcAppModulesBillingBillingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function () {
      return BillingRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _detailbilling_detailbilling_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./detailbilling/detailbilling.component */
    "./src/app/modules/billing/detailbilling/detailbilling.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./billing.component */
    "./src/app/modules/billing/billing.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var routes = [{
      path: '',
      component: _billing_component__WEBPACK_IMPORTED_MODULE_3__["BillingComponent"]
    }, {
      path: 'detailbilling/:id',
      component: _detailbilling_detailbilling_component__WEBPACK_IMPORTED_MODULE_1__["DetailbillingComponent"]
    }];

    var BillingRoutingModule = function BillingRoutingModule() {
      _classCallCheck(this, BillingRoutingModule);
    };

    BillingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BillingRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/billing/billing.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/modules/billing/billing.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesBillingBillingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mdc-fab {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  background-color: #212529;\n  color: white;\n  width: 56px;\n  height: 56px;\n  border: none;\n  border-radius: 50%;\n  box-shadow: -6px -1px 3px #00000029; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iaWxsaW5nL0M6XFxVc2Vyc1xcaGFyZmVcXERvY3VtZW50c1xcUHJveWVjdG9zXFx0ZW1wbGF0ZXNcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYmlsbGluZ1xcYmlsbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9iaWxsaW5nL2JpbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWRjLWZhYiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IC02cHggLTFweCAzcHggIzAwMDAwMDI5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/billing/billing.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/billing/billing.component.ts ***!
    \******************************************************/

  /*! exports provided: BillingComponent */

  /***/
  function srcAppModulesBillingBillingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillingComponent", function () {
      return BillingComponent;
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


    var src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/service.base */
    "./src/app/shared/services/service.base.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_services_billing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/billing.service */
    "./src/app/shared/services/billing.service.ts");
    /* harmony import */


    var src_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var src_app_shared_helpers_controlError_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/helpers/controlError.helper */
    "./src/app/shared/helpers/controlError.helper.ts");
    /* harmony import */


    var _shared_services_aprovalMatrix_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../shared/services/aprovalMatrix.service */
    "./src/app/shared/services/aprovalMatrix.service.ts");
    /* harmony import */


    var _pupup_billing_pupup_billing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pupup-billing/pupup-billing.component */
    "./src/app/modules/billing/pupup-billing/pupup-billing.component.ts");

    var BillingComponent =
    /*#__PURE__*/
    function () {
      function BillingComponent(serviceBase, billingService, adminService, // tslint:disable-next-line: align
      aprovalMatrixService, helper, // tslint:disable-next-line: align
      dialog, route, router) {
        _classCallCheck(this, BillingComponent);

        this.serviceBase = serviceBase;
        this.billingService = billingService;
        this.adminService = adminService;
        this.aprovalMatrixService = aprovalMatrixService;
        this.helper = helper;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.displayedColumns = ['numberbilling', 'providerid', 'billingtype', 'producttype', 'costcenterid', 'exchangerate', 'datebilling', 'datelimit', 'datefiled', 'valuebill', 'stateid'];
        this.providers = [];
        this.billings = [];
        this.products = [];
        this.costCenters = [];
        this.moneys = [];
        this.states = [];
        this.getAllCostCenters();
        this.getAllTypeBilling();
        this.getAllMoneys();
        this.getAllStates();
        this.getAllProducts();
        this.getAllProviders();
      }

      _createClass(BillingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.serviceBase.validateSession();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "getAllBillings",
        value: function getAllBillings() {
          var _this = this;

          this.billingService.GetAllBilling().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this.billings = res.result;
              _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.result);
              _this.dataSource.paginator = _this.paginator;
              _this.dataSource.sort = _this.sort;
            } else {
              _this.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllProviders",
        value: function getAllProviders() {
          var _this2 = this;

          this.adminService.getAllProviders().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this2.providers = res.result;
            } else {
              _this2.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this3 = this;

          this.adminService.getAllProducts().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this3.products = res.result;
            } else {
              _this3.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllCostCenters",
        value: function getAllCostCenters() {
          var _this4 = this;

          this.adminService.getAllCostCenter().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this4.costCenters = res.result;
            } else {
              _this4.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllMoneys",
        value: function getAllMoneys() {
          var _this5 = this;

          this.aprovalMatrixService.getAllMoney().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this5.moneys = res.result;
            } else {
              _this5.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllStates",
        value: function getAllStates() {
          var _this6 = this;

          this.billingService.GetAllStates().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this6.states = res.result;
            } else {
              _this6.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllTypeBilling",
        value: function getAllTypeBilling() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.billingService.GetAllTypesBilling().subscribe(function (res) {
                      if (res.isSuccesfull) {
                        _this7.typesBilling = res.result;

                        _this7.getAllBillings();
                      } else {
                        _this7.helper.controlErros(res);
                      }
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getNameById",
        value: function getNameById(nameList, id) {
          if (!!!id) {
            return;
          }

          switch (nameList) {
            case 'billingtype':
              // if (!!this.typesBilling) {
              //   return '';
              // }
              var type = this.typesBilling.find(function (x) {
                return x.id === id;
              });
              return !!type ? type.code : '';

            case 'providerid':
              var prov = this.providers.find(function (p) {
                return p.id === id;
              });
              return !!prov ? prov.businessName : '';

            case 'producttype':
              var prod = this.products.find(function (pro) {
                return pro.id === id;
              });
              return !!prod ? prod.code : '';

            case 'costcenterid':
              var cost = this.costCenters.find(function (co) {
                return co.id === id;
              });
              return !!cost ? cost.name : '';

            case 'stateid':
              var stat = this.states.find(function (st) {
                return st.id === id;
              });
              return !!stat ? stat.name : '';
          }
        }
      }, {
        key: "getColorById",
        value: function getColorById(stateid) {
          var state = this.states.find(function (st) {
            return st.id === stateid;
          });
          return !!state ? state.color : 'red';
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "setAprovalMatrix",
        value: function setAprovalMatrix(row) {
          this.router.navigate(['billing', 'detailbilling', row.numberBilling]);
        }
      }, {
        key: "addCostCenter",
        value: function addCostCenter() {
          var _this8 = this;

          var dialogRef = this.dialog.open(_pupup_billing_pupup_billing_component__WEBPACK_IMPORTED_MODULE_9__["PupupBillingComponent"], {
            height: 'auto',
            width: 'auto',
            data: this.billing,
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this8.getAllBillings();
          });
        }
      }]);

      return BillingComponent;
    }();

    BillingComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__["ServiceBase"]
      }, {
        type: src_app_shared_services_billing_service__WEBPACK_IMPORTED_MODULE_5__["BillingService"]
      }, {
        type: src_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]
      }, {
        type: _shared_services_aprovalMatrix_service__WEBPACK_IMPORTED_MODULE_8__["AprovalMatrixService"]
      }, {
        type: src_app_shared_helpers_controlError_helper__WEBPACK_IMPORTED_MODULE_7__["ControlErrorHelperService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      static: false
    })], BillingComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      static: false
    })], BillingComponent.prototype, "sort", void 0);
    BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-billing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./billing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/billing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./billing.component.scss */
      "./src/app/modules/billing/billing.component.scss")).default]
    })], BillingComponent);
    /***/
  },

  /***/
  "./src/app/modules/billing/billing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/billing/billing.module.ts ***!
    \***************************************************/

  /*! exports provided: BillingModule */

  /***/
  function srcAppModulesBillingBillingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillingModule", function () {
      return BillingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _billing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./billing-routing.module */
    "./src/app/modules/billing/billing-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _billing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./billing.component */
    "./src/app/modules/billing/billing.component.ts");
    /* harmony import */


    var _pupup_billing_pupup_billing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pupup-billing/pupup-billing.component */
    "./src/app/modules/billing/pupup-billing/pupup-billing.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _detailbilling_detailbilling_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./detailbilling/detailbilling.component */
    "./src/app/modules/billing/detailbilling/detailbilling.component.ts");

    var BillingModule = function BillingModule() {
      _classCallCheck(this, BillingModule);
    };

    BillingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_billing_component__WEBPACK_IMPORTED_MODULE_5__["BillingComponent"], _pupup_billing_pupup_billing_component__WEBPACK_IMPORTED_MODULE_6__["PupupBillingComponent"], _detailbilling_detailbilling_component__WEBPACK_IMPORTED_MODULE_8__["DetailbillingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _billing_routing_module__WEBPACK_IMPORTED_MODULE_2__["BillingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
      entryComponents: [_pupup_billing_pupup_billing_component__WEBPACK_IMPORTED_MODULE_6__["PupupBillingComponent"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],
        useValue: {
          float: 'always'
        }
      }]
    })], BillingModule);
    /***/
  },

  /***/
  "./src/app/modules/billing/detailbilling/detailbilling.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/billing/detailbilling/detailbilling.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesBillingDetailbillingDetailbillingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-group {\n  display: -webkit-box;\n  display: flex;\n  flex-flow: wrap;\n  margin-bottom: 1em; }\n  .container-group .group-field {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    flex-direction: row;\n    margin: 2px;\n    width: 33%;\n    height: 40px; }\n  .container-group .group-field .title-group {\n      padding: 0.5em;\n      font-size: 14px;\n      font-weight: bold;\n      vertical-align: middle;\n      width: 40%; }\n  .container-group .group-field .value-group {\n      background-color: rgba(145, 145, 145, 0.8);\n      padding: 1em;\n      font-size: 14px;\n      width: 50%; }\n  .buttons {\n  padding: 1em;\n  -webkit-box-align: right;\n          align-items: right;\n  text-align: right;\n  align-content: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iaWxsaW5nL2RldGFpbGJpbGxpbmcvQzpcXFVzZXJzXFxoYXJmZVxcRG9jdW1lbnRzXFxQcm95ZWN0b3NcXHRlbXBsYXRlc1xcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxiaWxsaW5nXFxkZXRhaWxiaWxsaW5nXFxkZXRhaWxiaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBSHRCO0lBS1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFYcEI7TUFhWSxjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEIsVUFBVSxFQUFBO0VBakJ0QjtNQW9CWSwwQ0FBMEM7TUFDMUMsWUFBWTtNQUNaLGVBQWU7TUFDZixVQUFVLEVBQUE7RUFLdEI7RUFDSSxZQUFZO0VBQ1osd0JBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2JpbGxpbmcvZGV0YWlsYmlsbGluZy9kZXRhaWxiaWxsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgLmdyb3VwLWZpZWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC50aXRsZS1ncm91cCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmFsdWUtZ3JvdXAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NSwgMTQ1LCAxNDUsIDAuOCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiByaWdodDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/billing/detailbilling/detailbilling.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/billing/detailbilling/detailbilling.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DetailbillingComponent */

  /***/
  function srcAppModulesBillingDetailbillingDetailbillingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailbillingComponent", function () {
      return DetailbillingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/services/service.base */
    "./src/app/shared/services/service.base.ts");
    /* harmony import */


    var _shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/enums/statesBilling.enum */
    "./src/app/shared/enums/statesBilling.enum.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_services_billing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/billing.service */
    "./src/app/shared/services/billing.service.ts");

    var DetailbillingComponent =
    /*#__PURE__*/
    function () {
      function DetailbillingComponent(serviceBase, billingService, route, router) {
        _classCallCheck(this, DetailbillingComponent);

        this.serviceBase = serviceBase;
        this.billingService = billingService;
        this.route = route;
        this.router = router;
        this.displayedColumns = ['levelaproval', 'aprovalperson', 'dateRequest', 'dateResponse', 'acordingDays', 'executiondays', 'indicator', 'comments'];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.detailBillingSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.numberBilling = "";
        this.isRequestAvailable = false;
        this.observations = "";
      }

      _createClass(DetailbillingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.serviceBase.validateSession();
          this.numberBilling = this.route.snapshot.paramMap.get('id');
          this.getDetailBilling(parseInt(this.numberBilling));
        }
      }, {
        key: "getDetailBilling",
        value: function getDetailBilling(numberBilling) {
          var _this9 = this;

          this.detailBillingSubscription = this.billingService.GetDetailBilling(numberBilling).subscribe(function (res) {
            if (res.isSuccesfull) {
              _this9.detailBilling = res.result;
              _this9.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.result);
              _this9.dataSource.paginator = _this9.paginator;
              _this9.dataSource.sort = _this9.sort;
              _this9.title = 'Detalle Factura Nro.: ' + _this9.detailBilling[0].numeroFactura;

              _this9.validateIfCanAproval(_this9.detailBilling);
            } else {}
          });
        }
      }, {
        key: "validateIfCanAproval",
        value: function validateIfCanAproval(detailBilling) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = detailBilling[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var iterator = _step.value;

              if (iterator.personAprovalId === this.serviceBase.session.person.id) {
                if (iterator.estadoFacturaId === _shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_2__["StatusBillingEnum"].ATiempo) {
                  this.isRequestAvailable = true;
                }
              }
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
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
          this.detailBillingSubscription.unsubscribe();
        }
      }, {
        key: "return",
        value: function _return() {
          this.router.navigate(['billing']);
        }
      }, {
        key: "regectBilling",
        value: function regectBilling() {
          var _this10 = this;

          var textAtrea = document.getElementById('rejectionCause').value;

          if (!!textAtrea) {
            this.billingService.ContinueAprovalProcess(this.numberBilling, _shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_2__["StatusBillingEnum"].Rechazada, textAtrea).subscribe(function (res) {
              if (res.isSuccesfull) {
                alert(res.result);

                _this10.getDetailBilling(parseInt(_this10.numberBilling));
              } else {
                console.log(res);
              }
            });
          }
        }
      }, {
        key: "aprovalBilling",
        value: function aprovalBilling() {
          var _this11 = this;

          var textAtrea = document.getElementById('message-text').value;
          if (!!textAtrea) this.observations = textAtrea;

          if (!!this.observations) {
            this.billingService.ContinueAprovalProcess(this.numberBilling, _shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_2__["StatusBillingEnum"].Aprobada, this.observations).subscribe(function (res) {
              if (res.isSuccesfull) {
                alert(res.result);

                _this11.getDetailBilling(parseInt(_this11.numberBilling));
              } else {
                console.log(res);
              }
            });
          }
        }
      }]);

      return DetailbillingComponent;
    }();

    DetailbillingComponent.ctorParameters = function () {
      return [{
        type: _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__["ServiceBase"]
      }, {
        type: src_app_shared_services_billing_service__WEBPACK_IMPORTED_MODULE_7__["BillingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
      static: false
    })], DetailbillingComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      static: false
    })], DetailbillingComponent.prototype, "sort", void 0);
    DetailbillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-detailbilling',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detailbilling.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/detailbilling/detailbilling.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detailbilling.component.scss */
      "./src/app/modules/billing/detailbilling/detailbilling.component.scss")).default]
    })], DetailbillingComponent);
    /***/
  },

  /***/
  "./src/app/modules/billing/pupup-billing/pupup-billing.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/billing/pupup-billing/pupup-billing.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesBillingPupupBillingPupupBillingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px; }\n\n.box .example-form .example-full-width {\n  margin: 1em; }\n\n.box .example-form .file-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  padding: 2em;\n  margin: 1em;\n  border-radius: 5px; }\n\n.box .btn-block {\n  margin: 1em; }\n\n.box .buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n  padding: 0; }\n\n.box .buttons button {\n    margin: 2px;\n    margin-bottom: 2em; }\n\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iaWxsaW5nL3B1cHVwLWJpbGxpbmcvQzpcXFVzZXJzXFxoYXJmZVxcRG9jdW1lbnRzXFxQcm95ZWN0b3NcXHRlbXBsYXRlc1xcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxiaWxsaW5nXFxwdXB1cC1iaWxsaW5nXFxwdXB1cC1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBS00sV0FBVyxFQUFBOztBQUxqQjtFQVNNLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBbEJ4QjtFQXVCSSxXQUFXLEVBQUE7O0FBdkJmO0VBMkJJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUE5QmQ7SUFpQ00sV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQU14Qjs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9iaWxsaW5nL3B1cHVwLWJpbGxpbmcvcHVwdXAtYmlsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQrLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uYm94IHtcclxuICAuZXhhbXBsZS1mb3JtIHtcclxuXHJcblxyXG4gICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1ibG9jayB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICB9XHJcblxyXG4gIC5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxudWwsXHJcbmxpIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/billing/pupup-billing/pupup-billing.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/billing/pupup-billing/pupup-billing.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PupupBillingComponent */

  /***/
  function srcAppModulesBillingPupupBillingPupupBillingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PupupBillingComponent", function () {
      return PupupBillingComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/service.base */
    "./src/app/shared/services/service.base.ts");
    /* harmony import */


    var src_app_shared_services_billing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/billing.service */
    "./src/app/shared/services/billing.service.ts");
    /* harmony import */


    var src_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var src_app_shared_helpers_controlError_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/helpers/controlError.helper */
    "./src/app/shared/helpers/controlError.helper.ts");
    /* harmony import */


    var src_app_shared_services_aprovalMatrix_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/aprovalMatrix.service */
    "./src/app/shared/services/aprovalMatrix.service.ts");
    /* harmony import */


    var src_app_shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/enums/statesBilling.enum */
    "./src/app/shared/enums/statesBilling.enum.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_pipes_arraySort_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../../shared/pipes/arraySort.pipe */
    "./src/app/shared/pipes/arraySort.pipe.ts");

    var PupupBillingComponent =
    /*#__PURE__*/
    function () {
      function PupupBillingComponent(dialogRef, // tslint:disable-next-line: align
      bill, helper, // tslint:disable-next-line: align
      aprovalMatrixService, // tslint:disable-next-line: align
      serviceBase, billingService, adminService, // tslint:disable-next-line: align
      formBuilder, httpClient) {
        _classCallCheck(this, PupupBillingComponent);

        this.dialogRef = dialogRef;
        this.bill = bill;
        this.helper = helper;
        this.aprovalMatrixService = aprovalMatrixService;
        this.serviceBase = serviceBase;
        this.billingService = billingService;
        this.adminService = adminService;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.files = [];
        this.title = 'Agregar Factura';
        this.providers = [];
        this.products = [];
        this.costCenters = [];
        this.moneys = [];
        this.states = [];
        this.disabled = false;
        this.isVisible = false;
        this.aprovalMatrices = [];
        this.canCreate = false;
        this.data = bill;
        dialogRef.disableClose = true;
        this.getAllProviders();
        this.getAllProducts();
        this.getAllCostCenters();
        this.getAllTypeBilling();
        this.getAllMoneys();
        this.getAllStates();
        this.getAllAprovalMatrix();

        if (this.data.id > 0) {
          this.title = 'Modificar Factura';
          this.disabled = true; // cambiar

          this.isVisible = this.data.stateid === src_app_shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_9__["StatusBillingEnum"].Rechazada ? true : false;
        } else {
          this.disabled = false;
          this.setFieldsVisible(this.data.stateid);
        }
      }

      _createClass(PupupBillingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAllProviders",
        value: function getAllProviders() {
          var _this12 = this;

          this.adminService.getAllProviders().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this12.providers = res.result;
            } else {
              _this12.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllTypeBilling",
        value: function getAllTypeBilling() {
          var _this13 = this;

          this.billingService.GetAllTypesBilling().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this13.typesBilling = res.result;
            } else {
              _this13.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this14 = this;

          this.adminService.getAllProducts().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this14.products = res.result;
            } else {
              _this14.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllCostCenters",
        value: function getAllCostCenters() {
          var _this15 = this;

          this.adminService.getAllCostCenter().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this15.costCenters = res.result;
            } else {
              _this15.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllMoneys",
        value: function getAllMoneys() {
          var _this16 = this;

          this.aprovalMatrixService.getAllMoney().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this16.moneys = res.result;
            } else {
              _this16.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllStates",
        value: function getAllStates() {
          var _this17 = this;

          this.billingService.GetAllStates().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this17.states = res.result;
            } else {
              _this17.helper.controlErros(res);
            }
          });
        }
      }, {
        key: "getAllAprovalMatrix",
        value: function getAllAprovalMatrix() {
          var _this18 = this;

          this.aprovalMatrixService.GetAllAprovalMatrix().subscribe(function (res) {
            if (res.isSuccesfull) {
              _this18.aprovalMatrices = res.result;
            }
          });
        }
      }, {
        key: "setFieldsVisible",
        value: function setFieldsVisible(event) {
          if (event === src_app_shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_9__["StatusBillingEnum"].Rechazada) {
            this.isVisible = true;
          } else {
            this.isVisible = false;
          }
        }
      }, {
        key: "validateCostCenter",
        value: function validateCostCenter(costcenterId) {
          var aprovals = this.aprovalMatrices.find(function (ap) {
            if (ap.costCenterId === costcenterId) {
              return ap;
            }
          });

          if (!!aprovals) {
            this.canCreate = true;
          } else {
            alert('El centro de costo no tiene matriz de aprobación');
            this.canCreate = false;
            return;
          }
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected() {
          var inputNode = document.querySelector('#file');
          var label = document.getElementById('labelFile');

          if (inputNode.files.length > 0) {
            this.fileValues = inputNode.files[0];
            label.innerText = this.fileValues.name;
          } else {
            label.innerText = '';
          }
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          this.canCreate = true;

          if (!!!this.data.numberBilling) {
            this.canCreate = false;
          }

          if (!!!this.data.billingType) {
            this.canCreate = false;
          }

          if (!!!this.data.providerId) {
            this.canCreate = false;
          }

          if (!!!this.data.productType) {
            this.canCreate = false;
          }

          if (!!!this.data.costcenterId) {
            this.canCreate = false;
          } // if (!(!!this.data.moneyId)) {
          //   this.canCreate = false;
          // }


          if (!(!!this.data.valueBill && this.data.valueBill > 0)) {
            this.canCreate = false;
          }

          if (!(!!this.data.exchangeRate && this.data.exchangeRate > 0)) {
            this.canCreate = false;
          }

          if (!!!this.data.dateBilling) {
            this.canCreate = false;
          }

          if (!!!this.data.dateFiled) {
            this.canCreate = false;
          }

          if (!!!this.data.dateLimit) {
            this.canCreate = false;
          }

          if (!!!this.fileValues) {
            this.canCreate = false;
          }

          this.validateMaxValue(this.data.costcenterId, this.data.valueBill);

          if (this.canCreate) {
            this.save();
          } else {
            alert('Valide nuevamente los datos');
            this.dialogRef.disableClose = false;
          }
        }
      }, {
        key: "validateMaxValue",
        value: function validateMaxValue(costcenterId, valueBill) {
          var currentmatrix = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.aprovalMatrices[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var matrix = _step2.value;

              if (matrix.costCenterId === costcenterId) {
                currentmatrix.push(matrix);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (currentmatrix.length > 0) {
            var sorts = new _shared_pipes_arraySort_pipe__WEBPACK_IMPORTED_MODULE_11__["ArraySortPipe"]();
            var matrixOrder = sorts.transform(currentmatrix, 'levelAprobation');
            var level = matrixOrder[currentmatrix.length - 1];

            if (!!level) {
              if (level.valueMax < valueBill) {
                alert('El valor máximo permitido para el centro el centro de costo seleccionado es ' + level.valueMax);
                this.canCreate = false;
              }
            }
          } else {
            alert('El centro de costo no tiene matriz de aprobación');
          }
        }
      }, {
        key: "save",
        value: function save() {
          var _this19 = this;

          this.data.stateid = !!this.data.id || this.data.id === 0 ? this.data.stateid : src_app_shared_enums_statesBilling_enum__WEBPACK_IMPORTED_MODULE_9__["StatusBillingEnum"]['En Proceso Aprobación'];
          this.billingService.SaveBilling(this.data, this.fileValues).subscribe(function (res) {
            if (res.isSuccesfull) {
              alert('Se ha agregado la factura');
            } else {
              _this19.helper.controlErros(res);
            }
          });
        }
      }]);

      return PupupBillingComponent;
    }();

    PupupBillingComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_shared_helpers_controlError_helper__WEBPACK_IMPORTED_MODULE_7__["ControlErrorHelperService"]
      }, {
        type: src_app_shared_services_aprovalMatrix_service__WEBPACK_IMPORTED_MODULE_8__["AprovalMatrixService"]
      }, {
        type: src_app_shared_services_service_base__WEBPACK_IMPORTED_MODULE_4__["ServiceBase"]
      }, {
        type: src_app_shared_services_billing_service__WEBPACK_IMPORTED_MODULE_5__["BillingService"]
      }, {
        type: src_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileUpload', {
      static: false
    })], PupupBillingComponent.prototype, "fileUpload", void 0);
    PupupBillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pupup-billing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pupup-billing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/billing/pupup-billing/pupup-billing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pupup-billing.component.scss */
      "./src/app/modules/billing/pupup-billing/pupup-billing.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], PupupBillingComponent);
    /***/
  },

  /***/
  "./src/app/shared/enums/statesBilling.enum.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/enums/statesBilling.enum.ts ***!
    \****************************************************/

  /*! exports provided: StatusBillingEnum */

  /***/
  function srcAppSharedEnumsStatesBillingEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBillingEnum", function () {
      return StatusBillingEnum;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var StatusBillingEnum;

    (function (StatusBillingEnum) {
      StatusBillingEnum[StatusBillingEnum["ProcesoAprobacion"] = 1] = "ProcesoAprobacion";
      StatusBillingEnum[StatusBillingEnum["Aprobada"] = 2] = "Aprobada";
      StatusBillingEnum[StatusBillingEnum["Rechazada"] = 3] = "Rechazada";
      StatusBillingEnum[StatusBillingEnum["Cancelada"] = 4] = "Cancelada";
      StatusBillingEnum[StatusBillingEnum["PendienteTiempo"] = 5] = "PendienteTiempo";
      StatusBillingEnum[StatusBillingEnum["ATiempo"] = 6] = "ATiempo";
      StatusBillingEnum[StatusBillingEnum["Tarde"] = 7] = "Tarde";
    })(StatusBillingEnum || (StatusBillingEnum = {}));
    /***/

  },

  /***/
  "./src/app/shared/helpers/controlError.helper.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/helpers/controlError.helper.ts ***!
    \*******************************************************/

  /*! exports provided: ControlErrorHelperService */

  /***/
  function srcAppSharedHelpersControlErrorHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlErrorHelperService", function () {
      return ControlErrorHelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ControlErrorHelperService =
    /*#__PURE__*/
    function () {
      function ControlErrorHelperService() {
        _classCallCheck(this, ControlErrorHelperService);
      }

      _createClass(ControlErrorHelperService, [{
        key: "controlErros",
        value: function controlErros(res) {
          try {
            if (!res.isSuccesfull) {
              alert(res.message);
            }
          } catch (e) {
            //alert('Error Inesperado');
            console.error(e);
          }
        }
      }]);

      return ControlErrorHelperService;
    }();

    ControlErrorHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ControlErrorHelperService);
    /***/
  },

  /***/
  "./src/app/shared/services/billing.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/billing.service.ts ***!
    \****************************************************/

  /*! exports provided: BillingService */

  /***/
  function srcAppSharedServicesBillingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillingService", function () {
      return BillingService;
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

    var BillingService =
    /*#__PURE__*/
    function () {
      function BillingService(http, serviceBase) {
        _classCallCheck(this, BillingService);

        this.http = http;
        this.serviceBase = serviceBase;
        this.urls = JSON.parse(localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["URLS"]));
        this.session = JSON.parse(localStorage.getItem(_globals_localStorage_const__WEBPACK_IMPORTED_MODULE_4__["SESSION"]));

        if (this.urls === undefined || this.session === undefined) {
          this.serviceBase.validateSession();
        }
      }

      _createClass(BillingService, [{
        key: "GetAllBilling",
        value: function GetAllBilling() {
          return this.http.get("".concat(this.urls.urlbase, "Billing/GetAllBilling"));
        } // SaveBilling(levelsAproval: Billing) {
        //   return this.http.post<RequestResult<Billing>>(`${this.urls.urlbase}Billing/SaveBilling`, levelsAproval);
        // }

      }, {
        key: "SaveBilling",
        value: function SaveBilling(billing, file) {
          billing.userChange = this.session.person.id;
          var formData = new FormData();
          formData.set('uploadFile', file, file.name);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('billing', JSON.stringify(billing));
          return this.http.post("".concat(this.urls.urlbase, "Billing/SaveBilling"), formData, {
            params: params
          });
        }
      }, {
        key: "GetAllStates",
        value: function GetAllStates() {
          return this.http.get("".concat(this.urls.urlbase, "Billing/GetStates"));
        }
      }, {
        key: "GetAllTypesBilling",
        value: function GetAllTypesBilling() {
          return this.http.get("".concat(this.urls.urlbase, "Billing/GetAllTypeBilling"));
        }
      }, {
        key: "GetDetailBilling",
        value: function GetDetailBilling(numberbilling) {
          return this.http.get("".concat(this.urls.urlbase, "Billing/GetDetailBilling?numberBilling=") + numberbilling);
        }
      }, {
        key: "ContinueAprovalProcess",
        value: function ContinueAprovalProcess(numberbilling, newStatus, observations) {
          var params = "numberbilling=".concat(numberbilling, "&userCode=").concat(this.session.person.id, "&newStatus=").concat(newStatus, "&observations=").concat(observations);
          return this.http.get("".concat(this.urls.urlbase, "Billing/ContinueAprovalProcess?").concat(params));
        }
      }]);

      return BillingService;
    }();

    BillingService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _service_base__WEBPACK_IMPORTED_MODULE_3__["ServiceBase"]
      }];
    };

    BillingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BillingService);
    /***/
  }
}]);
//# sourceMappingURL=modules-billing-billing-module-es5.js.map
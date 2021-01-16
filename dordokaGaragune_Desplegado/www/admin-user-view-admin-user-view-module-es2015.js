(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-user-view-admin-user-view-module"],{

/***/ "2wEq":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user-view/admin-user-view.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-title>Admin user view</ion-title>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-footer>\r\n    \r\n  </ion-footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"presentModal()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "I7N1":
/*!*********************************************************!*\
  !*** ./src/app/admin-user-view/admin-user-view.page.ts ***!
  \*********************************************************/
/*! exports provided: AdminUserViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserViewPage", function() { return AdminUserViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_user_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-user-view.page.html */ "2wEq");
/* harmony import */ var _admin_user_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-user-view.page.scss */ "twzH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_crear_usuario_admin_crear_usuario_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-crear-usuario/admin-crear-usuario.page */ "QWQo");






let AdminUserViewPage = class AdminUserViewPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _admin_crear_usuario_admin_crear_usuario_page__WEBPACK_IMPORTED_MODULE_5__["AdminCrearUsuarioPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
};
AdminUserViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AdminUserViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-user-view',
        template: _raw_loader_admin_user_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_user_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminUserViewPage);



/***/ }),

/***/ "R6w1":
/*!*******************************************************************!*\
  !*** ./src/app/admin-user-view/admin-user-view-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminUserViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserViewPageRoutingModule", function() { return AdminUserViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_user_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-user-view.page */ "I7N1");




const routes = [
    {
        path: '',
        component: _admin_user_view_page__WEBPACK_IMPORTED_MODULE_3__["AdminUserViewPage"]
    }
];
let AdminUserViewPageRoutingModule = class AdminUserViewPageRoutingModule {
};
AdminUserViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminUserViewPageRoutingModule);



/***/ }),

/***/ "t1Bv":
/*!***********************************************************!*\
  !*** ./src/app/admin-user-view/admin-user-view.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminUserViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserViewPageModule", function() { return AdminUserViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_user_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-user-view-routing.module */ "R6w1");
/* harmony import */ var _admin_user_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-user-view.page */ "I7N1");







let AdminUserViewPageModule = class AdminUserViewPageModule {
};
AdminUserViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_user_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminUserViewPageRoutingModule"]
        ],
        declarations: [_admin_user_view_page__WEBPACK_IMPORTED_MODULE_6__["AdminUserViewPage"]]
    })
], AdminUserViewPageModule);



/***/ }),

/***/ "twzH":
/*!***********************************************************!*\
  !*** ./src/app/admin-user-view/admin-user-view.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLXZpZXcucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=admin-user-view-admin-user-view-module-es2015.js.map
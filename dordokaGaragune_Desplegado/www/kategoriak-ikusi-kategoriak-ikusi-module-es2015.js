(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kategoriak-ikusi-kategoriak-ikusi-module"],{

/***/ "0kuX":
/*!*************************************************************!*\
  !*** ./src/app/kategoriak-ikusi/kategoriak-ikusi.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrYXRlZ29yaWFrLWlrdXNpLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "RTn7":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kategoriak-ikusi/kategoriak-ikusi.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>kategoriakIkusi</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- List of Text Items-->\r\n    <ion-list *ngFor=\"let item of kategoriak\">\r\n        <ion-item>\r\n            <ion-label>{{item.uid}}</ion-label>\r\n            <ion-label>{{item.data.kategoriaIzena}}</ion-label>\r\n            <ion-button (click)=\"setPiktograma(item.uid)\">piktogramak</ion-button>\r\n\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "RV+3":
/*!***********************************************************!*\
  !*** ./src/app/kategoriak-ikusi/kategoriak-ikusi.page.ts ***!
  \***********************************************************/
/*! exports provided: KategoriakIkusiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KategoriakIkusiPage", function() { return KategoriakIkusiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_kategoriak_ikusi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./kategoriak-ikusi.page.html */ "RTn7");
/* harmony import */ var _kategoriak_ikusi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kategoriak-ikusi.page.scss */ "0kuX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_usuarios_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/usuarios-firebase.service */ "BRfS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let KategoriakIkusiPage = class KategoriakIkusiPage {
    constructor(modalController, firebaseConnect, router) {
        this.modalController = modalController;
        this.firebaseConnect = firebaseConnect;
        this.router = router;
        this.kategoriak = [];
    }
    ngOnInit() {
        this.irakurriKategoriak();
    }
    irakurriKategoriak() {
        console.log("sartu");
        this.firebaseConnect.getKategoriaList().once("value", (snap) => {
            snap.forEach((element) => {
                console.log("2---", element.val());
                var uid = element.key;
                var data = element.val();
                console.log(uid);
                console.log(data.kategoriaIzena);
                this.kategoriak.push({
                    uid: uid,
                    data: data,
                });
            });
        });
    }
    setPiktograma(uid) {
        this.firebaseConnect.setKategoria(uid);
        this.router.navigate(['piktogramak']);
    }
};
KategoriakIkusiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_usuarios_firebase_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosFirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
KategoriakIkusiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-kategoriak-ikusi',
        template: _raw_loader_kategoriak_ikusi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_kategoriak_ikusi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], KategoriakIkusiPage);



/***/ }),

/***/ "qory":
/*!*********************************************************************!*\
  !*** ./src/app/kategoriak-ikusi/kategoriak-ikusi-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: KategoriakIkusiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KategoriakIkusiPageRoutingModule", function() { return KategoriakIkusiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _kategoriak_ikusi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kategoriak-ikusi.page */ "RV+3");




const routes = [
    {
        path: '',
        component: _kategoriak_ikusi_page__WEBPACK_IMPORTED_MODULE_3__["KategoriakIkusiPage"]
    }
];
let KategoriakIkusiPageRoutingModule = class KategoriakIkusiPageRoutingModule {
};
KategoriakIkusiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KategoriakIkusiPageRoutingModule);



/***/ }),

/***/ "tp+k":
/*!*************************************************************!*\
  !*** ./src/app/kategoriak-ikusi/kategoriak-ikusi.module.ts ***!
  \*************************************************************/
/*! exports provided: KategoriakIkusiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KategoriakIkusiPageModule", function() { return KategoriakIkusiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _kategoriak_ikusi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kategoriak-ikusi-routing.module */ "qory");
/* harmony import */ var _kategoriak_ikusi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kategoriak-ikusi.page */ "RV+3");







let KategoriakIkusiPageModule = class KategoriakIkusiPageModule {
};
KategoriakIkusiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kategoriak_ikusi_routing_module__WEBPACK_IMPORTED_MODULE_5__["KategoriakIkusiPageRoutingModule"]
        ],
        declarations: [_kategoriak_ikusi_page__WEBPACK_IMPORTED_MODULE_6__["KategoriakIkusiPage"]]
    })
], KategoriakIkusiPageModule);



/***/ })

}]);
//# sourceMappingURL=kategoriak-ikusi-kategoriak-ikusi-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-kategoria-user-kategoria-module"],{

/***/ "+qtS":
/*!*****************************************!*\
  !*** ./src/app/services/tts.service.ts ***!
  \*****************************************/
/*! exports provided: TtsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TtsService", function() { return TtsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "EvNN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let TtsService = class TtsService {
    constructor(_tts, _toast) {
        this._tts = _tts;
        this._toast = _toast;
    }
    discurso(texto) {
        this._tts.speak({
            text: texto,
            locale: 'es-ES',
            rate: 1
        }).then(() => this.mensaje('Español'))
            .catch((resp) => console.error(resp));
    }
    mensaje(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this._toast.create({
                message: texto,
                duration: 2000
            });
            toast.present();
        });
    }
};
TtsService.ctorParameters = () => [
    { type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__["TextToSpeech"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
TtsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TtsService);



/***/ }),

/***/ "/GdE":
/*!*****************************************************************!*\
  !*** ./src/app/user-kategoria/user-kategoria-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserKategoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserKategoriaPageRoutingModule", function() { return UserKategoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_kategoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-kategoria.page */ "AQ0I");




const routes = [
    {
        path: '',
        component: _user_kategoria_page__WEBPACK_IMPORTED_MODULE_3__["UserKategoriaPage"]
    }
];
let UserKategoriaPageRoutingModule = class UserKategoriaPageRoutingModule {
};
UserKategoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserKategoriaPageRoutingModule);



/***/ }),

/***/ "AQ0I":
/*!*******************************************************!*\
  !*** ./src/app/user-kategoria/user-kategoria.page.ts ***!
  \*******************************************************/
/*! exports provided: UserKategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserKategoriaPage", function() { return UserKategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_kategoria_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-kategoria.page.html */ "L51C");
/* harmony import */ var _user_kategoria_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-kategoria.page.scss */ "yunN");
/* harmony import */ var _services_tts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/tts.service */ "+qtS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let UserKategoriaPage = class UserKategoriaPage {
    constructor(_stts) {
        this._stts = _stts;
    }
    hablar(esp) {
        this._stts.discurso(esp);
    }
};
UserKategoriaPage.ctorParameters = () => [
    { type: _services_tts_service__WEBPACK_IMPORTED_MODULE_3__["TtsService"] }
];
UserKategoriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-kategoria',
        template: _raw_loader_user_kategoria_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_kategoria_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserKategoriaPage);



/***/ }),

/***/ "L51C":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-kategoria/user-kategoria.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>userKategoria</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button>\n        <ion-icon name=\"settings\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"start\">\n        <ion-fab-button color=\"light\" (click)=\"hablar('Veo todo en blanco y negro el vaso acaba siendo amigo mudo las mismas caras, los mismo gestos amigo mudo... Quiero ser más rápido que ellos echar todo a perder un día tras otro y un buen rato después saber llegar a casa  antes de que el sol me diga que es de día.')\">\n            <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-vimeo\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab-list>\n\n    <!-- <ion-fab-list side=\"end\">\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-vimeo\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab-list> -->\n</ion-fab>");

/***/ }),

/***/ "TbbF":
/*!*********************************************************!*\
  !*** ./src/app/user-kategoria/user-kategoria.module.ts ***!
  \*********************************************************/
/*! exports provided: UserKategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserKategoriaPageModule", function() { return UserKategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_kategoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-kategoria-routing.module */ "/GdE");
/* harmony import */ var _user_kategoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-kategoria.page */ "AQ0I");







let UserKategoriaPageModule = class UserKategoriaPageModule {
};
UserKategoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_kategoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserKategoriaPageRoutingModule"],
        ],
        declarations: [_user_kategoria_page__WEBPACK_IMPORTED_MODULE_6__["UserKategoriaPage"]]
    })
], UserKategoriaPageModule);



/***/ }),

/***/ "yunN":
/*!*********************************************************!*\
  !*** ./src/app/user-kategoria/user-kategoria.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWthdGVnb3JpYS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=user-kategoria-user-kategoria-module-es2015.js.map
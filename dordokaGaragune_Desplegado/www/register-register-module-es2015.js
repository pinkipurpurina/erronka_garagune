(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Register user</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"onLogin(email,password)\" novalidate>\r\n        <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input formControlName=\"nick\" type=\"text\" #nick required></ion-input>\r\n        </ion-item>\r\n        <span class=\"red error ion-padding\" *ngIf=\"isSubmitted && errorControl.nick.errors?.required\">\r\n            Nombre requerido.\r\n        </span>\r\n\r\n        <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input formControlName=\"email\" type=\"text\" #email required></ion-input>\r\n        </ion-item>\r\n        <span class=\"red error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\r\n            Email requerido.\r\n        </span>\r\n        <span class=\"red error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\r\n            Por favor, introduzca un Email valido.\r\n        </span>\r\n\r\n        <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">Contraseña</ion-label>\r\n            <ion-input formControlName=\"password\" type=\"password\" #password required></ion-input>\r\n        </ion-item>\r\n        <span class=\"red error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\r\n            Contraseña requerida.\r\n        </span>\r\n        <span class=\"red error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.pattern\">\r\n            Por favor, introduzca una contraseña más segura.\r\n        </span>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button type=\"submit\" (click)=\"onRegister(email,password,nick)\" expand=\"block\">Register</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <p class=\"centrado\">\r\n                    <a routerLink=\"/login\">¿Ya tienes una cuenta?</a>\r\n                </p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </form>\r\n</ion-content>");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");







let RegisterPage = class RegisterPage {
    constructor(formBuilder, authSvc, router) {
        this.formBuilder = formBuilder;
        this.authSvc = authSvc;
        this.router = router;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            nick: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            // password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('')]]
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    onRegister(email, password, nick) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.isSubmitted = true;
                if (!this.ionicForm.valid) {
                    return false;
                }
                else {
                    const user = yield this.authSvc.register(email.value, password.value, nick.value);
                    if (user) {
                        this.router.navigate(['/login']);
                    }
                }
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado {\n  display: block;\n  text-align: center;\n}\n\n.red {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map
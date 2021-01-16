(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
    /***/
    "2bN1":
    /*!*********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function bN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "l7ks");
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      "hxgU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(authSvc, router) {
          _classCallCheck(this, ForgotPasswordPage);

          this.authSvc = authSvc;
          this.router = router;
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResetPassword",
          value: function onResetPassword(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return this.authSvc.resetPassword(email.value);

                    case 3:
                      this.router.navigate(['/login']);
                      _context.next = 9;
                      break;

                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context["catch"](0);
                      console.log('Error->', _context.t0);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 6]]);
            }));
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotPasswordPage);
      /***/
    },

    /***/
    "JgOp":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function JgOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "RtEn");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "2bN1");

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "RtEn":
    /*!*******************************************************************!*\
      !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function RtEn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "2bN1");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    "hxgU":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function hxgU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "l7ks":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l7ks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Recuperar contraseña</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form>\r\n        <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input type=\"text\" #email required></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button type=\"submit\" (click)=\"onResetPassword(email)\" expand=\"block\">Register</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </form>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map
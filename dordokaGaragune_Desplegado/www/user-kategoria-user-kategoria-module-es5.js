(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-kategoria-user-kategoria-module"], {
    /***/
    "+qtS":
    /*!*****************************************!*\
      !*** ./src/app/services/tts.service.ts ***!
      \*****************************************/

    /*! exports provided: TtsService */

    /***/
    function qtS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TtsService", function () {
        return TtsService;
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


      var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/text-to-speech/ngx */
      "EvNN");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var TtsService = /*#__PURE__*/function () {
        function TtsService(_tts, _toast) {
          _classCallCheck(this, TtsService);

          this._tts = _tts;
          this._toast = _toast;
        }

        _createClass(TtsService, [{
          key: "discurso",
          value: function discurso(texto) {
            var _this = this;

            this._tts.speak({
              text: texto,
              locale: 'es-ES',
              rate: 1
            }).then(function () {
              return _this.mensaje('Español');
            })["catch"](function (resp) {
              return console.error(resp);
            });
          }
        }, {
          key: "mensaje",
          value: function mensaje(texto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._toast.create({
                        message: texto,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return TtsService;
      }();

      TtsService.ctorParameters = function () {
        return [{
          type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__["TextToSpeech"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      TtsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TtsService);
      /***/
    },

    /***/
    "/GdE":
    /*!*****************************************************************!*\
      !*** ./src/app/user-kategoria/user-kategoria-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: UserKategoriaPageRoutingModule */

    /***/
    function GdE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserKategoriaPageRoutingModule", function () {
        return UserKategoriaPageRoutingModule;
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


      var _user_kategoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-kategoria.page */
      "AQ0I");

      var routes = [{
        path: '',
        component: _user_kategoria_page__WEBPACK_IMPORTED_MODULE_3__["UserKategoriaPage"]
      }];

      var UserKategoriaPageRoutingModule = function UserKategoriaPageRoutingModule() {
        _classCallCheck(this, UserKategoriaPageRoutingModule);
      };

      UserKategoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserKategoriaPageRoutingModule);
      /***/
    },

    /***/
    "AQ0I":
    /*!*******************************************************!*\
      !*** ./src/app/user-kategoria/user-kategoria.page.ts ***!
      \*******************************************************/

    /*! exports provided: UserKategoriaPage */

    /***/
    function AQ0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserKategoriaPage", function () {
        return UserKategoriaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_kategoria_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-kategoria.page.html */
      "L51C");
      /* harmony import */


      var _user_kategoria_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-kategoria.page.scss */
      "yunN");
      /* harmony import */


      var _services_tts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/tts.service */
      "+qtS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserKategoriaPage = /*#__PURE__*/function () {
        function UserKategoriaPage(_stts) {
          _classCallCheck(this, UserKategoriaPage);

          this._stts = _stts;
        }

        _createClass(UserKategoriaPage, [{
          key: "hablar",
          value: function hablar(esp) {
            this._stts.discurso(esp);
          }
        }]);

        return UserKategoriaPage;
      }();

      UserKategoriaPage.ctorParameters = function () {
        return [{
          type: _services_tts_service__WEBPACK_IMPORTED_MODULE_3__["TtsService"]
        }];
      };

      UserKategoriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-kategoria',
        template: _raw_loader_user_kategoria_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_kategoria_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserKategoriaPage);
      /***/
    },

    /***/
    "L51C":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-kategoria/user-kategoria.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function L51C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>userKategoria</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button>\n        <ion-icon name=\"settings\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"start\">\n        <ion-fab-button color=\"light\" (click)=\"hablar('Veo todo en blanco y negro el vaso acaba siendo amigo mudo las mismas caras, los mismo gestos amigo mudo... Quiero ser más rápido que ellos echar todo a perder un día tras otro y un buen rato después saber llegar a casa  antes de que el sol me diga que es de día.')\">\n            <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-vimeo\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab-list>\n\n    <!-- <ion-fab-list side=\"end\">\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n            <ion-icon name=\"logo-vimeo\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab-list> -->\n</ion-fab>";
      /***/
    },

    /***/
    "TbbF":
    /*!*********************************************************!*\
      !*** ./src/app/user-kategoria/user-kategoria.module.ts ***!
      \*********************************************************/

    /*! exports provided: UserKategoriaPageModule */

    /***/
    function TbbF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserKategoriaPageModule", function () {
        return UserKategoriaPageModule;
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


      var _user_kategoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-kategoria-routing.module */
      "/GdE");
      /* harmony import */


      var _user_kategoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-kategoria.page */
      "AQ0I");

      var UserKategoriaPageModule = function UserKategoriaPageModule() {
        _classCallCheck(this, UserKategoriaPageModule);
      };

      UserKategoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_kategoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserKategoriaPageRoutingModule"]],
        declarations: [_user_kategoria_page__WEBPACK_IMPORTED_MODULE_6__["UserKategoriaPage"]]
      })], UserKategoriaPageModule);
      /***/
    },

    /***/
    "yunN":
    /*!*********************************************************!*\
      !*** ./src/app/user-kategoria/user-kategoria.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function yunN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWthdGVnb3JpYS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-kategoria-user-kategoria-module-es5.js.map
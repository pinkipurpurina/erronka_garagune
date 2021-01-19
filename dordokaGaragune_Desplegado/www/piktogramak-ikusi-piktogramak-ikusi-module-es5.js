(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["piktogramak-ikusi-piktogramak-ikusi-module"], {
    /***/
    "3rle":
    /*!***************************************************************!*\
      !*** ./src/app/piktogramak-ikusi/piktogramak-ikusi.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function rle(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWt0b2dyYW1hay1pa3VzaS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "IguA":
    /*!***************************************************************!*\
      !*** ./src/app/piktogramak-ikusi/piktogramak-ikusi.module.ts ***!
      \***************************************************************/

    /*! exports provided: PiktogramakIkusiPageModule */

    /***/
    function IguA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PiktogramakIkusiPageModule", function () {
        return PiktogramakIkusiPageModule;
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


      var _piktogramak_ikusi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./piktogramak-ikusi-routing.module */
      "hAn4");
      /* harmony import */


      var _piktogramak_ikusi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./piktogramak-ikusi.page */
      "ZdmD");

      var PiktogramakIkusiPageModule = function PiktogramakIkusiPageModule() {
        _classCallCheck(this, PiktogramakIkusiPageModule);
      };

      PiktogramakIkusiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _piktogramak_ikusi_routing_module__WEBPACK_IMPORTED_MODULE_5__["PiktogramakIkusiPageRoutingModule"]],
        declarations: [_piktogramak_ikusi_page__WEBPACK_IMPORTED_MODULE_6__["PiktogramakIkusiPage"]]
      })], PiktogramakIkusiPageModule);
      /***/
    },

    /***/
    "T4oH":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/piktogramak-ikusi/piktogramak-ikusi.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T4oH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>piktogramakIkusi</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- List of Text Items-->\r\n    <ion-list *ngFor=\"let item of piktogramak\">\r\n        <ion-item>\r\n            <ion-label>{{item.uid}}</ion-label>\r\n            <ion-label>{{item.data.piktogramaIzena}}</ion-label>\r\n\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n</ion-content>";
      /***/
    },

    /***/
    "ZdmD":
    /*!*************************************************************!*\
      !*** ./src/app/piktogramak-ikusi/piktogramak-ikusi.page.ts ***!
      \*************************************************************/

    /*! exports provided: PiktogramakIkusiPage */

    /***/
    function ZdmD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PiktogramakIkusiPage", function () {
        return PiktogramakIkusiPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_piktogramak_ikusi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./piktogramak-ikusi.page.html */
      "T4oH");
      /* harmony import */


      var _piktogramak_ikusi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./piktogramak-ikusi.page.scss */
      "3rle");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_usuarios_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/usuarios-firebase.service */
      "BRfS");

      var PiktogramakIkusiPage = /*#__PURE__*/function () {
        function PiktogramakIkusiPage(modalController, firebaseConnect) {
          _classCallCheck(this, PiktogramakIkusiPage);

          this.modalController = modalController;
          this.firebaseConnect = firebaseConnect;
          this.piktogramak = [];
        }

        _createClass(PiktogramakIkusiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.irakurriPiktogramak();
          }
        }, {
          key: "irakurriPiktogramak",
          value: function irakurriPiktogramak() {
            var _this = this;

            console.log("sartu");
            this.firebaseConnect.getPiktogramaList().once("value", function (snap) {
              snap.forEach(function (element) {
                console.log("bakoitza---", element.val());
                var uid = element.key;
                var data = element.val();
                console.log(uid);
                console.log(data.piktogramaIzena);

                _this.piktogramak.push({
                  uid: uid,
                  data: data
                });
              });
            });
          }
        }]);

        return PiktogramakIkusiPage;
      }();

      PiktogramakIkusiPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_usuarios_firebase_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosFirebaseService"]
        }];
      };

      PiktogramakIkusiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-piktogramak-ikusi',
        template: _raw_loader_piktogramak_ikusi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_piktogramak_ikusi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PiktogramakIkusiPage);
      /***/
    },

    /***/
    "hAn4":
    /*!***********************************************************************!*\
      !*** ./src/app/piktogramak-ikusi/piktogramak-ikusi-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PiktogramakIkusiPageRoutingModule */

    /***/
    function hAn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PiktogramakIkusiPageRoutingModule", function () {
        return PiktogramakIkusiPageRoutingModule;
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


      var _piktogramak_ikusi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./piktogramak-ikusi.page */
      "ZdmD");

      var routes = [{
        path: '',
        component: _piktogramak_ikusi_page__WEBPACK_IMPORTED_MODULE_3__["PiktogramakIkusiPage"]
      }];

      var PiktogramakIkusiPageRoutingModule = function PiktogramakIkusiPageRoutingModule() {
        _classCallCheck(this, PiktogramakIkusiPageRoutingModule);
      };

      PiktogramakIkusiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PiktogramakIkusiPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=piktogramak-ikusi-piktogramak-ikusi-module-es5.js.map
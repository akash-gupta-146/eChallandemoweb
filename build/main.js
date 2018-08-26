webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginCtrl, auth, nav, alertCtrl) {
        this.loginCtrl = loginCtrl;
        this.auth = auth;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loginCredentials = { phone: '9876543210', password: 'Abc@123' };
    }
    LoginComponent.prototype.showLoading = function () {
        this.loading = this.loginCtrl.create({
            content: 'checking...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.loginCredentials).subscribe(function (allowed) {
            if (allowed)
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
            else
                _this.showError('Access Denied');
        });
    };
    LoginComponent.prototype.showError = function (err) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: err,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/login/login.html"*/'\n<ion-content>\n\n    <img class="login-logo" src="https://img.clipartxtras.com/197beaa39099b386dd67f0320c4ec25c_traffic-light-clip-art-hostted-clipartbarn-traffic-light-clipart-free_1500-1500.png" />\n    <ion-list class="login-form">\n\n        <h1 text-center>Login</h1>\n        <form (ngSubmit)="login()" #loginForm="ngForm">\n      <ion-item>\n        <ion-label fixed>Phone</ion-label>\n        <ion-input type="number" value="" name="phone" placeholder="phone" [(ngModel)]="loginCredentials.phone" required></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" name="password" placeholder="password" [(ngModel)]="loginCredentials.password" required></ion-input>\n      </ion-item>\n  \n      <button ion-button full type="submit" [disabled]="!loginForm.form.valid">Login</button>\n    </form>\n    <button ion-button full clear>Forget Password</button>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentGatewayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_add_violation_add_violation__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaymentGatewayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentGatewayPage = /** @class */ (function () {
    function PaymentGatewayPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.currenViolations = this.navParams.get('data');
        this.charge = this.navParams.get('charge');
        this.violenter = this.navParams.get('violenter');
    }
    PaymentGatewayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentGatewayPage');
    };
    PaymentGatewayPage.prototype.confirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Payment Gateway',
            subTitle: 'App will be redirected to a gateway, Click Success for successfull trnansaction page or Error for unsuccessfull transaction',
            buttons: [
                {
                    text: 'Error',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__components_add_violation_add_violation__["a" /* AddViolationComponent */]);
                    }
                },
                {
                    text: 'Success',
                    handler: function () {
                        _this.navCtrl.popToRoot;
                    }
                }
            ]
        });
        alert.present();
    };
    PaymentGatewayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-gateway',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/payment-gateway/payment-gateway.html"*/'<!--\n  Generated template for the PaymentGatewayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Payment Gateway</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="gray-back">\n    <ion-list radio-group>\n        <ion-item>\n          <ion-label>Credit/Debit Card</ion-label>\n          <ion-radio value="friends" checked></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>UPI</ion-label>\n          <ion-radio value="family"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Cash</ion-label>\n          <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <h6 padding-left><b>Details</b></h6>\n      <ion-card *ngIf="currenViolations">\n        <ion-item *ngFor="let violation of currenViolations">\n          {{ violation.name }}\n          <div item-right>₹ {{ violation.charge }}</div>\n        </ion-item>\n      </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col no-padding class="totalCharge">\n        ₹ {{ charge }}\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button full (click)="confirm()">Continue</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/payment-gateway/payment-gateway.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PaymentGatewayPage);
    return PaymentGatewayPage;
}());

//# sourceMappingURL=payment-gateway.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seize_modal_seize_modal__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SeizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeizePage = /** @class */ (function () {
    function SeizePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    SeizePage.prototype.ionViewDidLoad = function () {
        this.currentViolents = this.navParams.get('data');
        this.charge = this.navParams.get('charge');
        this.violenter = this.navParams.get('violenter');
    };
    SeizePage.prototype.seize = function (object) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__seize_modal_seize_modal__["a" /* SeizeModal */], { data: object, currentViolents: this.currentViolents, charge: this.charge, violenter: this.violenter });
        modal.present();
    };
    SeizePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seize',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/seize/seize.html"*/'<!--\n  Generated template for the SeizePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary"> \n    <ion-title>Seize</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="gray-back">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <div class="btn">\n        <img src="assets/imgs/document.png"  (click)="seize(\'document\')" />\n        <div>\n          Seize Document\n        </div>\n      </div>\n      </ion-col>\n      <ion-col col-12>\n          <div class="btn">\n          <img src="assets/imgs/vehicle.png" (click)="seize(\'vehicle\')" />\n          <div>\n              Seize Vehicle\n          </div>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/seize/seize.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SeizePage);
    return SeizePage;
}());

//# sourceMappingURL=seize.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReceiptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceiptPage = /** @class */ (function () {
    function ReceiptPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.date = new Date();
        this.object = this.navParams.get('data');
        this.currentViolents = this.navParams.get('currentViolents');
        this.charge = this.navParams.get('charge');
        this.violenter = this.navParams.get('violenter');
        this.seizeData = this.navParams.get('seizeData');
        console.log(this.object);
    }
    ReceiptPage.prototype.ionViewDidLoad = function () {
    };
    ReceiptPage.prototype.response = function () {
        var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Challan submitted successfully, Printing...',
            buttons: ['OK']
        });
        alert.present();
    };
    ReceiptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receipt',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/receipt/receipt.html"*/'<!--\n  Generated template for the ReceiptPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Receipt</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="gray-back">\n    <h6 padding-left>Basic Details</h6>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <b>Name: </b> {{ violenter.name }}\n        </ion-col>\n        <ion-col col-12>\n            <b>Vehicle No: </b> {{ violenter.vehicle_no }}\n        </ion-col>\n        <ion-col col-6>\n          <b>DL: </b> {{ violenter.driving_license }}\n        </ion-col>\n        <ion-col col-6 text-right>\n            <b>RC: </b> {{ violenter.register_certificate }}\n        </ion-col>\n        <ion-col col-6>\n            <b>Date: </b> {{ date | date}}\n          </ion-col>\n          <ion-col col-6 text-right>\n            <b>Time: </b> {{ date | date:\'shortTime\' }}\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <h6 padding-left>Violations</h6>\n  <ion-card >\n    <ion-grid>\n      <ion-row *ngFor="let violent of currentViolents"> \n        <ion-col col-9>\n        {{ violent.name }}\n        </ion-col>\n        <ion-col col-3 text-right>\n          {{ violent.charge }}\n        </ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col col-9>\n          <b>Total</b>\n        </ion-col>\n        <ion-col col-3 text-right>\n          <b>{{ charge }}</b>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <h6 padding-left>Actions</h6>\n  <ion-card>\n    <ion-grid>\n      <ul *ngIf="object==\'document\'">\n        <li>Seized {{ seizeData.documentName }} <span>({{ seizeData.documentId }})</span></li>\n      </ul>\n      <ul *ngIf="object==\'vehicle\'">\n        <li>Seized Vehicle</li>\n        <li>Name: {{ seizeData.vehicleName }}</li>\n        <li>Type: {{ seizeData.vehicleType }}</li>\n        <li>Color: {{ seizeData.vehicleColor }}</li>\n        <li>Number: {{ seizeData.vehicleNumber }}</li>\n      </ul>\n    </ion-grid>\n    <h4 padding-left>Collection Process:</h4>\n    <ul>\n      <li>\n          Contact: +91 98927387466\n      </li>\n      <li>\n        Visit NSP Police station\n      </li>\n      <li>\n        Total Charge: 300\n      </li>\n    </ul>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <button full ion-button icon-start (click)="response()"><ion-icon name="print"></ion-icon>Submit & Print</button>\n</ion-footer>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/receipt/receipt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReceiptPage);
    return ReceiptPage;
}());

//# sourceMappingURL=receipt.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolenterHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chart_chart__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViolenterHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViolenterHistoryPage = /** @class */ (function () {
    function ViolenterHistoryPage(viewCtrl, navParams, chartService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.chartService = chartService;
    }
    ViolenterHistoryPage.prototype.ngOnInit = function () {
        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(this.chartService.violstionChart);
        this.violentOpts = {
            title: 'Violents Made',
            subTitle: 'Select violents to display'
        };
    };
    ViolenterHistoryPage.prototype.ionViewDidLoad = function () {
        this.violenter = this.navParams.get('data');
    };
    ViolenterHistoryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ViolenterHistoryPage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    ViolenterHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-violenter-history',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/violenter-history/violenter-history.html"*/'<!--\n  Generated template for the ViolenterHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>\n        Violation Record\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class="gray-back">\n      <div id="violents_piechart" margin-bottom></div>\n      \n    <ion-list class="top-list-header">\n        <ion-item *ngIf="violenter">\n          {{ violenter.name }}\n          <br>\n          <p>Driving License: {{ violenter.driving_license }}</p>\n        </ion-item>\n        <ion-item>\n            <ion-label>Filter Violents</ion-label>\n            <ion-select [(ngModel)]="violent" [selectOptions]="violentOpts" multiple="true" cancelText="Cancel" okText="Ok">\n              <ion-option >All</ion-option>\n              <ion-option>Red Signal</ion-option>\n              <ion-option>No Paper</ion-option>\n              <ion-option>Overspeeding</ion-option>\n              <ion-option>Rash Driving</ion-option>\n              <ion-option (select)="stpSelect()">Hit and Run</ion-option>\n            </ion-select> \n          </ion-item>\n    </ion-list>\n\n    <div *ngIf="violenter">\n    <div class="violation-timeline" *ngFor="let violetion of violenter.violations">\n        <div class="pin">\n          <div class="location">\n          {{ violetion.location }}\n          </div>\n          <div class="city">\n            {{ violetion.city }}\n          </div>\n        </div>\n        <div class="violation">\n          <div class="name">\n              {{ violetion.name }}\n          </div>\n          <div class="incharge">\n              <b>Incharge: {{ violetion.charge_person }}</b>\n            </div>\n          <div class="date">\n              {{ violetion.date_of_violation }}\n              <span class="time">\n                  | {{ violetion.time_of_violation }}\n                </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/violenter-history/violenter-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chart_chart__["a" /* ChartProvider */]])
    ], ViolenterHistoryPage);
    return ViolenterHistoryPage;
}());

//# sourceMappingURL=violenter-history.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/payment-gateway/payment-gateway.module": [
		294,
		3
	],
	"../pages/receipt/receipt.module": [
		295,
		2
	],
	"../pages/seize/seize.module": [
		296,
		1
	],
	"../pages/violenter-history/violenter-history.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ViolentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ViolentsProvider = /** @class */ (function () {
    function ViolentsProvider(http) {
        this.http = http;
        this.violentsList = [
            {
                name: 'No Helmet',
                code: '001',
                charge: '100'
            },
            {
                name: 'Crossing Red Light',
                code: '002',
                charge: '150'
            },
            {
                name: 'Over Speed',
                code: '003',
                charge: '50'
            },
            {
                name: 'Hit & Run',
                code: '004',
                charge: '1500'
            }
        ];
        console.log('Hello ViolentsProvider Provider');
    }
    ViolentsProvider.prototype.getViolents = function () {
        return this.violentsList;
    };
    ViolentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ViolentsProvider);
    return ViolentsProvider;
}());

//# sourceMappingURL=violents.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeizeModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipt_receipt__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeizeModal = /** @class */ (function () {
    function SeizeModal(navParams, viewCtrl, navCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    SeizeModal.prototype.ionViewDidLoad = function () {
        this.object = this.navParams.get('data');
        this.currentViolents = this.navParams.get('currentViolents');
        this.charge = this.navParams.get('charge');
        this.violenter = this.navParams.get('violenter');
    };
    SeizeModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SeizeModal.prototype.print = function () {
        var seizeData;
        if (this.object == 'document') {
            seizeData = {
                documentName: this.documentName,
                documentID: this.documentID
            };
        }
        else if (this.object == 'vehicle') {
            seizeData = {
                vehicleName: this.vehicleName,
                vehicleColor: this.vehicleColor,
                vehicleNumber: this.vehicleNumber,
                vehicleType: this.vehicleType
            };
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__receipt_receipt__["a" /* ReceiptPage */], { data: this.object, currentViolents: this.currentViolents, charge: this.charge, violenter: this.violenter, seizeData: seizeData });
    };
    SeizeModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seize',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/seize/seize-modal/seize-modal.html"*/'<ion-header>\n        <ion-toolbar color="primary">\n          <ion-title>\n            Seize {{ object }}\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      \n      <ion-content class="gray-back">\n\n        <!-- for document -->\n        <div *ngIf="object==\'document\'">\n            <ion-card>\n                   <form>\n                       <ion-item>\n                            <ion-icon name="copy" color="primary" item-start></ion-icon>\n                            <ion-label stacked color="primary">Name</ion-label>\n                            <ion-input type="text" value="" [(ngModel)]="documentName" name="documentSeize" placeholder="eg: License"></ion-input>\n                       </ion-item>\n                       <ion-item>\n                            <ion-icon name="copy" color="primary" item-start></ion-icon>\n                            <ion-label stacked color="primary">ID</ion-label>\n                            <ion-input type="text" value="" [(ngModel)]="documentID" name="documentID" placeholder="eg: 253746356273"></ion-input>\n                       </ion-item>\n                       <button ion-button full icon-start small><ion-icon name="camera"></ion-icon>Add Image</button>\n                   </form> \n            </ion-card>\n            <button ion-button float-right small outline round margin-right>+ Add Document</button>\n        </div>\n\n\n        <!-- for vehicle -->\n        <div *ngIf="object==\'vehicle\'">\n            <ion-card>\n                <form>\n                    <ion-item>\n                            <ion-icon name="car" color="primary" item-start></ion-icon>\n                            <ion-label stacked color="primary">Name</ion-label>\n                            <ion-input type="text" value="" [(ngModel)]="vehicleName" name="vehicleName" placeholder="eg: Honda City"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                            <ion-icon name="car" color="primary" item-start></ion-icon>\n                                    <ion-label>Type</ion-label>\n                                    <ion-select [(ngModel)]="vehicleType" name="vehicleType" interface="popover">\n                                      <ion-option >Car</ion-option>\n                                      <ion-option >Bike</ion-option>\n                                      <ion-option >Scooter without gear</ion-option>\n                                      <ion-option >Scooter with gear</ion-option>\n                                      <ion-option >Truck</ion-option>\n                                      <ion-option >Loader</ion-option>\n                                      <ion-option>Other</ion-option>\n                                    </ion-select>\n                    </ion-item>\n                    <ion-item>\n                            <ion-icon name="car" color="primary" item-start></ion-icon>\n                            <ion-label stacked color="primary">Color</ion-label>\n                            <ion-input type="text" value="" [(ngModel)]="vehicleColor" name="vehicleColor" placeholder="eg: Silver"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                            <ion-icon name="car" color="primary" item-start></ion-icon>\n                            <ion-label stacked color="primary">Number</ion-label>\n                            <ion-input type="text" value="" [(ngModel)]="vehicleNumber" name="vehicleNumber" placeholder="eg: HR 61 C 8438"></ion-input>\n                    </ion-item>\n                </form>\n            </ion-card>\n            <div padding>\n            <button ion-button round  class="center" icon-start><ion-icon name="camera"></ion-icon> Add Image</button>\n            </div>\n        </div>\n\n        </ion-content>\n\n        <ion-footer>\n            <button full ion-button (click)="print()">Seize</button>\n        </ion-footer>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/seize/seize-modal/seize-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SeizeModal);
    return SeizeModal;
}());

//# sourceMappingURL=seize-modal.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ChartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChartProvider = /** @class */ (function () {
    function ChartProvider(http) {
        this.http = http;
        console.log('Hello ChartProvider Provider');
    }
    ChartProvider.prototype.violstionChart = function () {
        var data = google.visualization.arrayToDataTable([
            ['Violent', '#Charges'],
            ['Red Signal', 11],
            ['No Helmet', 20],
            ['No Papers', 5],
            ['Overspeeding', 30],
        ]);
        var options = {
            // 'legend':'bottom',
            vAxis: { maxValue: 50 },
            chartArea: { width: '100%' },
            is3D: true,
            colors: ['#ea4b59', '#f0954f', '#ffe902', '#bccf01', '#64c6ef', '#009fe3', '#c066a7'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.PieChart(document.getElementById('violents_piechart'));
        chart.draw(data, options);
    };
    ChartProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChartProvider);
    return ChartProvider;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var User = /** @class */ (function () {
    function User(username, name, phone) {
        this.name = name;
        this.username = username;
        this.phone = phone;
    }
    return User;
}());

var LoginProvider = /** @class */ (function () {
    function LoginProvider() {
    }
    LoginProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.phone == null || credentials.password == null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Please enter all the fields');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var access = (credentials.phone == '9876543210' && credentials.password == "Abc@123");
                _this.currentUser = new User('john', 'John Cena', 9876543210);
                observer.next(access);
                observer.complete();
            });
        }
    };
    LoginProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    LoginProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<img src="assets/imgs/efkonImage.jpg" />\n<div padding text-center>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat sollicitudin gravida. Nam nunc nibh, aliquet lobortis pellentesque id, faucibus at magna. \n</div>\n</ion-content>\n<ion-footer text-center>\n  <small>Powered By NxtLife Technologies</small>\n</ion-footer>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, contactsService) {
        this.navCtrl = navCtrl;
        this.contactsService = contactsService;
        this.contacts = this.contactsService.getContacts();
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-list>\n          <ion-item-sliding *ngFor="let contact of contacts">\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="{{ contact.img }}">\n              </ion-avatar>\n              <h2>{{ contact.name }}</h2>\n              <p>{{ contact.post }}</p>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only>\n                <ion-icon name="call"></ion-icon>\n              </button>\n              <button ion-button color="primary" icon-only>\n                  <ion-icon name="mail"></ion-icon>\n                </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__["a" /* ContactsProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactsProvider = /** @class */ (function () {
    function ContactsProvider(http) {
        this.http = http;
        this.contacts = [
            {
                name: 'Ankush Rajpal',
                phone: '9893847574',
                email: 'ankush@gmail.com',
                post: 'Application Manager',
                img: 'https://images.desimartini.com/media/uploads/2015-5/manoj-bajpayee-stil-traffic-main.jpeg',
            },
            {
                name: 'Ankit Nagpal',
                phone: '9383746736',
                email: 'ankush@gmail.com',
                post: 'Area Inspector',
                img: 'https://spiderimg1.amarujala.com/assets/images/2017/08/18/750x506/acb-rajasthan_1503047911.jpeg',
            },
            {
                name: 'Jaspal Singh',
                phone: '9893847574',
                email: 'ankush@gmail.com',
                post: 'Area Incharge',
                img: 'https://images.tribuneindia.com/cms/gall_content/2016/5/2016_5$largeimg10_Tuesday_2016_234040622.jpg',
            },
            {
                name: 'Narendra Modi',
                phone: '9893847574',
                email: 'ankush@gmail.com',
                post: 'Prime minister',
                img: 'https://yt3.ggpht.com/a-/ACSszfFprNp-1Ay1IhDjH4NenwvLItZpPHeJdewulw=s900-mo-c-c0xffffffff-rj-k-no',
            },
            {
                name: 'Jaya Rathi',
                phone: '9893847574',
                email: 'ankush@gmail.com',
                post: 'Womens Department',
                img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201609/police-story_647_090216110012.jpg',
            },
        ];
        console.log('Hello ContactsProvider Provider');
    }
    ContactsProvider.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ContactsProvider);
    return ContactsProvider;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_features_features__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, features) {
        this.navCtrl = navCtrl;
        this.features = features;
        this.pages = this.features.appFeatures;
    }
    HomePage.prototype.open = function (feature) {
        this.navCtrl.push(feature.component);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="home">\n        <ion-row text-center>\n          <ion-col col-6 *ngFor="let feature of pages" (click)="open(feature)">\n            <img [src]="feature.img">\n            <div>{{ feature.name }}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_features_features__["a" /* FeaturesProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_generate_challan_generate_challan__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_no_records_no_records__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FeaturesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FeaturesProvider = /** @class */ (function () {
    function FeaturesProvider(http) {
        this.http = http;
        this.appFeatures = [
            {
                name: 'Challan Generator',
                img: 'assets/imgs/challan.png',
                component: __WEBPACK_IMPORTED_MODULE_2__components_generate_challan_generate_challan__["a" /* GenerateChallanComponent */],
            },
            {
                name: 'Profile',
                img: 'assets/imgs/traffic_police.png',
                component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile__["a" /* ProfileComponent */],
            },
            {
                name: 'other',
                img: 'assets/imgs/other.png',
                component: __WEBPACK_IMPORTED_MODULE_4__components_no_records_no_records__["a" /* NoRecordsComponent */],
            },
            {
                name: 'other',
                img: 'assets/imgs/other.png',
                component: __WEBPACK_IMPORTED_MODULE_4__components_no_records_no_records__["a" /* NoRecordsComponent */],
            },
            {
                name: 'other',
                img: 'assets/imgs/other.png',
                component: __WEBPACK_IMPORTED_MODULE_4__components_no_records_no_records__["a" /* NoRecordsComponent */],
            },
            {
                name: 'other',
                img: 'assets/imgs/other.png',
                component: __WEBPACK_IMPORTED_MODULE_4__components_no_records_no_records__["a" /* NoRecordsComponent */],
            },
            {
                name: 'other',
                img: 'assets/imgs/other.png',
                component: __WEBPACK_IMPORTED_MODULE_4__components_no_records_no_records__["a" /* NoRecordsComponent */],
            },
            {
                name: 'other',
                img: 'assets/imgs/other.png',
                component: __WEBPACK_IMPORTED_MODULE_4__components_no_records_no_records__["a" /* NoRecordsComponent */],
            }
        ];
        console.log('Hello FeaturesProvider Provider');
    }
    FeaturesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FeaturesProvider);
    return FeaturesProvider;
}());

//# sourceMappingURL=features.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateChallanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_people_people__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_violenter_history_violenter_history__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_violation_add_violation__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GenerateChallanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GenerateChallanComponent = /** @class */ (function () {
    function GenerateChallanComponent(people, modalCtrl, navCtrl) {
        this.people = people;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.needManualDetails = false;
        this.text = 'Hello World';
    }
    GenerateChallanComponent.prototype.getInfo = function () {
        this.violenter = this.people.getPerson('driving_license', this.dl);
        if (this.violenter == null)
            this.needManualDetails = true;
        else
            this.needManualDetails = false;
    };
    GenerateChallanComponent.prototype.viewViolations = function () {
        var violenterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_violenter_history_violenter_history__["a" /* ViolenterHistoryPage */], { data: this.violenter });
        violenterModal.present();
    };
    GenerateChallanComponent.prototype.addViolation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_violation_add_violation__["a" /* AddViolationComponent */], { name: this.violenter });
    };
    GenerateChallanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'generate-challan',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/generate-challan/generate-challan.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Generate Challan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n  <ion-content class="gray-back">\n  <h6 padding-left>Violenter Detail</h6>\n    <form>\n        <ion-item-group>\n            <div class="block">\n            <ion-item>\n                <ion-icon name="card" item-start color="primary"></ion-icon>\n                <ion-label floating>Driving License</ion-label>\n                <ion-input type="text" [(ngModel)]="dl" name="dl"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="card" item-start color="primary"></ion-icon>\n                <ion-label floating>Registration Certificate</ion-label>\n                <ion-input type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="car" item-start color="primary"></ion-icon>\n                <ion-label floating>Vehicle Number</ion-label>\n                <ion-input type="text"></ion-input>\n            </ion-item>\n          </div>\n        </ion-item-group>\n        <button ion-button full color="primary" (click)="getInfo()">Check</button>\n\n        <div *ngIf="violenter">\n            <ion-card>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-4>\n                      <img [src]="violenter.image"/>\n                  </ion-col>\n                  <ion-col col-8 class="grid">\n                    <div>\n                        Name: {{ violenter.name }}\n                    </div>\n                    <div>\n                        DOB: {{ violenter.dob }}\n                    </div>\n                   <div>\n                     RC: {{ violenter.register_certificate }}\n                   </div>\n                   <div>\n                     Vehicle No:  {{ violenter.vehicle_no }}\n                   </div>\n                   <div>\n                      Previous Violations:  {{ violenter.violations.length }}\n                    </div>\n                  </ion-col>\n                  <ion-col col-12>\n                    <!-- <ion-badge>Previous Violations</ion-badge> -->\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div padding-left padding-right>\n                    <button ion-button small block round color="danger" icon-start (click)="viewViolations()">\n                      <ion-icon name=\'star\'></ion-icon>\n                      View Previous Violations\n                    </button>\n                  </div>\n              </ion-card>\n        </div>\n\n        <div *ngIf="needManualDetails">\n          <h6 margin>Data not found, add details manually</h6>\n          <ion-item>\n            <ion-icon name="person" item-start color="primary"></ion-icon>\n            <ion-label stacked>Name</ion-label>\n            <ion-input [(ngModel)]="name" name="name" type="text" placeholder="eg. Komal Thakur"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon name="call" item-start color="primary"></ion-icon>\n              <ion-label stacked>Phone</ion-label>\n              <ion-input #phonen [(ngModel)]="phone" name="phone" type="number" placeholder="eg. 97383746355"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon name="card" item-start color="primary"></ion-icon>\n              <ion-label stacked>Driving License</ion-label>\n              <ion-input [(ngModel)]="driving_license" name="driving_license" type="text" placeholder="eg. 97383746355"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon name="card" item-start color="primary"></ion-icon>\n              <ion-label stacked>Registration Certificate</ion-label>\n              <ion-input [(ngModel)]="register_certificate" name="register_certificate" type="text" placeholder="eg. 21212311213"></ion-input>\n          </ion-item>\n          <ion-item>\n          <ion-icon name="car" item-start color="primary"></ion-icon>\n          <ion-label stacked>Vehicle No</ion-label>\n          <ion-input [(ngModel)]="vehicle_no" name="vehicle_no" type="text" placeholder="eg. HR C 3920"></ion-input>\n          </ion-item>\n        </div>\n\n        <div padding>\n          <button ion-button center round class="center" [disabled]="!violenter && !phone" (click)="addViolation()">Add Violation</button>\n        </div>\n    </form> \n    <!-- {{  }} -->\n  </ion-content>\n  '/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/generate-challan/generate-challan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_people_people__["a" /* PeopleProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], GenerateChallanComponent);
    return GenerateChallanComponent;
}());

//# sourceMappingURL=generate-challan.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PeopleProvider = /** @class */ (function () {
    function PeopleProvider(http) {
        this.http = http;
        this.people = [
            {
                name: 'Hitesh Shadija',
                driving_license: 'd000',
                register_certificate: 'r000',
                vehicle_no: 'v000',
                dob: '14/06/1992',
                image: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
                previous_violation_count: '2',
                phone: '+919783746433',
                violations: [
                    {
                        name: 'No Helmet',
                        code: '001',
                        date_of_violation: '14/06/2017',
                        time_of_violation: '13:20',
                        charge_person: 'Malay Gaitonde',
                        location: 'Bani Square Junction',
                        city: 'Gurugram',
                        charge_filed: '100',
                        currency: 'Rupee'
                    },
                    {
                        name: 'Crossed Red Light',
                        code: '002',
                        date_of_violation: '19/07/2017',
                        time_of_violation: '11:33',
                        charge_person: 'Laxman Singh',
                        location: 'NSP',
                        city: 'Delhi',
                        charge_filed: '50',
                        currency: 'Rupee'
                    },
                    {
                        name: 'No Helmet',
                        code: '003',
                        date_of_violation: '30/09/2017',
                        time_of_violation: '15:26',
                        charge_person: 'Chankey Pandey',
                        location: 'Pitampura Square',
                        city: 'Delhi',
                        charge_filed: '150',
                        currency: 'Rupee'
                    },
                    {
                        name: 'Rash Driving',
                        code: '004',
                        date_of_violation: '10/10/2017',
                        time_of_violation: '13:23',
                        charge_person: 'Dayalal Singh',
                        location: 'Pitampura Square',
                        city: 'Delhi',
                        charge_filed: '150',
                        currency: 'Rupee'
                    },
                    {
                        name: 'Hit & Run',
                        code: '005',
                        date_of_violation: '20/01/2018',
                        time_of_violation: '1:20',
                        charge_person: 'Rajkumar Gaitonde',
                        location: 'Rohtak-Delhi Highway',
                        city: 'Delhi',
                        charge_filed: '1500',
                        currency: 'Rupee'
                    },
                    {
                        name: 'No Helmet',
                        code: '001',
                        date_of_violation: '14/06/2017',
                        time_of_violation: '13:20',
                        charge_person: 'Malay Gaitonde',
                        location: 'Bani Square Junction',
                        city: 'Gurugram',
                        charge_filed: '100',
                        currency: 'Rupee'
                    },
                    {
                        name: 'Crossed Red Light',
                        code: '002',
                        date_of_violation: '19/07/2017',
                        time_of_violation: '11:33',
                        charge_person: 'Laxman Singh',
                        location: 'NSP',
                        city: 'Delhi',
                        charge_filed: '50',
                        currency: 'Rupee'
                    },
                    {
                        name: 'No Helmet',
                        code: '003',
                        date_of_violation: '30/09/2017',
                        time_of_violation: '15:26',
                        charge_person: 'Chankey Pandey',
                        location: 'Pitampura Square',
                        city: 'Delhi',
                        charge_filed: '150',
                        currency: 'Rupee'
                    },
                    {
                        name: 'Rash Driving',
                        code: '004',
                        date_of_violation: '10/10/2017',
                        time_of_violation: '13:23',
                        charge_person: 'Dayalal Singh',
                        location: 'Pitampura Square',
                        city: 'Delhi',
                        charge_filed: '150',
                        currency: 'Rupee'
                    },
                    {
                        name: 'Hit & Run',
                        code: '005',
                        date_of_violation: '20/01/2018',
                        time_of_violation: '1:20',
                        charge_person: 'Rajkumar Gaitonde',
                        location: 'Rohtak-Delhi Highway',
                        city: 'Delhi',
                        charge_filed: '1500',
                        currency: 'Rupee'
                    },
                ],
            },
            {
                name: 'Amit Shukla',
                driving_license: 'd111',
                register_certificate: 'r111',
                vehicle_no: 'v111',
                dob: '24/09/1992',
                image: 'https://metron-group.com/metron-wp/wp-content/uploads/2016/10/person-to-person-business.jpg',
                previous_violation_count: '1',
                phone: '+91923412654',
                violations: [
                    {
                        name: 'Crossed Red Light',
                        code: '002',
                        date_of_violation: '24/03/2017',
                        time_of_violation: '18:20',
                        charge_person: 'Gaitonde',
                        location: 'Bani Square Junction',
                        city: 'Gurugram',
                        charge_filed: '50',
                        currency: 'Rupee'
                    }
                ],
            }
        ];
        console.log('Hello PeopleProvider Provider');
    }
    PeopleProvider.prototype.getPerson = function (type, value) {
        if (type == 'driving_license') {
            for (var i = 0; i < this.people.length; i++) {
                if (this.people[i].driving_license == value) {
                    return this.people[i];
                }
            }
        }
        return null;
    };
    PeopleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PeopleProvider);
    return PeopleProvider;
}());

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_profile_profile__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, navCtrl) {
        this.profileService = profileService;
        this.navCtrl = navCtrl;
        this.profile = this.profileService.getProfile();
    }
    ProfileComponent.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginComponent */]);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/profile/profile.html"*/'<!-- Generated template for the ProfileComponent component -->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        Profile\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="profile gray-back">\n      <div class="card">\n          <img src="{{ profile.img }}" alt="John" style="width:100%">\n          <h1>{{ profile.name }}</h1>\n          <p class="title">{{ profile.post }}</p>\n          <p>{{ profile.area }}, {{ profile.address }}</p>\n          <div style="margin: 24px 0;">\n            <ion-icon name="star" style="color:orange"></ion-icon>\n            <ion-icon name="star" style="color:orange"></ion-icon>\n            <ion-icon name="star" style="color:orange"></ion-icon>\n            <ion-icon name="star" style="color:orange"></ion-icon>\n            <ion-icon name="star" style="color:orange"></ion-icon>\n         </div>\n         <p><button (click)="logout()">Logout</button></p>\n        </div>\n  </ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http) {
        this.http = http;
        this.profile = {
            name: 'Kunwar Ranjeet Singh',
            post: 'Traffic Police',
            img: 'http://static.navodayatimes.in/multimedia/18_49_216097166nawi-ll.jpg',
            area: 'Palasia Square',
            address: 'Indore, M.P.'
        };
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider.prototype.getProfile = function () {
        return this.profile;
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the NoRecordsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NoRecordsComponent = /** @class */ (function () {
    function NoRecordsComponent() {
        console.log('Hello NoRecordsComponent Component');
        this.text = 'Hello World';
    }
    NoRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'no-records',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/no-records/no-records.html"*/'<!-- Generated template for the NoRecordsComponent component -->\n<ion-header>\n    <ion-navbar color="primary">\n\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="gray-back">\n    <img src="assets/imgs/not-found.svg" margin-left margin-right/>\n    <div text-center>\n      <h5 style="margin-top:-50px"><b>No content found</b></h5>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/no-records/no-records.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NoRecordsComponent);
    return NoRecordsComponent;
}());

//# sourceMappingURL=no-records.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_generate_challan_generate_challan__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_features_features__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_people_people__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_violenter_history_violenter_history__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_chart_chart__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_violation_add_violation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_violents_violents__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_payment_gateway_payment_gateway__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_seize_seize__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_seize_seize_modal_seize_modal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_receipt_receipt__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_contacts_contacts__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_profile_profile__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_profile_profile__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_no_records_no_records__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_generate_challan_generate_challan__["a" /* GenerateChallanComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_violenter_history_violenter_history__["a" /* ViolenterHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_add_violation_add_violation__["a" /* AddViolationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_payment_gateway_payment_gateway__["a" /* PaymentGatewayPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_seize_seize__["a" /* SeizePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_seize_seize_modal_seize_modal__["a" /* SeizeModal */],
                __WEBPACK_IMPORTED_MODULE_23__pages_receipt_receipt__["a" /* ReceiptPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_profile_profile__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_no_records_no_records__["a" /* NoRecordsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/payment-gateway/payment-gateway.module#PaymentGatewayPageModule', name: 'PaymentGatewayPage', segment: 'payment-gateway', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receipt/receipt.module#ReceiptPageModule', name: 'ReceiptPage', segment: 'receipt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seize/seize.module#SeizePageModule', name: 'SeizePage', segment: 'seize', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/violenter-history/violenter-history.module#ViolenterHistoryPageModule', name: 'ViolenterHistoryPage', segment: 'violenter-history', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_generate_challan_generate_challan__["a" /* GenerateChallanComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_violenter_history_violenter_history__["a" /* ViolenterHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_add_violation_add_violation__["a" /* AddViolationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_payment_gateway_payment_gateway__["a" /* PaymentGatewayPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_seize_seize__["a" /* SeizePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_seize_seize_modal_seize_modal__["a" /* SeizeModal */],
                __WEBPACK_IMPORTED_MODULE_23__pages_receipt_receipt__["a" /* ReceiptPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_profile_profile__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_no_records_no_records__["a" /* NoRecordsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_features_features__["a" /* FeaturesProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_people_people__["a" /* PeopleProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_chart_chart__["a" /* ChartProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_violents_violents__["a" /* ViolentsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_contacts_contacts__["a" /* ContactsProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_profile_profile__["a" /* ProfileProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__components_login_login__["a" /* LoginComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddViolationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_violents_violents__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_payment_gateway_payment_gateway__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_seize_seize__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddViolationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddViolationComponent = /** @class */ (function () {
    function AddViolationComponent(violent, navCtrl, navParam) {
        this.violent = violent;
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.totalCharge = 0.0;
        this.violentsList = this.violent.getViolents();
    }
    AddViolationComponent.prototype.ionViewDidLoad = function () {
        this.violenter = this.navParam.get('name');
    };
    AddViolationComponent.prototype.subTotal = function () {
        for (var i = 0; i < this.currentViolents.length; i++) {
            this.totalCharge += Number(this.currentViolents[i].charge);
        }
    };
    AddViolationComponent.prototype.payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_payment_gateway_payment_gateway__["a" /* PaymentGatewayPage */], { data: this.currentViolents, charge: this.totalCharge, violenter: this.violenter });
    };
    AddViolationComponent.prototype.seize = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_seize_seize__["a" /* SeizePage */], { data: this.currentViolents, charge: this.totalCharge, violenter: this.violenter });
    };
    AddViolationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-violation',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/add-violation/add-violation.html"*/'<!-- Generated template for the AddViolationComponent component -->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        Add Violation\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="gray-back">\n    <div class="total-charge">\n      <div class="inner-box">\n          <small>Rupees</small>\n          {{ totalCharge }}\n      </div>\n    </div>\n\n    <ion-card>\n        <ion-item>\n            <ion-label>Select Violation</ion-label>\n            <ion-select [(ngModel)]="currentViolents" multiple="true" cancelText="Cancel" okText="Ok" (ionChange)="subTotal()">\n              <ion-option *ngFor="let violent of violentsList" [value]="violent">{{ violent.name }}</ion-option>\n            </ion-select> \n          </ion-item>\n    </ion-card>\n\n    <ion-list class="violation_details">\n\n      <ion-item *ngFor="let violentCharge of currentViolents">\n        <ion-row>\n          <ion-col col-8 class="title" no-padding>\n            {{ violentCharge.name }} <ion-badge>{{ violentCharge.code }}</ion-badge>\n          </ion-col>\n          <ion-col col-4 class="charge" no-padding>\n              ₹ {{ violentCharge.charge }}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n    <button ion-button icon-only class="center" margin-bottom><ion-icon name="camera"></ion-icon></button>\n    <button ion-button full (click)="payment()">Continue to Pay</button>\n    <button ion-button full clear (click)="seize()">Unable to pay</button>\n  </ion-content>\n  '/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/eChallan/src/components/add-violation/add-violation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_violents_violents__["a" /* ViolentsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], AddViolationComponent);
    return AddViolationComponent;
}());

//# sourceMappingURL=add-violation.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map
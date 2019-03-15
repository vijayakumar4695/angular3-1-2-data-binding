(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'third';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _twoway_twoway_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./twoway/twoway.component */ "./src/app/twoway/twoway.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _twoway_twoway_component__WEBPACK_IMPORTED_MODULE_8__["TwowayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'index' },
                    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
                    { path: 'twoway', component: _twoway_twoway_component__WEBPACK_IMPORTED_MODULE_8__["TwowayComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0;\r\n    padding: 0;\r\n}\r\n.btn{\r\n    text-align: center\r\n}\r\nh2{\r\n    text-align: center;\r\n    color:purple;\r\n}\r\n.container{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n}\r\n#font{\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixVQUFVO0FBQ2Q7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbmgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXHJcbn1cclxuI2ZvbnR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-danger\">\n\n    \n  <div class=\"container bg-info\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 bg-warning\">\n          \n        <h2>ONEWAY DATA BINDING</h2>\n        <form name=\"login\" #login=\"ngForm\" (ngSubmit)=\"logints(login.value)\">\n            <label for=\"text\">First Name :</label>\n          <input type=\"text\"  class=\"form-control\" required name=\"fName\" #fName=\"ngModel\" ngModel><br>\n          <label for=\"text\">Last Name :</label>\n          <input type=\"text\"  class=\"form-control\" required  name=\"lName\" #lName=\"ngModel\" ngModel><br>\n          <label for=\"Number\">Roll Number:</label>\n          <input type=\"text\"  class=\"form-control\" required name=\"roll\" #roll=\"ngModel\" ngModel><br>\n          <label for=\"email\">Email address:</label>\n          <input type=\"text\"  class=\"form-control\" required name=\"email\"  #email=\"ngModel\" ngModel><br>\n          <label for=\"pass\">Password:</label>\n          <input type=\"text\"  class=\"form-control\" required name=\"pass\"  #pass=\"ngModel\" ngModel>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 bg-warning text-center\">\n          <button  type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          &nbsp;<button type=\"button\" class=\"btn btn-dark\"><a routerLink=\"/twoway\">Two Way</a></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div id=\"font\" class=\"container bg-dark\">\n<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center bg-info\">\n{{user.fname}}<br>\n{{user.lname}}<br>\n{{user.roll}}<br>\n{{user.email}}<br>\n{{user.pass}}\n</div>\n</div>\n<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.user = {
            fname: '',
            lname: '',
            roll: '',
            mail: '',
            pass: '',
        };
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.logints = function (value) {
        this.user.fname = value.fName;
        this.user.lname = value.lName;
        this.user.roll = value.roll;
        this.user.mail = value.mail;
        this.user.pass = value.pass;
        console.log(this.user);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/twoway/twoway.component.css":
/*!*********************************************!*\
  !*** ./src/app/twoway/twoway.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0;\r\n    padding: 0;\r\n}\r\n.btn{\r\n    text-align: center\r\n}\r\nh2{\r\n    text-align: center;\r\n    color:purple;\r\n}\r\n.container{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdvd2F5L3R3b3dheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7QUFDZDtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90d293YXkvdHdvd2F5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnB1cnBsZTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG59Il19 */"

/***/ }),

/***/ "./src/app/twoway/twoway.component.html":
/*!**********************************************!*\
  !*** ./src/app/twoway/twoway.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-danger\">\n    <div class=\"container bg-info\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 bg-warning\">\n          <h2>TWOWAY DATA BINDING</h2>\n          <form name=\"login\" #login=\"ngForm\" (ngSubmit)=\"logints(login.value)\">\n              <label for=\"text\">First Name :</label>\n            <input type=\"text\"  class=\"form-control\" required name=\"fName\" [(ngModel)]=result.fname><br>\n            <label for=\"text\">Last Name :</label>\n            <input type=\"text\"  class=\"form-control\" required  name=\"lName\" [(ngModel)]=result.lname><br>\n            <label for=\"Number\">Roll Number:</label>\n            <input type=\"text\"  class=\"form-control\" required name=\"roll\" [(ngModel)]=result.roll><br>\n            <label for=\"email\">Email address:</label>\n            <input type=\"text\"  class=\"form-control\" required name=\"email\" [(ngModel)]=result.email><br>\n            <label for=\"pass\">Password:</label>\n            <input type=\"text\"  class=\"form-control\" required name=\"pass\" [(ngModel)]=result.pass>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 bg-warning text-center\">\n            <button  type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            &nbsp;<button type=\"button\" class=\"btn btn-dark\"><a routerLink=\"/index\">ONE Way</a></button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  \n   <div class=\"container bg-dark\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center bg-info\">\n  {{result.fname}}<br>\n  {{result.lname}}<br>\n  {{result.roll}}<br>\n  {{result.email}}<br>\n  {{result.pass}}<br>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/twoway/twoway.component.ts":
/*!********************************************!*\
  !*** ./src/app/twoway/twoway.component.ts ***!
  \********************************************/
/*! exports provided: TwowayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwowayComponent", function() { return TwowayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TwowayComponent = /** @class */ (function () {
    function TwowayComponent() {
        this.result = {
            fname: "",
            lname: "",
            roll: "",
            mail: "",
            pass: "",
        };
    }
    TwowayComponent.prototype.ngOnInit = function () {
    };
    TwowayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-twoway',
            template: __webpack_require__(/*! ./twoway.component.html */ "./src/app/twoway/twoway.component.html"),
            styles: [__webpack_require__(/*! ./twoway.component.css */ "./src/app/twoway/twoway.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TwowayComponent);
    return TwowayComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\third\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
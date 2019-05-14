(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-resume-module"],{

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outerbox\">\n  <iframe  class=\" resumeBox\" src=\"./assets/Resume/Resume_DhvanilParikh.pdf\" allowfullscreen></iframe>\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.sass":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerBox {\n  position: absolute;\n  top: 0;\n  margin: 0;\n  border-color: green;\n  borer-style: solid;\n  border-width: 20px; }\n\n.resumeBox {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV29ya1NwYWNlLzA1X0N1cnJlbnQvTXktV2Vic2l0ZS9zcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUFHOztBQUd6QjtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsY0FBYTtFQUNiLFVBQVMsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgYm9yZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMjBweDsgfVxuXG5cbi5yZXN1bWVCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(titleService) {
        this.titleService = titleService;
        this.setTitle('Resume | DHP');
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.sass */ "./src/app/resume/resume.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.module.ts":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ResumeModule = /** @class */ (function () {
    function ResumeModule() {
    }
    ResumeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] }
                ]),
            ]
        })
    ], ResumeModule);
    return ResumeModule;
}());



/***/ })

}]);
//# sourceMappingURL=resume-resume-module.js.map
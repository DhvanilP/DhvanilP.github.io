(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\" id=\"name\">\n    <div class=\"nameClass\" style=\"clear: both\">\n        <h1 id=\"name1\">I am </h1>\n        <h1 id=\"name2\">Dh</h1>\n        <h1 id=\"name3\">vanil </h1>\n        <h1 id=\"name4\">P</h1>\n        <h1 id=\"name5\">arikh</h1>\n    </div>\n    <div class=\"connect\">\n        <a href=\"http://github.com/dhvanilp\">\n            <span class=\"fa fa-github fa-fw fa-2x\" style=\"color:aliceblue\"></span>\n        </a>\n        <a href=\"https://twitter.com/DhvanilParikh\">\n            <span class=\"fa fa-twitter fa-fw fa-2x\" style=\"color:aliceblue\"></span>\n        </a>\n        <a href=\"https://www.instagram.com/__d__h__p__/\">\n            <span class=\"fa fa-instagram fa-fw fa-2x\" style=\"color:aliceblue\"></span>\n        </a>\n        <a href=\"https://www.linkedin.com/in/dhp07/\">\n            <span class=\"fa fa-linkedin fa-fw fa-2x\" style=\"color:aliceblue\"></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.sass":
/*!********************************************!*\
  !*** ./src/app/about/about.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#name {\n  padding: 16px;\n  position: absolute;\n  color: white;\n  text-align: center;\n  bottom: 0px; }\n\n.nameClass {\n  position: relative;\n  float: left;\n  margin-left: 17px; }\n\nh1 {\n  display: inline; }\n\n#name2, #name4 {\n  color: orange; }\n\n.connect {\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV29ya1NwYWNlLzA1X0N1cnJlbnQvTXktV2Vic2l0ZS9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVcsRUFHYjs7QUFFRjtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCLEVBQUc7O0FBRXhCO0VBQ0ksZ0JBQWUsRUFBRzs7QUFFdEI7RUFDSSxjQUFhLEVBQUc7O0FBRXBCO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVLEVBQUciLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYW1lIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIC8vIGJvcmRlci13aWR0aDogMXB4XG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZFxuIH0gICAgLy8gYm9yZGVyLWNvbG9yOiB3aGl0ZVxuXG4ubmFtZUNsYXNzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7IH1cblxuaDEge1xuICAgIGRpc3BsYXk6IGlubGluZTsgfVxuXG4jbmFtZTIsI25hbWU0IHtcbiAgICBjb2xvcjogb3JhbmdlOyB9XG5cbi5jb25uZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.sass */ "./src/app/about/about.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
                ]),
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map
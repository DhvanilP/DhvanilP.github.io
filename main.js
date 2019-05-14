(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"./src/app/about/about.module.ts",
		"about-about-module"
	],
	"./contact/contact.module": [
		"./src/app/contact/contact.module.ts",
		"contact-contact-module"
	],
	"./my-clicks/my-clicks.module": [
		"./src/app/my-clicks/my-clicks.module.ts",
		"my-clicks-my-clicks-module"
	],
	"./projects/projects.module": [
		"./src/app/projects/projects.module.ts",
		"projects-projects-module"
	],
	"./resume/resume.module": [
		"./src/app/resume/resume.module.ts",
		"resume-resume-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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



var routes = [
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
        data: {
            state: 'about',
            title: 'About'
        }
    },
    {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule',
        data: {
            state: 'projects',
            title: 'Projects'
        }
    },
    {
        path: 'my-clicks',
        loadChildren: './my-clicks/my-clicks.module#MyClicksModule',
        data: {
            state: 'my-clicks',
            title: 'MyClicks'
        }
    },
    {
        path: 'resume',
        loadChildren: './resume/resume.module#ResumeModule',
        data: {
            state: 'resume',
            title: 'Resume'
        }
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule',
        data: {
            state: 'contact',
            title: 'Contact'
        }
    },
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-sidebar></app-navigation-sidebar>\n\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.setTitle('Dhvanil Parikh');
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navigation_sidebar_navigation_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-sidebar/navigation-sidebar.component */ "./src/app/navigation-sidebar/navigation-sidebar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_sidebar_navigation_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationSidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navigation-sidebar/navigation-sidebar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/navigation-sidebar/navigation-sidebar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Bootstrap row -->\n<div class=\"row\" id=\"body-row\" > \n    <!-- Sidebar -->\n    <div class=\"sidebar\" id=\"sidebar-container\">\n        <!-- Bootstrap List Group -->\n        <ul class=\"list-group\" id=\"list-elements\" routerLinkActive=\"addClasstoAttachLater\">\n            <!-- Menu with submenu -->  \n            <a class=\"list-group-item\" routerLink=\"/about\">\n                <div class=\"nDiv d-flex w-100 justify-content-start align-items-center\">\n                    <span class=\"fa fa-user-o fa-fw mr-3\"></span> \n                    <span class=\"namer\">About</span>\n                </div>\n            </a>\n            <a class=\"list-group-item\" routerLink=\"/projects\">\n                <div class=\"nDiv d-flex w-100 justify-content-start align-items-center\">\n                    <span class=\"fa fa-code-fork fa-fw mr-3\"></span>\n                    <span class=\"namer\">Projects</span>\n                </div>\n            </a>     \n            <a class=\"list-group-item\" routerLink=\"/my-clicks\">\n                <div class=\"nDiv d-flex w-100 justify-content-start align-items-center\">\n                    <span class=\"fa fa-camera fa-fw mr-3\"></span>\n                    <span class=\"namer\">My Clicks</span>    \n                </div>\n            </a> \n            <a class=\"list-group-item\" routerLink=\"/resume\"> \n                    <div class=\"nDiv d-flex w-100 justify-content-start align-items-center\">\n                        <span class=\"fa fa-file-pdf-o fa-fw mr-3\"></span>\n                        <span class=\"namer\">Resume</span>    \n                    </div>\n            </a> \n            <a class=\"list-group-item\" routerLink=\"/contact\">\n                <div class=\"nDiv d-flex w-100 justify-content-start align-items-center\">\n                    <span class=\"fa fa-envelope-o fa-fw mr-3\"></span> \n                    <span class=\"namer\">Contact</span>\n                </div>\n            </a>\n        </ul><!-- List Group END-->\n    </div><!-- sidebar-container END -->\n\n    <!-- MAIN -->\n    <div class=\"col content\" [@myAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n        <router-outlet #o=\"outlet\"></router-outlet>\n    </div><!-- Main Col END -->\n    \n</div><!-- body-row END -->\n"

/***/ }),

/***/ "./src/app/navigation-sidebar/navigation-sidebar.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/navigation-sidebar/navigation-sidebar.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#body-row {\n  margin-left: 0;\n  margin-right: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n#sidebar-container {\n  position: absoulte;\n  min-height: 100vh;\n  width: 150px;\n  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0)); }\n\n#list-elements {\n  position: absolute;\n  padding: 0px;\n  width: 146px;\n  left: 2px;\n  bottom: 0px; }\n\n/* Menu item*/\n\n#sidebar-container .list-group a {\n  padding: 10px;\n  color: white;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sidebar-container .list-group a:hover {\n  color: #8c8c8c; }\n\n.content {\n  padding: 0; }\n\n@media screen and (max-width: 700px) {\n  #sidebar-container {\n    position: absoulte;\n    min-height: 100vh;\n    width: 45px;\n    background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0)); }\n  .sidebar .list-group .list-group-item .nDiv .namer {\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden; }\n  #list-elements {\n    position: absolute;\n    padding: 0px;\n    width: 41px;\n    left: 2px;\n    bottom: 0px; }\n  .content {\n    padding: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV29ya1NwYWNlLzA1X0N1cnJlbnQvTXktV2Vic2l0ZS9zcmMvYXBwL25hdmlnYXRpb24tc2lkZWJhci9uYXZpZ2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixxQ0FQZ0MsRUFPSzs7QUFHekM7RUFDSSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixtR0FBZ0YsRUFFbEY7O0FBRUY7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixVQUFTO0VBQ1QsWUFBVyxFQUViOztBQUdGLGNBQWM7O0FBQ2Q7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHlDQS9CbUMsRUErQkY7O0FBRXJDO0VBQ0csZUFBYyxFQUFHOztBQUVwQjtFQUdJLFdBQVUsRUFBRzs7QUFHakI7RUFDSTtJQUNJLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsWUFBVztJQUNYLG1HQUFnRixFQUV0RjtFQUdFO0lBQ0ksa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQixpQkFBZ0IsRUFBRztFQUV2QjtJQUNJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osWUFBVztJQUNYLFVBQVM7SUFDVCxZQUFXLEVBRWpCO0VBRUU7SUFHSSxXQUFVLEVBQUcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tc2lkZWJhci9uYXZpZ2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1iZ2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMCk7XG4kdHJhbnNwYXJlbnQtZGFyazogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcblxuI2JvZHktcm93IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmdjb2xvcjsgfVxuXG5cbiNzaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic291bHRlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkdHJhbnNwYXJlbnQtZGFyaywgJHRyYW5zcGFyZW50KTtcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkXG4gfSAgICAvLyBib3JkZXItY29sb3I6IHJlZFxuXG4jbGlzdC1lbGVtZW50cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTQ2cHg7XG4gICAgbGVmdDogMnB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIC8vIGJvcmRlci1zdHlsZTogc29saWRcbiB9ICAgIC8vIGJvcmRlci1jb2xvcjogZ3JlZW5cblxuXG4vKiBNZW51IGl0ZW0qL1xuI3NpZGViYXItY29udGFpbmVyIC5saXN0LWdyb3VwIGEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudDsgfVxuXG4jc2lkZWJhci1jb250YWluZXIgLmxpc3QtZ3JvdXAgYTpob3ZlciB7XG4gICBjb2xvcjogIzhjOGM4YzsgfVxuXG4uY29udGVudCB7XG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZFxuICAgIC8vIGJvcmRlci1jb2xvcjogYmx1ZVxuICAgIHBhZGRpbmc6IDA7IH1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICNzaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvdWx0ZTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkdHJhbnNwYXJlbnQtZGFyaywgJHRyYW5zcGFyZW50KTtcbiAgICAgICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZFxuIH0gICAgICAgIC8vIGJvcmRlci1jb2xvcjogcmVkXG5cblxuICAgIC5zaWRlYmFyIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLm5EaXYgLm5hbWVyIHtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cblxuICAgICNsaXN0LWVsZW1lbnRzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHdpZHRoOiA0MXB4O1xuICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkXG4gfSAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiBncmVlblxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkXG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogYmx1ZVxuICAgICAgICBwYWRkaW5nOiAwOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation-sidebar/navigation-sidebar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/navigation-sidebar/navigation-sidebar.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSidebarComponent", function() { return NavigationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var NavigationSidebarComponent = /** @class */ (function () {
    function NavigationSidebarComponent() {
    }
    NavigationSidebarComponent.prototype.ngOnInit = function () {
    };
    NavigationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-sidebar',
            template: __webpack_require__(/*! ./navigation-sidebar.component.html */ "./src/app/navigation-sidebar/navigation-sidebar.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))], { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./navigation-sidebar.component.sass */ "./src/app/navigation-sidebar/navigation-sidebar.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationSidebarComponent);
    return NavigationSidebarComponent;
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

module.exports = __webpack_require__(/*! /mnt/WorkSpace/05_Current/My-Website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
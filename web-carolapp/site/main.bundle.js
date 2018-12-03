webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_charts__ = __webpack_require__("../../../../@progress/kendo-angular-charts/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__totvs_thf_ui__ = __webpack_require__("../../../../@totvs/thf-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_result_box_result_box_component__ = __webpack_require__("../../../../../src/app/components/result-box/result-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_container_container_component__ = __webpack_require__("../../../../../src/app/components/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_percentage_result_percentage_result_component__ = __webpack_require__("../../../../../src/app/components/percentage-result/percentage-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_i18n_service__ = __webpack_require__("../../../../../src/app/services/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_requests_service__ = __webpack_require__("../../../../../src/app/services/http-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_main_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_carol_querys_main_page_service__ = __webpack_require__("../../../../../src/app/services/carol-querys/main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_result_box_group_result_box_group_component__ = __webpack_require__("../../../../../src/app/components/result-box-group/result-box-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_campaigns_campaigns_page_component__ = __webpack_require__("../../../../../src/app/pages/campaigns/campaigns-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_bullet_charts_bullet_charts_component__ = __webpack_require__("../../../../../src/app/components/bullet-charts/bullet-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_campaign_detail_campaign_detail_page_component__ = __webpack_require__("../../../../../src/app/pages/campaign-detail/campaign-detail-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_product_detail_product_detail_page_component__ = __webpack_require__("../../../../../src/app/pages/product-detail/product-detail-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_loading_loading_component__ = __webpack_require__("../../../../../src/app/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_guard_login_service__ = __webpack_require__("../../../../../src/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_carol_querys_toolbar_search_service__ = __webpack_require__("../../../../../src/app/services/carol-querys/toolbar-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_chart_chart_component__ = __webpack_require__("../../../../../src/app/components/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_chart_pie_chart_pie_component__ = __webpack_require__("../../../../../src/app/components/chart-pie/chart-pie.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_main_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_percentage_result_percentage_result_component__["a" /* PercentageResultComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_result_box_result_box_component__["a" /* ResultBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_result_box_group_result_box_group_component__["a" /* ResultBoxGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_campaigns_campaigns_page_component__["a" /* CampaignsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_bullet_charts_bullet_charts_component__["a" /* BulletChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_campaign_detail_campaign_detail_page_component__["a" /* CampaignDetailPageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_product_detail_product_detail_page_component__["a" /* ProductDetailPageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_chart_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_chart_pie_chart_pie_component__["a" /* ChartPieComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__totvs_thf_ui__["a" /* ThfModule */],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_charts__["b" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_29__services_auth_guard_login_service__["a" /* AuthGuardLogin */],
                __WEBPACK_IMPORTED_MODULE_17__services_http_requests_service__["a" /* HttpRequestsService */],
                __WEBPACK_IMPORTED_MODULE_20__services_carol_querys_main_page_service__["a" /* MainPageService */],
                __WEBPACK_IMPORTED_MODULE_30__services_carol_querys_toolbar_search_service__["a" /* ToolbarSearchService */],
                __WEBPACK_IMPORTED_MODULE_16__services_i18n_service__["a" /* I18nService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_25__services_auth_interceptor_service__["a" /* AuthInterceptor */],
                    multi: true,
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_main_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_campaigns_campaigns_page_component__ = __webpack_require__("../../../../../src/app/pages/campaigns/campaigns-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_campaign_detail_campaign_detail_page_component__ = __webpack_require__("../../../../../src/app/pages/campaign-detail/campaign-detail-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_product_detail_product_detail_page_component__ = __webpack_require__("../../../../../src/app/pages/product-detail/product-detail-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_login_service__ = __webpack_require__("../../../../../src/app/services/auth-guard-login.service.ts");








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_main_main_page_component__["a" /* MainPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'campaigns', component: __WEBPACK_IMPORTED_MODULE_3__pages_campaigns_campaigns_page_component__["a" /* CampaignsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'campaign/:id', component: __WEBPACK_IMPORTED_MODULE_4__pages_campaign_detail_campaign_detail_page_component__["a" /* CampaignDetailPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_5__pages_product_detail_product_detail_page_component__["a" /* ProductDetailPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/bullet-charts/bullet-charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bullet-charts {\n  margin-top: 12px;\n  margin-left: 5px;\n}\n\n.bullet-charts-label {\n  font-size: 12px;\n  width: 25%;\n  min-height: 40px;\n  line-height: 20px;\n  display: inline-block;\n}\n\n.bullet-charts-content {\n  width: 40%;\n  display: inline-block;\n  padding-left: 8px;\n  vertical-align: top;\n}\n\n.bullet-charts-values {\n  font-size: 12px;\n  width: 30%;\n  display: inline-block;\n  text-align: center;\n  padding-left: 8px;\n  vertical-align: top;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bullet-charts/bullet-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<thf-widget [t-title]=\"title\">\n  <div class=\"bullet-charts\" *ngFor=\"let bullet of _bulletCharts\">\n    <div class=\"bullet-charts-label\">\n      {{ bullet.label }}\n    </div>\n  \n    <div class=\"bullet-charts-content\">\n      <kendo-sparkline \n        type=\"bullet\"\n        style=\"width: 100%; height: 27px;\"\n        [valueAxis]=\"bullet.bulletValueAxis\">\n      </kendo-sparkline>\n    </div>\n  \n    <div class=\"bullet-charts-values\">\n      {{ bullet.value }} / {{ bullet.max }}\n    </div>\n  </div>\n</thf-widget>"

/***/ }),

/***/ "../../../../../src/app/components/bullet-charts/bullet-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BulletChartsComponent = /** @class */ (function () {
    function BulletChartsComponent() {
        this._bulletCharts = [];
        this.title = '';
        this.primaryColor = '#98CBE5';
        this.secundaryColor = '#CCE5F1';
    }
    Object.defineProperty(BulletChartsComponent.prototype, "bulletCharts", {
        set: function (bulletCharts) {
            var _this = this;
            this._bulletCharts = bulletCharts;
            this._bulletCharts.forEach(function (value) {
                value['bulletValueAxis'] = {
                    min: 0,
                    max: value.max,
                    plotBands: [
                        {
                            from: 0, to: value.value, color: value.primaryColor ? value.primaryColor : _this.primaryColor
                        }, {
                            from: value.value, to: value.max, color: value.secundaryColor ? value.secundaryColor : _this.secundaryColor
                        }
                    ]
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    BulletChartsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BulletChartsComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BulletChartsComponent.prototype, "primaryColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BulletChartsComponent.prototype, "secundaryColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('values'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BulletChartsComponent.prototype, "bulletCharts", null);
    BulletChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'bullet-charts',
            template: __webpack_require__("../../../../../src/app/components/bullet-charts/bullet-charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bullet-charts/bullet-charts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BulletChartsComponent);
    return BulletChartsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-title {\n\tcolor: #495C5F;\n\tfont-size: 17px;\n\tfont-weight: bold;\n\tmargin: 4px 0px 8px 13px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom:30px\">\n  <thf-widget>\n    <div *ngIf=\"title!==''\" class=\"card-title\">\n      {{ title }}\n    </div>\n    <ng-content></ng-content>\n  </thf-widget>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.title = '';
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "title", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'card',
            template: __webpack_require__("../../../../../src/app/components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chart-pie/chart-pie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chart-pie/chart-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.length===0\" [style.height]=\"height\">\n  <loading></loading>\n</div>\n\n<kendo-chart *ngIf=\"data.length>0\"\n  [seriesColors]=\"colors\"\n  [style.height]=\"height\">\n\n  <kendo-chart-legend *ngIf=\"legend===true\" position=\"bottom\"></kendo-chart-legend>\n  <kendo-chart-series>\n    <kendo-chart-series-item type=\"pie\"\n      [data]=\"data\"\n      field=\"value\"\n      categoryField=\"label\">\n    </kendo-chart-series-item>\n  </kendo-chart-series>\n</kendo-chart>\n"

/***/ }),

/***/ "../../../../../src/app/components/chart-pie/chart-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartPieComponent = /** @class */ (function () {
    function ChartPieComponent() {
        /**
         * Example:
         * ['orange', 'blue', '#F00']
         */
        this.colors = null;
        this.legend = true;
        this.height = '';
    }
    ChartPieComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ChartPieComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ChartPieComponent.prototype, "colors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartPieComponent.prototype, "legend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartPieComponent.prototype, "height", void 0);
    ChartPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'chart-pie',
            template: __webpack_require__("../../../../../src/app/components/chart-pie/chart-pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chart-pie/chart-pie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartPieComponent);
    return ChartPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"categories.length===0\" [style.height]=\"height\">\n  <loading></loading>\n</div>\n\n<div *ngIf=\"categories.length>0\">\n  <kendo-chart-title *ngIf=\"title!==''\" [text]=\"title\"></kendo-chart-title>\n  <kendo-chart *ngIf=\"categories.length>0\"\n    [seriesColors]=\"colors\"\n    [categoryAxis]=\"{ categories: categories }\"\n    [style.height]=\"height\">\n\n    <kendo-chart-legend *ngIf=\"legend===true\" position=\"bottom\" orientation=\"horizontal\"></kendo-chart-legend>\n    <kendo-chart-tooltip *ngIf=\"tooltip===true\" format=\"{0}\"></kendo-chart-tooltip>\n    <kendo-chart-series>\n      <kendo-chart-series-item *ngFor=\"let item of series\" [type]=\"type\" style=\"normal\"\n        [data]=\"item.data\" [name]=\"item.label\">\n      </kendo-chart-series-item>\n    </kendo-chart-series>\n  </kendo-chart>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.title = '';
        /**
         * Valid types
         *  - line
         *  - column
         *  - bar
         */
        this.type = 'line';
        /**
         * Example:
         * ['January', 'February', 'March']
         */
        this.categories = [];
        /**
         * Example:
         * [
         *  {data: [3, 4, 4.1, 3.5], label: 'Item 1'},
         *  {data: [4, 3, 2.1, 3.8], label: 'Item 2'}
         * ]
         */
        this.series = [];
        /**
         * Example:
         * ['orange', 'blue', '#F00']
         */
        this.colors = [];
        this.height = '';
        this.legend = true;
        this.tooltip = false;
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "categories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "series", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "colors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "legend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "tooltip", void 0);
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'chart',
            template: __webpack_require__("../../../../../src/app/components/chart/chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n\theight: 100%;\n\t/* max-width: 1200px; */\n\twidth: 100%;\n\tmargin: auto;\n}\n\n.page-info {\n\tcolor: white;\n\tfont-size: 25px;\n\tfont-weight: bold;\n\ttext-align: center;\n\tpadding: 25px 15px;\n\twidth: 190px;\n\tposition: absolute;\n\ttop: 0px;\n\tright: 0px;\n}\n\n.page-filter {\n\tbackground-color: #425357;\n\twidth: 250px;\n\theight: 100vh;\n\tposition: fixed;\n}\n\n.page-filter-field {\n\twidth: 90%;\n\tmargin: auto;\n\tbackground-color: white;\n\tmargin-top: 30px;\n\tborder-radius: 5px;\n\tpadding: 15px 15px 5px 15px;\n}\n\n.page-content {\n\tbackground-color: #FAFBFB;\n\twidth: calc(100% - 250px);\n\theight: 100vh;\n\tposition: relative;\n\tleft: 250px;\n}\n\n.page-menu-general {\n  background-color: #00C0E2;\n  height: 60px;\n\twidth: 60px;\n\tdisplay: block;\n}\n\n.page-menu-campaigns {\n  background-color: #FFB72F;\n  height: 60px;\n\twidth: 60px;\n\tdisplay: block;\n}\n\n.page-menu-img-general {\n\tpadding-top: 17px;\n\tpadding-left: 16px;\n}\n\n.page-menu-img-campaigns {\n\tpadding-top: 19px;\n\tpadding-left: 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<toolbar></toolbar>\n\n<div class=\"page\">\n  <div class=\"page-filter\">\n    <a routerLink=\"/\" class=\"page-menu-general\">\n      <img src=\"assets/general.png\" class=\"page-menu-img-general\">\n    </a>\n\n<!--\n    <a routerLink=\"/campaigns\" class=\"page-menu-campaigns\">\n      <img src=\"/assets/campaigns.png\" class=\"page-menu-img-campaigns\">\n    </a>\n-->\n\n    <div class=\"page-info\">\n      Demo Carol App\n    </div>\n    <div class=\"page-filter-field\" *ngIf=\"filtersTemplate!==undefined\">\n      <ng-container *ngTemplateOutlet=\"filtersTemplate\"></ng-container>\n    </div>\n  </div>\n\n  <div class=\"page-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */])
    ], ContainerComponent.prototype, "filtersTemplate", void 0);
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'container',
            template: __webpack_require__("../../../../../src/app/components/container/container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thf-loading-icon loading-box\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'loading',
            template: __webpack_require__("../../../../../src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/percentage-result/percentage-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".percentage-result {\n\twidth: 100%;\n\tmin-height: 33px;\n\tfont-size: 12px;\n\tmargin-top: 8px;\n}\n\n.percentage-result-image-container {\n\twidth: 20%;\n\theight: 20px;\n\tdisplay: inline;\n\tmargin-right: 10px;\n}\n\n.percentage-result-image {\n\twidth: auto;\n\theight: 20px;\n\tvertical-align: top;\n}\n\n.percentage-result-text {\n\twidth: 80%;\n\tline-height: 14px;\n\tdisplay: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/percentage-result/percentage-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"percentage-result\" [style.color]=\"_color\">\n  <div class=\"percentage-result-image-container\">\n    <img [src]=\"_arrowImg\" class=\"percentage-result-image\">\n  </div>\n  <div class=\"percentage-result-text\">\n    {{ _value }} {{ text }}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/percentage-result/percentage-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercentageResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PercentageResultComponent = /** @class */ (function () {
    function PercentageResultComponent() {
        this._color = '#AFB8C2';
        this._direction = 'zero';
        this._arrowImg = 'assets/arrows/arrow-zero.png';
        this._value = '0%';
        this.text = '';
    }
    Object.defineProperty(PercentageResultComponent.prototype, "value", {
        set: function (value) {
            this._value = value + '%';
            if (parseFloat(value) > 0) {
                this._direction = 'up';
                this._color = '#19BC7E';
                this._arrowImg = 'assets/arrows/arrow-up.png';
            }
            else if (parseFloat(value) < 0) {
                this._direction = 'down';
                this._color = '#FF0005';
                this._arrowImg = 'assets/arrows/arrow-down.png';
            }
            else {
                this._direction = 'zero';
                this._color = '##AFB8C2';
                this._arrowImg = 'assets/arrows/arrow-zero.png';
            }
        },
        enumerable: true,
        configurable: true
    });
    PercentageResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PercentageResultComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PercentageResultComponent.prototype, "text", void 0);
    PercentageResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'percentage-result',
            template: __webpack_require__("../../../../../src/app/components/percentage-result/percentage-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/percentage-result/percentage-result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PercentageResultComponent);
    return PercentageResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/result-box-group/result-box-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/result-box-group/result-box-group.component.html":
/***/ (function(module, exports) {

module.exports = "<result-box *ngFor=\"let value of _values\"\n  [ngClass]=\"{'thf-lg-3': _values.length===4, \n              'thf-lg-4': _values.length===3, \n              'thf-md-6': true}\" \n  [box-color]=\"value.color\" \n  [title]=\"value.title\">\n  \n    {{ value.content }}\n\n  <percentage-result *ngIf=\"value.percentageText!==''\"\n    [value]=\"value.percentageValue\" \n    [text]=\"value.percentageText\">\n  </percentage-result>\n</result-box>"

/***/ }),

/***/ "../../../../../src/app/components/result-box-group/result-box-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultBoxGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultBoxGroupComponent = /** @class */ (function () {
    function ResultBoxGroupComponent() {
        this._values = [
            {
                title: '',
                content: '',
                color: '',
                percentageValue: '',
                percentageText: ''
            }
        ];
    }
    Object.defineProperty(ResultBoxGroupComponent.prototype, "values", {
        set: function (values) {
            if (typeof values === 'object') {
                this._values = values;
            }
        },
        enumerable: true,
        configurable: true
    });
    ResultBoxGroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ResultBoxGroupComponent.prototype, "values", null);
    ResultBoxGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'result-box-group',
            template: __webpack_require__("../../../../../src/app/components/result-box-group/result-box-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/result-box-group/result-box-group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultBoxGroupComponent);
    return ResultBoxGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/result-box/result-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".result-box {\n\theight: 100%;\n\tmargin: 12px 6px 14px 6px;\n}\n\n.result-box-title {\n\tfont-size: 22px;\n\tfont-weight: bold;\n\tpadding-bottom: 5px;\n}\n\n.result-box-content {\n\tcolor: #AFB8C2;\n\tfont-size: 16px;\n}\n\n.result-box-container {\n\tmin-height: 92px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/result-box/result-box.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"result-box\">\n  <thf-widget>\n    <div class=\"result-box-container\">\n      <div *ngIf=\"title!==''\">\n        <div class=\"result-box-title\" [style.color]=\"_titleColor\">\n          {{ title }}\n        </div>\n        <div class=\"result-box-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <div class=\"thf-loading\" *ngIf=\"title===''\">\n        <span class=\"thf-loading-icon\"></span>\n      </div>\n    </div>\n  </thf-widget>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/result-box/result-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultBoxComponent = /** @class */ (function () {
    function ResultBoxComponent() {
        this._boxColor = '#D7D7D7';
        this._titleColor = '#354050';
        this.title = '';
        this.titleUnit = '';
    }
    Object.defineProperty(ResultBoxComponent.prototype, "boxColor", {
        set: function (boxColor) {
            if (boxColor) {
                this._boxColor = boxColor;
                this._titleColor = boxColor;
            }
        },
        enumerable: true,
        configurable: true
    });
    ResultBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('box-color'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ResultBoxComponent.prototype, "boxColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ResultBoxComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ResultBoxComponent.prototype, "titleUnit", void 0);
    ResultBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'result-box',
            template: __webpack_require__("../../../../../src/app/components/result-box/result-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/result-box/result-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultBoxComponent);
    return ResultBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\n\theight: 58px;\n\twidth: calc(100% - 250px);\n\tfloat: right;\n}\n\n.toolbar-content {\n\tz-index: 100;\n\theight: 58px;\n\twidth: calc(100% - 250px);\n\tfont-size: 20px;\n\tbackground: white;\n\t-webkit-box-shadow: 0px 5px 12px -1px rgba(0,0,0,0.11);\n\tbox-shadow: 0px 5px 12px -1px rgba(0,0,0,0.11);\n\tposition: fixed;\n}\n\n.toolbar-search {\n\tposition: relative;\n\tfloat: left;\n\twidth: 45%;\n\theight: 100%;\n}\n\ninput {\n\tmargin-top: 14px;\n\tmargin-left: 64px;\n\twidth: 100%;\n\theight: 30px;\n\tfont-size: 14px;\n\tborder: none;\n\tbackground-color: transparent;\n\tcolor: #485C5D;\n\toutline: none;\n}\n\ninput::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n\tcolor: #859BB0;\n\topacity: 1; /* Firefox */\n}\n\ninput:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n\tcolor: #859BB0;\n\topacity: 1; /* Firefox */\n}\n\ninput::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n\tcolor: #859BB0;\n\topacity: 1; /* Firefox */\n}\n\ninput::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n\tcolor: #859BB0;\n\topacity: 1; /* Firefox */\n}\n\n.toolbar-search-image {\n\tmargin-top: 20px;\n\tmargin-left: 40px;\n\tposition: absolute;\n}\n\n.toolbar-group-right {\n\tfloat: right;\n\theight: 100%;\n\tcolor: #859BB0;\n  font-size: 14px;\n}\n\n.toolbar-language-container {\n\tfloat: left;\n\tposition: relative;\n\tpadding: 0px 20px;\n\tcursor: pointer;\n}\n\n.toolbar-language-container:hover {\n\tbackground-color: #ddd\n}\n\n.toolbar-language-img-container {\n\tfloat: left;\n\tmargin: 22px 10px 10px 0px;\n}\n\n.toolbar-language-text-container {\n\tfloat: left;\n\tmargin: 20px 0px;\n}\n\n.toolbar-user-container {\n\tfloat: left;\n\tposition: relative;\n\tpadding: 0px 20px 0px 10px;\n\tcursor: pointer;\n}\n\n.toolbar-user-container:hover {\n\tbackground-color: #ddd\n}\n\n.toolbar-user-text-container {\n\tfloat: left;\n\tmargin: 20px 5px;\n}\n\n.toolbar-user-avatar {\n\tfloat: left;\n\tmargin-top: 8px;\n}\n\n.toolbar-search-box {\n\tposition: absolute;\n\ttop: 59px;\n\tmin-width: 150px;\n\toverflow: auto;\n\tbackground: white;\n\t-webkit-box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.11);\n\tbox-shadow: 0px 5px 20px 5px rgba(0,0,0,0.11);\n\tz-index: 1;\n\tborder: 1px solid #D7D7D7;\n\tborder-radius: 5px;\n\twidth: 100%;\n\tmargin-left: 4px;\n\tmax-height: 500px;\n\toverflow: auto;\n}\n\n.itens-search-box {\n\tcolor: #607c7d;\n\tpadding: 6px 35px;\n\ttext-decoration: none;\n\tdisplay: block;\n\tfont-size: 13px;\n\tcursor: pointer;\n}\n\n.itens-search-box:hover {\n\tbackground-color: #ddd\n}\n\n.title-search-box {\n\tbackground-color: #f3f0f0;\n\tcolor: #485C5D;\n\tpadding: 6px 16px;\n\ttext-decoration: none;\n\tdisplay: block;\n\tfont-size: 15px;\n}\n\n.toolbar-dropdown {\n\tposition: absolute;\n\ttop: 59px;\n\tmin-width: 150px;\n\toverflow: auto;\n\tbackground: white;\n\t-webkit-box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.11);\n\tbox-shadow: 0px 5px 20px 5px rgba(0,0,0,0.11);\n\tz-index: 1;\n\tborder: 1px solid #D7D7D7;\n\tborder-radius: 5px;\n}\n\n.toolbar-dropdown span {\n\tcolor: #778a9c;\n\tpadding: 6px 16px;\n\ttext-decoration: none;\n\tdisplay: block;\n\tfont-size: 14px;\n}\n\n.toolbar-dropdown span:hover {\n\tbackground-color: #ddd\n}\n\n.toolbar-dropdown-img-language {\n\tmargin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <div class=\"toolbar-content\">\n    <img src=\"assets/zoom.png\" class=\"toolbar-search-image\">\n    <div class=\"toolbar-search\">\n\n      <input #inputElement\n        placeholder=\"Global search bar\"\n        (input)=\"changeSearch($event.target.value)\"\n        [(ngModel)]=\"searchInput\"\n        [ngModelOptions]=\"{standalone: true}\">\n\n      <div class=\"toolbar-search-box\" [hidden]=\"!showSearchBox\">\n\n        <span *ngIf=\"campaigns.length > 0\" class=\"title-search-box\">\n          Campanhas\n        </span>\n        <span *ngFor=\"let campaign of campaigns\"\n          [routerLink]=\"['/campaign', campaign.value]\"\n          class=\"itens-search-box\">\n          {{ campaign.label }}\n        </span>\n\n        <span *ngIf=\"products.length > 0\" class=\"title-search-box\">\n          Produtos\n        </span>\n        <a *ngFor=\"let product of products\"\n          [routerLink]=\"['/product', product.value]\"\n          class=\"itens-search-box\">\n          {{ product.label }}\n        </a>\n\n        <span *ngIf=\"searchingCampaigns===true || searchingProducts===true\"\n          class=\"title-search-box\">\n          <loading></loading>\n        </span>\n\n        <span *ngIf=\"searchingCampaigns===false && searchingProducts===false && products.length === 0 && campaigns.length === 0\"\n          class=\"title-search-box\">\n          Nenhum resultado encontrado\n        </span>\n      </div>\n    </div>\n\n    <div class=\"toolbar-group-right\">\n      <div class=\"toolbar-language-container\"\n        (mouseenter)=\"showLanguageDropdown=true\"\n        (mouseleave)=\"showLanguageDropdown=false\">\n\n        <div class=\"toolbar-language-img-container\">\n          <img src=\"assets/flags/{{ language }}.png\">\n        </div>\n        <div class=\"toolbar-language-text-container\">\n          {{ language }}\n        </div>\n\n        <div class=\"toolbar-dropdown\"\n          style=\"left: 0px\"\n          [hidden]=\"!showLanguageDropdown\">\n\n          <span (click)=\"changeLanguage('PT')\">\n            <img src=\"assets/flags/PT.png\" class=\"toolbar-dropdown-img-language\">\n            Português\n          </span>\n          <span (click)=\"changeLanguage('EN')\">\n            <img src=\"assets/flags/EN.png\" class=\"toolbar-dropdown-img-language\">\n            Inglês\n          </span>\n        </div>\n      </div>\n\n      <div class=\"toolbar-user-container\"\n        (mouseenter)=\"showUserDropdown=true\"\n        (mouseleave)=\"showUserDropdown=false\">\n\n        <thf-avatar class=\"toolbar-user-avatar\"\n          t-src=\"assets/{{ face }}\"\n          t-size=\"sm\">\n        </thf-avatar>\n        <div class=\"toolbar-user-text-container\">\n          {{ user }}\n        </div>\n        <div class=\"toolbar-dropdown\"\n          style=\"right: 0px\"\n          [hidden]=\"!showUserDropdown\">\n\n          <span (click)=\"logout()\">Sair</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_i18n_service__ = __webpack_require__("../../../../../src/app/services/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_carol_querys_toolbar_search_service__ = __webpack_require__("../../../../../src/app/services/carol-querys/toolbar-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonpath_jsonpath__ = __webpack_require__("../../../../jsonpath/jsonpath.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonpath_jsonpath___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonpath_jsonpath__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(i18n, searchService, authService, renderer, router) {
        var _this = this;
        this.i18n = i18n;
        this.searchService = searchService;
        this.authService = authService;
        this.renderer = renderer;
        this.router = router;
        this.showUserDropdown = false;
        this.showLanguageDropdown = false;
        this.showSearchBox = false;
        this.searchInput = '';
        this.face = 'face.png';
        this.campaigns = [];
        this.products = [];
        this.searchingCampaigns = false;
        this.searchingProducts = false;
        renderer.listen('document', 'click', function (event) {
            _this.wasClickedOutOfSearchBox(event);
        });
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.language = this.i18n.getLanguage();
        var email = localStorage.getItem('user');
        this.user = email.substring(0, email.indexOf('@'));
    };
    ToolbarComponent.prototype.changeLanguage = function (language) {
        this.language = language;
        this.i18n.setLanguage(language);
    };
    ToolbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ToolbarComponent.prototype.changeSearch = function (value) {
        var _this = this;
        if (value.length < 3) {
            return;
        }
        this.showSearchBox = true;
        this.searchingCampaigns = true;
        this.searchingProducts = true;
        this.campaigns = [];
        this.products = [];
        this.searchService.getCampaigns(value)
            .subscribe(function (result) {
            console.log('getCampaigns', result);
            _this.campaigns = __WEBPACK_IMPORTED_MODULE_6_jsonpath_jsonpath__["query"](result, '$..campaign.buckets.*')
                .map(function (x) {
                return {
                    label: __WEBPACK_IMPORTED_MODULE_6_jsonpath_jsonpath__["query"](x, '$..aggregations..key'),
                    value: x['key'],
                };
            });
            setTimeout(function () {
                _this.searchingCampaigns = false;
            }, 5000);
        }, function (error) {
            console.log('error getCampaigns', error);
            _this.searchingCampaigns = false;
        });
        this.searchService.getCampaignByProduct(value)
            .subscribe(function (result) {
            console.log('getCampaignByProduct', result);
            _this.products = __WEBPACK_IMPORTED_MODULE_6_jsonpath_jsonpath__["query"](result, '$..campaign.buckets.*')
                .filter(function (x) { return x['resolved']; })
                .map(function (x) {
                return {
                    label: __WEBPACK_IMPORTED_MODULE_6_jsonpath_jsonpath__["query"](x, '$..aggregations..key'),
                    value: x['key'],
                };
            });
            setTimeout(function () {
                _this.searchingProducts = false;
            }, 5000);
        }, function (error) {
            console.log('error getCampaignByProduct', error);
            _this.searchingProducts = false;
        });
    };
    ToolbarComponent.prototype.wasClickedOutOfSearchBox = function (event) {
        if (!this.inputElement.nativeElement.contains(event.target)) {
            this.showSearchBox = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('inputElement', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ToolbarComponent.prototype, "inputElement", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'toolbar',
            template: __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_i18n_service__["a" /* I18nService */],
            __WEBPACK_IMPORTED_MODULE_4__services_carol_querys_toolbar_search_service__["a" /* ToolbarSearchService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/i18n/literalsEN.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EN; });
var EN = {
    lSearchFor: 'Search for store or product',
    lCampaigns: 'Campaigns',
    lAnalysisPeriod: 'Analysis Period',
    lLast30Days: 'Last 30 dias',
    lLast60Days: 'Last 60 dias',
    lLast90Days: 'Last 90 dias',
    lSelectTheBranchs: 'Select the branchs',
    lSignOut: 'Sign out',
    lTotalClientFidelity: 'Total client fidelity',
};


/***/ }),

/***/ "../../../../../src/app/i18n/literalsPT.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PT; });
var PT = {
    lSearchFor: 'Buscar loja ou produto',
    lCampaigns: 'Campanhas',
    lAnalysisPeriod: 'Período de Análise',
    lLast30Days: 'Últimos 30 dias',
    lLast60Days: 'Últimos 60 dias',
    lLast90Days: 'Últimos 90 dias',
    lSelectTheBranchs: 'Selecione as unidades',
    lSignOut: 'Sair',
    lTotalClientFidelity: 'Total cliente fidelidade',
};


/***/ }),

/***/ "../../../../../src/app/pages/campaign-detail/campaign-detail-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".campaign-title {\n  font-size: 24px;\n  font-weight: bold;\n  display: inline-block;\n  padding: 10px;\n}\n\n.campaign-time {\n  height: 30px;\n  color: white;\n  font-size: 14px;\n  background-color: #f38400;\n  display: inline-block;\n  padding: 3px 8px;\n  margin-left: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/campaign-detail/campaign-detail-page.component.html":
/***/ (function(module, exports) {

module.exports = "<container>\n\n  <card>\n    <div class=\"thf-row\">\n      <div class=\"thf-lg-7 thf-md-6\">\n        <div class=\"campaign-title\">\n          Dia das Mães\n        </div>\n        <div class=\"campaign-time\">\n          Final. em 5 dias\n        </div>\n      </div>\n      <div class=\"thf-lg-5 thf-md-6\">\n        <bullet-charts\n          [values]=\"bestCampaigns\">\n        </bullet-charts>\n      </div>\n    </div>\n\n    <div class=\"thf-row\">\n\n    </div>\n  </card>\n\n  <card>\n    <thf-table\n      t-striped=\"true\"\n      t-sort=\"true\"\n      [t-columns]=\"columns\"\n      [t-items]=\"items\">\n    </thf-table>\n  </card>\n    \n</container>"

/***/ }),

/***/ "../../../../../src/app/pages/campaign-detail/campaign-detail-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignDetailPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CampaignDetailPageComponent = /** @class */ (function () {
    function CampaignDetailPageComponent() {
        var _this = this;
        this.bestCampaigns = [
            { label: 'Cupons', value: 3500, max: 3000, primaryColor: '#99c9e8', secundaryColor: 'f1f7fd' }
        ];
        this.columns = [
            { column: 'product', label: 'Produto', type: 'link', action: function (value, row) { _this.extras(value, row); } },
            { column: 'billing', label: 'Faturamento' },
            { column: 'profit', label: 'Lucro' },
            { column: 'avgticket', label: 'Ticket médio' },
            { column: 'vouchers', label: 'Vouchers convertidos / emitidos' },
            // { column: 'status', label: 'Status', type: 'subtitle', width: '5%', subtitles: [
            //   { value: 'open', type: 'success', label: 'Aberta', content: '1' },
            //   { value: 'next', type: 'warning', label: 'Prazo final próximo', content: '2' },
            //   { value: 'closed', type: 'danger', label: 'Finalizada', content: '3' }
            // ]}
            { column: 'status', label: 'Status', color: this.experimentalColor }
        ];
        this.items = [
            { campaign: 'Totvs Switch',
                billing: 'On off checkbox similar to a light switch ',
                link: '/documentation/thf-switch',
                status: 'Final. em 5 dias' },
            { campaign: 'Totvs Radio Group',
                billing: 'Group of round buttons that allows 1 item to be selected',
                link: '/campaign/thf-radio-group',
                profit: 'Best Practices',
                status: '25/04/2018' },
            { campaign: 'Totvs Radio Group',
                billing: 'Group of round buttons that allows 1 item to be selected',
                link: '/campaign/thf-radio-group',
                profit: 'Best Practices',
                status: 'Finalizada'
            }
        ];
    }
    CampaignDetailPageComponent.prototype.experimentalColor = function (row, column) {
        if (row.status === 'Finalizada') {
            return 'danger';
        }
        else if (row.status.indexOf('Final.') > -1) {
            return 'warning';
        }
        else {
            return 'success';
        }
    };
    CampaignDetailPageComponent.prototype.extras = function (value, row) {
        console.log(value, row, 'campaign clicked');
    };
    CampaignDetailPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'campaign-detail-page',
            template: __webpack_require__("../../../../../src/app/pages/campaign-detail/campaign-detail-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/campaign-detail/campaign-detail-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CampaignDetailPageComponent);
    return CampaignDetailPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/campaigns/campaigns-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/campaigns/campaigns-page.component.html":
/***/ (function(module, exports) {

module.exports = "<container>\n\n  <card>\n    <div class=\"thf-row\">\n      <bullet-charts\n        class=\"thf-lg-5 thf-md-6\"\n        [values]=\"bestCampaigns\"\n        title=\"Melhores Campanhas\">\n      </bullet-charts>\n\n      <bullet-charts\n        class=\"thf-lg-5 thf-md-6\"\n        [values]=\"worstCampaigns\"\n        title=\"Piores Campanhas\"\n        primaryColor=\"#FF2E3A\">\n      </bullet-charts>\n\n      <thf-widget\n        class=\"thf-lg-2 thf-md-6\"\n        t-title=\"Vouchers\">\n\n        <chart-pie height=\"270px\"\n          [data]=\"dataVouchers\"></chart-pie>\n\n      </thf-widget>\n    </div>\n  </card>\n\n  <card>\n    <thf-table\n      t-striped=\"true\"\n      t-sort=\"true\"\n      [t-columns]=\"columns\"\n      [t-items]=\"items\">\n    </thf-table>\n  </card>\n\n</container>"

/***/ }),

/***/ "../../../../../src/app/pages/campaigns/campaigns-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CampaignsPageComponent = /** @class */ (function () {
    function CampaignsPageComponent() {
        var _this = this;
        this.bestCampaigns = [
            { label: 'Dias das mães', value: 480, max: 500 },
            { label: 'Dia D da cerveja', value: 2500, max: 3000 },
            { label: 'Páscoa', value: 2890, max: 3000 },
            { label: 'Aniversário da cidade', value: 9988, max: 10000 },
            { label: 'Compre um e ganhe outro', value: 4890, max: 5000 }
        ];
        this.worstCampaigns = [
            { label: 'Dias das mães', value: 480, max: 500 },
            { label: 'Dia D da cerveja', value: 2500, max: 3000 },
            { label: 'Páscoa', value: 2890, max: 3000 },
            { label: 'Aniversário da cidade', value: 9988, max: 10000 },
            { label: 'Compre um e ganhe outro', value: 4890, max: 5000 }
        ];
        this.dataVouchers = [];
        this.columns = [
            { column: 'campaign', label: 'Campanha', type: 'link', action: function (value, row) { _this.extras(value, row); } },
            { column: 'billing', label: 'Faturamento' },
            { column: 'profit', label: 'Lucro' },
            { column: 'avgticket', label: 'Ticket médio' },
            { column: 'vouchers', label: 'Vouchers convertidos / emitidos' },
            // { column: 'status', label: 'Status', type: 'subtitle', width: '5%', subtitles: [
            //   { value: 'open', type: 'success', label: 'Aberta', content: '1' },
            //   { value: 'next', type: 'warning', label: 'Prazo final próximo', content: '2' },
            //   { value: 'closed', type: 'danger', label: 'Finalizada', content: '3' }
            // ]}
            { column: 'status', label: 'Status', color: this.experimentalColor }
        ];
        this.items = [
            { campaign: 'Totvs Switch',
                billing: 'On off checkbox similar to a light switch ',
                link: '/documentation/thf-switch',
                status: 'Final. em 5 dias' },
            { campaign: 'Totvs Radio Group',
                billing: 'Group of round buttons that allows 1 item to be selected',
                link: '/campaign/thf-radio-group',
                profit: 'Best Practices',
                status: '25/04/2018' },
            { campaign: 'Totvs Radio Group',
                billing: 'Group of round buttons that allows 1 item to be selected',
                link: '/campaign/thf-radio-group',
                profit: 'Best Practices',
                status: 'Finalizada'
            }
        ];
    }
    CampaignsPageComponent.prototype.experimentalColor = function (row, column) {
        if (row.status === 'Finalizada') {
            return 'danger';
        }
        else if (row.status.indexOf('Final.') > -1) {
            return 'warning';
        }
        else {
            return 'success';
        }
    };
    CampaignsPageComponent.prototype.extras = function (value, row) {
        console.log(value, row, 'campaign clicked');
    };
    CampaignsPageComponent.prototype.ngOnInit = function () {
    };
    CampaignsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'campaigns-page',
            template: __webpack_require__("../../../../../src/app/pages/campaigns/campaigns-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/campaigns/campaigns-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CampaignsPageComponent);
    return CampaignsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<thf-page-login\n  t-hide-remember-user\n  (t-login-submit)=\"checkLogin($event)\">\n</thf-page-login>"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__totvs_thf_ui_services_thf_notification_thf_notification_service__ = __webpack_require__("../../../../@totvs/thf-ui/services/thf-notification/thf-notification.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, thfNotification) {
        this.authService = authService;
        this.router = router;
        this.thfNotification = thfNotification;
    }
    LoginComponent.prototype.checkLogin = function (values) {
        var _this = this;
        // this.requests.login(values.login, values.password);
        this.authService.login(values.login, values.password).subscribe(function (result) {
            _this.authService.setSession(result, values.login);
            _this.router.navigate([_this.authService.redirectUrl]);
        }, function (error) {
            if (error.status === 401) {
                _this.thfNotification.error('Senha incorreta!');
            }
            else {
                _this.thfNotification.warning('Possível problema com o Servidor');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__totvs_thf_ui_services_thf_notification_thf_notification_service__["a" /* ThfNotificationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/main/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<container>\n  <card>\n    <div class=\"thf-row\">\n      <result-box-group [values]=\"topResultBoxes\">\n      </result-box-group>\n    </div>\n  </card>\n\n  <card title=\"Additional Information\">\n    <div class=\"thf-row\">\n      <div class=\"thf-lg-4 thf-md-6\" style=\"display: table\">\n        <result-box title=\"Customers by status\">\n\n          <kendo-chart style=\"height: 330px;\">\n            <kendo-chart-series>\n              <kendo-chart-series-item\n                  type=\"donut\" [data]=\"dadosCustomersSituation\"\n                  categoryField=\"kind\" field=\"share\">\n                <kendo-chart-series-item-labels\n                  [content]=\"labelContent\"\n                  color=\"#fff\" background=\"none\">\n                </kendo-chart-series-item-labels>\n              </kendo-chart-series-item>\n            </kendo-chart-series>\n            <kendo-chart-legend [visible]=\"false\"></kendo-chart-legend>\n          </kendo-chart>\n        </result-box>\n      </div>\n\n      <div class=\"thf-lg-5 thf-md-6\">\n        <result-box id=\"chart\" title=\"Customers with high risk of churn\">\n          <kendo-chart style=\"height: 330px;\" [series]=\"dadosCustomersTop\">\n            <kendo-chart-title></kendo-chart-title>\n          </kendo-chart>\n        </result-box>\n      </div>\n    </div>\n  </card>\n</container>\n"

/***/ }),

/***/ "../../../../../src/app/pages/main/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_i18n_service__ = __webpack_require__("../../../../../src/app/services/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_carol_querys_main_page_service__ = __webpack_require__("../../../../../src/app/services/carol-querys/main-page.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(mainPageService, i18n) {
        this.mainPageService = mainPageService;
        this.i18n = i18n;
        this.totalFidCustomers = '';
        this.totalNotFidCustomers = '';
        this.seriesFidCustomers = [];
        this.categoriesFidCustomers = [];
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.topResultBoxes = [{
                title: '0',
                content: 'Orders',
                color: '#00C6D3',
                percentageValue: '',
                percentageText: ''
            },
            {
                title: '0',
                content: 'Customers',
                color: 'pink',
                percentageValue: '50',
                percentageText: ''
            }];
        this.newFilter();
    };
    MainPageComponent.prototype.labelContent = function (e) {
        return e.category;
    };
    MainPageComponent.prototype.newFilter = function () {
        var _this = this;
        this.mainPageService.runNamedQuery('customerPerSituation', {}).subscribe(function (result) {
            if (result != undefined && result['aggs'] != undefined && result['aggs']['status'] != undefined && result['aggs']['status']['buckets'] != undefined) {
                var dados = result['aggs']['status']['buckets'];
                _this.dadosCustomersSituation = [];
                for (var key in dados) {
                    if (dados.hasOwnProperty(key)) {
                        var valor = dados[key]['docCount'];
                        if (valor != 0) {
                            valor = valor / result["totalHits"];
                        }
                        _this.dadosCustomersSituation.push({ kind: key, share: valor });
                        console.log(key, dados[key]);
                    }
                }
            }
        }, function (error) {
            console.log('error customerPerSituation', error);
        });
        function compare(a, b) {
            if (a.data < b.data)
                return -1;
            if (a.data > b.data)
                return 1;
            return 0;
        }
        this.mainPageService.runNamedQuery('customersTop', {}).subscribe(function (result) {
            _this.dadosCustomersTop = [];
            if (result != undefined) {
                if (result["aggs"] != undefined) {
                    if (result["aggs"]["name"] != undefined) {
                        if (result["aggs"]["name"]["buckets"] != undefined) {
                            var dados = result["aggs"]["name"]["buckets"];
                            for (var key in dados) {
                                if (dados.hasOwnProperty(key)) {
                                    var row = dados[key];
                                    _this.dadosCustomersTop.push({ name: row["key"], data: [row["aggregations"]["risk"]["value"]] });
                                    console.info(key);
                                }
                            }
                            _this.dadosCustomersTop.sort(compare);
                        }
                    }
                }
            }
        }, function (error) {
            console.log('error customersTop', error);
        });
        this.mainPageService.runNamedQuery('QuantityOrders', {}).subscribe(function (result) {
            _this.topResultBoxes[0]['title'] = result['totalHits'];
        }, function (error) {
            console.log('error getAverageTicket', error);
        });
        this.mainPageService.runNamedQuery('QuantityCustomers', {}).subscribe(function (result) {
            console.info(JSON.stringify(result));
            _this.topResultBoxes[1]['title'] = result['totalHits'];
        }, function (error) {
            console.log('error getAverageTicket', error);
        });
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'main-page',
            template: __webpack_require__("../../../../../src/app/pages/main/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_carol_querys_main_page_service__["a" /* MainPageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_i18n_service__["a" /* I18nService */]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/product-detail/product-detail-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".campaign-title {\n  font-size: 24px;\n  font-weight: bold;\n  display: inline-block;\n  padding: 10px;\n}\n\n.campaign-time {\n  height: 30px;\n  color: white;\n  font-size: 14px;\n  background-color: #f38400;\n  display: inline-block;\n  padding: 3px 8px;\n  margin-left: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product-detail/product-detail-page.component.html":
/***/ (function(module, exports) {

module.exports = "<container>\n\n  <card>\n    <div class=\"thf-row\">\n      <div class=\"thf-lg-7 thf-md-6\">\n        <div class=\"campaign-title\">\n          Coca Cola 2 litros\n        </div>\n        <div class=\"campaign-time\">\n          Final. em 5 dias\n        </div>\n      </div>\n      <div class=\"thf-lg-5 thf-md-6\">\n        <bullet-charts\n          [values]=\"avgProducts\">\n        </bullet-charts>\n      </div>\n    </div>\n\n    <div class=\"thf-row\">\n\n    </div>\n  </card>\n\n  <card title=\"Faturamento / Unidades\">\n    <div class=\"thf-row\">\n      <div class=\"thf-lg-3 thf-md-6\" style=\"display: table;\">\n\n      </div>\n\n      <div class=\"thf-lg-9 thf-md-6\">\n\n      </div>\n    </div>\n  </card>\n\n</container>"

/***/ }),

/***/ "../../../../../src/app/pages/product-detail/product-detail-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailPageComponent = /** @class */ (function () {
    function ProductDetailPageComponent() {
        var _this = this;
        this.avgProducts = [
            { label: 'Cupons', value: 3500, max: 3000, primaryColor: '#99c9e8', secundaryColor: 'f1f7fd' },
            { label: 'Cupons', value: 3500, max: 3000, primaryColor: '#99c9e8', secundaryColor: 'f1f7fd' },
            { label: 'Cupons', value: 3500, max: 3000, primaryColor: '#99c9e8', secundaryColor: 'f1f7fd' },
            { label: 'Cupons', value: 3500, max: 3000, primaryColor: '#99c9e8', secundaryColor: 'f1f7fd' },
        ];
        this.columns = [
            { column: 'product', label: 'Produto', type: 'link', action: function (value, row) { _this.extras(value, row); } },
            { column: 'billing', label: 'Faturamento' },
            { column: 'profit', label: 'Lucro' },
            { column: 'avgticket', label: 'Ticket médio' },
            { column: 'vouchers', label: 'Vouchers convertidos / emitidos' },
            // { column: 'status', label: 'Status', type: 'subtitle', width: '5%', subtitles: [
            //   { value: 'open', type: 'success', label: 'Aberta', content: '1' },
            //   { value: 'next', type: 'warning', label: 'Prazo final próximo', content: '2' },
            //   { value: 'closed', type: 'danger', label: 'Finalizada', content: '3' }
            // ]}
            { column: 'status', label: 'Status', color: this.experimentalColor }
        ];
        this.items = [
            { campaign: 'Totvs Switch',
                billing: 'On off checkbox similar to a light switch ',
                link: '/documentation/thf-switch',
                status: 'Final. em 5 dias' },
            { campaign: 'Totvs Radio Group',
                billing: 'Group of round buttons that allows 1 item to be selected',
                link: '/campaign/thf-radio-group',
                profit: 'Best Practices',
                status: '25/04/2018' },
            { campaign: 'Totvs Radio Group',
                billing: 'Group of round buttons that allows 1 item to be selected',
                link: '/campaign/thf-radio-group',
                profit: 'Best Practices',
                status: 'Finalizada'
            }
        ];
    }
    ProductDetailPageComponent.prototype.experimentalColor = function (row, column) {
        if (row.status === 'Finalizada') {
            return 'danger';
        }
        else if (row.status.indexOf('Final.') > -1) {
            return 'warning';
        }
        else {
            return 'success';
        }
    };
    ProductDetailPageComponent.prototype.extras = function (value, row) {
        console.log(value, row, 'campaign clicked');
    };
    ProductDetailPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'product-detail-page',
            template: __webpack_require__("../../../../../src/app/pages/product-detail/product-detail-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/product-detail/product-detail-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailPageComponent);
    return ProductDetailPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = /** @class */ (function () {
    function AuthGuardLogin(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Prevents login from being accessed when logged in
     */
    AuthGuardLogin.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuardLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardLogin);
    return AuthGuardLogin;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Prevents access without login
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem('access_token');
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requests_service__ = __webpack_require__("../../../../../src/app/services/http-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(requests, router, http) {
        this.requests = requests;
        this.router = router;
        this.http = http;
        this.redirectUrl = '';
    }
    AuthService.prototype.login = function (username, password) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpParams */]()
            .set('grant_type', 'password')
            .set('password', password)
            .set('username', username)
            .set('subdomain', this.requests.subdomain)
            .set('connectorId', this.requests.connectorId);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post(this.requests.rootUrl + 'oauth2/token', body.toString(), httpOptions);
    };
    AuthService.prototype.setSession = function (authResult, user) {
        localStorage.setItem('access_token', authResult['access_token']);
        localStorage.setItem('user', user);
        var expiresAt = __WEBPACK_IMPORTED_MODULE_3_moment__().add(authResult['expires_in'], 'second');
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    AuthService.prototype.isLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_3_moment__().isBefore(this.getExpiration());
    };
    AuthService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    AuthService.prototype.getExpiration = function () {
        var expiration = localStorage.getItem('expires_at');
        var expiresAt = JSON.parse(expiration);
        return __WEBPACK_IMPORTED_MODULE_3_moment__(expiresAt);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_requests_service__["a" /* HttpRequestsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/carol-querys/main-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_requests_service__ = __webpack_require__("../../../../../src/app/services/http-requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageService = /** @class */ (function () {
    function MainPageService(request) {
        this.request = request;
    }
    MainPageService.prototype.runNamedQuery = function (namedQuery, params) {
        var url = 'queries/named/' + namedQuery + '?indexType=MASTER&pageSize=0&sortOrder=ASC&scrollable=false';
        return this.request.post(url, params);
    };
    MainPageService.prototype.getStringDate = function (date) {
        return (date instanceof Date) ? date.toISOString().substring(0, 10) : date;
    };
    MainPageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_requests_service__["a" /* HttpRequestsService */]])
    ], MainPageService);
    return MainPageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/carol-querys/toolbar-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_requests_service__ = __webpack_require__("../../../../../src/app/services/http-requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarSearchService = /** @class */ (function () {
    function ToolbarSearchService(request) {
        this.request = request;
    }
    ToolbarSearchService.prototype.getCampaigns = function (value) {
        var url = 'queries/named/findCampaigns?indexType=MASTER&pageSize=0&sortOrder=ASC&scrollable=false';
        /**
         * camp_name - Campaign Name, string (optional)
         * camp_id - Campaign ID, string (optional)
         * count - number of matches for the query , (optional)
         */
        var params = {
            count: '50',
            camp_name: value,
        };
        return this.request.post(url, params);
    };
    ToolbarSearchService.prototype.getCampaignByProduct = function (value) {
        var url = 'queries/named/findCampaignsByProduct?indexType=MASTER&pageSize=0&sortOrder=ASC&scrollable=false';
        /**
         * prod_name - Product Name, string (optional)
         * prod_id - Product ID, string (optional)
         * count - number of matches for the query, , (optional)
         */
        var params = {
            count: '50',
            prod_name: value,
        };
        return this.request.post(url, params);
    };
    ToolbarSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_requests_service__["a" /* HttpRequestsService */]])
    ], ToolbarSearchService);
    return ToolbarSearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/http-requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequestsService = /** @class */ (function () {
    function HttpRequestsService(http) {
        this.http = http;
        this.subdomain = undefined;
        this.rootUrl = undefined;
        this.connectorId = '0a0829172fc2433c9aa26460c31b78f0';
        var url = window.location.href;
        var domain = url.match("/([a-z0-9|-]+\.)*[a-z0-9|-]+\.[a-z]+")[0];
        var index = domain.indexOf('.carol.ai');
        if (index > -1) {
            domain = domain.substring(1, index);
            console.info("from url: " + domain);
        }
        else {
            domain = "gd";
            console.info("fixed in the code: " + domain);
        }
        this.subdomain = domain;
        this.rootUrl = 'https://' + domain + '.carol.ai/api/v2/';
    }
    HttpRequestsService.prototype.post = function (url, params) {
        var body = JSON.stringify(params);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            })
        };
        return this.http.post(this.rootUrl + url, body.toString(), httpOptions);
    };
    HttpRequestsService.prototype.get = function (params) {
    };
    HttpRequestsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HttpRequestsService);
    return HttpRequestsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_literalsEN__ = __webpack_require__("../../../../../src/app/i18n/literalsEN.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_literalsPT__ = __webpack_require__("../../../../../src/app/i18n/literalsPT.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var I18nService = /** @class */ (function () {
    function I18nService() {
        this.currentLanguage = (localStorage.getItem('language')) ?
            localStorage.getItem('language') :
            navigator.language.substring(0, 2).toUpperCase();
        this.setLiterals(this.currentLanguage);
    }
    I18nService.prototype.ngOnInit = function () {
    };
    I18nService.prototype.getLanguage = function () {
        return this.currentLanguage;
    };
    I18nService.prototype.setLanguage = function (language) {
        this.setLiterals(language);
        localStorage.setItem('language', language);
        location.reload();
    };
    I18nService.prototype.setLiterals = function (language) {
        this.literals = (language === 'PT') ? __WEBPACK_IMPORTED_MODULE_2__i18n_literalsPT__["a" /* PT */] : __WEBPACK_IMPORTED_MODULE_1__i18n_literalsEN__["a" /* EN */];
    };
    I18nService.prototype.getLiterals = function () {
        return this.literals;
    };
    I18nService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], I18nService);
    return I18nService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
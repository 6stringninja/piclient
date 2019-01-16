"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiBase_1 = require("../ApiBase");
var clientConfig_1 = require("../../clientConfig");
var ApiGetPiMonitorInput = /** @class */ (function () {
    function ApiGetPiMonitorInput(_) {
        if (_ === void 0) { _ = 1; }
        this._ = _;
        _ = Math.floor(Math.random() * 2000);
    }
    return ApiGetPiMonitorInput;
}());
exports.ApiGetPiMonitorInput = ApiGetPiMonitorInput;
var ApiGetPiMonitor = /** @class */ (function (_super) {
    __extends(ApiGetPiMonitor, _super);
    function ApiGetPiMonitor() {
        return _super.call(this, clientConfig_1.clientConfig.rpiMonitorUrl) || this;
    }
    ApiGetPiMonitor.prototype.mapResult = function (resp, body) {
        return body;
    };
    ApiGetPiMonitor.prototype.mapQueryString = function (input) {
        return input;
    };
    return ApiGetPiMonitor;
}(ApiBase_1.ApiGetClient));
exports.ApiGetPiMonitor = ApiGetPiMonitor;

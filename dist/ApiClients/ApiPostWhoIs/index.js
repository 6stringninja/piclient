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
exports.__esModule = true;
var clientConfig_1 = require("../../Client/clientConfig");
var ApiPostClient_1 = require("../ApiPostClient");
var ApiPostWhoInput = /** @class */ (function () {
    function ApiPostWhoInput(piMonitor) {
        this.piMonitor = piMonitor;
    }
    return ApiPostWhoInput;
}());
exports.ApiPostWhoInput = ApiPostWhoInput;
var ApiPostWhoIsClient = /** @class */ (function (_super) {
    __extends(ApiPostWhoIsClient, _super);
    function ApiPostWhoIsClient() {
        return _super.call(this, clientConfig_1.clientConfig.apiServerWhoUrl) || this;
    }
    ApiPostWhoIsClient.prototype.mapResult = function (resp, body) {
        console.log(resp.body);
        console.log("api post res");
        return { success: true };
    };
    return ApiPostWhoIsClient;
}(ApiPostClient_1.ApiPostClient));
exports.ApiPostWhoIsClient = ApiPostWhoIsClient;
//# sourceMappingURL=index.js.map
"use strict";
exports.__esModule = true;
var request = require('request');
var rx_1 = require("rx");
var ApiClientErrorMessage_1 = require("./ApiClientErrorMessage");
var ApiGetClient = /** @class */ (function () {
    function ApiGetClient(url, body, errorCode, ApiClientErrorMessage) {
        if (url === void 0) { url = ''; }
        if (body === void 0) { body = null; }
        if (errorCode === void 0) { errorCode = 'E0'; }
        if (ApiClientErrorMessage === void 0) { ApiClientErrorMessage = 'Post Error Occured'; }
        var _this = this;
        this.url = url;
        this.body = body;
        this.errorCode = errorCode;
        this.ApiClientErrorMessage = ApiClientErrorMessage;
        this.result$ = rx_1.Observable.create(function (obs) { return (_this.observer = obs); });
        this.error$ = rx_1.Observable.create(function (obse) { return (_this.observererror = obse); });
    }
    ApiGetClient.prototype.get = function (bdy) {
        var _this = this;
        if (bdy === void 0) { bdy = this.body; }
        // console.log(bdy);
        request.get({ url: this.url, qs: this.mapQueryString(bdy), json: true }, function (error, res) {
            var body = res.body;
            if (error) {
                console.error(error);
                if (_this.observererror) {
                    _this.observererror.onNext(new ApiClientErrorMessage_1.ApiClientErrorMessage(_this.errorCode, _this.ApiClientErrorMessage, error));
                }
                return;
            }
            if (_this.observer) {
                _this.observer.onNext(_this.mapResult(res, body));
            }
        });
    };
    return ApiGetClient;
}());
exports.ApiGetClient = ApiGetClient;
//# sourceMappingURL=ApiBase.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('request');
var rx_1 = require("rx");
var ApiPostClient = /** @class */ (function () {
    function ApiPostClient(url, body, errorCode, ApiClientErrorMessage) {
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
    ApiPostClient.prototype.post = function (bdy) {
        if (bdy === void 0) { bdy = this.body; }
        //    console.log(bdy);
        request.post({
            url: this.url,
            body: bdy,
            json: true
        }, function (error, response, body) {
            console.log(body);
        });
        /*  request.post(this.url, {
              json: bdy as any,
          }, (error, res, body) => {
              console.log(error);
              console.log(res);
              console.log(body);
              if (error) {
                  console.error(error);
                  if (this.observererror) {
                      this.observererror.onNext(new ApiClientErrorMessage(this.errorCode, this.ApiClientErrorMessage, error));
                  }
                  return;
              }
              if (this.observer) {
                  this.observer.onNext(this.mapResult(res, body));
              }
              //  console.log(`statusCode: ${res.statusCode}`);
              console.log(body);
              console.log("success");
          });
          */
    };
    return ApiPostClient;
}());
exports.ApiPostClient = ApiPostClient;

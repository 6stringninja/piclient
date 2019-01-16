"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClientErrorMessage = /** @class */ (function () {
    function ApiClientErrorMessage(id, message, err) {
        if (id === void 0) { id = ''; }
        if (message === void 0) { message = ''; }
        if (err === void 0) { err = null; }
        this.id = id;
        this.message = message;
        this.err = err;
    }
    return ApiClientErrorMessage;
}());
exports.ApiClientErrorMessage = ApiClientErrorMessage;

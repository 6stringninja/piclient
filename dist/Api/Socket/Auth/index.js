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
var index_1 = require("../index");
var serverConfig_1 = require("../../../Server/serverConfig");
var AuthSocketInput = /** @class */ (function (_super) {
    __extends(AuthSocketInput, _super);
    function AuthSocketInput(localhash, data) {
        var _this = _super.call(this, 'auth') || this;
        _this.localhash = localhash;
        _this.data = data;
        return _this;
    }
    return AuthSocketInput;
}(index_1.SocketMessageInput));
exports.AuthSocketInput = AuthSocketInput;
var AuthSocketResult = /** @class */ (function (_super) {
    __extends(AuthSocketResult, _super);
    function AuthSocketResult(hash, socketsucces) {
        if (hash === void 0) { hash = ''; }
        if (socketsucces === void 0) { socketsucces = index_1.SocketSuccess.failed; }
        var _this = _super.call(this) || this;
        _this.hash = hash;
        return _this;
    }
    return AuthSocketResult;
}(index_1.SocketMessageResult));
exports.AuthSocketResult = AuthSocketResult;
var AuthSocketHandler = /** @class */ (function (_super) {
    __extends(AuthSocketHandler, _super);
    function AuthSocketHandler() {
        return _super.call(this, 'auth') || this;
    }
    AuthSocketHandler.prototype.process = function (input) {
        var result = new AuthSocketResult();
        if (input.localhash === serverConfig_1.serverConfig.serverHash) {
            result.success = index_1.SocketSuccess.success;
            result.hash = input.localhash;
        }
        else {
            result.success = index_1.SocketSuccess.failed;
        }
        return result;
    };
    return AuthSocketHandler;
}(index_1.SocketMessageHandler));
exports.AuthSocketHandler = AuthSocketHandler;
//# sourceMappingURL=index.js.map
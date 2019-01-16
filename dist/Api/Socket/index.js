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
var SocketSuccess;
(function (SocketSuccess) {
    SocketSuccess[SocketSuccess["failed"] = 0] = "failed";
    SocketSuccess[SocketSuccess["success"] = 1] = "success";
    SocketSuccess[SocketSuccess["unauth"] = 404] = "unauth";
    SocketSuccess[SocketSuccess["other"] = 999] = "other";
})(SocketSuccess = exports.SocketSuccess || (exports.SocketSuccess = {}));
var SocketMessage = /** @class */ (function () {
    function SocketMessage() {
        this.date = new Date;
    }
    return SocketMessage;
}());
exports.SocketMessage = SocketMessage;
var SocketMessageResult = /** @class */ (function (_super) {
    __extends(SocketMessageResult, _super);
    function SocketMessageResult(success) {
        if (success === void 0) { success = SocketSuccess.success; }
        var _this = _super.call(this) || this;
        _this.success = success;
        return _this;
    }
    return SocketMessageResult;
}(SocketMessage));
exports.SocketMessageResult = SocketMessageResult;
var SocketMessageInput = /** @class */ (function (_super) {
    __extends(SocketMessageInput, _super);
    function SocketMessageInput(channel) {
        var _this = _super.call(this) || this;
        _this.channel = channel;
        return _this;
    }
    return SocketMessageInput;
}(SocketMessage));
exports.SocketMessageInput = SocketMessageInput;
var SocketMessageHandler = /** @class */ (function () {
    function SocketMessageHandler(channel, secured) {
        this.channel = channel;
        this.secured = secured;
    }
    SocketMessageHandler.prototype.execute = function (input, hash) {
        if (!this.secured || (this.secured && hash === input.hash)) {
            return this.process(input);
        }
        else {
            return { success: SocketSuccess.failed };
        }
    };
    return SocketMessageHandler;
}());
exports.SocketMessageHandler = SocketMessageHandler;
//# sourceMappingURL=index.js.map
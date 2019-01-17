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
var PingPongSocketInput = /** @class */ (function (_super) {
    __extends(PingPongSocketInput, _super);
    function PingPongSocketInput(hash, data) {
        var _this = _super.call(this, 'pingpong') || this;
        _this.hash = hash;
        _this.data = data;
        _this.sentat = new Date().getTime();
        return _this;
    }
    return PingPongSocketInput;
}(index_1.SocketMessageInput));
exports.PingPongSocketInput = PingPongSocketInput;
var PingPongSocketResult = /** @class */ (function (_super) {
    __extends(PingPongSocketResult, _super);
    function PingPongSocketResult(hash, socketsucces) {
        if (hash === void 0) { hash = ''; }
        if (socketsucces === void 0) { socketsucces = index_1.SocketSuccess.unauth; }
        var _this = _super.call(this) || this;
        _this.hash = hash;
        _this.recat = new Date().getTime();
        _this.trip = 0;
        return _this;
    }
    return PingPongSocketResult;
}(index_1.SocketMessageResult));
exports.PingPongSocketResult = PingPongSocketResult;
var PingPongSocketHandler = /** @class */ (function (_super) {
    __extends(PingPongSocketHandler, _super);
    function PingPongSocketHandler() {
        return _super.call(this, 'pingpong', true) || this;
    }
    PingPongSocketHandler.prototype.process = function (input) {
        var ret = new PingPongSocketResult('pingpong', index_1.SocketSuccess.success);
        ret.trip = ret.recat - input.sentat;
        ret.recat = input.sentat;
        return ret;
    };
    return PingPongSocketHandler;
}(index_1.SocketMessageHandler));
exports.PingPongSocketHandler = PingPongSocketHandler;
//# sourceMappingURL=index.js.map
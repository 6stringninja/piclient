"use strict";
exports.__esModule = true;
var Auth_1 = require("./Auth");
var PingPong_1 = require("./PingPong");
var SocketHandlers = /** @class */ (function () {
    function SocketHandlers(socketHandlers) {
        if (socketHandlers === void 0) { socketHandlers = []; }
        this.socketHandlers = socketHandlers;
    }
    SocketHandlers.prototype.get = function (channel, input) {
        var hndlr = this.socketHandlers.filter(function (f) { return f.channel === channel; });
        if (hndlr.length > 0) {
            return hndlr[0].execute(input);
        }
        else {
            throw new Error('handler not found');
        }
    };
    return SocketHandlers;
}());
exports.SocketHandlers = SocketHandlers;
exports.socketHandlers = new SocketHandlers([new Auth_1.AuthSocketHandler(),
    new PingPong_1.PingPongSocketHandler()]);
//# sourceMappingURL=exports.js.map
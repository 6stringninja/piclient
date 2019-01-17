"use strict";
exports.__esModule = true;
var Auth_1 = require("./Auth");
var PingPong_1 = require("./PingPong");
var serverConfig_1 = require("../../Server/serverConfig");
var SocketHandlers = /** @class */ (function () {
    function SocketHandlers(socketHandlers) {
        if (socketHandlers === void 0) { socketHandlers = []; }
        this.socketHandlers = socketHandlers;
    }
    SocketHandlers.prototype.getHandler = function (channel) {
        var hndlr = this.socketHandlers.filter(function (f) { return f.channel === channel; });
        if (hndlr.length > 0) {
            console.log("got to here");
            return hndlr[0];
        }
        else {
            throw new Error('handler not found');
        }
    };
    SocketHandlers.prototype.get = function (channel, input) {
        var hndlr = this.socketHandlers.filter(function (f) { return f.channel === channel; });
        if (hndlr.length > 0) {
            console.log("got to here");
            return hndlr[0].execute(input, serverConfig_1.serverConfig.serverHash);
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
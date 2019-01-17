"use strict";
exports.__esModule = true;
var io = require("socket.io-client");
var Auth_1 = require("../Api/Socket/Auth");
var PingPong_1 = require("../Api/Socket/PingPong");
var clientConfig_1 = require("./clientConfig");
var ss = io.connect(clientConfig_1.clientConfig.wsSeverUrl);
var hndlr = new Auth_1.AuthSocketHandler();
var pingponghndlr = new PingPong_1.PingPongSocketHandler();
var hash = '';
function keepSending() {
    if (ss.connected) {
        if (hash === '') {
            ss.emit(hndlr.channel, new Auth_1.AuthSocketInput(clientConfig_1.clientConfig.clientHash, ''));
        }
        else {
            ss.emit(pingponghndlr.channel, new PingPong_1.PingPongSocketInput(hash, 'blah'));
        }
    }
    setTimeout(function () {
        keepSending();
    }, 1000);
}
ss.on("connect", function () {
    console.log("connected");
    ss.on(hndlr.channel, function (data) {
        hash = data.hash;
        console.log(data);
    });
    ss.on(pingponghndlr.channel, function (data) {
        var res = data;
        res.trip = new Date().getTime() - res.recat;
        console.log(data);
    });
    ss.on('disconnect', function () { });
    keepSending();
});
//# sourceMappingURL=Client.js.map
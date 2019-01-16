"use strict";
exports.__esModule = true;
var Auth_1 = require("../Api/Socket/Auth");
var exports_1 = require("../Api/Socket/exports");
var serverConfig_1 = require("./serverConfig");
var app = require('express')();
var server = require('http').createServer(app);
var ios = require('socket.io')(server);
ios.on('connection', function (socket) {
    console.log("connected " + socket.id);
    var hndlr = new Auth_1.AuthSocketHandler();
    exports_1.socketHandlers.socketHandlers.forEach(function (sh) {
        socket.on(sh.channel, function (data) {
            socket.emit(sh.channel, sh.execute(data, serverConfig_1.serverConfig.serverHash));
            console.log(data);
        });
    });
    socket.on(hndlr.channel, function (data) {
        socket.emit(hndlr.channel, hndlr.execute(data, serverConfig_1.serverConfig.serverHash));
        console.log(data);
    });
});
server.listen(3000);
//# sourceMappingURL=Server.js.map
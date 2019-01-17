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
    var authHndl = exports_1.socketHandlers.getHandler("auth");
    var ppHndl = exports_1.socketHandlers.getHandler("pingpong");
    /*
        socketHandlers.socketHandlers.forEach((sh)=>{
            socket.on(sh.channel, data => {
                console.log({channel:sh.channel, data:data})
                socket.emit(sh.channel, sh.execute(data,serverConfig.serverHash));
                console.log(data);
    
            });
    
        });*/
    socket.on(authHndl.channel, function (data) {
        socket.emit(authHndl.channel, authHndl.execute(data, serverConfig_1.serverConfig.serverHash));
        console.log(data);
    });
    console.log(ppHndl.channel);
    socket.on(ppHndl.channel, function (data) {
        socket.emit(ppHndl.channel, ppHndl.execute(data, serverConfig_1.serverConfig.serverHash));
        // console.log(data);
    });
});
server.listen(3000);
//# sourceMappingURL=Server.js.map
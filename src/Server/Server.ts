import { AuthSocketHandler } from '../Api/Socket/Auth';
import { socketHandlers } from '../Api/Socket/exports';
import { serverConfig } from './serverConfig';

const app = require('express')();
const server = require('http').createServer(app);
const ios = require('socket.io')(server);
 

ios.on('connection', (socket:SocketIO.Socket) => {
    console.log(`connected ${socket.id}`);
    const hndlr = new AuthSocketHandler();
    const authHndl = socketHandlers.getHandler("auth");
    const ppHndl = socketHandlers.getHandler("pingpong");
/*
    socketHandlers.socketHandlers.forEach((sh)=>{
        socket.on(sh.channel, data => {
            console.log({channel:sh.channel, data:data})
            socket.emit(sh.channel, sh.execute(data,serverConfig.serverHash));
            console.log(data);

        });

    });*/
    socket.on(authHndl.channel, data => {
        socket.emit(authHndl.channel, authHndl.execute(data, serverConfig.serverHash));
      console.log(data);
    });
    console.log(ppHndl.channel);
    socket.on(ppHndl.channel, data => {
        socket.emit(ppHndl.channel, ppHndl.execute(data, serverConfig.serverHash));
     // console.log(data);
    });
  
});
server.listen(3000);

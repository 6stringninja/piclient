import { AuthSocketHandler } from '../Api/Socket/Auth';
import { socketHandlers } from '../Api/Socket/exports';
import { serverConfig } from './serverConfig';

const app = require('express')();
const server = require('http').createServer(app);
const ios = require('socket.io')(server);
 

ios.on('connection', (socket:SocketIO.Socket) => {
    console.log(`connected ${socket.id}`);
    const hndlr = new AuthSocketHandler();
    socketHandlers.socketHandlers.forEach((sh)=>{
        socket.on(sh.channel, data => {
            socket.emit(sh.channel, sh.execute(data,serverConfig.serverHash));
            console.log(data);

        });

    });
    socket.on(hndlr.channel, data => {
        socket.emit(hndlr.channel, hndlr.execute(data, serverConfig.serverHash));
        console.log(data);
       
    });
  
});
server.listen(3000);

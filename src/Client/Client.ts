 
import * as io from 'socket.io-client';
 
import { AuthSocketInput, AuthSocketHandler } from '../Api/Socket/Auth';
import { SocketSuccess } from '../Api/Socket';
import { PingPongSocketHandler, PingPongSocketInput } from '../Api/Socket/PingPong';
import { clientConfig } from './clientConfig';
const ss: SocketIOClient.Socket = io.connect(clientConfig.wsSeverUrl);

const hndlr = new AuthSocketHandler();
const pingponghndlr = new PingPongSocketHandler();
let hash = '';
function keepSending(){
    if(ss.connected){
        if( hash ===''){
            ss.emit(hndlr.channel, new AuthSocketInput(clientConfig.clientHash, ''));
        }
       else{
            ss.emit(pingponghndlr.channel, new PingPongSocketInput(hash, 'blah'));
       }
       
    }
    setTimeout(() => {
        keepSending();
    }, 1000);
}
ss.on("connect", ()=>{
    console.log("connected");
 
    ss.on(hndlr.channel, (data: any) => {
        hash = data.hash;
      console.log(data);
    });
    ss.on(pingponghndlr.channel, (data: any) => {
      console.log(data);
    });
    ss.on('disconnect',  () => {});
    keepSending();
})

 
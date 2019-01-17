import { ISocketMessageHandler } from '.';
import { AuthSocketHandler } from './Auth';
import { PingPongSocketHandler } from './PingPong';
import { serverConfig } from '../../Server/serverConfig';

export class SocketHandlers {
  constructor(public socketHandlers: ISocketMessageHandler[] = []) {}
  getHandler(channel:string):ISocketMessageHandler{
      const hndlr = this.socketHandlers.filter(f => f.channel === channel);
      if (hndlr.length > 0) {
          console.log("got to here");
          return hndlr[0];
      } else {
          throw new Error('handler not found');
      }
  }
  get(channel: string, input: any): any {
    const hndlr = this.socketHandlers.filter(f => f.channel === channel);
    if (hndlr.length > 0) {
        console.log("got to here");
      return hndlr[0].execute(input,serverConfig.serverHash);
    } else {
      throw new Error('handler not found');
    }
  }
}

export const socketHandlers = new SocketHandlers([new AuthSocketHandler(),
new PingPongSocketHandler()]);

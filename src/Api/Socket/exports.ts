import { ISocketMessageHandler } from '.';
import { AuthSocketHandler } from './Auth';
import { PingPongSocketHandler } from './PingPong';

export class SocketHandlers {
  constructor(public socketHandlers: ISocketMessageHandler[] = []) {}
  get(channel: string, input: any): any {
    const hndlr = this.socketHandlers.filter(f => f.channel === channel);
    if (hndlr.length > 0) {
      return hndlr[0].execute(input);
    } else {
      throw new Error('handler not found');
    }
  }
}

export const socketHandlers = new SocketHandlers([new AuthSocketHandler(),
new PingPongSocketHandler()]);

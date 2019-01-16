import {
  SocketMessageInput,
  SocketMessageResult,
  SocketSuccess,
  SocketMessageHandler
} from '../index';

export class PingPongSocketInput extends SocketMessageInput {
  constructor(public localhash: string, public data: any) {
    super('pingpong');
  }
}
export class PingPongSocketResult extends SocketMessageResult {
  constructor(public hash = '', socketsucces = SocketSuccess.unauth) {
    super();
  }
}

export class PingPongSocketHandler extends SocketMessageHandler<
  PingPongSocketInput,
  PingPongSocketResult
> {
  protected process(input: PingPongSocketInput): PingPongSocketResult {
    return new PingPongSocketResult('pingpong', SocketSuccess.success);
  }
  constructor() {
    super('pingpong', true);
  }
}

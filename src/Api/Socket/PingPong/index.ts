import {
  SocketMessageInput,
  SocketMessageResult,
  SocketSuccess,
  SocketMessageHandler
} from '../index';

export class PingPongSocketInput extends SocketMessageInput {
  sentat = new Date().getTime();
  constructor(public hash: string, public data: any) {
    super('pingpong');
  }
}
export class PingPongSocketResult extends SocketMessageResult {
  recat = new Date().getTime();
  trip =0;
  constructor(public hash = '', socketsucces = SocketSuccess.unauth) {
    super();
  }
}

export class PingPongSocketHandler extends SocketMessageHandler<
  PingPongSocketInput,
  PingPongSocketResult
> {
  protected process(input: PingPongSocketInput): PingPongSocketResult {
    const ret = new PingPongSocketResult('pingpong', SocketSuccess.success);
    ret.trip = ret.recat - input.sentat;
    ret.recat = input.sentat;
    return ret;
  }
  constructor() {
    super('pingpong', true);
  }
}

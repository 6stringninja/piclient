import {
  SocketMessageInput,
  SocketMessageResult,
  SocketSuccess,
  SocketMessageHandler
} from '../index';
import { serverConfig } from '../../../Server/serverConfig';

export class AuthSocketInput extends SocketMessageInput {
  constructor(public localhash: string, public data: any) {
    super('auth');
  }
}
export class AuthSocketResult extends SocketMessageResult {
  constructor(public hash = '', socketsucces = SocketSuccess.failed) {
    super();
  }
}

export class AuthSocketHandler extends SocketMessageHandler<
  AuthSocketInput,
  AuthSocketResult
> {
  protected process(input: AuthSocketInput): AuthSocketResult {
    const result =  new AuthSocketResult(
     
    );
    if( input.localhash === serverConfig.serverHash){
        result.success = SocketSuccess.success;
        result.hash = input.localhash;
    }
    else{
        result.success = SocketSuccess.failed;
    }
    return result;
  }
  constructor() {
    super('auth');
  }
}

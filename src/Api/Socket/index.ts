export enum SocketSuccess{
    failed = 0,
    success=1,
    unauth=404,
    other=999
}
export interface ISocketMessage  {
  id: string;
 hash:string;
  date: Date;
}
 
export interface ISocketMessageResult extends ISocketMessage { 
    success: SocketSuccess;
  
}
export class SocketMessage implements ISocketMessage  {
    hash: string;
  id: string;
  date = new Date;
   
}
export class SocketMessageResult  extends SocketMessage
  implements ISocketMessageResult  {
    
 
    constructor(  public success = SocketSuccess.success ) {
        super();
    }
}
export interface ISocketMessageInput  extends ISocketMessage {
  channel: string;
}
export class SocketMessageInput  extends SocketMessage
  implements ISocketMessageInput  {
  constructor(public channel: string ) {
    super();
  }
}
export interface   ISocketMessageHandler{
    channel: string;
    execute(input: any,hash:string): any;
}
export abstract class SocketMessageHandler<
  TInput extends ISocketMessage,
    TResult extends ISocketMessageResult
    > implements ISocketMessageHandler{
  constructor(public channel: string, public secured:boolean) {}

  protected abstract process(input: TInput):  TResult    ;
    execute(input: TInput, hash: string): ISocketMessageResult  {
        if (!this.secured || (this.secured && hash===input.hash) )
   {  return   this.process(input);}
   else{
       return {success: SocketSuccess.failed} as ISocketMessageResult
   }
  }
}

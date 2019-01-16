

const request = require('request');
import { Observable } from 'rx';
import { ApiClientErrorMessage } from './ApiClientErrorMessage';
export abstract class ApiGetClient<TInput, TResult> {
    public result$: Observable<TResult>;
    public error$: Observable<ApiClientErrorMessage>;
    private observererror: Rx.Observer<ApiClientErrorMessage>;
    private observer: Rx.Observer<TResult>;
    constructor(public url = '', public body: TInput = null, public errorCode = 'E0', public ApiClientErrorMessage = 'Post Error Occured') {
        this.result$ = Observable.create<TResult>((obs) => (this.observer = obs));
        this.error$ = Observable.create<ApiClientErrorMessage>((obse) => (this.observererror = obse));
    }
    public abstract mapResult(resp: any, body: any): TResult;
    public abstract mapQueryString( input: TInput): any;

    public get(bdy: TInput = this.body): void {
        // console.log(bdy);
        request.get({url:this.url,  qs:this.mapQueryString(bdy), json:true},  (error: any, res: { body: any; }) =>  {
            const body = res.body;
            if (error) {
                console.error(error);
                if (this.observererror) {
                    this.observererror.onNext(new ApiClientErrorMessage(this.errorCode, this.ApiClientErrorMessage, error));
                }
                return;
            }
            if (this.observer) {
                this.observer.onNext(this.mapResult(res, body));
            }

        })

     
    }
}

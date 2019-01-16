const request = require('request');
import { Observable } from 'rx';
import { ApiClientErrorMessage } from './ApiClientErrorMessage';
export abstract class ApiPostClient<TInput, TResult> {
    public result$: Observable<TResult>;
    public error$: Observable<ApiClientErrorMessage>;
    private observererror: Rx.Observer<ApiClientErrorMessage>;
    private observer: Rx.Observer<TResult>;
    constructor(public url = '', public body: TInput = null, public errorCode = 'E0', public ApiClientErrorMessage = 'Post Error Occured') {
        this.result$ = Observable.create<TResult>((obs) => (this.observer = obs));
        this.error$ = Observable.create<ApiClientErrorMessage>((obse) => (this.observererror = obse));
    }
    public abstract mapResult(resp: any, body: any): TResult;
    public post(bdy: TInput = this.body): void {
         console.log(bdy);
        request.post(this.url, {
            json: bdy as any,
        }, (error, res, body) => {
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
            //  console.log(`statusCode: ${res.statusCode}`);
            console.log(body);
        });
    }
}

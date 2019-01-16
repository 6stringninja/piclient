import { ApiGetPiMonitor, ApiGetPiMonitorInput, ApiGetPiMonitorResult } from "./ApiClients/ApiGetPiMonitor/index";
import { ApiPostClient } from "./ApiClients/ApiPostClient";
import { ApiPostWhoIsClient, ApiPostWhoInput } from "./ApiClients/ApiPostWhoIs";

const clientTest = new ApiGetPiMonitor();
const clientPost = new ApiPostWhoIsClient();
let lastResult:ApiGetPiMonitorResult;
clientTest.result$.subscribe( r => { lastResult=r;});
clientTest.error$.subscribe( r => console.warn(r));
clientPost.result$.subscribe(r=> console.log(r));
clientPost.error$.subscribe(r=> console.warn(r));
function test(){
    if(lastResult){
        clientPost.post(new ApiPostWhoInput(lastResult));
    }
    clientTest.get(new ApiGetPiMonitorInput());
    setTimeout(() => {
        test();
    }, 2000);
}
test();
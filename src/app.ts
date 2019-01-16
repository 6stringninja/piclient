import { ApiGetPiMonitor, ApiGetPiMonitorInput } from "./ApiClients/ApiGetPiMonitor/index";

const clientTest = new ApiGetPiMonitor();
clientTest.result$.subscribe( r => console.log(r));
clientTest.error$.subscribe( r => console.warn(r));
function test(){
    clientTest.get(new ApiGetPiMonitorInput());
    setTimeout(() => {
        test();
    }, 2000);
}
test();
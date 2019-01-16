"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./ApiClients/ApiGetPiMonitor/index");
var ApiPostWhoIs_1 = require("./ApiClients/ApiPostWhoIs");
var clientTest = new index_1.ApiGetPiMonitor();
var clientPost = new ApiPostWhoIs_1.ApiPostWhoIsClient();
var lastResult;
clientTest.result$.subscribe(function (r) { console.log(r); lastResult = r; });
clientTest.error$.subscribe(function (r) { return console.warn(r); });
clientPost.result$.subscribe(function (r) { return console.log(r); });
clientPost.error$.subscribe(function (r) { return console.warn(r); });
function test() {
    if (lastResult) {
        clientPost.post(new ApiPostWhoIs_1.ApiPostWhoInput(lastResult));
    }
    clientTest.get(new index_1.ApiGetPiMonitorInput());
    setTimeout(function () {
        test();
    }, 2000);
}
test();

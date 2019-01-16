"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./ApiClients/ApiGetPiMonitor/index");
var clientTest = new index_1.ApiGetPiMonitor();
clientTest.result$.subscribe(function (r) { return console.log(r); });
clientTest.error$.subscribe(function (r) { return console.warn(r); });
function test() {
    clientTest.get(new index_1.ApiGetPiMonitorInput());
    setTimeout(function () {
        test();
    }, 2000);
}
test();

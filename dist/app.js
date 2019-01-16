"use strict";
exports.__esModule = true;
var index_1 = require("./ApiClients/ApiGetPiMonitor/index");
var index_2 = require("./ApiClients/ApiPostWhoIs/index");
var clientTest = new index_1.ApiGetPiMonitor();
var clientPost = new index_2.ApiPostWhoIsClient();
var lastResult;
clientTest.result$.subscribe(function (r) { lastResult = r; });
clientTest.error$.subscribe(function (r) { return console.warn(r); });
clientPost.result$.subscribe(function (r) { return console.log(r); });
clientPost.error$.subscribe(function (r) { return console.warn(r); });
function test() {
    if (lastResult) {
        clientPost.post(new index_2.ApiPostWhoInput(lastResult));
    }
    clientTest.get(new index_1.ApiGetPiMonitorInput());
    setTimeout(function () {
        test();
    }, 2000);
}
test();
//# sourceMappingURL=app.js.map
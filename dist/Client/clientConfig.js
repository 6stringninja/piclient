"use strict";
exports.__esModule = true;
var ClientConfig = /** @class */ (function () {
    function ClientConfig() {
        this.rpiMonitorUrl = 'http://localhost:8888/dynamic.json'; //,'http://192.168.1.22:8888/dynamic.json'; // ';
        this.apiServerWhoUrl = 'http://192.168.1.25:3000/who';
        this.wsSeverUrl = 'http://localhost:3000/';
        this.clientHash = '12345';
    }
    return ClientConfig;
}());
exports.ClientConfig = ClientConfig;
exports.clientConfig = new ClientConfig();
//# sourceMappingURL=clientConfig.js.map
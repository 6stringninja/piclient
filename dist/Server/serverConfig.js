"use strict";
exports.__esModule = true;
var ServerConfig = /** @class */ (function () {
    function ServerConfig() {
        this.rpiMonitorUrl = 'http://localhost:8888/dynamic.json'; //,'http://192.168.1.22:8888/dynamic.json'; // ';
        this.apiServerWhoUrl = 'http://192.168.1.25:3000/who';
        this.wsSeverUrl = 'http://localhost:3000/';
        this.serverHash = '12345';
    }
    return ServerConfig;
}());
exports.ServerConfig = ServerConfig;
exports.serverConfig = new ServerConfig();
//# sourceMappingURL=serverConfig.js.map
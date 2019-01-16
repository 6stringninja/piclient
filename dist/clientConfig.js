"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfig = /** @class */ (function () {
    function ClientConfig() {
        this.rpiMonitorUrl = 'http://192.168.1.22:8888/dynamic.json'; // 'http://localhost:8888/dynamic.json';
        this.apiServerWhoUrl = 'http://192.168.1.25:3000/who';
    }
    return ClientConfig;
}());
exports.ClientConfig = ClientConfig;
exports.clientConfig = new ClientConfig();

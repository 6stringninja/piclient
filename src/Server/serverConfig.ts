export class ServerConfig {
    rpiMonitorUrl = 'http://localhost:8888/dynamic.json'; //,'http://192.168.1.22:8888/dynamic.json'; // ';
    apiServerWhoUrl = 'http://192.168.1.25:3000/who';
    wsSeverUrl = 'http://localhost:3000/';
    serverHash = '12345';

}
export const serverConfig = new ServerConfig();
export class ClientConfig{
    rpiMonitorUrl = 'http://192.168.1.22:8888/dynamic.json'; // 'http://localhost:8888/dynamic.json';
    apiServerWhoUrl = 'http://192.168.1.25:3000/who';
}
export const clientConfig = new ClientConfig();
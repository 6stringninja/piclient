import { ApiGetClient } from "../ApiBase";
import { clientConfig } from "../../Client/clientConfig";
export interface ApiGetPiMonitorResult {
    coolingstate: string;
    cpu_frequency: string;
    upgrade: string;
    memory_free: number;
    uptime: string;
    scaling_governor: string;
    memory_available: number;
    soctemp: string;
    packages: string;
    load15: string;
    localtime?: (number)[] | null;
    load1: string;
    load5: string;
    cpu_count: string;
    sdcard_root_used: number;
  }
  
export class ApiGetPiMonitorInput{
    constructor(public _ = 1)
    {
        _ = Math.floor(Math.random() * 2000);
    }
}
export class ApiGetPiMonitor extends ApiGetClient<ApiGetPiMonitorInput,ApiGetPiMonitorResult>{
   
    constructor() {
        super(clientConfig.rpiMonitorUrl);
        
    }
    public mapResult(resp: any, body: any): ApiGetPiMonitorResult {
        return body as ApiGetPiMonitorResult;
    }    
    public mapQueryString(input: ApiGetPiMonitorInput) {
        return input;
    }


}
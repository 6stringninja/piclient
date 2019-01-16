import { ApiGetClient } from "../ApiBase";
import { clientConfig } from "../../clientConfig";
import { ApiGetPiMonitorResult } from "../ApiGetPiMonitor";
import { ApiPostClient } from "../ApiPostClient";
export interface ApiPostWhoResult {
   success :boolean;
  }
  
export class ApiPostWhoInput{
    constructor(public  piMonitor: ApiGetPiMonitorResult)
    {
       
    }
}
export class ApiPostWhoIsClient extends ApiPostClient<ApiPostWhoInput,ApiPostWhoResult>{
    public mapResult(resp: any, body: any): ApiPostWhoResult {
        return {success:true} as ApiPostWhoResult;
    }
  
   
    constructor() {
        super(clientConfig.apiServerWhoUrl);
        
    }
  


}
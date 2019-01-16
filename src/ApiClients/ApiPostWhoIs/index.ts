import { ApiGetClient } from "../ApiBase";
import { clientConfig } from "../../Client/clientConfig";
 
import { ApiPostClient } from "../ApiPostClient";
import { ApiGetPiMonitorResult } from '../ApiGetPiMonitor/index';
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
        console.log(resp.body);
        console.log("api post res");
        return {success:true} as ApiPostWhoResult;
    }
  
   
    constructor() {
        super(clientConfig.apiServerWhoUrl);
        
    }
  


}
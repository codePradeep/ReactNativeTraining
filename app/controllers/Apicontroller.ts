
import { sendGetRequest } from "../network/Network"

const ApiTesting = async(url:string)=>{
    
    let Result = await sendGetRequest(url);
    return  Result;
}
 export default ApiTesting
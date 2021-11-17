
import ApiCallDemo from "../views/ApiCallDemo";

import React, { useEffect } from "react";
import  ApiTesting from '../controllers/Apicontroller'
import { IApiResponse } from "../controllers/apiResponses/IAPIResponse";
import { RootObject } from "../controllers/apiResponses/ApiResponse";

function fetchData(props: object) {
    const fetchTestData = async () => {
        let getTestData:IApiResponse<RootObject> = await ApiTesting('https://gorest.co.in/public/v1/users');
        console.log('API Call', getTestData);
    }
    useEffect(() => {
        fetchTestData();
    }, [])
 

    return(
        <ApiCallDemo />
    )
}
export default fetchData;
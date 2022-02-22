import React from "react";
import { dummyData } from "../config";


import Homepage from "../views/Home/Homepage";

interface Homemodelprops {
    navigation: any


}

const Homemodel =(props:Homemodelprops)=>{
    const {navigation} = props 

    return(
        <Homepage  
        {...{navigation,
            courselist1:dummyData.courses_list_1,
            category:dummyData.categories,
            courselist2:dummyData.courses_list_2
        }} />
    )
}
export default Homemodel;
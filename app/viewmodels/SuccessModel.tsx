import React from "react";
import Success from "../views/Success";
interface SuccessModelprops{
    navigation:any
}
const SuccessModel =(props:SuccessModelprops)=>{
    const {navigation}=props
    return(
        <Success navigation={navigation} />
    )
}
export default SuccessModel;
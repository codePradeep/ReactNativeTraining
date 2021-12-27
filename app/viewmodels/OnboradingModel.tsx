import React from "react";
import Onborading from "../views/Onboarding";
interface loginmodelprops{
    navigation:any
}
const OnboradingModel =(props:loginmodelprops)=>{
    const {navigation}=props
    return(
        <Onborading navigation={navigation} />
    )
}
export default OnboradingModel;
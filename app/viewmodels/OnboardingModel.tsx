import React,{useState} from "react";

import OnBoarding from "../views/Onboardeing";
interface Onboradingprops{
    navigation:any
}
const OnboardingModel =(props:Onboradingprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    return(
        <OnBoarding
         navigation={navigation} 
        
         
         />
    )
}
export default OnboardingModel;
import React from "react";
import { View } from "react-native";
import Onboardingscreen from "../views/OnBoarding";

interface OnBoardingViewModelprops{
    navigation:any
}
const OnBoardingViewModel=(props:OnBoardingViewModelprops)=>{
    const {navigation}=props
    
    return(
        <Onboardingscreen 
        {...{
            navigation
        }}
        
        />
    )
}

export default OnBoardingViewModel


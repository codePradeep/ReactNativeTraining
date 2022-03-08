import React from "react";
import { View } from "react-native";
import TripScreen from "../views/Trip";

interface TripViewModalprops{
    navigation:any
}
const TripViewModal=(props:TripViewModalprops)=>{
    const {navigation}=props
    
    return(
        <TripScreen 
        {...{
            navigation
        }}
        />
    )
}

export default TripViewModal


import React, { useState } from "react";
import { View } from "react-native";
import DeliveryStatus from "../views/Delivery Status";


interface DeliveryStatusModelprops{
    navigation:any
}

const DeliveryStatusModel=(props:DeliveryStatusModelprops)=>{
    const {navigation}=props
    const [currentstep, setcurrentstep] = useState(2)
 return(
     <DeliveryStatus  
     
     navigation={navigation}
     currentstep={currentstep}
     />
 )
}
export default DeliveryStatusModel
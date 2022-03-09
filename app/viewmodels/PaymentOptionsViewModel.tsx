import React, { useState } from "react";
import { View } from "react-native";
import { Icon } from "../config";
import PaymentOptionsScreen from "../views/PaymentOption";

interface PaymentOptionsViewModelprops{
    navigation:any
}
const PaymentOptionsViewModel=(props:PaymentOptionsViewModelprops)=>{
    const {navigation}=props
    const [selected,setselected]=useState(0)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const buttonsdata=[
        {
            icon:Icon.user,
            label:"Personal"
        },
        {
            icon:Icon.work,
            label:"Business"
        }
    ]
    
    return(
        <PaymentOptionsScreen 
        {...{
            navigation,
            selected,
            setselected,
            buttonsdata,
            isEnabled, 
            setIsEnabled,
            toggleSwitch 
        }}
        />
    )
}

export default PaymentOptionsViewModel


import React from "react";
import Setting from "../views/Setting";

interface Settingmodelprops{
    navigation:any
}

const SettingModel=(props:Settingmodelprops)=>{
    const {navigation}=props
    return(
        <Setting 
        navigation={navigation} 
        />
    )
}

export default SettingModel
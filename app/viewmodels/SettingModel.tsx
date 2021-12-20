import React from "react";
import { useOrientation } from "../config/useOrientation";
import SettingsPage from "../views/Settings";

interface SettingModelprops{
    navigation:any
}

const SettingModel=(props:SettingModelprops)=>{
    const orientation = useOrientation();
    const {navigation}=props
    return(
        <SettingsPage 
        navigation={navigation} 
        orientation={orientation}
        />

    )
}
export default SettingModel
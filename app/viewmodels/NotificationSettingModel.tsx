import React, { useState } from "react";
import NotificationSetting from "../views/Notifiacation Setting";


interface NoticationSettingModelprops{
    navigation:any
}

const NoticationSettingModel=(props:NoticationSettingModelprops)=>{
    
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledpromosion, setIsEnabledpromosion] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const togglepromosionSwitch = () => setIsEnabledpromosion(previousState => !previousState);




    const {navigation}=props
    return(
        <NotificationSetting
        isEnabled={isEnabled}
        setIsEnabled={setIsEnabled}
        isEnabledpromosion={isEnabledpromosion}
        setIsEnabledpromosion={setIsEnabledpromosion}
        toggleSwitch={toggleSwitch}
        togglepromosionSwitch ={togglepromosionSwitch}
        navigation={navigation}
       
        
        />

    )
}
export default NoticationSettingModel
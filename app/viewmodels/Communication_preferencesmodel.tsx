import React, { useState } from "react";
import { useOrientation } from "../config/useOrientation";
import Communication_preferences from '../views/Communication_preferences'

interface Communication_preferencesprops{
    navigation:any
}

const Communication_preferencesmodel=(props:Communication_preferencesprops)=>{
    const orientation = useOrientation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledsms, setIsEnabledsms] = useState(false);
    const [isEnabledwhatsapp, setIsEnabledwhatsapp] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const togglesmsSwitch = () => setIsEnabledsms(previousState => !previousState);
    const togglewhatsappSwitch = () => setIsEnabledwhatsapp(previousState => !previousState);






    const {navigation}=props
    return(
        <Communication_preferences 
        isEnabled={isEnabled}
        setIsEnabled={setIsEnabled}
        isEnabledsms={isEnabledsms}
        setIsEnabledsms={setIsEnabledsms}
        isEnabledwhatsapp={isEnabledwhatsapp}
        setIsEnabledwhatsapp={setIsEnabledwhatsapp}
        toggleSwitch={toggleSwitch}
        togglesmsSwitch ={togglesmsSwitch}
        togglewhatsappSwitch = {togglewhatsappSwitch}
        orientation={orientation}
        
        
        />

    )
}
export default Communication_preferencesmodel
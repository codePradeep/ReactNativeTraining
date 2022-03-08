import React, { useState } from "react";
import { View } from "react-native";
import { Icon } from "../config";
import EditAccount from "../views/Edit account";
import SettingScreen from "../views/Setting";

interface EditAccountViewModelprops {
    navigation: any
}
const EditAccountViewModel = (props: EditAccountViewModelprops) => {
    const { navigation } = props
    const [ModalVisible,setModalVisible]=useState(false)

  
    const Data = [
        {
            Text: "FirstName",
            subtext: "Pradeep"
        },
        {
            Text: "Last Name",
            subtext: "Sharma"
        },
        {
            Text: "Phone Number",
            subtext: "+91 87076133**"
        },{
            Text: "Email",
            subtext: "Pradeep@gmail.com"
        },{
            Text: "Password",
            subtext: "******"
        }
    ]

    return (
        <EditAccount
            {...{
                navigation,
                
                Data,
                ModalVisible,
                setModalVisible
            }} />
    )
}

export default EditAccountViewModel


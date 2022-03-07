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

    const Fevorites = [
        {
            icon: Icon.home,
            name: "Add Home",

        },
        {
            icon: Icon.work,
            name: "Add Work"
        }
    ]
    const settingButtons = [
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
                Fevorites,
                settingButtons,
                ModalVisible,
                setModalVisible
            }} />
    )
}

export default EditAccountViewModel


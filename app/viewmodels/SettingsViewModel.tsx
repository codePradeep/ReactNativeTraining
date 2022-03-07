import React, { useState } from "react";
import { View } from "react-native";
import { Icon } from "../config";
import SettingScreen from "../views/Setting";

interface SettingsViewModelprops {
    navigation: any
}
const SettingsViewModel = (props: SettingsViewModelprops) => {
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
            Text: "Safety",
            subtext: "Control your safety settings, including RideCheck notifications"
        },
        {
            Text: "Privacy",
            subtext: "Manage your data you share with us"
        },
        {
            Text: "Security",
            subtext: "Control your account security with 2-step verification"
        }
    ]

    return (
        <SettingScreen
            {...{
                navigation,
                Fevorites,
                settingButtons,
                ModalVisible,
                setModalVisible
            }} />
    )
}

export default SettingsViewModel


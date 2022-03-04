import React from "react";
import { View } from "react-native";
import MessagesScreen from "../views/Message";

interface MessagesViewModelprops {
    navigation: any
}
const MessagesViewModel = (props: MessagesViewModelprops) => {
    const { navigation } = props

    return (
        <MessagesScreen {...{
            navigation
        }} />
    )
}

export default MessagesViewModel


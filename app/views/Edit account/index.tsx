import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header, Seperater } from "../../common";
import { Icon, ScreenConstent } from "../../config";
import SettingModal from "./SettingModal";
import styles from "./style";


interface EditAccountprops {
    navigation: any
    Fevorites: {
        icon: any,
        name: string
    }[]
    settingButtons: {
        Text: string;
        subtext: string;
    }[]
    ModalVisible: boolean
    setModalVisible: any
}
const EditAccount = (props: EditAccountprops) => {
    const {
        navigation,
        Fevorites,
        settingButtons,
        ModalVisible,
        setModalVisible
    } = props

    return (
        <View style={styles.MainContainer}>

            <Header Title="Edit Account" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.secendContainer}>

                <TouchableOpacity style={styles.userContainer}>
                    <Image source={Icon.user} style={styles.icon} />
                    <View style={styles.usertextconatiner}>
                        <Text style={styles.P1}>Pradeep Sharma</Text>
                        <Text style={styles.P3} >+91 87076133**</Text>
                    </View>
                </TouchableOpacity>
                <Seperater />
                <View style={styles.subconatiner} >
                    {settingButtons.map((item, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity >
                                    <Text style={styles.P1}>{item.Text}</Text>
                                    <Text style={styles.P2} >{item.subtext}</Text>
                                </TouchableOpacity>
                                <Seperater />
                            </View>
                        )
                    })}






                </View>

                <SettingModal navigation={navigation} ModalVisible={ModalVisible} setModalVisible={setModalVisible} />

            </ScrollView>

        </View>
    )
}

export default EditAccount


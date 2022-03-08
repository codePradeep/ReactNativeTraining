import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header, Seperater } from "../../common";
import { buttons, Icon, ScreenConstent } from "../../config";
import SettingModal from "./SettingModal";
import styles from "./style";


interface SettingScreenprops {
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
const SettingScreen = (props: SettingScreenprops) => {
    const {
        navigation,
        Fevorites,
        settingButtons,
        ModalVisible,
        setModalVisible
    } = props

    return (
        <View style={styles.MainContainer}>

            <Header Title={ScreenConstent.Settings.Settings} />

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
                    <View>
                        <Text style={styles.P3}>{ScreenConstent.Settings.Fevorites}</Text>
                        {
                            Fevorites.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.buttoncontainer}>
                                        <Image source={item.icon} style={styles.SmallIcon} />
                                        <View style={styles.usertextconatiner}>
                                            <Text style={styles.P1}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <Seperater />
                    <View>
                        <Text style={styles.P3}>{ScreenConstent.Settings.TrustedContacts}</Text>
                        <TouchableOpacity style={styles.buttoncontainer}>
                            <Image source={Icon.home} style={styles.SmallIcon} />
                            <View style={styles.usertextconatiner}>
                                <Text style={styles.P1}>Manage Trusted Contacts</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.P2}>{ScreenConstent.Settings.shareyourtrip}</Text>

                    </View>
                    <Seperater />
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

                    <TouchableOpacity onPress={()=>setModalVisible(true)} >
                        <Text style={styles.P1}>{buttons.Signout}</Text>
                    </TouchableOpacity>
                </View>
                <SettingModal navigation={navigation} ModalVisible={ModalVisible} setModalVisible={setModalVisible} />

            </ScrollView>

        </View>
    )
}

export default SettingScreen


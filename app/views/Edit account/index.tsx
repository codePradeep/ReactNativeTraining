import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header, Seperater } from "../../common";
import { Icon, ScreenConstent } from "../../config";
import AccountModal from "./AccountModal";
import styles from "./style";


interface EditAccountprops {
    navigation: any

    Data: {
        Text: string;
        subtext: string;
    }[]
    ModalVisible: boolean
    setModalVisible: any
}
const EditAccount = (props: EditAccountprops) => {
    const {
        navigation,

        Data,
        ModalVisible,
        setModalVisible
    } = props

    return (
        <View style={styles.MainContainer}>

            <Header Title="Edit Account" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.secendContainer}>

                <View style={styles.userContainer}>
                    <TouchableOpacity>
                        <Image source={Icon.user} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.usertextconatiner}>
                        <Text style={styles.P1}>Pradeep Sharma</Text>
                        <Text style={styles.P3} >+91 87076133**</Text>
                    </View>
                </View>
                <Seperater />
                <View style={styles.subconatiner} >
                    {Data.map((item, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity  onPress={()=>setModalVisible(true)}>
                                    <Text style={styles.P2}>{item.Text}</Text>
                                    <Text style={styles.P1} >{item.subtext}</Text>
                                </TouchableOpacity>
                               {index!=4 && <Seperater />}
                            </View>
                        )
                    })}
                </View>

                <AccountModal navigation={navigation} ModalVisible={ModalVisible} setModalVisible={setModalVisible} />

            </ScrollView>

        </View>
    )
}

export default EditAccount


import React from "react";
import { Modal, Text, Touchable, TouchableOpacity, View } from "react-native";
import { buttons, COLORS, ScreenConstent } from "../../config";
import styles from "./style";

interface SettingModalprops {
    navigation: any
    ModalVisible: any
    setModalVisible: any
}
const SettingModal = (props: SettingModalprops) => {
    const { navigation, ModalVisible, setModalVisible } = props

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={ModalVisible}

            onRequestClose={() => {
                setModalVisible(!ModalVisible);
            }}>
            <View style={styles.modalcontainer}>
                <View style={styles.submodalcontainer}>
                    <Text style={styles.H2}>{ScreenConstent.Settings.Doyouwanttosignout}</Text>
                    <Text style={styles.P3}>{ScreenConstent.Settings.Staysigned}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.ButtonText}>{buttons.ConfirmSignOut}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.white }]} onPress={() => setModalVisible(false)}>
                        <Text style={[styles.ButtonText, { color: COLORS.black }]}>{buttons.cancel}</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </Modal>


    )
}

export default SettingModal


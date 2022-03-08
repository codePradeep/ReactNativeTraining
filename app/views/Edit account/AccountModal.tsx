import React from "react";
import { Modal, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { buttons, COLORS, ScreenConstent } from "../../config";
import styles from "./style";

interface AccountModalprops {
    navigation: any
    ModalVisible: any
    setModalVisible: any
}
const AccountModal = (props: AccountModalprops) => {
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
                    <Text style={styles.P1}>First Name</Text>
                    <TextInput  style={styles.textInput} />
                   
                    
                    
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.ButtonText}>{buttons.Save}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.white }]} onPress={() => setModalVisible(false)}>
                        <Text style={[styles.ButtonText, { color: COLORS.black }]}>{buttons.cancel}</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </Modal>


    )
}

export default AccountModal


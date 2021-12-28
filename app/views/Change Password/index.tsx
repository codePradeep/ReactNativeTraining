import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../common/Logo";
import { icon } from "../../config";
import styles from "./style";

interface PasswordRecoveryprops {
    navigation: any

}

const ChangePassword = (props: PasswordRecoveryprops) => {
    const { navigation, } = props



    return (

        <View style={styles.mainContainer}>

            <View style={styles.headercontainer}>
                <View style={styles.headersubcontainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={styles.headerleftimagecontainer}>
                            <Image source={icon.left_arrow} style={styles.headerleftimage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>CHANGE PASSWORD</Text>
                    <View style={styles.HeaderRight} />
                </View>
            </View>

            <View style={styles.container}>

                    <View style={styles.inputView}>
                        <Text style={styles.Email}>Current Password</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                //source={isvalid ? icon.check_tick : icon.wrong}
                                style={styles.icon} />
                        </View>
                        <Text style={styles.Email}>New Password</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                //source={isvalid ? icon.check_tick : icon.wrong}
                                style={styles.icon} />
                        </View>
                        <Text style={styles.Email}>Retype New Password</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                //source={isvalid ? icon.check_tick : icon.wrong}
                                style={styles.icon} />
                        </View>
                    </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Change Password</Text>
                </TouchableOpacity>
                
            </View>
        
        </View >
        
    )
}
export default ChangePassword



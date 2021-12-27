import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../common/Logo";
import { icon } from "../../config";
import styles from "./style";

interface PasswordRecoveryprops {
    navigation: any
    isvalid: any
    setisvalid: any
    validate: any
}

const PasswordRecovery = (props: PasswordRecoveryprops) => {
    const {
        navigation,
        isvalid,
        setisvalid,
        validate } = props



    return (
        <View style={styles.mainContainer}>
            <Logo />
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View>

                        <View style={styles.textcontainer}>
                            <Text style={styles.text}>Password Recovery</Text>
                            <Text style={styles.Subtext}>Please enter your email address to recover your password</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.Email}>Email</Text>
                        <View style={styles.input}>
                            <TextInput
                                keyboardType={"email-address"}
                                onChangeText={(text) => validate(text)}
                                style={styles.textinput}
                            />
                            <Image source={isvalid ? icon.check_tick : icon.wrong} style={styles.icon} />
                        </View>
                    </View>

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Send Email</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default PasswordRecovery



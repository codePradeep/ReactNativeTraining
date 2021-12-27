import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../common/Logo";
import { icon } from "../../config";
import styles from "./style";

interface PasswordRecoveryprops {
    navigation: any
    Email:string

}

const OTP = (props: PasswordRecoveryprops) => {
    const { navigation,Email } = props



    return (
        <View style={styles.mainContainer}>
            <Logo />
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View>

                        <View style={styles.textcontainer}>
                            <Text style={styles.text}>OTP Authentication</Text>
                            <Text style={styles.Subtext}>An authentication code has been sent to {Email}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <TextInput maxLength={1} style={styles.textinput} />
                            <TextInput maxLength={1} style={styles.textinput} />
                            <TextInput maxLength={1} style={styles.textinput} />
                            <TextInput maxLength={1} style={styles.textinput} />
                        </View>
                        <Text style={styles.Subtext}>Didn't receive code ? Resend</Text>


                    </View>

                </View>
<View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Continue</Text>
                </TouchableOpacity>
                <Text style={styles.Subtext}>By signing up, you agree to our</Text>
                <TouchableOpacity>
                    <Text style={styles.term}>Terms and Conditions</Text>
                </TouchableOpacity>
                </View>
            
            </View>

        </View>
    )
}
export default OTP



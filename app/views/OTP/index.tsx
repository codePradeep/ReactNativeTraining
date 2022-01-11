import React, { useRef, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Abutton } from "../../common";
import Logo from "../../common/Logo";
import { Constant, FONTS, icon, Screen } from "../../config";
import styles from "./style";

interface PasswordRecoveryprops {
    navigation: any
    Email: string

}

const OTP = (props: PasswordRecoveryprops) => {
    const { navigation, Email } = props
    const input2 = useRef<any>();
    const input3 = useRef<any>();
    const input4 = useRef<any>();



    return (
        <View style={styles.mainContainer}>
            <Logo />
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View>

                        <View style={styles.textcontainer}>
                            <Text style={styles.text}>{Constant.screens.OTPAuthentication}</Text>
                            <Text style={styles.Subtext}> {Constant.Otp.preEmail}{Email}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <TextInput maxLength={1} style={styles.textinput} onSubmitEditing={() => input2.current.focus()} keyboardType={"number-pad"} />
                            <TextInput maxLength={1} style={styles.textinput} ref={input2} onSubmitEditing={() => input3.current.focus()} keyboardType={"number-pad"} />
                            <TextInput maxLength={1} style={styles.textinput} ref={input3}  onSubmitEditing={() => input4.current.focus()} keyboardType={"number-pad"}/>
                            <TextInput maxLength={1} style={styles.textinput} ref={input4} keyboardType={"number-pad"} />
                        </View>
                        <View style={styles.btncon}>
                            <Text style={FONTS.h5}> {Constant.Otp.didnotrecive}</Text>
                            <Text style={[FONTS.h4]}>{Constant.Button.Resend}</Text>
                        </View>


                    </View>

                </View>
                <View>
                    <Abutton title={Constant.Button.Continue} OnPress={() => navigation.navigate(Screen.DrawerNavigation)} />
                    <Text style={styles.Subtext}>{Constant.Otp.detailterm}</Text>
                    <TouchableOpacity>
                        <Text style={styles.term}>{Constant.Button.TnC}</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}
export default OTP



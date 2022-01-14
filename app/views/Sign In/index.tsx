import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import React from "react";
import { KeyboardAvoidingView, ScrollView, Switch, TextInput, TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-animatable";
import { Abutton, Input } from "../../common";
import Logo from "../../common/Logo";
import { COLORS, Constant, icon, Screen } from "../../config";
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk-next';

import styles from "./style";



interface signinprops {
    navigation: any
    isvalidEmail: boolean
    isvalidPassword: boolean
    Emailinpute: (text: string) => void
    EnterPassword: (text: string) => void,
    visible: boolean
    setvisible: any
    isEnabled: boolean
    toggleSwitch: any
    signInwithGoogle: () => Promise<void>
    SigninWithFacebook: () => void
}

const SignIn = (props: signinprops) => {
    const {
        navigation,
        isvalidEmail,
        isvalidPassword,
        visible,
        setvisible,
        Emailinpute,
        EnterPassword,
        isEnabled,
        toggleSwitch,
        signInwithGoogle,
        SigninWithFacebook
    } = props

    return (
        <View style={styles.mainContainer}>
            <Logo />
            <ScrollView >
                <View style={styles.container}>

                    <View style={styles.subcontainer}>

                        <View style={styles.textcontainer}>
                            <Text style={styles.text}>{Constant.SigninScreen.letsSign}</Text>
                            <Text style={styles.Subtext}>{Constant.SigninScreen.welcome}</Text>
                        </View>

                        <View>
                            <View style={styles.EmailContainer}>
                                <Text style={styles.Email}>{Constant.SigninScreen.email}</Text>
                                {!isvalidEmail ? <Text style={styles.bottomsignuptext}>{Constant.Validation.EmailValidation}</Text> : <View />}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    keyboardType={"email-address"}
                                    onChangeText={Emailinpute}
                                    style={styles.textinput}
                                />
                                <Image source={isvalidEmail ? icon.check_tick : icon.wrong} style={styles.icon} />
                            </View>
                        </View>


                        <View>
                            <Text style={styles.Email}>{Constant.SigninScreen.password}</Text>
                            <View style={styles.input}>
                                <TextInput
                                    secureTextEntry={visible}
                                    onChangeText={EnterPassword}
                                    style={styles.textinput}

                                />
                                <TouchableOpacity style={styles.eyeiconcontainer} onPress={() => { visible ? setvisible(false) : setvisible(true) }}   >
                                    <Image source={visible ? icon.closedeyes : icon.openeye} style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                            {!isvalidPassword ? <Text style={styles.bottomsignuptext}>{Constant.Validation.passwordvalidation}</Text> : null}
                        </View>

                        <View style={[styles.flexdirection, { justifyContent: "space-between" }]}>
                            <View style={styles.flexdirection}>
                                <Switch
                                    trackColor={{ false: COLORS.primary, true: COLORS.lightGray1 }}
                                    thumbColor={isEnabled ? COLORS.primary : COLORS.lightGray1}
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                                <Text style={styles.bottomtext}>{Constant.SigninScreen.save}</Text>
                            </View>
                            <TouchableOpacity style={styles.forget}
                                onPress={() => navigation.navigate(Screen.PasswordRecoveryModel)}>
                                <Text style={styles.bottomtext}>{Constant.SigninScreen.Forget}</Text>
                            </TouchableOpacity>
                        </View>
                        <KeyboardAvoidingView style={styles.subcontainer}>
                            <Abutton title={Constant.Button.signin} OnPress={() =>{isvalidEmail&&isvalidPassword? navigation.navigate(Screen.DrawerNavigation):null}} />
                            <View style={[styles.flexdirection, { alignSelf: "center" }]}>
                                <Text style={styles.bottomtext}>{Constant.SigninScreen.dont}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(Screen.SignUpModel)}>
                                    <Text style={styles.bottomsignuptext}>{Constant.Button.Signup}</Text>
                                </TouchableOpacity>
                            </View>

                        </KeyboardAvoidingView>

                    </View>
                    
                    <View>
                    <GoogleSigninButton
                        style={styles.GoogleSignInButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={() => signInwithGoogle()}
                    />

                    <TouchableOpacity onPress={() => SigninWithFacebook()}
                    style={styles.FacebookSigninButton}
                    > 
                    <Image  source={icon.facebook} style={styles.FacebookSigninButtonicon}/>
                        <Text style={styles.FacebookSigninButtontext}>{Constant.Button.facebook}</Text>
                    </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </View>
    )
}
export default SignIn
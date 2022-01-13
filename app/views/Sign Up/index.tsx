import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import React from "react";
import { KeyboardAvoidingView, ScrollView, Switch, TextInput, TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-animatable";
import { Input } from "../../common";
import Logo from "../../common/Logo";
import { COLORS, Constant, icon, Screen } from "../../config";
import styles from "./style";



interface signinprops {
    navigation: any
    isvalidEmail: boolean
    isvalidPassword: boolean
    isvalidusername:boolean
    Emailinpute: (text: string) => void
    EnterPassword: (text: string) => void
    UsernameInput:(text: string) => void
    visible:boolean
    setvisible:any
    isEnabled: boolean
    toggleSwitch: any
    signInwithGoogle: () => Promise<void>
    SigninWithFacebook:() => void
   
}

const SignUp = (props: signinprops) => {
    const {
        navigation,
        isvalidEmail,
    isvalidPassword,
    visible,setvisible,
        Emailinpute,
        EnterPassword,
        isEnabled, toggleSwitch,
        isvalidusername,
        UsernameInput,
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
                            <Text style={styles.text}>{Constant.SignUpScreen.gettingstarted}</Text>
                            <Text style={styles.Subtext}>{Constant.SignUpScreen.createaccount}</Text>
                        </View>


                        <View>
                            <View style={styles.EmailContainer}>
                            <Text style={styles.Email}>{Constant.SigninScreen.email}</Text>
                            { !isvalidEmail?<Text  style={styles.bottomsignuptext}>{Constant.Validation.EmailValidation}</Text>:<View />}
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
                            <View style={styles.EmailContainer}>
                            <Text style={styles.Email}>{Constant.SignUpScreen.username}</Text>
                            { !isvalidusername?<Text  style={styles.bottomsignuptext}>{Constant.Validation.username}</Text>:<View />}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    onChangeText={UsernameInput}
                                    style={styles.textinput}
                                />
                                <Image source={isvalidusername ? icon.check_tick : icon.wrong} style={styles.icon} />
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
                                <TouchableOpacity style={styles.eyeiconcontainer}  onPress={ ()=>{visible? setvisible(false): setvisible(true)}}   >
                                <Image source={visible ? icon.closedeyes : icon.openeye} style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                           { !isvalidPassword?<Text  style={styles.bottomsignuptext}>{Constant.Validation.passwordvalidation}</Text>:null}
                        </View>

                        
                        <KeyboardAvoidingView style={styles.subcontainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttontext}>{Constant.Button.Signup}</Text>
                            </TouchableOpacity>

                            <View style={[styles.flexdirection, { alignSelf: "center" }]}>
                                <Text style={styles.bottomtext}>{Constant.SignUpScreen.already}</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate(Screen.SignInModel)}>
                                    <Text style={styles.bottomsignuptext}>{Constant.Button.signin}</Text>
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
export default SignUp
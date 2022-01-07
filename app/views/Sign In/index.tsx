import React from "react";
import { KeyboardAvoidingView, ScrollView, Switch, TextInput, TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-animatable";
import { Input } from "../../common";
import Logo from "../../common/Logo";
import { COLORS, Constant, icon } from "../../config";
import styles from "./style";



interface signinprops {
    navigation: any
    isvalidEmail: boolean
    isvalidPassword: boolean
    Emailinpute: (text: string) => void
    EnterPassword: (text: string) => void,
    visible:boolean
    setvisible:any
    isEnabled: boolean
    toggleSwitch: any
}

const SignIn = (props: signinprops) => {
    const {
        navigation,
        isvalidEmail,
    isvalidPassword,
    visible,setvisible,
        Emailinpute,
        EnterPassword,
        isEnabled, toggleSwitch,

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

                        <View style={[styles.flexdirection, { justifyContent: "space-between" }]}>
                            <View style={styles.flexdirection}>
                                <Switch 
                                trackColor={{false: COLORS.primary, true: COLORS.lightGray1 }}
                                thumbColor={isEnabled ? COLORS.primary : COLORS.lightGray1}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                />
                                <Text style={styles.bottomtext}>{Constant.SigninScreen.save}</Text>
                            </View>
                            <TouchableOpacity style={styles.forget}>
                                <Text style={styles.bottomtext}>{Constant.SigninScreen.Forget}</Text>
                            </TouchableOpacity>
                        </View>
                        <KeyboardAvoidingView style={styles.subcontainer}>
                            <TouchableOpacity style={styles.button}
                            
                            onPress={()=>navigation.navigate("DrawerNavigation")}>
                                <Text style={styles.buttontext}>{Constant.Button.signin}</Text>
                            </TouchableOpacity>

                            <View style={[styles.flexdirection, { alignSelf: "center" }]}>
                                <Text style={styles.bottomtext}>{Constant.SigninScreen.dont}</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate("SignUpModel")}>
                                    <Text style={styles.bottomsignuptext}>{Constant.Button.Signup}</Text>
                                </TouchableOpacity>

                            </View>
                        </KeyboardAvoidingView>
                    </View>


                </View>
            </ScrollView>

        </View>
    )
}
export default SignIn
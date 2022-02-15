import React from "react";
import { View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, ColorPropType, StatusBar } from "react-native";
import { buttons, Form, icons, images, Screensdata } from "../../config";
import { COLORS, FONTS, selectedTheme } from "../../config/constants/theme";
import styles from "./style";

interface Registerprops {
    navigation: any
    visible: boolean
    setvisibe: React.Dispatch<React.SetStateAction<boolean>>
    selected: any
    setselected: any
    isvalidEmail: boolean
    isvalidPassword: boolean
    isvalidusername:boolean
    Emailinpute: (text: string) => void
    EnterPassword: (text: string) => void
    EnterUserName:(text: string) => void
    isEnabled: boolean
    submit: any


}


const Register = (props: Registerprops) => {
    const { navigation, visible, setvisibe, selected, setselected,
        isvalidEmail,
        isvalidPassword,
        isvalidusername,
        Emailinpute,
        EnterPassword,
        EnterUserName,
        
        isEnabled,

        submit } = props

    return (
        <View style={styles.MainConatiner}>
            <StatusBar backgroundColor={"rgba(0,0,0,0)"}
                barStyle={"dark-content"} />

            <Text style={styles.heading}>{Screensdata.Register}</Text>


            <ScrollView style={{ flex: 1 }}>


                <View style={styles.container}>
                    <View style={styles.boxcontainer}>
                        <TouchableOpacity
                            onPress={() => selected ? setselected(false) : setselected(true)}
                            style={[styles.box, { backgroundColor: selected ? selectedTheme.backgroundgray10Ngray70 : COLORS.primary3 }]}>

                            <Image source={!selected ? icons.Icon.checkbox_on_dark : icons.Icon.checkbox_off} style={styles.checkedIcon} />

                            <Text style={{ color: selected ? COLORS.primary3 : COLORS.white }}>I am a </Text>
                            <Text style={{ fontWeight: "700", fontSize: 20, color: selected ? COLORS.primary3 : COLORS.white }}>STUDENT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => selected ? setselected(false) : setselected(true)}
                            style={[styles.box, { backgroundColor: selected ? COLORS.primary3 : selectedTheme.backgroundgray10Ngray70 }]}>
                            <Image source={selected ? icons.Icon.checkbox_on_dark : icons.Icon.checkbox_off} style={styles.checkedIcon} />
                            <Text style={{ color: !selected ? COLORS.primary3 : COLORS.white }}>I am a </Text>
                            <Text style={{ fontWeight: "700", fontSize: 20, color: !selected ? COLORS.primary3 : COLORS.white }}>TUTOR</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.input} >
                        <Text style={styles.formtext}>{Form.User}</Text>
                        <View style={styles.inputecontainer}>
                            <TextInput style={styles.inputText} 
                            onChangeText={EnterUserName} />
                        </View>
                        {!isvalidusername ? <Text style={{ color: "red" }}>Invalid Username</Text> : null}

                    </View>

                    <View style={styles.input} >
                        <Text style={styles.formtext}>{Form.Email}</Text>
                        <View style={styles.inputecontainer}>
                            <TextInput
                                keyboardType={"email-address"}
                                onChangeText={Emailinpute}
                                style={styles.inputText} />
                        </View>
                        {!isvalidEmail ? <Text style={{ color: "red" }}>Invalid Email</Text> : null}
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.formtext}>{Form.Passsword}</Text>
                        <View style={styles.inputecontainer}>
                            <TextInput
                                style={styles.inputText}
                                secureTextEntry={!visible}
                                onChangeText={EnterPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyecontainer}
                                onPress={() => visible ? setvisibe(false) : setvisibe(true)}
                            >
                                <Image source={visible ? icons.Icon.eye : icons.Icon.eye_close} style={styles.eyeicon} />
                            </TouchableOpacity>
                        </View>
                        {!isvalidPassword? <Text style={{color:"red"}}>Invalid Password</Text>:null}

                    </View>

                    <TouchableOpacity style={styles.button}
                     onPress={submit}>
                        <Text style={styles.buttontext}>{buttons.Register}</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>Or Signup with</Text>

                    <View style={styles.socialbuttonsContainer}>

                        <TouchableOpacity style={styles.socialbuttons}>
                            <Image source={icons.Icon.google} style={styles.Icon} />
                            <Text style={styles.socialbuttonstext}>{buttons.Google}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialbuttons}>
                            <Image source={icons.Icon.facebook} style={styles.Icon} />
                            <Text style={styles.socialbuttonstext}>{buttons.facebook}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.buttonsContainer}>


                        <Text style={styles.newusertext}>Alredy a User?</Text>


                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Loginmodel")}>
                            <Text style={styles.signuptext}>{buttons.Login}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>



        </View >
    )
}
export default Register;
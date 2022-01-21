import React from "react";
import { View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, ColorPropType } from "react-native";
import { buttons, Form, icons, images, Screensdata } from "../../config";
import { COLORS, FONTS, selectedTheme } from "../../config/constants/theme";
import styles from "./style";

interface Registerprops {
    navigation: any
    visible: boolean
    setvisibe: React.Dispatch<React.SetStateAction<boolean>>
}

const Register = (props: Registerprops) => {
    const { navigation, visible, setvisibe } = props

    return (
        <View style={styles.MainConatiner}>

            <Text style={styles.heading}>{Screensdata.Register}</Text>


            <ScrollView style={{ flex: 1 }}>


                <View style={styles.container}>
                    <View style={styles.boxcontainer}>
                        <TouchableOpacity style={[styles.box, { backgroundColor: visible ? "blue" : COLORS.primary3 }]}>
                            
                            <Image source={icons.Icon.checkbox_on_dark} style={styles.checkedIcon} />
                            
                            <Text style={{color:COLORS.white}}>I am a </Text>
                            <Text style={{ fontSize: 20 ,color:COLORS.white}}>STUDENT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.box, { backgroundColor: visible ? "blue" : selectedTheme.backgroundColor8 }]}>
                            <Image source={icons.Icon.checkbox_off} style={styles.checkedIcon} />
                            <Text style={{  color:COLORS.primary3}}>I am a </Text>
                            <Text style={{ fontSize: 20 ,color:COLORS.primary3}}>TUTOR</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.input} >
                        <Text style={styles.formtext}>{Form.User}</Text>
                        <View style={styles.inputecontainer}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={styles.input} >
                        <Text style={styles.formtext}>{Form.Email}</Text>
                        <View style={styles.inputecontainer}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.formtext}>{Form.Passsword}</Text>
                        <View style={styles.inputecontainer}>
                            <TextInput />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>{buttons.Login}</Text>
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


                        <TouchableOpacity>
                            <Text style={styles.signuptext}>{buttons.Login}</Text>
                        </TouchableOpacity>

                    </View>
                    </View>
            </ScrollView>

       

        </View >
    )
}
export default Register;
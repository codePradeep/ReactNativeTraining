import React from "react";
import { View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Input from "../../common/Input";
import { buttons, Form, icons, images, Screensdata, selectedTheme } from "../../config";
import styles from "./style";

interface loginpageprops {
    navigation: any
    visible: boolean
    setvisibe: React.Dispatch<React.SetStateAction<boolean>>
    isvalidEmail: boolean
    isvalidPassword: boolean
    Emailinpute: (text: string) => void
    EnterPassword: (text: string) => void,
    isEnabled: boolean
    submit: any
    signIn:any
}

const Loginpage = (props: loginpageprops) => {
    const { navigation, visible, setvisibe ,
        isvalidEmail,
        isvalidPassword,
        Emailinpute,
        EnterPassword,
        isEnabled,
        signIn,
        submit} = props

    return (
        <View style={styles(selectedTheme).MainConatiner}>
            <Image source={selectedTheme.name=="light"?images.images.bg: images.images.bg_dark} style={styles(selectedTheme).bgimage} />
            <Text style={styles(selectedTheme).heading}>{Screensdata.Login}</Text>
            <View style={styles(selectedTheme).container}>
                <View style={styles(selectedTheme).input} >
                    <Text style={styles(selectedTheme).formtext}>{Form.usernameorEmail}</Text>
                    <View style={styles(selectedTheme).inputecontainer}>

                        <TextInput 
                        keyboardType={"email-address"}
                        onChangeText={Emailinpute}
                        style={styles(selectedTheme).inputText} />

                    </View>
                    {!isvalidEmail? <Text style={{color:"red"}}>{Form.Validation.EmailValidation}</Text>:null}

                </View>
                <View style={styles(selectedTheme).input}>
                    <Text style={styles(selectedTheme).formtext}>{Form.Passsword}</Text>
                    <View style={styles(selectedTheme).inputecontainer}>
                        <TextInput
                            style={styles(selectedTheme).inputText}
                            secureTextEntry={!visible}
                            onChangeText={EnterPassword}
                        />
                        <TouchableOpacity
                            style={styles(selectedTheme).eyecontainer}
                            onPress={() => visible ? setvisibe(false) : setvisibe(true)}
                        >
                            <Image source={visible ? icons.Icon.eye : icons.Icon.eye_close} style={styles(selectedTheme).eyeicon} />
                        </TouchableOpacity>
                    </View>
                    {!isvalidPassword? <Text style={{color:"red"}}>{Form.Validation.passwordvalidation}</Text>:null}
                </View>

                <TouchableOpacity style={styles(selectedTheme).button}
                onPress={submit}
                >
                    <Text style={styles(selectedTheme).buttontext}>{buttons.Login}</Text>
                </TouchableOpacity>

                <Text style={styles(selectedTheme).text}>Or Login with</Text>

                <View style={styles(selectedTheme).socialbuttonsContainer}>

                    <TouchableOpacity style={styles(selectedTheme).socialbuttons}
                    
                    onPress={()=>signIn()}>
                        <Image source={icons.Icon.google} style={styles(selectedTheme).Icon} />
                        <Text style={styles(selectedTheme).socialbuttonstext}>{buttons.Google}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>navigation.navigate("Roottab")}
                      style={styles(selectedTheme).socialbuttons}>
                        <Image source={icons.Icon.facebook} style={styles(selectedTheme).Icon} />
                        <Text style={styles(selectedTheme).socialbuttonstext}>{buttons.facebook}</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles(selectedTheme).buttonsContainer}>


                    <Text style={styles(selectedTheme).newusertext}>New User?</Text>


                    <TouchableOpacity
                    onPress={()=>navigation.navigate("RegistrModel")}>
                        <Text style={styles(selectedTheme).signuptext}>{buttons.Signupnow}</Text>
                    </TouchableOpacity>

                </View>


            </View>



        </View>
    )
}
export default Loginpage;
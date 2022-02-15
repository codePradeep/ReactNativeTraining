import React from "react";
import { View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Input from "../../common/Input";
import { buttons, Form, icons, images, Screensdata } from "../../config";
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
}

const Loginpage = (props: loginpageprops) => {
    const { navigation, visible, setvisibe ,
        isvalidEmail,
        isvalidPassword,
        Emailinpute,
        EnterPassword,
        isEnabled,
        
        submit} = props

    return (
        <View style={styles.MainConatiner}>
            <Image source={images.images.bg} style={styles.bgimage} />
            <Text style={styles.heading}>{Screensdata.Login}</Text>
            <View style={styles.container}>
                <View style={styles.input} >
                    <Text style={styles.formtext}>{Form.usernameorEmail}</Text>
                    <View style={styles.inputecontainer}>

                        <TextInput 
                        keyboardType={"email-address"}
                        onChangeText={Emailinpute}
                        style={styles.inputText} />
                    </View>
                    {!isvalidEmail? <Text style={{color:"red"}}>Invalid Email</Text>:null}
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
                onPress={submit}
                >
                    <Text style={styles.buttontext}>{buttons.Login}</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Or Login with</Text>

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


                    <Text style={styles.newusertext}>New User?</Text>


                    <TouchableOpacity
                    onPress={()=>navigation.navigate("RegistrModel")}>
                        <Text style={styles.signuptext}>{buttons.Signupnow}</Text>
                    </TouchableOpacity>

                </View>


            </View>



        </View>
    )
}
export default Loginpage;
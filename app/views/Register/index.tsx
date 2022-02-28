import React, { useRef } from "react";
import { View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, ColorPropType, StatusBar, Animated } from "react-native";
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
    isvalidusername: boolean
    Emailinpute: (text: string) => void
    EnterPassword: (text: string) => void
    EnterUserName: (text: string) => void
    submit: any
    register: {
        id: number;
        label: string;
    }[]
    defaultitem: any
    setdefaultitem: any
    GoogleSignin:any


}


const Register = (props: Registerprops) => {
    const { navigation, visible, setvisibe, selected, setselected,
        isvalidEmail,
        isvalidPassword,
        isvalidusername,
        Emailinpute,
        EnterPassword,
        EnterUserName,
        register,
        defaultitem,
        setdefaultitem,
        GoogleSignin,
        submit } = props

        const animationValue = useRef(new Animated.Value(0)).current;
        const scaleValue = useRef(0);

        const NEWButton=Animated.createAnimatedComponent(TouchableOpacity)
        
        const runAnimationOnClick = () => {
           scaleValue.current = scaleValue.current === 0 ? 1 : 0;
           Animated.spring(animationValue, {
               toValue: scaleValue.current,
             friction:2,
               useNativeDriver: true,
           }).start();
        }
     


    return (
        <View style={styles(selectedTheme).MainConatiner}>
            <StatusBar backgroundColor={"rgba(0,0,0,0)"}
                barStyle={"dark-content"} />

            <Text style={styles(selectedTheme).heading}>{Screensdata.Register}</Text>


            <ScrollView style={{ flex: 1 }}>


                <View style={styles(selectedTheme).container}>
                    <View style={styles(selectedTheme).boxcontainer}>
                        {register.map((item, index) => {
                            return (
                                <NEWButton
                                
                                    key={index}
                                    onPress={() => { setdefaultitem(item.id),runAnimationOnClick()}}
                                    style={[styles(selectedTheme).box, {
                                       
                                        backgroundColor: defaultitem == item.id ? selectedTheme.backgroundblueNblack : selectedTheme.backgroundgray10Ngray70,
                                        borderColor: defaultitem == item.id ? selectedTheme.borderColor1 : selectedTheme.borderColor1
                                    }]}>

                                    <Animated.View 
                                    
                                    style={[styles(selectedTheme).checkedcontainer,
                                     {transform: [
                                        {
                                            translateX: animationValue.interpolate({
                                                      inputRange: [0, 1],
                                                      outputRange: [1, 70],
                                                   }),
                                          },
                                         
                                        
                                ],
                                    opacity: animationValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 2],
                                     }),
                                    }]}>
                                        {defaultitem == item.id ?
                                            <Image source={icons.Icon.checkbox_on_dark}
                                                style={[styles(selectedTheme).Icons,]}
                                            /> :
                                            <View style={styles(selectedTheme).Icons}></View>}
                                    </Animated.View>
                                    <Text style={{ color: defaultitem == item.id ? COLORS.white : COLORS.gray40 }}>I am a </Text>
                                    <Text style={{ fontWeight: "700", fontSize: 20, color: defaultitem == item.id ? COLORS.white : COLORS.gray40 }}>{item.label}</Text>
                                </NEWButton>
                            )
                        })}


                    </View>

                    <View style={styles(selectedTheme).input} >
                        <Text style={styles(selectedTheme).formtext}>{Form.User}</Text>
                        <View style={styles(selectedTheme).inputecontainer}>
                            <TextInput style={styles(selectedTheme).inputText}
                                onChangeText={EnterUserName} />
                        </View>
                        {!isvalidusername ? <Text style={{ color: "red" }}>{Form.Validation.username}</Text> : null}

                    </View>

                    <View style={styles(selectedTheme).input} >
                        <Text style={styles(selectedTheme).formtext}>{Form.Email}</Text>
                        <View style={styles(selectedTheme).inputecontainer}>
                            <TextInput
                                keyboardType={"email-address"}
                                onChangeText={Emailinpute}
                                style={styles(selectedTheme).inputText} />
                        </View>
                        {!isvalidEmail ? <Text style={{ color: "red" }}>{Form.Validation.EmailValidation}</Text> : null}
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
                        {!isvalidPassword ? <Text style={{ color: "red" }}>{Form.Validation.passwordvalidation}</Text> : null}

                    </View>

                    <TouchableOpacity style={styles(selectedTheme).button}
                        onPress={submit}>
                        <Text style={styles(selectedTheme).buttontext}>{buttons.Register}</Text>
                    </TouchableOpacity>

                    <Text style={styles(selectedTheme).text}>Or Signup with</Text>

                    <View style={styles(selectedTheme).socialbuttonsContainer}>

                        <TouchableOpacity style={styles(selectedTheme).socialbuttons}
                        onPress={()=>GoogleSignin()}
                        >
                            <Image source={icons.Icon.google} style={styles(selectedTheme).Icon} />
                            <Text style={styles(selectedTheme).socialbuttonstext}>{buttons.Google}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles(selectedTheme).socialbuttons}>
                            <Image source={icons.Icon.facebook} style={styles(selectedTheme).Icon} />
                            <Text style={styles(selectedTheme).socialbuttonstext}>{buttons.facebook}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles(selectedTheme).buttonsContainer}>


                        <Text style={styles(selectedTheme).newusertext}>Alredy a User?</Text>


                        <TouchableOpacity
                            onPress={() => navigation.navigate("Loginmodel")}>
                            <Text style={styles(selectedTheme).signuptext}>{buttons.Login}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>



        </View >
    )
}
export default Register;
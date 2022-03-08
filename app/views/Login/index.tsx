import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Seperater } from "../../common";
import { buttons, Icon, ScreenConstent, Screens } from "../../config";
import styles from "./style";

interface LoginScreenprops {
    navigation: any
}
const LoginScreen = (props: LoginScreenprops) => {
    const { navigation } = props

    return (
        <View style={styles.MainContainer}>
            <Text style={styles.H1}>{ScreenConstent.Login.EnterNumber}</Text>
            <View style={styles.inputecontainer}>
                <View style={styles.iconcontainer}>
                    <Image source={Icon.location} style={styles.icon} />
                    <Image source={Icon.down} style={styles.smallicon} />
                </View>
                <TextInput style={styles.inputstyle} />
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(Screens.HomeViewModel)}>
                <Text style={styles.ButtonText}>{buttons.next}</Text>
            </TouchableOpacity>
            <Text>{ScreenConstent.Login.des}</Text>
            <View style={styles.seperater}>
                <Seperater />
                <Text style={{marginHorizontal:5}}>Or</Text>
                <Seperater />
            </View>
            <TouchableOpacity style={styles.SocialButton}>
                <Image source={Icon.facebook} style={styles.SocialIcon} />
                <Text style={styles.SocialButtonText}>{buttons.facebook}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SocialButton}>
                <Image source={Icon.google} style={styles.SocialIcon} />
                <Text style={styles.SocialButtonText}>{buttons.Google}</Text>
            </TouchableOpacity>


        </View>
    )
}

export default LoginScreen


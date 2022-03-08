import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { buttons, Icon, Screens } from "../../config";
import styles from "./style";

interface Onboardingscreenprops {
    navigation: any
}
const Onboardingscreen = (props: Onboardingscreenprops) => {
    const { navigation } = props

    return (
        <View style={styles.MainContainer}>
            <View style={styles.subContainer}>
            <Text style={styles.H1}>Uber</Text>
            <Image source={Icon.Comfortcar}/>
            <Text style={styles.H1}>Move with Safety</Text>

            </View>
            <TouchableOpacity style={styles.button}
            onPress={()=>navigation.navigate(Screens.LoginViewModel)}>
                <Text style={styles.ButtonText}>Get Started</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Onboardingscreen


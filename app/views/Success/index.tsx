import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Constant, FONTS, icon } from "../../config";
import styles from "./style";

interface PasswordRecoveryprops {
    navigation: any
}

const Success = (props: PasswordRecoveryprops) => {
    const { navigation, } = props

    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>
           

                <View style={styles.textcontainer}>

                <Image source={icon.bonfire} style={styles.icon} />
                   
                    <Text style={FONTS.h1}>{Constant.SuccessScreen.title}</Text>
                    <Text style={FONTS.h4}>{Constant.SuccessScreen.subtitle}</Text>
                </View>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>{Constant.Button.Done}</Text>
                </TouchableOpacity>



            </View>

        </View>
    )
}
export default Success



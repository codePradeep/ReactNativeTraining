import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Abutton, Header } from "../../common";
import { Constant, icon } from "../../config";
import styles from "./style";

interface PasswordRecoveryprops {
    navigation: any

}

const ChangePassword = (props: PasswordRecoveryprops) => {
    const { navigation, } = props

    return (

        <View style={styles.mainContainer}>
            <View style={styles.headerview}>
           
            <View style={styles.container}>
                


                    <View style={styles.inputView}>
                        <Text style={styles.Email}>{Constant.changePassword.currentpassword}</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                style={styles.icon} />
                        </View>
                        <Text style={styles.Email}>{Constant.changePassword.newpassword}</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                style={styles.icon} />
                        </View>
                        <Text style={styles.Email}>{Constant.changePassword.repasssword}</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                style={styles.icon} />
                        </View>
                    </View>

                <Abutton title={Constant.Button.ChangePassword} OnPress={()=>navigation.goBack()} />
                
            </View>
            </View>
        
        </View >
        
    )
}
export default ChangePassword



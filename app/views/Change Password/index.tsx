import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Abutton, Header } from "../../common";
import Logo from "../../common/Logo";
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
            <Header headertitle={Constant.screens.CHANGEPASSWORD} navigation={navigation} HeaderRightComponent={undefined}/>
            
            <View style={styles.container}>


                    <View style={styles.inputView}>
                        <Text style={styles.Email}>{Constant.changePassword.currentpassword}</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                //source={isvalid ? icon.check_tick : icon.wrong}
                                style={styles.icon} />
                        </View>
                        <Text style={styles.Email}>{Constant.changePassword.newpassword}</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                //source={isvalid ? icon.check_tick : icon.wrong}
                                style={styles.icon} />
                        </View>
                        <Text style={styles.Email}>{Constant.changePassword.repasssword}</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.textinput}
                            />
                            <Image
                                source={icon.eye}
                                //source={isvalid ? icon.check_tick : icon.wrong}
                                style={styles.icon} />
                        </View>
                    </View>

                <Abutton title={Constant.Button.ChangePassword} OnPress={undefined} />
                
            </View>
            </View>
        
        </View >
        
    )
}
export default ChangePassword



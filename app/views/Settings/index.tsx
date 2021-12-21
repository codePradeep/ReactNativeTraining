import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SettingButton } from "../../common";
import Logo from "../../common/Logo";
import { Constant, icon } from "../../config";
import styles from './style'

interface Settingprop {
    navigation: any
    orientation: {
        isLandscape: boolean;
        width: number;
        height: number;
        scale: number;
        fontScale: number;
    }

}


const SettingsPage = (props: Settingprop) => {

    const { navigation, orientation } = props

    const ItemSeprator = () => <View style={styles(orientation).ItemSeprator} />

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles(orientation).mainContainer}>
                <View style={styles(orientation).SubContainer}>
                    <View style={styles(orientation).ImageContainer}>
                        <Logo source={icon.userlogo} />

                        <View>
                            <Text style={styles(orientation).Name}>Pradeep Kumar Sharma</Text>
                            <Text style={styles(orientation).Email}>pradeep.sharma@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View style={styles(orientation).Line} />


                <View style={styles(orientation).Listontainer}>
                    <Text style={styles(orientation).Subheading}>{Constant.MANAGE_ACCOUNT}</Text>

                    <SettingButton
                        title={Constant.Profile}
                        url={icon.profile}
                        ScreenToNavigate="Profile"
                        navigation={navigation} />

                    <ItemSeprator />

                    <SettingButton
                        title={Constant.Change_Password}
                        url={icon.padlock}
                        ScreenToNavigate="ChangePassword"
                        navigation={navigation}
                    />

                    <ItemSeprator />
                    <SettingButton
                        title={Constant.Communication_Preference}
                        url={icon.communication}
                        ScreenToNavigate='Communication_preferences'
                        navigation={navigation}
                    />

                    <ItemSeprator />
                    <SettingButton
                        title={Constant.Change_Language}
                        url={icon.translate}
                        ScreenToNavigate='Detail'
                        navigation={navigation}
                    />

                    <ItemSeprator />
                    <SettingButton
                        title={Constant.Sign_Out}
                        url={icon.logout}
                        ScreenToNavigate='Detail'
                        navigation={navigation}
                    />

                    <ItemSeprator />




                </View>

            </View>

        </ScrollView>

    )
}


export default SettingsPage;
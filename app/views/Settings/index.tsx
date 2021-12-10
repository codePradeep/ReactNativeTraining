import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, Alert } from "react-native";
import { SettingButton } from "../../common";
import Logo from "../../common/Logo";
import { useOrientation } from "../../config/useOrientation";



const SettingsPage = () => {

    const orientation = useOrientation();
    console.log('orientation====>', orientation)


    // const DATA = [
    //     {
    //         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    //         head: "Your courses",
    //         title: "whole-Person Health",
    //         image: require('../../assets/course_main.png'),
    //         progress: 0.5
    //     },
    //     {
    //         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    //         head: "Your Data",
    //         title: "Be Happy and Enjoy Your Life",
    //         image: require('../../assets/nutrition.jpg'),
    //         progress: 1
    //     },
    // ]
    const ItemSeprator = () => <View style={{
        marginHorizontal:orientation.width*0.05,
        height: orientation.height*0.001,
        width: orientation.width*0.9,
        backgroundColor: "rgba(0,0,0,0.2)",
    }} />




    return (
<ScrollView>
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 0.3, justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Logo />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "900", }}>Pradeep Kumar Sharma</Text>
                        <Text style={{ fontSize: 15, fontWeight: "500", }}>pradeep.sharma@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 2, width: 5000, backgroundColor: "rgba(0,0,0,0.2)", }} />


            <View style={{ flex: 0.7, }}>
                <Text style={{marginHorizontal:10,marginVertical:10,fontWeight:"900"}}>MANAGE ACCOUNT</Text>

                <SettingButton title="Profile" url={require('../../assets/profile.png')} />

                <ItemSeprator />
                <SettingButton title="Change Password" url={require('../../assets/padlock.png')} />

                <ItemSeprator />
                <SettingButton title="Communication Preference" url={require('../../assets/communication.png')} />

                <ItemSeprator />
                <SettingButton title="Change Language" url={require('../../assets/translate.png')} />

                <ItemSeprator />
                <SettingButton title="Sign Out" url={require('../../assets/logout.png')} />

                <ItemSeprator />




            </View>

        </View>

        </ScrollView>

    )
}


export default SettingsPage;
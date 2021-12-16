import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, Alert } from "react-native";
import { SettingButton } from "../../common";
import Logo from "../../common/Logo";
import { useOrientation } from "../../config/useOrientation";
import styles from './style'

interface Settingprop{
    navigation:any
    
}


const SettingsPage = (props:Settingprop) => {
    
    const {navigation}= props
    const orientation = useOrientation();
    console.log('orientation====>', orientation)

    const ItemSeprator = () => <View style={styles(orientation).ItemSeprator} />

    return (
<ScrollView>
        <View style={styles(orientation).mainContainer}>
            <View style={styles(orientation).SubContainer}>
                <View style={styles(orientation).ImageContainer}>      
                    <Logo source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}} />
                    
                    <View>
                        <Text style={styles(orientation).Name}>Pradeep Kumar Sharma</Text>
                        <Text style={styles(orientation).Email}>pradeep.sharma@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles(orientation).Line} />


            <View style={styles(orientation).Listontainer}>
                <Text style={styles(orientation).Subheading}>MANAGE ACCOUNT</Text>

                <SettingButton title="Profile" url={require('../../assets/profile.png')}  OnPress={() =>navigation.navigate('Profile')} />

                <ItemSeprator />
                <SettingButton title="Change Password" url={require('../../assets/padlock.png')}  OnPress={() =>navigation.navigate('ChangePassword')} />

                <ItemSeprator />
                <SettingButton title="Communication Preference" url={require('../../assets/communication.png')}   OnPress={() =>navigation.navigate('Communication_preferences')}/>

                <ItemSeprator />
                <SettingButton title="Change Language" url={require('../../assets/translate.png')}   OnPress={() =>navigation.navigate('Detail')}/>

                <ItemSeprator />
                <SettingButton title="Sign Out" url={require('../../assets/logout.png')}  OnPress={() =>navigation.navigate('Detail')} />

                <ItemSeprator />




            </View>

        </View>

        </ScrollView>

    )
}


export default SettingsPage;
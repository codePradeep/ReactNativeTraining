import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SettingButton } from "../../common";
import Logo from "../../common/Logo";
import icon from "../../config/Icon";
import styles from './style'

interface Settingprop{
    navigation:any
    orientation:{
        isLandscape: boolean;
        width: number;
        height: number;
        scale: number;
        fontScale: number;
    }
    
}


const SettingsPage = (props:Settingprop) => {
    
    const {navigation,orientation}= props
    
    console.log('orientation====>', orientation)

    const ItemSeprator = () => <View style={styles(orientation).ItemSeprator} />

    return (
<ScrollView   
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}
>
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

                <SettingButton title="Profile" url={icon.profile}  OnPress={() =>navigation.navigate('Profile')} />

                <ItemSeprator />
                <SettingButton title="Change Password" url={icon.padlock}  OnPress={() =>navigation.navigate('ChangePassword')} />

                <ItemSeprator />
                <SettingButton title="Communication Preference" url={icon.communication}   OnPress={() =>navigation.navigate('Communication_preferences')}/>

                <ItemSeprator />
                <SettingButton title="Change Language" url={icon.translate}   OnPress={() =>navigation.navigate('Detail')}/>

                <ItemSeprator />
                <SettingButton title="Sign Out" url={icon.logout}  OnPress={() =>navigation.navigate('Detail')} />

                <ItemSeprator />




            </View>

        </View>

        </ScrollView>

    )
}


export default SettingsPage;
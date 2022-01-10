import React, { useState } from 'react';

import { Text, View, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import { Header } from '../../common';
import { COLORS, Constant, icon } from '../../config';
import { styles } from './style';

interface NotificationSettingprops {
    isEnabled: boolean
    setIsEnabled: (value: boolean) => void
    isEnabledpromosion: boolean
    setIsEnabledpromosion: (value: boolean) => void
    toggleSwitch: any
    togglepromosionSwitch: any
    navigation:any
    
}


const NotificationSetting = (props: NotificationSettingprops) => {

    const {  isEnabled, toggleSwitch, isEnabledpromosion,   togglepromosionSwitch,navigation} = props


    return (

        <ScrollView>
            <View style={styles.maincontaner}>

            <View style={styles.headercontainer}>
                <Header headertitle={Constant.screens.notification} navigation={navigation} HeaderRightComponent={undefined} />
            </View>

                <View style={styles.conatainer}>
                    <View style={styles.noficationcontainer}>
                        <Image source={icon.notification} style={styles.icon}/>
                    <View>
                    <Text style={styles.text}>{Constant.Notificationscreen.Notifications}</Text>
                    <Text>{Constant.Notificationscreen.details}</Text>
                    </View></View>

                    <Switch
                        trackColor={{false: COLORS.lightGray1, true: COLORS.lightGray1 }}
                        thumbColor={isEnabled ? COLORS.primary : COLORS.darkGray}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={styles.conatainer}>
                    <View style={styles.noficationcontainer}>
                        <Image source={icon.notification} style={styles.icon}/>
                    <View>
                    <Text style={styles.text}>{Constant.Notificationscreen.PromotionalNotifications}</Text>
                    <Text>{Constant.Notificationscreen.details}</Text>
                    </View></View>

                    <Switch
                        trackColor={{ false: COLORS.lightGray1, true: COLORS.lightGray1 }}
                        thumbColor={isEnabledpromosion ?COLORS.primary : COLORS.darkGray}
                        onValueChange={togglepromosionSwitch}
                        value={isEnabledpromosion}
                    />
                </View>
                

            </View>
        </ScrollView>






    );
}

export default NotificationSetting;


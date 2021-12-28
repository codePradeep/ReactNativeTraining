import React, { useState } from 'react';

import { Text, View, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import { icon } from '../../config';
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

    const {  isEnabled,  isEnabledpromosion,  toggleSwitch, togglepromosionSwitch,navigation} = props





    return (

        <ScrollView>
            <View style={styles.maincontaner}>

            <View style={styles.headercontainer}>
                <View style={styles.headersubcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("SettingModel")} >
                        <View style={styles.headerleftimagecontainer}>
                            <Image source={icon.left_arrow} style={styles.headerleftimage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>NOTIFICATION</Text>
                    <View style={styles.HeaderRight} />
                </View>
            </View>

                <View style={styles.conatainer}>
                    <View style={styles.noficationcontainer}>
                        <Image source={icon.notification} style={styles.icon}/>
                    <View>
                    <Text style={styles.text}>Notifications</Text>
                    <Text>You will receive daily updates</Text>
                    </View></View>

                    <Switch
                        trackColor={{false: "orange", true: "white" }}
                        thumbColor={isEnabled ? "orange" : "white"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={styles.conatainer}>
                    <View style={styles.noficationcontainer}>
                        <Image source={icon.notification} style={styles.icon}/>
                    <View>
                    <Text style={styles.text}>Promotional Notifications</Text>
                    <Text>You will receive daily updates</Text>
                    </View></View>

                    <Switch
                        trackColor={{ false: "orange", true: "white" }}
                        thumbColor={isEnabledpromosion ? "orange" : "white"}
                        onValueChange={togglepromosionSwitch}
                        value={isEnabledpromosion}
                    />
                </View>
                

            </View>
        </ScrollView>






    );
}

export default NotificationSetting;


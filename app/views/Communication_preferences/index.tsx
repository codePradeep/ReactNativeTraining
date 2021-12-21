import React, { useState } from 'react';

import { Text, View, ScrollView, Switch } from 'react-native';
import { styles } from './style';

interface communicationprops {
    isEnabled: boolean
    setIsEnabled: (value: boolean) => void
    isEnabledsms: boolean
    setIsEnabledsms: (value: boolean) => void
    isEnabledwhatsapp: boolean
    setIsEnabledwhatsapp: (value: boolean) => void
    toggleSwitch: any
    togglesmsSwitch: any
    togglewhatsappSwitch: any
    orientation: any
}


const Communication_preferences = (props: communicationprops) => {

    const { orientation, isEnabled, setIsEnabled, isEnabledsms, setIsEnabledsms, isEnabledwhatsapp, setIsEnabledwhatsapp, toggleSwitch, togglesmsSwitch, togglewhatsappSwitch } = props





    return (

        <ScrollView>
            <View style={styles(orientation).maincontaner}>

                <Text style={styles(orientation).heading}>Communication Preferences</Text>

                <View style={styles(orientation).conatainer}>
                    <Text style={styles(orientation).text}>Voice Messages</Text>
                    <Text style={styles(orientation).enablemessage}>{isEnabled ? "Active" : "Inactive"}</Text>
                    <Switch
                        trackColor={{ false: "gray", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "blue" : "white"}

                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={styles(orientation).conatainer}>
                    <Text style={styles(orientation).text}>SMS</Text>
                    <Text style={styles(orientation).enablesms}>{isEnabledsms ? "Active" : "Inactive"}</Text>
                    <Switch
                        trackColor={{ false: "gray", true: "#81b0ff" }}
                        thumbColor={isEnabledsms ? "blue" : "white"}
                        onValueChange={togglesmsSwitch}
                        value={isEnabledsms}
                    />
                </View>
                <View style={styles(orientation).conatainer}>
                    <Text style={styles(orientation).text}>WhatsApp</Text>
                    <Text style={styles(orientation).enablewhatsapp}>{isEnabledwhatsapp ? "Active" : "Inactive"}</Text>
                    <Switch
                        trackColor={{ false: "gray", true: "#81b0ff" }}
                        thumbColor={isEnabledwhatsapp ? "blue" : "white"}
                        onValueChange={togglewhatsappSwitch}
                        value={isEnabledwhatsapp}
                    />
                </View>

            </View>
        </ScrollView>






    );
}

export default Communication_preferences;


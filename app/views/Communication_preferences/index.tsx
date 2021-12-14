import React, { useState } from 'react';

import { Text, View, Button, ScrollView, FlatList, Switch } from 'react-native';
import { useOrientation } from '../../config/useOrientation';
import { styles } from './style';




const Communication_preferences = () => {


    const orientation = useOrientation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledsms, setIsEnabledsms] = useState(false);
    const [isEnabledwhatsapp, setIsEnabledwhatsapp] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const togglesmsSwitch = () => setIsEnabledsms(previousState => !previousState);
    const togglewhatsappSwitch = () => setIsEnabledwhatsapp(previousState => !previousState);

    return (

<ScrollView>
        <View style={styles(orientation).maincontaner}>

            <Text style={styles(orientation).heading}>Communication Preferences</Text>

            <View style={styles(orientation).conatainer}>
                <Text style={styles(orientation).text}>Voice Messages</Text>
                {isEnabled? <Text style={styles(orientation).enablemessage}>Active</Text>:<Text style={styles(orientation).enablemessage}>Inactive</Text> }  
                <Switch
                    trackColor={{ false: "gray", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "blue" : "white"}
                    
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={styles(orientation).conatainer}>
            <Text style={styles(orientation).text}>SMS</Text>
              {isEnabledsms? <Text style={styles(orientation).enablesms}>Active</Text>:<Text style={styles(orientation).enablesms}>Inactive</Text> }  
                <Switch
                    trackColor={{ false: "gray", true: "#81b0ff" }}
                    thumbColor={isEnabledsms ? "blue" : "white"}
                    onValueChange={togglesmsSwitch}
                    value={isEnabledsms}
                />
            </View>
            <View style={styles(orientation).conatainer}>
            <Text style={styles(orientation).text}>WhatsApp</Text>
                {isEnabledwhatsapp? <Text style={styles(orientation).enablewhatsapp}>Active</Text>:<Text style={styles(orientation).enablewhatsapp}>Inactive</Text> }  
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


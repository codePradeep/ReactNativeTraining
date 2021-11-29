import React, { useEffect } from 'react';
import { View, Text,Button} from "react-native";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import styles from './style';



const Pushnotification=()=>{

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);



async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

 

const checkToken = async () => {
 const fcmToken = await messaging().getToken();
 if (fcmToken) {
    console.log(fcmToken);
    Alert.alert(fcmToken);
 } 
}


   
    return(
        <View style={styles.Container}>
            
            <Text style={styles.paragraph}> Push Notification Demo </Text>
            <Button title="Get FCM Token" onPress={()=>checkToken()} />
            <Button title="Request UserPermission" onPress={()=>requestUserPermission()} />


            
        </View>
    )
}
export default Pushnotification;
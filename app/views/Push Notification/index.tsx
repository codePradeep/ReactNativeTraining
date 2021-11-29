import React, { useEffect } from 'react';
import { View, Text,Button} from "react-native";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import styles from './style';
import NotificationController from './NotificationController.android';





const Pushnotification=()=>{

    
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
     //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //  console.log(remoteMessage)
     
      
    });

    return unsubscribe;
  }, []);




 

const checkToken = async () => {
 const fcmToken = await messaging().getToken();
 if (fcmToken) {
    console.log(fcmToken);
    Alert.alert(fcmToken);
 } 
}


   
    return(
       
        <View style={styles.Container}>
             <NotificationController />
            <Text style={styles.paragraph}> Push Notification Demo </Text>
            <Button title="Get FCM Token" onPress={()=>checkToken()} />
           


            
        </View>
    )
}
export default Pushnotification;
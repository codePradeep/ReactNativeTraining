import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationController from '../../controllers/NotificationController.android';

const Pushnotification = () => {
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      // console.log('Message handled in the background!', remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log(remoteMessage)
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
  return (
    <View style={styles.Container}>
      <NotificationController />
      <Text style={styles.paragraph}> Push Notification With Firebasse Demo  </Text>
      <Button title="Get FCM Token" onPress={() => checkToken()} />
    </View>
  )
}
const styles = StyleSheet.create({

  Container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: 'center'

  },
  paragraph: {
      textAlign: "center",
      fontSize: 22,
      color: "black",
      fontWeight: 'bold',

  },
})
export default Pushnotification;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Routenavigation from './app/routes/navigation';
import messaging from '@react-native-firebase/messaging';
import NotificationController from './app/controllers/NotificationController.android';
import store from './app/redux/store';



const App = () => {

  NotificationController()
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








  return (
    
    <Provider store={store}>
     
     <Routenavigation />
 
     </Provider>
     
  );
};

export default App;
  


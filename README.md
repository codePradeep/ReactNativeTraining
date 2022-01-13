# Push Notification
# Installation
This module requires that the @react-native-firebase/app module is already setup and installed. To install the "app" module,
```bash
# Install & setup the app module
npm install --save @react-native-firebase/app

# Install the messaging module
npm i @react-native-firebase/messaging
```

# For Android:
- first, add the google-services plugin as a dependency inside your /android/build.gradle file.
```bash
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.10'
    // Add me --- /\
  }
}
```

- Lastly, execute the plugin by adding the following to your /android/app/build.gradle file:

```bash
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```
- Finally, add your Google-services.json to your Android app.

# Firebase Cloud Messaging

Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that allows you to send messages reliably for free.
Type of notifications 
Firebase Cloud Messaging will help you send messages to all real iOS and Android devices. The message that will be displayed in the app will depend on the action.

There are three types of notifications: Foreground, Background, and Quit. Depending on the state, the application will display certain message.

- Foreground: When the application is open and in view.
- Background: When the application is open in the background (minimized). This typically occurs when the user has pressed the "home" button on the device or when they have switched to another app via the app switcher.
- Quit: When the device is locked, or the application is not active or running. The user can quit an app by "swiping it away" via the app switcher UI on the device.

# Foreground state messages

- By default rnfirebase not supporting displaying notification popup when app is in foreground state as they mentioned here. So push notification pop up only displayed when app is in background state or closed.

So if you want to display push notification on foreground mode also then you have to use extra library which will be display fired push notification as local notification as mention in their documentation.

If the RemoteMessage payload contains a notification property when sent to the onMessage handler, the device will not show any notification to the user. Instead, you could trigger a local notification or update the in-app UI to signal a new notification.

So as a solution you can use react-native-push-notification to fire push notification when app in foreground.

To do so, just install it by command :
```bash
npm i react-native-push-notification
```

For android you don't need to follow any native installation steps just install library by this command and then you can fire local push notification as below : Create a file called NotificationController.android.js :
```bash
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const NotificationController = (props) => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      PushNotification.localNotification({
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
      });
    });
    return unsubscribe;
  }, []);

  return null;
};

export default NotificationController;

```
Now, when app is in foreground state and if onMessage receive any message from firebase then PushNotification will fire local notification.

Now, call <NotificationController /> in you Home screen or App initial routing file.



then Run the Program

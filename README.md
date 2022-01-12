# ReactNativeTraining
## we need to install the react-native-google-signin package using the following command: 
  ``` npm install @react-native-google-signin/google-signin```
### The react-native-google-signin package is used to implement Google auth functions in the React Native app.
After Installing it we need to do some configurations .
1. First, open the Firebase console and open your project, then go to Project Settings, and here you need to add the <b>SHA-1</b> certificate for your android app.
For Genrating SHA-1 key you need to create keystore file 
#### for Windows user the keystore file will be genrated in jdk in file in path:
```C:\Program Files\Java\jdk1.8.0_241\bin>```
</br>
Now open cmd with admin and enter the following command:

```keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000``` </br>
this command will create the file named <b>my-upload-key.keystore </b></br>
Now  for SHA1 key enter following command in same path :
```keytool -keystore my-upload-key.keystore -list -v ```

now copy the the SHA1 key and paste it on firebase console and download *Google-services.jason* 
file and paste it on  </br>
#### path:projectname/android/app
also copy the keystore file and paste it on same 
####path :projectname/android/app
after that make some changes :
1. Update android/build.gradle 
```
 dependencies {
        classpath 'com.android.tools.build:gradle:4.2.1' // <--- use this version or newer
        classpath 'com.google.gms:google-services:4.3.10' // <--- use this version or newer
    }```
2.Update android/app/build.gradle 
```dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.facebook.react:react-native:+"
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.0.0' // <-- add this; newer versions should work too
}
apply plugin: 'com.google.gms.google-services' // <--- this should be the last line
``
### ---also change in android/app/build.gradle
```
```
signingConfigs {
        debug {
            storeFile file('my-upload-key.keystore')
            storePassword '######'   //<--- this is your password which you enter during the making                       						of keystore file
            keyAlias 'my-key-alias'
            keyPassword '######'
        }
    }
```
### now-- open the firebase console go to Progect Setting ->authentication 
Enable google  and save and copy the <b>Web client ID</b> from Web SDK configuration 
now 

#### paste the Web client ID googlesignin config

-------------------------------------------------------------------------------------------------------------------
```
import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

const signIn = async () => {

    GoogleSignin.configure({
        scopes: [], // [Android] what API you want to access on behalf of the user, default is email and profile
        webClientId: '# enter your Web client ID  here #', 
        offlineAccess: true,
    });

    console.log("button clicked")
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userinfo=>", userInfo)
    }

    catch (error) {

        console.log(error)

        if (error === statusCodes.SIGN_IN_CANCELLED) {

        } else if (error === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
                }
    }
};

const GoogleLogin = () => {


    return (
        <View style={styles.Container}>
            <Text style={styles.paragraph}> Sign In with Google Account </Text>
           
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => signIn()}
            />

        </View>
    )
}
export default GoogleLogin
```

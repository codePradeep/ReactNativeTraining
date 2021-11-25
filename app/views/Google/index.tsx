import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';



const signIn = async () => {

    GoogleSignin.configure({
        scopes: [], // [Android] what API you want to access on behalf of the user, default is email and profile
        webClientId: '240602027263-1lkogv3s3mvj7eo39n036tp076ao12ga.apps.googleusercontent.com', 
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
        } else {
            // some other error happened
        }
    }
};
// TO GET CURRERNT USER INFO


//   const getCurrentUserInfo = async () => {
//     try {
//       const userInfo = await GoogleSignin.signInSilently();
//       setuserInfo({ userInfo });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//         // user has not signed in yet
//       } else {
//         // some other error
//       }
//     }
//   };


// TO GET IS USER SIGNED IN  

//  const isSignedIn = async () => {
//     const isSignedIn = await GoogleSignin.isSignedIn();
//     setloggedIn({ isLoginScreenPresented: !isSignedIn });
//   };

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
import React from 'react';
import { View, Text, Button } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { Profile } from "react-native-fbsdk-next";

// ...




const FacebookSignIn = () => {


    // TO GET CURRENT PROFILE DETAILS

    // const currentProfile = Profile.getCurrentProfile().then(
    //     function (currentProfile) {
    //         if (currentProfile) {
    //             console.log("The current logged user is: " +
    //                 currentProfile.name
    //                 + ". His profile id is: " +
    //                 currentProfile.userID
    //             );
    //         }
    //     } 
    // );

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <LoginButton
                onLoginFinished={(error, result) => {
                    if (error) {
                        console.log("login has error: ", error);
                    } else if (result.isCancelled) {
                        console.log("login is cancelled.");
                    }
                    else {
                        AccessToken.getCurrentAccessToken().then((data) => { console.log(data) })
                    }
                }
                }
                onLogoutFinished={() => console.log("logout.")} />


        </View>
    );
}

export default FacebookSignIn;
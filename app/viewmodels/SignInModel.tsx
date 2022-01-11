import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { EmailValidate, PasswordValidate } from "../config/validation";
import SignIn from "../views/Sign In";
import { AccessToken, LoginManager, Profile } from "react-native-fbsdk-next";

interface SignInModelprops {
    navigation: any
}

const SignInModel = (props: SignInModelprops) => {
    const { navigation } = props
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [isvalidEmail, setisvalidEmail] = useState(true)
    const [isvalidPassword, setisvalidPassword] = useState(true)
    const [visible,setvisible]=useState(true)
    const [isEnabled, setIsEnabled] = useState(false);
    const firstRender = useRef(true)

useEffect(() => {
    if (firstRender.current) {
        firstRender.current = false
        return
      }
      submit()
}, [Email,password])

const submit = () => {
    let validate = EmailValidate(Email)
    setisvalidEmail(validate)
    validate = PasswordValidate(password)
    setisvalidPassword(validate)
  }
const toggleSwitch = () => setIsEnabled(previousState => !previousState);


const signInwithGoogle = async () => {

    GoogleSignin.configure({
        scopes: [], // [Android] what API you want to access on behalf of the user, default is email and profile
        webClientId: '240602027263-1lkogv3s3mvj7eo39n036tp076ao12ga.apps.googleusercontent.com', 
        offlineAccess: true,
    });
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

    
    const SigninWithFacebook = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(

            
          function(result) {
            if (result.isCancelled) {
              console.log("==> Login cancelled");
            } else {
              console.log("==> Login success with permissions: " ,result.grantedPermissions?.toString());
              AccessToken.getCurrentAccessToken().then((data) => { console.log(data) })
            }
           },
           function(error) {
            console.log("==> Login fail with error: " + error);
           }
         );
      }


    return (
        <SignIn
            navigation={navigation}
            isvalidEmail={isvalidEmail}
            isvalidPassword={isvalidPassword}
            Emailinpute={(text: string) => setEmail(text)}
            EnterPassword={(text: string) => setpassword(text)}
            visible={visible}
            setvisible={setvisible}
            isEnabled={isEnabled}
            toggleSwitch={toggleSwitch}
            signInwithGoogle={signInwithGoogle}
            SigninWithFacebook={SigninWithFacebook}
        />
    )
}
export default SignInModel
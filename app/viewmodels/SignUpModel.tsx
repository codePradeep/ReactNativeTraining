import React, { useEffect, useRef, useState } from "react";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import {  Screen, SigninWithFacebook, signInwithGoogle } from "../config";
import { EmailValidate, PasswordValidate,UsernameValidation } from "../config/validation";
import SignUp from "../views/Sign Up";

interface SignInModelprops {
    navigation: any
}

const SignUpModel = (props: SignInModelprops) => {
    const { navigation } = props
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [isvalidEmail, setisvalidEmail] = useState(false)
    const [isvalidusername, setisvalidusername] = useState(false)
    const [isvalidPassword, setisvalidPassword] = useState(true)
    const [visible,setvisible]=useState(true)
    const [isEnabled, setIsEnabled] = useState(false);
    const firstRender = useRef(true)



const submit = () => {
    setisvalidusername(UsernameValidation(username))
    setisvalidEmail(EmailValidate(Email))
    setisvalidPassword(PasswordValidate(password))
   return isvalidEmail==true&&isvalidPassword==true &&isvalidusername==true ? navigation.navigate(Screen.DrawerNavigation):null
    
  }

const toggleSwitch = () => setIsEnabled(previousState => !previousState);

const SigninWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(

      function(result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } else {
         // console.log("==> Login success with permissions: " ,result.grantedPermissions?.toString());
          navigation.navigate(Screen.DrawerNavigation)
          AccessToken.getCurrentAccessToken().then((data) => { console.log(data) })
        }
       },
       function(error) {
        console.log("==> Login fail with error: " + error);
       }
     );
  }

    return (
        <SignUp
            navigation={navigation}
            isvalidEmail={isvalidEmail}
            isvalidPassword={isvalidPassword}
            isvalidusername={isvalidusername}
            Emailinpute={(text: string) => setEmail(text)}
            EnterPassword={(text: string) => setpassword(text)}
            UsernameInput={(text: string) => setusername(text)}
            visible={visible}
            setvisible={setvisible}
            isEnabled={isEnabled}
            toggleSwitch={toggleSwitch}
            signInwithGoogle={signInwithGoogle}
            SigninWithFacebook={SigninWithFacebook}
            submit={submit}
        />
    )
}
export default SignUpModel
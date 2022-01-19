
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import { Screen, SigninWithFacebook, signInwithGoogle } from "../config";
import { EmailValidate, PasswordValidate } from "../config/validation";
import SignIn from "../views/Sign In";


interface SignInModelprops {
  navigation: any
}

const SignInModel = (props: SignInModelprops) => {
  const { navigation } = props
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isvalidEmail, setisvalidEmail] = useState(false)
  const [isvalidPassword, setisvalidPassword] = useState(true)
  const [visible, setvisible] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);

  const firstRender = useRef(true)

  // useEffect(() => {
  //     if (firstRender.current) {
  //         firstRender.current = false
  //         return
  //       }
  //       submit()
  // }, [Email,password])

  useEffect(() => {
    isvalidEmail == true && isvalidPassword == true ? navigation.navigate(Screen.DrawerNavigation) : null
  }, [isvalidEmail, isvalidPassword])

  const submit = (Email: string, password: string) => {
    setisvalidEmail(EmailValidate(Email))
    setisvalidPassword(PasswordValidate(password))
    //  isvalidEmail==true&&isvalidPassword==true ? navigation.navigate(Screen.DrawerNavigation):null
  }

  // const navigate= async()=>{
  //  await(isvalidEmail==true&&isvalidPassword==true ? navigation.navigate(Screen.DrawerNavigation):null)
  // }



  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const SigninWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(

      function (result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } else {
          // console.log("==> Login success with permissions: " ,result.grantedPermissions?.toString());
          navigation.navigate(Screen.DrawerNavigation)
          AccessToken.getCurrentAccessToken().then((data) => { console.log(data) })
        }
      },
      function (error) {
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
      submit={() => submit(Email, password)}
    />
  )
}
export default SignInModel
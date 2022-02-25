import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import React, { useEffect, useRef, useState } from "react";
import { EmailValidate, PasswordValidate } from "../config/constants/Validation";
import Loginpage from '../views/Login/Loginpage'
interface loginmodelprops {
  navigation: any
}
const Loginmodel = (props: loginmodelprops) => {
  const { navigation } = props

  const [visible, setvisibe] = useState(false)
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isvalidEmail, setisvalidEmail] = useState(true)
  const [isvalidPassword, setisvalidPassword] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);

  const email = useRef(false)
  const passwordA = useRef(false)

  const submit = (Email: string, password: string) => {
    email.current = EmailValidate(Email)
    passwordA.current = PasswordValidate(password)
    setisvalidEmail(email.current)
    setisvalidPassword(passwordA.current)
    email.current == true && passwordA.current == true ? navigation.navigate("Roottab") : null
  }

  
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

  return (
    <Loginpage
      navigation={navigation}
      visible={visible}
      setvisibe={setvisibe}
      isvalidEmail={isvalidEmail}
      isvalidPassword={isvalidPassword}
      Emailinpute={(text: string) => setEmail(text)}
      EnterPassword={(text: string) => setpassword(text)}
      isEnabled={isEnabled}
      submit={() => submit(Email, password)}
      signIn={signIn}
    />
  )
}
export default Loginmodel;
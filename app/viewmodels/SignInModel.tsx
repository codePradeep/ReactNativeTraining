
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { SigninWithFacebook, signInwithGoogle } from "../config";
import { EmailValidate, PasswordValidate } from "../config/validation";
import SignIn from "../views/Sign In";


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
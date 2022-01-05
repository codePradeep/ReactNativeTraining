import React, { useEffect, useState } from "react";
import { View } from "react-native";
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
    const [isvalidPassword, setisvalidPassword] = useState(false)
    const [visible,setvisible]=useState(true)
    const [isEnabled, setIsEnabled] = useState(false);

useEffect(() => {
    setisvalidEmail(EmailValidate(Email))
    setisvalidPassword(PasswordValidate(password))
}, [Email,password])

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
        />
    )
}
export default SignInModel
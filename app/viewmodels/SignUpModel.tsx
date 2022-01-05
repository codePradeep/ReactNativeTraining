import React, { useEffect, useState } from "react";
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
    const [isvalidPassword, setisvalidPassword] = useState(false)
    const [visible,setvisible]=useState(true)
    const [isEnabled, setIsEnabled] = useState(false);

useEffect(() => {
    setisvalidEmail(EmailValidate(Email))
    setisvalidPassword(PasswordValidate(password))
    setisvalidusername(UsernameValidation(username))
}, [Email,password,username])

const toggleSwitch = () => setIsEnabled(previousState => !previousState);


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
        />
    )
}
export default SignUpModel
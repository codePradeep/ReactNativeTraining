import React, { useEffect, useRef, useState } from "react";
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
    const [isvalidEmail, setisvalidEmail] = useState(true)
    const [isvalidusername, setisvalidusername] = useState(true)
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

}, [Email,password,username])


const submit = () => {

    let validate = EmailValidate(Email)
    setisvalidEmail(validate)
    validate = PasswordValidate(password)
    setisvalidPassword(validate)
    validate = UsernameValidation(username)
    setisvalidusername(validate)
    
  }



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
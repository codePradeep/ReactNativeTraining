import React, { memo, useRef, useState } from "react";
import { constants, Helper } from "../config";
import { EmailValidate, PasswordValidate, UsernameValidation } from "../config/constants/Validation";
import Register from "../views/Register";
interface loginmodelprops {
  navigation: any
}
const RegistrModel = (props: loginmodelprops) => {
  const { navigation } = props

  const [visible, setvisibe] = useState(false)
  const [selected, setselected] = useState(false)
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Username, setUsername] = useState("");
  const [isvalidEmail, setisvalidEmail] = useState(true)
  const [isvalidPassword, setisvalidPassword] = useState(true)
  const [isvalidUsername, setisvalidUsername] = useState(true)
  const [defaultitem, setdefaultitem] = useState(0);


  const email = useRef(false)
  const passwordA = useRef(false)
  const username = useRef(false)


  const submit = (Email: string, password: string, Username: string) => {

    email.current = EmailValidate(Email)
    passwordA.current = PasswordValidate(password)
    username.current = UsernameValidation(Username)

    setisvalidEmail(email.current)
    setisvalidUsername(username.current)
    setisvalidPassword(passwordA.current)

    email.current == true && passwordA.current == true && username.current == true ?
      navigation.navigate("Roottab") : null
  }
  return (
    <Register


      {...{
        navigation,
        visible,
        setvisibe,
        selected,
        setselected,
        isvalidEmail,
        isvalidPassword,
        isvalidusername: isvalidUsername,
        register: constants.register_options,
        defaultitem,
        setdefaultitem,
        Emailinpute: (text: string) => setEmail(text),
        EnterPassword: (text: string) => setpassword(text),
        EnterUserName: (text: string) => setUsername(text),
        submit: () => submit(Email, password, Username),
        GoogleSignin: Helper.GooglesignIn,
        Facebooklogin: Helper.SigninWithFacebook
      }}
    />
  )
}
export default memo( RegistrModel);
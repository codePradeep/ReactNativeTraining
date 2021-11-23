import React, { useState } from "react";
import { isValidConfirmPassword, isValidEmailID, isValidPasswordInpute, isValidUserName } from "../config/FormValidation";
import Signup from "../views/Signup/Signup";
interface Signupmodelprops {
  navigation: any
  Email: string



}
const Signupmodel = (props: Signupmodelprops) => {

  const { navigation, ...rest } = props


  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidUser, setisValidUser] = useState(true);
  const [isValidPassword, setisValidPassword] = useState(true);
  const [isPasswordSame, setisPasswordSame] = useState(true);

  const submit = () => {

    let validate = isValidEmailID(Email)
    setisValidEmail(validate)
    validate = isValidUserName(Username)
    setisValidUser(validate)
    validate = isValidPasswordInpute(password)
    setisValidPassword(validate)
    validate = isValidConfirmPassword(cpassword, password)
    setisPasswordSame(validate)
  }



  return (
    <Signup

      navigation={navigation}
      submit={submit}

      usernameinput={(text: string) => setUsername(text)}
      emailinpute={(text: string) => setEmail(text)}
      re_enterPassword={(text: string) => setcpassword(text)}
      enterPassword={(text: string) => setpassword(text)}
      isValidEmail={isValidEmail}
      isValidUser={isValidUser}
      isValidPassword={isValidPassword}
      isPasswordSame={isPasswordSame}

      {...rest} />
  )
}
export default Signupmodel;
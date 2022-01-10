import React, { useState } from "react";
import { EmailValidate } from "../config/validation";
import PasswordRecovery from "../views/Password Recovery";
interface loginmodelprops {
    navigation: any
}
const PasswordRecoveryModel = (props: loginmodelprops) => {
    const { navigation } = props
    const [isvalid, setisvalid] = useState(true)
    const validate = (text: string) => {
      setisvalid(EmailValidate(text))
        }
    

   
    return (
        <PasswordRecovery
            navigation={navigation}
            isvalid={isvalid}
            setisvalid={setisvalid}
            validate={validate}
        />
    )
}
export default PasswordRecoveryModel;
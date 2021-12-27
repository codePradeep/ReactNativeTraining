import React, { useState } from "react";
import PasswordRecovery from "../views/Password Recovery";
interface loginmodelprops {
    navigation: any
}
const PasswordRecoveryModel = (props: loginmodelprops) => {

    const [isvalid, setisvalid] = useState(true)
    const validate = (text: string) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");

            setisvalid(false);
        }
        else {
            setisvalid(true)
        }
    }

    const { navigation } = props
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
import React, { useState } from "react";
import OTP from "../views/OTP";
interface loginmodelprops {
    navigation: any
}
const OtpModel = (props: loginmodelprops) => {
    const { navigation } = props
    const [Email, setEmail] = useState("Pradeep.sharma1@successive.tech")
    return (
        <OTP
            navigation={navigation}
            Email={Email}
        />
    )
}
export default OtpModel;
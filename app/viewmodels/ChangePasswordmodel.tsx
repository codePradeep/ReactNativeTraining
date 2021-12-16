import React from "react";
import ChangePassword from "../views/ChangePassword";

interface ChangePasswordprops{
    navigation:any
}

const ChangePasswordModel=(props:ChangePasswordprops)=>{
    const {navigation}=props
    return(
        <ChangePassword navigation={navigation} />

    )
}
export default ChangePasswordModel
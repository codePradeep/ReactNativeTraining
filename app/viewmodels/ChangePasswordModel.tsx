import React from "react";
import ChangePassword from "../views/Change Password";
interface loginmodelprops{
    navigation:any
}
const ChangePasswordModel =(props:loginmodelprops)=>{
    const {navigation}=props
    return(
        <ChangePassword navigation={navigation} />
    )
}
export default ChangePasswordModel;
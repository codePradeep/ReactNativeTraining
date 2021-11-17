import React from "react";
import  Loginpage from '../views/Login/Loginpage'
interface loginmodelprops{
    navigation:any
}
const Loginmodel =(props:loginmodelprops)=>{
    const {navigation}=props
    return(
        <Loginpage navigation={navigation} />
    )
}
export default Loginmodel;
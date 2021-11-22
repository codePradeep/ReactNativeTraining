import React,{useState} from "react";
import  Loginpage from '../views/Login/Loginpage'
import Signup from "../views/Signup/Signup";
interface Signupmodelprops{
    navigation:any
    

}
const Signupmodel = (props:Signupmodelprops)=>{
    
    



    const {navigation}=props
    
    return(
        <Signup navigation={navigation}/>
    )
}
export default Signupmodel;
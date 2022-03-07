import React from "react";
import { View } from "react-native";
import LoginScreen from "../views/Login";

interface LoginViewModelprops{
    navigation:any
}
const LoginViewModel=(props:LoginViewModelprops)=>{
    const {navigation}=props
    
    return(
        <LoginScreen 
        {...{
            navigation
        }}
        
        />
    )
}

export default LoginViewModel


import React,{useState} from "react";
import  Loginpage from '../views/Login/Loginpage'
interface loginmodelprops{
    navigation:any
}
const Loginmodel =(props:loginmodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    return(
        <Loginpage
         navigation={navigation} 
         visible={visible}
         setvisibe={setvisibe}
         
         />
    )
}
export default Loginmodel;
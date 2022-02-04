import React,{useState} from "react";
import selectedTheme from "../config/Helper";
import  Loginpage from '../views/Login/Loginpage'
import ProfileScreen from "../views/Profile";
interface profilemodelprops{
    navigation:any
}
const ProfileModel =(props:profilemodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
  
  const trigger=()=>{
    console.log(selectedTheme)
    if (visible==true){
        selectedTheme(true)
    }
    else{
        selectedTheme(false)
    }
  }  


    return(
        <ProfileScreen
         navigation={navigation} 
         visible={visible}
         setvisibe={()=>trigger()}
         
         />
    )
}
export default ProfileModel;
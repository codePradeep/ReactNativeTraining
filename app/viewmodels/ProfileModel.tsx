import React,{useState} from "react";
import  Loginpage from '../views/Login/Loginpage'
import ProfileScreen from "../views/Profile";
interface profilemodelprops{
    navigation:any
}
const ProfileModel =(props:profilemodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [render, setrender] = useState(false)
  


    return(
        <ProfileScreen
            navigation={navigation}
            visible={visible} setvisibe={undefined}  
            setrender ={setrender}
            render ={render} //  setvisibe={()=>trigger()}
         
         />
    )
}
export default ProfileModel;
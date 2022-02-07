import React,{useState} from "react";
import InstrctorProfileScreen from "../views/Instructor Profile";

interface InstructorProfileModelprops{
    navigation:any
}
const InstructorProfileModel =(props:InstructorProfileModelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    return(
        <InstrctorProfileScreen
         navigation={navigation} 
         visible={visible}
         setvisibe={setvisibe}
         
         />
    )
}
export default InstructorProfileModel;
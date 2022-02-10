import React,{useState} from "react";
import { dummyData } from "../config";
import CorselChapter from "../views/Course Chapter";
import  Loginpage from '../views/Login/Loginpage'
interface Coursemodlprops{
    navigation:any
}
const CourseModel =(props:Coursemodlprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    return(
        <CorselChapter
            navigation={navigation} 
            flatlistdata={dummyData.courses_list_2}
            DATA={dummyData.course_details}       
         
         />
    )
}
export default CourseModel;
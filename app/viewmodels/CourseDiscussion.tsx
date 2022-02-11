import React,{useState} from "react";
import { dummyData } from "../config";
import CourseDiscussion from "../views/Course Discussion";
import  Loginpage from '../views/Login/Loginpage'
interface CourseDiscussionprops{
    navigation:any
}
const CourseDiscussionModel =(props:CourseDiscussionprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    return(
        <CourseDiscussion
         navigation={navigation} 
         Data={dummyData.course_details.discussions}
         
         
         />
    )
}
export default CourseDiscussionModel;
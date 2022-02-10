import React,{useState} from "react";
import CourseFiles from "../views/Course Files";
interface CoursefilesModelprops{
    navigation:any
}
const CoursefilesModel =(props:CoursefilesModelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    return(
        <CourseFiles
         navigation={navigation} 
       
         
         />
    )
}
export default CoursefilesModel;
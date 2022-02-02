import React,{useState} from "react";
import { dummyData } from "../config";
import Corselisting from "../views/Course Listing";
interface Corselistinprops{
    navigation:any
}
const CourseListingModel =(props:Corselistinprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    return(
        <Corselisting
            navigation={navigation} DATA={dummyData.courses_list_2}        
         
         />
    )
}
export default CourseListingModel;
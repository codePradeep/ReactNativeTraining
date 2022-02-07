import React,{useState} from "react";
import { constants, dummyData } from "../config";
import Corselisting from "../views/Course Listing";
interface Corselistinprops{
    navigation:any
}
const CourseListingModel =(props:Corselistinprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [defaultitem, setdefaultitem] = useState(1);
    const [defaultclasslevel, setdefaultclasslevel] = useState(0);
    const [defaultcreatedwithin, setdefaultcreatedwithin] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <Corselisting
            navigation={navigation} DATA={dummyData.courses_list_2}    
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}   
            Classtypedata={constants.class_types} 
            defaultitem={ defaultitem}
            setdefaultitem={setdefaultitem}
            ClassLevel={constants.class_levels}
            defaultclasslevel={defaultclasslevel}
            setdefaultclasslevel={setdefaultclasslevel}
            CreatedWithin={constants.created_within}
            defaultcreatedwithin={defaultcreatedwithin}
            setdefaultcreatedwithin={setdefaultcreatedwithin}
         
         />
    )
}
export default CourseListingModel;
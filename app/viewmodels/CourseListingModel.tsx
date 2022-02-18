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
    const [classleveldata,setclassleveldata]=useState("")
    const [duration, setduration] = useState([])
    const [modalVisible, setModalVisible] = useState(false);

    let menudata = dummyData.courses_list_2
    // const SearchData = menu.filter((a:any) =>a.name.toLowerCase().match(searchText.toLowerCase())).map((a:any)=>a);

console.log("defaultclasslevel=>",defaultclasslevel)
  
if (classleveldata != "") {
        menudata = menudata.filter((a:any) => a.clsss_level == classleveldata)
    }
    //  console.log("menudata=>",menudata.map(a=>a))

    // if (defaulttime != "") {
    //     menudata = menudata.filter((a:any) => a.time == defaulttime)
    // }
    if (duration.length != 0) {
        menudata = menudata.filter((a:any) => a.duration > duration[0] && a.duration < duration[1])
    }
    
    // if (price.length != 0) {
    //     menudata = menudata.filter((a:any) => a.price > price[0] && a.price < price[1])
    // }
    const resultdata=menudata.length
 console.log("resultdata=>",resultdata)

    const Resetfilter = () => {
        console.log("reseted filter")
        setclassleveldata("")
        setduration([])
       
    }



    return(
        <Corselisting
            navigation={navigation}
            DATA={menudata}    
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
            resultdata={resultdata}
            setdefaultcreatedwithin={setdefaultcreatedwithin}
            setclassleveldata={setclassleveldata}
            setduration={setduration}
            Resetfilter={Resetfilter}
         
         />
    )
}
export default CourseListingModel;
import React,{useState} from "react";
import { constants,  } from "../config";
import dummyData from "../config/constants/dummyData";
import Corselisting from "../views/Course Listing";
interface Corselistinprops{
    navigation:any
    route:any
}
const CourseListingModel =(props:Corselistinprops)=>{
    const {navigation,route}=props
     const { Header } = route.params;
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
        
         {...{
            Header,
            navigation,
            DATA:menudata,   
            modalVisible,
            setModalVisible  , 
            Classtypedata:constants.class_types ,
            defaultitem,
            setdefaultitem,
            ClassLevel:constants.class_levels,
            defaultclasslevel,
            setdefaultclasslevel,
            CreatedWithin:constants.created_within,
            defaultcreatedwithin,
            resultdata,
            setdefaultcreatedwithin,
            setclassleveldata,
            setduration,
            Resetfilter,
         }}
         />
    )
}
export default CourseListingModel;
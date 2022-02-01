import React,{useState} from "react";
import CategoryScreen from "../views/Category";
import SearchScreen from "../views/Search";
interface SearchModelprops{
    navigation:any
}
const SearchModel =(props:SearchModelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [defaultitem, setdefaultitem] = useState(1);
    return(
        <SearchScreen
         navigation={navigation} 
         visible={visible}
         setvisibe={setvisibe}
         defaultitem={ defaultitem}
            setdefaultitem={setdefaultitem}
         
         />
    )
}
export default SearchModel;
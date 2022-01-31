import React,{useState} from "react";
import CategoryScreen from "../views/Category";
interface loginmodelprops{
    navigation:any
}
const CategoryModel =(props:loginmodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [defaultitem, setdefaultitem] = useState(1);
    return(
        <CategoryScreen
         navigation={navigation} 
         visible={visible}
         setvisibe={setvisibe}
         defaultitem={ defaultitem}
            setdefaultitem={setdefaultitem}
         
         />
    )
}
export default CategoryModel;
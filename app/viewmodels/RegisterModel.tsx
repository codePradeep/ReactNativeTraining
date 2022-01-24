import React,{useState} from "react";
import Register from "../views/Register";
interface loginmodelprops{
    navigation:any
}
const RegistrModel =(props:loginmodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [selected,setselected]=useState(false)
    return(
        <Register

         navigation={navigation} 
         visible={visible}
         setvisibe={setvisibe}
         selected={selected}
         setselected={setselected}

         />
    )
}
export default RegistrModel;
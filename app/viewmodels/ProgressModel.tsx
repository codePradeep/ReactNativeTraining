import React from "react";
import { useOrientation } from "../config/useOrientation";
import Progress from "../views/Progress";


interface Progressprops{
    navigation:any
}

const ProgressModel=(props:Progressprops)=>{
    const orientation=useOrientation()
    const {navigation}=props
    return(
        <Progress 
        navigation={navigation}
        orientation={orientation}
         />

    )
}
export default ProgressModel
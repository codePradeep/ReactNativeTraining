import React from "react";
import { View,TextInput } from "react-native";
import styles from './style'
interface progressbarprops{
    containerstyle:any
    progress:any
}
 const ProgressBar = (props:progressbarprops)=>{
   const {containerstyle,progress} =props;
    return(
        <View style={[styles.container,{...containerstyle}]}>
        <View  style={[styles.subcontainer,{width:progress}]}/>

        </View>
    )

}


export default ProgressBar
import React from "react";

import { Text, View } from "react-native";
import styles from "./style";

interface itemprops{
    title:string
    data:string
    separator:boolean
}

const ItemData=(props:itemprops)=>{

    const {title,data,separator}=props

    return(
        <View style={{flex:1}} > 
      
      <View style={styles.OUTPUTECONTAINER}>
      <Text style={styles.SettingText}>{title}</Text>
      <Text style={styles.SettingoutputText}>{data}</Text>
      </View>
      
    
     {separator? <View style={styles.Itemsaperator}/>:null}
    </View>

    )
}

export default ItemData
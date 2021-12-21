import React from "react"
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Constant } from "../../config"
import Details from "../../views/Details"
import styles from "./style"

interface ProgressButton {

    title:string
    orientation: any
    navigation:any
   
  
  }

const ProgressButton=(props:ProgressButton)=>{
    const {navigation}= props
    

return (
   
    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
        <Text style={styles(props.orientation).title}>{props.title}</Text>
        <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity
                onPress={() =>navigation.navigate('Detail') }
                style={styles(props.orientation).Button}
            >
                <Text style={styles(props.orientation).buttontitle}>{Constant.View_Details}</Text>
            </TouchableOpacity>
           
        </View>
        
    </View>
    

   
)
}

export default ProgressButton


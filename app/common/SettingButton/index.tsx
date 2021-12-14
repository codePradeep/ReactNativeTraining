import React from "react"
import { TouchableOpacity, View, Image, Alert, Text } from "react-native"
import { useOrientation } from "../../config/useOrientation";
import styles from "./style"

interface buttonprops{
   title:string
   url:number
   OnPress:any
}

const SettingButton = (props: buttonprops) => {
  const orientation = useOrientation();
  



  return (
   
      <TouchableOpacity 
      style={styles(orientation).button}
      onPress={props.OnPress} >


                <View style={styles(orientation).container}>
                    <Image source={props.url} style={styles(orientation).image} />
                    <Text style={styles(orientation).title}> {props.title}</Text>
                   
                    <Image source={require('../../assets/right_arrow.png')} style={styles(orientation).imageRight} />
                   
                </View>
            </TouchableOpacity>
    
  )
}


export default SettingButton

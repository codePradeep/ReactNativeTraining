import React from "react";
import { View,Text,TouchableOpacity, Button } from "react-native";
import styles from './style'

interface Buttonprops{
    title:string;
    press:any;
   
}

export default function Abutton (props:any){
    const {title,press} = props;
    return(
        
  //        <TouchableOpacity
  //        onPressOut ={props.Press}
  //   onPress={props.Press}
  //   style={styles.container}>
  //   <Text style={styles.paragraph} >{props.title}</Text>
  // </TouchableOpacity>
  <View style={{borderRadius:180}} >
  <Button  title={props.title} onPress={props.press} />
  </View>











      
    )

}
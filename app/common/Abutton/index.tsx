import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from './style'

interface Buttonprops{
    title:string;
    press:any;
}

export default function Abutton (props:any){
    const {title} = props;
    return(
        <View>
         <TouchableOpacity
    onPress={props.Press}
    style={styles.container}>
    <Text style={styles.paragraph} >{props.title}</Text>
  </TouchableOpacity>

        </View>
    )

}
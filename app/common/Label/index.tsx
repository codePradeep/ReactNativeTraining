import React from "react";
import { View,Text } from "react-native";
import styles from './style'

export default function Label (props:any){
   const {labelname} =props;
    return(
        <View>
         <Text style={styles.paragraph} > {labelname} </Text>
        </View>
    )

}

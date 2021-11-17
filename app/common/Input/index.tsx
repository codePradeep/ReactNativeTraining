import React from "react";
import { View,TextInput } from "react-native";
import styles from './style'

export default function Input (props){
   const {inputplaceholder} =props;
    return(
        <View>
         <TextInput style={styles.input} placeholder={inputplaceholder} />
 

        </View>
    )

}



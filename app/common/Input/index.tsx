import React from "react";
import { View,TextInput } from "react-native";
import styles from './style'
interface inputprops{
    inputplaceholder:string
}
 const Input = (props:inputprops)=>{
   const {inputplaceholder} =props;
    return(
        <View>
         <TextInput style={styles.input} placeholder={inputplaceholder} />
 

        </View>
    )

}


export default Input
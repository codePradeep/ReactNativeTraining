import React from "react";
import { View,TextInput } from "react-native";
import { Text } from "react-native-animatable";
import { FONTS } from "../../config";
import styles from './style'
interface inputprops{
    inputplaceholder:string
    label:string,
    onChangeText:((text: string) => void) | undefined
}
 const Input = (props:inputprops)=>{
   const {inputplaceholder,label,onChangeText} =props;
    return(
        <View style={styles.constainer}>
        <Text style={[FONTS.h4,{paddingVertical:10}]}>{label}</Text>
         <TextInput style={styles.input} defaultValue={inputplaceholder} 
         
         
         {...props}/>
        </View>
    )

}


export default Input
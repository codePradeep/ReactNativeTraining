import React from "react";
import { View,TextInput, Image } from "react-native";
import styles from './style'
interface inputprops{
    inputplaceholder:string
    icon:any
}
 const Input = (props:inputprops)=>{
   const {inputplaceholder} =props;
    return(

        <View style={{justifyContent:"center"}}>
        <View style={styles.container}>
         <TextInput style={styles.input} placeholder={inputplaceholder} />
         <Image source={props.icon} style={styles.image}/>
        </View>
        </View>
    )

}


export default Input
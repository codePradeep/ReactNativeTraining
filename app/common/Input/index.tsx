import React from "react";
import { Text,View,TextInput } from "react-native";
import styles from './style'

interface inputprops{
    
    inputplaceholder:string
    labelname:string
    keyboardType:String
    changeText:any
    maxLength:number
    secureTextEntry:boolean
    
}

const Input = (props:inputprops) => {
    const {maxLength,keyboardType,secureTextEntry, inputplaceholder,labelname,changeText,...rest }=props
    return (
      <View>
      <Text style={styles.paragraph} > {labelname} </Text>
        <TextInput
          
          style={styles.input}
          maxLength={maxLength}
          onChangeText={changeText}
          placeholder={inputplaceholder}
          placeholderTextColor="#666"
          secureTextEntry={secureTextEntry}
          
          {...rest}
        />
      </View>
    );
  };

export  default  Input

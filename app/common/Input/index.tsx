import React from "react";
import { Text,View,TextInput } from "react-native";
import styles from './style'
// import AntDesign from 'react-native-vector-icons/AntDesign'

// export function Input (props:any){
//    const {inputplaceholder,Textfunction,labelname} =props;
//     return(<View>
//      <Text style={styles.paragraph} > {labelname} </Text>
//      <TextInput style={styles.input} placeholder={} onChangeText={Textfunction} />
//      </View>
//     )

// }
interface inputprops{
    
    inputplaceholder:any
    labelname:string
    
   
    changeText:any
    maxLength:number
    
}

const Input = (props:inputprops) => {
    const {maxLength, inputplaceholder,labelname,changeText,...rest }=props
    return (
      <View>
      <Text style={styles.paragraph} > {labelname} </Text>
        {/* <View style={styles.iconStyle}>
          <AntDesign name={iconType} size={25} color="#666" />
        </View> */}
        <TextInput
          
          style={styles.input}
          maxLength={maxLength}
          onChangeText={changeText}
          placeholder={inputplaceholder}
          placeholderTextColor="#666"
          {...rest}
        />
      </View>
    );
  };

export  default  Input

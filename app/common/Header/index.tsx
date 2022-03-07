import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "../../config";
import styles from './style'

export default function Header(props:any){
    const navigation=useNavigation()
    const {Title} =props;
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={Icon.back}  style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.H1} >{Title}</Text>
        </View>
    )

}
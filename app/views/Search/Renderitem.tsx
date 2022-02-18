import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from "react-native";
import { COLORS, FONTS, selectedTheme } from "../../config";
import styles from "./style";

interface renderprops {
  index:any
  item:  {
    id: number;
    title: string;
    thumbnail: any;
}
  defaultitem:any
  setdefaultitem:any

}


const Renderitem=(props:renderprops)=>{
    const {item,defaultitem,setdefaultitem}=props
    return(
        
        <TouchableOpacity 
        onPress={()=>setdefaultitem(item.id)}
        style={[styles(selectedTheme).item,{backgroundColor:defaultitem == item.id?selectedTheme.backgroundblueNblack:selectedTheme.backgroundwhite3Ngray8,
        borderColor:defaultitem == item.id?selectedTheme.borderColor1:selectedTheme.borderColor1
        }]}>
        <ImageBackground source={item.thumbnail} 
        style={[styles(selectedTheme).Icons]} 
        >
        <Text style={[styles(selectedTheme).itemtext,{color:defaultitem == item.id? COLORS.white:selectedTheme.textblackNwhite}]} 
        >{item.title}</Text>
        </ImageBackground>
    </TouchableOpacity>
    )
}

export default Renderitem
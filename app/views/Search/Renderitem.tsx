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
    icon:any
}
  navigation:any

}


const Renderitem=(props:renderprops)=>{
    const {item,navigation}=props
    return(
        
        <TouchableOpacity 
        onPress={() => navigation.navigate("CourseListingModel", {
          Header: item.title,
          Icon:item.icon
          
        })}
        style={[styles(selectedTheme).item]}>
        <ImageBackground source={item.thumbnail} 
        style={[styles(selectedTheme).Icons]} 
        >
        <Text style={[styles(selectedTheme).itemtext]} 
        >{item.title}</Text>
        </ImageBackground>
    </TouchableOpacity>
    )
}

export default Renderitem
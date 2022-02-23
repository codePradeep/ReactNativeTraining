import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, selectedTheme } from "../../config";
import styles from "./style";

interface renderItem{
     item : {
        id: number;
        avatar: any;
        name: string;
        created_at: string;
        message: string;
    }
}

const Item = (props:renderItem) =>{ 
    const {item}=props
    return(
        <View>
    <View style={styles(selectedTheme).item}>
            <Image source={item.avatar} style={styles(selectedTheme).image} />
        <View style={styles(selectedTheme).itemtextcontainer}>
            <View style={styles(selectedTheme).notificationtitlecontainer}>
            <Text style={styles(selectedTheme).title}>{item.name}</Text>
            <Text style={styles(selectedTheme).time}>{item.created_at}</Text>
            </View>
            <Text style={styles(selectedTheme).subtitle}>{item.message}</Text>
        </View>
    </View>
    <View style={styles(selectedTheme).seperater}/>
    </View>
);}

export  default Item
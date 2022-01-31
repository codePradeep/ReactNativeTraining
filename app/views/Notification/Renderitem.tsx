import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS } from "../../config";
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
    <View style={styles.item}>
            <Image source={item.avatar} style={styles.image} />
        <View style={styles.itemtextcontainer}>
            <View style={styles.notificationtitlecontainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.time}>{item.created_at}</Text>
            </View>
            <Text style={styles.subtitle}>{item.message}</Text>
        </View>
    </View>
    <View style={styles.seperater}/>
    </View>
);}

export  default Item
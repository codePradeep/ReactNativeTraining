import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, icon } from "../../config";
import styles from "./style";

interface renderItem{
     item : {
        title: string;
        time: string;
        subtitle: string;
        image: any;
    }
}

const Item = (props:renderItem) =>{ 
    const {item}=props
    return(
    <View style={styles.item}>
        <View style={styles.renderimagecontainter}>
            <Image source={item.image} style={styles.image} />
        </View>
        <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
        <Image source={icon.dots} style={styles.doticon} />
    </View>
);}

export  default Item
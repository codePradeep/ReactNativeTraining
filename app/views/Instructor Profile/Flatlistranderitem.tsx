import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, selectedTheme } from "../../config";
import styles from "./style";

interface renderItem {
    item:  {
        id: number;
        title: string;
        clsss_level: string;
        creted_on: string;
        duration: number;
        instructor: string;
        ratings: number;
        price: number;
        is_favourite: boolean;
        thumbnail: any;
    }
}

const Item = (props: renderItem) => {
    const { item } = props
    return (
        <View>
            <View style={styles(selectedTheme).item}>

                <Image source={item.thumbnail} style={styles(selectedTheme).image} />
                <TouchableOpacity style={styles(selectedTheme).fevcontainer}>
                <Image source={item.is_favourite? icons.Icon.favourite:icons.Icon.favourite_outline} style={styles(selectedTheme).fevcon}/>
                </TouchableOpacity>
                <View style={styles(selectedTheme).itemtextcontainer}>
                    <Text style={styles(selectedTheme).title}>{item.title}</Text>
                    <View style={styles(selectedTheme).notificationtitlecontainer}>

                        <Text style={styles(selectedTheme).time}>By {item.instructor} </Text>
                        <View style={styles(selectedTheme).ratingcontainer}>
                            <Image source={icons.Icon.reminder} style={styles(selectedTheme).smallicon} />
                            <Text style={styles(selectedTheme).time}> {item.duration}</Text>
                        </View>
                    </View>
                    <View style={styles(selectedTheme).notificationtitlecontainer}>
                        <Text style={styles(selectedTheme).subtitle}>${item.price}.00</Text>
                        <View style={styles(selectedTheme).ratingcontainer}>
                            <Image source={icons.Icon.star} style={styles(selectedTheme).smallicon} />
                            <Text style={styles(selectedTheme).ratings}> {item.ratings}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles(selectedTheme).seperater} />
        </View>
    );
}

export default Item
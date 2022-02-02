import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons } from "../../config";
import styles from "./style";

interface renderItem {
    item: {
        id: number;
        title: string;
        duration: string;
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
            <View style={styles.item}>

                <Image source={item.thumbnail} style={styles.image} />
                <TouchableOpacity style={styles.fevcontainer}>
                <Image source={item.is_favourite? icons.Icon.favourite:icons.Icon.favourite_outline} style={styles.fevcon}/>
                </TouchableOpacity>
                <View style={styles.itemtextcontainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.notificationtitlecontainer}>

                        <Text style={styles.time}>By {item.instructor} </Text>
                        <View style={styles.ratingcontainer}>
                            <Image source={icons.Icon.reminder} style={styles.smallicon} />
                            <Text style={styles.time}> {item.duration}</Text>
                        </View>
                    </View>
                    <View style={styles.notificationtitlecontainer}>
                        <Text style={styles.subtitle}>${item.price}.00</Text>
                        <View style={styles.ratingcontainer}>
                            <Image source={icons.Icon.star} style={styles.smallicon} />
                            <Text style={styles.ratings}> {item.ratings}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.seperater} />
        </View>
    );
}

export default Item
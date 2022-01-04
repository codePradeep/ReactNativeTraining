
import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { COLORS, FONTS, icon } from "../../config";
import styles from "./style";

interface renderprops {
    index: any
    item: {
            id: number;
            name: string;
            description: string;
            price: number;
            calories: number;
            isFavourite: boolean;
            image: any;
        }
}

const RenderSecendlist = (props: renderprops) => {
    const { item } = props

    return (
        <View style={styles.firstrendercontainer} >
             <View style={styles.subfirstrendercontainer}>
            <View style={[styles.itemcontainer,]}>
                <View style={styles.itemsubcontainer}>
                <Image source={icon.calories} style={styles.Icon} />
                <Text style={[styles.itemtext, { color: COLORS.black }]}>{item.calories} calories</Text>
                </View>
                <TouchableOpacity>
                    <Image source={icon.love} style={styles.Icon} />
                </TouchableOpacity>
            </View>
           
                <Image source={item.image} style={styles.image} />
                <Text style={[styles.text,FONTS.h3]}>{item.name}</Text>
                <Text style={[styles.text,FONTS.body4]}>{item.description}</Text>
                <Text style={[styles.text,FONTS.h2]}>${item.price}</Text>
            </View>
            <View style={styles.Itemsaperator} />
        </View>
    );
}

export default RenderSecendlist
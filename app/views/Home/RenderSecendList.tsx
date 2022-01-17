
import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { COLORS, FONTS, icon } from "../../config";
import styles from "./style";

interface renderprops {
    index: any,
    navigation:any
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
    const { item,navigation} = props

    return (
        <View style={styles.firstrendercontainer} >
            <TouchableOpacity 
            onPress={()=>navigation.navigate("FoodDetailModel")}
            >
            <View style={styles.subfirstrendercontainer}>
                <View style={[styles.itemcontainer,]}>
                    <View style={styles.itemsubcontainer}>
                        <Image source={icon.calories} style={styles.Icon} />
                        <Text style={[styles.itemtext, { color: COLORS.black }]}>{item.calories} calories</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={icon.love} style={[styles.Icon,{tintColor:item.isFavourite?COLORS.primary:COLORS.lightGray1}]} />
                    </TouchableOpacity>
                </View>
                <Image source={item.image} style={styles.image} />
                <Text style={[styles.text, FONTS.h3]}>{item.name}</Text>
                <Text style={[styles.text, FONTS.body4]}>{item.description}</Text>
                <Text style={[styles.text, FONTS.h2]}>${item.price}</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.Itemsaperator} />
        </View>
    );
}

export default RenderSecendlist
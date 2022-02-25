import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, selectedTheme } from "../../config";
import styles from "./style";

interface renderItem {
    navigation: any
    nextdata: any
   
    item: {
        id: number;
        title: string;
        sub_title: string;
        image: any;
    }
}

const Item = (props: renderItem) => {
    const { item, navigation, nextdata,  } = props
    return (

        <View style={styles(selectedTheme).imageAndTextContainer}
        >

            <View style={styles(selectedTheme).itemcontainer}>
                <Text style={styles(selectedTheme).headingtext}>
                    {item.title}
                </Text>
                <Text style={styles(selectedTheme).textstyle}>
                    {item.sub_title}
                </Text>
            </View>
            <View style={styles(selectedTheme).imagecontainer}>
                <Image source={item.image}
                    resizeMode="contain"
                    style={styles(selectedTheme).image}
                />
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            
            <TouchableOpacity
                style={styles(selectedTheme).buttonstyle}
                onPress={() => item.id == 2 ? navigation.navigate("Loginmodel") : nextdata()}
            >
                <Text style={{ ...FONTS.heading, fontSize: 22, color: COLORS.white }}>{item.id == 2 ? "Let's Start" : "Next"}</Text>
            </TouchableOpacity>
            </View>

        </View>

    );
}







export { Item }
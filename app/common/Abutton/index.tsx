import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Constant } from "../../config";
import styles from './style'

interface Buttonprops {
    title: string;
    OnPress:any
}

export default function Abutton(props: Buttonprops) {
    const { title,OnPress } = props;
    return (
        <View>
            <TouchableOpacity
                onPress={OnPress}
                {...props}
                style={styles.button}>
                <Text style={styles.buttontext}>{title}</Text>
            </TouchableOpacity>


        </View>
    )

}
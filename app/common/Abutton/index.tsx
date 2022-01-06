import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Constant } from "../../config";
import styles from './style'

interface Buttonprops {
    title: string;
    // press:any;
}

export default function Abutton(props: any) {
    const { title } = props;
    return (
        <View>
            <TouchableOpacity
                {...props}
                style={styles.button}>
                <Text style={styles.buttontext}>{title}</Text>
            </TouchableOpacity>


        </View>
    )

}
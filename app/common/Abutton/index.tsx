import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './style'

interface Buttonprops {
    title: string;
    onPress: any;
}

export default function Abutton(props: Buttonprops) {
    const { title,onPress } = props;
    return (
        <View>
            <TouchableOpacity style={styles.button}
            onPress={onPress}
            
            >
                <Text style={styles.ButtonText}>{title}</Text>
            </TouchableOpacity>

        </View>
    )

}
import React from "react";
import { View,Text } from "react-native";
import styles from './style'

export default function Header(props){
    const {headertitle} =props;
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Back</Text>
            <Text style={styles.paragraph}>{headertitle}</Text>
            <Text style={styles.paragraph}>Next</Text>
        </View>
    )

}
import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

interface SplashScreenprops {
    navigation: any
  }
const SplashScreen=(props:SplashScreenprops)=>{
    return(
        <View style={styles.MainContainer}>
            <Text style={styles.H1}>Uber</Text>
        </View>
    )
}

export default SplashScreen
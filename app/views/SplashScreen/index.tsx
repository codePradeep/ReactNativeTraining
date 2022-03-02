import React, { memo } from "react";
import { View, Text, Alert, Image, ActivityIndicator } from "react-native"
import { COLORS, images } from "../../config";
import styles from "./style";

interface SplashScreenProps {
    navigation: any
}



const SplashScreen = (props:SplashScreenProps) => {


    return (
        <View style={styles.Container}>
            <Image source={images.images.Learning} style={styles.Image}/>
            <ActivityIndicator size={30} color={COLORS.primary} />
            <Image source={images.images.successive} style={styles.successive}/>

        </View>
    )
}
export default memo( SplashScreen)
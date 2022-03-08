import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../common";
import { Icon } from "../../config";
import styles from "./style";

interface TripScreenprops{
    navigation:any
}
const TripScreen=(props:TripScreenprops)=>{
    const {navigation}=props
    
    return(
        <View style={styles.MainContainer}
        >
            <Header Title="Choose a trip" />
            <View style={styles.ViewContainer}>
                <Text style={styles.text}>You haven't taken a trip yet</Text>

                <View style={styles.button} >
                    <Text>Retry</Text>

                </View>

            </View>
            <TouchableOpacity style={styles.topbutton}>
                <Text style={styles.buttontext}>Past</Text>
                <Image source={Icon.down}  style={styles.icon}/>
            </TouchableOpacity>


        </View>
    )
}

export default TripScreen


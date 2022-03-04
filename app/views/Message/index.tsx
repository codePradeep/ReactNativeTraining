import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon, ScreenConstent } from "../../config";
import styles from "./style";

interface MessagesScreenprops{
    navigation:any,
    
}
const MessagesScreen=(props:MessagesScreenprops)=>{
    const {navigation}=props
    
    return(
        <View style={styles.MainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={Icon.back}  style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.H1} >{ScreenConstent.MessagesScreen.Messages}</Text>
            </View>
            <View style={styles.secendContainer}>
                <View style={styles.cardcontainer}>
                    <View style={styles.imagecontainer}>
                        <Image source={Icon.giftbox} style={styles.icon}/>
                    </View>
                    <Text style={styles.H2}>{ScreenConstent.MessagesScreen.coupon}</Text>
                    <Text style={styles.P1}>{ScreenConstent.MessagesScreen.offertext}</Text>

                </View>
               
            </View>

        </View>
    )
}

export default MessagesScreen


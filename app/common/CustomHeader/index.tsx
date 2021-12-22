import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { icon } from "../../config";
import styles from "./style";
interface customheaderprops{
    navigation:any
}
const CustomHeader=(props:customheaderprops)=>{
    const {navigation}=props
    return(
        <View style={styles.container}>
        <View style={styles.subcontainer}>
            <TouchableOpacity
             onPress={()=>navigation.goBack()}
            >
                <View style={styles.leftimagecontainer}>
                    <Image source={icon.left_arrow} style={styles.leftimage} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={}

            >
                <View style={styles.leftimagecontainer}>

                    <Image source={icon.help} style={styles.leftimage} />
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )
}
export default CustomHeader
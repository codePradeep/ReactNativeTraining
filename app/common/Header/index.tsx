import React from "react";
import { View,Text, TouchableOpacity, Image } from "react-native";
import { Constant, icon } from "../../config";
import styles from './style'


interface Headerprops{
    headertitle:string
    navigation:any
    HeaderRightComponent:any

}
 const Header=(props:Headerprops)=>{
    const {headertitle,navigation,HeaderRightComponent} =props;
    return(
        <View style={styles.headercontainer}>
        <View style={styles.headersubcontainer}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                <View style={styles.headerleftimagecontainer}>
                    <Image source={icon.menu} style={styles.headerleftimage} />
                </View>
            </TouchableOpacity>
            <Text style={styles.HeaderText}>{headertitle}</Text>
            <View style={styles.HeaderRight}>
                {HeaderRightComponent}
            </View>
        </View>
    </View>
    )

}

export default Header
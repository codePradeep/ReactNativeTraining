import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon, ScreenConstent } from "../../config";
import styles from "./style";

interface HelpScreenprops{
    navigation:any,
    data: {
        name: string;
    }[]
}
const HelpScreen=(props:HelpScreenprops)=>{
    const {navigation,data}=props
    
    return(
        <View style={styles.MainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={Icon.back}  style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.H1} >{ScreenConstent.Help.Help}</Text>
            </View>
            <View style={styles.secendContainer}>
                <Text>{ScreenConstent.Help.Alltopic}</Text>
                {data.map((item,index)=>{return(
                    <TouchableOpacity key={index} style={styles.buttoncontainer}>
                        <Text style={styles.P1}>{item.name}</Text>
                        <Image source={Icon.rightarrrow} style={styles.backicon} />
                    </TouchableOpacity>
                )})}
            </View>

        </View>
    )
}

export default HelpScreen


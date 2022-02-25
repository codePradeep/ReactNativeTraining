import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../config";


interface progressbarprops {
    containerstyle: any

}
const MultiProgressBar = (props: progressbarprops) => {
    const { containerstyle } = props;
    return (
        <View style={[styles.container, { ...containerstyle }]}>
            <View style={[styles.subcontainer1, { width: "100%", backgroundColor: 'red' }]} />
            <View style={[styles.subcontainer, { width: "95%", backgroundColor: 'lightblue' }]} />
            <View style={[styles.subcontainer, { width: "75%", backgroundColor: 'skyblue' }]} />
            <View style={[styles.subcontainer2, { width: "50%", backgroundColor: "orange" }]} />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 13,
        borderRadius: 10,
        backgroundColor: COLORS.white
    },
    subcontainer: {
        position: "absolute",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        left: 0,
        height: "100%",
        borderRightWidth:2,
        borderColor:"white",
        marginRight: 10,
        backgroundColor: COLORS.primary
    }, subcontainer1: {
        position: "absolute",
        borderRadius: 10,
        left: 0,
        height: "100%",
       
        marginRight: 10,
        backgroundColor: COLORS.primary
    }
    , subcontainer2: {
        position: "absolute",
        left: 0,
        height: "100%",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderRightWidth:2,
        borderColor:"white",
        marginRight: 10,
        backgroundColor: COLORS.primary
    }



})


export default MultiProgressBar
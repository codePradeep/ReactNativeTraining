import { StatusBar, StyleSheet } from "react-native";
import {  selectedTheme } from "../../config";

const styles = StyleSheet.create({
    mainconatiner: {
        flex: 1,
        backgroundColor: selectedTheme.backgroundwhiteNgray8

    },
    bgimage:{
        height:"40%",
        width:"100%",
        position:"absolute"
    },
    conatiner: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
    leftbutton: {
        height: 50,
        width: 50,
        borderRadius: 90,
        backgroundColor: selectedTheme.backgroundgray10Ngray70,
        justifyContent: "center"
    },
    headerlefticon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: selectedTheme.tintColor
    },
    HeaderText: {
        color: selectedTheme.textblackNwhite,
        fontSize: 18,
        fontWeight: "700",
        textAlignVertical: "center",
        marginVertical:20
    },
    item: {
        flexDirection: "row",
        
        borderRadius: 10,
        marginVertical:5
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 90,
        alignSelf: "center",
        resizeMode: "contain",
    },
    header: {
        fontSize: 18,
        color: selectedTheme.textgray8Ngray4
    },
    title: {
        fontSize: 18,
        color: selectedTheme.textblackNwhite
    },
    subtitle: {
        width: 200,
        color: selectedTheme.textblackNgray4,
    },
    time: {
        color: selectedTheme.textblackNgray4,
        alignSelf:"center",
        paddingLeft:10
    },
    notificationtitlecontainer:{
        flexDirection:"row",
    },
    seperater:{
        borderBottomWidth:.5,
        borderColor:selectedTheme.borderColor2,
        marginVertical:20
    },
    itemtextcontainer:{
        marginLeft:10
    }
});

export default styles
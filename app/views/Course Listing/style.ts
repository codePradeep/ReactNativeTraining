import { StatusBar, StyleSheet } from "react-native";
import {  COLORS, selectedTheme } from "../../config";

const styles = StyleSheet.create({
    mainconatiner: {
        flex: 1,
        backgroundColor: selectedTheme.backgroundwhiteNgray8

    },
    headercontainer:{
        paddingHorizontal:20,
        paddingVertical:20
    },
    bgimage:{
        height:"120%",
        width:"150%",
        position:"absolute",
        borderBottomLeftRadius:40
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
    headersub:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    HeaderText: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "700",
        textAlignVertical: "center",
        marginVertical:20
    },
    filterbutton:{
        alignSelf:"center",
        backgroundColor:COLORS.primary,
        padding:5,
        borderRadius:10
        
    },
    filterbuttontext:{
        color:selectedTheme.textblackNwhite,
        fontSize:17,
        fontWeight:"700",
        textAlignVertical:"center"
    },
    filtericons:{
        width:25,
        height:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.white
        
        
    },
    secContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10
    },

    mobileimage:{
        resizeMode:"contain"
    },
    item: {
        flexDirection: "row",
        
        borderRadius: 10,
        marginVertical:5
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 5,
        alignSelf: "center",
        //resizeMode: "contain",
    },
    fevcon:{
        width:15,
        height:15,
        justifyContent:"center",
        margin:5,
        tintColor:COLORS.primary2
    },
    fevcontainer:{
        flex:1,
        height:25,
        width: 25,
        backgroundColor:COLORS.white,
        borderRadius:5,
        position:"absolute",
       margin:10,
       alignItems:"center"
    },

    header: {
        fontSize: 18,
        color: selectedTheme.textgray8Ngray4
    },
    title: {
        width:200,
        fontSize: 18,
        fontWeight:"700",
        color: selectedTheme.textblackNwhite
    },
    subtitle: {
        fontSize:20,
        fontWeight:"700",
        
        color: selectedTheme.textgreenNwhite,
    },
    ratingcontainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10
    },

smallicon:{
    height:15,
    width:15,
    resizeMode:"contain",
    alignSelf:"center"
},
    time: {
        color: selectedTheme.textblackNgray4,
        
       
    },
    ratings:{
        fontSize:15,
        fontWeight:"700",
        color:selectedTheme.textblackNwhite,
        textAlignVertical:"center"
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
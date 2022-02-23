import { Dimensions, StyleSheet } from "react-native";

import { COLORS, FONTS, } from "../../config/constants/theme";
const styles =(selectedTheme:any)=> StyleSheet.create({


    mainconatiner: {
        flex: 1,
        backgroundColor: selectedTheme.backgroundwhiteNgray8

    },
    conatiner: {
        flex: .9,
        marginHorizontal: 20,
        marginVertical: 20
    },
    searchbar:{
        flexDirection:"row",
        borderWidth:1,
        borderRadius:20,
        alignItems:"center",
        paddingHorizontal:10,
        borderColor:selectedTheme.borderColor2
    },
    leftbutton: {
        height: 50,
        width: 50,
        borderRadius: 90,
        backgroundColor: selectedTheme.backgroundgray10Ngray70,
        justifyContent: "center"
    },
    headerlefticon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: selectedTheme.tintColor
    },
    renderView: {
        borderWidth: 1,
        padding: 10,
    },
    Icons: {
        flex: 1,
        resizeMode: "contain",
        // alignSelf:"center",
        justifyContent: "flex-end",
        borderRadius: 10

    },
    searchbarimage:{
        width:20,
        height:20,
        resizeMode:"contain",
        alignSelf:"center"
    },
    button: {
        borderRadius: 90,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        padding: 10,
        marginVertical: 20,

    },
    buttontext: {
        fontSize: 17,
        color: selectedTheme.textwhite,
        fontWeight: "800",
        ...FONTS.heading
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        marginVertical: 20,
        color: selectedTheme.textblackNgray
    },
    flatlistcontainer: {
        marginVertical: 20,
    },
    item: {
        borderWidth: .5,
        flex: 1,
        margin: "1%",
        
        borderRadius: 20,
        height: Dimensions.get('window').width / 3,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    topsearchcontainer:{
       
        
    },
    itemtext: {
        margin: 10,
        fontSize: 22,
        fontWeight: "700",
        ...FONTS.largeTitle,
        color: selectedTheme.textblackNwhite

    },
    searchlist: {
        backgroundColor: selectedTheme.backgroundgray10Ngray70,
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        color: selectedTheme.textblackNwhite
    },
    topsearch: {
        flexDirection: 'row',
        marginTop: 5,
    },
})

export default styles
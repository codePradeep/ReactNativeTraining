import { StyleSheet } from "react-native";
import { COLORS, FONTS,  } from "../../config";

const styles=(selectedTheme:any)=>StyleSheet.create({
    Maincontainer:{
        flex:1,
        backgroundColor:selectedTheme.backgroundwhiteNgray8,
        paddingHorizontal:20,
        paddingVertical:20
    },
    Tilte:{
        fontSize:22,
        color:selectedTheme.textblackNgray4,
        fontWeight:"700",
        marginVertical:5,
        ...FONTS.largeTitle
    },
    studentdatacontianer:{
        flexDirection:"row",
        alignItems:"center"
    },
    studentcontainer:{
        marginRight:10,
    },
    studentIcon:{
        width:80,
        height:80,
    },
    ViewAll:{
        color:COLORS.primary,
        fontSize:20,
        fontWeight:"700",
    },
    filesdatacontianer:{

    },
    Filescontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
        alignItems:"center"

    },
    imagecontainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    menuicon:{
        height:20,
        width:30,
        resizeMode:"contain",
        alignSelf:"center"
    },
    textcontainer:{
        marginLeft:10,
    },
    title:{
        fontSize:20,
        color:selectedTheme.textblackNwhite,
        fontWeight:"700",
    },
    auther:{
        fontSize:16,
        color:selectedTheme.textgray8Ngray4,
    },
    date:{
        fontSize:14,
        color:selectedTheme.textblackNgray,

    }

})

export default styles
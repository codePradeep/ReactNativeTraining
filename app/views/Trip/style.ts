import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const  styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:COLORS.white
    },
    ViewContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        padding:20,
        borderWidth:1
    },
    text:{
        fontSize:22,
        ...Font.heading,
        marginVertical:10
    },
    buttontext:{
        fontSize:16,
        ...Font.heading,
       
    },
    topbutton:{
        position:"absolute",
        zIndex:10,
        elevation:400,
        right:10,
        top:10,
        backgroundColor:"#cdcdcd",
        padding:10,
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center"

    },
    icon:{
        height:20,
        width:20,

    }
})

export default styles
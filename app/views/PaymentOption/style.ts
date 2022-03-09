import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const  styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:20
    },
    icons:{
        height:15,
        width:15,
        resizeMode:"contain",

    },
    Header:{
        marginVertical:10,
    },
    H1:{
        fontSize:21,
        color:"black",
       
        ...Font.body
        
        
    },
    heading:{
        fontSize:17,
        color:"#707070",
       
        ...Font.body

    },
    P1:{
        fontSize:15,
        color:"black",
        fontWeight:"600",
        ...Font.body

    },
    P3:{
        fontSize:14,
        color:"#005f8c",
        fontWeight:"600",
        ...Font.body

    },
    topbuttoncontainer:{
        flexDirection:"row"
    },
    smallIcon:{
        width:20,
        height:20,
        resizeMode:"contain"
    },
    button:{
        backgroundColor:COLORS.graybackground,
        paddingHorizontal:15,
        paddingVertical:5,
        alignItems:"center",
        borderRadius:20,
        flexDirection:"row",
        marginRight:10,
    },
    buttontext:{
        fontSize:15,
        color :COLORS.black,
        ...Font.body,
        marginLeft:5
    },
    boxcontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:20
    }
})

export default styles
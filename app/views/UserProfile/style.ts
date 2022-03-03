import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:20
    },
    icons:{
        height:20,
        width:20,

    },

    Header:{
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    H1:{
        fontSize:21,
        color:"black",
        fontWeight:"600",
        ...Font.heading
        
        
    },
    P1:{
        fontSize:16,
        color:"black",
        fontWeight:"600",
        ...Font.body

    },
    rating:{
        flexDirection:"row",
        backgroundColor:COLORS.graybackground,
        width:60,
        justifyContent:"space-between",
        padding:5,
        borderRadius:20

    },
    smallicon:{
        height:12,
        width:12,
        resizeMode:"contain",
        alignSelf:"center"
    },
    lighticon:{
        height:20,
        width:20,
        resizeMode:"contain",
        alignSelf:"center",
        marginBottom:5
    },

    UserIcon:{
        height:50,
        width: 50,
        borderRadius:90,
        
        backgroundColor:COLORS.skyblue
        // alignSelf:"center",
        
    },
    boxs:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    boxstyle:{
        alignItems:"center",
        justifyContent:"center",
        height:80,
        width:110,
        borderRadius:20,
        backgroundColor:COLORS.graybackground
    },
    list:{
        flexDirection:"row",
        marginVertical:10,

    },
    listitem:{
        fontSize:16,
        color:"black",
        marginLeft:10,
        ...Font.body

    },
})

export default styles
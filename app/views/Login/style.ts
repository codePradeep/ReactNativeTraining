import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const  styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:20
    },
    H1: {
        fontSize: 20,
        color: "black",
        fontWeight: "600",
        ...Font.heading
    },
    H2: {
        fontSize: 18,
        color: "black",
        fontWeight: "600",
        ...Font.heading
    },
    P1: {
        fontSize: 16,
        color: "black",
        ...Font.body

    },
    inputecontainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginVertical:10,
    },
    inputstyle:{
        backgroundColor:'gray',
        width:"80%"

    },
    iconcontainer:{
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:"space-between",
        backgroundColor:"gray"
    },
    icon:{
        height:20,
        width:30,
        resizeMode:"contain"
    },
    smallicon:{
        height:10,
        width:10,
    },
    button:{
        backgroundColor:COLORS.black,
        padding:15,
        marginVertical:10
    },
    ButtonText:{
        fontSize: 16,
        color: COLORS.white,
        ...Font.body,
        textAlign:"center"
    },
    SocialButton:{
        backgroundColor:COLORS.white,
        padding:15,
        marginVertical:10,
        borderWidth:1,
        flexDirection:"row",

    },
    SocialIcon:{
        height:20,
        width:20,
        resizeMode:"contain",
        left:0
    },
    SocialButtonText:{
        fontSize: 16,
        color: COLORS.black,
        ...Font.body,
        textAlign:"center",
        marginLeft:20
    },
    seperater:{flexDirection:"row",justifyContent:"center"}
    
})

export default styles
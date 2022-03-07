import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const  styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:"#0418a2",
        padding:20,
        justifyContent:"space-between"
        
    },
    subContainer:{
        flex:.8,
        alignItems:"center",
        justifyContent:"space-between"
    },
    H1: {
        fontSize: 35,
        color: COLORS.white,
        ...Font.body
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
})

export default styles
import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const  styles=StyleSheet.create({
    MainContainer:{
        flex:1
    },
    ViewContainer:{
        flex:1,
        padding:20,
        justifyContent:"space-between",
        
       
    },
    
    text:{
        fontSize:22,
        ...Font.heading,
        color:COLORS.black,
        marginVertical:10
    },
    subtext:{
        fontSize:16,
        ...Font.heading,
        color:"#646464",
        marginVertical:10
    }
})

export default styles
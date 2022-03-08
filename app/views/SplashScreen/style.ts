import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    },
    Text:{
        fontSize:40,
        color:"black",
        fontWeight:"800",
        ...Font.body

    },
    H1: {
        fontSize: 50,
        color: COLORS.black,
        ...Font.body
    },
})

export default styles
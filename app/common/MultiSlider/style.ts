import { StyleSheet } from "react-native"
import { COLORS } from "../../config"

const style=StyleSheet.create({
    container:{
        height:60 ,
        alignItems:"center",
        justifyContent:"center"
    },
    
    subcontainer:{
        height: 25,
        width:25,
        borderRadius:15,
        borderWidth:4,
        borderColor:COLORS.primary,
        backgroundColor:COLORS.white,
        shadowColor:"black",
        textShadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:1,
        shadowOpacity:0.1

    }
    
})
export default style
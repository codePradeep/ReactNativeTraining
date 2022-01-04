import { StyleSheet } from "react-native"
import { COLORS } from "../../config"

const style=StyleSheet.create({
    container:{
        height:60 ,
        alignItems:"center",
        justifyContent:"center"
    },
    
    subcontainer:{
        height: 30,
        width:30,
        borderRadius:15,
        borderWidth:4,
        borderColor:COLORS.white,
        backgroundColor:COLORS.primary,
        shadowColor:"black",
        textShadowOffset:{
            width:0,
            height:3
        },
        shadowRadius:1,
        shadowOpacity:0.1

    }
    
})
export default style
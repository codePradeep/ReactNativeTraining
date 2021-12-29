import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        
    },
    container:{
        flex:1,
        
        justifyContent:"space-between",
        marginHorizontal:"5%",
        marginVertical:"2%"

    },
    subcontainer:{
        flex:0.5,
        justifyContent:"space-around"
    },
    textcontainer:{
        flex:.8,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },   
    icon:{
        height:300,
        width:300,
        resizeMode:"contain",
        alignSelf:"center",
        
       
    }, 
    button:{
        backgroundColor:COLORS.primary,
        borderRadius:9,

    },
    buttontext:{
        padding:10,
        color:COLORS.white,
        textAlign:"center",
        fontWeight:"800",
        fontSize:19

    },
 

})
export default styles
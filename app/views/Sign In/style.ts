import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white",

    },
    container:{
        flex:.8,
        justifyContent:"space-between",
        marginHorizontal:"5%",
        marginVertical:"2%"

    },
    subcontainer:{
        flex:1,
        justifyContent:"space-around"
    },
    textcontainer:{
        
        alignItems:"center",
        marginBottom:20
        

    },
    text:{
        fontSize:22,
        fontWeight:"600",
        color:"black"
    },
    Subtext:{
        fontSize:15,
        color:"darkgray",
        width:250,
        textAlign:"center"
    },
    input:{
        flexDirection:"row",
        backgroundColor:COLORS.lightGray2,
        borderRadius:10
    },
    textinput:{
        width:"90%",
        fontSize:19
    },
    icon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
       
    },
    Email:{
        paddingBottom:10,
        fontSize:16,
        fontWeight:"700"
    },

    button:{
        backgroundColor:COLORS.primary,
        borderRadius:9,

    },

    buttontext:{
        padding:10,
        color:"white",
        textAlign:"center",
        fontWeight:"800",
        fontSize:19

    },
    flexdirection:{
        flexDirection: "row", 
        marginVertical:10
    },
    bottomtext:{
        textAlignVertical:"center"
    },
    bottomsignuptext:{
      color:COLORS.red,
      fontWeight:"600",
      fontSize:16
    },
    forget:{
        alignSelf:"center"
    },
    eyeiconcontainer:{
        alignSelf:"center"
    },
    EmailContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    GoogleSignInButton:{ 
        width: "100%", 
        paddingVertical:"8%",
        
     }

})
export default styles
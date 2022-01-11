import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white",
        
       

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
        
        alignItems:"center",
        

    },
    text:{
        fontSize:22,
        fontWeight:"600",
        color:"black"
    },
    Subtext:{
        fontSize:15,
        color:"darkgray",
        width:300,
        textAlign:"center",
        alignSelf:"center"
    },
    input:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10,
        borderRadius:10
    },
    textinput:{
        width:"18%", 
        backgroundColor:"lightgray",
        borderRadius:10,
        fontSize:19,
        textAlign:"center",
        
    },
    icon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
       
    },
    Email:{
        paddingBottom:"10%"
    },

    button:{
        backgroundColor:"darkorange",
        borderRadius:9,

    },
    btncon:{
        marginVertical:"2%",
        alignSelf:"center",
        flexDirection:"row"
    },

    buttontext:{
        padding:10,
        color:"white",
        textAlign:"center",
        fontWeight:"800",
        fontSize:19

    },
    term:{
        color:"red",
        fontSize:16,
        fontWeight:"600",
        alignSelf:"center"
    }

})
export default styles
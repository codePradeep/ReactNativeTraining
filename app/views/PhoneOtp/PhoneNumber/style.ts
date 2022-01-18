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
        width:250,
        textAlign:"center"
    },
    input:{
        flexDirection:"row",
        backgroundColor:"lightgray",
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
        paddingBottom:10
    },

    button:{
        backgroundColor:"darkorange",
        borderRadius:9,

    },

    buttontext:{
        padding:10,
        color:"white",
        textAlign:"center",
        fontWeight:"800",
        fontSize:19

    }

})
export default styles
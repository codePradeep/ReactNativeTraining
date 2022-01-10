import { StyleSheet } from "react-native";
import { COLORS } from "../../config";


const styles=StyleSheet.create({
    MainContainer:{ 
        flex:1,
        marginHorizontal: 20,
        justifyContent:"space-between",
        marginVertical: 10,
    },
    headercontainer: {
        flex: 0.1,

       
        
        
    },
    subContainer:{
        flex:0.65,
        justifyContent:"space-between"
    },
    CardContainer:{


    },
    subcardcontainer:{ 
        flexDirection: "row",
        justifyContent:"space-between",
        padding:9,
        borderWidth:.5,
        
        borderRadius:10
        
     },
     textcontainer:{ 
         flexDirection: "row" ,
         alignItems:"center"
        },
    CardIcon:{
        height:60,
        width:60,
        resizeMode:"contain",
        alignSelf:"center"
    },
    redioIcon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.primary
    },
    cardText:{
        paddingLeft:10,
        color:COLORS.black
    },


})

export default styles
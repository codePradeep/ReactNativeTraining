import { StyleSheet } from "react-native";
import Progress from "../Progress";

const Styles=(orientation:any) =>StyleSheet.create({
    mainContainer:{
        flex:1
    },
    FirstContainer:{
        flex:0.3,
        // backgroundColor:"blue",
        //justifyContent:"space-between",
        
    },
    Image:{
        
       height:"100%",
        width:"100%",
        alignSelf:"center",
        position:"absolute",

    },
    headingText:{
        color:"black",
        fontSize:30,
        fontWeight:"600",
        width:300,
        fontFamily:"PublicSans-Regular"
   
       
        
    },
    Progressbar:{
       
       
    },
    ProgressText:{
        color:"white",
        fontSize:15,
        fontFamily:"PublicSans-Regular"


    },

    menucontainer:{
        // flex:0.7,
        flexDirection:'row',
        justifyContent:"space-between"

    },
    ModuleContainer:{
        flexDirection:"row"
    },
    ItemSeprator:{
        height: orientation.isLandscape ? orientation.height * 0.001 : orientation.height * 0.001,
        backgroundColor: "rgba(0,0,0,0.2)",
        marginVertical: 10
    },
   
    filterContainer:{
        justifyContent:"space-between",
        flexDirection:"row"

    },
    modalView: {
        backgroundColor: "#274040",
        padding: 20,
        justifyContent:"space-between"
        
    
    
      },
    
      modalimage1: {
        height: 40,
        width: 30,
        resizeMode: "contain",
        margin: 10,
        tintColor: "white"
    
      },
      modalCameraimage1: {
        height: 40,
        width: 40,
        resizeMode: "stretch",
        margin: 10,
       // tintColor: "white"
    
      },
    
      modaltext: {
        alignSelf: "center",
        color: "white",
        fontFamily:"PublicSans-Regular"
      },




})
export default Styles
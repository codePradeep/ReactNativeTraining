import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../config";
const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height

const styles = StyleSheet.create({
    MainContainer: {
        // position:"absolute",
         flex: 1,
         backgroundColor: "skyblue",
        // width:"100%",
        // height:"100%"
    },
    textinput: {
        padding:10,
        backgroundColor: "#b1b1b1",
        marginVertical:5,
        width:width*.84,
        height:35

    },
    firstContainer:{
        height:height*.16,
        flexDirection:"row",
        backgroundColor:COLORS.graybackground,
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingVertical:10
    },

    secendContainer:{
        height:height*.84,
        backgroundColor:COLORS.skyblue,
    },
    inputcontainer:{ alignItems: "center", justifyContent: "center", marginTop: 35 },
    statecontainer:{ alignItems: "center", justifyContent: "center", marginRight: 5 },
    flexdirection:{ flexDirection: "row" },
    plusbutton:{ alignItems: "center", justifyContent: "flex-end" },
    plustext:{ fontSize: 30, color: COLORS.black },

    line:{
        height:35,
        width:2,
        backgroundColor:COLORS.black,
        
        
    },
    circle:{
        width:10,
        height:10,
        backgroundColor:"black",
        // borderRadius:90
    },
    icon:{
        width:20,
        height:20,
        marginBottom:10,
        resizeMode:"contain"
    },
    mapStyle: {  
        position: 'absolute',  
        top: 0,  
        left: 0,  
        right: 0,  
        bottom: 0,  
      },  
      button:{ left: 20, right: 20, bottom: 20, position: "absolute" }
})

export default styles
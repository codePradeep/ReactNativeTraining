import { StyleSheet, Dimensions } from "react-native";


const styles = (orientation: any) => StyleSheet.create({


    button: {

          
        padding: 12


    },
   
    container: {
         flexDirection: "row", 
         justifyContent:"space-between",
        
        
        width: orientation.isLandscape ? orientation.width * 0.9 : orientation.width * 0.9,
        height: orientation.isLandscape ? orientation.height *0.04: orientation.height * 0.041,

    },
    title:{
        flex:1,
        fontWeight:"600",
        fontSize:17,
        alignSelf:"flex-start",
        alignItems:"center",
        marginTop: orientation.isLandscape ? orientation.height * 0.00 : orientation.height * 0.009,
        marginBottom: orientation.isLandscape ? orientation.height * -0.02 : orientation.height * 0.00,

     
    },

    imageRight:{
        tintColor:"black",
        width: orientation.isLandscape ? orientation.width * 0.05 : orientation.width * 0.04,
        height: orientation.isLandscape ? orientation.height * 0.05 : orientation.height * 0.04,
        resizeMode:"contain"
    },

    image: {

       
        width: orientation.isLandscape ? orientation.width * 0.05 : orientation.width * 0.05,
        height: orientation.isLandscape ? orientation.height * 0.05 : orientation.height * 0.05,
        resizeMode:"contain"
        
    }



});


export default styles;
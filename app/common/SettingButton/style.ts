import { StyleSheet, Dimensions } from "react-native";


const styles = (orientation: any) => StyleSheet.create({


    button: {
        padding: 12
    },
   
    container: {
         flexDirection: "row", 
         justifyContent:"space-between",
        
        
        width: orientation.isLandscape ? orientation.width * 0.9 : orientation.width * 0.93,
        height: orientation.isLandscape ? orientation.height *0.04: orientation.height * 0.041,

    },
    title:{
        flex:1,
        color:"black",
        fontWeight:"600",
        paddingLeft:"2%",
        fontSize:15,
        fontFamily:"PublicSans-Regular",
        alignSelf:"center",
        marginVertical:20,
        marginTop: orientation.isLandscape ? orientation.height * 0.001 : orientation.height * 0.009,
        marginBottom: orientation.isLandscape ? orientation.height * -0.02 : orientation.height * 0.00,

     
    },

    imageRight:{
        width: orientation.isLandscape ? orientation.width * 0.03 : orientation.width * 0.03,
        height: orientation.isLandscape ? orientation.height * 0.05 : orientation.height * 0.04,
        resizeMode:"contain",
        tintColor:"gray"
    },

    image: {

       
        width: orientation.isLandscape ? orientation.width * 0.05 : orientation.width * 0.05,
        height: orientation.isLandscape ? orientation.height * 0.05 : orientation.height * 0.05,
        resizeMode:"contain"
        
    }



});


export default styles;
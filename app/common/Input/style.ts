import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
      // borderRadius:50,
      backgroundColor:"rgba(255, 255, 255, 0.7)",
      height: 35,
      // margin: 15,
      // paddingLeft: 10,
      marginVertical:15,
      borderTopRightRadius:30,
      borderBottomLeftRadius:30 ,
      position:"relative"

  
  
    },
    paragraph: {
      paddingLeft: 10,
      fontSize: 15,
      color:"white",
      fontWeight: 'bold',
      fontStyle:'italic'
      
    },
    inputContainer: {
      marginTop: 1,
      marginBottom: 10,
      width: '100%',
      backgroundColor:"rgba(255, 255, 255, 0.7)",
      borderTopRightRadius:30,
      borderBottomLeftRadius:30 ,
      borderWidth: 1,
      flexDirection: 'row',
      
     
    },
    iconStyle: {
      padding: 10,
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 40,
    },
   
    inputField: {
      padding: 1,
      marginTop: 5,
      marginBottom: 10,
     
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  
  
  })

export default styles;
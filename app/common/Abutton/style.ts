import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        
        alignSelf:"center",
        position:'absolute',
        // borderRadius:20,
        backgroundColor:"rgba(0, 102, 204, 0.7)",
       borderColor: 'rgba(0, 102, 204, 0.7)',
      borderWidth: 2,
      paddingHorizontal: 22,
      paddingVertical: 10,
      borderBottomLeftRadius:30,
      borderTopRightRadius:30
    },
    paragraph: {
        
        fontSize: 15,
        color:"white",
        fontWeight: 'bold',
        paddingHorizontal: 22,
      paddingVertical: 5,
        
      },
})

export default styles;
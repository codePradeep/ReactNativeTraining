import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const styles = StyleSheet.create({
    container: {
        
        alignSelf:"center",
        position:'absolute',
        borderRadius:90,
      borderColor: 'skyblue',
      borderWidth: 2,
      paddingHorizontal: 22,
      paddingVertical: 10,
    },
    button:{
      backgroundColor:COLORS.black,
      padding:10,
      marginVertical:10
  },
  ButtonText:{
      fontSize: 16,
      color: COLORS.white,
      ...Font.body,
      textAlign:"center"
  },
})

export default styles;
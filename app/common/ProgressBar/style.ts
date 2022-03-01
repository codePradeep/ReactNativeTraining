import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:13,
      borderRadius:10,
      backgroundColor:COLORS.white
    },
    subcontainer:{
        // position:"absolute",
        left:0,
        height:"100%",
        borderRadius:10,
        backgroundColor:COLORS.primary
    }
  
  
  })

export default styles;
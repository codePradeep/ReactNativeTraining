import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
  button:{
    backgroundColor:COLORS.primary,
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

export default styles;
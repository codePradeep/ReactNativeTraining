import { StyleSheet } from "react-native"
const styles = (orientation:any)=>StyleSheet.create({
    container:{
      borderRadius:180,
      justifyContent:"center",
      alignItems:"center"
  },
    image: {
      borderRadius:90,
      width: orientation.isLandscape ? orientation.width * 0.095 : orientation.width * 0.185,
      height: orientation.isLandscape ? orientation.width * 0.095 : orientation.width * 0.185,
      
      marginHorizontal: orientation.isLandscape ? orientation.width * 0.02 : orientation.width * 0.02,
      marginVertical: orientation.isLandscape ? orientation.height * 0.02 : orientation.height * 0.01,
    },
  })

export default styles
import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    boxcontainer:{
      flex:0.9,
      backgroundColor:"rgba(0, 0, 0, 0.4)" ,
      borderTopLeftRadius:80,
      borderBottomRightRadius:80 ,
      marginVertical:20,
    },

    ImageBackground:{
      flex: 1,
      justifyContent: "center"
    },
    
    paragraph: {
      margin: 18,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    error:{
      color:"red",
      fontSize:12,
      marginLeft:20
      
    } 
  });

  


export default styles
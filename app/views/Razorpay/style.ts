
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    maincontainer:{flex:1,
        justifyContent:"center",
        alignItems:"center"},
    container: {
        justifyContent:"center",
        alignSelf:"center",
        
        borderRadius:90,
      borderColor: 'black',
      borderWidth: 2,
      paddingHorizontal: 22,
      paddingVertical: 10,
    },
    paragraph: {
        
        fontSize: 15,
        color:"black",
       
        paddingHorizontal: 22,
      paddingVertical: 5,
        
      },
})

export default styles;
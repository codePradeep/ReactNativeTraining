import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Container: { 
        flex: 1,
         justifyContent: 'center', 
         alignItems: 'center' },
    childcontainer:
        {  width: 200, justifyContent:"space-between",alignItems:'center' ,}
    ,
    textinput:
    { borderRadius: 10,
         borderWidth:2,
          margin: 20 ,
          borderColor:"black",
          width:"80%",
          paddingLeft:20}
    ,
    paragraph: {
        textAlign:"center",
        paddingLeft: 10,
        fontSize:22,
        color:"black",
        fontWeight: 'bold',
        
      },
})

export default styles;
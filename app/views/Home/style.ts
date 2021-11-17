import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Container: {flex:1 ,
        
        justifyContent:"space-around",
        marginHorizontal:8,
        marginVertical:8
        
    },
    childcontainer:
        {  width: 200, justifyContent:"space-between",alignItems:'center' ,}
    ,
    sbutton:
        {  marginTop:20}
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
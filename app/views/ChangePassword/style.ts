import { StyleSheet } from "react-native";




// const getScreen = (o: object) => {
//   console.log('ori====>', o.isLandscape,o.height)
//   return 100;
// }


const styles = StyleSheet.create({
    MainContainer:{flex:1,justifyContent:"center" ,marginHorizontal:30},
    Image:{height:200,width:200,resizeMode:"contain"},
    ImageContainer:{alignSelf:"center"},
    welcometext:{fontSize:35 ,alignSelf:"center",color:"black",fontWeight:"500"},
    InputContainer:{marginTop:20,alignSelf:"center"},



})

export default styles
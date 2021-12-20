
import { StyleSheet } from "react-native";




// const getScreen = (o: object) => {
//   console.log('ori====>', o.isLandscape,o.height)
//   return 100;
// }


const styles = (orientation: any) => StyleSheet.create({

  container: {
    flex: 1,
  },
  image: {
    height: orientation.isLandscape ? orientation.height * 0.065 : orientation.height * 0.025 ,
    width: orientation.isLandscape ? orientation.width * 0.025 : orientation.width * 0.05,
    resizeMode: "contain",
    marginLeft:5,
    tintColor:"black"
  },

  maincontainer: {
    marginHorizontal: orientation.isLandscape ? orientation.height * 0.045 : orientation.width * 0.05,
    marginVertical: orientation.height * 0.009
  },
  item: {
      height:80,
      borderWidth:1,
   paddingRight: orientation.isLandscape ? orientation.width * 0.02 : orientation.width * 0.02,
   marginHorizontal:orientation.isLandscape ? orientation.width * 0.02 : orientation.width * 0.01, 
   marginVertical:orientation.isLandscape ? orientation.height * 0.02:orientation.height * 0.02,
  },
  title: {
    fontSize: 15,
    color: 'rgba(26, 24, 21,0.9)',
    width: orientation.isLandscape ?orientation.width * 0.8:orientation.width*0.8,
    height:orientation.isLandscape ? orientation.height * 0.16:orientation.height * 0.2,
    fontWeight: '600',
    paddingLeft:5,
    

  },
  header: {
    fontSize: 20,
    color: 'rgba(26, 24, 21,0.9)',
    fontWeight: "500",
    marginLeft: orientation.isLandscape ?orientation.width * 0.008:orientation.width*0.009,
    paddingBottom: orientation.height * 0.02


  },
  Textheading:{
    fontSize:20,
    color:"black",
    paddingLeft:10
  },
  Heading:{
    fontSize:14,
    alignSelf:"center",
    color:"gray",
    paddingTop:10
  },
  SubTextHeading:{
    fontSize:24,
    alignSelf:"center",
    color:"black",
    paddingBottom:20
    
    
  },
  Text:{
    color:"black",
    paddingLeft:10,
    paddingVertical:5
  },
  TextContainer:{
    marginLeft:20,
    marginTop:9
  }
});


export default styles;
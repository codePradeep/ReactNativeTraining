
import { StyleSheet } from "react-native";




// const getScreen = (o: object) => {
//   console.log('ori====>', o.isLandscape,o.height)
//   return 100;
// }


const styles = (orientation: any) => StyleSheet.create({
  ItemSeprator:{
   borderBottomWidth:2,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
  },
  image: {
    height: orientation.isLandscape ? orientation.height * 0.4 : orientation.height * 0.23 ,
    width: orientation.isLandscape ? orientation.width * 0.9 : orientation.width * 0.9,
    resizeMode: "stretch"
  },

  maincontainer: {
    marginHorizontal: orientation.isLandscape ? orientation.height * 0.045 : orientation.height * 0.025,
    marginVertical: orientation.height * 0.01
  },
  item: {
   paddingRight: orientation.isLandscape ? orientation.width * 0.02 : orientation.width * 0.02

  },
  title: {
    fontSize: 28,
    color: 'rgba(26, 24, 21,0.9)',
    width: orientation.isLandscape ?orientation.width * 0.8:orientation.width*0.8,
    height:orientation.isLandscape ? orientation.height * 0.15:orientation.height * 0.15,
    fontWeight: '600',
    fontFamily:"PublicSans-Regular"

  },
  header: {
    fontSize: 22,
    color: 'rgba(26, 24, 21,0.9)',
    fontWeight: "500",
    paddingBottom: orientation.height * 0.02,
    fontFamily:"PublicSans-Regular"


  },
  Progressbar:{ 
    marginVertical: 15, 
    height: 9 
  }
});


export default styles;
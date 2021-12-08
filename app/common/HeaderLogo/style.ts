import { StyleSheet, Dimensions } from "react-native"
const styles = (orientation: any) => StyleSheet.create({
  container: {
    // scaleY: 0.55,
    // scaleX: 0.5,
    // marginLeft: -windowWidth * 0.06,
    flex: 1,
    height: orientation.isLandscape ? orientation.height * 0.15 : orientation.height * 0.08,
    paddingRight: orientation.isLandscape ? orientation.width * 0.06 : orientation.width * .02

  },
  image: {
    flex: 1,
    width: orientation.isLandscape ? orientation.width * 0.1 : orientation.width * 0.18,
    height: orientation.isLandscape ? orientation.height * 0.085 : orientation.height * 0.5,
    resizeMode: 'contain'
  }
});


export default styles;
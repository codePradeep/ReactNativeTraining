import { StyleSheet } from "react-native";

const styles = (orientation: any) => StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    flexDirection: "column" },
  SubContainer: { 
    flex: 0.3,
     justifyContent: "center" },
  ImageContainer: { 
    flexDirection: "row", 
    alignItems: "center" },

  ItemSeprator: {
    marginHorizontal: orientation.isLandscape ? orientation.width * 0.021 : orientation.width * 0.03,
    height: orientation.isLandscape ? orientation.height * 0.001 : orientation.height * 0.001,
    width: orientation.isLandscape ? orientation.width * 0.9 : orientation.width * 0.93,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginVertical: 5
  },

  Listontainer: { flex: 0.7, },
  Line: { 
    height: 2, 
    width: 5000,
    backgroundColor: "rgba(0,0,0,0.2)", },
  Subheading: {
    marginHorizontal: 10, 
    marginVertical: 10, 
    fontWeight: "900",
    color: "black",
    fontFamily:"PublicSans-Regular"
  },
  Name: {
    fontSize: 19, 
    // fontWeight: "900",
    color: "black",
    fontFamily:"PublicSans-Regular"
  },
  Email: {
    fontSize: 12, 
    fontWeight: "500",
    color: "black",
    fontFamily:"PublicSans-Regular"
  }




})

export default styles
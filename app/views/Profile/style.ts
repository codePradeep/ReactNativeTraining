import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headercontiner: {
    justifyContent: "center",
    marginVertical: "2%",
    marginHorizontal: "3%"
  },
  Headersubcontainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  imageView: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center"
  },
  headername: { 
    fontSize: 20, 
    fontWeight: "900", 
    color: "black", 
    fontFamily:"PublicSans-Regular"
  },
  headerEmail: { 
    fontSize: 15, 
    fontWeight: "500", 
    color: "black" ,
    fontFamily:"PublicSans-Regular"
  },
  boxContainer: { 
    marginHorizontal: 20,
     marginVertical: 20
     },
  innerBoxContainer: {
     flexDirection: "row",
      justifyContent: "space-between" },


  conatainer: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20

  },
  Camera: {
    height: "40%",
    width: "40%",
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center"
  },
  line: {
    borderBottomWidth: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'rgba(86, 94, 94,0.2)',
  }
  ,
  modalView: {
    flexDirection: "row",
    backgroundColor: "#274040",
    padding: 20,
    justifyContent:"space-between"
    


  },

  modalimage1: {
    height: 40,
    width: 30,
    resizeMode: "contain",
    margin: 10,
    tintColor: "white"

  },
  modalCameraimage1: {
    height: 40,
    width: 40,
    resizeMode: "stretch",
    margin: 10,
   // tintColor: "white"

  },

  modaltext: {
    alignSelf: "center",
    color: "white",
    fontFamily:"PublicSans-Regular"
  },

  button: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 5

  },


  textStyle:
  {
    color: "white",
    textAlign: "center",
    fontFamily:"PublicSans-Regular"
  },
  Textheader: {
    fontSize: 12,
    color: "#636965",
    marginTop: 10,
    fontFamily:"PublicSans-Regular"

  },
  mainHeading: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
    fontFamily:"PublicSans-Regular"
  },
  InputText: {
    color: "black",
    fontSize: 16,
    fontFamily:"PublicSans-Regular"
  },
  Text:
  {
    fontSize: 18,
    color: "black",
    marginTop: 10,
    fontFamily:"PublicSans-Regular"
  },
  editandsave: {
    color: "black",
    padding: 5,
    backgroundColor: "lightgray",
    fontFamily:"PublicSans-Regular"
  }
});


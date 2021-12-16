import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headercontiner: {
    justifyContent: "center",
    marginVertical: "2%",
    marginHorizontal: "3%"
  },
Headersubcontainer:{ 
  flexDirection: "row", 
  alignItems: "center" 
},
  imageView:{ 
    justifyContent: "center", 
    alignSelf: "center", 
    alignContent: "center" 
  },
  headername:{ fontSize: 20, fontWeight: "900", color: "black" },
  headerEmail:{ fontSize: 15, fontWeight: "500", },
  boxContainer:{ marginHorizontal: 20, marginVertical: 20 },
  innerBoxContainer:{ flexDirection: "row", justifyContent: "space-between" },


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
  line:{ 
    borderBottomWidth:1, 
    backgroundColor: "rgba(0,0,0,0.2)", 
  },
  centeredView: { 
    flex: 1,
    backgroundColor:'rgba(86, 94, 94,0.2)' 
}
  ,
  modalView: {
     flexDirection:"row",
    backgroundColor: "#274040",
    padding: 20,
   alignContent:"center"
  },

modalimage1:{
  height:35,
  width:35,
  resizeMode:"contain",
  margin:10,
  tintColor:"white"

},

modaltext:{
  alignSelf:"center",
  color:"white"
},

  button: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 5

  },


  textStyle:
  {
    color: "white",
    textAlign: "center"
  },
  Textheader: {
    fontSize: 12,
    color: "#636965",
    marginTop: 10

  },
  mainHeading:{
    fontSize:20,
    color:"black",
    fontWeight:"500"
  },
  InputText:{
    color:"black",
    fontSize:16
  },
  Text:
  {
    fontSize: 18,
    color: "black",
    marginTop: 10
  },
  editandsave:{
    color:"black",
    padding:5,
    backgroundColor:"lightgray"
  }
});


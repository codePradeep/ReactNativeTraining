import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../config";
const styles = StyleSheet.create({
    mainContainer:{flex:1,backgroundColor:"white"},
    
    container: {
        flex:0.08 ,
        marginHorizontal:20,
        marginVertical:5
    },
    subcontainer: {
        flexDirection: "row",
       justifyContent: "space-between"

    },
    leftimagecontainer: {
        backgroundColor: "rgba(176, 174, 171,0.01)",
        borderRadius: 10,
        height: 40, width: 40,
        borderWidth:.5,
        borderColor:COLORS.gray2,
        justifyContent: "center"
    },
    HeaderRight:{
    
    height: 40, width: 40,
    justifyContent: "center"},
    leftimage: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
    },
    HeaderText:{
        fontSize:SIZES.headerLable,
        color:COLORS.black,
        fontWeight:"700",
        textAlignVertical:"center"
    },
    HeaderRightText:{
        fontSize:16,
        color:COLORS.red,
        fontWeight:"600"

    },
    listcontainer:{
        flex:1,
        backgroundColor:COLORS.lightGray2,
        borderRadius:15,
        marginHorizontal:20
    },
    secondlistcontainer:{
        flex:1,
        backgroundColor:COLORS.lightGray2,
        borderRadius:15,
        marginHorizontal:20,
        marginTop:20
    },
    OUTPUTECONTAINER:{
        flexDirection:"row",
         padding: 20, 
         justifyContent:"space-between"
        },
 
    SettingText:{
        color:COLORS.darkGray2,
        fontSize:16,
        
    },
    SettingoutputText:{
        color:COLORS.black,
        fontSize:16,
        
    },
    Itemsaperator:{
        marginHorizontal:15,
        borderBottomWidth:.5,
        borderColor:COLORS.darkGray2,
       
    },
    datePickerStyle: {
        
        alignSelf:"center",
      },
      datepickerconatainer:{
         marginHorizontal:15
          
      },
  
      datecontainer:{
        flex:1,
        marginHorizontal:15
  
      },
      input:{
        flexDirection:"row",
        backgroundColor:COLORS.white,
        borderRadius:10
    },
    textinput:{
        width:"90%",
        fontSize:19
    },
    icon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.darkGray
       
    },
    Email:{
        paddingBottom:10
    },
    dropdown2BtnStyle: { width: "100%",backgroundColor:"white",borderRadius:10, },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
      backgroundColor: "#EFEFEF",
      borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
    buttoncontner:{
        marginVertical:20,
        marginHorizontal:20
    }
  

})
export default styles
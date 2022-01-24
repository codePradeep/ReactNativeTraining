import { StyleSheet } from "react-native";
import { SIZES } from "../../config";
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
        backgroundColor: "rgba(176, 174, 171,0.09)",
        borderRadius: 10,
        height: 40, width: 40,
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
        color:"black",
        fontSize:SIZES.headerLable,
        fontWeight:"700",
        textAlignVertical:"center"
    },
    flatlistcontainer:{
        flex:1,
        backgroundColor: "rgba(176, 174, 171,0.1)",
        borderRadius:20,
        marginHorizontal:20
    },
    icon:{
        flex:0.2,
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor:"darkorange"

    },
    SettingText:{
        flex:0.9,
        color:"black",
        fontSize:18,
        fontWeight:"600"
    },
    Itemsaperator:{
        marginHorizontal:30,
        borderWidth:.5,
        borderColor:"rgba(176, 174, 171,0.5)",
        //width:"100%"
    }

})
export default styles
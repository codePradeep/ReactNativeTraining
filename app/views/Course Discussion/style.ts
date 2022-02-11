import { StyleSheet } from "react-native";
import { selectedTheme } from "../../config";

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:selectedTheme.backgroundwhiteNgray8,
        paddingHorizontal:20,
        paddingVertical:20
    },
    icon:{
        height:40,
        width:40,
        resizeMode:"contain",
        borderRadius:190
    },
    Textcontainer:{
        flexDirection:"row",
        marginVertical:5,
    },
    smallicons:{
        height:20,
        width:20,
        resizeMode:"contain"

    },
    Saperater:{
        borderBottomWidth:1,
        borderColor:selectedTheme.borderColor2
    },
    CommentStatuscontainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginVertical:5
    },
    title:{
        fontSize:20,
        fontWeight:"700",
        color:selectedTheme.textblackNwhite
    },
    subtitle:{
        fontSize:17,
        width:250,
        color:selectedTheme.textgray8Ngray4
    },
    text:{
        fontSize:15,
        color:selectedTheme.textgray8Ngray4,
        textAlignVertical:"center",
        marginHorizontal:2
    },
    subcontainer:{
        marginLeft:5
        
    },
    replys:{
        
        marginLeft:45
    }

})

export default styles
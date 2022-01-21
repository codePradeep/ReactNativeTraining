import { StyleSheet } from "react-native";
import { FONTS, selectedTheme } from "../../config";
import { COLORS } from "../../config/constants/theme";

const styles=StyleSheet.create({
    MainConatiner:{
        flex:1,
        backgroundColor:selectedTheme.backgroundColor1
    },
    container:{
        
        justifyContent:"center",
        marginHorizontal:"7%"
    },
    boxcontainer:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    box:{
        width:"40%",
        padding:10,
        borderRadius:10

    },
    bgimage:{
        height:"40%",
        width:"100%",
        position:"absolute"
    },
    input:{
        marginVertical:"5%"
    },
    heading:{

        alignSelf:"center",
        marginVertical:10,
        fontSize:30,
        fontWeight:"700",
        ...FONTS.heading,
        color:selectedTheme.textColor
    },
    inputecontainer:{
        borderBottomWidth:1,
        borderColor:selectedTheme.textColor3,
        
    },
    socialbuttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10
    },
    socialbuttons:{
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"center",
       backgroundColor:COLORS.gray10,
       width:"40%",
       borderRadius:90
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:10
    },
    formtext:{
        fontSize:14,
        color:selectedTheme.textColor

    },
    buttontext:{
        fontSize:17,
        color:selectedTheme.textColor4,
        fontWeight:"600"
    },
    text:{
        alignSelf:"center",
        fontSize:15,
        color:selectedTheme.textColor
    },
    button:{
        borderRadius:90,
        backgroundColor:COLORS.primary,
        alignItems:"center",
        padding:10,
        marginVertical:10
    },
    socialbuttonstext:{
         margin:12,
         alignSelf:"center",
         color:COLORS.black
    },
    signuptext:{
        alignSelf:"center",
        color:COLORS.primary,
        paddingLeft:10
    },
    newusertext:{
        alignSelf:"center",
        color:COLORS.black
    },
    Icon:{
        width:25,
        height:25,
        alignSelf:"center",
        resizeMode:"contain"
    },
    checkedIcon:{
        width:25,
        height:25,
        alignSelf:"flex-end",
        resizeMode:"contain",
        borderRadius:90
        
       
    }
})

export default styles
import { Dimensions, StyleSheet } from "react-native";
import { selectedTheme } from "../../config";
import { COLORS, FONTS } from "../../config/constants/theme";
const styles=(selectedTheme:any)=>StyleSheet.create({

    mainconatiner:{
        flex:1,
        backgroundColor:COLORS.primary,
        justifyContent:"flex-end"

    },
    conatiner:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:selectedTheme.backgroundwhiteNgray8,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    headContentcontainer:{
        paddingHorizontal:20,
        paddingVertical:20,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    leftbutton:{
        justifyContent:"center"
    },
    headerlefticon:{
        height:40,
        width:40,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.white
    },
    renderView:{
        borderWidth:1,
        padding:5,
    },
    view:{
        marginLeft:10
    },
    checkedcontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10
    },
    Icons:{
        height:40,
        width:40,
        resizeMode:"contain",
       // alignSelf:"center",
       // tintColor:selectedTheme.tintColor,
        borderRadius:90,
        borderWidth:1
    },
    bestdeals:{
        backgroundColor:COLORS.primary,
        color:COLORS.white,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        textAlignVertical:"center",
        padding:10,
        ...FONTS.heading,
        fontWeight:"700"
    },
    button:{
        borderRadius:90,
        backgroundColor:COLORS.primary,
        alignItems:"center",
        padding:10,
        marginVertical:20,
        
    },
    buttontext:{
        fontSize:17,
        color:selectedTheme.textwhite,
        fontWeight:"800",
        ...FONTS.heading
    },
    headertext:{
        fontSize:17,
        fontWeight:"700",
        marginVertical:20,
        color:COLORS.white,
        ...FONTS.heading
    },
    text:{
        fontSize:25,
        fontWeight:"700",
        marginVertical:20,
        color:COLORS.white,
        ...FONTS.heading
    },
    flatlistcontainer: {
        flex: 1,
        marginVertical: 20,
      },
      item: {
        borderWidth:.5,
        flex: 1,
        margin:4,
        borderRadius:10,
        height: Dimensions.get('window').width / 2, 
      },
      itemInvisible: {
        backgroundColor: 'transparent',
      },
      itemtext: {
        fontSize:14,
        color:selectedTheme.textblackNwhite,
        width:100,
        textAlignVertical:"center",
        ...FONTS.body

      },
      itembigtext:{
        fontSize:22,
        fontWeight:"700",
        ...FONTS.heading,
        color:selectedTheme.textblackNwhite,
        

      },
      price:{
          flexDirection:"row"
      }
})

export default styles
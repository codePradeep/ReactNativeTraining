import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS, } from "../../config";

let styles =(selectedTheme:any)=> StyleSheet.create({

    Container: {
        flex:1 ,
        backgroundColor:selectedTheme.backgroundwhiteNgray8,
        paddingHorizontal:20,
        paddingVertical:20

    },
    headercontainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    Text:{
        fontSize:22,
        fontWeight:"700",
        color:selectedTheme.textblackNwhite
        
    },
    SubText:{
        fontSize:14,
        color:selectedTheme.textgray8Ngray4
    },

    notifiactionicon:{
        height:30,
        width:30,
        resizeMode:"contain",
        alignSelf:"center",
        
    },
    mainScrollView:{
        flex:1
    },
    SubContainer:{
        padding:10,
        marginVertical:10

    },
    Image:{
        borderRadius:20,
        
    },
    howto:{
        color:COLORS.white,
        fontSize:22,
        ...FONTS.heading
    },
    subtextdata:{
        color:COLORS.white,
        fontSize:17,
        ...FONTS.body,
        width:250
    },
    auther:{
        marginVertical:5,
        color:COLORS.white,
        fontSize:15,
        ...FONTS.body,
        width:250
    },
    learnbutton:{
        padding:10,
        backgroundColor:COLORS.white,
        width:130,
        borderRadius:30,

    },
    learnbuttontext:{
        alignSelf:"center",
        color:COLORS.black,
        fontWeight:"700"
    },
    thirdrdcontainer:{
        flexDirection:"row"
    },
    thirdcontainertexttitle:{
        marginVertical:5,
        paddingLeft:10,
        fontSize:17,
        width:200,
        fontWeight:"700",
        color:selectedTheme.textblackNwhite,

    },
    row:{flexDirection:"row",marginLeft:10},
    seaperater:{
        borderBottomWidth:1,
        marginVertical:10,
        borderColor:selectedTheme.borderColor2
    },
    thumbnail:{
        borderRadius:20,
        height:150,
        width:240
    },
    playicon:{
        marginVertical:5
    },
    item: {
       flexDirection:"row",
               flex: 1,
        margin: 4,
        borderRadius: 30,
        height: Dimensions.get('window').width / 3,
    },
    Icons: {
        flex: 1,
        resizeMode: "contain",
        // alignSelf:"center",
        justifyContent: "flex-end",
        borderRadius: 20

    },
    itemtext: {
        margin: 10,
        fontSize: 22,
        fontWeight: "700",
        ...FONTS.largeTitle,
        color: COLORS.white

    },
    Itemcontainer:{
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    SeeAllbutton:{
        padding:9,
        borderRadius:20,
        backgroundColor:COLORS.primary,
        alignSelf:"center"
    },
    seeAlltext:{
        color:COLORS.white,
        fontSize:12,
        fontWeight:"700",
        
    },
    
smallicon:{
    height:15,
    width:15,
    resizeMode:"contain",
    alignSelf:"center",
    tintColor:selectedTheme.tintColor
},
    time: {
        color: selectedTheme.textblackNgray4,
        
       
    },
    ratings:{
        fontSize:15,
        fontWeight:"700",
        color:selectedTheme.textblackNwhite,
        textAlignVertical:"center"
    },

    notificationtitlecontainer:{
        flexDirection:"row",
    },
    seperater:{
        borderBottomWidth:.5,
        borderColor:selectedTheme.borderColor2,
        marginVertical:20
    },
    itemtextcontainer:{
        marginLeft:10
    },
    header: {
        fontSize: 18,
        color: selectedTheme.textgray8Ngray4
    },
    title: {
        width:200,
        fontSize: 18,
        fontWeight:"700",
        color: selectedTheme.textblackNwhite
    },
    subtitle: {
        fontSize:20,
        fontWeight:"700",
        
        color: selectedTheme.textgreenNwhite,
    },
    ratingcontainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 5,
        alignSelf: "center",
        //resizeMode: "contain",
    },
    fevcontainer:{
        flex:1,
        height:25,
        width: 25,
        backgroundColor:COLORS.white,
        borderRadius:5,
        position:"absolute",
       margin:10,
       alignItems:"center"
    },
    fevcon:{
        width:15,
        height:15,
        justifyContent:"center",
        margin:5,
        tintColor:COLORS.primary2
    },




    
})

export default styles;
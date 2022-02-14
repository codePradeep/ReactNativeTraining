import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { COLORS, selectedTheme } from "../../config";

const styles = StyleSheet.create({
    mainconatiner: {
        flex: 1,
        
        backgroundColor: selectedTheme.backgroundwhiteNgray8

    },
    headercontainer: {
        paddingVertical: 20
    },
    profileicon: {
        height:40,
        width: 40,
        borderRadius:90,
        alignSelf:"center"

    },
    conatiner: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
    studentdata:{
        flexDirection:"row"
    },
    usertitle:{
        fontSize:22,
        color:selectedTheme.textblackNgray,
        fontWeight:"700"
    },
    profileconatiner: {
       flexDirection:"row",
       justifyContent:"space-between"

    },
    Smalltext:{
        fontSize:14,
        color:selectedTheme.textgray8Ngray4,
        marginRight:5
    },
    subprofileconatiner: {
        flexDirection:"row",
 
     },
     videocontainer:{
         marginVertical:10,
         flexDirection:"row",
         justifyContent:"space-between"
     },
     subvideocontainer:{
         flexDirection:"row",
       

     },
     videoIcon:{
         width:25,
         height:25,
         resizeMode:"contain",
         alignSelf:"center",
         borderRadius:90
     },
     buttoncontainer:{
         flexDirection:"row"
     },
     downloadIcon:{
        width:20,
        height:20,
        resizeMode:"contain",
        alignSelf:"center",
        marginLeft:5
    },
    

    Itemcontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    thirdcontainertexttitle:{
       
        fontSize:21,
        width:200,
        fontWeight:"700",
        color:selectedTheme.textblackNwhite,

    },
    headerlefticon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: selectedTheme.tintColor
    },
    headersub: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    HeaderText: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "700",
        textAlignVertical: "center",
        marginVertical: 20
    },
    filterbutton: {
        alignSelf: "center",
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 10

    },
    filterbuttontext: {
        color: selectedTheme.textblackNwhite,
        fontSize: 17,
        fontWeight: "700",
        textAlignVertical: "center"
    },
    filtericons: {
        width: 25,
        height: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.white


    },
    secContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },

    mobileimage: {
        resizeMode: "contain"
    },
    item: {
        flexDirection: "row",

        borderRadius: 10,
        marginVertical: 5
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 5,
        alignSelf: "center",
        //resizeMode: "contain",
    },
    fevcon: {
        width: 15,
        height: 15,
        justifyContent: "center",
        margin: 5,
        tintColor: COLORS.primary2
    },
    fevcontainer: {
        flex: 1,
        height: 25,
        width: 25,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        position: "absolute",
        margin: 10,
        alignItems: "center"
    },

    header: {
        fontSize: 18,
        color: selectedTheme.textgray8Ngray4
    },
    title: {
        width: 200,
        fontSize: 18,
        fontWeight: "700",
        color: selectedTheme.textblackNwhite
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "700",

        color: selectedTheme.textgreenNwhite,
    },
    ratingcontainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    },

    smallicon: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        alignSelf: "center"
    },
    time: {
        color: selectedTheme.textblackNgray4,


    },
    ratings: {
        fontSize: 15,
        fontWeight: "700",
        color: selectedTheme.textblackNwhite,
        textAlignVertical: "center"
    },

    notificationtitlecontainer: {
        flexDirection: "row",
    },
    seperater: {
        borderBottomWidth: .5,
        borderColor: selectedTheme.borderColor2,
        marginVertical: 20
    },
    itemtextcontainer: {
        marginLeft: 10
    },
    modalView: {
        flex: 1,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: selectedTheme.backgroundwhiteNgray8,
        padding: 20,
        justifyContent: "space-between"

    },
    modalTextcontainer: {
        flexDirection: "row",
        justifyContent:"space-between"
       
    },
    distancecontainer: {
        marginVertical: 10
    },
    modalText: {
        fontSize: 22,
        color: selectedTheme.textblackNwhite,
        fontWeight: "600",
        

    },
    ModalSubText: {
        fontSize: 16,
        color: selectedTheme.textblackNwhite,
        fontWeight: "600",

    },
    ModalTextSeperator: {
        borderWidth: .5,
        borderColor: COLORS.gray20,
        width: "100%",
        marginVertical: 10
    },
    modalcross: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.gray10
    },
    crossimageconatainer: {

        borderWidth: .5,
        borderRadius: 5,
        padding: 5,
        borderColor: COLORS.gray10,
        
    },
    customRatingBarStyle: {
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5,

    },
    view: { flex: .3, backgroundColor: "rgba(0,0,0,0.2)" },
    
    Icons:{
        height:40,
        width:40,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:selectedTheme.tintColor
    },
    itemtext: {
        fontSize:14,
        color:selectedTheme.textblackNwhite

      },
      classtypeitem:  {borderWidth:.5,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin:4,
      borderRadius:10,
      height: Dimensions.get('window').width / 4, },
      classlevelcontainer:{
          marginVertical:10
      },
      classlevelbtn:{
          flexDirection:"row",
          justifyContent:"space-between"
      },
      levelsaperater: {
        borderBottomWidth: .5,
        borderColor: selectedTheme.borderColor2,
        marginVertical: 5
    },
    cretedwithincontainer:{
  flexDirection:"row",
  flexWrap:"wrap",
  
    },
    Createdcontainer:{
        padding:10,
        marginRight:5,
        marginVertical:5,
        borderRadius:10
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,
        width:"45%"
    },
    
    buttontext: {
        padding: 10,
        color: COLORS.white,
        textAlign: "center",
        fontWeight: "700",
        fontSize: 19

    },
    restbutton:{
        backgroundColor: selectedTheme.backgroundwhite1Ngray9,
        borderRadius: 9,
        borderWidth:.5,
        width:"45%"
    },
    resetetxt:{
        padding: 10,
        color: selectedTheme.textblackNwhite,
        textAlign: "center",
        fontWeight: "700",
        fontSize: 19
    },
    filterbuttoncontainer:{
        flexDirection:"row",
        justifyContent:"space-between"
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
    playbutton:{  height:40,
        width:40,
        backgroundColor:COLORS.primary,
        borderRadius:90,
        alignItems:"center",
        justifyContent:"center"}


});

export default styles
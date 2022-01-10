import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config";

const style=StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    container: {
        flex: 1,
        marginHorizontal: 20, marginVertical: 20
    },

    headercontainer: {
        flex:1,
        marginBottom: 20
    },
    headersubcontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerleftimagecontainer: {
        backgroundColor: "rgba(176, 174, 171,0.02)",
        borderRadius: 10,
        height: 40, width: 40,
        justifyContent: "center",
        borderWidth: 0.5
    },
    HeaderRight: {

        height: 40,
        width: 40,
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    headerleftimage: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
    },
    HeaderText: {
        color: COLORS.black,
        fontSize: SIZES.headerLable,
        fontWeight: "700",
        textAlignVertical: "center"
    },
    headerRightimage: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        justifyContent: "center",
        tintColor: COLORS.black,
        position: "absolute"

    },

    headerRightimagecountertext: {
        backgroundColor: COLORS.red,
        padding: 2,
        borderRadius: 20,
        color: COLORS.white,
        height: 20,
        width: 20,
        textAlign: "center",
        textAlignVertical: "center",
        alignSelf: "flex-start",
        marginLeft: 10
    },
    firstrendercontainer: {
        
        flexDirection: "row"
    },
    itemcontainer: {
        flexDirection: "row",
        padding: 6,
        borderRadius: 10,
        justifyContent: "space-between"
    },
    itemIcon: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        alignSelf: "center"
    },
    itemtext: {
        fontSize: 16,
        alignSelf: "center",
        paddingHorizontal: 5
    },
    Itemsaperator: {
        margin: 10

    },
    subfirstrendercontainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
        padding: 10,
        borderRadius: 15,
    },
    itemsubcontainer:{
        flexDirection:"row"
    },
    Icon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        alignSelf: "center",
    },
    text: {
        padding:5,
        textAlignVertical:"center"
    },
    statusicon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf: "center",
        
    },
    image: {
        height: 150,
        width: 250,
        resizeMode: "contain",
        alignSelf: "center"
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        
      },
      activestarImageStyle: {
        width: 30,
        height:30,
        resizeMode: 'cover',
        tintColor:COLORS.lightOrange
      },
      inactivestarImageStyle: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        tintColor:COLORS.lightOrange2
      },


      customtipsBarStyle: {
          flex:.9,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5,
        
      },
      activeStyle:{
        backgroundColor:COLORS.primary,
        borderRadius:10
        
    },
    inactiveStyle:{
        borderColor:COLORS.gray2,
        borderWidth:1,
        borderRadius:10
      
    },
      activeTextStyle:{
          color:COLORS.white,
          fontSize:16,
          padding:12,
          
      },
      inactiveTextStyle:{
        color:COLORS.gray2,
        fontSize:16,
        padding:12
        
      },
      tipcontainer:{
        flex:1,
          flexDirection:"row",
          justifyContent:"space-between"
      },
      statuscontainer:{ flexDirection: "row",  justifyContent: "space-between" ,marginVertical:10},
      rating:{ flexDirection: "row",
    alignSelf:"center"},
    usericon:{
        height:50,
        width:50,
        resizeMode:"contain",
        alignItems:"center",
        
    },
    subrenderitemcontainer: {
        flexDirection: "row",
        backgroundColor: COLORS.lightGray1,
        borderRadius: 10,
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 15
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,
        flexDirection:"row",
        alignSelf:"center"
        
    },
    buttontext: {
        padding: 10,
        color: COLORS.white2,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19
    },
    ratingtext:{
        color:COLORS.white,
        alignSelf:"center",
        paddingRight:10
    },
    ratingboxStyle:{
        backgroundColor:COLORS.primary,
        borderRadius:10,
        flexDirection:"row"
        
    },
    ratingstatusicon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor:COLORS.white,
        margin:5
    }

})

export default style
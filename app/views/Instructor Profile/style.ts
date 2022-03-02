import { Dimensions, StyleSheet } from "react-native";
import { selectedTheme } from "../../config";
import { COLORS, FONTS } from "../../config/constants/theme";
const styles = (selectedTheme: any) => StyleSheet.create({

    mainconatiner: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "flex-end"

    },
    conatiner: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: selectedTheme.backgroundwhiteNgray8,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    headContentcontainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftbutton: {
        justifyContent: "center"
    },
    headerlefticon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.white
    },
    renderView: {
        borderWidth: 1,
        padding: 5,
    },
    userdatacontainer: {
        marginTop: 40,
        alignItems: "center"
    },
    view: {
        marginLeft: 10
    },
    checkedcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    Icons: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        // alignSelf:"center",
        // tintColor:selectedTheme.tintColor,
        borderRadius: 90,
        borderWidth: 1
    },
    bestdeals: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        textAlignVertical: "center",
        padding: 10,
        ...FONTS.heading,
        fontWeight: "700"
    },
    button: {
        borderRadius: 90,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        padding: 10,
        marginVertical: 20,

    },
    buttontext: {
        fontSize: 17,
        color: selectedTheme.textwhite,
        fontWeight: "800",
        ...FONTS.heading
    },
    headertext: {
        fontSize: 17,
        fontWeight: "700",
        marginVertical: 20,
        color: COLORS.white,
        ...FONTS.heading
    },
    text: {
        fontSize: 25,
        fontWeight: "700",
        marginVertical: 20,
        color: COLORS.white,
        ...FONTS.heading
    },
    StudentReviewcontainer: {
        flexDirection: "row",
        backgroundColor: COLORS.primary3,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },

    studentreviewtext: {
        fontSize: 17,
        fontWeight: "700",
        color: COLORS.white,
        marginLeft: 10,
        ...FONTS.heading
    },

    progressContainer:{
        padding:10,
        backgroundColor:COLORS.gray10
    },

    progressbar:{
        marginVertical:10
    },
    progresSubcontainer:{
        flexDirection:"row",
        
    },
    progresSecendSubcontainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    progressicon:{
        height:20,
        width:20,
        resizeMode:"contain",
        marginRight:5,
    },
    progressText:{
        fontSize:17,
        fontWeight:"600",
        color:selectedTheme.textblackNgray4
    },
    

    flatlistcontainer: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        flexDirection: "row",
        flex: 1,
        margin: 4,
        borderRadius: 30,
        height: Dimensions.get('window').width / 3,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemtext: {
        fontSize: 14,
        color: selectedTheme.textblackNwhite,
        width: 100,
        textAlignVertical: "center",
        ...FONTS.body

    },
    itembigtext: {
        fontSize: 22,
        fontWeight: "700",
        ...FONTS.heading,
        color: selectedTheme.textblackNwhite,


    },
    price: {
        flexDirection: "row"
    },
    ImageContainer: {
        width: 80,
        height: 80,
        alignItems: "center",
        position: "absolute",
        marginTop: -35,
        alignSelf: "center"



    },
    camericon: {
        height: 10,
        width: 15,
        tintColor: COLORS.white
        // resizeMode:"contain",
        // position:"absolute",
        // justifyContent:"center",
        // alignSelf:"flex-end"
    },
    imagecontainerView: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    imageViewContainer: {
        width: 25,
        height: 25,
        marginBottom: -15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "blue"
    }, profileicon: {
        height: "100%",
        width: "100%",
        borderRadius: 40,
        borderWidth: 1,

        borderColor: COLORS.white

    },
    followbtn: {
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 20
    },
    followbtntext: {
        color: COLORS.primary,
        fontWeight: "700",
        ...FONTS.heading
    },
    username: {
        color: selectedTheme.textblackNwhite,
        fontSize: 22,
        fontWeight: "700",
        width: 200,
        textAlign: "center"
    },
    body: {
        color: selectedTheme.textblackNwhite,
        fontSize: 15,


    },
    itemtextcontainer: {
        marginLeft: 10
    },
    Itemcontainer: {
        marginVertical:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    SeeAllbutton: {
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        alignSelf: "center"
    },
    seeAlltext: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "700",

    },
    thirdcontainertexttitle: {
        marginVertical: 5,
        fontSize: 21,
        width: 200,
        fontWeight: "700",
        color: selectedTheme.textblackNwhite,

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
    fevcon: {
        width: 15,
        height: 15,
        justifyContent: "center",
        margin: 5,
        tintColor: COLORS.primary2
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 5,
        alignSelf: "center",
        //resizeMode: "contain",
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
    notificationtitlecontainer: {
        flexDirection: "row",
    },
    seperater: {
        borderBottomWidth: .5,
        borderColor: selectedTheme.borderColor2,
        marginVertical: 20
    },

    smallicon: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: selectedTheme.tintColor
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
    socialbtnIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        alignSelf: "center"
    },
    socialbtn: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: selectedTheme.backgroundgray10Ngray70,
        borderRadius: 10,

        marginVertical: 5,
        justifyContent: "space-between"
    },
    flexDirectionrow: {
        flexDirection: "row",
        justifyContent: "center"

    },
    socialbtnText: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: "600",
        color: selectedTheme.textblackNwhite,
        textAlignVertical: "center"
    },
    reviewcontainer: {
        flexDirection: "row",
        padding: 10, marginLeft: 10,
        borderRadius: 10,
        backgroundColor: selectedTheme.backgroundblueNgray9,


    },
    studentname: {
        fontSize: 16,
        width: 150,
        fontWeight: "600",
        marginVertical: 5,
        color: COLORS.white
    },
    comment: {
        fontSize: 14,
        width: 150,
        color: COLORS.white
    },
    postedon: {
        fontSize: 11,
        width: 150,
        marginVertical: 5,
        color: COLORS.white
    },
    socialcontainer: {
        padding: 10,
        backgroundColor: COLORS.gray10,
        marginLeft: 10,
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,

    }



})

export default styles
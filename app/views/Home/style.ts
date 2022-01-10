import { BackHandler, Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config";
const width = Dimensions.get("screen").width

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    headercontainer: {
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
        height: 40,
        width: 50,
        resizeMode: "contain",
        alignSelf: "center",
    },
    searchbarcontainer: {

        flexDirection: "row",
        backgroundColor: COLORS.lightGray2,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderRadius: 15



    },
    searchbarinput: {

        width: "85%",
        fontSize: 16

    },
    searchbarimage: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.black
    },
    addresscontainer: {
        marginVertical: 10
    },
    firstflatlistContainer: {
    },
    firstrendercontainer: {
        flex: 1,
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
    Icon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        alignSelf: "center"
    },
    image: {
        height: 150,
        width: 250,
        resizeMode: "contain",
        alignSelf: "center"
    },
    text: {
        textAlign: "center"
    },
    modalView: {
        flex: 1,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: COLORS.white2,
        padding: 20,
        justifyContent: "space-between"

    },
    modalTextcontainer: {
        flexDirection: "row",

        justifyContent: "space-between"
    },
    distancecontainer: {
        marginVertical: 10
    },
    modalText: {
        fontSize: 22,
        color: COLORS.black,
        fontWeight: "600",

    },
    ModalSubText: {
        fontSize: 16,
        color: COLORS.black,
        fontWeight: "600",

    },
    ModalTextSeperator: {
        borderWidth: .5,
        borderColor: COLORS.gray2,
        width: "100%",
        marginVertical: 10
    },

    subContainer: {
        flex: .85,
        // justifyContent:"space-between"
    },
    CardContainer: {


    },
    subcardcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 9,
        borderWidth: .5,

        borderRadius: 10

    },
    textcontainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    view: { flex: .3, backgroundColor: "rgba(0,0,0,0.2)" },
    CardIcon: {
        height: 60,
        width: 60,
        resizeMode: "contain",
        alignSelf: "center"
    },
    redioIcon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.primary
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,
    },
    Inputtext: {
        width: "88%",
        backgroundColor: "white",
        marginRight: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 15
    },
    buttontext: {
        padding: 10,
        color: COLORS.white2,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19

    },
    modalcross: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.lightGray1
    },
    crossimageconatainer: {
        borderWidth: .5,
        borderRadius: 5,
        padding: 5,
        borderColor: COLORS.lightGray1
    },
    customRatingBarStyle: {
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5,

    },
    activestarImageStyle: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        tintColor: COLORS.primary,
        
    },
    inactivestarImageStyle: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        tintColor: COLORS.darkGray,
        
    },
    customtipsBarStyle: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5,
    },
    activeStyle: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        width: 120
    },
    inactiveStyle: {
        borderColor: COLORS.gray2,
        borderWidth: 1,
        borderRadius: 10,
        width: 120
    },
    activeTextStyle: {
        color: COLORS.white,
        fontSize: 16,
        padding: 10,
        textAlign: "center"
    },
    inactiveTextStyle: {
        color: COLORS.gray2,
        fontSize: 16,
        padding: 10,
        textAlign: "center"
    },
    activestarStyle: {
        backgroundColor: COLORS.lightOrange3,
        borderRadius: 10,
        padding:10
    },
    inactivestarStyle: {
        borderColor: COLORS.gray2,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor:COLORS.lightGray2,
        padding:10
    },
    startext: {
        fontSize: 14,
        alignSelf: "center",
        padding: 5,
        fontWeight:"600"
    },
    starcontainer: {
        flexDirection: "row"
    },
    smallcontainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    mainsmallcontainer: {
        flex: 1,
        marginVertical: 10
    },
    subfirstrendercontainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
        padding: 10,
        borderRadius: 15,
    },
    itemsubcontainer:{
        flexDirection:"row"
    }


})

export default styles;
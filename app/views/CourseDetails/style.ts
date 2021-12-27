import { StyleSheet } from "react-native";
import Progress from "../Progress";

const Styles = (orientation: any) => StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    Crossmodalbutton: {
        alignSelf: "flex-end"
    },
    ModalTextTitle: {
        fontSize: 18,
        color: "black"
    },
    ModalFilterButton: {
        borderWidth: 1,
        marginTop: 20
    },
    Modalfiltertext: {
        padding: 10,
        alignSelf: "center"
    },
    headercontainer: {
        flex: 1,
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    customheadercontainer: {
        flex: .5,
        marginVertical: 20
    },


    FirstContainer: {
        flex: 0.3,
        // backgroundColor:"blue",
        //justifyContent:"space-between",

    },

    Image: {
        flex: 1,

        height: "100%",
        width: "100%",
        // alignSelf:"center",

        position: "absolute",

    },
    headingText: {
        color: "black",
        fontSize: 30,
        fontWeight: "600",
        width: 300,
        fontFamily: "PublicSans-Regular"



    },
    Progressbar: {

    },
    ProgressText: {
        color: "white",
        fontSize: 15,
        fontFamily: "PublicSans-Regular"
    },

    SecondContainer: {
        flex: 0.7,
        marginHorizontal: 30,
        marginTop: 20
    },
    Moduletext: {
        color: "black",
        borderBottomWidth: 2,
        fontSize: 20,
        borderColor: "orange",
        padding: 9,
        fontFamily: "PublicSans-Regular"
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center"
    },
    MenuContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    SubmenuContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Viewedmodulecontainer: {
        flexDirection: "row",

        justifyContent: "space-between",
        marginTop: 20
    },
    ViewedmoduleText: {
        color: "gray",
        fontFamily: "PublicSans-Regular"
    },
    lifeText: {
        fontSize:
            25, color: "black",
        fontWeight: "600",
        fontFamily: "PublicSans-Regular"
    },
    resumebutton: {
        backgroundColor: "black",
        height: 35
    },
    ResumeText: {
        color: "white",
        padding: 8,
        fontFamily: "PublicSans-Regular",
        paddingHorizontal: 20
    },
    Text: {
        fontSize: 17,
        color: "gray",
        paddingVertical: 20,
        fontFamily: "PublicSans-Regular"
    },

    Filtertext: {
        color: "black",
        fontSize: 20,
        fontFamily: "PublicSans-Regular",
        marginRight: 10
    },
    bookmarktagconatiner: {
        backgroundColor: "lightgray",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    bookmarkContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    smallIcon: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        alignSelf: "center"
    },
    filterButton: {
        backgroundColor: "white"
        , height: 35,
        borderColor: "orange",
        borderWidth: 1
    },
    filterbuttonText: {
        color: "orange",
        padding: 9,
        fontFamily: "PublicSans-Regular"
    },


    menucontainer: {
        // flex:0.7,
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    ModuleContainer: {
        flexDirection: "row"
    },
    ItemSeprator: {
        height: orientation.isLandscape ? orientation.height * 0.001 : orientation.height * 0.001,
        backgroundColor: "rgba(0,0,0,0.2)",
        marginVertical: 10
    },

    filterContainer: {
        justifyContent: "space-between",
        flexDirection: "row"

    },
    modalView: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "lightgray",
        padding: 20,
        // justifyContent:"flex-end"



    },

    modalimage1: {
        height: 40,
        width: 30,
        resizeMode: "contain",
        margin: 10,
        tintColor: "white",
    },
    modalCameraimage1: {
        height: 40,
        width: 40,
        resizeMode: "stretch",
        margin: 10,
        // tintColor: "white"
    },

    modaltext: {
        alignSelf: "center",
        color: "white",
        fontFamily: "PublicSans-Regular"
    },


})
export default Styles
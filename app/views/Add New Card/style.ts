import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",



    }, 
    headercontainer:{
        flex:.1,
        marginBottom:20
    },

    container: {
        flex: 1,

        marginHorizontal: "5%",
        marginVertical: "2%"

    },

    card: {
        height: 190,
        width: "100%",
        resizeMode: "cover",
        backgroundColor: COLORS.lightOrange,
        borderWidth: 1,
        borderColor: COLORS.darkGray2,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-end",
        borderRadius: 30,
        paddingHorizontal: 20

    }
    ,
    Cardnumber: {
        fontSize: 18,
        color: COLORS.white,
        paddingBottom: 20,
        fontWeight: "600"
    },
    subcontainer: {
        flex: 1,
        //    justifyContent:"space-around",

    },
    textcontainer: {
        flex: 1,

        alignItems: "center",


    },

    Subtext: {
        fontSize: 15,
        color: "darkgray",
        width: 250,
        textAlign: "center"
    },
    input: {
        flexDirection: "row",
        backgroundColor: "lightgray",
        borderRadius: 10,

    },

    label: {
        fontSize: 15,
        fontWeight: "500",
        color: COLORS.black,
        paddingVertical: 5.5
    },
    textinputcontainer: {
        flexDirection: "row",
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10
    },
    textinput: {
        width: "90%",
        fontSize: 19,
        paddingLeft: 10,
        color: COLORS.gray

    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.primary

    },
    twoinputcontainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    SmallContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
        width: 150,


    },
    dateinput: {

        flexDirection: "row",
        textAlign: "center",
        borderRadius: 10,
        width: "75%",
        color: COLORS.gray

    },
    secondicon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.primary


    },
    redioicon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.primary

    },
    checktext: {
        alignSelf: "center",
        paddingLeft: 10

    },
    check: {
        flexDirection: "row",
        marginVertical: 40
    },

})
export default styles
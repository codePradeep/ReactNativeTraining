import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",

    },
    container: {
        flex: .9,
        justifyContent: "space-between",
        marginHorizontal: "5%",
        marginVertical: "2%"

    },
    subcontainer: {
        flex: 1,
        justifyContent: "space-around"
    },
    textcontainer: {

        alignItems: "center",
        marginBottom: 20


    },
    text: {
        fontSize: 22,
        fontWeight: "600",
        color: "black"
    },
    Subtext: {
        fontSize: 15,
        color: "darkgray",
        width: 250,
        textAlign: "center"
    },
    input: {
        flexDirection: "row",
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10
    },
    textinput: {
        width: "90%",
        fontSize: 19
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",

    },
    Email: {
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: "700"
    },

    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,

    },

    buttontext: {
        padding: 10,
        color: "white",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19

    },
    flexdirection: {
        flexDirection: "row",
        marginVertical: 10
    },
    bottomtext: {
        color:COLORS.darkGray2,
        fontSize:17,
        fontWeight:"600",
        textAlignVertical: "center"
    },
    bottomforgetText: {
        color:COLORS.darkBlue,
        fontSize:17,
        fontWeight:"600",
        textAlignVertical: "center"
    },
    bottomsignuptext: {
        color: COLORS.red,
        fontWeight: "700",
        fontSize: 18,
        paddingLeft:10
    },
    forget: {
        alignSelf: "center"
    },
    eyeiconcontainer: {
        alignSelf: "center"
    },
    EmailContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    GoogleSignInButton: {
        width: "100%",
        paddingVertical: "7%",

    },
    FacebookSigninButton: {
        width: "100%",
        paddingVertical: "4%",
        marginVertical: "4%",
        backgroundColor: COLORS.blue,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,

        shadowColor: COLORS.black,
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },

    },
    FacebookSigninButtontext: {
        flex: .7,
        color: COLORS.white,
        alignSelf: "center",
        textAlignVertical: "center",
        fontSize: SIZES.h4,
        fontWeight: "600"
    },
    FacebookSigninButtonicon: {
        marginLeft: 10,
        height: "200%",
        width: "10%",
        resizeMode: "contain",
        alignSelf: "center",

    }

})
export default styles
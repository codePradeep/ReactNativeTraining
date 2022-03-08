import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const Styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10
    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    H1: {
        fontSize: 25,
        color: "black",
        fontWeight: "600",
        ...Font.heading
    },
    H2: {
        fontSize: 15,
        color:"#484848",
        fontWeight: "600",
        width:"95%",
        ...Font.heading
    },
    P1: {
        fontSize: 14,
        color: "black",
        ...Font.body

    },
    cardContainer: {
        backgroundColor: COLORS.graybackground,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    Textcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    },
    giftcardbutton: {
        flexDirection: "row",
        backgroundColor: COLORS.black,
        borderRadius: 30,
        width: 90,
        padding: 10,
        marginVertical: 10
    },
    sendgiftcard: {
        backgroundColor: COLORS.graybackground,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    Sendgiftbutton: {
        backgroundColor: COLORS.white,
        borderRadius: 30,
        width: 100,
        padding: 10,
        marginVertical: 10
    },
    Seperater: {
        borderBottomWidth: 1,
        left: -10,
        width: "110%",
        marginVertical: 10
    },
    buttoncontainer: {
        flexDirection: "row",
        marginVertical: 10,
        alignItems:"center"
    },
    imagecontainer:{
        backgroundColor:COLORS.black,
        padding:10,
        borderRadius:90,
        marginRight:10
    }

})

export default Styles
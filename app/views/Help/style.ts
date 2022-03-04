import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,

    },
    header: {
        flex: .1,
        backgroundColor: COLORS.black,
        padding: 20
    },
    H1: {
        fontSize: 40,
        color: COLORS.white,
        ...Font.body
    },
    H2: {
        fontSize: 18,
        color: "black",
        fontWeight: "600",
        ...Font.heading
    },
    P1: {
        fontSize: 16,
        color: "black",
        ...Font.body

    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: COLORS.white
    },
    secendContainer: {
        flex:.9,
        padding: 20
    },
    buttoncontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    backicon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: COLORS.black
    }
})

export default styles
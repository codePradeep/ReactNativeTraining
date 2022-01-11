import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
    pagerview: {
        flex: 1
    },
    FirstView: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    maincontainer: { flex: 0.7 },
    image: { resizeMode: "contain", height: "100%", width: "100%" },
    heading: {
        color: "black",
        fontSize: 22,
        fontWeight: "700",
        alignSelf: "center"

    },
    subheading: {
        color: "gray",
        fontSize: 16,
        alignSelf: "center",
        width: 350,
        textAlign: "center"


    },
    buttoncontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 20
    },
    skipbutton: { alignSelf: "center" },
    skiptext: {
        color: COLORS.blue,
        textAlignVertical: "center"
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,

    },
    buttontext: {
        padding: 10,
        color: "white",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 19,
        width: 200

    },
    endbuttontext: {
        padding: 10,
        color: "white",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 19,


    },
    lastbuttoncontainer: {
        marginHorizontal: 20,
        marginBottom: 20

    }



})
export default styles
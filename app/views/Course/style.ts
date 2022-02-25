import { StyleSheet, TextInputComponent } from "react-native";
import { COLORS, selectedTheme } from "../../config";

const styles = (selectedTheme:any)=>StyleSheet.create({
    mainconatiner: {
        flex: 1,

        backgroundColor: selectedTheme.backgroundwhiteNgray8
    },
    VideoConatiner: {
        backgroundColor: "white",
        width: "100%",
        height: "40%",

    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    },
    imagebackgraound: {
        width: "100%",
        height: "100%"
    },
    headercontainer: {

        padding: 15,
        alignContent: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconback: {
        width: 35,
        height: 35,
        backgroundColor: selectedTheme.backgroundgray10Ngray70,
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center",
        tintColor:"white"
    },
    playbutton: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 90,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    icons: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    ButtonContainer: {

        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        backgroundColor: selectedTheme.backgroundgray10Ngray70,
        padding: 10,
        width: "100%",
        flex: 1,
        alignItems: "center",
        borderBottomWidth: 2
    },
    secendicons: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        tintColor: COLORS.white,
        alignSelf: "center",
        marginRight: 10
    },
    btnText: {
        fontSize: 18,
        fontWeight: "600",
        color: selectedTheme.textblackNgray
    }
})

export default styles
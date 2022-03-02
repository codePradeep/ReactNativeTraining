import { Dimensions, StyleSheet } from "react-native";
import { selectedTheme } from "../../config";
import { COLORS, FONTS } from "../../config/constants/theme";
const styles = (selectedTheme: any) => StyleSheet.create({

    mainconatiner: {
        flex: 1,
        backgroundColor: selectedTheme.backgroundwhiteNgray8

    },
    conatiner: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
    leftbutton: {
        height: 50,
        width: 50,
        borderRadius: 90,
        backgroundColor: selectedTheme.backgroundgray10Ngray70,
        justifyContent: "center"
    },
    headerlefticon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: selectedTheme.tintColor
    },
    renderView: {
        borderWidth: 1,
        padding: 10,
    },
    Icons: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: selectedTheme.tintColor
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
    text: {
        fontSize: 25,
        fontWeight: "700",
        marginVertical: 20,
        color: selectedTheme.textblackNwhite
    },
    flatlistcontaine: {
        flex: 1, justifyContent: "space-between"
    },
    item: {
        borderWidth: .5,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 4,
        borderRadius: 10,
        height: Dimensions.get('window').width / 3,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemtext: {
        fontSize: 14,
        color: selectedTheme.textblackNwhite

    },
})

export default styles

import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
    maincontainer: { marginRight: 10, marginLeft: 1, justifyContent: "center" },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {

        alignItems: 'center',

        borderRadius: 40,
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        alignSelf: "center"
    },
    textstyle: {
        textAlignVertical: "center",
        fontSize: 16,
        color: COLORS.white,
        paddingTop: 5,
        marginHorizontal: 3

    }
})


export default styles;
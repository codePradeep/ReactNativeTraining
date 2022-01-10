import { StyleSheet } from "react-native";
import { SIZES } from "../../config";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginHorizontal: "5%",
        marginVertical: "2%",
    },
    subcontainer: {
        flex: 0.6,
        justifyContent: "space-around",
        
    },
    inputView:{
        padding:20,
        backgroundColor:"rgba(176, 174, 171,0.09)",
        borderRadius:10,
        
    },
    textcontainer: {
        alignItems: "center",
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
        backgroundColor: "white",
        borderRadius: 10
    },
    textinput: {
        width: "90%",
        fontSize: 19
    },
    icon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor:"darkgray"

    },
    Email: {
        paddingVertical: 10
    },

})
export default styles
import { StyleSheet } from "react-native";
import { SIZES } from "../../config";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
       



    },
    headercontainer: {
        flex: 0.08,
        marginHorizontal: 20,
        marginVertical: 5
    },
    headersubcontainer: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    headerleftimagecontainer: {
        backgroundColor: "rgba(176, 174, 171,0.02)",
        borderRadius: 10,
        height: 40, width: 40,
        justifyContent: "center",
        borderWidth:0.5
    },
    HeaderRight: {

        height: 40,
        width: 40,
        justifyContent: "center"
    },
    headerleftimage: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
    },
    HeaderText: {
        color: "black",
        fontSize: SIZES.headerLable,
        fontWeight: "700",
        textAlignVertical: "center"
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

    button: {
        backgroundColor: "darkorange",
        borderRadius: 9,
        
        

    },

    buttontext: {
        padding: 10,
        color: "white",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19

    }

})
export default styles
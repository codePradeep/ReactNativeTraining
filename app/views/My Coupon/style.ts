import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headercontainer: {
        flex: 0.1,

        marginVertical: 10,
        marginHorizontal: 20,
        
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
        borderWidth: 0.5
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
        fontSize: 22,
        fontWeight: "700",
        textAlignVertical: "center"
    },


    FirstView: {
        justifyContent: "space-between"
    },


    maincontainer: {
        flex: 1
    },
    image: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
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
        color: "blue",
        textAlignVertical: "center"
    },
    clickedbutton: {
        backgroundColor: "darkorange",
        borderRadius: 9,

    },
    notclickedbutton: {
        backgroundColor: "#fff3e3",
        borderRadius: 9,

    },
    clickedbuttontext: {
        padding: 10,
        color: "white",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 19,
        width: 180

    },
    notclickedbuttontext: {
        padding: 10,
        color: "darkorange",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 19,
        width: 180

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

    },
    flatlistcontainer: {
        flex: 1

    },
    Ticket: {
        backgroundColor: "rgba(176, 174, 171,0.7)",
        borderColor: "gray",
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderWidth: 0.5,
        marginHorizontal: 20

    },
    icon: {
        height: 60,
        width: 80,
        resizeMode: "stretch",
        alignSelf: "center"
    },
    Title: {
        textAlignVertical: "center",
        color:"black",
        fontSize:18
    },
    SubTitle: {
        textAlignVertical: "center",
        fontSize: 22,
        color: "black",
        fontWeight: "700"
    },
    Itemsaperator: {
        marginTop: 20
    },
    validTitle:{

    }




})
export default styles
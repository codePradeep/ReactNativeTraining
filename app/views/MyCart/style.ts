import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    container: {
        flex: 1,
        marginHorizontal: 20, marginVertical: 20
    },

    headercontainer: {
         flex:.1,
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
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    headerleftimage: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
    },
    HeaderText: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: "700",
        textAlignVertical: "center"
    },
    headerRightimage: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center",
        justifyContent: "center",
        tintColor: COLORS.black,
        position: "absolute"

    },

    headerRightimagecountertext: {
        backgroundColor: COLORS.red,
        padding: 2,
        borderRadius: 20,
        color: COLORS.white,
        height: 20,
        width: 20,
        textAlign: "center",
        textAlignVertical: "center",
        alignSelf: "flex-start",
        marginLeft: 10
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {

        backgroundColor: COLORS.lightGray2,
        borderBottomColor: 'black',
        borderBottomWidth: 1,


        borderRadius: 10,

    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        flex: 1,
        flexDirection: 'row',
        height: 150,
        paddingLeft: 15,
        borderRadius: 10,

    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: COLORS.primary,
        right: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

    },
    icon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.white2
    },
    itemimage: {
        height: 80,
        width: 80,
        resizeMode: "contain",
        alignSelf: "center",
    },
    view: {
        flex: 1,

    },
    modalView: {
        flex: 0.4,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: COLORS.white,
        padding: 20,
        justifyContent: "space-between",
        borderWidth: .5,
        borderColor: COLORS.gray,
        shadowColor: "black",
        textShadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 1,
        shadowOpacity: 0.1


    },
    modalTextcontainer: {
        flexDirection: "row",

        justifyContent: "space-between"
    },
    modalText: {
        fontSize: 22,
        color: COLORS.black,
        fontWeight: "600",
        marginVertical: 10
    },
    ModalSubText: {
        fontSize: 16,
        color: COLORS.black,
    },
    ModalTextSeperator: {
        borderWidth: .5,
        borderColor: COLORS.gray2,
        width: "100%",
        marginVertical: 10


    }, button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,
    },
    buttontext: {
        padding: 10,
        color: COLORS.white2,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19
    },
    renderitemContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5,
        alignItems: "center"
    },
    subrenderitemcontainer: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 15
    }
});

export default styles
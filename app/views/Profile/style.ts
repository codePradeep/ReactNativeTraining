import { StyleSheet } from "react-native";
import { COLORS, selectedTheme } from "../../config";

const styles = StyleSheet.create({
    mainconatiner: {
        flex: 1,
        backgroundColor: selectedTheme.backgroundwhiteNgray8,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    headercontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headertext: {
        fontSize: 28,
        fontWeight: "700",
        textAlignVertical: "center",
        color: selectedTheme.textblackNwhite
    },
    headericons: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        alignSelf: "center"
    },
    subcontainer: {
        backgroundColor: selectedTheme.backgroundblueNgray9,
        padding: 20,
        borderRadius: 20
    },
    profileicon: {
        height: "100%",
        width: "100%",
        borderRadius: 40,
        borderWidth: 1,

        borderColor: COLORS.white

    },
    ImageContainer: {
        width: 80,
        height: 80,
        alignItems: "center"



    },
    camericon: {
        height: 17,
        width: 17,
        // resizeMode:"contain",
        // position:"absolute",
        // justifyContent:"center",
        // alignSelf:"flex-end"
    },
    learnbutton: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        alignContent: "center",
        alignSelf: "center"

    },
    learnbuttontext: {
        alignSelf: "center",
        color: COLORS.primary,
        fontWeight: "700",

    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: COLORS.primary
    },
    username: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "700",
        width: 200
    },
    body: {
        color: COLORS.white,
        fontSize: 15,

    },
    progressbar: {
        marginVertical: 10
    },
    ProgressTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    progresstext: {
        color: COLORS.white,
        fontSize: 14
    },
    imagecontainerView: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    imageViewContainer: {
        width: 30,
        height: 30,
        marginBottom: -15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: COLORS.primary
    },
    userheaderDataContainer: {
        paddingLeft: 10
    },
    userdatacontainer: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor:COLORS.primary,
        marginVertical: 20,
        padding: 20,
        
    },
    usercontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    subusercontainer: {
        flexDirection: "row"
    },
    textcontainer: {
        paddingLeft: 20,
        alignSelf: "center"
    },
    rightimagecontainer: {
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    itemsaperater: {
        borderBottomWidth: 1,
        marginVertical: 20,
        borderColor: selectedTheme.borderColor2


    },
    label: {
        fontSize: 16,
        fontWeight: "700",
        color: selectedTheme.textblackNwhite
    },
    value: {
        fontSize: 14,
        fontWeight: "500",
        color: selectedTheme.textgray8Ngray4
    }



})

export default styles
import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor:COLORS.white

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
    P2: {
        fontSize: 12,
        color: "#3b3b3b",
        ...Font.body

    },
    P3: {
        fontSize: 16,
        color: "#3b3b3b",
        ...Font.body

    },
    icon: {
        height: 20,
        width: 20,
        backgroundColor:"blue",
        padding:30,
        borderRadius:90,
        tintColor: "#400000",
        
    },
    SmallIcon: {
        height: 20,
        width: 20,
        resizeMode:"contain",
        tintColor: COLORS.black
        
    },
    secendContainer: {
        flex:1,
    },
    subconatiner:{
        flex:1,
        padding:20

    },
    userContainer:{
        padding:20,
        flexDirection:"row",
        
    },
    usertextconatiner:{
        marginLeft:10
    },

    buttoncontainer: {
        flexDirection: "row",
        marginVertical: 10
    },
    backicon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: COLORS.black
    },
    button:{
        backgroundColor:COLORS.black,
        padding:10,
        marginVertical:10
    },
    ButtonText:{
        fontSize: 16,
        color: COLORS.white,
        ...Font.body,
        textAlign:"center"
    },
    modalcontainer:{ flex: 1, justifyContent: "flex-end",backgroundColor:"rgba(1,1,1,.9)" },
    submodalcontainer:{ backgroundColor: COLORS.graybackground,padding:20}

})

export default styles
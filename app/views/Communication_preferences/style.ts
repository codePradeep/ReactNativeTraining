
import { StyleSheet } from "react-native";


export const styles =(orientation:any)=> StyleSheet.create({
    maincontaner: { flex: 1, marginHorizontal: 30},
    conatainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 25
    },

    text: {
        fontSize: 18,
        color: "black"

    },
    heading: {
        fontSize: 22,
        alignSelf: "center",
        color: "black",
        marginVertical:25
    },
    enablemessage: {
        marginLeft: orientation.isLandscape? "70%":"40%",
    },
    enablesms: {
        marginLeft: orientation.isLandscape? "79%":"60%"
    },
    enablewhatsapp: {
        marginLeft: orientation.isLandscape? "74%":"50%"
    }


})

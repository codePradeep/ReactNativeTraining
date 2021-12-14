
import { StyleSheet } from "react-native";


export const styles =(orientation:any)=> StyleSheet.create({
    maincontaner: { flex: 1, marginHorizontal: 30 },
    conatainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 20
    },

    text: {
        fontSize: 18,
        color: "black"

    },
    heading: {
        fontSize: 22,
        alignSelf: "center",
        color: "black"
    },
    enablemessage: {
        marginLeft: orientation.isLandscape? "65%":"25%"
    },
    enablesms: {
        marginLeft: orientation.isLandscape? "78%":"55%"
    },
    enablewhatsapp: {
        marginLeft: orientation.isLandscape? "72%":"40%"
    }


})

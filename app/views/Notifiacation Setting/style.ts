
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    maincontaner: { flex: 1,marginHorizontal: 20,
    },
    conatainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop:20,
        backgroundColor:"lightgray",
        borderRadius:10,
        padding:20
    },
    
    headercontainer: {
        flex: 1,
        
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
        fontSize: 22,
        fontWeight: "700",
        textAlignVertical: "center"
    },
    icon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:"darkorange",
        marginRight:10
    },
    noficationcontainer:{
        flexDirection:"row"
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
        marginLeft:"40%",
    },
    enablesms: {
        marginLeft:"60%"
    },
    enablewhatsapp: {
        marginLeft:"50%"
    }


})

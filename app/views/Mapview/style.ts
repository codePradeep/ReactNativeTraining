import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles=StyleSheet.create({

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
        flexDirection:"row",
        paddingHorizontal:20,
        paddingVertical:20
    },
    buttontext: {
        padding: 10,
        color: COLORS.white2,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19
    },
     image:{
         height:40,
         width:40,
         resizeMode:"center",
         alignSelf:"center"


     },
     image1:{
        height:40,
        width:40,
        resizeMode:"center",
        alignSelf:"center",
        tintColor:COLORS.black,
        marginRight:10

     },
     buttondata:{
         flex:1,
         flexDirection:"row",
         
         alignItems:"center"
     },
     text:{
         fontSize:16,
         color:COLORS.white,
         paddingLeft:10
     }
})

export default styles
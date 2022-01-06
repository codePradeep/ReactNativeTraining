import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    Hedertext: {
        color: COLORS.black,
        textAlign: "center",
        marginVertical: 20
    },
    Container: {
        flex: 1,
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10
    },
    firstContainer: {
        flex:1
    },
    secendContainer: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,
        width: "45%",

    },

    buttontext: {
        padding: 10,
        color: "white",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19

    },
    cardcontainer: {
        flex: 1,
        borderWidth: .5,
        borderColor: COLORS.gray,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
        shadowColor: COLORS.orange,
        marginTop:10,
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 20,
        paddingVertical:10
        

    },
    text: {
        fontSize: 16,
        textAlign: "center"
    },
    subheadertext: {
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19,
        color: COLORS.black

    },
    textordercontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5,
        marginHorizontal:20

        
    },
    seperator:{
        flex:1,
        borderBottomWidth:1,
        borderColor:COLORS.lightGray1
    },
    icon:{
        height:40,
        width:40,
        alignSelf:"center",
    
    },
    listcontainer:{
        flexDirection:"row",
        marginHorizontal:20
    },
    textcontainer:{
        marginLeft:10
    },
    line:{
        height: 35,
        width: 3,
        marginLeft: 38,
        backgroundColor: COLORS.primary,
        zIndex: -1
    },
    dottedline:{
        height: 37,
        borderEndWidth: 3,
        width:3,
        marginLeft: 38,
        borderStyle: 'dashed',
        borderColor: COLORS.gray,
        zIndex: -1 }

})

export default style
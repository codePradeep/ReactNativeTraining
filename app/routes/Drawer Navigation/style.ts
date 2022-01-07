import { StyleSheet } from "react-native";
import { COLORS } from "../../config";
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: COLORS.primary
    },
    subcontainer:{
        flex:1,
marginHorizontal:10
    },
    crossicon: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        tintColor: COLORS.white
    },
    user: {
        height: 60,
        width: 60,
        resizeMode: "contain",
    },
    usertext: {
        paddingLeft: 10,
        alignSelf: "center"
    },
    container: {
        flexDirection: "row",
        alignContent: "center",
        marginVertical: 10
    },
    username: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",

    },
    email: {
        color: COLORS.white,
        fontSize: 12,


    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        bottom: 10,
        borderRadius: 90,
        marginVertical: 10

    },
    itemicon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        tintColor: COLORS.white
    },
    buttontext:{
        fontSize: 16,
        fontWeight: "700",
        alignSelf: "center",
        color:COLORS.white,
        paddingLeft:10
    },
    drawercontainer:{ 
        flex: 1, 
        justifyContent: "center",
        
    },
    itemseperator:{
        borderTopWidth:1,
        borderColor:COLORS.white,
        marginHorizontal:15,
        marginVertical:10,
        

    }



})
export default style
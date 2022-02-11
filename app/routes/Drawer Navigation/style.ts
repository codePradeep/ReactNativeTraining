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
        height: 80,
        width: 80,
        alignSelf:"center",
        borderRadius:180,

        
    },
    camera:{
        height: 40,
        width: 40,
        // height: "20%",
        // width:"70%",
        resizeMode: "contain",
      alignSelf: "center",
        position:"absolute",
        tintColor:COLORS.white2
        
        
    },
    cameracontainer:{
    
        justifyContent:"center",
        alignItems:"center",
        
    },
    modalicon:{
        height: "25%",
        width:"90%",
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.white

    },
    modaltext:{
        color:COLORS.white,
        fontSize:20,
        
        marginVertical:5
    },
    Modalview:{
        flex:.2,
        justifyContent:"space-evenly",
        flexDirection:"row",
        backgroundColor:COLORS.darkBlue,
        alignItems:"center",
        borderTopLeftRadius:40,
        borderTopRightRadius:40
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
    imageView:{
        flexDirection:"row",
        justifyContent: "flex-start",
        
      
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
        justifyContent: "space-between",
        alignItems: 'center',
        bottom: 10,
        borderRadius: 90,
        marginVertical: 10,
      
        padding:5,
        width:"80%"

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
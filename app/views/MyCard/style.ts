import { StyleSheet } from "react-native";
import { COLORS } from "../../config";


const styles=StyleSheet.create({
    MainContainer:{ 
        flex:1,
        marginHorizontal: 20,
        justifyContent:"space-between",
        marginVertical: 10,
    },
    headercontainer: {
        flex: 0.1,

       
        
        
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
        fontSize: 22,
        fontWeight: "700",
        textAlignVertical: "center"
    },
    subContainer:{
        flex:0.65,
        justifyContent:"space-between"
    },
    CardContainer:{


    },
    subcardcontainer:{ 
        flexDirection: "row",
        justifyContent:"space-between",
        padding:9,
        borderWidth:.5,
        
        borderRadius:10
        
     },
     textcontainer:{ 
         flexDirection: "row" ,
         alignItems:"center"
        },
    CardIcon:{
        height:60,
        width:60,
        resizeMode:"contain",
        alignSelf:"center"
    },
    redioIcon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.primary
    },
    cardText:{
        paddingLeft:10,
        color:COLORS.black
    },

    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,
        
        

    },

    buttontext: {
        padding: 10,
        color:COLORS.white2,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19

    }


})

export default styles
import { StyleSheet } from "react-native";
import { COLORS } from "../../config";


const styles=StyleSheet.create({
    parentContainer:{   flex:1,backgroundColor:COLORS.white},
    MainContainer:{ 
        flex:1,
        marginHorizontal: 20,
        justifyContent:"space-between",
        marginVertical: 10,
    },
    modalView:{
        flex: 0.4,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor: COLORS.white2,
        padding: 20,
        justifyContent:"space-between"

    },
    modalTextcontainer:{
        flexDirection:"row",
        
        justifyContent:"space-between"
    },
    modalText:{
        fontSize:22,
        color:COLORS.black,
        fontWeight:"600",
        marginVertical:10
    },
    ModalSubText:{ 
        fontSize:16,
        color:COLORS.black,
    },
    ModalTextSeperator:{
        borderWidth:.5,
        borderColor:COLORS.gray2,
        width:"100%",
        marginVertical:10

        
    },

    subContainer:{
        flex:.85,
       // justifyContent:"space-between"
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
        scrollview:{flex:1},
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
    Icon:{
        height:40,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
       // tintColor:COLORS.white2,
    },
    cardText:{
        paddingLeft:10,
        color:COLORS.black
    },

    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 9,
        
        

    },
    Inputtext:{
        width:"88%",
        backgroundColor:"white",
        marginRight:10,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        paddingLeft:15
    },

    buttontext: {
        padding: 10,
        color:COLORS.white2,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 19

    },
    addressinput:{ fontSize:16,
    color:COLORS.black},
    addressContainer:{flexDirection:"row",marginVertical:10,borderWidth:0.5,padding:5,borderRadius:10},
    textinpute:{flexDirection:"row",marginVertical:10,borderWidth:0.5,borderRadius:10,backgroundColor:"orange"}


})

export default styles
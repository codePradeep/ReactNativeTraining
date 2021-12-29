import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white",
        
       

    }, container:{
        flex:1,
        
        marginHorizontal:"5%",
        marginVertical:"2%"

    },
    headercontainer: {
        marginVertical:"2%"


        
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
   
    card:{
        height:190,
        width:"100%",
        resizeMode:"cover",
        backgroundColor:COLORS.lightOrange,
        borderWidth:1,
        borderColor:COLORS.darkGray2,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"flex-end",
        borderRadius:30,
        paddingHorizontal:20

    }
    ,
    Cardnumber:{
        fontSize:18,
        color:COLORS.white,
        paddingBottom:20,
        fontWeight:"600"
    },
    subcontainer:{
        flex:1,
    //    justifyContent:"space-around",
    
    },
    textcontainer:{
        flex:1,
        
        alignItems:"center",
        

    },
 
    Subtext:{
        fontSize:15,
        color:"darkgray",
        width:250,
        textAlign:"center"
    },
    input:{
        flexDirection:"row",
        backgroundColor:"lightgray",
        borderRadius:10,
        
    },
    
    label:{
        fontSize:15,
        fontWeight:"500",
        color:COLORS.black,
        paddingVertical:5.5
    },
    textinputcontainer:{
        flexDirection:"row",
        backgroundColor:COLORS.lightGray2,
        borderRadius:10
    },
    textinput:{
        width:"90%",
        fontSize:19,
        paddingLeft:10,
        color:COLORS.gray
        
    },
    icon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.primary
       
    },
    twoinputcontainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    SmallContainer:{
        flexDirection:"row",
        backgroundColor:COLORS.lightGray2,
        borderRadius:10,
        width:150,
        
        
    },
    dateinput:{
        
        flexDirection:"row",
     textAlign:"center",
        borderRadius:10,
        width:"75%",
        color:COLORS.gray
        
       
        
        
    },
    secondicon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.primary
        
       
    },
    redioicon:{
        height:25,
        width:25,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:COLORS.primary
       
    },
    checktext:{
        alignSelf:"center",
        paddingLeft:10

    },
    check:{
        flexDirection:"row",
        marginVertical:40
    },
   

    button:{
        backgroundColor:COLORS.primary,
        borderRadius:9,

    },

    buttontext:{
        padding:10,
        color:COLORS.white2,
        textAlign:"center",
        fontWeight:"800",
        fontSize:19

    }

})
export default styles
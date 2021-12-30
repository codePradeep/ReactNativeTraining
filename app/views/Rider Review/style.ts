import { StyleSheet } from "react-native";
import { COLORS } from "../../config";


const styles=StyleSheet.create({
    parentContainer:{   
        flex:1,
        backgroundColor:COLORS.white
    },
    MainContainer:{ 
        flex:1,
        marginHorizontal: 20,
        justifyContent:"space-between",
        marginVertical: 10,
    },
    scrollview:{
        flex:1
    },
    container:{
        flex:1,
    },
    ridercontainer:{
        flex:1,
        alignItems:"center"

    },
    riderImage:{
        height:100,
        width:100,
        resizeMode:"contain",
        borderWidth:15,
       
    },
    ridername:{
        fontSize:23,
        fontWeight:"700",
        alignSelf:"center",
        color:COLORS.black
    },
    JD:{
        fontSize:16,
        fontWeight:"500",
        alignSelf:"center",
        color:COLORS.black

    },
    orderContainer:{
        flexDirection:"row",
        alignSelf:"center",
        marginVertical:7

    },
    tickicon:{
        height:15,
        width:15,
        resizeMode:"contain",
        alignSelf:"center",
        marginRight:5
    },
    ordertext:{
        textAlign:"center",
        fontSize:15,
        fontWeight:"600",
        color:COLORS.green
    },

    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        
      },
      activestarImageStyle: {
        width: 30,
        height:30,
        resizeMode: 'cover',
        tintColor:COLORS.lightOrange
      },
      inactivestarImageStyle: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        tintColor:COLORS.lightOrange2
      },


      customtipsBarStyle: {
          flex:.9,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5,
        
      },
      activeStyle:{
        backgroundColor:COLORS.primary,
        borderRadius:10
        
    },
    inactiveStyle:{
        borderColor:COLORS.gray2,
        borderWidth:1,
        borderRadius:10
      
    },
      activeTextStyle:{
          color:COLORS.white,
          fontSize:16,
          padding:12,
          
      },
      inactiveTextStyle:{
        color:COLORS.gray2,
        fontSize:16,
        padding:12
        
      },
      tipcontainer:{
        flex:1,
          flexDirection:"row",
          justifyContent:"space-between"
      },
      textinputcontainer:{
          width:"100%",
          height:170,
          backgroundColor:COLORS.lightGray2,
          borderRadius:20,
          marginVertical:15
      },
      inputtext:{
          
        paddingLeft:10
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
        fontSize: 16

    },

})

export default styles
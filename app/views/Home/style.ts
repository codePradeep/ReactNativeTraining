import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Container: {
        flex:1 ,
        padding:10,
        backgroundColor:"white"
        
    },
    Header:{
        alignItems:"flex-end"
    },
    UserIcon:{
        height:30,
        width: 30,
        borderRadius:20,
        // alignSelf:"center",
        tintColor:"black"
    },
    BannerContainer:{
        backgroundColor:"skyblue",
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
        borderRadius:10,
        height:130,

    },
    bannerText:{
        padding:10,
        alignSelf:"center"
    },
    H1:{
        fontSize:22,
        color:"black",
        fontWeight:"700"
    },
    P1:{
        fontSize:16,
        color:"black",
        fontWeight:"600"

    },
    banner:{
        height:130,
        width:130,
        resizeMode:"stretch",
        tintColor:"black",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    RideTypeMainContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
        
    },
    RideTypeContainer:{
        backgroundColor:"lightgray",
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 10,
        width:180,
        borderRadius:10
    },
    ridetypetext:{
        fontSize:16,
        color:"black",
        fontWeight:"600",
        alignSelf:"flex-end"
    },
    caricon:{
        height:70,
        width:70,
        resizeMode:"contain"
    },
    wharetoConatiner:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"skyblue",
        padding:10,
        

    },
    TimeButton:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"lightgray",
        padding:10,
        borderRadius:10,

        width:100

    },
    smallIcon:{
        width:20,
        height:20,
        resizeMode:"contain"
    },
    MainButtonContainer:{
        marginVertical:10
    },

    buttonContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center"
    },
    childbuttonContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    imagecontainer:{
        width:40,
        height:40,
        backgroundColor:"lightgray",
        padding:10,
        alignItems:"center",
        borderRadius:90,
        justifyContent:"center",
        marginRight:10,
    },
    seperator:{
        borderTopWidth:1,
        marginVertical:10,
        marginLeft:50,
        borderColor:"lightgray"
    },
    Map:{
        height:150,
        backgroundColor:"lightgray",
        borderRadius:10
    }

})

export default styles
import { StyleSheet } from "react-native";

const styles =(orientation:any)=> StyleSheet.create({

    ItemSeprator:{
       // marginHorizontal: orientation.isLandscape ? orientation.width * 0.001 : orientation.width * 0.01,
        height: orientation.height*0.001,
        width:  orientation.isLandscape ?orientation.width*0.91:orientation.width*0.87,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    header: {
        marginTop:  orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        marginLeft: orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        fontSize: 25,
        color: 'black',
        fontWeight: '600',
        fontFamily:"PublicSans-Regular"
    },
    subheader: {
        marginTop: orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        marginLeft: orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        fontFamily:"PublicSans-Regular"
    },
    listcontainer: {
        
         marginHorizontal:  orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03
    },
    title: {
        fontSize: 17,
        marginVertical:  orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.039,
        color: 'black',
        fontWeight: '300',
        fontFamily:"PublicSans-Regular"
    },
    Button: {
        borderWidth: 1,
        height: orientation.isLandscape ? orientation.height * 0.1:orientation.height * 0.045,
        width: 120,
        alignSelf: 'flex-end'
    }
,
    buttontitle:{ fontSize: 15, 
        justifyContent:"center",
        alignSelf:"center",
        marginTop: orientation.isLandscape ? orientation.height * 0.02:orientation.height * 0.005,
     }
})

export default styles;
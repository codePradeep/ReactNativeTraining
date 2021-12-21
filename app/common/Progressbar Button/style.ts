import { StyleSheet } from "react-native";

const styles =(orientation:any)=> StyleSheet.create({
    header: {
        marginTop:  orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        marginLeft: orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        fontSize: 25,
        color: 'black',
        fontWeight: '600'
    },
    subheader: {
        marginTop: orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        marginLeft: orientation.isLandscape ? orientation.height * 0.06:orientation.height * 0.03,
        fontSize: 20,
        color: 'black',
        fontWeight: '400'
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
        height: orientation.isLandscape ? orientation.width * 0.04:orientation.width * 0.09,
        width: 120,
        alignSelf: 'flex-end'
    }
,
    buttontitle:{ fontSize: 15, 
        color:"black",
        justifyContent:"center",
        alignSelf:"center",
        padding:9,
        
        fontFamily:"PublicSans-Regular"
        //marginTop: orientation.isLandscape ? orientation.height * 0.02:orientation.height * 0.005,
     }
})

export default styles;
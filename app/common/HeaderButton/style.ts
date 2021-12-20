import { StyleSheet, Dimensions } from "react-native";


const styles = (orientation: any) => StyleSheet.create({
    maincontainer: {
        paddingRight: orientation.width * 0.01
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(176, 174, 171,1)",
        borderRadius: 180,
        //justifyContent: 'center',
        alignItems: 'center',
        width: orientation.isLandscape ? orientation.width * 0.044 : orientation.width * 0.089,
        height: orientation.isLandscape ? orientation.width * 0.044 : orientation.height * 0.04,

    },


    image: {

        flex: 1,
        width: orientation.isLandscape ? orientation.width * 0.025 : orientation.width * 0.05,
        height: orientation.isLandscape ? orientation.height * 0.025 : orientation.height * 0.05,
        resizeMode: 'contain'
    }



});


export default styles;
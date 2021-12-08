
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = (orientation: any) => StyleSheet.create({
    tabbarstyle: {
        height: orientation.isLandscape ? orientation.height * 0.6 : windowHeight * 0.05,
         

    },
    image: {
        tintColor:"white",
        
        marginTop:orientation.height *0.009,
        width: orientation.isLandscape ? orientation.width * 0.028 : orientation.width * 0.059,
        height: orientation.isLandscape ? orientation.height * 0.36 : orientation.height * 0.039,
        resizeMode: 'contain'
    }



});


export default styles;
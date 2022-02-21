import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../config/constants/theme";

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    imageAndTextContainer: {
        flex:1,
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom:25,
        left:20
       
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 25,
    },
    dot: {
        borderRadius: 12,
        backgroundColor: COLORS.primary,
         marginHorizontal: 4
    },
    buttonstyle:{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 150,
        height: 60,
        paddingLeft: 20,
        marginVertical:20,
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: COLORS.primary
    },
    image:{
        width: "100%",
        height: "100%",
    },
    imagecontainer:{ flex: 2, 
        alignItems: 'center',
     justifyContent: 'center' 
    
    },
    headingtext:{
        ...FONTS.heading,
        color: COLORS.black,
    
        fontSize:30,
        width:200,fontWeight:"700"
    },
    textstyle:{
        ...FONTS.body,
        marginTop: SIZES.base,
        color: COLORS.black,
    },
    itemcontainer:{
        padding:20

    },

})

export default styles


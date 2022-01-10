
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config";

const styles = StyleSheet.create(
    {
        headercontainer: {
            flex: 0.1, 
        },
        headersubcontainer: {
            flexDirection: "row",
            justifyContent: "space-between"
    
        },
        headerleftimagecontainer: {
            backgroundColor: COLORS.lightGray2,
            borderRadius: 5,
            height: 40, width: 40,
            justifyContent: "center",
            
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
            fontSize: SIZES.headerLable,
            fontWeight: "700",
            textAlignVertical: "center"
        },
        
}
)

export default styles;
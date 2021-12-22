import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container:{ flex: 1 },
    subcontainer:{ flexDirection: "row", justifyContent: "space-between" },
    leftimagecontainer:{
        backgroundColor: "rgba(176, 174, 171,0.5)",
        borderRadius: 180,
        height: 40, width: 40,
        justifyContent: "center"
    },
    leftimage:{ height: 25, width: 25, resizeMode: "contain", alignSelf: "center", },

})
export default styles
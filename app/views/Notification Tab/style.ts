import { StatusBar, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config";

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: COLORS.white

    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 20,
        backgroundColor: COLORS.white

    },
    headercontainer: {
        marginVertical:"2%",
        marginHorizontal: 20,


        
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
        height: 20,
        width: 20,
        resizeMode: "contain",
        alignSelf: "center",
    },
    headerRightimage:{
        height: 40,
        width: 50,
        resizeMode: "contain",
        alignSelf: "center",
    },
    HeaderText: {
        color: COLORS.black,
        fontSize: SIZES.headerLable,
        fontWeight: "700",
        textAlignVertical: "center"
    },
    item: {
        backgroundColor: COLORS.lightGray2,
        paddingVertical: 10
        ,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 10
    },
    renderimagecontainter:{ 
        height: 60, 
        width: 60,
         backgroundColor: COLORS.primary,
          alignItems: "center",
           borderRadius: 10, 
           justifyContent: "center" 

    },
    image:{ height: 50, width: 50, alignSelf: "center", resizeMode: "contain", },
    doticon:{ 
        height: 20, 
        width: 20,
         resizeMode: "contain" },
    header: {
        fontSize: 18,
        color: COLORS.black
    },
    title: {
        fontSize: 18,
        color: COLORS.black
    },
    subtitle: {
        width: 200
    },
    time:{
        color:COLORS.black
    }
});

export default styles
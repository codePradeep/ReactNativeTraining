import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, selectedTheme } from "../../config";
import styles from "./style";

interface renderItem {
    navigation:any
    item:  {
        id: number;
        title: string;
        sub_title: string;
        image: any;
    }
}

const Item = (props: renderItem) => {
    const { item ,navigation} = props
    return (
        
            <View style={styles.imageAndTextContainer}
                    >

                        <View style={styles.itemcontainer}>
                            <Text style={styles.headingtext}>
                                {item.title}
                            </Text>
                            <Text style={styles.textstyle}>
                                {item.sub_title}
                            </Text>
                        </View>
                        <View style={styles.imagecontainer}>
                            <Image source={item.image}
                                resizeMode="contain"
                                style={styles.image}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonstyle}
                            onPress={()=>navigation.navigate("Loginmodel")}
                            // onPress={() =>  {scrollToIndex(SIZES.width),index==2? setCompleted(true):setCompleted(false)}  }
                        >
                            <Text style={{ ...FONTS.heading,fontSize:22, color: COLORS.white }}>Next</Text>
                        </TouchableOpacity>
                    </View>
        
    );
}







export { Item}
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../common";
import { Constant, icon } from "../../config";
import RanderListItem from "./RanderListItem";
import styles from "./style";

interface Onboardingprops {
    navigation: any
    toggle:any
    settogle:any
    Available:{
        id: string;
        title: string;
        Subtitle: string;
        coupon: boolean;
        icondata: any;
    }[]
    Used:{
        id: string;
        title: string;
        Subtitle: string;
        coupon: boolean;
        icondata: any;
    }[]
}

const MyCoupon = (props: Onboardingprops) => {

    const { navigation,toggle,settogle,Available ,Used} = props
   
   
    return (
        <View style={styles.maincontainer}>

            <View style={styles.headercontainer}>
               <Header headertitle={Constant.screens.mycoupon} navigation={navigation} HeaderRightComponent={undefined} />
            </View>

            <View style={styles.FirstView} >
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={toggle?styles.clickedbutton:styles.notclickedbutton}
                    onPress={()=>settogle(true)} 
                    >
                        <Text style={toggle?styles.clickedbuttontext:styles.notclickedbuttontext}>{Constant.Button.avialble}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={toggle?styles.notclickedbutton:styles.clickedbutton}
                      onPress={()=>settogle(false)} 
                    >
                        <Text style={!toggle?styles.clickedbuttontext:styles.notclickedbuttontext}>{Constant.Button.used}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.flatlistcontainer}>

                <FlatList
                    nestedScrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={toggle? Available:Used}
                    initialScrollIndex={0}
                    //  ItemSeparatorComponent={ItemSeprator}
                    renderItem={({ item, index }) => <RanderListItem item={item} index={0} />}
                    keyExtractor={(_, index) => index.toString()}
                />

            </View>

        </View>

    )
}
export default MyCoupon

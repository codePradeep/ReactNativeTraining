import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { icon } from "../../config";
import CouponData from "../../config/Coupondata";
import RanderListItem from "./RanderListItem";
import styles from "./style";

interface Onboardingprops {
    navigation: any
}

const MyCoupon = (props: Onboardingprops) => {

    const { navigation } = props
    const [toggle,settogle]=useState(true)
    const Available = CouponData.filter((item) => item.coupon == false).map(a => a)
    const Used = CouponData.filter((item) => item.coupon == true).map(a => a)
   
    return (
        <View style={styles.maincontainer}>

            <View style={styles.headercontainer}>
                <View style={styles.headersubcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("SettingModel")} >
                        <View style={styles.headerleftimagecontainer}>
                            <Image source={icon.left_arrow} style={styles.headerleftimage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>MY COUPON</Text>
                    <View style={styles.HeaderRight} />
                </View>
            </View>

            <View style={styles.FirstView} >
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={toggle?styles.clickedbutton:styles.notclickedbutton}
                    onPress={()=>settogle(true)} 
                    >
                        <Text style={toggle?styles.clickedbuttontext:styles.notclickedbuttontext}>Available</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={toggle?styles.notclickedbutton:styles.clickedbutton}
                      onPress={()=>settogle(false)} 
                    >
                        <Text style={!toggle?styles.clickedbuttontext:styles.notclickedbuttontext}>Used</Text>
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

import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../common";
import { icon, Constant, COLORS, FONTS, menu, Screen } from "../../config";
import styles from "./style";
interface FoodDetailprops {
    navigation: any
    defaultRating: any
    setDefaultRating: any
    maxRating: any
    defaultsize: any
    setDefaultsize: any
    maxsize: any
    count: any
    Add: () => void
    Subs: () => void
}
const FoodDetail = (props: FoodDetailprops) => {
    const { navigation,
        defaultRating,
        setDefaultRating,
        maxRating,
        defaultsize,
        setDefaultsize,
        Add, 
        Subs, 
        count,
        maxsize, } = props

    const item = menu[0]


    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item: any, key: any) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}>
                            <Image
                                style={item <= defaultRating
                                    ? styles.activestarImageStyle : styles.inactivestarImageStyle}
                                source={icon.star_filled}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    const CustomSizeBar = () => {
        return (
            <View style={styles.customtipsBarStyle}>
                {maxsize.map((item: any, key: any) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultsize(item)}
                            style={item == defaultsize
                                ? styles.activeStyle : styles.inactiveStyle}

                        >
                            <Text
                                style={item == defaultsize
                                    ? styles.activeTextStyle : styles.inactiveTextStyle}

                            >{item}"</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };







    return (
        <View style={styles.maincontainer} >
            <View style={styles.container}>
               
                <View style={styles.headercontainer}>
                <Header headertitle={Constant.screens.details} navigation={navigation}
                    HeaderRightComponent={
                            <View style={styles.HeaderRight}>
                            <Image source={icon.cart} style={styles.headerRightimage} />
                            <Text style={styles.headerRightimagecountertext}>{item.id}</Text>
                            </View>
                    } />   
                </View>

               
                <View style={styles.firstrendercontainer} >
                    <View style={styles.subfirstrendercontainer}>
                        <View style={[styles.itemcontainer,]}>
                            <View style={styles.itemsubcontainer}>
                                <Image source={icon.calories} style={styles.Icon} />
                                <Text style={[styles.itemtext, { color: COLORS.black }]}>78 calories</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={icon.love} style={[styles.Icon, { tintColor: item.isFavourite ? COLORS.red : COLORS.gray }]} />
                            </TouchableOpacity>
                        </View>
                        <Image source={item.image} style={styles.image} />
                    </View>

                </View>
                <Text style={[FONTS.h3]}>{item.name}</Text>
                <Text style={[FONTS.body4]}>{Constant.foodDetails.details}</Text>

                <View style={styles.statuscontainer}>

                    <TouchableOpacity
                        style={styles.ratingboxStyle}
                    >
                        <Image source={icon.love} style={styles.ratingstatusicon} />
                        <Text style={[styles.ratingtext, FONTS.body3]}>{item.rating}</Text>
                    </TouchableOpacity>


                    <View style={styles.rating}>
                        <View>
                            <Image source={icon.clock} style={styles.statusicon} />
                        </View>
                        <Text style={[styles.text, FONTS.body4]}>{item.time}</Text>
                    </View>

                    <View style={styles.rating}>
                        <View>
                            <Image source={icon.coin} style={styles.statusicon} />
                        </View>
                        <Text style={[styles.text, FONTS.body4]}>{Constant.foodDetails.freeshipping}</Text>
                    </View>


                </View>
                <View style={styles.statuscontainer}>
                    <Text style={[styles.text, FONTS.h3]}>{Constant.foodDetails.Size}</Text>
                    <CustomSizeBar />
                </View>

                <View style={styles.statuscontainer}>
                    <View style={styles.customStatusBarContainer}>
                        <Image source={icon.user_avatar} style={styles.usericon} />
                        <View>
                            <Text style={[FONTS.h3, { paddingLeft: 10 }]}>{Constant.Myaccount.fullname}</Text>
                            <Text style={[FONTS.body4, { paddingLeft: 10 }]}>12 km away from you</Text>
                        </View>

                    </View>
                    <CustomRatingBar />
                </View>
                <View style={styles.customStatusBarContainer}>
                    <View style={styles.subrenderitemcontainer}>
                        <TouchableOpacity
                            onPress={Subs}
                        >
                            <Text style={[FONTS.body1, { color: COLORS.primary }]}>-</Text>
                        </TouchableOpacity>
                        <Text style={[FONTS.body2, { color: COLORS.black, paddingHorizontal: 10 }]}>{count}</Text>
                        <TouchableOpacity
                            onPress={Add}
                        >
                            <Text style={[FONTS.body1, { color: COLORS.primary }]}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.navigate(Screen.Cart)}
                    >
                        <Text style={styles.buttontext}> {Constant.Button.buynow}</Text>
                        <Text style={styles.buttontext}>${item.price * count}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
export default FoodDetail;
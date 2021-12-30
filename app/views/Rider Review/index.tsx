import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Modal,
    ScrollView
} from 'react-native';
import { Header } from '../../common';
import { COLORS, Constant, FONTS, icon } from '../../config';
import styles from './style';




interface Checkoutprops {
    navigation: any
    defaultRating: any
    setDefaultRating: any
    maxRating: any
    setMaxRating: any
    defaulttip: any
    setDefaulttip: any
    maxtips: any
    setMaxtips: any

}

const RiderReview = (props: Checkoutprops) => {
    const { navigation,
        defaultRating,
        setDefaultRating,
        maxRating,
        setMaxRating,
        defaulttip, setDefaulttip,
        maxtips, setMaxtips } = props
        
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
    const CustomTipsBar = () => {
        return (
            <View style={styles.customtipsBarStyle}>
                {maxtips.map((item: any, key: any) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaulttip(item)}
                            style={item == defaulttip
                                ? styles.activeStyle : styles.inactiveStyle}

                        >
                            <Text
                                style={item == defaulttip
                                    ? styles.activeTextStyle : styles.inactiveTextStyle}

                            >{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };




    return (
        <View style={styles.parentContainer}>
            <View style={styles.MainContainer}>
                <Header headertitle={Constant.screens.riderreview} />
                <ScrollView style={styles.scrollview}>
                    <View style={styles.container}>
                        <View style={styles.ridercontainer}>
                            <Image source={icon.user_avatar} style={styles.riderImage} />
                            <Text style={styles.ridername}>Riders name</Text>
                            <Text style={styles.JD}>{Constant.RiderReviewscreen.Deliveryman}</Text>

                            <View style={styles.orderContainer}>
                                <Image source={icon.check_tick} style={styles.tickicon} />
                                <Text style={styles.ordertext}>{Constant.RiderReviewscreen.Order}</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.JD}>{Constant.RiderReviewscreen.please}</Text>
                            <CustomRatingBar />
                        </View>
                        <View>

                            <Text style={[FONTS.h3, { paddingBottom: 12 }]}>{Constant.RiderReviewscreen.addtips}</Text>

                            <View style={styles.tipcontainer}>
                                <TouchableOpacity
                                    onPress={() => setDefaulttip(0)}
                                    style={defaulttip == 0 ? styles.activeStyle : styles.inactiveStyle}

                                >
                                    <Text style={defaulttip == 0 ? styles.activeTextStyle : styles.inactiveTextStyle}
                                    >{Constant.RiderReviewscreen.notip}</Text>
                                </TouchableOpacity>
                                <CustomTipsBar />
                            </View>

                        </View>
                        <View style={styles.textinputcontainer}>
                            <TextInput style={styles.inputtext} placeholder={Constant.RiderReviewscreen.addcomment} />
                        </View>

                        <TouchableOpacity
                        style={styles.button}>
                            <Text style={styles.buttontext}>{Constant.Button.SubmitReview}</Text>
                        </TouchableOpacity>
                       













                    </View>

                </ScrollView>

            </View >
        </View >
    )
}

export default RiderReview
import React, { useState } from "react";
import { View, Text,TouchableOpacity, Image, TextInput, FlatList, ScrollView, Modal } from "react-native";
import { Header, Slider } from "../../common";
import { categories, COLORS, Constant, FONTS, icon, menu } from "../../config";
import RanderListItem from "./RanderListItem";
import RenderSecendlist from "./RenderSecendList";
import styles from "./style";

interface Homepageprops {
    navigation: any
    defaultitem: number
    setdefaultitem: React.Dispatch<React.SetStateAction<number>>
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    defaultRating: number
    setDefaultRating:React.Dispatch<React.SetStateAction<number>>
    maxRating: number[]
    setMaxRating: React.Dispatch<React.SetStateAction<number[]>>
    defaulttime: string
    setDefaulttime:React.Dispatch<React.SetStateAction<string>>
    maxtime: string[]
    setMaxtime: React.Dispatch<React.SetStateAction<string[]>>


}

const Homepage = (props: Homepageprops) => {
    const { navigation,
        defaultitem,
        setdefaultitem,
        modalVisible,
        setModalVisible,
        defaultRating,
         setDefaultRating,
         maxRating, setMaxRating,
         defaulttime, setDefaulttime,
         maxtime, setMaxtime,
    
    } = props


    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item: any, key: any) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}
                            style={item <= defaultRating
                                ? styles.activestarStyle : styles.inactivestarStyle}
                            >
                                <View style={styles.starcontainer}>
                                    <Text style={styles.startext}>{item}</Text>
                            <Image
                                style={item <= defaultRating
                                    ? styles.activestarImageStyle : styles.inactivestarImageStyle}
                                source={icon.star_filled}
                            />
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    const CustomTimeBar = () => {
        return (
            <View style={styles.customtipsBarStyle}>
                {maxtime.map((item: any, key: any) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaulttime(item)}
                            style={item == defaulttime
                                ? styles.activeStyle : styles.inactiveStyle}

                        >
                            <Text
                                style={item == defaulttime
                                    ? styles.activeTextStyle : styles.inactiveTextStyle}

                            >{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };





    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.Container} >
        
                <View style={styles.headercontainer}>
                    <View style={styles.headersubcontainer}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()} >
                            <View style={styles.headerleftimagecontainer}>
                                <Image source={icon.menu} style={styles.headerleftimage} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.HeaderText}>{Constant.screens.home}</Text>
                        <View style={styles.HeaderRight} >
                            <Image source={icon.user_avatar} style={styles.headerRightimage} />
                        </View>
                    </View>
                </View>

                <View style={styles.searchbarcontainer}>
                    <Image source={icon.search} style={styles.searchbarimage} />
                    <TextInput style={styles.searchbarinput} />
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ alignSelf: "center" }}>
                        <Image source={icon.filter} style={styles.searchbarimage} />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.addresscontainer}>
                        <Text style={[FONTS.body4, { color: COLORS.primary, marginVertical: 5 }]}>{Constant.HomeScreen.deliverto}</Text>
                        <Text style={FONTS.h4}>Sector-22, Noida ,UP</Text>
                    </View>


                    <View style={styles.firstflatlistContainer}>

                        <FlatList
                            horizontal
                            data={categories}
                            initialScrollIndex={0}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => <RanderListItem item={item}
                                defaultitem={defaultitem}
                                setdefaultitem={setdefaultitem}
                                index={0} />}
                            keyExtractor={(_, index) => index.toString()}
                        />
                    </View>
                    <View style={styles.mainsmallcontainer}>
                        <View style={styles.smallcontainer}>
                            <Text style={FONTS.h4}>{Constant.HomeScreen.populer}</Text>
                            <Text style={[FONTS.body4, { color: COLORS.red }]}>{Constant.HomeScreen.showall}</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={menu}
                            initialScrollIndex={0}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => <RenderSecendlist item={item}
                            navigation={navigation}
                                index={0} />}
                            keyExtractor={(_, index) => index.toString()}
                        />

                    </View>
                </ScrollView>


                <Modal animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }} >

                    <View style={styles.view} />


                    <View style={styles.modalView}>
                        <ScrollView>
                            <View style={styles.modalTextcontainer}>
                                <Text style={styles.ModalSubText}>{Constant.HomeScreen.filter}</Text>
                                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.crossimageconatainer}>
                                    <Image source={icon.cross} style={styles.modalcross} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.distancecontainer}>
                                <Text style={styles.ModalSubText}>{Constant.HomeScreen.distance}</Text>
                                <Slider 
                                    values={[3, 18]}
                                    min={1}
                                    max={20}
                                    postfix="km"
                                    onValueChange={(values: any) => console.log(values)} prifix={""}                                        
                                        />
                            </View>
                            
                            <View style={styles.distancecontainer}>
                            <Text style={styles.ModalSubText}>{Constant.HomeScreen.deliverytime}</Text>
                               < CustomTimeBar />
                                
                            </View>
                            <View style={styles.distancecontainer}>
                                <Text style={styles.ModalSubText}>{Constant.HomeScreen.pricingrange}</Text>
                                <Slider 
                                    values={[3, 18]}
                                    min={1}
                                    max={20}
                                    prifix="$"
                                    onValueChange={(values: any) => console.log(values)} postfix={undefined}                                        
                                        />
                            </View>
                            
                            <View style={styles.distancecontainer}>
                                <Text style={styles.ModalSubText}>{Constant.HomeScreen.rating}</Text>
                                <CustomRatingBar />
                            </View>
                        </ScrollView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { setModalVisible(false) }}
                        >
                            <Text style={styles.buttontext}> {Constant.Button.applyfilter}</Text>
                        </TouchableOpacity>

                    </View>

                </Modal>

            </View>
        </View>
    )
}
export default Homepage;
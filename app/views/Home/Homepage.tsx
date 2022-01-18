import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ScrollView, Modal } from "react-native";
import { Abutton, Header, Slider } from "../../common";
import { categories, COLORS, Constant, FONTS, icon, Screen } from "../../config";
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
    setDefaultRating: React.Dispatch<React.SetStateAction<number>>
    maxRating: number[]
    defaulttime: string
    setDefaulttime: React.Dispatch<React.SetStateAction<string>>
    maxtime: string[]
    menu: any
    menulist: any
    setdistance: any
    setprice: any
    filteredData: any
    filterdata: boolean
    setfilterdata: React.Dispatch<React.SetStateAction<boolean>>
    Resetfilter: () => void
    Searchtext: any
    isSearch: boolean
    setisSearch: any
    searchText: string
    SearchData: any
    resetsearch: any


}

const Homepage = (props: Homepageprops) => {
    const { navigation,
        defaultitem,
        setdefaultitem,
        modalVisible,
        setModalVisible,
        defaultRating,
        setDefaultRating,
        maxRating,
        defaulttime,
        setDefaulttime,
        maxtime,
        menu,
        menulist,
        setdistance,
        setprice,
        filteredData,
        filterdata,
        setfilterdata,
        Resetfilter,
        Searchtext,
        isSearch,
        setisSearch,
        searchText,
        SearchData,
        resetsearch

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
                        <TouchableOpacity style={styles.HeaderRight}
                            onPress={() => navigation.navigate(Screen.MyAccountModel)}
                        >
                            <Image source={icon.user_avatar} style={styles.headerRightimage} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.searchbarcontainer}>
                    <Image source={icon.search} style={styles.searchbarimage} />
                    <TextInput style={[styles.searchbarinput, { width: isSearch ? "75%" : "85%", }]}
                        onChangeText={Searchtext}
                        value={searchText}
                    />
                    {isSearch ? <TouchableOpacity onPress={() => { setisSearch(false), resetsearch(Text) }} style={styles.searchclose}>
                        <Image source={icon.cross} style={[styles.searchbarimage]} />
                    </TouchableOpacity> : null}
                    <TouchableOpacity onPress={() => { setModalVisible(true) }} style={{ alignSelf: "center" }}>
                        <Image source={icon.filter} style={styles.searchbarimage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.DeliveryContainer}>
                    <View>
                        <Text style={[FONTS.body4, { color: COLORS.primary, marginVertical: 5 }]}>{Constant.HomeScreen.deliverto}</Text>
                        <Text style={FONTS.h4}>Sector-22, Noida ,UP </Text>
                    </View>
                    <TouchableOpacity onPress={() => { setfilterdata(false), Resetfilter }} style={styles.button}>
                        {filterdata ? <Text style={styles.closefilter} >Close Filter</Text> : null}
                    </TouchableOpacity>

                </View>




                <ScrollView
                    style={styles.scrollview}
                    showsVerticalScrollIndicator={false}
                >
                    {!isSearch ? null :
                        <View style={styles.searchcontainer}>
                            <View style={styles.mainsmallcontainer}>
                                <View style={styles.smallcontainer}>
                                    <Text style={FONTS.h3}>{Constant.HomeScreen.Search}:{searchText}</Text>
                                    <Text style={[FONTS.body4, { color: COLORS.red }]}></Text>
                                </View>
                             {SearchData.length !=0?   <FlatList
                                    horizontal
                                    data={SearchData}
                                    initialScrollIndex={0}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => <RenderSecendlist item={item}
                                        navigation={navigation}
                                        index={0} />}
                                    keyExtractor={(_, index) => index.toString()} />:
                                    <Text style={FONTS.h3}> Searched Item Is Not Found </Text>
                                    }
                            </View>
                            <View style={styles.listsaperator} />
                        </View>
                    }



                    {!filterdata ?
                        <><View style={styles.firstflatlistContainer}>

                            <FlatList
                                horizontal
                                data={categories}
                                initialScrollIndex={0}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => <RanderListItem item={item}
                                    defaultitem={defaultitem}
                                    setdefaultitem={setdefaultitem}
                                    index={0} />}
                                keyExtractor={(_, index) => index.toString()} />
                        </View>
                            <View style={styles.mainsmallcontainer}>
                                <View style={styles.smallcontainer}>
                                    <Text style={FONTS.h4}>{Constant.HomeScreen.populer}</Text>
                                    <Text style={[FONTS.body4, { color: COLORS.red }]}>{Constant.HomeScreen.showall}</Text>
                                </View>
                                <FlatList
                                    horizontal
                                    data={menulist}
                                    extraData={menulist}
                                    initialScrollIndex={0}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => <RenderSecendlist item={item}
                                        navigation={navigation}
                                        index={0} />}
                                    keyExtractor={(_, index) => index.toString()} />
                            </View></>
                        :
                        <View>
                            <View style={styles.mainsmallcontainer}>
                                <View style={styles.smallcontainer}>
                                    <Text style={FONTS.h3}>{Constant.HomeScreen.FilterData}</Text>
                                    <Text style={[FONTS.body4, { color: COLORS.red }]}></Text>
                                </View>
                                <FlatList
                                    horizontal
                                    data={filteredData}
                                    extraData={filteredData}
                                    initialScrollIndex={0}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => <RenderSecendlist item={item}
                                        navigation={navigation}
                                        index={0} />}
                                    keyExtractor={(_, index) => index.toString()} />
                            </View>
                        </View>
                    }
                    <View style={styles.mainsmallcontainer}>
                        <View style={styles.smallcontainer}>
                            <Text style={FONTS.h4}>{Constant.HomeScreen.Recommonded}</Text>
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
                                    onValueChange={(values: any) => setdistance(values)} prifix={""}
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
                                    onValueChange={(values: any) => setprice(values)}
                                    postfix={undefined}
                                />
                            </View>

                            <View style={styles.distancecontainer}>
                                <Text style={styles.ModalSubText}>{Constant.HomeScreen.rating}</Text>
                                <CustomRatingBar />
                            </View>
                        </ScrollView>

                        <Abutton title={Constant.Button.applyfilter} OnPress={() => { setModalVisible(false), setfilterdata(true) }} />


                    </View>

                </Modal>

            </View>
        </View>
    )
}
export default Homepage;
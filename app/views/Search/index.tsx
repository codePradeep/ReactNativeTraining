import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { buttons, icons } from "../../config";
import constants from "../../config/constants/constants";
import dummyData from "../../config/constants/dummyData";
import { Item } from "../Course Listing/Renderitem";
import Renderitem from "./Renderitem";
import styles from "./style";
import { selectedTheme } from "../../config";


interface SearchScreenProps {
    navigation: any
    visible: any
    setvisibe: any
    defaultitem: number
    setdefaultitem: React.Dispatch<React.SetStateAction<number>>
    SearchTexthandler: any
    isSearch: boolean
    searchText: string
    setisSearch: any
    resetsearch: any
    flatlistdata: {
        id: number;
        title: string;
        thumbnail: any;
    }[]
    DATA: any
    changeTheme:any
    render:any
    setrender:any
}

const SearchScreen = (props: SearchScreenProps) => {
    const {
        navigation,
        visible,
        setvisibe,
        defaultitem,
        setdefaultitem,
        SearchTexthandler,
        isSearch,
        searchText,
        setisSearch,
        resetsearch,
        flatlistdata, DATA,
        changeTheme,render,setrender
    } = props




console.log("screem=>",selectedTheme.name)





    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).conatiner}>

                <View style={styles(selectedTheme).searchbar}>
                    <TouchableOpacity 
                    onPress={()=>{setrender(!render),changeTheme()}}>
                        <Image source={icons.Icon.search} style={styles(selectedTheme).headerlefticon} />
                    </TouchableOpacity>
                    {/* <TextInput 
                    placeholder="Search for Topic,Courses & Educations" 
                    onChangeText={SearchTexthandler}
                    /> */}
                    <TextInput style={[
                        //styles(selectedTheme).searchbarinput, 
                        { width: !isSearch ? "100%" : "85%", }]}
                        onChangeText={SearchTexthandler}
                        value={searchText}
                    />
                    {isSearch ? <TouchableOpacity onPress={() => { setisSearch(false), resetsearch(Text) }}
                    //  style={styles(selectedTheme).searchclose}
                    >
                        <Image source={icons.Icon.cross} style={[styles(selectedTheme).searchbarimage]} />
                    </TouchableOpacity> : null}
                </View>




                <Text style={styles(selectedTheme).text}>Top Searches</Text>
                <ScrollView
                style={{flex:1}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles(selectedTheme).topsearch}>
                        {dummyData.top_searches.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles(selectedTheme).topsearchcontainer}>
                                    <Text key={index} style={styles(selectedTheme).searchlist}>{item.label}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>


                {!isSearch? 
                <View >
                <Text style={styles(selectedTheme).text}>Browse Categories</Text>
                <FlatList
                    data={flatlistdata}
                    extraData={flatlistdata}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => <Renderitem item={item} index={index} defaultitem={defaultitem} setdefaultitem={setdefaultitem} />}
                    numColumns={2}
                    keyExtractor={(_, index) => index.toString()}
                />
                </View>
                :

                <FlatList
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}
                 />
}
            </View>
        </View>
    )
}


export default SearchScreen

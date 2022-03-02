import React from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icons, Screensdata, selectedTheme } from "../../config";
import dummyData from "../../config/constants/dummyData";
import Item from "../Home/Flatlistranderitem";
import Renderitem from "./Renderitem";
import styles from "./style";



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
        icon: any;
    }[]
    DATA: any
    isfavourite: any
    setisfavourite: any

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
        isfavourite, setisfavourite

    } = props

    const handleEmpty = () => {
        return <Text> No data present!</Text>;
    };

    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).conatiner}>
                <View style={styles(selectedTheme).searchbar}>
                    <TouchableOpacity
                    // onPress={()=>{setrender(!render),changeTheme()}}
                    >
                        <Image source={icons.Icon.search} style={styles(selectedTheme).headerlefticon} />
                    </TouchableOpacity>

                    <TextInput style={[
                        { width: !isSearch ? "100%" : "85%", }]}
                        onChangeText={SearchTexthandler}
                        placeholder={Screensdata.Search.placeholder}
                        value={searchText}
                        placeholderTextColor={selectedTheme.textgray8Ngray4}
                    />
                    {isSearch ? <TouchableOpacity onPress={() => { setisSearch(false), resetsearch(Text) }}>
                        <Image source={icons.Icon.cross} style={[styles(selectedTheme).searchbarimage]} />
                    </TouchableOpacity> : null}
                </View>





                {!isSearch ?
                    <View>
                        <Text style={styles(selectedTheme).text}>{Screensdata.Search.TopSearches}</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles(selectedTheme).topsearch}>
                                {dummyData.top_searches.map((item, index) => {
                                    return (
                                        <View key={index} style={{ flex: 1 }}>
                                            <TouchableOpacity style={styles(selectedTheme).topsearchcontainer}
                                                onPress={() => SearchTexthandler(item.label)}>
                                                <Text key={index} style={styles(selectedTheme).searchlist}>{item.label}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>

                        <FlatList
                            key={1}
                            data={flatlistdata}
                            extraData={flatlistdata}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => <Renderitem item={item} index={index} navigation={navigation} />}
                            numColumns={2}
                            keyExtractor={(_, index) => index.toString()}
                            ListHeaderComponent={<Text style={styles(selectedTheme).text}>{Screensdata.Search.BrowseCategories}</Text>}
                        />
                    </View>
                    :

                    <FlatList
                        data={DATA}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={handleEmpty}
                        keyExtractor={(item, index) => item + index.toString()}
                        renderItem={({ item }) => <Item item={item} isfavourite={isfavourite} setisfavourite={setisfavourite} navigation={navigation} />}
                    />
                }
            </View>
        </View>
    )
}


export default SearchScreen

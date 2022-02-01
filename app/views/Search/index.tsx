import React from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { buttons, icons } from "../../config";
import constants from "../../config/constants/constants";
import dummyData from "../../config/constants/dummyData";
import Renderitem from "./Renderitem";
import styles from "./style";

interface SearchScreenProps {
    navigation: any
    visible: any
    setvisibe: any
    defaultitem: number
    setdefaultitem: React.Dispatch<React.SetStateAction<number>>
}

const SearchScreen = (props: SearchScreenProps) => {
    const { navigation, visible, setvisibe, defaultitem, setdefaultitem, } = props





    return (
        <View style={styles.mainconatiner}>
            <View style={styles.conatiner}>

                <View style={styles.searchbar}>
                    <TouchableOpacity>
                        <Image source={icons.Icon.search} style={styles.headerlefticon} />
                    </TouchableOpacity>
                    <TextInput placeholder="Search for Topic,Courses & Educations" />
                </View>




                <Text style={styles.text}>Top Searches</Text>
                <View style={styles.topsearch}>
                    {dummyData.top_searches.map((item, index) => {
                        return (
                            <TouchableOpacity>
                                <Text key={index} style={styles.searchlist}>{item.label}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Text style={styles.text}>Browse Categories</Text>



                <FlatList
                    data={dummyData.categories}
                    extraData={dummyData.categories}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => <Renderitem item={item} index={index} defaultitem={defaultitem} setdefaultitem={setdefaultitem} />}
                    numColumns={2}
                    keyExtractor={(_, index) => index.toString()}
                />





            </View>
        </View>
    )
}


export default SearchScreen

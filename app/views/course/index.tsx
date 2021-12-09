import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { useOrientation } from "../../config/useOrientation";
import RenderflatItem from "./flatlistranderitem";
import styles from "./style";

interface courseprops {

    item: {
        id: string;
        head: string;
        title: string;
        image: any
        progress: number 
        };
    isLoading:boolean
    data:any
}

const Coursepage = (props: courseprops) => {
    const {isLoading,data} = props
    


    const orientation = useOrientation();
    console.log('orientation====>', orientation)


    // const DATA = [
    //     {
    //         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    //         head: "Your courses",
    //         title: "whole-Person Health",
    //         image: require('../../assets/course_main.png'),
    //         progress: 0.5
    //     },
    //     {
    //         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    //         head: "Your Data",
    //         title: "Be Happy and Enjoy Your Life",
    //         image: require('../../assets/nutrition.jpg'),
    //         progress: 1
    //     },
    // ]

  const  ItemSeprator = () => <View style={{
        height: 2,
        width: 9,
        backgroundColor: "rgba(0,0,0,0.5)",
      }} />

    return (
        <ScrollView>
            <View style={styles(orientation).maincontainer}>
               {isLoading ? <ActivityIndicator/>: <FlatList
                    
                    horizontal
                    showsVerticalScrollIndicator={false}
                   // pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                  //  legacyImplementation={false}
                    data={data}
                    initialScrollIndex={0}
                   ItemSeparatorComponent={ItemSeprator}
                    renderItem={({ item ,index }) => <RenderflatItem  item={item} orientation={orientation} index={0}/> }
                    keyExtractor={(_,index )=> index.toString()}
                /> }
            </View>
        </ScrollView>
    )
}


export default Coursepage;

function scrollToIndex(arg0: { animated: boolean; index: number; }): void {
    throw new Error("Function not implemented.");
}


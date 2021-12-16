import React from "react";
import { View, FlatList, ScrollView, ActivityIndicator } from "react-native";
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
  orientation: {
    isLandscape: boolean;
    width: number;
    height: number;
    scale: number;
    fontScale: number;
  }
  isLoading: boolean
  data: any
}

const Coursepage = (props: courseprops) => {
  const { isLoading, data, orientation } = props





  const ItemSeprator = () => <View style={styles(orientation).ItemSeprator} />

  return (
    <ScrollView>
      <View style={styles(orientation).maincontainer}>
        {isLoading ? <ActivityIndicator /> : <FlatList

          horizontal
          showsVerticalScrollIndicator={false}
          //  pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          //  legacyImplementation={false}
          data={data}
          initialScrollIndex={0}
          ItemSeparatorComponent={ItemSeprator}
          renderItem={({ item, index }) => <RenderflatItem item={item} orientation={orientation} index={0} />}
          keyExtractor={(item) => item.id}
        // (_,index )=> index.toString()
        />}
      </View>
    </ScrollView>
  )
}


export default Coursepage;

function scrollToIndex(arg0: { animated: boolean; index: number; }): void {
  throw new Error("Function not implemented.");
}


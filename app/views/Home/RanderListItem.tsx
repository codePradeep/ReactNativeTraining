
import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { COLORS, FONTS, icon } from "../../config";
import styles from "./style";

interface renderprops {
  index:any
  item: {
    id: number;
    name: string;
    icon: any;
  }
  defaultitem:any
  setdefaultitem:any

}


const RanderListItem = (props: renderprops) => {
  const { item ,defaultitem, setdefaultitem} = props



  return (

    <View style={styles.firstrendercontainer} >
      <TouchableOpacity
      onPress={()=>setdefaultitem(item.id)}
      >
        <View style={[styles.itemcontainer,{backgroundColor:defaultitem == item.id?COLORS.primary:COLORS.lightGray2}]}>
          <Image style={styles.itemIcon} source={item.icon} />
          <Text style={[styles.itemtext,{color:defaultitem == item.id?COLORS.white:COLORS.black}]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.Itemsaperator} />
    </View>

  );
}

export default RanderListItem
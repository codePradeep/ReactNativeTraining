import React, { memo } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, selectedTheme } from "../../config";
import styles from "./style";

interface renderprops {
  index: any
  item: {
    id: number;
    price: string;
    months: string;
    subtitile: string;
  }
  defaultitem: any
  setdefaultitem: any

}


const Renderitem = (props: renderprops) => {
  const { item, defaultitem, setdefaultitem } = props
  return (

    <TouchableOpacity
      onPress={() => setdefaultitem(item.id)}
      style={[styles(selectedTheme).item, {
        backgroundColor: defaultitem == item.id ? selectedTheme.backgroundblueNblack : selectedTheme.backgroundwhite3Ngray8,
        borderColor: defaultitem == item.id ? selectedTheme.borderColor1 : selectedTheme.borderColor1
      }]}>
      <View style={styles(selectedTheme).view}>

        <View style={styles(selectedTheme).checkedcontainer}>
          {defaultitem == item.id ?
            <Image source={icons.Icon.checkbox_on_dark}
              style={[styles(selectedTheme).Icons,]}
            /> :
            <View style={styles(selectedTheme).Icons}></View>}
          {
            item.id == 0 ? <Text style={styles(selectedTheme).bestdeals}>Best Deal</Text> : null
          }
        </View>

        <View style={styles(selectedTheme).price}>
          <Text style={[styles(selectedTheme).itembigtext, { color: defaultitem == item.id ? COLORS.white : selectedTheme.textblackNwhite }]}
          >{item.price}</Text>
          <Text style={[styles(selectedTheme).itemtext, { color: defaultitem == item.id ? COLORS.white : selectedTheme.textblackNwhite }]}
          >/{item.months}</Text>
        </View>


        <Text style={[styles(selectedTheme).itemtext, { color: defaultitem == item.id ? COLORS.white : selectedTheme.textblackNwhite }]}
        >{item.subtitile}</Text>

      </View>
    </TouchableOpacity>
  )
}

export default Renderitem
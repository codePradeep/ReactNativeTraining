
import React from "react";
import { View, Text, Image } from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import { Coursebutton } from "../../common";
import styles from "./style";
interface renderprops {

  index: number
  orientation: any
  item: any

}


const RenderflatItem = (props: renderprops) => {
  


  return (
    <View style={styles(props.orientation).item} >
      <Text style={styles(props.orientation).header}>Your courses </Text>
      <Image
        style={styles(props.orientation).image}
        source={{ uri: props.item.url }}
      />
      <Text style={styles(props.orientation).title} >{props.item.title}</Text>
      <ProgressBar
        style={{ marginVertical: 15, height: 9 }}
        color="green"
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.5}

      />
      <Coursebutton title="Continue Learning" />

    </View>

  );
}

export default RenderflatItem
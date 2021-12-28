
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icon } from "../../config";
import styles from "./style";
interface renderprops {

  index: number
  
  item: any

}


const RanderListItem = (props: renderprops) => {
  


  return (
      
    <View  > 
      <TouchableOpacity>
      <View style={{flexDirection:"row", padding: 20, }}>
      <Image style={styles.icon} source={props.item.icondata} />
      <Text style={styles.SettingText}>{props.item.title}</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.Itemsaperator}/>
    </View>

  );
}

export default RanderListItem
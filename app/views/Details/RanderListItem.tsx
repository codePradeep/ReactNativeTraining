
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
interface renderprops {

  index: number
  orientation: any
  item: any

}


const RanderListItem = (props: renderprops) => {
  


  return (
      
    <View style={styles(props.orientation).item} >
      <Text style={styles(props.orientation).header}>Test{props.item.id}</Text>
      <View style={{flexDirection:"row"  }}>
      <Image
        style={styles(props.orientation).image}
        source={require('../../assets/padlock.png')}
      />
      <Text style={styles(props.orientation).title} >{props.item.title}</Text>
      </View>

    </View>

  );
}

export default RanderListItem
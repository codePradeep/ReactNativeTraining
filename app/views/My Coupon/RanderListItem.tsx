
import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { icon } from "../../config";
import styles from "./style";
interface renderprops {

  index: number

  item: any

}


const RanderListItem = (props: renderprops) => {



  return (

    <View  >
      <View style={styles.Ticket} >
        <TouchableOpacity>
          <View style={{ flexDirection: "row", padding: 20,justifyContent:"space-evenly" }}>
            <Image style={styles.icon} source={props.item.icondata} />
            <View>
              <Text style={styles.Title}>{props.item.title}</Text>
              <Text style={styles.SubTitle}>{props.item.Subtitle}</Text>
              <Text style={styles.validTitle}>Valid until 01 jan 2022</Text>
            </View>

          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.Itemsaperator} />
    </View>

  );
}

export default RanderListItem
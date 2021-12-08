import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './style'



const Coursebutton = (props: any) => {
  const { title } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.Press}

    >
      <Text style={styles.paragraph}>{props.title}</Text>
      
    </TouchableOpacity>

  )

}

export default Coursebutton
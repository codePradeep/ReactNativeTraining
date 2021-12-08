import React from "react";
import { Image, View } from "react-native";
import { useOrientation } from "../../config/useOrientation";
import styles from "./style";





const Headerlogo = () => {
  const orientation = useOrientation();



  return (
    <View style={styles(orientation).container}>
      <Image
        style={styles(orientation).image}
        source={require('../../assets/header.png')}
      />
    </View>
  );
}

export default Headerlogo
import React from "react";
import { Image, View } from "react-native";
import { icon } from "../../config";
import { useOrientation } from "../../config/useOrientation";
import styles from "./style";





const Headerlogo = () => {
  const orientation = useOrientation();



  return (
    <View style={styles(orientation).container}>
      <Image
        style={styles(orientation).image}
        source={icon.header}
      />
    </View>
  );
}

export default Headerlogo
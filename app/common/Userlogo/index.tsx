import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Userlogo() {
  return (<View style={{justifyContent:"center",alignItems:"center"}}><Image source={require('../../assets/Pradeep.png')} style={styles.image} /></View>)
}

const styles = StyleSheet.create({
  image: {
     borderRadius: 90 ,
      
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
import React from 'react'
import { Image,  View } from 'react-native'
import { useOrientation } from '../../config/useOrientation'
import styles from './Style'

interface logoprops{

}


 const Logo=(props:any) =>{
 const orientation = useOrientation()
  return (<View style={styles(orientation).container}>
    <Image source={props.source} style={styles(orientation).image} />
    </View>)
}



export default Logo
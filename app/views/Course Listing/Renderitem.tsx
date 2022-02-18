import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, selectedTheme } from "../../config";
import styles from "./style";

interface renderItem {
    item: {
        id: number;
        title: string;
        duration: number;
        instructor: string;
        ratings: number;
        price: number;
        is_favourite: boolean;
        thumbnail: any;
    }
}

const Item = (props: renderItem) => {
    const { item } = props
    return (
        <View>
            <View style={styles.item}>

                <Image source={item.thumbnail} style={styles.image} />
                <TouchableOpacity style={styles.fevcontainer}>
                <Image source={item.is_favourite? icons.Icon.favourite:icons.Icon.favourite_outline} style={styles.fevcon}/>
                </TouchableOpacity>
                <View style={styles.itemtextcontainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.notificationtitlecontainer}>

                        <Text style={styles.time}>By {item.instructor} </Text>
                        <View style={styles.ratingcontainer}>
                            <Image source={icons.Icon.reminder} style={styles.smallicon} />
                            <Text style={styles.time}> {item.duration} Min</Text>
                        </View>
                    </View>
                    <View style={styles.notificationtitlecontainer}>
                        <Text style={styles.subtitle}>${item.price}.00</Text>
                        <View style={styles.ratingcontainer}>
                            <Image source={icons.Icon.star} style={styles.smallicon} />
                            <Text style={styles.ratings}> {item.ratings}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.seperater} />
        </View>
    );
}



interface renderprops {
    index:any
    item:  {
      id: number;
      label: string;
      icon: any;
  }
    defaultitem:any
    setdefaultitem:any

  
  }
  
  
  const Renderitem=(props:renderprops)=>{
      const {item,defaultitem,setdefaultitem}=props
      return(
          
          <TouchableOpacity 
          onPress={()=>(setdefaultitem(item.id))}
          style={[styles.classtypeitem,{backgroundColor:defaultitem == item.id?selectedTheme.backgroundblueNblack:selectedTheme.backgroundwhite3Ngray8,
          borderColor:defaultitem == item.id?selectedTheme.borderColor1:selectedTheme.borderColor1
          }]}>
          <Image source={item.icon} 
          style={[styles.Icons,{tintColor:defaultitem == item.id?COLORS.white:selectedTheme.tintColor}]} 
          />
          <Text style={[styles.itemtext,{color:defaultitem == item.id? COLORS.white:selectedTheme.textblackNwhite}]} 
          >{item.label}</Text>
      </TouchableOpacity>
      )
  }
  





export { Item,Renderitem}
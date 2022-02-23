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
            <View style={styles(selectedTheme).item}>

                <Image source={item.thumbnail} style={styles(selectedTheme).image} />
                <TouchableOpacity style={styles(selectedTheme).fevcontainer}>
                <Image source={item.is_favourite? icons.Icon.favourite:icons.Icon.favourite_outline} style={styles(selectedTheme).fevcon}/>
                </TouchableOpacity>
                <View style={styles(selectedTheme).itemtextcontainer}>
                    <Text style={styles(selectedTheme).title}>{item.title}</Text>
                    <View style={styles(selectedTheme).notificationtitlecontainer}>

                        <Text style={styles(selectedTheme).time}>By {item.instructor} </Text>
                        <View style={styles(selectedTheme).ratingcontainer}>
                            <Image source={icons.Icon.reminder} style={styles(selectedTheme).smallicon} />
                            <Text style={styles(selectedTheme).time}> {item.duration} Min</Text>
                        </View>
                    </View>
                    <View style={styles(selectedTheme).notificationtitlecontainer}>
                        <Text style={styles(selectedTheme).subtitle}>${item.price}.00</Text>
                        <View style={styles(selectedTheme).ratingcontainer}>
                            <Image source={icons.Icon.star} style={styles(selectedTheme).smallicon} />
                            <Text style={styles(selectedTheme).ratings}> {item.ratings}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles(selectedTheme).seperater} />
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
          style={[styles(selectedTheme).classtypeitem,{backgroundColor:defaultitem == item.id?selectedTheme.backgroundblueNblack:selectedTheme.backgroundwhite3Ngray8,
          borderColor:defaultitem == item.id?selectedTheme.borderColor1:selectedTheme.borderColor1
          }]}>
          <Image source={item.icon} 
          style={[styles(selectedTheme).Icons,{tintColor:defaultitem == item.id?COLORS.white:selectedTheme.tintColor}]} 
          />
          <Text style={[styles(selectedTheme).itemtext,{color:defaultitem == item.id? COLORS.white:selectedTheme.textblackNwhite}]} 
          >{item.label}</Text>
      </TouchableOpacity>
      )
  }
  





export { Item,Renderitem}
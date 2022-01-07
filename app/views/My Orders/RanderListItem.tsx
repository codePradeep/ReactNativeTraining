
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Constant, icon } from "../../config";
import styles from "./style";
interface renderprops {

  index: number
  navigation:any
  item: any

}


const RanderListItem = (props: renderprops) => {

  const { navigation } = props
  const [toggle,settogle]=useState(true)

  return (

    <View style={styles.rendermaincontainer}>
      <View style={styles.Ticket} >

        <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.icon} source={props.item.image} />
            <View>
              <Text style={styles.SubTitle}>{props.item.title}</Text>
              <Text style={styles.Title}>{props.item.time}</Text>
              <Text style={styles.validTitle}>{props.item.subtitle}</Text>
            </View>
          </View>
          <Text style={styles.money}>${props.item.price}</Text>
        </View>
        <View style={styles.FirstView} >
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={toggle?styles.clickedbutton:styles.notclickedbutton}
                    onPress={()=>{settogle(true),
                      props.item.button1==Constant.Button.Trackorder?navigation.navigate("DeliveryStatusModel"):navigation.navigate("FoodDetailModel")}} 
                    >
                        <Text style={toggle?styles.renderclickedbuttontext:styles.rendernotclickedbuttontext}>{props.item.button1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={toggle?styles.notclickedbutton:styles.clickedbutton}
                      onPress={()=>{settogle(false),
                        props.item.button2==Constant.Button.rate?navigation.navigate("RiderReviewModel"):null
                      }} 
                    >
                        <Text style={!toggle?styles.renderclickedbuttontext:styles.rendernotclickedbuttontext}>{props.item.button2}</Text>
                    </TouchableOpacity>
                </View>
            </View>


      </View>

      <View style={styles.Itemsaperator} />
    </View>

  );
}

export default RanderListItem
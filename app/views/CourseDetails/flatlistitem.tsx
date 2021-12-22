
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icon } from "../../config";
import styles from "./style";
interface renderprops {

  index: number
  orientation: any
  item: any

}


const FlatListItem = (props: renderprops) => {
  
  const [isdrop,setisdrop]=useState(false)
  const Submodule=() =>{
    return props.item.submodule.map((title:any, i:any)=>{
      return(
        <View key={i} style={{flex:1,flexDirection:"row" ,justifyContent:"space-between"}}>
          <Image source={icon.progress_chart} style={{height:20,width:20,resizeMode:"contain",alignSelf:"center"}} />
          <Text style={{flex:0.95,fontSize:20}}>{title.title}</Text>
        </View>
      );
    });
  }



  return (
    <View>

    <View style={{ flex: 1, flexDirection: "row" ,justifyContent:"space-between",marginVertical:20}} >

      <View>
          <Image source={require("../../assets/course_main.png")} style={{  height: 100, width: 100 }} />
      </View>
      

      <View style={{ flex: 0.95 ,justifyContent:"space-between"}}>
        
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:16}}>MODULE {props.item.id}</Text>
       {!isdrop? <TouchableOpacity 
        onPress={()=>setisdrop(true)}>
        <Image source={icon.dropdown_line} style={{height:20,width:20,resizeMode:"contain",}}/>
        </TouchableOpacity> :
        <TouchableOpacity 
        onPress={()=>setisdrop(false)}>
        <Image source={icon.upload} style={{height:20,width:20,resizeMode:"contain"}}/>
        </TouchableOpacity>}
        </View>
        
        
        
        
        <Text style={{color:"black",fontSize:22}}>{props.item.title}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={icon.clock} style={{ height: 20, width: 20 }} />
            <Text style={{color:"black",paddingLeft:5}}> 3h 30min</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{paddingRight:10}}>100%</Text>
            <TouchableOpacity>
            <Image source={icon.bookmark} style={{ height: 20, width: 20 ,resizeMode:"contain"}} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>

{isdrop?
<View>
<Text>SubModule</Text>
<Submodule />


</View>

:null}



    </View>

  );
}

export default FlatListItem



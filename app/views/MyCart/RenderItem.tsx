import React, { useState } from "react";
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icon } from "../../config";
import SettingData from "../../config/SettingData";
import styles from "./style";

interface RenderItemProps{
    data: any
    ItemPrice:number
    setListData:any
}
interface HiddenItemprops{
    data:any
    rowMap:any
    deleteRow:any
}
const RenderItem = (props:RenderItemProps) => {
    const {data,ItemPrice}=props
    const [count,setcount]=useState(1)
    const newprice =data.item.price*count
 //   setListData({...data,price:newprice})
    
    return (
        <TouchableHighlight
            style={styles.rowFront}
            underlayColor={COLORS.lightOrange}
        >
            <View
                style={styles.renderitemContainer}
            >
                <Image source={data.item.image} style={styles.itemimage} />
                <View>
                    <Text style={FONTS.h3}>{data.item.name}</Text>
                    <Text style={[FONTS.h4, { color: COLORS.primary }]}>${newprice}</Text>
                </View>
                <View style={styles.subrenderitemcontainer}>
                    <TouchableOpacity
                    onPress={() => { count == 0 ? 0 : setcount(count - 1); }}
                    >
                        <Text style={[FONTS.body1, { color: COLORS.primary }]}>-</Text>
                    </TouchableOpacity>
                    <Text style={[FONTS.body2, { color: COLORS.black, paddingHorizontal: 10 }]}>{count}</Text>
                    <TouchableOpacity
                    onPress={()=>setcount(count+1)}
                    >
                        <Text style={[FONTS.body1, { color: COLORS.primary }]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>
    );
}


const RenderHiddenItem = (props:HiddenItemprops) =>{ 
    const {data,rowMap,deleteRow}=props
    return(
    <View style={styles.rowBack}>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => deleteRow(rowMap, data.item.key)}
        >
            <Image source={icon.trash} style={styles.icon} />
        </TouchableOpacity>
    </View>
);}
export {RenderItem,RenderHiddenItem}
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { menu } from "../config";
import MyCart from "../views/MyCart";

interface myCartmodelprops {
    navigation: any
}

const MyCartModel = (props: myCartmodelprops) => {
    const {navigation}=props
    const [listData, setListData] = useState(menu);
    const [modalVisible, setModalVisible] = useState(true);
    const [cartcount, setcartcount] = useState(0)



    useEffect(() => {
        const count = Object.keys(listData).length
        setcartcount(count)
    }, [])

    const deleteRow = (rowMap: any, rowKey: any) => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.id === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
        setcartcount(cartcount - 1)
       
    }

    return (
        <MyCart
         navigation={navigation}
         listData={listData}
         setListData={setListData}
         modalVisible={modalVisible}
         setModalVisible={setModalVisible}
         cartcount={cartcount}
         setcartcount={setcartcount}
         deleteRow={deleteRow}
         
         />
    )
}

export default MyCartModel
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Cartmenu } from "../config/dummyData";
import MyCart from "../views/MyCart";

interface myCartmodelprops {
    navigation: any
}

const MyCartModel = (props: myCartmodelprops) => {
    const {navigation}=props
    const [listData, setListData] = useState(Cartmenu);
    const [modalVisible, setModalVisible] = useState(false);
    const [cartcount, setcartcount] = useState(0)

    console.log(Cartmenu.map(a=>a.price))



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
    const [count, setcount] = useState(1);
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

             ItemPrice={undefined}         
         />
    )
}

export default MyCartModel
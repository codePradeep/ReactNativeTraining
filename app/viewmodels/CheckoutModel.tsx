import React, { useState } from "react";
import Checkout from "../views/Checkout";
import MyCard from "../views/MyCard";
interface CheckoutModelprops {
    navigation: any
}
const CheckoutModel = (props: CheckoutModelprops) => {

    const data = {
        master: false,
        google: false,
    }
    const [modalVisible, setModalVisible] = useState(false);
    const [istoggle, setistoggle] = useState(data)



    const { navigation } = props
    return (
        <Checkout navigation={navigation}
            istoggle={istoggle}
            setistoggle={setistoggle}
            data={data}
            modalVisible ={modalVisible }
            setModalVisible={setModalVisible}
        />
    )
}
export default CheckoutModel;
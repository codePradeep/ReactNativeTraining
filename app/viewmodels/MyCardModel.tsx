import React, { useState } from "react";
import MyCard from "../views/MyCard";
interface MyCardmodelprops {
    navigation: any
}
const MyCardModel = (props: MyCardmodelprops) => {

    const data = {
        master: false,
        google: false,
        apple: false,
        visa: false,
        paypal: false,
    }

    const [istoggle, setistoggle] = useState(data)



    const { navigation } = props
    return (
        <MyCard navigation={navigation}
            istoggle={istoggle}
            setistoggle={setistoggle}
            data={data}
        />
    )
}
export default MyCardModel;
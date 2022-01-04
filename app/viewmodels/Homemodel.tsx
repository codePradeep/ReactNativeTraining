import React, { useState } from "react";

import Homepage from "../views/Home/Homepage";

interface Homemodelprops {
    navigation: any


}

const Homemodel = (props: Homemodelprops) => {
    const { navigation } = props


    const [defaultitem, setdefaultitem] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [defaultRating, setDefaultRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [defaulttime, setDefaulttime] = useState("0");
    const [maxtime, setMaxtime] = useState(["10 Mins", "20 Mins", "30 Mins"]);

    return (
        <Homepage
            navigation={navigation}
            defaultitem={ defaultitem}
            setdefaultitem={setdefaultitem}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            defaultRating={defaultRating}
            setDefaultRating={setDefaultRating}
            maxRating={maxRating}
            setMaxRating={setMaxRating}
            defaulttime={defaulttime}
            setDefaulttime={setDefaulttime}
            maxtime={maxtime}
            setMaxtime={setMaxtime}


        />
    )
}
export default Homemodel;
import React, { useState } from "react";
import FoodDetail from "../views/Food Details";
interface FoodDetailModelprops {
    navigation: any
}
const FoodDetailModel = (props: FoodDetailModelprops) => {
    const { navigation } = props
    const [defaultRating, setDefaultRating] = useState(0);
    
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    const [defaultsize, setDefaultsize] = useState("0");

    const [maxsize, setMaxtips] = useState(["12", "14", "16", "18"]);
    const [count, setcount] = useState(1);

    return (
        <FoodDetail
            navigation={navigation}
            defaultRating={defaultRating}
            setDefaultRating={setDefaultRating}
            maxRating={maxRating}
            defaultsize={defaultsize}
            setDefaultsize={setDefaultsize}
            maxsize={maxsize}
            count={count}
            Add={() => setcount(count + 1)}
            Subs={() => { count == 0 ? 0 : setcount(count - 1) }}

        />
    )
}
export default FoodDetailModel;
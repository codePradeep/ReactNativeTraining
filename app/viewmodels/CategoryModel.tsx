import React, { useState } from "react";
import CategoryScreen from "../views/Category";
interface loginmodelprops {
    navigation: any
}
const CategoryModel = (props: loginmodelprops) => {
    const { navigation } = props
    

    const [visible, setvisibe] = useState(false)
    const [defaultitem, setdefaultitem] = useState(" ");
    return (
        <CategoryScreen

            {...{
                navigation,
                visible,
                setvisibe,
                defaultitem,
                setdefaultitem
            }}

        />
    )
}
export default CategoryModel;
import React, { memo, useState } from "react";
import CategoryScreen from "../views/Category";
interface loginmodelprops {
    navigation: any
}
const CategoryModel = (props: loginmodelprops) => {
    const { navigation } = props

    const [defaulticon, setdefaulticon] = useState()
    const [defaultitem, setdefaultitem] = useState(" ");
    return (
        <CategoryScreen

            {...{
                navigation,
                defaultitem,
                setdefaultitem,
                setdefaulticon,
                defaulticon
            }}

        />
    )
}
export default  memo( CategoryModel);
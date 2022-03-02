import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dummyData from "../config/constants/dummyData";



import Homepage from "../views/Home/Homepage";

interface Homemodelprops {
    navigation: any


}
type DefaultRootStat = {
    Data: any
}

const Homemodel = (props: Homemodelprops) => {
    const { navigation } = props

    const Userdata = useSelector<DefaultRootStat>(state => state.Data)

    const [seeall, setseeall] = useState(false)
    const [isfavourite, setisfavourite] = useState([])
    let courselist2 = dummyData.courses_list_2



    if (seeall == false) {
        courselist2 = dummyData.courses_list_2.filter((a) => a.id > 3).map((a) => a)

    }

    return (
        <Homepage
            {...{
                navigation,
                courselist1: dummyData.courses_list_1,
                category: dummyData.categories,
                courselist2,
                setseeall,
                isfavourite,
                setisfavourite
            }} />
    )
}
export default memo(Homemodel);
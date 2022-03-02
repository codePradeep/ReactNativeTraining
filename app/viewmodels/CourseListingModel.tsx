import React, { memo, useState } from "react";
import { constants, } from "../config";
import dummyData from "../config/constants/dummyData";
import Corselisting from "../views/Course Listing";
interface Corselistinprops {
    navigation: any
    route: any
}
const CourseListingModel = (props: Corselistinprops) => {
    const { navigation, route } = props
    const { Header, Icon } = route.params;
    const [defaultitem, setdefaultitem] = useState(0);
    const [defaultclasslevel, setdefaultclasslevel] = useState(0);
    const [defaultcreatedwithin, setdefaultcreatedwithin] = useState(0);
    const [classleveldata, setclassleveldata] = useState("")
    const [duration, setduration] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [isfavourite, setisfavourite] = useState([])

    let menudata = dummyData.courses_list_2

    if (classleveldata != "") {
        menudata = menudata.filter((a: any) => a.clsss_level == classleveldata)
    }
    if (duration.length != 0) {
        menudata = menudata.filter((a: any) => a.duration > duration[0] && a.duration < duration[1])
    }
    const resultdata = menudata.length

    const Resetfilter = () => {
        setclassleveldata("")
        setduration([])

    }



    return (
        <Corselisting

            {...{
                Header,
                Icon,
                navigation,
                DATA: menudata,
                modalVisible,
                setModalVisible,
                Classtypedata: constants.class_types,
                defaultitem,
                setdefaultitem,
                ClassLevel: constants.class_levels,
                defaultclasslevel,
                setdefaultclasslevel,
                CreatedWithin: constants.created_within,
                defaultcreatedwithin,
                resultdata,
                setdefaultcreatedwithin,
                setclassleveldata,
                setduration,
                Resetfilter,
                isfavourite,
                setisfavourite
            }}
        />
    )
}
export default memo(CourseListingModel);
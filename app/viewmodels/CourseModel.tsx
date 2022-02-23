import React, { useState } from "react";
import dummyData from "../config/constants/dummyData";
import CourseScreen from "../views/Course";
import CorselChapter from "../views/Course Chapter";
import Loginpage from '../views/Login/Loginpage'
interface Coursemodlprops {
    navigation: any
}
const CourseModel = (props: Coursemodlprops) => {
    const { navigation } = props

    const [visible, setvisibe] = useState(false)
    return (
        <CourseScreen
            {...{
                DATA:dummyData,
                navigation
            }}
        />
    )
}
export default CourseModel;
import React, { useState } from "react";
import { dummyData } from "../config";
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
            navigation={navigation}
            DATA={dummyData}
        />
    )
}
export default CourseModel;
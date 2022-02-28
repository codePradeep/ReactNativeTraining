import React, { useState } from "react";
import dummyData from "../config/constants/dummyData";
import CourseScreen from "../views/Course";
import CorselChapter from "../views/Course Chapter";
import Loginpage from '../views/Login/Loginpage'
interface Coursemodlprops {
    navigation: any
    route: any
}
const CourseModel = (props: Coursemodlprops) => {
    
    const { navigation, route } = props
    const { Title } = route.params;

    const [visible, setvisibe] = useState(false)
    const [isfavourite, setisfavourite]=useState([])
    return (
        <CourseScreen
            {...{
                DATA:dummyData,
                navigation,
                Title,
                isfavourite, 
                setisfavourite
            }}
        />
    )
}
export default CourseModel;
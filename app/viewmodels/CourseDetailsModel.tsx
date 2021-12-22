import React from "react";

import { Text, View } from "react-native";
import { useOrientation } from "../config/useOrientation";
import CourseDetails from "../views/CourseDetails";

interface Coursedetailsprops{
    navigation:any
}
const CourseDetailsModel = (props:Coursedetailsprops) => {
    const {navigation}=props
    const orientation = useOrientation()
    return (
        <CourseDetails
            orientation={orientation}
            navigation={navigation}


        />
    )
}

export default CourseDetailsModel

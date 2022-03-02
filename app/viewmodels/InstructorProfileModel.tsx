import React, { memo, useState } from "react";
import dummyData from "../config/constants/dummyData";
import InstrctorProfileScreen from "../views/Instructor Profile";

interface InstructorProfileModelprops {
    navigation: any
}



const InstructorProfileModel = (props: InstructorProfileModelprops) => {
    const { navigation } = props

    const [visible, setvisibe] = useState(false)
    const [socialdata, setsocialdata] = useState(dummyData.userSosialData)
    const [studentreview, setstudentreview] = useState(dummyData.studentreview)

    const [isfavourite, setisfavourite] = useState([])



    return (
        <InstrctorProfileScreen
            {...{
                data: dummyData.courses_list_2,
                navigation,
                socialdata,
                studentreview,
                socialConnection: dummyData.socialConnection,
                isfavourite,
                setisfavourite
            }}

        />
    )
}
export default memo( InstructorProfileModel);
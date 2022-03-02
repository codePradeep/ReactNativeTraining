import React, { memo, useState } from "react";
import dummyData from "../config/constants/dummyData";
import CourseScreen from "../views/Course";
import CorselChapter from "../views/Course Chapter";
import CourseDiscussion from "../views/Course Discussion";
import CourseFiles from "../views/Course Files";

interface Coursemodlprops {
    navigation: any
    route: any
}
const CourseModel = (props: Coursemodlprops) => {

    const { navigation, route } = props
    const { Title } = route.params;
    const [isfavourite, setisfavourite] = useState([])
    const [defaultitem, setdefaultitem] = useState(0)
    const [playvideo, setplayvideo] = useState(true)






    const Page = () => {

        switch (defaultitem) {
            case 0:
                return <CorselChapter
                    {...{
                        isfavourite,
                        setisfavourite,
                        Title,
                        navigation,
                        flatlistdata: dummyData.courses_list_2,

                    }}
                    DATA={dummyData.course_details}
                />
            case 1:
                return <CourseFiles navigation={navigation} />

            case 2:
                return <CourseDiscussion
                    navigation={navigation}
                    Data={dummyData.course_details.discussions}
                />

        }

    }
    return (
        <CourseScreen

            {...{
                navigation,
                Page,
                playvideo,
                setplayvideo,
                defaultitem,
                setdefaultitem
            }}
        />
    )
}
export default memo(CourseModel);
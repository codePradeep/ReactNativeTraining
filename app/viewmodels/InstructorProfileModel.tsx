import React, { useState } from "react";
import dummyData from "../config/constants/dummyData";
import InstrctorProfileScreen from "../views/Instructor Profile";

interface InstructorProfileModelprops {
    navigation: any
}
const userdtails = {
    name: "Pradeep Sharma",
    des: "Trainee Engineer",
    about: "Hi everyone this is pradeep sharma i'm a react native lerner and now I'm working on a Demo project for the practice"
}







const InstructorProfileModel = (props: InstructorProfileModelprops) => {
    const { navigation } = props

    const [visible, setvisibe] = useState(false)
    const [socialdata, setsocialdata] = useState(dummyData.userSosialData)
    const [userdata, setuserdata] = useState(userdtails)
    const [studentreview, setstudentreview] = useState(dummyData.studentreview)





    return (
        <InstrctorProfileScreen
            {...{
                data: dummyData.courses_list_2,
                navigation,
                visible,
                setvisibe,
                socialdata,
                userdata: userdata,
                studentreview,
                socialConnection: dummyData.socialConnection
            }}

        />
    )
}
export default InstructorProfileModel;
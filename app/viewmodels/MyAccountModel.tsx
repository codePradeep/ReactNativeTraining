import React, { useState } from "react";
import MyAccount from "../views/My Account";
interface MyAccountModelprops {
    navigation: any
}

const Data = {
    fullname: "Pradeep kumar sharma",
    Phone: "Phone Number",
    userid: "223311",
    IDCard: "Not updated",
    Dob: "Date of Birth",
    gender: "Male",
    joined: "Joind",
    Email: "Pradeep@Pradeep.com",
    address: "Sector 11 Noida,UP"
}


const MyAccountModel = (props: MyAccountModelprops) => {
    const { navigation } = props

    const [DATA, setDATA] = useState(Data)

    const [ifclickedEdit, setifclickedEdit] = useState(true)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const Gender = ["Male", "Female", "Others"]
    var datedata = date.toISOString().slice(0, 10).replace(/ /g, "");
    


    return (
        <MyAccount
            navigation={navigation}
            DATA={DATA}
            setDATA={setDATA}
            ifclickedEdit={ifclickedEdit}
            setifclickedEdit={setifclickedEdit}
            date={date}
            setDate={setDate}
            datedata={datedata}
            Gender={Gender}
            open={open}
            setOpen={setOpen}

        />
    )
}
export default MyAccountModel;
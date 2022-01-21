import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyAccount from "../views/My Account";
interface MyAccountModelprops {
    navigation: any
}





const MyAccountModel = (props: MyAccountModelprops) => {
    const { navigation } = props

    const dispatch = useDispatch()


    
    type DefaultRootStat={
        Data:any
    }
         const userData= useSelector<DefaultRootStat>(state => state.Data)

         const Data = userData
        
     //    console.log("updated data===>",userData)

    const [DATA, setDATA] = useState(Data)

    const [ifclickedEdit, setifclickedEdit] = useState(true)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const Gender = ["Male", "Female", "Others"]
    var datedata = date.toISOString().slice(0, 10).replace(/ /g, "");

    const dispachcall=()=>{
        dispatch({type:'USER_DATA',payload2:DATA})
    }
    


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
            dispachcall={()=>dispachcall()}

        />
    )
}
export default MyAccountModel;
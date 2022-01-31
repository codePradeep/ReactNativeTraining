import React from "react";
import { dummyData } from "../config";
import NotificationTab from "../views/Notification";




interface NotificationTabModelprops{
    navigation:any
}


const NotificationTabModel=(props:NotificationTabModelprops)=>{
    const {navigation}=props
    return(
        <NotificationTab navigation={navigation}
        DATA={dummyData.notificationByDays} />
    )
}
export default NotificationTabModel;
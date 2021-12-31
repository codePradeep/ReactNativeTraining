import React from "react";
import { icon } from "../config";

import NotificationTab from "../views/Notification Tab";
interface NotificationTabModelprops{
    navigation:any
}

const DATA = [
    {
        title: "Today",
        data: [
            {
                title: "Domino's- Buy 1 get 1 free",
                time: "few secoon ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.veg_biryani

            },
            {
                title: "Veg Biryani - 35% sale today",
                time: "5 mins ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.veg_biryani
            },
            ]
    },
    {
        title: "Yesterday",
        data: [
            {
                title: "Sandwich - buy 1 get 1 free ",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.wrap_sandwich
            },
            {
                title: "Veg Biryani - 30% sale",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.veg_biryani
            },
            {
                title: "Sandwich - buy 1 get 1 free ",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.wrap_sandwich
            },
            {
                title: "Sandwich - buy 1 get 1 free ",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.wrap_sandwich
            },
            ]
    },
];


const NotificationTabModel=(props:NotificationTabModelprops)=>{
    const {navigation}=props
    return(
        <NotificationTab navigation={navigation}
        DATA={DATA} />
    )
}
export default NotificationTabModel;
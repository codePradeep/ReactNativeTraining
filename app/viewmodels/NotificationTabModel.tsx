import React, { useEffect,useState } from "react";
import { icon } from "../config";

import NotificationTab from "../views/Notification Tab";
import messaging from '@react-native-firebase/messaging';
interface NotificationTabModelprops{
    navigation:any
}

const DATA = [
    
            {   messageId:1,
                title: "Domino's- Buy 1 get 1 free",
                time: "few secoon ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.veg_biryani,
                day:"today"

            },
            {   messageId:2,
                title: "Veg Biryani - 35% sale today",
                time: "5 mins ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.veg_biryani,
                day:"today"
            },
            {   messageId:3,
                title: "Sandwich - buy 1 get 1 free ",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.wrap_sandwich,
                day:"today"
            },
            {   messageId:5,
                title: "Veg Biryani - 30% sale",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.veg_biryani,
                day:"Yesterday"
            },
            {  messageId:6,
                title: "Sandwich - buy 1 get 1 free ",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.wrap_sandwich,
                day:"Yesterday"
            },
            {   messageId:7,
                title: "Sandwich - buy 1 get 1 free ",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icon.wrap_sandwich,
                day:"Yesterday"
            },
          
];


const NotificationTabModel=(props:NotificationTabModelprops)=>{
    const {navigation}=props
    const [data,setdata]=useState(DATA)

      const TodayData= DATA.filter((a)=>a.day=="today")
      const YesterdayData= DATA.filter((a)=>a.day=="Yesterday")
   
    return(
        <NotificationTab
         navigation={navigation}
        TodayData={TodayData}
        YesterdayData={YesterdayData}
        
        />
    )
}
export default NotificationTabModel;



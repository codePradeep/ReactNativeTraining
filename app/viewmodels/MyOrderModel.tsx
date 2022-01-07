import React, { useState } from "react";
import { Constant, icon } from "../config";
import MyOrder from "../views/My Orders";
interface MyOrderModelprops{
    navigation:any
}

const HistoryDATA = [
    {
        title: "19 Sep 2021",
        data: [
            {
                title: "Pizza Hut",
                time: "19 Sep, 14:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.veg_biryani,
                price:35.30,
                button1:Constant.Button.reorder,
                button2:Constant.Button.rate

            },
            {
                title: "KFC",
                time: "19 Sep, 12:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.veg_biryani,
                price:55.00,
                button1:Constant.Button.reorder,
                button2:Constant.Button.rate
            },
            {
                title: "Domino's Pizza",
                time: "19 Sep, 12:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.veg_biryani,
                price:55.00,
                
                button1:Constant.Button.reorder,
                button2:Constant.Button.rate
            },
            ]
    },
    {
        title: "15 Sep 2021",
        data: [
            {
                title: "Domino's Pizza",
                time: "15 Sep, 12:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.wrap_sandwich,
                price:35.30,
                button1:Constant.Button.reorder,
                button2:Constant.Button.rate
            },
            {
                title: "Domino's Pizza",
                time: "15 Sep, 12:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.veg_biryani,
                price:35.30,
                button1:Constant.Button.reorder,
                button2:Constant.Button.rate
            },
            
            ]
    },
];
const UpcomingDATA = [
    {
        title: "",
        data: [
            {
                title: "Pizza Hut",
                time: "19 Sep, 14:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.veg_biryani,
                price:35.30,
                button1:Constant.Button.Trackorder,
                button2:Constant.Button.cancel

            },
            {
                title: "KFC",
                time: "19 Sep, 12:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.veg_biryani,
                price:55.00,
                button1:Constant.Button.Trackorder,
                button2:Constant.Button.cancel
            },
            
            ]
    },
    {
        title: "Latest Order",
        data: [
            {
                title: "Domino's Pizza",
                time: "15 Sep, 12:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.wrap_sandwich,
                price:35.30,
                button1:Constant.Button.reorder,
                button2:Constant.Button.rate
            },
            {
                title: "Domino's Pizza",
                time: "15 Sep, 12:30 . 3 items",
                subtitle:"Order Delivered",
                image:icon.veg_biryani,
                price:35.30,
                button1:Constant.Button.reorder,
                button2:Constant.Button.rate
            },
            
            ]
    },
];
















const MyOrderModel =(props:MyOrderModelprops)=>{
    const {navigation}=props
    const [toggle,settogle]=useState(true)
    return(
        <MyOrder 
            navigation={navigation}
            HistoryDATA={HistoryDATA}
            UpcomingDATA={UpcomingDATA}
             toggle={toggle}
              settogle={settogle}
        />
        
    )
}
export default MyOrderModel;
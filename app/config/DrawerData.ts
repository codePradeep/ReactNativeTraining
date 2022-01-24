
import { icon, Screen } from ".";

const userdata={
    username:"Pradeep Sharma",
    email:"Pradeep@testmail.com"
}

const DrawerData = [
    {
        id: "1",
        title: "Home",
        icondata: icon.home,
        navigationdata:"HomeTab"

    
    },
    {
        id: "2",
        title: "My Wallet",
        icondata: icon.wallet,
        navigationdata:"MyCardModel"
      
    },
    {
        id: "3",
        title: "Notification",
        icondata: icon.notification,
        navigationdata:"Notification"
      
    },
    {
        id: "4",
        title: "Favourite",
        icondata: icon.favourite,
        navigationdata:"Favouritetab"
      
    },
    {
        id: "5",
        title: "Track Your Order",
        icondata: icon.loacation,
        navigationdata:"MyOrderModel"
      
    },
    {
        id: "6",
        title: "Coupons",
        icondata: icon.coupon,
        navigationdata:"MyCouponModel"
      
    },
    {
        id: "7",
        title: "Settings",
        icondata: icon.setting,
        navigationdata:"SettingModel"
      
    },
    {
        id: "8",
        title: "Invite a Friend",
        icondata: icon.profile,
        navigationdata:Screen.SuccessModel
      
    },
    {
        id: "9",
        title: "Help Center",
        icondata: icon.help,
        navigationdata:Screen.SuccessModel
      
    },
   
]


export  {DrawerData,userdata}
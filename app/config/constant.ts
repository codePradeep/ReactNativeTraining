import { Icon } from ".";
import Wallet from "../views/Wallet";

const profileList=[
    {
        image:Icon.email,
        name:"Messages"
    },
    {
        image:Icon.giftbox,
        name:"Send a gift"
    },
    {
        image:Icon.settings,
        name:"Settings"
    },
    {
        image:Icon.driver,
        name:"Driver or deliver with uber"
    },
    {
        image:Icon.info,
        name:"Legal"
    },

]

const  ScreenConstent={
    Wallet:{
        name:"Wallet",
        UberCash:"UBer Cash",
        description:"You can now send an Instant Uber Cash gift,for use on Uber or UBer Eats",
        personal:"Personal",
        Addpament:"Add Payment Method",
        rideprofile:"Ride Profile",
        Startusinguber:"Start using Uber for Business",
        turnon:"Turn on business travel feature",
        Vouchers:"Vouchers",
        addvoucher:"Add voucher code",
        permotions:"permotions"

    },
    Help:{
        Help:"Help",
        Alltopic:"All Topics"

    },
    MessagesScreen:{
        Messages:"Messages",
        coupon:"20% off on first %",
        offertext:"Offer automatically applied for limited period only"
    },
    Settings:{
        Settings:"Settings",
        Fevorites:"Fevorites",
        TrustedContacts:"Trusted Contacts",
        ManageTrustedContacts:"Manage Trusted Contacts",
        shareyourtrip:"Share your trip status with family and friends in a single tap",
        Doyouwanttosignout:"Do you want to sign out?",
        Staysigned:"Stay signed in to book your next trip faster"
    },
    Login:{
        EnterNumber :"Enter Your Mobile Number ",
        des:"If you continue, you may recive an sms for varification message and datarate may apply"
    }
}
const buttons={
    giftcard:"Gift Card",
    SendGift:"Send a Gift",
    ConfirmSignOut:"Confirm Sign Out",
    cancel:"Cancel",
    next:"Next",
    facebook:"Continue with Facebook",
    Google:"Continue with Google",
    Save:"Save"
}

export { profileList,ScreenConstent,buttons}
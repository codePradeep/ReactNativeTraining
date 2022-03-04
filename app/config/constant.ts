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

    }
}
const buttons={
    giftcard:"Gift Card",
    SendGift:"Send a Gift"
}

export { profileList,ScreenConstent,buttons}
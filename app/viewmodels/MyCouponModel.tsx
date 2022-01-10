import React, { useState } from "react";
import CouponData from "../config/Coupondata";
import MyCoupon from "../views/My Coupon";
import Onborading from "../views/Onboarding";
interface MyCouponModelprops{
    navigation:any
}
const MyCouponModel =(props:MyCouponModelprops)=>{
    const {navigation}=props
    const [toggle,settogle]=useState(true)
    const Available = CouponData.filter((item) => item.coupon == false).map(a => a)
    const Used = CouponData.filter((item) => item.coupon == true).map(a => a)
    return(
        <MyCoupon 
        navigation={navigation}
         toggle={toggle} 
         settogle={settogle} 
         Available={Available}
          Used={Used}         />
    )
}
export default MyCouponModel;
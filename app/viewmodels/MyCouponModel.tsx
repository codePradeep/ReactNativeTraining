import React from "react";
import MyCoupon from "../views/My Coupon";
import Onborading from "../views/Onboarding";
interface MyCouponModelprops{
    navigation:any
}
const MyCouponModel =(props:MyCouponModelprops)=>{
    const {navigation}=props
    return(
        <MyCoupon navigation={navigation} />
    )
}
export default MyCouponModel;
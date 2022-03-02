import React, { memo, useState } from "react";
import Membership from "../views/Membership";
interface loginmodelprops {
    navigation: any
}
const MembershipModel = (props: loginmodelprops) => {
    const { navigation } = props

    const [visible, setvisibe] = useState(false)
    const [defaultitem, setdefaultitem] = useState(0);
    return (
        <Membership
            {...{
                navigation,
                visible,
                setvisibe,
                defaultitem,
                setdefaultitem,
            }}
        />
    )
}
export default memo(MembershipModel);
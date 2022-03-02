import React, { memo } from "react";

import OnBoarding from "../views/Onboardeing";
interface Onboradingprops {
    navigation: any
}
const OnboardingModel = (props: Onboradingprops) => {
    const { navigation } = props

    return (
        <OnBoarding
            navigation={navigation}


        />
    )
}
export default memo(OnboardingModel);
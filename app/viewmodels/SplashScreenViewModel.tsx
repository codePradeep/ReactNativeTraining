import React, { memo, useEffect, useState } from "react";
import SplashScreen from "../views/SplashScreen";



interface SplashScreenprops {
  navigation: any
}
const SplashScreenViewModel = (props: SplashScreenprops) => {
  const { navigation } = props
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      navigation.replace('Home');
    }
  }, [authLoaded, navigation]);




  return (
    <SplashScreen
      {...{
          navigation
      }}


    />
  )
}
export default memo(SplashScreenViewModel);
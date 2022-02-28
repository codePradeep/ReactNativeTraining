import React,{useEffect, useState} from "react";
import SplashScreen from "../views/SplashScreen";


interface SplashScreenprops{
    navigation:any
}
const SplashScreenModel =(props:SplashScreenprops)=>{
    const {navigation}=props
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setAuthLoaded(true);
      }, 4000);
    }, []);
  
    useEffect(() => {
      if (authLoaded) {
        navigation.replace('OnboardingModel');
      }
    }, [authLoaded,navigation]);
  



    return(
        <SplashScreen
         navigation={navigation} 
        
         
         />
    )
}
export default SplashScreenModel;
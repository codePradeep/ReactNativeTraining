import { darkTheme } from "./constants/theme";
import { lightTheme } from "./constants/theme";

const selectedTheme=(trigger:any)=>{
   if (trigger==false){
       console.log("darktheme")
     return  darkTheme
       
   }else
   {
    console.log("lighttheme")
    return  lightTheme
   }
}
export default selectedTheme
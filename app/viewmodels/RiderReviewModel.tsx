import React, { useState } from "react";
import RiderReview from "../views/Rider Review";
interface RiderReviewModelprops{
    navigation:any
}
const RiderReviewModel =(props:RiderReviewModelprops)=>{
    const {navigation}=props
    const [defaultRating, setDefaultRating] = useState(0);
    
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    
    const [defaulttip, setDefaulttip] = useState("0");
    
    const [maxtips, setMaxtips] = useState(["$5","$10","$15","$20"]);

    return(
        <RiderReview 
        navigation={navigation} 
        defaultRating={defaultRating}
        setDefaultRating={setDefaultRating}
        maxRating={maxRating}
        setMaxRating={setMaxRating}
        defaulttip={defaulttip}
        setDefaulttip={setDefaulttip}
        maxtips={maxtips}
        setMaxtips={setMaxtips}
        
        />
    )
}
export default RiderReviewModel;
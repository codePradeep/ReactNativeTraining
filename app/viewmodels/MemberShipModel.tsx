import React,{useState} from "react";
import Membership from "../views/Membership";
interface loginmodelprops{
    navigation:any
}
const MembershipModel =(props:loginmodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [defaultitem, setdefaultitem] = useState(0);
    return(
        <Membership
            navigation={navigation}
            visible={visible}
            setvisibe={setvisibe}     
            defaultitem={ defaultitem}
            setdefaultitem={setdefaultitem}
         />
    )
}
export default MembershipModel;
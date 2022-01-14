import React, { useEffect, useState } from "react";
import { menu } from "../config";

import Homepage from "../views/Home/Homepage";

interface Homemodelprops {
    navigation: any


}

const Homemodel = (props: Homemodelprops) => {
    const { navigation } = props
    const [defaultitem, setdefaultitem] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    
    const [defaultRating, setDefaultRating] = useState(0);
    
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    
    const [defaulttime, setDefaulttime] = useState("0");
    
    const [maxtime, setMaxtime] = useState(["10 Mins", "20 Mins", "30 Mins"]);
    
   const menulist=menu.filter(a=>a.categories==defaultitem)

    const [distance,setdistance]=useState([])
    const [price,setprice]=useState([])
    
  const[filterdata,setfilterdata]=useState(false)

    
        let menudata=menu.filter(a=>a.categories==defaultitem)
        if (defaultRating!=0){
            menudata= menu.filter(a=>a.rating==defaultRating)
        }
        else if (defaulttime.length!=0){
            menudata= menu.filter(a=>a.time==defaulttime)
            
        } else if (distance.length!=0){
            menudata=menu.filter(a=>a.distance > distance[0] && a.distance < distance[1])

        } else if (price.length!=0){
            menudata=menu.filter(a=>a.price > price[0] && a.price < price[1])
        }
        else{
            menudata=menu.filter(a=>a.categories==defaultitem)
        }

    return (
        <Homepage
            navigation={navigation}
            defaultitem={ defaultitem}
            setdefaultitem={setdefaultitem}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            defaultRating={defaultRating}
            setDefaultRating={setDefaultRating}
            maxRating={maxRating}
            defaulttime={defaulttime}
            setDefaulttime={setDefaulttime}
            maxtime={maxtime}
            menu={menu}
            menulist={menulist}
            filteredData={menudata}
            setdistance={setdistance}
            setprice={setprice}
            filterdata={filterdata}
            setfilterdata={setfilterdata}


        />
    )
}
export default Homemodel;
import React, { useState } from "react";
import SearchScreen from "../views/Searchdestination";

interface SearchViewModelprops{
    navigation:any
}
const SearchViewModel=(props:SearchViewModelprops)=>{
    const {navigation}=props
    const [fromtext,setfromtext]=useState("")
    const [desinationtext,setdestinationtext]=useState("")
    const [Data,setData]=useState({ "latitude": 28.595521527723474, "latitudeDelta": 0.09220340012889494, "longitude": 77.33245169743896, "longitudeDelta": 0.0592241808771945})

    console.log(fromtext,Data)
    return(
        <SearchScreen
        {...{
            navigation,
            fromtext,
            setfromtext:(text:string)=>setfromtext(text),
            desinationtext,
            setdestinationtext:(text:string)=>setdestinationtext(text),
            Data,
            setData
        }}
        
        />
    )
}

export default SearchViewModel


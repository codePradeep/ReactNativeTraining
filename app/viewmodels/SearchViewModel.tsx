import React, { useState } from "react";
import SearchScreen from "../views/Searchdestination";

interface SearchViewModelprops{
    navigation:any
}
const SearchViewModel=(props:SearchViewModelprops)=>{
    const {navigation}=props
    const [fromtext,setfromtext]=useState("")
    const [desinationtext,setdestinationtext]=useState("")
    console.log(fromtext,desinationtext)
    return(
        <SearchScreen
        {...{
            navigation,
            fromtext,
            setfromtext:(text:string)=>setfromtext(text),
            desinationtext,
            setdestinationtext:(text:string)=>setdestinationtext(text)
        }}
        
        />
    )
}

export default SearchViewModel


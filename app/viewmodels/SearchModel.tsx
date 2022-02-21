import React, { useEffect, useState } from "react";
import { dummyData } from "../config";
import { changeTheme } from "../config/constants/theme";
import CategoryScreen from "../views/Category";
import SearchScreen from "../views/Search";
interface SearchModelprops {
    navigation: any
}
const SearchModel = (props: SearchModelprops) => {
    const { navigation } = props
    const [visible, setvisibe] = useState(false)
    const [defaultitem, setdefaultitem] = useState(1);
    const [searchText, SetsearchText] = useState("")
    const [isSearch, setisSearch] = useState(false)
    const [render, setrender] = useState(false)
    
    useEffect(() => {
      setrender(!render)
    }, [])
    

    let menu = dummyData.courses_list_2
    const SearchData = menu.filter((a: any) => a.title.toLowerCase().match(searchText.toLowerCase())).map((a: any) => a);
    return (
        <SearchScreen
            flatlistdata={dummyData.categories}
            navigation={navigation}
            visible={visible}
            setvisibe={setvisibe}
            defaultitem={defaultitem}
            setdefaultitem={setdefaultitem}
            isSearch={isSearch}
            SearchTexthandler={(text: string) => { SetsearchText(text), setisSearch(true); }}
            searchText={searchText}
            setisSearch={setisSearch}
            resetsearch={(text: string) => { SetsearchText("") }}
            DATA={SearchData}
            
            
        />
    )
}
export default SearchModel;
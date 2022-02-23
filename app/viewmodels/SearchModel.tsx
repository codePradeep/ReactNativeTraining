import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dummyData from "../config/constants/dummyData";
import SearchScreen from "../views/Search";
interface SearchModelprops {
    navigation: any
}
type DefaultRootStat = {
    Data: any
}

const SearchModel = (props: SearchModelprops) => {
    const { navigation } = props
    const [visible, setvisibe] = useState(false)
    const [defaultitem, setdefaultitem] = useState(1);
    const [searchText, SetsearchText] = useState("")
    const [isSearch, setisSearch] = useState(false)
    
  
    const  Userdata = useSelector<DefaultRootStat>(state => state.Data)

    useEffect(() => {
    }, [Userdata])
    let menu = dummyData.courses_list_2
    const SearchData = menu.filter((a: any) => a.title.toLowerCase().match(searchText.toLowerCase())).map((a: any) => a);
    return (
        <SearchScreen
            {...{
                navigation,
                visible,
                flatlistdata: dummyData.categories,
                setvisibe: setvisibe,
                defaultitem: defaultitem,
                setdefaultitem: setdefaultitem,
                isSearch: isSearch,
                SearchTexthandler: (text: string) => { SetsearchText(text), setisSearch(true) },
                searchText: searchText,
                setisSearch,
                resetsearch: (text: string) => SetsearchText(""),
                DATA: SearchData,
            }}


        />
    )
}
export default SearchModel;
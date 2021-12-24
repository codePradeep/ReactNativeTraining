import { ProgressBar } from "@react-native-community/progress-bar-android";
import React, { useState } from "react";

import { FlatList, Image, Modal, Text, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Coursebutton, CustomHeader, HeaderButton } from "../../common";
import { icon, MenuData } from "../../config";
import styles from "../Details/style";
import FlatListItem from "./flatlistitem";
import Styles from "./style";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import SelectDropdown from 'react-native-select-dropdown'
import DATA from '../../config/Data'



interface CourseDetailsprops {
    navigation: any

    orientation: {
        isLandscape: boolean;
        width: number;
        height: number;
        scale: number;
        fontScale: number;
    }


}



const CourseDetails = (props: CourseDetailsprops) => {

    const { orientation, navigation } = props

    const [data, setdata] = useState(DATA)

    const [modalVisible, setModalVisible] = useState(false);
    const [togglebookmark, settogglbookmark] = useState(false)
    const [toggletitle, settoggletitle] = useState(false)

    const [bookmarkdata, setbookmarkdata] = useState("")

    const [title, settitle] = useState("")

    const Bookmark = ["Bookmarked", "Not Bookmarked"]


    const titledata = (inpute: any) => {
        return data.filter((item) => item.bookmark == inpute).map(a => a.title)
    }

    const listdata = (inpute: any) => {
        return data.filter((item) => item.bookmark == inpute).map(a => a)
    }

    const Checkbookmark = (bookdata: any) => {
        if (bookdata == 'Bookmarked') {
            return false
        }
        else {
            return true
        }
    }

    const flatlistdata = listdata(Checkbookmark(bookmarkdata))

    const titlelistdata = titledata(Checkbookmark(bookmarkdata))


    const listtitledata = (inpute: any) => {
        return flatlistdata.filter((item) => item.title == inpute).map(a => a)
    }

    const finalflatlistdata = listtitledata(title)
    const [filter, setfilter] = useState(false)


    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const [subvisible, setsubVisible] = useState(false);

    const subhideMenu = () => setsubVisible(false);
    const subshowMenu = () => setsubVisible(true);


    const [submenudata, setsubmenudata] = useState([])
    //   console.log("submoduledata====>",submenudata)
    
    








    return (
        <View style={Styles(orientation).mainContainer}>


            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }} >

                <View style={{ flex: .5 }} />




                <View style={Styles(orientation).modalView}>

                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ alignSelf: "flex-end" }}>
                        <Image source={icon.close} style={Styles(orientation).modalimage1} />
                    </TouchableOpacity>

                    <View style={{ flex: 0.9 }}>
                        <View style={{ flex: .5 }}>
                            <Text style={{ fontSize: 18, color: "black" }}>Select Bookmark</Text>
                            <SelectDropdown
                                data={Bookmark}
                                defaultButtonText={bookmarkdata}
                                buttonStyle={{ width: "100%" }}
                                onSelect={(selectedItem, index) => {
                                    setbookmarkdata(selectedItem)
                                    //  settogglbookmark(true)
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <Text style={{ fontSize: 18, color: "black" }}>Select Title</Text>
                            <SelectDropdown
                                data={titlelistdata}
                                defaultButtonText={title}
                                dropdownStyle={{ height: 300 }}
                                buttonStyle={{ width: "100%" }}
                                onSelect={(selectedItem, index) => {
                                    settitle(selectedItem)
                                    // settoggletitle(true)
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => { setfilter(true), setModalVisible(false), settogglbookmark(true), settoggletitle(true) }}
                            style={{ borderWidth: 1, marginTop: 20 }}>
                            <Text style={{ padding: 10, alignSelf: "center" }}>Filter</Text>
                        </TouchableOpacity>


                    </View>





                </View>

            </Modal>

            <View style={Styles(orientation).FirstContainer}>
                
               
                <Image source={require("../../assets/course_main.png")} style={Styles(orientation).Image} />


                <View style={{ flex: 1, justifyContent: "space-between", marginHorizontal: 20 }}>
                    <View style={{ flex: 1, marginVertical: 20 }}>
                        <CustomHeader navigation={navigation} />
                    </View>
                    <View style={{flex:1}}>
                    <View style={{ flex: 1 }}>

                        <Text style={Styles(orientation).headingText}>Health Coach Training Program</Text>
                        <Text style={Styles(orientation).ProgressText}>55% modules Complete</Text>

                    </View>
                    
                    </View>


                </View>
                
              
            </View>
            <ProgressBar
                   // style={Styles(orientation).Progressbar}
                    color="green"
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.5}
                />



            <View style={{ flex: 0.7, marginHorizontal: 30, marginTop: 20 }}>


                <View style={Styles(orientation).menucontainer}>
                    <Text style={{ color: "black", borderBottomWidth: 2, fontSize: 20, borderColor: "orange", padding: 9, fontFamily: "PublicSans-Regular" }}>Modules</Text>


                    <View style={{}}>
                        <Menu
                            visible={visible}
                            anchor={<TouchableOpacity
                                onPress={showMenu}
                            >
                                <Image source={icon.dots} style={{ height: 25, width: 25, resizeMode: "contain", alignSelf: "center" }} />
                            </TouchableOpacity>}
                            onRequestClose={hideMenu}
                        >
                            {MenuData.map((item: any, i: any) => {
                                return (
                                    <View key={i} style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                        <MenuItem onPress={() => { subshowMenu(), hideMenu(), setsubmenudata(item.submodule) }}>{item.title}</MenuItem>
                                      { item.submodule.length == 0? null : <Image source={icon.right_arrow} style={{ height: 20, width: 20, resizeMode: "contain", alignSelf: "center" }} />}
                                    </View>
                                );
                            })}
                        </Menu>
                        <Menu
                            visible={subvisible}
                            anchor={<View></View>}
                            onRequestClose={subhideMenu}
                        >
                            {submenudata.map((item: any, i: any) => {
                                return (
                                    <View key={i} style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                        <MenuItem onPress={subhideMenu}>{item.title}</MenuItem>
                                    </View>);
                            })}

                        </Menu>

                    </View>







                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <View>
                        <Text style={{ color: "gray", fontFamily: "PublicSans-Regular" }}>LAST VIEWED MODULE</Text>
                        <Text style={{ fontSize: 25, color: "black", fontWeight: "600", fontFamily: "PublicSans-Regular" }}>Dextox Your Life</Text>
                    </View>
                    <TouchableOpacity
                        // onPress={() => console.log(titledata)}
                        style={{ backgroundColor: "black", height: 35 }}>
                        <Text style={{ color: "white", padding: 8, fontFamily: "PublicSans-Regular", paddingHorizontal: 20 }}>Resume</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 17, color: "gray", paddingVertical: 20, fontFamily: "PublicSans-Regular" }}>This first module is all about setting you up</Text>

                <View style={Styles(orientation).ItemSeprator} />

                <View style={Styles(orientation).filterContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "black", fontSize: 20, fontFamily: "PublicSans-Regular", marginRight: 10 }}>Filters:</Text>

                        <View style={{ backgroundColor: "lightgray", flexDirection: "row", justifyContent: "space-evenly" }}>

                            {togglebookmark ? <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ padding: 4 }}>{bookmarkdata}</Text>
                                <TouchableOpacity
                                    onPress={() => { settogglbookmark(false), setfilter(false), setdata(DATA), setbookmarkdata("Select") }}>
                                    <Image source={icon.close} style={{ height: 15, width: 15, resizeMode: "contain", alignSelf: "center" }} />
                                </TouchableOpacity>
                            </View> : null}
                            <View />

                            {toggletitle ? <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ padding: 4 }}>Title</Text>
                                <TouchableOpacity
                                    onPress={() => { settoggletitle(false), setfilter(false), setdata(flatlistdata), settitle("Select") }}>
                                    <Image source={icon.close} style={{ height: 15, width: 15, resizeMode: "contain", alignSelf: "center" }} />
                                </TouchableOpacity>
                            </View> : null}
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => { setModalVisible(true) }}
                        style={{ backgroundColor: "white", height: 35, borderColor: "orange", borderWidth: 1 }}>
                        <Text style={{ color: "orange", padding: 9, fontFamily: "PublicSans-Regular" }}>Filter</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    nestedScrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={filter ? finalflatlistdata : data}
                    initialScrollIndex={0}

                    renderItem={({ item, index }) => <FlatListItem item={item} orientation={orientation} index={0} setdata={setdata} />}
                    keyExtractor={(_, index) => index.toString()}
                />

            </View>
        </View>
    )
}

export default CourseDetails




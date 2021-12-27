
import React, { useEffect, useState } from "react";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import {CustomHeader } from "../../common";
import { icon, MenuData } from "../../config";
import FlatListItem from "./flatlistitem";
import Styles from "./style";
import { Menu, MenuItem } from 'react-native-material-menu';
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


    const Checkbookmark = (bookdata: any) => {
        if (bookdata == 'Bookmarked') {
            return true
        }
        else {
            return false
        }
    }
    
    const titledata = (inpute: any) => {
        return data.filter((item) => item.bookmark == inpute).map(a => a.title)
    }

    const listdata = (inpute: any) => {
        return data.filter((item) => item.bookmark == inpute).map(a => a)
    }

    const flatlistdata = listdata(Checkbookmark(bookmarkdata))

    const titlelistdata = titledata(Checkbookmark(bookmarkdata))

    const listtitledata = (inpute: any) => {
        return flatlistdata.filter((item) => item.title == inpute).map(a => a)
    }

    const finalflatlistdata = listtitledata(title)
    const [filter, setfilter] = useState(false)

    console.log("finalflatlistdata====>",finalflatlistdata)

    //MATERIAL MENU ITEMS
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

                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} 
                        style={Styles(orientation).Crossmodalbutton}>
                        <Image source={icon.close} style={Styles(orientation).modalimage1} />
                    </TouchableOpacity>

                    <View style={{ flex: 0.9 }}>
                        <View style={{ flex: .5 }}>
                            <Text style={Styles(orientation).ModalTextTitle}>Select Bookmark</Text>
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
                            <Text style={Styles(orientation).ModalTextTitle}>Select Title</Text>
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
                            style={Styles(orientation).ModalFilterButton}>
                            <Text style={Styles(orientation).Modalfiltertext}>Filter</Text>
                        </TouchableOpacity>


                    </View>

                </View>

            </Modal>

            <View style={Styles(orientation).FirstContainer}>
                
               
                <Image source={require("../../assets/course_main.png")} style={Styles(orientation).Image} />


                <View style={Styles(orientation).headercontainer}>
                    <View style={Styles(orientation).customheadercontainer}>
                        <CustomHeader navigation={navigation} />
                    </View>
                    
                    <View style={{ flex: 1 }}>

                        <Text style={Styles(orientation).headingText}>Health Coach Training Program</Text>
                        <Text style={Styles(orientation).ProgressText}>55% modules Complete</Text>

                    </View>
                    
                    


                </View>
               
                
              
            </View>
            <ProgressBar
                    style={Styles(orientation).Progressbar}
                    color="green"
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.5}
                />
          



            <View style={Styles(orientation).SecondContainer}>


                <View style={Styles(orientation).menucontainer}>
                    <Text style={Styles(orientation).Moduletext}>Modules</Text>


                    <View style={{}}>
                        <Menu
                            visible={visible}
                            anchor={<TouchableOpacity
                                onPress={showMenu}
                            >
                                <Image source={icon.dots} style={Styles(orientation).icon} />
                            </TouchableOpacity>}
                            onRequestClose={hideMenu}
                        >
                            {MenuData.map((item: any, i: any) => {
                                return (
                                    <View key={i} style={Styles(orientation).MenuContainer}>
                                        <MenuItem onPress={() => { subshowMenu(), hideMenu(), setsubmenudata(item.submodule) }}>{item.title}</MenuItem>
                                      { item.submodule.length == 0? null : <Image source={icon.right_arrow} style={Styles(orientation).icon} />}
                                    </View>
                                );
                            })}
                        </Menu>
                       
                        <View style={{position:"absolute"}}>
                        <Menu
                            visible={subvisible}
                            anchor={<View></View>}
                            onRequestClose={subhideMenu}
                        >
                            {submenudata.map((item: any, i: any) => {
                                return (
                                    <View key={i} style={Styles(orientation).SubmenuContainer}>
                                        <MenuItem onPress={subhideMenu}>{item.title}</MenuItem>
                                    </View>);
                            })}

                        </Menu>
                        </View>

                    </View>





                </View>
                <View style={Styles(orientation).Viewedmodulecontainer}>
                    <View>
                        <Text style={Styles(orientation).ViewedmoduleText}>LAST VIEWED MODULE</Text>
                        <Text style={Styles(orientation).lifeText}>Dextox Your Life</Text>
                    </View>
                    <TouchableOpacity
                        // onPress={() => console.log(titledata)}
                        style={Styles(orientation).resumebutton}>
                        <Text style={Styles(orientation).ResumeText}>Resume</Text>
                    </TouchableOpacity>
                </View>

                <Text style={Styles(orientation).Text}>This first module is all about setting you up</Text>

                <View style={Styles(orientation).ItemSeprator} />

                <View style={Styles(orientation).filterContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={Styles(orientation).Filtertext}>Filters:</Text>

                        <View style={Styles(orientation).bookmarktagconatiner}>

                            {togglebookmark ? <View style={Styles(orientation).bookmarkContainer}>
                                <Text style={{ padding: 4 }}>{bookmarkdata}</Text>
                                <TouchableOpacity
                                    onPress={() => { settogglbookmark(false), setfilter(false), setdata(DATA), setbookmarkdata("Select") }}>
                                    <Image source={icon.close} style={Styles(orientation).smallIcon} />
                                </TouchableOpacity>
                            </View> : null}
                            <View />

                            {toggletitle ? <View style={Styles(orientation).bookmarkContainer}>
                                <Text style={{ padding: 4 }}>Title</Text>
                                <TouchableOpacity
                                    onPress={() => { settoggletitle(false), setfilter(false), setdata(flatlistdata), settitle("Select") }}>
                                    <Image source={icon.close} style={Styles(orientation).smallIcon} />
                                </TouchableOpacity>
                            </View> : null}
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => { setModalVisible(true) }}
                        style={Styles(orientation).filterButton}>
                        <Text style={Styles(orientation).filterbuttonText}>Filter</Text>
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




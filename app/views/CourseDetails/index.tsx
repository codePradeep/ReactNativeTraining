import { ProgressBar } from "@react-native-community/progress-bar-android";
import React, { useState } from "react";

import { FlatList, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Coursebutton, CustomHeader, HeaderButton } from "../../common";
import { icon } from "../../config";
import styles from "../Details/style";
import FlatListItem from "./flatlistitem";
import Styles from "./style";

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


    const DATA = [
        {
            id: "1",
            title: "Opening Soon",
            bookmark: false,
            submodule: [
                {
                    id: "1",
                    title: "SubModule 1",
                },
                {
                    id: "2",
                    title: "SubModule 2",
                },
                {
                    id: "3",
                    title: "SubModule 3",
                },
                {
                    id: "4",
                    title: "SubModule 4",
                }
            ]

        },
        {
            id: "2",
            title: "Opening Soon",
            bookmark: false,
            submodule: [
                {
                    id: "1",
                    title: "Secend SubModule 1",
                },
                {
                    id: "2",
                    title: "SubModule 2",
                },
                {
                    id: "3",
                    title: "SubModule 3",
                },
                {
                    id: "4",
                    title: "SubModule 4",
                }
            ]

        },
        {
            id: "3",
            title: "Opening Soon",
            bookmark: false,
            submodule: [
                {
                    id: "1",
                    title: "SubModule 1",
                },
                {
                    id: "2",
                    title: "SubModule 2",
                },
                {
                    id: "3",
                    title: "SubModule 3",
                },
                {
                    id: "4",
                    title: "SubModule 4",
                }
            ]

        },
        {
            id: "4",
            title: "Opening Soon",
            bookmark: false,
            submodule: [
                {
                    id: "1",
                    title: "SubModule 1",
                },
                {
                    id: "2",
                    title: "SubModule 2",
                },
                {
                    id: "3",
                    title: "SubModule 3",
                },
                {
                    id: "4",
                    title: "SubModule 4",
                }
            ]

        },
    ]

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={Styles(orientation).mainContainer}>
             
             
             <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }} >
          <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
               <View style={{}} />
               
            </TouchableWithoutFeedback>
         

            <View style={Styles(orientation).modalView}>
            
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/exit.png')} style={Styles(orientation).modalimage1}  />
              <Text style={Styles(orientation).modaltext}>Cancel</Text>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={undefined}>

              <Image source={require('../../assets/camera-icon.png')} style={Styles(orientation).modalCameraimage1} />
              <Text style={Styles(orientation).modaltext}>Camera</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={undefined} >
              <Image source={require('../../assets/artgallery.png')} style={Styles(orientation).modalCameraimage1}  />
              <Text style={Styles(orientation).modaltext}>Gallery</Text>
              </TouchableOpacity>
             
             
            </View>    
           
      </Modal>

            <View style={Styles(orientation).FirstContainer}>
                <Image source={require("../../assets/course_main.png")} style={Styles(orientation).Image} />


                <View style={{ flex: 1, justifyContent: "space-between", marginHorizontal: 20 }}>
                    <View style={{ flex: 1, marginVertical: 20 }}>
                        <CustomHeader navigation={navigation} />
                    </View>

                    <View style={{ flex: 1 }}>

                        <Text style={Styles(orientation).headingText}>Health Coach Training Program</Text>
                        <Text style={Styles(orientation).ProgressText}>55% modules Complete</Text>

                    </View>


                </View>
                <ProgressBar
                    style={Styles(orientation).Progressbar}
                    color="green"
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.5}
                />
            </View>



            <View style={{ flex: 0.7, marginHorizontal: 30, marginTop: 20 }}>


                <View style={Styles(orientation).menucontainer}>
                    <Text style={{ color: "black", borderBottomWidth: 2, fontSize: 20, borderColor: "orange", padding: 9, fontFamily: "PublicSans-Regular" }}>Modules</Text>
                    <TouchableOpacity
                    // onPress={}
                    >
                        <Image source={icon.dots} style={{ height: 25, width: 25, resizeMode: "contain", alignSelf: "center" }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <View>
                        <Text style={{ color: "gray", fontFamily: "PublicSans-Regular" }}>LAST VIEWED MODULE</Text>
                        <Text style={{ fontSize: 25, color: "black", fontWeight: "600", fontFamily: "PublicSans-Regular" }}>Dextox Your Life</Text>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: "black", height: 35 }}>
                        <Text style={{ color: "white", padding: 8, fontFamily: "PublicSans-Regular", paddingHorizontal: 20 }}>Resume</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 17, color: "gray", paddingVertical: 20, fontFamily: "PublicSans-Regular" }}>This first module is all about setting you up</Text>

                <View style={Styles(orientation).ItemSeprator} />

                <View style={Styles(orientation).filterContainer}>
                    <Text style={{ color: "black", fontSize: 20, fontFamily: "PublicSans-Regular" }}>Filters:</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: "white", height: 35, borderColor: "orange", borderWidth: 1 }}>
                        <Text style={{ color: "orange", padding: 9, fontFamily: "PublicSans-Regular" }}>Filter</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    nestedScrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    initialScrollIndex={0}

                    renderItem={({ item, index }) => <FlatListItem item={item} orientation={orientation} index={0} />}
                    keyExtractor={(_, index) => index.toString()}
                />

            </View>
        </View>
    )
}

export default CourseDetails




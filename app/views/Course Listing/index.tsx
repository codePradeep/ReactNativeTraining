import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView, Modal, Animated } from "react-native";
import { Slider } from "../../common";
import { buttons, COLORS, icons, images, Screensdata, selectedTheme } from "../../config";
import { Item, Renderitem } from "./Renderitem";
import styles from "./style";



interface Corselistingprops {
    navigation: any
    DATA: {
        id: number;
        title: string;
        duration: number;
        instructor: string;
        ratings: number;
        price: number;
        is_favourite: boolean;
        thumbnail: any;
    }[]
    modalVisible: any
    setModalVisible: any
    Classtypedata: {
        id: number;
        label: string;
        icon: any;
    }[]
    ClassLevel: {
        id: number;
        label: string;
    }[]
    defaultitem: number
    setdefaultitem: React.Dispatch<React.SetStateAction<number>>
    defaultclasslevel: number
    setdefaultclasslevel: React.Dispatch<React.SetStateAction<number>>
    CreatedWithin: {
        id: number;
        label: string;
    }[]
    defaultcreatedwithin: number
    setdefaultcreatedwithin: React.Dispatch<React.SetStateAction<number>>
    setclassleveldata: React.Dispatch<React.SetStateAction<string>>
    setduration: any
    Resetfilter: any
    resultdata: any
    Header: string
    Icon: any
}

const Corselisting = (props: Corselistingprops) => {
    const { DATA,
        navigation,
        modalVisible,
        setModalVisible,
        Classtypedata,
        defaultitem,
        setdefaultitem,
        ClassLevel,
        defaultclasslevel,
        setdefaultclasslevel,
        CreatedWithin,
        defaultcreatedwithin,
        setdefaultcreatedwithin,
        setclassleveldata,
        setduration,
        Resetfilter,
        resultdata,
        Header,
        Icon
    } = props

    const scrollY = new Animated.Value(0)
    const diffclamp = Animated.diffClamp(scrollY, 0, 50)
    const translateY = diffclamp.interpolate({
        inputRange: [0, 50],
        outputRange: [0, -62]
    })


    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <Animated.View

                style={{

                    // position:"absolute",
                    // elevation:1,
                    // zIndex:100,
                    // top:0,left:0,right:0,
                    transform: [
                        { translateY: translateY },

                    ]
                }}
            >
                <View style={styles(selectedTheme).headercontainer}>
                    <Animated.Image source={images.images.bg_1} style={styles(selectedTheme).bgimage} />
                    <TouchableOpacity
                        style={styles(selectedTheme).leftbutton}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={icons.Icon.back} style={styles(selectedTheme).headerlefticon} />
                    </TouchableOpacity>
                    <View style={styles(selectedTheme).headersub}>
                        <Text style={styles(selectedTheme).HeaderText}>{Header}</Text>
                        <Image source={Icon} style={styles(selectedTheme).mobileimage} />
                    </View>
                </View>
            </Animated.View>
            <Animated.View style={[styles(selectedTheme).conatiner, {




            }]}>
                <View style={styles(selectedTheme).secContainer}>
                    <Text style={styles(selectedTheme).filterbuttontext}>{resultdata} Results</Text>
                    <TouchableOpacity style={styles(selectedTheme).filterbutton}
                        onPress={() => { setModalVisible(true) }}
                    >
                        <Image source={icons.Icon.filter} style={styles(selectedTheme).filtericons} />
                    </TouchableOpacity>
                </View>



                <FlatList
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}
                    onScroll={(e) => {
                        scrollY.setValue(e.nativeEvent.contentOffset.y)
                    }}

                />
            </Animated.View>

            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }} >

                <View style={styles(selectedTheme).view} />


                <View style={styles(selectedTheme).modalView}>


                    <View style={styles(selectedTheme).modalTextcontainer}>
                        <Text style={styles(selectedTheme).modalText}>{Screensdata.Filter.Filter}</Text>
                        <TouchableOpacity onPress={() => { setModalVisible(false), Resetfilter() }} style={styles(selectedTheme).crossimageconatainer}>
                            <Text style={styles(selectedTheme).ModalSubText}>{buttons.Cancel}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles(selectedTheme).distancecontainer}>
                        <Text style={styles(selectedTheme).ModalSubText}>{Screensdata.Filter.Classtype}</Text>
                        <FlatList
                            data={Classtypedata}
                            extraData={Classtypedata}
                            renderItem={({ item, index }) => <Renderitem item={item} index={index} defaultitem={defaultitem} setdefaultitem={setdefaultitem} />}
                            numColumns={3}
                            keyExtractor={(_, index) => index.toString()}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false} >
                        <View style={styles(selectedTheme).distancecontainer}>
                            <Text style={styles(selectedTheme).ModalSubText}>{Screensdata.Filter.ClassLevel}</Text>
                            {ClassLevel.map((item, index) => {
                                return (
                                    <View key={index} style={styles(selectedTheme).classlevelcontainer}>
                                        <TouchableOpacity style={styles(selectedTheme).classlevelbtn}
                                            onPress={() => { setdefaultclasslevel(item.id), setclassleveldata(item.label) }}
                                        >
                                            <Text style={styles(selectedTheme).time}>{item.label}</Text>
                                            <Image source={defaultclasslevel == item.id ? icons.Icon.checkbox_on : icons.Icon.checkbox_off} style={styles(selectedTheme).smallicon} />
                                        </TouchableOpacity>
                                        {index != 2 ? <View style={styles(selectedTheme).levelsaperater} /> : null}
                                    </View>
                                )
                            })}

                        </View>
                        <View style={styles(selectedTheme).distancecontainer}>
                            <Text style={styles(selectedTheme).ModalSubText}>{Screensdata.Filter.CreatedWithin}</Text>
                            <View style={styles(selectedTheme).cretedwithincontainer}>
                                {CreatedWithin.map((item, index) => {
                                    return (
                                        <View key={index} style={[styles(selectedTheme).Createdcontainer, { backgroundColor: defaultcreatedwithin == item.id ? selectedTheme.backgroundblueNblack : selectedTheme.backgroundwhite3Ngray8 }]}>
                                            <TouchableOpacity style={styles(selectedTheme).classlevelbtn}
                                                onPress={() => setdefaultcreatedwithin(item.id)}
                                            >
                                                <Text style={[{ color: defaultcreatedwithin == item.id ? COLORS.white : selectedTheme.textblackNwhite }]}>{item.label}</Text>

                                            </TouchableOpacity>

                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={styles(selectedTheme).distancecontainer}>
                            <Text style={styles(selectedTheme).ModalSubText}>{Screensdata.Filter.classtime}</Text>
                            <Slider
                                values={[20, 50]}
                                min={10}
                                max={60}
                                postfix="Min"
                                onValueChange={(values: any) => setduration(values)}
                                prifix={""}
                                
                            />
                        </View>

                    </ScrollView>


                    <View style={styles(selectedTheme).filterbuttoncontainer}>
                        <TouchableOpacity
                            style={styles(selectedTheme).restbutton}
                            onPress={() => {
                                setModalVisible(false),
                                    Resetfilter()
                                //   setfilterdata(true) 
                            }}
                        >
                            <Text
                                style={styles(selectedTheme).resetetxt}
                            >{buttons.reset}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles(selectedTheme).button}
                            onPress={() => {
                                setModalVisible(false)
                                //   setfilterdata(true) 
                            }}
                        >
                            <Text
                                style={styles(selectedTheme).buttontext}
                            >{buttons.apply}</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </Modal>
        </View>
    );
}
export default Corselisting;
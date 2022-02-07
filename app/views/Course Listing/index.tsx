import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image, TouchableOpacity, FlatList, ScrollView, Modal } from "react-native";
import { Slider } from "../../common";
import { buttons, COLORS, icons, images, Screensdata, selectedTheme } from "../../config";
import { Item, Renderitem } from "./Renderitem";
import styles from "./style";



interface Corselistingprops {
    navigation: any
    DATA: {
        id: number;
        title: string;
        duration: string;
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
    defaultcreatedwithin:number
     setdefaultcreatedwithin:React.Dispatch<React.SetStateAction<number>>
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
        CreatedWithin ,
        defaultcreatedwithin, 
        setdefaultcreatedwithin} = props
    return (
        <View style={styles.mainconatiner}>
            <View style={styles.headercontainer}>
                <Image source={images.images.bg_1} style={styles.bgimage} />
                <TouchableOpacity
                    style={styles.leftbutton}
                >
                    <Image source={icons.Icon.back} style={styles.headerlefticon} />
                </TouchableOpacity>
                <View style={styles.headersub}>
                    <Text style={styles.HeaderText}>Mobile Design</Text>
                    <Image source={icons.Icon.mobile} style={styles.mobileimage} />
                </View>
            </View>
            <View style={styles.conatiner}>
                <View style={styles.secContainer}>
                    <Text style={styles.filterbuttontext}>5.761 Results</Text>
                    <TouchableOpacity style={styles.filterbutton}
                        onPress={() => { setModalVisible(true) }}
                    >
                        <Image source={icons.Icon.filter} style={styles.filtericons} />
                    </TouchableOpacity>
                </View>



                <FlatList
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}

                />
            </View>

            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }} >

                <View style={styles.view} />


                <View style={styles.modalView}>

                
                        <View style={styles.modalTextcontainer}>
                            <Text style={styles.modalText}>{Screensdata.Filter.Filter}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.crossimageconatainer}>
                                <Text style={styles.ModalSubText}>{buttons.Cancel}</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.distancecontainer}>
                            <Text style={styles.ModalSubText}>{Screensdata.Filter.Classtype}</Text>
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
                        <View style={styles.distancecontainer}>
                            <Text style={styles.ModalSubText}>{Screensdata.Filter.ClassLevel}</Text>
                            {ClassLevel.map((item, index) => {
                                return (
                                    <View key={index} style={styles.classlevelcontainer}>
                                        <TouchableOpacity style={styles.classlevelbtn}
                                            onPress={() => setdefaultclasslevel(item.id)}
                                        >
                                            <Text>{item.label}</Text>
                                            <Image source={defaultclasslevel == item.id ? icons.Icon.checkbox_on : icons.Icon.checkbox_off} style={styles.smallicon} />
                                        </TouchableOpacity>
                                        {index != 2 ? <View style={styles.levelsaperater} /> : null}
                                    </View>
                                )
                            })}

                        </View>
                        <View style={styles.distancecontainer}>
                            <Text style={styles.ModalSubText}>{Screensdata.Filter.CreatedWithin}</Text>
                            <View style={styles.cretedwithincontainer}>
                                {CreatedWithin.map((item, index) => {
                                return (
                                    <View key={index} style={[styles.Createdcontainer,{backgroundColor:defaultcreatedwithin == item.id ? selectedTheme.backgroundblueNblack:selectedTheme.backgroundwhite3Ngray8}]}>
                                        <TouchableOpacity style={styles.classlevelbtn}
                                            onPress={() => setdefaultcreatedwithin(item.id)}
                                        >
                                            <Text style={[{color:defaultcreatedwithin == item.id ?COLORS.white:selectedTheme.textblackNwhite}]}>{item.label}</Text>
                                        
                                        </TouchableOpacity>
                            
                                    </View>
                                )
                            })}
                            </View>
                        </View>
                        <View style={styles.distancecontainer}>
                            <Text style={styles.ModalSubText}>{Screensdata.Filter.classtime}</Text>
                            <Slider
                                values={[20, 50]}
                                min={10}
                                max={60}
                                postfix="Min"
                                onValueChange={(values: any) => console.log(values)
                                    //   setdistance(values)
                                } prifix={""}
                            />
                        </View>

                    </ScrollView>


<View style={styles.filterbuttoncontainer}>
<TouchableOpacity
                         style={styles.restbutton}
                        onPress={() => {
                            setModalVisible(false)
                            //   setfilterdata(true) 
                        }}
                    >
                        <Text
                         style={styles.resetetxt}
                        >{buttons.reset}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.button}
                        onPress={() => {
                            setModalVisible(false)
                            //   setfilterdata(true) 
                        }}
                    >
                        <Text
                         style={styles.buttontext}
                        >{buttons.apply}</Text>
                    </TouchableOpacity>
</View>
                    

                </View>

            </Modal>
        </View>
    );
}
export default Corselisting;
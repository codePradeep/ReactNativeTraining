import React from "react";
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-animatable";
import { SwipeListView } from "react-native-swipe-list-view";
import { Abutton, Header } from "../../common";
import { Constant, icon } from "../../config";
import { RenderHiddenItem, RenderItem } from "./RenderItem";
import styles from "./style";

interface MyCartprops {
    navigation: any
    listData: any
    setListData: any
    modalVisible: any
    setModalVisible: any
    cartcount: any
    setcartcount: any
    deleteRow: any
}

const MyCart = (props: MyCartprops) => {
    const {
        navigation,
        listData,
        setListData,
        modalVisible,
        setModalVisible,
        cartcount,
        setcartcount,
        deleteRow } = props

    return (
        <View style={styles.maincontainer} >
            <View style={styles.container}>
                <View style={styles.headercontainer}>
                    <Header headertitle={Constant.screens.cart} navigation={navigation}
                        HeaderRightComponent={
                            <View style={styles.HeaderRight} >
                                <Image source={icon.cart} style={styles.headerRightimage} />
                                <Text style={styles.headerRightimagecountertext}>{cartcount}</Text>
                            </View>}
                    />
                </View>

                <SwipeListView
                    style={{ flex: 1 }}
                    data={listData}
                    renderItem={(data) => <RenderItem data={data} />}
                    renderHiddenItem={(data, rowMap) => <RenderHiddenItem data={data} rowMap={rowMap} deleteRow={deleteRow} />}
                    rightOpenValue={-75}
                    previewRowKey={'0'}
                    previewOpenValue={-20}
                    previewOpenDelay={7000}
                    //  onRowDidOpen={() => console.log("did open")}
                    ItemSeparatorComponent={() => (<View><Text /></View>)}
                />

                <Abutton title={Constant.Button.Continue} OnPress={() => setModalVisible(true)} />

            </View>

            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }} >
                <TouchableWithoutFeedback
                    onPress={() => { setModalVisible(false) }}
                >
                    <View style={styles.view} />
                </TouchableWithoutFeedback>


                <View style={styles.modalView}>
                    <View style={styles.modalTextcontainer}>
                        <Text style={styles.ModalSubText}>{Constant.checkoutScreen.subtotoal}</Text>
                        <Text style={styles.ModalSubText}>$37.97</Text>
                    </View>
                    <View style={styles.modalTextcontainer}>
                        <Text style={styles.ModalSubText}>{Constant.checkoutScreen.Shipping}</Text>
                        <Text style={styles.ModalSubText}>$0.00</Text>
                    </View>
                    <View style={styles.ModalTextSeperator} />
                    <View style={styles.modalTextcontainer}>
                        <Text style={styles.modalText}>{Constant.checkoutScreen.Total}</Text>
                        <Text style={styles.modalText}>$37.97</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { setModalVisible(false) }}
                    >
                        <Text style={styles.buttontext}> {Constant.Button.PlaceyourOrder}</Text>
                    </TouchableOpacity>

                </View>

            </Modal>

        </View>
    )
}

export default MyCart
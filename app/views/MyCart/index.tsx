import React from "react";
import { Modal, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-animatable";
import { SwipeListView } from "react-native-swipe-list-view";
import { Header } from "../../common";
import { COLORS, Constant, FONTS, icon } from "../../config";
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
        listData, setListData,
        modalVisible, setModalVisible,
        cartcount, setcartcount, deleteRow } = props




    const renderItem = (data: any) => {
        return (
            <TouchableHighlight
                onPress={() => console.log('render item clicked')}
                style={styles.rowFront}
                underlayColor={COLORS.lightOrange}
            >
                <View
                    style={styles.renderitemContainer}
                >
                    <Image source={data.item.image} style={styles.itemimage} />
                    <View>
                        <Text style={FONTS.h3}>{data.item.name}</Text>
                        <Text style={[FONTS.h4, { color: COLORS.primary }]}>${data.item.price}</Text>
                    </View>
                    <View style={styles.subrenderitemcontainer}>
                        <TouchableOpacity
                        >
                            <Text style={[FONTS.body1, { color: COLORS.primary }]}>-</Text>
                        </TouchableOpacity>
                        <Text style={[FONTS.body2, { color: COLORS.black, paddingHorizontal: 10 }]}>{data.item.id}</Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={[FONTS.body1, { color: COLORS.primary }]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    const renderHiddenItem = (data: any, rowMap: any) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Image source={icon.trash} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );


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
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-75}
                    previewRowKey={'0'}
                    previewOpenValue={-20}
                    previewOpenDelay={7000}
                    onRowDidOpen={() => console.log("did open")}
                    ItemSeparatorComponent={() => (<View><Text /></View>)}
                />
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
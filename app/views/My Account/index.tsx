import React, { useRef, useState } from "react";

import { Button, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { Abutton, Header, Input } from "../../common";
import { Constant, FONTS, icon } from "../../config";
import ItemData from "./itemComponent";
import styles from "./style";
import SelectDropdown from "react-native-select-dropdown";



interface MyAccountprops {
    navigation: any
    DATA:any
    setDATA: any
    ifclickedEdit: any
    setifclickedEdit: any
    date: any
    setDate: any
    datedata: any
    Gender: any
    open: any
    setOpen: any
    dispachcall:any
}


const MyAccount = (props: MyAccountprops) => {
    const { navigation, DATA, setDATA,
        ifclickedEdit,
        setifclickedEdit,
        date,
        setDate,
        datedata,
        Gender,
        open,
        setOpen ,
        dispachcall} = props




    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>
                <Header headertitle={Constant.screens.myaccount} navigation={navigation}
                    HeaderRightComponent={<View style={styles.HeaderRight}>
                        {ifclickedEdit ? <TouchableOpacity
                            onPress={() => setifclickedEdit(false)}

                        >
                            <Text style={styles.HeaderRightText}>{Constant.Myaccount.edit}</Text>
                        </TouchableOpacity> : null}
                    </View>} />
            </View>
            <ScrollView style={{ flex: 1 }}>
                {ifclickedEdit ?
                    <View style={{ flex: 1 }}>
                        <View style={styles.listcontainer}>
                            <ItemData title={Constant.Myaccount.fullname} data={DATA.fullname} separator={true} />
                            <ItemData title={Constant.Myaccount.Phone} data={DATA.Phone} separator={true} />
                            <ItemData title={Constant.Myaccount.userid} data={DATA.userid} separator={false} />
                        </View>
                        <View style={styles.secondlistcontainer}>
                            <ItemData title={Constant.Myaccount.IDCard} data={DATA.IDCard} separator={true} />
                            <ItemData title={Constant.Myaccount.Dob} data={DATA.Dob} separator={true} />
                            <ItemData title={Constant.Myaccount.gender} data={DATA.gender} separator={true} />
                            <ItemData title={Constant.Myaccount.joined} data={DATA.joined} separator={true} />
                            <ItemData title={Constant.Myaccount.Email} data={DATA.Email} separator={true} />
                            <ItemData title={Constant.Myaccount.address} data={DATA.address} separator={false} />
                        </View>
                    </View>
                    :
                    <View>
                        <View style={styles.listcontainer}>
                            <Input inputplaceholder={DATA.fullname} label={Constant.Myaccount.fullname} onChangeText={(text: string) => setDATA({ ...DATA, fullname: text })} maxLength={30} keyboardType={undefined} />
                            <Input inputplaceholder={DATA.Phone} label={Constant.Myaccount.Phone} onChangeText={(text: string) => setDATA({ ...DATA, Phone: text })} keyboardType={"phone-pad"} maxLength={12} />
                            <Input inputplaceholder={DATA.userid} label={Constant.Myaccount.userid} onChangeText={(text: string) => setDATA({ ...DATA, userid: text })} keyboardType={undefined} maxLength={12} />
                            <Input inputplaceholder={DATA.IDCard} label={Constant.Myaccount.IDCard} onChangeText={(text: string) => setDATA({ ...DATA, IDCard: text })} keyboardType={undefined} maxLength={12} />
                            <View style={styles.datepickerconatainer}>
                                <Text style={[FONTS.h4, { paddingVertical: 10 }]}>{Constant.Myaccount.Dob}</Text>
                                <View style={styles.input}>
                                    <TextInput

                                        placeholder={DATA.Dob}
                                        editable={false}
                                        style={styles.textinput}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setOpen(true)}
                                        style={styles.datePickerStyle}
                                    >
                                        <Image source={icon.calender} style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.datepickerconatainer}>
                                <Text style={[FONTS.h4, { paddingVertical: 10 }]}>{Constant.Myaccount.gender}</Text>
                                <View style={styles.input}>
                                    <SelectDropdown
                                        data={Gender}
                                        defaultButtonText={"Select"}
                                        dropdownStyle={{ height: 150 }}
                                        buttonStyle={styles.dropdown2BtnStyle}
                                        dropdownOverlayColor="rba(0,0,0,0)"
                                        onSelect={(selectedItem, index) => {
                                            setDATA({ ...DATA, gender: selectedItem })
                                            console.log(selectedItem, index)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item;
                                        }}

                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={(isOpened) => {
                                            return (<Image source={icon.down_arrow} style={styles.icon} />

                                            );
                                        }}
                                        dropdownIconPosition={"right"}

                                        rowStyle={styles.dropdown1RowStyle}
                                        rowTextStyle={styles.dropdown1RowTxtStyle}
                                    />
                                </View>
                            </View>
                            <Input inputplaceholder={DATA.joined} label={Constant.Myaccount.joined} onChangeText={(text: string) => setDATA({ ...DATA, joined: text })} keyboardType={undefined} maxLength={8} />
                            <Input inputplaceholder={DATA.Email} label={Constant.Myaccount.Email} onChangeText={(text: string) => setDATA({ ...DATA, Email: text })} keyboardType={"email-address"} maxLength={30} />
                            <Input inputplaceholder={DATA.address} label={Constant.Myaccount.address} onChangeText={(text: string) => setDATA({ ...DATA, address: text })} keyboardType={undefined} maxLength={30} />
                            <Text />

                        </View>
                        <View style={styles.buttoncontner}><Abutton OnPress={() => {setifclickedEdit(true),dispachcall()}} title={Constant.Button.save} /></View>
                    </View>

                }

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    maximumDate={new Date("2015-12-31")}
                    mode="date"
                    onConfirm={(date) => {
                        setOpen(false)
                        setDATA({ ...DATA, Dob: datedata })
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />



            </ScrollView>



        </View>
    )
}

export default MyAccount
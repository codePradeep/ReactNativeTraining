import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Constant, icon } from "../../config";
import styles from "./style";

interface PasswordRecoveryprops {
    navigation: any
    isvalid: boolean
    setisvalid: React.Dispatch<React.SetStateAction<boolean>>
    validate:  (text: string) => void
    buttonclicked: () => void
    toggle:boolean
    Data: {
        cardnumber: string;
        Holdername: string;
        expirydate: string;
        cvv: string;
    }
    setData:React.Dispatch<React.SetStateAction<{
        cardnumber: string;
        Holdername: string;
        expirydate: string;
        cvv: string;
    }>>
}

const AddNewCard = (props: PasswordRecoveryprops) => {
    const {
        navigation,
        isvalid,
        setisvalid,
        validate ,toggle,buttonclicked ,Data,setData} = props

    return (

        <View style={styles.mainContainer}>
            <View style={styles.container}>

                <View style={styles.headercontainer}>
                    <View style={styles.headersubcontainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("SettingModel")} >
                            <View style={styles.headerleftimagecontainer}>
                                <Image source={icon.left_arrow} style={styles.headerleftimage} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.HeaderText}>{Constant.screens.Addnewcard}</Text>
                        <View style={styles.HeaderRight} />
                    </View>
                </View>

                <ScrollView>


                    <View style={styles.subcontainer}>
                        <View style={styles.card}>
                            <View>
                            <Text style={styles.Cardnumber}>{Data.Holdername}</Text>
                            <Text style={styles.Cardnumber}>{Data.cardnumber}</Text>
                            </View>
                            <Text style={styles.Cardnumber}>{Data.expirydate}</Text>
                        </View>
                        <View >
                            <Text style={styles.label}>{Constant.AddNewCardscreen.CardNumber}</Text>
                            <View style={styles.textinputcontainer}>
                                <TextInput style={styles.textinput} 
                                onChangeText={(text)=>setData({...Data,cardnumber:text})}
                                keyboardType={"number-pad"}
                                maxLength={16}
                                />
                                <Image source={icon.ok} style={styles.icon} />
                            </View>
                        </View>
                        <View >
                            <Text style={styles.label}>{Constant.AddNewCardscreen.CardHolder}</Text>
                            <View style={styles.textinputcontainer}>
                                <TextInput style={styles.textinput}
                                onChangeText={(text)=>setData({...Data,Holdername:text})}
                                maxLength={25} />
                                <Image source={icon.ok} style={styles.icon} />
                            </View>
                        </View>
                        <View style={styles.twoinputcontainer}>
                            <View >
                                <Text style={styles.label}>{Constant.AddNewCardscreen.date}</Text>
                                <View style={styles.SmallContainer}>
                                    <TextInput
                                     style={styles.dateinput}
                                     onChangeText={(text)=>setData({...Data,expirydate:text})}
                                     keyboardType={"numbers-and-punctuation"}
                                    maxLength={5}
                                     />
                                    <Image source={icon.ok} style={styles.secondicon} />
                                </View>
                            </View>
                            <View >
                                <Text style={styles.label}>{Constant.AddNewCardscreen.Cvv}</Text>
                                <View style={styles.SmallContainer}>
                                    <TextInput style={styles.dateinput}
                                     onChangeText={(text)=>setData({...Data,cvv:text})}
                                    keyboardType={"number-pad"}
                                    maxLength={3}
                                    
                                    />
                                    <Image source={icon.ok} style={styles.secondicon} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.check}>
                            <TouchableOpacity
                            onPress={()=>buttonclicked()}>
                                <Image source={toggle ? icon.rediocheck : icon.rediouncheck} style={styles.redioicon} />
                            </TouchableOpacity>
                            <Text style={styles.checktext}>{Constant.AddNewCardscreen.check}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>{Constant.Button.AddCard}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        </View>
    )
}
export default AddNewCard



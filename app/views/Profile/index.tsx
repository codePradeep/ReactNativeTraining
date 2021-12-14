import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, Modal, Pressable } from "react-native";
import { Coursebutton, Input } from "../../common";
import Logo from "../../common/Logo";
import { styles } from "./style";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


interface loginpageprops {
    navigation: any
}



const Profile = (props: loginpageprops) => {
    const { navigation } = props
    const [modalVisible, setModalVisible] = useState(false);
    const [imageUri, setimageUri] = useState('');
const [imageUriGallary, setimageUriGallary] = useState('');


    const launchLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
   launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
       const source = { uri: response.uri };
       const url =(response.assets)
        // console.log('response', JSON.stringify(response));
        console.log(url)
        setimageUriGallary(response.assets)
      }
    });

  }




    return (
        <View style={{ flex: 1 }}>




<Modal  animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(!modalVisible)}} >
                
                <View style={{flex:1}}>
                  <View style={{flex:0.9}}/>
 
                <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    {/* <Logo/> */}

                                    <Image source={{uri:imageUriGallary}} style={{height:100,width:100,resizeMode:"contain"}}/>
                                    <Coursebutton title="Take Pic"/>
                                    <Pressable style={styles.button}
                                            onPress={() =>console.log()} >
                                            
                                            <Text style={styles.textStyle}>Take Pic</Text>

                                    </Pressable>
                                    <Pressable style={styles.button}
                                            onPress={() =>launchLibrary() } >
                                            
                                            <Text style={styles.textStyle}>Open Gallery</Text>

                                    </Pressable>
                                    
                                   
                                    <Pressable style={styles.button}
                                            onPress={() => setModalVisible(!modalVisible)} >
                                            
                                            <Text style={styles.textStyle}>Cancel</Text>

                                    </Pressable>
                                </View>
                </View>
                </View>
      </Modal>







            <View style={{  justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <TouchableOpacity 
                    onPress={() => setModalVisible(true)}
                    
                    >

                        <View style={{ justifyContent: "center", alignSelf: "center", alignContent: "center" }}>
                            <Logo />
                            <Image source={require('../../assets/camera.png')} style={{ height: 50, width: 40, resizeMode: "contain", position: "absolute", tintColor: "red", alignSelf: "center" }} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "900", }}>Pradeep Kumar Sharma</Text>
                        <Text style={{ fontSize: 15, fontWeight: "500", }}>pradeep.sharma@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 2, width: 5000, backgroundColor: "rgba(0,0,0,0.2)", }} />











        </View>
    )
}
export default Profile;

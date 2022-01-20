import * as React from 'react';
import { View, Text, TouchableOpacity,Image, Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import { DrawerContentScrollView} from '@react-navigation/drawer';
import { COLORS, icon, Screen } from '../../config';
import {DrawerData,userdata} from '../../config/DrawerData';
import style from './style';
import {launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useSelector,useDispatch } from "react-redux";



const CustomDrawer = (props) => {
    const { navigation } = props
    

    const [modalVisible, setModalVisible] = React.useState(false);
    // const [imageUri, setimageUri] = React.useState('');
    // const [imageUriGallary, setimageUriGallary] = React.useState('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');
 

    const dispatch = useDispatch();
       const Profilepic= useSelector(state => state.profile)
       const Userdata= useSelector(state => state.Data)
    //   console.log("pic",Profilepic)
       

const openCamara = () => {
  const options = {
  storageOptions: {
  path: 'images',
  mediaType:'photo',
  },
  includeBase64: true,
  };
  
  launchCamera(options, response => {
  console.log( response);
  if (response.didCancel) {
  console.log('hello');
  } else if (response.error) {
  console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
  console.log('User tapped custom button: ', response.customButton);
  } else {
  // You can also display the image using data:
  // const source = {uri: 'data:image/jpeg;base64,' + response.base64};
  // console.log("camerauri",source.uri)
  // setimageUriGallary(source.uri);
  const source = { uri: response.assets[0].uri};
     
  console.log('response', JSON.stringify(response.assets[0].uri));
  console.log(source)
 // setimageUriGallary(source.uri)
  dispatch({type:'ADD_PROFILE_PIC',payload1:source.uri})
  setModalVisible(false)
  }
  });
  };

  const launchLibrary = () => {
    let options = {
      width: 20,
      height: 20,
      resizeMode:"contain",
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
        Alert.alert(response.customButton);
      } else {
       const source = { uri: response.assets[0].uri};
     
        console.log('response', JSON.stringify(response.assets[0].uri));
        console.log(source)
        dispatch({type:'ADD_PROFILE_PIC',payload1:source.uri})
        // setimageUriGallary(source.uri)
        setModalVisible(false)
      }
    });

  }




    return (
        <View style={style.mainContainer}>
            <View style={style.subcontainer}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()} >
                <Image source={icon.cross} style={style.crossicon} />
            </TouchableOpacity>

            <View style={style.container}>
                <View style={style.imageView}>
                    
                    <TouchableOpacity onPress={()=> setModalVisible(true)} style={style.cameracontainer}>
                    <Image source={{ uri: Profilepic }} style={style.user}/>
                      <Image source={icon.camera}style={style.camera} />
                    </TouchableOpacity>
                </View>
                <View style={style.usertext}>
                    <Text style={style.username}>{Userdata?.fullname}</Text>
                    <Text style={style.email}>{Userdata?.Email}</Text>
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                <View style={style.drawercontainer}>
                    {DrawerData.map((item, key) => {
                        return (<View
                            key={key}
                        >
                            <TouchableOpacity
                            style={style.buttoncontainer}
                                activeOpacity={0.7}
                                onPress={() => navigation.navigate(item.navigationdata)}>
                                    
                                <Image style={style.itemicon}
                                    source={item.icondata} />
                                <Text style={style.buttontext}>{item.title}</Text>
                            </TouchableOpacity>
                            {key==3? <View style={style.itemseperator}><Text /></View>:null}
                        </View>
                        );
                    })}


                </View>

            </DrawerContentScrollView>


            <TouchableOpacity
                style={style.buttoncontainer}
                onPress={()=>navigation.navigate(Screen.OnboradingModel)}
            >
                <Image source={icon.door}  style={style.itemicon}/>
                <Text style={style.buttontext}>Log Out</Text>
            </TouchableOpacity>

            </View>

            <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }} >
          <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
               <View style={style.drawercontainer} />
               
            </TouchableWithoutFeedback>
         

            <View style={style.Modalview}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={icon.wrong} style={style.modalicon}  />
              <Text style={style.modaltext}>Cancel</Text>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={() => openCamara()}>

              <Image source={icon.camera} style={style.modalicon} />
              <Text style={style.modaltext}>Camera</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => launchLibrary()} >
              <Image source={icon.gallery} style={style.modalicon}  />
              <Text  style={style.modaltext}>Gallery</Text>
              </TouchableOpacity>
             
             
            </View>    
           
      </Modal>

        </View>
    );
};

export default CustomDrawer;
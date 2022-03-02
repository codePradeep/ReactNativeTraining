import React, { memo, useState } from "react";
import ProfileScreen from "../views/Profile";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
interface profilemodelprops {
  navigation: any
}
type DefaultRootStat = {
  profile: any
}
const ProfileModel = (props: profilemodelprops) => {
  const { navigation } = props

  const [visible, setvisibe] = useState(false)
  const [render, setrender] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  
  const Profilepic = useSelector<DefaultRootStat>(state => state.profile)




  const openCamara = () => {
    const options: any = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, (response: any) => {
      console.log(response);
      if (response.didCancel) {
        console.log('hello');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };

        dispatch({ type: 'ADD_PROFILE_PIC', payload1: source.uri })
        setModalVisible(false)
      }
    });
  };

  const launchLibrary = () => {
    let options: any = {
      width: 20,
      height: 20,
      resizeMode: "contain",
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response: any) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };

        dispatch({ type: 'ADD_PROFILE_PIC', payload1: source.uri })
        setModalVisible(false)
      }
    });

  }

  const dispachcall = () => {
    dispatch({ type: 'USER_DATA', payload2: render })
  }


  return (
    <ProfileScreen
      {...{
        navigation: navigation,
        visible,
        setvisibe: undefined,
        setrender,
        render,
        modalVisible,
        setModalVisible,
        launchLibrary,
        openCamara,
        imageUriGallary: Profilepic,
        dispachcall
      }}

    />
  )
}
export default memo( ProfileModel);
import React,{useState} from 'react';
import { View, Text, TouchableOpacity,Image, Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import { DrawerContentScrollView} from '@react-navigation/drawer';
import { COLORS, icon, Screen } from '../../config';

import style from './style';



const CustomDrawer = (props) => {
    const { navigation } = props
    const [visible,setvisible]=useState(false)
    



    return (
        <View style={style.mainContainer}>
            <View style={style.subcontainer}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()} >
                <Image source={icon.cross} style={style.crossicon} />
            </TouchableOpacity>

           
            <DrawerContentScrollView {...props}>
                <View style={style.drawercontainer}>
            
                            
                           
                            <TouchableOpacity
                            style={style.buttoncontainer}
                                activeOpacity={0.7}
                                onPress={() => visible? setvisible(false):setvisible(true)}
                                >
                                <Image style={style.itemicon}
                                    source={icon.home} />
                                <Text style={style.buttontext}>Academic</Text>
                               {!visible? <Image style={style.itemicon}
                                    source={icon.down_arrow} />:
                                    <Image style={style.itemicon}
                                    source={icon.uparrow} />}
          </TouchableOpacity>

          {visible?   <View style={{paddingLeft:22}}>
          <TouchableOpacity
                            style={style.buttoncontainer}
                                activeOpacity={0.7}
                                 onPress={() => navigation.navigate("ChangePasswordModel")}
                                >
                               <Image style={style.itemicon}
                                    source={icon.lock} />
                                <Text style={style.buttontext}>Change Password</Text>
                                
                                
          </TouchableOpacity>
          <TouchableOpacity
                            style={style.buttoncontainer}
                                activeOpacity={0.7}
                                 onPress={() => navigation.navigate("SuccessModel")}
                                >
                               <Image style={style.itemicon}
                                    source={icon.star_filled} />
                                <Text style={style.buttontext}>Success Page </Text>
                                
          </TouchableOpacity>
          </View>:null}
          <TouchableOpacity
                            style={style.buttoncontainer}
                                activeOpacity={0.7}
                                //  onPress={() => navigation.navigate("DSettings")}
                                >
                                <Image style={style.itemicon}
                                    source={icon.profile} />
                                <Text style={style.buttontext}>User</Text>
                                <Text />
          </TouchableOpacity>


                </View>

            </DrawerContentScrollView>
            </View>
        </View>
    );
};

export default CustomDrawer;
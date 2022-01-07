import * as React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { DrawerContentScrollView} from '@react-navigation/drawer';
import { COLORS, icon } from '../../config';
import DrawerData from '../../config/DrawerData';
import style from './style';


const CustomDrawer = (props: any) => {
    const { navigation } = props
    return (
        <View style={style.mainContainer}>
            <View style={style.subcontainer}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()} >
                <Image source={icon.cross} style={style.crossicon} />
            </TouchableOpacity>

            <View style={style.container}>
                <Image source={icon.user_avatar} style={style.user}/>
                <View style={style.usertext}>
                    <Text style={style.username}>Username</Text>
                    <Text style={style.email}>EmailID</Text>
                </View>
            </View>







            <DrawerContentScrollView {...props}>
                <View style={style.drawercontainer}>
                    {DrawerData.map((item: any, key: any) => {
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
            >
                <Image source={icon.door}  style={style.itemicon}/>
                <Text style={style.buttontext}>Log Out</Text>
            </TouchableOpacity>

            </View>

        </View>
    );
};

export default CustomDrawer;
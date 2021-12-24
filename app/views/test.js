
import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { ReactNestedMenu } from 'react-nested-menu';

export default function TestScreen() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  const [subvisible, setsubVisible] = useState(false);

  const subhideMenu = () => setsubVisible(false);

  const subshowMenu = () => setsubVisible(true);

  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={<Text onPress={showMenu} style={{color:"black",borderWidth:1}}>Show menu</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={()=>{subshowMenu(),hideMenu()}}>Menu item 1</MenuItem>
        <MenuItem onPress={()=>{subshowMenu(),hideMenu()}}>Menu item 2</MenuItem>
        <MenuItem disabled> Disabled item </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
      </Menu>
      
      <Menu
        visible={subvisible}
        anchor={<View></View>}
        onRequestClose={subhideMenu}
      >
        <MenuItem onPress={hideMenu}>sub menu</MenuItem>
        <MenuItem onPress={hideMenu}>sub menu</MenuItem>
        <MenuItem disabled> sub menu </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
      </Menu>
      
    </View>
  );
}
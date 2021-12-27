
import React, { useState } from 'react';

import { View, Text, Button } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { ReactNestedMenu } from 'react-nested-menu';
import { DATA } from '../config';

export default function TestScreen() {
  
  const data= DATA
  
  const togglebookmark=true
  const toggletitle=false

  const [bookmarkdata, setbookmarkdata] = useState("")

  const [title, settitle] = useState("")

  const Bookmark = ["Bookmarked", "Not Bookmarked"]


  const Checkbookmark = (bookdata) => {
      if (bookdata == 'Bookmarked') {
          return true
      }
      else {
          return false
      }
  }


      const [Fdata,setFdata]=useState([])
      const bookmarklist = data.filter((item) => item.bookmark == Checkbookmark(bookmarkdata)).map(a => a)
      const titiledData = data.filter((item) => item.title == title).map(a => a)
      const titlelist = bookmarklist.filter((item) => item.title == title).map(a => a)
    
    if (togglebookmark==true && toggletitle==false){
       
         setFdata(bookmarklist)
    }
    // else {
        
    //     setFdata(titiledData)
        
    // }
    // if (togglebookmark==false && toggletitle==false){
    //     setFdata(data)}
    // else{
    //     setFdata(titlelist)
    
    //     }
    // if (bookmarkdata==''&& title==''){
    //     setFdata(data)
    // }
    
        console.log("final falt list data====>",Fdata)
    


  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
     <Button title='bookmark' onPress={()=>setbookmarkdata("Bookmarked")} />
     <Button title='notbookmark' onPress={()=>setbookmarkdata("notBookmarked")} />
     <Button title='title ' onPress={()=>settitle("I came in with near zero programming knowledge and halfway in, Im quite confident of what I can achieve")} />
     <Button title='no title' onPress={()=>settitle("")} />
  
      
    </View>
  );
}
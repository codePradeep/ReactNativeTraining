import React, { memo } from "react";
import { Image, Text, View } from "react-native";
import { icons, selectedTheme } from "../../config";
import { discussionsDataModel } from "../../Model/DataModel";
import styles from "./style";

interface Coursediscussionprops{
    navigation:any
    Data:discussionsDataModel[]
    
}

const CourseDiscussion=(props:Coursediscussionprops)=>{
    const {Data,navigation}=props
    return(
        <View style={styles(selectedTheme).maincontainer}>
            <View  style={styles(selectedTheme).Textcontainer}>
                <Image source={Data[0].profile} style={styles(selectedTheme).icon} />
                <View style={styles(selectedTheme).subcontainer}>
        
                    <Text style={styles(selectedTheme).title}>{Data[0].name}</Text>
                    <Text style={styles(selectedTheme).subtitle}>{Data[0].comment}</Text>
                    <View  style={styles(selectedTheme).Saperater}/>
                    <View  style={styles(selectedTheme).CommentStatuscontainer}>
                        <View style={styles(selectedTheme).Textcontainer}>
                            <Image source={icons.Icon.comment} style={styles(selectedTheme).smallicons}/>
                            <Text style={styles(selectedTheme).text}>{Data[0].no_of_comments}</Text>
                        </View>
                        <View style={styles(selectedTheme).Textcontainer}>
                            <Image source={icons.Icon.heart} style={styles(selectedTheme).smallicons}/>
                            <Text style={styles(selectedTheme).text}>{Data[0].no_of_likes}</Text>
                        </View>
                        <Text style={styles(selectedTheme).text}>{Data[0].posted_on}</Text>
                    </View>
                    <View  style={styles(selectedTheme).Saperater}/>
                    
                </View>

            </View>
            <View style={styles(selectedTheme).replys}>
                {Data[0].replies.map((item,index)=>{
                    return(
                        <View key={index}  style={styles(selectedTheme).Textcontainer}>
                <Image source={item.profile} style={styles(selectedTheme).icon} />
                <View style={styles(selectedTheme).subcontainer}>
        
                    <Text style={styles(selectedTheme).title}>{item.name}</Text>
                    <Text style={styles(selectedTheme).subtitle}>{item.comment}</Text>
                    <View  style={styles(selectedTheme).Saperater}/>
                    <View  style={styles(selectedTheme).CommentStatuscontainer}>
                        <View style={styles(selectedTheme).Textcontainer}>
                            <Image source={icons.Icon.reply} style={styles(selectedTheme).smallicons}/>
                            <Text style={styles(selectedTheme).text}>Reply</Text>
                        </View>
                        <View style={styles(selectedTheme).Textcontainer}>
                            <Image source={icons.Icon.heart} style={styles(selectedTheme).smallicons}/>
                            <Text style={styles(selectedTheme).text}>Like</Text>
                        </View>
                        <Text style={styles(selectedTheme).text}>{item.posted_on}</Text>
                    </View>
                    <View  style={styles(selectedTheme).Saperater}/>
                    
                </View>

            </View>

                    )
                })}

            </View>

        </View>
    )
}

export default memo(CourseDiscussion)
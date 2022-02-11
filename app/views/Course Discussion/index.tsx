import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../config";
import styles from "./style";

interface Coursediscussionprops{
    navigation:any
    Data:{
        id: number;
        profile: any;
        name: string;
        no_of_comments: string;
        no_of_likes: string;
        posted_on: string;
        comment: string;
        replies: {
            id: number;
            profile: any;
            name: string;
            posted_on: string;
            comment: string;
        }[];
    }[]
    
}

const CourseDiscussion=(props:Coursediscussionprops)=>{
    const {Data,navigation}=props
    return(
        <View style={styles.maincontainer}>
            <View  style={styles.Textcontainer}>
                <Image source={Data[0].profile} style={styles.icon} />
                <View style={styles.subcontainer}>
        
                    <Text style={styles.title}>{Data[0].name}</Text>
                    <Text style={styles.subtitle}>{Data[0].comment}</Text>
                    <View  style={styles.Saperater}/>
                    <View  style={styles.CommentStatuscontainer}>
                        <View style={styles.Textcontainer}>
                            <Image source={icons.Icon.comment} style={styles.smallicons}/>
                            <Text style={styles.text}>{Data[0].no_of_comments}</Text>
                        </View>
                        <View style={styles.Textcontainer}>
                            <Image source={icons.Icon.heart} style={styles.smallicons}/>
                            <Text style={styles.text}>{Data[0].no_of_likes}</Text>
                        </View>
                        <Text style={styles.text}>{Data[0].posted_on}</Text>
                    </View>
                    <View  style={styles.Saperater}/>
                    
                </View>

            </View>
            <View style={styles.replys}>
                {Data[0].replies.map((item,index)=>{
                    return(
                        <View key={index}  style={styles.Textcontainer}>
                <Image source={item.profile} style={styles.icon} />
                <View style={styles.subcontainer}>
        
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subtitle}>{item.comment}</Text>
                    <View  style={styles.Saperater}/>
                    <View  style={styles.CommentStatuscontainer}>
                        <View style={styles.Textcontainer}>
                            <Image source={icons.Icon.reply} style={styles.smallicons}/>
                            <Text style={styles.text}>Reply</Text>
                        </View>
                        <View style={styles.Textcontainer}>
                            <Image source={icons.Icon.heart} style={styles.smallicons}/>
                            <Text style={styles.text}>Like</Text>
                        </View>
                        <Text style={styles.text}>{item.posted_on}</Text>
                    </View>
                    <View  style={styles.Saperater}/>
                    
                </View>

            </View>

                    )
                })}

            </View>

        </View>
    )
}

export default CourseDiscussion
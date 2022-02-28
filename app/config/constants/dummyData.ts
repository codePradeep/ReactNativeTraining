import { icons } from ".."

const categories = [
    {
        id: 0,
        title: "Mobile Design",
        thumbnail: require("../../assets/images/bg_1.png"),
        icon: require("../../assets/icons/mobile.png")

    },
    {
        id: 1,
        title: "3D Modeling",
        thumbnail: require("../../assets/images/bg_2.png"),
        icon: require("../../assets/icons/model_3d.png")

    },
    {
        id: 2,
        title: "Web Designing",
        thumbnail: require("../../assets/images/bg_3.png"),
        icon: require("../../assets/icons/web_design.png")

    },
    {
        id: 3,
        title: "Illustrations",
        thumbnail: require("../../assets/images/bg_4.png"),
        icon: require("../../assets/icons/illustration.png")
    },
]

const courses_list_1 = [
    {
        id: 0,
        title: "Canava Graphic Design Course - Beginner",
        duration: "2h 30m",
        thumbnail: require("../../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "The Complete Presentation and speech",
        duration: "1h 30m",
        thumbnail: require("../../assets/images/thumbnail_2.png")
    }
]

const courses_list_2 = [
    {
        id: 0,
        title: "The Ultimate Ui/Ux Course Beginner ",
        clsss_level:"Beginner",
        creted_on:"12-12-21",
        duration:30,
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "Canava Graphic Design Course - Beginner",
        clsss_level:"Beginner",
        creted_on:"12-02-2022",
        duration: 40,
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../../assets/images/thumbnail_2.png")
    },
    {
        id: 2,
        title: "The Complete Presentation and speech",
        clsss_level:"Intermediate",
        creted_on:"12-02-2022",
        duration: 50,
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../../assets/images/thumbnail_3.png")
    },
    {
        id: 3,
        title: "The Ultimate React-Native Course  Advanced",
        clsss_level:"Advanced",
        creted_on:"18-02-2022",
        duration: 10,
        instructor: "Varun Sir",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../../assets/images/thumbnail_4.png")
    },
    {
        id: 4,
        title: "The Ultimate Ui/Ux Course Advanced ",
        clsss_level:"Advanced",
        creted_on:"18-02-2022",
        duration: 20,
        instructor: "Varun Sir",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../../assets/images/thumbnail_4.png")
    },
    {
        id: 5,
        title: "The javascript Course Advanced",
        clsss_level:"Advanced",
        creted_on:"18-01-2022",
        duration: 50,
        instructor: "Varun Sir",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../../assets/images/thumbnail_4.png")
    }
]

const top_searches = [
    {
        id: 0,
        label: "Sketch"
    },
    {
        id: 1,
        label: "Modeling"
    },
    {
        id: 2,
        label: "UI/UX"
    },
    {
        id: 3,
        label: "Web"
    },
    {
        id: 4,
        label: "Mobile"
    },
    {
        id: 5,
        label: "Animation"
    },
]

const course_details = {
    id: 0,
    title: "The Ultimate Ui/Ux Course Beginner to Advanced",
    number_of_students: "33.5k Students",
    duration: "2h 30m",
    instructor: {
        name: "ByProgrammers",
        title: "Full Stack Programmer"
    },
    videos: [
        {
            title: "1. Introduction",
            duration: "1:37",
            size: "10 MB",
            progress: "100%",
            is_playing: false,
            is_complete: true,
            is_lock: false,
            is_downloaded: false,
        },
        {
            title: "2. User Interface",
            duration: "1:15:00",
            size: "200 MB",
            progress: "100%",
            is_playing: true,
            is_complete: false,
            is_lock: false,
            is_downloaded: true,
        },
        {
            title: "3. User Experience",
            duration: "1:27:00",
            size: "230 MB",
            progress: "0%",
            is_playing: false,
            is_complete: false,
            is_lock: true,
            is_downloaded: false,
        }
    ],
    students: [
        {
            id: 0,
            name: "Student 1",
            thumbnail: require("../../assets/images/student_1.png")
        },
        {
            id: 1,
            name: "Student 2",
            thumbnail: require("../../assets/images/student_2.png")
        },
        {
            id: 2,
            name: "Student 3",
            thumbnail: require("../../assets/images/student_3.png")
        },
        {
            id: 3,
            name: "Student 3",
            thumbnail: require("../../assets/images/student_3.png")
        }
    ],
    files: [
        {
            id: 0,
            name: "UI Fundamentals",
            author: "Shared by ByProgrammers",
            upload_date: "13th Sep 2021",
            thumbnail: require("../../assets/images/pdf.png")
        },
        {
            id: 1,
            name: "UX Checklist",
            author: "Shared by ByProgrammers",
            upload_date: "11th Sep 2021",
            thumbnail: require("../../assets/images/doc.png")
        },
        {
            id: 2,
            name: "Sketch File",
            author: "Shared by ByProgrammers",
            upload_date: "7th Sep 2021",
            thumbnail: require("../../assets/images/sketch.png")
        }
    ],
    discussions: [
        {
            id: 0,
            profile: require("../../assets/images/profile.png"),
            name: "ByProgrammers",
            no_of_comments: "11 comments",
            no_of_likes: "72 likes",
            posted_on: "5 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 3,
                    profile: require("../../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        },
        {
            id: 1,
            profile: require("../../assets/images/profile.png"),
            name: "ByProgrammers",
            no_of_comments: "21 comments",
            no_of_likes: "372 likes",
            posted_on: "14 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        }
    ]
}

const notificationByDays = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                avatar: require("../../assets/images/student_1.png"),
                name: "Admin",
                created_at: "2h 47m ago",
                message: "Asked to join online courses regarding professional web designing."
            },
            {
                id: 2,
                avatar: require("../../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "3h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
            {
                id: 3,
                avatar: require("../../assets/images/student_3.png"),
                name: "Lilian Ellis",
                created_at: "4h 32m ago",
                message: "Asked assiged you to watch professional videography course."
            }
        ],

    },
    {
        title: "Yesterday",
        data: [
            {
                id: 4,
                avatar: require("../../assets/images/student_1.png"),
                name: "Admin",
                created_at: "16h 47m ago",
                message: "You just signed in from another device check inbox for more details."
            },
            {
                id: 5,
                avatar: require("../../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "20h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
        ],

    },
]

const userSosialData = [
    {
        value: "8.8M",
        label: "Followers"

    },
    {
        value: "1.8K",
        label: "Reviews"

    },
    {
        value: "180M",
        label: "Total Studant"

    }
]

const studentreview= [
    {
        id: 0,
        profile: require("../../assets/images/student_1.png"),
        name: "Pradeep Sharma",
        posted_on: "7 days ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        id: 1,
        profile: require("../../assets/images/student_1.png"),
        name: "Ankint",
        posted_on: "7 days ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        id: 2,
        profile: require("../../assets/images/student_1.png"),
        name: "Shubham",
        posted_on: "7 days ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        id: 3,
        profile: require("../../assets/images/student_1.png"),
        name: "Rahul",
        posted_on: "7 days ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
]

const UserData= [
    {
        id: 0,
        icon:icons.Icon.profile,
        label:"Name",
        Value:"Pradeeep kumar Sharma"
        
    },
    {
        id: 1,
        icon:icons.Icon.email,
        label:"Email",
        Value:"Pradeep@Gmail.com"
    },
    {
        id: 2,
        icon:icons.Icon.lock,
        label:"Password",
        Value:"Updated 2 weeks ago"
    },
    {
        id: 2,
        icon:icons.Icon.call,
        label:"Contact Number",
        Value:"+91 87976133**"
    },

]
const Userdata2=[
    
        {
            id: 0,
            icon:icons.Icon.star,
            label:"Pages",
            
        },
        {
            id: 1,
            icon:icons.Icon.new_icon,
            label:"New Course notification",
            
        },
        {
            id: 2,
            icon:icons.Icon.time,
            label:"Study Reminder",
            
        },
]

const socialConnection=[
    {
        id:0,
        name:"Twitter",
        icon:icons.Icon.twitter,
        Link:"https://www.twitter.com/i/flow/login"
    },
    {
        id:0,
        name:"Linkdin",
        icon:icons.Icon.linkedin,
        Link:"https://www.linkedin.com/in/pradeep-kumar-sharma-0152a11b7"
    },
]

const studentrating=[
    {
        label:"Very Satisfied",
        count:587,
        icons:icons.Icon.happy,
        color:"orange"
    },
    {
        label:"Satisfied",
        count:327,
        icons:icons.Icon.happy,
        color:"skyblue"
    },
    {
        label:"Neutral",
        count:200,
        icons:icons.Icon.neutral,
        color:"blue"
    },
    {
        label:"Poor",
        count:44,
        icons:icons.Icon.sad,
        color:"red"
    },
]
export default {
    categories,
    courses_list_1,
    courses_list_2,
    top_searches,
    course_details,
    notificationByDays,
    studentreview,
    userSosialData,
    UserData,
    Userdata2,
    socialConnection,
    studentrating
}
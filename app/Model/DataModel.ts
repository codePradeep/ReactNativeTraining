
 export interface course_detailsModel {
    id: number;
    title: string;
    number_of_students: string;
    duration: string;
    instructor: {
        name: string;
        title: string;
    };
    videos: {
        title: string;
        duration: string;
        size: string;
        progress: string;
        is_playing: boolean;
        is_complete: boolean;
        is_lock: boolean;
        is_downloaded: boolean;
    }[];
    students: {
        id: number;
        name: string;
        thumbnail: any;
    }[]
    files: {
        id: number;
        name: string;
        author: string;
        upload_date: string;
        thumbnail: any;
    }[]
    discussions:{

    }[]
    
}

export interface discussionsDataModel {
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


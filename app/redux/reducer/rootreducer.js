import {USER_DATA,ADD_PROFILE_PIC} from '../action/type'

const initialState = {
    profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    Data : {
        fullname: "Pradeep Kumar Sharma",
        Phone: "Phone Number",
        userid: "223311",
        IDCard: "Not updated",
        Dob: "Date of Birth",
        gender: "Male",
        joined: "Joind",
        Email: "Pradeep@Pradeep.com",
        address: "Sector 11 Noida,UP"
    }

}


const rootReducer = (state = initialState,action) => {
    console.log("action====>",action)
  
    switch (action.type) {
        case ADD_PROFILE_PIC:
            return { ...state,profile: action.payload1 }
        
        // case ADD_PROFILE_PIC :
        //     //return  Object.assign({}, state, { profile: action.payload })
        //     return {...state,profile:action.payload}
    }
    switch (action.type) {
     
        case USER_DATA:
            return {...state, Data: action.payload2 }
        // case ADD_PROFILE_PIC :
        //     //return  Object.assign({}, state, { profile: action.payload })
        //     return {...state,profile:action.payload}
    }
    return state
}

export default rootReducer;
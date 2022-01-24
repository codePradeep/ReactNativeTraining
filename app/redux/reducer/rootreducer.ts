import {USER_DATA,ADD_PROFILE_PIC} from '../action/type'

const initialState = {
    profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    Data : {
        fullname: "Pradeep Kumar Sharma",
        Phone: "8707613387",
        userid: "223311",
        IDCard: "Not updated",
        Dob: "D15-7-1999",
        gender: "Male",
        joined: "Joind",
        Email: "Pradeep@Pradeep.com",
        address: "Sector 11 Noida,UP"
    }

}

const rootReducer = (state = initialState,action:any) => {
  
    switch (action.type) {
        case ADD_PROFILE_PIC:
            return { ...state,profile: action.payload1 }
  
     
        case USER_DATA:
            return {...state, Data: action.payload2 }
    }
    return state
}

export default rootReducer;
import {DECREASE_COUNTER,INCREASE_COUNTER,ADD_PROFILE_PIC} from '../action/type'


const initialState = {
    profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    // profile:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
}

const rootReducer = (state = initialState,action:any) => {
    console.log(action,"action")
    switch (action.type) {
        case ADD_PROFILE_PIC:
            return { profile: action.payload }
        // case DECREASE_COUNTER:
        //     return { counter: state.counter - 1 }
        // case ADD_PROFILE_PIC :
        //     //return  Object.assign({}, state, { profile: action.payload })
        //     return {...state,profile:action.payload}
    }
    return state
}

export default rootReducer;
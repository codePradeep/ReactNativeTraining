import {DECREASE_COUNTER,INCREASE_COUNTER} from '../action/type'


const initialState = {
    counter: 0
}

const rootReducer = (state = initialState,action:any) => {
    console.log(action,"action")
    switch (action.type) {
        case INCREASE_COUNTER:
            return { counter: state.counter + action.payload }
        case DECREASE_COUNTER:
            return { counter: state.counter - 1 }
    }
    return state
}

export default rootReducer;
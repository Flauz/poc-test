import { DATA_LOADED } from "../Action/action"

const initialState = {
    data: [],
    isLoaded: false
}


function DataReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'DATA_LOADED': 
            state = action.value
            nextState = state
            console.log('HEEERE:', state)
            return nextState || state
        default: return state

    }
}

// function DataReducer(state = initialState, action) {
//     switch (action.type) {
//         case DATA_LOADED:
//             state.data = action.payload
//             state.isLoaded = true
//             console.log("REDUX TEST:", state)
//             return state
//         default: return state
//     }
// }


// function DataReducer(state = initialState, action) {
//     switch (action.type) {
//         case DATA_LOADED:
//             return {
//                 ...state,
//                 data: action.payload,
//                 isLoaded: true
//             }

//         default: return state
//     }
// }


export default DataReducer
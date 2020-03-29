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

export default DataReducer
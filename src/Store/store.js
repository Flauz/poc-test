import {createStore, combineReducers} from 'redux'
import DataReducer from './Reducer/DataReducer'

const store = createStore(DataReducer)


export default store
import axios from "axios"
import {DATA_LOADED} from './action'

const url = "http://localhost:3030/data"

export const getData = () => {
    return dispatch => {
        return axios.get(url)
        .then(res => {
            dispatch({
                type: DATA_LOADED,
                value: res.data
            })
        })
    
    }
}
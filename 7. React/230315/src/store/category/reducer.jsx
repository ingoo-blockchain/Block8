import {CATEGORY_REQUEST_START, CATEGORY_REQUEST_SUCCESS, CATEGORY_REQUEST_ERROR} from './types'

const initialState = {
    loadding:true,
    error:null,
    data:[]
}

export const category = (state = initialState, action) => {
    switch(action.type) {
        case CATEGORY_REQUEST_START:
            return {...state, loadding:true, error:null}
        case CATEGORY_REQUEST_SUCCESS:
            return {...state, loadding:false, error:null, data:action.payload}
        case CATEGORY_REQUEST_ERROR:
            return {...state, loadding:false, error:action.payload.message}
        default:
            return state
    }
}
const intialState = {
    loadding:true,
    error:null,
    data:{
        count: 0
    }
}
                       
export const counter = (state = intialState, action) => {
    switch(action.type) {
        case "COUNTER/SETUP_START":
            return {...state, loadding:true  }
        case "COUNTER/SETUP_SUCCESS":
            return {...state, loadding:false, data: action.payload  }
        case "COUNTER/SETUP_ERROR":
            return {...state, loadding:false, error: action.payload}
        default:
            return state
    }
}


// dispatch({type:'up'})

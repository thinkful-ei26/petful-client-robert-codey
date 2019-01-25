import { FETCH_CAT_SUCCESS, DELETE_CAT_SUCCESS } from '../actions/cat'

const initialState = {
    data: null,
    error: null,
    loading: false
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_CAT_SUCCESS) {
        return Object.assign({}, state, {
            data: action.cat
        });
    }
    else if (action.type === DELETE_CAT_SUCCESS) {
        return Object.assign({}, state, {
            data: null
        });
    }
    
    return state;
}
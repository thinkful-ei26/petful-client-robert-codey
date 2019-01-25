import { FETCH_DOG_SUCCESS, DELETE_DOG_SUCCESS } from '../actions/dog'

const initialState = {
    data: null,
    error: null,
    loading: false
}

export default function dogsReducer(state = initialState, action) {
    if (action.type === FETCH_DOG_SUCCESS) {
      return Object.assign({}, state, {
          data: action.dog
      });
  }
    
  else if (action.type === DELETE_DOG_SUCCESS) {
    return Object.assign({}, state, {
        data: null
    });
}

    return state;
}
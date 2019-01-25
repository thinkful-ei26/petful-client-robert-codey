import {API_BASE_URL} from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    error
});

export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
export const deleteCatSuccess = cat => ({
    type: DELETE_CAT_SUCCESS,
    cat
});

export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';
export const deleteCatError = error => ({
    type: DELETE_CAT_ERROR,
    error
});

export const fetchCat = () => (dispatch) => {
    console.log('fired')
    return fetch(`${API_BASE_URL}/cat`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
           dispatch(fetchCatSuccess(res))
        })
        .catch(err => {
            dispatch(fetchCatError(err));
        });
};

export const deleteCat = () => (dispatch) => {
    return (
        fetch(`${API_BASE_URL}/cat`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then( () => {
                dispatch(deleteCatSuccess());
            })
            .catch(err => {
                dispatch(deleteCatError(err));
            })
    )   
};
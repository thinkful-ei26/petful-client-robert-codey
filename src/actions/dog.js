import {API_BASE_URL} from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
    type: FETCH_DOG_ERROR,
    error
});

export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
export const deleteDogSuccess = dog => ({
    type: DELETE_DOG_SUCCESS,
    dog
});

export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR';
export const deleteDogError = error => ({
    type: DELETE_DOG_ERROR,
    error
});

export const fetchDog = () => (dispatch) => {
    return fetch(`${API_BASE_URL}/dog`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
           dispatch(fetchDogSuccess(res))
        })
        .catch(err => {
            dispatch(fetchDogError(err));
        });
};


export const deleteDog = () => (dispatch) => {
    dispatch(deleteDogSuccess())
    return fetch(`${API_BASE_URL}/dog`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(err => {
                dispatch(deleteDogError(err));
            }) 
};
import React, { useState, useEffect, useReducer } from 'react';
import Axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCECCFUL_FETCHING':
            return {
                loading: false,
                post: action.payload,
                error: '',
            };

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!',
            };

        default:
            return state;
    }
};

const FetchingOne = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                dispatch({ type: 'SUCCECCFUL_FETCHING', payload: response.data });
                console.log(response.data);
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR' });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
};

export default FetchingOne;

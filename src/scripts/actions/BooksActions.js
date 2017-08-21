import axios from 'axios';
import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS } from '../constants/Books';

export function fetchBooks(queryString) {
    return dispatch => {
        dispatch({
            type: FETCHING_BOOKS
        });

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${queryString}`).then(response =>
            dispatch({
                type: FETCHING_BOOKS_SUCCESS,
                payload: response.data.items
            })
        );
    };
}

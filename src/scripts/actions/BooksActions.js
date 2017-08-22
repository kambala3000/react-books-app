import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS } from '../constants/Books';

export function fetchBooks(queryString) {
    return dispatch => {
        dispatch({
            type: FETCHING_BOOKS
        });

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryString}&maxResults=40`)
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: FETCHING_BOOKS_SUCCESS,
                    payload: data.items
                })
            );
    };
}

import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS, SET_OFFSET } from '../constants/Books';

export function fetchBooks(queryString) {
    return dispatch => {
        dispatch({
            type: FETCHING_BOOKS
        });

        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${queryString}&printType=books&maxResults=40`
        )
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: FETCHING_BOOKS_SUCCESS,
                    payload: data.items
                })
            );
    };
}

export function setOffset(offset, page) {
    return {
        type: SET_OFFSET,
        payload: { offset, page }
    };
}

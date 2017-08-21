import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS } from '../constants/Books';

const initialState = {
    list: [],
    fetching: false
};

export default function books(state = initialState, action) {
    switch (action.type) {
        case FETCHING_BOOKS:
            return { ...state, fetching: true };
        case FETCHING_BOOKS_SUCCESS:
            return { ...state, list: action.payload, fetching: false };
        default:
            return state;
    }
}

import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS, SET_OFFSET } from '../constants/Books';

const initialState = {
    list: [],
    fetching: false,
    page: 0,
    offset: 0
};

export default function books(state = initialState, action) {
    switch (action.type) {
        case FETCHING_BOOKS:
            return { ...state, fetching: true };
        case FETCHING_BOOKS_SUCCESS:
            return { ...state, list: action.payload, fetching: false, offset: 0, page: 0 };
        case SET_OFFSET:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

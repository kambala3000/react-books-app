import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constants/Favorites';

const initialState = localStorage['favorites'] ? JSON.parse(localStorage['favorites']) : [];

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...state, action.payload];
        case REMOVE_FROM_FAVORITES:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constants/Favorites';

export function addToFavorites(item) {
    return {
        type: ADD_TO_FAVORITES,
        payload: item
    };
}

export function removeItem(id) {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: id
    };
}

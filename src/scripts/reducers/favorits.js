import { ADD_TO_FAVORITS, REMOVE_FROM_FAVORITS } from '../constants/Favorits';

const initiaState = [];

export default function favorits(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITS:
            return [...state, action.payload];
        case REMOVE_FROM_FAVORITS:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

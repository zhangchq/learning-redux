import { CLEAR_FILTER, SET_FILTER } from "../actionTypes"

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER,
    };
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter,
    };
}
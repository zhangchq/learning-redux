import { CREATE_POST, DELETE_POST, EDIT_POST } from "../actionTypes";

export default function postsReducer (state = [], action) {

    switch(action.type) {
        case CREATE_POST: {
            const { type, post } = action;
            const ts = Date.now();

            return [
                ...state,
                {...post, created: ts, updated: ts},
            ]
        }

        case DELETE_POST: {
            const { type, id } = action;

            return state.filter((post, index) => action.id !== index);
        }

        case EDIT_POST: {
            const { type, id, post } = action;
            return state.map((oldPost, index) => 
                action.id === index ? { ...oldPost, post, updated: ts, } : oldPost);
        }

        default:
            return state;
    }
}
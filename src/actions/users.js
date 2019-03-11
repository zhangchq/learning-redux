import { CREATE_USER } from "../actionTypes";

export const createUser = (userName, realName) => {
    return {
        type: CREATE_USER,
        userName,
        realName,
    };
}
import { combineReducers } from "redux";

import filterReducer from "./filter";
import postsReducer from "./posts";
import usersReducer from "./users";

const appReducer = combineReducers({
    filter: filterReducer,
    posts: postsReducer,
    users: usersReducer,
});

export default appReducer;
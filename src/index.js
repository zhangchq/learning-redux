import appReducer from './reducers';
import { compose, createStore } from 'redux';
import { createUser, createPost } from './actions';
import React from "react";
import ReactDOM from "react-dom";
import { persistState } from "redux-devtools";
import App from "./components/App";
import DevTools from "./containers/DevTools";

const enhancer = compose(DevTools.instrument(), persistState(getSessionKey()));
let store = createStore(appReducer, {}, enhancer);

const initialState = store.getState();

if (!initialState.users || initialState.users.length === 0) {
    store.dispatch(createUser("rickz", "Rick Zhang"));
    store.dispatch(createUser("emily", "Emily"));
}

if (!initialState.posts || initialState.posts.length === 0) {
    store.dispatch(createPost("rickz", {
        title: "Hello",
        text: "Hello world! first post",
        category: "greeting",
    }));
    store.dispatch(createPost("emily", {
        title: "test",
        text: "Test, second post",
        category: "test",
    }));
}

console.log("initial state: ", store.getState());

store.subscribe(() => console.log("state changed: ", store.getState()));

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);

function getSessionKey() {
    const matches = window.location.href.match(/[?&]debug=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
}
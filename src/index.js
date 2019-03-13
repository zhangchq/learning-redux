import { createUser, createPost } from './actions';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store";

let store = configureStore();

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


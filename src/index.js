import appReducer from './reducers';
import { createStore } from 'redux';
import { createUser, createPost } from './actions';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ConnectedPostList from "./containers/ConnectedPostList";

let store = createStore(appReducer);

store.dispatch(createUser("rickz", "Rick Zhang"));
store.dispatch(createUser("emily", "Emily"));

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

console.log("initial state: ", store.getState());

store.subscribe(() => console.log("state changed: ", store.getState()));

const App = () => 
    <Provider store={store}>
        <ConnectedPostList />
    </Provider>

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
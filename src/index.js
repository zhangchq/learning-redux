import { createPost, editPost, setFilter } from './actions';
import { createStore } from 'redux';
import appReducer from './reducers';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ConnectedPostList from "./containers/ConnectedPostList";

let store = createStore(appReducer);

store.dispatch(createPost("Rick", {title: "hi", text: "Hello world!"}));

setTimeout(() => store.dispatch(createPost("Emily", {title: "hi", text: "nice day"})), 1000);

const App = () => 
    <Provider store={store}>
        <ConnectedPostList />
    </Provider>

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
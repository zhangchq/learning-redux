import { createPost, editPost, setFilter } from './actions';
import { createStore } from 'redux';
import appReducer from './reduces';
import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedPostList from './containers/ConnectedPostList';

let store = createStore(appReducer);

store.dispatch(createPost('Rick', 'Hello world!'));

setTimeout(() => store.dispatch(createPost('Emily', 'hi!')), 1000);

ReactDOM.render(
    <ConnectedPostList store={store} />, 
    document.getElementById('root')
);
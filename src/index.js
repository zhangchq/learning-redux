import { createPost, editPost, setFilter } from './actions';
import { createStore } from 'redux';
import appReducer from './reduces';
import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';

ReactDOM.render(<Post user="Rick" text="hello world!" />, document.getElementById('root'));
import { createPost, editPost, setFilter } from './actions';
import { createStore } from 'redux';
import appReducer from './reduces';
import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = ({ name }) => (
    <h1>
        Hello { name }!
    </h1>
);

const App = () => (
    <>
    <Greeting name='Rick' />
    <Greeting name='Emily' />
    </>
);

ReactDOM.render(<App />, document.getElementById('root'));
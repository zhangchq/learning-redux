import { createPost, editPost, setFilter } from './actions';
import { createStore } from 'redux';
import appReducer from './reduces';
import React from 'react';
import ReactDOM from 'react-dom';


// let store = createStore(appReducer);

// const root = document.getElementById('root');
// const render = () => {
//     root.innerHTML = '';

//     const { posts } = store.getState();
//     posts.forEach((post, index) => {
//         const item = document.createElement('li');
//         const text = document.createTextNode(post.user + ' - ' + post.text);
//         item.addEventListener('click', ()  => {
//             store.dispatch(editPost(index, post.text + '!'));
//         })
//         item.appendChild(text);
//         root.appendChild(item);
//     })
// }

// const stopRender = store.subscribe(render);

// store.dispatch(createPost('rick', 'hello world'));
// store.dispatch(createPost('roth', 'second post'));


ReactDOM.render(
    React.createElement('h1', {}, 'Hello world!'),
    document.getElementById('root')
);



import './index.css';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { addPost, RootStateType, updateNewPostText } from './redux/state';



export const rerenderEntireTree = () => {

    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );

}


rerenderEntireTree();

subscribe(rerenderEntireTree)
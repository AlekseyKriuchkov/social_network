import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

export type PostType = {
    id: number,
    message: string,
    likes: number,
}
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string,
}



ReactDOM.render(
    <App postsData={state.postsData} dialogsData={state.dialogsData} messagesData={state.messagesData}/>,
  document.getElementById('root')
);
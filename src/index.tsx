import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


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

let postsData: Array<PostType> = [
    {id: 1, message: "Hello", likes: 5},
    {id: 2, message: "How are you?", likes: 7},
    {id: 3, message: "Bye Bye", likes: 11},
]
let dialogsData: Array<DialogType> = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Дедущка"},
    {id: 3, name: "Nikolya"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Tatiana"},
    {id: 6, name: "Eve"},
]
let messagesData: Array<MessageType> = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "I'm fun!"},
    {id: 4, message: "Bye!"},
]

ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);
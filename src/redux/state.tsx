import {DialogType, MessageType, PostType} from "../index";

type StateType = {
    postsData: Array<PostType>
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

export const state: StateType = {
    postsData: [
        {id: 1, message: "Hello", likes: 5},
        {id: 2, message: "How are you?", likes: 7},
        {id: 3, message: "Bye Bye", likes: 11},
    ],
    dialogsData: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Дедущка"},
        {id: 3, name: "Nikolya"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Tatiana"},
        {id: 6, name: "Eve"},
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fun!"},
        {id: 4, message: "Bye!"},
    ]
}
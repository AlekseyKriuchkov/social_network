import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {DialogType, MessageType, PostType} from "./index";

type AppPropsType = {
    postsData: Array<PostType>
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
        <div className = "app-wrapper">
            <Header />
            <NavBar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/> }/>
                <Route path="/profile" render={() => <Profile postsData={props.postsData}/> } />
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

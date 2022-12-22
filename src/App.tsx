import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Mypost} from "./components/Profile/MyPosts/Mypost";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";

function App() {
  return (
    <BrowserRouter>
        <div className = "app-wrapper">
            <Header />
            <NavBar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

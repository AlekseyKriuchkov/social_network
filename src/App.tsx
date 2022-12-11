import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Mypost} from "./components/Profile/MyPosts/Mypost";

function App() {
  return (
    <div className = "app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;

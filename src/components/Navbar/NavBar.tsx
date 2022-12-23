import navbar from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const NavBar = ()=>{
    return (
        <div className={navbar.navbar}>
            <div className={navbar.item}><NavLink to="/Profile" activeClassName={navbar.active}>Profile</NavLink></div>
            <div className={navbar.item}><NavLink to="/Dialogs" activeClassName={navbar.active}>Dialogs</NavLink></div>
            <div className={navbar.item}><NavLink to="/News" activeClassName={navbar.active}>News</NavLink></div>
            <div className={navbar.item}><NavLink to="/Music" activeClassName={navbar.active}>Music</NavLink></div>
        </div>
    )
}